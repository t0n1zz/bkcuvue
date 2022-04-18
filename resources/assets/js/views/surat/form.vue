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

								<!-- tipe -->
								<div class="row" v-if="$route.meta.mode !== 'edit'">
									<div class="col-md-12">
										<div class="form-group mb-0" :class="{'has-error' : errors.has('form.id_surat_kode')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_surat_kode')}">
												<i class="icon-cross2" v-if="errors.has('form.id_surat_kode')"></i>
												Tipe Surat: <wajib-badge></wajib-badge>
											</h5>

											<div class="input-group">

												<!-- select -->
												<select class="form-control" name="id_surat_kode" v-model="form.id_surat_kode" data-width="100%" v-validate="'required'" data-vv-as="Tipe" @change="changeKode($event.target.value)">
													<option disabled value="">
														<span>
															<span v-if="formStat === 'loading'">Mohon tunggu...</span>
															<span v-else>Silahkan pilih tipe surat</span>
														</span>
													</option>
													<option v-for="kode in modelKode" v-if="kode" :value="kode.id">{{kode.name}} / {{kode.periode}} / No. {{kode.kode}}</option>
												</select>

											</div>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_surat_kode')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_surat_kode') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>
								</div>

								<div v-if="itemDataStat == 'loading'">
									<div class="card">
										<div class="card-body">
											<h4>Mohon tunggu...</h4>
											<div class="progress">
												<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
													<span class="sr-only">100% Complete</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div v-if="itemDataStat == 'success'">
									<div class="row" v-if="form.id_surat_kode != ''">
										
										<div class="col-md-12" v-if="$route.meta.mode !== 'edit'">
											<hr class="mt-0" />
											<div class="alert bg-warning alert-styled-left">
												<h3>Sisa waktu: {{ timerCount }} detik</h3>
												<h6>Perhatian nomor surat ini hanya tersedia untuk anda selama 30 menit (1800 detik) sejak anda melihat pesan ini, pastikan anda meminta nomor surat ketika surat sudah siap untuk di kirim.</h6>
											</div>
										</div>

										<!-- kategori -->
										<div class="col-md-12">
											<div class="form-group" :class="{'has-error' : errors.has('form.id_surat_kategori')}">

												<!-- title -->
												<h5 :class="{ 'text-danger' : errors.has('form.id_surat_kategori')}">
													<i class="icon-cross2" v-if="errors.has('form.id_surat_kategori')"></i>
													Kategori: <wajib-badge></wajib-badge>
												</h5>

												<div class="input-group">

													<!-- select -->
													<select class="form-control" name="id_surat_kategori" v-model="form.id_surat_kategori" data-width="100%" v-validate="'required'" data-vv-as="Kategori" @change="changeKategori($event.target.value)">
														<option disabled value="">
															<span>
																<span v-if="formStat === 'loading'">Mohon tunggu...</span>
																<span v-else>Silahkan pilih kategori</span>
															</span>
														</option>
														<option v-for="kategori in itemData.kategori" v-if="kategori" :value="kategori.id">{{kategori.name}}</option>
													</select>

												</div>

												<!-- error message -->
												<small class="text-muted text-danger" v-if="errors.has('form.id_surat_kategori')">
													<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_surat_kategori') }}
												</small>
												<small class="text-muted" v-else>&nbsp;</small>
											</div>
										</div>

										<!-- name -->
										<div class="col-md-12">
											<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

												<!-- title -->
												<h5 :class="{ 'text-danger' : errors.has('form.name')}">
													<i class="icon-cross2" v-if="errors.has('form.name')"></i>
													Kode: <wajib-badge></wajib-badge></h5>

												<!-- text -->
												<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan kode" data-vv-as="name" v-model="form.name" readonly>

												<!-- error message -->
												<small class="text-muted text-danger" v-if="errors.has('form.name')">
													<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
												</small>
												<small class="text-muted" v-else>&nbsp;</small>
											</div>
										</div>

										<!-- hal -->
										<div class="col-md-6">
											<div class="form-group" :class="{'has-error' : errors.has('form.hal')}">

												<!-- title -->
												<h5 :class="{ 'text-danger' : errors.has('form.hal')}">
													<i class="icon-cross2" v-if="errors.has('form.hal')"></i>
													Hal: <wajib-badge></wajib-badge></h5>

												<!-- text -->
												<input type="text" name="hal" class="form-control" placeholder="Silahkan masukkan hal" data-vv-as="hal" v-model="form.hal">

												<!-- error message -->
												<small class="text-muted text-danger" v-if="errors.has('form.hal')">
													<i class="icon-arrow-small-right"></i> {{ errors.first('form.hal') }}
												</small>
												<small class="text-muted" v-else>&nbsp;</small>
											</div>
										</div>

										<!-- perihal -->
										<div class="col-md-6">
											<div class="form-group" :class="{'has-error' : errors.has('form.perihal')}">

												<!-- title -->
												<h5 :class="{ 'text-danger' : errors.has('form.perihal')}">
													<i class="icon-cross2" v-if="errors.has('form.perihal')"></i>
													Perihal: <wajib-badge></wajib-badge></h5>

												<!-- text -->
												<input type="text" name="perihal" class="form-control" placeholder="Silahkan masukkan perihal" data-vv-as="perihal" v-model="form.perihal">

												<!-- error message -->
												<small class="text-muted text-danger" v-if="errors.has('form.perihal')">
													<i class="icon-arrow-small-right"></i> {{ errors.first('form.perihal') }}
												</small>
												<small class="text-muted" v-else>&nbsp;</small>
											</div>
										</div>

										<!-- format -->
										<div class="col-md-12" v-if="$route.meta.mode != 'edit'">
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
										<div class="col-md-12" v-if="$route.meta.mode != 'edit'">
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
						</div>

						<div v-if="itemDataStat == 'success'">
							<div v-if="form.id_surat_kode != ''">
								<!-- form info -->
								<form-info></form-info>	

								<!-- form button -->
								<div class="card card-body">
									<form-button
										:cancelState="'methods'"
										:formValidation="'form'"
										@cancelClick="back"></form-button>
								</div>
							</div>
							
						</div>

						<!-- form button -->
						<div class="card card-body" v-if="form.id_surat_kode == ''">
							<form-button
								:cancelState="'methods'"
								:isSingleButton="true"
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
	import _ from 'lodash';
	import pageHeader from "../../components/pageHeader.vue";
	import { toMulipartedForm } from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
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
				title: 'Tambah Surat',
				titleDesc: 'Menambah surat keluar baru',
				titleIcon: 'icon-plus3',
				level2Title: 'Surat',
				kelas: 'surat',
				id_cu: '',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
				timerCount: 0,
				timerEnabled: false,
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
			}
		},
		watch: {
			formStat(value){
				if(value === "success"){
					if(this.$route.meta.mode !== 'edit'){
						this.form.id_cu = this.currentUser.id_cu;
					}else{
						this.checkUser('update_surat',this.form.id_cu);
					}
				}
			},
			itemDataStat(value){
				if(value === "success"){
					this.timerCount = this.itemData.waktu;
					this.timerEnabled = true;
				}
			},
			timerCount: {
				handler(value) {
					if (value > 0 && this.timerEnabled) {
							setTimeout(() => {
									this.timerCount--;
							}, 1000);
					}
				},
				immediate: true // This ensures the watcher is triggered upon creation
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
					this.title = 'Ubah Surat Keluar';
					this.titleDesc = 'Mengubah surat keluar';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah Surat Keluar';
					this.titleDesc = 'Menambah surat keluar';
					this.titleIcon = 'icon-plus3';
					this.$store.dispatch(this.kelas + '/create');
					this.$store.dispatch('suratKode/get');	
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
			changeKode(value){
				if(this.$route.meta.mode !== 'edit'){
					this.$store.dispatch(this.kelas + '/getKode', value);
				}
			},
			changeKategori(value){
				let _kategori = '';
				_kategori = _.find(this.itemData.kategori,{'id': parseInt(value)});

				this.form.name = this.itemData.kode + '/' + _kategori.name + '/' + this.itemData.bulan + '/' + this.itemData.periode;
			},
			upload(e) {
				let files = e.target.files || e.dataTransfer.files;
				if (!files.length)
					return
				this.form.content = files[0];
			},
			save() {
				this.form.id_surat_kode = this.itemData.suratKode.id;
				this.form.kode = this.itemData.kode;
				this.form.periode = this.itemData.periode;
				this.form.bulan = this.itemData.bulan;
				this.form.tipe = this.itemData.suratKode.name;

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
				this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu, periode: this.momentYear() }});
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
			momentYear(){
				return moment().year();
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('surat',{
				form: 'data',
				formStat: 'dataStat',
				itemData: 'data2',
				itemDataStat: 'dataStat2',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('suratKode',{
				modelKode: 'dataS',
				modelKodeStat: 'dataStatS',
			}),
			...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
			}),
		}
	}
</script>