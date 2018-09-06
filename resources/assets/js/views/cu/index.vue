<template>
	<div>
		<!-- Page header -->
		<page-header 
		:title="title" 
		:titleDesc="titleDesc" 
		:titleIcon="titleIcon"></page-header>

		
		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

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
	import tableData from "./table2.vue";
	import message from "../../components/message.vue";
	
	export default {
		components: {
			pageHeader,
			tableData,
			message,
		},
		data() {
			return {
				title: 'CU',
				kelas: 'cu',
				titleDesc: 'Mengelola data CU',
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
			// corefunc.core_function();
		},
		updated() {
			// $('.bootstrap-select').selectpicker('refresh');
		},
		computed: {
			...mapGetters('cu',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS'
			}),
		}
	}
</script>