<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Image;
use Validator;
use App\System;
use App\AnggotaCu;
use App\AnggotaCuCu;
use App\AnggotaCuKlaim;
use App\Support\Helper;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\HeadingRowImport;
use App\AnggotaProdukCu;
use App\AnggotaProdukCuTransaksi;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;
use App\Imports\AnggotaCuDraftImport;
use App\Imports\ProdukCuDraftImport;

class AnggotaCuController extends Controller{

	protected $imagepath = 'images/anggotaCu/';
	protected $width = 300;
	protected $height = 200;
	protected $message = "Anggota CU";

	public function index()
	{
		$table_data = AnggotaCu::with('anggota_cu_cu_not_keluar.cu','anggota_cu_cu_not_keluar.tp','Villages','villages','Districts','Regencies','Provinces')->whereHas('anggota_cu_cu_not_keluar', function($query){ 
			$query->whereNull('anggota_cu_cu.tanggal_keluar'); 
		})->where(function($query){
			$query->where('status_jalinan','!=','MENINGGAL')->orWhere('status_jalinan', NULL);
		})->advancedFilter();

		$table_data = $this->formatQuery($table_data);

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexKeluar()
	{
		$table_data = AnggotaCu::with('anggota_cu_cu_keluar.cu','anggota_cu_cu_keluar.tp','Villages','Districts','Regencies','Provinces')->whereHas('anggota_cu_keluar', function($query){ 
			$query->whereNotNull('anggota_cu_cu.tanggal_keluar'); 
		})->where(function($query){
			$query->where('status_jalinan','!=','MENINGGAL')->orWhere('status_jalinan', NULL);
		})->advancedFilter();

		$table_data = $this->formatKeluarQuery($table_data);

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexMeninggal()
	{
		$table_data = AnggotaCu::with('anggota_cu_cu_not_keluar.cu','anggota_cu_cu_not_keluar.tp','Villages','Districts','Regencies','Provinces')->where('status_jalinan','MENINGGAL')->advancedFilter();

		$table_data = $this->formatQuery($table_data);

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($cu, $tp)
	{
		$table_data = AnggotaCu::with('anggota_cu_cu_not_keluar.cu','anggota_cu_cu_not_keluar.tp','Villages','Districts','Regencies','Provinces')->whereHas('anggota_cu_cu_not_keluar', function($query) use ($cu, $tp){ 
			if($tp != 'semua'){
				$query->where('anggota_cu_cu.cu_id',$cu)->where('anggota_cu_cu.tp_id',$tp)->whereNull('anggota_cu_cu.tanggal_keluar'); 
			}else{
				$query->where('anggota_cu_cu.cu_id',$cu)->whereNull('anggota_cu_cu.tanggal_keluar'); 
			}
		})->where(function($query){
			$query->where('status_jalinan','!=','MENINGGAL')->orWhere('status_jalinan', NULL);
		})->advancedFilter();

		$table_data = $this->formatCuQuery($table_data, $cu, $tp);

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexCuKeluar($cu, $tp)
	{
		$table_data = AnggotaCu::with('anggota_cu_cu_keluar.cu','anggota_cu_cu_keluar.tp','Villages','Districts','Regencies','Provinces')->whereHas('anggota_cu_keluar', function($query) use ($cu, $tp){ 
			if($tp != 'semua'){
				$query->where('anggota_cu_cu.cu_id',$cu)->where('anggota_cu_cu.tp_id',$tp)->whereNotNull('anggota_cu_cu.tanggal_keluar'); 
			}else{
				$query->where('anggota_cu_cu.cu_id',$cu)->whereNotNull('anggota_cu_cu.tanggal_keluar'); 
			}
		})->where(function($query){
			$query->where('status_jalinan','!=','MENINGGAL')->orWhere('status_jalinan', NULL);
		})->advancedFilter();

		$table_data = $this->formatCuKeluarQuery($table_data, $cu, $tp);

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexCuMeninggal($cu, $tp)
	{
		$table_data = AnggotaCu::with('anggota_cu_cu_not_keluar.cu','anggota_cu_cu_not_keluar.tp','Villages','Districts','Regencies','Provinces')->whereHas('anggota_cu_cu_not_keluar', function($query) use ($cu, $tp){ 
			if($tp != 'semua'){
				$query->where('anggota_cu_cu.cu_id',$cu)->where('anggota_cu_cu.tp_id',$tp)->whereNull('anggota_cu_cu.tanggal_keluar');
			}else{
				$query->where('anggota_cu_cu.cu_id',$cu)->whereNull('anggota_cu_cu.tanggal_keluar');  
			}
		})->where('status_jalinan','MENINGGAL')->advancedFilter();
		
		$table_data = $this->formatCuQuery($table_data, $cu, $tp);

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function formatQuery($table_data){
		foreach($table_data as $t){
			$t->nik = $t->nik ? $t->nik . "​ " : '';
			$t->npwp = $t->npwp ? $t->npwp . "​ " : '';
			$t->no_ba = '';
			$t->tanggal_masuk = '';
			$t->hp = $t->hp ? $t->hp . "​ " : '';
			foreach($t->anggota_cu_cu_not_keluar as $ta){
				$tp_name = $ta->tp ? ' | ' . $ta->tp->name : '';
				$cu_name = $ta->cu ? $ta->cu->name : '';
				$t->no_ba .= $cu_name . $tp_name . ' : ' .$ta->no_ba;
				$t->tanggal_masuk .= ' CU ' . $ta->cu->name. ': ' .$ta->tanggal_masuk;
			}
		};

		return $table_data;
	}

	public function formatKeluarQuery($table_data){
		foreach($table_data as $t){
			$t->nik = $t->nik ? $t->nik . "​ " : '';
			$t->npwp = $t->npwp ? $t->npwp . "​ " : '';
			$t->no_ba = '';
			$t->tanggal_masuk = '';
			$t->hp = $t->hp ? $t->hp . "​ " : '';
			foreach($t->anggota_cu_cu_keluar as $ta){
				$tp_name = $ta->tp ? ' | ' . $ta->tp->name : '';
				$cu_name = $ta->cu ? $ta->cu->name : '';
				$t->no_ba .= $cu_name . $tp_name . ' : ' .$ta->no_ba;
				$t->tanggal_masuk .= ' CU ' . $ta->cu->name. ': ' .$ta->tanggal_masuk;
				$t->keterangan_keluar = $ta->keterangan_keluar;
			}
		};

		return $table_data;
	}

	public function formatCuQuery($table_data, $cu, $tp){
		foreach($table_data as $t){
			if($t->anggota_cu_cu_not_keluar){
				$t->nik = $t->nik ? $t->nik . "​ " : '';
				$t->npwp = $t->npwp ? $t->npwp . "​ " : '';
				$t->hp = $t->hp ? $t->hp . "​ " : '';
				if($t->anggota_cu_cu_not_keluar){
					foreach($t->anggota_cu_cu_not_keluar as $tt){
						if($tt->cu_id == $cu){
							$t->anggota_cu_cu_not_keluar[0] = $tt;
						}
					}
				}
				if($tp != 'semua'){
					$t->no_ba = $t->anggota_cu_cu_not_keluar[0]->no_ba . "​ ";
					$t->tanggal_masuk = $t->anggota_cu_cu_not_keluar[0]->tanggal_masuk;
				}else{
					$tp_name = $t->anggota_cu_cu_not_keluar[0]->tp ? $t->anggota_cu_cu_not_keluar[0]->tp->name : '';
					$t->no_ba = $tp_name . " : " . $t->anggota_cu_cu_not_keluar[0]->no_ba;
					$t->tanggal_masuk = $t->anggota_cu_cu_not_keluar[0]->tanggal_masuk;
				}
			}
		};

		return $table_data;
	}

	public function formatCuKeluarQuery($table_data, $cu, $tp){
		foreach($table_data as $t){
			if($t->anggota_cu_cu_keluar){
				$t->nik = $t->nik ? $t->nik . "​ " : '';
				$t->npwp = $t->npwp ? $t->npwp . "​ " : '';
				$t->hp = $t->hp ? $t->hp . "​ " : '';
				$t->keterangan_keluar = $t->anggota_cu_cu_keluar[0]->keterangan_keluar;
				if($t->anggota_cu_cu_keluar){
					foreach($t->anggota_cu_cu_keluar as $tt){
						if($tt->cu_id == $cu){
							$t->anggota_cu_cu_keluar[0] = $tt;
						}
					}
				}
				if($tp != 'semua'){
					$t->no_ba = $t->anggota_cu_cu_keluar[0]->no_ba . "​ ";
					$t->tanggal_masuk = $t->anggota_cu_cu_keluar[0]->tanggal_masuk;
				}else{
					$tp_name = $t->anggota_cu_cu_keluar[0]->tp ? $t->anggota_cu_cu_keluar[0]->tp->name : '';
					$t->no_ba = $tp_name . " : " . $t->anggota_cu_cu_keluar[0]->no_ba;
					$t->tanggal_masuk = $t->anggota_cu_cu_keluar[0]->tanggal_masuk;
				}
			}
		};

		return $table_data;
	}

	public function indexProduk($id, $cu)
	{
		if($cu != 'semua'){
			$table_data = AnggotaProdukCu::with('produk_cu.cu')->where('anggota_cu_id', $id)->whereHas('produk_cu', function($query) use ($cu){ 
				$query->where('id_cu',$cu); 
			})->get();
		}else{
			$table_data = AnggotaProdukCu::with('produk_cu.cu')->where('anggota_cu_id', $id)->get();
		}
		
		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexProdukSaldo($id)
	{
		$table_data = AnggotaProdukCuTransaksi::where('anggota_produk_cu_id', $id)->advancedFilter();
		
		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexKlaim()
	{
		$table_data = AnggotaCuKlaim::with('anggota_cu','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function getCu($cu)
	{
		$table_data = AnggotaCu::with('anggota_cu_cu_not_keluar.cu','anggota_produk_cu')->whereHas('anggota_cu_cu_not_keluar', function($query) use ($cu){ 
				$query->where('anggota_cu_cu.cu_id',$cu)->whereNull('anggota_cu_cu.tanggal_keluar'); 
		})->where(function($query){
			$query->where('status_jalinan','!=','MENINGGAL')->orWhere('status_jalinan', NULL);
		})->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function getCuKeluar($cu)
	{
		$table_data = AnggotaCu::with('anggota_cu_cu_keluar.cu','anggota_cu_cu_keluar.tp','Villages','Districts','Regencies','Provinces')->whereHas('anggota_cu_keluar', function($query) use ($cu){ 
			$query->where('anggota_cu_cu.cu_id',$cu)->whereNotNull('anggota_cu_cu.tanggal_keluar'); 
		})->where(function($query){
			$query->where('status_jalinan','!=','MENINGGAL')->orWhere('status_jalinan', NULL);
		})->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function getCuJalinan($cu, $bulan, $tahun)
	{
		$dateString = $tahun . '-' . $bulan . '-01';
		$lastDateOfMonth = date("Y-m-t", strtotime($dateString));

		$table_data = AnggotaCu::with('anggota_cu_cu_not_keluar_single','anggota_produk_cu')->whereHas('anggota_cu_cu_not_keluar_single', function($query) use ($cu, $lastDateOfMonth){ 
				$query->where('anggota_cu_cu.cu_id',$cu)->where('anggota_cu_cu.tanggal_masuk','<',$lastDateOfMonth)->whereNull('anggota_cu_cu.tanggal_keluar'); 
		})->where(function($query){
			$query->where('status_jalinan','!=','MENINGGAL')->orWhere('status_jalinan', NULL);
		})->select('id','nik','name','tanggal_lahir','kelamin','status','alamat','ahli_waris')->get();
		
		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => AnggotaCu::initialize(),
					'rules' => AnggotaCu::$rules,
					'option' => []
			]);
	}

	public function createKlaim()
	{
		return response()
			->json([
					'form' => AnggotaCuKlaim::initialize(),
					'rules' => AnggotaCuKlaim::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		\DB::beginTransaction(); 
		try{
			$this->validate($request,AnggotaCu::$rules);

			$nik = '';

			if($request->nik == 'AUTO'){
				$table_data = System::select('nik')->first();
				$nik = $table_data->nik;
			}else{
				$nik = $request->nik;
			}

			$name = $request->name;

			if(!empty($request->gambar))
				$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request->gambar,'',$name);
			else
				$fileName = '';	

			$kelas = AnggotaCu::create($request->except('nik','gambar','statusNIK') + [
				'nik' => $nik,
				'gambar' => $fileName
			]);
			
			$this->syncCu($request, $kelas);
			// $this->syncProdukCu($request, $kelas);

			if($request->nik == 'AUTO'){
				$this->updateSystemNIK($nik);
			}

			\DB::commit();

			return response()
				->json([
					'saved' => true,
					'message' => $this->message. ' ' .$name. ' berhasil ditambah',
					'id' => $kelas->id,
					'nik' => $kelas->nik,
				]);	
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}
	}

	public function storeCu(Request $request, $id)
	{
		AnggotaCuCu::create([
			'anggota_cu_id' => $id,
			'cu_id' => $request->cu['id'],
			'no_ba' => $request->no_ba,
			'tanggal_masuk' => $request->tanggal_masuk
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Keanggotaan CU berhasil ditambah'
			]);	
	}

	public function storeKlaim(Request $request, $id)
	{
		AnggotaCuKlaim::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Klaim anggota CU berhasil ditambah'
			]);	
	}


	public function edit($id)
	{
		$kelas = AnggotaCu::with('anggota_cu_cu.cu','anggota_cu_cu.tp','Villages','Districts','Regencies','Provinces')->findOrFail($id);

		return response()
			->json([
					'form' => $kelas,
					'option' => []
			]);
	}

	public function editKlaim($id)
	{
		$kelas = AnggotaCuKlaim::with('anggota_cu','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->findOrFail($id);

		return response()
			->json([
					'form' => $kelas,
					'option' => []
			]);
	}

	public function update(Request $request, $id)
	{
		\DB::beginTransaction(); 
		try{
			$rules = AnggotaCu::$rules;
			$rules['nik'] = $rules['nik'] . ',id,' . $id;
			$validationCertificate  = Validator::make($request->all(), $rules); 
			$name = $request->name;
			
			$kelas = AnggotaCu::with('anggota_cu_cu')->findOrFail($id);

			if(!empty($request->gambar))
				$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request->gambar,$kelas->gambar,$name);
			else
				$fileName = '';

			// dd($request->all());
			$kelas->update($request->except('gambar') + [
				'gambar' => $fileName
			]);	

			$cuArray = $this->syncCu($request, $kelas);

			\DB::commit();

			return response()
				->json([
					'saved' => true,
					'message' => $this->message. ' ' .$name. ' berhasil diubah',
					'id' => $kelas->id
				]);
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}	
	}

	public function updatePindahTp(Request $request, $id)
	{
		$kelas = AnggotaCuCu::findOrFail($id);

		$kelas->update([
			'tanggal_keluar' => $request->tanggal_pindah,
			'keterangan_keluar' => 'mutasi anggota',
		]);	

		AnggotaCuCu::create([
			'anggota_cu_id' => $kelas->anggota_cu_id,
			'cu_id' => $kelas->cu_id,
			'tp_id' => $request->tp_id,
			'no_ba' => $kelas->no_ba,
			'tanggal_masuk' => $request->tanggal_pindah,
			'keterangan_masuk' => 'mutasi anggota'
		]);

		AnggotaCu::flushCache();

		return response()
			->json([
				'saved' => true,
				'message' => 'Anggota CU berhasil dipindah'
			]);
	}

	public function updateKeluar(Request $request, $id)
	{
		$kelas = AnggotaCuCu::findOrFail($id);

		$kelas->update([
			'tanggal_keluar' => $request->tanggal_keluar,
			'keterangan_keluar' => $request->keterangan_keluar,
		]);	

		AnggotaCu::flushCache();

		return response()
			->json([
				'saved' => true,
				'message' => 'Anggota CU berhasil keluar'
			]);
	}

	public function updateBatalKeluar($id)
	{
		$kelas = AnggotaCuCu::where('anggota_cu_id',$id);

		$kelas->update([
			'tanggal_keluar' => NULL,
			'keterangan_keluar' => NULL,
		]);	

		AnggotaCu::flushCache();

		return response()
			->json([
				'saved' => true,
				'message' => 'Anggota CU berhasil batal keluar'
			]);
	}

	public function updateCu(Request $request, $id)
	{
		$kelas = AnggotaCuCu::findOrFail($id);

		$kelas->update($request->all());	

		AnggotaCu::flushCache();

		return response()
			->json([
				'saved' => true,
				'message' => 'Keanggotaan CU berhasil diubah'
			]);
	}

	public function updateSaldo(Request $request, $id)
	{
		$kelas = AnggotaProdukCu::findOrFail($id);

		$kelas->update($request->all());	

		return response()
			->json([
				'saved' => true,
				'message' => 'Produk anggota berhasil diubah'
			]);
	}

	// public function updateKlaim(Request $request, $id)
	// {
	// 	$kelas = AnggotaCuKlaim::findOrFail($id);

	// 	$kelas->update($request->all());	

	// 	AnggotaCu::flushCache();

	// 	return response()
	// 		->json([
	// 			'saved' => true,
	// 			'message' => 'Klaim anggota CU berhasil diubah'
	// 		]);
	// }

	// public function updateKlaimStatus(Request $request, $id)
	// {
	// 	$kelas = AnggotaCuKlaim::findOrFail($id);

	// 	$kelas->status_klaim = $request->status_klaim;

	// 	$anggota_cu_id = $kelas->anggota_cu_id;
	// 	$tipe = $kelas->tipe;

	// 	if($kelas->status_klaim == 1){
	// 		$message = "Klaim JALINAN dicairkan";
	// 	}else if($kelas->status_klaim == 2){
	// 		$message = "Klaim JALINAN ditolak";
	// 	}else if($kelas->status_klaim == 0){
	// 		$message = "Klaim pending";
	// 	}

	// 	$kelas->update();

	// 	$kelas2 = AnggotaCu::findOrFail($anggota_cu_id);

	// 	if($request->status_klaim == 1){
	// 		$kelas2->status_jalinan = $tipe;
	// 	}else{
	// 		$kelas2->status_jalinan = '';
	// 	}

	// 	$kelas2->update();

	// 	return response()
	// 		->json([
	// 			'saved' => true,
	// 			'message' => $message
	// 		]);
	// }

	public function updateNik(Request $request, $id)
	{
		$kelas = AnggotaCu::findOrFail($id);

		$table_data = AnggotaCu::where('nik',$request->nik)->first();

		if($table_data){
			return response()
				->json([
					'saved' => false,
					'message' => 'No. KTP / NIK Anggota CU sudah ada dipakai'
				]);
		}else{
			$kelas->nik = $request->nik;
			$kelas->update();	

			return response()
				->json([
					'saved' => true,
					'message' => 'No. KTP / NIK Anggota CU berhasil diubah'
				]);
		}
	}

	public function updateSystemNIK($nik)
  {
		$kelas = System::findOrFail(1);
		$val = $nik + 1;
		$kelas->nik = str_pad($val,16,"0",STR_PAD_LEFT);
		$kelas->update();
  }

	public function destroy($id, $cu)
	{
		$kelas = AnggotaCu::findOrFail($id);
		$kelasAnggotaCU = AnggotaCuCu::where('anggota_cu_id',$id)->get();
		$name = $kelas->name;

		if($kelas->tanggal_meninggal != null || $kelas->tanggal_cacat != null){
			return response()
			->json([
				'deleted' => false,
				'message' => $this->message. ' ' .$name. 'tidak berhasil dilakukan karena anggota ini antara sudah pernah mengajukan klaim JALINAN. Sehingga data anggota ini jika dihapus akan menyebabkan ketidakcocokan pada laporan.'
			]);
		}else{
			if($kelasAnggotaCU->count() > 1){
				$kelasAnggotaCUSingle = AnggotaCuCu::where('anggota_cu_id', $id)->where('cu_id',$cu)->first();
				if($kelasAnggotaCUSingle->tanggal_keluar != null){
					return response()
					->json([
						'deleted' => false,
						'message' => $this->message. ' ' .$name. 'tidak berhasil dilakukan karena anggota ini antara sudah dikeluarkan. Sehingga data anggota ini jika dihapus akan menyebabkan ketidakcocokan pada laporan.'
					]);
				}else{
					$kelasAnggotaCUSingle->delete();
					AnggotaProdukCu::with('produk_cu')->where('anggota_cu_id', $id)->whereHas('produk_cu', function($query) use ($cu){ 
						$query->where('id_cu',$cu); 
					})->delete();
				}
			}else{
				if($kelasAnggotaCU[0]->tanggal_keluar != null){
					return response()
					->json([
						'deleted' => false,
						'message' => $this->message. ' ' .$name. 'tidak berhasil dilakukan karena anggota ini antara sudah dikeluarkan. Sehingga data anggota ini jika dihapus akan menyebabkan ketidakcocokan pada laporan.'
					]);
				}else{
					if(!empty($kelas->gambar)){
						File::delete($this->imagepath . $kelas->gambar . '.jpg');
						File::delete($this->imagepath . $kelas->gambar . 'n.jpg');
					}
					$kelas->delete();
					$kelasAnggotaCU[0]->delete();
					AnggotaProdukCu::where('anggota_cu_id', $id)->delete();
				}
			}

			return response()
				->json([
					'deleted' => true,
					'message' => $this->message. ' ' .$name. 'berhasil dihapus'
				]);
		}
	}

	public function destroyCu($id)
	{
		$kelas = AnggotaCuCu::findOrFail($id);
		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Keanggotaan CU berhasil dihapus'
			]);
	}

	public function destroyKlaim($id)
	{
		$kelas = AnggotaCuKlaim::findOrFail($id);
		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Klaim anggota CU berhasil dihapus'
			]);
	}

	private function syncCu($request, $kelas)
	{
		// if by user bkcu
		if($request->anggota_cu_cu){
			$aTmp1 = [];
			$aTmp2 = [];
			$cus = $request->anggota_cu_cu;
			foreach($kelas->anggota_cu_cu as $aV){ $aTmp1[] = $aV['id']; }
			foreach($request->anggota_cu_cu as $aV){ 
				if(array_key_exists('id', $aV)){
					$aTmp2[] = $aV['id']; 
				}
			}
			$diff = array_diff($aTmp1, $aTmp2);

			if($diff){
				$val = array_values($diff)[0];
				AnggotaCuCu::findOrFail($val)->delete();
			}
			foreach($cus as $cu){
				if(array_key_exists('id', $cu)){
					$kelasCu = AnggotaCuCu::findOrFail($cu['id']);
					$kelasCu->update([
						'anggota_cu_id' => $kelas->id,
						'cu_id' => array_key_exists('cu_id', $cu) ? $cu['cu_id'] : null,
						'tp_id' => array_key_exists('tp_id', $cu) ? $cu['tp_id'] : null,
						'no_ba' => array_key_exists('no_ba', $cu) ? $cu['no_ba'] : null,
						'tanggal_masuk' => array_key_exists('tanggal_masuk', $cu) ? $cu['tanggal_masuk'] : null,
						'keterangan_masuk' => array_key_exists('keterangan_masuk', $cu) ? $cu['keterangan_masuk'] : null
					]);
				}else{
					AnggotaCuCu::create([
						'anggota_cu_id' => $kelas->id,
						'cu_id' => array_key_exists('cu_id', $cu) ? $cu['cu_id'] : null,
						'tp_id' => array_key_exists('tp_id', $cu) ? $cu['tp_id'] : null,
						'no_ba' => array_key_exists('no_ba', $cu) ? $cu['no_ba'] : null,
						'tanggal_masuk' => array_key_exists('tanggal_masuk', $cu) ? $cu['tanggal_masuk'] : null,
						'keterangan_masuk' => array_key_exists('keterangan_masuk', $cu) ? $cu['keterangan_masuk'] : null
					]);
				}
			}
		}
		
		// if by user cu
		if($request->id_cu){
			$kelasCu = AnggotaCuCu::where('anggota_cu_id',$kelas->id)->where('cu_id', $request->id_cu)->first();

			if($kelasCu){
				$kelasCuCu = AnggotaCuCu::where('anggota_cu_id',$kelas->id)->where('cu_id', $request->id_cu)->whereNull('tanggal_keluar')->first();
				
				if($kelasCuCu){
					$kelasCuCu->update([
						'anggota_cu_id' => $kelas->id,
						'cu_id' => $request->id_cu,
						'tp_id' => $request->tp_id,
						'no_ba' => $request->no_ba,
						'tanggal_masuk' => $request->tanggal_masuk,
						'keterangan_masuk' => $request->keterangan_masuk,
					]);
				}else{
					AnggotaCuCu::create([
						'anggota_cu_id' => $kelas->id,
						'cu_id' => $request->id_cu,
						'tp_id' => $request->tp_id,
						'no_ba' => $request->no_ba,
						'tanggal_masuk' => $request->tanggal_masuk,
						'keterangan_masuk' => $request->keterangan_masuk
					]);
				}
			}else{
				AnggotaCuCu::create([
					'anggota_cu_id' => $kelas->id,
					'cu_id' => $request->id_cu,
					'tp_id' => $request->tp_id,
					'no_ba' => $request->no_ba,
					'tanggal_masuk' => $request->tanggal_masuk,
					'keterangan_masuk' => $request->keterangan_masuk
				]);
			}
		}
	}

	private function syncProdukCu($request, $kelas)
	{
		$produkcu = array_merge($request->simpanan, $request->pinjaman);

		if($produkcu){
			$produkCuArray = array();

			foreach($produkcu as $produk){
				$produkCuArray[$produk['produk_cu']['id']] = [
					'produk_cu_id' => array_key_exists('produk_cu', $produk) ? $produk['produk_cu']['id'] : null,
					'saldo' => array_key_exists('saldo', $produk) ? $produk['saldo'] : null,
					'no_rek' => array_key_exists('no_rek', $produk) ? $produk['no_rek'] : null,
					'tanggal' => array_key_exists('tanggal', $produk) ? $produk['tanggal'] : null,
					'lama_pinjaman' => array_key_exists('lama_pinjaman', $produk) ? $produk['lama_pinjaman'] : null,
				];
			}

			$kelas->anggota_produk_cu()->sync($produkCuArray);
		}
	}

	public function uploadExcel(Request $request)
	{

		Excel::import(new AnggotaCuDraftImport, request()->file('file'));

		return response()
			->json([
				'uploaded' => true,
				'message' => $this->message.' berhasil diupload ke tabel draft, silahkan selanjutnya memeriksa hasil upload sebelum dimasukkan ke tabel utama'
			]);
	}

	public function uploadExcelProduk(Request $request)
	{

		Excel::import(new ProdukCuDraftImport, request()->file('file'));

		return response()
			->json([
				'uploaded' => true,
				'message' => $this->message.' berhasil diupload ke tabel draft, silahkan selanjutnya memeriksa hasil upload sebelum dimasukkan ke tabel utama'
			]);
	}

	public function count()
	{
			$table_data = AnggotaCu::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
    $time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\AnggotaCu')->where('created_at','>=',$time)->orderBy('created_at','desc')->get();

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

	public function systemNIK()
  {
    $table_data = System::select('nik')->first();
    return response()
        ->json([
            'model' => $table_data
        ]); 
  }

	public function cariDataKTP($nik)
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

	public function cariDataBA($id, $ba)
	{
		$table_data = AnggotaCu::with('anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_produk_cu','Villages','Districts','Regencies','Provinces')->whereHas('anggota_cu_cu', function($query) use ($id, $ba){
			$query->where('cu_id', $id)->where('no_ba',$ba);
		})->first();
		
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

	// TODO:
	public function produkData($id)
	{
		$table_data = AnggotaProdukCu::with('anggota_cu','anggota_produk_cu','Villages','Districts','Regencies','Provinces')->where('nik',$nik)->first();

		return response()
		->json([
			'model' => $table_data
		]);
	}
}