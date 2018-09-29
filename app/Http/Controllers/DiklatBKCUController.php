<?php
namespace App\Http\Controllers;

use DB;
use App\Kegiatan;
use App\KegiatanSasaran;
use App\Support\Helper;
use Illuminate\Http\Request;
use File;
use Image;

class DiklatBKCUController extends Controller{

	protected $width = 200;
	protected $height = 200;
	protected $message = "Diklat BKCU";

	public function index()
	{
		$table_data = Kegiatan::with('tempat','sasaran','Regencies')->where('tipe','diklat_bkcu')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPeriode($periode)
	{
		$table_data = Kegiatan::with('tempat')->where('tipe','diklat_bkcu')->where('periode',$periode)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Kegiatan::initialize(),
					'rules' => Kegiatan::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Kegiatan::$rules);

		$name = $request->name;

		$kelas = Kegiatan::create($request->except('tipe') + [
			'tipe' => 'diklat_bkcu'
		]);

		$kelas->sasaran()->sync(array_flatten($request->sasaran));
 
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = Kegiatan::with('tempat','sasaran')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, Kegiatan::$rules);

		$name = $request->name;

		$kelas = Kegiatan::findOrFail($id);

		$kelas->update($request->except('tipe') + [
			'tipe' => 'diklat_bkcu'
		]);
		
		$this->input_sasaran($id,$request);

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function input_sasaran($id_kegiatan,$request)
	{
			$sasarans = $request->sasaran;

			if(!empty($sasarans) && !empty($id_kegiatan)){
					KegiatanSasaran::where('id_kegiatan',$id_kegiatan)->delete();

					foreach($sasarans as $sasaran){
						foreach($sasaran as $s){
							$kelasSasaran = new KegiatanSasaran();
							$kelasSasaran->id_kegiatan = $id_kegiatan;
							$kelasSasaran->id_sasaran = $s;
							$kelasSasaran->save();
						}
					}
			}
	}

	public function destroy($id)
	{
		$kelas = Kegiatan::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}
}