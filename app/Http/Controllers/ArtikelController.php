<?php
namespace App\Http\Controllers;

use App\Artikel;
use Illuminate\Http\Request;

class ArtikelController extends Controller{

	protected $kelaspath = 'artikel';
	protected $imagepath = 'images/artikel';

	public function get_artikel_all()
	{
		$datas = Artikel::with('kategoriartikel')
                ->orderBy('judul','asc')
                ->get();

        return $datas;
	}

	public function get_artikel()
	{
		return response()
			->json([
				'model' => Artikel::with('kategoriartikel')->filterPaginateOrder()
			]);
	}
}