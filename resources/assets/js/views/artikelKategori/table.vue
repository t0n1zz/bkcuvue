<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :source="source" :columnData="columnData" :filterData='filterData' :toolbarButton="4" :itemData="itemData" :itemDataStat="itemDataStat" 
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

				<!-- lihat artikel -->
				<div class="btn-group pb-5" v-if="profile.can && profile.can['index artikel']">
					<button @click.prevent="lihatArtikel(selectedItem.id,selectedItem.id_cu)" class="btn btn-default btn-icon" v-tooltip:top="'Lihat artikel yang ditulis'" :disabled="!selectedItem.id || selectedItem.has_artikel_count === 0">
						<i class="icon-file-eye"></i> Lihat artikel 
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
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.deskripsi"></check-value>
					</td>
					<td v-if="!columnData[3].hide && !columnData[3].disable">
						<check-value :value="props.item.c_u.name" :empty="columnData[3].groupNoKey" v-if="props.item.c_u"></check-value>
						<span v-else>{{columnData[3].groupNoKey}}</span>
					</td>
					<td v-if="!columnData[4].hide">{{props.item.has_artikel_count}}</td>
					<td v-if="!columnData[5].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[6].hide">
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
								<td><check-value :value="props.item.name" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[2].hide">
								<td colspan="2"><b>{{columnData[2].title}}</b></td>
							</tr>
							<tr v-if="!columnData[2].hide">
								<td colspan="2" style="word-wrap: break-word;"><check-value :value="props.item.deskripsi" :isTrim="false"></check-value></td>
							</tr>
							<tr v-if="!columnData[3].hide && !columnData[3].disable">
								<td><b>{{columnData[3].title}}</b></td>
								<td>
									<check-value :value="props.item.c_u.name" :isTrim="false" :frontText="': '" v-if="props.item.c_u"></check-value>
									<span v-else>: {{columnData[2].groupNoKey}}</span>
								</td>
							</tr>
								<tr v-if="!columnData[4].hide">
								<td><b>{{columnData[4].title}}</b></td>
								<td>: {{props.item.has_artikel_count}}</td>
							</tr>
							<tr v-if="!columnData[5].hide">
								<td><b>{{columnData[5].title}}</b></td>
								<td>
									: <span v-html="$options.filters.dateTime(props.item.created_at)"></span>
								</td>
							</tr>
							<tr v-if="!columnData[6].hide">
								<td><b>{{columnData[6].title}}</b></td>
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
          per_page: 10,
          page: 1,
          search_column: 'name',
          search_operator: 'like',
          search_query_1: '',
          search_query_2: ''
        },
				filterData: [
					{
						title: 'Nama',
						key: 'name',
						type: 'string',
						disable: false
					},
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
						title: 'Nama',
						key: 'name',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Deskripsi',
						key: 'deskripsi',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'CU',
						key: 'id_cu',
						groupKey: 'c_u.name',
						groupNoKey: 'Puskopdit BKCU Kalimantan',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Artikel',
						key: 'has_artikel_count',
						groupKey: 'has_artikel_count',
						groupNoKey: '0',
						excelType: 'string',
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
				this.columnData[3].disable = status;
				this.filterData[2].disable = status;
			},
			resetParams(){
				this.params.search_column = 'name';
				this.params.search_query_1 = '';

				this.extSearchColumn = 'name';
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
			...mapGetters('artikelKategori',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>