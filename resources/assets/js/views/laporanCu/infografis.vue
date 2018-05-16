<template>
<div>
	<!-- laporancu -->
	<line-chart
		:titleText="titleText"
		:title="title"
		:kelas="kelas"
		:params="params"
		:dataShownTitle1="dataShownTitle1"
		:dataShownKey1="dataShownKey1"
		:axisLabelKey="axisLabelKey"
		:itemData="itemData"
		:itemDataStat="itemDataStat"
		:columnData="columnData"
		@fetch="fetch()"
		v-if="this.$route.meta.mode == 'cu' || this.$route.meta.mode == 'detail'"
		></line-chart>
	<bar-chart
		:titleText="titleText"
		:title="title"
		:kelas="kelas"
		:params="params"
		:dataShownTitle1="dataShownTitle1"
		:dataShownKey1="dataShownKey1"
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
		:params="params"
		:dataShownTitle1="dataShownTitle1"
		:dataShownKey1="dataShownKey1"
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
			dataShownKey1:'aset',
			axisLabelKey:'cu_name',
			isFirstLoad: true,
			cuName:'',
			params: {
				column: 'periode',
				direction: 'asc',
				per_page: 50,
				page: 1,
				search_column: 'cu.name',
				search_operator: 'like',
				search_query_1: '',
				search_query_2: ''
			},
    }
	},
	created() {
		this.fetch();
	},
	updated() {
		$('.bootstrap-select').selectpicker('refresh');
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
				}else{
					this.titleText = 'Grafik Laporan Semua CU Periode ' + this.formatPeriode(this.$route.params.periode);
				}
			}
		},
		detailDataStat(value){
			if(value == 'success'){
				this.fetch();
			}
		}
	},
	methods: {
		// fetching data from database
		fetch(){
			 if(this.$route.meta.mode == 'periode'){
				this.resetParams('cu.name');
				this.$store.dispatch(this.kelas + '/grafikPeriode', [this.params,this.$route.params.periode]);

				this.axisLabelKey = 'cu_name';
				this.titleText = 'Grafik ' + this.title + ' periode ' + this.formatPeriode(this.selectData);	
			}else if(this.$route.meta.mode == 'cu'){
				this.resetParams('id');
				if(this.$route.params.tp == 'konsolidasi'){		
					this.$store.dispatch(this.kelas + '/grafikCu', [this.params,this.$route.params.cu]);
				}else{
					this.$store.dispatch(this.kelas + '/grafikTp', [this.params,this.$route.params.tp]);	
				}
				this.axisLabelKey = 'periode';	
			}else if(this.$route.meta.mode == 'cuPeriode'){
				this.resetParams('tp.name');
				this.$store.dispatch(this.kelas + '/grafikTpPeriode', [this.params,this.$route.params.cu, this.$route.params.periode]);
				this.axisLabelKey = 'tp_name';	
			}else if(this.$route.meta.mode == 'detail'){
				if(this.detailDataStat == 'success'){
					this.resetParams('id');
					this.$store.dispatch(this.kelas + '/grafikCu', [this.params,this.detailData.id_cu]);
					this.axisLabelKey = 'periode';
				}
			}else{
				this.resetParams('cu.name');
				this.$store.dispatch(this.kelas + '/grafikPeriode', [this.params,this.$route.params.periode]);

				this.axisLabelKey = 'cu_name';
				this.titleText = 'Grafik ' + this.title + ' periode ' + this.formatPeriode(this.selectData);
			}
		},
		resetParams(search_column){
			this.params.search_column = search_column;
			this.params.search_operator = 'like';
			this.params.search_query_1 = '';
			this.params.search_query_2 = '';
		},
		checkPage(){
			if(this.itemData.total >= 11 && this.itemData.total <= 25){
				this.params.per_page = 25;
			}else if(this.itemData.total > 25){
				this.params.per_page = 50;
			}else{
				this.params.per_page = 10;
			}
		},
		// helper
		formatPeriode(value){
			return Vue.filter('dateMonth')(value);
		}
	},
	computed: {
		...mapGetters('laporanCu',{
			detailData: 'data',
			detailDataStat: 'dataStat',
			itemData: 'grafik',
			itemDataStat: 'grafikStat'
		}),
	}
}
</script>