<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query"
			:itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl" @fetch="fetch">

			<!-- button desktop -->

			<template slot="button-desktop">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create' }" class="btn btn-light mb-1"
					v-if="currentUser.can && currentUser.can['create_' + kelas] && currentUser.id_cu == 0">
					<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- ubah-->
				<button @click.prevent="goTo(selectedItem.id, 'edit')" class="btn btn-light mb-1"
					v-if="currentUser.can && currentUser.can['update_' + kelas] && currentUser.id_cu == 0"
					:disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<!-- detail-->
				<button @click.prevent="goTo(selectedItem.id, 'detail')" class="btn btn-light btn-icon mb-1"
					v-if="currentUser.can && currentUser.can['update_' + kelas]" :disabled="!selectedItem.id">
					<i class="icon-stack2"></i> Detail
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light mb-1"
					v-if="currentUser.can && currentUser.can['destroy_' + kelas] && currentUser.id_cu == 0"
					:disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

				<button @click.prevent="downloadLaporan" class="btn btn-light mb-1"
					v-if="currentUser.can && currentUser.id_cu == 0 && $route.params.cu != 'semua'"
					:disabled="!itemData">
					<i class="icon-book"></i> Laporan
				</button>

			</template>

			<!-- button mobile -->
			<template slot="button-mobile">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create' }" class="btn btn-light btn-block mb-1"
					v-if="currentUser.can && currentUser.can['create_' + kelas] && currentUser.id_cu == 0">
					<i class="icon-plus3"></i> Tambah
				</router-link>


				<!-- ubah-->
				<button @click.prevent="goTo(selectedItem.id, 'edit')" class="btn btn-light btn-block mb-1"
					v-if="currentUser.can && currentUser.can['update_' + kelas] && currentUser.id_cu == 0"
					:disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<!-- detail-->
				<button @click.prevent="goTo(selectedItem.id, 'detail')" class="btn btn-light btn-icon btn-block mb-1"
					v-if="currentUser.can && currentUser.can['update_' + kelas]" :disabled="!selectedItem.id">
					<i class="icon-stack2"></i> Detail
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-block mb-1"
					v-if="currentUser.can && currentUser.can['destroy_' + kelas] && currentUser.id_cu == 0"
					:disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

				<button @click.prevent="downloadLaporan" class="btn btn-light btn-block mb-1"
					v-if="currentUser.can && currentUser.id_cu == 0 && $route.params.cu != 'semua'"
					:disabled="!selectedItem.id">
					<i class="icon-book"></i> Laporan
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
						<div class="progress">
							<div class="progress-bar-striped bg-orange"
								:style="{ width: Math.round((props.item.monitoring_rekom_ok_count / props.item.monitoring_rekom_count) * 100) + '%' }">
								<span class="text-default font-size-lg">
									&nbsp;
									{{ Math.round((props.item.monitoring_rekom_ok_count /
			props.item.monitoring_rekom_count) * 100) + '%' }}
									&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
								</span>
							</div>
						</div>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.monitoring_rekom_count"></check-value>
					</td>
					<td v-if="!columnData[3].hide">
						<check-value :value="props.item.monitoring_rekom_ok_count"></check-value>
					</td>
					<td v-if="!columnData[4].hide">
						<check-value :value="props.item.monitoring_pencapaian_count"></check-value>
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!columnData[6].hide && !columnData[6].disable">
						<check-value :value="props.item.cu.name" v-if="props.item.cu"></check-value>
						<span v-else>-</span>
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.tp.name" v-if="props.item.tp"></check-value>
						<span v-else-if="props.item.id_tp == 0">Semua</span>
						<span v-else>-</span>
					</td>
					<td v-if="!columnData[8].hide">
						<span v-if="props.item.jenis == 'MAYOR'" class="badge badge-danger">{{ props.item.jenis
							}}</span>
						<span v-else-if="props.item.jenis == 'MINOR'" class="badge badge-success">{{ props.item.jenis
							}}</span>
					</td>
					<td v-if="!columnData[9].hide">
						<check-value :value="props.item.perspektif"></check-value>
					</td>
					<td v-if="!columnData[10].hide">
						<check-value :value="props.item.aktivis_cu.name" v-if="props.item.aktivis_cu"></check-value>
						<span v-else>-</span>
					</td>
					<td v-if="!columnData[11].hide">
						<check-value :value="props.item.aktivis_bkcu.name" v-if="props.item.aktivis_bkcu"></check-value>
						<span v-else>-</span>
					</td>

					<td v-if="!columnData[12].hide" v-html="$options.filters.date(props.item.tanggal)"></td>
					<td v-if="!columnData[13].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[14].hide">
						<span v-if="props.item.created_at !== props.item.updated_at"
							v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

		</data-viewer>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent"
			:button="modalButton" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup"
			@failOk="modalTutup" @backgroundClick="modalTutup">
		</app-modal>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import DataViewer from '../../components/dataviewer2.vue';
