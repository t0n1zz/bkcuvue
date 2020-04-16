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

					<!-- select data -->
					<select-data 
						:kelas="kelas"
						:isPus="false"
						:isNo_ba="true"></select-data>


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
				title: 'Detail Monitoring',
				kelas: 'monitoring',
				titleDesc: 'Mengelola data monitoring',
				titleIcon: 'icon-stats-bars2',
				level2Title: 'Monitoring',
				tabName: 'analisisLaporanCu',
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
				if(this.itemData.id_cu){
					if(this.itemData.id_cu != 0){
						this.$router.push({name: this.kelas + 'Cu', params:{cu: this.itemData.id_cu, tp: 'konsolidasi'}});
					}else{
						this.$router.push({name: this.kelas + 'Cu', params:{cu: this.itemData.id_cu, tp: this.itemData.id_tp}});
					}
				}else{
					if(this.itemData.tp.id_cu != 0){
						this.$router.push({name: this.kelas + 'Cu', params:{cu: this.itemData.tp.id_cu, tp: 'konsolidasi'}});
					}else{
						this.$router.push({name: this.kelas + 'Cu', params:{cu: this.itemData.tp.id_cu, tp: this.itemData.id_tp}});
					}
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