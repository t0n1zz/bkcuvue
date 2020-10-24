<template>
  <div>

    <div class="alert alert-warning alert-styled-left cursor-pointer" @click.prevent="fetch(query)">
      <span class="font-weight-semibold">Perhatian!</span> Dikarenakan proses pengelolaan data hasil upload yang memakan waktu lebih lama, maka mohon menunggu dan mencoba menekan kotak dialog ini dalam beberapa saat kedepan untuk memeriksa apakah proses upload data sudah selesai dan dapat dilihat di tabel dibawah.
    </div>

    <!-- main panel -->
    <data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :excelDownloadUrl="excelDownloadUrl" :itemDataStat="itemDataStat" @fetch="fetch">

      <!-- button desktop -->
      <template slot="button-desktop">

        <!-- simpan semua -->
        <button @click.prevent="modalConfirmOpen('simpan_semua')"  class="btn btn-light mb-1" :disabled="itemData.length == 0">
          <i class="icon-floppy-disk"></i> Simpan Semua
        </button>

        <!-- simpan-->
        <button @click.prevent="modalConfirmOpen('simpan')" class="btn btn-light mb-1" :disabled="!selectedItem.id">
          <i class="icon-floppy-disk"></i> Simpan
        </button>

        <!-- ubah identitas -->
        <button @click.prevent="modalConfirmOpen('edit')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu']"
          :disabled="!selectedItem.id">
          <i class="icon-pencil5"></i> Ubah
        </button>

        <!-- hapus -->
        <button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['destroy_anggota_cu']"
          :disabled="!selectedItem.id">
          <i class="icon-bin2"></i> Hapus
        </button>

        <!-- hapus semua -->
        <button @click.prevent="modalConfirmOpen('hapus_semua')" class="btn btn-light btn-icon mb-1" :disabled="itemData.length == 0">
          <i class="icon-bin2"></i> Hapus Semua
        </button>

      </template>

      <!-- button mobile -->
      <template slot="button-mobile">

        <!-- simpan semua-->
        <button @click.prevent="modalConfirmOpen('simpan_semua')"  class="btn btn-light btn-block" :disabled="itemData.length == 0">
          <i class="icon-floppy-disk"></i>Simpan Semua
        </button>

        <!-- simpan-->
        <button @click.prevent="modalConfirmOpen('simpan')" class="btn btn-light btn-block" :disabled="!selectedItem.id">
          <i class="icon-floppy-disk"></i> Simpan
        </button>

        <!-- ubah identitas-->
        <button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu']"
          :disabled="!selectedItem.id">
          <i class="icon-pencil5"></i> Ubah
        </button>

        <!-- hapus -->
        <button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['destroy_anggota_cu']"
          :disabled="!selectedItem.id">
          <i class="icon-bin2"></i> Hapus
        </button>

        <!-- hapus semua -->
        <button @click.prevent="modalConfirmOpen('hapus_semua')" class="btn btn-light btn-icon btn-block mb-1" :disabled="itemData.length == 0">
          <i class="icon-bin2"></i> Hapus Semua
        </button>

      </template>

      <!-- item  -->
      <template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
          <td v-if="!columnData[1].hide">
						<check-value :value="props.item.anggota_cu.nik" v-if="props.item.anggota_cu"></check-value>
            <span v-else>-</span>
					</td>
          <td v-if="!columnData[2].hide">
						<check-value :value="props.item.anggota_cu.name" v-if="props.item.anggota_cu"></check-value>
            <span v-else>-</span>
					</td>
          <td v-if="!columnData[3].hide">
            <check-value :value="props.item.no_ba"></check-value>
					</td>
          <td v-if="!columnData[4].hide">
						<check-value :value="props.item.cu.name" v-if="props.item.cu"></check-value>
            <span v-else>-</span>
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.produk_cu.name" v-if="props.item.produk_cu"></check-value>
            <span v-else>-</span>
					</td>
					<td v-if="!columnData[6].hide">
						<check-value :value="props.item.saldo" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[7].hide" v-html="$options.filters.dateTime(props.item.tanggal_buka)" class="text-nowrap"></td>
					<td v-if="!columnData[8].hide" v-html="$options.filters.dateTime(props.item.tanggal_transaksi)" class="text-nowrap"></td>
					<td v-if="!columnData[9].hide">
						<check-value :value="props.item.lama_pinjaman"></check-value>
					</td>
					<td v-if="!columnData[10].hide">
						<check-value :value="props.item.lama_sisa_pinjaman"></check-value>
					</td>
					<td v-if="!columnData[11].hide" v-html="$options.filters.dateTime(props.item.created_at)" class="text-nowrap"></td>
					<td v-if="!columnData[12].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

    </data-viewer>

    <!-- modal -->
    <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" :content="modalContent" :color="modalColor" 
      @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">

      <template slot="modal-title">
				 {{ modalTitle }}
			 </template>

			 <template slot="modal-body1">
					<form-produk :selected="formModel" @tutup="modalTutup"></form-produk>
			 </template>
    </app-modal>

  </div>
</template>

