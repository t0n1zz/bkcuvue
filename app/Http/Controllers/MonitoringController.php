<?php
namespace App\Http\Controllers;

use DB;
use File;
use Image;
use App\Monitoring;
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
		$this->validate($request,Monitoring::$rules);

		$temuan = $request->temuan;

		$kelas = Monitoring::create($request->except('status') + [
			'status' => 'TEMUAN BARU'
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' temuan ' .$temuan. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = Monitoring::with('cu','tp','aktivis_cu','aktivis_bkcu')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, Monitoring::$rules);

		$periode = $request->periode;

		$kelas = Monitoring::findOrFail($id);

		$kelas->update($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' periode ' .$periode. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = Monitoring::findOrFail($id);

		$temuan = $kelas->temuan;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' temuan ' .$temuan. 'berhasil dihapus'
			]);
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