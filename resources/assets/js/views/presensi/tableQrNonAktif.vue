<template>
	<div>


		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query"
			:itemDataStat="itemDataStat" @fetch="fetch">

			<!-- button desktop -->

			<template slot="button-desktop">
				<!-- tambah -->
				<button @click="modalOpen('create')" class="btn btn-light mb-1"
					v-if="currentUser.can && currentUser.can['create_qr']">
					<i class="icon-plus3"></i> Tambah
				</button>

				<button v-if="currentUser.can && currentUser.can['update_qr']" @click.prevent="modalOpen('edit')" class="btn btn-light mb-1" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<!-- ubah-->
				<button @click.prevent="ubahStatus()" class="btn btn-light mb-1"
					v-if="currentUser.can && currentUser.can['index_qr']"
					:disabled="!selectedItem.id || selectedItem.status == 'aktif'">
					<i class="icon-check mr-2"></i> Aktifkan
				</button>

				<!-- detail-->
				<button @click.prevent="modalConfirmOpen('hapus')"  class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['destroy_qr']"
					:disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

			</template>

			<!-- button mobile -->
				<template slot="button-mobile">

					<!-- tambah -->
					<button @click="modalOpen('create')" class="btn btn-light btn-block mb-1"
						v-if="currentUser.can && currentUser.can['create_qr']">
						<i class="icon-plus3"></i> Tambah
					</button>

					<button v-if="currentUser.can && currentUser.can['update_qr']" @click.prevent="modalOpen('edit')" class="btn btn-light btn-block mb-1" :disabled="!selectedItem.id">
						<i class="icon-pencil5"></i> Ubah
					</button>

					<!-- ubah-->
					<button @click.prevent="ubahStatus()" class="btn btn-light btn-block mb-1"
						v-if="currentUser.can && currentUser.can['index_qr']"
						:disabled="!selectedItem.id || selectedItem.status == 'aktif'">
						<i class="icon-check mr-2"></i> Aktifkan
					</button>

					<!-- detail-->
					<button @click.prevent="modalConfirmOpen('hapus')"  class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['destroy_qr']"
						:disabled="!selectedItem.id">
						<i class="icon-bin2"></i> Hapus
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
						<check-value :value="props.item.kegiatan_name"></check-value>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.status"></check-value>
					</td>
					<td v-if="!columnData[3].hide">
						<check-value :value="props.item.jam_masuk"></check-value>
					</td>
					<td v-if="!columnData[4].hide">
						<check-value :value="props.item.jam_pulang"></check-value>
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.jenis"></check-value>
					</td>
					<td v-if="!columnData[6].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[7].hide">
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
				<form-absen :qr="selectedItem.id" :mode="mod" @tutup="modalTutup"></form-absen>
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
		formAbsen
	},
	props: ['title', 'kelas'],
	data () {
		return {
			selectedItem: [],
			query: {
				order_column: "kegiatan_name",
				order_direction: "asc",
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
					title: 'Kegiatan',
					name: 'kegiatan_name',
					sort: true,
					hide: false,
					tipe: 'string',
					filter: true,
					filterDefault: true,
				},
				{
					title: 'Status',
					name: 'status',
					sort: false,
					hide: false,
					tipe: "string",
				},

				{
					title: 'Jam Masuk',
					name: 'jam_masuk',
					sort: false,
					hide: false,
					tipe: "string",
				},

				{
					title: 'Jam Pulang',
					name: 'jam_pulang',
					sort: false,
					hide: false,
					tipe: "string",
				},

				{
					title: 'Jenis',
					name: 'jenis',
					sort: false,
					hide: false,
					tipe: "string",
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
				}
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
			mod:''
		}
	},
	created () {
		this.fetch(this.query);
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
				this.modalTitle = this.updateMessage.message;
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
		fetch (params) {
			this.$store.dispatch('presensi/indexQrAll', [params, this.currentUser.id_cu, this.currentUser.id, 'tidak aktif']);
		},

		selectedRow (item) {
			this.selectedItem = item;
		},

		ubahStatus () {
			this.$store.dispatch('presensi/aktifQR', [this.selectedItem.id, this.currentUser.id, 'aktif']);
		},

		tampilkan () {
			this.$router.push({ name: 'presensi_qr', params: { id_qr: this.selectedItem.id } });
		},

		modalConfirmOpen (state) {
			this.modalShow = true;
			this.modalState = 'confirm-tutup';
			this.state = state;

			if (state == 'hapus') {
				this.modalTitle = 'Hapus QR Presensi Untuk Kegiatan ' + ' ' + this.selectedItem.kegiatan_name + ' ?';
				this.modalButton = 'Iya, Hapus';
			}
		},

		modalOpen (mode) {
			this.mod = mode;
			this.modalShow = true;
			this.modalSize = '';
			this.isDisableTable = true;
			this.modalState = 'normal1';
			this.modalColor = 'bg-primary';
			if (mode == 'create') {
				this.modalTitle = 'Tambah QR Presensi';
			} else { 
				this.modalTitle = 'Edit QR Presensi';
			}
			this.modalSize = 'modal-md';
			this.formModalMode = 'create';
		},

		modalTutup () {
			this.modalShow = false;
		},

		modalConfirmOk () {
			if (this.state == 'hapus') {
				this.$store.dispatch('presensi/destroy', [this.selectedItem.id,'qr']);
			}
		},
		modalBackgroundClick () {
			// if (this.modalState === 'success') {
			// 	this.modalTutup;
			// } else if (this.modalState === 'loading') {
			// 	// do nothing
			// } else {
			// 	this.modalShow = false
			// }
		},
	},

	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),
		...mapGetters('presensi', {
			itemData: 'dataS',
			itemDataStat: 'dataStatS',
			updateMessage: 'update',
			updateStat: 'updateStat',
			qrstat: 'qrStat',
			pesan: 'message'
		}),
	}
}
</script>