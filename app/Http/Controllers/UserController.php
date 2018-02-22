<?php

namespace App\Http\Controllers;

use Auth;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    protected $imagepath = 'images/user/';

	public function index()
	{
    	$table_data = User::with('cu')->select('id','nama','username','gambar','created_at')->filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
    }
    
    function getUser(){
       $id = Auth::user()->getId();

       return response()
        ->json([
            $id
        ]);
    }

    function userData(){
        $id = Auth::user()->getId();

        $kelas = User::with('pus','cu')->findOrFail($id);

        return response()
            ->json([
                'model' => $kelas
            ]);
    }
}
