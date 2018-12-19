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
		></line-chart>
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
			titleText:'Grafik Perkembangan Gerakan',
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
	},
	methods: {
		// fetching data from database
		fetch(){
				this.$store.dispatch(this.kelas + '/grafikGerakan', this.query);
				this.axisLabelKey = 'periode';
				this.query.order_column = 'periode';
				this.query.order_direction = 'asc';
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
		...mapGetters('laporanCu',{
			detailData:'data',
			detailDataStat: 'dataStat',
			itemData: 'grafik',
			itemDataStat: 'grafikStat',
		})
	}
}
</script>