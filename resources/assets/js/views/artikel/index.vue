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
			<data-viewer :source="source" :thead="thead" :toolbarButton="4">
		        <template scope="props">
		        	<tr class="cursor-pointer" @click="modalMenuOpen(props.item)">
		        		<td v-if="!thead[0].hide">
		        			<img :src="'/images/artikel/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive img-sm" v-if="props.item.gambar">
		        			<img :src="'/images/image-articlen.jpg'" class="img-rounded img-responsive img-sm" v-else>
	        			</td>
			        	<td v-if="!thead[1].hide">{{props.item.nama}}</td>
			        	<td v-if="!thead[2].hide">{{props.item.artikel__kategori.nama}}</td>
			        	<td v-if="!thead[3].hide">{{props.item.penulis}}</td>
			        	<td v-if="!thead[4].hide" v-html="$options.filters.checkStatus(props.item.terbitkan)"></td>
			        	<td v-if="!thead[5].hide" v-html="$options.filters.checkStatus(props.item.utamakan)"></td>
			        	<td v-if="!thead[6].hide" class="text-nowrap">{{props.item.created_at | publishDate}}</td>
		        	</tr>
		        </template>
		    </data-viewer>
		</div>
	</div>
</div>
<!-- page container -->

<!-- modal -->
<!-- table-context-menu -->
<app-modal  :show="modal.show" :state="modal.state" :size="modal.size" :color="modal.color" @close="modalMenuClose">
	<div slot="modal-body">
		<div class="panel panel-flat blog-horizontal blog-horizontal-2">
			<div class="panel-body">
				<div class="thumb">
					<img :src="'/images/artikel/' + modal.data.gambar + '.jpg'" class="img-rounded img-responsive" v-if="modal.data.gambar">
	    			<img :src="'/images/image-article.jpg'" class="img-rounded img-responsive" v-else>
				</div>
				<div class="blog-preview">
					<h5 class="blog-title text-semibold">{{modal.data.nama}}</h5>
					<p v-if="modal.data.content">{{ modal.data.content | trimString }}</p>
				</div>
			</div>
			<div class="panel-footer panel-footer-condensed">
				<div class="heading-elements visible-elements">
					<ul class="list-inline list-inline-separate heading-text text-muted">
						<li>{{modal.data.created_at | publishDate}}</li>
						<li>Penulis: {{ modal.data.penulis }}</li>
						<li v-if="modal.data.artikel__kategori">Kategori: {{ modal.data.artikel__kategori.nama }}</li>
						<li>Terbit: <span v-html="$options.filters.checkStatus2(modal.data.terbitkan)"></span></li>
						<li>Utama: <span v-html="$options.filters.checkStatus2(modal.data.utamakan)"></span></li>
					</ul>
				</div>
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="col-sm-6">
				<div class="list-unstyled">
					<a class="list-group-item"><i class="icon-reading"></i> Baca</a>
					<a class="list-group-item"><i class="icon-pencil5"></i> Ubah</a>
					<a class="list-group-item" @click.prevent="modalMenuHapus"><i class="icon-bin2"></i> Hapus</a>
				</div>
			</div>
			<div class="col-sm-6">
				<div class="list-unstyled">
					<a class="list-group-item" @click.prevent="modalMenuStatus('Terbitkan')" ><i class="icon-file-upload"></i> 
						<span v-if="modal.data.terbitkan == 0">Terbitkan</span> 
						<span v-else>Tidak Terbitkan</span></a>
					<a class="list-group-item" @click.prevent="modalMenuStatus('Utamakan')"><i class="icon-pushpin"></i> 
						<span v-if="modal.data.utamakan == 0">Utamakan</span> 
						<span v-else>Tidak Utamakan</span></a>
				</div>
			</div>
		</div>
		<hr>
	</div>
	<div slot="modal-confirm" class="text-center">
		<span class="text-warning"><i class="icon-exclamation" style="font-size: 5em"></i></span>
		<h2>{{modal.miniTitle}}</h2>
		<ul class="list-inline">
	        <li><button type="button" class="btn btn-link legitRipple" @click="modal.state = ''">Batal</button></li>
	        <li><button type="button" class="btn btn-warning" @click="modalConfirmOk(modal.miniType)"><i class="icon-checkmark5"></i> {{modal.miniButton}}</button></li>
	    </ul>
	</div>
	<div slot="modal-result" class="text-center">
		<span class="text-primary" v-if="modal.miniType === 'success'"><i class="icon-checkmark-circle2" style="font-size: 5em"></i></span>
		<span class="text-danger" v-else><i class="icon-close2" style="font-size: 5em"></i></span>
		<h2>{{modal.miniTitle}}</h2>
		<ul class="list-inline">
	        <li><button type="button" class="btn btn-default" @click="modalMenuClose">OK</button></li>
	    </ul>
	</div>
	<div slot="modal-footer">
		<button class="btn btn-link legitRipple" @click="modalMenuClose">Batal</button>
	</div>
</app-modal>

</div>
</template>
<script type="text/javascript">
import {bus} from '../../app';
import corefunc from '../../assets/core/app.js'
import moment from 'moment'
import DataViewer from '../../components/dataviewer.vue'
import appModal from '../../components/modal'

export default{
	name: 'ArtikelIndex',
	components:{
		DataViewer,
		appModal,
	},
	mounted(){
		corefunc.core_function();
	},
	data(){
		return{
			source: '/api/artikel',
			source2 : '',
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
	    },
	    checkImages: function(value){
	    	return '/images/artikel/' + value + 'n.jpg';
	    }
	}
}
</script>
