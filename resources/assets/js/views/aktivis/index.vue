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

					<!-- message -->
					<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
					</message>

					<!-- select data -->
					<select-data 
						:kelas="kelas"
						:path="selectCuPath"
						:isPus="true"
						:itemDataStat="itemDataStat"></select-data>

					<div class="nav-tabs-responsive mb-3">
						<ul class="nav nav-tabs nav-tabs-solid bg-light">
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'aktif'}" @click.prevent="changeTab('aktif')"><i class="icon-checkbox-checked mr-2"></i> AKTIVIS AKTIF</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'tidakAktif'}" @click.prevent="changeTab('tidakAktif')"><i class="icon-cancel-square mr-2"></i> AKTIVIS TIDAK AKTIF</a>
							</li>
						</ul>
					</div>	

					<!-- table data -->
					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'aktif'">
							<table-data 
								:title="title" 
								:kelas="kelas"
								:status="'aktif'"
								:itemData="itemData" :itemDataStat="itemDataStat"></table-data>
						</div>
					</transition>	

					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'tidakAktif'" v-if="isTidakAktif">
							<table-data 
								:title="title" 
								:kelas="kelas"
								:status="'tidakAktif'"
								:itemData="itemData2" :itemDataStat="itemDataStat2"></table-data>
						</div>
					</transition>	

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
	import selectData from "./select.vue";
	
	export default {
		components: {
			pageHeader,
			tableData,
			message,
			selectData
		},
		data() {
			return {
				title: 'Aktivis CU',
				kelas: 'aktivis',
				titleDesc: 'Mengelola data Aktivis CU',
				titleIcon: 'icon-user-tie',
				selectCuPath: 'aktivisCu',
				tabName: 'aktif',
				isTidakAktif: false,
			}
		},
		created(){
			this.checkUser('index_aktivis',this.$route.params.cu);
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
				if (value == 'tidakAktif' && !this.isTidakAktif) {
					this.isTidakAktif = true
				}
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('aktivis',{
				itemData: 'dataS',
				itemData2: 'dataS2',
				itemDataStat: 'dataStatS',
				itemDataStat2: 'dataStatS2'
			}),
		}
	}
</script>