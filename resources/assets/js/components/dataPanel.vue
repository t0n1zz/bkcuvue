<template>
  <div>

    <div class="panel panel-white panel-body hidden-xs hiddenn-print">
      <!-- search row -->
      <div class="row">
        <div class="col-md-12 pb-15">
          <div class="input-group">
            <!-- datetime -->
            <cleave 
              v-model="searchQuery1"
              class="form-control" 
              :raw="false" 
              :options="cleaveOption.dateTime" 
              placeholder="YYYY-MM-DD HH:MM:SS" 
              @keyup.enter="search()"
              :disabled="itemDataStat === 'loading'" 
              v-if="searchColumnType === 'datetime'"></cleave>
            <span class="input-group-addon" v-if="searchColumnType === 'datetime' && params.search_operator === 'between'">sampai</span>
            <cleave 
              v-model="searchQuery2"
              class="form-control" 
              :raw="false" 
              :options="cleaveOption.dateTime" 
              placeholder="YYYY-MM-DD HH:MM:SS" 
              @keyup.enter="search()"
              :disabled="itemDataStat === 'loading'" 
              v-if="searchColumnType === 'datetime' && params.search_operator === 'between'"></cleave>

            <!-- date -->
            <cleave 
              v-model="searchQuery1"
              class="form-control" 
              :raw="false" 
              :options="cleaveOption.date" 
              placeholder="YYYY-MM-DD"
              @keyup.enter="search()" 
              :disabled="itemDataStat === 'loading'" 
              v-if="searchColumnType === 'date'"></cleave>
            <span class="input-group-addon" v-if="searchColumnType === 'date' && params.search_operator === 'between'">sampai</span>
            <cleave 
              v-model="searchQuery2"
              class="form-control" 
              :raw="false" 
              :options="cleaveOption.date" 
              placeholder="YYYY-MM-DD" 
              @keyup.enter="search()"
              :disabled="itemDataStat === 'loading'" 
              v-if="searchColumnType === 'date' && params.search_operator === 'between'"></cleave>

            <!-- number -->
            <cleave 
              v-model="searchQuery1"
              class="form-control" 
              :options="cleaveOption.number" 
              placeholder="0-9" 
              @keyup.enter="search()"
              :disabled="itemDataStat === 'loading'" 
              v-if="searchColumnType === 'number'"></cleave>
            <span class="input-group-addon" v-if="searchColumnType === 'number' && params.search_operator === 'between'">sampai</span>
            <cleave 
              v-model="searchQuery2"
              class="form-control" 
              :options="cleaveOption.number" 
              placeholder="0-9" 
              @keyup.enter="search()"
              :disabled="itemDataStat === 'loading'" 
              v-if="searchColumnType === 'number' && params.search_operator === 'between'"></cleave>

            <!-- numeric -->
            <cleave 
              v-model="searchQuery1"
              class="form-control" 
              :options="cleaveOption.numeric" 
              placeholder="999.999.999,99" 
              @keyup.enter="search()"
              :disabled="itemDataStat === 'loading'" 
              v-if="searchColumnType === 'numeric'"></cleave>
            <span class="input-group-addon" v-if="searchColumnType === 'numeric' && params.search_operator === 'between'">sampai</span>
            <cleave 
              v-model="searchQuery2"
              class="form-control" 
              :options="cleaveOption.numeric" 
              placeholder="999.999.999,99" 
              @keyup.enter="search()"
              :disabled="itemDataStat === 'loading'" 
              v-if="searchColumnType === 'numeric' && params.search_operator === 'between'"></cleave>
              
            <!-- string -->
            <input 
              type="text" 
              class="form-control" 
              placeholder="Masukkan kata kunci pencarian" 
              v-model="searchQuery1"
              @keyup.enter="search()"
              :disabled="itemDataStat === 'loading'" v-if="searchColumnType === 'string'">
            <span class="input-group-addon" v-if="searchColumnType === 'string' && params.search_operator === 'between'">sampai</span>
            <input 
              type="text" 
              class="form-control" 
              placeholder="Masukkan kata kunci pencarian" 
              v-model="searchQuery2"
              @keyup.enter="search()"
              :disabled="itemDataStat === 'loading'" v-if="searchColumnType === 'string' && params.search_operator === 'between'"> 
            
            <!-- filter desktop -->
            <div class="input-group-btn">
              
              <!-- kolom -->
              <div class="btn-group ">
                <button type="button" class="btn btn-default btn-icon dropdown-toggle" data-toggle="dropdown" v-tooltip:top="'Atur Kategori Pencarian'"  :disabled="itemDataStat === 'loading'">
                  <i class="icon-filter4"></i> {{searchColumn}} &nbsp;
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class="dropdown-header">Pencarian berdasarkan</li>
                  <li class="divider"></li>
                  <li v-for="column in columnData" v-if="column.filter && !column.disable" :class="{'active' : params.search_column == column.key || params.search_column === column.filterKey}">
                    <a @click.prevent="searchColumnData(column.key,column.title,column.filterType,column.filterKey)">{{column.title }}</a>
                  </li>
                </ul>
              </div>

              <!-- operator -->
              <div class="btn-group ">
                <button type="button" class="btn btn-default btn-icon dropdown-toggle" data-toggle="dropdown" v-tooltip:top="'Atur Operator Pencarian'"  :disabled="itemDataStat === 'loading'">
                  <i class="icon-equalizer"></i> {{searchOperator}} &nbsp;
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class="dropdown-header">Operator pencarian</li>
                  <li class="divider"></li>
                  <li v-for="op in operator" :class="{'active' : params.search_operator === op.key}">
                    <a @click.prevent="searchOperatorData(op)">{{op.title}}</a>
                  </li>
                </ul>
              </div>

              <!-- cari -->
              <div class="btn-group">
                <button type="button" class="btn btn-default btn-icon " data-toggle="dropdown" v-tooltip:top="'Lakukan Pencarian'"  :disabled="itemDataStat === 'loading'" @click.prevent="search()">
                  <i class="icon-search4"></i>  Cari
                </button>
              </div>

              <!-- hapus pencarian -->
              <div class="btn-group" v-if="searchQuery1 !=='' || params.search_query_2 !==''">
                <button class="btn btn-default btn-icon" @click="emptySearch()"  v-tooltip:top="'Hapus pencarian'" ><i class="icon-cross"></i></button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- button row -->
      <div class="row">
        <div class="col-md-12">
          <!-- success button row -->
          <div class="btn-toolbar">

            <!-- entri view -->
            <div class="btn-group pb-5">
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
                <slot name="button-entri-desktop"></slot>
              </ul>
            </div>

            <!-- excel download -->
            <div class="btn-group pb-5">
              <button type="button" class="btn btn-default btn-icon dropdown-toggle" data-toggle="dropdown" v-tooltip:top="'Download Entri Sebagai Excel'" :disabled="itemDataStat === 'loading'">
                <i class="icon-file-excel"></i>&nbsp;
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li class="dropdown-header">Download data ke excel</li>
                <li class="divider"></li>
                <li>
                  <a><json-excel 
                  :data="excel.data" 
                  :fields="excel.fields" 
                  :meta="excel.meta"
                  :title="['Data ' + title]" 
                  :name="title + '.xls'"
                  >Data di tabel</json-excel></a>
                </li>
                <li>
                  <a @click.prevent="modalExcelOpen">Semua Data</a>
                </li>
              </ul>
            </div>

            <!-- slot button -->
            <slot name="button-desktop"></slot>
          </div>
        </div>

      </div>
    </div>

    <!-- search mobile -->
    <div class="panel panel-white visible-xs">
      <!-- heading -->
      <div class="panel-heading has-visible-elements visible-xs hidden-print">
        <h5 class="panel-title"><i class="icon-search4"></i> Pencarian</h5>
        <div class="heading-elements visible-elements">
          <ul class="icons-list">
            <li><a data-action="collapse" ></a></li>
            <li>
              <a v-tooltip:top="'Reload'"  @click="fetch()" :disabled="itemDataStat === 'loading'"><i class="icon-sync" :class="{'spinner' : itemDataStat === 'loading'}"></i></a>
            </li>
          </ul>
        </div>
      </div>

      <!-- body -->
      <div class="panel-body hidden-print">
        <div class="row">
          <div class="col-md-12 pb-15">
            <!-- searchbox -->
            <!-- datetime -->
            <cleave 
              v-model="searchQuery1"
              class="form-control" 
              :raw="false" 
              :options="cleaveOption.dateTime" 
              placeholder="YYYY-MM-DD HH:MM:SS" 
              :disabled="itemDataStat === 'loading'" 
              v-if="searchColumnType === 'datetime'"></cleave>
            <span class="input-group-addon" v-if="searchColumnType === 'datetime' && params.search_operator === 'between'">sampai</span>
            <cleave 
              v-model="searchQuery2"
              class="form-control" 
              :raw="false" 
              :options="cleaveOption.dateTime" 
              placeholder="YYYY-MM-DD HH:MM:SS" 
              :disabled="itemDataStat === 'loading'" 
              v-if="searchColumnType === 'datetime' && params.search_operator === 'between'"></cleave>

            <!-- date -->
            <cleave 
              v-model="searchQuery1"
              class="form-control" 
              :raw="false" 
              :options="cleaveOption.date" 
              placeholder="YYYY-MM-DD" 
              :disabled="itemDataStat === 'loading'" 
              v-if="searchColumnType === 'date'"></cleave>
            <span class="input-group-addon" v-if="searchColumnType === 'date' && params.search_operator === 'between'">sampai</span>
            <cleave 
              v-model="searchQuery2"
              class="form-control" 
              :raw="false" 
              :options="cleaveOption.date" 
              placeholder="YYYY-MM-DD" 
              :disabled="itemDataStat === 'loading'" 
              v-if="searchColumnType === 'date' && params.search_operator === 'between'"></cleave>

            <!-- number -->
            <cleave 
              v-model="searchQuery1"
              class="form-control" 
              :options="cleaveOption.number" 
              placeholder="0-9" 
              :disabled="itemDataStat === 'loading'" 
              v-if="searchColumnType === 'number'"></cleave>
            <span class="input-group-addon" v-if="searchColumnType === 'number' && params.search_operator === 'between'">sampai</span>
            <cleave 
              v-model="searchQuery2"
              class="form-control" 
              :options="cleaveOption.number" 
              placeholder="0-9" 
              :disabled="itemDataStat === 'loading'" 
              v-if="searchColumnType === 'number' && params.search_operator === 'between'"></cleave>

            <!-- numeric -->
            <cleave 
              v-model="searchQuery1"
              class="form-control" 
              :options="cleaveOption.numeric" 
              placeholder="999.999.999,99" 
              :disabled="itemDataStat === 'loading'" 
              v-if="searchColumnType === 'numeric'"></cleave>
            <span class="input-group-addon" v-if="searchColumnType === 'numeric' && params.search_operator === 'between'">sampai</span>
            <cleave 
              v-model="searchQuery2"
              class="form-control" 
              :options="cleaveOption.numeric" 
              placeholder="999.999.999,99" 
              :disabled="itemDataStat === 'loading'" 
              v-if="searchColumnType === 'numeric' && params.search_operator === 'between'"></cleave>
              
            <!-- string -->
            <input 
              type="text" 
              class="form-control" 
              placeholder="Masukkan kata kunci pencarian" 
              v-model="searchQuery1"
              :disabled="itemDataStat === 'loading'" v-if="searchColumnType === 'string'">
            <span class="input-group-addon" v-if="searchColumnType === 'string' && params.search_operator === 'between'">sampai</span>
            <input 
              type="text" 
              class="form-control" 
              placeholder="Masukkan kata kunci pencarian" 
              v-model="searchQuery2"
              :disabled="itemDataStat === 'loading'" v-if="searchColumnType === 'string' && params.search_operator === 'between'"> 

            <!-- filter -->
            <div class="pb-15 pt-15">
              <button type="button" class="btn btn-default btn-icon btn-block" :disabled="itemDataStat === 'loading'" @click.prevent="modalMobileOptionOpen('filter')">
                <i class="icon-filter4"></i> {{searchColumn}} 
              </button>
            </div>

            <!-- operator -->
            <div class="pb-15">
              <button type="button" class="btn btn-default btn-icon btn-block" :disabled="itemDataStat === 'loading'" @click.prevent="modalMobileOptionOpen('operator')">
                <i class="icon-equalizer"></i> {{searchOperator}}
              </button>
            </div>

            <!-- button cari -->
            <div class="pb-15">
              <button type="button" class="btn btn-default btn-icon btn-block" :disabled="itemDataStat === 'loading'" @click.prevent="search()">
                <i class="icon-search4"></i> Cari
              </button>
            </div>

            <!-- hapus pencarian -->
            <div v-if="searchQuery1 !=='' || params.search_query_2 !==''">
              <button class="btn btn-default btn-icon btn-block" @click.prevent="emptySearch()"><i class="icon-cross"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- button mobile -->
    <div class="panel panel-flat panel-white hidden-print visible-xs">
      <div class="panel-heading has-visible-elements">
        <h5 class="panel-title"><i class="icon-hammer-wrench"></i> Pengolahan</h5>
        <div class="heading-elements visible-elements">
          <ul class="icons-list">
            <li><a data-action="collapse"></a></li>
          </ul>
        </div>
      </div>
      <div class="panel-body">
        <div class="pb-15">
          <button type="button" class="btn btn-default btn-icon btn-block" :disabled="itemDataStat === 'loading'" @click.prevent="modalMobileOptionOpen('column')">
            <i class="icon-table2"></i> Kolom yang ditampilkan
          </button>
        </div>

        <div class="pb-15">
          <button type="button" class="btn btn-default btn-icon btn-block" :disabled="itemDataStat === 'loading'" @click.prevent="modalMobileOptionOpen('entri')">
            <i class="icon-menu7"></i> {{params.per_page}} Entri yang ditampilkan
          </button>
        </div>

        <div class="pb-15">
          <button type="button" class="btn btn-default btn-icon btn-block" :disabled="itemDataStat === 'loading'" @click.prevent="modalMobileOptionOpen('sort')">
            <i class="icon-sort"></i> Urutkan berdasarkan 
          </button>
        </div>

        <div class="pb-15">
          <button type="button" class="btn btn-default btn-icon btn-block" :disabled="itemDataStat === 'loading'" @click.prevent="modalMobileOptionOpen('excel')">
            <i class="icon-file-excel"></i> Download excel 
          </button>
        </div>

        <!-- button -->
        <slot name="button-mobile"></slot>
      </div>
    </div>

    <!-- divider -->
    <div class="text-center text-muted hidden-print">
      <span>KONTEN</span>
    </div>
    
    <hr class="visible-xs no-margin-top hidden-print"/>

    <!-- content -->
    <div v-if="itemDataStat === 'loading'">
      <div class="progress">
        <div class="progress-bar progress-bar-info progress-bar-striped active" style="width: 100%">
          <span class="sr-only">100% Complete</span>
        </div>
      </div>
    </div>

    <div v-for="(items,index) in groupData" v-else-if="itemDataStat === 'success'">
      <slot name="item-mobile" v-for="(item,index) in items" :item="item" :index="index"></slot>
    </div>

    <div v-else-if="itemDataStat === 'fail'">
      <i class="icon-cancel-circle2" style="font-size: 5em"></i>
      <h3>Oops.. Terjadi kesalahan, silahkan coba lagi.</h3>
    </div>

    <!-- divider -->
    <hr class="hidden-print"/>
    
    <!-- pagination-->
    <div class="text-center hidden-print">
      <!-- pagination success -->
      <ul class="pagination pagination-flat pagination-lg" v-if="itemDataStat === 'success'">
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

      <!-- pagination loading -->
      <ul class="pagination pagination-flat pagination-xs" v-else-if="itemDataStat === 'loading'">
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
 
    <!-- modal -->
    <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" @batal="modalTutup" @tutup="modalTutup" @errorOk="modalTutup" @backgroundClick="modalTutup">

      <div slot="modal-body1" class="text-center">
        <div v-if="excelLoadStat === ''">
          <span class="text-warning">
            <i class="icon-exclamation" style="font-size: 5em"></i>
          </span>
          <h2>Yakin akan mendownload semua data ke excel?</h2>
          <pre class="pre-scrollable" id="stack">Lama download tergantung pada jumlah data yang ada.</pre>
          <br>
          <ul class="list-inline">
            <li>
              <button type="button" class="btn btn-default" @click="modalTutup">
                <i class="icon-cross"></i> Tutup</button>
            </li>
            <li>
              <button type="button" class="btn btn-warning" @click="modalExcelOk">
                <i class="icon-checkmark5"></i> Ya, download semua</button>
            </li>
          </ul>
        </div>
        <div v-else-if="excelLoadStat === 'loading'">
          <i class="icon-spinner spinner" style="font-size: 5em"></i>
          <h2>Mohon tunggu sebentar...</h2>
        </div>
        <div v-else-if="excelLoadStat === 'success'">
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
              <json-excel 
                :data="excel.data"
                :fields="excel.fields" 
                :meta="excel.meta" 
                :title="title"
                :name="title + '.xls'"
                class="btn btn-default">
                <i class="icon-download10"></i> Download Excel</json-excel>
            </li>
          </ul>
        </div>
      </div>

      <div slot="modal-body2">

        <!-- filter -->
        <div v-if="modalMobileOptionState === 'filter'">
          <h2 class="text-center">Pencarian berdasarkan</h2>
          <hr/>
          <a class="btn btn-default btn-block" v-for="column in columnData" v-if="column.filter && !column.disable" :class="{'btn-primary' : params.search_column === column.key || params.search_column === column.filterKey}" @click.prevent="searchColumnData(column.key,column.title,column.filterType,column.filterKey)" >{{column.title}}</a>
          <hr/>
          <a class="btn btn-default btn-block" @click.prevent="modalTutup"><i class="icon-cross"></i> Tutup</a>
        </div>

        <!-- operator -->
        <div v-if="modalMobileOptionState === 'operator'">
          <h2 class="text-center">Operator pencarian</h2>
          <hr/>
          <a class="btn btn-default btn-block" v-for="op in operator" :class="{'btn-primary' : params.search_operator === op.key}" @click.prevent="searchOperatorData(op)" >{{op.title}}</a>
          <hr/>
          <a class="btn btn-default btn-block" @click.prevent="modalTutup"><i class="icon-cross"></i> Tutup</a>
        </div>

        <!-- column -->
        <div v-if="modalMobileOptionState === 'column'">
          <h2 class="text-center">Kolom yang ditampilkan</h2>
          <hr/>
          <a class="btn btn-default btn-block" @click.prevent="showAllColumn" >Semua kolom</a>
          <hr/>
          <a class="btn btn-default btn-block" v-for="(column,index) in columnData" :class="{'btn-primary' : !column.hide}" v-if="column.hide != null && !column.disable" @click.prevent="hideColumn(index)" >{{column.title}}</a>
          <hr/>
          <a class="btn btn-default btn-block" @click.prevent="modalTutup"><i class="icon-cross"></i> Tutup</a>
        </div>

        <!-- entri -->
        <div v-if="modalMobileOptionState === 'entri'">
          <h2 class="text-center">Entri yang ditampilkan</h2>
          <hr/>
          <a class="btn btn-default btn-block" :class="{'btn-primary' : params.per_page === 10}" @click.prevent="entriPage(10)" >10 Entri</a>
          <a class="btn btn-default btn-block" :class="{'btn-primary' : params.per_page === 25}" @click.prevent="entriPage(25)" v-if="itemData.total > 10">25 Entri</a>
          <a class="btn btn-default btn-block" :class="{'btn-primary' : params.per_page === 50}" @click.prevent="entriPage(50)" v-if="itemData.total > 25">50 Entri</a>
          <slot name="button-entri-mobile"></slot>
          <hr/>
          <a class="btn btn-default btn-block" @click.prevent="modalTutup"><i class="icon-cross"></i> Tutup</a>
        </div>

        <div v-if="modalMobileOptionState === 'sort'">
          <h2 class="text-center">Urutkan berdasarkan</h2>
          <hr/>
          <a class="btn btn-default btn-block" v-for="item in columnData" v-if="!item.hide && !item.disable && item.sort" @click.prevent="sort(item.key)">
            {{item.title}}
            <span v-if="params.column === item.key">
              <span v-if="params.direction === 'asc'"><i class="icon-sort-amount-asc"></i></span>
              <span v-else><i class="icon-sort-amount-desc"></i></span>
            </span>
            <span class="icon-sort" v-else></span>
          </a>
          <hr/>
          <a class="btn btn-default btn-block" @click.prevent="modalTutup"><i class="icon-cross"></i> Tutup</a>
        </div>

        <!-- excel -->
        <div v-if="modalMobileOptionState === 'excel'">
          <h2 class="text-center">Download data ke excel</h2>
          <hr/>
          <json-excel 
            class="btn btn-default btn-block"
            :data="excel.data" 
            :fields="excel.fields" 
            :meta="excel.meta"
            :title="'Data ' + title" 
            :name="title + '.xls'"
            >Data di tabel</json-excel>
          <a class="btn btn-default btn-block" @click.prevent="modalExcelOpen">Semua data</a>
          <hr/>
          <a class="btn btn-default btn-block" @click.prevent="modalTutup"><i class="icon-cross"></i> Tutup</a>
        </div>
      </div>
    </app-modal>

  </div>
