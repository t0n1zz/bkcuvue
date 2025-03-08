<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query"
			:itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl" @fetch="fetch">
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id == props.item.id }" @click="selectedRow(props.item)"
					class="text-nowrap">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page - 1) * +itemData.per_page + '.' }}
					</td>
					<td v-if="!columnData[1].hide">
						<check-value :value="props.item.no_ba"></check-value>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.name"></check-value>
					</td>

					<td v-if="!columnData[3].hide">
						<check-value :value="props.item.jumlah_rekomendasi"></check-value>
					</td>

					<td v-if="!columnData[4].hide">
						<check-value :value="props.item.tercapai"></check-value>
					</td>

					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.tidak_tercapai"></check-value>
					</td>
					<td v-if="!columnData[6].hide">
						<check-value :value="props.item.presentase_tercapai + '%'"></check-value>
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.presentase_tidak_tercapai + '%'"></check-value>
					</td>
					<td v-if="!columnData[8].hide">
						<check-value :value="'Sangat Tidak Tercapai'"
							v-if="props.item.presentase_tercapai >= 0 && props.item.presentase_tercapai <= 20.99"
							class="bg-sangat-tidak-tercapai"></check-value>
						<check-value :value="'Tidak Tercapai'" style="color: black;"
							v-else-if="props.item.presentase_tercapai >= 21 && props.item.presentase_tercapai <= 40.99"
							class="bg-tidak-tercapai"></check-value>
						<check-value :value="'Cukup Tercapai'"
							v-else-if="props.item.presentase_tercapai >= 41 && props.item.presentase_tercapai <= 60.99"
							class="bg-cukup-tercapai"></check-value>
						<check-value :value="'Tercapai'"
							v-else-if="props.item.presentase_tercapai >= 61 && props.item.presentase_tercapai <= 80.99"
							class="bg-tercapai"></check-value>
						<check-value :value="'Sangat Tercapai'"
							v-else-if="props.item.presentase_tercapai >= 81 && props.item.presentase_tercapai <= 100"
							class="bg-sangat-tercapai"></check-value>
					</td>
					<td v-if="!columnData[9].hide">
						<check-value :value="props.item.rekom_des_tahun_lalu"></check-value>
					</td>
					<td v-if="!columnData[10].hide">
						<check-value :value="props.item.jumlah_rekomendasi"></check-value>
					</td>
					<td v-if="!columnData[11].hide">
						<check-value
							:value="props.item.jumlah_rekomendasi - props.item.rekom_des_tahun_lalu"></check-value>
					</td>
					<td v-if="!columnData[12].hide">
						<check-value :value="props.item.presentase_rekom_ok_tahun_lalu + '%'"></check-value>
					</td>
					<td v-if="!columnData[13].hide">
						<check-value :value="props.item.presentase_rekom_ok_bulan_lalu + '%'"></check-value>
					</td>
					<td v-if="!columnData[14].hide">
						<check-value :value="props.item.presentase_rekom_ok_bulan_ini + '%'"></check-value>
					</td>
					<td v-if="!columnData[15].hide">
						<check-value
							:value="roundedValue(props.item.presentase_rekom_ok_bulan_ini, props.item.presentase_rekom_ok_tahun_lalu) + '%'"></check-value>
					</td>
					<td v-if="!columnData[16].hide">
						<check-value
							:value="roundedValue(props.item.presentase_rekom_ok_bulan_ini, props.item.presentase_rekom_ok_bulan_lalu) + '%'"></check-value>
					</td>
					<td v-if="!columnData[17].hide">
						<check-value :value="props.item.catatan"></check-value>
					</td>
				</tr>
			</template>

		</data-viewer>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent"
			:button="modalButton">
		</app-modal>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import DataViewer from '../../components/dataviewer2.vue';
import appModal from '../../components/modal';
import checkValue from '../../components/checkValue.vue';

