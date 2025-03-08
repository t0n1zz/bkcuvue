<template>
	<div>

		<div class="card  border-top-2 border-top-primary rounded-top-0">
			<div class="card-header bg-white">
				<h5 class="card-title">12. KESIMPULAN</h5>
			</div>
			<div class="card-body">
				<p>Berdasarkan pengisian indikator oleh CU, maka dapat disimpulkan bahwa</p>
				<div class="table-responsive">
					<table class="table table-bordered">
						<thead class="bg-primary">
							<tr class="text-nowarp">
								<th>BRANDING CU</th>
								<th>NILAI CREDIT UNION LEVEL 10 PRINCIPLES</th>
								<th>NILAI NETWORK LEVEL 4 ASPECTS OF INTEGRATION</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<span v-if="nilaiTotalSkorCU >= 252 && nilaiTotalSkorCU <= 294">
										<span>
											PERUNGGU (BRONZE)
										</span>
									</span>
									<span v-else-if="nilaiTotalSkorCU >= 295 && nilaiTotalBobotCU <= 336">
										<span>
											PERAK (SILVER)
										</span>
									</span>
									<span v-else-if="nilaiTotalSkorCU >= 337 && nilaiTotalSkorCU <= 378">
										<span v-if="nilaiTotalSkorCU2 >= 65">
											EMAS (GOLD)
										</span>
										<span v-else>
											PERAK (SILVER)
										</span>
									</span>
									<span v-else-if="nilaiTotalSkorCU > 378">
										<span v-if="nilaiTotalSkorCU2 > 72">
											PLATINA (PLATINUM)
										</span>
										<span v-else>
											EMAS (GOLD)
										</span>
									</span>
									<span v-else>MAAF ANDA BELUM BISA MENDAPATKAN CULEG</span>
								</td>
								<td><check-value :value="nilaiTotalSkorCU" valueType="decimal"></check-value></td>
								<td><check-value :value="nilaiTotalSkorCU2" valueType="decimal"></check-value></td>
							</tr>
						</tbody>
					</table>
				</div>

				<br />
				<p>Berdasarkan pengisian indikator di masing-masing perspektif yang telah diperiksa oleh PUSKOPCUINA,
					maka dapat disimpulkan bahwa</p>
				<div class="table-responsive">
					<table class="table table-bordered">
						<thead class="bg-brown">
							<tr class="text-nowarp">
								<th>BRANDING PUSKOPCUINA</th>
								<th>NILAI CREDIT UNION LEVEL 10 PRINCIPLES</th>
								<th>NILAI NETWORK LEVEL 4 ASPECTS OF INTEGRATION</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<span v-if="nilaiTotalSkorBKCU >= 252 && nilaiTotalSkorBKCU <= 294">
										<span>
											PERUNGGU (BRONZE)
										</span>
									</span>
									<span v-else-if="nilaiTotalSkorBKCU >= 295 && nilaiTotalSkorBKCU <= 336">
										<span>
											PERAK (SILVER)
										</span>
									</span>
									<span v-else-if="nilaiTotalSkorBKCU >= 337 && nilaiTotalSkorBKCU <= 378">
										<span v-if="nilaiTotalSkorBKCU2 >= 65">
											EMAS (GOLD)
										</span>
										<span v-else>
											PERAK (SILVER)
										</span>
									</span>
									<span v-else-if="nilaiTotalSkorBKCU > 378">
										<span v-if="nilaiTotalSkorBKCU2 > 72">
											PLATINA (PLATINUM)
										</span>
										<span v-else-if="nilaiTotalSkorBKCU2 >=65">
											EMAS (GOLD)
										</span>
										<span v-else>
											PERAK (SILVER)
										</span>
									</span>
									<span v-else>MAAF ANDA BELUM BISA MENDAPATKAN CULEG</span>
								</td>
								<td><check-value :value="nilaiTotalSkorBKCU" valueType="decimal"></check-value></td>
								<td><check-value :value="nilaiTotalSkorBKCU2" valueType="decimal"></check-value></td>
							</tr>
						</tbody>
					</table>
				</div>

				<br />
				<u><b>Catatan:</b></u>
				<p>Penentuan rating diatas adalah berdasarkan tabel di bawah ini</p>
				<p>Jika nilai <span style="color:red; font-weight:bold;">Network Level 4 Aspects of Integration Kurang dari 65</span> maka branding tertinggi yang bisa didapatkan adalah <span style="color:red; font-weight:bold;">Silver</span></p>
				<div class="table-responsive">
					<table class="table table-bordered">
						<thead class="bg-danger">
							<tr>
								<th rowspan="3">AKREDITASI</th>
								<th colspan="2">CREDIT UNION LEVEL 10 PRINCIPLES</th>
								<th colspan="2">NETWORK LEVEL 4 ASPECTS OF INTEGRATION</th>
								<th colspan="2">TOTAL</th>
							</tr>
							<tr>
								<th>SCORE</th>
								<th>%</th>
								<th>SCORE</th>
								<th>%</th>
								<th>SCORE</th>
								<th>%</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>BRONZE</td>
								<td>252 - 294</td>
								<td>60 – 70%</td>
								<td>0</td>
								<td>0</td>
								<td>252 - 294</td>
								<td>60 – 70%</td>
							</tr>
							<tr>
								<td>SILVER</td>
								<td>295- 336</td>
								<td>71 – 80%</td>
								<td>0</td>
								<td>0</td>
								<td>295 - 336</td>
								<td>71 – 80%</td>
							</tr>
							<tr>
								<td>GOLD</td>
								<td>337 - 378</td>
								<td>81 – 90%</td>
								<td>65 - 72</td>
								<td>81 – 90%</td>
								<td>402 - 450</td>
								<td>81 – 90%</td>
							</tr>
							<tr>
								<td>PLATINUM</td>
								<td>di atas 378</td>
								<td>Di atas 90%</td>
								<td>Di atas 72</td>
								<td>Di atas 90%</td>
								<td>di atas 450</td>
								<td>Di atas 90%</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="card bg-danger card-body"
			v-if="form.p11.a20_cu_penilaian == null || form.p11.a20_cu_keterangan == null">
			<h6 class="mb-0">Silahkan melengkapi indikator sebelumnya untuk menyimpan data atau jika belum selesai maka
				silahkan tekan tombol simpan draft dibagian atas</h6>
		</div>

		<div v-if="$route.meta.mode == 'penilaianBkcu'">
			<div class="card bg-danger card-body" v-if="form.p11.a20_bkcu_penilaian == null">
				<h6 class="mb-0">Silahkan melengkapi penilaian sebelumnya untuk menyimpan data atau jika belum selesai
					maka silahkan tekan tombol simpan draft dibagian atas</h6>
			</div>
		</div>


	</div>
</template>

<script>
import checkValue from "../../components/checkValue.vue";

export default {
	props: ['form', 'mode', 'nilaiTotalSkorCU', 'nilaiTotalSkorBKCU','nilaiTotalSkorCU2', 'nilaiTotalSkorBKCU2', 'a1', 'e9'],
	components: {
		checkValue
	},
	data() {
		return {
			collapsed: false,
		}
	},
	created() {
	},
	watch: {
	},
	methods: {
	},
	computed: {

	}
}
</script>
