<?php
namespace App\Http\Controllers;

use App\Artikel_Penulis;
use Illuminate\Http\Request;

class ArtikelPenulisController extends Controller{

	public function index()
	{
    	$table_data = Artikel_Penulis::select('id','name','created_at')->filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexAll()
	{
		$table_data = Artikel_Penulis::where('id','!=',1)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }
  
  public function indexCU($id)
	{
		$table_data = Artikel_Penulis::where('id_cu','=',$id)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function store(Request $request)
	{
		$kelas = Artikel_Penulis::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Penulis artikel berhasil ditambah',
				'id' => $kelas->id
			]);	
	}
}