<?php

namespace App\Imports;

use App\Cu;
use App\Tp;
use App\System;
use App\AnggotaCu;
use App\AnggotaCuCuDraft;
use App\AnggotaCuDraft;
use App\QueueException;
use App\Region\Villages;
use App\Region\Districts;
use App\Region\Provinces;
use App\Region\Regencies;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\Importable;

class AnggotaCuDraftImportEscete implements ToModel, WithHeadingRow, WithBatchInserts, WithChunkReading, ShouldQueue
{
	use Importable;

	private $provinces, $districts, $regencies, $villages, $ktp, $gender, $agama, $status_pernikahan, $rt, $rw, $ahli_waris, $no_ba, $cu, $tp, $tgl_lahir, $tgl_masuk, $nama, $nama_ibu, $anggotaCuDraft, $anggotaCuCuDraftBA, $keterangan, $tgl_keluar, $keterangan_keluar;

	public function model(array $row)
	{

		try {
			if ($row['no_cu'] == '32001') {
				$ba_cu = '007';
			} elseif ($row['no_cu'] == '601958') {
				$ba_cu = '065';
			} elseif ($row['no_cu'] == '68') {
				$ba_cu = '068';
			} elseif ($row['no_cu'] == '103') {
				$ba_cu = '080';
			} else {
				$ba_cu = substr($row['no_cu'], -3);
			}

			$this->cu = Cu::where('no_ba', $ba_cu)->select('id', 'no_ba')->first();
			$this->no_ba = $row['no_cif'];
			$this->tp = Tp::where('id_cu', $this->cu->id)->where('no_tp', 'like', '%' . (int)$row['no_tp'])->select('id', 'id_cu', 'no_tp')->first();
			$this->anggotaCuCuDraftBA = AnggotaCuCuDraft::where('cu_id', $this->cu->id)->where('no_ba', $this->no_ba)->select('id', 'no_ba')->first();
		} catch (\Throwable $th) {
			print $th;
		}

		if (stripos($row['nama'], 'Rek Internal') === false && !$this->anggotaCuCuDraftBA && $row['no_tp'] != 0) {
			try {
				$this->gender = array_key_exists('kelamin', $row) ? strtoupper($row['kelamin']) : '';
				$this->status_pernikahan = array_key_exists('status', $row) ? strtoupper($row['status']) : '';
				$this->agama = array_key_exists('agama', $row) ? strtoupper($row['agama']) : '';
				$this->ktp = array_key_exists('nik', $row) ? preg_replace('/[^A-Za-z0-9]/', '', $row['nik']) : '';
				$this->tgl_lahir = array_key_exists('tanggal_lahir', $row) ? date('Y-m-d', strtotime(str_replace('/', '-', $row['tanggal_lahir']))) : null;
				$this->nama = array_key_exists('nama', $row) ? $row['nama'] : '';
				$this->keterangan = array_key_exists('keterangan_jadi_anggota', $row) ? $row['keterangan_jadi_anggota'] : '';
				$this->keterangan_keluar = array_key_exists('alasan_hapus_cif', $row) ? $row['alasan_hapus_cif'] : '';
				$ktp_ort = array_key_exists('nik', $row) ? preg_replace('/[^A-Za-z0-9]/', '', $row['nik']) : '';


				// check gender
				if ($this->gender == 'L') {
					$this->gender = 'LAKI-LAKI';
				} else if ($this->gender == 'P') {
					$this->gender = 'PEREMPUAN';
				}

				if (isset($row['tgl_masuk'])) {
					$tgl_masuk_temp = str_replace('/', '-', $row['tgl_masuk']);
					$this->tgl_masuk = date('Y-m-d', strtotime($tgl_masuk_temp));
				} else if (!isset($row['tgl_masuk'])) {
					$this->tgl_masuk = null;
				}

				if (isset($row['tanggal_keluar'])) {
					$tgl_keluar_temp = str_replace('/', '-', $row['tanggal_keluar']);
					$this->tgl_keluar = date('Y-m-d', strtotime($tgl_keluar_temp));
				} else if (!isset($row['tanggal_keluar'])) {
					$this->tgl_keluar = null;
				}

				// check nama ibu
				if ($row['nama_ibu'] != 0 || $row['nama_ibu'] != null) {
					$this->nama_ibu = array_key_exists('nama_ibu', $row) ? $row['nama_ibu'] : '';
				} else {
					$this->nama_ibu = '';
				}

				// check status
				if ($this->status_pernikahan == 'KW') {
					$this->status_pernikahan = 'MENIKAH';
				} else if ($this->status_pernikahan == 'TK') {
					$this->status_pernikahan = 'BELUM MENIKAH';
				}

				// check ahli waris
				if (array_key_exists('ahli_waris', $row)) {
					$this->ahli_waris = array_key_exists('ahli_waris', $row) ? $row['ahli_waris'] : '';
				} else {
					$this->ahli_waris = array_key_exists('alih_waris', $row) ? $row['alih_waris'] : '';
				}


				if ($this->ktp != '' && !starts_with($this->ktp, '0') && !preg_match("/[a-z]/i", $this->ktp) && strlen($this->ktp) == 16) {
					//jika nik ada dan benar
					$anggotaCu = AnggotaCu::where('nik', $this->ktp)->select('id', 'nik', 'name')->first();
					$this->anggotaCuDraft = AnggotaCuDraft::where('nik', $this->ktp)->select('id', 'nik', 'name')->first();

					//mengecek apakah anggotaCu adalah anggotaCu yang terkait dengan nik
					if ($anggotaCu || $this->anggotaCuDraft) {
						if ($anggotaCu) {
							if ($anggotaCu->name != $this->nama) {
								$anggotaCu =  AnggotaCu::where('name', strtoupper($this->nama))->where('tanggal_lahir', $this->tgl_lahir)->select('id', 'nik', 'name')->first();
								if ($anggotaCu) {
									$this->ktp = $anggotaCu->nik;
								} else {
									$kelas_ktp = System::findOrFail(1);
									$this->ktp = $kelas_ktp->nik;
									$val = $this->ktp + 1;
									$kelas_ktp->nik = str_pad($val, 16, "0", STR_PAD_LEFT);
									$kelas_ktp->update();
									$anggotaCu = null;
									$this->anggotaCuDraft = null;
								}
							}
						} else {
							if ($this->anggotaCuDraft->name != $this->nama) {
								$this->anggotaCuDraft =  AnggotaCuDraft::where('name', strtoupper($this->nama))->where('tanggal_lahir', $this->tgl_lahir)->select('id', 'nik', 'name')->first();
								if ($this->anggotaCuDraft) {
									$this->ktp = $this->anggotaCuDraft->nik;
								} else {
									$kelas_ktp = System::findOrFail(1);
									$this->ktp = $kelas_ktp->nik;
									$val = $this->ktp + 1;
									$kelas_ktp->nik = str_pad($val, 16, "0", STR_PAD_LEFT);
									$kelas_ktp->update();
									$anggotaCu = null;
									$this->anggotaCuDraft = null;
								}
							}
						}
					} else {
						//update nik jika ktp benar dengan melakukan pengecekan apakah AnggotaCU dengan nama dan tgl lahir terkait memiliki nik yang tergenerate otomatis
						$anggotaCu =  AnggotaCu::where('name', strtoupper($this->nama))->where('tanggal_lahir', $this->tgl_lahir)->select('id', 'nik', 'name')->first();
						if ($anggotaCu) {
							if (starts_with($anggotaCu->nik, '0') && strlen($this->ktp) == 16) {
								$anggotaCu->update(['nik' => $this->ktp]);
							}
						}
					}
				} else {

					//untuk mengecek jika anggotaCu ada untuk anggotaCu yang tidak memiliki nik ataupun memiliki nik yang tidak valid 
					$anggotaCu =  AnggotaCu::where('name', strtoupper($this->nama))->where('tanggal_lahir', $this->tgl_lahir)->select('id', 'nik', 'name')->first();
					$this->anggotaCuDraft =  AnggotaCuDraft::where('name', strtoupper($this->nama))->where('tanggal_lahir', $this->tgl_lahir)->select('id', 'nik', 'name')->first();
					//jika ada
					if (($anggotaCu || $this->anggotaCuDraft)) {
						if ($anggotaCu != null) {
							$this->ktp = $anggotaCu->nik;
						} else if ($this->anggotaCuDraft != null) {
							$this->ktp = $this->anggotaCuDraft->nik;
						}
					} else {
						//jika tidak ada
						$kelas_ktp = System::findOrFail(1);
						$this->ktp = $kelas_ktp->nik;
						$val = $this->ktp + 1;
						$kelas_ktp->nik = str_pad($val, 16, "0", STR_PAD_LEFT);
						$kelas_ktp->update();
						$anggotaCu = null;
						$this->anggotaCuDraft = null;
					}
				}


				if (stripos($this->nama, 'qq')) {
					$anggotaCu =  AnggotaCu::where('name', strtoupper($this->nama))->where('tanggal_lahir', $this->tgl_lahir)->select('id', 'nik', 'name')->first();
					$this->anggotaCuDraft =  AnggotaCuDraft::where('name', strtoupper($this->nama))->where('tanggal_lahir', $this->tgl_lahir)->select('id', 'nik', 'name')->first();
					if ($anggotaCu || $this->anggotaCuDraft) {
						if ($anggotaCu != null) {
							$this->ktp = $anggotaCu->nik;
						} else if ($this->anggotaCuDraft != null) {
							$this->ktp = $this->anggotaCuDraft->nik;
						}
					} else {
						$kelas_ktp = System::findOrFail(1);
						$this->ktp = $kelas_ktp->nik;
						$val = $this->ktp + 1;
						$kelas_ktp->nik = str_pad($val, 16, "0", STR_PAD_LEFT);
						$kelas_ktp->update();
						$this->keterangan = 'ANAK DARI ' . $ktp_ort;
						$anggotaCu = null;
						$this->anggotaCuDraft = null;
					}
				}

				// check agama
				if ($this->agama == 'KRISTEN') {
					$this->agama = 'PROTESTAN';
				} else if ($this->agama == 'KHATOLIK') {
					$this->agama = 'KATOLIK';
				}

				// check provinsi
				if (array_key_exists('provinsi', $row) && $row['provinsi']) {
					$this->provinces = Provinces::where('name', 'like', '%' . strtoupper($row['provinsi']) . '%')->first();
					$this->provinces = $this->provinces ? $this->provinces->id : '';
				} else {
					$this->provinces = '';
				}
				// check kabupaten
				if (array_key_exists('kabupaten', $row) && $row['kabupaten']) {
					if ($this->provinces != '') {
						$this->regencies = Regencies::where('province_id', $this->provinces)->where('name', 'like', '%' . strtoupper($row['kabupaten']) . '%')->first();
					} else {
						$this->regencies = Regencies::where('name', 'like', '%' . strtoupper($row['kabupaten']) . '%')->first();
					}
					$this->regencies = $this->regencies ? $this->regencies->id : '';
				} else {
					$this->regencies = '';
				}
				// check kecamatan
				if (array_key_exists('kecamatan', $row) && $row['kecamatan']) {
					if ($this->regencies != '') {
						$this->districts = Districts::where('regency_id', $this->regencies)->where('name', 'like', '%' . strtoupper($row['kecamatan']) . '%')->first();
					} else {
						$this->districts = Districts::where('name', 'like', '%' . strtoupper($row['kecamatan']) . '%')->first();
					}
					$this->districts = $this->districts ? $this->districts->id : '';
				} else {
					$this->districts = '';
				}
				// check kelurahan
				if (array_key_exists('kelurahan', $row) && $row['kelurahan']) {
					if ($this->districts != '') {
						$this->villages = Villages::where('district_id', $this->districts)->where('name', 'like', '%' . strtoupper($row['kelurahan']) . '%')->first();
					} else {
						$this->villages = Villages::where('name', 'like', '%' . strtoupper($row['kelurahan']) . '%')->first();
					}
					$this->villages = $this->villages ? $this->villages->id : '';
				} else {
					$this->villages = '';
				}

				$anggotaCuCuDraftBA = AnggotaCuCuDraft::where('cu_id', $this->cu->id)->where('no_ba', $this->no_ba)->select('id', 'no_ba')->first();

				if ($anggotaCu) {
					if (!$anggotaCuCuDraftBA) {
						# code...
						try {
							$draft = $this->createAnggotaCu($row);
							$anggotaCuDraft = $draft;
							AnggotaCuCuDraft::create([
								'anggota_cu_draft_id' => $anggotaCuDraft->id,
								'anggota_cu_id' => $anggotaCu->id,
								'cu_id' => $this->cu->id,
								'tp_id' => $this->tp->id,
								'no_ba' => $this->no_ba,
								'tanggal_masuk' => $this->tgl_masuk,
								'tanggal_masuk' => $this->tgl_masuk,
								'tanggal_keluar' => $this->tgl_keluar,
								'keterangan_masuk' => $this->keterangan,
								'keterangan_keluar' => $this->keterangan_keluar,
								'escete' => 1
							]);
						} catch (\Throwable $th) {
							print $th->getMessage() . $row['no_cu'];
						}
					}
				} else {
					if (!$anggotaCuCuDraftBA) {
						try {
							$draft = $this->createAnggotaCu($row);
							$anggotaCuDraft = $draft;
							AnggotaCuCuDraft::create([
								'anggota_cu_draft_id' => $anggotaCuDraft->id,
								'cu_id' => $this->cu->id,
								'tp_id' => $this->tp->id,
								'no_ba' => $this->no_ba,
								'tanggal_masuk' => $this->tgl_masuk,
								'tanggal_masuk' => $this->tgl_masuk,
								'tanggal_keluar' => $this->tgl_keluar,
								'keterangan_masuk' => $this->keterangan,
								'keterangan_keluar' => $this->keterangan_keluar,
								'escete' => 1
							]);
						} catch (\Throwable $th) {
							print $th->getMessage() . $row['no_cu'];
						}
					}
				}
			} catch (\Throwable $th) {
				try {
					if ($this->cu) {
						$id1 = $this->cu->id;
					} else {
						$id1 = substr($row['no_cu'], -3);
					}
					QueueException::create(
						[
							'line' => $th->getLine(),
							'error' => $th->getMessage(),
							'id_cu' => $id1,
							'no_ba' => $this->no_ba,
							'tipe' => 'Import Anggota'
						]
					);
				} catch (\Throwable $th) {
					print $th->getMessage() . $row['cu'];
				}
			}
		}
	}


