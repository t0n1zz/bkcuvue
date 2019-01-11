<?php
namespace App\Http\Controllers;

use DB;
use App\Aktivis;
use App\AktivisPekerjaan;
use App\AktivisPendidikan;
use App\AktivisOrganisasi;
use App\AktivisKeluarga;
use App\AktivisAnggotaCu;
use App\Support\Helper;
use Illuminate\Http\Request;
use File;
use Image;

class AktivisController extends Controller{

	protected $imagepath = 'images/aktivis/';
	protected $width = 300;
	protected $height = 200;
	protected $message = 'Aktivis CU';

	public function index($tingkat)
	{
		if($tingkat == 'semua'){
			
			$table_data = Aktivis::with('pekerjaan_aktif.cu','pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')->whereHas('pekerjaan',function($query){
				$query->whereIn('tipe',[1,3])->where('selesai',null)->orWhere('selesai','>',date('Y-m-d'));
			})->advancedFilter();

		}elseif($tingkat == 'manajemen'){

			$table_data = Aktivis::with('pekerjaan_aktif.cu','pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')->whereHas('pekerjaan',function($query){
				$query->whereIn('tipe',[1,3])->whereIn('tingkat',[6,7,8,9])->where('selesai',null)->orWhere('selesai','>',date('Y-m-d'));
			})->advancedFilter();

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
			}

			$table_data = Aktivis::with('pekerjaan_aktif.cu','pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')->whereHas('pekerjaan',function($query) use ($param_tingkat){
				$query->whereIn('tipe',[1,3])->where('tingkat',$param_tingkat)->where('selesai',null)->orWhere('selesai','>',date('Y-m-d'));
			})->advancedFilter();
		}
	

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id, $tingkat)
	{
		if($id == 0){
			$tipe = 3;
			$id = 1;
		}else{
			$tipe = 1;
		}

		if($tingkat == 'semua'){
			$table_data = Aktivis::with('pekerjaan_aktif.cu','pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')
			->whereHas('pekerjaan', function($query) use ($id,$tipe){
				$query->where('tipe',$tipe)->where('id_tempat',$id)
				->where(function($q){
					$q->where('selesai',null)->orWhere('selesai','>',date('Y-m-d'));
				});
			})->advancedFilter();
		}elseif($tingkat == 'manajemen'){
			$table_data = Aktivis::with('pekerjaan_aktif.cu','pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')
			->whereHas('pekerjaan', function($query) use ($id,$tipe){
				$query->whereIn('tingkat',[6,7,8,9])->where('tipe',$tipe)->where('id_tempat',$id)
				->where(function($q){
					$q->where('selesai',null)->orWhere('selesai','>',date('Y-m-d'));
				});
			})->advancedFilter();
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
			}

			$table_data = Aktivis::with('pekerjaan_aktif.cu','pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')
			->whereHas('pekerjaan', function($query) use ($id,$tipe, $param_tingkat){
				$query->where('tingkat',$param_tingkat)->where('tipe',$tipe)->where('id_tempat',$id)
				->where(function($q){
					$q->where('selesai',null)->orWhere('selesai','>',date('Y-m-d'));
				});
			})->advancedFilter();
		}

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexTingkat(Request $request)
	{
		$table_data = Aktivis::with('pekerjaan_aktif.cu','pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')->whereHas('pekerjaan',function($query) use($request){
			$query->whereIn('tingkat',$request)->where('selesai',null)->orWhere('selesai','>',date('Y-m-d'));
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
					$q->where('selesai',null)->orWhere('selesai','>',date('Y-m-d'));
				});
			})->advancedFilter();
	}

	public function indexPekerjaan($id)
	{
		$table_data = AktivisPekerjaan::with('cu')->where('id_aktivis',$id)->orderBy('mulai','desc')->get();

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


	public function create()
	{
		$form = Aktivis::initialize();
		$form['pendidikan'] = AktivisPendidikan::initialize();
		$form['pekerjaan'] = AktivisPekerjaan::initialize();
		$form['keluarga'] = ['ayah' => '', 'ibu' => ''];
		$form['anggota_cu'] = AktivisAnggotaCu::initialize();
		$form['organisasi'] = AktivisOrganisasi::initialize();

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
		$this->validate($request,Aktivis::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request,'');
		else
			$fileName = '';	
		
		// identitas	
		$kelas = Aktivis::create($request->except('gambar','nim') + [
			'gambar' => $fileName
		]);

		// keluarga
		$ayah = $request->keluarga['ayah'];
		$ibu = $request->keluarga['ibu'];
		$pasangan = $request->keluarga['pasangan'];
		$anak = $request->anak;

		if(!empty($ayah))
			$this->saveKeluarga($request,$kelas->id,'Ayah',$ayah);
		
		if(!empty($ibu))
			$this->saveKeluarga($request,$kelas->id,'Ibu',$ibu);

		if(!empty($pasangan))
			$this->saveKeluarga($request,$kelas->id,'Pasangan',$pasangan);	

		if(!empty($anak)){
			foreach($anak as $a){
				$this->saveKeluarga($request,$kelas->id,'Anak',$a['value']);
			}
		}	

		// anggota cu, pendidikan, organisasi, pekerjaan
		$this->saveAnggotaCu($request,$kelas->id);
		$this->savePendidikan($request,$kelas->id);
		$this->saveOrganisasi($request,$kelas->id);
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

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah'
			]);
	}

	public function editIdentitas($id)
	{
		$kelas = Aktivis::with('Villages','Districts','Regencies','Provinces')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function updateIdentitas(Request $request, $id)
	{
		$this->validate($request,Aktivis::$rules);

		$name = $request->name;

		$kelas = Aktivis::findOrFail($id);

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

	public function savePekerjaan(Request $request, $id, $isReturnValue = false)
	{
		$tipe = $request->pekerjaan['tipe'];
		$kelamin = $request->kelamin;

		if(array_key_exists('id', $request->pekerjaan)){
			$kelas = AktivisPekerjaan::findOrFail($request->pekerjaan['id']);
		}else{
			$kelas = new AktivisPekerjaan();
		}

		if(!empty($id)){
			$kelas->id_aktivis = $id;
		}else{
			$kelas->id_aktivis = $request->id_aktivis;
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
			$kelas->lembaga_lain = $request->pekerjaan['id_lembaga_lain'];

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

	public function saveKeluarga(Request $request, $id, $tipe = '', $name = '')
	{

		if(array_key_exists('id', $request->keluarga)){
			$kelas = AktivisKeluarga::findOrFail($request->keluarga['id']);
		}else{
			$kelas = new AktivisKeluarga();
		}

		if(!empty($tipe)){
			$kelas->tipe = $tipe;
		}else{
			$kelas->tipe = $request->keluarga['tipe'];
		}

		if(!empty($id)){
			$kelas->id_aktivis = $id;
		}else{
			$kelas->id_aktivis = $request->id_aktivis;
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

	public function saveAnggotaCu(Request $request, $id)
	{
		if(array_key_exists('id', $request->anggota_cu)){
				$kelas = AktivisAnggotaCu::findOrFail($request->anggota_cu['id']);
		}else{
				$kelas = new AktivisAnggotaCu();
		}
		
		if(!empty($id)){
			$kelas->id_aktivis = $id;
		}else{
			$kelas->id_aktivis = $request->id_aktivis;
		}

		$kelas->name = $request->anggota_cu['name'];
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
		$kelas = Aktivis::findOrFail($id);
		$name = $kelas->name;

		if(!empty($kelas->gambar)){
			File::delete($path . $kelas->gambar . '.jpg');
			File::delete($path . $kelas->gambar . 'n.jpg');
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

		return response()
			->json([
				'deleted' => true,
				'message' => 'Riwayat pekerjaan berhasil dihapus'
			]);
	}

	public function destroyPendidikan($id)
	{
		AktivisPendidikan::where('id',$id)->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Riwayat pendidikan berhasil dihapus'
			]);
	}

	public function destroyOrganisasi($id)
	{
		AktivisOrganisasi::where('id',$id)->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Riwayat organisasi berhasil dihapus'
			]);
	}

	public function destroyKeluarga($id)
	{
		AktivisKeluarga::where('id',$id)->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Keluarga berhasil dihapus'
			]);
	}

	public function destroyAnggotaCu($id)
	{
		AktivisAnggotaCu::where('id',$id)->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Anggota CU berhasil dihapus'
			]);
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

}
