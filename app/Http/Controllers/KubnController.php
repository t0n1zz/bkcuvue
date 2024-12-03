<?php
namespace App\Http\Controllers;

use App\Kubn;
use App\KubnDiklat;
use App\KubnAnggota;
use Illuminate\Http\Request;
use App\Support\Helper;

class KubnController extends Controller{

	protected $imagepath = 'images/kubn/';

	public function index()
	{
    	$table_data = Kubn::with('Cu','Tp','Usaha','Villages','Districts','Regencies','Provinces')->advancedFilter();

    	return response()
			->json([
				'model' => $table_data
			]);
	}
  
  public function indexCu($id)
	{
		$table_data = Kubn::with('Cu','Tp','Usaha','Villages','Districts','Regencies','Provinces')->where('id_cu',$id)->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexAnggota($id)
	{
		$table_data = KubnAnggota::with('anggota_cu')->where('kubn_id',$id)->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexDiklat($id)
	{
		$table_data = KubnDiklat::where('id_kubn',$id)->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function getCu($id)
	{
		$table_data = Kubn::where('id_cu','=',$id)->select('id','name')->orderby('name','asc')->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => Kubn::initialize(),
					'rules' => Kubn::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Kubn::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,'300','200',$request->gambar,'', $name);
		else
			$fileName = '';

		if($request->tipe_anggota == 'manual'){
			$jmlh_anggota = $request->jmlh_anggota;
		}else{
			$jmlh_anggota = count($request->anggota);	
		}

		$kelas = Kubn::create($request->except('jmlh_anggota','gambar') + [
			'jmlh_anggota' => $jmlh_anggota,
			'gambar' => $fileName
		]);

		if ($request->anggota) {
			$anggotaArray = array();

			foreach ($request->anggota as $anggota) {
				$deskripsi = '';
				if (array_key_exists("deskripsi", $anggota)) {
					$deskripsi = $anggota['deskripsi'];
				}
				$anggotaArray[$anggota['anggota_cu_id']] = [
					'jabatan' => $anggota['jabatan'],
					'tanggal_mulai' => $anggota['tanggal_mulai'],
					'deskripsi' => $deskripsi,
				];

				if (isset($anggota['tanggal_selesai']) && !is_null($anggota['tanggal_selesai'])) {
					$anggotaArray[$anggota['anggota_cu_id']]['tanggal_selesai'] = $anggota['tanggal_selesai'];
				}
			}

			$kelas->anggota_kubn()->sync($anggotaArray);
		}
		
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
				'message' => 'Kubn ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function saveDiklat($id, $id_kubn, $name, $deskripsi, $tanggal_mulai, $tanggal_selesai, $fasilitator, $tempat)
	{
		if($id){
			$kelas = KubnDiklat::findOrFail($id);
		}else{
			$kelas = new KubnDiklat();
		}

		$kelas->name = $name;
		$kelas->id_kubn = $id_kubn;
		$kelas->deskripsi = $deskripsi;
		$kelas->tanggal_mulai = $tanggal_mulai;
		$kelas->tanggal_selesai = $tanggal_selesai;
		$kelas->fasilitator = $fasilitator;
		$kelas->tempat = $tempat;

		$kelas->save();
	}

	public function edit($id)
	{
		$kelas = Kubn::with('Cu','Tp','Usaha','Villages','Districts','Regencies','Provinces','anggota_kubn.anggota_cu_cu','diklat')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Kubn::$rules);

		$name = $request->name;

		$kelas = Kubn::findOrFail($id);

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,'300','200',$request->gambar, $kelas->gambar, $name);
		else
			$fileName = '';

		if($request->tipe_anggota == 'manual'){
			$jmlh_anggota = $request->jmlh_anggota;
		}else{
			$jmlh_anggota = count($request->anggota);	
		}

		$kelas->update($request->except('jmlh_anggota','gambar') + [
			'jmlh_anggota' => $jmlh_anggota,
			'gambar' => $fileName
		]);

		if ($request->anggota) {
			$anggotaArray = array();

			foreach ($request->anggota as $anggota) {
				$deskripsi = '';
				if (array_key_exists("deskripsi", $anggota)) {
					$deskripsi = $anggota['deskripsi'];
				}
				$anggotaArray[$anggota['anggota_cu_id']] = [
					'jabatan' => $anggota['jabatan'],
					'tanggal_mulai' => $anggota['tanggal_mulai'],
					'deskripsi' => $deskripsi,
				];

				if (isset($anggota['tanggal_selesai']) && !is_null($anggota['tanggal_selesai'])) {
					$anggotaArray[$anggota['anggota_cu_id']]['tanggal_selesai'] = $anggota['tanggal_selesai'];
				}
			}

			$kelas->anggota_kubn()->sync($anggotaArray);
		}

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
				'message' => 'Kubn ' .$name. ' berhasil diubah',
				'id' => $kelas->id
			]);	
	}

	public function destroy($id)
	{
		$kelas = Kubn::findOrFail($id);
		$name = $kelas->name;

		if(!empty($kelas->gambar)){
			File::delete($this->imagepath . $kelas->gambar . '.jpg');
			File::delete($this->imagepath . $kelas->gambar . 'n.jpg');
		}

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Kubn ' .$name. 'berhasil dihapus'
			]);
	}

	public function count()
	{
			$id = \Auth::user()->id_cu;

			if($id == 0){
					$table_data = Kubn::count();
			}else{
					$table_data = Kubn::where('id_cu',$id)->count();
			}
			
			return response()
			->json([
					'model' => $table_data
			]);
	}
}