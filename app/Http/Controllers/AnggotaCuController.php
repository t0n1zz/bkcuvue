<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Image;
use Validator;
use App\AnggotaCu;
use App\AnggotaCuCu;
use App\AnggotaCuKlaim;
use App\Support\Helper;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\HeadingRowImport;
use App\AnggotaProdukCu;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;
use App\Imports\AnggotaCuDraftImport;

class AnggotaCuController extends Controller{

	protected $imagepath = 'images/anggotaCu/';
	protected $width = 300;
	protected $height = 200;
	protected $message = "Anggota CU";

	public function index()
	{
		$table_data = AnggotaCu::with('anggota_cu_cu_not_keluar.cu','anggota_cu_cu_not_keluar.tp','Villages','Districts','Regencies','Provinces')->whereHas('anggota_cu_cu_not_keluar', function($query){ 
			$query->whereNull('anggota_cu_cu.tanggal_keluar'); 
		})->where('status_jalinan','!=','meninggal')->orWhere('status_jalinan', NULL)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexKeluar()
	{
		$table_data = AnggotaCu::with('anggota_cu_cu_keluar.cu'.'anggota_cu_cu_keluar.tp','Villages','Districts','Regencies','Provinces')->whereHas('anggota_cu_cu_keluar', function($query){ 
			$query->whereNotNull('anggota_cu_cu.tanggal_keluar'); 
		})->where('status_jalinan','!=','meninggal')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexMeninggal()
	{
		$table_data = AnggotaCu::with('anggota_cu_cu_not_keluar.cu','anggota_cu_cu_not_keluar.tp','Villages','Districts','Regencies','Provinces')->where('status_jalinan','meninggal')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($cu, $tp)
	{
		$table_data = AnggotaCu::with('anggota_cu_cu_not_keluar.cu','anggota_cu_cu_not_keluar.tp','Villages','Districts','Regencies','Provinces')->whereHas('anggota_cu_not_keluar', function($query) use ($cu, $tp){ 
			if($tp != 'semua'){
				$query->where('anggota_cu_cu.cu_id',$cu)->where('anggota_cu_cu.tp_id',$tp)->whereNull('anggota_cu_cu.tanggal_keluar'); 
			}else{
				$query->where('anggota_cu_cu.cu_id',$cu)->whereNull('anggota_cu_cu.tanggal_keluar'); 
			}
		})->where(function($query){
			$query->where('status_jalinan','!=','meninggal')->orWhere('status_jalinan', NULL);
		})->advancedFilter();

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
		})->where('status_jalinan','!=','meninggal')->advancedFilter();

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
		})->where('status_jalinan','meninggal')->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
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

