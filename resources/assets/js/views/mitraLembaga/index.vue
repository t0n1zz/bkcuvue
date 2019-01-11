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
				title: 'Lembaga Mitra',
				kelas: 'mitraLembaga',
				titleDesc: 'Mengelola data lembaga mitra',
				titleIcon: 'icon-briefcase'
			}
		},
		methods:{
		},
		computed: {
			...mapGetters('mitraLembaga',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS'
			}),
		}
	}
</script>