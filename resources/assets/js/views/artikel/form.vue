<template><div>
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
						<select class="form-control" v-model="form.artikel_kategori_id" data-width="100%">
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
			<button type="button" class="btn btn-default" @click="mutateModalShow(false)"><i class="icon-cross"></i> Batal</button>
			<button type="submit" class="btn btn-primary">Simpan <i class="icon-arrow-right14 position-right"></i></button>
		</div>
	</form>
</div></template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { mapMutations } from 'vuex';
import * as types from '../../store/types';
import uniformFunc from '../../assets/plugins/forms/styling/uniform.min.js'
import { toMulipartedForm } from '../../helpers/form'
import appSummernote from '../../modules/summernote.js'
import appImageUpload from '../../components/ImageUpload.vue'

export default{
	props: ['close','toolbarButton','filterData'],
	components: {
		appSummernote,
		appImageUpload
	},
	data(){
		return{
			formKategori: {
				nama: '',
				deskripsi: ''
			},
			form: {},
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
			option: {},
			rules : {},
			modelKategori: [],
			title: 'Tambah artikel',
			title2: 'Menambah artikel',
			initialize: '/api/artikel/create',
			redirect: '/artikel',
			store: '/api/artikel/store',
			storeKategori : '/api/artikel_kategori/store',
			method: 'post',
			state: ''
		}
	},
	beforeMount(){
		if(this.$route.meta.mode === 'edit'){
			this.title = "Ubah artikel";
			this.title2 = "Mengubah artikel";
			this.initialize = '/api/artikel/' + this.$route.params.id + '/edit';
			this.store = '/api/artikel/update/' + this.$route.params.id;
			this.method = 'put';
		}
		this.fetchKategori();
		this.fetchData();
	},
	mounted(){
		uniformFunc.uniform_function();

		this.other();
	},
	updated(){
		
	},
	methods: {
		...mapMutations({
			mutateModalShow: types.mutateModalShow,
			mutateModalState: types.mutateModalState
		}),
		fetchKategori(){
			var vm = this;
			var url = '/api/get_artikel_kategori';
            axios.get(url)
                .then(function(response) {
                    Vue.set(vm.$data, 'modelKategori',  response.data.model);
                    $('.bootstrap-select').selectpicker('refresh');	
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
					console.log(error);
				})
		},
		save(){
			var vm = this;
			vm.modal.show= true;
			vm.modal.state = 'loading';
			vm.state = "save";
			const form = toMulipartedForm(vm.form, vm.$route.meta.mode);
			axios[vm.method](vm.store, form)
				.then(function(response){
					if(response.data.saved){
						vm.mutateModalState('success');
					}else{
						vm.mutateModalState('error');
					}
				})
				.catch(function(error){
					vm.mutateModalState('error');
					Vue.set(vm.$data, 'errors' , error.response.data);
				})
		},
		saveKategori(){
			var vm = this
			vm.modal.state = 'loading';
			vm.state = 'saveKategori';
			axios.post(this.storeKategori, this.formKategori)
				.then(function(response){
					if(response.data.saved){
						vm.modal.state = 'result';
                    	vm.modal.miniType = 'success';
                    	vm.modal.miniTitle = response.data.message;
						vm.fetchKategori();
						vm.form.artikel_kategori_id = response.data.id;
					}else{
						vm.modal.state = 'result';
                    	vm.modal.miniType = 'error';
                    	vm.modal.miniTitle = 'Oops.. terjadi kesalahan, silahkan coba lagi';
					}
				})
				.catch(function(error){
					vm.modal.state = 'result';
                    vm.modal.miniType = 'error';
                    vm.modal.miniTitle = 'Oops.. terjadi kesalahan, silahkan coba lagi';
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
			 this.modal.state= '';
			 this.modal.color="bg-primary";
			 this.formKategori.nama= '';
			 this.formKategori.deskripsi= '';
		},
		modalSuccess(title){
	    	this.modal.miniTitle = title;
	    	this.modal.miniType = 'success';
	    	this.modal.state = 'result';
	    },
	    modalResultButton(){
	    	if(this.state == 'save'){
	    		if(this.modal.miniType == 'success'){
	    			this.$router.push(this.redirect);
	    		}else{
	    			this.modal.show = false;
	    		}
	    	}else{
	    		this.modal.show = false;
	    	}
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

