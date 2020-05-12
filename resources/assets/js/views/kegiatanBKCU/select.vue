<template>
	<div>

		<!-- desktop --> 
		<div class="card d-none d-md-block d-print-none">
			<div class="card-body">

				<!-- periode -->
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text">Pilih Periode</span>
					</div>
					<select class="form-control" name="periode" v-model="periode" data-width="100%" @change="changePeriode($event.target.value)" :disabled="modelDataStat === 'loading'">
						<option disabled value="">Silahkan pilih periode</option>
						<option value="semua">Semua</option>
						<option disabled value="">----------------</option>
						<option v-for="data in modelData" :value="data">{{data}}</option>
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

		<!-- mobile -->
		<div class="card d-block d-md-none d-print-none">
			<div class="card-body"> 

				<!-- periode -->
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text">Pilih Data</span>
					</div>
					<select class="form-control" name="periode" v-model="periode" data-width="100%" @change="changePeriode($event.target.value)"  :disabled="modelDataStat === 'loading'">
						<option disabled value="">Silahkan pilih periode</option>
						<option value="semua">Semua</option>
						<option disabled value="">----------------</option>
						<option v-for="data in modelData" :value="data">{{data}}</option>
					</select>
				</div>

				<!-- reload  -->
				<div class="pt-2">
					<button class="btn btn-light btn-lg btn-block" @click="fetchData" :disabled="modelDataStat === 'loading'">
						<i class="icon-sync" :class="{'spinner' : modelDataStat === 'loading'}"></i> Reload
					</button>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		props:['kelas'],
		data(){
			return {
				periode: ''
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
					this.periode = this.$route.params.periode;
				}
			},
    },
		methods: {
			fetch(){
				this.$router.push({name: this.kelas, params:{periode: this.periode} });
			},
			fetchData(){
				if(this.modelData.length == 0){
					this.$store.dispatch(this.kelas + '/getPeriode', this.$route.params.tipe);
				}
				this.periode = this.$route.params.periode;
			},
			changePeriode(periode){
				this.fetch();
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('kegiatanBKCU',{
				modelData: 'periode',
				modelDataStat: 'periodeStat',
			}),
		}
	}
</script>