<?php
namespace App\Http\Controllers;

use DB;
use App\MitraOrang;
use App\Support\Helper;
use Illuminate\Http\Request;
use File;
use Image;

class MitraOrangController extends Controller{

	protected $imagepath = 'images/mitra_orang/';
	protected $width = 200;
	protected $height = 200;
	protected $message = "Mitra Perserorangan";

	public function index()
	{
		$table_data = MitraOrang::with('Villages','Districts','Regencies','Provinces')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => MitraOrang::initialize(),
					'rules' => MitraOrang::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,MitraOrang::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request,'');
		else
			$fileName = '';

		$kelas = MitraOrang::create($request->except('gambar') + [
			'gambar' => $fileName
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = MitraOrang::with('Villages','Districts','Regencies','Provinces')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, MitraOrang::$rules);

		$name = $request->name;

		$kelas = MitraOrang::findOrFail($id);

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request,$kelas);
		else
			$fileName = '';

		$kelas->update($request->except('gambar') + [
			'gambar' => $fileName
		]);	

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = MitraOrang::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function count()
	{
			$table_data = MitraOrang::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}
}