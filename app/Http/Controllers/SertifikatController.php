<?php

namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Image;
use App\Kegiatan;
use App\Support\Helper;
use App\Sertifikat;
use App\SertifikatGenerate;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;
use DateTime;
use App\KegiatanListMateri;
use App\KegiatanMateriNilai;
use App\Aktivis;
use App\KegiatanPeserta;
use App\SertifikatGetNomor;
use App\SertifikatGetNomorPeserta;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\UploadPesertaImport;
use App\Cu;



class SertifikatController extends Controller
{

  protected $imagepathSertifikat = 'images/sertifikatKegiatan/';
  protected $width = 300;
  protected $height = 200;
  protected $message = "Sertifikat";

  public function index()
  {
    
    $table_data = Sertifikat::select('id', 'kode_sertifikat', 'name', 'tipe', 'gambar_depan', 'gambar_belakang')->advancedFilter();

    return response()
      ->json([
        'model' => $table_data
      ]);
  }

  public function indexNomorSertifikat()
  {
    $table_data = SertifikatGetNomor::with([
      'hasNomor' => function ($query) {
          $query->select(
              'id',
              'sertifikat_get_nomor_id',
              'sertifikat_get_nomor_peserta_id',
              'nomor',
              'periode',
              'kegiatan_peserta_id',
              'id_kegiatan'
          )
          ->with(['pesertaNonAktivis' => function ($query) {
              $query->select('id', 'nama', 'keterangan');
          }]);
      }
  ])
  ->select('sertifikat_get_nomor.*')
  ->advancedFilter();
  
  $table_data->getCollection()->transform(function ($item) {
    $item->periode = optional($item->hasNomor->first())->periode;
    return $item;
  });
    
      return response()
      ->json([
        'model' => $table_data
      ]);
    
  }

  public function indexKode()
  {
    $table_data = SertifikatGenerate::with('peserta','kegiatan')->advancedFilter();

    return response()
      ->json([
        'model' => $table_data
      ]);
  }

  public function create()
  {
    return response()
      ->json([
        'form' => Sertifikat::initialize(),
        'rules' => sertifikat::$rules,
        'option' => []
      ]);
  }

  public function store(Request $request)
  {
    $this->validate($request, Sertifikat::$rules);
    $name = $request->name;
    if (!empty($request->gambar_depan)) {
      $imagepath = $this->imagepathSertifikat;
      $fileName1 = Helper::image_processing($imagepath, $this->width, $this->height, $request->gambar_depan, '', $name);
    } else {
      $fileName1 = '';
    }

    if (!empty($request->gambar_belakang)) {
      $imagepath = $this->imagepathSertifikat;
      $fileName2 = Helper::image_processing($imagepath, $this->width, $this->height, $request->gambar_belakang, '', $name);
    } else {
      $fileName2 = '';
    }

    $kelas = Sertifikat::create($request->except('gambar_depan', 'gambar_belakang') + [
      'gambar_depan' => $fileName1, 'gambar_belakang' => $fileName2
    ]);

    return response()
      ->json([
        'saved' => true,
        'message' => $this->message . ' ' . $name . ' berhasil ditambah',
        'id' => $kelas->id
      ]);
  }

  public function uploadExcelPeserta(Request $request)
	{
      $import = new UploadPesertaImport();
      // Excel::import($import, $request->file('file_excel'));
      Excel::import($import, request()->file('file'));
      $sertifikatId = $import->getSertifikatId();

      if (!$sertifikatId) {
          return response()->json(['message' => 'Gagal import, data tidak lengkap'], 422);
      }

      $sertifikat = SertifikatGetNomor::find($sertifikatId);

      // Ambil semua peserta dari kegiatan ini
      $pesertaList = SertifikatGetNomorPeserta::where('sertifikat_get_nomor_id', $sertifikatId)->get();
      
      $numbersToBook = $this->getAvailableNumbers($pesertaList->count(), $import->getPeriode());
      
      foreach ($pesertaList as $index => $peserta) {
          SertifikatGenerate::create([
              'kegiatan_peserta_id' => 0, // jika tidak digunakan, set 0
              'id_kegiatan' => 0, // isi sesuai kebutuhan jika punya relasi kegiatan
              'sertifikat_get_nomor_id' => $sertifikat->id,
              'sertifikat_get_nomor_peserta_id' => $peserta->id,
              'nomor' => $numbersToBook[$index],
              'periode' => $import->getPeriode(),
          ]);
      }

      return response()->json([
          'uploaded' => true,
          'sertifikat_id' => $sertifikat->id,
          'message' => 'Data penerima '. $this->message.' berhasil diupload'
      ]);
	}
  
