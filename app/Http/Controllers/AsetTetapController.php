<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Image;
use Validator;
use App\AsetTetap;
use App\Support\Helper;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;
use App\Imports\AsetTetapNewDraftImport;
use Carbon\Carbon;

class AsetTetapController extends Controller{

	protected $imagepath = 'images/asetTetap/';
	protected $width = 1440;
	protected $height = 1080;
	protected $message = "Aset Tetap";

	public function index()
	{
		$table_data = AsetTetap::with('aktivis','golongan','kelompok','jenis','lokasi','pembeli')->withCount(['hasAset','hasAset as harga_sub' => function($q) {
			$q->select(DB::raw('sum(harga)'));
		}])->advancedFilter();

		foreach($table_data as $datas){
			$datas->kode = $datas->kode ? $datas->kode . "​ " : '';
			$datas->total_harga = $datas->harga + $datas->harga_sub;
		}

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexSub($id)
	{
		$table_data = AsetTetap::with('aktivis','golongan','kelompok','jenis','lokasi','pembeli')->withCount(['hasAset','hasAset as harga_sub' => function($q) {
			$q->select(DB::raw('sum(harga)'));
		}])->where('aset_id',$id)->advancedFilter();

		foreach($table_data as $datas){
			$datas->kode = $datas->kode ? $datas->kode . "​ " : '';
			$datas->total_harga = $datas->harga + $datas->harga_sub;
		}

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function get($kode)
	{
		$table_data = AsetTetap::with('aktivis','golongan','kelompok','jenis','lokasi','pembeli')->withCount(['hasAset','hasAset as harga_sub' => function($q) {
			$q->select(DB::raw('sum(harga)'));
		}])->where('kode',$kode)->first();

		return response()
			->json([
					'model' => $table_data,
			]);
	}

	public function generate($id)
	{
		$table_data = AsetTetap::where('aset_tetap_jenis_id',$id)->orderBy('kode','desc')->first();

		return response()
			->json([
					'model' => $table_data,
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => AsetTetap::initialize(),
					'rules' => AsetTetap::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,AsetTetap::$rules);

		$name = $request->name;

		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request->gambar,'', $name);
		else
			$fileName = '';	

		$kelas = AsetTetap::create($request->except('gambar') + [
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
		$kelas = AsetTetap::with('aset')->findOrFail($id);

		return response()
			->json([
					'form' => $kelas,
					'option' => []
			]);
	}

	public function update(Request $request, $id)
	{
		$rules = AsetTetap::$rules;
		$rules['kode'] = $rules['kode'] . ',id,' . $id;
		$validationCertificate  = Validator::make($request->all(), $rules); 
		$name = $request->name;

		$kelas = AsetTetap::findOrFail($id);

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
				'message' => $this->message. ' ' .$name. ' berhasil diubah',
				'id' => $kelas->id
			]);
	}

	public function updateKondisi(Request $request, $id)
	{
		$kelas = AsetTetap::findOrFail($id);

		$kelas->kondisi = $request->kondisi;

		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => 'Kondisi ' .$message. ' berhasil diubah'
			]);
	}

	public function destroy($id, $cu)
	{
		$kelas = AsetTetap::with('hasAset')->findOrFail($id);

		$name = $kelas->name;

		if(!empty($kelas->gambar)){
			File::delete($this->imagepath . $kelas->gambar . '.jpg');
			File::delete($this->imagepath . $kelas->gambar . 'n.jpg');
		}

		if($kelas->hasAset){
			foreach($kelas->hasAset as $data){
				$data->aset_id = 0;
				$data->update();
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
			$table_data = AsetTetap::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
    $time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\AsetTetap')->where('created_at','>=',$time)->orderBy('created_at','desc')->get();

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

	public function cariData($kode)
	{
		$table_data = AsetTetap::with('aktivis')->where('kode',$kode)->first();
		
		if($table_data){
			return response()
			->json([
				'model' => $table_data
			]);
		}else{
			return response()
			->json([
					'form' => AsetTetap::initialize(),
					'rules' => AsetTetap::$rules,
					'option' => []
			]);
		}
	}
}