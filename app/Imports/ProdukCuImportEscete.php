<?php

namespace App\Imports;

use App\Cu;
use App\ProdukCu;
use App\QueueException;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;

class ProdukCuImportEscete implements ToModel, WithHeadingRow, WithBatchInserts, WithChunkReading,ShouldQueue
{
    use Importable;
    public $timeout = 0;

    public function model(array $row)
    {
        // try {

        // $ba_cu = substr($row['no_cu'],-3);
        // if ($row['no_cu']=='32001') {
        //     $ba_cu = '007';
        // }elseif($row['no_cu']=='601958'){
        //     $ba_cu = '065';
        // }elseif ($ba_cu == '68') {
        //     $ba_cu = '068';
        // }
        
        // $cu = Cu::where('no_ba', $ba_cu)->select('id','no_ba')->first();
        // $kode_produk = array_key_exists('kode_produk', $row) ? $row['kode_produk'] : '';
        // $nama = array_key_exists('nama', $row) ? strtoupper($row['nama']) : '';
        // $tipe = array_key_exists('tipe', $row) ? strtoupper($row['tipe']) : '';

        // $cek_produk = ProdukCu::where('id_cu',$cu->id)->where('kode_produk',$kode_produk)->first();

        // if (!$cek_produk) {
        //     ProdukCu::create([
        //         'id_cu'=>$cu->id,
        //         'kode_produk'=>$kode_produk,
        //         'name'=> $nama,
        //         'tipe'=>$tipe
        //     ]);
        // }else{
        //     ProdukCu::where('id_cu',$cu->id)->where('kode_produk',$cek_produk->kode_produk)->update([
        //         'name'=> $nama,
        //         'tipe'=>$tipe
        //     ]);
        // }
        // } catch (\Throwable $th) {
        //     QueueException::create(
        //         [
        //             'kode_produk'=>$kode_produk,
        //             'line'=> $th->getLine(),
        //             'error'=> $th->getMessage(),
        //             'id_cu'=> $cu->id,
        //             'tipe'=>'Import Produk'
        //         ]
        //         );
        // }
        
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