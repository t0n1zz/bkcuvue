<template><div>
<div class="panel panel-flat">
    <div class="panel-body">
        <div class="row">
            <div class="col-md-9 pb-10">
                <div class="input-group">
                    <div class="input-group-addon">
                        <i class="icon-search4 text-muted"></i>
                    </div>
                    <input type="text" class="form-control" placeholder="Masukkan pencarian" v-model="params.search_query_1" @keyup.enter="searchData()">
                </div>
        </div>
            <div class="col-md-3 pb-10">
                <div class="input-group">
                    <select class="bootstrap-select" v-model="params.search_column" data-width="100%">
                        <option v-for="column in thead" v-if="column.filterKey != null" :value="column.filterKey">Berdasarkan {{column.title}}</option>
                    </select>
                    <div class="input-group-btn" v-if="state === 'loading'">
                        <button type="button" class="btn btn-success btn-block" disabled ><i class="icon-spinner2 spinner"></i></button>
                    </div>
                    <div class="input-group-btn" v-else>
                        <button type="button" class="btn btn-success" @click="searchData()"> Cari</button>
                        <button type="button" class="btn btn-default btn-icon" @click="searchReset" :class="{'disabled' : !isSearch}"><i class="icon-x"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="btn-toolbar"  v-if="state === 'loading'">
                    <div class="btn-group pb-5" v-for="n in toolbarButton">
                        <button type="button" data-popup="tooltip" title="LOADING" class="btn btn-default btn-icon">
                            <i class="icon-spinner2 spinner"></i>
                        </button>
                    </div>
                </div>
                <div class="btn-toolbar" v-else>
                    <!-- row button -->
                    <div class="btn-group pb-5">
                        <button type="button" data-popup="tooltip" title="KOLOM" class="btn btn-default btn-icon dropdown-toggle" data-toggle="dropdown">
                            <i class="icon-table2"></i> &nbsp;<span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu dropdown-content">
                            <li class="dropdown-header">Kolom yang ditampilkan</li>
                            <li class="divider"></li>
                            <li ><a @click.prevent="showAllColumn">Semua Kolom</a></li>
                            <slot name="button-kolom"></slot>
                            <li class="divider"></li>
                            <li v-for="(item,index) in thead" :class="{'active' : !item.hide}"><a @click.prevent="hideColumn(index)">{{item.title}}</a></li>
                        </ul>
                    </div>
                    <div class="btn-group pb-5">
                        <button type="button" data-popup="tooltip" title="ENTRI" class="btn btn-default btn-icon dropdown-toggle" data-toggle="dropdown">
                            <i class="icon-menu7"></i>&nbsp; {{params.per_page}} &nbsp;<span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li class="dropdown-header">Entri yang ditampilkan</li>
                            <li class="divider"></li>
                            <li :class="{'active' : params.per_page === 10}"><a @click.prevent="entriPage(10)">10 Entri</a></li>
                            <li :class="{'active' : params.per_page === 25}"><a @click.prevent="entriPage(25)">25 Entri</a></li>
                            <li :class="{'active' : params.per_page === 50}"><a @click.prevent="entriPage(50)">50 Entri</a></li>
                            <li class="divider" v-if="model.total > 50"></li>
                            <li v-if="model.total > 50"><a @click.prevent="modalEntriOpen">Semua Entri</a></li>
                            <slot name="button-entri"></slot>
                        </ul>
                    </div>
                    <div class="btn-group pb-5">
                        <button type="button" data-popup="tooltip" title="KELOMPOK" class="btn btn-default btn-icon dropdown-toggle" data-toggle="dropdown">
                            <i class="icon-grid6"></i>&nbsp; {{group.title}} &nbsp;<span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li class="dropdown-header">Kelompokkan berdasarkan</li>
                            <li class="divider"></li>
                            <li><a @click.prevent="unGroupRow">Tidak dikelompokkan</a></li>
                            <li class="divider"></li>
                            <li v-for="(column,index) in thead" v-if="column.groupKey != null" :class="{'active' : column.groupKey === group.key}"><a @click.prevent="groupRow(column.groupKey,column.key,column.title,index)">{{column.title}}</a></li>
                        </ul>
                    </div>
                    <div class="btn-group pb-5">
                        <button type="button" data-popup="tooltip" title="DOWNLOAD EXCEL" class="btn btn-default btn-icon dropdown-toggle" data-toggle="dropdown">
                            <i class="icon-file-excel"></i>&nbsp;<span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li class="dropdown-header">Download data ke excel</li>
                            <li class="divider"></li>
                            <li>
                                <json-excel
                                    :data   = "excel.data"
                                    :fieldsx = "excel.fields"
                                    :meta   = "excel.meta"
                                    name    = "fileExcel.xls"
                                >Data di tabel</json-excel>      
                            </li>
                            <li><a @click.prevent="modalMenuOpen">Semua Data</a></li>
                        </ul>
                    </div>
                    <!-- slot button -->
                    <slot name="button"></slot>
                </div>
            </div>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table table-hover table-striped">
            <thead class="bg-primary">
                <tr class="text-nowrap">
                    <th v-for="item in thead" v-if="!item.hide">
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
            <tbody v-if="state === 'loading'">
                <tr>
                    <td :colspan="thead.length">
                        <div class="progress">
                            <div class="progress-bar progress-bar-info progress-bar-striped active" style="width: 100%">
                                <span class="sr-only">100% Complete</span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody v-for="(items,index) in group.data" v-else>
                <tr class="active border-double" v-if="group.show">
                  <td :colspan="thead.length">
                    <b>{{index}}</b>
                  </td>
                </tr>
                <slot v-for="item in items" :item="item"></slot>
            </tbody>  
        </table>
    </div>
    <div class="panel-footer has-visible-elements">
        <div class="heading-elements visible-elements" v-if="state === 'loading'">
            <span class="heading-text text-semibold">Menampilkan <i class="icon-spinner2 spinner"></i> - <i class="icon-spinner2 spinner"></i> entri dari {{model.total}} entri</span>
            <ul class="pagination pagination-flat pagination-xs pull-right">
                <li class="disabled"><a><i class="icon-arrow-left12"></i></a></li>
                <li class="active"><a><i class="icon-spinner2 spinner"></i></a></li>
                <li class="disabled"><a><i class="icon-arrow-right13"></i></a></li>
            </ul>
        </div>
        <div class="heading-elements visible-elements" v-else>
            <span class="heading-text text-semibold">Menampilkan {{model.from}} - {{model.to}} entri dari {{model.total}} entri</span>
            <ul class="pagination pagination-flat pagination-xs pull-right">
                <li :class="{'disabled' : !model.prev_page_url}"><a @click.prevent="prev"><i class="icon-arrow-left12"></i></a></li>
                <li v-for="n in pages" :class="{'active' : params.page == n}"><a @click.prevent="goToPage(n)">{{n}}</a></li>
                <li :class="{'disabled' : !model.next_page_url}" ><a @click.prevent="next"><i class="icon-arrow-right13"></i></a></li>
            </ul>
        </div>
    </div>
