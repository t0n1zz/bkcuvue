<template>
<div>
<!-- Page header -->
<div class="page-header">
	<div class="page-header-content">
		<div class="page-title">
			<h4><i class="icon-arrow-left52 position-left"></i> <span class="text-semibold">Artikel</span> - Mengelola data artikel</h4>
			<ul class="breadcrumb breadcrumb-caret position-right">
				<li><router-link to="/">Dashboard</router-link></li>
				<li class="active">Artikel</li>
			</ul>
		</div>
		<div class="heading-elements">
			<div class="heading-btn-group">
				<a @click="$router.push('/artikel/tambah')" class="btn btn-link btn-float has-text text-size-small"><i class="icon-plus-circle2 text-indigo-400"></i><span>Tambah Artikel</span></a>
			</div>
		</div>
	</div>
</div>
<!-- /page header -->
<!-- page container -->
<div class="page-container">
	<div class="page-content">
		<div class="content-wrapper">
			<data-viewer :source="source" :thead="thead" :filter="filter" :title="title">
	        <template scope="props">
	        	<tr>
		        	<td>{{props.item.judul}}</td>
		        	<td>{{props.item.kategoriartikel.name}}</td>
		        	<td>{{props.item.penulis}}</td>
		        	<td>{{props.item.created_at}}</td>
		        	<td class="text-center">
						<ul class="icons-list">
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">
									<i class="icon-menu9"></i>
								</a>

								<ul class="dropdown-menu dropdown-menu-right">
									<li><a @click="$router.push('/artikel/ubah/' + props.item.id)"><i class="icon-pencil5"></i> Ubah</a></li>
									<li><a ><i class="icon-trash"></i> Hapus</a></li>
								</ul>
							</li>
						</ul>
					</td>
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
import appjs from '../../js/app.js'
import moment from 'moment';
import DataViewer from '../../components/dataviewer.vue'
export default{
	name: 'ArtikelIndex',
	components:{
		DataViewer
	},
	created(){
		appjs.app_function();
	},
	data(){
		return{
			title: "Artikel",
			source: '/api/get_artikel',
			filter: ['judul','kategori','penulis'],
			thead: [
                {title: 'Judul', key: 'judul', sort: true},
                {title: 'Kategori', key: 'kategoriartikel.name', sort: true},
                {title: 'Penulis', key: 'penulis', sort: true},
                {title: 'Tgl. Tulis', key: 'created_at', sort: true}
            ],
		}
	}
}
</script>
