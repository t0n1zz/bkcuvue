<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">

						<!-- main form -->
						<div class="card">
							<div class="card-body">
									<div class="row">

										<!-- gambar utama -->
										<div class="col-md-12">
											<div class="form-group">

												<!-- title -->
												<h5>Foto:</h5>

												<!-- imageupload -->
												<app-image-upload :image_loc="'/images/tempat/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
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
												<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama tempat kegiatan" v-validate="'required|min:5'" data-vv-as="Nama" v-model="form.name">

												<!-- error message -->
												<small class="text-muted text-danger" v-if="errors.has('form.name')">
													<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
												</small>
												<small class="text-muted" v-else>&nbsp;</small>
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
												<select class="form-control" name="id_provinces" v-model="form.id_provinces" data-width="100%" v-validate="'required'" data-vv-as="Provinsi" :disabled="modelProvinces.length === 0" @change="changeProvinces($event.target.value)">
													<option disabled value="">Silahkan pilih Provinsi</option>
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
												<select class="form-control"  name="id_regencies" v-model="form.id_regencies" data-width="100%" v-validate="'required'" data-vv-as="Kabupaten" @change="changeRegencies($event.target.value)" :disabled="modelRegencies.length === 0">
													<option disabled value="">
														<span v-if="modelRegenciesStat === 'loading'"><i class="icon-spinner spinner"></i></span>
														<span v-else>Silahkan pilih kabupaten</span>
													</option>
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
												<select class="form-control"  name="id_districts" v-model="form.id_districts" data-width="100%" v-validate="'required'" data-vv-as="Kabupaten" :disabled="modelDistricts.length === 0" @change="changeDistricts($event.target.value)">
													<option disabled value="">
														<span v-if="modelDistrictsStat === 'loading'"><i class="icon-spinner spinner"></i></span>
														<span v-else>Silahkan pilih kecamatan</span>
													</option>
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
												<select class="form-control"  name="id_villages" v-model="form.id_villages" data-width="100%" v-validate="'required'" data-vv-as="Desa" :disabled="modelVillages.length === 0">
													<option disabled value="">
														<span v-if="modelVillagesStat === 'loading'"><i class="icon-spinner spinner"></i> mohon tunggu</span>
														<span v-else>Silahkan pilih kelurahan</span>
													</option>
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
										<div class="col-md-12">
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

									</div>
							</div>
						</div>

						<!-- form info -->
						<form-info></form-info>	
						<br/>

						<!-- form button -->
						<div class="card card-body">
							<form-button
								:cancelState="'methods'"
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
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import { toMulipartedForm } from '../../helpers/form';
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
				title: 'Tambah Tempat',
				titleDesc: 'Menambah tempat baru',
				titleIcon: 'icon-plus3',
				kelas: 'tempat',
				level2Title: 'Tempat',
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
		created(){
			this.fetch();
		},
		watch: {
			currentUserStat(value){ //jika refresh halaman maka reload currentUser
				if(value === "success"){
					if(this.currentUser.id_cu == 0){
						this.$store.dispatch('cu/getPus',this.currentUser.id_pus);
					}else{
						this.form.id_cu = this.currentUser.id_cu;
					}
				}
			},
			formStat(value){
				if(value === "success"){
					if(this.$route.meta.mode != 'edit' && this.currentUser.id_cu != 0){
						this.form.id_cu = this.currentUser.id_cu;
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
				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
					this.title = 'Ubah Tempat Kegiatan';
					this.titleDesc = 'Mengubah Tempat Kegiatan';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah Tempat Kegiatan';
					this.titleDesc = 'Menambah Tempat Kegiatan';
					this.titleIcon = 'icon-plus3';
					this.$store.dispatch(this.kelas + '/create');
				}

				this.$store.dispatch('provinces/get');
			},
			save() {
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode == 'edit'){
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
 				if(this.updateStat === 'success'){
					this.back();
				}
				
				this.modalShow = false;
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
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser',
			}),
			...mapGetters('tempat',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
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