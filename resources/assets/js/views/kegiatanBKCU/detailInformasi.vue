<template>
  <div>
    <div class="row">
      <!-- sidebar -->
      <div class="col-lg-3 col-md-4 order-md-12">
        <!-- detail -->
        <div class="card">
          <div class="card-header bg-white">
            <!-- ubah  -->
            <button class="btn btn-light btn-block mb-1" @click.prevent="ubahKegiatan(item.id)" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
              <i class="icon-pencil5"></i> Ubah
            </button>

            <!-- status -->
            <button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('statusKegiatan')" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
              <i class="icon-calendar5"></i> Status
            </button>

            <!-- hapus -->
            <button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('hapusKegiatan')" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
              <i class="icon-bin2"></i> Hapus
            </button>

            <!-- daftar -->
            <template v-if="item.status != 5 && item.status != 6">
              <button class="btn bg-warning-400 btn-block mb-1" @click.prevent="tambahPeserta()" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
                <i class="icon-people"></i> Daftar Peserta
              </button>

              <!-- daftar -->
              <button class="btn bg-warning-400 btn-block mb-1" @click.prevent="tambahPeserta()" v-else-if="currentUser.can && currentUser.can['index_diklat_bkcu'] && currentUser.id_cu != 0 && item.status == 2">
                <i class="icon-people"></i> Daftar Peserta
              </button>
            </template>

            <!-- nomor sertifikat -->
          <button v-if="(item.status == 4 || item.status == 5) && this.isGetSertifikatButtonPeserta === true && currentUser.can['update_diklat_bkcu']" class="btn bg-primary-400 btn-block mb-1" @click.prevent="penerimaSertifikat('peserta')">
            <i class="icon-file-check" ></i> Pilih Peserta Penerima Sertifikat
          </button>

          <button class="btn bg-teal-400 btn-block mb-1" @click.prevent="getNomorSertifikat()" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0 && (this.isGetSertifikatButtonPanitia == true || this.isGetSertifikatButtonPeserta == true) && (item.status == 4 || item.status == 5)" >
              <b><i class="icon-cogs"></i></b> Dapatkan Nomor Sertifikat
            </button>

          </div>
          <table class="table table-borderless table-xs border-top-0 my-2">
            <tbody>
              <tr>
                <td class="font-weight-semibold">Status:</td>
                <td class="text-right">
                  <span v-html="$options.filters.statusDiklat(item.status)"></span>
                </td>
              </tr>
              <tr>
                <td class="font-weight-semibold">Kode:</td>
                <td class="text-right">
                  {{ item.kode_diklat ? item.kode_diklat : kode }}
                </td>
              </tr>
              <tr>
                <td class="font-weight-semibold">Durasi:</td>
                <td class="text-right">{{ item.durasi }} jam</td>
              </tr>
              <tr>
                <td class="font-weight-semibold">Tgl. Mulai:</td>
                <td class="text-right" v-html="$options.filters.dateMonth(item.mulai)"></td>
              </tr>
              <tr>
                <td class="font-weight-semibold">Tgl. Selesai:</td>
                <td class="text-right" v-html="$options.filters.dateMonth(item.selesai)"></td>
              </tr>
              <tr><td colspan="2"><hr class="mt-0 mb-0"/></td></tr>
              <tr>
                <td class="font-weight-semibold">Peserta Min:</td>
                <td class="text-right">{{item.peserta_min}} orang</td>
              </tr>
              <tr>
                <td class="font-weight-semibold">Peserta Max:</td>
                <td class="text-right">{{item.peserta_max}} orang</td>
              </tr>
              <tr>
                <td class="font-weight-semibold">Peserta Max Per CU:</td>
                <td class="text-right">{{item.peserta_max_cu}} orang</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- sasaran -->
        <div class="card">
          <div class="card-header bg-transparent header-elements-inline">
            <span class="text-uppercase font-size-sm font-weight-semibold">Sasaran Peserta</span>
            <div class="header-elements">
              <div class="list-icons">
                <a class="list-icons-item" data-action="collapse"></a>
              </div>
            </div>
          </div>

          <div class="card-body">
            <span v-if="item.sasaran">
              <label v-for="(sasaran, index) in item.sasaran" :key="index" class="badge badge-primary ml-1">
                {{ sasaran.name }}
              </label>
            </span>
          </div>
        </div>

        <!-- tempat -->
        <div class="card" v-if="item.tempat">
          <div class="card-header bg-transparent header-elements-inline">
            <span class="text-uppercase font-size-sm font-weight-semibold">Tempat</span>
            <div class="header-elements">
              <div class="list-icons">
                <a class="list-icons-item" data-action="collapse"></a>
              </div>
            </div>
          </div>
          <div class="card-img-actions mx-1 mt-1">
            <a href="#" @click.prevent="modalImageOpen('/images/tempat/' + item.tempat.gambar + '.jpg')" v-if="item.tempat && item.tempat.gambar">
              <img :src="'/images/tempat/' + item.tempat.gambar + 'n.jpg'" class="card-img img-fluid" >
              <span class="card-img-actions-overlay card-img"><i class="icon-enlarge6 icon-2x"></i></span>
            </a>
            <a href="#" @click.prevent="modalImageOpen('/images/no_image.jpg')" v-else>
              <img :src="'/images/no_image.jpg'" class="card-img img-fluid" >
              <span class="card-img-actions-overlay card-img"><i class="icon-enlarge6 icon-2x"></i></span>
            </a>
          </div>

          <table class="table table-borderless table-xs border-top-0 my-2" v-if="itemStat == 'success'">
            <tbody>
              <tr>
                <td class="font-weight-semibold">Nama:</td>
                <td class="text-right"><check-value :value="item.tempat.name"></check-value></td>
              </tr>
              <tr>
                <td class="font-weight-semibold">Email:</td>
                <td class="text-right"><check-value :value="item.tempat.email"></check-value></td>
              </tr>
              <tr>
                <td class="font-weight-semibold">No. Telp:</td>
                <td class="text-right"><check-value :value="item.tempat.telp"></check-value></td>
              </tr>
              <tr>
                <td class="font-weight-semibold">No. Hp:</td>
                <td class="text-right"><check-value :value="item.tempat.hp"></check-value></td>
              </tr>
              <tr>
                <td class="font-weight-semibold">Alamat:</td>
                <td class="text-right"><check-value :value="item.tempat.alamat"></check-value></td>
              </tr>
              <tr>
                <td class="font-weight-semibold">Website:</td>
                <td class="text-right"><check-value :value="item.tempat.website"></check-value></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card" v-else-if="item.tipe_tempat == 'ONLINE'">
          <div class="card-header bg-transparent header-elements-inline">
            <span class="text-uppercase font-size-sm font-weight-semibold">Tempat</span>
            <div class="header-elements">
              <div class="list-icons">
                <a class="list-icons-item" data-action="collapse"></a>
              </div>
            </div>
          </div>
          <div class="card-body">
            Dilaksanakan secara online
          </div>
        </div>
        <div class="card" v-else>
          <div class="card-header bg-transparent header-elements-inline">
            <span class="text-uppercase font-size-sm font-weight-semibold">Tempat</span>
            <div class="header-elements">
              <div class="list-icons">
                <a class="list-icons-item" data-action="collapse"></a>
              </div>
            </div>
          </div>
          <div class="card-body">
            Belum menentukan tempat pertemuan
          </div>
        </div>
      </div>
      <!-- content  -->
      <div class="col-lg-9 col-md-8 order-md-1">
        <div class="card" v-if="item.gambar">
          <template v-if="item.tipe == 'diklat_bkcu' || item.tipe == 'diklat_bkcu_internal'">
            <img :src="'/images/diklat/' + item.gambar + '.jpg'" class="img-fluid wmin-sm" v-if="item.gambar">
          </template>
          <template v-else-if="item.tipe == 'pertemuan_bkcu' || item.tipe == 'pertemuan_bkcu_internal'">
            <img :src="'/images/pertemuan/' + item.gambar + '.jpg'" class="img-fluid wmin-sm" v-if="item.gambar">
          </template>
        </div>
        <div class="card" v-if="item.keterangan">
          <div class="card-header bg-white">
            <h5 class="card-title">Kerangka Acuan</h5>
          </div>
          <div class="card-body" v-html="item.keterangan">
          </div>
        </div>

        <div class="card" v-if="item.jadwal">
          <div class="card-header bg-white">
            <h5 class="card-title">Jadwal</h5>
          </div>
          <div class="card-body" v-html="item.jadwal">
          </div>
        </div>

        <!-- list materi table -->
        <div class="card">
          <div class="card-header bg-white">
            <h5 class="card-title">Materi</h5>
          </div>
          <div class="card-body pb-2" v-if="currentUser.id_cu == 0">
            <!-- tambah -->
            <button type="button" class="btn btn-light mb-1" @click.prevent="modalOpen('tambahListMateri')">
            <i class="icon-plus3"></i> Tambah
            </button>
            <!-- ubah -->
            <button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahListMateri')" :disabled="!selectedItemListMateri.id" >
              <i class="icon-pencil5"></i> Ubah
            </button>
            <!-- hapus -->
            <button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusListMateri')" :disabled="!selectedItemListMateri.id">
              <i class="icon-bin2"></i> Hapus
            </button>
          </div>
          <data-table :items="itemDataListMateri" :columnData="columnDataListMateri" :itemDataStat="itemDataListMateriStat">
            <template slot="item-desktop" slot-scope="props">
              <tr :class="{ 'bg-info': selectedItemListMateri.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)" v-if="props.item">
                <td>{{ props.index + 1 }}</td>
                <td>
                  <check-value :value="props.item.nama"></check-value>
                </td>
                <td>
                  <check-value :value="props.item.waktu"></check-value>
                </td>
                <td>
                  <check-value :value="props.item.narasumber"></check-value>
                </td>
              </tr>
            </template>
          </data-table>
        </div>
        
        <div class="card" v-if="itemDataPanitia">
          <div class="card-header bg-white">
            <h5 class="card-title">Panitia dan Fasilitator</h5>
          </div>
          <div class="card-body pb-2" v-if="currentUser.id_cu == 0 && item.id_sertifikatPanitia !== 0 && item.id_sertifikatPanitia !== null" >
              <button v-if="(item.status == 4 || item.status == 5) && this.isGetSertifikatButtonPanitia === true && currentUser.can['update_diklat_bkcu']" class="btn btn-light bg-primary-400 mb-1" @click.prevent="penerimaSertifikat('fasilitator')">
					      <i class="icon-file-check"></i> Pilih Panitia & Fasilitator Penerima Sertifikat 
				      </button>
              <button class="btn btn-light mb-1" @click.prevent="modalOpen('detailNomor')"
						    v-if="(item.status == 4 || item.status == 5) && this.isGetSertifikatButtonPanitia === true && currentUser.can['update_diklat_bkcu']">
						    <i class="icon-stack2"></i> Detail Nomor Sertifikat
				    	</button>
              <button class="btn btn-light mb-1" @click.prevent="generateSertifikat()"
						    v-if="this.selectedItemPanitia && this.selectedItemPanitia.isGetSertifikat == 1 && this.isGetSertifikatButtonPanitia && sertifikatNumber == true">
						    <i class="icon-certificate"></i> Generate Sertifikat
				    	</button>
          </div>
          <data-table :items="itemDataPanitia" :columnData="columnDataPanitia" :itemDataStat="itemDataPanitiaStat">
            <template slot="item-desktop" slot-scope="props">
              <tr :class="{ 'bg-info': selectedItemPanitia.id === props.item.id }" class="text-nowrap" @click="selectedPanita(props.item)" v-if="props.item">
                <td>{{ props.index + 1 }}</td>
                <td>
                 <template v-if="props.item.asal == 'dalam'">
                    <img :src="'/images/aktivis/' + props.item.aktivis_gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
                    <img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
                  </template>
                  <template v-else-if="props.item.asal == 'luar'">
                    <img :src="'/images/mitra_orang/' + props.item.mitra_orang_gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
                    <img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
                  </template>
                  <template v-else-if="props.item.asal == 'luar lembaga'">
                    <img :src="'/images/mitra_lembaga/' + props.item.mitra_lembaga_gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
                    <img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
                  </template>
                </td>
                <td>
                  <template v-if="props.item.asal == 'dalam'">
                    <check-value :value="props.item.aktivis_name"></check-value>
                  </template>
                  <template v-if="props.item.asal == 'luar'">
                    <check-value :value="props.item.mitra_orang_name"></check-value>
                  </template>
                  <template v-if="props.item.asal == 'luar lembaga'">
                    <check-value :value="props.item.mitra_lembaga_name"></check-value>
                  </template>
                </td>
                <td>
                  <check-value :value="props.item.asal"></check-value>
                </td>
                <td>
                  <check-value :value="props.item.peran"></check-value>
                </td>
                <td>
                  <template v-if="props.item.asal == 'dalam'">
                    <check-value :value="props.item.aktivis_email"></check-value>
                  </template>
                  <template v-if="props.item.asal == 'luar'">
                    <check-value :value="props.item.mitra_orang_email"></check-value>
                  </template>
                  <template v-if="props.item.asal == 'luar lembaga'">
                    <check-value :value="props.item.mitra_lembaga_email"></check-value>
                  </template>
                </td>
                <td>
                  <template v-if="props.item.asal == 'dalam'">
                    <check-value :value="props.item.aktivis_hp"></check-value>
                  </template>
                  <template v-if="props.item.asal == 'luar'">
                    <check-value :value="props.item.mitra_orang_hp"></check-value>
                  </template>
                  <template v-if="props.item.asal == 'luar lembaga'">
                    <check-value :value="props.item.mitra_lembaga_hp"></check-value>
                  </template>
                </td>
              </tr>
            </template>
          </data-table>
        </div>
      </div>
    </div>
    <!-- modal -->
    <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize" :color="modalColor"
    @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"
    @backgroundClick="modalBackgroundClick">

      <!-- title -->
      <template slot="modal-title">
        {{ modalTitle }}
      </template>

			<template slot="modal-body1">
				<form-peserta 
				:mode="formModalMode"
				:selected="selectedItem"
				:item="item"
				:tingkat="item.sasaran"
				@tutup="modalTutup" v-if="state == 'tambahPeserta'"></form-peserta>

        <form-penerima-sertifikat 
        :tipePenerima="this.tipePenerima" 
        :kegiatan_id="this.item.id"
        :selected="selectedItemPanitia"
				@tutup="modalTutup" v-if="state == 'penerimaSertifikat'">
      </form-penerima-sertifikat>

      <detail-nomor-sertifikat
        :item="this.item"
        :itemDataPanitia="this.itemDataPanitia"
        :mode="'panitia'"
        :kelas="this.kelas"
        @tutup="modalTutup" v-if="state == 'detailNomor'"
        ></detail-nomor-sertifikat>
			</template>

      <template slot="modal-body2">
        <form-status :kelas="kelas" :id="item.id" :status="item.status" :keteranganBatal="item.keteranganBatal"
				@tutup="modalTutup" v-if="state == 'statusKegiatan'"></form-status>

        <form-list-materi 
				:mode="formModalMode"
				:selected="selectedItemListMateri"
				:kegiatan_id="item.id"
				:kegiatan_tipe="item.tipe"
				@tutup="modalTutup" v-if="state == 'tambahListMateri' || state == 'ubahListMateri'"></form-list-materi>
        
        
      </template>
      

    </app-modal>
  </div>
