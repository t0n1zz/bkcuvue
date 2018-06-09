<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\User;
use App\Cu;
use App\LaporanCu;
use App\LaporanCuDiskusi;
use App\Support\Helper;
use App\Support\NotificationHelper;


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

		$this->store_notification($request,'Menulis');

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

		$this->store_notification($request,'Mengubah');

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

		$request = LaporanCu::where('id',$kelas->id_laporan)->select(array('id_cu','periode', DB::RAW('id as id_laporan')))->first();
		
		$this->store_notification($request,'Menghapus');

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
			NotificationHelper::store_diskusi_laporan($request->id_cu,$request->id_laporan,'BKCU','',$periode,$tipe,$content);
		}else{
			$cu = Cu::where('id',$request->id_cu)->select('name')->first();
			NotificationHelper::store_diskusi_laporan('0',$request->id_laporan,$cu->name,'',$periode,$tipe,$content);
		}
	}
}