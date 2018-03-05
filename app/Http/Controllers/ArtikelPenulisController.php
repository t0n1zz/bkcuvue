<?php
namespace App\Http\Controllers;

use App\ArtikelPenulis;
use Illuminate\Http\Request;
use App\Support\ImageProcessing;

class ArtikelPenulisController extends Controller{

	protected $imagepath = 'images/penulis/';

	public function index()
	{
    	$table_data = ArtikelPenulis::with('CU')->withCount('hasArtikel')->filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexAll()
	{
		$table_data = ArtikelPenulis::where('id','!=',1)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }
  
  public function indexCU($id)
	{
		$table_data = ArtikelPenulis::with('CU')->withCount('hasArtikel')->where('id_cu',$id)->filterPaginateOrder();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function getCU($id)
	{
		$table_data = ArtikelPenulis::where('id_cu','=',$id)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => ArtikelPenulis::initialize(),
					'rules' => ArtikelPenulis::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,ArtikelPenulis::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = ImageProcessing::image_processing($this->imagepath,'300','200',$request,$kelas);
		else
			$fileName = '';

		$kelas = ArtikelPenulis::create($request->except('gambar') + [
			'gambar' => $fileName
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Penulis ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = ArtikelPenulis::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,ArtikelPenulis::$rules);

		$name = $request->name;

		$kelas = ArtikelPenulis::findOrFail($id);

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = ImageProcessing::image_processing($this->imagepath,'300','200',$request,$kelas);
		else
			$fileName = '';

		$kelas->update($request->except('gambar') + [
			'gambar' => $fileName
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Penulis ' .$name. ' berhasil diubah',
				'id' => $kelas->id
			]);	
	}

	public function destroy($id)
	{
		$kelas = ArtikelPenulis::findOrFail($id);
		$name = $kelas->name;

		if(!empty($kelas->gambar)){
			File::delete($path . $kelas->gambar . '.jpg');
			File::delete($path . $kelas->gambar . 'n.jpg');
		}

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Artikel' .$name. 'berhasil dihapus'
			]);
	}
}