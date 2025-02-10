<template>
	<div>

		<div class="card bg-danger card-body"
			v-if="form.p8.a5_cu_penilaian == null && form.p8.a5_cu_keterangan == null && mode != 'penilaianBkcu' && mode != 'lihat'">
			<h6 class="mb-0">Maaf, anda tidak bisa melanjutkan mengisi perspektif ini sebelum melengkapi perspektif
				sebelumnya.</h6>
		</div>

		<div
			v-if="form.p8.a5_cu_penilaian != null && form.p8.a5_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
			<form-filter :cuTabName="cuTabName" :bkcuTabName="bkcuTabName" :jumlahPenilaianCU="jumlahPenilaianCU"
				:jumlahPenilaianBKCU="jumlahPenilaianBKCU" @changeTabCU="changeTabCU"
				@changeTabBKCU="changeTabBKCU"></form-filter>
		</div>

		<!-- A section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
				<div class="card card-body bg-info text-white"
					v-if="form.p8.a5_cu_penilaian != null && form.p8.a5_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="row justify-content-between">
						<div class="col-md-6">
							<h6 class="mb-0 font-weight-bold">9. PENGETAHUAN DAN KEAHLIAN DALAM MEMIMPIN</h6>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a1 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p9.a1_cu_penilaian == cuTabName || form.p9.a1_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p8.a5_cu_penilaian != null && form.p8.a5_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							9.1. Pinjaman Berbasis Kapasitas </h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p9.a1_cu_penilaian" @click1="form.p9.a1_cu_penilaian = 1"
									:subtitle1="'Karyawan dan pejabat tidak menggunakan integritas dalam mengevaluasi kelengkapan dan keakuratan pinjaman untuk menentukan bahwa peminjam mampu membayar kembali pinjaman. Kelalaian bertahan pada rasio rata-rata di atas 10% dalam 3 tahun terakhir.'"
									@click2="form.p9.a1_cu_penilaian = 2"
									:subtitle2="'Karyawan dan pejabat menggunakan integritas dalam mengevaluasi kelengkapan dan keakuratan pinjaman untuk menentukan bahwa peminjam mampu membayar kembali pinjaman. Kelalaian bertahan pada rasio rata-rata di atas 5% hingga 10% dalam 3 tahun terakhir.'"
									@click3="form.p9.a1_cu_penilaian = 3"
									:subtitle3="'Karyawan dan pejabat menggunakan integritas dalam mengevaluasi kelengkapan dan keakuratan pinjaman untuk menentukan bahwa peminjam mampu membayar kembali pinjaman. Kelalaian bertahan pada rasio rata-rata 3% hingga 5% dalam 3 tahun terakhir.'"
									@click4="form.p9.a1_cu_penilaian = 4"
									:subtitle4="'Karyawan dan pejabat menggunakan integritas dalam mengevaluasi kelengkapan dan keakuratan pinjaman untuk menentukan bahwa peminjam mampu membayar kembali pinjaman. Kelalaian bertahan pada rasio rata-rata 2% dalam 3 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a1_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p9.a1_cu_keterangan"
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
										<penilaian-bkcu :form="form.p9.a1_bkcu_penilaian"
											@click1="form.p9.a1_bkcu_penilaian = 1"
											@click2="form.p9.a1_bkcu_penilaian = 2"
											@click3="form.p9.a1_bkcu_penilaian = 3"
											@click4="form.p9.a1_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p9.a1_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p9.a1_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p9.a2_cu_penilaian == cuTabName || form.p9.a2_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p9.a1_cu_penilaian != null && form.p9.a1_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							9.2. Bimbingan dan Pelatihan</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p9.a2_cu_penilaian" @click1="form.p9.a2_cu_penilaian = 1"
									:subtitle1="'Pengurus tidak melatih, membantu, menginspirasi, memotivasi dan membangkitkan semangat, tidak berorientasi pada tindakan, dan tidak mengevaluasi manajemen dan anggota.'"
									@click2="form.p9.a2_cu_penilaian = 2"
									:subtitle2="'Terbatas pengurus yang melatih, membantu, menginspirasi, memotivasi dan membangkitkan semangat, berorientasi pada tindakan, tetapi tidak mengevaluasi manajemen dan anggota.'"
									@click3="form.p9.a2_cu_penilaian = 3"
									:subtitle3="'Pengurus yang melatih, membantu, menginspirasi, memotivasi dan membangkitkan semangat, berorientasi pada tindakan, dan mengevaluasi proses berdasarkan ukuran kinerja.'"
									@click4="form.p9.a2_cu_penilaian = 4"
									:subtitle4="'Pengurus yang melatih, membantu, menginspirasi, memotivasi dan membangkitkan semangat, berorientasi pada tindakan, dan secara konsisten mengevaluasi proses berdasarkan ukuran kinerja praktik terbaik.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a2_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p9.a2_cu_keterangan"
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
										<penilaian-bkcu :form="form.p9.a2_bkcu_penilaian"
											@click1="form.p9.a2_bkcu_penilaian = 1"
											@click2="form.p9.a2_bkcu_penilaian = 2"
											@click3="form.p9.a2_bkcu_penilaian = 3"
											@click4="form.p9.a2_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p9.a2_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p9.a2_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p9.a3_cu_penilaian == cuTabName || form.p9.a3_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p9.a2_cu_penilaian != null && form.p9.a2_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							9.3. Program Orientasi Pengurus dan Komite</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p9.a3_cu_penilaian" @click1="form.p9.a3_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Tidak ada orientasi pengurus atau implementasi ada tetapi tidak konsisten dalam dua periode terakhir'"
									@click2="form.p9.a3_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan bahwa semua anggota komite dan pengurus menjalani orientasi terhadap peran mereka, setelah pemilihan atau pengangkatan.Telah dipenuhi oleh pengurus saat ini'"
									@click3="form.p9.a3_cu_penilaian = 3"
									:subtitle3="'Tersedia kebijakan bahwa semua anggota komite dan pengurus menjalani orientasi terhadap peran mereka, setelah pemilihan atau pengangkatan.Telah dipenuhi oleh pengurus saat ini.'"
									@click4="form.p9.a3_cu_penilaian = 4"
									:subtitle4="'Tersedia kebijakan bahwa semua anggota komite dan pengurus menjalani orientasi terhadap peran mereka, setelah pemilihan atau pengangkatan.Secara konsisten telah dipenuhi oleh pengurus dalam dua periode terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a3_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p9.a3_cu_keterangan"
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
										<penilaian-bkcu :form="form.p9.a3_bkcu_penilaian"
											@click1="form.p9.a3_bkcu_penilaian = 1"
											@click2="form.p9.a3_bkcu_penilaian = 2"
											@click3="form.p9.a3_bkcu_penilaian = 3"
											@click4="form.p9.a3_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p9.a3_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p9.a3_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p9.a4_cu_penilaian == cuTabName || form.p9.a4_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p9.a3_cu_penilaian != null && form.p9.a3_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							9.4 Pelatihan wajib untuk Pengurus dan posisi-posisi penting lainnya</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p9.a4_cu_penilaian" @click1="form.p9.a4_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Tidak ada pelatihan wajib atau implementasi ada tetapi tidak konsisten dalam dua periode terakhir.'"
									@click2="form.p9.a4_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan bahwa semua pengurus, pengawas, komite kredit dan CEO/GM/Manajer harus  menyelesaikan Credit Union Competency Course (CUDCC, CUCCC, CUSCC, CULOCC). Telah dipenuhi oleh pengurus saat ini.'"
									@click3="form.p9.a4_cu_penilaian = 3"
									:subtitle3="'Tersedia kebijakan bahwa semua pengurus, pengawas, komite kredit dan CEO/GM/Manajer harus menyelesaikan Credit Union Competency Course (CUDCC, CUCCC, CUSCC, CULOCC). Telah dipenuhi oleh pengurus saat ini.'"
									@click4="form.p9.a4_cu_penilaian = 4"
									:subtitle4="'Tersedia kebijakan bahwa semua pengurus, pengawas, komite kredit dan CEO/GM/Manajer harus menyelesaikan Credit Union Competency Course (CUDCC, CUCCC, CUSCC, CULOCC). Secara konsisten telah dipenuhi oleh pengurus dalam dua periode terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a4_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p9.a4_cu_keterangan"
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
										<penilaian-bkcu :form="form.p9.a4_bkcu_penilaian"
											@click1="form.p9.a4_bkcu_penilaian = 1"
											@click2="form.p9.a4_bkcu_penilaian = 2"
											@click3="form.p9.a4_bkcu_penilaian = 3"
											@click4="form.p9.a4_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p9.a4_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p9.a4_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p9.a5_cu_penilaian == cuTabName || form.p9.a5_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p9.a4_cu_penilaian != null && form.p9.a4_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							9.5 Pendidikan Lanjutan</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p9.a5_cu_penilaian" @click1="form.p9.a5_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Pelatihan pengurus tidak didasarkan pada kebutuhan pelatihan.'"
									@click2="form.p9.a5_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan bahwa pengurus mengikuti pelatihan terkait topik yang didentifikasi sebagai kesenjangan utama keterampilan yang diperlukan agar pengurus dapat berfungsi efektif, harus berdasarkan pada penilaian diri dan evaluasi kinerja pengurus yang bersangkutan. Dipatuhi dalam satu tahun terakhir'"
									@click3="form.p9.a5_cu_penilaian = 3"
									:subtitle3="'Tersedia kebijakan bahwa pengurus mengikuti pelatihan terkait topik yang didentifikasi sebagai kesenjangan utama keterampilan yang diperlukan agar pengurus dapat berfungsi efektif, harus berdasarkan pada penilaian diri dan evaluasi kinerja pengurus yang bersangkutan. Dipatuhi dalam satu tahun terakhir'"
									@click4="form.p9.a5_cu_penilaian = 4"
									:subtitle4="'Tersedia kebijakan bahwa pengurus mengikuti pelatihan terkait topik yang didentifikasi sebagai kesenjangan utama keterampilan yang diperlukan agar pengurus dapat berfungsi efektif, harus berdasarkan pada penilaian diri dan evaluasi kinerja pengurus yang bersangkutan. Secara konsisten dipatuhi setiap tahun dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a5_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p9.a5_cu_keterangan"
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
										<penilaian-bkcu :form="form.p9.a5_bkcu_penilaian"
											@click1="form.p9.a5_bkcu_penilaian = 1"
											@click2="form.p9.a5_bkcu_penilaian = 2"
											@click3="form.p9.a5_bkcu_penilaian = 3"
											@click4="form.p9.a5_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p9.a5_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p9.a5_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p9.a6_cu_penilaian == cuTabName || form.p9.a6_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p9.a5_cu_penilaian != null && form.p9.a5_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							9.6 Tanggung jawab CEO/GM/ Manajer</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p9.a6_cu_penilaian" @click1="form.p9.a6_cu_penilaian = 1"
									:subtitle1="'<p>Deskripsi pekerjaan dan penilaian kinerja CEO/GM/Manajer tidak mencakup sebagian besar tanggung jawab berikut:</p><ul>    <li>Pemimpin</li>    <li>Pembawa visi dan informasi</li>    <li>Pengambil keputusan</li>    <li>Pengelola</li>    <li>Pengembang Pengurus</li></ul><p>Penilaian kinerja tidak didasarkan pada tanggung jawab dasar CEO/GM/Manajer.</p>'"
									@click2="form.p9.a6_cu_penilaian = 2"
									:subtitle2="'<p>Deskripsi pekerjaan dan penilaian kinerja CEO/GM/Manajer mencakup sebagian besar tanggung jawab berikut, tetapi tertinggal dalam beberapa:</p><ul>    <li>Pemimpin</li>    <li>Pembawa visi dan informasi</li>    <li>Pengambil keputusan</li>    <li>Pengelola</li>    <li>Pengembang Pengurus</li></ul><p>Tingkat penilaian kinerja adalah cukup (fair).</p>'"
									@click3="form.p9.a6_cu_penilaian = 3"
									:subtitle3="'<p>Deskripsi pekerjaan dan penilaian kinerja CEO/GM/Manajer mencakup sebagian besar tanggung jawab berikut, tetapi tertinggal dalam beberapa:</p><ul>    <li>Pemimpin</li>    <li>Pembawa visi dan informasi</li>    <li>Pengambil keputusan</li>    <li>Pengelola</li>    <li>Pengembang Pengurus</li></ul><p>Tingkat penilaian kinerja adalah memuaskan (satisfactory).</p>'"
									@click4="form.p9.a6_cu_penilaian = 4"
									:subtitle4="'<p>Deskripsi pekerjaan dan penilaian kinerja CEO/GM/Manajer mencakup seluruh tanggung jawab berikut:</p><ul>    <li>Pemimpin</li>    <li>Pembawa visi dan informasi</li>    <li>Pengambil keputusan</li>    <li>Pengelola</li>    <li>Pengembang Pengurus</li></ul><p>Tingkat penilaian kinerja adalah sangat memuaskan (outstanding).</p>'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a6_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p9.a6_cu_keterangan"
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
										<penilaian-bkcu :form="form.p9.a6_bkcu_penilaian"
											@click1="form.p9.a6_bkcu_penilaian = 1"
											@click2="form.p9.a6_bkcu_penilaian = 2"
											@click3="form.p9.a6_bkcu_penilaian = 3"
											@click4="form.p9.a6_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a6_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p9.a6_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a6_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p9.a6_bkcu_rekomendasi"
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
					v-if="form.p9.a6_cu_penilaian != null && form.p9.a6_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
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
		this.skorBKCUA()
		this.skorCUA()
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
			this.$emit('saveSingle', 'p9');
		},
		prev() {
			this.$emit('prev');
		},
		next() {
			this.$emit('next');
		},

		skorCUA() {
			var jumlah = (this.form.p9.a1_cu_penilaian + this.form.p9.a2_cu_penilaian + this.form.p9.a3_cu_penilaian +
				this.form.p9.a4_cu_penilaian + this.form.p9.a5_cu_penilaian + this.form.p9.a6_cu_penilaian) / 1;
			this.$emit('skorCUA', jumlah);
			return jumlah;
		},

		skorBKCUA() {
			var jumlah = (this.form.p9.a1_bkcu_penilaian + this.form.p9.a2_bkcu_penilaian + this.form.p9.a3_bkcu_penilaian +
				this.form.p9.a4_bkcu_penilaian + this.form.p9.a5_bkcu_penilaian + this.form.p9.a6_bkcu_penilaian) / 1;
			this.$emit('skorBKCUA', jumlah);
			return jumlah;
		}, 
		
		jumlahPenilaianCU(nilai) {
			var jumlah = 0;
			if (this.form.p9.a1_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p9.a2_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p9.a3_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p9.a4_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p9.a5_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p9.a6_cu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},
		jumlahPenilaianBKCU(nilai) {
			var jumlah = 0;
			if (this.form.p9.a1_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p9.a2_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p9.a3_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p9.a4_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p9.a5_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p9.a6_bkcu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},
	},
	computed: {

	}
}
</script>
