<template>
	<div>

		<div class="card bg-danger card-body"
			v-if="form.p9.a6_cu_penilaian == null && form.p9.a6_cu_keterangan == null && mode != 'penilaianBkcu' && mode != 'lihat'">
			<h6 class="mb-0">Maaf, anda tidak bisa melanjutkan mengisi perspektif ini sebelum melengkapi perspektif
				sebelumnya.</h6>
		</div>

		<div
			v-if="form.p9.a6_cu_penilaian != null && form.p9.a6_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
			<form-filter :cuTabName="cuTabName" :bkcuTabName="bkcuTabName" :jumlahPenilaianCU="jumlahPenilaianCU"
				:jumlahPenilaianBKCU="jumlahPenilaianBKCU" @changeTabCU="changeTabCU"
				@changeTabBKCU="changeTabBKCU"></form-filter>
		</div>

		<!-- A section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
				<div class="card card-body bg-info text-white"
					v-if="form.p9.a6_cu_penilaian != null && form.p9.a6_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="row justify-content-between">
						<div class="col-md-6">
							<h6 class="mb-0 font-weight-bold">10. KINERJA ORGANISASI</h6>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a1 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p10.a1_cu_penilaian == cuTabName || form.p10.a1_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p9.a6_cu_penilaian != null && form.p9.a6_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							10.1. P1. Provisi untuk kredit macet lebih dari 12 bulan</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p10.a1_cu_penilaian" @click1="form.p10.a1_cu_penilaian = 1"
									:subtitle1="'Penyediaan provisi kurang dari 50% untuk pinjaman macet yang lebih dari 12 bulan dan tidak ada Charge Off yang dilakukan.'"
									@click2="form.p10.a1_cu_penilaian = 2"
									:subtitle2="'Penyediaan provisi 50-99% untuk pinjaman macet yang lebih dari 12 bulan dan tidak ada Charge Off yang dilakukan.'"
									@click3="form.p10.a1_cu_penilaian = 3"
									:subtitle3="'Penyediaan provisi 100% untuk pinjaman macet yang lebih dari 12 bulan dan Charge Off dilakukan triwulanan dari waktu ke waktu.'"
									@click4="form.p10.a1_cu_penilaian = 4"
									:subtitle4="'Penyediaan provisi 100% untuk pinjaman macet yang lebih dari 12 bulan dan Charge Off dilakukan triwulanan secara konsisten.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a1_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p10.a1_cu_keterangan"
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
										<penilaian-bkcu :form="form.p10.a1_bkcu_penilaian"
											@click1="form.p10.a1_bkcu_penilaian = 1"
											@click2="form.p10.a1_bkcu_penilaian = 2"
											@click3="form.p10.a1_bkcu_penilaian = 3"
											@click4="form.p10.a1_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p10.a1_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p10.a1_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p10.a2_cu_penilaian == cuTabName || form.p10.a2_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p10.a1_cu_penilaian != null && form.p10.a1_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							10.2. P2. Provisi untuk kredit macet 1-12 bulan</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p10.a2_cu_penilaian" @click1="form.p10.a2_cu_penilaian = 1"
									:subtitle1="'Tidak ada penyediaan provisi untuk pinjaman macet 1-12 bulan dan tidak ada Charge Off yang dilakukan.'"
									@click2="form.p10.a2_cu_penilaian = 2"
									:subtitle2="'Penyediaan provisi kurang dari 35% untuk pinjaman macet 1-12 bulan dan tidak ada Charge Off yang dilakukan.'"
									@click3="form.p10.a2_cu_penilaian = 3"
									:subtitle3="'Penyediaan provisi 35% untuk pinjaman macet 1-12 bulan dan Charge Off dilakukan triwulanan dari waktu ke waktu.'"
									@click4="form.p10.a2_cu_penilaian = 4"
									:subtitle4="'Penyediaan provisi 35% untuk pinjaman macet 1-12 bulan dan Charge Off dilakukan triwulanan secara konsisten.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a2_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p10.a2_cu_keterangan"
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
										<penilaian-bkcu :form="form.p10.a2_bkcu_penilaian"
											@click1="form.p10.a2_bkcu_penilaian = 1"
											@click2="form.p10.a2_bkcu_penilaian = 2"
											@click3="form.p10.a2_bkcu_penilaian = 3"
											@click4="form.p10.a2_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p10.a2_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p10.a2_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p10.a3_cu_penilaian == cuTabName || form.p10.a3_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p10.a2_cu_penilaian != null && form.p10.a2_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							10.3. E1. Jumlah kredit bersih 70-80% dari total aset</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p10.a3_cu_penilaian" @click1="form.p10.a3_cu_penilaian = 1"
									:subtitle1="'Di bawah 50% dari total aset.'"
									@click2="form.p10.a3_cu_penilaian = 2"
									:subtitle2="'Lebih dari 80% dari total aset atau 51-69% dari total aset. '"
									@click3="form.p10.a3_cu_penilaian = 3"
									:subtitle3="'Antara 70-80% dari total aset.'"
									@click4="form.p10.a3_cu_penilaian = 4"
									:subtitle4="'Antara 70-80% dari total aset dan portofolio pinjaman yang beragam dengan minimal 5 produk pinjaman yang berbeda.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a3_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p10.a3_cu_keterangan"
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
										<penilaian-bkcu :form="form.p10.a3_bkcu_penilaian"
											@click1="form.p10.a3_bkcu_penilaian = 1"
											@click2="form.p10.a3_bkcu_penilaian = 2"
											@click3="form.p10.a3_bkcu_penilaian = 3"
											@click4="form.p10.a3_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p10.a3_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p10.a3_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p10.a4_cu_penilaian == cuTabName || form.p10.a4_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p10.a3_cu_penilaian != null && form.p10.a3_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							10.4 E5. Jumlah Simpanan 70-80% dari total aset</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p10.a4_cu_penilaian" @click1="form.p10.a4_cu_penilaian = 1"
									:subtitle1="'Di bawah 50% dari total aset.'"
									@click2="form.p10.a4_cu_penilaian = 2"
									:subtitle2="'51-69% dari total aset.'"
									@click3="form.p10.a4_cu_penilaian = 3"
									:subtitle3="'Antara 70-80% dari total aset.'"
									@click4="form.p10.a4_cu_penilaian = 4"
									:subtitle4="'Antara 70-80% dari total aset dan tabungan yang beragam dengan minimal 5 produk tabungan yang berbeda.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a4_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p10.a4_cu_keterangan"
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
										<penilaian-bkcu :form="form.p10.a4_bkcu_penilaian"
											@click1="form.p10.a4_bkcu_penilaian = 1"
											@click2="form.p10.a4_bkcu_penilaian = 2"
											@click3="form.p10.a4_bkcu_penilaian = 3"
											@click4="form.p10.a4_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p10.a4_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p10.a4_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p10.a5_cu_penilaian == cuTabName || form.p10.a5_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p10.a4_cu_penilaian != null && form.p10.a4_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							10.5 E6. Pinjaman kepada eksternal dibandingkan total asset </h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p10.a5_cu_penilaian" @click1="form.p10.a5_cu_penilaian = 1"
									:subtitle1="'Lebih dari 10-20% dari total aset'"
									@click2="form.p10.a5_cu_penilaian = 2"
									:subtitle2="'6-10% dari total aset'"
									@click3="form.p10.a5_cu_penilaian = 3"
									:subtitle3="'<5% dari total aset'"
									@click4="form.p10.a5_cu_penilaian = 4"
									:subtitle4="'0%'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a5_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p10.a5_cu_keterangan"
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
										<penilaian-bkcu :form="form.p10.a5_bkcu_penilaian"
											@click1="form.p10.a5_bkcu_penilaian = 1"
											@click2="form.p10.a5_bkcu_penilaian = 2"
											@click3="form.p10.a5_bkcu_penilaian = 3"
											@click4="form.p10.a5_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p10.a5_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p10.a5_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p10.a6_cu_penilaian == cuTabName || form.p10.a6_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p10.a5_cu_penilaian != null && form.p10.a5_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							10.6 E7. Modal Saham /Keikutsertaan Modal dari Total Aset</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p10.a6_cu_penilaian" @click1="form.p10.a6_cu_penilaian = 1"
									:subtitle1="'Di bawah 5% dari total aset'"
									@click2="form.p10.a6_cu_penilaian = 2"
									:subtitle2="'5-9% dari total aset'"
									@click3="form.p10.a6_cu_penilaian = 3"
									:subtitle3="'10-12% dari total asset atau di atas 21%'"
									@click4="form.p10.a6_cu_penilaian = 4"
									:subtitle4="'13-20%'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a6_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p10.a6_cu_keterangan"
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
										<penilaian-bkcu :form="form.p10.a6_bkcu_penilaian"
											@click1="form.p10.a6_bkcu_penilaian = 1"
											@click2="form.p10.a6_bkcu_penilaian = 2"
											@click3="form.p10.a6_bkcu_penilaian = 3"
											@click4="form.p10.a6_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a6_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p10.a6_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a6_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p10.a6_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p10.a7_cu_penilaian == cuTabName || form.p10.a7_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p10.a6_cu_penilaian != null && form.p10.a6_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							10.7. E9. Modal bersih Lembaga Target: Minimum 10%</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p10.a7_cu_penilaian" @click1="form.p10.a7_cu_penilaian = 1"
									:subtitle1="'Di bawah 4% dari total asset'"
									@click2="form.p10.a7_cu_penilaian = 2"
									:subtitle2="'5-9% dari total aset'"
									@click3="form.p10.a7_cu_penilaian = 3"
									:subtitle3="'10% dari total aset'"
									@click4="form.p10.a7_cu_penilaian = 4"
									:subtitle4="'Di atas 10% dari total aset'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a7_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p10.a7_cu_keterangan"
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
										<penilaian-bkcu :form="form.p10.a7_bkcu_penilaian"
											@click1="form.p10.a7_bkcu_penilaian = 1"
											@click2="form.p10.a7_bkcu_penilaian = 2"
											@click3="form.p10.a7_bkcu_penilaian = 3"
											@click4="form.p10.a7_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a7_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p10.a7_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a7_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p10.a7_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p10.a8_cu_penilaian == cuTabName || form.p10.a8_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p10.a7_cu_penilaian != null && form.p10.a7_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							10.8. A1. Total kredit macet / total portofolio kredit Target: sama atau kurang dari 5%</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p10.a8_cu_penilaian" @click1="form.p10.a8_cu_penilaian = 1"
									:subtitle1="'Lebih dari 10% dari total portofolio pinjaman'"
									@click2="form.p10.a8_cu_penilaian = 2"
									:subtitle2="'6-10% dari total portofolio pinjaman'"
									@click3="form.p10.a8_cu_penilaian = 3"
									:subtitle3="'4-5% dari total portofolio pinjaman'"
									@click4="form.p10.a8_cu_penilaian = 4"
									:subtitle4="'3% ke bawah'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a8_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p10.a8_cu_keterangan"
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
										<penilaian-bkcu :form="form.p10.a8_bkcu_penilaian"
											@click1="form.p10.a8_bkcu_penilaian = 1"
											@click2="form.p10.a8_bkcu_penilaian = 2"
											@click3="form.p10.a8_bkcu_penilaian = 3"
											@click4="form.p10.a8_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a8_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p10.a8_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a8_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p10.a8_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p10.a9_cu_penilaian == cuTabName || form.p10.a9_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p10.a8_cu_penilaian != null && form.p10.a8_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							10.9. A2. Aset Tidak Menghasilkan, Target: Kurang dari atau sama dengan 5%</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p10.a9_cu_penilaian" @click1="form.p10.a9_cu_penilaian = 1"
									:subtitle1="'Lebih dari 10% dari total asset'"
									@click2="form.p10.a9_cu_penilaian = 2"
									:subtitle2="'6-9% dari total aset'"
									@click3="form.p10.a9_cu_penilaian = 3"
									:subtitle3="'5% dari total aset'"
									@click4="form.p10.a9_cu_penilaian = 4"
									:subtitle4="'Kurang dari 5% dari total aset'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a9_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p10.a9_cu_keterangan"
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
										<penilaian-bkcu :form="form.p10.a9_bkcu_penilaian"
											@click1="form.p10.a9_bkcu_penilaian = 1"
											@click2="form.p10.a9_bkcu_penilaian = 2"
											@click3="form.p10.a9_bkcu_penilaian = 3"
											@click4="form.p10.a9_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a9_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p10.a9_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a9_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p10.a9_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p10.a10_cu_penilaian == cuTabName || form.p10.a10_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p10.a9_cu_penilaian != null && form.p10.a9_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							10.10. R7. Bunga atas Modal Saham dengan Rata-rata Saham</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p10.a10_cu_penilaian" @click1="form.p10.a10_cu_penilaian = 1"
									:subtitle1="'Biaya bunga atas saham (dividen) dibayarkan di bawah harga pasar'"
									@click2="form.p10.a10_cu_penilaian = 2"
									:subtitle2="'Biaya bunga atas saham (dividen) dibayarkan minimal 2% lebih tinggi dari harga pasar '"
									@click3="form.p10.a10_cu_penilaian = 3"
									:subtitle3="'Biaya bunga atas saham (dividen) dibayarkan 1% lebih tinggi dari bunga pasar'"
									@click4="form.p10.a10_cu_penilaian = 4"
									:subtitle4="'Biaya bunga atas saham (dividen) dibayarkan berdasarkan bunga pasar'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a10_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p10.a10_cu_keterangan"
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
										<penilaian-bkcu :form="form.p10.a10_bkcu_penilaian"
											@click1="form.p10.a10_bkcu_penilaian = 1"
											@click2="form.p10.a10_bkcu_penilaian = 2"
											@click3="form.p10.a10_bkcu_penilaian = 3"
											@click4="form.p10.a10_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a10_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p10.a10_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a10_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p10.a10_bkcu_rekomendasi"
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
			<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p10.a11_cu_penilaian == cuTabName || form.p10.a11_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p10.a10_cu_penilaian != null && form.p10.a10_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							10.11. R9. Biaya Operasional untuk Aset Rata-Rata Sasaran: 5%</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p10.a11_cu_penilaian" @click1="form.p10.a11_cu_penilaian = 1"
									:subtitle1="'Biaya operasional terhadap Aset Rata-Rata dibawah 2% atau diatas 5% dan staf tidak memadai untuk menjalankan operasional CU'"
									@click2="form.p10.a11_cu_penilaian = 2"
									:subtitle2="'Biaya operasional terhadap Aset Rata-Rata adalah 2-3%'"
									@click3="form.p10.a11_cu_penilaian = 3"
									:subtitle3="'Biaya operasional terhadap Aset Rata-Rata 3-4%'"
									@click4="form.p10.a11_cu_penilaian = 4"
									:subtitle4="'Biaya operasional terhadap Aset Rata-Rata adalah 5%, mempertahankan jumlah staf yang cukup dengan gaji kompetitif'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a11_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p10.a11_cu_keterangan"
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
										<penilaian-bkcu :form="form.p10.a11_bkcu_penilaian"
											@click1="form.p10.a11_bkcu_penilaian = 1"
											@click2="form.p10.a11_bkcu_penilaian = 2"
											@click3="form.p10.a11_bkcu_penilaian = 3"
											@click4="form.p10.a11_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a11_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p10.a11_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a11_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p10.a11_bkcu_rekomendasi"
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
			<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p10.a12_cu_penilaian == cuTabName || form.p10.a12_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p10.a11_cu_penilaian != null && form.p10.a11_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							10.12. L1. Investasi likuid (+) aset likuid (-) hutang jangka pendek / simpanan </h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p10.a12_cu_penilaian" @click1="form.p10.a12_cu_penilaian = 1"
									:subtitle1="'Di bawah 10% dari total simpanan atau di atas 15% dari total simpanan dan melebihi 20% dari total aset'"
									@click2="form.p10.a12_cu_penilaian = 2"
									:subtitle2="'10-15% dari total simpanan tetapi tidak melebihi 20% dari total aset'"
									@click3="form.p10.a12_cu_penilaian = 3"
									:subtitle3="'15% dari total tabungan tetapi tidak melebihi 20% dari total aset'"
									@click4="form.p10.a12_cu_penilaian = 4"
									:subtitle4="'Di atas 15% dari total tabungan tetapi tidak melebihi 20% dari total aset'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a12_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p10.a12_cu_keterangan"
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
										<penilaian-bkcu :form="form.p10.a12_bkcu_penilaian"
											@click1="form.p10.a12_bkcu_penilaian = 1"
											@click2="form.p10.a12_bkcu_penilaian = 2"
											@click3="form.p10.a12_bkcu_penilaian = 3"
											@click4="form.p10.a12_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a12_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p10.a12_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a12_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p10.a12_bkcu_rekomendasi"
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
			<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p10.a13_cu_penilaian == cuTabName || form.p10.a13_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p10.a12_cu_penilaian != null && form.p10.a12_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							10.13. S10. Pertumbuhan keanggotaan: Sasaran:> 12%</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p10.a13_cu_penilaian" @click1="form.p10.a13_cu_penilaian = 1"
									:subtitle1="'2% ke bawah jika credit union telah mencapai 30% dari pasar'"
									@click2="form.p10.a13_cu_penilaian = 2"
									:subtitle2="'3% jika credit union telah mencapai 30% dari pasar'"
									@click3="form.p10.a13_cu_penilaian = 3"
									:subtitle3="'4% jika credit union telah mencapai 30% dari pasar'"
									@click4="form.p10.a13_cu_penilaian = 4"
									:subtitle4="'Min 5% jika credit union telah mencapai 30% dari pasar'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a13_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p10.a13_cu_keterangan"
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
										<penilaian-bkcu :form="form.p10.a13_bkcu_penilaian"
											@click1="form.p10.a13_bkcu_penilaian = 1"
											@click2="form.p10.a13_bkcu_penilaian = 2"
											@click3="form.p10.a13_bkcu_penilaian = 3"
											@click4="form.p10.a13_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a13_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p10.a13_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a13_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p10.a13_bkcu_rekomendasi"
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
			<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p10.a14_cu_penilaian == cuTabName || form.p10.a14_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p10.a13_cu_penilaian != null && form.p10.a13_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							10.14. S11. Pertumbuhan total aset: Lebih besar dari tingkat inflasi
						</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p10.a14_cu_penilaian" @click1="form.p10.a14_cu_penilaian = 1"
									:subtitle1="'Lebih rendah dari tingkat inflasi'"
									@click2="form.p10.a14_cu_penilaian = 2"
									:subtitle2="'1-4% lebih tinggi dari tingkat inflasi'"
									@click3="form.p10.a14_cu_penilaian = 3"
									:subtitle3="'5-9% lebih tinggi dari tingkat inflasi'"
									@click4="form.p10.a14_cu_penilaian = 4"
									:subtitle4="'10% lebih tinggi dari tingkat inflasi'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a14_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p10.a14_cu_keterangan"
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
										<penilaian-bkcu :form="form.p10.a14_bkcu_penilaian"
											@click1="form.p10.a14_bkcu_penilaian = 1"
											@click2="form.p10.a14_bkcu_penilaian = 2"
											@click3="form.p10.a14_bkcu_penilaian = 3"
											@click4="form.p10.a14_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a14_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p10.a14_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a14_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p10.a14_bkcu_rekomendasi"
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
					v-if="form.p10.a14_cu_penilaian != null && form.p10.a14_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
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
			this.$emit('saveSingle', 'p10');
		},
		prev() {
			this.$emit('prev');
		},
		next() {
			this.$emit('next');
		},

		skorCUA() {
			var jumlah = (this.form.p10.a1_cu_penilaian + this.form.p10.a2_cu_penilaian + this.form.p10.a3_cu_penilaian +
				this.form.p10.a4_cu_penilaian + this.form.p10.a5_cu_penilaian + this.form.p10.a6_cu_penilaian +
				this.form.p10.a7_cu_penilaian + this.form.p10.a8_cu_penilaian + this.form.p10.a9_cu_penilaian + this.form.p10.a10_cu_penilaian
				+ this.form.p10.a11_cu_penilaian + this.form.p10.a12_cu_penilaian + this.form.p10.a13_cu_penilaian
				+ this.form.p10.a14_cu_penilaian) / 1;
			this.$emit('skorCUA', jumlah);
			return jumlah;
		},

		skorBKCUA() {
			var jumlah = (this.form.p10.a1_bkcu_penilaian + this.form.p10.a2_bkcu_penilaian + this.form.p10.a3_bkcu_penilaian +
				this.form.p10.a4_bkcu_penilaian + this.form.p10.a5_bkcu_penilaian + this.form.p10.a6_bkcu_penilaian + this.form.p10.a7_bkcu_penilaian +
				this.form.p10.a8_bkcu_penilaian + this.form.p10.a9_bkcu_penilaian + this.form.p10.a10_bkcu_penilaian + this.form.p10.a11_bkcu_penilaian
				+ this.form.p10.a12_bkcu_penilaian + this.form.p10.a13_bkcu_penilaian + this.form.p10.a14_bkcu_penilaian) / 1;
			this.$emit('skorBKCUA', jumlah);
			return jumlah;
		}, 

		jumlahPenilaianCU(nilai) {
			var jumlah = 0;
			if (this.form.p10.a1_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a2_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a3_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a4_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a5_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a6_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a7_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a8_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a9_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a10_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a11_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a12_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a13_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a14_cu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},
		jumlahPenilaianBKCU(nilai) {
			var jumlah = 0;
			if (this.form.p10.a1_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a2_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a3_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a4_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a5_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a6_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a7_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a8_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a9_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a10_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a11_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a12_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a13_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p10.a14_bkcu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},
	},
	computed: {

	}
}
</script>
