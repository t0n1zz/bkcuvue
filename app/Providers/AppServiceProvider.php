<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Monolog\Logger;
use App\Logging\DatabaseHandler;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // carbon localization
        \Carbon\Carbon::setLocale(config('app.locale'));

        Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // $this->app->bind('log', function ($app) {
        //     $log = new Logger('log');
        //     $log->pushHandler(new DatabaseHandler());
        //     return $log;
        // });
    }
}