  public function storeNomorSertifikatKegiatan($id, Request $request)
{
  $idKegiatan = 0;
  $kegiatanPesertaId = 0;
  $periode = $request->periode;
  $jumlah = $request->jumlah_nomor_sertifikat;
  $aktivisId = $id;
  $kegiatanName = $request->nama_kegiatan;
  $peserta = $request->peserta; // array berisi nama dan keterangan peserta

  $kelas = DB::transaction(function () use ($idKegiatan, $kegiatanPesertaId, $jumlah, $periode, $aktivisId, $kegiatanName, $peserta) {
      // 1. Simpan metadata ke sertifikat_get_nomor
      $sertifikatGetNomorId = DB::table('sertifikat_get_nomor')->insertGetId([
          'aktivis_id' => $aktivisId,
          'kegiatan_name' => $kegiatanName,
          'jumlah_nomor_sertifikat' => $jumlah,
          'created_at' => now(),
      ]);
      // 2. Ambil nomor yang tersedia
      $numbersToBook = $this->getAvailableNumbers($jumlah, $periode);

      // Validasi: pastikan jumlah peserta dan jumlah nomor sama
      if (count($peserta) != $jumlah) {
          throw new \Exception("Jumlah peserta tidak sama dengan jumlah nomor sertifikat yang diminta.");
      }

      // 3. Iterasi peserta dan simpan ke dua tabel
      foreach ($peserta as $index => $p) {
          // Simpan ke tabel sertifikat_get_nomor_peserta
          $pesertaId = DB::table('sertifikat_get_nomor_peserta')->insertGetId([
              'nama' => $p['nama'],
              'sertifikat_get_nomor_id' => $sertifikatGetNomorId,
              'keterangan' => $p['keterangan'] ?? null,
              'created_at' => now(),
          ]);
          // Simpan ke tabel sertifikat_generate
          SertifikatGenerate::create([
              'nomor' => $numbersToBook[$index],
              'id_kegiatan' => $idKegiatan,
              'kegiatan_peserta_id' => $kegiatanPesertaId,
              'periode' => $periode,
              'sertifikat_get_nomor_id' => $sertifikatGetNomorId,
              'sertifikat_get_nomor_peserta_id' => $pesertaId,
              // 'created_at' => now()
          ]);
      }

      return DB::table('sertifikat_get_nomor')->where('id', $sertifikatGetNomorId)->first();
  });

  return response()->json([
      'saved' => true,
      'message' => 'Nomor sertifikat berhasil ditambah',
      'id' => $kelas->id
  ]);
}

	public function getAvailableNumbers($jumlah, $periode)
{
  $lastNumber = SertifikatGenerate::withTrashed()
    ->where('periode', $periode)
    ->max('nomor');
    // Jika belum ada data, mulai dari 1
    $startNumber = $lastNumber ? $lastNumber + 1 : 1;

    // Jika hanya satu nomor, kembalikan langsung nilainya
    if ($jumlah == 1) {
        return $startNumber;
    }
    // Jika lebih dari satu, kembalikan array
    return range($startNumber, $startNumber + $jumlah - 1);
}


  public function edit($id)
  {
    $kelas = Sertifikat::findOrFail($id);
    
    return response()
      ->json([
        'form' => $kelas,
        'option' => []
      ]);
  }

