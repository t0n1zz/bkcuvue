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

							<!-- hak akses -->
							<div class="btn-group pb-5">
								<button @click.prevent="modalHakAksesOpen()" class="btn btn-default btn-icon"  v-tooltip:top="'Ubah hak akses user'"  :disabled="!selectedItem.id">
									<i class="icon-eye"></i> <span>Hak Akses</span>
								</button>
							</div>

						</template>

						<!-- button context -->
						<template slot="button-context">
							<li class="text-center pb-5 pt-5 bg-primary"><b class="text-size-large">Nama | Username</b></li>
							<li><hr class="no-margin-bottom no-margin-top"/></li>
							<li class="text-center pb-10 pt-10 pl-5 pr-5"><span class="text-size-large">{{selectedItem.name}} | {{selectedItem.username}}</span></li>
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
							<li>
								<div class="pl-5 pr-5 pb-5">
									<button @click.prevent="modalHakAksesOpen()" class="btn btn-default btn-icon btn-block"  v-tooltip:top="'Ubah hak akses user'"  :disabled="!selectedItem.id">
										<i class="icon-eye"></i> <span>Hak Akses</span>
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
								<td v-if="!columnData[1].hide" class="warptext">{{props.item.name}}</td>
								<td v-if="!columnData[2].hide" class="warptext">{{props.item.username}}</td>
								<td v-if="!columnData[3].hide && !columnData[4].disable">
									<span v-if="props.item.c_u">{{props.item.c_u.name}}</span>
									<span v-else>Puskopdit BKCU Kalimantan</span>
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
												<td>: {{props.item.name}}</td>
											</tr>
											<tr v-if="!columnData[2].hide">
												<td><b>{{columnData[2].title}}</b></td>
												<td>: {{props.item.username}}</td>
											</tr>
											<tr v-if="!columnData[3].hide">
												<td><b>{{columnData[3].title}}</b></td>
												<td>
													<span v-if="props.item.c_u">
														: {{props.item.c_u.name}}
													</span>
													<span v-else>: Puskopdit BKCU Kalimantan</span>	
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

										<!-- ubah mobile-->
										<div class="pt-10 pb-10 pl-15 pr-15">
											<button @click.prevent="ubahData(props.item.id)" class="btn btn-default btn-icon btn-block">
												<i class="icon-pencil5"></i> Ubah
											</button>
										</div>
										
										<!-- hapus mobile-->
										<div class="pb-10 pl-15 pr-15">
											<button @click.prevent="modalConfirmOpen('hapus',true,props.item)" class="btn btn-default btn-icon btn-block">
												<i class="icon-bin2"></i> <span>Hapus</span>
											</button>
										</div>
										
										<!-- status mobile -->
										<div class="pb-10 pl-15 pr-15">
											<button @click.prevent="modalConfirmOpen('updateStatus',true,props.item)" class="btn btn-default btn-icon btn-block">
												<i class="icon-file-upload"></i> <span v-if="props.item.status === 1">Tidak Aktifkan</span>
												<span v-else>Aktifkan</span> 
											</button>
										</div>
									</div>

									<!-- hak akses mobile -->
									<div class="pb-10 pl-15 pr-15">
										<button @click.prevent="modalHakAksesOpen(true,props.item)" class="btn btn-default btn-icon btn-block"  v-tooltip:top="'Ubah hak akses user'">
											<i class="icon-eye"></i> <span>Hak Akses</span>
										</button>
									</div>
								</div>
							</div>
						</template>

					</data-viewer>
					
				</div>
			</div>
		</div>
		
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :size="modalSize" :color="modalColor" :title="modalTitle" :button="modalButton" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- hak akses -->
			<template slot="modal-body1">

				<!-- select role -->
				<div class="form-group">
					<label class="text-semibold">Pilih peran:</label>
					<select name="id_role" data-width="100%" class="bootstrap-select" @change="changeRole($event.target.value)">
						<option disabled value="">Silahkan pilih peran user</option>
						<option v-for="role in roleData" :value="role.id">{{role.name}}</option>
					</select>
				</div>

				<!-- hak-akses -->
				<hak-akses></hak-akses>
				<!-- divider -->
				<hr>
			</template>

			<template slot="modal-footer1">

				<!-- button -->
				<button class="btn btn-default" @click="modalTutup">
					<i class="icon-cross"></i> Tutup</button>
				<button type="submit" class="btn btn-primary" @click="modalTutup">
					<i class="icon-floppy-disk"></i> Simpan</button>
			</template>
		</app-modal>

	</div>
