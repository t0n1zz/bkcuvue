<template>
	<div>
		<!-- Page header -->
		<page-header 
		:title="title" 
		:titleDesc="titleDesc" 
		:titleIcon="titleIcon" 
		:btn1Route="btn1Header.route" 
		:btn1Title="btn1Header.title" 
		:btn1Icon="btn1Header.icon" 
		:btn1Can="btn1Header.can" 
		:btn2Route="btn2Header.route" 
		:btn2Title="btn2Header.title" 
		:btn2Icon="btn2Header.icon"
		:btn2Can="btn2Header.can"></page-header>
		
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
						:path="selectCUPath"
						:isPus="false"
						:isNo_ba="true"></select-data>

					<div class="tabbable">
						<ul class="nav nav-tabs nav-tabs-solid nav-justified">
							<li :class="{'active' : tabName == 'table'}"><a @click.prevent="tabName = 'table'"><i class="icon-list2 position-left"></i> Tabel {{ title }}</a></li>
							<li :class="{'active' : tabName == 'infografis'}"><a @click.prevent="tabName = 'infografis'"><i class="icon-graph position-left"></i> Infografis {{ title }}</a></li>
						</ul>
					</div>


					<!-- table data -->
					<div v-show="tabName == 'table'">
						<table-data 
							:title="title" 
							:kelas="kelas"></table-data>
					</div>

					<div v-show="tabName =='infografis'">
						<infografis-data></infografis-data>
					</div>
					

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import corefunc from '../../assets/core/app.js';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import selectData from "./select.vue";
	import tableData from "./table.vue";
	import infografisData from "./infografis.vue";

	export default {
		components: {
			pageHeader,
			message,
			selectData,
			tableData,
			infografisData
		},
		data() {
			return {
				title: 'Laporan CU',
				kelas: 'laporanCu',
				titleDesc: 'Mengelola data perkembangan CU',
				titleIcon: 'icon-stats-growth',
				selectCUPath: 'laporanCuCU',
				tabName: 'table',
				btn1Header: {
					route: 'artikel',
					icon: 'icon-magazine',
					title: 'Artikel',
					can: 'index artikel'
				},
				btn2Header: {
					route: 'artikelPenulis',
					icon: 'icon-pencil6',
					title: 'Penulis Artikel',
					can: 'index artikelPenulis'
				}
			}
		},
		mounted() {
			corefunc.core_function();
		},
		computed: {
			...mapGetters('laporanCu',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
			}),
		}
	}
</script>