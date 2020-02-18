<template>
<div>
	<div class="row">

		<div class="col-lg-12">
				<div class="form-group">
					
					<!-- select -->
					<select name="peran" data-width="100%" class="form-control" @change="changePeran($event.target.value)" v-model="selectPeran">
						<option disabled value="" selected>Silahkan pilih peran user</option>
						<option value="penuh">Akses Penuh</option>
						<option value="monitoring">Monitoring</option>
						<option value="laporan">Laporan</option>
						<option value="organisasi">Organisasi</option>
						<option value="kegiatan">Kegiatan</option>
						<option value="publikasi">Publikasi</option>
						<option value="kosong">kosong</option>
						<option value="custom">Custom</option>
					</select>

				</div>
		</div>

		<!-- hak akses -->
		<div class="col-lg-6 col-md-12" v-for="akses in hakAkses" v-if="tipeUser === akses.tipe || akses.tipe ==='all'">
			
			<div class="card">
				<div class="card-header bg-white header-elements-inline">
					<h6 class="card-title">
						<i :class="akses.icon" class="mr-1"></i> {{ akses.name }}
					</h6>
					<div class="header-elements">
						<div class="list-icons">
							<a href="#" class="list-icons-item" @click.prevent="checkGroup(akses.name)">
								<i class="icon-checkbox-checked2"></i>
							</a>
							<a href="#" class="list-icons-item" @click.prevent="unCheckGroup(akses.name)">
								<i class="icon-checkbox-unchecked2"></i>
							</a>
						</div>
					</div>
				</div>

				<div class="card-body">
					<div class="row">
						<div class="col-sm-3 mb-2" v-for="permission in akses.permission" v-if="tipeUser == permission.tipe || permission.tipe == 'all' || permission.tipe == 'bkcu approve'">
							<div v-if="permission.tipe == 'bkcu approve'">
								<div class="form-check" v-if="currentUser.id_cu == 0">
									<label style="cursor:pointer;">
										<input type="checkbox" class="form-check-input" :value="permission.key" v-model="hakForm" v-if="permission.type != 'empty'" @change="checkChange()">
										<i :class="permission.icon"></i> &nbsp; {{ permission.name }}
									</label>
								</div>
							</div>
							<div class="form-check" v-else>
								<label style="cursor:pointer;">
									<input type="checkbox" class="form-check-input" :value="permission.key" v-model="hakForm" v-if="permission.type != 'empty'" @change="checkChange()">
									<i :class="permission.icon"></i> &nbsp; {{ permission.name }}
								</label>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>
	</div>
</div>	
</template>

