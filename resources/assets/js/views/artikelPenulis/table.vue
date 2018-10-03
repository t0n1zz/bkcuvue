<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelUrl="excelUrl" :isUploadExcel="true" @fetch="fetch">

			<!-- desktop -->
			<!-- button desktop -->
			<template slot="button-desktop">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light mb-1" v-if="profile.can && profile.can['create_artikel_penulis']">
					<i class="icon-plus3"></i> Tambah {{ title }}
				</router-link>

				<!-- ubah-->
				<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light mb-1" v-if="profile.can && profile.can['update_artikel_penulis']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah {{ title }}
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light mb-1" v-if="profile.can && profile.can['destroy_artikel_penulis']" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus {{ title }}
				</button>

			</template>

			<!-- button mobile -->
			<template slot="button-mobile">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-block mb-1" v-if="profile.can && profile.can['create_artikel_penulis']">
					<i class="icon-plus3"></i> Tambah {{ title }}
				</router-link>

				<!-- ubah-->
				<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light btn-block mb-1" v-if="profile.can && profile.can['update_artikel_penulis']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah {{ title }}
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-block mb-1" v-if="profile.can && profile.can['destroy_artikel_penulis']" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus {{ title }}
				</button>

			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<img :src="'/images/penulis/' + props.item.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm" width="40" v-if="props.item.gambar">
						<img :src="'/images/no_image.jpg'" width="40" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!columnData[3].hide">
						<check-value :value="props.item.deskripsi"></check-value>
					</td>
					<td v-if="!columnData[4].hide && !columnData[4].disable">
						<check-value :value="props.item.cu.name" :empty="columnData[4].groupNoKey" v-if="props.item.cu"></check-value>
						<span v-else>{{columnData[4].groupNoKey}}</span>
					</td>
					<td v-if="!columnData[5].hide">{{props.item.has_artikel_count}}</td>
					<td v-if="!columnData[6].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[7].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

		</data-viewer>
					
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import DataViewer from '../../components/dataviewer2.vue';
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
				selectedItem: [],
				query: {
					order_column: "name",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				excelUrl: '',
				columnData: [
					{
						title: 'No.',
						name: 'No.',
					},
					{
						title: 'Foto',
						name: 'gambar',
						hide: false,
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
						title: 'Deskripsi',
						name: 'deskripsi',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'CU',
						name: 'cu.name',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Artikel',
						name: 'has_artikel_count',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true
					},
					{
						title: 'Tgl. Buat',
						name: 'created_at',
						sort: true,
						hide: false,
						disable: false,
						filter: true
					},
					{
						title: 'Tgl. Ubah',
						name: 'updated_at',
						sort: true,
						hide: false,
						disable: false,
						filter: true
					}
				],
				modalShow: false,
				modalState: '',
				modalTitle: '',
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
			fetch(params){
				if(this.$route.params.cu == 'semua'){
					this.disableColumnCu(false);
					this.$store.dispatch(this.kelas + '/index', params);
					this.excelUrl = this.kelas;
				}else{
					this.disableColumnCu(true);
					this.$store.dispatch(this.kelas + '/indexCu', [params,this.$route.params.cu]);
					this.excelUrl = this.kelas + '/indexCu/' + this.$route.params.cu;
				}
			},
			disableColumnCu(status){
				this.columnData[4].disable = status;
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
				this.$store.dispatch(this.kelas + '/resetDataStat');
				this.$router.push({name: 'artikelFilterPenulisCu', params: { cu: id_cu, penulis: id }});
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
				idCu: 'idCu'
			}),
			...mapGetters('cu',{
				modelCu: 'dataS',
				modelCuStat: 'dataStatS',
			}),
			...mapGetters('artikelPenulis',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>