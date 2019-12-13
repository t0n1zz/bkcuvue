<template>
  <div>

    <!-- main panel -->
    <data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" @fetch="fetch">

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
        <button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu']"
          :disabled="!selectedItem.id">
          <i class="icon-pencil5"></i> Ubah Identitas
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
          <i class="icon-pencil5"></i> Ubah Identitas
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
						<check-value :value="props.item.nik"></check-value>
					</td>
          <td v-if="!columnData[2].hide">
						<check-value :value="props.item.npwp"></check-value>
					</td>
          <td v-if="!columnData[3].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
          <td v-if="!columnData[4].hide">
            <check-value :value="props.item.no_ba"></check-value>
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.lembaga"></check-value>
					</td>
					<td v-if="!columnData[6].hide">
						<check-value :value="props.item.jabatan"></check-value>
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.pekerjaan"></check-value>
					</td>
					<td v-if="!columnData[8].hide">
						<check-value :value="props.item.pendidikan"></check-value>
					</td>
          <td v-if="!columnData[9].hide">
						<check-value :value="props.item.penghasilan"></check-value>
					</td>
					<td v-if="!columnData[10].hide">
						<check-value :value="props.item.pengeluaran"></check-value>
					</td>
					<td v-if="!columnData[11].hide">
						<check-value :value="props.item.email"></check-value>
					</td>
					<td v-if="!columnData[12].hide">
						<check-value :value="props.item.hp"></check-value>
					</td>
					<td v-if="!columnData[13].hide">
						<check-value :value="props.item.kontak"></check-value>
					</td>
					<td v-if="!columnData[14].hide">
						<check-value :value="props.item.kelamin"></check-value>
					</td>
          <td v-if="!columnData[15].hide">
						<check-value :value="props.item.ahli_waris"></check-value>
					</td>
           <td v-if="!columnData[16].hide">
						<check-value :value="props.item.nama_ibu"></check-value>
					</td>
          <td v-if="!columnData[17].hide">
						<check-value :value="props.item.suku"></check-value>
					</td>
					<td v-if="!columnData[18].hide">
						<check-value :value="props.item.darah"></check-value>
					</td>
					<td v-if="!columnData[19].hide">
						<check-value :value="props.item.tinggi"></check-value>
					</td>
					<td v-if="!columnData[20].hide">
						<check-value :value="props.item.agama"></check-value>
					</td>
					<td v-if="!columnData[21].hide">
						<check-value :value="props.item.status"></check-value>
					</td>
					<td v-if="!columnData[22].hide" v-html="$options.filters.date(props.item.tanggal_lahir)">
					</td>
					<td v-if="!columnData[23].hide">
						<check-value :value="props.item.tempat_lahir"></check-value>
					</td>
          <td v-if="!columnData[24].hide" v-html="$options.filters.date(props.item.tanggal_masuk)">
					</td>
					<td v-if="!columnData[25].hide">
						<check-value :value="props.item.provinces.name" v-if="props.item.provinces"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[26].hide">
						<check-value :value="props.item.regencies.name" v-if="props.item.regencies"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[27].hide">
						<check-value :value="props.item.districts.name" v-if="props.item.districts"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[28].hide">
						<check-value :value="props.item.villages.name" v-if="props.item.villages"></check-value>
						<span v-else>-</span>	
					</td>
          <td v-if="!columnData[29].hide">
						<check-value :value="props.item.rw"></check-value>
					</td>
					<td v-if="!columnData[30].hide">
						<check-value :value="props.item.rt"></check-value>
					</td>
					<td v-if="!columnData[31].hide">
						<check-value :value="props.item.alamat"></check-value>
					</td>
					<td v-if="!columnData[32].hide" v-html="$options.filters.dateTime(props.item.created_at)" class="text-nowrap"></td>
					<td v-if="!columnData[33].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

    </data-viewer>

    <!-- modal -->
    <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" :content="modalContent" :color="modalColor" 
      @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">

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

  export default {
    components: {
      DataViewer,
      appModal,
      collapseButton,
      checkValue,
    },
    props: ["title", "kelas","itemData","itemDataStat"],
    data() {
      return {
        anggota_cu: {},
        selectedItem: [],
        query: {
          order_column: "name",
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
            name: 'nik',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'NPWP',
            name: 'npwp',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Nama',
            name: 'name',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
            filterDefault: true
          },
          {
            title: 'No. BA',
            name: 'no_ba',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Lembaga',
            name: 'lembaga',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: false,
          },
          {
            title: 'Jabatan',
            name: 'jabatan',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: false,
          },
          {
            title: 'Pekerjaan',
            name: 'pekerjaan',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Pendidikan',
            name: 'pendidikan',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: false,
          },
          {
            title: 'Penghasilan',
            name: 'penghasilan',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Pengeluaran',
            name: 'pengeluaran',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Email',
            name: 'email',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Hp',
            name: 'hp',
            tipe: 'numeric',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Kontak Lain',
            name: 'kontak',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Gender',
            name: 'kelamin',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Alih Waris',
            name: 'ahli_waris',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Nama Ibu',
            name: 'nama_ibu',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Suku',
            name: 'suku',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Gol. Darah',
            name: 'darah',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Tinggi',
            name: 'tinggi',
            tipe: 'numeric',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Agama',
            name: 'agama',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Status',
            name: 'status',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Tgl. Lahir',
            name: 'tanggal_lahir',
            tipe: 'datetime',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Tempat. Lahir',
            name: 'tempat_lahir',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Tgl. Jadi Anggota',
            name: 'tanggal_masuk',
            tipe: 'datetime',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Provinsi',
            name: 'provinces.name',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Kabupaten',
            name: 'regencies.name',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Kecamatan',
            name: 'districts.name',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Kelurahan',
            name: 'villages.name',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
           {
            title: 'No. RW',
            name: 'rw',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'No. RT',
            name: 'rt',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Alamat',
            name: 'alamat',
            tipe: 'string',
            sort: false,
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
        this.$store.dispatch(this.kelas + '/indexCuDraft', [params, this.$route.params.cu, this.$route.params.tp]);
      },
      selectedRow(item) {
        this.selectedItem = item;
      },
      ubahData(id) {
        this.$router.push({name: this.kelas + "DraftEdit",params: {id: id}});
      },
      modalConfirmOpen(state, isMobile, itemMobile) {
        this.modalShow = true;
        this.modalState = "confirm-tutup";
        this.state = state;

        if (isMobile) {
          this.selectedItem = itemMobile;
        }

        if (state == "simpan") {
					this.modalTitle ="Simpan " + this.title + " ini?";
					this.modalButton = "Iya, Simpan";
				}else if (state == "simpan_semua") {
					this.modalTitle =
						"Simpan semua " + this.title + " ini?";
					this.modalButton = "Iya, Simpan";
				}else if (state == "hapus") {
          this.modalState = "confirm-tutup";
          this.modalTitle =
            "Hapus " + this.title + " " + this.selectedItem.name + " ini?";
          this.modalButton = "Iya, Hapus";
        }else if (state == "hapus_semua") {
					this.modalTitle ="Hapus semua" + this.title + " ini?";
					this.modalButton = "Iya, Hapus";
				}
      },
      modalTutup() {
        this.modalShow = false;
        this.$store.dispatch(this.kelas + "/resetUpdateStat");
      },
      modalConfirmOk() {
        if (this.state == "simpan") {
					this.$store.dispatch(this.kelas + "/storeDraft", this.selectedItem.id);
				}else if (this.state == "hapus") {
          this.$store.dispatch(this.kelas + "/destroyDraft", [this.selectedItem.id, this.$route.params.cu]);
        }else if (this.state == "hapus_semua") {
					this.$store.dispatch(this.kelas + "/destroyDraftAll", this.$route.params.cu);
				}else if (this.state == "simpan_semua") {
					this.$store.dispatch(this.kelas + "/storeDraftAll", this.$route.params.cu);
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