</template>

<script>
	import corefunc from '../../assets/core/app.js';
	import moment from 'moment';
	import DataViewer from '../../components/dataviewer.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import hakAkses from "../../components/hakAkses.vue";

	export default {
		name: 'UserIndex',
		components: {
			DataViewer,
			appModal,
			message,
			hakAkses
		},
		data() {
			return {
				title: 'User',
				titleDesc: 'Mengelola data user',
				titleIcon: 'icon-users4',
				kelas: 'user',
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
						title: 'Username',
						key: 'username',
						type: 'string',
						disable: false
					},
					{
						title: 'Status',
						key: 'status',
						type: 'boolean',
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
					}
				],
				columnData: [
					{
						title: 'Foto',
						key: 'gambar',
						sort: false,
						hide: false,
						disable: false
					},
					{
						title: 'Nama',
						key: 'name',
						sort: true,
						hide: false,
						disable: false
					},
					{
						title: 'Username',
						key: 'username',
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
						disable: false,
					},
					{
						title: 'Status',
						key: 'status',
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
					}
				],
				modalShow: false,
				modalState: '',
				modalColor: '',
				modalSize: '',
				modalTitle: '',
				modalButton: ''
			}
		},
		mounted() {
			corefunc.core_function();
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
			$('.bootstrap-select').selectpicker('render');
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
				this.$store.dispatch('loadUserS', this.params);
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			ubahData(id) {
				this.$router.push('/' + this.kelas + '/edit/' + id);
			},
			changeRole(id){
				this.$store.dispatch('loadRolePermission',id);
			},
			modalConfirmOpen(source, isMobile, itemMobile) {
				this.modalShow = true;
				this.modalState = 'confirm-tutup';
				this.source = source;

				if(isMobile){
					this.selectedItem = itemMobile;
				}

				if (source == 'hapus') {
					this.modalTitle = 'Hapus ' + this.kelas + ' dengan name ' + this.selectedItem.name + '?';
					this.modalButton = 'Iya, Hapus';
				} else if (source == 'updateStatus') {
					if (this.selectedItem.status == 0) {
						this.modalTitle = 'Aktifkan user ini?';
						this.modalButton = 'Iya, aktifkan';
					} else {
						this.modalTitle = 'Non-aktifkan user ini?';
						this.modalButton = 'Iya, non-aktifkan';
					}
				}
			},
			modalHakAksesOpen(isMobile,itemMobile){
				this.modalShow = true;
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Peran dan Hak Akses User'
				this.modalState = 'normal1';
				this.modalSize = 'modal-full';

				if(isMobile){
					this.selectedItem = itemMobile;
				}

				this.$store.dispatch('loadRoleAll');
				$('.bootstrap-select').selectpicker('render');
			},
			modalTutup() {
				this.modalShow = false;
				this.modalColor = '';
				this.modalTitle = '';
				this.modalSize = '';

				this.$store.dispatch('resetUserUpdateStat');
			},
			modalConfirmOk() {
				var vm = this;
				if (vm.source == 'hapus') {
					this.$store.dispatch('deleteUser', this.selectedItem.id);
				} else if (vm.source == "updateStatus"){
					this.$store.dispatch('updateUserStatus', this.selectedItem.id);
				}
			},
			reload(){
				$('.bootstrap-select').selectpicker('refresh');
				$('.bootstrap-select').selectpicker('render');
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
				return this.$store.getters.getUserS;
			},
			itemDataStat(){
				return this.$store.getters.getUserLoadStatS;
			},
			roleData(){
				return this.$store.getters.getRoleS;
			},
			roleDataStat(){
				return this.$store.getters.getRoleLoadStatS;
			},
			updateStat() {
				return this.$store.getters.getUserUpdateStat;
			},
			updateMessage() {
				return this.$store.getters.getUserUpdateMessage;
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