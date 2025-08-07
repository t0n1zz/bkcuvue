<?php

namespace App\Jobs;

use App\AnggotaProdukCu;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class StoreRekeningDraft
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
    $transaksi = [];
    $produk = [];
    $deleted = [];
    \DB::beginTransaction();
    foreach ($this->chunk as $value) {
      try {
        if ($value['anggota_produk_cu']) {
          $selisih_saldo = $value['saldo'] - $value['anggota_produk_cu']['saldo'];
          $data1 = [
            'id' => $value['anggota_produk_cu']['id'],
            'produk_cu_id' => $value['produk_cu_id'],
            'saldo' => $value['saldo'],
            'no_rek' => $value['no_rek'],
            'tanggal' => $value['tanggal_buka'],
            'tanggal_target' => $value['tanggal_target'],
            'lama_pinjaman' => $value['lama_pinjaman'],
            'lama_sisa_pinjaman' => $value['lama_sisa_pinjaman'],
            'tujuan' => $value['tujuan'],
            'dpd' => $value['dpd'],
            'kolekbi' => $value['kolekbi'],
            'tanggal_bayar_terakhir' => null
          ];

          $produk[] = $data1;

          // $data = [
          //   'anggota_produk_cu_id' => $value['anggota_produk_cu']['id'],
          //   'saldo' => $selisih_saldo,
          //   'saldo_akhir' => $value['saldo'],
          //   'tanggal' => $value['tanggal_transaksi'],
          //   'lama_sisa_pinjaman' => $value['lama_sisa_pinjaman'],
          //   'created_at' =>  \Carbon\Carbon::now(),
          //   'updated_at' => \Carbon\Carbon::now(),
          // ];

          // $transaksi[] = $data;

          \DB::table('anggota_produk_cu_draft')->where('id', $value['id'])->delete();
        } else {
          if (!$value['anggota_produk_cu'] && $value['anggota_cu_produk']) {

            $kelas = \DB::table('anggota_produk_cu')->insertGetId([
              'anggota_cu_id' => $value['anggota_cu_produk']['anggota_cu_id'],
              'anggota_cu_cu_id' => $value['anggota_cu_produk']['id'],
              'produk_cu_id' => $value['produk_cu_id'],
              'saldo' => $value['saldo'],
              'no_rek' => $value['no_rek'],
              'tanggal' => $value['tanggal_buka'],
              'tanggal_target' => $value['tanggal_target'],
              'lama_pinjaman' => $value['lama_pinjaman'],
              'lama_sisa_pinjaman' => $value['lama_sisa_pinjaman'],
              'tujuan' => $value['tujuan'],
              'dpd' => $value['dpd'],
              'kolekbi' => $value['kolekbi'],
              'tanggal_bayar_terakhir' => null,
              'created_at' =>  \Carbon\Carbon::now(),
              'updated_at' => \Carbon\Carbon::now(),
            ]);

            // $data = [
            //   'anggota_produk_cu_id' => $kelas,
            //   'saldo' => 0,
            //   'saldo_akhir' => $value['saldo'],
            //   'tanggal' => $value['tanggal_transaksi'],
            //   'lama_sisa_pinjaman' => $value['lama_sisa_pinjaman'],
            //   'created_at' =>  \Carbon\Carbon::now(),
            //   'updated_at' => \Carbon\Carbon::now(),
            // ];
            // $transaksi[] = $data;
            if ($kelas) {
              \DB::table('anggota_produk_cu_draft')->where('id', $value['id'])->delete();
            }
          }
        }
        \DB::commit();
      } catch (\Throwable $th) {
        \DB::rollback();
      }
    }
    try {
      // \DB::table('anggota_produk_cu_transaksi')->insert($transaksi);
      $anggotaProdukCU = new AnggotaProdukCu;
      \Batch::update($anggotaProdukCU, $produk, 'id');
    } catch (\Throwable $th) {
      //throw $th;
    }
  }
}
