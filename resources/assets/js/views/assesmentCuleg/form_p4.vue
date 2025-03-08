<template>
	<div>

		<div class="card bg-danger card-body"
			v-if="form.p3.a14_cu_penilaian == null && form.p3.a14_cu_keterangan == null && mode != 'penilaianBkcu' && mode != 'lihat'">
			<h6 class="mb-0">Maaf, anda tidak bisa melanjutkan mengisi perspektif ini sebelum melengkapi perspektif
				sebelumnya.</h6>
		</div>

		<div
			v-if="form.p3.a14_cu_penilaian != null && form.p3.a14_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
			<form-filter :cuTabName="cuTabName" :bkcuTabName="bkcuTabName" :jumlahPenilaianCU="jumlahPenilaianCU"
				:jumlahPenilaianBKCU="jumlahPenilaianBKCU" @changeTabCU="changeTabCU"
				@changeTabBKCU="changeTabBKCU"></form-filter>
		</div>

		<!-- A section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
				<div class="card card-body bg-info text-white"
					v-if="form.p3.a14_cu_penilaian != null && form.p3.a14_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="row justify-content-between">
						<div class="col-md-6">
							<h6 class="mb-0 font-weight-bold">4. CONSENSUS ORIENTATION (PANDANGAN BERSAMA)</h6>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a1 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.a1_cu_penilaian == cuTabName || form.p4.a1_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p3.a14_cu_penilaian != null && form.p3.a14_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							4.1. Tanggapan anggota yang berkualitas</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p4.a1_cu_penilaian" @click1="form.p4.a1_cu_penilaian = 1"
									:subtitle1="'<p>Meskipun tidak ada kebijakan, 5 di antaranya telah digunakan untuk mendapatkan umpan balik anggota:</p><ol><li>Berikan dukungan obrolan langsung secara proaktif</li><li>Dapatkan umpan balik dari sesi obrolan langsung</li><li>Berikan formulir umpan balik khusus</li><li>Ukur kinerja layanan melalui survei</li><li>Hubungi anggota anda secara teratur</li><li>Gunakan survei email untuk anggota baru</li><li>Pantau media sosial</li><li>Gunakan polling</li><li>Minta umpan balik ketika anggota mengundurkan diri</li><li>Buat komunitas online</li><li>Tampilkan umpan balik anggota yang positif</li><li>Minta umpan balik saat pemberian penghargaan atau hadiah</li><li>Gunakan umpan balik negatif untuk menunjukkan profesionalisme</li><li>Umpan balik dalam aplikasi</li><li>Reaksi di Facebook.</li></ol>'"
									@click2="form.p4.a1_cu_penilaian = 2"
									:subtitle2="'<p>Meskipun tidak ada kebijakan, 8 di antaranya telah digunakan untuk mendapatkan umpan balik anggota:</p><ol><li>Berikan dukungan obrolan langsung secara proaktif</li><li>Dapatkan umpan balik dari sesi obrolan langsung</li><li>Berikan formulir umpan balik khusus</li><li>Ukur kinerja layanan melalui survei</li><li>Hubungi anggota anda secara teratur</li><li>Gunakan survei email untuk anggota baru</li><li>Pantau media sosial</li><li>Gunakan polling</li><li>Minta umpan balik ketika anggota mengundurkan diri</li><li>Buat komunitas online</li><li>Tampilkan umpan balik anggota yang positif</li><li>Minta umpan balik saat pemberian penghargaan atau hadiah</li><li>Gunakan umpan balik negatif untuk menunjukkan profesionalisme</li><li>Umpan balik dalam aplikasi</li><li>Reaksi di Facebook.</li></ol>'"
									@click3="form.p4.a1_cu_penilaian = 3"
									:subtitle3="'<p>Sebagai kebijakan, menggunakan berbagai cara untuk mendapatkan umpan balik anggota. 10 di antaranya telah digunakan secara konsisten selama 3 tahun:</p><ol><li>Berikan dukungan obrolan langsung secara proaktif</li><li>Dapatkan umpan balik dari sesi obrolan langsung</li><li>Berikan formulir umpan balik khusus</li><li>Ukur kinerja layanan melalui survei</li><li>Hubungi anggota anda secara teratur</li><li>Gunakan survei email untuk anggota baru</li><li>Pantau media sosial</li><li>Gunakan polling</li><li>Minta umpan balik ketika anggota mengundurkan diri</li><li>Buat komunitas online</li><li>Tampilkan umpan balik anggota yang positif</li><li>Minta umpan balik saat pemberian penghargaan atau hadiah</li><li>Gunakan umpan balik negatif untuk menunjukkan profesionalisme</li><li>Umpan balik dalam aplikasi</li><li>Reaksi di Facebook.</li></ol>'"
									@click4="form.p4.a1_cu_penilaian = 4"
									:subtitle4="'<p>Sebagai kebijakan, menggunakan berbagai cara untuk mendapatkan umpan balik anggota. Semua ini telah digunakan secara konsisten selama 3 tahun:</p><ol>    <li>Berikan dukungan obrolan langsung secara proaktif</li>    <li>Dapatkan umpan balik dari sesi obrolan langsung</li>    <li>Berikan formulir umpan balik khusus</li>    <li>Ukur kinerja layanan melalui survei</li>    <li>Hubungi anggota anda secara teratur</li>    <li>Gunakan survei email untuk anggota baru</li>    <li>Pantau media sosial</li>    <li>Gunakan polling</li><li>Minta umpan balik ketika anggota mengundurkan diri</li><li>Buat komunitas online</li><li>Tampilkan umpan balik anggota yang positif</li><li>Minta umpan balik saat pemberian penghargaan atau hadiah</li><li>Gunakan umpan balik negatif untuk menunjukkan profesionalisme</li><li>Umpan balik dalam aplikasi</li><li>Reaksi di Facebook</li></ol>'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a1_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.a1_cu_keterangan"
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
										<penilaian-bkcu :form="form.p4.a1_bkcu_penilaian"
											@click1="form.p4.a1_bkcu_penilaian = 1"
											@click2="form.p4.a1_bkcu_penilaian = 2"
											@click3="form.p4.a1_bkcu_penilaian = 3"
											@click4="form.p4.a1_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p4.a1_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p4.a1_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.a2_cu_penilaian == cuTabName || form.p4.a2_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p4.a1_cu_penilaian != null && form.p4.a1_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							4.2. Tinjauan keluhan yang tepat </h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p4.a2_cu_penilaian" @click1="form.p4.a2_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan dan tidak ada Komite Mediasi dan Konsiliasi yang berfungsi atau yang setara.'"
									@click2="form.p4.a2_cu_penilaian = 2"
									:subtitle2="'Meskipun tidak ada kebijakan, Komite Mediasi dan Konsiliasi, dalam rapat yang diadakan untuk tujuan tersebut, meninjau setiap keluhan bahwa seorang pengurus telah melanggar ketentuan Anggaran Rumah Tangga, Kebijakan tata kelola, Kode Etik, Sumpah Jabatan & Perjanjian Kerahasiaan CU. Diterapkan secara konsisten dalam satu tahun terakhir. Tidak ada sengketa yang mencapai kasus pengadilan.'"
									@click3="form.p4.a2_cu_penilaian = 3"
									:subtitle3="'Sebagai suatu kebijakan, Komite Mediasi dan Konsiliasi, dalam rapat yang diadakan untuk tujuan tersebut, meninjau setiap keluhan bahwa seorang pengurus telah melanggar ketentuan Anggaran Rumah Tangga, Kebijakan Tata Kelola, Kode Etik, Sumpah Jabatan & Perjanjian Kerahasiaan CU.Diterapkan secara konsisten dalam satu tahun terakhir. Tidak ada sengketa yang mencapai kasus pengadilan.'"
									@click4="form.p4.a2_cu_penilaian = 4"
									:subtitle4="'Sebagai suatu kebijakan, Komite Mediasi dan Konsiliasi, dalam rapat yang diadakan untuk tujuan tersebut, meninjau setiap keluhan bahwa seorang pengurus telah melanggar ketentuan Anggaran Rumah Tangga, Kebijakan Tata Kelola, Kode Etik, Sumpah Jabatan & Perjanjian Kerahasiaan CU.Diterapkan secara konsisten dalam tiga tahun terakhir. Tidak ada sengketa yang mencapai kasus pengadilan.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a2_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.a2_cu_keterangan"
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
										<penilaian-bkcu :form="form.p4.a2_bkcu_penilaian"
											@click1="form.p4.a2_bkcu_penilaian = 1"
											@click2="form.p4.a2_bkcu_penilaian = 2"
											@click3="form.p4.a2_bkcu_penilaian = 3"
											@click4="form.p4.a2_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p4.a2_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p4.a2_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.a3_cu_penilaian == cuTabName || form.p4.a3_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p4.a2_cu_penilaian != null && form.p4.a2_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							4.3. Keluhan Anggota</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p4.a3_cu_penilaian" @click1="form.p4.a3_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan, catatan kasus pengadilan dengan anggota yang dihasilkan dari konflik belum terselesaikan.'"
									@click2="form.p4.a3_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan yang meninjau kembali keluhan anggota. Tinjauan atas pengaduan tersebut memberikan kesempatan bagi anggota untuk menunjukkan posisi mereka. Setiap upaya dilakukan untuk menyelesaikan masalah tersebut dengan cepat dan adil. Tidak ada kasus pengadilan yang diajukan terkait dengan perselisihan anggota dalam setahun terakhir.'"
									@click3="form.p4.a3_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan yang meninjau kembali keluhan anggota. Tinjauan atas pengaduan tersebut memberikan kesempatan bagi anggota untuk menunjukkan posisi mereka. Setiap upaya dilakukan untuk menyelesaikan masalah tersebut dengan cepat dan adil. Tidak ada kasus pengadilan yang diajukan terkait dengan perselisihan anggota dalam setahun terakhir.'"
									@click4="form.p4.a3_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan yang meninjau kembali keluhan anggota. Tinjauan atas pengaduan tersebut memberikan kesempatan bagi anggota untuk menunjukkan posisi mereka. Setiap upaya dilakukan untuk menyelesaikan masalah tersebut dengan cepat dan adil. Tidak ada kasus pengadilan yang diajukan terkait dengan perselisihan anggota dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a3_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.a3_cu_keterangan"
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
										<penilaian-bkcu :form="form.p4.a3_bkcu_penilaian"
											@click1="form.p4.a3_bkcu_penilaian = 1"
											@click2="form.p4.a3_bkcu_penilaian = 2"
											@click3="form.p4.a3_bkcu_penilaian = 3"
											@click4="form.p4.a3_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p4.a3_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p4.a3_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.a4_cu_penilaian == cuTabName || form.p4.a4_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p4.a3_cu_penilaian != null && form.p4.a3_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							4.4 Membangun Kesepakatan (consensus) untuk sebuah Keputusan</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p4.a4_cu_penilaian" @click1="form.p4.a4_cu_penilaian = 1"
									:subtitle1="'Keputusan umumnya didasarkan pada suara terbanyak.'"
									@click2="form.p4.a4_cu_penilaian = 2"
									:subtitle2="'Pengurus dan juga komite bekerja berdasarkan prinsip pandangan bersama oleh semua anggota untuk mencapai keputusan bersama, BUKAN memberikan suara untuk keputusan. Dengan membangun konsensus, keputusan yang lebih baik tercapai, implementasi yang lebih baik dan hubungan yang lebih baik. Notulen rapat memang menunjukkan minimal 20% pemungutan suara untuk pengambilan keputusan dalam satu tahun terakhir.'"
									@click3="form.p4.a4_cu_penilaian = 3"
									:subtitle3="'Pengurus dan juga komite bekerja berdasarkan prinsip pandangan bersama oleh semua anggota untuk mencapai keputusan bersama, BUKAN memberikan suara untuk keputusan. Dengan membangun konsensus, keputusan yang lebih baik tercapai, implementasi yang lebih baik dan hubungan yang lebih baik. Notulen rapat memang menunjukkan adanya pemungutan suara untuk pengambilan keputusan dalam satu tahun terakhir.'"
									@click4="form.p4.a4_cu_penilaian = 4"
									:subtitle4="'Pengurus dan juga komite bekerja berdasarkan prinsip pandangan bersama oleh semua anggota untuk mencapai keputusan bersama, BUKAN memberikan suara untuk keputusan. Dengan membangun konsensus, keputusan yang lebih baik tercapai, implementasi yang lebih baik dan hubungan yang lebih baik.Notulen rapat memang menunjukkan tidak adanya pemungutan suara untuk pengambilan keputusan dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a4_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.a4_cu_keterangan"
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
										<penilaian-bkcu :form="form.p4.a4_bkcu_penilaian"
											@click1="form.p4.a4_bkcu_penilaian = 1"
											@click2="form.p4.a4_bkcu_penilaian = 2"
											@click3="form.p4.a4_bkcu_penilaian = 3"
											@click4="form.p4.a4_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p4.a4_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p4.a4_bkcu_rekomendasi"
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
					v-if="form.p4.a4_cu_penilaian != null && form.p4.a4_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="text-center d-none d-md-block">
						<button type="button" class="btn btn-light" @click.prevent="prev">
							<i class="icon-arrow-left13"></i> Kembali
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
							<i class="icon-arrow-left13"></i> Kembali
						</button>
					</div>
				</div>
			</div>
		</transition>

	</div>
