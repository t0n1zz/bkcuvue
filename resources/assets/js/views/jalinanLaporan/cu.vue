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
						
            <div v-if="$route.meta.mode == 'laporan'">
              <table-kelompok :title="'Klaim Per CU'"  :itemData="itemData" :itemDataStat="itemDataStat" :url="url" :isCu="true" @bukaData="bukaData" @lihatSemua="bukaData"></table-kelompok>

              <hr/>
								<button type="button" class="btn btn-light btn-block" @click.prevent="showDetail">
									<span v-if="!isShowDetail"><i class="icon-eye"></i> Buka semua data klaim JALINAN</span>
									<span v-else><i class="icon-eye-blocked"></i> Tutup data klaim JALINAN</span>
								</button>
              <hr/>

							<div v-if="isShowDetail">

						  	<table-data :title="'Klaim JALINAN Menunggu'" :kelas="kelas" :itemData="itemDataKlaim1" :itemDataStat="itemDataStatKlaim1" :status="'1'" :isSimple="true" v-if="status == '1'"></table-data>

						  	<table-data :title="'Klaim JALINAN Dokumen Tidak Lengkap'" :kelas="kelas" :itemData="itemDataKlaim2" :itemDataStat="itemDataStatKlaim2" :status="'2'" :isSimple="true" v-if="status == '2'"></table-data>

						  	<table-data :title="'Klaim JALINAN Ditolak'" :kelas="kelas" :itemData="itemDataKlaim3" :itemDataStat="itemDataStatKlaim3" :status="'3'" :isSimple="true" v-if="status == '3'"></table-data>

						  	<table-data :title="'Klaim JALINAN Disetujui'" :kelas="kelas" :itemData="itemDataKlaim4" :itemDataStat="itemDataStatKlaim4" :status="'4'" :isSimple="true" v-if="status == '4'"></table-data>

						  	<table-data :title="'Klaim JALINAN Dicairkan'" :kelas="kelas" :itemData="itemDataKlaim5" :itemDataStat="itemDataStatKlaim5" :status="'5'" :isSimple="true" v-if="status == '5'"></table-data>

						  	<table-data :title="'Klaim JALINAN Selesai'" :kelas="kelas" :itemData="itemDataKlaim6" :itemDataStat="itemDataStatKlaim6" :status="'6'" :isSimple="true" v-if="status == '6'"></table-data>

							</div>
							
            </div>

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
	import tableKelompok from "./tableKelompok";
	import tableData from "../jalinanKlaim/table.vue";
	
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
				title: ' Laporan Klaim JALINAN',
				titleDesc: 'Mengelola Laporan Klaim JALINAN Berdasarkan CU',
				titleIcon: 'icon-archive',
				kelas: 'jalinanKlaim',
				isShowDetail: false,
				url: 'indexLaporanCu',
				status: '',
			}
		},
		created(){
			this.checkUser('laporan_jalinan_klaim');
			this.status = this.$route.params.status;
		},
		watch: {
			'$route' (to, from){
				// check current page meta
				this.status = this.$route.params.status;
			},
		},
		methods: {
			fetch(cu, status, awal, akhir){
				this.$router.push({name: 'jalinanLaporanKlaimCuTanggal', params:{awal: awal, akhir: akhir, status: status, cu: cu, jenis: 'cu'} });
			},
			cari(awal, akhir, cu, status){
				this.fetch('semua', status, awal, akhir);
				this.isShowDetail = false;
			},
			checkUser(permission){
				if(this.currentUser){
					if(!this.currentUser.can || !this.currentUser.can[permission]){
						this.$router.push('/notFound');
					}
				}
			},
			bukaData(value){
				let _cu = '';
				if(value != 'semua'){
					_cu = _.find(this.modelCu, {'name': value});
					_cu = _cu.id;
				}else{
					_cu = value;
				}
				this.fetch(_cu, this.$route.params.status, this.$route.params.awal, this.$route.params.akhir);
				this.isShowDetail = true;
			},
			showDetail(){
				this.isShowDetail = !this.isShowDetail;
      },
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('cu',{
				modelCu: 'headerDataS',
				modelCuStat: 'headerDataStatS',
			}),
			...mapGetters('jalinanKlaim',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				itemDataKlaim1: 'dataS1',
				itemDataStatKlaim1: 'dataStatS1',
				itemDataKlaim2: 'dataS2',
				itemDataStatKlaim2: 'dataStatS2',
				itemDataKlaim3: 'dataS3',
				itemDataStatKlaim3: 'dataStatS3',
				itemDataKlaim4: 'dataS4',
				itemDataStatKlaim4: 'dataStatS4',
				itemDataKlaim5: 'dataS5',
				itemDataStatKlaim5: 'dataStatS5',
				itemDataKlaim6: 'dataS6',
				itemDataStatKlaim6: 'dataStatS6',
				itemDataKlaim7: 'dataS7',
				itemDataStatKlaim7: 'dataStatS7',
			}),
		}
	}
</script>