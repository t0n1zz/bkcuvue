<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Image;
use App\Nilai;
use App\Kegiatan;
use App\Support\Helper;
use App\KegiatanPanitia;
use App\KegiatanPeserta;
use App\KegiatanMateri;
use App\KegiatanListMateri;
use App\KegiatanTugas;
use App\KegiatanTugasJawaban;
use App\KegiatanKeputusan;
use App\KegiatanPertanyaan;
use App\KegiatanPilih;
use App\Sertifikat;
use App\SertifikatGenerate;
use Illuminate\Http\Request;
use App\Support\NotificationHelper;

class KegiatanBKCUController extends Controller{

	protected $imagepathPertemuan = 'images/pertemuan/';
	protected $imagepathDiklat = 'images/diklat/';
	protected $materipathPertemuan = 'files/pertemuan/';
	protected $materipathDiklat = 'files/diklat/';
	protected $width = 300;
	protected $height = 200;
	protected $message = "Kegiatan";

	public function index($kegiatan_tipe)
	{
		$table_data = Kegiatan::with('tempat','sasaran','Regencies','Provinces')->withCount('hasPeserta')->where('tipe',$kegiatan_tipe)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPeriode($kegiatan_tipe, $periode)
	{
		$table_data = Kegiatan::with('tempat','sasaran','Regencies','Provinces')->withCount('hasPeserta')->where('tipe',$kegiatan_tipe)->where('periode',$periode)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexBaru()
	{
		$periode= Kegiatan::distinct('periode')->orderBy('periode','desc')->pluck('periode')->first();
		$now =\Carbon\Carbon::now()->format('Y-m-d');

		$table_data = Kegiatan::with('tempat','sasaran','Regencies')->whereIn('tipe',['diklat_bkcu','pertemuan_bkcu'])->where('periode',$periode)->whereIn('status',[1,2])->orderBy('created_at','desc')->take(6)->get();

		$countMulai = Kegiatan::whereIn('tipe',['diklat_bkcu','pertemuan_bkcu'])->where('periode',$periode)->whereIn('status',[1,2])->where('mulai','>',$now)->orderBy('mulai','asc')->count();

		$countBuka = Kegiatan::whereIn('tipe',['diklat_bkcu','pertemuan_bkcu'])->where('periode',$periode)->where('status',2)->count();

		$countJalan = Kegiatan::whereIn('tipe',['diklat_bkcu','pertemuan_bkcu'])->where('status',4)->count();

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

		$table_data = Kegiatan::with('tempat','sasaran','Regencies')->whereIn('tipe',['diklat_bkcu','pertemuan_bkcu'])->where('periode',$periode)->whereIn('status',[1,2])->where('mulai','>',$now)->orderBy('mulai','asc')->take(6)->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexBuka()
	{
		$periode= Kegiatan::distinct('periode')->orderBy('periode','desc')->pluck('periode')->first();

		$table_data = Kegiatan::with('tempat','sasaran','Regencies')->whereIn('tipe',['diklat_bkcu','pertemuan_bkcu'])->where('periode',$periode)->where('status',2)->take(6)->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexJalan()
	{
		$table_data = Kegiatan::with('tempat','sasaran','Regencies')->whereIn('tipe',['diklat_bkcu','pertemuan_bkcu'])->where('status',4)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPeserta($id)
	{
		$table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu','aktivis.pendidikan_tertinggi')->where('kegiatan_id',$id)->advancedFilter();

		$table_data = $this->formatQuery($table_data);

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
		
		$table_data = $this->formatQuery($table_data);

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexPesertaHadir($id)
	{
		$table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu','aktivis.pendidikan_tertinggi')->where('kegiatan_id',$id)->whereNotNull('tanggal_hadir')->advancedFilter();

		$table_data = $this->formatQuery($table_data);

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

	public function indexListMateri($id)
	{
		$table_data = KegiatanListMateri::where('kegiatan_id', $id)->advancedFilter();
		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexNilaiListMateri($id)
	{
		$table_data = KegiatanListMateri::where('kegiatan_id', $id)->get();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexNilai($id, $aktivis_id)
	{
		$table_data = KegiatanListMateri::select("kegiatan_list_materi.id", "kegiatan_list_materi.nama", "kegiatan_materi_nilai.nilai")
			->join("kegiatan_materi_nilai", "kegiatan_materi_nilai.materi_id", "=", "kegiatan_list_materi.id")
			->where('kegiatan_materi_nilai.aktivis_id', $aktivis_id)
			->where('kegiatan_materi_nilai.kegiatan_id', $id)
			->get();

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

	public function indexTugas($id)
	{
		$table_data = KegiatanTugas::with('cu','user.aktivis')->withCount('hasjawaban')->where('kegiatan_id',$id)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexTugasJawaban($id)
	{
		$table_data = KegiatanTugasJawaban::with('cu','user.aktivis')->where('kegiatan_tugas_id',$id)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexKegiatan()
	{
		$periode = date("Y");

		$table_data = Kegiatan::where('periode',$periode)->select('id','name','mulai','periode')->get();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function formatQuery($table_data){
		foreach($table_data as $t){
			if(isset($t->aktivis->pekerjaan_aktif)){
				if($t->aktivis->pekerjaan_aktif->status == 1){
					$t->aktivis->pekerjaan_aktif = $t->aktivis->pekerjaan_aktif;
					if($t->aktivis->pekerjaan_aktif->tipe == 3){
						$t->aktivis->pekerjaan_aktif->cu->name = 'PUSKOPCUINA';
					}
					if ($t->tingkat == 1) {
						$t->tingkat_name = 'Pengurus';
					} else if($t->tingkat == 2) {
						$t->tingkat_name = 'Pengawas';
					}	else if($t->tingkat == 3) {
						$t->tingkat_name = 'Komite';
					} else if($t->tingkat == 4) {
						$t->tingkat_name = 'Penasihat';
					} else if($t->tingkat == 5) {
						$t->tingkat_name = 'Senior Manajer';
					} else if($t->tingkat == 6) {
						$t->tingkat_name = 'Manajer';
					} else if($t->tingkat == 7) {
						$t->tingkat_name = 'Supervisor';
					} else if($t->tingkat == 8) {
						$t->tingkat_name = 'Staf';
					} else if($t->tingkat == 9) {
						$t->tingkat_name = 'Kontrak';
					} else if($t->tingkat == 10) {
						$t->tingkat_name = 'Kolektor';
					} else if($t->tingkat == 11) {
						$t->tingkat_name = 'Kelompok Inti';
					} else if($t->tingkat == 12) {
						$t->tingkat_name = 'Supporting Unit';
					} else if($t->tingkat == 13) {
						$t->tingkat_name = 'Vendor sMartCU';
					}
				}
			}
		}
		return $table_data;
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

	public function getPeriode($kegiatan_tipe)
	{
		$table_data = Kegiatan::where('tipe',$kegiatan_tipe)->distinct('periode')->pluck('periode');

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

	public function store(Request $request, $kegiatan_tipe)
	{	
		$this->validate($request,Kegiatan::$rules);

		$name = $request->name;

		// processing single image upload
		if(!empty($request->gambar)){
			if($kegiatan_tipe == 'diklat_bkcu'){
				$imagepath = $this->imagepathDiklat;
			}else{
				$imagepath = $this->imagepathPertemuan;
			}	
			$fileName = Helper::image_processing($imagepath,$this->width,$this->height,$request->gambar,'',$name);
		}else{
			$fileName = '';
		}

		$kelas = Kegiatan::create($request->except('tipe','status','gambar') + [
			'tipe' => $kegiatan_tipe, 
			'status' => '1', 
			'gambar' => $fileName
		]);

		$sasaran_ar = array();
		foreach($request->sasaran as $sasaran){
			array_push($sasaran_ar, implode('', $sasaran));
		}
		
		$kelas->sasaran()->sync($sasaran_ar);

		// $kelas->sasaran()->sync(array_flatten($request->sasaran));

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
		$aTmp1 = [];
		$aTmp2 = [];
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

	public function storePeserta(Request $request, $kegiatan_tipe, $id)
	{
		$id_cu = Auth::user()->id_cu;
		$kegiatan = Kegiatan::findOrFail($id);

		$semuaPesertaTerdaftar = $table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu','aktivis.pendidikan_tertinggi')->where('kegiatan_id',$id)->count();
		
		if($semuaPesertaTerdaftar < $kegiatan->peserta_max){
			if($id_cu != 0){
				$pesertaTerdaftar = $table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu','aktivis.pendidikan_tertinggi')->where('kegiatan_id',$id)->whereHas('aktivis.pekerjaan', function($query) use ($id_cu){
					$query->where('tipe','1')->where('id_tempat',$id_cu);
				})->count();
			}else{
				$pesertaTerdaftar = $table_data = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu','aktivis.pendidikan_tertinggi')->where('kegiatan_id',$id)->whereHas('aktivis.pekerjaan', function($query) use ($id_cu){
					$query->where('tipe','3')->where('id_tempat',$id_cu);
				})->count();
			}
	
			if($pesertaTerdaftar <  $kegiatan->peserta_max_cu){
				$kelas = KegiatanPeserta::create($request->except('kegiatan_id') + [ 'kegiatan_id' => $id ]);
	
				if($id_cu != 0){
					// check interval
					$dataPeserta = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu')->where('kegiatan_id', $id)->whereHas('aktivis.pekerjaan_aktif.cu', function($query) use($id_cu){
						$query->where('id', $id_cu);
					})->orderBy('created_at','desc')->first();
					$time = \Carbon\Carbon::now();
			
					// send notif if interval different is more than 2 hours
					if($dataPeserta){
						$diff = $time->diffInHours($dataPeserta->created_at);
						if($diff > 2){
							if($kegiatan_tipe == 'diklat_bkcu'){
								NotificationHelper::diklat_bkcu($id_cu, $id,'menambah peserta');
							}else{
								NotificationHelper::pertemuan_bkcu($id_cu, $id,'menambah peserta');
							}
						}
					}else{
						if($kegiatan_tipe == 'diklat_bkcu'){
							NotificationHelper::diklat_bkcu($id_cu, $id,'menambah peserta');
						}else{
							NotificationHelper::pertemuan_bkcu($id_cu, $id,'menambah peserta');
						}
					}
				}
				
				return response()
					->json([
						'saved' => true,
						'message' => 'Peserta ' . $this->message. ' berhasil ditambah',
						'id' => $kelas->id
					]);	
			}else{
				return response()
					->json([
						'saved' => false,
						'message' => 'Maaf anda tidak bisa mendaftarkan peserta lagi, karena jumlah maksimal peserta per CU adalah ' . $kegiatan->peserta_max_cu . ' orang.',
					]);	
			}
		}else{
			return response()
					->json([
						'saved' => false,
						'message' => 'Maaf anda tidak bisa mendaftarkan peserta lagi, karena jumlah maksimal peserta adalah ' . $kegiatan->peserta_max,
					]);	
		}
	}

	public function storeMateri(Request $request, $kegiatan_tipe, $id)
	{
		$name = $request->name;
		$format = $request->format;
		$formatedName = '';
		$fileExtension = 'link';
		
		if($format == 'upload'){
			$file = $request->content;
			if($kegiatan_tipe == 'diklat_bkcu'){
				$materipath = $this->materipathDiklat;
			}else{
				$materipath = $this->materipathPertemuan;
			}
			
			$fileExtension = $file->getClientOriginalExtension();
			if($fileExtension != 'pdf'){
				$formatedName = Helper::image_processing($materipath,$this->width,$this->height,$file,'',$name);
			}else{
				$filename = $file->getClientOriginalName();
				$formatedName = str_limit(preg_replace('/[^A-Za-z0-9\-]/', '',$name),10,'') . '_' .uniqid(). $fileExtension;
				$file->move($materipath,$formatedName);
			}
		}

		$kelas = KegiatanMateri::create([ 
			'kegiatan_id' => $id,
			'name' => $request->name,
			'filename' => $formatedName,
			'link' => $request->link,
			'format' => $format,
			'tipe' => $fileExtension,
			'keterangan' => $request->keterangan
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Materi ' . $this->message. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function storeListMateri(Request $request, $kegiatan_tipe, $id)
	{
		$kelas = KegiatanListMateri::create([
			'kegiatan_id' => $id,
			'nama' => $request->nama,
			'waktu' => $request->waktu
		]);

		return response()
			->json([
				'saved' => true,
				'message' => 'List Materi ' . $this->message . ' berhasil ditambah',
				'id' => $kelas->id
			]);
	}

	public function storeNilai($kegiatan_id, $aktivis_id, $materi_id, Request $request)
	{
		$data = Nilai::where('kegiatan_id', $kegiatan_id)->where('aktivis_id', $aktivis_id)->where('materi_id', $materi_id)->first();
		if ($data != null) {
			$kelas = Nilai::where('kegiatan_id', $kegiatan_id)->where('aktivis_id', $aktivis_id)->where('materi_id', $materi_id)->update(['nilai' => $request->nilai]);
		} else {
			$kelas = Nilai::create([
				'aktivis_id' => $aktivis_id,
				'kegiatan_id' => $kegiatan_id,
				'materi_id' => $materi_id,
				'nilai' => $request->nilai
			]);
		}
		return response()
			->json([
				'saved' => true,
				'message' => 'Nilai berhasil ditambah/diupdate',
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

	public function storeTugas(Request $request, $kegiatan_tipe, $id)
	{
		$name = $request->name;
		$tipe = $request->tipe;
		$format = $request->format;
		$formatedName = '';
		$fileExtension = 'link';
		
		if($format == 'upload'){
			$file = $request->filename;
			if($kegiatan_tipe == 'diklat_bkcu'){
				$materipath = $this->materipathDiklat;
			}else{
				$materipath = $this->materipathPertemuan;
			}
			
			$filename = $file->getClientOriginalName();
			$formatedName = str_limit(preg_replace('/[^A-Za-z0-9\-]/', '',$name),10,'') . '_' .uniqid(). '.'.$fileExtension;
			$file->move($materipath,$formatedName);
		}

		$kelas = KegiatanTugas::create($request->except('kegiatan_id','file') +[ 
			'kegiatan_id' => $id,
			'file' => $formatedName,
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Tugas ' . $this->message. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function storeTugasJawaban(Request $request, $kegiatan_tipe)
	{
		$name = $request->name;
		$format = $request->format;
		$formatedName = '';
		$fileExtension = '';
		
		if($format == 'upload'){
			$file = $request->filename;
			if($kegiatan_tipe == 'diklat_bkcu'){
				$materipath = $this->materipathDiklat;
			}else{
				$materipath = $this->materipathPertemuan;
			}
			
			$fileExtension = $file->getClientOriginalExtension();
			$filename = $file->getClientOriginalName();
			$formatedName = str_limit(preg_replace('/[^A-Za-z0-9\-]/', '',$name),10,'') . '_' .uniqid(). '.'.$fileExtension;
			$file->move($materipath,$formatedName);
		}

		$kelas = KegiatanTugasJawaban::create($request->except('file') +[ 
			'file' => $formatedName,
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Jawaban tugas ' . $this->message. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function edit($id)
	{
		$kelas = Kegiatan::with('tempat','sasaran','panitia_dalam.pekerjaan_aktif.cu','panitia_luar','panitia_luar_lembaga','pilih')->findOrFail($id);
		$kelas2 = Sertifikat::where('id', $kelas->id_sertifikat)->get();

		return response()
				->json([
						'form' => $kelas,
						'form1' => $kelas2,
						'option' => []
				]);
	}

	public function editTugasJawaban($id)
	{
		$id_user = Auth::user()->getId();
		$kelas = KegiatanTugasJawaban::with('cu','user.aktivis')->where('kegiatan_tugas_id',$id)->where('id_user',$id_user)->first();

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
		if(!empty($request->gambar)){
			if($kelas->tipe == 'diklat_bkcu'){
				$imagepath = $this->imagepathDiklat;
			}else{
				$imagepath = $this->imagepathPertemuan;
			}
			$fileName = Helper::image_processing($imagepath,$this->width,$this->height,$request->gambar,$kelas->gambar, $name);
		}else{
			$fileName = '';
		}

		$kelas->update($request->except('gambar') + [
			'gambar' => $fileName
		]);

		$sasaran_ar = array();
		foreach($request->sasaran as $sasaran){
			array_push($sasaran_ar, implode('', $sasaran));
		}
		
		$kelas->sasaran()->sync($sasaran_ar);

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
			\App\Aktivis::flushCache();
			\App\MitraOrang::flushCache();
			\App\MitraLembaga::flushCache();
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
		$statusPeserta = $request->status;

		if($request->status == 5){
			$periode = Kegiatan::where('id', $id)->select('periode')->get();
			$idAktivis = KegiatanPeserta::where('kegiatan_id', $id)->select('aktivis_id')->get();
			$lastNomor = SertifikatGenerate::where('periode', $periode->first()->periode)->max('nomor');
			if ($lastNomor == null) {
				$lastNomor = 0;
			}
			foreach ($idAktivis as $peserta) {
				$checkPeserta = SertifikatGenerate::where('id_aktivis', $peserta->aktivis_id)->where('id_kegiatan', $id)->get()->first();
				if (!$checkPeserta) {
					$lastNomor++;
					SertifikatGenerate::create(['id_aktivis' => $peserta->aktivis_id, 'id_kegiatan' => $id, 'nomor' => $lastNomor, 'periode' => $periode->first()->periode]);
				}
			}
		}

		if($request->status == 6){
			$kelas->keteranganBatal = $request->keterangan;
		}else{
			$kelas->keteranganBatal = "";
		}

		$kelas->update();

		// $dataPeserta = KegiatanPeserta::with('aktivis.pekerjaan_aktif')->where('kegiatan_id', $id)->get();

		if($statusPeserta){
			KegiatanPeserta::where('kegiatan_id', $id)->where('status','!=',7)->update(['status' => $statusPeserta]);

			// $id_cus = [];
			// foreach($dataPeserta as $peserta){
			// 	if($peserta->aktivis->pekerjaan_aktif){
			// 		if($peserta->aktivis->pekerjaan_aktif->tipe == 1){
			// 			array_push($id_cus,$peserta->aktivis->pekerjaan_aktif->id_tempat);
			// 		}
			// 	}
			// }

			// $id_cus = array_unique($id_cus);
			// if($kelas->tipe == 'diklat_bkcu'){
			// 	NotificationHelper::diklat_bkcu_status($id, $id_cus,'diklat ' . $kelas->name  . '  ' . $status);
			// }else{
			// 	NotificationHelper::pertemuan_bkcu_status($id, $id_cus,'pertemuan ' . $kelas->name  . '  ' . $status);
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

	public function updateListMateri(Request $request, $id)
	{
		$kelas = KegiatanListMateri::findOrFail($id);

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

	public function updateTugas(Request $request, $id)
	{
		$kelas = KegiatanTugas::findOrFail($id);

		$kelas->update($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => "Tugas berhasil diubah"
			]);
	}

	public function updateTugasJawaban(Request $request, $id)
	{
		$kelas = KegiatanTugasJawaban::findOrFail($id);

		$kelas->update($request->all());

		return response()
			->json([
				'saved' => true,
				'message' => "Jawaban tugas berhasil diubah"
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

	public function jawabanPertanyaan($id, $tipe)
	{
		if($tipe == 'jawaban'){
			$kelasKomentar = KegiatanPertanyaan::findOrFail($id);
			$kelasPertanyaan = KegiatanPertanyaan::findOrFail($kelasKomentar->kegiatan_pertanyaan_id);
			$kelasKomentarJawaban = KegiatanPertanyaan::where('kegiatan_pertanyaan_id', $kelasPertanyaan->id)->whereNotNull('terjawab')->first();

			if($kelasKomentarJawaban){
				$kelasKomentarJawaban->terjawab = null;
				$kelasKomentarJawaban->update();
			}

			$kelasKomentar->terjawab = 1;
			$kelasKomentar->update();

			$kelasPertanyaan->terjawab = 1;
			$kelasPertanyaan->update();
		}else{
			$kelasKomentarJawaban = KegiatanPertanyaan::findOrFail($id);
			$kelasKomentarJawaban->terjawab = null;
			$kelasKomentarJawaban->update();

			$kelasPertanyaan = KegiatanPertanyaan::findOrFail($kelasKomentarJawaban->kegiatan_pertanyaan_id);
			$kelasPertanyaan->terjawab = null;
			$kelasPertanyaan->update();
		}

		return response()
			->json([
				'saved' => true,
				'message' => "Jawaban pertanyaan berhasil diubah"
			]);
	}

	public function destroy($id)
	{
		$kelas = Kegiatan::findOrFail($id);
		$name = $kelas->name;

		if(!empty($kelas->gambar)){
			if($kelas->tipe == 'diklat_bkcu'){
				$imagepath = $this->imagepathDiklat;
			}else{
				$imagepath = $this->imagepathPertemuan;
			}
			File::delete($imagepath . $kelas->gambar . '.jpg');
			File::delete($imagepath . $kelas->gambar . 'n.jpg');
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

	public function destroyMateri($kegiatan_tipe, $id)
	{
		$kelas = KegiatanMateri::findOrFail($id);
		$name = $kelas->name;
		$format = $kelas->format;

		$kelas->delete();

		if($kegiatan_tipe == 'diklat_bkcu'){
			$materipath = $this->materipathDiklat;
		}else{
			$materipath = $this->materipathPertemuan;
		}

		if(!empty($kelas->filename)){
			if($format == 'jpg'){
				File::delete($materipath . $kelas->filename . '.jpg');
				File::delete($materipath . $kelas->filename . 'n.jpg');
			}else{
				File::delete($materipath . $kelas->filename);
			}
		}

		return response()
			->json([
				'deleted' => true,
				'message' =>  'Materi ' .$name. 'berhasil dihapus'
			]);
	}

	public function destroyListMateri($kegiatan_tipe, $id)
	{
		$kelas = KegiatanListMateri::findOrFail($id);
		$name = $kelas->name;
		$format = $kelas->format;

		$kelas->delete();
		return response()
			->json([
				'deleted' => true,
				'message' =>  'Materi ' . $name . ' berhasil dihapus'
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

	public function destroyTugas($kegiatan_tipe, $id)
	{
		$kelas = KegiatanTugas::findOrFail($id);
		$name = $kelas->name;
		$format = $kelas->format;

		$kelas->delete();

		if($kegiatan_tipe == 'diklat_bkcu'){
			$materipath = $this->materipathDiklat;
		}else{
			$materipath = $this->materipathPertemuan;
		}

		if(!empty($kelas->filename)){
			File::delete($materipath . $kelas->filename);
		}

		$jawaban = KegiatanTugasJawaban::where('kegiatan_tugas_id',$id)->get();
		foreach($jawaban as $j){
			$kelasJ = KegiatanTugasJawaban::findOrFail($jawaban->id);
			$name = $kelasJ->name;
			$format = $kelasJ->format;

			$kelasJ->delete();

			if($kegiatan_tipe == 'diklat_bkcu'){
				$materipath = $this->materipathDiklat;
			}else{
				$materipath = $this->materipathPertemuan;
			}

			if(!empty($kelas->filename)){
				File::delete($materipath . $kelas->filename);
			}
		}

		return response()
			->json([
				'deleted' => true,
				'message' =>  'Tugas ' .$name. 'berhasil dihapus'
			]);
	}

	public function destroyTugasJawaban($kegiatan_tipe, $id)
	{
		$kelas = KegiatanTugasJawaban::findOrFail($id);
		$name = $kelas->name;
		$format = $kelas->format;

		$kelas->delete();

		if($kegiatan_tipe == 'diklat_bkcu'){
			$materipath = $this->materipathDiklat;
		}else{
			$materipath = $this->materipathPertemuan;
		}
		if(!empty($kelas->filename)){
			File::delete($materipath . $kelas->filename);
		}

		return response()
			->json([
				'deleted' => true,
				'message' =>  'Jawaban tugas ' .$name. 'berhasil dihapus'
			]);
	}

	public function batalPeserta(Request $request, $kegiatan_tipe, $id)
	{
		$kelas = KegiatanPeserta::with('aktivis.pekerjaan_aktif')->findOrFail($id);

		$kegiatan_id = $kelas->kegiatan_id;
		$id_cu = $kelas->aktivis->pekerjaan_aktif->id_cu;

		$kelas->status = 7;
		$kelas->keteranganBatal = $request->keteranganBatal;

		$kelas->update();

		if($id_cu != 0){
			if($request->keteranganBatal != ''){
				if($kegiatan_tipe == 'diklat_bkcu'){
					NotificationHelper::diklat_bkcu($id_cu, $kegiatan_id, 'membatalkan pendaftaran peserta dengan alasan ' . $request->keteranganBatal);
				}else{
					NotificationHelper::pertemuan_bkcu($id_cu, $kegiatan_id, 'membatalkan pendaftaran peserta dengan alasan ' . $request->keteranganBatal);
				}
			}else{
				if($kegiatan_tipe == 'diklat_bkcu'){
					NotificationHelper::diklat_bkcu($id_cu, $kegiatan_id, 'membatalkan pendaftaran peserta');
				}else{
					NotificationHelper::pertemuan_bkcu($id_cu, $kegiatan_id, 'membatalkan pendaftaran peserta');
				}
			}
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