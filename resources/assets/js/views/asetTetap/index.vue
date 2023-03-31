<template>
	<div>
		<!-- Page header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon"></page-header>

		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
					</message>

					<div class="nav-tabs-responsive">
						<ul class="nav nav-tabs nav-tabs-solid bg-light">
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{ 'active': tabName == 'index' }"
									@click.prevent="changeTab('index')"><i class="icon-list2 mr-2"></i> Aset Tetap Dalam
									Penyusutan</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{ 'active': tabName == 'indexSelesai' }"
									@click.prevent="changeTab('indexSelesai')"><i class="icon-notebook mr-2"></i> Aset Tetap
									Penyusutan Selesai</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{ 'active': tabName == 'indexHapus' }"
									@click.prevent="changeTab('indexHapus')"><i class="icon-books mr-2"></i> Aset Tetap
									Dihapus Dari Laporan</a>
							</li>
						</ul>
					</div>

					<br />

					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'index'">
							<!-- table data -->
							<table-data :title="title" :kelas="kelas" :tipe="'index'" :itemData="itemData"
								:itemDataStat="itemDataStat">
							</table-data>
						</div>
					</transition>

					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'indexSelesai'" v-if="isIndexSelesai">
							<!-- table data -->
							<table-data :title="title" :kelas="kelas" :tipe="'indexSelesai'" :itemData="itemData3"
								:itemDataStat="itemDataStat3">
							</table-data>
						</div>
					</transition>

					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'indexHapus'" v-if="isIndexHapus">
							<!-- table data -->
							<table-data :title="title" :kelas="kelas" :tipe="'indexHapus'" :itemData="itemData4"
								:itemDataStat="itemDataStat4">
							</table-data>

						</div>
					</transition>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import pageHeader from "../../components/pageHeader.vue";
import message from "../../components/message.vue";
import tableData from "./table.vue";

export default {
	components: {
		pageHeader,
		message,
		tableData,
	},
	data() {
		return {
			title: 'Aset Tetap',
			kelas: 'asetTetap',
			titleDesc: 'Mengelola data aset tetap',
			titleIcon: 'icon-bag',
			tabName: 'index',
			isIndexSelesai: false,
			isIndexHapus: false,
		}
	},
	updated() { console.log(this.itemData) },
	created() {
		this.checkUser('index_aset_tetap', this.$route.params.cu);
	},
	methods: {
		checkUser(permission, id_cu) {
			if (this.currentUser) {
				if (!this.currentUser.can || !this.currentUser.can[permission]) {
					this.$router.push('/notFound');
				}
			}
		},
		changeTab(value) {
			this.tabName = value;
			if (value == 'indexSelesai' && !this.isIndexSelesai) {
				this.isIndexSelesai = true;
			} else if (value == 'indexHapus' && !this.isIndexHapus) {
				this.isIndexHapus = true;
			}
		},
	},
	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),
		...mapGetters('asetTetap', {
			itemData: 'dataS',
			itemData3: 'dataS3',
			itemData4: 'dataS4',
			itemDataStat: 'dataStatS',
			itemDataStat3: 'dataStatS3',
			itemDataStat4: 'dataStatS4',
		}),
	}
}
</script>