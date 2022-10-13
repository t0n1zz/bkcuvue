<?php

namespace App\Http\ViewComposers;

use App\Cu;
use App\LaporanCu;
use App\Aktivis;
use Illuminate\View\View;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class DataCuComposer
{
    public function compose(View $view)
    {
        $subdomain = Route::input('cu');
        $dataCu = Cu::where('slug',$subdomain)->first();

		$laporanCu = LaporanCu::where('id_cu',$dataCu->id)->addSelect(['*',DB::raw(
            '(IFNULL(l_biasa, 0) + IFNULL(l_lbiasa,0) + IFNULL(P_biasa,0) + IFNULL(P_lbiasa,0)) as total_anggota'
        )])->orderBy('periode','desc')->first();

        $aktivisCount = Aktivis::with(['pekerjaans' => function($q) use ($dataCu){
            $q->with('cu')->where('tipe',1)->where('id_tempat',$dataCu->id)
            ->where('status',1);
        }])
        ->whereHas('pekerjaan', function($query) use ($dataCu){
            $query->where('tipe',1)->where('id_tempat',$dataCu->id)
            ->where('status',1);
        })->count();
        

        $view->with('laporanCu', $laporanCu)->with('dataCu', $dataCu)->with('aktivisCount', $aktivisCount);
    }
}