<?php
namespace App\Http\Controllers;

use DB;
use File;
use Image;
use App\AnggotaCu;
use App\AnggotaCuCu;
use App\Support\Helper;
use App\AnggotaProdukCu;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;
use App\Imports\AnggotaCuNewDraftImport;

class AnggotaCuController extends Controller{

	protected $message = "Anggota CU";

	public function index()
	{
		$table_data = AnggotaCu::with('anggota_cu','Villages','Districts','Regencies','Provinces')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id)
	{
		$table_data = AnggotaCu::with('anggota_cu','Villages','Districts','Regencies','Provinces')->whereHas('anggota_cu', function($query) use ($id){ 
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
					'form' => AnggotaCu::initialize(),
					'rules' => AnggotaCu::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,AnggotaCu::$rules);

		$name = $request->name;

		$kelas = AnggotaCu::create($request->all());

		// cu
		if($request->cu){
			$cuArray = array();

			foreach($request->cu as $cu){
				$cuArray[$cu['no_ba']] = [
					'cu_id' => $cu['cu']['id'],
					'no_ba' => $cu['no_ba'],
					'tanggal_masuk' => $cu['tanggal_masuk']
				];	
			}

			$kelas->anggota_cu()->sync($cuArray);
		}else if($request->id_cu){
			AnggotaCuCu::create([
				'anggota_cu_id' => $kelas->id,
				'cu_id' => $request->id_cu,
				'no_ba' => $request->no_ba,
				'tanggal_masuk' => $request->tanggal_masuk
			]);
		}

		$produkcu = array_merge($request->simpanan, $request->pinjaman);

		// produk cu
		if($produkcu){
			$produkCuArray = array();

			foreach($produkcu as $produk){
				$produkCuArray[$produk['produk_cu']['id']] = [
					'produk_cu_id' => $produk['produk_cu']['id'],
					'saldo' => $produk['saldo'] ];
			}

			$kelas->anggota_produk_cu()->sync($produkCuArray);
		}
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
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


	public function editIdentitas($id)
	{
		$kelas = AnggotaCu::with('anggota_cu','anggota_produk_cu','Villages','Districts','Regencies','Provinces')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function updateIdentitas(Request $request, $id)
	{
		$this->validate($request, AnggotaCu::$rules);

		$name = $request->name;

		$kelas = AnggotaCu::findOrFail($id);

		$kelas->update($request->all());	

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
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

	public function destroy($id)
	{
		$kelas = AnggotaCu::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' ' .$name. 'berhasil dihapus'
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

	public function uploadExcelNew(Request $request)
	{
		Excel::import(new AnggotaCuNewDraftImport, request()->file('file'));

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
		$table_data = AnggotaCu::where('nik',$nik)->select('id')->first();

		return response()
		->json([
			'model' => $table_data
		]);
	}
}