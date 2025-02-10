<template>
	<div>

		<div class="card bg-danger card-body"
			v-if="form.p5.a23_cu_penilaian == null && form.p5.a23_cu_keterangan == null && mode != 'penilaianBkcu' && mode != 'lihat'">
			<h6 class="mb-0">Maaf, anda tidak bisa melanjutkan mengisi perspektif ini sebelum melengkapi perspektif
				sebelumnya.</h6>
		</div>

		<div
			v-if="form.p5.a23_cu_penilaian != null && form.p5.a23_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
			<form-filter :cuTabName="cuTabName" :bkcuTabName="bkcuTabName" :jumlahPenilaianCU="jumlahPenilaianCU"
				:jumlahPenilaianBKCU="jumlahPenilaianBKCU" @changeTabCU="changeTabCU"
				@changeTabBKCU="changeTabBKCU"></form-filter>
		</div>

		<!-- A section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
				<div class="card card-body bg-info text-white"
					v-if="form.p5.a23_cu_penilaian != null && form.p5.a23_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="row justify-content-between">
						<div class="col-md-6">
							<h6 class="mb-0 font-weight-bold">6. KESETARAAN DAN IKLUSIFITAS</h6>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a1 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p6.a1_cu_penilaian == cuTabName || form.p6.a1_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p5.a23_cu_penilaian != null && form.p5.a23_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							6.1. Pengaruh terhadap Penilaian Independen</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p6.a1_cu_penilaian" @click1="form.p6.a1_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan dan ada pelanggaran.'"
									@click2="form.p6.a1_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan bahwa tidak ada pejabat manajemen atau karyawan yang menekan penilai untuk mencapai nilai yang diperlukan untuk memenuhi syarat properti/peminjam.Tidak ada pelanggaran yang tercatat dalam satu tahun terakhir.'"
									@click3="form.p6.a1_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan bahwa tidak ada pejabat manajemen atau karyawan yang menekan penilai untuk mencapai nilai yang diperlukan untuk memenuhi syarat properti/peminjam.Tidak ada pelanggaran yang tercatat dalam satu tahun terakhir.'"
									@click4="form.p6.a1_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan bahwa tidak ada pejabat manajemen atau karyawan yang menekan penilai untuk mencapai nilai yang diperlukan untuk memenuhi syarat properti/peminjam.Tidak ada pelanggaran yang tercatat dalam 3 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a1_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p6.a1_cu_keterangan"
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
										<penilaian-bkcu :form="form.p6.a1_bkcu_penilaian"
											@click1="form.p6.a1_bkcu_penilaian = 1"
											@click2="form.p6.a1_bkcu_penilaian = 2"
											@click3="form.p6.a1_bkcu_penilaian = 3"
											@click4="form.p6.a1_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p6.a1_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p6.a1_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p6.a2_cu_penilaian == cuTabName || form.p6.a2_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p6.a1_cu_penilaian != null && form.p6.a1_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							6.2. Upah dan Denda</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p6.a2_cu_penilaian" @click1="form.p6.a2_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan dan ada pelanggaran.'"
									@click2="form.p6.a2_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan bahwa bunga pinjaman dan tabungan, biaya yang dinilai untuk keterlambatan pembayaran atau penarikan rekening tabungan pengurus dan karyawan adalah sama dengan yang dibebankan kepada anggota dan tidak dibedakan. Rekening tabungan yang ditarik berlebihan disampaikan kepada COO atau CEO/GM/Manajer. Tidak ada pelanggaran yang didokumentasikan dalam satu tahun terakhir.'"
									@click3="form.p6.a2_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan bahwa bunga pinjaman dan tabungan, biaya yang dinilai untuk keterlambatan pembayaran atau penarikan rekening tabungan pengurus dan karyawan adalah sama dengan yang dibebankan kepada anggota dan tidak dibedakan. Rekening tabungan yang ditarik berlebihan disampaikan kepada COO atau CEO/GM/Manajer. Tidak ada pelanggaran yang didokumentasikan dalam satu tahun terakhir.'"
									@click4="form.p6.a2_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan bahwa bunga pinjaman dan tabungan, biaya yang dinilai untuk keterlambatan pembayaran atau penarikan rekening tabungan pengurus dan karyawan adalah sama dengan yang dibebankan kepada anggota dan tidak dibedakan. Rekening tabungan yang ditarik berlebihan disampaikan kepada COO atau CEO/GM/Manajer. Tidak ada pelanggaran yang didokumentasikan dalam 3 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a2_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p6.a2_cu_keterangan"
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
										<penilaian-bkcu :form="form.p6.a2_bkcu_penilaian"
											@click1="form.p6.a2_bkcu_penilaian = 1"
											@click2="form.p6.a2_bkcu_penilaian = 2"
											@click3="form.p6.a2_bkcu_penilaian = 3"
											@click4="form.p6.a2_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p6.a2_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p6.a2_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p6.a3_cu_penilaian == cuTabName || form.p6.a3_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p6.a2_cu_penilaian != null && form.p6.a2_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							6.3. Pembelian dan penjualan properti dengan rekan usaha</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p6.a3_cu_penilaian" @click1="form.p6.a3_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan, ada pelanggaran.'"
									@click2="form.p6.a3_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan yang menyatakan bahwa setiap pembelian dari atau penjualan kepada orang yang berafiliasi atas properti apa pun yang nyata atau pun properti pribadi harus didasarkan pada nilai dari penilai luar yang independen.Transaksi itu dipilih oleh Dewan Pengurus dengan orang yang terafiliasi abstain. Tidak ada pelanggaran yang didokumentasikan dalam satu tahun terakhir.'"
									@click3="form.p6.a3_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan yang menyatakan bahwa setiap pembelian dari atau penjualan kepada orang yang berafiliasi atas properti apa pun yang nyata atau pun properti pribadi harus didasarkan pada nilai dari penilai luar yang independen.Transaksi itu dipilih oleh Dewan Pengurus dengan orang yang terafiliasi abstain. Tidak ada pelanggaran yang didokumentasikan dalam satu tahun terakhir.'"
									@click4="form.p6.a3_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan yang menyatakan bahwa setiap pembelian dari atau penjualan kepada orang yang berafiliasi atas properti apa pun yang nyata atau pun properti pribadi harus didasarkan pada nilai dari penilai luar yang independen.Transaksi itu dipilih oleh Dewan Pengurus dengan orang yang terafiliasi abstain. Tidak ada pelanggaran yang didokumentasikan dalam 3 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a3_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p6.a3_cu_keterangan"
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
										<penilaian-bkcu :form="form.p6.a3_bkcu_penilaian"
											@click1="form.p6.a3_bkcu_penilaian = 1"
											@click2="form.p6.a3_bkcu_penilaian = 2"
											@click3="form.p6.a3_bkcu_penilaian = 3"
											@click4="form.p6.a3_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p6.a3_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p6.a3_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p6.a4_cu_penilaian == cuTabName || form.p6.a4_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p6.a3_cu_penilaian != null && form.p6.a3_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							6.4 Pembayaran dividen yang adil dan tepat waktu</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p6.a4_cu_penilaian" @click1="form.p6.a4_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Dividen yang dibayarkan di bawah harga pasar; modal lembaga bersih kurang dari 10% dari total aset.'"
									@click2="form.p6.a4_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan bahwa dividen harus dibayarkan pada tingkat pasar dengan tidak mengenyampingkan pertumbuhan modal institusional ke tingkat yang dipersyaratkan minimal 10% dari total aset. Ini telah diamati dalam satu tahun terakhir.'"
									@click3="form.p6.a4_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan bahwa dividen harus dibayarkan pada tingkat pasar yang tidak mengenyampingkan pertumbuhan modal institusional ke tingkat yang disyaratkan minimal 10% dari total aset. Ini telah diamati dalam satu tahun terakhir.'"
									@click4="form.p6.a4_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan bahwa dividen harus dibayarkan pada tingkat bunga pasar dengan tidak mengenyampingkan pertumbuhan modal institusional ke tingkat yang disyaratkan minimal 10% dari total aset. Ini telah diamati dalam 3 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a4_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p6.a4_cu_keterangan"
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
										<penilaian-bkcu :form="form.p6.a4_bkcu_penilaian"
											@click1="form.p6.a4_bkcu_penilaian = 1"
											@click2="form.p6.a4_bkcu_penilaian = 2"
											@click3="form.p6.a4_bkcu_penilaian = 3"
											@click4="form.p6.a4_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p6.a4_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p6.a4_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p6.a5_cu_penilaian == cuTabName || form.p6.a5_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p6.a4_cu_penilaian != null && form.p6.a4_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							6.5 Keragaman Anggota CU di Komunitas/ Masyarakat</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p6.a5_cu_penilaian" @click1="form.p6.a5_cu_penilaian = 1"
									:subtitle1="`<p>Terkonsentrasi pada 3 segmen berikut:</p><ol>    <li>Profesional/Teknis</li>    <li>Manajemen Puncak/Eksekutif</li>    <li>Manajemen Menengah</li>    <li>Penjualan/Pemasaran</li>    <li>Klerikal/Pekerja Layanan</li>    <li>Pedagang/Operator Mesin/Buruh</li>    <li>Pengusaha Kecil</li>    <li>Pengangguran</li>    <li>Kelompok etnis</li></ol>`"
									@click2="form.p6.a5_cu_penilaian = 2"
									:subtitle2="`<p>Terkonsentrasi pada 4 segmen berikut:</p><ol>    <li>Profesional/Teknis</li>    <li>Manajemen Puncak/Eksekutif</li>    <li>Manajemen Menengah</li>    <li>Penjualan/Pemasaran</li>    <li>Klerikal/Pekerja Layanan</li>    <li>Pedagang/Operator Mesin/Buruh</li>    <li>Pengusaha Kecil</li>    <li>Pengangguran</li>    <li>Kelompok etnis</li></ol>`"
									@click3="form.p6.a5_cu_penilaian = 3"
									:subtitle3="`<p>Tersebar di 5-8 segmen berikut:</p><ol>    <li>Profesional/Teknis</li>    <li>Manajemen Puncak/Eksekutif</li>    <li>Manajemen Menengah</li>    <li>Penjualan/Pemasaran</li>    <li>Klerikal/Pekerja Layanan</li>    <li>Pedagang/Operator Mesin/Buruh</li>    <li>Pengusaha Kecil</li>    <li>Pengangguran</li>    <li>Kelompok etnis</li></ol>`"
									@click4="form.p6.a5_cu_penilaian = 4"
									:subtitle4="`<p>Tersebar merata pada semua segmen berikut:</p><ol>    <li>Profesional/Teknis</li>    <li>Manajemen Puncak/Eksekutif</li>    <li>Manajemen Menengah</li>    <li>Penjualan/Pemasaran</li>    <li>Klerikal/Pekerja Layanan</li>    <li>Pedagang/Operator Mesin/Buruh</li>    <li>Pengusaha Kecil</li>    <li>Pengangguran</li>    <li>Kelompok etnis</li></ol>`"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a5_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p6.a5_cu_keterangan"
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
										<penilaian-bkcu :form="form.p6.a5_bkcu_penilaian"
											@click1="form.p6.a5_bkcu_penilaian = 1"
											@click2="form.p6.a5_bkcu_penilaian = 2"
											@click3="form.p6.a5_bkcu_penilaian = 3"
											@click4="form.p6.a5_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p6.a5_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p6.a5_bkcu_rekomendasi"
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
					v-if="form.p6.a5_cu_penilaian != null && form.p6.a5_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
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
			this.$emit('saveSingle', 'p6');
		},
		prev() {
			this.$emit('prev');
		},
		next() {
			this.$emit('next');
		},

		skorCUA() {
			var jumlah = (this.form.p6.a1_cu_penilaian + this.form.p6.a2_cu_penilaian + this.form.p6.a3_cu_penilaian +
				this.form.p6.a4_cu_penilaian + this.form.p6.a5_cu_penilaian) / 1;
			this.$emit('skorCUA', jumlah);
			return jumlah;
		},

		skorBKCUA() {
			var jumlah = (this.form.p6.a1_bkcu_penilaian + this.form.p6.a2_bkcu_penilaian + this.form.p6.a3_bkcu_penilaian +
				this.form.p6.a4_bkcu_penilaian + this.form.p6.a5_bkcu_penilaian) / 1;
			this.$emit('skorBKCUA', jumlah);
			return jumlah;
		}, 
		
		jumlahPenilaianCU(nilai) {
			var jumlah = 0;
			if (this.form.p6.a1_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p6.a2_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p6.a3_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p6.a4_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p6.a5_cu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},
		jumlahPenilaianBKCU(nilai) {
			var jumlah = 0;
			if (this.form.p6.a1_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p6.a2_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p6.a3_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p6.a4_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p6.a5_bkcu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},
	},
	computed: {

	}
}
</script>
