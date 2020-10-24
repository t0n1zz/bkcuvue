<?php

namespace App\Imports;

use Auth;
use App\Cu;
use App\ProdukCu;
use App\AnggotaCuCu;
use App\AnggotaProdukCuDraft;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;

class ProdukCuDraftImport implements ToModel, WithHeadingRow, WithBatchInserts, WithChunkReading
{
    public function model(array $row)
    {
        $no_ba = array_key_exists('no_ba', $row) ? preg_replace('/[^A-Za-z0-9]/', '',$row['no_ba']) : '';
        $no_rek = array_key_exists('no_rek', $row) ? preg_replace('/[^A-Za-z0-9]/', '',$row['no_rek']) : '';

        // check cu
        $cu = Cu::where('no_ba', $row['no_ba_cu'])->select('id','no_ba')->first();

        // check produk
        $produk = ProdukCu::where('id_cu', $cu->id)->where('kode_produk', $row['kode_produk'])->select('id')->first();

        // check no ba
        $anggotaCuCu = AnggotaCuCu::where('cu_id',$cu->id)->where('no_ba',$no_ba)->select('id','no_ba','anggota_cu_id')->first();

        // if no ba exist
        if($anggotaCuCu){            
            AnggotaProdukCuDraft::create([
                'id_cu' => $cu->id,
                'anggota_cu_id' => $anggotaCuCu->anggota_cu_id,
                'produk_cu_id' => $produk->id,
                'no_rek' => $no_rek,
                'no_ba' => $no_ba,
                'saldo' => array_key_exists('saldo', $row) ? $row['saldo'] : 0,
                'tanggal_buka' => array_key_exists('tanggal_buka', $row) ?\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['tanggal_buka']) : '',
                'tanggal_transaksi' => array_key_exists('tanggal_transaksi', $row) ?\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['tanggal_transaksi']) : '',
                'lama_pinjaman' => array_key_exists('lama_pinjaman', $row) ? $row['lama_pinjaman'] : '',
                'lama_sisa_pinjaman' => array_key_exists('lama_sisa_pinjaman', $row) ? $row['lama_sisa_pinjaman'] : '',
                'tujuan' => array_key_exists('tujuan', $row) ? $row['tujuan'] : '',
                'tanggal_target' => array_key_exists('tanggal_target', $row) ?\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['tanggal_target']) : '',
            ]);
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
