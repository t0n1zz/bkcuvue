<?php
namespace App\Http\Controllers;

use DB;
use File;
use Image;
use App\MitraLembaga;
use App\Support\Helper;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class MitraLembagaController extends Controller{

	protected $imagepath = 'images/mitra_lembaga/';
	protected $width = 200;
	protected $height = 200;
	protected $message = "Mitra Lembaga";

	public function index()
	{
		$table_data = MitraLembaga::with('Villages','Districts','Regencies','Provinces')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => MitraLembaga::initialize(),
					'rules' => MitraLembaga::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,MitraLembaga::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request,'');
		else
			$fileName = '';

		$kelas = MitraLembaga::create($request->except('gambar') + [
			'gambar' => $fileName
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = MitraLembaga::with('Villages','Districts','Regencies','Provinces')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, MitraLembaga::$rules);

		$name = $request->name;

		$kelas = MitraLembaga::findOrFail($id);

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request,$kelas);
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
		$kelas = MitraLembaga::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function count()
	{
			$table_data = MitraLembaga::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
    $time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\MitraLembaga')->where('created_at','>=',$time)->orderBy('created_at','desc')->get();

    $history = collect();		
		foreach($table_data as $hs){
			$n = collect($hs);
			$n->put('user',$hs->userResponsible());
			$history->push($n);
		}

		return response()
			->json([
				'model' => $history
			]);
  }
}