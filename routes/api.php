<?php

use Illuminate\Http\Request;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->get('/profile', 'ProfileController@getUser');


Route::group(['prefix'=>'v1','middleware'=>'auth:api'],function(){
    //artikel
    Route::get('/artikel', 'ArtikelController@index');
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
    Route::post('/artikel_kategori/store', 'ArtikelKategoriController@store');

    // cu
    Route::get('/cu', 'CUController@index');
    Route::get('/cu_all', 'CUController@indexAll');
    Route::post('/cu/store', 'CUController@store');
});

// Route::resource('artikel', 'ArtikelController');



