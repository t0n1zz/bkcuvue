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
						<input type="checkbox" :value="permission.key" v-model="hakAksesModel">
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
			tipeUser: ''
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
								key: 'index artikel',
								icon: 'icon-eye',
								tipe: 'All'
							},
							{
								name: 'Tambah',
								key: 'create artikel',
								icon: 'icon-plus3',
								tipe: 'All'
							},
							{
								name: 'Ubah',
								key: 'update artikel',
								icon: 'icon-pencil',
								tipe: 'All'
							},
							{
								name: 'Hapus',
								key: 'destroy artikel',
								icon: 'icon-bin2',
								tipe: 'All'
							},
							{
								name: 'Terbitkan',
								key: 'terbitkan artikel',
								icon: 'icon-file-upload',
								tipe: 'BKCU'
							},
							{
								name: 'Utamakan',
								key: 'utamakan artikel',
								icon: 'icon-pushpin',
								tipe: 'BKCU'
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
								key: 'index user',
								icon: 'icon-eye',
								tipe: 'BKCU'
							},
							{
								name: 'Tambah',
								key: 'create user',
								icon: 'icon-plus3',
								tipe: 'BKCU'
							},
							{
								name: 'Ubah',
								key: 'update user',
								icon: 'icon-pencil',
								tipe: 'BKCU'
							},
							{
								name: 'Hapus',
								key: 'destroy user',
								icon: 'icon-bin2',
								tipe: 'BKCU'
							},
							{
								name: 'Reset Password',
								key: 'reset password',
								icon: 'icon-history',
								tipe: 'BKCU'
							},
							{
								name: 'Aktifkan',
								key: 'aktifkan user',
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