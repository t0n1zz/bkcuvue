<template>
	<div>
		<!-- Page header -->
		<div class="page-header">
			<div class="page-header-content has-visible-elements">
				<div class="page-title">
					<h4>
						<i class="position-left" :class="titleIcon"></i>
						<span class="text-semibold">{{ title }}</span> - {{ titleDesc }}</h4>
					<ul class="breadcrumb breadcrumb-caret position-right">
						<router-link :to="{ name:'dashboard' }" tag="li">
							<a>Dashboard</a>
						</router-link>
						<li class="active">{{ title }}</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- /page header -->
		<!-- page container -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">

					<!-- message -->
					<message v-if="itemDataStat === 'fail'">
						<h4><i class="icon-cancel-circle2"></i> Oops terjadi kesalahan: </h4>
						<pre class="pre-scrollable">{{ itemData }}</pre>
					</message>

					<!-- cu desktop --> 
					<div class="row" v-if="this.userData.id_cu === 0">
						<div class="col-md-12">
							<div class="input-group">
								<div class="input-group-addon">
									Pilih Artikel
								</div>

								<!-- select -->
								<select class="bootstrap-select" name="id_cu" v-model="id_cu" data-width="100%" @change="changeCU($event.target.value)" :disabled="modelCULoadStat === 'loading'">
									<option disabled value="">Silahkan pilih CU</option>
									<option value="semua">Semua</option>
									<option value="0"><span v-if="userData.pus">{{userData.pus.nama}}</span> <span v-else>Puskopdit</span></option>
									<option data-divider="true"></option>
									<option v-for="cu in modelCU" :value="cu.id">{{cu.nama}}</option>
								</select>

								<!-- reload cu -->
								<div class="input-group-btn">
									<button class="btn btn-default" v-tooltip:top="'Reload'" @click="fetchCU" :disabled="modelCULoadStat === 'loading'">
										<i class="icon-sync" :class="{'spinner' : modelCULoadStat === 'loading'}"></i>
									</button>
								</div>
							</div>
							<br>
						</div>
					</div>

					<!-- cu mobile -->
					<div class="panel panel-flat visible-xs" v-if="this.userData.id_cu === 0">
						<div class="panel-body">  
							<div class="form-group">
								<h5>Pilih Artikel</h5>

								<!-- select -->
								<select class="form-control" name="id_cu" v-model="id_cu" data-width="100%" @change="changeCU($event.target.value)" :disabled="modelCULoadStat === 'loading'">
									<option disabled value="">Silahkan pilih CU</option>
									<option value="semua">Semua</option>
									<option value="0"><span v-if="userData.pus">{{userData.pus.nama}}</span> <span v-else>Puskopdit</span></option>
									<option data-divider="true"></option>
									<option v-for="cu in modelCU" :value="cu.id">{{cu.nama}}</option>
								</select>

								<br/>

								<!-- reload cu -->
								<button class="btn btn-default btn-lg btn-block" v-tooltip:top="'Reload'" @click="fetchCU" :disabled="modelCULoadStat === 'loading'">
									<i class="icon-sync" :class="{'spinner' : modelCULoadStat === 'loading'}"></i> Reload
								</button>
							</div>
						</div>
					</div>

					<!-- tabs -->
					<div class="tabbable">
						<ul class="nav nav-tabs nav-tabs-bottom">
							<li class="active">
								<a href="tab-artikel" data-toggle="tab" aria-expanded="true">Artikel</a>
							</li>
							<li>
								<a href="tab-penulis" data-toggle="tab" aria-expanded="true">Penulis Artikel</a>
							</li>
							<li>
								<a href="tab-kategori" data-toggle="tab" aria-expanded="true">Kategori Artikel</a>
							</li>
						</ul>
					</div>

					<!-- main panel -->
					<data-viewer :title="title" :source="source" :columnData="columnData" :filterData='filterData' :toolbarButton="4" :itemData="itemData" :itemDataStat="itemDataStat" 
					:params="params"
					@fetch="fetch">

						<!-- button desktop -->
						<template slot="button-desktop">

							<!-- tambah -->
							<div class="btn-group pb-5">
								<router-link :to="{ name:'artikelCreate'}" class="btn btn-default btn-icon" v-tooltip:top="'Tambah Artikel'">
									<i class="icon-plus3"></i> Tambah
								</router-link>
							</div>

							<!-- ubah-->
							<div class="btn-group pb-5">
								<router-link :to="{ name:'artikelEdit', params: { id: selectedItem.id }}" class="btn btn-default btn-icon" v-tooltip:top="'Ubah Artikel'" v-if="selectedItem.id">
									<i class="icon-pencil5"></i> Ubah
								</router-link>
								<button class="btn btn-default btn-icon" v-tooltip:top="'Ubah Artikel'" disabled v-else-if="!selectedItem.id"><i class="icon-pencil5"></i> Ubah</button>
							</div>

							<!-- hapus -->
							<div class="btn-group pb-5">
								<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-default btn-icon" v-tooltip:top="'Hapus Artikel'"  :disabled="!selectedItem.id">
									<i class="icon-bin2"></i> Hapus
								</button>
							</div>

							<!-- terbitkan -->
							<div class="btn-group pb-5">
								<button @click.prevent="modalConfirmOpen('updateTerbitkan')" class="btn btn-default btn-icon"  v-tooltip:top="'Ubah Status Penerbitan Artikel'"  :disabled="!selectedItem.id">
									<i class="icon-file-upload"></i> <span v-if="selectedItem.terbitkan === 1">Tidak Terbitkan</span>
									<span v-else>Terbitkan</span>
								</button>
							</div>

							<!-- utamakan -->
							<div class="btn-group pb-5">
								<button @click.prevent="modalConfirmOpen('updateUtamakan')" class="btn btn-default btn-icon" v-tooltip:top="'Ubah Status Pengutamaan Artikel'"  :disabled="!selectedItem.id">
									<i class="icon-pushpin"></i> <span v-if="selectedItem.utamakan === 1">Tidak Utamakan</span>
									<span v-else>Utamakan</span>
								</button>
							</div>

						</template>

						<!-- item desktop -->
						<template slot="item-desktop" scope="props">
							<tr :class="{ 'info': selectedItem.id === props.item.id }" @click="selectedRow(props.item)">
								<td v-if="!columnData[0].hide">
									<img :src="'/images/artikel/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive img-sm" v-if="props.item.gambar">
									<img :src="'/images/image-articlen.jpg'" class="img-rounded img-responsive img-sm" v-else>
								</td>
								<td v-if="!columnData[1].hide" class="warptext">{{props.item.nama}}</td>
								<td v-if="!columnData[2].hide && !columnData[2].disable">
									<span v-if="props.item.artikel__kategori">{{props.item.artikel__kategori.nama}}</span>
								</td>
								<td v-if="!columnData[3].hide && !columnData[3].disable">
									<span v-if="props.item.artikel__penulis">{{props.item.artikel__penulis.nama}}</span>
								</td>
								<td v-if="!columnData[4].hide && !columnData[4].disable">
									<span v-if="props.item.c_u">{{props.item.c_u.nama}}</span>
								</td>
								<td v-if="!columnData[5].hide" v-html="$options.filters.checkStatus(props.item.terbitkan)"></td>
								<td v-if="!columnData[6].hide" v-html="$options.filters.checkStatus(props.item.utamakan)"></td>
								<td v-if="!columnData[7].hide" class="text-nowrap" v-html="$options.filters.publishDate(props.item.created_at)"></td>
								<td v-if="!columnData[8].hide" class="text-nowrap">
									<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.publishDate(props.item.updated_at)"></span>
								</td>
							</tr>
						</template>

						<!-- button mobile -->
						<template slot="button-mobile">
							<!-- tambah -->
							<router-link :to="{ name:'artikelCreate'}" class="btn btn-default btn-icon btn-lg btn-block">
								<i class="icon-plus3"></i> Tambah
							</router-link>
						</template>
				
						<!-- item mobile -->
						<template slot="item-mobile" scope="props">
							<div class="panel panel-flat visible-xs">
								<div class="panel-body">
									<div class="thumb content-group">
										<img :src="'/images/artikel/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive" v-if="props.item.gambar">
										<img :src="'/images/image-articlen.jpg'" class="img-rounded img-responsive" v-else>
									</div>
									<div class="row">
										<hr/>
											<h4>{{columnData[1].title}}</h4>
											<span>{{props.item.nama}}</span>
										<hr/>
											<h4>{{columnData[2].title}}</h4>
											<span v-if="props.item.artikel__kategori">{{props.item.artikel__kategori.nama}}</span>
											<span v-else>-</span>
										<hr/>
											<h4>{{columnData[3].title}}</h4>
											<span v-if="props.item.artikel__penulis">{{props.item.artikel__penulis.nama}}</span>
											<span v-else>-</span>
										<hr/>
											<h4>{{columnData[4].title}}</h4>
											<span v-if="props.item.c_u">{{props.item.c_u.nama}}</span>
											<span v-else>-</span>
										<hr/>
											<h4>{{columnData[5].title}}</h4>
											<span v-html="$options.filters.checkStatus(props.item.terbitkan)"></span>
										<hr/>
											<h4>{{columnData[6].title}}</h4>
											<span v-html="$options.filters.checkStatus(props.item.utamakan)"></span>
										<hr/>
											<h4>{{columnData[7].title}}</h4>
											<span v-html="$options.filters.publishDateMobile(props.item.created_at)"></span>
										<hr/>
											<h4>{{columnData[8].title}}</h4>
											<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.publishDateMobile(props.item.updated_at)"></span>
									</div>
								</div>
								<div class="panel-footer">
									<div class="text-center button-toolbar">
										<div class="btn-group pb-5">
											<router-link :to="{ name:'artikelEdit', params: { id: props.item.id }}" class="btn btn-default btn-icon btn-block" v-if="props.item.id">
												<i class="icon-pencil5"></i> Ubah
											</router-link>
										</div>
										
										<div class="btn-group pb-5">
											<button @click.prevent="modalConfirmOpen('hapus',true,props.item)" class="btn btn-default btn-icon">
												<i class="icon-bin2"></i> Hapus
											</button>
										</div>
										
										<div class="btn-group pb-5">
											<button @click.prevent="modalConfirmOpen('updateTerbitkan',true,props.item)" class="btn btn-default btn-icon">
												<i class="icon-file-upload"></i> <span v-if="props.item.terbitkan === 1">Tidak Terbitkan</span>
												<span v-else>Terbitkan</span>
											</button>
										</div>

										<div class="btn-group pb-5">
											<button @click.prevent="modalConfirmOpen('updateUtamakan',true,props.item)" class="btn btn-default btn-icon">
												<i class="icon-pushpin"></i> <span v-if="props.item.utamakan === 1">Tidak Utamakan</span>
												<span v-else>Utamakan</span>
											</button>
										</div>
		
									</div>
								</div>
							</div>
						</template>

					</data-viewer>
				</div>
			</div>
		</div>
		<!-- page container -->

		<!-- modal -->
		<!-- table-context-menu -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" @tutup="modalTutup"
		  @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup">
		</app-modal>

	</div>
