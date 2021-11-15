<?php

namespace App\Imports;

use App\Cu;
use App\AnggotaCuCu;
use App\AnggotaCuCuDraft;
use App\AnggotaProdukCuDraft;
use App\ProdukCu;
use App\QueueException;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use DB;

class RekeningImportEscete implements ToModel, WithHeadingRow, WithBatchInserts, WithChunkReading,ShouldQueue
{
    use Importable;


    public function model(array $row)
    {

        $no_cif = array_key_exists('no_cif',$row) ? $row['no_cif'] : '';

        if(!starts_with($no_cif, '0')){
            try {
                $cu = Cu::where('no_ba', substr($row['no_cu'],-3))->select('id','no_ba')->select('id')->first();
                $no_rekening = array_key_exists('no_rekening', $row) ? str_replace("'",'',$row['no_rekening']) : '';
                $kode_produk = array_key_exists('kode_produk', $row) ? $row['kode_produk'] : '';
                $saldo = array_key_exists('saldo', $row) ? $row['saldo'] : '';
                $tanggal_buka_rekening_temp = array_key_exists('tanggal_buka_rekening', $row) ? str_replace('/','-',$row['tanggal_buka_rekening']) : '';
                $tanggal_buka_rekening = array_key_exists('tanggal_buka_rekening',$row) ? date('Y-m-d',strtotime($tanggal_buka_rekening_temp)): '';
                $tenor = array_key_exists('tenor', $row) ? $row['tenor'] : '';
                $keterangan = array_key_exists('keterangan', $row) ? $row['keterangan'] : '';
                $today = Carbon::now()->format('Y-m-d');
                $tgl_transaksi = array_key_exists('tanggal_transaksi',$row) ?$row['tanggal_transaksi'] : $today;
                $produk_cu = ProdukCu::where('id_cu',$cu->id)->where('kode_produk',$kode_produk)->select('id')->first();
                $no_ba = array_key_exists('no_cif', $row) ? $row['no_cif'] : '';
                
                if ($produk_cu) {
                    try {
                            AnggotaProdukCuDraft::create([
                                'id_cu'=>$cu->id,
                                'no_rek'=> $no_rekening,
                                'no_ba'=> $no_ba,
                                'produk_cu_id'=> $produk_cu->id,
                                'saldo'=> $saldo,
                                'tanggal_buka'=>$tanggal_buka_rekening,
                                'tanggal_transaksi'=>$tgl_transaksi,
                                'tujuan'=>$keterangan,
                                'lama_pinjaman'=>trim(str_replace(' Bulan','',$tenor))
                            ]);
                        
                    } catch (\Throwable $th) {
                        QueueException::create(
                            [
                                'line'=> $th->getLine(),
                                'error'=> $th->getMessage(),
                                'id_cu'=> $cu->id,
                                'tipe'=>'Import Rekening',
                                'no_ba'=>$no_ba
                            ]
                            );
                    }
                    
                }
            } catch (\Throwable $th) {
                    QueueException::create(
                        [
                            'line'=> $th->getLine(),
                            'error'=> $th->getMessage(),
                            'id_cu'=> $cu->id,
                            'tipe'=>'Import Rekening',
                            'no_ba'=>$no_ba
                        ]);
            }
        }
        
    }
    
    public function batchSize(): int
    {
        return 1000;
    }
    
    public function chunkSize(): int
    {
        return 1000;
    }
}