	public function indexKlaim()
	{
		$table_data = AnggotaCuKlaim::with('anggota_cu','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->advancedFilter();

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

			$name = $request->name;

			if(!empty($request->gambar))
				$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request,'');
			else
				$fileName = '';	

			$kelas = AnggotaCu::create($request->except('gambar') + [
				'gambar' => $fileName
			]);
			
			$this->syncCu($request, $kelas);
			// $this->syncProdukCu($request, $kelas);

			\DB::commit();

			return response()
				->json([
					'saved' => true,
					'message' => $this->message. ' ' .$name. ' berhasil ditambah',
					'id' => $kelas->id
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

	public function storeProduk(Request $request, $id)
	{
		// return response()->json($id);

		AnggotaProdukCu::create([
			'anggota_cu_id' => $id,
			'produk_cu_id' => $request->produk_cu['id'],
			'saldo' => $request->saldo,
			'no_rek' => $request->no_rek,
			'tanggal' => $request->tanggal,
			'lama_pinjaman' => $request->lama_pinjaman,
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Produk anggota CU berhasil ditambah'
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
		$rules = AnggotaCu::$rules;
		$rules['nik'] = $rules['nik'] . ',id,' . $id;
		$validationCertificate  = Validator::make($request->all(), $rules); 
		$name = $request->name;

		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request,$kelas);
		else
			$fileName = '';

		$kelas = AnggotaCu::findOrFail($id);

		$kelas->update($request->except('gambar') + [
			'gambar' => $fileName
		]);	

		$cuArray = $this->syncCu($request, $kelas);

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah',
				'id' => $kelas->id
			]);
	}

	public function updateKeluar(Request $request, $id)
	{
		$kelas = AnggotaCuCu::findOrFail($id);

		$kelas->update([
			'tanggal_keluar' => $request->tanggal_keluar,
			'keterangan_keluar' => $request->keterangan_keluar,
		]);	

		return response()
			->json([
				'saved' => true,
				'message' => 'Anggota CU berhasil keluar'
			]);
	}

	public function updateBatalKeluar($id)
	{
		$kelas = AnggotaCuCu::findOrFail($id);

		$kelas->update([
			'tanggal_keluar' => '',
			'keterangan_keluar' => '',
		]);	

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

		return response()
			->json([
				'saved' => true,
				'message' => 'Keanggotaan CU berhasil diubah'
			]);
	}

	public function updateProduk(Request $request, $id)
	{
		$kelas = AnggotaProdukCu::findOrFail($id);

		$kelas->update([
			'produk_cu_id' => $request->produk_cu['id'],
			'saldo' => $request->saldo,
			'no_rek' => $request->no_rek,
			'tanggal' => $request->tanggal,
			'lama_pinjaman' => $request->lama_pinjaman,
		]);	

		return response()
			->json([
				'saved' => true,
				'message' => 'Produk anggota CU berhasil diubah'
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

	public function updateKlaim(Request $request, $id)
	{
		$kelas = AnggotaCuKlaim::findOrFail($id);

		$kelas->update($request->all());	

		return response()
			->json([
				'saved' => true,
				'message' => 'Klaim anggota CU berhasil diubah'
			]);
	}

	public function updateKlaimStatus(Request $request, $id)
	{
		$kelas = AnggotaCuKlaim::findOrFail($id);

		$kelas->status_klaim = $request->status_klaim;

		$anggota_cu_id = $kelas->anggota_cu_id;
		$tipe = $kelas->tipe;

		if($kelas->status_klaim == 1){
			$message = "Klaim JALINAN dicairkan";
		}else if($kelas->status_klaim == 2){
			$message = "Klaim JALINAN ditolak";
		}else if($kelas->status_klaim == 0){
			$message = "Klaim pending";
		}

		$kelas->update();

		$kelas2 = AnggotaCu::findOrFail($anggota_cu_id);

		if($request->status_klaim == 1){
			$kelas2->status_jalinan = $tipe;
		}else{
			$kelas2->status_jalinan = '';
		}

		$kelas2->update();

		return response()
			->json([
				'saved' => true,
				'message' => $message
			]);
	}

	public function destroy($id, $cu)
	{
		$kelas = AnggotaCu::findOrFail($id);
		$kelasAnggotaCU = AnggotaCuCu::where('anggota_cu_id',$id)->get();

		$name = $kelas->name;

		if($kelasAnggotaCU->count() > 1){
			AnggotaCuCu::where('anggota_cu_id', $id)->where('cu_id',$cu)->delete();
			AnggotaProdukCu::with('produk_cu')->where('anggota_cu_id', $id)->whereHas('produk_cu', function($query) use ($cu){ 
				$query->where('id_cu',$cu); 
			})->delete();
		}else{
			if(!empty($kelas->gambar)){
				File::delete($this->imagepath . $kelas->gambar . '.jpg');
				File::delete($this->imagepath . $kelas->gambar . 'n.jpg');
			}
			AnggotaCuCu::where('anggota_cu_id', $id)->delete();
			AnggotaProdukCu::where('anggota_cu_id', $id)->delete();
			$kelas->delete();
		}

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
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

	public function destroyProduk($id)
	{
		$kelas = AnggotaProdukCu::findOrFail($id);
		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Produk anggota CU berhasil dihapus'
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
		if($request->anggota_cu_cu){
			$cus = $request->anggota_cu_cu;
			unset($cus['id']);
			unset($cus['name']);

			$cuArray = array();

			foreach($cus as $cu){
				$cuArray[$cu['no_ba']] = [
					'cu_id' => array_key_exists('cu_id', $cu) ? $cu['cu_id'] : null,
					'tp_id' => array_key_exists('tp_id', $cu) ? $cu['tp_id'] : null,
					'no_ba' => array_key_exists('no_ba', $cu) ? $cu['no_ba'] : null,
					'tanggal_masuk' => array_key_exists('tanggal_masuk', $cu) ? $cu['tanggal_masuk'] : null,
					'keterangan_masuk' => array_key_exists('keterangan_masuk', $cu) ? $cu['keterangan_masuk'] : null
				];
			}
			// return $cuArray;
			$kelas->anggota_cu()->sync($cuArray);
		}
		
		if($request->id_cu){
			$kelasCu = AnggotaCuCU::where('anggota_cu_id',$kelas->id)->first();

			if($kelasCu){
				$kelasCu = AnggotaCuCU::where('anggota_cu_id',$kelas->id);
				$kelasCu->update([
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