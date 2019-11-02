<?php
namespace App\Http\Controllers;

use App\Pekerjaan;
use Illuminate\Http\Request;

class PekerjaanController extends Controller{

	protected $message = 'Provinsi';

	public function index()
	{
    	$table_data = Pekerjaan::filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function get()
	{
		$table_data = Pekerjaan::orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }

	public function create()
	{
		return response()
			->json([
					'form' => Pekerjaan::initialize(),
					'rules' => Pekerjaan::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Pekerjaan::$rules);

		$name = $request->name;


		$kelas = Pekerjaan::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = Pekerjaan::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Pekerjaan::$rules);

		$name = $request->name;

		$kelas = Pekerjaan::findOrFail($id);

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
		$kelas = Pekerjaan::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}
}