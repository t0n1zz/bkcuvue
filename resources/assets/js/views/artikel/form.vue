<template><div>
<!-- header -->
<div class="page-header">
	<div class="page-header-content has-visible-elements">
		<div class="page-title">
			<h4><i class="icon-plus22 position-left"></i> <span class="text-semibold">{{title}}</span> - {{ title2 }}</h4>
			<ul class="breadcrumb breadcrumb-caret position-right">
				<router-link :to="{ name:'dashboard' }" tag="li"><a>Dashboard</a></router-link>
				<router-link :to="{ name:'artikel' }" tag="li"><a>Artikel</a></router-link>
				<li class="active">{{title}}</li>
			</ul>
		</div>
		<div class="heading-elements visible-elements">
			<div class="heading-btn-group">
				<router-link :to="{ name:'artikel'}" class="btn btn-primary">
					<i class="icon-magazine"></i>
				</router-link>
			</div>
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
							<input type="radio" name="diutamakan" class="styled" value="1" v-model="form.utamakan">
							Ya
						</label>

						<label class="radio-inline">
							<input type="radio" name="diutamakan" class="styled" value="0" v-model="form.utamakan">
							Tidak
						</label>
					</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
						<h5>Gambar Utama:</h5>
						<app-image-upload v-model="form.gambar"></app-image-upload>
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
				<button type="submit" class="btn btn-primary">Simpan <i class="icon-arrow-right14 position-right"></i></button>
			</div>
		</form>
	</div>
</div>	
</div>
</div>
</div>

<!-- modal -->
<!-- tambah kategori -->
<app-modal :color="modal.color" :show="modal.show" @close="modalClose">
<div slot="modal-title"><i class="icon-plus22"></i> Tambah Kategori</div>
<div slot="modal-body">
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
</div>
<div slot="modal-footer">
	<button class="btn btn-link legitRipple" @click="modalClose">Batal</button>
	<button type="submit" class="btn btn-primary" @click="saveKategori">Simpan <i class="icon-arrow-right14 position-right"></i></button>
</div>
</app-modal>
	

</div></template>
<script>
import Vue from 'vue'
import axios from 'axios'
import coreFunc from '../../assets/core/app.js'
import uniformFunc from '../../assets/plugins/forms/styling/uniform.min.js'
import { toMulipartedForm } from '../../helpers/form'
import appSummernote from '../../modules/summernote.js'
import appModal from '../../components/modal'
import appImageUpload from '../../components/ImageUpload.vue'

export default{
	components: {
		appSummernote,
		appImageUpload,
		appModal
	},
	data(){
		return{
			form: {},
			formKategori: {
				nama: '',
				deskripsi: ''
			},
			modal: {
                name:'',
                show: false,
                size:'',
                color:'',
                data: '',
                state:'',
                miniTitle:'',
                miniContent:'',
                miniButton:'',
                miniType:''
            },
    		summernoteconfig:{
				height: 200,
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
			option: {},
			rules : {},
			modelKategori: [],
			title: 'Tambah artikel',
			title2: 'Menambah artikel',
			initialize: '/api/artikel/create',
			redirect: '/artikel',
			store: '/api/artikel/store',
			storeKategori : '/api/artikel_kategori/store',
			method: 'post'
		}
	},
	beforeMount(){
		if(this.$route.meta.mode === 'edit'){
			this.title = "Ubah artikel"
			this.title2 = "Mengubah artikel"
			this.initialize = '/api/artikel/' + this.$route.params.id + '/edit'
			this.store = '/api/artikel/update/' + this.$route.params.id
			this.method = 'put'
		}
		this.fetchKategori();
		this.fetchData();
	},
	mounted(){
		coreFunc.core_function();
		uniformFunc.uniform_function();

		this.other();
	},
	updated(){
		$('.bootstrap-select').selectpicker('refresh');
	},
	methods: {
		fetchKategori(){
			var vm = this;
			var url = '/api/get_artikel_kategori';
			vm.modal.state = 'loading';
            axios.get(url)
                .then(function(response) {
                    Vue.set(vm.$data, 'modelKategori',  response.data.model)
                    vm.modal.state = 'result';
                })
                .catch(function(error) {
                	vm.modal.state = 'result';
                    vm.modal.miniType = 'error';
                })
		},
		fetchData(){
			var vm = this
			axios.get(this.initialize)
				.then(function(response){
					Vue.set(vm.$data, 'form', response.data.form)
					Vue.set(vm.$data, 'rules', response.data.rules)
					Vue.set(vm.$data, 'option', response.data.option)
				})
				.catch(function(error){
					console.log(error)
				})
		},
		save(){
			var vm = this
			const form = toMulipartedForm(vm.form, vm.$route.meta.mode)
			axios[this.method](this.store, form)
				.then(function(response){
					if(response.data.saved){
						vm.$router.push(vm.redirect)
					}
				})
				.catch(function(error){
					Vue.set(vm.$data, 'errors' , error.response.data)
				})
		},
		saveKategori(){
			var vm = this
			axios.post(this.storeKategori, this.formKategori)
				.then(function(response){
					vm.modalShow = false;
					vm.fetchKategori();
					vm.form.artikel_kategori_id = response.data.id;
				})
				.catch(function(error){
					vm.modalShow = false;
				})
		},
		processFile(event) {
		    this.form.gambar = event.target.files[0]
		    console.log(event.target.files[0].name);
		},
		modalClose(){
			this.modal.show = false;
		},
		modalOpen_Kategori(){
			 this.modal.show= true;
			 this.modal.color="bg-primary"
			 this.formKategori.nama= '';
			 this.formKategori.deskripsi= '';
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

