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
						:kelas="kelas" v-if="$route.meta.mode != 'jalan' && $route.meta.mode != 'diikuti'"></select-data>

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
				title: 'Kegiatan PUSKOPCUINA',
				kelas: 'kegiatanBKCU',
				titleDesc: 'Mengelola data kegiatan PUSKOPCUINA',
				titleIcon: 'icon-graduation2',
			}
		},
		created(){
			this.fetch();
		},
		watch: {
			// check route changes
			$route(to, from) {
				this.fetch();
			},
		},
		methods: {
			fetch(){
				if(this.$route.params.tipe == 'diklat_bkcu'){
					this.title = 'Diklat PUSKOPCUINA';
					this.titleDesc = 'Mengelola data diklat PUSKOPCUINA';
					this.titleIcon = 'icon-graduation2';
				}else if(this.$route.params.tipe == 'diklat_bkcu_internal'){
					this.title = 'Diklat Internal PUSKOPCUINA';
					this.titleDesc = 'Mengelola data diklat internal PUSKOPCUINA';
					this.titleIcon = 'icon-graduation2';
				}else if(this.$route.params.tipe == 'pertemuan_bkcu'){
					this.title = 'Pertemuan PUSKOPCUINA';
					this.titleDesc = 'Mengelola data pertemuan PUSKOPCUINA';
					this.titleIcon = 'icon-ungroup';
				}else if(this.$route.params.tipe == 'pertemuan_bkcu_internal'){
					this.title = 'Pertemuan Internal PUSKOPCUINA';
					this.titleDesc = 'Mengelola data pertemuan internal PUSKOPCUINA';
					this.titleIcon = 'icon-ungroup';
				}else if(this.$route.meta.mode == 'jalan'){
					this.title = 'Kegiatan PUSKOPCUINA Berjalan';
					this.titleDesc = 'Mengelola data kegiatan PUSKOPCUINA berjalan';
					this.titleIcon = 'icon-feed';
				}else if(this.$route.meta.mode == 'diikuti'){
					this.title = 'Kegiatan PUSKOPCUINA Diikuti';
					this.titleDesc = 'Mengelola data kegiatan PUSKOPCUINA yang diikuti';
					this.titleIcon = 'icon-station';
				}
			}
		},
		computed: {
			...mapGetters('kegiatanBKCU',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS'
			}),
		}
	}
</script>