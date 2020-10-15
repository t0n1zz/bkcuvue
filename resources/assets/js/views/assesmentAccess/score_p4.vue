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
			<div class="card-body">
				<div class="text-right d-none d-sm-block">
					<json-excel 
              class="btn bg-green-300 btn-icon"
              :data="excel.data"
              :exportFields="excel.fields" 
              :meta="excel.meta" 
              :title="'Data ' + title" 
              :name="title + '.xls'"
              ><i class="icon-folder-download2"></i> Download Excel</json-excel> 
				</div>	
				<div class="d-block d-sm-none">
					<json-excel 
              class="btn bg-green-300 btn-icon btn-block"
              :data="excel.data"
              :exportFields="excel.fields" 
              :meta="excel.meta" 
              :title="'Data ' + title" 
              :name="title + '.xls'"
              ><i class="icon-folder-download2"></i> Download Excel</json-excel> 
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
	import jsonExcel from 'vue-json-excel';

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
			checkValue,
			jsonExcel
		},
		data() {
			return {
				collapsed: false,
				title: 'perspektif_pembelajaran_' + this.form.cu.no_ba,
				excel: {
          fields: {
						perspektif: 'perspektif',
						skor_cu: 'skor_cu',
						bobot_cu: 'bobot_cu',
						skor_bkcu: 'skor_bkcu',
						bobot_bkcu: 'bobot_bkcu',
						keterangan_cu: 'keterangan_cu',
						keterangan_bkcu: 'keterangan_bkcu',
						rekomendasi_bkcu: 'rekomendasi_bkcu',
					},
					data: [],
          meta: [
            [{
              "key": "charset",
              "value": "utf-8"
            }]
          ]
        },
			}
		},
		created(){
			this.excel.data = [
				{
					perspektif: '1. Pusat Keputusan Yang Utama',
					skor_cu: this.form.p4.p4a1_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4a1_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4a1_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4a1_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4a1_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4a1_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4a1_bkcu_rekomendasi,
				},
				{
					perspektif: '2. Peran Penasehat (advisory)',
					skor_cu: this.form.p4.p4a2_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4a2_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4a2_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4a2_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4a2_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4a2_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4a2_bkcu_rekomendasi,
				},
				{
					perspektif: '3. Peran Pengabadian (Perpetuating)',
					skor_cu: this.form.p4.p4a3_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4a3_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4a3_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4a3_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4a3_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4a3_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4a3_bkcu_rekomendasi,
				},
				{
					perspektif: '4. Fungsi Wali',
					skor_cu: this.form.p4.p4a4_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4a4_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4a4_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4a4_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4a4_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4a4_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4a4_bkcu_rekomendasi,
				},
				{
					perspektif: '5. Sebagai Simbol',
					skor_cu: this.form.p4.p4a5_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4a5_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4a5_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4a5_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4a5_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4a5_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4a5_bkcu_rekomendasi,
				},
				{
					perspektif: '6. Komposisi dan Komitmen',
					skor_cu: this.form.p4.p4a6_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4a6_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4a6_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4a6_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4a6_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4a6_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4a6_bkcu_rekomendasi,
				},
				{
					perspektif: '7. Service delivery kepada anggota – Penarikan Simpanan',
					skor_cu: this.form.p4.p4a7_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4a7_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4a7_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4a7_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4a7_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4a7_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4a7_bkcu_rekomendasi,
				},
				{
					perspektif: '8. Tata Kelola',
					skor_cu: this.form.p4.p4a8_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4a8_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4a8_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4a8_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4a8_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4a8_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4a8_bkcu_rekomendasi,
				},
				{
					perspektif: '9. Evaluasi Kinerja',
					skor_cu: this.form.p4.p4a9_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4a9_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4a9_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4a9_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4a9_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4a9_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4a9_bkcu_rekomendasi,
				},
				{
					perspektif: '10. Kesetaraan Gender Dalam Kepemimpinan',
					skor_cu: this.form.p4.p4a10_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4a10_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4a10_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4a10_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4a10_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4a10_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4a10_bkcu_rekomendasi,
				},
				{
					perspektif: '11. Rancangan Kerja (Job Design)',
					skor_cu: this.form.p4.p4b11_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4b11_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4b11_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4b11_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4b11_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4b11_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4b11_bkcu_rekomendasi,
				},
				{
					perspektif: '12. Rekruitmen dan Seleksi',
					skor_cu: this.form.p4.p4b12_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4b12_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4b12_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4b12_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4b12_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4b12_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4b12_bkcu_rekomendasi,
				},
				{
					perspektif: '13. Kompensasi',
					skor_cu: this.form.p4.p4b13_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4b13_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4b13_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4b13_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4b13_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4b13_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4b13_bkcu_rekomendasi,
				},
				{
					perspektif: '14. Pembagian Tingkatan Staf',
					skor_cu: this.form.p4.p4b14_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4b14_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4b14_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4b14_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4b14_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4b14_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4b14_bkcu_rekomendasi,
				},
				{
					perspektif: '15. Tujuan Kinerja',
					skor_cu: this.form.p4.p4b15_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4b15_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4b15_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4b15_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4b15_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4b15_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4b15_bkcu_rekomendasi,
				},
				{
					perspektif: '16. Standar-standar penilaian',
					skor_cu: this.form.p4.p4b16_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4b16_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4b16_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4b16_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4b16_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4b16_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4b16_bkcu_rekomendasi,
				},
				{
					perspektif: '17. Kinerja sebagai nilai bersama',
					skor_cu: this.form.p4.p4b17_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4b17_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4b17_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4b17_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4b17_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4b17_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4b17_bkcu_rekomendasi,
				},
				{
					perspektif: '18. Kecakapan Tim',
					skor_cu: this.form.p4.p4b18_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4b18_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4b18_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4b18_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4b18_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4b18_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4b18_bkcu_rekomendasi,
				},
				{
					perspektif: '19. Jenjang Karir',
					skor_cu: this.form.p4.p4b19_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4b19_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4b19_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4b19_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4b19_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4b19_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4b19_bkcu_rekomendasi,
				},
				{
					perspektif: '20. Program Pengembangan',
					skor_cu: this.form.p4.p4b20_cu_penilaian/1,
					bobot_cu: ((this.form.p4.p4b20_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p4.p4b20_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p4.p4b20_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p4.p4b20_cu_keterangan,
					keterangan_bkcu: this.form.p4.p4b20_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p4.p4b20_bkcu_rekomendasi,
				},
			];
		},
		watch: {
    },
		methods: {

		},
		computed: {
			
		}
	}
</script>
