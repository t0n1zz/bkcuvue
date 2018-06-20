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
				<div class="btn-group pb-5" v-if="profile.can && profile.can['create_' + kelas]">
					<router-link :to="{ name: kelas + 'Create'}" class="btn btn-default btn-icon" v-tooltip:top="'Tambah ' +  title">
						<i class="icon-plus3"></i> Tambah 
					</router-link>
				</div>

				<!-- ubah-->
				<div class="btn-group pb-5" v-if="profile.can && profile.can['update_' + kelas]">
					<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-default btn-icon" v-tooltip:top="'Ubah ' + title" :disabled="!selectedItem.id">
						<i class="icon-pencil5"></i> Ubah
					</button>
				</div>

				<!-- hapus -->
				<div class="btn-group pb-5" v-if="profile.can && profile.can['destroy_' + kelas]">
					<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-default btn-icon" v-tooltip:top="'Hapus ' + title"  :disabled="!selectedItem.id">
						<i class="icon-bin2"></i> Hapus
					</button>
				</div>

				<!-- lihat tpcu -->
				<div class="btn-group pb-5" v-if="profile.can && profile.can['index_tpCu']">
					<button @click.prevent="lihatTpCu(selectedItem.id)" class="btn btn-default btn-icon" v-tooltip:top="'Lihat TP/KP'" :disabled="!selectedItem.id || selectedItem.has_tp_cu_count === 0">
						<i class="icon-file-eye"></i> Lihat TP/KP 
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
				<li v-if="profile.can && profile.can['update_' + kelas]">
					<div class="pl-5 pr-5 pb-5 pt-10">
						<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Ubah ' + title" :disabled="!selectedItem.id">
							<i class="icon-pencil5"></i> Ubah
						</button>
					</div>
				</li>

				<!-- destroy -->
				<li v-if="profile.can && profile.can['destroy_' + kelas]">
					<div class="pl-5 pr-5 pb-5">
						<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Hapus ' + title"  :disabled="!selectedItem.id">
							<i class="icon-bin2"></i> Hapus
						</button>
					</div>
				</li>

				<!-- lihat tpcu -->
				<li v-if="profile.can && profile.can['index_tp_cu']">
					<div class="pl-5 pr-5 pb-5">
						<button @click.prevent="lihatTpCu(selectedItem.id)" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Lihat TP/KP'" :disabled="selectedItem.has_tp_cu_count === 0">
							<i class="icon-file-eye"></i> Lihat TP/KP 
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
						<img :src="'/images/' + kelas + '/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive img-sm" v-if="props.item.gambar">
						<img :src="'/images/no_image.jpg'" class="img-rounded img-responsive img-sm" v-else>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!columnData[3].hide">
						<check-value :value="props.item.no_ba"></check-value>
					</td>
					<td v-if="!columnData[4].hide">
						<check-value :value="props.item.has_tp_count"></check-value>
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.badan_hukum"></check-value>
					</td>
					<td v-if="!columnData[6].hide && !columnData[6].disable">
						<check-value :value="props.item.provinces.name" v-if="props.item.provinces"></check-value>
						<span v-else>: {{columnData[6].groupNoKey}}</span>	
					</td>
					<td v-if="!columnData[7].hide && !columnData[7].disable">
						<check-value :value="props.item.regencies.name" v-if="props.item.regencies"></check-value>
						<span v-else>: {{columnData[7].groupNoKey}}</span>	
					</td>
					<td v-if="!columnData[8].hide && !columnData[8].disable">
						<check-value :value="props.item.districts.name" v-if="props.item.districts"></check-value>
						<span v-else>: {{columnData[8].groupNoKey}}</span>	
					</td>
					<td v-if="!columnData[9].hide && !columnData[9].disable">
						<check-value :value="props.item.villages.name" v-if="props.item.villages"></check-value>
						<span v-else>: {{columnData[9].groupNoKey}}</span>	
					</td>
					<td v-if="!columnData[10].hide">
						<check-value :value="props.item.alamat"></check-value>
					</td>
					<td v-if="!columnData[11].hide">
						<check-value :value="props.item.app"></check-value>
					</td>
					<td v-if="!columnData[12].hide" v-html="$options.filters.date(props.item.ultah)"></td>
					<td v-if="!columnData[13].hide" v-html="$options.filters.date(props.item.bergabung)"></td>
					<td v-if="!columnData[14].hide">
						<check-value :value="props.item.website"></check-value>
					</td>
					<td v-if="!columnData[15].hide">
						<check-value :value="props.item.email"></check-value>
					</td>
					<td v-if="!columnData[16].hide">
						<check-value :value="props.item.telp"></check-value>
					</td>
					<td v-if="!columnData[17].hide">
						<check-value :value="props.item.hp"></check-value>
					</td>
					<td v-if="!columnData[18].hide">
						<check-value :value="props.item.pos"></check-value>
					</td>
					<td v-if="!columnData[19].hide" v-html="$options.filters.dateTime(props.item.created_at)"  class="text-nowrap"></td>
					<td v-if="!columnData[20].hide">
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
								<td colspan="2">
									<img :src="'/images/' + kelas + '/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive center-block" v-if="props.item.gambar">
									<img :src="'/images/no_image.jpg'" class="img-rounded img-responsive center-block" v-else>
								</td>
							</tr>
							<tr v-if="!columnData[2].hide">
								<td><b>{{columnData[2].title}}</b></td>
								<td><check-value :value="props.item.name" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[3].hide">
								<td><b>{{columnData[3].title}}</b></td>
								<td><check-value :value="props.item.no_ba" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[4].hide">
								<td><b>{{columnData[4].title}}</b></td>
								<td><check-value :value="props.item.has_tp_cu_count" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[5].hide">
								<td><b>{{columnData[5].title}}</b></td>
								<td><check-value :value="props.item.badan_hukum" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[6].hide">
								<td><b>{{columnData[6].title}}</b></td>
								<td>
									<check-value :value="props.item.provinces.name" :isTrim="false" :frontText="': '" v-if="props.item.provinces"></check-value>
									<span v-else>: {{columnData[6].groupNoKey}}</span>	
								</td>
							</tr>
							<tr v-if="!columnData[7].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[7].title}}</b></td>
								<td>
									<check-value :value="props.item.regencies.name" :isTrim="false" :frontText="': '" v-if="props.item.regencies"></check-value>
									<span v-else>: {{columnData[7].groupNoKey}}</span>	
								</td>
							</tr>
							<tr v-if="!columnData[8].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[8].title}}</b></td>
								<td>
									<check-value :value="props.item.districts.name" :isTrim="false" :frontText="': '" v-if="props.item.districts"></check-value>	
									<span v-else>: {{columnData[8].groupNoKey}}</span>	
								</td>
							</tr>
							<tr v-if="!columnData[9].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[9].title}}</b></td>
								<td>
									<check-value :value="props.item.villages.name" :isTrim="false" :frontText="': '" v-if="props.item.villages"></check-value>
									<span v-else>: {{columnData[9].groupNoKey}}</span>	
								</td>
							</tr>
							<tr v-if="!columnData[10].hide" class="collapse" :class="'collap'+props.item.id">
								<td colspan="2"><b>{{columnData[10].title}}</b></td>
							</tr>
							<tr v-if="!columnData[10].hide" class="collapse" :class="'collap'+props.item.id">
								<td colspan="2" style="word-wrap: break-word;"><check-value :value="props.item.alamat" :isTrim="false"></check-value></td>
							</tr>
							<tr v-if="!columnData[11].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[11].title}}</b></td>
								<td><check-value :value="props.item.app" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[12].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[12].title}}</b></td>
								<td>
									: <span v-html="$options.filters.date(props.item.ultah)"></span>
								</td>
							</tr>
							<tr v-if="!columnData[13].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[13].title}}</b></td>
								<td>
									: <span v-html="$options.filters.date(props.item.bergabung)"></span>
								</td>
							</tr>
							<tr v-if="!columnData[14].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[14].title}}</b></td>
								<td><check-value :value="props.item.website" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[15].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[15].title}}</b></td>
								<td><check-value :value="props.item.email" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[16].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[16].title}}</b></td>
								<td><check-value :value="props.item.telp" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[17].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[17].title}}</b></td>
								<td><check-value :value="props.item.hp" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[18].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[18].title}}</b></td>
								<td><check-value :value="props.item.pos" :isTrim="false" :frontText="': '"></check-value></td>
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
							<div class="pt-10 pb-10 pl-15 pr-15" v-if="profile.can && profile.can['update_' + kelas]">
								<button @click.prevent="ubahData(props.item.id)" class="btn btn-default btn-icon btn-block">
									<i class="icon-pencil5"></i> Ubah
								</button>
							</div>
							
							<!-- destroy -->
							<div class="pb-10 pl-15 pr-15" v-if="profile.can && profile.can['destroy_' + kelas]">
								<button @click.prevent="modalConfirmOpen('hapus',true,props.item)" class="btn btn-default btn-icon btn-block">
									<i class="icon-bin2"></i> <span>Hapus</span>
								</button>
							</div>

							<!-- lihat tpcu -->
							<div class="pb-10 pl-15 pr-15" v-if="profile.can && profile.can['index_tp_cu']">
								<button @click.prevent="lihatTpCu(props.item.id)" class="btn btn-default btn-icon btn-block" :disabled="selectedItem.has_tp_cu_count === 0">
									<i class="icon-file-eye"></i> Lihat TP/KP 
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
						title: 'Foto',
						key: 'gambar',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false
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
						title: 'No. BA',
						key: 'no_ba',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'number'
					},
					{
						title: 'TP/KP',
						key: 'has_tp_cu_count',
						groupKey: 'has_tp_cu_count',
						groupNoKey: '0',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Badan Hukum',
						key: 'badan_hukum',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false
					},
					{
						title: 'Provinsi',
						key: 'provinces_name',
						groupKey: 'provinces.name',
						groupNoKey: '-',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterKey: 'provinces.name',
						filterType: 'string'
					},
					{
						title: 'Kabupaten',
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
						title: 'Kecamatan',
						key: 'districts_name',
						groupKey: 'districts.name',
						groupNoKey: '-',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterKey: 'districts.name',
						filterType: 'string'
					},
					{
						title: 'Kelurahan',
						key: 'villages_name',
						groupKey: 'villages.name',
						groupNoKey: '-',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterKey: 'villages.name',
						filterType: 'string'
					},
					{
						title: 'Alamat',
						key: 'alamat',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Aplikasi',
						key: 'app',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Tgl. Berdiri',
						key: 'ultah',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'date'
					},
					{
						title: 'Tgl. Bergabung',
						key: 'bergabung',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'date'
					},
					{
						title: 'Website',
						key: 'website',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'E-mail',
						key: 'email',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'No. Telp',
						key: 'telp',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'No. Hp',
						key: 'hp',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Kode Pos',
						key: 'pos',
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
			lihatTpCu(id_cu){
				this.$router.push({name: 'tpCu', params: { cu: id_cu }});
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
			...mapGetters('cu',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			})
		}
	}
</script>