<template>
	<div>

		<div class="card border-top-2 border-top-primary rounded-top-0">
			<div class="card-header bg-white header-elements-inline">
				<h5 class="card-title">2. SCORE CARD PERSPEKTIF TRANSPARANSI</h5>
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
							<th>INDIKATOR</th>
							<th>SKOR CU</th>
							<th>SKOR BKCU</th>
							<th>KETERANGAN CU</th>
							<th>KETERANGAN BKCU</th>
							<th>REKOMENDASI BKCU</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>2.1.  Pinjaman oleh insiders (orang dalam) kepada anggota</td>
							<td><check-value :value="form.p2.a1_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a1_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a1_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a1_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a1_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>2.2. Layanan seorang pengurus kepada CU lain atau lembaga keuangan lain yang bertentangan</td>
							<td><check-value :value="form.p2.a2_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="form.p2.a2_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="form.p2.a2_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a2_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a2_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>2.3.  Hubungan dengan pesaing</td>
							<td><check-value :value="form.p2.a3_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a3_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a3_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a3_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a3_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>2.4.  Hubungan dengan anggota – konflik kepentingan</td>
							<td><check-value :value="form.p2.a4_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a4_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a4_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a4_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a4_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>2.5.  Pengiklanan dan Pemasaran</td>
							<td><check-value :value="form.p2.a5_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a5_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a5_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a5_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a5_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>2.6.  Pinjaman Orang Dalam </td>
							<td><check-value :value="form.p2.a6_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a6_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a6_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a6_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a6_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>2.7.  Partai Politik Eksternal </td>
							<td><check-value :value="form.p2.a7_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a7_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a7_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a7_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a7_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>2.8.  Politik Internal</td>
							<td><check-value :value="form.p2.a8_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a8_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a8_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a8_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a8_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>2.9.  Rekomendasi Lembaga kepada anggota</td>
							<td><check-value :value="form.p2.a9_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a9_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a9_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a9_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a9_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>2.10. Tindakan istimewa terhadap rujukan anggota oleh orang dalam</td>
							<td><check-value :value="form.p2.a10_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a10_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a10_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a10_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a10_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>2.11. Mengungkap Konflik Kepentingan</td>
							<td><check-value :value="form.p2.a11_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a11_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a11_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a11_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a11_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>2.12. Pengaruh terhadap penilaian independen</td>
							<td><check-value :value="form.p2.a12_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a12_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a12_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a12_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a12_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>2.13. Konflik Kepentingan Pengurus sebelum rapat</td>
							<td><check-value :value="form.p2.a13_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a13_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.a13_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a13_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.a13_bkcu_rekomendasi"></check-value></td>
						</tr>
					</tbody>
					<tfoot>
						<tr class="bg-primary font-weight-bold">
							<td>SUBTOTAL</td>
							<td><check-value :value="nilaiSkorCUP2" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP2" valueType="decimal"></check-value></td>
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
			'nilaiSkorCUP2',
			'nilaiSkorBKCUP2',
		],
		components: {
			checkValue,
			jsonExcel,
		},
		data() {
			return {
				title: 'perspektif_transparansi_' + this.form.cu.no_ba,
				collapsed: false,
				excel: {
          fields: {
						perspektif: 'perspektif',
						skor_cu: 'skor_cu',
						skor_bkcu: 'skor_bkcu',
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
					perspektif: '2.1.  Pinjaman oleh insiders (orang dalam) kepada anggota',
					skor_cu: this.form.p2.a1_cu_penilaian/1,
					skor_bkcu: this.form.p2.a1_bkcu_penilaian/1,
					keterangan_cu: this.form.p2.a1_cu_keterangan,
					keterangan_bkcu: this.form.p2.a1_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.a1_bkcu_rekomendasi,
				},
				{
					perspektif: '2.2. Layanan seorang pengurus kepada CU lain atau lembaga keuangan lain yang bertentangan',
					skor_cu: this.form.p2.a2_cu_penilaian/1,
					skor_bkcu: this.form.p2.a2_bkcu_penilaian/1,
					keterangan_cu: this.form.p2.a2_cu_keterangan,
					keterangan_bkcu: this.form.p2.a2_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.a2_bkcu_rekomendasi,
				},
				{
					perspektif: '2.3.  Hubungan dengan pesaing',
					skor_cu: this.form.p2.a3_cu_penilaian/1,
					skor_bkcu: this.form.p2.a3_bkcu_penilaian/1,
					keterangan_cu: this.form.p2.a3_cu_keterangan,
					keterangan_bkcu: this.form.p2.a3_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.a3_bkcu_rekomendasi,
				},
				{
					perspektif: '2.4.  Hubungan dengan anggota – konflik kepentingan',
					skor_cu: this.form.p2.a4_cu_penilaian/1,
					skor_bkcu: this.form.p2.a4_bkcu_penilaian/1,
					keterangan_cu: this.form.p2.a4_cu_keterangan,
					keterangan_bkcu: this.form.p2.a4_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.a4_bkcu_rekomendasi,
				},
				{
					perspektif: '2.5.  Pengiklanan dan Pemasaran',
					skor_cu: this.form.p2.a5_cu_penilaian/1,
					skor_bkcu: this.form.p2.a5_bkcu_penilaian/1,
					keterangan_cu: this.form.p2.a5_cu_keterangan,
					keterangan_bkcu: this.form.p2.a5_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.a5_bkcu_rekomendasi,
				},
				{
					perspektif: '2.6.  Pinjaman Orang Dalam',
					skor_cu: this.form.p2.a6_cu_penilaian/1,
					skor_bkcu: this.form.p2.a6_bkcu_penilaian/1,
					keterangan_cu: this.form.p2.a6_cu_keterangan,
					keterangan_bkcu: this.form.p2.a6_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.a6_bkcu_rekomendasi,
				},
				{
					perspektif: '2.7.  Partai Politik Eksternal ',
					skor_cu: this.form.p2.a7_cu_penilaian/1,
					skor_bkcu: this.form.p2.a7_bkcu_penilaian/1,
					keterangan_cu: this.form.p2.a7_cu_keterangan,
					keterangan_bkcu: this.form.p2.a7_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.a7_bkcu_rekomendasi,
				},
				{
					perspektif: '2.8.  Politik Internal',
					skor_cu: this.form.p2.a8_cu_penilaian/1,
					skor_bkcu: this.form.p2.a8_bkcu_penilaian/1,
					keterangan_cu: this.form.p2.a8_cu_keterangan,
					keterangan_bkcu: this.form.p2.a8_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.a8_bkcu_rekomendasi,
				},
				{
					perspektif: '2.9.  Rekomendasi Lembaga kepada anggota',
					skor_cu: this.form.p2.a9_cu_penilaian/1,
					skor_bkcu: this.form.p2.a9_bkcu_penilaian/1,
					keterangan_cu: this.form.p2.a9_cu_keterangan,
					keterangan_bkcu: this.form.p2.a9_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.a9_bkcu_rekomendasi,
				},
				{
					perspektif: '2.10. Tindakan istimewa terhadap rujukan anggota oleh orang dalam.',
					skor_cu: this.form.p2.a10_cu_penilaian/1,
					skor_bkcu: this.form.p2.a10_bkcu_penilaian/1,
					keterangan_cu: this.form.p2.a10_cu_keterangan,
					keterangan_bkcu: this.form.p2.a10_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.a10_bkcu_rekomendasi,
				},
				{
					perspektif: '2.11. Mengungkap Konflik Kepentingan',
					skor_cu: this.form.p2.a11_cu_penilaian/1,
					skor_bkcu: this.form.p2.a11_bkcu_penilaian/1,
					keterangan_cu: this.form.p2.a11_cu_keterangan,
					keterangan_bkcu: this.form.p2.a11_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.a11_bkcu_rekomendasi,
				},
				{
					perspektif: '2.12. Pengaruh terhadap penilaian independen',
					skor_cu: this.form.p2.a12_cu_penilaian/1,
					skor_bkcu: this.form.p2.a12_bkcu_penilaian/1,
					keterangan_cu: this.form.p2.a12_cu_keterangan,
					keterangan_bkcu: this.form.p2.a12_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.a12_bkcu_rekomendasi,
				},
				{
					perspektif: '2.13. Konflik Kepentingan Pengurus sebelum rapat',
					skor_cu: this.form.p2.a13_cu_penilaian/1,
					skor_bkcu: this.form.p2.a13_bkcu_penilaian/1,
					keterangan_cu: this.form.p2.a13_cu_keterangan,
					keterangan_bkcu: this.form.p2.a13_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.a13_bkcu_rekomendasi,
				},
			]
		},
		watch: {
    },
		methods: {
		},
		computed: {
			
		}
	}
</script>
