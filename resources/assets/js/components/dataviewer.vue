<template><div>
<div class="panel panel-flat">
    <div class="panel-body">
        <div class="row">
            <div class="col-md-9 pb-10">
                <div class="input-group">
                    <div class="input-group-addon">
                        <i class="icon-search4 text-muted"></i>
                    </div>
                    <input type="text" class="form-control" placeholder="Masukkan pencarian" v-model="params.search_query_1" @keyup.enter="resetPage">
                </div>
            </div>
            <div class="col-md-3 pb-10">
                <div class="input-group">
                    <select class="bootstrap-select" v-model="params.search_column" data-width="100%">
                        <option v-for="filter in filters" :value="filter.key">Berdasarkan {{filter.title}}</option>
                    </select>
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-primary" @click="resetPage"> Cari</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2">
                <select v-model="params.per_page" class="bootstrap-select" data-style="bg-info" data-width="100%" @change="resetPage">
                    <option value="10" selected>Tampilkan 10 entri</option>
                    <option value="25">Tampilkan 25 entri</option>
                    <option value="50">Tampilkan 50 entri</option>
                </select>
            </div>
            <div class="col-md-1">
                <button type="button" class="btn btn-info btn-block" @click="refreshData" :class="{'disabled' : !isReset}"><i class="icon-sync"></i></button>
            </div>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table table-hover">
            <thead class="bg-primary">
                <tr class="text-nowrap">
                    <th v-for="item in thead">
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
            <tbody>
                <slot v-for="item in model.data" :item="item"></slot>
            </tbody>
        </table>
    </div>
    <div class="panel-footer has-visible-elements">
        <div class="heading-elements visible-elements">
            <span class="heading-text text-semibold">Menampilkan {{model.from}} - {{model.to}} entri dari {{model.total}} entri</span>
            <ul class="pagination pagination-flat pagination-xs pull-right">
                <li :class="{'disabled' : !model.prev_page_url}"><a @click.prevent="prev"><i class="icon-arrow-left12"></i></a></li>
                <li v-for="n in pages" :class="{'active' : params.page == n}"><a @click.prevent="goToPage(n)">{{n}}</a></li>
                <li :class="{'disabled' : !model.next_page_url}" ><a @click.prevent="next"><i class="icon-arrow-right13"></i></a></li>
            </ul>
        </div>
    </div>
</div>
</div></template>
<script>
    import Vue from 'vue'
    import axios from 'axios'

    export default {
        props: ['source', 'thead', 'filters', 'create', 'title'],
        data() {
            return {
                model: {
                    data: []
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
                isReset: false,
                startPage: 0,
                endPage: 0,
                diffPage: 0,
                pages: [],
                i: 0
            }
        },
        beforeMount() {
            this.fetchData()
        },
        mounted() {
            $('.bootstrap-select').selectpicker();
        },
        methods: {
            calculatePagination(){
                this.startPage = this.params.page < 3 ? 1 : this.params.page - 1
                this.endPage = 4 + this.startPage
                this.endPage = this.model.last_page < this.endPage ? this.model.last_page : this.endPage
                this.diffPage = this.startPage - this.endPage + 4
                this.startPage -= this.startPage - this.diffPage > 0 ? this.diffPage : 0;
                this.pages.length = 0
                for(this.i = this.startPage; this.i<=this.endPage; this.i++){
                    this.pages.push(this.i)
                }
            },
            next() {
                if(this.model.next_page_url) {
                    this.params.page++
                    this.fetchData()
                }     
            },
            prev() {
                if(this.model.prev_page_url) {
                    this.params.page--
                    this.fetchData()
                }
            },
            goToPage(value){
                if(this.params.page != value){
                    this.params.page = value
                    this.fetchData()
                }
            },
            sort(column) {
                if(column === this.params.column) {
                    if(this.params.direction === 'desc') {
                        this.params.direction = 'asc'
                    } else {
                        this.params.direction = 'desc'
                    }
                } else {
                    this.params.column = column
                    this.params.direction = 'asc'
                }

                this.fetchData()
            },
            resetPage(){
                this.params.page = 1
                this.isReset = true
                this.fetchData()
            },
            refreshData(){
                this.params.page = 1
                this.params.per_page = 10
                this.params.search_query_1 = ''
                this.params.search_column = 'nama'
                this.isReset = false
                this.fetchData()
            },
            fetchData() {
                var vm = this
                axios.get(this.buildURL())
                    .then(function(response) {
                        Vue.set(vm.$data, 'model', response.data.model)
                        vm.calculatePagination()
                    })
                    .catch(function(error) {
                        console.log(error)
                    })    
            },
            buildURL() {
                var p = this.params
                return `${this.source}?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`
            }
        }
    }
</script>
