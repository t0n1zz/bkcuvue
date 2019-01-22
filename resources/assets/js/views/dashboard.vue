<template><div> 
<!-- Page header -->
<div class="page-header">
	<div class="page-header-content header-elements-md-inline">
		<div class="page-title d-flex">
			<h4><i class="icon-screen3 mr-2"></i> <span class="font-weight-semibold">Dashboard</span>
			<small class="d-block text-muted">Selamat Datang {{ currentUser.name }}</small>
			</h4>
		</div>
	</div>
</div>
<!-- /page header -->
<!-- page container -->
<div class="page-content pt-0">
	<div class="content-wrapper">

		<!-- button row -->
		<button-row></button-row>

		<div class="row align-items-stretch">

			<!-- daftar diklat -->
			<div class="col-lg-8">
				<diklat-bkcu-widget v-if="currentUser.can && currentUser.can['index_diklat_bkcu']"></diklat-bkcu-widget>

				<history-organisasi-widget></history-organisasi-widget>

				<grafik-laporan-cu-widget v-if="currentUser.can && currentUser.can['index_laporan_cu']" :id_cu="currentUser.id_cu" :columnData="columnData" :columnDataPearls="columnDataPearls"></grafik-laporan-cu-widget>

			</div>

			<!-- peserta diklat -->
			<div class="col-lg-4">
				<peserta-diklat-bkcu-widget v-if="currentUser.can && currentUser.can['index_diklat_bkcu']" ></peserta-diklat-bkcu-widget>

				<count-organisasi-widget></count-organisasi-widget>

				<table-laporan-cu-widget v-if="currentUser.can && currentUser.can['index_laporan_cu']"  :id_cu="currentUser.id_cu" :columnData="columnData" :columnDataPearls="columnDataPearls"></table-laporan-cu-widget>
				
			</div>

			
		
		</div>

	</div>
</div>
<!-- page container -->
</div></template>
<script type="text/javascript">
	import { mapGetters } from 'vuex';
	import buttonRow from './dashboard/buttonRow.vue';
	import diklatBkcuWidget from './dashboard/diklatBKCUWidget.vue';
	import pesertaDiklatBkcuWidget from './dashboard/pesertaDiklatBKCUWidget.vue';
	import grafikLaporanCuWidget from './dashboard/grafikLaporanCuWidget.vue';
	import tableLaporanCuWidget from './dashboard/tableLaporanCuWidget.vue';
	import historyOrganisasiWidget from './dashboard/historyOrganisasiWidget.vue';
	import countOrganisasiWidget from './dashboard/countOrganisasiWidget.vue';

	export default{
		components: {
			buttonRow,
			diklatBkcuWidget,
			pesertaDiklatBkcuWidget,
			grafikLaporanCuWidget,
			tableLaporanCuWidget,
			historyOrganisasiWidget,
			countOrganisasiWidget,
		},
		data(){
			return{
			}
		},
		created(){
		},
		watch: {
		},
		methods:{
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('laporanCu', {
				columnData: 'columnData',
				columnDataPearls: 'columnDataPearls',
			}),
		}
	}
</script>