<script>
	import _ from 'lodash';
	import { mapGetters } from 'vuex';
	export default {
		props: ['tipeUser','form','dataStat'],
		data() {
			return {
				isCheckAll: false,
				hakForm: [],
				hakAkses: [
					{
						name: 'Artikel',
						icon: 'icon-newspaper',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_artikel',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Artikel'
							},
							{
								name: 'Tambah',
								key: 'create_artikel',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Artikel'
							},
							{
								name: 'Ubah',
								key: 'update_artikel',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Artikel'
							},
							{
								name: 'Hapus',
								key: 'destroy_artikel',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Artikel'
							},
							{
								name: 'Terbitkan',
								key: 'terbitkan_artikel',
								icon: 'icon-file-upload',
								tipe: 'all',
								value: false,
								group: 'Artikel'
							},
							{
								name: 'Utamakan',
								key: 'utamakan_artikel',
								icon: 'icon-pushpin',
								tipe: 'all',
								value: false,
								group: 'Artikel'
							}
						]
					},
					{
						name: 'Artikel SIMO',
						icon: 'icon-newspaper',
						secondRow: true,
						tipe: 'bkcu',
						permission: [
							{
								name: 'Tambah',
								key: 'create_artikel_simo',
								icon: 'icon-plus3',
								tipe: 'bkcu',
								value: false,
								group: 'Artikel SIMO'
							},
							{
								name: 'Ubah',
								key: 'update_artikel_simo',
								icon: 'icon-pencil',
								tipe: 'bkcu',
								value: false,
								group: 'Artikel SIMO'
							},
							{
								name: 'Hapus',
								key: 'destroy_artikel_simo',
								icon: 'icon-bin2',
								tipe: 'bkcu',
								value: false,
								group: 'Artikel SIMO'
							},
						]
					},
					{
						name: 'Kategori Artikel',
						icon: 'icon-grid6',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_artikel_kategori',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Kategori Artikel'
							},
							{
								name: 'Tambah',
								key: 'create_artikel_kategori',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Kategori Artikel'
							},
							{
								name: 'Ubah',
								key: 'update_artikel_kategori',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Kategori Artikel'
							},
							{
								name: 'Hapus',
								key: 'destroy_artikel_kategori',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Kategori Artikel'
							}
						]
					},
					{
						name: 'Penulis Artikel',
						icon: 'icon-pencil6',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_artikel_penulis',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Penulis Artikel'
							},
							{
								name: 'Tambah',
								key: 'create_artikel_penulis',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Penulis Artikel'
							},
							{
								name: 'Ubah',
								key: 'update_artikel_penulis',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Penulis Artikel'
							},
							{
								name: 'Hapus',
								key: 'destroy_artikel_penulis',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Penulis Artikel'
							}
						]
					},
					{
						name: 'Pengumuman',
						icon: 'icon-megaphone',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_pengumuman',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Pengumuman'
							},
							{
								name: 'Tambah',
								key: 'create_pengumuman',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Pengumuman'
							},
							{
								name: 'Ubah',
								key: 'update_pengumuman',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Pengumuman'
							},
							{
								name: 'Hapus',
								key: 'destroy_pengumuman',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Pengumuman'
							}
						]
					},
					{
						name: 'Diklat BKCU',
						icon: 'icon-graduation2',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_diklat_bkcu',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Diklat BKCU'
							},
							{
								name: 'Tambah',
								key: 'create_diklat_bkcu',
								icon: 'icon-plus3',
								tipe: 'bkcu',
								value: false,
								group: 'Diklat BKCU'
							},
							{
								name: 'Ubah',
								key: 'update_diklat_bkcu',
								icon: 'icon-pencil',
								tipe: 'bkcu',
								value: false,
								group: 'Diklat BKCU'
							},
							{
								name: 'Hapus',
								key: 'destroy_diklat_bkcu',
								icon: 'icon-bin2',
								tipe: 'bkcu',
								value: false,
								group: 'Diklat BKCU'
							}
						]
					},
					{
						name: 'Tempat',
						icon: 'icon-location4',
						secondRow: true,
						tipe: 'bkcu',
						permission: [{
								name: 'Lihat',
								key: 'index_tempat',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Tempat'
							},
							{
								name: 'Tambah',
								key: 'create_tempat',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Tempat'
							},
							{
								name: 'Ubah',
								key: 'update_tempat',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Tempat'
							},
							{
								name: 'Hapus',
								key: 'destroy_tempat',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Tempat'
							}
						]
					},
					{
						name: 'Anggota CU',
						icon: 'icon-man-woman',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_anggota_cu',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Anggota CU'
							},
							{
								name: 'Tambah',
								key: 'create_anggota_cu',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Anggota CU'
							},
							{
								name: 'Ubah',
								key: 'update_anggota_cu',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Anggota CU'
							},
							{
								name: 'Hapus',
								key: 'destroy_anggota_cu',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Anggota CU'
							},
							{
								name: 'Upload',
								key: 'upload_anggota_cu',
								icon: 'icon-file-upload',
								tipe: 'bkcu',
								value: false,
								group: 'Anggota CU'
							},
						]
					},
					{
						name: 'Saldo',
						icon: 'icon-wallet',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_saldo',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Saldo'
							},
							{
								name: 'Tambah',
								key: 'create_saldo',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Saldo'
							},
							{
								name: 'Ubah',
								key: 'update_saldo',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Saldo'
							},
							{
								name: 'Hapus',
								key: 'destroy_saldo',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Saldo'
							},
						]
					},
					{
						name: 'Klaim JALINAN',
						icon: 'icon-accessibility2',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_jalinan_klaim',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Klaim JALINAN'
							},
							{
								name: 'Tambah',
								key: 'create_jalinan_klaim',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Klaim JALINAN'
							},
							{
								name: 'Ubah',
								key: 'update_jalinan_klaim',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Klaim JALINAN'
							},
							{
								name: 'Hapus',
								key: 'destroy_jalinan_klaim',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Klaim JALINAN'
							},
							{
								name: 'Pencairan',
								key: 'pencairan_jalinan_klaim',
								icon: 'icon-square-down',
								tipe: 'bkcu',
								value: false,
								group: 'Klaim JALINAN'
							},
							{
								name: 'Laporan',
								key: 'laporan_jalinan_klaim',
								icon: 'icon-archive',
								tipe: 'all',
								value: false,
								group: 'Klaim JALINAN'
							},
							{
								name: 'Verifikasi Pengurus',
								key: 'verifikasi_pengurus_jalinan_klaim',
								icon: 'icon-file-eye',
								tipe: 'bkcu approve',
								value: false,
								group: ''
							},
							{
								name: 'Verifikasi Pengawas',
								key: 'verifikasi_pengawas_jalinan_klaim',
								icon: 'icon-file-eye',
								tipe: 'bkcu approve',
								value: false,
								group: ''
							},
							{
								name: 'Verifikasi Manajemen',
								key: 'verifikasi_manajemen_jalinan_klaim',
								icon: 'icon-file-eye',
								tipe: 'bkcu approve',
								value: false,
								group: ''
							}
						]
					},
					{
						name: 'CU',
						icon: 'icon-office',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_cu',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'CU'
							},
							{
								name: 'Tambah',
								key: 'create_cu',
								icon: 'icon-plus3',
								tipe: 'bkcu',
								value: false,
								group: 'CU'
							},
							{
								name: 'Ubah',
								key: 'update_cu',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'CU'
							},
							{
								name: 'Hapus',
								key: 'destroy_cu',
								icon: 'icon-bin2',
								tipe: 'bkcu',
								value: false,
								group: 'CU'
							}
						]
					},
					{
						name: 'TP/KP',
						icon: 'icon-home9',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_tp',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'TP/KP'
							},
							{
								name: 'Tambah',
								key: 'create_tp',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'TP/KP'
							},
							{
								name: 'Ubah',
								key: 'update_tp',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'TP/KP'
							},
							{
								name: 'Hapus',
								key: 'destroy_tp',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'TP/KP'
							}
						]
					},
					{
						name: 'Produk dan Pelayanan',
						icon: 'icon-list3',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_produk_cu',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Produk dan Pelayanan'
							},
							{
								name: 'Tambah',
								key: 'create_produk_cu',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Produk dan Pelayanan'
							},
							{
								name: 'Ubah',
								key: 'update_produk_cu',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Produk dan Pelayanan'
							},
							{
								name: 'Hapus',
								key: 'destroy_produk_cu',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Produk dan Pelayanan'
							}
						]
					},
					{
						name: 'Aktivis CU',
						icon: 'icon-user-tie',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_aktivis',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Aktivis CU'
							},
							{
								name: 'Tambah',
								key: 'create_aktivis',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Aktivis CU'
							},
							{
								name: 'Ubah',
								key: 'update_aktivis',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Aktivis CU'
							},
							{
								name: 'Hapus',
								key: 'destroy_aktivis',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Aktivis CU'
							}
						]
					},
					{
						name: 'Aset Tetap',
						icon: 'icon-drawer3',
						secondRow: true,
						tipe: 'bkcu',
						permission: [{
								name: 'Lihat',
								key: 'index_aset_tetap',
								icon: 'icon-eye',
								tipe: 'bkcu',
								value: false,
								group: 'Aset Tetap'
							},
							{
								name: 'Tambah',
								key: 'create_aset_tetap',
								icon: 'icon-plus3',
								tipe: 'bkcu',
								value: false,
								group: 'Aset Tetap'
							},
							{
								name: 'Ubah',
								key: 'update_aset_tetap',
								icon: 'icon-pencil',
								tipe: 'bkcu',
								value: false,
								group: 'Aset Tetap'
							},
							{
								name: 'Hapus',
								key: 'destroy_aset_tetap',
								icon: 'icon-bin2',
								tipe: 'bkcu',
								value: false,
								group: 'Aset Tetap'
							}
						]
					},
					{
						name: 'Jenis Aset Tetap',
						icon: 'icon-drawer3',
						secondRow: true,
						tipe: 'bkcu',
						permission: [{
								name: 'Lihat',
								key: 'index_aset_tetap_jenis',
								icon: 'icon-eye',
								tipe: 'bkcu',
								value: false,
								group: 'Jenis Aset Tetap'
							},
							{
								name: 'Tambah',
								key: 'create_aset_tetap_jenis',
								icon: 'icon-plus3',
								tipe: 'bkcu',
								value: false,
								group: 'Jenis Aset Tetap'
							},
							{
								name: 'Ubah',
								key: 'update_aset_tetap_jenis',
								icon: 'icon-pencil',
								tipe: 'bkcu',
								value: false,
								group: 'Jenis Aset Tetap'
							},
							{
								name: 'Hapus',
								key: 'destroy_aset_tetap_jenis',
								icon: 'icon-bin2',
								tipe: 'bkcu',
								value: false,
								group: 'Jenis Aset Tetap'
							}
						]
					},
					{
						name: 'Lokasi Aset Tetap',
						icon: 'icon-drawer3',
						secondRow: true,
						tipe: 'bkcu',
						permission: [{
								name: 'Lihat',
								key: 'index_aset_tetap_lokasi',
								icon: 'icon-eye',
								tipe: 'bkcu',
								value: false,
								group: 'Lokasi Aset Tetap'
							},
							{
								name: 'Tambah',
								key: 'create_aset_tetap_lokasi',
								icon: 'icon-plus3',
								tipe: 'bkcu',
								value: false,
								group: 'Lokasi Aset Tetap'
							},
							{
								name: 'Ubah',
								key: 'update_aset_tetap_lokasi',
								icon: 'icon-pencil',
								tipe: 'bkcu',
								value: false,
								group: 'Lokasi Aset Tetap'
							},
							{
								name: 'Hapus',
								key: 'destroy_aset_tetap_lokasi',
								icon: 'icon-bin2',
								tipe: 'bkcu',
								value: false,
								group: 'Lokasi Aset Tetap'
							}
						]
					},
					{
						name: 'Assesment Access',
						icon: 'icon-briefcase',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_assesment_access',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Assesment Access'
							},
							{
								name: 'Tambah',
								key: 'create_assesment_access',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Assesment Access'
							},
							{
								name: 'Ubah',
								key: 'update_assesment_access',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Assesment Access'
							},
							{
								name: 'Hapus',
								key: 'destroy_assesment_access',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Assesment Access'
							}
						]
					},
					{
						name: 'Mitra Perseorangan',
						icon: 'icon-briefcase',
						secondRow: true,
						tipe: 'bkcu',
						permission: [{
								name: 'Lihat',
								key: 'index_mitra_orang',
								icon: 'icon-eye',
								tipe: 'bkcu',
								value: false,
								group: 'Mitra Perseorangan'
							},
							{
								name: 'Tambah',
								key: 'create_mitra_orang',
								icon: 'icon-plus3',
								tipe: 'bkcu',
								value: false,
								group: 'Mitra Perseorangan'
							},
							{
								name: 'Ubah',
								key: 'update_mitra_orang',
								icon: 'icon-pencil',
								tipe: 'bkcu',
								value: false,
								group: 'Mitra Perseorangan'
							},
							{
								name: 'Hapus',
								key: 'destroy_mitra_orang',
								icon: 'icon-bin2',
								tipe: 'bkcu',
								value: false,
								group: 'Mitra Perseorangan'
							}
						]
					},
					{
						name: 'Lembaga Mitra',
						icon: 'icon-briefcase',
						secondRow: true,
						tipe: 'bkcu',
						permission: [{
								name: 'Lihat',
								key: 'index_mitra_lembaga',
								icon: 'icon-eye',
								tipe: 'bkcu',
								value: false,
								group: 'Lembaga Mitra'
							},
							{
								name: 'Tambah',
								key: 'create_mitra_lembaga',
								icon: 'icon-plus3',
								tipe: 'bkcu',
								value: false,
								group: 'Lembaga Mitra'
							},
							{
								name: 'Ubah',
								key: 'update_mitra_lembaga',
								icon: 'icon-pencil',
								tipe: 'bkcu',
								value: false,
								group: 'Lembaga Mitra'
							},
							{
								name: 'Hapus',
								key: 'destroy_mitra_lembaga',
								icon: 'icon-bin2',
								tipe: 'bkcu',
								value: false,
								group: 'Lembaga Mitra'
							}
						]
					},
					{
						name: 'Laporan CU',
						icon: 'icon-stats-growth',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_laporan_cu',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Laporan CU'
							},
							{
								name: 'Tambah',
								key: 'create_laporan_cu',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Laporan CU'
							},
							{
								name: 'Ubah',
								key: 'update_laporan_cu',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Laporan CU'
							},
							{
								name: 'Hapus',
								key: 'destroy_laporan_cu',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Laporan CU'
							},
							{
								name: 'Diskusi',
								key: 'diskusi_laporan_cu',
								icon: 'icon-bubble7',
								tipe: 'all',
								value: false,
								group: 'Laporan CU'
							},
							{
								name: 'Upload',
								key: 'upload_laporan_cu',
								icon: 'icon-file-upload',
								tipe: 'all',
								value: false,
								group: 'Laporan CU'
							}
						]
					},
					{
						name: 'Laporan TP/KP',
						icon: 'icon-stats-growth',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_laporan_tp',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Laporan TP/KP'
							},
							{
								name: 'Tambah',
								key: 'create_laporan_tp',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Laporan TP/KP'
							},
							{
								name: 'Ubah',
								key: 'update_laporan_tp',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Laporan TP/KP'
							},
							{
								name: 'Hapus',
								key: 'destroy_laporan_tp',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Laporan TP/KP'
							},
							{
								name: 'Diskusi',
								key: 'diskusi_laporan_tp',
								icon: 'icon-bubble7',
								tipe: 'all',
								value: false,
								group: 'Laporan TP/KP'
							},
							{
								name: 'Upload',
								key: 'upload_laporan_tp',
								icon: 'icon-file-upload',
								tipe: 'all',
								value: false,
								group: 'Laporan TP/KP'
							}
						]
					},
					{
						name: 'User',
						icon: 'icon-users',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_user',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'User'
							},
							{
								name: 'Tambah',
								key: 'create_user',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'User'
							},
							{
								name: 'Ubah',
								key: 'update_user',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'User'
							},
							{
								name: 'Hapus',
								key: 'destroy_user',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'User'
							},
							{
								name: 'Reset Password',
								key: 'reset_password',
								icon: 'icon-history',
								tipe: 'all',
								value: false,
								group: 'User'
							},
							{
								name: 'Status',
								key: 'status_user',
								icon: 'icon-pushpin',
								tipe: 'all',
								value: false,
								group: 'User'
							},
							{
								name: 'Hak Akses',
								key: 'hak_akses_user',
								icon: 'icon-key',
								tipe: 'all',
								value: false,
								group: 'User'
							}
						]
					},
					{
						name: 'Saran',
						icon: 'icon-lifebuoy',
						secondRow: true,
						tipe: 'bkcu',
						permission: [{
								name: 'Lihat',
								key: 'index_saran',
								icon: 'icon-eye',
								tipe: 'bkcu',
								value: false,
								group: 'Saran'
							},
							{
								name: 'Hapus',
								key: 'destroy_saran',
								icon: 'icon-bin2',
								tipe: 'bkcu',
								value: false,
								group: 'Saran'
							},
						]
					},
					{
						name: 'Error Log',
						icon: 'icon-cancel-square2',
						secondRow: true,
						tipe: 'bkcu',
						permission: [{
								name: 'Lihat',
								key: 'index_error_log',
								icon: 'icon-eye',
								tipe: 'bkcu',
								value: false,
								group: 'Saran'
							},
							{
								name: 'Hapus',
								key: 'destroy_error_log',
								icon: 'icon-bin2',
								tipe: 'bkcu',
								value: false,
								group: 'Saran'
							},
						]
					},
				],
				selectPeran: '',
				peran: {
					penuhBKCU: [
						'index_artikel',
						'create_artikel',
						'update_artikel',
						'destroy_artikel',
						'terbitkan_artikel',
						'utamakan_artikel',

						'create_artikel_simo',
						'update_artikel_simo',
						'destroy_artikel_simo',

						'index_user',
						'create_user',
						'update_user',
						'destroy_user',
						'reset_password',
						'status_user',
						'hak_akses_user',

						'index_artikel_penulis',
						'create_artikel_penulis',
						'update_artikel_penulis',
						'destroy_artikel_penulis',

						'index_artikel_kategori',
						'create_artikel_kategori',
						'update_artikel_kategori',
						'destroy_artikel_kategori',

						'index_pengumuman',
						'create_pengumuman',
						'update_pengumuman',
						'destroy_pengumuman',

						'index_saran',
						'destroy_saran',

						'index_error_log',
						'destroy_error_log',

						'index_anggota_cu',
						'create_anggota_cu',
						'update_anggota_cu',
						'destroy_anggota_cu',
						'upload_anggota_cu',

						'index_saldo',
						'create_saldo',
						'update_saldo',
						'destroy_saldo',

						'index_jalinan_klaim',
						'create_jalinan_klaim',
						'update_jalinan_klaim',
						'destroy_jalinan_klaim',
						'laporan_jalinan_klaim',
						'pencairan_jalinan_klaim',
						
						'index_cu',
						'create_cu',
						'update_cu',
						'destroy_cu',

						'index_tp',
						'create_tp',
						'update_tp',
						'destroy_tp',

						'index_aktivis',
						'create_aktivis',
						'update_aktivis',
						'destroy_aktivis',

						'index_aset_tetap',
						'create_aset_tetap',
						'update_aset_tetap',
						'destroy_aset_tetap',

						'index_aset_tetap_jenis',
						'create_aset_tetap_jenis',
						'update_aset_tetap_jenis',
						'destroy_aset_tetap_jenis',

						'index_aset_tetap_lokasi',
						'create_aset_tetap_lokasi',
						'update_aset_tetap_lokasi',
						'destroy_aset_tetap_lokasi',

						'index_assesment_access',
						'create_assesment_access',
						'update_assesment_access',
						'destroy_assesment_access',
						
						'index_mitra_orang',
						'create_mitra_orang',
						'update_mitra_orang',
						'destroy_mitra_orang',

						'index_mitra_lembaga',
						'create_mitra_lembaga',
						'update_mitra_lembaga',
						'destroy_mitra_lembaga',

						'index_produk_cu',
						'create_produk_cu',
						'update_produk_cu',
						'destroy_produk_cu',

						'index_diklat_bkcu',
						'create_diklat_bkcu',
						'update_diklat_bkcu',
						'destroy_diklat_bkcu',

						'index_tempat',
						'create_tempat',
						'update_tempat',
						'destroy_tempat',

						'index_laporan_cu',
						'create_laporan_cu',
						'update_laporan_cu',
						'destroy_laporan_cu',
						'upload_laporan_cu',
						'diskusi_laporan_cu',

						'index_laporan_tp',
						'create_laporan_tp',
						'update_laporan_tp',
						'destroy_laporan_tp',
						'upload_laporan_tp',
						'diskusi_laporan_tp',
					],
					penuhCU: [
						'index_artikel',
						'create_artikel',
						'update_artikel',
						'destroy_artikel',
						'terbitkan_artikel',
						'utamakan_artikel',

						'index_user',
						'create_user',
						'update_user',
						'destroy_user',
						'reset_password',
						'status_user',
						'hak_akses_user',

						'index_artikel_penulis',
						'create_artikel_penulis',
						'update_artikel_penulis',
						'destroy_artikel_penulis',

						'index_artikel_kategori',
						'create_artikel_kategori',
						'update_artikel_kategori',
						'destroy_artikel_kategori',

						'index_pengumuman',
						'create_pengumuman',
						'update_pengumuman',
						'destroy_pengumuman',

						'index_anggota_cu',
						'create_anggota_cu',
						'update_anggota_cu',
						'destroy_anggota_cu',

						'index_saldo',
						'create_saldo',
						'update_saldo',
						'destroy_saldo',

						'index_jalinan_klaim',
						'create_jalinan_klaim',
						'update_jalinan_klaim',
						'destroy_jalinan_klaim',
						'laporan_jalinan_klaim',

						'index_cu',
						'update_cu',

						'index_tp',
						'create_tp',
						'update_tp',
						'destroy_tp',

						'index_aktivis',
						'create_aktivis',
						'update_aktivis',
						'destroy_aktivis',

						'index_assesment_access',
						'create_assesment_access',
						'update_assesment_access',
						'destroy_assesment_access',

						'index_produk_cu',
						'create_produk_cu',
						'update_produk_cu',
						'destroy_produk_cu',

						'index_diklat_bkcu',

						'index_laporan_cu',
						'create_laporan_cu',
						'update_laporan_cu',
						'destroy_laporan_cu',
						'upload_laporan_cu',
						'diskusi_laporan_cu',

						'index_laporan_tp',
						'create_laporan_tp',
						'update_laporan_tp',
						'destroy_laporan_tp',
						'upload_laporan_tp',
						'diskusi_laporan_tp',
					],
					monitoring: [
						'index_artikel',
						'index_user',
						'index_artikel_penulis',
						'index_artikel_kategori',
						'index_pengumuman',
						'index_anggota_cu',
						'index_saldo',
						'index_jalinan_klaim',
						'laporan_jalinan_klaim',
						'index_cu',
						'index_tp',
						'index_aktivis',
						'index_produk_cu',
						'index_diklat_bkcu',
						'index_tempat',
						'index_laporan_cu',
						'diskusi_laporan_cu',
						'index_laporan_tp',
						'diskusi_laporan_tp',
						'index_assesment_access',
						'index_mitra_orang',
						'index_mitra_lembaga',
						'index_saran'
					],
					laporan: [
						'index_laporan_cu',
						'create_laporan_cu',
						'update_laporan_cu',
						'destroy_laporan_cu',
						'upload_laporan_cu',
						'diskusi_laporan_cu',

						'index_laporan_tp',
						'create_laporan_tp',
						'update_laporan_tp',
						'destroy_laporan_tp',
						'upload_laporan_tp',
						'diskusi_laporan_tp',
					],
					organisasiBKCU: [
						'index_tempat',
						'create_tempat',
						'update_tempat',
						'destroy_tempat',

						'index_anggota_cu',
						'create_anggota_cu',
						'update_anggota_cu',
						'destroy_anggota_cu',
						'upload_anggota_cu',

						'index_cu',
						'create_cu',
						'update_cu',
						'destroy_cu',

						'index_tp',
						'create_tp',
						'update_tp',
						'destroy_tp',

						'index_aktivis',
						'create_aktivis',
						'update_aktivis',
						'destroy_aktivis',

						'index_aset_tetap',
						'create_aset_tetap',
						'update_aset_tetap',
						'destroy_aset_tetap',

						'index_aset_tetap_jenis',
						'create_aset_tetap_jenis',
						'update_aset_tetap_jenis',
						'destroy_aset_tetap_jenis',

						'index_aset_tetap_lokasi',
						'create_aset_tetap_lokasi',
						'update_aset_tetap_lokasi',
						'destroy_aset_tetap_lokasi',

						'index_mitra_orang',
						'create_mitra_orang',
						'update_mitra_orang',
						'destroy_mitra_orang',

						'index_mitra_lembaga',
						'create_mitra_lembaga',
						'update_mitra_lembaga',
						'destroy_mitra_lembaga',

						'index_produk_cu',
						'create_produk_cu',
						'update_produk_cu',
						'destroy_produk_cu',
					],
					organisasiCU: [
						'index_anggota_cu',
						'create_anggota_cu',
						'update_anggota_cu',
						'destroy_anggota_cu',

						'index_cu',
						'update_cu',

						'index_tp',
						'create_tp',
						'update_tp',
						'destroy_tp',

						'index_anggota_cu',
						'create_anggota_cu',
						'update_anggota_cu',
						'destroy_anggota_cu',

						'index_aktivis',
						'create_aktivis',
						'update_aktivis',
						'destroy_aktivis',

						'index_produk_cu',
						'create_produk_cu',
						'update_produk_cu',
						'destroy_produk_cu',
					],
					kegiatanBKCU: [
						'index_diklat_bkcu',
						'create_diklat_bkcu',
						'update_diklat_bkcu',
						'destroy_diklat_bkcu',

						'index_tempat',
						'create_tempat',
						'update_tempat',
						'destroy_tempat',

						'index_cu',
						'index_tp',

						'index_aktivis',
						'create_aktivis',
						'update_aktivis',
						'destroy_aktivis',

						'index_mitra_orang',
						'create_mitra_orang',
						'update_mitra_orang',
						'destroy_mitra_orang',

						'index_mitra_lembaga',
						'create_mitra_lembaga',
						'update_mitra_lembaga',
						'destroy_mitra_lembaga',
					],
					kegiatanCU:[
						'index_diklat_bkcu',
					],
					publikasi: [
						'index_artikel',
						'create_artikel',
						'update_artikel',
						'destroy_artikel',
						'terbitkan_artikel',
						'utamakan_artikel',

						'index_artikel_penulis',
						'create_artikel_penulis',
						'update_artikel_penulis',
						'destroy_artikel_penulis',

						'index_artikel_kategori',
						'create_artikel_kategori',
						'update_artikel_kategori',
						'destroy_artikel_kategori',

						'index_pengumuman',
						'create_pengumuman',
						'update_pengumuman',
						'destroy_pengumuman',
					],
					jalinan:[
						'index_anggota_cu',
						'index_produk_cu',
						'index_jalinan_klaim',
						'create_jalinan_klaim',
						'update_jalinan_klaim',
						'destroy_jalinan_klaim',
						'laporan_jalinan_klaim',
					],
				}
			}
		},
		watch:{
			dataStat(value){
				if(value == 'success'){
					this.hakForm = this.form;
					this.checkPeran(this.hakForm);
				}
			}
		},
		methods: {
			emitData(value){
				this.$emit('hakForm',value);
				this.checkPeran(value);
			},
			checkChange(){
				this.emitData(this.hakForm);
			},
			changePeran(value){
				if(this.tipeUser == 'cu'){
					if(value == 'penuh'){
						this.hakForm = this.peran.penuhCU;
					}else if(value == 'organisasi'){
						this.hakForm = this.peran.organisasiCU;
					}else if(value == 'kegiatan'){
						this.hakForm = this.peran.kegiatanCU;
					}
				}else if(this.tipeUser == 'bkcu'){
					if(value == 'penuh'){
						this.hakForm = this.peran.penuhBKCU;
					}else if(value == 'organisasi'){
						this.hakForm = this.peran.organisasiBKCU;
					}else if(value == 'kegiatan'){
						this.hakForm = this.peran.kegiatanBKCU;
					}
				}

				if(value == 'monitoring'){
					this.hakForm = this.peran.monitoring;
				}else if(value == 'laporan'){
					this.hakForm = this.peran.laporan;
				}else if(value == 'publikasi'){
					this.hakForm = this.peran.publikasi;
				}else if(value == 'kosong'){
					this.hakForm = [];
				}

				this.emitData(this.hakForm);
			},
			checkPeran(value){
				if(this.tipeUser == 'cu'){
					if(_.isEqual(_.sortBy(this.hakForm), _.sortBy(this.peran.penuhCU))){
						this.selectPeran = 'penuh';
					}else if(_.isEqual(_.sortBy(this.hakForm), _.sortBy(this.peran.organisasiCU))){
						this.selectPeran = 'organisasi';
					}else if(_.isEqual(_.sortBy(this.hakForm), _.sortBy(this.peran.kegiatanCU))){
						this.selectPeran = 'kegiatan';
					}else if(_.isEqual(_.sortBy(this.hakForm), _.sortBy(this.peran.monitoring))){
						this.selectPeran = 'monitoring';
					}else if(_.isEqual(_.sortBy(this.hakForm), _.sortBy(this.peran.laporan))){
						this.selectPeran = 'laporan';
					}else if(_.isEqual(_.sortBy(this.hakForm), _.sortBy(this.peran.publikasi))){
						this.selectPeran = 'publikasi';
					}else  if(this.hakForm.length < 1){
						this.selectPeran = 'kosong';
					}else{
						this.selectPeran = 'custom';
					}
				}else if(this.tipeUser == 'bkcu'){
					if(_.isEqual(_.sortBy(this.hakForm), _.sortBy(this.peran.penuhBKCU))){
						this.selectPeran = 'penuh';
					}else if(_.isEqual(_.sortBy(this.hakForm), _.sortBy(this.peran.organisasiBKCU))){
						this.selectPeran = 'organisasi';
					}else if(_.isEqual(_.sortBy(this.hakForm), _.sortBy(this.peran.kegiatanBKCU))){
						this.selectPeran = 'kegiatan';
					}else if(_.isEqual(_.sortBy(this.hakForm), _.sortBy(this.peran.monitoring))){
					this.selectPeran = 'monitoring';
					}else if(_.isEqual(_.sortBy(this.hakForm), _.sortBy(this.peran.laporan))){
						this.selectPeran = 'laporan';
					}else if(_.isEqual(_.sortBy(this.hakForm), _.sortBy(this.peran.publikasi))){
						this.selectPeran = 'publikasi';
					}else  if(this.hakForm.length < 1){
						this.selectPeran = 'kosong';
					}else{
						this.selectPeran = 'custom';
					}
				}
			},
			checkGroup(value){
				for(var key in this.hakAkses){
					for(var key2 in this.hakAkses[key].permission){
						if(this.hakAkses[key].permission[key2].group == value){
							if(!_.includes(this.hakForm,this.hakAkses[key].permission[key2].key)){
								if(this.hakAkses[key].permission[key2].tipe == 'all'){
									this.hakForm.push(this.hakAkses[key].permission[key2].key);
								}else{
									if(this.hakAkses[key].permission[key2].tipe == this.tipeUser){
										this.hakForm.push(this.hakAkses[key].permission[key2].key);
									}
								}	
							}
						}
					}
				}
				this.emitData(this.hakForm);
			},
			unCheckGroup(value){
				for(var key in this.hakAkses){
					for(var key2 in this.hakAkses[key].permission){
						if(this.hakAkses[key].permission[key2].group == value){
							if(this.hakAkses[key].permission[key2].tipe == 'all'){
								this.hakForm.splice( this.hakForm.indexOf(this.hakAkses[key].permission[key2].key), 1 );
							}else{
								if(this.hakAkses[key].permission[key2].tipe == this.tipeUser){
									this.hakForm.splice( this.hakForm.indexOf(this.hakAkses[key].permission[key2].key), 1 );
								}
							}
						}
					}
				}
				this.emitData(this.hakForm);
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
		}
	}
</script>