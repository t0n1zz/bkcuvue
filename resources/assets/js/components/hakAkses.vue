<template>
<div>

	<div class="row" v-if="dataStat == 'success'">

		<div class="col-lg-12" v-if="isPeran">
			<div class="form-group">
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text">Pilih Peran</span>
					</div>
					<select name="peran" data-width="100%" class="form-control" @change="changePeran($event.target.value)" v-model="selectPeran">
						<option disabled value="" selected>Silahkan pilih peran user</option>
						<option value="penuh">Akses Penuh</option>
						<option value="monitoring">Monitoring</option>
						<option value="tataKelola">Tata Kelola</option>
						<option value="organisasi">Organisasi</option>
						<option value="kegiatan">Kegiatan</option>
						<option value="publikasi">Publikasi</option>
						<option value="kosong">kosong</option>
						<option value="custom">Custom</option>
					</select>
				</div>
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
					<span>{{ akses.keterangan }}</span>
					<hr class="mt-1" />
					<div class="row">
						<div class="col-sm-3 mb-2" v-for="permission in akses.permission" v-if="tipeUser == permission.tipe || permission.tipe == 'all' || permission.tipe == 'bkcu approve'">
							<div v-if="permission.tipe == 'bkcu approve'">
								<div class="form-check" v-if="currentUser.id_cu == 0">
									<label style="cursor:pointer;">
										<input type="checkbox" class="form-check-input" :value="permission.key" v-model="hakForm" v-if="permission.type != 'empty'" @change="checkChange($event.target.value)">
										<i :class="permission.icon"></i> &nbsp; {{ permission.name }}
									</label>
								</div>
								<div class="form-check" v-else>
									<label>
										<input type="checkbox" class="form-check-input" :value="permission.key" v-model="hakForm" v-if="permission.type != 'empty'" disabled>
										<i :class="permission.icon"></i> &nbsp; {{ permission.name }}
									</label>
								</div>
							</div>
							<div class="form-check" v-else>
								<label style="cursor:pointer;">
									<input type="checkbox" class="form-check-input" :value="permission.key" v-model="hakForm" v-if="permission.type != 'empty'" @change="checkChange($event.target.value)">
									<i :class="permission.icon"></i> &nbsp; {{ permission.name }}
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>

	</div>

	<div class="row" v-else-if="dataStat == 'loading'">
		<div class="col-12">
			<div class="card">
				<div class="card-body">
					<h4>Mohon tunggu...</h4>
					<div class="progress">
						<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="row" v-else>
		<div class="col-12">
			<div class="card">
				<div class="card-body">
					<h4>Oops terjadi kesalahan</h4>
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
		props: ['tipeUser','form','dataStat','isPeran'],
		data() {
			return {
				isCheckAll: false,
				hakForm: [],
				hakAkses: [
					{
						name: 'Artikel',
						keterangan: 'Mengelola data artikel yang akan muncul pada halaman website',
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
						keterangan: 'Mengelola data artikel yang muncul di dashboard SIMO',
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
						keterangan: 'Mengelola kategori pada artikel',
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
						keterangan: 'Mengelola data penulis untuk artikel',
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
						keterangan: 'Mengelola data pengumuman yang akan muncul di website',
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
						name: 'Diklat PUSKOPCUINA',
						keterangan: 'Mengelola data diklat yang diselenggarakan oleh PUSKOPCUINA',
						icon: 'icon-graduation2',
						secondRow: true,
						tipe: 'all',
						permission: [
							{
								name: 'Lihat',
								key: 'index_diklat_bkcu',
								icon: 'icon-eye',
								tipe: 'bkcu',
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
							},
							{
								name: 'Daftar',
								key: 'index_diklat_bkcu',
								icon: 'icon-plus3',
								tipe: 'cu',
								value: false,
								group: 'Diklat BKCU'
							},
						]
					},
					{
						name: 'Pertemuan PUSKOPCUINA',
						keterangan: 'Mengelola data pertemuan yang diselenggarakan oleh PUSKOPCUINA',
						icon: 'icon-ungroup',
						secondRow: true,
						tipe: 'all',
						permission: [
							{
								name: 'Lihat',
								key: 'index_pertemuan_bkcu',
								icon: 'icon-eye',
								tipe: 'bkcu',
								value: false,
								group: 'Pertemuan BKCU'
							},
							{
								name: 'Tambah',
								key: 'create_pertemuan_bkcu',
								icon: 'icon-plus3',
								tipe: 'bkcu',
								value: false,
								group: 'Pertemuan BKCU'
							},
							{
								name: 'Ubah',
								key: 'update_pertemuan_bkcu',
								icon: 'icon-pencil',
								tipe: 'bkcu',
								value: false,
								group: 'Pertemuan BKCU'
							},
							{
								name: 'Hapus',
								key: 'destroy_pertemuan_bkcu',
								icon: 'icon-bin2',
								tipe: 'bkcu',
								value: false,
								group: 'Pertemuan BKCU'
							},
							{
								name: 'Daftar',
								key: 'index_pertemuan_bkcu',
								icon: 'icon-plus3',
								tipe: 'cu',
								value: false,
								group: 'Pertemuan BKCU'
							},
						]
					},
					{
						name: 'Tempat',
						keterangan: 'Mengelola data tempat diklat dan pertemuan yang diselenggarakan oleh PUSKOPCUINA',
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
						name: 'Voting',
						keterangan: 'Mengelola data untuk melakukan voting',
						icon: 'icon-point-up',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_voting',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Voting'
							},
							{
								name: 'Tambah',
								key: 'create_voting',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Voting'
							},
							{
								name: 'Ubah',
								key: 'update_voting',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Voting'
							},
							{
								name: 'Hapus',
								key: 'destroy_voting',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Voting'
							}
						]
					},
					{
						name: 'Pemilihan',
						keterangan: 'Mengelola data untuk melakukan pemilihan',
						icon: 'icon-quill4',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_pemilihan',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Pemilihan'
							},
							{
								name: 'Tambah',
								key: 'create_pemilihan',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Pemilihan'
							},
							{
								name: 'Ubah',
								key: 'update_pemilihan',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Pemilihan'
							},
							{
								name: 'Hapus',
								key: 'destroy_pemilihan',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Pemilihan'
							}
						]
					},
					{
						name: 'Anggota CU',
						keterangan: 'Mengelola data anggota per-CU',
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
								tipe: 'all',
								value: false,
								group: 'Anggota CU'
							},
						]
					},
					{
						name: 'Bantuan Solidaritas Jalinan',
						keterangan: 'Mengelola data pengajuan bantuan solidaritas Jalinan dan mengatur tingkat aktivis yang melakukan verifikasi dimana 1 user hanya boleh memiliki 1 hak akses verifikasi',
						icon: 'icon-accessibility2',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_jalinan_klaim',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Bantuan Solidaritas Jalinan'
							},
							{
								name: 'Tambah',
								key: 'create_jalinan_klaim',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Bantuan Solidaritas Jalinan'
							},
							{
								name: 'Ubah',
								key: 'update_jalinan_klaim',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Bantuan Solidaritas Jalinan'
							},
							{
								name: 'Hapus',
								key: 'destroy_jalinan_klaim',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Bantuan Solidaritas Jalinan'
							},
							{
								name: 'Pencairan',
								key: 'pencairan_jalinan_klaim',
								icon: 'icon-square-down',
								tipe: 'bkcu',
								value: false,
								group: 'Bantuan Solidaritas Jalinan'
							},
							{
								name: 'Laporan',
								key: 'laporan_jalinan_klaim',
								icon: 'icon-archive',
								tipe: 'all',
								value: false,
								group: 'Bantuan Solidaritas Jalinan'
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
						name: 'Iuran Jalinan',
						keterangan: 'Mengelola data iuran Jalinan',
						icon: 'icon-clipboard6',
						secondRow: false,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_jalinan_iuran',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Iuran Jalinan'
							},
							{
								name: 'Tambah',
								key: 'create_jalinan_iuran',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Iuran Jalinan'
							},
							{
								name: 'Ubah',
								key: 'update_jalinan_iuran',
								icon: 'icon-pencil',
								tipe: 'bkcu',
								value: false,
								group: 'Iuran Jalinan'
							},
							{
								name: 'Hapus',
								key: 'destroy_jalinan_iuran',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Iuran Jalinan'
							},
						]
					},
					{
						name: 'CU',
						keterangan: 'Mengelola data profil CU yang juga akan muncul di website',
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
						keterangan: 'Mengelola data profil TP/KP dari CU yang akan muncul di website',
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
						keterangan: 'Mengelola data produk dan pelayanan CU yang akan muncul di website',
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
						keterangan: 'Mengelola data aktivis CU yang terdiri dari pengurus, pengawas, komite, penasihat, dan manajemen',
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
						name: 'Surat Keluar',
						keterangan: 'Mengelola data surat keluar',
						icon: 'icon-mailbox',
						secondRow: true,
						tipe: 'all',
						permission: [
							{
								name: 'Lihat',
								key: 'index_surat',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Surat Keluar'
							},
							{
								name: 'Tambah',
								key: 'create_surat',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Surat Keluar'
							},
							{
								name: 'Ubah',
								key: 'update_surat',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Surat Keluar'
							},
							{
								name: 'Hapus',
								key: 'destroy_surat',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Surat Keluar'
							},
						]
					},
					{
						name: 'Surat Masuk',
						keterangan: 'Mengelola data surat masuk',
						icon: 'icon-envelop2',
						secondRow: true,
						tipe: 'all',
						permission: [
							{
								name: 'Lihat',
								key: 'index_surat',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Surat Keluar'
							},
							{
								name: 'Tambah',
								key: 'create_surat_masuk',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Surat Masuk'
							},
							{
								name: 'Ubah',
								key: 'update_surat_masuk',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Surat Masuk'
							},
							{
								name: 'Hapus',
								key: 'destroy_surat_masuk',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Surat Masuk'
							},
						]
					},
					{
						name: 'Dokumen',
						keterangan: 'Mengelola data dokumen',
						icon: 'icon-books',
						secondRow: true,
						tipe: 'all',
						permission: [
							{
								name: 'Tambah',
								key: 'create_dokumen',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Dokumen'
							},
							{
								name: 'Ubah',
								key: 'update_dokumen',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Dokumen'
							},
							{
								name: 'Hapus',
								key: 'destroy_dokumen',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Dokumen'
							},
						]
					},
					{
						name: 'Kategori Dokumen',
						keterangan: 'Mengelola kategori pada dokumen',
						icon: 'icon-grid6',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_dokumen_kategori',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Kategori Dokumen'
							},
							{
								name: 'Tambah',
								key: 'create_dokumen_kategori',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Kategori Dokumen'
							},
							{
								name: 'Ubah',
								key: 'update_dokumen_kategori',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Kategori Dokumen'
							},
							{
								name: 'Hapus',
								key: 'destroy_dokumen_kategori',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Kategori Dokumen'
							}
						]
					},
					{
						name: 'Aset Tetap',
						keterangan: 'Mengelola data aset tetap pada lembaga',
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
						keterangan: 'Mengelola data jenis aset tetap',
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
						keterangan: 'Mengelola data lokasi aset tetap',
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
						keterangan: 'Mengelola data self assesment Access',
						icon: 'icon-reading',
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
						name: 'Monitoring',
						keterangan: 'Mengelola data monitoring CU',
						icon: 'icon-collaboration',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_monitoring',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'Monitoring'
							},
							{
								name: 'Tambah',
								key: 'create_monitoring',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
								group: 'Monitoring'
							},
							{
								name: 'Ubah',
								key: 'update_monitoring',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
								group: 'Monitoring'
							},
							{
								name: 'Hapus',
								key: 'destroy_monitoring',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
								group: 'Monitoring'
							}
						]
					},
					{
						name: 'Mitra Perseorangan',
						keterangan: 'Mengelola data mitra perseorangan yang dimiliki lembaga',
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
						keterangan: 'Mengelola data lembaga mitra yang dimiliki lembaga',
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
						keterangan: 'Mengelola data statistik laporan CU yang merupakan konsolidasi dari laporan TP/KP',
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
						keterangan: 'Mengelola data statistik laporan TP/KP',
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
						name: 'CoA',
						keterangan: 'Mengelola data charts of accounts',
						icon: 'icon-notebook',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_coa',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
								group: 'CoA'
							},
							{
								name: 'Tambah',
								key: 'create_coa',
								icon: 'icon-plus3',
								tipe: 'bkcu',
								value: false,
								group: 'CoA'
							},
							{
								name: 'Ubah',
								key: 'update_coa',
								icon: 'icon-pencil',
								tipe: 'bkcu',
								value: false,
								group: 'CoA'
							},
							{
								name: 'Hapus',
								key: 'destroy_coa',
								icon: 'icon-bin2',
								tipe: 'bkcu',
								value: false,
								group: 'CoA'
							}
						]
					},
					{
						name: 'User',
						keterangan: 'Mengelola data user pada SIMO',
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
					name: 'Presensi',
					keterangan: 'Mengelola data presensi pada SIMO',
					icon: 'icon-person',
					secondRow: true,
					tipe: 'bkcu',
					permission: [{
						name: 'Lihat QR',
						key: 'index_qr',
						icon: 'icon-eye',
						tipe: 'all',
						value: false,
						group: 'User'
					},
					{
						name: 'Tambah QR',
						key: 'create_qr',
						icon: 'icon-plus3',
						tipe: 'all',
						value: false,
						group: 'User'
					},
					{
						name: 'Ubah QR',
						key: 'update_qr',
						icon: 'icon-pencil',
						tipe: 'all',
						value: false,
						group: 'User'
					},
					{
						name: 'Hapus QR',
						key: 'destroy_qr',
						icon: 'icon-bin2',
						tipe: 'all',
						value: false,
						group: 'User'
						},
					{
						name: 'Personalia',
						key: 'personalia_akses',
						icon: 'icon-key',
						tipe: 'all',
						value: false,
						group: 'User'
					}
					]
				},
					{
						name: 'Saran',
						keterangan: 'Melihat saran yang diberikan user untuk SIMO',
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
						name: 'System Log',
						keterangan: 'Melihat log sistem',
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

						'index_jalinan_iuran',
						'create_jalinan_iuran',
						'update_jalinan_klaim',
						'destroy_jalinan_iuran',
						
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

						'index_surat',
						'create_surat',
						'update_surat',
						'destroy_surat',

						'index_surat_masuk',
						'create_surat_masuk',
						'update_surat_masuk',
						'destroy_surat_masuk',

						'index_dokumen',
						'create_dokumen',
						'update_dokumen',
						'destroy_dokumen',

						'index_dokumen_kategori',
						'create_dokumen_kategori',
						'update_dokumen_kategori',
						'destroy_dokumen_kategori',

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

						'index_monitoring',
						'create_monitoring',
						'update_monitoring',
						'destroy_monitoring',
						
						
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

						'index_pertemuan_bkcu',
						'create_pertemuan_bkcu',
						'update_pertemuan_bkcu',
						'destroy_pertemuan_bkcu',

						'index_tempat',
						'create_tempat',
						'update_tempat',
						'destroy_tempat',

						'index_pemilihan',
						'create_pemilihan',
						'update_pemilihan',
						'destroy_pemilihan',

						'index_voting',
						'create_voting',
						'update_voting',
						'destroy_voting',

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

						'index_coa',
						'create_coa',
						'update_coa',
						'destroy_coa',
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

						'index_pemilihan',
						'create_pemilihan',
						'update_pemilihan',
						'destroy_pemilihan',

						'index_voting',
						'create_voting',
						'update_voting',
						'destroy_voting',

						'index_saldo',
						'create_saldo',
						'update_saldo',
						'destroy_saldo',

						'index_jalinan_klaim',
						'create_jalinan_klaim',
						'update_jalinan_klaim',
						'destroy_jalinan_klaim',
						'laporan_jalinan_klaim',

						'index_jalinan_iuran',
						'create_jalinan_iuran',
						'destroy_jalinan_iuran',

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

						'index_surat',
						'create_surat',
						'update_surat',
						'destroy_surat',

						'index_surat_masuk',
						'create_surat_masuk',
						'update_surat_masuk',
						'destroy_surat_masuk',

						'index_dokumen',
						'create_dokumen',
						'update_dokumen',
						'destroy_dokumen',

						'index_dokumen_kategori',
						'create_dokumen_kategori',
						'update_dokumen_kategori',
						'destroy_dokumen_kategori',

						'index_assesment_access',
						'create_assesment_access',
						'update_assesment_access',
						'destroy_assesment_access',

						'index_monitoring',
						'create_monitoring',
						'update_monitoring',
						'destroy_monitoring',

						'index_produk_cu',
						'create_produk_cu',
						'update_produk_cu',
						'destroy_produk_cu',

						'index_diklat_bkcu',
						'index_pertemuan_bkcu',

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

						'index_coa',
					],
					monitoring: [
						'index_artikel',
						'index_user',
						'index_artikel_penulis',
						'index_artikel_kategori',
						'index_pengumuman',
						'index_pemilihan',
						'index_voting',
						'index_anggota_cu',
						'index_saldo',
						'index_jalinan_klaim',
						'laporan_jalinan_klaim',
						'index_jalinan_iuran',
						'index_cu',
						'index_tp',
						'index_aktivis',
						'index_surat',
						'index_surat_keluar',
						'index_dokumen',
						'index_dokumen_kategori',
						'index_produk_cu',
						'index_diklat_bkcu',
						'index_pertemuan_bkcu',
						'index_tempat',
						'index_laporan_cu',
						'diskusi_laporan_cu',
						'index_laporan_tp',
						'diskusi_laporan_tp',
						'index_assesment_access',
						'index_monitoring',
						'index_aset_tetap',
						'index_aset_tetap_jenis',
						'index_aset_tetap_lokasi',
						'index_mitra_orang',
						'index_mitra_lembaga',
						'index_saran',
						'index_coa',
					],
					tataKelola: [
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

						'index_assesment_access',
						'create_assesment_access',
						'update_assesment_access',
						'destroy_assesment_access',

						'index_monitoring',
						'create_monitoring',
						'update_monitoring',
						'destroy_monitoring',

						'index_coa',
						'index_pemilihan',
						'index_voting',
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

						'index_pemilihan',
						'create_pemilihan',
						'update_pemilihan',
						'destroy_pemilihan',

						'index_surat',
						'create_surat',
						'update_surat',
						'destroy_surat',

						'index_surat_masuk',
						'create_surat_masuk',
						'update_surat_masuk',
						'destroy_surat_masuk',

						'index_dokumen',
						'create_dokumen',
						'update_dokumen',
						'destroy_dokumen',

						'index_dokumen_kategori',
						'create_dokumen_kategori',
						'update_dokumen_kategori',
						'destroy_dokumen_kategori',

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

						'index_pemilihan',
						'create_pemilihan',
						'update_pemilihan',
						'destroy_pemilihan',

						'index_aktivis',
						'create_aktivis',
						'update_aktivis',
						'destroy_aktivis',

						'index_surat',
						'create_surat',
						'update_surat',
						'destroy_surat',

						'index_surat_masuk',
						'create_surat_masuk',
						'update_surat_masuk',
						'destroy_surat_masuk',

						'index_dokumen',
						'create_dokumen',
						'update_dokumen',
						'destroy_dokumen',

						'index_dokumen_kategori',
						'create_dokumen_kategori',
						'update_dokumen_kategori',
						'destroy_dokumen_kategori',

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

						'index_pertemuan_bkcu',
						'create_pertemuan_bkcu',
						'update_pertemuan_bkcu',
						'destroy_pertemuan_bkcu',

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

						'index_voting',
						'create_voting',
						'update_voting',
						'destroy_voting',

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
						'index_pertemuan_bkcu',

						'index_voting',
						'create_voting',
						'update_voting',
						'destroy_voting',
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
						'index_jalinan_iuran',
						'create_jalinan_iuran',
						'update_jalinan_iuran',
						'destroy_jalinan_iuran',
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
			checkChange(value){
				this.checkChangeJALINAN(value);
				this.emitData(this.hakForm);
			},
			checkChangeJALINAN(value){
				if(value == 'verifikasi_pengurus_jalinan_klaim'){
					this.hakForm = _.pull(this.hakForm, 'verifikasi_pengawas_jalinan_klaim','verifikasi_manajemen_jalinan_klaim');
				}else if(value == 'verifikasi_pengawas_jalinan_klaim'){
					this.hakForm = _.pull(this.hakForm, 'verifikasi_pengurus_jalinan_klaim','verifikasi_manajemen_jalinan_klaim');
				}else if(value == 'verifikasi_manajemen_jalinan_klaim'){
					this.hakForm = _.pull(this.hakForm, 'verifikasi_pengawas_jalinan_klaim','verifikasi_pengurus_jalinan_klaim');
				}
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
				}else if(value == 'tataKelola'){
					this.hakForm = this.peran.tataKelola;
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
					}else if(_.isEqual(_.sortBy(this.hakForm), _.sortBy(this.peran.tataKelola))){
						this.selectPeran = 'tataKelola';
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
					}else if(_.isEqual(_.sortBy(this.hakForm), _.sortBy(this.peran.tataKelola))){
						this.selectPeran = 'tataKelola';
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