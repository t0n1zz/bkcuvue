<?php
namespace App\Http\Controllers;

use DB;
use File;
use Image;
use App\Monitoring;
use App\MonitoringRekom;
use App\MonitoringPencapaian;
use App\Support\NotificationHelper;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class MonitoringController extends Controller{

	protected $message = "Monitoring";

	public function index()
	{
		$table_data = Monitoring::with('cu','tp','aktivis_cu','aktivis_bkcu')->withCount('monitoring_pencapaian','monitoring_rekom','monitoring_rekom_ok')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($cu, $tp)
	{
		if($tp != 'semua'){
			$table_data = Monitoring::with('cu','tp','aktivis_cu','aktivis_bkcu')->withCount('monitoring_pencapaian','monitoring_rekom','monitoring_rekom_ok')->where('id_cu',$cu)->where('id_tp',$tp)->advancedFilter();
		}else{
			$table_data = Monitoring::with('cu','tp','aktivis_cu','aktivis_bkcu','monitoring_rekom')->withCount('monitoring_pencapaian','monitoring_rekom','monitoring_rekom_ok')->where('id_cu',$cu)->advancedFilter();
		}

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function get($id)
	{
		$table_data = Monitoring::where('id_cu',$id)->select('id','id_cu','name','tanggal')->orderBy('tanggal','desc')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		$form = Monitoring::initialize();

		return response()
			->json([
					'form' => $form,
					'rules' => Monitoring::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		\DB::beginTransaction(); 
		try{
			$this->validate($request,Monitoring::$rules);

			$name = $request->name;

			$kelas = Monitoring::create($request->except('rekomendasi'));

			$this->syncRekom($request, $kelas);

			NotificationHelper::monitoring($kelas,'menambah temuan');

			\DB::commit();
			
			return response()
				->json([
					'saved' => true,
					'message' => $this->message. ' temuan ' .$name. ' berhasil ditambah',
					'id' => $kelas->id
				]);	
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}	
	}

	public function edit($id)
	{
		$kelas = Monitoring::with('cu','tp','aktivis_cu.pekerjaan_aktif','aktivis_bkcu.pekerjaan_aktif','monitoring_rekom')->findOrFail($id);

		$kelas->total_rekom = count($kelas->monitoring_rekom);
		$kelas->rekom_ok = 0;
		foreach($kelas->monitoring_rekom as $k){
			if($k->status == 1){
				$kelas->rekom_ok += 1;
			}
		}

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		\DB::beginTransaction(); 
		try{
			$this->validate($request, Monitoring::$rules);

			$name = $request->name;

			$kelas = Monitoring::findOrFail($id);

			$kelas->update($request->except('rekomendasi'));

			$this->syncRekom($request, $kelas);

			\DB::commit();

			return response()
				->json([
					'saved' => true,
					'message' => $this->message. ' temuan ' .$name. ' berhasil diubah'
				]);
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}	
	}

	public function updateRekom($id)
	{
		$kelas = MonitoringRekom::findOrFail($id);

		$status = $kelas->status;

		if($status == 0){
			$kelas->status = 1;
		}else{
			$kelas->status = 0;
		}

		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => 'Rekomendasi berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		\DB::beginTransaction(); 
		try{
			$kelas = Monitoring::findOrFail($id);
			$kelas2 = MonitoringRekom::where('id_monitoring',$id);
			$kelas3 = MonitoringPencapaian::where('id_monitoring',$id);

			$name = $kelas->name;

			$kelas->delete();
			$kelas2->delete();
			$kelas3->delete();
			
			\DB::commit();
			return response()
				->json([
					'deleted' => true,
					'message' =>  $this->message. ' temuan ' .$name. 'berhasil dihapus'
				]);
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}			
	}

	private function syncRekom($request, $kelas)
	{
		if($request->rekomendasi){
			$rekoms = $request->rekomendasi;
			
			foreach($rekoms as $rekom){
				if(array_key_exists('id', $rekom)){
					$kelasRekom = MonitoringRekom::findOrFail($rekom['id']);
					$kelasRekom->update([
						'id_monitoring' => $kelas->id,
						'rekomendasi' => array_key_exists('rekomendasi', $rekom) ? $rekom['rekomendasi'] : null,
						'status' => array_key_exists('status', $rekom) ? $rekom['status'] : null,
					]);
				}else{
					MonitoringRekom::create([
						'id_monitoring' => $kelas->id,
						'rekomendasi' => array_key_exists('rekomendasi', $rekom) ? $rekom['rekomendasi'] : null,
						'status' => array_key_exists('status', $rekom) ? $rekom['status'] : null,
					]);
				}
			}
		}
	}

	public function count()
	{
			$table_data = Monitoring::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
    $time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\Monitoring')->where('created_at','>=',$time)->orderBy('created_at','desc')->take(5);

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