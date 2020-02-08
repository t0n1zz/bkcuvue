<template>
	<div>
		<div class="card card-body bg-info text-white">
			<h6 class="mb-0">A. PERLINDUNGAN</h6>
		</div>
		<!-- p1 -->
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
							:subtitle1="'Kurang dari 50% persediaan DCR untuk kredit lalai di atas 12 bulan dan tidak dilakukan pemutihan tunggakan (charge-off).'"
							@click2="form.p1a1_cu_penilaian = 2" 
							:subtitle2="'50-99% persediaan DCR untuk kredit lalai di atas 12 bulan dan tidak dilakukan pemutihan tunggakan (charge-off).'"
							@click3="form.p1a1_cu_penilaian = 3" 
							:subtitle3="'100% persediaan DCR untuk kredit lalai di atas 12 bulan dan pemutihan tunggakan (charge-off)setiap triwulan dalam setahun atau hanya kadang - kadang saja dilakukan.'"
							@click4="form.p1a1_cu_penilaian = 4" 
							:subtitle4="'100% persediaan DCR untuk kredit lalai di atas 12 bulan dan dilakukan pemutihan tunggakan (charge-off) setiap triwulan atau secara berkala dan konsisten.'"
						></penilaian_cu>

						<!-- keterangan -->
						<div class="form-group">
							<!-- title -->
							<h5>
								Keterangan CU:
							</h5>
							<!-- textarea -->
							<textarea rows="3" 
							type="text" 
							name="p1a1_cu_keterangan" 
							class="form-control"
							placeholder="Silahkan masukkan keterangan " v-model="form.p1a1_cu_keterangan"></textarea>
						</div>
					</div>

					<div class="col-md-12"><hr/></div>

					<!-- penilaian bkcu -->
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

							<!-- title -->
							<h5>
								Keterangan BKCU Kalimantan:
							</h5>

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

							<!-- title -->
							<h5>
								Rekomendasi BKCU Kalimantan:
							</h5>

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

		<!-- p2 -->
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
							:subtitle1="'Tidak ada persediaan DCR untuk kredit lalai 1-12 bulan dan tidak dilakukan pemutihan tunggakan (charge-off).'"
							@click2="form.p1a2_cu_penilaian = 2" 
							:subtitle2="'Kurang dari 35% DCR utk KL 1-12 bulan dan tidak dilakukan pemutihan tunggakan (charge-off).'"
							@click3="form.p1a2_cu_penilaian = 3" 
							:subtitle3="'Tersedia 35% DCR untuk kredit lalai 1-12 bulan dan pemutihan tunggakan (charge-off)setiap triwulan dalam setahun atau hanya kadang - kadang saja dilakukan.'"
							@click4="form.p1a2_cu_penilaian = 4" 
							:subtitle4="'Tersedia 35% DCR untuk kredit lalai 1-12 bulan dan dilakukan pemutihan tunggakan (charge-off) setiap bulan secara berkala dan konsisten.'"
						></penilaian_cu>

						<!-- keterangan -->
						<div class="form-group">
							<!-- title -->
							<h5>
								Keterangan CU:
							</h5>
							<!-- textarea -->
							<textarea rows="3" 
							type="text" 
							name="p1a2_cu_keterangan" 
							class="form-control"
							placeholder="Silahkan masukkan keterangan " v-model="form.p1a2_cu_keterangan"></textarea>
						</div>
					</div>

					<div class="col-md-12"><hr/></div>

					<!-- penilaian bkcu -->
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

							<!-- title -->
							<h5>
								Keterangan BKCU Kalimantan:
							</h5>

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

							<!-- title -->
							<h5>
								Rekomendasi BKCU Kalimantan:
							</h5>

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
</template>

<script>
	import penilaian_cu from "./penilaian_cu.vue";
	import penilaian_bkcu from "./penilaian_bkcu.vue";

	export default {
		props: ['form'],
		components: {
			penilaian_cu,
			penilaian_bkcu,
		},
		data() {
			return {
			}
		},
		created(){
		},
		watch: {
    },
		methods: {

		},
		computed: {

		}
	}
</script>
