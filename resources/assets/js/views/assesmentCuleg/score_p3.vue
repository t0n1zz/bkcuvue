<template>
	<div>

		<div class="card border-top-2 border-top-primary rounded-top-0">
			<div class="card-header bg-white header-elements-inline">
				<h5 class="card-title">3. SCORE CARD PERSPEKTIF AKUNTABILITAS</h5>
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
							<td>3.1  Keandalan laporan keuangan</td>
							<td><check-value :value="form.p3.a1_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a1_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a1_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a1_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a1_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>3.2. Ketepatan laporan </td>
							<td><check-value :value="form.p3.a2_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.a2_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.a2_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a2_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a2_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>3.3. Penjualan properti CU</td>
							<td><check-value :value="form.p3.a3_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a3_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a3_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a3_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a3_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>3.4. Kickbacks (timbal balik)</td>
							<td><check-value :value="form.p3.a4_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a4_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a4_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a4_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a4_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>3.5. Transaksi pinjaman dan simpanan/deposit orang dalam</td>
							<td><check-value :value="form.p3.a5_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a5_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a5_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a5_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a5_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>3.6. Informasi akun anggota</td>
							<td><check-value :value="form.p3.a6_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a6_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a6_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a6_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a6_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>3.7. Masalah pribadi anggota </td>
							<td><check-value :value="form.p3.a7_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a7_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a7_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a7_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a7_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>3.8. Keamanan</td>
							<td><check-value :value="form.p3.a8_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a8_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a8_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a8_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a8_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>3.9. Perolehan keuntungan keuangan dari informasi rahasia</td>
							<td><check-value :value="form.p3.a9_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a9_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a9_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a9_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a9_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>3.10. Perlindungan terhadap pelapor (Whistleblower Protection)</td>
							<td><check-value :value="form.p3.a10_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a10_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a10_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a10_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a10_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>3.11. Permohonan dan penerimaan barang berharga sebagai pengganti informasi rahasia </td>
							<td><check-value :value="form.p3.a11_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a11_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a11_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a11_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a11_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>3.12. Penerimaan barang berharga yang berkaitan dengan usaha CU</td>
							<td><check-value :value="form.p3.a12_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a12_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a12_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a12_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a12_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>3.13. Layanan sebagai Pengurus CU atau Federasi lainnya</td>
							<td><check-value :value="form.p3.a13_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a13_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a13_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a13_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a13_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>3.14. Layanan sebagai Pengurus pada organisasi yang bersaing atau saling terkait lainnya</td>
							<td><check-value :value="form.p3.a14_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a14_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.a14_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a14_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.a14_bkcu_rekomendasi"></check-value></td>
						</tr>
					</tbody>
					<tfoot>
						<tr class="bg-primary font-weight-bold">
							<td>SUBTOTAL</td>
							<td><check-value :value="nilaiSkorCUP3" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP3" valueType="decimal"></check-value></td>
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
			'nilaiSkorCUP3',
			'nilaiSkorBKCUP3'
		],
		components: {
			checkValue,
			jsonExcel,
		},
		data() {
			return {
				title: 'perspektif_akuntabilitas_' + this.form.cu.no_ba,
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
					perspektif: '3.1  Keandalan laporan keuangan',
					skor_cu: this.form.p3.a1_cu_penilaian/1,
					skor_bkcu: this.form.p3.a1_bkcu_penilaian/1,
					keterangan_cu: this.form.p3.a1_cu_keterangan,
					keterangan_bkcu: this.form.p3.a1_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p3.a1_bkcu_rekomendasi,
				},
				{
					perspektif: '3.2. Ketepatan laporan ',
					skor_cu: this.form.p3.a2_cu_penilaian/1,
					skor_bkcu: this.form.p3.a2_bkcu_penilaian/1,
					keterangan_cu: this.form.p3.a2_cu_keterangan,
					keterangan_bkcu: this.form.p3.a2_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p3.a2_bkcu_rekomendasi,
				},
				{
					perspektif: '3.3. Penjualan properti CU',
					skor_cu: this.form.p3.a3_cu_penilaian/1,
					skor_bkcu: this.form.p3.a3_bkcu_penilaian/1,
					keterangan_cu: this.form.p3.a3_cu_keterangan,
					keterangan_bkcu: this.form.p3.a3_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p3.a3_bkcu_rekomendasi,
				},
				{
					perspektif: '3.4. Kickbacks (timbal balik)',
					skor_cu: this.form.p3.a4_cu_penilaian/1,
					skor_bkcu: this.form.p3.a4_bkcu_penilaian/1,
					keterangan_cu: this.form.p3.a4_cu_keterangan,
					keterangan_bkcu: this.form.p3.a4_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p3.a4_bkcu_rekomendasi,
				},
				{
					perspektif: '3.5. Transaksi pinjaman dan simpanan/deposit orang dalam',
					skor_cu: this.form.p3.a5_cu_penilaian/1,
					skor_bkcu: this.form.p3.a5_bkcu_penilaian/1,
					keterangan_cu: this.form.p3.a5_cu_keterangan,
					keterangan_bkcu: this.form.p3.a5_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p3.a5_bkcu_rekomendasi,
				},
				{
					perspektif: '3.6. Informasi akun anggota',
					skor_cu: this.form.p3.a6_cu_penilaian/1,
					skor_bkcu: this.form.p3.a6_bkcu_penilaian/1,
					keterangan_cu: this.form.p3.a6_cu_keterangan,
					keterangan_bkcu: this.form.p3.a6_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p3.a6_bkcu_rekomendasi,
				},
				{
					perspektif: '3.7. Masalah pribadi anggota',
					skor_cu: this.form.p3.a7_cu_penilaian/1,
					skor_bkcu: this.form.p3.a7_bkcu_penilaian/1,
					keterangan_cu: this.form.p3.a7_cu_keterangan,
					keterangan_bkcu: this.form.p3.a7_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p3.a7_bkcu_rekomendasi,
				},
				{
					perspektif: '3.8. Keamanan',
					skor_cu: this.form.p3.a8_cu_penilaian/1,
					skor_bkcu: this.form.p3.a8_bkcu_penilaian/1,
					keterangan_cu: this.form.p3.a8_cu_keterangan,
					keterangan_bkcu: this.form.p3.a8_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p3.a8_bkcu_rekomendasi,
				},
				{
					perspektif: '3.9. Perolehan keuntungan keuangan dari informasi rahasia',
					skor_cu: this.form.p3.a9_cu_penilaian/1,
					skor_bkcu: this.form.p3.a9_bkcu_penilaian/1,
					keterangan_cu: this.form.p3.a9_cu_keterangan,
					keterangan_bkcu: this.form.p3.a9_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p3.a9_bkcu_rekomendasi,
				},
				{
					perspektif: '3.10. Perlindungan terhadap pelapor (Whistleblower Protection)',
					skor_cu: this.form.p3.a10_cu_penilaian/1,
					skor_bkcu: this.form.p3.a10_bkcu_penilaian/1,
					keterangan_cu: this.form.p3.a10_cu_keterangan,
					keterangan_bkcu: this.form.p3.a10_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p3.a10_bkcu_rekomendasi,
				},
				{
					perspektif: '3.11. Permohonan dan penerimaan barang berharga sebagai pengganti informasi rahasia ',
					skor_cu: this.form.p3.a11_cu_penilaian/1,
					skor_bkcu: this.form.p3.a11_bkcu_penilaian/1,
					keterangan_cu: this.form.p3.a11_cu_keterangan,
					keterangan_bkcu: this.form.p3.a11_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p3.a11_bkcu_rekomendasi,
				},
				{
					perspektif: '3.12. Penerimaan barang berharga yang berkaitan dengan usaha CU',
					skor_cu: this.form.p3.a12_cu_penilaian/1,
					skor_bkcu: this.form.p3.a12_bkcu_penilaian/1,
					keterangan_cu: this.form.p3.a12_cu_keterangan,
					keterangan_bkcu: this.form.p3.a12_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p3.a12_bkcu_rekomendasi,
				},
				{
					perspektif: '3.13. Layanan sebagai Pengurus CU atau Federasi lainnya',
					skor_cu: this.form.p3.a13_cu_penilaian/1,
					skor_bkcu: this.form.p3.a13_bkcu_penilaian/1,
					keterangan_cu: this.form.p3.a13_cu_keterangan,
					keterangan_bkcu: this.form.p3.a13_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p3.a13_bkcu_rekomendasi,
				},
				{
					perspektif: '3.14. Layanan sebagai Pengurus pada organisasi yang bersaing atau saling terkait lainnya.',
					skor_cu: this.form.p3.a14_cu_penilaian/1,
					skor_bkcu: this.form.p3.a14_bkcu_penilaian/1,
					keterangan_cu: this.form.p3.a14_cu_keterangan,
					keterangan_bkcu: this.form.p3.a14_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p3.a14_bkcu_rekomendasi,
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
