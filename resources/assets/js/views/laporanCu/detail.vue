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
							<li :class="{'active' : tabName == 'analisis'}"><a @click.prevent="changeTab('analisis')"><i class="icon-dots position-left"></i> Analisis</a></li>
							<li :class="{'active' : tabName == 'diskusi'}"><a @click.prevent="changeTab('diskusi')"><i class="icon-bubble2 position-left"></i> Diskusi</a></li>
							<li :class="{'active' : tabName == 'revisi'}"><a @click.prevent="changeTab('revisi')"><i class="icon-stack2 position-left"></i> Revisi</a></li>
						</ul>
					</div>

					<!-- table data -->
					<div v-show="tabName == 'analisis'">
						<!-- <infografis-data
							:title="title"
							:kelas="kelas"
							:columnData="columnData"></infografis-data> -->

						<div class="row">
							<div class="col-md-3">
								<div class="panel bg-blue-400 has-bg-image">
									<div class="panel-body">
										<div class="heading-elements">
											<ul class="icons-list">
												<li><a data-action="reload"></a></li>
											</ul>
										</div>

										<h2 class="no-margin text-semibold">4,389</h2>
										Orders weekly
										<div class="text-muted text-size-small">4,728 avg</div>
									</div>

									<div id="line_chart_simple"></div>
								</div>
							</div>
						</div>	
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
	import infografisData from "./infografis.vue";
	import infografisPearlsData from "./infografisPearls.vue";

	export default {
		components: {
			pageHeader,
			message,
			selectData,
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
				tabName: 'table',
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
				isDiskusi: false,
				isRevisi: false
			}
		},
		mounted() {
			corefunc.core_function();
		},
		created(){
			this.fetch();
		},
		methods:{
			fetch(){
				if(this.$route.meta.mode == 'detail'){
					this.$store.dispatch('laporanCu/edit',this.$route.params.id);
				}else{
					this.$store.dispatch('laporanCu/editTp',this.$route.params.id);
				}
			},
			changeTab(value){
				this.tabName = value;
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
				columnData: 'columnDataPearls',
			}),
		}
	}
</script>
<style>
	@import "../../../../../node_modules/katex/dist/katex.min.css"
</style>