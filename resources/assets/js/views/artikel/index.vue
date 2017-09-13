<template>
<div>
<!-- Page header -->
<div class="page-header">
	<div class="page-header-content has-visible-elements">
		<div class="page-title">
			<h4><i class="icon-arrow-left52 position-left"></i> <span class="text-semibold">Artikel</span> - Mengelola data artikel</h4>
			<ul class="breadcrumb breadcrumb-caret position-right">
				<router-link :to="{ name:'dashboard' }" tag="li"><a>Dashboard</a></router-link>
				<li class="active">Artikel</li>
			</ul>
		</div>
		<div class="heading-elements visible-elements">
			<div class="heading-btn-group">
				<router-link :to="{ name:'artikelCreate' }" class="btn btn-link btn-float has-text text-size-small">
					<i class="icon-plus-circle2 text-indigo-400"></i>
					<span>Tambah Artikel</span>
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
			<data-viewer :source="source" :thead="thead" :filters="filters" :title="title">
		        <template scope="props">
		        	<tr class="cursor-pointer" @click="modalMenuOpen(props.item)">
		        		<td>
		        			<img :src="'/images/artikel/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive img-sm" v-if="props.item.gambar">
		        			<img :src="'/images/image-articlen.jpg'" class="img-rounded img-responsive img-sm" v-else>
	        			</td>
			        	<td>{{props.item.nama}}</td>
			        	<td>{{props.item.artikel__kategori.nama}}</td>
			        	<td>{{props.item.penulis}}</td>
			        	<td v-html="$options.filters.checkStatus(props.item.terbitkan)"></td>
			        	<td v-html="$options.filters.checkStatus(props.item.utamakan)"></td>
			        	<td class="text-nowrap">{{props.item.created_at | publishDate}}</td>
		        	</tr>
		        </template>
		    </data-viewer>
		</div>
	</div>
</div>
<!-- page container -->

<!-- modal -->
<!-- table-context-menu -->
<app-modal  :show="modalShow" :isConfirm="modalConfrim"  @close="modalMenuClose">
<div slot="modal-body">
	<div class="panel panel-flat blog-horizontal blog-horizontal-2">
		<div class="panel-body">
			<div class="thumb">
				<img :src="'/images/artikel/' + modalData.gambar + '.jpg'" class="img-rounded img-responsive" v-if="modalData.gambar">
    			<img :src="'/images/image-article.jpg'" class="img-rounded img-responsive" v-else>
			</div>
			<div class="blog-preview">
				<h5 class="blog-title text-semibold">{{modalData.nama}}</h5>
				<p v-if="modalData.content">{{ modalData.content | trimString }}</p>
			</div>
		</div>
		<div class="panel-footer panel-footer-condensed">
			<div class="heading-elements visible-elements">
				<ul class="list-inline list-inline-separate heading-text text-muted">
					<li>{{modalData.created_at | publishDate}}</li>
					<li>Penulis: {{ modalData.penulis }}</li>
					<li v-if="modalData.artikel__kategori">Kategori: {{ modalData.artikel__kategori.nama }}</li>
					<li>Terbit: <span v-html="$options.filters.checkStatus2(modalData.terbitkan)"></span></li>
					<li>Utama: <span v-html="$options.filters.checkStatus2(modalData.utamakan)"></span></li>
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
				<a class="list-group-item"><i class="icon-file-upload"></i> Terbitkan</a>
				<a class="list-group-item"><i class="icon-pushpin"></i> Utamakan</a>
			</div>
		</div>
	</div>
	<hr>
</div>
<div slot="modal-confirm" class="text-center">
	<span class="text-warning"><i class="icon-exclamation" style="font-size: 5em"></i></span>
	<h2>{{modalConfirmTitle}}</h2>
	<ul class="list-inline">
        <li><button class="btn btn-link legitRipple" @click.prevent="modalConfrim = false">Batal</button></li>
        <li><button class="btn btn-warning"><i class="icon-checkmark5"></i> Iya, Hapus</button></li>
    </ul>
</div>
<div slot="modal-footer">
	<button class="btn btn-link legitRipple" @click="modalMenuClose">Batal</button>
</div>
</app-modal>

</div>
</template>
<script type="text/javascript">
import corefunc from '../../assets/core/app.js'
import moment from 'moment'
import DataViewer from '../../components/dataviewer.vue'
import appModal from '../../components/modal'  

export default{
	name: 'ArtikelIndex',
	components:{
		DataViewer,
		appModal
	},
	mounted(){
		corefunc.core_function();
	},
	data(){
		return{
			title: "Artikel",
			source: '/api/artikel',
			filters: [
                {title: 'Judul', key: 'nama'},
                {title: 'Kategori', key: 'artikel_kategori.nama'},
                {title: 'Penulis', key: 'penulis'},
            ],
			thead: [
				{title: 'Foto', key: 'gambar', sort: false},
                {title: 'Judul', key: 'nama', sort: true},
                {title: 'Kategori', key: 'artikel_kategori_id', sort: true},
                {title: 'Penulis', key: 'penulis', sort: true},
                {title: 'Terbitkan', key: 'terbitkan', sort: true},
                {title: 'Utamakan', key: 'utamakan', sort: true},
                {title: 'Tgl. Tulis', key: 'created_at', sort: true}
            ],
            modalShow: false,
            modalConfrim: false,
            modalConfirmTitle: '',
            modalColor:'',
			modalData:''
		}
	},
	methods: {
	    modalMenuOpen(data){
	    	this.modalShow= true;
	    	this.modalColor="bg-primary"
	    	this.modalData = data;
	    },
	    modalMenuClose(){
	    	this.modalShow = false
	    	this.modalConfrim = false
	    },
	    modalMenuHapus(){
	    	this.modalConfirmTitle = "Hapus Artikel Ini?"
	    	this.modalConfrim = true
	    }
	},
	filters: {
	    publishDate: function(value){
	       return moment(value).format('DD MMMM YYYY')
	    },
	    trimString: function(string){
	    	return string.replace(/<(?:.|\n)*?>/gm, '').replace(/\&nbsp;/g, '').replace(/\&ldquo;/g, '').substring(0, 150) + ' [...]';
	    },
	    checkStatus: function(value){
	    	if(value > 0){
	    		return '<span class="bg-orange-400 text-highlight"><i class="icon-check"></i></span>'
	    	}else{
	    		return '<span class="bg-teal-300 text-highlight"><i class="icon-cross3"></i></span>'
	    	}
	    },
	    checkStatus2: function(value){
	    	if(value > 0){
	    		return '<i class="icon-check"></i>'
	    	}else{
	    		return '<i class="icon-cross3"></i>'
	    	}
	    },
	    checkImages: function(value){
	    	return '/images/artikel/' + value + 'n.jpg';
	    }
	}
}
</script>
