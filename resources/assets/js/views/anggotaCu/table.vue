<template>
  <div>

    <!-- main panel -->
    <data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl" @fetch="fetch">

      <!-- button desktop -->
      <template slot="button-desktop">

        <!-- tambah -->
        <router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['create_anggota_cu']">
          <i class="icon-plus3"></i> Tambah
        </router-link>

        <!-- ubah identitas -->
        <button @click.prevent="ubahData(selectedItem.id,'identitas')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu']"
          :disabled="!selectedItem.id">
          <i class="icon-pencil5"></i> Ubah Identitas
        </button>

        <!-- ubah produk -->
        <button @click.prevent="ubahData(selectedItem.id,'produk')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu']"
          :disabled="!selectedItem.id">
          <i class="icon-pencil5"></i> Ubah Produk
        </button>

        <!-- TODO:: ganti akses ke index_anggota_cu_saldo -->
        <!-- saldo-->
        <!-- <button @click.prevent="lihatSaldo(selectedItem.id)" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu']"
          :disabled="!selectedItem.id">
          <i class="icon-wallet"></i> Lihat Saldo
        </button> -->

        <!-- klaim jalinan -->
        <button @click.prevent="ubahData(selectedItem.nik,'jalinan')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['create_jalinan_klaim']" :disabled="!selectedItem.nik || selectedItem.status_jalinan">
          <i class="icon-accessibility2"></i> Ajukan Klaim JALINAN
        </button>

        <!-- hapus -->
        <button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['destroy_anggota_cu']"
          :disabled="!selectedItem.id || this.currentUser.id_cu == 0">
          <i class="icon-bin2"></i> Hapus
        </button>

      </template>

      <!-- button mobile -->
      <template slot="button-mobile">

        <!-- tambah -->
        <router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['create_anggota_cu']">
          <i class="icon-plus3"></i> Tambah
        </router-link>

        <!-- ubah-->
        <button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu']"
          :disabled="!selectedItem.id">
          <i class="icon-pencil5"></i> Ubah Identitas
        </button>

        <!-- TODO:: ganti akses ke index_anggota_cu_saldo -->
        <!-- saldo-->
        <!-- <button @click.prevent="lihatSaldo(selectedItem.id)" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu']"
          :disabled="!selectedItem.id">
          <i class="icon-wallet"></i> Lihat Saldo
        </button> -->

        <!-- klaim jalinan -->
        <button @click.prevent="ubahData(selectedItem.nik,'jalinan')" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can && currentUser.can['create_jalinan_klaim']" :disabled="!selectedItem.nik || selectedItem.status_jalinan">
          <i class="icon-accessibility2"></i> Ajukan Klaim JALINAN
        </button>

        <!-- hapus -->
        <button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['destroy_anggota_cu']"
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
						<img :src="'/images/anggotaCu/' + props.item.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
						<img :src="'/images/no_image_man.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
          <td v-if="!columnData[2].hide">
						<check-value :value="props.item.nik"></check-value>
					</td>
          <td v-if="!columnData[3].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
          <td v-if="!columnData[4].hide">
						<span v-for="anggota_cu in props.item.anggota_cu" v-if="props.item.anggota_cu">
              <span v-if="$route.params.cu != 'semua'">
                <span v-if="$route.params.cu == anggota_cu.id">
                  {{ anggota_cu.pivot.no_ba }}
                </span>
              </span>
              <label v-else class="badge badge-primary ml-1">{{ anggota_cu.name }} - {{ anggota_cu.pivot.no_ba }}</label>
            </span>
            <span v-else>-</span>
					</td>
          <td v-if="!columnData[5].hide">
            <span v-if="props.item.status_jalinan">
						  <label class="badge badge-warning ml-1">
                DIAJUKAN
              </label>
            </span>
            <span v-else>
              -
            </span>
					</td>
					<td v-if="!columnData[6].hide">
						<check-value :value="props.item.lembaga"></check-value>
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.jabatan"></check-value>
					</td>
					<td v-if="!columnData[8].hide">
						<check-value :value="props.item.pendidikan"></check-value>
					</td>
					<td v-if="!columnData[9].hide">
						<check-value :value="props.item.email"></check-value>
					</td>
					<td v-if="!columnData[10].hide">
						<check-value :value="props.item.hp"></check-value>
					</td>
					<td v-if="!columnData[11].hide">
						<check-value :value="props.item.kontak"></check-value>
					</td>
					<td v-if="!columnData[12].hide">
						<check-value :value="props.item.kelamin"></check-value>
					</td>
          <td v-if="!columnData[13].hide">
						<check-value :value="props.item.alih_waris"></check-value>
					</td>
					<td v-if="!columnData[14].hide">
						<check-value :value="props.item.darah"></check-value>
					</td>
					<td v-if="!columnData[15].hide">
						<check-value :value="props.item.tinggi"></check-value>
					</td>
					<td v-if="!columnData[16].hide">
						<check-value :value="props.item.agama"></check-value>
					</td>
					<td v-if="!columnData[17].hide">
						<check-value :value="props.item.status"></check-value>
					</td>
					<td v-if="!columnData[18].hide" v-html="$options.filters.date(props.item.tanggal_lahir)">
					</td>
					<td v-if="!columnData[19].hide">
						<check-value :value="props.item.tempat_lahir"></check-value>
					</td>
          <td v-if="!columnData[20].hide" v-html="$options.filters.date(props.item.tanggal_masuk)">
					</td>
					<td v-if="!columnData[21].hide">
						<check-value :value="props.item.provinces.name" v-if="props.item.provinces"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[22].hide">
						<check-value :value="props.item.regencies.name" v-if="props.item.regencies"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[23].hide">
						<check-value :value="props.item.districts.name" v-if="props.item.districts"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[24].hide">
						<check-value :value="props.item.villages.name" v-if="props.item.villages"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[25].hide">
						<check-value :value="props.item.alamat"></check-value>
					</td>
					<td v-if="!columnData[26].hide" v-html="$options.filters.dateTime(props.item.created_at)" class="text-nowrap"></td>
					<td v-if="!columnData[27].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

    </data-viewer>

    <!-- modal -->
    <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" :content="modalContent"
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
        excelUploads:[
          {
            enabled: true,
            url: 'anggotaCu/uploadExcelNew',
            format_url: 'formatAnggotaCuBaru.xlsx',
            next_page_route: 'AnggotaCuDraft',
            button: 'Upload Anggota CU Baru'
          },
          {
            enabled: true,
            url: 'anggotaCu/uploadExcel',
            format_url: 'formatAnggotaCu.xlsx',
            next_page_route: 'AnggotaCuDraft',
            button: 'Upload Anggota CU'
          },
        ],
        columnData: [
          {
            title: 'No.',
            name: 'No.',
          },
          {
						title: 'Foto',
						name: 'gambar',
						hide: false,
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
            name: 'cu.name',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'JALINAN',
            name: 'jalinan',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: false,
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
            title: 'Pendidikan',
            name: 'pendidikan',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: false,
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
            name: 'alih_waris',
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
					this.$store.dispatch(this.kelas + '/index', params);
					this.excelDownloadUrl = this.kelas;
				}else{
					this.$store.dispatch(this.kelas + '/indexCu', [params,this.$route.params.cu]);
					this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu;
				}
        this.excelDownloadUrl = this.kelas;
      },
      selectedRow(item) {
        this.selectedItem = item;
      },
      ubahData(id,type) {
        if(type == 'identitas'){
          this.$router.push({
            name: this.kelas + "Edit",
            params: {
              id: id
            }
          });
        }else if(type == 'produk'){
          this.$router.push({
            name: this.kelas + "ProdukEdit",
            params: {
              id: id,
              cu: this.$route.params.cu,
            }
          });
        }else if(type == 'jalinan'){
          this.$router.push({
            name: "jalinanKlaimCreateNIK",
            params: {
              nik: id
            }
          });
        }
      },
      lihatSaldo(id) {
        this.$router.push({
          name: this.kelas + "Saldo",
          params: {
            id: id
          }
        });
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
          if(this.$route.params.cu != 'semua'){
            this.$store.dispatch(this.kelas + "/destroy", [this.selectedItem.id, this.$route.params.cu]);
          }else{

          }
        }
      }
    },
    computed: {
      ...mapGetters("anggotaCu", {
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