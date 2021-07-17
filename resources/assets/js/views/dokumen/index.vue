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
					<template v-if="this.$route.meta.mode != 'pus'">
						<select-cu 
							:kelas="kelas"
							:path="selectCuPath"
							:isPus="true"
							v-if="currentUser.id_cu == 0"></select-cu>
					</template>	

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
	import selectCu from "../../components/selectCu.vue";
	import tableData from "./table.vue";
	
	export default {
		components: {
			pageHeader,
			message,
			selectCu,
			tableData,
		},
		data() {
			return {
				title: 'Dokumen',
				kelas: 'dokumen',
				titleDesc: 'Mengelola data dokumen',
				titleIcon: 'icon-books',
				selectCuPath: 'dokumenCu',
			}
		},
		created(){
			this.checkUser('index_dokumen',this.$route.params.cu);
			this.checkMode();
		},
		methods: {
			checkUser(permission,id_cu){
				if(this.currentUser){
					if(!this.currentUser.can || !this.currentUser.can[permission]){
						this.$router.push('/notFound');
					}
					if(!id_cu || this.currentUser.id_cu){
						if(this.$route.meta.mode != 'pus'){
							if(this.currentUser.id_cu != 0 && this.currentUser.id_cu != id_cu){
								this.$router.push('/notFound');
							}
						}
					}
				}
			},
			checkMode(){
				if(this.$route.meta.mode == 'pus'){
					this.title = 'Dokumen PUSKOPCUINA';
					this.titleDesc = 'Mengelola data dokumen PUSKOPCUINA';
				}else{
					this.title = 'Dokumen CU';
					this.titleDesc = 'Mengelola data dokumen CU';
				}
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('dokumen',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
			}),
		}
	}
</script>