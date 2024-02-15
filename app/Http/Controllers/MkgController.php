<?php

namespace App\Http\Controllers;

use App\Aktivis;
use App\Bidang;
use App\Dokumen;
use App\MkgPengajuan;
use App\MkgSekarang;
use App\Pengaturan;
use App\StrukturOrganisasi;
use App\Surat;
use App\SuratKode;
use App\SuratKodeTemp;
use App\User;
use Illuminate\Http\Request;
use Auth;
use Barryvdh\DomPDF\Facade as PDF;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;


class MkgController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id_cu, $tipe)
    {
        $model = '';
        if (Auth::user()->hasPermissionTo('personalia_akses')) {
            if ($tipe == 'Menunggu') {
                $model = MkgPengajuan::with('aktivis')->where('id_cu', $id_cu)->whereNull('approval_stat')->advancedFilter();
            } else {
                $model = MkgPengajuan::with('aktivis')->where('id_cu', $id_cu)->where('approval_stat', 1)->advancedFilter();
            }
        } else {
            if ($tipe == 'Menunggu') {
                $model = MkgPengajuan::with('aktivis')->where('id_cu', $id_cu)->where('id_aktivis', \Auth::user()->id_aktivis)->whereNull('approval_stat')->advancedFilter();
            } else {
                $model = MkgPengajuan::with('aktivis')->where('id_cu', $id_cu)->where('id_aktivis', \Auth::user()->id_aktivis)->where('approval_stat', 1)->advancedFilter();
            }
        }

        return response()->json([
            'model' => $model,
        ]);
    }

    public function indexAktivis($id_cu)
    {
        $model = null;
        if ($id_cu == 0) {
            $model = DB::select('select users.id,users.id_cu,users.id_aktivis,aktivis.name,aktivis.gambar,aktivis_pekerjaan.id_aktivis,aktivis_pekerjaan.tingkat,aktivis_pekerjaan.selesai, aktivis_pekerjaan.id_tempat  from users
        inner join aktivis on aktivis.id = users.id_aktivis inner join aktivis_pekerjaan on aktivis_pekerjaan.id_aktivis = aktivis.id
        where users.id_cu = 0 and users.id_aktivis !=0 and users.status = 1 and aktivis_pekerjaan.selesai is null and aktivis_pekerjaan.id_tempat =1 and (aktivis_pekerjaan.tingkat = 5 or aktivis_pekerjaan.tingkat =6 or aktivis_pekerjaan.tingkat =7 or aktivis_pekerjaan.tingkat =8)  order by aktivis.name asc');
        } else {
            $model = DB::select('select aktivis.id,aktivis.name,aktivis_pekerjaan.id_aktivis,aktivis_pekerjaan.tingkat,aktivis_pekerjaan.selesai, aktivis_pekerjaan.id_tempat from aktivis
        inner join aktivis_pekerjaan on aktivis_pekerjaan.id_aktivis = aktivis.id
        where aktivis_pekerjaan.id_tempat = ' . $id_cu . ' and aktivis_pekerjaan.selesai is null and aktivis_pekerjaan.id_tempat =1 and (aktivis_pekerjaan.tingkat = 5 or aktivis_pekerjaan.tingkat =6 or aktivis_pekerjaan.tingkat =7 or aktivis_pekerjaan.tingkat =8)  order by aktivis.name asc');
        }

        return response()->json([
            'model' => $model,
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id_aktivis)
    {
        $aktivis = Aktivis::with('pekerjaans', 'mkg')->where('id', $id_aktivis)->first();
        $pengajuan = MkgPengajuan::where('id_aktivis', $aktivis->id)->where('periode', Carbon::now()->year)->where('tgl_perubahan', '!=', null)->first();


        $mulai_tetap = '';
        $tgl_perubahan = null;
        $id_user = null;
        $message = '';
        

        if ($aktivis->mkg) {
            if (Auth::user()->id_cu == 0) {
                $mulai_tetap = $aktivis->pekerjaans->where('id_tempat', 1)->sortBy('mulai')->first()->mulai;
                $id_user = $request->mkg['id_user'];
            } else {
                $mulai_tetap = $aktivis->pekerjaans->where('id_tempat', $request->mkg['id_cu'])->sortBy('mulai')->first()->mulai;
            }

            if (((Carbon::now()->year - Carbon::parse($mulai_tetap)->year) % 4 == 0) || ((Carbon::now()->year - Carbon::parse($mulai_tetap)->year) % 2 == 0)) {
                $tgl_perubahan = Carbon::parse($mulai_tetap)->setDate(Carbon::now()->year, Carbon::parse($mulai_tetap)->month, Carbon::parse($mulai_tetap)->day)->toDateString();
            }
        }

        if (!$pengajuan) {
            MkgPengajuan::create([
                'id_aktivis' => $id_aktivis,
                'id_cu' => $request->mkg['id_cu'],
                'mkg' => $request->mkg['mkg'],
                'gr_d' => $request->mkg['gr_d'],
                'gr_b' => $request->mkg['gr_b'],
                'id_user' => $id_user,
                'periode' => Carbon::now()->year,
                'tgl_perubahan' => $tgl_perubahan,
                'pendidikan_tertinggi' => $request->mkg['pendidikan_tertinggi']
            ]); //

            $message = 'Pengajuan Perubahan GR/MKG Berhasil ditambahkan';
        } else {
            $message = 'Aktivis ini telah melakukan pengajuan perubahan GR/MKG pada tahun ini';
        }

        return response()
            ->json([
                'saved' => true,
                'message' => $message
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
    public function update(Request $request, $id)
    {
        MkgPengajuan::where('id', $id)->update([
            'mkg' => $request->mkg['mkg'],
            'gr_d' => $request->mkg['gr_d'],
            'gr_b' => $request->mkg['gr_b'],
            'pendidikan_tertinggi' => $request->mkg['pendidikan_tertinggi']
        ]); //

        return response()
            ->json([
                'saved' => true,
                'message' => 'Perubahan Berhasil Disimpan'
            ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $kelas = MkgPengajuan::findOrFail($id);
        $kelas->delete();

        return response()
            ->json([
                'deleted' => true,
                'message' =>  'Data berhasil dihapus'
            ]);
    }


    public function verifikasi($id_user, $id)
    {

        DB::beginTransaction();

        try {

            $mkgPengajuan = MkgPengajuan::with('aktivis.pekerjaans')->findOrFail($id);
            $mulai_tetap = '';
            if ($mkgPengajuan->id_cu == 0) {
                $mulai_tetap = $mkgPengajuan->aktivis->pekerjaans->where('id_tempat', 1)->sortBy('mulai')->first();
            } else {
                $mulai_tetap = $mkgPengajuan->aktivis->pekerjaans->where('id_tempat', $mkgPengajuan->id_cu)->sortBy('mulai')->first();
            }

            $mkgPengajuan->approval_stat = 1;
            $mkgPengajuan->id_verifikator = $id_user;
            $mkgPengajuan->save();
            $message = '';
            $prev_mkg = null;
            $prev_grd = null;
            $prev_grb = null;
            $flag = false;
            $mkg_pengurang = 0;

            $mkgPengajuan->update([
                'id_verifikator' => $id_user,
                'status' => 'disetujui',
                'tgl_acc' => Carbon::now()->toDateString()
            ]);

            $message = '';

            $mkg = MkgSekarang::where('id_cu', $mkgPengajuan->id_cu)->where('id_aktivis', $mkgPengajuan->id_aktivis);

            if ($mkg->first()) {
                $mkg = $mkg->first();
                $prev_mkg = $mkg->mkg;
                $prev_grb = $mkg->gr_b;
                $prev_grd = $mkg->gr_d;
                $flag = true;


            } else {
                $mkg = new MkgSekarang();
                $flag = false;
            }

            $mkg->id_aktivis = $mkgPengajuan->id_aktivis;
            $mkg->id_cu = $mkgPengajuan->id_cu;
            $mkg->mkg = $mkgPengajuan->mkg;
            $mkg->gr_d = $mkgPengajuan->gr_d;
            $mkg->gr_b = $mkgPengajuan->gr_b;
            $mkg->prev_mkg = $prev_mkg;
            $mkg->prev_grd = $prev_grd;
            $mkg->prev_grb = $prev_grb;
            $mkg->tgl_masuk = $mulai_tetap->mulai;
            $mkg->mkg_pengurang = $mkg_pengurang;
            $mkg->pendidikan_tertinggi = $mkgPengajuan->pendidikan_tertinggi;

            $mkg->save();

            if (($flag == true && (Carbon::now()->year - Carbon::parse($mulai_tetap->mulai)->year) % 4 == 0) || ($flag == true && (Carbon::now()->year - Carbon::parse($mulai_tetap->mulai)->year) % 2 == 0)) {
                $id_kode_temp = '';
                $dateMonth = Carbon::now();
                $month = $dateMonth->month;
                $tahun = $dateMonth->year;
                $bulan = $this->convertToRomannum($month);
                $nomor = 0;
                $suratS = Pengaturan::with('suratMkg')->where('periode', Carbon::now()->year)->where('id_cu', Auth::user()->id_cu)->select('mkg')->first();
                $no_user_aktif = SuratKodeTemp::where('id_surat_kode', $suratS->suratMkg->id_surat_kode)->where('id_user', $id_user)->where('id_surat', null)->first();
                $no_user_nonaktif = SuratKodeTemp::onlyTrashed()->where('id_surat_kode', $suratS->suratMkg->id_surat_kode)->where('id', $id_user)->first();
                $no_user_lain_nonaktif = SuratKodeTemp::onlyTrashed()->where('id_surat_kode', $suratS->suratMkg->id_surat_kode)->where('id_surat', null)->orderBy('kode', 'asc')->first();

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
                        'id_user' => $id_user,
                    ]);
                    $nomor = $no_surat->kode;
                    $id_kode_temp = $no_surat->id;
                } else {
                    $item = SuratKodeTemp::select(\DB::raw('MAX(CAST(kode AS UNSIGNED)) as max_value'))->first();
                    $nomor = $item->max_value + 1;
                    $kode_temp = SuratKodeTemp::create([
                        'id_user' => $id_user,
                        'id_surat_kode' => $suratS->suratMkg->id_surat_kode,
                        'kode' => $nomor,
                        'periode' => $tahun
                    ]);

                    $id_kode_temp = $kode_temp->id;
                }
                
                $suratKode = SuratKode::where('id', $suratS->suratMkg->id_surat_kode)->first();
                if ($nomor >= $suratKode->kode) {
                    SuratKode::where('id', $suratS->suratMkg->id_surat_kode)->update([
                        'kode' => $nomor
                    ]);
                }

                $no_lengkap = $nomor . '/' . $suratS->suratMkg->name . '/' . $bulan . '/' . $tahun;

                $dokumen = Dokumen::create([
                    'id_cu' => $mkgPengajuan->id_cu,
                    'id_dokumen_kategori' => null,
                    'name' => 'SKMKG/GR_' . $mkgPengajuan->aktivis->name,
                    'status' => 'INTERNAL',
                    'format' => 'upload',
                    'tipe' => 'pdf',
                    'keterangan' => 'MKG/GR ' . $mkgPengajuan->aktivis->name
                ]);

                $surat = Surat::create([
                    'id_surat_kode' => $suratS->suratMkg->id_surat_kode,
                    'id_surat_kategori' => $suratS->mkg,
                    'id_dokumen' => $dokumen->id,
                    'id_cu' => $mkgPengajuan->id_cu,
                    'name' => $no_lengkap,
                    'format' => 'upload',
                    'perihal' => 'MKG/GR ' . $mkgPengajuan->aktivis->name,
                    'hal' => 'MKG/GR' . $mkgPengajuan->aktivis->name,
                    'tujuan' => $mkgPengajuan->aktivis->name,
                    'tipe' => 'SURAT KELUAR',
                    'periode' => $tahun
                ]);

                SuratKodeTemp::where('id', $id_kode_temp)->update([
                    'id_surat' => $surat->id
                ]);

                MkgPengajuan::where('id', $id)->update([
                    'id_sk' => $surat->id
                ]);
            }
            // generate sk


            DB::commit();

            return response()
                ->json([
                    'message' => $message,
                ]);
        } catch (\Throwable $th) {
            DB::rollback();
            // Handle the exception (e.g., log it, show an error message, etc.)
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }

    public function downloadSK(Request $request)
    {
        $date = \Carbon\Carbon::parse(Carbon::now()->format('Y') . "-" . "01" . "-01");
        $data = MkgPengajuan::with('aktivis.pekerjaan_aktif', 'sk', 'currentMkg')->where('id', $request->id)->first();
        $no_lengkap = $data->sk->name;
        setlocale(LC_TIME, 'id');
        $tgl_acc = Carbon::parse($data->tgl_acc)->formatLocalized('%e %B %Y');
        $prev_grd = $this->convertToRomannum($data->currentMkg->prev_grd);
        $curr_grd = $this->convertToRomannum($data->gr_d);

        // Generate the PDF
        $pdf = PDF::loadView('sKGRMKG', compact('data', 'tgl_acc', 'no_lengkap', 'curr_grd', 'prev_grd'));
        $pdf->setPaper('a4', 'portrait');
        // Save, download, or show the PDF
        return $pdf->download('.pdf');
    }

    public function downloadSuratPengajuan(Request $request)
    {
        if (Auth::user()->id_cu == 0) {
            $data = MkgPengajuan::with('aktivis.pekerjaan_aktif', 'currentMkg')->where('id', $request->id)->first();
            $cek_atasan = StrukturOrganisasi::where('id_user_atasan', $data->id_user)->first();
            $bidang_name = '';
            $is_manager = false;
            setlocale(LC_TIME, 'id');
            $prev_grd = $this->convertToRomannum($data->currentMkg->prev_grd);
            $curr_grd = $this->convertToRomannum($data->gr_d);
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

            $now = Carbon::parse($data->created_at)->formatLocalized('%e %B %Y');
            $tgl_perubahan = Carbon::parse($data->tgl_perubahan)->formatLocalized('%e %B %Y');
            $ttd_pengaju = 'images/ttd/' . $data->aktivis->gambar_ttd . '.png';
            // Generate the PDF
            $pdf = PDF::loadView('formMkg', compact('data', 'data2', 'now', 'is_manager', 'bidang_name', 'ttd_pengaju', 'prev_grd', 'curr_grd', 'tgl_perubahan'));
            $pdf->setPaper('a4', 'portrait');
            // Save, download, or show the PDF
            return $pdf->download('.pdf');
        } else {
            $data = MkgPengajuan::with('aktivis.pekerjaan_aktif', 'currentMkg')->where('id', $request->id)->first();
            $model = DB::select('SELECT  aktivis.name, aktivis.id ,aktivis_pekerjaan.id_aktivis, aktivis_pekerjaan.tingkat, aktivis_pekerjaan.mulai, aktivis_pekerjaan.id_tempat
            FROM aktivis
            INNER JOIN aktivis_pekerjaan ON aktivis_pekerjaan.id_aktivis = aktivis.id
            WHERE aktivis.id = ' . $data->id_aktivis .
                'AND aktivis_pekerjaan.id_tempat = ' . Auth::user()->id_cu .
                'AND (aktivis_pekerjaan.tingkat = 5 OR aktivis_pekerjaan.tingkat = 6 OR aktivis_pekerjaan.tingkat = 7 OR aktivis_pekerjaan.tingkat = 8)
                AND aktivis_pekerjaan.mulai = (
                    SELECT MIN(mulai)
                    FROM aktivis_pekerjaan
                    WHERE id_aktivis = aktivis.id and aktivis_pekerjaan.id_tempat = 1
            )');
            $cek_atasan = StrukturOrganisasi::where('id_aktivis_atasan', $data->id_aktivis)->first();
            $bidang_name = '';
            $is_manager = false;
            setlocale(LC_TIME, 'id');
            $prev_grd = $this->convertToRomannum($data->currentMkg->prev_grd);
            $curr_grd = $this->convertToRomannum($data->gr_d);
            $data2 = Aktivis::with('atasanByAktivis.aktivis_atasan', 'atasanByAktivis.bidang')->where('id', $data->id_aktivis)->first();
            if (6 <= $data->aktivis->pekerjaan_aktif->tingkat && $data->aktivis->pekerjaan_aktif->tingkat < 7) {
                if ($cek_atasan->id) {
                    $bidang_name = Bidang::where('id', $cek_atasan->id_bidang)->first()->name;
                } else {
                    $bidang_name = 'Perangkat GM';
                }
                $is_manager = true;
            } else {
                $bidang_name = $data2->atasanByAktivis->bidang->name;
            }
            $now = Carbon::parse($data->created_at)->formatLocalized('%e %B %Y');
            $ttd_pengaju = 'images/ttd/' . $data->aktivis->gambar_ttd . '.png';
            // Generate the PDF
            $pdf = PDF::loadView('formMkg', compact('data', 'data2', 'now', 'is_manager', 'bidang_name', 'ttd_pengaju', 'prev_grd', 'curr_grd'));
            $pdf->setPaper('a4', 'portrait');
            // Save, download, or show the PDF
            return $pdf->download('.pdf');
        }
    }


    public function convertToRomannum($value)
    {
        switch ($value) {
            case 1:
                return 'I';
                break;
            case 2:
                return 'II';
                break;
            case 3:
                return 'III';
                break;
            case 4:
                return 'IV';
                break;
        }
    }
}
