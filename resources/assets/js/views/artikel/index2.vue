<template>
<div>
<!-- Page header -->
<div class="page-header">
	<div class="page-header-content has-visible-elements">
		<div class="page-title">
			<h4><i class="icon-magazine position-left"></i> <span class="text-semibold">Artikel</span> - Mengelola data artikel</h4>
			<ul class="breadcrumb breadcrumb-caret position-right">
				<router-link :to="{ name:'dashboard' }" tag="li"><a>Dashboard</a></router-link>
				<li class="active">Artikel</li>
			</ul>
		</div>
		<div class="heading-elements visible-elements">
			<div class="heading-btn-group">
				<router-link :to="{ name:'artikelCreate' }"  class="btn btn-primary">
					<i class="icon-plus22" ></i>
				</router-link>
			</div>
		</div>
	</div>
</div>
<!-- /page header -->
<!-- page container -->
<div class="page-container">
	<div class="page-content">
		<div class="content-wrapper">
			<!-- panel -->
			<div class="panel panel-flat">
				<!-- <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table> -->
				<v-server-table url="/api/artikel" :columns="columns" :options="options">
					<template slot="h_action">
						<div>
							<i class="icon-menu3"></i>
						</div>
					</template>
					<template slot="action" scope="props">
						<div>
							<button class="btn-default"><i class="icon-menu3"></i></button>
						</div>
					</template>
					<template slot="gambar" scope="props">
						<div>
							<img :src="'/images/artikel/' + props.row.gambar + 'n.jpg'" class="img-rounded img-responsive img-sm" v-if="props.row.gambar">
		        			<img :src="'/images/image-articlen.jpg'" class="img-rounded img-responsive img-sm" v-else>
						</div>
					</template>
					<template slot="terbitkan" scope="props">
						<div v-html="$options.filters.checkStatus(props.row.terbitkan)"></div>
					</template>
					<template slot="utamakan" scope="props">
						<div v-html="$options.filters.checkStatus(props.row.utamakan)"></div>
					</template>
					<template slot="created_at" scope="props">
						<div>{{props.row.created_at | publishDate}}</div>
					</template>
				</v-server-table>
			</div>
		</div>
	</div>
</div>
<!-- page container -->

<!-- modal -->
</div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import axios from 'axios'
import corefunc from '../../assets/core/app.js'
import moment from 'moment'

