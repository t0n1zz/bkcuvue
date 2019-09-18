<template>
	<div>

		<!-- page-header -->
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

									<!-- name -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.name')}">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i>
												Judul: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan judul artikel" v-validate="'required|min:5'" data-vv-as="Judul" v-model="form.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- utamakan -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.utamakan')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.utamakan')}">
												<i class="icon-cross2" v-if="errors.has('form.utamakan')"></i>
												Utamakan: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select name="utamakan" data-width="100%" class="form-control" v-model="form.utamakan" v-validate="'required'" data-vv-as="utamakan">
												<option disabled value="">Silahkan pilih tipe</option>
												<option value="1">Jadikan artikel utama</option>
												<option value="0">Tidak jadikan artikel utama</option>
											</select>


											<!-- error message -->
											<br/>
											<small class="text-muted text-danger" v-if="errors.has('form.utamakan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.utamakan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;
											</small>
										</div>
									</div>	

									<!-- gambar utama -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Gambar Utama:</h5>

											<!-- imageupload -->
											<app-image-upload :image_loc="'/images/artikel_simo/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
										</div>
									</div>

									<!-- separator -->
									<div class="col-md-12"><br/></div>

									<!-- ringkasan -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Ringkasan:</h5>

											<!-- editor -->
											<ckeditor type="classic" 
												v-model="form.ringkasan"></ckeditor>

										</div>
									</div>

									<!-- isi artikel -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Isi Artikel:</h5>

											<!-- editor -->
											<ckeditor type="classic" 
												v-model="form.content"
												:upload-adapter="UploadAdapter" ></ckeditor>

										</div>
									</div>

								</div>
								
							</div>
						</div>

						<!-- form info -->
						<form-info></form-info>	

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
			
			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- tambah penulis -->
			<template slot="modal-body1">
				<form-penulis 
				:id_cu="id_cu"
				@cancelClick="modalTutup"></form-penulis>
			</template>

			<!-- tambah kategori -->
			<template slot="modal-body2">
				<form-kategori
				:id_cu="id_cu"
				@cancelClick="modalTutup"></form-kategori>
			</template>]

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
	import { getLocalUser } from "../../helpers/auth";
	import { url_config } from '../../helpers/url.js';
	import wajibBadge from "../../components/wajibBadge.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			message,
			formButton,
			formInfo,
			wajibBadge
		},
		data() {
			return {
				title: 'Tambah Artikel SIMO',
				titleDesc: 'Menambah artikel simo baru',
				titleIcon: 'icon-plus3',
				level2Title: 'Artikel SIMO',
				kelas: 'artikelSimo',
				id_cu: '',
				utama: '',
				UploadAdapter: function (loader) {
          this.loader = loader
          this.upload = () => {
            const body = new FormData();
						const user = getLocalUser();
						let token = user.token;

						body.append('gambar', this.loader.file);
	
            return fetch(url_config.api_url + 'artikelSimo/upload', {
							headers: {"Authorization": 'Bearer ' + token},
              body: body,
              method: 'POST'
            })
						.then(response => response.json())
              .then(downloadUrl => {
                return {
									default: downloadUrl
								}
              })
              .catch(error => {
                console.log(error);
              });
          }
          this.abort = () => {
            console.log('Abort upload.')
          }
        },
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
				submitedKategori: false,
				submitedPenulis: false
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		created(){
			if(this.currentUser.id_cu === 0){
				if(this.modelCuStat != 'success'){
					this.$store.dispatch('cu/getHeader');
				}
			}
			if(this.$route.meta.mode !== 'edit' && this.form.id_cu === undefined){
				this.form.id_cu = this.currentUser.id_cu;
				this.changeCU(this.currentUser.id_cu);
			}
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
				if(this.currentUser.id_cu === 0){
					if(this.modelCuStat != 'success'){
						this.$store.dispatch('cu/getHeader');
					}
				}

				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
					this.title = 'Ubah Artikel SIMO';
					this.titleDesc = 'Mengubah artikel Simo';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah Artikel SIMO';
					this.titleDesc = 'Menambah artikel Simo';
					this.titleIcon = 'icon-plus3';
					this.$store.dispatch(this.kelas + '/create');
				}
			},
			save() {
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode === 'edit'){
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
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('artikelSimo',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>

<style lang="css" src="../../../../../public/css/admin/ckeditor-document-style.css" scoped>