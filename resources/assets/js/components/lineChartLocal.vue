<template>
<div>
	<div class="card ">

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

				<!-- button -->
				<div class="col-md-12">
					<div class="row">

						<!-- order -->
						<div class="col-md-12 pb-2" v-for="(data,index) in dataShown">
              <div class="input-group">
								<div class="input-group-append">
									<span class="input-group-text">Pilih Data</span>
								</div>
								<select class="form-control" data-width="100%" v-model="dataShown[index].name" @change="changeColumn($event.target.value,index)">
									<option disabled value="">Silahkan pilih data</option>
									<slot></slot>
									<option v-for="column in columnData" :value="column.name" v-if="column.isChart" v-html="column.title"></option>
								</select>
							</div>
						</div>

					</div>
				</div>
				
			</div>
		</div>

	</div>

</div>
</template>

<script>
import Vue from "vue";
import _ from "lodash";
import ECharts from "vue-echarts";
import appModal from "../components/modal";

export default {
  components: {
    echarts: ECharts,
    appModal
  },
  props: [
    "titleText",
    "title",
    "dataShownTitle1",
    "dataShownName1",
    "axisLabelKey",
    "itemData",
    "itemDataStat",
    "columnData"
  ],
  data() {
    return {
      pages: [],
      sortState: "",
      sortAscTitle: "",
      sortDescTitle: "",
      dataShown: [],
      line: {
        title: {
          text: "",
          subtext: ""
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "0%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: [],
          axisLabel: {
            rotate: 90
          }
        },
        yAxis: {
          type: "value",
          data: []
        },
        series: []
      },
      modalShow: false,
      modalState: "",
      modalTitle: "",
      modalButton: "",
      modalMobileOptionState: ""
    };
  },
  created() {
    // default select data
    this.dataShown.push({
      title: this.dataShownTitle1,
      name: this.dataShownName1
    });

    // default series
    this.addSeries();
  },
  watch: {
    itemDataStat(value) {
      if (value == "success") {
        this.emptyGraph();
        this.setGraph();
      }
    }
  },
  methods: {
    setGraph() {
      // title
      this.line.title.text = this.titleText;

      // yAxis
      this.line.xAxis.data = _.map(this.itemData, this.axisLabelKey);

      // series
      for (let i = 0, len = this.dataShown.length; i < len; i++) {
        this.line.series[i].data = _.map(
          this.itemData,
          this.dataShown[i].name
        );
      }
    },
    addSeries() {
      let data = _.find(this.columnData, { 'name': this.dataShown[0].name });
      let series = { name: data.title, data: [], type: "line", smooth: true, stack: data.title };
      this.line.series.push(series);
    },
    
    emptyGraph() {
      // resetAll
      this.line.title.text = "";
      this.line.title.subtext = "";

      this.line.yAxis.data = [];
      for (let i = 0, len = this.dataShown.length; i < len; i++) {
        this.line.series[i].data = [];
      }
    },

    changeColumn(value, index) {
      let data = _.find(this.columnData, { 'name': value });

      this.line.series[index].name = data.title;
      this.line.series[index].data = _.map(this.itemData, value);

      this.dataShown[index].title = data.title;
      this.dataShown[index].name = value;
    },

  }
};
</script>


<style scoped>
.echart-container {
  overflow-x: scroll;
  overflow-y: visible;
  max-width: 100%;
  position: relative;
  width: 100%;
}
.echarts {
  width: 100vw;
  height: 70vh;
}
.btn-group.special {
  display: flex;
}

.special .btn {
  flex: 1;
}
</style>

