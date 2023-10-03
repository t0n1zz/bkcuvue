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
Route::group(['middleware' => 'throttle:60,10'], function () {
	
	// BKCU
	$appRoutes = function() {
		// home
		Route::get('/',array( 'as' => 'home','uses' => 'PublicController@index'));

		// tentang kami
		Route::get('/profile',array( 'as' => 'profile','uses' => 'PublicController@profile'));

		// artikel
		Route::get('/artikel',array( 'as' => 'artikel','uses' => 'PublicController@artikel'));
		Route::get('/artikel/cari',array( 'as' => 'artikel.cari','uses' => 'PublicController@artikelCari'));
		Route::get('/artikel/lihat/{slug}',array( 'as' => 'artikel.lihat','uses' => 'PublicController@artikelLihat'));
		Route::get('/artikel/kategori/{slug}',array( 'as' => 'artikel.kategori','uses' => 'PublicController@artikelKategori'));
		Route::get('/artikel/penulis/{slug}',array( 'as' => 'artikel.penulis','uses' => 'PublicController@artikelPenulis'));
		Route::get('/downloadpdf', array('as' => 'pdf', 'uses' => 'PresensiController@downloadFormPengajuan'));
			
		// cu
		Route::get('/cu',array( 'as' => 'cu','uses' => 'PublicController@cu'));

		// kegiatan
		Route::get('/kegiatan/diklat/{periode}',array( 'as' => 'diklat','uses' => 'PublicController@diklat'));
		Route::get('/kegiatan/diklat/lihat/{slug}',array( 'as' => 'diklat.lihat','uses' => 'PublicController@diklatLihat'));
		
		// dokumen
		Route::get('dokumens',array('as' => 'dokumens','uses' => 'PublicController@dokumen'));
		Route::get('downloads/{filename}',array('as' => 'files','uses' => 'PublicController@download_file'));

		// panduan
		Route::get('panduan',array( 'as' => 'panduan','uses' => 'PublicController@panduan'));
	};

	Route::group(array('domain' => 'bkcuvue.test'), $appRoutes);

	// cu
	$appSubRoutes = function() {
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

		// dokumen
		Route::get('dokumen',array('as' => 'dokumen','uses' => 'PublicCuController@dokumen'));
		Route::get('download/{filename}',array('as' => 'file','uses' => 'PublicCuController@download_file'));

	};

	Route::group(array('domain' => '{cu}.bkcuvue.test'), $appSubRoutes);

	// admins
	Route::get('/admins/{vue?}','PublicController@admins')->where('vue', '^(?!.*api).*$[\/\w\.-]*');
	

	// test route
	Route::get('/testroute','PublicController@testroute');

});