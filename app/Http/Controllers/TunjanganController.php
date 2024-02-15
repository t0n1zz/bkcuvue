<?php

namespace App\Http\Controllers;

use App\Aktivis;
use App\Bidang;
use App\Dokumen;
use App\HariLibur;
use App\Pengaturan;
use App\StrukturOrganisasi;
use App\Support\Helper;
use App\Surat;
use App\SuratKode;
use App\SuratKodeTemp;
use App\Tunjangan;
use App\User;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;

class TunjanganController extends Controller
{
    protected $imagepathSertifikat = 'images/tunjangan/';
    protected $width = 300;
    protected $height = 200;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id_cu)
    {
        $model = '';
        if (Auth::user()->hasPermissionTo('personalia_akses')) {
            $model = Tunjangan::with('aktivis')->where('id_cu', $id_cu)->advancedFilter();
        } else {
            $model = Tunjangan::with('aktivis')->where('id_cu', $id_cu)->where('id_user', \Auth::user()->id)->advancedFilter();
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
        return response()
            ->json([
                'form' => Tunjangan::initialize(),
                'option' => []
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

        $tunjangan_anak = Tunjangan::where('id_user', $request->id_user)->where('jenis', 'Anak')->count();
        $tunjangan_istri_suami = Tunjangan::where('id_user', $request->id_user)->where('jenis', 'Istri')->orWhere('jenis', 'Suami')->first();
        $message = '';
        $id = '';

        if ($request->jenis == 'Suami' || $request->jenis == 'Istri') {
            if (!$tunjangan_istri_suami) {
                $ktp = '';
                $surat_perkawinan = '';
                $akta_perkawinan = '';
                if (!empty($request->ktp)) {
                    $imagepath = $this->imagepathSertifikat;
                    $name = 'KTP ' . $request->jenis . ' ' . $request->id_aktivis;
                    $ktp = Helper::image_processing($imagepath, $this->width, $this->height, $request->ktp, '', $name);

                    $name2 = 'SURAT_PERKAWINAN ' . $request->jenis . ' ' . $request->id_aktivis;
                    $surat_perkawinan = Helper::image_processing($imagepath, $this->width, $this->height, $request->surat, '', $name2);

                    $name3 = 'AKTA_PERKAWINAN ' . $request->jenis . ' ' . $request->id_aktivis;
                    $akta_perkawinan = Helper::image_processing($imagepath, $this->width, $this->height, $request->akta, '', $name3);
                }

                $kelas = Tunjangan::create($request->except('ktp', 'akta', 'surat') + [
                    'ktp' => $ktp,
                    'akta' => $akta_perkawinan,
                    'surat' => $surat_perkawinan
                ]);

                $message = 'Tunjangan atas nama' . ' ' . $kelas->name . ' berhasil ditambah';
                $id = $kelas->id;
            } else {
                $message = 'Anda sudah mengajukan tunjangan Suami/Istri';
            }
        } else {
            if ($tunjangan_anak < 3) {
                $surat = '';
                $akta = '';
                $ktp = '';
                if (!empty($request->akta)) {
                    $imagepath = $this->imagepathSertifikat;

                    $name2 = 'SURAT_KELAHIRAN ' . $request->jenis . ' ' . $request->id_aktivis;
                    $surat = Helper::image_processing($imagepath, $this->width, $this->height, $request->surat, '', $name2);

                    $name3 = 'AKTA_KELAHRIAN ' . $request->jenis . ' ' . $request->id_aktivis;
                    $akta = Helper::image_processing($imagepath, $this->width, $this->height, $request->akta, '', $name3);
                }

                $kelas = Tunjangan::create($request->except('ktp', 'akta', 'surat') + [
                    'ktp' => $ktp,
                    'akta' => $akta,
                    'surat' => $surat
                ]);

                $message = 'Tunjangan atas nama' . ' ' . $kelas->name . ' berhasil ditambah';
                $id = $kelas->id;
            } else {
                $message = 'Anda sudah mengajukan tunjangan Anak Sebanyak 3 Kali';
            }
        }



        return response()
            ->json([
                'saved' => true,
                'message' => $message,
                'id' => $id
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
        $model = Tunjangan::with('provinces', 'regencies', 'districts', 'villages')->where('id', $id)->first();

        return response()
            ->json([
                'form' => $model,
                'option' => [],
                'rules' => Tunjangan::$rules,
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $model = Tunjangan::findOrFail($id);

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
    public function update(Request $request, $id)
    {
        $ktp = '';
        $surat_perkawinan = '';
        $akta_perkawinan = '';
        $tunjangan = Tunjangan::findOrFail($id);
        if (!empty($request->ktp) || !empty($request->akta) || !empty($request->surat)) {
            $pre2 = '';
            $pre3 = '';

            $imagepath = $this->imagepathSertifikat;
            if ($request->hasFile('ktp')) {


                if ($request->jenis == 'Anak') {
                    $pre2 = 'SURAT_KELAHIRAN';
                    $pre3 = 'AKTA_KELAHIRAN';
                } else {
                    $pre2 = 'SURAT_PERKAWINAN';
                    $pre3 = 'AKTA_PERKAWINAN';
                }

                $name = 'KTP ' . $request->jenis . ' ' . $request->id_aktivis;
                $ktp = Helper::image_processing($imagepath, $this->width, $this->height, $request->ktp, '', $name);
            }

            if (!empty($request->hasFile('surat'))) {
                $name2 = $pre2 . $request->jenis . ' ' . $request->id_aktivis;
                $surat_perkawinan = Helper::image_processing($imagepath, $this->width, $this->height, $request->surat, '', $name2);
            }

            if (!empty($request->hasFile('akta'))) {
                $name3 = $pre3 . $request->jenis . ' ' . $request->id_aktivis;
                $akta_perkawinan = Helper::image_processing($imagepath, $this->width, $this->height, $request->akta, '', $name3);
            }

            $tunjangan->update($request->except('ktp', 'akta', 'surat') + [
                'ktp' => $ktp != '' ? $ktp : $request->ktp,
                'akta' => $akta_perkawinan != '' ? $akta_perkawinan : $request->akta,
                'surat' => $surat_perkawinan != '' ? $surat_perkawinan : $request->surat
            ]);
        }

        return response()
            ->json([
                'saved' => true,
                'message' =>  'Tunjangan ' . ' ' . $tunjangan->name . ' berhasil diubah'
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
        $kelas = Tunjangan::findOrFail($id);

        $name = $kelas->name;
        $kelas->delete();

        return response()
            ->json([
                'deleted' => true,
                'message' =>  'Data Tunjangan Atas Nama' . ' ' . $name . 'berhasil dihapus'
            ]);
    }

    public function downloadFormPengajuan(Request $request)
    {
        $data = Tunjangan::with('aktivis', 'provinces', 'regencies', 'districts', 'villages')->findOrFail($request->id);
        $cek_atasan = StrukturOrganisasi::where('id_user_atasan', $data->id_user)->first();
        $bidang_name = '';
        $is_manager = false;
        setlocale(LC_TIME, 'id');
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
        $tgl_lahir = Carbon::parse($data->tanggal_lahir)->formatLocalized('%e %B %Y');
        $tgl_menikah = Carbon::parse($data->tanggal_menikah)->formatLocalized('%e %B %Y');
        $ttd_pengaju = 'images/ttd/' . $data->aktivis->gambar_ttd . '.png';
        // Generate the PDF
        if ($data->jenis == 'Anak') {
            $pdf = PDF::loadView('formTunjanganAnak', compact('data', 'data2', 'now', 'tgl_lahir', 'is_manager', 'bidang_name', 'ttd_pengaju'));
        } else {
            $pdf = PDF::loadView('formTunjangan', compact('data', 'data2', 'now', 'tgl_lahir', 'tgl_menikah', 'is_manager', 'bidang_name', 'ttd_pengaju'));
        }
        $pdf->setPaper('a4', 'portrait');
        // Save, download, or show the PDF
        return $pdf->download('.pdf');
    }

    public function downloadSK(Request $request)
    {
        $data = Tunjangan::with('aktivis', 'provinces', 'regencies', 'districts', 'villages', 'skTunjangan')->findOrFail($request->id);
        $no_lengkap = $data->skTunjangan->name;
        $anak_ke = 0;
        $tunjangan_anak = Tunjangan::where('id_user', $data->id_user)->where('jenis', 'Anak')->count();
        setlocale(LC_TIME, 'id');
        $tgl_acc = Carbon::parse($data->tanggal_acc)->formatLocalized('%e %B %Y');

        if ($tunjangan_anak == 3) {
            $items = Tunjangan::where('id_user', $data->id_user)->where('jenis', 'Anak')->get();
            if ($items->sortBy('created_at')->first()->id == $data->id) {
                $anak_ke = 1;
            } elseif ($items->sortByDesc('created_at')->first()->id == $data->id) {
                $anak_ke = 3;
            } else {
                $anak_ke = 2;
            }
        } else {
            $anak_ke = $tunjangan_anak++;
        }

        setlocale(LC_TIME, 'id');
        $data2 = User::with('atasan.aktivis_atasan', 'atasan.bidang')->where('id', $data->id_user)->first();
        $now = Carbon::now()->formatLocalized('%e %B %Y');
        $tgl_lahir = Carbon::parse($data->tanggal_lahir)->formatLocalized('%e %B %Y');
        $tgl_menikah = Carbon::parse($data->tanggal_menikah)->formatLocalized('%e %B %Y');


        // Generate the PDF
        $pdf = PDF::loadView('skTunjangan', compact('data', 'data2', 'now', 'tgl_lahir', 'tgl_menikah', 'anak_ke', 'no_lengkap', 'tgl_acc'));
        $pdf->setPaper('a4', 'portrait');
        // Save, download, or show the PDF
        return $pdf->download('.pdf');
    }

    public function verifikasiTunjangan($id_user, $id)
    {

        $tunjangan = Tunjangan::with('aktivis')->findOrFail($id);
        $message = '';

        \DB::beginTransaction();
        try {
            //code...
            $tunjangan->update([
                'id_verifikator' => $id_user,
                'status' => 'disetujui',
                'tgl_acc' => Carbon::now()->toDateString()
            ]);
            $message = 'Pengajuan Tunjangan Atas Nama ' . $tunjangan->name . 'disetujui';

            // generate sk
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
            $suratS = Pengaturan::with('suratTunjangan')->where('periode', Carbon::now()->year)->where('id_cu', Auth::user()->id_cu)->select('tunjangan')->first();
            $no_user_aktif = SuratKodeTemp::where('id_surat_kode', $suratS->suratTunjangan->id_surat_kode)->where('id_user', $id_user)->where('id_surat', null)->first();
            $no_user_nonaktif = SuratKodeTemp::onlyTrashed()->where('id_surat_kode', $suratS->suratTunjangan->id_surat_kode)->where('id', $id_user)->first();
            $no_user_lain_nonaktif = SuratKodeTemp::onlyTrashed()->where('id_surat_kode', $suratS->suratTunjangan->id_surat_kode)->where('id_surat', null)->orderBy('kode', 'asc')->first();

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
                    'id_surat_kode' => $suratS->suratTunjangan->id_surat_kode,
                    'kode' => $nomor,
                    'periode' => $tahun
                ]);
                $id_kode_temp = $kode_temp->id;
                SuratKode::where('id', $suratS->suratTunjangan->id_surat_kode)->update([
                    'kode' => $nomor
                ]);
            }

            $suratKode = SuratKode::where('id', $suratS->suratTunjangan->id_surat_kode)->first();
            if ($nomor >= $suratKode->kode) {
                SuratKode::where('id', $suratS->suratTunjangan->id_surat_kode)->update([
                    'kode' => $nomor
                ]);
            }

            $no_lengkap = $nomor . '/' . $suratS->suratTunjangan->name . '/' . $bulan . '/' . $tahun;

            $dokumen = Dokumen::create([
                'id_cu' => $tunjangan->id_cu,
                'id_dokumen_kategori' => null,
                'name' => 'SKTUNJANGAN_' . $tunjangan->name,
                'status' => 'INTERNAL',
                'format' => 'upload',
                'tipe' => 'pdf',
                'keterangan' => 'Tunjangan ' . $tunjangan->jenis . ' ' . $tunjangan->aktivis->name
            ]);

            $surat = Surat::create([
                'id_surat_kode' => $suratS->suratTunjangan->id_surat_kode,
                'id_surat_kategori' => $suratS->tunjangan,
                'id_dokumen' => $dokumen->id,
                'id_cu' => $tunjangan->id_cu,
                'name' => $no_lengkap,
                'format' => 'upload',
                'perihal' => 'Tunjangan ' . $tunjangan->jenis . ' ' . $tunjangan->aktivis->name,
                'hal' => 'Tunjangan ' . $tunjangan->jenis . ' ' . $tunjangan->aktivis->name,
                'tujuan' => $tunjangan->aktivis->name,
                'tipe' => 'SURAT KELUAR',
                'periode' => $tahun
            ]);

            SuratKodeTemp::where('id', $id_kode_temp)->update([
                'id_surat' => $surat->id
            ]);

            Tunjangan::where('id', $tunjangan->id)->update([
                'id_sk' => $surat->id
            ]);

            \DB::commit();

            return response()
                ->json([
                    'message' => $message,
                ]);

        } catch (\Throwable $th) {
            \DB::rollback();
            // Handle the exception (e.g., log it, show an error message, etc.)
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }
}
