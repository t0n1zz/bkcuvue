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

Route::domain('bkcuvue.test')->group(function () {
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
Route::domain('{cu}.bkcuvue.test')->group(function () {
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

    // $user = App\User::find(1);
    // $user->assignRole('cu-full');

    // $role = $user->getAllPermissions();

    // $role = Spatie\Permission\Models\Role::findOrFail(2);

    // $user = App\User::find(21);
    // $user->assignRole('cu-test');
    // $rolename = $user->getRoleNames();
    // if($rolename[0] == 'cu-test'){
    //     echo $rolename;
    // }else{
    //     echo 'no role';
    // }
    // $user->givePermissionTo('index_artikel');
    // dd($user->getAllPermissions());
    // $roles = $user->getRoleNames();
    // $userdata = $user->combine($roles);

    // create permission
    // Spatie\Permission\Models\Permission::create(['guard_name' => 'api','name' => 'index_diklat_bkcu']);
    // Spatie\Permission\Models\Permission::create(['guard_name' => 'api','name' => 'create_diklat_bkcu']); 
    // Spatie\Permission\Models\Permission::create(['guard_name' => 'api','name' => 'upload_laporan_cu']);
    // Spatie\Permission\Models\Permission::create(['guard_name' => 'api','name' => 'upload_laporan_tp']);

    // give permission to role
    // $role =  Spatie\Permission\Models\Role::findByName('BKCU Akses Penuh');
    // $role->givePermissionTo([
    //     'index tp',
    //     'create tp',
    //     'update tp',
    //     'destroy tp']);

    // activity log
    // $activity = Spatie\Activitylog\Models\Activity::all()->last();
    // echo $activity->changes();

    // remove permission role
    // $role =  Spatie\Permission\Models\Role::findByName('BKCU Akses Penuh');
    // $role->revokePermissionTo('index cu');

    // $sub = App\LaporanCU::with('CU')->orderBy('periode','desc');    
    // $data = App\LaporanCU::with('CU')->FilterPaginateOrder();
    // $data = App\LaporanCU::with('cu')->selectRaw('max(periode) as max_periode, no_ba, ANY_VALUE(id), ANY_VALUE(l_biasa)')->groupBy('no_ba')->FilterPaginateOrder();

    // $data = DB::select("SELECT rh.no_ba, rh.periode FROM laporancu rh, (SELECT no_ba, MAX(periode) AS max_periode FROM laporancu WHERE periode < '2016-01-01'  GROUP BY no_ba) maxresult WHERE rh.no_ba = maxresult.no_ba AND rh.periode = maxresult.max_periode");
    
    // $periode = '2016-01-01';
    // $data = App\LaporanCU::with('CU','CU.Provinces')
    // ->leftjoin('cu','laporancu.no_ba','cu.no_ba')
    // ->leftjoin('provinces','cu.id_provinces','provinces.id')
    // ->FilterPaginateOrder();

    // ->join(DB::RAW("(SELECT no_ba, MAX(periode) AS max_periode FROM laporancu  GROUP BY no_ba) latest_report"),function($join){
    //     $join->on('laporancu.no_ba','=','latest_report.no_ba');
    //     $join->on('laporancu.periode','=','latest_report.max_periode');
    // })->addSelect(['*',DB::raw('
    //     (laporancu.l_biasa + laporancu.l_lbiasa) as total_anggota, (laporancu.piutang_beredar/laporancu.aset) as rasio_beredar,
    //     ((laporancu.piutang_lalai_1bulan + laporancu.piutang_lalai_12bulan)/laporancu.piutang_beredar) as rasio_lalai,
    //     (laporancu.piutang_beredar - (laporancu.piutang_lalai_1bulan + laporancu.piutang_lalai_12bulan)) as piutang_bersih'
    //     )])->FilterPaginateOrder();

    // $data = App\LaporanCU::with('CU','CU.Provinces')
    // ->leftjoin('cu','laporancu.no_ba','cu.no_ba')
    // ->leftjoin('provinces','cu.id_provinces','provinces.id')
    // ->take(10)->get();

    // $data = App\LaporanCU::join('cu','laporancu.no_ba','cu.no_ba')
    // ->join('provinces','cu.id_provinces','provinces.id')->take(10)->get();

    // dd($data);

    // ->join(DB::RAW("(SELECT no_ba, MAX(periode) AS max_periode FROM laporancu  GROUP BY no_ba) latest_report"),function($join){
    //     $join->on('laporancu.no_ba','=','latest_report.no_ba');
    //     $join->on('laporancu.periode','=','latest_report.max_periode');
    // })->addSelect([DB::raw('
    //     (laporancu.l_biasa + laporancu.l_lbiasa) as total_anggota, (laporancu.piutang_beredar/laporancu.aset) as rasio_beredar,
    //     ((laporancu.piutang_lalai_1bulan + laporancu.piutang_lalai_12bulan)/laporancu.piutang_beredar) as rasio_lalai,
    //     (laporancu.piutang_beredar - (laporancu.piutang_lalai_1bulan + laporancu.piutang_lalai_12bulan)) as piutang_bersih'
    //     )])->FilterPaginateOrder();

    // $data = App\Artikel::with(['ArtikelKategori' => function($query){
    //         $query->orderBy('created_at','asc');
    //     }])->select('id','id_artikel_kategori','name')->orderBy('name','asc')->get();

    // $data = App\Artikel::with('ArtikelKategori')->select('artikel.id_artikel_kategori', \DB::raw('(SELECT name FROM artikelKategori WHERE artikel.id_artikel_kategori = artikelKategori.id) as kategori_name'))->orderBy('kategori_name','desc')->get();

    // $table_data = App\LaporanCu::select('laporancu.*',
	// 		'cu.name as cu_name',
	// 		'provinces.name as provinces_name')
	// 		->leftjoin('cu','laporancu.no_ba','cu.no_ba')
	// 		->leftjoin('provinces','cu.id_provinces','provinces.id')
	// 		->join(DB::RAW('(SELECT no_ba, GROUP_CONCAT(periode ORDER BY periode DESC) grouped_periode FROM laporancu GROUP BY no_ba) latest_report'),function($join){
	// 				$join->on('laporancu.no_ba','=','latest_report.no_ba');
	// 				$join->whereBetween(DB::raw('FIND_IN_SET(`laporancu`.`periode`, `latest_report`.`grouped_periode`)'), [1, 2]);
	// 		})->FilterPaginateOrder();
			

		// App\salesreport::join(DB::RAW('(SELECT company_id, GROUP_CONCAT(periods ORDER BY periods DESC) grouped_periods FROM salesreport GROUP BY company_id ) latest_report'),function($join){
    //     $join->on('salesreport.company_id','=','latest_report.company_id');
    //     $join->whereBetween(DB::raw('FIND_IN_SET(`salesreport`.`periods`, `latest_report`.`grouped_periods`)'), [1, 2]);
    // })->addSelect([DB::raw('(row1.value - row2.value) as row_differences')])->get();

		// dd($table_data->reverse());	

		// $table_data_prev = collect([]);
		// foreach($table_data as $table_data_current){
		// 	$prev = App\LaporanCu::where('no_ba',$table_data_current->no_ba)
		// 		->where('periode','<',$table_data_current->periode)
		// 		->addSelect(['*',DB::raw('
		// 			(laporancu.l_biasa + laporancu.l_lbiasa) as total_anggota, (laporancu.piutang_beredar/laporancu.aset) as rasio_beredar,
		// 			((laporancu.piutang_lalai_1bulan + laporancu.piutang_lalai_12bulan)/laporancu.piutang_beredar) as rasio_lalai,
		// 			(laporancu.piutang_beredar - (laporancu.piutang_lalai_1bulan + laporancu.piutang_lalai_12bulan)) as piutang_bersih'
		// 		)])->orderBy('periode','DESC')->first();
		// 	$table_data_prev->push($table_data);	
		// }

		// $table_data = App\LaporanCu::select('periode')->withCount('hasCU')->orderBy('periode','DESC')->get();
    
    // $table_data = DB::table('artikel')->select(DB::RAW('* from INFORMATION_SCHEMA.COLUMNS'))->where('COLUMN')  

    // return response()
    // ->json([
    //     'model' => $table_data
    // ]);

});


