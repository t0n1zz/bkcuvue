<?php

namespace App\Http\Controllers;

use Auth;
use App\Cu;
use App\Tp;
use Response;
use App\System;
use App\Aktivis;
use App\ProdukCu;
use App\MitraOrang;
use App\MitraLembaga;
use Illuminate\Http\Request;

class SystemController extends Controller
{

  public function version()
  {
    $table_data = System::select('version')->first();
    return response()
        ->json([
            'model' => $table_data
        ]); 
  }

  public function download_file($filename)
  {
    $destinationPath = public_path() . "/files/";
    $file= $destinationPath . $filename;

    return Response::download($file);
  }

  public function download_file_folder($filename, $foldername)
  {
    $destinationPath = public_path() . "/files/" . $foldername . "/";
    $file= $destinationPath . $filename;

    return Response::download($file);
  }

  public function countOrganisasi()
  {
    $user = Auth::user();

    $countCu = 0;
    $countTp = 0;
    $countProdukCu = 0;
    $countAktivis = 0;
    $countMitraOrang = 0;
    $countMitraLembaga = 0;

    if($user->id_cu != 0){
      $id_cu = $user->id_cu;
      $kelas = Cu::withCount('hasTp')->withCount('hasProduk')->where('id', $user->id_cu)->first();
      $countTp = $kelas->has_tp_count;
      $countProdukCu = $kelas->has_produk_count;
      $countAktivis = Aktivis::with('pekerjaan_aktif.cu')->whereHas('pekerjaan',function($query) use ($id_cu){
        $query->where('tipe',1)->where('id_tempat',$id_cu)->where('status',1);
      })->count();
    }else{
      $kelas = Cu::withCount('hasTp')->withCount('hasProduk')->get();
      foreach($kelas as $k){
        $countTp += $k->has_tp_count;
        $countProdukCu += $k->has_produk_count;
      }
      $countAktivis = Aktivis::with('pekerjaan_aktif.cu')->whereHas('pekerjaan',function($query){
        $query->whereIn('tipe',[1,3])->where('status',1);
      })->count();
      $countCu = $kelas->count();
      $countMitraOrang = MitraOrang::count();
      $countMitraLembaga = MitraLembaga::count();
    }

    return response()
			->json([
					'countCu' => $countCu,
					'countTp' => $countTp,
					'countProdukCu' => $countProdukCu,
					'countAktivis' => $countAktivis,
					'countMitraOrang' => $countMitraOrang,
					'countMitraLembaga' => $countMitraLembaga,
			]);
  }
  
}