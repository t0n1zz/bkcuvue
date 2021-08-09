<?php

namespace App\Jobs;

use App\FileUpload;
use App\Imports\RekeningImportEscete;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\File;
use Maatwebsite\Excel\Facades\Excel;
//untuk job yang lain di copy saja file ini dan disesuaikan 
class UploadRekening implements ShouldQueue
{
    private $path,$id_user,$tipe;
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($path,$id_user,$tipe)
    {
        $this->path = $path;
        $this->id_user = $id_user;
        $this->tipe = $tipe;

    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $files = File::allFiles($this->path);
        $filesCheck = File::allFiles($this->path);
            foreach ($files as $file) {
                if ($this->tipe == 'batch') {
                    $countFileDataRekening = glob($this->path."/*/*/*REKENING*");
                }else{
                    $countFileDataRekening = glob($this->path."/*REKENING*");
                }


                if(stripos($file->getFilename(), 'REKENING')==true && count($countFileDataRekening)>1){
                    Excel::import(new RekeningImportEscete, $file);
                    FileUpload::where('real_file_name', $file->getFilename())->delete();
                    unlink($file->getRealPath());
                    $filesCheck = File::allFiles($this->path);
                }else if(count($countFileDataRekening)==1 && count($filesCheck)>1){
                   //ganti SendNotification dengan job upload selanjutnya
                   (new RekeningImportEscete)->queue($file)->chain([new SendNotification($this->id_user)]);
                   FileUpload::where('real_file_name', $file->getFilename())->delete();
                   unlink($file->getRealPath());
                }else if (count($countFileDataRekening)==1){
                    (new RekeningImportEscete)->queue($file)->chain([new SendNotification($this->id_user)]);
                    FileUpload::where('real_file_name', $file->getFilename())->delete();
                    unlink($file->getRealPath());
                }else if(count($countFileDataRekening)==0 && $filesCheck>0){
                    SendNotification::dispatch($this->id_user);
                }
            }
        }
}