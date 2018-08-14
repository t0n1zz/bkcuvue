<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">

						<!-- identitas -->
						<div class="panel panel-flat border-top-xlg border-top-info">
							<div class="panel-body">
								<div class="row">

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">1</span> Identitas
											<small class="display-block">Identitas pengelola</small>
										</h6>
									</div>

									<form-identitas :form="form"></form-identitas>
								</div>
							</div>
						</div>

						<!-- lokasi -->
						<div class="panel panel-flat border-top-xlg border-top-info">
							<div class="panel-body">
								<div class="row">

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">2</span> Alamat & Kontak
											<small class="display-block">Domisili dan kontak pengelola</small>
										</h6>
									</div>

									<form-lokasi :form="form"></form-lokasi>

								</div>
							</div>
						</div>

						<!-- keluarga -->
						<div class="panel panel-flat border-top-xlg border-top-info" v-if="$route.meta.mode == 'create' && form.keluarga">
							<div class="panel-body">
								<div class="row">

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">3</span> Keluarga
											<small class="display-block">keluarga pengelola</small>
										</h6>
									</div>

									<!-- ayah -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.keluarga.ayah')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.keluarga.ayah')}">
												<i class="icon-cross2" v-if="errors.has('form.keluarga.ayah')"></i>
												Ayah:</h5>

											<!-- text -->
											<input type="text" name="ayah" class="form-control" placeholder="Silahkan masukkan nama ayah" v-validate="'required'" data-vv-as="Ayah" v-model="form.keluarga.ayah">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.keluarga.ayah')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.keluarga.ayah') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- ibu -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.keluarga.ibu')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.keluarga.ibu')}">
												<i class="icon-cross2" v-if="errors.has('form.keluarga.ibu')"></i>
												Ibu:</h5>

											<!-- text -->
											<input type="text" name="ibu" class="form-control" placeholder="Silahkan masukkan nama ibu" v-validate="'required'" data-vv-as="Ibu" v-model="form.keluarga.ibu">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.keluarga.ibu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.keluarga.ibu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- pasangan -->
									<div class="col-md-4" v-if="form.status == 'Menikah' || form.status == 'Duda/Janda'">
										<div class="form-group" :class="{'has-error' : errors.has('form.keluarga.pasangan')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.keluarga.pasangan')}">
												<i class="icon-cross2" v-if="errors.has('form.keluarga.pasangan')"></i>
												Pasangan:</h5>

											<!-- text -->
											<input type="text" name="pasangan" class="form-control" placeholder="Silahkan masukkan nama pasangan" v-validate="'required'" data-vv-as="Pasangan" v-model="form.keluarga.pasangan">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.keluarga.pasangan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.keluarga.pasangan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>
									
									<!-- anak -->
									<div class="col-md-4" v-if="form.status == 'Menikah' || form.status == 'Duda/Janda'" v-for="(anak,index) in formAnak">
										<div class="form-group">

											<!-- title -->
											<h5>Anak {{ index + 1}}:</h5>

											<div class="input-group">
												<!-- text -->
												<input type="text" name="anak" class="form-control" placeholder="Silahkan masukkan nama anak" v-model="anak.value">
												
												<div class="input-group-btn">
													<button class="btn btn-default" v-tooltip:top="'Hapus anak '" @click.prevent="removeAnak(index)">
														<i class="icon-cross"></i>
													</button>
												</div>
											</div>

											<small class="text-muted">&nbsp;</small>
										</div>
									</div>

									<!-- punya anak -->
									<div class="col-md-12" v-if="form.status == 'Menikah' || form.status == 'Duda/Janda'">
										<button class="btn btn-default btn-block" @click.prevent="addAnak()"><i class="icon-plus3"></i> 
											<span v-if="formAnak.length == 0">Punya Anak</span>
											<span v-else>Tambah Anak</span>
										</button>
									</div>
								</div>	
							</div>
						</div>
						
						<!-- anggota cu -->
						<div class="panel panel-flat border-top-xlg border-top-info" v-if="$route.meta.mode == 'create' && form.anggota_cu">
							<div class="panel-body">
								<div class="row">

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">4</span> Anggota CU
											<small class="display-block">Keanggotaan CU pengelola</small>
										</h6>
									</div>

									<form-anggota-cu :form="form" :modelCu="modelCu"></form-anggota-cu>

								</div>	
							</div>
						</div>

						<!-- pekerjaan -->
						<div class="panel panel-flat border-top-xlg border-top-info" v-if="$route.meta.mode == 'create' && form.pekerjaan">
							<div class="panel-body">
								<div class="row">

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">5</span> Jabatan
											<small class="display-block">Jabatan pengelola saat ini</small>
										</h6>
									</div>

									<form-pekerjaan :form="form" :modelCu="modelCu" :modelTp="modelTp"></form-pekerjaan>

								</div>
							</div>
						</div>

						<!-- pendidikan -->
						<div class="panel panel-flat border-top-xlg border-top-info" v-if="$route.meta.mode == 'create' && form.pendidikan">
							<div class="panel-body">
								<div class="row">

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">6</span> Pendidikan
											<small class="display-block">Pendidikan tertinggi pengelola</small>
										</h6>
									</div>

									<form-pendidikan :form="form"></form-pendidikan>

								</div>
							</div>
						</div>

						<!-- organisasi -->
						<div class="panel panel-flat border-top-xlg border-top-info" v-if="$route.meta.mode == 'create' && form.organisasi">
							<div class="panel-body">
								<div class="row">

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">7</span> Organisasi
											<small class="display-block">Keaktifan pengelola dalam organisasi</small>
										</h6>
									</div>

									<form-organisasi :form="form" :isAktif="true"></form-organisasi>

								</div>
							</div>
						</div>

						<!-- form info -->
						<form-info></form-info>	
						<br/>

						<!-- form button -->
						<div class="panel panel-flat panel-body">
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
	import corefunc from '../../assets/core/app.js';
	import pageHeader from "../../components/pageHeader.vue";
	import { toMulipartedForm } from '../../helpers/form';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formIdentitas from "./formIdentitas.vue";
	import formLokasi from "./formLokasi.vue";
	import formAnggotaCu from "./formAnggotaCu.vue";
	import formPekerjaan from "./formPekerjaan.vue";
	import formPendidikan from "./formPendidikan.vue";
	import formOrganisasi from "./formOrganisasi.vue";	
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';
	

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			formIdentitas,
			formLokasi,
			formAnggotaCu,
			formPekerjaan,
			formPendidikan,
			formOrganisasi,
			formButton,
			formInfo,
			Cleave
		},
		data() {
			return {
				title: '',
				titleDesc: '',
				titleIcon: '',
				kelas: 'pengelola',
				level2Title: 'Pengelola',
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
				formAnak: [],
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
			profileStat(value){ //jika refresh halaman maka reload profile
				if(value === "success"){
					if(this.profile.id_cu === 0){
						this.$store.dispatch('cu/getPus',this.profile.id_pus);
					}
					this.form.id_cu = this.profile.id_cu;

					// check permission
					if(this.$route.meta.mode === 'editIdentitas'){
						if(!this.profile.can || !this.profile.can['update_' + this.kelas]){
							this.$router.push({name: 'notFound'});
						}
					}else{
						if(!this.profile.can || !this.profile.can['create_' + this.kelas]){
							this.$router.push({name: 'notFound'});
						}
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
				this.title = 'Tambah ' + this.level2Title;
				this.titleDesc = 'Menambah ' + this.level2Title;
				this.titleIcon = 'icon-plus3';
				this.$store.dispatch(this.kelas + '/create');
				this.$store.dispatch('provinces/get');
			},
			save() {
				this.form.anak = this.formAnak;

				if(this.$route.meta.mode == 'create'){
					if(this.profile.id_cu == 0){
						if(this.form.pekerjaan.tipe == 0){
							this.form.pekerjaan.tipe = 3;
						}
					}else{
						this.form.pekerjaan.tipe = 1;
						this.form.pekerjaan.id_tempat = this.profile.id_cu;
					}
				}
				
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/store', formData);
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			back(){
				if(this.$route.meta.mode === 'editIdentitas' && this.profile.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.profile.id_cu}});
				}
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
			addAnak(){
				this.formAnak.push({});
			},
			removeAnak(index){
				this.formAnak.splice(index,1);
			},
			modalTutup() {
 				if(this.updateStat === 'success'){
					this.back();
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
			other() {
				// bootstrap select
				$('.bootstrap-select').selectpicker();
			}
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('pengelola',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('cu',{
				modelCu: 'dataS',
				modelCuStat: 'dataStatS',
			}),
			...mapGetters('tp',{
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
			}),
			modelPus() {
				return this.$store.getters.getPusS;
			}
		}
	}
</script>