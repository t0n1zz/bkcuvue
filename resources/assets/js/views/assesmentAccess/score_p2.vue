<template>
	<div>

		<div class="card border-top-2 border-top-primary rounded-top-0">
			<div class="card-header bg-white header-elements-inline">
				<h5 class="card-title">2. SCORE CARD PERSPEKTIF ANGGOTA/PELANGGAN</h5>
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
							<td>A. PRODUK DAN PELAYANAN YANG BERKUALITAS</td>
							<td><check-value :value="nilaiSkorCUP2A" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotCUP2A" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP2A" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotBKCUP2A" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
						<tr>
							<td>1. Target Produk dan Pelayanan</td>
							<td><check-value :value="form.p2.p2a1_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a1_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a1_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a1_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a1_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a1_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a1_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>2. Tampilan Produk</td>
							<td><check-value :value="form.p2.p2a2_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a2_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a2_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a2_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a2_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a2_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a2_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>3. Rentangan Produk Keuangan</td>
							<td><check-value :value="form.p2.p2a3_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a3_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a3_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a3_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a3_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a3_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a3_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>4. Brand sebagai Pola Pikir</td>
							<td><check-value :value="form.p2.p2a4_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a4_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a4_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a4_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a4_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a4_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a4_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>5. Produk Pendorong Kesejahteraan</td>
							<td><check-value :value="form.p2.p2a5_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a5_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a5_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a5_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a5_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a5_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a5_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>6. Capacitiy Based Landing (Pinjaman berbasis kemampuan mengembalikan)</td>
							<td><check-value :value="form.p2.p2a6_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a6_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a6_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a6_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a6_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a6_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a6_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>7. Akses dan Kenyamanan</td>
							<td><check-value :value="form.p2.p2a7_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a7_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a7_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a7_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a7_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a7_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a7_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>8. Price Value</td>
							<td><check-value :value="form.p2.p2a8_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a8_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a8_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a8_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a8_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a8_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a8_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>9. Pemasaran dan Promosi</td>
							<td><check-value :value="form.p2.p2a9_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a9_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a9_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a9_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a9_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a9_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a9_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>10. Insentif Loyalitas</td>
							<td><check-value :value="form.p2.p2a10_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a10_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a10_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a10_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a10_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a10_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a10_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>11. Kemasan Produk</td>
							<td><check-value :value="form.p2.p2a11_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a11_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a11_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2a11_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2a11_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a11_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2a11_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr class="bg-warning font-weight-bold">
							<td>B. KEPUASAN ANGGOTA</td>
							<td><check-value :value="nilaiSkorCUP2B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotCUP2B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP2B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotBKCUP2B" valueType="decimal"></check-value></td>
							<td colspan="3"></td>
						</tr>
						<tr>
							<td>12. Pemahaman tentang Anggota</td>
							<td><check-value :value="form.p2.p2b12_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b12_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b12_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b12_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b12_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b12_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b12_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>13. Membina Hubungan Berkelanjutan dengan Anggota</td>
							<td><check-value :value="form.p2.p2b13_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b13_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b13_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b13_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b13_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b13_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b13_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>14. Evaluasi Kepuasan Anggota</td>
							<td><check-value :value="form.p2.p2b14_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b14_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b14_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b14_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b14_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b14_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b14_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>15. Share of Wallet (Hanya menjadi anggota CU kita)</td>
							<td><check-value :value="form.p2.p2b15_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b15_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b15_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b15_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b15_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b15_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b15_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>16. Customer Care Excellence yang dilembagakan</td>
							<td><check-value :value="form.p2.p2b16_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b16_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b16_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b16_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b16_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b16_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b16_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>17. Manfaat bagi anggota (Member benefit)</td>
							<td><check-value :value="form.p2.p2b17_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b17_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b17_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b17_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b17_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b17_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b17_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>18. Rapat Anggota</td>
							<td><check-value :value="form.p2.p2b18_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b18_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b18_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b18_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b18_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b18_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b18_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>19. Partisipasi anggota</td>
							<td><check-value :value="form.p2.p2b19_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b19_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b19_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b19_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b19_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b19_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b19_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>20. Masukan dari anggota secara rutin setiap tahun dalam perencanaan, umpan balik dari anggota diminta secara rutin dan wilayah kerja sudah dibagi untuk memastikan bahwa umpan balik terkumpul</td>
							<td><check-value :value="form.p2.p2b20_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b20_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b20_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b20_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b20_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b20_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b20_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>21. Pengguna Produk-produk Pinjaman</td>
							<td><check-value :value="form.p2.p2b21_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b21_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b21_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b21_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b21_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b21_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b21_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>22. Pemahaman Tanggung jawab Peminjam - dilihat dari % Kelalaian</td>
							<td><check-value :value="form.p2.p2b22_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b22_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b22_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b22_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b22_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b22_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b22_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>23. Infrastruktur Fisik-Bangunan dan Ruang Kantor</td>
							<td><check-value :value="form.p2.p2b23_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b23_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b23_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b23_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b23_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b23_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b23_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>24. Infrastruktur teknologi –telefon dan faks</td>
							<td><check-value :value="form.p2.p2b24_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b24_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b24_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b24_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b24_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b24_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b24_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>25. Komputer, Aplikasi, Network dan Email</td>
							<td><check-value :value="form.p2.p2b25_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b25_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b25_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b25_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b25_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b25_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b25_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>26. Website</td>
							<td><check-value :value="form.p2.p2b26_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b26_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b26_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b26_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b26_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b26_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b26_bkcu_rekomendasi"></check-value></td>
						</tr>
						<tr>
							<td>27. Sistem Pelaporan Manajemen & Pusat Data</td>
							<td><check-value :value="form.p2.p2b27_cu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b27_cu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b27_bkcu_penilaian/1" valueType="decimal"></check-value></td>
							<td><check-value :value="(form.p2.p2b27_bkcu_penilaian/jumlahIndikator)*bobotSkor" valueType="decimal"></check-value></td>
							<td><check-value :value="form.p2.p2b27_cu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b27_bkcu_keterangan"></check-value></td>
							<td><check-value :value="form.p2.p2b27_bkcu_rekomendasi"></check-value></td>
						</tr>
					</tbody>
					<tfoot>
						<tr class="bg-primary font-weight-bold">
							<td>SUBTOTAL</td>
							<td><check-value :value="nilaiSkorCUP2A + nilaiSkorCUP2B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotCUP2A + nilaiBobotCUP2B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiSkorBKCUP2A + nilaiSkorBKCUP2B" valueType="decimal"></check-value></td>
							<td><check-value :value="nilaiBobotBKCUP2A + nilaiBobotBKCUP2B" valueType="decimal"></check-value></td>
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
			'nilaiSkorCUP2A',
			'nilaiBobotCUP2A',
			'nilaiSkorBKCUP2A',
			'nilaiBobotBKCUP2A',
			'nilaiSkorCUP2B',
			'nilaiBobotCUP2B',
			'nilaiSkorBKCUP2B',
			'nilaiBobotBKCUP2B',
		],
		components: {
			checkValue,
			jsonExcel
		},
		data() {
			return {
				collapsed: false,
				title: 'perspektif_anggota_' + this.form.cu.no_ba,
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
					perspektif: '1. Target Produk dan Pelayanan',
					skor_cu: this.form.p2.p2a1_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2a1_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2a1_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2a1_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2a1_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2a1_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2a1_bkcu_rekomendasi,
				},
				{
					perspektif: '2. Tampilan Produk',
					skor_cu: this.form.p2.p2a2_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2a2_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2a2_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2a2_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2a2_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2a2_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2a2_bkcu_rekomendasi,
				},
				{
					perspektif: '3. Rentangan Produk Keuangan',
					skor_cu: this.form.p2.p2a3_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2a3_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2a3_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2a3_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2a3_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2a3_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2a3_bkcu_rekomendasi,
				},
				{
					perspektif: '4. Brand sebagai Pola Pikir',
					skor_cu: this.form.p2.p2a4_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2a4_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2a4_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2a4_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2a4_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2a4_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2a4_bkcu_rekomendasi,
				},
				{
					perspektif: '5. Produk Pendorong Kesejahteraan',
					skor_cu: this.form.p2.p2a5_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2a5_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2a5_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2a5_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2a5_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2a5_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2a5_bkcu_rekomendasi,
				},
				{
					perspektif: '6. Capacitiy Based Landing (Pinjaman berbasis kemampuan mengembalikan)',
					skor_cu: this.form.p2.p2a6_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2a6_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2a6_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2a6_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2a6_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2a6_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2a6_bkcu_rekomendasi,
				},
				{
					perspektif: '7. Akses dan Kenyamanan',
					skor_cu: this.form.p2.p2a7_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2a7_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2a7_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2a7_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2a7_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2a7_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2a7_bkcu_rekomendasi,
				},
				{
					perspektif: '8. Price Value',
					skor_cu: this.form.p2.p2a8_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2a8_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2a8_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2a8_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2a8_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2a8_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2a8_bkcu_rekomendasi,
				},
				{
					perspektif: '9. Pemasaran dan Promosi',
					skor_cu: this.form.p2.p2a9_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2a9_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2a9_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2a9_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2a9_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2a9_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2a9_bkcu_rekomendasi,
				},
				{
					perspektif: '10. Insentif Loyalitas',
					skor_cu: this.form.p2.p2a10_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2a10_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2a10_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2a10_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2a10_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2a10_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2a10_bkcu_rekomendasi,
				},
				{
					perspektif: '11. Kemasan Produk',
					skor_cu: this.form.p2.p2a11_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2a11_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2a11_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2a11_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2a11_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2a11_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2a11_bkcu_rekomendasi,
				},
				{
					perspektif: '12. Pemahaman tentang Anggota',
					skor_cu: this.form.p2.p2b12_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2b12_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2b12_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2b12_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2b12_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2b12_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2b12_bkcu_rekomendasi,
				},
				{
					perspektif: '13. Membina Hubungan Berkelanjutan dengan Anggota',
					skor_cu: this.form.p2.p2b13_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2b13_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2b13_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2b13_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2b13_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2b13_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2b13_bkcu_rekomendasi,
				},
				{
					perspektif: '14. Evaluasi Kepuasan Anggota',
					skor_cu: this.form.p2.p2b14_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2b14_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2b14_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2b14_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2b14_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2b14_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2b14_bkcu_rekomendasi,
				},
				{
					perspektif: '15. Share of Wallet (Hanya menjadi anggota CU kita)',
					skor_cu: this.form.p2.p2b15_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2b15_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2b15_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2b15_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2b15_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2b15_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2b15_bkcu_rekomendasi,
				},
				{
					perspektif: '16. Customer Care Excellence yang dilembagakan',
					skor_cu: this.form.p2.p2b16_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2b16_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2b16_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2b16_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2b16_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2b16_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2b16_bkcu_rekomendasi,
				},
				{
					perspektif: '17. Manfaat bagi anggota (Member benefit)',
					skor_cu: this.form.p2.p2b17_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2b17_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2b17_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2b17_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2b17_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2b17_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2b17_bkcu_rekomendasi,
				},
				{
					perspektif: '18. Rapat Anggota',
					skor_cu: this.form.p2.p2b18_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2b18_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2b18_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2b18_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2b18_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2b18_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2b18_bkcu_rekomendasi,
				},
				{
					perspektif: '19. Partisipasi anggota',
					skor_cu: this.form.p2.p2b19_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2b19_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2b19_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2b19_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2b19_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2b19_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2b19_bkcu_rekomendasi,
				},
				{
					perspektif: '20. Masukan dari anggota secara rutin setiap tahun dalam perencanaan, umpan balik dari anggota diminta secara rutin dan wilayah kerja sudah dibagi untuk memastikan bahwa umpan balik terkumpul',
					skor_cu: this.form.p2.p2b20_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2b20_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2b20_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2b20_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2b20_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2b20_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2b20_bkcu_rekomendasi,
				},
				{
					perspektif: '21. Pengguna Produk-produk Pinjaman',
					skor_cu: this.form.p2.p2b21_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2b21_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2b21_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2b21_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2b21_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2b21_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2b21_bkcu_rekomendasi,
				},
				{
					perspektif: '22. Pemahaman Tanggung jawab Peminjam - dilihat dari % Kelalaian',
					skor_cu: this.form.p2.p2b22_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2b22_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2b22_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2b22_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2b22_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2b22_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2b22_bkcu_rekomendasi,
				},
				{
					perspektif: '23. Infrastruktur Fisik-Bangunan dan Ruang Kantor',
					skor_cu: this.form.p2.p2b23_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2b23_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2b23_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2b23_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2b23_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2b23_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2b23_bkcu_rekomendasi,
				},
				{
					perspektif: '24. Infrastruktur teknologi –telefon dan faks',
					skor_cu: this.form.p2.p2b24_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2b24_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2b24_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2b24_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2b24_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2b24_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2b24_bkcu_rekomendasi,
				},
				{
					perspektif: '25. Komputer, Aplikasi, Network dan Email',
					skor_cu: this.form.p2.p2b25_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2b25_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2b25_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2b25_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2b25_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2b25_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2b25_bkcu_rekomendasi,
				},
				{
					perspektif: '26. Website',
					skor_cu: this.form.p2.p2b26_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2b26_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2b26_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2b26_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2b26_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2b26_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2b26_bkcu_rekomendasi,
				},
				{
					perspektif: '27. Sistem Pelaporan Manajemen & Pusat Data',
					skor_cu: this.form.p2.p2b27_cu_penilaian/1,
					bobot_cu: ((this.form.p2.p2b27_cu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					skor_bkcu: this.form.p2.p2b27_bkcu_penilaian/1,
					bobot_bkcu: ((this.form.p2.p2b27_bkcu_penilaian/this.jumlahIndikator)*this.bobotSkor).toFixed(2).replace('.', ','),
					keterangan_cu: this.form.p2.p2b27_cu_keterangan,
					keterangan_bkcu: this.form.p2.p2b27_bkcu_keterangan,
					rekomendasi_bkcu: this.form.p2.p2b27_bkcu_rekomendasi,
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
