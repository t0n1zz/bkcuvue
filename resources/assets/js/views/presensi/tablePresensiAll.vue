
<template>
	<div>

		<Select :kelas="'semua'"></Select>
		<div class="card">
			<div class="nav-tabs-responsive">
				<ul class="nav nav-tabs nav-tabs-bottom flex-nowrap mb-0">
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
			:itemDataStat="itemDataStat" @fetch="fetch" :isNoKolom="true" :isNoExcel="true">

			<!-- button desktop -->

			<template slot="button-desktop">
				<!-- tambah -->
				<button :disabled="today != selectedItem.tanggal" @click="modalOpen('terlambat')" class="btn btn-light mb-1"
					v-if="tabName == 'keterlambatan'">
					<i class="icon-plus3"></i>Isi Alasan Terlambat
				</button>

				<!-- tambah -->
				<button :disabled="selectedItem == '' || today != selectedItem.tanggal" @click="modalOpen('pulangawal')"
					class="btn btn-light mb-1" v-if="tabName == 'pulangawal'"><i class="icon-pencil5"></i>
					Ubah Alasan
				</button>

				<button :disabled="selectedItem == '' || today != selectedItem.tanggal" @click="modalOpen('keluarkantor')"
					class="btn btn-light mb-1" v-if="tabName == 'keluarjamkantor'"><i class="icon-pencil5"></i>
					Ubah Alasan
				</button>

				<button @click="modalOpen('izin')" class="btn btn-light mb-1" v-if="tabName == 'izin'">
					<i class="icon-plus3"></i>Tambah Izin
				</button>

				<button @click="modalOpen('kegiatan')" class="btn btn-light mb-1" v-if="tabName == 'kegiatan'">
					<i class="icon-plus3"></i>Tambah Kegiatan
				</button>

				<button @click="modalOpen('sakit')" class="btn btn-light mb-1" v-if="tabName == 'sakit'">
					<i class="icon-plus3"></i>Tambah Izin Sakit
				</button>

				<button :disabled="selectedItem==''" @click="modalOpen('izinEdit')" class="btn btn-light mb-1" v-if="tabName == 'izin'">
					<i class="icon-pencil5"></i>Ubah
				</button>

				<button :disabled="selectedItem==''" @click="modalOpen('sakitEdit')" class="btn btn-light mb-1" v-if="tabName == 'sakit'">
					<i class="icon-pencil5"></i>Ubah
				</button>

				<button @click="modalOpen('cutiEdit')" class="btn btn-light mb-1" v-if="tabName == 'cuti'">
					<i class="icon-pencil5"></i>Ubah
				</button>
				<button @click="modalOpen('kuliah')" class="btn btn-light mb-1" v-if="tabName == 'kuliah'">
					<i class="icon-plus3"></i>Tambah Aktivis Kuliah
				</button>

				<button @click="modalOpen('seragam')" class="btn btn-light mb-1" v-if="tabName == 'seragam'">
					<i class="icon-plus3"></i>Tambah Pelanggaran Atribut
				</button>

				<button :disabled="selectedItem == ''" @click="modalOpen('seragamEdit')" class="btn btn-light mb-1"
					v-if="tabName == 'seragam'">
					<i class="icon-pencil5"></i>
					Ubah
				</button>

				<button @click="modalOpen('off2')" class="btn btn-light mb-1" v-if="tabName == 'off'">
					<i class="icon-plus3"></i>Tambah Aktivis Off
				</button>

				<button :disabled="selectedItem == ''" @click="modalConfirmOpen('hapus')" class="btn btn-light mb-1"
					v-if="tabName != 'masukkantor'">
					<i class="icon-bin2"></i>Hapus
				</button>

				<button @click="modalOpen('off')" class="btn btn-light mb-1" v-if="tabName == 'off'">
					<i class="icon-upload"></i>Upload Data Off
				</button>
				<button @click="modalOpen('laporan')" class="btn btn-light mb-1">
					<i class="icon-download"></i>Download Laporan
				</button>
			</template>

			<!-- button mobile -->
			<template slot="button-mobile">
				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create' }" class="btn btn-light btn-block mb-1"
					v-if="currentUser.can && currentUser.can['create_' + kelas] && currentUser.id_cu == 0">
					Isi Alasan terlambat
				</router-link>
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
						<check-value :value="props.item.lama"></check-value></td>
					<td v-if="!columnData[13].hide">
								<check-value :value="props.item.alasan_penolakan"></check-value>
							</td>
							<td v-if="!columnData[14].hide && !props.item.tanggal_acc1">
								<check-value :value="'Menunggu Persetujuan Personalia'"></check-value>
							</td>
							<td v-else-if="!columnData[14].hide && !props.item.tanggal_acc2 && props.item.tanggal_acc1">
									<check-value :value="'Menunggu Persetujuan Atasan'"></check-value>
							</td>
							<td v-else-if="!columnData[14].hide && props.item.tanggal_acc2 && props.item.tanggal_acc1 && !props.item.alasan_penolakan">
								<check-value :value="'Cuti Disetujui'"></check-value>
							</td>
							<td v-else-if="!columnData[14].hide && props.item.tanggal_acc2 && props.item.tanggal_acc1 && props.item.alasan_penolakan">
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
				<div v-if="this.laporan == false" class="col-md-12">
					<div class="form-group">
						<div>
							<h5>Tanggal Keterlambatan : {{ $options.filters.date(this.selectedItem.tanggal) }}</h5>
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
							<i class=""></i>Kembali</button>

						<button :disabled="alasan == ''" type="submit" value="submit" class="btn btn-primary"
							@click.prevent="updateAlasan()">
							<i class="icon-floppy-disk"></i>Simpan</button>
					</div>
				</div>
				<div v-else>
					<div class="text-center col-md-12">
						<h5>Pilih Periode :</h5>
								<div class="text-center" style="margin-bottom: 20px;">
									<select class="form-control" data-width="100%" v-model="tahun">
										<option value="2023">2023</option>
									</select>
								</div>
						<button class="btn btn-primary btn-block" @click.prevent="downloadLaporan(1)">
							<i class=""></i>Konsolidasi Bulanan</button><br>
						<button :disabled="alasan == ''" type="submit" value="submit" class="btn btn-primary btn-block"
							@click.prevent="downloadLaporan(2)" >
							Form Kehadiran Kerja Manajemen Konsolidasi</button>
						<button type="submit" value="submit" class="btn btn-warning btn-block"
								@click.prevent="modalTutup" >
								Batal</button>
					</div>
				</div>
			</template>
			<template slot="modal-body2">
				<div>
					<Kuliah :tipe="tabName" @tutup="modalTutup"></Kuliah>
				</div>
			</template>
			<template slot="modal-body3">
				<div v-if="tabName!='cuti'">
					<form-pelanggaran-seragam :user="selectedItem" :tipe="tipe"
						@tutup="modalTutup"></form-pelanggaran-seragam>
				</div>
				<div v-else>
					<Cuti @tutup="modalTutup" :dataCuti="selectedItem" :tipe="'cutiEdit'" :page="'semua'"></Cuti>
				</div>
			</template>
			<template slot="modal-body4">
				<div v-if="tabName == 'off'">
					<upload-excel @tutup="modalTutup"></upload-excel>
				</div>
				<div v-else-if="tabName == 'izin' || tabName == 'sakit' || tabName == 'kegiatan'">
					<izin @tutup="modalTutup" :tipe="tabName" :kelas="'semua'" :editData="selectedItem" :editFlag="flag">
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
import formAbsen from './formQR.vue';
import Select from './select.vue';
import Kuliah from './formKuliah.vue';
import Izin from './formIzin.vue';
import uploadExcel from './uploadExcel.vue';
import formPelanggaranSeragam from './formPelanggaranSeragam.vue';
import FileSaver from 'file-saver';
import Cuti from './formCuti.vue';


