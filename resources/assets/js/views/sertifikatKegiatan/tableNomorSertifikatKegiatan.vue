<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title"  :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl"  :excelUploads="excelUploads" :isNoButtonRow="isNoButtonRow" :dataview="dataview" @fetch="fetch">
			<!-- button desktop -->
			<template slot="button-desktop">

					<router-link :to="{ name: kelas + 'GetCreate'}" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['create_diklat_bkcu']">
						<i class="icon-plus3"></i> Tambah
					</router-link>

					<!-- ubah--> 
					<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['create_diklat_bkcu']" :disabled="!selectedItem.id">
						<i class="icon-pencil5"></i> Ubah
					</button>

					<!-- hapus -->
					<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['create_diklat_bkcu']" :disabled="!selectedItem.id">
						<i class="icon-bin2"></i> Hapus
					</button>
					<!-- detail-->
					<button @click.prevent="detail(selectedItem.id)" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['index_diklat_bkcu']" :disabled="!selectedItem.id">
						<i class="icon-stack2"></i> Detail
					</button>

			</template>	 

			<!-- button mobile -->
			<template slot="button-mobile">
					<!-- tambah -->
					<router-link :to="{ name: kelas + 'GetCreate'}" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['create_diklat_bkcu']">
						<i class="icon-plus3"></i> Tambah
					</router-link>

					<!-- ubah-->
					<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['create_diklat_bkcu']" :disabled="!selectedItem.id">
						<i class="icon-pencil5"></i> Ubah
					</button>

					<!-- hapus -->
					<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['create_diklat_bkcu']" :disabled="!selectedItem.id">
						<i class="icon-bin2"></i> Hapus
					</button>

					<button @click.prevent="detail(selectedItem.id)" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['index_diklat_bkcu']" :disabled="!selectedItem.id">
						<i class="icon-stack2"></i> Detail
					</button>

			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<check-value :value="props.item.kegiatan_name"></check-value>
					</td>
					<td v-if="!columnData[2].hide">
						 <check-value :value="props.item.periode"></check-value>
					</td>
					<td v-if="!columnData[3].hide">
						<check-value :value="props.item.jumlah_nomor_sertifikat"></check-value>
					</td>
					<td v-if="!columnData[4].hide">
						<check-value :value="props.item.created_at"></check-value>
					</td>
				</tr>
			</template>

			<!-- item mobile -->
			<template slot="item-mobile" slot-scope="props">
				<div class="col-lg-4 col-md-6">
					<div class="card cursor-pointer" @click.prevent="ubahData(props.item.id)">						
						<div class="card-header bg-light header-elements-inline">
							<h6 class="card-title"><check-value :value="props.item.kegiatan_name"></check-value>
								</h6>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>Nama Kegiatan: <span class="text-muted">{{ props.item.kegiatan_name }}</span></li>
										</ul>
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>Periode: <span class="text-muted">{{ props.item.periode}}</span></li>
										</ul>
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>Jumlah Nomor Sertifikat: <span class="text-muted">{{ props.item.jumlah_nomor_sertifikat }}</span></li>
										</ul>
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>Tanggal Pengambilan Nomor: <span class="text-muted">{{ props.item.created_at }}</span></li>
										</ul>
								</div>
							</div>
						</div>					
					</div>
				</div>
			</template>

		</data-viewer>
					
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" :content="modalContent" :color="modalColor" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
			
			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}

			</template>
			
			<!-- <template slot="modal-body2">
				<detail-nomor-sertifikat-kegiatan 
						:selected="selectedItem"
						@tutup="modalTutup" v-if="state == 'detail'"></detail-nomor-sertifikat-kegiatan>
			</template> -->
		</app-modal>

	</div>
</template>

