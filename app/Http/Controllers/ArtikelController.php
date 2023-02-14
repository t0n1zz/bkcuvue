<?php

namespace App\Http\Controllers;

use DB;
use App\Artikel;
use App\Support\Helper;
use Illuminate\Http\Request;
use File;
use Image;

class ArtikelController extends Controller
{

	protected $imagepath = 'images/artikel/';
	protected $width = 300;
	protected $height = 200;
	protected $message = 'Artikel';

	public function index()
	{
		$table_data = Artikel::with('kategori', 'penulis', 'Cu')->select(
			'id',
			'id_cu',
			'id_artikel_kategori',
			'id_artikel_penulis',
			'name',
			'gambar',
			'utamakan',
			'terbitkan',
			'created_at',
			'updated_at',
			DB::raw(
				'(SELECT name FROM cu WHERE artikel.id_cu = cu.id) as cu_name,
				(SELECT name FROM artikel_kategori WHERE artikel.id_artikel_kategori = artikel_kategori.id) as kategori_name,
				(SELECT name FROM artikel_penulis WHERE artikel.id_artikel_penulis = artikel_penulis.id) as penulis_name'
			)
		)->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexCu($id)
	{
		$table_data = Artikel::with('kategori', 'penulis', 'Cu')->where('id_cu', $id)->select(
			'id',
			'id_cu',
			'id_artikel_kategori',
			'id_artikel_penulis',
			'name',
			'gambar',
			'utamakan',
			'terbitkan',
			'created_at',
			'updated_at',
			DB::raw(
				'(SELECT name FROM cu WHERE artikel.id_cu = cu.id) as cu_name,
				(SELECT name FROM artikel_kategori WHERE artikel.id_artikel_kategori = artikel_kategori.id) as kategori_name,
				(SELECT name FROM artikel_penulis WHERE artikel.id_artikel_penulis = artikel_penulis.id) as penulis_name,
				(SELECT name FROM cu WHERE artikel.id_cu = cu.id) as cu_name'
			)
		)->advancedFilter();

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

	// public function getId($filename)
	// {
	// 	$dir = '/';
	// 	$recursive = false; // Get subdirectories also?
	// 	$contents = collect(\Storage::disk('google_backup')->listContents($dir, $recursive));
	// 	$filePath = $contents->where('type', '=', 'file')->where('filename', '=', pathinfo($filename, PATHINFO_FILENAME))->where('extension', '=', pathinfo($filename, PATHINFO_EXTENSION))->first()['path'];
	// 	return $filePath;
	// }

	public function store(Request $request)
	{
		$this->validate($request, Artikel::$rules);

		$name = $request->name;

		// processing single image upload
		if (!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath, $this->width, $this->height, $request->gambar, '', $name, '');
		else
			$fileName = '';


		// processing summernote content	
		// if(!empty($request->content))	
		// 	$content = Helper::dom_processing($request,public_path($this->imagepath));
		// else
		// 	$content = '';		
		$filePath = $this->getPath($fileName);
		$kelas = Artikel::create($request->except('gambar', 'gambar_cloud') + [
			'gambar' => $fileName,
			'gambar_cloud' => $filePath
		]);

		return response()
			->json([
				'saved' => true,
				'message' => $this->message . ' ' . $name . ' berhasil ditambah'
			]);
	}


	public function getPath($fileName)
	{
		$dir = '/';
		$recursive = false;
		$contents = collect(\Storage::disk('google_main')->listContents($dir, $recursive));
		$file_name = $fileName . '.jpg';
		if ($fileName != '') {
			$filePath = $contents->where('type', '=', 'file')->where('filename', '=', pathinfo($file_name, PATHINFO_FILENAME))->where('extension', '=', pathinfo($file_name, PATHINFO_EXTENSION))->first()['path'];
		} else {
			$filePath = '';
		}
		return $filePath;
	}

	public function show($id)
	{
		$kelas = Artikel::with('kategori')->findOrFail($id);

		return response()
			->json([
				'model' => $kelas
			]);
	}

	public function edit($id)
	{
		$kelas = Artikel::findOrFail($id);
		// $url = 'https://drive.google.com/uc?id='. $kelas->gambar_cloud.'&export=download';
		// $someUniqueImageId = ;
		// $minutes = 60;
		// return Cache::remember($someUniqueImageCacheId, $minutes, function () use ($url) {
		// 	return Image::make($url)->resize(300, 225)->response('jpg');
		// });
		return response()
			->json([
				'form' => $kelas,
				'option' => []
			]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, Artikel::$rules);

		$name = $request->name;

		$kelas = Artikel::findOrFail($id);

		// processing single image upload
		if (!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath, $this->width, $this->height, $request->gambar, $kelas->gambar, $name, $kelas->gambar_cloud);
		else
			$fileName = '';

		// processing summernote content	
		// if(!empty($request->content))	
		// 	$content = Helper::dom_processing($request,public_path($this->imagepath));
		// else
		// 	$content = '';
		$filePath = $this->getPath($fileName);
		// dd($filePath);
		$kelas->update($request->except('gambar', 'gambar_cloud') + [
			'gambar' => $fileName,
			'gambar_cloud' => $filePath
		]);

		return response()
			->json([
				'saved' => true,
				'message' => $this->message . ' ' . $name . ' berhasil diubah'
			]);
	}

	public function updateTerbitkan($id)
	{
		$kelas = Artikel::findOrFail($id);

		if ($kelas->terbitkan == 1) {
			$kelas->terbitkan = 0;
			$message = $this->message . " berhasil tidak diterbitkan";
		} else {
			$kelas->terbitkan = 1;
			$message = $this->message . " berhasil diterbitkan";
		}

		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => $message
			]);
	}

	public function updateUtamakan($id)
	{
		$kelas = Artikel::findOrFail($id);

		if ($kelas->utamakan == 1) {
			$kelas->utamakan = 0;
			$message = $this->message . " berhasil tidak diutamakan";
		} else {
			$kelas->utamakan = 1;
			$message = $this->message . " berhasil diutamakan";
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
		$name = $kelas->name;

		if (!empty($kelas->gambar)) {
			\Storage::disk('google_main')->delete($kelas->gambar_cloud);
			File::delete($this->imagepath . $kelas->gambar . '.jpg');
			File::delete($this->imagepath . $kelas->gambar . 'n.jpg');
		}

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message . ' ' . $name . 'berhasil dihapus'
			]);
	}

	public function upload(Request $request)
	{
		if (!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath, $this->width, $this->height, $request->gambar, '', $request->name, '');
		else
			$fileName = '';

		return response()->json('/' . $this->imagepath . $fileName . '.jpg');
	}

	public function count()
	{
		$id = \Auth::user()->id_cu;

		if ($id == 0) {
			$table_data = Artikel::count();
		} else {
			$table_data = Artikel::where('id_cu', $id)->count();
		}

		return response()
			->json([
				'model' => $table_data
			]);
	}
}
