<?php
namespace App\Http\Controllers;

use DB;
use App\DokumenKategori;
use Illuminate\Http\Request;

class DokumenKategoriController extends Controller{


	public function index()
	{
			DB::statement(DB::raw('set @cnt:=0'));

    	$table_data = DokumenKategori::with('Cu')->withCount('hasDokumen')->advancedFilter();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function get()
	{
		$table_data = DokumenKategori::where('id','!=',1)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }
  
  public function indexCu($id)
	{
		$table_data = DokumenKategori::with('Cu')->withCount('hasDokumen')->where('id_cu',$id)->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function getCu($id)
	{
		$table_data = DokumenKategori::where('id_cu','=',$id)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => DokumenKategori::initialize(),
					'rules' => DokumenKategori::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,DokumenKategori::$rules);

		$name = $request->name;


		$kelas = DokumenKategori::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Kategori ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = DokumenKategori::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,DokumenKategori::$rules);

		$name = $request->name;

		$kelas = DokumenKategori::findOrFail($id);

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
		$kelas = DokumenKategori::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Kategori ' .$name. 'berhasil dihapus'
			]);
	}
}