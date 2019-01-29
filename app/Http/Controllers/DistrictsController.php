<?php
namespace App\Http\Controllers;

use App\Region\Districts;
use Illuminate\Http\Request;

class DistrictsController extends Controller{

	protected $message = 'Kecamatan';

	public function index()
	{
    	$table_data = Districts::filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexAll()
	{
		$table_data = Districts::orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexRegencies($id)
	{
		$table_data = Districts::where('regency_id',$id)->filterPaginateOrder();

		return response()
			->json([
				'model' => $table_data
			]);
	}
	
	public function getRegencies($id)
	{
		$table_data = Districts::where('regency_id',$id)->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Districts::initialize(),
					'rules' => Districts::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Districts::$rules);

		$name = $request->name;


		$kelas = Districts::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = Districts::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Districts::$rules);

		$name = $request->name;

		$kelas = Districts::findOrFail($id);

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
		$kelas = Districts::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}
}