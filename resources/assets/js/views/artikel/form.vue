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
						<router-link :to="{ name:'artikel' }" tag="li">
							<a>Artikel</a>
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
					<message :show="errors.any()" v-if="submited">
						<p><i class="icon-cancel-circle2"></i> Oops terjadi kesalahan:</p>
						<ul>
							<li v-for="error in errors.items">{{error.msg}}</li>
						</ul>
					</message>

					<!-- main panel -->
					<div class="panel panel-flat">
						<div class="panel-body">
							<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form-1">
								<div class="row">

									<!-- nama -->
									<div class="col-md-4">
										<div class="form-group has-feedback" :class="{'has-error' : errors.has('form-1.nama')}">
											<h5 :class="{ 'text-danger' : errors.has('form-1.nama')}">Judul:</h5>
											<input type="text" name="nama" class="form-control" placeholder="Silahkan masukkan judul artikel" v-validate="'required|min:5'"
											  v-model="form.nama">
											<div class="form-control-feedback" v-if="errors.has('form-1.nama')">
												<i class="icon-cancel-circle2"></i>
											</div>
											<small class="text-muted" :class="{ 'text-danger' : errors.has('form-1.nama')}">
												<i class="icon-arrow-small-right"></i> Judul harus diisi dan minimal 5 karakter</small>
										</div>
									</div>

									<!-- Pus -->
									<div class="col-md-4">
										<div class="form-group has-feedback" :class="{'has-error' : errors.has('form-1.id_pus')}">
											<h5 :class="{ 'text-danger' : errors.has('form-1.id_pus')}">Puskopdit:</h5>
											<select class="bootstrap-select" name="id_pus" v-model="form.id_pus" data-width="100%" v-validate="'required'" @change="changePus">
												<option disabled value="">Silahkan pilih Puskopdit</option>
												<option data-divider="true"></option>
												<option v-for="pus in modelPus" :value="pus.id">{{pus.nama}}</option>
											</select>
											<div class="form-control-feedback" v-if="errors.has('form-1.id_pus')">
												<i class="icon-cancel-circle2"></i>
											</div>
											<small class="text-muted" :class="{ 'text-danger' : errors.has('form-1.id_pus')}">
												<i class="icon-arrow-small-right"></i> Puskopdit harus diisi</small>
										</div>
									</div>

									<!-- CU -->
									<div class="col-md-4">
										<div class="form-group has-feedback" :class="{'has-error' : errors.has('form-1.id_cu')}">
											<h5 :class="{ 'text-danger' : errors.has('form-1.id_cu')}">CU:</h5>
											<div v-if="modelCULoadStat === 'loading'">
													<i class="icon-spinner spinner"></i>
											</div>
											<div v-else>
												<select class="bootstrap-select" name="id_cu" v-model="form.id_cu" data-width="100%" v-validate="'required'" @change="changeCU">
													<option disabled value="">Silahkan pilih CU</option>
													<option value="pus">Puskopdit</option>
													<option data-divider="true"></option>
													<option v-for="cu in modelCU" :value="cu.id">{{cu.nama}}</option>
													<option v-if='modelCU.length === 0'>
														<span class="text-warning"><i class="icon-warning22"></i>CU tidak ditemukan, pastikan anda sudah memilih Puskopdit terlebih dahulu.</span>
													</option>
												</select>
											</div>
											<div class="form-control-feedback" v-if="errors.has('form-1.id_cu')">
												<i class="icon-cancel-circle2"></i>
											</div>
											<small class="text-muted" :class="{ 'text-danger' : errors.has('form-1.id_cu')}">
												<i class="icon-arrow-small-right"></i> CU harus diisi</small>
										</div>
									</div>

									<!-- penulis -->
									<div class="col-md-4">
										<div class="form-group has-feedback" :class="{'has-error' : errors.has('form-1.id_artikel_penulis')}">
											<h5 :class="{ 'text-danger' : errors.has('form-1.id_artikel_penulis')}">Penulis:</h5>
											<div v-if="modelPenulisLoadStat === 'loading'">
													<i class="icon-spinner spinner"></i>
											</div>
											<div v-else>
												<div class="input-group">
													<select class="bootstrap-select"  name="id_artikel_penulis" v-model="form.id_artikel_penulis" data-width="100%" v-validate="'required'">
														<option disabled value="">Silahkan pilih penulis</option>
														<option data-divider="true"></option>
														<option v-for="penulis in modelPenulis" :value="penulis.id">{{penulis.nama}}</option>
														<option v-if='modelPenulis.length === 0'>
															<span class="text-warning"><i class="icon-warning22"></i>Penulis tidak ditemukan, pastikan anda sudah memilih CU terlebih dahulu.</span>
														</option>
													</select>
													<div class="input-group-btn">
														<button type="button" class="btn btn-default" data-popup="tooltip" title="Tambah kategori" @click="modalOpen_Penulis">
															<i class="icon-plus22"></i>
														</button>
													</div>
												</div>
											</div>
											<div class="form-control-feedback" v-if="errors.has('form-1.id_artikel_penulis')">
												<i class="icon-cancel-circle2"></i>
											</div>
											<small class="text-muted" :class="{ 'text-danger' : errors.has('form-1.id_artikel_penulis')}">
												<i class="icon-arrow-small-right"></i> Penulis harus dipilih</small>
										</div>
									</div>

									<!-- kategori -->
									<div class="col-md-4">
										<div class="form-group">
											<h5>Kategori:</h5>
											<div v-if="modelKategoriLoadStat === 'loading'">
													<i class="icon-spinner spinner"></i>
											</div>
											<div v-else>
												<div class="input-group">
													<select class="bootstrap-select" name="id_artikel_kategori" v-model="form.id_artikel_kategori" data-width="100%">
														<option disabled value="1">Silahkan pilih kategori</option>
														<option data-divider="true"></option>
														<option v-for="kategori in modelKategori" :value="kategori.id">{{kategori.nama}}</option>
														<option v-if='modelKategori.length === 0'>
															<span class="text-warning"><i class="icon-warning22"></i>Kategori tidak ditemukan, pastikan anda sudah memilih CU terlebih dahulu.</span>
														</option>
													</select>
													<div class="input-group-btn">
														<button type="button" class="btn btn-default" data-popup="tooltip" title="Tambah kategori" @click="modalOpen_Kategori">
															<i class="icon-plus22"></i>
														</button>
													</div>
												</div>
											</div>
											<small class="text-muted">&nbsp;</small>
										</div>
									</div>

									<!-- separator -->
									<div class="col-md-12"><br/></div>

									<!-- terbitkan -->
									<div class="col-md-4">
										<div class="form-group">
											<h5>Terbitkan:</h5>
											<label class="radio-inline">
												<input type="radio" name="terbitkan" class="styled" value="1" v-model="form.terbitkan"> Ya
											</label>
											<label class="radio-inline">
												<input type="radio" name="terbitkan" class="styled" value="0" v-model="form.terbitkan"> Tidak
											</label>
										</div>
									</div>

									<!-- utamakan -->
									<div class="col-md-4">
										<div class="form-group">
											<h5>Utamakan:</h5>
											<label class="radio-inline">
												<input type="radio" name="utamakan" class="styled" :value="1" v-model="form.utamakan"> Ya
											</label>
											<label class="radio-inline">
												<input type="radio" name="utamakan" class="styled" :value="0" v-model="form.utamakan"> Tidak
											</label>
										</div>
									</div>

									<!-- separator -->
									<div class="col-md-12"><br/></div>

									<!-- gambar utama -->
									<div class="col-md-12">
										<div class="form-group">
											<h5>Gambar Utama:</h5>
											<app-image-upload :image_loc="'/images/artikel/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
										</div>
									</div>

									<!-- separator -->
									<div class="col-md-12"><br/></div>

									<!-- isi artikel -->
									<div class="col-md-12">
										<div class="form-group">
											<h5>Isi Artikel:</h5>
											<app-summernote name="editor" :model="form.content" :config="summernoteconfig" @change="value => { form.content = value }"></app-summernote>
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

								<!-- tombol -->
								<div class="text-right">
									<router-link type="button" :to="{ name:'artikel' }" class="btn btn-default">
										<i class="icon-arrow-left13"></i> Batal
									</router-link>
									<button type="submit" class="btn btn-primary" :disabled="errors.any('form-1')">
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
			<template slot="modal-title">
				{{ modalTitle }}
			</template>
			<template slot="modal-body1">
				<div class="well bg-primary text-center">
					<h5>Tidak menemukan kategori yang cocok untuk artikel anda?</h5>
					Silahkan tambahkan sendiri dan jangan lupa berikan deskripsi kategori tersebut.
				</div>
				<hr>
				<div class="form-group has-feedback" :class="{'has-error' : errors.has('kategoriNama')}">
					<label class="text-semibold" :class="{ 'text-danger' : errors.has('kategoriNama')}">Nama:</label>
					<input type="text" name="kategoriNama" class="form-control" placeholder="Silahkan masukkan nama kategori" v-validate="'required|min:5'"
					  v-model="formKategori.nama">
					<div class="form-control-feedback" v-if="errors.has('kategoriNama')">
						<i class="icon-cancel-circle2"></i>
					</div>
					<small class="text-muted" :class="{ 'text-danger' : errors.has('kategoriNama')}">
						<i class="icon-arrow-small-right"></i> Nama kategori harus diisi dan minimal 5 karakter</small>
				</div>
				<div class="form-group has-feedback" :class="{'has-error' : errors.has('kategoriDeskripsi')}">
					<label class="text-semibold" :class="{ 'text-danger' : errors.has('kategoriDeskripsi')}">Deskripsi:</label>
					<textarea rows="5" type="text" name="kategoriDeskripsi" class="form-control" placeholder="Silahkan masukkan deskripsi kategori"
					  v-validate="'required|min:5'" v-model="formKategori.deskripsi"></textarea>
					<div class="form-control-feedback" v-if="errors.has('kategoriDeskripsi')">
						<i class="icon-cancel-circle2"></i>
					</div>
					<small class="text-muted" :class="{ 'text-danger' : errors.has('kategoriDeskripsi')}">
						<i class="icon-arrow-small-right"></i> Deskripsi kategori harus diisi dan minimal 5 karakter</small>
				</div>
			</template>
			<template slot="modal-footer1">
				<button class="btn btn-default" @click="modalTutup">
					<i class="icon-cross"></i> Tutup</button>
				<button type="submit" class="btn btn-primary" @click="saveKategori">
					<i class="icon-floppy-disk"></i> Simpan</button>
			</template>
		</app-modal>

	</div>
