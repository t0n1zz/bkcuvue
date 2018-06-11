<?php
namespace App\Http\Controllers;

use DB;
use App\LaporanCu;
use App\LaporanTp;
use App\Support\ImageProcessing;
use Illuminate\Http\Request;

class LaporanTpController extends Controller{

	protected $message = 'Laporan TP/KP';

	public function index($id)
	{
		$table_data = LaporanTp::with('Tp')->select('Laporan_tp.*',
			'tp.name as tp_name',
			'provinces.name as provinces_name')
			->leftjoin('tp','Laporan_tp.id_tp','tp.id')
			->leftjoin('provinces','tp.id_provinces','provinces.id')
			->join(DB::RAW("(SELECT id_tp, MAX(periode) AS max_periode FROM Laporan_tp GROUP BY id_tp) latest_report"),function($join){
        $join->on('Laporan_tp.id_tp','=','latest_report.id_tp');
        $join->on('Laporan_tp.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw('
				(IFNULL(Laporan_tp.l_biasa, 0) + IFNULL(Laporan_tp.l_lbiasa,0) + IFNULL(Laporan_tp.P_biasa,0) + IFNULL(Laporan_tp.P_lbiasa,0)) as total_anggota,
				(IFNULL(Laporan_tp.piutang_beredar,0)/IFNULL(Laporan_tp.aset,0)) as rasio_beredar,
				((IFNULL(Laporan_tp.piutang_lalai_1bulan,0) + IFNULL(Laporan_tp.piutang_lalai_12bulan,0))/IFNULL(Laporan_tp.piutang_beredar,0)) as rasio_lalai,
				(IFNULL(Laporan_tp.piutang_beredar,0) - (IFNULL(Laporan_tp.piutang_lalai_1bulan,0) + IFNULL(Laporan_tp.piutang_lalai_12bulan,0))) as piutang_bersih'
			)])->whereHas('Tp', function($query) use ($id){
				$query->where('id_cu',$id);
			})->FilterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexTp($id)
	{
		$table_data = LaporanTp::with('Tp')->where('id_tp',$id)->addSelect(['*',DB::raw('
			(IFNULL(Laporan_tp.l_biasa, 0) + IFNULL(Laporan_tp.l_lbiasa,0) + IFNULL(Laporan_tp.P_biasa,0) + IFNULL(Laporan_tp.P_lbiasa,0)) as total_anggota,
			(IFNULL(Laporan_tp.piutang_beredar,0)/IFNULL(Laporan_tp.aset,0)) as rasio_beredar,
			((IFNULL(Laporan_tp.piutang_lalai_1bulan,0) + IFNULL(Laporan_tp.piutang_lalai_12bulan,0))/IFNULL(Laporan_tp.piutang_beredar,0)) as rasio_lalai,
			(IFNULL(Laporan_tp.piutang_beredar,0) - (IFNULL(Laporan_tp.piutang_lalai_1bulan,0) + IFNULL(Laporan_tp.piutang_lalai_12bulan,0))) as piutang_bersih'
		)])->filterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPeriode($id, $periode)
	{
		$table_data = LaporanTp::with('Tp')->whereHas('Tp', function($query) use ($id){
			$query->where('id_cu',$id);
		})->select('Laporan_tp.*',
		'tp.name as tp_name',
		'provinces.name as provinces_name')
		->leftjoin('tp','Laporan_tp.id_tp','tp.id')
    ->leftjoin('provinces','tp.id_provinces','provinces.id')
		->join(DB::RAW("(SELECT id_tp, MAX(periode) AS max_periode FROM Laporan_tp WHERE periode <= '$periode' GROUP BY id_tp) latest_report"),function($join){
        $join->on('Laporan_tp.id_tp','=','latest_report.id_tp');
        $join->on('Laporan_tp.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw('
			IFNULL(Laporan_tp.l_biasa, 0) + IFNULL(Laporan_tp.l_lbiasa,0) + IFNULL(Laporan_tp.P_biasa,0) + IFNULL(Laporan_tp.P_lbiasa,0) as total_anggota,
			(IFNULL(Laporan_tp.piutang_beredar,0)/IFNULL(Laporan_tp.aset,0)) as rasio_beredar,
			((IFNULL(Laporan_tp.piutang_lalai_1bulan,0) + IFNULL(Laporan_tp.piutang_lalai_12bulan,0))/IFNULL(Laporan_tp.piutang_beredar,0)) as rasio_lalai,
			(IFNULL(Laporan_tp.piutang_beredar,0) - (IFNULL(Laporan_tp.piutang_lalai_1bulan,0) + IFNULL(Laporan_tp.piutang_lalai_12bulan,0))) as piutang_bersih'
		)])->FilterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearls()
	{
		$table_data = LaporanTp::select('Laporan_tp.*',
			'tp.name as tp_name',
			'provinces.name as provinces_name')
			->leftjoin('tp','Laporan_tp.id_tp','tp.id')
			->leftjoin('provinces','tp.id_provinces','provinces.id')
			->join(DB::RAW("(SELECT id_tp, MAX(periode) AS max_periode FROM Laporan_tp GROUP BY id_tp) latest_report"),function($join){
        $join->on('Laporan_tp.id_tp','=','latest_report.id_tp');
        $join->on('Laporan_tp.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw('
				@total_anggota := IFNULL(Laporan_tp.l_biasa, 0) + IFNULL(Laporan_tp.l_lbiasa,0) + IFNULL(Laporan_tp.P_biasa,0) + IFNULL(Laporan_tp.P_lbiasa,0) as total_anggota,

				@piutang_bersih := IFNULL(Laporan_tp.dcr,0) + IFNULL(Laporan_tp.dcu,0) + IFNULL(Laporan_tp.iuran_gedung,0) + IFNULL(Laporan_tp.donasi,0) + IFNULL(Laporan_tp.shu_lalu,0) as piutang_bersih,	

				@rata_saham := (((IFNULL(Laporan_tp.simpanan_saham_des,0) + IFNULL(Laporan_tp.simpanan_saham,0))/2) / MONTH(Laporan_tp.periode) ) * 12 as rata_saham,

				@tot_nonsaham := IFNULL(Laporan_tp.nonsaham_harian,0) + IFNULL(Laporan_tp.nonsaham_unggulan,0) as tot_nonsaham,

				@rata_aset := (IFNULL(Laporan_tp.aset,0) + IFNULL(Laporan_tp.aset_lalu,0)) / 2 as rata_aset,

				@p1 := IFNULL(Laporan_tp.dcr, 0) / IFNULL(Laporan_tp.piutang_lalai_12bulan,0) as p1,

				@p2_1 := (IFNULL(Laporan_tp.dcr,0) - IFNULL(Laporan_tp.piutang_lalai_12bulan,0))/IFNULL(Laporan_tp.piutang_lalai_1bulan,0) as p2_1,

				@p2 := if(@p1 >= 1, @p2_1, 0) as p2,

				@e1_1 := (IFNULL(Laporan_tp.piutang_beredar,0) - (IFNULL(Laporan_tp.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(Laporan_tp.piutang_lalai_1bulan,0)))) / IFNULL(Laporan_tp.aset,0) as e1_1,

				@e1_2 := (IFNULL(Laporan_tp.piutang_beredar,0) - IFNULL(Laporan_tp.dcr,0)) / IFNULL(Laporan_tp.aset,0) as e1_2,

				@e1 := IF(@p1 >= 1 && @p2 > 0.35, @e1_1, @e1_2) as e1,

				@e5 := (IFNULL(Laporan_tp.nonsaham_unggulan,0) + IFNULL(Laporan_tp.nonsaham_harian,0)) / IFNULL(Laporan_tp.aset,0) as e5,

				@e6 := IFNULL(Laporan_tp.total_hutang_pihak3,0) / IFNULL(Laporan_tp.aset,0) as e6,

				@e9 := (@piutang_bersih - (IFNULL(Laporan_tp.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(Laporan_tp.piutang_lalai_1bulan,0)) + IFNULL(Laporan_tp.aset_masalah,0))) / IFNULL(Laporan_tp.aset,0) as e9,

				@a1 := (IFNULL(Laporan_tp.piutang_lalai_1bulan,0) + IFNULL(Laporan_tp.piutang_lalai_12bulan,0)) / IFNULL(Laporan_tp.piutang_beredar,0) as a1,

				@a2 := IFNULL(Laporan_tp.aset_tidak_menghasilkan,0) / IFNULL(Laporan_tp.aset,0) as a2,
				
				@r7_1 := IFNULL(Laporan_tp.bjs_saham,0) / @rata_saham as r7_1,

				@r7_2 := IFNULL(Laporan_tp.bjs_saham,0) / ((IFNULL(Laporan_tp.simpanan_saham_lalu,0) + IFNULL(Laporan_tp.simpanan_saham,0)) / 2) as r7_2,

				@e7_1 := IF(IFNULL(Laporan_tp.simpanan_saham_des,0) = 0 && IFNULL(Laporan_tp.simpanan_saham_lalu,0) != 0, @r7_2, @r7_1) as r7_1,

				@e9 := (IFNULL(Laporan_tp.total_biaya,0) - IFNULL(Laporan_tp.beban_penyisihan_dcr,0)) / @rata_aset as r9,

				@l1 := (IFNULL(Laporan_tp.investasi_likuid,0) + IFNULL(Laporan_tp.aset_likuid_tidak_menghasilkan,0) - IFNULL(Laporan_tp.hutang_tidak_berbiaya_30hari,0)) / @tot_nonsaham as l1,

				@s10 := (@total_anggota - IFNULL(Laporan_tp.total_anggota_lalu,0)) / IFNULL(Laporan_tp.total_anggota_lalu,0) as s10,

				@s1 := (IFNULL(Laporan_tp.aset,0) - IFNULL(Laporan_tp.aset_lalu,0)) / IFNULL(Laporan_tp.aset_lalu,0) as s11,
				
				@ideal := 0 as ideal,
				@ideal := IF(@p1 >= 1, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal

				'
			)])->FilterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearlsTp($id)
	{
		$table_data = LaporanTp::with('Tp')->where('id_tp',$id)->addSelect(['*',DB::raw('
			@total_anggota := IFNULL(Laporan_tp.l_biasa, 0) + IFNULL(Laporan_tp.l_lbiasa,0) + IFNULL(Laporan_tp.P_biasa,0) + IFNULL(Laporan_tp.P_lbiasa,0) as total_anggota,

			@piutang_bersih := IFNULL(Laporan_tp.dcr,0) + IFNULL(Laporan_tp.dcu,0) + IFNULL(Laporan_tp.iuran_gedung,0) + IFNULL(Laporan_tp.donasi,0) + IFNULL(Laporan_tp.shu_lalu,0) as piutang_bersih,	

			@rata_saham := (((IFNULL(Laporan_tp.simpanan_saham_des,0) + IFNULL(Laporan_tp.simpanan_saham,0))/2) / MONTH(Laporan_tp.periode) ) * 12 as rata_saham,

			@tot_nonsaham := IFNULL(Laporan_tp.nonsaham_harian,0) + IFNULL(Laporan_tp.nonsaham_unggulan,0) as tot_nonsaham,

			@rata_aset := (IFNULL(Laporan_tp.aset,0) + IFNULL(Laporan_tp.aset_lalu,0)) / 2 as rata_aset,

			@p1 := IFNULL(Laporan_tp.dcr, 0) / IFNULL(Laporan_tp.piutang_lalai_12bulan,0) as p1,

			@p2_1 := (IFNULL(Laporan_tp.dcr,0) - IFNULL(Laporan_tp.piutang_lalai_12bulan,0))/IFNULL(Laporan_tp.piutang_lalai_1bulan,0) as p2_1,

			if(@p1 >= 1, @p2_1, 0) as p2,

			@e1_1 := (IFNULL(Laporan_tp.piutang_beredar,0) - (IFNULL(Laporan_tp.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(Laporan_tp.piutang_lalai_1bulan,0)))) / IFNULL(Laporan_tp.aset,0) as e1_1,

			@e1_2 := (IFNULL(Laporan_tp.piutang_beredar,0) - IFNULL(Laporan_tp.dcr,0)) / IFNULL(Laporan_tp.aset,0) as e1_2,

			IF(@p1 >= 1 && @p2 > 0.35, @e1_1, @e1_2) as e1,

			(IFNULL(Laporan_tp.nonsaham_unggulan,0) + IFNULL(Laporan_tp.nonsaham_harian,0)) / IFNULL(Laporan_tp.aset,0) as e5,

			IFNULL(Laporan_tp.total_hutang_pihak3,0) / IFNULL(Laporan_tp.aset,0) as e6,

			(@piutang_bersih - (IFNULL(Laporan_tp.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(Laporan_tp.piutang_lalai_1bulan,0)) + IFNULL(Laporan_tp.aset_masalah,0))) / IFNULL(Laporan_tp.aset,0) as e9,

			(IFNULL(Laporan_tp.piutang_lalai_1bulan,0) + IFNULL(Laporan_tp.piutang_lalai_12bulan,0)) / IFNULL(Laporan_tp.piutang_beredar,0) as a1,

			IFNULL(Laporan_tp.aset_tidak_menghasilkan,0) / IFNULL(Laporan_tp.aset,0) as a2,
			
			@r7_1 := IFNULL(Laporan_tp.bjs_saham,0) / @rata_saham as r7_1,

			@r7_2 := IFNULL(Laporan_tp.bjs_saham,0) / ((IFNULL(Laporan_tp.simpanan_saham_lalu,0) + IFNULL(Laporan_tp.simpanan_saham,0)) / 2) as r7_2,

			IF(IFNULL(Laporan_tp.simpanan_saham_des,0) = 0 && IFNULL(Laporan_tp.simpanan_saham_lalu,0) != 0, @r7_2, @r7_1) as r7_1,

			(IFNULL(Laporan_tp.total_biaya,0) - IFNULL(Laporan_tp.beban_penyisihan_dcr,0)) / @rata_aset as r9,

			(IFNULL(Laporan_tp.investasi_likuid,0) + IFNULL(Laporan_tp.aset_likuid_tidak_menghasilkan,0) - IFNULL(Laporan_tp.hutang_tidak_berbiaya_30hari,0)) / @tot_nonsaham as l1,

			(@total_anggota - IFNULL(Laporan_tp.total_anggota_lalu,0)) / IFNULL(Laporan_tp.total_anggota_lalu,0) as s10,

			(IFNULL(Laporan_tp.aset,0) - IFNULL(Laporan_tp.aset_lalu,0)) / IFNULL(Laporan_tp.aset_lalu,0) as s11,
			
			@ideal := 0 as ideal,
			@ideal := IF(@p1 >= 1, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal
			'
		)])->FilterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearlsPeriode($id, $periode)
	{
		$table_data = LaporanTp::with('Tp')->whereHas('Tp', function($query) use ($id){
			$query->where('id_cu',$id);
		})->select('Laporan_tp.*',
		'tp.name as tp_name',
		'provinces.name as provinces_name')
		->leftjoin('tp','Laporan_tp.id_tp','tp.id')
    ->leftjoin('provinces','tp.id_provinces','provinces.id')
		->join(DB::RAW("(SELECT id_tp, MAX(periode) AS max_periode FROM Laporan_tp WHERE periode <= '$periode' GROUP BY id_tp) latest_report"),function($join){
        $join->on('Laporan_tp.id_tp','=','latest_report.id_tp');
        $join->on('Laporan_tp.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw('
			@total_anggota := IFNULL(Laporan_tp.l_biasa, 0) + IFNULL(Laporan_tp.l_lbiasa,0) + IFNULL(Laporan_tp.P_biasa,0) + IFNULL(Laporan_tp.P_lbiasa,0) as total_anggota,

			@piutang_bersih := IFNULL(Laporan_tp.dcr,0) + IFNULL(Laporan_tp.dcu,0) + IFNULL(Laporan_tp.iuran_gedung,0) + IFNULL(Laporan_tp.donasi,0) + IFNULL(Laporan_tp.shu_lalu,0) as piutang_bersih,	

			@rata_saham := (((IFNULL(Laporan_tp.simpanan_saham_des,0) + IFNULL(Laporan_tp.simpanan_saham,0))/2) / MONTH(Laporan_tp.periode) ) * 12 as rata_saham,

			@tot_nonsaham := IFNULL(Laporan_tp.nonsaham_harian,0) + IFNULL(Laporan_tp.nonsaham_unggulan,0) as tot_nonsaham,

			@rata_aset := (IFNULL(Laporan_tp.aset,0) + IFNULL(Laporan_tp.aset_lalu,0)) / 2 as rata_aset,

			@p1 := IFNULL(Laporan_tp.dcr, 0) / IFNULL(Laporan_tp.piutang_lalai_12bulan,0) as p1,

			@p2_1 := (IFNULL(Laporan_tp.dcr,0) - IFNULL(Laporan_tp.piutang_lalai_12bulan,0))/IFNULL(Laporan_tp.piutang_lalai_1bulan,0) as p2_1,

			if(@p1 >= 1, @p2_1, 0) as p2,

			@e1_1 := (IFNULL(Laporan_tp.piutang_beredar,0) - (IFNULL(Laporan_tp.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(Laporan_tp.piutang_lalai_1bulan,0)))) / IFNULL(Laporan_tp.aset,0) as e1_1,

			@e1_2 := (IFNULL(Laporan_tp.piutang_beredar,0) - IFNULL(Laporan_tp.dcr,0)) / IFNULL(Laporan_tp.aset,0) as e1_2,

			IF(@p1 >= 1 && @p2 > 0.35, @e1_1, @e1_2) as e1,

			(IFNULL(Laporan_tp.nonsaham_unggulan,0) + IFNULL(Laporan_tp.nonsaham_harian,0)) / IFNULL(Laporan_tp.aset,0) as e5,

			IFNULL(Laporan_tp.total_hutang_pihak3,0) / IFNULL(Laporan_tp.aset,0) as e6,

			(@piutang_bersih - (IFNULL(Laporan_tp.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(Laporan_tp.piutang_lalai_1bulan,0)) + IFNULL(Laporan_tp.aset_masalah,0))) / IFNULL(Laporan_tp.aset,0) as e9,

			(IFNULL(Laporan_tp.piutang_lalai_1bulan,0) + IFNULL(Laporan_tp.piutang_lalai_12bulan,0)) / IFNULL(Laporan_tp.piutang_beredar,0) as a1,

			IFNULL(Laporan_tp.aset_tidak_menghasilkan,0) / IFNULL(Laporan_tp.aset,0) as a2,
			
			@r7_1 := IFNULL(Laporan_tp.bjs_saham,0) / @rata_saham as r7_1,

			@r7_2 := IFNULL(Laporan_tp.bjs_saham,0) / ((IFNULL(Laporan_tp.simpanan_saham_lalu,0) + IFNULL(Laporan_tp.simpanan_saham,0)) / 2) as r7_2,

			IF(IFNULL(Laporan_tp.simpanan_saham_des,0) = 0 && IFNULL(Laporan_tp.simpanan_saham_lalu,0) != 0, @r7_2, @r7_1) as r7_1,

			(IFNULL(Laporan_tp.total_biaya,0) - IFNULL(Laporan_tp.beban_penyisihan_dcr,0)) / @rata_aset as r9,

			(IFNULL(Laporan_tp.investasi_likuid,0) + IFNULL(Laporan_tp.aset_likuid_tidak_menghasilkan,0) - IFNULL(Laporan_tp.hutang_tidak_berbiaya_30hari,0)) / @tot_nonsaham as l1,

			(@total_anggota - IFNULL(Laporan_tp.total_anggota_lalu,0)) / IFNULL(Laporan_tp.total_anggota_lalu,0) as s10,

			(IFNULL(Laporan_tp.aset,0) - IFNULL(Laporan_tp.aset_lalu,0)) / IFNULL(Laporan_tp.aset_lalu,0) as s11,
			
			@ideal := 0 as ideal,
			@ideal := IF(@p1 >= 1, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal
			'
		)])->FilterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function listLaporanTp($cu,$periode)
	{
		$table_data = LaporanTp::with('Tp')->select('id','id_tp')->whereHas('Tp', function($query) use ($cu){
			$query->where('id_cu',$cu);
		})->where('periode',$periode)->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function detail($id)
	{
		$table_data = LaporanTp::with('Tp.Cu')->where('id',$id)->addSelect(['*',DB::raw('
			(IFNULL(Laporan_tp.l_biasa, 0) + IFNULL(Laporan_tp.l_lbiasa,0) + IFNULL(Laporan_tp.P_biasa,0) + IFNULL(Laporan_tp.P_lbiasa,0)) as total_anggota,
			(IFNULL(Laporan_tp.piutang_beredar,0)/IFNULL(Laporan_tp.aset,0)) as rasio_beredar,
			((IFNULL(Laporan_tp.piutang_lalai_1bulan,0) + IFNULL(Laporan_tp.piutang_lalai_12bulan,0))/IFNULL(Laporan_tp.piutang_beredar,0)) as rasio_lalai,
			(IFNULL(Laporan_tp.piutang_beredar,0) - (IFNULL(Laporan_tp.piutang_lalai_1bulan,0) + IFNULL(Laporan_tp.piutang_lalai_12bulan,0))) as piutang_bersih'
		)])->first();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function detailPearls($id)
	{
		$table_data = LaporanTp::with('Tp.Cu')->where('id',$id)->addSelect(['*',DB::raw('
		@total_anggota := IFNULL(Laporan_tp.l_biasa, 0) + IFNULL(Laporan_tp.l_lbiasa,0) + IFNULL(Laporan_tp.P_biasa,0) + IFNULL(Laporan_tp.P_lbiasa,0) as total_anggota,

		@piutang_bersih := IFNULL(Laporan_tp.dcr,0) + IFNULL(Laporan_tp.dcu,0) + IFNULL(Laporan_tp.iuran_gedung,0) + IFNULL(Laporan_tp.donasi,0) + IFNULL(Laporan_tp.shu_lalu,0) as piutang_bersih,	

		@rata_saham := (((IFNULL(Laporan_tp.simpanan_saham_des,0) + IFNULL(Laporan_tp.simpanan_saham,0))/2) / MONTH(Laporan_tp.periode) ) * 12 as rata_saham,

		@tot_nonsaham := IFNULL(Laporan_tp.nonsaham_harian,0) + IFNULL(Laporan_tp.nonsaham_unggulan,0) as tot_nonsaham,

		@rata_aset := (IFNULL(Laporan_tp.aset,0) + IFNULL(Laporan_tp.aset_lalu,0)) / 2 as rata_aset,

		@p1 := IFNULL(Laporan_tp.dcr, 0) / IFNULL(Laporan_tp.piutang_lalai_12bulan,0) as p1,

		@p2_1 := (IFNULL(Laporan_tp.dcr,0) - IFNULL(Laporan_tp.piutang_lalai_12bulan,0))/IFNULL(Laporan_tp.piutang_lalai_1bulan,0) as p2_1,

		if(@p1 >= 1, @p2_1, 0) as p2,

		@e1_1 := (IFNULL(Laporan_tp.piutang_beredar,0) - (IFNULL(Laporan_tp.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(Laporan_tp.piutang_lalai_1bulan,0)))) / IFNULL(Laporan_tp.aset,0) as e1_1,

		@e1_2 := (IFNULL(Laporan_tp.piutang_beredar,0) - IFNULL(Laporan_tp.dcr,0)) / IFNULL(Laporan_tp.aset,0) as e1_2,

		IF(@p1 >= 1 && @p2 > 0.35, @e1_1, @e1_2) as e1,

		(IFNULL(Laporan_tp.nonsaham_unggulan,0) + IFNULL(Laporan_tp.nonsaham_harian,0)) / IFNULL(Laporan_tp.aset,0) as e5,

		IFNULL(Laporan_tp.total_hutang_pihak3,0) / IFNULL(Laporan_tp.aset,0) as e6,

		(@piutang_bersih - (IFNULL(Laporan_tp.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(Laporan_tp.piutang_lalai_1bulan,0)) + IFNULL(Laporan_tp.aset_masalah,0))) / IFNULL(Laporan_tp.aset,0) as e9,

		(IFNULL(Laporan_tp.piutang_lalai_1bulan,0) + IFNULL(Laporan_tp.piutang_lalai_12bulan,0)) / IFNULL(Laporan_tp.piutang_beredar,0) as a1,

		IFNULL(Laporan_tp.aset_tidak_menghasilkan,0) / IFNULL(Laporan_tp.aset,0) as a2,
		
		@r7_1 := IFNULL(Laporan_tp.bjs_saham,0) / @rata_saham as r7_1,

		@r7_2 := IFNULL(Laporan_tp.bjs_saham,0) / ((IFNULL(Laporan_tp.simpanan_saham_lalu,0) + IFNULL(Laporan_tp.simpanan_saham,0)) / 2) as r7_2,

		IF(IFNULL(Laporan_tp.simpanan_saham_des,0) = 0 && IFNULL(Laporan_tp.simpanan_saham_lalu,0) != 0, @r7_2, @r7_1) as r7_1,

		(IFNULL(Laporan_tp.total_biaya,0) - IFNULL(Laporan_tp.beban_penyisihan_dcr,0)) / @rata_aset as r9,

		(IFNULL(Laporan_tp.investasi_likuid,0) + IFNULL(Laporan_tp.aset_likuid_tidak_menghasilkan,0) - IFNULL(Laporan_tp.hutang_tidak_berbiaya_30hari,0)) / @tot_nonsaham as l1,

		(@total_anggota - IFNULL(Laporan_tp.total_anggota_lalu,0)) / IFNULL(Laporan_tp.total_anggota_lalu,0) as s10,

		(IFNULL(Laporan_tp.aset,0) - IFNULL(Laporan_tp.aset_lalu,0)) / IFNULL(Laporan_tp.aset_lalu,0) as s11,
		
		@ideal := 0 as ideal,
		@ideal := IF(@p1 >= 1, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal
		'
		)])->first();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function getPeriode()
	{
		$table_data = LaporanTp::select('periode')->distinct()->orderBy('periode','DESC')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function getPeriodeTp($id,$periode)
	{
		$table_data = LaporanTp::with('tp')->select('id','id_tp')->whereHas('Tp', function($query) use ($id){
			$query->where('id_cu',$id);
		})->where('periode',$periode)->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => LaporanTp::initialize(),
					'rules' => LaporanTp::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,LaporanTp::$rules);

		$name = $request->name;

		$kelas = LaporanTp::create($request->all());

		$this->konsolidasi($request);

		$this->store_notification($request,'Menambah');

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah'
			]);
	}

	public function show($id)
	{
		$kelas = LaporanTp::with('LaporanTpKategori')->findOrFail($id);

		return response()
			->json([
				'model' => $kelas
			]);
	}

	public function edit($id)
	{
		$kelas = LaporanTp::with('Tp')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,LaporanTp::$rules);

		$name = $request->name;

		$kelas = LaporanTp::findOrFail($id);

		$kelas->update($request->all());

		$this->konsolidasi($request);

		$this->store_notification($request,'Mengubah');

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = LaporanTp::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		$this->store_notification($kelas,'Menghapus');

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function konsolidasi($request)
	{
		$name = $request->name;
		$id_tp = $request->id_tp;
		$id_cu = $request->id_cu;
		$no_ba = $request->no_ba;
		$periode = $request->periode;

		$laporantp = LaporanTp::whereHas('Tp',function($query) use ($id_cu){
			$query->where('Tp.id_cu',$id_cu);
		})->where('periode',$periode)->get();

		$konsolidasi = [];

		foreach(LaporanTp::$summable as $col){
			$konsolidasi[$col] = $laporantp->sum($col);
		}

		$konsolidasi['id_cu'] = $id_cu;
		$konsolidasi['no_ba'] = $no_ba;
		$konsolidasi['tp'] = $laporantp->count();
		$konsolidasi['laju_inflasi'] = $request->laju_inflasi;
		$konsolidasi['harga_pasar'] = $request->harga_pasar;
		$konsolidasi['periode'] = $periode;

		$kelas2 = LaporanCu::where('id_cu',$id_cu)->where('periode',$periode)->first();

		if(empty($kelas2)){
			$kelas3 = LaporanCu::create($konsolidasi);
		}else{
			$kelas3 = LaporanCu::findOrFail($kelas2->id);
			$kelas3->update($konsolidasi);
		}
	}

	private function store_notification($request,$tipe)
	{
		$id_cu = \Auth::user()->getIdCu();

		$periode = \Carbon\Carbon::parse($request->periode)->format('d M Y');
		
		if($id_cu == '0'){
			$tp = Tp::where('id',$request->id_tp)->select('name')->first();
			NotificationHelper::store_laporan($request->id_tp,$request->id,'BKCU',$tp->name,$periode,$tipe);
		}else{
			$cu = Cu::where('id',$request->id_cu)->select('name')->first();
			$tp = Tp::where('id',$request->id_tp)->select('name')->first();
			NotificationHelper::store_laporan('0',$request->id,$cu->name,$tp->name,$periode,$tipe);
		}
	}
}
