<template>
<div>
	<div class="card">

		<!-- heading -->
		<!-- <div class="card-header header-elements-inline d-print-none">
			<h5 class="card-title ">&nbsp;</h5>
			<div class="header-elements">
				<div class="icons-list">
					<a class="list-icons-item" v-tooltip:top="'Reload'"  @click="fetch()" :disabled="itemDataStat === 'loading'"><i class="icon-sync" :class="{'spinner' : itemDataStat === 'loading'}"></i></a>
				</div>
			</div>
		</div> -->

		<!-- body -->
		<div class="card-body">
			<div class="echart-container">
				<echarts
					class="echarts"
					:options="bar"
					auto-resize></echarts>	
			</div>
			<hr>
			<div class="row d-print-none">

				<!-- entri -->
				<div class="col-md-4 pb-2">
					<div class="input-group">
						<span class="input-group-prepend">
							<span class="input-group-text">Entri</span>
						</span>
						<select class="form-control"  v-model="query.limit" @change="updateLimit">
							<option>10</option>
							<option>15</option>
							<option>25</option>
							<option>50</option>
						</select>
					</div> 
				</div>

				<!-- order -->
				<div class="col-md-4 pb-2">
					<div class="input-group">
						<span class="input-group-prepend">
							<span class="input-group-text">Urutkan</span>
						</span>
						<select class="form-control" @input="updateOrderColumn">
							<option v-for="data in dataShown" :value="data.name" :selected="data && data.name == query.order_column" v-html="data.title">
							</option>
						</select>
					</div>  
				</div>

				<!-- order direction -->
				<div class="col-md-2 pb-2">
					<button class="btn bg-orange-300 btn-block" @click="updateOrderDirection">
						<i class="icon-arrow-up7" v-if="query.order_direction === 'asc'"></i>
						<i class="icon-arrow-down7" v-else></i>
					</button>
				</div>

				<div class="col-md-2 pb-2">
					<button type="button" class="btn btn-light btn-icon btn-block" :disabled="itemDataStat === 'loading'" @click.prevent="addColumn()">
						<i class="icon-database-add"></i> Tambah Data
					</button>
				</div>
				
				<!-- data selection -->
				<div class="col-md-6 pb-2" :class="checkClass()" v-for="(data,index) in dataShown">
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">Pilih Data</span>
						</div>
						<select class="form-control" data-width="100%" v-model="dataShown[index].name" @change="changeColumn($event.target.value,index)" :disabled="itemDataStat === 'loading'">
							<option disabled value="">Silahkan pilih data</option>
							<slot></slot>
							<option v-for="column in columnData" :value="column.name" v-if="column.isChart" v-html="column.title"></option>
						</select>
						<div class="input-group-append" v-if="dataShown.length > 1">
							<button class="btn btn-light" @click="removeColumn(index)" :disabled="itemDataStat === 'loading'">
								<i class="icon-database-remove"></i>
							</button>
						</div>
					</div>
				</div>

				<!-- pagination -->
				<!-- desktop -->
				<div class="col-md-12 pb-2 text-left d-none d-md-block">
					<!-- pagination success-->
					<div class="btn-group" v-if="itemDataStat === 'success'">
						<button href="#" class="btn btn-light" :class="{'disabled' : !itemData.prev_page_url}" @click.prevent="goToPage(1)">
								<i class="icon-backward2"></i>
						</button>
						<button href="#" class="btn btn-light" :class="{'disabled' : !itemData.prev_page_url}" @click.prevent="prevPage">
								<i class="icon-arrow-left5"></i>
						</button>
						<button href="#" class="btn" v-for="n in pages" :class="{'btn-primary' : query.page == n, 'btn-light' : query.page != n}"  @click.prevent="goToPage(n)">
								{{n}}
						</button>
						<button href="#" class="btn btn-light" :class="{'disabled' : !itemData.next_page_url}" @click.prevent="nextPage">
								<i class="icon-arrow-right5"></i>
						</button>
						<button href="#" class="btn btn-light" :class="{'disabled' : !itemData.next_page_url}" @click.prevent="goToPage(itemData.last_page)">
								<i class="icon-forward3"></i>
						</button>
					</div>
					
					<!-- pagination loading-->
					<div class="btn-group" v-else>
						<button href="#" class="btn btn-light disabled">
								<i class="icon-backward2"></i>
						</button>
						<button href="#" class="btn btn-light disabled">
								<i class="icon-arrow-left5"></i>
						</button>
						<button href="#" class="btn btn-light disabled">
								<i class="icon-spinner2 spinner"></i>
						</button>
						<button href="#" class="btn btn-light disabled">
								<i class="icon-arrow-right5"></i>
						</button>
						<button href="#" class="btn btn-light disabled">
								<i class="icon-forward3"></i>
						</button>
						
					</div>
				</div>
				<!-- mobile -->
				<div class="col-md-12 pb-2 text-center d-block d-sm-none">
					<!-- pagination success-->
					<div class="btn-group" v-if="itemDataStat === 'success'">
						<button href="#" class="btn" v-for="n in pages" :class="{'btn-primary' : query.page == n, 'btn-light' : query.page != n}"  @click.prevent="goToPage(n)">
								{{n}}
						</button>
					</div>
					<br/>
					<div class="btn-group pt-2" v-if="itemDataStat === 'success'">
						<button href="#" class="btn btn-light" :class="{'disabled' : !itemData.prev_page_url}" @click.prevent="goToPage(1)">
								<i class="icon-backward2"></i>
						</button>
						<button href="#" class="btn btn-light" :class="{'disabled' : !itemData.prev_page_url}" @click.prevent="prevPage">
								<i class="icon-arrow-left5"></i>
						</button>
						<button href="#" class="btn btn-light" :class="{'disabled' : !itemData.next_page_url}" @click.prevent="nextPage">
								<i class="icon-arrow-right5"></i>
						</button>
						<button href="#" class="btn btn-light" :class="{'disabled' : !itemData.next_page_url}" @click.prevent="goToPage(itemData.last_page)">
								<i class="icon-forward3"></i>
						</button>
					</div>
					
					<!-- pagination loading-->
					<div class="btn-group" v-else>
						<button href="#" class="btn btn-light disabled">
								<i class="icon-backward2"></i>
						</button>
						<button href="#" class="btn btn-light disabled">
								<i class="icon-arrow-left5"></i>
						</button>
						<button href="#" class="btn btn-light disabled">
								<i class="icon-spinner2 spinner"></i>
						</button>
						<button href="#" class="btn btn-light disabled">
								<i class="icon-arrow-right5"></i>
						</button>
						<button href="#" class="btn btn-light disabled">
								<i class="icon-forward3"></i>
						</button>
						
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
	.btn-group.special {
		display: flex;
	}

	.special .btn {
		flex: 1
	}
