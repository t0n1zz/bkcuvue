<?php

namespace App\Http\ViewComposers;

use App\ArtikelKategori;
use Illuminate\View\View;
use Illuminate\Support\Facades\Route;

class ArtikelKategoriBKCUComposer
{
    public function compose(View $view)
    {
        $artikelKategoriList = ArtikelKategori::where('id_cu',0)->orderBy('name')->select('slug','name')->get();

        $view->with('artikelKategoriList', $artikelKategoriList);
    }
}