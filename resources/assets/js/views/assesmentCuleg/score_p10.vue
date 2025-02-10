<template>
	<div>

		<div class="card border-top-2 border-top-primary rounded-top-0">
			<div class="card-header bg-white header-elements-inline">
				<h5 class="card-title">10. KINERJA ORGANISASI</h5>
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
							<td>10.1. Provisi untuk kredit macet lebih dari 12 bulan (P1)</td>
							<td><check-value :value="form.p10.a1_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a1_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a1_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a1_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a1_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>10.2. Provisi untuk kredit macet 1 – 12 bulan (P2)</td>
							<td><check-value :value="form.p10.a2_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="form.p10.a2_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="form.p10.a2_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a2_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a2_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>10.3. Jumlah Kredit Bersih 70 – 80 % dari total aset (E1)</td>
							<td><check-value :value="form.p10.a3_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a3_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a3_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a3_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a3_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>10.4. Jumlah Simpanan 70 – 80 % dari total aset (E5)</td>
							<td><check-value :value="form.p10.a4_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a4_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a4_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a4_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a4_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>10.5. Pinjaman ke luar dari total aset dikurangi ke nol / nihil (E6)</td>
							<td><check-value :value="form.p10.a5_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a5_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a5_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a5_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a5_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>10.6. Keikutsertaan modal 13 – 20 % (E7)</td>
							<td><check-value :value="form.p10.a6_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a6_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a6_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a6_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a6_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>10.7. Modal bersih institusi minimal 10 % dari total aset (E9)</td>
							<td><check-value :value="form.p10.a7_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a7_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a7_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a7_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a7_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>10.8. Total kredit macet dari total portofolio kredit kurang dari 5 % (A1)</td>
							<td><check-value :value="form.p10.a8_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a8_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a8_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a8_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a8_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>10.9. Aset tidak menghasilkan kurang dari 5% dari total aset (A2)</td>
							<td><check-value :value="form.p10.a9_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a9_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a9_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a9_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a9_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>10.10. Bunga atas modal saham dengan rata-rata modal saham tingkat pasar (R7)</td>
							<td><check-value :value="form.p10.a10_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a10_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a10_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a10_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a10_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>10.11. Biaya operasional rata-rata 5 % dari jumlah aset (R9)</td>
							<td><check-value :value="form.p10.a11_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a11_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a11_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a11_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a11_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>10.12. Investasi likuid atau likuiditas minimum 15% dari total aset (L1)</td>
							<td><check-value :value="form.p10.a12_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a12_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a12_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a12_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a12_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>10.13. Pertumbuhan keanggotaan (S10)</td>
							<td><check-value :value="form.p10.a13_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a13_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a13_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a13_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a13_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>10.14. Pertumbuhan total aset di atas tingkat inflasi (S11)</td>
							<td><check-value :value="form.p10.a14_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a14_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p10.a14_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a14_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p10.a14_bkcu_rekomendasi"></check-value></td>
						</tr>
					</tbody>
					<tfoot>
						<tr class="bg-primary font-weight-bold">
							<td>SUBTOTAL</td>
							<td><check-value :value="nilaiSkorCUP10" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP10" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
						<tr class="bg-primary font-weight-bold">
							<td>GRAND TOTAL CREDIT UNION LEVEL 10 PRINCIPLES</td>
							<td><check-value :value="grandTotalCU" valueType="decimal"></check-value></td>
							<td><check-value :value="grandTotalBKCU" valueType="decimal"></check-value></td>
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
		props: ['form','mode','jumlahIndikator','grandTotalCU','grandTotalBKCU',
			'nilaiSkorCUP10',
			'nilaiSkorBKCUP10',
		],
		components: {
			checkValue,
			jsonExcel,
		},
		data() {
			return {
				title: 'perspektif_kinerja_organisasi_' + this.form.cu.no_ba,
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
					perspektif: '10.1 Provisi untuk kredit macet lebih dari 12 bulan (P1)',
					skor_cu: this.form.p10.a1_cu_penilaian/1,
					skor_bkcu: this.form.p10.a1_bkcu_penilaian/1,
					keterangan_cu: this.form.p10.a1_cu_keterangan,
					keterangan_bkcu: this.form.p10.a1_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p10.a1_bkcu_rekomendasi,
				},
				{
					perspektif: '10.2 Provisi untuk kredit macet 1 – 12 bulan (P2)',
					skor_cu: this.form.p10.a2_cu_penilaian/1,
					skor_bkcu: this.form.p10.a2_bkcu_penilaian/1,
					keterangan_cu: this.form.p10.a2_cu_keterangan,
					keterangan_bkcu: this.form.p10.a2_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p10.a2_bkcu_rekomendasi,
				},
				{
					perspektif: '10.3   Jumlah Kredit Bersih 70 – 80 % dari total aset (E1)',
					skor_cu: this.form.p10.a3_cu_penilaian/1,
					skor_bkcu: this.form.p10.a3_bkcu_penilaian/1,
					keterangan_cu: this.form.p10.a3_cu_keterangan,
					keterangan_bkcu: this.form.p10.a3_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p10.a3_bkcu_rekomendasi,
				},
				{
					perspektif: '10.4   Jumlah Simpanan 70 – 80 % dari total aset (E5)',
					skor_cu: this.form.p10.a4_cu_penilaian/1,
					skor_bkcu: this.form.p10.a4_bkcu_penilaian/1,
					keterangan_cu: this.form.p10.a4_cu_keterangan,
					keterangan_bkcu: this.form.p10.a4_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p10.a4_bkcu_rekomendasi,
				},
				{
					perspektif: '10.5   Pinjaman ke luar dari total aset dikurangi ke nol / nihil (E6)',
					skor_cu: this.form.p10.a5_cu_penilaian/1,
					skor_bkcu: this.form.p10.a5_bkcu_penilaian/1,
					keterangan_cu: this.form.p10.a5_cu_keterangan,
					keterangan_bkcu: this.form.p10.a5_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p10.a5_bkcu_rekomendasi,
				},
				{
					perspektif: '10.6   Keikutsertaan modal 13 – 20 % (E7)',
					skor_cu: this.form.p10.a6_cu_penilaian/1,
					skor_bkcu: this.form.p10.a6_bkcu_penilaian/1,
					keterangan_cu: this.form.p10.a6_cu_keterangan,
					keterangan_bkcu: this.form.p10.a6_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p10.a6_bkcu_rekomendasi,
				},
				{
					perspektif: '10.7   Modal bersih institusi minimal 10 % dari total aset (E9) ',
					skor_cu: this.form.p10.a7_cu_penilaian/1,
					skor_bkcu: this.form.p10.a7_bkcu_penilaian/1,
					keterangan_cu: this.form.p10.a7_cu_keterangan,
					keterangan_bkcu: this.form.p10.a7_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p10.a7_bkcu_rekomendasi,
				},
				{
					perspektif: '10.8   Total kredit macet dari total portofolio kredit kurang dari 5 % (A1)',
					skor_cu: this.form.p10.a8_cu_penilaian/1,
					skor_bkcu: this.form.p10.a8_bkcu_penilaian/1,
					keterangan_cu: this.form.p10.a8_cu_keterangan,
					keterangan_bkcu: this.form.p10.a8_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p10.a8_bkcu_rekomendasi,
				},
				{
					perspektif: '10.9   Aset tidak menghasilkan kurang dari 5% dari total aset (A2)',
					skor_cu: this.form.p10.a9_cu_penilaian/1,
					skor_bkcu: this.form.p10.a9_bkcu_penilaian/1,
					keterangan_cu: this.form.p10.a9_cu_keterangan,
					keterangan_bkcu: this.form.p10.a9_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p10.a9_bkcu_rekomendasi,
				},
				{
					perspektif: '10.10 Bunga atas modal saham dengan rata-rata modal saham tingkat pasar (R7)',
					skor_cu: this.form.p10.a10_cu_penilaian/1,
					skor_bkcu: this.form.p10.a10_bkcu_penilaian/1,
					keterangan_cu: this.form.p10.a10_cu_keterangan,
					keterangan_bkcu: this.form.p10.a10_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p10.a10_bkcu_rekomendasi,
				},
				{
					perspektif: '10.11 Biaya operasional rata-rata 5 % dari jumlah aset (R9)',
					skor_cu: this.form.p10.a11_cu_penilaian/1,
					skor_bkcu: this.form.p10.a11_bkcu_penilaian/1,
					keterangan_cu: this.form.p10.a11_cu_keterangan,
					keterangan_bkcu: this.form.p10.a11_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p10.a11_bkcu_rekomendasi,
				},
				{
					perspektif: '10.12 Investasi likuid atau likuiditas minimum 15% dari total aset (L1)',
					skor_cu: this.form.p10.a12_cu_penilaian/1,
					skor_bkcu: this.form.p10.a12_bkcu_penilaian/1,
					keterangan_cu: this.form.p10.a12_cu_keterangan,
					keterangan_bkcu: this.form.p10.a12_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p10.a12_bkcu_rekomendasi,
				},
				{
					perspektif: '10.13 Pertumbuhan keanggotaan (S10)',
					skor_cu: this.form.p10.a13_cu_penilaian/1,
					skor_bkcu: this.form.p10.a13_bkcu_penilaian/1,
					keterangan_cu: this.form.p10.a13_cu_keterangan,
					keterangan_bkcu: this.form.p10.a13_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p10.a13_bkcu_rekomendasi,
				},
				{
					perspektif: '10.14 Pertumbuhan total aset di atas tingkat inflasi (S11)',
					skor_cu: this.form.p10.a14_cu_penilaian/1,
					skor_bkcu: this.form.p10.a14_bkcu_penilaian/1,
					keterangan_cu: this.form.p10.a14_cu_keterangan,
					keterangan_bkcu: this.form.p10.a14_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p10.a14_bkcu_rekomendasi,
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
