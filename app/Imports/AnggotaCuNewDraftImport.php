<?php

namespace App\Imports;

use Auth;
use App\Cu;
use App\AnggotaCuCu;
use App\AnggotaCuDraft;
use App\Region\Villages;
use App\Region\Districts;
use App\Region\Provinces;
use App\Region\Regencies;
use App\AnggotaProdukCuDraft;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;

class AnggotaCuNewDraftImport implements ToCollection, WithHeadingRow, WithBatchInserts, WithChunkReading
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function collection(Collection $rows)
    {
        $id = Auth::user()->getIdCu();
        $cu = Cu::where('id_cu',$id)->select('id','id_cu')->first();

        foreach ($rows as $row) 
        {
            $provinces = '';
            $regencies = '';
            $districts = '';
            $villages = '';

            if($row['provinsi']){
                $provinces = Provinces::where('name','like', '%' .strtoupper($row['provinsi']). '%')->first();
                $provinces = $provinces->id;
            }
            if($row['kabupaten']){
                $regencies = Regencies::where('name','like', '%' .strtoupper($row['kabupaten']). '%')->first();
                $regencies = $regencies->id;
            }
            if($row['kecamatan']){
                $districts = Districts::where('name','like', '%' .strtoupper($row['kecamatan']). '%')->first();
                $districts = $districts->id;
            }
            if($row['kelurahan']){
                $villages = Villages::where('name','like', '%' .strtoupper($row['kelurahan']). '%')->first();
                $villages = $villages->id;
            }

            $datas = array(
                'id_provinces' => $provinces,
                'id_regencies' => $regencies,
                'id_districts' => $districts,
                'id_villages' => $villages,
                'nik' => $row['nik'],
                'name' => $row['nama'],
                'tempat_lahir' => $row['tempat_lahir'],
                'tanggal_lahir' => $row['tanggal_lahir'],
                'kelamin' => $row['gender'],
                'agama' => $row['agama'],
                'status' => $row['status_pernikahan'],
                'alamat' => $row['alamat'],
                'kontak' => $row['kontak_lain'],
                'darah' => $row['golongan_darah'],
                'tinggi' => $row['tinggi'],
                'email' => $row['email'],
                'hp' => $row['hp'],
                'pendidikan' => $row['pendidikan'],
                'pekerjaan' => $row['pekerjaan'],
                'lembaga' => $row['tempat_bekerja'],
                'alih_waris' => $row['alih_waris'],
            );
            
            $kelas = AnggotaCuDraft::create($datas);

            AnggotaCuCu::create([
				'anggota_cu_id' => $kelas->id,
				'cu_id' => $cu->id_cu,
                'no_ba' => $row['no_ba'],
                'tanggal_masuk' => $row['tanggal_jadi_anggota'],
			]);

            $produks = ProdukCu::where('id_cu',$cu->id_cu)->get();

            foreach($produks as $produk){
                if(array_key_exists($produk->name, $row)){
                    AnggotaProdukCuDraft::create([
                        'anggota_cu_id' => $kelas->id,
                        'produk_cu_id' => $produk_id,
                        'saldo' => $row[$produk->name]
                    ]);
                }
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
