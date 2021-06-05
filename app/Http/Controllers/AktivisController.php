<?php
namespace App\Http\Controllers;

use DB;
use File;
use Image;
use Validator;
use DateTime;
use App\Aktivis;
use App\Support\Helper;
use App\AktivisKeluarga;
use App\AktivisAnggotaCu;
use App\AktivisPekerjaan;
use App\AktivisOrganisasi;
use App\AktivisPendidikan;
use App\AktivisKeterangan;
use App\KegiatanPeserta;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;

class AktivisController extends Controller{

	protected $imagepath = 'images/aktivis/';
	protected $width = 300;
	protected $height = 200;
	protected $message = 'Aktivis CU';

	public function index($tingkat, $status)
	{
		if($tingkat == 'semua'){	
			if($status == 'aktif'){
				$table_data = Aktivis::with(['pekerjaans' => function($q){
					$q->with('cu')->whereIn('tipe',[1,3])
					->where('status',1);
				}])->with('pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')->whereHas('pekerjaan',function($query){
					$query->whereIn('tipe',[1,3])
					->where('status',1);
				})->advancedFilter();
			}else{
				$table_data = Aktivis::with(['pekerjaans' => function($q){
					$q->with('cu')->whereIn('tipe',[1,3])
					->where('status',3);
				}])->with('pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')->whereHas('pekerjaan',function($query){
					$query->whereIn('tipe',[1,3])
					->where('status',3);
				})->advancedFilter();
			}
		}elseif($tingkat == 'manajemen'){
			if($status == 'aktif'){
				$table_data = Aktivis::with(['pekerjaans' => function($q){
					$q->with('cu')->whereIn('tipe',[1,3])
					->whereIn('tingkat',[5,6,7,8,9])
					->where('status',1);
				}])->with('pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')->whereHas('pekerjaan',function($query){
					$query->whereIn('tipe',[1,3])
					->whereIn('tingkat',[5,6,7,8,9])
					->where('status',1);
				})->advancedFilter();
			}else{
				$table_data = Aktivis::with(['pekerjaans' => function($q){
					$q->with('cu')->whereIn('tipe',[1,3])
					->whereIn('tingkat',[5,6,7,8,9])
					->where('status',3);
				}])->with('pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')->whereHas('pekerjaan',function($query){
					$query->whereIn('tipe',[1,3])
					->where('status',3);
				})->advancedFilter();
			}
		}else{
			$param_tingkat = '';

			if($tingkat == 'pengurus'){
				$param_tingkat = 1;
			}elseif($tingkat == 'pengawas'){
				$param_tingkat = 2;
			}elseif($tingkat == 'komite'){
				$param_tingkat = 3;
			}elseif($tingkat == 'penasihat'){
				$param_tingkat = 4;
			}elseif($tingkat == 'senior_manajer'){
				$param_tingkat = 5;
			}elseif($tingkat == 'manajer'){
				$param_tingkat = 6;
			}elseif($tingkat == 'supervisor'){
				$param_tingkat = 7;
			}elseif($tingkat == 'staf'){
				$param_tingkat = 8;
			}elseif($tingkat == 'kontrak'){
				$param_tingkat = 9;
			}elseif($tingkat == 'kolektor'){
				$param_tingkat = 10;
			}elseif($tingkat == 'kelompok_inti'){
				$param_tingkat = 11;
			}

			if($status == 'aktif'){
				$table_data = Aktivis::with(['pekerjaans' => function($q) use ($param_tingkat){
					$q->with('cu')->whereIn('tipe',[1,3])
					->where('tingkat',$param_tingkat)
					->where('status',3);
				}])->with('pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')->whereHas('pekerjaan',function($query) use ($param_tingkat){
					$query->whereIn('tipe',[1,3])
					->where('tingkat',$param_tingkat)
					->where('status',1);
				})->advancedFilter();
			}else{
				$table_data = Aktivis::with(['pekerjaans' => function($q) use ($param_tingkat){
					$q->with('cu')->whereIn('tipe',[1,3])
					->where('tingkat',$param_tingkat)
					->where('status',3);
				}])->with('pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')->whereHas('pekerjaan',function($query) use ($param_tingkat){
					$query->whereIn('tipe',[1,3])
					->where('tingkat',$param_tingkat)
					->where('status',3);
				})->advancedFilter();
			}
		}

		$table_data = $this->formatQuery($table_data);
	
		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id, $tingkat, $status)
	{
		if($id == 0){
			$tipe = 3;
			$id = 1;
		}else{
			$tipe = 1;
		}

		if($tingkat == 'semua'){

			if($status == 'aktif'){
				$table_data = Aktivis::with(['pekerjaans' => function($q) use ($id,$tipe){
					$q->with('cu')->where('tipe',$tipe)->where('id_tempat',$id)
					->where('status',1);
				}])->with('pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')
				->whereHas('pekerjaan', function($query) use ($id,$tipe){
					$query->where('tipe',$tipe)->where('id_tempat',$id)
					->where('status',1);
				})->advancedFilter();
			}else{
				$table_data = Aktivis::with(['pekerjaans' => function($q) use ($id,$tipe){
					$q->with('cu')->where('tipe',$tipe)->where('id_tempat',$id)
					->where('status',3);
				}])->with('pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')
				->whereHas('pekerjaan', function($query) use ($id,$tipe){
					$query->where('tipe',$tipe)->where('id_tempat',$id)->where('status',3);
				})->advancedFilter();
			}

		}elseif($tingkat == 'manajemen'){

			if($status == 'aktif'){
				$table_data = Aktivis::with(['pekerjaans' => function($q) use ($id,$tipe){
					$q->with('cu')->where('tipe',$tipe)->where('id_tempat',$id)
					->where('status',1);
				}])->with('pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')
				->whereHas('pekerjaan', function($query) use ($id,$tipe){
					$query->whereIn('tingkat',[5,6,7,8,9])->where('tipe',$tipe)->where('id_tempat',$id)
					->where('status',1);
				})->advancedFilter();
			}else{
				$table_data = Aktivis::with(['pekerjaans' => function($q) use ($id,$tipe){
					$q->with('cu')->where('tipe',$tipe)->where('id_tempat',$id)
					->where('status',3);
				}])->with('pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')
				->whereHas('pekerjaan', function($query) use ($id,$tipe){
					$query->whereIn('tingkat',[5,6,7,8,9])->where('tipe',$tipe)->where('id_tempat',$id)->where('status',3);
				})->advancedFilter();
			}

		}else{
			$param_tingkat = '';

			if($tingkat == 'pengurus'){
				$param_tingkat = 1;
			}elseif($tingkat == 'pengawas'){
				$param_tingkat = 2;
			}elseif($tingkat == 'komite'){
				$param_tingkat = 3;
			}elseif($tingkat == 'penasihat'){
				$param_tingkat = 4;
			}elseif($tingkat == 'senior_manajer'){
				$param_tingkat = 5;
			}elseif($tingkat == 'manajer'){
				$param_tingkat = 6;
			}elseif($tingkat == 'supervisor'){
				$param_tingkat = 7;
			}elseif($tingkat == 'staf'){
				$param_tingkat = 8;
			}elseif($tingkat == 'kontrak'){
				$param_tingkat = 9;
			}elseif($tingkat == 'kolektor'){
				$param_tingkat = 10;
			}elseif($tingkat == 'kelompok_inti'){
				$param_tingkat = 11;
			}

			if($status == 'aktif'){
				$table_data = Aktivis::with(['pekerjaans' => function($q) use ($id,$tipe){
					$q->with('cu')->where('tipe',$tipe)->where('id_tempat',$id)
					->where('status',1);
				}])->with('pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')
				->whereHas('pekerjaan', function($query) use ($id,$tipe, $param_tingkat){
					$query->where('tingkat',$param_tingkat)->where('tipe',$tipe)->where('id_tempat',$id)
					->where('status',1);
				})->advancedFilter();
			}else{
				$table_data = Aktivis::with(['pekerjaans' => function($q) use ($id,$tipe){
					$q->with('cu')->where('tipe',$tipe)->where('id_tempat',$id)
					->where('status',3);
				}])->with('pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')
				->whereHas('pekerjaan', function($query) use ($id,$tipe, $param_tingkat){
					$query->where('tingkat',$param_tingkat)->where('tipe',$tipe)->where('id_tempat',$id)->where('status',3);
				})->advancedFilter();
			}
		}

		$table_data = $this->formatQuery($table_data);

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function formatQuery($table_data){
		foreach($table_data as $t){
			if($t->pekerjaans[0]->status == 1){
				$t->pekerjaan_aktif = $t->pekerjaans[0];
			}else if($t->pekerjaans[0]->status == 3){
				$t->pekerjaan_tidak_aktif = $t->pekerjaans[0];
			}else{
				$t->pekerjaan_aktif = '';
				$t->pekerjaan_tidak_aktif = '';
			}
			$t->nik = $t->nik ? $t->nik . "​ " : '';
			$t->nim_cu = $t->nim_cu ? $t->nim_cu . "​ " : '';
			$t->npwp = $t->npwp ? $t->npwp . "​ " : '';
			$t->hp = $t->hp ? $t->hp . "​ " : '';
		}

		return $table_data;
	}

	public function indexTingkat(Request $request)
	{
		$table_data = Aktivis::with('pekerjaan_aktif.cu','pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')->whereHas('pekerjaan',function($query) use($request){
			$query->whereIn('tingkat',$request)->where('selesai',null)->orWhere('selesai','>',date('Y-m-d'))->orWhere('sekarang',1);
		})->advancedFilter();
		
		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexLembaga()
	{
		$table_data = Aktivis::with('pekerjaan_aktif.cu','pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')
			->whereHas('pekerjaan', function($query){
				$query->where('tipe',2)->where(function($q){
					$q->where('selesai',null)->orWhere('selesai','>',date('Y-m-d'))->orWhere('sekarang',1);
				});
			})->advancedFilter();
	}

	public function indexPekerjaan($id)
	{
		$table_data = AktivisPekerjaan::with('cu','tp')->where('id_aktivis',$id)->orderBy('mulai','desc')->get();

		foreach($table_data as $t){
			if($t->tipe == 3){
				$t->id_tempat = 0;
			}
		}

		return response()
			->json([
					'model' => $table_data,
			]);
	}

	public function indexPendidikan($id)
	{
		$table_data = AktivisPendidikan::where('id_aktivis',$id)->orderBy('mulai','desc')->get();

		return response()
			->json([
					'model' => $table_data,
			]);
	}

	public function indexAnggotaCu($id)
	{
		$table_data = AktivisAnggotaCu::where('id_aktivis',$id)->get();

		return response()
			->json([
					'model' => $table_data,
			]);
	}

	public function indexKeluarga($id)
	{
		$table_data = AktivisKeluarga::where('id_aktivis',$id)->get();

		return response()
			->json([
					'model' => $table_data,
			]);
	}

	public function indexOrganisasi($id)
	{
		$table_data = AktivisOrganisasi::where('id_aktivis',$id)->orderBy('mulai','desc')->get();

		return response()
			->json([
					'model' => $table_data,
			]);
	}

	public function indexDiklat($id)
	{
		$table_data = KegiatanPeserta::with('kegiatan.Provinces','kegiatan.panitia_dalam', 'kegiatan.panitia_luar')->where('aktivis_id',$id)->orderBy('datang','desc')->get();

		return response()
			->json([
					'model' => $table_data,
			]);
	}

	public function indexKeterangan($id)
	{
		$table_data = AktivisKeterangan::where('id_aktivis',$id)->orderBy('tanggal','desc')->get();

		return response()
			->json([
					'model' => $table_data,
			]);
	}

	public function get($id)
	{
		if($id == 0){
			$tipe = 3;
			$id = 1;
			$table_data = Aktivis::with('pekerjaan_aktif')
			->whereHas('pekerjaan', function($query) use ($id,$tipe){
				$query->where('tipe',$tipe)->where('id_tempat',$id)
				->where('status',1);
			})->orderBy('name')->get();
		}else{
			$tipe = 1;
			$table_data = Aktivis::with('pekerjaan_aktif')
			->whereHas('pekerjaan', function($query) use ($id,$tipe){
				$query->whereIn('tingkat',[1,2,3,4,5,6,7])->where('tipe',$tipe)->where('id_tempat',$id)
				->where('status',1);
			})->orderBy('name')->get();
		}

		return response()
		->json([
			'model' => $table_data
		]);
	}


	public function create()
	{
		$form = Aktivis::initialize();
		$form['pekerjaan'] = AktivisPekerjaan::initialize();
		$form['keluarga'] = ['ayah' => '', 'ibu' => ''];
		$form['anggota_cu'] = AktivisAnggotaCu::initialize();

		return response()
			->json([
					'form' => $form,
					'rules' => Aktivis::$rules,
					'option' => []
			]);
	}

	public function createPekerjaan()
	{
		$form['pekerjaan'] = AktivisPekerjaan::initialize();

		return response()
			->json([
					'form' => $form
			]);
	}

	public function createPendidikan()
	{
		$form['pendidikan'] = AktivisPendidikan::initialize();

		return response()
			->json([
					'form' => $form
			]);
	}

	public function createOrganisasi()
	{
		$form['organisasi'] = AktivisOrganisasi::initialize();

		return response()
			->json([
					'form' => $form
			]);
	}

	public function createDiklat()
	{
		$form['diklat'] = KegiatanPeserta::initialize();

		return response()
			->json([
					'form' => $form
			]);
	}

	public function createKeluarga()
	{
		$form['keluarga'] = AktivisKeluarga::initialize();

		return response()
			->json([
					'form' => $form
			]);
	}

	public function createAnggotaCu()
	{
		$form['anggota_cu'] = AktivisAnggotaCu::initialize();

		return response()
			->json([
					'form' => $form
			]);
	}

	public function store(Request $request)
	{
		\DB::beginTransaction(); 
		try{
			$this->validate($request,Aktivis::$rules);

			$name = $request->name;

			// processing single image upload
			if(!empty($request->gambar))
				$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request->gambar,'',$name);
			else
				$fileName = '';	
			
			// identitas	
			$kelas = Aktivis::create($request->except('gambar','nim') + [
				'gambar' => $fileName
			]);
			
			$pekerjaan = $this->savePekerjaan($request,$kelas->id,true);

			// nim
			$no_bkcu = sprintf("%'.03d", 15); //999
			$no_cu = sprintf("%'.03d", $pekerjaan[1]); //999
			$no_id = sprintf("%'.06d", $kelas->id); //999999

			// cek nim
			$cek_nim = $no_bkcu . $pekerjaan[0] . $no_cu;
			$cekdata = Aktivis::where('nim','LIKE','%'.$cek_nim.'%')->select('nim')->orderBy('nim','desc')->first();

			if(!empty($cekdata)){
					$nim_baru = sprintf("%'.06d",ltrim(substr($cekdata->nim,7,6),'0')+1);
			}else{
					$nim_baru = sprintf("%'.06d", 1);
			}

			// save nim
			$nim = $no_bkcu . $pekerjaan[0] . $no_cu  . $nim_baru;
			$kelas2 = Aktivis::find($kelas->id);
			$kelas2->nim = $nim;
			$kelas2->save();

			// keluarga
			$ayah = $request->keluarga['ayah'];
			$ibu = $request->keluarga['ibu'];

			if(array_key_exists('pasangan',$request->keluarga)){
				$pasangan = $request->keluarga['pasangan'];
			}

			if(!empty($ayah))
				$this->saveKeluarga(null,$kelas->id,'Ayah',$ayah);
			
			if(!empty($ibu))
				$this->saveKeluarga(null,$kelas->id,'Ibu',$ibu);

			if(!empty($pasangan))
				$this->saveKeluarga(null,$kelas->id,'Pasangan',$pasangan);	

			if(!empty($request->anak)){
				foreach($request->anak as $a){
					$anak_name = array_key_exists('name', $a) ? $a['name'] : null;
					$this->saveKeluarga(null,$kelas->id,'Anak',$anak_name);
				}
			}	

			if(!empty($request->anggota_cu)){
				foreach($request->anggota_cu as $a){
					$anggota_cu_id_cu = array_key_exists('id_cu', $a) ? $a['id_cu'] : null;
					$anggota_cu_name = array_key_exists('name', $a) ? $a['name'] : null;
					$anggota_cu_no_ba = array_key_exists('no_ba', $a) ? $a['no_ba'] : null;
					$anggota_cu_tanggal_masuk = array_key_exists('tanggal_masuk', $a) ? $a['tanggal_masuk'] : null;

					$this->saveAnggotaCu(null,$kelas->id,$anggota_cu_id_cu,$anggota_cu_name,$anggota_cu_no_ba,$anggota_cu_tanggal_masuk);
				}
			}
			
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

	public function edit($id)
	{
		$kelas = Aktivis::with('Villages','Districts','Regencies','Provinces','anggota_cu','keluarga')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		$rules = Aktivis::$rules;
		$rules['nik'] = $rules['nik'] . ',id,' . $id;
		$validationCertificate  = Validator::make($request->all(), $rules); 

		$name = $request->name;

		$kelas = Aktivis::findOrFail($id);

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request->gambar,$kelas->gambar, $name);
		else
			$fileName = '';

		$kelas->update($request->except('gambar') + [
			'gambar' => $fileName
		]);

		if(!empty($request->ayah)){
			$ayah_id = array_key_exists('id', $request->ayah) ? $request->ayah['id'] : null;
			$ayah_name = array_key_exists('name', $request->ayah) ? $request->ayah['name'] : null;
			$this->saveKeluarga($ayah_id,$id,'Ayah', $ayah_name);
		}

		if(!empty($request->ibu)){
			$ibu_id = array_key_exists('id', $request->ibu) ? $request->ibu['id'] : null;
			$ibu_name = array_key_exists('name', $request->ibu) ? $request->ibu['name'] : null;
			$this->saveKeluarga($ibu_id,$id,'Ibu', $ibu_name);
		}

		if(!empty($request->pasangan)){
			$pasangan_id = array_key_exists('id', $request->pasangan) ? $request->pasangan['id'] : null;
			$pasangan_name = array_key_exists('name', $request->pasangan) ? $request->pasangan['name'] : null;
			$this->saveKeluarga($pasangan_id,$id,'Pasangan', $pasangan_name);
		}

		if(!empty($request->anak)){
			foreach($request->anak as $a){
				$anak_id = array_key_exists('id', $a) ? $a['id'] : null;
				$anak_name = array_key_exists('name', $a) ? $a['name'] : null;
				$this->saveKeluarga($anak_id,$id,'Anak',$anak_name);
			}
		}	

		if(!empty($request->anggota_cu)){
			if(is_array($request->anggota_cu)){
				foreach($request->anggota_cu as $a){
					$anggota_cu_id = array_key_exists('id', $a) ? $a['id'] : null;
					$anggota_cu_id_cu = array_key_exists('id_cu', $a) ? $a['id_cu'] : null;
					$anggota_cu_name = array_key_exists('name', $a) ? $a['name'] : null;
					$anggota_cu_no_ba = array_key_exists('no_ba', $a) ? $a['no_ba'] : null;
					$anggota_cu_tanggal_masuk = array_key_exists('tanggal_masuk', $a) ? $a['tanggal_masuk'] : null;
	
					$this->saveAnggotaCu($anggota_cu_id,$id,$anggota_cu_id_cu,$anggota_cu_name,$anggota_cu_no_ba,$anggota_cu_tanggal_masuk);
				}
			}else{
				$anggota = $request->anggota_cu;
				$this->saveAnggotaCu($anggota->id,$id,$anggota->id_cu,$anggota->name,$anggota->no_ba,$anggota->tanggal_masuk);
			}
		}

		if(!empty($request->anak_removed)){
			foreach($request->anak_removed as $a){
				$anak_id = array_key_exists('id', $a) ? $a['id'] : null;
				$this->destroyKeluarga($anak_id);
			}
		}	

		if(!empty($request->anggota_cu_removed)){
			foreach($request->anggota_cu_removed as $a){
				$anggota_cu_id = array_key_exists('id', $a) ? $a['id'] : null;
				$this->destroyAnggotaCu($anggota_cu_id);
			}
		}	

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah',
				'id' => $id
			]);
	}