</div>

<!-- modal -->
<!-- download excel -->
<app-modal  :show="modal.show" :state="modal.state" :size="modal.size" :color="modal.color" @close="modalMenuClose">
    <div slot="modal-confirm" class="text-center">
        <span class="text-warning"><i class="icon-exclamation" style="font-size: 5em"></i></span>
        <h2>{{modal.miniTitle}}</h2>
        <div class="well well-sm">{{modal.miniContent}}</div>
        <br/>
        <ul class="list-inline">
            <li><button type="button" class="btn btn-link legitRipple" @click="modalMenuClose">Batal</button></li>
            <li v-if="modal.name === 'entri'"><button type="button" class="btn btn-warning" @click="modalConfirmOkEntri()" ><i class="icon-checkmark5"></i> {{modal.miniButton}}</button></li>
            <li v-else><button type="button" class="btn btn-warning" @click="modalConfirmOk()" ><i class="icon-checkmark5"></i> {{modal.miniButton}}</button></li>
        </ul>
    </div>
    <div slot="modal-result" class="text-center">
        <span class="text-primary" v-if="modal.miniType === 'success'"><i class="icon-checkmark-circle2" style="font-size: 5em"></i></span>
        <span class="text-danger" v-else><i class="icon-close2" style="font-size: 5em"></i></span>
        <h2>{{modal.miniTitle}}</h2>
        <ul class="list-inline" v-if="modal.miniType === 'error'">
            <li ><button type="button" class="btn btn-default" @click="modalMenuClose">Tutup</button></li>
        </ul>
        <ul class="list-inline" v-else>
            <li><button type="button" class="btn btn-link legitRipple" @click="modalMenuClose">Batal</button></li>
            <li><json-excel
                :data    = "excel.data"
                :fieldsx = "excel.fields"
                :meta    = "excel.meta"
                name     = "fileExcel.xls"
                class    ="btn btn-default"
                ><i class="icon-download10"></i> Download Excel</json-excel></li>
        </ul>
    </div>
