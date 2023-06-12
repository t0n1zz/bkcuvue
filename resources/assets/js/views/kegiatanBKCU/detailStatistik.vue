<template>
	<div>
		<div class="card">
			<div class="card-header bg-light">
				<h6 class="card-title">CU Terdaftar</h6>
			</div>
			<data-table :items="itemDataPesertaTerdaftarCU" :columnData="columnDataCU"
				:itemDataStat="itemDataPesertaTerdaftarCUStat">
				<template slot="item-desktop" slot-scope="props">
					<tr v-if="props.item">
						<td>{{ props.index + 1 }}</td>
						<td>
							<check-value :value="props.item.name"></check-value>
						</td>
						<td>
							<check-value :value="props.item.lakilaki"></check-value>
						</td>
						<td>
							<check-value :value="props.item.perempuan"></check-value>
						</td>
						<td>
							<check-value :value="props.item.total"></check-value>
						</td>
					</tr>
				</template>
			</data-table>
		</div>
		<div class="card" v-if="this.currentUser.can['update_diklat_bkcu']">
			<div class="page-header">
				<div class="page-header-content header-elements-inline">
					<div class="page-title">
						<h6>Evaluasi Kegiatan</h6>
					</div>
					<div class="page-header-content">
						<button type="button" class="btn bg-green-400" @click="exportToExcel">
							<i class="icon-file-excel"></i> Download Data Tabel
						</button>
						<button type="button" class="btn bg-teal-400" @click="exportAllToExcel">
							<i class="icon-file-excel"></i> Download Data Lengkap
						</button>
					</div>
				</div>
			</div>

			<data-table :items="itemEvaluasiNilai" :columnData="columnNilai" :itemDataStat="itemEvaluasiNilaiStat">
				<template slot="item-desktop" slot-scope="props">
					<tr v-if="props.item">
						<td>{{ props.index + 1 }}</td>
						<td>
							<check-value :value="props.item.name"></check-value>
						</td>
						<td>
							<check-value :value="props.item.tipe"></check-value>
						</td>
						<td v-if="props.item.tipe == 'pilihan'">
							<check-value :value="props.item.nilai_count"></check-value>
						</td>
						<td v-if="props.item.tipe == 'saran'">
							<check-value :value="props.item.saran_count"></check-value>
						</td>
						<td>
							<check-value :value="props.item.average"></check-value>
						</td>
					</tr>
				</template>
			</data-table>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import message from "../../components/message.vue";
import formInfo from "../../components/formInfo.vue";
import checkbox from '../../components/checkbox.vue';
import dataTable from '../../components/datatable.vue';
import Cleave from 'vue-cleave-component';
import checkValue from '../../components/checkValue.vue';
import dataViewer from '../../components/dataviewer2.vue';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


export default {
	props: ['kelas'],
	components: {
		formInfo,
		message,
		checkbox,
		dataTable,
		Cleave,
		checkValue,
		dataViewer,
		XLSX,

	},
	data() {
		return {
			excelDownloadUrl: '',
			isDisableTable: true,
			selectedItem: false,
			columnDataCU: [
				{ title: 'No.' },
				{ title: 'CU' },
				{ title: 'Laki-Laki' },
				{ title: 'Perempuan' },
				{ title: 'Total' },
			],
			columnNilai: [
				{ title: 'No.' },
				{
					title: 'Pertanyaan',
				},
				{
					title: 'Tipe'
				},
				{
					title: 'Responden'
				},
				{
					title: 'Rata-Rata Nilai'
				},
			],
		}
	},
	created() {
		this.fetchStatistik();
	},
	watch: {
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
		fetchStatistik() {
			this.$store.dispatch(this.kelas + '/indexEvaluasiNilai', this.item.id);
			this.$store.dispatch(this.kelas + '/indexAllEvaluasiNilai', this.item.id);
			this.$store.dispatch(this.kelas + '/indexPesertaCountCu', this.item.id);
			this.$store.dispatch(this.kelas + '/indexPesertaHadirCountCu', this.item.id);
		},
		exportToExcel() {
			if (this.itemEvaluasiNilaiStat == 'success') {
				const worksheet = XLSX.utils.json_to_sheet(this.itemEvaluasiNilai);
				const workbook = XLSX.utils.book_new();
				XLSX.utils.book_append_sheet(workbook, worksheet, 'Evaluasi Nilai');
				const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
				const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
				saveAs(data, 'Data_Evaluasi_Nilai.xlsx');
			}
		},
		exportAllToExcel() {
			if (this.itemAllEvaluasiNilaiStat == 'success') {
				const worksheet = XLSX.utils.json_to_sheet(this.itemAllEvaluasiNilai);
				const workbook = XLSX.utils.book_new();
				XLSX.utils.book_append_sheet(workbook, worksheet, 'Evaluasi Nilai');
				const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
				const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
				saveAs(data, 'Data_Evaluasi_All_Nilai.xlsx');
			}
		},
	},
	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),
		...mapGetters('kegiatanBKCU', {
			item: 'data',
			itemStat: 'dataStat',
			itemEvaluasiNilai: 'dataFormNilai',
			itemEvaluasiNilaiStat: 'dataFormNilaiStat',
			itemAllEvaluasiNilai: 'dataFormAllNilai',
			itemAllEvaluasiNilaiStat: 'dataFormAllNilaiStat',
			itemDataPesertaTerdaftarCU: 'dataS6',
			itemDataPesertaTerdaftarCUStat: 'dataStatS6',
			itemDataPesertaHadirCU: 'dataS7',
			itemDataPesertaHadirCUStat: 'dataStatS7',
			updateResponse: 'update',
			updateStat: 'updateStat',
		}),
	}
}
</script>