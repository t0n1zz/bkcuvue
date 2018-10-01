<template>
	<div>
		<!-- Page header -->
		<page-header 
		:title="title" 
		:titleDesc="titleDesc" 
		:titleIcon="titleIcon" :level="2" :level2Title="level2Title" @level2Back="back()"></page-header>
		
		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

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

					<div class="nav-tabs-responsive mb-3">
						<ul class="nav nav-tabs nav-tabs-solid bg-light">
							<li class="nav-item"><a href="#" class="nav-link" :class="{'active' : tabName == 'analisisLaporanCu'}" @click.prevent="changeTab('analisisLaporanCu')"><i class="icon-dots mr-2"></i> Laporan CU</a></li>
							<li class="nav-item"><a href="#" class="nav-link"  :class="{'active' : tabName == 'analisisPearls'}" @click.prevent="changeTab('analisisPearls')"><i class="icon-dots mr-2"></i> P.E.A.R.L.S.</a></li>
							<li class="nav-item"><a href="#" class="nav-link"  :class="{'active' : tabName == 'diskusi'}" @click.prevent="changeTab('diskusi')"><i class="icon-bubble2 mr-2"></i> Diskusi</a></li>
							<li class="nav-item"><a href="#" class="nav-link"  :class="{'active' : tabName == 'revisi'}" @click.prevent="changeTab('revisi')"><i class="icon-stack2 mr-2"></i> Revisi</a></li>
						</ul>
					</div>

					<!-- table data -->
					<transition enter-active-class="animated fadeIn" mode="out-in">
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
					</transition>

					<transition enter-active-class="animated fadeIn" mode="out-in">
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
					</transition>

					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'diskusi'" v-if="isDiskusi">
							<diskusi></diskusi>
						</div>
					</transition>

					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName =='revisi'" v-if="isRevisi">
							<revisi></revisi>
						</div>
					</transition>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import selectData from "./selectDetail.vue";
	import detailLaporanCu from "./detailLaporanCu.vue";
	import detailPearls from "./detailPearls.vue";
	import diskusi from "./diskusi.vue";
	import revisi from "./revisi.vue";
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
			infografisPearlsData,
			diskusi,
			revisi
		},
		data() {
			return {
				title: 'Detail Laporan CU',
				titlePearls: 'P.E.A.R.L.S',
				kelas: 'laporanCu',
				titleDesc: 'Mengelola data perkembangan CU',
				titleIcon: 'icon-stats-bars2',
				level2Title: 'Laporan CU',
				selectCUPath: 'laporanCuCU',
				tabName: 'analisisLaporanCu',
				katax: '\\frac{1.7888}{1,6777}',
				isPearls: false,
				isDiskusi: false,
				isRevisi: false
			}
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
			},
			back(){
				// TODO back route
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