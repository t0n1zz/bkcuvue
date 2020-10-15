<template>
	<div>

		<div class="card border-top-2 border-top-primary rounded-top-0">
			<div class="card-header bg-white header-elements-inline">
				<h5 class="card-title">1. SCORE CARD PERSPEKTIF KEUANGAN</h5>
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
							<td>A. PERLINDUNGAN</td>
							<td><check-value :value="nilaiSkorCUP1A" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotCUP1A" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP1A" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotBKCUP1A" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
						<tr>
							<td>1. P1 = Mengukur kemampuan CU menyediakan dana cadangan risiko atas piutang lalai > 12 bulan</td>
							<td><check-value :value="form.p1.p1a1_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1a1_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1a1_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1a1_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1a1_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1a1_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1a1_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>2. P2 = Mengukur kemampuan CU menyediakan dana cadangan risiko atas piutang lalai < 12 bulan</td>
							<td><check-value :value="form.p1.p1a2_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p1.p1a2_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p1.p1a2_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p1.p1a2_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p1.p1a2_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1a2_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1a2_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr class="bg-warning font-weight-bold">
							<td>B. STRUKTUR KEUANGAN YANG EFEKTIF</td>
							<td><check-value :value="nilaiSkorCUP1B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotCUP1B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP1B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotBKCUP1B" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
						<tr>
							<td>3. E1 = Mengukur persentase total asset yang diinvestasikan dalam piutang</td>
							<td><check-value :value="form.p1.p1b3_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1b3_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1b3_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1b3_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1b3_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1b3_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1b3_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>4. E5 = Mengukur persentase total asset yang didanai dari simpanan non saham</td>
							<td><check-value :value="form.p1.p1b4_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1b4_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1b4_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1b4_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1b4_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1b4_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1b4_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5. E6 = Mengukur persentase total asset yang didanai dari pinjaman pihak 3</td>
							<td><check-value :value="form.p1.p1b5_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1b5_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1b5_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1b5_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1b5_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1b5_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1b5_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>6. E9 = Mengukur level nyata dari modal lembaga setelah mengeluarkan penyisihan DCR untuk menutupi P1 & P2</td>
							<td><check-value :value="form.p1.p1b7_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1b7_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1b7_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1b7_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1b7_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1b7_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1b7_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr class="bg-success font-weight-bold">
							<td>C. KUALITAS ASET</td>
							<td><check-value :value="nilaiSkorCUP1C" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotCUP1C" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP1C" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotBKCUP1C" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
						<tr>
							<td>7. A1 = Mengukur persentase total kelalaian piutang terhadap total piutang</td>
							<td><check-value :value="form.p1.p1c8_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1c8_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1c8_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1c8_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1c8_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1c8_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1c8_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>8. A2 = Mengukur total asset yang tidak menghasilkan income</td>
							<td><check-value :value="form.p1.p1c9_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1c9_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1c9_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1c9_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1c9_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1c9_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1c9_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr class="bg-brown font-weight-bold">
							<td>D. NILAI PENGEMBALIAN ATAS PEMBIAYAAN</td>
							<td><check-value :value="nilaiSkorCUP1D" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotCUP1D" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP1D" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotBKCUP1D" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
						<tr>
							<td>9. R7 = Mengukur persentase pengembalian biaya atas simpanan saham</td>
							<td><check-value :value="form.p1.p1d10_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1d10_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1d10_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1d10_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1d10_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1d10_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1d10_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>10. R9 = Mengukur persentase beban untuk mengelola semua asset</td>
							<td><check-value :value="form.p1.p1d11_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1d11_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1d11_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1d11_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1d11_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1d11_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1d11_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr class="bg-danger font-weight-bold">
							<td>E. LIKUIDITAS</td>
							<td><check-value :value="nilaiSkorCUP1E" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotCUP1E" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP1E" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotBKCUP1E" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
						<tr>
							<td>11. L1 = Mengukur persentase cadangan likuid untuk memenuhi permintaan penarikan setelah membayar semua kewajiban < 30 hari</td>
							<td><check-value :value="form.p1.p1e12_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1e12_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1e12_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1e12_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1e12_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1e12_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1e12_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr class="bg-teal font-weight-bold">
							<td>F. PERTUMBUHAN</td>
							<td><check-value :value="nilaiSkorCUP1F" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotCUP1F" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP1F" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotBKCUP1F" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
						<tr>
							<td>12. S10 = Mengukur persentase pertumbuhan anggota dari tahun ke tahun</td>
							<td><check-value :value="form.p1.p1f13_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1f13_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1f13_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1f13_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1f13_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1f13_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1f13_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>13. S11 = Mengukur persentase pertumbuhan total  aset dari tahun ke tahun</td>
							<td><check-value :value="form.p1.p1f14_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1f14_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1f14_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p1.p1f14_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p1.p1f14_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1f14_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p1.p1f14_bkcu_rekomendasi"></check-value></td>
						</tr>
					</tbody>
					<tfoot>
						<tr class="bg-primary font-weight-bold">
							<td>SUBTOTAL</td>
							<td><check-value :value="nilaiSkorCUP1A + nilaiSkorCUP1B + nilaiSkorCUP1C + nilaiSkorCUP1D + nilaiSkorCUP1E + nilaiSkorCUP1F" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotCUP1A + nilaiBobotCUP1B + nilaiBobotCUP1C + nilaiBobotCUP1D + nilaiBobotCUP1E + nilaiBobotCUP1F" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP1A + nilaiSkorBKCUP1B + nilaiSkorBKCUP1C + nilaiSkorBKCUP1D + nilaiSkorBKCUP1E + nilaiSkorBKCUP1F" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotBKCUP1A + nilaiBobotBKCUP1B + nilaiBobotBKCUP1C + nilaiBobotBKCUP1D + nilaiBobotBKCUP1E + nilaiBobotBKCUP1F" valueType="decimal"></check-value></td>
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
			'nilaiSkorCUP1A',
			'nilaiBobotCUP1A',
			'nilaiSkorBKCUP1A',
			'nilaiBobotBKCUP1A',
			'nilaiSkorCUP1B',
			'nilaiBobotCUP1B',
			'nilaiSkorBKCUP1B',
			'nilaiBobotBKCUP1B',
			'nilaiSkorCUP1C',
			'nilaiBobotCUP1C',
			'nilaiSkorBKCUP1C',
			'nilaiBobotBKCUP1C',
			'nilaiSkorCUP1D',
			'nilaiBobotCUP1D',
			'nilaiSkorBKCUP1D',
			'nilaiBobotBKCUP1D',
			'nilaiSkorCUP1E',
			'nilaiBobotCUP1E',
			'nilaiSkorBKCUP1E',
			'nilaiBobotBKCUP1E',
			'nilaiSkorCUP1F',
			'nilaiBobotCUP1F',
			'nilaiSkorBKCUP1F',
			'nilaiBobotBKCUP1F',
		],
		components: {
			checkValue,
			jsonExcel,
		},
		data() {
			return {
				title: 'perspektif_keuangan_' + this.form.cu.no_ba,
				collapsed: false,
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
					perspektif: '1. P1 = Mengukur kemampuan CU menyediakan dana cadangan risiko atas piutang lalai > 12 bulan',
					skor_cu: this.form.p1.p1a1_cu_penilaian/1,
					bobot_cu: ((this.form.p1.p1a1_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p1.p1a1_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p1.p1a1_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p1.p1a1_cu_keterangan,
					keterangan_bkcu: this.form.p1.p1a1_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.p1a1_bkcu_rekomendasi,
				},
				{
					perspektif: '2. P2 = Mengukur kemampuan CU menyediakan dana cadangan risiko atas piutang lalai < 12 bulan',
					skor_cu: this.form.p1.p1a2_cu_penilaian/1,
					bobot_cu: ((this.form.p1.p1a2_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p1.p1a2_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p1.p1a2_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p1.p1a2_cu_keterangan,
					keterangan_bkcu: this.form.p1.p1a2_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.p1a2_bkcu_rekomendasi,
				},
				{
					perspektif: '3. E1 = Mengukur persentase total asset yang diinvestasikan dalam piutang',
					skor_cu: this.form.p1.p1b3_cu_penilaian/1,
					bobot_cu: ((this.form.p1.p1b3_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p1.p1b3_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p1.p1b3_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p1.p1b3_cu_keterangan,
					keterangan_bkcu: this.form.p1.p1b3_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.p1b3_bkcu_rekomendasi,
				},
				{
					perspektif: '4. E5 = Mengukur persentase total asset yang didanai dari simpanan non saham',
					skor_cu: this.form.p1.p1b4_cu_penilaian/1,
					bobot_cu: ((this.form.p1.p1b4_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p1.p1b4_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p1.p1b4_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p1.p1b4_cu_keterangan,
					keterangan_bkcu: this.form.p1.p1b4_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.p1b4_bkcu_rekomendasi,
				},
				{
					perspektif: '5. E6 = Mengukur persentase total asset yang didanai dari pinjaman pihak 3',
					skor_cu: this.form.p1.p1b5_cu_penilaian/1,
					bobot_cu: ((this.form.p1.p1b5_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p1.p1b5_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p1.p1b5_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p1.p1b5_cu_keterangan,
					keterangan_bkcu: this.form.p1.p1b5_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.p1b5_bkcu_rekomendasi,
				},
				{
					perspektif: '6. E9 = Mengukur level nyata dari modal lembaga setelah mengeluarkan penyisihan DCR untuk menutupi P1 & P2',
					skor_cu: this.form.p1.p1b7_cu_penilaian/1,
					bobot_cu: ((this.form.p1.p1b7_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p1.p1b7_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p1.p1b7_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p1.p1b7_cu_keterangan,
					keterangan_bkcu: this.form.p1.p1b7_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.p1b7_bkcu_rekomendasi,
				},
				{
					perspektif: '7. A1 = Mengukur persentase total kelalaian piutang terhadap total piutang',
					skor_cu: this.form.p1.p1c8_cu_penilaian/1,
					bobot_cu: ((this.form.p1.p1c8_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p1.p1c8_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p1.p1c8_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p1.p1c8_cu_keterangan,
					keterangan_bkcu: this.form.p1.p1c8_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.p1c8_bkcu_rekomendasi,
				},
				{
					perspektif: '8. A2 = Mengukur total asset yang tidak menghasilkan income',
					skor_cu: this.form.p1.p1c9_cu_penilaian/1,
					bobot_cu: ((this.form.p1.p1c9_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p1.p1c9_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p1.p1c9_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p1.p1c9_cu_keterangan,
					keterangan_bkcu: this.form.p1.p1c9_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.p1c9_bkcu_rekomendasi,
				},
				{
					perspektif: '9. R7 = Mengukur persentase pengembalian biaya atas simpanan saham',
					skor_cu: this.form.p1.p1d10_cu_penilaian/1,
					bobot_cu: ((this.form.p1.p1d10_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p1.p1d10_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p1.p1d10_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p1.p1d10_cu_keterangan,
					keterangan_bkcu: this.form.p1.p1d10_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.p1d10_bkcu_rekomendasi,
				},
				{
					perspektif: '10. R9 = Mengukur persentase beban untuk mengelola semua asset',
					skor_cu: this.form.p1.p1d11_cu_penilaian/1,
					bobot_cu: ((this.form.p1.p1d11_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p1.p1d11_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p1.p1d11_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p1.p1d11_cu_keterangan,
					keterangan_bkcu: this.form.p1.p1d11_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.p1d11_bkcu_rekomendasi,
				},
				{
					perspektif: '11. L1 = Mengukur persentase cadangan likuid untuk memenuhi permintaan penarikan setelah membayar semua kewajiban < 30 hari',
					skor_cu: this.form.p1.p1e12_cu_penilaian/1,
					bobot_cu: ((this.form.p1.p1e12_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p1.p1e12_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p1.p1e12_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p1.p1e12_cu_keterangan,
					keterangan_bkcu: this.form.p1.p1e12_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.p1e12_bkcu_rekomendasi,
				},
				{
					perspektif: '12. S10 = Mengukur persentase pertumbuhan anggota dari tahun ke tahun',
					skor_cu: this.form.p1.p1f13_cu_penilaian/1,
					bobot_cu: ((this.form.p1.p1f13_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p1.p1f13_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p1.p1f13_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p1.p1f13_cu_keterangan,
					keterangan_bkcu: this.form.p1.p1f13_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.p1f13_bkcu_rekomendasi,
				},
				{
					perspektif: '13. S11 = Mengukur persentase pertumbuhan total  aset dari tahun ke tahun',
					skor_cu: this.form.p1.p1f14_cu_penilaian/1,
					bobot_cu: ((this.form.p1.p1f14_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p1.p1f14_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p1.p1f14_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p1.p1f14_cu_keterangan,
					keterangan_bkcu: this.form.p1.p1f14_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p1.p1f14_bkcu_rekomendasi,
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
