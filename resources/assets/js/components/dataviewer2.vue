<template>
  <div>

    <!-- pencarian -->
    <div class="card">
      <div class="card-header header-elements-inline bg-white">
        <h5 class="card-title">Pencarian data</h5>
        <div class="header-elements">
          <div class="list-icons">
            <a class="list-icons-item" data-action="collapse"></a>
          </div>
        </div>
      </div>

      <div class="card-body hidden-print">
        <!-- search row -->
        <div class="row">
          <div class="col-md-12" v-for="(f, i) in filterCandidates">
            <div class="row">
              <div class="col-md-4 pb-2">
                <div class="input-group">
                  <span class="input-group-prepend">
                    <span class="input-group-text">Kolom</span>
                  </span>
                  <select class="form-control" @input="selectColumn(f, i, $event)">
                    <option value="">Silahkan masukkan kolom pencarian</option>
                    <option v-for="x in columnData" :value="JSON.stringify(x)" :selected="f.column && x.name === f.column.name"
                      v-if="x.filter">
                      {{x.title}}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-md-3 pb-2" v-if="f.column">
                <div class="input-group">
                  <span class="input-group-prepend">
                    <span class="input-group-text">Operator</span>
                  </span>
                  <select class="form-control" @input="selectOperator(f, i, $event)">
                    <option v-for="y in fetchOperators(f)" :value="JSON.stringify(y)" :selected="f.operator && y.name === f.operator.name">
                      {{y.title}}
                    </option>
                  </select>
                </div>
              </div>

              <template v-if="f.column && f.operator">
                <div class="col-md-4 pb-2" v-if="f.operator.component === 'single'">
                  <div class="input-group">
                    <span class="input-group-prepend">
                      <span class="input-group-text">Kata kunci</span>
                    </span>
                    <input type="text" class="form-control" v-model="f.query_1">
                  </div>
                </div>
                <template v-if="f.operator.component === 'double'">
                  <div class="col-md-2 pb-2">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <span class="input-group-text">Kata kunci 1</span>
                      </span>
                      <input type="text" class="form-control" v-model="f.query_1">
                    </div>
                  </div>
                  <div class="col-md-2 pb-2">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <span class="input-group-text">Kata kunci 2</span>
                      </span>
                      <input type="text" class="form-control" v-model="f.query_2">
                    </div>
                  </div>
                </template>
                <template v-if="f.operator.component === 'datetime_1'">
                  <div class="col-md-2 pb-2">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <span class="input-group-text">Kata kunci 1</span>
                      </span>
                      <input type="text" class="form-control" v-model="f.query_1">
                    </div>
                  </div>
                  <div class="col-md-2 pb-2">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <span class="input-group-text">Kata kunci 2</span>
                      </span>
                      <select class="form-control" v-model="f.query_2">
                        <option value="hours">jam</option>
                        <option value="days">hari</option>
                        <option value="months">bulan</option>
                        <option value="years">tahun</option>
                      </select>
                    </div>
                  </div>
                </template>
                <template v-if="f.operator.component === 'datetime_2'">
                  <div class="col-md-4 pb-2">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <span class="input-group-text">Kata kunci</span>
                      </span>
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
                  </div>
                </template>

              </template>

              <div class="col-md-1 pb-2">
                <button class="btn bg-slate-300 btn-block" @click="removeFilter(f,i)"><i class="icon-cross3"></i></button>
              </div>
            </div>
          </div>
        </div>

        <div class="row"><div class="col-sm-12"><hr class="mt-1"></div></div>

        <!-- button row -->
        <div class="row">
          <div class="col-md-8 pb-2">
            <button class="btn bg-teal" @click="addFilter"><i class="icon-plus22"></i> Tambah Pencarian</button>
            <button class="btn btn-warning" @click="resetFilter" v-if="this.appliedFilters.length > 0"><i class="icon-reset"></i> Reset pencarian</button>
            <button class="btn btn-primary" @click="applyFilter"><i class="icon-search4"></i> Lakukan Pencarian</button>
          </div>

          
          <div class="col-md-4 text-right">
            <div class="row">

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

              <!-- pengurutan -->
              <div class="col-md-6 pb-2">
                <div class="input-group">
                  <span class="input-group-prepend">
                    <span class="input-group-text">Urutkan</span>
                  </span>
                  <select class="form-control" @input="updateOrderColumn">
                    <option v-for="column in columnData" :value="column.name" :selected="column && column.name == query.order_column"
                      v-if="column.sort">
                      {{column.title}}
                    </option>
                  </select>
                </div>  
              </div>

              <!-- arah pengurutan -->
              <div class="col-md-2">
                <button class="btn bg-orange-300 btn-block" @click="updateOrderDirection">
                  <i class="icon-arrow-up7" v-if="query.order_direction === 'asc'"></i>
                  <i class="icon-arrow-down7" v-else></i>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>

    <!-- tabel -->
    <div class="card">

      <div class="card-header">
        <div class="row">
          <!-- slot button -->
          <div class="col-md-8">
            <slot name="button-desktop"></slot>
          </div>

          <div class="col-md-4 text-right">
            <div class="row">
              <div class="col-md-8">
                <div class="btn-group">
                  <slot name="button-kolom"></slot>
                  <button type="button" class="btn btn-light btn-icon dropdown-toggle" data-toggle="dropdown" v-tooltip:top="'Atur Kolom Yang Ingin Ditampilkan'" :disabled="itemDataStat === 'loading'">
                    <i class="icon-table2"></i> Kolom
                    <span class="caret"></span>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item disabled">Kolom yang ditampilkan</a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item" @click.prevent="showAllColumn">Semua Kolom</a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item" v-for="(column,index) in columnData" :class="{'active' : !column.hide}" v-if="column.hide != null && !column.disable" @click.prevent="hideColumn(index)">{{column.title}}</a>
                  </div>
                </div>
              </div>
              <div class="col-md-2">

              </div>
              <div class="col-md-2">

              </div>
            </div>
          </div>
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
      // show column
      hideColumn(index) {
        if (this.columnData[index].hide === false)
          this.columnData[index].hide = true;
        else
          this.columnData[index].hide = false;
        this.field_excel(this);
      },
      showAllColumn(index) {
        for (var t in this.columnData) {
          if (t != index)
            this.columnData[t].hide = false;
        }
        this.field_excel(this);
      },
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
            title: 'sama dengan',
            name: 'equal_to',
            parent: ['numeric', 'string'],
            component: 'single'
          },
          {
            title: 'tidak sama dengan',
            name: 'not_equal_to',
            parent: ['numeric', 'string'],
            component: 'single'
          },
          {
            title: 'kurang dari',
            name: 'less_than',
            parent: ['numeric'],
            component: 'single'
          },
          {
            title: 'lebih dari',
            name: 'greater_than',
            parent: ['numeric'],
            component: 'single'
          },

          {
            title: 'antara',
            name: 'between',
            parent: ['numeric'],
            component: 'double'
          },
          {
            title: 'tidak antara',
            name: 'not_between',
            parent: ['numeric'],
            component: 'double'
          },

          {
            title: 'mengandung kata',
            name: 'contains',
            parent: ['string'],
            component: 'single'
          },
          {
            title: 'dimulai dari',
            name: 'starts_with',
            parent: ['string'],
            component: 'single'
          },
          {
            title: 'diakhiri dengan',
            name: 'ends_with',
            parent: ['string'],
            component: 'single'
          },

          {
            title: 'pada masa lalu',
            name: 'in_the_past',
            parent: ['datetime'],
            component: 'datetime_1'
          },
          {
            title: 'pada masa depan',
            name: 'in_the_next',
            parent: ['datetime'],
            component: 'datetime_1'
          },
          {
            title: 'pada periode',
            name: 'in_the_peroid',
            parent: ['datetime'],
            component: 'datetime_2'
          },

          {
            title: 'sama dengan',
            name: 'equal_to_count',
            parent: ['counter'],
            component: 'single'
          },
          {
            title: 'tidak sama dengan',
            name: 'not_equal_to_count',
            parent: ['counter'],
            component: 'single'
          },
          {
            title: 'kurang dari',
            name: 'less_than_count',
            parent: ['counter'],
            component: 'single'
          },
          {
            title: 'lebih dari',
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