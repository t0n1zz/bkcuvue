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
use App\KegiatanDiskusi;
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
		$periode= Kegiatan::distinct('periode')->orderBy('periode','desc')->pluck('periode')->first();

		$table_data = Kegiatan::with('tempat','sasaran','Regencies')->where('tipe',$this->tipe)->where('periode',$periode)->where('status',4)->take(6)->get();

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

	public function indexMateri($id)
	{
		$table_data = KegiatanMateri::where('kegiatan_id',$id)->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexDiskusi($id)
	{
		$table_data = KegiatanDiskusi::where('kegiatan_id',$id)->advancedFilter();

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
 
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function storePeserta(Request $request, $id)
	{
		// check interval
		// $id_cu = Auth::user()->getIdCu();
		// $dataPeserta = KegiatanPeserta::with('aktivis.pekerjaan_aktif.cu')->where('kegiatan_id', $id)->whereHas('aktivis.pekerjaan_aktif.cu', function($query) use($id_cu){
		// 	$query->where('id', $id_cu);
		// })->orderBy('created_at','desc')->first();
		// $time = \Carbon\Carbon::now();

		// save data
		$kelas = KegiatanPeserta::create($request->except('status','kegiatan_id') + [ 'kegiatan_id' => $id, 'status' => 1 ]);

		// send notif if interval different is more than 2 hours
		// if($dataPeserta){
		// 	$diff = $time->diffInHours($dataPeserta->created_at);
		// 	if($diff > 2){
		// 		NotificationHelper::store_diklat_bkcu($id_cu, $id,'Menambah peserta');
		// 	}
		// }else{
			// NotificationHelper::store_diklat_bkcu($id_cu, $id,'Menambah peserta');
		// }
		
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

	public function storeDiskusi(Request $request, $id)
	{
		$kelas = KegiatanDiskusi::create($request->except('kegiatan_id') + [ 'kegiatan_id' => $id ]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Diskusi ' . $this->message. ' berhasil ditambah',
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
		// $this->validate($request, Kegiatan::$rules);

		$name = $request->name;

		$kelas = Kegiatan::findOrFail($id);

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
}