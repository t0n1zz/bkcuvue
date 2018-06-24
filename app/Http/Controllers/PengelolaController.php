<?php
namespace App\Http\Controllers;

use DB;
use App\Pengelola;
use App\PengelolaPekerjaan;
use App\PengelolaPendidikan;
use App\PengelolaOrganisasi;
use App\PengelolaKeluarga;
use App\PengelolaAnggotaCu;
use App\Support\Helper;
use Illuminate\Http\Request;
use File;
use Image;

class PengelolaController extends Controller{

	protected $imagepath = 'images/Pengelola/';
	protected $width = 300;
	protected $height = 200;
	protected $message = 'Pengelola';

	public function index()
	{
		$table_data = Pengelola::with('pekerjaan_aktif.cu','pendidikan_tertinggi')->whereHas('pekerjaan',function($query){
			$query->where('selesai',null)->orWhere('selesai','>',date('Y-m-d'));
		})->filterPaginateOrder();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id)
	{
		if($id == 0){
			$tipe = 3;
			$id = 1;
		}else{
			$tipe = 1;
		}

		$table_data = Pengelola::with('pekerjaan_aktif.cu','pendidikan_tertinggi')
		->whereHas('pekerjaan', function($query) use ($id,$tipe){
			$query->where('tipe',$tipe)->where('id_tempat',$id)
			->where(function($q){
				$q->where('selesai',null)->orWhere('selesai','>',date('Y-m-d'));
			});
		})->filterPaginateOrder();


		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function create()
	{
		$form = Pengelola::initialize();
		$form['pendidikan'] = PengelolaPendidikan::initialize();
		$form['pekerjaan'] = PengelolaPekerjaan::initialize();
		$form['keluarga'] = ['ayah' => '', 'ibu' => ''];
		$form['anggota_cu'] = PengelolaAnggotaCu::initialize();
		$form['organisasi'] = PengelolaOrganisasi::initialize();

		return response()
			->json([
					'form' => $form,
					'rules' => Pengelola::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,Pengelola::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request,'');
		else
			$fileName = '';	
		
		// identitas	
		$kelas = Pengelola::create($request->except('gambar','nim') + [
			'gambar' => $fileName
		]);

		// keluarga
		$ayah = $request->keluarga['ayah'];
		$ibu = $request->keluarga['ibu'];
		$pasangan = $request->keluarga['pasangan'];
		$anak = $request->anak;

		if(!empty($ayah))
			$this->save_keluarga($request,$kelas->id,'Ayah',$ayah);
		
		if(!empty($ibu))
			$this->save_keluarga($request,$kelas->id,'Ibu',$ibu);

		if(!empty($pasangan))
			$this->save_keluarga($request,$kelas->id,'Pasangan',$pasangan);	

		if(!empty($anak)){
			foreach($anak as $a){
				$this->save_keluarga($request,$kelas->id,'Anak',$a['value']);
			}
		}	

		// anggota cu, pendidikan, organisasi, pekerjaan
		$this->save_anggota_cu($request,$kelas->id);
		$this->save_pendidikan($request,$kelas->id);
		$this->save_organisasi($request,$kelas->id);
		$pekerjaan = $this->save_pekerjaan($request,$kelas->id,true);

		// nim
		$no_bkcu = sprintf("%'.03d", 15); //999
		$no_cu = sprintf("%'.03d", $pekerjaan[1]); //999
		$no_id = sprintf("%'.06d", $kelas->id); //999999

		// cek nim
		$cek_nim = $no_bkcu . $pekerjaan[0] . $no_cu;
		$cekdata = Pengelola::where('nim','LIKE','%'.$cek_nim.'%')->select('nim')->orderBy('nim','desc')->first();

		if(!empty($cekdata)){
				$nim_baru = sprintf("%'.06d",ltrim(substr($cekdata->nim,7,6),'0')+1);
		}else{
				$nim_baru = sprintf("%'.06d", 1);
		}

		// save nim
		$nim = $no_bkcu . $pekerjaan[0] . $no_cu  . $nim_baru;
		$kelas2 = Pengelola::find($kelas->id);
		$kelas2->nim = $nim;
		$kelas2->save();

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah'
			]);
	}

	public function show($id)
	{
		$kelas = Pengelola::with('PengelolaKategori')->findOrFail($id);

		return response()
			->json([
				'model' => $kelas
			]);
	}

	public function edit($id)
	{
		$kelas = Pengelola::findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request,Pengelola::$rules);

		$name = $request->name;

