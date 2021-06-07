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
						<select-data :isCu="false" @cari="cari"></select-data>

						<div v-if="$route.meta.mode == 'laporan'">

							<table-kelompok :title="'Klaim Per Lama'" :itemData="itemData" :itemDataStat="itemDataStat" :url="url" :isCu="false" @bukaData="bukaData" @lihatSemua="bukaData"></table-kelompok>

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
				title: 'Laporan Klaim JALINAN',
				titleDesc: 'Mengelola Klaim JALINAN Berdasarkan Lama',
				titleIcon: 'icon-archive',
				kelas: 'jalinanKlaim',
        isShowDetail: false,
				url: 'indexLaporanLama',
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
			fetch(awal, akhir, cu, status, dari, ke){
				this.$router.push({name: 'jalinanLaporanKlaimLamaTanggal', params:{awal: awal, akhir: akhir, status: status, cu: cu, jenis: 'lama', dari: dari, ke : ke} });
			},
			cari(awal, akhir, cu, status){
				this.fetch(awal, akhir, cu, status, 'semua','semua','semua');
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
				let _dari = '';
				let _ke = '';

				if(value == '0 s.d. 1 tahun'){
					_dari = 1;
					_ke = 0;
				}else if(value == '> 1 s.d. 3 tahun'){
					_dari = 3;
					_ke = 1;
				}else if(value == '> 3 s.d. 5 tahun'){
					_dari = 5;
					_ke = 3;
				}else if(value == '> 5 s.d. 7 tahun'){
					_dari = 7;
					_ke = 5;
				}else if(value == '> 7 tahun'){
					_dari = 100;
					_ke = 7;
				}else{
					_dari = 'semua';
					_ke = 'semua';
				}

				this.fetch(this.$route.params.awal, this.$route.params.akhir, this.$route.params.cu, this.$route.params.status, _dari, _ke);
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