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
											<div v-if="modelPenulisLoadStat === 'loading'">
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
															<span v-else>Silahkan pilih penulis</span>
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
											<div v-if="modelKategoriLoadStat === 'loading'">
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
									<router-link type="button" :to="{ name: kelas}" class="btn btn-default btn-block">
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
			
			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- tambah kategori -->
			<template slot="modal-body1">
				<form data-vv-scope="form-kategori">

					<!-- message -->
					<message :show="errors.any('form-kategori')" v-if="submitedKategori">
						<p><i class="icon-cancel-circle2"></i> Oops terjadi kesalahan:</p>
						<ul>
							<li v-for="error in errors.items">{{error.msg}}</li>
						</ul>
					</message>

					<!-- name -->
					<div class="form-group" :class="{'has-error' : errors.has('form-kategori.kategoriNama')}">

						<!-- title -->
						<h5 :class="{ 'text-danger' : errors.has('form-kategori.kategoriNama')}">
							<i class="icon-cross2" v-if="errors.has('form-kategori.kategoriNama')"></i>
							Nama:
						</h5>

						<!-- text -->
						<input type="text" name="kategoriNama" class="form-control" placeholder="Silahkan masukkan name kategori" v-validate="'required'" data-vv-as="Nama" v-model="formKategori.name">

						<!-- error message -->
						<small class="text-muted text-danger" v-if="errors.has('form-kategori.kategoriNama')">
							<i class="icon-arrow-small-right"></i> {{ errors.first('form-kategori.kategoriNama') }}
						</small>
						<small class="text-muted" v-else>&nbsp;
						</small>
					</div>

					<!-- deskripsi -->
					<div class="form-group" :class="{'has-error' : errors.has('form-kategori.kategoriDeskripsi')}">

						<!-- title -->
						<h5 :class="{ 'text-danger' : errors.has('form-kategori.kategoriDeskripsi')}">
							<i class="icon-cross2" v-if="errors.has('form-kategori.kategoriDeskripsi')"></i>
							Keterangan:
						</h5>

						<!-- textarea -->
						<textarea rows="5" type="text" name="kategoriDeskripsi" class="form-control" placeholder="Silahkan masukkan keterangan kategori"
							v-validate="'required|min:5'" v-model="formKategori.deskripsi"></textarea>

						<!-- error message -->
						<small class="text-muted text-danger" v-if="errors.has('form-kategori.kategoriDeskripsi')">
							<i class="icon-arrow-small-right"></i> {{ errors.first('form-kategori.kategoriDeskripsi') }}
						</small>
						<small class="text-muted" v-else>&nbsp;
						</small>
					</div>
				</form>
			</template>
			<template slot="modal-footer1">

				<!-- button desktop -->
				<div class="hidden-xs">
					<button class="btn btn-default" @click="modalTutup">
					<i class="icon-cross"></i> Tutup</button>
					<button type="submit" class="btn btn-primary" @click="saveKategori" :disabled="errors.any('form-kategori')">
					<i class="icon-floppy-disk"></i> Simpan</button>
				</div>

				<!-- button mobile -->
				<div class="visible-xs">
					<button type="submit" class="btn btn-primary btn-block pb-5" @click="saveKategori" :disabled="errors.any('form-kategori')">
					<i class="icon-floppy-disk"></i> Simpan</button>
					<button class="btn btn-default btn-block" @click="modalTutup">
					<i class="icon-cross"></i> Tutup</button>
				</div>
				
			</template>

			<!-- tambah penulis -->
			<template slot="modal-body2">
				<form data-vv-scope="form-penulis">

					<!-- message -->
					<message :show="errors.any('form-penulis')" v-if="submitedPenulis">
						<p><i class="icon-cancel-circle2"></i> Oops terjadi kesalahan:</p>
						<ul>
							<li v-for="error in errors.items">{{error.msg}}</li>
						</ul>
					</message>
					
					<!-- gambar utama -->
					<div class="form-group">

						<!-- title -->
						<h5>Foto:</h5>

						<!-- imageupload -->
						<app-image-upload :image_loc="'/images/artikel/'" v-model="formPenulis.gambar"></app-image-upload>
					</div>

					<!-- name -->
					<div class="form-group" :class="{'has-error' : errors.has('form-penulis.penulisNama')}">

						<!-- title -->
						<h5 :class="{ 'text-danger' : errors.has('form-penulis.penulisNama')}">
							<i class="icon-cross2" v-if="errors.has('form-penulis.penulisNama')"></i>
							Nama:
						</h5>
						<!-- text -->
						<input type="text" name="penulisNama" class="form-control" placeholder="Silahkan masukkan name penulis" v-validate="'required'" data-vv-as="Nama" v-model="formPenulis.name">

						<!-- error message -->
						<small class="text-muted text-danger" v-if="errors.has('form-kategori.kategoriDeskripsi')">
							<i class="icon-arrow-small-right"></i> {{ errors.first('form-kategori.kategoriDeskripsi') }}
						</small>
						<small class="text-muted" v-else>&nbsp;
						</small>
					</div>

					<!-- deskripsi -->
					<div class="form-group" :class="{'has-error' : errors.has('form-penulis.penulisDeskripsi')}">

						<!-- title -->
						<h5 :class="{ 'text-danger' : errors.has('form-penulis.penulisDeskripsi')}">
							<i class="icon-cross2" v-if="errors.has('form-penulis.penulisDeskripsi')"></i>
							Profil:
						</h5>

						<!-- textarea -->
						<textarea rows="5" type="text" name="penulisDeskripsi" class="form-control" placeholder="Silahkan masukkan profil penulis" v-validate="'required|min:5'" data-vv-as="Profil" v-model="formPenulis.deskripsi"></textarea>

						<!-- error message -->
						<small class="text-muted text-danger" v-if="errors.has('form-kategori.kategoriDeskripsi')">
							<i class="icon-arrow-small-right"></i> {{ errors.first('form-kategori.kategoriDeskripsi') }}
						</small>
						<small class="text-muted" v-else>&nbsp;
						</small>
					</div>
				</form>
			</template>
			<template slot="modal-footer2">

				<!-- button desktop -->
				<div class="hidden-xs">
					<button class="btn btn-default" @click="modalTutup">
					<i class="icon-cross"></i> Tutup</button>
					<button type="submit" class="btn btn-primary" @click="savePenulis" :disabled="errors.any('form-penulis')">
					<i class="icon-floppy-disk"></i> Simpan</button>
				</div>

				<!-- button mobile -->
				<div class="visible-xs">
					<button type="submit" class="btn btn-primary btn-block pb-5" @click="savePenulis" :disabled="errors.any('form-penulis')">
					<i class="icon-floppy-disk"></i> Simpan</button>
					<button class="btn btn-default btn-block" @click="modalTutup">
					<i class="icon-cross"></i> Tutup</button>
				</div>
				
			</template>

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
				kelas: 'artikel',
				kelasVuex: 'Artikel',
				redirect: '/artikel/',
				formKategori: {
					id_cu: '',
					name: '',
					deskripsi: ''
				},
				formPenulis: {
					id_cu: '',
					name: '',
					deskripsi: '',
					gambar:''
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
				submited: false,
				submitedKategori: false,
				submitedPenulis: false
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
					this.changeCU(this.form.id_cu);
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
					this.$store.dispatch('loadCUPus',this.userData.id_pus);
				}

				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch('edit' + this.kelasVuex,this.$route.params.id);	
					this.title = 'Ubah Artikel';
					this.titleDesc = 'Mengubah artikel';
					this.titleIcon = 'icon-pencil5';
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
			savePenulis(){
				const formData = toMulipartedForm(this.formPenulis, this.$route.meta.mode);
				this.$validator.validateAll('form-penulis').then((result) => {
					if(result){
						this.$store.dispatch('storeArtikelPenulis',this.formPenulis);
					}else{
						window.scrollTo(0, 0);
						this.submitedPenulis = true;
					}
				});	
			},
			saveKategori() {
				this.$validator.validateAll('form-kategori').then((result) => {
					if(result){
						this.$store.dispatch('storeArtikelKategori',this.formKategori);
					}else{
						window.scrollTo(0, 0);
						this.submitedKategori = true;
					}
				});	
			},
			changeCU(id){
				this.$store.dispatch('loadArtikelPenulisCU', id);	
				this.$store.dispatch('loadArtikelKategoriCU', id);
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
			modalOpen_Kategori() {
				this.formKategori.id_cu = this.form.id_cu;

				this.modalShow = true;
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Tambah kategori artikel';
				this.formKategori.name = '';
				this.formKategori.deskripsi = '';
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
			updatePenulisResponse(){
				return this.$store.getters.getArtikelPenulisUpdate;
			},
			updatePenulisStat(){
				return this.$store.getters.getArtikelPenulisUpdateStat;
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