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
							<router-link :to="{ name: kelas }" tag="li">
								<a>Artikel Penulis</a>
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
					<message :show="errors.any('form')" :class="'bg-danger'" v-if="submited">
						<h4><i class="icon-cancel-circle2"></i> Oops terjadi kesalahan</h4>
						<ul>
							<li v-for="error in errors.items">{{error.msg}}</li>
						</ul>
					</message>

					<!-- main panel -->
					<div class="panel panel-flat">
						<div class="panel-body">
							<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">
								<div class="row">

									<!-- name -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.name')}">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i>
												Nama:</h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama penulis artikel" v-validate="'required|min:5'" data-vv-as="Nama" v-model="form.name">

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
											<select class="bootstrap-select" name="id_cu" v-model="form.id_cu" data-width="100%" v-validate="'required'" data-vv-as="CU" :disabled="modelCU.length === 0">
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

									<!-- deskripsi -->
									<div class="col-md-12">
										<div class="form-group" :class="{'has-error' : errors.has('form.deskripsi')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.deskripsi')}">
												<i class="icon-cross2" v-if="errors.has('form.deskripsi')"></i>
												Keterangan:
											</h5>

											<!-- textarea -->
											<textarea rows="5" type="text" name="penulisDeskripsi" class="form-control" placeholder="Silahkan masukkan keterangan kategori" v-validate="'required|min:5'" data-vv-as="Profil" v-model="form.deskripsi"></textarea>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.deskripsi')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.deskripsi') }}
											</small>
											<small class="text-muted" v-else>&nbsp;
											</small>
										</div>
									</div>
								</div>

								<!-- separator -->
								<div class="col-md-12"><br/></div>

								<!-- confirmation -->
								<div class="form-group">
									<div class="well well-sm bg-info"><i class="icon-info22"></i> Pastikan data yang dimasukkan sudah benar sebelum menyimpan.</div>
								</div>

								<!-- separator -->
								<div class="col-md-12"><hr/></div>

								<!-- tombol desktop-->
								<div class="text-right hidden-xs">
									<router-link type="button" :to="{ name: kelas }" class="btn btn-default" v-tooltip:top="'Batal'">
										<i class="icon-arrow-left13"></i> Batal
									</router-link>
									<button type="submit" class="btn btn-primary" :disabled="errors.any('form')" v-tooltip:top="'Simpan Data'">
										<i class="icon-floppy-disk"></i> Simpan</button>
								</div>

								<!-- tombol mobile-->
								<div class="visible-xs">
									<button type="submit" class="btn btn-primary btn-block pb-5" :disabled="errors.any('form')">
										<i class="icon-floppy-disk"></i> Simpan</button>
									<router-link type="button" :to="{ name: kelas }" class="btn btn-default btn-block">
										<i class="icon-arrow-left13"></i> Batal
									</router-link>
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
	import message from "../../components/message.vue";

	export default {
		components: {
			appModal,
			appImageUpload,
			message
		},
		data() {
			return {
				title: 'Tambah Kategori Artikel',
				titleDesc: 'Menambah kategori artikel baru',
				titleIcon: 'icon-plus3',
				kelas: 'artikelKategori',
				kelasVuex: 'ArtikelKategori',
				redirect: '/artikelKategori/',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
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
			userDataStat(value){ //jika refresh halaman maka reload userData
				if(value === "success"){
					if(this.userData.id_cu === 0){
						this.$store.dispatch('loadCUPus',this.userData.id_pus);
					}
				}
			},
			formStat(value){
				if(value === "success"){
					if(this.$route.meta.mode !== 'edit'){
						this.form.id_cu = this.userData.id_cu;
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
			}
    },
		methods: {
			fetch(){
				if(this.userData.id_cu === 0){
					this.$store.dispatch('loadCUPus',this.userData.id_pus);
				}

				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch('edit' + this.kelasVuex,this.$route.params.id);	
				} else {
					this.$store.dispatch('create' + this.kelasVuex);
				}
			},
			save() {
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode === 'edit'){
							this.$store.dispatch('update' + this.kelasVuex, [this.$route.params.id, formData]);
						}else{
						this.$store.dispatch('store' + this.kelasVuex, formData);
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
			userData(){
				return this.$store.getters.getUserData;
			},
			userDataStat(){
				return this.$store.getters.getUserDataLoadStat;
			},
			form(){
				return this.$store.getters.getArtikelKategori;
			},
			formStat(){
				return this.$store.getters.getArtikelKategoriLoadStat;
			},
			rules(){
				return this.$store.getters.getArtikelKategoriRules;
			},
			option(){
				return this.$store.getters.getArtikelKategoriOption;
			},
			updateResponse(){
				return this.$store.getters.getArtikelKategoriUpdate;
			},
			updateStat(){
				return this.$store.getters.getArtikelKategoriUpdateStat;
			},
			modelPus() {
				return this.$store.getters.getPusS;
			},
			modelCU() {
				return this.$store.getters.getCUS;
			},
			modelCULoadStat() {
				return this.$store.getters.getCULoadStatS;
			}
		}
	}
</script>