<template>
	<div>

		<div class="card bg-danger card-body"
			v-if="form.p1.a10_cu_penilaian == null && form.p1.a10_cu_keterangan == null && mode != 'penilaianBkcu' && mode != 'lihat'">
			<h6 class="mb-0">Maaf, anda tidak bisa melanjutkan mengisi perspektif ini sebelum melengkapi perspektif
				sebelumnya.</h6>
		</div>

		<div
			v-if="form.p1.a10_cu_penilaian != null && form.p1.a10_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
			<form-filter :cuTabName="cuTabName" :bkcuTabName="bkcuTabName" :jumlahPenilaianCU="jumlahPenilaianCU"
				:jumlahPenilaianBKCU="jumlahPenilaianBKCU" @changeTabCU="changeTabCU"
				@changeTabBKCU="changeTabBKCU"></form-filter>
		</div>

		<!-- A section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
				<div class="card card-body bg-info text-white"
					v-if="form.p1.a10_cu_penilaian != null && form.p1.a10_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="row justify-content-between">
						<div class="col-md-6">
							<h6 class="mb-0 font-weight-bold">2. TRANSPARANSI</h6>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a1 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p2.a1_cu_penilaian == cuTabName || form.p2.a1_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p1.a10_cu_penilaian != null && form.p1.a10_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							2.1. Pinjaman oleh insiders (orang dalam) kepada anggota</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p2.a1_cu_penilaian" @click1="form.p2.a1_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan.'"
									@click2="form.p2.a1_cu_penilaian = 2"
									:subtitle2="'Meminjam dari anggota dan pemasok oleh pejabat dan karyawan pada umumnya dilarang tetapi tidak ditentukan dalam kebijakan'"
									@click3="form.p2.a1_cu_penilaian = 3"
									:subtitle3="'Meminjam dari anggota dan pemasok oleh petugas dan karyawan pada umumnya dilarang sebagaimana diatur dalam kebijakan. Kebijakan tersebut diungkapkan dan pemantauan yang tidak teratur dilakukan oleh Pengawas.'"
									@click4="form.p2.a1_cu_penilaian = 4"
									:subtitle4="'Meminjam dari anggota dan pemasok oleh petugas dan karyawan pada umumnya dilarang sebagaimana diatur dalam kebijakan. Kebijakan ini diungkapkan sepenuhnya kepada anggota dan publik, secara teratur dipantau oleh Pengawas dan tidak ditemukan pelanggaran.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a1_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.a1_cu_keterangan"
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
										<penilaian-bkcu :form="form.p2.a1_bkcu_penilaian"
											@click1="form.p2.a1_bkcu_penilaian = 1"
											@click2="form.p2.a1_bkcu_penilaian = 2"
											@click3="form.p2.a1_bkcu_penilaian = 3"
											@click4="form.p2.a1_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p2.a1_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p2.a1_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p2.a2_cu_penilaian == cuTabName || form.p2.a2_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p2.a1_cu_penilaian != null && form.p2.a1_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							2.2. Layanan ke CU lain atau lembaga keuangan yang berkonflik kepentingan</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p2.a2_cu_penilaian" @click1="form.p2.a2_cu_penilaian = 1"
									:subtitle1="`Tidak ada kebijakan. Tidak adanya kepedulian pada praktik terbaik dan terdapat banyak pelanggaran.`"
									@click2="form.p2.a2_cu_penilaian = 2"
									:subtitle2="`Ini adalah praktik etis yang diketahui bahwa tidak ada pengurus, pejabat, dan karyawan yang boleh bekerja di CU lain atau melakukan bisnis yang membawa konflik kepentingan. 'Bisnis' tersebut dapat mencakup pembiayaan, pemasaran, layanan atau praktik profesi. Tidak ada dalam kebijakan, dan ada pelanggaran.`"
									@click3="form.p2.a2_cu_penilaian = 3"
									:subtitle3="`Tidak ada pengurus, pejabat, dan karyawan yang bekerja di CU lain atau melakukan bisnis yang membawa konflik kepentingan. 'Bisnis' tersebut dapat mencakup pembiayaan, pemasaran, layanan atau praktik profesi. Kebijakan ini bersifat tertutup, dan pengawasan yang tidak teratur dilakukan oleh Pengawas. Tidak ada pelanggaran.`"
									@click4="form.p2.a2_cu_penilaian = 4"
									:subtitle4="`Sesuai kebijakan, tidak ada pengurus, pejabat, dan karyawan yang bekerja di CU lain atau melakukan bisnis yang membawa konflik kepentingan. 'Bisnis' tersebut dapat mencakup pembiayaan, pemasaran, layanan, atau praktik profesi. Kebijakan ini sepenuhnya diungkapkan kepada anggota dan publik, dipantau secara berkala oleh Pengawas dan tidak ditemukan pelanggaran.`"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a2_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.a2_cu_keterangan"
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
										<penilaian-bkcu :form="form.p2.a2_bkcu_penilaian"
											@click1="form.p2.a2_bkcu_penilaian = 1"
											@click2="form.p2.a2_bkcu_penilaian = 2"
											@click3="form.p2.a2_bkcu_penilaian = 3"
											@click4="form.p2.a2_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p2.a2_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p2.a2_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p2.a3_cu_penilaian == cuTabName || form.p2.a3_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p2.a2_cu_penilaian != null && form.p2.a2_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							2.3. Hubungan dengan Pesaing</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p2.a3_cu_penilaian" @click1="form.p2.a3_cu_penilaian = 1"
									:subtitle1="'Terdapat pelanggaran, dan tidak diatur dalam kode etik atau kebijakan.'"
									@click2="form.p2.a3_cu_penilaian = 2"
									:subtitle2="`<p>Tidak ada pengurus, petugas karyawan:</p> <ol type='a'><li>Terlibat dalam kegiatan apa pun yang bersaing dengan CU</li><li>Mengungkapkan semua rahasia lembaga yang khas bagi CU</li></ol><p>Tidak ada pelanggaran di tahun ini. Namun, disiplin ini tidak ada dalam kode etik atau kebijakan.</p>`"
									@click3="form.p2.a3_cu_penilaian = 3"
									:subtitle3="`<p>Tidak ada pengurus, petugas karyawan:</p><ol type='a'><li>Terlibat dalam kegiatan apa pun yang bersaing dengan CU</li><li>Mengungkapkan semua rahasia lembaga yang khas bagi CU</li></ol><p>Tidak ada pelanggaran dalam satu tahun terakhir. Disiplin ini merupakan bagian dari kode etik bisnis atau kebijakan.</p>`"
									@click4="form.p2.a3_cu_penilaian = 4"
									:subtitle4="`<p>Tidak ada pengurus, petugas karyawan:</p><ol type='a'><li>Terlibat dalam kegiatan apa pun yang bersaing dengan CU</li><li>Mengungkapkan semua rahasia lembaga yang khas bagi CU</li></ol><p>Tidak ada pelanggaran dalam 3 tahun terakhir. Disiplin ini merupakan bagian dari kode etik bisnis atau kebijakan.</p>`"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a3_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.a3_cu_keterangan"
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
										<penilaian-bkcu :form="form.p2.a3_bkcu_penilaian"
											@click1="form.p2.a3_bkcu_penilaian = 1"
											@click2="form.p2.a3_bkcu_penilaian = 2"
											@click3="form.p2.a3_bkcu_penilaian = 3"
											@click4="form.p2.a3_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p2.a3_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p2.a3_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p2.a4_cu_penilaian == cuTabName || form.p2.a4_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p2.a3_cu_penilaian != null && form.p2.a3_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							2.4. Hubungan dengan Anggota – konflik kepentingan</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p2.a4_cu_penilaian" @click1="form.p2.a4_cu_penilaian = 1"
									:subtitle1="'Koperasi tidak memiliki kebijakan yang melarang pejabat dan karyawan untuk terlibat dalam situasi yang menimbulkan konflik kepentingan. Pengawas tidak secara teratur memantau konflik kepentingan antara pejabat/karyawan dan anggota, serta tidak membuat laporan penilaian berbagai resiko yang timbul akibat konflik kepentingan.'"
									@click2="form.p2.a4_cu_penilaian = 2"
									:subtitle2="'Koperasi tidak memiliki kebijakan yang melarang pejabat dan karyawan untuk terlibat dalam situasi yang menimbulkan konflik kepentingan. Pengawas tidak secara teratur memantau konflik kepentingan antara pejabat / karyawan dan anggota, serta membuat laporan penilaian berbagai resiko yang timbul akibat konflik kepentingan.'"
									@click3="form.p2.a4_cu_penilaian = 3"
									:subtitle3="'Koperasi memiliki kebijakan yang melarang pejabat dan karyawan untuk terlibat dalam situasi yang menimbulkan konflik kepentingan. Pengawas tidak secara teratur memantau konflik kepentingan antara pejabat / karyawan dan anggota, serta membuat laporan penilaian berbagai resiko yang timbul akibat konflik kepentingan.'"
									@click4="form.p2.a4_cu_penilaian = 4"
									:subtitle4="'Koperasi memiliki kebijakan yang melarang pejabat dan karyawan untuk terlibat dalam situasi yang menimbulkan konflik kepentingan. Pengawas secara berkala memantau konflik kepentingan antara pejabat/karyawan dan anggota, memberikan laporan penilaian risiko yang mempengaruhi konflik tersebut.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a4_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.a4_cu_keterangan"
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
										<penilaian-bkcu :form="form.p2.a4_bkcu_penilaian"
											@click1="form.p2.a4_bkcu_penilaian = 1"
											@click2="form.p2.a4_bkcu_penilaian = 2"
											@click3="form.p2.a4_bkcu_penilaian = 3"
											@click4="form.p2.a4_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p2.a4_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p2.a4_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p2.a5_cu_penilaian == cuTabName || form.p2.a5_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p2.a4_cu_penilaian != null && form.p2.a4_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							2.5. Pengiklanan dan Pemasaran </h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p2.a5_cu_penilaian" @click1="form.p2.a5_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan, terjadi pelanggaran.'"
									@click2="form.p2.a5_cu_penilaian = 2"
									:subtitle2="'Koperasi mematuhi standar tertinggi periklanan keuangan sesuai dengan semua hukum dan peraturan yang berlaku. Iklan itu jujur dan mengandung informasi yang cukup tentang produk atau layanan sehingga konsumen diharapkan untuk melakukan pembelian yang cerdas sesuai iklan. Koperasi berpedoman pada kebenaran dalam pemberian pinjaman dan tindakan perlindungan konsumen sebagai suatu kebijakan.Tidak ada pedoman kebijakan.'"
									@click3="form.p2.a5_cu_penilaian = 3"
									:subtitle3="'Koperasi mematuhi standar tertinggi periklanan keuangan sesuai dengan semua hukum dan peraturan yang berlaku. Iklan itu jujur dan mengandung informasi yang cukup tentang produk atau layanan sehingga konsumen diharapkan untuk melakukan pembelian yang cerdas sesuai iklan. Koperasi berpedoman pada kebenaran dalam pemberian pinjaman dan tindakan perlindungan konsumen sebagai suatu kebijakan.Tidak ada pelanggaran yang terjadi menurut temuan dari Pengawas dalam 1 tahun terakhir.'"
									@click4="form.p2.a5_cu_penilaian = 4"
									:subtitle4="'Koperasi mematuhi standar tertinggi periklanan keuangan sesuai dengan semua hukum dan peraturan yang berlaku. Iklan itu jujur dan mengandung informasi yang cukup tentang produk atau layanan sehingga konsumen diharapkan untuk melakukan pembelian yang cerdas sesuai iklan. Koperasi berpedoman pada kebenaran dalam pemberian pinjaman dan tindakan perlindungan konsumen sebagai suatu kebijakan.Tidak ada pelanggaran yang terjadi menurut temuan dari Pengawas dalam 1 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a5_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.a5_cu_keterangan"
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
										<penilaian-bkcu :form="form.p2.a5_bkcu_penilaian"
											@click1="form.p2.a5_bkcu_penilaian = 1"
											@click2="form.p2.a5_bkcu_penilaian = 2"
											@click3="form.p2.a5_bkcu_penilaian = 3"
											@click4="form.p2.a5_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p2.a5_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p2.a5_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p2.a6_cu_penilaian == cuTabName || form.p2.a6_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p2.a5_cu_penilaian != null && form.p2.a5_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							2.6. Pinjaman Orang Dalam</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p2.a6_cu_penilaian" @click1="form.p2.a6_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan dan tidak ada pelaporan yang dibuat.'"
									@click2="form.p2.a6_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan bahwa semua pinjaman kepada orang-orang tertentu (terafiliasi) diungkap-kan dan tidak ada prosedur khusus untuk tinjauan menyeluruh pengurus atas semua transaksi pinjaman material yang melibatkan pengurus, pejabat, staf dan pihak-pihak terkait. Pelaporan dilakukan dalam 3 tahun terakhir'"
									@click3="form.p2.a6_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan bahwa semua pinjaman kepada orang-orang tertentu (terafiliasi) diungkapkan. Ada prosedur khusus untuk tinjauan menyeluruh atas semua transaksi pinjaman material yang melibatkan pengurus, pejabat, staf, dan pihak terkait. Diterapkan secara konsisten dalam satu tahun terakhir.'"
									@click4="form.p2.a6_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan bahwa semua pinjaman kepada orang-orang tertentu (terafiliasi) diungkapkan. Ada prosedur khusus untuk tinjauan menyeluruh atas semua transaksi pinjaman material yang melibatkan pengurus, pejabat, staf, dan pihak terkait. Diterapkan secara konsisten dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a6_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.a6_cu_keterangan"
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
										<penilaian-bkcu :form="form.p2.a6_bkcu_penilaian"
											@click1="form.p2.a6_bkcu_penilaian = 1"
											@click2="form.p2.a6_bkcu_penilaian = 2"
											@click3="form.p2.a6_bkcu_penilaian = 3"
											@click4="form.p2.a6_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a6_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p2.a6_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a6_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p2.a6_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p2.a7_cu_penilaian == cuTabName || form.p2.a7_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p2.a6_cu_penilaian != null && form.p2.a6_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							2.7. Keterlibatan dengan Partai Politik Eksternal</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p2.a7_cu_penilaian" @click1="form.p2.a7_cu_penilaian = 1"
									:subtitle1="'Ada insiden dimana pejabat atau karyawan yang bertindak atas nama CU yang telah berkontribusi, meminjamkan uang atau barang berharga kepada kandidat atau partai politik nasional atau lokal. Tidak diatur dalam kebijakan, tidak disebarluaskan dalam organisasi, dan tidak dipantau.'"
									@click2="form.p2.a7_cu_penilaian = 2"
									:subtitle2="'Tidak ada pejabat atau karyawan yang bertindak atas nama CU yang telah berkontribusi, meminjamkan uang atau barang berharga kepada kandidat atau partai politik nasional atau lokal. Hal ini termasuk juga penggunaan fasilitas, peralatan, persediaan, personel atau nama CU. Tidak diatur dalam kebijakan, tidak disebarluaskan dalam organisasi, dan tidak dipantau.'"
									@click3="form.p2.a7_cu_penilaian = 3"
									:subtitle3="'Tidak ada pejabat atau karyawan yang bertindak atas nama CU yang telah berkontribusi, meminjamkan uang atau barang berharga kepada kandidat atau partai politik nasional atau lokal. Hal ini termasuk juga penggunaan fasilitas, peralatan, persediaan, personel atau nama CU. Sudah diatur dalam kebijakan, diungkapkan sepenuhnya kepada anggota dan publik, dipantau secara tidak teratur oleh Pengawas dan tidak ditemukan pelanggaran.'"
									@click4="form.p2.a7_cu_penilaian = 4"
									:subtitle4="'Tidak ada pejabat atau karyawan yang bertindak atas nama CU yang telah berkontribusi, meminjamkan uang atau barang berharga kepada kandidat atau partai politik nasional atau lokal. Hal ini termasuk juga penggunaan fasilitas, peralatan, persediaan, personel atau nama CU. Ditetapkan dalam kebijakan, diungkapkan sepenuhnya kepada anggota dan publik, dipantau secara teratur oleh Pengawas dan tidak ditemukan pelanggaran.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a7_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.a7_cu_keterangan"
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
										<penilaian-bkcu :form="form.p2.a7_bkcu_penilaian"
											@click1="form.p2.a7_bkcu_penilaian = 1"
											@click2="form.p2.a7_bkcu_penilaian = 2"
											@click3="form.p2.a7_bkcu_penilaian = 3"
											@click4="form.p2.a7_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a7_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p2.a7_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a7_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p2.a7_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p2.a8_cu_penilaian == cuTabName || form.p2.a8_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p2.a7_cu_penilaian != null && form.p2.a7_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							2.8. Politik Internal</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p2.a8_cu_penilaian" @click1="form.p2.a8_cu_penilaian = 1"
									:subtitle1="'Pejabat atau karyawan secara terbuka berkampanye atau mempengaruhi anggota untuk memilih kandidat pada pemilihan Pengurus CU, regional, dan federasi nasional. Tidak ada kebijakan atau kesadaran dari konsekuensi itu.'"
									@click2="form.p2.a8_cu_penilaian = 2"
									:subtitle2="'Tidak ada petugas atau karyawan secara terbuka berkampanye atau mempengaruhi anggota untuk memilih kandidat pada pemilihan Pengurus CU, regional, dan federasi nasional. Tidak diatur dalam kebijakan, tidak disebarluaskan dalam organisasi, dan tidak dipantau.'"
									@click3="form.p2.a8_cu_penilaian = 3"
									:subtitle3="'Tidak ada petugas atau karyawan secara terbuka berkampanye atau mempengaruhi anggota untuk memilih kandidat pada pemilihan Pengurus CU, regional, dan federasi nasional. Diatur dalam kebijakan, disebarluaskan penuh kepada anggota dan publik, dipantau secara tidak rutin oleh Pengawas dan tidak ditemukan pelanggaran.'"
									@click4="form.p2.a8_cu_penilaian = 4"
									:subtitle4="'Tidak ada petugas atau karyawan secara terbuka berkampanye atau mempengaruhi anggota untuk memilih kandidat pada pemilihan Pengurus CU, regional, dan federasi nasional. Diatur dalam kebijakan, disebarluaskan penuh kepada anggota dan publik, dipantau secara rutin oleh Pengawas dan tidak ditemukan pelanggaran.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a8_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.a8_cu_keterangan"
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
										<penilaian-bkcu :form="form.p2.a8_bkcu_penilaian"
											@click1="form.p2.a8_bkcu_penilaian = 1"
											@click2="form.p2.a8_bkcu_penilaian = 2"
											@click3="form.p2.a8_bkcu_penilaian = 3"
											@click4="form.p2.a8_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a8_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p2.a8_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a8_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p2.a8_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p2.a9_cu_penilaian == cuTabName || form.p2.a9_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p2.a8_cu_penilaian != null && form.p2.a8_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							2.9. Merekomendasi Lembaga lain kepada Anggota</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p2.a9_cu_penilaian" @click1="form.p2.a9_cu_penilaian = 1"
									:subtitle1="'Ada insiden karyawan dan petugas menawarkan agen perumahan atau asuransi, broker saham, pengacara atau akuntan disebabkan oleh keterbatasan kesadaran pada implikasinya. Tidak ada kebijakan.'"
									@click2="form.p2.a9_cu_penilaian = 2"
									:subtitle2="'Tidak ada karyawan dan petugas menawarkan agen perumahan atau asuransi, broker saham, pengacara atau akuntan. Penawaran spesifik seperti ini dihindari. Sejumlah nama atau agen diberikan sebagai alternatif untuk anggota mempertimbangkannya. Tidak diatur dalam kebijakan, tidak disebarluaskan dalam organisasi, dan tidak dipantau.'"
									@click3="form.p2.a9_cu_penilaian = 3"
									:subtitle3="'Tidak ada karyawan dan petugas menawarkan agen perumahan atau asuransi, broker saham, pengacara atau akuntan. Penawaran spesifik seperti ini dihindari. Sejumlah nama atau agen diberikan sebagai alternatif untuk anggota mempertimbangkannya. Diatur dalam kebijakan, disebarluaskan penuh kepada anggota dan publik, dipantau secara tidak rutin oleh Pengawas dan tidak ditemukan pelanggaran.'"
									@click4="form.p2.a9_cu_penilaian = 4"
									:subtitle4="'Tidak ada karyawan dan petugas menawarkan agen perumahan atau asuransi, broker saham, pengacara atau akuntan. Penawaran spesifik seperti ini dihindari. Sejumlah nama atau agen diberikan sebagai alternatif untuk anggota mempertimbangkannya. Diatur dalam kebijakan, disebarluaskan penuh kepada anggota dan publik, dipantau secara rutin oleh Pengawas dan tidak ditemukan pelanggaran.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a9_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.a9_cu_keterangan"
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
										<penilaian-bkcu :form="form.p2.a9_bkcu_penilaian"
											@click1="form.p2.a9_bkcu_penilaian = 1"
											@click2="form.p2.a9_bkcu_penilaian = 2"
											@click3="form.p2.a9_bkcu_penilaian = 3"
											@click4="form.p2.a9_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a9_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p2.a9_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a9_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p2.a9_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p2.a10_cu_penilaian == cuTabName || form.p2.a10_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p2.a9_cu_penilaian != null && form.p2.a9_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							2.10. Perlakuan istimewa terhadap anggota atas rujukan orang dalam</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p2.a10_cu_penilaian" @click1="form.p2.a10_cu_penilaian = 1"
									:subtitle1="'Ada insiden perlakuan istimewa kepada anggota yang dirujuk oleh orang dalam, terkait tarif atau layanan pelanggan atau perhatian lain yang disukai, di luar yang diberikan kepada anggota lainnya. Tidak ada kebijakan dan tidak ada kesadaran akan implikasinya terhadap tata tata kelola yang baik.'"
									@click2="form.p2.a10_cu_penilaian = 2"
									:subtitle2="'Dalam keadaan apa pun, seorang anggota yang dirujuk oleh orang dalam, tidak diberikan perlakuan istimewa dalam bentuk apa pun yang berkaitan dengan tarif atau layanan pelanggan atau perhatian istimewa lainnya yang melampaui yang diberikan kepada anggota lainnya. Tidak diatur dalam kebijakan, tidak disebarluaskan dalam organisasi, tidak dipantau. '"
									@click3="form.p2.a10_cu_penilaian = 3"
									:subtitle3="'Dalam keadaan apa pun, seorang anggota yang dirujuk oleh orang dalam, tidak diberikan perlakuan istimewa dalam bentuk apa pun yang berkaitan dengan tarif atau layanan pelanggan atau perhatian istimewa lainnya yang melampaui yang diberikan kepada anggota lainnya. Diatur dalam kebijakan, disebarluaskan penuh kepada anggota dan publik, dipantau secara tidak rutin oleh Pengawas dan tidak ditemukan pelanggaran.'"
									@click4="form.p2.a10_cu_penilaian = 4"
									:subtitle4="'Dalam keadaan apa pun, seorang anggota yang dirujuk oleh orang dalam, tidak diberikan perlakuan istimewa dalam bentuk apa pun yang berkaitan dengan tarif atau layanan pelanggan atau perhatian istimewa lainnya yang melampaui yang diberikan kepada anggota lainnya. Diatur dalam kebijakan, disebarluaskan penuh kepada anggota dan publik, dipantau secara rutin oleh Pengawas dan tidak ditemukan pelanggaran.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a10_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.a10_cu_keterangan"
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
										<penilaian-bkcu :form="form.p2.a10_bkcu_penilaian"
											@click1="form.p2.a10_bkcu_penilaian = 1"
											@click2="form.p2.a10_bkcu_penilaian = 2"
											@click3="form.p2.a10_bkcu_penilaian = 3"
											@click4="form.p2.a10_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a10_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p2.a10_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a10_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p2.a10_bkcu_rekomendasi"
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
			<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p2.a11_cu_penilaian == cuTabName || form.p2.a11_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p2.a10_cu_penilaian != null && form.p2.a10_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							2.11. Mengungkap Konflik Kepentingan</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p2.a11_cu_penilaian" @click1="form.p2.a11_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan, adanya pelanggaran.'"
									@click2="form.p2.a11_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan yang membuat petugas atau karyawan mengungkapkan sepenuhnya kepentingan pribadi apa pun yang mungkin mereka miliki dalam pinjaman, proyek, atau properti yang menjadi subjek permohonan pinjaman. Pengungkapan konflik kepentingan didokumentasikan dalam satu tahun terakhir.'"
									@click3="form.p2.a11_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan yang membuat petugas atau karyawan mengungkapkan sepenuhnya kepentingan pribadi apa pun yang mungkin mereka miliki dalam pinjaman, proyek, atau properti yang menjadi subjek permohonan pinjaman. Pengungkapan konflik kepentingan didokumentasikan dalam satu tahun terakhir.'"
									@click4="form.p2.a11_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan yang membuat petugas atau karyawan mengungkapkan sepenuhnya kepentingan pribadi apa pun yang mungkin mereka miliki dalam pinjaman, proyek, atau properti yang menjadi subjek permohonan pinjaman. Pengungkapan konflik kepentingan didokumentasikan dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a11_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.a11_cu_keterangan"
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
										<penilaian-bkcu :form="form.p2.a11_bkcu_penilaian"
											@click1="form.p2.a11_bkcu_penilaian = 1"
											@click2="form.p2.a11_bkcu_penilaian = 2"
											@click3="form.p2.a11_bkcu_penilaian = 3"
											@click4="form.p2.a11_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a11_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p2.a11_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a11_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p2.a11_bkcu_rekomendasi"
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
			<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p2.a12_cu_penilaian == cuTabName || form.p2.a12_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p2.a11_cu_penilaian != null && form.p2.a11_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							2.12. Pengaruh terhadap Penilaian Independen</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p2.a12_cu_penilaian" @click1="form.p2.a12_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan, adanya pelanggaran.'"
									@click2="form.p2.a12_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan bahwa tidak boleh ada pengurus atau karyawan yang mempengaruhi atau mencoba untuk mempengaruhi melalui paksaan, pemerasan, atau penyuapan pembangunan, pelaporan, hasil, atau tinjauan dari penilaian real estate dicari sehubungan dengan pinjaman hipotek. Tidak ada pelanggaran yang terjadi dalam satu tahun terakhir.'"
									@click3="form.p2.a12_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan bahwa tidak boleh ada pengurus atau karyawan yang mempengaruhi atau mencoba untuk mempengaruhi melalui paksaan, pemerasan, atau penyuapan pembangunan, pelaporan, hasil, atau tinjauan dari penilaian real estate dicari sehubungan dengan pinjaman hipotek. Tidak ada pelanggaran yang terjadi dalam satu tahun terakhir.'"
									@click4="form.p2.a12_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan bahwa tidak boleh ada pengurus atau karyawan yang mempengaruhi atau mencoba untuk mempengaruhi melalui paksaan, pemerasan, atau penyuapan pembangunan, pelaporan, hasil, atau tinjauan dari penilaian real estate dicari sehubungan dengan pinjaman hipotek. Tidak ada pelanggaran yang terjadi dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a12_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.a12_cu_keterangan"
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
										<penilaian-bkcu :form="form.p2.a12_bkcu_penilaian"
											@click1="form.p2.a12_bkcu_penilaian = 1"
											@click2="form.p2.a12_bkcu_penilaian = 2"
											@click3="form.p2.a12_bkcu_penilaian = 3"
											@click4="form.p2.a12_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a12_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p2.a12_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a12_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p2.a12_bkcu_rekomendasi"
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
			<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p2.a13_cu_penilaian == cuTabName || form.p2.a13_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p2.a12_cu_penilaian != null && form.p2.a12_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							2.13. Konflik Kepentingan Pengurus sebelum rapat	</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p2.a13_cu_penilaian" @click1="form.p2.a13_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan. Ketua tidak meminta pengurus untuk menyampaikan pernyataan konflik kepentingan di setiap awal rapat. Tidak ada pernyataan yang dibuat oleh seorang pengurus pun.'"
									@click2="form.p2.a13_cu_penilaian = 2"
									:subtitle2="'Tidak adanya kebijakan bahwa seorang pengurus harus mengungkapkan kepentingan pribadi di hadapan Pengurus lainnya dan bahwa pengurus tersebut menahan diri dari partisipasi dalam diskusi, dan tidak memberikan suara pada masalah tersebut. Ketua Pengurus meminta untuk menyampaikan pernyataan konflik kepentingan dalam agenda apa pun pada awal setiap pertemuan. Pernyataan konflik kepentingan secara resmi dibuat oleh pengurus dalam satu tahun terakhir.'"
									@click3="form.p2.a13_cu_penilaian = 3"
									:subtitle3="'Adanya kebijakan bahwa seorang pengurus harus mengungkapkan kepentingan pribadi di hadapan Pengurus lainnya dan bahwa pengurus tersebut menahan diri dari partisipasi dalam diskusi, dan tidak memberikan suara pada masalah tersebut. Ketua Pengurus meminta untuk menyampaikan pernyataan konflik kepentingan dalam agenda apa pun pada awal setiap pertemuan. Pernyataan konflik kepentingan secara resmi dibuat oleh pengurus dalam satu tahun terakhir.'"
									@click4="form.p2.a13_cu_penilaian = 4"
									:subtitle4="'Adanya kebijakan bahwa seorang pengurus harus mengungkapkan kepentingan pribadi di hadapan Pengurus lainnya dan bahwa pengurus tersebut menahan diri dari partisipasi dalam diskusi, dan tidak memberikan suara pada masalah tersebut. Ketua Pengurus meminta untuk menyampaikan pernyataan konflik kepentingan dalam agenda apa pun pada awal setiap pertemuan. Pernyataan konflik kepentingan secara resmi dibuat oleh pengurus dalam tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a13_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p2.a13_cu_keterangan"
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
										<penilaian-bkcu :form="form.p2.a13_bkcu_penilaian"
											@click1="form.p2.a13_bkcu_penilaian = 1"
											@click2="form.p2.a13_bkcu_penilaian = 2"
											@click3="form.p2.a13_bkcu_penilaian = 3"
											@click4="form.p2.a13_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a13_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p2.a13_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a13_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p2.a13_bkcu_rekomendasi"
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
					v-if="form.p2.a13_cu_penilaian != null && form.p2.a13_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
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
			this.$emit('saveSingle', 'p2');
		},
		prev() {
			this.$emit('prev');
		},
		next() {
			this.$emit('next');
		},

		skorCUA() {
			var jumlah = (this.form.p2.a1_cu_penilaian + this.form.p2.a2_cu_penilaian + this.form.p2.a3_cu_penilaian +
				this.form.p2.a4_cu_penilaian + this.form.p2.a5_cu_penilaian + this.form.p2.a6_cu_penilaian +
				this.form.p2.a7_cu_penilaian + this.form.p2.a8_cu_penilaian + this.form.p2.a9_cu_penilaian + this.form.p2.a10_cu_penilaian
				+ this.form.p2.a11_cu_penilaian + this.form.p2.a12_cu_penilaian + this.form.p2.a13_cu_penilaian) / 1;
			this.$emit('skorCUA', jumlah);
			return jumlah;
		},

		skorBKCUA() {
			var jumlah = (this.form.p2.a1_bkcu_penilaian + this.form.p2.a2_bkcu_penilaian + this.form.p2.a3_bkcu_penilaian +
				this.form.p2.a4_bkcu_penilaian + this.form.p2.a5_bkcu_penilaian + this.form.p2.a6_bkcu_penilaian + this.form.p2.a7_bkcu_penilaian +
				this.form.p2.a8_bkcu_penilaian + this.form.p2.a9_bkcu_penilaian + this.form.p2.a10_bkcu_penilaian + this.form.p2.a11_bkcu_penilaian
				+ this.form.p2.a12_bkcu_penilaian+ this.form.p2.a13_bkcu_penilaian) / 1;
			this.$emit('skorBKCUA', jumlah);
			return jumlah;
		}, 

		jumlahPenilaianCU(nilai) {
			var jumlah = 0;
			if (this.form.p2.a1_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a2_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a3_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a4_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a5_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a6_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a7_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a8_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a9_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a10_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a11_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a12_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a13_cu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},

		jumlahPenilaianBKCU(nilai) {
			var jumlah = 0;
			if (this.form.p2.a1_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a2_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a3_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a4_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a5_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a6_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a7_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a8_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a9_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a10_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a11_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a12_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p2.a13_bkcu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},
	},
	computed: {

	}
}
</script>
