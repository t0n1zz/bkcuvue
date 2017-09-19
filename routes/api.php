<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->get('/profile', 'ProfileController@getUser');

//artikel
Route::middleware('auth:api')->get('/artikel', 'ArtikelController@index');
Route::middleware('auth:api')->get('/artikel/create', 'ArtikelController@create');
Route::middleware('auth:api')->post('/artikel/store', 'ArtikelController@store');
Route::middleware('auth:api')->delete('/artikel/{id}', 'ArtikelController@destroy');
Route::middleware('auth:api')->post('/artikel/updateTerbitkan/{id}', 'ArtikelController@updateTerbitkan');
Route::middleware('auth:api')->post('/artikel/updateUtamakan/{id}', 'ArtikelController@updateUtamakan');
// Route::resource('artikel', 'ArtikelController');

//artikel kategori
Route::middleware('auth:api')->get('/get_artikel_kategori', 'ArtikelKategoriController@get_artikel_kategori');
Route::middleware('auth:api')->post('/artikel_kategori/store', 'ArtikelKategoriController@store');
