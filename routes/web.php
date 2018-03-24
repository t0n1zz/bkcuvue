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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/admins/{vue?}', function () {
    return view('admins');
})->where('vue', '^(?!.*api).*$[\/\w\.-]*');

Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout');

Route::get('/testroute', function () {

    // $user = App\User::find(1);
    // $user->assignRole('cu-full');

    // $role = $user->getAllPermissions();

    // $role = Spatie\Permission\Models\Role::findOrFail(2);

    // $user = App\User::find(8);
    // $roles = $user->getRoleNames();
    // $userdata = $user->combine($roles);

    // create permission
    // Spatie\Permission\Models\Permission::create(['name' => 'index laporanCu']);
    // Spatie\Permission\Models\Permission::create(['name' => 'create laporanCu']); 
    // Spatie\Permission\Models\Permission::create(['name' => 'update laporanCu']);
    // Spatie\Permission\Models\Permission::create(['name' => 'destroy laporanCu']);

    // give permission to role
    // $role =  Spatie\Permission\Models\Role::findByName('BKCU Akses Penuh');
    // $role->givePermissionTo([
    //     'index laporancu',
    //     'create laporancu',
    //     'update laporancu',
    //     'destroy laporancu']);

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
		// 	'cu.name as cu_name',
		// 	'provinces.name as provinces_name')
		// 	->leftjoin('cu','laporancu.no_ba','cu.no_ba')
		// 	->leftjoin('provinces','cu.id_provinces','provinces.id')
		// 	->join(DB::RAW('(SELECT no_ba, GROUP_CONCAT(periode ORDER BY periode DESC) grouped_periode FROM laporancu GROUP BY no_ba) latest_report'),function($join){
		// 			$join->on('laporancu.no_ba','=','latest_report.no_ba');
		// 			$join->whereBetween(DB::raw('FIND_IN_SET(`laporancu`.`periode`, `latest_report`.`grouped_periode`)'), [1, 2]);
		// 	})->addSelect([DB::raw('
		// 		(laporancu.l_biasa + laporancu.l_lbiasa) as total_anggota, (laporancu.piutang_beredar/laporancu.aset) as rasio_beredar,
		// 		((laporancu.piutang_lalai_1bulan + laporancu.piutang_lalai_12bulan)/laporancu.piutang_beredar) as rasio_lalai,
		// 		(laporancu.piutang_beredar - (laporancu.piutang_lalai_1bulan + laporancu.piutang_lalai_12bulan)) as piutang_bersih'
		// 	)])->FilterPaginateOrder();

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

		$table_data = App\LaporanCu::select('periode')->distinct()->orderBy('periode','DESC')->get();
    
    return response()
    ->json([
        'model' => $table_data
    ]);

});


