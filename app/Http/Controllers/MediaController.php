<?php
namespace App\Http\Controllers;

use DB;
use App\Media;
use App\Support\Helper;
use Illuminate\Http\Request;
use File;
use Image;

class MediaController extends Controller{

	protected $imagepath = 'files/media/';
	protected $width = 300;
	protected $height = 200;
	protected $message = 'Media';

	public function index()
	{
		$table_data = Media::with('Cu')->select('id','id_cu','name','gambar','link','created_at','updated_at',
		DB::raw(
			'(SELECT name FROM cu WHERE media.id_cu = cu.id) as cu_name'
		))
		->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($cu)
	{
		$table_data = Media::with('Cu')->select('id','id_cu','name','gambar','link','created_at','updated_at',
		DB::raw(
			'(SELECT name FROM cu WHERE media.id_cu = cu.id) as cu_name'
		))
		->where('id_cu',$cu)
		->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Media::initialize(),
					'rules' => Media::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Media::$rules);

		$name = $request->name;

		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request->gambar,'',$name);
		else
			$fileName = '';

		$kelas = Media::create($request->except('gambar') + [
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
		$kelas = Media::with('Cu')->findOrFail($id);

		return response()
			->json([
				'model' => $kelas
			]);
	}

	public function edit($id)
	{
		$kelas = Media::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Media::$rules);

		$name = $request->name;

		$kelas = Media::findOrFail($id);

		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request->gambar,$kelas->gambar, $name);
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
		$kelas = Media::findOrFail($id);
		$name = $kelas->name;

		if(!empty($kelas->gambar)){
			File::delete($this->imagepath . $kelas->gambar . '.jpg');
			File::delete($this->imagepath . $kelas->gambar . 'n.jpg');
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
					$table_data = Media::count();
			}else{
					$table_data = Media::where('id_cu',$id)->count();
			}
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}
