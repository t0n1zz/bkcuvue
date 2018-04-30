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
		v-if="idCu === 'semua'"
		></bar-chart>
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
		v-else
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
	props:['title','kelas'],
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
		idCu(valeu){
			this.isFirstLoad = true;
			this.fetch();
		},
		selectData(value){
			this.isFirstLoad = true;
			if(this.idCu == 'semua'){
				this.fetch();
			}
		},
		itemDataStat(value){
			if(value == "success"){
				// if(this.isFirstLoad){ TODO: fix this
				// 	this.checkPage();
				// 	this.isFirstLoad = false;
				// }
				if(this.idCu !== 'semua'){
						this.titleText = 'Grafik ' + this.title + ' ' + this.itemData.data[0].c_u.name;
					}
			}
		}
	},
	methods: {
		// fetching data from database
		fetch(){
			 
			if(this.idCu === 'semua'){
				this.resetParams('cu.name');
				if(this.selectData){
					this.$store.dispatch(this.kelas + '/grafikPeriode', [this.params,this.selectData]);

					this.axisLabelKey = 'cu_name';
					this.titleText = 'Grafik ' + this.title + ' periode ' + this.formatPeriode(this.selectData);
				}
			}else{
				if(this.idCu !== undefined){
					this.resetParams('id');
					this.$store.dispatch(this.kelas + '/grafikCu', [this.params,this.idCu]);
					this.axisLabelKey = 'periode';
					
				}
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
		...mapGetters('global',{
			idCu: 'idCu',
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