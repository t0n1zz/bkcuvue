<?php
namespace App\Http\Controllers;

use DB;
use App\JalinanIuran;
use App\JalinanIuranAnggota;
use App\JalinanIuranProduk;
use Illuminate\Http\Request;

class JalinanIuranController extends Controller{


	public function index()
	{
    	$table_data = JalinanIuran::with('Cu')->advancedFilter();

			foreach($table_data as $t){
				$t->total = $this->tunas + $this->lintang;
			}

    	return response()
			->json([
				'model' => $table_data
			]);
	}

  public function indexCu($id)
	{
		$table_data = JalinanIuran::with('Cu')->where('id_cu',$id)->advancedFilter();

		foreach($table_data as $t){
			$t->total = $this->tunas + $this->lintang;
		}

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create($cu, $bulan, $tahun)
	{
		$dateString = $tahun . '-' . $bulan . '-01';
		$lastDateOfMonth = date("Y-m-t", strtotime($dateString));

		$table_data = JalinanIuran::with('Cu')->where('id_cu',$cu)->where('periode', $lastDateOfMonth)->first();

		if($table_data){
			return response()
			->json([
				'form' => $table_data,
				'rules' => JalinanIuran::$rules,
				'option' => []
			]);
		}else{
			return response()
				->json([
						'form' => JalinanIuran::initialize(),
						'rules' => JalinanIuran::$rules,
						'option' => []
				]);
		}
	}

	public function store(Request $request)
	{
		$this->validate($request,JalinanIuran::$rules);

		$periode = $request->periode;

		$kelas = JalinanIuran::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Iuran JALINAN periode ' .$periode. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = JalinanIuran::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,JalinanIuran::$rules);

		$periode = $request->periode;

		$kelas = JalinanIuran::findOrFail($id);

		$kelas->update($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Iuran JALINAN periode  ' .$periode. ' berhasil diubah',
				'id' => $kelas->id
			]);	
	}

	public function destroy($id)
	{
		$kelas = JalinanIuran::findOrFail($id);
		$periode = $kelas->periode;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Iuran JALINAN periode  ' .$periode. 'berhasil dihapus'
			]);
	}
}