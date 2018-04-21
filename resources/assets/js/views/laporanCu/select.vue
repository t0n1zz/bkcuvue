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
							<select class="bootstrap-select" name="tp" v-model="id_tp" data-width="100%" @change="changeTp($event.target.value)" :disabled="modelTpStat === 'loading'">
								<option disabled value="">Silahkan pilih TP/KP</option>
								<option value="semua">Konsolidasi</option>
								<option data-divider="true"></option>
								<option v-for="tp in modelTp" :value="tp.id" v-if="tp">{{tp.name}}</option>
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
				id_tp: '',
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
					this.fetchTp();
				}
			},
			idTp(value){
				this.id_tp = value;
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
			modelTpStat(value){
				if(value === "success"){
					this.id_tp = this.idTp;
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
			fetchTp(){
				this.$store.dispatch('tp/getCu',this.idCu);
			},
			changeCu(id){
				this.$router.push({name: 'laporanCuCu', params:{cu: id} });
			},
			changeTp(id){
				this.$router.push({name: 'laporanCuTp', params:{cu: this.id_cu, tp: id} });
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
				idTp: 'idTp',
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
			...mapGetters('tp',{
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
			}),
		}
	}
</script>