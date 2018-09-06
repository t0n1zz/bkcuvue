<template>
  <div>

    <!-- desktop  view-->
    <div class="card">
      <div class="card-header bg-white">
        <!-- search row -->
        <div class="row">
          <div class="col-md-12" v-for="(f, i) in filterCandidates">
            <div class="row no-gutters">
              <div class="col-md-4 pb-2 pr-1">
                <select class="form-control" @input="selectColumn(f, i, $event)">
                  <option value="">Silahkan masukkan kolom pencarian</option>
                  <option v-for="x in columnData" :value="JSON.stringify(x)" :selected="f.column && x.name === f.column.name"
                    v-if="x.filter">
                    {{x.title}}
                  </option>
                </select>
              </div>

              <div class="col-md-3 pb-2 pr-1" v-if="f.column">
                <select class="form-control" @input="selectOperator(f, i, $event)">
                  <option v-for="y in fetchOperators(f)" :value="JSON.stringify(y)" :selected="f.operator && y.name === f.operator.name">
                    {{y.title}}
                  </option>
                </select>
              </div>

              <template v-if="f.column && f.operator">
                <div class="col-md-4 pb-2 pr-1" v-if="f.operator.component === 'single'">
                  <input type="text" class="form-control" v-model="f.query_1">
                </div>
                <template v-if="f.operator.component === 'double'">
                  <div class="col-md-2 pb-2 pr-1">
                    <input type="text" class="form-control" v-model="f.query_1">
                  </div>
                  <div class="col-md-2 pb-2 pr-1">
                    <input type="text" class="form-control" v-model="f.query_2">
                  </div>
                </template>
                <template v-if="f.operator.component === 'datetime_1'">
                  <div class="col-md-2 pb-2 pr-1">
                    <input type="text" class="form-control" v-model="f.query_1">
                  </div>
                  <div class="col-md-2 pb-2 pr-1">
                    <select class="form-control" v-model="f.query_2">
                      <option>jam</option>
                      <option>hari</option>
                      <option>bulan</option>
                      <option>tahun</option>
                    </select>
                  </div>
                </template>
                <template v-if="f.operator.component === 'datetime_2'">
                  <div class="col-md-4 pb-2 pr-1">
                    <select class="form-control" v-model="f.query_1">
                      <option value="yesterday">kemarin</option>
                      <option value="today">hari ini</option>
                      <option value="tomorrow">besok</option>
                      <option value="last_month">bulan lalu</option>
                      <option value="this_month">bulan ini</option>
                      <option value="next_month">bulan depan</option>
                      <option value="last_year">tahun lalu</option>
                      <option value="this_year">tahun ini</option>
                      <option value="next_year">tahun depan</option>
                    </select>
                  </div>
                </template>

              </template>

              <div class="col-md-1 pb-2">
                <button class="btn btn-light btn-block" @click="removeFilter(f,i)"><i class="icon-cross3"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-body hidden-print">
        <!-- button row -->
        <div class="row">
          <div class="col-md-8">
            <button class="btn btn-light" @click="addFilter"><i class="icon-plus22"></i> Tambah Pencarian</button>
            <button class="btn btn-warning" @click="resetFilter" v-if="this.appliedFilters.length > 0"><i class="icon-reset"></i> Reset</button>
            <button class="btn btn-primary" @click="applyFilter"><i class="icon-search4"></i> Lakukan Pencarian</button>
          </div>


          <!-- pengurutan -->
          <div class="col-md-4 text-right">
            <div class="row no-gutters">
              <div class="col-md-4 align-self-center pr-1">
                <span>Urutkan berdasarkan</span>
              </div>
              <div class="col-md-7 pr-1">
                <select class="form-control" @input="updateOrderColumn">
                  <option v-for="column in columnData" :value="column.name" :selected="column && column.name == query.order_column"
                    v-if="column.sort">
                    {{column.title}}
                  </option>
                </select>
              </div>
              <div class="col-md-1">
                <button class="btn btn-light btn-block" @click="updateOrderDirection">
                  <i class="icon-arrow-up7" v-if="query.order_direction === 'asc'"></i>
                  <i class="icon-arrow-down7" v-else></i>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

    <div class="card">

      <div class="card-header">
        <div class="btn-toolbar">
          <!-- slot button -->
          <slot name="button-desktop"></slot>
        </div>
      </div>

      <!-- table-->
      <div class="table-responsive">
        <table class="table table-striped">

          <!-- header -->
          <thead class="bg-primary">
            <tr class="text-nowrap">
              <th v-for="item in columnData" v-if="!item.hide && !item.disable">
                <span v-html="item.title"></span>
              </th>
            </tr>
          </thead>

          <!-- loading body -->
          <tbody v-if="itemDataStat === 'loading'">
            <tr>
              <td :colspan="columnData.length">
                <div class="progress">
                  <div class="progress-bar progress-bar-info progress-bar-striped active" style="width: 100%">
                    <span class="sr-only">100% Complete</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>

          <!-- data body -->
          <tbody v-else-if="itemDataStat === 'success'" @contextmenu.prevent="$refs.menu.open">

            <slot name="item-desktop" v-for="(item,index) in itemData.data" :item="item" :index="index"></slot>
          </tbody>

          <!-- error body -->
          <tbody v-else-if="itemDataStat === 'fail'">
            <tr>
              <td :colspan="columnData.length">
                Oops.. Terjadi kesalahan, silahkan coba lagi.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- table context menu -->
      <context-menu ref="menu">
        <!-- slot button -->
        <slot name="button-context"></slot>
      </context-menu>

      <!-- footer info -->
      <div class="card-footer bg-light d-sm-flex justify-content-sm-between align-items-sm-center text-center text-sm-left py-sm-2 hidden-print">
        <!-- total entri note success-->
        <div v-if="itemDataStat === 'success'">Menampilkan {{itemData.from}} -
          {{itemData.to}} entri dari {{itemData.total}} entri</div>

        <!-- total entri note loading -->
        <div v-else-if="itemDataStat === 'loading'">Menampilkan
          <i class="icon-spinner2 spinner"></i> -
          <i class="icon-spinner2 spinner"></i> entri dari
          <i class="icon-spinner2 spinner"></i> entri</div>

        <!-- pagination success-->
        <ul class="pagination pagination-sm pagination-pager pagination-pager-linked justify-content-between mt-2 mt-sm-0" v-if="itemDataStat === 'success'">
          <li class="page-item" :class="{'disabled' : !itemData.prev_page_url}">
            <a href="#" class="page-link" @click.prevent="prevPage">
              <i class="icon-arrow-left12"></i> sebelumnya
            </a>
          </li>
          <li class="page-item" :class="{'disabled' : !itemData.next_page_url}">
            <a href="#" class="page-link" @click.prevent="nextPage">
              selanjutnya <i class="icon-arrow-right13"></i>
            </a>
          </li>
        </ul>

        <!-- pagination loading -->
        <ul class="pagination pagination-sm pagination-pager pagination-pager-linked justify-content-between mt-2 mt-sm-0" v-else-if="itemDataStat === 'loading'">
          <li class="disabled">
            <a>
              <i class="icon-arrow-left12"></i>
            </a>
          </li>
          <li class="active">
            <a>
              <i class="icon-spinner2 spinner"></i>
            </a>
          </li>
          <li class="disabled">
            <a>
              <i class="icon-arrow-right13"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
  import Vue from 'vue'
  import _ from 'lodash';
  import jsonExcel from 'vue-json-excel';
  import appModal from '../components/modal';
  import contextMenu from 'vue-context-menu';
  import Cleave from 'vue-cleave-component';

  export default {
    props: {
      title: String,
      columnData: Array,
      itemData: Object,
      itemDataStat: String,
    },
    components: {
      jsonExcel,
      appModal,
      contextMenu,
      Cleave
    },
    data() {
      return {
        loading: true,
        appliedFilters: [],
        filterCandidates: [],
        query: {
          order_column: 'created_at',
          order_direction: 'desc',
          filter_match: 'and',
          limit: 10,
          page: 1
        },
        collection: {
          data: []
        },
      }
    },
    mounted() {
      // $('.bootstrap-select').selectpicker();
    },
    created() {
      this.addFilter();
    },
    watch: {
      itemDataStat(value) {
        if (value == 'success') {
          this.query.page = this.itemData.current_page;
        }
      },
    },
    methods: {
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
        Vue.set(this.query, 'order_column', value)
        this.applyChange()
      },
      exportToCSV() {
        // next video
      },
      resetFilter() {
        this.appliedFilters.splice(0)
        this.filterCandidates.splice(0)
        this.addFilter()
        this.query.page = 1
        this.applyChange()
      },
      applyFilter() {
        Vue.set(this.$data, 'appliedFilters',
          JSON.parse(JSON.stringify(this.filterCandidates))
        )
        this.query.page = 1;
        this.applyChange()
      },
      removeFilter(f, i) {
        this.filterCandidates.splice(i, 1)
      },
      selectOperator(f, i, e) {
        let value = e.target.value
        if (value.length === 0) {
          Vue.set(this.filterCandidates[i], 'operator', value)
          return
        }

        let obj = JSON.parse(value)

        Vue.set(this.filterCandidates[i], 'operator', obj)

        this.filterCandidates[i].query_1 = null
        this.filterCandidates[i].query_2 = null

        // set default query

        switch (obj.name) {
          case 'in_the_past':
          case 'in_the_next':
            this.filterCandidates[i].query_1 = 28
            this.filterCandidates[i].query_2 = 'days'
            break;
          case 'in_the_peroid':
            this.filterCandidates[i].query_1 = 'today'
            break;
        }
      },
      selectColumn(f, i, e) {
        let value = e.target.value
        if (value.length === 0) {
          Vue.set(this.filterCandidates[i], 'column', value)
          return
        }

        let obj = JSON.parse(value)

        Vue.set(this.filterCandidates[i], 'column', obj)

        // set default operator: todo
        switch (obj.tipe) {
          case 'numeric':
            this.filterCandidates[i].operator = this.availableOperators()[4]
            this.filterCandidates[i].query_1 = null
            this.filterCandidates[i].query_2 = null
            break;
          case 'string':
            this.filterCandidates[i].operator = this.availableOperators()[6]
            this.filterCandidates[i].query_1 = null
            this.filterCandidates[i].query_2 = null
            break;
          case 'datetime':
            this.filterCandidates[i].operator = this.availableOperators()[9]
            this.filterCandidates[i].query_1 = 28
            this.filterCandidates[i].query_2 = 'days'
            break;
          case 'counter':
            this.filterCandidates[i].operator = this.availableOperators()[14]
            this.filterCandidates[i].query_1 = null
            this.filterCandidates[i].query_2 = null
            break;
        }
      },
      addFilter() {
        this.filterCandidates.push({
          column: '',
          operator: '',
          query_1: null,
          query_2: null
        })
      },
      applyChange() {
        this.fetch()
      },
      updateLimit() {
        this.query.page = 1
        this.applyChange()
      },
      prevPage() {
        if (this.itemData.prev_page_url) {
          this.query.page = Number(this.query.page) - 1
          this.applyChange()
        }
      },
      nextPage() {
        if (this.itemData.next_page_url) {
          this.query.page = Number(this.query.page) + 1
          this.applyChange()
        }
      },
      getFilters() {
        const f = {}

        this.appliedFilters.forEach((filter, i) => {
          f[`f[${i}][column]`] = filter.column.name
          f[`f[${i}][operator]`] = filter.operator.name
          f[`f[${i}][query_1]`] = filter.query_1
          f[`f[${i}][query_2]`] = filter.query_2
        })

        return f
      },
      fetch() {
        const filters = this.getFilters()

        const params = {
          ...filters,
          ...this.query
        }

        this.$emit('fetch', params)
      },
      availableOperators() {
        return [{
            title: 'equal to',
            name: 'equal_to',
            parent: ['numeric', 'string'],
            component: 'single'
          },
          {
            title: 'not equal to',
            name: 'not_equal_to',
            parent: ['numeric', 'string'],
            component: 'single'
          },
          {
            title: 'less than',
            name: 'less_than',
            parent: ['numeric'],
            component: 'single'
          },
          {
            title: 'greater than',
            name: 'greater_than',
            parent: ['numeric'],
            component: 'single'
          },

          {
            title: 'between',
            name: 'between',
            parent: ['numeric'],
            component: 'double'
          },
          {
            title: 'not between',
            name: 'not_between',
            parent: ['numeric'],
            component: 'double'
          },

          {
            title: 'contains',
            name: 'contains',
            parent: ['string'],
            component: 'single'
          },
          {
            title: 'starts with',
            name: 'starts_with',
            parent: ['string'],
            component: 'single'
          },
          {
            title: 'ends with',
            name: 'ends_with',
            parent: ['string'],
            component: 'single'
          },

          {
            title: 'in the past',
            name: 'in_the_past',
            parent: ['datetime'],
            component: 'datetime_1'
          },
          {
            title: 'in the next',
            name: 'in_the_next',
            parent: ['datetime'],
            component: 'datetime_1'
          },
          {
            title: 'in the peroid',
            name: 'in_the_peroid',
            parent: ['datetime'],
            component: 'datetime_2'
          },

          {
            title: 'equal to',
            name: 'equal_to_count',
            parent: ['counter'],
            component: 'single'
          },
          {
            title: 'not equal to',
            name: 'not_equal_to_count',
            parent: ['counter'],
            component: 'single'
          },
          {
            title: 'less than',
            name: 'less_than_count',
            parent: ['counter'],
            component: 'single'
          },
          {
            title: 'greater than',
            name: 'greater_than_count',
            parent: ['counter'],
            component: 'single'
          },
        ]
      }
    },
    computed: {
      fetchOperators() {
        return (f) => {
          return this.availableOperators().filter((operator) => {
            if (f.column && operator.parent.includes(f.column.tipe)) {
              return operator
            }
          })
        }
      }
    }
  }
</script>