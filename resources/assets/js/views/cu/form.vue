<template>
	<div>
		<!-- header -->
		<div class="page-header">
			<div class="page-header-content has-visible-elements">
				<div class="page-title">
					<h4>
						<i class="position-left" :class="titleIcon"></i>
						<span class="text-semibold">{{ title }}</span> - {{ titleDesc }}</h4>
						<ul class="breadcrumb breadcrumb-caret position-right">
							<router-link :to="{ name:'dashboard' }" tag="li">
								<a>Dashboard</a>
							</router-link>
							<router-link :to="{ name: kelas }" tag="li">
								<a>CU</a>
							</router-link>
							<li class="active">{{ title }}</li>
						</ul>
				</div>
			</div>
		</div>
		<!-- content -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">

					<!-- message -->
					<message :show="errors.any('form')" :class="'bg-danger'" v-if="submited">
						<h4><i class="icon-cancel-circle2"></i> Oops terjadi kesalahan</h4>
						<ul>
							<li v-for="error in errors.items">{{error.msg}}</li>
						</ul>
					</message>

					<!-- main panel -->
					<div class="panel panel-flat">
						<div class="panel-body">
							<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">
								<div class="row">

									<!-- gambar utama -->
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

										</div>
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
											<select class="bootstrap-select" name="id_provinces" v-model="form.id_provinces" data-width="100%" v-validate="'required'" data-vv-as="Provinsi" :disabled="modelCU.length === 0" @change="changeProvinces($event.target.value)">
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

											<!-- loading -->
											<div v-if="modelRegenciesLoadStat === 'loading'">
													<i class="icon-spinner spinner"></i>
											</div>

											<!-- success -->
											<div v-else>

													<!-- select -->
													<select class="bootstrap-select"  name="id_regencies" v-model="form.id_regencies" data-width="100%" v-validate="'required'" data-vv-as="Kabupaten" @change="changeRegencies($event.target.value)" :disabled="modelRegencies.length === 0">
														<option disabled value="">
															<span>Silahkan pilih kabupaten</span>
														</option>
														<option data-divider="true"></option>
														<option v-for="regencies in modelRegencies" :value="regencies.id">{{regencies.name}}</option>
													</select>

											</div>

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

											<!-- loading -->
											<div v-if="modelDistrictsLoadStat === 'loading'">
													<i class="icon-spinner spinner"></i>
											</div>

											<!-- success -->
											<div v-else>

													<!-- select -->
													<select class="bootstrap-select"  name="id_districts" v-model="form.id_districts" data-width="100%" v-validate="'required'" data-vv-as="Kabupaten" :disabled="modelDistricts.length === 0" @change="changeDistricts($event.target.value)">
														<option disabled value="">
															<span>Silahkan pilih kecamatan</span>
														</option>
														<option data-divider="true"></option>
														<option v-for="districts in modelDistricts" :value="districts.id">{{districts.name}}</option>
													</select>

											</div>

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

											<!-- loading -->
											<div v-if="modelVillagesLoadStat === 'loading'">
													<i class="icon-spinner spinner"></i>
											</div>

											<!-- success -->
											<div v-else>

													<!-- select -->
													<select class="bootstrap-select"  name="id_villages" v-model="form.id_villages" data-width="100%" v-validate="'required'" data-vv-as="Desa" :disabled="modelVillages.length === 0">
														<option disabled value="">
															<span>Silahkan pilih kelurahan</span>
														</option>
														<option data-divider="true"></option>
														<option v-for="villages in modelVillages" :value="villages.id">{{villages.name}}</option>
													</select>

											</div>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_villages')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_villages') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- alamat -->
									<div class="col-md-4">
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

									<!-- website -->
									<div class="col-md-4">
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
												placeholder="Silahkan masukkan no telp"
												v-validate="'required'" data-vv-as="No. Telp"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.telp')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.telp') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
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
												placeholder="Silahkan masukkan no hp"
												v-validate="'required'" data-vv-as="No. HP"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.hp')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.hp') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
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
												placeholder="Silahkan masukkan kode pos"
												v-validate="'required'" data-vv-as="No. Pos"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.pos')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.pos') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

								</div>

								<!-- separator -->
								<div class="col-md-12"><br/></div>

								<!-- confirmation -->
								<div class="form-group">
									<div class="well well-sm bg-info"><i class="icon-info22"></i> Pastikan data yang dimasukkan sudah benar sebelum menyimpan.</div>
								</div>

								<!-- separator -->
								<div class="col-md-12"><hr/></div>

								<!-- tombol desktop-->
								<div class="text-right hidden-xs">
									<router-link type="button" :to="{ name: kelas }" class="btn btn-default" v-tooltip:top="'Batal'">
										<i class="icon-arrow-left13"></i> Batal
									</router-link>
									<button type="submit" class="btn btn-primary" :disabled="errors.any('form')" v-tooltip:top="'Simpan Data'">
										<i class="icon-floppy-disk"></i> Simpan</button>
								</div>

								<!-- tombol mobile-->
								<div class="visible-xs">
									<button type="submit" class="btn btn-primary btn-block pb-5" :disabled="errors.any('form')">
										<i class="icon-floppy-disk"></i> Simpan</button>
									<router-link type="button" :to="{ name: kelas }" class="btn btn-default btn-block">
										<i class="icon-arrow-left13"></i> Batal
									</router-link>
								</div>
							</form>
						</div>
					</div>
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
	import corefunc from '../../assets/core/app.js';
	import {
		toMulipartedForm
	} from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import {TheMask} from 'vue-the-mask';
	import Cleave from 'vue-cleave-component';

	export default {
		components: {
			appModal,
			appImageUpload,
			message,
			TheMask,
			Cleave
		},
		data() {
			return {
				title: 'Tambah CU',
				titleDesc: 'Menambah CU baru',
				titleIcon: 'icon-plus3',
				kelas: 'cu',
				kelasVuex: 'CU',
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
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
			}
		},
		mounted() {
			corefunc.core_function();
			this.other();
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
		},
		created(){
			this.fetch();
		},
		watch: {
			userDataStat(value){ //jika refresh halaman maka reload userData
				if(value === "success"){
					if(this.userData.id_cu === 0){
						this.$store.dispatch('loadCUPus',this.userData.id_pus);
					}
				}
			},
			formStat(value){
				if(value === "success"){
					if(this.$route.meta.mode !== 'edit'){
						this.form.id_cu = this.userData.id_cu;
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
				if(this.userData.id_cu === 0){
					this.$store.dispatch('loadCUPus',this.userData.id_pus);
				}

				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch('edit' + this.kelasVuex,this.$route.params.id);	
					this.title = 'Ubah CU';
					this.titleDesc = 'Mengubah CU';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.$store.dispatch('create' + this.kelasVuex);
				}

				this.$store.dispatch('loadProvincesAll');
			},
			save() {
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode === 'edit'){
							this.$store.dispatch('update' + this.kelasVuex, [this.$route.params.id, formData]);
						}else{
						this.$store.dispatch('store' + this.kelasVuex, formData);
					}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			changeProvinces(id){
				this.$store.dispatch('loadRegenciesProvinces', id);
			},
			changeRegencies(id){
				this.$store.dispatch('loadDistrictsRegencies', id);
			},
			changeDistricts(id){
				this.$store.dispatch('loadVillagesDistricts', id);
			},
			modalTutup() {
 				if(this.updateStat === 'success'){
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
			userData(){
				return this.$store.getters.getUserData;
			},
			userDataStat(){
				return this.$store.getters.getUserDataLoadStat;
			},
			form(){
				return this.$store.getters.getCU;
			},
			formStat(){
				return this.$store.getters.getCULoadStat;
			},
			rules(){
				return this.$store.getters.getCURules;
			},
			option(){
				return this.$store.getters.getCUOption;
			},
			updateResponse(){
				return this.$store.getters.getCUUpdate;
			},
			updateStat(){
				return this.$store.getters.getCUUpdateStat;
			},
			modelPus() {
				return this.$store.getters.getPusS;
			},
			modelCU() {
				return this.$store.getters.getCUS;
			},
			modelCULoadStat() {
				return this.$store.getters.getCULoadStatS;
			},
			modelProvinces() {
				return this.$store.getters.getProvincesS;
			},
			modelProvincesLoadStat() {
				return this.$store.getters.getProvincesLoadStatS;
			},
			modelRegencies() {
				return this.$store.getters.getRegenciesS;
			},
			modelRegenciesLoadStat() {
				return this.$store.getters.getRegenciesLoadStatS;
			},
			modelDistricts() {
				return this.$store.getters.getDistrictsS;
			},
			modelDistrictsLoadStat() {
				return this.$store.getters.getDistrictsLoadStatS;
			},
			modelVillages() {
				return this.$store.getters.getVillagesS;
			},
			modelVillagesLoadStat() {
				return this.$store.getters.getVillagesLoadStatS;
			}
		}
	}
</script>