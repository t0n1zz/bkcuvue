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
    // Spatie\Permission\Models\Permission::create(['name' => 'index cu']);
    // Spatie\Permission\Models\Permission::create(['name' => 'create cu']); 
    // Spatie\Permission\Models\Permission::create(['name' => 'update cu']);
    // Spatie\Permission\Models\Permission::create(['name' => 'destroy cu']);

    // give permission to role
    // $role =  Spatie\Permission\Models\Role::findByName('BKCU Akses Penuh');
    // $role->givePermissionTo([
    //     'aktifkan user',
    //     'reset password',
    //     'terbitkan artikel',
    //     'utamakan artikel']);

    // activity log
    // $activity = Spatie\Activitylog\Models\Activity::all()->last();
    // echo $activity->changes();

    // remove permission role
    // $role =  Spatie\Permission\Models\Role::findByName('BKCU Akses Penuh');
    // $role->revokePermissionTo('index cu');

    // $sub = App\LaporanCU::with('CU')->orderBy('periode','desc');    
    // $data = App\LaporanCU::with('CU')->FilterPaginateOrder();
    // $data = App\LaporanCU::with('cu')->selectRaw('max(periode) as max_periode, no_ba, ANY_VALUE(id), ANY_VALUE(l_biasa)')->groupBy('no_ba')->FilterPaginateOrder();
    
    $periode = '2016-01-01';
    $data = App\LaporanCU::with('CU')->join(DB::RAW("(SELECT no_ba, MAX(periode) AS max_periode FROM laporancu WHERE periode <= '$periode' GROUP BY no_ba) latest_report"),function($join){
        $join->on('laporancu.no_ba','=','latest_report.no_ba');
        $join->on('laporancu.periode','=','latest_report.max_periode');
    })->FilterPaginateOrder();

    // $data = DB::select("SELECT rh.no_ba, rh.periode FROM laporancu rh, (SELECT no_ba, MAX(periode) AS max_periode FROM laporancu WHERE periode < '2016-01-01'  GROUP BY no_ba) maxresult WHERE rh.no_ba = maxresult.no_ba AND rh.periode = maxresult.max_periode");
    
    return response()
    ->json([
        'model' => $data
    ]);

});


