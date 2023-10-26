<?php

namespace App\Http\Controllers;

use App\Aktivis;
use App\Bidang;
use App\Dokumen;
use App\Events\PresensiEvent;
use App\Exports\Export;
use App\Exports\TemplateOff;
use App\HariLibur;
use App\Imports\OffBergilirImport;
use App\Jobs\SendNotification;
use App\Kegiatan;
use App\Presensi;
use App\PresensiAlpa;
use App\PresensiCuti;
use App\PresensiIzin;
use App\PresensiKeluarKantor;
use App\PresensiKeterlambatan;
use App\PresensiKuliah;
use App\PresensiOffBergilir;
use App\PresensiPelanggaranSeragam;
use App\PresensiPulangAwal;
use App\QrPresensi;
use App\StrukturOrganisasi;
use App\Surat;
use App\SuratKode;
use App\SuratKodeTemp;
use App\Tunjangan;
use App\User;
use Illuminate\Http\Request;
use Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;
use Barryvdh\DomPDF\Facade as PDF;

class PresensiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function indexUser($id_cu)
    {
        $model = DB::select('select users.id,users.id_cu,users.id_aktivis,aktivis.name,aktivis.gambar,aktivis_pekerjaan.id_aktivis,aktivis_pekerjaan.tingkat,aktivis_pekerjaan.selesai, aktivis_pekerjaan.id_tempat  from users
        inner join aktivis on aktivis.id = users.id_aktivis inner join aktivis_pekerjaan on aktivis_pekerjaan.id_aktivis = aktivis.id
        where users.id_cu = 0 and users.id_aktivis !=0 and users.status = 1 and aktivis_pekerjaan.selesai is null and aktivis_pekerjaan.id_tempat =1 and (aktivis_pekerjaan.tingkat = 5 or aktivis_pekerjaan.tingkat =6 or aktivis_pekerjaan.tingkat =7 or aktivis_pekerjaan.tingkat =8)  order by aktivis.name asc');
        return response()->json([
            'model' => $model,
        ]);
    }

    public function indexVerifikasi($id_cu, $tahun, $tanggal)
    {
        if (Auth::user()->hasPermissionTo('is_personalia')) {
            $model = PresensiCuti::with('aktivis')->where('id_cu', $id_cu)->where('id_acc2', Auth::user()->id)->where('tanggal_acc1', '!=', null)->whereNull('tanggal_acc2')->advancedFilter();
        } else {
            $model = PresensiCuti::with('aktivis')->where('id_cu', $id_cu)->whereNull('tanggal_acc1')->advancedFilter();
        }

        return response()->json([
            'model' => $model,
        ]);
    }

    public function indexKegiatan($tipe, $id_cu)
    {
        $cek = '';
        if ($tipe == 'DIKLAT') {
            $cek = 'diklat_bkcu';
        } else if ($tipe == 'PERTEMUAN') {
            $cek = 'pertemuan_bkcu';
        }
        $kegiatan =  Kegiatan::where('tipe', $cek)->where('status', 1)->orWhere('status', 2)->orWhere('status', 3)->select('id', 'name', 'mulai')->get();

        return response()->json([
            'model' => $kegiatan,
        ]);
    }

    public function indexQR($id_qr)
    {
        $qr = QrPresensi::where('id', $id_qr)->first();

        return response()->json([
            'qr' => $qr,
        ]);
    }

    public function indexQrAll($id_cu, $id_user, $status)
    {
        $model = [];
        if ($status == 'aktif') {
            $model = QrPresensi::where('id_cu', $id_cu)->where('id_user', $id_user)->where('status', $status)->advancedFilter();
        } else {
            $model = QrPresensi::where('id_cu', $id_cu)->where('status', $status)->advancedFilter();
        }


        return response()->json([
            'model' => $model,
        ]);
    }

    public function indexPresensiManajemen($tahun, $bulan, $tipe, $lingkup)
    {

        $year = $tahun;
        $month = $bulan;
        $model = '';
        if ($lingkup == 'pribadi') {

            if ($bulan != 'semua') {
                $date = \Carbon\Carbon::parse($year . "-" . $month . "-01"); // universal truth month's first day is 1
                $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
                $end = $date->endOfMonth()->format('Y-m-d H:i:s'); // 2000-02-29 23:59:59

                if ($tipe == 'keterlambatan') {
                    $model = PresensiKeterlambatan::with('aktivis')->where('id_user', Auth::user()->id)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'pulangawal') {
                    $model = PresensiPulangAwal::with('aktivis')->where('id_user', Auth::user()->id)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'masukkantor') {
                    $model = Presensi::with('aktivis')->where('id_user', Auth::user()->id)->where('id_kegiatan', 0)->where("kegiatan_name", "=", null)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'kegiatan') {
                    $model = Presensi::with('kegiatan', 'aktivis')->where('id_user', Auth::user()->id)->where("id_kegiatan", "!=", 0)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->orWhere("kegiatan_name", "!=", null)->where('id_user', Auth::user()->id)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'alpha') {
                    $model = PresensiAlpa::with('aktivis')->where('id_user', Auth::user()->id)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'kuliah') {
                    $model = PresensiKuliah::with('aktivis')->where('id_user', Auth::user()->id)->where('tanggal', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'off') {
                    $model = PresensiOffBergilir::with('aktivis')->where('id_user', Auth::user()->id)->where('tanggal', '>=', $start)
                        ->where('tanggal', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'keluarjamkantor') {
                    $model = PresensiKeluarKantor::with('aktivis')->where('id_user', Auth::user()->id)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'seragam') {
                    $model = Presensi::with('seragam', 'aktivis', 'seragamKerja')->has('seragamKerja')->where('id_user', Auth::user()->id)->has('seragam')->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'izin') {
                    $model = PresensiIzin::with('aktivis')->where('jenis', 'izin')->where('id_user', Auth::user()->id)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'sakit') {
                    $model = PresensiIzin::with('aktivis')->where('jenis', 'sakit')->where('id_user', Auth::user()->id)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'cuti') {
                    $model = PresensiCuti::with('aktivis')->where('id_user', Auth::user()->id)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                }
            } else {
                $date = \Carbon\Carbon::parse($year . "-" . "01" . "-01"); // universal truth month's first day is 1
                $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
                $end = $date->endOfMonth()->format('Y-m-d H:i:s'); // 2000-02-29 23:59:59

                if ($tipe == 'keterlambatan') {
                    $model =  PresensiKeterlambatan::with('aktivis')->where('id_user', Auth::user()->id)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'pulangawal') {
                    $model =  PresensiPulangAwal::with('aktivis')->where('id_user', Auth::user()->id)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'masukkantor') {
                    $model =  Presensi::with('aktivis')->where('id_user', Auth::user()->id)->where('id_kegiatan', 0)->where("kegiatan_name", "=", null)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'kegiatan') {
                    $model =  Presensi::with('kegiatan', 'aktivis')->where('id_user', Auth::user()->id)->where("id_kegiatan", "!=", 0)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->orWhere("kegiatan_name", "!=", null)->where('id_user', Auth::user()->id)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'alpha') {
                    $model = PresensiAlpa::with('aktivis')->where('id_user', Auth::user()->id)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'kuliah') {
                    $model = PresensiKuliah::with('aktivis')->where('id_user', Auth::user()->id)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'off') {
                    $model = PresensiOffBergilir::with('aktivis')->where('id_user', Auth::user()->id)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'keluarjamkantor') {
                    $model = PresensiKeluarKantor::with('aktivis')->where('id_user', Auth::user()->id)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'seragam') {
                    $model = Presensi::with('seragam', 'aktivis', 'seragamKerja')->has('seragamKerja')->where('id_user', Auth::user()->id)->has('seragam')->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'izin') {
                    $model = PresensiIzin::with('aktivis')->where('jenis', 'izin')->where('id_user', Auth::user()->id)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'sakit') {
                    $model = PresensiIzin::with('aktivis')->where('jenis', 'sakit')->where('id_user', Auth::user()->id)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'cuti') {
                    $model = PresensiCuti::with('aktivis')->where('id_user', Auth::user()->id)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                }
            }
        } else {
            if ($bulan != 'semua') {
                $date = \Carbon\Carbon::parse($year . "-" . $month . "-01"); // universal truth month's first day is 1
                $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
                $end = $date->endOfMonth()->format('Y-m-d H:i:s'); // 2000-02-29 23:59:59

                if ($tipe == 'keterlambatan') {
                    $model = PresensiKeterlambatan::with('aktivis')->where('id_cu', Auth::user()->id_cu)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'pulangawal') {
                    $model = PresensiPulangAwal::with('aktivis')->where('id_cu', Auth::user()->id_cu)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'masukkantor') {
                    $model = Presensi::with('aktivis')->where('id_cu', Auth::user()->id_cu)->where('id_kegiatan', 0)->where("kegiatan_name", "=", null)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'kegiatan') {
                    $model = Presensi::with('kegiatan', 'aktivis')->where('id_cu', Auth::user()->id_cu)->where("id_kegiatan", "!=", 0)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->orWhere("kegiatan_name", "!=", null)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'alpha') {
                    $model = PresensiAlpa::with('aktivis')->where('id_cu', Auth::user()->id_cu)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'kuliah') {
                    $model = PresensiKuliah::with('aktivis')->where('id_cu', Auth::user()->id_cu)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'off') {
                    $model = PresensiOffBergilir::with('aktivis')->where('id_cu', Auth::user()->id_cu)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'keluarjamkantor') {
                    $model = PresensiKeluarKantor::with('aktivis')->where('id_cu', Auth::user()->id_cu)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'seragam') {
                    $model = Presensi::with('seragam', 'aktivis', 'seragamKerja')->has('seragamKerja')->where('id_cu', Auth::user()->id_cu)->has('seragam')->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'izin') {
                    $model = PresensiIzin::with('aktivis')->has('aktivis')->where('jenis', 'izin')->where('id_cu', Auth::user()->id_cu)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'sakit') {
                    $model = PresensiIzin::with('aktivis')->has('aktivis')->where('jenis', 'sakit')->where('id_cu', Auth::user()->id_cu)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                } elseif ($tipe == 'cuti') {
                    $model = PresensiCuti::with('aktivis')->has('aktivis')->where('id_cu', Auth::user()->id_cu)->where('created_at', '>=', $start)
                        ->where('created_at', '<=', $end)->advancedFilter();
                }
            } else {
                $date = \Carbon\Carbon::parse($year . "-" . "01" . "-01"); // universal truth month's first day is 1
                // $model =  Keterlambatan::whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();

                if ($tipe == 'keterlambatan') {
                    $model =  PresensiKeterlambatan::with('aktivis')->where('id_cu', Auth::user()->id_cu)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'pulangawal') {
                    $model =  PresensiPulangAwal::with('aktivis')->where('id_cu', Auth::user()->id_cu)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'masukkantor') {
                    $model =  Presensi::with('aktivis')->where('id_cu', Auth::user()->id_cu)->where('id_kegiatan', 0)->where("kegiatan_name", "=", null)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'kegiatan') {
                    $model =  Presensi::with('kegiatan', 'aktivis')->where('id_cu', Auth::user()->id_cu)->where("id_kegiatan", "!=", 0)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->orWhere("kegiatan_name", "!=", null)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'alpha') {
                    $model = PresensiAlpa::with('aktivis')->where('id_cu', Auth::user()->id_cu)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'kuliah') {
                    $model = PresensiKuliah::with('aktivis')->where('id_cu', Auth::user()->id_cu)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'off') {
                    $model = PresensiOffBergilir::with('aktivis')->where('id_cu', Auth::user()->id_cu)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'keluarjamkantor') {
                    $model = PresensiKeluarKantor::with('aktivis')->has('aktivis')->where('id_cu', Auth::user()->id_cu)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'seragam') {
                    $model = Presensi::with('seragam', 'aktivis', 'seragamKerja')->has('seragamKerja')->where('id_cu', Auth::user()->id_cu)->has('seragam')->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'izin') {
                    $model = PresensiIzin::with('aktivis')->where('jenis', 'izin')->where('id_cu', Auth::user()->id_cu)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'sakit') {
                    $model = PresensiIzin::with('aktivis')->where('jenis', 'sakit')->where('id_cu', Auth::user()->id_cu)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'cuti') {
                    $model = PresensiCuti::with('aktivis')->where('id_cu', Auth::user()->id_cu)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                }
            }
        }
        return response()->json([
            'model' => $model
        ]);
    }

    public function aktifQR($id, $id_user, $status)
    {

        if ($status == 'tidak aktif') {
            $id_user = null;
        }
        QrPresensi::where('id', $id)->update([
            'status' => $status,
            'id_user' => $id_user
        ]);

        return response()
            ->json([
                'pesan' => 'ok',
            ]);
    }

    public function verifikasiCuti(Request $request, $id)
    {
        $cuti = PresensiCuti::with('aktivis')->findOrFail($id);
        $message = '';
        if (Auth::user()->hasPermissionTo('is_personalia') && $cuti->tgl_acc2 == null) {
            if ($request->status_verif == 'tolak') {
                $cuti->update([
                    'tanggal_acc2' => Carbon::now()->toDateString(),
                    'status_acc2' => 'ditolak',
                    'alasan_penolakan' => $request->alasan
                ]);
                $message = 'Pengajuan Cuti Atas Nama ' . $cuti->aktivis->name . 'ditolak';
            } else {
                $cuti->update([
                    'tanggal_acc2' => Carbon::now()->toDateString(),
                    'status_acc2' => 'disetujui'
                ]);
                $message = 'Pengajuan Cuti Atas Nama ' . $cuti->aktivis->name . 'disetujui';


                //generate sk
                $bulan = '';
                $id_kode_temp = '';
                $dateMonth = Carbon::now();
                $month = $dateMonth->month;
                $tahun = $dateMonth->year;
                switch ($month) {
                    case 1:
                        $bulan = 'I';
                        break;
                    case 2:
                        $bulan = 'II';
                        break;
                    case 3:
                        $bulan = 'III';
                        break;
                    case 4:
                        $bulan = 'IV';
                        break;
                    case 5:
                        $bulan = 'V';
                        break;
                    case 6:
                        $bulan = 'VI';
                        break;
                    case 7:
                        $bulan = 'VII';
                        break;
                    case 8:
                        $bulan = 'VIII';
                        break;
                    case 9:
                        $bulan = 'IX';
                        break;
                    case 10:
                        $bulan = 'X';
                        break;
                    case 11:
                        $bulan = 'XI';
                        break;
                    case 12:
                        $bulan = 'XII';
                        break;
                }

                $nomor = 0;
                $no_user_aktif = SuratKodeTemp::where('id_surat_kode', 15)->where('id_user', $cuti->id_acc2)->where('id_surat', null)->first();
                $no_user_nonaktif = SuratKodeTemp::onlyTrashed()->where('id_surat_kode', 15)->where('id', $cuti->id_acc2)->first();
                $no_user_lain_nonaktif = SuratKodeTemp::onlyTrashed()->where('id_surat_kode', 15)->where('id_surat', null)->orderBy('kode', 'asc')->first();

                if ($no_user_aktif) {
                    $nomor = $no_user_aktif->kode;
                    $id_kode_temp = $no_user_aktif->id;
                } elseif ($no_user_nonaktif) {
                    $no_surat = SuratKodeTemp::onlyTrashed()->where('id', $no_user_nonaktif->id);
                    $no_surat->restore();
                    $nomor = $no_surat->kode;
                    $id_kode_temp = $no_surat->id;
                } elseif ($no_user_lain_nonaktif) {
                    $no_surat = SuratKodeTemp::onlyTrashed()->where('id', $no_user_lain_nonaktif->id);
                    $no_surat->restore();
                    SuratKodeTemp::where('id', $no_user_lain_nonaktif->id)->update([
                        'id_user' => $cuti->id_user,
                    ]);
                    $nomor = $no_surat->kode;
                    $id_kode_temp = $no_surat->id;
                } else {
                    $item = SuratKodeTemp::select(DB::raw('MAX(CAST(kode AS UNSIGNED)) as max_value'))->first();
                    $nomor = $item->max_value + 1;
                    $kode_temp = SuratKodeTemp::create([
                        'id_user' => $cuti->id_acc2,
                        'id_surat_kode' => 15,
                        'kode' => $nomor,
                        'periode' => $tahun
                    ]);
                    $id_kode_temp = $kode_temp->id;
                    SuratKode::where('id', 15)->update([
                        'kode' => $nomor
                    ]);
                }

                $no_lengkap = $nomor . '/PKCU/GM/' . $bulan . '/' . $tahun;

                $dokumen = Dokumen::create([
                    'id_cu' => $cuti->id_cu,
                    'id_dokumen_kategori' => 7,
                    'name' => 'SKCUTI_' . $cuti->aktivis->name,
                    'status' => 'INTERNAL',
                    'format' => 'upload',
                    'tipe' => 'pdf',
                    'keterangan' => 'Cuti ' . $cuti->aktivis->name
                ]);

                $surat = Surat::create([
                    'id_surat_kode' => 15,
                    'id_surat_kategori' => 22,
                    'id_dokumen' => $dokumen->id,
                    'id_cu' => 0,
                    'name' => $no_lengkap,
                    'format' => 'upload',
                    'perihal' => 'Cuti ' . $cuti->aktivis->name,
                    'hal' => 'Cuti ' . $cuti->aktivis->name,
                    'tujuan' => $cuti->aktivis->pekerjaan_aktif->name,
                    'tipe' => 'SURAT KELUAR',
                    'periode' => $tahun
                ]);

                SuratKodeTemp::where('id', $id_kode_temp)->update([
                    'id_surat' => $surat->id
                ]);

                PresensiCuti::where('id', $cuti->id)->update([
                    'id_skcuti' => $surat->id
                ]);
            }
        } else {
            if ($request->status_verif == 'tolak') {
                $cuti->update([
                    'tanggal_acc1' => Carbon::now()->toDateString(),
                    'status_acc1' => 'ditolak',
                    'alasan_penolakan' => $request->alasan
                ]);
                $message = 'Pengajuan Cuti Atas Nama ' . $cuti->aktivis->name . 'ditolak';
            } else {
                $cuti->update([
                    'tanggal_acc1' => Carbon::now()->toDateString(),
                    'status_acc1' => 'disetujui'
                ]);
                $message = 'Pengajuan Cuti Atas Nama ' . $cuti->aktivis->name . 'disetujui';
            }
        }

        return response()
            ->json([
                'message' => $message,
            ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function create($tipe)
    {
        $form = '';
        if ($tipe == 'qr') {
            $form = QrPresensi::initialize();
        } elseif ($tipe == 'cuti') {
            $form = PresensiCuti::initialize();
        } elseif ($tipe == 'terlambat') {
            $form = PresensiKeterlambatan::initialize();
        } elseif ($tipe == 'seragam') {
            $form = PresensiPelanggaranSeragam::initialize();
        } elseif ($tipe == 'izin' || $tipe == 'sakit' || $tipe == 'kegiatan') {
            $form = PresensiIzin::initialize();
        } elseif ('kantor') {
            $form = Presensi::initialize();
        }
        return response()
            ->json([
                'form' => $form,
            ]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    public function storeQR(Request $request)
    {

        $check = QrPresensi::where('id_cu', $request->id_cu)->where('id_kegiatan', $request->id_kegiatan)->first();
        $pesan = '';
        $length = 4; // Specify the desired length of the random string
        $randomString = rand(1000, 9999);
        if (!$check) {
            if ($request->isPulang) {
                QrPresensi::create($request->except('kode_qr') + [
                    'kode_qr' => $request->id_kegiatan . '-' . $request->id_cu . '-' . $randomString
                ]);
            } else {
                QrPresensi::create($request->except('kode_qr', 'jam_pulang') + [
                    'kode_qr' => $request->id_kegiatan . '-' . $request->id_cu . '-' . $randomString
                ]);
            }
            $pesan = 'QR untuk Kegiatan Ini Berhasil Dibuat';
        } else {
            $pesan = 'Kegiatan Ini Sudah Memiliki QR';
        }

        return response()->json([
            'message' => $pesan,
        ]);
    }

    public function storePelanggaranSeragam(Request $request)
    {

        $kelas = null;
        $message = '';
        if ($request->id_absen == 0) {
            $kelas = Presensi::where('id_user', $request->id_user)->whereDate('created_at', Carbon::today())->first();
        } else {
            $kelas = Presensi::where('id', $request->id_absen)->first();
        }
        if (!$kelas) {
            $message = 'Aktivis ini belum mengisi presensi masuk kantor';
        } else {
            $seragam = null;
            if ($request->id_seragam_kerja) {
                $seragam =  PresensiPelanggaranSeragam::where('id', $request->id_seragam_kerja);
            }

            if ($seragam) {
                $seragam->update([
                    'seragam_name' => $request->seragamName,
                ]);
            } else {
                PresensiPelanggaranSeragam::create([
                    'id_absen' => $kelas->id,
                    'seragam_name' => $request->seragamName
                ]);
            }

            $kelas->seragam()->sync(array_flatten($request->seragam));
            $message = 'pelanggaran berhasil ditambahkan';
        }

        return response()->json([
            'message' => $message,
        ]);
    }

    public function storePresensi(Request $request, $lat2, $lon2)
    {
        $qr = "";
        if ($request->id_qr == null) {
            $qr = QrPresensi::where('id_cu', $request->id_cu)->where('kode_qr', $request->kode)->where('status', 'aktif')->first();
        } else {
            $qr = QrPresensi::where('id', $request->id_qr)->where('status', 'aktif')->first();
        }

        if ($qr) {
            if ($qr->jenis == 'BERUBAH SETELAH SCAN') {
                $randomString = rand(1000, 9999);
                $time = \Carbon\Carbon::now()->toArray();
                QrPresensi::where('id', $qr->id)->update([
                    'kode_qr' => $qr->id_kegiatan . '-' . $qr->id_cu . '-' . $randomString
                ]);
                event(new PresensiEvent($qr->id_kegiatan . '-' . $qr->id_cu . '-' . $randomString, $qr->id_user, $request->id_cu));
            }
        }



        $confirm = '';
        $message = '';
        $status = 'ok';

        $dateNow = Carbon::now()->format('Y-m-d');
        $keluar_kantor = PresensiKeluarKantor::where('id_user', $request->id_user)->whereDate('created_at', Carbon::today())->whereNull('lama');
        $sakit = PresensiIzin::where('id_user', $request->id_user)->whereNull('status');
        $cuti = PresensiCuti::where('id_user', $request->id_user)->where('tanggal_selesai', $dateNow)->first();


        if ($qr) {
            $R = 6371; // km
            $lat1 = -0.0391619;
            $lon1 = 109.3489672;
            $dLat = $this->toRad($lat2 - $lat1);
            $dLon = $this->toRad($lon2 - $lon1);
            $lat1 = $this->toRad($lat1);
            $lat2 = $this->toRad($lat2);

            $now = new \DateTime();
            $jam_sekarang = $now->format('Y-m-d H:i');
            $jam_masuk = $now->format('Y-m-d ' . $qr->jam_masuk);
            $jam_pulang = $now->format('Y-m-d ' . $qr->jam_pulang);
            $masuk = Carbon::now()->toTimeString();
            $lama = Carbon::parse($jam_masuk)->diffInMinutes(Carbon::parse($jam_sekarang));
            $tgl = Carbon::today()->toDateString();
            $a = sin($dLat / 2) * sin($dLat / 2) + sin($dLon / 2) * sin($dLon / 2) * cos($lat1) * cos($lat2);
            $c = 2 * atan2(sqrt($a), sqrt(1 - $a));
            $d = $R * $c;

            $status_jarak = '';
            if ($d > 1) {
                $status_jarak = 'NOT OK';
            } else {
                $status_jarak = 'OK';
            }
            if ($qr->id_kegiatan == 0) {
                if ($cuti) {
                    $cuti->update([
                        'status' => 'selesai'
                    ]);
                }

                if ($keluar_kantor->first()) {
                    $confirm = 'selesai izin';
                } else {
                    $check = Presensi::where('id_user', $request->id_user)->whereDate('created_at', Carbon::today());

                    //cek apakah kode sama dengan di Database
                    if (!$check->first() && $qr) {
                        $id_kegiatan = $qr->id_kegiatan;
                        if ($qr->kode_qr == $request->kode) {
                            if ($sakit->first()) {
                                $tgl = Carbon::today()->toDateString();
                                $tgl_mulai = Carbon::parse($sakit->first()->tanggal_mulai);
                                $lamaHari = 0;

                                for ($date = $tgl_mulai; $date->lte($tgl); $date->addDay()) {
                                    $libur = HariLibur::pluck('tanggal')->toArray();
                                    if (!$date->isSunday()) {
                                        $lamaHari++;
                                    }

                                    if (in_array($date->toDateString(), $libur)) {
                                        $lamaHari--;
                                    }
                                }

                                if ($tgl_mulai->toDateString() != $tgl) {
                                    $lamaHari--;
                                }

                                if ($sakit->first()->jenis == 'sakit') {
                                    $sakit->update([
                                        'lama' => $lamaHari,
                                        'tanggal_selesai' => $tgl,
                                        'status' => 'selesai'
                                    ]);
                                } else {
                                    $sakit->update([
                                        'status' => 'selesai'
                                    ]);
                                }
                            }
                            //jika terlambat
                            if ($jam_sekarang > $jam_masuk) {
                                $id = \DB::table('presensi')->insertGetId([
                                    'id_cu' => $request->id_cu,
                                    'id_user' => $request->id_user,
                                    'id_aktivis' => $request->id_aktivis,
                                    'id_qr' => $qr->id,
                                    'kode' => $request->kode,
                                    'tanggal' => $tgl,
                                    'name' => $request->name,
                                    'jam_masuk' => $masuk,
                                    'lat' => $lat2,
                                    'lon' => $lon2,
                                    'id_kegiatan' => $id_kegiatan,
                                    'status_jarak' => $status_jarak,
                                    'created_at' => Carbon::now(),
                                    'updated_at' => Carbon::now()
                                ]);

                                PresensiKeterlambatan::create([
                                    'id_absen' => $id,
                                    'id_user' => $request->id_user,
                                    'id_aktivis' => $request->id_aktivis,
                                    'id_cu' => $request->id_cu,
                                    'lama' => $lama,
                                    'tanggal' => $tgl
                                ]);

                                $status = 'terlambat';
                                $message = 'Presensi Masuk Berhasil Diisi';
                            } else {
                                Presensi::create($request->except('tanggal', 'jam_masuk', 'jam_pulang', 'status_jarak', 'id_qr') + [
                                    'tanggal' => $tgl,
                                    'jam_masuk' => $masuk,
                                    'status_jarak' => $status_jarak,
                                    'id_qr' => $qr->id
                                ]);
                                $message = 'Presensi Masuk Berhasil Diisi';
                            }
                        } else {
                            $message = 'Kode QR Sudah Tidak Berlaku atau Salah';
                        }
                    } elseif ($check->first() && !$check->first()->jam_pulang && $qr) {
                        $now = new \DateTime();
                        $jam_sekarang = $now->format('Y-m-d H:i');
                        $jam_masuk = $now->format('Y-m-d ' . $qr->jam_masuk);
                        $jam_pulang = $now->format('Y-m-d ' . $qr->jam_pulang);
                        if ($qr->kode_qr == $request->kode) {
                            if ($jam_sekarang < $jam_pulang) {
                                //pulang cepat
                                $confirm = true;
                                $confirm = 'pulang awal';
                                if ($request->id_qr != null) {
                                    $message = 'Anda Pulang Lebih Awal dari Jam Yang telah Ditentukan';
                                }
                            } elseif ($jam_sekarang >= $jam_pulang) {
                                //pulang normal
                                $confirm = 'pulang';
                                $jam_pulang = Carbon::now()->toTimeString();
                                $check->update(['jam_pulang' => $jam_pulang]);
                                $message = 'Presensi Pulang Berhasil Diisi';
                            } else {
                                $message = 'Anda Sudah Mengisi Presensi Pulang';
                            }
                        } else {
                            //kode QR Tidak Sesuai Dengan Database
                            $message = 'Kode QR Sudah Tidak Berlaku atau Salah';
                        }
                    } else {

                        if (!$qr) {
                            $message = 'Kode QR Sudah Tidak Berlaku/Salah/Belum Aktif';
                        } else {
                            $message = 'Anda Sudah Mengisi Presensi Pulang';
                        }
                    }
                }
            } else {
                //presensi kegiatan
                $check = Presensi::where('id_user', $request->id_user)->whereDate('tanggal', Carbon::today());
                if (!$check->first()) {
                    Presensi::create($request->except('tanggal', 'jam_masuk', 'jam_pulang', 'status_jarak', 'id_qr') + [
                        'tanggal' => Carbon::today()->toDateString(),
                        'jam_masuk' => Carbon::now()->toTimeString(),
                        'status_jarak' => $status_jarak,
                        'id_qr' => $qr->id,
                        'id_kegiatan' => $qr->id_kegiatan,
                        'kegiatan_name' => $qr->kegiatan_name
                    ]);
                    $message = 'Presensi Berhasil Diisi';
                } elseif ($qr->jam_pulang) {
                    if (!$check->first()->jam_pulang) {
                        $jam_pulang = Carbon::now()->toTimeString();
                        $check->update(['jam_pulang' => $jam_pulang]);
                        $message = 'Presensi Berhasil Diisi';
                    }
                }
            }
        } else {
            $message = 'Kode QR Sudah Tidak Berlaku/Salah/Belum Aktif';
        }


        return response()->json([
            'message' => $message,
            'status' => $status,
            'konfirmasi_pulang' => $confirm,
        ]);
    }

    // Converts numeric degrees to radians
    function toRad($Value)
    {
        return $Value * pi() / 180;
    }

    function storeIzin(Request $request)
    {
        $lama = null;
        $message = '';
        $tgl_mulai = Carbon::parse($request->tanggal_mulai);
        $tgl_selesai = Carbon::parse($request->tanggal_selesai);
        $cek = PresensiIzin::where('id_user', $request->id_user)->whereNull('status')->first();

        if ($request->jenis == 'kegiatan') {
            $aktivis = Aktivis::findOrFail($request->id_aktivis);
            Presensi::create([
                'id_user' => $request->id_user,
                'id_cu' => $request->id_cu,
                'id_aktivis' => $request->id_aktivis,
                'id_qr' => 0,
                'id_kegiatan' => 0,
                'status_jarak' => 'NOT OK',
                'tanggal' => $request->tanggal_mulai,
                'kegiatan_name' => $request->alasan,
                'kode' => 0,
                'lat' => 0,
                'lon' => 0,
                'name' => $aktivis->name,
                'jam_masuk' => Carbon::now()->toTimeString(),
            ]);
            $message = 'Data Kegiatan Berhasil Disimpan';
        } else {
            if (!$cek) {
                $lama = 0;
                for ($date = $tgl_mulai; $date->lte($tgl_selesai); $date->addDay()) {
                    if (!$date->isSunday()) {
                        $lama++;
                    }
                }
                $lama--;
                if ($request->jenis == 'sakit') {
                    $lama = 0;
                }
                PresensiIzin::create([
                    'id_user' => $request->id_user,
                    'id_cu' => $request->id_cu,
                    'id_aktivis' => $request->id_aktivis,
                    'jenis' => $request->jenis,
                    'tanggal_mulai' => $request->tanggal_mulai,
                    'tanggal_selesai' => $request->tanggal_selesai,
                    'alasan' => $request->alasan,
                    'lama' => $lama,
                ]);
                if ($request->jenis == 'izin') {
                    $message = 'Data Izin Berhasil Disimpan';
                } else {
                    $message = 'Data Sakit Berhasil Disimpan';
                }
            } else {
                $message = 'Masih ada Data Izin/Sakit yang Belum Selesai';
            }
        }

        return response()->json([
            'message' => $message,
        ]);
    }

    function storeKuliah($id_cu, $id_aktivis, $id_user, $tanggal, $tipe)
    {

        if ($tipe == 'kuliah') {
            $check = PresensiKuliah::where('id_user', $id_user)->where('tanggal', $tanggal)->first();
            if (!$check) {
                PresensiKuliah::create([
                    'id_user' => $id_user,
                    'id_cu' => $id_cu,
                    'id_aktivis' => $id_aktivis,
                    'tanggal' => $tanggal
                ]);
                $message = 'Berhasil Disimpan';
            } else {
                $message = 'Data Kuliah aktivis ini sudah dimasukkan untuk tanggal tersebut';
            }
        } else {
            $date = Carbon::now(); // universal truth month's first day is 1
            $start = $date->startOfMonth()->format('Y-m-d'); // 2000-02-01 00:00:00
            $end = $date->endOfMonth()->format('Y-m-d'); // 2000-02-29 23:59:59
            $cek = PresensiOffBergilir::where('id_user', $id_user)->where('tanggal', '>=', $start)->where('tanggal', '<=', $end)->first();
            if (!$cek) {
                PresensiOffBergilir::create(['tanggal' => $tanggal, 'id_user' => $id_user, 'id_cu' => $id_cu, 'id_aktivis' => $id_aktivis]);
                $message = 'Data off berhasil ditambahkan';
            } else {
                $message = 'Aktivis ini sudah mendapatkan off bulan ini';
            }
        }

        return response()->json([
            'message' => $message,
        ]);
    }

    function selesaiIzin($id_user)
    {
        $now = new \DateTime();
        $lama = 0;
        $jam_sekarang = $now->format('Y-m-d H:i');
        $jam_pulang = $now->format('Y-m-d ' . '15:00');
        $keluar_kantor = PresensiKeluarKantor::where('id_user', $id_user)->whereDate('created_at', Carbon::today())->whereNull('lama');
        if ($jam_sekarang > $jam_pulang) {
            $lama = Carbon::parse($keluar_kantor->first()->created_at)->diffInMinutes(Carbon::parse($now->format('Y-m-d 15:00')));
        } else {
            $lama = Carbon::parse($keluar_kantor->first()->created_at)->diffInMinutes(Carbon::parse($now->format('Y-m-d H:i')));
        }
        $keluar_kantor->update([
            'lama' => $lama
        ]);
        $message = 'Anda Sudah Kembali Ke Kantor Terima Kasih';
        return response()->json([
            'message' => $message,
        ]);
    }

    function storeCuti(Request $request)
    {
        $personalia = User::permission('is_personalia')->where('id_cu', $request->id_cu)->first()->id;
        $libur = HariLibur::pluck('tanggal')->toArray();
        $atasan = StrukturOrganisasi::where('id_user', $request->id_user)->first()->id_user_atasan;
        $cek = PresensiCuti::where('id_user', $request->id_user)->whereNull('status')->whereNull('alasan_penolakan')->first();
        $date = \Carbon\Carbon::parse(Carbon::now()->format('Y') . "-" . "01" . "-01");
        $model = PresensiCuti::with('aktivis')->where('id_user', $request->id_user)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->where('status_acc1', 'disetujui')->where('status_acc2', 'disetujui')->sum('lama');
        $sisaCuti = 12 - $model;
        $message = '';

        $endDate = Carbon::parse($request->tanggal_selesai);
        $startDate = Carbon::parse($request->tanggal_mulai);
        $cutiDays = 0;
        for ($date = $startDate; $date->lte($endDate); $date->addDay()) {
            if (!$date->isSunday()) {
                $cutiDays++;
            }

            if (in_array($date->toDateString(), $libur)) {
                $cutiDays--;
            }
        }


        $cutiDays--;

        if ($sisaCuti >= $cutiDays) {
            if (!$cek) {
                PresensiCuti::create([
                    'tanggal_mulai' => $request->tanggal_mulai,
                    'tanggal_selesai' => $request->tanggal_selesai,
                    'id_user' => $request->id_user,
                    'alasan' => $request->alasan,
                    'id_cu' => $request->id_cu,
                    'id_aktivis' => $request->id_aktivis,
                    'id_acc1' => $atasan,
                    'id_acc2' => $personalia,
                    'tanggal' => Carbon::now()->toDateString(),
                    'lama' => $cutiDays,
                    'jenis' => $request->jenis
                ]);

                $message = 'Cuti Berhasil Diajukan';
            } else {
                $message = 'Masih Ada Data Cuti Yang Statusnya Belum Selesai';
            }
        } else {
            $message = 'Sisa cuti anda hanya ' . $sisaCuti . " hari dan anda mengajukan " . $cutiDays . " hari";
        }


        return response()->json([
            'message' => $message,
        ]);
    }

    function storePresensiLain($tipe, Request $request)
    {
        $tgl = Carbon::today()->toDateString();
        $message = '';
        if ($tipe == 'PULANG AWAL') {
            $now = new \DateTime();
            $jam_sekarang = $now->format('Y-m-d H:i');
            $presensi = Presensi::where('id_user', $request->id_user)->whereDate('created_at', Carbon::today())->first();
            $qr = QrPresensi::where('id', $presensi->id_qr)->first();
            $lama = 0;
            if (date('D') != 'Sat') {
                $lama = Carbon::parse($jam_sekarang)->diffInMinutes(Carbon::parse($now->format('Y-m-d ' . $qr->jam_pulang)));
            } else {
                $lama = Carbon::parse($jam_sekarang)->diffInMinutes(Carbon::parse($now->format('Y-m-d 11:00')));
            }

            $jam_pulang = Carbon::now()->toTimeString();
            $presensi->update(['jam_pulang' => $jam_pulang]);
            PresensiPulangAwal::create([
                'id_absen' => $presensi->id,
                'id_user' => $request->id_user,
                'id_aktivis' => $request->id_aktivis,
                'id_cu' => $presensi->id_cu,
                'jenis' => $request->jenis,
                'alasan' => $request->alasan,
                'jam_pulang' => $jam_pulang,
                'lama' => $lama,
                'tanggal' => $tgl
            ]);
            $message = 'Presensi Pulang Berhasil Diisi dan Anda Pulang Lebih Cepat dari Jam Seharusnya';
        } elseif ($tipe == 'TERLAMBAT') {
            $keterlambatan = PresensiKeterlambatan::where('id_user', $request->id_user)->where('tanggal', Carbon::today()->toDateString());
            $keterlambatan->update($request->except('lama', 'tanggal', 'id_absen', 'id_user'));
            $message = 'Presensi Masuk Berhasil Diisi dan Anda Terlambat';
        } elseif ($tipe == 'IZIN KELUAR') {
            $keluar_kantor = PresensiKeluarKantor::where('id_user', $request->id_user)->whereDate('created_at', Carbon::today())->whereNull('lama');
            $presensi = Presensi::where('id_user', $request->id_user)->whereDate('created_at', Carbon::today())->first();
            $tgl = Carbon::today()->toDateString();

            if ($keluar_kantor->first()) {
            } else {
                PresensiKeluarKantor::create([
                    'id_absen' => $presensi->id,
                    'id_user' => $request->id_user,
                    'id_aktivis' => $request->id_aktivis,
                    'id_cu' => $presensi->id_cu,
                    'jenis' => $request->jenis,
                    'alasan' => $request->alasan,
                    'tanggal' => $tgl
                ]);

                $message = 'Data Keluar Kantor Anda Sudah Tersimpan';
            }
        }

        return response()->json([
            'message' => $message,
        ]);
    }

    public function uploadExcelOffBergilir(Request $request)
    {
        (new OffBergilirImport)->queue($request->file)->chain([new SendNotification(Auth::user()->id, 'NotifUpload', 'Data Berhasil Diupload')]);
        return response()->json([
            'message' => 'Data Berhasil Diupload',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($tipe, $id)
    {
        $model = '';
        if ($tipe == 'qr') {
            $model = QrPresensi::findOrFail($id);
        } elseif ($tipe == 'cuti') {
            $model = PresensiCuti::findOrFail($id);
        } elseif ($tipe == 'terlambat') {
            $model = PresensiKeterlambatan::findOrFail($id);
        } elseif ($tipe == 'seragam') {
            $model = Presensi::with('seragam', 'aktivis', 'seragamKerja')->where('id', $id)->first();
        } elseif ($tipe == 'izin' || $tipe == 'sakit') {
            $model = PresensiIzin::with('aktivis')->where('id', $id)->first();
        }

        return response()
            ->json([
                'form' => $model,
                'option' => []
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateQR(Request $request, $id)
    {

        QrPresensi::where('id', $id)->update([
            'jam_masuk' => $request->jam_masuk,
            'jam_pulang' => $request->jam_pulang,
            'jenis' => $request->jenis
        ]);
        return response()->json([
            'message' => 'Berhasil diUpdate',
        ]);
    }


    public function updateCuti(Request $request, $id)
    {
        $endDate = Carbon::parse($request->tanggal_selesai);
        $startDate = Carbon::parse($request->tanggal_mulai);
        $cutiDays = 0;
        for ($date = $startDate; $date->lte($endDate); $date->addDay()) {
            if (!$date->isSunday()) {
                $cutiDays++;
            }
        }
        $cutiDays--;
        PresensiCuti::where('id', $id)->update([
            'tanggal_mulai' => $request->tanggal_mulai,
            'tanggal_selesai' => $request->tanggal_selesai,
            'realisasi_mulai' => $request->realisasi_mulai,
            'alasan' => $request->alasan,
            'lama' => $cutiDays,
            'jenis' => $request->jenis
        ]);
        return response()->json([
            'message' => 'Berhasil diUpdate',
        ]);
    }

    public function updateAlasan(Request $request, $tipe)
    {
        if ($tipe == 'keterlambatan') {
            PresensiKeterlambatan::where('id', $request->id)->update([
                'jenis' => $request->jenis,
                'alasan' => $request->alasan
            ]);
        } elseif ($tipe == 'pulangawal') {
            PresensiPulangAwal::where('id', $request->id)->update([
                'jenis' => $request->jenis,
                'alasan' => $request->alasan
            ]);
        } else {
            PresensiKeluarKantor::where('id', $request->id)->update([
                'jenis' => $request->jenis,
                'alasan' => $request->alasan
            ]);
        }

        return response()->json([
            'message' => 'Berhasil diUpdate',
        ]);
    }

    public function updateIzin(Request $request, $id)
    {
        $tgl_mulai = Carbon::parse($request->tanggal_mulai);
        $tgl_selesai = Carbon::parse($request->tanggal_selesai);
        $lama = 0;
        for ($date = $tgl_mulai; $date->lte($tgl_selesai); $date->addDay()) {
            if (!$date->isSunday()) {
                $lama++;
            }
        }
        $lama--;

        PresensiIzin::where('id', $id)->update([
            'alasan' => $request->alasan,
            'tanggal_mulai' => $request->tanggal_mulai,
            'tanggal_selesai' => $request->tanggal_selesai,
            'lama' => $lama
        ]);

        return response()->json([
            'message' => 'Berhasil diUpdate',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, $tipe)
    {
        if ($tipe == 'keterlambatan') {
            $data = PresensiKeterlambatan::findOrFail($id)->delete();
        } elseif ($tipe == 'pulangawal') {
            $data = PresensiPulangAwal::findOrFail($id)->delete();
        } elseif ($tipe == 'masukkantor') {
            $data = Presensi::findOrFail($id)->delete();
        } elseif ($tipe == 'kegiatan') {
            $data = Presensi::findOrFail($id)->delete();
        } elseif ($tipe == 'alpha') {
            $data = PresensiAlpa::findOrFail($id)->delete();
        } elseif ($tipe == 'kuliah') {
            $data = PresensiKuliah::findOrFail($id)->delete();
        } elseif ($tipe == 'off') {
            $data = PresensiOffBergilir::findOrFail($id)->delete();
        } elseif ($tipe == 'keluarjamkantor') {
            $data = PresensiKeluarKantor::findOrFail($id)->delete();
        } elseif ($tipe == 'seragam') {
            $data = PresensiPelanggaranSeragam::findOrFail($id);
            $presensi = Presensi::findOrFail($data->id_absen);
            $presensi->seragam()->detach();
            $data->delete();
        } elseif ($tipe == 'izin') {
            $data = PresensiIzin::findOrFail($id)->delete();
        } elseif ($tipe == 'sakit') {
            $data = PresensiIzin::findOrFail($id)->delete();
        } elseif ($tipe == 'qr') {
            $data = QrPresensi::find($id);
            $data->delete();
        } elseif ($tipe == 'cuti') {
            $data = PresensiCuti::find($id);
            $data->delete();
        }

        return response()
            ->json([
                'deleted' => true,
                'message' => ' Data berhasil dihapus'
            ]);
    }

    public function downloadLaporan(Request $request)
    {
        return Excel::download(new Export($request->tipe, $request->periode), 'Laporan.xlsx');
    }

    public function downloadTemplate(Request $request)
    {
        return Excel::download(new TemplateOff($request->id_cu), 'Template Upload Data Off Bergilir.xlsx');
    }

    public function downloadSuratPengajuanCuti(Request $request)
    {

        $date = \Carbon\Carbon::parse(Carbon::now()->format('Y') . "-" . "01" . "-01");
        $data = PresensiCuti::with('aktivis.pekerjaan_aktif')->where('id', $request->id)->first();
        $cek_atasan = StrukturOrganisasi::where('id_user_atasan', $data->id_user)->first();
        $bidang_name = '';
        $is_manager = false;
        $data2 = User::with('atasan.aktivis_atasan', 'atasan.bidang')->where('id', $data->id_user)->first();

        if (6 <= $data->aktivis->pekerjaan_aktif->tingkat && $data->aktivis->pekerjaan_aktif->tingkat < 7) {
            if ($cek_atasan->id) {
                $bidang_name = Bidang::where('id', $cek_atasan->id_bidang)->first()->name;
            } else {
                $bidang_name = 'Perangkat GM';
            }
            $is_manager = true;
        } else {
            $bidang_name = $data2->atasan->bidang->name;
        }

        $model = PresensiCuti::with('aktivis')->where('id_user', $data->id_user)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->where('status_acc1', 'disetujui')->where('status_acc2', 'disetujui')->sum('lama');
        $sisaCuti = 12 - $model;
        setlocale(LC_TIME, 'id');

        $now = Carbon::now()->formatLocalized('%e %B %Y');
        $mulai = Carbon::parse($data->tanggal_mulai)->formatLocalized('%e %B %Y');
        $selesai = Carbon::parse($data->tanggal_selesai)->subDay(1)->formatLocalized('%e %B %Y');
        $tgl_pengajuan = Carbon::parse($data->tanggal)->subDay(1)->formatLocalized('%e %B %Y');
        $tgl_acc2 = Carbon::parse($data->tanggal_acc2)->subDay(1)->formatLocalized('%e %B %Y');
        $masuk = Carbon::parse($data->tanggal_selesai)->formatLocalized('%e %B %Y');
        $now = Carbon::now()->formatLocalized('%e %B %Y');
        $personalia = User::with('aktivis2')->where('id', $data->id_acc2)->first();
        $ttd_pengaju = 'images/ttd/' . $data->aktivis->gambar_ttd . '.png';
        $ttd_atasan = 'images/ttd/' . $data2->atasan->aktivis_atasan->gambar_ttd . '.png';
        $ttd_personalia = 'images/ttd/' . $personalia->aktivis2->gambar_ttd . '.png';
        // Generate the PDF
        $pdf = PDF::loadView('formPengajuanCuti', compact('now', 'mulai', 'selesai', 'masuk', 'data', 'data2', 'personalia', 'sisaCuti', 'now', 'ttd_pengaju', 'ttd_atasan', 'ttd_personalia', 'tgl_acc2', 'tgl_pengajuan', 'bidang_name', 'is_manager'));
        $pdf->setPaper('a4', 'portrait');
        // Save, download, or show the PDF
        return $pdf->download('.pdf');
    }

    public function downloadSKCuti(Request $request)
    {
        $date = \Carbon\Carbon::parse(Carbon::now()->format('Y') . "-" . "01" . "-01");
        $data = PresensiCuti::with('aktivis.pekerjaan_aktif', 'skcuti')->where('id', $request->id)->first();
        $no_lengkap = $data->skcuti->name;
        setlocale(LC_TIME, 'id');
        $data2 = User::with('atasan.aktivis_atasan', 'atasan.bidang')->where('id', $data->id_user)->first();
        $cek_atasan = StrukturOrganisasi::where('id_user_atasan', $data->id_user)->first();
        $bidang_name = '';
        $is_manager = false;
        if (6 <= $data->aktivis->pekerjaan_aktif->tingkat && $data->aktivis->pekerjaan_aktif->tingkat < 7) {
            if ($cek_atasan->id) {
                $bidang_name = Bidang::where('id', $cek_atasan->id_bidang)->first()->name;
            } else {
                $bidang_name = 'Perangkat GM';
            }
            $is_manager = true;
        } else {
            $bidang_name = $data2->atasan->bidang->name;
        }
        $now = Carbon::now()->formatLocalized('%e %B %Y');
        $mulai = Carbon::parse($data->tanggal_mulai)->formatLocalized('%e %B %Y');
        $selesai = Carbon::parse($data->tanggal_selesai)->subDay(1)->formatLocalized('%e %B %Y');
        $tgl_acc2 = Carbon::parse($data->tanggal_acc2)->subDay(1)->formatLocalized('%e %B %Y');
        $masuk = Carbon::parse($data->tanggal_selesai)->formatLocalized('%e %B %Y');
        $now = Carbon::now()->formatLocalized('%e %B %Y');
        // Generate the PDF
        $pdf = PDF::loadView('sKCuti', compact('mulai', 'selesai', 'masuk', 'data', 'data2', 'tgl_acc2', 'no_lengkap', 'bidang_name', 'is_manager'));
        $pdf->setPaper('a4', 'portrait');
        // Save, download, or show the PDF
        return $pdf->download('.pdf');
    }
}
