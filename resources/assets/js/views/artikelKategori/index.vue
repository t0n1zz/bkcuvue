<template>
	<div>
		<!-- Page header -->
		<div class="page-header">
			<div class="page-header-content">
				<div class="page-title">
					<h4>
						<i class="position-left" :class="titleIcon"></i>
						<span class="text-semibold">{{ title }}</span> - {{ titleDesc }}</h4>
					<ul class="breadcrumb breadcrumb-caret position-right hidden-print">
						<router-link :to="{ name:'dashboard' }" tag="li">
							<a>Dashboard</a>
						</router-link>
						<li class="active">{{ title }}</li>
					</ul>
				</div>
				<div class="heading-elements hidden-print">
					<div class="heading-btn-group">
						<router-link :to="{ name:'artikel' }" class="btn btn-link btn-icon btn-float has-text">
							<i class="icon-newspaper text-primary"></i> <span>Artikel</span>
						</router-link>
						<router-link :to="{ name:'artikelPenulis' }" class="btn btn-link btn-icon btn-float has-text">
							<i class="icon-pencil6 text-primary"></i> <span>Penulis Artikel</span>
						</router-link>
					</div>
				</div>
			</div>
		</div>
		
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
					<div class="panel panel-flat hidden-xs hidden-print " v-if="this.userData.id_cu === 0">
						<div class="panel-body">  
								<div class="input-group" v-if="this.userData.id_cu === 0">
									<div class="input-group-addon">
										Pilih Data
									</div>

									<!-- select -->
									<select class="bootstrap-select" name="id_cu" v-model="id_cu" data-width="100%" @change="changeCU($event.target.value)" :disabled="modelCULoadStat === 'loading'">
										<option disabled value="">Silahkan pilih data</option>
										<option value="semua">Semua</option>
										<option value="0"><span v-if="userData.pus">{{userData.pus.name}}</span> <span v-else>Puskopdit</span></option>
										<option data-divider="true"></option>
										<option v-for="cu in modelCU" :value="cu.id">{{cu.name}}</option>
									</select>

									<!-- reload cu -->
									<div class="input-group-btn">
										<button class="btn btn-default" v-tooltip:top="'Reload'" @click="fetchCU" :disabled="modelCULoadStat === 'loading'">
											<i class="icon-sync" :class="{'spinner' : modelCULoadStat === 'loading'}"></i>
										</button>
									</div>
								</div>
						</div>
					</div>		

					<!-- cu mobile -->
					<div class="panel panel-flat visible-xs hidden-print" v-if="this.userData.id_cu === 0">
						<div class="panel-body">  
							<!-- select -->
							<div class="input-group">
								<div class="input-group-addon">
									Pilih Data
								</div>
								<select class="form-control" name="id_cu" v-model="id_cu" data-width="100%" @change="changeCU($event.target.value)" :disabled="modelCULoadStat === 'loading'">
									<option disabled value="">Silahkan pilih data</option>
									<option value="semua">Semua</option>
									<option value="0"><span v-if="userData.pus">{{userData.pus.name}}</span> <span v-else>Puskopdit</span></option>
									<option data-divider="true"></option>
									<option v-for="cu in modelCU" :value="cu.id">{{cu.name}}</option>
								</select>
							</div>

							<!-- reload cu -->
							<div class="pt-15">
								<button class="btn btn-default btn-lg btn-block" v-tooltip:top="'Reload'" @click="fetchCU" :disabled="modelCULoadStat === 'loading'">
									<i class="icon-sync" :class="{'spinner' : modelCULoadStat === 'loading'}"></i> Reload
								</button>
							</div> 
						</div>
					</div>

					<!-- main panel -->
					<data-viewer :title="title" :source="source" :columnData="columnData" :filterData='filterData' :toolbarButton="4" :itemData="itemData" :itemDataStat="itemDataStat" 
					:params="params"
					@fetch="fetch">

					<!-- desktop -->
						<!-- button desktop -->
						<template slot="button-desktop">

							<!-- tambah -->
							<div class="btn-group pb-5" v-if="userData.can && userData.can['create ' + kelas]">
								<router-link :to="{ name: kelas + 'Create'}" class="btn btn-default btn-icon" v-tooltip:top="'Tambah ' +  title">
									<i class="icon-plus3"></i> Tambah 
								</router-link>
							</div>

							<!-- ubah-->
							<div class="btn-group pb-5" v-if="userData.can && userData.can['update ' + kelas]">
								<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-default btn-icon" v-tooltip:top="'Ubah ' + title" :disabled="!selectedItem.id">
									<i class="icon-pencil5"></i> Ubah
								</button>
							</div>

							<!-- hapus -->
							<div class="btn-group pb-5" v-if="userData.can && userData.can['destroy ' + kelas]">
								<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-default btn-icon" v-tooltip:top="'Hapus ' + title"  :disabled="!selectedItem.id">
									<i class="icon-bin2"></i> Hapus
								</button>
							</div>

							<!-- lihat artikel -->
							<div class="btn-group pb-5" v-if="userData.can && userData.can['index artikel']">
								<button @click.prevent="lihatArtikel(selectedItem.id)" class="btn btn-default btn-icon" v-tooltip:top="'Lihat artikel yang ditulis'" :disabled="!selectedItem.id || selectedItem.has_artikel_count === 0">
									<i class="icon-file-eye"></i> Lihat artikel 
								</button>
							</div>
						</template>

						<!-- button context -->
						<template slot="button-context">
							<!-- title -->
							<li class="text-center pb-5 pt-5 bg-primary" v-if="selectedItem.name"><b class="text-size-large">{{ this.columnData[1].title }}</b></li>
							<li class="text-center pb-5 pt-5 bg-warning" v-else><b class="text-size-large">Tidak ada data yang terpilih</b></li>
							<li><hr class="no-margin-bottom no-margin-top"/></li>

							<!-- selected content -->
							<li class="text-center pb-10 pt-10 pl-5 pr-5" v-if="selectedItem.name">
								<span class="text-size-large">{{selectedItem.name}}</span></li>
							<li><hr class="no-margin-top no-margin-bottom"/></li>

							<!-- update -->
							<li v-if="userData.can && userData.can['update ' + kelas]">
								<div class="pl-5 pr-5 pb-5 pt-10">
									<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Ubah ' + title" :disabled="!selectedItem.id">
										<i class="icon-pencil5"></i> Ubah
									</button>
								</div>
							</li>

							<!-- destroy -->
							<li v-if="userData.can && userData.can['destroy ' + kelas]">
								<div class="pl-5 pr-5 pb-5">
									<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Hapus ' + title"  :disabled="!selectedItem.id">
										<i class="icon-bin2"></i> Hapus
									</button>
								</div>
							</li>

							<!-- lihat artikel -->
							<li v-if="userData.can && userData.can['index artikel']">
								<div class="pl-5 pr-5 pb-5">
									<button @click.prevent="lihatArtikel(selectedItem.id)" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Lihat artikel yang ditulis'" :disabled="selectedItem.has_artikel_count === 0">
										<i class="icon-file-eye"></i> Lihat artikel 
									</button>
								</div>
							</li>
						</template>

						<!-- item desktop -->
						<template slot="item-desktop" slot-scope="props">
							<tr :class="{ 'info': selectedItem.id === props.item.id }" @click="selectedRow(props.item)">
								<td v-if="!columnData[0].hide" class="warptext">{{props.item.name}}</td>
								<td v-if="!columnData[1].hide" class="warptext">{{props.item.deskripsi}}</td>
								<td v-if="!columnData[2].hide && !columnData[2].disable">
									<span v-if="props.item.c_u">{{props.item.c_u.name}}</span>
									<span v-else>{{columnData[2].groupNoKey}}</span>
								</td>
								<td v-if="!columnData[3].hide" class="warptext">{{props.item.has_artikel_count}}</td>
								<td v-if="!columnData[4].hide" class="text-nowrap" v-html="$options.filters.publishDate(props.item.created_at)"></td>
								<td v-if="!columnData[5].hide" class="text-nowrap">
									<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.publishDate(props.item.updated_at)"></span>
								</td>
							</tr>
						</template>

					<!-- mobile -->
						<!-- button mobile -->
						<template slot="button-mobile" class="hidden-print" v-if="userData.can && userData.can['create ' + kelas]">
							<!-- tambah -->
							<router-link :to="{ name: kelas + 'Create'}" class="btn btn-default btn-icon btn-block">
								<i class="icon-plus3"></i> Tambah
							</router-link>
						</template>
				
						<!-- item mobile -->
						<template slot="item-mobile" slot-scope="props">
							<div class="panel panel-flat visible-xs">
								<div class="table-responsive">
									<table class="table table-striped">
										<tbody>
											<tr v-if="!columnData[0].hide">
												<td><b>{{columnData[0].title}}</b></td>
												<td>: {{props.item.name}}</td>
											</tr>
											<tr v-if="!columnData[1].hide">
												<td><b>{{columnData[1].title}}</b></td>
												<td>: {{props.item.deskripsi}}</td>
											</tr>
											<tr v-if="!columnData[2].hide">
												<td><b>{{columnData[2].title}}</b></td>
												<td>
													<span v-if="props.item.c_u">
														: {{props.item.c_u.name}}
													</span>
													<span v-else>: {{columnData[2].groupNoKey}}</span>	
												</td>
											</tr>
												<tr v-if="!columnData[3].hide">
												<td><b>{{columnData[3].title}}</b></td>
												<td>: {{props.item.has_artikel_count}}</td>
											</tr>
											<tr v-if="!columnData[4].hide">
												<td><b>{{columnData[4].title}}</b></td>
												<td>
													: <span v-html="$options.filters.publishDateMobile(props.item.created_at)"></span>
												</td>
											</tr>
											<tr v-if="!columnData[5].hide">
												<td><b>{{columnData[5].title}}</b></td>
												<td>
													: <span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.publishDateMobile(props.item.updated_at)"></span>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="panel-footer hidden-print">
									<div class="text-center button-toolbar">

										<!-- update -->
										<div class="pt-10 pb-10 pl-15 pr-15" v-if="userData.can && userData.can['update ' + kelas]">
											<button @click.prevent="ubahData(props.item.id)" class="btn btn-default btn-icon btn-block">
												<i class="icon-pencil5"></i> Ubah
											</button>
										</div>
										
										<!-- destroy -->
										<div class="pb-10 pl-15 pr-15" v-if="userData.can && userData.can['destroy ' + kelas]">
											<button @click.prevent="modalConfirmOpen('hapus',true,props.item)" class="btn btn-default btn-icon btn-block">
												<i class="icon-bin2"></i> <span>Hapus</span>
											</button>
										</div>

										<!-- lihat artikel -->
										<div class="pb-10 pl-15 pr-15" v-if="userData.can && userData.can['index artikel']">
											<button @click.prevent="lihatArtikel(props.item.id)" class="btn btn-default btn-icon btn-block" :disabled="selectedItem.has_artikel_count === 0">
												<i class="icon-file-eye"></i> Lihat artikel 
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
		
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
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
				title: 'Kategori Artikel',
				kelas: 'artikelKategori',
				kelasVuex: 'ArtikelKategori',
				titleDesc: 'Mengelola data kategori artikel',
				titleIcon: 'icon-grid6',
				id_cu: '',
				source: '',
				selectedItem: [],
				params: {
          column: 'id',
          direction: 'desc',
          per_page: 10,
          page: 1,
          search_column: 'name',
          search_operator: 'like',
          search_query_1: '',
          search_query_2: ''
        },
				filterData: [
					{
						title: 'Nama',
						key: 'name',
						type: 'string',
						disable: false
					},
					{
						title: 'CU',
						key: 'cu.name',
						type: 'string',
						disable: false
					},
					{
						title: 'Tgl. Buat',
						key: 'created_at',
						type: 'date',
						disable: false
					},
					{
						title: 'Tgl. Ubah',
						key: 'updated_at',
						type: 'date',
						disable: false
					}
				],
				columnData: [
					{
						title: 'Nama',
						key: 'name',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Deskripsi',
						key: 'deskripsi',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'CU',
						key: 'id_cu',
						groupKey: 'c_u.name',
						groupNoKey: 'Puskopdit BKCU Kalimantan',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Artikel',
						key: 'has_artikel_count',
						groupKey: 'has_artikel_count',
						groupNoKey: '0',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Tgl. Buat',
						key: 'created_at',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Tgl. Ubah',
						key: 'updated_at',
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
						this.$store.dispatch('load' + this.kelasVuex + 'S', this.params);
						this.disableColumnCU(false);
					}else{
						if(this.id_cu !== undefined){
							this.$store.dispatch('load' + this.kelasVuex + 'CUS', [this.params,this.id_cu]);
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
				this.columnData[2].disable = status;
				this.filterData[1].disable = status;
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			ubahData(id) {
				this.$router.push({name: this.kelas + 'Edit', params: { id: id }});
			},
			lihatArtikel(id){
				this.$store.dispatch('resetArtikelKategoriLoadStat');
				this.$router.push({name: 'artikelFilterKategori', params: { id: id }});
			},
			modalConfirmOpen(source, isMobile, itemMobile) {
				this.modalShow = true;
				this.modalState = 'confirm-tutup';
				this.source = source;

				if(isMobile){
					this.selectedItem = itemMobile;
				}

				if (source == 'hapus') {
					this.modalTitle = 'Hapus penulis artikel ini?';
					this.modalButton = 'Iya, Hapus';
				}
			},
			modalTutup() {
				this.modalShow = false;
				this.$store.dispatch('reset' + this.kelasVuex + 'UpdateStat');
			},
			modalConfirmOk() {
				var vm = this;
				if (vm.source == 'hapus') {
					this.$store.dispatch('delete' + this.kelasVuex, this.selectedItem.id);
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
				return this.$store.getters.getArtikelKategoriS;
			},
			itemDataStat(){
				return this.$store.getters.getArtikelKategoriLoadStatS;
			},
			updateStat() {
				return this.$store.getters.getArtikelKategoriUpdateStat;
			},
			updateMessage() {
				return this.$store.getters.getArtikelKategoriUpdateMessage;
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
			}
		}
	}
</script>