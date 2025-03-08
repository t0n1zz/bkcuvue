<template>
	<div>

		<div class="card border-top-2 border-top-primary rounded-top-0">
			<div class="card-header bg-white header-elements-inline">
				<h5 class="card-title">1. SCORE CARD PERSPEKTIF PARTISIPASI</h5>
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
							<td>1.1 Informasi Rapat Anggota Tahunan kepada Para Anggota</td>
							<td><check-value :value="form.p1.a1_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a1_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a1_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a1_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a1_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>1.2. Kuorum RAT</td>
							<td><check-value :value="form.p1.a2_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="form.p1.a2_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="form.p1.a2_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a2_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a2_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>1.3. Remunerasi Pengurus  dan Komite</td>
							<td><check-value :value="form.p1.a3_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a3_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a3_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a3_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a3_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>1.4. Komposisi dan Komitmen Pengurus</td>
							<td><check-value :value="form.p1.a4_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a4_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a4_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a4_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a4_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>1.5. Kehadiran dan partisipasi Pengurus</td>
							<td><check-value :value="form.p1.a5_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a5_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a5_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a5_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a5_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>1.6. Fungsi Pengawasan Pengurus </td>
							<td><check-value :value="form.p1.a6_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a6_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a6_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a6_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a6_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>1.7. Tinjauan Kebijakan oleh Pengurus </td>
							<td><check-value :value="form.p1.a7_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a7_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a7_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a7_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a7_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>1.8. Kesetaraan Gender dalam Kepemimpinan</td>
							<td><check-value :value="form.p1.a8_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a8_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a8_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a8_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a8_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>1.9. Perlakuan yang terukur terhadap Pengurus, Petugas dan Karyawan.</td>
							<td><check-value :value="form.p1.a9_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a9_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a9_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a9_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a9_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>1.10 Anggota masyarakat menggunakan Layanan CU</td>
							<td><check-value :value="form.p1.a10_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a10_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.a10_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a10_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.a10_bkcu_rekomendasi"></check-value></td>
						</tr>
					</tbody>
					<tfoot>
						<tr class="bg-primary font-weight-bold">
							<td>SUBTOTAL</td>
							<td><check-value :value="nilaiSkorCUP1"  valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP1" valueType="decimal"></check-value></td>
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
			'nilaiSkorCUP1',
			'nilaiSkorBKCUP1',
		],
		components: {
			checkValue,
			jsonExcel,
		},
		data() {
			return {
				title: 'perspektif_partisipasi_' + this.form.cu.no_ba,
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
					perspektif: '1.1.  Informasi Rapat Anggota Tahunan kepada Para Anggota',
					skor_cu: this.form.p1.a1_cu_penilaian/1,
					skor_bkcu: this.form.p1.a1_bkcu_penilaian/1,
					keterangan_cu: this.form.p1.a1_cu_keterangan,
					keterangan_bkcu: this.form.p1.a1_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.a1_bkcu_rekomendasi,
				},
				{
					perspektif: '1.2.  Kuorum RAT',
					skor_cu: this.form.p1.p1a2_cu_penilaian/1,
					skor_bkcu: this.form.p1.p1a2_bkcu_penilaian/1,
					keterangan_cu: this.form.p1.p1a2_cu_keterangan,
					keterangan_bkcu: this.form.p1.p1a2_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.p1a2_bkcu_rekomendasi,
				},
				{
					perspektif: '1.3.  Remunerasi Pengurus  dan Komite',
					skor_cu: this.form.p1.a3_cu_penilaian/1,
					skor_bkcu: this.form.p1.a3_bkcu_penilaian/1,
					keterangan_cu: this.form.p1.a3_cu_keterangan,
					keterangan_bkcu: this.form.p1.a3_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.a3_bkcu_rekomendasi,
				},
				{
					perspektif: '1.4.  Komposisi dan Komitmen Pengurus',
					skor_cu: this.form.p1.a4_cu_penilaian/1,
					skor_bkcu: this.form.p1.a4_bkcu_penilaian/1,
					keterangan_cu: this.form.p1.a4_cu_keterangan,
					keterangan_bkcu: this.form.p1.a4_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.a4_bkcu_rekomendasi,
				},
				{
					perspektif: '1.5.  Kehadiran dan partisipasi Pengurus ',
					skor_cu: this.form.p1.a5_cu_penilaian/1,
					skor_bkcu: this.form.p1.a5_bkcu_penilaian/1,
					keterangan_cu: this.form.p1.a5_cu_keterangan,
					keterangan_bkcu: this.form.p1.a5_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.a5_bkcu_rekomendasi,
				},
				{
					perspektif: '1.6.  Fungsi Pengawasan Pengurus ',
					skor_cu: this.form.p1.a6_cu_penilaian/1,
					skor_bkcu: this.form.p1.a6_bkcu_penilaian/1,
					keterangan_cu: this.form.p1.a6_cu_keterangan,
					keterangan_bkcu: this.form.p1.a6_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.a6_bkcu_rekomendasi,
				},
				{
					perspektif: '1.7.  Tinjauan Kebijakan oleh Pengurus ',
					skor_cu: this.form.p1.a7_cu_penilaian/1,
					skor_bkcu: this.form.p1.a7_bkcu_penilaian/1,
					keterangan_cu: this.form.p1.a7_cu_keterangan,
					keterangan_bkcu: this.form.p1.a7_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.a7_bkcu_rekomendasi,
				},
				{
					perspektif: '1.8.  Kesetaraan Gender dalam Kepemimpinan',
					skor_cu: this.form.p1.a8_cu_penilaian/1,
					skor_bkcu: this.form.p1.a8_bkcu_penilaian/1,
					keterangan_cu: this.form.p1.a8_cu_keterangan,
					keterangan_bkcu: this.form.p1.a8_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.a8_bkcu_rekomendasi,
				},
				{
					perspektif: '1.9. Perlakuan yang terukur terhadap Pengurus, Petugas, dan Karyawan.',
					skor_cu: this.form.p1.a9_cu_penilaian/1,
					skor_bkcu: this.form.p1.a9_bkcu_penilaian/1,
					keterangan_cu: this.form.p1.a9_cu_keterangan,
					keterangan_bkcu: this.form.p1.a9_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.a9_bkcu_rekomendasi,
				},
				{
					perspektif: '1.10 Anggota masyarakat menggunakan Layanan CU',
					skor_cu: this.form.p1.a10_cu_penilaian/1,
					skor_bkcu: this.form.p1.a10_bkcu_penilaian/1,
					keterangan_cu: this.form.p1.a10_cu_keterangan,
					keterangan_bkcu: this.form.p1.a10_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.a10_bkcu_rekomendasi,
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
