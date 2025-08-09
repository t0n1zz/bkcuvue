<?php
namespace App\Http\Controllers;

use App\MonitoringCu;
use App\MonitoringPencapaianCu;
use App\Support\NotificationHelper;
use Illuminate\Http\Request;
use App\Support\Helper;
use File;
use Venturecraft\Revisionable\Revision;

class MonitoringPencapaianCuController extends Controller{

	protected $imagepath = 'images/monitoring/';
	protected $message = "Pencapaian";
	protected $width = 300;
	protected $height = 424;

	public function get($id)
	{
		$table_data = MonitoringPencapaianCu::where('id_monitoring_cu',$id)->orderBy('created_at','asc')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function store(Request $request)
	{
		$this->validate($request,MonitoringPencapaianCu::$rules);

		$name = $request->pencapaian;

		if(!empty($request->gambar))
			$gambar = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->gambar,'',$request->pencapaian . 'gmbr');
		else
			$gambar = '';	

		$kelas = MonitoringPencapaianCu::create($request->except('gambar') + [
			'gambar' => $gambar
		]);

		MonitoringCu::flushCache();

		// NotificationHelper::monitoring_pencapaian($kelas,'menambah keputusan');
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);		
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, MonitoringPencapaianCu::$rules);

		$name = $request->pencapaian;

		$kelas = MonitoringPencapaianCu::findOrFail($id);

		if(!empty($request->gambar))
			$gambar = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->gambar,$kelas->gambar,$kelas->pencapaian . 'gmbr');
		else
			$gambar = '';

		$kelas->update($request->except('gambar') + [
			'gambar' => $gambar
		]);

		MonitoringCu::flushCache();

		// NotificationHelper::monitoring_pencapaian($kelas,'mengubah keputusan');

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = MonitoringPencapaianCu::findOrFail($id);

		$name = $kelas->pencapaian;

		if(!empty($kelas->gambar)){
			File::delete($this->imagepath . $kelas->gambar . '.jpg');
		}

		$kelas->delete();

		MonitoringCu::flushCache();

		// NotificationHelper::monitoring_pencapaian($kelas,'menghapus keputusan');

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function count()
	{
			$table_data = MonitoringPencapaianCu::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
    $time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\MonitoringPencapaianCu')->where('created_at','>=',$time)->orderBy('created_at','desc')->take(5);

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