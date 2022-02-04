<template>
	<div>
		<!-- page-header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="level" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		
		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="formStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="form">
					</message>

					<template v-if="formStat == 'success'">	
						<!-- navbar -->
						<div class="card">
							<div class="nav-tabs-responsive">
								<ul class="nav nav-tabs nav-tabs-solid  bg-light nav-justified mb-0">

									<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'info'}" @click.prevent="changeTab('info')"><i class="icon-info22 mr-2"></i>
										Info
									</a></li>

									<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'suara'}" @click.prevent="changeTab('suara')"><i class="icon-megaphone mr-2"></i>
										Suara
									</a></li>

									<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'tanggapan'}" @click.prevent="changeTab('tanggapan')"><i class="icon-reading mr-2"></i>
										Tanggapan
									</a></li>

									<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'skor'}" @click.prevent="changeTab('skor')"><i class="icon-equalizer mr-2"></i>
										Skor
									</a></li>
			
								</ul>
							</div>

						</div>

						<!-- info -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-show="tabName == 'info'">
								<!-- informasi umum -->
								<div class="card">
									<div class="card-header bg-white header-elements-inline">
										<h5 class="card-title">Voting | Status: <span v-html="$options.filters.checkStatus(form.status)"></span></h5>
										<div class="header-elements">
											<!-- status -->
											<button @click.prevent="modalOpen('status')" 	class="btn btn-light btn-icon mb-1 mr-1" v-if="currentUser.can && currentUser.can['update_voting']">
												<i class="icon-calendar5"></i> Status
											</button>
											<!-- reload -->
											<button type="button" class="btn btn-light btn-icon mb-1" @click.prevent="fetch()">
												<i class="icon-sync"></i> Reload Data
											</button>
										</div>
									</div>
									<div class="card-body">
										<div class="row">
											<!-- nama -->
											<div class="col-md-6 form-group">
												<!-- title -->
												<h5>Nama:</h5>

												<!-- text -->
												<input type="text" name="name" class="form-control" v-model="form.name" disabled>
											</div>

											<!-- cu -->
											<div class="col-md-6 form-group" v-if="currentUser.id_cu == 0">
												<!-- title -->
												<h5>CU:</h5>

												<!-- text -->
												<input type="text" name="cu" class="form-control" v-model="form.cu.name" disabled v-if="form.cu">

												<input type="text" name="cu" class="form-control" value="PUSKOPCUINA" disabled v-else>
											</div>

											<!-- kegiatan -->
											<div class="col-md-6 form-group" >
												<!-- title -->
												<h5>Kegiatan:</h5>

												<!-- text -->
												<input type="text" name="name" class="form-control" v-model="form.kegiatan.name" disabled v-if="form.id_kegiatan != 0">

												<!-- text -->
												<input type="text" name="name" class="form-control" v-model="form.name_kegiatan" disabled v-else>
											</div>

											<!-- cu -->
											<div class="col-md-6 form-group">
												<!-- title -->
												<h5>Tampilkan Hasil Setelah Melakukan Voting?</h5>

												<!-- text -->
												<input type="text" name="cu" class="form-control" value="Menanmpilkan hasil" disabled v-if="form.lihat_hasil == 1">

												<input type="text" name="cu" class="form-control" value="Tidak menampilkan hasil" disabled v-else>
											</div>

											<!-- total suara -->
											<div class="col-md-6 form-group">
												<!-- title -->
												<h5>Total Suara:</h5>

												<!-- text -->
												<input type="text" name="suara" class="form-control" v-model="form.suara" disabled>
											</div>

											<!-- suara ok -->
											<div class="col-md-6 form-group">
												<!-- title -->
												<h5>Suara Masuk:</h5>

												<!-- text -->
												<input type="text" name="suara_ok" class="form-control" v-model="form.suara_ok" disabled>
											</div>

											<!-- suara ok -->
											<div class="col-md-6 form-group">
												<!-- title -->
												<h5>Suara Akses:</h5>

												<!-- text -->
												<input type="text" name="suara_akses" class="form-control" v-model="form.suara_akses" disabled>
											</div>

											<div class="col-md-12">
												<!-- title -->
												<h5>Keterangan:</h5>

												<!-- text -->
												<div class="card card-body" v-if="form.keterangan">
													<span v-html="form.keterangan"></span>
												</div>
											</div>

											<div class="col-md-12">
												<!-- title -->
												<h5>Link Suara Input:</h5>

												<!-- text -->
												<div class="card card-body">
													<p>Silahkan menggunakan link ini dan memasukkan kode unik yang sudah dibuat </p>
													<hr class="mt-1 mb-1"/>
													<a class="pointer" :href="form.link" target="_blank">
														<check-value :value="form.link.substring(8)" :trimLength="100"></check-value>
													</a>
													<button @click.prevent="modalOpen('qrCodeInput')" class="btn btn-light btn-block mb-1 mt-2">
														<i class="icon-qrcode"></i> Buat QR Code
													</button>
												</div>
											</div>

										</div>	
									</div>
								</div>

								<!-- pilihan -->								
								<div class="card">
									<div class="card-header bg-white header-elements-inline">
										<h5 class="card-title">Pilihan</h5>
										<div class="header-elements">
										</div>
									</div>

									<data-table :items="form.pilihan" :columnData="columnDataPilihan" :itemDataStat="formStat">
										<template slot="item-desktop" slot-scope="props">
											<tr class="text-nowrap" v-if="props.item">
												<td>{{ props.index + 1 }}</td>
												<td>{{ props.item.name }}</td>
											</tr>
										</template>	
									</data-table>
								</div>

								<!-- tanggapan -->								
								<div class="card">
									<div class="card-header bg-white header-elements-inline">
										<h5 class="card-title">Jenis Tanggapan</h5>
										<div class="header-elements">
										</div>
									</div>

									<data-table :items="form.tanggapan" :columnData="columnDataTanggapan" :itemDataStat="formStat">
										<template slot="item-desktop" slot-scope="props">
											<tr class="text-nowrap" v-if="props.item">
												<td>{{ props.index + 1 }}</td>
												<td>{{ props.item.name }}</td>
											</tr>
										</template>	
									</data-table>
								</div>

							</div>
						</transition>	

						<!-- suara -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-show="tabName == 'suara'">
								<div class="card card-body">
									<p>Silahkan menggunakan link ini dan memasukkan kode unik yang sudah dibuat dibawah </p>
									<hr class="mt-1 mb-1"/>
									<a class="pointer" :href="form.link" target="_blank">
										<check-value :value="form.link.substring(8)" :trimLength="100"></check-value>
									</a>
									<button @click.prevent="modalOpen('qrCodeInput')" class="btn btn-light btn-block mb-1 mt-2">
										<i class="icon-qrcode"></i> Buat QR Code
									</button>
								</div>
								<data-viewer :title="'Suara'" :columnData="columnDataSuara" :itemData="itemDataSuara" :query="query" :itemDataStat="itemDataSuaraStat" :excelDownloadUrl="excelDownloadUrl" 
								:excelUploads="excelUploads"
								@fetch="fetchDataSuara">

									<!-- button desktop -->
									<template slot="button-desktop">
										<!-- tambah suara -->
										<button @click.prevent="modalOpen('tambah_suara')" class="btn btn-light mb-1" :disabled="form.suara_ok > 0" v-if="form.suara_tipe == 1">
											<i class="icon-pencil5"></i> Tambah Suara
										</button>

										<!-- ubah suara -->
										<button @click.prevent="modalOpen('ubah_suara')" class="btn btn-light mb-1" :disabled="!selectedSuara.id || form.suara_ok > 0" v-if="form.suara_tipe == 1">
											<i class="icon-pencil5"></i> Ubah Suara
										</button>

										<!-- hapus suara -->
										<button @click.prevent="modalOpen('hapus_suara')" class="btn btn-light mb-1" :disabled="!selectedSuara.id || form.suara_ok > 0" v-if="form.suara_tipe == 1">
											<i class="icon-pencil5"></i> Hapus Suara
										</button>

										<!-- ubah CU -->
										<button @click.prevent="modalOpen('cu')" class="btn btn-light mb-1" :disabled="!selectedSuara.id || form.suara_ok > 0" v-if="form.id_cu == 0">
											<i class="icon-pencil5"></i> Ubah CU
										</button>

										<!-- qr code -->
										<button @click.prevent="modalOpen('qrCode')" class="btn btn-light mb-1" :disabled="!selectedSuara.id">
											<i class="icon-qrcode"></i> Buat QR Code
										</button>

										<button @click.prevent="modalOpen('qrCodeAll')" class="btn btn-light mb-1">
											<i class="icon-qrcode"></i> QR Code Pada Tabel
										</button>
									</template>

									<!-- button mobile -->
									<template slot="button-mobile">
										<!-- tambah suara -->
										<button @click.prevent="modalOpen('tambah_suara')" class="btn btn-light btn-block mb-1" :disabled="form.suara_ok > 0" v-if="form.suara_tipe == 1">
											<i class="icon-pencil5"></i> Tambah Suara
										</button>

										<!-- ubah suara -->
										<button @click.prevent="modalOpen('ubah_suara')" class="btn btn-light btn-block mb-1" :disabled="!selectedSuara.id || form.suara_ok > 0" v-if="form.suara_tipe == 1">
											<i class="icon-pencil5"></i> Ubah Suara
										</button>

										<!-- hapus suara -->
										<button @click.prevent="modalOpen('hapus_suara')" class="btn btn-light btn-block mb-1" :disabled="!selectedSuara.id || form.suara_ok > 0" v-if="form.suara_tipe == 1">
											<i class="icon-pencil5"></i> Hapus Suara
										</button>

										<!-- ubah CU -->
										<button @click.prevent="modalOpen('cu')" class="btn btn-light btn-block mb-1" :disabled="!selectedSuara.id" v-if="form.id_cu == 0">
											<i class="icon-pencil5"></i> Ubah CU
										</button>

										<!-- qr code -->
										<button @click.prevent="modalOpen('qrCode')" class="btn btn-light btn-block mb-1" :disabled="!selectedSuara.id">
											<i class="icon-qrcode"></i> Buat QR Code
										</button>

										<button @click.prevent="modalOpen('qrCodeAll')" class="btn btn-light btn-block mb-1">
											<i class="icon-qrcode"></i> QR Code Pada Tabel
										</button>
									</template>

									<template slot="item-desktop" slot-scope="props">
										<tr :class="{ 'bg-info': selectedSuara.id == props.item.id }" @click="selectedRow(props.item)" class="text-nowrap">
											<td v-if="!columnDataSuara[0].hide">
												{{ props.index + 1 + (+itemDataSuara.current_page-1) * +itemDataSuara.per_page + '.'}}
											</td>
											<td v-if="!columnDataSuara[1].hide">
												<check-value :value="props.item.name"></check-value>
											</td>
											<td v-if="!columnDataSuara[2].hide">
												<a class="pointer" :href="props.item.link" target="_blank">
													<check-value :value="props.item.link.substring(8)" :trimLength="100"></check-value>
												</a>
											</td>
											<td v-if="!columnDataSuara[3].hide">
												<span v-if="props.item.voting_pilihan_id" class="bg-orange-400 text-highlight"><i class="icon-check"></i></span>
												<span v-else class="bg-teal-300 text-highlight"><i class="icon-cross3"></i></span>
											</td>
											<td v-if="!columnDataSuara[4].hide">
												<span v-if="props.item.akses && props.item.akses.id" class="bg-orange-400 text-highlight"><i class="icon-check"></i></span>
												<span v-else class="bg-teal-300 text-highlight"><i class="icon-cross3"></i></span>
											</td>
											<td v-if="!columnDataSuara[5].hide && !columnDataSuara[5].disable">
												<check-value :value="props.item.cu.name" v-if="props.item.cu"></check-value>
												<span v-else>-</span>
											</td>
										</tr>
									</template>	
								</data-viewer>
							</div>
						</transition>

						<!-- tanggapan -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-show="tabName == 'tanggapan'">
								<data-viewer :title="'Tanggapan'" :columnData="columnDataTanggapanSuara" :itemData="itemDataTanggapan" :query="queryTanggapan" :itemDataStat="itemDataTanggapanStat" :excelDownloadUrl="excelDownloadUrlTanggapan" @fetch="fetchDataTanggapan">

									<template slot="item-desktop" slot-scope="props">
										<tr>
											<td v-if="!columnDataTanggapanSuara[0].hide" class="text-nowrap">
												{{ props.index + 1 + (+itemDataTanggapan.current_page-1) * +itemDataTanggapan.per_page + '.'}}
											</td>
											<td v-if="!columnDataTanggapanSuara[1].hide" class="text-nowrap">
												<check-value v-if="props.item.suara" :value="props.item.suara.name"></check-value>
												<span v-else></span>
											</td>
											<td v-if="!columnDataTanggapanSuara[2].hide" class="text-nowrap">
												<check-value v-if="props.item.suara && props.item.suara.pilihan" :value="props.item.suara.pilihan.name"></check-value>
												<span v-else></span>
											</td>
											<td v-if="!columnDataTanggapanSuara[3].hide" class="text-nowrap">
												<check-value v-if="props.item.tanggapan" :value="props.item.tanggapan.name"></check-value>
												<span v-else></span>
											</td>
											<td v-if="!columnDataTanggapanSuara[4].hide">
												{{ props.item.keterangan }}
											</td>
										</tr>
									</template>	
								</data-viewer>
							</div>
						</transition>

						<!-- skor -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'skor'">
									<!-- skor -->
									<div class="card " v-if="form.pilihan">
										<div class="card-header bg-white header-elements-inline">
											<h5 class="card-title">Perolehan Skor</h5>
											<div class="header-elements">
												<button type="button" class="btn btn-light btn-icon mb-1" @click.prevent="fetch()">
													<i class="icon-sync"></i> Reload Data
												</button>
											</div>
										</div>
										<div class="card-body">
											<span class="badge badge-success">
												Suara Masuk: {{ form.suara_ok }}
											</span> 
											&nbsp;
											<span class="badge badge-primary">
												Total Suara: {{ form.suara }}
											</span>
											
											<hr/>
											<div v-for="(p, index) in formPilihan" :key="index">
												<div class="card card-body">
													<div class="row">
														<div class="col-sm-3 mb-1 mt-1">
															<b>{{ p.name }}</b>
														</div>
														<div class="col-sm-8 mt-1">
															<div class="progress">
																<div class="progress-bar-striped bg-success" :style="{width: Math.round((p.skor / form.suara) * 100) + '%'}">
																	<span class="text-default font-size-lg">
																		&nbsp;
																		<b>{{ Math.round((p.skor / form.suara) * 100) + '%' }}</b>
																		&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
																	</span>
																</div>
															</div>
															<!-- dengan tanggapan -->
															<div class="card card-body mt-2 mb-0">
																<div class="row">
																	<div class="col-sm-3 mb-0 mt-0">
																		<b>Dengan Tanggapan</b>
																	</div>
																	<div class="col-sm-8 mb-0 mt-0">
																		<div class="progress">
																			<div class="progress-bar-striped bg-primary" :style="{width: Math.round((p.skor_tanggapan / form.suara) * 100) + '%'}">
																				<span class="text-default font-size-lg">
																					&nbsp;
																					<b>{{ Math.round((p.skor_tanggapan / form.suara) * 100) + '%' }}</b>
																					&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
																				</span>
																			</div>
																		</div>	
																	</div>
																	<div class="col-sm-1 mb-0 mt-0">
																		{{ p.skor_tanggapan }}
																	</div>
																</div>
															</div>	
															<!-- tanpa tanggapan -->
															<div class="card card-body mt-1 mb-0">
																<div class="row">
																	<div class="col-sm-3 mb-0 mt-0">
																		<b>Tanpa Tanggapan</b>
																	</div>
																	<div class="col-sm-8 mb-0 mt-0">
																		<div class="progress">
																			<div class="progress-bar-striped bg-warning" :style="{width: Math.round(((p.skor - p.skor_tanggapan) / form.suara) * 100) + '%'}">
																				<span class="text-default font-size-lg">
																					&nbsp;
																					<b>{{ Math.round(((p.skor - p.skor_tanggapan) / form.suara) * 100) + '%' }}</b>
																					&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
																				</span>
																			</div>
																		</div>
																	</div>
																	<div class="col-sm-1 mb-0 mt-0">
																		{{ p.skor - p.skor_tanggapan }}
																	</div>
																</div>
															</div>	
														</div>
														<div class="col-sm-1 mb-1 mt-1">
															{{ p.skor }} / {{ form.suara }}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
						</transition>
					</template>

					<div v-else-if="formStat == 'loading'">
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
		<app-modal :show="modalShow" :state="modalState" :size="modalSize" :color="modalColor" :title="modalTitle" :button="modalButton" :content="modalContent" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
			
			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- form -->
			<template slot="modal-body1">
				<form-cu :kelas="kelas" :id="selectedSuara.id" :id_cu="selectedSuara.id_cu" 
				@tutup="modalTutup"></form-cu>
			</template>

			<template slot=modal-body2>
				<qr-code :selectedItem="selectedSuara" :title="form.name" @tutup="modalTutup" v-if="state == 'qrCode' || state == 'qrCodeInput'"></qr-code>

				<qr-code-all :itemData="itemDataSuara" :title="form.name" @tutup="modalTutup" v-if="state == 'qrCodeAll'"></qr-code-all>
			</template>

			<template slot=modal-body3>
				<form-kode-suara :kelas="kelas" :id="form.id" :id_cu="form.id_cu" :mode="'store'" v-if="state == 'tambah_suara'"
				@tutup="modalTutup"></form-kode-suara>

				<form-kode-suara :kelas="kelas" :id="form.id" :id_cu="form.id_cu" :selectedItem="selectedSuara" :mode="'edit'" v-if="state == 'ubah_suara'"
				@tutup="modalTutup"></form-kode-suara>
			</template>

		</app-modal>

	</div>
