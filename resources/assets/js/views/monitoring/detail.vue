<template>
	<div>
		<!-- page-header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="level" :level2Title="level2Title"
		 :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<div class="row">
						<div class="col-md-12">
							<div class="card card-body">
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text">Pilih Temuan</span>
									</div>

									<!-- select -->
									<select class="form-control" name="id_temuan" v-model="item.id" data-width="100%" @change="changeTemuan($event.target.value)" :disabled="modelTemuanStat == 'loading'">
										<option disabled value="">Silahkan pilih data</option>
										<slot></slot>
										<option v-for="(te, index) in modelTemuan" :value="te.id" :key="index"><span v-if="te.tanggal" v-html="$options.filters.date(item.tanggal)"></span> {{te.tanggal ? ' | ' : ''}} {{te.name}} </option>
									</select>

									<!-- reload cu -->
									<div class="input-group-append">
										<button class="btn btn-light" @click="fetchTemuan" :disabled="modelTemuanStat == 'loading'">
											<i class="icon-sync" :class="{'spinner' : modelTemuanStat == 'loading'}"></i>
										</button>
									</div>
								</div>
							</div>	
						</div>

						<div class="col-lg-9 col-md-8">
							<!-- temuan -->
							<div class="card">
								<div class="card-body">
									<div class="progress">
										<div class="progress-bar-striped bg-orange" :style="{width: Math.round((item.rekom_ok / item.total_rekom) * 100) + '%'}">
											<span class="text-default font-size-lg">
												&nbsp;
												{{ Math.round((item.rekom_ok / item.total_rekom) * 100) + '%' }}
												&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
											</span>
										</div>
									</div>
									<hr/>
									<h5>Temuan:</h5>
									<div class="card card-body bg-light">{{ item.name }}</div>
									<h5>Rekomendasi:</h5>
									<div v-if="currentUser.can && currentUser.can['update_' + kelas] && currentUser.id_cu == 0">
										<checkbox 
											v-for="rk in item.monitoring_rekom"
											:form="rk.status" 
											:title="rk.rekomendasi"  
											:key="rk.id"
											@check="modalOpen('rekomendasi', rk)"
										></checkbox>
									</div>
									<div v-else>
										<checkbox 
											v-for="rk in item.monitoring_rekom"
											:form="rk.status" 
											:title="rk.rekomendasi"  
											:key="rk.id"
										></checkbox>
									</div>
								</div>
							</div>
						</div>

						<!-- sidebar -->
						<div class="col-lg-3 col-md-4">

							<!-- detail -->
							<div class="card">
								<div class="card-header bg-light" v-if="currentUser.can && currentUser.can['update_' + kelas] && currentUser.id_cu == 0">
									<button class="btn btn-light btn-block" @click.prevent="ubahData"><i class="icon-pencil5"></i> Ubah Temuan</button>
								</div>
								<table class="table table-borderless table-xs border-top-0 my-2">
									<tbody>
										<tr>
											<td class="font-weight-semibold">CU:</td>
											<td class="text-right">
												<check-value :value="item.cu.name" v-if="item.cu"></check-value>
												<span v-else>-</span>
											</td>
										</tr>
										<tr>
											<td class="font-weight-semibold">TP:</td>
											<td class="text-right">
												<check-value :value="item.tp.name" v-if="item.tp"></check-value>
												<span v-else-if="item.id_tp == 0">Semua</span>
												<span v-else>-</span>
											</td>
										</tr>
										<tr>
											<td class="font-weight-semibold">Tanggal:</td>
											<td class="text-right">
												<span v-if="item.tanggal" v-html="$options.filters.date(item.tanggal)"></span>
												<span v-else>-</span>
											</td>
										</tr>
										<tr>
											<td class="font-weight-semibold">Jenis:</td>
											<td class="text-right">
												<span v-if="item.jenis == 'MAYOR'" class="badge badge-danger">{{ item.jenis }}</span>
												<span v-else-if="item.jenis == 'MINOR'" class="badge badge-success">{{ item.jenis }}</span>
											</td>
										</tr>
										<tr>
											<td class="font-weight-semibold">Perspektif:</td>
											<td class="text-right">
												<check-value :value="item.perspektif"></check-value>
											</td>
										</tr>
									</tbody>
								</table>

								<div class="card-body pb-0">
									<!-- pic cu -->
									<pic
										:title="'PIC CU'" 
										:itemData="item.aktivis_cu" 
										:itemDataStat="itemStat"></pic>
									<!-- pic bkcu -->
									<pic
										:title="'PIC PUSKOPCUINA'" 
										:itemData="item.aktivis_bkcu" 
										:itemDataStat="itemStat"></pic>
								</div>
							</div>


						</div>

						<div class="col-md-12">

							<div class="card card-body">
								<div class="row">
									<!-- desktop -->
									<div class="col-md-7 col-lg-9 d-none d-sm-block">
										<button class="btn btn-light" @click.prevent="modalOpen('tambah','')" v-if="currentUser.can && currentUser.can['create_' + kelas]"><i class="icon-plus3"></i> Tambah Keputusan</button>
									</div>

									<div class="col-md-5 col-lg-3 text-right d-none d-sm-block">
										<button class="btn btn-light" @click.prevent="back"><i class="icon-arrow-left13"></i> Kembali</button>
									</div>

									<!-- mobile -->
									<div class="col-md-12 d-block d-sm-none">
										<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('tambah','')" v-if="currentUser.can && currentUser.can['create_' + kelas]"><i class="icon-plus3"></i> Tambah Keputusan</button>
										<button class="btn btn-light btn-block" @click.prevent="back"><i class="icon-arrow-left13"></i> Kembali</button>
									</div>
								</div>
							</div>

							<!-- timeline -->
							<div v-if="itemDataStat == 'success'">
								<div class="timeline timeline-left content-group" v-if="itemData.length > 0">
									<div class="timeline-container">
										<div class="timeline-row" v-for="(pc, index) in itemData" :key="index">
											<div class="timeline-icon">
												<div class="bg-blue">
													{{ index + 1 }}
												</div>
											</div>
											<div class="row">
												<div class="col-sm-12">
													<div class="card">
														<div class="card-header bg-white">
															<span class="badge badge-primary" v-html="$options.filters.dateTime(pc.created_at)"></span>
														</div>
														<div class="card-body">
															<div class="row">
																<div class="col-md-6">
																	<h5>Pencapaian:</h5>
																	<div class="card card-body bg-light">
																		<span v-if="pc.pencapaian" v-html="pc.pencapaian"></span>
																		<span v-else>-</span>
																	</div>
																</div>
																<div class="col-md-6">
																	<h5>Bukti-bukti:</h5>
																	<div class="card card-body bg-light">
																		<span v-if="pc.bukti" v-html="pc.bukti"></span>
																		<span v-else>-</span>
																	</div>
																</div>
																<div class="col-md-6">
																	<h5>Kendala:</h5>
																	<div class="card card-body bg-light">
																		<span v-if="pc.kendala" v-html="pc.kendala"></span>
																		<span v-else>-</span>
																	</div>
																</div>
																<div class="col-md-6">
																	<h5>Tindak Lanjut:</h5>
																	<div class="card card-body bg-light">
																		<span v-if="pc.tindak" v-html="pc.tindak"></span>
																		<span v-else>-</span>
																	</div>
																</div>
																<div class="col-md-12">
																	<h5>Foto:</h5>
																	<div class="card card-body d-flex align-items-center">
																		<img :src="'/images/monitoring/' + pc.gambar + '.jpg'"  class="img-fluid" v-if="pc.gambar">
      															<img :src="'/images/no_image.jpg'" style="width:15em;" v-else>
																	</div>
																</div>
															</div>
														</div>
														<div class="card-body pb-0">
															<div class="row">
																<div class="col-md-12">
																	<h5>Catatan PUSKOPCUINA:</h5>
																	<div class="card card-body bg-light">
																		<span v-if="pc.catatan" v-html="pc.catatan"></span>
																		<span v-else>-</span>
																	</div>
																</div>
															</div>
														</div>
														<div class="card-body">
															<!-- desktop -->
															<div class="d-none d-sm-block">
																<!-- catatan bkcu -->
																<button class="btn btn-light mb-1" @click.prevent="modalOpen('catatan',pc)" v-if="currentUser.can && currentUser.can['update_' + kelas] && currentUser.id_cu == 0">
																	<span v-if="!pc.catatan"><i class="icon-plus3"></i> Tambah Catatan PUSKOPCUINA</span>
																	<span v-else><i class="icon-pencil5"></i> Ubah Catatan PUSKOPCUINA</span>
																</button>
																<!-- ubah  -->
																<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubah',pc)" v-if="currentUser.can && currentUser.can['update_' + kelas]"><i class="icon-pencil5"></i> Ubah</button>
																<!-- hapus -->
																<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapus',pc)" v-if="currentUser.can && currentUser.can['update_' + kelas]"><i class="icon-bin2"></i> Hapus</button>
															</div>
															<!-- mobile -->
															<div class="d-block d-sm-none">
																<!-- catatan bkcu -->
																<button  class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('catatan',pc)" v-if="currentUser.can && currentUser.can['update_' + kelas] && currentUser.id_cu == 0">
																	<span v-if="!pc.catatan"><i class="icon-plus3"></i> Tambah Catatan PUSKOPCUINA</span>
																	<span v-else><i class="icon-pencil5"></i> Ubah Catatan PUSKOPCUINA</span>
																</button>
																<!-- ubah -->
																<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('ubah',pc)" v-if="currentUser.can && currentUser.can['update_' + kelas]"><i class="icon-pencil5"></i> Ubah</button>
																<!-- hapus -->
																<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('hapus',pc)" v-if="currentUser.can && currentUser.can['update_' + kelas]"><i class="icon-bin2"></i> Hapus</button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div v-else-if="itemDataStat == 'loading'">
								<div class="progress">
                  <div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
                    <span class="sr-only">100% Complete</span>
                  </div>
                </div>
							</div>

						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize" :color="modalColor"
		 @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"
		 @backgroundClick="modalBackgroundClick">

		 <!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- pencapaian-->
			<template slot="modal-body1">
				<form-pencapaian
					:mode="modalFormState"
					:selected="selectedItem"
					@tutup="modalTutup"
				></form-pencapaian>
			</template>

		</app-modal>

	</div>
