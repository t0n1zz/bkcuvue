<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl"  :isNoButtonRow="isNoButtonRow" :dataview="dataview" @fetch="fetch">
			<!-- button desktop -->
			<template slot="button-desktop">

					<!-- tambah -->
					<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['create_diklat_bkcu']">
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

			</template>	 

			<!-- button mobile -->
			<template slot="button-mobile">
					<!-- tambah -->
					<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['create_diklat_bkcu']">
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

			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<check-value :value="props.item.kode_sertifikat"></check-value>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					
				</tr>
			</template>

			<!-- item mobile -->
			<template slot="item-mobile" slot-scope="props">
				<div class="col-lg-4 col-md-6">
					<div class="card cursor-pointer" @click.prevent="ubahData(props.item.id)">						
						<div class="card-header bg-light header-elements-inline">
							<h6 class="card-title"><check-value :value="props.item.kode_sertifikat"></check-value>
								</h6>
						</div>
						<div class="card-body">
							<template>
								<img :src="'/images/sertifikatKegiatan/' + props.item.gambar + '.jpg'" class="img-fluid wmin-sm" v-if="props.item.gambar">
							</template>
							
							<hr/>
							<h6 class="text-primary">{{ props.item.nama_sertifikat }}</h6>
							
							<hr/>

							<div class="row">
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>Kode: <span class="text-muted">{{ props.item.kode_sertifikat }}</span></li>
										</ul>
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li>Nama: <span class="text-muted">{{ props.item.name }}</span></li>
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
			checkValue,
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
				dataview: '',
				isNoButtonRow:'',
				excelDownloadUrl:'',
				columnData: [
					{
						title: 'No.',
						name: 'No.',
					},
					{
						title: 'Kode',
						name: 'kode_sertifikat',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
						
					},
					{
						title: 'Nama',
						name: 'name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
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
		// updated(){
		// 	console.log(this.selectedItem);
		// },
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
					this.dataview = 'list';
					this.isNoButtonRow = false;
				
					this.$store.dispatch(this.kelas + '/index', params);
					this.excelDownloadUrl = this.kelas;
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			ubahData(id) {
				this.$router.push({name: this.kelas + 'Edit', params: { id: id }});
			},
			modalConfirmOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;

				if(isMobile){
					this.selectedItem = itemMobile;
				}

				if (state == 'hapus') {
					this.modalState = 'confirm-tutup';
					this.modalTitle = 'Hapus ' + this.title + ' ' + this.selectedItem.name + ' ini?';
					this.modalButton = 'Iya, Hapus';
					this.modalColor = '';
				}else if (state == 'status') {
					this.modalState = 'normal1';
					this.modalTitle = 'Ubah status ' + this.title + ' ' + this.selectedItem.name + ' ini?';
					this.modalColor = 'bg-primary';
				}else if (state == 'keteranganBatal') {
					this.modalState = 'normal2';
					this.modalTitle = 'Keterangan pembatalan ' + this.title + ' ' + this.selectedItem.name;
					this.modalColor = 'bg-primary';
					this.keteranganBatal = this.selectedItem.keteranganBatal;
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
				this.modalShow = false;
				this.$store.dispatch(this.kelas + '/resetUpdateStat');
			},
			modalConfirmOk() {
				if (this.state == 'hapus') {
					this.$store.dispatch(this.kelas + '/destroy', this.selectedItem.id);
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
			...mapGetters('sertifikatKegiatan',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),	
			
		}
	}
</script>