<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :dataview="'grid'"  :excelDownloadUrl="excelDownloadUrl" @fetch="fetch">

			<!-- button desktop -->
			<template slot="button-desktop">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['create_produk_cu']">
					<i class="icon-plus3"></i> Tambah
				</router-link>

			</template>

			<!-- button mobile -->
			<template slot="button-mobile">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['create_produk_cu']">
					<i class="icon-plus3"></i> Tambah
				</router-link>

			</template>

			<!-- item mobile -->
			<template slot="item-mobile" slot-scope="props">
				<div class="col-md-6">

					<div class="card border-left-3 rounded-left-0" :class="[gridColor(props.item.tipe)]">
						<div class="card-header bg-light header-elements-inline">
							<h6 class="card-title"><check-value :value="props.item.kode_produk"></check-value></h6>
							<div class="header-elements">
								<span v-html="$options.filters.tipeProdukCu(props.item.tipe)"></span>
							</div>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col-md-4 col-lg-2">
									<img :src="'/images/produk_cu/' + props.item.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
									<img :src="'/images/no_image.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
									
									<hr class="d-block d-sm-none"/>
								</div>
								<div class="col-md-8 col-lg-10">
									<span v-if="props.item.jalinan == 1" class="badge badge-primary mb-1"><i class="icon-shield-check"></i> Disolidaritaskan Jalinan</span>
									<h6 class="text-primary">{{ props.item.name }} {{ props.item.cu ? ' - CU ' + props.item.cu.name : ''}}</h6>
									<p v-html="props.item.keterangan"></p>
								</div>
								<div class="col-12">
									<hr/>
									<!-- aturan -->
									<div class="card-group-control card-group-control-right" :id="'parent_' + props.item.id">
										
										<div class="row">

											<!-- aturan setor -->
											<div class="col-md-6 col-lg-6">
												<div class="card">
													<div class="card-header">
														<h6 class="card-title">
															<a data-toggle="collapse" class="collapsed text-default" :href="'#aturan_setor_' + props.item.id">{{ columnData[7].title }}</a>
														</h6>
													</div>

													<div :id="'aturan_setor_' + props.item.id" class="collapse" :data-parent="'#parent_' + props.item.id">
														<div class="card-body" v-html="props.item.aturan_setor">
														</div>
													</div>
												</div>
											</div>

											<!-- aturan tarik -->
											<div class="col-md-6 col-lg-6" v-if="props.item.tipe == 'Simpanan Pokok' || props.item.tipe == 'Simpanan Wajib' || props.item.tipe == 'Simpanan Non Saham'">
												<div class="card">
													<div class="card-header">
														<h6 class="card-title">
															<a data-toggle="collapse" class="collapsed text-default" :href="'#aturan_tarik_' + props.item.id">{{ columnData[8].title }}</a>
														</h6>
													</div>

													<div :id="'aturan_tarik_' + props.item.id" class="collapse" :data-parent="'#parent_' + props.item.id">
														<div class="card-body" v-html="props.item.aturan_tarik">
														</div>
													</div>
												</div>
											</div>

											<!-- aturan balas jasa -->
											<div class="col-md-6 col-lg-6">
												<div class="card">
													<div class="card-header">
														<h6 class="card-title">
															<a data-toggle="collapse" class="collapsed text-default" :href="'#aturan_balas_jasa_' + props.item.id">{{ columnData[9].title }}</a>
														</h6>
													</div>

													<div :id="'aturan_balas_jasa_' + props.item.id" class="collapse" :data-parent="'#parent_' + props.item.id">
														<div class="card-body" v-html="props.item.aturan_balas_jasa">
														</div>
													</div>
												</div>
											</div>

											<div class="col-md-6 col-lg-6">
												<!-- aturan lain-->
												<div class="card pb-0 mb-0">
													<div class="card-header">
														<h6 class="card-title">
															<a data-toggle="collapse" class="collapsed text-default" :href="'#aturan_lain_' + props.item.id">{{ columnData[10].title }}</a>
														</h6>
													</div>

													<div :id="'aturan_lain_' + props.item.id" class="collapse" :data-parent="'#parent_' + props.item.id">
														<div class="card-body" v-html="props.item.aturan_lain">
														</div>
													</div>
												</div>
											</div>
										</div>

									</div>
								</div>

							</div>
						</div>

						<div class="card-footer d-sm-flex justify-content-sm-between align-items-sm-center">
							<ul class="list-inline list-inline-dotted mb-1">
								<li class="list-inline-item"><strong>{{columnData[11].title}}:</strong> &nbsp; <span v-html="$options.filters.dateTime(props.item.created_at)"></span></li>
								<li class="list-inline-item" v-if="props.item.created_at !== props.item.updated_at"><strong>{{columnData[12].title}}:</strong> &nbsp; <span v-html="$options.filters.dateTime(props.item.updated_at)"></span></li>
							</ul>

							<!-- btn desktop -->
							<div class="mt-2 mt-sm-0 d-none d-sm-block">
								<!-- ubah-->
								<button @click.prevent="ubahData(props.item.id)" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['update_produk_cu']" >
									<i class="icon-pencil5"></i> Ubah
								</button>

								<!-- hapus -->
								<button @click.prevent="modalConfirmOpen('hapus',true,props.item)" class="btn btn-light ml-2 mb-1" v-if="currentUser.can && currentUser.can['destroy_produk_cu']">
									<i class="icon-bin2"></i> Hapus
								</button>
							</div>

							<!-- btn mobile -->
							<div class="d-block d-sm-none">
								<!-- ubah-->
								<button @click.prevent="ubahData(props.item.id)" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['update_produk_cu']" >
									<i class="icon-pencil5"></i> Ubah
								</button>

								<!-- hapus -->
								<button @click.prevent="modalConfirmOpen('hapus',true,props.item)" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['destroy_produk_cu']">
									<i class="icon-bin2"></i> Hapus
								</button>
							</div>
						</div>
					</div>

				</div>
			</template>

		</data-viewer>
					
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" :content="modalContent" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import truncate from 'vue-truncate-collapsed';
	import DataViewer from '../../components/dataviewer2.vue';
	import appModal from '../../components/modal';
	import collapseButton from '../../components/collapseButton.vue';
	import checkValue from '../../components/checkValue.vue';

	export default {
		components: {
			DataViewer,
			truncate,
			appModal,
			collapseButton,
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
				excelDownloadUrl:'',
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
						title: 'Tipe',
						name: 'tipe',
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
						title: 'Kode Produk dan Pelayanan',
						name: 'kode_produk',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'CU',
						name: 'cu.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Keterangan',
						name: 'keterangan',
					},
					{
						title: 'Aturan Setor',
						name: 'aturan_setor',
					},
					{
						title: 'Aturan Tarik',
						name: 'aturan_tarik',
					},
					{
						title: 'Aturan Balas Jasa',
						name: 'aturan_balas_jasa',
					},
					{
						title: 'Aturan Lain',
						name: 'aturan_lain',
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
					this.excelDownloadUrl = this.kelas;
				}else{
					this.disableColumnCu(true);
					this.$store.dispatch(this.kelas + '/indexCu', [params,this.$route.params.cu]);
					this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu;
				}
			},
			disableColumnCu(status){
				this.columnData[5].disable = status;
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
				}
			},
			modalOpen(value){
				this.modalShow = true;
				this.modalState = 'content-tutup';
				this.modalContent = value;
				this.modalButton = 'Tutup';
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
				if(value == 'Simpanan Pokok'){
					return 'border-left-primary-400';
				}else if(value == 'Simpanan Wajib'){
					return 'border-left-warning-400';
				}else if(value == 'Simpanan Non Saham'){
					return 'border-left-secondary-400';
				}else if(value == 'Pinjaman Kapitalisasi'){
					return 'border-left-success-400';
				}else if(value == 'Pinjaman Umum'){
					return 'border-left-primary-400';
				}else if(value == 'Pinjaman Produktif'){
					return 'border-left-green-400';
				}
      },
		},
		computed: {
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
			...mapGetters('produkCu',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			})
		}
	}
</script>