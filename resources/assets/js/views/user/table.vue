<template>
  <div>
    <!-- main panel -->
    <data-viewer
      :title="title"
      :kelas="kelas"
      :columnData="columnData"
      :itemData="itemData"
      :query="query"
      :itemDataStat="itemDataStat"
      :excelDownloadUrl="excelDownloadUrl"
      :isUploadExcel="false"
      @fetch="fetch"
    >
      <!-- desktop -->
      <!-- button desktop -->
      <template slot="button-desktop">
        <!-- tambah -->
        <router-link
          :to="{ name: kelas + 'Create'}"
          class="btn btn-light mb-1"
          v-if="currentUser.can && currentUser.can['create_' + kelas]"
        >
          <i class="icon-plus3"></i> Tambah
        </router-link>

        <!-- ubah-->
        <button
          @click.prevent="modalOpen('tipe')"
          class="btn btn-light mb-1"
          v-if="currentUser.can && currentUser.can['update_' + kelas]"
          :disabled="!selectedItem.id"
        >
          <i class="icon-pencil5"></i> Ubah Data Aktivis
        </button>

        <!-- hapus -->
        <button
          @click.prevent="modalOpen('hapus')"
          class="btn btn-light mb-1"
          v-if="currentUser.can && currentUser.can['destroy_' + kelas]"
          :disabled="!selectedItem.id"
        >
          <i class="icon-bin2"></i> Hapus
        </button>

        <!-- reset password -->
        <button
          @click.prevent="modalOpen('resetPassword')"
          class="btn btn-light mb-1"
          v-if="currentUser.can && currentUser.can['reset_password']"
          :disabled="!selectedItem.id"
        >
          <i class="icon-history"></i> Reset Password
        </button>

        <!-- aktifkan -->
        <button
          @click.prevent="modalOpen('updateStatus')"
          class="btn btn-light mb-1"
          v-if="currentUser.can && currentUser.can['status_' + kelas]"
          :disabled="!selectedItem.id"
        >
          <i class="icon-user-check"></i>
          <span v-if="selectedItem.status == 1">Tidak Aktifkan</span>
          <span v-else-if="selectedItem.status == 0">Aktifkan</span>
          <span v-else>Status</span>
        </button>

        <!-- hak akses -->
        <button
          @click.prevent="modalOpen('akses')"
          class="btn btn-light mb-1"
          v-if="currentUser.can && currentUser.can['hak_akses_' + kelas]"
          :disabled="!selectedItem.id"
        >
          <i class="icon-key"></i> Hak Akses
        </button>

        <!-- aktivitas-->
        <button
          @click.prevent="aktivitas(selectedItem.id)"
          class="btn btn-light mb-1"
          :disabled="!selectedItem.id"
        >
          <i class="icon-eye2"></i> Aktivitas
        </button>
      </template>

      <!-- button mobile -->
      <template slot="button-mobile">
        <!-- tambah -->
        <router-link
          :to="{ name: kelas + 'Create'}"
          class="btn btn-light btn-block mb-1"
          v-if="currentUser.can && currentUser.can['create_' + kelas]"
        >
          <i class="icon-plus3"></i> Tambah
        </router-link>

        <!-- ubah-->
        <button
          @click.prevent="modalOpen('tipe')"
          class="btn btn-light btn-block mb-1"
          v-if="currentUser.can && currentUser.can['update_' + kelas]"
          :disabled="!selectedItem.id"
        >
          <i class="icon-pencil5"></i> Ubah Data Aktivis
        </button>

        <!-- hapus -->
        <button
          @click.prevent="modalOpen('hapus')"
          class="btn btn-light btn-block mb-1"
          v-if="currentUser.can && currentUser.can['destroy_' + kelas]"
          :disabled="!selectedItem.id"
        >
          <i class="icon-bin2"></i> Hapus
        </button>

        <!-- reset password -->
        <button
          @click.prevent="modalOpen('resetPassword')"
          class="btn btn-light btn-block mb-1"
          v-if="currentUser.can && currentUser.can['reset_password']"
          :disabled="!selectedItem.id"
        >
          <i class="icon-history"></i> Reset Password
        </button>

        <!-- aktifkan -->
        <button
          @click.prevent="modalOpen('updateStatus')"
          class="btn btn-light btn-block mb-1"
          v-if="currentUser.can && currentUser.can['status_' + kelas]"
          :disabled="!selectedItem.id"
        >
          <i class="icon-user-check"></i>
          <span v-if="selectedItem.status == 1">Tidak Aktifkan</span>
          <span v-else-if="selectedItem.status == 0">Aktifkan</span>
          <span v-else>Status</span>
        </button>

        <!-- hak akses -->
        <button
          @click.prevent="modalOpen('akses')"
          class="btn btn-light btn-block mb-1"
          v-if="currentUser.can && currentUser.can['hak_akses_' + kelas]"
          :disabled="!selectedItem.id"
        >
          <i class="icon-key"></i> Hak Akses
        </button>

        <!-- aktivitas-->
        <button
          @click.prevent="aktivitas(selectedItem.id)"
          class="btn btn-light btn-block mb-1"
          :disabled="!selectedItem.id"
        >
          <i class="icon-eye2"></i> Aktivitas
        </button>
      </template>

      <!-- item desktop -->
      <template slot="item-desktop" slot-scope="props">
        <tr
          :class="{ 'bg-info': selectedItem.id === props.item.id }"
          @click="selectedRow(props.item)"
        >
          <td>{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}</td>
          <td v-if="!columnData[1].hide">
            <img
              :src="'/images/aktivis/' + props.item.aktivis.gambar + '.jpg'"
              class="img-rounded img-fluid wmin-sm"
              width="40"
              v-if="props.item.aktivis && props.item.aktivis.gambar"
            />
            <img
              :src="'/images/no_image_man.jpg'"
              class="img-rounded img-fluid wmin-sm"
              width="40"
              v-else
            />
          </td>
          <td v-if="!columnData[2].hide">
            <check-value :value="props.item.username"></check-value>
          </td>
          <td v-if="!columnData[3].hide">
            <check-value :value="props.item.aktivis.name" v-if="props.item.aktivis"></check-value>
            <span v-else>-</span>
          </td>
          <td v-if="!columnData[4].hide">
            <check-value :value="props.item.aktivis.email" v-if="props.item.aktivis"></check-value>
            <span v-else>-</span>
          </td>
          <td v-if="!columnData[5].hide && !columnData[5].disable">
            <span v-if="props.item.cu">{{props.item.cu.name}}</span>
            <span v-else>Puskopdit BKCU Kalimantan</span>
          </td>
          <td v-if="!columnData[6].hide">
            <span v-if="props.item.aktivis && props.item.aktivis.pekerjaan_aktif" v-html="$options.filters.checkTingkatAktivis(props.item.aktivis.pekerjaan_aktif.tingkat)"></span>
            <span v-else>-</span>
					</td>
          <td v-if="!columnData[7].hide">
            <check-value :value="props.item.aktivis.pekerjaan_aktif.name" v-if="props.item.aktivis && props.item.aktivis.pekerjaan_aktif"></check-value>
            <span v-else>-</span>
					</td>
          <td v-if="!columnData[8].hide" v-html="$options.filters.checkStatus(props.item.status)"></td>
          <td
            v-if="!columnData[9].hide"
            class="text-nowrap"
            v-html="$options.filters.dateTime(props.item.login)"
          ></td>
          <td
            v-if="!columnData[10].hide"
            class="text-nowrap"
            v-html="$options.filters.dateTime(props.item.created_at)"
          ></td>
          <td v-if="!columnData[11].hide">
            <span
              v-if="props.item.created_at !== props.item.updated_at"
              v-html="$options.filters.dateTime(props.item.updated_at)"
            ></span>
            <span v-else>-</span>
          </td>
        </tr>
      </template>
    </data-viewer>

    <!-- modal -->
    <app-modal
      :show="modalShow"
      :state="modalState"
      :size="modalSize"
      :color="modalColor"
      :title="modalTitle"
      :content="modalContent"
      :button="modalButton"
      @tutup="modalTutup"
      @confirmOk="modalConfirmOk"
      @successOk="modalTutup"
      @failOk="modalTutup"
      @backgroundClick="modalTutup"
    >
      <!-- title -->
      <template slot="modal-title">{{ modalTitle }}</template>

      <!-- hak akses -->
      <template slot="modal-body1">

        <!-- identitas -->
        <div class="card">
          <div class="card-body">
            <div class="media flex-column flex-sm-row mt-0 mb-3">
              <div class="mr-sm-3 mb-2 mb-sm-0">
                <img :src="'/images/aktivis/' + selectedItem.aktivis.gambar + '.jpg'" class="img-fluid img-preview rounded" v-if="selectedItem.aktivis && selectedItem.aktivis.gambar" >
                <img :src="'/images/no_image_man.jpg'" class="img-fluid img-preview rounded" v-else>
              </div>

              <div class="media-body">
                <div class="row">
                  <div class="col-sm-6">
                    <ul class="list list-unstyled mb-0">
                      <li><b>Username:</b> {{ selectedItem.username }}</li>
                      <li><b>Nama:</b> {{ selectedItem.aktivis? selectedItem.aktivis.name : '-' }}</li>
                      <li><b>Email:</b> {{ selectedItem.aktivis? selectedItem.aktivis.email : '-' }}</li>
                      <li><b>CU:</b> {{ selectedItem.cu ? selectedItem.cu.name : 'Puskopdit BKCU Kalimantan' }}</li>
                      <li><b>Tingkat:</b> 
                        <span v-if="selectedItem.aktivis && selectedItem.aktivis.pekerjaan_aktif" v-html="$options.filters.checkTingkatAktivis(selectedItem.aktivis.pekerjaan_aktif.tingkat)"></span>
                        <span v-else>-</span>
                      </li>
                      <li><b>Jabatan:</b>
                        <check-value :value="selectedItem.aktivis.pekerjaan_aktif.name" v-if="selectedItem.aktivis && selectedItem.aktivis.pekerjaan_aktif"></check-value>
                        <span v-else>-</span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-6">
                    <ul class="list list-unstyled mb-0">
                      <li><b>Status:</b> 
                        <span v-if="selectedItem.status > 0"> Aktif</span>
                        <span v-else> Tidak Aktif</span>
                      </li>
                      <li><b>Login:</b> <span v-html="$options.filters.dateTime(selectedItem.login)"></span></li>
                      <li><b>Tgl. Buat:</b> <span v-html="$options.filters.dateTime(selectedItem.created_at)"></span></li>
                      <li><b>Tgl. Ubah:</b> <span v-html="$options.filters.dateTime(selectedItem.updated_at)"></span></li>
                    </ul>
                  </div>
                </div>
                
              </div>

            </div>
          </div>
        </div>

        <!-- hak-akses -->
        <hak-akses-form
          :selectedItem="selectedItem"
          :form="modalHakAksesForm"
          :tipeUser="tipeUser"
          :data-stat="hakAksesStat"
          :isPeran="false"
          @hakForm="hakForm"
        ></hak-akses-form>

        <!-- divider -->
        <hr />

        <!-- tombol desktop-->
        <div class="text-center d-none d-md-block">
          <button class="btn btn-light" @click="modalTutup">
            <i class="icon-cross"></i> Tutup
          </button>

          <button type="submit" class="btn btn-primary" @click="modalConfirmOk">
            <i class="icon-floppy-disk"></i> Simpan
          </button>
        </div>

        <!-- tombol mobile-->
        <div class="d-block d-md-none">
          <button class="btn btn-light btn-block pb-2" @click="modalTutup">
            <i class="icon-cross"></i> Tutup
          </button>

          <button type="submit" class="btn btn-primary btn-block pb-2" @click="modalConfirmOk">
            <i class="icon-floppy-disk"></i> Simpan
          </button>
        </div>
      </template>

      <!-- aktivis -->
      <template slot="modal-body2">
        <form-tipe :selected="selectedItem" @tutup="modalTutup"></form-tipe>
      </template>

    </app-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
