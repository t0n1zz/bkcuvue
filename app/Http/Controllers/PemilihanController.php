<?php

namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Image;
use App\Aktivis;
use App\Pemilihan;
use App\PemilihanCalon;
use App\PemilihanCalonCount;
use App\PemilihanSuara;
use App\PemilihanSuaraAkses;
use App\Support\Helper;
use Illuminate\Http\Request;
use App\Support\NotificationHelper;
use App\Events\PemilihanEvent;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\PemilihanSuaraImport;

class PemilihanController extends Controller
{

	protected $message = "Pemilihan";

	public function index()
	{
		$table_data = Pemilihan::with('cu')->withCount('hasCalon')->withCount('hasSuara')->advancedFilter();

		foreach ($table_data as $t) {
			$t->tingkat = $this->checkTingkat($t->tingkat);
		}

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexCu($id)
	{
		$table_data = Pemilihan::withCount('hasCalon')->where('id_cu', $id)->withCount('hasSuara')->advancedFilter();

		foreach ($table_data as $t) {
			$t->tingkat = $this->checkTingkat($t->tingkat);
		}

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexPemilihan()
	{
		$table_data = Pemilihan::get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexPemilihanCu($cu)
	{
		$table_data = Pemilihan::where('id_cu', $cu)->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}


	public function indexCalon($name)
	{
		$table_data = [];
		$form = '';
		$suaras = PemilihanSuara::where('name', $name)->get();

		foreach ($suaras as $suara) {
			$pemilihan = Pemilihan::with('cu', 'calon.pekerjaan_aktif.cu', 'calon.pendidikan_tertinggi')->where('id', $suara->pemilihan_id)->where('status', 1)->first();

			if ($pemilihan) {
				$table_data = $pemilihan;
				$form = PemilihanSuara::with('calon.aktivis.pekerjaan_aktif.cu', 'calon.aktivis.pendidikan_tertinggi')->where('name', $name)->where('pemilihan_id', $pemilihan->id)->first();

				$pemilihanSuaraAkses = PemilihanSuaraAkses::where('pemilihan_suara_id', $form->id)->where('pemilihan_id', $pemilihan->id)->first();

				if (!$pemilihanSuaraAkses) {
					PemilihanSuaraAkses::create([
						'pemilihan_id' => $pemilihan->id,
						'pemilihan_suara_id' => $form->id,
					]);
				}
			}
		}

		return response()
			->json([
				'model' => $table_data,
				'form' => $form
			]);
	}

	public function indexSuara($id)
	{
		$table_data = PemilihanCalon::with('aktivis.pekerjaan_aktif.cu', 'aktivis.pendidikan_tertinggi')->where('pemilihan_id', $id)->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexCalonTerpilih($id)
	{
		$table_data = PemilihanCalonCount::with('calon.aktivis.pekerjaan_aktif.cu', 'calon.aktivis.pendidikan_tertinggi')->where('pemilihan_suara_id', $id)->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexDataSuara($id)
	{
		$table_data = PemilihanSuara::with('akses', 'calon_count.calon.aktivis')->where('pemilihan_id', $id)->advancedFilter();

		foreach ($table_data as $t) {
			$t->link = url('') . '/admins/pemilihan/pilih/' .  $t->name;

			$t->calon_pilih = '';
			$t->pemilihan_calon_id = '';
			if ($t->calon_count) {
				foreach ($t->calon_count as $tc) {
					$t->calon_pilih = $t->calon_pilih . ' / ' . $tc->calon->aktivis->name;
					$t->pemilihan_calon_id = $t->pemilihan_calon_id . ' / ' . $tc->calon->aktivis_id;
				};
			}
		}

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function checkUser($pemilihan_id)
	{
		$user_id = Auth::user()->id_cu;
		$table_data = PemilihanSuara::where('pemilihan_id', $pemilihan_id)->where('user_id', $user_id)->first();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
				'form' => Pemilihan::initialize(),
				'rules' => Pemilihan::$rules,
				'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request, Pemilihan::$rules);

		$name = $request->name;
		$suara = str_replace(',', '', $request->suara);

		if ($request->sumberSuara == 0) {
			$kelas = Pemilihan::create($request->except('status', 'suara') + [
				'status' => '0',
				'suara' => $suara
			]);

			if ($request->suara_tipe == 0) {
				for ($x = 1; $x <= $request->suara; $x++) {
					PemilihanSuara::create([
						'pemilihan_id' => $kelas->id,
						'name' => bin2hex(random_bytes(4))
					]);
				}
			}
		} else {
			$kelasPemilihan = Pemilihan::findOrFail($request->sumberSuara);
			$suara = $kelasPemilihan->suara;

			$kelas = Pemilihan::create($request->except('status', 'suara') + [
				'status' => '0',
				'suara' => $suara
			]);

			$kelasSuara = PemilihanSuara::where('pemilihan_id', $kelasPemilihan->id)->get();

			foreach ($kelasSuara as $dataSuara) {
				PemilihanSuara::create([
					'pemilihan_id' => $kelas->id,
					'name' => $dataSuara->name
				]);
			}
		}

		if ($request->calon) {
			$calonArray = array();

			foreach ($request->calon as $calon) {
				$calonArray[$calon['aktivis_id']] = [
					'skor' => 0,
					'no_urut' => $calon['no_urut'],
					'pengusung_cu_id' => $calon['pengusung_cu_id']
				];
			}

			$kelas->calon()->sync($calonArray);
		}

		return response()
			->json([
				'saved' => true,
				'message' => $this->message . ' ' . $name . ' berhasil ditambah',
				'id' => $kelas->id
			]);
	}

	public function storeSuara(Request $request)
	{
		$pemilihan = Pemilihan::findOrFail($request->pemilihan_id);
		if ($pemilihan->suara_ok > 0) {
			return response()
				->json([
					'saved' => false,
					'message' => 'Maaf anda tidak bisa melakukan penambahan suara ketika sudah ada suara yang masuk'
				]);
		}

		$countPemilihanSuara = 0;
		if ($pemilihan) {
			$countPemilihanSuara = $pemilihan->suara;
		}

		$countSuara = PemilihanSuara::where('pemilihan_id', $request->pemilihan_id)->count();
		if ($countSuara < $pemilihan->suara) {
			$suaraDuplicate = PemilihanSuara::where('name', $request->name)->count();

			if ($suaraDuplicate == 0) {
				PemilihanSuara::create($request->all());

				return response()
					->json([
						'saved' => true,
						'message' => 'Suara dengan kode ' . $request->name . ' berhasil ditambah'
					]);
			} else {
				return response()
					->json([
						'saved' => false,
						'message' => 'Maaf suara dengan kode ' . $request->name . ' sudah pernah digunakan.'
					]);
			}
		} else {
			return response()
				->json([
					'saved' => false,
					'message' => 'Maaf tidak bisa menambahkan suara lagi karena sudah mencapai jumlah maksimum suara untuk pemilihan ini.'
				]);
		}
	}

	public function storePilihan(Request $request)
	{
		$pemilihan = Pemilihan::findOrFail($request->pemilihan_id);

		if ($pemilihan->status == 1) {
			$cekSuara = PemilihanSuara::where('pemilihan_id', $request->pemilihan_id)->where('name', $request->name)->where('pemilihan_calon_id', null)->first();

			if ($cekSuara) {
				\DB::beginTransaction();
				try {
					PemilihanCalonCount::create([
						'pemilihan_id' => $request->pemilihan_id,
						'pemilihan_calon_id' => $request->pemilihan_calon_id,
						'pemilihan_suara_id' => $cekSuara->id
					]);

					$calonCount = PemilihanCalonCount::where('pemilihan_calon_id', $request->pemilihan_calon_id)->count();
					$kelasCalon = PemilihanCalon::findOrFail($request->pemilihan_calon_id);
					// $kelasCalon->skor = $calonCount;
					// $kelasCalon->update();

					$cekSuara->pemilihan_calon_id = $request->pemilihan_calon_id;
					$cekSuara->update();

					// $suaraOk = PemilihanSuara::where('pemilihan_id',$request->pemilihan_id)->whereNotNull('pemilihan_calon_id')->count();
					// $pemilihan->suara_ok = $suaraOk;
					// $pemilihan->update();

					event(new PemilihanEvent($calonCount, $pemilihan->id, $kelasCalon->id));

					Aktivis::flushCache();

					\DB::commit();
					return response()
						->json([
							'saved' => true,
							'message' => 'Pemilihan telah berhasil dilakukan.',
						]);
				} catch (\Exception $e) {
					\DB::rollBack();
					abort(500, $e->getMessage());
				}
			} else {
				return response()
					->json([
						'saved' => false,
						'message' => 'Maaf, anda sudah melakukan pemilihan'
					]);
			}
		} else {
			return response()
				->json([
					'saved' => false,
					'message' => 'Maaf, pemilihan belum aktif'
				]);
		}
	}

	public function storeMultiPilihan(Request $request)
	{
		$suara = $request->all();
		$singleSuara = $suara[0];

		$pemilihan = Pemilihan::findOrFail($singleSuara['pemilihan_id']);

		if ($pemilihan->status == 1) {
			$cekSuara = PemilihanSuara::where('pemilihan_id', $singleSuara['pemilihan_id'])->where('name', $singleSuara['name'])->first();
			$cekCount = PemilihanCalonCount::where('pemilihan_id', $singleSuara['pemilihan_id'])->where('pemilihan_suara_id', $cekSuara->id)->first();

			if (!$cekCount) {
				\DB::beginTransaction();
				try {
					foreach ($suara as $a) {

						PemilihanCalonCount::create([
							'pemilihan_id' => $a['pemilihan_id'],
							'pemilihan_calon_id' => $a['pemilihan_calon_id'],
							'pemilihan_suara_id' => $cekSuara->id
						]);

						$calonCount = PemilihanCalonCount::where('pemilihan_calon_id', $a['pemilihan_calon_id'])->count();
						$kelasCalon = PemilihanCalon::findOrFail($a['pemilihan_calon_id']);
						$kelasCalon->skor = $calonCount;
						$kelasCalon->update();

						$cekSuara->pemilihan_calon_id = $a['pemilihan_calon_id'];
						$cekSuara->update();

						$suaraOk = PemilihanSuara::where('pemilihan_id', $a['pemilihan_id'])->whereNotNull('pemilihan_calon_id')->count();
						$pemilihan->suara_ok = $suaraOk;
						$pemilihan->update();

						event(new PemilihanEvent($calonCount, $pemilihan->id, $kelasCalon->id));
					}
					Aktivis::flushCache();
					\DB::commit();
					return response()
						->json([
							'saved' => true,
							'message' => 'Pemilihan telah berhasil dilakukan.',
						]);
				} catch (\Exception $e) {
					\DB::rollBack();
					abort(500, $e->getMessage());
				}
			} else {
				return response()
					->json([
						'saved' => false,
						'message' => 'Maaf, anda sudah melakukan pemilihan'
					]);
			}
		} else {
			return response()
				->json([
					'saved' => false,
					'message' => 'Maaf, pemilihan belum aktif'
				]);
		}
	}

	public function edit($id)
	{
		$kelas = Pemilihan::with('calon.pekerjaan_aktif.cu', 'calon.pendidikan_tertinggi', 'cu')->findOrFail($id);

		foreach ($kelas->calon as $t) {
			$calonCount = PemilihanCalonCount::where('pemilihan_calon_id', $t->pivot->id)->count();

			$kelasCalon = PemilihanCalon::findOrFail($t->pivot->id);
			$kelasCalon->skor = $calonCount;
			$kelasCalon->update();

			$t->skor = $calonCount;
		}

		$suara_ok = PemilihanSuara::where('pemilihan_id', $id)->whereNotNull('pemilihan_calon_id')->count();
		$suara_akses = PemilihanSuaraAkses::where('pemilihan_id', $id)->count();
		$kelas->suara_ok = $suara_ok;
		$kelas->suara_akses = $suara_akses;
		$kelas->update();

		$kelas->tingkat = $this->checkTingkat($kelas->tingkat);

		Aktivis::flushCache();

		return response()
			->json([
				'form' => $kelas,
				'option' => []
			]);
	}

	public function updateStatus($id, $cu)
	{
		$kelas = Pemilihan::findOrFail($id);

		if ($kelas->status == 1) {
			$kelas->status  = 0;
		} else {
			$kelas->status  = 1;
			Pemilihan::where('id_cu', $cu)->where('id', '!=', $kelas->id)->update(['status' => 0]);
		}

		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => "Status berhasil diubah"
			]);
	}

	public function updateSuara(Request $request, $id)
	{
		$kelas = PemilihanSuara::findOrFail($id);

		$pemilihan = Pemilihan::findOrFail($kelas->pemilihan_id);
		if ($pemilihan->suara_ok > 0) {
			return response()
				->json([
					'saved' => false,
					'message' => 'Maaf anda tidak bisa melakukan penambahan suara ketika sudah ada suara yang masuk'
				]);
		}

		$kelas->name = $request->name;
		$kelas->id_cu = $request->id_cu;

		$suaraDuplicate = PemilihanSuara::where('name', $request->name)->count();

		if ($suaraDuplicate == 0) {
			$kelas->update();

			return response()
				->json([
					'saved' => true,
					'message' => "Suara berhasil diubah"
				]);
		} else {
			return response()
				->json([
					'saved' => false,
					'message' => 'Maaf suara dengan kode ' . $request->name . ' sudah pernah digunakan.'
				]);
		}
	}

	public function destroy($id)
	{
		$kelas = Pemilihan::findOrFail($id);
		$name = $kelas->name;

		$kelas->calon()->sync([]);

		$kelas->delete();

		PemilihanSuara::where('pemilihan_id', $kelas->id)->delete();
		PemilihanCalonCount::where('pemilihan_id', $kelas->id)->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message . ' ' . $name . 'berhasil dihapus'
			]);
	}

	public function destroySuara($id)
	{
		$kelas = PemilihanSuara::findOrFail($id);

		$pemilihan = Pemilihan::findOrFail($kelas->pemilihan_id);
		if ($pemilihan->suara_ok > 0) {
			return response()
				->json([
					'saved' => false,
					'message' => 'Maaf anda tidak bisa melakukan penambahan suara ketika sudah ada suara yang masuk'
				]);
		}

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Suara berhasil dihapus'
			]);
	}

