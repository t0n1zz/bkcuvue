<template>
  <div>

    <!-- pencarian -->
    <div class="card d-print-none">
      <div class="card-header header-elements-inline bg-white">
        <h5 class="card-title">Pencarian data {{ title }}</h5>
        <div class="header-elements">
          <div class="list-icons">
            <!-- <a class="list-icons-item" data-action="collapse"></a> -->
          </div>
        </div>
      </div>

      <div class="nav-tabs-responsive bg-light border-top" v-if="!isDasar">
        <ul class="nav nav-tabs nav-tabs-bottom flex-nowrap mb-0">
          <li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'dasar'}" @click.prevent="changeTab('dasar')"><i class="icon-search4 mr-2"></i>
              Pencarian Dasar</a></li>
          <li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'lanjutan'}" @click.prevent="changeTab('lanjutan')"><i class="icon-folder-search mr-2"></i>
              Pencarian Lanjutan</a></li>
        </ul>
      </div>

      <!-- dasar -->
      <transition enter-active-class="animated fadeIn" mode="out-in">
        <div v-show="tabName == 'dasar'">
          <div class="card-body">

            <!-- search row -->
            <div class="row">
              <div class="col-md-12" v-for="(f, i, index) in filterCandidates">
                <div class="row">

                  <div class="col-md-3 pb-2">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <span class="input-group-text">Kolom</span>
                      </span>
                      <select class="form-control" @input="selectColumn(f, i, $event)" :disabled="itemDataStat !== 'success'">
                        <option disabled value="">Silahkan masukkan kolom pencarian</option>
                        <option v-for="x in columnData" :value="JSON.stringify(x)" :selected="f.column && x.name === f.column.name"
                          v-if="x.filter && !x.disable">
                          {{x.title}}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="col-md-3 pb-2" v-if="f.column" v-show="false">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <span class="input-group-text">Operator</span>
                      </span>
                      <select class="form-control" @input="selectOperator(f, i, $event)" :disabled="itemDataStat !== 'success'">
                        <option v-for="y in fetchOperators(f)" :value="JSON.stringify(y)" :selected="f.operator && y.name === f.operator.name">
                          {{y.title}}
                        </option>
                      </select>
                    </div>
                  </div>

                  <template v-if="f.column && f.operator">
                    <div class="col-md-9 pb-2" v-if="f.operator.component === 'single'">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <span class="input-group-text">Kata Kunci</span>
                        </span>
                        <input type="text" class="form-control" v-model="f.query_1" placeholder="Masukkan kata kunci pencarian" :disabled="itemDataStat !== 'success'">
                      </div>
                    </div>
                    <template v-if="f.operator.component === 'double'">
                      <div class="col-md-5 pb-2">
                        <div class="input-group">
                          <span class="input-group-prepend">
                            <span class="input-group-text">Kata Kunci</span>
                          </span>
                          <input type="text" class="form-control" v-model="f.query_1" placeholder="Masukkan kata kunci pencarian 1" :disabled="itemDataStat !== 'success'">
                        </div>
                      </div>
                      <div class="col-md-4 pb-2">
                        <div class="input-group">
                          <span class="input-group-prepend">
                            <span class="input-group-text">Kata Kunci</span>
                          </span>
                          <input type="text" class="form-control" v-model="f.query_2" placeholder="Masukkan kata kunci pencarian 2" :disabled="itemDataStat !== 'success'">
                        </div>
                      </div>
                    </template>
                    <template v-if="f.operator.component === 'datetime_1'">
                      <div class="col-md-5 pb-2">
                        <div class="input-group">
                          <span class="input-group-prepend">
                            <span class="input-group-text">Kata Kunci</span>
                          </span>
                          <input type="text" class="form-control" v-model="f.query_1" placeholder="Masukkan kata kunci pencarian" :disabled="itemDataStat !== 'success'">
                        </div>
                      </div>
                      <div class="col-md-4 pb-2">
                        <div class="input-group">
                          <span class="input-group-prepend">
                            <span class="input-group-text">Waktu</span>
                          </span>
                          <select class="form-control" v-model="f.query_2" :disabled="itemDataStat !== 'success'">
                            <option value="hours">jam</option>
                            <option value="days">hari</option>
                            <option value="months">bulan</option>
                            <option value="years">tahun</option>
                          </select>
                        </div>
                      </div>
                    </template>
                    <template v-if="f.operator.component === 'datetime_2'">
                      <div class="col-md-9 pb-2">
                        <div class="input-group">
                          <span class="input-group-prepend">
                            <span class="input-group-text">Waktu</span>
                          </span>
                          <select class="form-control" v-model="f.query_1" :disabled="itemDataStat !== 'success'">
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

                </div>
              </div>
            </div>

            <!-- divider -->
            <div class="row"><div class="col-sm-12"><hr class="mt-2"></div></div>

            <!-- button row -->
            <div class="row justify-content-between">
              <!-- filter -->
              <div class="col-md-5 col-lg-4 pb-2">
                <div class="row">
                  <div class="col-md-6 pb-2">
                    <button class="btn btn-primary btn-block" @click="applyFilter" :disabled="filterCandidates[0].query_1 == null || filterCandidates[0].query_1 == '' || itemDataStat !== 'success'"><i class="icon-search4"></i> Cari</button>
                  </div>
                  <div class="col-md-6 pb-2" v-if="appliedFilters.length > 0">
                    <button class="btn btn-warning btn-block"  @click="resetFilter" :disabled="itemDataStat !== 'success'"><i class="icon-reset"></i> Reset pencarian</button>
                  </div>
                </div>
              </div>

              <!-- entri & order -->
              <div class="col-md-7 col-lg-4 text-right">
                <div class="row">

                  <!-- entri -->
                  <div class="col-md-4 pb-2">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <span class="input-group-text">Entri</span>
                      </span>
                      <select class="form-control"  v-model="query.limit" @change="updateLimit" :disabled="itemDataStat !== 'success'">
                        <option>10</option>
                        <option>15</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                      </select>
                    </div> 
                  </div>

                  <!-- order -->
                  <div class="col-md-6 pb-2">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <span class="input-group-text">Urutkan</span>
                      </span>
                      <select class="form-control" @input="updateOrderColumn" :disabled="itemDataStat !== 'success'">
                        <option v-for="column in columnData" :value="column.name" :selected="column && column.name == query.order_column"
                          v-if="column.sort && !column.disable">
                          {{column.title}}
                        </option>
                      </select>
                    </div>  
                  </div>

                  <!-- order direction -->
                  <div class="col-md-2">
                    <button class="btn bg-orange-300 btn-block" @click="updateOrderDirection" :disabled="itemDataStat !== 'success'">
                      <i class="icon-arrow-up7" v-if="query.order_direction === 'asc'"></i>
                      <i class="icon-arrow-down7" v-else></i>
                    </button>
                  </div>

                </div>
              </div>


            </div>

          </div>
        </div>
      </transition>  
      
      <!-- lanjutan -->
      <transition enter-active-class="animated fadeIn" mode="out-in">
        <div v-show="tabName == 'lanjutan'" v-if="!isDasar">
          <div class="card-body">

            <!-- search row -->
            <div class="row">
              <div class="col-md-12" v-for="(f, i, index) in filterCandidates">
                <div class="row">
                  <div class="col-md-4 pb-2">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <span class="input-group-text">Kolom</span>
                      </span>
                      <select class="form-control" @input="selectColumn(f, i, $event)" :disabled="itemDataStat !== 'success'">
                        <option disabled value="">Silahkan masukkan kolom pencarian</option>
                        <option v-for="x in columnData" :value="JSON.stringify(x)" :selected="f.column && x.name === f.column.name"
                          v-if="x.filter && !x.disable">
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
                      <select class="form-control" @input="selectOperator(f, i, $event)" :disabled="itemDataStat !== 'success'">
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
                          <span class="input-group-text">Kata Kunci</span>
                        </span>
                        <input type="text" class="form-control" v-model="f.query_1" placeholder="Masukkan kata kunci pencarian" :disabled="itemDataStat !== 'success'">
                      </div>
                    </div>
                    <template v-if="f.operator.component === 'double'">
                      <div class="col-md-2 pb-2">
                        <div class="input-group">
                          <span class="input-group-prepend">
                            <span class="input-group-text">Kata Kunci</span>
                          </span>
                          <input type="text" class="form-control" v-model="f.query_1" placeholder="Masukkan kata kunci pencarian 1" :disabled="itemDataStat !== 'success'">
                        </div>
                      </div>
                      <div class="col-md-2 pb-2">
                        <div class="input-group">
                          <span class="input-group-prepend">
                            <span class="input-group-text">Kata Kunci</span>
                          </span>
                          <input type="text" class="form-control" v-model="f.query_2" placeholder="Masukkan kata kunci pencarian 2" :disabled="itemDataStat !== 'success'">
                        </div>
                      </div>
                    </template>
                    <template v-if="f.operator.component === 'datetime_1'">
                      <div class="col-md-2 pb-2">
                        <div class="input-group">
                          <span class="input-group-prepend">
                            <span class="input-group-text">Kata Kunci</span>
                          </span>
                          <input type="text" class="form-control" v-model="f.query_1" placeholder="Masukkan kata kunci pencarian" :disabled="itemDataStat !== 'success'">
                        </div>
                      </div>
                      <div class="col-md-2 pb-2">
                        <div class="input-group">
                          <span class="input-group-prepend">
                            <span class="input-group-text">Waktu</span>
                          </span>
                          <select class="form-control" v-model="f.query_2" :disabled="itemDataStat !== 'success'">
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
                            <span class="input-group-text">Waktu</span>
                          </span>
                          <select class="form-control" v-model="f.query_1" :disabled="itemDataStat !== 'success'">
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
                    <button class="btn bg-slate-300 btn-block" @click="removeFilter(f,i)" :disabled="itemDataStat !== 'success' || filterCandidates.length == 1"><i class="icon-cross3"></i></button>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <button class="btn btn-light btn-block" @click="addFilter" :disabled="itemDataStat !== 'success'"><i class="icon-arrow-down5"></i> Tambah Parameter Pencarian <i class="icon-arrow-down5"></i> </button>
              </div>
            </div>

            <!-- divider -->
            <div class="row"><div class="col-sm-12"><hr class="mt-2"></div></div>

            <!-- button row -->
            <div class="row justify-content-between">
              <!-- filter -->
              <div class="col-md-5 col-lg-4 pb-2">
                <div class="row">
                  <div class="col-md-6 pb-2">
                    <button class="btn btn-primary btn-block" @click="applyFilter" :disabled="filterCandidates[0].query_1 == null || filterCandidates[0].query_1 == '' || itemDataStat !== 'success'"><i class="icon-search4"></i> Cari</button>
                  </div>
                  <div class="col-md-6 pb-2" v-if="appliedFilters.length > 0">
                    <button class="btn btn-warning btn-block"  @click="resetFilter" :disabled="itemDataStat !== 'success'"><i class="icon-reset"></i> Reset pencarian</button>
                  </div>
                </div>
              </div>

              <!-- entri & order -->
              <div class="col-md-6 col-lg-4 text-right">
                <div class="row">

                  <!-- entri -->
                  <div class="col-md-4 pb-2">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <span class="input-group-text">Entri</span>
                      </span>
                      <select class="form-control"  v-model="query.limit" @change="updateLimit" :disabled="itemDataStat !== 'success'">
                        <option>10</option>
                        <option>15</option>
                        <option>25</option>
                        <option>50</option>
                      </select>
                    </div> 
                  </div>

                  <!-- order -->
                  <div class="col-md-6 pb-2">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <span class="input-group-text">Urutkan</span>
                      </span>
                      <select class="form-control" @input="updateOrderColumn" :disabled="itemDataStat !== 'success'">
                        <option v-for="column in columnData" :value="column.name" :selected="column && column.name == query.order_column"
                          v-if="column.sort && !column.disable">
                          {{column.title}}
                        </option>
                      </select>
                    </div>  
                  </div>

                  <!-- order direction -->
                  <div class="col-md-2">
                    <button class="btn bg-orange-300 btn-block" @click="updateOrderDirection" :disabled="itemDataStat !== 'success'">
                      <i class="icon-arrow-up7" v-if="query.order_direction === 'asc'"></i>
                      <i class="icon-arrow-down7" v-else></i>
                    </button>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </transition>

    </div>

    <div class="card" v-if="this.dataview == 'list' || this.dataview == undefined">
      <!-- button -->
      <div class="card-header d-print-none" v-if="!isNoButtonRow">
        <div class="row">
          <!-- slot button -->
          <!-- button desktop -->
          <div class="col-md-7 col-lg-9 pb-2 d-none d-sm-block">
            <slot name="button-desktop"></slot>
          </div>
          <!-- button mobile -->
          <div class="col-md-12 pb-2 d-block d-sm-none">
            <slot name="button-mobile"></slot>
          </div>

          <div class="col-md-5 col-lg-3 text-right d-none d-sm-block">
            <button type="button" class="btn bg-blue-300 btn-icon mb-1" :disabled="itemDataStat === 'loading'" @click.prevent="modalOptionOpen('column')" v-if="!isNoKolom">
              <i class="icon-table2"></i> Kolom
            </button>
            <button type="button" class="btn bg-green-300 btn-icon mb-1" :disabled="itemDataStat === 'loading'" @click.prevent="modalOptionOpen('excel')" v-if="!isNoExcel">
              <i class="icon-file-excel"></i> Excel
            </button>
            <button type="button" class="btn btn-light btn-icon mb-1" :disabled="itemDataStat === 'loading'" @click.prevent="fetch()">
              <i class="icon-sync"></i>
            </button>
          </div>

          <div class="col-md-12 d-block d-sm-none">
            <button type="button" class="btn bg-blue-300 btn-icon btn-block mb-1" :disabled="itemDataStat === 'loading'" @click.prevent="modalOptionOpen('column')" v-if="!isNoKolom">
              <i class="icon-table2"></i> Kolom
            </button>
            <button type="button" class="btn bg-green-300 btn-icon btn-block mb-1" :disabled="itemDataStat === 'loading'" @click.prevent="modalOptionOpen('excel')" v-if="!isNoExcel">
              <i class="icon-file-excel"></i> Excel
            </button>
            <button type="button" class="btn btn-light btn-icon btn-block mb-1" :disabled="itemDataStat === 'loading'" @click.prevent="fetch()">
              <i class="icon-sync"></i> Reload
            </button>
          </div>

        </div>     
      </div>

      <!-- listview -->
      <!-- table-->
      <div class="table-responsive table-scrollable" style="max-height: 33rem;" :class="tableClass">
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
                  <div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
                    <span class="sr-only">100% Complete</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>

          <!-- data body -->
          <tbody v-else-if="itemDataStat === 'success'">

            <tr v-if="itemData.data.length == 0">
              <td :colspan="columnData.length">
                Belum terdapat data...
              </td>
            </tr>

            <slot name="item-desktop" v-for="(item,index) in itemData.data" :item="item" :index="index" v-else></slot>
            
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

      <!-- pagination -->
      <!-- footer  -->
      <div class="card-footer bg-white d-print-none" >
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
            <div v-else>Menampilkan
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
            <div class="btn-group" v-else>
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
            <div class="btn-group" v-else>
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

          </div>
        </div>

      </div>
    </div>

    <!-- grid view -->
    <div v-if="this.dataview == 'grid'">
      <!-- button -->
      <div class="card card-body d-print-none" v-if="!isNoButtonRow">
        <div class="row">
          <!-- slot button -->
          <!-- button desktop -->
          <div class="col-md-8 col-lg-10 d-none d-sm-block">
            <slot name="button-desktop"></slot>
          </div>
          <!-- button mobile -->
          <div class="col-md-12 pb-2 d-block d-sm-none">
            <slot name="button-mobile"></slot>
          </div>

          <div class="col-md-4 col-lg-2 text-right d-none d-sm-block">
            <button type="button" class="btn bg-green-300 btn-icon" :disabled="itemDataStat === 'loading'" @click.prevent="modalOptionOpen('excel')" v-if="!isNoExcel">
              <i class="icon-file-excel"></i> Excel
            </button>
            <button type="button" class="btn btn-light btn-icon" :disabled="itemDataStat === 'loading'" @click.prevent="fetch()">
              <i class="icon-sync"></i>
            </button>
          </div>

          <div class="col-md-4 col-lg-2 d-block d-sm-none">
            <button type="button" class="btn bg-green-300 btn-icon btn-block mb-1" :disabled="itemDataStat === 'loading'" @click.prevent="modalOptionOpen('excel')">
              <i class="icon-file-excel"></i> Excel
            </button>
            <button type="button" class="btn btn-light btn-icon btn-block mb-1" :disabled="itemDataStat === 'loading'" @click.prevent="fetch()">
              <i class="icon-sync"></i> Reload
            </button>
          </div>

        </div>
        
      </div>

      <div v-if="itemDataStat === 'loading'" class="card card-body">
        <h4>Mohon tunggu...</h4>
        <div class="progress">
          <div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
            <span class="sr-only">100% Complete</span>
          </div>
        </div>
      </div>

      <div v-else-if="itemDataStat === 'success'">

        <div class="row">
          <slot name="item-mobile" v-for="(item,index) in itemData.data" :item="item" :index="index"></slot>
        </div>

        <div v-if="itemData.data.length == 0">
          <div class="card">
            <div class="card-body">
              <h3>Belum terdapat data...</h3>
            </div>
          </div>
        </div>

      </div>

      <div v-else-if="itemDataStat === 'fail'" class="card card-body">
        <h4>Oops.. Terjadi kesalahan, silahkan coba lagi.</h4>
      </div>
      
      <!-- pagination -->
      <div class="card card-body">
        <div class="row pre-scrollable">

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
              <div v-else>Menampilkan
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
            <div class="btn-group" v-else>
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
            <div class="btn-group" v-else>
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

          </div>

        </div>
      </div>

    </div>

    <!-- modal -->
    <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">

      <div slot="modal-body1">
        <!-- column -->
        <div v-if="modalOptionState === 'column'">

          <!-- title -->
          <h2 class="text-center">Kolom yang ditampilkan</h2>
          <hr/>

          <!-- semua button -->
          <button class="btn btn-light btn-block" @click.prevent="showAllColumn" >Semua kolom</button>
          <slot name="button-kolom"></slot>
          <hr/>

          <!-- column button -->
          <button class="btn btn-block" v-for="(column,index) in columnData" :class="{'btn-primary' : !column.hide}" v-if="column.hide != null && !column.disable" @click.prevent="hideColumn(index)" >{{column.title}}</button>
          <hr/>

          <!-- tutup button -->
          <button class="btn btn-light btn-block" @click.prevent="modalTutup"><i class="icon-cross"></i> Tutup</button>
        </div>

        <!-- excel -->
        <div v-else-if="modalOptionState === 'excel'">
          <h2 class="text-center">Excel</h2>
          <hr/>

          <!-- download table -->
          <button class="btn btn-light btn-block" @click.prevent="modalExcelOpen('excel')"><i class="icon-folder-download2"></i> Download data di tabel</button>

          <!-- download all   -->
          <button class="btn btn-light btn-block" @click.prevent="modalExcelOpen('excelAll')"><i class="icon-folder-download2"></i> Download semua data</button>
          <hr/>

          <!-- uploadexcel -->
          <button class="btn btn-light btn-block" v-for="(ex, index) in excelUploads" v-if="ex.enabled" @click.prevent="modalExcelUploadOpen(index)"><i class="icon-file-upload"></i> {{ ex.button }}</button>

          <hr v-if="excelUploads"/>

          <!-- tutup -->
          <button class="btn btn-light btn-block" @click.prevent="modalTutup"><i class="icon-cross"></i> Tutup</button>
        </div>
      </div>

      <!-- excel download all data -->
      <div slot="modal-body2" class="text-center">
        
        <!-- excel table -->
        <div v-if="state === 'excel'">

          <!-- icon -->
          <span class="text-primary">
            <i class="icon-checkmark-circle2" style="font-size: 5em"></i>
          </span>

          <!-- title -->
          <h2>Silahkan tekan tombol download</h2>
          
          <!-- tutup button -->
          <button type="button" class="btn btn-light" @click="modalTutup">
              <i class="icon-cross"></i> Tutup
          </button>  

          <!-- download button -->
          <json-excel 
            class="btn btn-light"
            :data="excel.data" 
            :exportFields="excel.fields" 
            :meta="excel.meta"
            :title="'Data ' + title" 
            :name="title + '.xls'"
            ><i class="icon-file-download"></i> Download data di tabel</json-excel> 
        </div>

        <div v-else-if="state === 'excelAll'">
          <!-- default -->
          <div v-if="excelAllDataStat === ''">

            <!-- icon -->
            <span class="text-warning">
              <i class="icon-exclamation" style="font-size: 5em"></i>
            </span>

            <!-- title -->
            <h2>Yakin akan mendownload semua data ke excel?</h2>
            
            <!-- subtitle -->
            <pre class="pre-scrollable text-center" id="stack">Lama download tergantung pada jumlah data yang ada.</pre>
            <br>

            <!-- batal button -->
            <button type="button" class="btn btn-light" @click="modalBatal('excel')">
                  <i class="icon-arrow-left13"></i> Batal</button>  

            <!-- download button -->
            <button type="button" class="btn btn-warning" @click="modalExcelOk">
                  <i class="icon-checkmark5"></i> Ya, download semua</button>
          </div>

          <!-- success -->
          <div v-else-if="excelAllDataStat === 'success'">

            <!-- icon -->
            <span class="text-primary">
              <i class="icon-checkmark-circle2" style="font-size: 5em"></i>
            </span>

            <!-- title -->
            <h2>Silahkan tekan tombol download</h2>
            
            <!-- tutup button -->
            <button type="button" class="btn btn-light" @click="modalTutup">
                <i class="icon-cross"></i> Tutup
            </button>  

            <!-- download button -->
            <json-excel 
              class="btn btn-light"
              :data="excelAll.data"
              :exportFields="excelAll.fields" 
              :meta="excelAll.meta" 
              :title="'Data ' + title" 
              :name="title + '.xls'"
              ><i class="icon-folder-download2"></i> Download Excel</json-excel>   
          </div>
        </div>

        <!-- upload excel -->
        <div v-else-if="state === 'upload'">

          <!-- title -->
          <h2>Silahkan pilih file excel yang ingin diupload kemudian tekan tombol upload</h2>

          <!-- info -->
          <div class="alert bg-info alert-styled-left mt-2 pt-1 pb-1" v-if="excelUploads[excelUploadIndex].info">
            <span class="mb-5 text-semibold"><u>Info:</u></span>
            <p v-html="excelUploads[excelUploadIndex].info"></p>
          </div>

          <!-- input -->
          <input type="file" class="form-control" @change="changeUpload($event.target.files)" ref="fileInput">

          <!-- format excel -->
          <p class="text-center mt-2">Silahkan menggunakan format ini untuk upload data: <a href="#" @click.prevent="downloadFormatExcel(excelUploadIndex)">format excel</a></p>

          <!-- batal button -->
          <button type="button" class="btn btn-light" @click="modalBatal('excel')">
              <i class="icon-arrow-left13"></i> Batal
          </button> 

          <!-- upload button -->
          <button type="button" class="btn btn-light" @click="uploadExcel(excelUploadIndex)">
              <i class="icon-upload"></i> Upload
          </button> 

        </div>

      </div>

    </app-modal>

  </div>
