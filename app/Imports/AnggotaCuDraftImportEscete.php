<?php

namespace App\Imports;
use App\Cu;
use App\Tp;
use App\AnggotaCuCuDraft;
use App\AnggotaCuDraft;
use App\QueueException;
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
        
        try {
                if($row['no_cu']=='32001') {
                    $ba_cu = '007';
                }elseif($row['no_cu']=='601958'){
                    $ba_cu = '065';
                }elseif ($row['no_cu']== '68') {
                    $ba_cu = '068';
                }elseif ($row['no_cu']== '103') {
                    $ba_cu = '080';
                }else{
                    $ba_cu = substr($row['no_cu'],-3);
                }

                $no_ba = $row['no_cif'];

                $cu = Cu::where('no_ba', $ba_cu)->select('id','no_ba')->first();
                $tp = Tp::where('id_cu', $cu->id)->where('no_tp','like', '%' . (int)$row['no_tp'])->select('id','id_cu','no_tp')->first();
                
            } catch (\Throwable $th) {
                
            }


            $gender = array_key_exists('kelamin', $row) ? strtoupper($row['kelamin']) : '';
            $status_pernikahan = array_key_exists('status', $row) ? strtoupper($row['status']) : '';
            $agama = array_key_exists('agama', $row) ? strtoupper($row['agama']) : '';
            $ktp = array_key_exists('nik', $row)? preg_replace('/[^A-Za-z0-9]/', '',$row['nik']) : '';
            $nama = array_key_exists('nama', $row) ? $row['nama'] : '';
            $keterangan = array_key_exists('keterangan_jadi_anggota', $row) ? $row['keterangan_jadi_anggota'] : '';
            $keterangan_keluar = array_key_exists('alasan_hapus_cif', $row) ? $row['alasan_hapus_cif'] : '';

            if (stripos($nama, 'qq')) {
                $keterangan = 'ANAK DARI ' . $ktp;
            }

            // check gender
            if($gender == 'L'){
                $gender = 'LAKI-LAKI';
            }else if($gender == 'P'){
                $gender = 'PEREMPUAN';
            }
    
            if(isset($row['tgl_masuk']) && $row['tgl_masuk']!='01/01/0001'){
                $tgl_masuk_temp = str_replace('/','-',$row['tgl_masuk']);
                $tgl_masuk = date('Y-m-d',strtotime($tgl_masuk_temp));
            }else if(!isset($row['tgl_masuk']) || $row['tgl_masuk']=='01/01/0001'){
                $tgl_masuk = null;
            }

            if(isset($row['tanggal_keluar'])){
                $tgl_keluar_temp = str_replace('/','-',$row['tanggal_keluar']);
                $tgl_keluar = date('Y-m-d',strtotime($tgl_keluar_temp));
            }else if(!isset($row['tanggal_keluar'])){
                $tgl_keluar = null;
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


            if($ktp != '' && !starts_with($ktp, '0') && !preg_match("/[a-z]/i", $ktp) && strlen($ktp)==16){
                $anggotaCuDraft = AnggotaCuDraft::where('nik',$ktp)->select('id','nik','name')->first();
                if ($anggotaCuDraft && $anggotaCuDraft->name != $nama) {
                    $ktp = '123456';
                    $anggotaCuDraft=null;
                }
            }

            // check agama
            if($agama == 'KRISTEN'){
                $agama = 'PROTESTAN';
            }else if($agama == 'KHATOLIK'){
                $agama = 'KATOLIK';
            }

            try {
                    $anggotaCuDraft = AnggotaCuDraft::create([
                        'name' => array_key_exists('nama', $row) ? $row['nama'] : '',
                        'id_provinces' => '',
                        'id_regencies' => '',
                        'id_districts' => '',
                        'id_villages' => '',
                        'nik' => $ktp,
                        'npwp' => array_key_exists('npwp', $row) ? $row['npwp'] : '',
                        'tempat_lahir' => array_key_exists('tempat_lahir', $row)? $row['tempat_lahir'] : '',
                        'tanggal_lahir' => array_key_exists('tanggal_lahir', $row) ? date('Y-m-d',strtotime(str_replace('/','-',$row['tanggal_lahir']))) : null,
                        'kelamin' => $gender,
                        'agama' => $agama,
                        'status' => $status_pernikahan,
                        'alamat' => array_key_exists('alamat', $row)? $row['alamat'] : '',
                        'rt' => $row['rt'],
                        'rw' => $row['rw'],
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
                        'nama_ibu' => array_key_exists('nama_ibu',$row) ? $row['nama_ibu'] :'',
                        'kk' => array_key_exists('kk', $row) ? $row['kk'] : '',
                        'escete' => 1
                    ]);
                    
                    if ($anggotaCuDraft && $tp) {
           
                            $anggotaCuCuDraft = AnggotaCuCuDraft::where('cu_id',$cu->id)->where('no_ba',$no_ba)->select('id','no_ba')->first();

                            if (!$anggotaCuCuDraft) {
                                AnggotaCuCuDraft::create([
                                    'anggota_cu_draft_id'=>$anggotaCuDraft->id,
                                    'cu_id' => $cu->id,
                                    'tp_id' => $tp->id,
                                    'no_ba' => $no_ba,
                                    'tanggal_masuk' => $tgl_masuk,
                                    'keterangan_masuk' => $keterangan,
                                    'tanggal_keluar' => $tgl_keluar,
                                    'keterangan_keluar' => $keterangan_keluar,
                                    'escete' => 1
                                ]);    
                            }
                    
                        
                    }
    
            } catch (\Throwable $th) {
                print $th;
                QueueException::create(
                    [
                        'line'=> $th->getLine(),
                        'error'=> $th->getMessage(),
                        'id_cu'=> $cu->id,
                        'tipe'=>'AnggotaCuDraftImportEscete'
                    ]
                );
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
