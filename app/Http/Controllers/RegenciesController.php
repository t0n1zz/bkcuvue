<?php
namespace App\Http\Controllers;

use App\Regencies;
use Illuminate\Http\Request;

class RegenciesController extends Controller{

	protected $message = 'Kabupaten';

	public function index()
	{
    	$table_data = Regencies::filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function get()
	{
		$table_data = Regencies::orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexProvinces($id)
	{
		$table_data = Regencies::where('province_id',$id)->filterPaginateOrder();

		return response()
			->json([
				'model' => $table_data
			]);
	}
	
	public function getProvinces($id)
	{
		$table_data = Regencies::where('province_id',$id)->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Regencies::initialize(),
					'rules' => Regencies::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Regencies::$rules);

		$name = $request->name;


		$kelas = Regencies::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = Regencies::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Regencies::$rules);

		$name = $request->name;

		$kelas = Regencies::findOrFail($id);

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
		$kelas = Regencies::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}
}