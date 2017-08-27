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
		        	<tr>
			        	<td>{{props.item.nama}}</td>
			        	<td>{{props.item.artikel__kategori.nama}}</td>
			        	<td>{{props.item.penulis}}</td>
			        	<td>{{props.item.created_at}}</td>
		        	</tr>
		        </template>
		    </data-viewer>
		</div>
	</div>
</div>
<!-- page container -->
</div>
</template>
<script type="text/javascript">
import corefunc from '../../assets/core/app.js'
import moment from 'moment'
import DataViewer from '../../components/dataviewer.vue'

export default{
	name: 'ArtikelIndex',
	components:{
		DataViewer
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
                {title: 'Judul', key: 'nama', sort: true},
                {title: 'Kategori', key: 'artikel_kategori_id', sort: true},
                {title: 'Penulis', key: 'penulis', sort: true},
                {title: 'Tgl. Tulis', key: 'created_at', sort: true}
            ],
		}
	}
}
</script>
