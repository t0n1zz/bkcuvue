<?php

namespace App\Http\Controllers;

use App\AnggotaCuCuDraft;
use App\AnggotaCuDraft;
use App\AnggotaProdukCuDraft;
use App\FileUpload;
use App\Imports\AnggotaCuDraftImportEscete;
use App\Jobs\SendNotification;
use App\Jobs\UploadProdukCu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Maatwebsite\Excel\Facades\Excel;
use App\Jobs\StoreAnggotaDraft;
use App\Jobs\StoreRekeningDraft;
use App\System;
use Auth;


class AnggotaCuEsceteController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id_cu)
    {
        $anggotaCuDraft = AnggotaCuCuDraft::exists();
        $rekeningCuDraft = AnggotaProdukCuDraft::exists();

        if ($anggotaCuDraft || $rekeningCuDraft) {
            $isDraft = true;
        } else {
            $isDraft = false;
        }

        return response()
            ->json([
                'isDraft' => $isDraft
            ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($id_cu)
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $kelas = AnggotaCuDraft::with(['anggota_cu_cu.anggota', 'anggota_cu_by_name.status_jalinan', 'anggota_cu_by_nik.status_jalinan', 'anggota_cu_cu.rekening', 'anggota_cu_cu.sp', 'anggota_cu_cu.anggota.anggota_produk_cu.draft_produk'])->chunkById(200, function ($kelas) {
            $kelas_ktp = System::findOrFail(1);
            $no_nik = count($kelas->where('nik', ''));
            $ktp = $kelas_ktp->nik;
            $val = $ktp + $no_nik + 20;
            $kelas_ktp->nik = str_pad($val, 16, "0", STR_PAD_LEFT);
            $kelas_ktp->update();
            StoreAnggotaDraft::dispatch($kelas->toArray(), $ktp);
        });

        $kelas2 = AnggotaProdukCuDraft::with('anggota_produk_cu', 'anggota_cu_produk')->chunkById(200, function ($kelas2) {
            StoreRekeningDraft::dispatch($kelas2->toArray());
        });


        SendNotification::dispatch(Auth::user()->id, 'NotifSimpanDraft', 'Draft Berhasil Disimpan');

        return response()->json([
            'processed' => true,
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id_cu, $id_user)
    {
        $path = storage_path('/app/Data CU/' . $id_cu . '/' . $id_user);
        $files = File::allFiles($path);
        foreach ($files as $file) {
            unlink($file->getRealPath());
        }

        return response()->json([
            'processed' => true,
            'message' => 'file Berhasil Di clear'
        ]);
    }

    public function uploadDraft($id_cu, $id_user)
    {


        $path = storage_path('/app/Data CU/' . $id_cu . '/' . $id_user);
        $files = File::allFiles($path);
        $filesCheck = File::allFiles($path);
        $counter = 0;
        $flag = false;
        $counterDataAnggota = glob($path . "/*/*/*ANGGOTA*");


        foreach ($files as $file) {

            $countFileDataAnggota = glob($path . "/*/*/*ANGGOTA*");

            if ($counter <= count($counterDataAnggota)) {
                if (stripos($file->getFilename(), 'ANGGOTA') == true || $counter == count($counterDataAnggota)) {

                    if (count($countFileDataAnggota) > 1) {
                        Excel::import(new AnggotaCuDraftImportEscete, $file);
                        FileUpload::where('real_file_name', $file->getFilename())->delete();
                        unlink($file->getRealPath());
                        $filesCheck = File::allFiles($path);
                        $counter++;
                    } else if (count($countFileDataAnggota) == 1 && count($filesCheck) > 1) {
                        (new AnggotaCuDraftImportEscete)->queue($file)->chain([new UploadProdukCu($path, $id_user)]);
                        FileUpload::where('real_file_name', $file->getFilename())->delete();
                        unlink($file->getRealPath());
                        $filesCheck = File::allFiles($path);
                        $counter++;
                        $flag = true;
                    } else if (count($countFileDataAnggota) == 1 && count($filesCheck) == 1) {
                        (new AnggotaCuDraftImportEscete)->queue($file)->chain([new SendNotification($id_user, 'NotifUpload', 'Data Berhasil Diupload')]);
                        FileUpload::where('real_file_name', $file->getFilename())->delete();
                        unlink($file->getRealPath());
                        $filesCheck = File::allFiles($path);
                        $counter++;
                    } else {
                        if (count($countFileDataAnggota) == 0 && $flag == false) {
                            $counter++;
                            if (count($filesCheck) == 0) {
                                SendNotification::dispatch($id_user, 'NotifUpload', 'Data Berhasil Diupload');
                            } else if (count($filesCheck) > 0 && $counter > count($counterDataAnggota)) {
                                UploadProdukCu::dispatch($path, $id_user);
                            }
                        }
                    }
                }
            }
        }

        return response()->json([
            'processed' => true,
        ]);
    }
}