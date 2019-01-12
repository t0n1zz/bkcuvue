<?php

namespace App\Http\ViewComposers;

use App\LaporanCu;
use Illuminate\View\View;
use App\Support\LaporanCuHelper;
use Illuminate\Support\Facades\DB;

class DataGerakanComposer
{
    public function compose(View $view)
    {

		$periode = LaporanCu::distinct('periode')->orderBy('periode','desc')->pluck('periode')->first();

		$dataGerakan = LaporanCu::leftjoin('cu','laporan_cu.id_cu','cu.id')
            ->leftjoin('provinces','cu.id_provinces','provinces.id')
            ->join(DB::RAW("(SELECT id_cu, MAX(periode) AS max_periode FROM laporan_cu WHERE periode <= '$periode' GROUP BY id_cu) latest_report"),function($join){
                            $join->on('laporan_cu.id_cu','=','latest_report.id_cu');
                            $join->on('laporan_cu.periode','=','latest_report.max_periode');
            })->addSelect([DB::raw('max(latest_report.max_periode) as periode, count(*) as cu'),DB::raw(LaporanCuHelper::queryPerkembanganTotal())])->Where('cu.deleted_at',null)->orWhere('cu.deleted_at','<','$periode')->withTrashed()->first();

        $view->with('dataGerakan', $dataGerakan);
    }
}