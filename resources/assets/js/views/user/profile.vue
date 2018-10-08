<template>
	<div>
		<!-- Page header -->
		<page-header 
		:title="title" 
		:titleDesc="titleDesc" 
		:titleIcon="titleIcon"></page-header>
		
		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="formStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="form">
					</message>

					<div class="nav-tabs-responsive">
						<ul class="nav nav-tabs nav-tabs-bottom flex-nowarp mb-0">
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'edit'}" @click.prevent="changeTab('edit')"><i class="icon-pencil5 position-left"></i> Ubah Data</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'aktivitas'}" @click.prevent="changeTab('aktivitas')"><i class="icon-pencil5 position-left"></i> Aktivitas</a>
							</li>
						</ul>
					</div>

					<br/>

					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'edit'">

							<form @submit.prevent="saveFoto" enctype="multipart/form-data">

								<!-- form -->
								<div class="card">
									<div class="card-body">
										<div class="form-group">

											<!-- title -->
											<h5>Foto:</h5>

											<!-- imageupload -->
											<app-image-upload :image_loc="'/images/user/'" :image_temp="formFoto.gambar" v-model="formFoto.gambar"></app-image-upload>
										</div>

										<!-- form info -->
										<form-info></form-info>	

										<!-- form button -->
										<div class="card card-body">
											<form-button
												:cancelState="''"
												:formValidation="''"></form-button>
										</div>
									</div>
								</div>

							</form>

							<form @submit.prevent="savePassword" enctype="multipart/form-data" data-vv-scope="formPassword">

								<!-- form -->
								<div class="card">
									<div class="card-body">
										
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

										<!-- form info -->
										<form-info></form-info>	

										<!-- form button -->
										<div class="card card-body">
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
						<div v-show="tabName == 'aktivitas'">
						</div>
					</transition>		

				</div>
			</div>
		</div>
		
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalTutup">
		</app-modal>

		<!-- modal image -->
		<app-modal-image :show="modalImageShow" :content="modalImageContent" @tutup="modalImageTutup" @backgroundClick="modalImageTutup">
		</app-modal-image>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import appModal from '../../components/modal';
	import appModalImage from '../../components/modalImage';
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
			appModalImage,
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
				tabName: 'edit',
				formPassword: {},
				formFoto: {},
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalImageShow: false,
				modalImageContent: '',
				submited: false,
			}
		},
		created(){
			this.formFoto.gambar = this.currentUser.gambar;
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
			changeTab(value){
				this.tabName = value;
				if(value == 'foto'){
					this.formFoto.gambar = this.currentUser.gambar;
				}
			},
			modalImageBuka(content){
				this.modalImageShow = true;
				this.modalImageContent = content;
			},
			modalTutup() {
				this.modalShow = false;
				
				if(this.tabName == 'foto' || this.tabName == 'email'){
					
				}else if(this.tabName == 'password'){
					this.formPasswordReset();
				}
			},
			modalImageTutup() {
				this.modalImageShow = false;
			},
			formPasswordReset(){
				this.formPassword.password_old = '';
				this.formPassword.password = '';
				this.formPassword.password_confirm = '';
			}
		},
		computed:{
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('user',{
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