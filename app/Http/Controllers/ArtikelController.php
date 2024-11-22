<?php
namespace App\Http\Controllers;

use DB;
use App\Artikel;
use App\Support\Helper;
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
			$table_data = Artikel::with('kategori','penulis','Cu')->select('id','id_cu','id_artikel_kategori','id_artikel_penulis','name','gambar','utamakan','terbitkan','created_at','updated_at',
			DB::raw(
				'(SELECT name FROM cu WHERE artikel.id_cu = cu.id) as cu_name,
				(SELECT name FROM artikel_kategori WHERE artikel.id_artikel_kategori = artikel_kategori.id) as kategori_name,
				(SELECT name FROM artikel_penulis WHERE artikel.id_artikel_penulis = artikel_penulis.id) as penulis_name'
			))->advancedFilter();

    	return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexCu($id)
	{
			$table_data = Artikel::with('kategori','penulis','Cu')->where('id_cu',$id)->select('id','id_cu','id_artikel_kategori','id_artikel_penulis','name','gambar','utamakan','terbitkan','created_at','updated_at',
			DB::raw(
				'(SELECT name FROM cu WHERE artikel.id_cu = cu.id) as cu_name,
				(SELECT name FROM artikel_kategori WHERE artikel.id_artikel_kategori = artikel_kategori.id) as kategori_name,
				(SELECT name FROM artikel_penulis WHERE artikel.id_artikel_penulis = artikel_penulis.id) as penulis_name,
				(SELECT name FROM cu WHERE artikel.id_cu = cu.id) as cu_name'
			))->advancedFilter();

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
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request->gambar,'',$name);
		else
			$fileName = '';

		// processing summernote content	
		// if(!empty($request->content))	
		// 	$content = Helper::dom_processing($request,public_path($this->imagepath));
		// else
		// 	$content = '';		
		
		$kelas = Artikel::create($request->except('gambar') + [
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
		$kelas = Artikel::with('kategori')->findOrFail($id);

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
    $this->validate($request, Artikel::$rules);

    $name = $request->name;
    $kelas = Artikel::findOrFail($id);

    // Get the old content with embedded images
    $oldContent = $kelas->content;

    // Get the new content from the request
    $newContent = $request->content;

	
    // Extract image paths from the old and new content
    $oldImages = $this->extractImagePaths($oldContent);
    $newImages = $this->extractImagePaths($newContent);

    // Find images that are in the old content but not in the new content
    $imagesToDelete = array_diff($oldImages, $newImages);

    // Delete old images that are no longer in the updated content
    foreach ($imagesToDelete as $image) {
        $this->deleteImageFile($image);
    }

    if (!empty($request->gambar)) {
        $fileName = Helper::image_processing($this->imagepath, $this->width, $this->height, $request->gambar, $kelas->gambar, $name);
    } else {
        $fileName = $kelas->gambar;
    }
    // Update the article with the new data and image filename
    $kelas->update($request->except('gambar') + [
        'gambar' => $fileName,
        'content' => $newContent, // Make sure to save the updated content
    ]);

    return response()->json([
        'saved' => true,
        'message' => $this->message . ' ' . $name . ' berhasil diubah'
    ]);
}

/**
 * Extract image paths from content.
 */
protected function extractImagePaths($content)
{
    $imagePaths = [];

    // Use regex to extract all image src paths from the content
    preg_match_all('/<img[^>]+src="([^">]+)"/', $content, $matches);

    if (isset($matches[1])) {
        $imagePaths = $matches[1];
    }

    return $imagePaths;
}

/**
 * Delete the image file and the one ending with 'n.jpg' from the server.
 */
protected function deleteImageFile($imagePath)
{
    // Remove the leading slash (/) from the path if necessary
    $imagePath = ltrim($imagePath, '/');

    // Ensure the file exists before attempting to delete it
    if (File::exists($imagePath)) {
        // Delete the original image file
        File::delete($imagePath);

        // Also delete the corresponding 'n.jpg' image
        $nImagePath = preg_replace('/\.jpg$/', 'n.jpg', $imagePath);
        if (File::exists($nImagePath)) {
            File::delete($nImagePath);
        }
    }
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

    // Extract image paths from the article's content
    $imagesToDelete = $this->extractImagePaths($kelas->content);

    // Delete the images in the content
    foreach ($imagesToDelete as $image) {
        $this->deleteImageFile($image);
    }

    if (!empty($kelas->gambar)) {
        File::delete($this->imagepath . $kelas->gambar . '.jpg');
        File::delete($this->imagepath . $kelas->gambar . 'n.jpg');
    }

    $kelas->delete();

    return response()->json([
        'deleted' => true,
        'message' => $this->message . ' ' . $name . ' berhasil dihapus'
    ]);
}


	public function upload(Request $request)
	{
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request->gambar,'', $request->name);
		else
			$fileName = '';

		return response()->json('/' . $this->imagepath . $fileName . '.jpg');
		
	}
	public function deleteImage(Request $request)
{
    $url = $request->input('url');
    // Extract filename from URL, delete from storage
    $path = parse_url($url, PHP_URL_PATH);
    $fullPath = public_path($path);

    if (File::exists($fullPath)) {
        File::delete($fullPath);
        return response()->json(['deleted' => true, 'message' => 'Image deleted successfully.']);
    } else {
        return response()->json(['deleted' => false, 'message' => 'Image not found.']);
    }
}


	public function count()
	{
			$id = \Auth::user()->id_cu;

			if($id == 0){
					$table_data = Artikel::count();
			}else{
					$table_data = Artikel::where('id_cu',$id)->count();
			}
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}
