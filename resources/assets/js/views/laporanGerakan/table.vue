<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :isUploadExcel="true" @fetch="fetch">

			<!-- desktop -->
			<!-- button desktop -->
			<template slot="button-kolom">
				<button type="button" class="btn btn-light btn-block btn-icon mb-1" :disabled="itemDataStat === 'loading'"
				  @click.prevent="columnGroup('anggota')">
					Anggota
				</button>
				<button type="button" class="btn btn-light btn-block btn-icon mb-1" :disabled="itemDataStat === 'loading'"
				  @click.prevent="columnGroup('aset')">
					Aset
				</button>
				<button type="button" class="btn btn-light btn-block btn-icon mb-1" :disabled="itemDataStat === 'loading'"
				  @click.prevent="columnGroup('shu')">
					SHU
				</button>
				<button type="button" class="btn btn-light btn-block btn-icon mb-1" v-tooltip:top="'Kolom Piutang'" :disabled="itemDataStat === 'loading'"
				  @click.prevent="columnGroup('piutang')">
					Piutang
				</button>
			</template>


			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 
					'bg-info': selectedItem.id === props.item.id}"
				  class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide && !columnData[1].disable">
						<check-value :value="props.item.cu"></check-value>
					</td>
					<td v-if="!columnData[5].hide">
						{{ props.item.periode | dateMonth }}
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.l_biasa" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[8].hide">
						<check-value :value="props.item.l_lbiasa" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[9].hide">
						<check-value :value="props.item.p_biasa" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[10].hide">
						<check-value :value="props.item.p_lbiasa" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[11].hide">
						<check-value :value="props.item.total_anggota" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[12].hide">
						<check-value :value="props.item.total_anggota_lalu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[13].hide">
						<check-value :value="props.item.aset" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[14].hide">
						<check-value :value="props.item.aset_lalu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[15].hide">
						<check-value :value="props.item.aset_masalah" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[16].hide">
						<check-value :value="props.item.aset_tidak_menghasilkan" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[17].hide">
						<check-value :value="props.item.aktiva_lancar" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[18].hide">
						<check-value :value="props.item.simpanan_saham" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[19].hide">
						<check-value :value="props.item.simpanan_saham_lalu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[20].hide">
						<check-value :value="props.item.simpanan_saham_des" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[21].hide">
						<check-value :value="props.item.nonsaham_unggulan" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[22].hide">
						<check-value :value="props.item.nonsaham_harian" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[23].hide">
						<check-value :value="props.item.hutang_spd" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[24].hide">
						<check-value :value="props.item.hutang_tidak_berbiaya_30hari" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[25].hide">
						<check-value :value="props.item.total_hutang_pihak3" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[26].hide">
						<check-value :value="props.item.piutang_beredar" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[27].hide">
						<check-value :value="props.item.piutang_bersih" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[28].hide">
						<check-value :value="props.item.piutang_anggota" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[29].hide">
						<check-value :value="props.item.piutang_lalai_1bulan" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[30].hide">
						<check-value :value="props.item.piutang_lalai_12bulan" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[31].hide">
						<check-value :value="props.item.rasio_beredar" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[32].hide">
						<check-value :value="props.item.rasio_lalai" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[33].hide">
						<check-value :value="props.item.dcr" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[34].hide">
						<check-value :value="props.item.dcu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[35].hide">
						<check-value :value="props.item.iuran_gedung" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[36].hide">
						<check-value :value="props.item.donasi" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[37].hide">
						<check-value :value="props.item.bjs_saham" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[38].hide">
						<check-value :value="props.item.beban_penyisihan_dcr" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[39].hide">
						<check-value :value="props.item.investasi_likuid" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[40].hide">
						<check-value :value="props.item.total_pendapatan" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[41].hide">
						<check-value :value="props.item.total_biaya" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[42].hide">
						<check-value :value="props.item.shu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[43].hide">
						<check-value :value="props.item.shu_lalu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[44].hide">
						<check-value :value="props.item.rata_aset" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[45].hide">
						<check-value :value="props.item.laju_inflasi" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[46].hide">
						<check-value :value="props.item.harga_pasar" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[47].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[48].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

		</data-viewer>

	</div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import DataViewer from "../../components/dataviewer2.vue";
import checkValue from "../../components/checkValue.vue";
import collapseButton from "../../components/collapseButton.vue";

export default {
  components: {
    DataViewer,
    checkValue,
    collapseButton
  },
  props: ["title", "kelas","columnData"],
  data() {
    return {
      query: {
        order_column: "periode",
        order_direction: "desc",
        filter_match: "and",
        limit: 10,
        page: 1
      },
      selectedItem: []
    };
  },
  created() {
    this.fetch(this.query);
  },
  watch: {
    // check route changes
    $route(to, from) {
      this.isFirstLoad = true;
      this.fetch(this.query);
    }
  },
  methods: {
    fetch(params) {
      this.columnData[1].disable = false;
      this.columnData[1].title = 'Jmlh. CU';
      this.columnData[1].name = 'cu';
      this.columnData[1].tipe = 'numeric';
      this.columnData[1].filter = false;
      this.columnData[2].disable = true;
      this.columnData[3].disable = true;
      this.columnData[4].disable = true;
      this.columnData[6].disable = true;

      this.$store.dispatch(this.kelas + "/indexGerakan", params); 
    },
    selectedRow(item) {
      this.selectedItem = item;
    },
    formatPeriode(value) {
      return Vue.filter("dateMonth")(value);
    }
  },
  computed: {
    ...mapGetters("laporanCu", {
      itemData: "dataS",
      itemDataStat: "dataStatS",
    }),
  }
};
</script>