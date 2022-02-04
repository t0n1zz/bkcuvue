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
					<span class="badge bg-success-400">PUSKOPCUINA 
						<span v-if="itemData.cu">
							- {{ itemData.cu.name }}
						</span> 
					</span>	
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
							<span class="font-weight-semibold">{{ itemData.name }}</span> 
							<small class="d-block text-muted">Selamat datang <i>{{ form.name }} </i></small>
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
									<h5><b>Selamat Datang!</b> <br/><br/> Silahkan memilih calon dengan menekan tombol 
									<button class="btn btn-primary btn-sm">
										<i class="icon-check"></i> PILIH
									</button> 
									pada masing-masing kartu calon dibawah ini.
									<span v-if="itemData.pemilihan_max > 1">
										<br/><br/>
										Dan menekan 
										<button class="btn btn-success btn-sm">
											<i class="icon-check"></i> TERPILIH
										</button>
										untuk membatalkan pilihan.
										<hr/>
										Dan kemudian menekan tombol 
										<button class="btn btn-primary btn-sm">
											<i class="icon-floppy-disk"></i> SIMPAN PILIHAN
										</button> 
										yang berada di bagian paling bawah dari halaman ini untuk menyimpan pilihan anda. 
										<hr/>
										<b>Jika tidak menekan tombol 
											<button class="btn btn-primary btn-sm">
												<i class="icon-floppy-disk"></i> SIMPAN PILIHAN
											</button> 
											 maka pilihan anda belum tersimpan</b>
									</span>
									</h5>
								</div>
								<!-- pilihan -->
								<div class="row">
									<div class="col-md-6 col-lg-4" v-for="(item, index) in itemData.calon" :key="index">
										<div class="card" :class="{ 'border-success' : formMulti.some(data => data.pemilihan_calon_id == item.pivot.id) }">
											<div class="card-header bg-white header-elements-inline">
												<h5 class="card-title">{{ item.name }}</h5>
												<span class="badge badge-success" v-if="item.pivot">
													<h6 class="mb-0">No. Urut {{ item.pivot.no_urut }}</h6>
												</span> 
											</div>
											<div class="card-body">
												<identitas :itemData="item"></identitas>
											</div>
											<div class="card-footer">
												<button @click.prevent="modalConfirmOpen(item)" class="btn btn-primary btn-block mb-1" v-if="itemData.pemilihan_min == 1 && itemData.pemilihan_max == 1">
													<i class="icon-check"></i> PILIH
												</button>
												<template v-else>
													<button @click.prevent="multi(item)" class="btn btn-success btn-block mb-1" v-if="formMulti.some(data => data.pemilihan_calon_id == item.pivot.id)">
														<i class="icon-check"></i> TERPILIH
													</button>
													<button @click.prevent="multi(item)" class="btn btn-primary btn-block mb-1" v-else>
														<i class="icon-check"></i> PILIH
													</button>
												</template>
											</div>
										</div>
									</div>

									<div class="col-md-12" v-if="itemData.pemilihan_max > 1">
										<div class="card card-body">
											<button @click.prevent="modalOpen()" class="btn btn-primary btn-block mb-1" :disabled="formMulti.length < itemData.pemilihan_min">
												<i class="icon-floppy-disk"></i> SIMPAN PILIHAN
											</button>
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
								<div class="card">
									<div class="card-header bg-white">
										<h5 class="card-title">Pilihan Anda Adalah</h5>
									</div>
									<div class="card-body">
										<div class="card border-primary" v-if="itemData.pemilihan_max == 1">
											<div class="card-header bg-primary header-elements-inline">
												<h5 class="card-title">{{ form.calon.aktivis.name }}</h5>
												<span class="badge badge-success">
													<h6 class="mb-0">No. Urut {{ form.calon.no_urut }}</h6>
												</span>
											</div>
											<div class="card-body">
												<identitas :itemData="form.calon.aktivis"></identitas>
											</div>
										</div>
										<div class="row" v-else>
											<div class="col-md-4" v-for="(item, index) in itemData2" :key="index">
												<div class="card border-primary">
													<div class="card-header bg-primary header-elements-inline">
														<h5 class="card-title">{{ item.calon.aktivis.name }}</h5>
														<span class="badge badge-success">
															<h6 class="mb-0">No. Urut {{ item.calon.no_urut }}</h6>
														</span>
													</div>
													<div class="card-body">
														<identitas :itemData="item.calon.aktivis"></identitas>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
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
		<app-modal :show="modalShow" :state="modalState" :size="modalSize" :title="modalTitle" :button="modalButton" :color="modalColor" :content="modalContent" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- body -->
			<template slot="modal-body1">
				<!-- identitas -->
				<div class="card">
					<div class="card-header bg-white header-elements-inline">
						<h5 class="card-title">{{ selectedItem.name }}</h5>
						<span class="badge badge-success" v-if="selectedItem.pivot">
							<h6 class="mb-0">No. Urut {{ selectedItem.pivot.no_urut }}</h6>
						</span> 
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

			<template slot="modal-body2">
				<!-- identitas -->
				<div class="row">
					<div class="col-lg-4" v-for="(item, index) in formMulti" :key="index">
						<div class="card">
							<div class="card-header bg-white header-elements-inline">
								<h5 class="card-title">{{ item.data.name }}</h5>
								<span class="badge badge-success" v-if="item.data.pivot">
									<h6 class="mb-0">No. Urut {{ item.data.pivot.no_urut }}</h6>
								</span> 
							</div>
							<div class="card-body">
								<identitas :itemData="item.data"></identitas>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div class="alert bg-warning alert-styled-left" v-if="formMulti.length < itemData.pemilihan_max">
						<h6>Anda masih bisa memilih {{ itemData.pemilihan_max - formMulti.length }} calon lagi, apakah yakin akan melanjutkan?</h6>
					</div>
					<div class="alert bg-warning alert-styled-left" v-else>
						<h6>Pastikan anda memilih dengan benar, anda tidak bisa melakukan pemilihan ulang lagi apabila salah memilih.</h6>
					</div>
				</div>

				<!-- tombol desktop-->
				<div class="text-center d-none d-md-block">
					<button class="btn btn-light" @click.prevent="modalTutup">
						<i class="icon-cross"></i> Tutup</button>

					<button class="btn btn-primary" @click.prevent="modalConfirmOk">
						<i class="icon-check"></i> Ok</button>
				</div>  

				<!-- tombol mobile-->
				<div class="d-block d-md-none">
					<button class="btn btn-primary btn-block pb-2" @click.prevent="modalConfirmOk">
						<i class="icon-check"></i> Ok</button>

					<button class="btn btn-light btn-block pb-2" @click.prevent="modalTutup">
						<i class="icon-cross"></i> Tutup</button>
				</div> 
			</template>

		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import _ from 'lodash';
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
					no_urut: '',
					name: '',
				},
				formMulti: [],
				selectedItem: {},
				selectedItemMulti: [],
				modalShow: false,
				modalState: '',
				modalSize:'',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalButton: '',
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
				}
			},
			formStat(value){
				if(value == "success"){
					if(this.form.pemilihan_calon_id != null){
						if(this.itemData){
							if(this.itemData.pemilihan_max > 1){
								this.fetchCalonTerpilih(this.form.id);
							}
						}
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
			fetchCalonTerpilih(id){
				this.$store.dispatch(this.kelas + '/indexCalonTerpilih', id);
			},
			multi(item){	
				if(!this.formMulti.some(data => data.pemilihan_calon_id == item.pivot.id)){
					if(this.formMulti.length < this.itemData.pemilihan_max){
						this.formMulti.push({
							'pemilihan_calon_id' : item.pivot.id,
							'no_urut' : item.pivot.no_urut,
							'pemilihan_id': this.itemData.id,
							'name' : this.form.name,
							'data' : item
						});
					}else{
						this.modalShow = true;
						this.modalState = 'tutup';
						this.modalTitle = 'Maaf anda tidak bisa memilih lebih dari ' + this.itemData.pemilihan_max + ' calon.';
					}
				}else{
					this.formMulti = _.reject(this.formMulti, function(el){
						return el.pemilihan_calon_id == item.pivot.id;
					});
				}
			},
			modalConfirmOpen(state) {
				this.modalShow = true;
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';
				this.modalSize = '';

				this.formPilihan.pemilihan_calon_id = state.pivot.id;
				this.formPilihan.no_urut = state.pivot.no_urut;
				this.formPilihan.pemilihan_id = this.itemData.id;
				this.formPilihan.name = this.form.name;
				this.selectedItem = state;
				this.modalTitle = 'Pilih ' + this.selectedItem.name + ' ?';
			},
			modalOpen() {
				this.modalShow = true;
				this.modalState = 'normal2';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Simpan pilihan anda?';
				this.modalSize = "modal-full";
			},
			modalTutup() {
				this.modalShow = false;
				this.$store.dispatch(this.kelas + '/resetUpdateStat');
			},
			modalConfirmOk() {
				if(this.itemData.pemilihan_max == 1){
					this.$store.dispatch(this.kelas + '/storePilihan', this.formPilihan);
				}else{
					this.$store.dispatch(this.kelas + '/storeMultiPilihan', this.formMulti);
				}
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