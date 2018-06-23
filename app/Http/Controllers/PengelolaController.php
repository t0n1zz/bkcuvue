<?php
namespace App\Http\Controllers;

use DB;
use App\Pengelola;
use App\PengelolaPekerjaan;
use App\PengelolaPendidikan;
use App\PengelolaOrganisasi;
use App\Support\Helper;
use Illuminate\Http\Request;
use File;
use Image;

class PengelolaController extends Controller{

	protected $imagepath = 'images/Pengelola/';
	protected $width = 300;
	protected $height = 200;
	protected $message = 'Pengelola';

	public function index()
	{
		$table_data = Pengelola::with('pekerjaan_aktif.cu','pendidikan_tertinggi')->whereHas('pekerjaan',function($query){
			$query->where('sekarang','1')->orWhere('selesai','>',date('Y-m-d'));
		})->filterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id)
	{
		if($id == 0){
			$tipe = 3;
			$id = 1;
		}else{
			$tipe = 1;
		}

		$table_data = Pengelola::with('pekerjaan_aktif.cu','pendidikan_tertinggi')
		->whereHas('pekerjaan', function($query) use ($id,$tipe){
			$query->where('tipe',$tipe)->where('id_tempat',$id)
			->where(function($q){
				$q->where('sekarang','1')->orWhere('selesai','>',date('Y-m-d'));
			});
		})->filterPaginateOrder();


		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Pengelola::initialize(),
					'rules' => Pengelola::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Pengelola::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request,'');
		else
			$fileName = '';

		// processing summernote content	
		if(!empty($request->content))	
			$content = Helper::dom_processing($request,public_path($this->imagepath));
		else
			$content = '';		
		
		$kelas = Pengelola::create($request->except('gambar','content') + [
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
		$kelas = Pengelola::with('PengelolaKategori')->findOrFail($id);

		return response()
			->json([
				'model' => $kelas
			]);
	}

	public function edit($id)
	{
		$kelas = Pengelola::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Pengelola::$rules);

		$name = $request->name;

		$kelas = Pengelola::findOrFail($id);

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request,$kelas);
		else
			$fileName = '';

		// processing summernote content	
		if(!empty($request->content))	
			$content = Helper::dom_processing($request,public_path($this->imagepath));
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
		$kelas = Pengelola::findOrFail($id);

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
		$kelas = Pengelola::findOrFail($id);

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
		$kelas = Pengelola::findOrFail($id);
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
}
