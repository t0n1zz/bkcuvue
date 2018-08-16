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
				<div class="btn-group pb-5" v-if="profile.can && profile.can['create_diklat_pus']">
					<router-link :to="{ name: kelas + 'Create'}" class="btn btn-default btn-icon" v-tooltip:top="'Tambah ' +  title">
						<i class="icon-plus3"></i> Tambah 
					</router-link>
				</div>

				<!-- ubah-->
				<div class="btn-group pb-5" v-if="profile.can && profile.can['update_diklat_pus']">
					<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-default btn-icon" v-tooltip:top="'Ubah ' + title" :disabled="!selectedItem.id">
						<i class="icon-pencil5"></i> Ubah
					</button>
				</div>

				<!-- hapus -->
				<div class="btn-group pb-5" v-if="profile.can && profile.can['destroy_diklat_pus']">
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
				<li v-if="profile.can && profile.can['update_diklat_pus']">
					<div class="pl-5 pr-5 pb-5 pt-10">
						<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Ubah ' + title" :disabled="!selectedItem.id">
							<i class="icon-pencil5"></i> Ubah
						</button>
					</div>
				</li>

				<!-- destroy -->
				<li v-if="profile.can && profile.can['destroy_diklat_pus']">
					<div class="pl-5 pr-5 pb-5">
						<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Hapus ' + title"  :disabled="!selectedItem.id">
							<i class="icon-bin2"></i> Hapus
						</button>
					</div>
				</li>

			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td>
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<span v-html="$options.filters.statusDiklat(props.item.status)"></span>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.kode_diklat"></check-value>
					</td>
					<td v-if="!columnData[3].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!columnData[4].hide && !columnData[4].disable">
						<check-value :value="props.item.regencies.name" v-if="props.item.regencies"></check-value>
						<span v-else>: {{columnData[4].groupNoKey}}</span>	
					</td>
					<td v-if="!columnData[5].hide && !columnData[5].disable">
						<check-value :value="props.item.tempat.name" v-if="props.item.tempat"></check-value>
						<span v-else> {{columnData[5].groupNoKey}}</span>	
					</td>
					<td v-if="!columnData[6].hide">
						<check-value :value="props.item.periode"></check-value>
					</td>
					<td v-if="!columnData[7].hide" v-html="$options.filters.date(props.item.mulai)"></td>
					<td v-if="!columnData[8].hide" v-html="$options.filters.date(props.item.selesai)"></td>
					<td v-if="!columnData[9].hide">
						<check-value :value="props.item.peserta_max"></check-value>
					</td>
					<td v-if="!columnData[10].hide">
						<check-value :value="props.item.peserta_min"></check-value>
					</td>
					<td v-if="!columnData[11].hide" class="text-warp">
						<span v-if="props.item.sasaran_hub">
							<label v-for="sasaran_hub in props.item.sasaran_hub" class="label label-primary ml-5">
								{{ sasaran_hub.sasaran.name }}
							</label>
						</span>
					</td>
					<td v-if="!columnData[12].hide">
						<check-value :value="props.item.keterangan"></check-value>
					</td>
					<td v-if="!columnData[13].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[14].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

			<!-- mobile -->
			<!-- button mobile -->
			<template slot="button-mobile" class="hidden-print" v-if="profile.can && profile.can['create_' + kelas]">
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
								<td><check-value :value="props.item.status" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[2].hide">
								<td><b>{{columnData[2].title}}</b></td>
								<td><check-value :value="props.item.kode_diklat" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[3].hide">
								<td><b>{{columnData[3].title}}</b></td>
								<td><check-value :value="props.item.name" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[4].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[4].title}}</b></td>
								<td>
									<check-value :value="props.item.regencies.name" :isTrim="false" :frontText="': '" v-if="props.item.regencies"></check-value>
									<span v-else>: {{columnData[4].groupNoKey}}</span>	
								</td>
							</tr>
							<tr v-if="!columnData[5].hide">
								<td><b>{{columnData[5].title}}</b></td>
								<td>
									<check-value :value="props.item.tempat.name" :isTrim="false" :frontText="': '" v-if="props.item.tempat"></check-value>
									<span v-else>: {{columnData[5].groupNoKey}}</span>	
								</td>
							</tr>
							<tr v-if="!columnData[5].hide">
								<td><b>{{columnData[5].title}}</b></td>
								<td><check-value :value="props.item.kota" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[6].hide">
								<td><b>{{columnData[6].title}}</b></td>
								<td><check-value :value="props.item.periode" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[7].hide">
								<td><b>{{columnData[7].title}}</b></td>
								<td>
									: <span v-html="$options.filters.date(props.item.mulai)"></span>
								</td>
							</tr>
							<tr v-if="!columnData[8].hide">
								<td><b>{{columnData[8].title}}</b></td>
								<td>
									: <span v-html="$options.filters.date(props.item.selesai)"></span>
								</td>
							</tr>
							<tr v-if="!columnData[9].hide">
								<td><b>{{columnData[9].title}}</b></td>
								<td><check-value :value="props.item.peserta_max" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[10].hide">
								<td><b>{{columnData[10].title}}</b></td>
								<td><check-value :value="props.item.peserta_min" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[11].hide">
								<td><b>{{columnData[11].title}}</b></td>
								<td>
									<span v-if="props.item.sasaran_hub">
										<label v-for="sasaran_hub in props.item.sasaran_hub" class="label label-primary ml-5">
											{{ sasaran_hub.sasaran.name }}
										</label>
									</span>
								</td>
							</tr>
							<tr v-if="!columnData[12].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[12].title}}</b></td>
								<td><check-value :value="props.item.keterangan" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[13].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[13].title}}</b></td>
								<td>
									: <span v-html="$options.filters.dateTime(props.item.created_at)"></span>
								</td>
							</tr>
							<tr v-if="!columnData[14].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[14].title}}</b></td>
								<td>
									: <span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
									<span v-else>-</span> 
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
							<div class="pt-10 pb-10 pl-15 pr-15" v-if="profile.can && profile.can['update_diklat_pus']">
								<button @click.prevent="ubahData(props.item.id)" class="btn btn-default btn-icon btn-block">
									<i class="icon-pencil5"></i> Ubah
								</button>
							</div>
							
							<!-- destroy -->
							<div class="pb-10 pl-15 pr-15" v-if="profile.can && profile.can['destroy_diklat_pus']">
								<button @click.prevent="modalConfirmOpen('hapus',true,props.item)" class="btn btn-default btn-icon btn-block">
									<i class="icon-bin2"></i> <span>Hapus</span>
								</button>
							</div>

						</div>
					</div>
				</div>
			</template>

		</data-viewer>
					
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" :content="modalContent" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
		</app-modal>

	</div>
