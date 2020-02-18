<template>
	<div>
		<div class="row">
			<div class="col-md-3">
				<div class="card card-body bg-danger has-bg-image" @click="tabName = '1'">
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">CU: {{ jumlahPenilaianCU(1) }} / BKCU: {{ jumlahPenilaianBKCU(1) }}</h3>
							<span class="text-uppercase font-size-xs">Jumlah penilaian Poor(1)</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card card-body bg-warning has-bg-image" @click="tabName = '2'">
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">CU: {{ jumlahPenilaianCU(2) }} / BKCU: {{ jumlahPenilaianBKCU(2) }}</h3>
							<span class="text-uppercase font-size-xs">Jumlah penilaian Fair(2)</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card card-body bg-success has-bg-image" @click="tabName = '3'">
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">CU: {{ jumlahPenilaianCU(3) }} / BKCU: {{ jumlahPenilaianBKCU(3) }}</h3>
							<span class="text-uppercase font-size-xs">Jumlah penilaian Good(3)</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card card-body bg-primary has-bg-image" @click="tabName = '4'">
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">CU: {{ jumlahPenilaianCU(4) }} / BKCU: {{ jumlahPenilaianBKCU(4) }}</h3>
							<span class="text-uppercase font-size-xs">Jumlah penilaian Excellent(4)</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- A section -->
		<div v-show="tabName == 'semua'">
			<div class="card card-body bg-info text-white"> 
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">A. PERLINDUNGAN</h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>Skor CU: {{ (form.p1a1_cu_penilaian + form.p1a2_cu_penilaian) / 1 }} / Bobot Skor CU: {{ (((form.p1a1_cu_penilaian + form.p1a2_cu_penilaian)/jumlahIndikator) * bobotSkor) | round(2) }} </li>
							<li>Skor BKCU: {{ (form.p1a1_bkcu_penilaian + form.p1a2_bkcu_penilaian) / 1 }} / Bobot Skor BKCU: {{ (((form.p1a1_bkcu_penilaian + form.p1a2_bkcu_penilaian)/jumlahIndikator) * bobotSkor) | round(2) }} </li>
						</ul>	
					</div>
				</div>
			</div>
		</div>

		<!-- a1 -->
		<div v-show="tabName == 'semua' || form.p1a1_cu_penilaian == tabName">
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
							<penilaian_cu 
								:form="form.p1a1_cu_penilaian" 
								@click1="form.p1a1_cu_penilaian = 1"
								:subtitle1="'Kurang dari 50% persediaan DCR untuk kredit lalai di atas 12 bulan dan tidak dilakukan pemutihan tunggakan (charge-off)'"
								@click2="form.p1a1_cu_penilaian = 2" 
								:subtitle2="'50-99% persediaan DCR untuk kredit lalai di atas 12 bulan dan tidak dilakukan pemutihan tunggakan (charge-off)'"
								@click3="form.p1a1_cu_penilaian = 3" 
								:subtitle3="'100% persediaan DCR untuk kredit lalai di atas 12 bulan dan pemutihan tunggakan (charge-off)setiap triwulan dalam setahun atau hanya kadang - kadang saja dilakukan'"
								@click4="form.p1a1_cu_penilaian = 4" 
								:subtitle4="'100% persediaan DCR untuk kredit lalai di atas 12 bulan dan dilakukan pemutihan tunggakan (charge-off) setiap triwulan atau secara berkala dan konsisten'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU:</h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a1_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p1a1_cu_keterangan"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian_bkcu'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian_bkcu 
										:form="form.p1a1_bkcu_penilaian" 
										@click1="form.p1a1_bkcu_penilaian = 1"
										@click2="form.p1a1_bkcu_penilaian = 2" 
										@click3="form.p1a1_bkcu_penilaian = 3" 
										@click4="form.p1a1_bkcu_penilaian = 4" 
									></penilaian_bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a1_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1a1_bkcu_keterangan"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p1a1_bkcu_rekomendasi"></textarea>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- a2 -->
		<div v-show="tabName == 'semua' || form.p1a2_cu_penilaian == tabName">
			<div class="card border-info" v-if="form.p1a1_cu_penilaian != '' && form.p1a1_cu_keterangan != ''">
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
							<penilaian_cu 
								:form="form.p1a2_cu_penilaian" 
								@click1="form.p1a2_cu_penilaian = 1"
								:subtitle1="'Tidak ada persediaan DCR untuk kredit lalai 1-12 bulan dan tidak dilakukan pemutihan tunggakan (charge-off)'"
								@click2="form.p1a2_cu_penilaian = 2" 
								:subtitle2="'Kurang dari 35% DCR utk KL 1-12 bulan dan tidak dilakukan pemutihan tunggakan (charge-off)'"
								@click3="form.p1a2_cu_penilaian = 3" 
								:subtitle3="'Tersedia 35% DCR untuk kredit lalai 1-12 bulan dan pemutihan tunggakan (charge-off)setiap triwulan dalam setahun atau hanya kadang - kadang saja dilakukan'"
								@click4="form.p1a2_cu_penilaian = 4" 
								:subtitle4="'Tersedia 35% DCR untuk kredit lalai 1-12 bulan dan dilakukan pemutihan tunggakan (charge-off) setiap bulan secara berkala dan konsisten'"
							></penilaian_cu>
							<!-- keterangan -->
							<div class="form-group">
								<h5>Keterangan CU:</h5>
								<!-- textarea -->
								<textarea rows="3" 
								type="text" 
								name="p1a2_cu_keterangan" 
								class="form-control"
								placeholder="Silahkan masukkan keterangan " v-model="form.p1a2_cu_keterangan"></textarea>
							</div>
						</div>
						<!-- penilaian bkcu -->
						<div class="col-md-12" v-if="mode == 'penilaian_bkcu'">
							<div class="row">
								<div class="col-md-12"><hr/></div>
								<div class="col-md-12">
									<h5>Penilaian BKCU Kalimantan:</h5>
									<!-- penilaian -->
									<penilaian_bkcu 
										:form="form.p1a2_bkcu_penilaian" 
										@click1="form.p1a2_bkcu_penilaian = 1"
										@click2="form.p1a2_bkcu_penilaian = 2" 
										@click3="form.p1a2_bkcu_penilaian = 3" 
										@click4="form.p1a2_bkcu_penilaian = 4" 
									></penilaian_bkcu>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<h5>Keterangan BKCU Kalimantan:</h5>
										<!-- textarea -->
										<textarea rows="3" 
										type="text" 
										name="p1a2_bkcu_keterangan" 
										class="form-control"
										placeholder="Silahkan masukkan keterangan " v-model="form.p1a2_bkcu_keterangan"></textarea>
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
										placeholder="Silahkan masukkan rekomendasi " v-model="form.p1a2_bkcu_rekomendasi"></textarea>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- B section -->
		<div v-show="tabName == 'semua'">
			<div class="card card-body bg-warning text-white" v-if="form.p1a2_cu_penilaian != '' && form.p1a2_cu_keterangan != ''">
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">B. STRUKTUR KEUANGAN YANG EFEKTIF </h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>Skor CU: {{ (form.p1b3_cu_penilaian + form.p1b4_cu_penilaian + form.p1b5_cu_penilaian + form.p1b6_cu_penilaian + form.p1b7_cu_penilaian) / 1 }} / Bobot Skor CU: {{ (((form.p1b3_cu_penilaian + form.p1b4_cu_penilaian + form.p1b5_cu_penilaian + form.p1b6_cu_penilaian + form.p1b7_cu_penilaian)/jumlahIndikator) * bobotSkor) | round(2) }} </li>
							<li>Skor BKCU: {{ (form.p1b3_bkcu_penilaian + form.p1b4_bkcu_penilaian + form.p1b5_bkcu_penilaian + form.p1b6_bkcu_penilaian + form.p1b7_bkcu_penilaian) / 1 }} / Bobot Skor BKCU: {{ (((form.p1b3_bkcu_penilaian + form.p1b4_bkcu_penilaian + form.p1b5_bkcu_penilaian + form.p1b6_bkcu_penilaian + form.p1b7_bkcu_penilaian)/jumlahIndikator) * bobotSkor) | round(2) }} </li>
						</ul>	
					</div>
				</div>	
			</div>
		</div>

		<!-- b3 -->
		<div class="card border-warning" v-if="form.p1a2_cu_penilaian != '' && form.p1a2_cu_keterangan != ''">
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
						<penilaian_cu 
							:form="form.p1b3_cu_penilaian" 
							@click1="form.p1b3_cu_penilaian = 1"
							:subtitle1="'Kurang dari 50% total aset ; dan lebih dari 80% total aset'"
							@click2="form.p1b3_cu_penilaian = 2" 
							:subtitle2="'51-69% dari total aset'"
							@click3="form.p1b3_cu_penilaian = 3" 
							:subtitle3="'70-80% dari total aset'"
							@click4="form.p1b3_cu_penilaian = 4" 
							:subtitle4="'70-80% dari total aset dan portofolio pinjaman beragam minimal 5 produk pinjaman'"
						></penilaian_cu>
						<!-- keterangan -->
						<div class="form-group">
							<h5>Keterangan CU:</h5>
							<!-- textarea -->
							<textarea rows="3" 
							type="text" 
							name="p1b3_cu_keterangan" 
							class="form-control"
							placeholder="Silahkan masukkan keterangan " v-model="form.p1b3_cu_keterangan"></textarea>
						</div>
					</div>

					<!-- penilaian bkcu -->
					<div class="col-md-12" v-if="mode == 'penilaian_bkcu'">
						<div class="row">
							<div class="col-md-12"><hr/></div>
							<div class="col-md-12">
								<h5>Penilaian BKCU Kalimantan:</h5>
								<!-- penilaian -->
								<penilaian_bkcu 
									:form="form.p1b3_bkcu_penilaian" 
									@click1="form.p1b3_bkcu_penilaian = 1"
									@click2="form.p1b3_bkcu_penilaian = 2" 
									@click3="form.p1b3_bkcu_penilaian = 3" 
									@click4="form.p1b3_bkcu_penilaian = 4" 
								></penilaian_bkcu>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<h5>Keterangan BKCU Kalimantan:</h5>
									<!-- textarea -->
									<textarea rows="3" 
									type="text" 
									name="p1b3_bkcu_keterangan" 
									class="form-control"
									placeholder="Silahkan masukkan keterangan " v-model="form.p1b3_bkcu_keterangan"></textarea>
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
									placeholder="Silahkan masukkan rekomendasi " v-model="form.p1b3_bkcu_rekomendasi"></textarea>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- b4 -->
		<div class="card border-warning" v-if="form.p1b3_cu_penilaian != '' && form.p1b3_cu_keterangan != ''">
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
						<penilaian_cu 
							:form="form.p1b4_cu_penilaian" 
							@click1="form.p1b4_cu_penilaian = 1"
							:subtitle1="'Kurang dari 50% total aset ; dan lebih dari 80% total aset'"
							@click2="form.p1b4_cu_penilaian = 2" 
							:subtitle2="'51-69% dari total aset'"
							@click3="form.p1b4_cu_penilaian = 3" 
							:subtitle3="'70-80% dari total aset'"
							@click4="form.p1b4_cu_penilaian = 4" 
							:subtitle4="'70-80% dari total aset dan portofolio pinjaman beragam minimal 5 jenis simpanan'"
						></penilaian_cu>
						<!-- keterangan -->
						<div class="form-group">
							<h5>Keterangan CU:</h5>
							<!-- textarea -->
							<textarea rows="3" 
							type="text" 
							name="p1b4_cu_keterangan" 
							class="form-control"
							placeholder="Silahkan masukkan keterangan " v-model="form.p1b4_cu_keterangan"></textarea>
						</div>
					</div>

					<!-- penilaian bkcu -->
					<div class="col-md-12" v-if="mode == 'penilaian_bkcu'">
						<div class="row">
							<div class="col-md-12"><hr/></div>
							<div class="col-md-12">
								<h5>Penilaian BKCU Kalimantan:</h5>
								<!-- penilaian -->
								<penilaian_bkcu 
									:form="form.p1b4_bkcu_penilaian" 
									@click1="form.p1b4_bkcu_penilaian = 1"
									@click2="form.p1b4_bkcu_penilaian = 2" 
									@click3="form.p1b4_bkcu_penilaian = 3" 
									@click4="form.p1b4_bkcu_penilaian = 4" 
								></penilaian_bkcu>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<h5>Keterangan BKCU Kalimantan:</h5>
									<!-- textarea -->
									<textarea rows="3" 
									type="text" 
									name="p1b4_bkcu_keterangan" 
									class="form-control"
									placeholder="Silahkan masukkan keterangan " v-model="form.p1b4_bkcu_keterangan"></textarea>
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
									placeholder="Silahkan masukkan rekomendasi " v-model="form.p1b4_bkcu_rekomendasi"></textarea>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- b5 -->
		<div class="card border-warning" v-if="form.p1b4_cu_penilaian != '' && form.p1b4_cu_keterangan != ''">
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
						<penilaian_cu 
							:form="form.p1b5_cu_penilaian" 
							@click1="form.p1b5_cu_penilaian = 1"
							:subtitle1="'Di atas 30% dari total aset'"
							@click2="form.p1b5_cu_penilaian = 2" 
							:subtitle2="'20-30% dari total aset'"
							@click3="form.p1b5_cu_penilaian = 3" 
							:subtitle3="'1-19 % dari total aset'"
							@click4="form.p1b5_cu_penilaian = 4" 
							:subtitle4="'0%'"
						></penilaian_cu>
						<!-- keterangan -->
						<div class="form-group">
							<h5>Keterangan CU:</h5>
							<!-- textarea -->
							<textarea rows="3" 
							type="text" 
							name="p1b5_cu_keterangan" 
							class="form-control"
							placeholder="Silahkan masukkan keterangan " v-model="form.p1b5_cu_keterangan"></textarea>
						</div>
					</div>

					<!-- penilaian bkcu -->
					<div class="col-md-12" v-if="mode == 'penilaian_bkcu'">
						<div class="row">
							<div class="col-md-12"><hr/></div>
							<div class="col-md-12">
								<h5>Penilaian BKCU Kalimantan:</h5>
								<!-- penilaian -->
								<penilaian_bkcu 
									:form="form.p1b5_bkcu_penilaian" 
									@click1="form.p1b5_bkcu_penilaian = 1"
									@click2="form.p1b5_bkcu_penilaian = 2" 
									@click3="form.p1b5_bkcu_penilaian = 3" 
									@click4="form.p1b5_bkcu_penilaian = 4" 
								></penilaian_bkcu>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<h5>Keterangan BKCU Kalimantan:</h5>
									<!-- textarea -->
									<textarea rows="3" 
									type="text" 
									name="p1b5_bkcu_keterangan" 
									class="form-control"
									placeholder="Silahkan masukkan keterangan " v-model="form.p1b5_bkcu_keterangan"></textarea>
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
									placeholder="Silahkan masukkan rekomendasi " v-model="form.p1b5_bkcu_rekomendasi"></textarea>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- b6 -->
		<div class="card border-warning" v-if="form.p1b5_cu_penilaian != '' && form.p1b5_cu_keterangan != ''">
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
						<penilaian_cu 
							:form="form.p1b6_cu_penilaian" 
							@click1="form.p1b6_cu_penilaian = 1"
							:subtitle1="'Di bawah 5% dari total aset'"
							@click2="form.p1b6_cu_penilaian = 2" 
							:subtitle2="'5-9% dari total aset'"
							@click3="form.p1b6_cu_penilaian = 3" 
							:subtitle3="'10% dari total aset '"
							@click4="form.p1b6_cu_penilaian = 4" 
							:subtitle4="'Di atas 10% dari total aset tetapi tidak melampaui 20% dari total aset'"
						></penilaian_cu>
						<!-- keterangan -->
						<div class="form-group">
							<h5>Keterangan CU:</h5>
							<!-- textarea -->
							<textarea rows="3" 
							type="text" 
							name="p1b6_cu_keterangan" 
							class="form-control"
							placeholder="Silahkan masukkan keterangan " v-model="form.p1b6_cu_keterangan"></textarea>
						</div>
					</div>

					<!-- penilaian bkcu -->
					<div class="col-md-12" v-if="mode == 'penilaian_bkcu'">
						<div class="row">
							<div class="col-md-12"><hr/></div>
							<div class="col-md-12">
								<h5>Penilaian BKCU Kalimantan:</h5>
								<!-- penilaian -->
								<penilaian_bkcu 
									:form="form.p1b6_bkcu_penilaian" 
									@click1="form.p1b6_bkcu_penilaian = 1"
									@click2="form.p1b6_bkcu_penilaian = 2" 
									@click3="form.p1b6_bkcu_penilaian = 3" 
									@click4="form.p1b6_bkcu_penilaian = 4" 
								></penilaian_bkcu>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<h5>Keterangan BKCU Kalimantan:</h5>
									<!-- textarea -->
									<textarea rows="3" 
									type="text" 
									name="p1b6_bkcu_keterangan" 
									class="form-control"
									placeholder="Silahkan masukkan keterangan " v-model="form.p1b6_bkcu_keterangan"></textarea>
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
									placeholder="Silahkan masukkan rekomendasi " v-model="form.p1b6_bkcu_rekomendasi"></textarea>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- b7 -->
		<div class="card border-warning" v-if="form.p1b6_cu_penilaian != '' && form.p1b6_cu_keterangan != ''">
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
						<penilaian_cu 
							:form="form.p1b7_cu_penilaian" 
							@click1="form.p1b7_cu_penilaian = 1"
							:subtitle1="'Di bawah 4% dari total aset'"
							@click2="form.p1b7_cu_penilaian = 2" 
							:subtitle2="'4-9% dari total aset'"
							@click3="form.p1b7_cu_penilaian = 3" 
							:subtitle3="'10% dari total aset '"
							@click4="form.p1b7_cu_penilaian = 4" 
							:subtitle4="'Di atas 10% dari total aset'"
						></penilaian_cu>
						<!-- keterangan -->
						<div class="form-group">
							<h5>Keterangan CU:</h5>
							<!-- textarea -->
							<textarea rows="3" 
							type="text" 
							name="p1b7_cu_keterangan" 
							class="form-control"
							placeholder="Silahkan masukkan keterangan " v-model="form.p1b7_cu_keterangan"></textarea>
						</div>
					</div>

					<!-- penilaian bkcu -->
					<div class="col-md-12" v-if="mode == 'penilaian_bkcu'">
						<div class="row">
							<div class="col-md-12"><hr/></div>
							<div class="col-md-12">
								<h5>Penilaian BKCU Kalimantan:</h5>
								<!-- penilaian -->
								<penilaian_bkcu 
									:form="form.p1b7_bkcu_penilaian" 
									@click1="form.p1b7_bkcu_penilaian = 1"
									@click2="form.p1b7_bkcu_penilaian = 2" 
									@click3="form.p1b7_bkcu_penilaian = 3" 
									@click4="form.p1b7_bkcu_penilaian = 4" 
								></penilaian_bkcu>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<h5>Keterangan BKCU Kalimantan:</h5>
									<!-- textarea -->
									<textarea rows="3" 
									type="text" 
									name="p1b7_bkcu_keterangan" 
									class="form-control"
									placeholder="Silahkan masukkan keterangan " v-model="form.p1b7_bkcu_keterangan"></textarea>
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
									placeholder="Silahkan masukkan rekomendasi " v-model="form.p1b7_bkcu_rekomendasi"></textarea>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- C section -->
		<div v-show="tabName == 'semua'">
			<div class="card card-body bg-success text-white" v-if="form.p1b7_cu_penilaian != '' && form.p1b7_cu_keterangan != ''">
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">C. KUALITAS ASET</h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>Skor CU: {{ (form.p1c8_cu_penilaian + form.p1c9_cu_penilaian) / 1 }} / Bobot Skor CU: {{ (((form.p1c8_cu_penilaian + form.p1c9_cu_penilaian)/jumlahIndikator) * bobotSkor) | round(2) }} </li>
							<li>Skor BKCU: {{ (form.p1c8_bkcu_penilaian + form.p1c9_bkcu_penilaian) / 1 }} / Bobot Skor BKCU: {{ (((form.p1c8_bkcu_penilaian + form.p1c9_bkcu_penilaian)/jumlahIndikator) * bobotSkor) | round(2) }} </li>
						</ul>	
					</div>
				</div>	
			</div>
		</div>

		<!-- c8 -->
		<div class="card border-success" v-if="form.p1b7_cu_penilaian != '' && form.p1b7_cu_keterangan != ''">
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
						<penilaian_cu 
							:form="form.p1c8_cu_penilaian" 
							@click1="form.p1c8_cu_penilaian = 1"
							:subtitle1="'Di atas 10% dari pinjaman beredar'"
							@click2="form.p1c8_cu_penilaian = 2" 
							:subtitle2="'6-10% dari pinjaman beredar'"
							@click3="form.p1c8_cu_penilaian = 3" 
							:subtitle3="'≤  5% dari pinjaman beredar'"
							@click4="form.p1c8_cu_penilaian = 4" 
							:subtitle4="'0%'"
						></penilaian_cu>
						<!-- keterangan -->
						<div class="form-group">
							<h5>Keterangan CU:</h5>
							<!-- textarea -->
							<textarea rows="3" 
							type="text" 
							name="p1c8_cu_keterangan" 
							class="form-control"
							placeholder="Silahkan masukkan keterangan " v-model="form.p1c8_cu_keterangan"></textarea>
						</div>
					</div>

					<!-- penilaian bkcu -->
					<div class="col-md-12" v-if="mode == 'penilaian_bkcu'">
						<div class="row">
							<div class="col-md-12"><hr/></div>
							<div class="col-md-12">
								<h5>Penilaian BKCU Kalimantan:</h5>
								<!-- penilaian -->
								<penilaian_bkcu 
									:form="form.p1c8_bkcu_penilaian" 
									@click1="form.p1c8_bkcu_penilaian = 1"
									@click2="form.p1c8_bkcu_penilaian = 2" 
									@click3="form.p1c8_bkcu_penilaian = 3" 
									@click4="form.p1c8_bkcu_penilaian = 4" 
								></penilaian_bkcu>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<h5>Keterangan BKCU Kalimantan:</h5>
									<!-- textarea -->
									<textarea rows="3" 
									type="text" 
									name="p1c8_bkcu_keterangan" 
									class="form-control"
									placeholder="Silahkan masukkan keterangan " v-model="form.p1c8_bkcu_keterangan"></textarea>
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
									placeholder="Silahkan masukkan rekomendasi " v-model="form.p1c8_bkcu_rekomendasi"></textarea>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- c9 -->
		<div class="card border-success" v-if="form.p1c8_cu_penilaian != '' && form.p1c8_cu_keterangan != ''">
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
						<penilaian_cu 
							:form="form.p1c9_cu_penilaian" 
							@click1="form.p1c9_cu_penilaian = 1"
							:subtitle1="'Di atas 10% dari total aset'"
							@click2="form.p1c9_cu_penilaian = 2" 
							:subtitle2="'6-9% dari total aset'"
							@click3="form.p1c9_cu_penilaian = 3" 
							:subtitle3="'5% dari total aset'"
							@click4="form.p1c9_cu_penilaian = 4" 
							:subtitle4="'Di bawah 5% dari total aset'"
						></penilaian_cu>
						<!-- keterangan -->
						<div class="form-group">
							<h5>Keterangan CU:</h5>
							<!-- textarea -->
							<textarea rows="3" 
							type="text" 
							name="p1c9_cu_keterangan" 
							class="form-control"
							placeholder="Silahkan masukkan keterangan " v-model="form.p1c9_cu_keterangan"></textarea>
						</div>
					</div>

					<!-- penilaian bkcu -->
					<div class="col-md-12" v-if="mode == 'penilaian_bkcu'">
						<div class="row">
							<div class="col-md-12"><hr/></div>
							<div class="col-md-12">
								<h5>Penilaian BKCU Kalimantan:</h5>
								<!-- penilaian -->
								<penilaian_bkcu 
									:form="form.p1c9_bkcu_penilaian" 
									@click1="form.p1c9_bkcu_penilaian = 1"
									@click2="form.p1c9_bkcu_penilaian = 2" 
									@click3="form.p1c9_bkcu_penilaian = 3" 
									@click4="form.p1c9_bkcu_penilaian = 4" 
								></penilaian_bkcu>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<h5>Keterangan BKCU Kalimantan:</h5>
									<!-- textarea -->
									<textarea rows="3" 
									type="text" 
									name="p1c9_bkcu_keterangan" 
									class="form-control"
									placeholder="Silahkan masukkan keterangan " v-model="form.p1c9_bkcu_keterangan"></textarea>
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
									placeholder="Silahkan masukkan rekomendasi " v-model="form.p1c9_bkcu_rekomendasi"></textarea>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- D section -->
		<div v-show="tabName == 'semua'">
			<div class="card card-body bg-brown text-white" v-if="form.p1c9_cu_penilaian != '' && form.p1c9_cu_keterangan != ''">
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">D. NILAI PENGEMBALIAN ATAS PEMBIAYAAN</h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>Skor CU: {{ (form.p1d10_cu_penilaian + form.p1d11_cu_penilaian) / 1 }} / Bobot Skor CU: {{ (((form.p1d10_cu_penilaian + form.p1d11_cu_penilaian)/jumlahIndikator) * bobotSkor) | round(2) }} </li>
							<li>Skor BKCU: {{ (form.p1d10_bkcu_penilaian + form.p1d11_bkcu_penilaian) / 1 }} / Bobot Skor BKCU: {{ (((form.p1d10_bkcu_penilaian + form.p1d11_bkcu_penilaian)/jumlahIndikator) * bobotSkor) | round(2) }} </li>
						</ul>	
					</div>
				</div>	
			</div>
		</div>

		<!-- d10 -->
		<div class="card border-brown" v-if="form.p1c9_cu_penilaian != '' && form.p1c9_cu_keterangan != ''">
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
						<penilaian_cu 
							:form="form.p1d10_cu_penilaian" 
							@click1="form.p1d10_cu_penilaian = 1"
							:subtitle1="'Deviden anggota dibawah harga pasar'"
							@click2="form.p1d10_cu_penilaian = 2" 
							:subtitle2="'Deviden dibayar dibawah atau 2% lebih tinggi dari pasar'"
							@click3="form.p1d10_cu_penilaian = 3" 
							:subtitle3="'Deviden dibayar 1% lebih tinggi dari pasar'"
							@click4="form.p1d10_cu_penilaian = 4" 
							:subtitle4="'Deviden dibayar setara bunga pasar'"
						></penilaian_cu>
						<!-- keterangan -->
						<div class="form-group">
							<h5>Keterangan CU:</h5>
							<!-- textarea -->
							<textarea rows="3" 
							type="text" 
							name="p1d10_cu_keterangan" 
							class="form-control"
							placeholder="Silahkan masukkan keterangan " v-model="form.p1d10_cu_keterangan"></textarea>
						</div>
					</div>

					<!-- penilaian bkcu -->
					<div class="col-md-12" v-if="mode == 'penilaian_bkcu'">
						<div class="row">
							<div class="col-md-12"><hr/></div>
							<div class="col-md-12">
								<h5>Penilaian BKCU Kalimantan:</h5>
								<!-- penilaian -->
								<penilaian_bkcu 
									:form="form.p1d10_bkcu_penilaian" 
									@click1="form.p1d10_bkcu_penilaian = 1"
									@click2="form.p1d10_bkcu_penilaian = 2" 
									@click3="form.p1d10_bkcu_penilaian = 3" 
									@click4="form.p1d10_bkcu_penilaian = 4" 
								></penilaian_bkcu>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<h5>Keterangan BKCU Kalimantan:</h5>
									<!-- textarea -->
									<textarea rows="3" 
									type="text" 
									name="p1d10_bkcu_keterangan" 
									class="form-control"
									placeholder="Silahkan masukkan keterangan " v-model="form.p1d10_bkcu_keterangan"></textarea>
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
									placeholder="Silahkan masukkan rekomendasi " v-model="form.p1d10_bkcu_rekomendasi"></textarea>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- d11 -->
		<div class="card border-brown" v-if="form.p1d10_cu_penilaian != '' && form.p1d10_cu_keterangan != ''">
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
						<penilaian_cu 
							:form="form.p1d11_cu_penilaian" 
							@click1="form.p1d11_cu_penilaian = 1"
							:subtitle1="'Biaya Operasional dibawah 5% dari rata-rata aset dan staf tidak mampu melaksanakan kegiatan operasional'"
							@click2="form.p1d11_cu_penilaian = 2" 
							:subtitle2="'Biaya Operasional >5% dari rata-rata aset '"
							@click3="form.p1d11_cu_penilaian = 3" 
							:subtitle3="'Biaya Operasional sebesar 5% dari rata-rata aset'"
							@click4="form.p1d11_cu_penilaian = 4" 
							:subtitle4="'Biaya Operasional sebesar 5% dari rata-rata aset dengan jumlah staf yang memadai dan gaji kompetitif'"
						></penilaian_cu>
						<!-- keterangan -->
						<div class="form-group">
							<h5>Keterangan CU:</h5>
							<!-- textarea -->
							<textarea rows="3" 
							type="text" 
							name="p1d11_cu_keterangan" 
							class="form-control"
							placeholder="Silahkan masukkan keterangan " v-model="form.p1d11_cu_keterangan"></textarea>
						</div>
					</div>

					<!-- penilaian bkcu -->
					<div class="col-md-12" v-if="mode == 'penilaian_bkcu'">
						<div class="row">
							<div class="col-md-12"><hr/></div>
							<div class="col-md-12">
								<h5>Penilaian BKCU Kalimantan:</h5>
								<!-- penilaian -->
								<penilaian_bkcu 
									:form="form.p1d11_bkcu_penilaian" 
									@click1="form.p1d11_bkcu_penilaian = 1"
									@click2="form.p1d11_bkcu_penilaian = 2" 
									@click3="form.p1d11_bkcu_penilaian = 3" 
									@click4="form.p1d11_bkcu_penilaian = 4" 
								></penilaian_bkcu>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<h5>Keterangan BKCU Kalimantan:</h5>
									<!-- textarea -->
									<textarea rows="3" 
									type="text" 
									name="p1d11_bkcu_keterangan" 
									class="form-control"
									placeholder="Silahkan masukkan keterangan " v-model="form.p1d11_bkcu_keterangan"></textarea>
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
									placeholder="Silahkan masukkan rekomendasi " v-model="form.p1d11_bkcu_rekomendasi"></textarea>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- E section -->
		<div v-show="tabName == 'semua'">
			<div class="card card-body bg-danger text-white" v-if="form.p1d11_cu_penilaian != '' && form.p1d11_cu_keterangan != ''">
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">E. LIKUIDITAS</h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>Skor CU: {{ (form.p1e12_cu_penilaian) / 1 }} / Bobot Skor CU: {{ (((form.p1e12_cu_penilaian)/jumlahIndikator) * bobotSkor) | round(2) }} </li>
							<li>Skor BKCU: {{ (form.p1e12_bkcu_penilaian) / 1 }} / Bobot Skor BKCU: {{ (((form.p1e12_bkcu_penilaian)/jumlahIndikator) * bobotSkor) | round(2) }} </li>
						</ul>	
					</div>
				</div>	
			</div>
		</div>

		<!-- e12 -->
		<div class="card border-danger" v-if="form.p1d11_cu_penilaian != '' && form.p1d11_cu_keterangan != ''">
			<div class="card-header bg-danger text-white">
				<h5 class="card-title">
					12. L1 = Mengukur persentase cadangan likuid untuk memenuhi permintaan penarikan setelah membayar semua kewajiban< 30 hari</h5>
			</div>
			<div class="card-body">
				<div class="row">
					<!-- penilaian cu -->
					<div class="col-md-12">
						<h5>Penilaian CU:</h5>
						<!-- penilaian -->
						<penilaian_cu 
							:form="form.p1e12_cu_penilaian" 
							@click1="form.p1e12_cu_penilaian = 1"
							:subtitle1="'Dibawah 10% dari simpanan non saham atau lebih dari 15%  simpanan non saham, dan jumlah tersebut melampaui 20% total aset'"
							@click2="form.p1e12_cu_penilaian = 2" 
							:subtitle2="'10 -15% dari simpanan non saham tetapi tidak melampaui 20% total aset'"
							@click3="form.p1e12_cu_penilaian = 3" 
							:subtitle3="'15% dari simpanan non saham tetapi tidak melampaui 20% dari total aset'"
							@click4="form.p1e12_cu_penilaian = 4" 
							:subtitle4="'Diatas 15% dari simpanan non saham tetapi tidak melampaui 20% dari total aset'"
						></penilaian_cu>
						<!-- keterangan -->
						<div class="form-group">
							<h5>Keterangan CU:</h5>
							<!-- textarea -->
							<textarea rows="3" 
							type="text" 
							name="p1e12_cu_keterangan" 
							class="form-control"
							placeholder="Silahkan masukkan keterangan " v-model="form.p1e12_cu_keterangan"></textarea>
						</div>
					</div>

					<!-- penilaian bkcu -->
					<div class="col-md-12" v-if="mode == 'penilaian_bkcu'">
						<div class="row">
							<div class="col-md-12"><hr/></div>
							<div class="col-md-12">
								<h5>Penilaian BKCU Kalimantan:</h5>
								<!-- penilaian -->
								<penilaian_bkcu 
									:form="form.p1e12_bkcu_penilaian" 
									@click1="form.p1e12_bkcu_penilaian = 1"
									@click2="form.p1e12_bkcu_penilaian = 2" 
									@click3="form.p1e12_bkcu_penilaian = 3" 
									@click4="form.p1e12_bkcu_penilaian = 4" 
								></penilaian_bkcu>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<h5>Keterangan BKCU Kalimantan:</h5>
									<!-- textarea -->
									<textarea rows="3" 
									type="text" 
									name="p1e12_bkcu_keterangan" 
									class="form-control"
									placeholder="Silahkan masukkan keterangan " v-model="form.p1e12_bkcu_keterangan"></textarea>
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
									placeholder="Silahkan masukkan rekomendasi " v-model="form.p1e12_bkcu_rekomendasi"></textarea>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- F section -->
		<div v-show="tabName == 'semua'">
			<div class="card card-body bg-teal text-white" v-if="form.p1e12_cu_penilaian != '' && form.p1e12_cu_keterangan != ''">
				<div class="row justify-content-between">
					<div class="col-md-6">
						<h6 class="mb-0 font-weight-bold">F. PERTUMBUHAN</h6>
					</div>
					<div class="col-md-6 text-right">
						<ul class="list-inline mb-0 font-weight-bold">
							<li>Skor CU: {{ (form.p1f13_cu_penilaian + form.p1f14_cu_penilaian) / 1 }} / Bobot Skor CU: {{ (((form.p1f13_cu_penilaian + form.p1f14_cu_penilaian)/jumlahIndikator) * bobotSkor) | round(2) }} </li>
							<li>Skor BKCU: {{ (form.p1f13_bkcu_penilaian + form.p1f14_bkcu_penilaian) / 1 }} / Bobot Skor BKCU: {{ (((form.p1f13_bkcu_penilaian + form.p1f14_bkcu_penilaian)/jumlahIndikator) * bobotSkor) | round(2)}} </li>
						</ul>	
					</div>
				</div>	
			</div>
		</div>

		<!-- f13 -->
		<div class="card border-teal" v-if="form.p1e12_cu_penilaian != '' && form.p1e12_cu_keterangan != ''">
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
						<penilaian_cu 
							:form="form.p1f13_cu_penilaian" 
							@click1="form.p1f13_cu_penilaian = 1"
							:subtitle1="'Kurang dari 5%'"
							@click2="form.p1f13_cu_penilaian = 2" 
							:subtitle2="'5-11%'"
							@click3="form.p1f13_cu_penilaian = 3" 
							:subtitle3="'12%'"
							@click4="form.p1f13_cu_penilaian = 4" 
							:subtitle4="'Lebih dari 12%'"
						></penilaian_cu>
						<!-- keterangan -->
						<div class="form-group">
							<h5>Keterangan CU:</h5>
							<!-- textarea -->
							<textarea rows="3" 
							type="text" 
							name="p1f13_cu_keterangan" 
							class="form-control"
							placeholder="Silahkan masukkan keterangan " v-model="form.p1f13_cu_keterangan"></textarea>
						</div>
					</div>

					<!-- penilaian bkcu -->
					<div class="col-md-12" v-if="mode == 'penilaian_bkcu'">
						<div class="row">
							<div class="col-md-12"><hr/></div>
							<div class="col-md-12">
								<h5>Penilaian BKCU Kalimantan:</h5>
								<!-- penilaian -->
								<penilaian_bkcu 
									:form="form.p1f13_bkcu_penilaian" 
									@click1="form.p1f13_bkcu_penilaian = 1"
									@click2="form.p1f13_bkcu_penilaian = 2" 
									@click3="form.p1f13_bkcu_penilaian = 3" 
									@click4="form.p1f13_bkcu_penilaian = 4" 
								></penilaian_bkcu>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<h5>Keterangan BKCU Kalimantan:</h5>
									<!-- textarea -->
									<textarea rows="3" 
									type="text" 
									name="p1f13_bkcu_keterangan" 
									class="form-control"
									placeholder="Silahkan masukkan keterangan " v-model="form.p1f13_bkcu_keterangan"></textarea>
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
									placeholder="Silahkan masukkan rekomendasi " v-model="form.p1f13_bkcu_rekomendasi"></textarea>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- f14 -->
		<div class="card border-teal" v-if="form.p1f13_cu_penilaian != '' && form.p1f13_cu_keterangan != ''">
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
						<penilaian_cu 
							:form="form.p1f14_cu_penilaian" 
							@click1="form.p1f14_cu_penilaian = 1"
							:subtitle1="'Kurang dari tingkat inflasi'"
							@click2="form.p1f14_cu_penilaian = 2" 
							:subtitle2="'1-4 % lebih tinggi dari tingkat Inflasi'"
							@click3="form.p1f14_cu_penilaian = 3" 
							:subtitle3="'5-9% lebih tinggi dari tingkat inflasi'"
							@click4="form.p1f14_cu_penilaian = 4" 
							:subtitle4="'Lebih dari 10% dibanding tingkat inflasi'"
						></penilaian_cu>
						<!-- keterangan -->
						<div class="form-group">
							<h5>Keterangan CU:</h5>
							<!-- textarea -->
							<textarea rows="3" 
							type="text" 
							name="p1f14_cu_keterangan" 
							class="form-control"
							placeholder="Silahkan masukkan keterangan " v-model="form.p1f14_cu_keterangan"></textarea>
						</div>
					</div>

					<!-- penilaian bkcu -->
					<div class="col-md-12" v-if="mode == 'penilaian_bkcu'">
						<div class="row">
							<div class="col-md-12"><hr/></div>
							<div class="col-md-12">
								<h5>Penilaian BKCU Kalimantan:</h5>
								<!-- penilaian -->
								<penilaian_bkcu 
									:form="form.p1f14_bkcu_penilaian" 
									@click1="form.p1f14_bkcu_penilaian = 1"
									@click2="form.p1f14_bkcu_penilaian = 2" 
									@click3="form.p1f14_bkcu_penilaian = 3" 
									@click4="form.p1f14_bkcu_penilaian = 4" 
								></penilaian_bkcu>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<h5>Keterangan BKCU Kalimantan:</h5>
									<!-- textarea -->
									<textarea rows="3" 
									type="text" 
									name="p1f14_bkcu_keterangan" 
									class="form-control"
									placeholder="Silahkan masukkan keterangan " v-model="form.p1f14_bkcu_keterangan"></textarea>
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
									placeholder="Silahkan masukkan rekomendasi " v-model="form.p1f14_bkcu_rekomendasi"></textarea>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		
		<div v-show="tabName == 'semua'">
			<div class="card card-body" v-if="form.p1f14_cu_penilaian != '' && form.p1f14_cu_keterangan != ''">
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
          
	</div>
</template>

<script>
	import penilaian_cu from "./penilaian_cu.vue";
	import penilaian_bkcu from "./penilaian_bkcu.vue";

	export default {
		props: ['form','mode','jumlahIndikator','bobotSkor'],
		components: {
			penilaian_cu,
			penilaian_bkcu,
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
			next(){
				this.$emit('next');
			},
			jumlahPenilaianCU(nilai){
				var jumlah = 0;
				if(this.form.p1a1_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1a2_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1b3_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1b4_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1b5_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1b6_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1b7_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1c8_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1c9_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1d10_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1d11_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1e12_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1f13_cu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1f14_cu_penilaian == nilai){
					jumlah++;
				}

				return jumlah;
			},
			jumlahPenilaianBKCU(nilai){
				var jumlah = 0;
				if(this.form.p1a1_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1a2_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1b3_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1b4_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1b5_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1b6_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1b7_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1c8_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1c9_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1d10_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1d11_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1e12_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1f13_bkcu_penilaian == nilai){
					jumlah++;
				}
				if(this.form.p1f14_bkcu_penilaian == nilai){
					jumlah++;
				}

				return jumlah;
			},
		},
		computed: {
			
		}
	}
</script>
