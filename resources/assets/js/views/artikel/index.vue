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

					<!-- main panel -->
					<data-viewer :source="source" :columnData="columnData" :filterData='filterData' :toolbarButton="4" :itemData="itemData" :itemDataStat="itemDataStat" 
					:params="params"
					@fetch="fetch">

						<!-- button -->
						<template slot="button">

							<!-- tambah -->
							<div class="btn-group pb-5">
								<router-link :to="{ name:'artikelCreate'}" class="btn btn-default btn-icon">
									<i class="icon-plus3"></i> Tambah
								</router-link>
							</div>

							<!-- ubah-->
							<div class="btn-group pb-5" v-if="selectedItem.id">
								<router-link :to="{ name:'artikelEdit', params: { id: selectedItem.id }}" class="btn btn-default btn-icon">
									<i class="icon-pencil5"></i> Ubah
								</router-link>
							</div>
							<div class="btn-group pb-5" v-else>
								<button class="btn btn-default btn-icon disabled">
									<i class="icon-pencil5"></i> Ubah
								</button>
							</div>

							<!-- hapus -->
							<div class="btn-group pb-5" v-if="selectedItem.id">
								<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-default btn-icon" :class="{'disabled': !selectedItem.id}">
									<i class="icon-bin2"></i> Hapus
								</button>
							</div>
							<div class="btn-group pb-5" v-else>
								<button class="btn btn-default btn-icon disabled">
									<i class="icon-bin2"></i> Hapus
								</button>
							</div>

							<!-- terbitkan -->
							<div class="btn-group pb-5" v-if="selectedItem.id">
								<button @click.prevent="modalConfirmOpen('updateTerbitkan')" class="btn btn-default btn-icon"
									:class="{'disabled': !selectedItem.id}">
									<i class="icon-file-upload"></i> <span v-if="selectedItem.terbitkan === 1">Tidak Terbitkan</span>
									<span v-else>Terbitkan</span>
								</button>
							</div>
							<div class="btn-group pb-5" v-else>
								<button class="btn btn-default btn-icon disabled">
									<i class="icon-file-upload"></i> Terbitkan
								</button>
							</div>

							<!-- utamakan -->
							<div class="btn-group pb-5" v-if="selectedItem.id">
								<button @click.prevent="modalConfirmOpen('updateUtamakan')" class="btn btn-default btn-icon"
									:class="{'disabled': !selectedItem.id}">
									<i class="icon-pushpin"></i> <span v-if="selectedItem.utamakan === 1">Tidak Utamakan</span>
									<span v-else>Utamakan</span>
								</button>
							</div>
							<div class="btn-group pb-5" v-else>
								<button class="btn btn-default btn-icon disabled">
									<i class="icon-pushpin"></i> Utamakan
								</button>
							</div>

						</template>

						<!-- table content -->
						<template scope="props">
							<tr :class="{ 'info': selectedItem.id === props.item.id }" @click="selectedRow(props.item)">
								<td v-if="!columnData[0].hide">
									<img :src="'/images/artikel/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive img-sm" v-if="props.item.gambar">
									<img :src="'/images/image-articlen.jpg'" class="img-rounded img-responsive img-sm" v-else>
								</td>
								<td v-if="!columnData[1].hide">{{props.item.nama}}</td>
								<td v-if="!columnData[2].hide">
									<span v-if="props.item.artikel__kategori !== null">{{props.item.artikel__kategori.nama}}</span>
								</td>
								<td v-if="!columnData[3].hide">
									<span v-if="props.item.artikel__penulis !== null">{{props.item.artikel__penulis.nama}}</span>
								</td>
								<td v-if="!columnData[4].hide" v-html="$options.filters.checkStatus(props.item.terbitkan)"></td>
								<td v-if="!columnData[5].hide" v-html="$options.filters.checkStatus(props.item.utamakan)"></td>
								<td v-if="!columnData[6].hide" class="text-nowrap" v-html="$options.filters.publishDate(props.item.created_at)"></td>
								<td v-if="!columnData[7].hide" class="text-nowrap">
									<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.publishDate(props.item.updated_at)"></span>
								</td>
							</tr>
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
		mounted() {
			corefunc.core_function();
		},
		data() {
			return {
				title: 'Artikel',
				titleDesc: 'Mengelola data artikel',
				titleIcon: 'icon-magazine',
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
						operator: 'like'
					},
					{
						title: 'Kategori',
						key: 'artikel_kategori.nama',
						operator: 'like'
					},
					{
						title: 'Penulis',
						key: 'penulis',
						operator: 'like'
					},
					{
						title: 'Tgl. Tulis',
						key: 'created_at',
						operator: 'between'
					}
				],
				columnData: [
					{
						title: 'Foto',
						key: 'gambar',
						excelType: 'string',
						sort: false,
						hide: false
					},
					{
						title: 'Judul',
						key: 'nama',
						excelType: 'string',
						sort: true,
						hide: false
					},
					{
						title: 'Kategori',
						key: 'id_artikel_kategori',
						groupKey: 'artikel__kategori.nama',
						excelType: 'string',
						sort: true,
						hide: false
					},
					{
						title: 'Penulis',
						key: 'id_artikel_penulis',
						groupKey: 'artikel__penulis.nama',
						excelType: 'string',
						sort: true,
						hide: false
					},
					{
						title: 'Terbitkan',
						key: 'terbitkan',
						excelType: 'string',
						sort: true,
						hide: false
					},
					{
						title: 'Utamakan',
						key: 'utamakan',
						excelType: 'string',
						sort: true,
						hide: false
					},
					{
						title: 'Tgl. Tulis',
						key: 'created_at',
						texcelType: 'string',
						sort: true,
						hide: false
					},
					{
						title: 'Tgl. Ubah',
						key: 'updated_at',
						texcelType: 'string',
						sort: true,
						hide: false
					}
				],
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalButton: ''
			}
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
				this.$store.dispatch('loadArtikelS', this.params);
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			modalConfirmOpen(source) {
				this.modalShow = true;
				this.modalState = 'confirm-tutup';
				this.source = source;

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
					this.$store.dispatch('updateArtikelTerbitkan', this.selectedItem.id);
				}
			}
		},
		computed: {
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