	public function savePekerjaan(Request $request, $id, $isReturnValue = false)
	{
		$tipe = $request->pekerjaan['tipe'];
		$kelamin = $request->kelamin;

		if(array_key_exists('id', $request->pekerjaan)){
			$kelas = AktivisPekerjaan::findOrFail($request->pekerjaan['id']);
		}else{
			$kelas = new AktivisPekerjaan();

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
		}

		if(!empty($id)){
			$kelas->id_aktivis = $id;
		}else{
			$kelas->id_aktivis = $request->id_aktivis;
		}

		$kelas->tipe = $tipe;
		$kelas->name = $request->pekerjaan['name'];
		$kelas->tingkat = $request->pekerjaan['tingkat'];
		$kelas->id_tp = $request->pekerjaan['id_tp'];
		$kelas->status = $request->pekerjaan['status'];

		if($this->validateDate($request->pekerjaan['mulai'])){
			$kelas->mulai = $request->pekerjaan['mulai'];
		}
		if($this->validateDate($request->pekerjaan['selesai'])){
			$kelas->selesai = $request->pekerjaan['selesai'];
		}

		if(!empty($request->pekerjaan['keterangan_tidak_aktif'])){
			$kelas->keterangan_tidak_aktif = $request->pekerjaan['keterangan_tidak_aktif'];
		}

		$kelas->save();

		Aktivis::flushCache();

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

	public function validateDate($date, $format = 'Y-m-d')
	{
			$d = DateTime::createFromFormat($format, $date);
			// The Y ( 4 digits year ) returns TRUE for any integer with any number of digits so changing the comparison from == to === fixes the issue.
			return $d && $d->format($format) === $date;
	}

	public function savePendidikan(Request $request, $id)
	{
		if(array_key_exists('id', $request->pendidikan)){
			$kelas = AktivisPendidikan::findOrFail($request->pendidikan['id']);
		}else{
			$kelas = new AktivisPendidikan();
		}

		if(!empty($id)){
			$kelas->id_aktivis = $id;
		}else{
			$kelas->id_aktivis = $request->id_aktivis;
		}

		$kelas->name = $request->pendidikan['name'];
		$kelas->tingkat = $request->pendidikan['tingkat'];
		$kelas->tempat = $request->pendidikan['tempat'];
		$kelas->mulai = $request->pendidikan['mulai'];
		$kelas->selesai = $request->pendidikan['selesai'];

		$kelas->save();

		Aktivis::flushCache();

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

	public function saveOrganisasi(Request $request, $id)
	{
		if(array_key_exists('id', $request->organisasi)){
			$kelas = AktivisOrganisasi::findOrFail($request->organisasi['id']);
		}else{
			$kelas = new AktivisOrganisasi();
		}

		if(!empty($id)){
			$kelas->id_aktivis = $id;
		}else{
			$kelas->id_aktivis = $request->id_aktivis;
		}

		$kelas->name = $request->organisasi['name'];
		$kelas->jabatan = $request->organisasi['jabatan'];
		$kelas->tempat = $request->organisasi['tempat'];
		$kelas->mulai = $request->organisasi['mulai'];
		$kelas->selesai = $request->organisasi['selesai'];

		$kelas->save();

		Aktivis::flushCache();

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

	public function saveDiklat(Request $request, $id)
	{
		if(array_key_exists('id', $request->diklat)){
			$kelas = KegiatanPeserta::findOrFail($request->diklat['id']);
		}else{
			$kelas = new KegiatanPeserta();
		}

		if(!empty($id)){
			$kelas->aktivis_id = $id;
		}else{
			$kelas->aktivis_id = $request->id_aktivis;
		}

		$kelas->kegiatan_id = 0;
		$kelas->name = $request->diklat['name'];
		if(array_key_exists('tempat', $request->diklat)){
			$kelas->tempat = $request->diklat['tempat'];
		}
		if(array_key_exists('lembaga', $request->diklat)){
			$kelas->lembaga = $request->diklat['lembaga'];
		}
		if(array_key_exists('fasilitator', $request->diklat)){
			$kelas->fasilitator = $request->diklat['fasilitator'];
		}
		if(array_key_exists('datang', $request->diklat)){
			$kelas->datang = $request->diklat['datang'];
		}
		if(array_key_exists('pulang', $request->diklat)){
			$kelas->pulang = $request->diklat['pulang'];
		}

		$kelas->save();

		Aktivis::flushCache();

		if(array_key_exists('id', $request->diklat)){
			return response()
			->json([
				'saved' => true,
				'message' => 'Diklat berhasil diubah'
			]);
		}else{
			return response()
			->json([
				'saved' => true,
				'message' => 'Diklat berhasil ditambah'
			]);
		}
	}

	public function saveKeluarga($id, $id_aktivis, $tipe = '', $name = '')
	{
		if($id){
			$kelas = AktivisKeluarga::findOrFail($id);
		}else{
			$kelas = new AktivisKeluarga();
		}

		$kelas->tipe = $tipe;
		$kelas->id_aktivis = $id_aktivis;
		$kelas->name = $name;
		
		if($kelas->name != null || $kelas->name != ''){
			$kelas->save();
			Aktivis::flushCache();
		}
	}

	public function saveAnggotaCu($id, $id_aktivis, $id_cu, $name, $no_ba, $tanggal_masuk)
	{
		if($id){
			$kelas = AktivisAnggotaCu::findOrFail($id);
		}else{
			$kelas = new AktivisAnggotaCu();
		}

		if($id_cu == 0){
			$kelas->name = $name;
			$kelas->id_cu = 0;
		}else{
			$kelas->id_cu = $id_cu;
			$kelas->name = null;
		}

		$kelas->id_aktivis = $id_aktivis;
		$kelas->no_ba = $no_ba;
		if($this->validateDate($tanggal_masuk)){
			$kelas->tanggal_masuk = $tanggal_masuk;
		}
		$kelas->save();
		Aktivis::flushCache();
	}

	public function saveKeterangan(Request $request, $id)
	{
		if(array_key_exists('id', $request->keterangan)){
			$kelas = AktivisKeterangan::findOrFail($request->keterangan['id']);
		}else{
			$kelas = new AktivisKeterangan();
		}

		if(!empty($id)){
			$kelas->id_aktivis = $id;
		}else{
			$kelas->id_aktivis = $request->id_aktivis;
		}

		$kelas->name = $request->keterangan['name'];
		$kelas->tipe = $request->keterangan['tipe'];
		$kelas->keterangan = $request->keterangan['keterangan'];
		$kelas->tanggal = $request->keterangan['tanggal'];

		$kelas->save();

		Aktivis::flushCache();

		if(array_key_exists('id', $request->keterangan)){
			return response()
			->json([
				'saved' => true,
				'message' => 'Keterangan berhasil diubah'
			]);
		}else{
			return response()
			->json([
				'saved' => true,
				'message' => 'Keterangan berhasil ditambah'
			]);
		}
	}


	public function destroy($id)
	{
		$kelas = Aktivis::findOrFail($id);
		$name = $kelas->name;

		if(!empty($kelas->gambar)){
			File::delete($this->imagepath . $kelas->gambar . '.jpg');
			File::delete($this->imagepath . $kelas->gambar . 'n.jpg');
		}

		$kelas->delete();

		AktivisPekerjaan::where('id_aktivis',$kelas->id)->delete();
		AktivisPendidikan::where('id_aktivis',$kelas->id)->delete();
		AktivisOrganisasi::where('id_aktivis',$kelas->id)->delete();
		AktivisKeluarga::where('id_aktivis',$kelas->id)->delete();
		AktivisAnggotacu::where('id_aktivis',$kelas->id)->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function destroyPekerjaan($id)
	{
		AktivisPekerjaan::where('id',$id)->delete();
		Aktivis::flushCache();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Riwayat pekerjaan berhasil dihapus'
			]);
	}

	public function destroyPendidikan($id)
	{
		AktivisPendidikan::where('id',$id)->delete();
		Aktivis::flushCache();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Riwayat pendidikan berhasil dihapus'
			]);
	}

