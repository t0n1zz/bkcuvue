<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl"  :isNoButtonRow="isNoButtonRow" @fetch="fetch">

			<!-- button desktop -->
			<template slot="button-desktop">
				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['create_voting']">
					<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- status -->
				<button @click.prevent="modalConfirmOpen('status')" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['update_voting']" :disabled="!selectedItem.id">
					<i class="icon-calendar5"></i> Status
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['destroy_voting']" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

				<!-- detail-->
				<button @click.prevent="detail(selectedItem.id)" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['index_voting']" :disabled="!selectedItem.id">
					<i class="icon-stack2"></i> Detail
				</button>
			</template>

			<!-- button mobile -->
			<template slot="button-mobile">
					<!-- tambah -->
					<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['create_voting']">
						<i class="icon-plus3"></i> Tambah
					</router-link>

					<!-- status -->
					<button @click.prevent="modalConfirmOpen('status')" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['update_voting']" :disabled="!selectedItem.id">
						<i class="icon-calendar5"></i> Status
					</button>

					<!-- hapus -->
					<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['destroy_voting']" :disabled="!selectedItem.id">
						<i class="icon-bin2"></i> Hapus
					</button>

					<!-- detail -->
					<button @click.prevent="detail(selectedItem.id)" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['index_voting']" :disabled="!selectedItem.id">
						<i class="icon-stack2"></i> Detail
					</button>
			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td>
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide" v-html="$options.filters.checkStatus(props.item.status)">
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!columnData[3].hide && !columnData[3].disable">
						<check-value :value="props.item.cu.name" v-if="props.item.cu"></check-value>
						<span v-else>PUSKOPCUINA</span>
					</td>
					<td v-if="!columnData[4].hide">
						<check-value :value="props.item.kegiatan.name" v-if="props.item.kegiatan"></check-value>
						<check-value :value="props.item.name_kegiatan" v-else></check-value>
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.suara"></check-value>
					</td>
					<td v-if="!columnData[6].hide">
						<check-value :value="props.item.suara_ok"></check-value>
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
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" :content="modalContent" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
		</app-modal>

	</div>
</template>

<script>
	import _ from 'lodash';
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
				isNoButtonRow:'',
				excelDownloadUrl:'',
				columnData: [
					{
						title: 'No.',
						name: 'No.',
					},
					{
						title: 'Status',
						name: 'status',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
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
						title: 'CU',
						name: 'cu.name',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Kegiatan',
						name: 'kegiatan.name',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Suara',
						name: 'suara',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Suara Ok',
						name: 'suara_ok',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. / Waktu Buat',
						name: 'created_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. / Waktu Ubah',
						name: 'updated_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					}
				],
				keteranganBatal: '',
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
			'$route' (to, from){
				// check current page meta
				this.fetch(this.query);
			},
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
				if(this.$route.params.cu == 'semua'){
					this.disableColumnCu(false);
					this.$store.dispatch(this.kelas + '/index', params);
					this.excelDownloadUrl = this.kelas;
				}else{
					this.disableColumnCu(true);
					this.$store.dispatch(this.kelas + '/indexCu', [params,this.$route.params.cu]);
					this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu;
				}
			},
			disableColumnCu(status){
				this.columnData[3].disable = status;
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			detail(id) {
				this.$router.push({name: this.kelas + 'Detail', params: { id: id }});
			},
			modalConfirmOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.modalState = 'confirm-tutup'; 
				this.state = state;

				if(isMobile){
					this.selectedItem = itemMobile;
				}

				if (state == 'hapus') {
					this.modalTitle = 'Hapus ' + this.title + ' ' + this.selectedItem.name + ' ini?';
					this.modalButton = 'Iya, Hapus';
					this.modalColor = '';
				}else if (state == 'status') {
					if (this.selectedItem.status == 0) {
						this.modalTitle = 'Aktifkan ' + this.selectedItem.name + ' ?';
						this.modalButton = 'Iya, aktifkan';
					} else {
						this.modalTitle = 'Tidak aktifkan ' + this.selectedItem.name + ' ?';
						this.modalButton = 'Iya, tidak aktifkan';
					}
				}
			},
			modalTutup() {
				this.modalShow = false;
				this.$store.dispatch(this.kelas + '/resetUpdateStat');
			},
			modalConfirmOk() {
				if (this.state == 'hapus') {
					this.$store.dispatch(this.kelas + '/destroy', this.selectedItem.id);
				} else if (this.state == "status"){
					this.$store.dispatch(this.kelas + '/updateStatus', [this.selectedItem.id, this.selectedItem.id_cu]);
				}
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('voting',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),	
			
		}
	}
</script>