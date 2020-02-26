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
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<span v-if="(nilaiTotalSkorCU > 206 && nilaiTotalSkorCU < 242) && (nilaiTotalBobotCU > 59 && nilaiTotalBobotCU < 71)"
									>PERUNGGU (BRONZE)</span>
									<span v-else-if="(nilaiTotalSkorCU > 241 && nilaiTotalSkorCU < 274) && (nilaiTotalBobotCU > 70 && nilaiTotalBobotCU < 81)"
									>PERAK (SILVER)</span>
									<span v-else-if="(nilaiTotalSkorCU > 275 && nilaiTotalSkorCU < 311) && (nilaiTotalBobotCU > 81 && nilaiTotalBobotCU < 91)"
									>EMAS (GOLD)</span>
									<span v-else-if="nilaiTotalSkorCU > 310 && nilaiTotalBobotCU > 90"
									>PLATINA (PLATINUM)</span>
									<span v-else>MAAF SKOR ANDA BELUM CUKUP</span>
								</td>
								<td><check-value :value="nilaiTotalSkorCU" valueType="decimal"></check-value></td>
								<td><check-value :value="nilaiTotalBobotCU" valueType="decimal"></check-value></td>
							</tr>
						</tbody>
					</table>
				</div>

				<br/>
				<p>Berdasarkan pengisian indikator di masing-masing perspektif yang telah diperiksa oleh Puskopdit BKCU Kalimantan, maka dapat disimpulkan bahwa</p>
				<div class="table-responsive">
					<table class="table table-bordered">
						<thead class="bg-brown">
							<tr class="text-nowarp">
								<th>BRANDING BKCU</th>
								<th>NILAI</th>
								<th>KESEPADANAN (%)</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<span v-if="(nilaiTotalSkorBKCU > 206 && nilaiTotalSkorBKCU < 242) && (nilaiTotalBobotBKCU > 59 && nilaiTotalBobotBKCU < 71)"
									>PERUNGGU (BRONZE)</span>
									<span v-else-if="(nilaiTotalSkorBKCU > 241 && nilaiTotalSkorBKCU < 274) && (nilaiTotalBobotBKCU > 70 && nilaiTotalBobotBKCU < 81)"
									>PERAK (SILVER)</span>
									<span v-else-if="(nilaiTotalSkorBKCU > 275 && nilaiTotalSkorBKCU < 311) && (nilaiTotalBobotBKCU > 81 && nilaiTotalBobotBKCU < 91)"
									>EMAS (GOLD)</span>
									<span v-else-if="nilaiTotalSkorBKCU > 310 && nilaiTotalBobotBKCU > 90"
									>PLATINA (PLATINUM)</span>
									<span v-else>MAAF SKOR ANDA BELUM CUKUP</span>
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
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>PERUNGGU (BRONZE)</td>
								<td>207 - 241</td>
								<td>60 - 70</td>
							</tr>
							<tr>
								<td>PERAK (SILVER)</td>
								<td>242 - 275</td>
								<td>71 - 80</td>
							</tr>
							<tr>
								<td>EMAS (GOLD)</td>
								<td>276 - 310</td>
								<td>81 - 90</td>
							</tr>
							<tr>
								<td>PLATINA (PLATINUM)</td>
								<td>Di atas 310</td>
								<td>Di atas 90</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="card bg-danger card-body" v-if="form.p4.p4b20_cu_penilaian == '' && form.p4.p4b20_cu_keterangan == ''">
			<h6 class="mb-0">Silahkan melengkapi indikator sebelumnya untuk menyimpan data</h6>
		</div>
          
	</div>
</template>

<script>
	import checkValue from "../../components/checkValue.vue";

	export default {
		props: ['form','mode','nilaiTotalSkorCU','nilaiTotalBobotCU','nilaiTotalSkorBKCU','nilaiTotalBobotBKCU'],
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
