<template>
	<div>
		<!-- page-header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="level" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<div v-if="formStat == 'success'">
						<!-- navbar -->
						<div class="card card-body">
							<div class="input-group">
								<div class="input-group-prepend">
									<span class="input-group-text">Pilih Jenis</span>
								</div>
								<select class="form-control" data-width="100%" @change="changeTab($event.target.value)">
									<option value="iuran">Setoran Solidaritas</option>
									<option value="sheet3">Simp > 5JT</option>
									<option value="sheet4">Simp > 50JT | 1 s.d. 70 Thn</option>
									<option value="sheet5">Simp > 10JT | 60 s.d. 70 Thn</option>
									<option value="sheet6">Simp > 70 Thn | Masuk < 60 Thn</option>
									<option value="sheet7">Simp > 70 Thn | Masuk 60 s.d. 70 Thn</option>
									<option value="sheet8">Masuk > 70 Thn</option>
									<option value="sheet9">Simp Kap < 30 Hari</option>
									<option value="sheet10">Simp Kap Lalai 3 Hari</option>
									<option value="sheet11">Simp Lembaga</option>
									<option value="sheet12">Pinj Non Pro > 150 JT</option>
									<option value="sheet13">Pinj > 50 JT</option>
									<option value="sheet14">Pinj Kap > 25 JT</option>
									<option value="sheet15">Pinj Agt > 70 JT</option>
									<option value="sheet16">Pinj Kap < 30 Hari</option>
									<option value="sheet17">Pinj Macet > 6 Bln</option>
									<option value="sheet18">Pinj Kap Lalai > 3 Bln</option>
									<option value="sheet21">Pinj Pro > 300 JT</option>
									<option value="sheet22">Pinj Ganda > 300 JT</option>
									<option value="sheet23">Piut Kap > 5 Thn</option>
									<option value="sheet24">Piut Umum > 15 Thn</option>
									<option value="sheet25">Pinj Lain-Lain</option>
								</select>
							</div>

						</div>

						<!-- form iuran -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-show="tabName == 'iuran'">
								<form @submit.prevent="save" data-vv-scope="form">
									<div class="row">
										<!-- tunas -->
										<div class="col-lg-6">
											<!-- informasi umum -->
											<div class="card">
												<div class="card-header bg-white">
													<h5 class="card-title">Santunan Solidaritas</h5>
												</div>
												<div class="card-body">
													<!-- simpanan disolidaritaskan	 -->
													<div class="card">
														<div class="card-header">
															<b>A. Simpanan yang disolidaritaskan</b>
														</div>
														<div class="table-responsive">
															<table class="table">
																<tbody>
																	<tr v-for="(produk, index) in form.produk" v-if="produk.produk && (produk.produk.tipe == 'Simpanan Pokok' || produk.produk.tipe == 'Simpanan Wajib' || produk.produk.tipe == 'Simpanan Non Saham')">
																		<th>{{ produk.produk.name }}</th>
																		<td class="text-right">
																			<check-value :value="produk.saldo" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>Jumlah Simpanan yang disolidaritaskan</th>
																		<td class="text-right"><check-value :value="form.total_simpanan" valueType="currency"></check-value></td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>

													<!-- simpanan sebagai pengurang -->
													<div class="card">
														<div class="card-header">
															<b>B. Simpanan sebagai pengurang</b>
														</div>
														<div class="table-responsive">
															<table class="table">
																<tbody>
																	<tr>
																		<th>1. Simpanan usia 0 s.d 1 thn diatas plafon (5.000.000)</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_3" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>2. Simpanan usia > 1 s.d 70 thn diatas plafon (50.000.000)</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_4" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>3. Simpanan usia masuk 60 s.d 70 thn diatas plafon (10.000.000)</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_5" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>4. Pertambahan simpanan usia diatas  70 thn - yang menjadi anggota CU pada usia di bawah 60 tahun (Maks. 50 juta)</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_6" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>5. Pertambahan simpanan usia diatas  70 thn - yang menjadi anggota CU pada usia 60 s.d 70 tahun (Maks. 10 juta)</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_7" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>6. Pertambahan simpanan usia diatas  70 thn - Anggota masuk usia diatas 70 tahun</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_8" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>7. Simpanan Kapitalisasi anggota baru  < 30 hari sejak menjadi anggota</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_9" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>8. Simpanan kapitalisasi  yang piutangnya tidak pernah diangsur 3 bln berturut-turut atau lebih</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_10" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>9. Simpanan lembaga yang diatasnamakan lembaga atau perorangan</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_11" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>Jumlah Simpanan sebagai pengurang</th>
																		<td class="text-right">
																			<check-value :value="form.total_simpanan_kurang" valueType="currency"></check-value>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>

													<!-- simpanan yang disolidaritaskan -->
													<div class="card">
														<div class="card-header">
															<b>C. Simpanan Yang Disolidaritaskan</b>
														</div>
														<div class="table-responsive">
															<table class="table">
																<tbody>
																	<tr>
																		<th>A - B</th>
																		<td class="text-right">
																			<check-value :value="(form.total_simpanan - form.total_simpanan_kurang)" valueType="currency"></check-value>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>

													<!-- iuran -->
													<div class="card">
														<div class="card-header">
															<b>D. Iuran</b>
														</div>
														<div class="table-responsive">
															<table class="table">
																<tbody>
																	<tr>
																		<th>Iuran Tunas</th>
																		<td class="text-right">
																			<check-value :value="((form.total_simpanan - form.total_simpanan_kurang) * 0.55) / 1000" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>Pembulatan Setoran Solidaritas Tunas</th>
																		<td class="text-right">
																			<check-value :value="(Math.round((((form.total_simpanan - form.total_simpanan_kurang) * 0.55) / 1000) / 50) * 50)" valueType="currency"></check-value>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>		

												</div>
											</div>

										</div>

										<!-- lintang -->
										<div class="col-lg-6">
											<!-- informasi umum -->
											<div class="card">
												<div class="card-header bg-white">
													<h5 class="card-title">Solidaritas Piutang Anggota</h5>
												</div>
												<div class="card-body">
													<!-- simpanan disolidaritaskan	 -->
													<div class="card">
														<div class="card-header">
															<b>A. Piutang yang disolidaritaskan</b>
														</div>
														<div class="table-responsive">
															<table class="table">
																<tbody>
																	<tr v-for="(produk, index) in form.produk" :key="index" v-if="produk.produk && (produk.produk.tipe == 'Pinjaman Kapitalisasi' || produk.produk.tipe == 'Pinjaman Umum' || produk.produk.tipe == 'Pinjaman Produktif')">
																		<th>{{ produk.produk.name }}</th>
																		<td class="text-right">
																			<check-value :value="produk.saldo" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>Jumlah Piutang yang disolidaritaskan</th>
																		<td class="text-right"><check-value :value="form.total_pinjaman" valueType="currency"></check-value></td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>

													<!-- simpanan sebagai pengurang -->
													<div class="card">
														<div class="card-header">
															<b>B. Piutang sebagai pengurang</b>
														</div>
														<div class="table-responsive">
															<table class="table">
																<tbody>
																	<tr>
																		<th>1. Saldo piutang cair usia dewasa s.d 60 thn diatas plafon (150.000.000)</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_12" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>2. Saldo piutang cair diatas usia 60 s.d 70 thn diatas plafon (50.000.000)</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_13" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>3. Saldo piutang kapitalisasi diatas plafon (25.000.000)</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_14" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>4. Saldo piutang usia diatas 70 tahun</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_15" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>5. Saldo piutang macet  lebih dari 6 bulan berturut-turut</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_16" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>6. Saldo piutang kapitalisasi anggota baru < 30 hari sejak menjadi anggota</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_17" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>7. Saldo piutang kapitalisasi yang tidak pernah diangsur ≥ 3 bln berturut-turut</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_18" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>8. Saldo piutang dengan tujuan untuk biaya berobat sendiri</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_19" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>9. Saldo piutang lembaga atas nama perorangan atau nama lembaga</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_20" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>10. Saldo piutang produktif  diatas plafon (300.000.000)</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_21" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>11. Saldo piutang produktif dan piutang lain diatas plafon (300.000.000)</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_22" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>12. Saldo piutang kapitalisasi yang umur piutang diatas 5 tahun</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_23" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>13. Saldo piutang selain  kapitalisasi yang umur piutang diatas 15 tahun</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_24" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>14. Saldo piutang yang angsuran ditarik dari simpanan saham (SP dan SW)</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_25" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>15. Saldo piutang luar biasa usia < 17 tahun dan belum menikah</th>
																		<td class="text-right">
																			<check-value :value="form.kurang_sheet_26" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>Jumlah Pinjaman sebagai pengurang</th>
																		<td class="text-right">
																			<check-value :value="form.total_pinjaman_kurang" valueType="currency"></check-value>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>

													<!-- pinjaman yang disolidaritaskan -->
													<div class="card">
														<div class="card-header">
															<b>C. Piutang Yang Disolidaritaskan</b>
														</div>
														<div class="table-responsive">
															<table class="table">
																<tbody>
																	<tr>
																		<th>A - B</th>
																		<td class="text-right">
																			<check-value :value="(form.total_pinjaman - form.total_pinjaman_kurang)" valueType="currency"></check-value>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>

													<!-- iuran -->
													<div class="card">
														<div class="card-header">
															<b>D. Iuran</b>
														</div>
														<div class="table-responsive">
															<table class="table">
																<tbody>
																	<tr>
																		<th>Iuran Lintang</th>
																		<td class="text-right">
																			<check-value :value="(((form.total_pinjaman - form.total_pinjaman_kurang) * 0.6) / 1000)" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>Pembulatan Setoran Solidaritas Lintang (50)</th>
																		<td class="text-right">
																			<check-value :value="(Math.round((((form.total_pinjaman - form.total_pinjaman_kurang) * 0.55) / 1000)/50) * 50)" valueType="currency"></check-value>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>		

												</div>
											</div>

										</div>

										<!-- total -->
										<div class="col-lg-12">
											<div class="card">
												<div class="card-header bg-white">
													<h5 class="card-title">Total</h5>
												</div>
												<div class="table-responsive">
													<table class="table">
														<tbody>
															<tr>
																<th>Jumlah Setoran Solidaritas Jalinan</th>
																<td class="text-right">
																	<check-value :value="(Math.round((((form.total_simpanan - form.total_simpanan_kurang) * 0.55) / 1000) / 50) * 50) + (Math.round((((form.total_pinjaman - form.total_pinjaman_kurang) * 0.55) / 1000)/50) * 50)" valueType="currency"></check-value>
																</td>
															</tr>
															<tr>
																<th>Jumlah Setoran Solidaritas Jalinan Yang Dibayarkan</th>
																<td class="text-right">
																	<check-value :value="(Math.round((((form.total_simpanan - form.total_simpanan_kurang) * 0.55) / 1000) / 50) * 50) + (Math.round((((form.total_pinjaman - form.total_pinjaman_kurang) * 0.55) / 1000)/50) * 50)" valueType="currency"></check-value>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>

									</div>
									
									<!-- form info -->
									<form-info></form-info>	
									<br/>

									<button type="button" class="btn btn-danger btn-block btn-lg mb-3" readonly v-if="form.status == 0">
										<b>STATUS : BELUM BAYAR</b>
									</button>

									<button type="button" class="btn btn-warning btn-block btn-lg mb-3" readonly v-if="form.status == 1">
										<b>STATUS : SUDAH BAYAR DAN MENUNGGU KONFIRMASI</b>
									</button>

									<button type="button" class="btn btn-primary btn-block btn-lg mb-3" readonly v-if="form.status == 2">
										<b>STATUS : SUDAH LUNAS</b>
									</button>

									<!-- form button -->
									<div class="card card-body" v-if="currentUser.id_cu == 0">
										<form-button
											:cancelState="cancelState"
											:formValidation="'form'"
											:confirmTitle="confirmTitle"
											@cancelClick="back" v-if="form.status != 0"></form-button>
										<form-button
											:cancelState="cancelState"
											:isSingleButton=true
											@cancelClick="back" v-else></form-button>
									</div>
									<div class="card card-body" v-else>
										<form-button
											:cancelState="cancelState"
											:formValidation="'form'"
											:confirmTitle="confirmTitle"
											@cancelClick="back" v-if="form.status != 2"></form-button>
										<form-button
											:cancelState="cancelState"
											:isSingleButton=true
											@cancelClick="back" v-else></form-button>
									</div>
								</form>	
							</div>
						</transition>

						<!-- sheet3 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet3'">
								<table-anggota :kelas="kelas" :title="'Simp > 5JT'" :produkData="form.produk" :cu="form.id_cu" :lokasi="3" :deskripsi="'Simpanan khusus anggota yang masuk CU berusia 0 s.d. 1 tahun yang jumlah simpanan melebihi plafon Rp5.000.000,00. Simpanan yang disolidaritaskan hanya sebesar maksimal Rp5.000.000,00; kelebihan simpanan tersebut menjadi pengurang setoran solidaritas'"></table-anggota>
							</div>
						</transition>

						<!-- sheet4 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet4'">
								<table-anggota :kelas="kelas" :title="'Simp > 50JT | 1 s.d. 70 Thn'" :produkData="form.produk" :cu="form.id_cu" :lokasi="4" :deskripsi="'Simpanan khusus anggota yang masuk CU dibawah usia 60 tahun dan sekarang berusia 1 s.d. 70 tahun, yang jumlah simpanannya melebihi plafon Rp50.000.000,00. Simpanan yang disolidaritaskan hanya sebesar maksimal Rp50.000.000,00; kelebihan simpanan tersebut menjadi pengurang setoran solidaritas'"></table-anggota>
							</div>
						</transition>

						<!-- sheet5 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet5'">
								<table-anggota :kelas="kelas" :title="'Simp > 10JT | 60 s.d. 70 Thn'" :produkData="form.produk" :cu="form.id_cu" :lokasi="5" :deskripsi="'Simpanan khusus anggota yang amsuk CU berusia 60 s.d. 70 tahun yang jumlah simpanannya melebihi plafon Rp10.000.000,00. Simpanan yang disolidaritaskan hanya sebesar maksimal Rp10.000.000,00; Kelebihan simpanan tersebut menjadi pengurang setoran solidaritas'"></table-anggota>
							</div>
						</transition>

						<!-- sheet6 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet6'">
								<table-anggota :kelas="kelas" :title="'Simp > 70 Thn | Masuk < 60 Thn'" :produkData="form.produk" :cu="form.id_cu" :lokasi="6"></table-anggota>
							</div>
						</transition>

						<!-- sheet7 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet7'">
								<table-anggota :kelas="kelas" :title="'Simp > 70 Thn | Masuk 60 s.d. 70 Thn'" :produkData="form.produk" :cu="form.id_cu" :lokasi="7"></table-anggota>
							</div>
						</transition>

						<!-- sheet8 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet8'">
								<table-anggota :kelas="kelas" :title="'Masuk > 70 Thn<'" :produkData="form.produk" :cu="form.id_cu" :lokasi="8"></table-anggota>
							</div>
						</transition>

						<!-- sheet9 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet9'">
								<table-anggota :kelas="kelas" :title="'Simp Kap < 30 Hari'" :produkData="form.produk" :cu="form.id_cu" :lokasi="9"></table-anggota>
							</div>
						</transition>

						<!-- sheet10 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet10'">
								<table-anggota :kelas="kelas" :title="'Simp Kap Lalai 3 Hari'" :produkData="form.produk" :cu="form.id_cu" :lokasi="10"></table-anggota>
							</div>
						</transition>

						<!-- sheet11 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet11'">
								<table-anggota :kelas="kelas" :title="'Simp Lembaga'" :produkData="form.produk" :cu="form.id_cu" :lokasi="11"></table-anggota>
							</div>
						</transition>

						<!-- sheet12 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet12'">
								<table-anggota :kelas="kelas" :title="'Pinj Non Pro > 150 JT'" :produkData="form.produk" :cu="form.id_cu" :lokasi="12"></table-anggota>
							</div>
						</transition>

						<!-- sheet13 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet13'">
								<table-anggota :kelas="kelas" :title="'Pinj > 50 JT'" :produkData="form.produk" :cu="form.id_cu" :lokasi="13"></table-anggota>
							</div>
						</transition>
						
						<!-- sheet14 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet14'">
								<table-anggota :kelas="kelas" :title="'Pinj Kap > 25 JT'" :produkData="form.produk" :cu="form.id_cu" :lokasi="14"></table-anggota>
							</div>
						</transition>

						<!-- sheet15 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet15'">
								<table-anggota :kelas="kelas" :title="'Pinj Agt > 70 JT'" :produkData="form.produk" :cu="form.id_cu" :lokasi="15"></table-anggota>
							</div>
						</transition>

						<!-- sheet16 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet16'">
								<table-anggota :kelas="kelas" :title="'Pinj Kap > 30 Hari'" :produkData="form.produk" :cu="form.id_cu" :lokasi="16"></table-anggota>
							</div>
						</transition>

						<!-- sheet17 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet17'">
								<table-anggota :kelas="kelas" :title="'Pinj Macet > 6 Bln'" :produkData="form.produk" :cu="form.id_cu" :lokasi="17"></table-anggota>
							</div>
						</transition>

						<!-- sheet18 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet18'">
								<table-anggota :kelas="kelas" :title="'Pinj Kap Lalai > 3 Bln'" :produkData="form.produk" :cu="form.id_cu" :lokasi="18"></table-anggota>
							</div>
						</transition>

						<!-- sheet21 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet21'">
								<table-anggota :kelas="kelas" :title="'Pinj Pro > 300 JT'" :produkData="form.produk" :cu="form.id_cu" :lokasi="21"></table-anggota>
							</div>
						</transition>

						<!-- sheet22 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet22'">
								<table-anggota :kelas="kelas" :title="'Pinj Ganda > 300 JT'" :produkData="form.produk" :cu="form.id_cu" :lokasi="22"></table-anggota>
							</div>
						</transition>

						<!-- sheet23 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet23'">
								<table-anggota :kelas="kelas" :title="'Piut Kap > 5 Thn'" :produkData="form.produk" :cu="form.id_cu" :lokasi="23"></table-anggota>
							</div>
						</transition>

						<!-- sheet24 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet24'">
								<table-anggota :kelas="kelas" :title="'Piut Umum > 15 Thn'" :produkData="form.produk" :cu="form.id_cu" :lokasi="24"></table-anggota>
							</div>
						</transition>

						<!-- sheet25 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'sheet25'">
								<table-anggota :kelas="kelas" :title="'Pinj Lain-lain'" :produkData="form.produk" :cu="form.id_cu" :lokasi="25"></table-anggota>
							</div>
						</transition>

					</div>	

					<!-- loading -->
					<div v-else-if="formStat == 'loading'">
						<div class="card">
							<div class="card-body">
								<h4>Mohon tunggu...</h4>
								<div class="progress">
									<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
										<span class="sr-only">100% Complete</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div v-else>
						<!-- form button -->
						<div class="card card-body">
							<form-button
								:cancelState="cancelState"
								:isSingleButton=true
								@cancelClick="back"></form-button>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<template slot="modal-body1">

			</template>

		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import _ from 'lodash';
	import pageHeader from "../../components/pageHeader.vue";
	import infoIcon from "../../components/infoIcon.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import dataTable from '../../components/datatable.vue';
	import DatePicker from "../../components/datePicker.vue";
	import checkValue from "../../components/checkValue.vue";
	import tableAnggota from "./tableAnggota.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			formButton,
			formInfo,
			dataTable,
			infoIcon,
			wajibBadge,
			DatePicker,
			checkValue,
			tableAnggota
		},
		data() {
			return {
				title: 'Detail Setoran Solidaritas Jalinan',
				titleDesc: 'Detail iuran Jalinan',
				titleIcon: 'icon-stack2',
				level: 2,
				level2Title: 'Iuran Jalinan',
				kelas: 'jalinanIuran',
				sasaran: [],
				tempatData: '',
				idCu: '',
				periodeBulan: '',
				periodeTahun: '',
				itemTahun: [],
				tabName: 'iuran',
				anggotaMasukData: [],
				cancelState: 'methods',
				state: '',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalSize: '',
				submited: false,
				confirmTitle: '',
				query: {
					order_column: "id",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		created(){
			this.formStat == '';
			this.anggotaDataStat == '';
		},
		watch: {
			formStat(value){
				if(value == 'success'){
					if(this.currentUser.id_cu == 0){
						if(this.form.status == 0){
							this.confirmTitle = 'Konfirmasi Pembayaran'
						}else if(this.form.status == 1){
							this.confirmTitle = 'Iuran Lunas'
						}else if(this.form.status == 2){
							this.confirmTitle = 'Batal Lunas'
						}
					}else{
						if(this.form.status == 0){
							this.confirmTitle = 'Konfirmasi Pembayaran'
						}else if(this.form.status == 1){
							this.confirmTitle = 'Batal Pembayaran'
						}
					}
				}
			},
			updateStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateResponse.message;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			},
    },
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
			},
			save() {
				this.form.id_cu = this.idCu;
				this.state = '';
				
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, this.form]);
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			back(){
				if(this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu:'semua'}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu}});
				}
			},
			changeTab(value){
				this.tabName = value;
			},
			selectedRow(item,index){
				this.selectedItemCalon = item;
				this.selectedItemCalon.index = index;
			},
			selectedRow2(item,index){
				this.selectedItemSuara = item;
				this.selectedItemSuara.index = index;
			},
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;

				if(isMobile){
					this.selectedItemCalon = itemMobile;
				}

				if (state == 'hapusCalon') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Calon' + this.selectedItemCalon.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahCalon'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Calon';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formCalonMode = 'edit';
				}else if(state == 'tambahCalon'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Calon';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formCalonMode = 'create';
				}
			},
			modalConfirmOk() {
				this.modalShow = false;

				if (this.state == 'hapusCalon') {
					_.remove(this.itemDataCalon, {
						index: this.selectedItemCalon.index
					});
					this.selectedItemCalon = {};
				}
			},
			modalTutup() {
 				if(this.updateStat == 'success' && this.state == ''){
					this.$store.dispatch(this.kelas + '/resetUpdateStat');
					this.back();
				}
				this.modalShow = false;
			},
			modalBackgroundClick(){
				if(this.modalState === 'success'){
					this.modalTutup;
				}else if(this.modalState === 'loading'){
					// do nothing
				}else{
					this.modalShow = false
				}
			},
			momentYear(){
				return moment().year();
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('cu',{
				modelCu: 'headerDataS',
				modelCuStat: 'headerDataStatS',
			}),
			...mapGetters('jalinanIuran',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('anggotaCu',{
				anggotaData: 'dataS',
				anggotaDataStat: 'dataStatS',
				anggotaKeluarData: 'dataS2',
				anggotaKeluarDataStat: 'dataStatS2',
			}),
		}
	}
</script>