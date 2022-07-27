<?php

namespace App\Http\Controllers;

use App\KodeKegiatan;
use Illuminate\Http\Request;

class KodeKegiatanController extends Controller
{
    protected $message = "Kode Kegiatan";
    public function index()
    {
        $table_data = KodeKegiatan::advancedFilter();

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
        $data = [
            'kode' => $request->kode,
            'nama' => $request->nama
        ];
        // $this->validate($data, KodeKegiatan::$rules);

        $nama = $request->nama;

        $kelas = KodeKegiatan::create($data);

        return response()
            ->json([
                'saved' => true,
                'message' => $this->message . ' ' . $nama . ' berhasil ditambah',
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
        $data = [
            'kode' => $request->kode,
            'nama' => $request->nama
        ];

        $nama = $request->nama;
        $kelas = KodeKegiatan::findOrFail($id);


        $kelas->update($data);
        return response()
            ->json([
                'saved' => true,
                'message' => $this->message . ' ' . $nama . ' berhasil diubah'
            ]);
    }

    public function destroy($id)
    {
        $kelas = KodeKegiatan::findOrFail($id);
        $nama = $kelas->nama;
        $kelas->delete();

        return response()
            ->json([
                'deleted' => true,
                'message' =>  $this->message . ' ' . $nama . ' berhasil dihapus'
            ]);
    }
}