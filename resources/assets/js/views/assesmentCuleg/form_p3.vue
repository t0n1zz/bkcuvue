<template>
	<div>

		<div class="card bg-danger card-body"
			v-if="form.p2.a13_cu_penilaian == null && form.p2.a13_cu_keterangan == null && mode != 'penilaianBkcu' && mode != 'lihat'">
			<h6 class="mb-0">Maaf, anda tidak bisa melanjutkan mengisi perspektif ini sebelum melengkapi perspektif
				sebelumnya.</h6>
		</div>

		<div
			v-if="form.p2.a13_cu_penilaian != null && form.p2.a13_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
			<form-filter :cuTabName="cuTabName" :bkcuTabName="bkcuTabName" :jumlahPenilaianCU="jumlahPenilaianCU"
				:jumlahPenilaianBKCU="jumlahPenilaianBKCU" @changeTabCU="changeTabCU"
				@changeTabBKCU="changeTabBKCU"></form-filter>
		</div>

		<!-- A section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
				<div class="card card-body bg-info text-white"
					v-if="form.p2.a13_cu_penilaian != null && form.p2.a13_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="row justify-content-between">
						<div class="col-md-6">
							<h6 class="mb-0 font-weight-bold">3. AKUNTABILITAS</h6>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a1 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p3.a1_cu_penilaian == cuTabName || form.p3.a1_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p2.a10_cu_penilaian != null && form.p2.a10_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							3.1. Keandalan Laporan Keuangan</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p3.a1_cu_penilaian" @click1="form.p3.a1_cu_penilaian = 1"
									:subtitle1="'Laporan keuangan disusun sesuai dengan sistem akuntansi yang diakui secara internasional dan diaudit oleh lembaga audit independen. Menerima laporan audit yang memenuhi syarat (qualified audit report)Auditor eksternal memiliki temuan material tentang keandalan laporan keuangan yang perlu diperbaiki. '"
									@click2="form.p3.a1_cu_penilaian = 2"
									:subtitle2="'Laporan keuangan disusun sesuai dengan sistem akuntansi yang diakui secara internasional dan diaudit oleh lembaga audit independen. Memenuhi semua persyaratan pengungkapan berdasarkan hukum dan peraturan yang berlaku.'"
									@click3="form.p3.a1_cu_penilaian = 3"
									:subtitle3="'Laporan keuangan disusun sesuai dengan sistem akuntansi yang diakui secara internasional dan diaudit oleh lembaga audit independen yang diakui.Memenuhi semua persyaratan pengungkapan berdasarkan hukum dan peraturan yang berlaku. Menerima laporan audit wajar tanpa pengecualian setidaknya dalam satu tahun buku terakhir.'"
									@click4="form.p3.a1_cu_penilaian = 4"
									:subtitle4="'Laporan keuangan disusun sesuai dengan sistem akuntansi yang diakui secara internasional dan diaudit oleh lembaga audit independen yang diakui.Memenuhi semua persyaratan pengungkapan berdasarkan hukum dan peraturan yang berlaku. Menerima laporan audit wajar tanpa pengecualian setidaknya dalam tiga tahun buku terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a1_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.a1_cu_keterangan"
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
										<penilaian-bkcu :form="form.p3.a1_bkcu_penilaian"
											@click1="form.p3.a1_bkcu_penilaian = 1"
											@click2="form.p3.a1_bkcu_penilaian = 2"
											@click3="form.p3.a1_bkcu_penilaian = 3"
											@click4="form.p3.a1_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p3.a1_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p3.a1_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p3.a2_cu_penilaian == cuTabName || form.p3.a2_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p3.a1_cu_penilaian != null && form.p3.a1_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							3.2. Ketepatan Laporan</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p3.a2_cu_penilaian" @click1="form.p3.a2_cu_penilaian = 1"
									:subtitle1="'Pencatatan akuntansi yang tidak akurat'"
									@click2="form.p3.a2_cu_penilaian = 2"
									:subtitle2="'Pejabat Manajemen dan karyawan mematuhi aturan akuntansi dan kontrol audit yang telah ditetapkan. Semua pencatatan secara akurat mencerminkan transaksi secara tepat waktu. Entri yang salah atau menyesatkan diperbaiki pada akhir bulan.'"
									@click3="form.p3.a2_cu_penilaian = 3"
									:subtitle3="'Pejabat manajemen dan karyawan selalu mematuhi aturan akuntansi dan kontrol audit yang telah ditetapkan. Semua pencatatan secara akurat mencerminkan transaksi secara tepat waktu. Entri yang salah atau menyesatkan diperbaiki segera.'"
									@click4="form.p3.a2_cu_penilaian = 4"
									:subtitle4="'Pejabat manajemen dan karyawan secara konsisten minimal dalam 3 tahun terakhir mematuhi aturan akuntansi dan kontrol audit yang telah ditetapkan. Semua pencatatan secara akurat mencerminkan transaksi tepat waktu. Entri yang salah atau menyesatkan diperbaiki segera.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a2_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.a2_cu_keterangan"
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
										<penilaian-bkcu :form="form.p3.a2_bkcu_penilaian"
											@click1="form.p3.a2_bkcu_penilaian = 1"
											@click2="form.p3.a2_bkcu_penilaian = 2"
											@click3="form.p3.a2_bkcu_penilaian = 3"
											@click4="form.p3.a2_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p3.a2_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p3.a2_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p3.a3_cu_penilaian == cuTabName || form.p3.a3_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p3.a2_cu_penilaian != null && form.p3.a2_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							3.3. Penjualan Properti CU</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p3.a3_cu_penilaian" @click1="form.p3.a3_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan, terjadi pelanggaran.'"
									@click2="form.p3.a3_cu_penilaian = 2"
									:subtitle2="'Tidak ada pedoman kebijakan yang ditetapkan pada penjualan properti CU bahwa tidak ada pengurus, pejabat manajemen, dan karyawan yang menikmati keuntungan dari masyarakat umum dalam pembelian properti CU tersebut, apakah properti yang dimaksud termasuk real estat, mobil, atau properti nyata atau property pribadi lainnya.Pada tahun berjalan, tidak ada transaksi dengan pengurus atau staf dalam penjualan properti CU. '"
									@click3="form.p3.a3_cu_penilaian = 3"
									:subtitle3="'Pedoman kebijakan yang jelas ditetapkan pada penjualan properti CU bahwa tidak ada pengurus, pejabat manajemen, dan karyawan yang menikmati keuntungan dari masyarakat umum dalam pembelian properti CU tersebut, apakah properti yang dimaksud termasuk real estat, mobil, atau properti nyata atau property pribadi lainnya. Dalam satu tahun terakhir, tidak ada transaksi dengan pengurus atau staf dalam penjualan properti CU.'"
									@click4="form.p3.a3_cu_penilaian = 4"
									:subtitle4="'Pedoman kebijakan yang jelas ditetapkan pada penjualan properti CU bahwa tidak ada pengurus, pejabat manajemen, dan karyawan yang menikmati keuntungan dari masyarakat umum dalam pembelian properti CU tersebut, apakah properti yang dimaksud termasuk real estat, mobil, atau properti nyata atau property pribadi lainnya. Dalam tiga tahun terakhir, tidak ada transaksi dengan pengurus atau staf dalam penjualan properti CU.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a3_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.a3_cu_keterangan"
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
										<penilaian-bkcu :form="form.p3.a3_bkcu_penilaian"
											@click1="form.p3.a3_bkcu_penilaian = 1"
											@click2="form.p3.a3_bkcu_penilaian = 2"
											@click3="form.p3.a3_bkcu_penilaian = 3"
											@click4="form.p3.a3_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p3.a3_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p3.a3_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p3.a4_cu_penilaian == cuTabName || form.p3.a4_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p3.a3_cu_penilaian != null && form.p3.a3_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							3.4 Timbal Balik (Kickbacks) (Grtifikasi, Suap)</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p3.a4_cu_penilaian" @click1="form.p3.a4_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Ada pelanggaran.'"
									@click2="form.p3.a4_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan bahwa timbal balik/suap adalah pembayaran yang tidak pantas kepada pihak mana pun untuk rujukan bisnis dan sangat dilarang. Persentase pembayaran yang diterima oleh pengurus, pejabat manajemen, atau karyawan dalam kesepakatan bisnis dengan pemasok CU seperti percetakan, peralatan, furnitur, kontraktor, dan penyedia layanan sangat dilarang. Tidak ada pelanggaran yang dicatat atau dilaporkan dalam satu tahun terakhir.'"
									@click3="form.p3.a4_cu_penilaian = 3"
									:subtitle3="'Kebijakannya jelas bahwa timbal balik/suap adalah pembayaran yang tidak pantas kepada pihak mana pun untuk rujukan bisnis dan sangat dilarang. Persentase pembayaran yang diterima oleh pengurus, pejabat manajemen, atau karyawan dalam transaksi bisnis dengan pemasok CU seperti percetakan, peralatan, furnitur, kontraktor, dan penyedia layanan sangat dilarang. Tidak ada pelanggaran yang dicatat atau dilaporkan dalam satu tahun terakhir.'"
									@click4="form.p3.a4_cu_penilaian = 4"
									:subtitle4="'Kebijakannya jelas bahwa timbal balik/suap adalah pembayaran yang tidak pantas kepada pihak mana pun untuk rujukan bisnis dan sangat dilarang. Persentase pembayaran yang diterima oleh pengurus, pejabat manajemen, atau karyawan dalam transaksi bisnis dengan pemasok CU seperti percetakan, peralatan, furnitur, kontraktor, dan penyedia layanan sangat dilarang. Tidak ada pelanggaran yang dicatat atau dilaporkan dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a4_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.a4_cu_keterangan"
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
										<penilaian-bkcu :form="form.p3.a4_bkcu_penilaian"
											@click1="form.p3.a4_bkcu_penilaian = 1"
											@click2="form.p3.a4_bkcu_penilaian = 2"
											@click3="form.p3.a4_bkcu_penilaian = 3"
											@click4="form.p3.a4_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p3.a4_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p3.a4_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p3.a5_cu_penilaian == cuTabName || form.p3.a5_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p3.a4_cu_penilaian != null && form.p3.a4_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							3.5 Transaksi Pinjaman dan Simpanan/Deposit Orang Dalam</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p3.a5_cu_penilaian" @click1="form.p3.a5_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Ada pelanggaran.'"
									@click2="form.p3.a5_cu_penilaian = 2"
									:subtitle2="'Tidak ada kebijakan bahwa pejabat dan karyawan CU dilarang melakukan transaksi yang melibatkan rekening simpanan atau pinjaman mereka sendiri atau rekening simpanan atau pinjaman yang melibatkan keluarga dekat mereka atau hubungan afiliasi bisnis apa pun. Tidak ada pelanggaran yang dicatat atau dilaporkan dalam satu tahun terakhir.'"
									@click3="form.p3.a5_cu_penilaian = 3"
									:subtitle3="'Adanya suatu kebijakan bahwa pejabat dan karyawan CU dilarang melakukan transaksi yang melibatkan rekening simpanan atau pinjaman mereka sendiri atau rekening simpanan atau pinjaman yang melibatkan keluarga dekat mereka atau hubungan afiliasi bisnis apa pun. Tidak ada pelanggaran yang dicatat atau dilaporkan dalam satu tahun terakhir.'"
									@click4="form.p3.a5_cu_penilaian = 4"
									:subtitle4="'Adanya suatu kebijakan bahwa pejabat manajemen dan karyawan CU dilarang melakukan transaksi yang melibatkan rekening simpanan atau pinjaman mereka sendiri atau rekening simpanan atau pinjaman yang melibatkan keluarga dekat mereka atau hubungan afiliasi bisnis apa pun. Tidak ada pelanggaran yang dicatat atau dilaporkan dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a5_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.a5_cu_keterangan"
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
										<penilaian-bkcu :form="form.p3.a5_bkcu_penilaian"
											@click1="form.p3.a5_bkcu_penilaian = 1"
											@click2="form.p3.a5_bkcu_penilaian = 2"
											@click3="form.p3.a5_bkcu_penilaian = 3"
											@click4="form.p3.a5_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p3.a5_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p3.a5_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p3.a6_cu_penilaian == cuTabName || form.p3.a6_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p3.a5_cu_penilaian != null && form.p3.a5_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							3.6 Informasi Akun Anggota</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p3.a6_cu_penilaian" @click1="form.p3.a6_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan, adanya pelanggaran.'"
									@click2="form.p3.a6_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan yang menyatakan bahwa informasi rekening anggota dijaga, seperti: saldo rekening, informasi permohonan pinjaman, cerukan, simpanan, penarikan, nama dan alamat anggota CU. Informasi tersebut hanya didiskusikan dengan anggota. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam satu tahun terakhir.'"
									@click3="form.p3.a6_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan yang menyatakan bahwa informasi rekening anggota dijaga, seperti: saldo rekening, informasi permohonan pinjaman, cerukan, simpanan, penarikan, nama dan alamat anggota CU. Informasi tersebut hanya didiskusikan dengan anggota. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam satu tahun terakhir.'"
									@click4="form.p3.a6_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan yang menyatakan bahwa informasi rekening anggota dijaga, seperti: saldo rekening, informasi permohonan pinjaman, cerukan, simpanan, penarikan, nama dan alamat anggota CU. Informasi tersebut hanya didiskusikan dengan anggota. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a6_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.a6_cu_keterangan"
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
										<penilaian-bkcu :form="form.p3.a6_bkcu_penilaian"
											@click1="form.p3.a6_bkcu_penilaian = 1"
											@click2="form.p3.a6_bkcu_penilaian = 2"
											@click3="form.p3.a6_bkcu_penilaian = 3"
											@click4="form.p3.a6_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a6_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p3.a6_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a6_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p3.a6_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p3.a7_cu_penilaian == cuTabName || form.p3.a7_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p3.a6_cu_penilaian != null && form.p3.a6_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							3.7. Masalah Pribadi Anggota</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p3.a7_cu_penilaian" @click1="form.p3.a7_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan, ada pelanggaran.'"
									@click2="form.p3.a7_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan yang menyatakan bahwa masalah pribadi rekan kerja serta anggota yaitu mengenai perceraian, perselisihan, konflik pribadi atau perilaku memalukan, tidak boleh diungkapkan. Tidak ada pelanggaran yang dicatat atau dilaporkan dalam setahun terakhir.'"
									@click3="form.p3.a7_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan yang menyatakan bahwa masalah pribadi rekan kerja serta anggota yaitu mengenai perceraian, perselisihan, konflik pribadi atau perilaku memalukan, tidak boleh diungkapkan. Tidak ada pelanggaran yang dicatat atau dilaporkan dalam setahun terakhir.'"
									@click4="form.p3.a7_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan yang menyatakan bahwa masalah pribadi rekan kerja serta anggota yaitu mengenai perceraian, perselisihan, konflik pribadi atau perilaku memalukan, tidak boleh diungkapkan. Tidak ada pelanggaran yang dicatat atau dilaporkan dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a7_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.a7_cu_keterangan"
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
										<penilaian-bkcu :form="form.p3.a7_bkcu_penilaian"
											@click1="form.p3.a7_bkcu_penilaian = 1"
											@click2="form.p3.a7_bkcu_penilaian = 2"
											@click3="form.p3.a7_bkcu_penilaian = 3"
											@click4="form.p3.a7_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a7_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p3.a7_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a7_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p3.a7_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p3.a8_cu_penilaian == cuTabName || form.p3.a8_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p3.a7_cu_penilaian != null && form.p3.a7_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							3.8. Keamanan</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p3.a8_cu_penilaian" @click1="form.p3.a8_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan, ada pelanggaran.'"
									@click2="form.p3.a8_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan bahwa keamanan terkait prosedur pembukaan / penutupan, sistem alarm / kamera, batas kas di laci, dirahasiakan. Tidak ada pelanggaran yang dicatat atau dilaporkan dalam setahun terakhir.'"
									@click3="form.p3.a8_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan bahwa keamanan terkait prosedur pembukaan / penutupan, sistem alarm / kamera, batas kas di laci, dirahasiakan. Tidak ada pelanggaran yang dicatat atau dilaporkan dalam setahun terakhir.'"
									@click4="form.p3.a8_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan bahwa keamanan terkait prosedur pembukaan / penutupan, sistem alarm / kamera, batas kas di laci, dirahasiakan. Tidak ada pelanggaran yang dicatat atau dilaporkan dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a8_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.a8_cu_keterangan"
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
										<penilaian-bkcu :form="form.p3.a8_bkcu_penilaian"
											@click1="form.p3.a8_bkcu_penilaian = 1"
											@click2="form.p3.a8_bkcu_penilaian = 2"
											@click3="form.p3.a8_bkcu_penilaian = 3"
											@click4="form.p3.a8_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a8_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p3.a8_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a8_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p3.a8_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p3.a9_cu_penilaian == cuTabName || form.p3.a9_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p3.a8_cu_penilaian != null && form.p3.a8_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							3.9. Perolehan Keuntungan Keuangan dari Informasi Rahasia</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p3.a9_cu_penilaian" @click1="form.p3.a9_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Adanya pelanggaran.'"
									@click2="form.p3.a9_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan bahwa tidak ada keuntungan keuangan yang diperoleh dari informasi rahasia hanya dengan alasan pekerjaan atau sebagai pengurus CU, baik informasi tersebut berkaitan dengan CU, anggotanya, atau siapa pun yang memiliki hubungan bisnis dengannya. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam satu tahun terakhir.'"
									@click3="form.p3.a9_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan bahwa tidak ada keuntungan keuangan yang diperoleh dari informasi rahasia hanya dengan alasan pekerjaan atau sebagai pengurus CU, baik informasi tersebut berkaitan dengan CU, anggotanya, atau siapa pun yang memiliki hubungan bisnis dengannya. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam satu tahun terakhir.'"
									@click4="form.p3.a9_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan bahwa tidak ada keuntungan keuangan yang diperoleh dari informasi rahasia hanya dengan alasan pekerjaan atau sebagai pengurus CU, baik informasi tersebut berkaitan dengan CU, anggotanya, atau siapa pun yang memiliki hubungan bisnis dengannya. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a9_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.a9_cu_keterangan"
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
										<penilaian-bkcu :form="form.p3.a9_bkcu_penilaian"
											@click1="form.p3.a9_bkcu_penilaian = 1"
											@click2="form.p3.a9_bkcu_penilaian = 2"
											@click3="form.p3.a9_bkcu_penilaian = 3"
											@click4="form.p3.a9_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a9_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p3.a9_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a9_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p3.a9_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p3.a10_cu_penilaian == cuTabName || form.p3.a10_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p3.a9_cu_penilaian != null && form.p3.a9_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							3.10. Perlindungan terhadap pelapor (Whistleblower Protection)</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p3.a10_cu_penilaian" @click1="form.p3.a10_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Adanya pelanggaran.'"
									@click2="form.p3.a10_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan tentang perlindungan Pelapor yang mencakup penyerahan laporan dengan itikad baik, prosedur pelaporan, dan pemantauan. Tidak ada laporan dengan itikad baik dalam satu tahun terakhir. '"
									@click3="form.p3.a10_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan tentang perlindungan Pelapor yang mencakup penyerahan laporan dengan itikad baik, prosedur pelaporan, dan pemantauan. Tidak ada laporan dengan itikad baik dalam satu tahun terakhir.'"
									@click4="form.p3.a10_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan tentang perlindungan Pelapor yang mencakup penyerahan laporan dengan itikad baik, prosedur pelaporan, dan pemantauan. Tidak ada laporan dengan itikad baik dalam 3 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a10_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.a10_cu_keterangan"
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
										<penilaian-bkcu :form="form.p3.a10_bkcu_penilaian"
											@click1="form.p3.a10_bkcu_penilaian = 1"
											@click2="form.p3.a10_bkcu_penilaian = 2"
											@click3="form.p3.a10_bkcu_penilaian = 3"
											@click4="form.p3.a10_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a10_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p3.a10_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a10_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p3.a10_bkcu_rekomendasi"
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
			<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p3.a11_cu_penilaian == cuTabName || form.p3.a11_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p3.a10_cu_penilaian != null && form.p3.a10_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							3.11. Permohonan dan Penerimaan “Barang Berharga” sebagai pengganti informasi rahasia</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p3.a11_cu_penilaian" @click1="form.p3.a11_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Adanya pelanggaran.'"
									@click2="form.p3.a11_cu_penilaian = 2"
									:subtitle2="`Tidak adanya kebijakan bahwa tidak boleh ada permintaan dan penerimaan  'barang berharga' oleh Pengurus, Pejabat manajemen dan karyawan dari pihak ketiga sebagai imbalan atas bisnis, layanan atau informasi rahasia dari CU. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam satu tahun terakhir.`"
									@click3="form.p3.a11_cu_penilaian = 3"
									:subtitle3="`Adanya kebijakan bahwa tidak boleh ada permintaan dan penerimaan 'barang berharga' oleh Pengurus, Pejabat manajemen dan karyawan dari pihak ketiga sebagai imbalan atas bisnis, layanan atau informasi rahasia dari CU. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam satu tahun terakhir.`"
									@click4="form.p3.a11_cu_penilaian = 4"
									:subtitle4="`Adanya kebijakan bahwa tidak boleh ada permintaan dan penerimaan 'barang berharga' oleh Pengurus, Pejabat manajemen dan karyawan dari pihak ketiga sebagai imbalan atas bisnis, layanan atau informasi rahasia dari CU. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam tiga tahun terakhir.`"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a11_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.a11_cu_keterangan"
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
										<penilaian-bkcu :form="form.p3.a11_bkcu_penilaian"
											@click1="form.p3.a11_bkcu_penilaian = 1"
											@click2="form.p3.a11_bkcu_penilaian = 2"
											@click3="form.p3.a11_bkcu_penilaian = 3"
											@click4="form.p3.a11_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a11_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p3.a11_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a11_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p3.a11_bkcu_rekomendasi"
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
			<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p3.a12_cu_penilaian == cuTabName || form.p3.a12_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p3.a11_cu_penilaian != null && form.p3.a11_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							3.12. Penerimaan “Barang Berharga” yang berkaitan dengan usaha CU</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p3.a12_cu_penilaian" @click1="form.p3.a12_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Adanya pelanggaran.'"
									@click2="form.p3.a12_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan bahwa tidak boleh ada Pengurus, Pejabat manajemen dan karyawan yang menerima barang dari siapa pun sehubungan dengan bisnis CU selain gaji, upah, biaya atau kompensasi lain yang dapat dipercaya yang dibayarkan dalam kegiatan bisnis biasa. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam satu tahun terakhir.'"
									@click3="form.p3.a12_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan bahwa tidak boleh ada Pengurus, Pejabat manajemen dan karyawan yang menerima barang berharga dari siapa pun sehubungan dengan bisnis CU selain gaji, upah, biaya atau kompensasi lain yang dapat dipercaya yang dibayarkan dalam kegiatan bisnis biasa. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam satu tahun terakhir.'"
									@click4="form.p3.a12_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan bahwa tidak boleh ada Pengurus, Pejabat manajemen dan karyawan yang menerima barang berharga dari siapa pun sehubungan dengan bisnis CU selain gaji, upah, biaya atau kompensasi lain yang dapat dipercaya yang dibayarkan dalam kegiatan bisnis biasa. Tidak ada pelanggaran yang tercatat atau dilaporkan dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a12_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.a12_cu_keterangan"
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
										<penilaian-bkcu :form="form.p3.a12_bkcu_penilaian"
											@click1="form.p3.a12_bkcu_penilaian = 1"
											@click2="form.p3.a12_bkcu_penilaian = 2"
											@click3="form.p3.a12_bkcu_penilaian = 3"
											@click4="form.p3.a12_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a12_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p3.a12_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a12_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p3.a12_bkcu_rekomendasi"
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
			<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p3.a13_cu_penilaian == cuTabName || form.p3.a13_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p3.a12_cu_penilaian != null && form.p3.a12_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							3.13. Layanan sebagai Pengurus CU atau Federasi lainnya</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p3.a13_cu_penilaian" @click1="form.p3.a13_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Adanya pelanggaran.'"
									@click2="form.p3.a13_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan bahwa pengurus membatasi layanan mereka untuk tidak lebih dari satu kepengurusan dari CU primer, sekunder dan tersier atau organisasi koperasi lain, tetapi pengecualian untuk kebijakan ini akan dibuat dalam kasus yang sesuai.Jika seorang pengurus ingin menjabat di lebih dari tiga kepengurusan lainnya, Komite tata kelola akan mempertimbangkan permintaan tersebut dan menyerahkan rekomendasinya kepada Dewan Pengurus untuk pertimbangan dan keputusan.Tidak ada pelanggaran disiplin ini di pengurus saat ini.'"
									@click3="form.p3.a13_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan bahwa pengurus membatasi layanan mereka untuk tidak lebih dari satu kepengurusan dari CU primer, sekunder dan tersier atau organisasi koperasi lain, tetapi pengecualian untuk kebijakan ini akan dibuat dalam kasus yang sesuai.Jika seorang pengurus ingin menjabat di lebih dari tiga kepengurusan lainnya, Komite tata kelola akan mempertimbangkan permintaan tersebut dan menyerahkan rekomendasinya kepada Dewan Pengurus untuk pertimbangan dan keputusan.Tidak ada pelanggaran disiplin ini di pengurus saat ini.'"
									@click4="form.p3.a13_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan bahwa pengurus membatasi layanan mereka untuk tidak lebih dari satu kepengurusan dari CU primer, sekunder dan tersier atau organisasi koperasi lain, tetapi pengecualian untuk kebijakan ini akan dibuat dalam kasus yang sesuai.Jika seorang pengurus ingin menjabat di lebih dari tiga kepengurusan lainnya, Komite tata kelola akan mempertimbangkan permintaan tersebut dan menyerahkan rekomendasinya kepada Dewan Pengurus untuk pertimbangan dan keputusan.Tidak ada pelanggaran disiplin ini di dua periode pengurus terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a13_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.a13_cu_keterangan"
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
										<penilaian-bkcu :form="form.p3.a13_bkcu_penilaian"
											@click1="form.p3.a13_bkcu_penilaian = 1"
											@click2="form.p3.a13_bkcu_penilaian = 2"
											@click3="form.p3.a13_bkcu_penilaian = 3"
											@click4="form.p3.a13_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a13_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p3.a13_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a13_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p3.a13_bkcu_rekomendasi"
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
			<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p3.a14_cu_penilaian == cuTabName || form.p3.a14_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p3.a13_cu_penilaian != null && form.p3.a13_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							3.14. Layanan sebagai pengurus pada organisasi yang bersaing atau saling terkait lainnya.
						</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p3.a14_cu_penilaian" @click1="form.p3.a14_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Adanya pelanggaran.'"
									@click2="form.p3.a14_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan bahwa tidak boleh ada Pengurus yang menjabat sebagai Pengurus perusahaan publik atau swasta yang sedang bersaing dengan bisnis credit union. Tidak ada pelanggaran disiplin ini di dewan pengurus saat ini.'"
									@click3="form.p3.a14_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan bahwa tidak boleh ada Pengurus yang menjabat sebagai Pengurus perusahaan publik atau swasta yang sedang bersaing dengan bisnis credit union. Tidak ada pelanggaran disiplin ini di dewan pengurus saat ini.'"
									@click4="form.p3.a14_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan bahwa tidak boleh ada Pengurus yang menjabat sebagai Pengurus perusahaan publik atau swasta yang sedang bersaing dengan bisnis credit union. Tidak ada pelanggaran disiplin ini dalam dua periode terakhir dewan pengurus.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a14_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.a14_cu_keterangan"
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
										<penilaian-bkcu :form="form.p3.a14_bkcu_penilaian"
											@click1="form.p3.a14_bkcu_penilaian = 1"
											@click2="form.p3.a14_bkcu_penilaian = 2"
											@click3="form.p3.a14_bkcu_penilaian = 3"
											@click4="form.p3.a14_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a14_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p3.a14_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a14_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p3.a14_bkcu_rekomendasi"
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
					v-if="form.p3.a14_cu_penilaian != null && form.p3.a14_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
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
			this.$emit('saveSingle', 'p3');
		},
		prev() {
			this.$emit('prev');
		},
		next() {
			this.$emit('next');
		},

		skorCUA() {
			var jumlah = (this.form.p3.a1_cu_penilaian + this.form.p3.a2_cu_penilaian + this.form.p3.a3_cu_penilaian +
				this.form.p3.a4_cu_penilaian + this.form.p3.a5_cu_penilaian + this.form.p3.a6_cu_penilaian +
				this.form.p3.a7_cu_penilaian + this.form.p3.a8_cu_penilaian + this.form.p3.a9_cu_penilaian + this.form.p3.a10_cu_penilaian
				+ this.form.p3.a11_cu_penilaian + this.form.p3.a12_cu_penilaian + this.form.p3.a13_cu_penilaian + this.form.p3.a14_cu_penilaian) / 1;
			this.$emit('skorCUA', jumlah);
			return jumlah;
		},

		skorBKCUA() {
			var jumlah = (this.form.p3.a1_bkcu_penilaian + this.form.p3.a2_bkcu_penilaian + this.form.p3.a3_bkcu_penilaian +
				this.form.p3.a4_bkcu_penilaian + this.form.p3.a5_bkcu_penilaian + this.form.p3.a6_bkcu_penilaian + this.form.p3.a7_bkcu_penilaian +
				this.form.p3.a8_bkcu_penilaian + this.form.p3.a9_bkcu_penilaian + this.form.p3.a10_bkcu_penilaian + this.form.p3.a11_bkcu_penilaian
				+ this.form.p3.a12_bkcu_penilaian+ this.form.p3.a13_bkcu_penilaian + this.form.p3.a14_cu_penilaian) / 1;
			this.$emit('skorBKCUA', jumlah);
			return jumlah;
		}, 
		
		jumlahPenilaianCU(nilai) {
			var jumlah = 0;
			if (this.form.p3.a1_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a2_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a3_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a4_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a5_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a6_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a7_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a8_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a9_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a10_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a11_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a12_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a13_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a14_cu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},
		jumlahPenilaianBKCU(nilai) {
			var jumlah = 0;
			if (this.form.p3.a1_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a2_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a3_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a4_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a5_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a6_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a7_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a8_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a9_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a10_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a11_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a12_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a13_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p3.a14_bkcu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},
	},
	computed: {

	}
}
</script>
