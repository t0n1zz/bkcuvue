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
							<!-- desktop -->
							<div class="col-sm-10 d-none d-sm-block">
								<button type="button" class="btn btn-light btn-icon" :disabled="markNotifStat === 'loading' || unreadNotification == 0" @click.prevent="modalConfirmOpen('tandai')">
									<i class="icon-checkbox-checked"></i> Tandai sudah baca semua
								</button>
							</div>
							<div class="col-sm-2 text-right d-none d-sm-block">
								<button type="button" class="btn btn-light btn-icon" :disabled="notifStat == 'loading'"   @click.prevent="fetch()">
									<i class="icon-sync" :class="{'spinner' : notifStat === 'loading'}"></i>
								</button>
							</div>
							<!-- mobile -->
							<div class="col-sm-12 d-block d-sm-none">
								<button type="button" class="btn btn-light btn-icon btn-block mb-1" :disabled="markNotifStat === 'loading' || unreadNotification == 0" @click.prevent="modalConfirmOpen('tandai')">
									<i class="icon-checkbox-checked"></i> Tandai sudah baca semua
								</button>
								<button type="button" class="btn btn-light btn-icon btn-block mb-1"  @click.prevent="fetch()">
									<i class="icon-sync" :class="{'spinner' : notifStat === 'loading'}"></i> Reload
								</button>
							</div>
						</div>
					</div>

					<div v-if="notifStat == 'loading'">
						<div class="card">
							<div class="card-body">
								<h4>Mohon tunggu...</h4>
								<div class="progress">
                  <div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
                    <span class="sr-only">100% Complete</span>
                  </div>
                </div>
							</div>
						</div>
					</div>

					<!-- itemdata -->
					<div v-else>
						<div v-if="notification && notification.length > 0" >

							<div class="nav-tabs-responsive mb-3">
								<ul class="nav nav-tabs nav-tabs-solid bg-light">
									<li class="nav-item">
										<a href="#" class="nav-link" :class="{'active' : tabName == 'semua'}" @click.prevent="changeTab('semua')"><i class="icon-table2 mr-2"></i> Semua</a>
									</li>
									<li class="nav-item">
										<a href="#" class="nav-link" :class="{'active' : tabName == 'laporanCu'}" @click.prevent="changeTab('laporanCu')"><i class="icon-stats-bars2 mr-2"></i> Laporan CU</a>
									</li>
									<li class="nav-item">
										<a href="#" class="nav-link" :class="{'active' : tabName == 'diklatBKCU'}" @click.prevent="changeTab('diklatBKCU')"><i class="icon-graduation2 mr-2"></i> Diklat BKCU</a>
									</li>
									<li class="nav-item">
										<a href="#" class="nav-link" :class="{'active' : tabName == 'pertemuanBKCU'}" @click.prevent="changeTab('pertemuanBKCU')"><i class="icon-ungroup mr-2"></i> Pertemuan BKCU</a>
									</li>
									<li class="nav-item">
										<a href="#" class="nav-link" :class="{'active' : tabName == 'selfAssesment'}" @click.prevent="changeTab('selfAssesment')"><i class="icon-reading mr-2"></i> Self Assesment ACCESS</a>
									</li>
									<li class="nav-item">
										<a href="#" class="nav-link" :class="{'active' : tabName == 'monitoring'}" @click.prevent="changeTab('monitoring')"><i class="icon-collaboration mr-2"></i> Monitoring</a>
									</li>
									<li class="nav-item">
										<a href="#" class="nav-link" :class="{'active' : tabName == 'klaimJALINAN'}" @click.prevent="changeTab('klaimJALINAN')"><i class="icon-accessibility2 mr-2"></i> Klaim JALINAN</a>
									</li>
								</ul>
							</div>

							<!-- semua -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'semua'">
									<div v-for="(notif, index) in notification" :key="index">

										<div class="card" :class="{'text-muted' : notif.read_at != null}" @click.prevent="goToPage(notif)" style="cursor:pointer;">
											<div class="card-header bg-white header-elements-inline">
												<span class="card-title">
													<span v-if="notif.data.tipe == 'laporanCu' || notif.data.tipe == 'laporanTp' "><i class="icon-stats-bars2"></i> Laporan Statistik CU</span>
													<span v-else-if="notif.data.tipe == 'diklatBKCU'"><i class="icon-graduation2"></i> Diklat BKCU</span>
													<span v-else-if="notif.data.tipe == 'pertemuanBKCU'"><i class="icon-ungroup"></i> Pertemuan BKCU</span>
													<span v-else-if="notif.data.tipe == 'selfAssesment'"><i class="icon-reading"></i> Self Assesment ACCESS</span>
													<span v-else-if="notif.data.tipe == 'monitoring'"><i class="icon-collaboration"></i> Monitoring</span>
													<span v-else-if="notif.data.tipe == 'klaimJALINAN'"><i class="icon-accessibility2"></i> Klaim JALINAN</span>
													<span v-else><i class="icon-bubble-notification"></i> Notifikasi</span>
												</span>
												<div class="header-elements">
													{{notif.created_at | relativeHour}}
												</div>
											</div>
											<div class="card-body">
												{{notif.data.message}}
											</div>
										</div>

									</div>
								</div>
							</transition>

							<!-- laporanCu -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'laporanCu'">
									<div v-for="(notif, index) in notification" :key="index">

										<div class="card" :class="{'text-muted' : notif.read_at != null}" @click.prevent="goToPage(notif)" style="cursor:pointer;" v-if="notif.data.tipe == 'laporanCu'">
											<div class="card-header bg-white header-elements-inline">
												<span class="card-title">
													<i class="icon-stats-bars2"></i> Laporan Statistik CU
												</span>
												<div class="header-elements">
													{{notif.created_at | relativeHour}}
												</div>
											</div>
											<div class="card-body">
												{{notif.data.message}}
											</div>
										</div>

									</div>
								</div>
							</transition>

							<!-- diklatBKCU -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'diklatBKCU'">
									<div v-for="(notif, index) in notification" :key="index">

										<div class="card" :class="{'text-muted' : notif.read_at != null}" @click.prevent="goToPage(notif)" style="cursor:pointer;" v-if="notif.data.tipe == 'diklatBKCU'">
											<div class="card-header bg-white header-elements-inline">
												<span class="card-title">
													<i class="icon-graduation2"></i> Diklat BKCU
												</span>
												<div class="header-elements">
													{{notif.created_at | relativeHour}}
												</div>
											</div>
											<div class="card-body">
												{{notif.data.message}}
											</div>
										</div>

									</div>
								</div>
							</transition>

							<!-- pertemuanBKCU -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'pertemuanBKCU'">
									<div v-for="(notif, index) in notification" :key="index">

										<div class="card" :class="{'text-muted' : notif.read_at != null}" @click.prevent="goToPage(notif)" style="cursor:pointer;" v-if="notif.data.tipe == 'pertemuanBKCU'">
											<div class="card-header bg-white header-elements-inline">
												<span class="card-title">
													<i class="icon-ungroup2"></i> Pertemuan BKCU
												</span>
												<div class="header-elements">
													{{notif.created_at | relativeHour}}
												</div>
											</div>
											<div class="card-body">
												{{notif.data.message}}
											</div>
										</div>

									</div>
								</div>
							</transition>

							<!-- selfAssesment -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'selfAssesment'">
									<div v-for="(notif, index) in notification" :key="index">

										<div class="card" :class="{'text-muted' : notif.read_at != null}" @click.prevent="goToPage(notif)" style="cursor:pointer;" v-if="notif.data.tipe == 'selfAssesment'">
											<div class="card-header bg-white header-elements-inline">
												<span class="card-title">
													<i class="icon-reading"></i> Self Assesment ACCESS
												</span>
												<div class="header-elements">
													{{notif.created_at | relativeHour}}
												</div>
											</div>
											<div class="card-body">
												{{notif.data.message}}
											</div>
										</div>

									</div>
								</div>
							</transition>

							<!-- monitoring -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'monitoring'">
									<div v-for="(notif, index) in notification" :key="index">

										<div class="card" :class="{'text-muted' : notif.read_at != null}" @click.prevent="goToPage(notif)" style="cursor:pointer;" v-if="notif.data.tipe == 'monitoring'">
											<div class="card-header bg-white header-elements-inline">
												<span class="card-title">
													<i class="icon-collaboration"></i> Monitoring
												</span>
												<div class="header-elements">
													{{notif.created_at | relativeHour}}
												</div>
											</div>
											<div class="card-body">
												{{notif.data.message}}
											</div>
										</div>

									</div>
								</div>
							</transition>

							<!-- klaimJALINAN -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'klaimJALINAN'">
									<div v-for="(notif, index) in notification" :key="index">

										<div class="card" :class="{'text-muted' : notif.read_at != null}" @click.prevent="goToPage(notif)" style="cursor:pointer;" v-if="notif.data.tipe == 'klaimJALINAN'">
											<div class="card-header bg-white header-elements-inline">
												<span class="card-title">
													<i class="icon-accessibility2"></i> Klaim JALINAN
												</span>
												<div class="header-elements">
													{{notif.created_at | relativeHour}}
												</div>
											</div>
											<div class="card-body">
												{{notif.data.message}}
											</div>
										</div>

									</div>
								</div>
							</transition>

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
				tabName: 'semua',
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
				if(notif.data.tipe == 'laporanCu'){
						this.$router.push({name: 'laporanCuDetail', params: { id: notif.data.url }});
				}else if(notif.data.tipe == 'laporanTp'){
						this.$router.push({name: 'laporanTpDetail', params: { id: notif.data.url }});
				}else if(notif.data.tipe == 'diklatBKCU'){
					this.$router.push({name: 'diklatBKCUDetail', params: { id:  notif.data.url }});
				}else if(notif.data.tipe == 'pertemuanBKCU'){
					this.$router.push({name: 'pertemuanBKCUDetail', params: { id:  notif.data.url }});
				}
				this.$store.dispatch('notification/markRead',notif.id);
			},
			changeTab(value) {
				this.tabName = value;
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
				notifStat: 'notifStat',
				unreadNotification: 'unreadNotification',
				markNotifStat: 'markNotifStat',
			}),
		},
	}
</script>