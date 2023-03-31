<?php

namespace App\Http\Controllers;

use App\FormEvaluasi;
use App\EvaluasiKomponent;
use Illuminate\Http\Request;


class FormEvaluasiController extends Controller
{
    protected $message = "Form Evaluasi";

    public function index()
    {
        $table_data = FormEvaluasi::select('id', 'nama', 'created_at', 'updated_at')->advancedFilter();

        return response()
            ->json([
                'model' => $table_data
            ]);
    }

    public function indexSub(Request $request)
    {
        $table_data = EvaluasiKomponent::select('id', 'komponent')->where('evaluasi_form_id', $request->id)->get();

        return response()
            ->json([
                'model' => $table_data
            ]);
    }

    public function get()
    {
        $table_data = FormEvaluasi::get();

        return response()
            ->json([
                'model' => $table_data
            ]);
    }

    public function create()
    {
        return response()
            ->json([
                'form' => FormEvaluasi::initialize(),
                'rules' => FormEvaluasi::$rules,
                'option' => []
            ]);
    }

    public function store(Request $request)
    {
        $name = $request[1];
        $kelas = FormEvaluasi::create(
            [
                'nama' => $name
            ]
        );
        $kelas->save();

        $id = FormEvaluasi::select('id', 'nama')->orderBy('created_at', 'desc')->first();

        foreach ($request[0] as $data) {
            $kelas = EvaluasiKomponent::create(
                [
                    'komponent' => $data['komponen'],
                    'evaluasi_form_id' => $id['id']
                ]
            );

            $kelas->save();
        }


        return response()
            ->json([
                'saved' => true,
                'message' => $this->message . ' ' . $name . ' berhasil ditambah',
                'id' => $kelas->id
            ]);
    }

    public function edit($id)
    {
        $kelas = FormEvaluasi::findOrFail($id);

        return response()
            ->json([
                'form' => $kelas,
                'option' => []
            ]);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, FormEvaluasi::$rules);

        $name = $request->name;
        $kelas = FormEvaluasi::findOrFail($id);

        $kelas->update($request->all());

        return response()
            ->json([
                'saved' => true,
                'message' => $this->message . ' ' . $name . ' berhasil diubah'
            ]);
    }

    public function destroy($id)
    {
        $kelas = FormEvaluasi::findOrFail($id);
        $name = $kelas->name;
        $kelas->delete();

        return response()
            ->json([
                'deleted' => true,
                'message' =>  $this->message . ' ' . $name . ' berhasil dihapus'
            ]);
    }
}
