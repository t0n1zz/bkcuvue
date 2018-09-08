<template>
	<div>

		<!-- main panel -->
		<data-viewer v-bind="dataviewer" @fetch="fetch">

			<!-- desktop -->
			<!-- button desktop -->
			<template slot="button-kolom">
				<button type="button" class="btn btn-default btn-icon" v-tooltip:top="'Kolom Anggota'" :disabled="itemDataStat === 'loading'"
				  @click.prevent="columnGroup('anggota')">
					Anggota
				</button>
				<button type="button" class="btn btn-default btn-icon" v-tooltip:top="'Kolom Aset'" :disabled="itemDataStat === 'loading'"
				  @click.prevent="columnGroup('aset')">
					Aset
				</button>
				<button type="button" class="btn btn-default btn-icon" v-tooltip:top="'Kolom SHU'" :disabled="itemDataStat === 'loading'"
				  @click.prevent="columnGroup('shu')">
					SHU
				</button>
				<button type="button" class="btn btn-default btn-icon" v-tooltip:top="'Kolom Piutang'" :disabled="itemDataStat === 'loading'"
				  @click.prevent="columnGroup('piutang')">
					Piutang
				</button>
			</template>

			<template slot="button-desktop">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon" v-if="profile.can && profile.can['create_laporan_cu']" v-tooltip:top="'Tambah ' +  title">
					<i class="icon-plus3"></i> Tambah {{ title }}
				</router-link>

				<!-- ubah-->
				<button @click.prevent="ubahData(selectedItem.id,selectedItem.tp)" class="btn btn-light btn-icon" v-if="profile.can && profile.can['update_laporan_cu']" v-tooltip:top="'Ubah ' + title"
					:disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah {{ title }}
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon" v-if="profile.can && profile.can['destroy_laporan_cu']" v-tooltip:top="'Hapus ' + title"
					:disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus {{ title }}
				</button>

				<!-- detail-->
				<button @click.prevent="detailData(selectedItem.id,selectedItem.tp)" class="btn btn-light btn-icon" v-if="profile.can && profile.can['update_laporan_cu']" v-tooltip:top="'Detail ' + title" :disabled="!selectedItem.id">
					<i class="icon-file-stats"></i> Detail {{ title }}
				</button>

			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 
					'bg-info': selectedItem.id === props.item.id, 
					'bg-warning' : props.item.periode < selectData && selectedItem.id !== props.item.id && idCu == 'semua' }"
				  class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!dataviewer.columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!dataviewer.columnData[1].hide && !dataviewer.columnData[1].disable">
						<check-value :value="props.item.cu_name"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[2].hide && !dataviewer.columnData[2].disable">
						<check-value :value="props.item.tp_name"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[3].hide && !dataviewer.columnData[3].disable">
						<check-value :value="props.item.no_ba"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[4].hide && !dataviewer.columnData[4].disable">
						<check-value :value="props.item.provinces_name"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[5].hide">
						<span v-if="props.item.periode < selectData && idCu == 'semua'" class="label label-warning" v-tooltip:top="'Laporan ini bukanlah laporan periode ' + formatPeriode(selectData)"><i
							  class="icon-alert text-size-base"></i></span>
						&nbsp;
						{{ props.item.periode | dateMonth }}
					</td>
					<td v-if="!dataviewer.columnData[6].hide && !dataviewer.columnData[6].disable">
						<check-value :value="props.item.tp"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[7].hide">
						<check-value :value="props.item.l_biasa" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[8].hide">
						<check-value :value="props.item.l_lbiasa" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[9].hide">
						<check-value :value="props.item.p_biasa" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[10].hide">
						<check-value :value="props.item.p_lbiasa" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[11].hide">
						<check-value :value="props.item.total_anggota" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[12].hide">
						<check-value :value="props.item.total_anggota_lalu" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[13].hide">
						<check-value :value="props.item.aset" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[14].hide">
						<check-value :value="props.item.aset_lalu" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[15].hide">
						<check-value :value="props.item.aset_masalah" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[16].hide">
						<check-value :value="props.item.aset_tidak_menghasilkan" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[17].hide">
						<check-value :value="props.item.aktiva_lancar" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[18].hide">
						<check-value :value="props.item.simpanan_saham" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[19].hide">
						<check-value :value="props.item.simpanan_saham_lalu" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[20].hide">
						<check-value :value="props.item.simpanan_saham_des" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[21].hide">
						<check-value :value="props.item.nonsaham_unggulan" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[22].hide">
						<check-value :value="props.item.nonsaham_harian" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[23].hide">
						<check-value :value="props.item.hutang_spd" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[24].hide">
						<check-value :value="props.item.hutang_tidak_berbiaya_30hari" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[25].hide">
						<check-value :value="props.item.total_hutang_pihak3" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[26].hide">
						<check-value :value="props.item.piutang_beredar" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[27].hide">
						<check-value :value="props.item.piutang_bersih" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[28].hide">
						<check-value :value="props.item.piutang_anggota" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[29].hide">
						<check-value :value="props.item.piutang_lalai_1bulan" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[30].hide">
						<check-value :value="props.item.piutang_lalai_12bulan" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[31].hide">
						<check-value :value="props.item.rasio_beredar" valueType="percentage"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[32].hide">
						<check-value :value="props.item.rasio_lalai" valueType="percentage"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[33].hide">
						<check-value :value="props.item.dcr" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[34].hide">
						<check-value :value="props.item.dcu" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[35].hide">
						<check-value :value="props.item.iuran_gedung" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[36].hide">
						<check-value :value="props.item.donasi" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[37].hide">
						<check-value :value="props.item.bjs_saham" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[38].hide">
						<check-value :value="props.item.beban_penyisihan_dcr" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[39].hide">
						<check-value :value="props.item.investasi_likuid" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[40].hide">
						<check-value :value="props.item.total_pendapatan" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[41].hide">
						<check-value :value="props.item.total_biaya" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[42].hide">
						<check-value :value="props.item.shu" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[43].hide">
						<check-value :value="props.item.shu_lalu" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[44].hide">
						<check-value :value="props.item.rata_aset" valueType="currency"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[45].hide">
						<check-value :value="props.item.laju_inflasi" valueType="percentage"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[46].hide">
						<check-value :value="props.item.harga_pasar" valueType="percentage"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[47].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!dataviewer.columnData[48].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

		</data-viewer>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :color="modalColor" :button="modalButton" @tutup="modalTutup"
		  @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
			<template slot="modal-title">{{ modalTitle }}</template>
			<template slot="modal-body1">
				<div class="alert bg-info alert-styled-left mt-10 pt-5 pb-5">
					<p>Laporan ini merupakan laporan konsolidasi dari beberapa laporan di Tp. Oleh karena hal tersebut maka untuk
						melakukan perubahan pada laporan konsolidasi mesti melakukan perubahan pada laporan Tp yang dapat dipilih
						dibawah:</p>
				</div>
				<hr>

				<div class="row">
					<div class="col-md-6  pt-5 pb-5" v-for="laporanTp in listLaporanTpData">
						<a class="btn btn-default btn-block" @click.prevent="ubahLaporanTp(laporanTp.id)"><i class="icon-pencil5"></i>
							Ubah Laporan {{laporanTp.tp.name}}</a>
					</div>
				</div>

				<hr>
				<div class="text-center hidden-xs">
					<button type="button" @click.prevent="modalTutup" class="btn btn-default" v-tooltip:top="'Tutup'">
						<i class="icon-cross"></i> Tutup
					</button>
				</div>
				<div class="visible-xs">
					<button type="button" @click.prevent="modalTutup" class="btn btn-default btn-block" v-tooltip:top="'Tutup'">
						<i class="icon-cross"></i> Tutup
					</button>
				</div>
			</template>
		</app-modal>

	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		mapGetters
	} from 'vuex';
	import DataViewer from '../../components/dataviewer2.vue';
	import appModal from '../../components/modal';
	import checkValue from '../../components/checkValue.vue';
	import collapseButton from '../../components/collapseButton.vue';

	export default {
		components: {
			DataViewer,
			appModal,
			checkValue,
			collapseButton
		},
		props: ['title', 'kelas'],
		data() {
			return {
				dataviewer: {
					title: this.title,
					itemData: this.itemData,
					itemDataStat: this.itemDataStat,
					isUploadExcel: true,
					columnData: [{
							title: 'No.',
							name: 'No.',
							tipe: 'string',
							sort: false,
							hide: false,
							disable: false,
							isChart: false,
							columnGroup: 'all'
						},
						{
							title: 'CU',
							name: 'cu.name',
							tipe: 'string',
							sort: true,
							hide: false,
							disable: false,
							isChart: false,
							columnGroup: 'all',
							filter: true,
							filterType: 'string',
							filterKey: 'cu.name'
						},
						{
							title: 'TP',
							name: 'tp_name',
							tipe: 'string',
							sort: true,
							hide: false,
							disable: false,
							isChart: false,
							columnGroup: 'all',
							filter: true,
							filterType: 'string',
							filterKey: 'tp.name'
						},
						{
							title: 'No. BA',
							name: 'no_ba',
							tipe: 'string',
							sort: true,
							hide: false,
							disable: false,
							isChart: false,
							columnGroup: 'all',
							filter: true,
							filterType: 'number',
							filterKey: 'cu.no_ba'
						},
						{
							title: 'Provinsi',
							name: 'provinces_name',
							groupKey: 'provinces_name',
							groupNoKey: '-',
							sort: true,
							hide: false,
							disable: false,
							isChart: false,
							columnGroup: 'all'
						},
						{
							title: 'Periode',
							name: 'periode',
							groupKey: 'periode',
							groupNoKey: '-',
							sort: true,
							hide: false,
							disable: false,
							isChart: false,
							columnGroup: 'all',
							filter: true,
							filterType: 'date',
						},
						{
							title: 'Tp',
							name: 'tp',
							sort: true,
							hide: false,
							disable: false,
							isChart: false,
							columnGroup: 'all',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Lelaki Biasa',
							name: 'l_biasa',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'anggota',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Lelaki L.Biasa',
							name: 'l_lbiasa',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'anggota',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Perempuan Biasa',
							name: 'p_biasa',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'anggota',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Perempuan L.Biasa',
							name: 'p_lbiasa',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'anggota',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Total Anggota',
							name: 'total_anggota',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: true,
							columnGroup: 'anggota'
						},
						{
							title: 'Total Anggota Lalu',
							name: 'total_anggota_lalu',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'anggota',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Aset',
							name: 'aset',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'aset',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Aset Lalu',
							name: 'aset_lalu',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'aset',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Aset Masalah',
							name: 'aset_masalah',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'aset',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Aset Tdk Menghasilkan',
							name: 'aset_tidak_menghasilkan',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'aset',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Aktiva Lancar',
							name: 'aktiva_lancar',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Simp. Saham',
							name: 'simpanan_saham',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Simp. Saham Lalu',
							name: 'simpanan_saham_lalu',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Simp. Saham Des',
							name: 'simpanan_saham_des',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Simp. Nonsaham Unggulan',
							name: 'nonsaham_unggulan',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Simp. Nonsaham Harian',
							name: 'nonsaham_harian',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Hutang SPD',
							name: 'hutang_spd',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Hutang Tdk Berbiaya',
							name: 'hutang_tidak_berbiaya_30hari',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Total Hutang Pihak Ke-3',
							name: 'total_hutang_pihak3',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Piutang Beredar',
							name: 'piutang_beredar',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'piutang',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Piutang Bersih',
							name: 'piutang_bersih',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'piutang'
						},
						{
							title: 'Piutang Anggota',
							name: 'piutang_anggota',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'piutang',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Piutang Lalai 1-12 Bulan',
							name: 'piutang_lalai_1bulan',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'piutang',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Piutang Lalai > 12 Bulan',
							name: 'piutang_lalai_12bulan',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'piutang',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Rasio Piutang Beredar',
							name: 'rasio_beredar',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'piutang'
						},
						{
							title: 'Rasio Piutang Lalai',
							name: 'rasio_lalai',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'piutang'
						},
						{
							title: 'DCR',
							name: 'dcr',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'DCU',
							name: 'dcu',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Iuran Gedung',
							name: 'iuran_gedung',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Donasi',
							name: 'donasi',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'BJS Saham',
							name: 'bjs_saham',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Beban Penyisihan DCR',
							name: 'beban_penyisihan_dcr',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Investasi Likuid',
							name: 'investasi_likuid',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Total Pendapatan',
							name: 'total_pendapatan',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'shu',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Total Biaya',
							name: 'total_biaya',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'shu',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'SHU',
							name: 'shu',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'shu',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'SHU Lalu',
							name: 'shu_lalu',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'shu',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Rata-rata Aset',
							name: 'rata_aset',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							columnGroup: 'aset',
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Laju Inflasi',
							name: 'laju_inflasi',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Harga Pasar',
							name: 'harga_pasar',
							tipe: 'number',
							sort: true,
							hide: false,
							disable: false,
							isChart: true,
							isChartSelect: false,
							filter: true,
							filterType: 'number'
						},
						{
							title: 'Tgl. Buat',
							name: 'created_at',
							sort: true,
							hide: false,
							disable: false,
							isChart: false,
							columnGroup: 'all',
							filter: true,
							filterType: 'datetime'
						},
						{
							title: 'Tgl. Ubah',
							name: 'updated_at',
							sort: true,
							hide: false,
							disable: false,
							isChart: false,
							columnGroup: 'all',
							filter: true,
							filterType: 'datetime'
						}
					]
				},
				selectedItem: [],
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalButton: ''
			}
		},
		created() {
			if (this.profileStat == "success") {
				this.fetch();
			}
		},
		watch: {
			// check route changes
			'$route'(to, from) {
				this.isFirstLoad = true;
				if (this.profileStat == "success") {
					this.fetch();
				}
			},

			itemDataStat(value) {
				this.dataviewer.itemDataStat = value;
        if(value == 'success'){
					this.dataviewer.itemData = this.itemData;
        }
			},

			profileStat(value) {
				if (value == "success") {
					this.checkProfile();
					if (this.itemDataStat != "success") {
						this.fetch();
					}
				}
			},

			// when updating data
			updateStat(value) {
				this.modalState = value;
				this.modalButton = 'Ok';

				if (value === "success") {
					this.modalTitle = this.updateMessage.message;
					this.modalContent = '';
					this.fetch();
				} else if (value === "fail") {
					this.modalContent = this.updateMessage;
				} else {
					this.modalContent = '';
				}
			}
		},
		methods: {
			fetch(params) {
				this.checkProfile();
				if (this.$route.meta.mode == 'periode') {
					this.disableColumnCU(false);
					this.disableColumnTp(false);
					this.disableColumnTpName(true);

					this.$store.dispatch(this.kelas + '/indexPeriode', [params, this.$route.params.periode]);

				} else if (this.$route.meta.mode == 'cu') {
					this.disableColumnCU(true);
					if (this.$route.params.tp == 'konsolidasi') {
						this.disableColumnTp(false);
						this.disableColumnTpName(true);

						this.$store.dispatch(this.kelas + '/indexCu', [params, this.$route.params.cu]);
					} else {
						this.disableColumnTp(true);
						this.disableColumnTpName(true);

						this.$store.dispatch(this.kelas + '/indexTp', [params, this.$route.params.tp]);
					}
				} else if (this.$route.meta.mode == 'cuPeriode') {
					this.disableColumnCU(true);
					this.disableColumnTp(true);
					this.disableColumnTpName(false);

					this.$store.dispatch(this.kelas + '/indexTpPeriode', [params, this.$route.params.cu, this.$route.params.periode]);
				} else {
					this.disableColumnCU(false);
					this.disableColumnTp(false);
					this.disableColumnTpName(true);

					this.$store.dispatch(this.kelas + '/index', params);
				}
			},
			disableColumnCU(status) {
				this.dataviewer.columnData[1].disable = status;
				this.dataviewer.columnData[3].disable = status;
				this.dataviewer.columnData[4].disable = status;
			},
			disableColumnTp(status) {
				this.dataviewer.columnData[6].disable = status;
			},
			disableColumnTpName(status) {
				this.dataviewer.columnData[2].disable = status;
			},
			checkProfile() {
				if (this.profile.id_cu != 0) {
					if (this.$route.meta.mode == 'cu' || this.$route.meta.mode == 'cuPeriode') {
						if (this.profile.id_cu != this.$route.params.cu) {
							this.$router.push({
								name: 'notFound'
							});
						}
					} else if (this.$route.meta.mode == 'periode') {
						this.$router.push({
							name: 'notFound'
						});
					} else {
						this.$router.push({
							name: 'notFound'
						});
					}
				}
			},
			columnGroup(value) {
				for (let i = 0, len = this.dataviewer.columnData.length; i < len; i++) {
					if (this.dataviewer.columnData[i].columnGroup == value || this.dataviewer.columnData[i].columnGroup == 'all') {
						this.dataviewer.columnData[i].hide = false;
					} else {
						this.dataviewer.columnData[i].hide = true;
					}
				}
			},
			selectedRow(item) {
				this.selectedItem = item;
			},
			ubahData(id, tp) {
				if (tp) {
					if (tp.id) {
						this.ubahLaporanTp(id);
					} else {
						this.modalShow = true;
						this.modalState = 'normal1';
						this.modalColor = 'bg-primary';
						this.modalTitle = 'Ubah Laporan Konsolidasi';
						this.$store.dispatch('laporanTp/listLaporanTp', [this.selectedItem.id_cu, this.selectedItem.periode]);
					}
				} else {
					this.$router.push({
						name: this.kelas + 'Edit',
						params: {
							id: id
						}
					});
				}
			},
			ubahLaporanTp(id, tp) {
				this.modalShow = false;
				this.$router.push({
					name: 'laporanTpEdit',
					params: {
						id: id
					}
				});
			},
			detailData(id, tp) {
				if (tp && tp.id) {
					this.$router.push({
						name: 'laporanTpDetail',
						params: {
							id: id
						}
					});
				} else {
					this.$router.push({
						name: 'laporanCuDetail',
						params: {
							id: id
						}
					});
				}
			},
			modalConfirmOpen(source, isMobile, itemMobile) {
				this.modalShow = true;
				this.modalColor = '';
				this.modalState = 'confirm-tutup';
				this.source = source;

				if (isMobile) {
					this.selectedItem = itemMobile;
				}

				if (source == 'hapus') {
					this.modalTitle = 'Hapus ' + this.title + ' ' + this.selectedItem.name + ' ?';
					this.modalButton = 'Iya, Hapus';
				}
			},
			modalTutup() {
				this.modalShow = false;
				this.$store.dispatch(this.kelas + '/resetUpdateStat');
			},
			modalConfirmOk() {
				if (this.source == 'hapus') {
					this.$store.dispatch(this.kelas + '/destroy', this.selectedItem.id);
				}
			},
			formatPeriode(value) {
				return Vue.filter('dateMonth')(value);
			}
		},
		computed: {
			...mapGetters('user', {
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('global', {
				idCu: 'idCu',
				idTp: 'idTp',
				selectData: 'data'
			}),
			...mapGetters('cu', {
				modelCU: 'dataS',
				modelCUStat: 'dataStatS',
			}),
			...mapGetters('tp', {
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
			}),
			...mapGetters('laporanCu', {
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				periodeData: 'periode',
				periodeStat: 'periodeStat',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('laporanTp', {
				listLaporanTpData: 'data2S',
				listLaporanTpDataStat: 'dataStat2S',
			}),
		}
	}
</script>