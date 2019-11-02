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
            <button class="btn btn-light mb-1" @click="bukaData(selectedItem.cu_id)" :disabled="!selectedItem.cu_id">
              <i class="icon-eye"></i> Buka data klaim JALINAN
            </button>
          </div>

          <!-- button mobile -->
          <div class="col-md-12 pb-2 d-block d-sm-none">
            <button class="btn btn-light btn-block pb-1" @click="bukaData(selectedItem.cu_id)" :disabled="!selectedItem.cu_id">
              <i class="icon-eye"></i> Buka data klaim JALINAN
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
          <tr :class="{ 'bg-info': selectedItem.no_ba === props.item.no_ba }" class="text-nowrap" @click="selectedRow(props.item)" v-if="props.item">
            <td>{{ props.index + 1 }}</td>
            <td>
              <check-value :value="props.item.kategori"></check-value>
            </td>
            <td v-if="$route.params.cu == 'semua'">
              <check-value :value="props.item.cu" valueType="currency"></check-value>
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
            <td>
              <check-value :value="props.item.total" valueType="currency"></check-value>
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
      <div class="col-lg-6 col-md-6" v-if="$route.params.cu == 'semua'">
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
      <div :class="{'col-sm-6' : $route.params.cu == 'semua','col-sm-12' : $route.params.cu != 'semua'}">
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
      
    </div>

    <!-- modal -->
    <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :size="modalSize" :button="modalButton" :content="modalContent" :color="modalColor" 
      @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">

    </app-modal>

  </div>
</template>

<script>
  import _ from 'lodash';
  import { mapGetters } from 'vuex';
  import dataTable from '../../components/datatable.vue';
  import appModal from '../../components/modal';
  import checkValue from '../../components/checkValue.vue';
  import jsonExcel from 'vue-json-excel';

  export default {
    components: {
      dataTable,
      appModal,
      checkValue,
      jsonExcel,
    },
    props: ["title","itemData","itemDataStat","url"],
    data(){
      return{
        selectedItem: {},
        columnData: [
         
        ],
        excel: {
          data: [],
          fields: {
            kategori:'kategori',
            cu: 'cu',
            pria: 'pria',
            wanita: 'wanita',
            meninggal: 'meninggal',
            cacat: 'cacat',
          },
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
          tot_disetujui: 0,
        },
        state: "",
        modalShow: false,
        modalState: "",
        modalColor: "",
        modalSize: "",
        modalTitle: "",
        modalContent: "",
        modalButton: ""
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
        }
      },
       updateStat(value) {
        this.modalState = value;
        this.modalButton = "Ok";

        if (value === "success") {
          this.modalTitle = this.updateMessage.message;
          this.modalContent = "";
          this.fetch();
        } else if (value === "fail") {
          this.modalContent = this.updateMessage;
        } else {
          this.modalContent = "";
        }
      }
    },
    methods: {
      fetch(){
        if(this.$route.params.cu != 'semua'){
          this.columnData = [ 
            { title: 'No.' },
            { title: 'Kategori' },
            { title: 'Laki-laki' },
            { title: 'Perempuan' },
            { title: 'Meninggal' },
            { title: 'Cacat' },
            { title: 'Total' },
          ];
        }else{
          this.columnData = [ 
            { title: 'No.' },
            { title: 'Kategori' },
            { title: 'CU' },
            { title: 'Laki-laki' },
            { title: 'Perempuan' },
            { title: 'Meninggal' },
            { title: 'Cacat' },
            { title: 'Total' },
          ];
        }

        this.$store.dispatch('jalinanKlaim/' + this.url, [this.$route.params.awal, this.$route.params.akhir, this.$route.params.cu] );
      },
      selectedRow(item) {
        this.selectedItem = item;
      },
      modalOpen(state, isMobile, itemMobile) {
      },
      modalTutup() {
      },
      modalConfirmOk() {
      },
      bukaData(value){
        this.$emit('bukaData', value);
      }
    },
    computed: {
      ...mapGetters("jalinanKlaim", {
        updateMessage: "update",
        updateStat: "updateStat"
      }),
    }
  }

</script>