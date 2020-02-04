<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ComposerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        View::composer(
            ['_layouts.header'], 'App\Http\ViewComposers\CuComposer'
        );

        View::composer(
            ['_layouts.header'], 'App\Http\ViewComposers\PeriodeDiklatComposer'
        );

        View::composer(
            ['_layouts.header','artikelLihat'], 'App\Http\ViewComposers\ArtikelKategoriBKCUComposer'
        );

        View::composer(
            ['_layouts.headerCu','cu.artikelLihat'], 'App\Http\ViewComposers\ArtikelKategoriCUComposer'
        );

        View::composer(
            ['_components.pengumumanBKCU'], 'App\Http\ViewComposers\PengumumanBKCUComposer'
        );

        View::composer(
            ['_components.pengumumanCU'], 'App\Http\ViewComposers\PengumumanCUComposer'
        );

        View::composer(
            ['_layouts.footer','profile'], 'App\Http\ViewComposers\DataGerakanComposer'
        );

        View::composer(
            ['_layouts.footer','profile'], 'App\Http\ViewComposers\CuCountComposer'
        );

        View::composer(
            ['_layouts.footer','profile'], 'App\Http\ViewComposers\AktivisCountComposer'
        );

        View::composer(
            ['_layouts.footer','profile'], 'App\Http\ViewComposers\ManajemenBKCUCountComposer'
        );
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
