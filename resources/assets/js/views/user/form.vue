<template>
	<div>
		<!-- header -->
		<div class="page-header">
			<div class="page-header-content has-visible-elements">
				<div class="page-title">
					<h4>
						<i class="position-left" :class="titleIcon"></i>
						<span class="text-semibold">{{ title }}</span> - {{ titleDesc }}</h4>
						<ul class="breadcrumb breadcrumb-caret position-right">
							<router-link :to="{ name:'dashboard' }" tag="li">
								<a>Dashboard</a>
							</router-link>
							<router-link :to="{ name:'user' }" tag="li">
								<a>User</a>
							</router-link>
							<li class="active">{{ title }}</li>
						</ul>
				</div>
			</div>
		</div>
		<!-- content -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">

					<!-- message -->
					<message :show="errors.any('form-1')" :class="'bg-danger'" v-if="submited">
						<h4><i class="icon-cancel-circle2"></i> Oops terjadi kesalahan</h4>
						<ul>
							<li v-for="error in errors.items">{{error.msg}}</li>
						</ul>
					</message>

					<!-- main panel -->
					<div class="panel panel-flat">
						<div class="panel-body">
							<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form-1">
								<div class="row">

									<!-- foto -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Foto:</h5>

											<!-- imageupload -->
											<app-image-upload :image_loc="'/images/artikel/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
										</div>
									</div>


									<!-- name -->
									<div class="col-md-6">
										<div class="form-group has-feedback" :class="{'has-error' : errors.has('form-1.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form-1.name')}">Nama:</h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama user" v-validate="'required|min:5'" v-model="form.name">

											<!-- feedback	 -->
											<div class="form-control-feedback" v-if="errors.has('form-1.name')">
												<i class="icon-cancel-circle2"></i>
											</div>
											<small class="text-muted" :class="{ 'text-danger' : errors.has('form-1.name')}">
												<i class="icon-arrow-small-right"></i> Nama harus diisi dan minimal 5 karakter</small>
										</div>
									</div>

									<!-- username -->
									<div class="col-md-6">
										<div class="form-group has-feedback" :class="{'has-error' : errors.has('form-1.username')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form-1.username')}">Username:</h5>

											<!-- text -->
											<input type="text" name="username" class="form-control" placeholder="Silahkan masukkan username" v-validate="'required|min:5'" v-model="form.username">

											<!-- feedback	 -->
											<div class="form-control-feedback" v-if="errors.has('form-1.username')">
												<i class="icon-cancel-circle2"></i>
											</div>
											<small class="text-muted" :class="{ 'text-danger' : errors.has('form-1.username')}">
												<i class="icon-arrow-small-right"></i> Username harus diisi dan minimal 5 karakter</small>
										</div>
									</div>

									<!-- password -->
									<div class="col-md-6">
										<div class="form-group has-feedback" :class="{'has-error' : errors.has('form-1.password')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form-1.password')}">Password:</h5>

											<!-- text -->
											<input type="password" name="password" class="form-control" placeholder="Silahkan masukkan password" v-validate="'required|min:5'" v-model="form.password">

											<!-- feedback	 -->
											<div class="form-control-feedback" v-if="errors.has('form-1.password')">
												<i class="icon-cancel-circle2"></i>
											</div>
											<small class="text-muted" :class="{ 'text-danger' : errors.has('form-1.password')}">
												<i class="icon-arrow-small-right"></i> Password harus diisi dan minimal 5 karakter</small>
										</div>
									</div>

									<!-- password konfirmasi -->
									<div class="col-md-6">
										<div class="form-group has-feedback" :class="{'has-error' : errors.has('form-1.passwordConfirm')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form-1.passwordConfirm')}">Password Konfirmasi:</h5>

											<!-- text -->
											<input type="password" name="passwordConfirm" class="form-control" placeholder="Silahkan masukkan password konfirmasi" v-validate="'required|min:5'" v-model="form.passwordConfirm">

											<!-- feedback	 -->
											<div class="form-control-feedback" v-if="errors.has('form-1.passwordConfirm')">
												<i class="icon-cancel-circle2"></i>
											</div>
											<small class="text-muted" :class="{ 'text-danger' : errors.has('form-1.passwordConfirm')}">
												<i class="icon-arrow-small-right"></i> Password Konfirmasi harus diisi dan sama dengan password</small>
										</div>
									</div>

									<!-- tipe -->
									<div class="col-md-6">
										<div class="form-group">

											<!-- title -->
											<h5>Tipe:</h5>

											<!-- radio -->
											<label class="radio-inline">
												<input type="radio" name="tipe" :value="'BKCU'" v-model="roleTipe"> BKCU
											</label>
											<label class="radio-inline">
												<input type="radio" name="tipe" :value="'CU'" v-model="roleTipe"> CU
											</label>
										</div>
									</div>

									<!-- select role -->
									<div class="col-md-12" v-if="roleTipe !== ''">
										<div class="form-group has-feedback" :class="{'has-error' : errors.has('form-1.peran')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form-1.peran')}">Peran:</h5>

											<!-- text -->
											<select name="peran" data-width="100%" class="bootstrap-select" @change="changeRole($event.target.value)" v-model="form.peran" v-validate="'required'">
												<option disabled value="">Silahkan pilih peran user</option>
												<option v-for="role in modelRole" :value="role.id">{{role.name}}</option>
											</select>

											<!-- feedback	 -->
											<div class="form-control-feedback" v-if="errors.has('form-1.peran')">
												<i class="icon-cancel-circle2"></i>
											</div>
											<small class="text-muted" :class="{ 'text-danger' : errors.has('form-1.peran')}">
												<i class="icon-arrow-small-right"></i> Peran user harus dipilih</small>
										</div>
									</div>

									<!-- select CU -->
									<div class="col-md-12" v-if="roleTipe === 'CU'">
										<div class="form-group has-feedback" :class="{'has-error' : errors.has('form-1.cu')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form-1.peran')}">CU:</h5>

											<!-- text -->
											<select name="CU" data-width="100%" class="bootstrap-select" v-model="form.id_cu" v-validate="'required'">
												<option disabled value="">Silahkan pilih CU</option>
												<option v-for="cu in modelCU" :value="cu.id">{{cu.name}}</option>
											</select>

											<!-- feedback	 -->
											<div class="form-control-feedback" v-if="errors.has('form-1.cu')">
												<i class="icon-cancel-circle2"></i>
											</div>
											<small class="text-muted" :class="{ 'text-danger' : errors.has('form-1.cu')}">
												<i class="icon-arrow-small-right"></i> Peran user harus dipilih</small>
										</div>
									</div>

									<!-- hak-akses -->
									<div class="col-md-12" v-if="form.peran !== ''">
										<hak-akses></hak-akses>
									</div>
									
									<!-- separator -->
									<div class="col-md-12"><br/></div>

								</div>

								<!-- separator -->
								<div class="col-md-12"><br/></div>

								<!-- confirmation -->
								<div class="form-group">
									<div class="well well-sm bg-info"><i class="icon-info22"></i> Pastikan data yang dimasukkan sudah benar sebelum menyimpan.</div>
								</div>

								<!-- separator -->
								<div class="col-md-12"><hr/></div>

								<!-- tombol -->
								<div class="text-right">
									<router-link type="button" :to="{ name:'artikel' }" class="btn btn-default" v-tooltip:top="'Batal'">
										<i class="icon-arrow-left13"></i> Batal
									</router-link>
									<button type="submit" class="btn btn-primary" :disabled="errors.any('form-1')" v-tooltip:top="'Simpan Data'">
										<i class="icon-floppy-disk"></i> Simpan</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">

		</app-modal>

	</div>
