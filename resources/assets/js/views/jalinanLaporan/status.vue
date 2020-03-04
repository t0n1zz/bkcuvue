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
						<select-data @cari="cari"></select-data>
						
            <div v-if="$route.meta.mode == 'laporan'">
              <table-status :title="'Pencairan Klaim'"  :itemData="itemData" :itemDataStat="itemDataStat" @bukaData="bukaData"></table-status>

              <hr/>
              <button type="button" class="btn btn-light btn-block" @click.prevent="showDetail('semua')">
                <span v-if="!isShowDetail"><i class="icon-eye"></i> Buka semua data klaim JALINAN</span>
                <span v-else><i class="icon-eye-blocked"></i> Tutup data klaim JALINAN</span>
              </button>
              <hr/>

						  <table-data :title="'Klaim JALINAN'" :kelas="kelas" :itemData="itemDataKlaim" :itemDataStat="itemDataStatKlaim" :status="'4'" :isSimple="true" v-if="isShowDetail"></table-data>
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
	import selectData from "./selectStatus.vue";
	import tableStatus from "./tableStatus";
	import tableData from "../jalinanKlaim/table.vue";
	
	export default {
		components: {
			pageHeader,
			message,
			selectData,
			tableData,
			tableStatus
		},
		data() {
			return {
				title: ' Laporan Klaim JALINAN Disetujui',
				titleDesc: 'Mengelola Laporan Klaim JALINAN yang akan dicairkan',
				titleIcon: 'icon-archive',
				kelas: 'jalinanKlaim',
				isShowDetail: false,
				cu: '',
			}
		},
		created(){
			this.checkUser('index_anggota_cu',this.$route.params.cu);
		},
		methods: {
			cari(awal, akhir, status){
        this.$router.push({name: 'jalinanLaporanKlaimStatusTanggal', params:{awal: awal, akhir: akhir, status: status, cu: 'semua', tp: 'semua'} });
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
				this.isShowDetail = true;
			},
			showDetail(value){
				if(this.isShowDetail){
					this.isShowDetail = false;
				}else{
					this.bukaData(value);
				}
      },
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('jalinanKlaim',{
				itemData: 'dataS',
				itemDataKlaim: 'dataS4',
				itemDataStat: 'dataStatS',
				itemDataStatKlaim: 'dataStatS4',
			}),
		}
	}
</script>