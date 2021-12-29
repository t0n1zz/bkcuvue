<?php

namespace App\Jobs;

use App\AnggotaCu;
use App\AnggotaCuCu;
use App\AnggotaCuCuDraft;
use App\AnggotaProdukCu;
use App\AnggotaProdukCuDraft;
use App\ProdukCu;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class StoreAnggotaDraft implements ShouldQueue
{

    private $chunk;
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($chunk)
    {
        $this->chunk = $chunk;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    { 
      foreach ($this->chunk as $item) {
        try {
          $flag = false;
          $kelas2 = AnggotaCuCuDraft::where('anggota_cu_draft_id', $item['id']);
          $AnggotaCuCek = AnggotaCu::where('nik',$item['nik'])->first();

          $anggotaCuCuCek=null;
          if ($AnggotaCuCek) {
            $anggotaCuCuCek = AnggotaCuCu::where('anggota_cu_id',$AnggotaCuCek->id)->first();
          }
          
          $a = $kelas2->get()->first();

          if ($anggotaCuCuCek) {
            if ($a->no_ba == $anggotaCuCuCek->no_ba) {
              $flag = true;
            }else{
              $flag = false;
            }
          }
          
          $sp = ProdukCu::where('tipe','Simpanan Pokok')->where('id_cu',$a->cu_id)->select('id','id_cu')->get()->first();
          $sp_anggota = null;
          $rek_anggota = null;
          $kelas3 = null;
          $tgl_masuk = $a->tanggal_masuk ? $a->tanggal_masuk : null;

          if ($anggotaCuCuCek) {
            $sp_anggota = AnggotaProdukCu::where('anggota_cu_cu_id',$anggotaCuCuCek->id)->where('produk_cu_id',$sp->id)->select('id','tanggal')->get()->first();
            $rek_anggota = AnggotaProdukCu::where('anggota_cu_cu_id',$anggotaCuCuCek->id)->select('id','tanggal')->get()->first();

            if (!$a->tanggal_masuk) {
              # code...
              if($sp_anggota){
                $tgl_masuk = $sp_anggota->tanggal;
              }elseif($rek_anggota && !$sp_anggota){
                $tgl_masuk = $rek_anggota->tanggal;
              }
            }
          }else{
            $sp_anggota = AnggotaProdukCuDraft::where('no_ba',$a->no_ba)->where('produk_cu_id',$sp->id)->select('id','tanggal_buka')->get()->first();
            $rek_anggota = AnggotaProdukCuDraft::where('no_ba',$a->no_ba)->select('id','tanggal_buka')->get()->first();

            if (!$a->tanggal_masuk) {
              # code...
              if($sp_anggota){
                $tgl_masuk = $sp_anggota->tanggal_buka;
              }elseif($rek_anggota && !$sp_anggota){
                $tgl_masuk = $rek_anggota->tanggal_buka;
              }
            }
          }

          $data = $item; 
          $data2 = $kelas2->get()->toArray();
          
          if ($sp_anggota) {
            if (!$AnggotaCuCek && $flag==false) {
              unset($data['id']);
              $kelas3 = AnggotaCu::create($data + [
                'escete' => 1
              ]);
            }else{
              if ($flag==true) {
                $AnggotaCuCek->update($data + [
                  'escete' => 1
                ]);
                $kelas3 = $AnggotaCuCek;
              }
            }
          }else if ($rek_anggota) {
            if (!$AnggotaCuCek && $flag==false) {
              unset($data['id']);
              $kelas3 = AnggotaCu::create($data + [
                'escete' => 1
              ]);
            }else{
              if ($flag==true) {
                $AnggotaCuCek->update($data + [
                  'escete' => 1
                ]);
                $kelas3 = $AnggotaCuCek;
              }
            }
          }

          if ($kelas3) {
            unset($data2['id']);
            $data2 = array_map(function($dat) use ($kelas3,$tgl_masuk) {
              return array(
                'anggota_cu_id' => $kelas3->id,
                'cu_id' => $dat['cu_id'],
                'tp_id' => $dat['tp_id'],
                'no_ba' => $dat['no_ba'],
                'tanggal_masuk' => $tgl_masuk,
                'tanggal_keluar' => $dat['tanggal_keluar'],
                'keterangan_masuk' => $dat['keterangan_masuk'],
                'keterangan_keluar' => $dat['keterangan_keluar'],
                'created_at' => $dat['created_at'],
                'updated_at' => $dat['updated_at'],
                'escete' => 1
              );
            }, $data2);

            if ($sp_anggota) {
              $anggotaCuCuCek = AnggotaCuCu::where('anggota_cu_id',$kelas3->id)->select('id')->first();
              if (!$anggotaCuCuCek) {
                AnggotaCuCu::insert($data2);
              }else{
                $anggotaCuCuCek->update($data2[0]);
              }
            }else{
              $data2[0]['keterangan_masuk'] = 'CALON ANGGOTA';
              $anggotaCuCuCek = AnggotaCuCu::where('anggota_cu_id',$kelas3->id)->select('id')->first();
              if (!$anggotaCuCuCek) {
                AnggotaCuCu::insert($data2);
              }else{
                $anggotaCuCuCek->update($data2[0]);
              }
            }

            $kelas2->delete();
            \DB::table('anggota_cu_draft')->where('id',$item['id'])->delete();

          }else {
            $kelas2->delete();
            \DB::table('anggota_cu_draft')->where('id',$item['id'])->delete();
          }
        }catch (\Throwable $th) {
          print $th;
          abort(500, $th->getMessage());
        }
      }  
    }
}