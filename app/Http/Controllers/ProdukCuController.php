<?php
namespace App\Http\Controllers;

use DB;
use App\ProdukCu;
use App\Support\ImageProcessing;
use Illuminate\Http\Request;
use File;
use Image;

class ProdukCuController extends Controller{

	protected $imagepath = 'images/produk/';
	protected $width = 200;
	protected $height = 200;
	protected $message = "Produk dan pelayanan";

	public function index()
	{
		$table_data = ProdukCu::with('Cu')->select(
			DB::raw('*,(SELECT name FROM cu WHERE tp.id_cu = cu.id) as cu_name')
		)->filterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id)
	{
		$table_data = ProdukCu::with('Cu')->where('id_cu',$id)->select(
			DB::raw('*, (SELECT name FROM cu WHERE tp.id_cu = cu.id) as cu_name')
		)->filterPaginateOrder();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => ProdukCu::initialize(),
					'rules' => ProdukCu::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,ProdukCu::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = ImageProcessing::image_processing($this->imagepath,$this->width,$this->height,$request);
		else
			$fileName = '';

		$kelas = ProdukCu::create($request->except('gambar') + [
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
		$kelas = ProdukCu::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, ProdukCu::$rules);

		$name = $request->name;

		$kelas = ProdukCu::findOrFail($id);

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
		$kelas = ProdukCu::findOrFail($id);
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