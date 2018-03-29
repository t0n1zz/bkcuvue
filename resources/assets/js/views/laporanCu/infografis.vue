<template>
<div>
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
		></bar-chart>

</div>
</template>



<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import barChart from '../../components/barChart.vue';

export default {
	components:{
		barChart
	},
	props:['title','kelas'],
  data(){
    return {
			pages: [],
			titleText:'',
			dataShownTitle1:'Aset',
			dataShownKey1:'aset',
			axisLabelKey:'cu_name',
			params: {
				column: 'periode',
				direction: 'desc',
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

		selectData(value){
			this.fetch();
		},
	},
	methods: {
		// fetching data from database
		fetch(){
			this.titleText = 'Grafik ' + this.title + ' periode ' + this.formatPeriode(this.selectData); 

			if(this.idCU === 'semua'){
				this.$store.dispatch(this.kelas + '/grafikPeriode', [this.params,this.selectData]);
			}else{
				if(this.idCU !== undefined){
					this.$store.dispatch(this.kelas + '/grafikCU', [this.params,this.idCU]);
				}
			}
		},

		// helper
		formatPeriode(value){
			return Vue.filter('dateMonth')(value);
		}
	},
	computed: {
		...mapGetters('global',{
			idCU: 'idCU',
			selectData: 'data'
		}),
		...mapGetters('laporanCu',{
			itemData: 'grafik',
			itemDataStat: 'grafikStat',
			columnData: 'columnData',
		}),
	}
}
</script>