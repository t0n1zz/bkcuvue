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
						<select-data></select-data>

						<table-cair :itemData="itemData" :itemDataStat="itemDataStat" v-if="$route.meta.mode == 'cair'" @bukaData="bukaData"></table-cair>
						
						<div v-if="$route.meta.mode == 'cair'">
							<hr/>
							<button type="button" class="btn btn-light btn-block" @click.prevent="showDetail('semua')">
								<span v-if="!isShowDetail"><i class="icon-eye"></i> Buka data klaim JALINAN</span>
								<span v-else><i class="icon-eye-blocked"></i> Tutup data klaim JALINAN</span>
							</button>
							<hr/>
						</div>

						<table-data :title="'Klaim JALINAN'" :kelas="kelas" :itemData="itemData3" :itemDataStat="itemDataStat3" :status="'3'" :isSimple="true" v-if="isShowDetail"></table-data>

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
	import selectData from "./select.vue";
	import tableData from "../jalinanKlaim/table.vue";
	import tableCair from "./table";
	
	export default {
		components: {
			pageHeader,
			message,
			selectData,
			tableData,
			tableCair
		},
		data() {
			return {
				title: 'Pencairan JALINAN',
				titleDesc: 'Mengelola pencairan JALINAN',
				titleIcon: 'icon-square-down',
				kelas: 'jalinanKlaim',
				isShowDetail: false,
				cu: '',
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
			bukaData(value){
				this.$router.push({name: 'jalinanCairTanggal', params:{tanggal: this.$route.params.tanggal, cu: value} });
				this.isShowDetail = true;
			},
			showDetail(value){
				if(this.isShowDetail){
					this.isShowDetail = false;
				}else{
					if(value != 'semua'){
						this.bukaData(value);
					}
					this.isShowDetail = true;
				}
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('jalinanKlaim',{
				itemData: 'dataS',
				itemData3: 'dataS3',
				itemDataStat: 'dataStatS',
				itemDataStat3: 'dataStatS3',
			}),
		}
	}
</script>