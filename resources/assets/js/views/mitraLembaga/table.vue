<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl" :isUploadExcel="false" @fetch="fetch">

			<!-- button desktop -->
			<template slot="button-desktop">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['create_mitra_lembaga']">
						<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- ubah-->
				<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light btn-icon mb-1"  v-if="currentUser.can && currentUser.can['update_mitra_lembaga']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['destroy_mitra_lembaga']" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

			</template>

			<!-- button mobile -->
			<template slot="button-mobile">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['create_mitra_lembaga']">
						<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- ubah-->
				<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['update_mitra_lembaga']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['destroy_mitra_lembaga']" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

			</template>

			<!-- item  -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td>
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<img :src="'/images/mitra_lembaga/' + props.item.gambar + 'n.jpg'" width="40" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
						<img :src="'/images/no_image.jpg'" width="40" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
          <td v-if="!columnData[3].hide">
						<check-value :value="props.item.bidang"></check-value>
					</td>
					<td v-if="!columnData[4].hide">
						<check-value :value="props.item.badan_hukum"></check-value>
					</td>
          <td v-if="!columnData[5].hide">
						<check-value :value="props.item.npwp"></check-value>
					</td>
          <td v-if="!columnData[6].hide">
						<check-value :value="props.item.penanggungjawab"></check-value>
					</td>
          <td v-if="!columnData[7].hide">
						<check-value :value="props.item.bentuk_kerjasama"></check-value>
					</td>
					<td v-if="!columnData[8].hide && !columnData[8].disable">
						<check-value :value="props.item.provinces.name" v-if="props.item.provinces"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[9].hide && !columnData[9].disable">
						<check-value :value="props.item.regencies.name" v-if="props.item.regencies"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[10].hide && !columnData[10].disable">
						<check-value :value="props.item.districts.name" v-if="props.item.districts"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[11].hide && !columnData[11].disable">
						<check-value :value="props.item.villages.name" v-if="props.item.villages"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[12].hide">
						<check-value :value="props.item.alamat"></check-value>
					</td>
					<td v-if="!columnData[13].hide">
						<check-value :value="props.item.website"></check-value>
					</td>
					<td v-if="!columnData[14].hide">
						<check-value :value="props.item.email"></check-value>
					</td>
					<td v-if="!columnData[15].hide">
						<check-value :value="props.item.telp"></check-value>
					</td>
					<td v-if="!columnData[16].hide">
						<check-value :value="props.item.hp"></check-value>
					</td>
					<td v-if="!columnData[17].hide">
						<check-value :value="props.item.pos"></check-value>
					</td>
					<td v-if="!columnData[18].hide" v-html="$options.filters.dateTime(props.item.created_at)"  class="text-nowrap"></td>
					<td v-if="!columnData[19].hide">
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
        order_column: "name",
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
          title: "Bidang",
          name: "bidang",
          tipe: "string",
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
          title: "Penanggung Jawab",
          name: "penanggungjawab",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Bentuk Kerjasama",
          name: "bentuk_kerjasama",
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
    ...mapGetters("mitraLembaga", {
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