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
Route::resource('artikel', 'ArtikelController');
Route::middleware('auth:api')->get('/get_artikel_kategori', 'ArtikelKategoriController@get_artikel_kategori');
