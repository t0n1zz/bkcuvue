<template>
  <div>

    <!-- main panel -->
    <data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl" @fetch="fetch">

      <!-- button desktop -->
      <template slot="button-desktop">

        <!-- tambah -->
        <router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['create_anggota_cu'] && status == 0">  
          <i class="icon-plus3"></i> Tambah
        </router-link>

        <!-- ubah-->
        <button @click.prevent="ubahData(selectedItem.anggota_cu.nik)" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu'] && status == 0" :disabled="!selectedItem.anggota_cu">
          <i class="icon-pencil5"></i> Ubah
        </button>

        <!-- status klaim -->
        <button @click.prevent="modalOpen('status')" class="btn btn-light btn-icon mb-1" v-if="currentUser.id_cu == 0 && currentUser.can && currentUser.can['update_anggota_cu']"
          :disabled="!selectedItem.id">
          <i class="icon-loop4"></i> Status Klaim
        </button>

        <!-- hapus -->
        <button @click.prevent="modalOpen('hapus')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['destroy_anggota_cu'] && status == 0"
          :disabled="!selectedItem.id">
          <i class="icon-bin2"></i> Hapus
        </button>

      </template>

      <!-- button mobile -->
      <template slot="button-mobile">

        <!-- tambah -->
        <router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['create_anggota_cu'] && status == 0">
          <i class="icon-plus3"></i> Tambah
        </router-link>

        <!-- ubah-->
        <button @click.prevent="ubahData(selectedItem.anggota_cu.nik)" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu'] && status == 0"
          :disabled="!selectedItem.anggota_cu">
          <i class="icon-pencil5"></i> Ubah
        </button>

        <!-- status -->
        <button @click.prevent="modalOpen('status')" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.id_cu == 0 &&currentUser.can && currentUser.can['update_anggota_cu']"
          :disabled="!selectedItem.id">
          <i class="icon-loop4"></i> Status Klaim
        </button>

        <!-- hapus -->
        <button @click.prevent="modalOpen('hapus')" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['destroy_anggota_cu'] && status == 0"
          :disabled="!selectedItem.id">
          <i class="icon-bin2"></i> Hapus
        </button>

      </template>

      <!-- item  -->
      <template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
          <td v-if="!columnData[1].hide">
						<check-value :value="props.item.anggota_cu.nik"></check-value>
					</td>
          <td v-if="!columnData[2].hide">
						<check-value :value="props.item.anggota_cu.name"></check-value>
					</td>
          <td v-if="!columnData[3].hide" v-html="$options.filters.age(props.item.anggota_cu.tanggal_lahir)" class="text-nowrap"></td>
          <td v-if="!columnData[4].hide" v-html="$options.filters.date(props.item.anggota_cu.tanggal_lahir)" class="text-nowrap"></td>
          <td v-if="!columnData[5].hide">
						<span v-for="anggota_cu in props.item.anggota_cu_cu" v-if="props.item.anggota_cu_cu">
              <span v-if="$route.params.cu != 'semua'">
                <span v-if="$route.params.cu == anggota_cu.cu_id">
                  {{ anggota_cu.no_ba }}
                </span>
              </span>
              <label v-else class="badge badge-primary ml-1">{{ anggota_cu.cu.name }} - {{ anggota_cu.no_ba }}</label>
            </span>
            <span v-else>-</span>
					</td>
          <td v-if="!columnData[6].hide">
						<span v-for="anggota_cu in props.item.anggota_cu_cu" v-if="props.item.anggota_cu_cu">
              <span v-if="$route.params.cu != 'semua'">
                <span v-if="$route.params.cu == anggota_cu.cu_id">
                  {{ anggota_cu.tanggal_masuk }}
                </span>
              </span>
              <label v-else class="badge badge-primary ml-1">{{ anggota_cu.cu.name }} - {{ anggota_cu.tanggal_masuk }}</label>
            </span>
            <span v-else>-</span>
					</td>
          <td v-if="!columnData[7].hide" v-html="$options.filters.date(props.item.tanggal_mati)" class="text-nowrap"></td>
          <td v-if="!columnData[8].hide">
            <span v-html="$options.filters.statusJalinan(props.item.tipe)"></span>
					</td>
          <td v-if="!columnData[9].hide">
						<check-value :value="props.item.kategori_penyakit"></check-value>
					</td>
          <td v-if="!columnData[10].hide">
						<check-value :value="props.item.keterangan_mati"></check-value>
					</td>
          <td v-if="!columnData[11].hide">
						<check-value :value="props.item.keterangan"></check-value>
					</td>
          <td v-if="!columnData[12].hide">
						<check-value :value="props.item.anggota_cu.provinces.name" v-if="props.item.anggota_cu.provinces"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[13].hide">
						<check-value :value="props.item.anggota_cu.regencies.name" v-if="props.item.anggota_cu.regencies"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[14].hide">
						<check-value :value="props.item.anggota_cu.districts.name" v-if="props.item.anggota_cu.districts"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[15].hide">
						<check-value :value="props.item.anggota_cu.villages.name" v-if="props.item.anggota_cu.villages"></check-value>
						<span v-else>-</span>	
					</td>
          <td v-if="!columnData[16].hide">
						<check-value :value="props.item.anggota_cu.alamat"></check-value>
					</td>
					<td v-if="!columnData[17].hide" v-html="$options.filters.dateTime(props.item.created_at)" class="text-nowrap"></td>
					<td v-if="!columnData[18].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

    </data-viewer>

    <!-- modal -->
    <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" :content="modalContent" :color="modalColor" 
      @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">

      <!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- status -->
			<template slot="modal-body1">
				<form-status :kelas="kelas" :id="selectedItem.id" :status="selectedItem.status_klaim"
        :keterangan="selectedItem.keterangan_batal"
				@tutup="modalTutup"></form-status>
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
  import formStatus from "./formStatus.vue";

  export default {
    components: {
      DataViewer,
      appModal,
      collapseButton,
      checkValue,
      formStatus
    },
    props: ["title", "kelas", "status","itemData","itemDataStat"],
    data() {
      return {
        selectedItem: [],
        query: {
          order_column: "created_at",
          order_direction: "asc",
          filter_match: "and",
          limit: 10,
          page: 1
        },
        excelDownloadUrl: '',
        columnData: [{
            title: 'No.',
            name: 'No.',
          },
          {
            title: 'No. KTP',
            name: 'anggota_cu.nik',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Nama',
            name: 'anggota_cu.name',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
            filterDefault: true
          },
          {
            title: 'Umur',
            name: 'umur',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: false,
          },
          {
            title: 'Tgl. Lahir',
            name: 'anggota_cu.tanggal_lahir',
            tipe: 'datetime',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'No. BA',
            name: 'anggota_cu_cu.no_ba',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: false,
          },
          {
            title: 'Tgl. Jadi Anggota',
            name: 'anggota_cu_cu.tanggal_masuk',
            tipe: 'datetime',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Tgl. Cacat/Meninggal',
            name: 'tanggal_mati',
            tipe: 'datetime',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
						title: 'Tipe',
						name: 'tipe',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
          },
          {
						title: 'Kategori Penyakit',
						name: 'kategori_penyakit',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
          },
          {
						title: 'Keterangan Cacat/Meninggal',
						name: 'keterangan_mati',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
          },
          {
						title: 'Keterangan Lain',
						name: 'keterangan',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
          },
          {
            title: 'Provinsi',
            name: 'anggota_cu.provinces.name',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Kabupaten',
            name: 'anggota_cu.regencies.name',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Kecamatan',
            name: 'anggota_cu.districts.name',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Kelurahan',
            name: 'anggota_cu.villages.name',
            tipe: 'string',
            sort: false,
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
        modalColor: "",
        modalTitle: "",
        modalContent: "",
        modalButton: ""
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
        if(this.$route.params.cu == 'semua'){
          this.$store.dispatch(this.kelas + '/index' + this.status, params);
          this.excelDownloadUrl = this.kelas + '/status/' + this.status;
				}else{
          this.$store.dispatch(this.kelas + '/indexCu' + this.status, [params,this.$route.params.cu]);
          this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu + '/status/' + this.status;
				}
      },
      selectedRow(item) {
        this.selectedItem = item;
      },
      ubahData(id) {
        this.$router.push({
          name: this.kelas + "Edit",
          params: {
            id: id
          }
        });
      },
      modalOpen(state, isMobile, itemMobile) {
        this.modalShow = true;
        this.state = state;

        if (state == "hapus") {
          this.modalState = "confirm-tutup";
          this.modalTitle = "Hapus " + this.title + " " + this.selectedItem.anggota_cu.name + " ini?";
          this.modalButton = "Iya, Hapus";
        }else if(state == "status"){
          this.modalState = 'normal1';
					this.modalTitle = 'Ubah status klaim ' + this.title + ' ' + this.selectedItem.anggota_cu.name + ' ini?';
					this.modalColor = 'bg-primary';
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
      ...mapGetters("jalinanKlaim", {
        updateMessage: "update",
        updateStat: "updateStat"
      }),
      ...mapGetters("auth", {
        currentUser: "currentUser"
      })
    }
  };
</script>