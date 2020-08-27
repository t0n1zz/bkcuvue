<template>
	<div>

		<div class="card border-top-2 border-top-primary rounded-top-0">
			<div class="card-header bg-white header-elements-inline">
				<h5 class="card-title">3. SCORE CARD PERSPEKTIF BISNIS INTERNAL</h5>
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
							<td>A. PRODUK DAN PELAYANAN YANG BERKUALITAS</td>
							<td><check-value :value="nilaiSkorCUP3A" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotCUP3A" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP3A" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotBKCUP3A" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
						<tr>
							<td>1. Manual Operasional Yang Komprehensif</td>
							<td><check-value :value="form.p3.p3a1_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p3.p3a1_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.p3a1_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p3.p3a1_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p3.p3a1_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a1_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a1_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>2. Manual Prosedur</td>
							<td><check-value :value="form.p3.p3a2_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3a2_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3a2_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3a2_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3a2_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a2_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a2_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>3. Produktivitas Staf</td>
							<td><check-value :value="form.p3.p3a3_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3a3_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3a3_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3a3_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3a3_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a3_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a3_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>4. Manajemen Kekeliruan (Error Management)</td>
							<td><check-value :value="form.p3.p3a4_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3a4_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3a4_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3a4_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3a4_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a4_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a4_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5. Service delivery kepada anggota - Pinjaman</td>
							<td><check-value :value="form.p3.p3a5_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3a5_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3a5_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3a5_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3a5_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a5_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a5_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>6. Service delivery kepada anggota - Simpanan</td>
							<td><check-value :value="form.p3.p3a6_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3a6_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3a6_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3a6_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3a6_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a6_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a6_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>7. Service delivery kepada anggota – Penarikan Simpanan</td>
							<td><check-value :value="form.p3.p3a7_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3a7_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3a7_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3a7_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3a7_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a7_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a7_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>8. Penggunaan Mesin dan Peralatan Kantor</td>
							<td><check-value :value="form.p3.p3a8_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3a8_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3a8_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3a8_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3a8_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a8_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a8_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>9. Efisiensi Komunikasi Internal</td>
							<td><check-value :value="form.p3.p3a9_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3a9_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3a9_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3a9_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3a9_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a9_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3a9_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr class="bg-warning font-weight-bold">
							<td>B. POSISI BERSAING</td>
							<td><check-value :value="nilaiSkorCUP3B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotCUP3B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP3B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotBKCUP3B" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
						<tr class="bg-slate font-weight-bold">
							<td colspan="8">ARAH STRATEGIS</td>
						</tr>
						<tr>
							<td>10. Kematangan Visi</td>
							<td><check-value :value="form.p3.p3b10_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b10_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b10_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b10_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b10_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b10_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b10_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11. Keberanian Visi (Boldness  of Vission)</td>
							<td><check-value :value="form.p3.p3b11_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b11_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b11_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b11_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b11_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b11_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b11_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>12. Perumusan Misi Dengan Baik</td>
							<td><check-value :value="form.p3.p3b12_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b12_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b12_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b12_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b12_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b12_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b12_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>13. Nilai-nilai inti</td>
							<td><check-value :value="form.p3.p3b13_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b13_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b13_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b13_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b13_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b13_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b13_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>14. Keluasan Sasaran</td>
							<td><check-value :value="form.p3.p3b14_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b14_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b14_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b14_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b14_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b14_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b14_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>15. Tujuan Strategis</td>
							<td><check-value :value="form.p3.p3b15_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b15_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b15_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b15_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b15_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b15_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b15_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>16. Rencana Bisnis Tahunan</td>
							<td><check-value :value="form.p3.p3b16_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b16_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b16_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b16_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b16_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b16_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b16_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr class="bg-slate font-weight-bold">
							<td colspan="8">MEMBANGUN CITRA</td>
						</tr>
						<tr>
							<td>17. Budaya Jual (Sales Culture)</td>
							<td><check-value :value="form.p3.p3b17_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b17_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b17_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b17_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b17_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b17_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b17_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>18. Keterlibatan Masyarakat Lokal</td>
							<td><check-value :value="form.p3.p3b18_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b18_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b18_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b18_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b18_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b18_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b18_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>19. Kemitraan dan Aliansi</td>
							<td><check-value :value="form.p3.p3b19_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b19_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b19_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b19_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b19_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b19_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b19_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>20. Hubungan dengan Federasi (BKCU)</td>
							<td><check-value :value="form.p3.p3b20_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b20_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b20_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b20_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b20_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b20_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b20_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr class="bg-slate font-weight-bold">
							<td colspan="8">PENETRASI PASAR</td>
						</tr>
						<tr>
							<td>21. Anggota Masyarakat Pengguna Layanan Credit Union</td>
							<td><check-value :value="form.p3.p3b21_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b21_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b21_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b21_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b21_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b21_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b21_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>22. Segmentasi Anggota menurut umur</td>
							<td><check-value :value="form.p3.p3b22_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b22_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b22_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b22_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b22_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b22_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b22_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>23. Keberagaman Keanggotaan</td>
							<td><check-value :value="form.p3.p3b23_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b23_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b23_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b23_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b23_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b23_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b23_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>24. Kesetaraan Gender</td>
							<td><check-value :value="form.p3.p3b24_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b24_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b24_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b24_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b24_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b24_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b24_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr class="bg-slate font-weight-bold">
							<td colspan="8">PEMENUHAN PERATURAN</td>
						</tr>
						<tr>
							<td>25. Pemenuhan Aturan<</td>
							<td><check-value :value="form.p3.p3b25_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b25_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b25_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b25_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b25_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b25_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b25_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>26. Kepatuhan Hukum</td>
							<td><check-value :value="form.p3.p3b26_cu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b26_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b26_bkcu_penilaian/1" valueType="currency"></check-value></td>
							<td><check-value :value="(form.p3.p3b26_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="currency"></check-value></td>
							<td><check-value :value="form.p3.p3b26_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b26_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p3.p3b26_bkcu_rekomendasi"></check-value></td>
						</tr>
					</tbody>
					<tfoot>
						<tr class="bg-primary font-weight-bold">
							<td>SUBTOTAL</td>
							<td><check-value :value="nilaiSkorCUP3A + nilaiSkorCUP3B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotCUP3A + nilaiBobotCUP3B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP3A + nilaiSkorBKCUP3B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotBKCUP3A + nilaiBobotBKCUP3B" valueType="decimal"></check-value></td>
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
			'nilaiSkorCUP3A',
			'nilaiBobotCUP3A',
			'nilaiSkorBKCUP3A',
			'nilaiBobotBKCUP3A',
			'nilaiSkorCUP3B',
			'nilaiBobotCUP3B',
			'nilaiSkorBKCUP3B',
			'nilaiBobotBKCUP3B',
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
