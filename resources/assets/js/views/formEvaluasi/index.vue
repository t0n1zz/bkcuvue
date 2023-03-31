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
				title: 'Form Evaluasi Kegiatan',
				kelas: 'formEvaluasi',
				titleDesc: 'Mengelola data form evaluasi kegiatan',
				titleIcon: 'icon-file-text',
			}
		},
		watch: {
			// check route changes
			$route(to, from) {
				this.fetch();
			},
		},
		methods: {
			
		},
		computed: {
			...mapGetters('formEvaluasi',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS'
			}),
		}
	}
</script>