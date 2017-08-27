<template><div>
<div class="panel panel-flat">
    <div class="panel-body">
        <div class="input-group content-group">
            <div class="has-feedback has-feedback-left">
                <input type="text" class="form-control" placeholder="Masukkan pencarian" style="width:70%;" v-model="params.search_query_1" @keyup.enter="fetchData">
                <div class="form-control-feedback">
                    <i class="icon-search4 text-muted text-size-base"></i>
                </div>
                <select class="form-control" v-model="params.search_column" style="width:30%;">
                    <option v-for="filter in filters" :value="filter.key">Berdasarkan {{filter.title}}</option>
                </select>
            </div>
            <div class="input-group-btn">
                <button type="submit" class="btn btn-primary" @click="fetchData">Cari</button>
            </div>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table">
            <thead class="bg-primary">
                <tr>
                    <th v-for="item in thead">
                        <div @click="sort(item.key)" v-if="item.sort">
                            <span>{{item.title}}</span>
                            <span v-if="params.column === item.key">
                                <span v-if="params.direction === 'asc'">&#x25B2;</span>
                                <span v-else>&#x25BC;</span>
                            </span>
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
            <span class="heading-text">
                <ul class="list-inline">
                    <li>
                        <select v-model="params.per_page" class="form-control" @change="fetchData">
                            <option value="10" selected>Tampilkan 10</option>
                            <option value="25">Tampilkan 25</option>
                            <option value="50">Tampilkan 50</option>
                        </select>
                    </li>
                    <li>Menampilkan {{model.from}} - {{model.to}} entri dari {{model.total}} entri</li>
                </ul>
            </span>
            <ul class="pager pull-right" style="padding-top: 8px;">
                <li><a @click="prev"><i class="icon-arrow-left13"></i></a></li>
                <li><a @click="next"><i class="icon-arrow-right14"></i></a></li>
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
                }
            }
        },
        beforeMount() {
            this.fetchData()
        },
        methods: {
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
            fetchData() {
                var vm = this
                axios.get(this.buildURL())
                    .then(function(response) {
                        Vue.set(vm.$data, 'model', response.data.model)

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
