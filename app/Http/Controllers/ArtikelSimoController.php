<?php
namespace App\Http\Controllers;

use DB;
use App\ArtikelSimo;
use App\Support\Helper;
use Illuminate\Http\Request;
use File;
use Image;

class ArtikelSimoController extends Controller{

	protected $imagepath = 'images/artikel_simo/';
	protected $width = 300;
	protected $height = 200;
	protected $message = 'ArtikelSimo';

	public function index()
	{
			$table_data = ArtikelSimo::advancedFilter();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function get()
	{
			$table_data = ArtikelSimo::select('name','ringkasan','gambar')->get();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => ArtikelSimo::initialize(),
					'rules' => ArtikelSimo::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,ArtikelSimo::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request,'');
		else
			$fileName = '';	
		
		$kelas = ArtikelSimo::create($request->except('gambar') + [
			'gambar' => $fileName
		]);

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah'
			]);
	}

	public function show($id)
	{
		$kelas = ArtikelSimo::findOrFail($id);

		return response()
			->json([
				'model' => $kelas
			]);
	}

	public function edit($id)
	{
		$kelas = ArtikelSimo::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,ArtikelSimo::$rules);

		$name = $request->name;

		$kelas = ArtikelSimo::findOrFail($id);

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

	public function updateUtamakan($id)
	{
		$kelas = ArtikelSimo::findOrFail($id);

		if($kelas->utamakan == 1){
			$kelas->utamakan = 0;
			$message = $this->message. " berhasil tidak diutamakan";
		}else{
			$kelas->utamakan = 1;
			$message = $this->message. " berhasil diutamakan";
		}

		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => $message
			]);
	}

	public function destroy($id)
	{
		$kelas = ArtikelSimo::findOrFail($id);
		$name = $kelas->name;

		if(!empty($kelas->gambar)){
			File::delete($this->imagepath . $kelas->gambar . '.jpg');
			File::delete($this->imagepath . $kelas->gambar . 'n.jpg');
		}

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function upload(Request $request)
	{
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request,'');
		else
			$fileName = '';

		return response()->json('/' . $this->imagepath . $fileName . '.jpg');
	}

	public function count()
	{
			$id = \Auth::user()->id_cu;

			if($id == 0){
					$table_data = ArtikelSimo::count();
			}else{
					$table_data = ArtikelSimo::where('id_cu',$id)->count();
			}
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}
