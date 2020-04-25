<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :isNoButtonRow="isNoButtonRow" :dataview="dataview" @fetch="fetch">

			<!-- button desktop -->
			<template slot="button-desktop">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['create_pertemuan_bkcu']">
					<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- ubah-->
				<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['update_pertemuan_bkcu']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<!-- status -->
				<button @click.prevent="modalConfirmOpen('status')" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['update_pertemuan_bkcu']" :disabled="!selectedItem.id">
					<i class="icon-calendar5"></i> Status
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['destroy_pertemuan_bkcu']" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

				<!-- daftar-->
				<button @click.prevent="detail(selectedItem.id)" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['index_pertemuan_bkcu']" :disabled="!selectedItem.id">
					<i class="icon-stack2"></i> Detail
				</button>

			</template>

			<!-- button mobile -->
			<template slot="button-mobile">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['create_pertemuan_bkcu']">
					<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- ubah-->
				<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['update_pertemuan_bkcu']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<!-- status -->
				<button @click.prevent="modalConfirmOpen('status')" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['update_pertemuan_bkcu']" :disabled="!selectedItem.id">
					<i class="icon-calendar5"></i> Status
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['destroy_pertemuan_bkcu']" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

				<!-- daftar-->
				<button @click.prevent="detail(selectedItem.id)" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['index_pertemuan_bkcu']" :disabled="!selectedItem.id">
					<i class="icon-stack2"></i> Detail
				</button>

			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td>
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<span v-html="$options.filters.statusDiklat(props.item.status)" @click.prevent="modalKeteranganBatalOpen(props.item.keteranganBatal)" v-if="props.item.status == '6'" style="cursor:pointer;"></span>
						<span v-html="$options.filters.statusDiklat(props.item.status)" v-else></span>
					</td>
			 		<td v-if="!columnData[2].hide">
						<check-value :value="props.item.kode_diklat"></check-value>
					</td>
					<td v-if="!columnData[3].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!columnData[4].hide && !columnData[4].disable">
						<check-value :value="props.item.provinces.name" v-if="props.item.provinces"></check-value>	
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[5].hide && !columnData[5].disable">
						<check-value :value="props.item.regencies.name" v-if="props.item.regencies"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[6].hide && !columnData[6].disable">
						<check-value :value="props.item.tempat.name" v-if="props.item.tempat"></check-value>
						<span v-else-if="props.item.tipe_tempat == 'ONLINE'">DILAKSANAKAN ONLINE</span>	
						<span v-else>Belum ditentukan tempat</span>	
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.periode"></check-value>
					</td>
					<td v-if="!columnData[8].hide" v-html="$options.filters.date(props.item.mulai)"></td>
					<td v-if="!columnData[9].hide" v-html="$options.filters.date(props.item.selesai)"></td>
					<td v-if="!columnData[10].hide">
						<check-value :value="props.item.peserta_max"></check-value>
					</td>
					<td v-if="!columnData[11].hide">
						<check-value :value="props.item.peserta_min"></check-value>
					</td>
					<td v-if="!columnData[12].hide" class="text-warp">
						<span v-if="props.item.sasaran">
							<label v-for="sasaran in props.item.sasaran" class="badge badge-primary ml-1">
								{{ sasaran.name }}
							</label>
						</span>
					</td>
					<td v-if="!columnData[13].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[14].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

			<!-- item mobile -->
			<template slot="item-mobile" slot-scope="props">
				<div class="col-lg-4 col-md-6">

					<div class="card border-left-3 rounded-left-0 cursor-pointer" :class="[gridColor(props.item.status)]" @click.prevent="detail(props.item.id)">
						<div class="card-header bg-light header-elements-inline">
							<h6 class="card-title"><check-value :value="props.item.kode_diklat"></check-value>
								</h6>
							<div class="header-elements">
								<span v-html="$options.filters.statusDiklat(props.item.status)"></span>
							</div>
						</div>
						<div class="card-body">
							<div class="d-sm-flex align-item-sm-center flex-sm-nowrap">
								<div>
									<h6 class="text-primary">{{ props.item.name }}</h6>

									<p class="mb-3" v-if="props.item.keterangan">{{ props.item.keterangan | trimString }}</p>
									
									<hr/>

									<div class="row">
										<div class="col-md-6">
											<ul class="list list-unstyled">
												<li>Mulai: <br/><span class="text-muted">{{ props.item.mulai | date }}</span></li>
												<li>Selesai: <br/><span class="text-muted">{{ props.item.selesai | date }}</span></li>
												<li>Peserta Maksimal: <br/><span class="text-muted"><check-value :value="props.item.peserta_max"></check-value></span></li>
												<li>Peserta Maksimal Per-CU: <br/><span class="text-muted"><check-value :value="props.item.peserta_max_cu"></check-value></span></li>
											</ul>
										</div>
										<div class="col-md-6">
											<ul class="list list-unstyled">
												<li>Tempat: <check-value :value="props.item.tempat.name" v-if="props.item.tempat" class="text-muted"></check-value><span class="text-muted" v-else>Belum ditentukan tempat</span></li>
												<li>Kabupaten/Kota: <check-value :value="props.item.regencies.name" v-if="props.item.regencies" class="text-muted"></check-value><span class="text-muted" v-else>-</span></li>
												<li>Provinsi: <check-value :value="props.item.provinces.name" v-if="props.item.provinces" class="text-muted"></check-value><span class="text-muted" v-else>-</span></li>
											</ul>
										</div>
									</div>
									
								</div>
							</div>
						</div>

						<div class="card-footer d-sm-flex justify-content-sm-between align-items-sm-center">
							<span v-if="props.item.sasaran">
								<label v-for="sasaran in props.item.sasaran" class="badge badge-primary ml-1">
									{{ sasaran.name }}
								</label>
							</span>
							<ul class="list-inline list-inline-dotted mb-0">
								<li class="list-inline-item"><i class="icon-users mr-2"></i> <check-value :value="props.item.has_peserta_count"></check-value></li>
								<li class="list-inline-item"><i class="icon-alarm mr-2"></i> <check-value :value="props.item.durasi"></check-value> jam</li>
							</ul>
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

			<!-- status -->
			<template slot="modal-body1">
				<form-status :kelas="kelas" :id="selectedItem.id" :status="selectedItem.status" :keteranganBatal="selectedItem.keteranganBatal"
				@tutup="modalTutup"></form-status>
			</template>

			<!-- keteranganBatal -->
			<template slot="modal-body2">

				<h5>Penjelasan pembatalan diklat</h5>
				<div class="card">
					<div class="card-body">
						{{ keteranganBatal }}
					</div>
				</div>

				<!-- divider -->
				<hr>
				
				<!-- tombol desktop-->
				<div class="text-center d-none d-md-block">
					<button class="btn btn-light" @click.prevent="modalTutup">
						<i class="icon-cross"></i> Tutup</button>
				</div>  

				<!-- tombol mobile-->
				<div class="d-block d-md-none">
					<button class="btn btn-light btn-block pb-2" @click.prevent="modalTutup">
						<i class="icon-cross"></i> Tutup</button>
				</div> 

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
	import formStatus from "./formStatus.vue";

	export default {
		components: {
			DataViewer,
			appModal,
			checkValue,
			formStatus
		},
		props:['title','kelas'],
		data() {
			return {
				selectedItem: [],
				query: {
					order_column: "mulai",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				dataview: '',
				isNoButtonRow:'',
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
						title: 'Kode',
						name: 'kode_diklat',
						tipe: 'string',
						sort: false,
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
						title: 'Provinsi',
						name: 'provinces.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Kabupaten/Kota',
						name: 'regencies.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tempat',
						name: 'tempat.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Periode',
						name: 'periode',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. Mulai',
						name: 'mulai',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. Selesai',
						name: 'selesai',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Peserta Max',
						name: 'peserta_max',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Peserta Min',
						name: 'peserta_min',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Sasaran',
						name: 'sasaran.sasaran.name',
						tipe: 'string',
						sort: false,
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
				if(this.$route.params.periode == 'semua'){
					this.$store.dispatch(this.kelas + '/index', params);
				}else{
					this.$store.dispatch(this.kelas + '/indexPeriode', [params, this.$route.params.periode]);
				}

				if(this.currentUser.id_cu == 0){
					this.dataview = 'list';
					this.isNoButtonRow = false;
				}else{
					this.dataview = 'grid';
					this.isNoButtonRow = true;
					this.query.limit = 15;
				}
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			ubahData(id) {
				this.$router.push({name: this.kelas + 'Edit', params: { id: id }});
			},
			detail(id) {
				this.$router.push({name: this.kelas + 'Detail', params: { id: id }});
			},
			saveStatus(){
				this.$validator.validateAll('formStatus').then((result) => {
					this.$store.dispatch(this.kelas + '/updateStatus', [this.selectedItem.id, this.formStatus]);
				});
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
			...mapGetters('pertemuanBKCU',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),	
			
		}
	}
</script>