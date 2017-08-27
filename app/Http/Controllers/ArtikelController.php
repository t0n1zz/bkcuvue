<?php
namespace App\Http\Controllers;

use App\Artikel;
use Illuminate\Http\Request;

class ArtikelController extends Controller{

	public function __construct()
	{
		// $this->middleware('auth');
	}

	public function index()
	{
		return response()
			->json([
				'model' => Artikel::with('Artikel_Kategori')->filterPaginateOrder()
			]);
	}

	public function create()
	{
		return response()
            ->json([
                'form' => Artikel::initialize(),
                'option' => []
            ]);
	}

	public function store(Request $request)
	{

	}

	public function show($id)
	{

	}

	public function edit($id)
	{

	}

	public function update(Request $request, $id)
	{

	}

	public function destroy($id)
	{

	}
}