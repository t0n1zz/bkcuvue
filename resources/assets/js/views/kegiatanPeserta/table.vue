<template>
  <div>
    <data-viewer :title="'peserta terdaftar'" :itemData="itemDataPesertaTerdaftar" :columnData="columnDataPesertaTerdaftar" :itemDataStat="itemDataPesertaTerdaftarStat" :query="query" @fetch="fetch" :excelDownloadUrl="excelDownloadUrl" :isDasar="'true'" :isNoKolom="'true'" :isDisable="isDisableTable">

      <template slot="button-desktop">

        <template v-if="selectedItem.kegiatan && selectedItem.kegiatan.id_sertifikat">
          <button class="btn btn-light mb-1" @click.prevent="generateSertifikat()" :disabled="selectedItem.status != 5">
            <i class="icon-certificate"></i> Generate Sertifikat
          </button>
        </template>

      </template>

      <template slot="button-mobile">

        <template v-if="selectedItem.kegiatan && selectedItem.kegiatan.id_sertifikat">
          <button class="btn btn-light mb-1" @click.prevent="generateSertifikat()" :disabled="selectedItem.status != 5">
            <i class="icon-certificate"></i> Generate Sertifikat
          </button>
        </template>

      </template>

      <template slot="item-desktop" slot-scope="props">
        <tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)" v-if="props.item">
          <td>{{ props.index + 1 }}</td>
          <td>
            <span v-html="$options.filters.statusPeserta(props.item.status)"></span>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[2].hide">
						<!-- if aktivis -->
						<template v-if="props.item.aktivis">
							<img :src="'/images/aktivis/' + props.item.aktivis.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.aktivis.gambar">
							<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
						</template>
						<!-- if mitra orang -->
						<template v-else-if="props.item.mitra_orang">
							<img :src="'/images/mitra_orang/' + props.item.mitra_orang.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.mitra_orang.gambar">
							<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
						</template>
						<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
          </td>
					<td v-if="!columnDataPesertaTerdaftar[3].hide">
            <check-value :value="props.item.name_sertifikat"></check-value>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[4].hide && !columnDataPesertaTerdaftar[4].disable">
            <check-value :value="props.item.name_nametag"></check-value>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[5].hide && !columnDataPesertaTerdaftar[5].disable" >
            <span v-html="$options.filters.date(props.item.datang)"></span>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[6].hide && !columnDataPesertaTerdaftar[6].disable">
            <span v-html="$options.filters.date(props.item.pulang)"></span>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[7].hide">
            <check-value :value="props.item.kegiatan_name"></check-value>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[8].hide">
            <check-value :value="props.item.keterangan"></check-value>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[9].hide">
            <check-value :value="props.item.kelamin"></check-value>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[10].hide">
            <check-value :value="props.item.lembaga_name"></check-value>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[11].hide" >
            <check-value :value="props.item.pekerjaan_tingkat"></check-value>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[12].hide">
            <check-value :value="props.item.pekerjaan_name"></check-value>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[13].hide">
            <check-value :value="props.item.pendidikan_tingkat"></check-value>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[14].hide">
            <check-value :value="props.item.pendidikan_name"></check-value>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[15].hide" v-html="$options.filters.date(props.item.tanggal_lahir)">
          </td>
          <td v-if="!columnDataPesertaTerdaftar[16].hide">
            <check-value :value="props.item.tempat_lahir"></check-value>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[17].hide">
            <check-value :value="props.item.tinggi"></check-value>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[18].hide">
            <check-value :value="props.item.agama"></check-value>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[19].hide">
            <check-value :value="props.item.status_pernikahan"></check-value>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[20].hide">
            <check-value :value="props.item.email"></check-value>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[21].hide">
            <check-value :value="props.item.hp"></check-value>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[22].hide">
            <check-value :value="props.item.kontak"></check-value>
          </td>
          <td v-if="!columnDataPesertaTerdaftar[23].hide" v-html="$options.filters.dateTime(props.item.created_at)">
          </td>
        </tr>
      </template>	
    </data-viewer>

  	<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize" :color="modalColor"
    @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"
    @backgroundClick="modalBackgroundClick">

		 <!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<template slot="modal-body1">
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
  import dataViewer from '../../components/dataviewer2.vue';
	import FileSaver from 'file-saver';

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
      dataViewer
		},
		data() {
			return {
        excelDownloadUrl: '',
        isDisableTable: false,
        selectedItem: '',
        query: {
					order_column: "name_sertifikat",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
        columnDataPesertaTerdaftar: [
					{
						title: 'No.',
					},
					{
						title: 'Status',
						name: 'statusPertemuan',
						tipe: 'string',
						sort: true,
						filter: false,
					},
					{
						title: 'Foto',
						name: 'gambar',
						hide: false,
					},
					{
						title: 'Nama Di Sertifikat',
						name: 'name_sertifikat',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
					{
						title: 'Nama Di Nametag',
						name: 'name_nametag',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. Datang',
						name: 'datang',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. Pulang',
						name: 'pulang',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Kegiatan',
						name: 'kegiatan_name',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Keterangan',
						name: 'keterangan',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Gender',
						name: 'kelamin',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Lembaga',
						name: 'lembaga_name',
						tipe: 'string',
					},
					{
						title: 'Tingkat',
						name: 'pekerjaan_tingkat',
						tipe: 'string',
					},
					{
						title: 'Jabatan',
						name: 'pekerjaan_name',
						tipe: 'string',
					},
					{
						title: 'Pendidikan',
						name: 'pendidikan_tingkat',
						tipe: 'string',
					},
					{
						title: 'Jurusan',
						name: 'pendidikan_name',
						tipe: 'string',
					},
					{
						title: 'Tgl. Lahir',
						name: 'tanggal_lahir',
						tipe: 'datetime',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tempat Lahir',
						name: 'tempat_lahir',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tinggi',
						name: 'tinggi',
						tipe: 'numeric',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Agama',
						name: 'agama',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Status Pernikahan',
						name: 'status_pernikahan',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Email',
						name: 'email',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'No. Hp',
						name: 'hp',
						tipe: 'numeric',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Kontak Lain',
						name: 'kontak',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. Daftar',
						name: 'created_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
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
			this.fetch(this.query);
		},
		watch: {
			// check route changes
			'$route' (to, from){
				this.fetch(this.query);
			},
      itemStat(value){
        if(value == 'success'){
          this.fetch(this.query);
        }
      },
      updateStat(value) {
				this.modalState = value;
				this.modalColor = '';

				if (value === "success") {
					this.modalTitle = this.updateResponse.message;
				} else {
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
      }
		},
		methods: {
      fetch(params){
        if(this.$route.params.cu == 'semua'){
          this.$store.dispatch(this.kelas + '/indexSemuaPeserta', [params, this.$route.params.tipe]);
          this.excelDownloadUrl = this.kelas + '/indexSemuaPeserta/' + this.$route.params.tipe;	
        }else if(this.$route.params.cu == 'mitra'){
          this.$store.dispatch(this.kelas + '/indexSemuaPesertaMitra', [params, this.$route.params.tipe]);
          this.excelDownloadUrl = this.kelas + '/indexSemuaPesertaMitra/' + this.$route.params.tipe;	
        }else{
          this.$store.dispatch(this.kelas + '/indexSemuaPesertaCu', [params,this.$route.params.tipe, this.$route.params.cu]);
          this.excelDownloadUrl = this.kelas + '/indexSemuaPesertaCu/' + this.$route.params.tipe + '/cu/' + this.$route.params.cu;
        }
			},
      generateSertifikat(){
				this.modalShow = true;
				this.modalState = 'loading';
				axios.post('/api/generateSertifikat', this.selectedItem, {
					responseType: 'blob'
				}).then((response) => {
					FileSaver.saveAs(response.data, this.selectedItem.name_sertifikat +'.pdf')
					this.state = "generateSertifikat";
					this.modalState = 'success';
					this.modalOpen("generateSertifikat");
				})
			},
      selectedRow(item) {
				this.selectedItem = item;
			},
      modalOpen(state) {
				this.modalShow = true;
				this.modalSize = '';
				this.state = state;
				this.isDisableTable = true;

				if (state == 'hapus') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Peserta ' + this.selectedItem.aktivis.name + ' ?';
					this.modalButton = 'Iya, Hapus';
				}else if (state == 'ubah') {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Peserta';
					this.modalSize = 'modal-lg';
					this.formModalMode = 'edit';
				} else if (state == 'tambah') {
          this.modalState = 'normal1';
          this.modalColor = 'bg-primary';
          this.modalTitle = 'Tambah Peserta';
          this.modalSize = 'modal-lg';
          this.formModalMode = 'create';
				}else if (this.state == 'generateSertifikat'){
					this.modalState = 'content-tutup';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Generate Sertifikat Berhasil';
					this.modalButton = 'Ok';
				}
			},
      modalConfirmOk() {
				this.modalShow = false;

				if (this.state == 'hapusPeserta') {
					this.$store.dispatch(this.kelas + '/destroyPeserta', this.selectedItem.id);
        }
			},
      modalTutup() {
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
				itemDataListMateri: 'dataListMateri',
				itemDataPesertaTerdaftar: 'dataS',
				itemDataPesertaTerdaftarStat: 'dataStatS',
        updateResponse: 'update',
				updateStat: 'updateStat',
			}),
		}
	}
</script>