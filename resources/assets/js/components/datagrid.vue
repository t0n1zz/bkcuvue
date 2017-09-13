<template><div>
<div class="panel panel-flat">
    <div class="panel-body">
        <div class="row">
            <div class="col-md-8">
                <div class="input-group">
                    <div class="input-group-addon">
                        <i class="icon-search4 text-muted"></i>
                    </div>
                    <input type="text" class="form-control" placeholder="Masukkan pencarian" v-model="params.search_query_1" @keyup.enter="fetchData">
                </div>
            </div>
            <div class="col-md-4">
                <div class="input-group">
                    <select class="bootstrap-select" v-model="params.search_column">
                        <option v-for="filter in filters" :value="filter.key">Berdasarkan {{filter.title}}</option>
                    </select>
                    <div class="input-group-btn">
                        <button type="submit" class="btn btn-default" @click="fetchData">Cari</button>
                    </div>
                </div>
            </div>
        </div>   
    </div>
</div>
<slot></slot>

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
        mounted() {
            $('.bootstrap-select').selectpicker();
        },
        computed: {
            groupData(){
                return _.chunk(this.model.data, 3)
            }
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
