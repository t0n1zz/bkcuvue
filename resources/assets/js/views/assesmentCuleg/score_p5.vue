<template>
	<div>

		<div class="card border-top-2 border-top-primary rounded-top-0">
			<div class="card-header bg-white header-elements-inline">
				<h5 class="card-title">5. SCORE CARD PERSPEKTIF EFISIENSI DAN EFEKTIFITAS</h5>
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
							<td>5.1. Pekerjaan sampingan</td>
							<td><check-value :value="form.p5.a1_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a1_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a1_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a1_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a1_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.2. Pinjaman kepada anggota</td>
							<td><check-value :value="form.p5.a2_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="form.p5.a2_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="form.p5.a2_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a2_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a2_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.3. Dokumen pinjaman anggota</td>
							<td><check-value :value="form.p5.a3_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a3_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a3_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a3_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a3_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.4. Tidak diskriminasi</td>
							<td><check-value :value="form.p5.a4_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a4_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a4_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a4_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a4_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.5. Tanggung jawab pengurus dan karyawan</td>
							<td><check-value :value="form.p5.a5_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a5_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a5_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a5_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a5_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.6. Tata kelola </td>
							<td><check-value :value="form.p5.a6_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a6_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a6_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a6_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a6_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.7. Pelimpahan wewenang kepada CEO/GM/Manajer</td>
							<td><check-value :value="form.p5.a7_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a7_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a7_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a7_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a7_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.8. Kualifikasi CEO/GM/Manajer</td>
							<td><check-value :value="form.p5.a8_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a8_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a8_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a8_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a8_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.9. Uraian tugas CEO/GM/Manajer</td>
							<td><check-value :value="form.p5.a9_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a9_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a9_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a9_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a9_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.10. Susunan komite</td>
							<td><check-value :value="form.p5.a10_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a10_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a10_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a10_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a10_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.11. Fungsi komite</td>
							<td><check-value :value="form.p5.a11_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a11_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a11_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a11_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a11_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.12. Kerangka acuan kerja komite</td>
							<td><check-value :value="form.p5.a12_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a12_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a12_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a12_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a12_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.13. Hubungan komite dengan pengurus dan karyawan</td>
							<td><check-value :value="form.p5.a13_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a13_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a13_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a13_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a13_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.14. Fungsi Komite Eksekutif</td>
							<td><check-value :value="form.p5.a14_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a14_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a14_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a14_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a14_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.15. Komite Pencalonan atau Komite Pemilihan</td>
							<td><check-value :value="form.p5.a15_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a15_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a15_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a15_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a15_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.16. Komite Audit (Pengawas)</td>
							<td><check-value :value="form.p5.a16_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a16_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a16_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a16_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a16_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.17. Komite Kredit</td>
							<td><check-value :value="form.p5.a17_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a17_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a17_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a17_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a17_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.18. Komite Tata Kelola dan Etika</td>
							<td><check-value :value="form.p5.a18_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a18_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a18_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a18_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a18_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.19. Komite lainnya</td>
							<td><check-value :value="form.p5.a19_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a19_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a19_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a19_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a19_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.20. Pencalonan dan Pemilihan Pengurus</td>
							<td><check-value :value="form.p5.a20_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a20_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a20_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a20_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a20_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.21. Keragaman keahlian dan pengalaman</td>
							<td><check-value :value="form.p5.a21_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a21_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a21_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a21_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a21_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.22. Evaluasi Kinerja Pengurus </td>
							<td><check-value :value="form.p5.a22_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a22_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a22_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a22_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a22_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5.23. Evaluasi Kinerja CEO/GM/Manajer</td>
							<td><check-value :value="form.p5.a23_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a23_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p5.a23_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a23_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p5.a23_bkcu_rekomendasi"></check-value></td>
						</tr>
					</tbody>
					<tfoot>
						<tr class="bg-primary font-weight-bold">
							<td>SUBTOTAL</td>
							<td><check-value :value="nilaiSkorCUP5" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP5" valueType="decimal"></check-value></td>
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
			'nilaiSkorCUP5',
			'nilaiSkorBKCUP5',
		],
		components: {
			checkValue,
			jsonExcel,
		},
		data() {
			return {
				title: 'perspektif_efisiensi_dan_efektifitas_' + this.form.cu.no_ba,
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
					perspektif: '5.1. Pekerjaan sampingan',
					skor_cu: this.form.p5.a1_cu_penilaian/1,
					skor_bkcu: this.form.p5.a1_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a1_cu_keterangan,
					keterangan_bkcu: this.form.p5.a1_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a1_bkcu_rekomendasi,
				},
				{
					perspektif: '5.2. Pinjaman kepada anggota',
					skor_cu: this.form.p5.a2_cu_penilaian/1,
					skor_bkcu: this.form.p5.a2_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a2_cu_keterangan,
					keterangan_bkcu: this.form.p5.a2_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a2_bkcu_rekomendasi,
				},
				{
					perspektif: '5.3. Dokumen pinjaman anggota',
					skor_cu: this.form.p5.a3_cu_penilaian/1,
					skor_bkcu: this.form.p5.a3_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a3_cu_keterangan,
					keterangan_bkcu: this.form.p5.a3_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a3_bkcu_rekomendasi,
				},
				{
					perspektif: '5.4. Tidak diskriminasi',
					skor_cu: this.form.p5.a4_cu_penilaian/1,
					skor_bkcu: this.form.p5.a4_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a4_cu_keterangan,
					keterangan_bkcu: this.form.p5.a4_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a4_bkcu_rekomendasi,
				},
				{
					perspektif: '5.5. Tanggung jawab pengurus dan karyawan',
					skor_cu: this.form.p5.a5_cu_penilaian/1,
					skor_bkcu: this.form.p5.a5_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a5_cu_keterangan,
					keterangan_bkcu: this.form.p5.a5_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a5_bkcu_rekomendasi,
				},
				{
					perspektif: '5.6. Tata kelola ',
					skor_cu: this.form.p5.a6_cu_penilaian/1,
					skor_bkcu: this.form.p5.a6_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a6_cu_keterangan,
					keterangan_bkcu: this.form.p5.a6_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a6_bkcu_rekomendasi,
				},
				{
					perspektif: '5.7. Pelimpahan wewenang kepada CEO/GM/Manajer',
					skor_cu: this.form.p5.a7_cu_penilaian/1,
					skor_bkcu: this.form.p5.a7_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a7_cu_keterangan,
					keterangan_bkcu: this.form.p5.a7_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a7_bkcu_rekomendasi,
				},
				{
					perspektif: '5.8. Kualifikasi CEO/GM/Manajer',
					skor_cu: this.form.p5.a8_cu_penilaian/1,
					skor_bkcu: this.form.p5.a8_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a8_cu_keterangan,
					keterangan_bkcu: this.form.p5.a8_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a8_bkcu_rekomendasi,
				},
				{
					perspektif: '5.9. Uraian tugas CEO/GM/Manajer',
					skor_cu: this.form.p5.a9_cu_penilaian/1,
					skor_bkcu: this.form.p5.a9_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a9_cu_keterangan,
					keterangan_bkcu: this.form.p5.a9_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a9_bkcu_rekomendasi,
				},
				{
					perspektif: '5.10. Susunan komite',
					skor_cu: this.form.p5.a10_cu_penilaian/1,
					skor_bkcu: this.form.p5.a10_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a10_cu_keterangan,
					keterangan_bkcu: this.form.p5.a10_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a10_bkcu_rekomendasi,
				},
				{
					perspektif: '5.11. Fungsi komite',
					skor_cu: this.form.p5.a11_cu_penilaian/1,
					skor_bkcu: this.form.p5.a11_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a11_cu_keterangan,
					keterangan_bkcu: this.form.p5.a11_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a11_bkcu_rekomendasi,
				},
				{
					perspektif: '5.12. Kerangka acuan kerja komite',
					skor_cu: this.form.p5.a12_cu_penilaian/1,
					skor_bkcu: this.form.p5.a12_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a12_cu_keterangan,
					keterangan_bkcu: this.form.p5.a12_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a12_bkcu_rekomendasi,
				},
				{
					perspektif: '5.13. Hubungan komite dengan pengurus dan karyawan',
					skor_cu: this.form.p5.a13_cu_penilaian/1,
					skor_bkcu: this.form.p5.a13_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a13_cu_keterangan,
					keterangan_bkcu: this.form.p5.a13_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a13_bkcu_rekomendasi,
				},
				{
					perspektif: '5.14. Fungsi Komite Eksekutif',
					skor_cu: this.form.p5.a14_cu_penilaian/1,
					skor_bkcu: this.form.p5.a14_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a14_cu_keterangan,
					keterangan_bkcu: this.form.p5.a14_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a14_bkcu_rekomendasi,
				},
				{
					perspektif: '5.15. Komite Pencalonan atau Komite Pemilihan',
					skor_cu: this.form.p5.a15_cu_penilaian/1,
					skor_bkcu: this.form.p5.a15_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a15_cu_keterangan,
					keterangan_bkcu: this.form.p5.a15_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a15_bkcu_rekomendasi,
				},
				{
					perspektif: '5.16. Komite Audit (Pengawas)',
					skor_cu: this.form.p5.a16_cu_penilaian/1,
					skor_bkcu: this.form.p5.a16_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a16_cu_keterangan,
					keterangan_bkcu: this.form.p5.a16_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a16_bkcu_rekomendasi,
				},
				{
					perspektif: '5.17. Komite Kredit',
					skor_cu: this.form.p5.a17_cu_penilaian/1,
					skor_bkcu: this.form.p5.a17_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a17_cu_keterangan,
					keterangan_bkcu: this.form.p5.a17_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a17_bkcu_rekomendasi,
				},
				{
					perspektif: '5.18. Komite Tata Kelola dan Etika',
					skor_cu: this.form.p5.a18_cu_penilaian/1,
					skor_bkcu: this.form.p5.a18_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a18_cu_keterangan,
					keterangan_bkcu: this.form.p5.a18_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a18_bkcu_rekomendasi,
				},
				{
					perspektif: '5.19. Komite lainnya',
					skor_cu: this.form.p5.a19_cu_penilaian/1,
					skor_bkcu: this.form.p5.a19_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a19_cu_keterangan,
					keterangan_bkcu: this.form.p5.a19_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a19_bkcu_rekomendasi,
				},
				{
					perspektif: '5.20. Pencalonan dan Pemilihan Pengurus',
					skor_cu: this.form.p5.a20_cu_penilaian/1,
					skor_bkcu: this.form.p5.a20_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a20_cu_keterangan,
					keterangan_bkcu: this.form.p5.a20_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a20_bkcu_rekomendasi,
				},
				{
					perspektif: '5.21. Keragaman keahlian dan pengalaman',
					skor_cu: this.form.p5.a21_cu_penilaian/1,
					skor_bkcu: this.form.p5.a21_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a21_cu_keterangan,
					keterangan_bkcu: this.form.p5.a21_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a21_bkcu_rekomendasi,
				},
				{
					perspektif: '5.22. Evaluasi Kinerja Pengurus ',
					skor_cu: this.form.p5.a22_cu_penilaian/1,
					skor_bkcu: this.form.p5.a22_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a22_cu_keterangan,
					keterangan_bkcu: this.form.p5.a22_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a22_bkcu_rekomendasi,
				},
				{
					perspektif: '5.23. Evaluasi Kinerja CEO/GM/Manajer',
					skor_cu: this.form.p5.a23_cu_penilaian/1,
					skor_bkcu: this.form.p5.a23_bkcu_penilaian/1,
					keterangan_cu: this.form.p5.a23_cu_keterangan,
					keterangan_bkcu: this.form.p5.a23_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p5.a23_bkcu_rekomendasi,
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
