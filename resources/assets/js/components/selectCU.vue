<template>
	<div>

		<!-- cu desktop --> 
		<div class="card d-none d-md-block d-print-none">
			<div class="card-body">  
					<div class="input-group" v-if="this.currentUser.id_cu === 0">
						<div class="input-group-prepend">
							<span class="input-group-text">Pilih Data</span>
						</div>

						<!-- select -->
						<select class="form-control" name="idCu" v-model="idCu" data-width="100%" @change="changeCU($event.target.value)" :disabled="modelCuStat === 'loading'">
							<option disabled value="">Silahkan pilih data</option>
							<slot></slot>
							<option value="semua">Semua CU</option>
							<option value="0" v-if="isPus"><span v-if="currentUser.pus">{{currentUser.pus.name}}</span> <span v-else>Puskopdit</span></option>
							<option disabled value="">----------------</option>
							<option v-for="cu in modelCu" :value="cu.id" v-if="cu">{{cu.name}}</option>
						</select>

						<!-- reload cu -->
						<div class="input-group-append">
							<button class="btn btn-light" @click="fetchCU" :disabled="modelCuStat === 'loading'">
								<i class="icon-sync" :class="{'spinner' : modelCuStat === 'loading'}"></i>
							</button>
						</div>
					</div>
			</div>
		</div>		

		<!-- cu mobile -->
		<div class="card d-block d-md-none d-print-none">
			<div class="card-body">  
				<!-- select -->
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text">Pilih Data</span>
					</div>
					<select class="form-control" name="idCu" v-model="idCu" data-width="100%" @change="changeCU($event.target.value)" :disabled="modelCuStat === 'loading'">
						<option disabled value="">Silahkan pilih data</option>
						<option value="semua">Semua CU</option>
						<option value="0" v-if="isPus"><span v-if="currentUser.pus">{{currentUser.pus.name}}</span> <span v-else>Puskopdit</span></option>
						<option disabled value="">----------------</option>
						<option v-for="cu in modelCu" :value="cu.id" v-if="cu">{{cu.name}}</option>
					</select>
				</div>

				<!-- reload cu -->
				<div class="pt-2">
					<button class="btn btn-light btn-lg btn-block" @click="fetchCU" :disabled="modelCuStat === 'loading'">
						<i class="icon-sync" :class="{'spinner' : modelCuStat === 'loading'}"></i> Reload
					</button>
				</div> 
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		props:['kelas','isPus','path'],
		data(){
			return {
				idCu: ''
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
			modelCuStat(value){
				if(value === "success"){
					this.idCu = this.$route.params.cu;
				}
			},
    },
		methods: {
			fetchCU(){
				if(this.modelCu.length == 0){
					this.$store.dispatch('cu/getHeader', this.currentUser.id_pus);
				}else{
					this.idCu = this.$route.params.cu;
				}
			},
			changeCU(id){
				this.$router.push({name: this.path, params:{cu: id} });
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('cu',{
				modelCu: 'headerDataS',
				modelCuStat: 'headerDataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>