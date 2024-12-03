<?php

namespace App\Http\Controllers;

use Auth;
use App\Cu;
use App\Tp;
use Response;
use App\System;
use App\Aktivis;
use App\ProdukCu;
use App\AnggotaCu;
use App\MitraOrang;
use App\MitraLembaga;
use App\Kubn;
use App\Kombas;
use App\Umkm;
use App\Enterpreneur;
use App\Mentor;
use App\Fasilitator;
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
    $countKubn = 0;
    $countKombas = 0;
    $countUmkm = 0;
    $countEnterpreneur = 0;
    $countMentor = 0;
    $countFasilitator = 0;

    if($user->id_cu != 0){
      $id_cu = $user->id_cu;
      $kelas = Cu::withCount('hasTp')->withCount('hasProduk')->where('id', $user->id_cu)->first();
      $countTp = $kelas->has_tp_count;
      $countProdukCu = $kelas->has_produk_count;
      $countAktivis = Aktivis::with('pekerjaan_aktif.cu')->whereHas('pekerjaan',function($query) use ($id_cu){
        $query->where('tipe',1)->where('id_tempat',$id_cu)->where('status',1);
      })->count();
      $countMitraOrang = MitraOrang::where('id_cu',$id_cu)->count();
      $countMitraLembaga = MitraLembaga::where('id_cu',$id_cu)->count();
      $countKubn = Kubn::where('id_cu',$id_cu)->count();
      $countUmkm = Umkm::where('id_cu',$id_cu)->count();
      $countKombas = Kombas::where('id_cu',$id_cu)->count();
      $countEnterpreneur = Enterpreneur::where('id_cu',$id_cu)->count();
      $countMentor = Mentor::where('id_cu',$id_cu)->count();
      $countFasilitator = Fasilitator::where('id_cu',$id_cu)->count();
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
      $countKubn = Kubn::count();
      $countUmkm = Umkm::count();
      $countKombas = Kombas::count();
      $countEnterpreneur = Enterpreneur::count();
      $countMentor = Mentor::count();
      $countFasilitator = Fasilitator::count();
    }
    
   

    return response()
			->json([
					'countCu' => $countCu,
					'countTp' => $countTp,
					'countProdukCu' => $countProdukCu,
					'countAktivis' => $countAktivis,
					'countMitraOrang' => $countMitraOrang,
					'countMitraLembaga' => $countMitraLembaga,
          'countKubn' => $countKubn,
          'countKombas' => $countKombas,
          'countUmkm' => $countUmkm,
          'countEnterpreneur' => $countEnterpreneur,
          'countMentor' => $countMentor,
          'countFasilitator' => $countFasilitator,
			]);
  }
  
}