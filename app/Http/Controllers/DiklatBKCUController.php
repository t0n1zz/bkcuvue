<?php

namespace App\Http\Controllers;

use DB;
use File;
use Image;
use App\Kegiatan;
use App\Support\Helper;
use App\KegiatanPanitia;
use App\KegiatanPeserta;
use Illuminate\Http\Request;
use App\Support\NotificationHelper;
use Auth;

class DiklatBKCUController extends Controller
{

	protected $imagepath = 'images/diklat/';
	protected $width = 300;
	protected $height = 200;
	protected $message = "Diklat";
	protected $tipe = "diklat_bkcu";

	public function index()
	{
		$table_data = Kegiatan::with('tempat', 'sasaran', 'Regencies', 'Provinces')->withCount('hasPeserta')->where('tipe', $this->tipe)->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexPeriode($periode)
	{
		$table_data = Kegiatan::with('tempat', 'sasaran', 'Regencies', 'Provinces')->withCount('hasPeserta')->where('tipe', $this->tipe)->where('periode', $periode)->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexBaru()
	{
		$periode = Kegiatan::distinct('periode')->orderBy('periode', 'desc')->pluck('periode')->first();
		$now = \Carbon\Carbon::now()->format('Y-m-d');

		$table_data = Kegiatan::with('tempat', 'sasaran', 'Regencies')->where('tipe', $this->tipe)->where('periode', $periode)->whereIn('status', [1, 2])->orderBy('created_at', 'desc')->take(6)->get();

		$countMulai = Kegiatan::where('tipe', $this->tipe)->where('periode', $periode)->whereIn('status', [1, 2])->where('mulai', '>', $now)->orderBy('mulai', 'asc')->count();

		$countBuka = Kegiatan::where('tipe', $this->tipe)->where('periode', $periode)->where('status', 2)->count();

		$countJalan = Kegiatan::where('tipe', $this->tipe)->where('periode', $periode)->where('status', 4)->count();

		return response()
			->json([
				'model' => $table_data,
				'countMulai' => $countMulai,
				'countBuka' => $countBuka,
				'countJalan' => $countJalan
			]);
	}

	public function indexMulai()
	{
		$periode = Kegiatan::distinct('periode')->orderBy('periode', 'desc')->pluck('periode')->first();

		$now = \Carbon\Carbon::now()->format('Y-m-d');

		$table_data = Kegiatan::with('tempat', 'sasaran', 'Regencies')->where('tipe', $this->tipe)->where('periode', $periode)->whereIn('status', [1, 2])->where('mulai', '>', $now)->orderBy('mulai', 'asc')->take(6)->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexBuka()
	{
		$periode = Kegiatan::distinct('periode')->orderBy('periode', 'desc')->pluck('periode')->first();

		$table_data = Kegiatan::with('tempat', 'sasaran', 'Regencies')->where('tipe', $this->tipe)->where('periode', $periode)->where('status', 2)->take(6)->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexJalan()
	{
		$periode = Kegiatan::distinct('periode')->orderBy('periode', 'desc')->pluck('periode')->first();

		$table_data = Kegiatan::with('tempat', 'sasaran', 'Regencies')->where('tipe', $this->tipe)->where('periode', $periode)->where('status', 4)->take(6)->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexPeserta($id)
	{
		$table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu', 'aktivis.pendidikan_tertinggi')->where('kegiatan_id', $id)->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexPesertaCu($id, $cu)
	{
		$table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu', 'aktivis.pendidikan_tertinggi')->where('kegiatan_id', $id)->whereHas('aktivis.pekerjaan', function ($query) use ($cu) {
			$query->where('tipe', '1')->where('id_tempat', $cu);
		})->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexPesertaTerdaftar($cu)
	{
		if ($cu == 0) {
			$table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu', 'kegiatan')->where('status', '2')->take(6)->get();

			$countMenunggu = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu')->where('status', '1')->count();
			$countIkut = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu')->where('status', '4')->count();
			$countBatal = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu')->where('status', '6')->count();
		} else {
			$table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu', 'kegiatan')->whereHas('aktivis.pekerjaan', function ($query) use ($cu) {
				$query->where('tipe', '1')->where('id_tempat', $cu);
			})->where('status', '2')->take(6)->get();

			$countMenunggu = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu')->whereHas('aktivis.pekerjaan', function ($query) use ($cu) {
				$query->where('tipe', '1')->where('id_tempat', $cu);
			})->where('status', '1')->count();

			$countIkut = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu')->whereHas('aktivis.pekerjaan', function ($query) use ($cu) {
				$query->where('tipe', '1')->where('id_tempat', $cu);
			})->where('status', '4')->count();

			$countBatal = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu')->whereHas('aktivis.pekerjaan', function ($query) use ($cu) {
				$query->where('tipe', '1')->where('id_tempat', $cu);
			})->where('status', '6')->count();
		}

		return response()
			->json([
				'model' => $table_data,
				'countMenunggu' => $countMenunggu,
				'countIkut' => $countIkut,
				'countBatal' => $countBatal,
			]);
	}

	public function indexPesertaMenunggu($cu)
	{
		if ($cu == 0) {
			$table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu', 'kegiatan')->where('status', '1')->take(6)->get();
		} else {
			$table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu', 'kegiatan')->whereHas('aktivis.pekerjaan', function ($query) use ($cu) {
				$query->where('tipe', '1')->where('id_tempat', $cu);
			})->where('status', '1')->take(6)->get();
		}

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexPesertaBerjalan($cu)
	{
		if ($cu == 0) {
			$table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu', 'kegiatan')->where('status', '4')->take(6)->get();
		} else {
			$table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu', 'kegiatan')->whereHas('aktivis.pekerjaan', function ($query) use ($cu) {
				$query->where('tipe', '1')->where('id_tempat', $cu);
			})->where('status', '4')->take(6)->get();
		}

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexPesertaBatal($cu)
	{
		if ($cu == 0) {
			$table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu', 'kegiatan')->where('status', '6')->take(6)->get();
		} else {
			$table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu', 'kegiatan')->whereHas('aktivis.pekerjaan', function ($query) use ($cu) {
				$query->where('tipe', '1')->where('id_tempat', $cu);
			})->where('status', '6')->take(6)->get();
		}

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function checkPeserta($kegiatan_id, $aktivis_id)
	{
		$table_data = KegiatanPeserta::where('kegiatan_id', $kegiatan_id)->where('aktivis_id', $aktivis_id)->first();

		return response()
			->json([
				'model' => $table_data
			]);
	}


	public function getPeriode()
	{
		$table_data = Kegiatan::where('tipe', $this->tipe)->distinct('periode')->pluck('periode');

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
				'form' => Kegiatan::initialize(),
				'rules' => Kegiatan::$rules,
				'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request, Kegiatan::$rules);

		$name = $request->name;

		// processing single image upload
		if (!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath, $this->width, $this->height, $request->gambar, '', $name);
		else
			$fileName = '';

		$kelas = Kegiatan::create($request->except('tipe', 'status', 'gambar') + [
			'tipe' => $this->tipe, 'status' => '1', 'gambar' => $fileName
		]);

		$kelas->sasaran()->sync(array_flatten($request->sasaran));

		if ($request->panitia) {
			$panitiaArray = array();

			foreach ($request->panitia as $panitia) {
				$keterangan = '';
				if (array_key_exists("keterangan", $panitia)) {
					$keterangan = $panitia['keterangan'];
				}
				$panitiaArray[$panitia['aktivis_id']] = [
					'peran' => $panitia['peran'],
					'keterangan' => $keterangan,
					'asal' => $panitia['asal']
				];
			}

			$kelas->panitia_dalam()->sync($panitiaArray);
		}

		return response()
			->json([
				'saved' => true,
				'message' => $this->message . ' ' . $name . ' berhasil ditambah',
				'id' => $kelas->id
			]);
	}

	public function storePeserta(Request $request, $id)
	{
		// save data
		$kelas = KegiatanPeserta::create($request->except('kegiatan_id') + ['kegiatan_id' => $id]);

		$id_cu = Auth::user()->getIdCu();
		if ($id_cu != 0) {

			// check interval
			$dataPeserta = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu')->where('kegiatan_id', $id)->whereHas('aktivis.pekerjaan_aktif.cu', function ($query) use ($id_cu) {
				$query->where('id', $id_cu);
			})->orderBy('created_at', 'desc')->first();
			$time = \Carbon\Carbon::now();

			// send notif if interval different is more than 2 hours
			if ($dataPeserta) {
				$diff = $time->diffInHours($dataPeserta->created_at);
				if ($diff > 2) {
					NotificationHelper::diklat_bkcu($id_cu, $id, 'menambah peserta');
				}
			} else {
				NotificationHelper::diklat_bkcu($id_cu, $id, 'menambah peserta');
			}
		}

		return response()
			->json([
				'saved' => true,
				'message' => 'Peserta ' . $this->message . ' berhasil ditambah',
				'id' => $kelas->id
			]);
	}

	public function edit($id)
	{
		$kelas = Kegiatan::with('tempat', 'sasaran', 'panitia_dalam.pekerjaan_aktif.cu', 'panitia_luar')->findOrFail($id);

		return response()
			->json([
				'form' => $kelas,
				'option' => []
			]);
	}

	public function update(Request $request, $id)
	{
		// $this->validate($request, Kegiatan::$rules);

		$name = $request->name;

		$kelas = Kegiatan::findOrFail($id);

		// processing single image upload
		if (!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath, $this->width, $this->height, $request->gambar, $kelas->gambar, $name);
		else
			$fileName = '';

		$kelas->update($request->except('tipe', 'gambar') + [
			'tipe' => $this->tipe,
			'gambar' => $fileName
		]);

		$kelas->sasaran()->sync(array_flatten($request->sasaran));

		if ($request->panitia) {
			$panitiaArray = array();

			foreach ($request->panitia as $panitia) {
				$keterangan = '';
				if (array_key_exists("keterangan", $panitia)) {
					$keterangan = $panitia['keterangan'];
				}
				$panitiaArray[$panitia['aktivis_id']] = [
					'peran' => $panitia['peran'],
					'keterangan' => $keterangan,
					'asal' => $panitia['asal']
				];
			}

			$kelas->panitia_dalam()->sync($panitiaArray);
		}

		return response()
			->json([
				'saved' => true,
				'message' => $this->message . ' ' . $name . ' berhasil diubah'
			]);
	}

	public function updateStatus(Request $request, $id)
	{
		$kelas = Kegiatan::findOrFail($id);

		$kelas->status = $request->status;
		$statusPeserta = $request->status;
		$status = '';

		if ($request->status == 1) {
			$status = 'sedang menunggu';
		} else if ($request->status == 2) {
			$status = 'pendaftaran buka';
		} else if ($request->status == 3) {
			$status = 'pendaftaran tutup';
		} else if ($request->status == 4) {
			$status = 'sedang berjalan';
		} else if ($request->status == 5) {
			$status = 'terlaksana';
		} else if ($request->status == 6) {
			$status = 'batal';
		}

		if ($request->status == 6) {
			$kelas->keteranganBatal = $request->keterangan;
		} else {
			$kelas->keteranganBatal = "";
		}

		$kelas->update();

		$dataPeserta = KegiatanPeserta::with('aktivis.pekerjaan_aktif')->where('kegiatan_id', $id)->get();

		if ($statusPeserta) {
			$updatePeserta = KegiatanPeserta::where('kegiatan_id', $id)->where('status', '!=', 7)->update(['status' => $statusPeserta]);

			$id_cus = [];
			foreach ($dataPeserta as $peserta) {
				if ($peserta->aktivis->pekerjaan_aktif) {
					if ($peserta->aktivis->pekerjaan_aktif->tipe == 1) {
						array_push($id_cus, $peserta->aktivis->pekerjaan_aktif->id_tempat);
					}
				}
			}

			$id_cus = array_unique($id_cus);
			NotificationHelper::diklat_bkcu_status($id, $id_cus, 'diklat ' . $kelas->name  . '  ' . $status);
		}

		return response()
			->json([
				'saved' => true,
				'message' => "Status berhasil diubah"
			]);
	}

	public function updatePeserta(Request $request, $id)
	{
		$kelas = KegiatanPeserta::findOrFail($id);

		$kelas->update($request->except('status'));

		return response()
			->json([
				'saved' => true,
				'message' => "Peserta berhasil diubah"
			]);
	}

	public function destroy($id)
	{
		$kelas = Kegiatan::findOrFail($id);
		$name = $kelas->name;

		if (!empty($kelas->gambar)) {
			File::delete($this->imagepath . $kelas->gambar . '.jpg');
			File::delete($this->imagepath . $kelas->gambar . 'n.jpg');
		}

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message . ' ' . $name . 'berhasil dihapus'
			]);
	}

	public function destroyPeserta($id)
	{
		$kelas = KegiatanPeserta::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  'Peserta ' . $name . 'berhasil dihapus'
			]);
	}

	public function batalPeserta(Request $request, $id)
	{
		$kelas = KegiatanPeserta::with('aktivis.pekerjaan_aktif')->findOrFail($id);

		$kegiatan_id = $kelas->kegiatan_id;
		$id_cu = $kelas->aktivis->pekerjaan_aktif->id_cu;

		$kelas->status = 7;
		$kelas->keteranganBatal = $request->keteranganBatal;

		$kelas->update();

		if ($id_cu != 0) {
			if ($request->keteranganBatal != '') {
				NotificationHelper::diklat_bkcu($id_cu, $kegiatan_id, 'membatalkan pendaftaran peserta dengan alasan ' . $request->keteranganBatal);
			} else {
				NotificationHelper::diklat_bkcu($id_cu, $kegiatan_id, 'membatalkan pendaftaran peserta');
			}
		}

		return response()
			->json([
				'saved' => true,
				'message' => "Peserta berhasil dibatalkan"
			]);
	}

	public function countPeserta($id)
	{
		$table_data = KegiatanPeserta::where('kegiatan_id', $id)->count();

		return response()
			->json([
				'model' => $table_data
			]);
	}
}
