<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Image;
use Validator;
use App\AsetTetapJenis;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class AsetTetapJenisController extends Controller{

	protected $message = "Jenis Aset Tetap";

	public function index()
	{
		$table_data = AsetTetapJenis::advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function get()
	{
		$table_data = AsetTetapJenis::select('id','name')->orderby('name','asc')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => AsetTetapJenis::initialize(),
					'rules' => AsetTetapJenis::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,AsetTetapJenis::$rules);

		$name = $request->name;

		$kelas = AsetTetapJenis::create($request->all());
			
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}


	public function edit($id)
	{
		$kelas = AsetTetapJenis::findOrFail($id);

		return response()
			->json([
					'form' => $kelas,
					'option' => []
			]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, AsetTetapJenis::$rules);

		$name = $request->name;

		$kelas = AsetTetapJenis::findOrFail($id);
		$kelas->update($request->all());	

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}


	public function destroy($id)
	{
		$kelas = AsetTetapJenis::findOrFail($id);

		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. ' berhasil dihapus'
			]);
	}

	public function count()
	{
			$table_data = AsetTetapJenis::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}
}