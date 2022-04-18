<?php

namespace App\Jobs;

use App\AnggotaCuEscete;
use App\FileUpload;
use App\Imports\ProdukCuImportEscete;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\File;
use Maatwebsite\Excel\Facades\Excel;
use App\Jobs\SendNotification;
use App\Jobs\UploadRekening;

class UploadProdukCu implements ShouldQueue
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
        $filesCheck = File::allFiles($this->path);
        $counter =0;
        $counterDataProduk = glob($this->path."/*/*/*PRODUK*");
            foreach ($files as $file) {
                $countFileDataProduk = glob($this->path."/*/*/*PRODUK*");

                if ($counter<=count($counterDataProduk)) {
                    if (stripos($file->getFilename(), 'PRODUK')==true || $counter==count($counterDataProduk)) {
                        if(count($countFileDataProduk)>1){
                            Excel::import(new ProdukCuImportEscete, $file);
                            FileUpload::where('real_file_name', $file->getFilename())->delete();
                            unlink($file->getRealPath());
                            $filesCheck = File::allFiles($this->path);
                            $counter++;
                        }else if(count($countFileDataProduk)==1 && count($filesCheck)>1){
                           //ganti SendNotification dengan job upload selanjutnya\
                           (new ProdukCuImportEscete)->queue($file)->chain([new UploadRekening($this->path, $this->id_user)]);
                           FileUpload::where('real_file_name', $file->getFilename())->delete();
                           unlink($file->getRealPath());
                           $filesCheck = File::allFiles($this->path);
                           $counter++;
                        }else if (count($countFileDataProduk)==1 && count($filesCheck)==1){
                            (new ProdukCuImportEscete)->queue($file)->chain([new SendNotification($this->id_user,'NotifUpload','Data Berhasil Diupload')]);
                            FileUpload::where('real_file_name', $file->getFilename())->delete();
                            unlink($file->getRealPath());
                            $filesCheck = File::allFiles($this->path);
                            $counter++;
                        }else{
                            $counter++;
                            if(count($countFileDataProduk)==0){
                                if(count($filesCheck)>0 && $counter>count($counterDataProduk)){
                                    UploadRekening::dispatch($this->path, $this->id_user);
                                    $counter++;
                                }else if(count($filesCheck)==0){
                                    SendNotification::dispatch($this->id_user,'NotifUpload','Data Berhasil Diupload');
                                    $counter++;
                            }
                        }
                    }
                    }
                }
                
            }
    }
}
