<template>
	<div>
		<!-- Page header -->
		<page-header 
		:title="title" 
		:titleDesc="titleDesc" 
		:titleIcon="titleIcon"></page-header>
		
		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
					</message>

					<!-- select data -->
					<select-data 
						:kelas="kelas"
						:path="selectCuPath"
						:isPus="true"
						:itemDataStat="itemDataStat"></select-data>

					<!-- table data -->
					<table-data 
						:title="title" 
						:kelas="kelas"></table-data>

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
	import tableData from "./table.vue";
	
	export default {
		components: {
			pageHeader,
			message,
			selectData,
			tableData,
		},
		data() {
			return {
				title: 'Surat Keluar',
				kelas: 'surat',
				titleDesc: 'Mengelola data surat keluar',
				titleIcon: 'icon-envelop2',
				selectCuPath: 'suratCu',
			}
		},
		created(){
			this.checkUser('index_surat',this.$route.params.cu);
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
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('surat',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
			})
		}
	}
</script>