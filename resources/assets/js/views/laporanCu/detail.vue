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

					<message v-if="itemPearlsStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemPearls">
					</message>

					<!-- select data -->
					<select-data 
						:kelas="kelas"
						:isPus="false"
						:isNo_ba="true"></select-data>

					<div class="tabbable">
						<ul class="nav nav-tabs nav-tabs-solid nav-justified">
							<li :class="{'active' : tabName == 'analisisLaporanCu'}"><a @click.prevent="changeTab('analisisLaporanCu')"><i class="icon-dots position-left"></i> Laporan CU</a></li>
							<li :class="{'active' : tabName == 'analisisPearls'}"><a @click.prevent="changeTab('analisisPearls')"><i class="icon-dots position-left"></i> P.E.A.R.L.S.</a></li>
							<li :class="{'active' : tabName == 'diskusi'}"><a @click.prevent="changeTab('diskusi')"><i class="icon-bubble2 position-left"></i> Diskusi</a></li>
							<li :class="{'active' : tabName == 'revisi'}"><a @click.prevent="changeTab('revisi')"><i class="icon-stack2 position-left"></i> Revisi</a></li>
						</ul>
					</div>

					<!-- table data -->
					<div v-show="tabName == 'analisisLaporanCu'">
						<infografis-data
							:title="title"
							:kelas="kelas"
							:columnData="columnData"
							v-if="itemDataStat == 'success'"
							></infografis-data>
						<detail-laporan-cu
							:kelas="kelas"
							:columnData="columnData"
							></detail-laporan-cu>
					</div>

					<div v-show="tabName == 'analisisPearls'" v-if="isPearls">
						<infografis-pearls-data
							:title="titlePearls"
							:kelas="kelas"
							:columnData="columnDataPearls"
							v-if="itemPearlsStat == 'success'"
							></infografis-pearls-data>
						<detail-pearls
							:kelas="kelas"
							:columnData="columnData"
							></detail-pearls>	
					</div>

					<div v-show="tabName == 'diskusi'" v-if="isDiskusi">

					</div>

					<div v-show="tabName =='revisi'" v-if="isRevisi">
	
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
	import selectData from "./selectDetail.vue";
	import detailLaporanCu from "./detailLaporanCu.vue";
	import detailPearls from "./detailPearls.vue";
	import infografisData from "./infografis.vue";
	import infografisPearlsData from "./infografisPearls.vue";

	export default {
		components: {
			pageHeader,
			message,
			selectData,
			detailLaporanCu,
			detailPearls,
			infografisData,
			infografisPearlsData
		},
		data() {
			return {
				title: 'Detail Laporan CU',
				titlePearls: 'P.E.A.R.L.S',
				kelas: 'laporanCu',
				titleDesc: 'Mengelola data perkembangan CU',
				titleIcon: 'icon-stats-growth',
				selectCUPath: 'laporanCuCU',
				tabName: 'analisisLaporanCu',
				katax: '\\frac{1.7888}{1,6777}',
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
				},
				isPearls: false,
				isDiskusi: false,
				isRevisi: false
			}
		},
		mounted() {
			corefunc.core_function();
		},
		methods:{
			changeTab(value){
				this.tabName = value;
				if(value == 'analisisPearls' && !this.isPearls){
					this.isPearls = true;
				}
				if(value == 'diskusi' && !this.isDiskusi){
					this.isDiskusi = true;
				}
				if(value == 'revisi' && !this.isRevisi){
					this.isRevisi = true;
				}
			} 
		},
		computed: {
			...mapGetters('laporanCu',{
				itemData: 'data',
				itemDataStat: 'dataStat',
				itemPearls: 'pearls',
				itemPearlsStat: 'pearlsStat',
				columnData: 'columnData',
				columnDataPearls: 'columnDataPearls',
			}),
		}
	}
</script>
<style>
	@import "../../../../../node_modules/katex/dist/katex.min.css"
</style>