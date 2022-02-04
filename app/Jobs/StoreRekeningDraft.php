<?php

namespace App\Jobs;

use App\AnggotaCuCu;
use App\AnggotaProdukCu;
use App\AnggotaProdukCuTransaksi;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class StoreRekeningDraft implements ShouldQueue
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
		$chunk = $this->chunk;
        foreach ($chunk as $item) {
        
        // \DB::beginTransaction(); 
        $anggotaProdukCu=null;
        try {
        $anggotaCuCu = AnggotaCuCu::where('cu_id',$item['id_cu'])->where('no_ba',$item['no_ba'])->select('id','anggota_cu_id')->get()->first();
        if($anggotaCuCu){
            $anggotaProdukCu = AnggotaProdukCu::where('anggota_cu_cu_id',$anggotaCuCu->id)->where('no_rek', $item['no_rek'])->where('produk_cu_id', $item['produk_cu_id'])->select('id','saldo')->get()->first();
        }
        
        if($anggotaProdukCu && $anggotaCuCu){
            $selisih_saldo = $item['saldo'] - $anggotaProdukCu->saldo;
            $anggotaProdukCu->update([
                'produk_cu_id' => $item['produk_cu_id'],
                'saldo' => $item['saldo'],
                'no_rek' => $item['no_rek'],
                'tanggal' => $item['tanggal_buka'],
                'tanggal_target' => $item['tanggal_target'],
                'lama_pinjaman' => $item['lama_pinjaman'],
                'lama_sisa_pinjaman'=>$item['lama_sisa_pinjaman'],
                'tujuan' => $item['tujuan'],
                'dpd'=>$item['dpd'],
                'kolekbi'=>$item['kolekbi'],
                'tanggal_bayar_terakhir'=>$item['tanggal_bayar_terakhir']
            ]);	
    
            AnggotaProdukCuTransaksi::create([
                'anggota_produk_cu_id' => $anggotaProdukCu->id,
                'saldo' => $selisih_saldo,
                'saldo_akhir'=> $item['saldo'],
                'tanggal' => $item['tanggal_transaksi'],
                'lama_sisa_pinjaman' => $item['lama_sisa_pinjaman'],
            ]);

            \DB::table('anggota_produk_cu_draft')->where('id',$item['id'])->delete();
        }else{
            if ($anggotaCuCu && !$anggotaProdukCu) {
                    $kelas = AnggotaProdukCu::create([
                        'anggota_cu_id' => $anggotaCuCu->anggota_cu_id,
                        'anggota_cu_cu_id' => $anggotaCuCu->id,
                        'produk_cu_id' => $item['produk_cu_id'],
                        'saldo' => $item['saldo'],
                        'no_rek' => $item['no_rek'],
                        'tanggal' => $item['tanggal_buka'],
                        'tanggal_target' => $item['tanggal_target'],
                        'lama_pinjaman' => $item['lama_pinjaman'],
                        'lama_sisa_pinjaman'=>$item['lama_sisa_pinjaman'],
                        'tujuan' => $item['tujuan'],
                        'dpd'=>$item['dpd'],
                        'kolekbi'=>$item['kolekbi'],
                        'tanggal_bayar_terakhir'=>$item['tanggal_bayar_terakhir']
                    ]);
            
                    AnggotaProdukCuTransaksi::create([
                        'anggota_produk_cu_id' => $kelas->id,
                        'saldo' => 0,
                        'saldo_akhir'=> $item['saldo'],
                        'tanggal' => $item['tanggal_transaksi'],
                        'lama_sisa_pinjaman' => $item['lama_sisa_pinjaman'],
                    ]);	

                    \DB::table('anggota_produk_cu_draft')->where('id',$item['id'])->delete();
            }
        }

        // \DB::commit();
        } catch (\Throwable $th) {
            print $th;
            // \DB::rollBack();
			abort(500, $th->getMessage());
        }
        
        }
    }
}
