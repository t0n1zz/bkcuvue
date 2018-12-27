<?php

namespace App\Http\ViewComposers;

use App\LaporanCu;
use Illuminate\View\View;
use Illuminate\Support\Facades\DB;

class DataGerakanComposer
{
    public function compose(View $view)
    {
        $dataGerakan = LaporanCu::select(DB::raw(
			'max(id) as id, max(id_cu) as id_cu, periode, count(*) as cu, max(created_at) as created_at, max(updated_at) as updated_at, 
			sum(l_biasa) as l_biasa, 
			sum(l_lbiasa) as l_lbiasa, 
			sum(p_biasa) as p_biasa, 
			sum(p_lbiasa) as p_lbiasa,
			sum(IFNULL(laporan_cu.l_biasa, 0) + IFNULL(laporan_cu.l_lbiasa,0) + IFNULL(laporan_cu.P_biasa,0) + IFNULL(laporan_cu.P_lbiasa,0)) as total_anggota
            '))->groupBy('periode')->orderBy('periode','desc')->first();

        $view->with('dataGerakan', $dataGerakan);
    }
}