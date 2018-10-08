<template>
	<div>
		<!-- page-header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="level" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">
					
						<!-- informasi umum -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">1. Informasi Umum</h5>
							</div>
							<div class="card-body">	
								<div class="row">

									<!-- kode -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.kode_diklat')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.kode_diklat')}">
												<i class="icon-cross2" v-if="errors.has('form.kode_diklat')"></i>
												Kode Diklat:</h5>

											<!-- text -->
											<input type="text" name="kode_diklat" class="form-control" placeholder="Silahkan masukkan kode diklat" v-validate="'required|min:5'" data-vv-as="Kode Diklat" v-model="form.kode_diklat">
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.kode_diklat')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.kode_diklat') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- name -->
									<div class="col-md-6">
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

									<!-- periode -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.periode')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.periode')}">
												<i class="icon-cross2" v-if="errors.has('form.periode')"></i>
												Periode: <small>(YYYY)</small></h5>

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
												Tgl. Mulai: <small>(YYYY-MM-DD)</small></h5>

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
												Tgl. Selesai: <small>(YYYY-MM-DD)</small></h5>

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
											<h5>Sasaran Peserta:</h5>

											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="1" v-model="sasaran">
													Staf
												</label>
											</div>	
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="2" v-model="sasaran">
													Supervisor
												</label>
											</div>	
											<div class="form-check form-check-inline">	
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="3" v-model="sasaran">
													Manajer
												</label>
											</div>	
											<div class="form-check form-check-inline">	
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="4" v-model="sasaran">
													Senior Manajer
												</label>
											</div>	
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="5" v-model="sasaran">
													Komite
												</label>
											</div>	
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="6" v-model="sasaran">
													Pengawas
												</label>
											</div>	
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="7" v-model="sasaran">
													Pengurus
												</label>
											</div>

										</div>
									</div>
									
								</div>
							</div>
						</div>

						<!-- tempat -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">2. Tempat</h5>
							</div>
							<div class="card-body">	
								<div class="row">

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

									<!-- tempat -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_tempat')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_tempat')}">
												<i class="icon-cross2" v-if="errors.has('form.id_tempat')"></i>
												Tempat:
											</h5>

											<!-- select -->
											<select class="form-control" name="id_tempat" v-model="form.id_tempat" v-validate="'required'" data-vv-as="Tempat" :disabled="!form.id_regencies" @change="changeTempat($event.target.value)">
												<option disabled value="">Silahkan pilih tempat</option>
												<option value="0">Belum ditentukan tempat</option>
												<option disabled value="">----------------</option>
												<option v-for="tempat in modelTempat" :value="tempat.id">{{tempat.name}}</option>
											</select>
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_tempat')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_tempat') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tempat data -->
									<div class="col-md-12" v-if="tempatData != ''">

										<div class="card card-body">
											<div class="media flex-column flex-sm-row mt-0 mb-3">
												<div class="mr-sm-3 mb-2 mb-sm-0">
													<div class="card-img-actions">
														<a href="#" @click.prevent="modalImageShow('/images/tempat/' + tempatData.gambar + '.jpg')" v-if="tempatData.gambar">
															<img :src="'/images/tempat/' + tempatData.gambar + 'n.jpg'" class="img-fluid img-preview rounded" >
															<span class="card-img-actions-overlay card-img"><i class="icon-enlarge6 icon-2x"></i></span>
														</a>
														<a href="#" @click.prevent="modalImageShow('/images/no_image.jpg')" v-else>
															<img :src="'/images/no_image.jpg'" class="img-fluid img-preview rounded" >
															<span class="card-img-actions-overlay card-img"><i class="icon-enlarge6 icon-2x"></i></span>
														</a>
													</div>
												</div>

												<div class="media-body">
													<h4 class="media-title">{{ tempatData.name }}</h4>
													<hr>
													<div class="row">
															<div class="col-md-6">
																<ul class="list list-unstyled mb-0">
																	<li><b>Provinsi:</b> 
																		<span v-if="tempatData.provinces">{{ tempatData.provinces.name }}</span>
																		<span v-else>-</span>
																	</li>
																	<li><b>Kabupaten/Kota:</b>
																		<span v-if="tempatData.regencies">{{ tempatData.regencies.name }}</span>
																		<span v-else>-</span>
																	</li>
																	<li><b>Kecamatan:</b> 
																		<span v-if="tempatData.districts">{{ tempatData.districts.name }}</span>
																		<span v-else>-</span>
																	</li>
																	<li><b>Kelurahan:</b> 
																		<span v-if="tempatData.villages">{{ tempatData.villages.name }}</span>
																		<span v-else>-</span>
																	</li>
																	<li><b>Alamat:</b> 
																		<span v-if="tempatData.alamat">{{ tempatData.alamat }}</span>
																		<span v-else>-</span>
																	</li>
																</ul>
															</div>
															<div class="col-md-6">
																<ul class="list list-unstyled mb-0">
																	<li><b>Website:</b>
																		<span v-if="tempatData.website">{{ tempatData.website }}</span>
																		<span v-else>-</span>
																	</li>
																	<li><b>Email:</b>
																		<span v-if="tempatData.email">{{ tempatData.email }}</span>
																		<span v-else>-</span>
																	</li>
																	<li><b>No. Telp:</b>
																		<span v-if="tempatData.telp">{{ tempatData.telp }}</span>
																		<span v-else>-</span>
																	</li>
																	<li><b>No. Hp:</b>
																		<span v-if="tempatData.hp">{{ tempatData.hp }}</span>
																		<span v-else>-</span>
																	</li>
																	<li><b>Kode Pos:</b>
																		<span v-if="tempatData.pos">{{ tempatData.pos }}</span>
																		<span v-else>-</span>
																	</li>
																</ul>
															</div>
														</div>
												</div>
											</div>
										</div>
										
									</div>

								</div>
							</div>
						</div>
						
						<!-- keterangan -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">3. Informasi Tambah</h5>
							</div>
							<div class="card-body">	
								<div class="row">

									<!-- keterangan -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Jadwal:</h5>

											<ckeditor type="classic" v-model="form.jadwal"></ckeditor>
										</div>
									</div>

									<!-- keterangan -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Keterangan:</h5>

											<ckeditor type="classic" v-model="form.keterangan"></ckeditor>

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
	import { mapGetters } from 'vuex'
	import pageHeader from "../../components/pageHeader.vue";
	import { toMulipartedForm } from '../../helpers/form';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';
	// import vSelect from 'vue-select';

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			formButton,
			formInfo,
			Cleave,
			// vSelect
		},
		data() {
			return {
				title: 'Tambah Diklat BKCU',
				titleDesc: 'Menambah Diklat BKCU baru',
				titleIcon: 'icon-plus3',
				level: 2,
				level2Title: 'Diklat BKCU',
				kelas: 'diklatBKCU',
				sasaran: [],
				tempatData: '',
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
		watch: {
			formStat(value){
				if(value === "success"){
					if(this.$route.meta.mode == 'edit'){
						var i;
						for(i = 0; i < this.form.sasaran.length; i++){
							this.sasaran.push(this.form.sasaran[i].id);
						}
						this.changeProvinces(this. form.id_provinces);
						this.changeRegencies(this.form.id_regencies);
					}
				}
			},
			modelTempatStat(value){
				if(value === "success"){
					this.changeTempat(this.form.id_tempat);
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
				} else {
					this.$store.dispatch(this.kelas + '/create');
					this.title = 'Tambah ' + this.level2Title;
					this.titleDesc = 'Menambah ' + this.level2Title;
					this.titleIcon = 'icon-plus3';
				}

				this.$store.dispatch('provinces/get');
			},
			changeProvinces(id){
				this.$store.dispatch('regencies/getProvinces', id);
			},
			changeRegencies(id){
				this.$store.dispatch('tempat/get', id);
				this.tempatData = "";
			},
			changeTempat(id){
				if(id != 0){
					this.tempatData = _.find(this.modelTempat, function(o){
						return o.id == id;
					});
				}
			},
			save() {
				this.form.sasaran = this.sasaran;
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
			modalTutup() {
 				if(this.updateStat === 'success'){
					this.back();
				}

				this.modalShow = false;
			},
			modalImageShow(content){
				this.modalShow = true;
				this.modalState = 'image';
				this.modalContent = content;
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
			...mapGetters('diklatBKCU',{
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
			...mapGetters('tempat',{
				modelTempat: 'dataSForm',
				modelTempatStat: 'dataStatSForm',
			})
		}
	}
</script>