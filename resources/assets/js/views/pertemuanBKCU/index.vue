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

					<!-- select data -->
					<select-data 
						:kelas="kelas" v-if="$route.meta.mode != 'jalan'"></select-data>

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
	import pageHeader from "../../components/pageHeader.vue";
	import tableData from "./table.vue";
	import message from "../../components/message.vue";
	import selectData from "./select.vue";
	
	export default {
		components: {
			pageHeader,
			tableData,
			message,
			selectData
		},
		data() {
			return {
				title: 'Pertemuan BKCU',
				kelas: 'pertemuanBKCU',
				titleDesc: 'Mengelola data pertemuan BKCU',
				titleIcon: 'icon-ungroup',
			}
		},
		computed: {
			...mapGetters('pertemuanBKCU',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS'
			}),
		}
	}
</script>