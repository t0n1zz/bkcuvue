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

					<div class="nav-tabs-responsive">
						<ul class="nav nav-tabs nav-tabs-solid bg-light">
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'asetTetap'}" @click.prevent="changeTab('asetTetap')"><i class="icon-list2 mr-2"></i> Aset Tetap Dalam Penyusutan</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'asetSelesai'}" @click.prevent="changeTab('asetSelesai')"><i class="icon-notebook mr-2"></i> Aset Tetap Penyusutan Selesai</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'asetDihapus'}" @click.prevent="changeTab('asetDihapus')"><i class="icon-books mr-2"></i> Aset Tetap Dihapus Dari Laporan</a>		
							</li>
						</ul>
					</div>

					<br/>
					<transition enter-active-class="animated fadeIn" mode="out-in">
					<div v-show="tabName == 'asetTetap'">
					<!-- table data -->
					<table-data 
						:title="title" 
						:kelas="kelas"
						:tab1="tab1"></table-data>
					</div>
					</transition>
					<transition enter-active-class="animated fadeIn" mode="out-in">
					<div v-show="tabName == 'asetSelesai'">
					<!-- table data -->
					<table-data 
					:title="title" 
						:kelas="kelas"
						:tab2="tab2">
					</table-data>
					</div>
					</transition>
					<transition enter-active-class="animated fadeIn" mode="out-in">
					<div v-show="tabName == 'asetDihapus'">
					<!-- table data -->
					<table-data 
					:title="title" 
						:kelas="kelas"
					:tab3="tab3">
					</table-data>

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
	import message from "../../components/message.vue";
	import tableData from "./table.vue";

	export default {
		components: {
			pageHeader,
			message,
			tableData,
		},
		data() {
			return {
				tab1: 'asetTetap',
				tab2:'asetTetapSelesai',
				tab3:'asetTetapDihapus',
				title: 'Aset Tetap',
				kelas: 'asetTetap',
				titleDesc: 'Mengelola data aset tetap',
				titleIcon: 'icon-bag',
				tabName: 'asetTetap'
			}
		},
		created(){
			this.checkUser('index_aset_tetap',this.$route.params.cu);
		},
		methods: {
			checkUser(permission,id_cu){
				if(this.currentUser){
					if(!this.currentUser.can || !this.currentUser.can[permission]){
						this.$router.push('/notFound');
					}
				}
			},
			changeTab(value){
				this.tabName = value;
				if(value == 'asetDihapus' && !this.isAsetDihapus){
					this.isAsetDihapus = true;
					// this.fetchAsetDihapus(this.params);
				}else if(value == 'asetSelesai' && !this.isAsetSelesai){
					this.isAsetSelesai = true;
					// this.fetchAsetDihapus(this.params);
				}else if(value == 'asetRusak' && !this.isAsetRusak){
					this.isAsetRusak= true;
					// this.fetchAsetDihapus(this.params);
				}
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('asetTetap',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
			}),
		}
	}
</script>