<template>
	<div>

		<div class="card bg-danger card-body" v-if="form.p3.p3b26_cu_penilaian == null && form.p3.p3b26_cu_keterangan == null">
			<h6 class="mb-0">Maaf, anda tidak bisa melanjutkan mengisi perspektif ini sebelum melengkapi perspektif sebelumnya.</h6>
		</div>

		<div v-if="form.p3.p3b26_cu_penilaian !=null && form.p3.p3b26_cu_keterangan !=null">
			<form-filter 
			:cuTabName="cuTabName" 
			:bkcuTabName="bkcuTabName"
			:jumlahPenilaianCU="jumlahPenilaianCU"
			:jumlahPenilaianBKCU="jumlahPenilaianBKCU" 
			@changeTabCU="changeTabCU" 
			@changeTabBKCU="changeTabBKCU"
			></form-filter>
		</div>
		
		<!-- A section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
			<div class="card card-body bg-info text-white" v-if="form.p3.p3b26_cu_penilaian !=null && form.p3.p3b26_cu_keterangan !=null"> 
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">A. KEPEMIMPINAN – PENGURUS YANG BERPENGETAHUAN DAN TERLIBAT AKTIF</h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>
								Skor CU: {{ skorCUA() }} / 
								Bobot Skor CU: {{ bobotCUA() }}% 
							</li>
							<li>
								Skor BKCU: {{ skorBKCUA() }} / 	
								Bobot Skor BKCU: {{ bobotBKCUA() }}% 
							</li>
						</ul>	
					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- a1 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4a1_cu_penilaian == cuTabName || form.p4.p4a1_bkcu_penilaian == bkcuTabName">
			<div class="card border-info" v-if="form.p3.p3b26_cu_penilaian !=null && form.p3.p3b26_cu_keterangan !=null">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						1. Pusat Keputusan Yang Utama</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4a1_cu_penilaian" 
								@click1="form.p4.p4a1_cu_penilaian = 1"
								:subtitle1="'<ul><li>Tidak ada manual kebijakan</li><li>Tidak ada rencana strategis (SP)</li></ul>'"
								@click2="form.p4.p4a1_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Pengurus memiliki kewenangan dan tanggung jawab penuh terhadap manajemen</li><li>Manual kebijakan tidak lengkap</li><li>Rencana strategis (SP) dikembangkan tetapi tidak diterjemahkan ke dalam pelaksanaannya</li></ul>'"
								@click3="form.p4.p4a1_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Pengurus memiliki kewenangan dan tanggung jawab penuh terhadap manajemen</li><li>Kebijakan yang komprehensif berlaku dan dikaji setiap tahun</li><li>Rencana strategis (SP) dikembangkan secara penuh dengan rencana tindakan dan tindak lanjut melalui pemantauan pada pertemuan bulanan</li></ul>'"
								@click4="form.p4.p4a1_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Dalam konsultasi dengan manajemen:</li><li>Pengurus memiliki kewenangan dan tanggung jawab penuh terhadap manajeme</li><li>Kebijakan yang komprehensif berlaku tercetak dan dikaji setiap tahu</li><li>Rencana strategis (SP) dikembangkan secara penuh dengan rencana tindakan dan tindak lanjut melalui pemantauan pada pertemuan bulana</li><li>Pengurus secara rutin mengkaji dampak eksternal pada lingkungan dan  cepat tanggap terhadap situasi yang berubah-ubah</li></ul>'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a1_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a1_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4a1_bkcu_penilaian" 
										@click1="form.p4.p4a1_bkcu_penilaian = 1"
										@click2="form.p4.p4a1_bkcu_penilaian = 2" 
										@click3="form.p4.p4a1_bkcu_penilaian = 3" 
										@click4="form.p4.p4a1_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a1_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a1_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4a1_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4a2_cu_penilaian == cuTabName || form.p4.p4a2_bkcu_penilaian == bkcuTabName">
			<div class="card border-info" v-if="form.p4.p4a1_cu_penilaian !=null && form.p4.p4a1_cu_keterangan !=null">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						2. Peran Penasehat (advisory)</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4a2_cu_penilaian" 
								@click1="form.p4.p4a2_cu_penilaian = 1"
								:subtitle1="'<ul><li>Pengurus tidak bertindak dalam kapasitas selaku penasihat terhadap manajemen, dan anggota</li><li>Tidak memberi nasihat kepada anggota mengenai kebutuhan menyangkut perubahan kebijakan pinjaman, ART dan strategi pemasaran</li><li>Tidak bertindak selaku kelompok penasihat bagi kelompok lainnya, tidak mengkaji kebijakan atau tindakan yang diambil</li></ul>'"
								@click2="form.p4.p4a2_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Pengurus bertindak dalam kapasitas selaku penasihat terhadap manajemen, dan anggota</li><li>Kurang memberi masukan kepada anggota mengenai kebutuhan untuk perubahan dalam kebijakan menyangkut pinjaman, ART dan strategi pemasaran</li><li>Kurang mengkaji keputusan atau tindakan yang diambil</li></ul>'"
								@click3="form.p4.p4a2_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Pengurus bertindak dalam kapasitas selaku penasihat terhadap manajemen, dan anggota</li><li>Memberi masukan kepada anggota mengenai kebutuhan untuk perubahan dalam kebijakan menyangkut pinjaman, ART dan strategi pemasaran</li><li>Bertindak selaku kelompok penasihat bagi kelompok lainnya,  mengkaji kebijakan atau tindakan yang diambil</li></ul>'"
								@click4="form.p4.p4a2_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Pengurus bertindak dalam kapasitas selaku penasihat terhadap manajemen, dan anggota</li><li>Secara konsisten memberi masukan kepada anggota mengenai kebutuhan untuk perubahan dalam kebijakan menyangkut pinjaman, ART dan strategi pemasaran</li><li>Bertindak selaku kelompok penasihat bagi kelompok lainnya,  secara konsisten mengkaji kebijakan atau tindakan yang diambil</li></ul>'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a2_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a2_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4a2_bkcu_penilaian" 
										@click1="form.p4.p4a2_bkcu_penilaian = 1"
										@click2="form.p4.p4a2_bkcu_penilaian = 2" 
										@click3="form.p4.p4a2_bkcu_penilaian = 3" 
										@click4="form.p4.p4a2_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a2_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a2_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4a2_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4a3_cu_penilaian == cuTabName || form.p4.p4a3_bkcu_penilaian == bkcuTabName">
			<div class="card border-info" v-if="form.p4.p4a2_cu_penilaian !=null && form.p4.p4a2_cu_keterangan !=null">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						3. Peran Pengabadian (Perpetuating)</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4a3_cu_penilaian" 
								@click1="form.p4.p4a3_cu_penilaian = 1"
								:subtitle1="'<ul><li>Tidak ada jaminan bahwa Pengurus kompeten dan paham akan peran dan tanggung jawabnya</li><li>Pengurus tidak mendorong dibuatnya pelatihan dan pembangan bagi semua staf untuk menjamin efektivitas</li><li>Kurang dari 50% anggota Pengurus tidak pernah mengikuti pelatihan kompetensi (CUDCC = Credit Union Director’s and ManagersCompetency Course)</li></ul>'"
								@click2="form.p4.p4a3_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Pengurus memiliki pemahaman dan kompetensi yang terbatas dalam menjalankan peran dan tanggung jawabnya</li><li>Pelatihan dan pengembangan bagi semua staf untuk menjamin efektivitas masih terbatas</li><li>50 - 79% anggota Pengurus sudah menyelesaikan program pelatihan kompetensi (CUDCC)</li></ul>'"
								@click3="form.p4.p4a3_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Menunjang keberlanjutan CU dengan memastikan bahwa Pengurus paham dan kompeten menjalankan peran dan tanggung jawabnya</li><li>Pengurus mensyaratkan pelatihan dan pengembangan bagi semua staf untuk menjamin efektivitas secara terbatas</li><li>80% anggota Pengurus sudah menyelesaikan program pelatihan kompetensi (CUDCC)</li></ul>'"
								@click4="form.p4.p4a3_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Menunjang keberlanjutan CU dengan memastikan bahwa Pengurus paham dan kompeten menjalankan peran dan tanggung jawabnya</li><li>Pelatihan profesional yang berkelanjutan wajib bagi semua staf untuk menjamin efektivitas secara terbatas</li><li>100% anggota Pengurus sudah menyelesaikan program pelatihan kompetensi (CUDCC)</li></ul>'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a3_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a3_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4a3_bkcu_penilaian" 
										@click1="form.p4.p4a3_bkcu_penilaian = 1"
										@click2="form.p4.p4a3_bkcu_penilaian = 2" 
										@click3="form.p4.p4a3_bkcu_penilaian = 3" 
										@click4="form.p4.p4a3_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a3_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a3_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4a3_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4a4_cu_penilaian == cuTabName || form.p4.p4a4_bkcu_penilaian == bkcuTabName">
			<div class="card border-info" v-if="form.p4.p4a3_cu_penilaian !=null && form.p4.p4a3_cu_keterangan !=null">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						4. Fungsi Wali</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4a4_cu_penilaian" 
								@click1="form.p4.p4a4_cu_penilaian = 1"
								:subtitle1="'<ul><li>Pengurus mengejar kepentingan pribadi dengan biaya dari anggota (atau pihak terkait)</li><li>Tidak memantau atau mengkaji portofolio pinjaman</li><li>Tidak ada kebijakan tentang manajemen risiko</li><li>Pelanggaran sehubungan dengan pinjaman lebih dari 10% terhadap portofolio pinjaman</li></ul>'"
								@click2="form.p4.p4a4_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Pengurus mewakili anggota, tetapi terkadang mendorong terpenuhinya kepentingan pribadi</li><li>Pemantauan dan kajian yang tidak menentu terhadap portofolio pinjaman dan investasi</li><li>Kebijakan tentang manajemen risiko masih terbatas</li><li>Pelanggaran sehubungan dengan pinjaman berkisar antara 6 - 10% terhadap portofolio pinjaman</li></ul>'"
								@click3="form.p4.p4a4_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Pengurus secara konsisten mengutamakan kebutuhan para anggota</li><li>Secara konsisten memantau dan mengawasi portofolio pinjaman </li><li>Mempertahankan kebijakan dengan penekanan khusus untuk membatasi/ mengontrol terjadinya risiko yang tidak semesti nya terjadi</li><li>Pelanggaran sehubungan dengan pinjaman berkisar antara 3 - 5% terhadap portofolio pinjaman</li></ul>'"
								@click4="form.p4.p4a4_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Pengurus secara konsisten mengutamakan kebutuhan para anggota</li><li>Secara konsisten memantau dan mengawasi portofolio pinjaman </li><li>Mempertahankan kebijakan dengan penekanan khusus untuk membatasi/ mengontrol terjadinya risiko yang tidak semesti nya terjadi</li><li>Secara terus menerus berupaya menjalankan kinerja dengan praktik terbaik dalam fungsinya selaku wali</li><li>Pelanggaran sehubungan dengan pinjaman 2% ke bawah terhadap portofolio pinjaman</li></ul>'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a4_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a4_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4a4_bkcu_penilaian" 
										@click1="form.p4.p4a4_bkcu_penilaian = 1"
										@click2="form.p4.p4a4_bkcu_penilaian = 2" 
										@click3="form.p4.p4a4_bkcu_penilaian = 3" 
										@click4="form.p4.p4a4_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a4_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a4_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4a4_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4a5_cu_penilaian == cuTabName || form.p4.p4a5_bkcu_penilaian == bkcuTabName">
			<div class="card border-info" v-if="form.p4.p4a4_cu_penilaian !=null && form.p4.p4a4_cu_keterangan !=null">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						5. Sebagai Simbol</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4a5_cu_penilaian" 
								@click1="form.p4.p4a5_cu_penilaian = 1"
								:subtitle1="'<ul><li>Di bawah 50% Pengurus adalah penabung dan peminjam, dan kebanyakan merupakan penunggak</li><li>Kepentingan pribadi Pengurus lebih diutamakan daripada fungsinya</li><li>Tidak menjalankan fungsinya secara profesional dan integritas yang tinggi</li><li>Pengurus tidak menjadi simbol kekuatan dan kepemimpinan dalam CU dan masyarakat</li></ul>'"
								@click2="form.p4.p4a5_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Pengurus bersikap adil dalam kepemimpinannya dan kekuatannya terlihat dalam CU dan masyarakat</li><li>Menunjukkan fungsinya dengan tingkat profesionalisme dan integritas tetapi masih belum mampu menyeimbangkan antara kepentingan pribadi dengan fungsi-fungsi kepengurusan</li><li>75% Pengurus adalah peminjam yang baik, penabung aktif dan tidak menunggak pembayaran</li></ul>'"
								@click3="form.p4.p4a5_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Pengurus dipandang sebagai simbol kekuatan dan kepemimpinan dalam CU dan masyarakat</li><li>Menunjukkan fungsinya dengan profesionalisme dan integritas serta nilai-nilai moral</li><li>Pengurus yang meminjam tidak pernah menunggak dan merupakan penabung yang aktif</li></ul>'"
								@click4="form.p4.p4a5_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Pengurus dipandang sebagai simbol kekuatan dan kepemimpinan dalam CU dan masyarakat</li><li>Menunjukkan fungsinya dengan profesionalisme dan integritas serta nilai-nilai moral yang tinggi</li><li>Pengurus yang meminjam tidak pernah menunggak dan merupakan penabung yang aktif</li><li>Terus menerus berupaya melakukan praktik terbaik selaku pemimpin CU</li></ul>'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a5_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a5_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4a5_bkcu_penilaian" 
										@click1="form.p4.p4a5_bkcu_penilaian = 1"
										@click2="form.p4.p4a5_bkcu_penilaian = 2" 
										@click3="form.p4.p4a5_bkcu_penilaian = 3" 
										@click4="form.p4.p4a5_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a5_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a5_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4a5_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4a6_cu_penilaian == cuTabName || form.p4.p4a6_bkcu_penilaian == bkcuTabName">
			<div class="card border-info" v-if="form.p4.p4a5_cu_penilaian !=null && form.p4.p4a5_cu_keterangan !=null">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						6. Komposisi dan Komitmen</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4a6_cu_penilaian" 
								@click1="form.p4.p4a6_cu_penilaian = 1"
								:subtitle1="'<ul><li>Keanggotaan dengan keterbatasan keragaman di bidang kerja dan keahlian</li><li>Ditarik dari spektrum keanggotaan yang sempit</li><li>Pengalaman terbatas atau tidak terkait</li><li>Komitmen rendah terhadap keberhasilan organisasi, visi, misi, pertemuan-pertemuan jarang terjadi dan atau sedikit orang yang hadir</li></ul>'"
								@click2="form.p4.p4a6_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Ada keragaman di bidang kerja</li><li>Keanggotaan mewakili beberapa segmen yang berbeda</li><li>Komitmen terhadap keberhasilan organisasi, visi, misi, dan perilaku yang sesuai</li><li>Pertemuan-pertemuan rutin dan bertujuan pasti direncanakan secara baik dan ada kehadiran yang konsisten</li></ul>'"
								@click3="form.p4.p4a6_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Keragaman yang baik di bidang kerja dan keahlian</li><li>Keanggotaan mewakili semua segmen</li><li>Komitmen yang baik terhadap keberhasilan organisasi, visi, misi, dan perilaku yang sesuai</li><li>Pertemuan-pertemuan rutin dan bertujuan pasti direncanakan secara baik dan ada kehadiran yang konsisten</li></ul>'"
								@click4="form.p4.p4a6_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Keanggotaan dari berbagai bidang kerja dan keahlian dan ditarik dari spektrum penuh berdasarkan segmen pasar</li><li>Program fungsional keahlian terkait dengan isi</li><li>Kemauan yang tinggi dan dibuktikan dengan catatan tentang kegiatan pembelajaran mengenai CU dan mengatasi persoalan-persoalannya</li><li>Komitmen luar biasa terhadap keberhasilan, visi dan misi CU</li><li>Mengadakan pertemuan per orang secara rutin, menghadiri pertemuan dengan baik, adanya pertemuan berkala</li></ul>'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a6_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a6_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4a6_bkcu_penilaian" 
										@click1="form.p4.p4a6_bkcu_penilaian = 1"
										@click2="form.p4.p4a6_bkcu_penilaian = 2" 
										@click3="form.p4.p4a6_bkcu_penilaian = 3" 
										@click4="form.p4.p4a6_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a6_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a6_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4a6_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4a7_cu_penilaian == cuTabName || form.p4.p4a7_bkcu_penilaian == bkcuTabName">
			<div class="card border-info" v-if="form.p4.p4a6_cu_penilaian !=null && form.p4.p4a6_cu_keterangan !=null">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						7. Bimbingan dan Pengarahan (Coaching)</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4a7_cu_penilaian" 
								@click1="form.p4.p4a7_cu_penilaian = 1"
								:subtitle1="'Pengurus tidak melatih, membantu, menginspirasi, memotivasi dan mendorong, tidak berorientasi pada tindakan dan tidak mengevaluasi manajemen dan anggota'"
								@click2="form.p4.p4a7_cu_penilaian = 2" 
								:subtitle2="'Sangat sedikit Pengurus yang melatih, membantu, menginspirasi, memotivasi dan mendorong, berorientasi pada tindakan tetapi tidak mengevaluasi manajemen dan anggota'"
								@click3="form.p4.p4a7_cu_penilaian = 3" 
								:subtitle3="'Pengurus yang melatih, membantu, menginspirasi, memotivasi dan mendorong, berorientasi pada tindakan dan mengevaluasi proses berdasarkan ukuran kinerja'"
								@click4="form.p4.p4a7_cu_penilaian = 4" 
								:subtitle4="'Pengurus yang melatih, membantu, menginspirasi, memotivasi dan mendorong, berorientasi pada tindakan dan mengevaluasi proses berdasarkan ukuran-ukuran kinerja dalam praktik terbaik'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a7_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a7_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4a7_bkcu_penilaian" 
										@click1="form.p4.p4a7_bkcu_penilaian = 1"
										@click2="form.p4.p4a7_bkcu_penilaian = 2" 
										@click3="form.p4.p4a7_bkcu_penilaian = 3" 
										@click4="form.p4.p4a7_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a7_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a7_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4a7_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4a8_cu_penilaian == cuTabName || form.p4.p4a8_bkcu_penilaian == bkcuTabName">
			<div class="card border-info" v-if="form.p4.p4a7_cu_penilaian !=null && form.p4.p4a7_cu_keterangan !=null">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						8. Tata Kelola</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4a8_cu_penilaian" 
								@click1="form.p4.p4a8_cu_penilaian = 1"
								:subtitle1="'<ul><li>Peranan Pengurus dan Manejer tidak dijabarkan secara jelas</li><li>Pengurus mengintervensi fungsi managemen</li><li>Pengurus tidak meneliti anggaran atau mengauditnya, tidak menetapkan target kinerja dan memastikan bahwa GM akuntabel atau tidak berjalan sesuai prosedur formal; fungsi-fungsi eksekutif, bendahara dan Pengurus tidak jelas</li><li>Besarnya jumlah Pengurus mencerminkan kepentingan pribadi</li></ul>'"
								@click2="form.p4.p4a8_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Penjabaran yang terbatas atas berbagai peran Pengurus dan para manejer</li><li>Pengurus <u>tidak</u> berfungsi sesuai AD/ART</li><li>Kajian keuangan terbatas, kadang-kadang menetapkan arah kelembagaan dan target, <u>tidak</u> memantau kemungkinan timbulnya konflik kepentingan, mencermati para auditor, atau mengkaji pemenuhan peraturan</li><li>Upaya terbatas untuk mengontrol besarnya jumlah pengurus; <u>tidak secara rutin</u> mengkaji kinerja GM dan tidak siap memecat atau mempekerjakan GM</li></ul>'"
								@click3="form.p4.p4a8_cu_penilaian = 3" 
								:subtitle3="'<ul><li>• Peranan pengurus dan manejer secara jelas dijabarkan dan setiap pihak menjalankan perannya tanpa intervensi</li><li>Pengurus mengkaji anggaran, mengaudit, pemenuhan peraturan </li><li>Jumlah pengurus ditentukan untuk efektivitas maksimal dengan proses pencalonan yang teliti</li><li>Pengurus menjabarkan kembali target kinerja dan secara aktif mendorong GM untuk memenuhi target</li><li>Kajian tahunan terhadap kinerja GM</li></ul>'"
								@click4="form.p4.p4a8_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Pengurus dan manejer menunjukkan kerja tim tingkat tingi dan bekerjasama secara baik dengan peran yang jelas</li><li>Pengurus sepenuhnya memahami dan memenuhi tugas-tugasnya</li><li>Jumlah pengurus ditetapkan untuk efektivitas maksimal melalui proses pencalonan yang teliti</li><li>Pengurus secara aktif menjabarkan target kinerja dan memastikan GM akuntabel</li><li>Pengurus diberdayakan dan disiapkan untuk mempekerjakan atau memecat GM</li></ul>'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a8_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a8_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4a8_bkcu_penilaian" 
										@click1="form.p4.p4a8_bkcu_penilaian = 1"
										@click2="form.p4.p4a8_bkcu_penilaian = 2" 
										@click3="form.p4.p4a8_bkcu_penilaian = 3" 
										@click4="form.p4.p4a8_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a8_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a8_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4a8_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4a9_cu_penilaian == cuTabName || form.p4.p4a9_bkcu_penilaian == bkcuTabName">
			<div class="card border-info" v-if="form.p4.p4a8_cu_penilaian !=null && form.p4.p4a8_cu_keterangan !=null">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						9. Evaluasi Kinerja</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4a9_cu_penilaian" 
								@click1="form.p4.p4a9_cu_penilaian = 1"
								:subtitle1="'Tidak ada evaluasi kinerja secara berkala'"
								@click2="form.p4.p4a9_cu_penilaian = 2" 
								:subtitle2="'Kinerja dievaluasi tetapi tidak menggunakan alat evaluasi kinerja yang baku bagi pengurus secara individual maupun secara keseluruhan sebagai tim, Tidak jelas apakah hasil-hasil evaluasi digunakan untuk meningkatkan kinerja pengurus'"
								@click3="form.p4.p4a9_cu_penilaian = 3" 
								:subtitle3="'Kinerja pengurus secara berkala dievaluasi dengan menggunakan alat evaluasi yang baku bagi pengurus secara individual maupun keseluruhan sebagai tim, Hasil-hasil evaluasi dipakai untuk meningkatkan kinerja dan efisiensi pengurus'"
								@click4="form.p4.p4a9_cu_penilaian = 4" 
								:subtitle4="'Kinerja pengurus secara berkala dievaluasi dengan menggunakan alat evaluasi yang baku bagi pengurus secara individual maupun keseluruhan sebagai tim, Hasil-hasil evaluasi dipakai untuk meningkatkan kinerja dan efisiensi pengurus. Secara konsiten berupaya menjalankan praktik terbaik dalam menggunakan standar-standar penyelenggaraan'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a9_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a9_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4a9_bkcu_penilaian" 
										@click1="form.p4.p4a9_bkcu_penilaian = 1"
										@click2="form.p4.p4a9_bkcu_penilaian = 2" 
										@click3="form.p4.p4a9_bkcu_penilaian = 3" 
										@click4="form.p4.p4a9_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a9_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a9_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4a9_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4a10_cu_penilaian == cuTabName || form.p4.p4a10_bkcu_penilaian == bkcuTabName">
			<div class="card border-info" v-if="form.p4.p4a9_cu_penilaian !=null && form.p4.p4a9_cu_keterangan !=null">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						10. Kesetaraan Gender Dalam Kepemimpinan</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4a10_cu_penilaian" 
								@click1="form.p4.p4a10_cu_penilaian = 1"
								:subtitle1="'Tidak ada anggota perempuan dalam kepengurusan'"
								@click2="form.p4.p4a10_cu_penilaian = 2" 
								:subtitle2="'Pengurus perempuan kurang dari 10%'"
								@click3="form.p4.p4a10_cu_penilaian = 3" 
								:subtitle3="'30% pengurus adalah perempuan'"
								@click4="form.p4.p4a10_cu_penilaian = 4" 
								:subtitle4="'50% pengurus adalah perempuan dan aktif'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a10_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a10_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4a10_bkcu_penilaian" 
										@click1="form.p4.p4a10_bkcu_penilaian = 1"
										@click2="form.p4.p4a10_bkcu_penilaian = 2" 
										@click3="form.p4.p4a10_bkcu_penilaian = 3" 
										@click4="form.p4.p4a10_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a10_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4a10_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4a10_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
			<div class="card card-body bg-warning text-white" v-if="form.p4.p4a10_cu_penilaian !=null && form.p4.p4a10_cu_keterangan !=null">
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">B. KEPUASAN STAF</h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>
								Skor CU: {{ skorCUB() }} / 
								Bobot Skor CU: {{ bobotCUB() }}% 
								</li>
							<li>
								Skor BKCU: {{ skorBKCUB() }} / 
								Bobot Skor BKCU: {{ bobotBKCUB() }}% 
							</li>
						</ul>	
					</div>
				</div>	
			</div>
		</div>
		</transition>

		<!-- b11 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4b11_cu_penilaian == cuTabName || form.p4.p4b11_bkcu_penilaian == bkcuTabName">
			<div class="card border-warning" v-if="form.p4.p4a10_cu_penilaian !=null && form.p4.p4a10_cu_keterangan !=null">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						11. Rancangan Kerja (Job Design)</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4b11_cu_penilaian" 
								@click1="form.p4.p4b11_cu_penilaian = 1"
								:subtitle1="'<ul><li>Ketidakjelasan peran dan tanggung jawab; terlalu banyak tanggung jawab; tanggung jawab yang tumpang tindih</li><li>Uraian tugas tidak ada</li></ul>'"
								@click2="form.p4.p4b11_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Posisi yang ada untuk sebagian besar peran kunci; hanya sedikit yang kosong</li><li>Kebanyakan posisi kunci dijabarkan dengan baik dan memiliki uraian tugas yang statis</li><li>Beberapa akuntabilitas yang tidak jelas atau peran dan tanggung jawab yang tumpang tindih</li></ul>'"
								@click3="form.p4.p4b11_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Semua peran sudah terkait dengan posisi</li><li>Masing-masing staf sudah memiliki peran dan tanggung jawab yang terjabar secara baik dengan adanya kegiatan yang jelas dan keterkaitan dengan pelaporan; tumpang tindih hanya sedikit</li><li>Uraian tugas secara terus menerus dijabarkan kembali supaya ada perkembangan kelembagaan dan staf dalam pekerjaannya</li></ul>'"
								@click4="form.p4.p4b11_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Semua peran sesuai dengan posisi yang didedikasikan</li><li>Semua staf memiliki peran utama yang jelas dan harus dipenuhi beserta bidang-bidang kewenangannya, dapat berinisiatif dan berupaya membuat perubahan</li><li>Peran utama dijabarkan sehubungan dengan produk akhir dan pelayanan yang akan diberikan</li><li>Semua staf memiliki kemampuan untuk mendefinisikan kegiatan-kegiatan dan diberdayakan untuk terus menerus menguji kembali pekerjaannya</li></ul>'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b11_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b11_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4b11_bkcu_penilaian" 
										@click1="form.p4.p4b11_bkcu_penilaian = 1"
										@click2="form.p4.p4b11_bkcu_penilaian = 2" 
										@click3="form.p4.p4b11_bkcu_penilaian = 3" 
										@click4="form.p4.p4b11_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b11_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b11_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4b11_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4b12_cu_penilaian == cuTabName || form.p4.p4b12_bkcu_penilaian == bkcuTabName">
			<div class="card border-warning" v-if="form.p4.p4b11_cu_penilaian !=null && form.p4.p4b11_cu_keterangan !=null">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						12. Rekruitmen dan Seleksi</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4b12_cu_penilaian" 
								@click1="form.p4.p4b12_cu_penilaian = 1"
								:subtitle1="'Tidak ada kebijakan tentang rekrutmen, tidak panduan untuk membuat keputusan yang kuat mengenai cara mempekerjakan staf; kebijakan mempekerjakan staf sering dipolitisir'"
								@click2="form.p4.p4b12_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Kebijakan tentang rekrutmen yang berlaku tidak memadai</li><li>Orang-orang yang bertanggung jawab untuk mempekerjakan staf memiliki sedikit pengetahuan tentang aturan dasar ketenagakerjaan yang resmi</li><li>Tidak ada panduan pembuatan keputusan yang kuat untuk mempekerjakan staf</li><li>Tidak mengantisipasi kebutuhan di masa mendatang dalam mempekerjakan staf</li></li>'"
								@click3="form.p4.p4b12_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Kebijakan tentang rekrutmen berlaku untuk membantu upaya mencari calon karyawan yang handal untuk diseleksi</li><li>Orang-orang yang bertanggung jawab untuk mempekerjakan staf memiliki pengetahuan memadai tentang aturan dasar ketenagakerjaan yang resmi</li><li>Ada panduan pembuatan keputusan yang kuat untuk mempekerjakan staf</li><li>Kebutuhan di masa mendatang dalam mempekerjakanstaf terantisipasi</li></ul>'"
								@click4="form.p4.p4b12_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Ada kebijakan tentang rekrutmen yang jelas untuk mendapatkan calon staf yang handal untuk diseleksi</li><li>Orang-orang yang bertanggung jawab untuk mempekerjakan staf memiliki banyak pengetahuan tentang aturan dasar ketenagakerjaan yang resmi</li><li>Ada panduan yang konsisten tentang pembuatan keputusan yang kuat untuk mempekerjakan staf</li><li>Kebutuhan di masa mendatang dalam mempekerjakan staf selalu terantisipasi</li><li>Selalu berupaya melakukan praktik terbaik menyangkut pengembangan SDM</li></ul>'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b12_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b12_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4b12_bkcu_penilaian" 
										@click1="form.p4.p4b12_bkcu_penilaian = 1"
										@click2="form.p4.p4b12_bkcu_penilaian = 2" 
										@click3="form.p4.p4b12_bkcu_penilaian = 3" 
										@click4="form.p4.p4b12_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b12_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b12_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4b12_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4b13_cu_penilaian == cuTabName || form.p4.p4b13_bkcu_penilaian == bkcuTabName">
			<div class="card border-warning" v-if="form.p4.p4b12_cu_penilaian !=null && form.p4.p4b12_cu_keterangan !=null">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						13. Kompensasi</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4b13_cu_penilaian" 
								@click1="form.p4.p4b13_cu_penilaian = 1"
								:subtitle1="'Tidak ada sistem kompensasi yang berlaku'"
								@click2="form.p4.p4b13_cu_penilaian = 2" 
								:subtitle2="'Program kompensasi yang berlaku terbatas; tidak tersedia kajian berkala mengenai tingkat gaji serta biaya-biaya'"
								@click3="form.p4.p4b13_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Program kompensasi dijabarkan secara baik yang memadukan antara gaji dan keuntungan sebagai bagian dari gambaran besar yang berlaku</li><li>Ada kajian tentang tingkat gaji serta biaya-biaya</li><li>Mengikuti standar minimum industri</li></ul>'"
								@click4="form.p4.p4b13_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Program kompensasi yang kompetitif dijabarkan secara baik yang memadukan antara gaji dan keuntungan sebagai gambaran besar yang berlaku</li><li>Kajian berkala tentang tingkat gaji serta biaya-biaya secara konsisten dilakukan dengan menerapkan standar-standar industri</li><li>Secara terus menerus berupaya menarik dan mempertahankan karyawan yang bermutu baik</li></ul>'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b13_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b13_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4b13_bkcu_penilaian" 
										@click1="form.p4.p4b13_bkcu_penilaian = 1"
										@click2="form.p4.p4b13_bkcu_penilaian = 2" 
										@click3="form.p4.p4b13_bkcu_penilaian = 3" 
										@click4="form.p4.p4b13_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b13_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b13_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4b13_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4b14_cu_penilaian == cuTabName || form.p4.p4b14_bkcu_penilaian == bkcuTabName">
			<div class="card border-warning" v-if="form.p4.p4b13_cu_penilaian !=null && form.p4.p4b13_cu_keterangan !=null">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						14. Pembagian Tingkatan Staf</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4b14_cu_penilaian" 
								@click1="form.p4.p4b14_cu_penilaian = 1"
								:subtitle1="'<ul><li>Kebutuhan-kebutuhan staf yang nyata tidak diketahui</li><li>Pergantian staf yang tinggi</li><li>Banyak posisi yang tidak terisi</li></ul>'"
								@click2="form.p4.p4b14_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Pemahaman tentang kebutuhan staf terbatas</li><li>Posisi-posisi penting tidak terisi</li><li>Pergantian staf berada pada tingkat menengah.</li></ul>'"
								@click3="form.p4.p4b14_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Tingkat penempatan staf akurat mencerminkan kebutuhan lembaga</li><li>Semua posisi terisi</li><li>Sedikit pergantian staf</li></ul>'"
								@click4="form.p4.p4b14_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Tingkat penempatan staf akurat mencerminkan kebutuhan lembaga</li><li>Semua posisi terisi</li><li>Sedikit pergantian staf</li><li>Terus menerus berupaya menemukan dan mempertahankan mutu staf yang tinggi.</li></ul>'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b14_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b14_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4b14_bkcu_penilaian" 
										@click1="form.p4.p4b14_bkcu_penilaian = 1"
										@click2="form.p4.p4b14_bkcu_penilaian = 2" 
										@click3="form.p4.p4b14_bkcu_penilaian = 3" 
										@click4="form.p4.p4b14_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b14_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b14_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4b14_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4b15_cu_penilaian == cuTabName || form.p4.p4b15_bkcu_penilaian == bkcuTabName">
			<div class="card border-warning" v-if="form.p4.p4b14_cu_penilaian !=null && form.p4.p4b14_cu_keterangan !=null">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						15. Tujuan Kinerja</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4b15_cu_penilaian" 
								@click1="form.p4.p4b15_cu_penilaian = 1"
								:subtitle1="'Tidak ada proses manajemen kinerja yang berlaku'"
								@click2="form.p4.p4b15_cu_penilaian = 2" 
								:subtitle2="'Menajemen kinerja yang terbatas dijalankan dengan tidak ada kaitan yang jelasterhadap pengakuan dan penghargaan atas usaha yang dilakukan'"
								@click3="form.p4.p4b15_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Proses manajemen kinerja yang komprehensif berlaku</li><li>Tujuan jelas untuk membantu staf menunjukkan kinerja terbaik sesuai kemampuannya dengan memberi umpan balik, pengakuan atas usaha yang dilakukan dan panduan terkait dengan kinerja untuk memenuhi kebutuhan staf</li></ul>'"
								@click4="form.p4.p4b15_cu_penilaian = 4" 
								:subtitle4="'Proses manajemen kinerja dengan praktik terbaik berlaku'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b15_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b15_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4b15_bkcu_penilaian" 
										@click1="form.p4.p4b15_bkcu_penilaian = 1"
										@click2="form.p4.p4b15_bkcu_penilaian = 2" 
										@click3="form.p4.p4b15_bkcu_penilaian = 3" 
										@click4="form.p4.p4b15_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b15_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b15_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4b15_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4b16_cu_penilaian == cuTabName || form.p4.p4b16_bkcu_penilaian == bkcuTabName">
			<div class="card border-warning" v-if="form.p4.p4b15_cu_penilaian !=null && form.p4.p4b15_cu_keterangan !=null">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						16. Standar-standar penilaian</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4b16_cu_penilaian" 
								@click1="form.p4.p4b16_cu_penilaian = 1"
								:subtitle1="'Tidak ada standart manajemen kinerja yang berlaku'"
								@click2="form.p4.p4b16_cu_penilaian = 2" 
								:subtitle2="'Standart penilaian terbaik dilakukan dengan tidak  ada kaitan yg jelas terhadap pengakuan dan  penghargaan atas kerja'"
								@click3="form.p4.p4b16_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Proses standart penilaian kinerja yg menyeluruh dan diterapkan</li><li>Tujuan jelas untuk membantu staf menunjukkan kinerja terbaik dengan memberikan umpan balik pengakuan atas usha atau kinerja mengacu pada pedoman utk memenuhi kebutuhan staf</li></ul>'"
								@click4="form.p4.p4b16_cu_penilaian = 4" 
								:subtitle4="'Standar penilaian diterapkan sebagai best practise'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b16_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b16_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4b16_bkcu_penilaian" 
										@click1="form.p4.p4b16_bkcu_penilaian = 1"
										@click2="form.p4.p4b16_bkcu_penilaian = 2" 
										@click3="form.p4.p4b16_bkcu_penilaian = 3" 
										@click4="form.p4.p4b16_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b16_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b16_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4b16_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4b17_cu_penilaian == cuTabName || form.p4.p4b17_bkcu_penilaian == bkcuTabName">
			<div class="card border-warning" v-if="form.p4.p4b16_cu_penilaian !=null && form.p4.p4b16_cu_keterangan !=null">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						17. Kinerja sebagai nilai bersama</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4b17_cu_penilaian" 
								@click1="form.p4.p4b17_cu_penilaian = 1"
								:subtitle1="'<ul><li>Staf dipekerjakan, diberi penghargaan dan dipromosikan untuk menjalankan serangkaian tugas/ kewajiban atau untuk alasan yang lebih jelas</li><li>Keputusan yang dibuat kebanyakan atas dasar ”keberanian”</li></ul>'"
								@click2="form.p4.p4b17_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Kontribusi kinerja jarang dipakai dan bisa menjadi salah satu dari banyak kriteria untuk mempekerjakan, memberi penghargaan dan mempromosikan staf</li><li>Data kinerja digunakan untuk membuat keputusan.</li></ul>'"
								@click3="form.p4.p4b17_cu_penilaian = 3" 
								:subtitle3="'<ul><li> Kontribusi staf bagi dampak sosial, keuangan dan kelembagaan secara khusus dianggap sebagai kriteria keunggulan dalam membuat keputusan-keputusan untuk mem-pekerjakan, memberi penghargaan dan mempromosikan</li><li>Keputusan-keputusan penting menyangkut organisasi didasari pada pertimbangan tentang kinerja yang komprehensif</li></ul>'"
								@click4="form.p4.p4b17_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Semua staf secara sistematis dipekerjakan, diberi penghargaan dan dipromosikan atas kontribusinya secara kolektif terhadap dampak sosial, keuangan, dan kelembagaan</li><li>Proses dan pengambilan keputusan dari hari ke hari didasari pada pertimbangan kinerja secara komprehensif</li><li>Terus menerus mengacu kepada kinerja.</li></ul>'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b17_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b17_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4b17_bkcu_penilaian" 
										@click1="form.p4.p4b17_bkcu_penilaian = 1"
										@click2="form.p4.p4b17_bkcu_penilaian = 2" 
										@click3="form.p4.p4b17_bkcu_penilaian = 3" 
										@click4="form.p4.p4b17_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b17_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b17_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4b17_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4b18_cu_penilaian == cuTabName || form.p4.p4b18_bkcu_penilaian == bkcuTabName">
			<div class="card border-warning" v-if="form.p4.p4b17_cu_penilaian !=null && form.p4.p4b17_cu_keterangan !=null">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						18. Kecakapan Tim</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4b18_cu_penilaian" 
								@click1="form.p4.p4b18_cu_penilaian = 1"
								:subtitle1="'<ul><li>Para staf memiliki latar belakang dan pengalaman yang sangat terbatas</li><li>Minat dan kemampuan staf terbatas pada pekerjaan yang ada saat ini; kurang mampu menyelesaikan persoalan jika ada masalah</li><li>Bergantung kepada  CEO/GM/Manajer</li></ul>'"
								@click2="form.p4.p4b18_cu_penilaian = 2" 
								:subtitle2="'<ul><li>Ada beberapa variasi latar belakang dan pengalaman staf</li><li>Kecakapan yang baik, termasuk sejumlah kemampuan menyelesaikan persoalan jika ada masalah</li><li>Berminat atas pekerjaan, melebihi pekerjaan yang ditanganinya sekarang dan dalam keberhasilan misi lembaga</li></ul>'"
								@click3="form.p4.p4b18_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Staf memiliki berbagai latar belakang dan pengalaman serta terampil dalam banyak hal.</li><li>Sangat mampu dan berkomitmen terhadap misi dan strategi</li><li>Mau belajar dan mengembangkan diri serta menyelesaikan tanggung jawab yang bertambah banyak</li></ul>'"
								@click4="form.p4.p4b18_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Staf berasal dari berbagai latar belakang dan pengalaman serta memiliki keterampilan yang luar biasa</li><li>Sangat mampu menjalankan berbagai peran, berkomitmen terhadap misi, strategi maupun pembelajaran yang terus menerus</li><li>Sangat mau dan mampu menjalankan proyek khusus dan bekerja sama lintas bagian</li><li>Staf adalah sumber gagasan dan merupakan daya gerak peningkatan dan inovasi</li></ul>'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b18_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b18_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4b18_bkcu_penilaian" 
										@click1="form.p4.p4b18_bkcu_penilaian = 1"
										@click2="form.p4.p4b18_bkcu_penilaian = 2" 
										@click3="form.p4.p4b18_bkcu_penilaian = 3" 
										@click4="form.p4.p4b18_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b18_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b18_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4b18_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4b19_cu_penilaian == cuTabName || form.p4.p4b19_bkcu_penilaian == bkcuTabName">
			<div class="card border-warning" v-if="form.p4.p4b18_cu_penilaian !=null && form.p4.p4b18_cu_keterangan !=null">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						19. Jenjang Karir</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4b19_cu_penilaian" 
								@click1="form.p4.p4b19_cu_penilaian = 1"
								:subtitle1="'Sistem penilaian kerja dan pengembangan kemampuan  staf tidak jelas; tidak ada kepedulian terhadap ambisi pribadi staf'"
								@click2="form.p4.p4b19_cu_penilaian = 2" 
								:subtitle2="'Sistem penilaian kerja dan pengembangan kemampuan  staf  jelas dan jarang terkait dengan ambisi pribadi staf maupun ambisi bersama dalam CU'"
								@click3="form.p4.p4b19_cu_penilaian = 3" 
								:subtitle3="'Sistem penilaian kerja dan pengembangan kemampuan  staf terkait dengan ambisi pribadi staf dan ambisi bersama dalam CU'"
								@click4="form.p4.p4b19_cu_penilaian = 4" 
								:subtitle4="'Sistem penilaian kerja dan pengembangan terkait dengan ambisi pribadi staf dan ambisi bersama dalam CU, CU secara aktif berupaya menyediakan lingkungan kerja yang adalah ”karir bukan pekerjaan”'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b19_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b19_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4b19_bkcu_penilaian" 
										@click1="form.p4.p4b19_bkcu_penilaian = 1"
										@click2="form.p4.p4b19_bkcu_penilaian = 2" 
										@click3="form.p4.p4b19_bkcu_penilaian = 3" 
										@click4="form.p4.p4b19_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b19_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b19_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4b19_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p4.p4b20_cu_penilaian == cuTabName || form.p4.p4b20_bkcu_penilaian == bkcuTabName">
			<div class="card border-warning" v-if="form.p4.p4b19_cu_penilaian !=null && form.p4.p4b19_cu_keterangan !=null">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						20. Program Pengembangan</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p4.p4b20_cu_penilaian" 
								@click1="form.p4.p4b20_cu_penilaian = 1"
								:subtitle1="'Tidak ada program pengembangan wawasan staf'"
								@click2="form.p4.p4b20_cu_penilaian = 2" 
								:subtitle2="'Wawasan staf dikembangkan dari waktu ke waktu tetapi tidak secara berkala, tidak ada peraturan tertulis mengenai program pengembangan staf'"
								@click3="form.p4.p4b20_cu_penilaian = 3" 
								:subtitle3="'<ul><li>Wawasan staf dikembangkan dari waktu ke waktu melalui program-program pelatihan, pengarahan dan pengembangan bakat</li><li>Ada kebijakan tentang pengembangan kompetensi, termasuk pelatihan internal dan eksternal, rapat kerja, simposium dan seminar</li></ul>'"
								@click4="form.p4.p4b20_cu_penilaian = 4" 
								:subtitle4="'<ul><li>Wawasan staf dikembangkan secara terus menerus dan diperbaharui melalui program-program pelatihan, pengarahan dan pengembangan bakat</li><li>Ada kebijakan tentang pengembangan kompetensi secara proaktif, termasuk pelatihan internal dan eksternal, rapat kerja, simposium dan seminar</li><li>Selalu berupaya melaksanakan praktik terbaik dalam program pengembangan</li></ul>'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b20_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b20_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p4.p4b20_bkcu_penilaian" 
										@click1="form.p4.p4b20_bkcu_penilaian = 1"
										@click2="form.p4.p4b20_bkcu_penilaian = 2" 
										@click3="form.p4.p4b20_bkcu_penilaian = 3" 
										@click4="form.p4.p4b20_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b20_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p4.p4b20_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p4.p4b20_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
			<div class="card card-body" v-if="form.p4.p4b20_cu_penilaian !=null && form.p4.p4b20_cu_keterangan !=null">
				<div class="text-center d-none d-md-block">
					<button type="button" class="btn btn-light" @click.prevent="prev">
						<i class="icon-arrow-left13"></i> Kembali
					</button>

					<button type="button" class="btn btn-warning" v-if="$route.meta.mode != 'lihat'" @click.prevent="saveDraft"> 
						<i class="icon-floppy-disk"></i> Simpan Draft
					</button>

					<button type="button" class="btn btn-primary" @click.prevent="next">
						<i class="icon-arrow-right14"></i> Selanjutnya
					</button>
				</div>
				<div class="d-block d-md-none">
					<button type="button" class="btn btn-primary btn-block" @click.prevent="next">
						<i class="icon-arrow-right14"></i> Selanjutnya
					</button>

					<button type="button" class="btn btn-warning btn-block" v-if="$route.meta.mode != 'lihat'" @click.prevent="saveDraft">
						<i class="icon-floppy-disk"></i> Simpan Draft
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
		props: ['form','mode','jumlahIndikator','bobotSkor'],
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
		created(){
		},
		watch: {
    },
		methods: {
			changeTabCU(value){
				if(this.$route.meta.mode == 'lihat'){
					this.bkcuTabName = 'semua';
					this.cuTabName = value;
				}
			},
			changeTabBKCU(value){
				if(this.$route.meta.mode == 'lihat'){
					this.cuTabName = 'semua';
					this.bkcuTabName = value;
				}
			},
			saveDraft(){
				this.$emit('saveDraft');
			},
			prev(){
				this.$emit('prev');
			},
			next(){
				this.$emit('next');
			},
			skorCUA(){
				var jumlah = (
					this.form.p4.p4a1_cu_penilaian +
					this.form.p4.p4a2_cu_penilaian +
					this.form.p4.p4a3_cu_penilaian +
					this.form.p4.p4a4_cu_penilaian +
					this.form.p4.p4a5_cu_penilaian +
					this.form.p4.p4a6_cu_penilaian +
					this.form.p4.p4a7_cu_penilaian +
					this.form.p4.p4a8_cu_penilaian +
					this.form.p4.p4a9_cu_penilaian +
					this.form.p4.p4a10_cu_penilaian) / 1;
				this.$emit('skorCUA', jumlah);
				return jumlah;
			},
			bobotCUA(){
				var jumlah = this.$options.filters.round((((
					this.form.p4.p4a1_cu_penilaian +
					this.form.p4.p4a2_cu_penilaian +
					this.form.p4.p4a3_cu_penilaian +
					this.form.p4.p4a4_cu_penilaian +
					this.form.p4.p4a5_cu_penilaian +
					this.form.p4.p4a6_cu_penilaian +
					this.form.p4.p4a7_cu_penilaian +
					this.form.p4.p4a8_cu_penilaian +
					this.form.p4.p4a9_cu_penilaian +
					this.form.p4.p4a10_cu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotCUA', jumlah);
				return jumlah;
			},
			skorBKCUA(){
				var jumlah = (
					this.form.p4.p4a1_bkcu_penilaian +
					this.form.p4.p4a2_bkcu_penilaian +
					this.form.p4.p4a3_bkcu_penilaian +
					this.form.p4.p4a4_bkcu_penilaian +
					this.form.p4.p4a5_bkcu_penilaian +
					this.form.p4.p4a6_bkcu_penilaian +
					this.form.p4.p4a7_bkcu_penilaian +
					this.form.p4.p4a8_bkcu_penilaian +
					this.form.p4.p4a9_bkcu_penilaian +
					this.form.p4.p4a10_bkcu_penilaian) / 1;
				this.$emit('skorBKCUA', jumlah);
				return jumlah;
			},
			bobotBKCUA(){
				var jumlah = this.$options.filters.round((((
					this.form.p4.p4a1_bkcu_penilaian +
					this.form.p4.p4a2_bkcu_penilaian +
					this.form.p4.p4a3_bkcu_penilaian +
					this.form.p4.p4a4_bkcu_penilaian +
					this.form.p4.p4a5_bkcu_penilaian +
					this.form.p4.p4a6_bkcu_penilaian +
					this.form.p4.p4a7_bkcu_penilaian +
					this.form.p4.p4a8_bkcu_penilaian +
					this.form.p4.p4a9_bkcu_penilaian +
					this.form.p4.p4a10_bkcu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotBKCUA', jumlah);
				return jumlah;
			},
			skorCUB(){
				var jumlah = (
					this.form.p4.p4b11_cu_penilaian + 
					this.form.p4.p4b12_cu_penilaian + 
					this.form.p4.p4b13_cu_penilaian + 
					this.form.p4.p4b14_cu_penilaian + 
					this.form.p4.p4b15_cu_penilaian + 
					this.form.p4.p4b16_cu_penilaian + 
					this.form.p4.p4b17_cu_penilaian + 
					this.form.p4.p4b18_cu_penilaian + 
					this.form.p4.p4b19_cu_penilaian + 
					this.form.p4.p4b20_cu_penilaian) / 1;
				this.$emit('skorCUB', jumlah);
				return jumlah;
			},
			bobotCUB(){
				var jumlah = this.$options.filters.round((((
					this.form.p4.p4b11_cu_penilaian + 
					this.form.p4.p4b12_cu_penilaian + 
					this.form.p4.p4b13_cu_penilaian + 
					this.form.p4.p4b14_cu_penilaian + 
					this.form.p4.p4b15_cu_penilaian + 
					this.form.p4.p4b16_cu_penilaian + 
					this.form.p4.p4b17_cu_penilaian + 
					this.form.p4.p4b18_cu_penilaian + 
					this.form.p4.p4b19_cu_penilaian + 
					this.form.p4.p4b20_cu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotCUB', jumlah);
				return jumlah;
			},
			skorBKCUB(){
				var jumlah = (
					this.form.p4.p4b11_bkcu_penilaian + 
					this.form.p4.p4b12_bkcu_penilaian + 
					this.form.p4.p4b13_bkcu_penilaian + 
					this.form.p4.p4b14_bkcu_penilaian + 
					this.form.p4.p4b15_bkcu_penilaian + 
					this.form.p4.p4b16_bkcu_penilaian + 
					this.form.p4.p4b17_bkcu_penilaian + 
					this.form.p4.p4b18_bkcu_penilaian + 
					this.form.p4.p4b19_bkcu_penilaian + 
					this.form.p4.p4b20_bkcu_penilaian) / 1;
				this.$emit('skorBKCUB', jumlah);
				return jumlah;
			},
			bobotBKCUB(){
				var jumlah = this.$options.filters.round((((
					this.form.p4.p4b11_bkcu_penilaian + 
					this.form.p4.p4b12_bkcu_penilaian + 
					this.form.p4.p4b13_bkcu_penilaian + 
					this.form.p4.p4b14_bkcu_penilaian + 
					this.form.p4.p4b15_bkcu_penilaian + 
					this.form.p4.p4b16_bkcu_penilaian + 
					this.form.p4.p4b17_bkcu_penilaian + 
					this.form.p4.p4b18_bkcu_penilaian + 
					this.form.p4.p4b19_bkcu_penilaian + 
					this.form.p4.p4b20_bkcu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotBKCUB', jumlah);
				return jumlah;
			},
			jumlahPenilaianCU(nilai){
				var jumlah = 0;
				if(this.form.p4.p4a1_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a2_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a3_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a4_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a5_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a6_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a7_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a8_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a9_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a10_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b11_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b12_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b13_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b14_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b15_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b16_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b17_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b18_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b19_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b20_cu_penilaian == nilai){
					jumlah++;
				}

				return jumlah;
			},
			jumlahPenilaianBKCU(nilai){
				var jumlah = 0;
					if(this.form.p4.p4a1_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a2_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a3_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a4_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a5_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a6_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a7_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a8_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a9_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4a10_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b11_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b12_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b13_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b14_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b15_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b16_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b17_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b18_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b19_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p4.p4b20_bkcu_penilaian == nilai){
					jumlah++;
				}

				return jumlah;
			},
		},
		computed: {
			
		}
	}
</script>
