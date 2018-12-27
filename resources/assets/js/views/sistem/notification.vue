<template>
	<div>
		<!-- Page header -->
		<page-header 
		:title="title" 
		:titleDesc="titleDesc" 
		:titleIcon="titleIcon"></page-header>

		<!-- page container -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">

					<!-- panel -->
					<div class="card card-body d-print-none">
						<div class="row">
							<div class="col-sm-12">
								<button type="button" class="btn btn-light btn-icon mb-1" :disabled="markNotifStat === 'loading' || unreadNotification == 0" @click.prevent="modalConfirmOpen('tandai')">
									<i class="icon-bell-check"></i> Tandai sudah baca semua
								</button>
							</div>
						</div>
					</div>

					<!-- itemdata -->
					<div v-if="notification && notification.length > 0">
						<div class="card card-body" v-for="notif in notification">
							<div class="media" @click.prevent="goToPage(notif)" style="cursor:pointer;">
								<div class="mr-3 position-relative">
									<img :src="'/images/user/' +  notif.user.gambar + 'n.jpg'" width="36" height="36" class="rounded-circle"  alt="user image" v-if=" notif.user.gambar">
									<img src="/images/no_image_man.jpg" width="36" height="36" class="rounded-circle" alt="user image" v-else>
								</div>

								<div class="media-body">
									<div class="media-title">
										<span class="font-weight-semibold">
											<span v-html="$options.filters.notificationIcon(notif.data.tipe)"></span> {{notif.user.name}}
										</span>
										<span class="font-size-xs">
											[ CU {{notif.data.cu}} <span v-if="notif.data.tp != ''">- {{notif.data.tp}}</span> ]
										</span>
										<span class="text-muted float-right">
											<i class="icon-arrow-right5"></i>{{notif.created_at | relativeHour}}
										</span>
									</div>

									<span :class="{'text-muted' : notif.read_at != null,'text-primary' : notif.read_at == null}">{{notif.data.message}}</span>
								</div>
								
							</div>
						</div>
					</div>

					<!-- no itemdata -->
					<div v-else>
						<div class="card">
							<div class="card-body">
								<h3>Belum terdapat notifikasi apapun...</h3>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>		
		
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :size="modalSize" :color="modalColor" :button="modalButton" :content="modalContent" @confirmOk="modalConfirmOk" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
			<template slot="modal-title">{{ modalTitle }}</template>

			<template slot="modal-body1">

			</template>

		</app-modal>
	</div>
	
</template>

<script>
	import Vue from 'vue';
  import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import appModal from '../../components/modal';

	export default {
		components:{
			pageHeader,
			appModal,
		},
		data(){
			return {
				title: 'Notifikasi',
				kelas: 'notification',
				titleDesc: 'Melihat semua notifikasi',
				titleIcon: 'icon-bell2',
				state: '',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalSize: '',
				modalColor: '',
				modalButton: '',
				modalContent: '',
			}
		},
		created(){
			this.fetch();
		},
		watch: {
			'$route' (to, from){
				// check current page meta
				this.fetch();
			},
			// when updating data
      markNotifStat(value) {
				this.modalState = value;
				this.modalButton = 'Ok';
				
				if(value === "success"){
					this.modalTitle = "Notifikasi berhasil ditandai";
					this.modalContent = '';
					this.fetch();
				}
			}
    },
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas +'/getAll');
			},
			goToPage(notif){
				if(!notif.data.tp || notif.data.tp == ""){
					this.$router.push({name: 'laporanCuDetail', params: { id: notif.data.url }});
				}else{
					this.$router.push({name: 'laporanTpDetail', params: { id: notif.data.url }});
				}
				this.$store.dispatch('user/markNotifRead',notif.id);
			},
			modalConfirmOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.modalState = 'confirm-tutup';
				this.state = state;

				if(isMobile){
					this.selectedItem = itemMobile;
				}

				if (state == 'tandai') {
					this.modalTitle = 'Tandai semua ' + this.title + ' sudah dibaca?';
					this.modalButton = 'Iya, Tandai semua';
				} 
			},
			modalConfirmOk(){ // execute destroy
				if (this.state == 'tandai') {
					this.$store.dispatch(this.kelas + '/markAllRead');
				}
			},
			modalTutup(){
				this.modalShow = false;
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('notification',{
				notification: 'notification',
				unreadNotification: 'unreadNotification',
				markNotifStat: 'markNotifStat',
			}),
		},
	}
</script>