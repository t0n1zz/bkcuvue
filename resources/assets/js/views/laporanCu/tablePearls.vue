<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :source="source" :columnData="columnData" :filterData='filterData' :toolbarButton="4" :itemData="itemData" :itemDataStat="itemDataStat" 
		:params="params"
		@fetch="fetch">

			<!-- desktop -->

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
					'warning' : props.item.periode < selectData && selectedItem.id !== props.item.id && idCU == 'semua' }" class="text-nowrap" @click="selectedRow(props.item)">
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
						<span v-if="props.item.periode < selectData && idCU == 'semua'" class="label label-warning"  v-tooltip:top="'Laporan ini bukanlah laporan periode ' + formatPeriode(selectData)"><i class="icon-alert text-size-base"></i></span>
						&nbsp;
						{{ props.item.periode | dateMonth }}
					</td>
					<td v-if="!columnData[5].hide">
						<div class="media-left media-middle">
							<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.item.p1 >= 1, 'btn-danger': props.item.p1 < 1}" @click.prevent="modelKatexOpen(props.item,'p1')">
								<span class="letter-icon">P1</span>
							</a>
						</div>
						<div class="media-body">
							<span class="display-inline-block text-default text-semibold letter-icon-title">
								<check-value :value="props.item.p1" valueType="percentage"></check-value>
							</span>
							<div class="text-muted text-size-small">
								<span class="status-mark position-left" :class="{'border-blue': props.item.p1 >= 1, 'border-red': props.item.p1 < 1}"></span>
								<span v-if="props.item.p1 >= 1">IDEAL</span>
								<span v-else>TIDAK IDEAL</span>
							</div>
						</div>
					</td>
					<td v-if="!columnData[6].hide">
						<div class="media-left media-middle">
							<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.item.p2 > 0.35, 'btn-danger': props.item.p2 <= 0.35}">
								<span class="letter-icon">P2</span>
							</a>
						</div>
						<div class="media-body">
							<span class="display-inline-block text-default text-semibold letter-icon-title">
								<check-value :value="props.item.p2" valueType="percentage"></check-value>
							</span>
							<div class="text-muted text-size-small">
								<span class="status-mark position-left" :class="{'border-blue': props.item.p2 > 0.35, 'border-red': props.item.p2 <= 0.35}"></span>
								<span v-if="props.item.p2 > 0.35">IDEAL</span>
								<span v-else>TIDAK IDEAL</span>
							</div>
						</div>
					</td>
					<td v-if="!columnData[7].hide">
						<div class="media-left media-middle">
							<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.item.e1 >= 0.7 && props.item.e1 <= 0.8, 'btn-danger': props.item.e1 < 0.7 || props.item.e1 > 0.8}">
								<span class="letter-icon">E1</span>
							</a>
						</div>
						<div class="media-body">
							<span class="display-inline-block text-default text-semibold letter-icon-title">
								<check-value :value="props.item.e1" valueType="percentage"></check-value>
							</span>
							<div class="text-muted text-size-small">
								<span class="status-mark border-blue position-left" :class="{'border-blue': props.item.e1 >= 0.7 && props.item.e1 <= 0.8, 'border-red': props.item.e1 < 0.7 || props.item.e1 > 0.8,}"></span>
								<span v-if="props.item.e1 >= 0.7 && props.item.e1 <= 0.8">IDEAL</span>
								<span v-else>TIDAK IDEAL</span>
							</div>
						</div>
					</td>
					<td v-if="!columnData[8].hide">
						<div class="media-left media-middle">
							<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.item.e5 >= 0.7 && props.item.e5 <= 0.8, 'btn-danger': props.item.e5 < 0.7 || props.item.e5 > 0.8}">
								<span class="letter-icon">E5</span>
							</a>
						</div>
						<div class="media-body">
							<span class="display-inline-block text-default text-semibold letter-icon-title">
								<check-value :value="props.item.e5" valueType="percentage"></check-value>
							</span>
							<div class="text-muted text-size-small">
								<span class="status-mark position-left" :class="{'border-blue': props.item.e5 >= 0.7 && props.item.e5 <= 0.8, 'border-red': props.item.e5 < 0.7 || props.item.e5 > 0.8,}"></span>
								<span v-if="props.item.e5 >= 0.7 && props.item.e5 <= 0.8">IDEAL</span>
								<span v-else>TIDAK IDEAL</span>
							</div>
						</div>
					</td>
					<td v-if="!columnData[9].hide">
						<div class="media-left media-middle">
							<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.item.e6 <= 0.05, 'btn-danger': props.item.e6 > 0.05}">
								<span class="letter-icon">E6</span>
							</a>
						</div>
						<div class="media-body">
							<span class="display-inline-block text-default text-semibold letter-icon-title">
								<check-value :value="props.item.e6" valueType="percentage"></check-value>
							</span>
							<div class="text-muted text-size-small">
								<span class="status-mark position-left" :class="{'border-blue': props.item.e6 <= 0.05, 'border-red': props.item.e6 > 0.05}"></span>
								<span v-if="props.item.e6 <= 0.05">IDEAL</span>
								<span v-else>TIDAK IDEAL</span>
							</div>
						</div>
					</td>
					<td v-if="!columnData[10].hide">
						<div class="media-left media-middle">
							<a class="btn btn-rounded btn-icon btn-xs" :class="{'btn-primary': props.item.e9 >= 0.1, 'btn-danger': props.item.e9 < 0.1}">
								<span class="letter-icon">E6</span>
							</a>
						</div>
						<div class="media-body">
							<span class="display-inline-block text-default text-semibold letter-icon-title">
								<check-value :value="props.item.e9" valueType="percentage"></check-value>
							</span>
							<div class="text-muted text-size-small">
								<span class="status-mark position-left" :class="{'border-blue': props.item.e9 >= 0.1, 'border-red': props.item.e9 < 0.1}"></span>
								<span v-if="props.item.e9 >= 0.1">IDEAL</span>
								<span v-else>TIDAK IDEAL</span>
							</div>
						</div>
					</td>
					<td v-if="!columnData[11].hide">
						<check-value :value="props.item.a1" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[12].hide">
						<check-value :value="props.item.a2" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[13].hide">
						<check-value :value="props.item.r7" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[14].hide">
						<check-value :value="props.item.l1" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[15].hide">
						<check-value :value="props.item.s10" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[16].hide">
						<check-value :value="props.item.s11" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[17].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[18].hide">
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
								<td><check-value :value="props.item.p1"
								valueType="percentage" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[6].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[6].title}}</b></td>
								<td><check-value :value="props.item.p2"
								valueType="percentage" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[7].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[7].title}}</b></td>
								<td><check-value :value="props.item.e1"
								valueType="percentage" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[8].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[8].title}}</b></td>
								<td><check-value :value="props.item.e5"
								valueType="percentage" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[9].hide">
								<td><b>{{columnData[9].title}}</b></td>
								<td><check-value :value="props.item.e6"
								valueType="percentage" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[10].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[10].title}}</b></td>
								<td><check-value :value="props.item.e9"
								valueType="percentage" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[11].hide">
								<td><b>{{columnData[11].title}}</b></td>
								<td><check-value :value="props.item.a1"
								valueType="percentage" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[12].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[12].title}}</b></td>
								<td><check-value :value="props.item.a2"
								valueType="percentage" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[13].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[13].title}}</b></td>
								<td><check-value :value="props.item.r7"
								valueType="percentage" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[14].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[14].title}}</b></td>
								<td><check-value :value="props.item.l1"
								valueType="percentage" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[15].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[15].title}}</b></td>
								<td><check-value :value="props.item.s10"
								valueType="percentage" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[16].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[16].title}}</b></td>
								<td><check-value :value="props.item.s11"
								valueType="percentage" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[17].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[17].title}}</b></td>
								<td>
									: <span v-html="$options.filters.dateTime(props.item.created_at)"></span>
								</td>
							</tr>
							<tr v-if="!columnData[18].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[18].title}}</b></td>
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
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :size="modalSize" :color="modalColor" :button="modalButton" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
			<template slot="modal-title">{{ modalTitle }}</template>

			<template slot="modal-body1">
				<form-katex 
					:modalKatex="modalKatex"
					@tutup="modalTutup"></form-katex>
			</template>

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
	import formKatex from './formKatex.vue';

	export default {
		components: {
			DataViewer,
			appModal,
			checkValue,
			collapseButton,
			formKatex
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
						disable: false,
						isChart: false
					},
					{
						title: 'CU',
						key: 'cu_name',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						isChart: false
					},
					{
						title: 'No. BA',
						key: 'laporancu.no_ba',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						isChart: false
					},
					{
						title: 'Provinsi',
						key: 'provinces_name',
						groupKey: 'provinces_name',
						groupNoKey: '-',
						sort: true,
						hide: false,
						disable: false,
						isChart: false
					},
					{
						title: 'Periode',
						key: 'periode',
						groupKey: 'periode',
						groupNoKey: '-',
						sort: true,
						hide: false,
						disable: false,
						isChart: false
					},
					{
						title: 'P1 (= 100%)',
						key: 'p1',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false
					},
					{
						title: 'P2 (&gt; 100%)',
						key: 'p2',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false
					},
					{
						title: 'E1 (70% - 80%)',
						key: 'e1',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false
					},
					{
						title: 'E5 (70% - 80%)',
						key: 'e5',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false
					},
					{
						title: 'E6 (&le; 5%)',
						key: 'e6',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: true
					},
					{
						title: 'E9 (&ge; 10%)',
						key: 'e9',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false
					},
					{
						title: 'A1 (&le; 5%)',
						key: 'a1',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false
					},
					{
						title: 'A2 (&lt; 5%)',
						key: 'a2',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false
					},
					{
						title: 'R7 (= harga pasar)',
						key: 'r7',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false
					},
					{
						title: 'L1 (15% - 20%)',
						key: 'l1',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false
					},
					{
						title: 'S10 (&gt; 12%)',
						key: 's10',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false
					},
					{
						title: 'S11 (&gt; 10% + Laju Inflasi)',
						key: 's11',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false
					},
					{
						title: 'Tgl. Buat',
						key: 'created_at',
						sort: true,
						hide: false,
						disable: false,
						isChart: false
					},
					{
						title: 'Tgl. Ubah',
						key: 'updated_at',
						sort: true,
						hide: false,
						disable: false,
						isChart: false
					}
				],
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalSize: '',
				modalColor: '',
				modalButton: '',
				modalKatex: {
					id: '',
					no_ba: '',
					periode: '',
					section: '',
					katex1:[],
					katex2:[],
					form: [],
					indikator: '',
					isUbah: false
				}
			}
		},
		created(){
			// this.$store.dispatch(this.kelas + '/addColumnData', this.columnData);
		},
		watch: {
			// check route changes
			'$route' (to, from){

				// check current page meta
				this.checkMeta();
				this.fetch();
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

						// if route is periode
						if(this.$route.meta.mode == 'periode'){
							this.$store.dispatch(this.kelas + '/indexPearlsPeriode', [this.params,this.$route.params.periode]);

						// default route	
						}else{
							this.$store.dispatch(this.kelas + '/indexPearls', this.params);
						}
						
						this.$store.dispatch(this.kelas + '/getPeriode');
						this.disableColumnCU(false);
					}else{
						if(this.idCU !== undefined){
							this.$store.dispatch(this.kelas + '/indexPearlsCU', [this.params,this.idCU]);
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

				// default route and periode route
				}else{
					this.resetParams();
					this.$store.dispatch('global/changeIdCU','semua');
				}
			},
			disableColumnCU(status){
				this.columnData[1].disable = status;
				this.columnData[2].disable = status;
				this.columnData[3].disable = status;
				this.filterData[1].disable = status;
				this.filterData[2].disable = status;
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
			modelKatexOpen(itemData, type){
				this.modalSize = 'modal-lg';
				this.modalColor = 'bg-primary';
				this.modalShow = true;
				this.modalState = 'normal1'; 

				this.modalKatex.id = itemData.id;
				this.modalKatex.no_ba = itemData.no_ba;
				this.modalKatex.periode = itemData.periode;
				this.modalKatex.section = 'CU ' + itemData.cu_name + ' ' + this.formatPeriode(itemData.periode);

				if(type == 'p1'){
					this.modalTitle = 'P1 - Provisi Pinjaman Lalai Di Atas 12 Bulan';

					this.modalKatex.form.push(
						{title:'Cadangan Resiko',key:'dcr',value:itemData.dcr},
						{title:'Piutang Lalai Di Atas 12 Bulan',key:'piutang_lalai_12bulan',value:itemData.piutang_lalai_12bulan},
					);
					
					this.modalKatex.indikator = '100% provisi tersedia untuk pinjaman lalai di atas 12 bulan dan setiap triwulan dilakukan charge off secara konsisten.';

					let katex1Content1 = '\\text{P1} = \\dfrac{\\text{'+ this.modalKatex.form[0].title +'}}{\\text{'+ this.modalKatex.form[1].title +'}} \\times \\text{100} \\% = \\text{100} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{P1} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'}}{'+ this.formatCurrency(this.modalKatex.form[1].value) +'} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.p1) +' \\% (\\text{'+ (itemData.p1 >=1 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});
				}
				
			},	
			modalKatexReset(){
				this.modalKatex.isUbah = false;
				this.modalKatex.katex1 = [];
				this.modalKatex.katex2 = [];
				this.modalKatex.form = [];
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
				this.modalSize = '';
				this.modalShow = false;
				this.modalKatexReset(); //reset modal katex
				this.$store.dispatch(this.kelas + '/resetUpdateStat');
			},
			modalConfirmOk() {
				if (this.source == 'hapus') {
					this.$store.dispatch(this.kelas + '/destroy', this.selectedItem.id);
				}
				this.modalSize = '';
			},
			formatPeriode(value){
				return Vue.filter('dateMonth')(value);
			},
			formatCurrency(value){
				return this.$options.filters.currency(value,'',0,{ thousandsSeparator: '.'});
			},
			formatPercentage(value){
				return Vue.filter('percentage2')(value,2);
			}
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('global',{
				idCU: 'idCU',
				selectData: 'data'
			}),
			...mapGetters('cu',{
				modelCU: 'dataS',
				modelCUStat: 'dataStatS',
			}),
			...mapGetters('laporanCu',{
				itemData: 'pearls',
				itemDataStat: 'pearlsStat',
				periodeData: 'periode',
				periodeStat: 'periodeStat',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>