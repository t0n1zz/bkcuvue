<?php
namespace App\Http\Controllers;

use App\Artikel;
use App\EloquentVueTables;
use Illuminate\Http\Request;
use File;
use Image;

class ArtikelController extends Controller{

	protected $imagepath = 'images/artikel/';

	public function index()
	{
    	 $table_data = Artikel::with('Artikel_Kategori')->select('id','nama','penulis','gambar','utamakan','terbitkan','created_at','artikel_kategori_id')->filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
            ->json([
                'form' => Artikel::initialize(),
                'rules' => Artikel::$rules,
                'option' => []
            ]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Artikel::$rules);

		if(!empty($request->gambar))
			$fileName = $this->image_processing($request);
		else
			$fileName = '';

		$kelas = Artikel::create($request->except('gambar') + [
			'gambar' => $fileName
		]);

		return response()
			->json([
				'saved' => true,
				'message' => 'Artikel berhasil ditambah'
			]);
	}

	public function show($id)
	{
		$kelas = Artikel::with('Artikel_Kategori')->findOrFail($id);

		return response()
			->json([
				'model' => $kelas
			]);
	}

	public function edit($id)
	{
		$kelas = Artikel::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		// $this->validate($request,Artikel::$rules);
		dd($request->all());
		$kelas = Artikel::findOrFail($id);
		$kelas->update($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => 'Artikel berhasil diubah'
			]);
	}

	public function updateTerbitkan(Request $request, $id)
	{
		$kelas = Artikel::findOrFail($id);

		if($kelas->terbitkan == 1){
			$kelas->terbitkan = 0;
			$message = "Artikel berhasil tidak diterbikan";
		}else{
			$kelas->terbitkan = 1;
			$message = "Artikel berhasil diterbikan";
		}

		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => $message
			]);
	}

	public function updateUtamakan(Request $request, $id)
	{
		$kelas = Artikel::findOrFail($id);

		if($kelas->utamakan == 1){
			$kelas->utamakan = 0;
			$message = "Artikel berhasil tidak diutamakan";
		}else{
			$kelas->utamakan = 1;
			$message = "Artikel berhasil diutamakan";
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
		$kelas = Artikel::findOrFail($id);

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Artikel berhasil dihapus'
			]);
	}

	private function image_processing($request)
	{
		$this->validate($request, [
    		'gambar' => 'image|mimes:jpeg,png,jpg|max:2048',
    	]);

		$path = public_path($this->imagepath);
		$imageData = $request->gambar;
		list($width, $height) = getimagesize($imageData);

		$formatedName = str_limit(preg_replace('/[^A-Za-z0-9\-]/', '',$request->nama),10,'') . '_' .uniqid();
		$fileName =  $formatedName. '.jpg';
		$fileName2 =  $formatedName. 'n.jpg';

		//image
		if($width > 720){
            Image::make($imageData->getRealPath())->resize(720, null,
                function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->save($path . $filename);
        }else{
            Image::make($imageData->getRealPath())->save($path . $fileName);
        }

        //thumbnail image
        Image::make($imageData->getRealPath())->resize(200, 200,
                function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->save($path . $fileName2);

		return $formatedName;
	}
}