	public function destroyOrganisasi($id)
	{
		AktivisOrganisasi::where('id',$id)->delete();
		Aktivis::flushCache();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Riwayat organisasi berhasil dihapus'
			]);
	}

	public function destroyDiklat($id)
	{
		KegiatanPeserta::where('id',$id)->delete();
		Aktivis::flushCache();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Riwayat diklat berhasil dihapus'
			]);
	}

	public function destroyKeluarga($id)
	{
		AktivisKeluarga::where('id',$id)->delete();
		Aktivis::flushCache();
	}

	public function destroyAnggotaCu($id)
	{
		AktivisAnggotaCu::where('id',$id)->delete();
		Aktivis::flushCache();
	}

	public function count()
	{
		$id = \Auth::user()->id_cu;

		if($id == 0){
			$table_data = Aktivis::count();
		}else{
			$table_data = Aktivis::with('pekerjaan_aktif')->whereHas('pekerjaan',function($query) use($id){
					$query->where('id_tempat',$id);
			})->count();
		}
		
		return response()
		->json([
				'model' => $table_data
		]);
	}

	public function history()
  {
    $time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\Aktivis')->where('created_at','>=',$time)->orderBy('created_at','desc')->take(5);

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
		$table_data = Aktivis::with('Villages','Districts','Regencies','Provinces','anggota_cu','keluarga')->where('nik',$nik)->first();

		if($table_data){
			return response()
			->json([
				'model' => $table_data
			]);
		}else{
			return $this->create();
		}
	}
}
