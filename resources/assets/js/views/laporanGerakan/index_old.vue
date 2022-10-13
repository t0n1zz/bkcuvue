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

					<div class="row">
						<!-- grafik -->
						<div class="col-lg-8" >	
							<grafik-laporan-cu-widget :id_cu="'0'" :columnData="columnData" :columnDataPearls="columnDataPearls"></grafik-laporan-cu-widget>
						</div>

						<!-- tabel -->
						<div class="col-lg-4">
							<table-laporan-cu-widget :id_cu="'0'" :columnData="columnData" :columnDataPearls="columnDataPearls"></table-laporan-cu-widget>
						</div>
					</div>

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
	import grafikLaporanCuWidget from '../dashboard/grafikLaporanCuWidget.vue';
	import tableLaporanCuWidget from '../dashboard/tableLaporanCuWidget.vue';

	export default {
		components: {
			pageHeader,
			message,
			tableData,
			grafikLaporanCuWidget,
			tableLaporanCuWidget
		},
		data() {
			return {
				title: 'Laporan Statistik Gerakan',
				kelas: 'laporanCu',
				titleDesc: 'Mengelola data statistik gerakan',
				titleIcon: 'icon-stats-bars',
			}
		},
		methods: {
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('laporanCu', {
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				columnData: 'columnData',
				columnDataPearls: 'columnDataPearls',
			}),
		}
	}
</script>