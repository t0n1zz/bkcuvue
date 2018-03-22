<?php
namespace App\Http\Controllers;

use App\LaporanCU;
use App\Support\ImageProcessing;
use Illuminate\Http\Request;

class LaporanCUController extends Controller{

	protected $message = 'Laporan CU';

	public function index()
	{
    	$table_data = LaporanCU::with('CU')->join(DB::RAW('(SELECT no_ba, MAX(periode) AS max_periode FROM laporancu GROUP BY no_ba) latest_report'),function($join){
					$join->on('laporancu.no_ba','=','latest_report.no_ba');
					$join->on('laporancu.periode','=','latest_report.max_periode');
			})->FilterPaginateOrder();


    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexCU($id)
	{
    	$table_data = LaporanCU::with('CU')->where('no_ba',$id)->filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => LaporanCU::initialize(),
					'rules' => LaporanCU::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,LaporanCU::$rules);

		$name = $request->name;

		$kelas = LaporanCU::create($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah'
			]);
	}

	public function show($id)
	{
		$kelas = LaporanCU::with('LaporanCUKategori')->findOrFail($id);

		return response()
			->json([
				'model' => $kelas
			]);
	}

	public function edit($id)
	{
		$kelas = LaporanCU::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,LaporanCU::$rules);

		$name = $request->name;

		$kelas = LaporanCU::findOrFail($id);


		$kelas->update($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}


	public function destroy($id)
	{
		$kelas = LaporanCU::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}
}
