<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :source="source" :columnData="columnData" :filterData="filterData" :toolbarButton="4" :itemData="itemData" :itemDataStat="itemDataStat" :extSearchQuery1="extSearchQuery1" :extSearchColumn="extSearchColumn" :params="params"
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
					<button @click.prevent="ubahData(selectedItem.id, selectedItem.id_cu)" class="btn btn-default btn-icon" v-tooltip:top="'Ubah ' + title" :disabled="!selectedItem.id">
						<i class="icon-pencil5"></i> Ubah
					</button>
				</div>

				<!-- hapus -->
				<div class="btn-group pb-5" v-if="profile.can && profile.can['destroy ' + kelas]">
					<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-default btn-icon" v-tooltip:top="'Hapus ' + title"  :disabled="!selectedItem.id">
						<i class="icon-bin2"></i> Hapus
					</button>
				</div>

				<!-- terbitkan -->
				<div class="btn-group pb-5" v-if="profile.can && profile.can['terbitkan ' + kelas]">
					<button @click.prevent="modalConfirmOpen('updateTerbitkan')" class="btn btn-default btn-icon"  v-tooltip:top="'Ubah Status Penerbitan Artikel'"  :disabled="!selectedItem.id">
						<i class="icon-file-upload"></i> <span v-if="selectedItem.terbitkan == 1">Tidak Terbitkan</span>
						<span v-else>Terbitkan</span>
					</button>
				</div>

				<!-- utamakan -->
				<div class="btn-group pb-5" v-if="profile.can && profile.can['utamakan ' + kelas]">
					<button @click.prevent="modalConfirmOpen('updateUtamakan')" class="btn btn-default btn-icon" v-tooltip:top="'Ubah Status Pengutamaan Artikel'"  :disabled="!selectedItem.id">
						<i class="icon-pushpin"></i> <span v-if="selectedItem.utamakan == 1">Tidak Utamakan</span>
						<span v-else>Utamakan</span>
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
						<button @click.prevent="ubahData(selectedItem.id, selectedItem.id_cu)" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Ubah ' + title" :disabled="!selectedItem.id">
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

				<!-- terbitkan -->
				<li v-if="profile.can && profile.can['terbitkan ' + kelas]">
					<div class="pl-5 pr-5 pb-5">
						<button @click.prevent="modalConfirmOpen('updateTerbitkan')" class="btn btn-default btn-icon btn-block"  v-tooltip:top="'Ubah Status Penerbitan Artikel'"  :disabled="!selectedItem.id">
							<i class="icon-file-upload"></i> <span v-if="selectedItem.terbitkan == 1">Tidak Terbitkan</span>
							<span v-else>Terbitkan</span>
						</button>
					</div>
				</li>

				<!-- utamakan -->
				<li v-if="profile.can && profile.can['utamakan ' + kelas]">
					<div class="pl-5 pr-5">
						<button @click.prevent="modalConfirmOpen('updateUtamakan')" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Ubah Status Pengutamaan Artikel'"  :disabled="!selectedItem.id">
							<i class="icon-pushpin"></i> <span v-if="selectedItem.utamakan == 1">Tidak Utamakan</span>
							<span v-else>Utamakan</span>
						</button>
					</div>
				</li>
			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'info': selectedItem.id == props.item.id }" @click="selectedRow(props.item)" class="text-nowrap">
					<td v-if="!columnData[0].hide">
						<img :src="'/images/artikel/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive img-sm" v-if="props.item.gambar">
						<img :src="'/images/image-articlen.jpg'" class="img-rounded img-responsive img-sm" v-else>
					</td>
					<td v-if="!columnData[1].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!columnData[2].hide && !columnData[2].disable">
						<check-value :value="props.item.artikel_kategori.name" v-if="props.item.artikel_kategori"></check-value>
						<span v-else>{{columnData[2].groupNoKey}}</span>
					</td>
					<td v-if="!columnData[3].hide && !columnData[3].disable">
						<check-value :value="props.item.artikel_penulis.name" v-if="props.item.artikel_penulis"></check-value>
						<span v-else>{{columnData[3].groupNoKey}}</span>
					</td> 
					<td v-if="!columnData[4].hide && !columnData[4].disable">
						<check-value :value="props.item.c_u.name" v-if="props.item.c_u"></check-value>
						<span v-else>{{columnData[4].groupNoKey}}</span>
					</td>
					<td v-if="!columnData[5].hide" v-html="$options.filters.checkStatus(props.item.terbitkan)"></td>
					<td v-if="!columnData[6].hide" v-html="$options.filters.checkStatus(props.item.utamakan)"></td>
					<td v-if="!columnData[7].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[8].hide">
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
								<td colspan="2">
									<img :src="'/images/artikel/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive center-block" v-if="props.item.gambar">
									<img :src="'/images/image-articlen.jpg'" class="img-rounded img-responsive center-block" v-else>
								</td>
							</tr>
							<tr v-if="!columnData[1].hide">
								<td colspan="2"><b>{{columnData[1].title}}</b></td>
							</tr>
							<tr v-if="!columnData[1].hide">
								<td colspan="2" style="word-wrap: break-word;">
									<check-value :value="props.item.name" :isTrim="false"></check-value>
									</td>
							</tr>
							<tr v-if="!columnData[2].hide">
								<td><b>{{columnData[2].title}}</b></td>
								<td>
									<check-value :value="props.item.artikel_kategori.name" :isTrim="false" :frontText="': '" v-if="props.item.artikel_kategori"></check-value>
									<span v-else>: {{columnData[2].groupNoKey}}</span>	
								</td>
							</tr>
							<tr v-if="!columnData[3].hide">
								<td><b>{{columnData[3].title}}</b></td>
								<td>
									<check-value :value="props.item.artikel_penulis.name" :isTrim="false" :frontText="': '" v-if="props.item.artikel_penulis"></check-value>
									<span v-else>: {{columnData[3].groupNoKey}}</span>	
								</td>
							</tr>
							<tr v-if="!columnData[4].hide && !columnData[4].disable">
								<td><b>{{columnData[4].title}}</b></td>
								<td>
									<check-value :value="props.item.c_u.name" :isTrim="false" :frontText="': '" v-if="props.item.c_u"></check-value>
									<span v-else>: {{columnData[4].groupNoKey}}</span>	
								</td>
							</tr>
							<tr v-if="!columnData[5].hide">
								<td><b>{{columnData[5].title}}</b></td>
								<td>
									: <span v-html="$options.filters.checkStatus(props.item.terbitkan)"></span>
								</td>
							</tr>
							<tr v-if="!columnData[6].hide">
								<td><b>{{columnData[6].title}}</b></td>
								<td>
									: <span v-html="$options.filters.checkStatus(props.item.utamakan)"></span>
								</td>
							</tr>
							<tr v-if="!columnData[7].hide">
								<td><b>{{columnData[7].title}}</b></td>
								<td>
									: <span v-html="$options.filters.dateTime(props.item.created_at)"></span>
								</td>
							</tr>
							<tr v-if="!columnData[8].hide">
								<td><b>{{columnData[8].title}}</b></td>
								<td>
									: <span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
									<span v-else>-</span>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="panel-footer hidden-print">
						<div class="text-center button-toolbar">

							<!-- update -->
							<div class="pt-10 pb-10 pl-15 pr-15" v-if="profile.can && profile.can['update ' + kelas]">
								<button @click.prevent="ubahData(props.item.id,props.item.id_cu)" class="btn btn-default btn-icon btn-block">
									<i class="icon-pencil5"></i> Ubah
								</button>
							</div>
							
							<!-- destroy -->
							<div class="pb-10 pl-15 pr-15" v-if="profile.can && profile.can['destroy ' + kelas]">
								<button @click.prevent="modalConfirmOpen('hapus',true,props.item)" class="btn btn-default btn-icon btn-block">
									<i class="icon-bin2"></i> <span>Hapus</span>
								</button>
							</div>
							
							<!-- terbitkan -->
							<div class="pb-10 pl-15 pr-15" v-if="profile.can && profile.can['terbitkan ' + kelas]">
								<button @click.prevent="modalConfirmOpen('updateTerbitkan',true,props.item)" class="btn btn-default btn-icon btn-block">
									<i class="icon-file-upload"></i> <span v-if="props.item.terbitkan == 1">Tidak Terbitkan</span>
									<span v-else>Terbitkan</span> 
								</button>
							</div>

							<!-- utamakan -->
							<div class="pb-10 pl-15 pr-15" v-if="profile.can && profile.can['utamakan ' + kelas]">
								<button @click.prevent="modalConfirmOpen('updateUtamakan',true,props.item)" class="btn btn-default btn-icon btn-block">
									<i class="icon-pushpin"></i> <span v-if="props.item.utamakan == 1">Tidak Utamakan</span>
									<span v-else>Utamakan</span>
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
				extSearchQuery1: '',
				extSearchColumn: '',
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
				filterData: [{
						title: 'Judul',
						key: 'name',
						type: 'string',
						disable: false
					},
					{
						title: 'Kategori',
						key: 'artikelkategori.name',
						type: 'string',
						disable: false
					},
					{
						title: 'Penulis',
						key: 'artikelpenulis.name',
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
						title: 'Tgl. Tulis',
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
						title: 'Foto',
						key: 'gambar',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false
					},
					{
						title: 'Judul',
						key: 'name',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Kategori',
						key: 'kategori_name',
						groupKey: 'kategori_name',
						groupNoKey: '-',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Penulis',
						key: 'penulis_name',
						groupKey: 'penulis_name',
						groupNoKey: '-',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'CU',
						key: 'idCU',
						groupKey: 'c_u.name',
						groupNoKey: 'Puskopdit BKCU Kalimantan',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Terbitkan',
						key: 'terbitkan',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Utamakan',
						key: 'utamakan',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Tgl. Tulis',
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
				modalContent: '',
				modalButton: ''
			}
		},
		watch: {
			// check route changes
			'$route' (to, from){
				this.checkMeta();
			},

			profileStat(value){
				if(value == 'success'){
					if(this.modelKategoriStat == 'success' && this.profile.id_cu != this.modelKategori.id_cu && this.profile.id_cu != 0){
						this.$router.push({name: 'notFound'});
					}
				}
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

			// check kategori data from kategori route
			modelKategoriStat(value){
				if(value == 'success'){
					if(this.profileStat == 'success' && this.profile.id_cu != this.modelKategori.id_cu && this.profile.id_cu != 0){
						this.$router.push({name: 'notFound'});
					}else{
						this.params.search_column = 'artikelkategori.name';
						this.params.search_query_1 = this.modelKategori.name;

						this.extSearchColumn = 'Kategori';
						this.extSearchQuery1 = this.modelKategori.name;

						this.$store.dispatch(this.kelas + '/indexCU', [this.params,this.idCU]);
					}
				}
			},

			// check penulis data from penulis route
			modelPenulisStat(value){
				if(value == 'success'){
					if(this.profileStat == 'success' && this.profile.id_cu != this.modelPenulis.id_cu && this.profile.id_cu != 0){
						this.$router.push({name: 'notFound'});
					}else{
						this.params.search_column = 'artikelPenulis.name';
						this.params.search_query_1 = this.modelPenulis.name;

						this.extSearchColumn = 'Penulis';
						this.extSearchQuery1 = this.modelPenulis.name;

						this.$store.dispatch(this.kelas + '/indexCU', [this.params,this.idCU]);
					}
				}
			},

			// when updating data
      updateStat(value) {
				this.modalState = value;
				this.modalButton = 'Ok';
				
				if(value == "success"){
					this.modalTitle = this.updateMessage.message;
					this.modalContent = '';
					this.fetch();
				}else if(value == "fail"){
					this.modalContent = this.updateMessage;
				}else{
					this.modalContent = '';
				}
      }
		},
		methods: {
			fetch(){
				
				// if show all
				if(this.idCU == 'semua'){
						this.$store.dispatch(this.kelas + '/index', this.params);

					// show cu column
					this.disableColumnCU(false);
				}else{

					// if show cu & pus
					if(this.idCU !== undefined){

						//if artikelFilterKategori
						if(this.$route.meta.mode == 'kategori'){ 

							//if modelkategori is not loaded yet
							if(this.modelKategoriStat !== 'success'){	
								this.$store.dispatch('artikelKategori/edit',this.$route.params.id);

							//for changing parameters in kategori meta mode
							}else{
								this.$store.dispatch(this.kelas + '/indexCU', [this.params,this.idCU]);
							}

						//if artikelFilterPenulis
						}else if(this.$route.meta.mode == 'penulis'){ 

							//if modelPenulis is not loaded yet
							if(this.modelPenulisLoadStat !== 'success'){
								this.$store.dispatch('artikelPenulis/edit',this.$route.params.id);

							//for changing parameters in kategori meta mode
							}else{
								this.$store.dispatch(this.kelas + '/indexCU', [this.params,this.idCU]);
							}
							
						}else{
							this.$store.dispatch(this.kelas + '/indexCU', [this.params,this.idCU]);
						}
					}

					// hide cu column
					this.disableColumnCU(true);
				}
			},
			checkMeta(){
				// route form kategori and penulis
				if(this.$route.meta.mode == 'kategori' || this.$route.meta.mode == 'penulis'){
					if(this.profile.id_cu == 0){
						this.$store.dispatch('global/changeIdCU',this.$route.params.cu);
					}else{
						this.$store.dispatch('global/changeIdCU',this.profile.id_cu);
					}	
				
				// route from edit and when change cu data selected
				}else if(this.$route.meta.mode == 'cu'){
					this.resetParams();
					this.$store.dispatch('global/changeIdCU',this.$route.params.cu);
				
				// default route
				}else{
					this.resetParams();
					this.$store.dispatch('global/changeIdCU',this.profile.id_cu);
				}
			},
			disableColumnCU(status){
				this.columnData[4].disable = status;
				this.filterData[3].disable = status;
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
				} else if (source == 'updateTerbitkan') {
					if (this.selectedItem.terbitkan == 0) {
						this.modalTitle = 'Terbitkan ' + this.title + ' ' + this.selectedItem.name + ' ?';
						this.modalButton = 'Iya, terbitkan';
					} else {
						this.modalTitle = 'Tidak terbitkan ' + this.title + ' ' + this.selectedItem.name + ' ?';
						this.modalButton = 'Iya, tidak terbitkan';
					}
				} else if (source == 'updateUtamakan') {
					if (this.selectedItem.utamakan == 0) {
						this.modalTitle = 'Utamakan ' + this.title + ' ' + this.selectedItem.name + ' ?';
						this.modalButton = 'Iya, utamakan';
					} else {
						this.modalTitle = 'Tidak utamakan ' + this.title + ' ' + this.selectedItem.name + ' ?';
						this.modalButton = 'Iya, tidak utamakan';
					}
				}
			},
			modalTutup() {
				this.modalShow = false;
				this.$store.dispatch(this.kelas + '/resetUpdateStat');
			},
			modalConfirmOk() {
				if (this.source == 'hapus') {
					this.$store.dispatch(this.kelas + '/destroy', this.selectedItem.id);
				} else if (this.source == "updateTerbitkan"){
					this.$store.dispatch(this.kelas + '/updateTerbitkan', this.selectedItem.id);
				} else if (this.source == "updateUtamakan") {
					this.$store.dispatch(this.kelas + '/updateUtamakan', this.selectedItem.id);
				}
			}
		},
		computed:{
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
			...mapGetters('artikel',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('artikelKategori',{
				modelKategori: 'data',
				modelKategoriStat: 'dataStat',
			}),
			...mapGetters('artikelPenulis',{
				modelPenulis: 'data',
				modelPenulisStat: 'dataStat',
			}),
		},
		filters: {
			checkImages: function (value) {
				return '/images/' + this.kelas + '/' + value + 'n.jpg';
			}
		}
	}
</script>