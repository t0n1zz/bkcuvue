<?php
namespace App\Http\Controllers;

use DB;
use App\Cu;
use App\Support\ImageProcessing;
use Illuminate\Http\Request;
use File;
use Image;

class CuController extends Controller{

	protected $imagepath = 'images/cu/';
	protected $width = 200;
	protected $height = 200;
	protected $message = "Cu";

	public function index()
	{
		$table_data = Cu::with('Villages','Districts','Regencies','Provinces')->select(
			'cu.*',
			DB::raw(
				'(SELECT name FROM villages WHERE cu.id_villages = villages.id) as villages_name,
				(SELECT name FROM districts WHERE cu.id_districts = districts.id) as districts_name,
				(SELECT name FROM regencies WHERE cu.id_regencies = regencies.id) as regencies_name,
				(SELECT name FROM provinces WHERE cu.id_provinces = provinces.id) as provinces_name'
			)
		)->withCount('hasTpCu')->filterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function get()
	{
		$table_data = Cu::where('id','!=',0)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }
  
  public function getPus($id)
	{
		$table_data = Cu::where('id_pus','=',$id)->select('id','no_ba','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Cu::initialize(),
					'rules' => Cu::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Cu::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = ImageProcessing::image_processing($this->imagepath,$this->width,$this->height,$request);
		else
			$fileName = '';

		$kelas = Cu::create($request->except('gambar') + [
			'gambar' => $fileName
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Cu ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = Cu::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, Cu::$rules);

		$name = $request->name;

		$kelas = Cu::findOrFail($id);

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
		$kelas = Cu::findOrFail($id);
		$name = $kelas->name;

		if(!empty($kelas->gambar)){
			File::delete($path . $kelas->gambar . '.jpg');
			File::delete($path . $kelas->gambar . 'n.jpg');
		}

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}
}