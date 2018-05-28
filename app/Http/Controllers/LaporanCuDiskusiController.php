<?php
namespace App\Http\Controllers;

use DB;
use App\LaporanCuDiskusi;
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

	}

	public function update(Request $request, $id)
	{
		
	}

	public function destroy($id)
	{

	}
}