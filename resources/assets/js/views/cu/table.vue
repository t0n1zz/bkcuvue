<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl" :isUploadExcel="false" @fetch="fetch">

			<!-- button desktop -->
			<template slot="button-desktop">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['create_' + kelas]">
						<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- ubah-->
				<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light btn-icon mb-1"  v-if="currentUser.can && currentUser.can['update_' + kelas]" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['destroy_' + kelas]" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

				<!-- lihat tpcu -->
				<button @click.prevent="lihatTpCu(selectedItem.id)" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['index_tp']" :disabled="!selectedItem.id || selectedItem.has_tp_cu_count === 0">
					<i class="icon-file-eye"></i> Lihat TP/KP 
				</button>
			</template>

			<!-- button mobile -->
			<template slot="button-mobile">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['create_' + kelas]">
						<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- ubah-->
				<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['update_' + kelas]" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['destroy_' + kelas]" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

				<!-- lihat tpcu -->
				<button @click.prevent="lihatTpCu(selectedItem.id)" class="btn btn-light btn-icon btn-block pb-1" :disabled="!selectedItem.id || selectedItem.has_tp_cu_count === 0" v-if="currentUser.can && currentUser.can['index_tp']">
					<i class="icon-file-eye"></i> Lihat TP/KP 
				</button>
			</template>

			<!-- item  -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td>
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<img :src="'/images/' + kelas + '/' + props.item.gambar + 'n.jpg'" width="40" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
						<img :src="'/images/no_image.jpg'" width="40" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
          <td v-if="!columnData[2].hide">
						<img :src="'/images/logo/' + props.item.logo + 'n.jpg'" width="40" class="img-rounded img-fluid wmin-sm" v-if="props.item.logo">
						<img :src="'/images/no_image.jpg'" width="40" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
					<td v-if="!columnData[3].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
          <td v-if="!columnData[4].hide">
						<check-value :value="props.item.name_legal"></check-value>
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.no_ba"></check-value>
					</td>
					<td v-if="!columnData[6].hide">
						<check-value :value="props.item.has_tp_count"></check-value>
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.has_manajemen_count"></check-value>
					</td>
					<td v-if="!columnData[8].hide">
						<check-value :value="props.item.has_pengurus_count"></check-value>
					</td>
					<td v-if="!columnData[9].hide">
						<check-value :value="props.item.has_pengawas_count"></check-value>
					</td>
					<td v-if="!columnData[10].hide">
						<check-value :value="props.item.has_komite_count"></check-value>
					</td>
					<td v-if="!columnData[11].hide">
						<check-value :value="props.item.has_penasihat_count"></check-value>
					</td>
					<td v-if="!columnData[12].hide">
						<check-value :value="props.item.has_kolektor_count"></check-value>
					</td>
					<td v-if="!columnData[13].hide">
						<check-value :value="props.item.has_kelompok_inti_count"></check-value>
					</td>
					<td v-if="!columnData[14].hide">
						<check-value :value="props.item.has_senior_manajer_count"></check-value>
					</td>
					<td v-if="!columnData[15].hide">
						<check-value :value="props.item.has_manajer_count"></check-value>
					</td>
					<td v-if="!columnData[16].hide">
						<check-value :value="props.item.has_supervisor_count"></check-value>
					</td>
					<td v-if="!columnData[17].hide">
						<check-value :value="props.item.has_staf_count"></check-value>
					</td>
					<td v-if="!columnData[18].hide">
						<check-value :value="props.item.has_kontrak_count"></check-value>
					</td>
					<td v-if="!columnData[19].hide">
						<check-value :value="props.item.has_aktivis_tidak_aktif_count"></check-value>
					</td>
					<td v-if="!columnData[20].hide">
						<check-value :value="props.item.has_simpanan_count"></check-value>
					</td>
					<td v-if="!columnData[21].hide">
						<check-value :value="props.item.has_pinjaman_count"></check-value>
					</td>
					<td v-if="!columnData[22].hide">
						<check-value :value="props.item.has_simpanan_jalinan_count"></check-value>
					</td>
					<td v-if="!columnData[23].hide">
						<check-value :value="props.item.has_pinjaman_jalinan_count"></check-value>
					</td>
					<td v-if="!columnData[24].hide">
						<check-value :value="props.item.has_user_count"></check-value>
					</td>
					<td v-if="!columnData[25].hide">
						<check-value :value="props.item.has_artikel_count"></check-value>
					</td>
					<td v-if="!columnData[26].hide">
						<check-value :value="props.item.has_anggota_cu_count"></check-value>
					</td>
					<td v-if="!columnData[27].hide">
						<check-value :value="props.item.badan_hukum"></check-value>
					</td>
          <td v-if="!columnData[28].hide">
						<check-value :value="props.item.npwp"></check-value>
					</td>
          <td v-if="!columnData[29].hide">
						<check-value :value="props.item.nik"></check-value>
					</td>
          <td v-if="!columnData[30].hide">
						<check-value :value="props.item.situ"></check-value>
					</td>
          <td v-if="!columnData[31].hide">
						<check-value :value="props.item.siusp"></check-value>
					</td>
          <td v-if="!columnData[32].hide">
						<check-value :value="props.item.izin_operasional"></check-value>
					</td>
					<td v-if="!columnData[33].hide">
						<check-value :value="props.item.provinces.name" v-if="props.item.provinces"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[34].hide">
						<check-value :value="props.item.regencies.name" v-if="props.item.regencies"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[35].hide">
						<check-value :value="props.item.districts.name" v-if="props.item.districts"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[36].hide">
						<check-value :value="props.item.villages.name" v-if="props.item.villages"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[37].hide">
						<check-value :value="props.item.alamat"></check-value>
					</td>
					<td v-if="!columnData[38].hide">
						<check-value :value="props.item.app"></check-value>
					</td>
					<td v-if="!columnData[39].hide" v-html="$options.filters.date(props.item.ultah)"></td>
					<td v-if="!columnData[40].hide" v-html="$options.filters.date(props.item.bergabung)"></td>
					<td v-if="!columnData[41].hide">
						<check-value :value="props.item.website"></check-value>
					</td>
					<td v-if="!columnData[42].hide">
						<check-value :value="props.item.email"></check-value>
					</td>
					<td v-if="!columnData[43].hide">
						<check-value :value="props.item.telp"></check-value>
					</td>
					<td v-if="!columnData[44].hide">
						<check-value :value="props.item.hp"></check-value>
					</td>
					<td v-if="!columnData[45].hide">
						<check-value :value="props.item.pos"></check-value>
					</td>
					<td v-if="!columnData[46].hide" v-html="$options.filters.dateTime(props.item.created_at)"  class="text-nowrap"></td>
					<td v-if="!columnData[47].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

		</data-viewer>
					
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" :content="modalContent" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
		</app-modal>

	</div>