<script>
	import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import DataViewer from '../../components/dataviewer2.vue';
	import appModal from '../../components/modal';
	import checkValue from '../../components/checkValue.vue';
	import formNomorSertifikatKegiatan from './formNomorSertifikatKegiatan.vue';
	import detailNomorSertifikatKegiatan from './detailNomorSertifikatKegiatan.vue';

	export default {
		components: {
			DataViewer,
			appModal,
			checkValue,
			formNomorSertifikatKegiatan,
			detailNomorSertifikatKegiatan
		},
		props:['title','kelas'],
		data() {
			return {
				selectedItem: [],
				mode: '',
				idSertifikat: null,
				nextPageRoute:'sertifikatKegiatanGetDetail',
				query: {
					order_column: "kegiatan_name",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				excelUploads:[
					{
						enabled: true,
						url: 'sertifikatKegiatan/uploadExcelPeserta',
						format_url: 'formatUploadPeserta.xlsx',
						next_page_route: 'sertifikatKegiatanGetDetail',
						button: 'Upload Peserta'
					},
				],
				dataview: '',
				isNoButtonRow:'',
				excelDownloadUrl:'',
				columnData: [
					{
						title: 'No.',
						name: 'No.',
					},
					{
						title: 'Nama Kegiatan',
						name: 'kegiatan_name',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
						
					},
					{
						title: 'Periode',
						name: 'periode',
						tipe: 'integer',
						sort: true,
						hide: false,
						disable: false,
						filter: false,
						filterDefault: false
					},
					{
						title: 'Jumlah Nomor Sertifikat',
						name: 'jumlah_nomor_sertifikat',
						tipe: 'integer',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: false
					},
					{
						title: 'Tanggal Pengambilan Nomor',
						name: 'created_at',
						tipe: 'date',
						sort: true,
						hide: false,
						disable: false,
						filter: false,
						filterDefault: false
					}
				],
				keteranganBatal: '',
				state: '',
				modalShow: false,
				modalState: '',
				modalColor: '',
				modalTitle: '',
				modalContent: '',
				modalButton: ''
			}
	},
	created(){
		this.fetch(this.query);
	},
	watch: {
		'$route'(to, from) {
			// check current page meta
			this.fetch(this.query);
		},
		responseDataExcel() {
			if(this.responseDataExcel.uploaded === true){
				this.idSertifikat = this.responseDataExcel.sertifikat_id;
			}
		},
		idSertifikat(newVal) {
			this.excelUploads = [
			{
				enabled: true,
				url: 'sertifikatKegiatan/uploadExcelPeserta',
				format_url: 'formatUploadPeserta.xlsx',
				next_page_route: 'sertifikatKegiatanGetDetail',
				params: { id: newVal },  // update sesuai nilai baru
				button: 'Upload Peserta'
			},
			];
		},
      	updateStat(value) {
				this.modalState = value;
				this.modalButton = 'Ok';
				
				if (value === "success") {
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
					this.dataview = 'list';
					this.isNoButtonRow = false;
					this.$store.dispatch(this.kelas + '/indexNomorSertifikat', params);
					this.excelDownloadUrl = this.kelas;

				// if(this.currentUser.can['update_diklat_bkcu']){
				// 	this.excelUploads[0].enabled = true;
				// }else{
				// 	this.excelUploads[0].enabled = false;
				// }
				
			},
			fetchPesertaUpload(){
				if(this.currentUser.can['update_diklat_bkcu']){
					axios.get('/api/pesertaUpload/count')
						.then(response => {
							this.pesertaUpload = response.data.model;
							this.pesertaUploadStat = 'success';
						})
						.catch(error => {
							this.pesertaUpload = error.response;
							this.pesertaUploadStat = 'fail';
						});
				}
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			tambah() {
				this.mode = 'tambah';
				this.modalConfirmOpen('nomorSertifikatKegiatan');
			},
			detail(id){
				this.$router.push({name: this.kelas + 'GetDetail', params: { id: id}});
			},
			ubahData(id) {
				this.$router.push({name: this.kelas + 'GetEdit', params: { id: id}});
			},
			modalConfirmOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;

				if(isMobile){
					this.selectedItem = itemMobile;
				}

				if (state == 'hapus') {
					this.modalState = 'confirm-tutup';
					this.modalTitle = 'Hapus ' + this.title + ' ' + this.selectedItem.kegiatan_name + ' ini?';
					this.modalButton = 'Iya, Hapus';
					this.modalColor = '';
				}if (state == 'nomorSertifikatKegiatan') {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalSize = 'modal-full';
					this.modalTitle = 'Mengambil Nomor Sertifikat';
					}
			},
			modalKeteranganBatalOpen(value) {
				this.modalShow = true;
				this.modalState = 'normal2';
				this.modalTitle = 'Keterangan pembatalan ' + this.title + ' ' + this.selectedItem.name;
				this.modalColor = 'bg-primary';
				this.keteranganBatal = value;
			},
			modalTutup() {
				this.selectedItem = '';
				this.modalShow = false;
				this.$store.dispatch(this.kelas + '/resetUpdateStat');
			},
			modalConfirmOk() {
				if (this.state == 'hapus') {
					this.$store.dispatch(this.kelas + '/destroyNomorSertifikatKegiatan', this.selectedItem.id);
				}
			},
			gridColor(value) {
				if(value == 1){
					return 'border-left-primary-400';
				}else if(value == 2){
					return 'border-left-warning-400';
				}else if(value == 3){
					return 'border-left-secondary-400';
				}else if(value == 4){
					return 'border-left-success-400';
				}else if(value == 5){
					return 'border-left-primary-400';
				}else if(value == 6){
					return 'border-left-danger-400';
				}
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('global', {
				responseDataExcel : 'dataExcel'
			}),
			...mapGetters('sertifikatKegiatan',{
				itemData: 'dataNomor',
				itemDataStat: 'dataNomorStat',
				updateMessage: 'update',
				updateStat: 'updateStat',
				updateResponse: 'update',
				updateStat: 'updateStat',
			}),	
			
		}
	}
</script>