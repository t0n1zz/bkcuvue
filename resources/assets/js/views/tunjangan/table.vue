<template>
  <div>
    <!-- main panel -->
    <data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat"
      :excelDownloadUrl="excelDownloadUrl" :isNoButtonRow="isNoButtonRow" :dataview="dataview" @fetch="fetch">
      <!-- button desktop -->
      <template slot="button-desktop">
        <!-- diklat bkcu button -->
        <template>
          <!-- tambah -->
          <router-link :to="{
            name: kelas + 'Create',
            params: { tipe: $route.params.tipe },
          }" class="btn btn-light mb-1">
            <i class="icon-plus3"></i> Tambah
          </router-link>

          <!-- ubah-->
          <button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light mb-1"
            v-if="currentUser.can" :disabled="!selectedItem.id">
            <i class="icon-pencil5"></i> Ubah
          </button>

          <!-- hapus -->
          <button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light mb-1"
            v-if="currentUser.can" :disabled="!selectedItem.id">
            <i class="icon-bin2"></i> Hapus
          </button>

          <!-- detail-->
          <button @click.prevent="detail(selectedItem.id)" class="btn btn-light mb-1"
            v-if="currentUser.can" :disabled="!selectedItem.id">
            <i class="icon-stack2"></i> Detail
          </button>

          <!-- detail-->
            <button @click.prevent="modalConfirmOpen('Setujui')" class="btn btn-light mb-1"
              v-if="currentUser.can['personalia_akses']" :disabled="!selectedItem.id || selectedItem.status">
              <i class="icon-check"></i> Setujui
            </button>

          <button @click.prevent="downloadSurat(selectedItem.id)" class="btn btn-light mb-1"
              :disabled="!selectedItem.id">
              <i class="icon-download"></i> Download Surat Pengajuan
          </button>

          <button @click.prevent="downloadSK(selectedItem.id)" class="btn btn-light mb-1"
                 :disabled="!selectedItem.id || selectedItem.status != 'disetujui'">
                <i class="icon-download"></i> Download SK
          </button>
        </template>
      </template>

      <!-- button mobile -->
      <template slot="button-mobile">
        <template>
            <!-- tambah -->
            <router-link :to="{
              name: kelas + 'Create',
              params: { tipe: $route.params.tipe },
            }" class="btn btn-light mb-1 btn-block">
              <i class="icon-plus3"></i> Tambah
            </router-link>

            <!-- ubah-->
            <button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light mb-1 btn-block"
              v-if="currentUser.can && currentUser.can['update_diklat_bkcu']" :disabled="!selectedItem.id">
              <i class="icon-pencil5"></i> Ubah
            </button>

            <!-- hapus -->
            <button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light mb-1 btn-block"
              v-if="currentUser.can && currentUser.can['destroy_diklat_bkcu']" :disabled="!selectedItem.id">
              <i class="icon-bin2"></i> Hapus
            </button>

            <!-- detail-->
            <button @click.prevent="detail(selectedItem.id)" class="btn btn-light mb-1 btn-block"
              v-if="currentUser.can && currentUser.can['index_diklat_bkcu']" :disabled="!selectedItem.id">
              <i class="icon-stack2"></i> Detail
            </button>

            <!-- detail-->
              <button @click.prevent="setujui(selectedItem.id)" class="btn btn-light mb-1 btn-block"
                v-if="currentUser.can && currentUser.can['personalia_akses']" :disabled="!selectedItem.id">
                <i class="icon-check"></i> Setujui
              </button>

            <button @click.prevent="downloadSurat(selectedItem.id)" class="btn btn-light mb-1 btn-block"
                :disabled="!selectedItem.id">
                <i class="icon-download"></i> Download Surat Pengajuan
            </button>

            <button @click.prevent="downloadSK(selectedItem.id)" class="btn btn-light mb-1 btn-block"
                   :disabled="!selectedItem.id || selectedItem.status != 'disetujui'">
                  <i class="icon-download"></i> Download SK
            </button>
          </template>
      </template>

      <!-- item desktop -->
      <template slot="item-desktop" slot-scope="props">
        <tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap"
          @click="selectedRow(props.item)">
        <td v-if="!columnData[0].hide">
  						{{ props.index + 1 + (+itemData.current_page - 1) * +itemData.per_page + '.' }}
  					</td>
  					<td v-if="!columnData[1].hide">
  						<check-value :value="props.item.aktivis.name"></check-value>
  					</td>
  					<td v-if="!columnData[2].hide">
  						<check-value :value="props.item.jenis"></check-value>
  					</td>
  					<td v-if="!columnData[3].hide">
  						<check-value :value="props.item.name"></check-value>
  					</td>
            <td v-if="!columnData[4].hide && props.item.status">
    						<check-value :value="props.item.status"></check-value>
    				</td>
            <td v-else>
      						<check-value :value="'Menunggu'"></check-value>
      			</td>
  					<td v-if="!columnData[5].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
  					<td v-if="!columnData[6].hide">
  						<span v-if="props.item.created_at !== props.item.updated_at"
  							v-html="$options.filters.dateTime(props.item.updated_at)"></span>
  						<span v-else>-</span>
  					</td>
        </tr>
      </template>
    </data-viewer>

    <!-- modal -->
    <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize"
  			:color="modalColor" @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup"
  			@failOk="modalTutup" @backgroundClick="modalBackgroundClick">
      <!-- title -->
      <template slot="modal-title">
        {{ modalTitle }}
      </template>

      <!-- status -->
      <template slot="modal-body1">
        <form-status :kelas="kelas" :id="selectedItem.id" :status="selectedItem.status"
          :keteranganBatal="selectedItem.keteranganBatal" @tutup="modalTutup"></form-status>
      </template>

      <!-- keteranganBatal -->
      <template slot="modal-body2">
        <h5>Penjelasan pembatalan diklat</h5>
        <div class="card">
          <div class="card-body">
            {{ keteranganBatal }}
          </div>
        </div>

        <!-- divider -->
        <hr />

        <!-- tombol desktop-->
        <div class="text-center d-none d-md-block">
          <button class="btn btn-light" @click.prevent="modalTutup">
            <i class="icon-cross"></i> Tutup
          </button>
        </div>

        <!-- tombol mobile-->
        <div class="d-block d-md-none">
          <button class="btn btn-light btn-block pb-2" @click.prevent="modalTutup">
            <i class="icon-cross"></i> Tutup
          </button>
        </div>
      </template>
    </app-modal>
  </div>
