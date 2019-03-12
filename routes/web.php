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
// BKCU
$appRoutes = function() {
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

	Route::get('panduan',array('as' => 'panduan', function()
	{
			return view('panduan.index');
	}));
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
};

Route::group(array('domain' => '{cu}.bkcuvue.test'), $appSubRoutes);



// admins
Route::get('/admins/{vue?}', function () {
    return view('admins');
})->where('vue', '^(?!.*api).*$[\/\w\.-]*');

// test route
Route::get('/testroute', function () {
	
		// create permission
    // Spatie\Permission\Models\Permission::create(['guard_name' => 'api','name' => 'index_error_log']);
    // Spatie\Permission\Models\Permission::create(['guard_name' => 'api','name' => 'create_error_log']); 
    // Spatie\Permission\Models\Permission::create(['guard_name' => 'api','name' => 'destroy_error_log']);
		// Spatie\Permission\Models\Permission::create(['guard_name' => 'api','name' => 'upload_error_log']);
		
		// give permission
		// $users = App\User::where('id','!=',1)->where('id_cu',0)->get();
		// $users = App\User::find(1);
		
		// foreach($users as $user){
		// 	$user->givePermissionTo([
	
		// 			'index_artikel',
		// 			'create_artikel',
		// 			'update_artikel',
		// 			'destroy_artikel',
		// 			'terbitkan_artikel',
		// 			'utamakan_artikel',
	
		// 			'index_user',
		// 			'create_user',
		// 			'update_user',
		// 			'destroy_user',
		// 			'reset_password',
		// 			'status_user',
		// 			'hak_akses_user',
	
		// 			'index_artikel_penulis',
		// 			'create_artikel_penulis',
		// 			'update_artikel_penulis',
		// 			'destroy_artikel_penulis',
	
		// 			'index_artikel_kategori',
		// 			'create_artikel_kategori',
		// 			'update_artikel_kategori',
		// 			'destroy_artikel_kategori',
	
		// 			'index_cu',
		// 			'create_cu',
		// 			'update_cu',
		// 			'destroy_cu',
	
		// 			'index_tp',
		// 			'create_tp',
		// 			'update_tp',
		// 			'destroy_tp',
	
		// 			'index_aktivis',
		// 			'create_aktivis',
		// 			'update_aktivis',
		// 			'destroy_aktivis',
	
		// 			'index_produk_cu',
		// 			'create_produk_cu',
		// 			'update_produk_cu',
		// 			'destroy_produk_cu',
	
		// 			'index_diklat_bkcu',
		// 			'create_diklat_bkcu',
		// 			'update_diklat_bkcu',
		// 			'destroy_diklat_bkcu',
	
		// 			'index_tempat',
		// 			'create_tempat',
		// 			'update_tempat',
		// 			'destroy_tempat',
	
		// 			'index_laporan_cu',
		// 			'create_laporan_cu',
		// 			'update_laporan_cu',
		// 			'destroy_laporan_cu',
		// 			'upload_laporan_cu',
		// 			'diskusi_laporan_cu',
	
		// 			'index_laporan_tp',
		// 			'create_laporan_tp',
		// 			'update_laporan_tp',
		// 			'destroy_laporan_tp',
		// 			'upload_laporan_tp',
		// 			'diskusi_laporan_tp',
		// 	]);
		// }
		
		// echo $users->getAllPermissions();

});