	public function uploadSuara(Request $request, $id)
	{
		$pemilihan = Pemilihan::findOrFail($id);
		if ($pemilihan->suara_ok > 0) {
			return response()
				->json([
					'uploaded' => false,
					'message' => 'Maaf anda tidak bisa melakukan penambahan suara ketika sudah ada suara yang masuk'
				]);
		}

		$countPemilihanSuara = 0;
		if ($pemilihan) {
			$countPemilihanSuara = $pemilihan->suara;
		}

		$data = [
			'pemilihan_id' => $id,
			'countPemilihanSuara' => $countPemilihanSuara,
		];

		Excel::import(new PemilihanSuaraImport($data), request()->file('file'));

		return response()
			->json([
				'uploaded' => true,
				'message' => 'Suara berhasil di upload, apabila ada suara yang tidak masuk maka silahkan periksa apakah ada potensi kode suara sama atau sudah melebihi batas maximum suara. Dan anda dapat menambahkan secara manual untuk suara yang kurang tersebut.'
			]);
	}

	public function countCalon($id)
	{
		$table_data = PemilihanCalon::where('pemilihan_id', $id)->count();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function countSuara($id)
	{
		$table_data = PemilihanSuara::where('pemilihan_id', $id)->count();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function checkTingkat($value)
	{
		if ($value == 1) {
			$value = 'Pengurus';
		} else if ($value == 2) {
			$value = 'Pengawas';
		} else if ($value == 3) {
			$value = 'Komite';
		} else if ($value == 4) {
			$value = 'Penasihat';
		} else if ($value == 5) {
			$value = 'Senior Manajer';
		} else if ($value == 6) {
			$value = 'Manajer';
		} else if ($value == 7) {
			$value = 'Supervisor';
		} else if ($value == 8) {
			$value = 'Staf';
		} else if ($value == 9) {
			$value = 'Kontrak';
		} else if ($value == 10) {
			$value = 'Kolektor';
		} else if ($value == 11) {
			$value = 'Kelompok Inti';
		} else {
			$value = '-';
		}

		return $value;
	}
}
