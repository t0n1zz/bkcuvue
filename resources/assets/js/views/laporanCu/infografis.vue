<template>
<div>
	<div class="panel panel-white border-top-xlg border-top-info">

		<!-- heading -->
		<div class="panel-heading has-visible-elements hidden-print">
			<h5 class="panel-title text-semibold"><i class="icon-list2 position-left"></i> Grafik {{ title }}</h5>
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
			<hr>
			<div class="row">

				<div class="col-md-12">

					<div class="btn-toolbar pb-5">

						<!-- entri view -->
						<div class="btn-group">
							<button type="button" class="btn btn-default btn-icon dropdown-toggle" data-toggle="dropdown" v-tooltip:top="'Atur Jumlah Entri Yang Ingin Ditampilkan'" :disabled="itemDataStat === 'loading'">
								<i class="icon-menu7"></i>&nbsp; {{params.per_page}} &nbsp;
								<span class="caret"></span>
							</button>
							<ul class="dropdown-menu">
								<li class="dropdown-header">Entri yang ditampilkan</li>
								<li class="divider"></li>
								<li :class="{'active' : params.per_page === 10}">
									<a @click.prevent="entriPage(10)">10 Entri</a>
								</li>
								<li :class="{'active' : params.per_page === 25}" v-if="itemData.total > 10">
									<a @click.prevent="entriPage(25)">25 Entri</a>
								</li>
								<li :class="{'active' : params.per_page === 50}" v-if="itemData.total > 25">
									<a @click.prevent="entriPage(50)">50 Entri</a>
								</li>
								<li :class="{'active' : params.per_page === 100}" v-if="itemData.total > 50">
									<a @click.prevent="entriPage(100)">100 Entri</a>
								</li>
								<li :class="{'active' : params.per_page === 200}" v-if="itemData.total > 100">
									<a @click.prevent="entriPage(200)">200 Entri</a>
								</li>
								<li :class="{'active' : params.per_page === 400}" v-if="itemData.total > 200">
									<a @click.prevent="entriPage(400)">400 Entri</a>
								</li> 
							</ul>
						</div>

						<!-- pagination success -->
						<div class="btn-group" v-if="itemDataStat === 'success'">
							<button class="btn btn-default btn-icon" :class="{'disabled' : !itemData.prev_page_url}" @click.prevent="prev">
								<i class="icon-arrow-left12"></i>
							</button>
							<button class="btn btn-default btn-icon" v-for="n in pages" :class="{'active' : params.page == n}" @click.prevent="goToPage(n)">
								{{n}}
							</button>
							<button class="btn btn-default btn-icon" :class="{'disabled' : !itemData.next_page_url}" @click.prevent="next">
								<i class="icon-arrow-right13"></i>
							</button>
						</div>

						<!-- pagination loading -->
						<div class="btn-group" v-else-if="itemDataStat === 'loading'">
							<button class="btn btn-default btn-icon disabled">
								<i class="icon-arrow-left12"></i>
							</button>
							<button class="btn btn-default btn-icon disabled">
								<i class="icon-spinner2 spinner"></i>
							</button>
							<button class="btn btn-default btn-icon disabled">
								<i class="icon-arrow-right13"></i>
							</button>
						</div>

						<!-- entri view -->
						<div class="btn-group">
							<button type="button" class="btn btn-default btn-icon" v-tooltip:top="'Atur Jumlah Entri Yang Ingin Ditampilkan'" :disabled="itemDataStat === 'loading'" @click.prevent="addColumn()">
								<i class="icon-database-add"></i> Tambah Data
							</button>
						</div>

					</div>

				</div>

				
				<div class="pb-5" :class="checkClass()" v-for="(data,index) in dataShown">
					<div class="input-group">
						<div class="input-group-addon">
							Pilih Data	
						</div>
						<select class="bootstrap-select" data-width="100%" v-model="dataShown[index].name" @change="changeColumn($event.target.value,index)" :disabled="itemDataStat === 'loading'">
							<option disabled value="">Silahkan pilih data</option>
							<slot></slot>
							<option v-for="column in columnData" :value="column.key" v-if="column.isChart">{{column.title}}</option>
						</select>
						<div class="input-group-btn" v-if="dataShown.length > 1">
							<button class="btn btn-default" v-tooltip:top="'Reload'" @click="removeColumn(index)" :disabled="itemDataStat === 'loading'">
								<i class="icon-database-remove"></i> Hapus Data
							</button>
						</div>
					</div>
				</div>
				
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
		height: 70vh;
	}
