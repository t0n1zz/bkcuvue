<?php
namespace App\Http\Controllers;

use DB;
use App\SuratKategori;
use Illuminate\Http\Request;

class SuratKategoriController extends Controller{


	public function index()
	{
    	$table_data = SuratKategori::with('kode')->withCount('hasSurat')->advancedFilter();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function get()
	{
		$table_data = SuratKategori::where('id','!=',1)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }
  
  public function indexCu($id)
	{
		$table_data = SuratKategori::with('kode')->withCount('hasSurat')->where('id_cu',$id)->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function getCu($id)
	{
		$table_data = SuratKategori::where('id_cu','=',$id)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => SuratKategori::initialize(),
					'rules' => SuratKategori::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,SuratKategori::$rules);

		$name = $request->name;


		$kelas = SuratKategori::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Kategori ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = SuratKategori::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,SuratKategori::$rules);

		$name = $request->name;

		$kelas = SuratKategori::findOrFail($id);

		$kelas->update($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Kategori ' .$name. ' berhasil diubah',
				'id' => $kelas->id
			]);	
	}

	public function destroy($id)
	{
		$kelas = SuratKategori::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Kategori ' .$name. 'berhasil dihapus'
			]);
	}
}