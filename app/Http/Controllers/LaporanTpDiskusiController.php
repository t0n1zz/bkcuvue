<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\LaporanTpDiskusi;
use App\Support\Helper;
use App\Support\NotificationHelper;
use App\User;


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
		

		if(!empty($request->content))	
			$content = Helper::dom_processing_no_image($request);
		else
			$content = '';	

		$kelas = LaporanTpDiskusi::create($request->except('content') + [
			'content' => $content
		]);	

		$this->store_notification($kelas->id,$request,'Menulis');

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

		if(!empty($request->content))	
			$content = Helper::dom_processing_no_image($request);
		else
			$content = '';	
		
		$kelas->update($request->except('content') + ['content' => $content
		]);

		$this->store_notification($id,$request,'Mengubah');

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

		$this->store_notification($id,$kelas,'Menghapus');

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' berhasil dihapus'
			]);
	}

	private function store_notification($id,$request,$tipe)
	{
		$id_cu = \Auth::user()->getIdCu();

    $periode = \Carbon\Carbon::parse('2017-05-31')->format('d M Y');

		if($id_cu == '0'){
			NotificationHelper::store_diskusi_laporan($request->id_cu,$id,'BKCU','',$periode,$tipe,$request->content);
		}else{
			$cu = Cu::where('id',$request->id_cu)->select('name')->first();
			$tp = Tp::where('id',$request->id_tp)->select('name')->first();
			
			NotificationHelper::store_diskusi_laporan('0',$id,$cu->name,$tp->name,$periode,$tipe,$request->content);
		}
	}
}