</style>


<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import _ from 'lodash';
import ECharts from 'vue-echarts';

export default {
	components:{
		echarts: ECharts
	},
	props:['title','kelas'],
  data(){
    return {
			pages: [],
			sortState: '',
			dataShown: [
				{name:'total_anggota'}
			],
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
			bar:{
				title:{
					text: '',
					subtext: ''
				},
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
				series: []
			}
    }
	},
	created() {
		this.fetch();

		// default series
		this.addSeries();
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
			if(value == 'success'){
				this.emptyGraph();
				this.setGraph();
				this.calculatePagination();
			}
		},

		selectData(value){
			this.fetch();
		},
	},
	methods: {
		// fetching data from database
		fetch(){
			if(this.idCU === 'semua'){
				this.$store.dispatch(this.kelas + '/grafikPeriode', [this.params,this.selectData]);
			}else{
				if(this.idCU !== undefined){
					this.$store.dispatch(this.kelas + '/grafikCU', [this.params,this.idCU]);
				}
			}
		},

		// to configure which data to be shown
		addColumn(){
			this.dataShown.push({name:this.dataShown[0].name});
			this.addSeries();
			let length = this.dataShown.length;
			this.bar.series[length-1].data = _.map(this.itemData.data, this.dataShown[0].name);
		},
		removeColumn(index){
			this.dataShown.splice(index,1);
			this.bar.series.splice(index,1);
		},
		changeColumn(value,index){
			this.bar.series[index].name = value;
			this.bar.series[index].data = _.map(this.itemData.data, value);
			this.dataShown[index].name = value;
		},
		addSeries(){
			let series = { name:this.dataShown[0].name, data:[], type:'bar'};
			this.bar.series.push(series);
		},
		checkClass(){
			return {
				'col-sm-12': this.dataShown.length == 1,
				'col-sm-6': this.dataShown.length == 2,
				'col-sm-4' : this.dataShown.length > 2
			};
		},

		// only when fetching data from database
		setGraph(){
			// title
			this.bar.title.text = 'Grafik ' + this.title + ' periode ' + this.formatPeriode(this.selectData);
			this.bar.title.subtext = 'Menampilkan ' + this.itemData.from + ' - ' + this.itemData.to + ' entri dari ' + this.itemData.total + ' entri';

			// yAxis
			this.bar.yAxis.data = _.map(this.itemData.data,'cu_name');

			// series
			for (let i = 0, len = this.dataShown.length ; i < len; i++){
				this.bar.series[i].data = _.map(this.itemData.data, this.dataShown[i].name);
			}
		},
		emptyGraph(){
			// resetAll
			this.bar.title.text = '';
			this.bar.title.subtext = '';

			this.bar.yAxis.data = []
			for (let i = 0, len = this.dataShown.length ; i < len; i++){
				this.bar.series[i].data = [];
			}
		},

		// entri page
		entriPage(value) {
			if (this.params.per_page != value) {
				this.params.per_page = value;
				this.params.page = 1;
				this.fetch();
			}
		},

		// pagination from database
		calculatePagination() {
			var i = 0;
			var startPage = 0;
			var endPage = 0;
			var diffPage = 0;

			startPage = this.params.page < 3 ? 1 : this.params.page - 1;
			endPage = 4 + startPage;
			endPage = this.itemData.last_page < endPage ? this.itemData.last_page : endPage;
			diffPage = startPage - endPage + 4;
			startPage -= startPage - diffPage > 0 ? diffPage : 0;
			this.pages.length = 0;

			for (i = startPage; i <= endPage; i++) {
				this.pages.push(i);
			}
		},
		next() {
			if (this.itemData.next_page_url) {
				this.params.page++;
				this.fetch();
			}
		},
		prev() {
			if (this.itemData.prev_page_url) {
				this.params.page--;
				this.fetch();
			}
		},
		goToPage(value) {
			if (this.params.page != value) {
				this.params.page = value;
				this.fetch();
			}
		},

		// sort data
		sortData(state){

		},

		// date format
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