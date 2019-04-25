<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Image;
use App\AnggotaCu;
use App\JalinanKlaim;
use App\Support\Helper;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class JalinanKlaimController extends Controller{

	protected $message = "Klaim JALINAN";

	public function index($status)
	{
		$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->where('status_klaim',$status)->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexCu($id, $status)
	{
		$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->where('status_klaim',$status)->whereHas('anggota_cu_cu', function($query) use ($id){ 
			$query->where('cu_id',$id); 
		})->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => JalinanKlaim::initialize(),
					'rules' => JalinanKlaim::$rules,
					'option' => []
			]);
	}


	public function store(Request $request)
	{
		JalinanKlaim::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil ditambah'
			]);	
	}

	public function edit($id)
	{
		$kelas = JalinanKlaim::with('anggota_cu','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->whereHas('anggota_cu', function($query) use ($id){ 
			$query->where('nik',$id); 
		})->first();

		return response()
			->json([
					'form' => $kelas,
					'option' => []
			]);
	}

	public function update(Request $request, $id)
	{
		$kelas = JalinanKlaim::findOrFail($id);

		$kelas->update($request->all());	

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil diubah'
			]);
	}

	public function updateStatus(Request $request, $id)
	{
		$kelas = JalinanKlaim::findOrFail($id);

		$kelas->status_klaim = $request->status;

		$anggota_cu_id = $kelas->anggota_cu_id;
		$tipe = $kelas->tipe;

		if($kelas->status_klaim == 1){
			$message = "Klaim JALINAN dicairkan";
		}else if($kelas->status_klaim == 2){
			$message = "Klaim JALINAN ditolak";
		}else if($kelas->status_klaim == 0){
			$message = "Klaim JALINAN menunggu";
		}

		$kelas->update();

		$kelas2 = AnggotaCu::findOrFail($anggota_cu_id);

		if($request->status == 1){
			$kelas2->status_jalinan = $tipe;
		}else{
			$kelas2->status_jalinan = 0;
		}

		$kelas2->update();

		return response()
			->json([
				'saved' => true,
				'message' => $message
			]);
	}

	public function destroy($id)
	{
		$kelas = JalinanKlaim::findOrFail($id);
		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' berhasil dihapus'
			]);
	}

	public function count()
	{
			$table_data = JalinanKlaim::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
    $time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\JalinanKlaim')->where('created_at','>=',$time)->orderBy('created_at','desc')->get();

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
	
	public function cariData($nik)
	{
		$table_data = AnggotaCu::with('anggota_cu','anggota_produk_cu','Villages','Districts','Regencies','Provinces')->where('nik',$nik)->first();
		
		if($table_data){
			return response()
			->json([
				'model' => $table_data
			]);
		}else{
			return response()
			->json([
					'form' => AnggotaCu::initialize(),
					'rules' => AnggotaCu::$rules,
					'option' => []
			]);
		}
	}
}