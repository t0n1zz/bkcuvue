
<template>
	<div>

		<!-- <Select :kelas="'semua'"></Select> -->
		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query"
			:itemDataStat="itemDataStat" @fetch="fetch" :isNoKolom="true" :isNoExcel="true">

			<!-- button desktop -->

			<template slot="button-desktop">
				<!-- tambah -->
				<button :disabled="selectedItem == ''" @click="modalConfirmOpen('setujui')" class="btn btn-light mb-1">
					<i class="icon-check"></i>Setujui
				</button>
				<button :disabled="selectedItem == ''" @click="modalOpen('tolak')" class="btn btn-light mb-1">
					<i class="icon-x"></i>Tolak
				</button>
			</template>

			<!-- button mobile -->
			<template slot="button-mobile">
				<button :disabled="today != selectedItem.tanggal" @click="modalOpen('terlambat')" class="btn btn-light mb-1"
					v-if="tabName == 'keterlambatan'">
					<i class="icon-plus3"></i>Isi Alasan Terlambat
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
						<check-value :value="props.item.aktivis.name"></check-value>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="$options.filters.date(props.item.tanggal)"></check-value>
					</td>
					<td v-if="!columnData[3].hide">
						<check-value :value="props.item.jenis"></check-value>
					</td>
					<td v-if="!columnData[4].hide">
						<check-value :value="props.item.alasan"></check-value>
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="$options.filters.date(props.item.tanggal_mulai)"></check-value>
					</td>
					<td v-if="!columnData[6].hide">
						<check-value :value="$options.filters.date(props.item.tanggal_selesai)"></check-value>
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.lama"></check-value>
					</td>
					<td v-if="!columnData[8].hide && !props.item.tanggal_acc1">
						<check-value :value="'-'"></check-value>
					</td>
					<td v-else>
						<check-value :value="props.item.tanggal_acc1"></check-value>
					</td>
					<td v-if="!columnData[9].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[10].hide">
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
				<div>
					<h5>Alasan Penolakan :</h5>
					<div class="">
						<textarea name="" v-model="form.alasan" rows="10"></textarea>
					</div>
					<div class="text-center">
						<button class="btn btn-warning" @click.prevent="modalTutup">
							<i class=""></i>Batal</button>

						<button :disabled="form.alasan == ''" type="submit" value="submit" class="btn btn-primary"
							@click.prevent="verifikasi()">
							<i class="icon-floppy-disk"></i>Simpan</button>
					</div>
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

export default {
	components: {
		DataViewer,
		appModal,
		checkValue,
		formAbsen,
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
			columnData: [
				{
					title: 'No.',
					name: 'No.',
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
					title: 'Tanggal Pengajuan',
					name: 'tanggal',
					sort: true,
					hide: false,
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
					title: 'Tanggal Mulai',
					name: 'tanggal_mulai',
					sort: true,
					hide: false,
					tipe: 'string',
					filter: true,
					filterDefault: true,
				},

				{
					title: 'Tanggal Selesai',
					name: 'tanggal_selesai',
					sort: true,
					hide: false,
					tipe: 'string',
					filter: true,
					filterDefault: true,
				},

				{
					title: 'Lama (Hari)',
					name: 'lama',
					sort: true,
					hide: false,
					tipe: 'string',
					filter: true,
					filterDefault: true,
				},

				{
					title: 'Verifikasi Personalia',
					name: 'tanggal_acc1',
					sort: true,
					hide: false,
					tipe: 'string',
					filter: true,
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

			form: {
				status_verif: '',
				alasan: ''
			},
			state: '',
			modalShow: false,
			modalState: '',
			modalTitle: '',
			modalContent: '',
			modalButton: '',
			modalSize: '',
			modalColor: '',
			tahun: '',
			bulan: '',
			jenis: '',
			alasan: '',
			today: '',
			tabName: 'keterlambatan',
		}
	},
	created () {
		this.fetch(this.query);
		this.checkUser('index_verifikasi', this.$route.params.cu);
	},

	watch: {
		// check route changes
		'$route' (to, from) {
			this.fetch(this.query);
		},

		// when updating data
		updateStat (value) {
			this.selectedItem = [];
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
	},

	methods: {
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

		fetch (p) {
			this.tahun = this.$route.params.tahun
			this.bulan = this.$route.params.bulan
			this.$store.dispatch('presensi/indexCuti', [p, this.currentUser.id_cu, this.tahun, this.bulan]);
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

		modalConfirmOpen (state) {
			this.form.status_verif = state
			this.modalShow = true;
			this.modalState = 'confirm-tutup';
			this.state = state;
			this.modalTitle = 'Setujui Cuti?';
		},

		modalOpen (state) {
			this.form.status_verif = state
			if (state == 'tolak') {
				this.modalTitle = 'Penolakan Cuti'
				this.alasan = this.selectedItem.alasan
				this.jenis = this.selectedItem.jenis
				this.modalShow = true;
				this.modalSize = '';
				this.isDisableTable = true;
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';
				this.modalSize = 'modal-md';
				this.formModalMode = 'create';
			}
		},


		modalTutup () {
			this.modalShow = false;
		},


		modalConfirmOk () {
			this.verifikasi()
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

		verifikasi () {
			this.$store.dispatch('presensi/verifikasiCuti', [this.form, this.selectedItem.id]);
		}

	},

	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),

		...mapGetters('presensi', {
			itemData: 'dataS',
			itemDataStat: 'dataStatS',
			updateMessage: 'updateMessage',
			updateStat: 'updateStat',
			pesan: 'message',
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