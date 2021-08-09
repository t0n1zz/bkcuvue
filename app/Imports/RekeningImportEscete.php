<?php

namespace App\Imports;

use Auth;
use App\Cu;
use App\Tp;
use App\System;
use App\AnggotaCu;
use App\AnggotaCuCu;
use App\AnggotaCuCuDraft;
use App\AnggotaCuDraft;
use App\AnggotaCuDraftFailed;
use App\Region\Villages;
use App\Region\Districts;
use App\Region\Provinces;
use App\Region\Regencies;
use App\Rekening;
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
        try {
            $no_cif = array_key_exists('no_cif',$row) ? $row['no_cif'] : '';
            $no_rek = array_key_exists('no_rekening',$row) ? $row['no_rekening'] : 'a';
            $saldo = array_key_exists('saldo',$row) ? $row['saldo'] : '';
            $cu = Cu::where('no_ba', substr($row['no_cu'],2,3))->select('id','no_ba')->first();
            $anggotaCuCu = AnggotaCuCuDraft::where('cu_id',$cu->id)->where('no_ba',$no_cif)->first();
            $anggotaCuFailed = AnggotaCuDraftFailed::where('no_cu', $row['no_cu'])->where('no_ba',$no_cif)->first();
            // print($anggotaCuCu);
            if($anggotaCuCu or $anggotaCuFailed){
                // print("r");
                Rekening::create([
                    'id_cu' => $cu->id,
                    'no_cif' => $no_cif,
                    'no_rek' => $no_rek,
                    'saldo' => $saldo
                ]);
            }else{
                // print("w");
                // RekeningNoAnggota::create([
                //     'id_cu' => $cu->id,
                //     'no_rek' => $no_rek,
                //     'no_cif' => $no_cif,
                // ]);
            }
        } catch (\Throwable $th) {
            print($th->getMessage());
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
