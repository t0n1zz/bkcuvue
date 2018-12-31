<?php

namespace App\Http\ViewComposers;

use App\Pengumuman;
use App\ArtikelKategori;
use Illuminate\View\View;
use Illuminate\Support\Facades\Route;


class PengumumanCUComposer
{
    public function compose(View $view)
    {
        $subdomain = Route::input('cu');

        $cu = Cu::where('slug',$subdomain)->first();

        $pengumumanCUList = Pengumuman::where('id_cu',$cu->id)->orderBy('created_at')->select('name')->get();

        $view->with('pengumumanCUList', $pengumumanCUList);
    }
}