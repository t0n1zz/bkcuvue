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
						<router-link :to="{ name:'artikelKategori' }" class="btn btn-link btn-icon btn-float has-text" v-if="userData.can && userData.can['index artikelKategori']">
							<i class="icon-grid6 text-primary"></i> <span>Kategori Artikel</span>
						</router-link>
						<router-link :to="{ name:'artikelPenulis' }" class="btn btn-link btn-icon btn-float has-text" v-if="userData.can && userData.can['index artikelPenulis']">
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
										<option v-for="cu in modelCU" :value="cu.id" v-if="cu">{{cu.name}}</option>
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
									<option v-for="cu in modelCU" :value="cu.id" v-if="cu">{{cu.name}}</option>
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
					<data-viewer :title="title" :source="source" :columnData="columnData" :filterData="filterData" :toolbarButton="4" :itemData="itemData" :itemDataStat="itemDataStat" :extSearchQuery1="extSearchQuery1" :extSearchColumn="extSearchColumn"
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

							<!-- terbitkan -->
							<div class="btn-group pb-5" v-if="userData.can && userData.can['terbitkan ' + kelas]">
								<button @click.prevent="modalConfirmOpen('updateTerbitkan')" class="btn btn-default btn-icon"  v-tooltip:top="'Ubah Status Penerbitan Artikel'"  :disabled="!selectedItem.id">
									<i class="icon-file-upload"></i> <span v-if="selectedItem.terbitkan === 1">Tidak Terbitkan</span>
									<span v-else>Terbitkan</span>
								</button>
							</div>

							<!-- utamakan -->
							<div class="btn-group pb-5" v-if="userData.can && userData.can['utamakan ' + kelas]">
								<button @click.prevent="modalConfirmOpen('updateUtamakan')" class="btn btn-default btn-icon" v-tooltip:top="'Ubah Status Pengutamaan Artikel'"  :disabled="!selectedItem.id">
									<i class="icon-pushpin"></i> <span v-if="selectedItem.utamakan === 1">Tidak Utamakan</span>
									<span v-else>Utamakan</span>
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

							<!-- terbitkan -->
							<li v-if="userData.can && userData.can['terbitkan ' + kelas]">
								<div class="pl-5 pr-5 pb-5">
									<button @click.prevent="modalConfirmOpen('updateTerbitkan')" class="btn btn-default btn-icon btn-block"  v-tooltip:top="'Ubah Status Penerbitan Artikel'"  :disabled="!selectedItem.id">
										<i class="icon-file-upload"></i> <span v-if="selectedItem.terbitkan === 1">Tidak Terbitkan</span>
										<span v-else>Terbitkan</span>
									</button>
								</div>
							</li>

							<!-- utamakan -->
							<li v-if="userData.can && userData.can['utamakan ' + kelas]">
								<div class="pl-5 pr-5">
									<button @click.prevent="modalConfirmOpen('updateUtamakan')" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Ubah Status Pengutamaan Artikel'"  :disabled="!selectedItem.id">
										<i class="icon-pushpin"></i> <span v-if="selectedItem.utamakan === 1">Tidak Utamakan</span>
										<span v-else>Utamakan</span>
									</button>
								</div>
							</li>
						</template>

						<!-- item desktop -->
						<template slot="item-desktop" slot-scope="props">
							<tr :class="{ 'info': selectedItem.id === props.item.id }" @click="selectedRow(props.item)" class="text-nowrap">
								<td v-if="!columnData[0].hide">
									<img :src="'/images/artikel/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive img-sm" v-if="props.item.gambar">
									<img :src="'/images/image-articlen.jpg'" class="img-rounded img-responsive img-sm" v-else>
								</td>
								<td v-if="!columnData[1].hide">
									<check-value :value="props.item.name"></check-value>
								</td>
								<td v-if="!columnData[2].hide && !columnData[2].disable">
									<check-value :value="props.item.artikel_kategori.name" v-if="props.item.artikel_kategori"></check-value>
									<span v-else>{{columnData[2].groupNoKey}}</span>
								</td>
								<td v-if="!columnData[3].hide && !columnData[3].disable">
									<check-value :value="props.item.artikel_penulis.name" v-if="props.item.artikel_penulis"></check-value>
									<span v-else>{{columnData[3].groupNoKey}}</span>
								</td> 
								<td v-if="!columnData[4].hide && !columnData[4].disable">
									<check-value :value="props.item.c_u.name" v-if="props.item.c_u"></check-value>
									<span v-else>{{columnData[4].groupNoKey}}</span>
								</td>
								<td v-if="!columnData[5].hide" v-html="$options.filters.checkStatus(props.item.terbitkan)"></td>
								<td v-if="!columnData[6].hide" v-html="$options.filters.checkStatus(props.item.utamakan)"></td>
								<td v-if="!columnData[7].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
								<td v-if="!columnData[8].hide">
									<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
									<span v-else>-</span>
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
								<table class="table table-striped">
									<tbody>
										<tr v-if="!columnData[0].hide">
											<td colspan="2">
												<img :src="'/images/artikel/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive center-block" v-if="props.item.gambar">
												<img :src="'/images/image-articlen.jpg'" class="img-rounded img-responsive center-block" v-else>
											</td>
										</tr>
										<tr v-if="!columnData[1].hide">
											<td colspan="2"><b>{{columnData[1].title}}</b></td>
										</tr>
										<tr v-if="!columnData[1].hide">
											<td colspan="2" style="word-wrap: break-word;">
												<check-value :value="props.item.name" :isTrim="false"></check-value>
												</td>
										</tr>
										<tr v-if="!columnData[2].hide">
											<td><b>{{columnData[2].title}}</b></td>
											<td>
												<check-value :value="props.item.artikel_kategori.name" :isTrim="false" :frontText="': '" v-if="props.item.artikel_kategori"></check-value>
												<span v-else>: {{columnData[2].groupNoKey}}</span>	
											</td>
										</tr>
										<tr v-if="!columnData[3].hide">
											<td><b>{{columnData[3].title}}</b></td>
											<td>
												<check-value :value="props.item.artikel_penulis.name" :isTrim="false" :frontText="': '" v-if="props.item.artikel_penulis"></check-value>
												<span v-else>: {{columnData[3].groupNoKey}}</span>	
											</td>
										</tr>
										<tr v-if="!columnData[4].hide && !columnData[4].disable">
											<td><b>{{columnData[4].title}}</b></td>
											<td>
												<check-value :value="props.item.c_u.name" :isTrim="false" :frontText="': '" v-if="props.item.c_u"></check-value>
												<span v-else>: {{columnData[4].groupNoKey}}</span>	
											</td>
										</tr>
										<tr v-if="!columnData[5].hide">
											<td><b>{{columnData[5].title}}</b></td>
											<td>
												: <span v-html="$options.filters.checkStatus(props.item.terbitkan)"></span>
											</td>
										</tr>
										<tr v-if="!columnData[6].hide">
											<td><b>{{columnData[6].title}}</b></td>
											<td>
												: <span v-html="$options.filters.checkStatus(props.item.utamakan)"></span>
											</td>
										</tr>
										<tr v-if="!columnData[7].hide">
											<td><b>{{columnData[7].title}}</b></td>
											<td>
												: <span v-html="$options.filters.dateTime(props.item.created_at)"></span>
											</td>
										</tr>
										<tr v-if="!columnData[8].hide">
											<td><b>{{columnData[8].title}}</b></td>
											<td>
												: <span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
												<span v-else>-</span>
											</td>
										</tr>
									</tbody>
								</table>
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
										
										<!-- terbitkan -->
										<div class="pb-10 pl-15 pr-15" v-if="userData.can && userData.can['terbitkan ' + kelas]">
											<button @click.prevent="modalConfirmOpen('updateTerbitkan',true,props.item)" class="btn btn-default btn-icon btn-block">
												<i class="icon-file-upload"></i> <span v-if="props.item.terbitkan === 1">Tidak Terbitkan</span>
												<span v-else>Terbitkan</span> 
											</button>
										</div>

										<!-- utamakan -->
										<div class="pb-10 pl-15 pr-15" v-if="userData.can && userData.can['utamakan ' + kelas]">
											<button @click.prevent="modalConfirmOpen('updateUtamakan',true,props.item)" class="btn btn-default btn-icon btn-block">
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
	import checkValue from '../../components/checkValue.vue';

	export default {
		name: 'ArtikelIndex',
		components: {
			DataViewer,
			appModal,
			message,
			checkValue
		},
		data() {
			return {
				title: 'Artikel',
				kelas: 'artikel',
				kelasVuex: 'Artikel',
				titleDesc: 'Mengelola data artikel',
				titleIcon: 'icon-magazine',
				id_cu: '',
				source: '',
				extSearchQuery1: '',
				extSearchColumn: '',
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
				filterData: [{
						title: 'Judul',
						key: 'name',
						type: 'string',
						disable: false
					},
					{
						title: 'Kategori',
						key: 'artikelkategori.name',
						type: 'string',
						disable: false
					},
					{
						title: 'Penulis',
						key: 'artikelpenulis.name',
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
						title: 'Tgl. Tulis',
						key: 'created_at',
						type: 'datetime',
						disable: false
					},
					{
						title: 'Tgl. Ubah',
						key: 'updated_at',
						type: 'datetime',
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
						key: 'name',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Kategori',
						key: 'id_artikel_kategori',
						groupKey: 'artikel_kategori.name',
						groupNoKey: '-',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Penulis',
						key: 'id_artikel_penulis',
						groupKey: 'artikel_penulis.name',
						groupNoKey: '-',
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
						title: 'Terbitkan',
						key: 'terbitkan',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Utamakan',
						key: 'utamakan',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Tgl. Tulis',
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
			modelKategoriLoadStat(value){
				if(value === 'success'){
					this.params.search_column = 'artikelkategori.name';
					this.params.search_query_1 = this.modelKategori.name;

					this.extSearchColumn = 'Kategori';
					this.extSearchQuery1 = this.modelKategori.name;

					this.id_cu = this.modelKategori.id_cu;

					this.$store.dispatch('load' + this.kelasVuex + 'CUS', [this.params,this.modelKategori.id_cu]);
				}
			},
			modelPenulisLoadStat(value){
				if(value === 'success'){
					this.params.search_column = 'artikelPenulis.name';
					this.params.search_query_1 = this.modelPenulis.name;

					this.extSearchColumn = 'Penulis';
					this.extSearchQuery1 = this.modelPenulis.name;

					this.id_cu = this.modelPenulis.id_cu;

					this.$store.dispatch('load' + this.kelasVuex + 'CUS', [this.params,this.modelPenulis.id_cu]);
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
							if(this.$route.meta.mode === 'kategori'){ //if artikelFilterKategori
								if(this.modelKategoriLoadStat !== 'success'){
									this.$store.dispatch('editArtikelKategori',this.$route.params.id);
								}else{
									this.$store.dispatch('load' + this.kelasVuex + 'CUS', [this.params,this.id_cu]);
								}
							}else if(this.$route.meta.mode === 'penulis'){ //if artikelFilterPenulis
								if(this.modelPenulisLoadStat !== 'success'){
									this.$store.dispatch('editArtikelPenulis',this.$route.params.id);
								}else{
									this.$store.dispatch('load' + this.kelasVuex + 'CUS', [this.params,this.id_cu]);
								}
							}else{
								this.$store.dispatch('load' + this.kelasVuex + 'CUS', [this.params,this.id_cu]);
							}
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
			ubahData(id) {
				this.$router.push('/' + this.kelas + '/edit/' + id);
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
			modalTutup() {
				this.modalShow = false;
				this.$store.dispatch('resetArtikelUpdateStat');
			},
			modalConfirmOk() {
				var vm = this;
				if (vm.source == 'hapus') {
					this.$store.dispatch('delete' + this.kelasVuex, this.selectedItem.id);
				} else if (vm.source == "updateTerbitkan"){
					this.$store.dispatch('update' + this.kelasVuex + 'Terbitkan', this.selectedItem.id);
				} else if (vm.source == "updateUtamakan") {
					this.$store.dispatch('update' + this.kelasVuex + 'Utamakan', this.selectedItem.id);
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
			modelKategori(){
				return this.$store.getters.getArtikelKategori;
			},
			modelKategoriLoadStat(){
				return this.$store.getters.getArtikelKategoriLoadStat;
			},
			modelPenulis(){
				return this.$store.getters.getArtikelPenulis;
			},
			modelPenulisLoadStat(){
				return this.$store.getters.getArtikelPenulisLoadStat;
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
			dateTime: function (value) {
				if(value){
					return moment(value).format('DD-MM-YYYY') + '&nbsp; / &nbsp;'  + moment(value).format('kk:mm:ss');
				}else{
					return '-';
				}
			},
			date: function (value) {
				return moment(value).format('DD-MM-YYYY');
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