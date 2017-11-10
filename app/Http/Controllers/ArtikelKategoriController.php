<?php
namespace App\Http\Controllers;

use App\Artikel_Kategori;
use Illuminate\Http\Request;

class ArtikelKategoriController extends Controller{

	public function get_artikel_kategori()
	{
		return response()
			->json([
				'model' => Artikel_Kategori::where('id','!=',1)->select('id','nama')->orderby('nama','asc')->get()
			]);
	}

	public function store(Request $request)
	{
		$kelas = Artikel_Kategori::create($request->all());

		return response()
			->json([
				'saved' => true,
				'id' => $kelas->id
			]);	
	}
}