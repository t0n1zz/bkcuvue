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
		v-if="this.$route.meta.mode == 'cu' || this.$route.meta.mode == 'detail' || this.$route.meta.mode == 'detailTp' ||
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
			dataShownTitle1:'Aset',
			dataShownName1:'aset',
			axisLabelKey:'cu_name',
			isFirstLoad: true,
			cuName:'',
			periode:'',
			query: {
        order_column: "aset",
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
				if(this.$route.meta.mode == 'periode'){
					this.titleText = 'Grafik Laporan Semua CU Periode ' + this.formatPeriode(this.$route.params.periode);
				}else if(this.$route.meta.mode == 'cu'){
					if(this.$route.params.tp == 'konsolidasi'){
						this.titleText = 'Grafik Laporan konsolidasi CU ' + this.itemData.data[0].cu.name;
					}else{
						this.titleText = 'Grafik Laporan ' + this.itemData.data[0].tp.name;
					}	
				}else if(this.$route.meta.mode == 'cuPeriode'){
					this.titleText = 'Grafik Laporan Semua TP Periode' + this.formatPeriode(this.$route.params.periode);
				}else if(this.$route.meta.mode == 'detail'){
					this.titleText = 'Grafik Laporan konsolidasi CU ' + this.itemData.data[0].cu.name;
				}else if(this.$route.meta.mode == 'detailTp'){
					this.titleText = 'Grafik Laporan ' + this.itemData.data[0].tp.name;
				}else if(this.$route.name == 'dashboard'){
					this.titleText = 'Grafik Laporan Perkembangan CU';
				}else{
					this.periode = _.orderBy(this.itemData.data,['periode'],['desc']);
					this.titleText = 'Grafik Laporan Semua CU Periode ' + this.formatPeriode(this.periode[0].periode);
				}
			}
		}
	},
	methods: {
		// fetching data from database
		fetch(){
			 if(this.$route.meta.mode == 'periode'){
				this.$store.dispatch(this.kelas + '/grafikPeriode', [this.query,this.$route.params.periode]);

				this.axisLabelKey = 'cu_name';
				this.titleText = 'Grafik ' + this.title + ' periode ' + this.formatPeriode(this.selectData);	
			}else if(this.$route.meta.mode == 'cu'){
				if(this.$route.params.tp == 'konsolidasi'){		
					this.$store.dispatch(this.kelas + '/grafikCu', [this.query,this.$route.params.cu]);
					this.query.order_column = 'periode';
					this.query.order_direction = 'asc';
				}else{
					this.$store.dispatch(this.kelas + '/grafikTp', [this.query,this.$route.params.tp]);	
				}
				this.axisLabelKey = 'periode';	
			}else if(this.$route.meta.mode == 'cuPeriode'){
				this.$store.dispatch(this.kelas + '/grafikTpPeriode', [this.query,this.$route.params.cu, this.$route.params.periode]);
				this.axisLabelKey = 'tp_name';	
			}else if(this.$route.meta.mode == 'detail'){
				this.$store.dispatch(this.kelas + '/grafikCu', [this.query,this.detailData.id_cu]);
				this.axisLabelKey = 'periode';
				this.query.order_column = 'periode';
				this.query.order_direction = 'asc';
			}else if(this.$route.meta.mode == 'detailTp'){
				this.$store.dispatch(this.kelas + '/grafikTp', [this.query,this.detailData.id_tp]);
				this.axisLabelKey = 'periode';
				this.query.order_column = 'periode';
				this.query.order_direction = 'asc';
			}else if(this.$route.name == 'dashboard'){		
					this.$store.dispatch(this.kelas + '/grafikCu', [this.query,this.profile.id_cu]);
					this.query.order_column = 'periode';
					this.query.order_direction = 'asc';
					this.axisLabelKey = 'periode';	
			}else{
				this.$store.dispatch(this.kelas + '/grafikPeriode', [this.query,this.$route.params.periode]);

				this.axisLabelKey = 'cu_name';
				if(this.itemDataStat == 'success'){
					this.periode = _.orderBy(this.itemData.data,['periode'],['desc']);
					this.titleText = 'Grafik ' + this.title + ' periode ' + this.formatPeriode(this.periode[0].periode);
				}
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
		...mapGetters('user',{
			profile: 'profile',
			profileStat: 'profileStat'
		}),
		...mapGetters('laporanCu',{
			detailData:'data',
			detailDataStat: 'dataStat',
			itemData: 'grafik',
			itemDataStat: 'grafikStat',
		})
	}
}
</script>