<template>
	<div>

		<div class="card bg-danger card-body"
			v-if="form.p10.a14_cu_penilaian == null && form.p10.a14_cu_keterangan == null && mode != 'penilaianBkcu' && mode != 'lihat'">
			<h6 class="mb-0">Maaf, anda tidak bisa melanjutkan mengisi perspektif ini sebelum melengkapi perspektif
				sebelumnya.</h6>
		</div>

		<div
			v-if="form.p10.a14_cu_penilaian != null && form.p10.a14_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
			<form-filter :cuTabName="cuTabName" :bkcuTabName="bkcuTabName" :jumlahPenilaianCU="jumlahPenilaianCU"
				:jumlahPenilaianBKCU="jumlahPenilaianBKCU" @changeTabCU="changeTabCU"
				@changeTabBKCU="changeTabBKCU"></form-filter>
		</div>

		<!-- A section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
				<div class="card card-body bg-info text-white"
					v-if="form.p10.a14_cu_penilaian != null && form.p10.a14_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="row justify-content-between">
						<div class="col-md-6">
							<h6 class="mb-0 font-weight-bold">11. AKUNTABILITAS JARINGAN</h6>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- a1 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a1_cu_penilaian == cuTabName || form.p11.a1_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p10.a14_cu_penilaian != null && form.p10.a14_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							11.1. Pengembangan dan Perencanaan SDM</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a1_cu_penilaian" @click1="form.p11.a1_cu_penilaian = 1"
									:subtitle1="'Tidak ada kebijakan dan tidak memanfaatkan jasa layanan federasi.'"
									@click2="form.p11.a1_cu_penilaian = 2"
									:subtitle2="'Tidak ada kebijakan. Sebagian memanfaatkan jasa layanan federasi dalam perekrutan, pelatihan dan pengembangan staf dan para pemimpin sukarelawan (pengurus, pengawas, komite). Pelatih dan konsultan dari luar juga didatangkan.'"
									@click3="form.p11.a1_cu_penilaian = 3"
									:subtitle3="'Memanfaatkan jasa layanan federasi dalam perekrutan, pelatihan dan pengembangan staf dan para pemimpin sukarelawan (pengurus, pengawas, komite). Pelatih dan konsultan dari luar juga didatangkan tetapi dengan dukungan dari federasi.Praktik tersebut tidak dalam kebijakan tetapi telah diamati secara konsisten dalam 2 tahun terakhir'"
									@click4="form.p11.a1_cu_penilaian = 4"
									:subtitle4="'Memanfaatkan jasa layanan federasi dalam perekrutan, pelatihan dan pengembangan staf dan para pemimpin sukarelawan (pengurus, pengawas, komite).Pelatih dan konsultan dari luar juga didatangkan tetapi dengan dukungan dari federasi. Praktik tersebut ada dalam kebijakan dan telah diikuti secara konsisten dalam 3 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a1_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a1_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a1_bkcu_penilaian"
											@click1="form.p11.a1_bkcu_penilaian = 1"
											@click2="form.p11.a1_bkcu_penilaian = 2"
											@click3="form.p11.a1_bkcu_penilaian = 3"
											@click4="form.p11.a1_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a1_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a1_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a1_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a2_cu_penilaian == cuTabName || form.p11.a2_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p11.a1_cu_penilaian != null && form.p11.a1_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							11.2. Shared Marketing (Pemasaran Bersama)</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a2_cu_penilaian" @click1="form.p11.a2_cu_penilaian = 1"
									:subtitle1="'Tidak berkontribusi pada program pemasaran nasional CU. Melakukan kampanye pemasaran sendiri dan tidak dalam parameter yang ditetapkan oleh jaringan.'"
									@click2="form.p11.a2_cu_penilaian = 2"
									:subtitle2="'Berkontribusi sebagian pada kampanye pemasaran nasional oleh federasi sebagai kewajiban yang diamanatkan dalam jaringan. Adanya anggaran yang disetujui oleh RAT. Kampanye pemasaran lokal juga dilakukan dalam parameter yang ditetapkan oleh federasi. Hal ini telah dilakukan secara konsisten dalam 1 tahun terakhir.'"
									@click3="form.p11.a2_cu_penilaian = 3"
									:subtitle3="'100% berkontribusi pada kampanye pemasaran nasional oleh federasi sebagai kewajiban yang diamanatkan dalam jaringan. Adanya anggaran yang disetujui oleh RAT. Kampanye pemasaran lokal juga dilakukan dalam parameter yang ditetapkan oleh federasi. Hal ini telah dilakukan secara konsisten dalam 1 tahun terakhir.'"
									@click4="form.p11.a2_cu_penilaian = 4"
									:subtitle4="'100% berkontribusi pada kampanye pemasaran nasional oleh federasi sebagai kewajiban yang diamanatkan dalam jaringan. Adanya anggaran yang disetujui oleh RAT. Kampanye pemasaran lokal juga dilakukan dalam parameter yang ditetapkan oleh federasi. Hal ini telah dilakukan secara konsisten dalam 3 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a2_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a2_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a2_bkcu_penilaian"
											@click1="form.p11.a2_bkcu_penilaian = 1"
											@click2="form.p11.a2_bkcu_penilaian = 2"
											@click3="form.p11.a2_bkcu_penilaian = 3"
											@click4="form.p11.a2_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a2_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a2_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a2_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a3_cu_penilaian == cuTabName || form.p11.a3_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p11.a2_cu_penilaian != null && form.p11.a2_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							11.3. Shared Marketing (Pemasaran Bersama)</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a3_cu_penilaian" @click1="form.p11.a3_cu_penilaian = 1"
									:subtitle1="'Tidak berkontribusi pada program pemasaran nasional CU. Melakukan kampanye pemasaran sendiri dan tidak dalam parameter yang ditetapkan oleh jaringan.'"
									@click2="form.p11.a3_cu_penilaian = 2"
									:subtitle2="'Berkontribusi sebagian pada kampanye pemasaran nasional oleh federasi sebagai kewajiban yang diamanatkan dalam jaringan. Adanya anggaran yang disetujui oleh RAT. Kampanye pemasaran lokal juga dilakukan dalam parameter yang ditetapkan oleh federasi. Hal ini telah dilakukan secara konsisten dalam 1 tahun terakhir.'"
									@click3="form.p11.a3_cu_penilaian = 3"
									:subtitle3="'100% berkontribusi pada kampanye pemasaran nasional oleh federasi sebagai kewajiban yang diamanatkan dalam jaringan. Adanya anggaran yang disetujui oleh RAT. Kampanye pemasaran lokal juga dilakukan dalam parameter yang ditetapkan oleh federasi. Hal ini telah dilakukan secara konsisten dalam 1 tahun terakhir.'"
									@click4="form.p11.a3_cu_penilaian = 4"
									:subtitle4="'100% berkontribusi pada kampanye pemasaran nasional oleh federasi sebagai kewajiban yang diamanatkan dalam jaringan. Adanya anggaran yang disetujui oleh RAT. Kampanye pemasaran lokal juga dilakukan dalam parameter yang ditetapkan oleh federasi. Hal ini telah dilakukan secara konsisten dalam 3 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a3_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a3_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a3_bkcu_penilaian"
											@click1="form.p11.a3_bkcu_penilaian = 1"
											@click2="form.p11.a3_bkcu_penilaian = 2"
											@click3="form.p11.a3_bkcu_penilaian = 3"
											@click4="form.p11.a3_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a3_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a3_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a3_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a4_cu_penilaian == cuTabName || form.p11.a4_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p11.a3_cu_penilaian != null && form.p11.a3_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							11.4 Shared Technology (Teknologi Bersama)</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a4_cu_penilaian" @click1="form.p11.a4_cu_penilaian = 1"
									:subtitle1="'Menggunakan perangkat lunak perbankan atau transaksional inti sendiri yang dikembangkan atau dialihdayakan dari penyedia luar'"
									@click2="form.p11.a4_cu_penilaian = 2"
									:subtitle2="'Menggunakan solusi core banking jaringan setidaknya dalam waktu kurang dari setahun.'"
									@click3="form.p11.a4_cu_penilaian = 3"
									:subtitle3="'Menggunakan solusi core banking jaringan setidaknya dalam 1 -2 tahun terakhir.'"
									@click4="form.p11.a4_cu_penilaian = 4"
									:subtitle4="'Menggunakan solusi core banking jaringan setidaknya dalam 3 tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a4_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a4_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a4_bkcu_penilaian"
											@click1="form.p11.a4_bkcu_penilaian = 1"
											@click2="form.p11.a4_bkcu_penilaian = 2"
											@click3="form.p11.a4_bkcu_penilaian = 3"
											@click4="form.p11.a4_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a4_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a4_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a4_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a5_cu_penilaian == cuTabName || form.p11.a5_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p11.a4_cu_penilaian != null && form.p11.a4_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							11.5 Platform digital koperasi (CU)</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a5_cu_penilaian" @click1="form.p11.a5_cu_penilaian = 1"
									:subtitle1="'Menggunakan agen lainnya untuk platform pembayaran digital. Tidak menggunakan saluran digital jaringan.'"
									@click2="form.p11.a5_cu_penilaian = 2"
									:subtitle2="'Menggunakan saluran digital yang ditawarkan oleh federasi yang mana di bawah 25% anggotanya secara aktif menggunakannya untuk layanan keuangan mereka.'"
									@click3="form.p11.a5_cu_penilaian = 3"
									:subtitle3="'Menggunakan saluran digital yang ditawarkan oleh federasi yang mana 26 - 60% anggotanya secara aktif menggunakannya untuk layanan keuangan mereka.'"
									@click4="form.p11.a5_cu_penilaian = 4"
									:subtitle4="'Menggunakan saluran digital yang ditawarkan oleh federasi yang mana lebih dari 60% anggotanya secara aktif menggunakannya untuk layanan keuangan mereka.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a5_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a5_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a5_bkcu_penilaian"
											@click1="form.p11.a5_bkcu_penilaian = 1"
											@click2="form.p11.a5_bkcu_penilaian = 2"
											@click3="form.p11.a5_bkcu_penilaian = 3"
											@click4="form.p11.a5_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a5_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a5_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a5_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a6_cu_penilaian == cuTabName || form.p11.a6_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p11.a5_cu_penilaian != null && form.p11.a5_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							11.6 Lembaga Pelatihan milik Jaringan</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a6_cu_penilaian" @click1="form.p11.a6_cu_penilaian = 1"
									:subtitle1="'Tidak memiliki investasi di lembaga pelatihan.'"
									@click2="form.p11.a6_cu_penilaian = 2"
									:subtitle2="'Berinvestasi dalam pendirian lembaga pelatihan untuk jaringan CU sebagai pemilik kolektif.'"
									@click3="form.p11.a6_cu_penilaian = 3"
									:subtitle3="'Berinvestasi dalam pendirian lembaga pelatihan untuk jaringan CU sebagai pemilik kolektif dan menggunakan layanannya.'"
									@click4="form.p11.a6_cu_penilaian = 4"
									:subtitle4="'Sebagai pemilik kolektif, memberikan kontribusi keuangan untuk mendirikan lembaga pelatihan untuk jaringan CU dan 100% menggunakan layanannya untuk semua kebutuhan pendidikannya.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a6_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a6_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a6_bkcu_penilaian"
											@click1="form.p11.a6_bkcu_penilaian = 1"
											@click2="form.p11.a6_bkcu_penilaian = 2"
											@click3="form.p11.a6_bkcu_penilaian = 3"
											@click4="form.p11.a6_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a6_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a6_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a6_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a6_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a7_cu_penilaian == cuTabName || form.p11.a7_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p11.a6_cu_penilaian != null && form.p11.a6_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							10.7. Network’s IT Solutions Infrastructure (Infrastruktur Solusi TI milik Jaringan)</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a7_cu_penilaian" @click1="form.p11.a7_cu_penilaian = 1"
									:subtitle1="'Tidak ada investasi yang dibuat dan menggunakan solusi TI sendiri.'"
									@click2="form.p11.a7_cu_penilaian = 2"
									:subtitle2="'Sebagai pemilik kolektif, menyediakan investasi keuangan untuk memperoleh berbagai solusi TI yang kuat yang tersedia untuk jaringan. Namun, CU masih menggunakan solusi inti perbankannya sendiri.'"
									@click3="form.p11.a7_cu_penilaian = 3"
									:subtitle3="'Sebagai pemilik kolektif, menyediakan investasi keuangan untuk memperoleh berbagai solusi TI yang kuat yang tersedia untuk jaringan. CU juga merupakan pengguna teknologi bersama dalam 3 tahun terakhir.'"
									@click4="form.p11.a7_cu_penilaian = 4"
									:subtitle4="'Sebagai pemilik kolektif, menyediakan investasi keuangan untuk memperoleh berbagai solusi TI yang kuat yang tersedia untuk jaringan. CU juga merupakan pengguna teknologi bersama sejak diperkenalkan.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a7_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a7_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a7_bkcu_penilaian"
											@click1="form.p11.a7_bkcu_penilaian = 1"
											@click2="form.p11.a7_bkcu_penilaian = 2"
											@click3="form.p11.a7_bkcu_penilaian = 3"
											@click4="form.p11.a7_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a7_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a7_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a7_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a7_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a8_cu_penilaian == cuTabName || form.p11.a8_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p11.a7_cu_penilaian != null && form.p11.a7_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							11.8. Produk</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a8_cu_penilaian" @click1="form.p11.a8_cu_penilaian = 1"
									:subtitle1="'Mendesain produknya sendiri.'"
									@click2="form.p11.a8_cu_penilaian = 2"
									:subtitle2="'Produk yang ditawarkan sebagian didasarkan pada standarisasi produk yang ditentukan oleh jaringan. CU tidak memberikan masukan ke jaringan tentang produk mana yang relevan bagi anggotanya dan tidak memberi tahu jaringan produk baru apa yang perlu dikembangkan'"
									@click3="form.p11.a8_cu_penilaian = 3"
									:subtitle3="'Produk yang ditawarkan berdasarkan standarisasi produk yang ditentukan oleh jaringan. CU memutuskan produk mana yang relevan bagi anggotanya dan menginformasikan jaringan produk baru apa yang perlu dikembangkan. Credit union telah mengadopsi produk pada tahun berjalan ini.'"
									@click4="form.p11.a8_cu_penilaian = 4"
									:subtitle4="'Produk yang ditawarkan berdasarkan standarisasi produk yang ditentukan oleh jaringan. CU memutuskan produk mana yang relevan bagi anggotanya dan menginformasikan jaringan produk baru apa yang perlu dikembangkan. CU telah mengadopsi produk sejak tiga tahun terakhir.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a8_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a8_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a8_bkcu_penilaian"
											@click1="form.p11.a8_bkcu_penilaian = 1"
											@click2="form.p11.a8_bkcu_penilaian = 2"
											@click3="form.p11.a8_bkcu_penilaian = 3"
											@click4="form.p11.a8_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a8_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a8_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a8_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a8_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a9_cu_penilaian == cuTabName || form.p11.a9_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
					v-if="form.p11.a8_cu_penilaian != null && form.p11.a8_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							11.9. Standard Operational Systems (Sistem Operasional Standar)</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a9_cu_penilaian" @click1="form.p11.a9_cu_penilaian = 1"
									:subtitle1="'Menggunakan sistem dokumentasi pinjaman dan sistem akuntansi sendiri.'"
									@click2="form.p11.a9_cu_penilaian = 2"
									:subtitle2="'<p>CU menganut sebagian dari sistem standar yang ditentukan oleh jaringan berikut:</p><ul>    <li>Dokumentasi pinjaman seperti formulir, informasi yang dibutuhkan dari anggota, dan penilaian</li>    <li>Akuntansi – formulir, bagan akun, sistem akuntansi dan pelaporan laporan keuangan</li></ul>'"
									@click3="form.p11.a9_cu_penilaian = 3"
									:subtitle3="'<p>CU (dalam tahun berjalan) menganut sistem standar berikut yang ditentukan oleh jaringan:</p><ul>    <li>Dokumentasi pinjaman seperti formulir, informasi yang dibutuhkan dari anggota, dan penilaian</li>    <li>Akuntansi – formulir, bagan akun, sistem akuntansi dan pelaporan laporan keuangan</li></ul>'"
									@click4="form.p11.a9_cu_penilaian = 4"
									:subtitle4="'<p>CU secara konsisten (setidaknya 3 tahun terakhir) menganut sistem standar berikut yang ditentukan oleh jaringan:</p><ul>    <li>Dokumentasi pinjaman seperti formulir, informasi yang dibutuhkan dari anggota, dan penilaian</li>    <li>Akuntansi – formulir, bagan akun, sistem akuntansi dan pelaporan laporan Keuangan</li></ul>'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a9_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a9_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a9_bkcu_penilaian"
											@click1="form.p11.a9_bkcu_penilaian = 1"
											@click2="form.p11.a9_bkcu_penilaian = 2"
											@click3="form.p11.a9_bkcu_penilaian = 3"
											@click4="form.p11.a9_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a9_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a9_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a9_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a9_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a10_cu_penilaian == cuTabName || form.p11.a10_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p11.a9_cu_penilaian != null && form.p11.a9_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							10.10. Standard Policies and Norms (Kebijakan dan Norma Standar)</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a10_cu_penilaian" @click1="form.p11.a10_cu_penilaian = 1"
									:subtitle1="'CU menggunakan kebijakannya sendiri.'"
									@click2="form.p11.a10_cu_penilaian = 2"
									:subtitle2="'<p>CU menganut sebagian kebijakan standar berikut yang ditentukan oleh jaringan:</p><ul>    <li>Organisasi dan tata kelola</li>    <li>Manajemen kredit</li>    <li>Manajemen keuangan</li>    <li>Manajemen Sumber Daya Manusia</li>    <li>Perencanaan</li></ul>'"
									@click3="form.p11.a10_cu_penilaian = 3"
									:subtitle3="'<p>CU (dalam tahun berjalan) menganut kebijakan standar berikut yang ditentukan oleh jaringan:</p><ul>    <li>Organisasi dan tata kelola</li>    <li>Manajemen kredit</li>    <li>Manajemen keuangan</li>    <li>Manajemen Sumber Daya Manusia</li>    <li>Perencanaan</li></ul>'"
									@click4="form.p11.a10_cu_penilaian = 4"
									:subtitle4="'<p>CU secara konsisten (setidaknya 3 tahun terakhir) menganut kebijakan standar berikut yang ditentukan oleh jaringan:</p><ul>    <li>Organisasi dan tata kelola</li>    <li>Manajemen kredit</li>    <li>Manajemen keuangan</li>    <li>Manajemen Sumber Daya Manusia</li>    <li>Perencanaan</li></ul>'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a10_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a10_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a10_bkcu_penilaian"
											@click1="form.p11.a10_bkcu_penilaian = 1"
											@click2="form.p11.a10_bkcu_penilaian = 2"
											@click3="form.p11.a10_bkcu_penilaian = 3"
											@click4="form.p11.a10_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a10_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a10_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a10_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a10_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a11_cu_penilaian == cuTabName || form.p11.a11_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p11.a10_cu_penilaian != null && form.p11.a10_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							11.11. Institutional Visual Identity (Identitas Visual Institusional)</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a11_cu_penilaian" @click1="form.p11.a11_cu_penilaian = 1"
									:subtitle1="'Tidak mengadopsi Program Identitas Visual jaringan.'"
									@click2="form.p11.a11_cu_penilaian = 2"
									:subtitle2="'<p>Telah mengadopsi sebagian dari spanduk unik jaringan dan strategi pemasaran nasional seperti:</p><ul>    <li>Logo</li>    <li>Seragam staf</li>    <li>Papan petunjuk</li>    <li>Kop surat dan kartu nama</li>    <li>Warna institusional</li>    <li>Tata letak kantor</li></ul><p>Credit union telah mengadopsi citra kelembagaan jaringan sejak satu tahun terakhir.</p>'"
									@click3="form.p11.a11_cu_penilaian = 3"
									:subtitle3="'<p>Telah mengadopsi sebagian dari spanduk unik jaringan dan strategi pemasaran nasional seperti:</p><ul>  <li>Logo</li>  <li>Seragam staf</li>  <li>Papan petunjuk</li>  <li>Kop surat dan kartu nama</li>  <li>Warna institusional</li>  <li>Tata letak kantor</li></ul><p>Credit union telah mengadopsi citra kelembagaan jaringan sejak satu tahun terakhir.</p>'"
									@click4="form.p11.a11_cu_penilaian = 4"
									:subtitle4="'<p>Telah mengadopsi spanduk unik jaringan dan strategi pemasaran nasional seperti:</p><ul>  <li>Logo</li>  <li>Seragam staf</li>  <li>Papan petunjuk</li>  <li>Kop surat dan kartu nama</li>  <li>Warna institusional</li>  <li>Tata letak kantor</li></ul><p>Credit union telah mengadopsi citra kelembagaan jaringan sejak 3 tahun terakhir.</p>'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a11_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a11_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a11_bkcu_penilaian"
											@click1="form.p11.a11_bkcu_penilaian = 1"
											@click2="form.p11.a11_bkcu_penilaian = 2"
											@click3="form.p11.a11_bkcu_penilaian = 3"
											@click4="form.p11.a11_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a11_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a11_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a11_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a11_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a12_cu_penilaian == cuTabName || form.p11.a12_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p11.a11_cu_penilaian != null && form.p11.a11_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							11.12. Human Resources (SDM) </h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a12_cu_penilaian" @click1="form.p11.a12_cu_penilaian = 1"
									:subtitle1="'Memiliki kebijakan sendiri tentang sumber daya manusia.'"
									@click2="form.p11.a12_cu_penilaian = 2"
									:subtitle2="'Mengadopsi Sebagian standar rekrutmen, pengembangan, promosi, evaluasi kinerja dan remunerasi karyawan.'"
									@click3="form.p11.a12_cu_penilaian = 3"
									:subtitle3="'Secara konsisten mengadopsi standar rekrutmen, pengembangan, promosi, evaluasi kinerja dan remunerasi karyawan. Sudah diadopsi dalam tahun berjalan.'"
									@click4="form.p11.a12_cu_penilaian = 4"
									:subtitle4="'Secara konsisten mengadopsi standar rekrutmen, pengembangan, promosi, evaluasi kinerja dan remunerasi karyawan. Sudah diadopsi sejak 3 tahun terakhir atau lebih.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a12_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a12_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a12_bkcu_penilaian"
											@click1="form.p11.a12_bkcu_penilaian = 1"
											@click2="form.p11.a12_bkcu_penilaian = 2"
											@click3="form.p11.a12_bkcu_penilaian = 3"
											@click4="form.p11.a12_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a12_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a12_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a12_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a12_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a13_cu_penilaian == cuTabName || form.p11.a13_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p11.a12_cu_penilaian != null && form.p11.a12_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							11.13. Member Dues (Iuran Anggota)</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a13_cu_penilaian" @click1="form.p11.a13_cu_penilaian = 1"
									:subtitle1="'Tidak memenuhi kewajiban iuran ke jaringan.'"
									@click2="form.p11.a13_cu_penilaian = 2"
									:subtitle2="'Memenuhi kewajiban iuran ke jaringan secara tidak teratur.'"
									@click3="form.p11.a13_cu_penilaian = 3"
									:subtitle3="'Secara konsisten dan tepat waktu memenuhi kewajiban iuran ke jaringan dalam tiga tahun terakhir'"
									@click4="form.p11.a13_cu_penilaian = 4"
									:subtitle4="'Secara konsisten dan tepat waktu memenuhi kewajiban iuran ke jaringan selama lebih dari tiga tahun dan memberikan kontribusi sukarela ke jaringan.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a13_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a13_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a13_bkcu_penilaian"
											@click1="form.p11.a13_bkcu_penilaian = 1"
											@click2="form.p11.a13_bkcu_penilaian = 2"
											@click3="form.p11.a13_bkcu_penilaian = 3"
											@click4="form.p11.a13_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a13_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a13_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a13_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a13_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a14_cu_penilaian == cuTabName || form.p11.a14_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p11.a13_cu_penilaian != null && form.p11.a13_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							11.14. Territory Management 
						</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a14_cu_penilaian" @click1="form.p11.a14_cu_penilaian = 1"
									:subtitle1="'Perluasan operasi dengan membuka cabang tanpa konsultasi dengan jaringan. Cabang-cabangnya merambah wilayah CU lain.'"
									@click2="form.p11.a14_cu_penilaian = 2"
									:subtitle2="'Perluasan operasi dengan membuka cabang tanpa konsultasi jaringan.Namun, terkadang memastikan bahwa percabangan tidak merambah wilayah CU lain.'"
									@click3="form.p11.a14_cu_penilaian = 3"
									:subtitle3="'Perluasan operasi dengan membuka cabang tidak disetujui oleh jaringan. Namun, selalu memastikan bahwa percabangan tidak merambah wilayah CU lain.'"
									@click4="form.p11.a14_cu_penilaian = 4"
									:subtitle4="'Perluasan operasi dengan membuka cabang disetujui oleh jaringan. Memastikan bahwa percabangan tidak merambah wilayah CU lain.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a14_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a14_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a14_bkcu_penilaian"
											@click1="form.p11.a14_bkcu_penilaian = 1"
											@click2="form.p11.a14_bkcu_penilaian = 2"
											@click3="form.p11.a14_bkcu_penilaian = 3"
											@click4="form.p11.a14_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a14_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a14_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a14_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a14_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a15_cu_penilaian == cuTabName || form.p11.a15_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p11.a14_cu_penilaian != null && form.p11.a14_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							11.15. Balancing the size of credit unions (Keseimbangan Ukuran CU)
						</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a15_cu_penilaian" @click1="form.p11.a15_cu_penilaian = 1"
									:subtitle1="'Menunjukkan keinginan untuk memperluas keanggotaan bahkan sampai merambah wilayah lain. Atau tidak ada keinginan untuk memperluas keanggotaan untuk mencapai tingkat operasi yang berkelanjutan.'"
									@click2="form.p11.a15_cu_penilaian = 2"
									:subtitle2="'Menunjukkan komitmen manajemen untuk memperluas jangkauan di wilayah operasi yang ada alih-alih memperluas wilayah operasi untuk menambah jumlah anggota. Credit union memiliki jangkauan Anggota kurang dari 10% di wilayah operasi utamanya sebelum membuka cabang.'"
									@click3="form.p11.a15_cu_penilaian = 3"
									:subtitle3="'Menunjukkan komitmen yang konsisten dari pengurus dan manajemen untuk memperkuat jangkauan di dalam wilayah operasi yang ada alih-alih memperluas wilayah operasi untuk meningkatkan jumlah anggota. Credit union memiliki jangkauan anggota 11% - 29% dalam daerah operasi utamanya sebelum membuka cabang.'"
									@click4="form.p11.a15_cu_penilaian = 4"
									:subtitle4="'Menunjukkan komitmen yang konsisten dari pengurus dan manajemen untuk memperkuat jangkauan di dalam wilayah operasi yang ada alih-alih memperluas wilayah operasi untuk meningkatkan jumlah anggota. Credit union memiliki jangkauan Anggota setidaknya 30% dalam daerah operasi utamanya sebelum membuka cabang.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a15_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a15_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a15_bkcu_penilaian"
											@click1="form.p11.a15_bkcu_penilaian = 1"
											@click2="form.p11.a15_bkcu_penilaian = 2"
											@click3="form.p11.a15_bkcu_penilaian = 3"
											@click4="form.p11.a15_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a15_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a15_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a15_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a15_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a16_cu_penilaian == cuTabName || form.p11.a16_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p11.a15_cu_penilaian != null && form.p11.a15_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							11.16. Loan Supervision (Pengawasan Pinjaman)
						</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a16_cu_penilaian" @click1="form.p11.a16_cu_penilaian = 1"
									:subtitle1="'Tidak tunduk pada pengawasan pinjaman oleh jaringan.'"
									@click2="form.p11.a16_cu_penilaian = 2"
									:subtitle2="'Secara tidak teratur tunduk pada pengawasan pinjaman oleh jaringan dan mengikuti norma-norma asli pinjaman, dokumentasi, evaluasi dan batasan.'"
									@click3="form.p11.a16_cu_penilaian = 3"
									:subtitle3="'Sejak satu tahun terakhir, tunduk pada pengawasan pinjaman oleh jaringan dan mengikuti norma-norma asli pinjaman, dokumentasi, evaluasi dan batasan.'"
									@click4="form.p11.a16_cu_penilaian = 4"
									:subtitle4="'Sejak 3 tahun terakhir, tunduk pada pengawasan pinjaman oleh jaringan dan mengikuti norma-norma asli pinjaman, dokumentasi, evaluasi dan batasan.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a16_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a16_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a16_bkcu_penilaian"
											@click1="form.p11.a16_bkcu_penilaian = 1"
											@click2="form.p11.a16_bkcu_penilaian = 2"
											@click3="form.p11.a16_bkcu_penilaian = 3"
											@click4="form.p11.a16_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a16_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a16_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a16_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a16_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a17_cu_penilaian == cuTabName || form.p11.a17_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p11.a16_cu_penilaian != null && form.p11.a16_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							11.17. Fit and Proper Requirements (Persyaratan Fit dan Proper)
						</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a17_cu_penilaian" @click1="form.p11.a17_cu_penilaian = 1"
									:subtitle1="'Tidak sesuai dengan persyaratan fit and proper oleh jaringan. '"
									@click2="form.p11.a17_cu_penilaian = 2"
									:subtitle2="'Pengurus dan manajemen senior sebagian lulus persyaratan fit and proper oleh jaringan.'"
									@click3="form.p11.a17_cu_penilaian = 3"
									:subtitle3="'Pengurus dan manajemen senior lulus persyaratan fit and proper oleh jaringan.Dalam  satu tahun terakhir, CU memenuhi persyaratan fit and proper untuk pengurus dan manajemen senior.'"
									@click4="form.p11.a17_cu_penilaian = 4"
									:subtitle4="'Pengurus dan manajemen senior lulus persyaratan fit and proper oleh jaringan.Dalam  3 tahun terakhir, CU memenuhi persyaratan fit and proper untuk pengurus dan manajemen senior.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a17_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a17_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a17_bkcu_penilaian"
											@click1="form.p11.a17_bkcu_penilaian = 1"
											@click2="form.p11.a17_bkcu_penilaian = 2"
											@click3="form.p11.a17_bkcu_penilaian = 3"
											@click4="form.p11.a17_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a17_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a17_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a17_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a17_bkcu_rekomendasi"
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
				v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a18_cu_penilaian == cuTabName || form.p11.a18_bkcu_penilaian == bkcuTabName">
				<div class="card border-info"
				v-if="form.p11.a17_cu_penilaian != null && form.p11.a17_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
					<div class="card-header bg-info text-white">
						<h5 class="card-title">
							11.18. Stabilization Fund (Dana Stabilisasi)
						</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<!-- penilaian cu -->
							<div class="col-md-12">
								<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
								<!-- penilaian -->
								<penilaian-cu :form="form.p11.a18_cu_penilaian" @click1="form.p11.a18_cu_penilaian = 1"
									:subtitle1="'Tidak memenuhi kewajiban keuangan ke dana stabilisasi tersebut.'"
									@click2="form.p11.a18_cu_penilaian = 2"
									:subtitle2="'Secara tidak teratur memenuhi kewajiban keuangannya ke dana stabilisasi tanpa penundaan.'"
									@click3="form.p11.a18_cu_penilaian = 3"
									:subtitle3="'Dalam dua tahun terakhir, memenuhi kewajiban keuangannya ke dana stabilisasi tanpa penundaan.'"
									@click4="form.p11.a18_cu_penilaian = 4" 
									:subtitle4="'Dalam tiga tahun terakhir, memenuhi kewajiban keuangannya ke dana stabilisasi tanpa penundaan.'"></penilaian-cu>
								<!-- keterangan -->
								<div class="form-group">
									<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
									<!-- textarea -->
									<textarea rows="6" type="text" name="a18_cu_keterangan" class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p11.a18_cu_keterangan"
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
										<penilaian-bkcu :form="form.p11.a18_bkcu_penilaian"
											@click1="form.p11.a18_bkcu_penilaian = 1"
											@click2="form.p11.a18_bkcu_penilaian = 2"
											@click3="form.p11.a18_bkcu_penilaian = 3"
											@click4="form.p11.a18_bkcu_penilaian = 4"></penilaian-bkcu>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Keterangan PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a18_bkcu_keterangan"
												class="form-control" placeholder="Silahkan masukkan keterangan "
												v-model="form.p11.a18_bkcu_keterangan"
												:readonly="$route.meta.mode == 'lihat'"></textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<h5>Rekomendasi PUSKOPCUINA:</h5>
											<!-- textarea -->
											<textarea rows="6" type="text" name="a18_bkcu_rekomendasi"
												class="form-control" placeholder="Silahkan masukkan rekomendasi "
												v-model="form.p11.a18_bkcu_rekomendasi"
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a19_cu_penilaian == cuTabName || form.p11.a19_bkcu_penilaian == bkcuTabName">
			<div class="card border-info"
			v-if="form.p11.a18_cu_penilaian != null && form.p11.a18_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
			<div class="card-header bg-info text-white">
				<h5 class="card-title">
				11.19. Risk Based Supervision (Pengawasan Berbasis Risiko)
				</h5>
			</div>
			<div class="card-body">
				<div class="row">
				<!-- penilaian cu -->
				<div class="col-md-12">
					<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
					<!-- penilaian -->
					<penilaian-cu :form="form.p11.a19_cu_penilaian" @click1="form.p11.a19_cu_penilaian = 1"
					:subtitle1="'Tidak tunduk pada pengawasan berbasis risiko oleh jaringan.'" 
					@click2="form.p11.a19_cu_penilaian = 2"
					:subtitle2="'Secara tidak teratur tunduk pada pengawasan jaringan berbasis risiko dan mematuhi persyaratan di dalam dan di luar lokasi.'" 
					@click3="form.p11.a19_cu_penilaian = 3"
					:subtitle3="'Sejak tahun lalu, tunduk pada pengawasan jaringan berbasis risiko dan mematuhi persyaratan di dalam dan di luar lokasi.'" 
					@click4="form.p11.a19_cu_penilaian = 4"
					:subtitle4="'Tiga tahun terakhir, tunduk pada pengawasan jaringan berbasis risiko dan mematuhi persyaratan di dalam dan di luar lokasi.'" ></penilaian-cu>
					<!-- keterangan -->
					<div class="form-group">
					<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
					<!-- textarea -->
					<textarea rows="6" type="text" name="a19_cu_keterangan" class="form-control"
						placeholder="Silahkan masukkan keterangan " v-model="form.p11.a19_cu_keterangan"
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
						<penilaian-bkcu :form="form.p11.a19_bkcu_penilaian"
						@click1="form.p11.a19_bkcu_penilaian = 1"
						@click2="form.p11.a19_bkcu_penilaian = 2"
						@click3="form.p11.a19_bkcu_penilaian = 3"
						@click4="form.p11.a19_bkcu_penilaian = 4"></penilaian-bkcu>
					</div>
					<div class="col-md-6">
						<div class="form-group">
						<h5>Keterangan PUSKOPCUINA:</h5>
						<!-- textarea -->
						<textarea rows="6" type="text" name="a19_bkcu_keterangan"
							class="form-control" placeholder="Silahkan masukkan keterangan "
							v-model="form.p11.a19_bkcu_keterangan"
							:readonly="$route.meta.mode == 'lihat'"></textarea>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
						<h5>Rekomendasi PUSKOPCUINA:</h5>
						<!-- textarea -->
						<textarea rows="6" type="text" name="a19_bkcu_rekomendasi"
							class="form-control" placeholder="Silahkan masukkan rekomendasi "
							v-model="form.p11.a19_bkcu_rekomendasi"
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p11.a20_cu_penilaian == cuTabName || form.p11.a20_bkcu_penilaian == bkcuTabName">
			<div class="card border-info"
			v-if="form.p11.a19_cu_penilaian != null && form.p11.a19_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
			<div class="card-header bg-info text-white">
				<h5 class="card-title">
				11.20. Network Standard – ACCESS (Standar Jaringan - ACCESS)
				</h5>
			</div>
			<div class="card-body">
				<div class="row">
				<!-- penilaian cu -->
				<div class="col-md-12">
					<h5>Penilaian CU: <wajib-badge></wajib-badge></h5>
					<!-- penilaian -->
					<penilaian-cu :form="form.p11.a20_cu_penilaian" @click1="form.p11.a20_cu_penilaian = 1"
					:subtitle1="'Menggunakan PEARLS atau standar kehati-hatian regulasi.'" 
					@click2="form.p11.a20_cu_penilaian = 2"
					:subtitle2="'Secara tidak teratur menggunakan ACCESS dan kehati-hatian regulasi dalam merencanakan dan memantau kinerja CU.'" 
					@click3="form.p11.a20_cu_penilaian = 3"
					:subtitle3="'Sejak tahun lalu, menggunakan versi lengkap ACCESS dan Standar kehati-hatian peraturan dalam merencanakan dan memantau kinerja CU'" 
					@click4="form.p11.a20_cu_penilaian = 4"
					:subtitle4="'Dalam tiga tahun terakhir, menggunakan ACCESS dan standar kehati-hatian regulasi dalam merencanakan dan memantau kinerja CU.'" ></penilaian-cu>
					<!-- keterangan -->
					<div class="form-group">
					<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
					<!-- textarea -->
					<textarea rows="6" type="text" name="a20_cu_keterangan" class="form-control"
						placeholder="Silahkan masukkan keterangan " v-model="form.p11.a20_cu_keterangan"
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
						<penilaian-bkcu :form="form.p11.a20_bkcu_penilaian"
						@click1="form.p11.a20_bkcu_penilaian = 1"
						@click2="form.p11.a20_bkcu_penilaian = 2"
						@click3="form.p11.a20_bkcu_penilaian = 3"
						@click4="form.p11.a20_bkcu_penilaian = 4"></penilaian-bkcu>
					</div>
					<div class="col-md-6">
						<div class="form-group">
						<h5>Keterangan PUSKOPCUINA:</h5>
						<!-- textarea -->
						<textarea rows="6" type="text" name="a20_bkcu_keterangan"
							class="form-control" placeholder="Silahkan masukkan keterangan "
							v-model="form.p11.a20_bkcu_keterangan"
							:readonly="$route.meta.mode == 'lihat'"></textarea>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
						<h5>Rekomendasi PUSKOPCUINA:</h5>
						<!-- textarea -->
						<textarea rows="6" type="text" name="a20_bkcu_rekomendasi"
							class="form-control" placeholder="Silahkan masukkan rekomendasi "
							v-model="form.p11.a20_bkcu_rekomendasi"
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
					v-if="form.p11.a20_cu_penilaian != null && form.p11.a20_cu_keterangan != null || (mode == 'penilaianBkcu' || mode == 'lihat')">
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
		this.skorBKCUA1()
		this.skorCUA1()
		this.skorBKCUA2()
		this.skorCUA2()
		this.skorBKCUA3()
		this.skorCUA3()
		this.skorBKCUA4()
		this.skorCUA4()
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
			this.$emit('saveSingle', 'p11');
		},
		prev() {
			this.$emit('prev');
		},
		next() {
			this.$emit('next');
		},
	
		skorCUA() {
			var jumlah = (this.form.p11.a1_cu_penilaian + this.form.p11.a2_cu_penilaian + this.form.p11.a3_cu_penilaian +
				this.form.p11.a4_cu_penilaian + this.form.p11.a5_cu_penilaian + this.form.p11.a6_cu_penilaian +
				this.form.p11.a7_cu_penilaian + this.form.p11.a8_cu_penilaian + this.form.p11.a9_cu_penilaian + this.form.p11.a10_cu_penilaian
				+ this.form.p11.a11_cu_penilaian + this.form.p11.a12_cu_penilaian + this.form.p11.a13_cu_penilaian
				+ this.form.p11.a14_cu_penilaian + this.form.p11.a15_cu_penilaian + this.form.p11.a16_cu_penilaian
				+ this.form.p11.a17_cu_penilaian + this.form.p11.a18_cu_penilaian + this.form.p11.a19_cu_penilaian
				+ this.form.p11.a20_cu_penilaian) / 1;
			this.$emit('skorCUA', jumlah);
			return jumlah;
		},

		skorBKCUA() {
			var jumlah = (this.form.p11.a1_bkcu_penilaian + this.form.p11.a2_bkcu_penilaian + this.form.p11.a3_bkcu_penilaian +
				this.form.p11.a4_bkcu_penilaian + this.form.p11.a5_bkcu_penilaian + this.form.p11.a6_bkcu_penilaian + this.form.p11.a7_bkcu_penilaian +
				this.form.p11.a8_bkcu_penilaian + this.form.p11.a9_bkcu_penilaian + this.form.p11.a10_bkcu_penilaian + this.form.p11.a11_bkcu_penilaian
				+ this.form.p11.a12_bkcu_penilaian + this.form.p11.a13_bkcu_penilaian + this.form.p11.a14_bkcu_penilaian
				+ this.form.p11.a15_bkcu_penilaian + this.form.p11.a16_bkcu_penilaian + this.form.p11.a17_bkcu_penilaian
				+ this.form.p11.a18_bkcu_penilaian + this.form.p11.a19_bkcu_penilaian + this.form.p11.a20_bkcu_penilaian) / 1;
			this.$emit('skorBKCUA', jumlah);
			return jumlah;
		}, 

		skorCUA1() {
			var jumlah = (this.form.p11.a1_cu_penilaian + this.form.p11.a2_cu_penilaian + this.form.p11.a3_cu_penilaian +
				this.form.p11.a4_cu_penilaian + this.form.p11.a5_cu_penilaian + this.form.p11.a6_cu_penilaian +
				this.form.p11.a7_cu_penilaian) / 1;
			this.$emit('skorCUA1', jumlah);
			return jumlah;
		},

		skorBKCUA1() {
			var jumlah = (this.form.p11.a1_bkcu_penilaian + this.form.p11.a2_bkcu_penilaian + this.form.p11.a3_bkcu_penilaian +
				this.form.p11.a4_bkcu_penilaian + this.form.p11.a5_bkcu_penilaian + this.form.p11.a6_bkcu_penilaian + this.form.p11.a7_bkcu_penilaian) / 1;
			this.$emit('skorBKCUA1', jumlah);
			return jumlah;
		}, 

		skorCUA2() {
			var jumlah = (this.form.p11.a8_cu_penilaian + this.form.p11.a9_cu_penilaian + this.form.p11.a10_cu_penilaian
				+ this.form.p11.a11_cu_penilaian + this.form.p11.a12_cu_penilaian) / 1;
			this.$emit('skorCUA2', jumlah);
			return jumlah;
		},

		skorBKCUA2() {
			var jumlah = (this.form.p11.a8_bkcu_penilaian + this.form.p11.a9_bkcu_penilaian + this.form.p11.a10_bkcu_penilaian + 
			this.form.p11.a11_bkcu_penilaian + this.form.p11.a12_bkcu_penilaian) / 1;
			this.$emit('skorBKCUA2', jumlah);
			return jumlah;
		}, 

		skorCUA3() {
			var jumlah = (this.form.p11.a13_cu_penilaian
				+ this.form.p11.a14_cu_penilaian + this.form.p11.a15_cu_penilaian) / 1;
			this.$emit('skorCUA3', jumlah);
			return jumlah;
		},

		skorBKCUA3() {
			var jumlah = (this.form.p11.a13_bkcu_penilaian + this.form.p11.a14_bkcu_penilaian
				+ this.form.p11.a15_bkcu_penilaian) / 1;
			this.$emit('skorBKCUA3', jumlah);
			return jumlah;
		}, 

		skorCUA4() {
			var jumlah = ( this.form.p11.a16_cu_penilaian
				+ this.form.p11.a17_cu_penilaian + this.form.p11.a18_cu_penilaian + this.form.p11.a19_cu_penilaian
				+ this.form.p11.a20_cu_penilaian) / 1;
			this.$emit('skorCUA4', jumlah);
			return jumlah;
		},

		skorBKCUA4() {
			var jumlah = ( this.form.p11.a16_bkcu_penilaian + this.form.p11.a17_bkcu_penilaian
				+ this.form.p11.a18_bkcu_penilaian + this.form.p11.a19_bkcu_penilaian + this.form.p11.a20_bkcu_penilaian) / 1;
			this.$emit('skorBKCUA4', jumlah);
			return jumlah;
		}, 
	
		jumlahPenilaianCU(nilai) {
			var jumlah = 0;
			if (this.form.p11.a1_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a2_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a3_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a4_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a5_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a6_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a7_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a8_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a9_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a10_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a11_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a12_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a13_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a14_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a15_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a16_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a17_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a18_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a19_cu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a20_cu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},
		jumlahPenilaianBKCU(nilai) {
			var jumlah = 0;
			if (this.form.p11.a1_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a2_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a3_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a4_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a5_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a6_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a7_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a8_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a9_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a10_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a11_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a12_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a13_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a14_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a15_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a16_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a17_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a18_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a19_bkcu_penilaian == nilai) {
				jumlah++;
			}
			if (this.form.p11.a20_bkcu_penilaian == nilai) {
				jumlah++;
			}

			return jumlah;
		},
	},
	computed: {

	}
}
</script>
