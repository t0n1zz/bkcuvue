<template>
	<div>

		<div class="card border-top-2 border-top-primary rounded-top-0">
			<div class="card-header bg-white header-elements-inline">
				<h5 class="card-title">7. SCORE CARD INDIKATOR KETAATAN PADA PERATURAN, KEBIJAKAN, DAN REGULASI</h5>
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
							<td>7.1. Hubungan dengan para regulator</td>
							<td><check-value :value="form.p7.a1_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a1_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a1_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a1_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a1_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>7.2. Consumer Protection (Perlindungan Konsumen)</td>
							<td><check-value :value="form.p7.a2_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="form.p7.a2_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="form.p7.a2_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a2_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a2_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>7.3. Equal Employment Opportunity (Kesempatan Kerja yang sama)</td>
							<td><check-value :value="form.p7.a3_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a3_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a3_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a3_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a3_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>7.4. Tax Laws (Undang-undang Perpajakan)</td>
							<td><check-value :value="form.p7.a4_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a4_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a4_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a4_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a4_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>7.5. Compliance with Local Ordinances (Kepatuhan terhadap Peraturan Daerah)</td>
							<td><check-value :value="form.p7.a5_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a5_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a5_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a5_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a5_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>7.6. Standar Pelaporan Keuangan Internasional/Nasional </td>
							<td><check-value :value="form.p7.a6_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a6_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a6_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a6_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a6_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>7.7. Bimbingan hukum pajak</td>
							<td><check-value :value="form.p7.a7_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a7_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a7_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a7_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a7_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>7.8. Pinjaman pihak ketiga yang menguntungkan rekan usaha</td>
							<td><check-value :value="form.p7.a8_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a8_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a8_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a8_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a8_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>7.9. Waktu rapat anggota tahunan</td>
							<td><check-value :value="form.p7.a9_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a9_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a9_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a9_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a9_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>7.10. Pemberitahuan rapat anggota tahunan</td>
							<td><check-value :value="form.p7.a10_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a10_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a10_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a10_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a10_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>7.11. Risalah Rapat (Notulen Rapat)</td>
							<td><check-value :value="form.p7.a11_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a11_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p7.a11_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a11_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p7.a11_bkcu_rekomendasi"></check-value></td>
						</tr>
					</tbody>
					<tfoot>
						<tr class="bg-primary font-weight-bold">
							<td>SUBTOTAL</td>
							<td><check-value :value="nilaiSkorCUP7" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP7" valueType="decimal"></check-value></td>
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
			'nilaiSkorCUP7',
			'nilaiSkorBKCUP7',
		],
		components: {
			checkValue,
			jsonExcel,
		},
		data() {
			return {
				title: 'perspektif_ketaatan_pada_peraturan_kebijakan_dan_regulasi_' + this.form.cu.no_ba,
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
					perspektif: '7.1. Hubungan dengan para regulator',
					skor_cu: this.form.p7.a1_cu_penilaian/1,
					skor_bkcu: this.form.p7.a1_bkcu_penilaian/1,
					keterangan_cu: this.form.p7.a1_cu_keterangan,
					keterangan_bkcu: this.form.p7.a1_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p7.a1_bkcu_rekomendasi,
				},
				{
					perspektif: '7.2. Consumer Protection (Perlindungan Konsumen)',
					skor_cu: this.form.p7.a2_cu_penilaian/1,
					skor_bkcu: this.form.p7.a2_bkcu_penilaian/1,
					keterangan_cu: this.form.p7.a2_cu_keterangan,
					keterangan_bkcu: this.form.p7.a2_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p7.a2_bkcu_rekomendasi,
				},
				{
					perspektif: '7.3. Equal Employment Opportunity (Kesempatan Kerja yang sama)',
					skor_cu: this.form.p7.a3_cu_penilaian/1,
					skor_bkcu: this.form.p7.a3_bkcu_penilaian/1,
					keterangan_cu: this.form.p7.a3_cu_keterangan,
					keterangan_bkcu: this.form.p7.a3_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p7.a3_bkcu_rekomendasi,
				},
				{
					perspektif: '7.4. Tax Laws (Undang-undang Perpajakan)',
					skor_cu: this.form.p7.a4_cu_penilaian/1,
					skor_bkcu: this.form.p7.a4_bkcu_penilaian/1,
					keterangan_cu: this.form.p7.a4_cu_keterangan,
					keterangan_bkcu: this.form.p7.a4_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p7.a4_bkcu_rekomendasi,
				},
				{
					perspektif: '7.5. Compliance with Local Ordinances (Kepatuhan terhadap Peraturan Daerah)',
					skor_cu: this.form.p7.a5_cu_penilaian/1,
					skor_bkcu: this.form.p7.a5_bkcu_penilaian/1,
					keterangan_cu: this.form.p7.a5_cu_keterangan,
					keterangan_bkcu: this.form.p7.a5_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p7.a5_bkcu_rekomendasi,
				},
				{
					perspektif: '7.6. Standar Pelaporan Keuangan Internasional/Nasional',
					skor_cu: this.form.p7.a6_cu_penilaian/1,
					skor_bkcu: this.form.p7.a6_bkcu_penilaian/1,
					keterangan_cu: this.form.p7.a6_cu_keterangan,
					keterangan_bkcu: this.form.p7.a6_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p7.a6_bkcu_rekomendasi,
				},
				{
					perspektif: '7.7. Bimbingan hukum pajak',
					skor_cu: this.form.p7.a7_cu_penilaian/1,
					skor_bkcu: this.form.p7.a7_bkcu_penilaian/1,
					keterangan_cu: this.form.p7.a7_cu_keterangan,
					keterangan_bkcu: this.form.p7.a7_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p7.a7_bkcu_rekomendasi,
				},
				{
					perspektif: '7.8. Pinjaman pihak ketiga yang menguntungkan rekan usaha',
					skor_cu: this.form.p7.a8_cu_penilaian/1,
					skor_bkcu: this.form.p7.a8_bkcu_penilaian/1,
					keterangan_cu: this.form.p7.a8_cu_keterangan,
					keterangan_bkcu: this.form.p7.a8_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p7.a8_bkcu_rekomendasi,
				},
				{
					perspektif: '7.9. Waktu rapat anggota tahunan',
					skor_cu: this.form.p7.a9_cu_penilaian/1,
					skor_bkcu: this.form.p7.a9_bkcu_penilaian/1,
					keterangan_cu: this.form.p7.a9_cu_keterangan,
					keterangan_bkcu: this.form.p7.a9_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p7.a9_bkcu_rekomendasi,
				},
				{
					perspektif: '7.10. Pemberitahuan rapat anggota tahunan',
					skor_cu: this.form.p7.a10_cu_penilaian/1,
					skor_bkcu: this.form.p7.a10_bkcu_penilaian/1,
					keterangan_cu: this.form.p7.a10_cu_keterangan,
					keterangan_bkcu: this.form.p7.a10_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p7.a10_bkcu_rekomendasi,
				},
				{
					perspektif: '7.11. Risalah Rapat (Notulen Rapat)',
					skor_cu: this.form.p7.a11_cu_penilaian/1,
					skor_bkcu: this.form.p7.a11_bkcu_penilaian/1,
					keterangan_cu: this.form.p7.a11_cu_keterangan,
					keterangan_bkcu: this.form.p7.a11_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p7.a11_bkcu_rekomendasi,
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
