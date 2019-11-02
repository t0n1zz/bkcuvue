<?php
namespace App\Http\Controllers;

use App\Suku;
use Illuminate\Http\Request;

class SukuController extends Controller{

	protected $message = 'Provinsi';

	public function index()
	{
    	$table_data = Suku::filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function get()
	{
		$table_data = Suku::orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }

	public function create()
	{
		return response()
			->json([
					'form' => Suku::initialize(),
					'rules' => Suku::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Suku::$rules);

		$name = $request->name;


		$kelas = Suku::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = Suku::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Suku::$rules);

		$name = $request->name;

		$kelas = Suku::findOrFail($id);

		$kelas->update($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah',
				'id' => $kelas->id
			]);	
	}

	public function destroy($id)
	{
		$kelas = Suku::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}
}