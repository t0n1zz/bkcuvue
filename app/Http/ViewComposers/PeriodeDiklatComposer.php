<?php

namespace App\Http\ViewComposers;

use App\Kegiatan;
use Illuminate\View\View;

class PeriodeDiklatComposer
{
    public function compose(View $view)
    {
        $periodeDiklatList = Kegiatan::distinct('periode')->orderBy('periode','desc')->pluck('periode');

        $view->with('periodeDiklatList', $periodeDiklatList);
    }
}