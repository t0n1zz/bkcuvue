<?php

namespace App\Http\Controllers;

use App\FileUpload;
use App\Imports\AnggotaCuDraftImportEscete;
use App\Jobs\SendNotification;
use App\Jobs\UploadRekening;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;

class FileUploadController extends Controller
{
    private $failures;
    
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
         if(Storage::disk('local')->put('Data CU'.'/'.$request->id_cu.'/'.$request->id_user.'/'.$filename,  File::get($file))) {
             $fileupload = new FileUpload();
             $fileupload->id_user = $request->id_user;
             $fileupload->id_cu= $request->id_cu;
             $fileupload->file_name = $temp_name;
             $fileupload->real_file_name = $filename;
             $fileupload->tipe = $request->file_name;
             $fileupload->file_path = 'Data CU'.'/'.$request->id_cu.'/'.$request->id_user.'/'.$filename; 
             $fileupload->save();
             return response()->json([
                 'message'=>$temp_name.' Berhasil diUpload',
             ], 200);
         }
         return response()->json([
             'message' => "Gagal DiUpload"
         ], 500);
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
    public function destroy($id)
    {
        $data = fileUpload::findOrFail($id)->get()->first();
        $temp_name = $data->file_name;
        $data->delete();
        Storage::disk('local')->delete($data->file_path);
        return response()->json([
            'deleted'=>true,
            'message'=> $temp_name.' Berhasil Dihapus'
        ], 200);
    }

    public function uploadDraft($id_cu, $id_user,$tipe){
        $path = storage_path('/app/Data CU/'.$id_cu.'/'.$id_user);
        $files = File::allFiles($path);
        $filesCheck = File::allFiles($path);
        foreach ($files as $file) {
            if ($tipe == 'batch') {
                ///*ANGGOTA* sesuaikan dengan nama file yang mau diupload ke draft eg: DIKLAT->*DIKLAT*
                $countFileDataAnggota = glob($path."/*/*/*ANGGOTA*");
            }else{
                $countFileDataAnggota = glob($path."/*ANGGOTA*");
            }
            if(stripos($file->getFilename(), 'ANGGOTA')==true && count($countFileDataAnggota)>1){
                Excel::import(new AnggotaCuDraftImportEscete, $file);
                FileUpload::where('real_file_name', $file->getFilename())->delete();
                unlink($file->getRealPath());
                $filesCheck = File::allFiles($path);
            }else if(count($countFileDataAnggota)==1 && count($filesCheck)>1){
                (new AnggotaCuDraftImportEscete)->queue($file)->chain([new UploadRekening($path, $id_user,$tipe)]);
                FileUpload::where('real_file_name', $file->getFilename())->delete();
                unlink($file->getRealPath());
            }else if (count($countFileDataAnggota)==1){
                (new AnggotaCuDraftImportEscete)->queue($file)->chain([new SendNotification($id_user)]);
                FileUpload::where('real_file_name', $file->getFilename())->delete();
                unlink($file->getRealPath());
            }else if(count($countFileDataAnggota)==0 && $filesCheck>0){
                UploadRekening::dispatch($path, $id_user, $tipe);
            }
        }

        return response()->json([
            'processed'=> true,
        ]);
    }
   
}

