<?php
namespace App\Http\Controllers;

use App\Pus;
use Illuminate\Http\Request;

class PusController extends Controller{

	public function index()
	{
    	$table_data = Pus::select('id','name','created_at')->filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexAll()
	{
		$table_data = Pus::where('id','!=',0)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function store(Request $request)
	{
		$kelas = Pus::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Puskopdit berhasil ditambah',
				'id' => $kelas->id
			]);	
	}
}