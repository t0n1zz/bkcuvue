<template>
	<div>
		<!-- page-header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="level" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">
					
						<!-- informasi umum -->
						<div class="panel panel-flat">
							<div class="panel-body">	
								<div class="row">

									<!-- kode -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.kode_diklat')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.kode_diklat')}">
												<i class="icon-cross2" v-if="errors.has('form.kode_diklat')"></i>
												Kode Diklat:</h5>

											<!-- text -->
											<cleave 
												name="kode_diklat"
												v-model="form.kode_diklat" 
												class="form-control" 
												:options="cleaveOption.number3"
												placeholder="Silahkan masukkan kode diklat"
												v-validate="'required'" data-vv-as="Kode diklat"></cleave>
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.kode_diklat')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.kode_diklat') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- name -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.name')}">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i>
												Nama:</h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama diklat" v-validate="'required|min:5'" data-vv-as="Nama" v-model="form.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kota -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.kota')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.kota')}">
												<i class="icon-cross2" v-if="errors.has('form.kota')"></i>
												Kota:</h5>

											<!-- text -->
											<input type="text" name="kota" class="form-control" placeholder="Silahkan masukkan kota" v-validate="'required|min:5'" data-vv-as="Kota" v-model="form.kota">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.kota')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.kota') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- periode -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.periode')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.periode')}">
												<i class="icon-cross2" v-if="errors.has('form.periode')"></i>
												Periode:</h5>

											<!-- input -->
											<cleave 
												name="periode"
												v-model="form.periode" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.year" 
												placeholder="Silahkan masukkan periode"
												v-validate="'required'" data-vv-as="Periode"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.periode')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.periode') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- mulai -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.mulai')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.mulai')}">
												<i class="icon-cross2" v-if="errors.has('form.mulai')"></i>
												Tgl. Mulai:</h5>

											<!-- input -->
											<cleave 
												name="mulai"
												v-model="form.mulai" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.date" 
												placeholder="Silahkan masukkan tgl. mulai"
												v-validate="'required'" data-vv-as="Tgl. mulai"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.mulai')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.mulai') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- selesai -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.selesai')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.selesai')}">
												<i class="icon-cross2" v-if="errors.has('form.selesai')"></i>
												Tgl. Selesai:</h5>

											<!-- input  -->
											<cleave 
												name="selesai"
												v-model="form.selesai" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.date" 
												placeholder="Silahkan masukkan tgl. selesai"
												v-validate="'required'" data-vv-as="Tgl. selesai"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.selesai')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.selesai') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- peserta max -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.peserta_max')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.peserta_max')}">
												<i class="icon-cross2" v-if="errors.has('form.peserta_max')"></i>
												Peserta Max:</h5>

											<!-- input -->
											<cleave 
												name="peserta_max"
												v-model="form.peserta_max" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.number3" 
												placeholder="Silahkan masukkan peserta max"
												v-validate="'required'" data-vv-as="Peserta max"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.peserta_max')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.peserta_max') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- peserta min -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.peserta_min')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.peserta_min')}">
												<i class="icon-cross2" v-if="errors.has('form.peserta_min')"></i>
												Peserta Min:</h5>

											<!-- input -->
											<cleave 
												name="peserta_min"
												v-model="form.peserta_min" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.number3" 
												placeholder="Silahkan masukkan peserta min"
												v-validate="'required'" data-vv-as="Peserta min"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.peserta_min')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.peserta_min') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- peserta -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Peserta:</h5>

											<label class="checkbox-inline"><input type="checkbox">Staf</label>
											<label class="checkbox-inline"><input type="checkbox">Supervisor</label>
											<label class="checkbox-inline"><input type="checkbox">Manajer</label>
											<label class="checkbox-inline"><input type="checkbox">Senior Manajer</label>
											<label class="checkbox-inline"><input type="checkbox">Komite</label>
											<label class="checkbox-inline"><input type="checkbox">Pengawas</label>
											<label class="checkbox-inline"><input type="checkbox">Pengurus</label>
										</div>
									</div>

									<!-- isi artikel -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Keterangan:</h5>

											<!-- summernote -->
											<app-summernote name="editor" :model="form.keterangan" :config="summernoteconfig" :formStat="formStat" @change="value => { form.content = value }"></app-summernote>
										</div>
									</div>
									
								</div>
							</div>
						</div>

						<!-- form info -->
						<form-info></form-info>	
						<br/>

						<!-- form button -->
						<div class="panel panel-flat panel-body">
							<form-button
								:cancelState="cancelState"
								:formValidation="'form'"
								@cancelClick="back"></form-button>
						</div>	

					</form>
				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">
		</app-modal>

	</div>
</template>

