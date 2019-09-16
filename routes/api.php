<?php

use Illuminate\Http\Request;

Route::group(['prefix' => 'auth'],function($router){
    Route::post('/login', 'AuthController@login');
    Route::post('/logout', 'AuthController@logout');
    Route::post('/refresh', 'AuthController@refresh');
    Route::get('/me', 'AuthController@me');
});

Route::group(['middleware'=>'jwt.auth'],function(){
// Route::group(['prefix'=>'v1'],function(){

    // auth
    // Route::get('/userId', 'AuthController@userId');
    // Route::get('/profile', 'AuthController@profile');

    // user
    Route::get('/user/getActivity/{id}', 'UserController@getActivity');
    Route::post('/user/updatePassword/{id}', 'UserController@updatePassword');
    Route::post('/user/updateFoto/{id}', 'UserController@updateFoto');
    Route::post('/user/updateIdentitas/{id}', 'UserController@updateIdentitas');

    Route::group(['middleware' => ['permission:index_user']], function () {
        Route::get('/user', 'UserController@index');
        Route::get('/user/indexCu/{id}', 'UserController@indexCu');
        Route::get('/user/count', 'UserController@count');
    });
    Route::group(['middleware' => ['permission:create_user']], function () {
        Route::get('/user/create', 'UserController@create');
        Route::post('/user/store', 'UserController@store');
    }); 
    Route::group(['middleware' => ['permission:update_user']], function () {   
        Route::get('/user/edit/{id}', 'UserController@edit');
        Route::get('/user/editHakAkses/{id}', 'UserController@editHakAkses');
        Route::post('/user/update/{id}', 'UserController@update');
        Route::post('/user/updateStatus/{id}', 'UserController@updateStatus');
        Route::post('/user/updateHakAkses/{id}', 'UserController@updateHakAkses'); 
        Route::post('/user/updateResetPassword/{id}', 'UserController@updateResetPassword');
    });
    Route::group(['middleware' => ['permission:destroy_user']], function () {
        Route::delete('/user/{id}', 'UserController@destroy');
    });

    //artikel
    Route::group(['middleware' => ['permission:index_artikel']], function () {
        Route::get('/artikel', 'ArtikelController@index');
        Route::get('/artikel/indexCu/{id}', 'ArtikelController@indexCu');
        Route::post('/artikel/upload', 'ArtikelController@upload');
        Route::get('/artikel/count', 'ArtikelController@count');
        Route::get('/artikel/history', 'ArtikelController@history');
    });
    Route::group(['middleware' => ['permission:create_artikel']], function () {
        Route::get('/artikel/create', 'ArtikelController@create');
        Route::post('/artikel/store', 'ArtikelController@store');
    });
    Route::group(['middleware' => ['permission:update_artikel']], function () {
        Route::get('/artikel/edit/{id}', 'ArtikelController@edit');
        Route::post('/artikel/update/{id}', 'ArtikelController@update');
        Route::post('/artikel/updateTerbitkan/{id}', 'ArtikelController@updateTerbitkan');
        Route::post('/artikel/updateUtamakan/{id}', 'ArtikelController@updateUtamakan');
    });
    Route::group(['middleware' => ['permission:destroy_artikel']], function () {
        Route::delete('/artikel/{id}', 'ArtikelController@destroy');
    });
    
    //artikel kategori
    Route::group(['middleware' => ['permission:index_artikel_kategori']], function () {
        Route::get('/artikelKategori', 'ArtikelKategoriController@index');
        Route::get('/artikelKategori/get', 'ArtikelKategoriController@get');
        Route::get('/artikelKategori/indexCu/{id}', 'ArtikelKategoriController@indexCu');
        Route::get('/artikelKategori/getCu/{id}', 'ArtikelKategoriController@getCu');
        Route::get('/artikelKategori/history', 'ArtikelKategoriController@history');
    });
    Route::group(['middleware' => ['permission:create_artikel_kategori']], function () {
        Route::get('/artikelKategori/create', 'ArtikelKategoriController@create');
        Route::post('/artikelKategori/store', 'ArtikelKategoriController@store');
    });
    Route::group(['middleware' => ['permission:update_artikel_kategori']], function () {
        Route::get('/artikelKategori/edit/{id}', 'ArtikelKategoriController@edit');
        Route::post('/artikelKategori/update/{id}', 'ArtikelKategoriController@update');
    });
    Route::group(['middleware' => ['permission:destroy_artikel_kategori']], function () {
        Route::delete('/artikelKategori/{id}', 'ArtikelKategoriController@destroy');
    });

    //artikel penulis
    Route::group(['middleware' => ['permission:index_artikel_penulis']], function () {
        Route::get('/artikelPenulis', 'ArtikelPenulisController@index');
        Route::get('/artikelPenulis/get', 'ArtikelPenulisController@get');
        Route::get('/artikelPenulis/indexCu/{id}', 'ArtikelPenulisController@indexCu');
        Route::get('/artikelPenulis/getCu/{id}', 'ArtikelPenulisController@getCu');
        Route::get('/artikelPenulis/count', 'ArtikelPenulisController@count');
        Route::get('/artikelPenulis/history', 'ArtikelPenulisController@history');
    });
    Route::group(['middleware' => ['permission:create_artikel_penulis']], function () {
        Route::get('/artikelPenulis/create', 'ArtikelPenulisController@create');
        Route::post('/artikelPenulis/store', 'ArtikelPenulisController@store');
    });
    Route::group(['middleware' => ['permission:update_artikel_penulis']], function () {
        Route::get('/artikelPenulis/edit/{id}', 'ArtikelPenulisController@edit');
        Route::post('/artikelPenulis/update/{id}', 'ArtikelPenulisController@update');
    });
    Route::group(['middleware' => ['permission:destroy_artikel_penulis']], function () {
        Route::delete('/artikelPenulis/{id}', 'ArtikelPenulisController@destroy');
    });

    // cu
    Route::get('/cu/getHeader', 'CuController@getHeader');   
    Route::group(['middleware' => ['permission:index_cu']], function () {
        Route::get('/cu', 'CuController@index');
        Route::get('/cu/deleted', 'CuController@indexDeleted');
        Route::get('/cu/get', 'CuController@get');  
        Route::get('/cu/getPus/{id}', 'CuController@getPus');
        Route::get('/cu/count', 'CuController@count');
        Route::get('/cu/history', 'CuController@history');
        Route::get('/cu/edit/{id}', 'CuController@edit');
    });
    Route::group(['middleware' => ['permission:create_cu']], function () {
        Route::get('/cu/create', 'CuController@create');
        Route::post('/cu/store', 'CuController@store');
    });
    Route::group(['middleware' => ['permission:update_cu']], function () {
        Route::post('/cu/update/{id}', 'CuController@update');
        Route::post('/cu/restore/{id}', 'CuController@restore');
    });
    Route::group(['middleware' => ['permission:destroy_cu']], function () {
        Route::delete('/cu/{id}', 'CuController@destroy');
    });

    // tp
    Route::get('/tp/getCu/{id}', 'TpController@getCu');
    Route::group(['middleware' => ['permission:index_tp']], function () {
        Route::get('/tp', 'TpController@index');
        Route::get('/tp/get', 'TpController@get');
        Route::get('/tp/indexCu/{id}', 'TpController@indexCu'); 
        Route::get('/tp/count', 'TpController@count');
        Route::get('/tp/history', 'TpController@history');
    });
    Route::group(['middleware' => ['permission:create_tp']], function () {
        Route::get('/tp/create', 'TpController@create');
        Route::post('/tp/store', 'TpController@store');
    });
    Route::group(['middleware' => ['permission:update_tp']], function () {
        Route::get('/tp/edit/{id}', 'TpController@edit');
        Route::post('/tp/update/{id}', 'TpController@update');
    });
    Route::group(['middleware' => ['permission:destroy_tp']], function () {
        Route::delete('/tp/{id}', 'TpController@destroy');
    });

    // produk
    Route::get('/produkcu/getCu/{id}', 'ProdukCuController@getCu');
    Route::get('/produkcu/getSimpananCu/{id}', 'ProdukCuController@getSimpananCu');
    Route::get('/produkcu/getPinjamanCu/{id}', 'ProdukCuController@getPinjamanCu');
    Route::group(['middleware' => ['permission:index_produk_cu']], function () {
        Route::get('/produkcu', 'ProdukCuController@index');
        Route::get('/produkcu/get', 'ProdukCuController@get');
        Route::get('/produkcu/indexCu/{id}', 'ProdukCuController@indexCu'); 
        Route::get('/produkcu/count', 'ProdukCuController@count');
        Route::get('/produkcu/history', 'ProdukCuController@history');
    });
    Route::group(['middleware' => ['permission:create_produk_cu']], function () {
        Route::get('/produkcu/create', 'ProdukCuController@create');
        Route::post('/produkcu/store', 'ProdukCuController@store');
    });
    Route::group(['middleware' => ['permission:update_produk_cu']], function () {
        Route::get('/produkcu/edit/{id}', 'ProdukCuController@edit');
        Route::post('/produkcu/update/{id}', 'ProdukCuController@update');
    });
    Route::group(['middleware' => ['permission:destroy_produk_cu']], function () {
        Route::delete('/produkcu/{id}', 'ProdukCuController@destroy');
    });

     // diklatBKCU
    Route::group(['middleware' => ['permission:index_diklat_bkcu']], function () {
        Route::get('/diklatBKCU/', 'DiklatBKCUController@index');
        Route::get('/diklatBKCU/baru', 'DiklatBKCUController@indexBaru');
        Route::get('/diklatBKCU/mulai', 'DiklatBKCUController@indexMulai');
        Route::get('/diklatBKCU/buka', 'DiklatBKCUController@indexBuka');
        Route::get('/diklatBKCU/jalan', 'DiklatBKCUController@indexJalan');
        Route::get('/diklatBKCU/periode/{periode}', 'DiklatBKCUController@indexPeriode');
        Route::get('/diklatBKCU/get', 'DiklatBKCUController@get');
        Route::get('/diklatBKCU/getPeriode', 'DiklatBKCUController@getPeriode');
        Route::get('/diklatBKCU/edit/{id}', 'DiklatBKCUController@edit');
        Route::get('/diklatBKCU/history', 'DiklatBKCUController@history');

        // peserta
        Route::get('/diklatBKCU/indexPeserta/{id}', 'DiklatBKCUController@indexPeserta');
        Route::get('/diklatBKCU/indexPesertaTerdaftar/{id}', 'DiklatBKCUController@indexPesertaTerdaftar');
        Route::get('/diklatBKCU/indexPesertaMenunggu/{id}', 'DiklatBKCUController@indexPesertaMenunggu');
        Route::get('/diklatBKCU/indexPesertaBerjalan/{id}', 'DiklatBKCUController@indexPesertaBerjalan');
        Route::get('/diklatBKCU/indexPesertaBatal/{id}', 'DiklatBKCUController@indexPesertaBatal');
        Route::get('/diklatBKCU/indexPesertaCu/{id}/cu/{cu}', 'DiklatBKCUController@indexPesertaCu');
        Route::post('/diklatBKCU/storePeserta/{id}', 'DiklatBKCUController@storePeserta');
        Route::post('/diklatBKCU/updatePeserta/{id}', 'DiklatBKCUController@updatePeserta');
        Route::delete('/diklatBKCU/destroyPeserta/{id}', 'DiklatBKCUController@destroyPeserta');
        Route::post('/diklatBKCU/batalPeserta/{id}', 'DiklatBKCUController@batalPeserta');
        Route::get('/diklatBKCU/countPeserta/{id}', 'DiklatBKCUController@countPeserta');
    });
    Route::group(['middleware' => ['permission:create_diklat_bkcu']], function () {
        Route::get('/diklatBKCU/create', 'DiklatBKCUController@create');
        Route::post('/diklatBKCU/store', 'DiklatBKCUController@store');
    });
    Route::group(['middleware' => ['permission:update_diklat_bkcu']], function () {
        Route::post('/diklatBKCU/update/{id}', 'DiklatBKCUController@update');
        Route::post('/diklatBKCU/updateStatus/{id}', 'DiklatBKCUController@updateStatus');
    });
    Route::group(['middleware' => ['permission:destroy_diklat_bkcu']], function () {
        Route::delete('/diklatBKCU/{id}', 'DiklatBKCUController@destroy');
    });

    // aktivis
    Route::group(['middleware' => ['permission:index_aktivis']], function () {
        Route::get('/aktivis/index/{tingkat}/{status}', 'AktivisController@index');
        Route::post('/aktivis/indexTingkat/', 'AktivisController@indexTingkat');
        Route::get('/aktivis/indexLembaga', 'AktivisController@indexLembaga');
        Route::get('/aktivis/get', 'AktivisController@get');
        Route::get('/aktivis/indexCu/{id}/{tingkat}/{status}', 'AktivisController@indexCu');
        Route::get('/aktivis/getCu/{id}', 'AktivisController@getCu');
        Route::get('/aktivis/count', 'AktivisController@count');
        Route::get('/aktivis/history', 'AktivisController@history');
    });
    Route::group(['middleware' => ['permission:create_aktivis']], function () {
        Route::get('/aktivis/create', 'AktivisController@create');
        Route::post('/aktivis/store', 'AktivisController@store');
        Route::get('/aktivis/cariData/{nik}', 'AktivisController@cariData');
    });
    Route::group(['middleware' => ['permission:update_aktivis']], function () {
        Route::get('/aktivis/edit/{id}', 'AktivisController@edit');
        Route::post('/aktivis/update/{id}', 'AktivisController@update');
        Route::get('/aktivis/indexPekerjaan/{id}', 'AktivisController@indexPekerjaan');
        Route::get('/aktivis/indexPendidikan/{id}', 'AktivisController@indexPendidikan');
        Route::get('/aktivis/indexAnggotaCu/{id}', 'AktivisController@indexAnggotaCu');
        Route::get('/aktivis/indexKeluarga/{id}', 'AktivisController@indexKeluarga');
        Route::get('/aktivis/indexOrganisasi/{id}', 'AktivisController@indexOrganisasi');
        Route::get('/aktivis/indexDiklat/{id}', 'AktivisController@indexDiklat');
        Route::get('/aktivis/createPekerjaan', 'AktivisController@createPekerjaan');
        Route::get('/aktivis/createPendidikan', 'AktivisController@createPendidikan');
        Route::get('/aktivis/createOrganisasi', 'AktivisController@createOrganisasi');
        Route::get('/aktivis/createDiklat', 'AktivisController@createDiklat');
        Route::get('/aktivis/createKeluarga', 'AktivisController@createKeluarga');
        Route::get('/aktivis/createAnggotaCu', 'AktivisController@createAnggotaCu');
        Route::post('/aktivis/savePekerjaan/{id}', 'AktivisController@savePekerjaan');
        Route::post('/aktivis/savePendidikan/{id}', 'AktivisController@savePendidikan');
        Route::post('/aktivis/saveOrganisasi/{id}', 'AktivisController@saveOrganisasi');
        Route::post('/aktivis/saveDiklat/{id}', 'AktivisController@saveDiklat');
        Route::post('/aktivis/saveKeluarga/{id}', 'AktivisController@saveKeluarga');
        Route::post('/aktivis/saveAnggotaCu/{id}', 'AktivisController@saveAnggotaCu');
        Route::delete('/aktivis/pekerjaan/{id}', 'AktivisController@destroyPekerjaan');
        Route::delete('/aktivis/pendidikan/{id}', 'AktivisController@destroyPendidikan');
        Route::delete('/aktivis/organisasi/{id}', 'AktivisController@destroyOrganisasi');
        Route::delete('/aktivis/diklat/{id}', 'AktivisController@destroyDiklat');
        Route::delete('/aktivis/keluarga/{id}', 'AktivisController@destroyKeluarga');
        Route::delete('/aktivis/anggotaCu/{id}', 'AktivisController@destroyAnggotaCu');
    });
    Route::group(['middleware' => ['permission:destroy_aktivis']], function () {
        Route::delete('/aktivis/{id}', 'AktivisController@destroy');
    });

    // mitra perserorangan
    Route::group(['middleware' => ['permission:index_mitra_orang']], function () {
        Route::get('/mitraOrang', 'MitraOrangController@index');
        Route::get('/mitraOrang/count', 'MitraOrangController@count');
        Route::get('/mitraOrang/history', 'MitraOrangController@history');
    });
    Route::group(['middleware' => ['permission:create_mitra_orang']], function () {
        Route::get('/mitraOrang/create', 'MitraOrangController@create');
        Route::post('/mitraOrang/store', 'MitraOrangController@store');
    });
    Route::group(['middleware' => ['permission:update_mitra_orang']], function () {
        Route::get('/mitraOrang/edit/{id}', 'MitraOrangController@edit');
        Route::post('/mitraOrang/update/{id}', 'MitraOrangController@update');
        Route::post('/mitraOrang/restore/{id}', 'MitraOrangController@restore');
    });
    Route::group(['middleware' => ['permission:destroy_mitra_orang']], function () {
        Route::delete('/mitraOrang/{id}', 'MitraOrangController@destroy');
    });

    // mitra lembaga
    Route::group(['middleware' => ['permission:index_mitra_lembaga']], function () {
        Route::get('/mitraLembaga', 'MitraLembagaController@index');
        Route::get('/mitraLembaga/count', 'MitraLembagaController@count');
        Route::get('/mitraLembaga/history', 'MitraLembagaController@history');
    });
    Route::group(['middleware' => ['permission:create_mitra_lembaga']], function () {
        Route::get('/mitraLembaga/create', 'MitraLembagaController@create');
        Route::post('/mitraLembaga/store', 'MitraLembagaController@store');
    });
    Route::group(['middleware' => ['permission:update_mitra_lembaga']], function () {
        Route::get('/mitraLembaga/edit/{id}', 'MitraLembagaController@edit');
        Route::post('/mitraLembaga/update/{id}', 'MitraLembagaController@update');
        Route::post('/mitraLembaga/restore/{id}', 'MitraLembagaController@restore');
    });
    Route::group(['middleware' => ['permission:destroy_mitra_lembaga']], function () {
        Route::delete('/mitraLembaga/{id}', 'MitraLembagaController@destroy');
    });

    // anggota cu
    Route::group(['middleware' => ['permission:index_anggota_cu']], function () {
        Route::get('/anggotaCu', 'AnggotaCuController@index');
        Route::get('/anggotaCu/indexCu/{id}', 'AnggotaCuController@indexCu'); 
        Route::get('/anggotaCu/indexProduk/{id}/cu/{cu}', 'AnggotaCuController@indexProduk'); 
        Route::get('/anggotaCu/count', 'AnggotaCuController@count');
        Route::get('/anggotaCu/history', 'AnggotaCuController@history');
        Route::get('/anggotaCu/cariData/{nik}', 'AnggotaCuController@cariData');
        Route::get('/anggotaCu/cariData2/cu/{cu}/noba/{noba}', 'AnggotaCuController@cariData2');
    });
    Route::group(['middleware' => ['permission:create_anggota_cu']], function () {
        Route::get('/anggotaCu/create', 'AnggotaCuController@create');
        Route::post('/anggotaCu/store', 'AnggotaCuController@store');
        Route::post('/anggotaCu/storeCu/{id}', 'AnggotaCuController@storeCu');
        Route::post('/anggotaCu/storeProduk/{id}', 'AnggotaCuController@storeProduk');
    });
    Route::group(['middleware' => ['permission:update_anggota_cu']], function () {
        Route::get('/anggotaCu/edit/{id}', 'AnggotaCuController@edit');
        Route::post('/anggotaCu/update/{id}', 'AnggotaCuController@update');
        Route::post('/anggotaCu/updateCu/{id}', 'AnggotaCuController@updateCu');
        Route::post('/anggotaCu/updateProduk/{id}', 'AnggotaCuController@updateProduk');
        Route::post('/anggotaCu/restore/{id}', 'AnggotaCuController@restore');
    });
    Route::group(['middleware' => ['permission:destroy_anggota_cu']], function () {
        Route::delete('/anggotaCu/{id}/cu/{cu}', 'AnggotaCuController@destroy');
        Route::delete('/anggotaCuCu/{id}', 'AnggotaCuController@destroyCu');
        Route::delete('/anggotaProdukCu/{id}', 'AnggotaCuController@destroyProduk');
    });
    Route::group(['middleware' => ['permission:upload_anggota_cu']], function () {
        Route::post('/anggotaCu/uploadExcelNew', 'AnggotaCuController@uploadExcelNew');
        Route::post('/anggotaCu/uploadExcel', 'AnggotaCuController@uploadExcel');

        Route::get('/anggotaCuDraft', 'AnggotaCuDraftController@index');
        Route::post('/anggotaCuDraft/store/{id}', 'AnggotaCuDraftController@store');
        Route::post('/anggotaCuDraft/storeAll', 'AnggotaCuDraftController@storeAll');
        Route::get('/anggotaCuDraft/edit/{id}', 'AnggotaCuDraftController@edit');
        Route::post('/anggotaCuDraft/update/{id}', 'AnggotaCuDraftController@update');
        Route::delete('/anggotaCuDraft/destroy/{id}', 'AnggotaCuDraftController@destroy');
        Route::delete('/anggotaCuDraft/destroyAll', 'AnggotaCuDraftController@destroyAll');
        Route::get('/anggotaCuDraft/count', 'AnggotaCuDraftController@count');
    });

    // jalinan klaim
    Route::group(['middleware' => ['permission:index_jalinan_klaim']], function () {
        Route::get('/jalinanKlaim/status/{status}/{awal}/{akhir}', 'JalinanKlaimController@index');
        Route::get('/jalinanKlaim/indexCu/{cu}/status/{status}/{awal}/{akhir}', 'JalinanKlaimController@indexCu'); 
        Route::get('/jalinanKlaim/count', 'JalinanKlaimController@count');
        Route::get('/jalinanKlaim/history', 'JalinanKlaimController@history');
        Route::get('/jalinanKlaim/cariData/{nik}', 'JalinanKlaimController@cariData');
        Route::get('/jalinanKlaim/getPencairan', 'JalinanKlaimController@getPencairan');
        Route::get('/jalinanKlaim/indexCair/{tanggal_pencairan}', 'JalinanKlaimController@indexCair');
        Route::get('/jalinanKlaim/indexLaporanCair/{awal}/{akhir}', 'JalinanKlaimController@indexLaporanCair');
        Route::get('/jalinanKlaim/indexLaporanPenyebab/{awal}/{akhir}/{cu}', 'JalinanKlaimController@indexLaporanPenyebab');
        Route::get('/jalinanKlaim/indexLaporanUsia/{awal}/{akhir}/{cu}', 'JalinanKlaimController@indexLaporanUsia');
        Route::get('/jalinanKlaim/indexLaporanLama/{awal}/{akhir}/{cu}', 'JalinanKlaimController@indexLaporanLama');
    });
    Route::group(['middleware' => ['permission:create_jalinan_klaim']], function () {
        Route::get('/jalinanKlaim/create', 'JalinanKlaimController@create');
        Route::post('/jalinanKlaim/store', 'JalinanKlaimController@store');
    });
    Route::group(['middleware' => ['permission:update_jalinan_klaim']], function () {
        Route::get('/jalinanKlaim/edit/{nik}/cu/{cu}/tipe/{tipe}', 'JalinanKlaimController@edit');
        Route::post('/jalinanKlaim/update/{id}', 'JalinanKlaimController@update');
        Route::post('/jalinanKlaim/updateStatus/{id}', 'JalinanKlaimController@updateStatus');
        Route::post('/jalinanKlaim/updateCair/{id}/{awal}/{akhir}', 'JalinanKlaimController@updateCair');
        Route::post('/jalinanKlaim/updateCairBatal/{id}/{awal}/{akhir}', 'JalinanKlaimController@updateCairBatal');
        Route::post('/jalinanKlaim/updateCairAll/{awal}/{akhir}', 'JalinanKlaimController@updateCairAll');
    });
    Route::group(['middleware' => ['permission:destroy_jalinan_klaim']], function () {
        Route::delete('/jalinanKlaim/{id}', 'JalinanKlaimController@destroy');
    });
    Route::get('/jalinanKlaim/cekData/{id}', 'JalinanKlaimController@cekData');

    //laporan cu
    Route::group(['middleware' => ['permission:index_laporan_cu']], function () {
        Route::get('/laporanCu', 'LaporanCuController@index');
        Route::get('/laporanCu/indexTotal', 'LaporanCuController@indexTotal');
        Route::get('/laporanCu/indexGerakan', 'LaporanCuController@indexGerakan');
        Route::get('/laporanCu/indexCu/{id}', 'LaporanCuController@indexCu');
        Route::get('/laporanCu/indexPeriode/{periode}', 'LaporanCuController@indexPeriode');
        Route::get('/laporanCu/indexPearls', 'LaporanCuController@indexPearls');
        Route::get('/laporanCu/indexPearlsCu/{id}', 'LaporanCuController@indexPearlsCu');
        Route::get('/laporanCu/indexPearlsPeriode/{periode}', 'LaporanCuController@indexPearlsPeriode');
        Route::get('/laporanCu/getPeriode', 'LaporanCuController@getPeriode');
        Route::get('/laporanCu/getPeriodeCu/{id}', 'LaporanCuController@getPeriodeCu');
        Route::get('/laporanCu/detail/{id}', 'LaporanCuController@detail');
        Route::get('/laporanCu/detailPearls/{id}', 'LaporanCuController@detailPearls');
        Route::get('/laporanCu/history', 'LaporanCuController@history');
    });
    Route::group(['middleware' => ['permission:create_laporan_cu']], function () {
        Route::get('/laporanCu/create', 'LaporanCuController@create');
        Route::post('/laporanCu/store', 'LaporanCuController@store');
    });
    Route::group(['middleware' => ['permission:update_laporan_cu']], function () {
        Route::get('/laporanCu/edit/{id}', 'LaporanCuController@edit');
        Route::post('/laporanCu/update/{id}', 'LaporanCuController@update');
    });
    Route::group(['middleware' => ['permission:destroy_laporan_cu']], function () {
        Route::delete('/laporanCu/{id}', 'LaporanCuController@destroy');
    });
    Route::group(['middleware' => ['permission:diskusi_laporan_cu']], function () {
        Route::get('/laporanCuDiskusi/get/{id}', 'LaporanCuDiskusiController@get');
        Route::post('/laporanCuDiskusi/store', 'LaporanCuDiskusiController@store');
        Route::post('/laporanCuDiskusi/update/{id}', 'LaporanCuDiskusiController@update');
        Route::delete('/laporanCuDiskusi/{id}', 'LaporanCuDiskusiController@destroy');
    });
    Route::group(['middleware' => ['permission:upload_laporan_cu']], function () {
        Route::post('/laporanCu/uploadExcel', 'LaporanCuController@uploadExcel');
        Route::post('/laporanCu/uploadExcelAll', 'LaporanCuController@uploadExcelAll');

        Route::get('/laporanCuDraft', 'LaporanCuDraftController@index');
        Route::post('/laporanCuDraft/store/{id}', 'LaporanCuDraftController@store');
        Route::post('/laporanCuDraft/storeAll', 'LaporanCuDraftController@storeAll');
        Route::get('/laporanCuDraft/edit/{id}', 'LaporanCuDraftController@edit');
        Route::post('/laporanCuDraft/update/{id}', 'LaporanCuDraftController@update');
        Route::delete('/laporanCuDraft/destroy/{id}', 'LaporanCuDraftController@destroy');
        Route::delete('/laporanCuDraft/destroyAll', 'LaporanCuDraftController@destroyAll');
        Route::get('/laporanCuDraft/count', 'LaporanCuDraftController@count');
    });

    //laporan tp
    Route::group(['middleware' => ['permission:index_laporan_tp']], function () {
        Route::get('/laporanTp/cu/{id}', 'LaporanTpController@index');
        Route::get('/laporanTp/indexTp/{id}', 'LaporanTpController@indexTp');
        Route::get('/laporanTp/indexPeriode/{id}/{periode}', 'LaporanTpController@indexPeriode');
        Route::get('/laporanTp/indexPearls', 'LaporanTpController@indexPearls');
        Route::get('/laporanTp/indexPearlsTp/{id}', 'LaporanTpController@indexPearlsTp');
        Route::get('/laporanTp/indexPearlsPeriode/{id}/{periode}', 'LaporanTpController@indexPearlsPeriode');
        Route::get('/laporanTp/getPeriode', 'LaporanTpController@getPeriode');
        Route::get('/laporanTp/getPeriodeTp/{id}/{periode}', 'LaporanTpController@getPeriodeTp');
        Route::get('/laporanTp/listLaporanTp/{cu}/{periode}', 'LaporanTpController@listLaporanTp');
        Route::get('/laporanTp/detail/{id}', 'LaporanTpController@detail');
        Route::get('/laporanTp/detailPearls/{id}', 'LaporanTpController@detailPearls');
        Route::get('/laporanTp/history', 'LaporanTpController@history');
    });
    Route::group(['middleware' => ['permission:create_laporan_tp']], function () {
        Route::get('/laporanTp/create', 'LaporanTpController@create');
        Route::post('/laporanTp/store', 'LaporanTpController@store');
    });
    Route::group(['middleware' => ['permission:update_laporan_tp']], function () {
        Route::get('/laporanTp/edit/{id}', 'LaporanTpController@edit');
        Route::post('/laporanTp/update/{id}', 'LaporanTpController@update');
    });
    Route::group(['middleware' => ['permission:destroy_laporan_tp']], function () {
        Route::delete('/laporanTp/{id}', 'LaporanTpController@destroy');
    });
    Route::group(['middleware' => ['permission:diskusi_laporan_tp']], function () {
        Route::get('/laporanTpDiskusi/get/{id}', 'laporanTpDiskusiController@get');
        Route::post('/laporanTpDiskusi/store', 'laporanTpDiskusiController@store');
        Route::post('/laporanTpDiskusi/update/{id}', 'laporanTpDiskusiController@update');
        Route::delete('/laporanTpDiskusi/{id}', 'laporanTpDiskusiController@destroy');
    });
    Route::group(['middleware' => ['permission:upload_laporan_tp']], function () {
        Route::post('/laporanTp/uploadExcel', 'LaporanTpController@uploadExcel');
        Route::post('/laporanTp/uploadExcelAll', 'LaporanTpController@uploadExcelAll');

        Route::get('/laporanTpDraft', 'LaporanTpDraftController@index');
        Route::post('/laporanTpDraft/store/{id}', 'LaporanTpDraftController@store');
        Route::post('/laporanTpDraft/storeAll', 'LaporanTpDraftController@storeAll');
        Route::get('/laporanTpDraft/edit/{id}', 'LaporanTpDraftController@edit');
        Route::post('/laporanTpDraft/update/{id}', 'LaporanTpDraftController@update');
        Route::delete('/laporanTpDraft/destroy/{id}', 'LaporanTpDraftController@destroy');
        Route::delete('/laporanTpDraft/destroyAll', 'LaporanTpDraftController@destroyAll');
        Route::get('/laporanTpDraft/count', 'LaporanTpDraftController@count');
    });

    //saran
    Route::group(['middleware' => ['permission:index_saran']], function () {
        Route::get('/saran', 'SaranController@index');
        Route::get('/saran/count', 'SaranController@count');
    });
    Route::get('/saran/create', 'SaranController@create');
    Route::post('/saran/store', 'SaranController@store');
    Route::group(['middleware' => ['permission:destroy_saran']], function () {
        Route::delete('/saran/{id}', 'SaranController@destroy');
    });

    //error log
    Route::group(['middleware' => ['permission:index_saran']], function () {
        Route::get('/errorLog', 'ErrorLogController@index');
        Route::get('/errorLog/count', 'ErrorLogController@count');
    });
    Route::get('/errorLog/create', 'ErrorLogController@create');
    Route::post('/errorLog/store', 'ErrorLogController@store');
    Route::group(['middleware' => ['permission:destroy_saran']], function () {
        Route::delete('/errorLog/{id}', 'ErrorLogController@destroy');
    });


    //pengumuman
    Route::group(['middleware' => ['permission:index_pengumuman']], function () {
        Route::get('/pengumuman', 'PengumumanController@index');
        Route::get('/pengumuman/indexCu/{id}', 'PengumumanController@indexCu');
        Route::get('/pengumuman/count', 'PengumumanController@count');
    });
    Route::group(['middleware' => ['permission:create_pengumuman']], function () {
        Route::get('/pengumuman/create', 'PengumumanController@create');
        Route::post('/pengumuman/store', 'PengumumanController@store');
    });
    Route::group(['middleware' => ['permission:update_pengumuman']], function () {
        Route::get('/pengumuman/edit/{id}', 'PengumumanController@edit');
        Route::post('/pengumuman/update/{id}', 'PengumumanController@update');
    });
    Route::group(['middleware' => ['permission:destroy_pengumuman']], function () {
        Route::delete('/pengumuman/{id}', 'PengumumanController@destroy');
    });

    // puskopdit
    Route::get('/pus', 'PusController@index');
    Route::get('/pus_all', 'PusController@indexAll');
    Route::post('/pus/store', 'PusController@store');

    // tempat 
    Route::get('/tempat', 'TempatController@index');
    Route::get('/tempat/get/{id}', 'TempatController@get');
    Route::get('/tempat/create', 'TempatController@create');
    Route::get('/tempat/edit/{id}', 'TempatController@edit');
    Route::post('/tempat/store', 'TempatController@store');
    Route::post('/tempat/update/{id}', 'TempatController@update');
    Route::delete('/tempat/{id}', 'TempatController@destroy');

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

    // file
    Route::get('download/{filename}','SystemController@download_file');
    Route::get('countOrganisasi','SystemController@countOrganisasi');

    // notification
    Route::get('/notification/get', 'NotificationController@get');
    Route::get('/notification/getAll', 'NotificationController@getAll');
    Route::get('/notification/markRead/{id}', 'NotificationController@markRead');
    Route::get('/notification/markAllRead', 'NotificationController@markAllRead');
    
});



