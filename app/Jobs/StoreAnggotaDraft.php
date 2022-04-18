<?php

namespace App\Jobs;

use App\AnggotaCu;
use App\AnggotaCuCu;
use App\AnggotaProdukCu;
use App\AnggotaProdukCuTransaksi;
use App\QueueException;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Cache;

class StoreAnggotaDraft implements ShouldQueue
{

    private $chunk,$arrayCheck,$nikCount;
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($chunk,$nikCount)
    {
        $this->chunk = $chunk;
        $this->nikCount = $nikCount;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        $arrayCheck = (int) Cache::get('nik');
        $counter = 0;
        $flag = false;
      
        foreach ($this->chunk as $item) {
            try {
              $anggotaCuByName = $item['anggota_cu_by_name']['id'];
              $anggotaCuByNik = $item['anggota_cu_by_nik']['id'];

                $kelas2 = null;
                if(array_key_exists('anggota_cu_cu',$item)){
                    if ($item['anggota_cu_cu'] !=null) {
                      $kelas2 = $item['anggota_cu_cu'];
                    }
                }


                $nik = $item['nik'];

                if($anggotaCuByNik){
                    $nik = $item['anggota_cu_by_nik']['nik'];
                }else if($anggotaCuByName && !$anggotaCuByNik){
                  if(starts_with($item['anggota_cu_by_name']['nik'], '0') && strlen($nik) == 16 && preg_match('/[A-Za-z]/', $nik)==false && !starts_with($nik, '0')){
                    $nik = $item['nik'];
                  }else{
                    $nik = $item['anggota_cu_by_name']['nik'];
                  } 
                }else if((str_starts_with($item['nik'],'0') && (!$anggotaCuByName || !$anggotaCuByNik)) || $nik == '' || $nik == null || preg_match('/[A-Za-z]/', $nik)==true || strlen($nik)<16){
                  $nik = str_pad($arrayCheck,16,"0",STR_PAD_LEFT);
                  $arrayCheck++;
                  $counter++;
                }
                
                
                if ($kelas2 != null) {
                  if(array_key_exists('anggota',$kelas2[0])){
                    $a = $kelas2[0];
                  }else{
                    $a = null;
                  }
                }else{
                  $a = null;
                }
                
                
                $sp_anggota = null;
                $rek_anggota = null;
                $tgl_masuk = $a['tanggal_masuk'] ? $a['tanggal_masuk'] : null;

                if($a){
            
                   $sp_anggota = collect($a['rekening'])->where('produk_cu_id', $a['sp']['id'])->first();
                   if(!$sp_anggota && count($a['rekening'])>0){
                      $rek_anggota = $a['rekening'][0];
                   }else{
                     $rek_anggota = null;
                   }
                }

                

                  if (!$a['tanggal_masuk']) {
                     if($sp_anggota){
                       $tgl_masuk = $sp_anggota['tanggal_buka'];
                     }elseif($rek_anggota && !$sp_anggota){
                       $tgl_masuk = $rek_anggota['tanggal_buka'];
                     }
                  }

              
                 $data = [
                   'id'=> $item['id'],
                   'nik'=> $nik,
                   'name'=> $item['name'],
                   'tempat_lahir'=> $item['tempat_lahir'],
                   'tanggal_lahir'=> $item['tanggal_lahir'],
                   'kelamin'=> $item['kelamin'],
                   'agama'=> $item['agama'],
                   'status'=> $item['status'],
                   'status_jalinan'=> $item['status_jalinan'],
                   'alamat'=> $item['alamat'],
                   'kontak'=> $item['kontak'],
                   'gambar'=> $item['gambar'],
                   'darah'=> $item['darah'],
                   'tinggi'=> $item['tinggi'],
                   'email'=> $item['email'],
                   'hp'=> $item['hp'],
                   'pendidikan'=> $item['pendidikan'],
                   'jabatan'=> $item['jabatan'],
                   'organisasi'=> $item['organisasi'],
                   'lembaga'=> $item['lembaga'],
                   'penghasilan'=> $item['penghasilan'],
                   'pengeluaran'=> $item['pengeluaran'],
                   'ahli_waris'=> $item['ahli_waris'],
                   'npwp'=> $item['npwp'],
                   'tanggal_meninggal'=> $item['tanggal_meninggal'],
                   'tanggal_cacat'=> $item['tanggal_cacat'],
                   'rt'=> $item['rt'],
                   'rw'=> $item['rw'],
                   'kk'=> $item['kk'],
                   'nama_ibu'=> $item['nama_ibu'],
                   'pekerjaan'=> $item['pekerjaan'],
                   'suku'=> $item['suku'],
                 ]; 
                   
                 $data2 = $kelas2;
 
                 unset($data['id']);
                 unset($data2['id']);
                 $id =null;
                 if ($sp_anggota || ($a['anggota'] && $kelas2[0]['anggota']['keterangan_masuk']!='CALON ANGGOTA')) {
                     if (!$anggotaCuByName && !$anggotaCuByNik) {
                       $kelas3 = AnggotaCu::create($data + [
                        'escete' => 1]);
                       $id = $kelas3->id;
                     }else{
                       if($anggotaCuByName){
                        \DB::table('anggota_cu')->where('id',$anggotaCuByName)->update($data + [
                          'escete' => 1]);
                        $id = $anggotaCuByName;
                       }elseif($anggotaCuByNik){
                        \DB::table('anggota_cu')->where('id',$anggotaCuByNik)->update($data+ [
                          'escete' => 1]);
                        $id = $anggotaCuByNik;
                       }
                     }
                 }else if ($rek_anggota || ($a['anggota'] && $kelas2[0]['anggota']['keterangan_masuk']=='CALON ANGGOTA')) {
                     if (!$anggotaCuByName && !$anggotaCuByNik) {
                       $kelas3 = AnggotaCu::create($data + [
                        'escete' => 1]);
                       $id = $kelas3->id;
                     }else{
                      if($anggotaCuByName){
                        \DB::table('anggota_cu')->where('id',$anggotaCuByName)->update($data + [
                          'escete' => 1]);
                        $id = $anggotaCuByName;
                       }elseif($anggotaCuByNik){
                        \DB::table('anggota_cu')->where('id',$anggotaCuByNik)->update($data + [
                          'escete' => 1]);
                        $id = $anggotaCuByNik;
                       }
                     }
                 }
 
                 if ($id) {
                   $data2 = array_map(function($dat) use ($id,$tgl_masuk) {
                       return array(
                         'anggota_cu_id' => $id,
                         'cu_id' => $dat['cu_id'],
                         'tp_id' => $dat['tp_id'],
                         'no_ba' => $dat['no_ba'],
                         'tanggal_masuk' => $tgl_masuk,
                         'tanggal_keluar' => $dat['tanggal_keluar'],
                         'keterangan_masuk' => $dat['keterangan_masuk'],
                         'keterangan_keluar' => $dat['keterangan_keluar'],
                         'escete' => 1
                       );
                   }, $data2);


                   $rekCek = null;
                   if ($sp_anggota || ($a['anggota'] && $kelas2[0]['anggota']['keterangan_masuk']!='CALON ANGGOTA')) {
                       if (!$a['anggota']) {
                         $rekCek = AnggotaCuCu::create($data2[0]);
                         $flag = false;
                       }else{
                        $flag = true;
                        $rekCek = \DB::table('anggota_cu_cu')->where('id',$a['anggota']['id'])->update($data2[0]);
                       }
                   }else if($rek_anggota || ($a['anggota'] && $kelas2[0]['anggota']['keterangan_masuk']=='CALON ANGGOTA')){
                       $data2[0]['keterangan_masuk'] = 'CALON ANGGOTA';
                       if (!$a['anggota']) {
                        $rekCek = AnggotaCuCu::create($data2[0]);
                        $flag = false;
                       }else{
                        \DB::table('anggota_cu_cu')->where('id',$a['anggota']['id'])->update($data2[0]);
                        $flag = true;
                       }
                   }

                   if (($rekCek && $a['rekening']) || $flag == true) {
                     $rekening = $a['rekening'];
                     foreach ($rekening as $value) {
                      try {

                      if($value['anggota_produk_cu']){
                          $selisih_saldo = $value['saldo'] - $value['anggota_produk_cu']['saldo'];
                          \DB::table('anggota_produk_cu')->where('id',$value['anggota_produk_cu']['id'])->update([
                              'produk_cu_id' => $value['produk_cu_id'],
                              'saldo' => $value['saldo'],
                              'no_rek' => $value['no_rek'],
                              'tanggal' => $value['tanggal_buka'],
                              'tanggal_target' => $value['tanggal_target'],
                              'lama_pinjaman' => $value['lama_pinjaman'],
                              'lama_sisa_pinjaman'=>$value['lama_sisa_pinjaman'],
                              'tujuan' => $value['tujuan'],
                              'dpd'=>$value['dpd'],
                              'kolekbi'=>$value['kolekbi'],
                              'tgl_bayar_terakhir'=>$value['tgl_bayar_terakhir']
                          ]);	
                  
                          AnggotaProdukCuTransaksi::create([
                              'anggota_produk_cu_id' => $value['anggota_produk_cu']['id'],
                              'saldo' => $selisih_saldo,
                              'saldo_akhir'=> $value['saldo'],
                              'tanggal' => $value['tanggal_transaksi'],
                              'lama_sisa_pinjaman' => $value['lama_sisa_pinjaman'],
                          ]);
              
                          \DB::table('anggota_produk_cu_draft')->where('id',$value['id'])->delete();
                      }else{
                          if (!$value['anggota_produk_cu']) {
                                  $kelas = AnggotaProdukCu::create([
                                      'anggota_cu_id' => $rekCek->anggota_cu_id,
                                      'anggota_cu_cu_id' => $rekCek->id,
                                      'produk_cu_id' => $value['produk_cu_id'],
                                      'saldo' => $value['saldo'],
                                      'no_rek' => $value['no_rek'],
                                      'tanggal' => $value['tanggal_buka'],
                                      'tanggal_target' => $value['tanggal_target'],
                                      'lama_pinjaman' => $value['lama_pinjaman'],
                                      'lama_sisa_pinjaman'=>$value['lama_sisa_pinjaman'],
                                      'tujuan' => $value['tujuan'],
                                      'dpd'=>$value['dpd'],
                                      'kolekbi'=>$value['kolekbi'],
                                      'tgl_bayar_terakhir'=>$value['tgl_bayar_terakhir']
                                  ]);
                          
                                  AnggotaProdukCuTransaksi::create([
                                      'anggota_produk_cu_id' => $kelas->id,
                                      'saldo' => 0,
                                      'saldo_akhir'=> $value['saldo'],
                                      'tanggal' => $value['tanggal_transaksi'],
                                      'lama_sisa_pinjaman' => $value['lama_sisa_pinjaman'],
                                  ]);	
                                  
                                  if($kelas){
                                    \DB::table('anggota_produk_cu_draft')->where('id',$value['id'])->delete();
                                  }
                          }
                      }
              
                      } catch (\Throwable $th) {
                          abort(500, $th->getMessage());
                      }
                     }
                   }
 
                   \DB::table('anggota_cu_cu_draft')->where('id',$kelas2[0]['id'])->delete();
                   \DB::table('anggota_cu_draft')->where('id',$item['id'])->delete();
 
                 }else {
                  \DB::table('anggota_cu_cu_draft')->where('id',$kelas2[0]['id'])->delete();
                   \DB::table('anggota_cu_draft')->where('id',$item['id'])->delete();
                 }

            }catch (\Throwable $th) {
              QueueException::create(
                [
                    'no_ba'=>$data2[0]['no_ba'],
                    'line'=> $th->getLine(),
                    'error'=> $th->getMessage(),
                    'id_cu'=> $data2[0]['cu_id'],
                    'tipe'=>'StoreAnggotaDraft'
                ]
              );
            }

        } 
        
        Cache::forever('nik',Cache::increment('nik',$counter));
    }
}
