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
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\Importable;

class AnggotaCuDraftImportEscete implements ToModel, WithHeadingRow, WithBatchInserts, WithChunkReading,ShouldQueue
{
    use Importable;
    public function model(array $row)
    {   
        $no_cif = array_key_exists('no_cif',$row) ? $row['no_cif'] : '';
        if(!starts_with($no_cif, '0')){
            // print($no_cif.'/n');
            try {
                $gender = array_key_exists('kelamin', $row) ? strtoupper($row['kelamin']) : '';
                $status_pernikahan = array_key_exists('status', $row) ? strtoupper($row['status']) : '';
                $agama = array_key_exists('agama', $row) ? strtoupper($row['agama']) : '';
                $ktp = array_key_exists('nik', $row)? preg_replace('/[^A-Za-z0-9]/', '',$row['nik']) : '';
                $no_ba = array_key_exists('no_ba', $row) ? preg_replace('/[^A-Za-z0-9]/', '',$row['no_ba']) : '';
                // print $no_ba."\n";
                $cu = Cu::where('no_ba', substr($row['no_cu'],2,3))->select('id','no_ba')->first();
                $tp = Tp::where('id_cu', $cu->id)->where('no_tp','like', '%' . (int)$row['no_tp']. '%')->select('id','id_cu','no_tp')->first();
           
    
            // check gender
            if($gender == 'L'){
                $gender = 'LAKI-LAKI';
            }else if($gender == 'P'){
                $gender = 'PEREMPUAN';
            }
    
            if(isset($row['tgl_masuk'])){
                $tgl_masuk_temp = str_replace('/','-',$row['tgl_masuk']);
                $tgl_masuk = date('Y-m-d',strtotime($tgl_masuk_temp));
            }else if(!isset($row['tgl_masuk'])){
                $tgl_masuk = null;
            }
    
             // check nama ibu
             if($row['nama_ibu']!= 0 || $row['nama_ibu']!=null){
                $nama_ibu = array_key_exists('nama_ibu',$row) ? $row['nama_ibu'] :'';
            }else{
                $nama_ibu = '';
            }
    
            //check rt
            if($row['rt']!=null || $row['rt']!=''){
                $rt = (int)$row['rt'];
            }else{
                $rt ='';
            }
    
            //check rw
            if($row['rw']!=null || $row['rw']!=''){
                $rw = (int)$row['rw'];
            }else{
                $rw ='';
            }
    
            // check status
            if($status_pernikahan == 'KW'){
                $status_pernikahan = 'MENIKAH';
            }else if($status_pernikahan == 'TK'){
                $status_pernikahan = 'BELUM MENIKAH';
            }
    
            // check ahli waris
            if(array_key_exists('ahli_waris', $row)){
                $ahli_waris = array_key_exists('ahli_waris', $row) ? $row['ahli_waris'] : '';
            }else{
                $ahli_waris = array_key_exists('alih_waris', $row) ? $row['alih_waris'] : '';
            }
    
            // check nik / ktp
            if($ktp != '' && !starts_with($ktp, '0')){
                $anggotaCu = AnggotaCu::where('nik',$ktp)->select('id','nik')->first();
                $anggotaCuDraft = AnggotaCuDraft::where('nik',$ktp)->select('id','nik')->first();
            }else{
                $kelas_ktp = System::findOrFail(1);
                $ktp = $kelas_ktp->nik;
                $val = $ktp + 1;
                $kelas_ktp->nik = str_pad($val,16,"0",STR_PAD_LEFT);
                $kelas_ktp->update();
    
                $anggotaCu = null;
                $anggotaCuDraft = null;
            }
    
            // check agama
            if($agama == 'KRISTEN'){
                $agama = 'PROTESTAN';
            }else if($agama == 'KHATOLIK'){
                $agama = 'KATOLIK';
            }
    
            // check no ba
            $anggotaCuCuBA = AnggotaCuCu::where('cu_id',$cu->id)->where('no_ba',$no_ba)->select('id','no_ba')->first();
            $anggotaCuCuDraftBA = AnggotaCuCuDraft::where('cu_id',$cu->id)->where('no_ba',$no_ba)->select('id','no_ba')->first();
            $anggotaCuCuDraftFailed = AnggotaCuDraftFailed::where('no_cu',$row['no_cu'])->where('no_ba',$row['no_cif'])->first();
    
            // if no ba not exist
            if(!$anggotaCuCuBA && !$anggotaCuCuDraftBA && !$anggotaCuCuDraftFailed) {
                // check provinsi
                if(array_key_exists('provinsi', $row) && $row['provinsi']){
                    $provinces = Provinces::where('name','like', '%' .strtoupper($row['provinsi']). '%')->first();
                    $provinces = $provinces ? $provinces->id : '';
                }else{
                    $provinces = '';
                }
                // check kabupaten
                if(array_key_exists('kabupaten', $row) && $row['kabupaten']){
                    if($provinces != ''){
                        $regencies = Regencies::where('province_id',$provinces)->where('name','like', '%' .strtoupper($row['kabupaten']). '%')->first();
                    }else{
                        $regencies = Regencies::where('name','like', '%' .strtoupper($row['kabupaten']). '%')->first();
                    }
                    $regencies = $regencies ? $regencies->id : '';
                }else{
                    $regencies = '';
                }
                // check kecamatan
                if(array_key_exists('kecamatan', $row) && $row['kecamatan']){
                    if($regencies != ''){
                        $districts = Districts::where('regency_id',$regencies)->where('name','like', '%' .strtoupper($row['kecamatan']). '%')->first();
                    }else{
                        $districts = Districts::where('name','like', '%' .strtoupper($row['kecamatan']). '%')->first();
                    }
                    $districts = $districts ? $districts->id : '';
                }else{
                    $districts = '';
                }
                // check kelurahan
                if(array_key_exists('kelurahan', $row) && $row['kelurahan']){
                    if($districts != ''){
                        $villages = Villages::where('district_id',$districts)->where('name','like', '%' .strtoupper($row['kelurahan']). '%')->first();
                    }else{
                        $villages = Villages::where('name','like', '%' .strtoupper($row['kelurahan']). '%')->first(); 
                    }
                    $villages = $villages ? $villages->id : '';
                }else{
                    $villages = '';
                }
                
                // old data exist
                if($anggotaCu){
                    // check for no_ba
                    $anggotaCuCu = AnggotaCuCu::where('no_ba',$no_ba)->select('id','no_ba')->first();
                    // no old no_ba exist
                    if(!$anggotaCuCu){
                        AnggotaCuCuDraft::create([
                            'anggota_cu_id' => $anggotaCu->id,
                            'cu_id' => $cu->id,
                            'tp_id' => $tp->id,
                            'no_ba' => $no_ba,
                            'tanggal_masuk' => $tgl_masuk,
                            'keterangan_masuk' => array_key_exists('keterangan_jadi_anggota', $row) ? $row['keterangan_jadi_anggota'] : '',
                        ]);
                    }else{
                        AnggotaCuDraftFailed::create([
                            'name' => array_key_exists('nama', $row) ? $row['nama'] : '',
                            'nik' => array_key_exists('ktp', $row) ? $row['ktp'] : '',
                            'no_ba' => array_key_exists('no_ba', $row) ? $row['no_ba'] : '',
                            'no_cu' => array_key_exists('no_ba_cu', $row) ? $row['no_ba_cu'] : '',
                            'no_tp' => array_key_exists('kode_tp', $row) ? $row['kode_tp'] : '',
                            'tipe' => 'fail 3'
                        ]);
                    }
                }
                // no old data exist
                else if(!$anggotaCu && !$anggotaCuDraft){
                    $anggotaCuDraft = AnggotaCuDraft::create([
                        'name' => array_key_exists('nama', $row) ? $row['nama'] : '',
                        'id_provinces' => $provinces,
                        'id_regencies' => $regencies,
                        'id_districts' => $districts,
                        'id_villages' => $villages,
                        'nik' => $ktp,
                        'npwp' => array_key_exists('npwp', $row) ? $row['npwp'] : '',
                        'tempat_lahir' => array_key_exists('tempat_lahir', $row)? $row['tempat_lahir'] : '',
                        'tanggal_lahir' => array_key_exists('tanggal_lahir', $row) ? date('Y-m-d',strtotime($row['tanggal_lahir'])) : null,
                        'kelamin' => $gender,
                        'agama' => $agama,
                        'status' => $status_pernikahan,
                        'alamat' => array_key_exists('alamat', $row)? $row['alamat'] : '',
                        'rt' => $rt,
                        'rw' => $rw,
                        'kontak' => array_key_exists('kontak_lain', $row) ? $row['kontak_lain'] : '' ,
                        'darah' => array_key_exists('golongan_darah', $row) ? strtoupper($row['golongan_darah']) : '',
                        'tinggi' => array_key_exists('tinggi', $row) ? $row['tinggi'] : '',
                        'email' => array_key_exists('email', $row) ? $row['email'] : '',
                        'hp' => array_key_exists('hp', $row) ? preg_replace('/\s+/', '',$row['hp']) : '',
                        'pendidikan' => array_key_exists('pendidikan', $row) ? strtoupper($row['pendidikan']) : '',
                        'lembaga' => array_key_exists('tempat_kerja', $row) ? $row['tempat_kerja'] : '',
                        'jabatan' => array_key_exists('jabatan', $row) ? strtoupper($row['jabatan']) : '',
                        'organisasi' => array_key_exists('organisasi', $row) ? $row['organisasi'] : '',
                        'ahli_waris' => $ahli_waris,
                        'pekerjaan' => array_key_exists('pekerjaan', $row) ? strtoupper($row['pekerjaan']) : '',
                        'penghasilan' => array_key_exists('rata_rata_penghasilan_perbulan', $row) ? $row['rata_rata_penghasilan_perbulan'] : 0,
                        'pengeluaran' => array_key_exists('rata_rata_pengeluaran_perbulan', $row) ? $row['rata_rata_pengeluaran_perbulan'] : 0,
                        'suku' => array_key_exists('suku', $row) ? strtoupper($row['suku']) : '',
                        'nama_ibu' => $nama_ibu,
                        'kk' => array_key_exists('kk', $row) ? $row['kk'] : ''
                    ]);
    
                    if($anggotaCuDraft){
                            AnggotaCuCuDraft::create([
                                'anggota_cu_draft_id' => $anggotaCuDraft->id,
                                'cu_id' => $cu->id,
                                'tp_id' => $tp->id,
                                'no_ba' => $no_ba,
                                'tanggal_masuk' => $tgl_masuk,
                                'keterangan_masuk' => array_key_exists('keterangan_jadi_anggota', $row) ? $row['keterangan_jadi_anggota'] : '',
                            ]);
                 
                        
                    }else{
                        AnggotaCuDraftFailed::create([
                            'name' => array_key_exists('nama', $row) ? $row['nama'] : '',
                            'nik' => array_key_exists('ktp', $row) ? $row['ktp'] : '',
                            'no_ba' => array_key_exists('no_ba', $row) ? $row['no_ba'] : '',
                            'no_cu' => array_key_exists('no_ba_cu', $row) ? $row['no_ba_cu'] : '',
                            'no_tp' => array_key_exists('kode_tp', $row) ? $row['kode_tp'] : '',
                            'tipe' => 'fail 4'
                        ]);
                    }
                }else {
                    AnggotaCuDraftFailed::create([
                        'name' => array_key_exists('nama', $row) ? $row['nama'] : '',
                        'nik' => array_key_exists('nik', $row) ? $row['nik'] : '',
                        'no_ba' => array_key_exists('no_ba', $row) ? $row['no_ba'] : '',
                        'no_cu' => array_key_exists('no_cu', $row) ? $row['no_cu'] : '',
                        'no_tp' => array_key_exists('no_tp', $row) ? $row['no_tp'] : '',
                        'tipe' => 'fail 2'
                    ]);
                }
            }else{
                // AnggotaCuRedundant::create([
                //     'no_cif'=> $no_ba,
                //     'no_cu'=> array_key_exists('no_cu', $row) ? $row['no_cu'] : '',
                //     'no_tp'=> array_key_exists('no_tp', $row) ? $row['no_tp'] : '',
                // ]);
            }
            } catch (\Exception $th) {
                // QueueException::create(
                //     [
                //         'line'=> $th->getLine(),
                //         'error'=> $th->getMessage(),
                //         'no_ba'=> $no_ba,
                //         'cu'=>$cu
                //     ]
                //     );
            }
        }
        else{
            // QueueException::create(
            //     [
            //         'line' => 1,
            //         'error'=> "rek Internal",
            //         'no_ba'=> $row["no_cif"],
            //         'cu'=>$row["no_cu"]
            //     ]
            // );
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
