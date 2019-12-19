<template>
  <div>

    <!-- main panel -->
    <data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl" @fetch="fetch">

      <!-- button desktop -->
      <template slot="button-desktop" v-if="!isSimple">

        <!-- tambah -->
        <router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['create_jalinan_klaim'] && status == 0">
          <i class="icon-plus3"></i> Tambah
        </router-link>

        <!-- ubah-->
        <button @click.prevent="ubahData(selectedItem.anggota_cu.nik, selectedItem.anggota_cu_cu_id, selectedItem.tipe)" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['update_jalinan_klaim'] && status == 0" :disabled="!selectedItem.anggota_cu">
          <i class="icon-pencil5"></i> Ubah
        </button>

        <!-- status klaim -->
        <button @click.prevent="modalOpen('analisis')" class="btn btn-light btn-icon mb-1" v-if="currentUser.id_cu == 0 && currentUser.can && currentUser.can['update_jalinan_klaim'] && status != '' && status != 5 && status != 6" :disabled="!selectedItem.id">
          <i class="icon-loop4"></i> Analisis Klaim
        </button>

        <!-- surat cair -->
        <button @click.prevent="modalOpen('surat_cair')" class="btn btn-light btn-icon mb-1" v-if="status != '' &&  ( status == 5 || status == 6 )" :disabled="!selectedItem.id">
          <i class="icon-envelop2"></i> Surat Pencairan
        </button>

        <!-- surat tolak -->
        <button @click.prevent="modalOpen('surat_tolak')" class="btn btn-light btn-icon mb-1" v-if="status != '' &&  status == 3"
          :disabled="!selectedItem.id">
          <i class="icon-envelop2"></i> Surat Penolakan
        </button>

        <!-- surat kurang -->
        <button @click.prevent="modalOpen('surat_kurang')" class="btn btn-light btn-icon mb-1" v-if="status != '' &&  status == 2"
          :disabled="!selectedItem.id">
          <i class="icon-envelop2"></i> Surat Dokumen Tidak Lengkap
        </button>

        <!-- selesai -->
        <button @click.prevent="modalOpen('selesai')" class="btn btn-light btn-icon mb-1" v-if="currentUser.id_cu != 0 && currentUser.can && currentUser.can['update_jalinan_klaim'] && (status == 5 || status == 6)"
          :disabled="!selectedItem.id">
          <span v-if="status == '5'">
            <i class="icon-checkmark4"></i> Selesai Klaim
          </span>
          <span v-else>
            <i class="icon-blocked"></i> Batal Selesai Klaim
          </span>
        </button>

        <!-- verifikasi --> 
        <span v-if="currentUser.can && (
            currentUser.can['verifikasi_pengurus_jalinan_klaim'] || 
            currentUser.can['verifikasi_pengawas_jalinan_klaim'] || 
            currentUser.can['verifikasi_manajemen_jalinan_klaim']
          ) && status == ''">
          <button class="btn btn-light btn-icon mb-1" v-if="!selectedItem.id" disabled>
            <i class="icon-file-check"></i> Verifikasi
          </button>

          <button class="btn btn-light btn-icon mb-1" v-else-if="selectedItem.verifikasi_pengurus == currentUser.id || selectedItem.verifikasi_pengawas == currentUser.id || selectedItem.verifikasi_manajemen == currentUser.id" disabled>
            <i class="icon-file-check"></i> Verifikasi
          </button>

          <button @click.prevent="modalOpen('verifikasi')" class="btn btn-light btn-icon mb-1" v-else>
            <i class="icon-file-check"></i> Verifikasi
          </button>
        </span>
        
        <!-- hapus -->
        <button @click.prevent="modalOpen('hapus')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['destroy_jalinan_klaim'] && status == 0" :disabled="!selectedItem.id">
          <i class="icon-bin2"></i> Hapus
        </button>

      </template>

      <!-- button mobile -->
      <template slot="button-mobile" v-if="!isSimple">

        <!-- tambah -->
        <router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['create_jalinan_klaim'] && status == 0">
          <i class="icon-plus3"></i> Tambah
        </router-link>

        <!-- ubah-->
        <button @click.prevent="ubahData(selectedItem.anggota_cu.nik, selectedItem.anggota_cu_cu_id, selectedItem.tipe)" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['update_jalinan_klaim'] && status == 0"
          :disabled="!selectedItem.anggota_cu">
          <i class="icon-pencil5"></i> Ubah
        </button>

        <!-- status -->
        <button @click.prevent="modalOpen('analisis')" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.id_cu == 0 &&currentUser.can && currentUser.can['update_jalinan_klaim'] && status != '' && status != 5 && status != 6"
          :disabled="!selectedItem.id">
          <i class="icon-loop4"></i> Analisis Klaim
        </button>

         <!-- surat cair -->
        <button @click.prevent="modalOpen('surat_cair')" class="btn btn-light btn-icon btn-block pb-1" v-if="status != '' &&  ( status == 5 || status == 6 )"
          :disabled="!selectedItem.id">
          <i class="icon-envelop2"></i> Surat Pencairan
        </button>

        <!-- surat tolak -->
        <button @click.prevent="modalOpen('surat_tolak')" class="btn btn-light btn-icon btn-block pb-1" v-if="status != '' &&  status == 3"
          :disabled="!selectedItem.id">
          <i class="icon-envelop2"></i> Surat Penolakan
        </button>

        <!-- surat kurang -->
        <button @click.prevent="modalOpen('surat_kurang')" class="btn btn-light btn-icon btn-block pb-1" v-if="status != '' &&  status == 2"
          :disabled="!selectedItem.id">
          <i class="icon-envelop2"></i> Surat Dokumen Tidak Lengkap
        </button>

        <!-- selesai -->
        <button @click.prevent="modalOpen('selesai')" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.id_cu != 0 &&currentUser.can && currentUser.can['update_jalinan_klaim'] && ( status == 5 || status == 6)"
          :disabled="!selectedItem.id">
          <span v-if="status == '5'">
            <i class="icon-checkmark4"></i> Selesai Klaim
          </span>
          <span v-else>
            <i class="icon-blocked"></i> Batal Selesai Klaim
          </span>
        </button>

        <!-- verifikasi -->
        <span v-if="currentUser.can && (
            currentUser.can['verifikasi_pengurus_jalinan_klaim'] || 
            currentUser.can['verifikasi_pengawas_jalinan_klaim'] || 
            currentUser.can['verifikasi_manajemen_jalinan_klaim']
          ) && status == ''">
          <button class="btn btn-light btn-icon btn-block pb-1" v-if="!selectedItem.id" disabled>
            <i class="icon-file-check"></i> Verifikasi
          </button>

          <button class="btn btn-light btn-icon btn-block pb-1" v-else-if="selectedItem.verifikasi_pengurus == currentUser.id || selectedItem.verifikasi_pengawas == currentUser.id || selectedItem.verifikasi_manajemen == currentUser.id" disabled>
            <i class="icon-file-check"></i> Verifikasi
          </button>

          <button @click.prevent="modalOpen('verifikasi')" class="btn btn-light btn-icon btn-block pb-1" v-else>
            <i class="icon-file-check"></i> Verifikasi
          </button>
        </span>

        <!-- hapus -->
        <button @click.prevent="modalOpen('hapus')" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['destroy_jalinan_klaim'] && status == 0"
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
          <td v-if="!columnData[1].hide && !columnData[1].disable">
						<check-value :value="props.item.keterangan_klaim"></check-value>
					</td>
          <td v-if="!columnData[2].hide">
						<check-value :value="props.item.anggota_cu.nik" v-if="props.item.anggota_cu"></check-value>
            <span v-else>-</span>
					</td>
          <td v-if="!columnData[3].hide">
            <check-value :value="props.item.anggota_cu_cu.no_ba" v-if="props.item.anggota_cu_cu"></check-value>
            <span v-else>-</span>
					</td>
          <td v-if="!columnData[4].hide && !columnData[4].disable">
            <check-value :value="props.item.anggota_cu_cu.cu.name" v-if="props.item.anggota_cu_cu && props.item.anggota_cu_cu.cu"></check-value>
            <span v-else>-</span>
					</td>
          <td v-if="!columnData[5].hide && !columnData[5].disable">
            <check-value :value="props.item.anggota_cu_cu.tp.name" v-if="props.item.anggota_cu_cu && props.item.anggota_cu_cu.tp"></check-value>
            <span v-else>-</span>
					</td>
          <td v-if="!columnData[6].hide">
						<check-value :value="props.item.anggota_cu.name" v-if="props.item.anggota_cu"></check-value>
            <span v-else>-</span>
					</td>
          <td v-if="!columnData[7].hide">
            <label class="badge badge-warning ml-1">
              <check-value :value="props.item.tipe"></check-value>
            </label>
					</td>
          <td v-if="!columnData[8].hide">
						<check-value :value="props.item.kategori_penyakit"></check-value>
					</td>
          <td v-if="!columnData[9].hide && !columnData[9].disable">
						<span v-html="$options.filters.checkStatus(props.item.verifikasi_pengurus)"></span>
					</td>
          <td v-if="!columnData[10].hide && !columnData[10].disable">
						<span v-html="$options.filters.checkStatus(props.item.verifikasi_pengawas)"></span>
					</td>
           <td v-if="!columnData[11].hide && !columnData[11].disable">
						<span v-html="$options.filters.checkStatus(props.item.verifikasi_manajemen)"></span>
					</td>
          <td v-if="!columnData[12].hide">
						<check-value :value="props.item.keterangan_mati"></check-value>
					</td>
          <td v-if="!columnData[13].hide">
						<check-value :value="props.item.tunas_diajukan" valueType="currency"></check-value>
					</td>
           <td v-if="!columnData[14].hide">
						<check-value :value="props.item.lintang_diajukan" valueType="currency"></check-value>
					</td>
          <td v-if="!columnData[15].hide && !columnData[15].disable">
            <check-value :value="props.item.tunas_disetujui" valueType="currency"></check-value>
					</td>
           <td v-if="!columnData[16].hide && !columnData[16].disable">
            <check-value :value="props.item.lintang_disetujui" valueType="currency"></check-value>
					</td>
          <td v-if="!columnData[17].hide" v-html="$options.filters.date(props.item.tanggal_mati)" class="text-nowrap"></td>
          <td v-if="!columnData[18].hide" v-html="$options.filters.date(props.item.anggota_cu ? props.item.anggota_cu.tanggal_lahir : '')" class="text-nowrap"></td>
          <td v-if="!columnData[19].hide" v-html="$options.filters.date(props.item.anggota_cu_cu? props.item.anggota_cu_cu.tanggal_masuk : '')" class="text-nowrap"></td>
           <td v-if="!columnData[20].hide && !columnData[20].disable" v-html="$options.filters.date(props.item.tanggal_pencairan)" class="text-nowrap"></td>
          <td v-if="!columnData[21].hide" class="text-nowrap">
            <check-value :value="props.item.anggota_cu.usia_meninggal" v-if="props.item.anggota_cu"></check-value>
            <span v-else>-</span>
          </td>
          <td v-if="!columnData[22].hide" class="text-nowrap">
            <check-value :value="props.item.anggota_cu.usia_cacat" v-if="props.item.anggota_cu"></check-value>
            <span v-else>-</span>
          </td>
          <td v-if="!columnData[23].hide" class="text-nowrap">
            <check-value :value="props.item.anggota_cu_cu.lama_menjadi_anggota" v-if="props.item.anggota_cu_cu"></check-value>
            <span v-else>-</span>
          </td>
          <td v-if="!columnData[24].hide">
						<check-value :value="props.item.keterangan"></check-value>
					</td>
          <td v-if="!columnData[25].hide">
						<check-value :value="props.item.anggota_cu.kelamin"></check-value>
					</td>
          <td v-if="!columnData[26].hide">
						<check-value :value="props.item.anggota_cu.ahli_waris"></check-value>
					</td>
          <td v-if="!columnData[27].hide">
						<check-value :value="props.item.anggota_cu.provinces.name" v-if="props.item.anggota_cu.provinces"></check-value>
						<span v-else>-</span>	
					</td>
          <td v-if="!columnData[28].hide">
						<check-value :value="props.item.anggota_cu.alamat"></check-value>
					</td>
          <td v-if="!columnData[29].hide">
						<check-value :value="props.item.anggota_cu.hp"></check-value>
					</td>
					<td v-if="!columnData[30].hide" v-html="$options.filters.dateTime(props.item.created_at)" class="text-nowrap"></td>
					<td v-if="!columnData[31].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

    </data-viewer>

    <!-- modal -->
    <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :size="modalSize" :button="modalButton" :content="modalContent" :color="modalColor" 
      @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup" v-if="!isSimple">

      <!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- status -->
			<template slot="modal-body1">
				<form-status :kelas="kelas" :selected="selectedItem" :tipe="state"
				@tutup="modalTutup"></form-status>
			</template>

      <template slot="modal-body2">
        <surat :selectedItem="selectedItem" :tipe="tipeSurat" @tutup="modalTutup"></surat>
      </template>

    </app-modal>

  </div>