</template>

<script>
	import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import corefunc from '../../assets/core/app.js';
	import DataViewer from '../../components/dataviewer.vue';
	import appModal from '../../components/modal';
	import collapseButton from '../../components/collapseButton.vue';
	import checkValue from '../../components/checkValue.vue';

	export default {
		components: {
			DataViewer,
			appModal,
			collapseButton,
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
          per_page: 10,
          page: 1,
          search_column: 'name',
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
						disable: false
					},
					{
						title: 'Status',
						key: 'status',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Kode Diklat',
						key: 'kode_diklat',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Nama',
						key: 'name',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Kabupaten/Kota',
						key: 'regencies_name',
						groupKey: 'regencies.name',
						groupNoKey: '-',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterKey: 'regencies.name',
						filterType: 'string'
					},
					{
						title: 'Tempat',
						key: 'tempat_name',
						groupKey: 'tempat.name',
						groupNoKey: '-',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterKey: 'tempat.name',
						filterType: 'string'
					},
					{
						title: 'Periode',
						key: 'periode',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Tgl. Mulai',
						key: 'mulai',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'date'
					},
					{
						title: 'Tgl. Selesai',
						key: 'selesai',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'date'
					},
					{
						title: 'Peserta Max',
						key: 'peserta_max',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'number'
					},
					{
						title: 'Peserta Min',
						key: 'peserta_min',
						excelType: 'number',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'number'
					},
					{
						title: 'Sasaran',
						key: 'sasaran_hub.sasaran.name',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'number'
					},
					{
						title: 'Keterangan',
						key: 'keterangan',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Tgl. / Waktu Buat',
						key: 'created_at',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'datetime'
					},
					{
						title: 'Tgl. / Waktu Ubah',
						key: 'updated_at',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'datetime'
					}
				],
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalContent: '',
				modalButton: ''
			}
		},
		created(){
			this.fetch();
		},
		watch: {
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
				this.$store.dispatch(this.kelas + '/index', this.params);
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			ubahData(id) {
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
					this.modalTitle = 'Hapus ' + this.title + ' ' + this.selectedItem.name + ' ini?';
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
			...mapGetters('diklatPus',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			})
		},
		filters: {
			statusDiklat:function(value){
				if(value == 1){
					return '<span class="bg-info text-highlight">Menunggu</span>';
				}else if(value == 2){
					return '<span class="bg-warning text-highlight">Pendaftaran Buka</span>';
				}else if(value == 3){
					return '<span class="bg-warning-300 text-highlight">Pendaftaran Tutup</span>';
				}else if(value == 4){
					return '<span class="bg-primary-300 text-highlight"> Berjalan</span>';
				}else if(value == 5){
					return '<span class="bg-primary text-highlight"> Terlaksana</span>';
				}else if(value == 6){
					return '<span class="bg-danger text-highlight"> Batal</span>';
				}
			}
		}
	}
</script>