<?php

namespace App\Imports;

use App\HariLibur;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\Importable;

class HariLiburImport implements ToModel, WithHeadingRow, WithBatchInserts, WithChunkReading, ShouldQueue
{
    use Importable;

    public function model(array $row)
    {
        try {
            //code...
            $tgl = \PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject((int)$row['tanggal']);
            $name = $row['name'];
            HariLibur::create(['tanggal' => $tgl, 'name' => $name]);
        } catch (\Throwable $th) {
            //throw $th;
            dd($th);
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
