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

Route::get('/permissionTest', function () {
    // $user = App\User::find(1);
    // $user->assignRole('cu-full');

    // $role = $user->getAllPermissions();

    // $role = Spatie\Permission\Models\Role::findOrFail(2);

    $user = App\User::find(8);
    $roles = $user->getRoleNames();
    $userdata = $user->combine($roles);
    return response()
        ->json([
            'model' => $user
        ]);
});


