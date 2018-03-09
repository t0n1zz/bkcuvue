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

						</template>

						<!-- item desktop -->
						<template slot="item-desktop" slot-scope="props">
							<tr :class="{ 'info': selectedItem.id === props.item.id }" class="text-nowarp" @click="selectedRow(props.item)">
								<td v-if="!columnData[0].hide">
									<img :src="'/images/cu/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive img-sm" v-if="props.item.gambar">
									<img :src="'/images/image-articlen.jpg'" class="img-rounded img-responsive img-sm" v-else>
								</td>
								<td v-if="!columnData[1].hide" class="text-nowrap">
									<span v-if="props.item.name">{{props.item.name}}</span>
									<span v-else>-</span>
								</td>
								<td v-if="!columnData[2].hide">
									<span v-if="props.item.no_ba">{{props.item.no_ba}}</span>
									<span v-else>-</span>
								</td>
								<td v-if="!columnData[3].hide">
									<span v-if="props.item.badan_hukum">{{props.item.badan_hukum}}</span>
									<span v-else>-</span>
								</td>
								<td v-if="!columnData[4].hide && !columnData[4].disable">
									<span v-if="props.item.provinces">{{props.item.provinces.name}}</span>
									<span v-else>{{columnData[4].groupNoKey}}</span>
								</td>
								<td v-if="!columnData[5].hide && !columnData[5].disable">
									<span v-if="props.item.regencies">{{props.item.regencies.name}}</span>
									<span v-else>{{columnData[5].groupNoKey}}</span>
								</td>
								<td v-if="!columnData[6].hide && !columnData[6].disable">
									<span v-if="props.item.districts">{{props.item.districts.name}}</span>
									<span v-else>{{columnData[6].groupNoKey}}</span>
								</td>
								<td v-if="!columnData[7].hide && !columnData[7].disable">
									<span v-if="props.item.villages">{{props.item.villages.name}}</span>
									<span v-else>{{columnData[7].groupNoKey}}</span>
								</td>
								<td v-if="!columnData[8].hide" class="text-nowrap">
									<truncate clamp="...selengkapnya" :length="50" less="...kembali" :text="props.item.alamat"></truncate>
								</td>
								<td v-if="!columnData[9].hide" class="text-nowrap">
									<span v-if="props.item.app">{{props.item.app}}</span>
									<span v-else>-</span>
								</td>
								<td v-if="!columnData[10].hide" v-html="$options.filters.date(props.item.ultah)"></td>
								<td v-if="!columnData[11].hide" v-html="$options.filters.date(props.item.bergabung)"></td>
								<td v-if="!columnData[12].hide">
									<span v-if="props.item.website">{{props.item.website}}</span>
									<span v-else>-</span>
								</td>
								<td v-if="!columnData[13].hide">
									<span v-if="props.item.email">{{props.item.email}}</span>
									<span v-else>-</span>
								</td>
								<td v-if="!columnData[14].hide">
									<span v-if="props.item.telp">{{props.item.telp}}</span>
									<span v-else>-</span>
								</td>
								<td v-if="!columnData[15].hide">
									<span v-if="props.item.hp">{{props.item.hp}}</span>
									<span v-else>-</span>
								</td>
								<td v-if="!columnData[16].hide">
									<span v-if="props.item.pos">{{props.item.pos}}</span>
									<span v-else>-</span>
								</td>
								<td v-if="!columnData[17].hide" v-html="$options.filters.dateTime(props.item.created_at)"  class="text-nowrap"></td>
								<td v-if="!columnData[18].hide" class="text-nowrap">
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
												<img :src="'/images/cu/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive center-block" v-if="props.item.gambar">
												<img :src="'/images/image-articlen.jpg'" class="img-rounded img-responsive center-block" v-else>
											</td>
										</tr>
										<tr v-if="!columnData[1].hide">
											<td><b>{{columnData[1].title}}</b></td>
											<td>: {{props.item.name}}</td>
										</tr>
										<tr v-if="!columnData[2].hide">
											<td><b>{{columnData[2].title}}</b></td>
											<td>: {{props.item.no_ba}} {{props.index}}</td>
										</tr>
										<tr v-if="!columnData[3].hide">
											<td><b>{{columnData[3].title}}</b></td>
											<td>: {{props.item.badan_hukum}}</td>
										</tr>
										<tr v-if="!columnData[4].hide">
											<td><b>{{columnData[4].title}}</b></td>
											<td>
												<span v-if="props.item.provinces">
													: {{props.item.provinces.name}}
												</span>
												<span v-else>: -</span>	
											</td>
										</tr>
										<tr v-if="!columnData[5].hide" class="collapse" :class="'collap'+props.item.id">
											<td><b>{{columnData[5].title}}</b></td>
											<td>
												<span v-if="props.item.regencies">
													: {{props.item.regencies.name}}
												</span>
												<span v-else>: -</span>	
											</td>
										</tr>
										<tr v-if="!columnData[6].hide" class="collapse" :class="'collap'+props.item.id">
											<td><b>{{columnData[6].title}}</b></td>
											<td>
												<span v-if="props.item.districts">
													: {{props.item.districts.name}}
												</span>
												<span v-else>: -</span>	
											</td>
										</tr>
										<tr v-if="!columnData[7].hide" class="collapse" :class="'collap'+props.item.id">
											<td><b>{{columnData[7].title}}</b></td>
											<td>
												<span v-if="props.item.villages">
													: {{props.item.villages.name}}
												</span>
												<span v-else>: -</span>	
											</td>
										</tr>
										<tr v-if="!columnData[8].hide" class="collapse" :class="'collap'+props.item.id">
											<td colspan="2"><b>{{columnData[8].title}}</b></td>
										</tr>
										<tr v-if="!columnData[8].hide" class="collapse" :class="'collap'+props.item.id">
											<td  colspan="2" style="word-wrap: break-word;">{{props.item.alamat}} </td>
										</tr>
										<tr v-if="!columnData[9].hide" class="collapse" :class="'collap'+props.item.id">
											<td><b>{{columnData[9].title}}</b></td>
											<td>: {{props.item.app}}</td>
										</tr>
										<tr v-if="!columnData[10].hide" class="collapse" :class="'collap'+props.item.id">
											<td><b>{{columnData[10].title}}</b></td>
											<td>
												: <span v-html="$options.filters.date(props.item.ultah)"></span>
											</td>
										</tr>
										<tr v-if="!columnData[11].hide" class="collapse" :class="'collap'+props.item.id">
											<td><b>{{columnData[11].title}}</b></td>
											<td>
												: <span v-html="$options.filters.date(props.item.bergabung)"></span>
											</td>
										</tr>
										<tr v-if="!columnData[12].hide" class="collapse" :class="'collap'+props.item.id">
											<td><b>{{columnData[12].title}}</b></td>
											<td>: {{props.item.website}}</td>
										</tr>
										<tr v-if="!columnData[13].hide" class="collapse" :class="'collap'+props.item.id">
											<td><b>{{columnData[13].title}}</b></td>
											<td>: {{props.item.email}}</td>
										</tr>
										<tr v-if="!columnData[14].hide" class="collapse" :class="'collap'+props.item.id">
											<td><b>{{columnData[14].title}}</b></td>
											<td>: {{props.item.telp}}</td>
										</tr>
										<tr v-if="!columnData[15].hide" class="collapse" :class="'collap'+props.item.id">
											<td><b>{{columnData[15].title}}</b></td>
											<td>: {{props.item.hp}}</td>
										</tr>
										<tr v-if="!columnData[16].hide" class="collapse" :class="'collap'+props.item.id">
											<td><b>{{columnData[16].title}}</b></td>
											<td>: {{props.item.pos}}</td>
										</tr>
										<tr v-if="!columnData[17].hide" class="collapse" :class="'collap'+props.item.id">
											<td><b>{{columnData[17].title}}</b></td>
											<td>
												: <span v-html="$options.filters.dateTime(props.item.created_at)"></span>
											</td>
										</tr>
										<tr v-if="!columnData[18].hide" class="collapse" :class="'collap'+props.item.id">
											<td><b>{{columnData[18].title}}</b></td>
											<td>
												: <span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
												<span v-else>-</span> 
											</td>
										</tr>
										<tr>
											<td colspan="2">
												<collapse-button :id="props.item.id"></collapse-button>
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
	import truncate from 'vue-truncate-collapsed';
	import collapseButton from '../../components/collapseButton.vue';

	export default {
		name: 'CU',
		components: {
			DataViewer,
			appModal,
			message,
			truncate,
			collapseButton
		},
		data() {
			return {
				title: 'CU',
				kelas: 'cu',
				kelasVuex: 'CU',
				titleDesc: 'Mengelola data CU',
				titleIcon: 'icon-office',
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
						disable: false
					},
					{
						title: 'No. BA',
						key: 'no_ba',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Badan Hukum',
						key: 'badan_hukum',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Provinsi',
						key: 'id_province',
						groupKey: 'provinces.name',
						groupNoKey: '-',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Kabupaten',
						key: 'id_regency',
						groupKey: 'regencies.name',
						groupNoKey: '-',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Kecamatan',
						key: 'id_district',
						groupKey: 'districts.name',
						groupNoKey: '-',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Desa',
						key: 'id_village',
						groupKey: 'villages.name',
						groupNoKey: '-',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Alamat',
						key: 'alamat',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Aplikasi',
						key: 'app',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Tgl. Berdiri',
						key: 'ultah',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Tgl. Bergabung',
						key: 'bergabung',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Website',
						key: 'website',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'E-mail',
						key: 'email',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'No. Telp',
						key: 'telp',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'No. Hp',
						key: 'hp',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Kode Pos',
						key: 'pos',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Tgl. / Waktu Buat',
						key: 'created_at',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Tgl. / Waktu Ubah',
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
			this.fetch();
		},
		watch: {
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
				this.$store.dispatch('load' + this.kelasVuex + 'S', this.params);
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
			itemData(){
				return this.$store.getters.getCUS;
			},
			itemDataStat(){
				return this.$store.getters.getCULoadStatS;
			},
			updateStat() {
				return this.$store.getters.getCUUpdateStat;
			},
			updateMessage() {
				return this.$store.getters.getCUUpdateMessage;
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
			}
		}
	}
</script>