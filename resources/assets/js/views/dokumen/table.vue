<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl" @fetch="fetch">

			<!-- button desktop -->

			<template slot="button-desktop">

				<template v-if="$route.meta.mode != 'gerakanPublik'">

					<!-- tambah -->
					<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['create_' + kelas]">
						<i class="icon-plus3"></i> Tambah
					</router-link>

					<!-- ubah-->
					<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['update_' + kelas]"
					:disabled="!selectedItem.id">
						<i class="icon-pencil5"></i> Ubah
					</button>

					<!-- hapus -->
					<button @click.prevent="modalOpen('hapus')" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['destroy_' + kelas]" :disabled="!selectedItem.id">
						<i class="icon-bin2"></i> Hapus
					</button>

				</template>

				<!-- lihat -->
				<button @click.prevent="downloadMateri(selectedItem.filename)" class="btn btn-light mb-1" :disabled="!selectedItem.id" v-if="selectedItem.format == 'upload'">
					<i class="icon-file-eye"></i> Lihat
				</button>
				<a type="button" class="btn btn-light mb-1" :href="selectedItem.link" target="_blank" v-else-if="selectedItem.format == 'link'">
					<i class="icon-file-eye"></i> Lihat
				</a>
				<button type="button" class="btn btn-light mb-1" v-else disabled>
					<i class="icon-file-eye"></i> Lihat
				</button>

			</template>

			<!-- button mobile -->
			<template slot="button-mobile">
				
				<template v-if="$route.meta.mode != 'gerakanPublik'">

					<!-- tambah -->
					<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['create_' + kelas]">
						<i class="icon-plus3"></i> Tambah
					</router-link>


					<!-- ubah-->
					<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['update_' + kelas]" :disabled="!selectedItem.id">
						<i class="icon-pencil5"></i> Ubah
					</button>

					<!-- hapus -->
					<button @click.prevent="modalOpen('hapus')" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['destroy_' + kelas]" :disabled="!selectedItem.id">
						<i class="icon-bin2"></i> Hapus
					</button>

				</template>

				<!-- lihat -->
				<button @click.prevent="downloadMateri(selectedItem.filename)" class="btn btn-light btn-block mb-1" :disabled="!selectedItem.id" v-if="selectedItem.format == 'upload'">
					<i class="icon-file-eye"></i> Lihat
				</button>
				<a type="button" class="btn btn-light btn-block mb-1" :href="selectedItem.link" target="_blank" v-else-if="selectedItem.format == 'link'">
					<i class="icon-file-eye"></i> Lihat
				</a>
				<button type="button" class="btn btn-light btn-block mb-1" v-else disabled>
					<i class="icon-file-eye"></i> Lihat
				</button>

			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id == props.item.id }" @click="selectedRow(props.item)" class="text-nowrap">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!columnData[2].hide && !columnData[2].disable">
						<check-value :value="props.item.kategori.name" v-if="props.item.kategori"></check-value>
						<span v-else>-</span>
					</td>
					<td v-if="!columnData[3].hide && !columnData[3].disable">
						<check-value :value="props.item.status"></check-value>
					</td>
					<td v-if="!columnData[4].hide && !columnData[4].disable">
						<check-value :value="props.item.cu.name" v-if="props.item.cu"></check-value>
						<span v-else>PUSKOPCUINA</span>
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.keterangan"></check-value>
					</td>
					<td v-if="!columnData[6].hide">
						<check-value :value="props.item.tipe"></check-value>
					</td>
					<td v-if="!columnData[7].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[8].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

		</data-viewer>
					
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :button="modalButton" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import DataViewer from '../../components/dataviewer2.vue';
	import appModal from '../../components/modal';
	import checkValue from '../../components/checkValue.vue';
	import FileSaver from 'file-saver';

	export default {
		components: {
			DataViewer,
			appModal,
			checkValue
		},
		props:['title','kelas'],
		data() {
			return {
				selectedItem: [],
				query: {
					order_column: "created_at",
					order_direction: "desc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				excelDownloadUrl: '',
				columnData: [
					{
						title: 'No.',
						name: 'No.',
					},
					{
						title: 'Nama',
						name: 'name',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
					{
						title: 'Kategori',
						name: 'kategori.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Status',
						name: 'status',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'CU',
						name: 'cu.name',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Keterangan',
						name: 'keterangan',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tipe',
						name: 'tipe',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. Buat',
						name: 'created_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. Ubah',
						name: 'updated_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					}
				],
				state: '',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalContent: '',
				modalButton: ''
			}
		},
		created(){
			this.fetch(this.query);
		},
		watch: {
			// check route changes
			'$route' (to, from){
				this.fetch(this.query);
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
			fetch(params){
				if(this.$route.meta.mode != 'gerakanPublik'){
					if(this.$route.params.cu == 'semua'){
						this.disableColumnCu(false);
						this.$store.dispatch(this.kelas + '/index', params);
						this.excelDownloadUrl = this.kelas;
					}else{
						this.disableColumnCu(true);
						this.$store.dispatch(this.kelas + '/indexCu', [params, this.$route.params.cu]);
						this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu;
					}
				}else{
					if(this.$route.params.cu == 'semua'){
						this.disableColumnCu(false);
						this.$store.dispatch(this.kelas + '/indexGerakanPublik', params);
						this.excelDownloadUrl = this.kelas;
					}else{
						this.disableColumnCu(true);
						this.$store.dispatch(this.kelas + '/indexGerakanPublikCu', [params, this.$route.params.cu]);
						this.excelDownloadUrl = this.kelas + '/indexGerakanPublikCu/' + this.$route.params.cu;
					}
				}
			},
			disableColumnCu(status){
				this.columnData[4].disable = status;
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			ubahData(id) {
				this.$router.push({name: this.kelas + 'Edit', params: { id: id }});
			},
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.modalState = 'confirm-tutup';
				this.state = state;

				if(isMobile){
					this.selectedItem = itemMobile;
				}

				if (state == 'hapus') {
					this.modalTitle = 'Hapus ' + this.title + ' ' + this.selectedItem.name + ' ?';
					this.modalButton = 'Iya, Hapus';
				}
			},
			modalTutup() {
				this.modalShow = false;
				this.$store.dispatch(this.kelas + '/resetUpdateStat');
			},
			modalConfirmOk() {
				if (this.state == 'hapus') {
					this.$store.dispatch(this.kelas + '/destroy', this.selectedItem.id);
				}
			},
			downloadMateri(filename){
				axios.get('/api/download_folder/' + filename + '/dokumen', {
				responseType: 'blob'})
				.then(response => {
					FileSaver.saveAs(response.data, filename)
				});
      },
		},
		computed:{
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('global',{
				idCu: 'idCu'
			}),
			...mapGetters('cu',{
				modelCu: 'dataS',
				modelCuStat: 'dataStatS',
			}),
			...mapGetters('dokumen',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>