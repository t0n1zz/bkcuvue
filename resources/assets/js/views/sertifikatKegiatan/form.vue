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
							<div class="card-body">	
								<div class="row">
									<!-- gambar utama -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											
											<h5>Gambar Depan:<wajib-ukuran></wajib-ukuran></h5>

											<!-- imageupload -->
											<app-image-upload :image_loc="'/images/sertifikatKegiatan/'" :image_temp="form.gambar_depan" v-model="form.gambar_depan"></app-image-upload>
										
										</div>
									</div>
									<!-- gambar utama -->
									<div class="col-md-12">
										<div class="form-group" >

											<!-- title -->
											
											<h5>Gambar Belakang:<wajib-ukuran></wajib-ukuran></h5>

											<!-- imageupload -->
											<app-image-upload :image_loc="'/images/sertifikatKegiatan/'" :image_temp="form.gambar_belakang" v-model="form.gambar_belakang" ></app-image-upload>
										</div>
									</div>

									<!-- kode -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.kode_sertifikat')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.kode_diklat')}">
												<i class="icon-cross2" v-if="errors.has('form.kode_sertifikat')"></i>
												Kode Sertifikat: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="kode_sertifikat" class="form-control" placeholder="Silahkan masukkan kode sertifikat" v-validate="'required|min:5'" data-vv-as="Kode Sertifikat" v-model="form.kode_sertifikat">
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.kode_sertifikat')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.kode_sertifikat') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- name -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.nama_kegiatan')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.name')}">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i>
												Nama: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama kegiatan" v-validate="'required|min:5'" data-vv-as="Nama" v-model="form.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group" :class="{'has-error' : errors.has('form.tipe')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.tipe')}">
												<i class="icon-cross2" v-if="errors.has('form.tipe')"></i>
												Tipe Sertifikat: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select class="form-control" name="tipe" v-model="form.tipe" data-width="100%" v-validate="'required'" data-vv-as="Tipe Tempat">
												<option disabled value="">Silahkan pilih tipe sertifikat</option>
												<option value="piagam">PIAGAM</option>
												<option value="diklat">SERTIFIKAT DIKLAT UMUM</option>
												<option value="rat">SERTIFIKAT RAT</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.tipe')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tipe') }}
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
	import { mapGetters } from 'vuex';
	import _ from 'lodash';
	import pageHeader from "../../components/pageHeader.vue";
	import infoIcon from "../../components/infoIcon.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import wajibUkuran from "../../components/wajibUkuran.vue";
	import { toMulipartedForm } from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import appModal from '../../components/modal';

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			message,
			formButton,
			formInfo,
			infoIcon,
			wajibBadge,
			wajibUkuran,
		},
		data() {
			return {
				title: 'Tambah Sertifikat Kegiatan',
				titleDesc: 'Menambah sertifikat kegiatan',
				titleIcon: 'icon-plus3',
				level: 2,
				level2Title: 'Sertifikat Kegiatan',
				kelas: 'sertifikatKegiatan',
				cancelState: 'methods',
				state: '',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalSize: '',
				submited: false,
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		watch: {
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
			},
    },
		methods: {
			fetch(){
				if(this.$route.meta.mode == 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
					this.title = 'Ubah Sertifikat Kegiatan';
					this.titleDesc = 'Mengubah sertifikat kegiatan';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah Sertifikat Kegiatan';
					this.titleDesc = 'Menambah sertifikat kegiatan';
					this.titleIcon = 'icon-plus3';
					this.$store.dispatch(this.kelas + '/create');
				}
			},
			save() {
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode == 'edit'){
							this.$store.dispatch(this.kelas + '/update',[this.$route.params.id, formData]);
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
			processFile(event) {
				this.form.gambar_depan = event.target.files[0];
				this.form.gambar_belakang = event.target.files[0];
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
		},
		computed: {
			...mapGetters('sertifikatKegiatan',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			})
		}
	}
</script>