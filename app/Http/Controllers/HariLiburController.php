<?php

namespace App\Http\Controllers;

use App\HariLibur;
use App\Imports\HariLiburImport;
use App\Jobs\SendNotification;
use Illuminate\Http\Request;

class HariLiburController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = HariLibur::advancedFilter();
        return response()->json([
            'model' => $model,
        ]);
    }

    public function upload(Request $request)
    {
        $file = $request->file('file');
        (new HariLiburImport)->queue($file)->chain([new SendNotification(\Auth::user()->id, 'NotifUpload', 'Data Berhasil Diupload')]);
        return response()->json([
            'message' => 'Data Berhasil Diupload',
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
    public function store(Request $request)
    {
        HariLibur::create([
            'name'=>$request->name,
            'tanggal'=>$request->tanggal
        ]);

        return response()->json([
            'saved'=>true,
            'message' => 'Data Berehasil Disimpan',
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
        $libur = HariLibur::findOrFail($id);

        $libur->update([
            'name'=>$request->name,
            'tanggal'=>$request->tanggal
        ]);

        return response()->json([
            'saved'=>true,
            'message' => 'Berehasil Diupdate',
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
        $kelas = HariLibur::findOrFail($id);

        $name = $kelas->name;
        $kelas->delete();

        return response()
            ->json([
                'deleted' => true,
                'message' =>  'Data berhasil dihapus'
            ]);
    }
}
