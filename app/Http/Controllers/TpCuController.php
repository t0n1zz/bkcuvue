<?php
namespace App\Http\Controllers;

use DB;
use App\TpCu;
use App\Support\ImageProcessing;
use Illuminate\Http\Request;
use File;
use Image;

class TpCuController extends Controller{

	protected $imagepath = 'images/tp/';
	protected $width = 200;
	protected $height = 200;
	protected $message = "TP/KP";

	public function index()
	{
		$table_data = TpCu::with('CU','Villages','Districts','Regencies','Provinces')->select(
			'tpcu.*',
			DB::raw(
				'(SELECT name FROM cu WHERE tpcu.id_cu = cu.id) as cu_name,
				(SELECT name FROM villages WHERE tpcu.id_villages = villages.id) as villages_name,
				(SELECT name FROM districts WHERE tpcu.id_districts = districts.id) as districts_name,
				(SELECT name FROM regencies WHERE tpcu.id_regencies = regencies.id) as regencies_name,
				(SELECT name FROM provinces WHERE tpcu.id_provinces = provinces.id) as provinces_name'
			)
		)->filterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCU($id)
	{
		$table_data = TpCu::with('CU','Villages','Districts','Regencies','Provinces')->where('id_cu',$id)->select(
			'tpcu.*',
			DB::raw(
				'(SELECT name FROM cu WHERE tpcu.id_cu = cu.id) as cu_name,
				(SELECT name FROM villages WHERE tpcu.id_villages = villages.id) as villages_name,
				(SELECT name FROM districts WHERE tpcu.id_districts = districts.id) as districts_name,
				(SELECT name FROM regencies WHERE tpcu.id_regencies = regencies.id) as regencies_name,
				(SELECT name FROM provinces WHERE tpcu.id_provinces = provinces.id) as provinces_name'
			)
		)->filterPaginateOrder();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function get()
	{
		$table_data = TpCu::where('id','!=',0)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }
  
  public function getCu($id)
	{
		$table_data = TpCu::where('id_cu','=',$id)->select('id','no_tp','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => TpCu::initialize(),
					'rules' => TpCu::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,TpCu::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = ImageProcessing::image_processing($this->imagepath,$this->width,$this->height,$request);
		else
			$fileName = '';

		$kelas = TpCu::create($request->except('gambar') + [
			'gambar' => $fileName
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'TpCu ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = TpCu::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, TpCu::$rules);

		$name = $request->name;

		$kelas = TpCu::findOrFail($id);

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
		$kelas = TpCu::findOrFail($id);
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