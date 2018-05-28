<?php
namespace App\Http\Controllers;

use DB;
use App\LaporanCuDiskusi;
use App\Support\Helper;
use Illuminate\Http\Request;

class LaporanCuDiskusiController extends Controller{

	protected $message = "Diskusi Laporan Cu";

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

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil ditambah'
			]);
	}

	public function update(Request $request, $id)
	{
		
	}

	public function destroy($id)
	{
		$kelas = LaporanCuDiskusi::findOrFail($id);

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' berhasil dihapus'
			]);
	}
}