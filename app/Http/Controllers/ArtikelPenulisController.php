<?php
namespace App\Http\Controllers;

use App\Artikel_Penulis;
use Illuminate\Http\Request;

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

	public function store(Request $request)
	{
		$this->validate($request,Artikel_Penulis::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = $this->image_processing($request);
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

	private function image_processing($request, $kelas)
	{
		$path = public_path($this->imagepath);

		if(!empty($kelas) && $request->gambar == "no_image"){
			File::delete($path . $kelas->gambar . '.jpg');
			File::delete($path . $kelas->gambar . 'n.jpg');
			$formatedName = '';
		}else{
			$this->validate($request, [
				'gambar' => 'image|mimes:jpeg,png,jpg|max:2048',
			]);	
			
			if(!empty($kelas) && $request->gambar != ''){
				File::delete($path . $kelas->gambar . '.jpg');
				File::delete($path . $kelas->gambar . 'n.jpg');
			}

			$imageData = $request->gambar;
			list($width, $height) = getimagesize($imageData);

			$formatedName = str_limit(preg_replace('/[^A-Za-z0-9\-]/', '',$request->name),10,'') . '_' .uniqid();
			$fileName =  $formatedName. '.jpg';
			$fileName2 =  $formatedName. 'n.jpg';

			//image
			if($width > 720){
					Image::make($imageData->getRealPath())->resize(720, null,
						function ($constraint) {
								$constraint->aspectRatio();
						})
						->save($path . $fileName);
			}else{
					Image::make($imageData->getRealPath())->save($path . $fileName);
			}

			//thumbnail image
			Image::make($imageData->getRealPath())->resize(200, 200,
				function ($constraint) {
						$constraint->aspectRatio();
				})
				->save($path . $fileName2);
		}
		
		return $formatedName;
	}
}