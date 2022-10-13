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
						<!-- widget grafik -->
						<div class="col-lg-12" >	
							<grafik-laporan-cu-widget :id_cu="'0'" :columnData="columnData" :columnDataPearls="columnDataPearls"></grafik-laporan-cu-widget>
						</div>

						<!-- widget tabel -->
						<!-- <div class="col-lg-4">
							<table-laporan-cu-widget :id_cu="'0'" :columnData="columnData" :columnDataPearls="columnDataPearls"></table-laporan-cu-widget>
						</div> -->
					</div>

					<!-- table -->
					<table-data :title="title" :kelas="kelas" :columnData="columnData"></table-data>
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
				kelas: 'laporanGerakan',
				titleDesc: 'Mengelola data statistik gerakan',
				titleIcon: 'icon-stats-bars',
				columnData: [
					{
						title: 'No.',
						name: 'No.',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						isChart: false,
					},
					{
						title: 'Periode',
						name: 'periode',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true,
						isChart: false,
					},
          {
						title: 'Laki-laki',
						name: 'lk',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						isChart: true,
        		isChartSelect: false,
					},
          {
						title: 'Perempuan',
						name: 'pr',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						isChart: true,
        		isChartSelect: false,
					},
          {
						title: 'Total Anggota',
						name: 'total_anggota',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						isChart: true,
        		isChartSelect: false,
					},
          {
						title: 'Aset',
						name: 'aset',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						isChart: true,
        		isChartSelect: false,
					},
					{
						title: 'SHU',
						name: 'shu',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						isChart: true,
        		isChartSelect: false,
					},
          {
						title: 'Piutang Anggota',
						name: 'piutang_anggota',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						isChart: true,
        		isChartSelect: false,
					},
          {
						title: 'Piutang Lalai',
						name: 'piutang_lalai',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						isChart: true,
        		isChartSelect: false,
					},
          {
						title: 'Simpanan Anggota',
						name: 'simpanan_anggota',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						isChart: true,
        		isChartSelect: false,
					},
          {
						title: 'DCU',
						name: 'dcu',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						isChart: true,
        		isChartSelect: false,
					},
          {
						title: 'DCR',
						name: 'dcr',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						isChart: true,
        		isChartSelect: false,
					},
          {
						title: 'Aset Lancar',
						name: 'aset_lancar',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						isChart: true,
        		isChartSelect: false,
					},
					{
						title: 'Tgl. Buat',
						name: 'created_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						isChart: false,
					},
					{
						title: 'Tgl. Ubah',
						name: 'updated_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						isChart: false,
					}
				],
				columnDataPearls: [],
			}
		},
		methods: {
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('laporanGerakan',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
			}),
		}
	}
</script>