<?php

namespace App\Imports;

use App\Cu;
use App\ProdukCu;
use App\QueueException;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;

class ProdukCuImportEscete implements ToModel, WithHeadingRow, WithBatchInserts, WithChunkReading
{
    use Importable;
    public $timeout = 0;

    public function model(array $row)
    {
        try {

                if ($row['no_cu'] == '32001') {
                    $ba_cu = '007';
                } elseif ($row['no_cu'] == '601958') {
                    $ba_cu = '065';
                } elseif ($row['no_cu'] == '68') {
                    $ba_cu = '068';
                } elseif ($row['no_cu'] == '103') {
                    $ba_cu = '080';
                } elseif ($row['no_cu'] == '079') {
                    $ba_cu = '079';
                }elseif($row['no_cu']== '49'){
                    $ba_cu = '049';
                } else {
                    $ba_cu = substr($row['no_cu'], -3);
                }

                $cu = Cu::where('no_ba', $ba_cu)->select('id', 'no_ba')->first();
        
        $kode_produk = array_key_exists('kode_produk', $row) ? $row['kode_produk'] : '';
        $nama = array_key_exists('nama', $row) ? strtoupper($row['nama']) : '';
        $tipe = array_key_exists('tipe', $row) ? strtoupper($row['tipe']) : '';
        $real_tipe = '';
        
        if($tipe == 'SIMPANAN'){
            $real_tipe = 'Simpanan Non Saham';
        }elseif($tipe == 'PINJAMAN'){
            $real_tipe = 'Pinjaman Umum';
        }elseif($tipe == 'SIMPANAN BERJANGKA'){
            $real_tipe = 'Simpanan Non saham';
        }

        $cek_produk = ProdukCu::where('id_cu',$cu->id)->where('kode_produk',$kode_produk)->first();

        if (!$cek_produk) {
            ProdukCu::create([
                'id_cu'=>$cu->id,
                'kode_produk'=>$kode_produk,
                'name'=> $nama,
                'tipe'=>$real_tipe
            ]);
        }
        } catch (\Throwable $th) {
            
        }
        
    }
    
    public function batchSize(): int
    {
        return 100;
    }
    
    public function chunkSize(): int
    {
        return 100;
    }
}