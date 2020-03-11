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
						<select-data :isCu="true" @cari="cari"></select-data>

						<table-kelompok :title="title" :itemData="itemData" :itemDataStat="itemDataStat" :url="url" v-if="$route.meta.mode == 'laporan'" @bukaData="bukaData"></table-kelompok>

            <!-- <hr/>

            <div class="nav-tabs-responsive mb-3" v-if="$route.meta.mode == 'laporan'">
							<ul class="nav nav-tabs nav-tabs-solid bg-light">
								<li class="nav-item">
									<a href="#" class="nav-link" :class="{'active' : tabName == 'dicairkan'}" @click.prevent="changeTab('dicairkan')"><i class="icon-square-down mr-2"></i> Data Perorangan yang dicairkan</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link" :class="{'active' : tabName == 'selesai'}" @click.prevent="changeTab('selesai')"><i class="icon-square mr-2"></i> Data Perorangan yang selesai</a>
								</li>
							</ul>
						</div>	

            <transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-show="tabName == 'dicairkan'"  v-if="$route.meta.mode == 'laporan'">
								<table-data :title="title" :kelas="kelas" :itemData="itemData4" :itemDataStat="itemDataStat4" :status="'4'" :isSimple="true"></table-data>
							</div>
						</transition>

						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-show="tabName == 'selesai'" v-if="isSelesai && $route.meta.mode == 'laporan'">
								<table-data :title="title" :kelas="kelas" :itemData="itemData5" :itemDataStat="itemDataStat5" :status="'5'" :isSimple="true"></table-data>
							</div>
						</transition> -->

					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
  import selectData from "./selectKelompok.vue";
  import tableData from "../jalinanKlaim/table.vue";
	import tableKelompok from "./tableKelompok";
	
	export default {
		components: {
			pageHeader,
			message,
      selectData,
      tableData,
			tableKelompok
		},
		data() {
			return {
				title: 'Laporan pencairan JALINAN berdasarkan lama menjadi anggota',
				titleDesc: 'Mengelola pencairan JALINAN berdasarkan lama menjadi anggota',
				titleIcon: 'icon-archive',
        kelas: 'jalinanKlaim',
        tabName: 'dicairkan',
				isSelesai: false,
				url: 'indexLaporanLama',
			}
		},
		created(){
			this.checkUser('index_anggota_cu',this.$route.params.cu);
		},
		methods: {
			cari(awal, akhir, cu){
        this.$router.push({name: 'jalinanLaporanKlaimLamaTanggal', params:{awal: awal, akhir: akhir, cu: cu, tp: 'semua'} });
			},
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
      bukaData(value){
				this.$router.push({name: 'jalinanLaporanKlaimLamaTanggal', params:{awal: this.$route.params.awal, akhir: this.$route.params.akhir,  cu: value} });
			},
      changeTab(value) {
				this.tabName = value;
				if (value == 'selesai' && !this.isSelesai) {
					this.isSelesai = true
				}
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('jalinanKlaim',{
        itemData: 'dataS',
        itemData4: 'dataS4',
        itemData5: 'dataS5',
        itemDataStat: 'dataStatS',
        itemDataStat4: 'dataStatS4',
        itemDataStat5: 'dataStatS5',
			}),
		}
	}
</script>