</template>
<script>
  import _ from 'lodash';
  import jsonExcel from 'vue-json-excel';
  import appModal from '../components/modal';
  import Cleave from 'vue-cleave-component';

  export default {
    props: ['title','source', 'columnData','itemData','itemDataStat', 'toolbarButton','params','tableClass','extSearchQuery1','extSearchQuery2'],
    components: {
      jsonExcel,
      appModal,
      Cleave
    },
    data() {
      return {
        pages: [],
        searchQuery1: '',
        searchQuery2: '',
        searchColumn: '',
        searchColumnType: '',
        searchOperator: '',
        operator: [
          {
            key: 'like',
            title: 'Seperti [#...]',
          },
          {
            key: 'equal_to',
            title: 'Sama Dengan [=]',
          },
          {
            key: 'not_equal',
            title: 'Tidak Sama Dengan [<>]',
          },
          {
            key: 'less_than',
            title: 'Kurang Dari [<]',
          },
          {
            key: 'greater_than',
            title: 'Lebih Dari [>]',
          },
          {
            key: 'less_than_or_equal_to',
            title: 'Kurang Dari Sama Dengan [<=]',
          },
          {
            key: 'greater_than_or_equal_to',
            title: 'Lebih Dari Sama Dengan [>=]',
          },
          {
            key: 'between',
            title: 'Antara [#]-[#]',
          },
        ],
        cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
          },
          number: {
            numeral: true,
            numeralThousandsGroupStyle: 'none',
            numeralDecimalScale: 0,
            stripLeadingZeroes: false
          },
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
          },
          dateTime:{
            blocks: [4,2,2,2,2,2],
            delimiters: ['-','-',' ',':',':'],
            delimiterLazyShow: true
          }
        },
        excel: {
          fields: {},
          data: [],
          meta: [
            [{
              "key": "charset",
              "value": "utf-8"
            }]
          ],
          title: '',
          filename: ''
        },
        group: {
          show: false,
          key: '',
          title: '',
          noKey: ''
        },
        excelLoadStat: '',
        isSearch: false,
        isExcelAll: false,
        isFirstLoad: true,
        modalShow: false,
        modalState: '',
        modalTitle: '',
        modalButton: '',
        modalMobileOptionState: ''
      }
    },
    mounted() {
      $('.bootstrap-select').selectpicker();
    },
    created() {
      this.searchParams();
      // this.fetch();
    },
    watch: {
      // check route changes
			'$route' (to, from){
        this.isFirstLoad = true;
        this.searchParams();
      },
      
      itemDataStat(value){
        this.excelLoadStat = value;
        if(value == 'success'){
          if(this.isFirstLoad)
            this.searchParams();

          this.isFirstLoad = false;
        }
      },

      extSearchQuery1(value){
        this.searchQuery1 = value;
      },
      extSearchQuery2(value){
        this.searchQuery2 = value;
      },
      searchQuery1: function (search_query) {
        this.params.search_query_1 = search_query;
      },
      searchQuery2: function (search_query) {
        this.params.search_query_2 = search_query;
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

      search(){
        this.params.page = 1;
        this.fetch();
      },
      
      // search
      searchData: _.debounce(
        function () {
          this.isSearch = true;
          this.params.page = 1;
          this.fetch();
        },
        500),
      searchColumnData(key, title, filterType, filterKey) {
        // check filter type
        this.checkSearchFilterType(filterType);

        // clean 2nd search query
        this.params.search_query_2 = '';
        
        // determine if there is filterkey for search
        let searchKey = '';
        if(filterKey){
          searchKey = filterKey;
        }else{
          searchKey = key;
        }

        // doing search to database
        if (this.params.search_column !== searchKey) {
          this.params.search_column = searchKey;
          this.searchColumn = title;
          if(this.params.search_query_1 !== ''){
            this.params.page = 1;
          }
        }

        this.modalTutup();
      },
      searchParams(){
        let a = _.findIndex(this.columnData, {'filter': true,'disable': false });
        this.checkSearchFilterType(this.columnData[a].filterType);
        this.searchColumn = this.columnData[a].title;
      },
      searchOperatorData(op){
        this.params.search_operator = op.key;
        this.searchOperator = op.title;
        this.params.search_query_2 = '';

        if(this.params.search_query_1 !== ''){
          this.params.page = 1;
        }

        this.modalTutup();
      },
      emptySearch(){
        this.searchQuery1 = '';
        this.params.search_operator = 'like';
        this.params.search_query_1 = '';
        this.params.search_query_2 = '';
        this.fetch(); 
      },
      checkSearchFilterType(filterType){
        this.params.search_operator = this.operator[0].key;
        this.searchOperator = this.operator[0].title;
        this.searchColumnType = filterType;
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
      groupRow(column, index) {
        if (this.group.key != column.groupKey) {
          this.group.show = true;
          this.group.key = column.groupKey;
          this.group.noKey = column.groupNoKey;
          this.group.title = column.title;
          this.columnData[index].hide = true;
          this.sort(column.key);
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
        this.modalTutup();
      },

      // pagination
      entriPage(value) {
        if (this.params.per_page != value) {
          this.params.per_page = value;
          this.params.page = 1;
          this.fetch();
          this.modalTutup();
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
          window.scrollTo(0, 0);
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
          window.scrollTo(0, 0);
        }
      },

      // excel data
      field_excel() {
        var vm = this;
        vm.excel.fields = {};
        vm.columnData.forEach(function (column) {
          if (!column.hide && !column.disable) {
            vm.excel.fields[column.title] = column.key;
          }
        });
        vm.excel.data = _.chain(vm.itemData.data).map(function (item) {
          var object = {};
          vm.columnData.forEach(function (key) {
            if (!key.hide && !key.disable) {
              if (key.groupKey) {
                const value = _.get(item, key.groupKey, '-');
                object[key.key] = value === '' ? '-' : value;
              } else {
                const value = _.get(item, key.key, '-');
                object[key.key] = value === '' ? '-' : value;
              }
            }
          })
          return object;
        }).value();
      },

      // modal
      modalExcelOpen() {
        this.modalShow = true;
        this.modalState = "normal1";
        this.excelLoadStat = '';
      },
      modalExcelOk() {
        this.isExcelAll = true;
        if(this.params.per_page != this.itemData.total){
          this.entriPage(this.itemData.total);
        }else{
          this.fetch();
        } 
      },
      modalMobileOptionOpen(state){
        this.modalShow = true;
        this.modalState = "normal2";
        this.modalMobileOptionState = state;
      },
      modalTutup() {
        this.modalShow = false;
      },
    },
    computed: {
      groupData(){
        return _.groupBy(this.itemData.data, item => {
          return _.get(item, this.group.key, this.group.noKey);
        });
      }
    }
  }
</script>