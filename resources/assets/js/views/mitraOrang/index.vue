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
	
	export default {
		components: {
			pageHeader,
			tableData,
			message,
		},
		data() {
			return {
				title: 'Mitra Perseorangan',
				kelas: 'mitraOrang',
				titleDesc: 'Mengelola data mitra perseorangan',
				titleIcon: 'icon-briefcase',
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('mitraOrang',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS'
			}),
		}
	}
</script>