</template>

<script>
	import { mapGetters } from 'vuex';
  import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formInfo from "../../components/formInfo.vue";
	import checkbox from '../../components/checkbox.vue';
  import dataTable from '../../components/datatable.vue';
  import Cleave from 'vue-cleave-component';
  import checkValue from '../../components/checkValue.vue';
  import formListMateri from "./formListMateri.vue";
  import formPeserta from "./formPeserta.vue";
  import formStatus from "./formStatus.vue";
  import formPenerimaSertifikat from './formPenerimaSertifikat.vue';
  import FileSaver from 'file-saver';
  import detailNomorSertifikat from './detailNomorSertifikat.vue';
	export default {
		props: ['kelas'],
		components: {
      appModal,
			formInfo,
			message,
			checkbox,
      dataTable,
      Cleave,
      checkValue,
      formListMateri,
      formPeserta,
      formStatus,
      formPenerimaSertifikat,
      FileSaver,
      detailNomorSertifikat
		},
		data() {
			return {
        kode:'',
        tipeUser: '',
        formModalMode: '',
        selectedItem: '',
        selectedItemListMateri: '',
        isDisableTable: false,
        selectedItemPanitia: '',
        isGetSertifikat:'',
        isGetSertifikatButtonPanitia: false,
        isGetSertifikatButtonPeserta: false,
        tipePenerima: '',
				columnDataPanitia: [
					{ title: 'No.' },
					{ title: 'Foto' },
          { title: 'Nama' },
					{ title: 'Asal' },
					{ title: 'Peran' },
					{ title: 'Email' },
					{ title: 'No. Hp' },
				],
        columnDataListMateri: [
					{
						title: 'No.',
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
						title: 'Waktu (Jam)',
						name: 'waktu',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
          },
          {
						title: 'Narasumber / Fasilitator',
						name: 'narasumber',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					}
				],
        cleaveOption: {
					date: {
						date: true,
						datePattern: ['Y', 'm', 'd'],
						delimiter: '-'
					},
					year: {
						date: true,
						datePattern: ['Y'],
					},
					number12: {
						numeral: true,
						numeralIntegerScale: 12,
						numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
					},
					number3: {
						numeral: true,
						numeralIntegerScale: 3,
						numeralDecimalScale: 0,
						stripLeadingZeroes: false
					},
					numeric: {
						numeral: true,
						numeralThousandsGroupStyle: 'thousand',
						numeralDecimalScale: 2,
						numeralDecimalMark: ',',
						delimiter: '.'
					}
        },
        sertifikatNumber : false,
        modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalSize: '',
        state: '',
			}
  },
		created() {
      if(this.itemStat == 'success'){
        this.fetchListMateri();
        this.fetchPanitia();
      }
		},
  watch: {
    selectedItemPanitia() {
			if (this.selectedItemPanitia.nomor !== null) {
					this.sertifikatNumber = true;
			} else {
				this.sertifikatNumber = false;
				}
		},
    itemStat(value) {
      if (value == 'success') {
        const invalidValues = [null, 'null', 0,''];
          if (!invalidValues.includes(this.itemDataPanitia.id_sertifikat)) {
            this.isGetSertifikatButtonPanitia = true;
          }
          if (!invalidValues.includes(this.item.id_sertifikat)) {
            this.isGetSertifikatButtonPeserta = true;
          }
          if(this.item.kode){
						this.kode = this.item.kode.kode;
					}
          this.fetchListMateri();
          this.fetchPanitia();
        }
    },
    itemNoSertifikatStat(value) {
      if (value === 'success') {
        this.modalOpen('getNomorSertifikat');
     } 
    },
      updateStat(value) {
				this.modalState = value;
				this.modalColor = '';

				if (value === "success") {
          this.fetchListMateri();
          this.fetchPanitia();
					this.modalTitle = this.updateResponse.message;
				} else {
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			}
		},
  methods: {
    getNomorSertifikat() {
      this.modalShow = true;
      this.modalState = 'loading';
        this.$store.dispatch(this.kelas + '/getNomorSertifikat', this.item.id);
      },
      fetchPanitia(){
        this.$store.dispatch(this.kelas + '/indexPanitia', this.item.id);
      },
      fetchListMateri() {
				this.$store.dispatch(this.kelas + '/indexListMateri', this.item.id);
			},
      selectedRow(item) {
				this.selectedItemListMateri = item;
    },
      selectedPanita(item) {
        this.selectedItemPanitia = item; 
      },
      ubahKegiatan(id) {
				this.$router.push({name: this.kelas + 'EditDetail', params: { id: id, tipe:this.$route.params.tipe }});
      },
      penerimaSertifikat(value) {
        this.tipePenerima = value;
        this.modalOpen('penerimaSertifikat');
        this.selectedItemPanitia = '';
    },
      generateSertifikat() {
			if(this.selectedItemPanitia.isGetSertifikat == 1){
					this.modalShow = true;
        this.modalState = 'loading';
          axios.post('/api/generateSertifikat', this.selectedItemPanitia, {
						responseType: 'blob'
					}).then((response) => {
            if (this.selectedItemPanitia.asal === 'dalam') {
              FileSaver.saveAs(response.data, 'Piagam Kegiatan ' + this.item.name + ' - ' + this.selectedItemPanitia.aktivis_name + '.pdf');
            }else if (this.selectedItemPanitia.asal === 'luar') {
              FileSaver.saveAs(response.data,'Piagam Kegiatan '+ this.item.name + ' - ' + this.selectedItemPanitia.mitra_orang_name + '.pdf')
            }else if (this.selectedItemPanitia.asal === 'luar lembaga') {
              FileSaver.saveAs(response.data,'Piagam Kegiatan '+ this.item.name + ' - ' + this.selectedItemPanitia.mitra_lembaga_name + '.pdf')
            }
            this.state = "generateSertifikatPanitia";
						this.modalOpen("generateSertifikat");
					})
					}
    },
      modalOpen(state, isMobile, itemMobile) {
        this.modalShow = true;
        this.modalSize = '';
        this.state = state;
        this.isDisableTable = true;

        if (state == 'hapusKegiatan') {
          this.modalState = 'confirm-tutup';
          this.modalColor = '';
          this.modalTitle = 'Hapus Diklat ' + this.item.name + ' ?';
          this.modalButton = 'Iya, Hapus';
        } else if (state == 'statusKegiatan') {
          this.modalState = 'normal2';
          this.modalTitle = 'Ubah status ' + this.item.name + ' ini?';
          this.modalColor = 'bg-primary';
        }

        if (state == 'ubahListMateri') {
          this.modalState = 'normal2';
          this.modalColor = 'bg-primary';
          this.modalTitle = 'Ubah List Materi';
          this.formModalMode = 'edit';
        } else if (state == 'tambahListMateri') {
          this.modalState = 'normal2';
          this.modalColor = 'bg-primary';
          this.modalTitle = 'Tambah List Materi';
          this.formModalMode = 'create';
        } else if (state == 'hapusListMateri') {
          this.modalState = 'confirm-tutup';
          this.modalColor = '';
          this.modalTitle = 'Hapus Materi ini ?';
          this.modalButton = 'Iya, Hapus';
        }else if (this.state == 'generateSertifikat') {
				this.modalState = 'success';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Generate Sertifikat Berhasil';
				this.modalButton = 'Ok';
        }
        else if (this.state == 'getNomorSertifikat') {
          this.modalState = 'success';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Berhasil Mendapat Nomor Sertifikat';
				this.modalButton = 'Ok';
        }

        else if (state == 'penerimaSertifikat') {
          this.modalState = 'normal1';
          this.modalColor = 'bg-primary';
          this.modalSize = 'modal-full';
          this.modalTitle = 'Pilih Penerima Sertifikat';
        }
        else if (state == 'detailNomor') {
          this.modalState = 'normal1';
          this.modalColor = 'bg-primary';
          this.modalSize = 'modal-full';
          this.modalTitle = 'Detail Nomor Sertifikat';
        }
      },
      tambahPeserta(){
        this.$emit('changeTab', 'pesertaTerdaftar');
      },
      modalConfirmOk() {
				if (this.state == 'hapusListMateri') {
					this.$store.dispatch(this.kelas + '/destroyListMateri', [this.item.tipe, this.selectedItemListMateri.id]);
        }
			},
      modalTutup() {
        if(this.state == 'tambahPeserta'){
          this.$emit('changeTab', 'pesertaTerdaftar');
					this.$emit('fetchCountPeserta');
				}

        if(this.state == 'hapusKegiatan'){
					this.$emit('back');
				}
        if(this.state == 'statusKegiatan'){
					this.$emit('fetch');
        }
         
        this.isDisableTable = false;
				this.modalShow = false;
      },
      modalBackgroundClick() {
				if (this.modalState === 'success') {
					this.modalTutup;
				} else if (this.modalState === 'loading') {
					// do nothing
				} else {
					this.modalShow = false
				}
				this.isDisableTable = false;
			},
		},
		computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
			}),
      ...mapGetters('kegiatanBKCU', {
				item: 'data',
				itemStat: 'dataStat',
        countPeserta: 'count',
        countPesertaStat: 'countStat',
        itemDataPanitia: 'dataPanitia',
				itemDataPanitiaStat: 'dataPanitiaStat',
        itemNoSertifikat: 'dataNoSertifikat',
        itemNoSertifikatStat: 'dataNoSertifikatStat',
        itemDataListMateri: 'dataListMateri',
				itemDataListMateriStat: 'dataListMateriStat',
        updateResponse: 'update',
				updateStat: 'updateStat',
			}),
		}
	}
</script>