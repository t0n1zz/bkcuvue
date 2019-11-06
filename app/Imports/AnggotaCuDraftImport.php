<?php

namespace App\Imports;

use Auth;
use App\Cu;
use App\Tp;
use App\AnggotaCu;
use App\AnggotaCuCu;
use App\AnggotaCuCuDraft;
use App\AnggotaCuDraft;
use App\Region\Villages;
use App\Region\Districts;
use App\Region\Provinces;
use App\Region\Regencies;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;


class AnggotaCuDraftImport implements ToModel, WithHeadingRow, WithBatchInserts, WithChunkReading
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        $provinces = '';
        $regencies = '';
        $districts = '';
        $villages = '';
        $jabatan = '';
        $ktp = preg_replace('/[^A-Za-z0-9]/', '',$row['ktp']);

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

        $cu = Cu::where('no_ba', $row['no_ba_cu'])->select('id','no_ba')->first();
        $tp = Tp::where('no_tp', $row['kode_tp'])->select('id','no_tp')->first();

        $anggotaCu = AnggotaCu::where('nik',$ktp)->select('id','nik')->first();
        $anggotaCuDraft = AnggotaCuDraft::where('nik',$ktp)->select('id','nik')->first();

        if(!$anggotaCu && !$anggotaCuDraft){
            if($row['nama']){
                $anggotaCu = AnggotaCuDraft::create([
                    'name' => $row['nama'],
                    'id_provinces' => $provinces,
                    'id_regencies' => $regencies,
                    'id_districts' => $districts,
                    'id_villages' => $villages,
                    'nik' => $ktp,
                    'npwp' => $row['npwp'],
                    'tempat_lahir' => $row['tempat_lahir'],
                    'tanggal_lahir' => \PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['tanggal_lahir']),
                    'kelamin' => strtoupper($row['gender']),
                    'agama' => strtoupper($row['agama']),
                    'status' => strtoupper($row['status_pernikahan']),
                    'alamat' => $row['alamat'],
                    'rt' => $row['rt'],
                    'rw' => $row['rw'],
                    'kontak' => $row['kontak_lain'],
                    'darah' => strtoupper($row['golongan_darah']),
                    'tinggi' => $row['tinggi'],
                    'email' => $row['email'],
                    'hp' => preg_replace('/\s+/', '',$row['hp']),
                    'pendidikan' => strtoupper($row['pendidikan']),
                    'lembaga' => $row['tempat_kerja'],
                    'jabatan' => strtoupper($row['jabatan']),
                    'organisasi' => $row['organisasi'],
                    'penghasilan' => $row['rata_rata_penghasilan_perbulan'],
                    'pengeluaran' => $row['rata_rata_pengeluaran_perbulan'],
                    'alih_waris' => $row['alih_waris'],
                    'pekerjaan' => strtoupper($row['pekerjaan']),
                    'suku' => strtoupper($row['suku']),
                    'nama_ibu' => $row['nama_ibu'],
                    'kk' => $row['kk']
                ]);
            }
        }

        if($anggotaCu){
            AnggotaCuCuDraft::create([
                'anggota_cu_draft_id' => $anggotaCu->id,
                'cu_id' => $cu->id,
                'tp_id' => $tp->id,
                'no_ba' => $row['no_ba'],
                'tanggal_masuk' => \PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['tanggal_jadi_anggota']),
                'keterangan_masuk' => $row['keterangan_jadi_anggota'],
            ]);
        }
        
        return $anggotaCu;

        // $produks = ProdukCu::where('id_cu',$cu->id_cu)->get();

        // foreach($produks as $produk){
        //     if(array_key_exists($produk->name, $row)){
        //         AnggotaProdukCuDraft::create([
        //             'anggota_cu_id' => $kelas->id,
        //             'produk_cu_id' => $produk_id,
        //             'saldo' => $row[$produk->name],
        //             'tanggal' => $row[$produk->name . ' tanggal']
        //         ]);
        //     }
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
