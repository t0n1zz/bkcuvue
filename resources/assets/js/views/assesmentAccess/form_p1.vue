<template>
	<div>
		<form-filter 
			:cuTabName="cuTabName" 
			:bkcuTabName="bkcuTabName"
			:jumlahPenilaianCU="jumlahPenilaianCU"
			:jumlahPenilaianBKCU="jumlahPenilaianBKCU" 
			@changeTabCU="changeTabCU" 
			@changeTabBKCU="changeTabBKCU"
		></form-filter>
		
		<!-- A section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
			<div class="card card-body bg-info text-white"> 
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">A. PERLINDUNGAN</h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>Skor CU: {{ skorCUA() }} / Bobot Skor CU: {{ bobotCUA() }}%</li>
							<li>Skor BKCU: {{ skorBKCUA() }} / Bobot Skor BKCU: {{ bobotBKCUA() }}%</li>
						</ul>	
					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- a1 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.p1a1_cu_penilaian == cuTabName || form.p1.p1a1_bkcu_penilaian == bkcuTabName">
			<div class="card border-info">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						1. P1 = Mengukur kemampuan CU menyediakan dana cadangan risiko atas piutang lalai > 12 bulan</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p1.p1a1_cu_penilaian" 
								@click1="form.p1.p1a1_cu_penilaian = 1"
								:subtitle1="'Kurang dari 50% persediaan DCR untuk kredit lalai di atas 12 bulan dan tidak dilakukan pemutihan tunggakan (charge-off)'"
								@click2="form.p1.p1a1_cu_penilaian = 2" 
								:subtitle2="'50-99% persediaan DCR untuk kredit lalai di atas 12 bulan dan tidak dilakukan pemutihan tunggakan (charge-off)'"
								@click3="form.p1.p1a1_cu_penilaian = 3" 
								:subtitle3="'100% persediaan DCR untuk kredit lalai di atas 12 bulan dan pemutihan tunggakan (charge-off)setiap triwulan dalam setahun atau hanya kadang - kadang saja dilakukan'"
								@click4="form.p1.p1a1_cu_penilaian = 4" 
								:subtitle4="'100% persediaan DCR untuk kredit lalai di atas 12 bulan dan dilakukan pemutihan tunggakan (charge-off) setiap triwulan atau secara berkala dan konsisten'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a1_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1a1_cu_keterangan"
								:disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p1.p1a1_bkcu_penilaian" 
										@click1="form.p1.p1a1_bkcu_penilaian = 1"
										@click2="form.p1.p1a1_bkcu_penilaian = 2" 
										@click3="form.p1.p1a1_bkcu_penilaian = 3" 
										@click4="form.p1.p1a1_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1a1_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p1.p1a1_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.p1a2_cu_penilaian == cuTabName || form.p1.p1a2_bkcu_penilaian == bkcuTabName">
			<div class="card border-info" v-if="form.p1.p1a1_cu_penilaian != '' && form.p1.p1a1_cu_keterangan != ''">
				<div class="card-header bg-info text-white">
					<h5 class="card-title">
						2. P2 = Mengukur kemampuan CU menyediakan dana cadangan risiko atas piutang lalai < 12 bulan</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p1.p1a2_cu_penilaian" 
								@click1="form.p1.p1a2_cu_penilaian = 1"
								:subtitle1="'Tidak ada persediaan DCR untuk kredit lalai 1-12 bulan dan tidak dilakukan pemutihan tunggakan (charge-off)'"
								@click2="form.p1.p1a2_cu_penilaian = 2" 
								:subtitle2="'Kurang dari 35% DCR utk KL 1-12 bulan dan tidak dilakukan pemutihan tunggakan (charge-off)'"
								@click3="form.p1.p1a2_cu_penilaian = 3" 
								:subtitle3="'Tersedia 35% DCR untuk kredit lalai 1-12 bulan dan pemutihan tunggakan (charge-off)setiap triwulan dalam setahun atau hanya kadang - kadang saja dilakukan'"
								@click4="form.p1.p1a2_cu_penilaian = 4" 
								:subtitle4="'Tersedia 35% DCR untuk kredit lalai 1-12 bulan dan dilakukan pemutihan tunggakan (charge-off) setiap bulan secara berkala dan konsisten'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a2_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1a2_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p1.p1a2_bkcu_penilaian" 
										@click1="form.p1.p1a2_bkcu_penilaian = 1"
										@click2="form.p1.p1a2_bkcu_penilaian = 2" 
										@click3="form.p1.p1a2_bkcu_penilaian = 3" 
										@click4="form.p1.p1a2_bkcu_penilaian = 4" 
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
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1a2_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p1.p1a2_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
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
			<div class="card card-body bg-warning text-white" v-if="form.p1.p1a2_cu_penilaian != '' && form.p1.p1a2_cu_keterangan != ''">
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">B. STRUKTUR KEUANGAN YANG EFEKTIF </h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>Skor CU: {{ skorCUB() }} / Bobot Skor CU: {{ bobotCUB() }}% </li>
							<li>Skor BKCU: {{ skorBKCUB() }} / Bobot Skor BKCU: {{ bobotBKCUB() }}% </li>
						</ul>	
					</div>
				</div>	
			</div>
		</div>
		</transition>

		<!-- b3 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.p1b3_cu_penilaian == cuTabName || form.p1.p1b3_bkcu_penilaian == bkcuTabName">
			<div class="card border-warning" v-if="form.p1.p1a2_cu_penilaian != '' && form.p1.p1a2_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						3. E1 = Mengukur persentase total asset yang diinvestasikan dalam piutang</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p1.p1b3_cu_penilaian" 
								@click1="form.p1.p1b3_cu_penilaian = 1"
								:subtitle1="'Kurang dari 50% total aset ; dan lebih dari 80% total aset'"
								@click2="form.p1.p1b3_cu_penilaian = 2" 
								:subtitle2="'51-69% dari total aset'"
								@click3="form.p1.p1b3_cu_penilaian = 3" 
								:subtitle3="'70-80% dari total aset'"
								@click4="form.p1.p1b3_cu_penilaian = 4" 
								:subtitle4="'70-80% dari total aset dan portofolio pinjaman beragam minimal 5 produk pinjaman'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b3_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1b3_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p1.p1b3_bkcu_penilaian" 
										@click1="form.p1.p1b3_bkcu_penilaian = 1"
										@click2="form.p1.p1b3_bkcu_penilaian = 2" 
										@click3="form.p1.p1b3_bkcu_penilaian = 3" 
										@click4="form.p1.p1b3_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b3_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1b3_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b3_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p1.p1b3_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b4 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.p1b4_cu_penilaian == cuTabName || form.p1.p1b4_bkcu_penilaian == bkcuTabName">
			<div class="card border-warning" v-if="form.p1.p1b3_cu_penilaian != '' && form.p1.p1b3_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						4. E5 = Mengukur persentase total asset yang didanai dari simpanan non saham</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p1.p1b4_cu_penilaian" 
								@click1="form.p1.p1b4_cu_penilaian = 1"
								:subtitle1="'Kurang dari 50% total aset ; dan lebih dari 80% total aset'"
								@click2="form.p1.p1b4_cu_penilaian = 2" 
								:subtitle2="'51-69% dari total aset'"
								@click3="form.p1.p1b4_cu_penilaian = 3" 
								:subtitle3="'70-80% dari total aset'"
								@click4="form.p1.p1b4_cu_penilaian = 4" 
								:subtitle4="'70-80% dari total aset dan portofolio pinjaman beragam minimal 5 jenis simpanan'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b4_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1b4_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p1.p1b4_bkcu_penilaian" 
										@click1="form.p1.p1b4_bkcu_penilaian = 1"
										@click2="form.p1.p1b4_bkcu_penilaian = 2" 
										@click3="form.p1.p1b4_bkcu_penilaian = 3" 
										@click4="form.p1.p1b4_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b4_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1b4_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b4_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p1.p1b4_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b5 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.p1b5_cu_penilaian == cuTabName || form.p1.p1b5_bkcu_penilaian == bkcuTabName">
			<div class="card border-warning" v-if="form.p1.p1b4_cu_penilaian != '' && form.p1.p1b4_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						5. E6 = Mengukur persentase total asset yang didanai dari pinjaman pihak 3</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p1.p1b5_cu_penilaian" 
								@click1="form.p1.p1b5_cu_penilaian = 1"
								:subtitle1="'Di atas 30% dari total aset'"
								@click2="form.p1.p1b5_cu_penilaian = 2" 
								:subtitle2="'20-30% dari total aset'"
								@click3="form.p1.p1b5_cu_penilaian = 3" 
								:subtitle3="'1-19 % dari total aset'"
								@click4="form.p1.p1b5_cu_penilaian = 4" 
								:subtitle4="'0%'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b5_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1b5_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p1.p1b5_bkcu_penilaian" 
										@click1="form.p1.p1b5_bkcu_penilaian = 1"
										@click2="form.p1.p1b5_bkcu_penilaian = 2" 
										@click3="form.p1.p1b5_bkcu_penilaian = 3" 
										@click4="form.p1.p1b5_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b5_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1b5_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b5_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p1.p1b5_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b6 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.p1b6_cu_penilaian == cuTabName || form.p1.p1b6_bkcu_penilaian == bkcuTabName">
			<div class="card border-warning" v-if="form.p1.p1b5_cu_penilaian != '' && form.p1.p1b5_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						6. E7 = Mengukur persentase total asset yang didanai dari simpanan saham</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p1.p1b6_cu_penilaian" 
								@click1="form.p1.p1b6_cu_penilaian = 1"
								:subtitle1="'Di bawah 5% dari total aset'"
								@click2="form.p1.p1b6_cu_penilaian = 2" 
								:subtitle2="'5-9% dari total aset'"
								@click3="form.p1.p1b6_cu_penilaian = 3" 
								:subtitle3="'10% dari total aset '"
								@click4="form.p1.p1b6_cu_penilaian = 4" 
								:subtitle4="'Di atas 10% dari total aset tetapi tidak melampaui 20% dari total aset'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b6_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1b6_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p1.p1b6_bkcu_penilaian" 
										@click1="form.p1.p1b6_bkcu_penilaian = 1"
										@click2="form.p1.p1b6_bkcu_penilaian = 2" 
										@click3="form.p1.p1b6_bkcu_penilaian = 3" 
										@click4="form.p1.p1b6_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b6_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1b6_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b6_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p1.p1b6_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- b7 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.p1b7_cu_penilaian == cuTabName || form.p1.p1b7_bkcu_penilaian == bkcuTabName">
			<div class="card border-warning" v-if="form.p1.p1b6_cu_penilaian != '' && form.p1.p1b6_cu_keterangan != ''">
				<div class="card-header bg-warning text-white">
					<h5 class="card-title">
						7. E9 = Mengukur level nyata dari modal lembaga setelah mengeluarkan penyisihan DCR untuk menutupi P1 & P2</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p1.p1b7_cu_penilaian" 
								@click1="form.p1.p1b7_cu_penilaian = 1"
								:subtitle1="'Di bawah 4% dari total aset'"
								@click2="form.p1.p1b7_cu_penilaian = 2" 
								:subtitle2="'4-9% dari total aset'"
								@click3="form.p1.p1b7_cu_penilaian = 3" 
								:subtitle3="'10% dari total aset '"
								@click4="form.p1.p1b7_cu_penilaian = 4" 
								:subtitle4="'Di atas 10% dari total aset'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1b7_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1b7_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p1.p1b7_bkcu_penilaian" 
										@click1="form.p1.p1b7_bkcu_penilaian = 1"
										@click2="form.p1.p1b7_bkcu_penilaian = 2" 
										@click3="form.p1.p1b7_bkcu_penilaian = 3" 
										@click4="form.p1.p1b7_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b7_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1b7_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1b7_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p1.p1b7_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- C section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua')">
			<div class="card card-body bg-success text-white" v-if="form.p1.p1b7_cu_penilaian != '' && form.p1.p1b7_cu_keterangan != ''">
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">C. KUALITAS ASET</h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>Skor CU: {{ skorCUC() }} / Bobot Skor CU: {{ bobotCUC() }}% </li>
							<li>Skor BKCU: {{ skorBKCUC() }} / Bobot Skor BKCU: {{ bobotBKCUC() }}% </li>
						</ul>	
					</div>
				</div>	
			</div>
		</div>
		</transition>

		<!-- c8 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.p1c8_cu_penilaian == cuTabName || form.p1.p1c8_bkcu_penilaian == bkcuTabName">
			<div class="card border-success" v-if="form.p1.p1b7_cu_penilaian != '' && form.p1.p1b7_cu_keterangan != ''">
				<div class="card-header bg-success text-white">
					<h5 class="card-title">
						8. A1 = Mengukur persentase total kelalaian piutang terhadap total piutang</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p1.p1c8_cu_penilaian" 
								@click1="form.p1.p1c8_cu_penilaian = 1"
								:subtitle1="'Di atas 10% dari pinjaman beredar'"
								@click2="form.p1.p1c8_cu_penilaian = 2" 
								:subtitle2="'6-10% dari pinjaman beredar'"
								@click3="form.p1.p1c8_cu_penilaian = 3" 
								:subtitle3="'≤  5% dari pinjaman beredar'"
								@click4="form.p1.p1c8_cu_penilaian = 4" 
								:subtitle4="'0%'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1c8_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1c8_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p1.p1c8_bkcu_penilaian" 
										@click1="form.p1.p1c8_bkcu_penilaian = 1"
										@click2="form.p1.p1c8_bkcu_penilaian = 2" 
										@click3="form.p1.p1c8_bkcu_penilaian = 3" 
										@click4="form.p1.p1c8_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1c8_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1c8_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1c8_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p1.p1c8_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- c9 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.p1c9_cu_penilaian == cuTabName || form.p1.p1c9_bkcu_penilaian == bkcuTabName">
			<div class="card border-success" v-if="form.p1.p1c8_cu_penilaian != '' && form.p1.p1c8_cu_keterangan != ''">
				<div class="card-header bg-success text-white">
					<h5 class="card-title">
						9. A2 = Mengukur total asset yang tidak menghasilkan income</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p1.p1c9_cu_penilaian" 
								@click1="form.p1.p1c9_cu_penilaian = 1"
								:subtitle1="'Di atas 10% dari total aset'"
								@click2="form.p1.p1c9_cu_penilaian = 2" 
								:subtitle2="'6-9% dari total aset'"
								@click3="form.p1.p1c9_cu_penilaian = 3" 
								:subtitle3="'5% dari total aset'"
								@click4="form.p1.p1c9_cu_penilaian = 4" 
								:subtitle4="'Di bawah 5% dari total aset'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1c9_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1c9_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p1.p1c9_bkcu_penilaian" 
										@click1="form.p1.p1c9_bkcu_penilaian = 1"
										@click2="form.p1.p1c9_bkcu_penilaian = 2" 
										@click3="form.p1.p1c9_bkcu_penilaian = 3" 
										@click4="form.p1.p1c9_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1c9_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1c9_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1c9_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p1.p1c9_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- D section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua')">
			<div class="card card-body bg-brown text-white" v-if="form.p1.p1c9_cu_penilaian != '' && form.p1.p1c9_cu_keterangan != ''">
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">D. NILAI PENGEMBALIAN ATAS PEMBIAYAAN</h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>Skor CU: {{ skorCUD() }} / Bobot Skor CU: {{ bobotCUD() }}% </li>
							<li>Skor BKCU: {{ skorBKCUD() }} / Bobot Skor BKCU: {{ bobotBKCUD() }}% </li>
						</ul>	
					</div>
				</div>	
			</div>
		</div>
		</transition>

		<!-- d10 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.p1d10_cu_penilaian == cuTabName || form.p1.p1d10_bkcu_penilaian == bkcuTabName">
			<div class="card border-brown" v-if="form.p1.p1c9_cu_penilaian != '' && form.p1.p1c9_cu_keterangan != ''">
				<div class="card-header bg-brown text-white">
					<h5 class="card-title">
						10. R7 = Mengukur persentase pengembalian biaya atas simpanan saham</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p1.p1d10_cu_penilaian" 
								@click1="form.p1.p1d10_cu_penilaian = 1"
								:subtitle1="'Deviden anggota dibawah harga pasar'"
								@click2="form.p1.p1d10_cu_penilaian = 2" 
								:subtitle2="'Deviden dibayar dibawah atau 2% lebih tinggi dari pasar'"
								@click3="form.p1.p1d10_cu_penilaian = 3" 
								:subtitle3="'Deviden dibayar 1% lebih tinggi dari pasar'"
								@click4="form.p1.p1d10_cu_penilaian = 4" 
								:subtitle4="'Deviden dibayar setara bunga pasar'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1d10_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1d10_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p1.p1d10_bkcu_penilaian" 
										@click1="form.p1.p1d10_bkcu_penilaian = 1"
										@click2="form.p1.p1d10_bkcu_penilaian = 2" 
										@click3="form.p1.p1d10_bkcu_penilaian = 3" 
										@click4="form.p1.p1d10_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1d10_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1d10_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1d10_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p1.p1d10_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- d11 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.p1d11_cu_penilaian == cuTabName || form.p1.p1d11_bkcu_penilaian == bkcuTabName">
			<div class="card border-brown" v-if="form.p1.p1d10_cu_penilaian != '' && form.p1.p1d10_cu_keterangan != ''">
				<div class="card-header bg-brown text-white">
					<h5 class="card-title">
						11. R9 = Mengukur persentase beban untuk mengelola semua asset</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p1.p1d11_cu_penilaian" 
								@click1="form.p1.p1d11_cu_penilaian = 1"
								:subtitle1="'Biaya Operasional dibawah 5% dari rata-rata aset dan staf tidak mampu melaksanakan kegiatan operasional'"
								@click2="form.p1.p1d11_cu_penilaian = 2" 
								:subtitle2="'Biaya Operasional >5% dari rata-rata aset '"
								@click3="form.p1.p1d11_cu_penilaian = 3" 
								:subtitle3="'Biaya Operasional sebesar 5% dari rata-rata aset'"
								@click4="form.p1.p1d11_cu_penilaian = 4" 
								:subtitle4="'Biaya Operasional sebesar 5% dari rata-rata aset dengan jumlah staf yang memadai dan gaji kompetitif'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1d11_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1d11_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p1.p1d11_bkcu_penilaian" 
										@click1="form.p1.p1d11_bkcu_penilaian = 1"
										@click2="form.p1.p1d11_bkcu_penilaian = 2" 
										@click3="form.p1.p1d11_bkcu_penilaian = 3" 
										@click4="form.p1.p1d11_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1d11_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1d11_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1d11_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi" v-model="form.p1.p1d11_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- E section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
			<div class="card card-body bg-danger text-white" v-if="form.p1.p1d11_cu_penilaian != '' && form.p1.p1d11_cu_keterangan != ''">
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">E. LIKUIDITAS</h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>Skor CU: {{ skorCUE() }} / Bobot Skor CU: {{ bobotCUE() }}% </li>
							<li>Skor BKCU: {{ skorBKCUE() }} / Bobot Skor BKCU: {{ bobotBKCUE() }}% </li>
						</ul>	
					</div>
				</div>	
			</div>
		</div>
		</transition>

		<!-- e12 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.p1e12_cu_penilaian == cuTabName || form.p1.p1e12_bkcu_penilaian == bkcuTabName">
			<div class="card border-danger" v-if="form.p1.p1d11_cu_penilaian != '' && form.p1.p1d11_cu_keterangan != ''">
				<div class="card-header bg-danger text-white">
					<h5 class="card-title">
						12. L1 = Mengukur persentase cadangan likuid untuk memenuhi permintaan penarikan setelah membayar semua kewajiban < 30 hari</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p1.p1e12_cu_penilaian" 
								@click1="form.p1.p1e12_cu_penilaian = 1"
								:subtitle1="'Dibawah 10% dari simpanan non saham atau lebih dari 15%  simpanan non saham, dan jumlah tersebut melampaui 20% total aset'"
								@click2="form.p1.p1e12_cu_penilaian = 2" 
								:subtitle2="'10 -15% dari simpanan non saham tetapi tidak melampaui 20% total aset'"
								@click3="form.p1.p1e12_cu_penilaian = 3" 
								:subtitle3="'15% dari simpanan non saham tetapi tidak melampaui 20% dari total aset'"
								@click4="form.p1.p1e12_cu_penilaian = 4" 
								:subtitle4="'Diatas 15% dari simpanan non saham tetapi tidak melampaui 20% dari total aset'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1e12_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1e12_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p1.p1e12_bkcu_penilaian" 
										@click1="form.p1.p1e12_bkcu_penilaian = 1"
										@click2="form.p1.p1e12_bkcu_penilaian = 2" 
										@click3="form.p1.p1e12_bkcu_penilaian = 3" 
										@click4="form.p1.p1e12_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1e12_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1e12_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1e12_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p1.p1e12_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- F section -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
			<div class="card card-body bg-teal text-white" v-if="form.p1.p1e12_cu_penilaian != '' && form.p1.p1e12_cu_keterangan != ''">
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">F. PERTUMBUHAN</h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>Skor CU: {{ skorCUF() }} / Bobot Skor CU: {{ bobotCUF() }}% </li>
							<li>Skor BKCU: {{ skorBKCUF() }} / Bobot Skor BKCU: {{ bobotBKCUF() }}% </li>
						</ul>	
					</div>
				</div>	
			</div>
		</div>
		</transition>

		<!-- f13 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.p1ff13_cu_penilaian == cuTabName || form.p1.p1ff13_bkcu_penilaian == bkcuTabName">
			<div class="card border-teal" v-if="form.p1.p1e12_cu_penilaian != '' && form.p1.p1e12_cu_keterangan != ''">
				<div class="card-header bg-teal text-white">
					<h5 class="card-title">
						13. S10 = Mengukur persentase pertumbuhan anggota dari tahun ke tahun</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p1.p1f13_cu_penilaian" 
								@click1="form.p1.p1f13_cu_penilaian = 1"
								:subtitle1="'Kurang dari 5%'"
								@click2="form.p1.p1f13_cu_penilaian = 2" 
								:subtitle2="'5-11%'"
								@click3="form.p1.p1f13_cu_penilaian = 3" 
								:subtitle3="'12%'"
								@click4="form.p1.p1f13_cu_penilaian = 4" 
								:subtitle4="'Lebih dari 12%'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1f13_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1f13_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
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
										:form="form.p1.p1f13_bkcu_penilaian" 
										@click1="form.p1.p1f13_bkcu_penilaian = 1"
										@click2="form.p1.p1f13_bkcu_penilaian = 2" 
										@click3="form.p1.p1f13_bkcu_penilaian = 3" 
										@click4="form.p1.p1f13_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1f13_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1f13_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1f13_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p1.p1f13_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- f14 -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="(cuTabName == 'semua' && bkcuTabName == 'semua') || form.p1.p1f14_cu_penilaian == cuTabName || form.p1.p1f14_bkcu_penilaian == bkcuTabName">
			<div class="card border-teal" v-if="form.p1.p1f13_cu_penilaian != '' && form.p1.p1f13_cu_keterangan != ''">
				<div class="card-header bg-teal text-white">
					<h5 class="card-title">
						14. S11 = Mengukur persentase pertumbuhan total  aset dari tahun ke tahun</h5>
				</div>
				<div class="card-body">
					<div class="row">
						<!-- penilaian cu -->
						<div class="col-md-12">
							<h5>Penilaian CU:</h5>
							<!-- penilaian -->
							<penilaian-cu 
								:form="form.p1.p1f14_cu_penilaian" 
								@click1="form.p1.p1f14_cu_penilaian = 1"
								:subtitle1="'Kurang dari tingkat inflasi'"
								@click2="form.p1.p1f14_cu_penilaian = 2" 
								:subtitle2="'1-4 % lebih tinggi dari tingkat Inflasi'"
								@click3="form.p1.p1f14_cu_penilaian = 3" 
								:subtitle3="'5-9% lebih tinggi dari tingkat inflasi'"
								@click4="form.p1.p1f14_cu_penilaian = 4" 
								:subtitle4="'Lebih dari 10% dibanding tingkat inflasi'"
							></penilaian-cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU: <wajib-badge></wajib-badge></h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1f14_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1f14_cu_keterangan" :disabled="$route.meta.mode == 'penilaianBkcu' || $route.meta.mode == 'lihat'"></textarea>
							</div>
						</div>

						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaianBkcu' || mode == 'lihat' || mode == 'lihat'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian-bkcu
										:form="form.p1.p1f14_bkcu_penilaian" 
										@click1="form.p1.p1f14_bkcu_penilaian = 1"
										@click2="form.p1.p1f14_bkcu_penilaian = 2" 
										@click3="form.p1.p1f14_bkcu_penilaian = 3" 
										@click4="form.p1.p1f14_bkcu_penilaian = 4" 
									></penilaian-bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1f14_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1.p1f14_bkcu_keterangan" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Rekomendasi BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1f14_bkcu_rekomendasi" 
										class="form-control"
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p1.p1f14_bkcu_rekomendasi" :disabled="$route.meta.mode == 'lihat'"></textarea>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</transition>

		<!-- <div class="card bg-danger card-body" v-if="form.p1.p1f14_cu_penilaian == '' && form.p1.p1f14_cu_keterangan == ''">
			<h6 class="mb-0">Silahkan melengkapi indikator diatas untuk melanjutkan</h6>
		</div> -->
		
		<!-- next button -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
		<div v-show="cuTabName == 'semua' && bkcuTabName == 'semua'">
			<div class="card card-body" v-if="form.p1.p1f14_cu_penilaian != '' && form.p1.p1f14_cu_keterangan != ''">
				<div class="text-center d-none d-md-block">
					<button type="button" class="btn btn-light" @click.prevent="prev">
						<i class="icon-arrow-left13"></i> Batal
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
						<i class="icon-arrow-left13"></i> Batal
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
			next(){
				this.$emit('next');
			},
			prev(){
				this.$emit('prev');
			},
			skorCUA(){
				var jumlah = (this.form.p1.p1a1_cu_penilaian + this.form.p1.p1a2_cu_penilaian) / 1;
				this.$emit('skorCUA', jumlah);
				return jumlah;
			},
			bobotCUA(){
				var jumlah = this.$options.filters.round((((this.form.p1.p1a1_cu_penilaian + this.form.p1.p1a2_cu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotCUA', jumlah);
				return jumlah;
			},
			skorBKCUA(){
				var jumlah = (this.form.p1.p1a1_bkcu_penilaian + this.form.p1.p1a2_bkcu_penilaian) / 1;
				this.$emit('skorBKCUA', jumlah);
				return jumlah;
			},
			bobotBKCUA(){
				var jumlah = this.$options.filters.round((((this.form.p1.p1a1_bkcu_penilaian + this.form.p1.p1a2_bkcu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotBKCUA', jumlah);
				return jumlah;
			},
			skorCUB(){
				var jumlah = (this.form.p1.p1b3_cu_penilaian + this.form.p1.p1b4_cu_penilaian + this.form.p1.p1b5_cu_penilaian + this.form.p1.p1b6_cu_penilaian + this.form.p1.p1b7_cu_penilaian) / 1;
				this.$emit('skorCUB', jumlah);
				return jumlah;
			},
			bobotCUB(){
				var jumlah = this.$options.filters.round((((this.form.p1.p1b3_cu_penilaian + this.form.p1.p1b4_cu_penilaian + this.form.p1.p1b5_cu_penilaian + this.form.p1.p1b6_cu_penilaian + this.form.p1.p1b7_cu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotCUB', jumlah);
				return jumlah;
			},
			skorBKCUB(){
				var jumlah = (this.form.p1.p1b3_bkcu_penilaian + this.form.p1.p1b4_bkcu_penilaian + this.form.p1.p1b5_bkcu_penilaian + this.form.p1.p1b6_bkcu_penilaian + this.form.p1.p1b7_bkcu_penilaian) / 1;
				this.$emit('skorBKCUB', jumlah);
				return jumlah;
			},
			bobotBKCUB(){
				var jumlah = this.$options.filters.round((((this.form.p1.p1b3_bkcu_penilaian + this.form.p1.p1b4_bkcu_penilaian + this.form.p1.p1b5_bkcu_penilaian + this.form.p1.p1b6_bkcu_penilaian + this.form.p1.p1b7_bkcu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotBKCUB', jumlah);
				return jumlah;
			},
			skorCUC(){
				var jumlah = (this.form.p1.p1c8_cu_penilaian + this.form.p1.p1c9_cu_penilaian) / 1;
				this.$emit('skorCUC', jumlah);
				return jumlah;
			},
			bobotCUC(){
				var jumlah = this.$options.filters.round((((this.form.p1.p1c8_cu_penilaian + this.form.p1.p1c9_cu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotCUC', jumlah);
				return jumlah;
			},
			skorBKCUC(){
				var jumlah = (this.form.p1.p1c8_bkcu_penilaian + this.form.p1.p1c9_bkcu_penilaian) / 1;
				this.$emit('skorBKCUC', jumlah);
				return jumlah;
			},
			bobotBKCUC(){
				var jumlah = this.$options.filters.round((((this.form.p1.p1c8_bkcu_penilaian + this.form.p1.p1c9_bkcu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotBKCUC', jumlah);
				return jumlah;
			},
			skorCUD(){
				var jumlah = (this.form.p1.p1d10_cu_penilaian + this.form.p1.p1d11_cu_penilaian) / 1;
				this.$emit('skorCUD', jumlah);
				return jumlah;
			},
			bobotCUD(){
				var jumlah = this.$options.filters.round((((this.form.p1.p1d10_cu_penilaian + this.form.p1.p1d11_cu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotCUD', jumlah);
				return jumlah;
			},
			skorBKCUD(){
				var jumlah = (this.form.p1.p1d10_bkcu_penilaian + this.form.p1.p1d11_bkcu_penilaian) / 1;
				this.$emit('skorBKCUD', jumlah);
				return jumlah;
			},
			bobotBKCUD(){
				var jumlah = this.$options.filters.round((((this.form.p1.p1d10_bkcu_penilaian + this.form.p1.p1d11_bkcu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotBKCUD', jumlah);
				return jumlah;
			},
			skorCUE(){
				var jumlah = (this.form.p1.p1e12_cu_penilaian) / 1;
				this.$emit('skorCUE', jumlah);
				return jumlah;
			},
			bobotCUE(){
				var jumlah = this.$options.filters.round((((this.form.p1.p1e12_cu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotCUE', jumlah);
				return jumlah;
			},
			skorBKCUE(){
				var jumlah = (this.form.p1.p1e12_bkcu_penilaian) / 1;
				this.$emit('skorBKCUE', jumlah);
				return jumlah;
			},
			bobotBKCUE(){
				var jumlah = this.$options.filters.round((((this.form.p1.p1e12_bkcu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotBKCUE', jumlah);
				return jumlah;
			},
			skorCUF(){
				var jumlah = (this.form.p1.p1f13_cu_penilaian + this.form.p1.p1f14_cu_penilaian) / 1;
				this.$emit('skorCUF', jumlah);
				return jumlah;
			},
			bobotCUF(){
				var jumlah = this.$options.filters.round((((this.form.p1.p1f13_cu_penilaian + this.form.p1.p1f14_cu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotCUF', jumlah);
				return jumlah;
			},
			skorBKCUF(){
				var jumlah = (this.form.p1.p1f13_bkcu_penilaian + this.form.p1.p1f14_bkcu_penilaian) / 1;
				this.$emit('skorBKCUF', jumlah);
				return jumlah;
			},
			bobotBKCUF(){
				var jumlah = this.$options.filters.round((((this.form.p1.p1f13_bkcu_penilaian + this.form.p1.p1f14_bkcu_penilaian) / this.jumlahIndikator) * this.bobotSkor),2);
				this.$emit('bobotBKCUF', jumlah);
				return jumlah;
			},
			jumlahPenilaianCU(value){
				var jumlah = 0;
				if(this.form.p1.p1a1_cu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1a2_cu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1b3_cu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1b4_cu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1b5_cu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1b6_cu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1b7_cu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1c8_cu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1c9_cu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1d10_cu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1d11_cu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1e12_cu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1f13_cu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1f14_cu_penilaian == value){
					jumlah++;
				}

				return jumlah;
			},
			jumlahPenilaianBKCU(value){
				var jumlah = 0;
				if(this.form.p1.p1a1_bkcu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1a2_bkcu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1b3_bkcu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1b4_bkcu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1b5_bkcu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1b6_bkcu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1b7_bkcu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1c8_bkcu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1c9_bkcu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1d10_bkcu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1d11_bkcu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1e12_bkcu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1f13_bkcu_penilaian == value){
					jumlah++;
				}
				if(this.form.p1.p1f14_bkcu_penilaian == value){
					jumlah++;
				}

				return jumlah;
			},
		},
		computed: {
			
		}
	}
</script>
