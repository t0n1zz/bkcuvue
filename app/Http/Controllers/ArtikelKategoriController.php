<?php
namespace App\Http\Controllers;

use DB;
use App\ArtikelKategori;
use Illuminate\Http\Request;

class ArtikelKategoriController extends Controller{


	public function index()
	{
			DB::statement(DB::raw('set @cnt:=0'));

    	$table_data = ArtikelKategori::with('Cu')->withCount('hasArtikel')->advancedFilter();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function get()
	{
		$table_data = ArtikelKategori::where('id','!=',1)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }
  
  public function indexCu($id)
	{
		$table_data = ArtikelKategori::with('Cu')->withCount('hasArtikel')->where('id_cu',$id)->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function getCu($id)
	{
		$table_data = ArtikelKategori::where('id_cu','=',$id)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => ArtikelKategori::initialize(),
					'rules' => ArtikelKategori::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,ArtikelKategori::$rules);

		$name = $request->name;


		$kelas = ArtikelKategori::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Kategori ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = ArtikelKategori::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,ArtikelKategori::$rules);

		$name = $request->name;

		$kelas = ArtikelKategori::findOrFail($id);

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
		$kelas = ArtikelKategori::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Kategori ' .$name. 'berhasil dihapus'
			]);
	}
}