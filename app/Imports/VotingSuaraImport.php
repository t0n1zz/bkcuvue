<?php

namespace App\Imports;

use Auth;
use App\VotingSuara;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;

class VotingSuaraImport implements ToModel, WithHeadingRow, WithBatchInserts, WithChunkReading
{
    private $data; 

    public function __construct(array $data = [])
    {
        $this->data = $data; 
    }

    public function model(array $row)
    {   
        $countVotingSuara = $this->data['countVotingSuara'];
        $countSuara = VotingSuara::where('voting_id', $this->data['voting_id'])->count();

        $name = preg_replace('/\s+/', '', $row['kode']);

        if($countSuara < $countVotingSuara){
            $suaraDuplicate = VotingSuara::where('voting_id', $this->data['voting_id'])->where('name', $name)->count();

            if($suaraDuplicate == 0){
				VotingSuara::create([
                    'voting_id' => $this->data['voting_id'],
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
