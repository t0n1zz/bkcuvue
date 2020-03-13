<template>
  <div>
    <!-- table -->
    <div class="card">
      <div class="card-header bg-white">
        <h5 class="card-title">{{ title }}</h5>
      </div>
      <div class="card-body pb-2">
        <div class="row">

          <!-- button desktop  -->
          <div class="col-md-9 col-lg-9 pb-2 d-none d-sm-block">
            <button class="btn btn-light mb-1" @click.prevent="bukaData(selectedItem.kategori)" :disabled="!selectedItem.kategori">
              <i class="icon-folder-open3"></i> Buka data klaim JALINAN
            </button>

            <button class="btn btn-light mb-1" @click.prevent="lihatSemua">
              <i class="icon-eye"></i> Lihat semua data klaim JALINAN
            </button>
          </div>

          <!-- button mobile -->
          <div class="col-md-12 pb-2 d-block d-sm-none">
            <button class="btn btn-light btn-block pb-1" @click.prevent="bukaData(selectedItem.kategori)" :disabled="!selectedItem.kategori">
              <i class="icon-folder-open3"></i> Buka data klaim JALINAN
            </button>

            <button class="btn btn-light btn-block pb-1" @click.prevent="lihatSemua">
              <i class="icon-eye"></i> Lihat semua data klaim JALINAN
            </button>
          </div>

          <div class="col-md-3 col-lg-3 text-right d-none d-sm-block">
            <json-excel 
            class="btn bg-green-300 btn-icon mb-1"
            :data="excel.data" 
            :exportFields="excel.fields" 
            :meta="excel.meta"
            :title="'Data ' + title" 
            :name="title + '.xls'"
            ><i class="icon-file-excel"></i> Excel</json-excel> 

            <button type="button" class="btn btn-light btn-icon mb-1" :disabled="itemDataStat === 'loading'" @click.prevent="fetch()">
              <i class="icon-sync"></i>
            </button>
          </div>

          <div class="col-md-12 d-block d-sm-none">
            <json-excel 
            class="btn bg-green-300 btn-icon btn-block mb-1"
            :data="excel.data" 
            :exportFields="excel.fields" 
            :meta="excel.meta"
            :title="'Data ' + title" 
            :name="title + '.xls'"
            ><i class="icon-file-excel"></i> Excel</json-excel> 
            <button type="button" class="btn btn-light btn-icon btn-block mb-1" :disabled="itemDataStat === 'loading'" @click.prevent="fetch()">
              <i class="icon-sync"></i> Reload
            </button>
          </div>

        </div>		
      </div>

      <data-table :items="itemData" :columnData="columnData" :itemDataStat="itemDataStat">
        <template slot="item-desktop" slot-scope="props">
          <tr :class="{ 'bg-info': selectedItem.kategori === props.item.kategori }" class="text-nowrap" @click="selectedRow(props.item)" v-if="props.item">
            <td>{{ props.index + 1 }}</td>
            <td>
              <check-value :value="props.item.kategori"></check-value>
            </td>
            <td>
              <check-value :value="props.item.lakilaki" valueType="currency"></check-value>
            </td>
            <td>
              <check-value :value="props.item.perempuan" valueType="currency"></check-value>
            </td>
            <td>
              <check-value :value="props.item.meninggal" valueType="currency"></check-value>
            </td>
            <td>
              <check-value :value="props.item.cacat" valueType="currency"></check-value>
            </td>
            <td v-if="$route.params.cu == 'semua' && !isCu">
              <check-value :value="props.item.cu" valueType="currency"></check-value>
            </td>
            <td>
              <check-value :value="props.item.total" valueType="currency"></check-value>
            </td>
            <td>
              <check-value :value="props.item.tunas_diajukan" valueType="currency"></check-value>
            </td>
            <td>
              <check-value :value="props.item.lintang_diajukan" valueType="currency"></check-value>
            </td>
            <td>
              <check-value :value="props.item.tunas_disetujui" valueType="currency"></check-value>
            </td>
            <td>
              <check-value :value="props.item.lintang_disetujui" valueType="currency"></check-value>
            </td>
            <td>
              <check-value :value="props.item.tot_diajukan" valueType="currency"></check-value>
            </td>
            <td>
              <check-value :value="props.item.tot_disetujui" valueType="currency"></check-value>
            </td>
          </tr>
        </template>	
      </data-table>

    </div>
    
    <div class="row">
      <!-- lakilaki -->
      <div class="col-lg-3 col-md-3">
        <div class="card card-body bg-brown-400" >
          <div class="media">
            <div class="media-body">
              <h3 class="mb-0"><check-value :value="sumData.lakilaki" valueType="currency"></check-value></h3>
              <span class="text-uppercase">
                Jumlah laki-laki
              </span>
            </div>
            <div class="ml-3 align-self-center">
              <i class="icon-man icon-3x opacity-75"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- perempuan -->
      <div class="col-lg-3 col-md-3">
        <div class="card card-body bg-pink-400" >
          <div class="media">
            <div class="media-body">
              <h3 class="mb-0"><check-value :value="sumData.perempuan" valueType="currency"></check-value></h3>
              <span class="text-uppercase">
                Jumlah perempuan
              </span>
            </div>
            <div class="ml-3 align-self-center">
              <i class="icon-woman icon-3x opacity-75"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- cacat -->
      <div class="col-lg-3 col-md-3">
        <div class="card card-body bg-purple-400" >
          <div class="media">
            <div class="media-body">
              <h3 class="mb-0"><check-value :value="sumData.cacat" valueType="currency"></check-value></h3>
              <span class="text-uppercase">
                Jumlah Cacat
              </span>
            </div>
            <div class="ml-3 align-self-center">
              <i class="icon-accessibility2 icon-3x opacity-75"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- meninggal -->
      <div class="col-lg-3 col-md-3">
        <div class="card card-body bg-grey-400" >
          <div class="media">
            <div class="media-body">
              <h3 class="mb-0"><check-value :value="sumData.meninggal" valueType="currency"></check-value></h3>
              <span class="text-uppercase">
                Jumlah Meninggal
              </span>
            </div>
            <div class="ml-3 align-self-center">
              <i class="icon-person icon-3x opacity-75"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- cu -->
      <div class="col-lg-3 col-md-3">
        <div class="card card-body bg-blue-400" >
          <div class="media">
            <div class="media-body">
              <h3 class="mb-0"><check-value :value="sumData.cu" valueType="currency"></check-value></h3>
              <span class="text-uppercase">
                Jumlah CU
              </span>
            </div>
            <div class="ml-3 align-self-center">
              <i class="icon-office icon-3x opacity-75"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- total -->
      <div  class="col-lg-3 col-md-3">
        <div class="card card-body bg-danger-400" >
          <div class="media">
            <div class="media-body">
              <h3 class="mb-0"><check-value :value="sumData.total" valueType="currency"></check-value></h3>
              <span class="text-uppercase">
                Jumlah Cacat dan Meninggal
              </span>
            </div>
            <div class="ml-3 align-self-center">
              <i class="icon-users4 icon-3x opacity-75"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- diajukan -->
      <div class="col-lg-3 col-md-3">
        <div class="card card-body bg-warning-400" >
          <div class="media">
            <div class="media-body">
              <h3 class="mb-0"><check-value :value="sumData.tot_diajukan" valueType="currency"></check-value></h3>
              <span class="text-uppercase">
                Jumlah Diajukan
              </span>
            </div>
            <div class="ml-3 align-self-center">
              <i class="icon-square-up icon-3x opacity-75"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- pencairan -->
      <div class="col-lg-3 col-md-3">
        <div class="card card-body bg-green-400" >
          <div class="media">
            <div class="media-body">
              <h3 class="mb-0"><check-value :value="sumData.tot_disetujui" valueType="currency"></check-value></h3>
              <span class="text-uppercase">
                Jumlah Disetujui
              </span>
            </div>
            <div class="ml-3 align-self-center">
              <i class="icon-square-down icon-3x opacity-75"></i>
            </div>
          </div>
        </div>
      </div>

     
      
    </div>

  </div>
