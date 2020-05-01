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
		
		$kelas = LaporanCuDiskusi::create($request->all());	

		NotificationHelper::diskusi_cu($kelas,'menambah');

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
		
		$kelas->update($request->all());

		NotificationHelper::diskusi_cu($kelas,'mengubah');

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
		
		NotificationHelper::diskusi_cu($kelas,'menghapus');

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' berhasil dihapus'
			]);
	}
}