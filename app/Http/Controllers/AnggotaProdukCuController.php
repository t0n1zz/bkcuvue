h<?php
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
use App\AnggotaProdukCuTransaksi;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;
use App\Imports\AnggotaCuDraftImport;

class AnggotaProdukCuController extends Controller{

	protected $imagepath = 'images/anggotaCu/';
	protected $width = 300;
	protected $height = 200;
	protected $message = "Anggota CU";

	public function index($id, $cu)
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

	public function indexSaldo($id)
	{
		$table_data = AnggotaProdukCuTransaksi::where('anggota_produk_cu_id', $id)->advancedFilter();
		
		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => AnggotaProdukCu::initialize(),
					'rules' => AnggotaProdukCu::$rules,
					'option' => []
			]);
	}

	public function createSaldo()
	{
		return response()
			->json([
					'form' => AnggotaProdukCuTransaksi::initialize(),
					'rules' => AnggotaProdukCuTransaksi::$rules,
					'option' => []
			]);
	}

	public function store(Request $request, $id)
	{
		$kelas = AnggotaProdukCu::create([
			'anggota_cu_id' => $id,
			'produk_cu_id' => $request->produk_cu['id'],
			'saldo' => $request->saldo,
			'no_rek' => $request->no_rek,
			'tanggal' => $request->tanggal,
			'tanggal_target' => $request->tanggal_target,
			'lama_pinjaman' => $request->lama_pinjaman,
			'tujuan' => $request->tujuan,
		]);

		AnggotaProdukCuTransaksi::create([
			'anggota_produk_cu_id' => $kelas->id,
			'saldo' => $request->saldo,
			'tanggal' => $request->tanggal,
		]);

		return response()
			->json([
				'saved' => true,
				'message' => 'Produk anggota CU berhasil ditambah'
			]);	
	}

	public function storeSaldo(Request $request, $id)
	{

		AnggotaProdukCuTransaksi::create([
			'anggota_produk_cu_id' => $id,
			'saldo' => $request->saldo,
			'tanggal' => $request->tanggal,
		]);

		return response()
			->json([
				'saved' => true,
				'message' => 'Produk anggota CU berhasil ditambah'
			]);	
	}


	public function edit($id)
	{
		$kelas = AnggotaProdukCu::findOrFail($id);

		return response()
			->json([
					'form' => $kelas,
					'option' => []
			]);
	}

	public function editSaldo($id)
	{
		$kelas = AnggotaProdukCuTransaksi::findOrFail($id);

		return response()
			->json([
					'form' => $kelas,
					'option' => []
			]);
	}

	public function update(Request $request, $id)
	{
		$kelas = AnggotaProdukCu::findOrFail($id);

		$selisih_saldo = $request->saldo - $kelas->saldo;

		$kelas->update([
			'produk_cu_id' => $request->produk_cu['id'],
			'saldo' => $request->saldo,
			'no_rek' => $request->no_rek,
			'tanggal' => $request->tanggal,
			'tanggal_target' => $request->tanggal_target,
			'lama_pinjaman' => $request->lama_pinjaman,
			'tujuan' => $request->tujuan,
		]);	

		AnggotaProdukCuTransaksi::create([
			'anggota_produk_cu_id' => $kelas->id,
			'saldo' => $selisih_saldo,
			'tanggal' => $kelas->updated_at,
		]);

		return response()
			->json([
				'saved' => true,
				'message' => 'Produk anggota CU berhasil diubah'
			]);
	}

	public function updateSaldo(Request $request, $id)
	{
		$kelas = AnggotaProdukCuTransaksi::findOrFail($id);

		$kelas->update($request->all());	

		return response()
			->json([
				'saved' => true,
				'message' => 'Produk anggota berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = AnggotaProdukCu::findOrFail($id);
		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Produk anggota CU berhasil dihapus'
			]);
	}

	public function destroySaldo($id)
	{
		$kelas = AnggotaProdukCuTransaksi::findOrFail($id);
		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Produk anggota CU berhasil dihapus'
			]);
	}

	public function uploadExcel(Request $request)
	{
		Excel::import(new AnggotaProdukCuDraftImport, request()->file('file'));

		return response()
			->json([
				'uploaded' => true,
				'message' => $this->message.' berhasil diupload ke tabel draft, silahkan selanjutnya memeriksa hasil upload sebelum dimasukkan ke tabel utama'
			]);
	}

	public function count()
	{
			$table_data = AnggotaProdukCu::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
    $time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\AnggotaProdukCu')->where('created_at','>=',$time)->orderBy('created_at','desc')->get();

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

	public function cariDataBA($cu, $ba)
	{
		$table_data = AnggotaCu::with('anggota_cu_cu.cu','anggota_cu_cu.tp','anggota_produk_cu','Villages','Districts','Regencies','Provinces')->whereHas('anggota_cu_cu', function($query) use ($cu, $ba){ 
			$query->where('cu_id',$cu)->where('no_ba',$ba); 
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