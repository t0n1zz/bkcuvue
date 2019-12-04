<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Image;
use Validator;
use App\AsetTetapGolongan;
use App\AsetTetapKelompok;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class AsetTetapKelompokController extends Controller{

	protected $message = "Kelompok Aset Tetap";

	public function index()
	{
		$table_data = AsetTetapKelompok::with('golongan')->advancedFilter();
		
		return response()
		->json([
			'model' => $table_data
		]); 
	}

	public function get($id)
	{
		$table_data = AsetTetapKelompok::where('aset_tetap_golongan_id',$id)->select('id','kode','aset_tetap_golongan_id','name')->orderby('name','asc')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => AsetTetapKelompok::initialize(),
					'rules' => AsetTetapKelompok::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		if($request->aset_tetap_golongan_id){
			$table_data = AsetTetapGolongan::where('id',$request->aset_tetap_golongan_id)->select('id','kode')->first();
			$kode_golongan = $table_data->kode;
			$kode_unik = $table_data->kode . $request->kode;
			$request->request->add(['kode_unik' => $kode_unik]);
		}

		$this->validate($request,AsetTetapKelompok::$rules);

		$name = $request->name;

		$kelas = AsetTetapKelompok::create($request->all());
			
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}


	public function edit($id)
	{
		$kelas = AsetTetapKelompok::findOrFail($id);

		return response()
			->json([
					'form' => $kelas,
					'option' => []
			]);
	}

	public function update(Request $request, $id)
	{
		if($request->aset_tetap_golongan_id){
			$table_data = AsetTetapGolongan::where('id',$request->aset_tetap_golongan_id)->select('id','kode')->first();
			$kode_golongan = $table_data->kode;
			$kode_unik = $table_data->kode . $request->kode;
			$request->request->add(['kode_unik' => $kode_unik]);
		}

		$rules = AsetTetapKelompok::$rules;
		$rules['kode_unik'] = $rules['kode_unik'] . ',id,' . $id;
		$validationCertificate  = Validator::make($request->all(), $rules); 

		$name = $request->name;

		$kelas = AsetTetapKelompok::findOrFail($id);
		$kelas->update($request->all());	

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}


	public function destroy($id)
	{
		$kelas = AsetTetapKelompok::findOrFail($id);

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
			$table_data = AsetTetapKelompok::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}
}