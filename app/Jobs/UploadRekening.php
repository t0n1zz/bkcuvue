<?php

namespace App\Jobs;

use App\AnggotaCuEscete;
use App\FileUpload;
use App\Imports\RekeningImportEscete;
use Google\Service\SQLAdmin\Flag;
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
    public $timeout = 0;

    private $path,$id_user;
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($path,$id_user)
    {
        $this->path = $path;
        $this->id_user = $id_user;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $files = File::allFiles($this->path);
        $filesCheck = glob($this->path."/*/*/*REKENING*");
        $counter=0;
        $counter_notif = 0;
        $flag = false;
        $counterDataRekening = glob($this->path."/*/*/*REKENING*");
            foreach ($files as $file) {
                $countFileDataRekening = glob($this->path."/*/*/*REKENING*");
                if ($counter<=count($counterDataRekening)) {
                    if (stripos($file->getFilename(), 'REKENING')==true || $counter==count($counterDataRekening)) {
                        if(count($countFileDataRekening)>1){
                            Excel::import(new RekeningImportEscete, $file);
                            FileUpload::where('real_file_name', $file->getFilename())->delete();
                            unlink($file->getRealPath());
                            $filesCheck = glob($this->path."/*/*/*REKENING*");
                            $counter++;
                        }else if (count($countFileDataRekening)==1 && count($filesCheck)==1){
                            (new RekeningImportEscete)->queue($file)->chain([new SendNotification($this->id_user,'NotifUpload','Data Berhasil Diupload')]);
                            FileUpload::where('real_file_name', $file->getFilename())->delete();
                            unlink($file->getRealPath());
                            $filesCheck = glob($this->path."/*/*/*REKENING*");
                            $counter++;
                            $flag = true;
                        }elseif(count($countFileDataRekening)==0 && $flag==false && $counter_notif==0){
                            SendNotification::dispatch($this->id_user,'NotifUpload','Data Berhasil Diupload');
                            $counter_notif++;
                        }
                    }
                }
            }
        }
}