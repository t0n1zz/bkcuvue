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
						
						<!-- title -->
						<div class="col-md-12">
							<div class="card">

								<template v-if="item.tipe == 'diklat_bkcu' || item.tipe == 'diklat_bkcu_internal'">
									<img :src="'/images/diklat/' + item.gambar + '.jpg'" class="img-fluid wmin-sm" v-if="item.gambar">
								</template>
								<template v-else-if="item.tipe == 'pertemuan_bkcu' || item.tipe == 'pertemuan_bkcu_internal'">
									<img :src="'/images/pertemuan/' + item.gambar + '.jpg'" class="img-fluid wmin-sm" v-if="item.gambar">
								</template>

								<div class="card-header">
									<h5 class="card-title">{{ item.name }}</h5>	
								</div>
								
							</div>
						</div>

						<!-- action -->
						<div class="col-md-12">
							<div class="card">
								<div class="card-header d-print-none">
									<div class="d-none d-sm-block">
										<!-- diklat bkcu -->
										<template v-if="item.tipe == 'diklat_bkcu' || item.tipe == 'diklat_bkcu_internal'">
												<!-- tambah materi -->
											<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahMateri')" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
												<i class="icon-plus22"></i> Tambah List Materi Di Sertifikat
											</button>

											<!-- ubah diklat -->
											<button class="btn btn-light mb-1" @click.prevent="ubahKegiatan(item.id)" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
												<i class="icon-pencil5"></i> Ubah Diklat
											</button>

											<!-- status -->
											<button class="btn btn-light mb-1" @click.prevent="modalOpen('statusPertemuan')" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
												<i class="icon-calendar5"></i> Status Diklat
											</button>

											<!-- status -->
											<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusPertemuan')" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
												<i class="icon-bin2"></i> Hapus Diklat
											</button>

											<!-- daftar -->
											<template v-if="item.status != 5 && item.status != 6">
												<button class="btn bg-warning-400 mb-1" @click.prevent="modalOpen('tambahPeserta')" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
													<i class="icon-people"></i> Daftar Peserta Diklat
												</button>

												<!-- daftar -->
												<button class="btn bg-warning-400 mb-1" @click.prevent="modalOpen('tambahPeserta')" v-else-if="currentUser.can && currentUser.can['index_diklat_bkcu'] && currentUser.id_cu != 0 && item.status == 2">
													<i class="icon-people"></i> Daftar Peserta Diklat
												</button>
											</template>
										</template>

										<!-- pertemuan bkcu -->
										<template v-else-if="item.tipe == 'pertemuan_bkcu' || item.tipe == 'pertemuan_bkcu_internal'">
											<!-- tambah materi -->
											<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahMateri')" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
												<i class="icon-plus22"></i> Tambah List Materi Di Sertifikat
											</button>

											<!-- ubah pertemuan -->
											<button class="btn btn-light mb-1" @click.prevent="ubahKegiatan(item.id)" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
												<i class="icon-pencil5"></i> Ubah Pertemuan
											</button>

											<!-- status -->
											<button class="btn btn-light mb-1" @click.prevent="modalOpen('statusPertemuan')" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0" >
												<i class="icon-calendar5"></i> Status Pertemuan
											</button>

											<!-- status -->
											<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusPertemuan')" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
												<i class="icon-bin2"></i> Hapus Pertemuan
											</button>

											<!-- daftar -->
											<template v-if="item.status != 5 && item.status != 6">
												<button class="btn bg-warning-400 mb-1" @click.prevent="modalOpen('tambahPeserta')" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
													<i class="icon-people"></i> Daftar Peserta Pertemuan
												</button>

												<!-- daftar -->
												<button class="btn bg-warning-400 mb-1" @click.prevent="modalOpen('tambahPeserta')" v-else-if="currentUser.can && currentUser.can['index_pertemuan_bkcu'] && currentUser.id_cu != 0 && item.status == 2">
													<i class="icon-people"></i> Daftar Peserta Pertemuan
												</button>
											</template>
										</template>

										<!-- keputusan -->
										<template v-if="item.pilih && item.pilih.length > 0">
											<button class="btn bg-success mb-1" @click.prevent="modalOpen('tambahKeputusan')" v-if="item.status == 4 && tipeUser == 'peserta'">
												<i class="icon-hammer"></i> Beri Keputusan
											</button>
										</template>

										<button class="btn bg-info mb-1" @click.prevent="modalOpen('tambahPertanyaan')" v-if="item.status == 4 && tipeUser == 'peserta'">
											<i class="icon-question7"></i> Ajukan Pertanyaan
										</button>
									</div>
									<div class="d-block d-sm-none">
										<!-- diklat bkcu -->
										<template v-if="item.tipe == 'diklat_bkcu'">
												<!-- tambah materi -->
											<button class="btn btn-light btn-block mb-2" @click.prevent="modalOpen('tambahMateri')" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
												<i class="icon-plus22"></i> Tambah List Materi Di Sertifikat
											</button>

											<!-- ubah diklat -->
											<button class="btn btn-light btn-block mb-2" @click.prevent="ubahKegiatan(item.id)" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
												<i class="icon-pencil5"></i> Ubah Diklat
											</button>

											<!-- status -->
											<button class="btn btn-light btn-block mb-2" @click.prevent="modalOpen('statusPertemuan')" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
												<i class="icon-calendar5"></i> Status Diklat
											</button>

											<!-- status -->
											<button class="btn btn-light btn-block mb-2" @click.prevent="modalOpen('hapusPertemuan')" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
												<i class="icon-bin2"></i> Hapus Diklat
											</button>

											<!-- daftar -->
											<template v-if="item.status != 5 && item.status != 6">
												<button class="btn bg-warning-400 btn-block mb-2" @click.prevent="modalOpen('tambahPeserta')" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
													<i class="icon-people"></i> Daftar Peserta Diklat
												</button>

												<!-- daftar -->
												<button class="btn bg-warning-400 btn-block mb-2" @click.prevent="modalOpen('tambahPeserta')" v-else-if="currentUser.can && currentUser.can['index_diklat_bkcu'] && currentUser.id_cu != 0 && item.status == 2">
													<i class="icon-people"></i> Daftar Peserta Diklat
												</button>
											</template>
										</template>

										<!-- pertemuan bkcu -->
										<template v-else-if="item.tipe == 'pertemuan_bkcu' || item.tipe == 'pertemuan_bkcu_internal'">
											<!-- tambah materi -->
											<button class="btn btn-light btn-block mb-2" @click.prevent="modalOpen('tambahMateri')" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
												<i class="icon-plus22"></i> Tambah List Materi Di Sertifikat
											</button>

											<!-- ubah pertemuan -->
											<button class="btn btn-light btn-block mb-2" @click.prevent="ubahKegiatan(item.id)" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
												<i class="icon-pencil5"></i> Ubah Pertemuan
											</button>

											<!-- status -->
											<button class="btn btn-light btn-block mb-2" @click.prevent="modalOpen('statusPertemuan')" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0" >
												<i class="icon-calendar5"></i> Status Pertemuan
											</button>

											<!-- status -->
											<button class="btn btn-light btn-block mb-2" @click.prevent="modalOpen('hapusPertemuan')" v-if="currentUser.can && currentUser.can['update_diklat_bkcu'] && currentUser.id_cu == 0">
												<i class="icon-bin2"></i> Hapus Pertemuan
											</button>

											<!-- daftar -->
											<template v-if="item.status != 5 && item.status != 6">
												<button class="btn bg-warning-400 btn-block mb-2" @click.prevent="modalOpen('tambahPeserta')" v-if="currentUser.id_cu == 0">
													<i class="icon-people"></i> Daftar Peserta Pertemuan
												</button>

												<!-- daftar -->
												<button class="btn bg-warning-400 btn-block mb-2" @click.prevent="modalOpen('tambahPeserta')" v-else-if="currentUser.can && currentUser.can['index_pertemuan_bkcu'] && currentUser.id_cu != 0 && item.status == 2">
													<i class="icon-people"></i> Daftar Peserta Pertemuan
												</button>
											</template>
										</template>

										<!-- keputusan -->
										<template v-if="item.pilih && item.pilih.length > 0">
											<button class="btn bg-success btn-block mb-2" @click.prevent="modalOpen('tambahKeputusan')" v-if="item.status == 4 && tipeUser == 'peserta'">
												<i class="icon-hammer"></i> Beri Keputusan
											</button>
										</template>

										<button class="btn bg-info btn-block mb-2" @click.prevent="modalOpen('tambahPertanyaan')" v-if="item.status == 4 && tipeUser == 'peserta'">
											<i class="icon-question7"></i> Ajukan Pertanyaan
										</button>
									</div>

								</div>
							</div>
						</div>

						<!-- content -->
						<div class="col-md-12">

							<!-- navbar -->
							<div class="card">
								<div class="nav-tabs-responsive">
									<ul class="nav nav-tabs nav-tabs-bottom flex-nowrap mb-0">

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'info'}" @click.prevent="changeTab('info')"><i class="icon-menu7 mr-2"></i>
											Informasi
										</a></li>

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'pesertaTerdaftar'}" @click.prevent="changeTab('pesertaTerdaftar')"><i class="icon-people mr-2"></i>
											Peserta Terdaftar
											<span class="badge badge-dark ml-2" v-if="countPesertaStat == 'success' && countPeserta > 0 && currentUser.id_cu == 0">{{ countPeserta }}</span>
										</a></li>

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'pesertaHadir'}" @click.prevent="changeTab('pesertaHadir')"><i class="icon-accessibility mr-2"></i>
											Peserta Hadir 
											<span class="badge badge-dark ml-2" v-if="countPesertaHadirStat == 'success' && countPesertaHadir> 0">{{ countPesertaHadir }}</span>
										</a></li>	

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'materi'}" @click.prevent="changeTab('dokumen')"><i class="icon-books mr-2"></i>
											Dokumen
										</a></li>	

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'statistik'}" @click.prevent="changeTab('statistik')"><i class="icon-equalizer mr-2"></i>
											Statistik
										</a></li>								
									</ul>
								</div>

							</div>

							<!-- tabinformasi -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'info'">
									<detail-informasi :kelas="kelas"></detail-informasi>

								</div>
							</transition>

							<!-- tabterdaftar -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-if="tabName == 'pesertaTerdaftar'">
									<detail-peserta-daftar :kelas="kelas"></detail-peserta-daftar>
								</div>
							</transition>

							<!-- tabhadir -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-if="tabName == 'pesertaHadir'">
									<detail-peserta-hadir :kelas="kelas"></detail-peserta-hadir>
								</div>
							</transition>

							<!-- dokumen -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'dokumen'">

								</div>
							</transition>	

							<!-- tabstatistik -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-if="tabName == 'statistik'">
									<template v-if="item.pilih && item.pilih.length > 0">
										<div class="card" v-if="itemDataKeputusanCountStat == 'success' && itemDataKeputusanCount.length > 0">
											<div class="card-header bg-light">
												<h6 class="card-title">Keputusan</h6>
											</div>
											<div class="card-body">
												<div v-for="p in itemDataKeputusanCount" :key="p.id">
													<h7 class="font-weight-semibold mb-1">{{ p.name }}</h7>
													<!-- setuju -->
													<div class="card card-body pt-1 pb-1 mt-1 mb-1">
														<div class="row">
															<div class="col-sm-3 mb-1 mt-1">
																Setuju
															</div>
															<div class="col-sm-8 mb-1 mt-1">
																<div class="progress">
																	<div class="progress-bar-striped bg-primary" :style="{width: Math.round((p.setuju / p.total) * 100) + '%'}">
																		<span class="text-default font-size-lg">
																			&nbsp;
																			{{ Math.round((p.setuju / p.total) * 100) + '%' }}
																			&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
																		</span>
																	</div>
																</div>	
															</div>
															<div class="col-sm-1 mb-1 mt-1">
																{{ p.setuju }} / {{ p.total }}
															</div>
														</div>
													</div>
													<!-- tidak setuju -->
													<div class="card card-body pt-1 pb-1 mt-1 mb-1">
														<div class="row">
															<div class="col-sm-3 mb-1 mt-1">
																Tidak Setuju
															</div>
															<div class="col-sm-8 mb-1 mt-1">
																<div class="progress">
																	<div class="progress-bar-striped bg-danger" :style="{width: Math.round((p.taksetuju / p.total) * 100) + '%'}">
																		<span class="text-default font-size-lg">
																			&nbsp;
																			{{ Math.round((p.taksetuju / p.total) * 100) + '%' }}
																			&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
																		</span>
																	</div>
																</div>	
															</div>
															<div class="col-sm-1 mb-1 mt-1">
																{{ p.taksetuju }} / {{ p.total }}
															</div>
														</div>
													</div>
													<!-- tak ada -->
													<div class="card card-body pt-1 pb-1 mt-1 mb-1">
														<div class="row">
															<div class="col-sm-3 mb-1 mt-1">
																Tidak Punya Keputusan
															</div>
															<div class="col-sm-8 mb-1 mt-1">
																<div class="progress">
																	<div class="progress-bar-striped bg-secondary" :style="{width: Math.round((p.takada / p.total) * 100) + '%'}">
																		<span class="text-default font-size-lg">
																			&nbsp;
																			{{ Math.round((p.takada / p.total) * 100) + '%' }}
																			&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
																		</span>
																	</div>
																</div>	
															</div>
															<div class="col-sm-1 mb-1 mt-1">
																{{ p.takada }} / {{ p.total }}
															</div>
														</div>
													</div>
													<br/>
												</div>
											</div>
										</div>
									</template>
									<div class="card">
										<div class="card-header bg-light">
											<h6 class="card-title">CU Terdaftar</h6>
										</div>
										<data-table :items="itemDataPesertaTerdaftarCU" :columnData="columnDataCU" :itemDataStat="itemDataPesertaTerdaftarCUStat">
											<template slot="item-desktop" slot-scope="props">
												<tr v-if="props.item">
													<td>{{ props.index + 1 }}</td>
													<td>
														<check-value :value="props.item.name"></check-value>
													</td>
													<td>
														<check-value :value="props.item.lakilaki"></check-value>
													</td>
													<td>
														<check-value :value="props.item.perempuan"></check-value>
													</td>
													<td>
														<check-value :value="props.item.total"></check-value>
													</td>
												</tr>
											</template>	
										</data-table>
									</div>

									<div class="card">
										<div class="card-header bg-light">
											<h6 class="card-title">CU Hadir</h6>
										</div>
										<data-table :items="itemDataPesertaHadirCU" :columnData="columnDataCU" :itemDataStat="itemDataPesertaHadirCUStat">
											<template slot="item-desktop" slot-scope="props">
												<tr v-if="props.item">
													<td>{{ props.index + 1 }}</td>
													<td>
														<check-value :value="props.item.name"></check-value>
													</td>
													<td>
														<check-value :value="props.item.lakilaki"></check-value>
													</td>
													<td>
														<check-value :value="props.item.perempuan"></check-value>
													</td>
													<td>
														<check-value :value="props.item.total"></check-value>
													</td>
												</tr>
											</template>	
										</data-table>
									</div>
								</div>
							</transition>

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

			<!-- pertemuan -->
			<template slot="modal-body2">

				<form-status :kelas="kelas" :id="item.id" :status="item.status" :keteranganBatal="item.keteranganBatal"
				@tutup="modalTutup" v-if="state == 'statusPertemuan'"></form-status>

				<form-hadir :kelas="kelas" :item="item" :state="state" v-if="state == 'pesertaTerdaftar' || state == 'panitiaTerdaftar'"></form-hadir>
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
	import {
		toMulipartedForm
	} from '../../helpers/form';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import Cleave from 'vue-cleave-component';
	import dataTable from '../../components/datatable.vue';
	import dataViewer from '../../components/dataviewer2.vue';
	import checkValue from '../../components/checkValue.vue';
	import formStatus from "./formStatus.vue";
	import formHadir from "./formHadir.vue";
	import detailInformasi from "./detailInformasi.vue";
	import detailPesertaDaftar from "./detailPesertaDaftar.vue";
	import detailPesertaHadir from "./detailPesertaHadir.vue";
	// import formPdf from "./formPdf.vue";
	import FileSaver from 'file-saver';
	
	export default {
		components: {
			pageHeader,
			appModal,
			message,
			Cleave,
			dataTable,
			dataViewer,
			checkValue,
			formStatus,
			formHadir,
			detailInformasi,
			detailPesertaDaftar,
			detailPesertaHadir,
		},
		data() {
			return {
				title: 'Detail Pertemuan PUSKOPCUINA',
				titleDesc: 'Informasi detail pertemuan PUSKOPCUINA',
				titleIcon: 'icon-stack2',
				level: 2,
				level2Title: 'Pertemuan PUSKOPCUINA',
				kelas: 'kegiatanBKCU',
				sasaran: [],
				tabName: 'info',
				tipeUser: '',
				tempatData: '',
				isDisableTable: false,
				formPesertaBatal: {
					keterangan: ''
				},
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
				columnDataCU: [
					{ title: 'No.' },
					{ title: 'CU' },
					{ title: 'Laki-Laki' },
          { title: 'Perempuan' },
					{ title: 'Total' },
				],
				itemDataPanitia: [],
				formModalMode: '',
				cancelState: 'methods',
				state: '',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalSize: '',
				kode: '',
				submited: false,
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		created(){
			this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
		},
		watch: {
			itemStat(value) {
				if (value === "success") {
					this.hideColumn();
					this.checkTipe(this.item.tipe);
					
					if(this.currentUser.aktivis){
						if(this.item.status == 4){
							this.checkPanitia();
						}
					}else{
						this.modalOpen('pesertaTidakTerdaftar');
					}

					this.fetchCountPeserta();
					this.fetchlistMateri2();
				}
			},
			checkPanitiaDataStat(value){
				if(value == 'success'){
					if(this.checkPanitiaData){
						this.tipeUser = this.checkPanitiaData.peran;
						if(!this.checkPanitiaData.tanggal_hadir){
							this.modalOpen('panitiaTerdaftar');
						}
					}else{
						this.checkPeserta();
					}
				}
			},
			checkPesertaDataStat(value){
				if(this.state != 'tambahPeserta' && this.state != 'ubahPeserta'){
					if(value == 'success'){
						if(this.checkPesertaData){
							this.tipeUser = 'peserta';
							if(!this.checkPesertaData.tanggal_hadir){
								this.modalOpen('pesertaTerdaftar');
							}
						}else{
							this.modalOpen('pesertaTidakTerdaftar');
						}
					}
				}
			},
			updateStat(value) {
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if (value === "success") {
					this.modalTitle = this.updateResponse.message;
					if (this.state == 'statusPertemuan'){
						this.fetch();
					}else if(this.state == 'tambahKeputusan' || this.state == 'hapusKeputusan'){
						this.fetchCountKeputusan();
					}else if(this.state == 'tambahPertanyaan' || this.state == 'hapusPertanyaan'){
						this.fetchCountPertanyaan();
					}
				} else {
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			}
		},
		methods: {
			fetch() {
				this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
			},
			fetchlistMateri2(){
				this.$store.dispatch(this.kelas +'/indexNilaiListMateri',this.item.id);
			},
			fetchCountPeserta() {
				this.$store.dispatch(this.kelas + '/countPeserta', this.item.id);
				if(this.item.tipe_tempat == 'ONLINE')
					this.$store.dispatch(this.kelas + '/countPesertaHadir', this.item.id);
			},
			fetchCountKeputusan() {
				if(this.item.keputusan_cu){
					this.$store.dispatch(this.kelas + '/countKeputusan', [this.item.id, this.currentUser.id_cu, this.currentUser.id]);
				}
			},
			fetchCountPertanyaan() {
				if(this.item.pertanyaan_cu){
					this.$store.dispatch(this.kelas + '/countPertanyaan', [this.item.id, this.currentUser.id_cu, this.currentUser.id]);
				}
			},
			fetchStatistik(){
				this.$store.dispatch(this.kelas + '/indexPesertaCountCu', this.item.id);
				this.$store.dispatch(this.kelas + '/indexPesertaHadirCountCu', this.item.id);
				this.$store.dispatch(this.kelas + '/indexKeputusanCount', this.item.id);
			},
			hideColumn(){
			},
			checkTipe(tipe){
				if(tipe == 'diklat_bkcu'){
					this.level2Title = 'Diklat PUSKOPCUINA';
				}else if(tipe == 'pertemuan_bkcu'){
					this.level2Title = 'Pertemuan PUSKOPCUINA';
				}else if(tipe == 'diklat_bkcu_internal'){
					this.level2Title = 'Diklat internal PUSKOPCUINA';
				}else if(tipe == 'pertemuan_bkcu_internal'){
					this.level2Title = 'Pertemuan internal PUSKOPCUINA';
				}

				this.title = 'Detail ' + this.level2Title;
				this.titleDesc = 'Informasi detail ' + this.level2Title;
			},
			checkPeserta(){
				this.$store.dispatch(this.kelas + '/checkPeserta', [this.item.id, this.currentUser.id_aktivis]);
			},
			checkPanitia(){
				if(this.currentUser.aktivis){
					this.$store.dispatch(this.kelas + '/checkPanitia', [this.item.id, this.currentUser.id_aktivis]);
				}else{
					this.modalOpen('userTidakAktivis');
				}
			},
			changeTab(value){
				this.tabName = value;
			},
			back() {
				this.$router.push({name: this.kelas, params:{tipe:this.item.tipe, periode: this.momentYear()}});
			},
			ubahKegiatan(id) {
				this.$router.push({name: this.kelas + 'EditDetail', params: { id: id }});
			},
			selectedRow(item) {
				this.selectedItem = item;
				this.selectedItemListMateri = item;
				this.selectedItemNilai = item;
				this.fetchNilai(this.queryNilai);
			},
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.modalSize = '';
				this.state = state;
				this.isDisableTable = true;

				if (isMobile) {
					if(this.state == 'ubahMateri' || this.state == 'hapusMateri' || this.state == 'lihatMateri'){
						this.selectedItemMateri = itemMobile;
					}else if(this.state == 'ubahListMateri' || this.state == 'hapusListMateri'){
						this.selectedItemListMateri = itemMobile;
					}else if(this.state == 'ubahNilai' || this.state == 'hapusNilai'){
						this.selectedItemNilai = itemMobile;
					}else if(this.state == 'ubahKeputusan' || this.state == 'hapusKeputusan' || this.state == 'keputusanKomentar'){
						this.selectedItemKeputusan = itemMobile;
					}else if(this.state == 'ubahTugas' || this.state == 'hapusTugas' || this.state == 'lihatTugas'){
						this.selectedItemTugas = itemMobile;
					}else{
						this.selectedItemPertanyaan = itemMobile;
					}
				}

				if (state == 'hapusPertemuan') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Diklat ' + this.item.name + ' ?';
					this.modalButton = 'Iya, Hapus';
				} else if (state == 'statusPertemuan') {
					this.modalState = 'normal2';
					this.modalTitle = 'Ubah status ' + this.item.name + ' ini?';
					this.modalColor = 'bg-primary';
				} else if (state == 'ubahPeserta') {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Peserta';
					this.modalSize = 'modal-lg';
					this.formModalMode = 'edit';
				} else if (state == 'tambahPeserta') {
					if(this.countPeserta >= this.item.peserta_max ){
						this.modalState = 'content-tutup';
						this.modalColor = '';

						this.modalTitle = 'Diklat sudah penuh';
						this.modalContent = 'Maaf anda tidak bisa mendaftarkan peserta lagi, karena kuota peserta pada diklat ini sudah terpenuhi.';
					}
					
					if(this.itemDataPesertaTerdaftar.data.length >= this.item.peserta_max_cu && this.currentUser.id_cu != 0){
						this.modalState = 'content-tutup';
						this.modalColor = '';
						this.modalTitle = 'CU anda tidak bisa mendaftarkan peserta lagi';
						this.modalContent = 'Maaf anda tidak bisa mendaftarkan peserta lagi, karena jumlah maksimal peserta per CU adalah ' + this.item.peserta_max_cu + ' orang.';
					}else{
						this.modalState = 'normal1';
						this.modalColor = 'bg-primary';
						this.modalTitle = 'Tambah Peserta';
						this.modalSize = 'modal-lg';
						this.formModalMode = 'create';
					}
				}else if (this.state == 'generateSertifikat'){
					this.modalState = 'content-tutup';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Generate Sertifikat Berhasil';
					this.modalButton = 'Ok';
				}else if(state == 'pesertaTidakTerdaftar'){
					this.modalState = 'fail';
					this.modalColor = '';
					this.modalTitle = 'Maaf anda tidak terdaftar dalam pertemuan ini';
					this.modalContent = 'Maaf anda tidak terdaftar dalam pertemuan ini, silahkan pastikan anda sudah mendaftar di pertemuan ini';
				}else if(state == 'userTidakAktivis'){
					this.modalState = 'fail';
					this.modalColor = '';
					this.modalTitle = 'Maaf anda tidak bisa melanjutkan';
					this.modalContent = 'Anda tidak bisa melanjutkan karena user anda tidak memiliki informasi aktivis, silahkan tambahkan data aktivis kepada user anda.';
				}else if(state == 'pesertaTerdaftar'){
					this.modalState = 'normal2';
					this.modalTitle = 'Masuk ' + this.item.name ;
					this.modalColor = 'bg-primary';
				}else if(state == 'panitiaTerdaftar'){
					this.modalState = 'normal2';
					this.modalTitle = 'Masuk ' + this.item.name ;
					this.modalColor = 'bg-primary';
				} else if (state == 'ubahMateri') {
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Materi';
					this.formModalMode = 'edit';
				} else if (state == 'tambahMateri') {
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Materi';
					this.formModalMode = 'create';
				} else if (state == 'hapusMateri') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Materi ' + this.selectedItemMateri.name + ' ?';
					this.modalButton = 'Iya, Hapus';
				} else if (state == 'lihatMateri'){
					if(this.selectedItemMateri.tipe != 'pdf'){
						this.modalImageOpen('/files/pertemuan/' + this.selectedItemMateri.filename + '.jpg');
					}else{
						this.modalTitle = 'Lihat Materi';
						this.modalState = 'normal2';
						this.modalColor = 'bg-primary';
						this.modalSize = 'modal-lg';
					}
				}else if (state == 'ubahNilai') {
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Nilai';
					this.formModalMode = 'edit';
				} else if (state == 'hapusNilai') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Nilai ini ?';
					this.modalButton = 'Iya, Hapus';
				} else if (state == 'tambahTugas') {
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Tugas';
					this.formModalMode = 'create';
				} else if (state == 'ubahTugas') {
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Tugas';
					this.formModalMode = 'edit';
				} else if (state == 'hapusTugas') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Tugas ' + this.selectedItemTugas.name + ' ?';
					this.modalButton = 'Iya, Hapus';
				} else if (state == 'lihatTugas'){
					this.modalTitle = 'Lihat Tugas';
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalSize = 'modal-lg';
				} else if (state == 'tambahKeputusan') {
					if(this.item.keputusan_cu){
						if(this.countKeputusan[0] >= this.item.keputusan_cu){
							this.modalState = 'content-tutup';
							this.modalColor = '';
	
							this.modalTitle = 'CU anda tidak bisa menambahkan keputusan lagi';
							this.modalContent = 'Maaf anda tidak bisa memberikan keputusan lagi, karena jumlah keputusan maksimal per CU adalah ' + this.item.keputusan_cu + ' kali.';
						}else if(this.countKeputusan[1] >= this.item.keputusan_user){
							this.modalState = 'content-tutup';
							this.modalColor = '';
	
							this.modalTitle = 'Anda tidak bisa menambahkan keputusan lagi';
							this.modalContent = 'Maaf anda tidak bisa memberikan keputusan lagi, karena jumlah keputusan maksimal per peserta adalah ' + this.item.keputusan_user + ' kali.';
						}else{
							this.modalState = 'normal3';
							this.modalColor = 'bg-primary';
							this.modalTitle = 'Tambah Keputusan';
							this.formModalMode = 'create';
							this.modalSize = 'modal-lg';
						}
					}else{
						this.modalState = 'normal3';
						this.modalColor = 'bg-primary';
						this.modalTitle = 'Tambah Keputusan';
						this.formModalMode = 'create';
						this.modalSize = 'modal-lg';
					}
				} else if (state == 'hapusKeputusan') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Keputusan ini ?';
					this.modalButton = 'Iya, Hapus';
				} else if (state == 'ubahKeputusan') {
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Keputusan';
					this.formModalMode = 'edit';
					this.modalSize = 'modal-lg';
				} else if (state == 'keputusanKomentar') {
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Komentar Keputusan';
					this.modalSize = 'modal-lg';
				} else if (state == 'tambahPertanyaan') {
					if(this.item.pertanyaan_cu){
						if(this.countPertanyaan[0] >= this.item.pertanyaan_cu){
							this.modalState = 'content-tutup';
							this.modalColor = '';
	
							this.modalTitle = 'CU anda tidak bisa menambahkan pertanyaan lagi';
							this.modalContent = 'Maaf anda tidak bisa memberikan pertanyaan lagi, karena jumlah pertanyaan maksimal per CU adalah ' + this.item.pertanyaan_cu + ' kali.';
						}else if(this.countPertanyaan[1] >= this.item.pertanyaan_user){
							this.modalState = 'content-tutup';
							this.modalColor = '';
	
							this.modalTitle = 'Anda tidak bisa menambahkan pertanyaan lagi';
							this.modalContent = 'Maaf anda tidak bisa memberikan pertanyaan lagi, karena jumlah pertanyaan maksimal per peserta adalah ' + this.item.pertanyaan_user + ' kali.';
						}else{
							this.modalState = 'normal3';
							this.modalColor = 'bg-primary';
							this.modalTitle = 'Tambah Pertanyaan';
							this.formModalMode = 'create';
							this.modalSize = 'modal-lg';
						}
					}else{
						this.modalState = 'normal3';
						this.modalColor = 'bg-primary';
						this.modalTitle = 'Tambah Pertanyaan';
						this.formModalMode = 'create';
						this.modalSize = 'modal-lg';
					}
				} else if (state == 'hapusPertanyaan') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Pertanyaan ini ?';
					this.modalButton = 'Iya, Hapus';
				} else if (state == 'ubahPertanyaan') {
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Pertanyaan';
					this.formModalMode = 'edit';
					this.modalSize = 'modal-lg';
				} else if (state == 'pertanyaanKomentar') {
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Komentar Pertanyaan';
					this.modalSize = 'modal-lg';
				}
			},
			modalImageOpen(content) {
				this.modalShow = true;
				this.modalState = 'image';
				this.modalContent = content;
				this.modalSize = '';
				this.modalButton = 'Ok';
			},
			modalConfirmOk() {
				this.modalShow = false;

				if (this.state == 'hapusPertemuan') {
					this.$store.dispatch(this.kelas + '/destroy', this.item.id);
				}else if (this.state == 'hapusMateri') {
					this.$store.dispatch(this.kelas + '/destroyMateri', [this.item.tipe, this.selectedItemMateri.id]);
				}else if (this.state == 'hapusListMateri') {
					this.$store.dispatch(this.kelas + '/destroyListMateri', [this.item.tipe, this.selectedItemListMateri.id]);
				}else if (this.state == 'hapusMateri') {
					this.$store.dispatch(this.kelas + '/destroyMateri', [this.item.tipe, this.selectedItemMateri.id]);
				}else if (this.state == 'hapusTugas') {
					this.$store.dispatch(this.kelas + '/destroyTugas', [this.item.tipe, this.selectedItemTugas.id]);
				}else if (this.state == 'hapusKeputusan') {
					this.$store.dispatch(this.kelas + '/destroyKeputusan', this.selectedItemKeputusan.id);
				}else if (this.state == 'hapusPertanyaan') {
					this.$store.dispatch(this.kelas + '/destroyPertanyaan', this.selectedItemPertanyaan.id);
				}
			},
			modalTutup() {
				if(this.state == 'tambahPeserta' || this.state == 'ubahPeserta' || this.state == 'hapusPeserta' || this.state == 'batalPeserta'){
					this.changeTab('pesertaTerdaftar');
					this.fetchCountPeserta();
				}else if(this.state == 'tambahMateri' || this.state == 'ubahMateri' || this.state == 'hapusMateri'){
					this.changeTab('materi');
				}else if(this.state == 'tambahListMateri' || this.state == 'ubahListMateri' || this.state == 'hapusListMateri'){
					this.changeTab('listMateri');
				}else if( this.state == 'ubahNilai' || this.state == 'hapusNilai'){
					// this.changeTab('pesertaTerdaftar');
					this.fetchNilai(this.queryNilai);
					this.state = '';
				}else if(this.state == 'tambahTugas' || this.state == 'ubahTugas' || this.state == 'hapusTugas'){
					this.changeTab('tugas');
				}else if(this.state == 'tambahKeputusan' || this.state == 'ubahKeputusan' || this.state == 'hapusKeputusan' || this.state == 'keputusanKomentar'){
					this.changeTab('keputusan');
				}else if(this.state == 'tambahPertanyaan' || this.state == 'ubahPertanyaan' || this.state == 'hapusPertanyaan' || this.state == 'pertanyaanKomentar'){
					this.changeTab('pertanyaan');	
				}else if(this.state == 'hapusPertemuan'){
					this.back();
				}else if(this.state == 'pesertaTidakTerdaftar'){
					this.$router.push({name: 'dashboard'});
				}else if(this.state == 'pesertaTerdaftar' || this.state == 'panitiaTerdaftar'){
					if(this.updateStat == 'success'){
						this.modalShow = false;
					}else{
						this.$router.push({name: 'dashboard'});
					}
				}
				
				this.isDisableTable = false;
				this.modalShow = false;
			},
			modalBackgroundClick() {
				if (this.modalState === 'success') {
					this.modalTutup;
				} else if (this.modalState === 'loading' || this.state === 'pesertaTerdaftar' || this.state === 'panitiaTerdaftar') {
					// do nothing
				} else {
					this.modalShow = false
				}
				this.isDisableTable = false;
			},
			downloadMateri(filename){
				if(this.item.tipe == 'diklat_bkcu' || this.item.tipe == 'diklat_bkcu_internal'){
					axios.get('/api/download_folder/' + filename + '/diklat', {
					responseType: 'blob'})
					.then(response => {
						FileSaver.saveAs(response.data, filename)
					});
				}else if(this.item.tipe == 'pertemuan_bkcu' || this.item.tipe == 'pertemuan_bkcu_internal'){
					axios.get('/api/download_folder/' + filename + '/pertemuan', {
					responseType: 'blob'})
					.then(response => {
						FileSaver.saveAs(response.data, filename)
					});
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
			...mapGetters('kegiatanBKCU', {
				item: 'data',
				itemStat: 'dataStat',
				checkPesertaData: 'data2',
				checkPesertaDataStat: 'dataStat2',
				checkPanitiaData: 'data3',
				checkPanitiaDataStat: 'dataStat3',
				itemDataMateri: 'dataS3',
				itemDataMateriStat: 'dataStatS3',
				itemDataListMateri1: 'dataNilai',
				nilaiStat1: 'dataNilaiStat',
				itemNilai:'nilai',
				itemNilaiStat: 'nilaiStat',
				itemDataKeputusan: 'dataS4',
				itemDataKeputusanStat: 'dataStatS4',
				itemDataKeputusan: 'dataS4',
				itemDataKeputusanStat: 'dataStatS4',
				itemDataPertanyaan: 'dataS9',
				itemDataPertanyaanStat: 'dataStatS9',
				itemDataTugas: 'dataS10',
				itemDataTugasStat: 'dataStatS10',
				itemDataPesertaTerdaftarCU: 'dataS6',
				itemDataPesertaTerdaftarCUStat: 'dataStatS6',
				itemDataPesertaHadirCU: 'dataS7',
				itemDataPesertaHadirCUStat: 'dataStatS7',
				itemDataKeputusanCount: 'dataS8',
				itemDataKeputusanCountStat: 'dataStatS8',
				countPeserta: 'count',
				countPesertaStat: 'countStat',
				countPesertaHadir: 'count2',
				countPesertaHadirStat: 'countStat2',
				countKeputusan: 'count3',
				countKeputusanStat: 'countStat3',
				countPertanyaan: 'count4',
				countPertanyaanStat: 'countStat4',
				updateResponse: 'update',
				updateStat: 'updateStat',
				updateNilai: 'updateNilai',
				updateNilaiStat: 'updateNilaiStat'
			}),
		}
	}
</script>