<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :isUploadExcel="true" @fetch="fetch">

			<!-- button desktop -->
			<template slot="button-desktop">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light mb-1" v-if="profile.can && profile.can['create_' + kelas]">
					<i class="icon-plus3"></i> Tambah {{ title }}
				</router-link>

				<!-- ubah-->
				<button @click.prevent="ubahData(selectedItem.id, selectedItem.id_cu)" class="btn btn-light mb-1" v-if="profile.can && profile.can['update_' + kelas]" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah {{ title }}
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light mb-1" v-if="profile.can && profile.can['destroy_' + kelas]" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus {{ title }}
				</button>

				<!-- terbitkan -->
				<button @click.prevent="modalConfirmOpen('updateTerbitkan')" class="btn btn-light mb-1" v-if="profile.can && profile.can['terbitkan_' + kelas]"  :disabled="!selectedItem.id">
					<i class="icon-file-upload"></i> <span v-if="selectedItem.terbitkan == 1">Tidak Terbitkan</span>
					<span v-else>Terbitkan</span> {{ title }}
				</button>

				<!-- utamakan -->
				<button @click.prevent="modalConfirmOpen('updateUtamakan')" class="btn btn-light mb-1" v-if="profile.can && profile.can['utamakan_' + kelas]" :disabled="!selectedItem.id">
					<i class="icon-pushpin"></i> <span v-if="selectedItem.utamakan == 1">Tidak Utamakan</span>
					<span v-else>Utamakan</span> {{ title }}
				</button>

			</template>

			<!-- button mobile -->
			<template slot="button-mobile">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-block mb-1" v-if="profile.can && profile.can['create_' + kelas]">
					<i class="icon-plus3"></i> Tambah {{ title }}
				</router-link>

				<!-- ubah-->
				<button @click.prevent="ubahData(selectedItem.id, selectedItem.id_cu)" class="btn btn-light btn-block mb-1" v-if="profile.can && profile.can['update_' + kelas]" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah {{ title }}
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-block mb-1" v-if="profile.can && profile.can['destroy_' + kelas]" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus {{ title }}
				</button>

				<!-- terbitkan -->
				<button @click.prevent="modalConfirmOpen('updateTerbitkan')" class="btn btn-light btn-block mb-1" v-if="profile.can && profile.can['terbitkan_' + kelas]"  :disabled="!selectedItem.id">
					<i class="icon-file-upload"></i> <span v-if="selectedItem.terbitkan == 1">Tidak Terbitkan</span>
					<span v-else>Terbitkan</span> {{ title }}
				</button>

				<!-- utamakan -->
				<button @click.prevent="modalConfirmOpen('updateUtamakan')" class="btn btn-light btn-block mb-1" v-if="profile.can && profile.can['utamakan_' + kelas]" :disabled="!selectedItem.id">
					<i class="icon-pushpin"></i> <span v-if="selectedItem.utamakan == 1">Tidak Utamakan</span>
					<span v-else>Utamakan</span> {{ title }}
				</button>

			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id == props.item.id }" @click="selectedRow(props.item)" class="text-nowrap">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<img :src="'/images/artikel/' + props.item.gambar + 'n.jpg'" width="40" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
						<img :src="'/images/no_image.jpg'" width="40" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!columnData[3].hide && !columnData[3].disable">
						<check-value :value="props.item.artikel_kategori.name" v-if="props.item.artikel_kategori"></check-value>
						<span v-else>-</span>
					</td>
					<td v-if="!columnData[4].hide && !columnData[4].disable">
						<check-value :value="props.item.artikel_penulis.name" v-if="props.item.artikel_penulis"></check-value>
						<span v-else>-</span>
					</td> 
					<td v-if="!columnData[5].hide && !columnData[5].disable">
						<check-value :value="props.item.cu.name" v-if="props.item.cu"></check-value>
						<span v-else>Puskopdit BKCU Kalimantan</span>
					</td>
					<td v-if="!columnData[6].hide" v-html="$options.filters.checkStatus(props.item.terbitkan)"></td>
					<td v-if="!columnData[7].hide" v-html="$options.filters.checkStatus(props.item.utamakan)"></td>
					<td v-if="!columnData[8].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[9].hide">
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
				columnData: [
					{
						title: 'No.',
						name: 'No.',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false
					},
					{
						title: 'Foto',
						name: 'gambar',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false
					},
					{
						title: 'Judul',
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
						name: 'artikelKategori.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Penulis',
						name: 'artikelPenulis.name',
						sort: false,
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
						title: 'Terbitkan',
						name: 'terbitkan',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Utamakan',
						name: 'utamakan',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Tgl. Tulis',
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

			profileStat(value){
				if(value == 'success'){
					if(this.modelKategoriStat == 'success' && this.profile.id_cu != this.modelKategori.id_cu && this.profile.id_cu != 0){
						this.$router.push({name: 'notFound'});
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
			fetch(params){
				if(this.$route.params.kategori){
					this.$store.dispatch('artikelKategori/edit',this.$route.params.kategori);
				}else if(this.$route.params.penulis){
					this.$store.dispatch('artikelPenulis/edit',this.$route.params.penulis);
				}else{
					if(this.$route.params.cu == 'semua'){
						this.disableColumnCu(false);
						this.$store.dispatch(this.kelas + '/index', params);
					}else{
						this.disableColumnCu(true);
						this.$store.dispatch(this.kelas + '/indexCu', [params,this.$route.params.cu]);
					}
				}
			},
			disableColumnCu(status){
				this.columnData[5].disable = status;
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
				idCu: 'idCu'
			}),
			...mapGetters('cu',{
				modelCu: 'dataS',
				modelCuStat: 'dataStatS',
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