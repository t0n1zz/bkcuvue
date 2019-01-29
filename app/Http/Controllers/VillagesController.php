<?php
namespace App\Http\Controllers;

use App\Region\Villages;
use Illuminate\Http\Request;

class VillagesController extends Controller{

	protected $message = 'Desa';

	public function index()
	{
    	$table_data = Villages::filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexAll()
	{
		$table_data = Villages::orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexDistricts($id)
	{
		$table_data = Villages::where('district_id',$id)->filterPaginateOrder();

		return response()
			->json([
				'model' => $table_data
			]);
	}
	
	public function getDistricts($id)
	{
		$table_data = Villages::where('district_id',$id)->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Villages::initialize(),
					'rules' => Villages::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Villages::$rules);

		$name = $request->name;


		$kelas = Villages::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = Villages::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Villages::$rules);

		$name = $request->name;

		$kelas = Villages::findOrFail($id);

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
		$kelas = Villages::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}
}