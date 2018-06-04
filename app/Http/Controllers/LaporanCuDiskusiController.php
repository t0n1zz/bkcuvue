<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\LaporanCuDiskusi;
use App\Support\Helper;
use App\Support\NotificationHelper;
use App\User;


class LaporanCuDiskusiController extends Controller{

	protected $message = "Komentar Laporan Cu";

	public function index()
	{
		$table_data = LaporanCuDiskusi::with('User')->filterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function get($id_laporan)
	{
		$table_data = LaporanCuDiskusi::with('User')->where('id_laporan',$id_laporan)->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }


	public function store(Request $request)
	{
		$this->validate($request,LaporanCuDiskusi::$rules);
		

		if(!empty($request->content))	
			$content = Helper::dom_processing_no_image($request);
		else
			$content = '';	

		$kelas = LaporanCuDiskusi::create($request->except('content') + [
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
		$this->validate($request,LaporanCuDiskusi::$rules);

		$kelas = LaporanCuDiskusi::findOrFail($id);

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
		$kelas = LaporanCuDiskusi::findOrFail($id);

		LaporanCuDiskusi::destroy($id);

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
			NotificationHelper::store_diskusi_laporancu($request->id_cu,$id,'BKCU','',$periode,$tipe,$request->content);
		}else{
			NotificationHelper::store_diskusi_laporancu('0',$id,$cu->name,'',$periode,$tipe,$request->content);
		}
	}
}