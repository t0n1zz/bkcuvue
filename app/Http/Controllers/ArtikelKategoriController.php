<?php
namespace App\Http\Controllers;

use App\Artikel_Kategori;
use Illuminate\Http\Request;

class ArtikelKategoriController extends Controller{

	public function get_artikel_kategori()
	{
		return response()
			->json([
				'model' => Artikel_Kategori::get()
			]);
	}
}