</template>

<script>
	import corefunc from '../../assets/core/app.js';
	import moment from 'moment';
	import DataViewer from '../../components/dataviewer.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";

	export default {
		name: 'ArtikelIndex',
		components: {
			DataViewer,
			appModal,
			message
		},
		data() {
			return {
				title: 'Artikel',
				titleDesc: 'Mengelola data artikel',
				titleIcon: 'icon-magazine',
				id_cu: '',
				source: '',
				selectedItem: [],
				params: {
          column: 'id',
          direction: 'desc',
          per_page: 10,
          page: 1,
          search_column: 'nama',
          search_operator: 'like',
          search_query_1: '',
          search_query_2: ''
        },
				filterData: [{
						title: 'Judul',
						key: 'nama',
						operator: 'like',
						disable: false
					},
					{
						title: 'Kategori',
						key: 'artikel_kategori.nama',
						operator: 'like',
						disable: false
					},
					{
						title: 'Penulis',
						key: 'artikel_penulis.nama',
						operator: 'like',
						disable: false
					},
					{
						title: 'CU',
						key: 'c_u.nama',
						operator: 'like',
						disable: false
					},
					{
						title: 'Tgl. Tulis',
						key: 'created_at',
						operator: 'between',
						disable: false
					}
				],
				columnData: [
					{
						title: 'Foto',
						key: 'gambar',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false
					},
					{
						title: 'Judul',
						key: 'nama',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Kategori',
						key: 'id_artikel_kategori',
						groupKey: 'artikel__kategori.nama',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Penulis',
						key: 'id_artikel_penulis',
						groupKey: 'artikel__penulis.nama',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'CU',
						key: 'id_cu',
						groupKey: 'c_u.nama',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Terbitkan',
						key: 'terbitkan',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Utamakan',
						key: 'utamakan',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Tgl. Tulis',
						key: 'created_at',
						texcelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Tgl. Ubah',
						key: 'updated_at',
						texcelType: 'string',
						sort: true,
						hide: false,
						disable: false
					}
				],
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalButton: ''
			}
		},
		mounted() {
			corefunc.core_function();
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
		},
		created(){
			if(this.userData.id_pus !== undefined){
				this.fetchCU();
			}	
		},
		watch: {
			userDataStat(value){
				if(value === "success" && this.userData.id_pus !== undefined){
						this.fetchCU();
				}
			},
			modelCULoadStat(value){
				if(value === "success"){
					this.id_cu = this.userData.id_cu;
					if(this.id_cu !== ''){
						this.fetch();
					}
				}
			},
      updateStat(value) {
				this.modalState = value;
				this.modalButton = 'Ok';
				
				if(value === "success"){
					this.modalTitle = this.updateMessage;
					this.fetch();
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
				}
      }
    },
		methods: {
			fetch(){
				if(this.modelCULoadStat === 'success'){
					if(this.id_cu === 'semua'){
						this.$store.dispatch('loadArtikelS', this.params);
						this.disableColumnCU(false);
					}else{
						if(this.id_cu !== undefined){
							this.$store.dispatch('loadArtikelCUS', [this.params,this.id_cu]);
						}
						this.disableColumnCU(true);
					}
				}
			},
			fetchCU(){
				this.$store.dispatch('loadCUPus', this.userData.id_pus);
			},
			changeCU(id){
				this.id_cu = id;
				this.params.per_page = 10;
				this.params.page = 1;

				this.fetch();
			},
			disableColumnCU(status){
				this.columnData[4].disable = status;
				this.filterData[3].disable = status;
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			modalConfirmOpen(source, isMobile, itemMobile) {
				this.modalShow = true;
				this.modalState = 'confirm-tutup';
				this.source = source;

				if(isMobile){
					this.selectedItem = itemMobile;
				}

				if (source == 'hapus') {
					this.modalTitle = 'Hapus artikel ini?';
					this.modalButton = 'Iya, Hapus';
				} else if (source == 'updateTerbitkan') {
					if (this.selectedItem.terbitkan == 0) {
						this.modalTitle = 'Terbitkan artikel ini?';
						this.modalButton = 'Iya, terbitkan';
					} else {
						this.modalTitle = 'Tidak terbitkan artikel ini?';
						this.modalButton = 'Iya, tidak terbitkan';
					}
				} else if (source == 'updateUtamakan') {
					if (this.selectedItem.utamakan == 0) {
						this.modalTitle = 'Utamakan artikel ini?';
						this.modalButton = 'Iya, utamakan';
					} else {
						this.modalTitle = 'Tidak utamakan artikel ini?';
						this.modalButton = 'Iya, tidak utamakan';
					}
				}
			},
			modalEdit(id) {
				this.modalShow = false;
				this.$router.push('/artikel/edit/' + id);
			},
			modalTutup() {
				this.modalShow = false;
				this.$store.dispatch('resetArtikelUpdateStat');
			},
			modalConfirmOk() {
				var vm = this;
				if (vm.source == 'hapus') {
					this.$store.dispatch('deleteArtikel', this.selectedItem.id);
				} else if (vm.source == "updateTerbitkan"){
					this.$store.dispatch('updateArtikelTerbitkan', this.selectedItem.id);
				} else if (vm.source == "updateUtamakan") {
					this.$store.dispatch('updateArtikelUtamakan ', this.selectedItem.id);
				}
			}
		},
		computed: {
			userData(){
				return this.$store.getters.getUserData;
			},
			userDataStat(){
				return this.$store.getters.getUserDataLoadStat;
			},
			modelCU() {
				return this.$store.getters.getCUS;
			},
			modelCULoadStat() {
				return this.$store.getters.getCULoadStatS;
			},
			itemData(){
				return this.$store.getters.getArtikelS;
			},
			itemDataStat(){
				return this.$store.getters.getArtikelLoadStatS;
			},
			updateStat() {
				return this.$store.getters.getArtikelUpdateStat;
			},
			updateMessage() {
				return this.$store.getters.getArtikelUpdateMessage;
			}
		},
		filters: {
			publishDate: function (value) {
				return moment(value).format('DD-MM-YYYY') + '<br/>' + moment(value).format('kk:mm:ss');
			},
			publishDateMobile: function (value) {
				return moment(value).format('DD-MM-YYYY') + ' | ' + moment(value).format('kk:mm:ss');
			},
			trimString: function (string) {
				return string.replace(/<(?:.|\n)*?>/gm, '').replace(/\&nbsp;/g, '').replace(/\&ldquo;/g, '').substring(0, 150) +
					' [...]';
			},
			checkStatus: function (value) {
				if (value > 0) {
					return '<span class="bg-orange-400 text-highlight"><i class="icon-check"></i></span>';
				} else {
					return '<span class="bg-teal-300 text-highlight"><i class="icon-cross3"></i></span>';
				}
			},
			checkModal: function (value) {
				if (value > 0) {
					return '<i class="icon-check"></i>';
				} else {
					return '<i class="icon-cross3"></i>';
				}
			},
			checkImages: function (value) {
				return '/images/artikel/' + value + 'n.jpg';
			}
		}
	}
</script>