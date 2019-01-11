<?php
namespace App\Http\Controllers;

use DB;
use File;
use Image;
use App\Kegiatan;
use App\Support\Helper;
use App\KegiatanPanitia;
use App\KegiatanPeserta;
use Illuminate\Http\Request;

class DiklatBKCUController extends Controller{

	protected $width = 200;
	protected $height = 200;
	protected $message = "Diklat";

	public function index()
	{
		$table_data = Kegiatan::with('tempat','sasaran','Regencies','Provinces')->where('tipe','diklat_bkcu')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPeriode($periode)
	{
		$table_data = Kegiatan::with('tempat','sasaran','Regencies','Provinces')->where('tipe','diklat_bkcu')->where('periode',$periode)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPeserta($id)
	{
		$table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu','aktivis.pendidikan_tertinggi')->where('kegiatan_id',$id)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPesertaCu($id, $cu)
	{
		$table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu','aktivis.pendidikan_tertinggi')->where('kegiatan_id',$id)->whereHas('aktivis.pekerjaan', function($query) use ($cu){
			$query->where('tipe','1')->where('id_tempat',$cu);
		})->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}
	

	public function getPeriode()
	{
		$table_data = Kegiatan::distinct('periode')->pluck('periode');

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

		$kelas = Kegiatan::create($request->except('tipe','status') + [
			'tipe' => 'diklat_bkcu', 'status' => '1'
		]);

		$kelas->sasaran()->sync(array_flatten($request->sasaran));

		if($request->panitia){
			$panitiaArray = array();

			foreach($request->panitia as $panitia){
				$panitiaArray[$panitia['aktivis_id']] = ['peran' => $panitia['peran'], 'keterangan' => $panitia['keterangan'], 'asal' => $panitia['asal'] ];
			}

			$kelas->panitia_dalam()->sync($panitiaArray);
		}
 
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function storePeserta(Request $request, $id)
	{
		$kelas = KegiatanPeserta::create($request->all() + [ 'kegiatan_id' => $id ]);
 
		return response()
			->json([
				'saved' => true,
				'message' => 'Peserta' . $this->message. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = Kegiatan::with('tempat','sasaran','panitia_dalam.pekerjaan_aktif.cu','panitia_luar')->findOrFail($id);

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
		
		$kelas->sasaran()->sync(array_flatten($request->sasaran));

		if($request->panitia){
			$panitiaArray = array();

			foreach($request->panitia as $panitia){
				$panitiaArray[$panitia['aktivis_id']] = ['peran' => $panitia['peran'], 'keterangan' => $panitia['keterangan'], 'asal' => $panitia['asal']];
			}

			$kelas->panitia_dalam()->sync($panitiaArray);
		}


		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function updateStatus(Request $request, $id)
	{
		$kelas = Kegiatan::findOrFail($id);

		$kelas->status = $request->status;

		if($request->status == 6){
			$kelas->keteranganBatal = $request->keterangan;
		}else{
			$kelas->keteranganBatal = "";
		}

		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => "Status berhasil diubah"
			]);
	}

	public function updatePeserta(Request $request, $id)
	{
		$kelas = KegiatanPeserta::findOrFail($id);

		$kelas->keterangan = $request->keterangan;

		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => "Peserta berhasil diubah"
			]);
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

	public function destroyPeserta($id)
	{
		$kelas = KegiatanPeserta::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  'Peserta ' .$name. 'berhasil dihapus'
			]);
	}

	public function countPeserta($id)
	{
			$table_data = KegiatanPeserta::where('kegiatan_id',$id)->count();
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}