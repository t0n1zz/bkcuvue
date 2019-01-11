<template>
	<div>
		<!-- Page header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon"></page-header>

		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
					</message>

					<infografis-data
						:title="title"
						:kelas="kelas"
						:columnData="columnData"></infografis-data>

					<table-data :title="title" :kelas="kelas"></table-data>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import {
		mapGetters
	} from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import tableData from "./table.vue";
	import infografisData from "./infografis.vue";

	export default {
		components: {
			pageHeader,
			message,
			tableData,
			infografisData,
		},
		data() {
			return {
				title: 'Laporan Perkembangan Gerakan',
				kelas: 'laporanCu',
				titleDesc: 'Mengelola data perkembangan gerakan',
				titleIcon: 'icon-stats-bars',
			}
		},
		methods: {
		},
		computed: {
			...mapGetters('laporanCu', {
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				columnData: 'columnData',
			}),
		}
	}
</script>