	public function createAnggotaCu($row)
	{
		if (!$this->anggotaCuDraft) {
			// create anggotCuDraft
			try {
				$anggotaCuDraft = AnggotaCuDraft::create([
					'name' => array_key_exists('nama', $row) ? $row['nama'] : '',
					'id_provinces' => $this->provinces,
					'id_regencies' => $this->regencies,
					'id_districts' => $this->districts,
					'id_villages' => $this->villages,
					'nik' => $this->ktp,
					'npwp' => array_key_exists('npwp', $row) ? $row['npwp'] : '',
					'tempat_lahir' => array_key_exists('tempat_lahir', $row) ? $row['tempat_lahir'] : '',
					'tanggal_lahir' => array_key_exists('tanggal_lahir', $row) ? date('Y-m-d', strtotime(str_replace('/', '-', $row['tanggal_lahir']))) : null,
					'kelamin' => $this->gender,
					'agama' => $this->agama,
					'status' => $this->status_pernikahan,
					'alamat' => array_key_exists('alamat', $row) ? $row['alamat'] : '',
					'rt' => $row['rt'],
					'rw' => $row['rw'],
					'kontak' => array_key_exists('kontak_lain', $row) ? $row['kontak_lain'] : '',
					'darah' => array_key_exists('golongan_darah', $row) ? strtoupper($row['golongan_darah']) : '',
					'tinggi' => array_key_exists('tinggi', $row) ? $row['tinggi'] : '',
					'email' => array_key_exists('email', $row) ? $row['email'] : '',
					'hp' => array_key_exists('hp', $row) ? preg_replace('/\s+/', '', $row['hp']) : '',
					'pendidikan' => array_key_exists('pendidikan', $row) ? strtoupper($row['pendidikan']) : '',
					'lembaga' => array_key_exists('tempat_kerja', $row) ? $row['tempat_kerja'] : '',
					'jabatan' => array_key_exists('jabatan', $row) ? strtoupper($row['jabatan']) : '',
					'organisasi' => array_key_exists('organisasi', $row) ? $row['organisasi'] : '',
					'ahli_waris' => $this->ahli_waris,
					'pekerjaan' => array_key_exists('pekerjaan', $row) ? strtoupper($row['pekerjaan']) : '',
					'penghasilan' => array_key_exists('rata_rata_penghasilan_perbulan', $row) ? $row['rata_rata_penghasilan_perbulan'] : 0,
					'pengeluaran' => array_key_exists('rata_rata_pengeluaran_perbulan', $row) ? $row['rata_rata_pengeluaran_perbulan'] : 0,
					'suku' => array_key_exists('suku', $row) ? strtoupper($row['suku']) : '',
					'nama_ibu' => array_key_exists('nama_ibu', $row) ? $row['nama_ibu'] : '',
					'kk' => array_key_exists('kk', $row) ? $row['kk'] : '',
					'escete' => 1
				]);

				return $anggotaCuDraft;
			} catch (\Throwable $th) {
				print $th->getMessage();
				QueueException::create(
					[
						'line' => $th->getLine(),
						'error' => $th->getMessage(),
						'id_cu' => $this->cu->id,
						'tipe' => 'Import Anggota'
					]
				);
			}
		} else {
			return $this->anggotaCuDraft;
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
