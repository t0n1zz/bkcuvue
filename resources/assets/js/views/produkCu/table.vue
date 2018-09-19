<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :isUploadExcel="true" @fetch="fetch">

			<!-- desktop -->
			<!-- button desktop -->
			<template slot="button-desktop">

				<!-- tambah -->
				<div class="btn-group pb-5" v-if="profile.can && profile.can['create_produk_cu']">
					<router-link :to="{ name: kelas + 'Create'}" class="btn btn-default btn-icon" v-tooltip:top="'Tambah ' +  title">
						<i class="icon-plus3"></i> Tambah 
					</router-link>
				</div>
			</template>

			<!-- mobile -->
			<!-- button mobile -->
			<template slot="button-mobile" class="hidden-print" v-if="profile.can && profile.can['create_produk_cu']">
				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-default btn-icon btn-block">
					<i class="icon-plus3"></i> Tambah
				</router-link>
			</template>
	
			<!-- item mobile -->
			<template slot="item-mobile" slot-scope="props">
				<div class="panel panel-white">
					<div class="panel-heading">
						<h6 class="panel-title">
							<b>Kode:</b> [ {{ props.item.kode_produk }} ]

							<!-- cu -->
							<span v-if="!columnData[4].disable">
								<span class="label label-info pull-right" v-if="props.item.cu">CU {{ props.item.cu.name }}</span>
								<span class="label label-info pull-right" v-else>-</span>
							</span>
							
						</h6>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-sm-12">
								<h5 class="form-wizard-title text-semibold text-primary">

									<!-- index -->
								<span class="form-wizard-count">{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page}}</span> 

									<!-- name -->
									{{ props.item.name }}

									<!-- keterangan -->
									<small class="display-block" v-html="props.item.keterangan"></small>
								</h5>
							</div>
							<div class="col-md-4">
								<img :src="'/images/' + kelas + '/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive" v-if="props.item.gambar">
								<img :src="'/images/no_image.jpg'" class="img-rounded img-responsive" v-else>
								<br/>
							</div>
							<div class="col-md-4">
								<h5><b>1. Aturan Tarik:</b></h5>
								<p v-html="props.item.aturan_tarik"></p>
								<h5><b>2. Aturan Setor:</b></h5>
								<p v-html="props.item.aturan_setor"></p>
							</div>
							<div class="col-md-4">
								<h5><b>3. Aturan Balas Jasa:</b></h5>
								<p v-html="props.item.aturan_balas_jasa"></p>
								<h5><b>4. Aturan Lain-lain:</b></h5>
								<p v-html="props.item.aturan_lain"></p>
							</div>

							<div class="col-sm-12">
								<hr>
								<!-- mobile -->
								<div class="text-right button-toolbar hidden-xs">
							
									<!-- update -->
									<button @click.prevent="ubahData(props.item.id)" class="btn btn-default btn-icon" v-if="profile.can && profile.can['update_produk_cu']">
										<i class="icon-pencil5"></i> Ubah
									</button>
									
									<!-- destroy -->
									<button @click.prevent="modalConfirmOpen('hapus',true,props.item)" class="btn btn-default btn-icon" v-if="profile.can && profile.can['destroy_produk_cu']">
										<i class="icon-bin2"></i> <span>Hapus</span>
									</button>
								</div>

								<!-- mobile -->
								<div class="text-center button-toolbar visible-xs">
							
									<!-- update -->
									<div class="pt-10 pb-10 pl-15 pr-15" v-if="profile.can && profile.can['update_produk_cu']">
										<button @click.prevent="ubahData(props.item.id)" class="btn btn-default btn-icon btn-block">
											<i class="icon-pencil5"></i> Ubah
										</button>
									</div>
									
									<!-- destroy -->
									<div class="pb-10 pl-15 pr-15" v-if="profile.can && profile.can['destroy_produk_cu']">
										<button @click.prevent="modalConfirmOpen('hapus',true,props.item)" class="btn btn-default btn-icon btn-block">
											<i class="icon-bin2"></i> <span>Hapus</span>
										</button>
									</div>
								</div>

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
	import DataPanel from '../../components/datapanel.vue';
	import appModal from '../../components/modal';
	import collapseButton from '../../components/collapseButton.vue';
	import checkValue from '../../components/checkValue.vue';

	export default {
		components: {
			DataPanel,
			appModal,
			collapseButton,
			checkValue
		},
		props:['title','kelas'],
		data() {
			return {
				selectedItem: [],
				query: {
					order_column: "no_ba",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				columnData: [
					{
						title: 'No.',
						key: 'No.',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false
					},
					{
						title: 'Foto',
						key: 'gambar',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false
					},
					{
						title: 'Nama',
						key: 'name',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Kode Produk dan Pelayanan',
						key: 'kode_produk',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'CU',
						key: 'cu_name',
						groupKey: 'cu.name',
						groupNoKey: '-',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterKey: 'cu.name',
						filterType: 'string'
					},
					{
						title: 'Keterangan',
						key: 'keterangan',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Aturan Setor',
						key: 'aturan_setor',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Aturan Tarik',
						key: 'aturan_tarik',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Aturan Balas Jasa',
						key: 'aturan_balas_jasa',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Aturan Lain',
						key: 'aturan_lain',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Tgl. / Waktu Buat',
						key: 'created_at',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'datetime'
					},
					{
						title: 'Tgl. / Waktu Ubah',
						key: 'updated_at',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'datetime'
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
			this.fetch();
		},
		watch: {
			// check route changes
			'$route' (to, from){
				this.fetch();
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
			fetch(){
				if(this.$route.params.cu == 'semua'){
					this.disableColumnCu(false);
					this.$store.dispatch(this.kelas + '/index', this.params);
				}else{
					this.disableColumnCu(true);
					this.$store.dispatch(this.kelas + '/indexCu', [this.params,this.$route.params.cu]);
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
			ubahData(id) {
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
					this.modalTitle = 'Hapus ' + this.title + ' ' + this.selectedItem.name + ' ini?';
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
			...mapGetters('produkCu',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			})
		}
	}
</script>