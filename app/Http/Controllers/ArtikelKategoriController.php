<?php
namespace App\Http\Controllers;

use App\Artikel_Kategori;
use Illuminate\Http\Request;

class ArtikelKategoriController extends Controller{

	public function index()
	{
    	$table_data = Artikel_Kategori::select('id','name','created_at')->filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexAll()
	{
		$table_data = Artikel_Kategori::where('id','!=',1)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexCU($id)
	{
		$table_data = Artikel_Kategori::where('id_cu','=',$id)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function store(Request $request)
	{
		$kelas = Artikel_Kategori::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Kategori artikel berhasil ditambah',
				'id' => $kelas->id
			]);	
	}
}