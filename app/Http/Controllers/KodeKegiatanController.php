<?php

namespace App\Http\Controllers;

use App\KodeKegiatan;
use Illuminate\Http\Request;

class KodeKegiatanController extends Controller
{
    protected $message = "Kode Kegiatan";

    public function index()
    {
        $table_data = KodeKegiatan::withCount('hasKegiatan')->advancedFilter();

        return response()
            ->json([
                'model' => $table_data
            ]);
    }

    public function create()
    {
        return response()
            ->json([
                'form' => KodeKegiatan::initialize(),
                'rules' => KodeKegiatan::$rules,
                'option' => []
            ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, KodeKegiatan::$rules);

        $name = $request->name;

        $kelas = KodeKegiatan::create($request->all());

        return response()
            ->json([
                'saved' => true,
                'message' => $this->message . ' ' . $name . ' berhasil ditambah',
                'id' => $kelas->id
            ]);
    }

    public function edit($id)
    {
        $kelas = KodeKegiatan::findOrFail($id);

        return response()
            ->json([
                'form' => $kelas,
                'option' => []
            ]);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, KodeKegiatan::$rules);

        $name = $request->name;
        $kelas = KodeKegiatan::findOrFail($id);

        $kelas->update($request->all());

        return response()
            ->json([
                'saved' => true,
                'message' => $this->message . ' ' . $name . ' berhasil diubah'
            ]);
    }

    public function destroy($id)
    {
        $kelas = KodeKegiatan::findOrFail($id);
        $name = $kelas->name;
        $kelas->delete();

        return response()
            ->json([
                'deleted' => true,
                'message' =>  $this->message . ' ' . $name . ' berhasil dihapus'
            ]);
    }
}