<script>
	import Vue from 'vue';
	import axios from 'axios';
	import { mapGetters } from 'vuex'
	import corefunc from '../../assets/core/app.js';
	import pageHeader from "../../components/pageHeader.vue";
	import { toMulipartedForm } from '../../helpers/form';
	import appSummernote from '../../helpers/summernote.js';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';

	export default {
		components: {
			pageHeader,
			appModal,
			appSummernote,
			message,
			formButton,
			formInfo,
			Cleave
		},
		data() {
			return {
				title: 'Tambah Diklat BKCU',
				titleDesc: 'Menambah Diklat BKCU baru',
				titleIcon: 'icon-plus3',
				level: 2,
				level2Title: 'Diklat BKCU',
				kelas: 'diklatPus',
				redirect: '/cu/',
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
					},
					year:{
            date: true,
            datePattern: ['Y'],
          },
          number12: {
            numeral: true,
            numeralIntegerScale: 12,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
					},
					number3: {
            numeral: true,
            numeralIntegerScale: 3,
            numeralDecimalScale: 0,
            stripLeadingZeroes: false
          },
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
          }
				},
				summernoteconfig: {
					height: 400,
					popover: {
						image: [
							['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
							/* ['float', ['floatLeft', 'floatRight', 'floatNone']], */
							/* Those are the old regular float buttons */
							['floatBS', ['floatBSLeft', 'floatBSNone', 'floatBSRight']],
							/* Those come from the BS plugin, in any order, you can even keep both! */
							['custom', ['imageAttributes', 'imageShape']],
							['remove', ['removeMedia']],
						],
					},
					toolbar: [
						['style', ['addclass', 'bold', 'italic', 'underline', 'hr']],
						['font', ['strikethrough', 'superscript', 'subscript', 'clear']],
						['color', ['color']],
						['para', ['ul', 'ol']],
						['paragraph', ['paragraph']],
						['table', ['table']],
						['insert', ['link', 'picture', 'video']],
						['misc', ['fullscreen']],
						['misc2', ['undo', 'redo']]
					]
				},
				cancelState: 'methods',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		mounted() {
			corefunc.core_function();
			this.other();
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
		},
		watch: {
			formStat(value){
				if(value === "success"){
					if(this.$route.meta.mode == 'edit'|| this.$route.meta.mode == 'profile' ){
						if(this.profile.id_cu !== 0 && this.profile.id_cu !== this.form.id){
							this.$router.push({name: 'notFound'});
						}
						this.changeProvinces(this. form.id_provinces);
						this.changeRegencies(this.form.id_regencies);
						this.changeDistricts(this.form.id_districts);
					}
				}
			},
			updateStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateResponse.message;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			}
    },
		methods: {
			fetch(){
				if(this.$route.meta.mode == 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
					this.title = 'Ubah ' + this.level2Title;
					this.titleDesc = 'Mengubah ' + this.level2Title;
					this.titleIcon = 'icon-pencil5';
				} else if(this.$route.meta.mode == 'profile'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
					this.title = 'Profile ' + this.level2Title;
					this.titleDesc = 'Mengubah profile ' + this.level2Title;
					this.titleIcon = 'icon-office';
					this.level = 1;
					this.level2Title = '';
					this.cancelState = '';
				} else {
					this.$store.dispatch(this.kelas + '/create');
					this.title = 'Tambah ' + this.level2Title;
					this.titleDesc = 'Menambah ' + this.level2Title;
					this.titleIcon = 'icon-plus3';
				}

				this.$store.dispatch('provinces/get');
			},
			save() {
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode == 'edit' || this.$route.meta.mode == 'profile'){
							this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, formData]);
						}else{
						this.$store.dispatch(this.kelas + '/store', formData);
					}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			back(){
				this.$router.push({name: this.kelas});
			},
			changeProvinces(id){
				this.$store.dispatch('regencies/getProvinces', id);
			},
			changeRegencies(id){
				this.$store.dispatch('districts/getRegencies', id);
			},
			changeDistricts(id){
				this.$store.dispatch('villages/getDistricts', id);
			},
			modalTutup() {
 				if(this.updateStat === 'success' && this.$route.meta.mode == 'edit'){
					this.$router.push(this.redirect);
				}

				this.modalShow = false;
				this.submitedKategori = false;
				this.submitedPenulis = false;
			},
			modalBackgroundClick(){
				if(this.modalState === 'success'){
					this.modalTutup;
				}else if(this.modalState === 'loading'){
					// do nothing
				}else{
					this.modalShow = false
				}
			},
			processFile(event) {
				this.form.gambar = event.target.files[0]
				console.log(event.target.files[0].name);
			},
			other() {
				// bootstrap select
				$('.bootstrap-select').selectpicker();
			}
		},
		computed: {
			...mapGetters('cu',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('provinces',{
				modelProvinces: 'dataS',
				modelProvincesStat: 'dataStatS'
			}),
			...mapGetters('regencies',{
				modelRegencies: 'dataS',
				modelRegenciesStat: 'dataStatS'
			}),
			...mapGetters('districts',{
				modelDistricts: 'dataS',
				modelDistrictsStat: 'dataStatS'
			}),
			...mapGetters('villages',{
				modelVillages: 'dataS',
				modelVillagesStat: 'dataStatS'
			})
		}
	}
</script>