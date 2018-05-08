<template>
	<div>

		<!-- cu desktop --> 
		<div class="panel panel-flat hidden-print " >
			<div class="panel-body">  
				<div class="row">
					<!-- cu -->
					<div class="col-sm-5" v-if="this.profile.id_cu === 0">
						<div class="input-group" v-if="this.profile.id_cu === 0">
							<div class="input-group-addon">
								Pilih Data
							</div>

							<!-- select -->
							<select class="bootstrap-select" name="idCu" v-model="idCu" data-width="100%" @change="changeCu($event.target.value)"  :disabled="modelCUStat === 'loading'">
								<option disabled value="">Silahkan pilih data</option>
								<slot></slot>
								<option value="semua">Semua CU</option>
								<option data-divider="true"></option>
								<option v-for="cu in modelCU" :value="cu.id" v-if="cu">{{cu.name}}</option>
							</select>

							<!-- reload -->
							<div class="input-group-btn">
								<button class="btn btn-default" v-tooltip:top="'Reload'" @click="fetchCU" :disabled="modelCUStat === 'loading'">
									<i class="icon-sync" :class="{'spinner' : modelCUStat === 'loading'}"></i>
								</button>
							</div>
						</div>
					</div>
					<!-- periode cu -->
					<div class="col-sm-5" v-if="idCu == 'semua'">
						<div class="input-group" v-if="this.profile.id_cu === 0">
							<div class="input-group-addon">
								Pilih Periode
							</div>

							<!-- select -->
							<select class="bootstrap-select" name="periode" v-model="periode" data-width="100%" 
							:disabled="modelPeriodeStat === 'loading'">
								<option disabled value="">Silahkan pilih periode laporan</option>
								<slot></slot>
								<option v-for="periode in modelPeriode" :value="periode.periode" v-if="periode">{{periode.periode | dateMonth}}</option>
							</select>

							<!-- reload -->
							<div class="input-group-btn">
								<button class="btn btn-default" v-tooltip:top="'Reload'" @click="fetchPeriode" :disabled="modelPeriodeStat === 'loading'">
									<i class="icon-sync" :class="{'spinner' : modelPeriodeStat === 'loading'}"></i>
								</button>
							</div>
						</div>
					</div>
					<!-- tp  -->
					<div :class="classTp()" v-else>
						<div class="input-group">
							<div class="input-group-addon">
								Pilih TP/KP
							</div>

							<!-- select -->
							<select class="bootstrap-select" name="tp" v-model="idTp" data-width="100%" :disabled="modelTpStat === 'loading'" @change="changeTp($event.target.value)">
								<option disabled value="">Silahkan pilih TP/KP</option>
								<option value="konsolidasi">Konsolidasi</option>
								<option value="semua">Semua Tp</option>
								<option data-divider="true"></option>
								<option v-for="tp in modelTp" :value="tp.id" v-if="tp">{{tp.name}}</option>
							</select>

							<!-- reload -->
							<div class="input-group-btn">
								<button class="btn btn-default" v-tooltip:top="'Reload'" @click="fetchPeriode" :disabled="modelPeriodeStat === 'loading'">
									<i class="icon-sync" :class="{'spinner' : modelCUStat === 'loading'}"></i>
								</button>
							</div>
						</div>
					</div>

					<!-- periode tp -->
					<div :class="[{'col-sm-10': profile.id_cu == 0 && idTp == 'semua',
					'col-sm-6': profile.id_cu != 0 && idTp == 'semua'},{'pt-10': profile.id_cu == 0}]" v-if="idTp == 'semua' && idCu != 'semua'">
						<div class="input-group">
							<div class="input-group-addon">
								Pilih Periode
							</div>

							<!-- select -->
							<select class="bootstrap-select" name="periodeTp" v-model="periodeTp" data-width="100%" @change="changeTpPeriode($event.target.value)"
							:disabled="modelPeriodeTpStat === 'loading'">
								<option disabled value="">Silahkan pilih periode laporan Tp</option>
								<slot></slot>
								<option v-for="periode in modelPeriodeTp" :value="periode.periode" v-if="periode">{{periode.periode | dateMonth}}</option>
							</select>

							<!-- reload -->
							<div class="input-group-btn">
								<button class="btn btn-default" v-tooltip:top="'Reload'" @click="fetchPeriodeTp" :disabled="modelPeriodeTpStat === 'loading'">
									<i class="icon-sync" :class="{'spinner' : modelPeriodeTpStat === 'loading'}"></i>
								</button>
							</div>
						</div>
					</div>

					<!-- find data button -->
					<div class="col-sm-2" :class="{'pt-10': idCu !='semua' && idTp == 'semua'}" v-if="this.profile.id_cu === 0">
						<button type="button" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Tampilkan data sesuai pilihan'" @click.prevent="fetch()" v-if="itemDataStat != 'loading'">
							<i class="icon-folder-open3"></i>  Tampilkan
						</button>
						<button type="button" class="btn btn-default btn-icon btn-block" v-else>
							<i class="icon-sync spinner"></i>
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
		props:['kelas','path'],
		data(){
			return {
				idCu: '',
				idTp: '',
				periode: '',
				periodeTp: ''
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
					if(this.$route.meta.mode == 'cu' || this.$route.meta.mode == 'cuPeriode'){			
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
					}else if(this.$route.meta.mode == 'cuPeriode'){
						this.idTp = 'semua';
						this.changeTp(this.idTp);
					}else{
						this.idTp = 'konsolidasi';
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
			},
			modelPeriodeTpStat(value){
				if(value === "success"){
					if(this.$route.meta.mode == 'cuPeriode'){
						this.periodeTp = this.$route.params.periode;
					}else{
						this.periodeTp = this.modelPeriodeTp[0].periode;
					}
					this.changeTpPeriode(this.periodeTp);
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
					if(this.idTp != 'semua'){
						this.$router.push({name: 'laporanCuCu', params:{cu: this.idCu, tp: this.idTp} });
					}else{
						this.$router.push({name: 'laporanCuCuPeriode', params:{cu: this.idCu, periode: this.periodeTp} });
					}
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
			fetchPeriodeTp(){
				this.$store.dispatch('laporanTp/getPeriode');
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
				this.idTp = '';
			},
			changeTp(value){
				if(this.profile.id_cu != 0){
					if(this.idTp != 'semua'){
						this.$router.push({name: 'laporanCuCu', params:{cu: this.profile.id_cu, tp: value} });
					}else{
						this.$store.dispatch('laporanTp/getPeriode');
					}
				}else{
					if(this.idTp == 'semua'){
						this.$store.dispatch('laporanTp/getPeriode');
					}
				}
			},
			changeTpPeriode(value){
				if(this.profile.id_cu != 0){
					this.$router.push({name: 'laporanCuCuPeriode', params:{cu: this.profile.id_cu, periode: value} });
				}
			},
			classTp(){
				let className = '';
				if(this.profile.id_cu == 0){
					className = 'col-sm-5';
				}else{
					if(this.idTp == 'semua'){
						className = 'col-sm-6';
					}else{
						className = 'col-sm-12';
					}
				}
				return className;
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
			...mapGetters('laporanTp',{
				modelPeriodeTp: 'periode',
				modelPeriodeTpStat: 'periodeStat',
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
			...mapGetters('laporanCu',{
				itemDataStat: 'dataStatS',
			}),
		}
	}
</script>