export default {
	components: {
		DataViewer,
		appModal,
		checkValue,
		formAbsen,
		Select,
		Kuliah,
		formPelanggaranSeragam,
		uploadExcel,
		Izin,
		FileSaver,
		Cuti
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
					filterDefault: true,
				},

				{
					title: 'Nama',
					name: 'aktivis.name',
					sort: true,
					hide: false,
					tipe: 'string',
					filter: true,
					filterDefault: true,
				},

				{
					title: 'Seragam',
					name: 'seragam_kerja.seragam_name',
					sort: false,
					hide: true,
					tipe: "string",
					filterDefault: true,
				},

				{
					title: 'Kegiatan',
					name: 'kegiatan',
					sort: true,
					hide: true,
					tipe: 'string',
					filter: true,
					filterDefault: true,
				},

				{
					title: 'Jenis',
					name: 'jenis',
					sort: true,
					hide: false,
					tipe: 'string',
					filter: true,
					filterDefault: true,
				},
				{
					title: 'Alasan',
					name: 'alasan',
					sort: false,
					hide: false,
					tipe: "string",
					filterDefault: true,
				},

				{
					title: 'Lama(Menit)',
					name: 'lama',
					sort: false,
					hide: false,
					tipe: "string",
					filterDefault: true,
				},


				{
					title: 'Jam Masuk',
					name: 'jam_masuk',
					sort: false,
					hide: true,
					tipe: "string",
					filterDefault: true,
				},

				{
					title: 'Jam Pulang',
					name: 'jam_pulang',
					sort: false,
					hide: true,
					tipe: "string",
					filterDefault: true,
				},

				{
					title: 'Tanggal Mulai',
					name: 'tanggal_mulai',
					sort: true,
					hide: true,
					tipe: 'string',
					filter: true,
					filterDefault: true,
				},

				{
					title: 'Tanggal Masuk',
					name: 'tanggal_selesai',
					sort: true,
					hide: true,
					tipe: 'string',
					filter: true,
					filterDefault: true,
				},

				{
					title: 'Lama (Hari)',
					name: 'lama',
					sort: true,
					hide: true,
					tipe: 'string',
					filter: true,
					filterDefault: true,
				},

				{
					title: 'Alasan Penolakan',
					name: 'alasan_penolakan',
					sort: false,
					hide: true,
					tipe: "string",
					filterDefault: true,
				},

				{
					title: 'Status Persetujuan',
					name: 'status_persetujuan',
					sort: false,
					hide: true,
					tipe: "string",
					filterDefault: true,
				},

				{
					title: 'Tgl. / Waktu Buat',
					name: 'created_at',
					tipe: 'datetime',
					sort: true,
					hide: false,
					filter: true,
				},

				{
					title: 'Tgl. / Waktu Ubah',
					name: 'updated_at',
					tipe: 'datetime',
					sort: true,
					hide: false,
					filter: true,
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
			tipe: '',
			flag: false,
			laporan: false,
			tahun:'2023',
		}
	},
	created () {
		this.checkUser('personalia_akses', this.$route.params.cu);
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
		downloadLaporan (tipe) {
			this.modalShow = true;
			this.modalState = 'loading';
			axios.post('/api/downloadLaporanPresensi', { tipe: tipe , periode: this.tahun}, {
				responseType: 'blob'
			}).then((response) => {
				let name = ''
				if (tipe == 1) {
					name = 'Laporan Konsolidasi Bulanan'
				} else {
					name = 'Form Kehadiran Kerja Manajemen Konsolidasi'
				}
				FileSaver.saveAs(response.data, name + '.xlsx')
				this.modalState = 'success';
				this.modalTitle = 'Berhasil Di Download'
			})
		},

		checkUser (permission, id_cu) {
			if (this.currentUser) {
				if (!this.currentUser.can || !this.currentUser.can[permission]) {
					this.$router.push('/notFound');
				}
				if (!id_cu || this.currentUser.id_cu) {
					if (this.currentUser.id_cu != 0 && this.currentUser.id_cu != id_cu) {
						this.$router.push('/notFound');
					}
				}
			}
		},

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
			this.$store.dispatch('presensi/indexPresensi', [this.query, this.tahun, this.bulan, this.tabName, 'semua']);
		},

		fetch (p) {
			this.tahun = this.$route.params.tahun
			this.bulan = this.$route.params.bulan
			this.$store.dispatch('presensi/indexPresensi', [p, this.tahun, this.bulan, this.tabName, 'semua']);
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

		modalConfirmOpen (state) {
			this.modalShow = true;
			this.modalState = 'confirm-tutup';
			this.state = state;

			if (state == 'hapus') {
				this.modalTitle = 'Hapus Data?';
				this.modalButton = 'Iya, Hapus';
			}
		},

		modalOpen (state) {
			if (state == 'terlambat' || state == 'pulangawal' || state == 'keluarkantor' || state == 'laporan') {
				if (state == 'laporan') {
					this.laporan = true
					this.modalTitle = 'Download Laporan Presensi'
				} else {
					this.laporan = false
					this.modalTitle = 'Tambah ';
				}
				this.alasan = this.selectedItem.alasan
				this.jenis = this.selectedItem.jenis
				this.modalShow = true;
				this.modalSize = '';
				this.isDisableTable = true;
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';
				this.modalSize = 'modal-md';
				this.formModalMode = 'create';
			} else if (state == 'kuliah' || state == 'off2') {
				this.alasan = this.selectedItem.alasan
				this.jenis = this.selectedItem.jenis
				this.modalShow = true;
				this.modalSize = '';
				this.isDisableTable = true;
				this.modalState = 'normal2';
				this.modalColor = 'bg-primary';
				if (state == 'kuliah') {
					this.modalTitle = 'Tambah Aktivis Kuliah';
				} else {
					this.modalTitle = 'Tambah Aktivis Off Bergilir';
				}

				this.modalSize = 'modal-md';
				this.formModalMode = 'create';
			} else if (state == 'seragam' || state == 'seragamEdit') {
				this.tipe = state;
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
			} else if (state == 'izin' || state == 'sakit' || state == 'izinEdit' || state == 'sakitEdit' || state == 'kegiatan') {
				if (state == 'izinEdit' || state == 'sakitEdit') {
					this.flag = true
				} else {
					this.flag = false
				}
				this.modalShow = true;
				this.modalSize = '';
				this.isDisableTable = true;
				this.modalState = 'normal4';
				this.modalColor = 'bg-primary';
				if (state == 'kegiatan') {
					this.modalTitle = 'Kegiatan Kantor';
				} else {
					this.modalTitle = 'Izin/Sakit';
				}

				this.modalSize = 'modal-md';
				this.formModalMode = 'create';
			} else if (state == 'cutiEdit') {
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
		},

		updateAlasan () {
			this.formUpdate.id = this.selectedItem.id
			this.formUpdate.alasan = this.alasan
			this.formUpdate.jenis = this.jenis
			this.$store.dispatch('presensi/updateAlasan', [this.formUpdate, this.tabName]);
		},

		modalConfirmOk () {
			if (this.state == 'hapus') {
				if (this.tabName == 'seragam') {
					this.$store.dispatch('presensi/destroy', [this.selectedItem.seragam_kerja.id, this.tabName]);
				} else {
					this.$store.dispatch('presensi/destroy', [this.selectedItem.id, this.tabName]);
				}

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

	},

	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),

		...mapGetters('presensi', {
			itemData: 'terlambatS',
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
}</style>