import appModal from '../../components/modal';
import checkValue from '../../components/checkValue.vue';
import FileSaver from 'file-saver';

export default {
	components: {
		DataViewer,
		appModal,
		checkValue,
		FileSaver
	},
	props: ['title', 'kelas', 'tab', 'itemData', 'itemDataStat'],
	data() {
		return {
			selectedItem: [],
			query: {
				order_column: "perspektif",
				order_direction: "desc",
				filter_match: "and",
				limit: 10,
				page: 1
			},
			excelDownloadUrl: '',
			columnData: [
				{
					title: 'No.',
					name: 'No.',
				},
				{
					title: 'Status',
					name: 'status',
					hide: false,
				},
				{
					title: 'Rekomendasi',
					name: 'monitoring_rekom_count',
					tipe: 'string',
					sort: false,
					hide: false,
					disable: false,
					filter: false,
				},
				{
					title: 'Tercapai',
					name: 'monitoring_rekom_ok_count',
					tipe: 'string',
					sort: false,
					hide: false,
					disable: false,
					filter: false,
				},
				{
					title: 'Keputusan',
					name: 'monitoring_pencapaian_count',
					tipe: 'string',
					sort: false,
					hide: false,
					disable: false,
					filter: false,
				},
				{
					title: 'Temuan',
					name: 'name',
					tipe: 'string',
					sort: true,
					hide: false,
					disable: false,
					filter: true,
					filterDefault: true
				},
				{
					title: 'CU',
					name: 'cu.name',
					tipe: 'string',
					sort: false,
					hide: false,
					disable: false,
					filter: true,
				},
				{
					title: 'TP',
					name: 'tp.name',
					tipe: 'string',
					sort: false,
					hide: false,
					disable: false,
					filter: true,
				},
				{
					title: 'Jenis',
					name: 'jenis',
					tipe: 'string',
					sort: true,
					hide: false,
					disable: false,
					filter: true,
				},
				{
					title: 'Perspektif',
					name: 'perspektif',
					tipe: 'string',
					sort: true,
					hide: false,
					disable: false,
					filter: true,
				},
				{
					title: 'PIC CU',
					name: 'aktivis_cu.name',
					tipe: 'string',
					sort: false,
					hide: false,
					disable: false,
					filter: true,
				},
				{
					title: 'PIC BKCU',
					name: 'aktivis_bkcu.name',
					tipe: 'string',
					sort: false,
					hide: false,
					disable: false,
					filter: true,
				},

				{
					title: 'Tgl. Audit',
					name: 'tanggal',
					tipe: 'date',
					sort: true,
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
			state: '',
			modalShow: false,
			modalState: '',
			modalTitle: '',
			modalContent: '',
			modalButton: ''
		}
	},
	created() {
		this.fetch(this.query);
	},
	watch: {
		// check route changes
		'$route'(to, from) {
			this.fetch(this.query);
		},

		// when updating data
		updateStat(value) {
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
		}
	},
	methods: {
		fetch(params) {
			if (this.$route.params.cu == 'semua') {
				if (this.tab == 'indexSemua') {
					this.disableColumnCu(false);
					this.$store.dispatch(this.kelas + '/index',[params,'semua'] );
					this.excelDownloadUrl = this.kelas;
				} else {
					this.fetchByStatusSemua(params);
				}

			} else {
				if (this.tab == 'indexSemua') {
					this.disableColumnCu(true);
					this.$store.dispatch(this.kelas + '/indexCu', [params, this.$route.params.cu, this.$route.params.tp, 'semua']);
					this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu + '/' + this.$route.params.tp + '/semua';
				} else {
					this.fetchByStatus(params);
				}

			}
		},

		fetchByStatusSemua(params) {
			if (this.tab == 'indexSelesai') {
				this.disableColumnCu(false);
				this.$store.dispatch(this.kelas + '/index',[params,'selesai'] );
			} else if (this.tab == 'indexKeputusan') {
				this.disableColumnCu(false);
				this.$store.dispatch(this.kelas + '/index',[params,'keputusan'] );
			} else if (this.tab == 'indexTidakKeputusan') {
				this.disableColumnCu(false);
				this.$store.dispatch(this.kelas + '/index',[params,'tidak_keputusan'] );
			}
		},

		fetchByStatus(params) {
			if (this.tab == 'indexSelesai') {
				this.disableColumnCu(true);
				this.$store.dispatch(this.kelas + '/indexCu', [params, this.$route.params.cu, this.$route.params.tp, 'selesai']);
				this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu + '/' + this.$route.params.tp + '/selesai';
			} else if (this.tab == 'indexKeputusan') {
				this.disableColumnCu(true);
				this.$store.dispatch(this.kelas + '/indexCu', [params, this.$route.params.cu, this.$route.params.tp, 'keputusan']);
				this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu + '/' + this.$route.params.tp + '/keputusan';
			} else if (this.tab == 'indexTidakKeputusan') {
				this.disableColumnCu(true);
				this.$store.dispatch(this.kelas + '/indexCu', [params, this.$route.params.cu, this.$route.params.tp, 'tidak_keputusan']);
				this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu + '/' + this.$route.params.tp + '/tidak_keputusan';
			}
		},

		disableColumnCu(status) {
			this.columnData[6].disable = status;
		},
		selectedRow(item) {
			this.selectedItem = item;
		},
		goTo(id, tipe) {
			if (tipe == 'edit') {
				this.$router.push({ name: this.kelas + 'Edit', params: { id: id } });
			} else {
				this.$router.push({ name: this.kelas + 'Detail', params: { id: id } });
			}
		},
		modalConfirmOpen(state, isMobile, itemMobile) {
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
		modalTutup() {
			this.modalShow = false;
			this.$store.dispatch(this.kelas + '/resetUpdateStat');
		},
		modalConfirmOk() {
			if (this.state == 'hapus') {
				this.$store.dispatch(this.kelas + '/destroy', this.selectedItem.id);
			} else if (this.state == "updateTerbitkan") {
				this.$store.dispatch(this.kelas + '/updateTerbitkan', this.selectedItem.id);
			} else if (this.state == "updateUtamakan") {
				this.$store.dispatch(this.kelas + '/updateUtamakan', this.selectedItem.id);
			}
		},
		downloadLaporan() {
			this.modalState = 'loading'
			this.modalShow = true
			axios.post('/api/' + this.kelas + '/laporan', { id_cu: this.$route.params.cu, id_tp: this.$route.params.tp }, {
				responseType: 'blob'
			}).then((response) => {
				FileSaver.saveAs(response.data, 'Monitoring.xlsx')
				this.modalState = 'success';
				this.modalTitle = 'Berhasil Di Download'
				this.modalButton = 'Ok';
			})
		},
	},
	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),
		...mapGetters('monitoring', {
			// itemData: 'dataS',
			// itemDataStat: 'dataStatS',
			updateMessage: 'update',
			updateStat: 'updateStat'
		}),
	}
}
</script>