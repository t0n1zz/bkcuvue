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
					<select-cu 
						:kelas="kelas"
						:path="selectCuPath"
						:isPus="false"
						v-if="profile.id_cu == 0"></select-cu>

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
	import selectCu from "../../components/selectCu.vue";
	
	export default {
		components: {
			pageHeader,
			tableData,
			message,
			selectCu
		},
		data() {
			return {
				title: 'Produk dan Pelayanan CU',
				kelas: 'produkCu',
				titleDesc: 'Mengelola data produk dan pelayanan CU',
				titleIcon: 'icon-list3',
				selectCuPath: 'produkCuCu',
			}
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('tp',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS'
			}),
		}
	}
</script>