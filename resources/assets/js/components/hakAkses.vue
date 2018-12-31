<template>
<div>
	<div class="row">
		<!-- hak akses -->
		<div class="col-md-12 col-lg-6" v-for="akses in hakAkses">
			
			<div class="card">
				<div class="card-header bg-white header-elements-inline">
					<h6 class="card-title">
						<i :class="akses.icon" class="mr-1"></i> {{ akses.name }}
					</h6>
					<!-- <div class="header-elements">
						<div class="list-icons">
							<a href="#" class="list-icons-item" @click.prevent="checkGroup(akses.name)">
								<i class="icon-checkbox-checked2"></i>
							</a>
							<a href="#" class="list-icons-item" @click.prevent="unCheckGroup(akses.name)">
								<i class="icon-checkbox-unchecked2"></i>
							</a>
						</div>
					</div> -->
				</div>

				<div class="card-body">
					<div class="row">
						<div class="col-sm-3 mb-2" v-for="permission in akses.permission" v-if="tipeUser === permission.tipe || permission.tipe ==='all'">
							<div class="form-check">
								<label style="cursor:pointer;">
									<input type="checkbox" class="form-check-input" :value="permission.key" v-model="form[permission.key]" v-if="permission.type != 'empty'">
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
	export default {
		props: {
			tipeUser: '',
			form: {},
		},
		data() {
			return {
				hakAksesModel: {},
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
							},
							{
								name: 'Tambah',
								key: 'create_artikel_kategori',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Ubah',
								key: 'update_artikel_kategori',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Hapus',
								key: 'destroy_artikel_kategori',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
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
							},
							{
								name: 'Tambah',
								key: 'create_artikel_penulis',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Ubah',
								key: 'update_artikel_penulis',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Hapus',
								key: 'destroy_artikel_penulis',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
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
							},
							{
								name: 'Tambah',
								key: 'create_pengumuman',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Ubah',
								key: 'update_pengumuman',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Hapus',
								key: 'destroy_pengumuman',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
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
							},
							{
								name: 'Tambah',
								key: 'create_diklat_bkcu',
								icon: 'icon-plus3',
								tipe: 'bkcu',
								value: false,
							},
							{
								name: 'Ubah',
								key: 'update_diklat_bkcu',
								icon: 'icon-pencil',
								tipe: 'bkcu',
								value: false,
							},
							{
								name: 'Hapus',
								key: 'destroy_diklat_bkcu',
								icon: 'icon-bin2',
								tipe: 'bkcu',
								value: false,
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
							},
							{
								name: 'Tambah',
								key: 'create_tempat',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Ubah',
								key: 'update_tempat',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Hapus',
								key: 'destroy_tempat',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
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
							},
							{
								name: 'Tambah',
								key: 'create_cu',
								icon: 'icon-plus3',
								tipe: 'bkcu',
								value: false,
							},
							{
								name: 'Ubah',
								key: 'update_cu',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Hapus',
								key: 'destroy_cu',
								icon: 'icon-bin2',
								tipe: 'bkcu',
								value: false,
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
							},
							{
								name: 'Tambah',
								key: 'create_tp',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Ubah',
								key: 'update_tp',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Hapus',
								key: 'destroy_tp',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
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
							},
							{
								name: 'Tambah',
								key: 'create_produk_cu',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Ubah',
								key: 'update_produk_cu',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Hapus',
								key: 'destroy_produk_cu',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
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
							},
							{
								name: 'Tambah',
								key: 'create_aktivis',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Ubah',
								key: 'update_aktivis',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Hapus',
								key: 'destroy_aktivis',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
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
							},
							{
								name: 'Tambah',
								key: 'create_laporan_cu',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Ubah',
								key: 'update_laporan_cu',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Hapus',
								key: 'destroy_laporan_cu',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Diskusi',
								key: 'diskusi_laporan_cu',
								icon: 'icon-bubble7',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Upload',
								key: 'upload_laporan_cu',
								icon: 'icon-file-upload',
								tipe: 'all',
								value: false,
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
							},
							{
								name: 'Tambah',
								key: 'create_laporan_tp',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Ubah',
								key: 'update_laporan_tp',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Hapus',
								key: 'destroy_laporan_tp',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Diskusi',
								key: 'diskusi_laporan_tp',
								icon: 'icon-bubble7',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Upload',
								key: 'upload_laporan_tp',
								icon: 'icon-file-upload',
								tipe: 'all',
								value: false,
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
							},
							{
								name: 'Tambah',
								key: 'create_user',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Ubah',
								key: 'update_user',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Hapus',
								key: 'destroy_user',
								icon: 'icon-bin2',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Reset Password',
								key: 'reset_password',
								icon: 'icon-history',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Status',
								key: 'status_user',
								icon: 'icon-pushpin',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Hak Akses',
								key: 'hak_akses_user',
								icon: 'icon-key',
								tipe: 'all',
								value: false,
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
							},
							{
								name: 'Hapus',
								key: 'destroy_saran',
								icon: 'icon-bin2',
								tipe: 'bkcu',
								value: false,
							},
						]
					},
				]
			}
		},
		created() {

		},
		watch: {
			permissionData(value) {
				this.hakAksesModel = value;
			}
		},
		methods: {
			checkGroup(value){
				console.log(value);
				for(var key in this.hakAkses){
					for(var key2 in this.hakAkses[key].permission){
						if(this.hakAkses[key].permission[key2].group == value){
							this.hakAkses[key].permission[key2].value = true;
							this.form[this.hakAkses[key].permission[key2].key] = true;
						}
					}
				}
			},
			unCheckGroup(value){
				for(var key in this.hakAkses){
					for(var key2 in key.permission){
						if(key2.group == value){
							key2.value = false;
						}
					}
				}
			}
		},
		computed: {
			permissionData() {
				return this.$store.getters.getRoleData;
			},
			permissionDataStat() {
				return this.$store.getters.getRoleDataLoadStat;
			},
			groupedHakAkses(){
				return _.chunk(this.hakAkses,4);
			}
		}
	}
</script>