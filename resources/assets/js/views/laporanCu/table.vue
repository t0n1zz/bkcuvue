<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :source="source" :columnData="columnData" :filterData='filterData' :toolbarButton="4" :itemData="itemData" :itemDataStat="itemDataStat" 
		:params="params" :tableClass="'table-xs'"
		@fetch="fetch">

			<!-- desktop -->
			<!-- button desktop -->
			<template slot="button-kolom">
				<button type="button" class="btn btn-default btn-icon" v-tooltip:top="'Kolom Anggota'" :disabled="itemDataStat === 'loading'" @click.prevent="kolomAnggota()">
					Anggota
				</button>
				<button type="button" class="btn btn-default btn-icon" v-tooltip:top="'Kolom SHU'" :disabled="itemDataStat === 'loading'" @click.prevent="kolomAnggota()">
					SHU
				</button>
				<button type="button" class="btn btn-default btn-icon" v-tooltip:top="'Kolom Piutang'" :disabled="itemDataStat === 'loading'" @click.prevent="kolomAnggota()">
					Piutang
				</button>
			</template>	

			<template slot="button-desktop">

				<!-- tambah -->
				<div class="btn-group pb-5" v-if="profile.can && profile.can['create ' + kelas]">
					<router-link :to="{ name: kelas + 'Create'}" class="btn btn-default btn-icon" v-tooltip:top="'Tambah ' +  title">
						<i class="icon-plus3"></i> Tambah 
					</router-link>
				</div>

				<!-- ubah-->
				<div class="btn-group pb-5" v-if="profile.can && profile.can['update ' + kelas]">
					<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-default btn-icon" v-tooltip:top="'Ubah ' + title" :disabled="!selectedItem.id">
						<i class="icon-pencil5"></i> Ubah
					</button>
				</div>

				<!-- hapus -->
				<div class="btn-group pb-5" v-if="profile.can && profile.can['destroy ' + kelas]">
					<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-default btn-icon" v-tooltip:top="'Hapus ' + title"  :disabled="!selectedItem.id">
						<i class="icon-bin2"></i> Hapus
					</button>
				</div>

			</template>

			<!-- button context -->
			<template slot="button-context">
				<!-- title -->
				<li class="text-center pb-5 pt-5 bg-primary" v-if="selectedItem.name"><b class="text-size-large">{{ this.columnData[1].title }}</b></li>
				<li class="text-center pb-5 pt-5 bg-warning" v-else><b class="text-size-large">Tidak ada data yang terpilih</b></li>
				<li><hr class="no-margin-bottom no-margin-top"/></li>

				<!-- selected content -->
				<li class="text-center pb-10 pt-10 pl-5 pr-5" v-if="selectedItem.name">
					<span class="text-size-large">{{selectedItem.name}}</span></li>
				<li><hr class="no-margin-top no-margin-bottom"/></li>

				<!-- update -->
				<li v-if="profile.can && profile.can['update ' + kelas]">
					<div class="pl-5 pr-5 pb-5 pt-10">
						<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Ubah ' + title" :disabled="!selectedItem.id">
							<i class="icon-pencil5"></i> Ubah
						</button>
					</div>
				</li>

				<!-- destroy -->
				<li v-if="profile.can && profile.can['destroy ' + kelas]">
					<div class="pl-5 pr-5 pb-5">
						<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Hapus ' + title"  :disabled="!selectedItem.id">
							<i class="icon-bin2"></i> Hapus
						</button>
					</div>
				</li>

				<!-- lihat artikel -->
				<li v-if="profile.can && profile.can['index artikel']">
					<div class="pl-5 pr-5 pb-5">
						<button @click.prevent="lihatArtikel(selectedItem.id, selectedItem.id_cu)" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Lihat artikel yang ditulis'" :disabled="selectedItem.has_artikel_count === 0">
							<i class="icon-file-eye"></i> Lihat artikel 
						</button>
					</div>
				</li>
			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!columnData[0].hide" class="bg-blue-300">
						{{ props.index + 1 }}
					</td>
					<td v-if="!columnData[1].hide">
						<check-value :value="props.item.no_ba"></check-value>
					</td>
					<td v-if="!columnData[2].hide && !columnData[2].disable">
						<check-value :value="props.item.c_u.name" :empty="columnData[2].groupNoKey" v-if="props.item.c_u"></check-value>
						<span v-else>{{columnData[2].groupNoKey}}</span>
					</td>
					<td v-if="!columnData[3].hide && !columnData[3].disable">
						<check-value :value="props.item.c_u.provinces.name" :empty="columnData[3].groupNoKey" v-if="props.item.c_u.provinces"></check-value>
						<span v-else>{{columnData[3].groupNoKey}}</span>
					</td>
					<td v-if="!columnData[4].hide" v-html="$options.filters.date(props.item.periode)"></td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.l_biasa" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[6].hide">
						<check-value :value="props.item.l_lbiasa" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.p_biasa" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[8].hide">
						<check-value :value="props.item.p_lbiasa" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[9].hide">
						<check-value :value="props.item.total_anggota" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[10].hide">
						<check-value :value="props.item.total_anggota_lalu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[11].hide">
						<check-value :value="props.item.aset" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[12].hide">
						<check-value :value="props.item.aset_lalu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[13].hide">
						<check-value :value="props.item.aset_masalah" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[14].hide">
						<check-value :value="props.item.aset_tidak_menghasilkan" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[15].hide">
						<check-value :value="props.item.aktiva_lancar" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[16].hide">
						<check-value :value="props.item.simpanan_saham" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[17].hide">
						<check-value :value="props.item.simpanan_saham_lalu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[18].hide">
						<check-value :value="props.item.simpanan_saham_des" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[19].hide">
						<check-value :value="props.item.nonsaham_unggulan" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[20].hide">
						<check-value :value="props.item.nonsaham_harian" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[21].hide">
						<check-value :value="props.item.hutang_spd" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[22].hide">
						<check-value :value="props.item.hutang_tidak_berbiaya_30hari" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[23].hide">
						<check-value :value="props.item.total_hutang_pihak3" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[24].hide">
						<check-value :value="props.item.piutang_beredar" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[25].hide">
						<check-value :value="props.item.piutang_bersih" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[26].hide">
						<check-value :value="props.item.piutang_anggota" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[27].hide">
						<check-value :value="props.item.piutang_lalai_1bulan" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[28].hide">
						<check-value :value="props.item.piutang_lalai_12bulan" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[29].hide">
						<check-value :value="props.item.rasio_piutang_beredar" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[30].hide">
						<check-value :value="props.item.rasio_piutang_lalai" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[31].hide">
						<check-value :value="props.item.dcr" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[32].hide">
						<check-value :value="props.item.dcu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[33].hide">
						<check-value :value="props.item.iuran_gedung" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[34].hide">
						<check-value :value="props.item.donasi" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[35].hide">
						<check-value :value="props.item.bjs_saham" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[36].hide">
						<check-value :value="props.item.beban_penyisihan_dcr" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[37].hide">
						<check-value :value="props.item.investasi_likuid" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[38].hide">
						<check-value :value="props.item.total_pendapatan" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[39].hide">
						<check-value :value="props.item.total_biaya" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[40].hide">
						<check-value :value="props.item.shu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[41].hide">
						<check-value :value="props.item.shu_lalu" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[42].hide">
						<check-value :value="props.item.rata_aset" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[43].hide">
						<check-value :value="props.item.laju_inflasi" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[44].hide">
						<check-value :value="props.item.harga_pasar" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[45].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[46].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

			<!-- mobile -->
			<!-- button mobile -->
			<template slot="button-mobile" class="hidden-print" v-if="profile.can && profile.can['create ' + kelas]">
				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-default btn-icon btn-block">
					<i class="icon-plus3"></i> Tambah
				</router-link>
			</template>
	
			<!-- item mobile -->
			<template slot="item-mobile" slot-scope="props">
				<div class="panel panel-flat visible-xs">
					<table class="table table-striped">
						<tbody>
							<tr v-if="!columnData[0].hide">
								<td><b>{{columnData[0].title}}</b></td>
								<td><check-value :value="props.item.name" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[1].hide">
								<td colspan="2"><b>{{columnData[1].title}}</b></td>
							</tr>
							<tr v-if="!columnData[1].hide">
								<td colspan="2" style="word-wrap: break-word;"><check-value :value="props.item.deskripsi" :isTrim="false"></check-value></td>
							</tr>
							<tr v-if="!columnData[2].hide && !columnData[2].disable">
								<td><b>{{columnData[2].title}}</b></td>
								<td>
									<check-value :value="props.item.c_u.name" :isTrim="false" :frontText="': '" v-if="props.item.c_u"></check-value>
									<span v-else>: {{columnData[2].groupNoKey}}</span>
								</td>
							</tr>
								<tr v-if="!columnData[3].hide">
								<td><b>{{columnData[3].title}}</b></td>
								<td>: {{props.item.has_artikel_count}}</td>
							</tr>
							<tr v-if="!columnData[4].hide">
								<td><b>{{columnData[4].title}}</b></td>
								<td>
									: <span v-html="$options.filters.dateTime(props.item.created_at)"></span>
								</td>
							</tr>
							<tr v-if="!columnData[5].hide">
								<td><b>{{columnData[5].title}}</b></td>
								<td>
									: <span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="panel-footer hidden-print">
						<div class="text-center button-toolbar">

							<!-- update -->
							<div class="pt-10 pb-10 pl-15 pr-15" v-if="profile.can && profile.can['update ' + kelas]">
								<button @click.prevent="ubahData(props.item.id)" class="btn btn-default btn-icon btn-block" v-if="props.item.id">
									<i class="icon-pencil5"></i> Ubah
								</button>
							</div>
							
							<!-- destroy -->
							<div class="pb-10 pl-15 pr-15" v-if="profile.can && profile.can['destroy ' + kelas]">
								<button @click.prevent="modalConfirmOpen('hapus',true,props.item)" class="btn btn-default btn-icon btn-block" v-if="props.item">
									<i class="icon-bin2"></i> <span>Hapus</span>
								</button>
							</div>

							<!-- lihat artikel -->
							<div class="pb-10 pl-15 pr-15" v-if="profile.can && profile.can['index artikel']">
								<button @click.prevent="lihatArtikel(props.item.id,props.item.id_cu)" class="btn btn-default btn-icon btn-block" :disabled="selectedItem.has_artikel_count === 0" v-if="props.item.id">
									<i class="icon-file-eye"></i> Lihat artikel 
								</button>
							</div>

						</div>
					</div>
				</div>
			</template>

		</data-viewer>
					
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import DataViewer from '../../components/dataviewer.vue';
	import appModal from '../../components/modal';
	import checkValue from '../../components/checkValue.vue';

	export default {
		components: {
			DataViewer,
			appModal,
			checkValue
		},
		props:['title','kelas'],
		data() {
			return {
				source: '',
				selectedItem: [],
				params: {
          column: 'id',
          direction: 'desc',
          per_page: 50,
          page: 1,
          search_column: 'cu.name',
          search_operator: 'like',
          search_query_1: '',
          search_query_2: ''
        },
				filterData: [
					{
						title: 'CU',
						key: 'cu.name',
						type: 'string',
						disable: false
					},
					{
						title: 'Tgl. Buat',
						key: 'created_at',
						type: 'datetime',
						disable: false
					},
					{
						title: 'Tgl. Ubah',
						key: 'updated_at',
						type: 'datetime',
						disable: false
					}
				],
				columnData: [
					{
						title: 'No.',
						key: 'No.',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false
					},
					{
						title: 'No. BA',
						key: 'laporancu.no_ba',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'CU',
						key: 'no_ba',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Provinsi',
						key: 'aggregate',
						groupKey: 'cu.provinces.name',
						groupNoKey: '-',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Periode',
						key: 'periode',
						groupKey: 'periode',
						groupNoKey: '-',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Lelaki Biasa',
						key: 'l_biasa',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Lelaki L.Biasa',
						key: 'l_lbiasa',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Perempuan Biasa',
						key: 'p_biasa',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Perempuan L.Biasa',
						key: 'p_lbiasa',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Total Anggota',
						key: 'total_anggota',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Total Anggota Lalu',
						key: 'total_anggota_lalu',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Aset',
						key: 'aset',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Aset Lalu',
						key: 'aset_lalu',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Aset Masalah',
						key: 'aset_masalah',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Aset Tdk Menghasilkan',
						key: 'aset_tidak_menghasilkan',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Aktiva Lancar',
						key: 'aktiva_lancar',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Simp. Saham',
						key: 'simpanan_saham',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Simp. Saham Lalu',
						key: 'simpanan_saham_lalu',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Simp. Saham Des',
						key: 'simpanan_saham_des',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Simp. Nonsaham Unggulan',
						key: 'nonsaham_unggulan',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Simp. Nonsaham Harian',
						key: 'nonsaham_harian',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Hutang SPD',
						key: 'hutang_spd',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Hutang Tdk Berbiaya',
						key: 'hutang_tidak_berbiaya_30hari',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Total Hutang Pihak Ke-3',
						key: 'total_hutang_pihak3',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Piutang Beredar',
						key: 'piutang_beredar',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Piutang Bersih',
						key: 'piutang_bersih',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Piutang Anggota',
						key: 'piutang_anggota',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Piutang Lalai 1-12 Bulan',
						key: 'piutang_lalai_1bulan',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Piutang Lalai > 12 Bulan',
						key: 'piutang_lalai_12bulan',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Rasio Piutang Beredar',
						key: 'rasio_piutang_beredar',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Rasio Piutang Lalai',
						key: 'rasio_piutang_lalai',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'DCR',
						key: 'dcr',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'DCU',
						key: 'dcu',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Iuran Gedung',
						key: 'iuran_gedung',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Donasi',
						key: 'donasi',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'BJS Saham',
						key: 'bjs_saham',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Beban Penyisihan DCR',
						key: 'beban_penyisihan_dcr',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Investasi Likuid',
						key: 'investasi_likuid',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Total Pendapatan',
						key: 'total_pendapatan',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Total Biaya',
						key: 'total_biaya',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'SHU',
						key: 'shu',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'SHU Lalu',
						key: 'shu_lalu',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Rata-rata Aset',
						key: 'rata_aset',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Laju Inflasi',
						key: 'laju_inflasi',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Harga Pasar',
						key: 'harga_pasar',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Tgl. Buat',
						key: 'created_at',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Tgl. Ubah',
						key: 'updated_at',
						sort: true,
						hide: false,
						disable: false
					}
				],
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalButton: ''
			}
		},
		watch: {
			// check route changes
			'$route' (to, from){

				// check current page meta
				this.checkMeta();
			},

			// fetch on selectCU change
			idCU(value){
				if(value !== ''){
					if(this.itemDataStat == 'success'){
						this.checkMeta();
						this.fetch();
					}
				}
			},

			// fetch on load page
			modelCUStat(value){ 
				if(value == 'success'){
					this.checkMeta();
					this.fetch();
				}
			},

			// when updating data
      updateStat(value) {
				this.modalState = value;
				this.modalButton = 'Ok';
				
				if(value === "success"){
					this.modalTitle = this.updateMessage.message;
					this.modalContent = '';
					this.fetch();
				}else if(value === "fail"){
					this.modalContent = this.updateMessage;
				}else{
					this.modalContent = '';
				}
			}
    },
		methods: {
			fetch(){
				if(this.modelCUStat === 'success'){
					if(this.idCU === 'semua'){
						this.$store.dispatch(this.kelas + '/index', this.params);
						this.disableColumnCU(false);
					}else{
						if(this.idCU !== undefined){
							this.$store.dispatch(this.kelas + '/indexCU', [this.params,this.idCU]);
						}
						this.disableColumnCU(true);
					}
				}
			},
			checkMeta(){
				// route from edit and when change cu data selected
				if(this.$route.meta.mode == 'cu'){
					this.resetParams();
					this.$store.dispatch('global/changeIdCU',this.$route.params.cu);
				
				// default route
				}else{
					this.resetParams();
					this.$store.dispatch('global/changeIdCU',this.profile.id_cu);
				}
			},
			disableColumnCU(status){
				this.columnData[2].disable = status;
				this.filterData[1].disable = status;
			},
			kolomAnggota(){

			},
			resetParams(){
				this.params.search_column = 'cu.name';
				this.params.search_query_1 = '';

				this.extSearchColumn = 'cu.name';
				this.extSearchQuery1 = '';
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			ubahData(id, id_cu) {
				this.$router.push({name: this.kelas + 'Edit', params: { id: id }});
			},
			lihatArtikel(id, id_cu){
				this.$store.dispatch('artikelKategori/resetDataStat');
				if(this.profile.id_cu != 0){
					this.$router.push({name: 'artikelFilterKategori', params: { id: id }});
				}else{
					this.$router.push({name: 'artikelFilterKategoriCU', params: { id: id, cu: id_cu }});
				}
			},
			modalConfirmOpen(source, isMobile, itemMobile) {
				this.modalShow = true;
				this.modalState = 'confirm-tutup';
				this.source = source;

				if(isMobile){
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
			}
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('global',{
				idCU: 'idCU'
			}),
			...mapGetters('cu',{
				modelCU: 'dataS',
				modelCUStat: 'dataStatS',
			}),
			...mapGetters('laporanCu',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>