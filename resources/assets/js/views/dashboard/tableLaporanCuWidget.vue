<template>
  <div class="card">
    <div class="card-header header-elements-inline">
      <h6 class="card-title"><i></i><i class="icon-table2 mr-2"></i> Tabel Perkembangan</h6>
      <div class="header-elements">
        <span v-if="itemDataStat == 'success'"><i class="badge badge-mark border-warning"></i> {{ itemData.data[itemData.total-1]['periode'] | dateMonth }}</span>
      </div>
    </div>

    <ul class="nav nav-tabs nav-tabs-solid nav-justified bg-indigo-400 border-x-0 border-bottom-0 border-top-indigo-300 mb-0">

      <!-- tabel cu -->
      <li class="nav-item">
        <a href="#" class="nav-link" :class="{'active' : tabTabelName == 'tabelCu'}" @click.prevent="changeTabelTab('tabelCu')">{{ tabTitle}}</a>
      </li>

      <!-- tabel pearls -->
      <li class="nav-item">
        <a href="#" class="nav-link" :class="{'active' : tabTabelName == 'tabelPearls'}" @click.prevent="changeTabelTab('tabelPearls')" v-if="currentUser.id_cu != 0">P.E.A.R.L.S. CU</a>
      </li>

    </ul>

    <transition enter-active-class="animated fadeIn" mode="out-in">
      <div class="table-responsive table-scrollable" v-show="tabTabelName == 'tabelCu'">
        <table class="table text-nowrap">
          <thead>
            <tr>
              <th>Nama Akun</th>
              <th>Nilai</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="column in columnData" v-if="column.tipe && !column.disable">
              <td class="font-weight-semibold">{{column.title}}</td>
              <td v-if="itemDataStat == 'success'">
                <check-value :value="itemData.data[itemData.total-1][column.name]" valueType="currency"></check-value>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </transition>

    <transition enter-active-class="animated fadeIn" mode="out-in">
      <div class="table-responsive table-scrollable" v-show="tabTabelName == 'tabelPearls'">
        <table class="table text-nowrap">
          <thead>
            <tr>
              <th>Nama Akun</th>
              <th>Nilai</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="column in columnDataPearls" v-if="column.tipe && !column.disable">
              <td class="font-weight-semibold" v-html="column.title"></td>
              <td v-if="itemPearlsDataStat == 'success'">
                <item-pearls
                  :type="column.name"
                  :props="itemPearlsData.data[itemPearlsData.total-1]"
                ></item-pearls>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </transition>
    
  </div>
</template>

<script type="text/javascript">
  import { mapGetters } from 'vuex';
  import checkValue from "../../components/checkValue.vue";
  import itemPearls from "../laporanCu/itemPearls.vue";

  export default {
    components: {
      checkValue,
      itemPearls
    },
    props: ['currentUser','columnData','columnDataPearls'],
    data(){
      return {
        tabTitle: 'CU',
        tabTabelName: 'tabelCu',
        isTabelPearls: false,
				isTabelGerakan: false,
      }
    },
    created(){
      this.removeColumn();
      if(this.currentUser.id_cu == 0){
        this.tabTitle = 'Gerakan';
      }
		},
		methods:{
      removeColumn(){
        this.columnData[1].disable = true;
        this.columnData[2].disable = true;
        this.columnData[3].disable = true;
        this.columnData[4].disable = true;
        this.columnData[5].disable = true;
        this.columnData[6].disable = true;
        this.columnData[45].disable = true;
        this.columnData[46].disable = true;
        this.columnData[47].disable = true;
        this.columnData[48].disable = true;

        this.columnDataPearls[1].disable = true;
        this.columnDataPearls[2].disable = true;
        this.columnDataPearls[3].disable = true;
        this.columnDataPearls[4].disable = true;
        this.columnDataPearls[5].disable = true;
        this.columnDataPearls[6].disable = true;
        this.columnDataPearls[7].disable = true;
        this.columnDataPearls[20].disable = true;
        this.columnDataPearls[21].disable = true;
        this.columnDataPearls[22].disable = true;
        this.columnDataPearls[23].disable = true;
        this.columnDataPearls[24].disable = true;
      },
			changeTabelTab(value) {
				this.tabTabelName = value;
				if (value == 'tabelPearls' && !this.isTabelPearls) {
          this.isTabelPearls = true

          if(this.itemPearlsDataStat != 'success')
          {
            let query = {
              order_column: "p1",
              order_direction: "desc",
              filter_match: "and",
              limit: 50,
              page: 1
            };

            this.$store.dispatch('laporanCu/grafikPearlsCu', [query,this.currentUser.id_cu]);
          }
				}
			},
    },
    computed: {
      ...mapGetters('laporanCu',{
        itemData: 'grafik',
        itemDataStat: 'grafikStat',
        itemPearlsData: "grafikPearls",
        itemPearlsDataStat: "grafikPearlsStat",
      })
    }
  }
</script>
