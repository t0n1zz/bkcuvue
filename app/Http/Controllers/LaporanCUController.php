<?php
namespace App\Http\Controllers;

use DB;
use App\Tp;
use App\LaporanCu;
use App\LaporanTp;
use App\Support\ImageProcessing;
use App\Imports\LaporanCuDraftImport;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\HeadingRowImport;
use Illuminate\Http\Request;

class LaporanCuController extends Controller{

	protected $message = 'Laporan Cu';

	public function index()
	{
		$table_data = LaporanCu::select('laporan_cu.*',
			'cu.name as cu_name',
			'provinces.name as provinces_name')
			->leftjoin('cu','laporan_cu.id_cu','cu.id')
			->leftjoin('provinces','cu.id_provinces','provinces.id')
			->join(DB::RAW("(SELECT id_cu, MAX(periode) AS max_periode FROM laporan_cu GROUP BY id_cu) latest_report"),function($join){
        $join->on('laporan_cu.id_cu','=','latest_report.id_cu');
				$join->on('laporan_cu.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw('
				(IFNULL(laporan_cu.l_biasa, 0) + IFNULL(laporan_cu.l_lbiasa,0) + IFNULL(laporan_cu.P_biasa,0) + IFNULL(laporan_cu.P_lbiasa,0)) as total_anggota,
				(IFNULL(laporan_cu.piutang_beredar,0)/IFNULL(laporan_cu.aset,0)) as rasio_beredar,
				((IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0))/IFNULL(laporan_cu.piutang_beredar,0)) as rasio_lalai,
				(IFNULL(laporan_cu.piutang_beredar,0) - (IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0))) as piutang_bersih'
			)])->whereNull('cu.deleted_at')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id)
	{
		$table_data = LaporanCu::with('Cu')->where('id_cu',$id)->addSelect(['*',DB::raw('
			(IFNULL(laporan_cu.l_biasa, 0) + IFNULL(laporan_cu.l_lbiasa,0) + IFNULL(laporan_cu.P_biasa,0) + IFNULL(laporan_cu.P_lbiasa,0)) as total_anggota,
			(IFNULL(laporan_cu.piutang_beredar,0)/IFNULL(laporan_cu.aset,0)) as rasio_beredar,
			((IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0))/IFNULL(laporan_cu.piutang_beredar,0)) as rasio_lalai,
			(IFNULL(laporan_cu.piutang_beredar,0) - (IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0))) as piutang_bersih'
		)])->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPeriode($periode)
	{
		$table_data = LaporanCu::select('laporan_cu.*',
		'cu.name as cu_name',
		'provinces.name as provinces_name')
		->leftjoin('cu','laporan_cu.id_cu','cu.id')
    ->leftjoin('provinces','cu.id_provinces','provinces.id')
		->join(DB::RAW("(SELECT id_cu, MAX(periode) AS max_periode FROM laporan_cu WHERE periode <= '$periode' GROUP BY id_cu) latest_report"),function($join){
        $join->on('laporan_cu.id_cu','=','latest_report.id_cu');
				$join->on('laporan_cu.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw('
			IFNULL(laporan_cu.l_biasa, 0) + IFNULL(laporan_cu.l_lbiasa,0) + IFNULL(laporan_cu.P_biasa,0) + IFNULL(laporan_cu.P_lbiasa,0) as total_anggota,
			(IFNULL(laporan_cu.piutang_beredar,0)/IFNULL(laporan_cu.aset,0)) as rasio_beredar,
			((IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0))/IFNULL(laporan_cu.piutang_beredar,0)) as rasio_lalai,
			(IFNULL(laporan_cu.piutang_beredar,0) - (IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0))) as piutang_bersih'
		)])->whereNull('cu.deleted_at')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexGerakan()
	{
		$table_data = LaporanCu::select(DB::raw(
			'max(id) as id, max(id_cu) as id_cu, periode, count(*) as cu, max(created_at) as created_at, max(updated_at) as updated_at, 
			sum(l_biasa) as l_biasa, 
			sum(l_lbiasa) as l_lbiasa, 
			sum(p_biasa) as p_biasa, 
			sum(p_lbiasa) as p_lbiasa,
			sum(total_anggota_lalu) as total_anggota_lalu,
			sum(aset) as aset,
			sum(aset_lalu) as aset_lalu,
			sum(aset_masalah) as aset_masalah,
			sum(aset_tidak_menghasilkan) as aset_tidak_menghasilkan,
			sum(aktiva_lancar) as aktiva_lancar,
			sum(simpanan_saham) as simpanan_saham,
			sum(simpanan_saham_lalu) as simpanan_saham_lalu,
			sum(simpanan_saham_des) as simpanan_saham_des,
			sum(nonsaham_unggulan) as nonsaham_unggulan,
			sum(nonsaham_harian) as nonsaham_harian,
			sum(hutang_spd) as hutang_spd,
			sum(hutang_tidak_berbiaya_30hari) as hutang_tidak_berbiaya_30hari,
			sum(total_hutang_pihak3) as total_hutang_pihak3,
			sum(piutang_beredar) as piutang_beredar,
			sum(piutang_anggota) as piutang_anggota,
			sum(piutang_lalai_1bulan) as piutang_lalai_1bulan,
			sum(piutang_lalai_12bulan) as piutang_lalai_12bulan,
			sum(dcr) as dcr,
			sum(dcu) as dcu,
			sum(iuran_gedung) as iuran_gedung,
			sum(donasi) as donasi,
			sum(bjs_saham) as bjs_saham,
			sum(beban_penyisihan_dcr) as beban_penyisihan_dcr, 
			sum(investasi_likuid) as investasi_likuid,
			sum(total_pendapatan) as total_pendapatan,
			sum(total_biaya) as total_biaya,
			sum(shu) as shu,
			sum(shu_lalu) as shu_lalu,
			sum(rata_aset) as rata_aset,
			sum(laju_inflasi) as laju_inflasi,
			sum(harga_pasar) as harga_pasar,
			sum(IFNULL(laporan_cu.l_biasa, 0) + IFNULL(laporan_cu.l_lbiasa,0) + IFNULL(laporan_cu.P_biasa,0) + IFNULL(laporan_cu.P_lbiasa,0)) as total_anggota,
			sum((IFNULL(laporan_cu.piutang_beredar,0)/IFNULL(laporan_cu.aset,0))) as rasio_beredar,
			sum(((IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0))/IFNULL(laporan_cu.piutang_beredar,0))) as rasio_lalai,
			sum((IFNULL(laporan_cu.piutang_beredar,0) - (IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0)))) as piutang_bersih
			'))->groupBy('periode')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearls()
	{
		$table_data = LaporanCu::select('laporan_cu.*',
			'cu.name as cu_name',
			'provinces.name as provinces_name')
			->leftjoin('cu','laporan_cu.id_cu','cu.id')
			->leftjoin('provinces','cu.id_provinces','provinces.id')
			->join(DB::RAW("(SELECT id_cu, MAX(periode) AS max_periode FROM laporan_cu GROUP BY id_cu) latest_report"),function($join){
        $join->on('laporan_cu.id_cu','=','latest_report.id_cu');
        $join->on('laporan_cu.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw('
				@total_anggota := IFNULL(laporan_cu.l_biasa, 0) + IFNULL(laporan_cu.l_lbiasa,0) + IFNULL(laporan_cu.P_biasa,0) + IFNULL(laporan_cu.P_lbiasa,0) as total_anggota,

				@piutang_bersih := IFNULL(laporan_cu.dcr,0) + IFNULL(laporan_cu.dcu,0) + IFNULL(laporan_cu.iuran_gedung,0) + IFNULL(laporan_cu.donasi,0) + IFNULL(laporan_cu.shu_lalu,0) as piutang_bersih,	

				@rata_saham := (((IFNULL(laporan_cu.simpanan_saham_des,0) + IFNULL(laporan_cu.simpanan_saham,0))/2) / MONTH(laporan_cu.periode) ) * 12 as rata_saham,

				@tot_nonsaham := IFNULL(laporan_cu.nonsaham_harian,0) + IFNULL(laporan_cu.nonsaham_unggulan,0) as tot_nonsaham,

				@rata_aset := (IFNULL(laporan_cu.aset,0) + IFNULL(laporan_cu.aset_lalu,0)) / 2 as rata_aset,

				@p1 := IFNULL(laporan_cu.dcr, 0) / IFNULL(laporan_cu.piutang_lalai_12bulan,0) as p1,

				@p2_1 := (IFNULL(laporan_cu.dcr,0) - IFNULL(laporan_cu.piutang_lalai_12bulan,0))/IFNULL(laporan_cu.piutang_lalai_1bulan,0) as p2_1,

				@p2 := if(@p1 >= 1, @p2_1, 0) as p2,

				@e1_1 := (IFNULL(laporan_cu.piutang_beredar,0) - (IFNULL(laporan_cu.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(laporan_cu.piutang_lalai_1bulan,0)))) / IFNULL(laporan_cu.aset,0) as e1_1,

				@e1_2 := (IFNULL(laporan_cu.piutang_beredar,0) - IFNULL(laporan_cu.dcr,0)) / IFNULL(laporan_cu.aset,0) as e1_2,

				@e1 := IF(@p1 >= 1 && @p2 > 0.35, @e1_1, @e1_2) as e1,

				@e5 := (IFNULL(laporan_cu.nonsaham_unggulan,0) + IFNULL(laporan_cu.nonsaham_harian,0)) / IFNULL(laporan_cu.aset,0) as e5,

				@e6 := IFNULL(laporan_cu.total_hutang_pihak3,0) / IFNULL(laporan_cu.aset,0) as e6,

				@e9 := (@piutang_bersih - (IFNULL(laporan_cu.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(laporan_cu.piutang_lalai_1bulan,0)) + IFNULL(laporan_cu.aset_masalah,0))) / IFNULL(laporan_cu.aset,0) as e9,

				@a1 := (IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0)) / IFNULL(laporan_cu.piutang_beredar,0) as a1,

				@a2 := IFNULL(laporan_cu.aset_tidak_menghasilkan,0) / IFNULL(laporan_cu.aset,0) as a2,
				
				@r7_1 := IFNULL(laporan_cu.bjs_saham,0) / @rata_saham as r7_1,

				@r7_2 := IFNULL(laporan_cu.bjs_saham,0) / ((IFNULL(laporan_cu.simpanan_saham_lalu,0) + IFNULL(laporan_cu.simpanan_saham,0)) / 2) as r7_2,

				@e7_1 := IF(IFNULL(laporan_cu.simpanan_saham_des,0) = 0 && IFNULL(laporan_cu.simpanan_saham_lalu,0) != 0, @r7_2, @r7_1) as r7_1,

				@e9 := (IFNULL(laporan_cu.total_biaya,0) - IFNULL(laporan_cu.beban_penyisihan_dcr,0)) / @rata_aset as r9,

				@l1 := (IFNULL(laporan_cu.investasi_likuid,0) + IFNULL(laporan_cu.aset_likuid_tidak_menghasilkan,0) - IFNULL(laporan_cu.hutang_tidak_berbiaya_30hari,0)) / @tot_nonsaham as l1,

				@s10 := (@total_anggota - IFNULL(laporan_cu.total_anggota_lalu,0)) / IFNULL(laporan_cu.total_anggota_lalu,0) as s10,

				@s1 := (IFNULL(laporan_cu.aset,0) - IFNULL(laporan_cu.aset_lalu,0)) / IFNULL(laporan_cu.aset_lalu,0) as s11,
				
				@ideal := 0 as ideal,
				@ideal := IF(@p1 >= 1, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal

				'
			)])->whereNull('cu.deleted_at')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearlsCu($id)
	{
		$table_data = LaporanCu::with('Cu')->where('id_cu',$id)->addSelect(['*',DB::raw('
			@total_anggota := IFNULL(laporan_cu.l_biasa, 0) + IFNULL(laporan_cu.l_lbiasa,0) + IFNULL(laporan_cu.P_biasa,0) + IFNULL(laporan_cu.P_lbiasa,0) as total_anggota,

			@piutang_bersih := IFNULL(laporan_cu.dcr,0) + IFNULL(laporan_cu.dcu,0) + IFNULL(laporan_cu.iuran_gedung,0) + IFNULL(laporan_cu.donasi,0) + IFNULL(laporan_cu.shu_lalu,0) as piutang_bersih,	

			@rata_saham := (((IFNULL(laporan_cu.simpanan_saham_des,0) + IFNULL(laporan_cu.simpanan_saham,0))/2) / MONTH(laporan_cu.periode) ) * 12 as rata_saham,

			@tot_nonsaham := IFNULL(laporan_cu.nonsaham_harian,0) + IFNULL(laporan_cu.nonsaham_unggulan,0) as tot_nonsaham,

			@rata_aset := (IFNULL(laporan_cu.aset,0) + IFNULL(laporan_cu.aset_lalu,0)) / 2 as rata_aset,

			@p1 := IFNULL(laporan_cu.dcr, 0) / IFNULL(laporan_cu.piutang_lalai_12bulan,0) as p1,

			@p2_1 := (IFNULL(laporan_cu.dcr,0) - IFNULL(laporan_cu.piutang_lalai_12bulan,0))/IFNULL(laporan_cu.piutang_lalai_1bulan,0) as p2_1,

			@p2 := if(@p1 >= 1, @p2_1, 0) as p2,

			@e1_1 := (IFNULL(laporan_cu.piutang_beredar,0) - (IFNULL(laporan_cu.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(laporan_cu.piutang_lalai_1bulan,0)))) / IFNULL(laporan_cu.aset,0) as e1_1,

			@e1_2 := (IFNULL(laporan_cu.piutang_beredar,0) - IFNULL(laporan_cu.dcr,0)) / IFNULL(laporan_cu.aset,0) as e1_2,

			@e1 := IF(@p1 >= 1 && @p2 > 0.35, @e1_1, @e1_2) as e1,

			@e5 := (IFNULL(laporan_cu.nonsaham_unggulan,0) + IFNULL(laporan_cu.nonsaham_harian,0)) / IFNULL(laporan_cu.aset,0) as e5,

			@e6 := IFNULL(laporan_cu.total_hutang_pihak3,0) / IFNULL(laporan_cu.aset,0) as e6,

			@e9 := (@piutang_bersih - (IFNULL(laporan_cu.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(laporan_cu.piutang_lalai_1bulan,0)) + IFNULL(laporan_cu.aset_masalah,0))) / IFNULL(laporan_cu.aset,0) as e9,

			@a1 := (IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0)) / IFNULL(laporan_cu.piutang_beredar,0) as a1,

			@a2 := IFNULL(laporan_cu.aset_tidak_menghasilkan,0) / IFNULL(laporan_cu.aset,0) as a2,
			
			@r7_1 := IFNULL(laporan_cu.bjs_saham,0) / @rata_saham as r7_1,

			@r7_2 := IFNULL(laporan_cu.bjs_saham,0) / ((IFNULL(laporan_cu.simpanan_saham_lalu,0) + IFNULL(laporan_cu.simpanan_saham,0)) / 2) as r7_2,

			@r7_1 := IF(IFNULL(laporan_cu.simpanan_saham_des,0) = 0 && IFNULL(laporan_cu.simpanan_saham_lalu,0) != 0, @r7_2, @r7_1) as r7_1,

			@r9 := (IFNULL(laporan_cu.total_biaya,0) - IFNULL(laporan_cu.beban_penyisihan_dcr,0)) / @rata_aset as r9,

			@l1 := (IFNULL(laporan_cu.investasi_likuid,0) + IFNULL(laporan_cu.aset_likuid_tidak_menghasilkan,0) - IFNULL(laporan_cu.hutang_tidak_berbiaya_30hari,0)) / @tot_nonsaham as l1,

			@s10 := (@total_anggota - IFNULL(laporan_cu.total_anggota_lalu,0)) / IFNULL(laporan_cu.total_anggota_lalu,0) as s10,

			@s11 := (IFNULL(laporan_cu.aset,0) - IFNULL(laporan_cu.aset_lalu,0)) / IFNULL(laporan_cu.aset_lalu,0) as s11,
			
			@ideal := 0 as ideal,
			@ideal := IF(@p1 >= 1, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@p2 > 0.35 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@e1 > 0.7 && @e1 < 0.8, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@e5 > 0.7 && @e5 < 0.8, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@e6 <= 0.05 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@e9 >= 0.1 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@a1 <= 0.05 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@a2 < 0.05 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@r7_1 = harga_pasar , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@r9 = 0.05 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@l1 >= 0.15 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@s10 > 0.12 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@s11 > (0.1 + laju_inflasi) , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@tot_ideal := @ideal as tot_ideal
			'
		)])->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPearlsPeriode($periode)
	{
		$table_data = LaporanCu::select('laporan_cu.*',
		'cu.name as cu_name',
		'provinces.name as provinces_name')
		->leftjoin('cu','laporan_cu.id_cu','cu.id')
    ->leftjoin('provinces','cu.id_provinces','provinces.id')
		->join(DB::RAW("(SELECT id_cu, MAX(periode) AS max_periode FROM laporan_cu WHERE periode <= '$periode' GROUP BY id_cu) latest_report"),function($join){
        $join->on('laporan_cu.id_cu','=','latest_report.id_cu');
        $join->on('laporan_cu.periode','=','latest_report.max_periode');
		})->addSelect([DB::raw('
			@total_anggota := IFNULL(laporan_cu.l_biasa, 0) + IFNULL(laporan_cu.l_lbiasa,0) + IFNULL(laporan_cu.P_biasa,0) + IFNULL(laporan_cu.P_lbiasa,0) as total_anggota,

			@piutang_bersih := IFNULL(laporan_cu.dcr,0) + IFNULL(laporan_cu.dcu,0) + IFNULL(laporan_cu.iuran_gedung,0) + IFNULL(laporan_cu.donasi,0) + IFNULL(laporan_cu.shu_lalu,0) as piutang_bersih,	

			@rata_saham := (((IFNULL(laporan_cu.simpanan_saham_des,0) + IFNULL(laporan_cu.simpanan_saham,0))/2) / MONTH(laporan_cu.periode) ) * 12 as rata_saham,

			@tot_nonsaham := IFNULL(laporan_cu.nonsaham_harian,0) + IFNULL(laporan_cu.nonsaham_unggulan,0) as tot_nonsaham,

			@rata_aset := (IFNULL(laporan_cu.aset,0) + IFNULL(laporan_cu.aset_lalu,0)) / 2 as rata_aset,

			@p1 := IFNULL(laporan_cu.dcr, 0) / IFNULL(laporan_cu.piutang_lalai_12bulan,0) as p1,

			@p2_1 := (IFNULL(laporan_cu.dcr,0) - IFNULL(laporan_cu.piutang_lalai_12bulan,0))/IFNULL(laporan_cu.piutang_lalai_1bulan,0) as p2_1,

			if(@p1 >= 1, @p2_1, 0) as p2,

			@e1_1 := (IFNULL(laporan_cu.piutang_beredar,0) - (IFNULL(laporan_cu.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(laporan_cu.piutang_lalai_1bulan,0)))) / IFNULL(laporan_cu.aset,0) as e1_1,

			@e1_2 := (IFNULL(laporan_cu.piutang_beredar,0) - IFNULL(laporan_cu.dcr,0)) / IFNULL(laporan_cu.aset,0) as e1_2,

			IF(@p1 >= 1 && @p2 > 0.35, @e1_1, @e1_2) as e1,

			(IFNULL(laporan_cu.nonsaham_unggulan,0) + IFNULL(laporan_cu.nonsaham_harian,0)) / IFNULL(laporan_cu.aset,0) as e5,

			IFNULL(laporan_cu.total_hutang_pihak3,0) / IFNULL(laporan_cu.aset,0) as e6,

			(@piutang_bersih - (IFNULL(laporan_cu.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(laporan_cu.piutang_lalai_1bulan,0)) + IFNULL(laporan_cu.aset_masalah,0))) / IFNULL(laporan_cu.aset,0) as e9,

			(IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0)) / IFNULL(laporan_cu.piutang_beredar,0) as a1,

			IFNULL(laporan_cu.aset_tidak_menghasilkan,0) / IFNULL(laporan_cu.aset,0) as a2,
			
			@r7_1 := IFNULL(laporan_cu.bjs_saham,0) / @rata_saham as r7_1,

			@r7_2 := IFNULL(laporan_cu.bjs_saham,0) / ((IFNULL(laporan_cu.simpanan_saham_lalu,0) + IFNULL(laporan_cu.simpanan_saham,0)) / 2) as r7_2,

			IF(IFNULL(laporan_cu.simpanan_saham_des,0) = 0 && IFNULL(laporan_cu.simpanan_saham_lalu,0) != 0, @r7_2, @r7_1) as r7_1,

			(IFNULL(laporan_cu.total_biaya,0) - IFNULL(laporan_cu.beban_penyisihan_dcr,0)) / @rata_aset as r9,

			(IFNULL(laporan_cu.investasi_likuid,0) + IFNULL(laporan_cu.aset_likuid_tidak_menghasilkan,0) - IFNULL(laporan_cu.hutang_tidak_berbiaya_30hari,0)) / @tot_nonsaham as l1,

			(@total_anggota - IFNULL(laporan_cu.total_anggota_lalu,0)) / IFNULL(laporan_cu.total_anggota_lalu,0) as s10,

			(IFNULL(laporan_cu.aset,0) - IFNULL(laporan_cu.aset_lalu,0)) / IFNULL(laporan_cu.aset_lalu,0) as s11,
			
			@ideal := 0 as ideal,
			@ideal := IF(@p1 >= 1, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@p2 > 0.35 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@e1 > 0.7 && @e1 < 0.8, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@e5 > 0.7 && @e5 < 0.8, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@e6 <= 0.05 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@e9 >= 0.1 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@a1 <= 0.05 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@a2 < 0.05 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@r7_1 = harga_pasar , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@r9 = 0.05 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@l1 >= 0.15 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@s10 > 0.12 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@ideal := IF(@s11 > (0.1 + laju_inflasi) , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
			@tot_ideal := @ideal as tot_ideal
			'
		)])->whereNull('cu.deleted_at')->advancedFilter();

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

	public function getPeriodeCu($id)
	{
		$table_data = LaporanCu::select('id','periode')->where('id_cu',$id)->distinct()->orderBy('periode','DESC')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function detail($id)
	{
		$table_data = LaporanCu::with('cu')->where('id',$id)->addSelect([DB::raw('*,
				(IFNULL(laporan_cu.l_biasa, 0) + IFNULL(laporan_cu.l_lbiasa,0) + IFNULL(laporan_cu.P_biasa,0) + IFNULL(laporan_cu.P_lbiasa,0)) as total_anggota,
				(IFNULL(laporan_cu.piutang_beredar,0)/IFNULL(laporan_cu.aset,0)) as rasio_beredar,
				((IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0))/IFNULL(laporan_cu.piutang_beredar,0)) as rasio_lalai,
				(IFNULL(laporan_cu.piutang_beredar,0) - (IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0))) as piutang_bersih'
			)])->first();
	
		$h = $table_data->revisionHistory;
		$history = collect();		
		foreach($h as $hs){
			$n = collect($hs);
			$n->put('user',$hs->userResponsible());
			$history->push($n);
		}

		return response()
			->json([
				'model' => $table_data,
				'history' => $history
			]);
	}

	public function detailPearls($id)
	{
		$table_data = LaporanCu::with('cu')->where('id',$id)->addSelect([DB::raw('*,
			@total_anggota := IFNULL(laporan_cu.l_biasa, 0) + IFNULL(laporan_cu.l_lbiasa,0) + IFNULL(laporan_cu.P_biasa,0) + IFNULL(laporan_cu.P_lbiasa,0) as total_anggota,

			@piutang_bersih := IFNULL(laporan_cu.dcr,0) + IFNULL(laporan_cu.dcu,0) + IFNULL(laporan_cu.iuran_gedung,0) + IFNULL(laporan_cu.donasi,0) + IFNULL(laporan_cu.shu_lalu,0) as piutang_bersih,	

			@rata_saham := (((IFNULL(laporan_cu.simpanan_saham_des,0) + IFNULL(laporan_cu.simpanan_saham,0))/2) / MONTH(laporan_cu.periode) ) * 12 as rata_saham,

			@tot_nonsaham := IFNULL(laporan_cu.nonsaham_harian,0) + IFNULL(laporan_cu.nonsaham_unggulan,0) as tot_nonsaham,

			@rata_aset := (IFNULL(laporan_cu.aset,0) + IFNULL(laporan_cu.aset_lalu,0)) / 2 as rata_aset,

			@p1 := IFNULL(laporan_cu.dcr, 0) / IFNULL(laporan_cu.piutang_lalai_12bulan,0) as p1,

			@p2_1 := (IFNULL(laporan_cu.dcr,0) - IFNULL(laporan_cu.piutang_lalai_12bulan,0))/IFNULL(laporan_cu.piutang_lalai_1bulan,0) as p2_1,

			@p2 := if(@p1 >= 1, @p2_1, 0) as p2,

			@e1_1 := (IFNULL(laporan_cu.piutang_beredar,0) - (IFNULL(laporan_cu.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(laporan_cu.piutang_lalai_1bulan,0)))) / IFNULL(laporan_cu.aset,0) as e1_1,

			@e1_2 := (IFNULL(laporan_cu.piutang_beredar,0) - IFNULL(laporan_cu.dcr,0)) / IFNULL(laporan_cu.aset,0) as e1_2,

			@e1 := IF(@p1 >= 1 && @p2 > 0.35, @e1_1, @e1_2) as e1,

			@e5 := (IFNULL(laporan_cu.nonsaham_unggulan,0) + IFNULL(laporan_cu.nonsaham_harian,0)) / IFNULL(laporan_cu.aset,0) as e5,

			@e6 := IFNULL(laporan_cu.total_hutang_pihak3,0) / IFNULL(laporan_cu.aset,0) as e6,

			@e9 := (@piutang_bersih - (IFNULL(laporan_cu.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(laporan_cu.piutang_lalai_1bulan,0)) + IFNULL(laporan_cu.aset_masalah,0))) / IFNULL(laporan_cu.aset,0) as e9,

			@a1 := (IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0)) / IFNULL(laporan_cu.piutang_beredar,0) as a1,

			@a2 := IFNULL(laporan_cu.aset_tidak_menghasilkan,0) / IFNULL(laporan_cu.aset,0) as a2,
			
			@r7_1 := IFNULL(laporan_cu.bjs_saham,0) / @rata_saham as r7_1,

			@r7_2 := IFNULL(laporan_cu.bjs_saham,0) / ((IFNULL(laporan_cu.simpanan_saham_lalu,0) + IFNULL(laporan_cu.simpanan_saham,0)) / 2) as r7_2,

			@e7_1 := IF(IFNULL(laporan_cu.simpanan_saham_des,0) = 0 && IFNULL(laporan_cu.simpanan_saham_lalu,0) != 0, @r7_2, @r7_1) as r7_1,

			@e9 := (IFNULL(laporan_cu.total_biaya,0) - IFNULL(laporan_cu.beban_penyisihan_dcr,0)) / @rata_aset as r9,

			@l1 := (IFNULL(laporan_cu.investasi_likuid,0) + IFNULL(laporan_cu.aset_likuid_tidak_menghasilkan,0) - IFNULL(laporan_cu.hutang_tidak_berbiaya_30hari,0)) / @tot_nonsaham as l1,

			@s10 := (@total_anggota - IFNULL(laporan_cu.total_anggota_lalu,0)) / IFNULL(laporan_cu.total_anggota_lalu,0) as s10,

			@s1 := (IFNULL(laporan_cu.aset,0) - IFNULL(laporan_cu.aset_lalu,0)) / IFNULL(laporan_cu.aset_lalu,0) as s11,
			
			@ideal := 0 as ideal,
			@ideal := IF(@p1 >= 1, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal'
			)])->first();

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

		$this->store_notification($request,'Menambah');
		
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

		$this->store_notification($request,'Mengubah');

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

		$this->store_notification($kelas,'Menghapus');

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function upload_excel(Request $request)
	{
		// dd($request->all());
		// $headings = (new HeadingRowImport)->toArray(request()->file('file'));
		// dd($headings);
		Excel::import(new LaporanCuDraftImport, request()->file('file'));

		return response()
			->json([
				'uploaded' => true,
				'message' => $this->message.' berhasil diupload ke tabel draft, silahkan selanjutnya memeriksa hasil upload sebelum dimasukkan ke tabel utama'
			]);
	}

	private function store_notification($request,$tipe)
	{
		$id_cu = \Auth::user()->getIdCu();

		$periode = \Carbon\Carbon::parse($request->periode)->format('d M Y');

		if($id_cu == '0'){
			NotificationHelper::store_laporan($request->id_cu,$request->id,'BKCU','',$periode,$tipe);
		}else{
			$cu = Cu::where('id',$request->id_cu)->select('name')->first();
			NotificationHelper::store_laporan('0',$request->id,$cu->name,'',$periode,$tipe);
		}
	}
}
