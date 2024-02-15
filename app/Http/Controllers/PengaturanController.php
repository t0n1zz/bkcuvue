<?php

namespace App\Http\Controllers;

use App\Pengaturan;
use App\SuratKategori;
use App\SuratKode;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PengaturanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id_cu)
    {
        $model = Pengaturan::where('periode', Carbon::now()->year)->where('id_cu', $id_cu)->first();
        return response()->json([
            'model' => $model,
        ]);
    }

    public function indexKategori($id_cu)
    {
        $model = SuratKode::with('haskategori')->where('id_cu', $id_cu)->where('periode', 2024)->get();
        $kategori = [];
        foreach ($model as $mod) {
            foreach ($mod->haskategori as $kat) {
                array_push($kategori, $kat);
            }
        }


        return response()->json([
            'model' => $kategori,
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
    public function store(Request $request, $id_cu)
    {
        if ($request->id) {
            $pengaturan = Pengaturan::findOrFail($request->id);
            $pengaturan->mkg = $request->mkg;
            $pengaturan->cuti = $request->cuti;
            $pengaturan->tunjangan = $request->tunjangan;
            $pengaturan->save();
        } else {
            Pengaturan::create([
                'id_cu' => $id_cu,
                'cuti' => $request->cuti,
                'mkg' => $request->mkg,
                'tunjangan' => $request->tunjangan,
                'periode' => Carbon::now()->year
            ]); //
        }

        return response()
            ->json([
                'saved' => true,
                'message' => 'Berhasil Disimpan'
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
