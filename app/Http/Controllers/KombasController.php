<?php
namespace App\Http\Controllers;

use DB;
use App\Kombas;
use Illuminate\Http\Request;

class KombasController extends Controller{

	protected $imagepath = 'images/kombas/';

	public function index($tipe)
	{
		if($tipe == 'semua'){
			$table_data = Kombas::with('cu')->advancedFilter();
		}else{
    	$table_data = Kombas::with('cu')->where('tipe',$tipe)->advancedFilter();
		}

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id, $tipe)
	{
		if($tipe == 'semua'){
			$table_data = Kombas::with('tp')->where('id_cu',$id)->advancedFilter();
		}else{
			$table_data = Kombas::with('tp')->where('id_cu',$id)->where('tipe',$tipe)->advancedFilter();
		}

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function get()
	{
		$table_data = Kombas::select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
  }
  
	public function create()
	{
		return response()
			->json([
					'form' => Kombas::initialize(),
					'rules' => Kombas::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Kombas::$rules);

		$name = $request->name;

		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,'300','200',$request->gambar,'', $name);
		else
			$fileName = '';

		$kelas = Kombas::create($request->except('gambar') + [
			'gambar' => $fileName
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Kombas ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = Kombas::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Kombas::$rules);

		$name = $request->name;

		$kelas = Kombas::findOrFail($id);

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,'300','200',$request->gambar, $kelas->gambar, $name);
		else
			$fileName = '';

		$kelas->update($request->except('gambar') + [
			'gambar' => $fileName
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Kombas ' .$name. ' berhasil diubah',
				'id' => $kelas->id
			]);	
	}

	public function destroy($id)
	{
		$kelas = Kombas::findOrFail($id);
		$name = $kelas->name;

		if(!empty($kelas->gambar)){
			File::delete($this->imagepath . $kelas->gambar . '.jpg');
			File::delete($this->imagepath . $kelas->gambar . 'n.jpg');
		}

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Kombas ' .$name. 'berhasil dihapus'
			]);
	}


	public function count()
	{
			$id = \Auth::user()->id_cu;

			if($id == 0){
					$table_data = Kombas::count();
			}else{
					$table_data = Kombas::where('id_cu',$id)->count();
			}
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}