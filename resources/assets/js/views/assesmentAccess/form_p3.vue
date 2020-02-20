<template>
	<div>

		<div class="card bg-danger card-body" v-if="form.p2.p2b27_cu_penilaian == '' && form.p2.p2b27_cu_keterangan == ''">
			<h6 class="mb-0">Maaf, anda tidak bisa melanjutkan mengisi perspektif ini sebelum melengkapi perspektif sebelumnya.</h6>
		</div>

		<div class="row" v-if="form.p2.p2b27_cu_penilaian != '' && form.p2.p2b27_cu_keterangan != ''">
			<div class="col-md-3">
				<div class="card card-body has-bg-image" :class="{'bg-danger' : tabName == 'semua' || tabName == '1', 'bg-slate-300' : tabName != 'semua' && tabName != '1'}" @click="changeTab(1)" style = "cursor:pointer">
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">CU: {{ jumlahPenilaianCU(1) }} / BKCU: {{ jumlahPenilaianBKCU(1) }}</h3>
							<span class="text-uppercase font-size-xs">Jumlah penilaian Poor(1)</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card card-body has-bg-image" :class="{'bg-warning' : tabName == 'semua' || tabName == '2', 'bg-slate-300' : tabName != 'semua' && tabName != '2'}" @click="changeTab(2)" style = "cursor:pointer">
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">CU: {{ jumlahPenilaianCU(2) }} / BKCU: {{ jumlahPenilaianBKCU(2) }}</h3>
							<span class="text-uppercase font-size-xs">Jumlah penilaian Fair(2)</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card card-body has-bg-image" :class="{'bg-success' : tabName == 'semua' || tabName == '3', 'bg-slate-300' : tabName != 'semua' && tabName != '3'}" @click="changeTab(3)" style = "cursor:pointer">
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">CU: {{ jumlahPenilaianCU(3) }} / BKCU: {{ jumlahPenilaianBKCU(3) }}</h3>
							<span class="text-uppercase font-size-xs">Jumlah penilaian Good(3)</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card card-body has-bg-image" :class="{'bg-primary' : tabName == 'semua' || tabName == '4', 'bg-slate-300' : tabName != 'semua' && tabName != '4'}" @click="changeTab(4)" style = "cursor:pointer">
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">CU: {{ jumlahPenilaianCU(4) }} / BKCU: {{ jumlahPenilaianBKCU(4) }}</h3>
							<span class="text-uppercase font-size-xs">Jumlah penilaian Excellent(4)</span>
						</div>
					</div>
				</div>
			</div>
			<transition enter-active-class="animated fadeIn" mode="out-in">
				<div class="col-md-12" v-if="tabName != 'semua'">
					<button type="button" class="btn btn-warning btn-block" @click.prevent="changeTab('semua')">
						<i class="icon-reset"></i> Reset pencarian
					</button>
					<hr/>
				</div>
			</transition>
		</div>
		
		<!-- A section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua'">
			<div class="card card-body bg-info text-white" v-if="form.p2.p2b27_cu_penilaian != '' && form.p2.p2b27_cu_keterangan != ''"> 
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">A. PRODUK DAN PELAYANAN YANG BERKUALITAS</h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>
								Skor CU: {{ skorCUA }} / 
								Bobot Skor CU: {{ bobotCUA }} 
							</li>
							<li>
								Skor BKCU: {{ skorBKCUA }} / 	
								Bobot Skor BKCU: {{ bobotBKCUA }} 
							</li>
						</ul>	
					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- a1 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3a1_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p2.p2b27_cu_penilaian != '' && form.p2.p2b27_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						1. Manual Operasional Yang Komprehensif</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3a1_cu_penilaian" 
								@click1="form.p3.p3a1_cu_penilaian = 1"
								:subtitle1="'Kegiatan sebagian diarahkan oleh kebijakan, tetapi tidak cukup untuk memberi keputusan operasional; keputusan didasarkan pada pemecahan persoalan yang dilakukan oleh Pengurus; praktik-praktik di sejumlah bidang tidak ditetapkan secara tertulis dalam bentuk kebijakan'"
								@click2="form.p3.p3a1_cu_penilaian = 2" 
								:subtitle2="'Kegiatan pada umumnya diarahkan oleh kebijakan operasional pada sejumlah bidang seperti organisasi, keuangan, manajemen kredit, sumber daya manusia, risiko, penyelenggaraan, perencanaan, produk dan pelayanan; tidak dikaji dan diperbarui secara rutin'"
								@click3="form.p3.p3a1_cu_penilaian = 3" 
								:subtitle3="'Kegiatan diarahkan oleh sejumlah manual operasional yang komprehensif dan dikaji kembali ketika berbagai kebutuhan baru muncul dalam bidang: organisasi, keuangan, manajemen kredit, sumber daya manusia, manajemen risiko, penyelenggaraan, perencanaan, produk dan pelayanan'"
								@click4="form.p3.p3a1_cu_penilaian = 4" 
								:subtitle4="'Kegiatan diarahkan oleh sejumlah manual operasional yang komprehensif yang dikaji dan diperbarui sekali setahun pada bidang: organisasi, keuangan, manajemen kredit, sumber daya manusia, risiko, penyelenggaraan, perencanaan, produk dan pelayanan'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a1_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a1_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3a1_bkcu_penilaian" 
										@click1="form.p3.p3a1_bkcu_penilaian = 1"
										@click2="form.p3.p3a1_bkcu_penilaian = 2" 
										@click3="form.p3.p3a1_bkcu_penilaian = 3" 
										@click4="form.p3.p3a1_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a1_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a1_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a1_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3a1_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- a2 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3a2_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p3.p3a1_cu_penilaian != '' && form.p3.p3a1_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						2. Manual Prosedur</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3a2_cu_penilaian" 
								@click1="form.p3.p3a2_cu_penilaian = 1"
								:subtitle1="'Manajemen tidak diarahkan oleh manual prosedur sebagai standar pelaksanaan harian'"
								@click2="form.p3.p3a2_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Prosedur tertulis seadanya saja pada pada beberapa bidang seperti organisasi, keuangan, manajemen kredit, SDM, penyeleng-garaan, perencanaan, sehubungan dengan produk dan pelayanan</li><li>Prosedur tertulis tidak dikaji dan diperbaharui setiap tahun</li></ul>'"
								@click3="form.p3.p3a2_cu_penilaian = 3" 
								:subtitle3="'Manajemen diarahkan oleh sejumlah manual operasional yang komprehensif yang dikaji kembali <u>bilamana perlu</u> pada bidang: organisasi, keuangan, manajemen kredit, sumber daya manusia, risiko, penyelenggaraan, perencanaan, produk dan pelayanan.'"
								@click4="form.p3.p3a2_cu_penilaian = 4" 
								:subtitle4="'Manajemen diarahkan oleh sejumlah manual operasional yang komprehensif yang dikaji dan <u>diperbarui sekali setahun</u> pada bidang: organisasi, keuangan, manajemen kredit, sumber daya manusia, risiko, penyelenggaraan, perencanaan, produk dan pelayanan.'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a2_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a2_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3a2_bkcu_penilaian" 
										@click1="form.p3.p3a2_bkcu_penilaian = 1"
										@click2="form.p3.p3a2_bkcu_penilaian = 2" 
										@click3="form.p3.p3a2_bkcu_penilaian = 3" 
										@click4="form.p3.p3a2_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a2_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a2_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a2_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3a2_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- a3 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3a3_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p3.p3a2_cu_penilaian != '' && form.p3.p3a2_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						3. Produktivitas Staf</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3a3_cu_penilaian" 
								@click1="form.p3.p3a3_cu_penilaian = 1"
								:subtitle1="'Rasio antara anggota dan staf di bawah 200'"
								@click2="form.p3.p3a3_cu_penilaian = 2" 
								:subtitle2="'Rasio antara anggota dan staf = 200– 349'"
								@click3="form.p3.p3a3_cu_penilaian = 3" 
								:subtitle3="'Rasio antara anggota dan staf = 350 - 500'"
								@click4="form.p3.p3a3_cu_penilaian = 4" 
								:subtitle4="'Rasio antara anggota dan staf lebih dari 500'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a3_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a3_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3a3_bkcu_penilaian" 
										@click1="form.p3.p3a3_bkcu_penilaian = 1"
										@click2="form.p3.p3a3_bkcu_penilaian = 2" 
										@click3="form.p3.p3a3_bkcu_penilaian = 3" 
										@click4="form.p3.p3a3_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a3_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a3_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a3_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3a3_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- a4 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3a4_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p3.p3a3_cu_penilaian != '' && form.p3.p3a3_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						4. Manajemen Kekeliruan (Error Management)</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3a4_cu_penilaian" 
								@click1="form.p3.p3a4_cu_penilaian = 1"
								:subtitle1="'Tidak ada sistem yang diberlakukan'"
								@click2="form.p3.p3a4_cu_penilaian = 2" 
								:subtitle2="'Kesalahan yang diulangi secara tidak menentu'"
								@click3="form.p3.p3a4_cu_penilaian = 3" 
								:subtitle3="'Ada sistem yang ditetapkan dan diberlakukan'"
								@click4="form.p3.p3a4_cu_penilaian = 4" 
								:subtitle4="'Sistem ditetapkan dan diberlakukan; ada evaluasi rutin dan kajian terhadap sistem'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a4_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a4_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3a4_bkcu_penilaian" 
										@click1="form.p3.p3a4_bkcu_penilaian = 1"
										@click2="form.p3.p3a4_bkcu_penilaian = 2" 
										@click3="form.p3.p3a4_bkcu_penilaian = 3" 
										@click4="form.p3.p3a4_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a4_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a4_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a4_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3a4_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- a5 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3a5_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p3.p3a4_cu_penilaian != '' && form.p3.p3a4_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						5. Service delivery kepada anggota - Pinjaman</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3a5_cu_penilaian" 
								@click1="form.p3.p3a5_cu_penilaian = 1"
								:subtitle1="'Tidak sesuai dengan penilaian pinjaman dan proses persetujuan'"
								@click2="form.p3.p3a5_cu_penilaian = 2" 
								:subtitle2="'Penerapan kebijakan pinjaman tidak konsisten dan terjadi proses penundaan'"
								@click3="form.p3.p3a5_cu_penilaian = 3" 
								:subtitle3="'Pelaksanaan kebijakan pinjaman dilakukan secara konsisten dan menunjukkan pengalihan pinjaman secara efisien.'"
								@click4="form.p3.p3a5_cu_penilaian = 4" 
								:subtitle4="'Pelaksanaan kebijakan pinjaman dilakukan secara konsisten dan menunjukkan pengalihan pinjaman secara efisien dan secara teratur selalu dikaji.'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a5_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a5_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3a5_bkcu_penilaian" 
										@click1="form.p3.p3a5_bkcu_penilaian = 1"
										@click2="form.p3.p3a5_bkcu_penilaian = 2" 
										@click3="form.p3.p3a5_bkcu_penilaian = 3" 
										@click4="form.p3.p3a5_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a5_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a5_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a5_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3a5_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- a6 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3a6_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p3.p3a5_cu_penilaian != '' && form.p3.p3a5_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						6. Service delivery kepada anggota - Simpanan</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3a6_cu_penilaian" 
								@click1="form.p3.p3a6_cu_penilaian = 1"
								:subtitle1="'Tidak dilaksanakan financial counseling'"
								@click2="form.p3.p3a6_cu_penilaian = 2" 
								:subtitle2="'Financial counseling dilaksanakan tetapi tidak dilembagakan'"
								@click3="form.p3.p3a6_cu_penilaian = 3" 
								:subtitle3="'Ada Staf khusus yang ditugaskan  dan bertanggung jawab memberikan financial counseling bagi anggota'"
								@click4="form.p3.p3a6_cu_penilaian = 4" 
								:subtitle4="'Lebih dari 1 staf terlatih dan tersedia untuk financial counseling bagi anggota'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a6_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a6_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3a6_bkcu_penilaian" 
										@click1="form.p3.p3a6_bkcu_penilaian = 1"
										@click2="form.p3.p3a6_bkcu_penilaian = 2" 
										@click3="form.p3.p3a6_bkcu_penilaian = 3" 
										@click4="form.p3.p3a6_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a6_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a6_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a6_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3a6_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- a7 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3a7_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p3.p3a6_cu_penilaian != '' && form.p3.p3a6_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						7. Service delivery kepada anggota – Penarikan Simpanan</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3a7_cu_penilaian" 
								@click1="form.p3.p3a7_cu_penilaian = 1"
								:subtitle1="'Prosedur penanganan uang tunai tidak fleksibel dan konservatif sehingga tidak terpenuhi kebutuhan anggota dalam menarik dananya'"
								@click2="form.p3.p3a7_cu_penilaian = 2" 
								:subtitle2="'Prosedur penanganan uang tunai fleksibel dan terpenuhi kebutuhan anggota tetapi memberi risiko pada credit union'"
								@click3="form.p3.p3a7_cu_penilaian = 3" 
								:subtitle3="'Faktor-faktor lingkungan, fisik, likuiditas dan risiko dikelola untuk memudahkan permintaan penarikan tunai melalui meja kasir'"
								@click4="form.p3.p3a7_cu_penilaian = 4" 
								:subtitle4="'Terpenuhi kebutuhan anggota untuk menarik uang tunai tepat pada waktunya dan tanpa halangan'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a7_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a7_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3a7_bkcu_penilaian" 
										@click1="form.p3.p3a7_bkcu_penilaian = 1"
										@click2="form.p3.p3a7_bkcu_penilaian = 2" 
										@click3="form.p3.p3a7_bkcu_penilaian = 3" 
										@click4="form.p3.p3a7_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a7_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a7_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a7_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3a7_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- a8 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3a8_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p3.p3a7_cu_penilaian != '' && form.p3.p3a7_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						8. Penggunaan Mesin dan Peralatan Kantor</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3a8_cu_penilaian" 
								@click1="form.p3.p3a8_cu_penilaian = 1"
								:subtitle1="'Staf tidak mampu memakai peralatan terbatas yang tersedia untuk mereka'"
								@click2="form.p3.p3a8_cu_penilaian = 2" 
								:subtitle2="'Kapasitas staf terbatas untuk memakai peralatan yang tersedia untuk mereka'"
								@click3="form.p3.p3a8_cu_penilaian = 3" 
								:subtitle3="'Staf mampu memakai peralatan yang tersedia untuk mereka secara penuh'"
								@click4="form.p3.p3a8_cu_penilaian = 4" 
								:subtitle4="'Staf mampu memakai berbagai peralatan yang tersedia secara penuh dan terampil menjalankan program'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a8_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a8_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3a8_bkcu_penilaian" 
										@click1="form.p3.p3a8_bkcu_penilaian = 1"
										@click2="form.p3.p3a8_bkcu_penilaian = 2" 
										@click3="form.p3.p3a8_bkcu_penilaian = 3" 
										@click4="form.p3.p3a8_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a8_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a8_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a8_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3a8_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- a9 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3a9_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p3.p3a8_cu_penilaian != '' && form.p3.p3a8_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						9. Efisiensi Komunikasi Internal</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3a9_cu_penilaian" 
								@click1="form.p3.p3a9_cu_penilaian = 1"
								:subtitle1="'Tidak ada kebijakan dan prosedur tertulis untuk membangun komunikasi dengan para pemangku kepentingan'"
								@click2="form.p3.p3a9_cu_penilaian = 2" 
								:subtitle2="'Kebijakan dan prosedur terbatas ditetapkan untuk membangun komunikasi dengan para pemangku kepentingan:<ul><li>Laporan tahunan dikirim kepada anggota sebelum RAT</li></ul>'"
								@click3="form.p3.p3a9_cu_penilaian = 3" 
								:subtitle3="'Bukti mengenai adanya kebijakan dan prosedur untuk mengadakan paket komunikasi yang komprehensif bagi anggota termasuk:<ul><li>berita berkala secara rutin bagi anggota</li><li>panduan bagi pengguna telepon yang efektif termasuk waktu menanggapi</li><li>panduan untuk menanggapi surat dan email </li><li>pelatihan bagi staf yang berada di garis depan</li><li>komunikasi staf secara rutin misalnya dalam pertemuan dan rapat staf</li></ul>'"
								@click4="form.p3.p3a9_cu_penilaian = 4" 
								:subtitle4="'Bukti lengkap mengenai adanya kebijakan dan prosedur untuk menyediakan praktik terbaik menyangkut paket komunikasi bagi anggota termasuk: <ul><li>berita berkala secara rutin bagi anggota</li><li>panduan bagi pengguna telepon yang efektif termasuk waktu menanggapi</li><li>panduan untuk menanggapi surat dan email </li><li>pelatihan bagi staf yang berada di garis depan</li><li>komunikasi staf secara rutin misalnya dalam pertemuan dan rapat staf</li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a9_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a9_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3a9_bkcu_penilaian" 
										@click1="form.p3.p3a9_bkcu_penilaian = 1"
										@click2="form.p3.p3a9_bkcu_penilaian = 2" 
										@click3="form.p3.p3a9_bkcu_penilaian = 3" 
										@click4="form.p3.p3a9_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a9_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3a9_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a9_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3a9_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- B section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua'">
			<div class="card card-body bg-warning text-white" v-if="form.p3.p3a9_cu_penilaian != '' && form.p3.p3a9_cu_keterangan != ''">
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">B. POSISI BERSAING</h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>
								Skor CU: {{ skorCUB }} / 
								Bobot Skor CU: {{ bobotCUB }} 
								</li>
							<li>
								Skor BKCU: {{ skorBKCUB }} / 
								Bobot Skor BKCU: {{ bobotBKCUB }} 
							</li>
						</ul>	
					</div>
				</div>	
			</div>
		</div>
		</transition>

		<!-- b10 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3b10_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p3.p3a9_cu_penilaian != '' && form.p3.p3a9_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						10. Kematangan Visi</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3b10_cu_penilaian" 
								@click1="form.p3.p3b10_cu_penilaian = 1"
								:subtitle1="'Pengurus dan staf tidak memiliki  visi untuk masa depan credit union'"
								@click2="form.p3.p3b10_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Pemahaman yang terbatas mengenai visi credit union oleh pengurus dan staf</li><li>Ada visi tertulis tetapi jarang diterapkan dalam tindakan</li></ul>'"
								@click3="form.p3.p3b10_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Pemahaman yang jelas dan terinci mengenai masa depan credit union yang diinginkan</li><li>Ada visi tertulis yang diterapkan dalam tindakan</li></ul>'"
								@click4="form.p3.p3b10_cu_penilaian = 4" 
								:subtitle4="'<ul><li>• Pemahaman terhadap visi credit union sangat jelas, rinci dan yakin</li><li>Ada visi tertulis yang diterapkan dalam tindakan secara konsiten</li><li>Komitmen selalu ditunjukkan oleh Pengurus dan staf untuk mencapai visi.</li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b10_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b10_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3b10_bkcu_penilaian" 
										@click1="form.p3.p3b10_bkcu_penilaian = 1"
										@click2="form.p3.p3b10_bkcu_penilaian = 2" 
										@click3="form.p3.p3b10_bkcu_penilaian = 3" 
										@click4="form.p3.p3b10_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b10_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b10_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b10_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3b10_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b11 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3b11_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p3.p3b10_cu_penilaian != '' && form.p3.p3b10_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						11. Keberanian Visi (Boldness  of Vission)</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3b11_cu_penilaian" 
								@click1="form.p3.p3b11_cu_penilaian = 1"
								:subtitle1="'Visi tidak dijabarkan secara jelas'"
								@click2="form.p3.p3b11_cu_penilaian = 2" 
								:subtitle2="'Visi tertulis menetapkan arah yang akan dicapai oleh credit union, tetapi tidak meyakinkan, menginspirasi dan tanggap terhadap tantangan pasar yang ada'"
								@click3="form.p3.p3b11_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Visi tertulis jelas, meyakinkan, dan menginspirasi orang-orang yang menjalankan CU</li><li>Visi menunjukkan arah yang akan dicapai CU</li><li>Visi merupakan respon terhadap tantangan pasar yang ada</li></ul>'"
								@click4="form.p3.p3b11_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Visi tertulis jelas, meyakinkan, dan menginspirasi </li><li>Visi dijalankan sesuai arah yang akan dicapai CU sehubung-an dengan kriteria kinerja, standar, nilai-nilai dasar kelembaga-an serta praktik terbaik-nya</li><li>Visi tanggap terhadap tantangan pasar yang ada.</li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b11_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b11_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3b11_bkcu_penilaian" 
										@click1="form.p3.p3b11_bkcu_penilaian = 1"
										@click2="form.p3.p3b11_bkcu_penilaian = 2" 
										@click3="form.p3.p3b11_bkcu_penilaian = 3" 
										@click4="form.p3.p3b11_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b11_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b11_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b11_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3b11_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b12 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3b12_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p3.p3b11_cu_penilaian != '' && form.p3.p3b11_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						12. Perumusan Misi Dengan Baik</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3b12_cu_penilaian" 
								@click1="form.p3.p3b12_cu_penilaian = 1"
								:subtitle1="'<ul><li>Tidak ada tujuan yang jelas dan terjabar baik mengenai keberadaan CU</li><li>Pernyataan misi tertulis tetapi tidak mengacu kepada visi;</li><li>Misi diketahui oleh beberapa orang saja dalam organisasi.</li></ul>'"
								@click2="form.p3.p3b12_cu_penilaian = 2" 
								:subtitle2="'Misi tertulis kurang jelas dan tidak mendefinisikan alasan mengenai keberadaan CU'"
								@click3="form.p3.p3b12_cu_penilaian = 3" 
								:subtitle3="'<ul><li>• Misi tertulis jelas dan menjabarkan alasan  mengenai keberadaan yang mencerminkan nilai-nilai serta tujuan CU</li><li>Misi diketahui oleh semua orang.</li><li>Secara konsisten dirujuk sebagai dasar pengembangan pelayanan bagi anggota</li></ul>'"
								@click4="form.p3.p3b12_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Misi tertulis jelas dan menjabarkan alasan  mengenai keberadaan yang mencerminkan nilai-nilai serta tujuan CU</li><li>Ada kejelasan, Mendorong dan menggambarkan kenyataan </li><li>Misi diketahui oleh semua orang.</li><li>Secara konsisten dirujuk sebagai dasar pengembangan pelayanan bagi anggota</li><li>Dikomunikasikan dalam kegiatan promosi dan pemasaran</li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b12_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b12_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3b12_bkcu_penilaian" 
										@click1="form.p3.p3b12_bkcu_penilaian = 1"
										@click2="form.p3.p3b12_bkcu_penilaian = 2" 
										@click3="form.p3.p3b12_bkcu_penilaian = 3" 
										@click4="form.p3.p3b12_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b12_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b12_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b12_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3b12_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b13 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3b13_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p3.p3b12_cu_penilaian != '' && form.p3.p3b12_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						13. Nilai-nilai inti</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3b13_cu_penilaian" 
								@click1="form.p3.p3b13_cu_penilaian = 1"
								:subtitle1="'Tidak tertulis dan tidak jelas'"
								@click2="form.p3.p3b13_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Nilai-nilai inti tertulis tetapi kurang dirujuk</li><li>Diketahui oleh sedikit orang.</li><li>Menjawab sejumlah pertanyaan: Nilai mana yang berharga bagi kita? Apa yang kita perjuangkan? Bagaimana kita memperlakukan satu sama lain dan bekerjasama? Bagaimana kita memperlakukan para anggota? Bagaimana kita menilai diri sendiri? Apa saja karakteristik budaya kita serta gaya kepemimpinan kita?</li></ul>'"
								@click3="form.p3.p3b13_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Nilai-nilai inti tertulis, jelas, dan mendorong, dijabarkan secara baik dan seringkali menjadi rujukan</li><li>Diketahui oleh banyak orang.</li><li>Berfungsi selaku dasar yang memberi arah dan dukungan bagi orang-orang yang bekerja</li><li>Nilai-nilai inti merupakan nilai-nilai dalam diri yang menentukan posisi orang-orang dalam CU. Hal ini menjawab sejumlah pertanyaan: Nilai mana yang berharga bagi kita? Apa yang kita perjuangkan? Bagaimana kita memperlakukan satu sama lain dan bekerjasama? Bagaimana kita memperlakukan para anggota? Bagaimana kita menilai diri sendiri? Apa saja karakteristik budaya kita serta gaya kepemimpinan kita?</li></ul>'"
								@click4="form.p3.p3b13_cu_penilaian = 4" 
								:subtitle4="'<ul><li>• Nilai-nilai inti tertulis, jelas, dan mendorong, dijabarkan secara baik dan selalu menjadi rujukan</li><li>Diketahui oleh banyak orang.</li><li>Berfungsi selaku dasar yang memberi arah dan dukungan bagi orang-orang yang bekerja</li><li>Nilai-nilai inti merupakan nilai-nilai dalam diri yang menentukan posisi orang-orang dalam CU. Hal ini menjawab sejumlah pertanyaan: Nilai mana yang berharga bagi kita? Apa yang kita perjuangkan? Bagaimana kita memperlakukan satu sama lain dan bekerjasama? Bagaimana kita memperlakukan para anggota? Bagaimana kita menilai diri sendiri? Apa saja karakteristik budaya kita serta gaya kepemimpinan kita?</li><li>Nilai-nilai tercermin dalam pengembangan produk dan pelayanan.</li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b13_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b13_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3b13_bkcu_penilaian" 
										@click1="form.p3.p3b13_bkcu_penilaian = 1"
										@click2="form.p3.p3b13_bkcu_penilaian = 2" 
										@click3="form.p3.p3b13_bkcu_penilaian = 3" 
										@click4="form.p3.p3b13_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b13_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b13_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b13_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3b13_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b14 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3b14_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p3.p3b13_cu_penilaian != '' && form.p3.p3b13_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						14. Keluasan Sasaran</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3b14_cu_penilaian" 
								@click1="form.p3.p3b14_cu_penilaian = 1"
								:subtitle1="'CU tidak memiliki sasaran yang konkrit'"
								@click2="form.p3.p3b14_cu_penilaian = 2" 
								:subtitle2="'Sasaran yang masih terbatas, namun sasaran tersebut kurang tegasdan lemah dalam elemen SMART (Stretching = spesifik; Measurable = terukur; Attainable= dapat dicapai; Related to Member= berhubungan dengan anggota; Time bound= batasan waktu)'"
								@click3="form.p3.p3b14_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Visi diterjemahkan ke dalam tujuan aksi</li><li>Visi memiliki semua unsur SMART</li><li>Diketahui oleh banyak orang</li><li>Dipantau dan dikaji secara konsisten </li></ul>'"
								@click4="form.p3.p3b14_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Visi diterjemahkan ke dalam tujuan aksi</li><li>Memiliki semua unsur SMART</li><li>Dikenal luas</li><li>Monitoring tertutup dan ditinjau dengan seperangkat indikator</li><li>Inovasi produk dan pelayanan mencerminkan tujuan.</li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b14_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b14_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3b14_bkcu_penilaian" 
										@click1="form.p3.p3b14_bkcu_penilaian = 1"
										@click2="form.p3.p3b14_bkcu_penilaian = 2" 
										@click3="form.p3.p3b14_bkcu_penilaian = 3" 
										@click4="form.p3.p3b14_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b14_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b14_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b14_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3b14_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b15 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3b15_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p3.p3b14_cu_penilaian != '' && form.p3.p3b14_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						15. Tujuan Strategis</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3b15_cu_penilaian" 
								@click1="form.p3.p3b15_cu_penilaian = 1"
								:subtitle1="'<ul><li>Strategi tidak ada; tidak jelas, tidak teratur, dan dilebih-lebihkan</li><li>Strategi tidak konsisten dengan visi dan tujuan umum</li></ul>'"
								@click2="form.p3.p3b15_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Ada strategi tapi tidak jelas kaitannya dengan visi, misi dan tujuan umum; atau kurang terkait</li><li>Tidak mudah diberlakukan; dijalankan secara rutin</li><li>Tidak inovatif</li><li>Tidak diketahui secara luas dan memiliki pengaruh yang terbatas dalam perilaku dari hari ke hari</li></ul>'"
								@click3="form.p3.p3b15_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Ada strategi, jelas terkait dengan visi, misi dan tujuan umum</li><li>Koheren</li><li>Mudah diberlakukan</li><li>Tidak rutin, inovatif</li><li>Banyak diketahui dan mendorong perilaku keseharian.</li></ul>'"
								@click4="form.p3.p3b15_cu_penilaian = 4" 
								:subtitle4="'<ul><li>• Memiliki strategi jangka menengah hingga jangka panjang yang jelas, </li><li>Koheren yang terkait dengan visi, misi dan tujuan umum</li><li>Mudah diberlakukan</li><li>Tidak rutin, inovatif</li><li>Diketahui secara luas dan berpengaruh terhadap perilaku keseharian</li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b15_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b15_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3b15_bkcu_penilaian" 
										@click1="form.p3.p3b15_bkcu_penilaian = 1"
										@click2="form.p3.p3b15_bkcu_penilaian = 2" 
										@click3="form.p3.p3b15_bkcu_penilaian = 3" 
										@click4="form.p3.p3b15_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b15_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b15_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b15_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3b15_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b16 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3b16_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p3.p3b15_cu_penilaian != '' && form.p3.p3b15_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						16. Rencana Bisnis Tahunan</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3b16_cu_penilaian" 
								@click1="form.p3.p3b16_cu_penilaian = 1"
								:subtitle1="'CU tidak memiliki rencana bisnis tahunan'"
								@click2="form.p3.p3b16_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Rencana bisnis tahunan ada tetapi tidak jelas</li><li>Tidak berkaitan dengan visi, misi, tujuan umum dan strategis</li><li>Dapat berubah dari tahun ke tahun</li><li>Sasaran-sasaran diabaikan atau tidak diketahui oleh staf; kurangnya patokan</li><li>Kebanyakan berfokus pada input dan bukan pada penilaian output</li></ul>'"
								@click3="form.p3.p3b16_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Rencana bisnis tahunan berkaitan dengan visi, misi, tujuan umum dan </li><li>Ada visi tertulis yang diterapkan dalam tindakan strategis</li><li>Sasaran-sasaran multi tahun termasuk patokan</li><li>Sasaran-sasaran diketahui oleh semua staf dan menggunakan nya sebagai panduan kerja</li></ul>'"
								@click4="form.p3.p3b16_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Dalam rencana bisnis tahunan terdapat sejumlah target kinerja yang terukur dan menuntut kesungguhan di semua bidang, sangat berkaitan dengan visi, misi, tujuan umum dan strategis</li><li>Berfokus pada input dan output</li><li>Sasaran-sasaran multi tahun</li><li>Sasaran-sasaran di ketahui dan diadopsi secara konsisten oleh semua staf dengan rajin</li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b16_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b16_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3b16_bkcu_penilaian" 
										@click1="form.p3.p3b16_bkcu_penilaian = 1"
										@click2="form.p3.p3b16_bkcu_penilaian = 2" 
										@click3="form.p3.p3b16_bkcu_penilaian = 3" 
										@click4="form.p3.p3b16_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b16_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b16_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b16_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3b16_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b17 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3b17_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p3.p3b16_cu_penilaian != '' && form.p3.p3b16_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						17. Budaya Jual (Sales Culture)</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3b17_cu_penilaian" 
								@click1="form.p3.p3b17_cu_penilaian = 1"
								:subtitle1="'CU tidak memiliki keterampilan dan keahlian mengenai humas/pemasaran'"
								@click2="form.p3.p3b17_cu_penilaian = 2" 
								:subtitle2="'<ul><li>CU mengambil peluang terbatas untuk terlibat dalam kegiatan humas/pemasaran yang kian berkembang</li><li>Sejumlah keterampilan dan pengalaman humas/pemasaran pada staf atau melalui dukungan eksternal</li></ul>'"
								@click3="form.p3.p3b17_cu_penilaian = 3" 
								:subtitle3="'<ul><li>CU mempertimbang-kan humas/pemasaran sebagai sarana penting dan aktif mencari peluang, melibatkan diri dalam kegiatan tersebut</li><li>Banyak pengalaman dan keahlian internal menyangkut humas/ pemasaran atau akses terhadap dukungan eksternal yang terkait.</li></ul>'"
								@click4="form.p3.p3b17_cu_penilaian = 4" 
								:subtitle4="'<ul><li>CU sepenuhnya sadar akan kekuatan humas/pemasaran dan terus menerus melibat-kan diri</li><li>Banyak pengalaman humas/pemasaran dalam CU atau pemanfaatan sumber daya bermutu dari luar yang dapat digunakan secara efektif, berjangka panjang dan berkesinambungan.</li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b17_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b17_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3b17_bkcu_penilaian" 
										@click1="form.p3.p3b17_bkcu_penilaian = 1"
										@click2="form.p3.p3b17_bkcu_penilaian = 2" 
										@click3="form.p3.p3b17_bkcu_penilaian = 3" 
										@click4="form.p3.p3b17_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b17_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b17_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b17_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3b17_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b18 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3b18_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p3.p3b17_cu_penilaian != '' && form.p3.p3b17_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						18. Keterlibatan Masyarakat Lokal</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3b18_cu_penilaian" 
								@click1="form.p3.p3b18_cu_penilaian = 1"
								:subtitle1="'<ul><li>Keberadaan CU tidak dikenal atau secara umum tidak dilihat secara positif</li><li>Hanya sedikit anggota masyarakat setempat yang mendapat manfaat dari keterlibatannya</li></ul>'"
								@click2="form.p3.p3b18_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Keberadaan CU cukup dikenal atau umumnya diterima secara positif</li><li>Beberapa anggota masyarakat setempat mendapat manfaat dari keterlibatannya</li></ul>'"
								@click3="form.p3.p3b18_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Keberadaan CU cukup dikenal dalam masya-rakat dan dilihat seba-gai lembaga yang terbuka dan tanggap terhadap kebutuhan masyarakat; dengan melakukan setidaknya 2 program kemasyarakatan setiap tahunnya</li><li>Lebih banyak anggota masyarakat; termasuk tokoh masyarakat terlibat secara konstruktif</li></ul>'"
								@click4="form.p3.p3b18_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Keberadaan CU dikenal secara luas dalam masyarakat dan dilihat sebagai lembaga yang aktif terlibat dan sangat tanggap, dengan lebih dari 2 program kemasyarakatan per tahun</li><li>Banyak anggota masyarakat yang terlibat secara aktif dan konstruktif</li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b18_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b18_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3b18_bkcu_penilaian" 
										@click1="form.p3.p3b18_bkcu_penilaian = 1"
										@click2="form.p3.p3b18_bkcu_penilaian = 2" 
										@click3="form.p3.p3b18_bkcu_penilaian = 3" 
										@click4="form.p3.p3b18_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b18_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b18_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b18_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3b18_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b19 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3b19_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p3.p3b18_cu_penilaian != '' && form.p3.p3b18_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						19. Kemitraan dan Aliansi</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3b19_cu_penilaian" 
								@click1="form.p3.p3b19_cu_penilaian = 1"
								:subtitle1="'CU tidak memiliki kemitraan dan aliansi'"
								@click2="form.p3.p3b19_cu_penilaian = 2" 
								:subtitle2="'Tahap awal membangun hubungan dan bekerjasama dengan lembaga-lembaga lain di sektor publik (for-profit, non-profit)'"
								@click3="form.p3.p3b19_cu_penilaian = 3" 
								:subtitle3="'Dibangun secara efektif dan mempengaruhi hubungan-hubungan utama dengan sektor publik (for-profit, non-profit); hubungan stabil dan mendapat manfaat bagi CU'"
								@click4="form.p3.p3b19_cu_penilaian = 4" 
								:subtitle4="'Dibangun, berpengaruh dan mempertahankan hubungan-hubungan yang kuat dan berdampak kuat terhadap sektor publik (for-profit, non-profit); hubungan stabil, berjangka panjang dan berkolaborasi dan saling menguntungkan'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b19_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b19_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3b19_bkcu_penilaian" 
										@click1="form.p3.p3b19_bkcu_penilaian = 1"
										@click2="form.p3.p3b19_bkcu_penilaian = 2" 
										@click3="form.p3.p3b19_bkcu_penilaian = 3" 
										@click4="form.p3.p3b19_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b19_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b19_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b19_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3b19_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b20 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3b20_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p3.p3b19_cu_penilaian != '' && form.p3.p3b19_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						20. Hubungan dengan Federasi (BKCU)</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3b20_cu_penilaian" 
								@click1="form.p3.p3b20_cu_penilaian = 1"
								:subtitle1="'Bukan anggota atau anggota pasif; tidak ikut dalam pertemuan; tidak secara tetap menerima layanan dari federasi (BKCU)'"
								@click2="form.p3.p3b20_cu_penilaian = 2" 
								:subtitle2="'Anggota federasi (BKCU) tetapi jarang terlibat; jarang mengikuti pertemuan dan berlangganan layanan; tidak diberitahukan tentang simpanan, saham dan pinjaman yang diminta untuk dibayarkan kembali'"
								@click3="form.p3.p3b20_cu_penilaian = 3" 
								:subtitle3="'Anggota federasi (BKCU); aktif terlibat dalam pertemuan; berlangganan layanan federasi; selalu diberitahukan tentang simpanan, saham dan pinjaman yang diminta untuk dibayarkan kembali, mengikuti standar yang dipromosikan secara nasional, misal satu logo, visi, standar-standar, kebijakan, produk, dll'"
								@click4="form.p3.p3b20_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Anggota federasi (BKCU)</li><li>Aktif menghadiri dan memberi kontribusi dalam pertemuan</li><li>Secara konsisten berlangganan dan mempromosikan layanan federasi</li><li>Secara konsisten mengikuti standar yang dipromosikan oleh federasi nasional</li><li>Selalu diberitahukan menyangkut simpanan, saham dan pinjaman</li><li>Secara konsisten mendukung dan memberi kontribusi terhadap penyelenggaraan federasi nasional.</li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b20_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b20_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3b20_bkcu_penilaian" 
										@click1="form.p3.p3b20_bkcu_penilaian = 1"
										@click2="form.p3.p3b20_bkcu_penilaian = 2" 
										@click3="form.p3.p3b20_bkcu_penilaian = 3" 
										@click4="form.p3.p3b20_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b20_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b20_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b20_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3b20_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b21 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3b21_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p3.p3b20_cu_penilaian != '' && form.p3.p3b20_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						21. Anggota Masyarakat Pengguna Layanan Credit Union</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3b21_cu_penilaian" 
								@click1="form.p3.p3b21_cu_penilaian = 1"
								:subtitle1="'Kurang dari 10% populasi di daerah kerja adalah anggota CU'"
								@click2="form.p3.p3b21_cu_penilaian = 2" 
								:subtitle2="'10 - 19% populasi di daerah kerja adalah anggota CU'"
								@click3="form.p3.p3b21_cu_penilaian = 3" 
								:subtitle3="'20 - 30% populasi di daerah kerja adalah anggota CU'"
								@click4="form.p3.p3b21_cu_penilaian = 4" 
								:subtitle4="'Lebih dari 30% populasi di daerah kerja adalah anggota CU'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b21_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b21_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3b21_bkcu_penilaian" 
										@click1="form.p3.p3b21_bkcu_penilaian = 1"
										@click2="form.p3.p3b21_bkcu_penilaian = 2" 
										@click3="form.p3.p3b21_bkcu_penilaian = 3" 
										@click4="form.p3.p3b21_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b21_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b21_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b21_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3b21_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b22 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3b22_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p3.p3b21_cu_penilaian != '' && form.p3.p3b21_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						22. Segmentasi Anggota menurut umur</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3b22_cu_penilaian" 
								@click1="form.p3.p3b22_cu_penilaian = 1"
								:subtitle1="'Dikonsentrasikan kepada 3 segmen umur sbb:<ul><li>1 – 10</li><li>11 – 18</li><li>19 – 25</li><li>26 – 45</li><li>46 -  60</li><li>Lebih dari 60 tahun</li></ul>'"
								@click2="form.p3.p3b22_cu_penilaian = 2" 
								:subtitle2="'Dikonsentrasikan kepada 4 segmen umur sbb:<ul><li>1 – 10</li><li>11 – 18</li><li>19 – 25</li><li>26 – 45</li><li>46 -  60</li><li>Lebih dari 60 tahun</li></ul>'"
								@click3="form.p3.p3b22_cu_penilaian = 3" 
								:subtitle3="'Tersebar pada semua segmen umur sbb:<ul><li>1 – 10</li><li>11 – 18</li><li>19 – 25</li><li>26 – 45</li><li>46 -  60</li><li>Lebih dari 60 tahun</li></ul>'"
								@click4="form.p3.p3b22_cu_penilaian = 4" 
								:subtitle4="'Tersebar pada semua segmen umur sbb., tetapi dengan konsentrasi terbesar pada umur 26-45 tahun yaitu kelompok yang paling produktif<ul><li>1 – 10</li><li>11 – 18</li><li>19 – 25</li><li>26 – 45</li><li>46 -  60</li><li>Lebih dari 60 tahun</li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b22_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b22_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3b22_bkcu_penilaian" 
										@click1="form.p3.p3b22_bkcu_penilaian = 1"
										@click2="form.p3.p3b22_bkcu_penilaian = 2" 
										@click3="form.p3.p3b22_bkcu_penilaian = 3" 
										@click4="form.p3.p3b22_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b22_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b22_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b22_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3b22_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b23 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3b23_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p3.p3b22_cu_penilaian != '' && form.p3.p3b22_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						23. Keberagaman Keanggotaan</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3b23_cu_penilaian" 
								@click1="form.p3.p3b23_cu_penilaian = 1"
								:subtitle1="'Terkonsentrasi pada 3 segmen berikut :<ul><li>Profesional/Teknis</li><li>Eksekutif</li><li>Kelas menengah</li><li>Pedagang</li><li>Staf administrasi</li><li>Buruh</li><li>Pengusaha kecil</li><li>Pengangguran</li><li>Kelompok etnis</li></ul>'"
								@click2="form.p3.p3b23_cu_penilaian = 2" 
								:subtitle2="'Terkonsentrasi pada 4 segmen berikut :<ul><li>Profesional/Teknis</li><li>Eksekutif</li><li>Kelas menengah</li><li>Pedagang</li><li>Staf administrasi</li><li>Buruh</li><li>Pengusaha kecil</li><li>Pengangguran</li><li>Kelompok etnis</li></ul>'"
								@click3="form.p3.p3b23_cu_penilaian = 3" 
								:subtitle3="'Tersebar pada semua segmen berikut :<ul><li>Profesional/Teknis</li><li>Eksekutif</li><li>Kelas menengah</li><li>Pedagang</li><li>Staf administrasi</li><li>Buruh</li><li>Pengusaha kecil</li><li>Pengangguran</li><li>Kelompok etnis</li></ul>'"
								@click4="form.p3.p3b23_cu_penilaian = 4" 
								:subtitle4="'Tersebar pada semua segmen berikut tetapi konsentrasi terbesar pada 5-8 :<ul><li>Profesional/Teknis</li><li>Eksekutif</li><li>Kelas menengah</li><li>Pedagang</li><li>Staf administrasi</li><li>Buruh</li><li>Pengusaha kecil</li><li>Pengangguran</li><li>Kelompok etnis</li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b23_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b23_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3b23_bkcu_penilaian" 
										@click1="form.p3.p3b23_bkcu_penilaian = 1"
										@click2="form.p3.p3b23_bkcu_penilaian = 2" 
										@click3="form.p3.p3b23_bkcu_penilaian = 3" 
										@click4="form.p3.p3b23_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b23_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b23_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b23_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3b23_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b24 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3b24_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p3.p3b23_cu_penilaian != '' && form.p3.p3b23_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						24. Kesetaraan Gender</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3b24_cu_penilaian" 
								@click1="form.p3.p3b24_cu_penilaian = 1"
								:subtitle1="'Tidak setara; 70 : 30%'"
								@click2="form.p3.p3b24_cu_penilaian = 2" 
								:subtitle2="'60 : 40%'"
								@click3="form.p3.p3b24_cu_penilaian = 3" 
								:subtitle3="'Menekankan pada kesetaraan jender antara 40 : 60%'"
								@click4="form.p3.p3b24_cu_penilaian = 4" 
								:subtitle4="'Menekankan pada kesetaraan jender antara 50 : 50%'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b24_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b24_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3b24_bkcu_penilaian" 
										@click1="form.p3.p3b24_bkcu_penilaian = 1"
										@click2="form.p3.p3b24_bkcu_penilaian = 2" 
										@click3="form.p3.p3b24_bkcu_penilaian = 3" 
										@click4="form.p3.p3b24_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b24_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b24_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b24_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3b24_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b25 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3b25_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p3.p3b24_cu_penilaian != '' && form.p3.p3b24_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						25. Pemenuhan Aturan</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3b25_cu_penilaian" 
								@click1="form.p3.p3b25_cu_penilaian = 1"
								:subtitle1="'Gagal memenuhi peraturan minimal dengan pertimbangan mengenai persyaratan'"
								@click2="form.p3.p3b25_cu_penilaian = 2" 
								:subtitle2="'Pemenuhan pertimbangan persyaratan secara terbatas yang dilakukan oleh lembaga CU<ul></li></li>Pengumpulan pernyatan keuangan tahunan</li></li>Audit tahunan</li></ul>'"
								@click3="form.p3.p3b25_cu_penilaian = 3" 
								:subtitle3="'Mengikuti semua persyaratan yang ditentukan oleh lembaga secara tepat waktu'"
								@click4="form.p3.p3b25_cu_penilaian = 4" 
								:subtitle4="'Mengikuti semua persyaratan yang ditentukan oleh lembaga secara tepat waktu dan dipromosikan oleh pemberi peraturan sebagai CU model'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b25_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b25_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3b25_bkcu_penilaian" 
										@click1="form.p3.p3b25_bkcu_penilaian = 1"
										@click2="form.p3.p3b25_bkcu_penilaian = 2" 
										@click3="form.p3.p3b25_bkcu_penilaian = 3" 
										@click4="form.p3.p3b25_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b25_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b25_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b25_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3b25_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b26 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p3.p3b26_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p3.p3b25_cu_penilaian != '' && form.p3.p3b25_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						26. Kepatuhan Hukum</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p3.p3b26_cu_penilaian" 
								@click1="form.p3.p3b26_cu_penilaian = 1"
								:subtitle1="'Tidak mematuhi peraturan sesuai peraturan perundang-undangan'"
								@click2="form.p3.p3b26_cu_penilaian = 2" 
								:subtitle2="'Kepatuhan yang terbatas terhadap peraturan sesuai peraturan perundang-undangan yang berlaku'"
								@click3="form.p3.p3b26_cu_penilaian = 3" 
								:subtitle3="'Kepatuhan secara penuh terhadap peraturan sesuai peraturan perundang-undangan yang berlaku'"
								@click4="form.p3.p3b26_cu_penilaian = 4" 
								:subtitle4="'Kepatuhan secara penuh terhadap peraturan sesuai peraturan perundang-undangan yang berlaku dan dipromosikan oleh pemberi peraturan sebagai CU model'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b26_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b26_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian 
										:form="form.p3.p3b26_bkcu_penilaian" 
										@click1="form.p3.p3b26_bkcu_penilaian = 1"
										@click2="form.p3.p3b26_bkcu_penilaian = 2" 
										@click3="form.p3.p3b26_bkcu_penilaian = 3" 
										@click4="form.p3.p3b26_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b26_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p3.p3b26_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b26_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p3.p3b26_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>
		
		<div class="card bg-danger card-body" v-if="form.p3.p3b26_cu_penilaian == '' && form.p3.p3b26_cu_keterangan == ''">
			<h6 class="mb-0">Silahkan melengkapi indikator diatas untuk melanjutkan</h6>
		</div>
		
		<!-- next button -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua'">
			<div class="card card-body" v-if="form.p3.p3b26_cu_penilaian != '' && form.p3.p3b26_cu_keterangan != ''">
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
	import penilaian_cu from "./penilaian_cu.vue";
	import penilaian_bkcu from "./penilaian_bkcu.vue";
	import wajibBadge from "../../components/wajibBadge.vue";

	export default {
		props: ['form','mode','jumlahIndikator','bobotSkor'],
		components: {
			penilaian_cu,
			penilaian_bkcu,
			wajibBadge
		},
		data() {
			return {
				tabName: 'semua',
			}
		},
		created(){
		},
		watch: {
    },
		methods: {
			changeTab(value){
				if(this.$route.meta.mode == 'lihat'){
					this.tabName = value;
				}
			},
			next(){
				this.$emit('next');
			},
			skorCUA(){
				var jumlah = (
					this.form.p3.p3a1_cu_penilaian +
					this.form.p3.p3a2_cu_penilaian +
					this.form.p3.p3a3_cu_penilaian +
					this.form.p3.p3a4_cu_penilaian +
					this.form.p3.p3a5_cu_penilaian +
					this.form.p3.p3a6_cu_penilaian +
					this.form.p3.p3a7_cu_penilaian +
					this.form.p3.p3a8_cu_penilaian +
					this.form.p3.p3a9_cu_penilaian) / 1;
				this.$emit('skorCUA', jumlah);
				return jumlah;
			},
			bobotCUA(){
				var jumlah = this.$options.filters.round((((
					this.form.p3.p3a1_cu_penilaian +
					this.form.p3.p3a2_cu_penilaian +
					this.form.p3.p3a3_cu_penilaian +
					this.form.p3.p3a4_cu_penilaian +
					this.form.p3.p3a5_cu_penilaian +
					this.form.p3.p3a6_cu_penilaian +
					this.form.p3.p3a7_cu_penilaian +
					this.form.p3.p3a8_cu_penilaian +
					this.form.p3.p3a9_cu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotCUA', jumlah);
				return jumlah;
			},
			skorBKCUA(){
				var jumlah = (
					this.form.p3.p3a1_cu_penilaian +
					this.form.p3.p3a2_cu_penilaian +
					this.form.p3.p3a3_cu_penilaian +
					this.form.p3.p3a4_cu_penilaian +
					this.form.p3.p3a5_cu_penilaian +
					this.form.p3.p3a6_cu_penilaian +
					this.form.p3.p3a7_cu_penilaian +
					this.form.p3.p3a8_cu_penilaian +
					this.form.p3.p3a9_cu_penilaian) / 1;
				this.$emit('skorBKCUA', jumlah);
				return jumlah;
			},
			bobotBKCUA(){
				var jumlah = this.$options.filters.round((((
					this.form.p3.p3a1_cu_penilaian +
					this.form.p3.p3a2_cu_penilaian +
					this.form.p3.p3a3_cu_penilaian +
					this.form.p3.p3a4_cu_penilaian +
					this.form.p3.p3a5_cu_penilaian +
					this.form.p3.p3a6_cu_penilaian +
					this.form.p3.p3a7_cu_penilaian +
					this.form.p3.p3a8_cu_penilaian +
					this.form.p3.p3a9_cu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotBKCUA', jumlah);
				return jumlah;
			},
			skorCUB(){
				var jumlah = (
					this.form.p3.p3b10_cu_penilaian + 
					this.form.p3.p3b11_cu_penilaian + 
					this.form.p3.p3b12_cu_penilaian + 
					this.form.p3.p3b13_cu_penilaian + 
					this.form.p3.p3b14_cu_penilaian + 
					this.form.p3.p3b15_cu_penilaian + 
					this.form.p3.p3b16_cu_penilaian + 
					this.form.p3.p3b17_cu_penilaian + 
					this.form.p3.p3b18_cu_penilaian + 
					this.form.p3.p3b19_cu_penilaian + 
					this.form.p3.p3b20_cu_penilaian + 
					this.form.p3.p3b21_cu_penilaian + 
					this.form.p3.p3b22_cu_penilaian + 
					this.form.p3.p3b23_cu_penilaian + 
					this.form.p3.p3b24_cu_penilaian + 
					this.form.p3.p3b25_cu_penilaian + 
					this.form.p3.p3b26_cu_penilaian) / 1;
				this.$emit('skorCUB', jumlah);
				return jumlah;
			},
			bobotCUB(){
				var jumlah = this.$options.filters.round((((
					this.form.p3.p3b10_cu_penilaian + 
					this.form.p3.p3b11_cu_penilaian + 
					this.form.p3.p3b12_cu_penilaian + 
					this.form.p3.p3b13_cu_penilaian + 
					this.form.p3.p3b14_cu_penilaian + 
					this.form.p3.p3b15_cu_penilaian + 
					this.form.p3.p3b16_cu_penilaian + 
					this.form.p3.p3b17_cu_penilaian + 
					this.form.p3.p3b18_cu_penilaian + 
					this.form.p3.p3b19_cu_penilaian + 
					this.form.p3.p3b20_cu_penilaian + 
					this.form.p3.p3b21_cu_penilaian + 
					this.form.p3.p3b22_cu_penilaian + 
					this.form.p3.p3b23_cu_penilaian + 
					this.form.p3.p3b24_cu_penilaian + 
					this.form.p3.p3b25_cu_penilaian + 
					this.form.p3.p3b26_cu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotCUB', jumlah);
				return jumlah;
			},
			skorBKCUB(){
				var jumlah = (
					this.form.p3.p3b10_bkcu_penilaian + 
					this.form.p3.p3b11_bkcu_penilaian + 
					this.form.p3.p3b12_bkcu_penilaian + 
					this.form.p3.p3b13_bkcu_penilaian + 
					this.form.p3.p3b14_bkcu_penilaian + 
					this.form.p3.p3b15_bkcu_penilaian + 
					this.form.p3.p3b16_bkcu_penilaian + 
					this.form.p3.p3b17_bkcu_penilaian + 
					this.form.p3.p3b18_bkcu_penilaian + 
					this.form.p3.p3b19_bkcu_penilaian + 
					this.form.p3.p3b20_bkcu_penilaian + 
					this.form.p3.p3b21_bkcu_penilaian + 
					this.form.p3.p3b22_bkcu_penilaian + 
					this.form.p3.p3b23_bkcu_penilaian + 
					this.form.p3.p3b24_bkcu_penilaian + 
					this.form.p3.p3b25_bkcu_penilaian + 
					this.form.p3.p3b26_bkcu_penilaian) / 1;
				this.$emit('skorBKCUB', jumlah);
				return jumlah;
			},
			bobotBKCUB(){
				var jumlah = this.$options.filters.round((((
					this.form.p3.p3b10_bkcu_penilaian + 
					this.form.p3.p3b11_bkcu_penilaian + 
					this.form.p3.p3b12_bkcu_penilaian + 
					this.form.p3.p3b13_bkcu_penilaian + 
					this.form.p3.p3b14_bkcu_penilaian + 
					this.form.p3.p3b15_bkcu_penilaian + 
					this.form.p3.p3b16_bkcu_penilaian + 
					this.form.p3.p3b17_bkcu_penilaian + 
					this.form.p3.p3b18_bkcu_penilaian + 
					this.form.p3.p3b19_bkcu_penilaian + 
					this.form.p3.p3b20_bkcu_penilaian + 
					this.form.p3.p3b21_bkcu_penilaian + 
					this.form.p3.p3b22_bkcu_penilaian + 
					this.form.p3.p3b23_bkcu_penilaian + 
					this.form.p3.p3b24_bkcu_penilaian + 
					this.form.p3.p3b25_bkcu_penilaian + 
					this.form.p3.p3b26_bkcu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotBKCUB', jumlah);
				return jumlah;
			},
			jumlahPenilaianCU(nilai){
				var jumlah = 0;
				if(this.form.p3.p3a1_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3a2_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3a3_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3a4_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3a5_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3a6_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3a7_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3a8_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3a9_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b10_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b11_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b12_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b13_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b14_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b15_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b16_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b17_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b18_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b19_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b20_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b21_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b22_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b23_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b24_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b25_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b26_cu_penilaian == nilai){
					jumlah++;
				}

				return jumlah;
			},
			jumlahPenilaianBKCU(nilai){
				var jumlah = 0;
					if(this.form.p3.p3a1_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3a2_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3a3_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3a4_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3a5_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3a6_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3a7_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3a8_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3a9_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b10_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b11_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b12_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b13_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b14_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b15_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b16_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b17_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b18_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b19_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b20_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b21_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b22_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b23_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b24_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b25_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p3.p3b26_bkcu_penilaian == nilai){
					jumlah++;
				}

				return jumlah;
			},
		},
		computed: {
			
		}
	}
</script>
