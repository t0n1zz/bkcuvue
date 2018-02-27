<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RoleController extends Controller{

	public function index()
	{
    	$table_data = Role::filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexAll()
	{
		$table_data = Role::get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexTipe($tipe)
	{
		$table_data = Role::where('tipe',$tipe)->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPermission($id)
	{
		$kelas = Role::findOrFail($id);
		$table_data = $kelas->permissions()->pluck('name');

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Role::initialize(),
					'rules' => Role::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Role::$rules);

		$name = $request->name;
		
		$kelas = Role::create($request);

		return response()
			->json([
				'saved' => true,
				'message' => 'Role ' .$name. ' berhasil ditambah'
			]);
	}

	public function show($id)
	{
		$kelas = Role::findOrFail($id);

		return response()
			->json([
				'model' => $kelas
			]);
	}

	public function edit($id)
	{
		$kelas = Role::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Role::$rules);

		$name = $request->name;

		$kelas = Role::findOrFail($id);	

		$kelas->update($request);

		return response()
			->json([
				'saved' => true,
				'message' => 'Role ' .$name. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = Role::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Role' .$name. 'berhasil dihapus'
			]);
	}

	
}
