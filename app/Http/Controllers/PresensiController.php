<?php

namespace App\Http\Controllers;

use App\Aktivis;
use App\Events\PresensiEvent;
use App\Exports\Export;
use App\Imports\OffBergilirImport;
use App\Jobs\SendNotification;
use App\Kegiatan;
use App\Presensi;
use App\PresensiAlpa;
use App\PresensiIzin;
use App\PresensiKeluarKantor;
use App\PresensiKeterlambatan;
use App\PresensiKuliah;
use App\PresensiOffBergilir;
use App\PresensiPelanggaranSeragam;
use App\PresensiPulangAwal;
use App\QrPresensi;
use Illuminate\Http\Request;
use Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

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

    public function indexKegiatan($tipe, $id_cu)
    {
        $cek = '';
        if ($tipe == 'DIKLAT') {
            $cek = 'diklat_bkcu';
        } else if ($tipe == 'PERTEMUAN') {
            $cek = 'pertemuan_bkcu';
        }
        $kegiatan =  Kegiatan::where('tipe', $cek)->where('status', 1)->orWhere('status', 2)->orWhere('status', 3)->select('id', 'name')->get();

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
                    $model = Presensi::with('kegiatan', 'aktivis')->where("id_kegiatan", "!=", 0)->orWhere("kegiatan_name", "!=", null)->where('id_user', Auth::user()->id)->where('created_at', '>=', $start)
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
                }
            } else {
                $date = \Carbon\Carbon::parse($year . "-" . "01" . "-01"); // universal truth month's first day is 1
                $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
                $end = $date->endOfMonth()->format('Y-m-d H:i:s'); // 2000-02-29 23:59:59
                $model =  PresensiKeterlambatan::whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                if ($tipe == 'keterlambatan') {
                    $model =  PresensiKeterlambatan::with('aktivis')->where('id_user', Auth::user()->id)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'pulangawal') {
                    $model =  PresensiPulangAwal::with('aktivis')->where('id_user', Auth::user()->id)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'masukkantor') {
                    $model =  Presensi::with('aktivis')->where('id_user', Auth::user()->id)->where('id_kegiatan', 0)->where("kegiatan_name", "=", null)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
                } elseif ($tipe == 'kegiatan') {
                    $model =  Presensi::with('kegiatan', 'aktivis')->where("id_kegiatan", "!=", 0)->orWhere("kegiatan_name", "!=", null)->where('id_user', Auth::user()->id)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
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
                    $model = Presensi::with('kegiatan', 'aktivis')->where('id_cu', Auth::user()->id_cu)->where("id_kegiatan", "!=", 0)->orWhere("kegiatan_name", "!=", null)->where('created_at', '>=', $start)
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
                    $model =  Presensi::with('kegiatan', 'aktivis')->where('id_cu', Auth::user()->id_cu)->where("id_kegiatan", "!=", 0)->orWhere("kegiatan_name", "!=", null)->whereYear('created_at', '=', Carbon::parse($date)->format('Y'))->advancedFilter();
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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function createFormTerlambat()
    {
        //
        return response()
            ->json([
                'form' => PresensiKeterlambatan::initialize(),
            ]);
    }

    public function createAbsen()
    {
        //
        return response()
            ->json([
                'form' => Presensi::initialize(),
            ]);
    }


    public function createFormQR()
    {
        //
        return response()
            ->json([
                'form' => QrPresensi::initialize(),
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
        if (!$check) {
            QrPresensi::create($request->toArray());
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
            $qr = QrPresensi::where('id_cu', $request->id_cu)->where('kode_qr', $request->kode)->first();
        } else {
            $qr = QrPresensi::where('id', $request->id_qr)->first();
        }

        if ($qr) {
            if ($qr->jenis == 'BERUBAH SETELAH SCAN') {
                $time = \Carbon\Carbon::now()->toArray();
                QrPresensi::where('id', $qr->id)->update([
                    'kode_qr' => $time['timestamp']
                ]);
                event(new PresensiEvent($time['timestamp'], $qr->id_user, $request->id_cu));
            }
        }

        $confirm = '';
        $message = '';
        $status = 'ok';


        $keluar_kantor = PresensiKeluarKantor::where('id_user', $request->id_user)->whereDate('created_at', Carbon::today())->whereNull('lama');
        $sakit = PresensiIzin::where('id_user', $request->id_user)->whereNull('lama');

        if ($keluar_kantor->first()) {
            $confirm = 'selesai izin';
        } else {
            $check = Presensi::where('id_user', $request->id_user)->whereDate('created_at', Carbon::today());


            //cek apakah kode sama dengan di Database
            if (!$check->first() && $qr) {
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
                $id_kegiatan = $qr->id_kegiatan;
                if ($qr->kode_qr == $request->kode) {
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

                        if ($sakit->first()) {
                            $tgl = Carbon::today()->toDateString();
                            $tgl_mulai = Carbon::parse($sakit->first()->tanggal_mulai);
                            $lama = $tgl_mulai->diffInDays($tgl);
                            $sakit->update([
                                'lama' => $lama,
                                'tanggal_selesai' => $tgl
                            ]);
                        }
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
                        $message = 'Anda Pulang Lebih Awal dari Jam Yang telah Ditentukan';
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
                    $message = 'Kode QR Sudah Tidak Berlaku atau Salah';
                } else {
                    $message = 'Anda Sudah Mengisi Presensi Pulang';
                }
            }
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
        $tgl_mulai = Carbon::parse($request->tanggal_mulai);
        $tgl_selesai = Carbon::parse($request->tanggal_selesai);
        if ($request->jenis == 'izin') {
            $lama = $tgl_mulai->diffInDays($tgl_selesai);
        }


        if($request->jenis == 'kegiatan'){
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
                'kode'=>0,
                'lat'=>0,
                'lon'=>0,
                'name'=> $aktivis->name,
                'jam_masuk' => Carbon::now()->toTimeString(),
            ]);
        }else{
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
        }

        $message = 'Berhasil Disimpan';

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
        // $qr = QrAbsen::where('id_cu', $request->id_cu)->where('kode_qr', $request->kode)->first();
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
            $message = 'Presensi Pulang Berhasil Diisi';
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
    public function edit($id)
    {
        //
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
        $lama = null;
        $tgl_mulai = Carbon::parse($request->tanggal_mulai);
        $tgl_selesai = Carbon::parse($request->tanggal_selesai);
        if ($request->jenis == 'izin') {
            $lama = $tgl_mulai->diffInDays($tgl_selesai);
        }

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
        }

        return response()
            ->json([
                'deleted' => true,
                'message' => ' Data berhasil dihapus'
            ]);
    }

    public function downloadLaporan(Request $request)
    {

        return Excel::download(new Export($request->tipe),'Laporan.xlsx');
    }
}
