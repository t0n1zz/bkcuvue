<template>
	<div>

		<div class="card">
			<!-- main panel -->
			<data-table :columnData="columnData" :items="itemData" :itemDataStat="itemDataStat">

				<!-- item desktop -->
				<template slot="item-desktop" slot-scope="props">
					<tr class="text-nowrap" @click="selectedRow(props.item)">
						<td>
							{{ props.index + 1 }}
						</td>
						<td>
							<check-value :value="props.item.cu"></check-value>
						</td>
						<td>
							<span v-if="props.item.cu_sesuai">
								<check-value :value="props.item.cu_sesuai.cu"></check-value>
							</span>
							<span v-else>-</span>
						</td>
						<td>
							{{ props.item.periode | dateMonth }}
						</td>
						<td>
							<check-value :value="props.item.l_biasa" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.l_lbiasa" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.p_biasa" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.p_lbiasa" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.total_anggota" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.total_anggota_lalu" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.aset" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.aset_lalu" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.aset_masalah" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.aset_tidak_menghasilkan" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.aktiva_lancar" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.simpanan_saham" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.simpanan_saham_lalu" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.simpanan_saham_des" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.nonsaham_unggulan" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.nonsaham_harian" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.hutang_spd" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.hutang_tidak_berbiaya_30hari" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.total_hutang_pihak3" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.piutang_beredar" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.piutang_bersih" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.piutang_anggota" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.piutang_lalai_1bulan" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.piutang_lalai_12bulan" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.rasio_beredar" valueType="percentage"></check-value>
						</td>
						<td>
							<check-value :value="props.item.rasio_lalai" valueType="percentage"></check-value>
						</td>
						<td>
							<check-value :value="props.item.dcr" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.dcu" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.iuran_gedung" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.donasi" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.bjs_saham" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.beban_penyisihan_dcr" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.investasi_likuid" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.total_pendapatan" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.total_biaya" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.shu" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.shu_lalu" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.rata_aset" valueType="currency"></check-value>
						</td>
						<td>
							<check-value :value="props.item.laju_inflasi" valueType="percentage"></check-value>
						</td>
						<td>
							<check-value :value="props.item.harga_pasar" valueType="percentage"></check-value>
						</td>
					</tr>
				</template>

			</data-table>

		</div> 

	</div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import dataTable from '../../components/datatable.vue';
import checkValue from "../../components/checkValue.vue";
import collapseButton from "../../components/collapseButton.vue";

export default {
  components: {
    dataTable,
    checkValue,
    collapseButton
  },
  props: ["title", "kelas"],
  data() {
    return {
			excelDownloadUrl: '',
			selectedItem: [],
			columnData: [
      {//0
        title: "No.",
        name: "No."
			},
			{//6
        title: "Total CU",
        name: "cu",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true
			},
			{//6
        title: "CU Tepat Waktu",
        name: "cu_sesuai",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true
      },
      {//5
        title: "Periode",
        name: "periode",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
      },
      {//7
        title: "Lelaki Biasa",
        name: "l_biasa",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//8
        title: "Lelaki L.Biasa",
        name: "l_lbiasa",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true, 
        isChartSelect: false,
        filter: true
      },
      {//9
        title: "Perempuan Biasa",
        name: "p_biasa",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//10
        title: "Perempuan L.Biasa",
        name: "p_lbiasa",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//11
        title: "Total Anggota",
        name: "total_anggota",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: true
      },
      {//12
        title: "Total Anggota Lalu",
        name: "total_anggota_lalu",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//13
        title: "Aset",
        name: "aset",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterDefault: true
      },
      {//14
        title: "Aset Lalu",
        name: "aset_lalu",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//15
        title: "Aset Masalah",
        name: "aset_masalah",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//16
        title: "Aset Tdk Menghasilkan",
        name: "aset_tidak_menghasilkan",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//17
        title: "Aktiva Lancar",
        name: "aktiva_lancar",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//18
        title: "Simp. Saham",
        name: "simpanan_saham",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//19
        title: "Simp. Saham Lalu",
        name: "simpanan_saham_lalu",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//20
        title: "Simp. Saham Des",
        name: "simpanan_saham_des",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//21
        title: "Simp. Nonsaham Unggulan",
        name: "nonsaham_unggulan",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//22
        title: "Simp. Nonsaham Harian",
        name: "nonsaham_harian",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//23
        title: "Hutang SPD",
        name: "hutang_spd",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//24
        title: "Hutang Tdk Berbiaya",
        name: "hutang_tidak_berbiaya_30hari",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//25
        title: "Total Hutang Pihak Ke-3",
        name: "total_hutang_pihak3",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//26
        title: "Piutang Beredar",
        name: "piutang_beredar",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//27
        title: "Piutang Bersih",
        name: "piutang_bersih",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false
      },
      {//28
        title: "Piutang Anggota",
        name: "piutang_anggota",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//29
        title: "Piutang Lalai 1-12 Bulan",
        name: "piutang_lalai_1bulan",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//30
        title: "Piutang Lalai > 12 Bulan",
        name: "piutang_lalai_12bulan",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//31
        title: "Rasio Piutang Beredar",
        name: "rasio_beredar",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false
      },
      {//32
        title: "Rasio Piutang Lalai",
        name: "rasio_lalai",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false
      },
      {//33
        title: "DCR",
        name: "dcr",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//34
        title: "DCU",
        name: "dcu",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//35
        title: "Iuran Gedung",
        name: "iuran_gedung",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//36
        title: "Donasi",
        name: "donasi",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//37
        title: "BJS Saham",
        name: "bjs_saham",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//38
        title: "Beban Penyisihan DCR",
        name: "beban_penyisihan_dcr",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//39
        title: "Investasi Likuid",
        name: "investasi_likuid",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//40
        title: "Total Pendapatan",
        name: "total_pendapatan",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//41
        title: "Total Biaya",
        name: "total_biaya",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//42
        title: "SHU",
        name: "shu",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//43
        title: "SHU Lalu",
        name: "shu_lalu",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//44
        title: "Rata-rata Aset",
        name: "rata_aset",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//45
        title: "Laju Inflasi",
        name: "laju_inflasi",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//46
        title: "Harga Pasar",
        name: "harga_pasar",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
    ],
    
    };
  },
  created() {
    this.fetch(this.query);
  },
  watch: {
    // check route changes
    $route(to, from) {
      this.isFirstLoad = true;
      this.fetch();
    }
  },
  methods: {
    fetch() {
			this.$store.dispatch(this.kelas + "/indexGerakan"); 
			this.excelDownloadUrl = this.kelas + "/indexGerakan";
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