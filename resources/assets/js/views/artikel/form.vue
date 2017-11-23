<template><div>
<!-- header -->
<div class="page-header">
	<div class="page-header-content has-visible-elements">
		<div class="page-title">
			<h4><i class="icon-plus3 position-left"></i> <span class="text-semibold">Tambah Artikel</span> - Menambah artikel baru</h4>
			<ul class="breadcrumb breadcrumb-caret position-right">
				<router-link :to="{ name:'dashboard' }" tag="li"><a>Dashboard</a></router-link>
				<router-link :to="{ name:'artikel' }" tag="li"><a>Artikel</a></router-link>
				<li class="active">Tambah Artikel</li>
			</ul>
		</div>
	</div>
</div>
<!-- content -->
<div class="page-container">
<div class="page-content">
<div class="content-wrapper">
<div class="panel panel-flat">
<div class="panel-body">
	<form @submit.prevent="save" enctype="multipart/form-data">
		<div class="row">
			<div class="col-md-4">
				<div class="form-group has-feedback" :class="{'has-error' : errors.has('nama')}">
					<h5 :class="{ 'text-danger' : errors.has('nama')}">Judul:</h5>
					<input type="text" name="nama" class="form-control" placeholder="Silahkan masukkan judul artikel" v-validate="'required|min:5'" v-model="form.nama">
					<div class="form-control-feedback" v-if="errors.has('nama')">
						<i class="icon-cancel-circle2"></i>
					</div>
					<small class="text-muted" :class="{ 'text-danger' : errors.has('nama')}"><i class="icon-arrow-small-right"></i> Nama harus diisi dan minimal 5 karakter</small>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group has-feedback" :class="{ 'has-error' : errors.has('penulis')}">
					<h5 :class="{ 'text-danger' : errors.has('penulis')}">Penulis:</h5>
					<input type="text" name="penulis" class="form-control" placeholder="Silahkan masukkan nama penulis" v-validate="'required|min:5'" v-model="form.penulis">
					<div class="form-control-feedback" v-if="errors.has('penulis')">
						<i class="icon-cancel-circle2"></i>
					</div>
					<small class="text-muted" :class="{ 'text-danger' : errors.has('penulis')}"><i class="icon-arrow-small-right"></i> Penulis harus diisi dan minimal 5 karakter</small>
				</div>
			</div>				
			<div class="col-md-4">
				<div class="form-group">
					<h5>Kategori:</h5>
					<div class="input-group">
						<select class="bootstrap-select" v-model="form.artikel_kategori_id" data-width="100%">
							<option disabled value="1">Silahkan pilih kategori</option>
							<option data-divider="true"></option>
							<option v-for="kategori in modelKategori" :value="kategori.id">{{kategori.nama}}</option>
						</select>
						<div class="input-group-btn">
							<button type="button" class="btn btn-default" data-popup="tooltip" title="Tambah kategori" @click="modalOpen_Kategori"><i class="icon-plus22"></i></button>
						</div>
					</div>
					<small class="text-muted">&nbsp;</small>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<h5>Terbitkan:</h5>
					<label class="radio-inline">
						<input type="radio" name="terbitkan" class="styled" value="1" v-model="form.terbitkan">
						Ya
					</label>
					<label class="radio-inline">
						<input type="radio" name="terbitkan" class="styled" value="0" v-model="form.terbitkan">
						Tidak
					</label>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<h5>Utamakan:</h5>
					<label class="radio-inline">
						<input type="radio" name="utamakan" class="styled" :value="1" v-model="form.utamakan">
						Ya
					</label>
					<label class="radio-inline">
						<input type="radio" name="utamakan" class="styled" :value="0" v-model="form.utamakan">
						Tidak
					</label>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-group">
					<h5>Gambar Utama:</h5>
					<app-image-upload 
					:image_temp="'/images/artikel/' + form.gambar + '.jpg'"
					v-model="form.gambar"></app-image-upload>
				</div>
			</div>
			<div class="col-md-12">
				<div class="form-group">
					<h5>Isi Artikel:</h5>
					<app-summernote
					    name="editor"
					    :model="form.content"
					    :config="summernoteconfig"
					    @change="value => { form.content = value }"
					  ></app-summernote>
				</div>
			</div>
		</div>
		<div class="text-right">
			<router-link type="button" :to="{ name:'artikel' }" class="btn btn-default">
				<i class="icon-arrow-left13"></i> Batal
			</router-link>
			<button type="submit" class="btn btn-primary"><i class="icon-floppy-disk"></i> Simpan</button>
		</div>
	</form>
