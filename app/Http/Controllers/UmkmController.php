<?php
namespace App\Http\Controllers;

use App\Umkm;
use App\UmkmDiklat;
use Illuminate\Http\Request;
use App\Support\Helper;

class UmkmController extends Controller{

	public function index()
	{
    	$table_data = Umkm::with('Cu','anggota_cu','Usaha','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->advancedFilter();

    	return response()
			->json([
				'model' => $table_data
			]);
	}
  
  public function indexCu($id)
	{
		$table_data = Umkm::with('Cu','anggota_cu','Usaha','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->where('id_cu',$id)->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexDiklat($id)
	{
		$table_data = UmkmDiklat::where('id_umkm',$id)->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function getCu($id)
	{
		$table_data = Umkm::where('id_cu','=',$id)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Umkm::initialize(),
					'rules' => Umkm::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Umkm::$rules);

		$name = $request->name;

		$kelas = Umkm::create($request->all());
		
		if(!empty($request->diklat)){
			foreach($request->diklat as $a){
				$diklat_name = array_key_exists('name', $a) ? $a['name'] : null;
				$deskripsi = array_key_exists('deskripsi', $a) ? $a['deskripsi'] : null;
				$tanggal_mulai = array_key_exists('tanggal_mulai', $a) ? $a['tanggal_mulai'] : null;
				$tanggal_selesai = array_key_exists('tanggal_selesai', $a) ? $a['tanggal_selesai'] : null;

				if ($tanggal_selesai !== null && !strtotime($tanggal_selesai)) {
					$tanggal_selesai = null;
				}

				$fasilitator = array_key_exists('fasilitator', $a) ? $a['fasilitator'] : null;
				$tempat = array_key_exists('tempat', $a) ? $a['tempat'] : null;

				$this->saveDiklat(null,$kelas->id,$diklat_name, $deskripsi, $tanggal_mulai, $tanggal_selesai, $fasilitator, $tempat);
			}
		}

		return response()
			->json([
				'saved' => true,
				'message' => 'Umkm ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function saveDiklat($id, $id_umkm, $name, $deskripsi, $tanggal_mulai, $tanggal_selesai, $fasilitator, $tempat)
	{
		if($id){
			$kelas = UmkmDiklat::findOrFail($id);
		}else{
			$kelas = new UmkmDiklat();
		}

		$kelas->name = $name;
		$kelas->id_umkm = $id_umkm;
		$kelas->deskripsi = $deskripsi;
		$kelas->tanggal_mulai = $tanggal_mulai;
		$kelas->tanggal_selesai = $tanggal_selesai;
		$kelas->fasilitator = $fasilitator;
		$kelas->tempat = $tempat;

		$kelas->save();
	}

	public function edit($id)
	{
		$kelas = Umkm::with('Cu','anggota_cu','diklat')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Umkm::$rules);

		$name = $request->name;

		$kelas = Umkm::findOrFail($id);

		$kelas->update($request->all());

		if(!empty($request->diklat)){
			foreach($request->diklat as $a){
				$diklat_name = array_key_exists('name', $a) ? $a['name'] : null;
				$deskripsi = array_key_exists('deskripsi', $a) ? $a['deskripsi'] : null;
				$tanggal_mulai = array_key_exists('tanggal_mulai', $a) ? $a['tanggal_mulai'] : null;
				$tanggal_selesai = array_key_exists('tanggal_selesai', $a) ? $a['tanggal_selesai'] : null;

				if ($tanggal_selesai !== null && !strtotime($tanggal_selesai)) {
					$tanggal_selesai = null;
				}

				$fasilitator = array_key_exists('fasilitator', $a) ? $a['fasilitator'] : null;
				$tempat = array_key_exists('tempat', $a) ? $a['tempat'] : null;

				$this->saveDiklat(array_key_exists('id', $a) ? $a['id'] : null,$kelas->id,$diklat_name, $deskripsi, $tanggal_mulai, $tanggal_selesai, $fasilitator, $tempat);
			}
		}
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Umkm ' .$name. ' berhasil diubah',
				'id' => $kelas->id
			]);	
	}

	public function destroy($id)
	{
		$kelas = Umkm::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Umkm ' .$name. 'berhasil dihapus'
			]);
	}

	public function count()
	{
			$id = \Auth::user()->id_cu;

			if($id == 0){
					$table_data = Umkm::count();
			}else{
					$table_data = Umkm::where('id_cu',$id)->count();
			}
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}