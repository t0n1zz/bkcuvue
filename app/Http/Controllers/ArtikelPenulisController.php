<?php
namespace App\Http\Controllers;

use App\Artikel_Penulis;
use Illuminate\Http\Request;
use App\Support\ImageProcessing;

class ArtikelPenulisController extends Controller{

	protected $imagepath = 'images/penulis/';

	public function index()
	{
    	$table_data = Artikel_Penulis::select('id','name','created_at')->filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexAll()
	{
		$table_data = Artikel_Penulis::where('id','!=',1)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }
  
  public function indexCU($id)
	{
		$table_data = Artikel_Penulis::where('id_cu','=',$id)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Artikel_Penulis::initialize(),
					'rules' => Artikel_Penulis::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Artikel_Penulis::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = ImageProcessing::image_processing($this->imagepath,'300','200',$request,$kelas);
		else
			$fileName = '';

		$kelas = Artikel_Penulis::create($request->except('gambar') + [
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
		$kelas = Artikel_Penulis::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Artikel_Penulis::$rules);

		$name = $request->name;

		$kelas = Artikel_Penulis::findOrFail($id);

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
		$kelas = Artikel_Penulis::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Artikel' .$name. 'berhasil dihapus'
			]);
	}
}