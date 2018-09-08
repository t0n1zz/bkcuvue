<template>
<div>
	<div class="card ">

		<!-- heading -->
		<div class="card-header header-elements-inline d-print-none">
			<h5 class="card-title"><i class="icon-stats-growth position-left"></i> Grafik {{ title }}</h5>
			<div class="header-elements">
				<div class="icons-list">
					<a class="list-icons-item"  v-tooltip:top="'Reload'"  @click="fetch()" :disabled="itemDataStat === 'loading'"><i class="icon-sync" :class="{'spinner' : itemDataStat === 'loading'}"></i></a>
				</div>
			</div>
		</div>

		<!-- body -->
		<div class="card-body">
			<div class="echart-container">
				<echarts
					class="echarts"
					:options="line"
					auto-resize></echarts>	
			</div>
			<hr>
			<div class="row d-print-none">

				<!-- desktop button -->
				<div class="col-md-12 hidden-xs">

					<div class="btn-toolline pb-5">

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

						<!-- sorting -->
						<div class="btn-group">
							<!-- asc -->
							<button type="button" class="btn btn-default btn-icon dropdown-toggle" data-toggle="dropdown" v-tooltip:top="'Mengurutkan data dari yang terkecil ke terbesar'" :disabled="itemDataStat === 'loading'">
								<i class="icon-sort-amount-asc"></i>&nbsp; {{ sortAscTitle }} &nbsp;
								<span class="caret"></span>
							</button>
							<ul class="dropdown-menu">
								<li class="dropdown-header">Data yang diurutkan</li>
								<li class="divider"></li>
								<li :class="{'active' : sortAscTitle === 'periode'}">
									<a @click.prevent="sortAscData('periode','Periode')">Periode</a>
								</li>
								<li :class="{'active' : data.title === sortAscTitle}" v-for="data in dataShown">
									<a @click.prevent="sortAscData(data.key,data.title)">{{ data.title }}</a>
								</li>
							</ul>

							<!-- desc -->
							<button type="button" class="btn btn-default btn-icon dropdown-toggle" data-toggle="dropdown" v-tooltip:top="'Mengurutkan data dari yang terbesar ke terkecil'" :disabled="itemDataStat === 'loading'">
								<i class="icon-sort-amount-desc"></i>&nbsp; {{ sortDescTitle }} &nbsp;
								<span class="caret"></span>
							</button>
							<ul class="dropdown-menu">
								<li class="dropdown-header">Data yang diurutkan</li>
								<li class="divider"></li>
								<li :class="{'active' : sortDescTitle === 'periode'}">
									<a @click.prevent="sortDescData('periode','Periode')">Periode</a>
								</li>
								<li :class="{'active' : data.title === sortDescTitle}" v-for="data in dataShown">
									<a @click.prevent="sortDescData(data.key,data.title)">{{ data.title }}</a>
								</li>
							</ul>
						</div>

						<!-- add data -->
						<!-- <div class="btn-group">
							<button type="button" class="btn btn-default btn-icon" v-tooltip:top="'Menambah data yang ingin ditampilkan di grafik'" :disabled="itemDataStat === 'loading'" @click.prevent="addColumn()">
								<i class="icon-database-add"></i> Tambah Data
							</button>
						</div> -->

					</div>
				</div>
				
				<!-- mobile -->
				<div class="col-sm-12 visible-xs">

					<!-- entri page -->
					<div class="pb-5">
						<button type="button" class="btn btn-default btn-icon btn-block" :disabled="itemDataStat === 'loading'" @click.prevent="modalMobileOptionOpen('entri')">
							<i class="icon-menu7"></i> {{params.per_page}} Entri yang ditampilkan
						</button>
					</div>
					

					<!-- pagination success -->
					<div class="btn-group special pb-5" v-if="itemDataStat === 'success'">
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
					<div class="btn-group special pb-5" v-else-if="itemDataStat === 'loading'">
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

					<!-- sorting -->
					<div class="btn-group special pb-5">
						<!-- asc -->
						<button type="button" class="btn btn-default btn-icon" :disabled="itemDataStat === 'loading'"  @click.prevent="modalMobileOptionOpen('sortAsc')">
							<i class="icon-sort-amount-asc"></i>&nbsp; {{ sortAscTitle }} &nbsp;
							<span class="caret"></span>
						</button>

						<!-- desc -->
						<button type="button" class="btn btn-default btn-icon" :disabled="itemDataStat === 'loading'"  @click.prevent="modalMobileOptionOpen('sortDesc')">
							<i class="icon-sort-amount-desc"></i>&nbsp; {{ sortDescTitle }} &nbsp;
							<span class="caret"></span>
						</button>
					</div>

					<!-- tambah data -->
					<!-- <div class="pb-5">
						<button type="button" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Menambah data yang ingin ditampilkan di grafik'" :disabled="itemDataStat === 'loading'" @click.prevent="addColumn()">
							<i class="icon-database-add"></i> Tambah Data
						</button>
					</div> -->
					
				</div>
				
				<div class="pb-5" :class="checkClass()" v-for="(data,index) in dataShown">
					<div class="input-group">
						<div class="input-group-addon">
							Pilih Data	
						</div>
						<select class="bootstrap-select" data-width="100%" v-model="dataShown[index].key" @change="changeColumn($event.target.value,index)" :disabled="itemDataStat === 'loading'">
							<option disabled value="">Silahkan pilih data</option>
							<slot></slot>
							<option v-for="column in columnData" :value="column.key" v-if="column.isChart">{{column.title}}</option>
						</select>
						<div class="input-group-btn" v-if="dataShown.length > 1">
							<button class="btn btn-default" v-tooltip:top="'Hapus data '" @click="removeColumn(index)" :disabled="itemDataStat === 'loading'">
								<i class="icon-database-remove"></i>
							</button>
						</div>
					</div>
				</div>
				
			</div>
		</div>

	</div>

	<!-- modal -->
    <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" @batal="modalTutup" @tutup="modalTutup" @errorOk="modalTutup" @backgroundClick="modalTutup">
      <div slot="modal-body1">
        <!-- entri -->
        <div v-if="modalMobileOptionState === 'entri'">
          <h2 class="text-center">Entri yang ditampilkan</h2>
          <hr/>
          <a class="btn btn-block" :class="{'btn-primary' : params.per_page === 10, 'btn-default': params.per_page !== 10}" @click.prevent="entriPage(10,'mobile')" >10 Entri</a>
          <a class="btn btn-block" :class="{'btn-primary' : params.per_page === 25, 'btn-default': params.per_page !== 25}" @click.prevent="entriPage(25,'mobile')" v-if="itemData.total > 10">25 Entri</a>
          <a class="btn btn-block" :class="{'btn-primary' : params.per_page === 50, 'btn-default': params.per_page !== 50}" @click.prevent="entriPage(50,'mobile')" v-if="itemData.total > 25">50 Entri</a>
          <slot name="button-entri-mobile"></slot>
          <hr/>
          <a class="btn btn-default btn-block" @click.prevent="modalTutup"><i class="icon-cross"></i> Tutup</a>
        </div>

        <div v-if="modalMobileOptionState === 'sortAsc'">
          <h2 class="text-center">Mengurutkan data dari yang terkecil ke terbesar</h2>
          <hr/>
          <a class="btn btn-block" :class="{'btn-primary' : data.title === sortAscTitle, 'btn-default': data.title !== sortAscTitle}" v-for="data in dataShown" @click.prevent="sortAscData(data.key,data.title,'mobile')">
						{{ data.title }}
          </a>
          <hr/>
          <a class="btn btn-default btn-block" @click.prevent="modalTutup"><i class="icon-cross"></i> Tutup</a>
        </div>

				<div v-if="modalMobileOptionState === 'sortDesc'">
          <h2 class="text-center">Mengurutkan data dari yang terbesar ke terkecil</h2>
          <hr/>
          <a class="btn btn-block" :class="{'btn-primary' : data.title === sortDescTitle, 'btn-default': data.title !== sortDescTitle}" v-for="data in dataShown" @click.prevent="sortDescData(data.key,data.title,'mobile')">
						{{ data.title }}
          </a>
          <hr/>
          <a class="btn btn-default btn-block" @click.prevent="modalTutup"><i class="icon-cross"></i> Tutup</a>
        </div>
      </div>
    </app-modal>

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
	props:['titleText','title','kelas','params','dataShownTitle1','dataShownKey1','axisLabelKey','itemData','itemDataStat','columnData'],
  data(){
    return {
			pages: [],
			sortState: '',
			sortAscTitle: '',
			sortDescTitle: '',
			dataShown: [],
			line:{
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
		this.dataShown.push({title: this.dataShownTitle1, key: this.dataShownKey1});

		// default series
		this.addSeries();

	},
	updated() {
		$('.bootstrap-select').selectpicker('refresh');
	},
	watch: {
		itemDataStat(value){
			if(value == 'success'){
				this.emptyGraph();
				this.setGraph();
				this.calculatePagination();

				// default entri data
				this.checkEntriPage(this.params.per_page);	
			}
		},
	},
	methods: {
		// fetching data from database
		fetch(){
			this.$emit('fetch');
		},

		// only when fetching data from database
		setGraph(){
			// title
			this.line.title.text = this.titleText;
			this.line.title.subtext = 'Menampilkan ' + this.itemData.from + ' - ' + this.itemData.to + ' entri dari ' + this.itemData.total + ' entri';

			// yAxis
			this.line.xAxis.data = _.map(this.itemData.data,this.axisLabelKey);

			// series
			for (let i = 0, len = this.dataShown.length ; i < len; i++){
				this.line.series[i].data = _.map(this.itemData.data, this.dataShown[i].key);
			}
		},
		emptyGraph(){
			// resetAll
			this.line.title.text = '';
			this.line.title.subtext = '';

			this.line.yAxis.data = []
			for (let i = 0, len = this.dataShown.length ; i < len; i++){
				this.line.series[i].data = [];
			}
		},

		// to configure which data to be shown
		addColumn(){
			this.dataShown.push({title:this.dataShown[0].title, key:this.dataShown[0].key});
			this.addSeries();
			let length = this.dataShown.length;
			this.line.series[length-1].data = _.map(this.itemData.data, this.dataShown[0].key);
		},
		addSeries(){
			let data = _.find(this.columnData,{'key':this.dataShown[0].key});
			let series = { name:data.title, data:[], type:'line', smooth:true, stack:data.title };
			this.line.series.push(series);
		},
		removeColumn(index){
			this.dataShown.splice(index,1);
			this.line.series.splice(index,1);
		},
		changeColumn(value,index){
			let data = _.find(this.columnData,{'key':value});
			
			this.line.series[index].name = data.title;
			this.line.series[index].data = _.map(this.itemData.data, value);

			this.dataShown[index].title = data.title;
			this.dataShown[index].key = value;
		},
		checkClass(){
			return {
				'col-sm-12': this.dataShown.length == 1,
				'col-sm-6': this.dataShown.length == 2,
				'col-sm-4' : this.dataShown.length > 2
			};
		},

		// entri data
		entriPage(value, type) {
			if (this.params.per_page != value) {
				this.params.per_page = value;
				this.params.page = 1;
				this.fetch();
			}

			this.checkEntriPage(value);	

			if(type == 'mobile'){
				this.modalTutup();
			}
		},
		checkEntriPage(value){
			if(value >= 11 && value <= 25){
				this.line.xAxis.axisLabel.rotate = 30;
			}else if(value > 25){
				this.line.xAxis.axisLabel.rotate = 90;
			}else{
				this.line.xAxis.axisLabel.rotate = 0;
			}
		},

		//sort data
		sortAscData(key, title, type){
			this.params.direction = 'asc';
			this.params.column = key;
			this.sortDescTitle = '';
			this.sortAscTitle = title;
			this.fetch();

			if(type == 'mobile'){
				this.modalTutup();
			}
		},
		sortDescData(key, title, type){
			this.params.direction = 'desc';
			this.params.column = key;
			this.sortAscTitle = '';
			this.sortDescTitle = title;
			this.fetch();

			if(type == 'mobile'){
				this.modalTutup();
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

		// modal
		modalMobileOptionOpen(state){
			this.modalShow = true;
			this.modalState = "normal1";
			this.modalMobileOptionState = state;
		},
		modalTutup() {
			this.modalShow = false;
		},
	}
}
</script>