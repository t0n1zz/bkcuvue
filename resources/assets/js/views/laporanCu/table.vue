<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :source="source" :columnData="columnData" :toolbarButton="4" :itemData="itemData" :itemDataStat="itemDataStat" 
		:params="params"
		@fetch="fetch">

			<!-- desktop -->
			<!-- button desktop -->
			<template slot="button-kolom">
				<button type="button" class="btn btn-default btn-icon" v-tooltip:top="'Kolom Anggota'" :disabled="itemDataStat === 'loading'" @click.prevent="columnGroup('anggota')">
					Anggota
				</button>
				<button type="button" class="btn btn-default btn-icon" v-tooltip:top="'Kolom Aset'" :disabled="itemDataStat === 'loading'" @click.prevent="columnGroup('aset')">
					Aset
				</button>
				<button type="button" class="btn btn-default btn-icon" v-tooltip:top="'Kolom SHU'" :disabled="itemDataStat === 'loading'" @click.prevent="columnGroup('shu')">
					SHU
				</button>
				<button type="button" class="btn btn-default btn-icon" v-tooltip:top="'Kolom Piutang'" :disabled="itemDataStat === 'loading'" @click.prevent="columnGroup('piutang')">
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

			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 
					'info': selectedItem.id === props.item.id, 
					'warning' : props.item.periode < selectData && selectedItem.id !== props.item.id && idCu == 'semua' }" class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide && !columnData[2].disable">
						<check-value :value="props.item.cu_name"></check-value>
					</td>
					<td v-if="!columnData[2].hide && !columnData[2].disable">
						<check-value :value="props.item.no_ba"></check-value>
					</td>
					<td v-if="!columnData[3].hide && !columnData[3].disable">
						<check-value :value="props.item.provinces_name"></check-value>
					</td>
					<td v-if="!columnData[4].hide">
						<span v-if="props.item.periode < selectData && idCu == 'semua'" class="label label-warning"  v-tooltip:top="'Laporan ini bukanlah laporan periode ' + formatPeriode(selectData)"><i class="icon-alert text-size-base"></i></span>
						&nbsp;
						{{ props.item.periode | dateMonth }}
					</td>
					<td v-if="!columnData[5].hide && !columnData[5].disable">
						<check-value :value="props.item.tp"></check-value>
					</td>
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
						<check-value :value="props.item.rasio_beredar" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[30].hide">
						<check-value :value="props.item.rasio_lalai" valueType="percentage"></check-value>
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
								<td colspan="2" class="text-center bg-primary-300"><b>{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page}}</b></td>
							</tr>
							<tr v-if="!columnData[1].hide">
								<td><b>{{columnData[1].title}}</b></td>
								<td><check-value :value="props.item.cu_name" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[2].hide">
								<td><b>{{columnData[2].title}}</b></td>
								<td><check-value :value="props.item.no_ba" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[3].hide">
								<td><b>{{columnData[3].title}}</b></td>
								<td><check-value :value="props.item.provinces_name" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[4].hide">
								<td><b>{{columnData[4].title}}</b></td>
								<td>
									<check-value :value="formatPeriode(props.item.perode)" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[5].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[5].title}}</b></td>
								<td><check-value :value="props.item.l_biasa"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[6].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[6].title}}</b></td>
								<td><check-value :value="props.item.l_lbiasa"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[7].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[7].title}}</b></td>
								<td><check-value :value="props.item.p_biasa"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[8].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[8].title}}</b></td>
								<td><check-value :value="props.item.p_lbiasa"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[9].hide">
								<td><b>{{columnData[9].title}}</b></td>
								<td><check-value :value="props.item.total_anggota"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[10].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[10].title}}</b></td>
								<td><check-value :value="props.item.total_anggota_lalu"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[11].hide">
								<td><b>{{columnData[11].title}}</b></td>
								<td><check-value :value="props.item.aset"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[12].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[12].title}}</b></td>
								<td><check-value :value="props.item.aset_lalu"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[13].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[13].title}}</b></td>
								<td><check-value :value="props.item.aset_masalah"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[14].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[14].title}}</b></td>
								<td><check-value :value="props.item.aset_tidak_menghasilkan"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[15].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[15].title}}</b></td>
								<td><check-value :value="props.item.aktiva_lancar"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[16].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[16].title}}</b></td>
								<td><check-value :value="props.item.simpanan_saham"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[17].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[17].title}}</b></td>
								<td><check-value :value="props.item.simpanan_saham_lalu"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[18].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[18].title}}</b></td>
								<td><check-value :value="props.item.simpanan_saham_des"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[19].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[19].title}}</b></td>
								<td><check-value :value="props.item.nonsaham_unggulan"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[20].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[20].title}}</b></td>
								<td><check-value :value="props.item.nonsaham_harian"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[21].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[21].title}}</b></td>
								<td><check-value :value="props.item.hutang_spd"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[22].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[22].title}}</b></td>
								<td><check-value :value="props.item.hutang_tidak_berbiaya_30hari"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[23].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[23].title}}</b></td>
								<td><check-value :value="props.item.total_hutang_pihak3"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[24].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[24].title}}</b></td>
								<td><check-value :value="props.item.piutang_beredar"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[25].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[25].title}}</b></td>
								<td><check-value :value="props.item.piutang_bersih"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[26].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[26].title}}</b></td>
								<td><check-value :value="props.item.piutang_anggota"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[27].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[27].title}}</b></td>
								<td><check-value :value="props.item.piutang_lalai_1bulan"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[28].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[28].title}}</b></td>
								<td><check-value :value="props.item.piutang_lalai_12bulan"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[29].hide">
								<td><b>{{columnData[29].title}}</b></td>
								<td><check-value :value="props.item.rasio_piutang_beredar"
								valueType="percentage" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[30].hide">
								<td><b>{{columnData[30].title}}</b></td>
								<td><check-value :value="props.item.rasio_piutang_lalai"
								valueType="percentage" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[31].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[31].title}}</b></td>
								<td><check-value :value="props.item.dcr"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[32].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[32].title}}</b></td>
								<td><check-value :value="props.item.dcu"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[33].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[33].title}}</b></td>
								<td><check-value :value="props.item.iuran_gedung"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[34].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[34].title}}</b></td>
								<td><check-value :value="props.item.donasi"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[35].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[35].title}}</b></td>
								<td><check-value :value="props.item.bjs_saham"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[36].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[36].title}}</b></td>
								<td><check-value :value="props.item.beban_penyisihan_dcr"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[37].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[37].title}}</b></td>
								<td><check-value :value="props.item.investasi_likuid"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[38].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[38].title}}</b></td>
								<td><check-value :value="props.item.total_pendapatan"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[39].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[39].title}}</b></td>
								<td><check-value :value="props.item.total_biaya"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[40].hide">
								<td><b>{{columnData[40].title}}</b></td>
								<td><check-value :value="props.item.shu"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[41].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[41].title}}</b></td>
								<td><check-value :value="props.item.shu_lalu"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[42].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[42].title}}</b></td>
								<td><check-value :value="props.item.rata_aset"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[43].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[43].title}}</b></td>
								<td><check-value :value="props.item.laju_inflasi"
								valueType="currency" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[44].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[44].title}}</b></td>
								<td><check-value :value="props.item.harga_pasar"
								valueType="percentage" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[45].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[45].title}}</b></td>
								<td>
									: <span v-html="$options.filters.dateTime(props.item.created_at)"></span>
								</td>
							</tr>
							<tr v-if="!columnData[46].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[46].title}}</b></td>
								<td>
									: <span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<collapse-button :id="props.item.id"></collapse-button>
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
	import Vue from 'vue';
	import { mapGetters } from 'vuex';
	import DataViewer from '../../components/dataviewer.vue';
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
		props:['title','kelas'],
		data() {
			return {
				source: '',
				selectedItem: [],
				params: {
          column: 'periode',
          direction: 'desc',
          per_page: 50,
          page: 1,
          search_column: 'cu.name',
          search_operator: 'like',
          search_query_1: '',
          search_query_2: ''
				},
				columnData: [
					{
						title: 'No.',
						key: 'No.',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						isChart: false,
						columnGroup: 'all'
					},
					{
						title: 'CU',
						key: 'cu_name',
						excelType: 'string',
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
						title: 'No. BA',
						key: 'laporan_cu.no_ba',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						isChart: false,
						columnGroup: 'all',
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Provinsi',
						key: 'provinces_name',
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
						key: 'periode',
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
						key: 'tp',
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
						key: 'l_biasa',
						excelType: 'number',
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
						key: 'l_lbiasa',
						excelType: 'number',
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
						key: 'p_biasa',
						excelType: 'number',
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
						key: 'p_lbiasa',
						excelType: 'number',
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
						key: 'total_anggota',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: true,
						columnGroup: 'anggota'
					},
					{
						title: 'Total Anggota Lalu',
						key: 'total_anggota_lalu',
						excelType: 'number',
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
						key: 'aset',
						excelType: 'number',
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
						key: 'aset_lalu',
						excelType: 'number',
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
						key: 'aset_masalah',
						excelType: 'number',
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
						key: 'aset_tidak_menghasilkan',
						excelType: 'number',
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
						key: 'aktiva_lancar',
						excelType: 'number',
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
						key: 'simpanan_saham',
						excelType: 'number',
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
						key: 'simpanan_saham_lalu',
						excelType: 'number',
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
						key: 'simpanan_saham_des',
						excelType: 'number',
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
						key: 'nonsaham_unggulan',
						excelType: 'number',
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
						key: 'nonsaham_harian',
						excelType: 'number',
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
						key: 'hutang_spd',
						excelType: 'number',
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
						key: 'hutang_tidak_berbiaya_30hari',
						excelType: 'number',
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
						key: 'total_hutang_pihak3',
						excelType: 'number',
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
						key: 'piutang_beredar',
						excelType: 'number',
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
						key: 'piutang_bersih',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false,
						columnGroup: 'piutang'
					},
					{
						title: 'Piutang Anggota',
						key: 'piutang_anggota',
						excelType: 'number',
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
						key: 'piutang_lalai_1bulan',
						excelType: 'number',
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
						key: 'piutang_lalai_12bulan',
						excelType: 'number',
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
						key: 'rasio_beredar',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false,
						columnGroup: 'piutang'
					},
					{
						title: 'Rasio Piutang Lalai',
						key: 'rasio_lalai',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false,
						columnGroup: 'piutang'
					},
					{
						title: 'DCR',
						key: 'dcr',
						excelType: 'number',
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
						key: 'dcu',
						excelType: 'number',
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
						key: 'iuran_gedung',
						excelType: 'number',
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
						key: 'donasi',
						excelType: 'number',
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
						key: 'bjs_saham',
						excelType: 'number',
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
						key: 'beban_penyisihan_dcr',
						excelType: 'number',
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
						key: 'investasi_likuid',
						excelType: 'number',
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
						key: 'total_pendapatan',
						excelType: 'number',
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
						key: 'total_biaya',
						excelType: 'number',
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
						key: 'shu',
						excelType: 'number',
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
						key: 'shu_lalu',
						excelType: 'number',
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
						key: 'rata_aset',
						excelType: 'number',
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
						key: 'laju_inflasi',
						excelType: 'number',
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
						key: 'harga_pasar',
						excelType: 'number',
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
						key: 'created_at',
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
						key: 'updated_at',
						sort: true,
						hide: false,
						disable: false,
						isChart: false,
						columnGroup: 'all',
						filter: true,
						filterType: 'datetime'
					}
				],
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalButton: '',
			}
		},
		created(){
			this.$store.dispatch(this.kelas + '/addColumnData', this.columnData);
		},
		watch: {
			// check route changes
			'$route' (to, from){
				// check current page meta
				this.checkMeta();
				this.fetch();
			},

			// fetch on selectCU change
			idCu(value){
				if(value !== ''){
					if(this.itemDataStat == 'success'){
						this.checkMeta();
						this.fetch();
					}
				}
			},

			// fetch on selectTp change
			idTp(value){
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

			// fetch on load page
			modelTpStat(value){ 
				if(value == 'success'){
					this.checkMeta();
					this.fetch();
				}
			},

			// if route is semua laporan
			periodeStat(value){
				if(value == 'success'){
					if(this.$route.meta.mode == 'periode'){
						this.$store.dispatch('global/changeData', this.$route.params.periode);
					}else{
						this.$store.dispatch('global/changeData', this.periodeData[0].periode);
					}
				}
			},

			itemDataStat(value){
				this.isFirstLoad = false;
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
					if(this.idCu === 'semua'){
						// if route is periode
						if(this.$route.meta.mode == 'periode'){
							this.$store.dispatch(this.kelas + '/indexPeriode', [this.params,this.$route.params.periode]);

						// default route	
						}else{
							this.$store.dispatch(this.kelas + '/index', this.params);
						}
						this.$store.dispatch(this.kelas + '/getPeriode');
						this.disableColumnCU(false);
						this.disableColumnTp(false);
					}else{
						if(this.idCu !== undefined){
							if(this.idTp !== undefined){

								// konsolidasi
								if(this.idTp == 'semua'){
									this.$store.dispatch(this.kelas + '/indexCu', [this.params,this.idCu]);
									this.disableColumnTp(false);
								// tp
								}else{
									this.$store.dispatch(this.kelas + '/indexTp', [this.params,this.idTp]);
									this.disableColumnTp(true);
								}
							}
						}
						this.disableColumnCU(true);
					}
				}
			},
			checkMeta(){
				// route from edit and when change cu data selected
				if(this.$route.meta.mode == 'cu'){
					this.$store.dispatch('global/changeIdCu',this.$route.params.cu);
					this.$store.dispatch('global/changeIdTp','semua');

				// route from edit and when change tp cu data selected
				}else if(this.$route.meta.mode == 'tp'){
					this.$store.dispatch('global/changeIdCu',this.$route.params.cu);
					this.$store.dispatch('global/changeIdTp',this.$route.params.tp);
				// default route and periode route
				}else{
					this.$store.dispatch('global/changeIdCu','semua');
				}
			},
			disableColumnCU(status){
				this.columnData[1].disable = status;
				this.columnData[2].disable = status;
				this.columnData[3].disable = status;
			},
			disableColumnTp(status){
				this.columnData[5].disable = status;
			},
			columnGroup(value){
				for (let i = 0, len = this.columnData.length ; i < len; i++){
					if(this.columnData[i].columnGroup == value || this.columnData[i].columnGroup == 'all'){
						this.columnData[i].hide = false;
					}else{
						this.columnData[i].hide = true;
					}
				}
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			ubahData(id, id_cu) {
				this.$router.push({name: this.kelas + 'Edit', params: { id: id }});
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
			},
			formatPeriode(value){
				return Vue.filter('dateMonth')(value);
			}
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('global',{
				idCu: 'idCu',
				idTp: 'idTp',
				selectData: 'data'
			}),
			...mapGetters('cu',{
				modelCU: 'dataS',
				modelCUStat: 'dataStatS',
			}),
			...mapGetters('tp',{
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
			}),
			...mapGetters('laporanCu',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				periodeData: 'periode',
				periodeStat: 'periodeStat',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>