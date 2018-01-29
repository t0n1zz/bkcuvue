<?php
namespace App\Http\Controllers;

use App\CU;
use Illuminate\Http\Request;

class CUController extends Controller{

	public function index()
	{
    	$table_data = CU::select('id','nama','created_at')->filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexAll()
	{
		$table_data = CU::where('id','!=',1)->select('id','nama')->orderby('nama','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function store(Request $request)
	{
		$kelas = CU::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'CU berhasil ditambah',
				'id' => $kelas->id
			]);	
	}
}