</template>

<script>
	import Vue from 'vue';
	import axios from 'axios';
	import corefunc from '../../assets/core/app.js';
	import {
		toMulipartedForm
	} from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import hakAkses from "../../components/hakAkses.vue";
	import message from "../../components/message.vue";

	export default {
		components: {
			appModal,
			appImageUpload,
			hakAkses,
			message
		},
		data() {
			return {
				title: 'Tambah User',
				titleDesc: 'Menambah user baru',
				titleIcon: 'icon-plus3',
				roleTipe: '',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				redirect: '/user/',
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
			roleTipe(value){
				if(value === 'CU'){
					this.$store.dispatch('loadCUPus','1');
				}
				this.$store.dispatch('loadRoleTipe', value);
			}
    },
		methods: {
			fetch(){
				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch('editUser',this.$route.params.id);	
					this.title = 'Ubah User';
					this.titleDesc = 'Mengubah user';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.$store.dispatch('createUser');
				}

				
			},
			changeRole(id){
				this.$store.dispatch('loadRolePermission',id);
			},
			save() {
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form-1').then((result) => {
					if (result) {
						if(this.$route.meta.mode === 'edit'){
							this.$store.dispatch('updateUser', [this.$route.params.id, formData]);
						}else{
							this.$store.dispatch('storeUser', formData);
						}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			modalTutup() {
 				if(this.updateStat === 'success'){
					this.$router.push(this.redirect);
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
				console.log(event.target.files[0].name);
			},
			other() {
				// bootstrap select
				$('.bootstrap-select').selectpicker();
			}
		},
		computed: {
			form(){
				return this.$store.getters.getArtikel;
			},
			formStat(){
				return this.$store.getters.getArtikelLoadStat;
			},
			rules(){
				return this.$store.getters.getArtikelRules;
			},
			option(){
				return this.$store.getters.getArtikelOption;
			},
			updateResponse(){
				return this.$store.getters.getArtikelUpdate;
			},
			updateStat(){
				return this.$store.getters.getArtikelUpdateStat;
			},
			modelRole(){
				return this.$store.getters.getRoleS;
			},
			modelRoleLoadStat(){
				return this.$store.getters.getRoleLoadStatS;
			},
			modelCU(){
				return this.$store.getters.getCUS;
			},
			modelCULoadStat(){
				return this.$store.getters.getCULoadStatS;
			}
		}
	}
</script>