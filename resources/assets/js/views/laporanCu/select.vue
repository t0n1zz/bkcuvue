<template>
	<div>

		<!-- cu desktop --> 
		<div class="panel panel-flat hidden-xs hidden-print " v-if="this.profile.id_cu === 0">
			<div class="panel-body">  
				<div class="row">
					<div class="col-sm-6">
						<div class="input-group" v-if="this.profile.id_cu === 0">
							<div class="input-group-addon">
								Pilih Data
							</div>

							<!-- select -->
							<select class="bootstrap-select" name="idCu" v-model="id_cu" data-width="100%" @change="changeCu($event.target.value)" :disabled="modelCUStat === 'loading'">
								<option disabled value="">Silahkan pilih data</option>
								<slot></slot>
								<option value="semua">Semua</option>
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
					<div class="col-sm-6" v-if="idCu == 'semua'">
						<div class="input-group" v-if="this.profile.id_cu === 0">
							<div class="input-group-addon">
								Periode Laporan
							</div>

							<!-- select -->
							<select class="bootstrap-select" name="periode" v-model="selectData" data-width="100%" @change="changePeriode($event.target.value)" :disabled="modelPeriodeStat === 'loading'">
								<option disabled value="">Silahkan pilih periode laporan</option>
								<slot></slot>
								<option v-for="periode in modelPeriode" :value="periode.periode" v-if="periode">{{periode.periode | dateMonth}}</option>
							</select>

							<!-- reload cu -->
							<div class="input-group-btn">
								<button class="btn btn-default" v-tooltip:top="'Reload'" @click="fetchPeriode" :disabled="modelPeriodeStat === 'loading'">
									<i class="icon-sync" :class="{'spinner' : modelCUStat === 'loading'}"></i>
								</button>
							</div>
						</div>
					</div>
					<div class="col-sm-6" v-else>
						<div class="input-group">
							<div class="input-group-addon">
								TP/KP
							</div>

							<!-- select -->
							<select class="bootstrap-select" name="tpCu" v-model="id_tp_cu" data-width="100%" @change="changeTpCu($event.target.value)" :disabled="modelTpCuStat === 'loading'">
								<option disabled value="">Silahkan pilih TP/KP</option>
								<option value="semua">Konsolidasi</option>
								<option data-divider="true"></option>
								<option v-for="tpcu in modelTpCu" :value="tpcu.id" v-if="tpcu">{{tpcu.name}}</option>
							</select>

							<!-- reload cu -->
							<div class="input-group-btn">
								<button class="btn btn-default" v-tooltip:top="'Reload'" @click="fetchPeriode" :disabled="modelPeriodeStat === 'loading'">
									<i class="icon-sync" :class="{'spinner' : modelCUStat === 'loading'}"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
					
			</div>
		</div>		

		<!-- cu mobile -->
		<div class="panel panel-flat visible-xs hidden-print" v-if="this.profile.id_cu === 0">
			<div class="panel-body">  
				<!-- select -->
				<div class="input-group">
					<div class="input-group-addon">
						Pilih Data
					</div>
					<select class="form-control" name="idCu" v-model="id_cu" data-width="100%" @change="changeCu($event.target.value)" :disabled="modelCUStat === 'loading'">
						<option disabled value="">Silahkan pilih data</option>
						<option value="semua">Semua</option>
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

				<hr v-if="idCu == 'semua'">

				<!-- periode -->
				<div class="input-group" v-if="this.profile.id_cu === 0 && idCu == 'semua'">
					<div class="input-group-addon">
						Periode Laporan
					</div>

					<!-- select -->
					<select class="form-control" name="periode" v-model="selectData" data-width="100%" @change="changePeriode($event.target.value)" :disabled="modelPeriodeStat === 'loading'">
						<option disabled value="">Silahkan pilih periode laporan</option>
						<slot></slot>
						<option v-for="periode in modelPeriode" :value="periode.periode" v-if="periode">{{periode.periode | dateMonth}}</option>
					</select>
					
					</div>

					<!-- reload periode -->
				<div class="pt-15" v-if="idCu == 'semua'">
					<button class="btn btn-default btn-lg btn-block" @click="fetchPeriode" :disabled="modelPeriodeStat === 'loading'">
						<i class="icon-sync" :class="{'spinner' : modelPeriodeStat === 'loading'}"></i> Reload
					</button>
				</div> 

			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		props:['kelas','path'],
		data(){
			return {
				id_cu: '',
				id_tp_cu: '',
				selectData: '',
			}
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
		},
		created(){
			if(this.profile.id_pus !== undefined){
				this.fetchCU(); 
			}	
			if(this.globalData !== undefined){
				this.selectData = this.globalData;
			}
		},
		watch: {
			idCu(value){
				this.id_cu = value;
				if(value != 'semua'){
					this.fetchTpCu();
				}
			},
			idTpCu(value){
				this.id_tp_cu = value;
			},
			globalData(value){
				this.selectData = value;
			},
			profileStat(value){
				if(value === "success"){
					this.fetchCU();
				}
			},
			modelCUStat(value){
				if(value === "success"){
					this.id_cu = this.idCu;
				}
			},
			modelTpCuStat(value){
				if(value === "success"){
					this.id_tp_cu = this.idTpCu;
				}
			},
    },
		methods: {
			fetchCU(){
				this.$store.dispatch('cu/getPus', this.profile.id_pus);
			},
			fetchPeriode(){
				this.$store.dispatch('laporanCu/getPeriode');
			},
			fetchTpCu(){
				this.$store.dispatch('tpCu/getCu',this.idCu);
			},
			changeCu(id){
				this.$router.push({name: 'laporanCuCu', params:{cu: id} });
			},
			changeTpCu(id){
				this.$router.push({name: 'laporanCuTpCu', params:{cu: this.id_cu, tpcu: id} });
			},
			changePeriode(periode){
				this.$router.push({name: 'laporanCuPeriode', params:{periode: periode} });
			},
			checkClass(value){
				return {
					'col-sm-12': value != 'semua',
					'col-sm-6': value == 'semua'
				};
			}
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('global',{
				idCu: 'idCu',
				idTpCu: 'idTpCu',
				globalData: 'data'
			}),
			...mapGetters('laporanCu',{
				modelPeriode: 'periode',
				modelPeriodeStat: 'periodeStat',
			}),
			...mapGetters('cu',{
				modelCU: 'dataS',
				modelCUStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('tpCu',{
				modelTpCu: 'dataS',
				modelTpCuStat: 'dataStatS',
			}),
		}
	}
</script>