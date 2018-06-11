<template>
	<div>
		<!-- Page header -->
		<page-header 
		:title="title" 
		:titleDesc="titleDesc" 
		:titleIcon="titleIcon" 
		:btn1Route="btn1Header.route" 
		:btn1RouteParams="btn1Header.params"
		:btn1Title="btn1Header.title" 
		:btn1Icon="btn1Header.icon" 
		:btn1Can="btn1Header.can" 
		:btn2Route="btn2Header.route" 
		:btn2RouteParams="btn2Header.params"
		:btn2Title="btn2Header.title" 
		:btn2Icon="btn2Header.icon"
		:btn2Can="btn2Header.can"></page-header>
		
		<!-- page container -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">

					<!-- message -->
					<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
					</message>

					<!-- select data -->
					<select-cu 
						:kelas="kelas"
						:path="selectCuPath"
						:isPus="true"></select-cu>

					<!-- table data -->
					<table-data 
						:title="title" 
						:kelas="kelas"></table-data>
						
				</div>
			</div>
		</div>
		
		

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import corefunc from '../../assets/core/app.js';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import selectCu from "../../components/selectCu.vue";
	import tableData from "./table.vue";
	
	export default {
		name: 'UserIndex',
		components: {
			pageHeader,
			message,
			selectCu,
			tableData,
		},
		data() {
			return {
				title: 'User',
				kelas: 'user',
				titleDesc: 'Mengelola data user',
				titleIcon: 'icon-users4',
				selectCuPath: 'userCu',
				btn1Header: {
					route: 'artikelKategoriCu',
					params: 0,
					icon: 'icon-grid6',
					title: 'Kategori Artikel',
					can: 'index artikelKategori'
				},
				btn2Header: {
					route: 'artikelPenulisCu',
					params: 0,
					icon: 'icon-pencil6',
					title: 'Penulis Artikel',
					can: 'index artikelPenulis'
				},
			}
		},
		mounted() {
			corefunc.core_function();
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
		},
		computed:{
			...mapGetters('user',{
				itemDataStat: 'dataStatS',
			}),
		},
		filters: {
			publishDate: function (value) {
				return moment(value).format('DD-MM-YYYY') + '<br/>' + moment(value).format('kk:mm:ss');
			},
			publishDateMobile: function (value) {
				return moment(value).format('DD-MM-YYYY') + ' | ' + moment(value).format('kk:mm:ss');
			},
			trimString: function (string) {
				return string.replace(/<(?:.|\n)*?>/gm, '').replace(/\&nbsp;/g, '').replace(/\&ldquo;/g, '').substring(0, 150) +
					' [...]';
			},
			checkStatus: function (value) {
				if (value > 0) {
					return '<span class="bg-orange-400 text-highlight"><i class="icon-check"></i></span>';
				} else {
					return '<span class="bg-teal-300 text-highlight"><i class="icon-cross3"></i></span>';
				}
			},
			checkModal: function (value) {
				if (value > 0) {
					return '<i class="icon-check"></i>';
				} else {
					return '<i class="icon-cross3"></i>';
				}
			},
			checkImages: function (value) {
				return '/images/'+ this.kelas +'/' + value + 'n.jpg';
			}
		}
	}
</script>