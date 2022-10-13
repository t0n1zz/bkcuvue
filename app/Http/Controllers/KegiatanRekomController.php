<?php
namespace App\Http\Controllers;

use DB;
use File;
use Image;
use App\KegiatanRekom;
use App\KegiatanRekomHasil;
use App\Support\NotificationHelper;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class KegiatanRekomController extends Controller{

	protected $message = "Rekomendasi";

	public function index()
	{
		$table_data = KegiatanRekom::with('kegiatan')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexKegiatan($id)
	{
		$cu = \Auth::user()->id_cu;

		if($cu == 0){
			$table_data = KegiatanRekom::with('hasil.cu','hasil.user')->where('kegiatan_id', $id)->advancedFilter();
		}else{
			$table_data = KegiatanRekom::with(['hasil.cu','hasil.user', 'hasil' => function($q) use($cu){
				$q->where('id_cu', $cu);
			}])->where('kegiatan_id', $id)->advancedFilter();
		}

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexHasil($id)
	{
		$table_data = KegiatanRekomHasil::with('cu','user')->where('kegiatan_rekom_id', $id)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function get($id)
	{
		$table_data = KegiatanRekom::with('kegiatan')->where('id',$id)->first();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		$form = KegiatanRekom::initialize();

		return response()
			->json([
					'form' => $form,
					'rules' => KegiatanRekom::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,KegiatanRekom::$rules);

		$name = $request->name;

		$kelas = KegiatanRekom::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function storeHasil(Request $request)
	{
		$this->validate($request,KegiatanRekomHasil::$rules);

		$kegiatan_rekom_id = $request->kegiatan_rekom_id;
		$id_cu = $request->id_cu;
		$id_user = $request->id_user;
		$kegiatanRekom = KegiatanRekom::findOrFail($kegiatan_rekom_id);
		
		if($kegiatanRekom->tipe == 1){
			$kegiatanHasil = KegiatanRekomHasil::where('kegiatan_rekom_id', $kegiatan_rekom_id)->where('id_cu', $id_cu)->first();
			if($kegiatanHasil){
				return response()
					->json([
						'saved' => false,
						'message' => 'Maaf CU ini sudah memberikan hasil rekomendasi',
					]);	
			}else{
				$kelas = KegiatanRekomHasil::create($request->all());
			}
		}elseif($kegiatanRekom->tipe == 2){
			$kegiatanHasil = KegiatanRekomHasil::where('kegiatan_rekom_id', $kegiatan_rekom_id)->where('id_user', $id_user)->first();
			if($kegiatanHasil){
				return response()
					->json([
						'saved' => false,
						'message' => 'Maaf user anda sudah memberikan hasil rekomendasi',
					]);	
			}else{
				$kelas = KegiatanRekomHasil::create($request->all());
			}
		}elseif($kegiatanRekom->tipe == 3){
			$kegiatanHasil = KegiatanRekomHasil::where('kegiatan_rekom_id', $kegiatan_rekom_id)->where('id_cu', 0)->first();
			if($kegiatanHasil){
				return response()
					->json([
						'saved' => false,
						'message' => 'Maaf Anda ini sudah memberikan hasil rekomendasi',
					]);	
			}else{
				$kelas = KegiatanRekomHasil::create($request->all());
			}
		}

		return response()
			->json([
				'saved' => true,
				'message' => 'Tindaklanjut rekomendasi berhasil ditambah'
			]);	
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, KegiatanRekom::$rules);

		$name = $request->name;

		$kelas = KegiatanRekom::findOrFail($id);

		$kelas->update($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function updateHasil(Request $request, $id)
	{
		$this->validate($request, KegiatanRekomHasil::$rules);

		$kelas = KegiatanRekomHasil::findOrFail($id);

		$kelas->update($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => 'Tindaklanjut rekomendasi berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		\DB::beginTransaction(); 
		try{
			$kelas = KegiatanRekom::findOrFail($id);
			$kelas2 = KegiatanRekomHasil::where('kegiatan_rekom_id',$id);

			$name = $kelas->name;

			$kelas->delete();
			$kelas2->delete();
			
			\DB::commit();
			return response()
				->json([
					'deleted' => true,
					'message' =>  $this->message. ' ' .$name. 'berhasil dihapus'
				]);
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}			
	}

	public function destroyHasil($id)
	{
		$kelas = KegiatanRekomHasil::findOrFail($id);

		$name = $kelas->keterangan;

		$kelas->delete();
		
		return response()
			->json([
				'deleted' => true,
				'message' =>  'Hasil Rekomendasi ' .$name. 'berhasil dihapus'
			]);
	}

	public function count()
	{
			$table_data = KegiatanRekom::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
    $time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\KegiatanRekom')->where('created_at','>=',$time)->orderBy('created_at','desc')->take(5);

    $history = collect();		
		foreach($table_data as $hs){
			$n = collect($hs);
			$n->put('user',$hs->userResponsible());
			$history->push($n);
		}

		return response()
			->json([
				'model' => $history
			]);
	}
}