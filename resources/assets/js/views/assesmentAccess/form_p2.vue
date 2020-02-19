<template>
	<div>

		<div class="card bg-danger card-body" v-if="form.p1.p1f14_cu_penilaian == '' && form.p1.p1f14_cu_keterangan == ''">
			<h6 class="mb-0">Maaf, anda tidak bisa melanjutkan mengisi perspektif ini sebelum melengkapi perspektif sebelumnya.</h6>
		</div>

		<div class="row" v-if="form.p1.p1f14_cu_penilaian != '' && form.p1.p1f14_cu_keterangan != ''">
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
			<div class="card card-body bg-info text-white" v-if="form.p1.p1f14_cu_penilaian != '' && form.p1.p1f14_cu_keterangan != ''"> 
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">A. PRODUK DAN PELAYANAN YANG BERKUALITAS</h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>
								Skor CU: {{ (
									form.p2.p2a1_cu_penilaian +
									form.p2.p2a2_cu_penilaian +
									form.p2.p2a3_cu_penilaian +
									form.p2.p2a4_cu_penilaian +
									form.p2.p2a5_cu_penilaian +
									form.p2.p2a6_cu_penilaian +
									form.p2.p2a7_cu_penilaian +
									form.p2.p2a8_cu_penilaian +
									form.p2.p2a9_cu_penilaian +
									form.p2.p2a10_cu_penilaian +
									form.p2.p2a11_cu_penilaian) / 1 }} / 
								
								Bobot Skor CU: {{ (((
									form.p2.p2a1_cu_penilaian +
									form.p2.p2a2_cu_penilaian +
									form.p2.p2a3_cu_penilaian +
									form.p2.p2a4_cu_penilaian +
									form.p2.p2a5_cu_penilaian +
									form.p2.p2a6_cu_penilaian +
									form.p2.p2a7_cu_penilaian +
									form.p2.p2a8_cu_penilaian +
									form.p2.p2a9_cu_penilaian +
									form.p2.p2a10_cu_penilaian +
									form.p2.p2a11_cu_penilaian)/jumlahIndikator) * bobotSkor) | round(2) }} 
							</li>
							<li>
								Skor BKCU: {{ (
									form.p2.p2a1_bkcu_penilaian +
									form.p2.p2a2_bkcu_penilaian +
									form.p2.p2a3_bkcu_penilaian +
									form.p2.p2a4_bkcu_penilaian +
									form.p2.p2a5_bkcu_penilaian +
									form.p2.p2a6_bkcu_penilaian +
									form.p2.p2a7_bkcu_penilaian +
									form.p2.p2a8_bkcu_penilaian +
									form.p2.p2a9_bkcu_penilaian +
									form.p2.p2a10_bkcu_penilaian +
									form.p2.p2a11_bkcu_penilaian) / 1 }} / 
								
								Bobot Skor BKCU: {{ (((
									form.p2.p2a1_bkcu_penilaian +
									form.p2.p2a2_bkcu_penilaian +
									form.p2.p2a3_bkcu_penilaian +
									form.p2.p2a4_bkcu_penilaian +
									form.p2.p2a5_bkcu_penilaian +
									form.p2.p2a6_bkcu_penilaian +
									form.p2.p2a7_bkcu_penilaian +
									form.p2.p2a8_bkcu_penilaian +
									form.p2.p2a9_bkcu_penilaian +
									form.p2.p2a10_bkcu_penilaian +
									form.p2.p2a11_bkcu_penilaian)/jumlahIndikator) * bobotSkor) | round(2) }} 
							</li>
						</ul>	
					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- a1 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p2.p2a1_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p1.p1f14_cu_penilaian != '' && form.p1.p1f14_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						1. Target Produk dan Pelayanan</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2a1_cu_penilaian" 
								@click1="form.p2.p2a1_cu_penilaian = 1"
								:subtitle1="'<ul><li>Tidak ada sarana untuk menerima umpan balik dari anggota</li> <li>Produk dan pelayanan tidak memenuhi semua kebutuhan anggota sebagaimana terukur dari anggota masyarakat yang menggunakan jasa pelayanan credit union (kurang dari 10%)</li></ul>'"
								@click2="form.p2.p2a1_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Ada survei  secara tidak teratur terhadap anggota</li><li>Produk dan pelayanan memenuhi sejumlah kebutuhan anggota sebagaimana terukur dari anggota masyarakat yang menggunakan jasa pelayanan credit union (10 - 19%)</li></ul>'"
								@click3="form.p2.p2a1_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Ada survei secara tahunan terhadap anggota</li><li>Produk dan pelayanan memenuhi semua kebutuhan anggota sebagaimana terukur dari anggota masyarakat yang menggunakan jasa pelayanan credit union (20 - 30%)</li></ul>'"
								@click4="form.p2.p2a1_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Ada survei tahunan dan mekanisme umpan balik tambahan</li><li>Produk dan pelayanan memenuhi semua kebutuhan anggota sebagaimana terukur dari anggota masyarakat yang menggunakan jasa pelayanan credit union (di atas 30%)</li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a1_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a1_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2a1_bkcu_penilaian" 
										@click1="form.p2.p2a1_bkcu_penilaian = 1"
										@click2="form.p2.p2a1_bkcu_penilaian = 2" 
										@click3="form.p2.p2a1_bkcu_penilaian = 3" 
										@click4="form.p2.p2a1_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a1_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2a1_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2a2_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p2.p2a1_cu_penilaian != '' && form.p2.p2a1_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						2. Tampilan Produk</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2a2_cu_penilaian" 
								@click1="form.p2.p2a2_cu_penilaian = 1"
								:subtitle1="'Tidak ada katalog produk yang dikembangkan atau sangat jarang mencetak brosur dan pamflet'"
								@click2="form.p2.p2a2_cu_penilaian = 2" 
								:subtitle2="'Menggunakan brosur dan pamflet, namun sedang-sedang saja dalam hal penyampaian pesan positif tentang kepuasan, keakraban, kegembiraan credit union'"
								@click3="form.p2.p2a2_cu_penilaian = 3" 
								:subtitle3="'Menggunakan katalog, brosur dan pamflet produk secara profesional'"
								@click4="form.p2.p2a2_cu_penilaian = 4" 
								:subtitle4="'Menggunakan katalog, brosur dan pamflet produk secara profesional; ada foto-foto anggota yang menunjukkan kepuasan dan kesan bahwa CU itu ramah, gembira, unik dan penuh peluang'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a2_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a2_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2a2_bkcu_penilaian" 
										@click1="form.p2.p2a2_bkcu_penilaian = 1"
										@click2="form.p2.p2a2_bkcu_penilaian = 2" 
										@click3="form.p2.p2a2_bkcu_penilaian = 3" 
										@click4="form.p2.p2a2_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a2_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2a2_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2a3_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p2.p2a2_cu_penilaian != '' && form.p2.p2a2_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						3. Rentangan Produk Keuangan</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2a3_cu_penilaian" 
								@click1="form.p2.p2a3_cu_penilaian = 1"
								:subtitle1="'<ul><li>Produk-produk masih bersifat tradisional dan belum pernah dikaji dalam 5 tahun terakhir</li><li>Produk-produk keuangan (simpanan, pinjaman) masih terbatas; rancangan produknya masih tradisional</li></ul>'"
								@click2="form.p2.p2a3_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Produk-produk masih bersifat tradisional dan belum pernah dikaji dalam 3 tahun terakhir</li><li>Produk-produk keuang-an masih belum mam-pu menjawab kebutuh-an para anggota</li><li>Produk-produknya tidak sesuai dengan data demografi terkini dari para anggotanya; usia, pekerjaan, jender, agama, perilaku, gaya hidup, status sosial, dll</li></ul>'"
								@click3="form.p2.p2a3_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Produk-produknya baru dikembangkan</li><li>Jangkauan produk-produk keuangan merupakan solusi  yang disesuaikan dengan masalah para anggota</li><li>Produk-produknya sesuai dengan mayoritas demografi anggota yang ada; usia, pekerjaan, jender, agama, perilaku, gaya hidup, status sosial, dll</li></ul>'"
								@click4="form.p2.p2a3_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Produk-produknya baru dikembangkan dalam 10 tahun terakhir</li><li>Produk keuangannya kompetitif dan berdasarkan kebutuhan dan merupakan solusi  yang disesuaikan dengan masalah para anggota</li><li>Produk-produknya sesuai dengan demografi anggota yang ada; usia, pekerjaan, jender, agama, perilaku, gaya hidup, status sosial, dll</li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a3_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a3_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2a3_bkcu_penilaian" 
										@click1="form.p2.p2a3_bkcu_penilaian = 1"
										@click2="form.p2.p2a3_bkcu_penilaian = 2" 
										@click3="form.p2.p2a3_bkcu_penilaian = 3" 
										@click4="form.p2.p2a3_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a3_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2a3_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2a4_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p2.p2a3_cu_penilaian != '' && form.p2.p2a3_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						4. Brand sebagai Pola Pikir</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2a4_cu_penilaian" 
								@click1="form.p2.p2a4_cu_penilaian = 1"
								:subtitle1="'Tidak ada citra branding yang tersebar'"
								@click2="form.p2.p2a4_cu_penilaian = 2" 
								:subtitle2="'Tidak ada bukti tertulis tentang citra branding; sedikit menggambarkan janji dan manfaat produk dan pelayanan, sedikit kesan bisnis dan ikatan psikologis, nama produk agak tradisional'"
								@click3="form.p2.p2a4_cu_penilaian = 3" 
								:subtitle3="'Menampilkan citra branding secara tertulis yang menggambarkan kesan tentang manfaat produk dan pelayanan, ada keunikan; nama produk mudah diingat, menarik, dan trendi'"
								@click4="form.p2.p2a4_cu_penilaian = 4" 
								:subtitle4="'Secara aktif mempromo-sikan manfaat produk dan pelayanan, memanfaatkan peluang eksternal, ikatan psikologis terbangun di antara para anggota, ada keunikan; nama produk mudah diingat, menarik, dan trendi'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a4_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a4_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2a4_bkcu_penilaian" 
										@click1="form.p2.p2a4_bkcu_penilaian = 1"
										@click2="form.p2.p2a4_bkcu_penilaian = 2" 
										@click3="form.p2.p2a4_bkcu_penilaian = 3" 
										@click4="form.p2.p2a4_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a4_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2a4_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2a5_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p2.p2a4_cu_penilaian != '' && form.p2.p2a4_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						5. Produk Pendorong Kesejahteraan</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2a5_cu_penilaian" 
								@click1="form.p2.p2a5_cu_penilaian = 1"
								:subtitle1="'Hanya menawarkan produk-produk simpanan yang bersifat tradisional'"
								@click2="form.p2.p2a5_cu_penilaian = 2" 
								:subtitle2="'Ada 5 produk simpanan yang bersifat membangun kekayaan seperti simpanan pendidikan, pembelian rumah, pembelian mobil, pembelian komputer dan investasi, rehab rumah, darurat, dll'"
								@click3="form.p2.p2a5_cu_penilaian = 3" 
								:subtitle3="'Ada 6 - 10 produk simpanan yang bersifat membangun kekayaan seperti simpanan pendidikan, pembelian rumah, pembelian mobil, pembelian komputer dan investasi, rehab rumah, darurat, dll'"
								@click4="form.p2.p2a5_cu_penilaian = 4" 
								:subtitle4="'Lebih dari 10 produk simpanan yang bersifat membangun kekayaan seperti simpanan pendidikan, pembelian rumah, pembelian mobil, pembelian komputer dan investasi, rehab rumah, darurat, dll'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a5_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a5_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2a5_bkcu_penilaian" 
										@click1="form.p2.p2a5_bkcu_penilaian = 1"
										@click2="form.p2.p2a5_bkcu_penilaian = 2" 
										@click3="form.p2.p2a5_bkcu_penilaian = 3" 
										@click4="form.p2.p2a5_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a5_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2a5_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2a6_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p2.p2a5_cu_penilaian != '' && form.p2.p2a5_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						6. Capacitiy Based Landing (Pinjaman berbasis kemampuan mengembalikan)</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2a6_cu_penilaian" 
								@click1="form.p2.p2a6_cu_penilaian = 1"
								:subtitle1="'Pinjaman diberikan berdasarkan besar modal atau simpanan'"
								@click2="form.p2.p2a6_cu_penilaian = 2" 
								:subtitle2="'Pinjaman diberikan berdasarkan kemampuan mengembalikan'"
								@click3="form.p2.p2a6_cu_penilaian = 3" 
								:subtitle3="'Semua pinjaman diberikan berdasarkan kemampuan mengembalikan dan dianalisis menggunakan Analisa 5C (Character, Capacity to pay, Capital status, Collateral/Co-makers, Credit conditions)'"
								@click4="form.p2.p2a6_cu_penilaian = 4" 
								:subtitle4="'Semua pinjaman diberikan berdasarkan kemampuan mengembalikan dan dianalisis menggunakan Analisa 5C, ada BJP (balas jasa pinjaman) bagi peminjam yang baik'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a6_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a6_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2a6_bkcu_penilaian" 
										@click1="form.p2.p2a6_bkcu_penilaian = 1"
										@click2="form.p2.p2a6_bkcu_penilaian = 2" 
										@click3="form.p2.p2a6_bkcu_penilaian = 3" 
										@click4="form.p2.p2a6_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a6_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2a6_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2a7_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p2.p2a6_cu_penilaian != '' && form.p2.p2a6_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						7. Akses dan Kenyamanan</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2a7_cu_penilaian" 
								@click1="form.p2.p2a7_cu_penilaian = 1"
								:subtitle1="'Tidak menggunakan pelayanan dengan cara ekstensif; masih terikat pada pola tradisional ; “melalui kasir”, jam kantor tidak fleksibel, tidak dapat memenuhi kebutuhan penarikan tunai dari para anggota'"
								@click2="form.p2.p2a7_cu_penilaian = 2" 
								:subtitle2="'Menggunakan beberapa pelayanan terkait kebutuhan anggota, misalnya jam kerja diperpanjang, kasir pelayanan buka selama jam istirahat, ada kasir pelayanan cepat, kasir keliling, kolektor, pelayanan dari rumah ke rumah, pelayanan pada hari Minggu dan libur, dan Tempat Pelayanan Ramah Anggota (Member Friendly Service Point), dll'"
								@click3="form.p2.p2a7_cu_penilaian = 3" 
								:subtitle3="'Menggunakan sebagian besar  pelayanan terkait kebutuhan anggota, misalnya jam kerja diperpanjang, kasir pelayanan buka selama jam istirahat, ada kasir pelayanan cepat, kasir keliling, kolektor, pelayanan dari rumah ke rumah, pelayanan pada hari Minggu dan libur, dan Tempat Pelayanan Ramah Anggota, dll'"
								@click4="form.p2.p2a7_cu_penilaian = 4" 
								:subtitle4="'Menggunakan pelayanan yang ekstensif dan fleksibel terkait kebutuhan anggota, misalnya jam kerja diperpanjang, kasir pelayanan buka selama jam istirahat, ada kasir pelayanan cepat, kasir keliling, kolektor, pelayanan dari rumah ke rumah, pelayanan pada hari libur, dan Tempat Pelayanan Ramah Anggota, dll'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a7_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a7_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2a7_bkcu_penilaian" 
										@click1="form.p2.p2a7_bkcu_penilaian = 1"
										@click2="form.p2.p2a7_bkcu_penilaian = 2" 
										@click3="form.p2.p2a7_bkcu_penilaian = 3" 
										@click4="form.p2.p2a7_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a7_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2a7_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2a8_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p2.p2a7_cu_penilaian != '' && form.p2.p2a7_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						8. Price Value</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2a8_cu_penilaian" 
								@click1="form.p2.p2a8_cu_penilaian = 1"
								:subtitle1="'<ul><li>Tidak mampu membayar bunga sesuai tingkat bunga pasar</li><li>Membayar bunga terlalu tinggi dari tingkat bunga pasar</li></ul>'"
								@click2="form.p2.p2a8_cu_penilaian = 2" 
								:subtitle2="'Pada tingkat bunga pasar yang paling rendah'"
								@click3="form.p2.p2a8_cu_penilaian = 3" 
								:subtitle3="'Tingkat bunga lebih tinggi untuk simpanan dan lebih rendah untuk pinjaman dibandingkan dengan yang berlaku di pasar'"
								@click4="form.p2.p2a8_cu_penilaian = 4" 
								:subtitle4="'Tingkat bunga yang kompetitif pada semua produk simpanan dan pinjaman termasuk jaminan pengembalian'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a8_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a8_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2a8_bkcu_penilaian" 
										@click1="form.p2.p2a8_bkcu_penilaian = 1"
										@click2="form.p2.p2a8_bkcu_penilaian = 2" 
										@click3="form.p2.p2a8_bkcu_penilaian = 3" 
										@click4="form.p2.p2a8_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a8_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2a8_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2a9_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p2.p2a8_cu_penilaian != '' && form.p2.p2a8_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						9. Pemasaran dan Promosi</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2a9_cu_penilaian" 
								@click1="form.p2.p2a9_cu_penilaian = 1"
								:subtitle1="'Tidak memiliki program promosi dan pemasaran atau program promosi tidak memuaskan; tidak ada peningkatan penggunaan produk dan pelayanan, jumlah anggota dan anggota yang loyal'"
								@click2="form.p2.p2a9_cu_penilaian = 2" 
								:subtitle2="'Kadang-kadang meluncurkan program promosi yang dalam beberapa hal meningkatkan nilai produk dan pelayanan; kadang-kadang frekuensi penggunaan produk dan pelayanan meningkat dan membangkitkan kepuasan terhadap CU'"
								@click3="form.p2.p2a9_cu_penilaian = 3" 
								:subtitle3="'Sukses melaksanakan program promosi tahunan yang meningkatkan nilai produk dan pelayanan: ada bukti program promosi dan pemasaran dan bukti antara hubungan penambahan jumlah anggota dengan penggunaan produk dan pelayanan'"
								@click4="form.p2.p2a9_cu_penilaian = 4" 
								:subtitle4="'Sukses melaksanakan program promosi tahun-an yang disiapkan de-ngan baik, yang secara konsisten meningkatkan nilai produk dan pelayanan: ada bukti program promosi dan pemasaran dan bukti antara hubungan penambahan jumlah anggota dengan penggunaan produk dan pelayanan serta bukti pemasaran yang kooperatif'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a9_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a9_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2a9_bkcu_penilaian" 
										@click1="form.p2.p2a9_bkcu_penilaian = 1"
										@click2="form.p2.p2a9_bkcu_penilaian = 2" 
										@click3="form.p2.p2a9_bkcu_penilaian = 3" 
										@click4="form.p2.p2a9_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a9_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2a9_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- a10 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p2.p2a10_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p2.p2a9_cu_penilaian != '' && form.p2.p2a9_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						10. Insentif Loyalitas</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2a10_cu_penilaian" 
								@click1="form.p2.p2a10_cu_penilaian = 1"
								:subtitle1="'Tidak ada taktik yang dijalankan untuk meraih loyalitas anggota dan meningkatkan kepuasan anggota dalam berbisnis dengan credit union'"
								@click2="form.p2.p2a10_cu_penilaian = 2" 
								:subtitle2="'Menerapkan sedikit taktik untuk meraih loyalitas anggota dan meningkat-kan kepuasan anggota, misalnya dengan program ucapan ulang tahun, anggota terbaik, penarikan undian terkait dengan frekuensi transaksi, penghargaan terhadap anggota paling berjasa, anggota terbaik bulan ini, dll'"
								@click3="form.p2.p2a10_cu_penilaian = 3" 
								:subtitle3="'Menerapkan program untuk meraih loyalitas anggota dan meningkat-kan kepuasan anggota, misalnya dengan program ucapan ulang tahun, anggota terbaik, penarikan undian terkait dengan frekuensi transaksi, penghargaan terhadap anggota paling berjasa, anggota terbaik bulan ini, dll'"
								@click4="form.p2.p2a10_cu_penilaian = 4" 
								:subtitle4="'Menerapkan taktik ekstensif terbaik untuk meraih loyalitas anggota dan meningkatkan kepuasan anggota dalam berbisnis dengan credit union'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a10_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a10_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2a10_bkcu_penilaian" 
										@click1="form.p2.p2a10_bkcu_penilaian = 1"
										@click2="form.p2.p2a10_bkcu_penilaian = 2" 
										@click3="form.p2.p2a10_bkcu_penilaian = 3" 
										@click4="form.p2.p2a10_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a10_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a10_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a10_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2a10_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- a11 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p2.p2a11_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p2.p2a10_cu_penilaian != '' && form.p2.p2a10_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						11. Kemasan Produk</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2a11_cu_penilaian" 
								@click1="form.p2.p2a11_cu_penilaian = 1"
								:subtitle1="'Pengemasan produk dan pelayanan tidak menciptakan pengalaman yang mengesankan, jarang menggunakan bahan cetak untuk promosi dan tidak berbasis solusi maupun produk membangun kekayaan'"
								@click2="form.p2.p2a11_cu_penilaian = 2" 
								:subtitle2="'Pengemasan produk dan pelayanan kadang-kadang menciptakan pengalaman yang mengesankan, menyertakan sejumlah aspek sopan santun bagi staf, menggunakan bahan cetak untuk promosi dan slogan, dalam beberapa hal berbasis solusi dan produk membangun kekayaan'"
								@click3="form.p2.p2a11_cu_penilaian = 3" 
								:subtitle3="'Menggunakan kemasan bisnis yang hampir sepenuhnya menciptakan pengalaman yang amat mengesankan, menyertakan sejumlah aspek sopan santun bagi staf, menggunakan bahan cetak untuk promosi dan slogan, dalam beberapa hal berbasis solusi dan produk membangun kekayaan'"
								@click4="form.p2.p2a11_cu_penilaian = 4" 
								:subtitle4="'Menggunakan kemasan bisnis utuh yang menciptakan pengalaman yang amat mengesankan, menyertakan sejumlah aspek sopan santun bagi staf, menggunakan bahan cetak untuk promosi dan slogan, dalam beberapa hal berbasis solusi dan produk membangun kekayaan'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a11_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a11_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2a11_bkcu_penilaian" 
										@click1="form.p2.p2a11_bkcu_penilaian = 1"
										@click2="form.p2.p2a11_bkcu_penilaian = 2" 
										@click3="form.p2.p2a11_bkcu_penilaian = 3" 
										@click4="form.p2.p2a11_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a11_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2a11_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a11_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2a11_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
			<div class="card card-body bg-warning text-white" v-if="form.p2.p2a11_cu_penilaian != '' && form.p2.p2a11_cu_keterangan != ''">
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">B. KEPUASAN ANGGOTA</h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>
								Skor CU: {{ (
									form.p2.p2b12_cu_penilaian + 
									form.p2.p2b13_cu_penilaian + 
									form.p2.p2b14_cu_penilaian + 
									form.p2.p2b15_cu_penilaian + 
									form.p2.p2b16_cu_penilaian + 
									form.p2.p2b17_cu_penilaian + 
									form.p2.p2b18_cu_penilaian + 
									form.p2.p2b19_cu_penilaian + 
									form.p2.p2b20_cu_penilaian + 
									form.p2.p2b21_cu_penilaian + 
									form.p2.p2b22_cu_penilaian + 
									form.p2.p2b23_cu_penilaian + 
									form.p2.p2b24_cu_penilaian + 
									form.p2.p2b25_cu_penilaian + 
									form.p2.p2b26_cu_penilaian + 
									form.p2.p2b27_cu_penilaian) / 1 }} / 
								Bobot Skor CU: {{ (((
									form.p2.p2b12_cu_penilaian + 
									form.p2.p2b13_cu_penilaian + 
									form.p2.p2b14_cu_penilaian + 
									form.p2.p2b15_cu_penilaian + 
									form.p2.p2b16_cu_penilaian + 
									form.p2.p2b17_cu_penilaian + 
									form.p2.p2b18_cu_penilaian + 
									form.p2.p2b19_cu_penilaian + 
									form.p2.p2b20_cu_penilaian + 
									form.p2.p2b21_cu_penilaian + 
									form.p2.p2b22_cu_penilaian + 
									form.p2.p2b23_cu_penilaian + 
									form.p2.p2b24_cu_penilaian + 
									form.p2.p2b25_cu_penilaian + 
									form.p2.p2b26_cu_penilaian + 
									form.p2.p2b27_cu_penilaian)/jumlahIndikator) * bobotSkor) | round(2) }} 
								</li>
							<li>
								Skor BKCU: {{ (
									form.p2.p2b12_bkcu_penilaian + 
									form.p2.p2b13_bkcu_penilaian + 
									form.p2.p2b14_bkcu_penilaian + 
									form.p2.p2b15_bkcu_penilaian + 
									form.p2.p2b16_bkcu_penilaian + 
									form.p2.p2b17_bkcu_penilaian + 
									form.p2.p2b18_bkcu_penilaian + 
									form.p2.p2b19_bkcu_penilaian + 
									form.p2.p2b20_bkcu_penilaian + 
									form.p2.p2b21_bkcu_penilaian + 
									form.p2.p2b22_bkcu_penilaian + 
									form.p2.p2b23_bkcu_penilaian + 
									form.p2.p2b24_bkcu_penilaian + 
									form.p2.p2b25_bkcu_penilaian + 
									form.p2.p2b26_bkcu_penilaian + 
									form.p2.p2b27_bkcu_penilaian) / 1 }} / 
								Bobot Skor BKCU: {{ (((
									form.p2.p2b12_bkcu_penilaian + 
									form.p2.p2b13_bkcu_penilaian + 
									form.p2.p2b14_bkcu_penilaian + 
									form.p2.p2b15_bkcu_penilaian + 
									form.p2.p2b16_bkcu_penilaian + 
									form.p2.p2b17_bkcu_penilaian + 
									form.p2.p2b18_bkcu_penilaian + 
									form.p2.p2b19_bkcu_penilaian + 
									form.p2.p2b20_bkcu_penilaian + 
									form.p2.p2b21_bkcu_penilaian + 
									form.p2.p2b22_bkcu_penilaian + 
									form.p2.p2b23_bkcu_penilaian + 
									form.p2.p2b24_bkcu_penilaian + 
									form.p2.p2b25_bkcu_penilaian + 
									form.p2.p2b26_bkcu_penilaian + 
									form.p2.p2b27_bkcu_penilaian)/jumlahIndikator) * bobotSkor) | round(2) }} 
							</li>
						</ul>	
					</div>
				</div>	
			</div>
		</div>
		</transition>

		<!-- b12 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p2.p2b12_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p2.p2a11_cu_penilaian != '' && form.p2.p2a11_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						12. Pemahaman tentang Anggota</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2b12_cu_penilaian" 
								@click1="form.p2.p2b12_cu_penilaian = 1"
								:subtitle1="'Tidak ada sistem untuk melacak sejarah transaksi anggota dan informasi pribadi'"
								@click2="form.p2.p2b12_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Ada database anggota tetapi tidak diperbaharui secara teratur</li><li>Ada sedikit informasi pribadi anggota tetapi belum memberikan gambaran tentang apa yang dikehendaki , bagaimana cara melayani dan memasarkannya</li></ul>'"
								@click3="form.p2.p2b12_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Database anggota selalu diperbaharui secara teratur untuk melacak sejarah transaksi</li><li>Ada informasi pribadi mendasar yang memberikan gambaran tentang apa yang dikehendaki, bagaimana cara melayani dan memasarkannya</li></ul>'"
								@click4="form.p2.p2b12_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Database anggota selalu diperbaharui secara teratur dan terpelihara untuk melacak sejarah transaksi</li><li>Informasi pribadi leng-kap dan dapat mem-berikan gambaran tentang apa yang di-kehendaki , bagaimana cara melayani dan memasarkannya</li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b12_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b12_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2b12_bkcu_penilaian" 
										@click1="form.p2.p2b12_bkcu_penilaian = 1"
										@click2="form.p2.p2b12_bkcu_penilaian = 2" 
										@click3="form.p2.p2b12_bkcu_penilaian = 3" 
										@click4="form.p2.p2b12_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b12_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2b12_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2b13_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p2.p2b12_cu_penilaian != '' && form.p2.p2b12_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						13. Membina Hubungan Berkelanjutan dengan Anggota</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2b13_cu_penilaian" 
								@click1="form.p2.p2b13_cu_penilaian = 1"
								:subtitle1="'Tidak ada program'"
								@click2="form.p2.p2b13_cu_penilaian = 2" 
								:subtitle2="'Kadang-kadang dijalan-kan di beberapa bidang dan ada peningkatan hampir di semua bidang, misalnya frekuensi penggunaan pelayanan, kesetiaan, kepuasan, rasa memiliki, citra, niat baik, dan keaktifan'"
								@click3="form.p2.p2b13_cu_penilaian = 3" 
								:subtitle3="'Program tahunan di-jalankan di semua bidang dan ada peningkatan hampir di semua bidang, misalnya frekuensi penggunaan pelayanan, kesetiaan, kepuasan, rasa memiliki, citra, niat baik, dan keaktifan'"
								@click4="form.p2.p2b13_cu_penilaian = 4" 
								:subtitle4="'Program tahunan dijalankan secara ekstensif di semua bidang dan ada peningkatan hampir di semua bidang, misalnya frekuensi penggunaan pelayanan, kesetiaan, kepuasan, rasa memiliki, citra, niat baik, dan keaktifan'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b13_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b13_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2b13_bkcu_penilaian" 
										@click1="form.p2.p2b13_bkcu_penilaian = 1"
										@click2="form.p2.p2b13_bkcu_penilaian = 2" 
										@click3="form.p2.p2b13_bkcu_penilaian = 3" 
										@click4="form.p2.p2b13_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b13_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2b13_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2b14_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p2.p2b13_cu_penilaian != '' && form.p2.p2b13_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						14. Evaluasi Kepuasan Anggota</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2b14_cu_penilaian" 
								@click1="form.p2.p2b14_cu_penilaian = 1"
								:subtitle1="'Tidak melakukan survei kepuasan anggota'"
								@click2="form.p2.p2b14_cu_penilaian = 2" 
								:subtitle2="'Menjalankan tapi tidak teratur, ada pertemuan formal/informal anggota dan survei kepuasan anggota di beberapa bidang misalnya pelayanan tepat waktu, kesantunan staf, tanggap, paham terhadap masalah anggota, evaluasi menyeluruh terhadap organisasi, penggunaan produk tetapi tidak dianalisis dan digunakan; tidak menggunakan tolak ukur yang ditetapkan'"
								@click3="form.p2.p2b14_cu_penilaian = 3" 
								:subtitle3="'Menjalankan pertemuan formal/informal anggota dan survei kepuasan anggota di beberapa bidang misalnya pelayanan tepat waktu, kesantunan staf, tanggap, paham terhadap masalah anggota, evaluasi menyeluruh terhadap organisasi, penggunaan produk, menganalisis dan menggunakannya; menggunakan tolak ukur yang ditetapkan, penilaiannya sangat baik'"
								@click4="form.p2.p2b14_cu_penilaian = 4" 
								:subtitle4="'Menjalankan secara konsisten pertemuan formal/informal anggota dan survei kepuasan anggota di beberapa bidang misalnya pelayanan tepat waktu, kesantunan staf, tanggap, paham terhadap masalah anggota, evaluasi menyeluruh terhadap organisasi, penggunaan produk, menganalisis dan menggunakannya; menggunakan tolak ukur yang ditetapkan, penilaiannya prima'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b14_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b14_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2b14_bkcu_penilaian" 
										@click1="form.p2.p2b14_bkcu_penilaian = 1"
										@click2="form.p2.p2b14_bkcu_penilaian = 2" 
										@click3="form.p2.p2b14_bkcu_penilaian = 3" 
										@click4="form.p2.p2b14_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b14_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2b14_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2b15_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p2.p2b14_cu_penilaian != '' && form.p2.p2b14_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						15. Share of Wallet (Hanya menjadi anggota CU kita)</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2b15_cu_penilaian" 
								@click1="form.p2.p2b15_cu_penilaian = 1"
								:subtitle1="'Tidak melakukan survei kepuasan anggota'"
								@click2="form.p2.p2b15_cu_penilaian = 2" 
								:subtitle2="'50 - 69% anggota menyatakan bahwa CU merupakan lembaga keuangan yang terbaik'"
								@click3="form.p2.p2b15_cu_penilaian = 3" 
								:subtitle3="'70-80% anggota menyatakan bahwa CU merupakan lembaga keuangan yang terbaik'"
								@click4="form.p2.p2b15_cu_penilaian = 4" 
								:subtitle4="'Lebih dari 80% anggota menyatakan bahwa CU merupakan lembaga keuangan yang terbaik'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b15_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b15_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2b15_bkcu_penilaian" 
										@click1="form.p2.p2b15_bkcu_penilaian = 1"
										@click2="form.p2.p2b15_bkcu_penilaian = 2" 
										@click3="form.p2.p2b15_bkcu_penilaian = 3" 
										@click4="form.p2.p2b15_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b15_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2b15_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2b16_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p2.p2b15_cu_penilaian != '' && form.p2.p2b15_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						16. Customer Care Excellence yang dilembagakan</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2b16_cu_penilaian" 
								@click1="form.p2.p2b16_cu_penilaian = 1"
								:subtitle1="'<ul><li>Orientasi kepada pelanggan tidak diintegrasikan dengan profil kemampuan staf; orientasi pelanggan dalam tujuan/strategi</li><li>Operasional sehari-hari belum tertulis dan tidak mengikuti Peduli Anggota (Customer Care)</li><li>Tidak ada staf yang ditunjuk untuk mengelola hubungan dengan anggota</li><li>Hubungan dengan anggota ditetapkan dalam misi, tetapi tidak dalam nilai-nilai inti organisasi</li></ul>'"
								@click2="form.p2.p2b16_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Orientasi kepada pelanggan diintegra-sikan dengan profil kemampuan beberapa orang staf</li><li>Orientasi pelanggan dalam tujuan/strategi tapi belum jelas</li><li>Operasional sehari-hari sudah mengikuti standar Pelayanan Peduli Anggota tapi tidak secara tertulis</li><li>Menunjuk staf untuk mengelola hubungan dengan anggota</li><li>Hubungan dengan anggota ditetapkan dalam misi, tetapi tidak dalam nilai-nilai inti organisasi</li></ul>'"
								@click3="form.p2.p2b16_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Orientasi kepada pelanggan diintegrasikan dengan profil kemampuan semua staf</li><li>Ada 4 orientasi pelanggan dalam tujuan/strategi pada Strategic Plan (SP) yang dikomunikasikan untuk diikuti semua<ul><li>Operasional sehari-hari sudah mengikuti standar Pelayanan Peduli Anggota secara tertulis</li><li>Menunjuk staf untuk mengelola hubungan dengan anggota</li><li>Mengadopsi mekanisme untuk melibatkan anggota dalam mengembangkan;  produk baru</li><li>hubungan dengan anggota merupakan bagian dari visi, misi, dan nilai-nilai inti organisasi.</li></ul></li></ul>'"
								@click4="form.p2.p2b16_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Orientasi kepada pelanggan diintegra-sikan dengan profil kemampuan semua staf </li><li>Ada 5 atau lebih orientasi pelanggan dalam tujuan/strategi pada Strategic Plan (SP) yang dikomunikasikan untuk diikuti semua <ul><li>Operasional sehari-hari sudah mengikuti standar Pelayanan Peduli Anggota secara tertulis</li><li>Menunjuk staf untuk mengelola hubungan dengan anggota</li><li>Mengadopsi mekanisme untuk melibatkan anggota dalam mengembangkan produk baru;</li><li>hubungan dengan anggota merupakan bagian dari visi, misi, dan nilai-nilai inti organisasi</li></ul></li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b16_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b16_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2b16_bkcu_penilaian" 
										@click1="form.p2.p2b16_bkcu_penilaian = 1"
										@click2="form.p2.p2b16_bkcu_penilaian = 2" 
										@click3="form.p2.p2b16_bkcu_penilaian = 3" 
										@click4="form.p2.p2b16_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b16_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2b16_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2b17_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p2.p2b16_cu_penilaian != '' && form.p2.p2b16_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						17. Manfaat bagi anggota (Member benefit)</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2b17_cu_penilaian" 
								@click1="form.p2.p2b17_cu_penilaian = 1"
								:subtitle1="'Tidak ada program kesejahteraan bagi anggota'"
								@click2="form.p2.p2b17_cu_penilaian = 2" 
								:subtitle2="'Ada beberapa pelayanan kesejahteraan bagi anggota yang menggunakan dana dari pelayanan keuangan, misalnya beasiswa, kesehatan, pensiun, bantuan untuk kematian, kelahiran, musibah, dll'"
								@click3="form.p2.p2b17_cu_penilaian = 3" 
								:subtitle3="'5 – 7 pelayanan kesejahteraan berkelanjutan tersedia untuk anggota yang menggunakan dana terpisah dari pelaksana-an pelayanan keuangan, misalnya beasiswa, kesehatan, pensiun, bantuan untuk kematian, kelahiran, musibah, dll; dana untuk pelayanan ini berasal dari akumulasi keuntungan'"
								@click4="form.p2.p2b17_cu_penilaian = 4" 
								:subtitle4="'Lebih dari  7 pelayanan kesejahteraan berkelanjutan yang penuh inovasi dan menunjukkan keunikan dari CU tersedia untuk anggota serta menggunakan dana terpisah dari pelaksana-an pelayanan keuangan, misalnya beasiswa, kesehatan, pensiun, bantuan untuk kematian, kelahiran, musibah, dll; dana untuk pelayanan ini berasal dari akumulasi keuntungan'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b17_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b17_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2b17_bkcu_penilaian" 
										@click1="form.p2.p2b17_bkcu_penilaian = 1"
										@click2="form.p2.p2b17_bkcu_penilaian = 2" 
										@click3="form.p2.p2b17_bkcu_penilaian = 3" 
										@click4="form.p2.p2b17_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b17_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2b17_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2b18_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p2.p2b17_cu_penilaian != '' && form.p2.p2b17_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						18. Rapat Anggota</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2b18_cu_penilaian" 
								@click1="form.p2.p2b18_cu_penilaian = 1"
								:subtitle1="'Rapat Anggota Tahunan tidak dilakukan secara rutin'"
								@click2="form.p2.p2b18_cu_penilaian = 2" 
								:subtitle2="'Rapat Anggota Tahunan dilakukan dengan jumlah kuorum minimal'"
								@click3="form.p2.p2b18_cu_penilaian = 3" 
								:subtitle3="'Rapat Anggota Tahunan dilakukan tepat waktu termasuk pertemuan umum yang dilakukan secara khusus sesuai kebutuhan'"
								@click4="form.p2.p2b18_cu_penilaian = 4" 
								:subtitle4="'Rapat Anggota Tahunan dilakukan tepat waktu termasuk pertemuan umum yang dilakukan secara khusus sesuai kebutuhan dan program anggota seperti pertemuan keluarga, dll'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b18_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b18_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2b18_bkcu_penilaian" 
										@click1="form.p2.p2b18_bkcu_penilaian = 1"
										@click2="form.p2.p2b18_bkcu_penilaian = 2" 
										@click3="form.p2.p2b18_bkcu_penilaian = 3" 
										@click4="form.p2.p2b18_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b18_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2b18_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2b19_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p2.p2b18_cu_penilaian != '' && form.p2.p2b18_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						19. Partisipasi anggota</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2b19_cu_penilaian" 
								@click1="form.p2.p2b19_cu_penilaian = 1"
								:subtitle1="'Tidak ada masukan dari anggota dalam perencanaan'"
								@click2="form.p2.p2b19_cu_penilaian = 2" 
								:subtitle2="'Ada masukan dari anggota tetapi tidak rutin. Beberapa anggota terlibat dalam kegiatan yang dilakukan oleh CU.'"
								@click3="form.p2.p2b19_cu_penilaian = 3" 
								:subtitle3="'Ada masukan tahunan dari anggota dalam perencanaan, umpan balik dari anggota diminta secara rutin'"
								@click4="form.p2.p2b19_cu_penilaian = 4" 
								:subtitle4="'Masukan dari anggota secara rutin setiap tahun dalam perencanaan, umpan balik dari anggota diminta secara rutin dan wilayah kerja sudah dibagi untuk memastikan bahwa umpan balik terkumpul'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b19_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b19_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2b19_bkcu_penilaian" 
										@click1="form.p2.p2b19_bkcu_penilaian = 1"
										@click2="form.p2.p2b19_bkcu_penilaian = 2" 
										@click3="form.p2.p2b19_bkcu_penilaian = 3" 
										@click4="form.p2.p2b19_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b19_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2b19_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2b20_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p2.p2b19_cu_penilaian != '' && form.p2.p2b19_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						20. Masukan dari anggota secara rutin setiap tahun dalam perencanaan, umpan balik dari anggota diminta secara rutin dan wilayah kerja sudah dibagi untuk memastikan bahwa umpan balik terkumpul</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2b20_cu_penilaian" 
								@click1="form.p2.p2b20_cu_penilaian = 1"
								:subtitle1="'Kurang dari 20%  anggota menggunakan rata-rata 1- 2 produk pembangun kekayaan'"
								@click2="form.p2.p2b20_cu_penilaian = 2" 
								:subtitle2="'21 - 30%  anggota menggunakan rata-rata 1- 2 produk pembangun kekayaan'"
								@click3="form.p2.p2b20_cu_penilaian = 3" 
								:subtitle3="'31 - 40%  anggota menggunakan rata-rata 3 - 5 produk pembangun kekayaan'"
								@click4="form.p2.p2b20_cu_penilaian = 4" 
								:subtitle4="'Lebih dari 40%  anggota menggunakan lebih dari 5 produk pembangun kekayaan'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b20_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b20_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2b20_bkcu_penilaian" 
										@click1="form.p2.p2b20_bkcu_penilaian = 1"
										@click2="form.p2.p2b20_bkcu_penilaian = 2" 
										@click3="form.p2.p2b20_bkcu_penilaian = 3" 
										@click4="form.p2.p2b20_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b20_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2b20_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2b21_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p2.p2b20_cu_penilaian != '' && form.p2.p2b20_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						21. Pengguna Produk-produk Pinjaman</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2b21_cu_penilaian" 
								@click1="form.p2.p2b21_cu_penilaian = 1"
								:subtitle1="'Kurang dari 50% anggota menggunakan produk-produk pinjaman'"
								@click2="form.p2.p2b21_cu_penilaian = 2" 
								:subtitle2="'50 - 79% anggota menggunakan produk-produk pinjaman'"
								@click3="form.p2.p2b21_cu_penilaian = 3" 
								:subtitle3="'80 - 90% anggota menggunakan produk-produk pinjaman'"
								@click4="form.p2.p2b21_cu_penilaian = 4" 
								:subtitle4="'Lebih dari 90% anggota menggunakan produk pinjaman'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b21_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b21_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2b21_bkcu_penilaian" 
										@click1="form.p2.p2b21_bkcu_penilaian = 1"
										@click2="form.p2.p2b21_bkcu_penilaian = 2" 
										@click3="form.p2.p2b21_bkcu_penilaian = 3" 
										@click4="form.p2.p2b21_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b21_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2b21_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2b22_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p2.p2b21_cu_penilaian != '' && form.p2.p2b21_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						22. Pemahaman Tanggung jawab Peminjam - dilihat dari % Kelalaian</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2b22_cu_penilaian" 
								@click1="form.p2.p2b22_cu_penilaian = 1"
								:subtitle1="'Kurang dari 80% anggota membayar tepat waktu sesuai dengan perjanjian dan persyaratan pinjaman'"
								@click2="form.p2.p2b22_cu_penilaian = 2" 
								:subtitle2="'80 - 94% anggota membayar tepat waktu sesuai dengan perjanjian dan persyaratan pinjaman'"
								@click3="form.p2.p2b22_cu_penilaian = 3" 
								:subtitle3="'95% anggota membayar tepat waktu sesuai dengan perjanjian dan persyaratan pinjaman.'"
								@click4="form.p2.p2b22_cu_penilaian = 4" 
								:subtitle4="'Lebih dari 95% anggota membayar tepat waktu sesuai dengan perjanjian dan persyaratan pinjam-an.'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b22_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b22_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2b22_bkcu_penilaian" 
										@click1="form.p2.p2b22_bkcu_penilaian = 1"
										@click2="form.p2.p2b22_bkcu_penilaian = 2" 
										@click3="form.p2.p2b22_bkcu_penilaian = 3" 
										@click4="form.p2.p2b22_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b22_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2b22_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2b23_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p2.p2b22_cu_penilaian != '' && form.p2.p2b22_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						23. Infrastruktur Fisik-Bangunan dan Ruang Kantor</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2b23_cu_penilaian" 
								@click1="form.p2.p2b23_cu_penilaian = 1"
								:subtitle1="'Prasarana fisik tidak memadai, menyebabkan hilangnya efektivitas dan efisiensi, misalnya lokasi kantor tidak disukai oleh anggota dan staf; ruang kerja tidak memadai baik secara individu maupun tim'"
								@click2="form.p2.p2b23_cu_penilaian = 2" 
								:subtitle2="'Prasarana fisik tersedia dengan cukup baik, demi memenuhi kebutuhan organisasi yang paling mendesak; sejumlah perbaikan dapat sangat membantu meningkatkan  efektivitas dan efisiensi, misalnya ruang kerja tim tidak memadai, tidak bisa mengadakan diskusi yang bersifat rahasia, staf berbagi meja kerja'"
								@click3="form.p2.p2b23_cu_penilaian = 3" 
								:subtitle3="'Prasarana fisik dan bangunan memadai untuk kebutuhan organisasi sekarang ini, prasarana tidak menghambat efektivitas dan efisiensi misalnya lokasi disukai oleh anggota dan staf, ruang kerja memadai bagi individu maupun tim dan memungkinkan untuk mengadakan diskusi-diskusi yang bersifat rahasia'"
								@click4="form.p2.p2b23_cu_penilaian = 4" 
								:subtitle4="'Prasarana fisik terbangun dengan baik untuk memenuhi kebutuhan organisasi sekarang ini dan antisipasi untuk kebutuhan masa depan, dirancang dengan baik dan penuh pemikiran untuk meningkatkan efektivitas dan efisiensi organisasi, misalnya lokasi disukai oleh anggota dan staf, ruang kerja luas,  mendorong timuntuk bekerja sama, tata letak meningkatkan interaksi penting di kalangan staf'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b23_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b23_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2b23_bkcu_penilaian" 
										@click1="form.p2.p2b23_bkcu_penilaian = 1"
										@click2="form.p2.p2b23_bkcu_penilaian = 2" 
										@click3="form.p2.p2b23_bkcu_penilaian = 3" 
										@click4="form.p2.p2b23_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b23_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2b23_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2b24_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p2.p2b23_cu_penilaian != '' && form.p2.p2b23_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						24. Infrastruktur teknologi –telefon dan faks</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2b24_cu_penilaian" 
								@click1="form.p2.p2b24_cu_penilaian = 1"
								:subtitle1="'Jumlah fasilitas nomor telepon dan faksimille terbatas sehingga menghambat efektivitas dan efisiensi pekerjaan harian'"
								@click2="form.p2.p2b24_cu_penilaian = 2" 
								:subtitle2="'Fasilitas telepon dan faksimille memadai dan dapat di akses oleh sebagian besar staf; dapat diandal kan atau ramah pengguna; atau mungkin kurang dalam beberapa aspek yang sebetulnya dapat membantu meningkatkan efektivitas dan efisiensi misalnya voice mail individual atau mungkin sulit diakses oleh beberapa staf misalnya staf di bagian depan'"
								@click3="form.p2.p2b24_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Fasilitas telepon dan faksimille dapat diakses oleh semua staf di tiap sudut kantor; tidak ada hambatan untuk memenuhi kebutuhan komunikasi sehari-hari</li><li>Termasuk fasilitas tambahan yang dapat membantu meningkat-kan efektivitas dan efisiensimisalnya voice mail yang dapat diakses dengan remote</li></ul>'"
								@click4="form.p2.p2b24_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Fasilitas telepon dan faksimille yang bagus sekali dan dapat diandalkan oleh semua staf di tiap sudut kantor, menyertakan voice mail individual setiap jam</li><li>Dilengkapi dengan fasilitas tambahan (misalnya pager, telepon genggam) bagi staf terpilih; efektif dan  berpengaruh dalam meningkatkan efektivitas dan efisiensi staf</li></ul>'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b24_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b24_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2b24_bkcu_penilaian" 
										@click1="form.p2.p2b24_bkcu_penilaian = 1"
										@click2="form.p2.p2b24_bkcu_penilaian = 2" 
										@click3="form.p2.p2b24_bkcu_penilaian = 3" 
										@click4="form.p2.p2b24_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b24_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2b24_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2b25_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p2.p2b24_cu_penilaian != '' && form.p2.p2b24_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						25. Komputer, Aplikasi, Network dan Email</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2b25_cu_penilaian" 
								@click1="form.p2.p2b25_cu_penilaian = 1"
								:subtitle1="'Terbatas/tidak ada penggunaan komputer atau teknologi lainnya dalam kegiatan harian; dan atau sedikit/tidak ada staf yang menggunakan prasarana teknologi dan informasi'"
								@click2="form.p2.p2b25_cu_penilaian = 2" 
								:subtitle2="'Fasilitas teknologi tersedia dengan baik pada tingkat atas; prasarana tidak lengkap; seringkali peralatan di pakai bersama; penggunaan teknologi informasi dimanfaatkan dengan baik oleh beberapa staf saja'"
								@click3="form.p2.p2b25_cu_penilaian = 3" 
								:subtitle3="'Perangkat keras dan lunak dapat diakses oleh staf, tidak ada pemakaian alat secara bersama-sama, pengunaan TI tinggi dan lebih efisien'"
								@click4="form.p2.p2b25_cu_penilaian = 4" 
								:subtitle4="'Perangkat keras jaringan komputer bagus sekali dengan jangkauan aplikasi perangkat lunak yang komprehensif; semua staf memiliki komputer dan akses email sendiri; dapat diakses; dipakai secara rutin; efektif dan berpengaruh dalam meningkatkan efisiensi staf'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b25_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b25_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2b25_bkcu_penilaian" 
										@click1="form.p2.p2b25_bkcu_penilaian = 1"
										@click2="form.p2.p2b25_bkcu_penilaian = 2" 
										@click3="form.p2.p2b25_bkcu_penilaian = 3" 
										@click4="form.p2.p2b25_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b25_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2b25_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="tabName == 'semua' || form.p2.p2b26_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p2.p2b25_cu_penilaian != '' && form.p2.p2b25_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						26. Website</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2b26_cu_penilaian" 
								@click1="form.p2.p2b26_cu_penilaian = 1"
								:subtitle1="'Tidak ada website'"
								@click2="form.p2.p2b26_cu_penilaian = 2" 
								:subtitle2="'Website dasar memuat informasi umum tentang perkembangan terkini; pemeliharaan website menjadi beban dan hanya sesekali waktu digunakan'"
								@click3="form.p2.p2b26_cu_penilaian = 3" 
								:subtitle3="'Website komprehensif memuat dasar tentang organisasi dan perkembangan terkini'"
								@click4="form.p2.p2b26_cu_penilaian = 4" 
								:subtitle4="'Website komprehensif yang interaktif dan bagus sekali, diperbarui secara rutin termasuk informasi mengenai perkembangan terkini organisasi; dipuji karena ramah pengguna dan kedalaman informasinya; menyertakan jalur terkait (link) yang berhubungandengan organisasi dan sumber daya yang bermanfaat tentang topik atau pelayanan'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b26_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b26_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2b26_bkcu_penilaian" 
										@click1="form.p2.p2b26_bkcu_penilaian = 1"
										@click2="form.p2.p2b26_bkcu_penilaian = 2" 
										@click3="form.p2.p2b26_bkcu_penilaian = 3" 
										@click4="form.p2.p2b26_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b26_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2b26_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b27 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua' || form.p2.p2b27_cu_penilaian == tabName">
			<div class="card border-warning" v-if="form.p2.p2b25_cu_penilaian != '' && form.p2.p2b25_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						27. Sistem Pelaporan Manajemen & Pusat Data</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian_cu 
								:form="form.p2.p2b27_cu_penilaian" 
								@click1="form.p2.p2b27_cu_penilaian = 1"
								:subtitle1="'Tidak ada sistem untuk melacak informasi keanggotaan, staf, hasil-hasil pelayanan, dan informasi keuangan'"
								@click2="form.p2.p2b27_cu_penilaian = 2" 
								:subtitle2="'Manajemen database dan sistem pelaporan ada hanya pada bidang terbatas; sistem hanya menampilkan aspek-aspek dasar, digunakan oleh sedikit staf saja'"
								@click3="form.p2.p2b27_cu_penilaian = 3" 
								:subtitle3="'Manajemen database dan sistem pelaporan ada untuk semua bidang dan dapat melacak informasi keanggotaan, staf, hasil-hasil pelayanan, informasi keuangan, sering digunakan untuk membantu sharing informasi dan efisiensi'"
								@click4="form.p2.p2b27_cu_penilaian = 4" 
								:subtitle4="'Database elektronik yang bagus sekali dan sistem manajemen pelaporan yang ada untuk melacak keanggotaan, staf, hasil-hasil pelayanan dan informasi keuangan; dipakai secara luas dan penting sekali untuk meningkatkan sharing informasi dan efisiensi'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b27_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b27_cu_keterangan" :disabled="$route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p2.p2b27_bkcu_penilaian" 
										@click1="form.p2.p2b27_bkcu_penilaian = 1"
										@click2="form.p2.p2b27_bkcu_penilaian = 2" 
										@click3="form.p2.p2b27_bkcu_penilaian = 3" 
										@click4="form.p2.p2b27_bkcu_penilaian = 4" 
									></penilaian>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b27_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.p2b27_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b27_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p2.p2b27_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		
		<!-- next button -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="tabName == 'semua'">
			<div class="card card-body" v-if="form.p2.p2b27_cu_penilaian != '' && form.p2.p2b27_cu_keterangan != ''">
				<div class="text-center d-none d-md-block">
					<button type="button" class="btn btn-primary" @click.prevent="next">
						<i class="icon-arrow-right14"></i> Selanjutnya
					</button>
				</div>
				<div class="d-block d-md-none">
					<button type="button" class="btn btn-primary btn-block" @click.prevent="next">
						<i class="icon-arrow-right14"></i> Selanjutnya
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
				this.tabName = value;
			},
			next(){
				this.$emit('next');
			},
			jumlahPenilaianCU(nilai){
				var jumlah = 0;
				if(this.form.p2.p2a1_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a2_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a3_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a4_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a5_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a6_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a7_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a8_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a9_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a10_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a11_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b12_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b13_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b14_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b15_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b16_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b17_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b18_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b19_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b20_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b21_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b22_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b23_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b24_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b25_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b26_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b27_cu_penilaian == nilai){
					jumlah++;
				}

				return jumlah;
			},
			jumlahPenilaianBKCU(nilai){
				var jumlah = 0;
					if(this.form.p2.p2a1_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a2_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a3_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a4_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a5_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a6_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a7_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a8_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a9_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a10_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2a11_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b12_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b13_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b14_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b15_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b16_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b17_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b18_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b19_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b20_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b21_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b22_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b23_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b24_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b25_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b26_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p2.p2b27_bkcu_penilaian == nilai){
					jumlah++;
				}

				return jumlah;
			},
		},
		computed: {
			
		}
	}
</script>
