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
												Nama: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama dokumen" v-validate="'required'" data-vv-as="Nama" v-model="form.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- CU -->
									<div class="col-md-6" v-if="currentUser.id_cu === 0">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_cu')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_cu')}">
												<i class="icon-cross2" v-if="errors.has('form.id_cu')"></i>
												CU: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select class="form-control" name="id_cu" v-model="form.id_cu" data-width="100%" v-validate="'required'" data-vv-as="CU" :disabled="modelCU.length === 0" @change="changeCU($event.target.value)">
												<option disabled value="">
													<span v-if="modelCUStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih CU</span>
												</option>
												<option value="0"><span v-if="currentUser.pus">{{currentUser.pus.name}}</span> <span v-else>PUSKOPCUINA</span></option>
												<option v-for="(cu, index) in modelCU" :value="cu.id" :key="index">{{cu.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_cu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_cu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kategori -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_dokumen_kategori')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_dokumen_kategori')}">
												<i class="icon-cross2" v-if="errors.has('form.id_dokumen_kategori')"></i>
												Kategori: <wajib-badge></wajib-badge>
											</h5>

											<div class="input-group">

												<!-- select -->
												<select class="form-control" name="id_dokumen_kategori" v-model="form.id_dokumen_kategori" data-width="100%" :disabled="modelKategori.length === 0" v-validate="'required'" data-vv-as="Kategori">
													<option disabled value="">
														<span v-if="form.id_cu != 0 && modelKategori.length == 0">Silahkan tambah kategori baru</span>
														<span v-else>
															<span v-if="modelKategoriStat === 'loading'">Mohon tunggu...</span>
															<span v-else>Silahkan pilih kategori</span>
														</span>
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

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_cu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_cu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- status -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.status')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.status')}">
												<i class="icon-cross2" v-if="errors.has('form.status')"></i>
												Status: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select name="status" data-width="100%" class="form-control" v-model="form.status">
												<option disabled value="">Silahkan pilih status</option>
												<option value="PUBLIK">PUBLIK - Dapat dilihat semua user SIMO dan di website</option>
												<option value="GERAKAN">GERAKAN - Dapat dilihat semua user SIMO</option>
												<option value="INTERNAL">INTERNAL - Hanya dilihat oleh semua user lembaga/CU yang membuat dokumen ini</option>
											</select>

											<!-- error message -->
											<br/>
											<small class="text-muted text-danger" v-if="errors.has('form.status')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.status') }}
											</small>
											<small class="text-muted" v-else>&nbsp;
											</small>
										</div>
									</div>

									<!-- keterangan -->
									<div class="col-md-12">
										<div class="form-group">
											<!-- title -->
											<h5> Keterangan: </h5>

											<!-- textarea -->
											<textarea rows="5" type="text" name="keterangan" class="form-control" placeholder="Silahkan masukkan keterangan " v-model="form.keterangan"></textarea>

										</div>
									</div>

									<!-- format -->
									<div class="col-md-12">
										<div class="form-group" :class="{'has-error' : errors.has('form.format')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.format')}">
												<i class="icon-cross2" v-if="errors.has('form.format')"></i>
												Pilih Format: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select class="form-control" name="format" v-model="form.format" data-width="100%" v-validate="'required'" data-vv-as="format">
												<option disabled value="">Silahkan pilih format</option>
												<option value="upload">Upload</option>
												<option value="link">Link</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.format')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.format') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- upload -->
									<div class="col-md-12">
										<div class="form-group" v-if="form.format == 'upload'">

											<!-- title -->
											<h5> Upload dokumen: <wajib-badge></wajib-badge></h5>

											<!-- textarea -->
											<div class="card-card-body">
												<input type="file" accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.presentationml.slideshow, text/plain, application/pdf, image/*" class="form-control" @change="upload" ref="fileInput">
											</div>
											<small class="text-muted">File yang diterima adalah Word, Excel, Powerpoint, PDF dan gambar/foto</small>

										</div>
										<div class="form-group" v-else-if="form.format == 'link'">

											<!-- title -->
											<h5>Link dokumen: </h5>

											<!-- textarea -->
											<input type="text" name="link" class="form-control" placeholder="Silahkan masukkan link" v-model="form.link">
											<small class="text-muted">Silahkan masukkan link ke dokumen</small>

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

			<!-- tambah kategori -->
			<template slot="modal-body2">
				<form-kategori
				:id_cu="id_cu"
				@cancelClick="modalTutup"></form-kategori>
			</template>

		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import { toMulipartedForm } from '../../helpers/form';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import formKategori from "./formKategori.vue";
	import wajibBadge from "../../components/wajibBadge.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			formButton,
			formInfo,
			formKategori,
			wajibBadge
		},
		data() {
			return {
				title: 'Tambah Dokumen',
				titleDesc: 'Menambah dokumen baru',
				titleIcon: 'icon-plus3',
				level2Title: 'Dokumen',
				kelas: 'dokumen',
				id_cu: '',
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
			formStat(value){
				if(value === "success"){
					if(this.$route.meta.mode !== 'edit'){
						this.form.id_cu = this.currentUser.id_cu;
					}else{
						this.checkUser('update_dokumen',this.form.id_cu);
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
					this.$store.dispatch('dokumenKategori/getCu', this.id_cu);
					this.form.id_dokumen_kategori = this.updateKategoriResponse.id;
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
					this.$store.dispatch('dokumenPenulis/getCu', this.id_cu);	
					this.form.id_dokumen_penulis = this.updatePenulisResponse.id;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updatePenulisResponse.message;
				}
			}
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
					this.title = 'Ubah Dokumen';
					this.titleDesc = 'Mengubah dokumen';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah Dokumen';
					this.titleDesc = 'Menambah dokumen';
					this.titleIcon = 'icon-plus3';
					this.$store.dispatch(this.kelas + '/create');
				}
			},
			checkUser(permission,id_cu){
				if(this.currentUser){
					if(!this.currentUser.can || !this.currentUser.can[permission]){
						this.$router.push('/notFound');
					}
					if(!id_cu || this.currentUser.id_cu){
						if(this.currentUser.id_cu != 0 && this.currentUser.id_cu != id_cu){
							this.$router.push('/notFound');
						}
					}
				}
			},
			upload(e) {
				let files = e.target.files || e.dataTransfer.files;
				if (!files.length)
					return
				this.form.content = files[0];
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
				this.$store.dispatch('dokumenKategori/getCu', id);
			},
			back(){
				if(this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu:'semua'}});
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
			modalOpen_Kategori() {
				this.id_cu = this.form.id_cu;

				this.modalShow = true;
				this.modalState = 'normal2';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Tambah kategori dokumen';
			},
			processFile(event) {
				this.form.gambar = event.target.files[0]
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
			}),
			...mapGetters('dokumen',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('dokumenKategori',{
				modelKategori: 'dataS',
				modelKategoriStat: 'dataStatS',
				updateKategoriResponse: 'update',
				updateKategoriStat: 'updateStat',
			}),
		}
	}
</script>