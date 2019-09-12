<template>
  <div class="card">
    <div class="card-header bg-white">
      <h5 class="card-title">Pencairan JALINAN</h5>
    </div>
    <div class="card-body pb-2">
      <div class="row">

         <!-- button desktop  -->
        <div class="col-md-7 col-lg-9 pb-2 d-none d-sm-block">
          <button class="btn btn-light mb-1" @click.prevent="cairkanSemua()">
            <i class="icon-checkbox-checked2"></i> Cairkan semua
          </button>

          <button class="btn btn-light mb-1" @click.prevent="carikan()"
          :disabled="!selectedItem.cu_id">
            <i class="icon-checkbox-checked"></i> Cairkan
          </button>

          <button class="btn btn-light mb-1" @click="bukaData(selectedItem.cu_id)" :disabled="!selectedItem.cu_id">
            <i class="icon-eye"></i> Buka data klaim
          </button>
        </div>

        <!-- button mobile -->
        <div class="col-md-12 pb-2 d-block d-sm-none">
          <button class="btn btn-light btn-block pb-1" @click.prevent="cairkanSemua()">
            <i class="icon-checkbox-checked2"></i> Cairkan semua
          </button>

          <button class="btn btn-light btn-block pb-1" @click.prevent="carikan()"
          :disabled="!selectedItem.cu_id">
            <i class="icon-checkbox-checked"></i> Cairkan
          </button>

          <button class="btn btn-light btn-block pb-1" @click="bukaData(selectedItem.cu_id)" :disabled="!selectedItem.cu_id">
            <i class="icon-eye"></i> Buka data klaim
          </button>
        </div>

        <div class="col-md-5 col-lg-3 text-right d-none d-sm-block">
          <button type="button" class="btn btn-light btn-icon mb-1" :disabled="itemDataStat === 'loading'" @click.prevent="fetch()">
            <i class="icon-sync"></i>
          </button>
        </div>

        <div class="col-md-12 d-block d-sm-none">
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
            <check-value :value="props.item.cu_name"></check-value>
          </td>
          <td>
            <check-value :value="props.item.pria" valueType="currency"></check-value>
          </td>
          <td>
            <check-value :value="props.item.wanita" valueType="currency"></check-value>
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
</template>

<script>
  import { mapGetters } from 'vuex';
  import dataTable from '../../components/datatable.vue';
  import appModal from '../../components/modal';
  import checkValue from '../../components/checkValue.vue';

  export default {
    components: {
      dataTable,
      appModal,
      checkValue,
    },
    props: ["itemData","itemDataStat"],
    data(){
      return{
        selectedItem: {},
        columnData: [
          { title: 'No.' },
          { title: 'Status' },
          { title: 'No. BA' },
          { title: 'CU' },
          { title: 'Pria' },
          { title: 'Wanita' },
          { title: 'Tunas Disetujui' },
          { title: 'Lintang Disetujui' },
          { title: 'Total Disetujui' },
        ]
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
    },
    methods: {
      fetch(){
        if(this.$route.meta.mode == 'cair'){
          this.$store.dispatch('jalinanKlaim/indexCair', this.$route.params.tanggal );
        }
      },
      selectedRow(item) {
        this.selectedItem = item;
      },
      cairkanSemua(){

      },
      carikan(){

      },
      bukaData(value){
        this.$emit('bukaData', value);
      }
    },
  }

</script>