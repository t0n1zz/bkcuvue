<?php
namespace App\Http\Controllers;

use DB;
use App\Surat;
use App\SuratKode;
use App\SuratKodeTemp;
use App\SuratKategori;
use App\Support\Helper;
use Illuminate\Http\Request;
use File;
use Image;

class SuratController extends Controller{

	protected $message = 'Surat';


	public function indexCu($cu, $periode)
	{
		if($periode == 'semua'){
			$table_data = Surat::with('kategori','Cu','dokumen')
			->where('id_cu',$cu)
			->advancedFilter();
		}else{
			$table_data = Surat::with('kategori','Cu','dokumen')
			->where('id_cu',$cu)
			->where('periode',$periode)
			->advancedFilter();
		}

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function getPeriode($cu)
	{
		$table_data = SuratKode::where('id_cu',$cu)->distinct('periode')->pluck('periode');

		return response()
		->json([
			'model' => $table_data
		]);
	}


	public function create($tipe)
	{
		$id_user = Auth::user()->id;
		$id_cu = Auth::user()->id_cu;
		$periode = \Carbon\Carbon::now()->year;
		$suratKategori = SuratKategori::where('id_cu',$id_cu)->where('periode',$periode)->get();

		// get recent surat kode
		$suratKode = SuratKode::where('id_cu',$id_cu)->where('periode',$periode)->where('tipe', $tipe)->first();

		// check if there is blocking surat kode by this user
		$suratKodeTemp = SuratKodeTemp::where('id_surat_kode',$suratKode->id)->where('id_user', $id_user)->whereNull('id_surat')->first();
		
		// if yes then use the blocking surat kode by this user
		if($suratKodeTemp){
			$kode = SuratKode::where('id_cu',$id_cu)->where('periode',$periode)->where('name', $suratKodeTemp->name)->first();
		
		// if no 
		}else{

			// check if there is blocking surat kode by general
			$suratKodeTempKosong = SuratKodeTemp::where('id_surat_kode',$suratKode->id)->whereNull('id_surat')->first();

			// if yes then use the blocking surat kode by general
			if($suratKodeTempKosong){
				$kode = SuratKode::where('id_cu',$id_cu)->where('periode',$periode)->where('name', $suratKodeTempKosong->name)->first();

				return response()
					->json([
							'model' => $suratKategori,
							'id_surat_kode' => $kode->id,
							'kode' => $kode->name,
							'form' => Surat::initialize(),
							'rules' => Surat::$rules,
							'option' => []
					]);

			// if no then use recent surat kode	
			}else{
				$kode = $suratKode;
		
				SuratKodeTemp::create([
					'id_kode' => $kode->id,
					'id_user' => $id_user,
					'name' => $kode->name + 1,
				]);

				return response()
					->json([
							'model' => $suratKategori,
							'id_surat_kode' => $kode->id,
							'kode' => $kode->name + 1,
							'form' => Surat::initialize(),
							'rules' => Surat::$rules,
							'option' => []
					]);
			}
		}
	}

	public function store(Request $request)
	{
		$this->validate($request,Surat::$rules);

		$name = $request->name;

		$suratKodeTempKosong = SuratKodeTemp::where('id_surat_kode',$request->id_surat_kode)->where('name', $request->kode)->whereNull('id_surat')->first();

		if($suratKodeTempKosong){
			$id_cu = Auth::user()->id_cu;
			$periode = \Carbon\Carbon::now()->year;

			$request['id_surat_kode'] = $suratKodeTempKosong->id;

			$kelas = Surat::create($request->all());

			$suratKode = SuratKode::where('id_cu',$id_cu)->where('periode', $periode)->first();
			if($suratKode->name == $request->kode){
				$suratKode->name = $request->kode + 1;
				$suratKode->update();
			}

			$suratKodeTempKosong->id_surat = $kelas->id;
			$suratKodeTempKosong->update();

			return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah'
			]);
		}else{
			return response()
			->json([
				'saved' => false,
				'message' => $this->message. ' ' .$name. ' tidak berhasil ditambah, silahkan coba lagi.'
			]);
		}
	}

	public function edit($id)
	{
		$kelas = Surat::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Surat::$rules);

		$name = $request->name;

		$kelas = Surat::findOrFail($id);

		$kelas->update($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function destroy($id)
	{
		$kelas = Surat::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function count()
	{
			$id = \Auth::user()->id_cu;

			if($id == 0){
					$table_data = Surat::count();
			}else{
					$table_data = Surat::where('id_cu',$id)->count();
			}
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}
