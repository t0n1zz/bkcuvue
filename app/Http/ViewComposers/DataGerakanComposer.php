<?php

namespace App\Http\ViewComposers;

use App\LaporanGerakan;
use Illuminate\View\View;
use Illuminate\Support\Facades\DB;

class DataGerakanComposer
{
    public function compose(View $view)
    {

		$dataGerakan = LaporanGerakan::addSelect(['*',DB::raw(
            '(IFNULL(lk, 0) + IFNULL(pr,0)) as total_anggota'
        )])->orderBy('periode','desc')->first();

        $view->with('dataGerakan', $dataGerakan);
    }
}