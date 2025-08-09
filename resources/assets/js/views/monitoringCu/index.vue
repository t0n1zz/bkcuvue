<template>
	<div>
		<!-- Page header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon"></page-header>

		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- navbar -->
					<div class="nav-tabs-responsive">
						<ul class="nav nav-tabs nav-tabs-solid bg-light">
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{ active: tabName == 'indexSemua' }"
									@click.prevent="changeTab('indexSemua')"><i class="icon-list mr-2"></i>
									Semua</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{ active: tabName == 'indexSelesai' }"
									@click.prevent="changeTab('indexSelesai')"><i
										class="icon-checkbox-checked mr-2"></i>
									Selesai</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{ active: tabName == 'indexKeputusan' }"
									@click.prevent="changeTab('indexKeputusan')"><i
										class="icon-checkbox-unchecked mr-2"></i> Belum
									Selesai</a>
							</li>

							<li class="nav-item">
								<a href="#" class="nav-link" :class="{ active: tabName == 'indexTidakKeputusan' }"
									@click.prevent="changeTab('indexTidakKeputusan')"><i
										class="icon-checkbox-unchecked mr-2"></i> Belum Selesai, Tidak Ada Keputusan</a>
							</li>
						</ul>
					</div>

					<!-- message -->
					<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
					</message>

					<!-- select data -->
					<select-data :kelas="kelas" :path="selectCuPath" :isPus="false"></select-data>

					<!-- semua -->
					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-if="tabName == 'indexSemua'">
							<!-- table data -->
							<table-data :title="title" :kelas="kelas" :tab="'indexSemua'" :itemData="itemData"
								:itemDataStat="itemDataStat">
							</table-data>
						</div>
					</transition>

					<!-- selesai -->
					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-if="tabName == 'indexSelesai'">
							<!-- table data -->
							<table-data :title="title" :kelas="kelas" :tab="'indexSelesai'" :itemData="itemData"
								:itemDataStat="itemDataStat">
							</table-data>
						</div>
					</transition>

					<!-- keputusan -->
					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-if="tabName == 'indexKeputusan'">
							<!-- table data -->
							<table-data :title="title" :kelas="kelas" :tab="'indexKeputusan'" :itemData="itemData"
								:itemDataStat="itemDataStat">
							</table-data>
						</div>
					</transition>

					<!-- tidak keputusan -->
					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-if="tabName == 'indexTidakKeputusan'">
							<!-- table data -->
							<table-data :title="title" :kelas="kelas" :tab="'indexTidakKeputusan'" :itemData="itemData"
								:itemDataStat="itemDataStat">
							</table-data>
							
						</div>
					</transition>
					<konsolidasi-cu :presentaseTercapai="total.sum_persen_tercapai"
								:presentaseTidakTercapai="total.sum_persen_tidak_tercapai"
								:kategoriPencapaian="total.kategori" :jumlahTercapai="total.sum_tercapai"
								:jumlahTidakTercapai="total.sum_tidak_tercapai" :jumlahRekomendasi="total.sum_rekom">
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
import tableData from "./table.vue";
import konsolidasiCu from "./konsolidasiCU";

export default {
	components: {
		pageHeader,
		message,
		selectData,
		tableData,
		konsolidasiCu,
	},
	data() {
		return {
			title: 'Monitoring CU',
			kelas: 'monitoringCu',
			titleDesc: 'Mengelola data monitoring CU',
			titleIcon: 'icon-spotlight2',
			selectCuPath: 'monitoringCuCu',
			tabName: "indexSemua",
			data: '',
			stat: ''
		}
	},
	created() {
		this.checkUser('index_monitoring_cu', this.$route.params.cu);
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

		changeTab(value) {
			this.tabName = value
			// this.data = this.itemData
			// this.stat = this.itemDataStat
		}
	},
	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),
		...mapGetters('monitoringCu', {
			itemData: 'dataS',
			itemDataStat: 'dataStatS',
			itemDataSelesai: 'dataSSelesai',
			itemDataSelesaiStat: 'dataSelsaiStatS',
			itemDataKeputusan: 'dataSKeputusan',
			itemDataKeputusanStat: 'dataKeputusanStatS',
			itemDataTidakKeputusan: 'dataSTidakKeputusan',
			itemDataTidakKeputusanStat: 'dataTidakKeputusanStatS',
			total: 'summary'
		})
	}
}
</script>