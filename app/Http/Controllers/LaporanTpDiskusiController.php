<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\User;
use App\LaporanTp;
use App\Cu;
use App\Tp;
use App\LaporanTpDiskusi;
use App\Support\Helper;
use App\Support\NotificationHelper;

class LaporanTpDiskusiController extends Controller{

	protected $message = "Komentar Laporan Tp";

	public function index()
	{
		$table_data = LaporanTpDiskusi::with('User')->filterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function get($id_laporan)
	{
		$table_data = LaporanTpDiskusi::with('User')->where('id_laporan',$id_laporan)->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }


	public function store(Request $request)
	{
		$this->validate($request,LaporanTpDiskusi::$rules);

		$kelas = LaporanTpDiskusi::create($request->all());	

		NotificationHelper::diskusi_tp($kelas,'menambah');

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil ditambah'
			]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,LaporanTpDiskusi::$rules);

		$kelas = LaporanTpDiskusi::findOrFail($id);

		$kelas->update($request->all());

		NotificationHelper::diskusi_tp($kelas,'mengubah');

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = LaporanTpDiskusi::findOrFail($id);

		LaporanTpDiskusi::destroy($id);

		$request = LaporanTp::with('Tp')->where('id',$kelas->id_laporan)->select(array('id_tp','periode', DB::RAW('id as id_laporan')))->first();

		NotificationHelper::diskusi_tp($kelas,'menghapus');

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' berhasil dihapus'
			]);
	}

	private function store_notification($request,$tipe)
	{
		$id_cu = \Auth::user()->getIdCu();

    $periode = \Carbon\Carbon::parse($request->periode)->format('d M Y');
		
		if($request->content != null){
			$content = $request->content;
		}else{
			$content = "";
		}

		if($id_cu == '0'){
			$tp = Tp::where('id',$request->id_tp)->select('name')->first();
			NotificationHelper::store_diskusi_laporan($request->id_cu,$request->id_laporan,'BKCU',$tp->name,$periode,$tipe,$request->content);
		}else{
			$cu = Cu::where('id',$request->id_cu)->select('name')->first();
			$tp = Tp::where('id',$request->id_tp)->select('name')->first();
			
			NotificationHelper::store_diskusi_laporan('0',$request->id_laporan,$cu->name,$tp->name,$periode,$tipe,$request->content);
		}
	}
}