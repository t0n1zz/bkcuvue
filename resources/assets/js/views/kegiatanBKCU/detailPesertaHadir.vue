<template>
  <div>
    <data-viewer :title="'peserta terdaftar'" :itemData="itemDataPesertaHadir" :columnData="columnDataPesertaHadir" :itemDataStat="itemDataPesertaHadirStat" :query="queryPesertaHadir" @fetch="fetchPesertaHadir" :excelDownloadUrl="excelDownloadUrl" :isDasar="'true'" :isNoKolom="'true'" :isDisable="isDisableTable">

      <template slot="item-desktop" slot-scope="props">
        <tr class="text-nowrap" v-if="props.item">
					<td>{{ props.index + 1 }}</td>
					<td v-if="!columnDataPesertaHadir[1].hide">
						<img :src="'/images/aktivis/' + props.item.aktivis.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.aktivis && props.item.aktivis.gambar">
						<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
					<td v-if="props.item.aktivis && !columnDataPesertaHadir[2].hide">
						<check-value :value="props.item.aktivis.name"></check-value>
					</td>
					<td v-if="!columnDataPesertaHadir[3].hide && !columnDataPesertaHadir[3].disable">
						<check-value :value="props.item.name_nametag"></check-value>
					</td>
					<td v-if="!columnDataPesertaHadir[4].hide">
						<check-value :value="props.item.name_sertifikat"></check-value>
					</td>
					<td v-if="!columnDataPesertaHadir[5].hide && !columnDataPesertaHadir[5].disable">
						<span v-html="$options.filters.date(props.item.datang)"></span>
					</td>
					<td v-if="!columnDataPesertaHadir[6].hide && !columnDataPesertaHadir[6].disable">
						<span v-html="$options.filters.date(props.item.pulang)"></span>
					</td>
					<td v-if="!columnDataPesertaHadir[7].hide" v-html="$options.filters.dateTime(props.item.tanggal_hadir)">
					</td>
					<td v-if="!columnDataPesertaHadir[8].hide">
						<check-value :value="props.item.keterangan"></check-value>
					</td>
					<td v-if="props.item.aktivis && !columnDataPesertaHadir[9].hide">
						<check-value :value="props.item.aktivis.kelamin"></check-value>
					</td>
					<td v-if="props.item.aktivis && !columnDataPesertaHadir[10].hide">
						<check-value :value="props.item.lembaga"></check-value>
					</td>
					<td v-if="props.item.aktivis && !columnDataPesertaHadir[11].hide" >
						<check-value :value="props.item.tingkat_name"></check-value>
					</td>
					<td v-if="props.item.aktivis && !columnDataPesertaHadir[12].hide">
						<check-value :value="props.item.jabatan"></check-value>
					</td>
					<td v-if="props.item.aktivis && !columnDataPesertaHadir[13].hide">
						<check-value :value="props.item.aktivis.pendidikan_tertinggi.tingkat" v-if="props.item.aktivis.pendidikan_tertinggi"></check-value>
						<span v-else>-</span>
					</td>
					<td v-if="props.item.aktivis && !columnDataPesertaHadir[14].hide">
						<check-value :value="props.item.aktivis.pendidikan_tertinggi.name" v-if="props.item.aktivis.pendidikan_tertinggi"></check-value>
						<span v-else>-</span>
					</td>
					<td v-if="props.item.aktivis && !columnDataPesertaHadir[15].hide" v-html="$options.filters.date(props.item.aktivis.tanggal_lahir)">
					</td>
					<td v-if="props.item.aktivis && !columnDataPesertaHadir[16].hide">
						<check-value :value="props.item.aktivis.tempat_lahir"></check-value>
					</td>
					<td v-if="props.item.aktivis && !columnDataPesertaHadir[17].hide">
						<check-value :value="props.item.aktivis.tinggi"></check-value>
					</td>
					<td v-if="props.item.aktivis && !columnDataPesertaHadir[18].hide">
						<check-value :value="props.item.aktivis.agama"></check-value>
					</td>
					<td v-if="props.item.aktivis && !columnDataPesertaHadir[19].hide">
						<check-value :value="props.item.aktivis.status"></check-value>
					</td>
					<td v-if="props.item.aktivis && !columnDataPesertaHadir[20].hide">
						<check-value :value="props.item.aktivis.email"></check-value>
					</td>
					<td v-if="props.item.aktivis && !columnDataPesertaHadir[21].hide">
						<check-value :value="props.item.aktivis.hp"></check-value>
					</td>
					<td v-if="props.item.aktivis && !columnDataPesertaHadir[22].hide">
						<check-value :value="props.item.aktivis.kontak"></check-value>
					</td>
					<td v-if="props.item.aktivis && !columnDataPesertaHadir[22].hide" v-html="$options.filters.dateTime(props.item.created_at)">
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

			<!-- peserta -->
			<template slot="modal-body1">
				<form-peserta 
				:mode="formModalMode"
				:selected="selectedItem"
				:item="item"
				:tingkat="item.sasaran"
				@tutup="modalTutup" v-if="state == 'tambahPeserta' || state == 'ubahPeserta'"></form-peserta>

				<form-peserta-batal :kelas="kelas" :id="selectedItem.id" :tipe="item.tipe"
				@tutup="modalTutup" v-else-if="state == 'batalPeserta'"></form-peserta-batal>
			</template>

      <template slot="modal-body2">
        <form-nilai
				:mode="formModalMode"
				:selected="selectedItemNilai"
				:kegiatan_id="this.item.id"
				:kegiatan_tipe="this.item.tipe"
				:aktivis_id="this.selectedItem.aktivis_id"
				@tutup="modalTutup" 
				@modalTutup="modalTutup"
				v-if="state == 'tambahNilai'"></form-nilai>
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
  import formPeserta from "./formPeserta.vue";
	import formPesertaBatal from "./formPesertaBatal.vue";
  import formNilai from "./formNilai.vue";
  import dataViewer from '../../components/dataviewer2.vue';

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
      formPeserta,
      formPesertaBatal,
      formNilai,
      dataViewer
		},
		data() {
			return {
        excelDownloadUrl: '',
        isDisableTable: false,
        selectedItem: '',
        queryPesertaHadir: {
					order_column: "created_at",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
        columnDataPesertaHadir: [
					{
						title: 'No.',
					},
					{
						title: 'Foto',
						name: 'gambar',
						hide: false,
					},
					{
						title: 'Nama',
						name: 'aktivis.name',
						tipe: 'string',
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
						title: 'Nama Di Sertifikat',
						name: 'name_sertifikat',
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
						title: 'Tgl. / Waktu Hadir',
						name: 'tanggal_hadir',
						tipe: 'datetime',
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
						name: 'aktivis.kelamin',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Lembaga',
						name: 'lembaga',
						tipe: 'string',
					},
					{
						title: 'Tingkat',
						name: 'tingkat_name',
						tipe: 'string',
					},
					{
						title: 'Jabatan',
						name: 'jabatan',
						tipe: 'string',
					},
					{
						title: 'Pendidikan',
						name: 'aktivis.pendidikan_tertinggi.tingkat',
						tipe: 'string',
					},
					{
						title: 'Jurusan',
						name: 'aktivis.pendidikan_tertinggi.name',
						tipe: 'string',
					},
					{
						title: 'Tgl. Lahir',
						name: 'aktivis.tanggal_lahir',
						tipe: 'datetime',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tempat Lahir',
						name: 'aktivis.tempat_lahir',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tinggi',
						name: 'aktivis.tinggi',
						tipe: 'numeric',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Agama',
						name: 'aktivis.agama',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Status Pernikahan',
						name: 'aktivis.status',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Email',
						name: 'aktivis.email',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'No. Hp',
						name: 'aktivis.hp',
						tipe: 'numeric',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Kontak Lain',
						name: 'aktivis.kontak',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. / Waktu Daftar',
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
      if(this.itemStat == 'success'){
        this.fetchPesertaHadir(this.queryPesertaHadir);
      }
		},
		watch: {
      itemStat(value){
        if(value == 'success'){
          this.fetchPesertaHadir(this.queryPesertaHadir);
        }
      },
      updateStat(value) {
				this.modalShow = true;
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
      fetchNilai(params){
				this.$store.dispatch(this.kelas+'/indexNilai',[params,this.item.id, this.selectedItem.aktivis_id])
			},
      fetchPesertaHadir(params){
				this.$store.dispatch(this.kelas + '/indexPesertaHadir', [params,this.item.id]);
				this.excelDownloadUrl2 = this.kelas + '/indexPesertaHadir';	

        if(this.item.tipe_tempat == 'ONLINE'){
					this.columnDataPesertaHadir[3].disable = true;
					this.columnDataPesertaHadir[5].disable = true;
					this.columnDataPesertaHadir[6].disable = true;
				}else{
					this.columnDataPesertaHadir[3].disable = false;
					this.columnDataPesertaHadir[5].disable = false;
					this.columnDataPesertaHadir[6].disable = false;
				}
			},
      generateSertifikat(){
				this.modalShow = true;
				this.modalState = 'loading';
				axios.post('/api/generateSertifikat', this.selectedItem, {
					responseType: 'blob'
				}).then((response) => {
					FileSaver.saveAs(response.data, this.selectedItem.name+'.pdf')
					this.state = "generateSertifikat";
					this.modalState = 'success';
					this.modalOpen("generateSertifikat");
				})
			},
      selectedRow(item) {
				this.selectedItem = item;
			},
      modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.modalSize = '';
				this.state = state;
				this.isDisableTable = true;

				if (state == 'hapusPeserta') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Peserta ' + this.selectedItem.aktivis.name + ' ?';
					this.modalButton = 'Iya, Hapus';
				}else if(state == 'alasanPeserta'){
					this.modalState = 'content-tutup';
					this.modalColor = '';
					this.modalTitle = 'Maaf anda belum bisa mengikuti pertemuan ini';
					this.modalContent = 'Alasan penolakkan: <br/>' + this.selectedItem.keteranganBatal;
				}else if (state == 'batalPeserta') {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tolak Peserta ' + this.selectedItem.aktivis.name + ' ?';
					this.modalButton = 'Ok';
				} else if (state == 'ubahPeserta') {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Peserta';
					this.modalSize = 'modal-lg';
					this.formModalMode = 'edit';
				} else if (state == 'tambahPeserta') {
					if(this.countPeserta >= this.item.peserta_max ){
						this.modalState = 'content-tutup';
						this.modalColor = '';

						this.modalTitle = 'Diklat sudah penuh';
						this.modalContent = 'Maaf anda tidak bisa mendaftarkan peserta lagi, karena kuota peserta pada diklat ini sudah terpenuhi.';
					}
					
					if(this.itemDataPesertaHadir.data.length >= this.item.peserta_max_cu && this.currentUser.id_cu != 0){
						this.modalState = 'content-tutup';
						this.modalColor = '';
						this.modalTitle = 'CU anda tidak bisa mendaftarkan peserta lagi';
						this.modalContent = 'Maaf anda tidak bisa mendaftarkan peserta lagi, karena jumlah maksimal peserta per CU adalah ' + this.item.peserta_max_cu + ' orang.';
					}else{
						this.modalState = 'normal1';
						this.modalColor = 'bg-primary';
						this.modalTitle = 'Tambah Peserta';
						this.modalSize = 'modal-lg';
						this.formModalMode = 'create';
					}
				}else if (state == 'tambahNilai') {
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Nilai';
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
        if(this.state == 'tambahPeserta' || this.state == 'ubahPeserta' || this.state == 'hapusPeserta' || this.state == 'batalPeserta'){
					this.fetchCountPeserta();
				}
        if(this.state == 'tambahNilai' || this.state == 'ubahNilai' || this.state == 'hapusNilai'){
					this.fetchNilai(this.queryNilai);
					this.state = '';
				}
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
				itemDataPesertaHadir: 'dataS2',
				itemDataPesertaHadirStat: 'dataStatS2',
        updateResponse: 'update',
				updateStat: 'updateStat',
			}),
		}
	}
</script>