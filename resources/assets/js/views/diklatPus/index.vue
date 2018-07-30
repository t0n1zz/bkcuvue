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
		:btn2Can="btn2Header.can"
		:btn3Route="btn3Header.route" 
		:btn3Title="btn3Header.title" 
		:btn3Icon="btn3Header.icon"
		:btn3Can="btn3Header.can" ></page-header>

		
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
	import tableData from "./table.vue";
	import message from "../../components/message.vue";
	
	export default {
		components: {
			pageHeader,
			tableData,
			message,
		},
		data() {
			return {
				title: 'Diklat',
				kelas: 'diklat',
				titleDesc: 'Mengelola data diklat',
				titleIcon: 'icon-office',
				btn1Header: {
					route: 'artikel',
					icon: 'icon-home9',
					title: 'KP/TP'
				},
				btn2Header: {
					route: 'artikel',
					icon: 'icon-user-tie',
					title: 'Staf/Aktivis'
				},
				btn3Header: {
					route: 'artikel',
					icon: 'icon-store2',
					title: 'Kelompok'
				},
			}
		},
		mounted() {
			corefunc.core_function();
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
		},
		computed: {
			...mapGetters('cu',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS'
			}),
		}
	}
</script>