</div>
</div>
</div>
</div>
</div>
<!-- modal -->
<app-modal 
	:show="modalShow" :state="modalState" :color="modalColor"
	@batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @errorOk="modalTutup">
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
			<input type="text" name="kategoriNama" class="form-control" placeholder="Silahkan masukkan nama kategori" v-validate="'required|min:5'" v-model="formKategori.nama">
			<div class="form-control-feedback" v-if="errors.has('kategoriNama')">
				<i class="icon-cancel-circle2"></i>
			</div>
			<small class="text-muted" :class="{ 'text-danger' : errors.has('kategoriNama')}"><i class="icon-arrow-small-right"></i> Nama kategori harus diisi dan minimal 5 karakter</small>
		</div>
		<div class="form-group has-feedback" :class="{'has-error' : errors.has('kategoriDeskripsi')}">
			<label class="text-semibold" :class="{ 'text-danger' : errors.has('kategoriDeskripsi')}">Deskripsi:</label>
			<textarea rows="5" type="text" name="kategoriDeskripsi" class="form-control" placeholder="Silahkan masukkan deskripsi kategori" v-validate="'required|min:5'" v-model="formKategori.deskripsi"></textarea>
			<div class="form-control-feedback" v-if="errors.has('kategoriDeskripsi')">
				<i class="icon-cancel-circle2"></i>
			</div>
			<small class="text-muted" :class="{ 'text-danger' : errors.has('kategoriDeskripsi')}"><i class="icon-arrow-small-right"></i> Deskripsi kategori harus diisi dan minimal 5 karakter</small>
		</div>
	</template>
	<template slot="modal-footer1">
		<button class="btn btn-default" @click="modalTutup"><i class="icon-cross"></i> Tutup</button>
		<button type="submit" class="btn btn-primary" @click="saveKategori"><i class="icon-floppy-disk"></i> Simpan</button>
	</template>
</app-modal>

</div></template>

<script>
import Vue from 'vue'
import axios from 'axios'
import corefunc from '../../assets/core/app.js';
import uniformFunc from '../../assets/plugins/forms/styling/uniform.min.js';
import { toMulipartedForm } from '../../helpers/form';
import appSummernote from '../../modules/summernote.js';
import appImageUpload from '../../components/ImageUpload.vue';
import appModal from '../../components/modal';

export default{
	components: {
		appModal,
		appSummernote,
		appImageUpload
	},
	data(){
		return{
			formKategori: {
				nama: '',
				deskripsi: ''
			},
			utama: '',
			form: {},
    	summernoteconfig:{
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
					['style', ['addclass','bold', 'italic', 'underline', 'hr']],
	                ['font', ['strikethrough', 'superscript', 'subscript','clear']],
	                ['color', ['color']],
	                ['para', ['ul', 'ol']],
	                ['paragraph',['paragraph']],
	                ['table',['table']],
	                ['insert',['link','picture','video']] ,
	                ['misc',['fullscreen']],
	                ['misc2',['undo','redo']]
				]
			},
			modalShow: false,
			modalState: '',
			modalTitle: '',
			modalColor: '',
			option: {},
			rules : {},
			modelKategori: [],
			initialize: '/api/artikel/create',
			store: '/api/artikel/store',
			storeKategori : '/api/artikel_kategori/store',
			method: 'post',
			state: ''
		}
	},
	beforeMount(){
		if(this.$route.meta.mode === 'edit'){
			this.initialize = '/api/artikel/edit/' + this.$route.params.id;
			this.store = '/api/artikel/update/' + this.$route.params.id;
			this.method = 'put';
		}
		this.fetchKategori();
		this.fetchData();
	},
	mounted(){
		corefunc.core_function();
		uniformFunc.uniform_function();
		this.other();
	},
	updated(){
		$('.bootstrap-select').selectpicker('refresh');
		$.uniform.update();
	},
	methods: {
		modalTutup(){
			this.modalShow = false;
		},
		modalOpen_Kategori(){
			this.modalShow = true;
			this.modalState = 'normal1';
			this.modalColor = 'bg-primary';
			this.modalTitle = 'Tambah kategori artikel';
			this.formKategori.nama = '';
			this.formKategori.deskripsi = '';
		},
		modalSuccess(title){
			this.modalState = 'success';
			this.modalTitle = title;
			this.modalColor = '';
	    },
		modalError(){
			this.modalState = 'error';
			this.modalTitle = 'Oops terjadi kesalahan :(';
			this.modalColor = '';
		},
		modalResultButton(){
			if(this.state == 'save'){
				if(this.modalState == 'success'){
					this.$router.push(this.redirect);
				}else{
					this.modalShow = false;
				}
			}else{
				this.modalShow = false;
			}
		},
		fetchKategori(){
			var vm = this;
			var url = '/api/get_artikel_kategori';
				axios.get(url)
					.then(function(response) {
						Vue.set(vm.$data, 'modelKategori',  response.data.model);
					})
					.catch(function(error) {
					})
		},
		fetchData(){
			var vm = this
			axios.get(this.initialize)
				.then(function(response){
					Vue.set(vm.$data, 'form', response.data.form);
					Vue.set(vm.$data, 'rules', response.data.rules);
					Vue.set(vm.$data, 'option', response.data.option);
				})
				.catch(function(error){
				})
		},
		save(){
			var vm = this;
			vm.state = "save";
			vm.modalState = 'loading';
			const form = toMulipartedForm(vm.form, vm.$route.meta.mode);
			axios[vm.method](vm.store, form)
				.then(function(response){
					if(response.data.saved){
						vm.modalSuccess(response.data.message);
					}else{
						vm.error();
					}
				})
				.catch(function(error){
					vm.modalError();
					Vue.set(vm.$data, 'errors' , error.response.data);
				})
		},
		saveKategori(){
			var vm = this
			vm.modalState = 'loading';
			vm.state = 'saveKategori';
			axios.post(this.storeKategori, this.formKategori)
				.then(function(response){
					if(response.data.saved){
						vm.fetchKategori();
						vm.form.artikel_kategori_id = response.data.id;
						vm.modalSuccess(response.data.message);
					}else{
						vm.modalError();
					}
				})
				.catch(function(error){
					vm.modalError();
				})
		},
		processFile(event) {
		    this.form.gambar = event.target.files[0]
		    console.log(event.target.files[0].name);
		},
		other(){
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
	}
}
</script>
