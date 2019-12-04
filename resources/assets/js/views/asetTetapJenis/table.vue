<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl" :isUploadExcel="false" @fetch="fetch">

			<!-- desktop -->
			<!-- button desktop -->
			<template slot="button-desktop">

				<!-- tambah -->
				<button @click.prevent="modalOpen('tambah')" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['create_aset_tetap_jenis']">
					<i class="icon-plus3"></i> Tambah
				</button>

				<!-- ubah-->
				<button @click.prevent="modalOpen('ubah')" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['update_aset_tetap_jenis']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<!-- hapus -->
				<button @click.prevent="modalOpen('hapus')" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['destroy_aset_tetap_jenis']" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

			</template>

			<!-- button mobile -->
			<template slot="button-mobile">

				<!-- tambah -->
				<button @click.prevent="modalOpen('tambah')" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['create_aset_tetap_jenis']" :disabled="!selectedItem.id">
					<i class="icon-plus3"></i> Tambah
				</button>

				<!-- ubah-->
				<button @click.prevent="modalOpen('ubah')" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['update_aset_tetap_jenis']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<!-- hapus -->
				<button @click.prevent="modalOpen('hapus')" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['destroy_aset_tetap_jenis']" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>
				
			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<check-value :value="props.item.kode"></check-value>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!columnData[3].hide">
						<check-value :value="props.item.kelompok.kode" v-if="props.item.kelompok"></check-value>
						<span v-else>-</span>
					</td>
					<td v-if="!columnData[4].hide">
						<check-value :value="props.item.kelompok.name" v-if="props.item.kelompok"></check-value>
						<span v-else>-</span>
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.keterangan"></check-value>
					</td>
					<td v-if="!columnData[6].hide">{{props.item.has_aset_tetap_count}}</td>
					<td v-if="!columnData[7].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[8].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

		</data-viewer>
					
		<!-- modal -->
		<app-modal :show="modalShow" :color="modalColor" :state="modalState" :title="modalTitle" :content="modalContent" :button="modalButton" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<template slot="modal-body1">
        <form-data :kelas="kelas" :mode="state" :selected="selectedItem"
				@tutup="modalTutup"></form-data>
			</template>
		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import DataViewer from '../../components/dataviewer2.vue';
	import appModal from '../../components/modal';
	import checkValue from '../../components/checkValue.vue';
	import formData from "./form.vue";

	export default {
		components: {
			DataViewer,
			appModal,
			checkValue,
			formData
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
				excelDownloadUrl: '',
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
						title: 'Kode',
						name: 'kode',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
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
						title: 'Kode Kelompok',
						name: 'kelompok.kode',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Nama Kelompok',
						name: 'kelompok.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Keterangan',
						name: 'keterangan',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Jumlah',
						name: 'has_aset_tetap_count',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false
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
				modalContent:'',
				modalButton: '',
				modalColor: '',
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
					this.fetch(this.query);
				}else if(value === "fail"){
					this.modalContent = this.updateMessage;
				}else{
					this.modalContent = '';
				}
			}
    },
		methods: {
			fetch(params){
				this.$store.dispatch(this.kelas + '/index', params);
				this.excelDownloadUrl = this.kelas;
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
				} else if (state == 'tambah') {
					this.modalState = 'normal1';
          this.modalColor = 'bg-primary';
          this.modalTitle = 'Tambah jenis aset tetap';
				} else if (state == 'ubah'){
					this.modalState = 'normal1';
          this.modalColor = 'bg-primary';
          this.modalTitle = 'Ubah jenis aset tetap dengan nama: ' + this.selectedItem.name + ' ?';
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
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('asetTetapJenis',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>