<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :source="source" :columnData="columnData" :toolbarButton="4" :itemData="itemData" :itemDataStat="itemDataStat" 
		:params="params"
		@fetch="fetch">

			<!-- desktop -->
			<!-- button desktop -->
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
					<td v-if="!columnData[5].hide" @click.prevent="modelKatexOpen(props.item,'p1')" style="cursor:pointer;">
						<item-pearls
							:type="'p1'"
							:props="props"
						></item-pearls>
					</td>
					<td v-if="!columnData[6].hide" @click.prevent="modelKatexOpen(props.item,'p2')" style="cursor:pointer;">
						<item-pearls
							:type="'p2'"
							:props="props"
						></item-pearls>
					</td>
					<td v-if="!columnData[7].hide" @click.prevent="modelKatexOpen(props.item,'e1')" style="cursor:pointer;">
						<item-pearls
							:type="'e1'"
							:props="props"
						></item-pearls>
					</td>
					<td v-if="!columnData[8].hide" @click.prevent="modelKatexOpen(props.item,'e5')" style="cursor:pointer;">
						<item-pearls
							:type="'e5'"
							:props="props"
						></item-pearls>
					</td>
					<td v-if="!columnData[9].hide" @click.prevent="modelKatexOpen(props.item,'e6')" style="cursor:pointer;">
						<item-pearls
							:type="'e6'"
							:props="props"
						></item-pearls>
					</td>
					<td v-if="!columnData[10].hide" @click.prevent="modelKatexOpen(props.item,'e9')" style="cursor:pointer;">
						<item-pearls
							:type="'e9'"
							:props="props"
						></item-pearls>
					</td>
					<td v-if="!columnData[11].hide" @click.prevent="modelKatexOpen(props.item,'a1')" style="cursor:pointer;">
						<item-pearls
							:type="'a1'"
							:props="props"
						></item-pearls>
					</td>
					<td v-if="!columnData[12].hide" @click.prevent="modelKatexOpen(props.item,'a2')" style="cursor:pointer;">
						<item-pearls
							:type="'a2'"
							:props="props"
						></item-pearls>
					</td>
					<td v-if="!columnData[13].hide" @click.prevent="modelKatexOpen(props.item,'r7')" style="cursor:pointer;">
						<item-pearls
							:type="'r7'"
							:props="props"
						></item-pearls>	
					</td>
					<td v-if="!columnData[14].hide" @click.prevent="modelKatexOpen(props.item,'l1')" style="cursor:pointer;">
						<item-pearls
							:type="'l1'"
							:props="props"
						></item-pearls>
					</td>
					<td v-if="!columnData[15].hide" @click.prevent="modelKatexOpen(props.item,'s10')" style="cursor:pointer;">
						<item-pearls
							:type="'s10'"
							:props="props"
						></item-pearls>
					</td>
					<td v-if="!columnData[16].hide" @click.prevent="modelKatexOpen(props.item,'s11')" style="cursor:pointer;">
						<item-pearls
							:type="'s11'"
							:props="props"
						></item-pearls>
					</td>
					<td v-if="!columnData[17].hide">
						<check-value :value="props.item.harga_pasar/100" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[18].hide">
						<check-value :value="props.item.laju_inflasi/100" valueType="percentage"></check-value>
					</td>
					<td v-if="!columnData[19].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[20].hide">
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
								<td><check-value :value="formatPeriode(props.item.perode)" :frontText="': '"></check-value></td>
							</tr>

							<!-- p1 -->
							<tr v-if="!columnData[5].hide" class="collapse" :class="'collap'+props.item.id">
								<td colspan="2"><b v-html="columnData[5].title"></b></td>
							</tr>
							<tr v-if="!columnData[5].hide" class="collapse" :class="'collap'+props.item.id" @click.prevent="modelKatexOpen(props.item,'p1')">
								<td colspan="2">
									<item-pearls
										:type="'p1'"
										:props="props"
									></item-pearls>
								</td>
							</tr>

							<!-- p2 -->
							<tr v-if="!columnData[6].hide" class="collapse" :class="'collap'+props.item.id">
								<td colspan="2"><b v-html="columnData[6].title"></b></td>
							</tr>
							<tr v-if="!columnData[6].hide" class="collapse" :class="'collap'+props.item.id" @click.prevent="modelKatexOpen(props.item,'p2')">
								<td colspan="2">
									<item-pearls
										:type="'p2'"
										:props="props"
									></item-pearls>
								</td>
							</tr>

							<!-- e1 -->
							<tr v-if="!columnData[7].hide" class="collapse" :class="'collap'+props.item.id">
								<td colspan="2"><b v-html="columnData[7].title"></b></td>
							</tr>
							<tr v-if="!columnData[7].hide" class="collapse" :class="'collap'+props.item.id" @click.prevent="modelKatexOpen(props.item,'e1')">
								<td colspan="2">
									<item-pearls
										:type="'e1'"
										:props="props"
									></item-pearls>
								</td>
							</tr>

							<!-- e5 -->
							<tr v-if="!columnData[8].hide" class="collapse" :class="'collap'+props.item.id">
								<td colspan="2"><b v-html="columnData[8].title"></b></td>
							</tr>
							<tr v-if="!columnData[8].hide" class="collapse" :class="'collap'+props.item.id" @click.prevent="modelKatexOpen(props.item,'e5')">
								<td colspan="2">
									<item-pearls
										:type="'e5'"
										:props="props"
									></item-pearls>
								</td>
							</tr>

							<!-- e6 -->
							<tr v-if="!columnData[9].hide" class="collapse" :class="'collap'+props.item.id">
								<td colspan="2"><b v-html="columnData[9].title"></b></td>
							</tr>
							<tr v-if="!columnData[9].hide" class="collapse" :class="'collap'+props.item.id" @click.prevent="modelKatexOpen(props.item,'e6')">
								<td colspan="2">
									<item-pearls
										:type="'e6'"
										:props="props"
									></item-pearls>
								</td>
							</tr>

							<!-- e9 -->
							<tr v-if="!columnData[10].hide" class="collapse" :class="'collap'+props.item.id">
								<td colspan="2"><b v-html="columnData[10].title"></b></td>
							</tr>
							<tr v-if="!columnData[10].hide" class="collapse" :class="'collap'+props.item.id" @click.prevent="modelKatexOpen(props.item,'e9')">
								<td colspan="2">
									<item-pearls
										:type="'e9'"
										:props="props"
									></item-pearls>
								</td>
							</tr>

							<!--a1 -->
							<tr v-if="!columnData[11].hide" class="collapse" :class="'collap'+props.item.id">
								<td colspan="2"><b v-html="columnData[11].title"></b></td>
							</tr>
							<tr v-if="!columnData[11].hide" class="collapse" :class="'collap'+props.item.id" @click.prevent="modelKatexOpen(props.item,'a1')">
								<td colspan="2">
									<item-pearls
										:type="'a1'"
										:props="props"
									></item-pearls>
								</td>
							</tr>

							<!--a2 -->
							<tr v-if="!columnData[12].hide" class="collapse" :class="'collap'+props.item.id">
								<td colspan="2"><b v-html="columnData[12].title"></b></td>
							</tr>
							<tr v-if="!columnData[12].hide" class="collapse" :class="'collap'+props.item.id" @click.prevent="modelKatexOpen(props.item,'a2')">
								<td colspan="2">
									<item-pearls
										:type="'a2'"
										:props="props"
									></item-pearls>
								</td>
							</tr>

							<!--r7 -->
							<tr v-if="!columnData[13].hide" class="collapse" :class="'collap'+props.item.id">
								<td colspan="2"><b v-html="columnData[13].title"></b></td>
							</tr>
							<tr v-if="!columnData[13].hide" class="collapse" :class="'collap'+props.item.id" @click.prevent="modelKatexOpen(props.item,'r7')">
								<td colspan="2">
									<item-pearls
										:type="'r7'"
										:props="props"
									></item-pearls>
								</td>
							</tr>

							<!--l1 -->
							<tr v-if="!columnData[14].hide" class="collapse" :class="'collap'+props.item.id">
								<td colspan="2"><b v-html="columnData[14].title"></b></td>
							</tr>
							<tr v-if="!columnData[14].hide" class="collapse" :class="'collap'+props.item.id" @click.prevent="modelKatexOpen(props.item,'l1')">
								<td colspan="2">
									<item-pearls
										:type="'l1'"
										:props="props"
									></item-pearls>
								</td>
							</tr>

							<!--s10 -->
							<tr v-if="!columnData[15].hide" class="collapse" :class="'collap'+props.item.id">
								<td colspan="2"><b v-html="columnData[15].title"></b></td>
							</tr>
							<tr v-if="!columnData[15].hide" class="collapse" :class="'collap'+props.item.id" @click.prevent="modelKatexOpen(props.item,'s10')">
								<td colspan="2">
									<item-pearls
										:type="'s10'"
										:props="props"
									></item-pearls>
								</td>
							</tr>

							<!--s11 -->
							<tr v-if="!columnData[16].hide" class="collapse" :class="'collap'+props.item.id">
								<td colspan="2"><b v-html="columnData[16].title"></b></td>
							</tr>
							<tr v-if="!columnData[16].hide" class="collapse" :class="'collap'+props.item.id" @click.prevent="modelKatexOpen(props.item,'s11')">
								<td colspan="2">
									<item-pearls
										:type="'s11'"
										:props="props"
									></item-pearls>
								</td>
							</tr>

							<tr v-if="!columnData[17].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[17].title}}</b></td>
								<td><check-value :value="props.item.harga_pasar/100" valueType="percentage"></check-value></td>
							</tr>
							<tr v-if="!columnData[18].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[18].title}}</b></td>
								<td><check-value :value="props.item.laju_inflasi/100" valueType="percentage"></check-value></td>
							</tr>
							<tr v-if="!columnData[19].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[19].title}}</b></td>
								<td>
									: <span v-html="$options.filters.dateTime(props.item.created_at)"></span>
								</td>
							</tr>
							<tr v-if="!columnData[20].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[20].title}}</b></td>
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
					:kelas="kelas"
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
	import itemPearls from './itemPearls.vue';

	export default {
		components: {
			DataViewer,
			appModal,
			checkValue,
			collapseButton,
			formKatex,
			itemPearls
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
          search_column: 'periode',
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
						isChart: false
					},
					{
						title: 'CU',
						key: 'cu_name',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						isChart: false,
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
						filter: true,
						filterType: 'number'
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
						isChart: false,
						filter: true,
						filterType: 'date'
					},
					{
						title: 'P1 (= 100%)',
						key: 'p1',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false,
					},
					{
						title: 'P2 (&gt; 100%)',
						key: 'p2',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false,
					},
					{
						title: 'E1 (70% - 80%)',
						key: 'e1',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false,
					},
					{
						title: 'E5 (70% - 80%)',
						key: 'e5',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false,
					},
					{
						title: 'E6 (&le; 5%)',
						key: 'e6',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: true,
					},
					{
						title: 'E9 (&ge; 10%)',
						key: 'e9',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false,
					},
					{
						title: 'A1 (&le; 5%)',
						key: 'a1',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false,
					},
					{
						title: 'A2 (&lt; 5%)',
						key: 'a2',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false,
					},
					{
						title: 'R7 (= harga pasar)',
						key: 'r7',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false,
					},
					{
						title: 'L1 (15% - 20%)',
						key: 'l1',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false,
					},
					{
						title: 'S10 (&gt; 12%)',
						key: 's10',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false,
					},
					{
						title: 'S11 (&gt; 10% + Laju Inflasi)',
						key: 's11',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						isChart: true,
						isChartSelect: false,
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
					},
					{
						title: 'Tgl. Buat',
						key: 'created_at',
						sort: true,
						hide: false,
						disable: false,
						isChart: false,
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
						filter: true,
						filterType: 'datetime'
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
				},
				isFirstLoad: true,
			}
		},
		created(){
			this.fetch();
		},
		watch: {
			// check route changes
			'$route' (to, from){
				this.fetch();
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
				if(this.$route.meta.mode == 'periode'){
					this.disableColumnCU(false);
					this.disableColumnTp(false);

					this.$store.dispatch(this.kelas + '/indexPearlsPeriode', [this.params,this.$route.params.periode]);

				// default route	
				}else if(this.$route.meta.mode == 'cu'){
					this.disableColumnCU(true);
					if(this.$route.params.tp == 'semua'){
						this.disableColumnTp(false);

						this.$store.dispatch(this.kelas + '/indexPearlsCu', [this.params,this.$route.params.cu]);
					}else{
						this.disableColumnTp(true);

						this.$store.dispatch(this.kelas + '/indexPearlsTp', [this.params,this.$route.params.tp]);
					}
				}else{
					this.$store.dispatch(this.kelas + '/indexPearls', this.params);
				}
			},
			disableColumnCU(status){
				this.columnData[1].disable = status;
				this.columnData[2].disable = status;
				this.columnData[3].disable = status;
				
				if(this.isFirstLoad)
					this.checkParams();
			},
			disableColumnTp(status){
				this.columnData[5].disable = status;

				if(this.isFirstLoad)
					this.checkParams();
			},
			checkParams(){
				let a = _.findIndex(this.columnData, {'filter': true,'disable': false });

        if(this.columnData[a].filterKey){
          this.params.search_column = this.columnData[a].filterKey;
        }else{
          this.params.search_column = this.columnData[a].key;
        }
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
				this.modalKatex.section = 'CU ' + itemData.cu_name + ' periode ' + this.formatPeriode(itemData.periode);

				// p1	
				if(type == 'p1'){
					this.modalTitle = 'P1 - Provisi Pinjaman Lalai Di Atas 12 Bulan';

					this.modalKatex.form.push(
						{title:'Cadangan Resiko',key:'dcr',value:itemData.dcr},
						{title:'Piutang Lalai Di Atas 12 Bulan',key:'piutang_lalai_12bulan',value:itemData.piutang_lalai_12bulan},
					);
					
					this.modalKatex.indikator = '100% provisi tersedia untuk pinjaman lalai di atas 12 bulan dan setiap triwulan dilakukan charge off secara konsisten.';

					let katex1Content1 = '\\text{P1} = \\dfrac{\\text{'+ this.modalKatex.form[0].title +'}}{\\text{'+ this.modalKatex.form[1].title +'}} \\times \\text{100} \\% = \\text{100} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{P1} = \\dfrac{'+ this.formatCurrency(this.modalKatex.form[0].value) +'}{\\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.p1) +' \\% (\\text{'+ (itemData.p1 >=1 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});

				// p2
				}else if(type == 'p2'){
					this.modalTitle = 'P2 -  Provisi pinjaman lalai 1 - 12 bulan';

					this.modalKatex.form.push(
						{title:'Cadangan Resiko',key:'dcr',value:itemData.dcr},
						{title:'Piutang Lalai Di Atas 12 Bulan',key:'piutang_lalai_12bulan',value:itemData.piutang_lalai_12bulan},
						{title:'Piutang Lalai 1 - 12 Bulan',key:'piutang_lalai_1bulan',value:itemData.piutang_lalai_1bulan},
					);
					
					this.modalKatex.indikator = '35% provisi tersedia untuk pinjaman lalai 1 – 12 bulan dan setiap triwulan dilakukan charge off dari waktu ke waktu';

					let katex1Content1 = '\\text{P2} = \\dfrac{\\text{Saldo Cadangan Resiko setelah P1}[\\text{'+ this.modalKatex.form[0].title +'} - \\text{'+ this.modalKatex.form[1].title +'}]}{\\text{'+ this.modalKatex.form[2].title +'}} \\times \\text{100} \\% = \\text{Di Atas 35} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{P2} = \\dfrac{'+ this.formatCurrency(this.modalKatex.form[0].value) +' - \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}}{\\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.p2) +' \\% (\\text{'+ (itemData.p2 >=0.35 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});

					if(itemData.p1 >= 1){
						this.modalKatex.katex2.push({title:'',content:katex2Content1});
					}else{
						this.modalKatex.katex2.push({title:'Karena tidak ada saldo cadangan resiko setelah P1, maka P2 (TIDAK IDEAL)',content:katex2Content1});
					}

				// e1
				}else if(type == 'e1'){
					this.modalTitle = 'E1 - Piutang Bersih / Total Aset';

					if(itemData.p1 >= 1 && itemData.p2 > 0.35){
						this.modalKatex.form.push(
							{title:'Piutang Beredar',key:'piutang_beredar',value:itemData.piutang_beredar},
							{title:'Piutang Lalai Di Atas 12 Bulan',key:'piutang_lalai_12bulan',value:itemData.piutang_lalai_12bulan},
							{title:'Piutang Lalai 1 - 12 Bulan',key:'piutang_lalai_1bulan',value:itemData.piutang_lalai_1bulan},
							{title:'Aset',key:'aset',value:itemData.aset},
						);
					}else{
						this.modalKatex.form.push(
							{title:'Piutang Beredar',key:'piutang_beredar',value:itemData.piutang_beredar},
							{title:'Cadangan Resiko',key:'dcr',value:itemData.dcr},
							{title:'Aset',key:'aset',value:itemData.aset},
						);
					}
					
					this.modalKatex.indikator = 'Rasio Piutang Bersih adalah 70% – 80% dari total aset dan portofolio pinjaman beragam dengan setidaknya 5 macam produk pinjaman yang berbeda';

					let katex1Content1 = '\\text{E1} = \\dfrac{\\text{Piutang Beredar} - ((\\text{100} \\% \\times \\text{Piutang Lalai Di Atas 12 Bulan}) + (\\text{35} \\% \\times \\text{Piutang Lalai 1 - 12 Bulan}))}{\\text{Aset}} \\times \\text{100} \\% = \\text{70} \\% \\text{ Sampai } \\text{80} \\% (\\text{IDEAL})';

					let katex1Content2 = '\\text{E1} = \\dfrac{\\text{Piutang Beredar} - \\text{Cadangan Resiko}}{\\text{Aset}} \\times \\text{100} \\% = \\text{70} \\% \\text{ Sampai } \\text{80} \\% (\\text{IDEAL})';

					let katex2Content1 = '';
					let katex2Title1 = '';
					if(itemData.p1 >= 1 && itemData.p2 > 0.35){
						katex2Title1 = 'Dikarenakan P1 dan P2 (IDEAL), maka rumus yang digunakan adalah rumus 1'
						katex2Content1 = '\\text{E1} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'} - ((\\text{100} \\% \\times \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}) + (\\text{35} \\% \\times \\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'}))}{\\text{'+ this.formatCurrency(this.modalKatex.form[3].value)+'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e1) +' \\% (\\text{'+ (itemData.e1 >= 0.7 && itemData.e1 <= 0.8 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					}else{
						katex2Title1 = 'Dikarenakan P1 dan P2 (TIDAK IDEAL), maka rumus yang digunakan adalah rumus 2'
						katex2Content1 = '\\text{E1} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'} - \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}}{\\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e1) +' \\% (\\text{'+ (itemData.e1 >= 0.7 && itemData.e1 <= 0.8 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					}	

					this.modalKatex.katex1.push(
						{title:'Rumus 1 - apabila P1 dan P2 (IDEAL)',content:katex1Content1},
						{title:'Rumus 2 - apabila P1 dan P2 (TIDAK IDEAL)',content:katex1Content2}
					);
					this.modalKatex.katex2.push({title:katex2Title1 ,content:katex2Content1});
				
				// e5
				}else if(type == 'e5'){
					this.modalTitle = 'E5 - Simpanan Non Saham / Total Aset';

					this.modalKatex.form.push(
						{title:'Simpanan Non Saham Unggulan',key:'nonsaham_unggulan',value:itemData.nonsaham_unggulan},
						{title:'Simpanan Non Saham Harian',key:'nonsaham_harian',value:itemData.nonsaham_harian},
						{title:'Aset',key:'aset',value:itemData.aset},
					);
					
					this.modalKatex.indikator = 'Rasio 70% – 80% dari total aset dan memiliki beragam jenis simpanan minimal 5 jenis produk simpanan yang berbeda.';

					let katex1Content1 = '\\text{E5} = \\dfrac{\\text{'+ this.modalKatex.form[0].title +'} + \\text{'+ this.modalKatex.form[1].title +'}}{\\text{'+ this.modalKatex.form[2].title +'}} \\times \\text{100} \\% = \\text{70} \\% \\text{ Sampai } \\text{80} \\%(\\text{IDEAL})';

					let katex2Content1 = '\\text{E5} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}}{\\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e5) +' \\% (\\text{'+ (itemData.e5 >= 0.7 && itemData.e5 <= 0.8 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});
				
				// e6
				}else if(type == 'e6'){
					this.modalTitle = 'E6 - Pinjaman Kepada Pihak Luar Terhadap Total Aset';

					this.modalKatex.form.push(
						{title:'Total Hutang Pihak Ke-3',key:'total_hutang_pihak3',value:itemData.total_hutang_pihak3},
						{title:'Aset',key:'aset',value:itemData.aset},
					);
					
					this.modalKatex.indikator = 'Jumlah pinjaman kepada pihak eksternal 1% – 5% dari total aset.';

					let katex1Content1 = '\\text{E6} = \\dfrac{\\text{'+ this.modalKatex.form[0].title +'}}{\\text{'+ this.modalKatex.form[1].title +'}} \\times \\text{100} \\% = \\text{Kurang Dari Sama Dengan 5} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{E6} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'}}{\\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e6) +' \\% ( \\text{'+ (itemData.e6 <= 0.05 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});

				// e9
				}else if(type == 'e9'){
					this.modalTitle = 'E9 - Modal Lembaga Bersih';

					this.modalKatex.form.push(
						{title:'Cadangan Resiko',key:'dcr',value:itemData.dcr},
						{title:'Cadangan Umum',key:'dcu',value:itemData.dcu},
						{title:'Dana Gedung',key:'dana_gedung',value:itemData.dana_gedung},
						{title:'Donasi',key:'donasi',value:itemData.donasi},
						{title:'SHU Tahun Lalu',key:'shu_lalu',value:itemData.shu_lalu},
						{title:'Piutang Lalai Di Atas 12 Bulan',key:'piutang_lalai_12bulan',value:itemData.piutang_lalai_12bulan},
						{title:'Piutang Lalai 1 - 12 Bulan',key:'piutang_lalai_1bulan',value:itemData.piutang_lalai_1bulan},
						{title:'Aset Bermasalah',key:'aset_masalah',value:itemData.aset_masalah},
						{title:'Aset',key:'aset',value:itemData.aset},
					);
					
					this.modalKatex.indikator = 'Modal lembaga bersih sebesar 10% dari total aset.';

					let katex1Content1 = '\\text{E9} = \\dfrac{(\\text{'+ this.modalKatex.form[0].title +'} + \\text{'+ this.modalKatex.form[1].title +'} + \\text{'+ this.modalKatex.form[2].title +'} + \\text{'+ this.modalKatex.form[3].title +'} + \\text{'+ this.modalKatex.form[4].title +'}) - ((\\text{100} \\% \\times \\text{'+ this.modalKatex.form[5].title +'}) + (\\text{35} \\% \\times \\text{'+ this.modalKatex.form[6].title +'}) + \\text{'+ this.modalKatex.form[7].title +'})}{\\text{'+ this.modalKatex.form[8].title +'}} \\times \\text{100} \\% = \\text{Lebih Dari Sama Dengan 10} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{E9} = \\dfrac{(\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[3].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[4].value) +'}) - ((\\text{100} \\% \\times \\text{'+ this.formatCurrency(this.modalKatex.form[5].value) +'}) + (\\text{35} \\% \\times \\text{'+ this.formatCurrency(this.modalKatex.form[6].value) +'}) + \\text{'+ this.formatCurrency(this.modalKatex.form[7].value) +'})}{\\text{'+ this.formatCurrency(this.modalKatex.form[8].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e9) +' \\% ( \\text{'+ (itemData.e9 >= 0.1 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});
				
				// a1
				}else if(type == 'a1'){
					this.modalTitle = 'A1 - Total Pinjaman Lalai / Total Pinjaman Beredar';

					this.modalKatex.form.push(
						{title:'Piutang Lalai Di Atas 12 Bulan',key:'piutang_lalai_12bulan',value:itemData.piutang_lalai_12bulan},
						{title:'Piutang Lalai 1 - 12 Bulan',key:'piutang_lalai_1bulan',value:itemData.piutang_lalai_1bulan},
						{title:'Piutang Beredar',key:'piutang_beredar',value:itemData.piutang_beredar},
					);
					
					this.modalKatex.indikator = 'Total pinjaman lalai &le; 5% dari total pinjaman beredar.';

					let katex1Content1 = '\\text{A1} = \\dfrac{\\text{Total Pinjaman Lalai}[\\text{'+ this.modalKatex.form[0].title +'} + \\text{'+ this.modalKatex.form[1].title +'}]}{\\text{'+ this.modalKatex.form[2].title +'}} \\times \\text{100} \\% = \\text{Kurang Dari Sama Dengan 5} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{A1} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}}{\\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.a1) +' \\% ( \\text{'+ (itemData.a1 <= 0.05 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});

				// a2	
				}else if(type == 'a2'){
					this.modalTitle = 'A2 - Aset yang tidak menghasilkan / Total Aset';

					this.modalKatex.form.push(
						{title:'Aset Tidak Menghasilkan',key:'aset_tidak_menghasilkan',value:itemData.aset_tidak_menghasilkan},
						{title:'Aset',key:'aset',value:itemData.aset},
					);
					
					this.modalKatex.indikator = 'Aset tidak menghasilkan 5% dari total aset.';

					let katex1Content1 = '\\text{A2} = \\dfrac{\\text{'+ this.modalKatex.form[0].title +'}}{\\text{'+ this.modalKatex.form[1].title +'}} \\times \\text{100} \\% = \\text{Kurang Dari Sama Dengan 5} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{A2} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'}}{\\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e6) +' \\% ( \\text{'+ (itemData.a6 <= 0.05 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});
				
				// r7
				}else if(type == 'r7'){
					this.modalTitle = 'R7 - BJS Saham terhadap rata-rata aset';

					this.modalKatex.form.push(
						{title:'BJS Saham',key:'bjs_saham',value:itemData.bjs_saham},
						{title:'Simpanan Saham Bulan Desember',key:'simpanan_saham_des',value:itemData.aset},
						{title:'Simpanan Saham Bulan ' + this.formatPeriodeMonth(itemData.periode),key:'simpanan_saham',value:itemData.simpanan_saham},
						{title:'Simpanan Saham Tahun Lalu',key:'simpanan_saham_lalu',value:itemData.simpanan_saham_lalu},
						{title:'Harga Pasar',key:'harga_pasar',value:itemData.harga_pasar},
					);
					
					this.modalKatex.indikator = 'Dividen saham dibayar 1% lebih tinggi daripada suku bunga pasar';

					if(itemData.simpanan_saham_des != 0){
						let katex1Content1 = '\\text{R7} = \\dfrac{\\text{'+ this.modalKatex.form[0].title +'}}{\\text{Simpanan Saham Rata-rata}(\\frac{\\text{'+ this.modalKatex.form[1].title +'} + \\text{'+ this.modalKatex.form[2].title +'}}{\\text{Jumlah Bulan Berjalan}} \\times \\text{12})} \\times \\text{100} \\% = \\text{Harga Pasar} \\% (\\text{IDEAL})';

						let katex2Content1 = '\\text{R7} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'}}{(\\frac{\\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'}}{\\text{'+ this.formatPeriodeMonth(itemData.periode) +'}} \\times \\text{12})} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.r7_1) +' \\% ( \\text{'+ (itemData.r7_1 == itemData.harga_pasar ? 'IDEAL' : 'TIDAK IDEAL') +'})';

						this.modalKatex.katex1.push(
							{title:'Jika simpanan saham bersumber dari saldo bulan desember tahun lalu',content:katex1Content1}
						);
						this.modalKatex.katex2.push(
							{title:'',content:katex2Content1}
						);
					}
					
					if(itemData.simpanan_saham_lalu != 0){
						let katex1Content2 = '\\text{R7} = \\dfrac{\\text{'+ this.modalKatex.form[0].title +'}}{\\text{Simpanan Saham Rata-rata}(\\frac{\\text{'+ this.modalKatex.form[3].title +'} + \\text{'+ this.modalKatex.form[2].title +'}}{\\text{2}})} \\times \\text{100} \\% = \\text{Harga Pasar} \\% (\\text{IDEAL})';

						let katex2Content2 = '\\text{R7} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'}}{(\\frac{\\text{'+ this.formatCurrency(this.modalKatex.form[3].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'}}{\\text{2}})} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.r7_2) +' \\% ( \\text{'+ (itemData.r7_2 == itemData.harga_pasar ? 'IDEAL' : 'TIDAK IDEAL') +'})';
						
						this.modalKatex.katex1.push(
							{title:'Jika simpanan saham bersumber dari saldo tahun lalu bulan ' + this.formatPeriodeMonth(itemData.periode),content:katex1Content2}
						);
						this.modalKatex.katex2.push(
							{title:'',content:katex2Content2}
						);
					}	
					
				//r9	
				}else if(type == 'r9'){
					this.modalTitle = 'R9 - Biaya Operasional Terhadap Rata-rata Aset';

					this.modalKatex.form.push(
						{title:'Total Biaya',key:'total_biaya',value:itemData.total_biaya},
						{title:'Beban Penyisihan Cadangan Resiko',key:'beban_penyisihan_dcr',value:itemData.beban_penyisihan_dcr},
						{title:'Aset',key:'aset',value:itemData.aset},
						{title:'Aset Tahun Lalu',key:'aset',value:itemData.aset},
					);
					
					this.modalKatex.indikator = 'Beban operasional terhadap rata-rata aset sebesar 5%.';

					let katex1Content1 = '\\text{R9} = \\dfrac{\\text{Beban Operasional}(\\text{'+ this.modalKatex.form[0].title +'} - \\text{'+ this.modalKatex.form[1].title +'})}{\\text{Rata-rata Aset}(\\frac{\\text{'+ this.modalKatex.form[2].title +'} - \\text{'+ this.modalKatex.form[3].title +'}}{\\text{2}})} \\times \\text{100} \\% = \\text{5} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{R9} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}}{\\frac{\\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[3].value) +'}}{\\text{2}}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e6) +' \\% ( \\text{'+ (itemData.r9 == 0.05 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});
				
				//l1
				}else if(type == 'l1'){
					this.modalTitle = 'L1 - (Investasi Likuid + Aset-aset Likuid - Hutang Jangka Pendek < 30 Hari) / Simpanan Non Saham';

					this.modalKatex.form.push(
						{title:'Investasi Likuid',key:'investasi_likuid',value:itemData.investasi_likuid},
						{title:'Aset Likuid Tidak Menghasilkan',key:'aset_likuid_tidak_menghasilkan',value:itemData.aset_likuid_tidak_menghasilkan},
						{title:'Hutang Tidak Berbiaya < 30 Hari',key:'hutang_tidak_berbiaya_30hari',value:itemData.hutang_tidak_berbiaya_30hari},
						{title:'Total Simpanan Non Saham',key:'tot_nonsaham',value:itemData.tot_nonsaham},
					);
					
					this.modalKatex.indikator = 'Likuiditas sebesar 15% dari total simpanan non saham tetapi tidak melampaui 20% dari total aset.';

					let katex1Content1 = '\\text{L1} = \\dfrac{(\\text{'+ this.modalKatex.form[0].title +'} + \\text{'+ this.modalKatex.form[1].title +'}) - \\text{'+ this.modalKatex.form[2].title +'}}{\\text{'+ this.modalKatex.form[3].title +'}} \\times \\text{100} \\% = \\text{15} \\% \\text{ Sampai } \\text{20} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{L1} = \\dfrac{(\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'} + \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}) - \\text{'+ this.formatCurrency(this.modalKatex.form[2].value) +'}}{\\text{'+ this.formatCurrency(this.modalKatex.form[3].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.l1) +' \\% (\\text{'+ (itemData.l1 >= 0.15 && itemData.l1 <= 0.2 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});

				//s10	
				}else if(type == 's10'){
					this.modalTitle = 'S10 - Pertumbuhan Anggota';

					this.modalKatex.form.push(
						{title:'Lelaki Biasa',key:'l_biasa',value:itemData.l_biasa},
						{title:'Lelaki L. Biasa',key:'l_lbiasa',value:itemData.l_lbiasa},
						{title:'Perempuan Biasa',key:'p_biasa',value:itemData.p_biasa},
						{title:'Perempuan L.Biasa',key:'p_lbiasa',value:itemData.p_lbiasa},
						{title:'Total Anggota',key:'total_anggota',value:itemData.total_anggota, hideForm: true},
						{title:'Total Anggota Tahun Lalu',key:'total_anggota_lalu',value:itemData.total_anggota_lalu},
					);
					
					this.modalKatex.indikator = 'Pertumbuhan anggota di atas 12% per tahun.';

					let katex1Content1 = '\\text{s10} = \\dfrac{\\text{'+ this.modalKatex.form[4].title +'} - \\text{'+ this.modalKatex.form[5].title +'}}{\\text{'+ this.modalKatex.form[5].title +'}} \\times \\text{100} \\% = \\text{Di Atas 12} \\% (\\text{IDEAL})';

					let katex2Content1 = '\\text{s10} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[4].value) +'}} - \\text{'+ this.formatCurrency(this.modalKatex.form[5].value) +'}{\\text{'+ this.formatCurrency(this.modalKatex.form[5].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.s10) +' \\% ( \\text{'+ (itemData.s10 > 0.12 ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
					this.modalKatex.katex1.push({title:'',content:katex1Content1});
					this.modalKatex.katex2.push({title:'',content:katex2Content1});
				
				//s11
				}else if(type == 's11'){
					this.modalTitle = 'S11 - Pertumbuhan Aset';

					this.modalKatex.form.push(
						{title:'Aset',key:'aset',value:itemData.aset},
						{title:'Aset Tahun Lalu',key:'aset_lalu',value:itemData.aset_lalu},
					);
					
					this.modalKatex.indikator = 'Pertumbuhan aset 10% di atas laju inflasi.';

					let katex1Content1 = '\\text{s11} = \\dfrac{\\text{'+ this.modalKatex.form[0].title +'} - \\text{'+ this.modalKatex.form[1].title +'}}{\\text{'+ this.modalKatex.form[1].title +'}} \\times \\text{100} \\% = \\text{10} \\% \\text{ Di Atas Laju Inflasi} (\\text{IDEAL})';

					let katex2Content1 = '\\text{S11} = \\dfrac{\\text{'+ this.formatCurrency(this.modalKatex.form[0].value) +'}} - \\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}{\\text{'+ this.formatCurrency(this.modalKatex.form[1].value) +'}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.s11) +' \\% ( \\text{'+ (itemData.s11 > (itemData.laju_inflasi + 0.1) ? 'IDEAL' : 'TIDAK IDEAL') +'})';
					
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
			formatPeriodeMonth(value){
				return Vue.filter('month')(value);
			},
			formatCurrency(value){
				if(value){
					return this.$options.filters.currency(value,'',0,{ thousandsSeparator: '.'});
				}else{
					return '(-)';
				}
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