<template>
	<div>
		<!-- hak akses -->
		<div class="well well-sm">
			<div class="row" v-for="akses in hakAkses">

				<!-- desktop -->
				<!-- title -->
				<div class="col-sm-12 hidden-xs"><br></div>
				<div class="col-sm-12 hidden-xs" v-if="tipeUser === akses.tipe || akses.tipe ==='All'">
					<div class=" text-center text-size-large">
						<i :class="akses.icon"></i> {{ akses.name }}</div>
					<hr>
				</div>

				<!-- permission -->
				<div class="col-sm-2 hidden-xs" v-for="permission in akses.permission" v-if="tipeUser === permission.tipe || permission.tipe ==='All'">
					<label class="checkbox-inline">
						<input type="checkbox" :value="permission.key" v-model="form[permission.key]">
						<i :class="permission.icon"></i> &nbsp; {{ permission.name }}
					</label>
				</div>

				<div class="col-sm-12 hidden-xs"><br></div>

				<!-- mobile -->
				<div class="col-xs-12 visible-xs">

					<!-- title -->
					<div class="text-center text-size-large"  v-if="tipeUser === akses.tipe || akses.tipe ==='All'">
						<i :class="akses.icon"></i> {{ akses.name }}
					</div>
					<hr>

					<!-- permission -->
					<div class="checkbox checkbox-right" v-for="permission in akses.permission" v-if="tipeUser === permission.tipe || permission.tipe ==='All'">
						<label>
							<input type="checkbox" :value="permission.key" v-model="hakAksesModel">
							<i :class="permission.icon"></i> &nbsp; {{ permission.name }}
						</label>
					</div>
				</div>
			</div>
		</div>
		<br> 
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
						tipe: 'All',
						permission: [{
								name: 'Lihat',
								key: 'index_artikel',
								icon: 'icon-eye',
								tipe: 'All',
								value: false,
							},
							{
								name: 'Tambah',
								key: 'create_artikel',
								icon: 'icon-plus3',
								tipe: 'All',
								value: false,
							},
							{
								name: 'Ubah',
								key: 'update_artikel',
								icon: 'icon-pencil',
								tipe: 'All',
								value: false,
							},
							{
								name: 'Hapus',
								key: 'destroy_artikel',
								icon: 'icon-bin2',
								tipe: 'All',
								value: false,
							},
							{
								name: 'Terbitkan',
								key: 'terbitkan_artikel',
								icon: 'icon-file-upload',
								tipe: 'BKCU',
								value: false,
							},
							{
								name: 'Utamakan',
								key: 'utamakan_artikel',
								icon: 'icon-pushpin',
								tipe: 'BKCU',
								value: false,
							}
						]
					},
					{
						name: 'User',
						icon: 'icon-users4',
						secondRow: true,
						tipe: 'All',
						permission: [{
								name: 'Lihat',
								key: 'index_user',
								icon: 'icon-eye',
								tipe: 'BKCU'
							},
							{
								name: 'Tambah',
								key: 'create_user',
								icon: 'icon-plus3',
								tipe: 'BKCU'
							},
							{
								name: 'Ubah',
								key: 'update_user',
								icon: 'icon-pencil',
								tipe: 'BKCU'
							},
							{
								name: 'Hapus',
								key: 'destroy_user',
								icon: 'icon-bin2',
								tipe: 'BKCU'
							},
							{
								name: 'Reset Password',
								key: 'reset_password',
								icon: 'icon-history',
								tipe: 'BKCU'
							},
							{
								name: 'Aktifkan',
								key: 'aktifkan_user',
								icon: 'icon-pushpin',
								tipe: 'BKCU'
							}
						]
					}
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
			}
		}
	}
</script>