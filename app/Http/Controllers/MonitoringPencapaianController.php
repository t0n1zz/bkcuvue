<?php
namespace App\Http\Controllers;

use App\MonitoringPencapaian;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class MonitoringPencapaianController extends Controller{

	protected $message = "Pencapaian";

	public function get($id)
	{
		$table_data = MonitoringPencapaian::where('id_monitoring',$id)->orderBy('created_at','asc')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function store(Request $request)
	{
		$this->validate($request,MonitoringPencapaian::$rules);

		$name = $request->pencapaian;

		$kelas = MonitoringPencapaian::create($request->all());

		NotificationHelper::monitoring($kelas,'menambah keputusan');
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);		
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, MonitoringPencapaian::$rules);

		$name = $request->name;

		$kelas = MonitoringPencapaian::findOrFail($id);

		$kelas->update($request->all());

		NotificationHelper::monitoring($kelas,'mengubah keputusan');

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = MonitoringPencapaian::findOrFail($id);

		$name = $kelas->pencapaian;

		$kelas->delete();

		NotificationHelper::monitoring($kelas,'menghapus keputusan');

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function count()
	{
			$table_data = MonitoringPencapaian::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
    $time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\MonitoringPencapaian')->where('created_at','>=',$time)->orderBy('created_at','desc')->take(5);

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