import DataViewer from "../../components/dataviewer2.vue";
import appModal from "../../components/modal";
import hakAksesForm from "../../components/hakAkses.vue";
import formTipe from "./formTipe.vue";
import checkValue from '../../components/checkValue.vue';

export default {
  components: {
    DataViewer,
    appModal,
    hakAksesForm,
    formTipe,
    checkValue,
  },
  props: ["title", "kelas"],
  data() {
    return {
      selectedItem: [],
      query: {
        order_column: "login",
        order_direction: "desc",
        filter_match: "and",
        limit: 10,
        page: 1
      },
      excelDownloadUrl: "",
      columnData: [
        {
          title: "No.",
          name: "No."
        },
        {
          title: "Foto",
          name: "aktivis.gambar",
          hide: false
        },
        {
          title: "Username",
          name: "username",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true,
          filterDefault: true
        },
        {
          title: "Nama",
          name: "aktivis.name",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "E-mail",
          name: "aktivis.email",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "CU",
          name: "cu.name",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Tingkat",
          name: "aktivis.pekerjaan_aktif.tingkat",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Jabatan",
          name: "aktivis.pekerjaan_aktif.name",
          tipe: "string",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Status",
          name: "status",
          sort: true,
          hide: false,
          disable: false
        },
        {
          title: "Login",
          name: "login",
          tipe: "datetime",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Tgl. Buat",
          name: "created_at",
          tipe: "datetime",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        },
        {
          title: "Tgl. Ubah",
          name: "updated_at",
          tipe: "datetime",
          sort: true,
          hide: false,
          disable: false,
          filter: true
        }
      ],
      tipeUser: "",
      modalHakAksesForm: [],
      state: "",
      modalShow: false,
      modalState: "",
      modalColor: "",
      modalSize: "",
      modalTitle: "",
      modalButton: "",
      modalContent: ""
    };
  },
  created() {
    this.fetch(this.query);
  },
  watch: {
    // check route changes
    $route(to, from) {
      this.fetch(this.query);
    },

    // when updating data
    updateStat(value) {
      this.modalState = value;
      this.modalButton = "Ok";

      if (value == "success") {
        this.modalTitle = this.updateMessage.message;
        this.modalContent = "";
        this.fetch(this.query);
        this.selectedItem = [];
      } else if (value == "fail") {
        this.modalContent = this.updateMessage;
      } else {
        this.modalContent = "";
      }
    },
    hakAksesStat(value) {
      if (value == "success") {
        let newData = [];

        if (this.hakAkses.length > 0) {
          this.hakAkses.forEach(e => {
            newData.push(e.name);
          });
        }

        this.modalHakAksesForm = newData;
      }
    }
  },
  methods: {
    fetch(params) {
      if (this.$route.params.cu == "semua") {
        this.disableColumnCu(false);
        this.$store.dispatch(this.kelas + "/index", params);
        this.excelDownloadUrl = this.kelas;
      } else {
        this.disableColumnCu(true);
        this.$store.dispatch(this.kelas + "/indexCu", [
          params,
          this.$route.params.cu
        ]);
        this.excelDownloadUrl =
          this.kelas + "/indexCu/" + this.$route.params.cu;
      }
    },
    disableColumnCu(status) {
      this.columnData[5].disable = status;
    },
    selectedRow(item) {
      this.selectedItem = item;
    },
    ubahData(id) {
      this.$router.push("/" + this.kelas + "/edit/" + id);
    },
    aktivitas(id) {
      this.$router.push("/" + this.kelas + "/aktivitas/" + id);
    },
    hakForm(value) {
      this.modalHakAksesForm = value;
    },
    modalOpen(state) {
      this.modalShow = true;

      this.state = state;

      if (state == "hapus") {
        this.modalSize = "";
        this.modalState = "confirm-tutup";
        this.modalTitle =
          "Hapus " +
          this.kelas +
          " dengan username " +
          this.selectedItem.username +
          "?";
        this.modalButton = "Iya, Hapus";
      } else if (state == "resetPassword") {
        this.modalSize = "";
        this.modalState = "confirm-tutup";
        this.modalTitle =
          "Reset password user  " + this.selectedItem.username + " ini?";
        this.modalButton = "Iya, reset password";
      } else if (state == "updateStatus") {
        this.modalSize = "";
        this.modalState = "confirm-tutup";
        if (this.selectedItem.status == 0) {
          this.modalTitle =
            "Aktifkan user  " + this.selectedItem.username + " ini?";
          this.modalButton = "Iya, aktifkan";
        } else {
          this.modalTitle =
            "Non-aktifkan user  " + this.selectedItem.username + " ini?";
          this.modalButton = "Iya, non-aktifkan";
        }
      } else if (state == "tipe") {
        this.modalColor = "bg-primary";
        this.modalTitle = "Ubah Data Aktivis User";
        this.modalState = "normal2";
        this.modalSize = "modal-lg";
      } else if (state == "akses") {
        this.modalColor = "bg-primary";
        this.modalTitle = "Hak Akses User";
        this.modalState = "normal1";
        this.modalSize = "modal-full";
        if (this.selectedItem.id_cu == 0) {
          this.tipeUser = "bkcu";
        } else {
          this.tipeUser = "cu";
        }
        this.$store.dispatch(
          this.kelas + "/editHakAkses",
          this.selectedItem.id
        );
      }
    },
    modalTutup() {
      this.modalShow = false;
      this.modalColor = "";
      this.modalTitle = "";
      this.modalSize = "";

      this.$store.dispatch(this.kelas + "/resetUpdateStat");
    },
    modalConfirmOk() {
      if (this.state == "hapus") {
        this.$store.dispatch(this.kelas + "/destroy", this.selectedItem.id);
      } else if (this.state == "resetPassword") {
        this.$store.dispatch(
          this.kelas + "/updateResetPassword",
          this.selectedItem.id
        );
      } else if (this.state == "updateStatus") {
        this.$store.dispatch(
          this.kelas + "/updateStatus",
          this.selectedItem.id
        );
      } else if (this.state == "akses") {
        this.$store.dispatch(this.kelas + "/updateHakAkses", [
          this.selectedItem.id,
          this.modalHakAksesForm
        ]);
      }
    }
  },
  computed: {
    ...mapGetters("auth", {
      currentUser: "currentUser"
    }),
    ...mapGetters("user", {
      itemData: "dataS",
      itemDataStat: "dataStatS",
      hakAkses: "data",
      hakAksesStat: "dataStat",
      updateMessage: "update",
      updateStat: "updateStat"
    }),
    ...mapGetters("global", {
      idCu: "idCu"
    })
  }
};
</script>
