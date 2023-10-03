
<template>
	<div>

		<Select :kelas="'pribadi'"></Select>
		<div class="card">
			<div class="nav-tabs-responsive">
				<ul class="nav nav-tabs nav-tabs-solid bg-light">
					<li class="nav-item"><a href="#" class="nav-link" :class="{ 'active': tabName == 'keterlambatan' }"
							@click.prevent="changeTab('keterlambatan')">
							KETERLAMBATAN
						</a></li>
					<li class="nav-item"><a href="#" class="nav-link" :class="{ 'active': tabName == 'pulangawal' }"
							@click.prevent="changeTab('pulangawal')">
							PULANG AWAL
						</a></li>
					<li class="nav-item"><a href="#" class="nav-link" :class="{ 'active': tabName == 'keluarjamkantor' }"
							@click.prevent="changeTab('keluarjamkantor')">
							KELUAR JAM KANTOR
						</a></li>
					<li class="nav-item"><a href="#" class="nav-link" :class="{ 'active': tabName == 'kegiatan' }"
							@click.prevent="changeTab('kegiatan')">
							KEGIATAN
						</a></li>
					<li class="nav-item"><a href="#" class="nav-link" :class="{ 'active': tabName == 'masukkantor' }"
							@click.prevent="changeTab('masukkantor')">
							MASUK KANTOR
						</a></li>
					<li class="nav-item"><a href="#" class="nav-link" :class="{ 'active': tabName == 'alpha' }"
							@click.prevent="changeTab('alpha')">
							ALPHA
						</a></li>
					<li class="nav-item"><a href="#" class="nav-link" :class="{ 'active': tabName == 'kuliah' }"
							@click.prevent="changeTab('kuliah')">
							KULIAH
						</a></li>
					<li class="nav-item"><a href="#" class="nav-link" :class="{ 'active': tabName == 'off' }"
							@click.prevent="changeTab('off')">
							OFF BERGILIR
						</a></li>
					<li class="nav-item"><a href="#" class="nav-link" :class="{ 'active': tabName == 'izin' }"
							@click.prevent="changeTab('izin')">
							IZIN
						</a></li>
					<li class="nav-item"><a href="#" class="nav-link" :class="{ 'active': tabName == 'sakit' }"
							@click.prevent="changeTab('sakit')">
							SAKIT
						</a></li>
					<li class="nav-item"><a href="#" class="nav-link" :class="{ 'active': tabName == 'cuti' }"
							@click.prevent="changeTab('cuti')">
							CUTI
						</a></li>
					<li class="nav-item"><a href="#" class="nav-link" :class="{ 'active': tabName == 'seragam' }"
							@click.prevent="changeTab('seragam')">
							SERAGAM KERJA
						</a></li>
				</ul>
			</div>
		</div>
		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query"
			:itemDataStat="itemDataStat" @fetch="fetch" :isNoKolom="true">

			<!-- button desktop -->

			<template slot="button-desktop">
				<!-- tambah -->
				<button :disabled="today != selectedItem.tanggal" @click="modalOpen('terlambat')" class="btn btn-light mb-1"
					v-if="currentUser.can && tabName == 'keterlambatan'">
					<i class="icon-pencil5"></i>Ubah
				</button>

				<!-- tambah -->
				<button :disabled="today != selectedItem.tanggal || !selectedItem" @click="modalOpen('pulangawal')"
					class="btn btn-light mb-1" v-if="tabName == 'pulangawal'">
					<i class="icon-pencil5"></i>Ubah
				</button>

				<button @click="modalOpen('izin')" class="btn btn-light mb-1" v-if="tabName == 'izin'">
					<i class="icon-plus3"></i>Tambah
				</button>

				<button @click="modalOpen('cuti')" class="btn btn-light mb-1" v-if="tabName == 'cuti'">
					<i class="icon-plus3"></i>Tambah
				</button>

				<button :disabled="selectedItem.tanggal_acc1 || selectedItem == ''" @click="modalOpen('cutiEdit')"
					class="btn btn-light mb-1" v-if="tabName == 'cuti'">
					<i class="icon-pencil5"></i>Ubah
				</button>

				<button @click="modalOpen('sakit')" class="btn btn-light mb-1" v-if="tabName == 'sakit'">
					<i class="icon-plus3"></i>Tambah
				</button>
				<button :disabled="!selectedItem.id || selectedItem.status_acc2 !='disetujui'" @click="downloadSKCuti" class="btn btn-light mb-1" v-if="tabName == 'cuti'">
					<i class="icon-download"></i>Download SK Cuti
				</button>

				<button :disabled="!selectedItem.id " @click="downloadSuratPengajuanCuti" class="btn btn-light mb-1" v-if="tabName == 'cuti'">
					<i class="icon-download"></i>Download Surat Pengajuan Cuti
				</button>
			</template>

			<!-- button mobile -->
			<template slot="button-mobile">
				<!-- tambah -->
				<button :disabled="today != selectedItem.tanggal" @click="modalOpen('terlambat')"
					class="btn btn-light btn-block mb-1" v-if="currentUser.can && tabName == 'keterlambatan'">
					<i class="icon-pencil5"></i>Ubah
				</button>

				<!-- tambah -->
				<button :disabled="today != selectedItem.tanggal || !selectedItem" @click="modalOpen('pulangawal')"
					class="btn btn-light btn-block mb-1" v-if="tabName == 'pulangawal'">
					<i class="icon-pencil5"></i>Ubah
				</button>

				<button @click="modalOpen('izin')" class="btn btn-light btn-block mb-1" v-if="tabName == 'izin'">
					<i class="icon-plus5"></i>Tambah
				</button>

				<button @click="modalOpen('cuti')" class="btn btn-light btn-block mb-1" v-if="tabName == 'cuti'">
					<i class="icon-plus5"></i>Tambah
				</button>

				<button @click="downloadSKCuti" class="btn btn-light btn-block mb-1" v-if="tabName == 'cuti'" :disabled="!selectedItem.id || selectedItem.status_acc2 != 'disetujui'">
					<i class="icon-plus5"></i>Download SK Cuti
				</button>

				<button @click="downloadSuratPengajuanCuti" class="btn btn-light btn-block mb-1" v-if="tabName == 'cuti'" :disabled="!selectedItem.id">
					<i class="icon-plus5"></i>Download Surat Pengajuan Cuti
				</button>

				<button :disabled="selectedItem.tanggal_acc1 || selectedItem == ''" @click="modalOpen('cutiEdit')"
					class="btn btn-light btn-block mb-1" v-if="tabName == 'cuti'">
					<i class="icon-pencil5"></i>Ubah
				</button>

				<button @click="modalOpen('sakit')" class="btn btn-light btn-block mb-1" v-if="tabName == 'sakit'">
					<i class="icon-plus5"></i>Tambah
				</button>
			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id == props.item.id }" @click="selectedRow(props.item)"
					class="text-nowrap">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page - 1) * +itemData.per_page + '.' }}
					</td>
					<td v-if="!columnData[1].hide">
						<check-value :value="$options.filters.date(props.item.tanggal)"></check-value>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.aktivis.name"></check-value>
					</td>
					<td v-if="!columnData[3].hide && props.item.seragam_kerja">
						<check-value :value="props.item.seragam_kerja.seragam_name"></check-value>
					</td>
					<td v-else-if="!columnData[3].hide && !props.item.seragam_kerja">
						<check-value :value="'-'"></check-value>
					</td>
					<td v-if="!columnData[4].hide && props.item.kegiatan">
						<check-value :value="props.item.kegiatan.name"></check-value>
					</td>
					<td v-else-if="!columnData[4].hide && !props.item.kegiatan">
						<check-value :value="props.item.kegiatan_name"></check-value>
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.jenis"></check-value>
					</td>
					<td v-if="!columnData[6].hide">
						<check-value :value="props.item.alasan"></check-value>
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.lama"></check-value>
					</td>
					<td v-if="!columnData[8].hide && tabName == 'kegiatan'">
						<check-value :value="'-'"></check-value>
					</td>
					<td v-else-if="!columnData[8].hide">
						<check-value :value="props.item.jam_masuk"></check-value>
					</td>
					<td v-if="!columnData[9].hide">
						<check-value :value="props.item.jam_pulang"></check-value>
					</td>
					<td v-if="!columnData[10].hide">
						<check-value :value="$options.filters.date(props.item.tanggal_mulai)"></check-value>
					</td>
					<td v-if="!columnData[11].hide && props.item.tanggal_selesai">
						<check-value :value="$options.filters.date(props.item.tanggal_selesai)"></check-value>
					</td>
					<td v-if="!columnData[11].hide && !props.item.tanggal_selesai">
						<check-value :value="'-'"></check-value>
					</td>
					<td v-if="!columnData[12].hide">
						<check-value :value="props.item.lama"></check-value>
					</td>
					<td v-if="!columnData[13].hide">
						<check-value :value="props.item.alasan_penolakan"></check-value>
					</td>
					<td v-if="!columnData[14].hide && !props.item.tanggal_acc1">
						<check-value :value="'Menunggu Persetujuan Personalia'"></check-value>
					</td>
					<td v-else-if="!columnData[14].hide && !props.item.tanggal_acc2 && props.item.tanggal_acc1">
						<check-value :value="'Menunggu Persetujuan Atasan'"></check-value>
					</td>
					<td
						v-else-if="!columnData[14].hide && props.item.tanggal_acc2 && props.item.tanggal_acc1 && !props.item.alasan_penolakan">
						<check-value :value="'Cuti Disetujui'"></check-value>
					</td>
					<td
						v-else-if="!columnData[14].hide && props.item.tanggal_acc2 && props.item.tanggal_acc1 && props.item.alasan_penolakan">
						<check-value :value="'Cuti Ditolak'"></check-value>
					</td>
					<td v-if="!columnData[15].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[16].hide">
						<span v-if="props.item.created_at !== props.item.updated_at"
							v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

		</data-viewer>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize"
			:color="modalColor" @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup"
			@failOk="modalTutup" @backgroundClick="modalBackgroundClick">
			<template slot="modal-title">
				{{ modalTitle }}
			</template>
			<template slot="modal-body1">
				<div class="col-md-12">
					<div class="form-group">
						<div>
							<h5 v-if="tabName == 'keterlambatan'">Tanggal Keterlambatan : {{
								$options.filters.date(this.selectedItem.tanggal) }}</h5>
							<h5 v-else-if="tabName == 'pulangawal'">Tanggal Pulang Awal : {{
								$options.filters.date(this.selectedItem.tanggal) }}</h5>
							<h5>Jenis :</h5>
							<div class="text-center">
								<select class="form-control" data-width="100%" v-model="jenis">
									<option disabled="true" value="">PILIH JENIS ALASAN</option>
									<option value="PRIBADI">PRIBADI</option>
									<option value="URUSAN KANTOR">URUSAN KANTOR</option>
								</select>
							</div>
						</div>
						<div>
							<h5>Alasan :</h5>
							<div class="">
								<textarea name="" v-model="alasan" rows="10"></textarea>
							</div>
						</div>
					</div>
					<div class="text-center">
						<button class="btn btn-warning" @click.prevent="modalTutup">
							<i class=""></i>BATAL</button>

						<button :disabled="alasan == ''" type="submit" value="submit" @click.prevent="updateAlasan()"
							class="btn btn-primary">
							<i class="icon-floppy-disk"></i>Simpan</button>
					</div>
				</div>
			</template>
			<template slot="modal-body2">
				<div>
					<Kuliah @tutup="modalTutup"></Kuliah>
				</div>
			</template>
			<template slot="modal-body3">
				<div>
					<Cuti @tutup="modalTutup" :dataCuti="selectedItem" :tipe="mode" :page="'pribadi'"></Cuti>
				</div>
			</template>
			<template slot="modal-body4">
				<div>
					<izin @tutup="modalTutup" :tipe="tabName" :kelas="'pribadi'" :editData="selectedItem" :editFlag="flag">
					</izin>
				</div>
			</template>
		</app-modal>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import DataViewer from '../../components/dataviewer2.vue';
