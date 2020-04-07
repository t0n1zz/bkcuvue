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
            <button class="btn btn-light mb-1" @click.prevent="modalOpen('cairAll')"  >
              <i class="icon-checkbox-checked2"></i> Cairkan semua
            </button>

            <button class="btn btn-light mb-1" @click.prevent="modalOpen('cair')"
            :disabled="!selectedItem.cu_id"  >
              <span v-if="selectedItem.status_klaim_cair > 0 && selectedItem.status_klaim_setuju == 0">
                <i class="icon-cancel-square"></i> Batal Cairkan
              </span>
              <span v-else>
                <i class="icon-checkbox-checked"></i> Cairkan
              </span>
            </button>

            <button class="btn btn-light mb-1" @click="bukaData(selectedItem.cu_id)" :disabled="!selectedItem.cu_id">
              <i class="icon-eye"></i> Buka data klaim JALINAN
            </button>
          </div>

          <!-- button mobile -->
          <div class="col-md-12 pb-2 d-block d-sm-none">
            <button class="btn btn-light btn-block pb-1" @click.prevent="cairkanSemua()"  >
              <i class="icon-checkbox-checked2"></i> Cairkan semua
            </button>

            <button class="btn btn-light btn-block pb-1" @click.prevent="modalOpen('cair')"
            :disabled="!selectedItem.cu_id"  >
              <span v-if="selectedItem.status_klaim_cair > 0 && selectedItem.status_klaim_setuju == 0">
                <i class="icon-cancel-square"></i> Batal Cairkan
              </span>
              <span v-else>
                <i class="icon-checkbox-checked"></i> Cairkan
              </span>
            </button>

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
              <label class="badge badge-danger ml-1" v-if="props.item.status_klaim_setuju > 0 && props.item.status_klaim_cair == 0">
                Belum Dicairkan
              </label>
              <label class="badge badge-primary ml-1" v-else-if="props.item.status_klaim_cair > 0 && props.item.status_klaim_setuju == 0">
                Sudah Dicairkan
              </label>
              <label class="badge badge-warning ml-1" v-else>
                Ada yang belum dicairkan, <br/>
                mohon melihat data klaim
              </label>
            </td>
            <td>
              <check-value :value="props.item.no_ba"></check-value>
            </td>
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
            <td>
              <check-value :value="props.item.tunas_disetujui" valueType="currency"></check-value>
            </td>
            <td>
              <check-value :value="props.item.lintang_disetujui" valueType="currency"></check-value>
            </td>
            <td>
              <check-value :value="props.item.tot_disetujui" valueType="currency"></check-value>
            </td>
          </tr>
        </template>	
      </data-table>

    </div>
    
    <!-- sum widget -->
    <div class="row">

      <!-- cu -->
      <div class="col-lg-6 col-md-6">
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

      <!-- pencairan -->
      <div class="col-lg-6 col-md-6">
        <div class="card card-body bg-green-400" >
          <div class="media">
            <div class="media-body">
              <h3 class="mb-0"><check-value :value="sumData.tot_disetujui" valueType="currency"></check-value></h3>
              <span class="text-uppercase">
                Jumlah Pencairan
              </span>
            </div>
            <div class="ml-3 align-self-center">
              <i class="icon-square-down icon-3x opacity-75"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- pria -->
      <div class="col-lg-3 col-md-3">
        <div class="card card-body bg-brown-400" >
          <div class="media">
            <div class="media-body">
              <h3 class="mb-0"><check-value :value="sumData.lakilaki" valueType="currency"></check-value></h3>
              <span class="text-uppercase">
                jumlah laki-laki
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
                jumlah perempuan
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
    props: ["title","itemData","itemDataStat"],
    data(){
      return{
        selectedItem: {},
        columnData: [
          { title: 'No.' },
          { title: 'Status' },
          { title: 'No. BA' },
          { title: 'CU' },
          { title: 'Laki-Laki' },
          { title: 'Perempuan' },
          { title: 'Meninggal' },
          { title: 'Cacat' },
          { title: 'Tunas Disetujui' },
          { title: 'Lintang Disetujui' },
          { title: 'Total Disetujui' },
        ],
        excel: {
          data: [],
          fields: {
            no_ba:'no_ba',
            cu: 'cu_name',
            status_klaim_cair: 'status_klaim_cair',
            status_klaim_setuju: 'status_klaim_setuju',
            lakilaki: 'lakilaki',
            perempuan: 'perempuan',
            meninggal: 'meninggal',
            cacat: 'cacat',
            tunas_disetujui: 'tunas_disetujui',
            lintang_disetujui: 'lintang_disetujui',
            tot_disetujui: 'tot_disetujui',
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
          meninggal: 0,
          cacat: 0,
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
          
          let itemData = [];
          
          itemData = _.filter(this.itemData,function(o){ return o.status_klaim_setuju > 0});

          this.sumData.cu = _.size(itemData);
          this.sumData.lakilaki = _.sumBy(itemData,'lakilaki');
          this.sumData.perempuan = _.sumBy(itemData,'perempuan');
          this.sumData.cacat = _.sumBy(itemData,'cacat');
          this.sumData.meninggal = _.sumBy(itemData,'meninggal');
          this.sumData.tot_disetujui = _.sumBy(itemData,'tot_disetujui');
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
        this.$store.dispatch('jalinanKlaim/indexCair', this.$route.params.awal );
      },
      selectedRow(item) {
        this.selectedItem = item;
      },
      modalOpen(state, isMobile, itemMobile) {
        this.modalShow = true;
        this.state = state;

        if (state == "cairAll") {
          this.modalState = "confirm-tutup";
          this.modalTitle = "Cairkan semua klaim JALINAN ini?";
          this.modalButton = "Iya, Cairkan";
        }else if(state == "cair"){
          this.modalState = "confirm-tutup";
          this.modalTitle = "Cairkan klaim JALINAN CU " + this.selectedItem.cu_name + " ?";
          this.modalButton = "Iya, Cairkan";
        }else if(state == "cairBatal"){
          this.modalState = "confirm-tutup";
          this.modalTitle = "Membatalkan pencairan klaim JALINAN CU " + this.selectedItem.cu_name + " ?";
          this.modalButton = "Iya, Cairkan";
        }
      },
      modalTutup() {
        this.modalShow = false;
        this.$store.dispatch(this.kelas + "/resetUpdateStat");
      },
      modalConfirmOk() {
        if (this.state == "cairAll") {
          this.$store.dispatch("jalinanKlaim/updateCairAll", [this.$route.params.awal, this.$route.params.akhir]);
        }else if(this.state == "cair"){
          if(this.selectedItem.status_klaim_cair > 0 && this.selectedItem.status_klaim_setuju == 0){
            this.$store.dispatch("jalinanKlaim/updateCairBatal",[this.selectedItem.cu_id, this.$route.params.awal, this.$route.params.akhir]);
          }else{
            this.$store.dispatch("jalinanKlaim/updateCair",[this.selectedItem.cu_id, this.$route.params.awal, this.$route.params.akhir]);
          }
        }
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