<template>
	<div>
		<!-- Page header -->
		<page-header 
		:title="title" 
		:titleDesc="titleDesc" 
		:titleIcon="titleIcon"></page-header>

		
		<!-- page container -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">

					<!-- message -->
					<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
					</message>

					<!-- select data -->
					<select-data 
						:kelas="kelas"
						:path="selectCuPath"
						:isPus="true"
						:itemDataStat="itemDataStat"></select-data>

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
				title: 'Aktivis CU',
				kelas: 'aktivis',
				titleDesc: 'Mengelola data Aktivis CU',
				titleIcon: 'icon-user-tie',
				selectCuPath: 'aktivisCu',
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('aktivis',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS'
			}),
		}
	}
</script>