</template>
<script>
  import Vue from 'vue';
  import { toMulipartedForm } from '../helpers/form';
  import _ from 'lodash';
  import jsonExcel from 'vue-json-excel';
  import appModal from '../components/modal';
  import FileSaver from 'file-saver';

  export default {
    props: ['title', 'columnData', 'itemData', 'itemDataStat','isUploadExcel', 'query', 'excelDownloadUrl','excelUploads','dataview','tableClass','isDasar','isNoKolom','isNoExcel','isNoButtonRow','isDisable'],
    components: {
      jsonExcel,
      appModal,
    },
    data() {
      return {
        appliedFilters: [],
        filterCandidates: [],
        pages: [],
        tabName: 'dasar',
        excel: {
          fields: {},
          data: [],
          meta: [
            [{
              "key": "charset",
              "value": "utf-8"
            }]
          ]
        },
        excelAllData: {},
        excelAllDataStat: '',
        excelAll: {
          fields: {},
          data: [],
          meta: [
            [{
              "key": "charset",
              "value": "utf-8"
            }]
          ]
        },
        excelUploadIndex: '',
        isExcelAll: false,
        files: new FormData(),
        state: '',
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
    mounted() {
      document.addEventListener("keydown", (e) => {
        if(this.isDisable != true){
          if (e.keyCode == 13) {
            if(this.filterCandidates.length > 0 && this.itemDataStat === 'success')
              this.applyFilter();
          }
        }
      });
    },
    created() {
      this.addFilter();
      this.defaultFilter();
    },
    watch: {
      itemDataStat(value) {
        if (value == 'success') {
          this.query.page = this.itemData.current_page;
          this.fieldExcel();
          this.calculatePagination();
        }
      },
      excelAllDataStat(value) {
        if (value == 'success') {
          this.fieldExcelAll();
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
      changeTab(value){
        this.tabName = value;
        if(this.appliedFilters.length > 0){
          this.resetFilter();
        }
			},
      // show column
      hideColumn(index) {
        if (this.columnData[index].hide === false)
          this.columnData[index].hide = true;
        else
          this.columnData[index].hide = false;
        this.fieldExcel();
      },
      showAllColumn(index) {
        for (var t in this.columnData) {
          if (t != index)
            this.columnData[t].hide = false;
        }
        this.fieldExcel();
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
          case 'numeric':
            this.filterCandidates[i].operator = this.availableOperators()[6]
            this.filterCandidates[i].query_1 = null
            this.filterCandidates[i].query_2 = null
            break;
          case 'string':
            this.filterCandidates[i].operator = this.availableOperators()[6]
            this.filterCandidates[i].query_1 = null
            this.filterCandidates[i].query_2 = null
            break;
          case 'datetime':
            this.filterCandidates[i].operator = this.availableOperators()[6]
            this.filterCandidates[i].query_1 = '2019-01-31'
            this.filterCandidates[i].query_2 = null
            break;
          case 'counter':
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
          case 'numeric':
            this.filterCandidates[0].operator = this.availableOperators()[6]
            this.filterCandidates[0].query_1 = null
            this.filterCandidates[0].query_2 = null
            break;
          case 'string':
            this.filterCandidates[0].operator = this.availableOperators()[6]
            this.filterCandidates[0].query_1 = null
            this.filterCandidates[0].query_2 = null
            break;
          case 'datetime':
            this.filterCandidates[0].operator = this.availableOperators()[6]
            this.filterCandidates[0].query_1 = null
            this.filterCandidates[0].query_2 = null
            break;
          case 'counter':
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
      fetchExcelAll() {
        this.modalState = 'loading';
      
        if(this.query.limit >= this.itemData.total){
          this.excelAllData = this.itemData;
          this.excelAllDataStat = 'success';
          this.modalState = 'normal2';
        }else{
          let query = {
            order_column: this.query.order_column,
            order_direction: this.query.order_direction,
            filter_match: "and",
            limit: this.itemData.total,
            page: 1
          };

          const params = {
            ...query
          };

          axios.get('/api/' + this.excelDownloadUrl, {params})
          .then( ({data}) => {
            this.excelAllData = data.model;
            this.modalState = 'normal2';
            this.excelAllDataStat = 'success';
          }).catch( ({error}) => {
            this.modalState = 'fail';
            this.modalContent = error;
          });
        }
      },

      // download excel
      fieldExcel() {
        var vm = this;
        vm.excel.fields = {};
        vm.columnData.forEach(function (column) {
          if (!column.hide && !column.disable && column.tipe) {
            if(column.excelName){
              vm.excel.fields[column.title] = column.excelName;
            }else{
              vm.excel.fields[column.title] = column.name;
            }
          }
        });
        vm.excel.data = vm.itemData.data;
      },
      fieldExcelAll() {
        var vm = this;
        vm.excelAll.fields = {};
        vm.columnData.forEach(function (column) {
          if (!column.disable && column.tipe) {
            if(column.excelName){
              vm.excelAll.fields[column.title] = column.excelName;
            }else{
              vm.excelAll.fields[column.title] = column.name;
            }
          }
        });
        vm.excelAll.data = vm.excelAllData.data;
      },

      // upload excel
      changeUpload(event){
        this.files.append("file", event[0], event[0].name);
      },
      uploadExcel(index){
        this.updateStat = 'loading';
          
        axios.post('/api/' + this.excelUploads[index].url, this.files)
        .then(response => {
          if(response.data.uploaded){
            this.updateStat = 'success';
            this.updateResponse = response.data;
          }else{
            this.updateStat = 'fail';
          }
        })
        .catch(error => {
          this.updateResponse = error.response;
          this.updateStat = 'fail';
        });
      },
      downloadFormatExcel(index){
        axios.get('/api/download/' + this.excelUploads[index].format_url, {
        responseType: 'blob'})
        .then(response => {
          FileSaver.saveAs(response.data, this.excelUploads[index].format_url)
        });
      },

      // modal
      modalExcelOpen(state) {
        this.modalShow = true;
        this.modalState = "normal2";
        this.state = state;
        
        if(state == 'excel'){
          this.fieldExcel();
        }else if(state == 'excelAll'){
          this.excelAllDataStat = '';
        }
      },
      modalExcelOk() {
        this.isExcelAll = true;
        this.fetchExcelAll(); 
      },
      modalExcelUploadOpen(index) {
        this.modalState = "normal2";
        this.state = "upload";
        this.excelUploadIndex = index;
      },
      modalOptionOpen(state){
        this.modalShow = true;
        this.modalState = "normal1";
        this.modalOptionState = state;
      },
      modalTutup() {
        if(this.updateStat === 'success'){
          if(this.excelUploads[this.excelUploadIndex].params){
            this.$router.push({name: this.excelUploads[this.excelUploadIndex].next_page_route, params: this.excelUploads[this.excelUploadIndex].params});
          }else{
            this.$router.push({name: this.excelUploads[this.excelUploadIndex].next_page_route});
          }
        }
        
        this.modalShow = false;
      },
      modalBatal(value) {
        this.modalOptionOpen(value);
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
            parent: ['string','datetime','numeric','counter'],
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