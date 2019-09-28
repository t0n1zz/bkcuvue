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
						<select-cu 
							:kelas="kelas"
							:path="selectCuPath"
							:isPus="false"
							v-if="currentUser.id_cu == 0"></select-cu>

						<!-- table data -->
						<div class="nav-tabs-responsive mb-3">
							<ul class="nav nav-tabs nav-tabs-solid bg-light">
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
							</ul>
						</div>	

						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-show="tabName == 'menunggu'">
							<table-data :title="title" :kelas="kelas" :itemData="itemData" :itemDataStat="itemDataStat" :status="''" :isSimple="false"></table-data>
							</div>
						</transition>

						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-show="tabName == 'tidakLengkap'" v-if="isTidakSesuai">
								<table-data :title="title" :kelas="kelas" :itemData="itemData1" :itemDataStat="itemDataStat1" :status="'1'"></table-data>
							</div>
						</transition>

						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-show="tabName == 'ditolak'" v-if="isDitolak">
								<table-data :title="title" :kelas="kelas" :itemData="itemData2" :itemDataStat="itemDataStat2" :status="'2'"></table-data>
							</div>
						</transition>

						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-show="tabName == 'disetujui'" v-if="isDisetujui">
								<table-data :title="title" :kelas="kelas" :itemData="itemData3" :itemDataStat="itemDataStat3" :status="'3'"></table-data>
							</div>
						</transition>

						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-show="tabName == 'dicairkan'" v-if="isDicairkan">
								<table-data :title="title" :kelas="kelas" :itemData="itemData4" :itemDataStat="itemDataStat4" :status="'4'"></table-data>
							</div>
						</transition>

						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-show="tabName == 'selesai'" v-if="isSelesai">
								<table-data :title="title" :kelas="kelas" :itemData="itemData5" :itemDataStat="itemDataStat5" :status="'5'"></table-data>
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
	import selectCu from "../../components/selectCu.vue";
	
	export default {
		components: {
			pageHeader,
			tableData,
			message,
			selectCu
		},
		data() {
			return {
				title: 'Klaim JALINAN',
				kelas: 'jalinanKlaim',
				titleDesc: 'Mengelola klaim JALINAN',
				titleIcon: 'icon-accessibility2',
				selectCuPath: 'jalinanKlaimCu',
				tabName: 'menunggu',
				isDitolak: false,
				isTidakSesuai: false,
				isDisetujui: false,
				isDicairkan: false,
				isSelesai: false,
			}
		},
		created(){
			this.checkUser('index_anggota_cu',this.$route.params.cu);
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
				if (value == 'disetujui' && !this.isDisetujui) {
					this.isDisetujui = true
				}
				if (value == 'ditolak' && !this.isDitolak) {
					this.isDitolak = true
				}
				if (value == 'tidakLengkap' && !this.isTidakSesuai) {
					this.isTidakSesuai = true
				}
				if (value == 'dicairkan' && !this.isDicairkan) {
					this.isDicairkan = true
				}
				if (value == 'selesai' && !this.isSelesai) {
					this.isSelesai = true
				}
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('jalinanKlaim',{
				itemData: 'dataS',
				itemData1: 'dataS1',
				itemData2: 'dataS2',
				itemData3: 'dataS3',
				itemData4: 'dataS4',
				itemData5: 'dataS5',
				itemDataStat: 'dataStatS',
				itemDataStat1: 'dataStatS1',
				itemDataStat2: 'dataStatS2',
				itemDataStat3: 'dataStatS3',
				itemDataStat4: 'dataStatS4',
				itemDataStat5: 'dataStatS5',
			}),
		}
	}
</script>