<template>
  <div>
    <div class="panel panel-flat">
      <div class="panel-body">
        <div class="row">

          <!-- search -->
          <div class="col-md-12 pb-15">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="icon-search4 text-muted"></i>
              </div>

              <!-- input -->
              <input type="text" class="form-control" placeholder="Masukkan kata kunci pencarian" v-model="searchQuery1">

              <!-- filter -->
              <div class="input-group-btn">
                <div class="btn-group">
                  <button type="button" class="btn btn-default btn-icon dropdown-toggle" data-toggle="dropdown">
                    Berdasarkan {{searchColumn}} &nbsp;
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li class="dropdown-header">Pencarian berdasarkan</li>
                    <li class="divider"></li>
                    <li v-for="column in filterData" v-if="column.key != null && !column.disable" :class="{'active' : params.search_column === column.key}">
                      <a @click.prevent="searchColumnData(column.key,column.title,column.operator)">{{column.title}}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- button row -->
        <div class="row">
          <div class="col-md-12">

            <!-- loading button row -->
            <div class="btn-toolbar" v-if="itemDataStat === 'loading'">
              <div class="btn-group pb-5" v-for="n in toolbarButton">
                <button type="button" data-popup="tooltip" title="LOADING" class="btn btn-default btn-icon">
                  <i class="icon-spinner2 spinner"></i>
                </button>
              </div>
            </div>

            <!-- success button row -->
            <div class="btn-toolbar" v-else-if="itemDataStat === 'success'">

              <!-- row view -->
              <div class="btn-group pb-5">
                <button type="button" data-popup="tooltip" title="KOLOM" class="btn btn-default btn-icon dropdown-toggle" data-toggle="dropdown">
                  <i class="icon-table2"></i> &nbsp;
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu dropdown-content">
                  <li class="dropdown-header">Kolom yang ditampilkan</li>
                  <li class="divider"></li>
                  <li>
                    <a @click.prevent="showAllColumn">Semua Kolom</a>
                  </li>
                  <slot name="button-kolom"></slot>
                  <li class="divider"></li>
                  <li v-for="(column,index) in columnData" :class="{'active' : !column.hide}" v-if="column.hide != null && !column.disable">
                    <a @click.prevent="hideColumn(index)">{{column.title}}</a>
                  </li>
                </ul>
              </div>

              <!-- entri view -->
              <div class="btn-group pb-5">
                <button type="button" data-popup="tooltip" title="ENTRI" class="btn btn-default btn-icon dropdown-toggle" data-toggle="dropdown">
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
                  <slot name="button-entri"></slot>
                </ul>
              </div>

              <!-- group view -->
              <div class="btn-group pb-5">
                <button type="button" data-popup="tooltip" title="KELOMPOK" class="btn btn-default btn-icon dropdown-toggle" data-toggle="dropdown">
                  <i class="icon-grid6"></i>&nbsp; {{group.title}} &nbsp;
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">Kelompokkan berdasarkan</li>
                  <li class="divider"></li>
                  <li>
                    <a @click.prevent="unGroupRow">Tidak dikelompokkan</a>
                  </li>
                  <li class="divider"></li>
                  <li v-for="(column,index) in columnData" v-if="column.groupKey != null && !column.disable" :class="{'active' : column.groupKey === group.key}">
                    <a @click.prevent="groupRow(column.groupKey,column.key,column.title,index)">{{column.title}}</a>
                  </li>
                </ul>
              </div>

              <!-- excel download -->
              <div class="btn-group pb-5">
                <button type="button" data-popup="tooltip" title="DOWNLOAD EXCEL" class="btn btn-default btn-icon dropdown-toggle" data-toggle="dropdown">
                  <i class="icon-file-excel"></i>&nbsp;
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li class="dropdown-header">Download data ke excel</li>
                  <li class="divider"></li>
                  <li>
                    <json-excel :data="excel.data" :fieldsx="excel.fields" :meta="excel.meta" name="fileExcel.xls">Data di tabel</json-excel>
                  </li>
                  <li>
                    <a @click.prevent="modalExcelOpen">Semua Data</a>
                  </li>
                </ul>
              </div>

              <!-- slot button -->
              <slot name="button"></slot>
            </div>
          </div>
        </div>
      </div>

      <!-- table -->
      <div class="table-responsive">
        <table class="table table-striped">

          <!-- header -->
          <thead class="bg-primary">
            <tr class="text-nowrap">
              <th v-for="item in columnData" v-if="!item.hide && !item.disable">
                <div @click="sort(item.key)" v-if="item.sort" class="cursor-pointer">
                  <span>{{item.title}}</span>
                  <span v-if="params.column === item.key">
                    <span v-if="params.direction === 'asc'">&#x25B2;</span>
                    <span v-else>&#x25BC;</span>
                  </span>
                  <span class="icon-menu-open" v-else></span>
                </div>
                <div v-else>
                  <span>{{item.title}}</span>
                </div>
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
          <tbody v-for="(items,index) in groupData" v-else-if="itemDataStat === 'success'">
            <tr class="active border-double" v-if="group.show">
              <td :colspan="columnData.length">
                <b>{{index}}</b>
              </td>
            </tr>
            <slot v-for="item in items" :item="item"></slot>
          </tbody>

          <!-- error body -->
          <tbody v-else-if="itemDataStat === 3">
            <tr>
              <td :colspan="columnData.length">
                Oops.. Terjadi kesalahan, silahkan coba lagi.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- footer info -->
      <div class="panel-footer has-visible-elements">

        <!-- loading footer info -->
        <div class="heading-elements visible-elements" v-if="itemDataStat === 'loading'">

          <!-- total entri note -->
          <span class="heading-text text-semibold">Menampilkan
            <i class="icon-spinner2 spinner"></i> -
            <i class="icon-spinner2 spinner"></i> entri dari {{itemData.total}} entri</span>

          <!-- pagination -->
          <ul class="pagination pagination-flat pagination-xs pull-right">
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

        <!-- success footer info -->
        <div class="heading-elements visible-elements" v-else-if="itemDataStat === 'success'">

          <!-- total entri note -->
          <span class="heading-text text-semibold">Menampilkan {{itemData.from}} - {{itemData.to}} entri dari {{itemData.total}} entri</span>

          <!-- pagination -->
          <ul class="pagination pagination-flat pagination-xs pull-right">
            <li :class="{'disabled' : !itemData.prev_page_url}">
              <a @click.prevent="prev">
                <i class="icon-arrow-left12"></i>
              </a>
            </li>
            <li v-for="n in pages" :class="{'active' : params.page == n}">
              <a @click.prevent="goToPage(n)">{{n}}</a>
            </li>
            <li :class="{'disabled' : !itemData.next_page_url}">
              <a @click.prevent="next">
                <i class="icon-arrow-right13"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- modal -->
    <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" @batal="modalTutup" @tutup="modalTutup"
      @confirmOk="modalConfirmOk" @errorOk="modalTutup">
      <div slot="modal-body1" class="text-center">
        <span class="text-primary">
          <i class="icon-checkmark-circle2" style="font-size: 5em"></i>
        </span>
        <h2>Silahkan tekan tombol download</h2>
        <ul class="list-inline">
          <li>
            <button type="button" class="btn btn-default" @click="modalTutup">
              <i class="icon-cross"></i> Tutup</button>
          </li>
          <li>
            <json-excel :data="excel.data" :fieldsx="excel.fields" :meta="excel.meta" :name="excel.filename" class="btn btn-default">
              <i class="icon-download10"></i> Download Excel</json-excel>
          </li>
        </ul>
      </div>
    </app-modal>
  </div>