</app-modal>

<!-- modal entri -->

</div></template>
<script>
    import Vue from 'vue';
    import axios from 'axios';
    import _ from 'lodash';
    import JsonExcel from 'vue-json-excel';
    import appModal from '../components/modal'
    import {bus} from '../app';

    export default {
        props: ['source', 'thead','toolbarButton'],
        components:{
            appModal,
            JsonExcel
        },
        data() {
            return {
                model: {
                    data: []
                },
                excel: {
                    fields: {},
                    data : [],
                    meta: [
                        [{
                            "key": "charset",
                            "value": "utf-8"
                        }]
                    ]
                },
                params: {
                    column: 'id',
                    direction: 'desc',
                    per_page: 10,
                    page: 1,
                    search_column: 'nama',
                    search_operator : 'like',
                    search_query_1: '',
                    search_query_2: ''
                },
                modal: {
                    name:'',
                    show: false,
                    size:'',
                    color:'',
                    data: '',
                    state:'confirm',
                    miniTitle:'',
                    miniContent:'',
                    miniButton:'',
                    miniType:''
                },
                group: {
                    show: false,
                    key: '',
                    title: '',
                    data: []
                },
                state: '',
                isSearch: false,
                isExcelAll: false,
                pages: []
            }
        },
        beforeMount() {
            this.fetchData();
        },
        mounted() {
            $('.bootstrap-select').selectpicker();  
        },
        created(){
            bus.$on('fetchData',() =>{
                this.fetchData();
            });
        },
        methods: {
            modalMenuOpen(){
                this.modal.show= true;
                this.modal.name='excel';
                this.modal.state = 'confirm';
                this.modal.miniTitle = "Yakin akan mendownload semua data ke excel?"
                this.modal.miniContent = "Download akan lebih lama tergantung dari jumlah data"
                this.modal.miniButton = "Ya, Download semua"
            },
            modalEntriOpen(){
                this.modal.show= true;
                this.modal.name='entri';
                this.modal.state = 'confirm';
                this.modal.miniTitle = "Yakin akan menampilkan semua entri?"
                this.modal.miniContent = "Menampilkan terlalu banyak entri dapat mengurangi performa pengoperasian aplikasi ini"
                this.modal.miniButton = "Ya, Tampilkan semua"
            },
            modalConfirmOk(){
                this.isExcelAll = true;
                this.modal.show= true;
                this.modal.miniType = "success"
                this.modal.miniTitle = "Silahkan tekan tombol download"
                this.entriPage(this.model.total);
            },
            modalConfirmOkEntri(){
                this.modal.show= false;
                this.entriPage(this.model.total);
            },
            modalMenuClose(){
                this.modal.show = false;
                this.modal.state = 'confirm';
            },
            calculatePagination(){
                var i = 0;
                var startPage = 0;
                var endPage = 0;
                var diffPage = 0;

                startPage = this.params.page < 3 ? 1 : this.params.page - 1;
                endPage = 4 + startPage;
                endPage = this.model.last_page < endPage ? this.model.last_page : endPage;
                diffPage = startPage - endPage + 4;
                startPage -= startPage - diffPage > 0 ? diffPage : 0;
                this.pages.length = 0;
                
                for(i = startPage; i<=endPage; i++){
                    this.pages.push(i);
                }
            },
            field_excel(vm){
                vm.excel.fields = {};
                vm.thead.forEach(function(column){
                    if(!column.hide){
                        vm.excel.fields[column.title] = column.type;
                    }
                });
                vm.excel.data = _.chain(vm.model.data).map(function(item){
                    var object = {};
                    vm.thead.forEach(function(key){
                        if(!key.hide){
                            if(key.groupKey){
                                object[key.title] = _.get(item, key.groupKey);
                            }else{
                                object[key.title] = _.get(item, key.key);
                            }   
                        }
                    })
                    return object;
                }).value();
            },
            hideColumn(index){
                if(this.thead[index].hide === false)
                    this.thead[index].hide = true;
                else
                    this.thead[index].hide = false;
                this.field_excel(this);
            },
            showAllColumn(index){
                for (var t in this.thead){
                    if(t != index)
                       this.thead[t].hide = false;
                }
                this.field_excel(this);
            },
            groupRow(groupKey,sortKey,title,index){
                if(this.group.key != groupKey){
                    this.group.show = true;
                    this.group.key = groupKey;
                    this.group.title = title;
                    this.thead[index].hide = true;
                    this.sort(sortKey);
                }
                this.showAllColumn(index);
            },
            unGroupRow(){
                if(this.group.show){
                    this.group.show = false;
                    this.group.key = '';
                    this.group.title = '';
                }
                this.showAllColumn();
            },
            next() {
                if(this.model.next_page_url) {
                    this.params.page++;
                    this.fetchData();
                }     
            },
            prev() {
                if(this.model.prev_page_url) {
                    this.params.page--;
                    this.fetchData();
                }
            },
            goToPage(value){
                if(this.params.page != value){
                    this.params.page = value;
                    this.fetchData();
                }
            },
            sort(column) {
                if(column === this.params.column) {
                    if(this.params.direction === 'desc') {
                        this.params.direction = 'asc';
                    } else {
                        this.params.direction = 'desc';
                    }
                } else {
                    this.params.column = column;
                    this.params.direction = 'asc';
                }
                this.params.page = 1;
                this.fetchData();
            },
            entriPage(value){
                if(this.params.per_page != value){
                    this.params.per_page = value;
                    this.params.page = 1;
                    this.fetchData();
                }
            },
            searchData(){
                this.isSearch = true;
                this.params.page = 1;
                this.fetchData();
            },
            searchReset(){
                this.params.search_query_1 = '';
                this.params.search_query_2 = '';
                this.params.page = 1;
                this.isSearch = false;
                this.fetchData();
            },
            refreshData(){
                this.params.page = 1;
                this.params.per_page = 10;
                this.params.search_query_1 = '';
                this.params.search_column = 'nama';
                this.isReset = false;
                this.fetchData();
            },
            fetchData() {
                var vm = this;
                
                if(vm.isExcelAll){
                    vm.modal.state = 'loading';
                }else{
                    vm.state = 'loading';
                }
                axios.get(this.buildURL())
                    .then(function(response) {
                        Vue.set(vm.$data, 'model', response.data.model);
                        if(!vm.isExcelAll){
                            vm.group.data = _.groupBy(vm.model.data,vm.group.key);
                            vm.calculatePagination();
                        }else{
                            vm.modal.state = 'result';
                            vm.isExcelAll = false;
                            vm.params.per_page = 10;
                        }
                        vm.field_excel(vm);
                        vm.state = '';
                    })
                    .catch(function(error) {
                        vm.state = '';
                        vm.modal.state = 'result';
                        if(vm.modal.show){
                            vm.modal.miniType = 'error';
                        }
                    })    
            },
            buildURL() {
                var p = this.params;
                return `${this.source}?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`;
            }
        }
    }
</script>
