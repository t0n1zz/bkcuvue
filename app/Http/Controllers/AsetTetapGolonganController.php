<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Image;
use Validator;
use App\AsetTetapGolongan;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class AsetTetapGolonganController extends Controller{

	protected $message = "Golongan Aset Tetap";

	public function index()
	{
		$table_data = AsetTetapGolongan::advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function get()
	{
		$table_data = AsetTetapGolongan::select('id','kode','name')->orderby('name','asc')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => AsetTetapGolongan::initialize(),
					'rules' => AsetTetapGolongan::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,AsetTetapGolongan::$rules);

		$name = $request->name;

		$kelas = AsetTetapGolongan::create($request->all());
			
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}


	public function edit($id)
	{
		$kelas = AsetTetapGolongan::findOrFail($id);

		return response()
			->json([
					'form' => $kelas,
					'option' => []
			]);
	}

	public function update(Request $request, $id)
	{
		$rules = AsetTetapGolongan::$rules;
		$rules['kode'] = $rules['kode'] . ',id,' . $id;
		$validationCertificate  = Validator::make($request->all(), $rules); 

		$name = $request->name;

		$kelas = AsetTetapGolongan::findOrFail($id);
		$kelas->update($request->all());	

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}


	public function destroy($id)
	{
		$kelas = AsetTetapGolongan::findOrFail($id);

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
			$table_data = AsetTetapGolongan::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}
}