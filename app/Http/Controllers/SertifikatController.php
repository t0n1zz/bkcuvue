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


class SertifikatController extends Controller
{

  protected $imagepathSertifikat = 'images/sertifikatKegiatan/';
  protected $width = 300;
  protected $height = 200;
  protected $message = "Sertifikat";

  public function index()
  {
    $table_data = Sertifikat::select('id', 'kode_sertifikat', 'name', 'gambar_depan', 'gambar_belakang')->advancedFilter();

    return response()
      ->json([
        'model' => $table_data
      ]);
  }

  public function indexKode()
  {
    $table_data = SertifikatGenerate::with('peserta', 'kegiatan')->advancedFilter();

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

  public function edit($id)
  {
    $kelas = Sertifikat::findOrFail($id);

    return response()
      ->json([
        'form' => $kelas,
        'option' => []
      ]);
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

  public function generateSertifikat(Request $formData)
  {
    $kegiatanData = Kegiatan::with('tempat')->where('id', $formData->kegiatan_id)->first();
    $nomorData = SertifikatGenerate::where('kegiatan_peserta_id', $formData->id)->where('id_kegiatan', $formData->kegiatan_id)->first();
    $sertifikat = Sertifikat::where('id', $kegiatanData->id_sertifikat)->select('gambar_depan', 'gambar_belakang', 'kode_sertifikat')->first();

    $cekNilai = KegiatanMateriNilai::where('kegiatan_id', $formData->kegiatan_id)->first();

    if ($cekNilai) {
      $listMateri = KegiatanListMateri::select("kegiatan_list_materi.waktu", "kegiatan_list_materi.nama", "kegiatan_materi_nilai.nilai")
        ->join("kegiatan_materi_nilai", "kegiatan_materi_nilai.materi_id", "=", "kegiatan_list_materi.id")
        ->where('kegiatan_materi_nilai.kegiatan_id', $formData->kegiatan_id)
        ->where('kegiatan_materi_nilai.kegiatan_peserta_id', $formData->id)
        ->get();
    } else {
      $listMateri = KegiatanListMateri::select("kegiatan_list_materi.waktu", "kegiatan_list_materi.nama")->where('kegiatan_id', $formData->kegiatan_id)
        ->get();
    }

    $sumWaktu = KegiatanListMateri::where('kegiatan_id', $formData->kegiatan_id)->sum('waktu');
    $sumNilai = KegiatanListMateri::join("kegiatan_materi_nilai", "kegiatan_materi_nilai.materi_id", "=", "kegiatan_list_materi.id")
      ->where('kegiatan_materi_nilai.kegiatan_id', $formData->kegiatan_id)
      ->where('kegiatan_materi_nilai.kegiatan_peserta_id', $formData->id)
      ->sum("kegiatan_materi_nilai.nilai");

    $averageNilai = 0;
    if ($sumNilai != 0) {
      $averageNilai = $sumNilai / $listMateri->count();
    }
    $tempat = '';
    if ($kegiatanData->tipe_tempat == 'OFFLINE') {
      $tempat = 'di ' . $kegiatanData->tempat->name;
    } else {
      $tempat = 'secara ' . strtolower($kegiatanData->tipe_tempat);
    }
    $imageDepan = 'images/sertifikatKegiatan/' . $sertifikat->gambar_depan . '.jpg';
    $imageBelakang = 'images/sertifikatKegiatan/' . $sertifikat->gambar_belakang . '.jpg';
    $nama = $formData->name_sertifikat;
    $jabatan = $formData->pekerjaan_name;
    $lembaga = $formData->lembaga_name;
    $kegiatan = $kegiatanData->name;
    $date_mulai = $kegiatanData->mulai;
    $date_selesai = $kegiatanData->selesai;
    $mulai = new DateTime($date_mulai);
    $selesai = new DateTime($date_selesai);
    $selesai2 = '';
    switch ($selesai->format('m')) {
      case '01':
        $selesai2 = 'I';
        break;
      case '02':
        $selesai2 = 'II';
        break;
      case '03':
        $selesai2 = 'III';
        break;
      case '04':
        $selesai2 = 'IV';
        break;
      case '05':
        $selesai2 = 'V';
        break;
      case '06':
        $selesai2 = 'VI';
        break;
      case '07':
        $selesai2 = 'VII';
        break;
      case '08':
        $selesai2 = 'VIII';
        break;
      case '09':
        $selesai2 = 'IX';
        break;
      case '10':
        $selesai2 = 'X';
        break;
      case '11':
        $selesai2 = 'XI';
        break;
      case '12':
        $selesai2 = 'XII';
        break;
    }

    $nomor = $nomorData->nomor . '/' . $sertifikat->kode_sertifikat . '/' . $selesai2 . '/' . $selesai->format('Y');

    $hari = \Carbon\Carbon::parse($date_mulai)->diffInDays(\Carbon\Carbon::parse($date_selesai), false);

    $hari = ($hari == 0 ? 1 : $hari);

    $tahun = $kegiatanData->periode;

    if ($hari > 1) {
      $tgl = $mulai->format('d') . ' ' . $mulai->format('F') . ' ' . $mulai->format('Y') . " s.d " . $selesai->format('d') . ' ' . $selesai->format('F') . ' ' . $selesai->format('Y');
    } else {
      $tgl = $mulai->format('d') . ' ' . $mulai->format('F') . ' ' . $mulai->format('Y');
    }

    $tglGenerate = $selesai->format('d') . ' ' . $selesai->format('F') . ' ' . $selesai->format('Y');

    $customPaper = array(0, 0, 1502.25, 1956);

    $pdf_doc = PDF::loadView('sertifikat', compact('nama', 'jabatan', 'lembaga', 'kegiatan', 'hari', 'tahun', 'tgl', 'nomor', 'imageDepan', 'imageBelakang', 'listMateri', 'sumWaktu', 'tempat', 'tglGenerate', 'averageNilai')); // <--- load your view into theDOM wrapper;

    $pdf_doc->setPaper($customPaper, 'landscape');

    return $pdf_doc->download('sertifikat_' . $kegiatan . '_' . $nama . '.pdf');
  }
}