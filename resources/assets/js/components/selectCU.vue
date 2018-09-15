<template>
	<div>

		<!-- cu desktop --> 
		<div class="panel panel-flat hidden-xs hidden-print ">
			<div class="panel-body">  
					<div class="input-group" v-if="this.profile.id_cu === 0">
						<div class="input-group-addon">
							Pilih Data
						</div>

						<!-- select -->
						<select class="bootstrap-select" name="idCu" v-model="idCu" data-width="100%" @change="changeCU($event.target.value)" :disabled="modelCUStat === 'loading'">
							<option disabled value="">Silahkan pilih data</option>
							<slot></slot>
							<option value="semua">Semua CU</option>
							<option value="0" v-if="isPus"><span v-if="profile.pus">{{profile.pus.name}}</span> <span v-else>Puskopdit</span></option>
							<option data-divider="true"></option>
							<option v-for="cu in modelCU" :value="cu.id" v-if="!isNo_ba && cu">{{cu.name}}</option>
							<option v-for="cu in modelCU" :value="cu.no_ba" v-if="isNo_ba && cu">{{cu.name}}</option>
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
		<div class="panel panel-flat visible-xs hidden-print">
			<div class="panel-body">  
				<!-- select -->
				<div class="input-group">
					<div class="input-group-addon">
						Pilih Data
					</div>
					<select class="form-control" name="idCu" v-model="idCu" data-width="100%" @change="changeCU($event.target.value)" :disabled="modelCUStat === 'loading'">
						<option disabled value="">Silahkan pilih data</option>
						<option value="semua">Semua CU</option>
						<option value="0" v-if="isPus"><span v-if="profile.pus">{{profile.pus.name}}</span> <span v-else>Puskopdit</span></option>
						<option data-divider="true"></option>
						<option v-for="cu in modelCU" :value="cu.id" v-if="!isNo_ba && cu">{{cu.name}}</option>
						<option v-for="cu in modelCU" :value="cu.no_ba" v-if="isNo_ba && cu">{{cu.name}}</option>
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
		props:['kelas','isPus','path','isNo_ba'],
		data(){
			return {
				idCu: ''
			}
		},
		created(){
			if(this.profile.id_pus !== undefined){
				this.fetchCU();
			}	
		},
		watch: {
			'$route' (to, from){
				// check current page meta
				this.fetchCU();
			},
			profileStat(value){
				if(value === "success"){
					this.fetchCU();
				}
			},
			modelCUStat(value){
				if(value === "success"){
					this.idCu = this.$route.params.cu;
				}
			},
    },
		methods: {
			fetchCU(){
				this.$store.dispatch('cu/getPus', this.profile.id_pus);
			},
			changeCU(id){
				this.$router.push({name: this.path, params:{cu: id} });
			}
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
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