</template>

<script>
import _ from "lodash";
import { mapGetters } from "vuex";
import DataViewer from "../../components/dataviewer2.vue";
import appModal from "../../components/modal";
import collapseButton from "../../components/collapseButton.vue";
import checkValue from "../../components/checkValue.vue";

export default {
  components: {
    DataViewer,
    appModal,
    collapseButton,
    checkValue
  },
  props: ["title", "kelas"],
  data() {
    return {
      selectedItem: [],
      query: {
        order_column: "no_ba",
        order_direction: "asc",
        filter_match: "and",
        limit: 10,
        page: 1
      },
      excelDownloadUrl: '',
      columnData: [
        {
          title: "No.",
          name: "No."
        },
        {
          title: "Foto",
          name: "gambar",
          hide: false,
        },
        {
          title: "Logo",
          name: "logo",
          hide: false,
        },
        {
          title: "Nama",
          name: "name",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true,
          filterDefault: true
        },
        {
          title: "Nama Legal",
          name: "name_legal",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true,
          filterDefault: true
        },
        {
          title: "No. BA",
          name: "no_ba",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh TP/KP",
          name: "has_tp_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Manajemen",
          name: "has_manajemen_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Pengurus",
          name: "has_pengurus_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Pengawas",
          name: "has_pengawas_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Komite",
          name: "has_komite_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Penasihat",
          name: "has_penasihat_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Kolektor",
          name: "has_kolektor_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Kelompok Inti",
          name: "has_kelompok_inti_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Senior Manajer",
          name: "has_senior_manajer_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Manajer",
          name: "has_manajer_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Supervisor",
          name: "has_supervisor_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Staf",
          name: "has_staf_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Kontrak",
          name: "has_kontrak_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Aktivis Tidak Aktif",
          name: "has_aktivis_tidak_aktif_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Simpanan",
          name: "has_simpanan_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Pinjaman",
          name: "has_pinjaman_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Simpanan Jalinan",
          name: "has_simpanan_jalinan_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Pinjaman Jalinan",
          name: "has_pinjaman_jalinan_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh User SIMO",
          name: "has_user_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Artikel",
          name: "has_artikel_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jmlh Anggota CU",
          name: "has_anggota_cu_count",
          tipe: "numeric",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Badan Hukum",
          name: "badan_hukum",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "NPWP",
          name: "npwp",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "NIK",
          name: "nik",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "SITU",
          name: "situ",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "SIUSP",
          name: "siusp",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Izin Operasional",
          name: "izin_operasional",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Provinsi",
          name: "provinces.name",
          tipe: "string",
          sort: false,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Kabupaten/Kota",
          name: "regencies.name",
          tipe: "string",
          sort: false,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Kecamatan",
          name: "districts.name",
          tipe: "string",
          sort: false,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Kelurahan",
          name: "villages.name",
          tipe: "string",
          sort: false,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Alamat",
          name: "alamat",
          tipe: "string",
          sort: false,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Aplikasi",
          name: "app",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Tgl. Berdiri",
          name: "ultah",
          tipe: "datetime",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Tgl. Bergabung",
          name: "bergabung",
          tipe: "datetime",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Website",
          name: "website",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "E-mail",
          name: "email",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "No. Telp",
          name: "telp",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "No. Hp",
          name: "hp",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Kode Pos",
          name: "pos",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Tgl. / Waktu Buat",
          name: "created_at",
          tipe: "datetime",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Tgl. / Waktu Ubah",
          name: "updated_at",
          tipe: "datetime",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        }
      ],
      state: '',
      modalShow: false,
      modalState: "",
      modalTitle: "",
      modalContent: "",
      modalButton: ""
    };
  },
  created() {
    this.fetch(this.query);
  },
  watch: {
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
      this.$store.dispatch(this.kelas + "/index", params);
      this.excelDownloadUrl = this.kelas;
    },
    selectedRow(item) {
      this.selectedItem = item;
    },
    ubahData(id) {
      this.$router.push({ name: this.kelas + "Edit", params: { id: id } });
    },
    lihatTpCu(id_cu) {
      this.$router.push({ name: "tpCu", params: { cu: id_cu } });
    },
    modalConfirmOpen(state, isMobile, itemMobile) {
      this.modalShow = true;
      this.modalState = "confirm-tutup";
      this.state = state;

      if (isMobile) {
        this.selectedItem = itemMobile;
      }

      if (state == "hapus") {
        this.modalTitle =
          "Hapus " + this.title + " " + this.selectedItem.name + " ini?";
        this.modalButton = "Iya, Hapus";
      }
    },
    modalTutup() {
      this.modalShow = false;
      this.$store.dispatch(this.kelas + "/resetUpdateStat");
    },
    modalConfirmOk() {
      if (this.state == "hapus") {
        this.$store.dispatch(this.kelas + "/destroy", this.selectedItem.id);
      }
    }
  },
  computed: {
    ...mapGetters("cu", {
      itemData: "dataS",
      itemDataStat: "dataStatS",
      updateMessage: "update",
      updateStat: "updateStat"
    }),
    ...mapGetters("auth", {
      currentUser: "currentUser"
    })
  }
};
</script>