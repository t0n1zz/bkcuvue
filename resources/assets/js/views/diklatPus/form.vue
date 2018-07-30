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

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">1</span> Informasi Umum
											<small class="display-block">Gambaran awal Credit Union anda</small>
										</h6>
									</div>
									
									<!-- foto -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Foto Kantor Pusat:</h5>

											<!-- imageupload -->
											<app-image-upload :image_loc="'/images/cu/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
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
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama CU" v-validate="'required|min:5'" data-vv-as="Nama" v-model="form.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- no_ba -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.no_ba')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.no_ba')}">
												<i class="icon-cross2" v-if="errors.has('form.no_ba')"></i>
												No. BA:</h5>

											<!-- text -->
											<cleave 
												name="no_ba"
												v-model="form.no_ba" 
												class="form-control" 
												:options="cleaveOption.number3"
												placeholder="Silahkan masukkan no ba."
												v-validate="'required'" data-vv-as="No. BA"></cleave>
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.no_ba')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.no_ba') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- badan hukum -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.badan_hukum')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.badan_hukum')}">
												<i class="icon-cross2" v-if="errors.has('form.badan_hukum')"></i>
												Badan Hukum:</h5>

											<!-- text -->
											<input type="text" name="badan_hukum" class="form-control" placeholder="Silahkan masukkan nama CU"  v-model="form.badan_hukum">

											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- aplikasi -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.app')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.app')}">
												<i class="icon-cross2" v-if="errors.has('form.app')"></i>
												Aplikasi Keuangan Utama:</h5>

											<!-- text -->
											<input type="text" name="app" class="form-control" placeholder="Silahkan masukkan nama aplikasi keuangan utama" v-validate="'required|min:5'" data-vv-as="Aplikasi keuangan utama" v-model="form.app">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.app')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.app') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- ultah -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.ultah')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.ultah')}">
												<i class="icon-cross2" v-if="errors.has('form.ultah')"></i>
												Tgl. Berdiri:</h5>

											<!-- input -->
											<cleave 
												name="ultah"
												v-model="form.ultah" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.date" 
												placeholder="Silahkan masukkan tgl. berdiri"
												v-validate="'required'" data-vv-as="Tgl. berdiri"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.ultah')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.ultah') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- bergabung -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.bergabung')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.bergabung')}">
												<i class="icon-cross2" v-if="errors.has('form.bergabung')"></i>
												Tgl. Bergabung:</h5>

											<!-- input  -->
											<cleave 
												name="bergabung"
												v-model="form.bergabung" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.date" 
												placeholder="Silahkan masukkan tgl. bergabung"
												v-validate="'required'" data-vv-as="Tgl. bergabung"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.bergabung')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.bergabung') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>
									
								</div>
							</div>
						</div>

						<!-- lokasi -->
						<div class="panel panel-flat">
							<div class="panel-body">
								<div class="row">

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">2</span> Lokasi
											<small class="display-block">Letak kantor pusat Credit Union anda</small>
										</h6>
									</div>
									
									<!-- Provinsi -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_provinces')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_provinces')}">
												<i class="icon-cross2" v-if="errors.has('form.id_provinces')"></i>
												Provinsi:
											</h5>

											<!-- select -->
											<select class="bootstrap-select" name="id_provinces" v-model="form.id_provinces" data-width="100%" v-validate="'required'" data-vv-as="Provinsi" :disabled="modelProvinces.length === 0" @change="changeProvinces($event.target.value)">
												<option disabled value="">Silahkan pilih Provinsi</option>
												<option data-divider="true"></option>
												<option v-for="provinces in modelProvinces" :value="provinces.id">{{provinces.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_provinces')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_provinces') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kabupaten -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_regencies')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_regencies')}">
												<i class="icon-cross2" v-if="errors.has('form.id_regencies')"></i>
												Kabupaten:
											</h5>

											<!-- select -->
											<select class="bootstrap-select"  name="id_regencies" v-model="form.id_regencies" data-width="100%" v-validate="'required'" data-vv-as="Kabupaten" @change="changeRegencies($event.target.value)" :disabled="modelRegencies.length === 0">
												<option disabled value="">
													<span v-if="modelRegenciesStat === 'loading'"><i class="icon-spinner spinner"></i></span>
													<span v-else>Silahkan pilih kabupaten</span>
												</option>
												<option data-divider="true"></option>
												<option v-for="regencies in modelRegencies" :value="regencies.id">{{regencies.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_regencies')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_regencies') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kecamatan -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_districts')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_districts')}">
												<i class="icon-cross2" v-if="errors.has('form.id_districts')"></i>
												Kecamatan:
											</h5>

											<!-- select -->
											<select class="bootstrap-select"  name="id_districts" v-model="form.id_districts" data-width="100%" v-validate="'required'" data-vv-as="Kabupaten" :disabled="modelDistricts.length === 0" @change="changeDistricts($event.target.value)">
												<option disabled value="">
													<span v-if="modelDistrictsStat === 'loading'"><i class="icon-spinner spinner"></i></span>
													<span v-else>Silahkan pilih kecamatan</span>
												</option>
												<option data-divider="true"></option>
												<option v-for="districts in modelDistricts" :value="districts.id">{{districts.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_regency')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_regency') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kelurahan -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_villages')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_villages')}">
												<i class="icon-cross2" v-if="errors.has('form.id_villages')"></i>
												Kelurahan:
											</h5>

											<!-- select -->
											<select class="bootstrap-select"  name="id_villages" v-model="form.id_villages" data-width="100%" v-validate="'required'" data-vv-as="Desa" :disabled="modelVillages.length === 0">
												<option disabled value="">
													<span v-if="modelVillagesStat === 'loading'"><i class="icon-spinner spinner"></i> mohon tunggu</span>
													<span v-else>Silahkan pilih kelurahan</span>
												</option>
												<option data-divider="true"></option>
												<option v-for="villages in modelVillages" :value="villages.id">{{villages.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_villages')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_villages') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- alamat -->
									<div class="col-md-8">
										<div class="form-group" :class="{'has-error' : errors.has('form.alamat')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.alamat')}">
												<i class="icon-cross2" v-if="errors.has('form.alamat')"></i>
												Alamat:</h5>

											<!-- text -->
											<input type="text" name="alamat" class="form-control" placeholder="Silahkan masukkan alamat" v-validate="'required|min:5'" data-vv-as="Alamat" v-model="form.alamat">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.alamat')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.alamat') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

								</div>
							</div>
						</div>

						<!-- informasi kontak -->
						<div class="panel panel-flat">
							<div class="panel-body">
								<div class="row">

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">3</span> Kontak
											<small class="display-block">Menghubungi Credit Union anda</small>
										</h6>
									</div>

									<!-- no telp -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.telp')}">
												<i class="icon-cross2" v-if="errors.has('form.telp')"></i>
												No. Telp:</h5>

											<!-- text -->
											<cleave 
												v-model="form.telp" 
												class="form-control" 
												:options="cleaveOption.number12"
												placeholder="Silahkan masukkan no telp"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- no hp -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.hp')}">
												<i class="icon-cross2" v-if="errors.has('form.hp')"></i>
												No. Hp:</h5>

											<!-- text -->
											<cleave 
												v-model="form.hp" 
												class="form-control" 
												:options="cleaveOption.number12"
												placeholder="Silahkan masukkan no hp"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- kode pos -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.pos')}">
												<i class="icon-cross2" v-if="errors.has('form.pos')"></i>
												Kode Pos:</h5>

											<!-- text -->
											<cleave 
												v-model="form.pos" 
												class="form-control" 
												:options="cleaveOption.number12"
												placeholder="Silahkan masukkan kode pos"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- email -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.email')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.email')}">
												<i class="icon-cross2" v-if="errors.has('form.email')"></i>
												E-mail:</h5>

											<!-- text -->
											<input type="text" name="email" class="form-control" placeholder="Silahkan masukkan alamat e-mail" v-validate="'required|email'" data-vv-as="E-mail" v-model="form.email">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.email')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.email') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- website -->
									<div class="col-md-8">
										<div class="form-group" :class="{'has-error' : errors.has('form.website')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.website')}">
												<i class="icon-cross2" v-if="errors.has('form.website')"></i>
												Website:</h5>

											<!-- text -->
											<input type="text" name="website" class="form-control" placeholder="Silahkan masukkan alamat website" v-model="form.website" v-validate="'url'" data-vv-as="Website">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.website')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.website') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

								</div>	
							</div>
						</div>

						<!-- informasi profil -->
						<div class="panel panel-flat">
							<div class="panel-body">
								<div class="row">

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">4</span> Profil
											<small class="display-block">Mengenai Credit Union anda</small>
										</h6>
									</div>
								
									<!-- misi -->
									<div class="col-md-6">
										<div class="form-group">

											<!-- title -->
											<h5>Misi:</h5>

											<!-- textarea -->
											<textarea rows="5" type="text" name="misi" class="form-control" v-model="form.misi" placeholder="Silahkan masukkan misi"></textarea>

											<small class="text-muted">&nbsp;</small>
										</div>
									</div>

									<!-- visi -->
									<div class="col-md-6">
										<div class="form-group">

											<!-- title -->
											<h5>Visi:</h5>

											<!-- textarea -->
											<textarea rows="5" type="text" name="visi" class="form-control" v-model="form.visi" placeholder="Silahkan masukkan visi"></textarea>

											<small class="text-muted">&nbsp;</small>
										</div>
									</div>

									<!-- nilai -->
									<div class="col-md-6">
										<div class="form-group">

											<!-- title -->
											<h5>Nilai-nilai Inti:</h5>

											<!-- textarea -->
											<textarea rows="5" type="text" name="nilai" class="form-control" v-model="form.nilai" placeholder="Silahkan masukkan nilai-nilai inti"></textarea>

											<small class="text-muted">&nbsp;</small>
										</div>
									</div>

									<!-- slogan -->
									<div class="col-md-6">
										<div class="form-group">

											<!-- title -->
											<h5>Slogan:</h5>

											<!-- textarea -->
											<textarea rows="5" type="text" name="slogan" class="form-control" v-model="form.slogan" placeholder="Silahkan masukkan slogan"></textarea>

											<small class="text-muted">&nbsp;</small>
										</div>
									</div>

									<!-- sejarah -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Sejarah:</h5>

											<!-- textarea -->
											<textarea rows="5" type="text" name="sejarah" class="form-control" v-model="form.sejarah" placeholder="Silahkan masukkan sejarah"></textarea>

											<small class="text-muted">&nbsp;</small>
										</div>
									</div>

									<!-- deskripsi -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Deskripsi:</h5>

											<!-- textarea -->
											<textarea rows="5" type="text" name="deskripsi" class="form-control" v-model="form.deskripsi" placeholder="Silahkan masukkan deskripsi"></textarea>

											<small class="text-muted">&nbsp;</small>
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
	import {
		toMulipartedForm
	} from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			message,
			formButton,
			formInfo,
			Cleave
		},
		data() {
			return {
				title: 'Tambah CU',
				titleDesc: 'Menambah CU baru',
				titleIcon: 'icon-plus3',
				level: 2,
				level2Title: 'CU',
				kelas: 'cu',
				redirect: '/cu/',
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
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