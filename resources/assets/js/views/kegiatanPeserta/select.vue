<template>
	<div>

		<!-- cu desktop --> 
		<div class="card d-none d-md-block d-print-none">
			<div class="card-body"> 
				<div class="row">

					<!-- cu -->
					<div class="col-sm-5">
						<div class="input-group" v-if="this.currentUser.id_cu === 0">
							<div class="input-group-prepend">
								<span class="input-group-text">Pilih Data</span>
							</div>

							<!-- select -->
							<select class="form-control" name="idCu" v-model="idCu" data-width="100%" :disabled="modelCUStat === 'loading'">
								<option disabled value="">Silahkan pilih data</option>
								<slot></slot>
								<option value="semua">Semua CU</option>
								<option value="0" v-if="isPus"><span v-if="currentUser.pus">{{currentUser.pus.name}}</span> <span v-else>PUSKOPCUINA</span></option>
								<option value="mitra" v-if="isPus">Mitra</option>
								<option disabled value="">----------------</option>
								<option v-for="cu in modelCU" :value="cu.id" v-if="cu">{{cu.name}}</option>
							</select>

							<!-- reload cu -->
							<div class="input-group-append">
								<button class="btn btn-light" @click="fetchCU" :disabled="modelCUStat === 'loading'">
									<i class="icon-sync" :class="{'spinner' : modelCUStat === 'loading'}"></i>
								</button>
							</div>
						</div>
					</div>

					<!-- tipe -->
					<div :class="{ 'col-sm-5' : currentUser.id_cu == 0, 'col-sm-12' : currentUser.id_cu != 0 }">
						<!-- select -->
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text">Pilih Tipe</span>
							</div>
							<select class="form-control" name="tipe" v-model="tipe" data-width="100%" @change="changeTingkat($event.target.value)" :disabled="modelCUStat === 'loading'">
								<option disabled value="">Silahkan pilih tipe</option>
								<option value="semua">Semua tipe</option>
								<option disabled value="">----------------</option>
								<option value="diklat_bkcu">Diklat PUSKOPCUINA</option>
								<option value="pertemuan_bkcu">Pertemuan PUSKOPCUINA</option>
								<option value="diklat_bkcu_internal" v-if="currentUser.id_cu == 0">Diklat Internal PUSKOPCUINA</option>
								<option value="pertemuan_bkcu_internal" v-if="currentUser.id_cu == 0">Pertemuan Internal PUSKOPCUINA</option>
							</select>
						</div>
 
					</div>

					<!-- find data button -->
					<div class="col-sm-2" v-if="this.currentUser.id_cu == 0">
						<button type="button" class="btn btn-light btn-icon btn-block" @click.prevent="fetch()" v-if="itemDataStat != 'loading'">
							<i class="icon-folder-open3"></i>  Tampilkan
						</button>
						<button type="button" class="btn btn-light btn-icon btn-block" v-else>
							<i class="icon-sync spinner"></i>
						</button>
					</div>

				</div> 
			</div>
		</div>		

		<!-- cu mobile -->
		<div class="card d-block d-md-none d-print-none">
			<div class="card-body">  

				<!-- cu -->
				<div v-if="this.currentUser.id_cu == 0">
					<!-- select -->
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">Pilih Data</span>
						</div>
						<select class="form-control" name="idCu" v-model="idCu" data-width="100%" :disabled="modelCUStat === 'loading'">
							<option disabled value="">Silahkan pilih data</option>
							<option value="semua">Semua CU</option>
							<option value="0" v-if="isPus"><span v-if="currentUser.pus">{{currentUser.pus.name}}</span> <span v-else>PUSKOPCUINA</span></option>
							<option value="mitra" v-if="isPus">Mitra</option>
							<option disabled value="">----------------</option>
							<option v-for="cu in modelCU" :value="cu.id" v-if="cu">{{cu.name}}</option>
						</select>
					</div>

					<!-- reload cu -->
					<div class="pt-2">
						<button class="btn btn-light btn-lg btn-block" @click="fetchCU" :disabled="modelCUStat === 'loading'">
							<i class="icon-sync" :class="{'spinner' : modelCUStat === 'loading'}"></i> Reload
						</button>
					</div> 
				</div>

				<!-- tipe -->
				<div class="input-group pt-2">
					<div class="input-group-prepend">
						<span class="input-group-text">Pilih Tipe</span>
					</div>
					<select class="form-control" name="tipe" v-model="tipe" data-width="100%" @change="changeTingkat($event.target.value)" :disabled="modelCUStat === 'loading'">
						<option disabled value="">Silahkan pilih tipe</option>
								<option value="semua">Semua tipe</option>
								<option disabled value="">----------------</option>
								<option value="diklat_bkcu">Diklat PUSKOPCUINA</option>
								<option value="pertemuan_bkcu">Pertemuan PUSKOPCUINA</option>
								<option value="diklat_bkcu_interlan" v-if="currentUser.id_cu == 0">Diklat Internal PUSKOPCUINA</option>
								<option value="pertemuan_bkcu_internal" v-if="currentUser.id_cu == 0">Pertemuan Internal PUSKOPCUINA</option>
					</select>
				</div>

				<!-- find data button -->
				<div class="pt-2" v-if="this.currentUser.id_cu == 0">
					<button type="button" class="btn btn-light btn-icon btn-block" @click.prevent="fetch()" v-if="itemDataStat != 'loading'">
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
		props:['kelas','isPus','path','itemDataStat'],
		data(){
			return {
				idCu: '',
				tipe: ''
			}
		},
		created(){
			if(this.currentUser.id_pus !== undefined){
				this.fetchCU();
			}	
		},
		watch: {
			'$route' (to, from){
				// check current page meta
				this.fetchCU();
			},
			modelCUStat(value){
				if(value === "success"){
					this.idCu = this.$route.params.cu;
					this.tipe = this.$route.params.tipe;
				}
			},
    },
		methods: {
			fetch(){
				this.$router.push({name: this.path, params:{cu: this.idCu, tipe: this.tipe} });
			},
			fetchCU(){
				if(this.modelCuStat != 'success'){
					this.$store.dispatch('cu/getHeader');
				}else{
					this.idCu = this.$route.params.cu;
					this.tipe = this.$route.params.tipe;
				}
			},
			changeTingkat(tipe){
				if(this.currentUser != 0){
					this.fetch();
				}
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>