</template>
<script>
  import Vue from 'vue';
  import axios from 'axios';
  import _ from 'lodash';
  import jsonExcel from 'vue-json-excel';
  import appModal from '../components/modal';

  export default {
    props: ['source', 'columnData','filterData','itemData','itemDataStat', 'toolbarButton','params'],
    components: {
      jsonExcel,
      appModal
    },
    data() {
      return {
        pages: [],
        searchQuery1: '',
        searchQuery2: '',
        searchColumn: '',
        excel: {
          fields: {},
          data: [],
          meta: [
            [{
              "key": "charset",
              "value": "utf-8"
            }]
          ],
          filename: 'Artikel.xls'
        },
        group: {
          show: false,
          key: '',
          title: ''
        },
        isSearch: false,
        isExcelAll: false,
        modalShow: false,
        modalState: '',
        modalTitle: '',
        modalButton: ''
      }
    },
    mounted() {
      $('.bootstrap-select').selectpicker();
    },
    created() {
      this.params.search_column = this.filterData[0].key;
      this.params.search_operator = this.filterData[0].operator;
      this.searchColumn = this.filterData[0].title;

      // this.fetch();
    },
    watch: {
      searchQuery1: function (search_query) {
        this.params.search_query_1 = search_query;
        this.searchData();
      },
      groupData(){
        this.calculatePagination();
        this.field_excel();
      }
    },
    methods: {
      fetch(){
        this.$emit('fetch');
      },
      // excel data
      field_excel() {
        var vm = this;
        vm.excel.fields = {};
        vm.columnData.forEach(function (column) {
          if (!column.hide && !column.disable) {
            vm.excel.fields[column.title] = column.excelType;
          }
        });
        vm.excel.data = _.chain(vm.itemData.data).map(function (item) {
          var object = {};
          vm.columnData.forEach(function (key) {
            if (!key.hide && !key.disable) {
              if (key.groupKey) {
                object[key.title] = _.get(item, key.groupKey);
              } else {
                object[key.title] = _.get(item, key.key);
              }
            }
          })
          return object;
        }).value();
      },
      
      // search
      searchData: _.debounce(
        function () {
          this.isSearch = true;
          this.params.page = 1;
          this.fetch();
        },
        500),
      searchColumnData(value, name, operator = 'like') {
        if (this.params.search_column !== value) {
            this.params.search_column = value;
            this.searchColumn = name;
          if(this.params.search_query_1 !== ''){
            this.params.search_operator = operator;
            this.params.page = 1;
            this.fetch();
          }
        }
      },

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

      // grouping row
      groupRow(groupKey, sortKey, title, index) {
        if (this.group.key != groupKey) {
          this.group.show = true;
          this.group.key = groupKey;
          this.group.title = title;
          this.columnData[index].hide = true;
          this.sort(sortKey);
        }
        this.showAllColumn(index);
      },
      unGroupRow() {
        if (this.group.show) {
          this.group.show = false;
          this.group.key = '';
          this.group.title = '';
        }
        this.showAllColumn();
      },

      //sorting
      sort(column) {
        if (column === this.params.column) {
          if (this.params.direction === 'desc') {
            this.params.direction = 'asc';
          } else {
            this.params.direction = 'desc';
          }
        } else {
          this.params.column = column;
          this.params.direction = 'asc';
        }
        this.params.page = 1;
        this.fetch();
      },

      // pagination
      entriPage(value) {
        if (this.params.per_page != value) {
          this.params.per_page = value;
          this.params.page = 1;
          this.fetch();
        }
      },
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
      modalExcelOpen() {
        this.modalShow = true;
        this.modalState = 'confirm-tutup';
        this.modalTitle = 'Yakin akan mendownload semua data ke excel?';
        this.modalContent = 'Download akan lebih lama tergantung dari jumlah data';
        this.modalButton = 'Ya, download semua';
      },
      modalConfirmOk() {
        this.isExcelAll = true;
        this.entriPage(this.itemData.total);
      },
      modalTutup() {
        this.modalShow = false;
      },
    },
    computed: {
      groupData(){
        return _.groupBy(this.itemData.data, this.group.key);
      }
    }
  }
</script>