<?php
namespace App\Http\Controllers;

use DB;
use File;
use Image;
use App\MitraOrang;
use App\KegiatanPeserta;
use App\Support\Helper;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class MitraOrangController extends Controller{

	protected $imagepath = 'images/mitra_orang/';
	protected $width = 200;
	protected $height = 200;
	protected $message = "Mitra Perserorangan";

	public function index()
	{
		$table_data = MitraOrang::with('Villages','Districts','Regencies','Provinces')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPeserta($kegiatan_id)
	{
		$kegiatanPeserta = KegiatanPeserta::where('kegiatan_id',$kegiatan_id)->whereNotNull('mitra_orang_id')->pluck('mitra_orang_id')->toArray(); 

		$table_data = MitraOrang::with('Villages','Districts','Regencies','Provinces')->whereNotIn('id', $kegiatanPeserta)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => MitraOrang::initialize(),
					'rules' => MitraOrang::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,MitraOrang::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request->gambar,'', $name);
		else
			$fileName = '';

		$kelas = MitraOrang::create($request->except('gambar') + [
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
		$kelas = MitraOrang::with('Villages','Districts','Regencies','Provinces')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, MitraOrang::$rules);

		$name = $request->name;

		$kelas = MitraOrang::findOrFail($id);

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request->gambar, $kelas->gambar, $name);
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
		$kelas = MitraOrang::findOrFail($id);
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
			$table_data = MitraOrang::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
    $time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\MitraOrang')->where('created_at','>=',$time)->orderBy('created_at','desc')->take(5);

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