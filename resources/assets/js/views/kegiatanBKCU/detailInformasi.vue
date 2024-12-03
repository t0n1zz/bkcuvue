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
              <!-- <tr> 
                <td class="font-weight-semibold">Peserta Max Per CU:</td>
                <td class="text-right">{{item.peserta_max_cu}} orang</td>
              </tr> -->
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
              </tr>
            </template>
          </data-table>
        </div>
        
        <div class="card" v-if="itemDataPanitia">
          <div class="card-header bg-white">
            <h5 class="card-title">Panitia dan Fasilitator</h5>
          </div>
          <data-table :items="itemDataPanitia" :columnData="columnDataPanitia" :itemDataStat="itemStat">
            <template slot="item-desktop" slot-scope="props">
              <tr v-if="props.item">
                <td>{{ props.index + 1 }}</td>
                <td>
                  <template v-if="props.item.pivot.asal == 'dalam'">
                    <img :src="'/images/aktivis/' + props.item.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
                    <img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
                  </template>
                  <template v-else-if="props.item.pivot.asal == 'luar'">
                    <img :src="'/images/mitra_orang/' + props.item.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
                    <img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
                  </template>
                  <template v-else-if="props.item.pivot.asal == 'luar lembaga'">
                    <img :src="'/images/mitra_lembaga/' + props.item.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
                    <img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
                  </template>
                </td>
                <td>
                  <check-value :value="props.item.name"></check-value>
                </td>
                <td v-if="props.item.pivot.asal == 'dalam'">
                  <span v-if="props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 1">
                    <check-value :front-text="'CU'" :value="props.item.pekerjaan_aktif.cu.name" v-if="props.item.pekerjaan_aktif.cu"></check-value>
                    <span v-else>-</span>
                  </span>
                  <span v-else-if="props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 2">
                    <check-value :value="props.item.pekerjaan_aktif.lembaga_lain.name" v-if="props.item.pekerjaan_aktif.lembaga_lain"></check-value>
                    <span v-else>-</span>
                  </span>
                  <span v-else-if="props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 3">
                    PUSKOPCUINA
                  </span>
                  <span v-else>-</span>
                </td>
                <td v-else-if="props.item.pivot.asal == 'luar'">
                  <check-value :value="props.item.lembaga"></check-value>
                </td>
                <td v-else-if="props.item.pivot.asal == 'luar lembaga'">
                  <check-value :value="props.item.name"></check-value>
                </td>
                <td>
                  <check-value :value="props.item.pivot.asal"></check-value>
                </td>
                <td>
                  <check-value :value="props.item.pivot.peran"></check-value>
                </td>
                <td>
                  <check-value :value="props.item.pivot.keterangan"></check-value>
                </td>
                <td>
                  <check-value :value="props.item.email"></check-value>
                </td>
                <td>
                  <check-value :value="props.item.hp"></check-value>
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
		},
		data() {
			return {
        kode:'',
        tipeUser: '',
        formModalMode: '',
        selectedItem: '',
        selectedItemListMateri: '',
        isDisableTable: false,
        itemDataPanitia: [],
				itemDataPanitiaStat: 'success',
        columnDataPanitia: [
					{ title: 'No.' },
					{ title: 'Foto' },
					{ title: 'Nama' },
					{ title: 'Lembaga' },
					{ title: 'Asal' },
					{ title: 'Peran' },
					{ title: 'keterangan' },
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
      }
		},
		watch: {
      itemStat(value){
        if(value == 'success'){
          if(this.item.kode){
						this.kode = this.item.kode.kode;
					}

          this.itemDataPanitia = [];

          var valDalam;
					for(valDalam of this.item.panitia_dalam){
						this.itemDataPanitia.push(valDalam);
					}

					var valLuar;
					for(valLuar of this.item.panitia_luar){
						this.itemDataPanitia.push(valLuar);
					}

					var valLuarLembaga;
					for(valLuarLembaga of this.item.panitia_luar_lembaga){
						this.itemDataPanitia.push(valLuarLembaga);
					}
          this.fetchListMateri();
        }
      },
      updateStat(value) {
				this.modalState = value;
				this.modalColor = '';

				if (value === "success") {
          this.fetchListMateri();
					this.modalTitle = this.updateResponse.message;
				} else {
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			}
		},
		methods: {
      fetchListMateri() {
				this.$store.dispatch(this.kelas + '/indexListMateri', this.item.id);
			},
      selectedRow(item) {
				this.selectedItemListMateri = item;
			},
      ubahKegiatan(id) {
				this.$router.push({name: this.kelas + 'EditDetail', params: { id: id }});
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
        itemDataListMateri: 'dataListMateri',
				itemDataListMateriStat: 'dataListMateriStat',
        updateResponse: 'update',
				updateStat: 'updateStat',
			}),
		}
	}
</script>