<?php
namespace App\Http\Controllers;

use App\Provinces;
use Illuminate\Http\Request;

class ProvincesController extends Controller{

	protected $message = 'Provinsi';

	public function index()
	{
    	$table_data = Provinces::filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexAll()
	{
		$table_data = Provinces::orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }

	public function create()
	{
		return response()
			->json([
					'form' => Provinces::initialize(),
					'rules' => Provinces::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Provinces::$rules);

		$name = $request->name;


		$kelas = Provinces::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = Provinces::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Provinces::$rules);

		$name = $request->name;

		$kelas = Provinces::findOrFail($id);

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
		$kelas = Provinces::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}
}