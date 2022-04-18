<?php

namespace App\Imports;

use Auth;
use App\PemilihanSuara;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;

class PemilihanSuaraImport implements ToModel, WithHeadingRow, WithBatchInserts, WithChunkReading
{
    private $data; 

    public function __construct(array $data = [])
    {
        $this->data = $data; 
    }

    public function model(array $row)
    {   
        $countPemilihanSuara = $this->data['countPemilihanSuara'];
        $countSuara = PemilihanSuara::where('pemilihan_id', $this->data['pemilihan_id'])->count();

        $name = preg_replace('/\s+/', '', $row['kode']);

        if($countSuara < $countPemilihanSuara){
            $suaraDuplicate = PemilihanSuara::where('pemilihan_id', $this->data['pemilihan_id'])->where('name', $name)->count();

            if($suaraDuplicate == 0){
				PemilihanSuara::create([
                    'pemilihan_id' => $this->data['pemilihan_id'],
                    'name' => $name,
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
