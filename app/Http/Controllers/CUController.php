<?php
namespace App\Http\Controllers;

use App\CU;
use App\Support\ImageProcessing;
use Illuminate\Http\Request;
use File;
use Image;

class CUController extends Controller{

	protected $imagepath = 'images/cu/';
	protected $width = 200;
	protected $height = 200;
	protected $message = "CU";

	public function index()
	{
		$table_data = CU::with('Villages','Districts','Regencies','Provinces')->filterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function get()
	{
		$table_data = CU::where('id','!=',0)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }
  
  public function getPus($id)
	{
		$table_data = CU::where('id_pus','=',$id)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => CU::initialize(),
					'rules' => CU::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,CU::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = ImageProcessing::image_processing($this->imagepath,$this->width,$this->height,$request);
		else
			$fileName = '';

		$kelas = CU::create($request->except('gambar') + [
			'gambar' => $fileName
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'CU ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = CU::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, CU::$rules);

		$name = $request->name;

		$kelas = CU::findOrFail($id);

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = ImageProcessing::image_processing($this->imagepath,$this->width,$this->height,$request,$kelas);
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
		$kelas = CU::findOrFail($id);
		$name = $kelas->name;

		if(!empty($kelas->gambar)){
			File::delete($path . $kelas->gambar . '.jpg');
			File::delete($path . $kelas->gambar . 'n.jpg');
		}

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'CU ' .$name. 'berhasil dihapus'
			]);
	}
}