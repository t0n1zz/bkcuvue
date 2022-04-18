<template>
	<div>

		<!-- desktop --> 
		<div class="card d-none d-md-block d-print-none">
			<div class="card-body">

				<div class="row">
					<!-- tipe -->
					<div class="col-md-5">
						<!-- select -->
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text">Pilih Tipe</span>
							</div>
							<select class="form-control" name="tipe" v-model="tipe" data-width="100%" :disabled="modelTipeStat === 'loading'">
								<option disabled value="">Silahkan pilih tipe</option>
								<option value="semua">Semua</option>
								<option disabled value="">----------------</option>
								<option v-for="(tipe, index) in modelTipe" :value="tipe.id" :key="index">{{tipe.name}}</option>
							</select>

							<!-- reload -->
							<div class="input-group-append">
								<button class="btn btn-light" @click="fetchTipe" :disabled="modelTipeStat === 'loading'">
									<i class="icon-sync" :class="{'spinner' : modelTipeStat === 'loading'}"></i>
								</button>
							</div>
						</div>

					</div>

					<!-- periode -->
					<div class="col-md-5">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text">Pilih Periode</span>
							</div>
							<select class="form-control" name="periode" v-model="periode" data-width="100%" :disabled="modelDataStat === 'loading'">
								<option disabled value="">Silahkan pilih periode</option>
								<option value="semua">Semua</option>
								<option disabled value="">----------------</option>
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

					<!-- find data button -->
					<div class="col-sm-2" v-if="this.currentUser.id_cu == 0">
						<button type="button" class="btn btn-light btn-icon btn-block" @click.prevent="fetch()" v-if="modelDataStat != 'loading'">
							<i class="icon-folder-open3"></i>  Tampilkan
						</button>
						<button type="button" class="btn btn-light btn-icon btn-block" v-else>
							<i class="icon-sync spinner"></i>
						</button>
					</div>
				</div>

			</div>
		</div>		

		<!-- mobile -->
		<div class="card d-block d-md-none d-print-none">
			<div class="card-body"> 

				<!-- tipe -->
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text">Pilih Tipe</span>
					</div>
					<select class="form-control" name="tipe" v-model="tipe" data-width="100%" :disabled="modelTipeStat === 'loading'">
						<option disabled value="">Silahkan pilih tipe</option>
						<option value="semua">Semua</option>
						<option disabled value="">----------------</option>
						<option v-for="(tipe, index) in modelTipe" :value="tipe.id" :key="index">{{tipe.name}}</option>
					</select>
				</div>

				<!-- reload -->
				<div class="pt-2">
					<button class="btn btn-light btn-lg btn-block" @click="fetchTipe" :disabled="modelTipeStat === 'loading'">
						<i class="icon-sync" :class="{'spinner' : modelTipeStat === 'loading'}"></i>
					</button>
				</div>

				<!-- periode -->
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text">Pilih Data</span>
					</div>
					<select class="form-control" name="periode" v-model="periode" data-width="100%" :disabled="modelDataStat === 'loading'">
						<option disabled value="">Silahkan pilih periode</option>
						<option value="semua">Semua</option>
						<option disabled value="">----------------</option>
						<option v-for="(data, index) in modelData" :key="index" :value="data">{{data}}</option>
					</select>
				</div>

				<!-- reload  -->
				<div class="pt-2">
					<button class="btn btn-light btn-lg btn-block" @click="fetchData" :disabled="modelDataStat === 'loading'">
						<i class="icon-sync" :class="{'spinner' : modelDataStat === 'loading'}"></i> Reload
					</button>
				</div>

				<!-- find data button -->
				<div class="pt-2">
					<button type="button" class="btn btn-light btn-icon btn-block" @click.prevent="fetch()" v-if="modelDataStat != 'loading'">
						<i class="icon-folder-open3"></i> Tampilkan
					</button>
					<button type="button" class="btn btn-light btn-icon btn-block" v-else>
						<i class="icon-sync spinner"></i>
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
				tipe: '',
				periode: ''
			}
		},
		created(){
			this.fetchData();
			this.fetchTipe();
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
				this.$router.push({name: this.kelas + 'Cu', params:{cu:this.$route.params.cu, tipe: this.tipe, periode: this.periode} });
			},
			fetchData(){
				if(this.modelData.length == 0){
					this.$store.dispatch(this.kelas + '/getPeriode', this.$route.params.cu);
				}
				this.periode = this.$route.params.periode;
			},
			fetchTipe(){
				if(this.modelData.length == 0){
					this.$store.dispatch('suratKode/get');
				}
				this.tipe = this.$route.params.tipe;
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('surat',{
				modelData: 'periode',
				modelDataStat: 'periodeStat',
			}),
			...mapGetters('suratKode',{
				modelTipe: 'dataS',
				modelTipeStat: 'dataStatS',
			}),
		}
	}
</script>