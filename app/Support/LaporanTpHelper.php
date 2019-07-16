<?php
namespace App\Support;

use App\LaporanTp;
use App\LaporanCu;
use Illuminate\Http\Request;

class LaporanTpHelper{

	public static function konsolidasi($request){
		$id_cu = $request->id_cu;
		$no_ba = $request->no_ba;
		$periode = $request->periode;

		$laporantp = LaporanTp::whereHas('Tp',function($query) use ($id_cu){
			$query->where('id_cu',$id_cu);
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

	public static function queryPerkembangan(){
		return '
		(IFNULL(laporan_tp.l_biasa, 0) + IFNULL(laporan_tp.l_lbiasa,0) + IFNULL(laporan_tp.P_biasa,0) + IFNULL(laporan_tp.P_lbiasa,0)) as total_anggota,
		(IFNULL(laporan_tp.piutang_beredar,0)/IFNULL(laporan_tp.aset,0)) as rasio_beredar,
		((IFNULL(laporan_tp.piutang_lalai_1bulan,0) + IFNULL(laporan_tp.piutang_lalai_12bulan,0))/IFNULL(laporan_tp.piutang_beredar,0)) as rasio_lalai,
		(IFNULL(laporan_tp.piutang_beredar,0) - (IFNULL(laporan_tp.piutang_lalai_1bulan,0) + IFNULL(laporan_tp.piutang_lalai_12bulan,0))) as piutang_bersih';
	}

	public static function queryPEARLS(){
		return '
		@total_anggota := IFNULL(laporan_tp.l_biasa, 0) + IFNULL(laporan_tp.l_lbiasa,0) + IFNULL(laporan_tp.P_biasa,0) + IFNULL(laporan_tp.P_lbiasa,0) as total_anggota,

		@piutang_bersih := IFNULL(laporan_tp.dcr,0) + IFNULL(laporan_tp.dcu,0) + IFNULL(laporan_tp.dana_gedung,0) + IFNULL(laporan_tp.donasi,0) + IFNULL(laporan_tp.shu_lalu,0) as piutang_bersih,	

		@rata_saham := (((IFNULL(laporan_tp.simpanan_saham_des,0) + IFNULL(laporan_tp.simpanan_saham,0))/2) / MONTH(laporan_tp.periode) ) * 12 as rata_saham,

		@tot_nonsaham := IFNULL(laporan_tp.nonsaham_harian,0) + IFNULL(laporan_tp.nonsaham_unggulan,0) as tot_nonsaham,

		@rata_aset := (IFNULL(laporan_tp.aset,0) + IFNULL(laporan_tp.aset_lalu,0)) / 2 as rata_aset,

		@p1 := IFNULL(laporan_tp.dcr, 0) / IFNULL(laporan_tp.piutang_lalai_12bulan,0) as p1,

		@p2_1 := (IFNULL(laporan_tp.dcr,0) - IFNULL(laporan_tp.piutang_lalai_12bulan,0))/IFNULL(laporan_tp.piutang_lalai_1bulan,0) as p2_1,

		@p2 := if(@p1 >= 1, @p2_1, 0) as p2,

		@e1_1 := (IFNULL(laporan_tp.piutang_beredar,0) - (IFNULL(laporan_tp.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(laporan_tp.piutang_lalai_1bulan,0)))) / IFNULL(laporan_tp.aset,0) as e1_1,

		@e1_2 := (IFNULL(laporan_tp.piutang_beredar,0) - IFNULL(laporan_tp.dcr,0)) / IFNULL(laporan_tp.aset,0) as e1_2,

		@e1 := IF(@p1 >= 1 && @p2 > 0.35, @e1_1, @e1_2) as e1,

		@e5 := (IFNULL(laporan_tp.nonsaham_unggulan,0) + IFNULL(laporan_tp.nonsaham_harian,0)) / IFNULL(laporan_tp.aset,0) as e5,

		@e6 := IFNULL(laporan_tp.total_hutang_pihak3,0) / IFNULL(laporan_tp.aset,0) as e6,

		@e7 := IFNULL(laporan_tp.simpanan_saham,0) / IFNULL(laporan_tp.aset,0) as e7,

		@e9 := (@piutang_bersih - (IFNULL(laporan_tp.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(laporan_tp.piutang_lalai_1bulan,0)) + IFNULL(laporan_tp.aset_masalah,0))) / IFNULL(laporan_tp.aset,0) as e9,

		@a1 := (IFNULL(laporan_tp.piutang_lalai_1bulan,0) + IFNULL(laporan_tp.piutang_lalai_12bulan,0)) / IFNULL(laporan_tp.piutang_beredar,0) as a1,

		@a2 := IFNULL(laporan_tp.aset_tidak_menghasilkan,0) / IFNULL(laporan_tp.aset,0) as a2,
		
		@r7_1 := IFNULL(laporan_tp.bjs_saham,0) / @rata_saham as r7_1,

		@r7_2 := IFNULL(laporan_tp.bjs_saham,0) / ((IFNULL(laporan_tp.simpanan_saham_lalu,0) + IFNULL(laporan_tp.simpanan_saham,0)) / 2) as r7_2,

		@e7_1 := IF(IFNULL(laporan_tp.simpanan_saham_des,0) = 0 && IFNULL(laporan_tp.simpanan_saham_lalu,0) != 0, @r7_2, @r7_1) as r7_1,

		@e9 := (IFNULL(laporan_tp.total_biaya,0) - IFNULL(laporan_tp.beban_penyisihan_dcr,0)) / @rata_aset as r9,

		@l1 := (IFNULL(laporan_tp.investasi_likuid,0) + IFNULL(laporan_tp.aset_likuid_tidak_menghasilkan,0) - IFNULL(laporan_tp.hutang_tidak_berbiaya_30hari,0)) / @tot_nonsaham as l1,

		@l2 := (IFNULL(laporan_tp.investasi_likuid,0) + IFNULL(laporan_tp.aset_likuid_tidak_menghasilkan,0) - IFNULL(laporan_tp.hutang_tidak_berbiaya_30hari,0)) / IFNULL(laporan_tp.aset,0) l2,

		@s10 := (@total_anggota - IFNULL(laporan_tp.total_anggota_lalu,0)) / IFNULL(laporan_tp.total_anggota_lalu,0) as s10,

		@s1 := (IFNULL(laporan_tp.aset,0) - IFNULL(laporan_tp.aset_lalu,0)) / IFNULL(laporan_tp.aset_lalu,0) as s11,
		
		@ideal := 0 as ideal,
		@ideal := IF(@p1 >= 1, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@p2 > 0.35 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@e1 > 0.7 && @e1 < 0.8, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@e5 > 0.7 && @e5 < 0.8, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@e6 <= 0.05 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@e7 > 0.1 && @e5 < 0.2, IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@e9 >= 0.1 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@a1 <= 0.05 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@a2 < 0.05 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@r7_1 = harga_pasar , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@r9 <= 0.05 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@l1 >= 0.15 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@l2 >= 0.15 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@s10 > 0.12 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@s11 > (0.1 + laju_inflasi) , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@tot_ideal := @ideal as tot_ideal';
	}
}
