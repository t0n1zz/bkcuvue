<?php

namespace App\Imports;

use App\PresensiOffBergilir;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\Importable;

class OffBergilirImport implements ToModel, WithHeadingRow, WithBatchInserts, WithChunkReading, ShouldQueue
{
    use Importable;

    public function model(array $row)
    {
        $tgl = \PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject((int)$row['tanggal']);
        $id_user = $row['id_user'];
        $id_cu = $row['id_cu'];
        $id_aktivis = $row['id_aktivis'];
        PresensiOffBergilir::create(['tanggal' => $tgl, 'id_user' => $id_user, 'id_cu' => $id_cu, 'id_aktivis' => $id_aktivis]);
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
