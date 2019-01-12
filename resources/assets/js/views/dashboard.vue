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

		<!-- count row -->
		<count-row></count-row>

		<!-- laporan row -->
		<div class="row">

			<!-- grafik -->
			<div class="col-lg-8" >	
				<grafik-laporan-cu-widget v-if="currentUser.can && currentUser.can['index_laporan_cu']" :id_cu="currentUser.id_cu" :columnData="columnData" :columnDataPearls="columnDataPearls"></grafik-laporan-cu-widget>
			</div>

			<!-- tabel -->
			<div class="col-lg-4">
				<table-laporan-cu-widget v-if="currentUser.can && currentUser.can['index_laporan_cu']"  :id_cu="currentUser.id_cu" :columnData="columnData" :columnDataPearls="columnDataPearls"></table-laporan-cu-widget>
			</div>

		</div>

	</div>
</div>
<!-- page container -->
</div></template>
<script type="text/javascript">
	import { mapGetters } from 'vuex';
	import countRow from './dashboard/countRow.vue';
	import grafikLaporanCuWidget from './dashboard/grafikLaporanCuWidget.vue';
	import tableLaporanCuWidget from './dashboard/tableLaporanCuWidget.vue';

	export default{
		components: {
			countRow,
			grafikLaporanCuWidget,
			tableLaporanCuWidget
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
