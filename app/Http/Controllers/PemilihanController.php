<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Image;
use App\Pemilihan;
use App\PemilihanCalon;
use App\PemilihanSuara;
use App\Support\Helper;
use Illuminate\Http\Request;
use App\Support\NotificationHelper;
use App\Events\PemilihanCalonEvent;

class PemilihanController extends Controller{

	protected $message = "Pemilihan";

	public function index($id)
	{
		$table_data = Pemilihan::withCount('hasCalon')->withCount('hasSuara')->where('cu_id',$id)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCalon($id)
	{
		$table_data = PemilihanCalon::with('aktivis.pekerjaan_aktif.cu','aktivis.pendidikan_tertinggi')->where('pemilihan_id',$id)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexUser($id)
	{
		$table_data = PemilihanSuara::with('user.aktivis.pekerjaan_aktif.cu')->where('pemilihan_id',$id)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}
	
	public function checkUser($pemilihan_id)
	{
		$user_id = Auth::user()->id;
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

		$kelas = Pemilihan::create($request->except('status') + [
			'status' => '0'
		]);

		if($request->calon){
			$calonArray = array();

			foreach($request->calon as $calon){
				$calonArray[$calon['aktivis_id']] = [
					'skor' => 0,
				]
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
		$user_id = Auth::user()->id;
		$cekSuara = PemilihanSuara::where('pemilihan_id',$request->pemilihan_id)->where('user_id',$user_id)->first();

		if(!$cekSuara){
			$kelasCalon = PemilihanCalon::findOrFail($request->pemilihan_calon_id);
			$skor = $kelasCalon->skor + 1;
			$kelasCalon->skor = $skor;
			$kelasCalon->update();

			event(new PemilihanCalonEvent($skor, $request->pemilihan_calon_id));

			PemilihanSuara::create([
				'pemilihan_id' => $request->pemilihan_id,
				'pemilihan_calon_id' => $request->pemilihan_calon_id,
				'user_id' => $request->user_id,
			]);

			return response()
				->json([
					'saved' => true,
					'message' => $this->message. ' ' .$name. ' berhasil ditambah',
					'id' => $kelas->id
				]);	
		}else{
			return response()
				->json([
					'saved' => false,
					'message' => 'Maaf, user ini sudah melakukan menggunakan hak suaranya'
				]);	
		}
	}

	public function edit($id)
	{
		$kelas = Pemilihan::with('calon.pekerjaan_aktif.cu')->findOrFail($id);

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

	public function updateStatus(Request $request, $id)
	{
		$kelas = Pemilihan::findOrFail($id);

		if($request->status == 1){
			$kelas->status  = 0;
		}else{
			$kelas->status  = 1;
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