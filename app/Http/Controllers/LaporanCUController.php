<?php
namespace App\Http\Controllers;

use DB;
use App\LaporanCu;
use App\Support\ImageProcessing;
use Illuminate\Http\Request;

class LaporanCuController extends Controller{

	protected $message = 'Laporan CU';

	public function index()
	{

		$table_data = LaporanCu::select('laporancu.*',
		'cu.name as cu_name',
		'provinces.name as provinces_name')
		->leftjoin('cu','laporancu.no_ba','cu.no_ba')
    ->leftjoin('provinces','cu.id_provinces','provinces.id')
		->join(DB::RAW('(SELECT no_ba, MAX(periode) AS max_periode FROM laporancu GROUP BY no_ba) latest_report'),function($join){
				$join->on('laporancu.no_ba','=','latest_report.no_ba');
				$join->on('laporancu.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw('
			(laporancu.l_biasa + laporancu.l_lbiasa) as total_anggota, (laporancu.piutang_beredar/laporancu.aset) as rasio_beredar,
			((laporancu.piutang_lalai_1bulan + laporancu.piutang_lalai_12bulan)/laporancu.piutang_beredar) as rasio_lalai,
			(laporancu.piutang_beredar - (laporancu.piutang_lalai_1bulan + laporancu.piutang_lalai_12bulan)) as piutang_bersih'
		)])->FilterPaginateOrder();


		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCU($id)
	{
		$table_data = LaporanCu::with('CU')->where('no_ba',$id)->filterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPeriode($periode)
	{
		$table_data = LaporanCu::select('laporancu.*',
		'cu.name as cu_name',
		'provinces.name as provinces_name')
		->leftjoin('cu','laporancu.no_ba','cu.no_ba')
    ->leftjoin('provinces','cu.id_provinces','provinces.id')
		->join(DB::RAW("(SELECT no_ba, MAX(periode) AS max_periode FROM laporancu WHERE periode <= '$periode' GROUP BY no_ba) latest_report"),function($join){
        $join->on('laporancu.no_ba','=','latest_report.no_ba');
        $join->on('laporancu.periode','=','latest_report.max_periode');
		})->addSelect(['*',DB::raw('
			(laporancu.l_biasa + laporancu.l_lbiasa) as total_anggota, (laporancu.piutang_beredar/laporancu.aset) as rasio_beredar,
			((laporancu.piutang_lalai_1bulan + laporancu.piutang_lalai_12bulan)/laporancu.piutang_beredar) as rasio_lalai,
			(laporancu.piutang_beredar - (laporancu.piutang_lalai_1bulan + laporancu.piutang_lalai_12bulan)) as piutang_bersih'
		)])->FilterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => LaporanCu::initialize(),
					'rules' => LaporanCu::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,LaporanCu::$rules);

		$name = $request->name;

		$kelas = LaporanCu::create($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah'
			]);
	}

	public function show($id)
	{
		$kelas = LaporanCu::with('LaporanCuKategori')->findOrFail($id);

		return response()
			->json([
				'model' => $kelas
			]);
	}

	public function edit($id)
	{
		$kelas = LaporanCu::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,LaporanCu::$rules);

		$name = $request->name;

		$kelas = LaporanCu::findOrFail($id);


		$kelas->update($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}


	public function destroy($id)
	{
		$kelas = LaporanCu::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}
}