export default {
	components: {
		DataViewer,
		appModal,
		checkValue,
	},
	props: ['title', 'kelas','itemData','itemDataStat'],
	data() {
		return {
			selectedItem: [],
			query: {
				order_column: "no_ba",
				order_direction: "asc",
				filter_match: "and",
				limit: 50,
				page: 1
			},
			excelDownloadUrl: '',
			columnData: [
				{
					title: 'No.',
					name: 'No.',
				},

				{
					title: 'No. BA',
					name: 'no_ba',
					tipe: 'string',
					sort: true,
					hide: false,
					disable: false,
					filter: true,
					filterDefault: true
				},

				{
					title: 'CU',
					name: 'name',
					tipe: 'string',
					sort: true,
					hide: false,
					disable: false,
					filter: true,
				},

				{
					title: 'Jlh. rekomendasi',
					name: 'jumlah_rekomendasi',
					hide: false,
					tipe: 'number',
				},
				{
					title: 'Jlh. tercapai',
					name: 'tercapai',
					tipe: 'number',
					hide: false,
				},
				{
					title: 'Jlh. tidak tercapai',
					name: 'tidak_tercapai',
					tipe: 'number',
					hide: false,
				},
				{
					title: 'Presentase tercapai',
					name: 'presentase_tercapai',
					tipe: 'number',
					hide: false,
				},
				{
					title: 'presentase tidak tercapai',
					name: 'presentase_tidak_tercapai',
					tipe: 'number',
					hide: false,
				},

				{
					title: 'Kategori Kepatuhan',
					name: 'kategori_kepatuhan',
					tipe: 'string',
					sort: true,
					filter: true,
					hide: false,
				},
				{
					title: 'Pertumbuhan Rekom. Desember Tahun Lalu',
					name: 'rekom_des_tahun_lalu',
					tipe: 'number',
					hide: false,
				},
				{
					title: 'Pertumbuhan Rekom. Bulan Ini',
					name: 'rekom_bulan_ini',
					tipe: 'number',
					hide: false,
				},
				{
					title: 'Pertumbuhan',
					name: 'rekom_pertumbuhan',
					tipe: 'number',
					hide: false,
				},
				{
					title: 'Presentase Pencapaian Des Tahun Lalu',
					name: 'presentase_rekom_ok_tahun_lalu',
					tipe: 'number',
					hide: false,
				},

				{
					title: 'Presentase Pencapaian Bulan Lalu',
					name: 'presentase_rekom_ok_bulan_lalu',
					tipe: 'number',
					hide: false,
				},
				{
					title: 'Presentase Pencapaian Bulan ini',
					name: 'presentase_rekom_ok_bulan_ini',
					tipe: 'number',
					hide: false,
				},

				{
					title: 'Pertumbuhan Kumulatif',
					name: 'pertumbuhan_kumulatif',
					tipe: 'number',
					hide: false,
				},
				{
					title: 'Pertumbuhan Bulan ini',
					name: 'pertumbuhan_bulan_ini',
					tipe: 'number',
					hide: false,
				},
				{
					title: 'Catatan',
					name: 'catatan',
					tipe: 'string',
					hide: false,
				},
			],
			state: '',
			modalShow: false,
			modalState: '',
			modalTitle: '',
			modalContent: '',
			modalButton: '',
			monStat: 'semua'
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
		roundedValue(a, b) {
			const diff = a - b;
			return diff.toFixed(2);
		},
		fetch(params) {
			this.disableColumnCu(false);
			this.$store.dispatch(this.kelas + '/indexKonsolidasi',[params,this.$route.params.tahun,this.$route.params.bulan])
			this.excelDownloadUrl = this.kelas + '/indexKonsolidasi/' + this.$route.params.tahun +'/'+ this.$route.params.bulan;
		},

		disableColumnCu(status) {
			this.columnData[6].disable = status;
		},

		selectedRow(item) {
			this.selectedItem = item;
		},
	},
	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),

		...mapGetters('monitoring', {
			updateMessage: 'update',
			updateStat: 'updateStat'
		}),
	}
}
</script>

<style scoped>
.bg-sangat-tidak-tercapai {
	background-color: red;
	padding: 10px;
	border-radius: 5px;
}

.bg-tidak-tercapai {
	background-color: yellow;
	padding: 10px;
	border-radius: 5px;
}

.bg-cukup-tercapai {
	background-color: orange;
	padding: 10px;
	border-radius: 5px;

}

.bg-tercapai {
	background-color: green;
	padding: 10px;
	border-radius: 5px;
}

.bg-sangat-tercapai {
	background-color: blue;
	padding: 10px;
	border-radius: 5px;
}
</style>