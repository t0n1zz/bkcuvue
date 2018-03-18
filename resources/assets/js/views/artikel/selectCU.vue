<template>
	<div>

		<!-- cu desktop --> 
		<div class="panel panel-flat hidden-xs hidden-print " v-if="this.userData.id_cu === 0">
			<div class="panel-body">  
					<div class="input-group" v-if="this.userData.id_cu === 0">
						<div class="input-group-addon">
							Pilih Data
						</div>

						<!-- select -->
						<select class="bootstrap-select" name="idCU" v-model="id_cu" data-width="100%" @change="changeCU($event.target.value)" :disabled="modelCUStat === 'loading'">
							<option disabled value="">Silahkan pilih data</option>
							<option value="semua">Semua</option>
							<option value="0"><span v-if="userData.pus">{{userData.pus.name}}</span> <span v-else>Puskopdit</span></option>
							<option data-divider="true"></option>
							<option v-for="cu in modelCU" :value="cu.id" v-if="cu">{{cu.name}}</option>
						</select>

						<!-- reload cu -->
						<div class="input-group-btn">
							<button class="btn btn-default" v-tooltip:top="'Reload'" @click="fetchCU" :disabled="modelCUStat === 'loading'">
								<i class="icon-sync" :class="{'spinner' : modelCUStat === 'loading'}"></i>
							</button>
						</div>
					</div>
			</div>
		</div>		

		<!-- cu mobile -->
		<div class="panel panel-flat visible-xs hidden-print" v-if="this.userData.id_cu === 0">
			<div class="panel-body">  
				<!-- select -->
				<div class="input-group">
					<div class="input-group-addon">
						Pilih Data
					</div>
					<select class="form-control" name="idCU" v-model="id_cu" data-width="100%" @change="changeCU($event.target.value)" :disabled="modelCUStat === 'loading'">
						<option disabled value="">Silahkan pilih data</option>
						<option value="semua">Semua</option>
						<option value="0"><span v-if="userData.pus">{{userData.pus.name}}</span> <span v-else>Puskopdit</span></option>
						<option data-divider="true"></option>
						<option v-for="cu in modelCU" :value="cu.id" v-if="cu">{{cu.name}}</option>
					</select>
				</div>

				<!-- reload cu -->
				<div class="pt-15">
					<button class="btn btn-default btn-lg btn-block" v-tooltip:top="'Reload'" @click="fetchCU" :disabled="modelCUStat === 'loading'">
						<i class="icon-sync" :class="{'spinner' : modelCUStat === 'loading'}"></i> Reload
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
				id_cu: ''
			}
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
		},
		created(){
			if(this.userData.id_pus !== undefined){
				this.fetchCU();
			}	

			// resetting idCU for table parameters
			this.$store.dispatch('global/resetIdCU');
		},
		watch: {
			idCU(value){
				if(this.idCUUpdate === ''){
					this.id_cu = value;
				}
			},
			// if come from edit route
			idCUUpdate(value){
				if(value !== ''){
					this.id_cu = value;
				}
			},
			userDataStat(value){
				if(value === "success" && this.userData.id_pus !== undefined){
					this.fetchCU();
				}
			},
			modelCUStat(value){
				if(value === "success"){
					if(this.idCUUpdate !== ''){// if come from edit route
						this.id_cu = this.idCUUpdate;
						this.changeCU(this.idCUUpdate);
					}else{
						this.id_cu = this.userData.id_cu;
						this.changeCU(this.userData.id_cu);
					}
				}
			},
    },
		methods: {
			fetchCU(){
				this.$store.dispatch('cu/getPus', this.userData.id_pus);
			},
			changeCU(id){
				this.$store.dispatch('global/changeIdCU', id);
			}
		},
		computed: {
			...mapGetters('user',{
				userData: 'data',
				userDataStat: 'dataStat'
			}),
			...mapGetters('global',{
				idCU: 'idCU',
				idCUUpdate: 'idCUUpdate'
			}),
			...mapGetters('cu',{
				modelCU: 'dataS',
				modelCUStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>