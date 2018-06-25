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

						<!-- main form -->
						<div class="panel panel-flat">
							<div class="panel-body">
									<div class="row">

										<!-- gambar utama -->
										<div class="col-md-12">
											<div class="form-group">

												<!-- title -->
												<h5>Foto:</h5>

												<!-- imageupload -->
												<app-image-upload :image_loc="'/images/artikel/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
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
												<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama penulis artikel" v-validate="'required|min:5'" data-vv-as="Nama" v-model="form.name">

												<!-- error message -->
												<small class="text-muted text-danger" v-if="errors.has('form.name')">
													<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
												</small>
												<small class="text-muted" v-else>&nbsp;</small>
											</div>
										</div>

										<!-- CU -->
										<div class="col-md-4" v-if="profile.id_cu === 0">
											<div class="form-group" :class="{'has-error' : errors.has('form.id_cu')}">

												<!-- title -->
												<h5 :class="{ 'text-danger' : errors.has('form.id_cu')}">
													<i class="icon-cross2" v-if="errors.has('form.id_cu')"></i>
													CU:
												</h5>

												<!-- select -->
												<select class="bootstrap-select" name="id_cu" v-model="form.id_cu" data-width="100%" v-validate="'required'" data-vv-as="CU" :disabled="modelCU.length === 0">
													<option disabled value="">Silahkan pilih CU</option>
													<option value="0"><span v-if="profile.pus">{{profile.pus.name}}</span> <span v-else>Puskopdit</span></option>
													<option data-divider="true"></option>
													<option v-for="cu in modelCU" :value="cu.id">{{cu.name}}</option>
												</select>

												<!-- error message -->
												<small class="text-muted text-danger" v-if="errors.has('form.id_cu')">
													<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_cu') }}
												</small>
												<small class="text-muted" v-else>&nbsp;</small>
											</div>
										</div>

										<!-- deskripsi -->
										<div class="col-md-12">
											<div class="form-group" :class="{'has-error' : errors.has('form.deskripsi')}">

												<!-- title -->
												<h5 :class="{ 'text-danger' : errors.has('form.deskripsi')}">
													<i class="icon-cross2" v-if="errors.has('form.deskripsi')"></i>
													Profil:
												</h5>

												<!-- textarea -->
												<textarea rows="5" type="text" name="penulisDeskripsi" class="form-control" placeholder="Silahkan masukkan profil penulis" v-validate="'required|min:5'" data-vv-as="Profil" v-model="form.deskripsi"></textarea>

												<!-- error message -->
												<small class="text-muted text-danger" v-if="errors.has('form.deskripsi')">
													<i class="icon-arrow-small-right"></i> {{ errors.first('form.deskripsi') }}
												</small>
												<small class="text-muted" v-else>&nbsp;
												</small>
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
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			message,
			formButton,
			formInfo,
		},
		data() {
			return {
				title: 'Tambah Penulis',
				titleDesc: 'Menambah penulis artikel baru',
				titleIcon: 'icon-plus3',
				kelas: 'artikelPenulis',
				level2Title: 'Penulis Artikel',
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
			profileStat(value){ //jika refresh halaman maka reload profile
				if(value === "success"){
					if(this.profile.id_cu == 0){
						this.$store.dispatch('cu/getPus',this.profile.id_pus);
					}else{
						this.form.id_cu = this.profile.id_cu;
					}
				}
			},
			formStat(value){
				if(value === "success"){
					if(this.$route.meta.mode != 'edit' && this.profile.id_cu != 0){
						this.form.id_cu = this.profile.id_cu;
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
				if(this.profile.id_cu == 0){
					this.$store.dispatch('cu/getPus',this.profile.id_pus);
				}

				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
					this.title = 'Ubah Penulis Artikel';
					this.titleDesc = 'Mengubah Penulis artikel';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah Penulis Artikel';
					this.titleDesc = 'Menambah Penulis artikel';
					this.titleIcon = 'icon-plus3';
					this.$store.dispatch(this.kelas + '/create');
				}
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
				if(this.$route.meta.mode == 'edit' && this.profile.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu}});
				}else{
					if(this.profile.id_cu == 0){
						if(this.form.id_cu == 0){
							this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu}});
						}else{
							this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu}});
						}
					}else{
						this.$router.push({name: this.kelas + 'Cu', params:{cu: this.profile.id_cu}});
					}
				}
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
			processFile(event) {
				this.form.gambar = event.target.files[0]
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
			...mapGetters('artikelPenulis',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('cu',{
				modelCU: 'dataS',
				modelCUStat: 'dataStatS',
			}),
			modelPus() {
				return this.$store.getters.getPusS;
			}
		}
	}
</script>