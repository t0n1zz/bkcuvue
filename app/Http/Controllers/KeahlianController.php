<?php
namespace App\Http\Controllers;

use DB;
use App\Keahlian;
use Illuminate\Http\Request;

class KeahlianController extends Controller{


	public function index()
	{
    	$table_data = Keahlian::withCount('hasMentor')->advancedFilter();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function get()
	{
		$table_data = Keahlian::select('id','name','deskripsi')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }
  
	public function create()
	{
		return response()
			->json([
					'form' => Keahlian::initialize(),
					'rules' => Keahlian::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Keahlian::$rules);

		$name = $request->name;

		$kelas = Keahlian::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Keahlian ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = Keahlian::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Keahlian::$rules);

		$name = $request->name;

		$kelas = Keahlian::findOrFail($id);

		$kelas->update($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Keahlian ' .$name. ' berhasil diubah',
				'id' => $kelas->id
			]);	
	}

	public function destroy($id)
	{
		$kelas = Keahlian::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Keahlian ' .$name. 'berhasil dihapus'
			]);
	}
}