</template>

<script>
  import Vue from "vue";
  import _ from "lodash";
  import { mapGetters } from "vuex";
  import DataViewer from "../../components/dataviewer2.vue";
  import appModal from "../../components/modal";
  import collapseButton from "../../components/collapseButton.vue";
  import checkValue from "../../components/checkValue.vue";
  import formStatus from "./formStatus.vue";
  import surat from "./surat.vue";

  export default {
    components: {
      DataViewer,
      appModal,
      collapseButton,
      checkValue,
      formStatus,
      surat
    },
    props: ["title", "kelas", "status","itemData","itemDataStat","isSimple"],
    data() {
      return {
        selectedItem: [],
        tipeSurat: '',
        query: {
          order_column: "created_at",
          order_direction: "asc",
          filter_match: "and",
          limit: 10,
          page: 1
        },
        provinces: '',
        regencies: '',
        districts: '',
        villages: '',
        excelDownloadUrl: '',
        columnData: [{
            title: 'No.',
            name: 'No.',
          },
          {
						title: 'Keterangan',
						name: 'keterangan_klaim',
            tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
          },
          {
            title: 'No. KTP / NIK',
            name: 'anggota_cu.nik',
            tipe: 'string',
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
            filter: true,
          },
          {
            title: 'CU',
            name: 'anggota_cu_cu.cu.name',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: false,
          },
          {
            title: 'TP/KP',
            name: 'anggota_cu_cu.tp.name',
            tipe: 'string',
            sort: true,
            hide: false,
            disable: false,
            filter: false,
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
						title: 'Tipe',
						name: 'tipe',
            tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
          },
          {
						title: 'Kategori Penyakit',
						name: 'kategori_penyakit',
            tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
          },
          {
						title: 'Verifikasi Pengurus',
						name: 'verifikasi_pengurus',
            tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
          },
           {
						title: 'Verifikasi Pengawas',
						name: 'verifikasi_pengawas',
            tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
          },
           {
						title: 'Verifikasi Manajemen',
						name: 'verifikasi_manajemen',
            tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
          },
          {
						title: 'Keterangan Cacat/Meninggal',
						name: 'keterangan_mati',
            tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
          },
          {
            title: 'TUNAS diajukan',
            name: 'tunas_diajukan',
            tipe: 'numeric',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'LINTANG diajukan',
            name: 'lintang_diajukan',
            tipe: 'numeric',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'TUNAS disetujui',
            name: 'tunas_disetujui',
            tipe: 'numeric',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'LINTANG disetujui',
            name: 'lintang_disetujui',
            tipe: 'numeric',
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
            title: 'Tgl. Lahir',
            name: 'anggota_cu.tanggal_lahir',
            tipe: 'datetime',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
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
            title: 'Tgl. Pencairan',
            name: 'tanggal_pencairan',
            tipe: 'datetime',
            sort: true,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Usia Meninggal',
            name: 'anggota_cu.usia_meninggal',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: false,
          },
          {
            title: 'Usia Cacat',
            name: 'anggota_cu.usia_cacat',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: false,
          },
          {
            title: 'Lama Menjadi Anggota (BULAN)',
            name: 'anggota_cu_cu.lama_menjadi_anggota',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: false,
          },
          {
						title: 'Keterangan Lain',
						name: 'keterangan',
            tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
          },
          {
						title: 'Gender',
						name: 'anggota_cu.kelamin',
            tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
          },
          {
						title: 'Alih Waris',
						name: 'anggota_cu.ahli_waris',
            tipe: 'string',
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
            title: 'Alamat',
            name: 'anggota_cu.alamat',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'Hp',
            name: 'anggota_cu.hp',
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
        modalSize: "",
        modalTitle: "",
        modalContent: "",
        modalButton: ""
      };
    },
    created() {
      if(this.status == 1 || this.status == 2 || this.status == 3){
        this.columnData[1].disable = false;
        this.columnData[9].disable = true;
        this.columnData[10].disable = true;
        this.columnData[11].disable = true;
        this.columnData[15].disable = true;
        this.columnData[16].disable = true;
        this.columnData[20].disable = true;
      }else if(this.status == 4 || this.status == 5 || this.status == 6){
        this.columnData[1].disable = false;
        this.columnData[9].disable = true;
        this.columnData[10].disable = true;
        this.columnData[11].disable = true;
        this.columnData[15].disable = false;
        this.columnData[16].disable = false;
        this.columnData[20].disable = false;
      }else{
        this.columnData[9].disable = false;
        this.columnData[10].disable = false;
        this.columnData[11].disable = false;
        this.columnData[1].disable = true;
        this.columnData[15].disable = true;
        this.columnData[16].disable = true;
        this.columnData[20].disable = true;
      }
      
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
        if(this.$route.params.cu == 'semua'){
          this.$store.dispatch(this.kelas + '/index' + this.status, [params, this.$route.params.awal, this.$route.params.akhir]);
          this.excelDownloadUrl = this.kelas + '/status/' + this.status + '/' + this.$route.params.awal + '/' + this.$route.params.akhir;
          this.columnData[4].disable = false;
        }else{
          this.$store.dispatch(this.kelas + '/indexCu' + this.status, [params, this.$route.params.cu, this.$route.params.tp, this.$route.params.awal, this.$route.params.akhir]);
          this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu + '/' + this.$route.params.tp + '/status/' + this.status + '/' + this.$route.params.awal + '/' + this.$route.params.akhir;
          this.columnData[4].disable = true;
          this.$store.dispatch('user/indexCuPermission',this.$route.params.cu);
        }
      },
      selectedRow(item) {
        this.selectedItem = item;
      },
      
      ubahData(nik, cu, tipe) {
        this.$router.push({
          name: this.kelas + "Edit",
          params: {
            nik: nik,
            cu: cu,
            tipe: tipe
          }
        });
      },
      modalOpen(state, isMobile, itemMobile) {
        this.modalShow = true;
        this.state = state;

        if (state == "hapus") {
          this.modalState = "confirm-tutup";
          this.modalTitle = "Hapus " + this.title + " atas nama: " + this.selectedItem.anggota_cu.name + " ?";
          this.modalButton = "Iya, Hapus";
          this.modalSize = "''";
        }else if(state == "analisis"){
          this.modalState = 'normal1';
					this.modalTitle = 'Analisis ' + this.title + ' atas nama: ' + this.selectedItem.anggota_cu.name;
          this.modalColor = 'bg-primary';
          this.modalSize = "modal-full";
        }else if (state == "selesai") {
          this.modalState = "normal1";
          this.modalColor = 'bg-primary';
          this.modalSize = "modal-full";
          if(this.status == '4'){
            this.modalTitle = "Selesaikan " + this.title + " atas nama: " + this.selectedItem.anggota_cu.name + " ?";
          }else{
            this.modalTitle = "Batal selesaikan " + this.title + " atas nama: " + this.selectedItem.anggota_cu.name + " ?";
          }
        }else if(state == "verifikasi"){
          this.modalState = 'normal1';
					this.modalTitle = 'Verifikasi ' + this.title + ' atas nama: ' + this.selectedItem.anggota_cu.name;
          this.modalColor = 'bg-primary';
          this.modalSize = "modal-full";
        }else if(state == "surat_cair"){
          this.modalState = 'normal2';
					this.modalTitle = 'Surat Pencairan ' + this.title + ' atas nama: ' + this.selectedItem.anggota_cu.name;
          this.modalColor = 'bg-primary';
          this.modalSize = "modal-lg";
          this.tipeSurat = 'cair'
        }else if(state == "surat_tolak"){
          this.modalState = 'normal2';
					this.modalTitle = 'Surat Penolakan ' + this.title + ' atas nama: ' + this.selectedItem.anggota_cu.name;
          this.modalColor = 'bg-primary';
          this.modalSize = "modal-lg";
          this.tipeSurat = 'tolak'
        }else if(state == "surat_kurang"){
          this.modalState = 'normal2';
					this.modalTitle = 'Surat Pernyataan dokumen ' + this.title + ' tidak lengkap atas nama: ' + this.selectedItem.anggota_cu.name;
          this.modalColor = 'bg-primary';
          this.modalSize = "modal-lg";
          this.tipeSurat = 'kurang'
        }
      },
      modalTutup() {
        this.modalShow = false;
        this.$store.dispatch(this.kelas + "/resetUpdateStat");
      },
      modalConfirmOk() {
        if (this.state == "hapus") {
          this.$store.dispatch(this.kelas + "/destroy", this.selectedItem.id);
        }else if(this.state == 'selesai'){
          this.$store.dispatch(this.kelas + "/updateSelesai", this.selectedItem.id);
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
      }),
      
    }
  };
</script>