  public function editFormNomor($id)
  {
    $kelas = $this->queryEditFormNomor($id);
   
    return response()
      ->json([
        'form' => $kelas,
        'option' => []
      ]);
  }

  public function queryEditFormNomor($id){
    return SertifikatGetNomor::with([
          'hasNomor' => function ($query) {
            $query->select(
                'id',
                'sertifikat_get_nomor_id',
                'sertifikat_get_nomor_peserta_id',
                'nomor',
                'periode',
                'kegiatan_peserta_id',
                'id_kegiatan'
            )
            ->with(['pesertaNonAktivis' => function ($query) {
                $query->select('id', 'nama', 'keterangan');
            }]);
        }
      ])
      ->select('sertifikat_get_nomor.*')
      ->where('id', $id)
      ->firstOrFail();
  }
  public function update(Request $request, $id)
  {
    $name = $request->name;
    $kelas = Sertifikat::findOrFail($id);
    // processing single image upload
    if (!empty($request->gambar_depan)) {
      $imagepath = $this->imagepathSertifikat;
      $fileName1 = Helper::image_processing($imagepath, $this->width, $this->height, $request->gambar_depan, $kelas->gambar_depan, $name);
    } else {
      $fileName1 = '';
    }
    if (!empty($request->gambar_depan)) {
      $fileName2 = Helper::image_processing($imagepath, $this->width, $this->height, $request->gambar_belakang, $kelas->gambar_belakang, $name);
    } else {

      $fileName2 = '';
    }

    $kelas->update($request->except('gambar_depan', 'gambar_belakang') + [
      'gambar_depan' => $fileName1, 'gambar_belakang' => $fileName2
    ]);
    return response()
      ->json([
        'saved' => true,
        'message' => $this->message . ' ' . $name . ' berhasil diubah'
      ]);
  }

  public function destroy($id)
  {
    $kelas = Sertifikat::findOrFail($id);
    $name = $kelas->name;
    $kelas->delete();

    return response()
      ->json([
        'deleted' => true,
        'message' =>  $this->message . ' ' . $name . 'berhasil dihapus'
      ]);
  }

  public function updateNomorSertifikatKegiatan($id, Request $request)
{
    DB::beginTransaction();
    try {
        $getNomor = SertifikatGetNomor::findOrFail($id);

        // Ambil semua peserta lama dari database
        $pesertaLama = $getNomor->peserta;
        $pesertaBaru = collect($request->input('peserta', []));

        // Ambil ID peserta lama dari database
        $idPesertaLama = $pesertaLama->pluck('id');

        // Ambil ID peserta baru yang valid (yang memiliki id dan tidak kosong)
        $idPesertaBaru = $pesertaBaru
            ->filter(fn ($item) => !empty($item['id']))
            ->pluck('id');

        // Cari peserta lama yang tidak ada di input baru => harus dihapus (soft delete)
        $idPesertaTerhapus = $idPesertaLama->diff($idPesertaBaru);
        
        // Soft delete peserta yang dihapus
        foreach ($idPesertaTerhapus as $pesertaId) {
          
            $generates = SertifikatGenerate::where('sertifikat_get_nomor_peserta_id', $pesertaId)->get();
            
            foreach ($generates as $generate) {
              
                $generate->keterangan = 'Nomor Sertifikat Tidak Jadi Digunakan oleh Kegiatan ' . $request->nama_kegiatan;
                $generate->save();
                $generate->delete(); // soft delete
            }

            $pesertaTerhapus = SertifikatGetNomorPeserta::find($pesertaId);
            if ($pesertaTerhapus) {
                $pesertaTerhapus->delete(); // soft delete
            }
        }

        // Hitung jumlah peserta baru total
        $jumlahBaru = $pesertaBaru->count();
        $getNomor->jumlah_nomor_sertifikat = $jumlahBaru;
        $getNomor->save();
        
        // Update atau insert peserta
        foreach ($pesertaBaru as $pesertaInput) {
          $id = $pesertaInput['id'] ?? null;
      
          if (!empty($id)) {
              // Update peserta lama
              $peserta = SertifikatGetNomorPeserta::find($id);
              if ($peserta) {
                  $peserta->update([
                      'sertifikat_get_nomor_id' => $getNomor->id,
                      'nama' => $pesertaInput['nama'],
                      'keterangan' => $pesertaInput['keterangan'],
                  ]);
              }
          } else {
              // Tambah peserta baru
              $pesertaBaruObj = SertifikatGetNomorPeserta::create([
                  'sertifikat_get_nomor_id' => $getNomor->id,
                  'nama' => $pesertaInput['nama'],
                  'keterangan' => $pesertaInput['keterangan'],
              ]);

      
              SertifikatGenerate::create([
                  'sertifikat_get_nomor_id' => $getNomor->id,
                  'sertifikat_get_nomor_peserta_id' => $pesertaBaruObj->id,
                  'nomor' => $this->getAvailableNumbers(1, $request->periode),
                  'periode' => $request->periode
              ]);
          }
      }
      

        DB::commit();
        return response()->json([
            'saved' => true,
            'message' => $request->nama_kegiatan . ' Berhasil diupdate'
        ]);
    } catch (\Exception $e) {
        DB::rollBack();
        return response()->json([
            'saved' => false,
            'message' => $request->nama_kegiatan . ' Gagal diupdate',
            'error' => $e->getMessage(),
        ]);
    }
}