<script>
  import _ from "lodash";
  import {
    mapGetters
  } from "vuex";
  import DataViewer from "../../components/dataviewer2.vue";
  import appModal from "../../components/modal";
  import collapseButton from "../../components/collapseButton.vue";
  import checkValue from "../../components/checkValue.vue";
  import formProduk from "./form.vue";

  export default {
    components: {
      DataViewer,
      appModal,
      collapseButton,
      checkValue,
      formProduk,
    },
    props: ["title", "kelas","itemData","itemDataStat"],
    data() {
      return {
        anggota_cu: {},
        selectedItem: [],
        excelDownloadUrl: '',
        query: {
          order_column: "no_ba",
          order_direction: "asc",
          filter_match: "and",
          limit: 100,
          page: 1
        },
        columnData: [
          {
            title: 'No.',
            name: 'No.',
          },
          {
            title: 'No. KTP',
            name: 'anggota_cu.nik',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Nama',
            name: 'anggota_cu.name',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
            filterDefault: true
          },
          {
            title: 'No. BA',
            name: 'no_ba',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'CU',
            name: 'cu.name',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Produk',
            name: 'produk_cu.name',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: "Saldo",
            name: "saldo",
            tipe: "numeric",
            sort: true,
            hide: false,
            disable: false,
            filter: true
          },
          {
            title: 'Tgl. Buka',
            name: 'tanggal_buka',
            tipe: 'datetime',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Tgl. Transaksi',
            name: 'tanggal_transaksi',
            tipe: 'datetime',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Lama Pinjaman',
            name: 'lama_pinjaman',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Lama Sisa Pinjaman',
            name: 'lama_sisa_pinjaman',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Tgl. / Waktu Buat',
            name: 'created_at',
            tipe: 'datetime',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Tgl. / Waktu Ubah',
            name: 'updated_at',
            tipe: 'datetime',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          }
        ],
        formModel: [],
        state: '',
        modalShow: false,
        modalState: "",
        modalTitle: "",
        modalContent: "",
        modalButton: "",
        modalColor: "",
      };
    },
    created() {
      this.fetch(this.query);
    },
    watch: {
      // check route changes
			'$route' (to, from){
				this.fetch(this.query);
      },
      
      updateStat(value) {
        this.modalState = value;
        this.modalButton = "Ok";

        if (value === "success") {
          this.modalTitle = this.updateMessage.message;
          this.modalContent = "";
          this.fetch(this.query);
        } else if (value === "fail") {
          this.modalContent = this.updateMessage;
        } else {
          this.modalContent = "";
        }
      }
    },
    methods: {
      fetch(params) {
        this.$store.dispatch(this.kelas + '/indexProdukCuDraft', [params, this.$route.params.cu]);
        this.excelDownloadUrl = 'anggotaProdukCuDraft/index/' + this.$route.params.cu;
      },
      selectedRow(item) {
        this.selectedItem = item;
      },
      ubahData(id) {
        this.$router.push({name: "anggotaProdukCuDraftEdit",params: {id: id}});
      },
      modalConfirmOpen(state, isMobile, itemMobile) {
        this.modalShow = true;
        this.state = state;

        if (isMobile) {
          this.selectedItem = itemMobile;
        }

        if (state == "simpan") {
          this.modalState = "confirm-tutup";
					this.modalTitle ="Simpan " + this.title + " ini?";
					this.modalButton = "Iya, Simpan";
				}else if (state == "simpan_semua") {
          this.modalState = "confirm-tutup";
					this.modalTitle = "Simpan semua " + this.title + " ini?";
					this.modalButton = "Iya, Simpan";
				}else if (state == "hapus") {
          this.modalState = "confirm-tutup";
          this.modalTitle = "Hapus " + this.title + " " + this.selectedItem.name + " ini?";
          this.modalButton = "Iya, Hapus";
        }else if (state == "hapus_semua") {
          this.modalState = "confirm-tutup";
					this.modalTitle ="Hapus semua" + this.title + " ini?";
					this.modalButton = "Iya, Hapus";
				}else if (state == "edit") {
          this.modalState = 'normal1';
          this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah produk';
				  this.formModel = Object.assign({}, this.selectedItem);
				}
      },
      modalTutup() {
        this.modalShow = false;
        this.$store.dispatch(this.kelas + "/resetUpdateStat");
      },
      modalConfirmOk() {
        if (this.state == "simpan") {
					this.$store.dispatch(this.kelas + "/storeProdukCuDraft", this.selectedItem.id);
				}else if (this.state == "hapus") {
          this.$store.dispatch(this.kelas + "/destroyProdukCuDraft", [this.selectedItem.id, this.$route.params.cu]);
        }else if (this.state == "hapus_semua") {
					this.$store.dispatch(this.kelas + "/destroyProdukCuDraftAll", this.$route.params.cu);
				}else if (this.state == "simpan_semua") {
					this.$store.dispatch(this.kelas + "/storeProdukCuDraftAll", this.$route.params.cu);
				}
      }
    },
    computed: {
      ...mapGetters("anggotaCu", {
        updateMessage: "update",
        updateStat: "updateStat"
      }),
      ...mapGetters("auth", {
        currentUser: "currentUser"
      })
    }
  };
</script>