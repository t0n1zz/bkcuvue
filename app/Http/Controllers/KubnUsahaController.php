<?php
namespace App\Http\Controllers;

use DB;
use App\KubnUsaha;
use Illuminate\Http\Request;

class KubnUsahaController extends Controller{


	public function index()
	{
    	$table_data = KubnUsaha::withCount('hasKubn')->advancedFilter();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function get()
	{
		$table_data = KubnUsaha::select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }
  
	public function create()
	{
		return response()
			->json([
					'form' => KubnUsaha::initialize(),
					'rules' => KubnUsaha::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,KubnUsaha::$rules);

		$name = $request->name;

		$kelas = KubnUsaha::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'KubnUsaha ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = KubnUsaha::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,KubnUsaha::$rules);

		$name = $request->name;

		$kelas = KubnUsaha::findOrFail($id);

		$kelas->update($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'KubnUsaha ' .$name. ' berhasil diubah',
				'id' => $kelas->id
			]);	
	}

	public function destroy($id)
	{
		$kelas = KubnUsaha::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'KubnUsaha ' .$name. 'berhasil dihapus'
			]);
	}
}