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


					<div class="nav-tabs-responsive mb-3">
						<ul class="nav nav-tabs nav-tabs-bottom flex-nowarp mb-0">
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'table'}" @click.prevent="changeTab('table')"><i class="icon-table2 mr-2"></i> Tabel Statistik</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'infografis'}" @click.prevent="changeTab('infografis')"><i class="icon-graph mr-2"></i> Infografis Statistik</a>
							</li>
						</ul>
					</div>

					<!-- table data -->
					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'table'">
							<table-data :title="title" :kelas="kelas" :columnData="columnData"></table-data>
						</div>
					</transition>

					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'infografis'" v-if="isInfografis">
							<infografis-data
								:title="title"
								:kelas="kelas"
								:columnData="columnData"></infografis-data>
						</div>
					</transition>


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
				titleIcon: 'icon-stats-dots',
				selectCUPath: 'laporanCuCU',
				tabName: 'table',
				isTablePearls: false,
				isInfografis: false,
				isInfografisPearls: false
			}
		},
		methods: {
			changeTab(value) {
				this.tabName = value;
				if (value == 'infografis' && !this.isInfografis) {
					this.isInfografis = true
				}
			}
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('laporanCu', {
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				columnData: 'columnData',
			}),
		}
	}
</script>