<template>
	<div>
		<!-- Page header -->
		<page-header 
		:title="title" 
		:titleDesc="titleDesc" 
		:titleIcon="titleIcon"></page-header>
		
		<!-- page container -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">

					<div class="row">
						<div class="col-sm-3">

							<div class="content-group">
								<div class="panel-body bg-blue border-radius-top text-center">
									<div class="thumb thumb-rounded thumb-slide">
										<img :src="'/images/user/' + profile.gambar + 'n.jpg'" class="img-circle img-responsive center-block" v-if="profile.gambar">
										<img :src="'/images/no_image_man.jpg'" class="img-circle img-responsive center-block" v-else>
										<div class="caption">
											<span>
												<a href="#" class="btn bg-success-400 btn-icon btn-xs" data-popup="lightbox"><i class="icon-plus2"></i></a>
											</span>
										</div>
									</div>
									<div class="content-group-sm">
										<h5 class="text-semibold no-margin-bottom">
											{{ profile.name }}
										</h5>
										<span class="display-block" v-if="profile.cu">CU {{ profile.cu.username }}</span>
										<span class="display-block" v-else-if="profile.pus">{{ profile.pus.name }}</span>
									</div>
								</div>

								<div class="panel panel-body no-border-top no-border-radius-top">

									<div class="form-group mt-5">
										<label class="text-semibold">Nama:</label>
										<span class="pull-right-sm">{{ profile.name }}</span>
									</div>

									<div class="form-group mt-5">
										<label class="text-semibold">Username:</label>
										<span class="pull-right-sm">{{ profile.username }}</span>
									</div>

									<div class="form-group no-margin-bottom">
										<label class="text-semibold">Email:</label>
										<span class="pull-right-sm"><a href="#">{{ profile.email }}</a></span>
									</div>
									
								</div>
							</div>

						</div>

						<div class="col-sm-9">
							
							<!-- message -->
							<message v-if="formStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="form">
							</message>

							<div class="tabbable">
								<ul class="nav nav-tabs nav-tabs-solid nav-justified">
									<li :class="{'active' : tabName == 'password'}"><a @click.prevent="changeTab('password')"><i class="icon-pencil5 position-left"></i> Ubah Password</a></li>
									<li :class="{'active' : tabName == 'foto'}"><a @click.prevent="changeTab('foto')"><i class="icon-pencil5 position-left"></i> Ubah Foto</a></li>
									<li :class="{'active' : tabName == 'email'}"><a @click.prevent="changeTab('email')"><i class="icon-pencil5 position-left"></i> Ubah Nama & Email</a></li>
								</ul>
							</div>

							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'password'">
									<form @submit.prevent="savePassword" enctype="multipart/form-data" data-vv-scope="formPassword">

										<!-- form -->
										<div class="panel panel-flat border-left-xlg border-left-info">
											<div class="panel-body">
												
												<!-- password -->
												<div class="form-group" :class="{'has-error' : errors.has('formPassword.password_old')}">

													<!-- title -->
													<h5 :class="{ 'text-danger' : errors.has('formPassword.password_old')}">
														<i class="icon-cross2" v-if="errors.has('formPassword.password_old')"></i>
														Password Lama:
													</h5>

													<!-- text -->
													<input type="password" name="password_old" class="form-control" placeholder="Silahkan masukkan password" v-validate="'required|min:5'" data-vv-as="Password Lama" v-model="formPassword.password_old">

													<!-- error message -->
													<small class="text-muted text-danger" v-if="errors.has('formPassword.password_old')">
														<i class="icon-arrow-small-right"></i> {{ errors.first('formPassword.password_old') }}
													</small>
													<small class="text-muted" v-else>&nbsp;
													</small>
												</div>

												<!-- password -->
												<div class="form-group" :class="{'has-error' : errors.has('formPassword.password')}">

													<!-- title -->
													<h5 :class="{ 'text-danger' : errors.has('formPassword.password')}">
														<i class="icon-cross2" v-if="errors.has('formPassword.password')"></i>
														Password:
													</h5>

													<!-- text -->
													<input type="password" name="password" class="form-control" placeholder="Silahkan masukkan password" v-validate="'required|min:5'" data-vv-as="Password" v-model="formPassword.password">

													<!-- error message -->
													<small class="text-muted text-danger" v-if="errors.has('formPassword.password')">
														<i class="icon-arrow-small-right"></i> {{ errors.first('formPassword.password') }}
													</small>
													<small class="text-muted" v-else>&nbsp;
													</small>
												</div>

												<!-- password konfirmasi -->
												<div class="form-group" :class="{'has-error' : errors.has('formPassword.passwordConfirm')}">

													<!-- title -->
													<h5 :class="{ 'text-danger' : errors.has('formPassword.passwordConfirm')}">
														<i class="icon-cross2" v-if="errors.has('formPassword.passwordConfirm')"></i>
														Konfirmasi Password:
													</h5>

													<!-- text -->
													<input type="password" name="passwordConfirm" class="form-control" placeholder="Silahkan masukkan password konfirmasi" v-validate="'required|confirmed:password'" data-vv-as="Konfirmasi Password" v-model="formPassword.password_confirm">

													<!-- error message -->
													<small class="text-muted text-danger" v-if="errors.has('formPassword.passwordConfirm')">
														<i class="icon-arrow-small-right"></i> {{ errors.first('formPassword.passwordConfirm') }}
													</small>
													<small class="text-muted" v-else>&nbsp;</small>
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
														:cancelState="''"
														:formValidation="'formPassword'"></form-button>
												</div>
											</div>
										</div>

									</form>
								</div>
							</transition>

							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'foto'">
									<form @submit.prevent="saveFoto" enctype="multipart/form-data">

										<!-- form -->
										<div class="panel panel-flat border-left-xlg border-left-info">
											<div class="panel-body">
												<div class="form-group">

													<!-- title -->
													<h5>Foto:</h5>

													<!-- imageupload -->
													<app-image-upload :image_loc="'/images/user/'" :image_temp="formFoto.gambar" v-model="formFoto.gambar"></app-image-upload>
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
														:cancelState="''"
														:formValidation="''"></form-button>
												</div>
											</div>
										</div>

									</form>
								</div>
							</transition>

							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'email'">
									<form @submit.prevent="saveEmail" enctype="multipart/form-data" data-vv-scope="formEmail">

										<!-- form -->
										<div class="panel panel-flat border-left-xlg border-left-info">
											<div class="panel-body">
												<!-- name -->
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

												<!-- email -->
												<div class="form-group" :class="{'has-error' : errors.has('form.email')}">

													<!-- title -->
													<h5 :class="{ 'text-danger' : errors.has('form.email')}">
														<i class="icon-cross2" v-if="errors.has('form.email')"></i>
														Email:
													</h5>

													<!-- text -->
													<input type="text" name="email" class="form-control" placeholder="Silahkan masukkan e-mail yang valid" v-validate="'required|email'" data-vv-as="Email" v-model="form.email">

													<!-- error message -->
													<small class="text-muted text-danger" v-if="errors.has('form.email')">
														<i class="icon-arrow-small-right"></i> {{ errors.first('form.email') }}
													</small>
													<small class="text-muted" v-else>&nbsp;
													</small>
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
														:cancelState="''"
														:formValidation="'formPassword'"></form-button>
												</div>
											</div>
										</div>

									</form>
								</div>
							</transition>

						</div>
					</div>
					
				</div>
			</div>
		</div>
		
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalTutup">

		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import corefunc from '../../assets/core/app.js';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import appModal from '../../components/modal';
	import { toMulipartedForm } from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	
	export default {
		name: 'UserIndex',
		components: {
			pageHeader,
			message,
			appModal,
			appImageUpload,
			formInfo,
			formButton,
		},
		data() {
			return {
				title: 'Profile',
				kelas: 'user',
				titleDesc: 'Mengelola data profile',
				titleIcon: 'icon-user-plus',
				selectCuPath: 'userCu',
				tabName: 'password',
				formPassword: {},
				formFoto: {},
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
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
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
				this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
			},
			savePassword(){
				this.$validator.validateAll('formPassword').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/updatePassword', [this.$route.params.id, this.formPassword]);
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			saveFoto(){
				const formData = toMulipartedForm(this.formFoto, 'edit');
				this.$store.dispatch(this.kelas + '/updateFoto', [this.$route.params.id, formData]);
			},
			saveEmail(){
				this.$validator.validateAll('formEmail').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, this.form]);
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			changeTab(value){
				this.tabName = value;
				if(value == 'foto'){
					this.formFoto.gambar = this.form.gambar;
				}
			},
			modalTutup() {
				this.modalShow = false;
				
				if(this.tabName == 'foto' || this.tabName == 'email'){
					this.$store.dispatch('user/profile');
				}else if(this.tabName == 'password'){
					this.formPasswordReset();
				}
			},
			formPasswordReset(){
				this.formPassword.password_old = '';
				this.formPassword.password = '';
				this.formPassword.password_confirm = '';
			}
		},
		computed:{
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
		},
	}
</script>