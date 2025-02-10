<template>
	<div>
		<form-filter :cuTabName="cuTabName" :bkcuTabName="bkcuTabName" :jumlahPenilaianCU="jumlahPenilaianCU"
			:jumlahPenilaianBKCU="jumlahPenilaianBKCU" @changeTabCU="changeTabCU"
			@changeTabBKCU="changeTabBKCU"></form-filter>

		<!-- A section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
				<div class="card card-body bg-info text-white">
					<div class="row justify-content-between">
						<div class="col-md-6">
							<h6 class="mb-0 font-weight-bold">1. PARTISIPASI</h6>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a1 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.a1_cu_penilaian == cuTabName || form.p1.a1_bkcu_penilaian == bkcuTabName">
				<div class="card border-info">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							1.1. Informasi Rapat Anggota Tahunan kepada Para Anggota</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p1.a1_cu_penilaian" @click1="form.p1.a1_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Agenda; Laporan Keuangan; Pengajuan Anggaran; Laporan Pengurus, Sub – Komite dan Manajemen dikirim kurang dari 10 hari sebelum rapat.'"
									@click2="form.p1.a1_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan yang menunjukkan bahwa dokumen utama rapat seperti Agenda, Laporan Keuangan yang telah diaudit, Pengajuan Anggaran, dan Laporan Pengurus, Sub-Komite dan Manajemen dikirim 15 – 10 hari sebelum rapat sehingga memungkinkan anggota untuk mendapat informasi yang cukup sebelum rapat. Telah memenuhi persyaratan ini dalam satu tahun terakhir.'"
									@click3="form.p1.a1_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan yang menunjukkan bahwa Dokumen utama rapat seperti Agenda, Laporan Keuangan yang telah diaudit, Pengajuan Anggaran, Laporan Pengurus, Sub – Komite dan Manajemen dikirim 1 bulan sebelum rapat sehingga memungkinkan anggota untuk mendapat informasi yang cukup sebelum rapat. Telah memenuhi persyaratan ini dalam satu tahun terakhir.'"
									@click4="form.p1.a1_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan yang menunjukkan bahwa Dokumen utama rapat seperti Agenda, Laporan Keuangan yang telah diaudit, Pengajuan Anggaran, Laporan Pengurus, Sub – Komite dan Manajemen dikirim 1 bulan sebelum rapat sehingga memungkinkan anggota untuk mendapat informasi yang cukup sebelum rapat. Telah memenuhi persyaratan ini minimal dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a1_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.a1_cu_keterangan"
										:readonly="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
								</div>
							</div>
							<!-- penilaian bkcu -->
							<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
								<div class="row">
									<div class="col-md-12">
										<hr />
									</div>
									<div class="col-md-12">
										<h5>Penilaian PUSKOPCUINA:</h5>
										<!-- penilaian -->
										<penilaian-bkcu :form="form.p1.a1_bkcu_penilaian"
											@click1="form.p1.a1_bkcu_penilaian = 1"
											@click2="form.p1.a1_bkcu_penilaian = 2"
											@click3="form.p1.a1_bkcu_penilaian = 3"
											@click4="form.p1.a1_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p1.a1_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p1.a1_bkcu_rekomendasi"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12" v-if="$route.meta.mode != 'lihat'">
								<hr />
								<button type="button" class="btn btn-light btn-block" disabled
									v-if="updateSingleStat == 'loading'">
									<i class="icon-sync spinner"></i>
								</button>
								<button type="button" class="btn btn-warning btn-block" @click.prevent="saveSingle"
									v-else>
									<i class="icon-floppy-disk"></i> Simpan Draft Untuk Perspektif Ini
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a2 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.a2_cu_penilaian == cuTabName || form.p1.a2_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p1.a1_cu_penilaian != null && form.p1.a1_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							1.2. Kuorum RAT</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p1.a2_cu_penilaian" @click1="form.p1.a2_cu_penilaian = 1"
									:subtitle1="'Kehadiran  memenuhi kuorum 100 % dan tidak ada kebijakan.'"
									@click2="form.p1.a2_cu_penilaian = 2"
									:subtitle2="'Adanya kebijakan bahwa hanya anggota yang aktif dan bereputasi baik yang dianggap memenuhi kuorum RAT dan rapat Anggota khusus, sehingga pemberian kuasa tidak diperbolehkan kapan pun. Kuorum setidaknya tercapai 110% - 120% pada 1 tahun terakhir.'"
									@click3="form.p1.a2_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan bahwa hanya anggota aktif dan bereputasi baik yang dianggap memenuhi kuorum RAT dan rapat Anggota khusus, sehingga pemberian kuasa tidak diperbolehkan kapan pun. Kuorum setidaknya tercapai 110%-120% sejak 2 tahun terakhir.'"
									@click4="form.p1.a2_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan bahwa hanya anggota aktif dan bereputasi baik yang dianggap memenuhi kuorum RAT dan rapat Anggota khusus, sehingga pemberian kuasa tidak diperbolehkan kapan pun. Kuorum terpenuhi lebih dari 120% sejak 3 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a2_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.a2_cu_keterangan"
										:readonly="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
								</div>
							</div>
							<!-- penilaian bkcu -->
							<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
								<div class="row">
									<div class="col-md-12">
										<hr />
									</div>
									<div class="col-md-12">
										<h5>Penilaian PUSKOPCUINA:</h5>
										<!-- penilaian -->
										<penilaian-bkcu :form="form.p1.a2_bkcu_penilaian"
											@click1="form.p1.a2_bkcu_penilaian = 1"
											@click2="form.p1.a2_bkcu_penilaian = 2"
											@click3="form.p1.a2_bkcu_penilaian = 3"
											@click4="form.p1.a2_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p1.a2_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p1.a2_bkcu_rekomendasi"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12" v-if="$route.meta.mode != 'lihat'">
								<hr />
								<button type="button" class="btn btn-light btn-block" disabled
									v-if="updateSingleStat == 'loading'">
									<i class="icon-sync spinner"></i>
								</button>
								<button type="button" class="btn btn-warning btn-block" @click.prevent="saveSingle"
									v-else>
									<i class="icon-floppy-disk"></i> Simpan Draft Untuk Perspektif Ini
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a3 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.a3_cu_penilaian == cuTabName || form.p1.a3_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p1.a2_cu_penilaian != null && form.p1.a2_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							1.3. Remunerasi Pengurus dan Komite</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p1.a3_cu_penilaian" @click1="form.p1.a3_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan dan remunerasi Pengurus dan komite disetujui oleh Pengurus.'"
									@click2="form.p1.a3_cu_penilaian = 2"
									:subtitle2="'Para anggota dapat menyampaikan pandangan mereka tentang kebijakan remunerasi bagi pengurus dan komite. RAT membahas panjang lebar dan menyetujui rekomendasi Pengurus.'"
									@click3="form.p1.a3_cu_penilaian = 3"
									:subtitle3="'Para anggota dapat menyampaikan pandangan mereka tentang kebijakan remunerasi bagi pengurus dan komite. RAT secara objektif membahas dan menyetujui rekomendasi Pengurus.'"
									@click4="form.p1.a3_cu_penilaian = 4"
									:subtitle4="'Para anggota dapat menyampaikan pandangan mereka tentang kebijakan remunerasi bagi pengurus dan komite. RAT dengan suara bulat menyetujui rekomendasi dari Pengurus karena dasar tarif yang digunakan wajar.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a3_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.a3_cu_keterangan"
										:readonly="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
								</div>
							</div>
							<!-- penilaian bkcu -->
							<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
								<div class="row">
									<div class="col-md-12">
										<hr />
									</div>
									<div class="col-md-12">
										<h5>Penilaian PUSKOPCUINA:</h5>
										<!-- penilaian -->
										<penilaian-bkcu :form="form.p1.a3_bkcu_penilaian"
											@click1="form.p1.a3_bkcu_penilaian = 1"
											@click2="form.p1.a3_bkcu_penilaian = 2"
											@click3="form.p1.a3_bkcu_penilaian = 3"
											@click4="form.p1.a3_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p1.a3_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p1.a3_bkcu_rekomendasi"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12" v-if="$route.meta.mode != 'lihat'">
								<hr />
								<button type="button" class="btn btn-light btn-block" disabled
									v-if="updateSingleStat == 'loading'">
									<i class="icon-sync spinner"></i>
								</button>
								<button type="button" class="btn btn-warning btn-block" @click.prevent="saveSingle"
									v-else>
									<i class="icon-floppy-disk"></i> Simpan Draft Untuk Perspektif Ini
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a4 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.a4_cu_penilaian == cuTabName || form.p1.a4_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p1.a3_cu_penilaian != null && form.p1.a3_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							1.4. Komposisi dan Komitmen Pengurus</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p1.a4_cu_penilaian" @click1="form.p1.a4_cu_penilaian = 1"
									:subtitle1="'<ul><li>Keanggotaan dengan ragam latar belakang kerja yang terbatas</li><li>Berasal dari lingkar dekat para anggota</li><li>Kemampuan terbatas atau pengalaman yang tidak relevan</li><li>Komitmen yang rendah terhadap keberhasilan organisasi, visi, dan misi organisasi</li><li>Jarang rapat, dan tingkat kehadiran yang rendah.</li></ul>'"
									@click2="form.p1.a4_cu_penilaian = 2"
									:subtitle2="'<ul><li>Keanggotaan dengan sedikit ragam latar belakang kerja</li><li>Keanggotaan mewakili beberapa segmen yang berbeda </li><li>Komitmen yang cukup (moderat) terhadap kesuksesan, visi, misi organisasi, dan sikap menyesuaikan.</li><li>Rapat rutin dengan kecenderungan kehadiran seluruh anggota. </li><li>Keanggotaan dengan sedikit ragam latar belakang kerja</li><li>Keanggotaan mewakili beberapa segmen yang berbeda </li><li>Komitmen yang cukup (moderat) terhadap kesuksesan, visi, misi organisasi, dan sikap menyesuaikan.</li><li>Rapat rutin dengan kecenderungan kehadiran seluruh anggota.</li></ul>'"
									@click3="form.p1.a4_cu_penilaian = 3"
									:subtitle3="'<ul><li>Keanggotaan dengan keragaman yang baik dari latar belakang kerja dan keahlian</li><li>Keanggotaan mewakili sebagian besar segmen yang berbeda</li><li>Komitmen yang baik terhadap kesuksesan, visi, misi organisasi, dan sikap menyesuaikan.</li><li>Rapat rutin, penuh energi, dan terencana baik dengan kehadiran seluruh anggota secara konsisten.</li></ul>'"
									@click4="form.p1.a4_cu_penilaian = 4"
									:subtitle4="'<ul><li>Keanggotaan dengan latar belakang kerja dan keahlian sangat beragam, dan mewakili seluruh segmen pasar</li><li>Mencakup keahlian terkait konten program fungsional</li><li>Kemauan tinggi dan rekam jejak yang terbukti dalam berinvestasi di CU dan mempelajari CU serta menangani masalah-masalahnya.</li><li>Komitmen yang sangat luar biasa terhadap kesuksesan, visi, dan misi CU</li><li>Rutin pertemuan tatap muka, tingkat kehadiran yang baik, dan rapat rutin.</li></ul>'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a4_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.a4_cu_keterangan"
										:readonly="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
								</div>
							</div>
							<!-- penilaian bkcu -->
							<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
								<div class="row">
									<div class="col-md-12">
										<hr />
									</div>
									<div class="col-md-12">
										<h5>Penilaian PUSKOPCUINA:</h5>
										<!-- penilaian -->
										<penilaian-bkcu :form="form.p1.a4_bkcu_penilaian"
											@click1="form.p1.a4_bkcu_penilaian = 1"
											@click2="form.p1.a4_bkcu_penilaian = 2"
											@click3="form.p1.a4_bkcu_penilaian = 3"
											@click4="form.p1.a4_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p1.a4_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p1.a4_bkcu_rekomendasi"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12" v-if="$route.meta.mode != 'lihat'">
								<hr />
								<button type="button" class="btn btn-light btn-block" disabled
									v-if="updateSingleStat == 'loading'">
									<i class="icon-sync spinner"></i>
								</button>
								<button type="button" class="btn btn-warning btn-block" @click.prevent="saveSingle"
									v-else>
									<i class="icon-floppy-disk"></i> Simpan Draft Untuk Perspektif Ini
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a5 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.a5_cu_penilaian == cuTabName || form.p1.a5_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p1.a4_cu_penilaian != null && form.p1.a4_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							1.5. Kehadiran dan partisipasi Pengurus </h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p1.a5_cu_penilaian" @click1="form.p1.a5_cu_penilaian = 1"
									:subtitle1="'Pengurus bertemu setiap tiga bulan, dan berunding secara independen dari komite eksekutif atau komite lainnya. Rata-rata di bawah 70% dari anggota Pengurus menghadiri pertemuan dalam tiga tahun terakhir. Absen diijinkan.'"
									@click2="form.p1.a5_cu_penilaian = 2"
									:subtitle2="'Pengurus bertemu setiap tiga bulan, dan berunding secara independen dari komite eksekutif atau komite lainnya. Rata-rata 70% - 89% dari anggota Pengurus menghadiri pertemuan dalam tiga tahun terakhir. Absen diijinkan.'"
									@click3="form.p1.a5_cu_penilaian = 3"
									:subtitle3="'Pengurus bertemu setiap tiga bulan, dan berunding secara independen dari komite eksekutif atau komite lainnya. Rata-rata 90% dari anggota Pengurus menghadiri pertemuan dalam tiga tahun terakhir. Absen diijinkan.'"
									@click4="form.p1.a5_cu_penilaian = 4"
									:subtitle4="'Pengurus bertemu setiap tiga bulan, dan berunding secara independen dari komite eksekutif atau komite lainnya. 100% dari anggota Pengurus menghadiri pertemuan dalam tiga tahun terakhir. '"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a5_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.a5_cu_keterangan"
										:readonly="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
								</div>
							</div>
							<!-- penilaian bkcu -->
							<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
								<div class="row">
									<div class="col-md-12">
										<hr />
									</div>
									<div class="col-md-12">
										<h5>Penilaian PUSKOPCUINA:</h5>
										<!-- penilaian -->
										<penilaian-bkcu :form="form.p1.a5_bkcu_penilaian"
											@click1="form.p1.a5_bkcu_penilaian = 1"
											@click2="form.p1.a5_bkcu_penilaian = 2"
											@click3="form.p1.a5_bkcu_penilaian = 3"
											@click4="form.p1.a5_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p1.a5_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p1.a5_bkcu_rekomendasi"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12" v-if="$route.meta.mode != 'lihat'">
								<hr />
								<button type="button" class="btn btn-light btn-block" disabled
									v-if="updateSingleStat == 'loading'">
									<i class="icon-sync spinner"></i>
								</button>
								<button type="button" class="btn btn-warning btn-block" @click.prevent="saveSingle"
									v-else>
									<i class="icon-floppy-disk"></i> Simpan Draft Untuk Perspektif Ini
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a6 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.a6_cu_penilaian == cuTabName || form.p1.a6_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p1.a5_cu_penilaian != null && form.p1.a5_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							1.6. Fungsi Pengawasan Pengurus </h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p1.a6_cu_penilaian" @click1="form.p1.a6_cu_penilaian = 1"
									:subtitle1="'Tidak adanya kebijakan bahwa anggota Pengurus diberikan waktu yang cukup (setidaknya 15 hari) untuk analisis dan membuat pertimbangan sehingga mereka dapat menjalankan fungsi pengawasan dan fungsi pengarahan mereka. Agenda dan bahan rapat pengurus diberikan kurang dari 15 hari sebelum pertemuan atau pada hari pertemuan.'"
									@click2="form.p1.a6_cu_penilaian = 2"
									:subtitle2="'Walaupun tidak ada kebijakan, anggota Pengurus diberikan waktu yang cukup (setidaknya 15 hari) untuk analisis dan membuat pertimbangan, sehingga mereka dapat menjalankan fungsi pengawasan dan fungsi pengarahan mereka. Ini telah diterapkan secara konsisten dalam satu periode terakhir Pengurus dan juga pada pengurus saat ini.'"
									@click3="form.p1.a6_cu_penilaian = 3"
									:subtitle3="'Tersedia kebijakan bahwa anggota Pengurus diberikan waktu yang cukup (setidaknya 15 hari) untuk analisis dan membuat pertimbangan sehingga mereka dapat menjalankan fungsi pengawasan dan fungsi pengarahan mereka. Ini telah diterapkan secara konsisten dalam satu periode terakhir Pengurus dan juga pada pengurus saat ini.'"
									@click4="form.p1.a6_cu_penilaian = 4"
									:subtitle4="'Tersedia kebijakan bahwa anggota Pengurus diberikan waktu yang cukup (setidaknya 15 hari) untuk analisis dan membuat pertimbangan sehingga mereka dapat menjalankan fungsi pengawasan dan fungsi pengarahan mereka. Ini telah diterapkan secara konsisten sejak dua periode terakhir Pengurus sampai saat ini.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a6_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.a6_cu_keterangan"
										:readonly="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
								</div>
							</div>
							<!-- penilaian bkcu -->
							<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
								<div class="row">
									<div class="col-md-12">
										<hr />
									</div>
									<div class="col-md-12">
										<h5>Penilaian PUSKOPCUINA:</h5>
										<!-- penilaian -->
										<penilaian-bkcu :form="form.p1.a6_bkcu_penilaian"
											@click1="form.p1.a6_bkcu_penilaian = 1"
											@click2="form.p1.a6_bkcu_penilaian = 2"
											@click3="form.p1.a6_bkcu_penilaian = 3"
											@click4="form.p1.a6_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a6_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p1.a6_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a6_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p1.a6_bkcu_rekomendasi"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12" v-if="$route.meta.mode != 'lihat'">
								<hr />
								<button type="button" class="btn btn-light btn-block" disabled
									v-if="updateSingleStat == 'loading'">
									<i class="icon-sync spinner"></i>
								</button>
								<button type="button" class="btn btn-warning btn-block" @click.prevent="saveSingle"
									v-else>
									<i class="icon-floppy-disk"></i> Simpan Draft Untuk Perspektif Ini
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a7 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.a7_cu_penilaian == cuTabName || form.p1.a7_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p1.a6_cu_penilaian != null && form.p1.a6_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							1.7. Tinjauan Kebijakan oleh Pengurus</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p1.a7_cu_penilaian" @click1="form.p1.a7_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan dan tidak ada tinjauan kebijakan yang dibuat dalam dua periode Pengurus terakhir.'"
									@click2="form.p1.a7_cu_penilaian = 2"
									:subtitle2="'Pengurus tidak menetapkan kebijakan dan tidak secara berkala meninjau kebijakan dan strategi. Tinjauan tidak teratur.'"
									@click3="form.p1.a7_cu_penilaian = 3"
									:subtitle3="'Pengurus menetapkan kebijakan dan secara berkala meninjau kebijakan dan strategi. Dilakukan secara konsisten sejak periode Pengurus terakhir.'"
									@click4="form.p1.a7_cu_penilaian = 4"
									:subtitle4="'Pengurus menetapkan kebijakan dan secara berkala meninjau kebijakan dan strategi. Dilakukan secara konsisten sejak 2 periode Pengurus terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a7_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.a7_cu_keterangan"
										:readonly="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
								</div>
							</div>
							<!-- penilaian bkcu -->
							<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
								<div class="row">
									<div class="col-md-12">
										<hr />
									</div>
									<div class="col-md-12">
										<h5>Penilaian PUSKOPCUINA:</h5>
										<!-- penilaian -->
										<penilaian-bkcu :form="form.p1.a7_bkcu_penilaian"
											@click1="form.p1.a7_bkcu_penilaian = 1"
											@click2="form.p1.a7_bkcu_penilaian = 2"
											@click3="form.p1.a7_bkcu_penilaian = 3"
											@click4="form.p1.a7_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a7_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p1.a7_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a7_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p1.a7_bkcu_rekomendasi"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12" v-if="$route.meta.mode != 'lihat'">
								<hr />
								<button type="button" class="btn btn-light btn-block" disabled
									v-if="updateSingleStat == 'loading'">
									<i class="icon-sync spinner"></i>
								</button>
								<button type="button" class="btn btn-warning btn-block" @click.prevent="saveSingle"
									v-else>
									<i class="icon-floppy-disk"></i> Simpan Draft Untuk Perspektif Ini
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a8 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.a8_cu_penilaian == cuTabName || form.p1.a8_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p1.a7_cu_penilaian != null && form.p1.a7_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							1.8. Kesetaraan Gender dalam Kepemimpinan</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p1.a8_cu_penilaian" @click1="form.p1.a8_cu_penilaian = 1"
									:subtitle1="'Tidak ada anggota Pengurus yang perempuan atau sebaliknya.'"
									@click2="form.p1.a8_cu_penilaian = 2"
									:subtitle2="'10% atau kurang anggota Pengurus yang perempuan atau sebaliknya.'"
									@click3="form.p1.a8_cu_penilaian = 3"
									:subtitle3="'11% - 49% dari Pengurus adalah perempuan atau sebaliknya setidaknya dalam dua periode terakhir.'"
									@click4="form.p1.a8_cu_penilaian = 4"
									:subtitle4="'50% dari anggota Pengurus adalah perempuan dan 50% laki-laki, serta berperan aktif setidaknya dalam tiga periode terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a8_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.a8_cu_keterangan"
										:readonly="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
								</div>
							</div>
							<!-- penilaian bkcu -->
							<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
								<div class="row">
									<div class="col-md-12">
										<hr />
									</div>
									<div class="col-md-12">
										<h5>Penilaian PUSKOPCUINA:</h5>
										<!-- penilaian -->
										<penilaian-bkcu :form="form.p1.a8_bkcu_penilaian"
											@click1="form.p1.a8_bkcu_penilaian = 1"
											@click2="form.p1.a8_bkcu_penilaian = 2"
											@click3="form.p1.a8_bkcu_penilaian = 3"
											@click4="form.p1.a8_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a8_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p1.a8_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a8_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p1.a8_bkcu_rekomendasi"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12" v-if="$route.meta.mode != 'lihat'">
								<hr />
								<button type="button" class="btn btn-light btn-block" disabled
									v-if="updateSingleStat == 'loading'">
									<i class="icon-sync spinner"></i>
								</button>
								<button type="button" class="btn btn-warning btn-block" @click.prevent="saveSingle"
									v-else>
									<i class="icon-floppy-disk"></i> Simpan Draft Untuk Perspektif Ini
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a9 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.a9_cu_penilaian == cuTabName || form.p1.a9_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p1.a8_cu_penilaian != null && form.p1.a8_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							1.9. Perlakuan yang terukur terhadap Pengurus, Petugas, dan Karyawan</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p1.a9_cu_penilaian" @click1="form.p1.a9_cu_penilaian = 1"
									:subtitle1="'Tidak ada Kebijakan. Adanya pelanggaran.'"
									@click2="form.p1.a9_cu_penilaian = 2"
									:subtitle2="'Tidak ada kebijakan bahwa Pengurus, mantan pengurus, Penasihat dan mereka yang ditunjuk sebagai pejabat eksekutif dari credit union tidak berhak atas tarif khusus yang tidak tersedia bagi anggota untuk pinjaman apa pun. Tidak ada pelanggaran yang dicatat atau dilaporkan dalam satu tahun terakhir.'"
									@click3="form.p1.a9_cu_penilaian = 3"
									:subtitle3="'Tersedia kebijakan bahwa Pengurus, mantan pengurus, Penasihat dan mereka yang ditunjuk sebagai pejabat eksekutif dari credit union tidak berhak atas tarif khusus yang tidak tersedia bagi anggota untuk pinjaman apa pun. Tidak ada pelanggaran yang dicatat atau dilaporkan dalam satu tahun terakhir.'"
									@click4="form.p1.a9_cu_penilaian = 4"
									:subtitle4="'Tersedia kebijakan bahwa Pengurus, mantan pengurus, Penasihat dan mereka yang ditunjuk sebagai pejabat eksekutif dari credit union tidak berhak atas tarif khusus yang tidak tersedia bagi anggota untuk pinjaman apa pun. Tidak ada pelanggaran yang dicatat atau dilaporkan dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a9_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.a9_cu_keterangan"
										:readonly="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
								</div>
							</div>
							<!-- penilaian bkcu -->
							<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
								<div class="row">
									<div class="col-md-12">
										<hr />
									</div>
									<div class="col-md-12">
										<h5>Penilaian PUSKOPCUINA:</h5>
										<!-- penilaian -->
										<penilaian-bkcu :form="form.p1.a9_bkcu_penilaian"
											@click1="form.p1.a9_bkcu_penilaian = 1"
											@click2="form.p1.a9_bkcu_penilaian = 2"
											@click3="form.p1.a9_bkcu_penilaian = 3"
											@click4="form.p1.a9_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a9_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p1.a9_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a9_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p1.a9_bkcu_rekomendasi"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12" v-if="$route.meta.mode != 'lihat'">
								<hr />
								<button type="button" class="btn btn-light btn-block" disabled
									v-if="updateSingleStat == 'loading'">
									<i class="icon-sync spinner"></i>
								</button>
								<button type="button" class="btn btn-warning btn-block" @click.prevent="saveSingle"
									v-else>
									<i class="icon-floppy-disk"></i> Simpan Draft Untuk Perspektif Ini
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a10 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.a10_cu_penilaian == cuTabName || form.p1.a10_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p1.a9_cu_penilaian != null && form.p1.a9_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							1.10. Anggota masyarakat menggunakan layanan CU</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p1.a10_cu_penilaian" @click1="form.p1.a10_cu_penilaian = 1"
									:subtitle1="'Kurang dari 10% jumlah populasi pekerja di wilayah pelayanan adalah anggota CU'"
									@click2="form.p1.a10_cu_penilaian = 2"
									:subtitle2="'10% - 19% jumlah populasi pekerja di wilayah pelayanan adalah anggota CU'"
									@click3="form.p1.a10_cu_penilaian = 3"
									:subtitle3="'20% - 30% jumlah populasi pekerja di wilayah pelayanan adalah anggota CU'"
									@click4="form.p1.a10_cu_penilaian = 4"
									:subtitle4="'Lebih dari 30% jumlah populasi pekerja di wilayah pelayanan adalah anggota CU'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a10_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.a10_cu_keterangan"
										:readonly="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
								</div>
							</div>
							<!-- penilaian bkcu -->
							<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
								<div class="row">
									<div class="col-md-12">
										<hr />
									</div>
									<div class="col-md-12">
										<h5>Penilaian PUSKOPCUINA:</h5>
										<!-- penilaian -->
										<penilaian-bkcu :form="form.p1.a10_bkcu_penilaian"
											@click1="form.p1.a10_bkcu_penilaian = 1"
											@click2="form.p1.a10_bkcu_penilaian = 2"
											@click3="form.p1.a10_bkcu_penilaian = 3"
											@click4="form.p1.a10_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a10_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p1.a10_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a10_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p1.a10_bkcu_rekomendasi"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12" v-if="$route.meta.mode != 'lihat'">
								<hr />
								<button type="button" class="btn btn-light btn-block" disabled
									v-if="updateSingleStat == 'loading'">
									<i class="icon-sync spinner"></i>
								</button>
								<button type="button" class="btn btn-warning btn-block" @click.prevent="saveSingle"
									v-else>
									<i class="icon-floppy-disk"></i> Simpan Draft Untuk Perspektif Ini
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- next button -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
				<div class="card card-body"
					v-if="form.p1.a10_cu_penilaian != null && form.p1.a10_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="text-center d-none d-md-block">
						<button type="button" class="btn btn-light" @click.prevent="prev">
							<i class="icon-arrow-left13"></i> Batal
						</button>

						<button type="button" class="btn btn-primary" @click.prevent="next">
							<i class="icon-arrow-right14"></i> Selanjutnya
						</button>
					</div>
					<div class="d-block d-md-none">
						<button type="button" class="btn btn-primary btn-block" @click.prevent="next">
							<i class="icon-arrow-right14"></i> Selanjutnya
						</button>

						<button type="button" class="btn btn-light btn-block" @click.prevent="prev">
							<i class="icon-arrow-left13"></i> Batal
						</button>
					</div>
				</div>
			</div>
		</transition>

		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :size="modalSize" :color="modalColor"
			:button="modalButton" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"
			@backgroundClick="modalTutup">
			<template slot="modal-title">{{ modalTitle }}</template>

			<template slot="modal-body1">
				<form-katex :kelas="kelas" :modalKatex="modalKatex" @tutup="modalTutup"></form-katex>
			</template>

		</app-modal>

	</div>
