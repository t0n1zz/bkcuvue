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
							:isPus="false"></select-cu>

						<table-data 
							:title="title" 
							:kelas="kelas"
							:itemData="itemData"
							:itemDataStat="itemDataStat"></table-data>

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
				title: 'Produk Anggota CU [DRAFT]',
				kelas: 'anggotaCu',
				titleDesc: 'Mengelola produk anggota CU [DRAFT]',
				titleIcon: 'icon-list2',
				selectCuPath: 'anggotaProdukCuDraft',
			}
		},
		created(){
			this.checkUser('upload_anggota_cu',this.$route.params.cu);
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
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('anggotaCu',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
			}),
		}
	}
</script>