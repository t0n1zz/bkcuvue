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
}
