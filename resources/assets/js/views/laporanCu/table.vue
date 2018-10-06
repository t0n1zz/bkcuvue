<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelUrl="excelUrl" :isUploadExcel="true" @fetch="fetch">

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

			<template slot="button-desktop">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon mb-1" v-if="profile.can && profile.can['create_laporan_cu']">
					<i class="icon-plus3"></i> Tambah Laporan
				</router-link>

				<!-- ubah-->
				<button @click.prevent="ubahData(selectedItem.id,selectedItem.tp)" class="btn btn-light btn-icon mb-1" v-if="profile.can && profile.can['update_laporan_cu']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah Laporan
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon mb-1" v-if="profile.can && profile.can['destroy_laporan_cu']" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus Laporan
				</button>

				<!-- detail-->
				<button @click.prevent="detailData(selectedItem.id,selectedItem.tp)" class="btn btn-light btn-icon mb-1" v-if="profile.can && profile.can['update_laporan_cu']" :disabled="!selectedItem.id">
					<i class="icon-file-stats"></i> Detail Laporan
				</button>

			</template>

      <template slot="button-mobile">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon btn-block mb-1" v-if="profile.can && profile.can['create_laporan_cu']">
					<i class="icon-plus3"></i> Tambah Laporan
				</router-link>

				<!-- ubah-->
				<button @click.prevent="ubahData(selectedItem.id,selectedItem.tp)" class="btn btn-light btn-icon btn-block mb-1" v-if="profile.can && profile.can['update_laporan_cu']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah Laporan
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon btn-block mb-1" v-if="profile.can && profile.can['destroy_laporan_cu']" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus Laporan
				</button>

				<!-- detail-->
				<button @click.prevent="detailData(selectedItem.id,selectedItem.tp)" class="btn btn-light btn-icon btn-block mb-1" v-if="profile.can && profile.can['update_laporan_cu']" :disabled="!selectedItem.id">
					<i class="icon-file-stats"></i> Detail Laporan
				</button>

			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 
					'bg-info': selectedItem.id === props.item.id, 
					'bg-warning' : props.item.periode < selectData && selectedItem.id !== props.item.id && idCu == 'semua' }"
				  class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide && !columnData[1].disable">
						<check-value :value="props.item.cu_name"></check-value>
					</td>
					<td v-if="!columnData[2].hide && !columnData[2].disable">
						<check-value :value="props.item.tp_name"></check-value>
					</td>
					<td v-if="!columnData[3].hide && !columnData[3].disable">
						<check-value :value="props.item.no_ba"></check-value>
					</td>
					<td v-if="!columnData[4].hide && !columnData[4].disable">
						<check-value :value="props.item.provinces_name"></check-value>
					</td>
					<td v-if="!columnData[5].hide">
						<span v-if="props.item.periode < selectData && idCu == 'semua'" class="label label-warning" v-tooltip:top="'Laporan ini bukanlah laporan periode ' + formatPeriode(selectData)"><i
							  class="icon-alert text-size-base"></i></span>
						&nbsp;
						{{ props.item.periode | dateMonth }}
					</td>
					<td v-if="!columnData[6].hide && !columnData[6].disable">
						<check-value :value="props.item.tp"></check-value>
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

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :color="modalColor" :button="modalButton" @tutup="modalTutup"
		  @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
			<template slot="modal-title">{{ modalTitle }}</template>
			<template slot="modal-body1">
				<div class="alert bg-info alert-styled-left mt-1 pt-1 pb-1">
					<p>Laporan ini merupakan laporan konsolidasi dari beberapa laporan di Tp. Oleh karena hal tersebut maka untuk
						melakukan perubahan pada laporan konsolidasi mesti melakukan perubahan pada laporan Tp yang dapat dipilih
						dibawah:</p>
				</div>
				<hr>

				<div class="row">
					<div class="col-md-6  pt-1 pb-1" v-for="laporanTp in listLaporanTpData">
						<a class="btn btn-light btn-block" @click.prevent="ubahLaporanTp(laporanTp.id)"><i class="icon-pencil5"></i>
							Ubah Laporan {{laporanTp.tp.name}}</a>
					</div>
				</div>

				<hr>
				<div class="text-center d-none d-md-block">
					<button type="button" @click.prevent="modalTutup" class="btn btn-light" v-tooltip:top="'Tutup'">
						<i class="icon-cross"></i> Tutup
					</button>
				</div>
				<div class="d-block d-md-none">
					<button type="button" @click.prevent="modalTutup" class="btn btn-light btn-block" v-tooltip:top="'Tutup'">
						<i class="icon-cross"></i> Tutup
					</button>
				</div>
			</template>
		</app-modal>

	</div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import DataViewer from "../../components/dataviewer2.vue";
import appModal from "../../components/modal";
import checkValue from "../../components/checkValue.vue";
import collapseButton from "../../components/collapseButton.vue";

