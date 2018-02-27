<template>
	<div>
		<!-- hak akses -->
		<div class="well well-sm">
			<div class="row" v-for="akses in hakAkses">
				<!-- desktop -->
				<div class="col-sm-12 hidden-xs"><div class=" text-center text-size-large"><i :class="akses.icon"></i> {{ akses.name }}</div> <hr></div>
				<div class="col-sm-2 hidden-xs" v-for="tipe in akses.tipe">
					<label class="checkbox-inline">
						<input type="checkbox" :value="tipe.key" v-model="hakAksesModel"> 
						<i :class="tipe.icon"></i> &nbsp; {{ tipe.name }}
					</label>
				</div>
				<hr class="hidden-xs">
				<!-- mobile -->
				<div class="col-xs-12 visible-xs">
					<div class="text-center text-size-large"><i :class="akses.icon"></i> {{ akses.name }}</div>
					<hr>
					<div class="checkbox checkbox-right" v-for="tipe in akses.tipe">
						<label>
							<input type="checkbox" :value="tipe.key" v-model="hakAksesModel"> 
							<i :class="tipe.icon"></i> &nbsp; {{ tipe.name }}
						</label>
					</div> 
					<hr>
				</div>
			</div>
		</div>
		

	</div>
</template>

<script>
	export default {
		data() {
			return {
				hakAksesModel: {},
				hakAkses: [
				 	{
						name: 'Artikel',
						icon: 'icon-newspaper',
						secondRow: true,
						tipe:[
							{
								name: 'Lihat',
								key: 'index artikel',
								icon: 'icon-eye'
							},
							{
								name: 'Tambah',
								key: 'create artikel',
								icon: 'icon-plus3'
							},
							{
								name: 'Ubah',
								key: 'update artikel',
								icon: 'icon-pencil'
							},
							{
								name: 'Hapus',
								key: 'destroy artikel',
								icon: 'icon-bin2'
							},
							{
								name: 'Terbitkan',
								key: 'terbitkan artikel',
								icon: 'icon-file-upload'
							},
							{
								name: 'Utamakan',
								key: 'utamakan artikel',
								icon: 'icon-pushpin'
							}
						]
					}
				]
			}
		},
		updated(){
			$('.bootstrap-select').selectpicker('refresh');
		},
		created(){
		},
		watch:{
			permissionData(value){
				this.hakAksesModel = value;
			}
		},
		methods: {
		},
		computed: {
			permissionData(){
				return this.$store.getters.getRoleData;
			},
			permissionDataStat(){
				return this.$store.getters.getRoleDataLoadStat;
			}
		}
	}
</script>