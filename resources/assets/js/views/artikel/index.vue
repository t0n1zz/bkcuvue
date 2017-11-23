<template>
	<div>
		<!-- Page header -->
		<div class="page-header">
			<div class="page-header-content has-visible-elements">
				<div class="page-title">
					<h4>
						<i class="icon-magazine position-left"></i>
				 		<span class="text-semibold">Artikel</span> - Mengelola data artikel</h4>
					<ul class="breadcrumb breadcrumb-caret position-right">
						<router-link :to="{ name:'dashboard' }" tag="li">
							<a>Dashboard</a>
						</router-link>
						<li class="active">Artikel</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- /page header -->
		<!-- page container -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">
					<!-- panel -->
					<data-viewer :source="source" :columnData="columnData" :filterData='filterData' :toolbarButton="4">
						<template slot="button">
							<div class="btn-group pb-5">
								<router-link :to="{ name:'artikelCreate'}" class="btn btn-default btn-icon">
									<i class="icon-plus3"></i> Tambah
								</router-link>
							</div>
						</template>
						<template scope="props">
							<tr>
								<td v-if="!columnData[0].hide">
									<a @click.prevent="modalMenuOpen(props.item)">
										<i class="icon-menu9"></i>
									</a>
								</td>
								<td v-if="!columnData[1].hide">
									<img :src="'/images/artikel/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive img-sm" v-if="props.item.gambar">
									<img :src="'/images/image-articlen.jpg'" class="img-rounded img-responsive img-sm" v-else>
								</td>
								<td v-if="!columnData[2].hide">{{props.item.nama}}</td>
								<td v-if="!columnData[3].hide">{{props.item.artikel__kategori.nama}}</td>
								<td v-if="!columnData[4].hide">{{props.item.penulis}}</td>
								<td v-if="!columnData[5].hide" v-html="$options.filters.checkStatus(props.item.terbitkan)"></td>
								<td v-if="!columnData[6].hide" v-html="$options.filters.checkStatus(props.item.utamakan)"></td>
								<td v-if="!columnData[7].hide" class="text-nowrap">{{props.item.created_at | publishDate}}</td>
							</tr>
						</template>
					</data-viewer>
				</div>
			</div>
		</div>
		<!-- page container -->

		<!-- modal -->
		<!-- table-context-menu -->
		<app-modal 
		:show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton"
		@batal="modalBatal" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @errorOk="modalTutup"
		>
			<template slot="modal-title">
				{{ modalTitle }}
			</template>
			<template slot="modal-body1">
				<div class="panel panel-flat blog-horizontal blog-horizontal-2">
					<div class="panel-body">
						<div class="thumb">
							<img :src="'/images/artikel/' + modalData.gambar + '.jpg'" class="img-rounded img-responsive" v-if="modalData.gambar">
							<img :src="'/images/image-article.jpg'" class="img-rounded img-responsive" v-else>
						</div>
						<div class="table-responsive blog-preview">
							<table class="table table-xs">
								<tbody class="text-left">
									<tr>
										<td>
											<b>Judul:</b>
										</td>
										<td>{{ modalData.nama }}</td>
									</tr>
									<tr>
										<td>
											<b>Kategori:</b>
										</td>
										<td v-if="modalData.artikel__kategori">{{modalData.artikel__kategori.nama}}</td>
										<td v-else>-</td>
									</tr>
									<tr>
										<td>
											<b>Penulis:</b>
										</td>
										<td>{{ modalData.penulis }}</td>
									</tr>
									<tr>
										<td>
											<b>Terbitkan:</b>
										</td>
										<td>
											<span v-html="$options.filters.checkStatus(modalData.terbitkan)"></span>
										</td>
									</tr>
									<tr>
										<td>
											<b>Utamakan:</b>
										</td>
										<td>
											<span v-html="$options.filters.checkStatus(modalData.utamakan)"></span>
										</td>
									</tr>
									<tr>
										<td>
											<b>Tgl. Tulis:</b>
										</td>
										<td>{{ modalData.created_at | publishDate }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-6">
						<div class="list-unstyled">
							<a class="list-group-item">
								<i class="icon-reading"></i> Baca</a>
							<a @click.prevent="modalEdit(modalData.id)" class="list-group-item">
								<i class="icon-pencil5"></i> Ubah</a>
							<a class="list-group-item" @click.prevent="modalConfirmOpen('hapus')">
								<i class="icon-bin2"></i> Hapus</a>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="list-unstyled">
							<a class="list-group-item" @click.prevent="modalConfirmOpen('updateTerbitkan')">
								<i class="icon-file-upload"></i>
								<span v-if="modalData.terbitkan == 0">Terbitkan</span>
								<span v-else>Tidak Terbitkan</span>
							</a>
							<a class="list-group-item" @click.prevent="modalConfirmOpen('updateUtamakan')">
								<i class="icon-pushpin"></i>
								<span v-if="modalData.utamakan == 0">Utamakan</span>
								<span v-else>Tidak Utamakan</span>
							</a>
						</div>
					</div>
					<div class="col-sm-12">
						<hr>
					</div>
				</div>
			</template>
			<template slot="modal-body2">
				<app-form @error="modalError" @success="modalSuccess">
				</app-form>
			</template>
			<template slot="modal-footer1">
				<button class="btn btn-default" @click.prevent="modalTutup"><i class="icon-cross"></i> Tutup</button>
			</template>
		</app-modal>

	</div>
</template>

<script>
	import {
		bus
	} from '../../app';
	import corefunc from '../../assets/core/app.js';
	import moment from 'moment';
	import DataViewer from '../../components/dataviewer.vue';
	import appModal from '../../components/modal';

	export default {
		name: 'ArtikelIndex',
		components: {
			DataViewer,
			appModal,
		},
		mounted() {
			corefunc.core_function();
		},
		data() {
			return {
				source: '/api/artikel',
				source2: '',
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
				columnData: [{
						title: 'Menu',
						key: 'menu',
						excelType: 'string',
						sort: false,
						hide: false
					},
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
						key: 'artikel_kategori_id',
						groupKey: 'artikel__kategori.nama',
						excelType: 'string',
						sort: true,
						hide: false
					},
					{
						title: 'Penulis',
						key: 'penulis',
						groupKey: 'penulis',
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
					}
				],
				modalShow: false,
				modalData: [],
				modalTitle: '',
				modalState: '',
				modalButton: ''
			}
		},
		methods: {
			modalMenuOpen(data) {
				this.modalShow = true;
				this.modalState = 'normal1';
				this.modalTitle = '';
				this.modalData = data;
			},
			modalConfirmOpen(type) {
				this.modalState = 'confirm-batal';
				this.source2 = type;

				if (type == 'hapus') {
					this.modalTitle = 'Hapus artikel ini?';
					this.modalButton = 'Iya, Hapus';
				} else if (type == 'updateTerbitkan') {
					if (this.modalData.terbitkan == 0) {
						this.modalTitle = 'Terbitkan artikel ini?';
						this.modalButton = 'Iya, terbitkan';
					} else {
						this.modalTitle = 'Tidak terbitkan artikel ini?';
						this.modalButton = 'Iya, tidak terbitkan';
					}
				} else if (type == 'updateUtamakan') {
					if (this.modalData.utamakan == 0) {
						this.modalTitle = 'Utamakan artikel ini?';
						this.modalButton = 'Iya, utamakan';
					} else {
						this.modalTitle = 'Tidak utamakan artikel ini?';
						this.modalTitle = 'Iya, tidak utamakan';
					}
				}
			},
			modalSave() {
				var vm = this;
				vm.mutateModalState('loading');
				axios.put(`${vm.source}/update/${vm.modal.formId}`, vm.modal.formValue)
					.then(function (response) {
						if (response.data.saved) {
							vm.modalSuccess(response.data.message);
						} else {
							vm.modalError();
						}
					})
					.catch(function (error) {
						vm.modalError();
					})
			},
			modalEdit(id){
				this.modalShow = false;
				this.$router.push('/artikel/edit/' + id);
			},
			modalError() {
				this.modalTitle = 'Oops terjadi kesalahan :(';
				this.modalState = 'error';
				this.modalButton = 'Ok';
			},
			modalSuccess(title) {
				this.modalTitle = title;
				this.modalState = 'success';
				this.modalButton = 'Ok';
			},
			modalBatal() {
				this.modalState = 'normal1';
				this.modalTitle = '';
			},
			modalTutup() {
				if (this.modalState == "success") {
					bus.$emit('fetchData');
				}
		 		this.modalShow = false;
			},
			modalConfirmOk() {
				var vm = this;
				vm.modalState ='loading';
				if (vm.source2 == 'hapus') {
					axios.delete(`${vm.source}/${vm.modalData.id}`)
						.then(function (response) {
							if (response.data.deleted) {
								vm.modalSuccess(response.data.message);
							} else {
								vm.modalError();
							}
						})
						.catch(function (error) {
							vm.modalError();
						})
				} else if (vm.source2 == "updateTerbitkan" || vm.source2 == "updateUtamakan") {
					axios.post(`${vm.source}/${vm.source2}/${vm.modalData.id}`)
						.then(function (response) {
							if (response.data.saved) {
								vm.modalSuccess(response.data.message);
							} else {
								vm.modalError();
							}
						})
						.catch(function (error) {
							vm.modalError();
						})
				}
			}
		},
		filters: {
			publishDate: function (value) {
				return moment(value).format('DD MMMM YYYY');
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