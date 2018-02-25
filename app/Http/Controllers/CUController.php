<?php
namespace App\Http\Controllers;

use App\CU;
use Illuminate\Http\Request;

class CUController extends Controller{

	public function index()
	{
    	$table_data = CU::select('id','name','created_at')->filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexAll()
	{
		$table_data = CU::where('id','!=',0)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }
  
  public function indexPus($id)
	{
		$table_data = CU::where('id_pus','=',$id)->select('id','name')->orderby('name','asc')->get();

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