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
							<div class="btn-group pb-5">
								<router-link :to="{ name: kelas + 'Create'}" class="btn btn-default btn-icon" v-tooltip:top="'Tambah ' + title">
									<i class="icon-plus3"></i> Tambah
								</router-link>
							</div>

							<!-- ubah-->
							<div class="btn-group pb-5">
								<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-default btn-icon" v-tooltip:top="'Ubah ' + title" :disabled="!selectedItem.id">
									<i class="icon-pencil5"></i> Ubah
								</button>
							</div>

							<!-- hapus -->
							<div class="btn-group pb-5">
								<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-default btn-icon" v-tooltip:top="'Hapus ' + title"  :disabled="!selectedItem.id">
									<i class="icon-bin2"></i> Hapus
								</button>
							</div>

							<!-- status -->
							<div class="btn-group pb-5">
								<button @click.prevent="modalConfirmOpen('updateStatus')" class="btn btn-default btn-icon"  v-tooltip:top="'Ubah Status User'"  :disabled="!selectedItem.id">
									<i class="icon-file-upload"></i> <span v-if="selectedItem.status === 1">Tidak Aktifkan</span>
									<span v-else>Aktifkan</span>
								</button>
							</div>

						</template>

						<!-- button context -->
						<template slot="button-context">
							<li class="text-center pb-5 pt-5 bg-primary"><b class="text-size-large">Nama | Username</b></li>
							<li><hr class="no-margin-bottom no-margin-top"/></li>
							<li class="text-center pb-10 pt-10 pl-5 pr-5"><span class="text-size-large">{{selectedItem.nama}} | {{selectedItem.username}}</span></li>
							<li><hr class="no-margin-top no-margin-bottom"/></li>
							<li>
								<div class="pl-5 pr-5 pb-5 pt-10">
									<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Ubah' + title" :disabled="!selectedItem.id">
										<i class="icon-pencil5"></i> Ubah
									</button>
								</div>
							</li>
							<li>
								<div class="pl-5 pr-5 pb-5">
									<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Hapus ' + title"  :disabled="!selectedItem.id">
										<i class="icon-bin2"></i> Hapus
									</button>
								</div>
							</li>
							<li>
								<div class="pl-5 pr-5 pb-5">
									<button @click.prevent="modalConfirmOpen('updateStatus')" class="btn btn-default btn-icon btn-block"  v-tooltip:top="'Ubah Status User'"  :disabled="!selectedItem.id">
										<i class="icon-file-upload"></i> <span v-if="selectedItem.status === 1">Tidak Aktifkan</span>
										<span v-else>Aktifkan</span>
									</button>
								</div>
							</li>
						</template>

						<!-- item desktop -->
						<template slot="item-desktop" slot-scope="props">
							<tr :class="{ 'info': selectedItem.id === props.item.id }" @click="selectedRow(props.item)">
								<td v-if="!columnData[0].hide">
									<img :src="'/images/artikel/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive img-sm" v-if="props.item.gambar">
									<img :src="'/images/image-articlen.jpg'" class="img-rounded img-responsive img-sm" v-else>
								</td>
								<td v-if="!columnData[1].hide" class="warptext">{{props.item.nama}}</td>
								<td v-if="!columnData[2].hide" class="warptext">{{props.item.username}}</td>
								<td v-if="!columnData[3].hide && !columnData[4].disable">
									<span v-if="props.item.c_u">{{props.item.c_u.nama}}</span>
								</td>
								<td v-if="!columnData[4].hide" v-html="$options.filters.checkStatus(props.item.status)"></td>
								<td v-if="!columnData[5].hide" class="text-nowrap" v-html="$options.filters.publishDate(props.item.created_at)"></td>
							</tr>
						</template>

						<!-- mobile -->
						<!-- button mobile -->
						<template slot="button-mobile" class="hidden-print">
							<!-- tambah -->
							<router-link :to="{ name:kelas + 'Create'}" class="btn btn-default btn-icon btn-block">
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
												<td colspan="2">
													<img :src="'/images/artikel/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive center-block" v-if="props.item.gambar">
													<img :src="'/images/image-articlen.jpg'" class="img-rounded img-responsive center-block" v-else>
												</td>
											</tr>
											<tr v-if="!columnData[1].hide">
												<td><b>{{columnData[1].title}}</b></td>
												<td>: {{props.item.nama}}</td>
											</tr>
											<tr v-if="!columnData[2].hide">
												<td><b>{{columnData[2].title}}</b></td>
												<td>: {{props.item.username}}</td>
											</tr>
											<tr v-if="!columnData[3].hide">
												<td><b>{{columnData[3].title}}</b></td>
												<td>
													<span v-if="props.item.c_u">
														: {{props.item.c_u.nama}}
													</span>
													<span v-else>: -</span>	
												</td>
											</tr>
											<tr v-if="!columnData[4].hide">
												<td><b>{{columnData[4].title}}</b></td>
												<td>
													: <span v-html="$options.filters.checkStatus(props.item.status)"></span>
												</td>
											</tr>
											<tr v-if="!columnData[5].hide">
												<td><b>{{columnData[5].title}}</b></td>
												<td>
													: <span v-html="$options.filters.publishDateMobile(props.item.created_at)"></span>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="panel-footer hidden-print">
									<div class="text-center button-toolbar">
										<div class="pt-10 pb-10 pl-15 pr-15">
											<button @click.prevent="ubahData(props.item.id)" class="btn btn-default btn-icon btn-block">
												<i class="icon-pencil5"></i> Ubah
											</button>
										</div>
										
										<div class="pb-10 pl-15 pr-15">
											<button @click.prevent="modalConfirmOpen('hapus',true,props.item)" class="btn btn-default btn-icon btn-block">
												<i class="icon-bin2"></i> <span>Hapus</span>
											</button>
										</div>
										
										<div class="pb-10 pl-15 pr-15">
											<button @click.prevent="modalConfirmOpen('updateStatus',true,props.item)" class="btn btn-default btn-icon btn-block">
												<i class="icon-file-upload"></i> <span v-if="props.item.status === 1">Tidak Aktifkan</span>
												<span v-else>Aktifkan</span> 
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
		name: 'UserIndex',
		components: {
			DataViewer,
			appModal,
			message
		},
		data() {
			return {
				title: 'Role',
				titleDesc: 'Mengelola data peran user',
				titleIcon: 'icon-hat',
				kelas: 'role',
				id_cu: '',
				source: '',
				selectedItem: [],
				params: {
          column: 'name',
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
						title: 'Hak Akses',
						key: 'permissions',
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
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Hak Akses',
						key: 'permissions',
						sort: false,
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
			this.fetch();
		},
		watch: {
			userDataStat(value){
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
				this.$store.dispatch('loadRoleS', this.params);
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
					this.modalTitle = 'Hapus ' + this.title +' ini?';
					this.modalButton = 'Iya, Hapus';
				} else if (source == 'updatePermission') {
					if (this.selectedItem.status == 0) {
						this.modalTitle = 'Aktifkan user ini?';
						this.modalButton = 'Iya, aktifkan';
					} else {
						this.modalTitle = 'Non-aktifkan user ini?';
						this.modalButton = 'Iya, non-aktifkan';
					}
				}
			},
			modalTutup() {
				this.modalShow = false;
				this.$store.dispatch('resetRoleUpdateStat');
			},
			modalConfirmOk() {
				var vm = this;
				if (vm.source == 'hapus') {
					this.$store.dispatch('deleteRole', this.selectedItem.id);
				} else if (vm.source == "updateStatus"){
					this.$store.dispatch('updateUserStatus', this.selectedItem.id);
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
				return this.$store.getters.getRoleS;
			},
			itemDataStat(){
				return this.$store.getters.getRoleLoadStatS;
			},
			updateStat() {
				return this.$store.getters.getRoleUpdateStat;
			},
			updateMessage() {
				return this.$store.getters.getRoleUpdateMessage;
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
				return '/images/'+ this.kelas +'/' + value + 'n.jpg';
			}
		}
	}
</script>