<?php
namespace App\Http\Controllers;

use DB;
use File;
use Image;
use App\Monitoring;
use App\MonitoringRekom;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class MonitoringController extends Controller{

	protected $message = "Monitoring";

	public function index()
	{
		$table_data = Monitoring::with('cu','tp','aktivis_cu','aktivis_bkcu')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id)
	{
		$table_data = Monitoring::with('cu','tp','aktivis_cu','aktivis_bkcu')->where('id_cu',$id)->advancedFilter();

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
		$kelas = Monitoring::with('cu','tp','aktivis_cu','aktivis_bkcu','monitoring_rekom')->findOrFail($id);

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

	public function destroy($id)
	{
		$kelas = Monitoring::findOrFail($id);

		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' temuan ' .$name. 'berhasil dihapus'
			]);
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