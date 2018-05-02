<template>
	<div>

		<!-- cu desktop --> 
		<div class="panel panel-flat hidden-xs hidden-print " v-if="this.profile.id_cu === 0">
			<div class="panel-body">  
				<div class="row">
					<div class="col-sm-5">
						<div class="input-group" v-if="this.profile.id_cu === 0">
							<div class="input-group-addon">
								Pilih Data
							</div>

							<!-- select -->
							<select class="bootstrap-select" name="idCu" v-model="idCu" data-width="100%" @change="changeCu($event.target.value)"  :disabled="modelCUStat === 'loading'">
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
					<!-- semua cu -->
					<div :class="{'col-sm-5': profile.id_cu == 0, 'col-sm-12': profile.id_cu != 0}" v-if="idCu == 'semua'">
						<div class="input-group" v-if="this.profile.id_cu === 0">
							<div class="input-group-addon">
								Periode Laporan
							</div>

							<!-- select -->
							<select class="bootstrap-select" name="periode" v-model="periode" data-width="100%" 
							:disabled="modelPeriodeStat === 'loading'">
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
					<!-- tp cu -->
					<div class="col-sm-5" v-else>
						<div class="input-group">
							<div class="input-group-addon">
								TP/KP
							</div>

							<!-- select -->
							<select class="bootstrap-select" name="tp" v-model="idTp" data-width="100%" :disabled="modelTpStat === 'loading'" @change="changeTp($event.target.value)">
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
					<!-- find data button -->
					<div class="col-sm-2" v-if="this.profile.id_cu === 0">
						<button type="button" class="btn btn-default btn-icon btn-block" data-toggle="dropdown" v-tooltip:top="'Lakukan Pencarian'" @click.prevent="fetch()">
							<i class="icon-search4"></i>  Cari
						</button>
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
					<select class="form-control" name="idCu" v-model="idCu" data-width="100%" @change="changeCu($event.target.value)" :disabled="modelCUStat === 'loading'">
						<option disabled value="">Silahkan pilih dataaaa</option>
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
					<select class="form-control" name="periode" v-model="periode" data-width="100%" :disabled="modelPeriodeStat === 'loading'">
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
				idCu: '',
				idTp: '',
				periode: '',
			}
		},
		created(){
			if(this.profile.id_cu != undefined){
				this.checkProfileIdCU();
			}
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
		},
		mounted(){
			$('.bootstrap-select').selectpicker('refresh');
		},
		watch: {
			'$route' (to, from){
				// check current page meta
				this.checkProfileIdCU(); 
			},
			profileStat(value){
				if(value === "success"){
					this.checkProfileIdCU();
				}
			},
			modelCUStat(value){
				if(value === "success"){
					if(this.$route.meta.mode == 'cu'){			
						this.idCu = this.$route.params.cu;
						this.changeCu(this.idCu);
					}else{
						this.idCu = 'semua';
						this.changeCu(this.idCu);
					}
				}
			},
			modelTpStat(value){
				if(value === "success"){
					if(this.$route.meta.mode == 'cu'){
						this.idTp = this.$route.params.tp;
					}
				}
			},
			modelPeriodeStat(value){
				if(value === "success"){
					if(this.$route.meta.mode == 'periode'){
						this.periode = this.$route.params.periode;
					}else{
						this.periode = this.modelPeriode[0].periode;
					}
				}
			}
    },
		methods: {
			checkProfileIdCU(){
				if(this.profile.id_cu !== 0){
					this.idCu = this.profile.id_cu;
					this.fetchTp();
				}else{
					this.fetchCU();
				}
			},
			fetch(){
				if(this.idCu != 'semua'){
					this.$router.push({name: 'laporanCuCu', params:{cu: this.idCu, tp: this.idTp} });
				}else{
					this.$router.push({name: 'laporanCuPeriode', params:{periode: this.periode} });
				}
			},
			fetchCU(){
				this.$store.dispatch('cu/getPus', this.profile.id_pus);
			},
			fetchPeriode(){
				this.$store.dispatch('laporanCu/getPeriode');
			},
			fetchTp(){
				this.$store.dispatch('tp/getCu',this.idCu);
			},
			changeCu(value){
				if(value != 'semua'){
					this.fetchTp();
				}else{
					this.fetchPeriode();
				}
			},
			// cu route
			changeTp(value){
				if(this.profile.id_cu !== 0){
					this.$router.push({name: 'laporanCuTp', params:{tp: value} });
				}
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