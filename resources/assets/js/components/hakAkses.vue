<template>
<div>
	<div class="row" v-for="groupHakAkses in groupedHakAkses">
		<!-- hak akses -->
		<div class="col-md-3" v-for="akses in groupHakAkses">
			
			<div class="panel panel-default">
				<div class="panel-heading">
					<h6 class="panel-title"><i :class="akses.icon"></i> {{ akses.name }}
					</h6>
				</div>
				<div class="panel-body">

					<div class="checkbox checkbox-right" v-for="permission in akses.permission" v-if="tipeUser === permission.tipe || permission.tipe ==='all'">
						<label>
							<input type="checkbox" :value="permission.key" v-model="form[permission.key]" v-if="permission.type != 'empty'">
							<i :class="permission.icon"></i> &nbsp; {{ permission.name }}
						</label>
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
			isDisabled: false,
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
								tipe: 'all',
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
								tipe: 'all',
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
						name: 'Pengelola',
						icon: 'icon-user-tie',
						secondRow: true,
						tipe: 'all',
						permission: [{
								name: 'Lihat',
								key: 'index_pengelola',
								icon: 'icon-eye',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Tambah',
								key: 'create_pengelola',
								icon: 'icon-plus3',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Ubah',
								key: 'update_pengelola',
								icon: 'icon-pencil',
								tipe: 'all',
								value: false,
							},
							{
								name: 'Hapus',
								key: 'destroy_pengelola',
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
							}
						]
					},
					{
						name: 'User',
						icon: 'icon-users4',
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
					
				]
			}
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
		},
		created() {},
		watch: {
			permissionData(value) {
				this.hakAksesModel = value;
			}
		},
		methods: {},
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