</template>

<script>
	import {
		mapGetters
	} from 'vuex';
	import _ from 'lodash';
	import pageHeader from "../../components/pageHeader.vue";
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import Cleave from 'vue-cleave-component';
	import checkValue from '../../components/checkValue.vue';
	import checkbox from '../../components/checkbox.vue';
	import pic from './pic.vue';
	import formPencapaian from './formPencapaian.vue';

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			Cleave,
			checkValue,
			checkbox,
			pic,
			formPencapaian
		},
		data() {
			return {
				title: 'Detail Monitoring',
				titleDesc: 'Informasi detail monitoring',
				titleIcon: 'icon-stack2',
				level: 2,
				level2Title: 'Monitoring',
				kelas: 'monitoring',
				selectedItem: {},
				cleaveOption: {
					date: {
						date: true,
						datePattern: ['Y', 'm', 'd'],
						delimiter: '-'
					},
					year: {
						date: true,
						datePattern: ['Y'],
					},
					number12: {
						numeral: true,
						numeralIntegerScale: 12,
						numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
					},
					number3: {
						numeral: true,
						numeralIntegerScale: 3,
						numeralDecimalScale: 0,
						stripLeadingZeroes: false
					},
					numeric: {
						numeral: true,
						numeralThousandsGroupStyle: 'thousand',
						numeralDecimalScale: 2,
						numeralDecimalMark: ',',
						delimiter: '.'
					}
				},
				state: '',
				modalFormState: '',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalSize: '',
				submited: false,
			}
		},
		created(){
			this.fetch();
			this.fetchPencapaian();
		},
		watch: {
			// check route changes
			'$route' (to, from){
				this.fetch();
				this.fetchPencapaian();
			},
			itemStat(value) {
				if (value === "success") {
					this.fetchTemuan();
				}
			},
			updateStat(value) {
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if (value === "success") {
					this.fetch();
					this.modalTitle = this.updateResponse.message;
				} else {
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			},
			updatePencapaianStat(value) {
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if (value === "success") {
					this.modalTitle = this.updatePencapaianResponse.message;
					this.fetchPencapaian();
				} else {
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updatePencapaianResponse;
				}
			}
		},
		methods: {
			fetch() {
				this.$store.dispatch(this.kelas +'/edit', this.$route.params.id);	
			},
			fetchTemuan() {
				this.$store.dispatch(this.kelas +'/get', this.item.id_cu);
			},
			fetchPencapaian() {
				this.$store.dispatch('monitoringPencapaian/get', this.$route.params.id);
			},
			back() {
				if(this.item.id_tp == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.item.id_cu, tp: 'semua'}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.item.id_cu, tp: this.item.id_tp}});
				}
			},
			ubahData() {
				this.$router.push({name: this.kelas + 'Edit', params: { id: this.$route.params.id }});
			},
			changeTemuan(value) {
				this.$router.push({name: this.kelas + 'Detail', params: { id: value }});
			},
			modalOpen(state, selectedItem) {
				this.modalShow = true;
				this.state = state;
				this.selectedItem = selectedItem;

				if (state == 'hapus') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Keputusan?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				} else if (state == 'ubah') {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Keputusan';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.modalFormState = 'edit';
				} else if (state == 'tambah') {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Keputusan';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.modalFormState = 'create';
				} else if (state == 'catatan') {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = !selectedItem.catatan ? 'Tambah Catatan PUSKOPCUINA' : 'Ubah Catatan PUSKOPCUINA';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.modalFormState = 'catatan';
				} else if (state == 'rekomendasi') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = selectedItem.status == 0 ? 'Selesaikan rekomendasi ' + selectedItem.rekomendasi + ' ?' : 'Tidak selesaikan rekomendasi ' + selectedItem.rekomendasi + ' ?';
					this.modalButton = selectedItem.status == 0 ? 'Iya, Selesaikan' : 'Iya, Tidak selesaikan';
					this.modalSize = '';
				}
			},
			modalConfirmOk() {
				this.modalShow = false;

				if (this.state == 'hapus') {
					this.$store.dispatch('monitoringPencapaian/destroy', this.selectedItem.id);
				}else if(this.state == 'rekomendasi'){
					this.$store.dispatch(this.kelas + '/updateRekom', this.selectedItem.id);
				}
			},
			modalTutup() {
				this.modalShow = false;
			},
			modalBackgroundClick() {
				if (this.modalState === 'success') {
					this.modalTutup;
				} else if (this.modalState === 'loading') {
					// do nothing
				} else {
					this.modalShow = false
				}
			},
			momentYear() {
				return moment().year();
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('monitoring', {
				item: 'data',
				itemStat: 'dataStat',
				modelTemuan: 'dataS',
				modelTemuanStat: 'dataStatS',
				updateResponse: 'update',
				updateStat: 'updateStat',
			}),
			...mapGetters('monitoringPencapaian', {
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updatePencapaianResponse: 'update',
				updatePencapaianStat: 'updateStat',
			}),
		}
	}
</script>