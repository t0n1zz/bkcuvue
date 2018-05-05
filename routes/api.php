<?php

use Illuminate\Http\Request;

Route::group(['prefix'=>'v1','middleware'=>'auth:api'],function(){
// Route::group(['prefix'=>'v1'],function(){
    // user
    Route::get('/userId', 'UserController@userId');
    Route::get('/profile', 'UserController@profile');
    Route::get('/user', 'UserController@index');
    Route::get('/user/indexCu/{id}', 'UserController@indexCu');
    Route::get('/user/create', 'UserController@create');
    Route::get('/user/edit/{id}', 'UserController@edit');
    Route::post('/user/store', 'UserController@store');
    Route::post('/user/update/{id}', 'UserController@update');
    Route::post('/user/updateStatus/{id}', 'UserController@updateStatus');
    Route::post('/user/resetPassword/{id}', 'UserController@resetPassword');
    // role
    Route::get('/role', 'RoleController@index');
    Route::get('/role_all', 'RoleController@indexAll');
    Route::get('/role_tipe/{tipe}', 'RoleController@indexTipe');
    Route::get('/role_permission/{id}', 'RoleController@indexPermission');
    Route::get('/role/create', 'RoleController@create');
    Route::get('/role/edit/{id}', 'RoleController@edit');
    Route::post('/role/store', 'RoleController@store');
    Route::post('/role/update/{id}', 'RoleController@update');

    //artikel
    Route::get('/artikel', 'ArtikelController@index');
    Route::get('/artikel/indexCu/{id}', 'ArtikelController@indexCu');
    Route::get('/artikel/create', 'ArtikelController@create');
    Route::get('/artikel/edit/{id}', 'ArtikelController@edit');
    Route::post('/artikel/store', 'ArtikelController@store');
    Route::post('/artikel/update/{id}', 'ArtikelController@update');
    Route::post('/artikel/updateTerbitkan/{id}', 'ArtikelController@updateTerbitkan');
    Route::post('/artikel/updateUtamakan/{id}', 'ArtikelController@updateUtamakan');
    Route::delete('/artikel/{id}', 'ArtikelController@destroy');

    //artikel kategori
    Route::get('/artikelKategori', 'ArtikelKategoriController@index');
    Route::get('/artikelKategori/get', 'ArtikelKategoriController@get');
    Route::get('/artikelKategori/indexCu/{id}', 'ArtikelKategoriController@indexCu');
    Route::get('/artikelKategori/getCu/{id}', 'ArtikelKategoriController@getCu');
    Route::get('/artikelKategori/create', 'ArtikelKategoriController@create');
    Route::get('/artikelKategori/edit/{id}', 'ArtikelKategoriController@edit');
    Route::post('/artikelKategori/store', 'ArtikelKategoriController@store');
    Route::post('/artikelKategori/update/{id}', 'ArtikelKategoriController@update');
    Route::delete('/artikelKategori/{id}', 'ArtikelKategoriController@destroy');

    //artikel penulis
    Route::get('/artikelPenulis', 'ArtikelPenulisController@index');
    Route::get('/artikelPenulis/get', 'ArtikelPenulisController@get');
    Route::get('/artikelPenulis/indexCu/{id}', 'ArtikelPenulisController@indexCu');
    Route::get('/artikelPenulis/getCu/{id}', 'ArtikelPenulisController@getCu');
    Route::get('/artikelPenulis/create', 'ArtikelPenulisController@create');
    Route::get('/artikelPenulis/edit/{id}', 'ArtikelPenulisController@edit');
    Route::post('/artikelPenulis/store', 'ArtikelPenulisController@store');
    Route::post('/artikelPenulis/update/{id}', 'ArtikelPenulisController@update');
    Route::delete('/artikelPenulis/{id}', 'ArtikelPenulisController@destroy');

    // cu
    Route::group(['middleware' => ['permission:index cu']], function () {
        Route::get('/cu', 'CuController@index');
        Route::get('/cu/get', 'CuController@get');       
        Route::get('/cu/getPus/{id}', 'CuController@getPus');
    });
    Route::group(['middleware' => ['permission:create cu']], function () {
        Route::get('/cu/create', 'CuController@create');
        Route::post('/cu/store', 'CuController@store');
    });
    Route::group(['middleware' => ['permission:update cu']], function () {
        Route::get('/cu/edit/{id}', 'CuController@edit');
        Route::post('/cu/update/{id}', 'CuController@update');
    });
    Route::group(['middleware' => ['permission:destroy cu']], function () {
        Route::delete('/cu/{id}', 'CuController@destroy');
    });

    // tp
    Route::group(['middleware' => ['permission:index tp']], function () {
        Route::get('/tp', 'TpController@index');
        Route::get('/tp/get', 'TpController@get');
        Route::get('/tp/indexCu/{id}', 'TpController@indexCu'); 
        Route::get('/tp/getCu/{id}', 'TpController@getCu');
    });
    Route::group(['middleware' => ['permission:create tp']], function () {
        Route::get('/tp/create', 'TpController@create');
        Route::post('/tp/store', 'TpController@store');
    });
    Route::group(['middleware' => ['permission:update tp']], function () {
        Route::get('/tp/edit/{id}', 'TpController@edit');
        Route::post('/tp/update/{id}', 'TpController@update');
    });
    Route::group(['middleware' => ['permission:destroy tp']], function () {
        Route::delete('/tp/{id}', 'TpController@destroy');
    });

    //laporan cu
    Route::group(['middleware' => ['permission:index laporanCu']], function () {
        Route::get('/laporanCu', 'laporanCuController@index');
        Route::get('/laporanCu/indexCu/{id}', 'laporanCuController@indexCu');
        Route::get('/laporanCu/indexPeriode/{periode}', 'laporanCuController@indexPeriode');
        Route::get('/laporanCu/indexPearls', 'laporanCuController@indexPearls');
        Route::get('/laporanCu/indexPearlsCu/{id}', 'laporanCuController@indexPearlsCu');
        Route::get('/laporanCu/indexPearlsPeriode/{periode}', 'laporanCuController@indexPearlsPeriode');
        Route::get('/laporanCu/getPeriode', 'laporanCuController@getPeriode');
    });
    Route::group(['middleware' => ['permission:create laporanCu']], function () {
        Route::get('/laporanCu/create', 'laporanCuController@create');
        Route::post('/laporanCu/store', 'laporanCuController@store');
    });
    Route::group(['middleware' => ['permission:update laporanCu']], function () {
        Route::get('/laporanCu/edit/{id}', 'laporanCuController@edit');
        Route::post('/laporanCu/update/{id}', 'laporanCuController@update');
    });
    Route::group(['middleware' => ['permission:destroy laporanCu']], function () {
        Route::delete('/laporanCu/{id}', 'laporanCuController@destroy');
    });

    //laporan tp
    Route::group(['middleware' => ['permission:index laporanTp']], function () {
        Route::get('/laporanTp/cu/{id}', 'laporanTpController@index');
        Route::get('/laporanTp/indexTp/{id}', 'laporanTpController@indexTp');
        Route::get('/laporanTp/indexPeriode/{id}/{periode}', 'laporanTpController@indexPeriode');
        Route::get('/laporanTp/indexPearls', 'laporanTpController@indexPearls');
        Route::get('/laporanTp/indexPearlsTp/{id}', 'laporanTpController@indexPearlsTp');
        Route::get('/laporanTp/indexPearlsPeriode/{id}/{periode}', 'laporanTpController@indexPearlsPeriode');
        Route::get('/laporanTp/getPeriode', 'laporanTpController@getPeriode');
        Route::get('/laporanTp/listLaporanTp/{cu}/{periode}', 'laporanTpController@listLaporanTp');
    });
    Route::group(['middleware' => ['permission:create laporanTp']], function () {
        Route::get('/laporanTp/create', 'laporanTpController@create');
        Route::post('/laporanTp/store', 'laporanTpController@store');
    });
    Route::group(['middleware' => ['permission:update laporanTp']], function () {
        Route::get('/laporanTp/edit/{id}', 'laporanTpController@edit');
        Route::post('/laporanTp/update/{id}', 'laporanTpController@update');
    });
    Route::group(['middleware' => ['permission:destroy laporanTp']], function () {
        Route::delete('/laporanTp/{id}', 'laporanTpController@destroy');
    });

    // puskopdit
    Route::get('/pus', 'PusController@index');
    Route::get('/pus_all', 'PusController@indexAll');
    Route::post('/pus/store', 'PusController@store');

    //provinces
    Route::get('/provinces', 'ProvincesController@index');
    Route::get('/provinces/get', 'ProvincesController@get');
    Route::get('/provinces/create', 'ProvincesController@create');
    Route::get('/provinces/edit/{id}', 'ProvincesController@edit');
    Route::post('/provinces/store', 'ProvincesController@store');
    Route::post('/provinces/update/{id}', 'ProvincesController@update');
    Route::delete('/provinces/{id}', 'ProvincesController@destroy');

    //regencies
    Route::get('/regencies', 'RegenciesController@index');
    Route::get('/regencies/get', 'RegenciesController@get');
    Route::get('/regencies/indexProvinces/{id}', 'RegenciesController@indexProvinces');
    Route::get('/regencies/getProvinces/{id}', 'RegenciesController@getProvinces');
    Route::get('/regencies/create', 'RegenciesController@create');
    Route::get('/regencies/edit/{id}', 'RegenciesController@edit');
    Route::post('/regencies/store', 'RegenciesController@store');
    Route::post('/regencies/update/{id}', 'RegenciesController@update');
    Route::delete('/regencies/{id}', 'RegenciesController@destroy');

    //districts
    Route::get('/districts', 'DistrictsController@index');
    Route::get('/districts/get', 'DistrictsController@get');
    Route::get('/districts/indexRegencies/{id}', 'DistrictsController@indexRegencies');
    Route::get('/districts/getRegencies/{id}', 'DistrictsController@getRegencies');
    Route::get('/districts/create', 'DistrictsController@create');
    Route::get('/districts/edit/{id}', 'DistrictsController@edit');
    Route::post('/districts/store', 'DistrictsController@store');
    Route::post('/districts/update/{id}', 'DistrictsController@update');
    Route::delete('/districts/{id}', 'DistrictsController@destroy');

    //villages
    Route::get('/villages', 'VillagesController@index');
    Route::get('/villages/get', 'VillagesController@get');
    Route::get('/villages/indexDistricts/{id}', 'VillagesController@indexDistricts');
    Route::get('/villages/getDistricts/{id}', 'VillagesController@getDistricts');
    Route::get('/villages/create', 'VillagesController@create');
    Route::get('/villages/edit/{id}', 'VillagesController@edit');
    Route::post('/villages/store', 'VillagesController@store');
    Route::post('/villages/update/{id}', 'VillagesController@update');
    Route::delete('/villages/{id}', 'VillagesController@destroy');
});

// Route::resource('artikel', 'ArtikelController');



