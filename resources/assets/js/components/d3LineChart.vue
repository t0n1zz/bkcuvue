<template>
	<div>
    <svg @mousemove="mouseover" :width="width" :height="height">
      <g :style="{transform: `translate(${margin.left}px, ${margin.top}px)`}">
        <path class="area" :d="paths.area" />
        <path class="line" :d="paths.line" />
        <path class="selector" :d="paths.selector" />
      </g>
    </svg>
  </div>
</template>

<script>
import _ from 'lodash';
import * as d3 from 'd3';

export default {
	components:{
	},
	props:[],
  data(){
    return {
			width: 0,
      height: 0,
      paths: {
        area: '',
        line: '',
        selector: '',
      },
      lastHoverPoint: {},
      scaled: {
        x: null,
        y: null,
      },
      animatedData: [],
      points: [],
    }
	},
	mounted() {
		this.calculatePath();
	},
	watch: {

	},
	methods: {
		getScales() {
      const x = d3.scaleTime().range([0, 430]);
      const y = d3.scaleLinear().range([210, 0]);
      d3.axisLeft().scale(x);
      d3.axisBottom().scale(y);
      x.domain(d3.extent(this.data, (d, i) => i));
      y.domain([0, d3.max(this.data, d => d)]);
      return { x, y };
    },
    calculatePath() {
      const scale = this.getScales();
      const path = d3.line()
        .x((d, i) => scale.x(i))
        .y(d => scale.y(d));
      this.line = path(this.data);
    },
	}
}
</script>

<style lang="sass" scoped>
svg
  margin: 25px;
path
  fill: none
  stroke: #76BF8A
  stroke-width: 3px
</style>