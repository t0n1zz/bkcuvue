<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Image;
use App\User;
use App\AnggotaCu;
use App\JalinanKlaim;
use App\JalinanKlaimStatus;
use App\Support\Helper;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;
use App\Support\NotificationHelper;

class JalinanKlaimController extends Controller{

	protected $imagepath = 'images/jalinan/';
	protected $message = "Klaim JALINAN";
	protected $width = 300;
	protected $height = 424;

	public function index($status, $awal, $akhir)
	{
		if($awal != 'undefined' && $akhir != 'undefined'){
			$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Provinces','anggota_cu.Regencies','anggota_cu.Districts','anggota_cu.Villages')->whereBetween('tanggal_pencairan',[$awal, $akhir])->where('status_klaim',$status)
			->advancedFilter();
		}else if($awal != 'undefined'){
			$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Provinces','anggota_cu.Regencies','anggota_cu.Districts','anggota_cu.Villages')->where('tanggal_pencairan',$awal)->where('status_klaim',$status)->advancedFilter();
		}else{
			$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Provinces','anggota_cu.Regencies','anggota_cu.Districts','anggota_cu.Villages')->where('status_klaim',$status)->advancedFilter();
		}

		$table_data = $this->formatQuery($table_data);

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexCu($cu, $tp, $status, $awal, $akhir)
	{
		if($awal != 'undefined' && $akhir != 'undefined'){
			$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Provinces','anggota_cu.Regencies','anggota_cu.Districts','anggota_cu.Villages')->whereBetween('tanggal_pencairan',[$awal, $akhir])->where('status_klaim',$status)->whereHas('anggota_cu_cu', function($query) use ($cu, $tp){ 
				if($tp != 'semua'){
					$query->where('cu_id',$cu)->where('tp_id', $tp); 
				}else{
					$query->where('cu_id',$cu); 
				}
			})->advancedFilter();
		}else if($awal != 'undefined'){
			$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Provinces','anggota_cu.Regencies','anggota_cu.Districts','anggota_cu.Villages')->where('tanggal_pencairan',$awal)->where('status_klaim',$status)->whereHas('anggota_cu_cu', function($query) use ($cu , $tp){ 
				if($tp != 'semua'){
					$query->where('cu_id',$cu)->where('tp_id', $tp); 
				}else{
					$query->where('cu_id',$cu); 
				} 
			})->advancedFilter();
		}else{
			$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Provinces','anggota_cu.Regencies','anggota_cu.Districts','anggota_cu.Villages')->where('status_klaim',$status)->whereHas('anggota_cu_cu', function($query) use ($cu, $tp){ 
				if($tp != 'semua'){
					$query->where('cu_id',$cu)->where('tp_id', $tp); 
				}else{
					$query->where('cu_id',$cu); 
				}
			})->advancedFilter();
		}

		$table_data = $this->formatCuQuery($table_data);

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
		->select(DB::raw($this->queryCair()))
		->whereNull('jalinan_klaim.deleted_at')
		->where('tanggal_pencairan', $tanggal_pencairan)
		->groupBy('anggota_cu_cu.cu_id')
		->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function queryCair(){
		return 'MAX(cu.no_ba) as no_ba,
		MAX(cu.name) as kategori,
		MAX(anggota_cu_cu.cu_id) as cu_id,
		COUNT(CASE WHEN status_klaim="4" THEN 1 END) AS status_klaim_setuju, 
		COUNT(CASE WHEN status_klaim="5" THEN 1 WHEN status_klaim="6" THEN 1 END) AS status_klaim_cair, 
		COUNT(CASE WHEN anggota_cu.kelamin="LAKI-LAKI" THEN 1 END) AS lakilaki, 
		COUNT(CASE WHEN anggota_cu.kelamin="PEREMPUAN" THEN 1 END) AS perempuan, 
		COUNT(CASE WHEN tipe="MENINGGAL" THEN 1 END) AS meninggal, 
		COUNT(CASE WHEN tipe="CACAT" THEN 1 END) AS cacat, 
		SUM(tunas_diajukan) AS tunas_diajukan, 
		SUM(lintang_diajukan) AS lintang_diajukan,
		SUM(tunas_diajukan) + SUM(lintang_diajukan) as tot_diajukan,
		SUM(tunas_disetujui) AS tunas_disetujui, 
		SUM(lintang_disetujui) AS lintang_disetujui,
		SUM(tunas_disetujui) + SUM(lintang_disetujui) as tot_disetujui,
		COUNT(*) as total';
	}

	public function indexLaporanCu($status, $awal, $akhir)
	{
		if($status == '4' || $status == '5' || $status == '6'){
			$table_data = DB::table('jalinan_klaim')
			->join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
			->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
			->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
			->select(DB::raw($this->queryCair()))
			->whereNull('jalinan_klaim.deleted_at')
			->where('status_klaim', $status)
			->whereBetween('tanggal_pencairan',[$awal, $akhir])
			->groupBy('anggota_cu_cu.cu_id')
			->get();
		}else{
			$table_data = DB::table('jalinan_klaim')
			->join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
			->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
			->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
			->select(DB::raw($this->queryCair()))
			->whereNull('jalinan_klaim.deleted_at')
			->where('status_klaim', $status)
			->whereBetween('jalinan_klaim.created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])
			->groupBy('anggota_cu_cu.cu_id')
			->get();
		}
		
		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexLaporanCuDetail($cu, $status, $awal, $akhir)
	{
		if($cu == 'semua'){
			if($status == '4' || $status == '5' || $status == '6'){
				$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Provinces','anggota_cu.Regencies','anggota_cu.Districts','anggota_cu.Villages')->whereBetween('tanggal_pencairan',[$awal, $akhir])->where('status_klaim',$status)->advancedFilter();
			}else{
				$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Provinces','anggota_cu.Regencies','anggota_cu.Districts','anggota_cu.Villages')->whereBetween('created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])->where('status_klaim',$status)->advancedFilter();
			}
		}else{
			if($status == '4' || $status == '5' || $status == '6'){
				$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Provinces','anggota_cu.Regencies','anggota_cu.Districts','anggota_cu.Villages')->whereBetween('tanggal_pencairan',[$awal, $akhir])->where('status_klaim',$status)->whereHas('anggota_cu_cu', function($query) use ($cu){ 
					$query->where('cu_id',$cu); 
				})->advancedFilter();
			}else{
				$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Provinces','anggota_cu.Regencies','anggota_cu.Districts','anggota_cu.Villages')->whereBetween('created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])->where('status_klaim',$status)->whereHas('anggota_cu_cu', function($query) use ($cu){ 
					$query->where('cu_id',$cu); 
				})->advancedFilter();
			}
		}

		$table_data = $this->formatCuQuery($table_data);

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexLaporanPenyebab($cu, $status, $awal, $akhir){
		if($cu == 'semua'){
			if($status == '4' || $status == '5' || $status == '6'){
				$table_data = JalinanKlaim::join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
				->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
				->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
				->select(DB::raw('
					COUNT(DISTINCT(cu.no_ba)) as cu,
					MAX(jalinan_klaim.created_at) as created_at,
					MAX(kategori_penyakit) as kategori,
					COUNT(case when anggota_cu.kelamin="LAKI-LAKI" then 1 end) AS lakilaki, 
					COUNT(case when anggota_cu.kelamin="PEREMPUAN" then 1 end) AS perempuan,
					COUNT(case when tipe="MENINGGAL" then 1 end) AS meninggal, 
					COUNT(case when tipe="CACAT" then 1 end) AS cacat, 
					COUNT(*) as total,
					SUM(tunas_diajukan) AS tunas_diajukan, 
					SUM(lintang_diajukan) AS lintang_diajukan,
					SUM(tunas_diajukan) + SUM(lintang_diajukan) as tot_diajukan,
					SUM(tunas_disetujui) AS tunas_disetujui, 
					SUM(lintang_disetujui) AS lintang_disetujui,
					SUM(tunas_disetujui) + SUM(lintang_disetujui) as tot_disetujui'))	
				->where('status_klaim',$status)
				->whereBetween('tanggal_pencairan',[$awal, $akhir])
				->groupBy('kategori_penyakit')
				->get();
			}else{
				$table_data = JalinanKlaim::join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
				->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
				->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
				->select(DB::raw('
					COUNT(DISTINCT(cu.no_ba)) as cu,
					MAX(jalinan_klaim.created_at) as created_at,
					MAX(kategori_penyakit) as kategori,
					COUNT(case when anggota_cu.kelamin="LAKI-LAKI" then 1 end) AS lakilaki, 
					COUNT(case when anggota_cu.kelamin="PEREMPUAN" then 1 end) AS perempuan,
					COUNT(case when tipe="MENINGGAL" then 1 end) AS meninggal, 
					COUNT(case when tipe="CACAT" then 1 end) AS cacat, 
					COUNT(*) as total,
					SUM(tunas_diajukan) AS tunas_diajukan, 
					SUM(lintang_diajukan) AS lintang_diajukan,
					SUM(tunas_diajukan) + SUM(lintang_diajukan) as tot_diajukan,
					SUM(tunas_disetujui) AS tunas_disetujui, 
					SUM(lintang_disetujui) AS lintang_disetujui,
					SUM(tunas_disetujui) + SUM(lintang_disetujui) as tot_disetujui'))	
				->where('status_klaim',$status)
				->whereBetween('jalinan_klaim.created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])
				->groupBy('kategori_penyakit')
				->get();
			}
		}else{
			if($status == '4' || $status == '5' || $status == '6'){
				$table_data = JalinanKlaim::whereHas('anggota_cu_cu', 			
				function($query) use ($cu){ 
					$query->where('anggota_cu_cu.cu_id',$cu); 
				})->join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
				->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
				->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
				->select(DB::raw('
					COUNT(DISTINCT(cu.no_ba)) as cu,
					MAX(jalinan_klaim.created_at) as created_at,
					MAX(kategori_penyakit) as kategori,
					COUNT(case when anggota_cu.kelamin="LAKI-LAKI" then 1 end) AS lakilaki, 
					COUNT(case when anggota_cu.kelamin="PEREMPUAN" then 1 end) AS perempuan,
					COUNT(case when tipe="MENINGGAL" then 1 end) AS meninggal, 
					COUNT(case when tipe="CACAT" then 1 end) AS cacat, 
					COUNT(*) as total,
					SUM(tunas_diajukan) AS tunas_diajukan, 
					SUM(lintang_diajukan) AS lintang_diajukan,
					SUM(tunas_diajukan) + SUM(lintang_diajukan) as tot_diajukan,
					SUM(tunas_disetujui) AS tunas_disetujui, 
					SUM(lintang_disetujui) AS lintang_disetujui,
					SUM(tunas_disetujui) + SUM(lintang_disetujui) as tot_disetujui'))	
				->where('status_klaim',$status)
				->whereBetween('tanggal_pencairan',[$awal, $akhir])
				->groupBy('kategori_penyakit')
				->get();
			}else{
				$table_data = JalinanKlaim::whereHas('anggota_cu_cu', 			
				function($query) use ($cu){ 
					$query->where('anggota_cu_cu.cu_id',$cu); 
				})->join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
				->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
				->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
				->select(DB::raw('
					COUNT(DISTINCT(cu.no_ba)) as cu,
					MAX(jalinan_klaim.created_at) as created_at,
					MAX(kategori_penyakit) as kategori,
					COUNT(case when anggota_cu.kelamin="LAKI-LAKI" then 1 end) AS lakilaki, 
					COUNT(case when anggota_cu.kelamin="PEREMPUAN" then 1 end) AS perempuan,
					COUNT(case when tipe="MENINGGAL" then 1 end) AS meninggal, 
					COUNT(case when tipe="CACAT" then 1 end) AS cacat, 
					COUNT(*) as total,
					SUM(tunas_diajukan) AS tunas_diajukan, 
					SUM(lintang_diajukan) AS lintang_diajukan,
					SUM(tunas_diajukan) + SUM(lintang_diajukan) as tot_diajukan,
					SUM(tunas_disetujui) AS tunas_disetujui, 
					SUM(lintang_disetujui) AS lintang_disetujui,
					SUM(tunas_disetujui) + SUM(lintang_disetujui) as tot_disetujui'))	
				->where('status_klaim',$status)
				->whereBetween('jalinan_klaim.created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])
				->groupBy('kategori_penyakit')
				->get();
			}
		}

		return response()
			->json([
				'model' => $table_data
			]);
	}


	public function indexLaporanPenyebabDetail($cu, $status, $kategori, $awal, $akhir)
	{
		if($cu == 'semua'){
			if($status == '4' || $status == '5' || $status == '6'){
				if($kategori == 'semua'){
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Provinces','anggota_cu.Regencies','anggota_cu.Districts','anggota_cu.Villages')->whereBetween('tanggal_pencairan',[$awal, $akhir])->where('status_klaim',$status)->advancedFilter();
				}else{
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Provinces','anggota_cu.Regencies','anggota_cu.Districts','anggota_cu.Villages')->whereBetween('tanggal_pencairan',[$awal, $akhir])->where('status_klaim',$status)->where('kategori_penyakit',$kategori)->advancedFilter();
				}
			}else{
				if($kategori == 'semua'){
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Provinces','anggota_cu.Regencies','anggota_cu.Districts','anggota_cu.Villages')->whereBetween('created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])->where('status_klaim',$status)->advancedFilter();
				}else{
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Provinces','anggota_cu.Regencies','anggota_cu.Districts','anggota_cu.Villages')->whereBetween('created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])->where('status_klaim',$status)->where('kategori_penyakit',$kategori)->advancedFilter();
				}
			}

			$table_data = $this->formatQuery($table_data);
		}else{
			if($status == '4' || $status == '5' || $status == '6'){
				if($kategori == 'semua'){
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->whereBetween('tanggal_pencairan',[$awal, $akhir])->where('status_klaim',$status)->whereHas('anggota_cu_cu', function($query) use ($cu){ 
						$query->where('cu_id',$cu); 
					})->advancedFilter();
				}else{
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->whereBetween('tanggal_pencairan',[$awal, $akhir])->where('status_klaim',$status)->whereHas('anggota_cu_cu', function($query) use ($cu){ 
						$query->where('cu_id',$cu); 
					})->where('kategori_penyakit',$kategori)->advancedFilter();
				}
			}else{
				if($kategori == 'semua'){
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->whereBetween('created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])->where('status_klaim',$status)->whereHas('anggota_cu_cu', function($query) use ($cu){ 
						$query->where('cu_id',$cu); 
					})->advancedFilter();
				}else{
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->whereBetween('created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])->where('status_klaim',$status)->whereHas('anggota_cu_cu', function($query) use ($cu){ 
						$query->where('cu_id',$cu); 
					})->where('kategori_penyakit',$kategori)->advancedFilter();
				}
			}

			$table_data = $this->formatCuQuery($table_data);
		}
		
		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexLaporanUsia($cu, $status, $awal, $akhir){
		if($cu == 'semua'){
			if($status == '4' || $status == '5' || $status == '6'){
				$table_data = JalinanKlaim::join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
				->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
				->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
				->select(DB::raw('
					COUNT(DISTINCT(cu.no_ba)) as cu,
					MAX(anggota_cu.tanggal_lahir) as tanggal_lahir,
					MAX(jalinan_klaim.created_at) as created_at,
					COUNT(case when anggota_cu.kelamin="LAKI-LAKI" then 1 end) AS lakilaki, 
					COUNT(case when anggota_cu.kelamin="PEREMPUAN" then 1 end) AS perempuan,
					COUNT(case when tipe="MENINGGAL" then 1 end) AS meninggal, 
					COUNT(case when tipe="CACAT" then 1 end) AS cacat, 
					TIMESTAMPDIFF(YEAR, max(anggota_cu.tanggal_lahir), CURDATE()) AS usia,
					COUNT(*) as total,
					SUM(tunas_diajukan) AS tunas_diajukan, 
					SUM(lintang_diajukan) AS lintang_diajukan,
					SUM(tunas_diajukan) + SUM(lintang_diajukan) as tot_diajukan,
					SUM(tunas_disetujui) AS tunas_disetujui, 
					SUM(lintang_disetujui) AS lintang_disetujui,
					SUM(tunas_disetujui) + SUM(lintang_disetujui) as tot_disetujui
				'))->addSelect(DB::raw('
					CASE
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 1 THEN "0 s.d. 1 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 1 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 10 THEN "> 1 s.d. 10 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 10 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 20 THEN "> 10 s.d. 20 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 20 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 30 THEN "> 20 s.d. 30 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 30 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 40 THEN "> 30 s.d. 40 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 40 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 50 THEN "> 40 s.d. 50 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 50 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 60 THEN "> 50 s.d. 60 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 60 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 70 THEN "> 60 s.d. 70 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 70 THEN "> 70 tahun"
					END as kategori,
					COUNT(*) as total
				'))
				->where('status_klaim',$status)
				->whereBetween('tanggal_pencairan',[$awal, $akhir])
				->groupBy('kategori')
				->get();
			}else{
				$table_data = JalinanKlaim::join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
				->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
				->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
				->select(DB::raw('
					COUNT(DISTINCT(cu.no_ba)) as cu,
					MAX(anggota_cu.tanggal_lahir) as tanggal_lahir,
					MAX(jalinan_klaim.created_at) as created_at,
					COUNT(case when anggota_cu.kelamin="LAKI-LAKI" then 1 end) AS lakilaki, 
					COUNT(case when anggota_cu.kelamin="PEREMPUAN" then 1 end) AS perempuan,
					COUNT(case when tipe="MENINGGAL" then 1 end) AS meninggal, 
					COUNT(case when tipe="CACAT" then 1 end) AS cacat, 
					TIMESTAMPDIFF(YEAR, max(anggota_cu.tanggal_lahir), CURDATE()) AS usia,
					COUNT(*) as total,
					SUM(tunas_diajukan) AS tunas_diajukan, 
					SUM(lintang_diajukan) AS lintang_diajukan,
					SUM(tunas_diajukan) + SUM(lintang_diajukan) as tot_diajukan,
					SUM(tunas_disetujui) AS tunas_disetujui, 
					SUM(lintang_disetujui) AS lintang_disetujui,
					SUM(tunas_disetujui) + SUM(lintang_disetujui) as tot_disetujui
				'))->addSelect(DB::raw('
					CASE
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 1 THEN "0 s.d. 1 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 1 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 10 THEN "> 1 s.d. 10 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 10 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 20 THEN "> 10 s.d. 20 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 20 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 30 THEN "> 20 s.d. 30 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 30 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 40 THEN "> 30 s.d. 40 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 40 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 50 THEN "> 40 s.d. 50 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 50 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 60 THEN "> 50 s.d. 60 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 60 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 70 THEN "> 60 s.d. 70 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 70 THEN "> 70 tahun"
					END as kategori,
					COUNT(*) as total
				'))
				->where('status_klaim',$status)
				->whereBetween('jalinan_klaim.created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])
				->groupBy('kategori')
				->get();
			}
		}else{
			if($status == '4' || $status == '5' || $status == '6'){
				$table_data = JalinanKlaim::whereHas('anggota_cu_cu', 			
				function($query) use ($cu){ 
					$query->where('anggota_cu_cu.cu_id',$cu); 
				})
				->join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
				->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
				->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
				->select(DB::raw('
					COUNT(DISTINCT(cu.no_ba)) as cu,
					MAX(anggota_cu.tanggal_lahir) as tanggal_lahir,
					MAX(jalinan_klaim.created_at) as created_at,
					COUNT(case when anggota_cu.kelamin="LAKI-LAKI" then 1 end) AS lakilaki, 
					COUNT(case when anggota_cu.kelamin="PEREMPUAN" then 1 end) AS perempuan,
					COUNT(case when tipe="MENINGGAL" then 1 end) AS meninggal, 
					COUNT(case when tipe="CACAT" then 1 end) AS cacat, 
					TIMESTAMPDIFF(YEAR, max(anggota_cu.tanggal_lahir), CURDATE()) AS usia,
					COUNT(*) as total,
					SUM(tunas_diajukan) AS tunas_diajukan, 
					SUM(lintang_diajukan) AS lintang_diajukan,
					SUM(tunas_diajukan) + SUM(lintang_diajukan) as tot_diajukan,
					SUM(tunas_disetujui) AS tunas_disetujui, 
					SUM(lintang_disetujui) AS lintang_disetujui,
					SUM(tunas_disetujui) + SUM(lintang_disetujui) as tot_disetujui
				'))->addSelect(DB::raw('
					CASE
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 1 THEN "0 s.d. 1 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 1 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 10 THEN "> 1 s.d. 10 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 10 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 20 THEN "> 10 s.d. 20 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 20 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 30 THEN "> 20 s.d. 30 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 30 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 40 THEN "> 30 s.d. 40 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 40 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 50 THEN "> 40 s.d. 50 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 50 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 60 THEN "> 50 s.d. 60 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 60 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 70 THEN "> 60 s.d. 70 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 70 THEN "> 70 tahun"
					END as kategori,
					COUNT(*) as total
				'))
				->where('status_klaim',$status)
				->whereBetween('tanggal_pencairan',[$awal, $akhir])
				->groupBy('kategori')
				->get();
			}else{
				$table_data = JalinanKlaim::whereHas('anggota_cu_cu', 			
				function($query) use ($cu){ 
					$query->where('anggota_cu_cu.cu_id',$cu); 
				})
				->join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
				->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
				->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
				->select(DB::raw('
					COUNT(DISTINCT(cu.no_ba)) as cu,
					MAX(anggota_cu.tanggal_lahir) as tanggal_lahir,
					MAX(jalinan_klaim.created_at) as created_at,
					COUNT(case when anggota_cu.kelamin="LAKI-LAKI" then 1 end) AS lakilaki, 
					COUNT(case when anggota_cu.kelamin="PEREMPUAN" then 1 end) AS perempuan,
					COUNT(case when tipe="MENINGGAL" then 1 end) AS meninggal, 
					COUNT(case when tipe="CACAT" then 1 end) AS cacat, 
					TIMESTAMPDIFF(YEAR, max(anggota_cu.tanggal_lahir), CURDATE()) AS usia,
					COUNT(*) as total,
					SUM(tunas_diajukan) AS tunas_diajukan, 
					SUM(lintang_diajukan) AS lintang_diajukan,
					SUM(tunas_diajukan) + SUM(lintang_diajukan) as tot_diajukan,
					SUM(tunas_disetujui) AS tunas_disetujui, 
					SUM(lintang_disetujui) AS lintang_disetujui,
					SUM(tunas_disetujui) + SUM(lintang_disetujui) as tot_disetujui
				'))->addSelect(DB::raw('
					CASE
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 1 THEN "0 s.d. 1 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 1 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 10 THEN "> 1 s.d. 10 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 10 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 20 THEN "> 10 s.d. 20 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 20 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 30 THEN "> 20 s.d. 30 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 30 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 40 THEN "> 30 s.d. 40 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 40 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 50 THEN "> 40 s.d. 50 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 50 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 60 THEN "> 50 s.d. 60 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 60 AND TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) <= 70 THEN "> 60 s.d. 70 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu.tanggal_lahir, CURDATE()) > 70 THEN "> 70 tahun"
					END as kategori,
					COUNT(*) as total
				'))
				->where('status_klaim',$status)
				->whereBetween('jalinan_klaim.created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])
				->groupBy('kategori')
				->get();
			}
		}

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexLaporanUsiaDetail($cu, $status, $dari, $ke, $awal, $akhir)
	{
		if($dari != 'semua'){
			$dari = \Carbon\Carbon::now()->subYears($dari)->toDateString();
			$ke = \Carbon\Carbon::now()->subYears($ke)->toDateString();
		}
		
		if($cu == 'semua'){
			if($status == '4' || $status == '5' || $status == '6'){
				if($dari == 'semua'){
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')
					->where('status_klaim',$status)
					->whereBetween('tanggal_pencairan',[$awal, $akhir])->advancedFilter();
				}else{
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')
					->whereHas('anggota_cu', function($query) use ($dari, $ke){ 
						$query->whereBetween('tanggal_lahir',[$dari, $ke]);
					})->where('status_klaim',$status)
					->whereBetween('tanggal_pencairan',[$awal, $akhir])->advancedFilter();
				}
			}else{
				if($dari == 'semua'){
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')
					->where('status_klaim',$status)
					->whereBetween('created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])->advancedFilter();
				}else{
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')
					->whereHas('anggota_cu', function($query) use ($dari, $ke){ 
						$query->whereBetween('tanggal_lahir',[$dari, $ke]);
					})->where('status_klaim',$status)
					->whereBetween('created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])->advancedFilter();
				}
			}
		}else{
			if($status == '4' || $status == '5' || $status == '6'){
				if($dari == 'semua'){
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')
					->where('status_klaim',$status)
					->whereHas('anggota_cu_cu', function($query) use ($cu){ 
						$query->where('cu_id',$cu); 
					})->whereBetween('tanggal_pencairan',[$awal, $akhir])->advancedFilter();
				}else{
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')
					->whereHas('anggota_cu', function($query) use ($dari, $ke){ 
						$query->whereBetween('tanggal_lahir',[$dari, $ke]);
					})->where('status_klaim',$status)
					->whereHas('anggota_cu_cu', function($query) use ($cu){ 
						$query->where('cu_id',$cu); 
					})->whereBetween('tanggal_pencairan',[$awal, $akhir])->advancedFilter();
				}
			}else{
				if($dari == 'semua'){
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')
					->where('status_klaim',$status)
					->whereHas('anggota_cu_cu', function($query) use ($cu){ 
						$query->where('cu_id',$cu); 
					})->whereBetween('created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])->advancedFilter();
				}else{
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')
					->whereHas('anggota_cu', function($query) use ($dari, $ke){ 
						$query->whereBetween('tanggal_lahir',[$dari, $ke]);
					})->where('status_klaim',$status)
					->whereHas('anggota_cu_cu', function($query) use ($cu){ 
						$query->where('cu_id',$cu); 
					})->whereBetween('created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])->advancedFilter();
				}
			}
		}

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexLaporanLama($cu, $status, $awal, $akhir){
		if($cu == 'semua'){
			if($status == '4' || $status == '5' || $status == '6'){
				$table_data = JalinanKlaim::join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
					->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
					->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
					->select(DB::raw('
						COUNT(DISTINCT(cu.no_ba)) as cu,
						max(anggota_cu.tanggal_lahir) as tanggal_lahir,
						Max(jalinan_klaim.created_at) as created_at,
						COUNT(case when anggota_cu.kelamin="LAKI-LAKI" then 1 end) AS lakilaki, 
						COUNT(case when anggota_cu.kelamin="PEREMPUAN" then 1 end) AS perempuan,
						COUNT(case when tipe="MENINGGAL" then 1 end) AS meninggal, 
						COUNT(case when tipe="CACAT" then 1 end) AS cacat, 
						TIMESTAMPDIFF(YEAR, max(anggota_cu.tanggal_lahir), CURDATE()) AS usia,
						TIMESTAMPDIFF(YEAR, max(anggota_cu_cu.tanggal_masuk), CURDATE()) AS lama_menjadi_anggota,
						COUNT(*) as total,
						SUM(tunas_diajukan) AS tunas_diajukan, 
						SUM(lintang_diajukan) AS lintang_diajukan,
						SUM(tunas_diajukan) + SUM(lintang_diajukan) as tot_diajukan,
						SUM(tunas_disetujui) AS tunas_disetujui, 
						SUM(lintang_disetujui) AS lintang_disetujui,
						SUM(tunas_disetujui) + SUM(lintang_disetujui) as tot_disetujui
					'))->addSelect(DB::raw('
						CASE
							WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) <= 1 THEN "0 s.d. 1 tahun"
							WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) > 1 and TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) <= 3 THEN "> 1 s.d. 3 tahun"
							WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) > 3 and TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) <= 5 THEN "> 3 s.d. 5 tahun"
							WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) > 5 and TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) <= 7 THEN "> 5 s.d. 7 tahun"
							WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) > 7 THEN "> 7 tahun"
						END as kategori,
						COUNT(*) as total
					'))
					->where('status_klaim',$status)
					->whereBetween('tanggal_pencairan',[$awal, $akhir])
					->groupBy('kategori')
					->get();
			}else{
				$table_data = JalinanKlaim::join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
				->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
				->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
				->select(DB::raw('
					COUNT(DISTINCT(cu.no_ba)) as cu,
					max(anggota_cu.tanggal_lahir) as tanggal_lahir,
					Max(jalinan_klaim.created_at) as created_at,
					COUNT(case when anggota_cu.kelamin="LAKI-LAKI" then 1 end) AS lakilaki, 
					COUNT(case when anggota_cu.kelamin="PEREMPUAN" then 1 end) AS perempuan,
					COUNT(case when tipe="MENINGGAL" then 1 end) AS meninggal, 
					COUNT(case when tipe="CACAT" then 1 end) AS cacat, 
					TIMESTAMPDIFF(YEAR, max(anggota_cu.tanggal_lahir), CURDATE()) AS usia,
					TIMESTAMPDIFF(YEAR, max(anggota_cu_cu.tanggal_masuk), CURDATE()) AS lama_menjadi_anggota,
					COUNT(*) as total,
					SUM(tunas_diajukan) AS tunas_diajukan, 
					SUM(lintang_diajukan) AS lintang_diajukan,
					SUM(tunas_diajukan) + SUM(lintang_diajukan) as tot_diajukan,
					SUM(tunas_disetujui) AS tunas_disetujui, 
					SUM(lintang_disetujui) AS lintang_disetujui,
					SUM(tunas_disetujui) + SUM(lintang_disetujui) as tot_disetujui
				'))->addSelect(DB::raw('
					CASE
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) <= 1 THEN "0 s.d. 1 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) > 1 and TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) <= 3 THEN "> 1 s.d. 3 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) > 3 and TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) <= 5 THEN "> 3 s.d. 5 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) > 5 and TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) <= 7 THEN "> 5 s.d. 7 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) > 7 THEN "> 7 tahun"
					END as kategori,
					COUNT(*) as total
				'))
				->where('status_klaim',$status)
				->whereBetween('jalinan_klaim.created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])
				->groupBy('kategori')
				->get();
			}
		}else{
			if($status == '4' || $status == '5' || $status == '6'){
				$table_data = JalinanKlaim::whereHas('anggota_cu_cu',
					function($query) use ($cu){ 
						$query->where('anggota_cu_cu.cu_id',$cu); 
					})
					->join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
					->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
					->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
					->select(DB::raw('
						COUNT(DISTINCT(cu.no_ba)) as cu,
						max(anggota_cu.tanggal_lahir) as tanggal_lahir,
						Max(jalinan_klaim.created_at) as created_at,
						COUNT(case when anggota_cu.kelamin="LAKI-LAKI" then 1 end) AS lakilaki, 
						COUNT(case when anggota_cu.kelamin="PEREMPUAN" then 1 end) AS perempuan,
						COUNT(case when tipe="MENINGGAL" then 1 end) AS meninggal, 
						COUNT(case when tipe="CACAT" then 1 end) AS cacat, 
						TIMESTAMPDIFF(YEAR, max(anggota_cu.tanggal_lahir), CURDATE()) AS usia,
						TIMESTAMPDIFF(YEAR, max(anggota_cu_cu.tanggal_masuk), CURDATE()) AS lama_menjadi_anggota,
						COUNT(*) as total,
						SUM(tunas_diajukan) AS tunas_diajukan, 
						SUM(lintang_diajukan) AS lintang_diajukan,
						SUM(tunas_diajukan) + SUM(lintang_diajukan) as tot_diajukan,
						SUM(tunas_disetujui) AS tunas_disetujui, 
						SUM(lintang_disetujui) AS lintang_disetujui,
						SUM(tunas_disetujui) + SUM(lintang_disetujui) as tot_disetujui
					'))->addSelect(DB::raw('
						CASE
							WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) <= 1 THEN "0 s.d. 1 tahun"
							WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) > 1 and TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) <= 3 THEN "> 1 s.d. 3 tahun"
							WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) > 3 and TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) <= 5 THEN "> 3 s.d. 5 tahun"
							WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) > 5 and TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) <= 7 THEN "> 5 s.d. 7 tahun"
							WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) > 7 THEN "> 7 tahun"
						END as kategori,
						COUNT(*) as total
					'))
					->where('status_klaim', $status)
					->whereBetween('tanggal_pencairan',[$awal, $akhir])
					->groupBy('kategori')
					->get();
			}else{
				$table_data = JalinanKlaim::whereHas('anggota_cu_cu',
				function($query) use ($cu){ 
					$query->where('anggota_cu_cu.cu_id',$cu); 
				})
				->join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
				->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
				->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
				->select(DB::raw('
					COUNT(DISTINCT(cu.no_ba)) as cu,
					max(anggota_cu.tanggal_lahir) as tanggal_lahir,
					Max(jalinan_klaim.created_at) as created_at,
					COUNT(case when anggota_cu.kelamin="LAKI-LAKI" then 1 end) AS lakilaki, 
					COUNT(case when anggota_cu.kelamin="PEREMPUAN" then 1 end) AS perempuan,
					COUNT(case when tipe="MENINGGAL" then 1 end) AS meninggal, 
					COUNT(case when tipe="CACAT" then 1 end) AS cacat, 
					TIMESTAMPDIFF(YEAR, max(anggota_cu.tanggal_lahir), CURDATE()) AS usia,
					TIMESTAMPDIFF(YEAR, max(anggota_cu_cu.tanggal_masuk), CURDATE()) AS lama_menjadi_anggota,
					COUNT(*) as total,
					SUM(tunas_diajukan) AS tunas_diajukan, 
					SUM(lintang_diajukan) AS lintang_diajukan,
					SUM(tunas_diajukan) + SUM(lintang_diajukan) as tot_diajukan,
					SUM(tunas_disetujui) AS tunas_disetujui, 
					SUM(lintang_disetujui) AS lintang_disetujui,
					SUM(tunas_disetujui) + SUM(lintang_disetujui) as tot_disetujui
				'))->addSelect(DB::raw('
					CASE
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) <= 1 THEN "0 s.d. 1 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) > 1 and TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) <= 3 THEN "> 1 s.d. 3 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) > 3 and TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) <= 5 THEN "> 3 s.d. 5 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) > 5 and TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) <= 7 THEN "> 5 s.d. 7 tahun"
						WHEN TIMESTAMPDIFF(YEAR, anggota_cu_cu.tanggal_masuk, CURDATE()) > 7 THEN "> 7 tahun"
					END as kategori,
					COUNT(*) as total
				'))
				->where('status_klaim', $status)
				->whereBetween('jalinan_klaim.created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])
				->groupBy('kategori')
				->get();
			}	
		}

		
		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexLaporanLamaDetail($cu, $status, $dari, $ke, $awal, $akhir)
	{
		if($dari != 'semua'){
			$dari = \Carbon\Carbon::now()->subYears($dari)->toDateString();
			$ke = \Carbon\Carbon::now()->subYears($ke)->toDateString();
		}
		
		if($cu == 'semua'){
			if($status == '4' || $status == '5' || $status == '6'){
				if($dari == 'semua'){
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')
					->where('status_klaim',$status)
					->whereBetween('tanggal_pencairan',[$awal, $akhir])->advancedFilter();
				}else{
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')
					->whereHas('anggota_cu_cu', function($query) use ($dari, $ke){ 
						$query->whereBetween('tanggal_masuk',[$dari, $ke]);
					})->where('status_klaim',$status)
					->whereBetween('tanggal_pencairan',[$awal, $akhir])->advancedFilter();
				}
			}else{
				if($dari == 'semua'){
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')
					->where('status_klaim',$status)
					->whereBetween('created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])->advancedFilter();
				}else{
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')
					->whereHas('anggota_cu_cu', function($query) use ($dari, $ke){ 
						$query->whereBetween('tanggal_masuk',[$dari, $ke]);
					})->where('status_klaim',$status)
					->whereBetween('created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])->advancedFilter();
				}
			}
		}else{
			if($status == '4' || $status == '5' || $status == '6'){
				if($dari == 'semua'){
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')
					->where('status_klaim',$status)
					->whereHas('anggota_cu_cu', function($query) use ($cu){ 
						$query->where('cu_id',$cu); 
					})->whereBetween('tanggal_pencairan',[$awal, $akhir])->advancedFilter();
				}else{
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')
					->whereHas('anggota_cu_cu', function($query) use ($dari, $ke){ 
						$query->whereBetween('tanggal_masuk',[$dari, $ke]);
					})->where('status_klaim',$status)
					->whereHas('anggota_cu_cu', function($query) use ($cu){ 
						$query->where('cu_id',$cu); 
					})->whereBetween('tanggal_pencairan',[$awal, $akhir])->advancedFilter();
				}
			}else{
				if($dari == 'semua'){
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')
					->where('status_klaim',$status)
					->whereHas('anggota_cu_cu', function($query) use ($cu){ 
						$query->where('cu_id',$cu); 
					})->whereBetween('created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])->advancedFilter();
				}else{
					$table_data = JalinanKlaim::with('anggota_cu','anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')
					->whereHas('anggota_cu_cu', function($query) use ($dari, $ke){ 
						$query->whereBetween('tanggal_masuk',[$dari, $ke]);
					})->where('status_klaim',$status)
					->whereHas('anggota_cu_cu', function($query) use ($cu){ 
						$query->where('cu_id',$cu); 
					})->whereBetween('created_at',[date('Y-m-d H:i:s', strtotime($awal)), date('Y-m-d H:i:s', strtotime($akhir))])->advancedFilter();
				}
			}
		}

		return response()
			->json([
				'model' => $table_data
			]);
	}
	
	public function indexLaporanSimpanan($awal, $akhir, $cu){
		$table_data = DB::table('jalinan_klaim')
			->join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
			->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
			->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
			->join('anggota_produk_cu', 'anggota_produk_cu.anggota_cu_id', '=', 'jalinan_klaim.anggota_cu_id')
			->join('produk_cu', 'produk_cu.id', '=', 'anggota_produk_cu.anggota_cu_id')
			->select(DB::raw('
				MAX(anggota_cu_cu.cu_id) as cu_id,
				MAX(CASE WHEN anggota_cu.kelamin="LAKI-LAKI" THEN 1 END) AS lakilaki, 
				MAX(CASE WHEN anggota_cu.kelamin="PEREMPUAN" THEN 1 END) AS perempuan,
				SUM(CASE WHEN anggota_produk_cu.lama_pinjaman IS NULL THEN anggota_produk_cu.saldo END) AS saldo
			'))->addSelect(DB::raw('
				CASE
					WHEN max(saldo) < 1000000 THEN "< 1 Juta"
					WHEN max(saldo) > 1000000 AND max(saldo) < 10000000  THEN "> 1 s.d. 10 Juta"
					WHEN max(saldo) > 10000000 AND max(saldo) < 20000000  THEN "> 10 s.d. 20 Juta"
					WHEN max(saldo) > 20000000 AND max(saldo) < 30000000  THEN "> 20 s.d. 30 Juta"
					WHEN max(saldo) > 30000000 AND max(saldo) < 40000000  THEN "> 30 s.d. 40 Juta"
					WHEN max(saldo) > 40000000 AND max(saldo) < 50000000  THEN "> 40 s.d. 50 Juta"
				END as kategori
			'))
			->where('jalinan',1)
			->where('status_klaim','>=',5)
			->whereBetween('tanggal_pencairan',[$awal, $akhir])
			->groupBy('jalinan_klaim.anggota_cu_id')
			->get();

		$table_data2 = [
			'< 1 Juta' => [
				'kategori' => '< 1 Juta','lakilaki' => 0,'perempuan' => 0,'total' => 0,'saldo' => 0
			],
			'> 1 s.d. 10 Juta' => [
				'kategori' => '> 1 s.d. 10 Juta','lakilaki' => 0,'perempuan' => 0,'total' => 0,'saldo' => 0
			],
			'> 10 s.d. 20 Juta' => [
				'kategori' => '> 10 s.d. 20 Juta','lakilaki' => 0,'perempuan' => 0,'total' => 0,'saldo' => 0
			],
			'> 20 s.d. 30 Juta' => [
				'kategori' => '> 20 s.d. 30 Juta','lakilaki' => 0,'perempuan' => 0,'total' => 0,'saldo' => 0
			],
			'> 40 s.d. 50 Juta' => [
				'kategori' => '> 40 s.d. 50 Juta','lakilaki' => 0,'perempuan' => 0,'total' => 0,'saldo' => 0
			]
		];

		foreach($table_data as $t){
			foreach($table_data2 as $key => $t2){
				if($t->kategori == $key){
					if($t->lakilaki > 0){
						$table_data2[$key]['lakilaki'] =+ 1;
					}else if($t->perempuan > 0){
						$table_data2[$key]['perempuan'] =+ 1;
					}
					$table_data2[$key]['total'] =+ 1;
					$table_data2[$key]['saldo'] =+ $t->saldo;
				}
			}
		}

		return response()
		->json([
			'model' => $table_data2
		]);
	} 

	public function indexLaporanPinjaman($awal, $akhir, $cu){
		$table_data = DB::table('jalinan_klaim')
			->join('anggota_cu_cu', 'anggota_cu_cu.id', '=', 'jalinan_klaim.anggota_cu_cu_id')
			->join('anggota_cu', 'anggota_cu.id', '=', 'anggota_cu_cu.anggota_cu_id')
			->join('cu', 'cu.id', '=', 'anggota_cu_cu.cu_id')
			->join('anggota_produk_cu', 'anggota_produk_cu.anggota_cu_id', '=', 'jalinan_klaim.anggota_cu_id')
			->select(DB::raw('
				MAX(anggota_cu_cu.cu_id) as cu_id,
				MAX(CASE WHEN anggota_cu.kelamin="LAKI-LAKI" THEN 1 END) AS lakilaki, 
				MAX(CASE WHEN anggota_cu.kelamin="PEREMPUAN" THEN 1 END) AS perempuan,
				SUM(CASE WHEN anggota_produk_cu.lama_pinjaman IS NOT NULL THEN anggota_produk_cu.saldo END) AS saldo
			'))->addSelect(DB::raw('
				CASE
					WHEN max(saldo) < 1000000 THEN "< 1 Juta"
					WHEN max(saldo) > 1000000 AND max(saldo) < 10000000  THEN "> 1 s.d. 10 Juta"
					WHEN max(saldo) > 10000000 AND max(saldo) < 20000000  THEN "> 10 s.d. 20 Juta"
					WHEN max(saldo) > 20000000 AND max(saldo) < 30000000  THEN "> 20 s.d. 30 Juta"
					WHEN max(saldo) > 30000000 AND max(saldo) < 40000000  THEN "> 30 s.d. 40 Juta"
					WHEN max(saldo) > 40000000 AND max(saldo) < 50000000  THEN "> 40 s.d. 50 Juta"
				END as kategori
			'))
			->where('status_klaim','>=',5)
			->whereBetween('tanggal_pencairan',[$awal, $akhir])
			->groupBy('jalinan_klaim.anggota_cu_id')
			->get();

			$table_data2 = [
				'< 1 Juta' => [
					'kategori' => '< 1 Juta','lakilaki' => 0,'perempuan' => 0,'total' => 0,'saldo' => 0
				],
				'> 1 s.d. 10 Juta' => [
					'kategori' => '> 1 s.d. 10 Juta','lakilaki' => 0,'perempuan' => 0,'total' => 0,'saldo' => 0
				],
				'> 10 s.d. 20 Juta' => [
					'kategori' => '> 10 s.d. 20 Juta','lakilaki' => 0,'perempuan' => 0,'total' => 0,'saldo' => 0
				],
				'> 20 s.d. 30 Juta' => [
					'kategori' => '> 20 s.d. 30 Juta','lakilaki' => 0,'perempuan' => 0,'total' => 0,'saldo' => 0
				],
				'> 40 s.d. 50 Juta' => [
					'kategori' => '> 40 s.d. 50 Juta','lakilaki' => 0,'perempuan' => 0,'total' => 0,'saldo' => 0
				]
			];

			foreach($table_data as $t){
				foreach($table_data2 as $key => $t2){
					if($t->kategori == $key){
						if($t->lakilaki > 0){
							$table_data2[$key]['lakilaki'] =+ 1;
						}else if($t->perempuan > 0){
							$table_data2[$key]['perempuan'] =+ 1;
						}
						$table_data2[$key]['total'] =+ 1;
						$table_data2[$key]['saldo'] =+ $t->saldo;
					}
				}
			}

		return response()
		->json([
			'model' => $table_data2
		]);
	} 

	public function formatQuery($table_data){
		foreach($table_data as $t){
			if($t->anggota_cu){
				$t->anggota_cu->nik = $t->anggota_cu ? $t->anggota_cu->nik . " " : '';
			}

			$tanggal_masuk = $t->anggota_cu_cu ? \Carbon\Carbon::parse($t->anggota_cu_cu->tanggal_masuk) : '';
			$tanggal_meninggal = $t->anggota_cu ? \Carbon\Carbon::parse($t->anggota_cu->tanggal_meninggal) : '';

			if($t->anggota_cu_cu){
				$t->anggota_cu_cu->lama_menjadi_anggota = $t->anggota_cu_cu ? $tanggal_masuk->diffInMonths($tanggal_meninggal) : '';
				$t->anggota_cu_cu->no_ba = $t->anggota_cu_cu ? $t->anggota_cu_cu->no_ba . " " : '';
			}
		}

		return $table_data;
	}

	public function formatCuQuery($table_data){
		foreach($table_data as $t){
			if($t->anggota_cu){
				$t->anggota_cu->nik = $t->anggota_cu ? $t->anggota_cu->nik . " " : '';
			}

			$tanggal_masuk = \Carbon\Carbon::parse($t->anggota_cu_cu->tanggal_masuk);
			$tanggal_meninggal = \Carbon\Carbon::parse($t->anggota_cu->tanggal_meninggal);

			if($t->anggota_cu_cu){
				$t->anggota_cu_cu->no_ba = $t->anggota_cu_cu ? $t->anggota_cu_cu->no_ba . " " : '';
				$t->anggota_cu_cu->lama_menjadi_anggota = $t->anggota_cu_cu ? $tanggal_masuk->diffInMonths($tanggal_meninggal) : '';
			}	
		}

		return $table_data;
	}

	public function getVerifikator($verifikator_pengurus, $verifikator_pengawas, $verifikator_manajemen){
		$table_data1 = User::with('aktivis.pekerjaan_aktif')->where('id',$verifikator_pengurus)->first();
		$table_data2 = User::with('aktivis.pekerjaan_aktif')->where('id',$verifikator_pengawas)->first();
		$table_data3 = User::with('aktivis.pekerjaan_aktif')->where('id',$verifikator_manajemen)->first();
		
		return response()
		->json([
			'model1' => $table_data1,
			'model2' => $table_data2,
			'model3' => $table_data3
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
		$name = $request->anggota_cu_id;

		if($request->status_klaim == 7){
			$kelasLama = JalinanKlaim::findOrFail($request->id_koreksi);
			$anggota_cu_id = $kelasLama->anggota_cu_id;

			if(!empty($request->dokumen_meninggal))
				$dokumen_meninggal = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_meninggal,$kelasLama->dokumen_meninggal,$anggota_cu_id . 'meninggal');
			else
				$dokumen_meninggal = '';
			
			if(!empty($request->dokumen_ktp))
				$dokumen_ktp = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_ktp,$kelasLama->dokumen_ktp,$anggota_cu_id . 'ktp');
			else
				$dokumen_ktp = '';

			if(!empty($request->dokumen_pinjaman_1))
				$dokumen_pinjaman_1 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_1,$kelasLama->dokumen_pinjaman_1,$anggota_cu_id . 'pjm1');
			else
				$dokumen_pinjaman_1 = '';

			if(!empty($request->dokumen_pinjaman_2))
				$dokumen_pinjaman_2 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_2,$kelasLama->dokumen_pinjaman_2,$anggota_cu_id . 'pjm2');
			else
				$dokumen_pinjaman_2 = '';

			if(!empty($request->dokumen_pinjaman_3))
				$dokumen_pinjaman_3 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_3,$kelasLama->dokumen_pinjaman_3,$anggota_cu_id . 'pjm3');
			else
				$dokumen_pinjaman_3 = '';

			if(!empty($request->dokumen_pinjaman_4))
				$dokumen_pinjaman_4 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_4,$kelasLama->dokumen_pinjaman_4,$anggota_cu_id . 'pjm4');
			else
				$dokumen_pinjaman_4 = '';

			if(!empty($request->dokumen_pinjaman_5))
				$dokumen_pinjaman_5 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_5,$kelasLama->dokumen_pinjaman_5,$anggota_cu_id . 'pjm5');
			else
				$dokumen_pinjaman_5 = '';

			if(!empty($request->dokumen_pinjaman_6))
				$dokumen_pinjaman_6 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_6,$kelasLama->dokumen_pinjaman_6,$anggota_cu_id . 'pjm6');
			else
				$dokumen_pinjaman_6 = '';

			if(!empty($request->buku_simpanan_1))
				$buku_simpanan_1 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_simpanan_1,$kelasLama->buku_simpanan_1,$anggota_cu_id . 'bks1');
			else
				$buku_simpanan_1 = '';

			if(!empty($request->buku_simpanan_2))
				$buku_simpanan_2 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_simpanan_2,$kelasLama->buku_simpanan_2,$anggota_cu_id . 'bks2');
			else
				$buku_simpanan_2 = '';

			if(!empty($request->buku_simpanan_3))
				$buku_simpanan_3 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_simpanan_3,$kelasLama->buku_simpanan_3,$anggota_cu_id . 'bks3');
			else
				$buku_simpanan_3 = '';

			if(!empty($request->buku_simpanan_4))
				$buku_simpanan_4 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_simpanan_4,$kelasLama->buku_simpanan_4,$anggota_cu_id . 'bks4');
			else
				$buku_simpanan_4 = '';

			if(!empty($request->buku_simpanan_5))
				$buku_simpanan_5 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_simpanan_5,$kelasLama->buku_simpanan_5,$anggota_cu_id . 'bks5');
			else
				$buku_simpanan_5 = '';	

			if(!empty($request->buku_pinjaman_1))
				$buku_pinjaman_1 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_pinjaman_1,$kelasLama->buku_pinjaman_1,$anggota_cu_id . 'bkp1');
			else
				$buku_pinjaman_1 = '';

			if(!empty($request->buku_pinjaman_2))
				$buku_pinjaman_2 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_pinjaman_2,$kelasLama->buku_pinjaman_2,$anggota_cu_id . 'bkp2');
			else
				$buku_pinjaman_2 = '';

			if(!empty($request->buku_pinjaman_3))
				$buku_pinjaman_3 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_pinjaman_3,$kelasLama->buku_pinjaman_3,$anggota_cu_id . 'bkp3');
			else
				$buku_pinjaman_3 = '';

			if(!empty($request->spma_1))
				$spma_1 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->spma_1,$kelasLama->spma_1,$anggota_cu_id . 'spma1');
			else
				$spma_1 = '';

			if(!empty($request->spma_2))
				$spma_2 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->spma_2,$kelasLama->spma_2,$anggota_cu_id . 'spma2');
			else
				$spma_2 = '';	
		}else{
			if(!empty($request->dokumen_meninggal))
				$dokumen_meninggal = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_meninggal,'',$name . 'meninggal');
			else
				$dokumen_meninggal = '';
			
			if(!empty($request->dokumen_ktp))
				$dokumen_ktp = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_ktp,'',$name . 'ktp');
			else
				$dokumen_ktp = '';
	
			if(!empty($request->dokumen_pinjaman_1))
				$dokumen_pinjaman_1 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_1,'',$name . 'pjm1');
			else
				$dokumen_pinjaman_1 = '';
	
			if(!empty($request->dokumen_pinjaman_2))
				$dokumen_pinjaman_2 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_2,'',$name . 'pjm2');
			else
				$dokumen_pinjaman_2 = '';
	
			if(!empty($request->dokumen_pinjaman_3))
				$dokumen_pinjaman_3 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_3,'',$name . 'pjm3');
			else
				$dokumen_pinjaman_3 = '';
	
			if(!empty($request->dokumen_pinjaman_4))
				$dokumen_pinjaman_4 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_4,'',$name . 'pjm4');
			else
				$dokumen_pinjaman_4 = '';
	
			if(!empty($request->dokumen_pinjaman_5))
				$dokumen_pinjaman_5 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_5,'',$name . 'pjm5');
			else
				$dokumen_pinjaman_5 = '';
	
			if(!empty($request->dokumen_pinjaman_6))
				$dokumen_pinjaman_6 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_6,'',$name . 'pjm6');
			else
				$dokumen_pinjaman_6 = '';

			if(!empty($request->buku_simpanan_1))
				$buku_simpanan_1 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_simpanan_1,'',$name . 'bks1');
			else
				$buku_simpanan_1 = '';
	
			if(!empty($request->buku_simpanan_2))
				$buku_simpanan_2 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_simpanan_2,'',$name . 'bks2');
			else
				$buku_simpanan_2 = '';
	
			if(!empty($request->buku_simpanan_3))
				$buku_simpanan_3 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_simpanan_3,'',$name . 'bks3');
			else
				$buku_simpanan_3 = '';
	
			if(!empty($request->buku_simpanan_4))
				$buku_simpanan_4 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_simpanan_4,'',$name . 'bks4');
			else
				$buku_simpanan_4 = '';
	
			if(!empty($request->buku_simpanan_5))
				$buku_simpanan_5 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_simpanan_5,'',$name . 'bks5');
			else
				$buku_simpanan_5 = '';

			if(!empty($request->buku_pinjaman_1))
				$buku_pinjaman_1 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_pinjaman_1,'',$name . 'bkp1');
			else
				$buku_pinjaman_1 = '';
	
			if(!empty($request->buku_pinjaman_2))
				$buku_pinjaman_2 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_pinjaman_2,'',$name . 'bkp2');
			else
				$buku_pinjaman_2 = '';
	
			if(!empty($request->buku_pinjaman_3))
				$buku_pinjaman_3 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_pinjaman_3,'',$name . 'bkp3');
			else
				$buku_pinjaman_3 = '';

			if(!empty($request->spma_1))
				$spma_1 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->spma_1,'',$name . 'spma1');
			else
				$spma_1 = '';
	
			if(!empty($request->spma_2))
				$spma_2 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->spma_2,'',$name . 'spma2');
			else
				$spma_2 = '';	
		}

		$kelas = JalinanKlaim::create($request->except('dokumen_ktp','dokumen_meninggal','dokumen_pinjaman_1','dokumen_pinjaman_2','dokumen_pinjaman_3','dokumen_pinjaman_4','dokumen_pinjaman_5','dokumen_pinjaman_6','buku_simpanan_1','buku_simpanan_2','buku_simpanan_3','buku_simpanan_4','buku_simpanan_5','buku_pinjaman_1','buku_pinjaman_2','buku_pinjaman_3','spma_1','spma_2') + [
			'dokumen_ktp' => $dokumen_ktp,
			'dokumen_meninggal' => $dokumen_meninggal,
			'dokumen_pinjaman_1' => $dokumen_pinjaman_1,
			'dokumen_pinjaman_2' => $dokumen_pinjaman_2,
			'dokumen_pinjaman_3' => $dokumen_pinjaman_3,
			'dokumen_pinjaman_4' => $dokumen_pinjaman_4,
			'dokumen_pinjaman_5' => $dokumen_pinjaman_5,
			'dokumen_pinjaman_6' => $dokumen_pinjaman_6,
			'buku_simpanan_1' => $buku_simpanan_1,
			'buku_simpanan_2' => $buku_simpanan_2,
			'buku_simpanan_3' => $buku_simpanan_3,
			'buku_simpanan_4' => $buku_simpanan_4,
			'buku_simpanan_5' => $buku_simpanan_5,
			'buku_pinjaman_1' => $buku_pinjaman_1,
			'buku_pinjaman_2' => $buku_pinjaman_2,
			'buku_pinjaman_3' => $buku_pinjaman_3,
			'spma_1' => $spma_1,
			'spma_2' => $spma_2,
		]);

		$this->updateStatusAnggotaCu($request->anggota_cu_id, $request->tipe, $request->tanggal_mati);

		$this->storeStatusJalinan($kelas->id, $request->cu_id, $request->status_klaim);
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil ditambah'
			]);	
	}

	public function storeStatusJalinan($id, $cu, $status){
		JalinanKlaimStatus::create([
			'jalinan_klaim_id' => $id,
			'cu_id' => $cu,
			'status_klaim' => $status,
		]);
	}

	public function getKlaim($id)
	{
		$kelas = JalinanKlaim::where('id',$id)->first();

		return response()
			->json([
					'form' => $kelas,
					'option' => []
			]);
	}

	public function edit($nik, $cu, $tipe)
	{
		$kelas = JalinanKlaim::with('anggota_cu','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->where('anggota_cu_cu_id', $cu)->where('tipe', $tipe)->whereHas('anggota_cu', function($query) use ($nik){ 
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

		if(!empty($request->dokumen_meninggal))
			$dokumen_meninggal = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_meninggal,$kelas->dokumen_meninggal,$anggota_cu_id . 'meninggal');
		else
			$dokumen_meninggal = '';
		
		if(!empty($request->dokumen_ktp))
			$dokumen_ktp = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_ktp,$kelas->dokumen_ktp,$anggota_cu_id . 'ktp');
		else
			$dokumen_ktp = '';

		if(!empty($request->dokumen_pinjaman_1))
			$dokumen_pinjaman_1 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_1,$kelas->dokumen_pinjaman_1,$anggota_cu_id . 'pjm1');
		else
			$dokumen_pinjaman_1 = '';

		if(!empty($request->dokumen_pinjaman_2))
			$dokumen_pinjaman_2 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_2,$kelas->dokumen_pinjaman_2,$anggota_cu_id . 'pjm2');
		else
			$dokumen_pinjaman_2 = '';

		if(!empty($request->dokumen_pinjaman_3))
			$dokumen_pinjaman_3 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_3,$kelas->dokumen_pinjaman_3,$anggota_cu_id . 'pjm3');
		else
			$dokumen_pinjaman_3 = '';

		if(!empty($request->dokumen_pinjaman_4))
			$dokumen_pinjaman_4 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_4,$kelas->dokumen_pinjaman_4,$anggota_cu_id . 'pjm4');
		else
			$dokumen_pinjaman_4 = '';

		if(!empty($request->dokumen_pinjaman_5))
			$dokumen_pinjaman_5 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_5,$kelas->dokumen_pinjaman_5,$anggota_cu_id . 'pjm5');
		else
			$dokumen_pinjaman_5 = '';

		if(!empty($request->dokumen_pinjaman_6))
			$dokumen_pinjaman_6 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->dokumen_pinjaman_6,$kelas->dokumen_pinjaman_6,$anggota_cu_id . 'pjm6');
		else
			$dokumen_pinjaman_6 = '';

		if(!empty($request->buku_simpanan_1))
			$buku_simpanan_1 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_simpanan_1,$kelas->buku_simpanan_1,$anggota_cu_id . 'bks1');
		else
			$buku_simpanan_1 = '';

		if(!empty($request->buku_simpanan_2))
			$buku_simpanan_2 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_simpanan_2,$kelas->buku_simpanan_2,$anggota_cu_id . 'bks2');
		else
			$buku_simpanan_2 = '';

		if(!empty($request->buku_simpanan_3))
			$buku_simpanan_3 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_simpanan_3,$kelas->buku_simpanan_3,$anggota_cu_id . 'bks3');
		else
			$buku_simpanan_3 = '';

		if(!empty($request->buku_simpanan_4))
			$buku_simpanan_4 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_simpanan_4,$kelas->buku_simpanan_4,$anggota_cu_id . 'bks4');
		else
			$buku_simpanan_4 = '';

		if(!empty($request->buku_simpanan_5))
			$buku_simpanan_5 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_simpanan_5,$kelas->buku_simpanan_5,$anggota_cu_id . 'bks5');
		else
			$buku_simpanan_5 = '';	

		if(!empty($request->buku_pinjaman_1))
			$buku_pinjaman_1 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_pinjaman_1,$kelas->buku_pinjaman_1,$anggota_cu_id . 'bkp1');
		else
			$buku_pinjaman_1 = '';

		if(!empty($request->buku_pinjaman_2))
			$buku_pinjaman_2 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_pinjaman_2,$kelas->buku_pinjaman_2,$anggota_cu_id . 'bkp2');
		else
			$buku_pinjaman_2 = '';

		if(!empty($request->buku_pinjaman_3))
			$buku_pinjaman_3 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->buku_pinjaman_3,$kelas->buku_pinjaman_3,$anggota_cu_id . 'bkp3');
		else
			$buku_pinjaman_3 = '';

		if(!empty($request->spma_1))
			$spma_1 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->spma_1,$kelas->spma_1,$anggota_cu_id . 'spma1');
		else
			$spma_1 = '';

		if(!empty($request->spma_2))
			$spma_2 = Helper::image_processing_no_thumb($this->imagepath,$this->width,$this->height,$request->spma_2,$kelas->spma_2,$anggota_cu_id . 'spma2');
		else
			$spma_2 = '';

		$kelas->update($request->except('dokumen_ktp','dokumen_meninggal','dokumen_pinjaman_1','dokumen_pinjaman_2','dokumen_pinjaman_3','dokumen_pinjaman_4','dokumen_pinjaman_5','dokumen_pinjaman_6','buku_simpanan_1','buku_simpanan_2','buku_simpanan_3','buku_simpanan_4','buku_simpanan_5','buku_pinjaman_1','buku_pinjaman_2','buku_pinjaman_3','spma_1','spma_1') + [
			'dokumen_ktp' => $dokumen_ktp,
			'dokumen_meninggal' => $dokumen_meninggal,
			'dokumen_pinjaman_1' => $dokumen_pinjaman_1,
			'dokumen_pinjaman_2' => $dokumen_pinjaman_2,
			'dokumen_pinjaman_3' => $dokumen_pinjaman_3,
			'dokumen_pinjaman_4' => $dokumen_pinjaman_4,
			'dokumen_pinjaman_5' => $dokumen_pinjaman_5,
			'dokumen_pinjaman_6' => $dokumen_pinjaman_6,
			'buku_simpanan_1' => $buku_simpanan_1,
			'buku_simpanan_2' => $buku_simpanan_2,
			'buku_simpanan_3' => $buku_simpanan_3,
			'buku_simpanan_4' => $buku_simpanan_4,
			'buku_simpanan_5' => $buku_simpanan_5,
			'buku_pinjaman_1' => $buku_pinjaman_1,
			'buku_pinjaman_2' => $buku_pinjaman_2,
			'buku_pinjaman_3' => $buku_pinjaman_3,
			'spma_1' => $spma_1,
			'spma_2' => $spma_2,
		]);	

		$this->updateStatusAnggotaCu($anggota_cu_id, $request->tipe, $request->tanggal_mati);

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil diubah'
			]);
	}

	public function updateStatus(Request $request, $id)
	{
		$kelas = JalinanKlaim::with('anggota_cu', 'anggota_cu_cu.cu')->findOrFail($id);

		$kelas->status_klaim = $request->status;
		$kelas->surat_nomor = $request->surat_nomor;
		$kelas->surat_tanggal = $request->surat_tanggal;

		if($kelas->status_klaim == 1){
			$message = "Klaim JALINAN menunggu";
			$kelas->keterangan_klaim = NULL;
			$kelas->tunas_disetujui = NULL;
			$kelas->lintang_disetujui = NULL;
			$kelas->tanggal_pencairan = NULL;
		}else if($kelas->status_klaim == 2){
			$message = "Klaim JALINAN dokumen tidak lengkap";
			$kelas->keterangan_klaim = $request->keterangan_klaim;
			$kelas->tunas_disetujui = NULL;
			$kelas->lintang_disetujui = NULL;
			$kelas->tanggal_pencairan = NULL;
		}else if($kelas->status_klaim == 3){
			$message = "Klaim JALINAN ditolak";
			$kelas->keterangan_klaim = $request->keterangan_klaim;
			$kelas->tunas_disetujui = NULL;
			$kelas->lintang_disetujui = NULL;
			$kelas->tanggal_pencairan = NULL;
		}else if($kelas->status_klaim == 4){
			$message = "Klaim JALINAN disetujui";
			$kelas->keterangan_klaim = $request->keterangan_klaim;
			$kelas->tunas_disetujui = $request->tunas_disetujui;
			$kelas->lintang_disetujui = $request->lintang_disetujui;
			$kelas->tanggal_pencairan = $request->tanggal_pencairan;
		}
		
		$kelas->update();

		// $this->updateStatusAnggotaCu($kelas->anggota_cu_id, $request->tipe, $request->tanggal_mati);
		
		$this->storeStatusJalinan($kelas->id, $request->cu_id, $request->status);

		NotificationHelper::klaim_jalinan_status($kelas,$message);
	
		return response()
			->json([
				'saved' => true,
				'message' => $message
			]);
	}

	public function periksaKoreksi(Request $request, $id)
	{
		$kelas = JalinanKlaim::findOrFail($id);
		$kelas->status_klaim = 1;
		$kelas->tunas_diajukan = $request->tunas_diajukan;
		$kelas->lintang_diajukan = $request->lintang_diajukan;
		$kelas->tunas_disetujui = NULL;
		$kelas->lintang_disetujui = NULL;
		$kelas->tanggal_pencairan = NULL;

		$kelas->update();

		// $this->updateStatusAnggotaCu($kelas->anggota_cu_id, $request->tipe, $request->tanggal_mati);
		
		$this->storeStatusJalinan($kelas->id, $request->cu_id, $request->status);
	
		return response()
			->json([
				'saved' => true,
				'message' => 'Klaim JALINAN berhasil dikoreksi'
			]);
	}

	public function updateSelesai(Request $request, $id)
	{
		$kelas = JalinanKlaim::findOrFail($id);

		if($kelas->status_klaim == '5'){
			$kelas->status_klaim = '6';
			$message = "Klaim JALINAN selesai";
		}else{
			$kelas->status_klaim = '5';
			$message = "Klaim JALINAN batal diselesaikan";
		}

		$kelas->update();
	
		return response()
			->json([
				'saved' => true,
				'message' => $message
			]);
	}

	public function updateVerifikasi(Request $request, $id)
	{
		$kelas = JalinanKlaim::with('anggota_cu_cu')->findOrFail($id);

		if($request->can['verifikasi_pengurus_jalinan_klaim']){
			$kelas->verifikasi_pengurus = $request->id;
		}else if($request->can['verifikasi_pengawas_jalinan_klaim']){
			$kelas->verifikasi_pengawas = $request->id;
		}else if($request->can['verifikasi_manajemen_jalinan_klaim']){
			$kelas->verifikasi_manajemen = $request->id;
		}

		if(!empty($kelas->verifikasi_pengurus) && !empty($kelas->verifikasi_pengawas) && !empty($kelas->verifikasi_manajemen)){
			$kelas->status_klaim = '1';
		}

		$kelas->update();

		// TODO:: check how to make interval checking
		// if(!empty($kelas->verifikasi_pengurus) && !empty($kelas->verifikasi_pengawas) && !empty($kelas->verifikasi_manajemen)){
		// 	NotificationHelper::klaim_jalinan_verifikasi($klaim_jalinan,'menambah klaim JALINAN');
		// }
	
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil diverifikasi'
			]);
	}

	public function updateStatusAnggotaCu($id, $tipe, $tanggal){
		$kelas = AnggotaCu::findOrFail($id);
		$kelas->status_jalinan = $tipe;

		if($tipe == 'MENINGGAL'){
			$kelas->tanggal_meninggal = $tanggal;
			// if($isEdit){
			// 	if($kelas->tanggal_cacat == $tanggal){
			// 		$kelas->tanggal_cacat = NULL;
			// 	}
			// }
		}else if($tipe == 'CACAT'){
			$kelas->tanggal_cacat = $tanggal;
			// if($isEdit){
			// 	if($kelas->tanggal_meninggal == $tanggal){
			// 		$kelas->tanggal_meninggal = NULL;
			// 	}
			// }
		}else {
			$kelas->tanggal_meninggal = $tanggal;
			$kelas->tanggal_cacat = $tanggal;
		}
		
		$kelas->update();
	}

	public function UpdateCair($id, $awal, $akhir){
		if($awal != 'undefined' && $akhir != 'undefined'){
			$kelas = JalinanKlaim::with('anggota_cu_cu')->where('status_klaim',4)->whereBetween('tanggal_pencairan',[$awal, $akhir])->whereHas('anggota_cu_cu', function($query) use ($id){ 
				$query->where('cu_id',$id); 
			});	
		}else{
			$kelas = JalinanKlaim::with('anggota_cu_cu')->where('status_klaim',4)->where('tanggal_pencairan',$awal)->whereHas('anggota_cu_cu', function($query) use ($id){ 
				$query->where('cu_id',$id); 
			});	
		}

		$kelas->update(['status_klaim' => 5]);
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' berhasil dicairkan'
			]);
	}

	public function UpdateCairBatal($id, $awal, $akhir){
		if($awal != 'undefined' && $akhir != 'undefined'){
			$kelas = JalinanKlaim::with('anggota_cu_cu')->where('status_klaim',5)->whereBetween('tanggal_pencairan',[$awal, $akhir])->whereHas('anggota_cu_cu', function($query) use ($id){ 
				$query->where('cu_id',$id); 
			});	
		}else{
			$kelas = JalinanKlaim::with('anggota_cu_cu')->where('status_klaim',5)->where('tanggal_pencairan',$awal)->whereHas('anggota_cu_cu', function($query) use ($id){ 
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

	public function UpdateCairAll($awal, $akhir){
		if($awal != 'undefined' && $akhir != 'undefined'){
			$kelas = JalinanKlaim::where('status_klaim',4)->whereBetween('tanggal_pencairan',[$awal, $akhir])->update(['status_klaim' => 5]);	
		}else{
			$kelas = JalinanKlaim::where('status_klaim',4)->where('tanggal_pencairan',$awal)->update(['status_klaim' => 5]);	
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

		if(!empty($kelas->dokumen_ktp)){
			File::delete($this->imagepath . $kelas->dokumen_ktp . '.jpg');
		}
		if(!empty($kelas->dokumen_meninggal)){
			File::delete($this->imagepath . $kelas->dokumen_meninggal . '.jpg');
		}
		if(!empty($kelas->dokumen_pinjaman_1)){
			File::delete($this->imagepath . $kelas->dokumen_pinjaman_1 . '.jpg');
		}
		if(!empty($kelas->dokumen_pinjaman_2)){
			File::delete($this->imagepath . $kelas->dokumen_pinjaman_2 . '.jpg');
		}
		if(!empty($kelas->dokumen_pinjaman_3)){
			File::delete($this->imagepath . $kelas->dokumen_pinjaman_3 . '.jpg');
		}
		if(!empty($kelas->dokumen_pinjaman_4)){
			File::delete($this->imagepath . $kelas->dokumen_pinjaman_4 . '.jpg');
		}
		if(!empty($kelas->dokumen_pinjaman_5)){
			File::delete($this->imagepath . $kelas->dokumen_pinjaman_5 . '.jpg');
		}
		if(!empty($kelas->dokumen_pinjaman_6)){
			File::delete($this->imagepath . $kelas->dokumen_pinjaman_6 . '.jpg');
		}
		if(!empty($kelas->buku_simpanan_1)){
			File::delete($this->imagepath . $kelas->buku_simpanan_1 . '.jpg');
		}
		if(!empty($kelas->buku_simpanan_2)){
			File::delete($this->imagepath . $kelas->buku_simpanan_2 . '.jpg');
		}
		if(!empty($kelas->buku_simpanan_3)){
			File::delete($this->imagepath . $kelas->buku_simpanan_3 . '.jpg');
		}
		if(!empty($kelas->buku_simpanan_4)){
			File::delete($this->imagepath . $kelas->buku_simpanan_4 . '.jpg');
		}
		if(!empty($kelas->buku_simpanan_5)){
			File::delete($this->imagepath . $kelas->buku_simpanan_5 . '.jpg');
		}
		if(!empty($kelas->buku_pinjaman_1)){
			File::delete($this->imagepath . $kelas->buku_pinjaman_1 . '.jpg');
		}
		if(!empty($kelas->buku_pinjaman_2)){
			File::delete($this->imagepath . $kelas->buku_pinjaman_2 . '.jpg');
		}
		if(!empty($kelas->buku_pinjaman_3)){
			File::delete($this->imagepath . $kelas->buku_pinjaman_3 . '.jpg');
		}
		if(!empty($kelas->spma_1)){
			File::delete($this->imagepath . $kelas->spma_1 . '.jpg');
		}
		if(!empty($kelas->spma_2)){
			File::delete($this->imagepath . $kelas->spma_2 . '.jpg');
		}

		$kelas->delete();

		$this->updateStatusAnggotaCu($anggota_cu_id, NULL, NULL);

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
		$table_data = AnggotaCu::with('anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_produk_cu','Villages','Districts','Regencies','Provinces')->where('nik',$nik)->first();

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
		$table_data = JalinanKlaim::where('status_klaim',4)->select('tanggal_pencairan')->distinct()->orderBy('tanggal_pencairan','DESC')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function getStatus($status_klaim)
	{
		$table_data = JalinanKlaim::where('status_klaim',$status_klaim)->select('created_at')->distinct()->orderBy('created_at','DESC')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}
	
}