</template>

<script>
import _ from "lodash";
import { mapGetters } from "vuex";
import DataViewer from "../../components/dataviewer2.vue";
import appModal from "../../components/modal";
import checkValue from "../../components/checkValue.vue";
import FileSaver from 'file-saver';

export default {
  components: {
    DataViewer,
    appModal,
    checkValue,
    FileSaver
  },
  props: ["title", "kelas"],
  data () {
    return {
      selectedItem: [],
      query: {
        order_column: "created_at",
        order_direction: "asc",
        filter_match: "and",
        limit: 10,
        page: 1,
      },
      dataview: "",
      isNoButtonRow: "",
      excelDownloadUrl: "",
      columnData: [
        {
          title: "No.",
          name: "No.",
        },
        {
          title: "Nama Aktivis",
          name: "aktivis.name",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true,
          filterDefault: true
        },
        {
          title: "Jenis Tunjangan",
          name: "jenis",
          tipe: "string",
          sort: false,
          hide: false,
          disable: false,
        },
        {
          title: "Nama",
          name: "name",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true,
        },
        {
          title: "Status",
          name: "status",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
        },
        {
          title: "Tgl. / Waktu Buat",
          name: "created_at",
          tipe: "datetime",
          sort: true,
          hide: false,
          disable: false,
        },
        {
          title: "Tgl. / Waktu Ubah",
          name: "updated_at",
          tipe: "datetime",
          sort: true,
          hide: false,
          disable: false,
        },
      ],
      keteranganBatal: "",
      state: "",
      modalShow: false,
      modalState: "",
      modalColor: "",
      modalTitle: "",
      modalContent: "",
      modalButton: "",
      modalSize:""
    };
  },
  created () {
    this.fetch(this.query);
  },
  watch: {
    $route (to, from) {
      // check current page meta
      this.fetch(this.query);
    },

    updateStat (value) {
      this.modalState = value;
      this.modalButton = "Ok";

      if (value === "success") {
        this.modalTitle = this.updateMessage.message;
        this.modalContent = "";
        this.fetch(this.query);
        this.selectedItem = []
      } else if (value === "fail") {
        this.modalContent = this.updateMessage;
      } else {
        this.modalContent = "";
      }
    },
  },
  methods: {
    fetch (params) {
      if (this.currentUser.id_cu == 0) {
        this.dataview = "list";
        this.isNoButtonRow = false;
      } else {
        this.dataview = "grid";
        this.isNoButtonRow = true;
        this.query.limit = 15;
      }

      // if (this.$route.params.periode == "semua") {
          this.$store.dispatch(this.kelas + "/index", [
            params,this.currentUser.id_cu,
            this.$route.params.jenis,
          ]);
          this.excelDownloadUrl = this.kelas;

      // }
    },

    downloadSK (id) { 
      this.modalState = 'loading'
      this.modalShow = true
      axios.post('/api/downloadSkTunjangan', { id: id }, {
        responseType: 'blob'
      }).then((response) => {
        FileSaver.saveAs(response.data, 'SK Tunjangan Keluarga.pdf')
        this.modalState = 'success';
        this.modalTitle = 'Berhasil Di Download'
      })
    },

    downloadSurat (id) { 
      this.modalState = 'loading'
      this.modalShow = true
      axios.post('/api/downloadSuratPengajuanTunjangan', { id: id }, {
        responseType: 'blob'
      }).then((response) => {
        FileSaver.saveAs(response.data, 'Surat Pengajuan Tunjangan.pdf')
        this.modalState = 'success';
        this.modalTitle = 'Berhasil Di Download'
      })
    },

    selectedRow (item) {
      this.selectedItem = item;
    },
    ubahData (id) {
      this.$router.push({ name: this.kelas + "Edit", params: { id: id } });
    },
    detail (id) {
      this.$router.push({ name: this.kelas + "Detail", params: { id: id } });
    },

    modalConfirmOpen (state, isMobile, itemMobile) {
      this.modalShow = true;
      this.state = state;

      if (isMobile) {
        this.selectedItem = itemMobile;
      }

      if (state == "hapus") {
        this.modalState = "confirm-tutup";
        this.modalTitle =
          "Hapus " + this.title + " " + this.selectedItem.name + " ini?";
        this.modalButton = "Iya, Hapus";
        this.modalColor = "";
      } else if (state == "status") {
        this.modalState = "normal1";
        this.modalTitle =
          "Ubah status " + this.title + " " + this.selectedItem.name + " ini?";
        this.modalColor = "bg-primary";
      } else if (state == "keteranganBatal") {
        this.modalState = "normal2";
        this.modalTitle =
          "Keterangan pembatalan " + this.title + " " + this.selectedItem.name;
        this.modalColor = "bg-primary";
        this.keteranganBatal = this.selectedItem.keteranganBatal;
      } else if (state = 'Setujui') { 
        this.modalState = "confirm-tutup";
        this.modalTitle = state + ' tunjangan atas nama' + " " + this.selectedItem.name + "?";
        this.modalButton = "Setujui";
        this.modalColor = "";
      }
    },
    modalKeteranganBatalOpen (value) {
      this.modalShow = true;
      this.modalState = "normal2";
      this.modalTitle =
        "Keterangan pembatalan " + this.title + " " + this.selectedItem.name;
      this.modalColor = "bg-primary";
      this.keteranganBatal = value;
    },
    modalTutup () {
      this.modalShow = false;
    },


    modalConfirmOk () {
      if (this.state == "hapus") {
        this.$store.dispatch(this.kelas + "/destroy", this.selectedItem.id);
      } else if (this.state == 'Setujui') { 
        this.$store.dispatch('tunjangan/verifikasiTunjangan', [this.currentUser.id, this.selectedItem.id]);
      }
    },
    modalBackgroundClick () {
      if (this.modalState === 'success') {
        this.modalTutup;
      } else if (this.modalState === 'loading') {
        // do nothing
      } else {
        this.modalShow = false
      }
    },
  },
  computed: {
    ...mapGetters("auth", {
      currentUser: "currentUser",
    }),
    ...mapGetters("tunjangan", {
      itemData:"dataS",
      itemDataStat:'dataStatS',
      updateMessage: "update",
      updateStat: "updateStat",
    }),
  },
};
</script>