</template>

<script>
import penilaianCu from "./penilaian_cu.vue";
import penilaianBkcu from "./penilaian_bkcu.vue";
import formFilter from "./form_filter.vue";
import wajibBadge from "../../components/wajibBadge.vue";

export default {
	props: ['form', 'mode', 'jumlahIndikator', 'bobotSkor', 'updateSingleStat'],
	components: {
		penilaianCu,
		penilaianBkcu,
		formFilter,
		wajibBadge
	},
	data() {
		return {
			cuTabName: 'semua',
			bkcuTabName: 'semua',
		}
	},
	created() {
		this.skorCUA()
		this.skorBKCUA()
	},
	watch: {
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
			this.$emit('saveSingle', 'p4');
		},
		prev() {
			this.$emit('prev');
		},
		next() {
			this.$emit('next');
		},

		skorCUA() {
			var jumlah = (this.form.p4.a1_cu_penilaian + this.form.p4.a2_cu_penilaian + this.form.p4.a3_cu_penilaian +
				this.form.p4.a4_cu_penilaian) / 1;
			this.$emit('skorCUA', jumlah);
			return jumlah;
		},

		skorBKCUA() {
			var jumlah = (this.form.p4.a1_bkcu_penilaian + this.form.p4.a2_bkcu_penilaian + this.form.p4.a3_bkcu_penilaian +
				this.form.p4.a4_bkcu_penilaian) / 1;
			this.$emit('skorBKCUA', jumlah);
			return jumlah;
		}, 
		
		jumlahPenilaianCU(nilai) {
			var jumlah = 0;
			if (this.form.p4.a1_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p4.a2_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p4.a3_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p4.a4_cu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},
		jumlahPenilaianBKCU(nilai) {
			var jumlah = 0;
			if (this.form.p4.a1_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p4.a2_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p4.a3_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p4.a4_bkcu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},
	},
	computed: {

	}
}
</script>
