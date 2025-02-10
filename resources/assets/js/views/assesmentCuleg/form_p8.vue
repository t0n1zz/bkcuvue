<template>
	<div>

		<div class="card bg-danger card-body"
			v-if="form.p7.a11_cu_penilaian == null && form.p7.a11_cu_keterangan == null && mode != 'penilaianBkcu' && mode != 'lihat'">
			<h6 class="mb-0">Maaf, anda tidak bisa melanjutkan mengisi perspektif ini sebelum melengkapi perspektif
				sebelumnya.</h6>
		</div>

		<div
			v-if="form.p7.a11_cu_penilaian != null && form.p7.a11_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
			<form-filter :cuTabName="cuTabName" :bkcuTabName="bkcuTabName" :jumlahPenilaianCU="jumlahPenilaianCU"
				:jumlahPenilaianBKCU="jumlahPenilaianBKCU" @changeTabCU="changeTabCU"
				@changeTabBKCU="changeTabBKCU"></form-filter>
		</div>

		<!-- A section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
				<div class="card card-body bg-info text-white"
					v-if="form.p7.a11_cu_penilaian != null && form.p7.a11_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="row justify-content-between">
						<div class="col-md-6">
							<h6 class="mb-0 font-weight-bold">8.	KEPEMIMPINAN YANG STRATEGIS DAN VISIONER</h6>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a1 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p8.a1_cu_penilaian == cuTabName || form.p8.a1_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p7.a11_cu_penilaian != null && form.p7.a11_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							8.1. Pusat Keputusan Utama</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p8.a1_cu_penilaian" @click1="form.p8.a1_cu_penilaian = 1"
									:subtitle1="'<ul><li>Tidak ada panduan kebijakan (MO)</li>    <li>Tidak ada perencanaan strategis</li></ul>'"
									@click2="form.p8.a1_cu_penilaian = 2"
									:subtitle2="'<ul><li>Pengurus memiliki wewenang dan tanggung jawab tertinggi untuk manajemen;</li>    <li>Panduan kebijakan tidak lengkap.</li>    <li>Rencana strategis dikembangkan tetapi tidak diterjemahkan ke dalam operasinya.</li></ul>'"
									@click3="form.p8.a1_cu_penilaian = 3"
									:subtitle3="'<ul><li>Pengurus memiliki wewenang dan tanggung jawab tertinggi untuk manajemen;</li>    <li>Kebijakan yang komprehensif diterapkan dan ditinjau setiap tahun;</li>    <li>Rencana strategis dikembangkan sepenuhnya dengan rencana aksi dan tindak lanjut melalui pemantauan pada pertemuan bulanan.</li></ul>'"
									@click4="form.p8.a1_cu_penilaian = 4"
									:subtitle4="'<p>Setelah berkonsultasi dengan manajemen:</p><ul>    <li>Pengurus memiliki wewenang dan tanggung jawab tertinggi untuk manajemen;</li>    <li>Kebijakan yang komprehensif diterapkan dan ditinjau setiap tahun;</li>    <li>Rencana strategis dikembangkan sepenuhnya dengan rencana aksi dan tindak lanjut melalui pemantauan pada pertemuan bulanan;</li>    <li>Rapat pengurus secara teratur meninjau lingkungan operasi eksternal dan tanggapan secara tepat waktu terhadap keadaan yang berubah.</li></ul>'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a1_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p8.a1_cu_keterangan"
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
										<penilaian-bkcu :form="form.p8.a1_bkcu_penilaian"
											@click1="form.p8.a1_bkcu_penilaian = 1"
											@click2="form.p8.a1_bkcu_penilaian = 2"
											@click3="form.p8.a1_bkcu_penilaian = 3"
											@click4="form.p8.a1_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p8.a1_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p8.a1_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p8.a2_cu_penilaian == cuTabName || form.p8.a2_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p8.a1_cu_penilaian != null && form.p8.a1_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							8.2. Sebagai Penasihat</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p8.a2_cu_penilaian" @click1="form.p8.a2_cu_penilaian = 1"
									:subtitle1="'<ul><li>Pengurus tidak bertindak dalam kapasitas sebagai penasehat untuk manajemen, komite, dan anggota;</li>    <li>Tidak menyampaikan kepada anggota tentang perlunya perubahan dalam kebijakan peminjaman, anggaran rumah tangga, dan bahkan strategi pasar;</li>    <li>Tidak bertindak sebagai kelompok penasihat bagi yang lain, tidak meninjau keputusan atau tindakan yang telah mereka ambil.</li></ul>'"
									@click2="form.p8.a2_cu_penilaian = 2"
									:subtitle2="'<ul><li>Pengurus bertindak dalam kapasitas sebagai penasehat untuk manajemen, komite, dan anggota;</li>    <li>Kurang menyampaikan kepada anggota tentang perlunya perubahan kebijakan perkreditan, anggaran rumah tangga, bahkan strategi pasar;</li>    <li>Kurang meninjau kembali keputusan atau tindakan yang telah mereka ambil.</li></ul>'"
									@click3="form.p8.a2_cu_penilaian = 3"
									:subtitle3="'<ul><li>Pengurus bertindak dalam kapasitas sebagai penasehat untuk manajemen, komite, dan anggota;</li>    <li>Menyampaikan kepada anggota tentang perlunya perubahan dalam kebijakan pinjaman, anggaran rumah tangga, dan bahkan strategi pasar;</li>    <li>Bertindak sebagai kelompok penasihat bagi orang lain, meninjau keputusan atau tindakan yang telah mereka ambil.</li></ul>'"
									@click4="form.p8.a2_cu_penilaian = 4"
									:subtitle4="'<ul><li>Pengurus bertindak dalam kapasitas sebagai penasehat untuk manajemen, komite, dan anggota;</li><li>Secara konsisten menyampaikan kepada anggota tentang perlunya perubahan dalam kebijakan pinjaman, anggaran rumah tangga, dan bahkan strategi pasar;</li><li>Bertindak sebagai kelompok penasihat bagi orang lain, meninjau keputusan atau tindakan yang telah mereka ambil.</li></ul>'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a2_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p8.a2_cu_keterangan"
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
										<penilaian-bkcu :form="form.p8.a2_bkcu_penilaian"
											@click1="form.p8.a2_bkcu_penilaian = 1"
											@click2="form.p8.a2_bkcu_penilaian = 2"
											@click3="form.p8.a2_bkcu_penilaian = 3"
											@click4="form.p8.a2_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p8.a2_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p8.a2_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p8.a3_cu_penilaian == cuTabName || form.p8.a3_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p8.a2_cu_penilaian != null && form.p8.a2_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							8.3. Perpetuating (mengabadikan-melanggengkan)</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p8.a3_cu_penilaian" @click1="form.p8.a3_cu_penilaian = 1"
									:subtitle1="'<ul><li>Tidak memastikan anggota pengurus dan komite untuk kompeten dan memahami peran dan tanggung jawab mereka;</li>    <li>Pengurus tidak mendorong dilakukan pelatihan dan pengembangan semua karyawan untuk memastikan efektivitas mereka;</li>    <li>Kurang dari 50% pengurus dan komite tidak mengikuti pelatihan kompetensi – CUDCC.</li></ul>'"
									@click2="form.p8.a3_cu_penilaian = 2"
									:subtitle2="'<ul><li>Pengurus dan komite memiliki pemahaman dan kompetensi yang terbatas tentang/dan dalam menjalankan peran dan tanggung jawabnya;</li>    <li>Pelatihan dan pengembangan yang terbatas bagi semua karyawan untuk memastikan keefektifannya;</li>    <li>50-79% pengurus dan komite telah menyelesaikan program kompetensi - CUDCC.</li></ul>'"
									@click3="form.p8.a3_cu_penilaian = 3"
									:subtitle3="'<ul><li>Memastikan kelangsungan CU dengan memastikan anggota pengurus dan komite kompeten dan memahami peran dan tanggung jawab mereka;</li>    <li>Pengurus memberikan pelatihan dan pengembangan bagi semua karyawan untuk memastikan efektivitas mereka;</li>    <li>80% atau lebih pengurus dan komite telah menyelesaikan program kompetensi - CUDCC.</li></ul>'"
									@click4="form.p8.a3_cu_penilaian = 4"
									:subtitle4="'<ul><li>Memastikan kelangsungan CU dengan memastikan pengurus dan komite kompeten dan memahami peran dan tanggung jawab mereka;</li>    <li>Pelatihan profesional berkelanjutan adalah suatu keharusan bagi semua karyawan untuk memastikan keefektifannya;</li>    <li>100% pengurus dan komite telah menyelesaikan program kursus kompetensi - CUDCC.</li></ul>'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a3_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p8.a3_cu_keterangan"
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
										<penilaian-bkcu :form="form.p8.a3_bkcu_penilaian"
											@click1="form.p8.a3_bkcu_penilaian = 1"
											@click2="form.p8.a3_bkcu_penilaian = 2"
											@click3="form.p8.a3_bkcu_penilaian = 3"
											@click4="form.p8.a3_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p8.a3_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p8.a3_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p8.a4_cu_penilaian == cuTabName || form.p8.a4_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p8.a3_cu_penilaian != null && form.p8.a3_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							8.4 Simbolik</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p8.a4_cu_penilaian" @click1="form.p8.a4_cu_penilaian = 1"
									:subtitle1="'<ul><li>Di bawah 50% dari pengurus adalah peminjam yang baik, penabung; sedangkan mayoritas adalah peminjam yang menunggak.</li>    <li>Pengurus mengutamakan kepentingan pribadi daripada fungsinya;</li>    <li>Pengurus tidak menjalankan fungsinya secara profesional dan berintegritas;</li>    <li>Pengurus bukanlah simbol kekuatan dan kepemimpinan dalam credit union dan komunitas.</li></ul>'"
									@click2="form.p8.a4_cu_penilaian = 2"
									:subtitle2="'<ul><li>Pengurus bersikap adil dalam kepemimpinan dan simbol kekuatan di CU dan masyarakat;</li>    <li>Menjalankan fungsinya dengan tingkat profesionalisme dan integritas tetapi masih tidak dapat menyeimbangkan kepentingan pribadi dengan fungsi pengurus;</li>    <li>75% dari pengurus adalah peminjam yang tidak menunggak, dan penabung yang baik.</li></ul>'"
									@click3="form.p8.a4_cu_penilaian = 3"
									:subtitle3="'<ul><li>Pengurus dianggap sebagai simbol kekuatan dan kepemimpinan dalam CU dan masyarakat;</li>    <li>Menjalankan fungsinya dengan profesional dan integritas serta nilai-nilai moral;</li>    <li>Pengurus adalah peminjam yang tidak menunggak dan penabung yang baik.</li></ul>'"
									@click4="form.p8.a4_cu_penilaian = 4"
									:subtitle4="'<ul><li>Pengurus dianggap sebagai simbol kekuatan dan kepemimpinan dalam CU dan masyarakat;</li>    <li>Pengurus menjalankan fungsinya dengan profesional dan integritas yang tinggi serta nilai-nilai moral yang tinggi;</li>    <li>Pengurus dan pihak terkait adalah peminjam dan penabung yang baik dan tidak menunggak.</li>    <li>Tetap berjuang untuk menjalankan praktik terbaik sebagai pemimpin koperasi.</li></ul>'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a4_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p8.a4_cu_keterangan"
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
										<penilaian-bkcu :form="form.p8.a4_bkcu_penilaian"
											@click1="form.p8.a4_bkcu_penilaian = 1"
											@click2="form.p8.a4_bkcu_penilaian = 2"
											@click3="form.p8.a4_bkcu_penilaian = 3"
											@click4="form.p8.a4_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p8.a4_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p8.a4_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p8.a5_cu_penilaian == cuTabName || form.p8.a5_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p8.a4_cu_penilaian != null && form.p8.a4_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							8.5 Fungsi Wali</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p8.a5_cu_penilaian" @click1="form.p8.a5_cu_penilaian = 1"
									:subtitle1="'<ul><li>Pengurus mengejar kepentingan individu dengan mengorbankan anggota (kepentingan pihak terkait)</li>    <li>Pengurus tidak memantau atau meninjau portofolio pinjaman</li>    <li>Tidak ada kebijakan manajemen risiko</li>    <li>Tunggakan pinjaman lebih dari 10% dari portofolio pinjaman.</li></ul>'"
									@click2="form.p8.a5_cu_penilaian = 2"
									:subtitle2="'<ul><li>Pengurus mewakili anggota pemegang saham tetapi terkadang mengejar kepentingan individu</li>    <li>Pemantauan dan peninjauan portofolio pinjaman dan investasi tidak teratur.</li>    <li>Kebijakan manajemen risiko terbatas</li>  <li>Tunggakan pinjaman sebesar 6 - 10% dari portofolio pinjaman</li></ul>'"
									@click3="form.p8.a5_cu_penilaian = 3"
									:subtitle3="'<ul><li>Pengurus secara konsisten mengutamakan kebutuhan anggota</li>    <li>Secara konsisten mengawasi dan memantau portofolio pinjaman</li>    <li>Mempertahankan kebijakan dengan penekanan khusus pada pembatasan/pengendalian risiko yang tidak semestinya</li>    <li>Tunggakan pinjaman adalah 3-5% dari portofolio pinjaman</li></ul>'"
									@click4="form.p8.a5_cu_penilaian = 4"
									:subtitle4="'<ul><li>Pengurus secara konsisten mengutamakan kebutuhan anggota</li>    <li>Secara konsisten mengawasi dan memantau portofolio pinjaman</li>    <li>Mempertahankan kebijakan dengan penekanan khusus pada pembatasan/pengendalian risiko yang tidak semestinya</li>    <li>Senantiasa berusaha untuk mencapai praktik terbaik dalam kinerja fungsi wali</li>    <li>Tunggakan pinjaman sebesar s.d. 2% dari portofolio pinjaman</li></ul>'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a5_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p8.a5_cu_keterangan"
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
										<penilaian-bkcu :form="form.p8.a5_bkcu_penilaian"
											@click1="form.p8.a5_bkcu_penilaian = 1"
											@click2="form.p8.a5_bkcu_penilaian = 2"
											@click3="form.p8.a5_bkcu_penilaian = 3"
											@click4="form.p8.a5_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p8.a5_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p8.a5_bkcu_rekomendasi"
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
					v-if="form.p8.a5_cu_penilaian != null && form.p8.a5_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
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
			this.$emit('saveSingle', 'p8');
		},
		prev() {
			this.$emit('prev');
		},
		next() {
			this.$emit('next');
		},

		skorCUA() {
			var jumlah = (this.form.p8.a1_cu_penilaian + this.form.p8.a2_cu_penilaian + this.form.p8.a3_cu_penilaian +
				this.form.p8.a4_cu_penilaian + this.form.p8.a5_cu_penilaian) / 1;
			this.$emit('skorCUA', jumlah);
			return jumlah;
		},

		skorBKCUA() {
			var jumlah = (this.form.p8.a1_bkcu_penilaian + this.form.p8.a2_bkcu_penilaian + this.form.p8.a3_bkcu_penilaian +
				this.form.p8.a4_bkcu_penilaian + this.form.p8.a5_bkcu_penilaian) / 1;
			this.$emit('skorBKCUA', jumlah);
			return jumlah;
		}, 
		
		jumlahPenilaianCU(nilai) {
			var jumlah = 0;
			if (this.form.p8.a1_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p8.a2_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p8.a3_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p8.a4_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p8.a5_cu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},
		jumlahPenilaianBKCU(nilai) {
			var jumlah = 0;
			if (this.form.p8.a1_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p8.a2_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p8.a3_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p8.a4_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p8.a5_bkcu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},
	},
	computed: {

	}
}
</script>
