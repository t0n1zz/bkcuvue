<?php
namespace App\Http\Controllers;

use DB;
use App\Dokumen;
use App\Support\Helper;
use Illuminate\Http\Request;
use File;
use Image;

class DokumenController extends Controller{

	protected $filepath = 'files/dokumen/';
	protected $width = 300;
	protected $height = 200;
	protected $message = 'Dokumen';

	public function index()
	{
		$table_data = Dokumen::with('kategori','Cu')->select('id','id_cu','name','id_dokumen_kategori','status','filename','keterangan','tipe','format','link','created_at','updated_at',
		DB::raw(
			'(SELECT name FROM cu WHERE dokumen.id_cu = cu.id) as cu_name,
			(SELECT name FROM dokumen_kategori WHERE dokumen.id_dokumen_kategori = dokumen_kategori.id) as kategori_name'
		))
		->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($cu)
	{
		$id_cu = \Auth::user()->id_cu;

		if($cu == 0 && $id_cu != 0){
			$table_data = Dokumen::with('kategori','Cu')->select('id','id_cu','name','id_dokumen_kategori','status','filename','keterangan','tipe','format','link','created_at','updated_at',
			DB::raw(
				'(SELECT name FROM cu WHERE dokumen.id_cu = cu.id) as cu_name,
				(SELECT name FROM dokumen_kategori WHERE dokumen.id_dokumen_kategori = dokumen_kategori.id) as kategori_name'
			))
			->where('status','UMUM')
			->where('id_cu',$cu)
			->advancedFilter();
		}else{
			$table_data = Dokumen::with('kategori','Cu')->select('id','id_cu','name','id_dokumen_kategori','status','filename','keterangan','tipe','format','link','created_at','updated_at',
			DB::raw(
				'(SELECT name FROM cu WHERE dokumen.id_cu = cu.id) as cu_name,
				(SELECT name FROM dokumen_kategori WHERE dokumen.id_dokumen_kategori = dokumen_kategori.id) as kategori_name'
			))
			->where('id_cu',$cu)
			->advancedFilter();
		}


		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Dokumen::initialize(),
					'rules' => Dokumen::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Dokumen::$rules);

		$name = $request->name;
		$format = $request->format;
		$formatedName = '';
		$fileExtension = 'link';

		if($format == 'upload'){
			$file = $request->content;
			
			$fileExtension = $file->getClientOriginalExtension();
			if($fileExtension != 'pdf'){
				$formatedName = Helper::image_processing($this->filepath,$this->width,$this->height,$file,'',$name);
			}else{
				$filename = $file->getClientOriginalName();
				$formatedName = str_limit(preg_replace('/[^A-Za-z0-9\-]/', '',$name),10,'') . '_' .uniqid(). $fileExtension;
				$file->move($this->filepath,$formatedName);
			}
		}

		$kelas = Dokumen::create([ 
			'id_cu' => $request->id_cu,
			'id_dokumen_kategori' => $request->id_dokumen_kategori,
			'name' => $request->name,
			'filename' => $formatedName,
			'link' => $request->link,
			'format' => $format,
			'tipe' => $fileExtension,
			'status' => $request->status,
			'keterangan' => $request->keterangan
		]);

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah'
			]);
	}

	public function show($id)
	{
		$kelas = Dokumen::with('kategori')->findOrFail($id);

		return response()
			->json([
				'model' => $kelas
			]);
	}

	public function edit($id)
	{
		$kelas = Dokumen::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Dokumen::$rules);

		$name = $request->name;

		$kelas = Dokumen::findOrFail($id);

		$kelas->update($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = Dokumen::findOrFail($id);
		$name = $kelas->name;

		if(!empty($kelas->filename)){
			if($format == 'jpg'){
				File::delete($filepath . $kelas->filename . '.jpg');
				File::delete($filepath . $kelas->filename . 'n.jpg');
			}else{
				File::delete($filepath . $kelas->filename);
			}
		}

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function count()
	{
			$id = \Auth::user()->id_cu;

			if($id == 0){
					$table_data = Dokumen::count();
			}else{
					$table_data = Dokumen::where('id_cu',$id)->count();
			}
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}