</style>


<script>
import _ from 'lodash';
import ECharts from 'vue-echarts';
import appModal from '../components/modal';

export default {
	components:{
		echarts: ECharts,
		appModal,
	},
	props:['titleText','title','kelas','query','dataShownTitle1','dataShownName1','axisLabelKey','itemData','itemDataStat','columnData'],
  data(){
    return {
			pages: [],
			sortState: '',
			sortAscTitle: '',
			sortDescTitle: '',
			dataShown: [],
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
					type: 'category',
					data: [],
					axisLabel:{
						rotate: 90
					}
				},
				yAxis: {
						type: 'value',
						data: [],
				},
				series: []
			},
			modalShow: false,
			modalState: '',
			modalTitle: '',
			modalButton: '',
			modalMobileOptionState: ''
    }
	},
	created() {
		// default select data
		this.dataShown.push({title: this.dataShownTitle1, name: this.dataShownName1});

		// default series
		this.addSeries();

	},
	watch: {
		itemDataStat(value){
			if(value == 'success'){
				this.emptyGraph();
				this.setGraph();
				this.calculatePagination();

				// default entri data
				this.checkEntriPage(this.query.limit);	
			}
		},
	},
	methods: {

		// only when fetching data from database
		setGraph(){
			// title
			this.bar.title.text = this.titleText;
			this.bar.title.subtext = 'Menampilkan ' + this.itemData.from + ' - ' + this.itemData.to + ' entri dari ' + this.itemData.total + ' entri';

			// yAxis
			this.bar.xAxis.data = _.map(this.itemData.data,this.axisLabelKey);

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

		// to configure which data to be shown
		addColumn(){
			this.dataShown.push({title:this.dataShown[0].title, name:this.dataShown[0].name});
			this.addSeries();
			let length = this.dataShown.length;
			this.bar.series[length-1].data = _.map(this.itemData.data, this.dataShown[0].name);
		},
		addSeries(){
			let data = _.find(this.columnData,{'name':this.dataShown[0].name});
			let series = { name:data.title, data:[], type:'bar'};
			this.bar.series.push(series);
		},
		removeColumn(index){
			this.dataShown.splice(index,1);
			this.bar.series.splice(index,1);
		},
		changeColumn(value,index){
			let data = _.find(this.columnData,{'name':value});
			
			this.bar.series[index].name = data.title;
			this.bar.series[index].data = _.map(this.itemData.data, value);

			this.dataShown[index].title = data.title;
			this.dataShown[index].name = value;

			this.query.order_column = value;
			this.applyChange();
		},
		checkClass(){
			return {
				'col-sm-12': this.dataShown.length == 1,
				'col-sm-6': this.dataShown.length == 2,
				'col-sm-4' : this.dataShown.length > 2
			};
		},

		// entri data
		updateLimit() {
			this.query.page = 1
			this.applyChange()
			this.checkEntriPage(this.query.limit);	
		},

		checkEntriPage(value){
			if(value >= 11 && value <= 25){
				this.bar.xAxis.axisLabel.rotate = 30;
			}else if(value > 25){
				this.bar.xAxis.axisLabel.rotate = 90;
			}else{
				this.bar.xAxis.axisLabel.rotate = 0;
			}
		},

		applyChange() {
			this.fetch()
		},
		fetch(){
			this.$emit('fetch');
		},

		//sort data
		updateOrderDirection() {
			if (this.query.order_direction === 'desc') {
				this.query.order_direction = 'asc'
			} else {
				this.query.order_direction = 'desc'
			}
			this.applyChange()
		},
		updateOrderColumn(e) {
			const value = e.target.value
			this.query.order_column = value
			this.applyChange()
		},

		// pagination from database
		calculatePagination() {
			var i = 0;
			var startPage = 0;
			var endPage = 0;
			var diffPage = 0;

			startPage = this.query.page < 3 ? 1 : this.query.page - 1;
			endPage = 4 + startPage;
			endPage = this.itemData.last_page < endPage ? this.itemData.last_page : endPage;
			diffPage = startPage - endPage + 4;
			startPage -= startPage - diffPage > 0 ? diffPage : 0;
			this.pages.length = 0;

			for (i = startPage; i <= endPage; i++) {
				this.pages.push(i);
			}
		},
		prevPage() {
			if (this.itemData.prev_page_url) {
				this.query.page = Number(this.query.page) - 1
				this.applyChange()
			}
		},
		goToPage(value) {
			if (this.query.page != value) {
				this.query.page = value;
				this.applyChange();
			}
		},
		nextPage() {
			if (this.itemData.next_page_url) {
				this.query.page = Number(this.query.page) + 1
				this.applyChange()
			}
		},

	}
}
</script>