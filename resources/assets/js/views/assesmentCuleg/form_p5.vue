<template>
	<div>

		<div class="card bg-danger card-body"
			v-if="form.p4.a4_cu_penilaian == null && form.p4.a4_cu_keterangan == null && mode != 'penilaianBkcu' && mode != 'lihat'">
			<h6 class="mb-0">Maaf, anda tidak bisa melanjutkan mengisi perspektif ini sebelum melengkapi perspektif
				sebelumnya.</h6>
		</div>

		<div
			v-if="form.p4.a4_cu_penilaian != null && form.p4.a4_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
			<form-filter :cuTabName="cuTabName" :bkcuTabName="bkcuTabName" :jumlahPenilaianCU="jumlahPenilaianCU"
				:jumlahPenilaianBKCU="jumlahPenilaianBKCU" @changeTabCU="changeTabCU"
				@changeTabBKCU="changeTabBKCU"></form-filter>
		</div>

		<!-- A section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
				<div class="card card-body bg-info text-white"
					v-if="form.p4.a4_cu_penilaian != null && form.p4.a4_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="row justify-content-between">
						<div class="col-md-6">
							<h6 class="mb-0 font-weight-bold">5. EFISIENSI DAN EFEKTIVITAS</h6>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a1 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a1_cu_penilaian == cuTabName || form.p5.a1_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p4.a4_cu_penilaian != null && form.p4.a4_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.1. Pekerjaan Sampingan (Pekerjaan Tambahan)</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a1_cu_penilaian" @click1="form.p5.a1_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan, ada pelanggaran.'"
									@click2="form.p5.a1_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan yang menyatakan bahwa tidak diperbolehkan mempekerjakan bagi pejabat manajemen atau karyawan di luar yang dapat menimbulkan benturan kepentingan seperti: pekerjaan dengan pesaing, pekerjaan sebagai auditor atau akuntan atau praktik profesi akuntansi, penasihat investasi, pialang atau agen asuransi atau bertindak sebagai broker atau agen real estat. Tidak ada kebijakan yang juga menyatakan bahwa dalam hal pekerjaan di luar berdampak buruk pada reputasi atau kepentingan CU atau berdampak buruk pada kinerja karyawan, ia diminta untuk menyesuaikan atau mengundurkan diri. Tidak ada pelanggaran yang tercatat dalam satu tahun terakhir.'"
									@click3="form.p5.a1_cu_penilaian = 3"
									:subtitle3="'Ada kebijakan yang menyatakan bahwa tidak boleh ada pekerjaan di luar bagi pejabat manajemen atau karyawan yang dapat menimbulkan konflik kepentingan seperti: pekerjaan dengan pesaing, pekerjaan sebagai auditor atau akuntan atau praktik profesi akuntansi, penasihat investasi, pialang atau agen asuransi atau bertindak sebagai broker atau agen real estat. Kebijakan tersebut juga menyatakan bahwa dalam hal pekerjaan di luar merugikan reputasi atau kepentingan CU atau mempengaruhi kinerja pekerjaan karyawan, ia diminta untuk menyesuaikan atau mengundurkan diri. Tidak ada pelanggaran yang tercatat dalam satu tahun terakhir.'"
									@click4="form.p5.a1_cu_penilaian = 4"
									:subtitle4="'Ada kebijakan yang menyatakan bahwa tidak boleh ada pekerjaan di luar bagi pejabat manajemen atau karyawan yang dapat menimbulkan konflik kepentingan seperti: pekerjaan dengan pesaing, pekerjaan sebagai auditor atau akuntan atau praktik profesi akuntansi, penasihat investasi, pialang atau agen asuransi atau bertindak sebagai broker atau agen real estat. Kebijakan tersebut juga menyatakan bahwa dalam hal pekerjaan di luar merugikan reputasi atau kepentingan CU atau mempengaruhi kinerja pekerjaan karyawan, ia diminta untuk menyesuaikan atau mengundurkan diri. Tidak ada pelanggaran yang tercatat dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a1_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a1_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a1_bkcu_penilaian"
											@click1="form.p5.a1_bkcu_penilaian = 1"
											@click2="form.p5.a1_bkcu_penilaian = 2"
											@click3="form.p5.a1_bkcu_penilaian = 3"
											@click4="form.p5.a1_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a1_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a1_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a2_cu_penilaian == cuTabName || form.p5.a2_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p5.a1_cu_penilaian != null && form.p5.a1_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.2. Pinjaman kepada Anggota</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a2_cu_penilaian" @click1="form.p5.a2_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Adanya pelanggaran.'"
									@click2="form.p5.a2_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan yang menyatakan bahwa tidak boleh sekalipun ada pejabat manajemen atau karyawan yang memiliki wewenang untuk menyetujui permohonan atau melakukan atau mengikat Credit Union dengan cara apa pun kecuali wewenang pemberian pinjaman tertentu telah diberikan oleh Pengurus. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam satu tahun terakhir'"
									@click3="form.p5.a2_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan yang menyatakan bahwa tidak boleh sekalipun ada pejabat manajemen atau karyawan yang memiliki wewenang untuk menyetujui permohonan atau melakukan atau mengikat Credit Union dengan cara apa pun kecuali wewenang pemberian pinjaman tertentu telah diberikan oleh Pengurus. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam satu tahun terakhir'"
									@click4="form.p5.a2_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan yang menyatakan bahwa tidak boleh sekalipun ada pejabat manajemen atau karyawan yang memiliki wewenang untuk menyetujui permohonan atau melakukan atau mengikat Credit Union dengan cara apa pun kecuali wewenang pemberian pinjaman tertentu telah diberikan oleh Pengurus. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam tiga tahun terakhir'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a2_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a2_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a2_bkcu_penilaian"
											@click1="form.p5.a2_bkcu_penilaian = 1"
											@click2="form.p5.a2_bkcu_penilaian = 2"
											@click3="form.p5.a2_bkcu_penilaian = 3"
											@click4="form.p5.a2_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a2_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a2_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a3_cu_penilaian == cuTabName || form.p5.a3_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p5.a2_cu_penilaian != null && form.p5.a2_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.3. Dokumen Pinjaman Anggota</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a3_cu_penilaian" @click1="form.p5.a3_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Adanya pelanggaran.'"
									@click2="form.p5.a3_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan yang menyatakan bahwa tidak boleh ada pejabat manajemen atau karyawan yang mengizinkan atau meminta pemohon pinjaman untuk menandatangani dokumen apapun sebelum dilengkapi dengan benar. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam satu tahun terakhir.'"
									@click3="form.p5.a3_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan yang menyatakan bahwa tidak boleh ada pejabat manajemen atau karyawan yang mengizinkan atau meminta pemohon pinjaman untuk menandatangani dokumen apapun sebelum dilengkapi dengan benar. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam satu tahun terakhir.'"
									@click4="form.p5.a3_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan yang menyatakan bahwa tidak boleh ada pejabat manajemen atau karyawan yang mengizinkan atau meminta pemohon pinjaman untuk menandatangani dokumen apapun sebelum dilengkapi dengan benar. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a3_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a3_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a3_bkcu_penilaian"
											@click1="form.p5.a3_bkcu_penilaian = 1"
											@click2="form.p5.a3_bkcu_penilaian = 2"
											@click3="form.p5.a3_bkcu_penilaian = 3"
											@click4="form.p5.a3_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a3_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a3_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a4_cu_penilaian == cuTabName || form.p5.a4_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p5.a3_cu_penilaian != null && form.p5.a3_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.4 Tidak Diskriminasi</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a4_cu_penilaian" @click1="form.p5.a4_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Adanya pelanggaran.'"
									@click2="form.p5.a4_cu_penilaian = 2"
									:subtitle2="'Tidak adanya ketentuan dalam kebijakan pinjaman atau Kode Etik Bisnis bahwa tidak ada pinjaman yang ditolak dari pemohon pinjaman karena berdasarkan ras, warna kulit, jenis kelamin, agama status perkawinan, asal negara atau usia pemohon. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam satu tahun terakhir.'"
									@click3="form.p5.a4_cu_penilaian = 3"
									:subtitle3="'Tidak ada pinjaman yang ditolak dari pemohon pinjaman berdasarkan ras, warna kulit, jenis kelamin, agama, status perkawinan, asal negara atau usia pemohon karena sepenuhnya diatur dalam Kebijakan Non Diskriminasi Pinjaman di CU. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam satu tahun terakhir.'"
									@click4="form.p5.a4_cu_penilaian = 4"
									:subtitle4="'Tidak ada pinjaman yang ditolak dari pemohon pinjaman berdasarkan ras, warna kulit, jenis kelamin, agama, status perkawinan, asal negara atau usia pemohon karena sepenuhnya diatur dalam Kebijakan Non Diskriminasi Pinjaman di CU. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a4_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a4_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a4_bkcu_penilaian"
											@click1="form.p5.a4_bkcu_penilaian = 1"
											@click2="form.p5.a4_bkcu_penilaian = 2"
											@click3="form.p5.a4_bkcu_penilaian = 3"
											@click4="form.p5.a4_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a4_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a4_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a5_cu_penilaian == cuTabName || form.p5.a5_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p5.a4_cu_penilaian != null && form.p5.a4_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.5 Tanggung jawab Pengurus dan Karyawan</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a5_cu_penilaian" @click1="form.p5.a5_cu_penilaian = 1"
									:subtitle1="'Tumpang tindih tanggung jawab pengurus dan karyawan terus terjadi.'"
									@click2="form.p5.a5_cu_penilaian = 2"
									:subtitle2="'Tumpang tindih tanggung jawab Pengurus dan karyawan dalam 3 tahun terakhir (merujuk dari daftar kegiatan sebagai dasar penilaian)'"
									@click3="form.p5.a5_cu_penilaian = 3"
									:subtitle3="'Tidak ada tumpang tindih tanggung jawab Pengurus dan karyawan dalam satu tahun terakhir. (merujuk dari daftar kegiatan sebagai dasar penilaian)'"
									@click4="form.p5.a5_cu_penilaian = 4"
									:subtitle4="'Tidak ada tumpang tindih tanggung jawab Pengurus dan karyawan dalam tiga tahun terakhir. (merujuk dari daftar kegiatan sebagai dasar penilaian)'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a5_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a5_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a5_bkcu_penilaian"
											@click1="form.p5.a5_bkcu_penilaian = 1"
											@click2="form.p5.a5_bkcu_penilaian = 2"
											@click3="form.p5.a5_bkcu_penilaian = 3"
											@click4="form.p5.a5_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a5_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a5_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a6_cu_penilaian == cuTabName || form.p5.a6_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p5.a5_cu_penilaian != null && form.p5.a5_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.6 Tata kelola</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a6_cu_penilaian" @click1="form.p5.a6_cu_penilaian = 1"
									:subtitle1="'<ul><li>Peran Pengurus dan CEO/GM/Manajer tidak didefinisikan dengan jelas.</li>    <li>Pengurus ikut campur dalam fungsi manajemen.</li>    <li>Pengurus tidak meneliti anggaran atau audit, tidak menetapkan target kinerja dan meminta pertanggungjawaban CEO/GM/Manajer atau tidak beroperasi sesuai dengan prosedur formal; fungsi eksekutif, bendahara, dan Pengurus tidak jelas.</li>    <li>Jumlah pengurus mencerminkan minat individu.</li></ul>'"
									@click2="form.p5.a6_cu_penilaian = 2"
									:subtitle2="'<ul><li>Definisi terbatas terkait perbedaan peran pengurus dan CEO/GM/Manajer.</li>    <li>Pengurus tidak berfungsi sesuai peraturan.</li>    <li>Tinjauan anggaran terbatas, terkadang menetapkan arah dan target organisasi dan tidak memantau potensi konflik kepentingan, tidak memeriksa auditor, atau tidak meninjau kepatuhan terhadap peraturan.</li>    <li>Upaya terbatas untuk mengontrol jumlah pengurus.</li>    <li>Tidak secara teratur meninjau kinerja CEO/GM/Manajer dan tidak siap untuk merekrut atau memecat CEO/GM/Manajer.</li></ul>'"
									@click3="form.p5.a6_cu_penilaian = 3"
									:subtitle3="'<ul><li>Peran pengurus dan CEO/GM/Manajer didefinisikan dengan jelas, dan masing-masing pihak menjalankan perannya sendiri tanpa campur tangan.</li>    <li>Pengurus meninjau anggaran, melakukan audit, memastikan kepatuhan terhadap peraturan.</li>    <li>Jumlah pengurus diatur untuk efektivitas maksimum dengan proses nominasi yang ketat.</li>    <li>Pengurus turut menentukan target kinerja dan secara aktif mendorong CEO/GM/Manajer untuk memenuhi target.</li>    <li>Meninjau kinerja CEO/GM/Manajer setiap tahun.</li></ul>'"
									@click4="form.p5.a6_cu_penilaian = 4"
									:subtitle4="'<ul><li>Pengurus dan CEO/GM/Manajer menunjukkan kualitas kerja tim yang tinggi dan bersatu dengan baik dari pembagian peran yang jelas.</li>    <li>Pengurus sepenuhnya memahami dan memenuhi tugas fidusia.</li>    <li>Jumlah pengurus diatur untuk efektivitas maksimum dengan proses nominasi yang ketat.</li>    <li>Pengurus secara aktif mendefinisikan target kinerja dan meminta pertanggungjawaban CEO/GM/Manajer.</li>    <li>Pengurus diberdayakan dan siap untuk mempekerjakan atau memecat CEO/GM/Manajer jika perlu.</li></ul>'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a6_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a6_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a6_bkcu_penilaian"
											@click1="form.p5.a6_bkcu_penilaian = 1"
											@click2="form.p5.a6_bkcu_penilaian = 2"
											@click3="form.p5.a6_bkcu_penilaian = 3"
											@click4="form.p5.a6_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a6_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a6_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a6_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a6_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a7_cu_penilaian == cuTabName || form.p5.a7_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p5.a6_cu_penilaian != null && form.p5.a6_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.7. Pelimpahan Wewenang kepada CEO/GM/ Manajer</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a7_cu_penilaian" @click1="form.p5.a7_cu_penilaian = 1"
									:subtitle1="'Sangat jelas terlihat tumpang tindih fungsi dan intervensi pengurus dalam operasional.'"
									@click2="form.p5.a7_cu_penilaian = 2"
									:subtitle2="'Memenuhi sebagian (50%) gambaran tanggung jawab antara manajemen dan pengurus sebagaimana ditentukan oleh kerangka tata kelola standar CU.'"
									@click3="form.p5.a7_cu_penilaian = 3"
									:subtitle3="'Memenuhi gambaran tanggung jawab antara manajemen dan pengurus sebagaimana ditentukan oleh kerangka kerja tata kelola standar CU. Praktik tersebut tertanam dalam kebijakan. Hal ini telah dipraktekkan dalam satu periode terakhir Pengurus.'"
									@click4="form.p5.a7_cu_penilaian = 4"
									:subtitle4="'Memenuhi dan bahkan melampaui dari patokan gambaran tanggung jawab antara manajemen dan pengurus sebagaimana ditentukan oleh kerangka kerja pengelolaan standar CU. Praktik tersebut tertanam dalam kebijakan. Hal ini telah dipraktekkan secara konsisten dalam tiga periode terakhir pengurus. '"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a7_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a7_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a7_bkcu_penilaian"
											@click1="form.p5.a7_bkcu_penilaian = 1"
											@click2="form.p5.a7_bkcu_penilaian = 2"
											@click3="form.p5.a7_bkcu_penilaian = 3"
											@click4="form.p5.a7_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a7_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a7_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a7_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a7_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a8_cu_penilaian == cuTabName || form.p5.a8_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p5.a7_cu_penilaian != null && form.p5.a7_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.8. Kualifikasi CEO/GM/ Manajer</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a8_cu_penilaian" @click1="form.p5.a8_cu_penilaian = 1"
									:subtitle1="'Pengurus tidak memiliki dasar atau kebijakan tertulis dalam mempekerjakan orang yang tepat untuk posisi tersebut.'"
									@click2="form.p5.a8_cu_penilaian = 2"
									:subtitle2="'Pengurus tidak menggunakan panduan untuk kualifikasi ideal yang dibutuhkan bagi CEO/GM/Manajer yang efektif (lihat panduan terlampir). CEO/GM/Manajer saat ini sebagian besar memenuhi kriteria yang ditetapkan dalam panduan.'"
									@click3="form.p5.a8_cu_penilaian = 3"
									:subtitle3="'Pengurus menggunakan panduan untuk kualifikasi ideal yang dibutuhkan bagi CEO/GM/Manajer yang efektif (lihat panduan terlampir). CEO/GM/Manajer saat ini sebagian besar memenuhi kriteria yang ditetapkan dalam panduan.'"
									@click4="form.p5.a8_cu_penilaian = 4"
									:subtitle4="'Pengurus menggunakan panduan untuk kualifikasi ideal yang dibutuhkan bagi CEO/GM/Manajer yang efektif (lihat panduan terlampir). CEO/GM/Manajer saat ini memenuhi kriteria yang ditetapkan dalam panduan.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a8_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a8_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a8_bkcu_penilaian"
											@click1="form.p5.a8_bkcu_penilaian = 1"
											@click2="form.p5.a8_bkcu_penilaian = 2"
											@click3="form.p5.a8_bkcu_penilaian = 3"
											@click4="form.p5.a8_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a8_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a8_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a8_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a8_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a9_cu_penilaian == cuTabName || form.p5.a9_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p5.a8_cu_penilaian != null && form.p5.a8_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.9. Uraian Tugas CEO/GM/ Manajer</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a9_cu_penilaian" @click1="form.p5.a9_cu_penilaian = 1"
									:subtitle1="'<p>Deskripsi pekerjaan CEO/GM/Manajer tidak memiliki fungsi manajemen utama pada:</p><ul><li>Keuangan dan operasi</li><li>Produk dan layanan</li><li>Sumber daya manusia</li><li>Fasilitas</li><li>Perencanaan dan tata kelola</li><p>(lihat contoh panduan untuk penilaian)</p>'"
									@click2="form.p5.a9_cu_penilaian = 2"
									:subtitle2="'<p>Deskripsi pekerjaan CEO/GM/Manajer memiliki cukup fungsi manajemen utama pada:</p><ul>    <li>Keuangan dan operasi</li>    <li>Produk dan layanan</li>    <li>Sumber daya manusia</li>    <li>Fasilitas</li>    <li>Perencanaan dan tata kelola</li></ul><p>(lihat contoh panduan untuk penilaian)</p>'"
									@click3="form.p5.a9_cu_penilaian = 3"
									:subtitle3="'<p>Deskripsi pekerjaan CEO/GM/Manajer memiliki sebagian besar fungsi manajemen utama pada:</p><ul>    <li>Keuangan dan operasi</li>    <li>Produk dan layanan</li>    <li>Sumber daya manusia</li>    <li>Fasilitas</li>    <li>Perencanaan dan tata kelola</li></ul><p>(lihat contoh panduan untuk penilaian)</p>'"
									@click4="form.p5.a9_cu_penilaian = 4"
									:subtitle4="'<p>Deskripsi pekerjaan CEO/GM/Manajer memiliki fungsi manajemen utama pada:</p><ul>    <li>Keuangan dan operasi</li>    <li>Produk dan layanan</li>    <li>Sumber daya manusia</li>    <li>Fasilitas</li>    <li>Perencanaan dan tata kelola</li></ul><p>(lihat contoh panduan untuk penilaian)</p>'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a9_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a9_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a9_bkcu_penilaian"
											@click1="form.p5.a9_bkcu_penilaian = 1"
											@click2="form.p5.a9_bkcu_penilaian = 2"
											@click3="form.p5.a9_bkcu_penilaian = 3"
											@click4="form.p5.a9_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a9_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a9_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a9_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a9_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a10_cu_penilaian == cuTabName || form.p5.a10_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p5.a9_cu_penilaian != null && form.p5.a9_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.10. Susunan Komite</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a10_cu_penilaian" @click1="form.p5.a10_cu_penilaian = 1"
									:subtitle1="'Komite dipilih atau ditunjuk dari luar Pengurus.'"
									@click2="form.p5.a10_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan bahwa komposisi komite mewakili pengurus dan jika memungkinkan dan sesuai, juga staf dan anggota masyarakat pada umumnya. CEO/GM/Manajer atau staf yang didelegasikan adalah anggota ex-officio dari semua komite.'"
									@click3="form.p5.a10_cu_penilaian = 3"
									:subtitle3="'Sesuai kebijakan, komposisi komite mewakili pengurus dan jika memungkinkan dan sesuai, juga staf dan anggota masyarakat pada umumnya. CEO/GM/Manajer atau staf yang didelegasikan adalah anggota ex-officio dari semua komite. Telah dilakukan pada periode terakhir ini.'"
									@click4="form.p5.a10_cu_penilaian = 4"
									:subtitle4="'Sesuai kebijakan, komposisi komite merupakan perwakilan dari pengurus dan jika memungkinkan dan sesuai, juga staf dan anggota masyarakat pada umumnya. CEO/GM/Manajer atau staf yang didelegasikan adalah anggota ex-officio dari semua komite. Telah dilakukan dalam dua periode terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a10_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a10_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a10_bkcu_penilaian"
											@click1="form.p5.a10_bkcu_penilaian = 1"
											@click2="form.p5.a10_bkcu_penilaian = 2"
											@click3="form.p5.a10_bkcu_penilaian = 3"
											@click4="form.p5.a10_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a10_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a10_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a10_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a10_bkcu_rekomendasi"
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

		<!-- a11 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a11_cu_penilaian == cuTabName || form.p5.a11_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p5.a10_cu_penilaian != null && form.p5.a10_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.11. Fungsi Komite</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a11_cu_penilaian" @click1="form.p5.a11_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan dan komite yang tidak berfungsi seperti yang diharapkan.'"
									@click2="form.p5.a11_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan yang menyatakan bahwa fungsi komite adalah untuk membawa pengalaman, keahlian dan penilaian sekelompok orang yang berkepentingan dan terinformasi untuk bertanggung jawab pada area tertentu dari CU. Tugasnya adalah membantu pengurus dengan mempertimbangkan hal-hal secara lebih mendalam. Secara konsisten diikuti dalam periode terakhir.'"
									@click3="form.p5.a11_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan yang menyatakan bahwa fungsi komite adalah untuk membawa pengalaman, keahlian dan penilaian sekelompok orang yang berkepentingan dan terinformasi untuk bertanggung jawab pada area tertentu dari CU. Tugasnya adalah membantu pengurus dengan mempertimbangkan hal-hal secara lebih mendalam. Secara konsisten diikuti dalam periode terakhir.'"
									@click4="form.p5.a11_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan yang menyatakan bahwa fungsi komite adalah untuk membawa pengalaman, keahlian dan penilaian sekelompok orang yang berkepentingan dan terinformasi untuk bertanggung jawab pada area tertentu dari CU. Tugasnya adalah membantu pengurus dengan mempertimbangkan hal-hal secara lebih mendalam. Secara konsisten diikuti dalam tiga periode terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a11_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a11_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a11_bkcu_penilaian"
											@click1="form.p5.a11_bkcu_penilaian = 1"
											@click2="form.p5.a11_bkcu_penilaian = 2"
											@click3="form.p5.a11_bkcu_penilaian = 3"
											@click4="form.p5.a11_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a11_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a11_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a11_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a11_bkcu_rekomendasi"
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

		<!-- a12 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a12_cu_penilaian == cuTabName || form.p5.a12_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p5.a11_cu_penilaian != null && form.p5.a11_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.12. Kerangka Acuan Kerja (KAK) Komite </h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a12_cu_penilaian" @click1="form.p5.a12_cu_penilaian = 1"
									:subtitle1="'Komite tidak memiliki KAK (TOR), hanya yang ada dalam anggaran rumah tangga.'"
									@click2="form.p5.a12_cu_penilaian = 2"
									:subtitle2="'KAK (TOR) tidak lengkap untuk menggambarkan fungsi komite sebagai penasehat untuk pengurus. Tidak ada wewenang untuk mengarahkan staf meskipun pengurus meminta CEO/GM/Manajer untuk mengalokasikan sumber daya staf. Kecuali yang diatur dalam anggaran rumah tangga, pengurus menunjuk komite setiap tahun untuk masa jabatan satu tahun atau jangka waktu bersama dengan masa jabatan pengurus. Diikuti secara konsisten dalam periode terakhir.'"
									@click3="form.p5.a12_cu_penilaian = 3"
									:subtitle3="'KAK (TOR) secara tepat menggambarkan komite memiliki fungsi penasehat kepada pengurus dan dengan tujuan tertentu. Tidak ada wewenang untuk mengarahkan staf meskipun dewan meminta CEO/GM/Manajer untuk mengalokasikan sumber daya staf. Kecuali yang diatur dalam anggaran rumah tangga, pengurus menunjuk komite setiap tahun untuk masa jabatan satu tahun atau jangka waktu bersama dengan masa jabatan pengurus. Diikuti secara konsisten dalam periode terakhir.'"
									@click4="form.p5.a12_cu_penilaian = 4"
									:subtitle4="'KAK (TOR) secara tepat menggambarkan komite memiliki fungsi penasehat kepada pengurus dan dengan tujuan tertentu. Tidak ada wewenang untuk mengarahkan staf meskipun dewan meminta CEO/GM/Manajer untuk mengalokasikan sumber daya staf. Kecuali yang diatur dalam anggaran rumah tangga, pengurus menunjuk komite setiap tahun untuk masa jabatan satu tahun atau jangka waktu bersama dengan masa jabatan pengurus. Diikuti secara konsisten dalam tiga periode terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a12_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a12_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a12_bkcu_penilaian"
											@click1="form.p5.a12_bkcu_penilaian = 1"
											@click2="form.p5.a12_bkcu_penilaian = 2"
											@click3="form.p5.a12_bkcu_penilaian = 3"
											@click4="form.p5.a12_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a12_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a12_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a12_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a12_bkcu_rekomendasi"
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

		<!-- a13 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a13_cu_penilaian == cuTabName || form.p5.a13_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p5.a12_cu_penilaian != null && form.p5.a12_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.13. Hubungan Komite dengan Pengurus dan Manajemen</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a13_cu_penilaian" @click1="form.p5.a13_cu_penilaian = 1"
									:subtitle1="'Tumpang tindih fungsi dan tanggung jawab yang konsisten terjadi dalam tiga tahun terakhir.'"
									@click2="form.p5.a13_cu_penilaian = 2"
									:subtitle2="'Komite memberi masukan kepada pengurus atau CEO/GM/Manajer tetapi tidak menjalankan wewenang atas staf dan biasanya tidak akan berurusan langsung dengan operasional staf. Anggota komite mengetahui dan menghormati perbedaan antara tanggung jawab pengurus dan staf. Komunikasi antara pengurus dan staf, di luar rapat komite, harus melalui CEO/GM/Manajer. Dalam tiga tahun terakhir, sedikit tumpang tindih tanggung jawab terdeteksi.'"
									@click3="form.p5.a13_cu_penilaian = 3"
									:subtitle3="'Komite memberi masukan kepada pengurus atau CEO/GM/Manajer tetapi tidak menjalankan wewenang atas staf dan biasanya tidak akan berurusan langsung dengan operasional staf. Anggota komite mengetahui dan menghormati perbedaan antara tanggung jawab pengurus dan staf. Komunikasi antara pengurus dan staf, di luar rapat komite, harus melalui CEO/GM/Manajer. Dalam satu tahun terakhir, tidak ada tanggung jawab yang tumpang tindih.'"
									@click4="form.p5.a13_cu_penilaian = 4"
									:subtitle4="'Komite secara konsisten memberi masukan kepada pengurus atau CEO/GM/Manajer tetapi tidak menjalankan wewenang atas staf dan biasanya tidak akan berurusan langsung dengan operasional staf. Anggota komite mengetahui dan menghormati perbedaan antara tanggung jawab pengurus dan staf. Komunikasi antara pengurus dan staf, di luar rapat komite, harus melalui CEO/GM/Manajer. Dalam tiga tahun terakhir, tidak ada tanggung jawab yang tumpang tindih.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a13_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a13_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a13_bkcu_penilaian"
											@click1="form.p5.a13_bkcu_penilaian = 1"
											@click2="form.p5.a13_bkcu_penilaian = 2"
											@click3="form.p5.a13_bkcu_penilaian = 3"
											@click4="form.p5.a13_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a13_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a13_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a13_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a13_bkcu_rekomendasi"
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

		<!-- a14 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a14_cu_penilaian == cuTabName || form.p5.a14_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p5.a13_cu_penilaian != null && form.p5.a13_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.14. Fungsi Komite Eksekutif
						</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a14_cu_penilaian" @click1="form.p5.a14_cu_penilaian = 1"
									:subtitle1="'Peran komite eksekutif tidak dilakukan sesuai dengan Anggaran Rumah Tangga. Tidak ada kebijakan atau prosedur yang mendukung fungsi komite.'"
									@click2="form.p5.a14_cu_penilaian = 2"
									:subtitle2="'Sesuai Anggaran Rumah Tangga, komite eksekutif membuat keputusan dalam jeda antar rapat pengurus. Keputusan tersebut harus diratifikasi (disahkan) oleh pengurus pada pertemuan berikutnya. Komite eksekutif juga bertanggung jawab atas evaluasi kinerja tahunan CEO/GM/Manajer dan membuat rekomendasi kepada pengurus untuk melanjutkan masa jabatan dan kompensasi. Fungsi ini telah dilakukan oleh komite dalam satu tahun terakhir.'"
									@click3="form.p5.a14_cu_penilaian = 3"
									:subtitle3="'Sesuai Anggaran Rumah Tangga dan kebijakan mendukung, komite eksekutif membuat keputusan dalam jeda antar rapat pengurus. Keputusan tersebut harus diratifikasi (disahkan) oleh pengurus pada pertemuan berikutnya. Komite eksekutif juga bertanggung jawab atas evaluasi kinerja tahunan CEO/GM/Manajer dan membuat rekomendasi kepada pengurus untuk melanjutkan masa jabatan dan kompensasi. Dilakukan secara tidak konsisten oleh komite dalam 3 tahun terakhir.'"
									@click4="form.p5.a14_cu_penilaian = 4"
									:subtitle4="'Sesuai Anggaran Rumah Tangga juga kebijakan dan prosedur mendukung, komite eksekutif membuat keputusan dalam jeda antar rapat pengurus. Keputusan tersebut harus diratifikasi (disahkan) oleh pengurus pada pertemuan berikutnya. Komite eksekutif juga bertanggung jawab atas evaluasi kinerja tahunan CEO/GM/Manajer dan membuat rekomendasi kepada pengurus untuk melanjutkan masa jabatan dan kompensasi. Dilakukan secara konsisten oleh komite dalam 3 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a14_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a14_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a14_bkcu_penilaian"
											@click1="form.p5.a14_bkcu_penilaian = 1"
											@click2="form.p5.a14_bkcu_penilaian = 2"
											@click3="form.p5.a14_bkcu_penilaian = 3"
											@click4="form.p5.a14_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a14_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a14_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a14_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a14_bkcu_rekomendasi"
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

		<!-- a15 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a15_cu_penilaian == cuTabName || form.p5.a15_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p5.a14_cu_penilaian != null && form.p5.a14_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.15. Komite Pencalonan atau Komite Pemilihan
						</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a15_cu_penilaian" @click1="form.p5.a15_cu_penilaian = 1"
									:subtitle1="'Tanpa kebijakan, Komite yang dipilih oleh RAT mengandalkan Anggaran Rumah Tangga.'"
									@click2="form.p5.a15_cu_penilaian = 2"
									:subtitle2="`<p>Tidak adanya kebijakan bahwa anggota komite dipilih oleh RAT.Tanggung jawabnya adalah:</p><ol type = 'a'><li>Mengembangkan dan merekomendasikan kepada pengurus, keterampilan, pengalaman dan kriteria keragaman pengurus yang diperlukan untuk memastikan keterwakilan masyarakat yang seimbang dan tata kelola yang efektif.</li><li>Mengidentifikasi, mewawancarai dan memeriksa referensi tentang calon kandidat untuk posisi yang lowong di pengurus.</li><li>Merekomendasikan, kepada pengurus atau anggota, kandidat yang sesuai, sesuai dengan kriteria yang disetujui, untuk mengisi lowongan pengurus.</li><li>Memastikan bahwa Anggota pengurus menerima orientasi yang tepat untuk tanggung jawab mereka.</li></ol>`"
									@click3="form.p5.a15_cu_penilaian = 3"
									:subtitle3="`<p>Adanya kebijakan bahwa anggota komite dipilih oleh RAT. Tanggung jawabnya adalah:</p><ol type='a'>  <li>Mengembangkan dan merekomendasikan kepada pengurus, keterampilan, pengalaman dan kriteria keragaman pengurus yang diperlukan untuk memastikan keterwakilan masyarakat yang seimbang dan tata kelola yang efektif.</li>  <li>Mengidentifikasi, mewawancarai dan memeriksa referensi tentang calon kandidat untuk posisi yang lowong di pengurus.</li>  <li>Merekomendasikan, kepada pengurus atau anggota, kandidat yang sesuai, sesuai dengan kriteria yang disetujui, untuk mengisi lowongan pengurus.</li>  <li>Memastikan bahwa Anggota pengurus menerima orientasi yang tepat untuk tanggung jawab mereka.</li></ol>`"
									@click4="form.p5.a15_cu_penilaian = 4"
									:subtitle4="`<p>Adanya kebijakan bahwa Ketua Pengurus periode yang lalu menjadi Ketua Komite, termasuk CEO/GM/Manajer sebagai anggota yang tidak memiliki hak suara. Pengurus setiap tahun menunjuk anggota lain menjadi komite. Ini mungkin termasuk perwakilan dari keanggotaan umum. Tanggung jawabnya adalah:</p><ol type='a'>  <li>Mengembangkan dan merekomendasikan kepada pengurus, keterampilan, pengalaman dan kriteria keragaman pengurus yang diperlukan untuk memastikan keterwakilan masyarakat yang seimbang dan tata kelola yang efektif.</li>  <li>Mengidentifikasi, mewawancarai dan memeriksa referensi tentang calon kandidat untuk posisi yang lowong di pengurus.</li>  <li>Merekomendasikan, kepada pengurus atau anggota, kandidat yang sesuai, sesuai dengan kriteria yang disetujui, untuk mengisi lowongan pengurus.</li>  <li>Memastikan bahwa Anggota pengurus menerima orientasi yang tepat untuk tanggung jawab mereka.</li></ol>`"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a15_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a15_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a15_bkcu_penilaian"
											@click1="form.p5.a15_bkcu_penilaian = 1"
											@click2="form.p5.a15_bkcu_penilaian = 2"
											@click3="form.p5.a15_bkcu_penilaian = 3"
											@click4="form.p5.a15_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a15_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a15_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a15_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a15_bkcu_rekomendasi"
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

		<!-- a16 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a16_cu_penilaian == cuTabName || form.p5.a16_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p5.a15_cu_penilaian != null && form.p5.a15_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.16. Komite Audit (Pengawas)
						</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a16_cu_penilaian" @click1="form.p5.a16_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan dan audit tidak teratur oleh komite.'"
									@click2="form.p5.a16_cu_penilaian = 2"
									:subtitle2="'Meskipun tidak ada kebijakan, komite melakukan tinjauan pengendalian internal, kepatuhan terhadap peraturan dan kebijakan, audit tahunan dan verifikasi akun anggota setiap dua tahun. Semua pejabat adalah sukarelawan yang tidak dibayar. Komite melakukan audit setidaknya triwulanan dalam satu tahun terakhir.'"
									@click3="form.p5.a16_cu_penilaian = 3"
									:subtitle3="'Sesuai kebijakan, komite melakukan tinjauan pengendalian internal, kepatuhan terhadap peraturan dan kebijakan, audit tahunan dan verifikasi akun anggota setiap dua tahun. Semua pejabat adalah sukarelawan yang tidak dibayar. Komite melakukan audit setidaknya triwulanan dalam satu tahun terakhir.'"
									@click4="form.p5.a16_cu_penilaian = 4"
									:subtitle4="'Sesuai kebijakan, komite melakukan tinjauan pengendalian internal, kepatuhan terhadap peraturan dan kebijakan, audit tahunan dan verifikasi akun anggota setiap dua tahun. Semua pejabat adalah sukarelawan yang tidak dibayar. Komite melakukan audit setidaknya triwulanan dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a16_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a16_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a16_bkcu_penilaian"
											@click1="form.p5.a16_bkcu_penilaian = 1"
											@click2="form.p5.a16_bkcu_penilaian = 2"
											@click3="form.p5.a16_bkcu_penilaian = 3"
											@click4="form.p5.a16_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a16_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a16_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a16_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a16_bkcu_rekomendasi"
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

		<!-- a17 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a17_cu_penilaian == cuTabName || form.p5.a17_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p5.a16_cu_penilaian != null && form.p5.a16_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.17. Komite Kredit
						</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a17_cu_penilaian" @click1="form.p5.a17_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan, komite hanya mengandalkan anggaran rumah tangga pada pelaksanaan fungsinya.'"
									@click2="form.p5.a17_cu_penilaian = 2"
									:subtitle2="'<p>Dengan tidak adanya kebijakan, komite tetap mengawasi pemberian kredit kepada anggota dan memastikan portofolio pinjaman yang berkualitas. Komite memastikan bahwa fungsi-fungsi ini dilakukan dalam:</p><ul>    <li>Parameter pengelolaan kredit dan keuangan yang sehat.</li>    <li>Tujuan organisasi dan kebijakan operasi; dan</li>    <li>Kriteria yang ditetapkan oleh undang-undang dan peraturan</li></ul><p>Komite menjalankan peran ini secara konsisten dalam satu periode terakhir.</p>'"
									@click3="form.p5.a17_cu_penilaian = 3"
									:subtitle3="'<p>Berdasarkan kebijakan, komite tetap mengawasi pemberian kredit kepada anggota dan memastikan portofolio pinjaman yang berkualitas. Komite memastikan bahwa fungsi-fungsi ini dilakukan dalam:</p><ul>    <li>Parameter pengelolaan kredit dan keuangan yang sehat.</li>    <li>Tujuan organisasi dan kebijakan operasi; dan</li>    <li>Kriteria yang ditetapkan oleh undang-undang dan peraturan</li></ul><p>Komite menjalankan peran ini secara konsisten dalam satu periode terakhir.</p>'"
									@click4="form.p5.a17_cu_penilaian = 4"
									:subtitle4="'<p>Berdasarkan kebijakan, komite tetap mengawasi pemberian kredit kepada anggota dan memastikan portofolio pinjaman yang berkualitas. Komite memastikan bahwa fungsi-fungsi ini dilakukan dalam:</p><ul>    <li>Parameter pengelolaan kredit dan keuangan yang sehat.</li>    <li>Tujuan organisasi dan kebijakan operasi; dan</li>    <li>Kriteria yang ditetapkan oleh undang-undang dan peraturan</li></ul><p>Komite menjalankan peran ini secara konsisten dalam dua periode terakhir.</p>'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a17_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a17_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a17_bkcu_penilaian"
											@click1="form.p5.a17_bkcu_penilaian = 1"
											@click2="form.p5.a17_bkcu_penilaian = 2"
											@click3="form.p5.a17_bkcu_penilaian = 3"
											@click4="form.p5.a17_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a17_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a17_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a17_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a17_bkcu_rekomendasi"
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

		<!-- a18 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a18_cu_penilaian == cuTabName || form.p5.a18_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p5.a17_cu_penilaian != null && form.p5.a17_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							5.18. Komite Tata Kelola dan Etika
						</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p5.a18_cu_penilaian" @click1="form.p5.a18_cu_penilaian = 1"
									:subtitle1="'Tidak adanya kebijakan. Komite mengandalkan anggaran rumah tangga untuk menjalankan fungsinya.'"
									@click2="form.p5.a18_cu_penilaian = 2"
									:subtitle2="`<p>Dengan tidak adanya kebijakan, komite tetap berfungsi:</p><ol type='a'>  <li>Merumuskan, menerbitkan, dan menerapkan kode etik dan kerangka tata kelola yang mengatur cara dan perilaku semua pejabat dan karyawan yang disetujui oleh RAT.</li>  <li>Mendengar, menengahi, mendamaikan, dan memutuskan semua perselisihan intra-koperasi antara dan/atau di antara anggota, dan pengurus.</li>  <li>Tunduk pada persetujuan RAT, mengeluarkan aturan dan prosedur tambahan mengenai proses konsiliasi yang dianggap perlu; dan</li>  <li>Menjalankan kekuasaan lain yang mungkin diperlukan untuk memastikan penyelesaian sengketa yang cepat, adil, merata dan murah;</li></ol><p>Komite menjalankan peran ini secara konsisten dalam 1 periode terakhir.</p>`"
									@click3="form.p5.a18_cu_penilaian = 3"
									:subtitle3="`<p>Sesuai kebijakan, komite berfungsi:</p><ol type='a'>  <li>Merumuskan, menerbitkan, dan menerapkan kode etik dan kerangka tata kelola yang mengatur cara dan perilaku semua pejabat dan karyawan yang disetujui oleh RAT.</li>  <li>Mendengar, menengahi, mendamaikan, dan memutuskan semua perselisihan intra-koperasi antara dan/atau di antara anggota, dan pengurus.</li>  <li>Tunduk pada persetujuan RAT, mengeluarkan aturan dan prosedur tambahan mengenai proses konsiliasi yang dianggap perlu; dan</li>  <li>Menjalankan kekuasaan lain yang mungkin diperlukan untuk memastikan penyelesaian sengketa yang cepat, adil, merata dan murah;</li></ol><p>Komite menjalankan peran ini secara konsisten dalam 1 periode terakhir.</p>`"
									@click4="form.p5.a18_cu_penilaian = 4" :subtitle4="`<p>Sesuai kebijakan, komite berfungsi:</p><ol type='a'>  <li>Merumuskan, menerbitkan, dan menerapkan kode etik dan kerangka tata kelola yang mengatur cara dan perilaku semua pejabat dan karyawan yang disetujui oleh RAT.</li>  <li>Mendengar, menengahi, mendamaikan, dan memutuskan semua perselisihan intra-koperasi antara dan/atau di antara anggota, dan pengurus.</li>  <li>Tunduk pada persetujuan RAT, mengeluarkan aturan dan prosedur tambahan mengenai proses konsiliasi yang dianggap perlu; dan</li>  <li>Menjalankan kekuasaan lain yang mungkin diperlukan untuk memastikan penyelesaian sengketa yang cepat, adil, merata dan murah;</li></ol><p>Komite menjalankan peran ini secara konsisten dalam 2 periode terakhir.</p>`"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a18_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p5.a18_cu_keterangan"
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
										<penilaian-bkcu :form="form.p5.a18_bkcu_penilaian"
											@click1="form.p5.a18_bkcu_penilaian = 1"
											@click2="form.p5.a18_bkcu_penilaian = 2"
											@click3="form.p5.a18_bkcu_penilaian = 3"
											@click4="form.p5.a18_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a18_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p5.a18_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a18_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p5.a18_bkcu_rekomendasi"
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

		<!-- a19 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a19_cu_penilaian == cuTabName || form.p5.a19_bkcu_penilaian == bkcuTabName">
			<div class="card border-info"
			v-if="form.p5.a18_cu_penilaian != null && form.p5.a18_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
			<div class="card-header bg-info text-white">
				<h5 class="card-title">
				5.19. Komite Lainnya
				</h5>
			</div>
			<div class="card-body">
				<div class="row">
				<!-- penilaian cu -->
				<div class="col-md-12">
					<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
					<!-- penilaian -->
					<penilaian-cu :form="form.p5.a19_cu_penilaian" @click1="form.p5.a19_cu_penilaian = 1"
					:subtitle1="'Tidak ada kebijakan dan tidak ada TOR yang jelas.'" 
					@click2="form.p5.a19_cu_penilaian = 2"
					:subtitle2="'Meskipun tidak ada kebijakan, pengurus membentuk komite ad-hoc dari waktu ke waktu. Pengurus menentukan jumlah, keanggotaan, dan ketua setiap komite ad-hoc. Umumnya, ketua dan sebagian besar anggota komite tersebut adalah Pengurus Independen. Pengurus menunjuk CEO/GM/Manajer atau staf sebagai anggota ex-officio dari komite ad-hoc tersebut. Komite berfungsi berdasarkan TOR yang disiapkan oleh pengurus. Ini telah diamati secara konsisten dalam periode terakhir pengurus.'" 
					@click3="form.p5.a19_cu_penilaian = 3"
					:subtitle3="'Sesuai kebijakan, pengurus membentuk komite ad-hoc dari waktu ke waktu. Pengurus menentukan jumlah, keanggotaan, dan ketua setiap komite ad-hoc. Umumnya, ketua dan sebagian besar anggota komite tersebut adalah Pengurus Independen. Pengurus menunjuk CEO/GM/Manajer atau staf sebagai anggota ex-officio dari komite ad-hoc tersebut. Komite berfungsi berdasarkan TOR yang disiapkan oleh pengurus. Ini telah diamati secara konsisten dalam periode terakhir pengurus.'" 
					@click4="form.p5.a19_cu_penilaian = 4"
					:subtitle4="'Sesuai kebijakan, pengurus membentuk komite ad-hoc dari waktu ke waktu. Pengurus menentukan jumlah, keanggotaan, dan ketua setiap komite ad-hoc. Umumnya, ketua dan sebagian besar anggota komite tersebut adalah Pengurus Independen. Pengurus menunjuk CEO/GM/Manajer atau staf sebagai anggota ex-officio dari komite ad-hoc tersebut. Komite berfungsi berdasarkan TOR yang disiapkan oleh pengurus. Ini telah diamati secara konsisten dalam 2 periode terakhir pengurus.'" ></penilaian-cu>
					<!-- keterangan -->
					<div class="form-group">
					<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
					<!-- textarea -->
					<textarea rows="6" type="text" name="a19_cu_keterangan" class="form-control"
						placeholder="Silahkan masukkan keterangan " v-model="form.p5.a19_cu_keterangan"
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
						<penilaian-bkcu :form="form.p5.a19_bkcu_penilaian"
						@click1="form.p5.a19_bkcu_penilaian = 1"
						@click2="form.p5.a19_bkcu_penilaian = 2"
						@click3="form.p5.a19_bkcu_penilaian = 3"
						@click4="form.p5.a19_bkcu_penilaian = 4"></penilaian-bkcu>
					</div>
					<div class="col-md-6">
						<div class="form-group">
						<h5>Keterangan PUSKOPCUINA:</h5>
						<!-- textarea -->
						<textarea rows="6" type="text" name="a19_bkcu_keterangan"
							class="form-control" placeholder="Silahkan masukkan keterangan "
							v-model="form.p5.a19_bkcu_keterangan"
							:readonly="$route.meta.mode == 'lihat'"></textarea>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
						<h5>Rekomendasi PUSKOPCUINA:</h5>
						<!-- textarea -->
						<textarea rows="6" type="text" name="a19_bkcu_rekomendasi"
							class="form-control" placeholder="Silahkan masukkan rekomendasi "
							v-model="form.p5.a19_bkcu_rekomendasi"
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

		<!-- a20 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a20_cu_penilaian == cuTabName || form.p5.a20_bkcu_penilaian == bkcuTabName">
			<div class="card border-info"
			v-if="form.p5.a19_cu_penilaian != null && form.p5.a19_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
			<div class="card-header bg-info text-white">
				<h5 class="card-title">
				5.20. Pencalonan dan Pemilihan Pengurus
				</h5>
			</div>
			<div class="card-body">
				<div class="row">
				<!-- penilaian cu -->
				<div class="col-md-12">
					<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
					<!-- penilaian -->
					<penilaian-cu :form="form.p5.a20_cu_penilaian" @click1="form.p5.a20_cu_penilaian = 1"
					:subtitle1="'Tidak ada kebijakan, para kandidat tidak diwawancarai oleh komite pencalonan.'" 
					@click2="form.p5.a20_cu_penilaian = 2"
					:subtitle2="'Tidak adanya kebijakan yang mempertimbangkan keseimbangan seluruh pengurus dari beragam perspektif, latar belakang dan pengalaman.Mayoritas anggota Komite Nominasi akan mewawancarai calon potensial. Secara konsisten diamati dalam satu tahun terakhir'" 
					@click3="form.p5.a20_cu_penilaian = 3"
					:subtitle3="'Adanya kebijakan yang mempertimbangkan keseimbangan seluruh pengurus dari beragam perspektif, latar belakang dan pengalaman.Mayoritas anggota Komite Nominasi akan mewawancarai calon potensial. Secara konsisten diamati dalam satu tahun terakhir'" 
					@click4="form.p5.a20_cu_penilaian = 4"
					:subtitle4="'Adanya kebijakan yang mempertimbangkan keseimbangan seluruh pengurus dari beragam perspektif, latar belakang dan pengalaman.Mayoritas anggota Komite Nominasi akan mewawancarai calon potensial. Secara konsisten diamati dalam 3 tahun terakhir'" ></penilaian-cu>
					<!-- keterangan -->
					<div class="form-group">
					<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
					<!-- textarea -->
					<textarea rows="6" type="text" name="a20_cu_keterangan" class="form-control"
						placeholder="Silahkan masukkan keterangan " v-model="form.p5.a20_cu_keterangan"
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
						<penilaian-bkcu :form="form.p5.a20_bkcu_penilaian"
						@click1="form.p5.a20_bkcu_penilaian = 1"
						@click2="form.p5.a20_bkcu_penilaian = 2"
						@click3="form.p5.a20_bkcu_penilaian = 3"
						@click4="form.p5.a20_bkcu_penilaian = 4"></penilaian-bkcu>
					</div>
					<div class="col-md-6">
						<div class="form-group">
						<h5>Keterangan PUSKOPCUINA:</h5>
						<!-- textarea -->
						<textarea rows="6" type="text" name="a20_bkcu_keterangan"
							class="form-control" placeholder="Silahkan masukkan keterangan "
							v-model="form.p5.a20_bkcu_keterangan"
							:readonly="$route.meta.mode == 'lihat'"></textarea>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
						<h5>Rekomendasi PUSKOPCUINA:</h5>
						<!-- textarea -->
						<textarea rows="6" type="text" name="a20_bkcu_rekomendasi"
							class="form-control" placeholder="Silahkan masukkan rekomendasi "
							v-model="form.p5.a20_bkcu_rekomendasi"
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

		<!-- a21 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a21_cu_penilaian == cuTabName || form.p5.a21_bkcu_penilaian == bkcuTabName">
			<div class="card border-info"
			v-if="form.p5.a20_cu_penilaian != null && form.p5.a20_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
			<div class="card-header bg-info text-white">
				<h5 class="card-title">
				5.21. Keragaman Keahlian dan Pengalaman
				</h5>
			</div>
			<div class="card-body">
				<div class="row">
				<!-- penilaian cu -->
				<div class="col-md-12">
					<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
					<!-- penilaian -->
					<penilaian-cu :form="form.p5.a21_cu_penilaian" @click1="form.p5.a21_cu_penilaian = 1"
					:subtitle1="'Tidak ada kebijakan.Tidak ada keragaman dalam kepengurusan.'" 
					@click2="form.p5.a21_cu_penilaian = 2"
					:subtitle2="`<p>Tidak adanya matriks rekrutmen berdasarkan keterampilan dan pengalaman berikut:</p><ol type='a'>  <li>Demografi (geografi, ras, jenis kelamin, usia, kemampuan)</li>  <li>Keterampilan dan pengalaman (akuntansi, hukum, hubungan masyarakat, keuangan, manajemen), dan</li>  <li>Pengalaman (tugas pengurus, kerja sukarelawan, aktivis, bisnis, pemerintah)</li></ol><p>Namun, dengan tidak adanya kebijakan, upaya dilakukan untuk memiliki keragaman seperti yang dilakukan dalam pemilihan periode pengurus terakhir.</p>`" 
					@click3="form.p5.a21_cu_penilaian = 3"
					:subtitle3="`<p>Adanya matriks rekrutmen berdasarkan keterampilan dan pengalaman berikut:</p><ol type='a'>  <li>Demografi (geografi, ras, jenis kelamin, usia, kemampuan)</li>  <li>Keterampilan dan pengalaman (akuntansi, hukum, hubungan masyarakat, keuangan, manajemen), dan</li>  <li>Pengalaman (tugas pengurus, kerja sukarelawan, aktivis, bisnis, pemerintah)</li></ol><p>Kebijakan tersebut telah dipatuhi secara konsisten pada pemilihan periode pengurus terakhir.</p>`" 
					@click4="form.p5.a21_cu_penilaian = 4"
					:subtitle4="`<p>Adanya matriks rekrutmen berdasarkan keterampilan dan pengalaman berikut:</p><ol type='a'>  <li>Demografi (geografi, ras, jenis kelamin, usia, kemampuan)</li>  <li>Keterampilan dan pengalaman (akuntansi, hukum, hubungan masyarakat, keuangan, manajemen), dan</li>  <li>Pengalaman (tugas pengurus, kerja sukarelawan, aktivis, bisnis, pemerintah)</li></ol><p>Kebijakan tersebut telah dipatuhi secara konsisten pada pemilihan 3 periode pengurus terakhir.</p>`" ></penilaian-cu>
					<!-- keterangan -->
					<div class="form-group">
					<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
					<!-- textarea -->
					<textarea rows="6" type="text" name="a21_cu_keterangan" class="form-control"
						placeholder="Silahkan masukkan keterangan " v-model="form.p5.a21_cu_keterangan"
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
						<penilaian-bkcu :form="form.p5.a21_bkcu_penilaian"
						@click1="form.p5.a21_bkcu_penilaian = 1"
						@click2="form.p5.a21_bkcu_penilaian = 2"
						@click3="form.p5.a21_bkcu_penilaian = 3"
						@click4="form.p5.a21_bkcu_penilaian = 4"></penilaian-bkcu>
					</div>
					<div class="col-md-6">
						<div class="form-group">
						<h5>Keterangan PUSKOPCUINA:</h5>
						<!-- textarea -->
						<textarea rows="6" type="text" name="a21_bkcu_keterangan"
							class="form-control" placeholder="Silahkan masukkan keterangan "
							v-model="form.p5.a21_bkcu_keterangan"
							:readonly="$route.meta.mode == 'lihat'"></textarea>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
						<h5>Rekomendasi PUSKOPCUINA:</h5>
						<!-- textarea -->
						<textarea rows="6" type="text" name="a21_bkcu_rekomendasi"
							class="form-control" placeholder="Silahkan masukkan rekomendasi "
							v-model="form.p5.a21_bkcu_rekomendasi"
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

		<!-- a22 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a22_cu_penilaian == cuTabName || form.p5.a22_bkcu_penilaian == bkcuTabName">
			<div class="card border-info"
			v-if="form.p5.a21_cu_penilaian != null && form.p5.a21_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
			<div class="card-header bg-info text-white">
				<h5 class="card-title">
				5.22. Evaluasi Kinerja Pengurus 
				</h5>
			</div>
			<div class="card-body">
				<div class="row">
				<!-- penilaian cu -->
				<div class="col-md-12">
					<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
					<!-- penilaian -->
					<penilaian-cu :form="form.p5.a22_cu_penilaian" @click1="form.p5.a22_cu_penilaian = 1"
					:subtitle1="'Tidak ada evaluasi kinerja objektif yang dilakukan.'" 
					@click2="form.p5.a22_cu_penilaian = 2"
					:subtitle2="'<p>Dilakukan secara tidak teratur, evaluasi pengurus dilakukan secara adil berdasarkan kriteria kinerja berikut:</p><ul>    <li>Pengambilan keputusan</li>    <li>Penasihat</li>    <li>Wali Amanat</li>    <li>Partisipasi</li>    <li>Simbolik</li></ul><p>(lihat peringkat sampel)</p>'" 
					@click3="form.p5.a22_cu_penilaian = 3"
					:subtitle3="'<p>Dilakukan setiap tahun, evaluasi Pengurus hampir semua didasarkan pada kriteria kinerja berikut:</p><ul>    <li>Pengambilan keputusan</li>    <li>Penasihat</li>    <li>Wali Amanat</li>    <li>Partisipasi</li>    <li>Simbolik</li></ul><p>(lihat peringkat sampel)</p>'" 
					@click4="form.p5.a22_cu_penilaian = 4"
					:subtitle4="'<p>Dilakukan setiap tahun, evaluasi Pengurus didasarkan pada kriteria kinerja berikut:</p><ul>    <li>Pengambilan keputusan</li>    <li>Penasihat</li>    <li>Wali Amanat</li>    <li>Partisipasi</li>    <li>Simbolik</li></ul><p>(lihat peringkat sampel)</p>'" ></penilaian-cu>
					<!-- keterangan -->
					<div class="form-group">
					<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
					<!-- textarea -->
					<textarea rows="6" type="text" name="a22_cu_keterangan" class="form-control"
						placeholder="Silahkan masukkan keterangan " v-model="form.p5.a22_cu_keterangan"
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
						<penilaian-bkcu :form="form.p5.a22_bkcu_penilaian"
						@click1="form.p5.a22_bkcu_penilaian = 1"
						@click2="form.p5.a22_bkcu_penilaian = 2"
						@click3="form.p5.a22_bkcu_penilaian = 3"
						@click4="form.p5.a22_bkcu_penilaian = 4"></penilaian-bkcu>
					</div>
					<div class="col-md-6">
						<div class="form-group">
						<h5>Keterangan PUSKOPCUINA:</h5>
						<!-- textarea -->
						<textarea rows="6" type="text" name="a22_bkcu_keterangan"
							class="form-control" placeholder="Silahkan masukkan keterangan "
							v-model="form.p5.a22_bkcu_keterangan"
							:readonly="$route.meta.mode == 'lihat'"></textarea>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
						<h5>Rekomendasi PUSKOPCUINA:</h5>
						<!-- textarea -->
						<textarea rows="6" type="text" name="a22_bkcu_rekomendasi"
							class="form-control" placeholder="Silahkan masukkan rekomendasi "
							v-model="form.p5.a22_bkcu_rekomendasi"
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

		<!-- a23 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p5.a23_cu_penilaian == cuTabName || form.p5.a23_bkcu_penilaian == bkcuTabName">
			<div class="card border-info"
			v-if="form.p5.a22_cu_penilaian != null && form.p5.a22_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
			<div class="card-header bg-info text-white">
				<h5 class="card-title">
				5.23. Evaluasi Kerja CEO/GM/ Manajer
				</h5>
			</div>
			<div class="card-body">
				<div class="row">
				<!-- penilaian cu -->
				<div class="col-md-12">
					<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
					<!-- penilaian -->
					<penilaian-cu :form="form.p5.a23_cu_penilaian" @click1="form.p5.a23_cu_penilaian = 1"
					:subtitle1="'Tidak ada evaluasi kinerja objektif yang dilakukan.'" 
					@click2="form.p5.a23_cu_penilaian = 2"
					:subtitle2="'<p>CEO/GM/Manajer dievaluasi secara cukup berdasarkan kriteria kinerja berikut:</p><ul>    <li>Keuangan dan operasi</li>    <li>Produk dan layanan</li>    <li>Sumber daya manusia</li>    <li>Fasilitas</li>    <li>Perencanaan dan tata kelola</li></ul><p>(lihat panduan sampel untuk penilaian)</p>'" 
					@click3="form.p5.a23_cu_penilaian = 3"
					:subtitle3="'<p>CEO/GM/Manajer dievaluasi pada hampir semua kriteria kinerja berikut:</p><ul>    <li>Keuangan dan operasi</li>    <li>Produk dan layanan</li>    <li>Sumber daya manusia</li>    <li>Fasilitas</li>    <li>Perencanaan dan tata kelola</li></ul><p>(lihat panduan sampel untuk peringkat)</p>'" 
					@click4="form.p5.a23_cu_penilaian = 4"
					:subtitle4="'<p>CEO/GM/Manajer dievaluasi berdasarkan kriteria kinerja berikut:</p><ul>    <li>Keuangan dan operasi</li>    <li>Produk dan layanan</li>    <li>Sumber daya manusia</li>    <li>Fasilitas</li>    <li>Perencanaan dan tata kelola</li></ul><p>(lihat panduan sampel untuk peringkat)</p>'" ></penilaian-cu>
					<!-- keterangan -->
					<div class="form-group">
					<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
					<!-- textarea -->
					<textarea rows="6" type="text" name="a23_cu_keterangan" class="form-control"
						placeholder="Silahkan masukkan keterangan " v-model="form.p5.a23_cu_keterangan"
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
						<penilaian-bkcu :form="form.p5.a23_bkcu_penilaian"
						@click1="form.p5.a23_bkcu_penilaian = 1"
						@click2="form.p5.a23_bkcu_penilaian = 2"
						@click3="form.p5.a23_bkcu_penilaian = 3"
						@click4="form.p5.a23_bkcu_penilaian = 4"></penilaian-bkcu>
					</div>
					<div class="col-md-6">
						<div class="form-group">
						<h5>Keterangan PUSKOPCUINA:</h5>
						<!-- textarea -->
						<textarea rows="6" type="text" name="a23_bkcu_keterangan"
							class="form-control" placeholder="Silahkan masukkan keterangan "
							v-model="form.p5.a23_bkcu_keterangan"
							:readonly="$route.meta.mode == 'lihat'"></textarea>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
						<h5>Rekomendasi PUSKOPCUINA:</h5>
						<!-- textarea -->
						<textarea rows="6" type="text" name="a23_bkcu_rekomendasi"
							class="form-control" placeholder="Silahkan masukkan rekomendasi "
							v-model="form.p5.a23_bkcu_rekomendasi"
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
					v-if="form.p5.a23_cu_penilaian != null && form.p5.a23_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
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
			this.$emit('saveSingle', 'p5');
		},
		prev() {
			this.$emit('prev');
		},
		next() {
			this.$emit('next');
		},

		skorCUA() {
			var jumlah = (this.form.p5.a1_cu_penilaian + this.form.p5.a2_cu_penilaian + this.form.p5.a3_cu_penilaian +
				this.form.p5.a4_cu_penilaian + this.form.p5.a5_cu_penilaian + this.form.p5.a6_cu_penilaian +
				this.form.p5.a7_cu_penilaian + this.form.p5.a8_cu_penilaian + this.form.p5.a9_cu_penilaian + this.form.p5.a10_cu_penilaian
				+ this.form.p5.a11_cu_penilaian + this.form.p5.a12_cu_penilaian + this.form.p5.a13_cu_penilaian
				+ this.form.p5.a14_cu_penilaian + this.form.p5.a15_cu_penilaian + this.form.p5.a16_cu_penilaian
				+ this.form.p5.a17_cu_penilaian + this.form.p5.a18_cu_penilaian + this.form.p5.a19_cu_penilaian
				+ this.form.p5.a20_cu_penilaian + this.form.p5.a21_cu_penilaian + this.form.p5.a22_cu_penilaian
				+ this.form.p5.a23_cu_penilaian) / 1;
			this.$emit('skorCUA', jumlah);
			return jumlah;
		},

		skorBKCUA() {
			var jumlah = (this.form.p5.a1_bkcu_penilaian + this.form.p5.a2_bkcu_penilaian + this.form.p5.a3_bkcu_penilaian +
				this.form.p5.a4_bkcu_penilaian + this.form.p5.a5_bkcu_penilaian + this.form.p5.a6_bkcu_penilaian + this.form.p5.a7_bkcu_penilaian +
				this.form.p5.a8_bkcu_penilaian + this.form.p5.a9_bkcu_penilaian + this.form.p5.a10_bkcu_penilaian + this.form.p5.a11_bkcu_penilaian
				+ this.form.p5.a12_bkcu_penilaian + this.form.p5.a13_bkcu_penilaian + this.form.p5.a14_bkcu_penilaian
				+ this.form.p5.a15_bkcu_penilaian + this.form.p5.a16_bkcu_penilaian + this.form.p5.a17_bkcu_penilaian
				+ this.form.p5.a18_bkcu_penilaian + this.form.p5.a19_bkcu_penilaian + this.form.p5.a20_bkcu_penilaian
				+ this.form.p5.a21_bkcu_penilaian + this.form.p5.a22_bkcu_penilaian + this.form.p5.a23_bkcu_penilaian) / 1;
			this.$emit('skorBKCUA', jumlah);
			return jumlah;
		}, 
		
		jumlahPenilaianCU(nilai) {
			var jumlah = 0;
			if (this.form.p5.a1_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a2_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a3_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a4_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a5_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a6_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a7_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a8_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a9_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a10_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a11_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a12_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a13_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a14_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a15_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a16_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a17_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a18_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a19_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a20_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a21_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a22_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a23_cu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},
		jumlahPenilaianBKCU(nilai) {
			var jumlah = 0;
			if (this.form.p5.a1_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a2_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a3_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a4_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a5_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a6_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a7_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a8_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a9_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a10_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a11_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a12_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a13_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a14_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a15_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a16_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a17_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a18_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a19_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a20_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a21_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a22_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p5.a23_bkcu_penilaian == nilai) {
				jumlah++;
			}
			

			return jumlah;
		},
	},
	computed: {

	}
}
</script>
