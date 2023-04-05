<?php

use Illuminate\Http\Request;

Route::group(['middleware' => 'throttle:1000,1'], function () {
    //pemilihan
    Route::get('/pemilihan/indexCalon/{name}', 'PemilihanController@indexCalon');
    Route::get('/pemilihan/indexCalonTerpilih/{id}', 'PemilihanController@indexCalonTerpilih');
    Route::post('/pemilihan/storePilihan', 'PemilihanController@storePilihan');
    Route::post('/pemilihan/storeMultiPilihan', 'PemilihanController@storeMultiPilihan');

    //voting
    Route::get('/voting/indexPilihan/{name}', 'VotingController@indexPilihan');
    Route::get('/voting/indexSuara/{id}', 'VotingController@indexSuara');
    Route::post('/voting/storePilihan', 'VotingController@storePilihan');

    //aset tetap
    Route::get('/asetTetap/get/{kode}', 'AsetTetapController@get');
});

Route::group(['middleware' => 'throttle:60,1'], function () {

    Route::group(['prefix' => 'auth'], function ($router) {
        Route::post('/login', 'AuthController@login');
        Route::post('/logout', 'AuthController@logout');
        Route::post('/refresh', 'AuthController@refresh');
        Route::get('/me', 'AuthController@me');
    });

    Route::group(['middleware' => 'jwt.auth'], function () {

        // Route::group(['prefix'=>'v1'],function(){

        // auth
        // Route::get('/userId', 'AuthController@userId');
        // Route::get('/profile', 'AuthController@profile');

        // system
        Route::get('/system/version', 'SystemController@version');

        // user
        Route::get('/user/indexActivity', 'UserController@indexActivity');
        Route::get('/user/getActivity/{id}', 'UserController@getActivity');
        Route::post('/user/updatePassword/{id}', 'UserController@updatePassword');
        Route::post('/user/updateFoto/{id}', 'UserController@updateFoto');
        Route::post('/user/updateIdentitas/{id}', 'UserController@updateIdentitas');
        Route::get('/user/indexCuPermission/{id}', 'UserController@indexCuPermission');

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
        Route::get('/artikel/count', 'ArtikelController@count');
        Route::get('/artikel/history', 'ArtikelController@history');
        Route::group(['middleware' => ['permission:index_artikel']], function () {
            Route::get('/artikel', 'ArtikelController@index');
            Route::get('/artikel/indexCu/{id}', 'ArtikelController@indexCu');
            Route::post('/artikel/upload', 'ArtikelController@upload');
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
        Route::get('/artikelKategori/history', 'ArtikelKategoriController@history');
        Route::group(['middleware' => ['permission:index_artikel_kategori']], function () {
            Route::get('/artikelKategori', 'ArtikelKategoriController@index');
            Route::get('/artikelKategori/get', 'ArtikelKategoriController@get');
            Route::get('/artikelKategori/indexCu/{id}', 'ArtikelKategoriController@indexCu');
            Route::get('/artikelKategori/getCu/{id}', 'ArtikelKategoriController@getCu');
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
        Route::get('/artikelPenulis/count', 'ArtikelPenulisController@count');
        Route::get('/artikelPenulis/history', 'ArtikelPenulisController@history');
        Route::group(['middleware' => ['permission:index_artikel_penulis']], function () {
            Route::get('/artikelPenulis', 'ArtikelPenulisController@index');
            Route::get('/artikelPenulis/get', 'ArtikelPenulisController@get');
            Route::get('/artikelPenulis/indexCu/{id}', 'ArtikelPenulisController@indexCu');
            Route::get('/artikelPenulis/getCu/{id}', 'ArtikelPenulisController@getCu');
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

        // artikel simo
        Route::get('/artikelSimo', 'ArtikelSimoController@index');
        Route::get('/artikelSimo/get', 'ArtikelSimoController@get');
        Route::post('/artikelSimo/upload', 'ArtikelSimoController@upload');
        Route::get('/artikelSimo/count', 'ArtikelSimoController@count');
        Route::get('/artikelSimo/history', 'ArtikelSimoController@history');
        Route::group(['middleware' => ['permission:create_artikel']], function () {
            Route::get('/artikelSimo/create', 'ArtikelSimoController@create');
            Route::post('/artikelSimo/store', 'ArtikelSimoController@store');
        });
        Route::group(['middleware' => ['permission:update_artikel']], function () {
            Route::get('/artikelSimo/edit/{id}', 'ArtikelSimoController@edit');
            Route::post('/artikelSimo/update/{id}', 'ArtikelSimoController@update');
            Route::post('/artikelSimo/updateUtamakan/{id}', 'ArtikelSimoController@updateUtamakan');
        });
        Route::group(['middleware' => ['permission:destroy_artikel']], function () {
            Route::delete('/artikelSimo/{id}', 'ArtikelSimoController@destroy');
        });

        // cu
        Route::get('/cu/count', 'CuController@count');
        Route::get('/cu/history', 'CuController@history');
        Route::get('/cu/getHeader', 'CuController@getHeader');
        Route::get('/cu/escete/{id}', 'CuController@escete');
        Route::group(['middleware' => ['permission:index_cu']], function () {
            Route::get('/cu', 'CuController@index');
            Route::get('/cu/deleted', 'CuController@indexDeleted');
            Route::get('/cu/get', 'CuController@get');
            Route::get('/cu/getPus/{id}', 'CuController@getPus');
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
        Route::get('/cu/getBirthday', 'CuController@getBirthday');

        // tp
        Route::get('/tp/count', 'TpController@count');
        Route::get('/tp/history', 'TpController@history');
        Route::get('/tp/getCu/{id}', 'TpController@getCu');
        Route::group(['middleware' => ['permission:index_tp']], function () {
            Route::get('/tp', 'TpController@index');
            Route::get('/tp/get', 'TpController@get');
            Route::get('/tp/indexCu/{id}', 'TpController@indexCu');
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
        Route::get('/produkcu/getCuJalinan/{id}', 'ProdukCuController@getCuJalinan');
        Route::get('/produkcu/getSimpananCu/{id}', 'ProdukCuController@getSimpananCu');
        Route::get('/produkcu/getPinjamanCu/{id}', 'ProdukCuController@getPinjamanCu');
        Route::get('/produkcu/count', 'ProdukCuController@count');
        Route::get('/produkcu/history', 'ProdukCuController@history');
        Route::group(['middleware' => ['permission:index_produk_cu']], function () {
            Route::get('/produkcu', 'ProdukCuController@index');
            Route::get('/produkcu/get', 'ProdukCuController@get');
            Route::get('/produkcu/indexCu/{id}', 'ProdukCuController@indexCu');
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

        // sertifikat kegiatan
        Route::get('/sertifikatKegiatan', 'SertifikatController@index');
        Route::get('/sertifikatKegiatan/create', 'SertifikatController@create');
        Route::post('/sertifikatKegiatan/store', 'SertifikatController@store');
        Route::get('/sertifikatKegiatan/edit/{id}', 'SertifikatController@edit');
        Route::post('/sertifikatKegiatan/update/{id}', 'SertifikatController@update');
        Route::delete('/sertifikatKegiatan/{id}', 'SertifikatController@destroy');

        //generate sertifikat
        Route::post('/generateSertifikat', 'SertifikatController@generateSertifikat');

        // download  surat tugas
        Route::get('/downloadSuratTugas/{filename}', 'KegiatanBKCUController@downloadSuratTugas');

        // kode kegiatan
        Route::get('/kodeKegiatan', 'KodeKegiatanController@index');
        Route::get('/kodeKegiatan/get', 'KodeKegiatanController@get');
        Route::get('/kodeKegiatan/create', 'KodeKegiatanController@create');
        Route::post('/kodeKegiatan/store', 'KodeKegiatanController@store');
        Route::get('/kodeKegiatan/edit/{id}', 'KodeKegiatanController@edit');
        Route::post('/kodeKegiatan/update/{id}', 'KodeKegiatanController@update');
        Route::delete('/kodeKegiatan/{id}', 'KodeKegiatanController@destroy');

        // form evaluasi
        Route::get('/formEvaluasi', 'FormEvaluasiController@index');
        Route::get('/formEvaluasi/sub', 'FormEvaluasiController@indexSub');
        Route::get('/formEvaluasi/get', 'FormEvaluasiController@get');
        Route::get('/formEvaluasi/create', 'FormEvaluasiController@create');
        Route::post('/formEvaluasi/store', 'FormEvaluasiController@store');
        Route::get('/formEvaluasi/edit/{id}', 'FormEvaluasiController@edit');
        Route::post('/formEvaluasi/update/{id}', 'FormEvaluasiController@update');
        Route::delete('/formEvaluasi/{id}', 'FormEvaluasiController@destroy');

        // kegiatan bkcu
        Route::get('/kegiatanBKCU/index/{kegiatan_tipe}/{status}', 'KegiatanBKCUController@index');
        Route::get('/kegiatanBKCU/baru', 'KegiatanBKCUController@indexBaru');
        Route::get('/kegiatanBKCU/mulai', 'KegiatanBKCUController@indexMulai');
        Route::get('/kegiatanBKCU/buka', 'KegiatanBKCUController@indexBuka');
        Route::get('/kegiatanBKCU/jalan', 'KegiatanBKCUController@indexJalan');
        Route::get('/kegiatanBKCU/diikuti', 'KegiatanBKCUController@indexDiikuti');
        Route::get('/kegiatanBKCU/kegiatan', 'KegiatanBKCUController@indexKegiatan');
        Route::get('/kegiatanBKCU/periode/{kegiatan_tipe}/{periode}', 'KegiatanBKCUController@indexPeriode');

        // get data
        Route::get('/kegiatanBKCU/indexPisah/{kegiatan_tipe}/{periode}/{status}', 'KegiatanBKCUController@indexPisah');

        Route::get('/kegiatanBKCU/indexSemuaPeserta/{tipe_kegiatan}', 'KegiatanBKCUController@indexSemuaPeserta');
        Route::get('/kegiatanBKCU/indexSemuaPesertaMitra/{tipe_kegiatan}', 'KegiatanBKCUController@indexSemuaPesertaMitra');
        Route::get('/kegiatanBKCU/indexSemuaPesertaCu/{tipe_kegiatan}/cu/{id}', 'KegiatanBKCUController@indexSemuaPesertaCu');
        Route::get('/kegiatanBKCU/indexSemuaPanitia', 'KegiatanBKCUController@indexSemuaPanitia');
        Route::get('/kegiatanBKCU/indexSemuaPanitiaCu/{id}', 'KegiatanBKCUController@indexSemuaPanitiaCu');
        Route::get('/kegiatanBKCU/indexSemuaFasilitator', 'KegiatanBKCUController@indexSemuaFasilitator');
        Route::get('/kegiatanBKCU/indexSemuaFasilitatorCu/{id}', 'KegiatanBKCUController@indexSemuaFasilitatorCu');
        Route::get('/kegiatanBKCU/indexPeserta/{id}', 'KegiatanBKCUController@indexPeserta');
        Route::get('/kegiatanBKCU/indexMateri/{id}', 'KegiatanBKCUController@indexMateri');
        Route::get('/kegiatanBKCU/indexListMateri/{id}', 'KegiatanBKCUController@indexListMateri');
        Route::get('/kegiatanBKCU/indexNilaiListMateri/{id}', 'KegiatanBKCUController@indexNilaiListMateri');
        Route::get('/kegiatanBKCU/indexKeputusan/{id}', 'KegiatanBKCUController@indexKeputusan');
        Route::get('/kegiatanBKCU/indexKeputusanKomentar/{id}', 'KegiatanBKCUController@indexKeputusanKomentar');
        Route::get('/kegiatanBKCU/indexPertanyaan/{id}', 'KegiatanBKCUController@indexPertanyaan');
        Route::get('/kegiatanBKCU/indexPertanyaanKomentar/{id}', 'KegiatanBKCUController@indexPertanyaanKomentar');
        Route::get('/kegiatanBKCU/indexTugas/{id}', 'KegiatanBKCUController@indexTugas');
        Route::get('/kegiatanBKCU/indexTugasJawaban/{id}', 'KegiatanBKCUController@indexTugasJawaban');
        Route::get('/kegiatanBKCU/indexPesertaHadir/{id}', 'KegiatanBKCUController@indexPesertahadir');
        Route::get('/kegiatanBKCU/indexPesertaCu/{id}/cu/{cu}', 'KegiatanBKCUController@indexPesertaCu');
        Route::get('/kegiatanBKCU/indexPesertaCountCu/{id}', 'KegiatanBKCUController@indexPesertaCountCu');
        Route::get('/kegiatanBKCU/indexPesertaHadirCountCu/{id}', 'KegiatanBKCUController@indexPesertaHadirCountCu');
        Route::get('/kegiatanBKCU/indexKeputusanCount/{id}', 'KegiatanBKCUController@indexKeputusanCount');
        Route::get('/kegiatanBKCU/indexPertanyaanCount/{id}', 'KegiatanBKCUController@indexPertanyaanCount');
        Route::get('/kegiatanBKCU/getPeriode/{kegiatan_tipe}', 'KegiatanBKCUController@getPeriode');
        Route::get('/kegiatanBKCU/edit/{id}', 'KegiatanBKCUController@edit');
        Route::get('/kegiatanBKCU/checkPeserta/{kegiatan_id}/{aktivis_id}', 'KegiatanBKCUController@checkPeserta');
        Route::get('/kegiatanBKCU/checkPanitia/{kegiatan_id}/{aktivis_id}', 'KegiatanBKCUController@checkPanitia');
        Route::post('/kegiatanBKCU/updatePesertaHadir/{kegiatan_id}/{aktivis_id}', 'KegiatanBKCUController@updatePesertaHadir');
        Route::post('/kegiatanBKCU/updatePanitiaHadir/{kegiatan_id}/{aktivis_id}', 'KegiatanBKCUController@updatePanitiaHadir');
        Route::get('/kegiatanBKCU/countJalan', 'KegiatanBKCUController@countJalan');
        Route::get('/kegiatanBKCU/countDiikuti', 'KegiatanBKCUController@countDiikuti');
        Route::get('/kegiatanBKCU/countPeserta/{id}', 'KegiatanBKCUController@countPeserta');
        Route::get('/kegiatanBKCU/countPesertaHadir/{id}', 'KegiatanBKCUController@countPesertaHadir');
        Route::get('/kegiatanBKCU/countKeputusan/{id}/{cu}/{user}', 'KegiatanBKCUController@countKeputusan');
        Route::post('/kegiatanBKCU/storeKeputusan/{id}', 'KegiatanBKCUController@storeKeputusan');
        Route::post('/kegiatanBKCU/updateKeputusan/{id}', 'KegiatanBKCUController@updateKeputusan');
        Route::delete('/kegiatanBKCU/destroyKeputusan/{id}', 'KegiatanBKCUController@destroyKeputusan');
        Route::post('/kegiatanBKCU/storeKeputusanKomentar/{id}', 'KegiatanBKCUController@storeKeputusanKomentar');
        Route::post('/kegiatanBKCU/updateKeputusanKomentar/{id}', 'KegiatanBKCUController@updateKeputusanKomentar');
        Route::delete('/kegiatanBKCU/destroyKeputusanKomentar/{id}', 'KegiatanBKCUController@destroyKeputusanKomentar');
        Route::get('/kegiatanBKCU/countPertanyaan/{id}/{cu}/{user}', 'KegiatanBKCUController@countPertanyaan');
        Route::post('/kegiatanBKCU/storePertanyaan/{id}', 'KegiatanBKCUController@storePertanyaan');
        Route::post('/kegiatanBKCU/updatePertanyaan/{id}', 'KegiatanBKCUController@updatePertanyaan');
        Route::delete('/kegiatanBKCU/destroyPertanyaan/{id}', 'KegiatanBKCUController@destroyPertanyaan');
        Route::post('/kegiatanBKCU/storePertanyaanKomentar/{id}', 'KegiatanBKCUController@storePertanyaanKomentar');
        Route::post('/kegiatanBKCU/updatePertanyaanKomentar/{id}', 'KegiatanBKCUController@updatePertanyaanKomentar');
        Route::post('/kegiatanBKCU/jawabanPertanyaan/{id}/{tipe}', 'KegiatanBKCUController@jawabanPertanyaan');
        Route::delete('/kegiatanBKCU/destroyPertanyaanKomentar/{id}', 'KegiatanBKCUController@destroyPertanyaanKomentar');
        Route::post('/kegiatanBKCU/storePeserta/{kegiatan_tipe}/{id}', 'KegiatanBKCUController@storePeserta');
        Route::post('/kegiatanBKCU/updatePeserta/{id}', 'KegiatanBKCUController@updatePeserta');
        Route::delete('/kegiatanBKCU/destroyPeserta/{id}', 'KegiatanBKCUController@destroyPeserta');
        Route::post('/kegiatanBKCU/batalPeserta/{kegiatan_tipe}/{id}', 'KegiatanBKCUController@batalPeserta');
        Route::get('/kegiatanBKCU/create', 'KegiatanBKCUController@create');
        Route::post('/kegiatanBKCU/store/{kegiatan_tipe}', 'KegiatanBKCUController@store');
        Route::post('/kegiatanBKCU/update/{id}', 'KegiatanBKCUController@update');
        Route::post('/kegiatanBKCU/updateStatus/{id}', 'KegiatanBKCUController@updateStatus');
        Route::post('/kegiatanBKCU/storeMateri/{kegiatan_tipe}/{id}', 'KegiatanBKCUController@storeMateri');
        Route::post('/kegiatanBKCU/updateMateri/{id}', 'KegiatanBKCUController@updateMateri');
        Route::delete('/kegiatanBKCU/destroyMateri/{kegiatan_tipe}/{id}', 'KegiatanBKCUController@destroyMateri');
        Route::delete('/kegiatanBKCU/{id}', 'KegiatanBKCUController@destroy');
        Route::post('/kegiatanBKCU/storeTugas/{kegiatan_tipe}/{id}', 'KegiatanBKCUController@storeTugas');
        Route::post('/kegiatanBKCU/storeTugasJawaban/{kegiatan_tipe}', 'KegiatanBKCUController@storeTugasJawaban');
        Route::get('/kegiatanBKCU/editTugasJawaban/{id}', 'KegiatanBKCUController@editTugasJawaban');
        Route::post('/kegiatanBKCU/updateTugas/{id}', 'KegiatanBKCUController@updateTugas');
        Route::post('/kegiatanBKCU/updateTugasJawaban/{id}', 'KegiatanBKCUController@updateTugasJawaban');
        Route::delete('/kegiatanBKCU/destroyTugas/{kegiatan_tipe}/{id}', 'KegiatanBKCUController@destroyTugas');
        Route::delete('/kegiatanBKCU/destroyTugasJawaban/{kegiatan_tipe}/{id}', 'KegiatanBKCUController@destroyTugasJawaban');


        Route::post('/kegiatanBKCU/storeListMateri/{kegiatan_tipe}/{id}', 'KegiatanBKCUController@storeListMateri');
        Route::get('/kegiatanBKCU/editNilai/{id}/{kegiatan_id}', 'KegiatanBKCUController@editNilai');
        Route::post('/kegiatanBKCU/saveNilai/{id}', 'KegiatanBKCUController@saveNilai');
        Route::post('/kegiatanBKCU/updateListMateri/{id}', 'KegiatanBKCUController@updateListMateri');
        Route::delete('/kegiatanBKCU/destroyListMateri/{kegiatan_tipe}/{id}', 'KegiatanBKCUController@destroyListMateri');

        // kegiatan rekom
        Route::get('/kegiatanRekom/history', 'KegiatanRekomController@history');
        Route::get('/kegiatanRekom', 'KegiatanRekomController@index');
        Route::get('/kegiatanRekom/get', 'KegiatanRekomController@get');
        Route::get('/kegiatanRekom/indexKegiatan/{id}', 'KegiatanRekomController@indexKegiatan');
        Route::get('/kegiatanRekom/indexHasil/{id}', 'KegiatanRekomController@indexHasil');
        Route::get('/kegiatanRekom/create', 'KegiatanRekomController@create');
        Route::post('/kegiatanRekom/store', 'KegiatanRekomController@store');
        Route::get('/kegiatanRekom/edit/{id}', 'KegiatanRekomController@edit');
        Route::post('/kegiatanRekom/update/{id}', 'KegiatanRekomController@update');
        Route::delete('/kegiatanRekom/{id}', 'KegiatanRekomController@destroy');

        // kegiatan rekom hasil
        Route::post('/kegiatanRekom/storeHasil', 'KegiatanRekomController@storeHasil');
        Route::post('/kegiatanRekom/updateHasil/{id}', 'KegiatanRekomController@updateHasil');
        Route::delete('/kegiatanRekom/destroyHasil/{id}', 'KegiatanRekomController@destroyHasil');

        // aktivis
        Route::get('/aktivis/get/{id}', 'AktivisController@get');
        Route::get('/aktivis/history', 'AktivisController@history');
        Route::get('/aktivis/cariData/{nik}', 'AktivisController@cariData');
        Route::get('/aktivis/count', 'AktivisController@count');
        Route::get('/aktivis/edit/{id}', 'AktivisController@edit');
        Route::post('/aktivis/update/{id}', 'AktivisController@update');
        Route::get('/aktivis/indexPekerjaan/{id}', 'AktivisController@indexPekerjaan');
        Route::get('/aktivis/indexPendidikan/{id}', 'AktivisController@indexPendidikan');
        Route::get('/aktivis/indexAnggotaCu/{id}', 'AktivisController@indexAnggotaCu');
        Route::get('/aktivis/indexKeluarga/{id}', 'AktivisController@indexKeluarga');
        Route::get('/aktivis/indexOrganisasi/{id}', 'AktivisController@indexOrganisasi');
        Route::get('/aktivis/indexDiklat/{id}', 'AktivisController@indexDiklat');
        Route::get('/aktivis/indexPertemuan/{id}', 'AktivisController@indexPertemuan');
        Route::get('/aktivis/indexKeterangan/{id}', 'AktivisController@indexKeterangan');
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
        Route::delete('/aktivis/keterangan/{id}', 'AktivisController@destroyKeterangan');
        Route::post('/aktivis/saveKeterangan/{id}', 'AktivisController@saveKeterangan');
        Route::delete('/aktivis/keluarga/{id}', 'AktivisController@destroyKeluarga');
        Route::delete('/aktivis/anggotaCu/{id}', 'AktivisController@destroyAnggotaCu');
        Route::get('/aktivis/index/{tingkat}/{status}', 'AktivisController@index');
        Route::post('/aktivis/indexTingkat/', 'AktivisController@indexTingkat');
        Route::get('/aktivis/indexLembaga', 'AktivisController@indexLembaga');
        Route::get('/aktivis/indexCu/{id}/{tingkat}/{status}', 'AktivisController@indexCu');
        Route::get('/aktivis/indexTingkatArr/{kegiatan_id}/{tingkat}', 'AktivisController@indexTingkatArr');
        Route::get('/aktivis/indexCuTingkatArr/{kegiatan_id}/{id}/{tingkat}', 'AktivisController@indexCuTingkatArr');
        // Route::group(['middleware' => ['permission:index_aktivis']], function () {
        // });
        Route::group(['middleware' => ['permission:create_aktivis']], function () {
            Route::get('/aktivis/create', 'AktivisController@create');
            Route::post('/aktivis/store', 'AktivisController@store');
        });
        Route::group(['middleware' => ['permission:update_aktivis']], function () {
            // nothing
        });
        Route::group(['middleware' => ['permission:destroy_aktivis']], function () {
            Route::delete('/aktivis/{id}', 'AktivisController@destroy');
        });

        //aset tetap
        Route::get('/asetTetap/generate/{id}', 'AsetTetapController@generate');
        Route::get('/asetTetap', 'AsetTetapController@index');
        Route::get('/asetTetap/indexSelesai', 'AsetTetapController@indexSelesai');
        Route::get('/asetTetap/indexHapus', 'AsetTetapController@indexHapus');
        Route::get('/asetTetap/history', 'AsetTetapController@history');
        Route::get('/asetTetap/indexSub/{id}', 'AsetTetapController@indexSub');
        Route::group(['middleware' => ['permission:index_aset_tetap']], function () {
        });
        Route::group(['middleware' => ['permission:create_aset_tetap']], function () {
            Route::get('/asetTetap/create', 'AsetTetapController@create');
            Route::post('/asetTetap/store', 'AsetTetapController@store');
        });
        Route::group(['middleware' => ['permission:update_aset_tetap']], function () {
            Route::get('/asetTetap/edit/{id}', 'AsetTetapController@edit');
            Route::post('/asetTetap/update/{id}', 'AsetTetapController@update');
        });
        Route::group(['middleware' => ['permission:destroy_aset_tetap']], function () {
            Route::delete('/asetTetap/{id}', 'AsetTetapController@destroy');
            Route::delete('/asetTetap/hapusDariLaporan/{id}', 'AsetTetapController@hapusDariLaporan');
        });

        //aset tetap jenis
        Route::get('/asetTetapGolongan/get', 'AsetTetapGolonganController@get');
        Route::get('/asetTetapKelompok/get/{id}', 'AsetTetapKelompokController@get');
        Route::get('/asetTetapJenis/get/{id}', 'AsetTetapJenisController@get');
        Route::group(['middleware' => ['permission:index_aset_tetap_jenis']], function () {
            Route::get('/asetTetapGolongan', 'AsetTetapGolonganController@index');
            Route::get('/asetTetapKelompok', 'AsetTetapKelompokController@index');
            Route::get('/asetTetapJenis', 'AsetTetapJenisController@index');
        });
        Route::group(['middleware' => ['permission:create_aset_tetap_jenis']], function () {
            Route::get('/asetTetapGolongan/create', 'AsetTetapGolonganController@create');
            Route::get('/asetTetapKelompok/create', 'AsetTetapKelompokController@create');
            Route::get('/asetTetapJenis/create', 'AsetTetapJenisController@create');
            Route::post('/asetTetapGolongan/store', 'AsetTetapGolonganController@store');
            Route::post('/asetTetapKelompok/store', 'AsetTetapKelompokController@store');
            Route::post('/asetTetapJenis/store', 'AsetTetapJenisController@store');
        });
        Route::group(['middleware' => ['permission:update_aset_tetap_jenis']], function () {
            Route::get('/asetTetapGolongan/edit/{id}', 'AsetTetapGolonganController@edit');
            Route::get('/asetTetapKelompok/edit/{id}', 'AsetTetapKelompokController@edit');
            Route::get('/asetTetapJenis/edit/{id}', 'AsetTetapJenisController@edit');
            Route::post('/asetTetapGolongan/update/{id}', 'AsetTetapGolonganController@update');
            Route::post('/asetTetapKelompok/update/{id}', 'AsetTetapKelompokController@update');
            Route::post('/asetTetapJenis/update/{id}', 'AsetTetapJenisController@update');
        });
        Route::group(['middleware' => ['permission:destroy_aset_tetap_jenis']], function () {
            Route::delete('/asetTetapGolongan/{id}', 'AsetTetapGolonganController@destroy');
            Route::delete('/asetTetapKelompok/{id}', 'AsetTetapKelompokController@destroy');
            Route::delete('/asetTetapJenis/{id}', 'AsetTetapJenisController@destroy');
        });

        //aset tetap lokasi
        Route::get('/asetTetapLokasi/get', 'AsetTetapLokasiController@get');
        Route::group(['middleware' => ['permission:index_aset_tetap_lokasi']], function () {
            Route::get('/asetTetapLokasi', 'AsetTetapLokasiController@index');
        });
        Route::group(['middleware' => ['permission:create_aset_tetap_lokasi']], function () {
            Route::get('/asetTetapLokasi/create', 'AsetTetapLokasiController@create');
            Route::post('/asetTetapLokasi/store', 'AsetTetapLokasiController@store');
        });
        Route::group(['middleware' => ['permission:update_aset_tetap_lokasi']], function () {
            Route::get('/asetTetapLokasi/edit/{id}', 'AsetTetapLokasiController@edit');
            Route::post('/asetTetapLokasi/update/{id}', 'AsetTetapLokasiController@update');
        });
        Route::group(['middleware' => ['permission:destroy_aset_tetap_lokasi']], function () {
            Route::delete('/asetTetapLokasi/{id}', 'AsetTetapLokasiController@destroy');
        });

        // surat
        Route::get('/surat/getPeriode/{cu}', 'SuratController@getPeriode');
        Route::group(['middleware' => ['permission:index_surat']], function () {
            Route::get('/surat/indexCu/{cu}/tipe/{tipe}/periode/{periode}', 'SuratController@indexCu');
            Route::get('/surat/getKode/{id}', 'SuratController@getKode');
        });
        Route::group(['middleware' => ['permission:create_surat']], function () {
            Route::get('/surat/create', 'SuratController@create');
            Route::post('/surat/store', 'SuratController@store');
        });
        Route::group(['middleware' => ['permission:update_surat']], function () {
            Route::get('/surat/edit/{id}', 'SuratController@edit');
            Route::post('/surat/update/{id}', 'SuratController@update');
        });
        Route::group(['middleware' => ['permission:destroy_surat']], function () {
            Route::delete('/surat/{id}', 'SuratController@destroy');
        });

        //surat kategori
        Route::get('/suratKategori/history', 'SuratKategoriController@history');
        Route::group(['middleware' => ['permission:index_surat']], function () {
            Route::get('/suratKategori', 'SuratKategoriController@index');
            Route::get('/suratKategori/get', 'SuratKategoriController@get');
            Route::get('/suratKategori/indexCu/{id}', 'SuratKategoriController@indexCu');
            Route::get('/suratKategori/getCu/{id}', 'SuratKategoriController@getCu');
        });
        Route::group(['middleware' => ['permission:create_surat']], function () {
            Route::get('/suratKategori/create', 'SuratKategoriController@create');
            Route::post('/suratKategori/store', 'SuratKategoriController@store');
        });
        Route::group(['middleware' => ['permission:update_surat']], function () {
            Route::get('/suratKategori/edit/{id}', 'SuratKategoriController@edit');
            Route::post('/suratKategori/update/{id}', 'SuratKategoriController@update');
        });
        Route::group(['middleware' => ['permission:destroy_surat']], function () {
            Route::delete('/suratKategori/{id}', 'SuratKategoriController@destroy');
        });

        //surat kode
        Route::get('/suratKode/history', 'SuratKodeController@history');
        Route::group(['middleware' => ['permission:index_surat']], function () {
            Route::get('/suratKode', 'SuratKodeController@index');
            Route::get('/suratKode/get', 'SuratKodeController@get');
            Route::get('/suratKode/indexCu/{id}', 'SuratKodeController@indexCu');
            Route::get('/suratKode/getCu/{id}', 'SuratKodeController@getCu');
        });
        Route::group(['middleware' => ['permission:create_surat']], function () {
            Route::get('/suratKode/create', 'SuratKodeController@create');
            Route::post('/suratKode/store', 'SuratKodeController@store');
        });
        Route::group(['middleware' => ['permission:update_surat']], function () {
            Route::get('/suratKode/edit/{id}', 'SuratKodeController@edit');
            Route::post('/suratKode/update/{id}', 'SuratKodeController@update');
        });
        Route::group(['middleware' => ['permission:destroy_surat']], function () {
            Route::delete('/suratKode/{id}', 'SuratKodeController@destroy');
        });

        // surat masuk
        Route::get('/suratMasuk/getPeriode/{cu}', 'SuratMasukController@getPeriode');
        Route::group(['middleware' => ['permission:index_surat']], function () {
            Route::get('/suratMasuk/indexCu/{cu}/{periode}', 'SuratMasukController@indexCu');
            Route::get('/suratMasuk/getKode/{id}', 'SuratMasukController@getKode');
        });
        Route::group(['middleware' => ['permission:create_surat']], function () {
            Route::get('/suratMasuk/create', 'SuratMasukController@create');
            Route::post('/suratMasuk/store', 'SuratMasukController@store');
        });
        Route::group(['middleware' => ['permission:update_surat']], function () {
            Route::get('/suratMasuk/edit/{id}', 'SuratMasukController@edit');
            Route::post('/suratMasuk/update/{id}', 'SuratMasukController@update');
        });
        Route::group(['middleware' => ['permission:destroy_surat']], function () {
            Route::delete('/suratMasuk/{id}', 'SuratMasukController@destroy');
        });

        //dokumen
        Route::get('/dokumen/count', 'DokumenController@count');
        Route::get('/dokumen/history', 'DokumenController@history');
        Route::get('/dokumen/indexGerakanPublik', 'DokumenController@indexGerakanPublik');
        Route::get('/dokumen/indexGerakanPublikCu/{id}', 'DokumenController@indexGerakanPublikCu');
        Route::get('/dokumen/', 'DokumenController@index');
        Route::get('/dokumen/indexCu/{id}', 'DokumenController@indexCu');
        Route::group(['middleware' => ['permission:index_dokumen']], function () {
        });
        Route::group(['middleware' => ['permission:create_dokumen']], function () {
            Route::get('/dokumen/create', 'DokumenController@create');
            Route::post('/dokumen/store', 'DokumenController@store');
        });
        Route::group(['middleware' => ['permission:update_dokumen']], function () {
            Route::get('/dokumen/edit/{id}', 'DokumenController@edit');
            Route::post('/dokumen/update/{id}', 'DokumenController@update');
        });
        Route::group(['middleware' => ['permission:destroy_dokumen']], function () {
            Route::delete('/dokumen/{id}', 'DokumenController@destroy');
        });

        //dokumen kategori
        Route::get('/dokumenKategori/history', 'DokumenKategoriController@history');
        Route::group(['middleware' => ['permission:index_dokumen_kategori']], function () {
            Route::get('/dokumenKategori', 'DokumenKategoriController@index');
            Route::get('/dokumenKategori/get', 'DokumenKategoriController@get');
            Route::get('/dokumenKategori/indexCu/{id}', 'DokumenKategoriController@indexCu');
            Route::get('/dokumenKategori/getCu/{id}', 'DokumenKategoriController@getCu');
        });
        Route::group(['middleware' => ['permission:create_dokumen_kategori']], function () {
            Route::get('/dokumenKategori/create', 'DokumenKategoriController@create');
            Route::post('/dokumenKategori/store', 'DokumenKategoriController@store');
        });
        Route::group(['middleware' => ['permission:update_dokumen_kategori']], function () {
            Route::get('/dokumenKategori/edit/{id}', 'DokumenKategoriController@edit');
            Route::post('/dokumenKategori/update/{id}', 'DokumenKategoriController@update');
        });
        Route::group(['middleware' => ['permission:destroy_dokumen_kategori']], function () {
            Route::delete('/dokumenKategori/{id}', 'DokumenKategoriController@destroy');
        });

        // assesment Access
        Route::get('/assesmentAccess/history', 'AssesmentAccessController@history');
        Route::get(
            '/assesmentAccess/cariData/{cu}/{periode}',
            'AssesmentAccessController@cariData'
        );
        Route::get('/assesmentAccess/edit/{id}', 'AssesmentAccessController@edit');
        Route::get('/assesmentAccess/editPenilaian/{id}', 'AssesmentAccessController@editPenilaian');
        Route::group(['middleware' => ['permission:index_assesment_access']], function () {
            Route::get('/assesmentAccess', 'AssesmentAccessController@index');
            Route::get('/assesmentAccess/indexCu/{id}', 'AssesmentAccessController@indexCu');
            Route::get('/assesmentAccess/count', 'AssesmentAccessController@count');
        });
        Route::group(['middleware' => ['permission:create_assesment_access']], function () {
            Route::get('/assesmentAccess/create', 'AssesmentAccessController@create');
            Route::post('/assesmentAccess/store', 'AssesmentAccessController@store');
        });
        Route::group(['middleware' => ['permission:update_assesment_access']], function () {
            Route::post('/assesmentAccess/update/{id}', 'AssesmentAccessController@update');
            Route::post('/assesmentAccess/updateSingle/{id}/{perspektif}', 'AssesmentAccessController@updateSingle');
        });
        Route::group(['middleware' => ['permission:destroy_assesment_access']], function () {
            Route::delete('/assesmentAccess/{id}', 'AssesmentAccessController@destroy');
        });

        // monitoring
        Route::get('/monitoring/history', 'MonitoringController@history');
        Route::group(['middleware' => ['permission:index_monitoring']], function () {
            Route::get('/monitoring', 'MonitoringController@index');
            Route::get('/monitoring/indexCu/{cu}/{tp}', 'MonitoringController@indexCu');
            Route::get('/monitoring/get/{id}', 'MonitoringController@get');
            Route::get('/monitoring/count', 'MonitoringController@count');
        });
        Route::group(['middleware' => ['permission:create_monitoring']], function () {
            Route::get('/monitoring/create', 'MonitoringController@create');
            Route::post('/monitoring/store', 'MonitoringController@store');
        });
        Route::group(['middleware' => ['permission:update_monitoring']], function () {
            Route::get('/monitoring/edit/{id}', 'MonitoringController@edit');
            Route::post('/monitoring/update/{id}', 'MonitoringController@update');
            Route::post('/monitoring/updateRekom/{id}', 'MonitoringController@updateRekom');
        });
        Route::group(['middleware' => ['permission:destroy_monitoring']], function () {
            Route::delete('/monitoring/{id}', 'MonitoringController@destroy');
        });

        // monitoring pencapaian
        Route::get('/monitoringPencapaian/history', 'MonitoringPencapaianController@history');
        Route::group(['middleware' => ['permission:index_monitoring']], function () {
            Route::get('/monitoringPencapaian/get/{id}', 'MonitoringPencapaianController@get');
            Route::get('/monitoringPencapaian/count', 'MonitoringPencapaianController@count');
        });
        Route::group(['middleware' => ['permission:create_monitoring']], function () {
            Route::post('/monitoringPencapaian/store', 'MonitoringPencapaianController@store');
        });
        Route::group(['middleware' => ['permission:update_monitoring']], function () {
            Route::post('/monitoringPencapaian/update/{id}', 'MonitoringPencapaianController@update');
        });
        Route::group(['middleware' => ['permission:destroy_monitoring']], function () {
            Route::delete('/monitoringPencapaian/{id}', 'MonitoringPencapaianController@destroy');
        });

        // mitra perserorangan
        Route::get('/mitraOrang/history', 'MitraOrangController@history');
        Route::get('/mitraOrang', 'MitraOrangController@index');
        Route::get('/mitraOrang/indexPeserta/{kegiatan_id}', 'MitraOrangController@indexPeserta');
        Route::group(['middleware' => ['permission:index_mitra_orang']], function () {
            Route::get('/mitraOrang/count', 'MitraOrangController@count');
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
        Route::get('/mitraLembaga/history', 'MitraLembagaController@history');
        Route::get('/mitraLembaga', 'MitraLembagaController@index');
        Route::group(['middleware' => ['permission:index_mitra_lembaga']], function () {
            Route::get('/mitraLembaga/count', 'MitraLembagaController@count');
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
        Route::get('/anggotaCu/systemNIK', 'AnggotaCuController@systemNIK');
        Route::get('/anggotaCu/history', 'AnggotaCuController@history');
        Route::get('/anggotaCu/count', 'AnggotaCuController@count');
        Route::get('/anggotaCu/cariDataKTP/{nik}', 'AnggotaCuController@cariDataKTP');
        Route::get('/anggotaCu/cariDataBA/{cu}/{noba}', 'AnggotaCuController@cariDataBA');
        Route::get('/anggotaCu/indexProduk/{id}/cu/{cu}', 'AnggotaProdukCuController@index');
        Route::get('/anggotaCu/indexProdukSaldo/{id}', 'AnggotaProdukCuController@indexSaldo');
        Route::get('/anggotaCu', 'AnggotaCuController@index');
        Route::get('/anggotaCu/indexCu/{cu}/{tp}', 'AnggotaCuController@indexCu');
        Route::get('/anggotaCu/keluar', 'AnggotaCuController@indexKeluar');
        Route::get('/anggotaCu/indexMeninggal', 'AnggotaCuController@indexMeninggal');
        Route::get('/anggotaCu/indexCuKeluar/{cu}/{tp}', 'AnggotaCuController@indexCuKeluar');
        Route::get('/anggotaCu/indexCuMeninggal/{cu}/{tp}', 'AnggotaCuController@indexCuMeninggal');
        Route::get('/anggotaCu/getCu/{cu}', 'AnggotaCuController@getCu');
        Route::get('/anggotaCu/getCuJalinan/{cu}/{bulan}/{tahun}', 'AnggotaCuController@getCuJalinan');
        Route::get('/anggotaCu/getCuKeluar/{cu}', 'AnggotaCuController@getCuKeluar');
        Route::group(['middleware' => ['permission:create_anggota_cu']], function () {
            Route::get('/anggotaCu/create', 'AnggotaCuController@create');
            Route::post('/anggotaCu/store', 'AnggotaCuController@store');
            Route::post('/anggotaCu/storeCu/{id}', 'AnggotaCuController@storeCu');
            Route::post('/anggotaCu/storeProduk/{id}', 'AnggotaProdukCuController@store');
        });
        Route::group(['middleware' => ['permission:update_anggota_cu']], function () {
            Route::get('/anggotaCu/edit/{id}', 'AnggotaCuController@edit');
            Route::post('/anggotaCu/update/{id}', 'AnggotaCuController@update');
            Route::post('/anggotaCu/updateCu/{id}', 'AnggotaCuController@updateCu');
            Route::post('/anggotaCu/updatePindahTp/{id}', 'AnggotaCuController@updatePindahTp');
            Route::post('/anggotaCu/updateKeluar/{id}', 'AnggotaCuController@updateKeluar');
            Route::post('/anggotaCu/updateBatalKeluar/{id}', 'AnggotaCuController@updateBatalKeluar');
            Route::post('/anggotaCu/updateNik/{id}', 'AnggotaCuController@updateNik');
            Route::post('/anggotaCu/restore/{id}', 'AnggotaCuController@restore');
            Route::post('/anggotaCu/updateProduk/{id}', 'AnggotaProdukCuController@update');
        });
        Route::group(['middleware' => ['permission:destroy_anggota_cu']], function () {
            Route::delete('/anggotaCu/{id}/cu/{cu}', 'AnggotaCuController@destroy');
            Route::delete('/anggotaCuCu/{id}', 'AnggotaCuController@destroyCu');
            Route::delete('/anggotaProdukCu/{id}', 'AnggotaProdukCuController@destroy');
        });
        Route::group(['middleware' => ['permission:upload_anggota_cu']], function () {
            Route::post('/anggotaCu/uploadExcel', 'AnggotaCuController@uploadExcel');
            Route::post('/anggotaCu/uploadExcelProduk', 'AnggotaCuController@uploadExcelProduk');
            Route::get('/anggotaCuDraft/index/{cu}/{tp}', 'AnggotaCuDraftController@index');
            Route::post('/anggotaCuDraft/store/{id}', 'AnggotaCuDraftController@store');
            Route::post('/anggotaCuDraft/storeAll/{cu}', 'AnggotaCuDraftController@storeAll');
            Route::get('/anggotaCuDraft/edit/{id}', 'AnggotaCuDraftController@edit');
            Route::post('/anggotaCuDraft/update/{id}', 'AnggotaCuDraftController@update');
            Route::delete('/anggotaCuDraft/destroy/{id}', 'AnggotaCuDraftController@destroy');
            Route::delete('/anggotaCuDraft/destroyAll/{cu}', 'AnggotaCuDraftController@destroyAll');
            Route::get('/anggotaCuDraft/count/{cu}/{tp}', 'AnggotaCuDraftController@count');
            Route::get('/anggotaProdukCuDraft/index/{cu}', 'AnggotaProdukCuDraftController@index');
            Route::post('/anggotaProdukCuDraft/store/{id}', 'AnggotaProdukCuDraftController@store');
            Route::post('/anggotaProdukCuDraft/storeAll/{cu}', 'AnggotaProdukCuDraftController@storeAll');
            Route::get('/anggotaProdukCuDraft/edit/{id}', 'AnggotaProdukCuDraftController@edit');
            Route::post('/anggotaProdukCuDraft/update/{id}', 'AnggotaProdukCuDraftController@update');
            Route::delete('/anggotaProdukCuDraft/destroy/{id}', 'AnggotaProdukCuDraftController@destroy');
            Route::delete('/anggotaProdukCuDraft/destroyAll/{cu}', 'AnggotaProdukCuDraftController@destroyAll');
            Route::get('/anggotaProdukCuDraft/count/{cu}', 'AnggotaProdukCuDraftController@count');
        });

        // jalinan klaim
        Route::get('/jalinanKlaim/count', 'JalinanKlaimController@count');
        Route::get('/jalinanKlaim/history', 'JalinanKlaimController@history');
        Route::get('/jalinanKlaim/cekData/{id}', 'JalinanKlaimController@cekData');
        Route::get('/jalinanKlaim/getKlaim/{id}', 'JalinanKlaimController@getKlaim');
        Route::get('/jalinanKlaim/getVerifikator/{verifikator_pengurus}/{verifikator_pengawas}/{verifikator_manajemen}', 'JalinanKlaimController@getVerifikator');
        Route::post('/jalinanKlaim/updateVerifikasi/{id}', 'JalinanKlaimController@updateVerifikasi');
        Route::get('/jalinanKlaim/getPencairan', 'JalinanKlaimController@getPencairan');
        Route::get('/jalinanKlaim/getStatus/{status_klaim}', 'JalinanKlaimController@getStatus');
        Route::get('/jalinanKlaim/getHistory/{id}', 'JalinanKlaimController@getHistory');
        Route::get('/jalinanKlaim/getDuplicate/{name}/tanggal/{tanggal_lahir}/tipe/{tipe}', 'JalinanKlaimController@getDuplicate');
        Route::get('/jalinanKlaim/getKlaimLama/{nik}/cu/{cu}', 'JalinanKlaimController@getKlaimLama');
        Route::get('/jalinanKlaim/edit/{nik}/cu/{cu}/tipe/{tipe}', 'JalinanKlaimController@edit');
        Route::group(['middleware' => ['permission:index_jalinan_klaim']], function () {
            Route::get('/jalinanKlaim/status/{status}/{awal}/{akhir}', 'JalinanKlaimController@index');
            Route::get('/jalinanKlaim/indexCu/{cu}/tp/{tp}/status/{status}/{awal}/{akhir}', 'JalinanKlaimController@indexCu');
            Route::get('/jalinanKlaim/cariData/{nik}', 'JalinanKlaimController@cariData');
            Route::get('/jalinanKlaim/cariDataId/{id}', 'JalinanKlaimController@cariDataId');
        });
        Route::group(['middleware' => ['permission:create_jalinan_klaim']], function () {
            Route::get('/jalinanKlaim/create', 'JalinanKlaimController@create');
            Route::post('/jalinanKlaim/store', 'JalinanKlaimController@store');
        });
        Route::group(['middleware' => ['permission:update_jalinan_klaim']], function () {
            Route::post('/jalinanKlaim/update/{id}', 'JalinanKlaimController@update');
            Route::post('/jalinanKlaim/updateStatus/{id}', 'JalinanKlaimController@updateStatus');
            Route::post('/jalinanKlaim/updateNoSurat/{id}', 'JalinanKlaimController@updateNoSurat');
            Route::post('/jalinanKlaim/periksaKoreksi/{id}', 'JalinanKlaimController@periksaKoreksi');
            Route::post('/jalinanKlaim/updateSelesai/{id}', 'JalinanKlaimController@updateSelesai');
        });
        Route::group(['middleware' => ['permission:destroy_jalinan_klaim']], function () {
            Route::delete('/jalinanKlaim/{id}', 'JalinanKlaimController@destroy');
        });
        Route::group(['middleware' => ['permission:pencairan_jalinan_klaim']], function () {
            Route::get('/jalinanKlaim/indexCair/{tanggal_pencairan}', 'JalinanKlaimController@indexCair');
            Route::post('/jalinanKlaim/updateCair/{id}/{awal}/{akhir}', 'JalinanKlaimController@updateCair');
            Route::post('/jalinanKlaim/updateCairBatal/{id}/{awal}/{akhir}', 'JalinanKlaimController@updateCairBatal');
            Route::post('/jalinanKlaim/updateCairAll/{awal}/{akhir}', 'JalinanKlaimController@updateCairAll');
        });
        Route::group(['middleware' => ['permission:laporan_jalinan_klaim']], function () {
            Route::get('/jalinanKlaim/indexLaporanCu/{status}/{awal}/{akhir}', 'JalinanKlaimController@indexLaporanCu');
            Route::get('/jalinanKlaim/indexLaporanCuDetail/{cu}/{status}/{awal}/{akhir}', 'JalinanKlaimController@indexLaporanCuDetail');
            Route::get('/jalinanKlaim/indexLaporanPenyebab/{cu}/{status}/{awal}/{akhir}', 'JalinanKlaimController@indexLaporanPenyebab');
            Route::get('/jalinanKlaim/indexLaporanPenyebabDetail/{cu}/{status}/{kategori}/{awal}/{akhir}', 'JalinanKlaimController@indexLaporanPenyebabDetail');
            Route::get('/jalinanKlaim/indexLaporanUsia/{cu}/{status}/{awal}/{akhir}', 'JalinanKlaimController@indexLaporanUsia');
            Route::get('/jalinanKlaim/indexLaporanUsiaDetail/{cu}/{status}/{dari}/{ke}/{awal}/{akhir}', 'JalinanKlaimController@indexLaporanUsiaDetail');
            Route::get('/jalinanKlaim/indexLaporanLama/{cu}/{status}/{awal}/{akhir}', 'JalinanKlaimController@indexLaporanLama');
            Route::get('/jalinanKlaim/indexLaporanLamaDetail/{cu}/{status}/{dari}/{ke}/{awal}/{akhir}', 'JalinanKlaimController@indexLaporanLamaDetail');
        });

        //jalinan iuran
        Route::get('/jalinanIuran', 'JalinanIuranController@index');
        Route::get('/jalinanIuran/indexCu/{id}', 'JalinanIuranController@indexCu');
        Route::get('/jalinanIuran/indexAnggota/{id}/{cu}/{lokasi}', 'JalinanIuranController@indexAnggota');
        Route::get('/jalinanIuran/edit/{id}', 'JalinanIuranController@edit');
        Route::get('/jalinanIuran/create/{cu}/{bulan}/{tahun}', 'JalinanIuranController@create');
        Route::post('/jalinanIuran/store', 'JalinanIuranController@store');
        Route::post('/jalinanIuran/update/{id}', 'JalinanIuranController@update');
        Route::delete('/jalinanIuran/{id}', 'JalinanIuranController@destroy');
        // Route::group(['middleware' => ['permission:index_jalinan_iuran']], function () {
        //     Route::get('/jalinanIuran', 'JalinanIuranController@index');
        //     Route::get('/jalinanIuran/indexCu/{id}', 'JalinanIuranController@indexCu');
        //     Route::get('/jalinanIuran/indexAnggota/{id}/{cu}/{lokasi}', 'JalinanIuranController@indexAnggota');
        //     Route::get('/jalinanIuran/edit/{id}', 'JalinanIuranController@edit');
        // });
        // Route::group(['middleware' => ['permission:create_jalinan_iuran']], function () {
        //     Route::get('/jalinanIuran/create/{cu}/{bulan}/{tahun}', 'JalinanIuranController@create');
        //     Route::post('/jalinanIuran/store', 'JalinanIuranController@store');
        // });
        // Route::group(['middleware' => ['permission:update_jalinan_iuran']], function () {
        //     Route::post('/jalinanIuran/update/{id}', 'JalinanIuranController@update');
        // });
        // Route::group(['middleware' => ['permission:destroy_jalinan_iuran']], function () {
        //     Route::delete('/jalinanIuran/{id}', 'JalinanIuranController@destroy');
        // });

        //laporan gerakan
        Route::get('/laporanGerakan', 'LaporanGerakanController@index');
        Route::group(['middleware' => ['permission:create_laporan_cu']], function () {
            Route::get('/laporanGerakan/create', 'LaporanGerakanController@create');
            Route::post('/laporanGerakan/store', 'LaporanGerakanController@store');
        });
        Route::group(['middleware' => ['permission:update_laporan_cu']], function () {
            Route::get('/laporanGerakan/edit/{id}', 'LaporanGerakanController@edit');
            Route::post('/laporanGerakan/update/{id}', 'LaporanGerakanController@update');
        });
        Route::group(['middleware' => ['permission:destroy_laporan_cu']], function () {
            Route::delete('/laporanGerakan/{id}', 'LaporanGerakanController@destroy');
        });

        //laporan cu
        Route::get('/laporanCu/history', 'LaporanCuController@history');
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
        Route::get('/laporanTp/history', 'LaporanTpController@history');
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
            Route::get('/laporanTpDiskusi/get/{id}', 'LaporanTpDiskusiController@get');
            Route::post('/laporanTpDiskusi/store', 'LaporanTpDiskusiController@store');
            Route::post('/laporanTpDiskusi/update/{id}', 'LaporanTpDiskusiController@update');
            Route::delete('/laporanTpDiskusi/{id}', 'LaporanTpDiskusiController@destroy');
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

        //coa
        Route::get('/coa/history', 'CoaController@history');
        Route::group(['middleware' => ['permission:index_coa']], function () {
            Route::get('/coa', 'CoaController@index');
            Route::get('/coa/get', 'CoaController@get');
        });
        Route::group(['middleware' => ['permission:create_coa']], function () {
            Route::get('/coa/create', 'CoaController@create');
            Route::post('/coa/store', 'CoaController@store');
        });
        Route::group(['middleware' => ['permission:update_coa']], function () {
            Route::get('/coa/edit/{id}', 'CoaController@edit');
            Route::post('/coa/update/{id}', 'CoaController@update');
        });
        Route::group(['middleware' => ['permission:destroy_coa']], function () {
            Route::delete('/coa/{id}', 'CoaController@destroy');
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

        //pemilihan
        Route::group(['middleware' => ['permission:index_pemilihan']], function () {
            Route::get('/pemilihan', 'PemilihanController@index');
            Route::get('/pemilihan/indexCu/{id}', 'PemilihanController@indexCu');
            Route::get('/pemilihan/indexPemilihan', 'PemilihanController@indexPemilihan');
            Route::get('/pemilihan/indexPemilihanCu/{id}', 'PemilihanController@indexPemilihanCu');
            Route::get('/pemilihan/indexDataSuara/{id}', 'PemilihanController@indexDataSuara');
            Route::get('/pemilihan/indexUser/{id}', 'PemilihanController@indexUser');
            Route::get('/pemilihan/checkUser/{pemilihan_id}', 'PemilihanController@checkUser');
            Route::get('/pemilihan/edit/{id}', 'PemilihanController@edit');
            Route::post('/pemilihan/storeSuara', 'PemilihanController@storeSuara');
            Route::post('/pemilihan/updateSuara/{id}', 'PemilihanController@updateSuara');
            Route::delete('/pemilihan/destroySuara/{id}', 'PemilihanController@destroySuara');
            Route::post('/pemilihan/uploadSuara/{id}', 'PemilihanController@uploadSuara');
        });
        Route::group(['middleware' => ['permission:create_pemilihan']], function () {
            Route::get('/pemilihan/create', 'PemilihanController@create');
            Route::post('/pemilihan/store', 'PemilihanController@store');
        });
        Route::group(['middleware' => ['permission:update_pemilihan']], function () {
            Route::get('/pemilihan/updateStatus/{id}/{cu}', 'PemilihanController@updateStatus');
        });
        Route::group(['middleware' => ['permission:destroy_pemilihan']], function () {
            Route::delete('/pemilihan/{id}', 'PemilihanController@destroy');
        });

        //voting
        Route::group(['middleware' => ['permission:index_voting']], function () {
            Route::get('/voting', 'VotingController@index');
            Route::get('/voting/indexCu/{id}', 'VotingController@indexCu');
            Route::get('/voting/indexVoting', 'VotingController@indexVoting');
            Route::get('/voting/indexVotingCu/{id}', 'VotingController@indexVotingCu');
            Route::get('/voting/indexDataSuara/{id}', 'VotingController@indexDataSuara');
            Route::get('/voting/indexDataTanggapan/{id}', 'VotingController@indexDataTanggapan');
            Route::get('/voting/indexUser/{id}', 'VotingController@indexUser');
            Route::get('/voting/checkUser/{voting_id}', 'VotingController@checkUser');
            Route::get('/voting/edit/{id}', 'VotingController@edit');
            Route::post('/voting/storeSuara', 'VotingController@storeSuara');
            Route::post('/voting/updateSuara/{id}', 'VotingController@updateSuara');
            Route::delete('/voting/destroySuara/{id}', 'VotingController@destroySuara');
            Route::post('/voting/uploadSuara/{id}', 'VotingController@uploadSuara');
        });
        Route::group(['middleware' => ['permission:create_voting']], function () {
            Route::get('/voting/create', 'VotingController@create');
            Route::post('/voting/store', 'VotingController@store');
        });
        Route::group(['middleware' => ['permission:update_voting']], function () {
            Route::get('/voting/updateStatus/{id}/{cu}', 'VotingController@updateStatus');
            Route::post('/voting/updateSuaraCu', 'VotingController@updateSuaraCu');
        });
        Route::group(['middleware' => ['permission:destroy_voting']], function () {
            Route::delete('/voting/{id}', 'VotingController@destroy');
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

        //pekerjaan
        Route::get('/pekerjaan', 'PekerjaanController@index');
        Route::get('/pekerjaan/get', 'PekerjaanController@get');
        Route::get('/pekerjaan/create', 'PekerjaanController@create');
        Route::get('/pekerjaan/edit/{id}', 'PekerjaanController@edit');
        Route::post('/pekerjaan/store', 'PekerjaanController@store');
        Route::post('/pekerjaan/update/{id}', 'PekerjaanController@update');
        Route::delete('/pekerjaan/{id}', 'PekerjaanController@destroy');

        //suku
        Route::get('/suku', 'SukuController@index');
        Route::get('/suku/get', 'SukuController@get');
        Route::get('/suku/create', 'SukuController@create');
        Route::get('/suku/edit/{id}', 'SukuController@edit');
        Route::post('/suku/store', 'SukuController@store');
        Route::post('/suku/update/{id}', 'SukuController@update');
        Route::delete('/suku/{id}', 'SukuController@destroy');

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
        Route::get('download/{filename}', 'SystemController@download_file');
        Route::get('download_folder/{filename}/{foldername}', 'SystemController@download_file_folder');
        Route::get('countOrganisasi', 'SystemController@countOrganisasi');

        // notification
        Route::get('/notification/get', 'NotificationController@get');
        Route::get('/notification/getAll', 'NotificationController@getAll');
        Route::get('/notification/markRead/{id}', 'NotificationController@markRead');
        Route::get('/notification/markAllRead', 'NotificationController@markAllRead');

        //file upload
        Route::post('/fileUpload/store', 'FileUploadController@store');
        Route::delete('/fileUpload/destroy/{id}', 'FileUploadController@destroy');
        Route::get('/fileUpload/index/{id_cu}/{id_user}', 'FileUploadController@index');

        //import csv
        Route::get('/anggotaCuImportEscete/index/{id_cu}', 'AnggotaCuEsceteController@index');
        Route::post('/anggotaCuImportEscete/draft/{id_cu}/{id_user}', 'AnggotaCuEsceteController@uploadDraft');
        Route::post('/anggotaCuImportEscete/simpandraft/{id_cu}', 'AnggotaCuEsceteController@store');
    });
});