		$kelas = Pengelola::findOrFail($id);

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request,$kelas);
		else
			$fileName = '';

		$kelas->update($request->except('gambar') + [
			'gambar' => $fileName
		]);

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function save_pekerjaan(Request $request, $id, $isReturnValue)
	{
		$tipe = $request->pekerjaan['tipe'];
		$kelamin = $request->kelamin;

		if(array_key_exists('id', $request->pekerjaan)){
			$kelas = PengelolaPekerjaan::findOrFail($request->pekerjaan['id']);
		}else{
			$kelas = new PengelolaPekerjaan();
		}

		if(!empty($id)){
			$kelas->id_pengelola = $id;
		}else{
			$kelas->id_pengelola = $request->id_pengelola;
		}

		$kelas->tipe = $tipe;
		$kelas->name = $request->pekerjaan['name'];
		$kelas->tingkat = $request->pekerjaan['tingkat'];
		$kelas->mulai = $request->pekerjaan['mulai'];
		$kelas->selesai = $request->pekerjaan['selesai'];

		if($tipe == '1'){ //cu
			$kelas->id_tempat = $request->pekerjaan['id_tempat'];
			$lembaga = $request->pekerjaan['id_tempat'];

			if($kelamin == 'Pria')//no tipe utk nim
					$no_tipe = 1;
			else
					$no_tipe = 2;
		}elseif($tipe == '2'){//lembaga lain
			$lembaga = 0;
			$kelas->lembaga_lain = $request->pekerjaan['lembaga_lain'];

			if($kelamin == 'Pria')//no tipe utk nim
					$no_tipe = 3;
			else
					$no_tipe = 4;
		}elseif($tipe == '3'){//bkcu
			$kelas->id_tempat = 1;
			$lembaga = 1;

			if($kelamin == 'Pria')//no tipe utk nim
					$no_tipe = 5;
			else
					$no_tipe = 6;
		}

		$kelas->save();

		if($isReturnValue){
			return array($no_tipe,$lembaga);
		}else{
			if(array_key_exists('id', $request->pekerjaan)){
				return response()
				->json([
					'saved' => true,
					'message' => 'Pekerjaan berhasil diubah'
				]);
			}else{
				return response()
				->json([
					'saved' => true,
					'message' => 'Pekerjaan berhasil ditambah'
				]);
			}
		}
	}

	public function save_pendidikan(Request $request, $id)
	{
		if(array_key_exists('id', $request->pendidikan)){
				$kelas = PengelolaPendidikan::findOrFail($request->pendidikan['id']);
		}else{
				$kelas = new PengelolaPendidikan();
		}

		if(!empty($id)){
			$kelas->id_pengelola = $id;
		}else{
			$kelas->id_pengelola = $request->id_pengelola;
		}

		$kelas->name = $request->pendidikan['name'];
		$kelas->tingkat = $request->pendidikan['tingkat'];
		$kelas->tempat = $request->pendidikan['tempat'];
		$kelas->mulai = $request->pendidikan['mulai'];
		$kelas->selesai = $request->pendidikan['selesai'];

		$kelas->save();

		if(array_key_exists('id', $request->pendidikan)){
			return response()
			->json([
				'saved' => true,
				'message' => 'Pendidikan berhasil diubah'
			]);
		}else{
			return response()
			->json([
				'saved' => true,
				'message' => 'Pendidikan berhasil ditambah'
			]);
		}
	}

	public function save_organisasi(Request $request, $id)
	{
		if(array_key_exists('id', $request->organisasi)){
				$kelas = PengelolaOrganisasi::findOrFail($request->organisasi['id']);
		}else{
				$kelas = new PengelolaOrganisasi();
		}

		if(!empty($id)){
			$kelas->id_pengelola = $id;
		}else{
			$kelas->id_pengelola = $request->id_pengelola;
		}

		$kelas->name = $request->organisasi['name'];
		$kelas->jabatan = $request->organisasi['jabatan'];
		$kelas->tempat = $request->organisasi['tempat'];
		$kelas->mulai = $request->organisasi['mulai'];
		$kelas->selesai = $request->organisasi['selesai'];

		$kelas->save();

		if(array_key_exists('id', $request->organisasi)){
			return response()
			->json([
				'saved' => true,
				'message' => 'Organisasi berhasil diubah'
			]);
		}else{
			return response()
			->json([
				'saved' => true,
				'message' => 'Organisasi berhasil ditambah'
			]);
		}
	}

	public function save_keluarga(Request $request, $id, $tipe, $name)
	{
		if(array_key_exists('id', $request->keluarga)){
			$kelas = PengelolaKeluarga::findOrFail($request->keluarga['id']);
		}else{
			$kelas = new PengelolaKeluarga();
		}

		$kelas->tipe = $tipe;

		if(!empty($id)){
			$kelas->id_pengelola = $id;
		}else{
			$kelas->id_pengelola = $request->id_pengelola;
		}

		if(!empty($name)){
			$kelas->name = $name;
		}else{
			$kelas->name = $request->keluarga['name'];
		}

		$kelas->save();

		if(array_key_exists('id', $request->keluarga)){
			return response()
			->json([
				'saved' => true,
				'message' => 'Keluarga berhasil diubah'
			]);
		}else{
			return response()
			->json([
				'saved' => true,
				'message' => 'Keluarga berhasil ditambah'
			]);
		}
	}

	public function save_anggota_cu(Request $request, $id)
	{
		if(array_key_exists('id', $request->anggota_cu)){
				$kelas = PengelolaAnggotaCu::findOrFail($request->anggota_cu['id']);
		}else{
				$kelas = new PengelolaAnggotaCu();
		}

		$name = $request->anggota_cu['name'];

		if(!empty($id)){
			$kelas->id_pengelola = $id;
		}else{
			$kelas->id_pengelola = $request->id_pengelola;
		}

		if($name == 'lain'){
			$kelas->name = $request->anggota_cu['cu_name'];
		}else{
			$kelas->name = $name;
		}
		$kelas->no_ba = $request->anggota_cu['no_ba'];

		$kelas->save();

		if(array_key_exists('id', $request->anggota_cu)){
			return response()
			->json([
				'saved' => true,
				'message' => 'Anggota CU berhasil diubah'
			]);
		}else{
			return response()
			->json([
				'saved' => true,
				'message' => 'Anggota CU berhasil ditambah'
			]);
		}
	}


	public function destroy($id)
	{
		$kelas = Pengelola::findOrFail($id);
		$name = $kelas->name;

		if(!empty($kelas->gambar)){
			File::delete($path . $kelas->gambar . '.jpg');
			File::delete($path . $kelas->gambar . 'n.jpg');
		}

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}
}