</template>

<script>
  import _ from 'lodash';
  import { mapGetters } from 'vuex';
  import dataTable from '../../components/datatable.vue';
  import checkValue from '../../components/checkValue.vue';
  import jsonExcel from 'vue-json-excel';

  export default {
    components: {
      dataTable,
      checkValue,
      jsonExcel,
    },
    props: ["title","itemData","itemDataStat","url","isCu"],
    data(){
      return{
        selectedItem: {},
        columnData: [],
        excel: {
          data: [],
          fields: {},
          meta: [
            [{
              "key": "charset",
              "value": "utf-8"
            }]
          ]
        },
        sumData: {
          cu: 0,
          pria: 0,
          wanita: 0,
          meninggal: 0,
          cacat: 0,
          tot_diajukan: 0,
          tot_disetujui: 0,
        },
      }
    },
    created(){
      this.fetch();
    },
    watch: {
       // check route changes
			'$route' (to, from){
				this.fetch();
      },
      itemDataStat(value){
        if(value == 'success'){
          this.excel.data = this.itemData;
          
          let itemData = this.itemData;

          if(this.$route.params.cu == 'semua'){
            this.sumData.cu = _.sumBy(itemData, 'cu');
          }
          this.sumData.lakilaki = _.sumBy(itemData,'lakilaki');
          this.sumData.perempuan = _.sumBy(itemData,'perempuan');
          this.sumData.cacat = _.sumBy(itemData,'cacat');
          this.sumData.meninggal = _.sumBy(itemData,'meninggal');
          this.sumData.total = _.sumBy(itemData,'total');
          this.sumData.tot_diajukan = _.sumBy(this.itemData,'tot_diajukan');
          this.sumData.tot_disetujui = _.sumBy(this.itemData,'tot_disetujui');
        }
      },
    },
    methods: {
      fetch(){
        if(this.$route.params.cu == 'semua'){
          if(this.isCu){
            this.columnData = [ 
              { title: 'No.' },
              { title: 'Kategori' },
              { title: 'Laki-laki' },
              { title: 'Perempuan' },
              { title: 'Meninggal' },
              { title: 'Cacat' },
              { title: 'Total Meninggal & Cacat' },
              { title: 'Tunas Diajukan' },
              { title: 'Lintang Diajukan' },
              { title: 'Tunas Disetujui' },
              { title: 'Lintang Disetujui' },
              { title: 'Total Diajukan' },
              { title: 'Total Disetujui' },
            ];
            this.fields = {
              kategori:'kategori',
              pria: 'pria',
              wanita: 'wanita',
              meninggal: 'meninggal',
              cacat: 'cacat',
              total:'total',
              tunas_diajukan: 'tunas_diajukan',
              lintang_diajukan: 'lintang_diajukan',
              tunas_disetujui: 'tunas_disetujui',
              lintang_disetujui: 'lintang_disetujui',
              tot_diajukan: 'tot_diajukan',
              tot_disetujui: 'tot_disetujui',
            }
          }else{
            this.columnData = [ 
              { title: 'No.' },
              { title: 'Kategori' },
              { title: 'Laki-laki' },
              { title: 'Perempuan' },
              { title: 'Meninggal' },
              { title: 'Cacat' },
              { title: 'Total Meninggal & Cacat' },
              { title: 'Total CU' },
              { title: 'Tunas Diajukan' },
              { title: 'Lintang Diajukan' },
              { title: 'Tunas Disetujui' },
              { title: 'Lintang Disetujui' },
              { title: 'Total Diajukan' },
              { title: 'Total Disetujui' },
            ];
            this.fields = {
              kategori:'kategori',
              pria: 'pria',
              wanita: 'wanita',
              meninggal: 'meninggal',
              cacat: 'cacat',
              total:'total',
              cu:'cu',
              tunas_diajukan: 'tunas_diajukan',
              lintang_diajukan: 'lintang_diajukan',
              tunas_disetujui: 'tunas_disetujui',
              lintang_disetujui: 'lintang_disetujui',
              tot_diajukan: 'tot_diajukan',
              tot_disetujui: 'tot_disetujui',
            }
          }
        }else{
          if(this.isCu){
            this.columnData = [ 
              { title: 'No.' },
              { title: 'Kategori' },
              { title: 'Laki-laki' },
              { title: 'Perempuan' },
              { title: 'Meninggal' },
              { title: 'Cacat' },
              { title: 'Total Meninggal & Cacat' },
              { title: 'Tunas Diajukan' },
              { title: 'Lintang Diajukan' },
              { title: 'Tunas Disetujui' },
              { title: 'Lintang Disetujui' },
              { title: 'Total Diajukan' },
              { title: 'Total Disetujui' },
            ];
            this.fields = {
              no_ba:'no_ba',
              kategori:'kategori',
              pria: 'pria',
              wanita: 'wanita',
              meninggal: 'meninggal',
              cacat: 'cacat',
              total:'total',
              tunas_diajukan: 'tunas_diajukan',
              lintang_diajukan: 'lintang_diajukan',
              tunas_disetujui: 'tunas_disetujui',
              lintang_disetujui: 'lintang_disetujui',
              tot_diajukan: 'tot_diajukan',
              tot_disetujui: 'tot_disetujui',
            }
          }else{
            this.columnData = [ 
              { title: 'No.' },
              { title: 'Kategori' },
              { title: 'Laki-laki' },
              { title: 'Perempuan' },
              { title: 'Meninggal' },
              { title: 'Cacat' },
              { title: 'Total Meninggal & Cacat' },
              { title: 'Total CU' },
              { title: 'Tunas Diajukan' },
              { title: 'Lintang Diajukan' },
              { title: 'Tunas Disetujui' },
              { title: 'Lintang Disetujui' },
              { title: 'Total Diajukan' },
              { title: 'Total Disetujui' },
            ];
            this.fields = {
              kategori:'kategori',
              pria: 'pria',
              wanita: 'wanita',
              meninggal: 'meninggal',
              cacat: 'cacat',
              total:'total',
              cu:'cu',
              tunas_diajukan: 'tunas_diajukan',
              lintang_diajukan: 'lintang_diajukan',
              tunas_disetujui: 'tunas_disetujui',
              lintang_disetujui: 'lintang_disetujui',
              tot_diajukan: 'tot_diajukan',
              tot_disetujui: 'tot_disetujui',
            }
          }
        }
        
        this.$store.dispatch('jalinanKlaim/' + this.url, [this.$route.params.status, this.$route.params.cu, this.$route.params.awal, this.$route.params.akhir] );

      },
      selectedRow(item) {
        this.selectedItem = item;
      },
      bukaData(value){
        this.$emit('bukaData', value);
      },
      lihatSemua(){
        this.selectedItem = {};
        this.$emit('lihatSemua','semua');
      },
    },
    computed: {
      ...mapGetters("jalinanKlaim", {
        updateMessage: "update",
        updateStat: "updateStat"
      }),
    }
  }

</script>