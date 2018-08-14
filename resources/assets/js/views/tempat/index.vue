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
		components: {
			pageHeader,
			message,
			selectCu,
			tableData,
		},
		data() {
			return {
				title: 'Tempat',
				kelas: 'tempat',
				titleDesc: 'Mengelola data tempat',
				titleIcon: 'icon-location4',
				btn1Header: {
					route: 'artikelCu',
					params: 0,
					icon: 'icon-magazine',
					title: 'Artikel',
					can: 'index artikel'
				},
				btn2Header: {
					route: 'artikelKategoriCu',
					params: 0,
					icon: 'icon-grid6',
					title: 'Kategori Artikel',
					can: 'index artikelKategori'
				}
			}
		},
		mounted() {
			corefunc.core_function();
		},
		created(){
			this.btn1Header.params = this.$route.params.cu;
			this.btn2Header.params = this.$route.params.cu;
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('tempat',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
			}),
		}
	}
</script>