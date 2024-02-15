<?php

namespace App\Http\Controllers;

use App\Bidang;
use App\StrukturOrganisasi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StrukturOrganisasiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id_cu)
    {
        $manager = DB::select('select users.id,users.id_cu,users.id_aktivis,aktivis.name,aktivis_pekerjaan.id_aktivis,aktivis_pekerjaan.tingkat,aktivis_pekerjaan.selesai, aktivis_pekerjaan.id_tempat  from users
        inner join aktivis on aktivis.id = users.id_aktivis inner join aktivis_pekerjaan on aktivis_pekerjaan.id_aktivis = aktivis.id
        where users.id_cu = 0 and users.id_aktivis !=0 and users.status = 1 and aktivis_pekerjaan.selesai is null and aktivis_pekerjaan.id_tempat =1 and (aktivis_pekerjaan.tingkat = 5 or aktivis_pekerjaan.tingkat =6)  order by aktivis.name asc');

        $staff = DB::select('select users.id,users.id_cu,users.id_aktivis,aktivis.name,aktivis_pekerjaan.id_aktivis,aktivis_pekerjaan.tingkat,aktivis_pekerjaan.selesai, aktivis_pekerjaan.id_tempat  from users
        inner join aktivis on aktivis.id = users.id_aktivis inner join aktivis_pekerjaan on aktivis_pekerjaan.id_aktivis = aktivis.id
        where users.id_cu = 0 and users.id_aktivis !=0 and users.status = 1 and aktivis_pekerjaan.selesai is null and aktivis_pekerjaan.id_tempat =1 and (aktivis_pekerjaan.tingkat = 5 or aktivis_pekerjaan.tingkat =6 or aktivis_pekerjaan.tingkat = 7 or aktivis_pekerjaan.tingkat =8)  order by aktivis.name asc');

        $bidang = Bidang::where('id_cu', $id_cu)->get();

        return response()->json([
            'manager' => $manager,
            'staff' => $staff,
            'bidang' => $bidang
        ]);
    }

    public function indexStruktur($id_cu)
    {

        $model = StrukturOrganisasi::with('aktivis', 'aktivis_atasan', 'bidang')->where('id_cu', $id_cu)->get();
        $division = [];
        $indexStaf = 0;
        $indexBidang = 0;
        $current = null;
        foreach ($model as $mod) {
            if ($current != $mod->id_bidang) {
                $current = $mod->id_bidang;
                $indexStaf = 0;
                $indexBidang++;
            }
            $division[$indexBidang]['level'] = $mod->bidang->level;
            $division[$indexBidang]['divisi']['id'] = $mod->bidang->id;
            $division[$indexBidang]['divisi']['name'] = $mod->bidang->name;
            $division[$indexBidang]['manager']['id'] = $mod->id_user_atasan;
            $division[$indexBidang]['manager']['id_aktivis'] = $mod->id_aktivis_atasan;
            $division[$indexBidang]['manager']['name'] = $mod->aktivis_atasan->name;
            $division[$indexBidang]['staff'][$indexStaf]['id_struktur'] = $mod->id;
            $division[$indexBidang]['staff'][$indexStaf]['staf']['id'] = $mod->id_user;
            $division[$indexBidang]['staff'][$indexStaf]['staf']['id_aktivis'] = $mod->id_aktivis;
            $division[$indexBidang]['staff'][$indexStaf]['staf']['name'] = $mod->aktivis->name;
            $indexStaf++;
        }


        return response()->json([
            'model' => $division,
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
    public function store($id_cu, Request $request)
    {

        if ($request->deletedDiv) {
            foreach ($request->deletedDiv as $div) {
                foreach ($div['staff'] as $staf) {
                    StrukturOrganisasi::findOrFail($staf['id_struktur'])->delete();
                }
            }
        }

        if (isset($request->deleted)) {
            foreach ($request->deleted as $delete) {
                $cek =  StrukturOrganisasi::where('id_bidang', $delete['id_bidang'])->where('id_cu', $id_cu)->where('id_user', $delete['id_user'])->where('id_user_atasan', $delete['id_user_atasan'])->delete();
            }
        }

        foreach (collect($request->divisions) as $division) {
            foreach ($division['staff'] as $staf) {
                $cek =  StrukturOrganisasi::where('id_bidang', $division['divisi']['id'])->where('id_cu', $id_cu)->where('id_user', $staf['staf']['id']);
                $cek2 =  StrukturOrganisasi::where('id_user_atasan', $division['manager']['id'])->where('id_cu', $id_cu)->where('id_user', $staf['staf']['id']);
                if (!$cek->first() && !$cek2->first()) {
                    StrukturOrganisasi::create([
                        'id_bidang' => $division['divisi']['id'],
                        'id_aktivis' => $staf['staf']['id_aktivis'],
                        'id_user' => $staf['staf']['id'],
                        'id_user_atasan' => $division['manager']['id'],
                        'id_aktivis_atasan' => $division['manager']['id_aktivis'],
                        'id_cu' => $id_cu
                    ]);
                } else {
                    if ($cek->first()) {
                        $cek->update([
                            'id_bidang' => $division['divisi']['id'],
                            'id_user_atasan' => $division['manager']['id'],
                            'id_aktivis_atasan' => $division['manager']['id_aktivis'],
                        ]);
                    } else {
                        $cek2->update([
                            'id_bidang' => $division['divisi']['id'],
                            'id_user_atasan' => $division['manager']['id'],
                            'id_aktivis_atasan' => $division['manager']['id_aktivis'],
                        ]);
                    }
                }
            }
        }

        return response()->json([
            'message' => 'Berhasil di Simpan',
            'saved' => true
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
