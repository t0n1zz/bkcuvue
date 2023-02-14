<?php

namespace App\Providers;

use Google\Service\Drive\Drive;
use Google_Service;
use Hypweb\Flysystem\GoogleDrive\GoogleDriveAdapter;
use Illuminate\Support\ServiceProvider;
use League\Flysystem\Filesystem;

class GoogleDriveProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        \Storage::extend('google', function ($app, $config) {
            $client = new \Google_Client();
            $client->setClientId($config['clientId']);
            $client->setClientSecret($config['clientSecret']);
            $client->refreshToken($config['refreshToken']);
            $services = new \Google_Service_Drive($client);
            $adapter =  new GoogleDriveAdapter($services, $config['folderId']);
            return new Filesystem($adapter);
        });

        \Storage::extend('google_backup', function ($app, $config) {
            $client = new \Google_Client();
            $client->setClientId($config['clientId']);
            $client->setClientSecret($config['clientSecret']);
            $client->refreshToken($config['refreshToken']);
            $services = new \Google_Service_Drive($client);
            $adapter =  new GoogleDriveAdapter($services, $config['folderId']);
            return new Filesystem($adapter);
        });
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
