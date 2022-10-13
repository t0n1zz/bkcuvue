<?php
namespace App\Http\Controllers;

use DB;
use App\LaporanGerakan;
use Illuminate\Http\Request;

class LaporanGerakanController extends Controller{


	public function index()
	{
    	$table_data = LaporanGerakan::addSelect(['*',DB::raw(
				'(IFNULL(lk, 0) + IFNULL(pr,0)) as total_anggota'
			)])->advancedFilter();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => LaporanGerakan::initialize(),
					'rules' => LaporanGerakan::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,LaporanGerakan::$rules);

		$periode = $request->periode;
		$cekData = LaporanGerakan::where('periode',$periode)->first();

		if($cekData){
			return response()
				->json([
					'saved' => false,
					'message' => 'Laporan gerakan periode ' .$periode. ' sudah ada'
				]);	

		}else{
			LaporanGerakan::create($request->all());
			
			return response()
				->json([
					'saved' => true,
					'message' => 'Laporan gerakan periode ' .$periode. ' berhasil ditambah',
				]);	
		}

	}

	public function edit($id)
	{
		$kelas = LaporanGerakan::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,LaporanGerakan::$rules);

		$periode = $request->periode;

		$kelas = LaporanGerakan::findOrFail($id);

		$kelas->update($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Laporan gerakan periode ' .$periode. ' berhasil diubah'
			]);	
	}

	public function destroy($id)
	{
		$kelas = LaporanGerakan::findOrFail($id);
		$periode = $kelas->periode;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Laporan gerakan periode ' .$periode. 'berhasil dihapus'
			]);
	}
}