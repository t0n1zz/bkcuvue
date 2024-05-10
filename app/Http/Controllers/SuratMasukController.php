<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use App\SuratMasuk;
use App\Dokumen;
use App\DokumenKategori;
use Illuminate\Http\Request;

class SuratMasukController extends Controller{

	protected $filepath = 'files/dokumen/';
	protected $width = 300;
	protected $height = 200;
	protected $message = 'Surat Masuk';

  public function indexCu($cu, $periode)
	{
		if($periode == 'semua'){
			$table_data = SuratMasuk::with('Cu','dokumen')
				->where('id_cu',$cu)
				->advancedFilter();
		}else{
			$table_data = SuratMasuk::with('Cu','dokumen')
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
		$table_data = SuratMasuk::where('id_cu',$cu)->distinct('periode')->pluck('periode');

		return response()
		->json([
			'model' => $table_data
		]);
	}


	public function create()
	{
		return response()
			->json([
					'form' => SuratMasuk::initialize(),
					'rules' => SuratMasuk::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		\DB::beginTransaction(); 
		try{
			$this->validate($request,SuratMasuk::$rules);

			$name = $request->name;
			$id_cu = Auth::user()->id_cu;
			$request->id_cu = $id_cu;

			$format = $request->format;
			$formatedName = '';
			$fileExtension = 'link';

			if($format == 'upload'){
				$file = $request->content;
				
				$fileExtension = $file->getClientOriginalExtension();
				$filename = $file->getClientOriginalName();
				$formatedName = str_limit(preg_replace('/[^A-Za-z0-9\-]/', '',$name),10,'') . '_' .uniqid(). '.' . $fileExtension;
				$file->move($this->filepath,$formatedName);
			}

			$dokumenKategori = DokumenKategori::where('id_cu',$id_cu)->where('name','surat')->first();

			if(!$dokumenKategori){
				$dokumenKategori = DokumenKategori::create([
					'id_cu' => $id_cu,
					'name' => 'surat',
					'slug' => 'surat',
					'deskripsi' => 'surat'
				]);
			}

			$kelasDokumen = Dokumen::create([ 
				'id_cu' => $id_cu,
				'id_dokumen_kategori' => $dokumenKategori->id,
				'name' => $request->hal,
				'filename' => $formatedName,
				'link' => $request->link,
				'format' => $format,
				'tipe' => $fileExtension,
				'status' => 'INTERNAL',
				'keterangan' => $request->keterangan
			]);

			$kelas = SuratMasuk::create($request->except('id_dokumen') + [
				'id_dokumen' => $kelasDokumen->id
			]);

			\DB::commit();
			
			return response()
				->json([
					'saved' => true,
					'message' => 'Surat masuk ' .$name. ' berhasil ditambah',
					'id' => $kelas->id
				]);	
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}
	}

	public function edit($id)
	{
		$kelas = SuratMasuk::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,SuratMasuk::$rules);

		$name = $request->name;

		$kelas = SuratMasuk::findOrFail($id);

		$kelas->update($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Surat masuk ' .$name. ' berhasil diubah',
				'id' => $kelas->id
			]);	
	}

	public function destroy($id)
	{
		\DB::beginTransaction(); 
		try{
			$kelas = SuratMasuk::findOrFail($id);
			$name = $kelas->name;

			$kelasDokumen = Dokumen::findOrFail($kelas->id_dokumen);

			if(!empty($kelasDokumen->filename)){
				File::delete($this->filepath . $kelasDokumen->filename);
			}
	
			$kelasDokumen->delete();
	
			$kelas->delete();

			\DB::commit();
			return response()
				->json([
					'deleted' => true,
					'message' => 'Surat masuk ' .$name. 'berhasil dihapus'
				]);
		} catch (\Exception $e){
			\DB::rollBack();
			abort(500, $e->getMessage());
		}
	}
}