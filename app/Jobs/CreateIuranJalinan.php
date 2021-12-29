<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use DB;
use App\ProdukCu;
use App\JalinanIuran;
use App\JalinanIuranAnggota;
use App\JalinanIuranProduk;

class CreateIuranJalinan implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
		private $cu, $lastDateOfMonth;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($cu, $lastDateOfMonth)
    {
        $this->cu = $cu;
				$this->lastDateOfMonth = $lastDateOfMonth;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
			try {
			$kelas = \App\JalinanIuran::create([
				'id_cu' => $this->cu,
				'periode' => $this->lastDateOfMonth,
				'status' => '0'
			]);
	
			$produk_data = \App\ProdukCu::where('id_cu',$this->cu)->select('id', 'id_cu', 'name','tipe','jalinan')->where('jalinan',1)->get();
	
			$total_simpanan = 0;
			$total_simpanan_kurang = 0;
			$total_pinjaman = 0;
			$total_pinjaman_kurang = 0;
			$total_sheet_3 = 0;
			$kurang_sheet_3 = 0;
			$plafon_sheet_3 = 0;
			$total_sheet_4 = 0;
			$kurang_sheet_4 = 0;
			$plafon_sheet_4 = 0;
			$total_sheet_5 = 0;
			$kurang_sheet_5 = 0;
			$plafon_sheet_5 = 0;
			$total_sheet_6_dulu = 0;
			$total_sheet_6_sekarang = 0;
			$kurang_sheet_6 = 0;
			$plafon_sheet_6 = 0;
			$total_sheet_7_dulu = 0;
			$total_sheet_7_sekarang = 0;
			$kurang_sheet_7 = 0;
			$plafon_sheet_7 = 0;
			$total_sheet_8 = 0;
			$kurang_sheet_8 = 0;
			$total_sheet_9 = 0;
			$kurang_sheet_9 = 0;
			$total_sheet_10 = 0;
			$kurang_sheet_10 = 0;
			$total_sheet_11 = 0;
			$kurang_sheet_11 = 0;
			$total_sheet_12 = 0;
			$kurang_sheet_12 = 0;
			$plafon_sheet_12 = 0;
			$total_sheet_13 = 0;
			$kurang_sheet_13 = 0;
			$plafon_sheet_13 = 0;
			$total_sheet_14 = 0;
			$kurang_sheet_14 = 0;
			$plafon_sheet_14 = 0;
			$total_sheet_15 = 0;
			$kurang_sheet_15 = 0;
			$total_sheet_16 = 0;
			$kurang_sheet_16 = 0;
			$total_sheet_17 = 0;
			$kurang_sheet_17 = 0;
			$total_sheet_18 = 0;
			$kurang_sheet_18 = 0;
			$total_sheet_19 = 0;
			$kurang_sheet_19 = 0;
			$total_sheet_20 = 0;
			$kurang_sheet_20 = 0;
			$total_sheet_21 = 0;
			$kurang_sheet_21 = 0;
			$plafon_sheet_21 = 0;
			$total_sheet_22 = 0;
			$kurang_sheet_22 = 0;
			$plafon_sheet_22 = 0;
			$total_sheet_23 = 0;
			$kurang_sheet_23 = 0;
			$total_sheet_24 = 0;
			$kurang_sheet_24 = 0;
			$total_sheet_25 = 0;
			$kurang_sheet_25 = 0;
			$total_sheet_26 = 0;
			$kurang_sheet_26 = 0;
	
			$anggota_data = \App\AnggotaCuCu::with('anggota_cu_simple','anggota_produk_cu.transaksi')->where('cu_id', $this->cu)
			->where('tanggal_masuk','<',$this->lastDateOfMonth)
			->whereHas('anggota_cu', function ($q_anggotaCuCu){
				$q_anggotaCuCu->whereNull('status_jalinan');
			})
			->chunk(1000, function ($anggota_data_q) use (
				&$kelas,
				&$produk_data, 
				&$total_simpanan, 
				&$total_simpanan_kurang, 
				&$total_pinjaman, 
				&$total_pinjaman_kurang, 
				&$total_sheet_3,
				&$plafon_sheet_3,
				&$total_sheet_4,
				&$plafon_sheet_4,
				&$total_sheet_5,
				&$plafon_sheet_5,
				&$total_sheet_6_dulu,
				&$total_sheet_6_sekarang,
				&$plafon_sheet_6,
				&$total_sheet_7_dulu,
				&$total_sheet_7_sekarang,
				&$plafon_sheet_7,
				&$total_sheet_8,
				&$total_sheet_9,
				&$total_sheet_10,
				&$total_sheet_11,
				&$total_sheet_12,
				&$plafon_sheet_12,
				&$total_sheet_13,
				&$plafon_sheet_13,
				&$total_sheet_14,
				&$plafon_sheet_14,
				&$total_sheet_15,
				&$total_sheet_16,
				&$total_sheet_17,
				&$total_sheet_18,
				&$total_sheet_19,
				&$total_sheet_20,
				&$total_sheet_21,
				&$plafon_sheet_21,
				&$total_sheet_22,
				&$plafon_sheet_22,
				&$total_sheet_23,
				&$total_sheet_24,
				&$total_sheet_25,
				&$total_sheet_26			
				){
				foreach($anggota_data_q as $q_anggotaCuCu){
					foreach($q_anggotaCuCu->anggota_produk_cu as $q_anggotaProdukCu){
						foreach($produk_data as $produk){
							// saldo semua produk
							if($produk->id == $q_anggotaProdukCu->produk_cu_id){
								$produk->saldo += $q_anggotaProdukCu->saldo;

							}
															
							if($q_anggotaProdukCu->pengurang != '1'){
									// simpanan
									if($produk->tipe == 'Simpanan Pokok' || $produk->tipe == 'Simpanan Wajib' || $produk->tipe == 'Simpanan Non Saham'){
											
											if($produk->id == $q_anggotaProdukCu->produk_cu_id){
													// total simpanan
													$total_simpanan += $q_anggotaProdukCu->saldo;
		
													$selisih_usia = $q_anggotaCuCu->usia() - $q_anggotaCuCu->anggota_cu_simple->usia();
													$usia_masuk = $q_anggotaCuCu->usia_masuk($q_anggotaCuCu->anggota_cu_simple->tanggal_lahir);
		
													// sheet 3
													if($usia_masuk < 1){
														$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'3');
													}
		
													// sheet 4
													if($usia_masuk < 60){
														if($q_anggotaCuCu->anggota_cu_simple->usia() >= 1 && $q_anggotaCuCu->anggota_cu_simple->usia() <= 70){
															$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'4');
														}
													}
		
													// sheet 5
													if($usia_masuk >= 60 && $usia_masuk <= 70){
														$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'5');
													}
		
													if($q_anggotaCuCu->anggota_cu_simple->usia() >= 70){
															// sheet 6
															if($usia_masuk <= 60){
																	// $total_sheet_6_sekarang += $q_anggotaProdukCu->saldo;
																	foreach($q_anggotaProdukCu->transaksi as $trans){
																			// $selisih_usia_trans = $q_anggotaCuCu->usia() - $trans->usia();
																			// $usia_masuk_trans = $q_anggotaCuCu->usia() - $selisih_usia_trans;

																			$usia_trans = $trans->usia_trans($q_anggotaCuCu->anggota_cu_simple->tanggal_lahir);
		
																			if($usia_trans <= 70){
																				$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'61');
																				break;
																			}
																	}
																	if($total_sheet_6_dulu > 50000000){
																			$plafon_sheet_6 += 50000000;
																			// $kurang_sheet_6 += ($total_sheet_6_dulu - 50000000);
																	}else{
																			$plafon_sheet_6 += $total_sheet_6_dulu;
																	}
		
																	$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'6');
															}
															
															// sheet 7
															if($usia_masuk >= 60 && $usia_masuk <= 70){
																	// $total_sheet_7_sekarang += $q_anggotaProdukCu->saldo;
																	// foreach($q_anggotaProdukCu->transaksi as $trans){
																	// 		$selisih_usia_trans = $q_anggotaCuCu->usia() - $trans->usia();
																	// 		$usia_masuk_trans = $q_anggotaCuCu->usia() - $selisih_usia_trans;
		
																	// 		if($usia_masuk_trans <= 70){
																	// 				$total_sheet_7_lama = $trans->saldo_akhir;
																	// 				break;
																	// 		}
																	// }
																	// if($total_sheet_7_lama > 10000000){
																	// 		$plafon_sheet_7 += 10000000;
																	// 		// $kurang_sheet_7 += ($total_sheet_7_lama - 10000000);
																	// }else{
																	// 		$plafon_sheet_7 += total_sheet_7_lama;
																	// }
		
																	$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'7');
															}
													}
		
													// sheet 8
													if($usia_masuk >= 70){
														$total_sheet_8 += $q_anggotaProdukCu->saldo;
														// $kurang_sheet_8 += $q_anggotaProdukCu->saldo;
	
														$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'8');
													}
											}
		
									//pinjaman	
									}else{
											
											if($produk->id == $q_anggotaProdukCu->produk_cu_id){
													// total pinjaman
													$total_pinjaman += $q_anggotaProdukCu->saldo;
		
													$usia_cair = $q_anggotaProdukCu->usia($q_anggotaCuCu->anggota_cu_simple->tanggal_lahir);
													$hari_cair = $q_anggotaProdukCu->hari($q_anggotaCuCu->tanggal_masuk);
		
													// pinjaman kapitalisasi
													if($produk->tipe == 'Pinjaman Kapitalisasi'){
															// sheet 9
															if($q_anggotaCuCu->anggota_cu_simple->usia() <= 30){
																	$total_sheet_9 += $q_anggotaProdukCu->saldo;
																	// $kurang_sheet_9 += $q_anggotaProdukCu->saldo;
		
																	$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'9');
															}
															// sheet 14
															if($q_anggotaProdukCu->saldo > 25000000){
																	$plafon_sheet_14 += 25000000;
																	$total_sheet_14 += $q_anggotaProdukCu->saldo;
																	// $kurang_sheet_14 += ($q_anggotaProdukCu->saldo - 25000000);
		
																	$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'14');
															}
															// sheet 16
															if($hari_cair < 30){
																	$total_sheet_16 += $q_anggotaProdukCu->saldo;
																	// $kurang_sheet_16 += $q_anggotaProdukCu->saldo;
		
																	$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'16');
															}
		
															// sheet 18
															if($q_anggotaCuCu->dpd > 90){
																	$total_sheet_18 += $q_anggotaProdukCu->saldo;
																	// $kurang_sheet_18 += $q_anggotaProdukCu->saldo;
		
																	$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'18');
															}
		
															// sheet 23
															if($q_anggotaCuCu->dpd > 1825){
																	$total_sheet_23 += $q_anggotaProdukCu->saldo;
																	// $kurang_sheet_23 += $q_anggotaProdukCu->saldo;

																	$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'23');
															}
															
													}
		
													// sheet 12
													if($produk->tipe == 'Pinjaman Umum'){
															if($usia_cair < 60){
																	$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'12');
															}
													}
		
													// sheet 13
													if($usia_cair >= 60 && $usia_cair <= 70){
														$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'13');
													}
		
													// sheet 15
													if($q_anggotaCuCu->anggota_cu_simple->usia() >= 70){
														$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'15');
													}
		
													// sheet 17
													if($q_anggotaCuCu->dpd > 180){
														$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'17');
													}
		
													// sheet 21
													if($produk->tipe == 'Pinjaman Produktif'){
															if($usia_cair <= 55){
																	if($q_anggotaProdukCu->bulan() <= 36){
																			$total_sheet_21 += $q_anggotaProdukCu->saldo;
																			$plafon_sheet_21 += 300000000;
																			if($q_anggotaProdukCu->saldo > 300000000){
																					// $kurang_sheet_21 += ($q_anggotaProdukCu->saldo - 300000000);
																			}
																			$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'21');
																	}
															}
													}
		
													// sheet 24
													if($q_anggotaCuCu->dpd > 5475){
														$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'24');
													}
		
													// sheet 26
													if($q_anggotaCuCu->usia() <= 17){
														$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'26');
													}
											}
									}
									// sheet 10
									if($produk->id == $q_anggotaProdukCu->produk_cu_id){
											$sp = 0;
											$sw = 0;
											$snh = 0;
											if($produk->tipe == 'Simpanan Pokok'){
													$sp = $q_anggotaProdukCu->saldo;
											}
											if($produk->tipe == 'Simpanan Wajib'){
													$sw = $q_anggotaProdukCu->saldo;
											}
											if($produk->tipe == 'Simpanan Non Saham'){
													$snh = $q_anggotaProdukCu->saldo;
											}
									}
									if($produk->tipe == 'Pinjaman Kapitalisasi'){
											if($q_anggotaCuCu->dpd > 90){
												$total_simp = $sp + $sw + $snh;
												if($q_anggotaProdukCu->saldo > $total_simp){
														// $kurang_sheet_10 += $q_anggotaProdukCu->saldo;
												}else{
														$pengurang = $total_simp - $q_anggotaProdukCu->saldo;
														// $kurang_sheet_10 += $pengurang;
												}
												$total_sheet_10 += $q_anggotaProdukCu->saldo;
	
												$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'10');
											}
									}
							}else{
									if($produk->id == $q_anggotaProdukCu->produk_cu_id){
		
											//sheet 11
											// $total_sheet_11 += $q_anggotaProdukCu->saldo;
											// $kurang_sheet_11 += $q_anggotaProdukCu->saldo;
		
											//sheet 19
											// $total_sheet_19 += $q_anggotaProdukCu->saldo;
											// $kurang_sheet_19 += $q_anggotaProdukCu->saldo;
		
											//sheet 20
											// $total_sheet_20 += $q_anggotaProdukCu->saldo;
											// $kurang_sheet_20 += $q_anggotaProdukCu->saldo;
		
											//sheet 25
											// $total_sheet_25 += $q_anggotaProdukCu->saldo;
											// $kurang_sheet_25 += $q_anggotaProdukCu->saldo;
		
											$this->snapshot($kelas,$q_anggotaCuCu,$q_anggotaProdukCu,'25');
									}
							}
						}
					}
				}
			});

			$t_data = array();
			$query = \App\JalinanIuranAnggota::where('jalinan_iuran_id',$kelas->id)
			->get();

			foreach($query as $anggota){
				$t_data[$anggota->anggota_cu_id] = $anggota;	
			}
			
			foreach($t_data as $r){
				foreach($query as $anggota){
					if($r->anggota_cu_id == $anggota->anggota_cu_id){
						foreach($produk_data as $produk){
							if($produk->id == $anggota->produk_cu_id){
								$r["X$produk->id"] = $anggota->saldo;
								if($produk->tipe == 'Simpanan Pokok' || $produk->tipe == 'Simpanan Wajib' || $produk->tipe == 'Simpanan Non Saham'){
									$r['total_simp'] += $anggota->saldo;
								}else{
									$r['total_pinj'] += $anggota->saldo;
								}
							}
						}
					}
				}
			}

			foreach($t_data as $r){
				if($r->lokasi == 3){
					if($r->total_simp > 5000000){
						$plafon_sheet_3 += 5000000;
						$kurang_sheet_3 += ($r->total_simp - 5000000);
						$this->snapshot2($kelas, $r,'3', 5000000);
					}
				}
				if($r->lokasi == 4){
					if($r->total_simp > 50000000){
						$plafon_sheet_4 += 50000000;
						$kurang_sheet_4 += ($r->total_simp - 50000000);
						$this->snapshot2($kelas, $r,'4', 50000000);
					}
				}
				if($r->lokasi == 5){
					if($r->total_simp > 10000000){
						$plafon_sheet_5 += 10000000;
						$kurang_sheet_5 += ($r->total_simp - 10000000);
						$this->snapshot2($kelas, $r,'5', 10000000);
					}
				}
				if($r->lokasi == 6){
					// TODO: CHECK SIMPANAN LAMA
					if($r->total_simp > 50000000){
						$plafon_sheet_6 += 50000000;
						$kurang_sheet_6 += 50000000;
					}else{
						$plafon_sheet_6 += $r->total_simp;
						$kurang_sheet_6 += $r->total_simp;
					}
					$this->snapshot2($kelas, $r,'6', 50000000);
				}
				if($r->lokasi == 7){
					// TODO: CHECK SIMPANAN LAMA
					if($r->total_simp > 10000000){
						$plafon_sheet_7 += 10000000;
						$kurang_sheet_7 += 10000000;
					}else{
						$plafon_sheet_7 += $r->total_simp;
						$kurang_sheet_7 += $r->total_simp;
					}
					$this->snapshot2($kelas, $r,'7', 10000000);
				}
				if($r->lokasi == 8){
					$kurang_sheet_8 += $r->total_simp;
					$this->snapshot2($kelas, $r,'8', 0);
				}
				if($r->lokasi == 9){
					$kurang_sheet_9 += $r->total_simp;
					$this->snapshot2($kelas, $r,'9', 0);
				}
				if($r->lokasi == 10){
					$kurang_sheet_10 += $r->total_simp;
					$this->snapshot2($kelas, $r,'10', 0);
				}
				if($r->lokasi == 12){
					if($r->total_pinj > 150000000){
						$plafon_sheet_12 += 150000000;
						$kurang_sheet_12 += ($r->total_pinj - 150000000);
						$this->snapshot2($kelas, $r,'12', 150000000);
					}
				}
				if($r->lokasi == 13){
					if($r->total_pinj > 50000000){
						$plafon_sheet_12 += 50000000;
						$kurang_sheet_13 += ($r->total_pinj - 50000000);
						$this->snapshot2($kelas, $r,'13', 50000000);
					}
				}
				if($r->lokasi == 14){
					$kurang_sheet_14 += $r->total_pinj;
					$this->snapshot2($kelas, $r,'14', 0);
				}
				if($r->lokasi == 15){
					$kurang_sheet_15 += $r->total_pinj;
					$this->snapshot2($kelas, $r,'15', 0);
				}
				if($r->lokasi == 16){
					$kurang_sheet_16 += $r->total_pinj;
					$this->snapshot2($kelas, $r,'16', 0);
				}
				if($r->lokasi == 17){
					$kurang_sheet_17 += $r->total_pinj;
					$this->snapshot2($kelas, $r,'17', 0);
				}
				if($r->lokasi == 18){
					$kurang_sheet_18 += $r->total_pinj;
					$this->snapshot2($kelas, $r,'18', 0);
				}
				if($r->lokasi == 23){
					$kurang_sheet_23 += $r->total_pinj;
					$this->snapshot2($kelas, $r,'23', 0);
				}
				if($r->lokasi == 24){
					$kurang_sheet_24 += $r->total_pinj;
					$this->snapshot2($kelas, $r,'24', 0);
				}
				if($r->lokasi == 25){
					$kurang_sheet_25 += $r->total_pinj;
					$this->snapshot2($kelas, $r,'25', 0);
				}
			}

			$total_simpanan_kurang += ($kurang_sheet_3 + $kurang_sheet_4 + $kurang_sheet_5 + $kurang_sheet_6 + $kurang_sheet_7 + $kurang_sheet_8 + $kurang_sheet_9 + $kurang_sheet_10 + $kurang_sheet_11);
	
			$total_pinjaman_kurang += ($kurang_sheet_12 + $kurang_sheet_13 + $kurang_sheet_14 + $kurang_sheet_15 + $kurang_sheet_16 + $kurang_sheet_17 + $kurang_sheet_18 + $kurang_sheet_19 + $kurang_sheet_20 + $kurang_sheet_21 + $kurang_sheet_22 + $kurang_sheet_23 + $kurang_sheet_24 + $kurang_sheet_25 + $kurang_sheet_26);
	
			foreach($produk_data as $produk){
				\App\JalinanIuranProduk::create([
					'jalinan_iuran_id' => $kelas->id,
					'produk_cu_id' => $produk->id,
					'saldo' => $produk->saldo,
				]);
			}
	
			$kelas->update([
				'total_simpanan' => $total_simpanan,
				'total_simpanan_kurang' => $total_simpanan_kurang,
				'total_pinjaman' => $total_pinjaman,
				'total_pinjaman_kurang' => $total_pinjaman_kurang,
				'total_sheet_3' => $total_sheet_3,
				'kurang_sheet_3' => $kurang_sheet_3,
				'plafon_sheet_3' => $plafon_sheet_3,
				'total_sheet_4' => $total_sheet_4,
				'kurang_sheet_4' => $kurang_sheet_4,
				'plafon_sheet_4' => $plafon_sheet_4,
				'total_sheet_5' => $total_sheet_5,
				'kurang_sheet_5' => $kurang_sheet_5,
				'plafon_sheet_5' => $plafon_sheet_5,
				'total_sheet_6_dulu' => $total_sheet_6_dulu,
				'total_sheet_6_sekarang' => $total_sheet_6_sekarang,
				'kurang_sheet_6' => $kurang_sheet_6,
				'plafon_sheet_6' => $plafon_sheet_6,
				'total_sheet_7_dulu' => $total_sheet_7_dulu,
				'total_sheet_7_sekarang' => $total_sheet_7_sekarang,
				'kurang_sheet_7' => $kurang_sheet_7,
				'plafon_sheet_7' => $plafon_sheet_7,
				'kurang_sheet_8' => $kurang_sheet_8,
				'total_sheet_8' => $total_sheet_8,
				'kurang_sheet_9' => $kurang_sheet_9,
				'total_sheet_9' => $total_sheet_9,
				'kurang_sheet_10' => $kurang_sheet_10,
				'total_sheet_10' => $total_sheet_10,
				'kurang_sheet_11' => $kurang_sheet_11,
				'total_sheet_11' => $total_sheet_11,
				'kurang_sheet_12' => $kurang_sheet_12,
				'total_sheet_12' => $total_sheet_12,
				'kurang_sheet_13' => $kurang_sheet_13,
				'total_sheet_13' => $total_sheet_13,
				'kurang_sheet_14' => $kurang_sheet_14,
				'total_sheet_14' => $total_sheet_14,
				'kurang_sheet_15' => $kurang_sheet_15,
				'total_sheet_15' => $total_sheet_15,
				'kurang_sheet_16' => $kurang_sheet_16,
				'total_sheet_16' => $total_sheet_16,
				'kurang_sheet_17' => $kurang_sheet_17,
				'total_sheet_17' => $total_sheet_17,
				'kurang_sheet_18' => $kurang_sheet_18,
				'total_sheet_18' => $total_sheet_18,
				'kurang_sheet_19' => $kurang_sheet_19,
				'total_sheet_19' => $total_sheet_19,
				'kurang_sheet_20' => $kurang_sheet_20,
				'total_sheet_20' => $total_sheet_20,
				'kurang_sheet_21' => $kurang_sheet_21,
				'total_sheet_21' => $total_sheet_21,
				'kurang_sheet_22' => $kurang_sheet_22,
				'total_sheet_22' => $total_sheet_22,
				'kurang_sheet_23' => $kurang_sheet_23,
				'total_sheet_23' => $total_sheet_23,
				'kurang_sheet_24' => $kurang_sheet_24,
				'total_sheet_24' => $total_sheet_24,
				'kurang_sheet_25' => $kurang_sheet_25,
				'total_sheet_25' => $total_sheet_25,
				'kurang_sheet_26' => $kurang_sheet_26,
				'total_sheet_26' => $total_sheet_26,
			]);

			}catch (\Throwable $th) {
				dd($th);
			}
    }

		public function snapshot($kelas, $q_anggotaCuCu, $q_anggotaProdukCu,$lokasi){
			\App\JalinanIuranAnggota::create([
				'jalinan_iuran_id' => $kelas->id,
				'anggota_cu_id' => $q_anggotaCuCu->anggota_cu_id,
				'anggota_cu_cu_id' => $q_anggotaCuCu->id,
				'anggota_produk_cu_id' => $q_anggotaProdukCu->id,
				'produk_cu_id' => $q_anggotaProdukCu->produk_cu_id,
				'saldo' => $q_anggotaProdukCu->saldo,
				'tanggal_masuk' => $q_anggotaCuCu->tanggal_masuk,
				'tanggal_lahir' => $q_anggotaCuCu->anggota_cu->tanggal_lahir,
				'tanggal_cair' => $q_anggotaProdukCu->tanggal,
				'name' => $q_anggotaCuCu->anggota_cu->name,
				'nik' => $q_anggotaCuCu->anggota_cu->nik,
				'no_ba' => $q_anggotaCuCu->no_ba,
				'lokasi' => $lokasi
			]);
		}

		public function snapshot_lama($kelas, $q_anggotaCuCu, $q_anggotaProdukCu,$lokasi){
			\App\JalinanIuranAnggota::create([
				'jalinan_iuran_id' => $kelas->id,
				'anggota_cu_id' => $q_anggotaCuCu->anggota_cu_id,
				'anggota_cu_cu_id' => $q_anggotaCuCu->id,
				'anggota_produk_cu_id' => $q_anggotaProdukCu->id,
				'produk_cu_id' => $q_anggotaProdukCu->produk_cu_id,
				'saldo' => $q_anggotaProdukCu->saldo,
				'tanggal_masuk' => $q_anggotaCuCu->tanggal_masuk,
				'tanggal_lahir' => $q_anggotaCuCu->anggota_cu->tanggal_lahir,
				'tanggal_cair' => $q_anggotaProdukCu->tanggal,
				'name' => $q_anggotaCuCu->anggota_cu->name,
				'nik' => $q_anggotaCuCu->anggota_cu->nik,
				'no_ba' => $q_anggotaCuCu->no_ba,
				'lokasi' => $lokasi
			]);
		}

		public function snapshot2($kelas, $r, $lokasi, $plafon){
			\App\JalinanIuranAnggotaTotal::create([
				'jalinan_iuran_id' => $kelas->id,
				'anggota_cu_id' => $r->anggota_cu_id,
				'lokasi' => $lokasi,
				'total_simp' => $r->total_simp,
				'total_pinj' => $r->total_pinj,
				'plafon' => $plafon
			]);
		}
}
