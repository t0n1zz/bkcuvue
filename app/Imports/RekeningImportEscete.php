<?php

namespace App\Imports;

use App\Cu;
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

class RekeningImportEscete implements ToModel, WithHeadingRow, WithBatchInserts, WithChunkReading,ShouldQueue
{
    use Importable;


    public function model(array $row)
    {

        $no_cif = array_key_exists('no_cif',$row) ? $row['no_cif'] : '';

        if(!starts_with($no_cif, '0')){
            try {
                $ba_cu = substr($row['no_cu'],-3);
                if ($row['no_cu']=='32001') {
                    $ba_cu = '007';
                }elseif($row['no_cu']=='601958'){
                    $ba_cu = '065';
                }elseif ($row['no_cu'] == '68') {
                    $ba_cu = '068';
                }elseif ($row['no_cu']== '103') {
                    $ba_cu = '080';
                }else{
                    $ba_cu = substr($row['no_cu'],-3);
                }

                $tenor = array_key_exists('tenor', $row) ? $row['tenor'] : '';
                $lama_sisa_pinjaman ='';

                if ($tenor) {
                        $tanggal = str_replace('/','-',$row['tanggal_buka_rekening']);
                        $tgl1 = strtotime(Carbon::parse($tanggal)->addMonth((int)$tenor)->format('Y-m-d'));
                        $tgl2 =  strtotime(Carbon::now()->format('Y-m-d'));

                        $year1 = date('Y', $tgl1);
                        $year2 = date('Y', $tgl2);

                        $month1 = date('m', $tgl1);
                        $month2 = date('m', $tgl2);

                        $lama_sisa_pinjaman = (($year1 - $year2) * 12) + ($month1 - $month2);
                }


                $cu = Cu::where('no_ba', $ba_cu)->select('id','no_ba')->first();
                $no_rekening = array_key_exists('no_rekening', $row) ? str_replace("'",'',$row['no_rekening']) : '';
                $kode_produk = array_key_exists('kode_produk', $row) ? $row['kode_produk'] : '';
                $saldo = array_key_exists('saldo', $row) ? $row['saldo'] : '';
                $tanggal_buka_rekening_temp = array_key_exists('tanggal_buka_rekening', $row) ? str_replace('/','-',$row['tanggal_buka_rekening']) : '';
                $tanggal_buka_rekening = array_key_exists('tanggal_buka_rekening',$row) ? date('Y-m-d',strtotime($tanggal_buka_rekening_temp)): '';
                $keterangan = array_key_exists('keterangan', $row) ? $row['keterangan'] : '';
                $today = Carbon::now()->format('Y-m-d');
                $tgl_transaksi = array_key_exists('tanggal_transaksi',$row) ?$row['tanggal_transaksi'] : $today;
                $produk_cu = ProdukCu::where('id_cu',$cu->id)->where('kode_produk',$kode_produk)->select('id')->first();
                $no_ba = array_key_exists('no_cif', $row) ? $row['no_cif'] : '';
                $kolek = array_key_exists('kolekbi', $row) ? $row['kolekbi'] : '';
                $dpd = array_key_exists('dpd', $row) ? $row['dpd'] : '';
                $tgl_bayar_terakhir = array_key_exists('tglbayar_terakhir', $row) ? $row['tglbayar_terakhir'] : '';
                $produk_cu_cek = AnggotaProdukCuDraft::where('id_cu',$cu->id)->where('no_rek',$no_rekening)->select('id')->get()->first();
                
                if ($produk_cu && !$produk_cu_cek) {
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
                                'lama_pinjaman'=>trim(str_replace(' Bulan','',$tenor)),
                                'lama_sisa_pinjaman'=>$lama_sisa_pinjaman,
                                'dpd'=>$dpd,
                                'kolekbi'=>$kolek,
                                'tgl_bayar_terakhir'=>$tgl_bayar_terakhir 
                            ]);
                        
                    } catch (\Throwable $th) {
                        QueueException::create(
                            [
                                'line'=> $th->getLine(),
                                'error'=> $th->getMessage(),
                                'id_cu'=> $cu->id,
                                'tipe'=>'Import Rekening',
                                'no_ba'=>$no_ba,
                                'no_rek'=> $no_rekening
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
                            'no_ba'=>$no_ba,
                            'no_rek'=> $no_rekening
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
