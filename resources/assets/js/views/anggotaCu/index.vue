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
									<a href="#" class="nav-link" :class="{'active' : tabName == 'masih'}" @click.prevent="changeTab('masih')"><i class="icon-man-woman mr-2"></i> Masih Anggota</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link" :class="{'active' : tabName == 'keluar'}" @click.prevent="changeTab('keluar')"><i class="icon-exit2 mr-2"></i> Sudah Keluar</a>
								</li>
							</ul>
						</div>

						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-show="tabName == 'masih'">
								<table-data 
									:title="title" 
									:kelas="kelas"
									:tipe="'masih'"
									:itemData="itemData"
									:itemDataStat="itemDataStat"></table-data>
							</div>
						</transition>	

						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-show="tabName == 'keluar'" v-if="isKeluar">
								<table-data 
									:title="title" 
									:kelas="kelas"
									:tipe="'keluar'"
									:itemData="itemData2"
									:itemDataStat="itemDataStat2"></table-data>
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
				title: 'Anggota CU',
				kelas: 'anggotaCu',
				titleDesc: 'Mengelola anggota CU',
				titleIcon: 'icon-man-woman',
				selectCuPath: 'anggotaCuCu',
				tabName: 'masih',
				isKeluar: false,
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
				if (value == 'keluar' && !this.isKeluar) {
					this.isKeluar = true
				}
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('anggotaCu',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				itemData2: 'dataS2',
				itemDataStat2: 'dataStatS2'
			}),
		}
	}
</script>