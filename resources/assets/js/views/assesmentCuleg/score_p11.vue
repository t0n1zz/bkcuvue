<template>
	<div>

		<div class="card border-top-2 border-top-primary rounded-top-0">
			<div class="card-header bg-white header-elements-inline">
				<h5 class="card-title">11. AKUNTABILITAS JARINGAN</h5>
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
						<tr class="bg-slate font-weight-bold">
							<td colspan="8">Pooling of Resources (Berbagi Sumber Daya)</td>
						</tr>
						<tr>
							<td>11.1. Pengembangan dan Perencanaan SDM</td>
							<td><check-value :value="form.p11.a1_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a1_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a1_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a1_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a1_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11.2. Manajemen Likuiditas</td>
							<td><check-value :value="form.p11.a2_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="form.p11.a2_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="form.p11.a2_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a2_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a2_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11.3. Shared Marketing (Pemasaran Bersama)</td>
							<td><check-value :value="form.p11.a3_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a3_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a3_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a3_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a3_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11.4. Shared Technology (Teknologi Bersama)</td>
							<td><check-value :value="form.p11.a4_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a4_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a4_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a4_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a4_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11.5. Platform digital koperasi (CU)</td>
							<td><check-value :value="form.p11.a5_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a5_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a5_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a5_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a5_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11.6. Lembaga Pelatihan milik Jaringan</td>
							<td><check-value :value="form.p11.a6_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a6_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a6_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a6_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a6_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11.7. Network’s IT Solutions Infrastructure (Infrastruktur Solusi TI milik Jaringan)</td>
							<td><check-value :value="form.p11.a7_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a7_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a7_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a7_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a7_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr class="bg-primary font-weight-bold">
							<td>SUBTOTAL</td>
							<td><check-value :value="nilaiSkorCUP11A" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP11A" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
						<tr class="bg-slate font-weight-bold">
							<td colspan="8">Standardization (Standardisasi)</td>
						</tr>
						<tr>
							<td>11.8. Produk</td>
							<td><check-value :value="form.p11.a8_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a8_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a8_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a8_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a8_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11.9. Standard Operational Systems (Sistem Operasional Standar)</td>
							<td><check-value :value="form.p11.a9_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a9_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a9_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a9_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a9_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11.10. Standard Policies and Norms (Kebijakan dan Norma Standar)</td>
							<td><check-value :value="form.p11.a10_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a10_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a10_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a10_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a10_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11.11. Institutional Visual Identity (Identitas Visual Institusional)</td>
							<td><check-value :value="form.p11.a11_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a11_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a11_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a11_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a11_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11.12. Human Resources (SDM)</td>
							<td><check-value :value="form.p11.a12_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a12_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a12_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a12_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a12_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr class="bg-primary font-weight-bold">
							<td>SUBTOTAL</td>
							<td><check-value :value="nilaiSkorCUP11B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP11B" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
						<tr class="bg-slate font-weight-bold">
							<td colspan="8">Contractual Solidarity (Kontraktual Solidaritas)</td>
						</tr>
						<tr>
							<td>11.13. Member Dues (Iuran Anggota)</td>
							<td><check-value :value="form.p11.a13_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a13_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a13_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a13_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a13_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11.14. Territory Management (Manajemen Wilayah)</td>
							<td><check-value :value="form.p11.a14_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a14_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a14_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a14_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a14_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11.15. Balancing the size of credit unions (Keseimbangan Ukuran CU)</td>
							<td><check-value :value="form.p11.a15_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a15_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a15_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a15_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a15_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr class="bg-primary font-weight-bold">
							<td>SUBTOTAL</td>
							<td><check-value :value="nilaiSkorCUP11C" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP11C" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
						<tr class="bg-slate font-weight-bold">
							<td colspan="8">Governance and Self-Disciplines (Tata Kelola dan Disiplin Diri)</td>
						</tr>
						<tr>
							<td>11.16. Loan Supervision (Pengawasan Pinjaman)</td>
							<td><check-value :value="form.p11.a16_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a16_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a16_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a16_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a16_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11.17. Fit and Proper Requirements (Persyaratan Fit dan Proper)</td>
							<td><check-value :value="form.p11.a17_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a17_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a17_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a17_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a17_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11.18. Stabilization Fund (Dana Stabilisasi)</td>
							<td><check-value :value="form.p11.a18_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a18_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a18_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a18_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a18_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11.19. Risk Based Supervision (Pengawasan Berbasis Risiko)</td>
							<td><check-value :value="form.p11.a19_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a19_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a19_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a19_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a19_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11.20. Network Standard – ACCESS (Standar Jaringan - ACCESS)</td>
							<td><check-value :value="form.p11.a20_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a20_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p11.a20_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a20_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p11.a20_bkcu_rekomendasi"></check-value></td>
						</tr>
					</tbody>
					<tfoot>
						<tr class="bg-primary font-weight-bold">
							<td>SUBTOTAL</td>
							<td><check-value :value="nilaiSkorCUP11D" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP11D" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
						<tr class="bg-primary font-weight-bold">
							<td>GRAND TOTAL NETWORK LEVEL 4 ASPECTS OF INTEGRATION</td>
							<td><check-value :value="nilaiSkorCUP11" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP11" valueType="decimal"></check-value></td>
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
			'nilaiSkorCUP11',
			'nilaiSkorBKCUP11',
			'nilaiSkorCUP11A',
			'nilaiSkorBKCUP11A',
			'nilaiSkorCUP11B',
			'nilaiSkorBKCUP11B',
			'nilaiSkorCUP11C',
			'nilaiSkorBKCUP11C',
			'nilaiSkorCUP11D',
			'nilaiSkorBKCUP11D',
		],
		components: {
			checkValue,
			jsonExcel,
		},
		data() {
			return {
				title: 'perspektif_akuntabilitas_jaringan_' + this.form.cu.no_ba,
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
					perspektif: '11.1 Pengembangan dan Perencanaan SDM',
					skor_cu: this.form.p11.a1_cu_penilaian/1,
					skor_bkcu: this.form.p11.a1_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a1_cu_keterangan,
					keterangan_bkcu: this.form.p11.a1_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a1_bkcu_rekomendasi,
				},
				{
					perspektif: '11.2 Manajemen Likuiditas',
					skor_cu: this.form.p11.a2_cu_penilaian/1,
					skor_bkcu: this.form.p11.a2_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a2_cu_keterangan,
					keterangan_bkcu: this.form.p11.a2_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a2_bkcu_rekomendasi,
				},
				{
					perspektif: '11.3  Shared Marketing (Pemasaran Bersama)',
					skor_cu: this.form.p11.a3_cu_penilaian/1,
					skor_bkcu: this.form.p11.a3_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a3_cu_keterangan,
					keterangan_bkcu: this.form.p11.a3_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a3_bkcu_rekomendasi,
				},
				{
					perspektif: '11.4 Shared Technology (Teknologi Bersama)',
					skor_cu: this.form.p11.a4_cu_penilaian/1,
					skor_bkcu: this.form.p11.a4_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a4_cu_keterangan,
					keterangan_bkcu: this.form.p11.a4_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a4_bkcu_rekomendasi,
				},
				{
					perspektif: '11.5  Platform digital koperasi (CU)',
					skor_cu: this.form.p11.a5_cu_penilaian/1,
					skor_bkcu: this.form.p11.a5_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a5_cu_keterangan,
					keterangan_bkcu: this.form.p11.a5_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a5_bkcu_rekomendasi,
				},
				{
					perspektif: '11.6  Lembaga Pelatihan milik Jaringan',
					skor_cu: this.form.p11.a6_cu_penilaian/1,
					skor_bkcu: this.form.p11.a6_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a6_cu_keterangan,
					keterangan_bkcu: this.form.p11.a6_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a6_bkcu_rekomendasi,
				},
				{
					perspektif: '11.7  Network’s IT Solutions Infrastructure (Infrastruktur Solusi TI milik Jaringan)',
					skor_cu: this.form.p11.a7_cu_penilaian/1,
					skor_bkcu: this.form.p11.a7_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a7_cu_keterangan,
					keterangan_bkcu: this.form.p11.a7_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a7_bkcu_rekomendasi,
				},
				{
					perspektif: '11.8 Produk',
					skor_cu: this.form.p11.a8_cu_penilaian/1,
					skor_bkcu: this.form.p11.a8_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a8_cu_keterangan,
					keterangan_bkcu: this.form.p11.a8_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a8_bkcu_rekomendasi,
				},
				{
					perspektif: '11.9 Standard Operational Systems (Sistem Operasional Standar)',
					skor_cu: this.form.p11.a9_cu_penilaian/1,
					skor_bkcu: this.form.p11.a9_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a9_cu_keterangan,
					keterangan_bkcu: this.form.p11.a9_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a9_bkcu_rekomendasi,
				},
				{
					perspektif: '11.10 Standard Policies and Norms (Kebijakan dan Norma Standar)',
					skor_cu: this.form.p11.a10_cu_penilaian/1,
					skor_bkcu: this.form.p11.a10_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a10_cu_keterangan,
					keterangan_bkcu: this.form.p11.a10_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a10_bkcu_rekomendasi,
				},
				{
					perspektif: '11.11 Institutional Visual Identity (Identitas Visual Institusional)',
					skor_cu: this.form.p11.a11_cu_penilaian/1,
					skor_bkcu: this.form.p11.a11_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a11_cu_keterangan,
					keterangan_bkcu: this.form.p11.a11_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a11_bkcu_rekomendasi,
				},
				{
					perspektif: '11.12 Human Resources (SDM)',
					skor_cu: this.form.p11.a12_cu_penilaian/1,
					skor_bkcu: this.form.p11.a12_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a12_cu_keterangan,
					keterangan_bkcu: this.form.p11.a12_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a12_bkcu_rekomendasi,
				},
				{
					perspektif: '11.13 Member Dues (Iuran Anggota)',
					skor_cu: this.form.p11.a13_cu_penilaian/1,
					skor_bkcu: this.form.p11.a13_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a13_cu_keterangan,
					keterangan_bkcu: this.form.p11.a13_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a13_bkcu_rekomendasi,
				},
				{
					perspektif: '11.14 Territory Management (Manajemen Wilayah)',
					skor_cu: this.form.p11.a14_cu_penilaian/1,
					skor_bkcu: this.form.p11.a14_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a14_cu_keterangan,
					keterangan_bkcu: this.form.p11.a14_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a14_bkcu_rekomendasi,
				},
				{
					perspektif: '11.15 Balancing the size of credit unions (Keseimbangan Ukuran CU)',
					skor_cu: this.form.p11.a15_cu_penilaian/1,
					skor_bkcu: this.form.p11.a15_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a15_cu_keterangan,
					keterangan_bkcu: this.form.p11.a15_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a15_bkcu_rekomendasi,
				},
				{
					perspektif: '11.16 Loan Supervision (Pengawasan Pinjaman)',
					skor_cu: this.form.p11.a16_cu_penilaian/1,
					skor_bkcu: this.form.p11.a16_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a16_cu_keterangan,
					keterangan_bkcu: this.form.p11.a16_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a16_bkcu_rekomendasi,
				},
				{
					perspektif: '11.17 Fit and Proper Requirements (Persyaratan Fit dan Proper)',
					skor_cu: this.form.p11.a17_cu_penilaian/1,
					skor_bkcu: this.form.p11.a17_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a17_cu_keterangan,
					keterangan_bkcu: this.form.p11.a17_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a17_bkcu_rekomendasi,
				},
				{
					perspektif: '11.18 Stabilization Fund (Dana Stabilisasi)',
					skor_cu: this.form.p11.a18_cu_penilaian/1,
					skor_bkcu: this.form.p11.a18_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a18_cu_keterangan,
					keterangan_bkcu: this.form.p11.a18_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a18_bkcu_rekomendasi,
				},
				{
					perspektif: '11.19 Risk Based Supervision (Pengawasan Berbasis Risiko)',
					skor_cu: this.form.p11.a19_cu_penilaian/1,
					skor_bkcu: this.form.p11.a19_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a19_cu_keterangan,
					keterangan_bkcu: this.form.p11.a19_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a19_bkcu_rekomendasi,
				},
				{
					perspektif: '11.20 Network Standard – ACCESS (Standar Jaringan - ACCESS)',
					skor_cu: this.form.p11.a20_cu_penilaian/1,
					skor_bkcu: this.form.p11.a20_bkcu_penilaian/1,
					keterangan_cu: this.form.p11.a20_cu_keterangan,
					keterangan_bkcu: this.form.p11.a20_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p11.a20_bkcu_rekomendasi,
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
