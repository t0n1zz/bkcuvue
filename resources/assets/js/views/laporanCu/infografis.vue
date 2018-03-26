<template>
<div>
	<div class="panel panel-white border-top-xlg border-top-info">

		<!-- heading -->
		<div class="panel-heading has-visible-elements hidden-print">
			<h5 class="panel-title text-semibold"><i class="icon-list2 position-left"></i> Grafik Laporan CU</h5>
			<div class="heading-elements visible-elements">
				<ul class="icons-list">
					<li>
						<a v-tooltip:top="'Reload'"><i></i></a>
					</li>
				</ul>
			</div>
		</div>

		<!-- body -->
		<div class="panel-body">
			<!-- <div class="chart-container">
				<chartjs :chartLabels="datacu" :chartData="dataValue"></chartjs>					
			</div> -->
			<div class="echart-container">
				<echarts
					class="echarts"
					:options="bar"
					auto-resize></echarts>
			</div>
		</div>

	</div>

</div>
</template>

<style scoped>
	.echart-container{
		overflow-x: scroll;
		overflow-y: visible;
		max-width: 100%;
		position:relative;
		width: 100%
	}
	.echarts{
		width: 100vw;
		height: 90vh;
	}
</style>


<script>
import { mapGetters } from 'vuex';
import _ from 'lodash';
import ECharts from 'vue-echarts';
import barChart from '../../helpers/barChart.js';

export default {
	components:{
		chartjs: barChart,
		echarts: ECharts
	},
  data(){
    return {
			datacu: '',
			dataValue: '',
			dataValueName: 'aset',
			bar:{
				color: ['#3398DB'],
				tooltip : {
						trigger: 'axis',
						axisPointer : {           
								type : 'shadow'
						}
				},
				grid: {
					left: '0%',
					containLabel: true
				},
				xAxis: {
					type: 'value',
				},
				yAxis: {
						type: 'category',
						data: [],
				},
				series: [{
						data: [],
						type: 'bar',
						barGap: '50%',
						label: {
                normal: {
                    show: true,
										position: 'right',
										formatter: '{c}'
                }
            },
				}]
			}
    }
	},
	created() {
		this.fetchEcharts();
	},
	watch: {
		itemDataStat(value){
			if(value == 'success'){
				this.fetchEcharts();
			}
		}
	},
	methods: {
		fetchEcharts(){
			this.datacu = _.map(this.itemData.data,'cu_name');
			this.dataValue = _.map(this.itemData.data,'aset');

			this.bar.yAxis.data = _.map(this.itemData.data,'cu_name');
			this.bar.series[0].data = _.map(this.itemData.data,'aset');
		}
	},
	computed: {
		...mapGetters('global',{
			selectData: 'data'
		}),
		...mapGetters('laporanCu',{
			itemData: 'dataS',
			itemDataStat: 'dataStatS',
		}),
	}
}
</script>