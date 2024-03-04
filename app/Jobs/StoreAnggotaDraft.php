<?php

namespace App\Jobs;

use App\AnggotaCu;
use App\AnggotaCuCu;
use App\AnggotaProdukCu;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class StoreAnggotaDraft implements ShouldQueue
{
  public $timeout = 0;
  private $chunk, $nikCount, $sp;
  use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

  /**
   * Create a new job instance.
   *
   * @return void
   */
  public function __construct($chunk, $nikCount)
  {
    $this->chunk = $chunk;
    $this->nikCount = $nikCount;
  }

  /**
   * Execute the job.
   *
   * @return void
   */
  public function handle()
  {
    $anggota_cu_cu_insert = [];
    $anggota_cu_cu_update = [];
    $anggota_cu_update = [];
    $deleted = [];
    \DB::beginTransaction();
    foreach ($this->chunk as $item) {
      $flag = false;
      $anggotaCuByName = null;
      $anggotaCuByNik = null;

      try {
        if ($item['anggota_cu_by_name'] != null) {
          $anggotaCuByName = $item['anggota_cu_by_name']['id'];
        }

        if ($item['anggota_cu_by_nik'] != null) {
          $anggotaCuByNik = $item['anggota_cu_by_nik']['id'];
        }


        $kelas2 = null;
        if (array_key_exists('anggota_cu_cu', $item)) {
          if ($item['anggota_cu_cu'] != null) {
            $kelas2 = $item['anggota_cu_cu'];
          }
        }

        $nik = $item['nik'];

        if ($anggotaCuByNik) {
          if (strtoupper(str_replace(',', '', str_replace('.', '', $item['anggota_cu_by_nik']['name']))) == strtoupper(str_replace(',', '', str_replace('.', '', $item['name']))) && $item['anggota_cu_by_nik']['tanggal_lahir'] == $item['tanggal_lahir']) {
            $nik = $item['anggota_cu_by_nik']['nik'];
          } else {
            $arrayCheck = (int) $this->nikCount;
            $nik = str_pad($arrayCheck, 16, "0", STR_PAD_LEFT);
            $this->nikCount++;
          }
        } else if ($anggotaCuByName && !$anggotaCuByNik) {
          if (starts_with($item['anggota_cu_by_name']['nik'], '0') && strlen($nik) == 16 && preg_match('/[A-Za-z]/', $nik) == false && !starts_with($nik, '0')) {
            $nik = $item['nik'];
          } else {
            $nik = $item['anggota_cu_by_name']['nik'];
          }
        } else if ((str_starts_with($item['nik'], '0') && (!$anggotaCuByName || !$anggotaCuByNik)) || $nik == '' || $nik == null || preg_match('/[A-Za-z]/', $nik) == true || strlen($nik) < 16) {
          $arrayCheck = (int) $this->nikCount;
          $nik = str_pad($arrayCheck, 16, "0", STR_PAD_LEFT);
          $this->nikCount++;
        }

        if ($kelas2 != null) {
          if (array_key_exists('anggota', $kelas2[0])) {
            $a = $kelas2[0];
          } else {
            $a = null;
          }
        } else {
          $a = null;
        }

        $sp_anggota = null;
        $rek_anggota = null;
        $tgl_masuk = null;
        $anggota = null;
        if ($a) {
          if ($a['anggota'] != null) {
            $anggota = $a['anggota'];
          }
          $tgl_masuk = $a['tanggal_masuk'] ? $a['tanggal_masuk'] : null;
          $sp_anggota = collect($a['rekening'])->where('produk_cu_id', $a['sp']['id'])->first();
          if (!$sp_anggota && count($a['rekening']) > 0) {
            $rek_anggota = $a['rekening'][0];
          } else {
            $rek_anggota = null;
          }
        }

        if (!$tgl_masuk) {
          if ($sp_anggota) {
            $tgl_masuk = $sp_anggota['tanggal_buka'];
          } elseif ($rek_anggota && !$sp_anggota) {
            $tgl_masuk = $rek_anggota['tanggal_buka'];
          }
        }

        $data = [
          'nik' => $nik,
          'name' => $item['name'],
          'tempat_lahir' => $item['tempat_lahir'],
          'tanggal_lahir' => $item['tanggal_lahir'],
          'kelamin' => $item['kelamin'],
          'agama' => $item['agama'],
          'status' => $item['status'],
          'alamat' => $item['alamat'],
          'kontak' => $item['kontak'],
          'darah' => $item['darah'],
          'tinggi' => $item['tinggi'],
          'email' => $item['email'],
          'hp' => $item['hp'],
          'pendidikan' => $item['pendidikan'],
          'jabatan' => $item['jabatan'],
          'organisasi' => $item['organisasi'],
          'lembaga' => $item['lembaga'],
          'penghasilan' => $item['penghasilan'],
          'pengeluaran' => $item['pengeluaran'],
          'ahli_waris' => $item['ahli_waris'],
          'npwp' => $item['npwp'],
          'rt' => $item['rt'],
          'rw' => $item['rw'],
          'kk' => $item['kk'],
          'nama_ibu' => $item['nama_ibu'],
          'pekerjaan' => $item['pekerjaan'],
          'suku' => $item['suku'],
          'escete' => 1
        ];

        $data2 = $kelas2;

        unset($data2['id']);
        $id = null;
        if ($sp_anggota || $anggota || $rek_anggota) {
          if (!$anggotaCuByName && !$anggotaCuByNik) {
            $data['created_at'] = \Carbon\Carbon::now();
            $data['updated_at'] = \Carbon\Carbon::now();
            $kelas3 = \DB::table('anggota_cu')->insertGetId($data);
            $id = $kelas3;
          } else {
            if ($anggotaCuByName) {
              $data['id'] = $anggotaCuByName;
              $anggota_cu_update[] = $data;
              $id = $anggotaCuByName;
            } elseif ($anggotaCuByNik) {
              $data['id'] = $anggotaCuByNik;
              $anggota_cu_update[] = $data;
              $id = $anggotaCuByNik;
            }
          }
        }

        if ($id) {
          $data2 = array_map(function ($dat) use ($id, $tgl_masuk) {
            return array(
              'anggota_cu_id' => $id,
              'cu_id' => $dat['cu_id'],
              'tp_id' => $dat['tp_id'],
              'no_ba' => $dat['no_ba'],
              'tanggal_masuk' => $tgl_masuk,
              'tanggal_keluar' => $dat['tanggal_keluar'],
              'keterangan_masuk' => $dat['keterangan_masuk'],
              'keterangan_keluar' => $dat['keterangan_keluar'],
              'escete' => 1
            );
          }, $data2);

          if ($sp_anggota || ($a['anggota'] && $kelas2[0]['anggota']['keterangan_masuk'] != 'CALON ANGGOTA')) {
            if (!$a['anggota']) {
              $data2[0]['created_at'] = \Carbon\Carbon::now();
              $data2[0]['updated_at'] = \Carbon\Carbon::now();
              $anggota_cu_cu_insert[] = $data2[0];
            } else {
              // if(!$sp_anggota){
              //     $data2[0]['keterangan_masuk']="CALON ANGGOTA";
              // }
              $data2[0]['id'] = $a['anggota']['id'];
              unset($data2[0]['tanggal_masuk']);
              unset($data2[0]['anggota_cu_id']);
              unset($data2[0]['cu_id']);
              unset($data2[0]['no_ba']);
              $anggota_cu_cu_update[] = $data2[0];
            }
          } else if ((!$sp_anggota && $rek_anggota) || (!$sp_anggota && $kelas2[0]['anggota']['keterangan_masuk'] == 'CALON ANGGOTA')) {
            $data2[0]['keterangan_masuk'] = 'CALON ANGGOTA';
            if (!$a['anggota']) {
              $data2[0]['created_at'] = \Carbon\Carbon::now();
              $data2[0]['updated_at'] = \Carbon\Carbon::now();
              $anggota_cu_cu_insert[] = $data2[0];
            } else {
              $data2[0]['id'] = $a['anggota']['id'];
              unset($data2[0]['tanggal_masuk']);
              unset($data2[0]['anggota_cu_id']);
              unset($data2[0]['cu_id']);
              unset($data2[0]['no_ba']);
              $anggota_cu_cu_update[] = $data2[0];
            }
          }

          if ($a['anggota']) {
            if ($a['anggota']['anggota_produk_cu']) {
              foreach ($a['anggota']['anggota_produk_cu'] as $value) {
                $dataHapus = [];
                if ($value['draft_produk'] == null || !$value['draft_produk']) {
                  $dataHapus = [
                    'id' => $value['id'],
                    'deleted_at' => \Carbon\Carbon::now()
                  ];
                  $deleted[] = $dataHapus;
                }
              }
            }
          }

          \DB::table('anggota_cu_cu_draft')->where('id', $kelas2[0]['id'])->delete();
          \DB::table('anggota_cu_draft')->where('id', $item['id'])->delete();
        } else {
          if ($kelas2 != null) {
            \DB::table('anggota_cu_cu_draft')->where('id', $kelas2[0]['id'])->delete();
          }
          \DB::table('anggota_cu_draft')->where('id', $item['id'])->delete();
        }
        \DB::commit();
      } catch (\Throwable $th) {
        \DB::rollback();
      }
    }

    try {
      if ($anggota_cu_cu_insert) {
        \DB::table('anggota_cu_cu')->insert($anggota_cu_cu_insert);
      }
      if ($anggota_cu_cu_update || $anggota_cu_update) {
        $anggotaCU = new AnggotaCu;
        $anggotaCUCU = new AnggotaCuCu;
        $anggotaProdukCU = new AnggotaProdukCu;
        \Batch::update($anggotaCU, $anggota_cu_update, 'id');
        \Batch::update($anggotaCUCU, $anggota_cu_cu_update, 'id');
        \Batch::update($anggotaProdukCU, $deleted, 'id');
      }
    } catch (\Throwable $th) {
    }
  }
}
