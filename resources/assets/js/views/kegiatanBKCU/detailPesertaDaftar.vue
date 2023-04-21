<template>
	<div>
		<data-viewer :title="'peserta terdaftar'" :itemData="itemDataPesertaTerdaftar"
			:columnData="columnDataPesertaTerdaftar" :itemDataStat="itemDataPesertaTerdaftarStat"
			:query="queryPesertaTerdaftar" @fetch="fetchPesertaTerdaftar" :excelDownloadUrl="excelDownloadUrl"
			:isDasar="'true'" :isNoKolom="'true'" :isDisable="isDisableTable">

			<!-- if bkcu -->
			<template slot="button-desktop" v-if="currentUser.id_cu == 0">
				<template v-if="item.status != 5 && item.status != 6">
					<button class="btn bg-warning-400 mb-1" @click.prevent="modalOpen('tambahPeserta')">
						<i class="icon-people"></i> Daftar Peserta
					</button>
				</template>

				<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahPeserta')" :disabled="!selectedItem.id"
					v-if="item.status == 2 && selectedItem.status != 3">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusPeserta')" :disabled="!selectedItem.id"
					v-if="item.status == 2 && selectedItem.status != 3">
					<i class="icon-bin2"></i> Hapus
				</button>

				<button class="btn btn-light mb-1" @click.prevent="modalOpen('batalPeserta')" :disabled="!selectedItem.id">
					<i class="icon-blocked"></i> Tolak
				</button>
				<button class="btn btn-light mb-1" @click.prevent="downloadSuratTugas(selectedItem.surat_tugas)"
					:disabled="!selectedItem.id" v-if="this.item.tipe_tempat == 'OFFLINE' && this.selectedItem.surat_tugas">
					<i class="icon-download"></i> Download Surat Tugas
				</button>

				<button class="btn btn-light mb-1" @click.prevent="modalOpen('alasanPeserta')"
					v-if="selectedItem.status == 3">
					<i class="icon-eye"></i> Lihat Alasan Penolakan
				</button>

				<template v-if="item.id_sertifikat">
					<button type="button" class="btn btn-light mb-1" @click.prevent="modalOpen('tambahNilai')"
						v-if="selectedItem.status == 5 && selectedItem.status != 6 && currentUser.can['update_diklat_bkcu'] && itemDataListMateri">
						<i class="icon-markup"></i> Nilai
					</button>

					<button class="btn btn-light mb-1" @click.prevent="generateSertifikat()"
						v-if="selectedItem.status == 5 && selectedItem.status != 6">
						<i class="icon-certificate"></i> Generate Sertifikat
					</button>

				</template>

			</template>
			<template slot="button-mobile" v-if="currentUser.id_cu == 0">
				<button class="btn bg-warning-400 btn-block mb-1" @click.prevent="modalOpen('tambahPeserta')">
					<i class="icon-people"></i> Daftar Peserta
				</button>

				<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('ubahPeserta')"
					:disabled="!selectedItem.id" v-if="item.status == 2 && selectedItem.status != 3">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('hapusPeserta')"
					:disabled="!selectedItem.id" v-if="item.status == 2 && selectedItem.status != 3">
					<i class="icon-bin2"></i> Hapus
				</button>

				<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('alasanPeserta')"
					v-if="selectedItem.status == 3">
					<i class="icon-eye"></i> Lihat Alasan Penolakan
				</button>

				<template v-if="item.id_sertifikat">
					<button type="button" class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('tambahNilai')"
						v-if="selectedItem.status == 5 && selectedItem.status != 6 && currentUser.can['update_diklat_bkcu'] && itemDataListMateri">
						<i class="icon-markup"></i> Nilai
					</button>

					<button class="btn btn-block mb-1" @click.prevent="generateSertifikat()"
						v-if="selectedItem.status == 5 && !selectedItem.status == 6">
						<i class="icon-certificate"></i> Generate Sertifikat
					</button>
				</template>

			</template>

			<!-- if cu -->
			<template slot="button-desktop" v-if="currentUser.id_cu != 0">
				<template v-if="item.tipe == 'diklat_bkcu'">
					<button class="btn bg-warning-400 mb-1" @click.prevent="modalOpen('tambahPeserta')"
						v-if="currentUser.can && currentUser.can['index_diklat_bkcu'] && item.status == 2">
						<i class="icon-people"></i> Daftar Peserta
					</button>
				</template>

				<template v-else-if="item.tipe == 'pertemuan_bkcu' || item.tipe == 'pertemuan_bkcu_internal'">
					<button class="btn bg-warning-400 mb-1" @click.prevent="modalOpen('tambahPeserta')"
						v-if="currentUser.can && currentUser.can['index_pertemuan_bkcu'] && item.status == 2">
						<i class="icon-people"></i> Daftar Peserta
					</button>
				</template>

				<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahPeserta')"
					:disabled="!selectedItem.id || selectedItem.status != 2"
					v-if="item.status == 2 && selectedItem.status != 3">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusPeserta')"
					:disabled="!selectedItem.id || selectedItem.status != 2"
					v-if="item.status == 2 && selectedItem.status != 3">
					<i class="icon-bin2"></i> Hapus
				</button>

				<button class="btn btn-light mb-1" @click.prevent="modalOpen('alasanPeserta')"
					v-if="selectedItem.status == 3">
					<i class="icon-eye"></i> Lihat Alasan Penolakan
				</button>

				<template v-if="item.id_sertifikat">
					<button class="btn btn-light mb-1" @click.prevent="generateSertifikat()"
						v-if="selectedItem.status == 5 && selectedItem.status != 6">
						<i class="icon-certificate"></i> Generate Sertifikat
					</button>
				</template>

			</template>
			<template slot="button-mobile" v-else>
				<template v-if="item.tipe == 'diklat_bkcu'">
					<button class="btn bg-warning-400 btn-block mb-1" @click.prevent="modalOpen('tambahPeserta')"
						v-if="currentUser.can && currentUser.can['index_diklat_bkcu'] && item.status == 2">
						<i class="icon-people"></i> Daftar Peserta
					</button>
				</template>

				<template v-else-if="item.tipe == 'pertemuan_bkcu' || item.tipe == 'pertemuan_bkcu_internal'">
					<button class="btn bg-warning-400 btn-block mb-1" @click.prevent="modalOpen('tambahPeserta')"
						v-if="currentUser.can && currentUser.can['index_pertemuan_bkcu'] && item.status == 2">
						<i class="icon-people"></i> Daftar Peserta
					</button>
				</template>

				<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('ubahPeserta')"
					:disabled="!selectedItem.id || selectedItem.status != 1"
					v-if="item.status == 2 && selectedItem.status != 3">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('hapusPeserta')"
					:disabled="!selectedItem.id || selectedItem.status != 1"
					v-if="item.status == 2 && selectedItem.status != 3">
					<i class="icon-bin2"></i> Hapus
				</button>

				<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('alasanPeserta')"
					v-if="selectedItem.status == 3">
					<i class="icon-eye"></i> Lihat Alasan Penolakan
				</button>

				<template v-if="item.id_sertifikat">
					<button class="btn bg-light btn-block mb-1" @click.prevent="generateSertifikat()"
						v-if="selectedItem.status == 5 && selectedItem.status != 6">
						<i class="icon-certificate"></i> Generate Sertifikat
					</button>
				</template>
			</template>

			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap"
					@click="selectedRow(props.item)" v-if="props.item">
					<td>{{ props.index + 1 }}</td>
					<td>
						<span v-html="$options.filters.statusPeserta(props.item.status)"></span>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[2].hide">
						<!-- if aktivis -->
						<template v-if="props.item.aktivis">
							<img :src="'/images/aktivis/' + props.item.aktivis.gambar + 'n.jpg'" width="35px"
								class="img-rounded img-fluid wmin-sm" v-if="props.item.aktivis.gambar">
							<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm"
								v-else>
						</template>
						<!-- if mitra orang -->
						<template v-else-if="props.item.mitra_orang">
							<img :src="'/images/mitra_orang/' + props.item.mitra_orang.gambar + 'n.jpg'" width="35px"
								class="img-rounded img-fluid wmin-sm" v-if="props.item.mitra_orang.gambar">
							<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm"
								v-else>
						</template>
						<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[3].hide">
						<check-value :value="props.item.name_sertifikat"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[4].hide && !columnDataPesertaTerdaftar[4].disable">
						<check-value :value="props.item.name_nametag"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[5].hide && !columnDataPesertaTerdaftar[5].disable">
						<span v-html="$options.filters.date(props.item.datang)"></span>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[6].hide && !columnDataPesertaTerdaftar[6].disable">
						<span v-html="$options.filters.date(props.item.pulang)"></span>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[7].hide">
						<check-value :value="props.item.keterangan"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[8].hide">
						<check-value :value="props.item.kelamin"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[9].hide">
						<check-value :value="props.item.lembaga_name"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[10].hide">
						<check-value :value="props.item.pekerjaan_tingkat"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[11].hide">
						<check-value :value="props.item.pekerjaan_name"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[12].hide">
						<check-value :value="props.item.pendidikan_tingkat"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[13].hide">
						<check-value :value="props.item.pendidikan_name"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[14].hide"
						v-html="$options.filters.date(props.item.tanggal_lahir)">
					</td>
					<td v-if="!columnDataPesertaTerdaftar[15].hide">
						<check-value :value="props.item.tempat_lahir"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[16].hide">
						<check-value :value="props.item.tinggi"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[17].hide">
						<check-value :value="props.item.agama"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[18].hide">
						<check-value :value="props.item.status_pernikahan"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[19].hide">
						<check-value :value="props.item.email"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[20].hide">
						<check-value :value="props.item.hp"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[21].hide && item.tipe_tempat == 'OFFLINE'">
						<check-value :value="props.item.ukuran_baju"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[22].hide && item.tipe_tempat == 'OFFLINE'">
						<check-value :value="props.item.status_kepesertaan"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[23].hide && item.tipe_tempat == 'OFFLINE'">
						<check-value :value="props.item.penerimaan_vaksin"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[24].hide && item.tipe_tempat == 'OFFLINE'">
						<check-value :value="props.item.merokok"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[25].hide && item.tipe_tempat == 'OFFLINE'">
						<check-value :value="props.item.sakit_jantung"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[26].hide && item.tipe_tempat == 'OFFLINE'">
						<check-value :value="props.item.riwayat_penyakit"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[27].hide && item.tipe_tempat == 'OFFLINE'">
						<check-value :value="props.item.alergi_makanan"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[28].hide">
						<check-value :value="props.item.kontak"></check-value>
					</td>
					<td v-if="!columnDataPesertaTerdaftar[29].hide"
						v-html="$options.filters.dateTime(props.item.created_at)">
					</td>
				</tr>
			</template>
		</data-viewer>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize"
			:color="modalColor" @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup"
			@failOk="modalTutup" @backgroundClick="modalBackgroundClick">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- peserta -->
			<template slot="modal-body1">
				<form-peserta :mode="formModalMode" :selected="selectedItem" :item="item" :tingkat="item.sasaran"
					@tutup="modalTutup" v-if="state == 'tambahPeserta' || state == 'ubahPeserta'"></form-peserta>

				<form-peserta-batal :kelas="kelas" :id="selectedItem.id" :tipe="item.tipe" @tutup="modalTutup"
					v-else-if="state == 'batalPeserta'"></form-peserta-batal>
			</template>

			<template slot="modal-body2">
				<form-nilai :selected="selectedItem" @tutup="modalTutup" @modalTutup="modalTutup"
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
			queryPesertaTerdaftar: {
				order_column: "created_at",
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
					title: 'Ukuran Baju',
					name: 'ukuran_baju',
					tipe: 'string',
					hide: false,
					disable: false,
					filter: true,
				},
				{
					title: 'Status Kepesertaan',
					name: 'status_kepesertaan',
					tipe: 'string',
					hide: false,
					disable: false,
					filter: true,
				},
				{
					title: 'Penerimaan Vaksin',
					name: 'penerimaan_vaksin',
					tipe: 'string',
					hide: false,
					disable: false,
					filter: true,
				},
				{
					title: 'Merokok',
					name: 'merokok',
					tipe: 'string',
					hide: false,
					disable: false,
					filter: true,
				},
				{
					title: 'Sakit Jantung',
					name: 'sakit_jantung',
					tipe: 'string',
					hide: false,
					disable: false,
					filter: true,
				},
				{
					title: 'Riwayat Penyakit',
					name: 'riwayat_penyakit',
					tipe: 'string',
					hide: false,
					disable: false,
					filter: true,
				},
				{
					title: 'Alergi Makanan',
					name: 'alergi_makanan',
					tipe: 'string',
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
		if (this.itemStat == 'success') {
			this.fetchPesertaTerdaftar(this.queryPesertaTerdaftar);
		}
	},
	watch: {
		itemStat(value) {
			if (value == 'success') {
				this.fetchPesertaTerdaftar(this.queryPesertaTerdaftar);
			}
		},
		updateStat(value) {
			this.modalState = value;
			this.modalColor = '';

			if (value === "success") {
				this.fetchPesertaTerdaftar(this.queryPesertaTerdaftar);
				this.fetchCountPeserta();
				this.modalTitle = this.updateResponse.message;
			} else {
				this.modalTitle = 'Oops terjadi kesalahan :(';
				this.modalContent = this.updateResponse;
			}
		}
	},
	methods: {
		fetchPesertaTerdaftar(params) {
			if (this.item.status == '2') {
				if (this.currentUser.id_cu == 0) {
					this.$store.dispatch(this.kelas + '/indexPeserta', [params, this.item.id]);
					this.excelDownloadUrl = this.kelas + '/indexPeserta/' + this.item.id;
				} else {
					this.$store.dispatch(this.kelas + '/indexPesertaCu', [params, this.item.id, this.currentUser.id_cu]);
					this.excelDownloadUrl = this.kelas + '/indexPesertaCu/' + + this.item.id + '/' + this.$route.params.cu;
				}
			} else {
				this.$store.dispatch(this.kelas + '/indexPeserta', [params, this.item.id]);
				this.excelDownloadUrl = this.kelas + '/indexPeserta/' + this.item.id;
			}

			if (this.item.tipe_tempat == 'ONLINE') {
				this.columnDataPesertaTerdaftar[4].disable = true;
				this.columnDataPesertaTerdaftar[5].disable = true;
				this.columnDataPesertaTerdaftar[6].disable = true;
				this.columnDataPesertaTerdaftar[21].disable = true;
				this.columnDataPesertaTerdaftar[22].disable = true;
				this.columnDataPesertaTerdaftar[23].disable = true;
				this.columnDataPesertaTerdaftar[24].disable = true;
				this.columnDataPesertaTerdaftar[25].disable = true;
				this.columnDataPesertaTerdaftar[26].disable = true;
				this.columnDataPesertaTerdaftar[27].disable = true;
			} else {
				this.columnDataPesertaTerdaftar[4].disable = false;
				this.columnDataPesertaTerdaftar[5].disable = false;
				this.columnDataPesertaTerdaftar[6].disable = false;
				this.columnDataPesertaTerdaftar[21].disable = false;
				this.columnDataPesertaTerdaftar[22].disable = false;
				this.columnDataPesertaTerdaftar[23].disable = false;
				this.columnDataPesertaTerdaftar[24].disable = false;
				this.columnDataPesertaTerdaftar[25].disable = false;
				this.columnDataPesertaTerdaftar[26].disable = false;
				this.columnDataPesertaTerdaftar[27].disable = false;
			}
		},
		fetchCountPeserta() {
			this.$store.dispatch(this.kelas + '/countPeserta', this.item.id);
		},
		generateSertifikat() {
			this.modalShow = true;
			this.modalState = 'loading';
			axios.post('/api/generateSertifikat', this.selectedItem, {
				responseType: 'blob'
			}).then((response) => {
				FileSaver.saveAs(response.data, this.selectedItem.kegiatan_name + ' ' + this.selectedItem.name_sertifikat + '.pdf')
				this.state = "generateSertifikat";
				this.modalOpen("generateSertifikat");
			})
		},
		downloadSuratTugas(filename) {
			axios.get('/api/download_folder/' + filename + '/suratTugas', {
				responseType: 'blob'})
				.then(response => {
					FileSaver.saveAs(response.data, filename)
				});
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
			} else if (state == 'alasanPeserta') {
				this.modalState = 'content-tutup';
				this.modalColor = '';
				this.modalTitle = 'Maaf anda belum bisa mengikuti pertemuan ini';
				this.modalContent = 'Alasan penolakkan: <br/>' + this.selectedItem.keteranganBatal;
			} else if (state == 'batalPeserta') {
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Tolak Peserta ' + this.selectedItem.aktivis.name + ' ?';
				this.modalButton = 'Ok';
			} else if (state == 'ubahPeserta') {
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Ubah Peserta';
				this.modalSize = 'modal-full';
				this.formModalMode = 'edit';
			} else if (state == 'tambahPeserta') {
				if (this.countPeserta >= this.item.peserta_max) {
					this.modalState = 'content-tutup';
					this.modalColor = '';

					this.modalTitle = 'Diklat sudah penuh';
					this.modalContent = 'Maaf anda tidak bisa mendaftarkan peserta lagi, karena kuota peserta pada diklat ini sudah terpenuhi.';
				}

				if (this.itemDataPesertaTerdaftar.data.length >= this.item.peserta_max_cu && this.currentUser.id_cu != 0) {
					this.modalState = 'content-tutup';
					this.modalColor = '';
					this.modalTitle = 'CU anda tidak bisa mendaftarkan peserta lagi';
					this.modalContent = 'Maaf anda tidak bisa mendaftarkan peserta lagi, karena jumlah maksimal peserta per CU adalah ' + this.item.peserta_max_cu + ' orang.';
				} else {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Peserta';
					this.modalSize = 'modal-full';
					this.formModalMode = 'create';
				}
			} else if (state == 'tambahNilai') {
				this.modalState = 'normal2';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Nilai';
				this.formModalMode = 'create';
			} else if (this.state == 'generateSertifikat') {
				this.modalState = 'success';
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