</template>

<script>
import Vue from 'vue';
import _ from 'lodash';
import { mapGetters } from 'vuex';
import Cleave from 'vue-cleave-component';
import formKatex from '../laporanCu/formKatex';
import appModal from '../../components/modal';
import penilaianCu from "./penilaian_cu.vue";
import penilaianBkcu from "./penilaian_bkcu.vue";
import formFilter from "./form_filter.vue";
import wajibBadge from "../../components/wajibBadge.vue";

export default {
	props: ['form', 'mode', 'jumlahIndikator', 'bobotSkor', 'itemData', 'updateSingleStat'],
	components: {
		formKatex,
		appModal,
		Cleave,
		penilaianCu,
		penilaianBkcu,
		formFilter,
		wajibBadge
	},
	data() {
		return {
			kelas: 'laporanCu',
			cuTabName: 'semua',
			bkcuTabName: 'semua',
			modalShow: false,
			modalState: '',
			modalTitle: '',
			modalSize: '',
			modalColor: '',
			modalButton: '',
			modalKatex: {
				id: '',
				id_cu: '',
				no_ba: '',
				periode: '',
				section: '',
				katex1: [],
				katex2: [],
				form: [],
				indikator: '',
				isUbah: false
			},
			cleaveOption: {
				numeric: {
					numeral: true,
					numeralThousandsGroupStyle: 'thousand',
					numeralDecimalScale: 2,
					numeralDecimalMark: ',',
					delimiter: '.'
				}
			},
		}
	},
	created() {
		this.skorCUA()
		this.skorBKCUA()
	},
	watch: {
		updateStat(value) {
			this.modalState = value;
			this.modalButton = 'Ok';

			if (value === "success") {
				this.modalTitle = this.updateMessage.message;
				this.modalContent = '';
				this.reloadPearls();
			} else if (value === "fail") {
				this.modalContent = this.updateMessage;
			} else {
				this.modalContent = '';
			}
		},
	},
	methods: {
		changeTabCU(value) {
			if (this.$route.meta.mode == 'lihat') {
				this.bkcuTabName = 'semua';
				this.cuTabName = value;
			}
		},
		changeTabBKCU(value) {
			if (this.$route.meta.mode == 'lihat') {
				this.cuTabName = 'semua';
				this.bkcuTabName = value;
			}
		},
		saveSingle() {
			this.$emit('saveSingle', 'p1');
		},
		reloadPearls() {
			this.$emit('reloadPearls')
		},
		next() {
			this.$emit('next');
		},
		prev() {
			this.$emit('prev');
		},

		jumlahPenilaianCU(value) {
			var jumlah = 0;
			if (this.form.p1.a1_cu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a2_cu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a3_cu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a4_cu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a5_cu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a6_cu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a7_cu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a8_cu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a9_cu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a10_cu_penilaian == value) {
				jumlah++;
			}
			return jumlah;
		},
		jumlahPenilaianBKCU(value) {
			var jumlah = 0;
			if (this.form.p1.a1_bkcu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a2_bkcu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a3_bkcu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a4_bkcu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a5_bkcu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a6_bkcu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a7_bkcu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a8_bkcu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a9_bkcu_penilaian == value) {
				jumlah++;
			}
			if (this.form.p1.a10_bkcu_penilaian == value) {
				jumlah++;
			}

			return jumlah;
		},

		skorCUA() {
			var jumlah = (this.form.p1.a1_cu_penilaian + this.form.p1.a2_cu_penilaian + this.form.p1.a3_cu_penilaian +
				this.form.p1.a4_cu_penilaian + this.form.p1.a5_cu_penilaian + this.form.p1.a6_cu_penilaian +
				this.form.p1.a7_cu_penilaian + this.form.p1.a8_cu_penilaian + this.form.p1.a9_cu_penilaian + this.form.p1.a10_cu_penilaian) / 1;
			this.$emit('skorCUA', jumlah);
			return jumlah;
		},

		skorBKCUA() {
			var jumlah = (this.form.p1.a1_bkcu_penilaian + this.form.p1.a2_bkcu_penilaian + this.form.p1.a3_bkcu_penilaian +
				this.form.p1.a4_bkcu_penilaian + this.form.p1.a5_bkcu_penilaian + this.form.p1.a6_bkcu_penilaian + this.form.p1.a7_bkcu_penilaian +
				this.form.p1.a8_bkcu_penilaian + this.form.p1.a9_bkcu_penilaian + this.form.p1.a10_bkcu_penilaian) / 1;
			this.$emit('skorBKCUA', jumlah);
			return jumlah;
		},
		
		modalKatexReset() {
			this.modalKatex.isUbah = false;
			this.modalKatex.katex1 = [];
			this.modalKatex.katex2 = [];
			this.modalKatex.form = [];
		},
		modalTutup() {
			this.modalSize = '';
			this.modalShow = false;
			this.modalKatexReset();
		},
		formatPeriode(value) {
			return Vue.filter('month')(value) + ' ' + Vue.filter('year')(value);
		},
		formatPeriodeMonth(value) {
			return Vue.filter('month')(value);
		},
		formatCurrency(value) {
			return this.$options.filters.currency(value, '', 0, { thousandsSeparator: '.' });
		},
		formatPercentage(value) {
			return Vue.filter('percentage2')(value, 2);
		},
		countTotal(value1, value2) {
			return value1 - value2;
		},
		countPercentage(value1, value2) {
			if (value2 > 0) {
				return this.formatPercentage((this.countTotal(value1, value2) / value2));
			} else {
				return this.formatPercentage('0');
			}
		}
	},
	computed: {
		...mapGetters('laporanCu', {
			updateMessage: 'update',
			updateStat: 'updateStat'
		}),
	}
}
</script>

<style>
@import "../../../../../node_modules/katex/dist/katex.min.css"
</style>