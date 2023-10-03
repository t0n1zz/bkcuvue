<?php

namespace App\Http\Controllers;

use App\FileUpload;
use App\Jobs\SendNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class FileUploadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id_cu, $id_user)
    {
        $table_data = FileUpload::where('id_cu',$id_cu)->where('id_user',$id_user)->get();
        return response()
		->json([
			'model' => $table_data
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
        $random = str_random(10);
        $file = $request->file('file');
        $temp_name = $file->getClientOriginalName();
        $fileext = $file->getClientOriginalExtension();
        $filename = $request->file_name.'-'.$random.'.'.$fileext;
        if(Storage::disk('local')->put('Data CU'.'/'.$request->id_cu.'/'.$request->id_user.'/DATA/DATA/'.$filename,  File::get($file))) {
            $fileupload = new FileUpload();
            $fileupload->id_user = $request->id_user;
            $fileupload->id_cu= $request->id_cu;
            $fileupload->file_name = $temp_name;
            $fileupload->real_file_name = $filename;
            $fileupload->tipe = $request->file_name;
            $fileupload->file_path = 'Data CU'.'/'.$request->id_cu.'/'.$request->id_user.'/DATA/DATA/'.$filename; 
            $fileupload->save();
            $table_data = FileUpload::where('id_cu',$request->id_cu)->where('id_user',$request->id_user)->get();
            return response()->json([
                'message'=>$temp_name.' Berhasil diUpload',
                'model'=> $table_data
            ], 200);
        }
        
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
        $data = FileUpload::findOrFail($id)->get()->first();
        $temp_name = $data->file_name;
        $data->delete();
        Storage::disk('local')->delete($data->file_path);
        return response()->json([
            'deleted'=>true,
            'message'=> $temp_name.' Berhasil Dihapus'
        ], 200);
    }
}