</template>

<script>
	import Vue from 'vue';
	import axios from 'axios';
	import corefunc from '../../assets/core/app.js';
	import uniformFunc from '../../assets/plugins/forms/styling/uniform.min.js';
	import {
		toMulipartedForm
	} from '../../helpers/form';
	import appSummernote from '../../modules/summernote.js';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";

	export default {
		components: {
			appModal,
			appSummernote,
			appImageUpload,
			message
		},
		data() {
			return {
				title: 'Tambah Artikel',
				titleDesc: 'Menambah artikel baru',
				titleIcon: 'icon-plus3',
				puskopdit: '',
				formKategori: {
					nama: '',
					deskripsi: ''
				},
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
				redirect: '/artikel/',
				submited: false
			}
		},
		mounted() {
			corefunc.core_function();
			uniformFunc.uniform_function();
			this.other();
		},
		created(){
			this.fetch();
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
			$.uniform.update();
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
			updateKategoriStat(value){
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateKategoriResponse.message;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateKategoriResponse.message;
				}
			}
    },
		methods: {
			fetch(){
				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch('editArtikel',this.$route.params.id);	
					this.title = 'Ubah Artikel';
					this.titleDesc = 'Mengubah artikel';
					this.titleIcon = 'icon-pencil5';	
				} else {
					this.$store.dispatch('createArtikel');
				}
				// this.$store.dispatch('loadArtikelKategoriAll');
				this.$store.dispatch('loadPusAll');	
				// this.$store.dispatch('loadCUAll');	
			},
			save() {
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
		
				this.$validator.validateAll('form-1').then((result) => {
					if (result) {
						if(this.$route.meta.mode === 'edit'){
							this.$store.dispatch('updateArtikel', [this.$route.params.id, formData]);
						}else{
							this.$store.dispatch('storeArtikel', formData);
						}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			saveKategori() {
				this.$store.dispatch('storeArtikelKategori',this.formKategori);
			},
			changePus(){
				this.$store.dispatch('loadCUPus', this.form.id_pus);
			},
			changeCU(){
				this.$store.dispatch('loadArtikelPenulisCU', this.form.id_cu);	
				this.$store.dispatch('loadArtikelKategoriCU', this.form.id_cu);
			},
			modalTutup() {
				if(this.updateKategoriStat === 'success'){
					this.$store.dispatch('loadArtikelKategoriAll');
					this.form.artikel_kategori_id = this.updateKategoriResponse.id;
				}else if(this.updateStat === 'success'){
					this.$router.push(this.redirect);
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

			},
			modalOpen_Kategori() {
				this.modalShow = true;
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Tambah kategori artikel';
				this.formKategori.nama = '';
				this.formKategori.deskripsi = '';
			},
			processFile(event) {
				this.form.gambar = event.target.files[0]
				console.log(event.target.files[0].name);
			},
			other() {
				// bootstrap select
				$('.bootstrap-select').selectpicker();
				// radio checkbox
				$(".styled, .multiselect-container input").uniform({
					radioClass: 'choice'
				});
				// file input
				$(".file-styled").uniform({
					fileButtonClass: 'action btn btn-default'
				});
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
			updateKategoriResponse(){
				return this.$store.getters.getArtikelKategoriUpdate;
			},
			updateKategoriStat(){
				return this.$store.getters.getArtikelKategoriUpdateStat;
			},
			modelPenulis() {
				return this.$store.getters.getArtikelPenulisS;
			},
			modelPenulisLoadStat() {
				return this.$store.getters.getArtikelPenulisLoadStatS;
			},
			modelPus() {
				return this.$store.getters.getPusS;
			},
			modelCU() {
				return this.$store.getters.getCUS;
			},
			modelCULoadStat() {
				return this.$store.getters.getCULoadStatS;
			},
			modelKategori() {
				return this.$store.getters.getArtikelKategoriS;
			},
			modelKategoriLoadStat() {
				return this.$store.getters.getArtikelKategoriLoadStatS;
			}
		}
	}
</script>