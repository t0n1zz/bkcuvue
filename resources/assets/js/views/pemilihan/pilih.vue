<template>
	<div>
		<!-- first navbar -->
		<div class="navbar navbar-expand-lg navbar-dark bg-indigo">

			<div class="navbar-brand wmin-0 mr-0">
				<a href="#" class="d-inline-block">
					<img src="/images/simo.png">
				</a>
			</div>


			<div>
				<span class="navbar-text ml-lg-3 mr-lg-auto">
					<span class="badge bg-success-400">PUSKOPCUINA</span>
				</span>	
			</div>

		</div>

		<!-- Page header -->
		<div>
			<div class="page-header">
				<div class="page-header-content header-elements-md-inline">
					<div class="page-title d-flex">
						<h4>
							<i class="mr-2" :class="titleIcon"></i>
							<span class="font-weight-semibold">{{ title }}</span> <small class="d-block text-muted">{{ titleDesc }}</small>
						</h4>
					</div>
				</div>
			</div>
		</div>
		
		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
					</message>

					<div v-if="itemDataStat == 'success'">
						<!-- ada pemilihan -->
						<div v-if="form">
							<!-- belum pilih -->
							<div v-if="form.pemilihan_calon_id == null">
								<!-- ucapan -->
								<div class="card card-body">
									<h5><b>Selamat Datang!</b> <br/> Silahkan memilih calon dengan menekan tombol 
									<button class="btn btn-primary btn-sm">
										<i class="icon-check"></i> PILIH
									</button> 
									pada masing-masing kartu calon dibawah ini:</h5>
								</div>
								<!-- pilihan -->
								<div class="row">
									<div class="col-md-6 col-lg-4" v-for="(item, index) in itemData.calon" :key="index">
										<div class="card border-primary">
											<div class="card-header bg-white">
												<h5 class="card-title">{{ item.name }}</h5>
											</div>
											<div class="card-body">
												<identitas :itemData="item"></identitas>
											</div>
											<div class="card-footer">
												<button @click.prevent="modalConfirmOpen(item)" class="btn btn-primary btn-block mb-1">
													<i class="icon-check"></i> PILIH
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>

							<!-- sudah pilih -->
							<div v-else-if="form.pemilihan_calon_id != null">
								<!-- ucapan -->
								<div class="card bg-success text-white card-body">
									<h3><i class="icon-check"></i> Terima Kasih Sudah Melakukan Pemilihan</h3>
								</div>
								<!-- pilihan -->
								<div class="card ">
									<div class="card-header bg-white">
										<h5 class="card-title">Pilihan Anda Adalah</h5>
									</div>
									<div class="card-body">
										<div class="card border-primary">
											<div class="card-header bg-primary">
												<h5 class="card-title">{{ form.calon.aktivis.name }}</h5>
											</div>
											<div class="card-body">
												<identitas :itemData="form.calon.aktivis"></identitas>
											</div>
										</div>
									</div>
								</div>
								<!-- skor -->
								<!-- <div class="card ">
									<div class="card-header bg-white header-elements-inline">
										<h5 class="card-title">Perolehan Skor</h5>
										<div class="header-elements">
											<span class="badge badge-success">
												Suara Masuk: {{ itemData.suara_ok }}
											</span> 
											&nbsp;
											<span class="badge badge-primary">
												Total Suara: {{ itemData.suara }}
											</span>
										</div>
									</div>
									<div class="card-body">
										<div v-for="(p, index) in itemData2" :key="index">
											<div class="card card-body">
												<div class="row">
													<div class="col-sm-3 mb-1 mt-1">
														<b>{{ p.aktivis.name }}</b>
													</div>
													<div class="col-sm-8 mb-1 mt-1">
														<div class="progress">
															<div class="progress-bar-striped bg-success" :style="{width: Math.round((p.skor / itemData.suara) * 100) + '%'}">
																<span class="text-default font-size-lg">
																	&nbsp;
																	<b>{{ Math.round((p.skor / itemData.suara) * 100) + '%' }}</b>
																	&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
																</span>
															</div>
														</div>	
													</div>
													<div class="col-sm-1 mb-1 mt-1">
														{{ p.skor }} / {{ itemData.suara }}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div> -->
							</div>
						</div>

						<!-- tidak ada pemilihan -->
						<div v-else>
							<div class="card card-body">
								<h5><b>Selamat Datang!</b> <br/> Saat ini masih belum terdapat pemilihan</h5>
							</div>
						</div>

					</div>

					<div v-else-if="itemDataStat == 'loading'">
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

					<div v-else>
						<div class="card">
							<div class="card-body">
								<h3>Oops terjadi kesalahan</h3>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" :color="modalColor" :content="modalContent" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- body -->
			<template slot="modal-body1">
				<!-- identitas -->
				<div class="card">
					<div class="card-header bg-white">
						<h5 class="card-title">{{ selectedItem.name }}</h5>
					</div>
					<div class="card-body">
						<identitas :itemData="selectedItem"></identitas>
					</div>
				</div>

				<div>
					<div class="alert bg-warning alert-styled-left">
						<h6>Pastikan anda memilih dengan benar, anda tidak bisa melakukan pemilihan ulang lagi apabila salah memilih.</h6>
					</div>
				</div>

				<!-- tombol desktop-->
				<div class="text-center d-none d-md-block">
					<button class="btn btn-light" @click.prevent="modalTutup">
						<i class="icon-cross"></i> Tutup</button>

					<button class="btn btn-primary" @click.prevent="modalConfirmOk">
						<i class="icon-check"></i> Pilih</button>
				</div>  

				<!-- tombol mobile-->
				<div class="d-block d-md-none">
					<button class="btn btn-primary btn-block pb-2" @click.prevent="modalConfirmOk">
						<i class="icon-check"></i> Pilih</button>

					<button class="btn btn-light btn-block pb-2" @click.prevent="modalTutup">
						<i class="icon-cross"></i> Tutup</button>
				</div> 
			</template>

		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import message from "../../components/message.vue";
	import appModal from '../../components/modal';
	import identitas from './identitas';
	
	export default {
		components: {
			message,
			appModal,
			identitas,
		},
		data() {
			return {
				title: 'Pilih',
				kelas: 'pemilihan',
				titleDesc: 'Pemilihan',
				titleIcon: 'icon-quill4',
				formPilihan: {
					pemilihan_id: '',
					pemilihan_calon_id: '',
					name: '',
				},
				selectedItem: {},
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalButton: ''
			}
		},
		created(){
			this.fetch();
		},
		watch: {
			// check route changes
			$route(to, from) {
				this.fetch();
			},
			itemDataStat(value){
				if(value == "success"){
					if(this.form){
						this.title = this.itemData.name;
						this.titleDesc = 'Silahkan memilih calon untuk ' + this.itemData.name;
					}
				}
			},
			formStat(value){
				if(value == "success"){
					if(this.form.pemilihan_calon_id != null){
						this.fetchSuara();
					}
				}
			},
			updateStat(value) {
				this.modalState = value;
				this.modalButton = 'Ok';
				
				if(value === "success"){
					this.modalTitle = this.updateMessage.message;
					this.modalContent = '';
					this.fetch();
				}else if(value === "fail"){
					this.modalContent = this.updateMessage;
				}else{
					this.modalContent = '';
				}
      },
		},
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + '/indexCalon', this.$route.params.name);
			},
			fetchSuara(){
				this.$store.dispatch(this.kelas + '/indexSuara', this.itemData.id);
			},
			modalConfirmOpen(state) {
				this.modalShow = true;
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';

				this.formPilihan.pemilihan_calon_id = state.pivot.id;
				this.formPilihan.pemilihan_id = this.itemData.id;
				this.formPilihan.name = this.form.name;
				this.selectedItem = state;
				this.modalTitle = 'Pilih ' + this.selectedItem.name + ' ?';
			},
			modalTutup() {
				this.modalShow = false;
				this.$store.dispatch(this.kelas + '/resetUpdateStat');
			},
			modalConfirmOk() {
				this.$store.dispatch(this.kelas + '/storePilihan', this.formPilihan);
			},
		},
		computed: {
			...mapGetters('pemilihan',{
				form: 'data',
				formStat: 'dataStat',
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				itemData2: 'dataS2',
				itemDataStat2: 'dataStatS2',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>