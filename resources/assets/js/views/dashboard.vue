<template>
	<div>
		<!-- Page header -->
		<div class="page-header">
			<div class="page-header-content header-elements-md-inline">
				<div class="page-title d-flex">
					<h4><i class="icon-screen3 mr-2"></i>Halo
						<span class="font-weight-semibold" v-if="currentUser.aktivis">{{ currentUser.aktivis.name + ','
						}}</span>
						<span class="font-weight-semibold" v-else>{{ currentUser.name + ',' }}</span>
						Apa kabarnya hari ini?
					</h4>
				</div>
			</div>
		</div>
		<!-- /page header -->
		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">

				<div class="row align-items-stretch">

					<div class="col-lg-12">
						<!-- news carousel -->
						<news-slider></news-slider>

						<!-- button row -->
						<button-row></button-row>

					</div>

					<div class="col-lg-8">
						<kegiatan-bkcu-widget></kegiatan-bkcu-widget>

						<history-organisasi-widget v-if="currentUser.id_cu == 0"></history-organisasi-widget>

						<!-- <grafik-laporan-cu-widget v-if="currentUser.can && currentUser.can['index_laporan_cu']" :id_cu="currentUser.id_cu" :columnData="columnData" :columnDataPearls="columnDataPearls"></grafik-laporan-cu-widget> -->
					</div>

					<div class="col-lg-4">
						<!-- <peserta-diklat-bkcu-widget v-if="currentUser.can && currentUser.can['index_diklat_bkcu']" ></peserta-diklat-bkcu-widget> -->

						<count-organisasi-widget></count-organisasi-widget>

						<!-- <table-laporan-cu-widget v-if="currentUser.can && currentUser.can['index_laporan_cu']"  :id_cu="currentUser.id_cu" :columnData="columnData" :columnDataPearls="columnDataPearls"></table-laporan-cu-widget> -->
					</div>

				</div>

			</div>
		</div>
		<!-- page container -->
	</div>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex';
import newsSlider from './dashboard/newsSlider.vue';
import buttonRow from './dashboard/buttonRow.vue';
import kegiatanBkcuWidget from './dashboard/kegiatanBKCUWidget.vue';
// import pesertaDiklatBkcuWidget from './dashboard/pesertaDiklatBKCUWidget.vue';
import grafikLaporanCuWidget from './dashboard/grafikLaporanCuWidget.vue';
import tableLaporanCuWidget from './dashboard/tableLaporanCuWidget.vue';
import historyOrganisasiWidget from './dashboard/historyOrganisasiWidget.vue';
import countOrganisasiWidget from './dashboard/countOrganisasiWidget.vue';

export default {
	components: {
		newsSlider,
		buttonRow,
		kegiatanBkcuWidget,
		// pesertaDiklatBkcuWidget,
		grafikLaporanCuWidget,
		tableLaporanCuWidget,
		historyOrganisasiWidget,
		countOrganisasiWidget,
	},
	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),
		...mapGetters('laporanCu', {
			columnData: 'columnData',
			columnDataPearls: 'columnDataPearls',
		}),
	}
}
</script>