import appModal from '../../components/modal';
import checkValue from '../../components/checkValue.vue';
import Select from './select.vue';
import Kuliah from './formKuliah.vue';
import Izin from './formIzin.vue';
import Cuti from './formCuti.vue';
import FileSaver from 'file-saver';


export default {
	components: {
		DataViewer,
		appModal,
		checkValue,
		Select,
		Kuliah,
		Izin,
		Cuti,
		FileSaver
	},
	props: ['title', 'kelas'],
	data () {
		return {
			selectedItem: [],
			query: {
				order_column: "tanggal",
				order_direction: "desc",
				filter_match: "and",
				limit: 10,
				page: 1,
			},
			tabName: 'info',
			columnData: [
				{
					title: 'No.',
					name: 'No.',
				},


				{
					title: 'Tanggal',
					name: 'tanggal',
					sort: true,
					hide: false,
					tipe: 'string',
					filter: true,
				},

				{
					title: 'Nama',
					name: 'aktivis.name',
					sort: true,
					hide: false,
					tipe: 'string',
					filter: true,
					filterDefault: true
				},

				{
					title: 'Seragam',
					name: 'seragam_kerja.seragam_name',
					sort: false,
					hide: true,
					tipe: "string",
				},

				{
					title: 'Kegiatan',
					name: 'kegiatan',
					sort: true,
					hide: true,
					tipe: 'string',
					filter: true,
				},

				{
					title: 'Jenis',
					name: 'jenis',
					sort: true,
					hide: false,
					tipe: 'string',
					filter: true,
				},
				{
					title: 'Alasan',
					name: 'alasan',
					sort: false,
					hide: false,
					tipe: "string",
				},

				{
					title: 'Lama(Menit)',
					name: 'lama',
					sort: false,
					hide: false,
					tipe: "string",
				},

				{
					title: 'Jam Masuk',
					name: 'jam_masuk',
					sort: false,
					hide: true,
					tipe: "string",
				},

				{
					title: 'Jam Pulang',
					name: 'jam_pulang',
					sort: false,
					hide: true,
					tipe: "string",
				},

				{
					title: 'Tanggal Mulai',
					name: 'tanggal_mulai',
					sort: true,
					hide: true,
					tipe: 'string',
					filter: true,
				},

				{
					title: 'Tanggal Masuk',
					name: 'tanggal_selesai',
					sort: true,
					hide: true,
					tipe: 'string',
					filter: true,
				},

				{
					title: 'Lama (Hari)',
					name: 'lama',
					sort: true,
					hide: true,
					tipe: 'string',
				},

				{
					title: 'Alasan Penolakan',
					name: 'alasan_penolakan',
					sort: false,
					hide: true,
					tipe: "string",
				},

				{
					title: 'Status Persetujuan',
					name: 'status_persetujuan',
					sort: false,
					hide: true,
					tipe: "string",
				},

				{
					title: 'Tgl. / Waktu Buat',
					name: 'created_at',
					tipe: 'datetime',
					sort: true,
					hide: false,
				},

				{
					title: 'Tgl. / Waktu Ubah',
					name: 'updated_at',
					tipe: 'datetime',
					sort: true,
					hide: false,
				},

			],
			state: '',
			modalShow: false,
			modalState: '',
			modalTitle: '',
			modalContent: '',
			modalButton: '',
			// kelas: 'absen',
			modalSize: '',
			modalColor: '',
			tahun: '',
			bulan: '',
			jenis: '',
			alasan: '',
			today: '',
			tabName: 'keterlambatan',
			flag: false,
			mode: ''
		}
	},

	created () {
		this.fetch(this.query);
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();

		this.today = yyyy + '-' + mm + '-' + dd

		this.$store.dispatch('presensi/getUsers', this.currentUser.id_cu);
		
	},

	watch: {
		// check route changes
		'$route' (to, from) {
			this.fetch(this.query);
		},


		// when updating data
		updateStat (value) {
			this.modalState = value;
			this.modalButton = 'Ok';

			if (value == "success") {
				this.modalTitle = this.updateMessage;
				this.modalContent = '';
				this.fetch();
			} else if (value == "fail") {
				this.modalContent = this.updateMessage;
			} else {
				this.modalContent = '';
			}
		},

		qrstat (value) {
			this.modalState = value;
			this.modalButton = 'Ok';

			if (value == "success") {
				this.modalTitle = this.pesan;
				this.modalContent = '';
				this.fetch();
			} else if (value == "fail") {
				this.modalContent = this.pesan;
			} else {
				this.modalContent = '';
			}

		}
	},

	methods: {
		changeTab (value) {
			this.selectedItem = [];
			if (value == 'keterlambatan' || value == 'keluarjamkantor') {
				this.query2()
				this.columnData[1].hide = false
				this.columnData[3].hide = true
				this.columnData[4].hide = true
				this.columnData[5].hide = false
				this.columnData[6].hide = false
				this.columnData[7].hide = false
				this.columnData[8].hide = true
				this.columnData[9].hide = true
				this.columnData[10].hide = true
				this.columnData[11].hide = true
				this.columnData[12].hide = true
				this.columnData[13].hide = true
				this.columnData[14].hide = true
			} else if (value == 'pulangawal') {
				this.query2()
				this.columnData[1].hide = false
				this.columnData[3].hide = true
				this.columnData[4].hide = true
				this.columnData[5].hide = false
				this.columnData[6].hide = false
				this.columnData[7].hide = true
				this.columnData[8].hide = true
				this.columnData[9].hide = false
				this.columnData[10].hide = true
				this.columnData[11].hide = true
				this.columnData[12].hide = true
				this.columnData[13].hide = true
				this.columnData[14].hide = true
			} else if (value == 'kegiatan') {
				this.query2()
				this.columnData[1].hide = false
				this.columnData[3].hide = true
				this.columnData[4].hide = false
				this.columnData[5].hide = true
				this.columnData[6].hide = true
				this.columnData[7].hide = true
				this.columnData[8].hide = false
				this.columnData[9].hide = false
				this.columnData[10].hide = true
				this.columnData[11].hide = true
				this.columnData[12].hide = true
				this.columnData[13].hide = true
				this.columnData[14].hide = true
			} else if (value == 'masukkantor') {
				this.query2()
				this.columnData[1].hide = false
				this.columnData[3].hide = true
				this.columnData[4].hide = true
				this.columnData[5].hide = true
				this.columnData[6].hide = true
				this.columnData[7].hide = true
				this.columnData[8].hide = false
				this.columnData[9].hide = false
				this.columnData[10].hide = true
				this.columnData[11].hide = true
				this.columnData[12].hide = true
				this.columnData[13].hide = true
				this.columnData[14].hide = true
			} else if (value == 'kuliah' || value == 'off' || value == 'alpha') {
				this.query2()
				this.columnData[1].hide = false
				this.columnData[3].hide = true
				this.columnData[4].hide = true
				this.columnData[5].hide = true
				this.columnData[6].hide = true
				this.columnData[7].hide = true
				this.columnData[8].hide = true
				this.columnData[9].hide = true
				this.columnData[10].hide = true
				this.columnData[11].hide = true
				this.columnData[12].hide = true
				this.columnData[13].hide = true
				this.columnData[14].hide = true
			} else if (value == 'seragam') {
				this.query2()
				this.columnData[1].hide = false
				this.columnData[3].hide = false
				this.columnData[4].hide = true
				this.columnData[5].hide = true
				this.columnData[6].hide = true
				this.columnData[7].hide = true
				this.columnData[8].hide = true
				this.columnData[9].hide = true
				this.columnData[10].hide = true
				this.columnData[11].hide = true
				this.columnData[12].hide = true
				this.columnData[13].hide = true
				this.columnData[14].hide = true
			} else if (value == 'izin' || value == 'sakit') {
				this.query1()
				this.columnData[1].hide = true
				this.columnData[3].hide = true
				this.columnData[4].hide = true
				this.columnData[5].hide = true
				this.columnData[6].hide = false
				this.columnData[7].hide = true
				this.columnData[8].hide = true
				this.columnData[9].hide = true
				this.columnData[10].hide = false
				this.columnData[11].hide = false
				this.columnData[12].hide = false
				this.columnData[13].hide = true
				this.columnData[14].hide = true
			} else if (value == 'cuti') {
				this.query2()
				this.columnData[1].hide = false
				this.columnData[3].hide = true
				this.columnData[4].hide = true
				this.columnData[5].hide = true
				this.columnData[6].hide = false
				this.columnData[7].hide = true
				this.columnData[8].hide = true
				this.columnData[9].hide = true
				this.columnData[10].hide = false
				this.columnData[11].hide = false
				this.columnData[12].hide = false
				this.columnData[13].hide = false
				this.columnData[14].hide = false
			}
			this.tabName = value
			this.$store.dispatch('presensi/indexPresensi', [this.query, this.tahun, this.bulan, this.tabName, 'pribadi']);
		},
		fetch (p) {
			this.tahun = this.$route.params.tahun
			this.bulan = this.$route.params.bulan
			this.$store.dispatch('presensi/indexPresensi', [p, this.tahun, this.bulan, this.tabName, 'pribadi']);
		},

		selectedRow (item) {
			this.selectedItem = item;
		},

		query1 () {
			this.query = {
				order_column: "tanggal_mulai",
				order_direction: "desc",
				filter_match: "and",
				limit: 10,
				page: 1,
			}
		},

		query2 () {
			this.query = {
				order_column: "tanggal",
				order_direction: "desc",
				filter_match: "and",
				limit: 10,
				page: 1,
			}
		},

		modalConfirmOpen (state, isMobile, itemMobile) {
			this.modalShow = true;
			this.modalState = 'confirm-tutup';
			this.state = state;

			if (isMobile) {
				this.selectedItem = itemMobile;
			}

			if (state == 'hapus') {
				this.modalTitle = 'Hapus ' + this.title + ' ' + this.selectedItem.name + ' ?';
				this.modalButton = 'Iya, Hapus';
			}
		},

		modalOpen (state) {
			if (state == 'terlambat' || state == 'pulangawal') {
				this.alasan = this.selectedItem.alasan
				this.jenis = this.selectedItem.jenis
				this.modalShow = true;
				this.modalSize = '';
				this.isDisableTable = true;
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Tambah ';
				this.modalSize = 'modal-md';
				this.formModalMode = 'create';
			} else if (state == 'kuliah') {
				this.alasan = this.selectedItem.alasan
				this.jenis = this.selectedItem.jenis
				this.modalShow = true;
				this.modalSize = '';
				this.isDisableTable = true;
				this.modalState = 'normal2';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Tambah Aktivis Kuliah';
				this.modalSize = 'modal-md';
				this.formModalMode = 'create';
			} else if (state == 'seragam') {
				this.modalShow = true;
				this.modalSize = '';
				this.isDisableTable = true;
				this.modalState = 'normal3';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Pelanggaran Seragam dan Atribut Kerja';
				this.modalSize = 'modal-md';
				this.formModalMode = 'create';
			} else if (state == 'off') {
				this.modalShow = true;
				this.modalSize = '';
				this.isDisableTable = true;
				this.modalState = 'normal4';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Upload Data Off Bergilir';
				this.modalSize = 'modal-md';
				this.formModalMode = 'create';
			} else if (state == 'izin' || state == 'sakit') {
				this.modalShow = true;
				this.modalSize = '';
				this.isDisableTable = true;
				this.modalState = 'normal4';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Izin/Sakit';
				this.modalSize = 'modal-md';
				this.formModalMode = 'create';
			} else if (state == 'cuti' || state == 'cutiEdit') {
				this.mode = state
				this.modalShow = true;
				this.modalSize = '';
				this.isDisableTable = true;
				this.modalState = 'normal3';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Cuti';
				this.modalSize = 'modal-md';
				this.formModalMode = 'create';
			}

		},

		modalTutup () {
			this.modalShow = false;
			this.selectedItem = []
		},

		updateAlasan () {
			this.formUpdate.id = this.selectedItem.id
			this.formUpdate.alasan = this.alasan
			this.formUpdate.jenis = this.jenis
			this.$store.dispatch('presensi/updateAlasan', [this.formUpdate, this.tabName]);
		},

		modalConfirmOk () {
			if (this.state == 'hapus') {
				this.$store.dispatch(this.kelas + '/destroy', this.selectedItem.id);
			} else if (this.state == "updateTerbitkan") {
				this.$store.dispatch(this.kelas + '/updateTerbitkan', this.selectedItem.id);
			} else if (this.state == "updateUtamakan") {
				this.$store.dispatch(this.kelas + '/updateUtamakan', this.selectedItem.id);
			}
		},

		modalBackgroundClick () {
			if (this.modalState === 'success') {
				this.modalTutup;
			} else if (this.modalState === 'loading') {
				// do nothing
			} else {
				this.modalShow = false
			}
		},

		downloadSKCuti () {
			this.modalState = 'loading'
			this.modalShow = true
			axios.post('/api/downloadSkCuti', { id: this.selectedItem.id }, {
				responseType: 'blob'
			}).then((response) => {
				FileSaver.saveAs(response.data, 'SKCUTI.pdf')
				this.modalState = 'success';
				this.modalTitle = 'Berhasil Di Download'
			})
		},

		downloadSuratPengajuanCuti () {
			this.modalState = 'loading'
			this.modalShow = true
			axios.post('/api/downloadSuratPengajuanCuti', { id: this.selectedItem.id }, {
				responseType: 'blob'
			}).then((response) => {
				FileSaver.saveAs(response.data, 'Surat Pengajuan Cuti.pdf')
				this.modalState = 'success';
				this.modalTitle = 'Berhasil Di Download'
			})
		}
	},

	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),

		...mapGetters('presensi', {
			itemData: 'terlambatS',
			data:'data',
			itemDataStat: 'terlambatStat',
			updateMessage: 'updateMessage',
			updateStat: 'updateStat',
			qrstat: 'qrStat',
			pesan: 'message',
			statS: 'dataStatS',
			formUpdate: 'formUpdateAlasan'
		}),
	}
}
</script>

<style>
textarea {
	height: 100%;
	width: 100%;
	-webkit-box-sizing: border-box;
	/* Safari/Chrome, other WebKit */
	-moz-box-sizing: border-box;
	/* Firefox, other Gecko */
	box-sizing: border-box;
	/* Opera/IE 8+ */
}
</style>