  public function destroyNomorSertifikatKegiatan($id)
  {
    
    $kelas = SertifikatGetNomor::findOrFail($id);
    $name = $kelas->name;
    $kelas->delete();
    SertifikatGenerate::where('sertifikat_get_nomor_id', $id)
    ->update([
        'keterangan' => 'Nomor Sertifikat Tidak Jadi Digunakan oleh Kegiatan ' . $name
    ]);
    SertifikatGenerate::where('sertifikat_get_nomor_id', $id)->delete();
    SertifikatGetNomorPeserta::where('sertifikat_get_nomor_id', $id)->delete();
    
    return response()
      ->json([
        'deleted' => true,
        'message' =>  $this->message . ' ' . $name . 'berhasil dihapus'
      ]);
  }

  public function generateSertifikat(Request $formData)
  {
    $formData->validate([
      'kegiatan_id' => 'required|integer|exists:kegiatan,id',
      'id' => 'required|integer',
      'peran' => 'required|string|in:peserta,panitia,fasilitator,narasumber,pimpinan,sekretaris,moderator'
  ]);
    
    $kegiatanData = Kegiatan::with('tempat')->where('id', $formData['kegiatan_id'])->first();

    if($formData->peran === 'peserta'){ 
          $nomorData = SertifikatGenerate::where('kegiatan_peserta_id',  $formData['id'])->first();
          $sertifikat = Sertifikat::where('id', $kegiatanData->id_sertifikat)->select('gambar_depan', 'gambar_belakang', 'kode_sertifikat','tipe')->first();
          $cekNilai = KegiatanMateriNilai::where('kegiatan_id', $formData->kegiatan_id)->first();

        if ($cekNilai) {
          $listMateri = KegiatanListMateri::select("kegiatan_list_materi.waktu", "kegiatan_list_materi.nama","kegiatan_list_materi.narasumber","kegiatan_materi_nilai.nilai")
            ->join("kegiatan_materi_nilai", "kegiatan_materi_nilai.materi_id", "=", "kegiatan_list_materi.id")
            ->where('kegiatan_materi_nilai.kegiatan_id', $formData->kegiatan_id)
            ->where('kegiatan_materi_nilai.kegiatan_peserta_id', $formData->id)
            ->get();
        } else {
          $listMateri = KegiatanListMateri::select("kegiatan_list_materi.waktu", "kegiatan_list_materi.nama","kegiatan_list_materi.narasumber")->where('kegiatan_id', $formData->kegiatan_id)
            ->get();
        }
          $sumWaktu = KegiatanListMateri::where('kegiatan_id', $formData->kegiatan_id)->sum('waktu');
          $sumNilai = KegiatanListMateri::join("kegiatan_materi_nilai", "kegiatan_materi_nilai.materi_id", "=", "kegiatan_list_materi.id")
            ->where('kegiatan_materi_nilai.kegiatan_id', $formData->kegiatan_id)
            ->where('kegiatan_materi_nilai.kegiatan_peserta_id', $formData->id)
            ->sum("kegiatan_materi_nilai.nilai");
        if($formData->peran !== 'fasilitator' && $formData->peran !== 'panitia'){
          $averageNilai = 0;
        if ($sumNilai != 0) {
          $averageNilai = $sumNilai / $listMateri->count();
            }
        }
        $nama = $formData->name_sertifikat;
        $jabatan = $formData->pekerjaan_name;
        
        $checkLembaga = cu::findOrFail($formData->lembaga_id);
        if($checkLembaga){
          $lembaga = 'CU '. $formData->lembaga_name;
        }else{
          $lembaga = $formData->lembaga_name;
        }
    }else{
      $nomorData = SertifikatGenerate::where('id_kegiatan',  $formData['kegiatan_id'])->where('kegiatan_panitia_id', $formData['panitia_id'])->first();
      $sertifikat = Sertifikat::where('id', $kegiatanData->id_sertifikatPanitia)->select('gambar_depan','kode_sertifikat','tipe')->first();
      $nama = $formData->name;
      $peran = $formData->peran;
    }
    $tempat = '';
        if ($kegiatanData->tipe_tempat == 'OFFLINE') {
          if($kegiatanData->tempat->name){
            $tempat = 'di ' . $kegiatanData->tempat->name;
          }else{
            $tempat = '';
          }
        } else if($kegiatanData->tipe_tempat == 'ONLINE') {
          $tempat = 'secara ' . strtolower($kegiatanData->tipe_tempat);
        }
        else if($kegiatanData->tipe_tempat == 'HYBRID') {
          $tempat = 'secara Online dan Offline';
        }

    $imageDepan = 'images/sertifikatKegiatan/' . $sertifikat->gambar_depan . '.jpg';
    if ($sertifikat->gambar_belakang) {
        $imageBelakang = 'images/sertifikatKegiatan/' . $sertifikat->gambar_belakang . '.jpg';
    } else {
        $imageBelakang = '';
    }
  
    $kegiatan = $kegiatanData->name;
    $date_mulai = $kegiatanData->mulai;
    $date_selesai = $kegiatanData->selesai;
    $mulai = new DateTime($date_mulai);
    $selesai = new DateTime($date_selesai);
    $selesai2 = '';
    $selesai3 = '';
    $mulai2 = '';
    $selesai2 = $this->getBulanRomawi($selesai->format('m'));
    $mulai2 = $this->getNamaBulan($mulai->format('F'));
    $selesai3 = $this->getNamaBulan($selesai->format('F'));
    $nomor = ($nomorData !== null) ? $nomorData['nomor'] . '/' . $sertifikat->kode_sertifikat . '/' . $selesai2 . '/' . $selesai->format('Y') : '';
   
    $hari = \Carbon\Carbon::parse($date_mulai)->diffInDays(\Carbon\Carbon::parse($date_selesai), false);

    $hari = ($hari == 0 ? 1 : $hari);

    $tahun = $kegiatanData->periode;

    if ($hari > 1) {
      $tgl = $mulai->format('d') . ' ' . $mulai2 . ' ' . $mulai->format('Y') . " s.d " . $selesai->format('d') . ' ' . $selesai3 . ' ' . $selesai->format('Y');
    } else {
      $tgl = $mulai->format('d') . ' ' . $mulai2 . ' ' . $mulai->format('Y');
    }
    $tglGenerate = $selesai->format('d') . ' ' . $selesai3 . ' ' . $selesai->format('Y');
    
    if($formData->peran === 'peserta'){ 
      
      $paperOrientation = '';
      if($sertifikat->tipe == 'diklat'){
          try {
            $customPaper = array(0, 0, 1502.25, 1956);
            $paperOrientation = 'landscape';
            $pdf_doc = PDF::loadView('sertifikatDiklat', compact('averageNilai','nama', 'jabatan', 'lembaga', 'kegiatan', 'hari', 'tahun', 'tgl', 'nomor', 'imageDepan', 'listMateri', 'sumWaktu', 'tempat', 'tglGenerate', 'imageBelakang')); // <--- load your view into theDOM wrapper;
            $pdf_doc->setPaper($customPaper, $paperOrientation);
            return $pdf_doc->download('sertifikat_' . $kegiatan . '_' . $nama . '.pdf');
          } catch (\Exception $e) {
              return response()->json(['error' => 'Gagal membuat PDF: ' . $e->getMessage()], 500);
          }
      }else if($sertifikat->tipe == 'rat'){
       try {
            $backgroundMateriPath = public_path($imageBelakang);
            $customPaper = [0, 0, 1359, 1920]; // tinggi, lebar karena landscape
            $paperOrientation = 'landscape';
            $imagePath = str_replace('\\', '/', public_path($imageDepan));
            $tema = $kegiatanData->tema;
            $pdf_doc = PDF::loadView('sertifikatRat', compact('backgroundMateriPath','tema','imagePath','nama', 'jabatan', 'lembaga', 'kegiatan', 'hari', 'tahun', 'tgl', 'nomor', 'imageDepan', 'listMateri', 'sumWaktu', 'tempat', 'tglGenerate', 'imageBelakang'));
            $pdf_doc->setPaper($customPaper, $paperOrientation);
            return $pdf_doc->download('sertifikat_' . $kegiatan . '_' . $nama . '.pdf');
          } catch (\Exception $e) {
              return response()->json(['error' => 'Gagal membuat PDF: ' . $e->getMessage()], 500);
          }
      }
    }else{
      if($sertifikat->tipe == 'piagam'){
        try {
            $imagePath = str_replace('\\', '/', public_path($imageDepan));
            $peranFix = $this->adjustPeran($peran);
            if (!file_exists($imagePath)) {
                return response()->json(['error' => 'Gambar tidak ditemukan di path: ' . $imagePath], 404);
            }
             $customPaper = [0, 0, 1860, 2631];
            $paperOrientation = 'portrait';
           
            $pdf_doc = PDF::loadView('piagam', compact(
                'tempat','imagePath','nama','kegiatan', 'tgl', 'nomor', 'tglGenerate', 'peranFix'
            ));
            $pdf_doc->setPaper($customPaper, $paperOrientation);
            return $pdf_doc->download('piagam_' . $kegiatan . '_' . $nama . '.pdf');
    
          } catch (\Exception $e) {
              return response()->json(['error' => 'Gagal membuat PDF: ' . $e->getMessage()], 500);
          }
      }
    }
  }

  function adjustPeran($peran){
    if($peran == 'fasilitator') return 'Fasilitator';
    if($peran == 'panitia') return 'Panitia';
    if($peran == 'narasumber') return 'Narasumber';
    if($peran == 'moderator') return 'Moderator';
    if($peran == 'pimpinan') return 'Pimpinan Rapat';
    if($peran == 'sekretaris') return 'Sekretaris Rapat';
  }

  function getBulanRomawi($month) {
    return [
        '01' => 'I', '02' => 'II', '03' => 'III', '04' => 'IV',
        '05' => 'V', '06' => 'VI', '07' => 'VII', '08' => 'VIII',
        '09' => 'IX', '10' => 'X', '11' => 'XI', '12' => 'XII',
    ][$month] ?? '';
}

function getNamaBulan($monthName) {
    return [
        'January' => 'Januari', 'February' => 'Februari', 'March' => 'Maret',
        'April' => 'April', 'May' => 'Mei', 'June' => 'Juni',
        'July' => 'Juli', 'August' => 'Agustus', 'September' => 'September',
        'October' => 'Oktober', 'November' => 'November', 'December' => 'Desember',
    ][$monthName] ?? '';
}
}