</template>

<script>
	import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import dataTable from '../../components/datatable.vue';
	import { PusherAuth } from '../../helpers/pusherAuth.js';
	import jsonExcel from 'vue-json-excel';
	import checkValue from '../../components/checkValue.vue';
	import appModal from '../../components/modal';
	import formCu from "./formCu.vue";
	import formKodeSuara from "./formKodeSuara.vue";
	import Echo from 'laravel-echo';
	import Pusher from "pusher-js";
	import DataViewer from '../../components/dataviewer2.vue';
	import qrCode from './qrCode.vue';
	import qrCodeAll from './qrCodeAll.vue';
	
	export default {
		components: {
			pageHeader,
			message,
			dataTable,
			jsonExcel,
			checkValue,
			formCu,
			formKodeSuara,
			appModal,
			DataViewer,
			qrCode,
			qrCodeAll,
		},
		data() {
			return {
				title: 'Detail voting',
				titleDesc: 'Melihat detail data voting',
				titleIcon: 'icon-stack2',
				level: 2,
				level2Title: 'Voting',
				kelas: 'voting',
				tabName: 'info',
				query: {
					order_column: "name",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				queryTanggapan: {
					order_column: "id",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				excelDownloadUrl: '',
				excelDownloadUrlTanggapan: '',
				excelUploads:[
					{
						enabled: true,
						url: 'voting/uploadSuara/' + this.$route.params.id,
						format_url: 'formatVotingSuara.xlsx',
						button: 'Upload Kode Suara'
					},
				],
				columnDataPilihan:[
					{ title: 'No.' },
					{ title: 'Nama' },
				],
				columnDataTanggapan:[
					{ title: 'No.' },
					{ title: 'Tanggapan' },
				],
				columnDataSuara:[
					{ 
						title: 'No.',
						name: 'No.' 
					},
					{ 
						title: 'Kode',
						name: 'name',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
					{ 
						title: 'Link',
						name: 'link',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{ 
						title: 'Memilih',
						name: 'voting_pilihan_id',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: false, 
					},
					{ 
						title: 'Akses',
						name: 'voting.id',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: false, 
					},
					{ 
						title: 'CU',
						name: 'cu.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true, 
					},
				],
				columnDataTanggapanSuara:[
					{ 
						title: 'No.',
						name: 'No.' 
					},
					{ 
						title: 'Kode',
						name: 'suara.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
					{ 
						title: 'Pilihan',
						name: 'suara.pilihan.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
					{ 
						title: 'Tanggapan',
						name: 'tanggapan.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{ 
						title: 'Keterangan',
						name: 'keterangan',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
				],
				selectedSuara: {},
				state: '',
				modalShow: false,
				modalState: '',
				modalColor: '',
				modalSize:'',
				modalTitle: '',
				modalContent: '',
				modalButton: '',
				formPilihan: ''
			}
		},
		created(){
			this.fetch();
		},
		mounted(){
			PusherAuth();
			window.Echo.private(`voting.channel.` + this.$route.params.id)
			.listen('VotingEvent',(data) => {  
				var p;
				for (p of this.form.pilihan) {
					if(p.id == data.voting_pilihan_id){
						if(data.skor){
							p.skor = data.skor;
						}
						if(data.skor_tanggapan){
							p.skor_tanggapan = data.skor_tanggapan;
						}
						this.form.suara_ok += 1;
						this.formPilihan = _.orderBy(this.form.pilihan, 'skor' ,['desc']);
					}
				}
			});
		},
		watch: {
			// check route changes
			$route(to, from) {
				this.fetch();
			},
			formStat(value){
				if(value === "success"){	
					this.form.link = window.location.origin + '/admins/voting/input';
					this.formPilihan = _.orderBy(this.form.pilihan, 'skor' ,['desc']);
					if(this.form.id_cu == 0){
						this.disableColumnCu('false');
					}else{
						this.disableColumnCu('true');
					}
				}
			},
			// when updating data
      updateStat(value) {
				this.modalState = value;
				this.modalButton = 'Ok';
				
				if(value == "success"){
					this.modalTitle = this.updateMessage.message;
					this.modalContent = '';
					this.fetch();
					this.fetchDataSuara(this.query);
				}else if(value == "fail"){
					this.modalContent = this.updateMessage;
				}else{
					this.modalContent = '';
				}
      }
		},
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
			},
			fetchDataSuara(params){
				this.$store.dispatch(this.kelas + '/indexDataSuara', [params, this.$route.params.id]);
				this.excelDownloadUrl = this.kelas + '/indexDataSuara/' + this.$route.params.id;
			},
			fetchDataTanggapan(params){
				this.$store.dispatch(this.kelas + '/indexDataTanggapan', [params, this.$route.params.id]);
				this.excelDownloadUrlTanggapan = this.kelas + '/indexDataTanggapan/' + this.$route.params.id;
			},
			back(){
				this.$router.push({name: this.kelas, params:{cu: this.form.id_cu}});
			},
			changeTab(value){
				this.tabName = value;

				if (value == 'info') {
					this.fetch();
				}else if (value == 'skor') {
					this.fetch();
				}else if (value == 'suara') {
					this.fetchDataSuara(this.query);
				}else if (value == 'tanggapan') {
					this.fetchDataTanggapan(this.queryTanggapan);
				}
			},
			disableColumnCu(status){
				this.columnDataSuara[5].disable = status;
			},
			selectedRow(item){
				this.selectedSuara = item;
			},
			selectedRowTanggapan(item){
				this.selectedTanggapan = item;
			},
			modalOpen(state) {
				this.modalShow = true;
				this.state = state;

				if (state == 'cu') {
					this.modalState = 'normal1';
					this.modalTitle = 'Ubah CU untuk link ' + this.selectedSuara.name + ' ini?';
					this.modalColor = 'bg-primary';
					this.modalSize = "";
				}else if (state == 'status') {
					this.modalState = 'confirm-tutup'; 
					if (this.form.status == 0) {
						this.modalTitle = 'Aktifkan ' + this.form.name + ' ?';
						this.modalButton = 'Iya, aktifkan';
					} else {
						this.modalTitle = 'Tidak aktifkan ' + this.form.name + ' ?';
						this.modalButton = 'Iya, tidak aktifkan';
					}
					this.modalSize = "";
				} else if (state == 'qrCode'){
					this.modalTitle = 'QR Code untuk kode ' + this.selectedSuara.name;
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalSize = "";
				} else if (state == 'qrCodeAll'){
					this.modalTitle = 'QR Code pada tabel';
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalSize = "modal-full";
				} else if (state == 'qrCodeInput'){
					this.modalTitle = 'QR Code untuk kode ini';
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalSize = "";
					this.selectedSuara.link = this.form.link;
				} else if (state == 'tambah_suara'){
					this.modalTitle = 'Tambah Suara';
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalSize = "";
				} else if (state == 'ubah_suara'){
					this.modalTitle = 'Ubah suara dengan kode ' + this.selectedSuara.name;
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalSize = "";
				} else if (state == 'hapus_suara') {
					this.modalState = 'confirm-tutup';
					this.modalTitle = 'Hapus suara dengan kode ' + this.selectedSuara.name + ' ?';
					this.modalButton = 'Iya, Hapus';
				}
			},
			modalTutup() {
				this.modalShow = false;
				this.$store.dispatch(this.kelas + '/resetUpdateStat');
			},
			modalConfirmOk() {
				if (this.state == "status"){
					this.$store.dispatch(this.kelas + '/updateStatus', [this.form.id, this.form.id_cu]);
				}else if (this.state == "hapus_suara"){
					this.$store.dispatch(this.kelas + '/destroySuara', this.selectedSuara.id);
				}
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('voting',{
				form: 'data',
				formStat: 'dataStat',
				itemDataSuara: 'dataS3',
				itemDataSuaraStat: 'dataStatS3',
				itemDataTanggapan: 'dataS4',
				itemDataTanggapanStat: 'dataStatS4',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>