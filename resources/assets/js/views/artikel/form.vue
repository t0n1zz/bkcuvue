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
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.name')}">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i>
												Judul:</h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan judul artikel" v-validate="'required|min:5'" data-vv-as="Judul" v-model="form.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- CU -->
									<div class="col-md-4" v-if="currentUser.id_cu === 0">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_cu')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_cu')}">
												<i class="icon-cross2" v-if="errors.has('form.id_cu')"></i>
												CU:
											</h5>

											<!-- select -->
											<select class="form-control" name="id_cu" v-model="form.id_cu" data-width="100%" v-validate="'required'" data-vv-as="CU" :disabled="modelCU.length === 0" @change="changeCU($event.target.value)">
												<option disabled value="">Silahkan pilih CU</option>
												<option value="0"><span v-if="currentUser.pus">{{currentUser.pus.name}}</span> <span v-else>Puskopdit</span></option>
												<option v-for="cu in modelCU" :value="cu.id">{{cu.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_cu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_cu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- penulis -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_artikel_penulis')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_artikel_penulis')}">
												<i class="icon-cross2" v-if="errors.has('form.id_artikel_penulis')"></i>
												Penulis:
											</h5>

											<!-- loading -->
											<div v-if="modelPenulisStat === 'loading'">
													<i class="icon-spinner spinner"></i>
											</div>

											<!-- success -->
											<div v-else>
												<div class="input-group">

													<!-- select -->
													<select class="form-control"  name="id_artikel_penulis" v-model="form.id_artikel_penulis" data-width="100%" v-validate="'required'" data-vv-as="Penulis" :disabled="modelPenulis.length === 0">
														<option disabled value="">
															<span v-if="form.id_cu != 0 && modelPenulis.length == 0">Silahkan tambah penulis baru</span>
															<span v-else-if="form.id_cu == '' && modelPenulis.length == 0">Silahkan pilih CU terlebih dahulu</span>
															<span v-else>
																Silahkan pilih penulis
															</span>
														</option>
														<option v-for="penulis in modelPenulis" v-if="penulis" :value="penulis.id">{{penulis.name}}</option>
													</select>

													<!-- button -->
													<div class="input-group-append">
														<button type="button" class="btn btn-light" @click="modalOpen_Penulis" :disabled="form.id_cu === ''">
															<i class="icon-plus22"></i>
														</button>
													</div>
												</div>
											</div>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_cu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_cu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kategori -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_artikel_kategori')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_artikel_kategori')}">
												<i class="icon-cross2" v-if="errors.has('form.id_artikel_kategori')"></i>
												Kategori:
											</h5>

											<!-- loading -->
											<div v-if="modelKategoriStat === 'loading'">
													<i class="icon-spinner spinner"></i>
											</div>

											<!-- sucess -->
											<div v-else>
												<div class="input-group">

													<!-- select -->
													<select class="form-control" name="id_artikel_kategori" v-model="form.id_artikel_kategori" data-width="100%" :disabled="modelKategori.length === 0" v-validate="'required'" data-vv-as="Kategori">
														<option disabled value="">
															<span v-if="form.id_cu != 0 && modelKategori.length == 0">Silahkan tambah kategori baru</span>
															<span v-else>Silahkan pilih kategori</span>
														</option>
														<option v-for="kategori in modelKategori" v-if="kategori" :value="kategori.id">{{kategori.name}}</option>
													</select>

													<!-- button -->
													<div class="input-group-append">
														<button type="button" class="btn btn-light" :disabled="form.id_cu === ''" @click="modalOpen_Kategori">
															<i class="icon-plus22"></i>
														</button>
													</div>
												</div>
											</div>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_cu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_cu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- terbitkan -->
									<div class="col-md-4" v-if="currentUser.can && currentUser.can['terbitkan_' + kelas]">
										<div class="form-group" :class="{'has-error' : errors.has('form.terbitkan')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.terbitkan')}">
												<i class="icon-cross2" v-if="errors.has('form.terbitkan')"></i>
												Status Penerbitan:
											</h5>

											<!-- select -->
											<select name="terbitkan" data-width="100%" class="form-control" v-model="form.terbitkan">
												<option disabled value="">Silahkan pilih CU</option>
												<option value="1">Terbitkan artikel</option>
												<option value="0">Tidak Terbitkan artikel</option>
											</select>

											<!-- error message -->
											<br/>
											<small class="text-muted text-danger" v-if="errors.has('form.terbitkan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.terbitkan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;
											</small>
										</div>
									</div>

									<!-- utamakan -->
									<div class="col-md-4" v-if="currentUser.can && currentUser.can['utamakan_' + kelas]">
										<div class="form-group" :class="{'has-error' : errors.has('form.utamakan')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.utamakan')}">
												<i class="icon-cross2" v-if="errors.has('form.utamakan')"></i>
												Utamakan:
											</h5>

											<!-- select -->
											<select name="utamakan" data-width="100%" class="form-control" v-model="form.utamakan">
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
											<app-image-upload :image_loc="'/images/artikel/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
										</div>
									</div>

									<!-- separator -->
									<div class="col-md-12"><br/></div>

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
	import formKategori from "./formKategori.vue";
	import formPenulis from "./formPenulis.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			message,
			formButton,
			formInfo,
			formKategori,
			formPenulis
		},
		data() {
			return {
				title: 'Tambah Artikel',
				titleDesc: 'Menambah artikel baru',
				titleIcon: 'icon-plus3',
				level2Title: 'Artikel',
				kelas: 'artikel',
				id_cu: '',
				utama: '',
				UploadAdapter: function (loader) {
          this.loader = loader
          this.upload = () => {
            const body = new FormData();
						body.append('gambar', this.loader.file);

						let token = window.localStorage.getItem('token');
						
            return fetch('https://bkcuvue.test/api/v1/artikel/upload', {
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
				this.$store.dispatch('cu/getPus',this.currentUser.id_pus);
			}
			if(this.$route.meta.mode !== 'edit' && this.form.id_cu === undefined){
				this.form.id_cu = this.currentUser.id_cu;
				this.changeCU(this.currentUser.id_cu);
			}
		},
		watch: {
			formStat(value){
				if(value === "success"){
					if(this.$route.meta.mode !== 'edit'){
						this.form.id_cu = this.currentUser.id_cu;
					}
					if(this.form.id_cu !== undefined){
						this.changeCU(this.form.id_cu);
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
			},
			updateKategoriStat(value){
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateKategoriResponse.message;
					this.$store.dispatch('artikelKategori/getCu', this.id_cu);
					this.form.id_artikel_kategori = this.updateKategoriResponse.id;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateKategoriResponse.message;
				}
			},
			updatePenulisStat(value){
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updatePenulisResponse.message;
					this.$store.dispatch('artikelPenulis/getCu', this.id_cu);	
					this.form.id_artikel_penulis = this.updatePenulisResponse.id;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updatePenulisResponse.message;
				}
			}
    },
		methods: {
			fetch(){
				if(this.currentUser.id_cu === 0){
					this.$store.dispatch('cu/getPus',this.currentUser.id_pus);
				}

				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
					this.title = 'Ubah Artikel';
					this.titleDesc = 'Mengubah artikel';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah Artikel';
					this.titleDesc = 'Menambah artikel';
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
			changeCU(id){
				this.$store.dispatch('artikelPenulis/getCu', id);	
				this.$store.dispatch('artikelKategori/getCu', id);
			},
			back(){
				if(this.$route.meta.mode === 'edit' && this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu}});
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
			modalOpen_Penulis(){
				this.id_cu = this.form.id_cu;

				this.modalShow = true;
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Tambah penulis artikel';
			},
			modalOpen_Kategori() {
				this.id_cu = this.form.id_cu;

				this.modalShow = true;
				this.modalState = 'normal2';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Tambah kategori artikel';
			},
			processFile(event) {
				this.form.gambar = event.target.files[0]
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('artikel',{
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
			...mapGetters('artikelKategori',{
				modelKategori: 'dataS',
				modelKategoriStat: 'dataStatS',
				updateKategoriResponse: 'update',
				updateKategoriStat: 'updateStat',
			}),
			...mapGetters('artikelPenulis',{
				modelPenulis: 'dataS',
				modelPenulisStat: 'dataStatS',
				updatePenulisResponse: 'update',
				updatePenulisStat: 'updateStat',
			}),
			modelPus() {
				return this.$store.getters.getPusS;
			}
		}
	}
</script>

<style lang="css" src="../../../../../public/css/admin/ckeditor-document-style.css" scoped>