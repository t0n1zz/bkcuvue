<?php
namespace App\Http\Controllers;

use DB;
use File;
use Date;
use Image;
use App\Cu;
use App\Support\Helper;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class CuController extends Controller{

	protected $imagepath = 'images/cu/';
	protected $width = 200;
	protected $height = 200;
	protected $message = "Cu";

	public function index()
	{
		$table_data = Cu::with('Villages','Districts','Regencies','Provinces')
		->withCount('hasTp')
		->withCount('hasManajemen')
		->withCount('hasPengurus')
		->withCount('hasPengawas')
		->withCount('hasKomite')
		->withCount('hasPenasihat')
		->withCount('hasSeniorManajer')
		->withCount('hasManajer')
		->withCount('hasSupervisor')
		->withCount('hasStaf')
		->withCount('hasKontrak')
		->withCount('hasAktivisTidakAktif')
		->withCount('hasSimpanan')
		->withCount('hasPinjaman')
		->withCount('hasSimpananJalinan')
		->withCount('hasPinjamanJalinan')
		->withCount('hasUser')
		->withCount('hasArtikel')
		->withCount('hasAnggotaCu')
		->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexDeleted()
	{
		$table_data = Cu::onlyTrashed()->with('Villages','Districts','Regencies','Provinces')
		->withCount('hasTp')
		->withCount('hasSimpanan')
		->withCount('hasPinjaman')
		->withCount('hasSimpananJalinan')
		->withCount('hasPinjamanJalinan')
		->withCount('hasManajemen')
		->withCount('hasPengurus')
		->withCount('hasPengawas')
		->withCount('hasKomite')
		->withCount('hasPenasihat')
		->withCount('hasSeniorManajer')
		->withCount('hasManajer')
		->withCount('hasSupervisor')
		->withCount('hasStaf')
		->withCount('hasKontrak')
		->withCount('hasAktivisTidakAktif')
		->withCount('hasUser')
		->withCount('hasArtikel')
		->withCount('hasAnggotaCu')
		->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function get()
	{
		$table_data = Cu::where('id','!=',0)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function getHeader()
	{
		$table_data = Cu::with('hasTp')->where('id','!=',0)->select('id','name','no_ba')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}
	
	public function getBirthday()
	{		
		$table_data = Cu::whereRaw('DATE_FORMAT(ultah, "%d-%m") = DATE_FORMAT(CURDATE(), "%d-%m")')->select('id','name','ultah', DB::raw('TIMESTAMPDIFF(YEAR, ultah, CURDATE()) AS usia'))->dontRemember()->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}
  
  public function getPus($id)
	{
		$table_data = Cu::where('id_pus','=',$id)->select('id','no_ba','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Cu::initialize(),
					'rules' => Cu::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Cu::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request->gambar,'', $name);
		else
			$fileName = '';

		$kelas = Cu::create($request->except('gambar') + [
			'gambar' => $fileName
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Cu ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = Cu::with('Villages','Districts','Regencies','Provinces')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, Cu::$rules);

		$name = $request->name;

		$kelas = Cu::findOrFail($id);

		// processing single image upload
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
		$kelas = Cu::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function restore($id)
	{
		$kelas = Cu::onlyTrashed()->findOrFail($id);
		$name = $kelas->name;

		$kelas->restore();

		return response()
			->json([
				'restored' => true,
				'message' =>  $this->message. ' ' .$name. 'berhasil diaktifkan kembali'
			]);
	}

	public function count()
	{
			$table_data = Cu::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
		$time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\Cu')->where('created_at','>=',$time)->orderBy('created_at','desc')->take(5);

    $history = collect();		
		foreach($table_data as $hs){
			$n = collect($hs);
			$n->put('user',$hs->userResponsible());
			$history->push($n);
		}

		return response()
			->json([
				'model' => $history
				// 'model' => []
			]);
  }
}