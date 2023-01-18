<?php

namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Image;
use Validator;
use App\AsetTetapLokasi;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class AsetTetapLokasiController extends Controller
{

	protected $message = "Lokasi Aset Tetap";

	public function index()
	{
		$table_data = AsetTetapLokasi::advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function get()
	{
		$table_data = AsetTetapLokasi::select('id', 'name')->orderby('name', 'asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
				'form' => AsetTetapLokasi::initialize(),
				'rules' => AsetTetapLokasi::$rules,
				'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request, AsetTetapLokasi::$rules);

		$name = $request->name;

		$kelas = AsetTetapLokasi::create($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => $this->message . ' ' . $name . ' berhasil ditambah',
				'id' => $kelas->id
			]);
	}


	public function edit($id)
	{
		$kelas = AsetTetapLokasi::findOrFail($id);

		return response()
			->json([
				'form' => $kelas,
				'option' => []
			]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, AsetTetapLokasi::$rules);

		$name = $request->name;

		$kelas = AsetTetapLokasi::findOrFail($id);
		$kelas->update($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => $this->message . ' ' . $name . ' berhasil diubah'
			]);
	}


	public function destroy($id)
	{
		$kelas = AsetTetapLokasi::findOrFail($id);

		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message . ' ' . $name . ' berhasil dihapus'
			]);
	}

	public function count()
	{
		$table_data = AsetTetapLokasi::count();

		return response()
			->json([
				'model' => $table_data
			]);
	}
}