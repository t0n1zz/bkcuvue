<?php
namespace App\Http\Controllers;

use App\Artikel;
use App\Support\ImageProcessing;
use Illuminate\Http\Request;
use File;
use Image;

class ArtikelController extends Controller{

	protected $imagepath = 'images/artikel/';
	protected $width = 300;
	protected $height = 200;
	protected $message = 'Artikel';

	public function index()
	{
    	$table_data = Artikel::with('ArtikelKategori','ArtikelPenulis','CU')->select('id','id_cu','id_artikel_kategori','id_artikel_penulis','name','gambar','utamakan','terbitkan','created_at','updated_at')->filterPaginateOrder();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexCU($id)
	{
    	$table_data = Artikel::with('ArtikelKategori','ArtikelPenulis','CU')->where('id_cu',$id)->select('id','id_cu','id_artikel_kategori','id_artikel_penulis','name','gambar','utamakan','terbitkan','created_at','updated_at')->filterPaginateOrder();

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

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = ImageProcessing::image_processing($this->imagepath,$this->width,$this->height,$request);
		else
			$fileName = '';

		// processing summernote content	
		if(!empty($request->content))	
			$content = $this->dom_processing($request);
		else
			$content = '';		
		
		$kelas = Artikel::create($request->except('gambar','content') + [
			'gambar' => $fileName, 'content' => $content
		]);

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah'
			]);
	}

	public function show($id)
	{
		$kelas = Artikel::with('ArtikelKategori')->findOrFail($id);

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
		$this->validate($request,Artikel::$rules);

		$name = $request->name;

		$kelas = Artikel::findOrFail($id);

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = ImageProcessing::image_processing($this->imagepath,$this->width,$this->height,$request,$kelas);
		else
			$fileName = '';

		// processing summernote content	
		if(!empty($request->content))	
			$content = $this->dom_processing($request);
		else
			$content = '';	

		$kelas->update($request->except('gambar','content') + [
			'gambar' => $fileName, 'content' => $content
		]);

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function updateTerbitkan($id)
	{
		$kelas = Artikel::findOrFail($id);

		if($kelas->terbitkan == 1){
			$kelas->terbitkan = 0;
			$message = $this->message. " berhasil tidak diterbitkan";
		}else{
			$kelas->terbitkan = 1;
			$message = $this->message. " berhasil diterbitkan";
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
		$kelas = Artikel::findOrFail($id);
		$name = $kelas->name;

		if(!empty($kelas->gambar)){
			File::delete($path . $kelas->gambar . '.jpg');
			File::delete($path . $kelas->gambar . 'n.jpg');
		}

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	private function dom_processing($request){

		$path = public_path($this->imagepath);
		$dom = new \DomDocument();

		$dom->loadHTML("<div>$request->content</div>");
		$container = $dom->getElementsByTagName('div')->item(0);
		$container = $container->parentNode->removeChild($container);

		while($dom->firstChild){
			$dom->removeChild($dom->firstChild);
		}

		while($container->firstChild){
			$dom->appendChild($container->firstChild);
		}

		$images = $dom->getElementsByTagName('img');
			// foreach <img> in the submited message
			foreach($images as $img){
				$src = $img->getAttribute('src');

					// if the img source is 'data-url'
				if(preg_match('/data:image/', $src)){ 
					preg_match('/data:image\/(?<mime>.*?)\;/', $src, $groups);
					$mimetype = $groups['mime']; 
					// Generating a random filename
					$filename = str_limit(preg_replace('/[^A-Za-z0-9\-]/', '',$request->name),10,'') . '_' .uniqid();
					$filepath = "$path.$filename.$mimetype";
					// You can put your directory to upload image 
					$image = Image::make($src)
					// resize if required
					/* ->resize(300, 200) */
					->encode($mimetype, 100) // encode file to the specified mimetype
					->save(public_path($filepath)); 
					$new_src = $filepath;
					$img->removeAttribute('src');
					$img->setAttribute('src', $new_src);
				} // <!--endif
			} // 

		return $dom->saveHTML();
	}
}
