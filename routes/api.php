<?php

use Illuminate\Http\Request;

Route::group(['prefix'=>'v1','middleware'=>'auth:api'],function(){

    // user
    Route::get('/profile', 'UserController@getUser');
    Route::get('/userData', 'UserController@userData');

    //artikel
    Route::get('/artikel', 'ArtikelController@index');
    Route::get('/artikel/indexCU/{id}', 'ArtikelController@indexCU');
    Route::get('/artikel/create', 'ArtikelController@create');
    Route::get('/artikel/edit/{id}', 'ArtikelController@edit');
    Route::post('/artikel/store', 'ArtikelController@store');
    Route::post('/artikel/update/{id}', 'ArtikelController@update');
    Route::post('/artikel/updateTerbitkan/{id}', 'ArtikelController@updateTerbitkan');
    Route::post('/artikel/updateUtamakan/{id}', 'ArtikelController@updateUtamakan');
    Route::delete('/artikel/{id}', 'ArtikelController@destroy');

    //artikel kategori
    Route::get('/artikel_kategori', 'ArtikelKategoriController@index');
    Route::get('/artikel_kategori_all', 'ArtikelKategoriController@indexAll');
    Route::get('/artikel_kategori/cu/{id}', 'ArtikelKategoriController@indexCU');
    Route::post('/artikel_kategori/store', 'ArtikelKategoriController@store');

    //artikel penulis
    Route::get('/artikel_penulis', 'ArtikelPenulisController@index');
    Route::get('/artikel_penulis_all', 'ArtikelPenulisController@indexAll');
    Route::get('/artikel_penulis/cu/{id}', 'ArtikelPenulisController@indexCU');
    Route::post('/artikel_penulis/store', 'ArtikelPenulisController@store');

    // cu
    Route::get('/cu', 'CUController@index');
    Route::get('/cu_all', 'CUController@indexAll');
    Route::get('/cu/pus/{id}', 'CUController@indexPus');
    Route::post('/cu/store', 'CUController@store');

    // puskopdit
    Route::get('/pus', 'PusController@index');
    Route::get('/pus_all', 'PusController@indexAll');
    Route::post('/pus/store', 'PusController@store');
});

// Route::resource('artikel', 'ArtikelController');



