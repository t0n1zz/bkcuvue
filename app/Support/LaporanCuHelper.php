<?php
namespace App\Support;

use Illuminate\Http\Request;

class LaporanCuHelper{

	public static function queryPerkembangan(){
		return '
		(IFNULL(laporan_cu.l_biasa, 0) + IFNULL(laporan_cu.l_lbiasa,0) + IFNULL(laporan_cu.P_biasa,0) + IFNULL(laporan_cu.P_lbiasa,0)) as total_anggota,
		(IFNULL(laporan_cu.piutang_beredar,0)/IFNULL(laporan_cu.aset,0)) as rasio_beredar,
		((IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0))/IFNULL(laporan_cu.piutang_beredar,0)) as rasio_lalai,
		(IFNULL(laporan_cu.piutang_beredar,0) - (IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0))) as piutang_bersih';
	}

	public static function queryPerkembanganTotal(){
		return '
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
		(sum(IFNULL(l_biasa, 0)) + sum(IFNULL(l_lbiasa,0)) + sum(IFNULL(P_biasa,0)) + sum(IFNULL(P_lbiasa,0))) as total_anggota,
		(sum(IFNULL(piutang_beredar,0))/sum(IFNULL(aset,0))) as rasio_beredar,
		((sum(IFNULL(piutang_lalai_1bulan,0)) + sum(IFNULL(piutang_lalai_12bulan,0)))/sum(IFNULL(piutang_beredar,0))) as rasio_lalai,
		(sum(IFNULL(piutang_beredar,0)) - (sum(IFNULL(piutang_lalai_1bulan,0)) + sum(IFNULL(piutang_lalai_12bulan,0)))) as piutang_bersih';
	}

	public static function queryPEARLS(){
		return '
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

		@e7 := IFNULL(laporan_cu.simpanan_saham,0) / IFNULL(laporan_cu.aset,0) as e7,

		@e9 := (@piutang_bersih - (IFNULL(laporan_cu.piutang_lalai_12bulan,0) + ((35/100) * IFNULL(laporan_cu.piutang_lalai_1bulan,0)) + IFNULL(laporan_cu.aset_masalah,0))) / IFNULL(laporan_cu.aset,0) as e9,

		@a1 := (IFNULL(laporan_cu.piutang_lalai_1bulan,0) + IFNULL(laporan_cu.piutang_lalai_12bulan,0)) / IFNULL(laporan_cu.piutang_beredar,0) as a1,

		@a2 := IFNULL(laporan_cu.aset_tidak_menghasilkan,0) / IFNULL(laporan_cu.aset,0) as a2,
		
		@r7_1 := IFNULL(laporan_cu.bjs_saham,0) / @rata_saham as r7_1,

		@r7_2 := IFNULL(laporan_cu.bjs_saham,0) / ((IFNULL(laporan_cu.simpanan_saham_lalu,0) + IFNULL(laporan_cu.simpanan_saham,0)) / 2) as r7_2,

		@e7_1 := IF(IFNULL(laporan_cu.simpanan_saham_des,0) = 0 && IFNULL(laporan_cu.simpanan_saham_lalu,0) != 0, @r7_2, @r7_1) as r7_1,

		@e9 := (IFNULL(laporan_cu.total_biaya,0) - IFNULL(laporan_cu.beban_penyisihan_dcr,0)) / @rata_aset as r9,

		@l1 := (IFNULL(laporan_cu.investasi_likuid,0) + IFNULL(laporan_cu.aset_likuid_tidak_menghasilkan,0) - IFNULL(laporan_cu.hutang_tidak_berbiaya_30hari,0)) / @tot_nonsaham as l1,

		@l2 := (IFNULL(laporan_cu.investasi_likuid,0) + IFNULL(laporan_cu.aset_likuid_tidak_menghasilkan,0) - IFNULL(laporan_cu.hutang_tidak_berbiaya_30hari,0)) / IFNULL(laporan_cu.aset,0) l2,

		@s10 := (@total_anggota - IFNULL(laporan_cu.total_anggota_lalu,0)) / IFNULL(laporan_cu.total_anggota_lalu,0) as s10,

		@s1 := (IFNULL(laporan_cu.aset,0) - IFNULL(laporan_cu.aset_lalu,0)) / IFNULL(laporan_cu.aset_lalu,0) as s11,
		
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
		@ideal := IF(@r9 = 0.05 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@l1 >= 0.15 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@l2 >= 0.15 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@s10 > 0.12 , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@ideal := IF(@s11 > (0.1 + laju_inflasi) , IFNULL(@ideal,0) + 1, IFNULL(@ideal,0)) as ideal,
		@tot_ideal := @ideal as tot_ideal';
	}
}
