<template>
<div>
	
	<!-- laporancu -->
	<line-chart
		:titleText="titleText"
		:title="title"
		:kelas="kelas"
		:query="query"
		:dataShownTitle1="dataShownTitle1"
		:dataShownName1="dataShownName1"
		:axisLabelKey="axisLabelKey"
		:itemData="itemData"
		:itemDataStat="itemDataStat"
		:columnData="columnData"
		@fetch="fetch()"
		v-if="this.$route.meta.mode == 'cu' || this.$route.meta.mode == 'detail' || this.$route.meta.mode == 'detailTp'  ||
		this.$route.name == 'dashboard'"
		></line-chart>

	<bar-chart
		:titleText="titleText"
		:title="title"
		:kelas="kelas"
		:query="query"
		:dataShownTitle1="dataShownTitle1"
		:dataShownName1="dataShownName1"
		:axisLabelKey="axisLabelKey"
		:itemData="itemData"
		:itemDataStat="itemDataStat"
		:columnData="columnData"
		@fetch="fetch()"
		v-else-if="this.$route.meta.mode == 'cuPeriode'"
		></bar-chart>

	<bar-chart
		:titleText="titleText"
		:title="title"
		:kelas="kelas"
		:query="query"
		:dataShownTitle1="dataShownTitle1"
		:dataShownName1="dataShownName1"
		:axisLabelKey="axisLabelKey"
		:itemData="itemData"
		:itemDataStat="itemDataStat"
		:columnData="columnData"
		@fetch="fetch()"
		v-else
		></bar-chart>

</div>
</template>



<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import barChart from '../../components/barChart.vue';
import lineChart from '../../components/lineChart.vue';

export default {
	components:{
		barChart,
		lineChart
	},
	props:['title','kelas','columnData'],
  data(){
    return {
			pages: [],
			titleText:'',
			dataShownTitle1:'P1',
			dataShownName1:'p1',
			axisLabelKey:'cu_name',
			isFirstLoad: true,
			cuName:'',
			query: {
        order_column: "p1",
        order_direction: "desc",
        filter_match: "and",
        limit: 50,
        page: 1
      },
    }
	},
	created() {
		this.fetch();
	},
	watch: {
		// check route changes
		'$route' (to, from){
			this.fetch();
		},
		itemDataStat(value){
			if(value == "success"){
				// if(this.isFirstLoad){ TODO: fix this
				// 	this.checkPage();
				// 	this.isFirstLoad = false;
				// }
				if(this.$route.meta.mode == 'periode'){
					this.titleText = 'Grafik Laporan Pearls Semua CU Periode ' + this.formatPeriode(this.$route.params.periode);
				}else if(this.$route.meta.mode == 'cu'){
					if(this.$route.params.tp == 'konsolidasi'){
						this.titleText = 'Grafik Laporan Pearls konsolidasi CU ' + this.itemData.data[0].cu.name;
					}else{
						this.titleText = 'Grafik Laporan Pearls' + this.itemData.data[0].tp.name;
					}	
				}else if(this.$route.meta.mode == 'cuPeriode'){
					this.titleText = 'Grafik Laporan Pearls Semua TP Periode' + this.formatPeriode(this.$route.params.periode);
				}else if(this.$route.meta.mode == 'detail'){
					this.titleText = 'Grafik Laporan Pearls CU ' + this.itemData.data[0].cu.name;
				}else if(this.$route.meta.mode == 'detailTp'){
					this.titleText = 'Grafik Laporan Pearls ' + this.itemData.data[0].tp.name;
				}else if(this.$route.name == 'dashboard'){
					this.titleText = 'Grafik Laporan Perkembangan CU';
				}else{
					this.titleText = 'Grafik Laporan Pearls Semua CU Periode ' + this.formatPeriode(this.$route.params.periode);
				}
			}
		}
	},
	methods: {
		// fetching data from database
		fetch(){
			 if(this.$route.meta.mode == 'periode'){
				this.$store.dispatch(this.kelas + '/grafikPearlsPeriode', [this.query,this.$route.params.periode]);

				this.axisLabelKey = 'cu_name';
				this.titleText = 'Grafik Pearls ' + this.title + ' periode ' + this.formatPeriode(this.selectData);	
			}else if(this.$route.meta.mode == 'cu'){
				if(this.$route.params.tp == 'konsolidasi'){
					this.$store.dispatch(this.kelas + '/grafikPearlsCu', [this.query,this.$route.params.cu]);
					this.axisLabelKey = 'periode';	
				}else{
					this.$store.dispatch(this.kelas + '/grafikPearlsTp', [this.query,this.$route.params.tp]);
					this.axisLabelKey = 'periode';	
				}
			}else if(this.$route.meta.mode == 'cuPeriode'){
				this.$store.dispatch(this.kelas + '/grafikPearlsTpPeriode', [this.query,this.$route.params.cu, this.$route.params.periode]);
				this.axisLabelKey = 'tp_name';	
			}else if(this.$route.meta.mode == 'detail'){
				this.$store.dispatch(this.kelas + '/grafikPearlsCu', [this.query,this.detailData.id_cu]);
				this.axisLabelKey = 'periode';
				this.query.order_column = 'periode';
				this.query.order_direction = 'asc';
			}else if(this.$route.meta.mode == 'detailTp'){
				this.$store.dispatch(this.kelas + '/grafikPearlsTp', [this.query,this.detailData.id_tp]);
				this.axisLabelKey = 'periode';
				this.query.order_column = 'periode';
				this.query.order_direction = 'asc';	
			}else if(this.$route.name == 'dashboard'){
					this.$store.dispatch(this.kelas + '/grafikPearlsCu', [this.query,this.currentUser.id_cu]);
					this.axisLabelKey = 'periode';	
			}else{
				this.$store.dispatch(this.kelas + '/grafikPearlsPeriode', [this.query,this.$route.params.periode]);

				this.axisLabelKey = 'cu_name';
				this.titleText = 'Grafik Pearls' + this.title + ' periode ' + this.formatPeriode(this.selectData);
			}
		},
		checkPage(){
			if(this.itemData.total >= 11 && this.itemData.total <= 25){
				this.query.limit = 25;
			}else if(this.itemData.total > 25){
				this.query.limit = 50;
			}else{
				this.query.limit = 10;
			}
		},

		// helper
		formatPeriode(value){
			return Vue.filter('dateMonth')(value);
		}
	},
	computed: {
		...mapGetters('auth',{
			currentUser: 'currentUser'
		}),
		...mapGetters('laporanCu',{
			detailData:'pearls',
			detailDataStat: 'pearlsStat',
			itemData: 'grafikPearls',
			itemDataStat: 'grafikPearlsStat'
		}),
	}
}
</script>