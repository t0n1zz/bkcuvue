<template>
	<div>
		<!-- Page header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon"></page-header>
		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">
					<select-periode :kelas="kelas" :tipe="'semua'"></select-periode>
					<!-- message -->
					<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
					</message>
					<!-- table data -->
					<table-data :title="title" :kelas="kelas" :itemData="itemData" :itemDataStat="itemDataStat">
					</table-data>
					<konsolidasi-cu :presentaseTercapai="total.sum_persen_tercapai" 
					:presentaseTidakTercapai="total.sum_persen_tidak_tercapai"
					:kategoriPencapaian="total.kategori"
					:jumlahTercapai="total.sum_tercapai"
					:jumlahTidakTercapai="total.sum_tidak_tercapai"
					:jumlahRekomendasi="total.sum_rekom">
					</konsolidasi-cu>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import pageHeader from "../../components/pageHeader.vue";
import message from "../../components/message.vue";
import selectData from "../../components/selectCuTp.vue";
import tableData from "./tableKonsolidasi.vue";
import konsolidasiCu from "./konsolidasiCU";
import selectPeriode from "./select.vue";

export default {
	components: {
		pageHeader,
		message,
		selectData,
		tableData,
		konsolidasiCu,
		selectPeriode
	},
	data() {
		return {
			title: 'Laporan Konsolidasi Monitoring CU',
			kelas: 'monitoringCu',
			titleDesc: 'Laporan konsolidasi monitoring CU',
			titleIcon: 'icon-collaboration',
			data: '',
			stat: ''
		}
	},
	created() {
		this.checkUser('index_monitoring', this.$route.params.cu);
	},
	methods: {
		checkUser(permission, id_cu) {
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

		fetch() {

		},

	},
	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),
		...mapGetters('monitoringCu', {
			itemData: 'dataSKonsolidasi',
			itemDataStat: 'dataStatSKonsolidasi',
			total: 'summary'
		})
	}
}
</script>