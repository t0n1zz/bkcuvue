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
use App\Http\Controllers\PublicController;
use App\Http\Controllers\PublicCuController;
use Illuminate\Support\Facades\Route;

Route::middleware('throttle:60,10')->group(function () {
    // BKCU
    $appRoutes = function () {
        // home
        Route::get('/', [PublicController::class, 'index'])->name('home');

        // tentang kami
        Route::get('/profile', [PublicController::class, 'profile'])->name('profile');

        // artikel
        Route::get('/artikel', [PublicController::class, 'artikel'])->name('artikel');
        Route::get('/artikel/cari', [PublicController::class, 'artikelCari'])->name('artikel.cari');
        Route::get('/artikel/lihat/{slug}', [PublicController::class, 'artikelLihat'])->name('artikel.lihat');
        Route::get('/artikel/kategori/{slug}', [PublicController::class, 'artikelKategori'])->name('artikel.kategori');
        Route::get('/artikel/penulis/{slug}', [PublicController::class, 'artikelPenulis'])->name('artikel.penulis');

        // cu
        Route::get('/cu', [PublicController::class, 'cu'])->name('cu');

        // kegiatan
        Route::get('/kegiatan/diklat/{periode}', [PublicController::class, 'diklat'])->name('diklat');
        Route::get('/kegiatan/diklat/lihat/{slug}', [PublicController::class, 'diklatLihat'])->name('diklat.lihat');

        // dokumen
        Route::get('dokumens', [PublicController::class, 'dokumen'])->name('dokumens');
        Route::get('downloads/{filename}', [PublicController::class, 'download_file'])->name('files');

        // panduan
        Route::get('panduan', [PublicController::class, 'panduan'])->name('panduan');
    };

    Route::domain('bkcuvue.test')->group($appRoutes);

    // cu
    $appSubRoutes = function () {
        // home
        Route::get('/', [PublicCuController::class, 'index'])->name('home.cu');

        // artikel
        Route::get('/artikel', [PublicCuController::class, 'artikel'])->name('artikel.cu');
        Route::get('/artikel/cari', [PublicCuController::class, 'artikelCari'])->name('artikel.cari.cu');
        Route::get('/artikel/lihat/{slug}', [PublicCuController::class, 'artikelLihat'])->name('artikel.lihat.cu');
        Route::get('/artikel/kategori/{slug}', [PublicCuController::class, 'artikelKategori'])->name('artikel.kategori.cu');
        Route::get('/artikel/penulis/{slug}', [PublicCuController::class, 'artikelPenulis'])->name('artikel.penulis.cu');
        
        // tp
        Route::get('/tp', [PublicCuController::class, 'tp'])->name('tp');

        // produk
        Route::get('/produk', [PublicCuController::class, 'produk'])->name('produk');

        // dokumen
        Route::get('dokumen', [PublicCuController::class, 'dokumen'])->name('dokumen');
        Route::get('download/{filename}', [PublicCuController::class, 'download_file'])->name('file');
    };

    Route::domain('{cu}.bkcuvue.test')->group($appSubRoutes);

    // admins
    Route::get('/admins/{vue?}', [PublicController::class, 'admins'])->where('vue', '^(?!.*api).*$[\/\w\.-]*');

    // test route
    Route::get('/testroute', [PublicController::class, 'testroute']);
});