export default {
  components: {
    DataViewer,
    appModal,
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
        limit: 50,
        page: 1
      },
      excelUrl:'',
      selectedItem: [],
      modalShow: false,
      modalState: "",
      modalTitle: "",
      modalColor: "",
      modalButton: ""
    };
  },
  created() {
    if (this.profileStat == "success") {
      this.fetch(this.query);
    }
  },
  watch: {
    // check route changes
    $route(to, from) {
      this.isFirstLoad = true;
      if (this.profileStat == "success") {
        this.fetch(this.query);
      }
    },

    profileStat(value) {
      if (value == "success") {
        this.checkProfile();
        if (this.itemDataStat != "success") {
          this.fetch(this.query);
        }
      }
    },

    // when updating data
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
    fetch(params) {
			this.checkProfile();
			
      if (this.$route.meta.mode == "periode") { // laporan cu with periode

        this.columnData[1].disable = false;
        this.columnData[3].disable = false;
        this.columnData[4].disable = false;
        this.columnData[5].disable = false;
        this.columnData[6].disable = false;
        this.columnData[2].disable = true;

        this.$store.dispatch(this.kelas + "/indexPeriode", [
          params,
          this.$route.params.periode
        ]);
        this.excelUrl = this.kelas + '/indexPeriode/' + this.$route.params.periode;

      } else if (this.$route.meta.mode == "cu") {
        
        this.columnData[5].disable = false;
        this.columnData[1].disable = true;
        this.columnData[2].disable = true;
        this.columnData[3].disable = true;
        this.columnData[4].disable = true;
        
        if (this.$route.params.tp == "konsolidasi") { //laporan cu konsolidasi per cu
          
          this.columnData[6].disable = false;

          this.$store.dispatch(this.kelas + "/indexCu", [
            params,
            this.$route.params.cu
          ]); 
          this.excelUrl = this.kelas + '/indexCu/' + this.$route.params.cu;

        } else { // laporan tp/kp per tp
          
          this.columnData[6].disable = true;

          this.$store.dispatch(this.kelas + "/indexTp", [
            params,
            this.$route.params.tp
          ]);
          this.excelUrl = 'laporanTp' + '/indexTp/' + this.$route.params.tp;

        }
      } else if (this.$route.meta.mode == "cuPeriode") { // laporan tp/kp semua tp

        this.columnData[5].disable = false;
        this.columnData[1].disable = true;
        this.columnData[2].disable = true;
        this.columnData[3].disable = true;
        this.columnData[4].disable = true;
        this.columnData[6].disable = true;

        this.$store.dispatch(this.kelas + "/indexTpPeriode", [
          params,
          this.$route.params.cu,
          this.$route.params.periode
        ]);
        this.excelUrl = 'laporanTp' + '/indexCu/' + this.$route.params.cu + '/' + this.$route.params.periode;

      } else { // laporan cu default

        this.columnData[1].disable = false;
        this.columnData[3].disable = false;
        this.columnData[4].disable = false;
        this.columnData[5].disable = false;
        this.columnData[6].disable = false;
        this.columnData[2].disable = true;

        this.$store.dispatch(this.kelas + "/index", params);
        this.excelUrl = this.kelas;

      }
    },
    checkProfile() {
      if (this.profile.id_cu != 0) {
        if (
          this.$route.meta.mode == "cu" ||
          this.$route.meta.mode == "cuPeriode"
        ) {
          if (this.profile.id_cu != this.$route.params.cu) {
            this.$router.push({
              name: "notFound"
            });
          }
        } else if (this.$route.meta.mode == "periode") {
          this.$router.push({
            name: "notFound"
          });
        } else {
          this.$router.push({
            name: "notFound"
          });
        }
      }
    },
    selectedRow(item) {
      this.selectedItem = item;
    },
    ubahData(id, tp) {
      if (tp) {
        if (tp.id) {
          this.ubahLaporanTp(id);
        } else {
          this.modalShow = true;
          this.modalState = "normal1";
          this.modalColor = "bg-primary";
          this.modalTitle = "Ubah Laporan Konsolidasi";
          this.$store.dispatch("laporanTp/listLaporanTp", [
            this.selectedItem.id_cu,
            this.selectedItem.periode
          ]);
        }
      } else {
        this.$router.push({
          name: this.kelas + "Edit",
          params: {
            id: id
          }
        });
      }
    },
    ubahLaporanTp(id, tp) {
      this.modalShow = false;
      this.$router.push({
        name: "laporanTpEdit",
        params: {
          id: id
        }
      });
    },
    detailData(id, tp) {
      if (tp && tp.id) {
        this.$router.push({
          name: "laporanTpDetail",
          params: {
            id: id
          }
        });
      } else {
        this.$router.push({
          name: "laporanCuDetail",
          params: {
            id: id
          }
        });
      }
    },
    modalConfirmOpen(source, isMobile, itemMobile) {
      this.modalShow = true;
      this.modalColor = "";
      this.modalState = "confirm-tutup";
      this.source = source;

      if (isMobile) {
        this.selectedItem = itemMobile;
      }

      if (source == "hapus") {
        this.modalTitle =
          "Hapus " + this.title + " " + this.selectedItem.name + " ?";
        this.modalButton = "Iya, Hapus";
      }
    },
    modalTutup() {
      this.modalShow = false;
      this.$store.dispatch(this.kelas + "/resetUpdateStat");
    },
    modalConfirmOk() {
      if (this.source == "hapus") {
        this.$store.dispatch(this.kelas + "/destroy", this.selectedItem.id);
      }
    },
    formatPeriode(value) {
      return Vue.filter("dateMonth")(value);
    }
  },
  computed: {
    ...mapGetters("user", {
      profile: "profile",
      profileStat: "profileStat"
    }),
    ...mapGetters("global", {
      idCu: "idCu",
      idTp: "idTp",
      selectData: "data"
    }),
    ...mapGetters("cu", {
      modelCU: "dataS",
      modelCUStat: "dataStatS"
    }),
    ...mapGetters("tp", {
      modelTp: "dataS",
      modelTpStat: "dataStatS"
    }),
    ...mapGetters("laporanCu", {
      itemData: "dataS",
      itemDataStat: "dataStatS",
      periodeData: "periode",
      periodeStat: "periodeStat",
      updateMessage: "update",
      updateStat: "updateStat"
    }),
    ...mapGetters("laporanTp", {
      listLaporanTpData: "data2S",
      listLaporanTpDataStat: "dataStat2S"
    })
  }
};
</script>