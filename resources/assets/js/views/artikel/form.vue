<template><div>
<!-- header -->
<div class="page-header">
	<div class="page-header-content has-visible-elements">
		<div class="page-title">
			<h4><i class="icon-arrow-left52 position-left"></i> <span class="text-semibold">{{title}}</span> - {{ title2 }}</h4>
			<ul class="breadcrumb breadcrumb-caret position-right">
				<router-link :to="{ name:'dashboard' }" tag="li"><a>Dashboard</a></router-link>
				<router-link :to="{ name:'artikel' }" tag="li"><a>Artikel</a></router-link>
				<li class="active">{{title}}</li>
			</ul>
		</div>
		<div class="heading-elements visible-elements">
			<div class="heading-btn-group">
				<router-link :to="{ name:'artikel'}" class="btn btn-link btn-float has-text text-size-small">
					<i class="icon-magazine text-indigo-400"></i>
					<span>Artikel</span>
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
		<form @submit.prevent="save">
			<div class="row">
				<div class="col-md-4">
					<div class="form-group">
						<label class="text-semibold">Judul:</label>
						<input type="text" class="form-control" placeholder="Silahkan masukkan judul artikel" v-model="form.name">
						<small class="text-danger" v-if="errors.name">{{errors.name[0]}}</small>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="text-semibold">Penulis:</label>
						<input type="text" class="form-control" placeholder="Silahkan masukkan nama penulis" v-model="form.content">
						<small class="text-danger" v-if="errors.penulis">{{errors.penulis[0]}}</small>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="text-semibold">Kategori:</label>
						<select data-placeholder="Silahkan pilih kategori artikel" class="select"  v-model="form.artikel_kategori_id">
                         	<option v-for="kategori in modelKategori" :value="kategori.id">{{ kategori.nama }}</option>
                        </select>
						<small class="text-danger" v-if="errors.artikel_kategori_id">{{errors.kategori[0]}}</small>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="display-block text-semibold">Terbitkan:</label>
						<label class="radio-inline">
							<input type="radio" name="status" class="styled" value="true" v-model="form.terbitkan">
							Ya
						</label>
						<label class="radio-inline">
							<input type="radio" name="status" class="styled" value="false" v-model="form.terbitkan">
							Tidak
						</label>
						<small class="text-danger" v-if="errors.terbitkan">{{errors.terbitkan[0]}}</small>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="display-block text-semibold">Utamakan:</label>
						<label class="radio-inline">
							<input type="radio" name="diutamakan" class="styled" value="true" v-model="form.utamakan">
							Ya
						</label>

						<label class="radio-inline">
							<input type="radio" name="diutamakan" class="styled" value="false" v-model="form.utamakan">
							Tidak
						</label>
						<small class="text-danger" v-if="errors.utamakan">{{errors.utamakan[0]}}</small>
					</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
						<label class="text-semibold">Isi Artikel:</label>
						<summernote
						    name="editor"
						    :model="form.content"
						    v-on:change="value => { form.content = value }"
						  ></summernote>
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

</div></template>
<script>
import Vue from 'vue'
import axios from 'axios'
import corefunc from '../../assets/core/app.js'
import selectfunc from '../../assets/plugins/forms/selects/select2.min.js'
import uniformfunc from '../../assets/plugins/forms/styling/uniform.min.js'
import summernote from '../../modules/summernote.js'

export default{
	data(){
		return{
			form: {},
			option: {},
			errors: {},
			modelKategori: { data:[] },
			title: 'Tambah artikel',
			title2: 'Menambah artikel',
			initialize: '/api/artikel/create',
			redirect: '/',
			store: '/api/customer',
			method: 'post'
		}
	},
	mounted(){
		corefunc.core_function();
		selectfunc.select_function();
		uniformfunc.uniform_function();

		$('.select').select2();
		$('.summernote').summernote();
		$(".styled, .multiselect-container input").uniform({
	        radioClass: 'choice'
	    });
	},
	beforeMount(){
		if(this.$route.meta.mode === 'edit'){
			this.title = "Ubah artikel"
			this.title2 = "Mengubah artikel"
			this.initialize = '/api/artikel/' + this.$route.params.id + '/edit'
			this.store = '/api/customer' + this.$route.params.id
			this.method = 'put'
		}
		this.fetchKategori();
		this.fetchData();
	},
	methods: {
		fetchKategori(){
			var vm = this
			var url = '/api/get_artikel_kategori';
            axios.get(url)
                .then(function(response) {
                    Vue.set(vm.$data, 'modelKategori', response.data.model)
                })
                .catch(function(error) {
                    console.log(error)
                })
		},
		fetchData(){
			var vm = this
			axios.get(this.initialize)
				.then(function(response){
					Vue.set(vm.$data, 'form', response.data.form)
					Vue.set(vm.$data, 'option', response.data.option)
				})
				.catch(function(error){
					console.log(error)
				})
		},
		save(){

		}
	},
	components: {
		summernote
	}
}
</script>