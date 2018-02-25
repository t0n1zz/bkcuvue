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
    	$table_data = User::with('CU','pus')->select('id','id_cu','id_pus','name','username','gambar','status','created_at')->filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
    }

    public function updateStatus($id)
	{
		$kelas = User::findOrFail($id);

		if($kelas->status == 1){
			$kelas->status = 0;
			$message = "User berhasil dinon-aktifkan";
		}else{
			$kelas->status = 1;
			$message = "User berhasil diaktifkan";
		}

		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => $message
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
