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
			->join(DB::RAW("(SELECT no_ba, MAX(periode) AS max_periode FROM laporancu GROUP BY no_ba) latest_report"),function($join){
        $join->on('laporancu.no_ba','=','latest_report.no_ba');
        $join->on('laporancu.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw('
				(IFNULL(laporancu.l_biasa, 0) + IFNULL(laporancu.l_lbiasa,0) + IFNULL(laporancu.P_biasa,0) + IFNULL(laporancu.P_lbiasa,0)) as total_anggota,
				(IFNULL(laporancu.piutang_beredar,0)/IFNULL(laporancu.aset,0)) as rasio_beredar,
				((IFNULL(laporancu.piutang_lalai_1bulan,0) + IFNULL(laporancu.piutang_lalai_12bulan,0))/IFNULL(laporancu.piutang_beredar,0)) as rasio_lalai,
				(IFNULL(laporancu.piutang_beredar,0) - (IFNULL(laporancu.piutang_lalai_1bulan,0) + IFNULL(laporancu.piutang_lalai_12bulan,0))) as piutang_bersih'
			)])->FilterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCU($id)
	{
		$table_data = LaporanCu::with('CU')->where('no_ba',$id)->addSelect(['*',DB::raw('
			(IFNULL(laporancu.l_biasa, 0) + IFNULL(laporancu.l_lbiasa,0) + IFNULL(laporancu.P_biasa,0) + IFNULL(laporancu.P_lbiasa,0)) as total_anggota,
			(IFNULL(laporancu.piutang_beredar,0)/IFNULL(laporancu.aset,0)) as rasio_beredar,
			((IFNULL(laporancu.piutang_lalai_1bulan,0) + IFNULL(laporancu.piutang_lalai_12bulan,0))/IFNULL(laporancu.piutang_beredar,0)) as rasio_lalai,
			(IFNULL(laporancu.piutang_beredar,0) - (IFNULL(laporancu.piutang_lalai_1bulan,0) + IFNULL(laporancu.piutang_lalai_12bulan,0))) as piutang_bersih'
		)])->filterPaginateOrder();

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
		})->addSelect([DB::raw('
			IFNULL(laporancu.l_biasa, 0) + IFNULL(laporancu.l_lbiasa,0) + IFNULL(laporancu.P_biasa,0) + IFNULL(laporancu.P_lbiasa,0) as total_anggota,
			(IFNULL(laporancu.piutang_beredar,0)/IFNULL(laporancu.aset,0)) as rasio_beredar,
			((IFNULL(laporancu.piutang_lalai_1bulan,0) + IFNULL(laporancu.piutang_lalai_12bulan,0))/IFNULL(laporancu.piutang_beredar,0)) as rasio_lalai,
			(IFNULL(laporancu.piutang_beredar,0) - (IFNULL(laporancu.piutang_lalai_1bulan,0) + IFNULL(laporancu.piutang_lalai_12bulan,0))) as piutang_bersih'
		)])->FilterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearls()
	{
		$table_data = LaporanCu::select('laporancu.*',
			'cu.name as cu_name',
			'provinces.name as provinces_name')
			->leftjoin('cu','laporancu.no_ba','cu.no_ba')
			->leftjoin('provinces','cu.id_provinces','provinces.id')
			->join(DB::RAW("(SELECT no_ba, MAX(periode) AS max_periode FROM laporancu GROUP BY no_ba) latest_report"),function($join){
        $join->on('laporancu.no_ba','=','latest_report.no_ba');
        $join->on('laporancu.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw('
				@total_anggota := IFNULL(laporancu.l_biasa, 0) + IFNULL(laporancu.l_lbiasa,0) + IFNULL(laporancu.P_biasa,0) + IFNULL(laporancu.P_lbiasa,0) as total_anggota,

				@piutang_bersih := IFNULL(laporancu.dcr,0) + IFNULL(laporancu.dcu,0) + IFNULL(laporancu.iuran_gedung,0) + IFNULL(laporancu.donasi,0) + IFNULL(laporancu.shu_lalu,0) as piutang_bersih,	

				@rata_saham := (((IFNULL(laporancu.simpanan_saham_des,0) + IFNULL(laporancu.simpanan_saham,0))/2) / MONTH(laporancu.periode) ) * 12 as rata_saham,

				@tot_nonsaham := IFNULL(laporancu.nonsaham_harian,0) + IFNULL(laporancu.nonsaham_unggulan,0) as tot_nonsaham,

				@rata_aset := (IFNULL(laporancu.aset,0) + IFNULL(laporancu.aset_lalu,0)) / 2 as rata_aset,

				@p1 := IFNULL(laporancu.dcr, 0) / IFNULL(laporancu.piutang_lalai_12bulan,0) as p1,

				@p2_1 := (IFNULL(laporancu.dcr,0) - IFNULL(laporancu.piutang_lalai_12bulan,0))/IFNULL(laporancu.piutang_lalai_1bulan,0) as p2_1,

				@p2 := if(@p1 >= 1, @p2_1, 0) as p2,

				@e1_1 := (IFNULL(laporancu.piutang_beredar,0) - (IFNULL(laporancu.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(laporancu.piutang_lalai_1bulan,0)))) / IFNULL(laporancu.aset,0) as e1_1,

				@e1_2 := (IFNULL(laporancu.piutang_beredar,0) - IFNULL(laporancu.dcr,0)) / IFNULL(laporancu.aset,0) as e1_2,

				@e1 := IF(@p1 >= 1 && @p2 > 0.35, @e1_1, @e1_2) as e1,

				@e5 := (IFNULL(laporancu.nonsaham_unggulan,0) + IFNULL(laporancu.nonsaham_harian,0)) / IFNULL(laporancu.aset,0) as e5,

				@e6 := IFNULL(laporancu.total_hutang_pihak3,0) / IFNULL(laporancu.aset,0) as e6,

				@e9 := (@piutang_bersih - (IFNULL(laporancu.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(laporancu.piutang_lalai_1bulan,0)) + IFNULL(laporancu.aset_masalah,0))) / IFNULL(laporancu.aset,0) as e9,

				@a1 := (IFNULL(laporancu.piutang_lalai_1bulan,0) + IFNULL(laporancu.piutang_lalai_12bulan,0)) / IFNULL(laporancu.piutang_beredar,0) as a1,

				@a2 := IFNULL(laporancu.aset_tidak_menghasilkan,0) / IFNULL(laporancu.aset,0) as a2,
				
				@r7_1 := IFNULL(laporancu.bjs_saham,0) / @rata_saham as r7_1,

				@r7_2 := IFNULL(laporancu.bjs_saham,0) / ((IFNULL(laporancu.simpanan_saham_lalu,0) + IFNULL(laporancu.simpanan_saham,0)) / 2) as r7_2,

				@e7_1 := IF(IFNULL(laporancu.simpanan_saham_des,0) = 0 && IFNULL(laporancu.simpanan_saham_lalu,0) != 0, @r7_2, @r7_1) as r7_1,

				@e9 := (IFNULL(laporancu.total_biaya,0) - IFNULL(laporancu.beban_penyisihan_dcr,0)) / @rata_aset as r9,

				@l1 := (IFNULL(laporancu.investasi_likuid,0) + IFNULL(laporancu.aset_likuid_tidak_menghasilkan,0) - IFNULL(laporancu.hutang_tidak_berbiaya_30hari,0)) / @tot_nonsaham as l1,

				@s10 := (@total_anggota - IFNULL(laporancu.total_anggota_lalu,0)) / IFNULL(laporancu.total_anggota_lalu,0) as s10,

				@s1 := (IFNULL(laporancu.aset,0) - IFNULL(laporancu.aset_lalu,0)) / IFNULL(laporancu.aset_lalu,0) as s11,
				
				@ideal := 0 as ideal,
				@ideal := IF(@p1 >= 1, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal

				'
			)])->FilterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearlsCU($id)
	{
		$table_data = LaporanCu::with('CU')->where('no_ba',$id)->addSelect(['*',DB::raw('
			@total_anggota := IFNULL(laporancu.l_biasa, 0) + IFNULL(laporancu.l_lbiasa,0) + IFNULL(laporancu.P_biasa,0) + IFNULL(laporancu.P_lbiasa,0) as total_anggota,

			@piutang_bersih := IFNULL(laporancu.dcr,0) + IFNULL(laporancu.dcu,0) + IFNULL(laporancu.iuran_gedung,0) + IFNULL(laporancu.donasi,0) + IFNULL(laporancu.shu_lalu,0) as piutang_bersih,	

			@rata_saham := (((IFNULL(laporancu.simpanan_saham_des,0) + IFNULL(laporancu.simpanan_saham,0))/2) / MONTH(laporancu.periode) ) * 12 as rata_saham,

			@tot_nonsaham := IFNULL(laporancu.nonsaham_harian,0) + IFNULL(laporancu.nonsaham_unggulan,0) as tot_nonsaham,

			@rata_aset := (IFNULL(laporancu.aset,0) + IFNULL(laporancu.aset_lalu,0)) / 2 as rata_aset,

			@p1 := IFNULL(laporancu.dcr, 0) / IFNULL(laporancu.piutang_lalai_12bulan,0) as p1,

			@p2_1 := (IFNULL(laporancu.dcr,0) - IFNULL(laporancu.piutang_lalai_12bulan,0))/IFNULL(laporancu.piutang_lalai_1bulan,0) as p2_1,

			if(@p1 >= 1, @p2_1, 0) as p2,

			@e1_1 := (IFNULL(laporancu.piutang_beredar,0) - (IFNULL(laporancu.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(laporancu.piutang_lalai_1bulan,0)))) / IFNULL(laporancu.aset,0) as e1_1,

			@e1_2 := (IFNULL(laporancu.piutang_beredar,0) - IFNULL(laporancu.dcr,0)) / IFNULL(laporancu.aset,0) as e1_2,

			IF(@p1 >= 1 && @p2 > 0.35, @e1_1, @e1_2) as e1,

			(IFNULL(laporancu.nonsaham_unggulan,0) + IFNULL(laporancu.nonsaham_harian,0)) / IFNULL(laporancu.aset,0) as e5,

			IFNULL(laporancu.total_hutang_pihak3,0) / IFNULL(laporancu.aset,0) as e6,

			(@piutang_bersih - (IFNULL(laporancu.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(laporancu.piutang_lalai_1bulan,0)) + IFNULL(laporancu.aset_masalah,0))) / IFNULL(laporancu.aset,0) as e9,

			(IFNULL(laporancu.piutang_lalai_1bulan,0) + IFNULL(laporancu.piutang_lalai_12bulan,0)) / IFNULL(laporancu.piutang_beredar,0) as a1,

			IFNULL(laporancu.aset_tidak_menghasilkan,0) / IFNULL(laporancu.aset,0) as a2,
			
			@r7_1 := IFNULL(laporancu.bjs_saham,0) / @rata_saham as r7_1,

			@r7_2 := IFNULL(laporancu.bjs_saham,0) / ((IFNULL(laporancu.simpanan_saham_lalu,0) + IFNULL(laporancu.simpanan_saham,0)) / 2) as r7_2,

			IF(IFNULL(laporancu.simpanan_saham_des,0) = 0 && IFNULL(laporancu.simpanan_saham_lalu,0) != 0, @r7_2, @r7_1) as r7_1,

			(IFNULL(laporancu.total_biaya,0) - IFNULL(laporancu.beban_penyisihan_dcr,0)) / @rata_aset as r9,

			(IFNULL(laporancu.investasi_likuid,0) + IFNULL(laporancu.aset_likuid_tidak_menghasilkan,0) - IFNULL(laporancu.hutang_tidak_berbiaya_30hari,0)) / @tot_nonsaham as l1,

			(@total_anggota - IFNULL(laporancu.total_anggota_lalu,0)) / IFNULL(laporancu.total_anggota_lalu,0) as s10,

			(IFNULL(laporancu.aset,0) - IFNULL(laporancu.aset_lalu,0)) / IFNULL(laporancu.aset_lalu,0) as s11,
			
			@ideal := 0 as ideal,
			@ideal := IF(@p1 >= 1, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal
			'
		)])->FilterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearlsPeriode($periode)
	{
		$table_data = LaporanCu::select('laporancu.*',
		'cu.name as cu_name',
		'provinces.name as provinces_name')
		->leftjoin('cu','laporancu.no_ba','cu.no_ba')
    ->leftjoin('provinces','cu.id_provinces','provinces.id')
		->join(DB::RAW("(SELECT no_ba, MAX(periode) AS max_periode FROM laporancu WHERE periode <= '$periode' GROUP BY no_ba) latest_report"),function($join){
        $join->on('laporancu.no_ba','=','latest_report.no_ba');
        $join->on('laporancu.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw('
			@total_anggota := IFNULL(laporancu.l_biasa, 0) + IFNULL(laporancu.l_lbiasa,0) + IFNULL(laporancu.P_biasa,0) + IFNULL(laporancu.P_lbiasa,0) as total_anggota,

			@piutang_bersih := IFNULL(laporancu.dcr,0) + IFNULL(laporancu.dcu,0) + IFNULL(laporancu.iuran_gedung,0) + IFNULL(laporancu.donasi,0) + IFNULL(laporancu.shu_lalu,0) as piutang_bersih,	

			@rata_saham := (((IFNULL(laporancu.simpanan_saham_des,0) + IFNULL(laporancu.simpanan_saham,0))/2) / MONTH(laporancu.periode) ) * 12 as rata_saham,

			@tot_nonsaham := IFNULL(laporancu.nonsaham_harian,0) + IFNULL(laporancu.nonsaham_unggulan,0) as tot_nonsaham,

			@rata_aset := (IFNULL(laporancu.aset,0) + IFNULL(laporancu.aset_lalu,0)) / 2 as rata_aset,

			@p1 := IFNULL(laporancu.dcr, 0) / IFNULL(laporancu.piutang_lalai_12bulan,0) as p1,

			@p2_1 := (IFNULL(laporancu.dcr,0) - IFNULL(laporancu.piutang_lalai_12bulan,0))/IFNULL(laporancu.piutang_lalai_1bulan,0) as p2_1,

			if(@p1 >= 1, @p2_1, 0) as p2,

			@e1_1 := (IFNULL(laporancu.piutang_beredar,0) - (IFNULL(laporancu.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(laporancu.piutang_lalai_1bulan,0)))) / IFNULL(laporancu.aset,0) as e1_1,

			@e1_2 := (IFNULL(laporancu.piutang_beredar,0) - IFNULL(laporancu.dcr,0)) / IFNULL(laporancu.aset,0) as e1_2,

			IF(@p1 >= 1 && @p2 > 0.35, @e1_1, @e1_2) as e1,

			(IFNULL(laporancu.nonsaham_unggulan,0) + IFNULL(laporancu.nonsaham_harian,0)) / IFNULL(laporancu.aset,0) as e5,

			IFNULL(laporancu.total_hutang_pihak3,0) / IFNULL(laporancu.aset,0) as e6,

			(@piutang_bersih - (IFNULL(laporancu.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(laporancu.piutang_lalai_1bulan,0)) + IFNULL(laporancu.aset_masalah,0))) / IFNULL(laporancu.aset,0) as e9,

			(IFNULL(laporancu.piutang_lalai_1bulan,0) + IFNULL(laporancu.piutang_lalai_12bulan,0)) / IFNULL(laporancu.piutang_beredar,0) as a1,

			IFNULL(laporancu.aset_tidak_menghasilkan,0) / IFNULL(laporancu.aset,0) as a2,
			
			@r7_1 := IFNULL(laporancu.bjs_saham,0) / @rata_saham as r7_1,

			@r7_2 := IFNULL(laporancu.bjs_saham,0) / ((IFNULL(laporancu.simpanan_saham_lalu,0) + IFNULL(laporancu.simpanan_saham,0)) / 2) as r7_2,

			IF(IFNULL(laporancu.simpanan_saham_des,0) = 0 && IFNULL(laporancu.simpanan_saham_lalu,0) != 0, @r7_2, @r7_1) as r7_1,

			(IFNULL(laporancu.total_biaya,0) - IFNULL(laporancu.beban_penyisihan_dcr,0)) / @rata_aset as r9,

			(IFNULL(laporancu.investasi_likuid,0) + IFNULL(laporancu.aset_likuid_tidak_menghasilkan,0) - IFNULL(laporancu.hutang_tidak_berbiaya_30hari,0)) / @tot_nonsaham as l1,

			(@total_anggota - IFNULL(laporancu.total_anggota_lalu,0)) / IFNULL(laporancu.total_anggota_lalu,0) as s10,

			(IFNULL(laporancu.aset,0) - IFNULL(laporancu.aset_lalu,0)) / IFNULL(laporancu.aset_lalu,0) as s11,
			
			@ideal := 0 as ideal,
			@ideal := IF(@p1 >= 1, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal
			'
		)])->FilterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}


	public function getPeriode()
	{
		$table_data = LaporanCu::select('periode')->distinct()->orderBy('periode','DESC')->get();

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