export default{
	name: 'ArtikelIndex',
	components:{
	},
	beforeMount() {
        // this.fetchData();
    },
	mounted(){
		corefunc.core_function();
	},
	data(){
		return{
			source: '/api/artikel',
			source2: '',
			columns: ['action','gambar','nama','penulis','terbitkan','utamakan','created_at'],
			options: {
				dateColumns: ['created_at'],
				headings: {
					gambar: 'Gambar',
					nama: 'Judul',
					penulis: 'Penulis',
					terbitkan: 'Terbitkan',
					utamakan: 'Utamakan',
					created_at: 'Ditulis'
				},
				sortable: ['nama','penulis','created_at'],
				sortIcon : {
					base: '',
					up: 'icon-chevron-up',
					down:'icon-chevron-down',
					is:'icon-menu-open'
				},
				skin: 'table-striped table-hover'
			},
			thead: [
				{title: 'Foto', key: 'gambar', type: 'string', sort: false, hide: false},
                {title: 'Judul', key: 'nama', type: 'string', filterKey:'nama', sort: true, hide: false},
                {title: 'Kategori', key: 'artikel_kategori_id', type: 'string', filterKey:'artikel_kategori.nama',groupKey: 'artikel__kategori.nama', sort: true, hide: false },
                {title: 'Penulis', key: 'penulis', type: 'string', filterKey:'penulis', groupKey: 'penulis',sort: true, hide: false},
                {title: 'Terbitkan', key: 'terbitkan', type: 'string', sort: true, hide: false},
                {title: 'Utamakan', key: 'utamakan', type: 'string', sort: true, hide: false},
                {title: 'Tgl. Tulis', key: 'created_at', type: 'string', sort: true, hide: false}
            ],
            modal: {
                show: false,
                size:'',
                color:'',
                data: '',
                state:'',
                miniTitle:'',
                miniButton:'',
                miniType:''
            }
		}
	},
	methods: {
		checkImages: function(value){
	    	return 
	    },
		fetchData() {
	        var vm = this;
	        axios.get(vm.source)
	            .then(function(response) {
	                Vue.set(vm.$data, 'tableData', response.data.model)
	            })
	            .catch(function(error) {
	                console.log(error.response)
	            })    
	    },
	    modalMenuOpen(data){
	    	this.modal.show= true;
	    	this.modal.data = data;
	    },
	    modalMenuClose(){
	    	if(this.modal.miniType == "success"){
	    		this.modal.miniType = '';
	    		bus.$emit('fetchData');
	    	}

	    	this.modal.show = false;
	    	this.modal.state = '';
	    },
	    modalMenuHapus(){
	    	this.modal.miniTitle = "Hapus Artikel Ini?";
	    	this.modal.miniButton ="Iya, Hapus";
	    	this.modal.miniType ="Hapus";
	    	this.modal.state = 'confirm';
	    },
	    modalMenuStatus(status){
	    	var statusmessage = '';
	    	if(status == "Terbitkan"){
	    		if(this.modal.data.terbitkan == 0){
	    			statusmessage = "Terbitkan";
	    		}else{
	    			statusmessage = "Tidak Terbitkan";
	    		}
	    		this.source2 = "updateTerbitkan";
	    	}else{
	    		if(this.modal.data.utamakan == 0){
	    			statusmessage = "Utamakan";
	    		}else{
	    			statusmessage = "Tidak Utamakan";
	    		}
	    		this.source2 = "updateUtamakan";
	    	}

	    	this.modal.miniTitle = statusmessage + " Artikel Ini?";
			this.modal.miniButton ="Iya, " + statusmessage;
	    	this.modal.miniType =status;
	    	this.modal.state = 'confirm';
	    },
	    modalError(){
	    	this.modal.miniTitle = "Ops terjadi kesalahan :(";
	    	this.modal.miniType = "error";
	    	this.modal.state = 'result';
	    },
	    modalSuccess(title){
	    	this.modal.miniTitle = title;
	    	this.modal.miniType = "success";
	    	this.modal.state = 'result';
	    },
	    modalConfirmOk(value){
	    	var vm = this
	    	vm.modal.state = "loading";
	    	if(value == 'Hapus'){
                axios.delete(`${this.source}/${this.modal.data.id}`)
                    .then(function(response) {
                        if(response.data.deleted) {
                            vm.modalSuccess(response.data.message);
                        }
                    })
                    .catch(function(error) {
                        vm.modalError();
                    })
	    	}else if(value == "Terbitkan" || value == "Utamakan" ){
	    		axios.post(`${this.source}/${this.source2}/${this.modal.data.id}`)
                    .then(function(response) {
                        if(response.data.saved) {
                            vm.modalSuccess(response.data.message);
                        }
                    })
                    .catch(function(error) {
                        vm.modalError();
                    })
	    	}
	    }
	},
	filters: {
	    publishDate: function(value){
	       return moment(value).format('DD MMMM YYYY');
	    },
	    trimString: function(string){
	    	return string.replace(/<(?:.|\n)*?>/gm, '').replace(/\&nbsp;/g, '').replace(/\&ldquo;/g, '').substring(0, 150) + ' [...]';
	    },
	    checkStatus: function(value){
	    	if(value > 0){
	    		return '<span class="bg-orange-400 text-highlight"><i class="icon-check"></i></span>';
	    	}else{
	    		return '<span class="bg-teal-300 text-highlight"><i class="icon-cross3"></i></span>';
	    	}
	    },
	    checkStatus2: function(value){
	    	if(value > 0){
	    		return '<i class="icon-check"></i>';
	    	}else{
	    		return '<i class="icon-cross3"></i>';
	    	}
	    }
	    
	}
}
</script>
