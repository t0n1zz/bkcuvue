<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Image;
use App\Aktivis;
use App\Pemilihan;
use App\PemilihanCalon;
use App\PemilihanSuara;
use App\Support\Helper;
use Illuminate\Http\Request;
use App\Support\NotificationHelper;
use App\Events\PemilihanCalonEvent;

class PemilihanController extends Controller{

	protected $message = "Pemilihan";

	public function index()
	{
		$table_data = Pemilihan::withCount('hasCalon')->withCount('hasSuara')->advancedFilter();

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

	public function indexCalon($name)
	{
		$table_data = [];
		$form = '';
		$suaras = PemilihanSuara::where('name', $name)->get();

		foreach($suaras as $suara){
		$pemilihan = Pemilihan::with('calon.pekerjaan_aktif.cu','calon.pendidikan_tertinggi')->where('id', $suara->pemilihan_id)->where('status',1)->first();

			if($pemilihan){
				$table_data = $pemilihan;
				$form = PemilihanSuara::with('calon.aktivis.pekerjaan_aktif.cu','calon.aktivis.pendidikan_tertinggi')->where('name', $name)->where('pemilihan_id', $pemilihan->id)->first();
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
		$table_data = PemilihanCalon::with('aktivis.pekerjaan_aktif.cu','aktivis.pendidikan_tertinggi')->where('pemilihan_id', $id)->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function checkUser($pemilihan_id)
	{
		$user_id = Auth::user()->id_cu;
		$table_data = PemilihanSuara::where('pemilihan_id',$pemilihan_id)->where('user_id',$user_id)->first();

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
		$this->validate($request,Pemilihan::$rules);

		$name = $request->name;

		if($request->sumberSuara == 0){
			$kelas = Pemilihan::create($request->except('id_cu','status') + [
				'id_cu' => Auth::user()->id_cu,
				'status' => '0'
			]);

			for ($x = 0; $x <= $request->suara; $x++) {
				PemilihanSuara::create([
					'pemilihan_id' => $kelas->id,
					'name' => bin2hex(random_bytes(4))
				]);
			}
		}else{
			$kelasPemilihan = Pemilihan::findOrFail($request->sumberSuara);
			$suara = $kelasPemilihan->suara;

			$kelas = Pemilihan::create($request->except('id_cu','status','suara') + [
				'id_cu' => Auth::user()->id_cu,
				'status' => '0',
				'suara' => $suara
			]);

			$kelasSuara = PemilihanSuara::where('pemilihan_id',$kelasPemilihan->id)->get();
			
			foreach($kelasSuara as $dataSuara){
				PemilihanSuara::create([
					'pemilihan_id' => $kelas->id,
					'name' => $dataSuara->name
				]);
			}
		}

		if($request->calon){
			$calonArray = array();

			foreach($request->calon as $calon){
				$calonArray[$calon['aktivis_id']] = [
					'skor' => 0,
				];
			}

			$kelas->calon()->sync($calonArray);
		}

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function storePilihan(Request $request)
	{	
		$pemilihan = Pemilihan::findOrFail($request->pemilihan_id);

		if($pemilihan->status == 1){
			$cekSuara = PemilihanSuara::where('pemilihan_id',$request->pemilihan_id)->where('name',$request->name)->where('pemilihan_calon_id',null)->first();
	
			if($cekSuara){
				\DB::beginTransaction(); 
				try{
					$kelasCalon = PemilihanCalon::findOrFail($request->pemilihan_calon_id);
					$skor = $kelasCalon->skor + 1;
					$kelasCalon->skor = $skor;
					$kelasCalon->update();
			
					$cekSuara->pemilihan_calon_id = $request->pemilihan_calon_id;
					$cekSuara->update();
	
					$kelasPemilihan = Pemilihan::findOrFail($request->pemilihan_id);
					$suara_ok = $kelasPemilihan->suara_ok + 1;
					$kelasPemilihan->suara_ok = $suara_ok;
					$kelasPemilihan->update();
					
					event(new PemilihanCalonEvent($skor, $request->pemilihan_calon_id));

					Aktivis::flushCache();
					
					\DB::commit();
					return response()
						->json([
							'saved' => true,
							'message' => 'Pemilihan telah berhasil dilakukan.',
						]);	
				} catch (\Exception $e){
					\DB::rollBack();
					abort(500, $e->getMessage());
				}
			}else{
				return response()
					->json([
						'saved' => false,
						'message' => 'Maaf, anda sudah melakukan pemilihan'
					]);	
			}
		}else{
			return response()
					->json([
						'saved' => false,
						'message' => 'Maaf, pemilihan belum aktif'
					]);
		}
	}

	public function edit($id)
	{
		$kelas = Pemilihan::with('calon.pekerjaan_aktif.cu','calon.pendidikan_tertinggi','hasSuara')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, Pemilihan::$rules);

		$name = $request->name;

		$kelas = Pemilihan::findOrFail($id);

		if($request->calon){
			$calonArray = array();

			foreach($request->calon as $calon){
				$calonArray[$calon['aktivis_id']] = [
					'skor' => $calon['skor']
				];
			}

			$kelas->calon()->sync($calonArray);
		}

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function updateStatus($id)
	{
		$kelas = Pemilihan::findOrFail($id);

		if($kelas->status == 1){
			$kelas->status  = 0;
		}else{
			$kelas->status  = 1;
			Pemilihan::where('id','!=', $kelas->id)->update(['status' => 0]);
		}

		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => "Status berhasil diubah"
			]);
	}

	public function destroy($id)
	{
		$kelas = Pemilihan::findOrFail($id);
		$name = $kelas->name;

		$kelas->calon()->sync([]);

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}


	public function countCalon($id)
	{
			$table_data = PemilihanCalon::where('kegiatan_id',$id)->count();
			
			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function countSuara($id)
	{
			$table_data = PemilihanSuara::where('kegiatan_id',$id)->count();
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}