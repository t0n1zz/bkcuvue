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
	protected $message = 'Aktivis CU';

	public function index()
	{
		$table_data = Pengelola::with('pekerjaan_aktif.cu','pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')->whereHas('pekerjaan',function($query){
			$query->where('selesai',null)->orWhere('selesai','>',date('Y-m-d'));
		})->advancedFilter();

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

		$table_data = Pengelola::with('pekerjaan_aktif.cu','pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')
		->whereHas('pekerjaan', function($query) use ($id,$tipe){
			$query->where('tipe',$tipe)->where('id_tempat',$id)
			->where(function($q){
				$q->where('selesai',null)->orWhere('selesai','>',date('Y-m-d'));
			});
		})->advancedFilter();


		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPekerjaan($id)
	{
		$table_data = PengelolaPekerjaan::where('id_pengelola',$id)->orderBy('mulai','desc')->get();

		return response()
			->json([
					'model' => $table_data,
			]);
	}

	public function indexPendidikan($id)
	{
		$table_data = PengelolaPendidikan::where('id_pengelola',$id)->orderBy('mulai','desc')->get();

		return response()
			->json([
					'model' => $table_data,
			]);
	}

	public function indexAnggotaCu($id)
	{
		$table_data = PengelolaAnggotaCu::where('id_pengelola',$id)->get();

		return response()
			->json([
					'model' => $table_data,
			]);
	}

	public function indexKeluarga($id)
	{
		$table_data = PengelolaKeluarga::where('id_pengelola',$id)->get();

		return response()
			->json([
					'model' => $table_data,
			]);
	}

	public function indexOrganisasi($id)
	{
		$table_data = PengelolaOrganisasi::where('id_pengelola',$id)->orderBy('mulai','desc')->get();

		return response()
			->json([
					'model' => $table_data,
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

	public function createPekerjaan()
	{
		$form['pekerjaan'] = PengelolaPekerjaan::initialize();

		return response()
			->json([
					'form' => $form
			]);
	}

	public function createPendidikan()
	{
		$form['pendidikan'] = PengelolaPendidikan::initialize();

		return response()
			->json([
					'form' => $form
			]);
	}

	public function createOrganisasi()
	{
		$form['organisasi'] = PengelolaOrganisasi::initialize();

		return response()
			->json([
					'form' => $form
			]);
	}

	public function createKeluarga()
	{
		$form['keluarga'] = PengelolaKeluarga::initialize();

		return response()
			->json([
					'form' => $form
			]);
	}

	public function createAnggotaCu()
	{
		$form['anggota_cu'] = PengelolaAnggotaCu::initialize();

		return response()
			->json([
					'form' => $form
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

	public function editIdentitas($id)
	{
		$kelas = Pengelola::with('Villages','Districts','Regencies','Provinces')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function updateIdentitas(Request $request, $id)
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

	public function savePekerjaan(Request $request, $id, $isReturnValue = false)
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

	public function savePendidikan(Request $request, $id)
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

	public function saveOrganisasi(Request $request, $id)
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

	public function saveKeluarga(Request $request, $id, $tipe, $name)
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

	public function saveAnggotaCu(Request $request, $id)
	{
		if(array_key_exists('id', $request->anggota_cu)){
				$kelas = PengelolaAnggotaCu::findOrFail($request->anggota_cu['id']);
		}else{
				$kelas = new PengelolaAnggotaCu();
		}
		
		if(!empty($id)){
			$kelas->id_pengelola = $id;
		}else{
			$kelas->id_pengelola = $request->id_pengelola;
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
		$kelas = Pengelola::findOrFail($id);
		$name = $kelas->name;

		if(!empty($kelas->gambar)){
			File::delete($path . $kelas->gambar . '.jpg');
			File::delete($path . $kelas->gambar . 'n.jpg');
		}

		$kelas->delete();

		PengelolaPekerjaan::where('id_pengelola',$kelas->id)->delete();
		PengelolaPendidikan::where('id_pengelola',$kelas->id)->delete();
		PengelolaOrganisasi::where('id_pengelola',$kelas->id)->delete();
		PengelolaKeluarga::where('id_pengelola',$kelas->id)->delete();
		PengelolaAnggotacu::where('id_pengelola',$kelas->id)->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function destroyPekerjaan($id)
	{
		PengelolaPekerjaan::where('id',$id)->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Riwayat pekerjaan berhasil dihapus'
			]);
	}

	public function destroyPendidikan($id)
	{
		PengelolaPendidikan::where('id',$id)->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Riwayat pendidikan berhasil dihapus'
			]);
	}

	public function destroyOrganisasi($id)
	{
		PengelolaOrganisasi::where('id',$id)->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Riwayat organisasi berhasil dihapus'
			]);
	}

	public function destroyKeluarga($id)
	{
		PengelolaKeluarga::where('id',$id)->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Keluarga berhasil dihapus'
			]);
	}

	public function destroyAnggotaCu($id)
	{
		PengelolaAnggotaCu::where('id',$id)->delete();

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
            $table_data = Pengelola::count();
        }else{
            $table_data = Pengelola::with('pekerjaan_aktif')->whereHas('pekerjaan',function($query) use($id){
                $query->where('id_tempat',$id);
            })->count();
        }
        
        return response()
        ->json([
            'model' => $table_data
        ]);
    }

}
