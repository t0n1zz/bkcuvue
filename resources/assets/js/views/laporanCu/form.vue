<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" @level2Back="back()"></page-header>
		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<div class="card" v-if="$route.meta.mode == 'editTp'">
						<div class="card-body"> 
							<div class="alert bg-info alert-styled-left">
								<p>Laporan ini merupakan bagian dari laporan konsolidasi, maka anda dapat melihat/mengubah laporan TP lain yang juga termasuk dalam laporan konsolidasi pada CU ini sesuai periode laporannya.</p>
							</div> 
							<div class="input-group">
								<div class="input-group-prepend">
									<span class="input-group-text">Pilih Laporan</span>
								</div>

								<!-- select -->
								<select class="form-control" name="idLaporanTp" v-model="idLaporanTp" data-width="100%" @change="changeLaporanTp($event.target.value)" :disabled="listLaporanTpDataStat === 'loading'">
									<option disabled value="">
										<span v-if="listLaporanTpDataStat === 'loading'">Mohon tunggu...</span>
										<span v-else>Silahkan pilih laporan</span>
									</option>
									<option v-for="(tp, index) in listLaporanTpData" :value="tp.id" :key="index">{{tp.tp.name}}</option>
								</select>
							</div>
						</div>
					</div>

					<!-- main form -->
					<div class="card">
						<div class="card-body">
							<div class="row">

								<!-- CU -->
								<div class="col-md-4" v-if="currentUser.id_cu === 0">
									<div class="form-group" :class="{'has-error' : errors.has('form.id_cu')}">

										<!-- title -->
										<h5 :class="{ 'text-danger' : errors.has('form.id_cu')}">
											<i class="icon-cross2" v-if="errors.has('form.id_cu')"></i>
											CU: <wajib-badge></wajib-badge>
										</h5>

										<!-- select -->
										<select class="form-control" name="id_cu" v-model="form.id_cu" data-width="100%" @change="changeCu($event.target.value)" v-validate="'required'" data-vv-as="CU" :disabled="modelCU.length === 0">
											<option disabled value="0">Silahkan pilih CU</option>
											<option v-for="(cu, index) in modelCU" :value="cu.id" :key="index">{{cu.name}}</option>
										</select>

										<!-- error message -->
										<small class="text-muted text-danger" v-if="errors.has('form.id_cu')">
											<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_cu') }}
										</small>
										<small class="text-muted" v-else>&nbsp;</small>
									</div>
								</div>

								<!-- tp -->
								<div class="col-md-4">
									<div class="form-group" :class="{'has-error' : errors.has('form.id_tp')}">

										<!-- title -->
										<h5 :class="{ 'text-danger' : errors.has('form.id_tp')}">
											<i class="icon-cross2" v-if="errors.has('form.id_tp')"></i>
											TP: <wajib-badge></wajib-badge>
										</h5>

										<!-- select -->
									<select class="form-control" name="id_tp" v-model="form.id_tp" data-width="100%" v-validate="'required'" data-vv-as="TP" @change="changeTp($event.target.value)" :disabled="!isModelTp">
										<option disabled value="">
											<span v-if="modelTpStat === 'loading'">Mohon tunggu...</span>
											<span v-else>Silahkan pilih TP/KP</span>
										</option>
										<option value="konsolidasi" v-if="$route.meta.mode != 'editTp'">Konsolidasi</option>
										<option disabled value="">----------------</option>
										<option v-for="(tp, index) in modelTp" :value="tp.id" :key="index">{{tp.name}}</option>
									</select>

										<!-- error message -->
										<small class="text-muted text-danger" v-if="errors.has('form.id_tp')">
											<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_tp') }}
										</small>
										<small class="text-muted" v-else>&nbsp;</small>
									</div>
								</div>

								<!-- periode -->
								<div class="col-md-4">
									<div class="form-group" :class="{'has-error' : errors.has('form.periode')}">

										<!-- title -->
										<h5 :class="{ 'text-danger' : errors.has('form.periode')}">
											<i class="icon-cross2 d-none d-sm-block" v-if="errors.has('form.periode')"></i>
											Periode: <wajib-badge></wajib-badge>
										</h5>

										<!-- input -->
										<date-picker @dateSelected="form.periode = $event" :defaultDate="form.periode"></date-picker>	
										<input name="periode" v-model="form.periode" v-show="false" v-validate="'required'" data-vv-as="Periode"/>

										<!-- error message -->
										<small class="text-muted text-danger" v-if="errors.has('form.periode')">
											<i class="icon-arrow-small-right"></i> {{ errors.first('form.periode') }}
										</small>
										<small class="text-muted" v-else>&nbsp;</small>
									</div>
								</div>

							</div>
						</div>
					</div>
					
					<!-- <div class="alert alert-warning alert-styled-left">
						<span class="font-weight-semibold">Perhatian!</span> Silahkan memilih salah satu jenis laporan cu yang ingin di isi. 
						<br/>
						Terdapat 2 jenis yaitu form CoA yang terdiri dari charts of accounts yang akan otomatis nanti menjadi laporan statistik. Kemudian ada form statistik yang akan menjadi laporan statistik tapi tidak memiliki informasi detail charts of accounts.
					</div>

					<div class="nav-tabs-responsive mb-3">
						<ul class="nav nav-tabs nav-tabs-solid nav-justified bg-light">
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'coa'}" @click.prevent="changeTab('coa')"><i class="icon-notebook mr-2"></i> Form CoA</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'statistik'}" @click.prevent="changeTab('statistik')"><i class="icon-stats-growth mr-2"></i> Form Statistik</a>
							</li>
						</ul>
					</div>
					
					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'coa'">
							<form-coa @back="back" :modelCoa="modelCoa" :modelCoaStat="modelCoaStat" v-if="modelCoaStat == 'success'"></form-coa>
						</div>
					</transition>

					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'statistik'">
							<form-konsolidasi @back="back"></form-konsolidasi>
						</div>
					</transition> -->

					<form-konsolidasi @back="back"></form-konsolidasi>
					
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import _ from 'lodash';
	import pageHeader from "../../components/pageHeader.vue";
	import infoIcon from "../../components/infoIcon.vue";
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';
	import wajibBadge from "../../components/wajibBadge.vue";
	import DatePicker from "../../components/datePicker.vue";
	import formKonsolidasi from "./formKonsolidasi";
	import formCoa from "./formCoa";

	export default {
		components: {
			pageHeader,
			message,
			formButton,
			formInfo,
			infoIcon,
			wajibBadge,
			DatePicker,
			formKonsolidasi,
			formCoa
		},
		data() {
			return {
				title: '',
				titleDesc: '',
				titleIcon: '',
				level2Title: 'Laporan CU',
				kelas: 'laporanCu',
				tabName: 'coa',
				idLaporanTp: '',
				isModelTp: false,
				submited: false,
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
          },
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
					},
					numeric2: {
            numeral: true,
            numeralIntegerScale: 2,
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
          }
        },
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		created(){
			if(this.currentUser.id_cu != undefined){
				this.checkProfileIdCU();
			}
		},
		watch: {
			// check route changes
			'$route' (to, from){
				this.fetch();
			},
			formStat(value){
				if(value == "success"){
					if(this.$route.meta.mode == 'edit' && this.modelCUStat == "success"){
						this.changeCu(this.form.id_cu);
						this.checkUser('update_laporan_cu',this.form.id_cu);
					}else if(this.$route.meta.mode == 'editTp' && this.modelCUStat == "success"){
						this.checkMetaEditTp();
						this.checkUser('update_laporan_tp',this.form.id_cu);
					}else if(this.$route.meta.mode !== 'edit'){
						if(this.currentUser.id_cu == 0){
							this.form.id_cu = this.currentUser.id_cu;
						}	
					}
				}
			},
			modelCUStat(value){
				if(value == "success"){
					if(this.$route.meta.mode == 'edit' || this.$route.meta.mode == 'editDraft'){
						this.changeCu(this.form.id_cu);
					}else if(this.$route.meta.mode == 'editTp'){
						this.checkMetaEditTp();
					}else{
						if(this.currentUser.id_cu != 0)
							this.changeCu(this.currentUser.id_cu);
					}
				}
			},
			modelTpStat(value){
				if(value == "success"){
					if(this.$route.meta.mode == 'edit'){
						this.form.id_tp = 'konsolidasi';
					}else if(this.$route.meta.mode == 'editTp'){
						this.changeTp(this.form.id_tp);
					}
					this.isModelTp = true;
				}
			},
			listLaporanTpDataStat(value){
				if(value == "success"){
					this.idLaporanTp = this.form.id;
				}
			},
    },
		methods: {
			checkProfileIdCU(){
				if(this.currentUser.id_cu == 0){
					if(this.modelCuStat != 'success'){
						this.$store.dispatch('cu/getHeader');
					}
				}else{
					this.form.id_cu = this.currentUser.id_cu;
					this.$store.dispatch('tp/getCu',this.currentUser.id_cu);
					this.isModelTp = true;
				}
			},
			fetch(){
				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
					this.title = 'Ubah ' + this.level2Title;
					this.titleDesc = 'Mengubah ' + this.level2Title;
					this.titleIcon = 'icon-pencil5';
				}else if(this.$route.meta.mode === 'editTp'){
					this.$store.dispatch(this.kelas + '/editTp',this.$route.params.id)
					this.title = 'Ubah ' + this.level2Title;
					this.titleDesc = 'Mengubah ' + this.level2Title;
					this.titleIcon = 'icon-pencil5';
				}else if(this.$route.meta.mode === 'editDraft'){
					this.$store.dispatch(this.kelas + '/editDraft',this.$route.params.id);	
					this.level2Title = 'Laporan Cu [Draft]';
					this.title = 'Ubah ' + this.level2Title;
					this.titleDesc = 'Mengubah ' + this.level2Title;
					this.titleIcon = 'icon-pencil5';
				}else if(this.$route.meta.mode === 'editTpDraft'){
					this.$store.dispatch(this.kelas + '/editTpDraft',this.$route.params.id);
					this.level2Title = 'Laporan Tp [Draft]';
					this.title = 'Ubah ' + this.level2Title;
					this.titleDesc = 'Mengubah ' + this.level2Title;
					this.titleIcon = 'icon-pencil5';
				}else {
					this.title = 'Tambah ' + this.level2Title;
					this.titleDesc = 'Menambah ' + this.level2Title;
					this.titleIcon = 'icon-plus3';
					this.$store.dispatch(this.kelas + '/create');
				}
				this.fetchCu();
				// this.$store.dispatch('coa/get');
			},
			fetchCu(){
				if(this.modelCuStat != 'success'){
					this.$store.dispatch('cu/getHeader');
				}
			},
			checkMetaEditTp(){
				this.form.id_cu = this.form.tp.id_cu;
				this.changeCu(this.form.tp.id_cu);
				this.$store.dispatch('laporanTp/listLaporanTp', [this.form.tp.id_cu, this.form.periode]);
			},
			changeTab(value) {
				this.tabName = value;
			},
			changeCu(id){
				this.$store.dispatch('tp/getCu',id);
				let model = _.find(this.modelCU, function(o){
					return o.id == id
				});
				this.form.no_ba = model ? model.no_ba : '';
			},
			changeTp(id){
				if(id == 0){
					this.form.no_tp = 0;
				}else{
					let model = _.find(this.modelTp, function(o){
						return o.id == id
					});
					this.form.no_tp = model.no_tp;
				}
			},
			changeLaporanTp(id,tp){
				this.$router.push({name: 'laporanTpEdit', params: { id: id}});
			},
			checkUser(permission,id_cu){
				if(this.currentUser){
					if(!this.currentUser.can || !this.currentUser.can[permission]){
						this.$router.push('/notFound');
					}
					if(!id_cu || this.currentUser.id_cu){
						if(this.currentUser.id_cu != 0 && this.currentUser.id_cu != id_cu){
							this.$router.push('/notFound');
						}
					}
				}
			},
			back(){
				if(this.$route.meta.mode === 'edit'){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu, tp: 'konsolidasi'}});
				}else if(this.$route.meta.mode === 'editTp'){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu, tp: this.form.id_tp}});
				}else if(this.$route.meta.mode === 'editDraft'){
					this.$router.push({name: 'laporanCuDraft'});
				}else if(this.$route.meta.mode === 'editTpDraft'){
					this.$router.push({name: 'laporanTpDraft'});
				}else{
					if(this.currentUser.id_cu == 0){
						if(this.form.id_cu == 0){
							this.$router.push({name: this.kelas});
						}else{
							if(this.form.id_tp == 0){
								this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu, tp: 0}});
							}else{
								this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu, tp: this.form.id_tp}});
							}
						}
					}else{
						this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu, tp: this.form.id_tp}});
					}
				}
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('laporanCu',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('laporanTp',{
				listLaporanTpData: 'data2S',
				listLaporanTpDataStat: 'dataStat2S',
			}),
			...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
			}),
			...mapGetters('tp',{
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
			}),
			...mapGetters('coa',{
				modelCoa: 'dataS2',
				modelCoaStat: 'dataStatS2',
			}),
		}
	}
</script>