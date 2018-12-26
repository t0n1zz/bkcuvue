<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::domain('phplaravel-92032-701509.cloudwaysapps.com')->group(function () {
	// home
	Route::get('/',array( 'as' => 'home','uses' => 'PublicController@index'));

	// tentang kami
	Route::get('/tentang_kami/profile',array( 'as' => 'profile','uses' => 'PublicController@profile'));

	// artikel
	Route::get('/artikel',array( 'as' => 'artikel','uses' => 'PublicController@artikel'));
	Route::get('/artikel/cari',array( 'as' => 'artikel.cari','uses' => 'PublicController@artikelCari'));
	Route::get('/artikel/lihat/{slug}',array( 'as' => 'artikel.lihat','uses' => 'PublicController@artikelLihat'));
	Route::get('/artikel/kategori/{slug}',array( 'as' => 'artikel.kategori','uses' => 'PublicController@artikelKategori'));
    Route::get('/artikel/penulis/{slug}',array( 'as' => 'artikel.penulis','uses' => 'PublicController@artikelPenulis'));
    
    // cu
    Route::get('/cu',array( 'as' => 'cu','uses' => 'PublicController@cu'));
    
    // dokumen
    Route::get('dokumen',array('as' => 'dokumen','uses' => 'PublicController@dokumen'));
    Route::get('download/{filename}',array('as' => 'file','uses' => 'PublicController@download_file'));
});
// cu
Route::domain('{cu}.phplaravel-92032-701509.cloudwaysapps.com')->group(function () {
	// home
	Route::get('/',array( 'as' => 'home.cu','uses' => 'PublicCuController@index'));

	// artikel
	Route::get('/artikel',array( 'as' => 'artikel.cu','uses' => 'PublicCuController@artikel'));
	Route::get('/artikel/cari',array( 'as' => 'artikel.cari.cu','uses' => 'PublicCuController@artikelCari'));
	Route::get('/artikel/lihat/{slug}',array( 'as' => 'artikel.lihat.cu','uses' => 'PublicCuController@artikelLihat'));
	Route::get('/artikel/kategori/{slug}',array( 'as' => 'artikel.kategori.cu','uses' => 'PublicCuController@artikelKategori'));
	Route::get('/artikel/penulis/{slug}',array( 'as' => 'artikel.penulis.cu','uses' => 'PublicCuController@artikelPenulis'));

	// tp
	Route::get('/tp',array( 'as' => 'tp','uses' => 'PublicCuController@tp'));

	// produk
	Route::get('/produk',array( 'as' => 'produk','uses' => 'PublicCuController@produk'));
});

// admins
Route::get('/admins/{vue?}', function () {
    return view('admins');
})->where('vue', '^(?!.*api).*$[\/\w\.-]*');

// test route
Route::get('/testroute', function () {

    $user = App\User::find(1);
    $user->givePermissionTo([
        'index_user', 
				'create_user',
				'update_user',
				'destroy_user',
				'reset_password',
				'status_user',
				'hak_akses_user'
		]);
		
		echo $user->getAllPermissions();

});


