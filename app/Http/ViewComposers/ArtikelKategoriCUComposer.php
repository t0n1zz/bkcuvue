<?php

namespace App\Http\ViewComposers;

use App\Cu;
use App\ArtikelKategori;
use Illuminate\View\View;
use Illuminate\Support\Facades\Route;

class ArtikelKategoriCUComposer
{
    public function compose(View $view)
    {
        $subdomain = Route::input('cu');

        $cu = Cu::where('slug',$subdomain)->first();

        $artikelKategoriList = ArtikelKategori::where('id_cu',$cu->id)->orderBy('name')->select('slug','name')->get();

        $view->with('artikelKategoriList', $artikelKategoriList);
    }
}