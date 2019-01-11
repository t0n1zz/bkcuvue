<template>
  <div>

    <!-- tabel -->
    <div class="card">
      <!-- button -->
      <div class="card-header d-print-none">

        <!-- search row -->
        <div class="row">
          <div class="col-md-12" v-for="(f, i, index) in filterCandidates">
            <div class="row">
              <div class="col-md-3 pb-2" v-show="false">
                <div class="input-group">
                  <span class="input-group-prepend">
                    <span class="input-group-text">Kolom</span>
                  </span>
                  <select class="form-control" @input="selectColumn(f, i, $event)">
                    <option disabled value="">Silahkan masukkan kolom pencarian</option>
                    <option v-for="x in columnData" :value="JSON.stringify(x)" :selected="f.column && x.name === f.column.name"
                      v-if="x.filter && !x.disable">
                      {{x.title}}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-md-4 pb-2" v-if="f.column">
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

              <template>
                <div class="col-md-6 pb-2" >
                  <div class="input-group">
                    <span class="input-group-prepend">
                      <span class="input-group-text">Nama</span>
                    </span>
                    <input type="text" class="form-control" v-model="f.query_1" placeholder="Masukkan nama pencarian">
                  </div>
                </div>
              </template>

              <div class="col-md-2 pb-2">
                <button type="button" class="btn btn-primary btn-block" @click.prevent="applyFilter" :disabled="filterCandidates[0].query_1 == null || filterCandidates[0].query_1 == ''"><i class="icon-search4"></i> Cari</button>
              </div>
            </div>
          </div>
        </div>

        <div class="row">

          <!-- slot button -->
          <!-- button desktop -->
          <div class="col-md-8 col-lg-10 pb-2 d-none d-sm-block">
            <slot name="button-desktop"></slot>
          </div>
          <!-- button mobile -->
          <div class="col-md-12 pb-2 d-block d-sm-none">
            <slot name="button-mobile"></slot>
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
                <span v-html="item.title"></span> <i class="icon-menu-open" v-if="item.name == query.order_column"></i>
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
          <tbody v-else-if="itemDataStat === 'success'">

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

      <!-- footer  -->
      <div class="card-footer bg-white d-print-none">
        <div class="row">
          <!-- entri info -->
          <div class="col-md-4 pt-2">
            <!-- total entri note success-->

            <!-- desktop -->
            <div v-if="itemDataStat === 'success'" class="d-none d-sm-block">Menampilkan {{itemData.from}} -
              {{itemData.to}} entri dari {{itemData.total}} entri
            </div>

            <!-- mobile -->
            <div v-if="itemDataStat === 'success'" class="d-block d-sm-none text-center">Menampilkan {{itemData.from}} -
              {{itemData.to}} entri dari {{itemData.total}} entri
            </div>

            <!-- total entri note loading -->
            <div v-else-if="itemDataStat === 'loading'">Menampilkan
              <i class="icon-spinner2 spinner"></i> -
              <i class="icon-spinner2 spinner"></i> entri dari
              <i class="icon-spinner2 spinner"></i> entri
            </div>

          </div>

          <!-- pagination -->
          <!-- desktop -->
          <div class="col-md-8 pt-2 text-right d-none d-sm-block">
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
            <div class="btn-group" v-else-if="itemDataStat === 'loading'">
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

            <div class="btn-group" v-else>
              <button href="#" class="btn btn-light disabled">
                  <i class="icon-backward2"></i>
              </button>
              <button href="#" class="btn btn-light disabled">
                  <i class="icon-arrow-left5"></i>
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
          <div class="col-md-12 pt-2 text-center d-block d-sm-none">

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
            <div class="btn-group" v-else-if="itemDataStat === 'loading'">
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

            <!-- pagination else-->
            <div class="btn-group" v-else>
              <button href="#" class="btn btn-light disabled">
                  <i class="icon-backward2"></i>
              </button>
              <button href="#" class="btn btn-light disabled">
                  <i class="icon-arrow-left5"></i>
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
<script>
  import Vue from 'vue';
  import { toMulipartedForm } from '../helpers/form';
  import _ from 'lodash';
  import appModal from '../components/modal';
  import FileSaver from 'file-saver';

  export default {
    props: ['columnData', 'itemData', 'itemDataStat', 'query'],
    components: {
      appModal,
    },
    data() {
      return {
        appliedFilters: [],
        filterCandidates: [],
        pages: [],
        files: new FormData(),
        updateStat: '',
        updateResponse: '',
        modalShow: false,
        modalState: '',
        modalTitle: '',
        modalContent: '',
        modalButton: '',
        modalOptionState: ''
      }
    },
    created() {
      this.addFilter();
      this.defaultFilter();
    },
    watch: {
      itemDataStat(value) {
        if (value == 'success') {
          this.query.page = this.itemData.current_page;
          this.calculatePagination();
        }
      },
      updateStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateResponse.message;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			},
    },
    methods: {
      resetFilter() {
        this.appliedFilters.splice(0)
        this.filterCandidates.splice(0)
        this.addFilter()
        this.defaultFilter()
        this.query.page = 1
        this.applyChange()
      },
      applyFilter() {
        if(this.filterCandidates[0].query_1 != null && this.filterCandidates[0].query_1 != ''){
          Vue.set(this.$data, 'appliedFilters',
            JSON.parse(JSON.stringify(this.filterCandidates))
          )
          this.query.page = 1;
          this.applyChange()
        }
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

        switch (obj.tipe) {
          case 'string':
            this.filterCandidates[i].operator = this.availableOperators()[6]
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
      defaultFilter(){
        // set default filter
        let data = _.find(this.columnData,{'filterDefault':true})
        Vue.set(this.filterCandidates[0], 'column', data)
        
        switch (data.tipe) {
          case 'string':
            this.filterCandidates[0].operator = this.availableOperators()[6]
            this.filterCandidates[0].query_1 = null
            this.filterCandidates[0].query_2 = null
            break;
        }
      },
      applyChange() {
        this.fetch()
      },
      updateLimit() {
        this.query.page = 1
        this.applyChange()
      },
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
        const filters = this.getFilters();

        const params = {
          ...filters,
          ...this.query
        };

        this.$emit('fetch', params);
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