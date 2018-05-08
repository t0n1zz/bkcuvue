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

					<!-- periode -->
					<div class="col-sm-5">
						<div class="input-group">
							<div class="input-group-addon">
								Pilih Periode
							</div>

							<!-- select -->
							<select class="bootstrap-select" name="periode" v-model="periode" data-width="100%" @change="changePeriode($event.target.value)"
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
					<div :class="{'col-sm-5': this.profile.id_cu != 0, 'col-sm-10 pt-10' : this.profile.id_cu == 0}">
						<div class="input-group">
							<div class="input-group-addon">
								Pilih TP/KP
							</div>

							<!-- select -->
							<select class="bootstrap-select" name="idTp" v-model="idTp" data-width="100%" :disabled="modelTpStat === 'loading'" @change="changeTp($event.target.value)">
								<option disabled value="">Silahkan pilih TP/KP</option>
								<option value="konsolidasi">Konsolidasi</option>
								<option data-divider="true" v-if="modelTp.length != 0"></option>
								<option v-for="tp in modelTp" :value="tp.id" v-if="tp">{{tp.tp.name}}</option>
							</select>

							<!-- reload -->
							<div class="input-group-btn">
								<button class="btn btn-default" v-tooltip:top="'Reload'" @click="fetchPeriode" :disabled="modelPeriodeStat === 'loading'">
									<i class="icon-sync" :class="{'spinner' : modelCUStat === 'loading'}"></i>
								</button>
							</div>
						</div>
					</div>

					<!-- find data button -->
					<div class="col-sm-2" :class="{'pt-10': this.profile.id_cu == 0}">
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
				// this.checkProfileIdCU();
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
				if(this.profileStat === "success"){
					this.fetchCU();
				}
			},
			profileStat(value){
				if(value === "success"){
					this.fetchCU();
				}
			},
			itemDataStat(value){
				if(value === "success"){
					if(this.profile.id_cu == 0){
						if(this.profileStat === "success"){
							this.fetchCU();
						}
					}
				}
			},
			modelCUStat(value){
				if(value === "success"){
					if(this.$route.meta.mode == 'detail'){
							this.idCu = this.itemData.id_cu;
					}else{
						this.idCu = this.itemData.tp.id_cu;
					}
					this.changeCu(this.idCu);
				}
			},
			modelTpStat(value){
				if(value === "success"){
					if(this.$route.meta.mode == 'detail'){
						this.idTp = 'konsolidasi';
					}else{
						this.idTp = this.itemData.id_tp;
					}
				}
			},
			modelPeriodeStat(value){
				if(value === "success"){
					this.periode = this.itemData.periode;
					this.changePeriode(this.periode);
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
			fetchPeriode(id){
				this.$store.dispatch('laporanCu/getPeriodeCu',id);
			},
			fetchTp(id, periode){
				this.$store.dispatch('laporanTp/getPeriodeTp',[id,periode]);
			},
			changeCu(value){
				this.fetchPeriode(value);
			},
			changePeriode(value){
				this.fetchTp(this.idCu, value);
			}
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('laporanCu',{
				itemData: 'data',
				itemDataStat: 'dataStat',
				modelPeriode: 'periode',
				modelPeriodeStat: 'periodeStat',
			}),
			...mapGetters('laporanTp',{
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
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