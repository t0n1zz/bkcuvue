<template>
	<div>
		<!-- page-header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" :level2Route="kelas"></page-header>

		<!-- content -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">

						<!-- main form -->
						<div class="panel panel-flat border-left-xlg border-left-info">
							<div class="panel-body">
								
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
									<div class="col-md-4" v-if="userData.id_cu === 0">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_cu')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_cu')}">
												<i class="icon-cross2" v-if="errors.has('form.id_cu')"></i>
												CU:
											</h5>

											<!-- select -->
											<select class="bootstrap-select" name="id_cu" v-model="form.id_cu" data-width="100%" v-validate="'required'" data-vv-as="CU" :disabled="modelCU.length === 0" @change="changeCU($event.target.value)">
												<option disabled value="">Silahkan pilih CU</option>
												<option value="0"><span v-if="userData.pus">{{userData.pus.name}}</span> <span v-else>Puskopdit</span></option>
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
													<select class="bootstrap-select"  name="id_artikel_penulis" v-model="form.id_artikel_penulis" data-width="100%" v-validate="'required'" data-vv-as="Penulis" :disabled="modelPenulis.length === 0">
														<option disabled value="">
															<span v-if="form.id_cu !== 0 && modelPenulis.length === 0">Silahkan tambah penulis baru</span>
															<span v-else-if="form.id_cu === 0">Silahkan pilih CU terlebih dahulu</span>
															<span v-else>
																Silahkan pilih penulis
															</span>
														</option>
														<option data-divider="true"></option>
														<option v-for="penulis in modelPenulis" :value="penulis.id">{{penulis.name}}</option>
													</select>

													<!-- button -->
													<div class="input-group-btn">
														<button type="button" class="btn btn-default" v-tooltip:top="'Tambah Penulis'" @click="modalOpen_Penulis" :disabled="form.id_cu === ''">
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
													<select class="bootstrap-select" name="id_artikel_kategori" v-model="form.id_artikel_kategori" data-width="100%" :disabled="modelKategori.length === 0" v-validate="'required'" data-vv-as="Kategori">
														<option disabled value="">
															<span v-if="form.id_cu !== 0 && modelKategori.length === 0">Silahkan tambah kategori baru</span>
															<span v-else>Silahkan pilih kategori</span>
														</option>
														<option data-divider="true"></option>
														<option v-for="kategori in modelKategori" :value="kategori.id">{{kategori.name}}</option>
													</select>

													<!-- button -->
													<div class="input-group-btn">
														<button type="button" class="btn btn-default" v-tooltip:top="'Tambah Kategori'" :disabled="form.id_cu === ''" @click="modalOpen_Kategori">
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

									<!-- separator -->
									<div class="col-md-12"><br/></div>

									<!-- terbitkan -->
									<div class="col-md-4" v-if="userData.can && userData.can['terbitkan ' + kelas]">
										<div class="form-group" :class="{'has-error' : errors.has('form.terbitkan')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.terbitkan')}">
												<i class="icon-cross2" v-if="errors.has('form.terbitkan')"></i>
												Status Penerbitan:
											</h5>

											<!-- radio -->
											<label class="radio-inline">
												<input type="radio" name="terbitkan" value="1" v-validate="'required|in:1,0'" data-vv-as="Status Penerbitan"
												v-model="form.terbitkan"> Ya
											</label>
											<label class="radio-inline">
												<input type="radio" name="terbitkan" value="0" v-model="form.terbitkan"> Tidak
											</label>

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
									<div class="col-md-4" v-if="userData.can && userData.can['utamakan ' + kelas]">
										<div class="form-group" :class="{'has-error' : errors.has('form.utamakan')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.utamakan')}">
												<i class="icon-cross2" v-if="errors.has('form.utamakan')"></i>
												Utamakan:
											</h5>

											<!-- radio -->
											<label class="radio-inline">
												<input type="radio" name="utamakan" :value="1" v-validate="'required|in:1,0'" data-vv-as="Utamakan" v-model="form.utamakan"> Ya
											</label>
											<label class="radio-inline">
												<input type="radio" name="utamakan" :value="0" v-model="form.utamakan"> Tidak
											</label>

											<!-- error message -->
											<br/>
											<small class="text-muted text-danger" v-if="errors.has('form.utamakan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.utamakan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;
											</small>
										</div>
									</div>

									<!-- separator -->
									<div class="col-md-12"><br/></div>

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

											<!-- summernote -->
											<app-summernote name="editor" :model="form.content" :config="summernoteconfig" @change="value => { form.content = value }"></app-summernote>
										</div>
									</div>
								</div>
								
							</div>
						</div>

						<!-- form info -->
						<form-info></form-info>	
						<br/>

						<!-- form button -->
						<div class="panel panel-flat">
							<div class="panel-body">
								<div class="row">
									<form-button
										:cancelLink="kelas"
										:formValidation="'form'"></form-button>
								</div>
							</div>
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
	import corefunc from '../../assets/core/app.js';
	import pageHeader from "../../components/pageHeader.vue";
	import { toMulipartedForm } from '../../helpers/form';
	import appSummernote from '../../helpers/summernote.js';
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
			appSummernote,
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
		mounted() {
			corefunc.core_function();
			this.other();
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
		},
		watch: {
			userDataStat(value){ //jika refresh halaman maka reload userData
				if(value === "success"){
					if(this.userData.id_cu === 0){
						this.$store.dispatch('cu/getPus',this.userData.id_pus);
					}
					if(this.$route.meta.mode !== 'edit' && this.form.id_cu === undefined){
						this.form.id_cu = this.userData.id_cu;
						this.changeCU(this.userData.id_cu);
					}
				}
			},
			formStat(value){
				if(value === "success"){
					if(this.$route.meta.mode !== 'edit'){
						this.form.id_cu = this.userData.id_cu;
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
					this.$store.dispatch('loadArtikelKategoriCU', this.id_cu);
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
					this.$store.dispatch('loadArtikelPenulisCU', this.id_cu);	
					this.form.id_artikel_penulis = this.updatePenulisResponse.id;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updatePenulisResponse.message;
				}
			}
    },
		methods: {
			fetch(){
				if(this.userData.id_cu === 0){
					this.$store.dispatch('cu/getPus',this.userData.id_pus);
				}

				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
					this.title = 'Ubah Artikel';
					this.titleDesc = 'Mengubah artikel';
					this.titleIcon = 'icon-pencil5';
				} else {
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
				this.$store.dispatch('artikelPenulis/getCU', id);	
				this.$store.dispatch('artikelKategori/getCU', id);
			},
			modalTutup() {
 				if(this.updateStat === 'success'){
					this.$router.push({name: this.kelas});
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
				console.log(event.target.files[0].name);
			},
			other() {
				// bootstrap select
				$('.bootstrap-select').selectpicker();
			}
		},
		computed: {
			...mapGetters('user',{
				userData: 'data',
				userDataStat: 'dataStat'
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