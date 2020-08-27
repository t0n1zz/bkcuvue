<template>
	<div>

		<div class="card border-top-2 border-top-primary rounded-top-0">
			<div class="card-header bg-white header-elements-inline">
				<h5 class="card-title">4. SCORE CARD PERSPEKTIF PEMBELAJARAN DAN PERTUMBUHAN</h5>
				<div class="header-elements">
					<div class="list-icons">
						<a href="#" class="list-icons-item" @click.prevent="collapsed = !collapsed">
							<i :class="{'icon-arrow-up12' : collapsed, 'icon-arrow-down12' : !collapsed}"></i>
						</a>
					</div>
				</div>
			</div>
			<div class="table-responsive" v-show="!collapsed">
				<table class="table table-bordered">
					<thead class="bg-primary">
						<tr class="text-nowarp">
							<th>PERSPEKTIF</th>
							<th>SKOR CU</th>
							<th>BOBOT CU</th>
							<th>SKOR BKCU</th>
							<th>BOBOT BKCU</th>
							<th>KETERANGAN CU</th>
							<th>KETERANGAN BKCU</th>
							<th>REKOMENDASI BKCU</th>
						</tr>
					</thead>
					<tbody>
						<tr class="bg-info font-weight-bold">
							<td>A. KEPEMIMPINAN – PENGURUS YANG BERPENGETAHUAN DAN TERLIBAT AKTIF</td>
							<td><check-value :value="nilaiSkorCUP4A" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotCUP4A" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP4A" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotBKCUP4A" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
						<tr>
							<td>1. Pusat Keputusan Yang Utama</td>
							<td><check-value :value="form.p4.p4a1_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p4.p4a1_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p4.p4a1_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p4.p4a1_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p4.p4a1_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a1_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a1_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>2. Peran Penasehat (advisory)</td>
							<td><check-value :value="form.p4.p4a2_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a2_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a2_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a2_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a1_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a1_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a1_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>3. Peran Pengabadian (Perpetuating)</td>
							<td><check-value :value="form.p4.p4a3_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a3_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a3_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a3_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a1_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a1_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a1_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>4. Fungsi Wali</td>
							<td><check-value :value="form.p4.p4a4_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a4_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a4_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a4_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a1_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a1_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a1_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5. Sebagai Simbol</td>
							<td><check-value :value="form.p4.p4a5_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a5_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a5_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a5_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a5_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a5_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a5_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>6. Komposisi dan Komitmen</td>
							<td><check-value :value="form.p4.p4a6_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a6_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a6_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a6_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a6_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a6_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a6_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>7. Service delivery kepada anggota – Penarikan Simpanan</td>
							<td><check-value :value="form.p4.p4a7_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a7_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a7_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a7_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a7_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a7_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a7_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>8. Tata Kelola</td>
							<td><check-value :value="form.p4.p4a8_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a8_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a8_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a8_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a8_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a8_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a8_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>9. Evaluasi Kinerja</td>
							<td><check-value :value="form.p4.p4a9_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a9_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a9_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a9_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a9_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a9_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a9_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>10. Kesetaraan Gender Dalam Kepemimpinan</td>
							<td><check-value :value="form.p4.p4a10_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a10_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a10_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4a10_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4a10_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a10_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4a10_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr class="bg-warning font-weight-bold">
							<td>B. KEPUASAN STAF</td>
							<td><check-value :value="nilaiSkorCUP4B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotCUP4B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP4B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotBKCUP4B" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
						<tr class="bg-slate font-weight-bold">
							<td colspan="8">ADMINISTRASI</td>
						</tr>
						<tr>
							<td>11. Rancangan Kerja (Job Design)</td>
							<td><check-value :value="form.p4.p4b11_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b11_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b11_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b11_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b11_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b11_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b11_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>12. Rekruitmen dan Seleksi</td>
							<td><check-value :value="form.p4.p4b12_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b12_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b12_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b12_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b12_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b12_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b12_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>13. Kompensasi</td>
							<td><check-value :value="form.p4.p4b13_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b13_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b13_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b13_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b13_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b13_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b13_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>14. Pembagian Tingkatan Staf</td>
							<td><check-value :value="form.p4.p4b14_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b14_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b14_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b14_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b14_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b14_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b14_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr class="bg-slate font-weight-bold">
							<td colspan="8">MANAJEMEN KINERJA</td>
						</tr>
						<tr>
							<td>15. Tujuan Kinerja</td>
							<td><check-value :value="form.p4.p4b15_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b15_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b15_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b15_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b15_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b15_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b15_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>16. Standar-standar penilaian</td>
							<td><check-value :value="form.p4.p4b16_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b16_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b16_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b16_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b16_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b16_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b16_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>17. Kinerja sebagai nilai bersama</td>
							<td><check-value :value="form.p4.p4b17_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b17_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b17_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b17_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b17_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b17_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b17_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>18. Kecakapan Tim</td>
							<td><check-value :value="form.p4.p4b18_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b18_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b18_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b18_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b18_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b18_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b18_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr class="bg-slate font-weight-bold">
							<td colspan="8">MANAJEMEN WAWASAN</td>
						</tr>
						<tr>
							<td>19. Jenjang Karir</td>
							<td><check-value :value="form.p4.p4b19_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b19_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b19_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b19_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b19_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b19_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b19_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>20. Program Pengembangan</td>
							<td><check-value :value="form.p4.p4b20_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b20_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b20_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p4.p4b20_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p4.p4b20_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b20_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p4.p4b20_bkcu_rekomendasi"></check-value></td>
						</tr>
					</tbody>
					<tfoot>
						<tr class="bg-primary font-weight-bold">
							<td>SUBTOTAL</td>
							<td><check-value :value="nilaiSkorCUP4A + nilaiSkorCUP4B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotCUP4A + nilaiBobotCUP4B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP4A + nilaiSkorBKCUP4B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotBKCUP4A + nilaiBobotBKCUP4B" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
          
	</div>
</template>

<script>
	import checkValue from "../../components/checkValue.vue";

	export default {
		props: ['form','mode','jumlahIndikator','bobotSkor',
			'nilaiSkorCUP4A',
			'nilaiBobotCUP4A',
			'nilaiSkorBKCUP4A',
			'nilaiBobotBKCUP4A',
			'nilaiSkorCUP4B',
			'nilaiBobotCUP4B',
			'nilaiSkorBKCUP4B',
			'nilaiBobotBKCUP4B',
		],
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
