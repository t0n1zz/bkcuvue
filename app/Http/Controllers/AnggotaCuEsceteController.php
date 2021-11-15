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
use Auth;

class AnggotaCuEsceteController extends Controller
{
    private $failures;
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id_cu)
    {
        $anggotaCuDraft = AnggotaCuCuDraft::all()->first();
        $rekeningCuDraft = AnggotaProdukCuDraft::all()->first();
        
        if ($anggotaCuDraft || $rekeningCuDraft) {
            $isDraft = true;
        }else{
            $isDraft = false;
        }

		return response()
		->json([
            'isDraft'=>$isDraft
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
        $kelas = AnggotaCuDraft::all();
			$datas = array_chunk($kelas->toArray(),1000);
			foreach($datas as $key=>$item){
				StoreAnggotaDraft::dispatch($item);
                if ($key==count($datas)-1) {
                    $anggotaProdukCuDraft = AnggotaProdukCuDraft::all();
                    $chunks = array_chunk($anggotaProdukCuDraft->toArray(), 1000);
                    foreach($chunks as $key=>$chunk){
                        if ($key==count($chunks)-1) {
                            SendNotification::dispatch(Auth::user()->id,'NotifSimpanDraft','Draft Berhasil Disimpan');
                        }
                        StoreRekeningDraft::dispatch($chunk);
                    }
                }
			}
        return response()->json([
            'processed'=> true,
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
    public function destroy($id)
    {
        
    }

    public function uploadDraft($id_cu, $id_user){

        
        $path = storage_path('/app/Data CU/'.$id_cu.'/'.$id_user);
        $files = File::allFiles($path);
        $filesCheck = File::allFiles($path);
        $counter = 0;
        $flag = false;
        $counterDataAnggota = glob($path."/*/*/*ANGGOTA*");
        
        foreach ($files as $file) {
            
            $countFileDataAnggota = glob($path."/*/*/*ANGGOTA*");

            if ($counter <=count($counterDataAnggota)) {
                if (stripos($file->getFilename(), 'ANGGOTA')==true || $counter==count($counterDataAnggota)) {

                    if(count($countFileDataAnggota)>1){
                        Excel::import(new AnggotaCuDraftImportEscete, $file);
                        FileUpload::where('real_file_name', $file->getFilename())->delete();
                        unlink($file->getRealPath());
                        $filesCheck = File::allFiles($path);
                        $counter++;
                    }else if(count($countFileDataAnggota)==1 && count($filesCheck)>1){
                        (new AnggotaCuDraftImportEscete)->queue($file)->chain([new UploadProdukCu($path, $id_user)]);
                        FileUpload::where('real_file_name', $file->getFilename())->delete();
                        unlink($file->getRealPath());
                        $filesCheck = File::allFiles($path);
                        $counter++;
                        $flag = true;
                    }else if (count($countFileDataAnggota)==1 && count($filesCheck)==1){
                        (new AnggotaCuDraftImportEscete)->queue($file)->chain([new SendNotification($id_user,'NotifUpload','Data Berhasil Diupload')]);
                        FileUpload::where('real_file_name', $file->getFilename())->delete();
                        unlink($file->getRealPath());
                        $filesCheck = File::allFiles($path);
                        $counter++;
                    }else{
                        if(count($countFileDataAnggota)==0 && $flag==false){
                            $counter++;
                            if(count($filesCheck)==0){
                                SendNotification::dispatch($id_user,'NotifUpload','Data Berhasil Diupload');
                            }else if(count($filesCheck)>0 && $counter>count($counterDataAnggota)){
                                UploadProdukCu::dispatch($path, $id_user);
                            }
                    }
                }
                }
            }
            
        }

        return response()->json([
            'processed'=> true,
        ]);
    }
   
}

