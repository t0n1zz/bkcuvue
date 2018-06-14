<template>
	<div>
		<!-- page header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">
						<div class="panel panel-flat">
							<div class="panel-body">
								
								<div class="row">

									<!-- foto -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Foto:</h5>

											<!-- imageupload -->
											<app-image-upload :image_loc="'/images/user/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
										</div>
									</div>


									<!-- name -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.name')}">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i>
												Nama:
											</h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama user" v-validate="'required|min:5'" data-vv-as="Nama" v-model="form.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;
											</small>
										</div>
									</div>

									<!-- email -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.email')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.email')}">
												<i class="icon-cross2" v-if="errors.has('form.email')"></i>
												E-mail:
											</h5>

											<!-- text -->
											<input type="text" name="email" class="form-control" placeholder="Silahkan masukkan e-mail yang valid" v-validate="'required|email'" data-vv-as="E-mail" v-model="form.email">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.email')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.email') }}
											</small>
											<small class="text-muted" v-else>&nbsp;
											</small>
										</div>
									</div>

									<!-- username -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.username')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.username')}">
												<i class="icon-cross2" v-if="errors.has('form.username')"></i>
												Username:
											</h5>

											<!-- text -->
											<input type="text" name="username" class="form-control" placeholder="Silahkan masukkan username" v-validate="'required|min:5'" data-vv-as='Username' v-model="form.username">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.username')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.username') }}
											</small>
											<small class="text-muted" v-else>&nbsp;
											</small>
										</div>
									</div>

									<!-- password -->
									<div class="col-md-6" v-if="this.$route.meta.mode !== 'edit'">
										<div class="form-group" :class="{'has-error' : errors.has('form.password')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.password')}">
												<i class="icon-cross2" v-if="errors.has('form.password')"></i>
												Password:
											</h5>

											<!-- text -->
											<input type="password" name="password" class="form-control" placeholder="Silahkan masukkan password" v-validate="'required|min:5'" data-vv-as="Password" v-model="form.password">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.password')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.password') }}
											</small>
											<small class="text-muted" v-else>&nbsp;
											</small>
										</div>
									</div>

									<!-- password konfirmasi -->
									<div class="col-md-6" v-if="this.$route.meta.mode !== 'edit'">
										<div class="form-group" :class="{'has-error' : errors.has('form.passwordConfirm')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.passwordConfirm')}">
												<i class="icon-cross2" v-if="errors.has('form.passwordConfirm')"></i>
												Konfirmasi Password:
											</h5>

											<!-- text -->
											<input type="password" name="passwordConfirm" class="form-control" placeholder="Silahkan masukkan password konfirmasi" v-validate="'required|confirmed:password'" data-vv-as="Konfirmasi Password" v-model="form.passwordConfirm">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.passwordConfirm')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.passwordConfirm') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tipe -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.tipe')}">
												<i class="icon-cross2" v-if="errors.has('form.tipe')"></i>
												Tipe:
											</h5>

											<!-- select -->
											<select name="CU" data-width="100%" class="bootstrap-select" v-model="roleTipe">
												<option disabled value="">Silahkan pilih tipe</option>
												<option value="bkcu">User BKCU</option>
												<option value="cu">User CU</option>
											</select>

											<!-- error message -->
											<br/>
											<small class="text-muted text-danger" v-if="errors.has('form.tipe')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tipe') }}
											</small>
											<small class="text-muted" v-else>&nbsp;
											</small>

										</div>
									</div>

									<!-- select CU -->
									<div class="col-md-12" v-if="roleTipe === 'cu'">
										<div class="form-group">

											<!-- title -->
											<h5>CU:</h5>

											<!-- select -->
											<select name="cu" data-width="100%" class="bootstrap-select" v-model="form.id_cu">
												<option disabled value="">Silahkan pilih CU</option>
												<option v-for="cu in modelCu" :value="cu.id">{{cu.name}}</option>
											</select>

										</div>
									</div>

									<!-- hak-akses -->
									<div class="col-md-12" v-if="roleTipe === 'bkcu' || form.id_cu != 0">
										<hak-akses :tipeUser="roleTipe" :form="form"></hak-akses>
									</div>
								</div>

							</div>
						</div>

						<!-- form info -->
						<form-info></form-info>	

						<!-- form button -->
						<div class="panel panel-flat">
							<div class="panel-body">
								<div class="row">
									<form-button
										:cancelState="'methods'"
										:formValidation="'form'"
										@cancelClick="back"></form-button>
								</div>
							</div>
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
	import hakAkses from "../../components/hakAkses.vue";
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			hakAkses,
			message,
			formButton,
			formInfo,
		},
		data() {
			return {
				title: 'Tambah User',
				titleDesc: 'Menambah user baru',
				titleIcon: 'icon-plus3',
				level2Title: 'User',
				kelas: 'user',
				roleTipe: '',
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
			formStat(value){
				if(value === 'success'){
					if(this.$route.meta.mode === 'edit'){
						if(this.form.id_cu === 0){
							this.roleTipe = 'BKCU';
						} else {
							this.roleTipe = 'CU';
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
			},
			roleTipe(value){
				if(value == 'cu'){
					if(this.modelCuStat != "success"){
						this.$store.dispatch('cu/getPus', this.profile.id_pus);
					}
				}else{
					this.form.id_cu = '0';
				}
			}
    },
		methods: {
			fetch(){
				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
					this.title = 'Ubah User';
					this.titleDesc = 'Mengubah user';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.$store.dispatch(this.kelas + '/create');
				}
			},
			changeRole(id){
				this.$store.dispatch('loadRolePermission',id);
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
				if(this.$route.meta.mode === 'edit' && this.profile.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.profile.id_cu}});
				}
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
			modalOpen_Penulis(){
				this.formPenulis.id_cu = this.form.id_cu;

				this.modalShow = true;
				this.modalState = 'normal2';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Tambah penulis artikel';
				this.formPenulis.name = '';
				this.formPenulis.deskripsi = '';
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
				profileStat: 'profileStat',
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
			})
		}
	}
</script>