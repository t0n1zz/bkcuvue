<template>
	<div>
		<!-- Page header -->
		<page-header 
		:title="title" 
		:titleDesc="titleDesc" 
		:titleIcon="titleIcon" 
		:btn1Route="btn1Header.route" 
		:btn1Title="btn1Header.title" 
		:btn1Icon="btn1Header.icon" 
		:btn1Can="btn1Header.can" 
		:btn2Route="btn2Header.route" 
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
					<select-c-u 
						:kelas="kelas"
						:path="'artikelCU'"
						:isPus="true"></select-c-u>

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
	import selectCU from "../../components/selectCU.vue";
	import tableData from "./table.vue";
	
	export default {
		components: {
			pageHeader,
			message,
			selectCU,
			tableData,
		},
		data() {
			return {
				title: 'Artikel',
				kelas: 'artikel',
				titleDesc: 'Mengelola data artikel',
				titleIcon: 'icon-magazine',
				btn1Header: {
					route: 'artikelKategori',
					icon: 'icon-grid6',
					title: 'Kategori Artikel',
					can: 'index artikelKategori'
				},
				btn2Header: {
					route: 'artikelPenulis',
					icon: 'icon-pencil6',
					title: 'Penulis Artikel',
					can: 'index artikelPenulis'
				}
			}
		},
		mounted() {
			corefunc.core_function();
		},
		computed: {
			...mapGetters('artikel',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
			}),
		}
	}
</script>