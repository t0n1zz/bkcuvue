<template>
	<div>

		<div class="card  border-top-2 border-top-primary rounded-top-0">
			<div class="card-header bg-white">
				<h5 class="card-title">5. KESIMPULAN</h5>
			</div>
			<div class="card-body">
				<p>Berdasarkan pengisian indikator di masing-masing perspektif oleh CU, maka dapat disimpulkan bahwa</p>
				<div class="table-responsive">
					<table class="table table-bordered">
						<thead class="bg-primary">
							<tr class="text-nowarp">
								<th>BRANDING CU</th>
								<th>NILAI</th>
								<th>KESEPADANAN (%)</th>
								<th>Kelalaian Pinjaman / A1 (%)</th>
								<th>Modal Lembaga / E9 (%)</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<span v-if="nilaiTotalBobotCU > 59 && nilaiTotalBobotCU < 71">
										<span v-if="a1 < 10 && e9 >= 5">
											PERUNGGU (BRONZE)
										</span>
										<span v-else>MAAF ANDA BELUM BISA MENDAPATKAN ACCESS BRANDING</span>
									</span>
									<span v-else-if="nilaiTotalBobotCU > 70 && nilaiTotalBobotCU < 81">
										<span v-if="a1 < 7 && e9 >= 8">	
											PERAK (SILVER)
										</span>
										<span v-else>
											PERUNGGU (BRONZE)
										</span>
									</span>
									<span v-else-if="nilaiTotalBobotCU > 81 && nilaiTotalBobotCU < 91">	
										<span v-if="a1 < 5 && e9 >= 10">		
											EMAS (GOLD)
										</span>
										<span v-else>
											PERAK (SILVER)
										</span>
									</span>
									<span v-else-if="nilaiTotalBobotCU > 90">
										<span v-if="a1 = 0 && e9 > 10">		
											PLATINA (PLATINUM)
										</span>
										<span v-else>
											EMAS (GOLD)
										</span>
									</span>
									<span v-else>MAAF ANDA BELUM BISA MENDAPATKAN ACCESS BRANDING</span>
								</td>
								<td><check-value :value="nilaiTotalSkorCU" valueType="decimal"></check-value></td>
								<td><check-value :value="nilaiTotalBobotCU" valueType="decimal"></check-value></td>
								<td><check-value :value="a1" valueType="decimal"></check-value></td>
								<td><check-value :value="e9" valueType="decimal"></check-value></td>
							</tr>
						</tbody>
					</table>
				</div>

				<br/>
				<p>Berdasarkan pengisian indikator di masing-masing perspektif yang telah diperiksa oleh PUSKOPCUINA, maka dapat disimpulkan bahwa</p>
				<div class="table-responsive">
					<table class="table table-bordered">
						<thead class="bg-brown">
							<tr class="text-nowarp">
								<th>BRANDING PUSKOPCUINA</th>
								<th>NILAI</th>
								<th>KESEPADANAN (%)</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<span v-if="nilaiTotalBobotBKCU > 59 && nilaiTotalBobotBKCU < 71">
										<span v-if="a1 < 10 && e9 >= 5">
											PERUNGGU (BRONZE)
										</span>
										<span v-else>MAAF ANDA BELUM BISA MENDAPATKAN ACCESS BRANDING</span>
									</span>
									<span v-else-if="nilaiTotalBobotBKCU > 70 && nilaiTotalBobotBKCU < 81">
										<span v-if="a1 < 7 && e9 >= 8">	
											PERAK (SILVER)
										</span>
										<span v-else>
											PERUNGGU (BRONZE)
										</span>
									</span>
									<span v-else-if="nilaiTotalBobotBKCU > 81 && nilaiTotalBobotBKCU < 91">	
										<span v-if="a1 < 5 && e9 >= 10">		
											EMAS (GOLD)
										</span>
										<span v-else>
											PERAK (SILVER)
										</span>
									</span>
									<span v-else-if="nilaiTotalBobotBKCU > 90">
										<span v-if="a1 = 0 && e9 > 10">		
											PLATINA (PLATINUM)
										</span>
										<span v-else>
											EMAS (GOLD)
										</span>
									</span>
									<span v-else>MAAF ANDA BELUM BISA MENDAPATKAN ACCESS BRANDING</span>
								</td>
								<td><check-value :value="nilaiTotalSkorBKCU" valueType="decimal"></check-value></td>
								<td><check-value :value="nilaiTotalBobotBKCU" valueType="decimal"></check-value></td>
							</tr>
						</tbody>
					</table>
				</div>

				<br/>
				<u><b>Catatan:</b></u>
				<p>Penentuan rating diatas adalah berdasarkan</p>
				<div class="table-responsive">
					<table class="table table-bordered">
						<thead class="bg-danger">
							<tr class="text-nowarp">
								<th>BRANDING</th>
								<th>NILAI</th>
								<th>KESEPADANAN (%)</th>
								<th>Kelalaian Pinjaman / A1 (%)</th>
								<th>Modal Lembaga / E9 (%)</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>PERUNGGU (BRONZE)</td>
								<td>207 - 241</td>
								<td>60 - 70</td>
								<td>< 10</td>
								<td>>= 5</td>
							</tr>
							<tr>
								<td>PERAK (SILVER)</td>
								<td>242 - 275</td>
								<td>71 - 80</td>
								<td>< 7</td>
								<td>>= 8</td>
							</tr>
							<tr>
								<td>EMAS (GOLD)</td>
								<td>276 - 310</td>
								<td>81 - 90</td>
								<td>< 5</td>
								<td>>= 10</td>
							</tr>
							<tr>
								<td>PLATINA (PLATINUM)</td>
								<td>Di atas 310</td>
								<td>Di atas 90</td>
								<td>0</td>
								<td>> 10</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="card bg-danger card-body" v-if="form.p4.p4b20_cu_penilaian ==null || form.p4.p4b20_cu_keterangan ==null">
			<h6 class="mb-0">Silahkan melengkapi indikator sebelumnya untuk menyimpan data atau jika belum selesai maka silahkan tekan tombol simpan draft dibagian atas</h6>
		</div>

		<div v-if="$route.meta.mode == 'penilaianBkcu'">
			<div class="card bg-danger card-body" v-if="form.p4.p4b20_bkcu_penilaian ==null">
				<h6 class="mb-0">Silahkan melengkapi penilaian sebelumnya untuk menyimpan data atau jika belum selesai maka silahkan tekan tombol simpan draft dibagian atas</h6>
			</div>
		</div>
          
          
	</div>
</template>

<script>
	import checkValue from "../../components/checkValue.vue";

	export default {
		props: ['form','mode','nilaiTotalSkorCU','nilaiTotalBobotCU','nilaiTotalSkorBKCU','nilaiTotalBobotBKCU','a1','e9'],
		components: {
			checkValue
		},
		data() {
			return {
				collapsed: false,
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
