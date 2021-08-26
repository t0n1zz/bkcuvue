<template>
	<div>
		<!-- Page header -->
		<page-header 
		:title="title" 
		:titleDesc="titleDesc" 
		:titleIcon="titleIcon"></page-header>

		<!-- page container -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">
					<div class="content">

						<!-- message -->
						<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
						</message>

						<!-- select data -->
						<select-cu-tp 
							:kelas="kelas"
							:path="selectCuPath"
							:isPus="false"></select-cu-tp>

						<!-- table data -->
						<div class="nav-tabs-responsive mb-3">
							<ul class="nav nav-tabs nav-tabs-solid  bg-light">
								<li class="nav-item">
									<a href="#" class="nav-link" :class="{'active' : tabName == 'verifikasi'}" @click.prevent="changeTab('verifikasi')"><i class="icon-file-eye mr-2"></i> Verifikasi CU</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link" :class="{'active' : tabName == 'menunggu'}" @click.prevent="changeTab('menunggu')"><i class="icon-checkbox-unchecked mr-2"></i> Menunggu</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link" :class="{'active' : tabName == 'tidakLengkap'}" @click.prevent="changeTab('tidakLengkap')"><i class="icon-checkbox-partial mr-2"></i> Dokumen Tidak Lengkap</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link" :class="{'active' : tabName == 'ditolak'}" @click.prevent="changeTab('ditolak')"><i class="icon-cancel-square mr-2"></i> Ditolak</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link" :class="{'active' : tabName == 'disetujui'}" @click.prevent="changeTab('disetujui')"><i class="icon-checkbox-checked mr-2"></i> Disetujui</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link" :class="{'active' : tabName == 'dicairkan'}" @click.prevent="changeTab('dicairkan')"><i class="icon-square-down mr-2"></i> Dicairkan</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link" :class="{'active' : tabName == 'selesai'}" @click.prevent="changeTab('selesai')"><i class="icon-square mr-2"></i> Selesai</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link" :class="{'active' : tabName == 'koreksi'}" @click.prevent="changeTab('koreksi')"><i class="icon-paint-format mr-2"></i> Koreksi</a>
								</li>
							</ul>
						</div>

						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'verifikasi'">
								<div class="row" v-if="$route.params.cu != 'semua'">
									<!-- verifikasi pengurus -->
									<div class="col-md-4">
										<verifikator 
										:isSingle="false"
										:title="'Verifikator Pengurus'" 
										:itemData="modelPengurus" 
										:itemDataStat="modelPengurusStat"></verifikator>
									</div>
									<!-- verifikasi pengawas -->
									<div class="col-md-4">
										<verifikator 
										:isSingle="false"
										:title="'Verifikator Pengawas'" 
										:itemData="modelPengawas" 
										:itemDataStat="modelPengawasStat"></verifikator>
									</div>
									<!-- verifikasi manajemen -->
									<div class="col-md-4">
										<verifikator 
										:isSingle="false"
										:title="'Verifikator Manajemen'" 
										:itemData="modelManajemen" 
										:itemDataStat="modelManajemenStat"></verifikator>
									</div>
								</div>
								<table-data :title="title" :kelas="kelas" :itemData="itemData" :itemDataStat="itemDataStat" :status="''" :isSimple="false"></table-data>
							</div>
						</transition>

						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'menunggu'">
							<table-data :title="title" :kelas="kelas" :itemData="itemData1" :itemDataStat="itemDataStat1" :status="'1'" :isSimple="false"></table-data>
							</div>
						</transition>

						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'tidakLengkap'">
								<table-data :title="title" :kelas="kelas" :itemData="itemData2" :itemDataStat="itemDataStat2" :status="'2'"></table-data>
							</div>
						</transition>

						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'ditolak'">
								<table-data :title="title" :kelas="kelas" :itemData="itemData3" :itemDataStat="itemDataStat3" :status="'3'"></table-data>
							</div>
						</transition>

						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'disetujui'">
								<table-data :title="title" :kelas="kelas" :itemData="itemData4" :itemDataStat="itemDataStat4" :status="'4'"></table-data>
							</div>
						</transition>

						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'dicairkan'">
								<table-data :title="title" :kelas="kelas" :itemData="itemData5" :itemDataStat="itemDataStat5" :status="'5'"></table-data>
							</div>
						</transition>

						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'selesai'">
								<table-data :title="title" :kelas="kelas" :itemData="itemData6" :itemDataStat="itemDataStat6" :status="'6'"></table-data>
							</div>
						</transition>

						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-if="tabName == 'koreksi'">
								<table-data :title="title" :kelas="kelas" :itemData="itemData7" :itemDataStat="itemDataStat7" :status="'7'"></table-data>
							</div>
						</transition>	

					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import tableData from "./table.vue";
	import message from "../../components/message.vue";
	import selectCuTp from "../../components/selectCuTp.vue";
	import verifikator from "./verifikator.vue";
	
	export default {
		components: {
			pageHeader,
			tableData,
			message,
			selectCuTp,
			verifikator
		},
		data() {
			return {
				title: 'Klaim JALINAN',
				kelas: 'jalinanKlaim',
				titleDesc: 'Mengelola klaim JALINAN',
				titleIcon: 'icon-accessibility2',
				selectCuPath: 'jalinanKlaimCu',
				tabName: 'menunggu',
			}
		},
		created(){
			this.checkUser('index_jalinan_klaim',this.$route.params.cu);
			if(this.currentUser.id_cu == 0){
				this.changeTab('menunggu');
			}else{
				this.changeTab('verifikasi');
			}
		},
		methods: {
			checkUser(permission,id_cu){
				if(this.currentUser){
					if(!this.currentUser.can || !this.currentUser.can[permission]){
						this.$router.push('/notFound');
					}
					if(!id_cu || this.currentUser.id_cu){
						if(this.currentUser.id_cu != 0 && this.currentUser.id_cu != id_cu){
							this.$router.push('/notFound');
						}
					}
				}
			},
			changeTab(value) {
				this.tabName = value;
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('user', {
				modelPengurus: "dataS1",
				modelPengawas: "dataS2",
				modelManajemen: "dataS3",
        modelPengurusStat: "dataStatS1",
        modelPengawasStat: "dataStatS2",
        modelManajemenStat: "dataStatS3",
      }),
			...mapGetters('jalinanKlaim',{
				itemData: 'dataS',
				itemData1: 'dataS1',
				itemData2: 'dataS2',
				itemData3: 'dataS3',
				itemData4: 'dataS4',
				itemData5: 'dataS5',
				itemData6: 'dataS6',
				itemData7: 'dataS7',
				itemDataStat: 'dataStatS',
				itemDataStat1: 'dataStatS1',
				itemDataStat2: 'dataStatS2',
				itemDataStat3: 'dataStatS3',
				itemDataStat4: 'dataStatS4',
				itemDataStat5: 'dataStatS5',
				itemDataStat6: 'dataStatS6',
				itemDataStat7: 'dataStatS7',
			}),
		}
	}
</script>