<template>
  <div>

    <!-- main panel -->
    <data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl" :excelUploads="excelUploads"  @fetch="fetch">

      <!-- button desktop -->
      <template slot="button-desktop">

        <!-- tambah -->
        <router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['create_anggota_cu'] && tipe == 'masih'">
          <i class="icon-plus3"></i> Tambah
        </router-link>

        <!-- ubah NIK -->
        <button @click.prevent="modalConfirmOpen('nik')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu']" :disabled="!selectedItem.id">
          <i class="icon-vcard"></i> Ubah NIK / No. KTP
        </button>

        <!-- ubah identitas -->
        <button @click.prevent="ubahData(selectedItem.id,'identitas')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu'] && tipe == 'masih'"
          :disabled="!selectedItem.id">
          <i class="icon-pencil5"></i> Ubah Identitas
        </button>

        <!-- ubah produk -->
        <button @click.prevent="ubahData(selectedItem.id,'produk')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu'] && tipe == 'masih'"
          :disabled="!selectedItem.id">
          <i class="icon-pencil5"></i> Ubah Produk
        </button>

        <!-- klaim jalinan -->
        <button @click.prevent="ubahData(selectedItem.nik,'jalinan')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['create_jalinan_klaim'] && tipe == 'masih'" :disabled="!selectedItem.nik">
          <i class="icon-accessibility2"></i> Ajukan Klaim JALINAN
        </button>

        <!-- pindah tp -->
        <button @click.prevent="modalConfirmOpen('pindahTp')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu'] && tipe != 'meninggal'" :disabled="!selectedItem.id">
          <i class="icon-flip-vertical4"></i> Pindah TP
        </button>

        <!-- anggota keluar -->
        <button @click.prevent="modalConfirmOpen('keluar')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu'] && tipe != 'meninggal'" :disabled="!selectedItem.id">
          <i class="icon-exit2"></i> 
          <span v-if="tipe == 'masih'">Anggota Keluar</span>
          <span v-else>Batal Keluarkan Anggota</span>
        </button>

        <!-- hapus -->
        <button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['destroy_anggota_cu'] && tipe == 'masih'"
          :disabled="!selectedItem.id">
          <i class="icon-bin2"></i> Hapus
        </button>

        <!-- table draft -->
        <router-link :to="{ name: 'anggotaCuCuDraft', params:{cu: $route.params.cu, tp: 'semua'} }" class="btn btn-light btn-icon mb-1" v-if="currentUser && currentUser.can['upload_anggota_cu'] && anggotaCuDraftCountStat == 'success' && anggotaCuDraftCount > 0">
          <i class="icon-table2"></i> Anggota CU [DRAFT]
        </router-link>

      </template>

      <!-- button mobile -->
      <template slot="button-mobile">

        <!-- tambah -->
        <router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['create_anggota_cu'] && tipe == 'masih'">
          <i class="icon-plus3"></i> Tambah
        </router-link>

        <!-- ubah NIK -->
        <button @click.prevent="modalConfirmOpen('nik')" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu']" :disabled="!selectedItem.id">
          <i class="icon-vcard"></i> Ubah NIK / No. KTP
        </button>

        <!-- ubah identitas-->
        <button @click.prevent="ubahData(selectedItem.id,'identitas')" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu']"
          :disabled="!selectedItem.id">
          <i class="icon-pencil5"></i> Ubah Identitas
        </button>

        <!-- ubah produk -->
        <button @click.prevent="ubahData(selectedItem.id,'produk')" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu'] && tipe == 'masih'"
          :disabled="!selectedItem.id">
          <i class="icon-pencil5"></i> Ubah Produk
        </button>

        <!-- klaim jalinan -->
        <button @click.prevent="ubahData(selectedItem.nik,'jalinan')" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can && currentUser.can['create_jalinan_klaim'] && tipe == 'masih'" :disabled="!selectedItem.nik || selectedItem.status_jalinan">
          <i class="icon-accessibility2"></i> Ajukan Klaim JALINAN
        </button>

        <!-- pindah tp -->
        <button @click.prevent="modalConfirmOpen('pindahTp')" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu'] && tipe != 'meninggal'" :disabled="!selectedItem.id">
          <i class="icon-flip-vertical4"></i> Pindah TP
        </button>

        <!-- anggota keluar -->
        <button @click.prevent="modalConfirmOpen('keluar')" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['update_anggota_cu']  && tipe != 'meninggal'"
          :disabled="!selectedItem.id">
          <span v-if="tipe == 'masih'">Anggota Keluar</span>
          <span v-else>Batal Keluarkan Anggota</span>
        </button>

        <!-- hapus -->
        <button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser.can && currentUser.can['destroy_anggota_cu'] && tipe == 'masih'"
          :disabled="!selectedItem.id">
          <i class="icon-bin2"></i> Hapus
        </button>

        <!-- table draft -->
        <router-link :to="{ name: 'anggotaCuCuDraft', params:{cu: $route.params.cu, tp: 'semua'} }" class="btn btn-light btn-icon btn-block pb-1" v-if="currentUser && currentUser.can['upload_anggota_cu'] && anggotaCuDraftCountStat == 'success' && anggotaCuDraftCount > 0">
          <i class="icon-table2"></i> Anggota CU [DRAFT]
        </router-link>

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
            <check-value :value="props.item.npwp"></check-value>
          </td>
          <td v-if="!columnData[4].hide">
            <check-value :value="props.item.name"></check-value>
          </td>
          <td v-if="!columnData[5].hide">
            <check-value :value="props.item.no_ba"></check-value>
					</td>
          <td v-if="!columnData[6].hide">
            <label class="badge badge-warning ml-1" v-if="props.item.status_jalinan">
              <check-value :value="props.item.status_jalinan"></check-value>
            </label> 
            <span v-else>-</span>
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.lembaga"></check-value>
					</td>
					<td v-if="!columnData[8].hide">
						<check-value :value="props.item.jabatan"></check-value>
					</td>
					<td v-if="!columnData[9].hide">
						<check-value :value="props.item.pekerjaan"></check-value>
					</td>
					<td v-if="!columnData[10].hide">
						<check-value :value="props.item.pendidikan"></check-value>
					</td>
					<td v-if="!columnData[11].hide">
						<check-value :value="props.item.penghasilan"></check-value>
					</td>
					<td v-if="!columnData[12].hide">
						<check-value :value="props.item.pengeluaran"></check-value>
					</td>
					<td v-if="!columnData[13].hide">
						<check-value :value="props.item.email"></check-value>
					</td>
					<td v-if="!columnData[14].hide">
						<check-value :value="props.item.hp"></check-value>
					</td>
					<td v-if="!columnData[15].hide">
						<check-value :value="props.item.kontak"></check-value>
					</td>
					<td v-if="!columnData[16].hide">
						<check-value :value="props.item.kelamin"></check-value>
					</td>
          <td v-if="!columnData[17].hide">
						<check-value :value="props.item.ahli_waris"></check-value>
					</td>
          <td v-if="!columnData[18].hide">
						<check-value :value="props.item.nama_ibu"></check-value>
					</td>
          <td v-if="!columnData[19].hide">
						<check-value :value="props.item.suku"></check-value>
					</td>
					<td v-if="!columnData[20].hide">
						<check-value :value="props.item.darah"></check-value>
					</td>
					<td v-if="!columnData[21].hide">
						<check-value :value="props.item.tinggi"></check-value>
					</td>
					<td v-if="!columnData[22].hide">
						<check-value :value="props.item.agama"></check-value>
					</td>
					<td v-if="!columnData[23].hide">
						<check-value :value="props.item.status"></check-value>
					</td>
					<td v-if="!columnData[24].hide" v-html="$options.filters.date(props.item.tanggal_lahir)">
					</td>
					<td v-if="!columnData[25].hide">
						<check-value :value="props.item.tempat_lahir"></check-value>
					</td>
          <td v-if="!columnData[26].hide">
            <span v-html="$options.filters.date(props.item.tanggal_masuk)"></span>
					</td>
					<td v-if="!columnData[27].hide">
						<check-value :value="props.item.provinces.name" v-if="props.item.provinces"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[28].hide">
						<check-value :value="props.item.regencies.name" v-if="props.item.regencies"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[29].hide">
						<check-value :value="props.item.districts.name" v-if="props.item.districts"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[30].hide">
						<check-value :value="props.item.villages.name" v-if="props.item.villages"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[31].hide">
						<check-value :value="props.item.rw"></check-value>
					</td>
					<td v-if="!columnData[31].hide">
						<check-value :value="props.item.rt"></check-value>
					</td>
					<td v-if="!columnData[32].hide">
						<check-value :value="props.item.alamat"></check-value>
					</td>
					<td v-if="!columnData[33].hide" v-html="$options.filters.dateTime(props.item.created_at)" class="text-nowrap"></td>
					<td v-if="!columnData[34].hide">
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
			<template slot="modal-title" v-if="modalState != 'normal1'">
				{{ modalTitle }}
			</template>

			<!-- keluar -->
			<template slot="modal-body1">
        <div class="text-center">
          <span class="text-warning pb-3">
            <i class="icon-exclamation" style="font-size: 5em"></i>
          </span>
          <h2>{{ modalTitle }}</h2>
          <br/>

          <div v-if="tipe == 'masih'">
            <button type="button" class="btn btn-primary btn-block pb-1" @click="selectCU(cu)" v-for="(cu, index) in selectedItem.anggota_cu_cu_not_keluar" :key="index">
              {{ 'CU ' + cu.cu ? cu.cu.name : "-" + ' | ' + 'No. BA: ' + cu.no_ba }}
            </button>
            <button type="button" class="btn btn-light btn-block" @click="modalTutup">
                <i class="icon-cross"></i> Tutup</button>
          </div>
          <div v-else>
            <div class=" d-none d-sm-block">
              <button type="button" class="btn btn-light" @click="modalTutup">
                <i class="icon-cross"></i> Tutup</button>
              <button type="button" class="btn btn-primary ml-1" @click="selectCU(cu)" v-for="(cu, index) in selectedItem.anggota_cu_cu_keluar" :key="index">
                {{ 'CU ' + cu.cu ? cu.cu.name : "-" + ' | ' + 'No. BA: ' + cu.no_ba }}
              </button>
            </div>
            <div class="d-block d-sm-none">
              <button type="button" class="btn btn-primary btn-block pb-1" @click="selectCU(cu)" v-for="(cu, index) in selectedItem.anggota_cu_cu_keluar" :key="index">>
                {{ 'CU ' + cu.cu ? cu.cu.name : "-" + ' | ' + 'No. BA: ' + cu.no_ba }}
              </button>
              <button type="button" class="btn btn-light btn-block" @click="modalTutup">
                  <i class="icon-cross"></i> Tutup</button>
            </div>
          </div>
        </div>
			</template>

      <!-- keluar 2 -->
      <template slot="modal-body2">
        <form-keluar :anggota_cu="anggota_cu"
				@tutup="modalTutup" v-if="state == 'keluar'"></form-keluar>
        <form-pindah-tp :anggota_cu="anggota_cu"
				@tutup="modalTutup" v-else-if="state == 'pindahTp'"></form-pindah-tp>
			</template>

      <!-- ubah nik -->
      <template slot="modal-body3">
        <form-nik :anggota_cu="anggota_cu"
				@tutup="modalTutup"></form-nik>
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
  import formKeluar from "./formKeluar.vue";
  import formPindahTp from "./formPindahTp.vue";
  import formNik from "./formNik.vue";

  export default {
    components: {
      DataViewer,
      appModal,
      collapseButton,
      checkValue,
      formKeluar,
      formPindahTp,
      formNik,
    },
    props: ["title", "kelas","tipe","itemData","itemDataStat"],
    data() {
      return {
        anggota_cu: {},
        selectedItem: [],
        query: {
          order_column: "name",
          order_direction: "asc",
          filter_match: "and",
          limit: 10,
          page: 1
        },
        excelDownloadUrl: '',
        excelUploads:[],
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
            title: 'No. KTP / NIK',
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
            name: 'anggota_cu_cu.no_ba',
            excelName: 'no_ba',
            tipe: 'string',
            sort: false,
            hide: false,
            disable: false,
            filter: true,
          },
          {
            title: 'JALINAN',
            name: 'status_jalinan',
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
            title: 'Ahli Waris',
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
            name: 'anggota_cu_cu.tanggal_masuk',
            excelName: 'tanggal_masuk',
            tipe: 'datetime',
            sort: false,
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
        anggotaCuDraftCount: [],
				anggotaCuDraftCountStat: '',
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
      this.excelUploads =[
        {
          enabled: true,
          url: 'anggotaCu/uploadExcel',
          format_url: 'formatAnggotaCu.xlsx',
          next_page_route: 'anggotaCuCuDraft',
          params: {cu: this.$route.params.cu, tp: 'semua'},
          button: 'Upload Anggota CU'
        }
      ];
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
          if(this.tipe == 'masih'){
            this.$store.dispatch(this.kelas + '/index', params);
            this.excelDownloadUrl = this.kelas;
          }else if(this.tipe == 'keluar'){
            this.$store.dispatch(this.kelas + '/indexKeluar', params);
            this.excelDownloadUrl = this.kelas + '/keluar';
          }else{
            this.$store.dispatch(this.kelas + '/indexMeninggal', params);
            this.excelDownloadUrl = this.kelas + '/indexMeninggal';
          }
				}else{
          if(this.tipe == 'masih'){
            this.$store.dispatch(this.kelas + '/indexCu', [params,this.$route.params.cu, this.$route.params.tp]);
            this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu + '/' + this.$route.params.tp;
          }else if(this.tipe == 'keluar'){
            this.$store.dispatch(this.kelas + '/indexCuKeluar', [params,this.$route.params.cu, this.$route.params.tp]);
            this.excelDownloadUrl = this.kelas + '/indexCuKeluar/' + this.$route.params.cu + '/' + this.$route.params.tp;
          }else{
            this.$store.dispatch(this.kelas + '/indexCuMeninggal', [params,this.$route.params.cu, this.$route.params.tp]);
            this.excelDownloadUrl = this.kelas + '/indexCuMeninggal/' + this.$route.params.cu + '/' + this.$route.params.tp;
          }
        }
        this.fetchAnggotaCuDraft();
      },
      fetchAnggotaCuDraft(){
				let cu = '';
				let tp = 'semua';

				if(this.currentUser.id_cu == 0){
					cu = 'semua';
				}else{
					cu = this.currentUser.id_cu;
				}

				if(this.currentUser.can['upload_anggota_cu']){
					axios.get('/api/anggotaCuDraft/count/' + cu + '/' + tp)
						.then(response => {
							this.anggotaCuDraftCount = response.data.model;
							this.anggotaCuDraftCountStat = 'success';
						})
						.catch(error => {
							this.anggotaCuDraftCount = error.response;
							this.anggotaCuDraftCountStat = 'fail';
						});
				}
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
              nik: id.replace(/\s/g,"").replace(/[^\x00-\x7F]/g, "")
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
      selectCU(value){
        if(this.state == 'keluar'){
          this.modalState = 'normal2';
          this.modalColor = 'bg-primary';
          this.modalTitle = 'Keluarkan anggota atas nama: ' + this.selectedItem.name + ' ?';
          this.anggota_cu = value;
        }else if(this.state == 'pindahTp'){
          this.modalState = 'normal2';
          this.modalColor = 'bg-primary';
          this.modalTitle = 'Pindah TP untuk anggota atas nama: ' + this.selectedItem.name + ' ?';
          this.anggota_cu = value;
        }
      },
      modalConfirmOpen(state, isMobile, itemMobile) {
        this.modalShow = true;
        this.modalState = "confirm-tutup";
        this.state = state;

        if (isMobile) {
          this.selectedItem = itemMobile;
        }

        if (state == "hapus") {
          if(this.selectedItem.status_jalinan == null){
            this.modalState = "confirm-tutup";
            this.modalTitle =
              "Hapus " + this.title + " " + this.selectedItem.name + " ini?";
            this.modalButton = "Iya, Hapus";
          }else{
            this.modalState = "tutup";
            this.modalTitle =
              "Maaf " + this.title + " " + this.selectedItem.name + " tidak bisa dihapus karena memiliki riwayat klaim JALINAN, silahkan periksa kembali lagi.";
          }
        }else if(state == 'pindahTp' && this.selectedItem.anggota_cu_cu_not_keluar && this.selectedItem.anggota_cu_cu_not_keluar.length > 1){
          this.modalState = 'normal1';
					this.modalTitle = 'anggota atas nama: ' + this.selectedItem.name + ' memiliki keanggota di beberapa CU, silahkan pilih di CU mana ia akan pindah TP';
        }else if(state == 'pindahTp' && this.selectedItem.anggota_cu_cu_not_keluar  && this.selectedItem.anggota_cu_cu_not_keluar.length < 2){
          this.modalState = 'normal2';
          this.modalColor = 'bg-primary';
          this.modalTitle = 'Pindah TP untuk anggota atas nama: ' + this.selectedItem.name + ' ?';
          this.anggota_cu = this.selectedItem.anggota_cu_cu_not_keluar[0];
        }else if(state == 'keluar' && this.selectedItem.anggota_cu_cu_not_keluar && this.selectedItem.anggota_cu_cu_not_keluar.length > 1){
          this.modalState = 'normal1';
					this.modalTitle = 'anggota atas nama: ' + this.selectedItem.name + ' memiliki keanggota di beberapa CU, silahkan pilih di CU mana ia akan keluar';
        }else if(state == 'keluar' && this.selectedItem.anggota_cu_cu_not_keluar  && this.selectedItem.anggota_cu_cu_not_keluar.length < 2){
          this.modalState = 'normal2';
          this.modalColor = 'bg-primary';
          this.modalTitle = 'Keluarkan anggota atas nama: ' + this.selectedItem.name + ' ?';
          this.anggota_cu = this.selectedItem.anggota_cu_cu_not_keluar[0];
        }else if(state == 'keluar' && this.selectedItem.anggota_cu_cu_keluar  && this.selectedItem.anggota_cu_cu_keluar.length < 2){
          this.modalState = 'confirm-tutup';
          this.modalColor = 'bg-primary';
          this.modalTitle = 'Batal keluarkan anggota atas nama: ' + this.selectedItem.name + ' ?';
          this.modalButton = "Iya, Batalkan";
          this.anggota_cu = this.selectedItem.anggota_cu_cu_keluar[0];
        }else if(state == 'nik'){
          this.modalState = 'normal3';
          this.modalColor = 'bg-primary';
          this.modalTitle = 'Ubah NIK anggota atas nama: ' + this.selectedItem.name + ' ?';
          this.anggota_cu = this.selectedItem;
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
            // todo: add selection delete
          }
        }else if(this.state == "keluar"){
          this.$store.dispatch(this.kelas + "/updateBatalKeluar", this.selectedItem.id);
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