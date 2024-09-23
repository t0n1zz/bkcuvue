<template>
	<div>

		<!-- desktop --> 
		<div class="card d-none d-md-block d-print-none">
			<div class="card-body">

				<!-- periode -->
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text">Pilih Bulan</span>
					</div>
					<select class="form-control" name="bulan" v-model="bulan" data-width="100%" @change="changePeriode($event.target.value)" :disabled="modelDataStat === 'loading'">
						<option disabled value="">Silahkan pilih bulan</option>
						<option value="1">Januari</option>
						<option value="2">Februari</option>
						<option value="3">Maret</option>
						<option value="4">April</option>
						<option value="5">Mei</option>
						<option value="6">Juni</option>
						<option value="7">Juli</option>
						<option value="8">Agustus</option>
						<option value="9">September</option>
						<option value="10">Oktober</option>
						<option value="11">November</option>
						<option value="12">Desember</option>
					</select>
					
					<div class="input-group-prepend">
						<span class="input-group-text">Pilih Tahun</span>
					</div>
					<select class="form-control" name="periode" v-model="tahun" data-width="100%" @change="changePeriode($event.target.value)" :disabled="modelDataStat === 'loading'">
						<option disabled value="">Silahkan pilih tahun</option>
						<option v-for="(data, index) in modelData" :value="data" :key="index">{{data}}</option>
					</select>

					<!-- reload -->
					<div class="input-group-append">
						<button class="btn btn-light" @click="fetchData" :disabled="modelDataStat === 'loading'">
							<i class="icon-sync" :class="{'spinner' : modelDataStat === 'loading'}"></i>
						</button>
					</div>
				</div>
 
			</div>
		</div>		

		

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		props:['kelas','tipe'],
		data(){
			return {
				tahun: '',
				bulan:''
			}
		},
		created(){
			this.fetchData();
		},
		watch: {
			'$route' (to, from){
				// check current page meta
				this.fetchData();
			},
			modelDataStat(value){
				if(value === "success"){
					this.bulan = this.$route.params.bulan;
				    this.tahun = this.$route.params.tahun
				}
			},
    },
		methods: {
			fetch(){
				this.$router.push({name: 'monitoringKonsolidasi', params:{tahun: this.tahun, bulan: this.bulan} });
			},

			fetchData(){
				// if(this.modelData.length == 0){
					this.$store.dispatch(this.kelas + '/getPeriode', this.tipe);
				// }
				this.bulan = this.$route.params.bulan;
				this.tahun = this.$route.params.tahun
			},

			changePeriode(periode){
				this.fetch();
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),

			...mapGetters('monitoring',{
				modelData: 'periode',
				modelDataStat: 'periodeStat',
			}),
		}
	}
</script>