<?php
namespace App\Http\Controllers;

use DB;
use File;
use Image;
use App\Kegiatan;
use App\Support\Helper;
use App\KegiatanPanitia;
use App\KegiatanPeserta;
use App\KegiatanMateri;
use App\KegiatanKeputusan;
use App\KegiatanPertanyaan;
use App\KegiatanPilih;
use App\KegiatanPilihPivot;
use Illuminate\Http\Request;
use App\Support\NotificationHelper;
use Auth;

class PertemuanBKCUController extends Controller{

	protected $imagepath = 'images/pertemuan/';
	protected $materipath = 'files/pertemuan/';
	protected $width = 300;
	protected $height = 200;
	protected $message = "Pertemuan";
	protected $tipe = "pertemuan_bkcu";

	public function index()
	{
		$table_data = Kegiatan::with('tempat','sasaran','Regencies','Provinces')->withCount('hasPeserta')->where('tipe',$this->tipe)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPeriode($periode)
	{
		$table_data = Kegiatan::with('tempat','sasaran','Regencies','Provinces')->withCount('hasPeserta')->where('tipe',$this->tipe)->where('periode',$periode)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexBaru()
	{
		$periode= Kegiatan::distinct('periode')->orderBy('periode','desc')->pluck('periode')->first();
		$now =\Carbon\Carbon::now()->format('Y-m-d');

		$table_data = Kegiatan::with('tempat','sasaran','Regencies')->where('tipe',$this->tipe)->where('periode',$periode)->whereIn('status',[1,2])->orderBy('created_at','desc')->take(6)->get();

		$countMulai = Kegiatan::where('tipe',$this->tipe)->where('periode',$periode)->whereIn('status',[1,2])->where('mulai','>',$now)->orderBy('mulai','asc')->count();

		$countBuka = Kegiatan::where('tipe',$this->tipe)->where('periode',$periode)->where('status',2)->count();

		$countJalan = Kegiatan::where('tipe',$this->tipe)->where('periode',$periode)->where('status',4)->count();

		return response()
		->json([
			'model' => $table_data,
			'countMulai' => $countMulai,
			'countBuka' => $countBuka,
			'countJalan' => $countJalan
		]);
	}

	public function indexMulai()
	{
		$periode= Kegiatan::distinct('periode')->orderBy('periode','desc')->pluck('periode')->first();

		$now =\Carbon\Carbon::now()->format('Y-m-d');

		$table_data = Kegiatan::with('tempat','sasaran','Regencies')->where('tipe',$this->tipe)->where('periode',$periode)->whereIn('status',[1,2])->where('mulai','>',$now)->orderBy('mulai','asc')->take(6)->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexBuka()
	{
		$periode= Kegiatan::distinct('periode')->orderBy('periode','desc')->pluck('periode')->first();

		$table_data = Kegiatan::with('tempat','sasaran','Regencies')->where('tipe',$this->tipe)->where('periode',$periode)->where('status',2)->take(6)->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexJalan()
	{
		$table_data = Kegiatan::with('tempat','sasaran','Regencies')->where('tipe',$this->tipe)->where('status',4)->advancedFilter();

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

	public function indexPesertaHadir($id)
	{
		$table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu','aktivis.pendidikan_tertinggi')->where('kegiatan_id',$id)->whereNotNull('tanggal_hadir')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}


	public function indexPesertaCountCu($id)
	{
		$table_data = DB::table('kegiatan_peserta')
		->join('aktivis', 'aktivis.id', '=', 'kegiatan_peserta.aktivis_id')
		->join('aktivis_pekerjaan', 'aktivis_pekerjaan.id_aktivis', '=', 'aktivis.id')
			->join('cu', 'cu.id', '=', 'aktivis_pekerjaan.id_tempat')
			->select(DB::raw(
					'MAX(cu.no_ba) as no_ba,
					MAX(cu.name) as name,
					COUNT(CASE WHEN aktivis.kelamin="LAKI-LAKI" THEN 1 END) AS lakilaki, 
					COUNT(CASE WHEN aktivis.kelamin="PEREMPUAN" THEN 1 END) AS perempuan, 
					MAX(aktivis_pekerjaan.id_tempat) as cu_id, 
					COUNT(*) as total'
			))
		->where('aktivis_pekerjaan.tipe', 1)
		->where('aktivis_pekerjaan.status', 1)
		->where('kegiatan_id', $id)
		->groupBy('aktivis_pekerjaan.id_tempat')
		->get();
		
		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPesertaHadirCountCu($id)
	{
		$table_data = DB::table('kegiatan_peserta')
		->join('aktivis', 'aktivis.id', '=', 'kegiatan_peserta.aktivis_id')
		->join('aktivis_pekerjaan', 'aktivis_pekerjaan.id_aktivis', '=', 'aktivis.id')
			->join('cu', 'cu.id', '=', 'aktivis_pekerjaan.id_tempat')
			->select(DB::raw(
					'MAX(cu.no_ba) as no_ba,
					MAX(cu.name) as name,
					COUNT(CASE WHEN aktivis.kelamin="LAKI-LAKI" THEN 1 END) AS lakilaki, 
					COUNT(CASE WHEN aktivis.kelamin="PEREMPUAN" THEN 1 END) AS perempuan, 
					MAX(aktivis_pekerjaan.id_tempat) as cu_id, 
					COUNT(*) as total'
			))
		->where('aktivis_pekerjaan.tipe', 1)
		->where('aktivis_pekerjaan.status', 1)
		->where('kegiatan_id', $id)
		->whereNotNull('tanggal_hadir')
		->groupBy('aktivis_pekerjaan.id_tempat')
		->get();
		
		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexKeputusanCount($id)
	{
		$table_data = DB::table('kegiatan_pilih')
		->join('kegiatan_pilih_pivot', 'kegiatan_pilih_pivot.kegiatan_pilih_id', '=', 'kegiatan_pilih.id')
			->select(DB::raw(
					'MAX(kegiatan_pilih.name) as name,
					MAX(kegiatan_pilih.id) as id, 
					COUNT(*) as total,
					COUNT(CASE WHEN kegiatan_pilih_pivot.nilai=1 THEN 1 END) AS setuju,
					COUNT(CASE WHEN kegiatan_pilih_pivot.nilai=2 THEN 1 END) AS taksetuju,
					COUNT(CASE WHEN kegiatan_pilih_pivot.nilai=3 THEN 1 END) AS takada
					'
			))
		->where('kegiatan_id', $id)
		->groupBy('kegiatan_pilih.id')
		->get();
		
		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexMateri($id)
	{
		$table_data = KegiatanMateri::where('kegiatan_id',$id)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexKeputusan($id)
	{
		$table_data = KegiatanKeputusan::with('pilih','cu','user.aktivis')->withCount('haskomentar')->where('kegiatan_id',$id)->whereNull('kegiatan_keputusan_id')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexKeputusanKomentar($id)
	{
		$table_data = KegiatanKeputusan::with('cu','user.aktivis')->where('kegiatan_keputusan_id',$id)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPertanyaan($id)
	{
		$table_data = KegiatanPertanyaan::with('cu','user.aktivis')->withCount('haskomentar')->where('kegiatan_id',$id)->whereNull('kegiatan_pertanyaan_id')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPertanyaanKomentar($id)
	{
		$table_data = KegiatanPertanyaan::with('cu','user.aktivis')->where('kegiatan_pertanyaan_id',$id)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	
	public function checkPeserta($kegiatan_id, $aktivis_id)
	{
		$table_data = KegiatanPeserta::where('kegiatan_id',$kegiatan_id)->where('aktivis_id',$aktivis_id)->first();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function checkPanitia($kegiatan_id, $aktivis_id)
	{
		$table_data = KegiatanPanitia::where('kegiatan_id',$kegiatan_id)->where('aktivis_id',$aktivis_id)->first();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function getPeriode()
	{
		$table_data = Kegiatan::where('tipe',$this->tipe)->distinct('periode')->pluck('periode');

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

		// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request->gambar,'',$name);
		else
			$fileName = '';

		$kelas = Kegiatan::create($request->except('tipe','status','gambar') + [
			'tipe' => $this->tipe, 'status' => '1', 'gambar' => $fileName
		]);

		$kelas->sasaran()->sync(array_flatten($request->sasaran));

		if($request->panitia){
			$panitiaArray = array();

			foreach($request->panitia as $panitia){
				$keterangan = '';
				if (array_key_exists("keterangan",$panitia)){
					$keterangan = $panitia['keterangan'];
				}
				$panitiaArray[$panitia['aktivis_id']] = [
					'peran' => $panitia['peran'],
					'keterangan' => $keterangan, 
					'asal' => $panitia['asal'] ];
			}

			$kelas->panitia_dalam()->sync($panitiaArray);
		}

		if($request->pilih){
			$this->syncPilih($request, $kelas);
		}
 
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	private function syncPilih($request, $kelas)
	{
		foreach($kelas->pilih as $aV){ $aTmp1[] = $aV['id']; }
		foreach($request->pilih as $aV){ 
			if(array_key_exists('id', $aV)){
				$aTmp2[] = $aV['id']; 
			}
		}
		$diff = array_diff($aTmp1, $aTmp2);

		if($diff){
			$val = array_values($diff)[0];
			KegiatanPilih::findOrFail($val)->delete();
		}

		foreach($request->pilih as $pilih){
			if(array_key_exists('id', $pilih)){
				$kelasPilih = KegiatanPilih::findOrFail($pilih['id']);
				$kelasPilih->update([
					'kegiatan_id' => $kelas->id,
					'name' => array_key_exists('name', $pilih) ? $pilih['name'] : null,
				]);
			}else{
				KegiatanPilih::create([
					'kegiatan_id' => $kelas->id,
					'name' => array_key_exists('name', $pilih) ? $pilih['name'] : null,
				]);
			}
		}
	}

	public function storePeserta(Request $request, $id)
	{
		$kelas = KegiatanPeserta::create($request->except('kegiatan_id') + [ 'kegiatan_id' => $id ]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Peserta ' . $this->message. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function storeMateri(Request $request, $id)
	{
		$file = $request->content;
		$name = $request->name;
		$tipe = $file->getClientOriginalExtension();

		if($tipe != 'pdf'){
			$formatedName = Helper::image_processing($this->materipath,$this->width,$this->height,$file,'',$name);
		}else{
			$filename = $file->getClientOriginalName();
			$formatedName = str_limit(preg_replace('/[^A-Za-z0-9\-]/', '',$name),10,'') . '_' .uniqid(). '.'.$tipe;
			$file->move($this->materipath,$formatedName);
		}

		$kelas = KegiatanMateri::create([ 
			'kegiatan_id' => $id,
			'name' => $request->name,
			'filename' => $formatedName,
			'tipe' => $tipe,
			'keterangan' => $request->keterangan
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Materi ' . $this->message. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function storeKeputusan(Request $request, $id)
	{
		$kelas = KegiatanKeputusan::create($request->except('kegiatan_id') + [ 'kegiatan_id' => $id ]);

		$this->syncKeputusanPilih($request, $kelas);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Keputusan ' . $this->message. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function storeKeputusanKomentar(Request $request, $id)
	{
		$kelas = KegiatanKeputusan::create($request->except('kegiatan_id') + [ 'kegiatan_id' => $id ]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Komentar keputusan berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function storePertanyaan(Request $request, $id)
	{
		$kelas = KegiatanPertanyaan::create($request->except('kegiatan_id') + [ 'kegiatan_id' => $id ]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Pertanyaan ' . $this->message. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function storePertanyaanKomentar(Request $request, $id)
	{
		$kelas = KegiatanPertanyaan::create($request->except('kegiatan_id') + [ 'kegiatan_id' => $id ]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Komentar pertanyaan berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = Kegiatan::with('tempat','sasaran','panitia_dalam.pekerjaan_aktif.cu','panitia_luar','pilih')->findOrFail($id);

		return response()
				->json([
						'form' => $kelas,
						'option' => []
				]);
	}

	public function update(Request $request, $id)
	{
		// $this->validate($request, Kegiatan::$rules);

		$name = $request->name;

		$kelas = Kegiatan::with('pilih')->findOrFail($id);

			// processing single image upload
		if(!empty($request->gambar))
			$fileName = Helper::image_processing($this->imagepath,$this->width,$this->height,$request->gambar,$kelas->gambar, $name);
		else
			$fileName = '';

		$kelas->update($request->except('tipe','gambar') + [
			'tipe' => $this->tipe,
			'gambar' => $fileName
		]);
		
		$kelas->sasaran()->sync(array_flatten($request->sasaran));

		if($request->panitia){
			$panitiaArray = array();

			foreach($request->panitia as $panitia){
				$keterangan = '';
				if (array_key_exists("keterangan",$panitia)){
					$keterangan = $panitia['keterangan'];
				}
				$panitiaArray[$panitia['aktivis_id']] = [
					'peran' => $panitia['peran'], 
					'keterangan' => $keterangan, 
					'asal' => $panitia['asal'] ];
			}

			$kelas->panitia_dalam()->sync($panitiaArray);
		}

		if($request->pilih){
			$this->syncPilih($request, $kelas);
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
		
		$status= '';
		$statusPeserta = '';

		if($request->status == 1){
			$status= 'sedang menunggu';
		}else if($request->status == 2){
			$status= 'pendaftaran buka';
		}else if($request->status == 3){
			$status= 'pendaftaran tutup';
			$statusPeserta = 2;
		}else if($request->status == 4){
			$status= 'sedang berjalan';
			$statusPeserta = 4;
		}else if($request->status == 5){
			$status= 'terlaksana';
			$statusPeserta = 5;
		}else if($request->status == 6){
			$status= 'batal';
			$statusPeserta = 6;
		}

		if($request->status == 6){
			$kelas->keteranganBatal = $request->keterangan;
		}else{
			$kelas->keteranganBatal = "";
		}

		$kelas->update();

		$dataPeserta = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu')->where('kegiatan_id', $id)->get();

		if($statusPeserta){
			$updatePeserta = KegiatanPeserta::where('kegiatan_id', $id)->where('status','!=',3)->update(['status' => $statusPeserta]);

			$id_cus = [];
			foreach($dataPeserta as $peserta){
				if($peserta->aktivis->pekerjaan_aktif->cu){
					array_push($id_cus,$peserta->aktivis->pekerjaan_aktif->cu->id);
				}
			}

			$id_cus = array_unique($id_cus);
			
			// foreach($id_cus as $id_cu){
			// 	NotificationHelper::status_peserta_diklat_bkcu($id_cu, $id,'Diklat ' . $kelas->name  . '  ' . $status);
			// }
		}

		return response()
			->json([
				'saved' => true,
				'message' => "Status berhasil diubah"
			]);
	}

	public function updatePeserta(Request $request, $id)
	{
		$kelas = KegiatanPeserta::findOrFail($id);

		$kelas->update($request->except('status'));

		return response()
			->json([
				'saved' => true,
				'message' => "Peserta berhasil diubah"
			]);
	}

	public function updateMateri(Request $request, $id)
	{
		$kelas = KegiatanMateri::findOrFail($id);

		$kelas->update($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => "Materi berhasil diubah"
			]);
	}

	public function updateKeputusan(Request $request, $id)
	{
		$kelas = KegiatanKeputusan::findOrFail($id);

		$kelas->update($request->all());

		$this->syncKeputusanPilih($request, $kelas);

		return response()
			->json([
				'saved' => true,
				'message' => "Keputusan berhasil diubah"
			]);
	}

	public function updateKeputusanKomentar(Request $request, $id)
	{
		$kelas = KegiatanKeputusan::findOrFail($id);

		$kelas->update($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => "Komentar berhasil diubah"
			]);
	}

	public function updatePertanyaan(Request $request, $id)
	{
		$kelas = KegiatanPertanyaan::findOrFail($id);

		$kelas->update($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => "Pertanyaan berhasil diubah"
			]);
	}

	public function updatePertanyaanKomentar(Request $request, $id)
	{
		$kelas = KegiatanPertanyaan::findOrFail($id);

		$kelas->update($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => "Komentar berhasil diubah"
			]);
	}

	public function updatePesertaHadir($kegiatan_id, $aktivis_id)
	{
		$kelas = KegiatanPeserta::where('kegiatan_id',$kegiatan_id)->where('aktivis_id',$aktivis_id)->first();
		$kelas->tanggal_hadir = \Carbon\Carbon::now();
		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => "Peserta berhasil hadir"
			]);
	}

	public function updatePanitiaHadir($kegiatan_id, $aktivis_id)
	{
		$kelas = KegiatanPanitia::where('kegiatan_id',$kegiatan_id)->where('aktivis_id',$aktivis_id)->first();
		$kelas->tanggal_hadir = \Carbon\Carbon::now();
		$kelas->update();

		return response()
			->json([
				'saved' => true,
				'message' => "Panitia berhasil hadir"
			]);
	}

	public function destroy($id)
	{
		$kelas = Kegiatan::findOrFail($id);
		$name = $kelas->name;

		if(!empty($kelas->gambar)){
			File::delete($this->imagepath . $kelas->gambar . '.jpg');
			File::delete($this->imagepath . $kelas->gambar . 'n.jpg');
		}

		$kelas->sasaran()->sync([]);
		$kelas->panitia_dalam()->sync([]);

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

	public function destroyMateri($id)
	{
		$kelas = KegiatanMateri::findOrFail($id);
		$name = $kelas->name;
		$tipe = $kelas->tipe;

		$kelas->delete();
		if($tipe != 'pdf'){
			File::delete($this->materipath . $kelas->filename . '.jpg');
			File::delete($this->materipath . $kelas->filename . 'n.jpg');
		}else{
			File::delete($this->materipath . $kelas->filename);
		}

		return response()
			->json([
				'deleted' => true,
				'message' =>  'Materi ' .$name. 'berhasil dihapus'
			]);
	}

	public function destroyKeputusan($id)
	{
		$kelas = KegiatanKeputusan::findOrFail($id);
		$name = $kelas->name;

		$kelas->pilih()->sync([]);
		KegiatanKeputusan::where('kegiatan_keputusan_id',$id)->delete();

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  'Keputusan ' .$name. 'berhasil dihapus'
			]);
	}
	
	public function destroyKeputusanKomentar($id)
	{
		$kelas = KegiatanKeputusan::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  'Komentar ' .$name. 'berhasil dihapus'
			]);
	}

	public function destroyPertanyaan($id)
	{
		$kelas = KegiatanPertanyaan::findOrFail($id);
		$name = $kelas->name;

		KegiatanPertanyaan::where('kegiatan_pertanyaan_id',$id)->delete();

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  'Pertanyaan ' .$name. 'berhasil dihapus'
			]);
	}
	
	public function destroyPertanyaanKomentar($id)
	{
		$kelas = KegiatanPertanyaan::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  'Komentar ' .$name. 'berhasil dihapus'
			]);
	}

	public function batalPeserta(Request $request, $id)
	{
		$kelas = KegiatanPeserta::findOrFail($id);

		$kelas->status = 3;
		$kelas->keteranganBatal = $request->keteranganBatal;

		$kelas->update();

		if($request->keteranganBatal != ''){
			NotificationHelper::store_diklat_bkcu(0, $kelas->kegiatan_id,'Maaf, peserta telah dibatalkan dengan alasan ' . $request->keteranganBatal);
		}else{
			NotificationHelper::store_diklat_bkcu(0, $kelas->kegiatan_id,'Maaf, peserta telah dibatalkan');
		}

		return response()
			->json([
				'saved' => true,
				'message' => "Peserta berhasil dibatalkan"
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

	public function countPesertaHadir($id)
	{
			$table_data = KegiatanPeserta::where('kegiatan_id',$id)->whereNotNull('tanggal_hadir')->count();
			
			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function countKeputusan($id, $cu, $user)
	{
		$table_data = KegiatanKeputusan::where('kegiatan_id',$id)->whereNull('kegiatan_keputusan_id')->where('id_cu',$cu)->count();

		$table_data2 = KegiatanKeputusan::where('kegiatan_id',$id)->whereNull('kegiatan_keputusan_id')->where('id_user',$user)->count();

		return response()
	->json([
			'model' => [$table_data, $table_data2]
		]);
	}

	public function countPertanyaan($id, $cu, $user)
	{
		$table_data = KegiatanPertanyaan::where('kegiatan_id',$id)->whereNull('kegiatan_pertanyaan_id')->where('id_cu',$cu)->count();

		$table_data2 = KegiatanPertanyaan::where('kegiatan_id',$id)->whereNull('kegiatan_pertanyaan_id')->where('id_user',$user)->count();

		return response()
		->json([
			'model' => [$table_data, $table_data2]
		]);
	}
}