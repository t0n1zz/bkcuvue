<template>
	<div>

		<div class="card bg-danger card-body"
			v-if="form.p6.a5_cu_penilaian == null && form.p6.a5_cu_keterangan == null && mode != 'penilaianBkcu' && mode != 'lihat'">
			<h6 class="mb-0">Maaf, anda tidak bisa melanjutkan mengisi perspektif ini sebelum melengkapi perspektif
				sebelumnya.</h6>
		</div>

		<div
			v-if="form.p6.a5_cu_penilaian != null && form.p6.a5_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
			<form-filter :cuTabName="cuTabName" :bkcuTabName="bkcuTabName" :jumlahPenilaianCU="jumlahPenilaianCU"
				:jumlahPenilaianBKCU="jumlahPenilaianBKCU" @changeTabCU="changeTabCU"
				@changeTabBKCU="changeTabBKCU"></form-filter>
		</div>

		<!-- A section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
				<div class="card card-body bg-info text-white"
					v-if="form.p6.a5_cu_penilaian != null && form.p6.a5_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="row justify-content-between">
						<div class="col-md-6">
							<h6 class="mb-0 font-weight-bold">7. KETAATAN PADA PERATURAN, KEBIJAKAN DAN REGULASIS</h6>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a1 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p7.a1_cu_penilaian == cuTabName || form.p7.a1_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p6.a5_cu_penilaian != null && form.p6.a5_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							7.1. Hubungan dengan Para Regulator </h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p7.a1_cu_penilaian" @click1="form.p7.a1_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan.'"
									@click2="form.p7.a1_cu_penilaian = 2"
									:subtitle2="'Semua pejabat manajemen dan karyawan dengan cepat dan jujur menanggapi pertanyaan dari para regulator (pemeriksa, supervisor, auditor). Tidak ada penyembunyian informasi terkait oleh petugas dan karyawan. Tidak diatur dalam kebijakan, tidak disebarluaskan dalam organisasi, tidak dipantau'"
									@click3="form.p7.a1_cu_penilaian = 3"
									:subtitle3="'Semua pejabat manajemen dan karyawan dengan cepat dan jujur menanggapi pertanyaan dari regulator (pemeriksa, supervisor, auditor). Tidak ada penyembunyian informasi terkait oleh petugas dan karyawan. Sudah diatur dalam kebijakan, diungkapkan sepenuhnya kepada anggota dan publik, dipantau secara tidak teratur oleh Pengawas dan tidak ditemukan pelanggaran.'"
									@click4="form.p7.a1_cu_penilaian = 4"
									:subtitle4="'Semua pejabat manajemen dan karyawan dengan cepat dan jujur menanggapi pertanyaan dari regulator (pemeriksa, supervisor, auditor). Tidak ada penyembunyian informasi terkait oleh petugas dan karyawan. Sudah diatur dalam kebijakan, diungkapkan sepenuhnya kepada anggota dan publik, dipantau secara teratur oleh Pengawas dan tidak ditemukan pelanggaran.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a1_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p7.a1_cu_keterangan"
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
										<penilaian-bkcu :form="form.p7.a1_bkcu_penilaian"
											@click1="form.p7.a1_bkcu_penilaian = 1"
											@click2="form.p7.a1_bkcu_penilaian = 2"
											@click3="form.p7.a1_bkcu_penilaian = 3"
											@click4="form.p7.a1_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p7.a1_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p7.a1_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p7.a2_cu_penilaian == cuTabName || form.p7.a2_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p7.a1_cu_penilaian != null && form.p7.a1_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							7.2. Consumer Protection (Perlindungan Konsumen)</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p7.a2_cu_penilaian" @click1="form.p7.a2_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan.'"
									@click2="form.p7.a2_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan yang mengadopsi tindakan perlindungan konsumen yang bertujuan untuk melindungi dan meningkatkan kesejahteraan dan/atau kepentingan keuangan konsumen atau anggota. Langkah-langkah perlindungan konsumen-anggota, termasuk pendidikan, mobilisasi dan perwakilan, dilakukan untuk memastikan bahwa anggota dapat membuat keputusan yang tepat tentang pilihan mereka. Secara acak mempraktekkan perlindungan konsumen.'"
									@click3="form.p7.a2_cu_penilaian = 3"
									:subtitle3="'Tersedia kebijakan yang mengadopsi tindakan perlindungan konsumen yang bertujuan untuk melindungi dan meningkatkan kesejahteraan dan/atau kepentingan keuangan konsumen atau anggota. Langkah-langkah perlindungan konsumen-anggota, termasuk pendidikan, mobilisasi dan perwakilan, dilakukan untuk memastikan bahwa anggota dapat membuat keputusan yang tepat tentang pilihan mereka. Perlindungan konsumen tersebut tertuang dalam kebijakan atau dalam Statement of Responsible Lending yang telah diterapkan secara konsisten pada tahun terakhir.'"
									@click4="form.p7.a2_cu_penilaian = 4"
									:subtitle4="'Tersedia kebijakan yang mengadopsi tindakan perlindungan konsumen yang bertujuan untuk melindungi dan meningkatkan kesejahteraan dan/atau kepentingan keuangan konsumen atau anggota. Langkah-langkah perlindungan konsumen-anggota, termasuk pendidikan, mobilisasi dan perwakilan, dilakukan untuk memastikan bahwa anggota dapat membuat keputusan yang tepat tentang pilihan mereka. Perlindungan konsumen tersebut tertuang dalam kebijakan atau dalam Statement of Responsible Lending yang telah diterapkan secara konsisten pada 3 tahun terakhir. '"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a2_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p7.a2_cu_keterangan"
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
										<penilaian-bkcu :form="form.p7.a2_bkcu_penilaian"
											@click1="form.p7.a2_bkcu_penilaian = 1"
											@click2="form.p7.a2_bkcu_penilaian = 2"
											@click3="form.p7.a2_bkcu_penilaian = 3"
											@click4="form.p7.a2_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p7.a2_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p7.a2_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p7.a3_cu_penilaian == cuTabName || form.p7.a3_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p7.a2_cu_penilaian != null && form.p7.a2_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							7.3. Kesempatan kerja yang sama</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p7.a3_cu_penilaian" @click1="form.p7.a3_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Dokumentasi perselisihan perburuhan atau karyawan dalam 10 tahun terakhir.'"
									@click2="form.p7.a3_cu_penilaian = 2"
									:subtitle2="'Kebijakan SDM sebagian mengikuti ketentuan undang-undang ketenagakerjaan negara tentang perekrutan, kompensasi dan tunjangan, pengembangan, promosi dan pensiun karyawan. Tidak ada kasus perburuhan atau karyawan yang diajukan terhadap CU dalam 10 tahun terakhir.'"
									@click3="form.p7.a3_cu_penilaian = 3"
									:subtitle3="'Kebijakan SDM mengikuti semua ketentuan undang-undang ketenagakerjaan negara tentang perekrutan, kompensasi dan tunjangan, pengembangan, promosi dan pensiun karyawan. Ini konsisten sejak tahun lalu.Tidak ada kasus perburuhan atau karyawan yang diajukan terhadap CU dalam 10 tahun terakhir.'"
									@click4="form.p7.a3_cu_penilaian = 4"
									:subtitle4="'Kebijakan SDM mengikuti semua ketentuan undang-undang ketenagakerjaan negara seperti perekrutan, kompensasi dan tunjangan, pengembangan, promosi dan pensiun karyawan. Hal ini telah diterapkan secara konsisten setidaknya dalam 3 tahun terakhir. Tidak ada kasus perburuhan atau karyawan yang diajukan terhadap CU dalam 10 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a3_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p7.a3_cu_keterangan"
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
										<penilaian-bkcu :form="form.p7.a3_bkcu_penilaian"
											@click1="form.p7.a3_bkcu_penilaian = 1"
											@click2="form.p7.a3_bkcu_penilaian = 2"
											@click3="form.p7.a3_bkcu_penilaian = 3"
											@click4="form.p7.a3_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p7.a3_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p7.a3_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p7.a4_cu_penilaian == cuTabName || form.p7.a4_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p7.a3_cu_penilaian != null && form.p7.a3_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							7.4 Hukum Pajak</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p7.a4_cu_penilaian" @click1="form.p7.a4_cu_penilaian = 1"
									:subtitle1="'Tidak dapat memenuhi persyaratan pajak.'"
									@click2="form.p7.a4_cu_penilaian = 2"
									:subtitle2="'Sebagian memenuhi semua persyaratan pajak menurut Undang-Undang Perpajakan.Tidak ada kasus pajak yang tertunda dalam 10 tahun terakhir.'"
									@click3="form.p7.a4_cu_penilaian = 3"
									:subtitle3="'Memenuhi semua persyaratan pajak menurut Undang-Undang Perpajakan. Ini telah diterapkan secara konsisten tahun lalu. Tidak ada kasus pajak yang tertunda dalam 10 tahun terakhir.'"
									@click4="form.p7.a4_cu_penilaian = 4"
									:subtitle4="'Memenuhi dan melampaui (tidak pernah terlambat) semua persyaratan pajak menurut Undang-Undang Perpajakan. Hal ini telah diterapkan secara konsisten setidaknya dalam 3 tahun terakhir. Tidak ada kasus pajak yang tertunda dalam 10 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a4_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p7.a4_cu_keterangan"
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
										<penilaian-bkcu :form="form.p7.a4_bkcu_penilaian"
											@click1="form.p7.a4_bkcu_penilaian = 1"
											@click2="form.p7.a4_bkcu_penilaian = 2"
											@click3="form.p7.a4_bkcu_penilaian = 3"
											@click4="form.p7.a4_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p7.a4_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p7.a4_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p7.a5_cu_penilaian == cuTabName || form.p7.a5_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p7.a4_cu_penilaian != null && form.p7.a4_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							7.5 Kepatuhan terhadap Peraturan Daerah</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p7.a5_cu_penilaian" @click1="form.p7.a5_cu_penilaian = 1"
									:subtitle1="'Tidak mematuhi peraturan setempat di mana CU beroperasi. (Contoh: izin beroperasi, kode bangunan, sampah dan masalah lingkungan lainnya, serta kebisingan dan gangguan lainnya.)'"
									@click2="form.p7.a5_cu_penilaian = 2"
									:subtitle2="'Sebagian mematuhi peraturan setempat di mana CU beroperasi. (Contoh: izin beroperasi, kode bangunan, sampah dan masalah lingkungan lainnya, serta kebisingan dan gangguan lainnya)'"
									@click3="form.p7.a5_cu_penilaian = 3"
									:subtitle3="'Memenuhi kepatuhan terhadap semua peraturan setempat di mana CU beroperasi. (Contoh: izin beroperasi, kode bangunan, sampah dan masalah lingkungan lainnya, serta kebisingan dan gangguan lainnya.) Dipatuhi secara konsisten dalam setahun terakhir.'"
									@click4="form.p7.a5_cu_penilaian = 4"
									:subtitle4="'Memenuhi kepatuhan terhadap semua peraturan setempat di mana CU beroperasi. (Contoh: izin beroperasi, kode bangunan, sampah dan masalah lingkungan lainnya, serta kebisingan dan gangguan lainnya.) Dipatuhi secara konsisten dalam 3 tahun terakhir dan mendapat pengakuan dari Pemerintah daerah.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a5_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p7.a5_cu_keterangan"
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
										<penilaian-bkcu :form="form.p7.a5_bkcu_penilaian"
											@click1="form.p7.a5_bkcu_penilaian = 1"
											@click2="form.p7.a5_bkcu_penilaian = 2"
											@click3="form.p7.a5_bkcu_penilaian = 3"
											@click4="form.p7.a5_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p7.a5_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p7.a5_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p7.a6_cu_penilaian == cuTabName || form.p7.a6_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p7.a5_cu_penilaian != null && form.p7.a5_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							7.6 Standar Pelaporan Keuangan Internasional atau Nasional</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p7.a6_cu_penilaian" @click1="form.p7.a6_cu_penilaian = 1"
									:subtitle1="'Tidak memenuhi persyaratan asersi Pengurus atas laporan keuangan – keberadaan, kelengkapan, penilaian, hak dan kewajiban serta penyajian dan pengungkapan.Tidak mengikuti standar pengakuan tunggakan dan penyisihan kerugian pinjaman yang tidak memadai.'"
									@click2="form.p7.a6_cu_penilaian = 2"
									:subtitle2="'Memenuhi sebagian persyaratan asersi Pengurus atas laporan keuangan – keberadaan, kelengkapan, penilaian, hak dan kewajiban, serta penyajian dan pengungkapan. Memastikan pengakuan pelanggaran yang tepat diikuti dan berusaha untuk mengalokasikan ketentuan yang cukup dibuat setelahnya.'"
									@click3="form.p7.a6_cu_penilaian = 3"
									:subtitle3="'Memenuhi persyaratan asersi pengurus atas laporan keuangan – keberadaan, kelengkapan, penilaian, hak dan kewajiban serta penyajian dan pengungkapan. Memastikan pengakuan pelanggaran yang tepat diikuti, dan ketentuan yang memadai dibuat setelahnya.Tercatat dalam setahun terakhir.'"
									@click4="form.p7.a6_cu_penilaian = 4"
									:subtitle4="'Memenuhi dan melampaui persyaratan asersi pengurus atas laporan keuangan – keberadaan, kelengkapan, penilaian, hak dan kewajiban dan penyajian dan pengungkapan. Memastikan pengakuan pelanggaran yang tepat diikuti, dan ketentuan yang memadai dibuat setelahnya. Secara konsisten diamati dalam 3 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a6_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p7.a6_cu_keterangan"
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
										<penilaian-bkcu :form="form.p7.a6_bkcu_penilaian"
											@click1="form.p7.a6_bkcu_penilaian = 1"
											@click2="form.p7.a6_bkcu_penilaian = 2"
											@click3="form.p7.a6_bkcu_penilaian = 3"
											@click4="form.p7.a6_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a6_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p7.a6_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a6_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p7.a6_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p7.a7_cu_penilaian == cuTabName || form.p7.a7_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p7.a6_cu_penilaian != null && form.p7.a6_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							7.7. Bimbingan Hukum Pajak</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p7.a7_cu_penilaian" @click1="form.p7.a7_cu_penilaian = 1"
									:subtitle1="'Tidak ada panduan kebijakan dan contoh yang diketahui.'"
									@click2="form.p7.a7_cu_penilaian = 2"
									:subtitle2="'Dalam kapasitasnya sebagai pengurus dan karyawan, menghindari diskusi yang dapat diartikan sebagai pemberian nasihat hukum. Petugas dan pegawai tidak memberikan nasehat perpajakan kepada anggota. Tidak ada kebijakan.'"
									@click3="form.p7.a7_cu_penilaian = 3"
									:subtitle3="'Dalam kapasitasnya sebagai pengurus dan karyawan, menghindari diskusi yang dapat diartikan sebagai pemberian nasihat hukum. Petugas dan pegawai tidak memberikan nasehat perpajakan kepada anggota. Hal ini tercakup dalam Kode Etik atau kebijakan. Tidak ada kasus anggota yang diketahui menerima saran dari pengurus atau karyawan dalam satu tahun terakhir.'"
									@click4="form.p7.a7_cu_penilaian = 4"
									:subtitle4="'Dalam kapasitasnya sebagai pengurus dan karyawan, menghindari diskusi yang dapat diartikan sebagai pemberian nasihat hukum. Petugas dan pegawai tidak memberikan nasehat perpajakan kepada anggota. Hal ini tercakup dalam Kode Etik atau kebijakan. Tidak ada kasus anggota yang diketahui menerima nasihat dari pengurus atau karyawan dalam 3 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a7_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p7.a7_cu_keterangan"
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
										<penilaian-bkcu :form="form.p7.a7_bkcu_penilaian"
											@click1="form.p7.a7_bkcu_penilaian = 1"
											@click2="form.p7.a7_bkcu_penilaian = 2"
											@click3="form.p7.a7_bkcu_penilaian = 3"
											@click4="form.p7.a7_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a7_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p7.a7_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a7_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p7.a7_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p7.a8_cu_penilaian == cuTabName || form.p7.a8_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p7.a7_cu_penilaian != null && form.p7.a7_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							7.8. Pinjaman pihak ketiga yang menguntungkan rekan usaha</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p7.a8_cu_penilaian" @click1="form.p7.a8_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan, ada pelanggaran.'"
									@click2="form.p7.a8_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan yang menyatakan bahwa tidak boleh ada transaksi pinjaman dengan pihak ketiga yang termasuk pihak terafiliasi dimana pihak terafiliasi diuntungkan. Tidak ada pelanggaran yang didokumentasikan dalam satu tahun terakhir.'"
									@click3="form.p7.a8_cu_penilaian = 3"
									:subtitle3="'Tersedia kebijakan yang menyatakan bahwa tidak boleh ada transaksi pinjaman dengan pihak ketiga yang termasuk pihak terafiliasi dimana pihak terafiliasi diuntungkan. Tidak ada pelanggaran yang didokumentasikan dalam satu tahun terakhir.'"
									@click4="form.p7.a8_cu_penilaian = 4"
									:subtitle4="'Tersedia kebijakan yang menyatakan bahwa tidak boleh ada transaksi pinjaman dengan pihak ketiga yang termasuk pihak terafiliasi dimana pihak terafiliasi diuntungkan. Tidak ada pelanggaran yang didokumentasikan dalam 3 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a8_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p7.a8_cu_keterangan"
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
										<penilaian-bkcu :form="form.p7.a8_bkcu_penilaian"
											@click1="form.p7.a8_bkcu_penilaian = 1"
											@click2="form.p7.a8_bkcu_penilaian = 2"
											@click3="form.p7.a8_bkcu_penilaian = 3"
											@click4="form.p7.a8_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a8_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p7.a8_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a8_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p7.a8_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p7.a9_cu_penilaian == cuTabName || form.p7.a9_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p7.a8_cu_penilaian != null && form.p7.a8_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							7.9. Waktu Rapat Anggota Tahunan</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p7.a9_cu_penilaian" @click1="form.p7.a9_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. RAT tidak dilakukan sesuai jangka waktu yang ditetapkan oleh undang-undang.'"
									@click2="form.p7.a9_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan yang menunjukkan bahwa RAT harus diadakan dalam waktu yang ditentukan dalam undang-undang yaitu maksimal 90 hari setelah tahun fiskal berakhir.Pertemuan dilakukan tepat waktu dalam satu tahun terakhir.'"
									@click3="form.p7.a9_cu_penilaian = 3"
									:subtitle3="'Tersedianya kebijakan yang menunjukkan bahwa RAT harus diadakan dalam waktu yang ditentukan dalam undang-undang yaitu maksimal 90 hari setelah tahun fiskal berakhir. Pertemuan dilakukan tepat waktu dalam satu tahun terakhir.'"
									@click4="form.p7.a9_cu_penilaian = 4"
									:subtitle4="'Tersedianya kebijakan yang menunjukkan bahwa RAT harus diadakan dalam waktu yang ditentukan dalam undang-undang yaitu maksimal 90 hari setelah tahun fiskal berakhir.Pertemuan dilakukan tepat waktu dalam 3 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a9_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p7.a9_cu_keterangan"
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
										<penilaian-bkcu :form="form.p7.a9_bkcu_penilaian"
											@click1="form.p7.a9_bkcu_penilaian = 1"
											@click2="form.p7.a9_bkcu_penilaian = 2"
											@click3="form.p7.a9_bkcu_penilaian = 3"
											@click4="form.p7.a9_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a9_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p7.a9_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a9_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p7.a9_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p7.a10_cu_penilaian == cuTabName || form.p7.a10_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p7.a9_cu_penilaian != null && form.p7.a9_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							7.10. Pemberitahuan Rapat Anggota Tahunan</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p7.a10_cu_penilaian" @click1="form.p7.a10_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. RAT diumumkan kurang dari satu bulan sebelum rapat.'"
									@click2="form.p7.a10_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan bahwa RAT harus diumumkan satu bulan sebelum rapat. Patuh dalam menerapkan waktu pengumuman yang ditetapkan dalam satu tahun terakhir.'"
									@click3="form.p7.a10_cu_penilaian = 3"
									:subtitle3="'Tersedia kebijakan bahwa RAT harus diumumkan satu bulan sebelum rapat. Patuh dalam menerapkan waktu pengumuman yang ditetapkan dalam satu tahun terakhir.'"
									@click4="form.p7.a10_cu_penilaian = 4"
									:subtitle4="'Tersedia kebijakan bahwa RAT harus diumumkan satu bulan sebelum rapat. Patuh dalam menerapkan waktu pengumuman yang ditetapkan dalam 3  tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a10_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p7.a10_cu_keterangan"
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
										<penilaian-bkcu :form="form.p7.a10_bkcu_penilaian"
											@click1="form.p7.a10_bkcu_penilaian = 1"
											@click2="form.p7.a10_bkcu_penilaian = 2"
											@click3="form.p7.a10_bkcu_penilaian = 3"
											@click4="form.p7.a10_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a10_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p7.a10_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a10_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p7.a10_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p7.a11_cu_penilaian == cuTabName || form.p7.a11_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p7.a10_cu_penilaian != null && form.p7.a10_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							7.11. Risalah Rapat</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p7.a11_cu_penilaian" @click1="form.p7.a11_cu_penilaian = 1"
									:subtitle1="'Lebih dari 45 hari, risalah yang memuat tata cara dan hasil proses bisnis dalam RAT atau Rapat Khusus Anggota didokumentasikan dan ditandatangani oleh Sekretaris dan dimeteraikan oleh Ketua dan paling sedikit tiga orang anggota yang telah dipilih dalam rapat. File rapat tidak lengkap'"
									@click2="form.p7.a11_cu_penilaian = 2"
									:subtitle2="'Antara 31 s.d. 45 hari, risalah yang memuat tata cara dan hasil proses bisnis dalam RAT atau Rapat Khusus Anggota didokumentasikan dengan baik dan ditandatangani oleh sekretaris dan dimeteraikan oleh ketua dan tidak kurang dari tiga orang anggota yang telah dipilih dalam rapat. Terakhir data ada di folder, disimpan di tempat yang aman.'"
									@click3="form.p7.a11_cu_penilaian = 3"
									:subtitle3="'Antara 16 s.d. 30 hari, risalah yang memuat tata cara dan hasil proses bisnis dalam RAT atau Rapat Khusus Anggota didokumentasikan dengan baik dan ditandatangani oleh sekretaris dan dimeteraikan oleh ketua dan tidak kurang dari tiga orang anggota yang telah dipilih dalam rapat. Terakhir data dijilid, disimpan di tempat yang aman.'"
									@click4="form.p7.a11_cu_penilaian = 4"
									:subtitle4="'Dalam waktu 15 hari setelah pertemuan, risalah yang memuat tata cara dan hasil proses bisnis dalam RAT atau Rapat Khusus Anggota didokumentasikan dengan baik dan ditandatangani oleh sekretaris dan dimeteraikan oleh ketua dan tidak kurang dari tiga orang anggota yang telah dipilih dalam rapat. Terakhir data dijilid, disimpan di tempat yang aman.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a11_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p7.a11_cu_keterangan"
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
										<penilaian-bkcu :form="form.p7.a11_bkcu_penilaian"
											@click1="form.p7.a11_bkcu_penilaian = 1"
											@click2="form.p7.a11_bkcu_penilaian = 2"
											@click3="form.p7.a11_bkcu_penilaian = 3"
											@click4="form.p7.a11_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a11_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p7.a11_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a11_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p7.a11_bkcu_rekomendasi"
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
					v-if="form.p7.a11_cu_penilaian != null && form.p7.a11_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
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
			this.$emit('saveSingle', 'p7');
		},
		prev() {
			this.$emit('prev');
		},
		next() {
			this.$emit('next');
		},

		skorCUA() {
			var jumlah = (this.form.p7.a1_cu_penilaian + this.form.p7.a2_cu_penilaian + this.form.p7.a3_cu_penilaian +
				this.form.p7.a4_cu_penilaian + this.form.p7.a5_cu_penilaian + this.form.p7.a6_cu_penilaian +
				this.form.p7.a7_cu_penilaian + this.form.p7.a8_cu_penilaian + this.form.p7.a9_cu_penilaian + this.form.p7.a10_cu_penilaian
				+ this.form.p7.a11_cu_penilaian) / 1;
			this.$emit('skorCUA', jumlah);
			return jumlah;
		},

		skorBKCUA() {
			var jumlah = (this.form.p7.a1_bkcu_penilaian + this.form.p7.a2_bkcu_penilaian + this.form.p7.a3_bkcu_penilaian +
				this.form.p7.a4_bkcu_penilaian + this.form.p7.a5_bkcu_penilaian + this.form.p7.a6_bkcu_penilaian + this.form.p7.a7_bkcu_penilaian +
				this.form.p7.a8_bkcu_penilaian + this.form.p7.a9_bkcu_penilaian + this.form.p7.a10_bkcu_penilaian + this.form.p7.a11_bkcu_penilaian) / 1;
			this.$emit('skorBKCUA', jumlah);
			return jumlah;
		}, 
	
		jumlahPenilaianCU(nilai) {
			var jumlah = 0;
			if (this.form.p7.a1_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a2_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a3_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a4_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a5_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a6_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a7_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a8_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a9_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a10_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a11_cu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},
		jumlahPenilaianBKCU(nilai) {
			var jumlah = 0;
			if (this.form.p7.a1_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a2_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a3_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a4_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a5_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a6_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a7_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a8_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a9_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a10_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p7.a11_bkcu_penilaian == nilai) {
				jumlah++;
			}
			return jumlah;
		},
	},
	computed: {

	}
}
</script>
