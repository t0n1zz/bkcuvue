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

	public function index($status, $awal, $akhir)
	{
		if($awal != 'undefined' && $akhir != 'undefined'){
			$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->whereBetween('tanggal_pencairan',[$awal, $akhir])->where('status_klaim',$status)->advancedFilter();
		}else if($awal != 'undefined'){
			$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->where('tanggal_pencairan',$awal)->where('status_klaim',$status)->advancedFilter();
		}else{
			$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->where('status_klaim',$status)->advancedFilter();
		}

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexCu($id, $status, $awal, $akhir)
	{
		if($awal != 'undefined' && $akhir != 'undefined'){
			$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->whereBetween('tanggal_pencairan',[$awal, $akhir])->where('status_klaim',$status)->whereHas('anggota_cu_cu', function($query) use ($id){ 
				$query->where('cu_id',$id); 
			})->advancedFilter();
		}else if($awal != 'undefined'){
			$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->where('tanggal_pencairan',$awal)->where('status_klaim',$status)->whereHas('anggota_cu_cu', function($query) use ($id){ 
				$query->where('cu_id',$id); 
			})->advancedFilter();
		}else{
			$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->where('status_klaim',$status)->whereHas('anggota_cu_cu', function($query) use ($id){ 
				$query->where('cu_id',$id); 
			})->advancedFilter();
		}

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexCair($tanggal_pencairan)
	{
		$table_data = DB::table('jalinan_klaim')
		->join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
		->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
		->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
		->select('cu.no_ba','cu.name as cu_name','anggota_cu_cu.cu_id',
			DB::raw('COUNT(case when status_klaim="3" then 1 end) AS status_klaim_setuju'), 
			DB::raw('COUNT(case when status_klaim="4" then 1 end) AS status_klaim_cair'), 
			DB::raw('COUNT(case when anggota_cu.kelamin="Pria" then 1 end) AS pria'), 
			DB::raw('COUNT(case when anggota_cu.kelamin="Wanita" then 1 end) AS wanita'), 
			DB::raw('COUNT(case when tipe="meninggal" then 1 end) AS meninggal'), 
			DB::raw('COUNT(case when tipe="cacat" then 1 end) AS cacat'), 
			DB::raw('SUM(tunas_disetujui) AS tunas_disetujui'), 
			DB::raw('SUM(lintang_disetujui) AS lintang_disetujui'),
			DB::raw('SUM(tunas_disetujui) + SUM(lintang_disetujui) as tot_disetujui')
		)
		->where('tanggal_pencairan', $tanggal_pencairan)
		->groupBy('anggota_cu_cu.cu_id')
		->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexLaporanCair($awal, $akhir)
	{
		$table_data = DB::table('jalinan_klaim')
		->join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
		->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
		->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
		->select('cu.no_ba','cu.name as cu_name','anggota_cu_cu.cu_id',
			DB::raw('COUNT(case when status_klaim="3" then 1 end) AS status_klaim_setuju'), 
			DB::raw('COUNT(case when status_klaim="4" then 1 end) AS status_klaim_cair'), 
			DB::raw('COUNT(case when anggota_cu.kelamin="Pria" then 1 end) AS pria'), 
			DB::raw('COUNT(case when anggota_cu.kelamin="Wanita" then 1 end) AS wanita'), 
			DB::raw('COUNT(case when tipe="meninggal" then 1 end) AS meninggal'), 
			DB::raw('COUNT(case when tipe="cacat" then 1 end) AS cacat'), 
			DB::raw('SUM(tunas_disetujui) AS tunas_disetujui'), 
			DB::raw('SUM(lintang_disetujui) AS lintang_disetujui'),
			DB::raw('SUM(tunas_disetujui) + SUM(lintang_disetujui) as tot_disetujui')
		)
		->where('status_klaim','>=',4)
		->whereBetween('tanggal_pencairan',[$awal, $akhir])
		->groupBy('anggota_cu_cu.cu_id')
		->get();

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
		$kelas = JalinanKlaim::create($request->all());

		$this->updateStatusAnggotaCu($request->anggota_cu_id, $request->tipe);
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil ditambah'
			]);	
	}

	public function edit($nik, $cu)
	{
		$kelas = JalinanKlaim::with('anggota_cu','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->where('anggota_cu_cu_id', $cu)->whereHas('anggota_cu', function($query) use ($nik){ 
			$query->where('nik',$nik); 
		})->first();

		if($kelas){
			return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
		}else{
			return $this->create();
		}
	}

	public function update(Request $request, $id)
	{
		$kelas = JalinanKlaim::findOrFail($id);

		$anggota_cu_id = $kelas->anggota_cu_id;

		$kelas->update($request->all());	

		$this->updateStatusAnggotaCu($anggota_cu_id, $request->tipe);

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

		if($kelas->status_klaim == 1 || $kelas->status_klaim == 2){
			$message = "Klaim JALINAN ditolak";
			$kelas->keterangan_klaim = $request->keterangan_klaim;
			$kelas->tunas_disetujui = NULL;
			$kelas->lintang_disetujui = NULL;
			$kelas->tanggal_pencairan = NULL;
		}else if($kelas->status_klaim == 3){
			$message = "Klaim JALINAN disetujui";
			$kelas->keterangan_klaim = $request->keterangan_klaim;
			$kelas->tunas_disetujui = $request->tunas_disetujui;
			$kelas->lintang_disetujui = $request->lintang_disetujui;
			$kelas->tanggal_pencairan = $request->tanggal_pencairan;
		}else if($kelas->status_klaim == 0){
			$message = "Klaim JALINAN menunggu";
			$kelas->keterangan_klaim = NULL;
			$kelas->tunas_disetujui = NULL;
			$kelas->lintang_disetujui = NULL;
			$kelas->tanggal_pencairan = NULL;
		}

		$kelas->update();

		$this->updateStatusAnggotaCu($anggota_cu_id, $request->tipe);
	
		return response()
			->json([
				'saved' => true,
				'message' => $message
			]);
	}

	public function updateStatusAnggotaCu($id, $status){
		$kelas = AnggotaCu::findOrFail($id);
		$kelas->status_jalinan = $status;
		$kelas->update();
	}

	public function UpdateCair($id, $awal, $akhir){
		if($awal != 'undefined' && $akhir != 'undefined'){
			$kelas = JalinanKlaim::with('anggota_cu_cu')->where('status_klaim',3)->whereBetween('tanggal_pencairan',[$awal, $akhir])->whereHas('anggota_cu_cu', function($query) use ($id){ 
				$query->where('cu_id',$id); 
			});	
		}else{
			$kelas = JalinanKlaim::with('anggota_cu_cu')->where('status_klaim',3)->where('tanggal_pencairan',$awal)->whereHas('anggota_cu_cu', function($query) use ($id){ 
				$query->where('cu_id',$id); 
			});	
		}

		$kelas->update(['status_klaim' => 4]);
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil dicairkan'
			]);
	}

	public function UpdateCairBatal($id, $awal, $akhir){
		if($awal != 'undefined' && $akhir != 'undefined'){
			$kelas = JalinanKlaim::with('anggota_cu_cu')->where('status_klaim',4)->whereBetween('tanggal_pencairan',[$awal, $akhir])->whereHas('anggota_cu_cu', function($query) use ($id){ 
				$query->where('cu_id',$id); 
			});	
		}else{
			$kelas = JalinanKlaim::with('anggota_cu_cu')->where('status_klaim',4)->where('tanggal_pencairan',$awal)->whereHas('anggota_cu_cu', function($query) use ($id){ 
				$query->where('cu_id',$id); 
			});	
		}

		$kelas->update(['status_klaim' => 3]);
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil dicairkan'
			]);
	}

	public function UpdateCairAll($awal, $akhir){
		if($awal != 'undefined' && $akhir != 'undefined'){
			$kelas = JalinanKlaim::where('status_klaim',3)->whereBetween('tanggal_pencairan',[$awal, $akhir])->update(['status_klaim' => 4]);	
		}else{
			$kelas = JalinanKlaim::where('status_klaim',3)->where('tanggal_pencairan',$awal)->update(['status_klaim' => 4]);	
		}
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil dicairkan'
			]);
	}

	public function destroy($id)
	{
		$kelas = JalinanKlaim::findOrFail($id);
		$anggota_cu_id = $kelas->anggota_cu_id;

		$kelas->delete();

		$this->updateStatusAnggotaCu($anggota_cu_id, NULL);

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

	public function cekData($id){
		$kelas = JalinanKlaim::where('anggota_cu_id', $id)->first();
		
		if($kelas){
			return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
		}else{
			return $this->create();
		}
	}

	public function getPencairan()
	{
		$table_data = JalinanKlaim::where('status_klaim',3)->select('tanggal_pencairan')->distinct()->orderBy('tanggal_pencairan','DESC')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}
}