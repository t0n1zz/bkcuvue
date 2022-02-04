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
										<h5 class="card-title">Pemilihan | Status: <span v-html="$options.filters.checkStatus(form.status)"></span></h5>
										<div class="header-elements">
											<!-- status -->
											<button @click.prevent="modalOpen('status')" 	class="btn btn-light btn-icon mb-1 mr-1" v-if="currentUser.can && currentUser.can['update_pemilihan']">
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

											<!-- tingkat -->
											<div class="col-md-6 form-group">
												<!-- title -->
												<h5>Tingkat:</h5>

												<!-- text -->
												<input type="text" name="tingkat" class="form-control" v-model="form.tingkat" disabled>
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


											<div class="col-md-6">
												<div class="form-group">

													<!-- title -->
													<h5>Pemilih Minimum:</h5>

													<!-- input -->
													<input type="text" name="tingkat" class="form-control" v-model="form.pemilihan_min" disabled>

												</div>
											</div>

											<div class="col-md-6">
												<div class="form-group">

													<!-- title -->
													<h5>Pemilih Maximum:</h5>

													<!-- input -->
													<input type="text" name="tingkat" class="form-control" v-model="form.pemilihan_max" disabled>

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

								<!-- calon -->								
								<div class="card">
									<div class="card-header bg-white header-elements-inline">
										<h5 class="card-title">Calon</h5>
									</div>

									<data-table :items="itemDataCalon" :columnData="columnDataCalon" :itemDataStat="itemDataCalonStat">
										<template slot="item-desktop" slot-scope="props">
											<tr class="text-nowrap" v-if="props.item">
												<td>{{ props.item.no_urut }}</td>
												<td>
													<img :src="'/images/aktivis/' + props.item.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
													<img :src="'/images/no_image.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
												</td>
												<td>{{ props.item.name }}</td>
												<td>{{ props.item.tanggal_lahir }}</td>
												<td>{{ props.item.tempat_lahir }}</td>
												<td>{{ props.item.status }}</td>
												<td>{{ props.item.pendidikan }}</td>
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
								<data-viewer :title="'Suara'" :columnData="columnDataSuara" :itemData="itemDataSuara" :query="query" :itemDataStat="itemDataSuaraStat" 
								:excelDownloadUrl="excelDownloadUrl" 
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
												<check-value :value="props.item.calon_pilih"></check-value>
											</td>
											<td v-if="!columnDataSuara[4].hide">
												<span v-if="props.item.pemilihan_calon_id" class="bg-orange-400 text-highlight"><i class="icon-check"></i></span>
												<span v-else class="bg-teal-300 text-highlight"><i class="icon-cross3"></i></span>
											</td>
											<td v-if="!columnDataSuara[5].hide">
												<span v-if="props.item.akses && props.item.akses.id" class="bg-orange-400 text-highlight"><i class="icon-check"></i></span>
												<span v-else class="bg-teal-300 text-highlight"><i class="icon-cross3"></i></span>
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
								<div class="card " v-if="form.calon">
									<div class="card-header bg-white header-elements-inline">
										<h5 class="card-title">Perolehan Skor</h5>
										<div class="header-elements">
											<button type="button" class="btn btn-light btn-icon mb-1" @click.prevent="fetch()">
												<i class="icon-sync"></i> Reload Data
											</button>
										</div>
									</div>
									<div class="card-body">
										<!-- <span class="badge badge-success">
											Suara Masuk: {{ form.suara_ok }}
										</span> 
										&nbsp;
										<span class="badge badge-warning">
											Suara Akses Suara: {{ form.suara_akses }}
										</span>
										&nbsp;
										<span class="badge badge-primary">
											Total Suara: {{ form.suara }}
										</span>
										
										<hr/> -->
										<div v-for="(p, index) in formCalon" :key="index">
											<div class="card card-body">
												<div class="row">
													<div class="col-sm-3 mb-1 mt-1">
														<div class="row">
															<div class="col-4">
																<!-- foto -->
																<img :src="'/images/aktivis/' + p.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="p.gambar">
																<img :src="'/images/no_image.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
															</div>
															<div class="col-8">
																<span class="badge badge-success" v-if="p.pivot">No. Urut {{ p.pivot.no_urut }}</span>
																<br/>
																<!-- nama -->
																<b>{{ p.name }}</b>
															</div>
														</div>
													</div>
													<div class="col-sm-8 mb-1 mt-1">
														<div class="progress">
															<div class="progress-bar-striped bg-success" :style="{width: Math.round((p.pivot.skor / form.suara) * 100) + '%'}">
																<span class="text-default font-size-lg">
																	&nbsp;
																	<b>{{ Math.round((p.pivot.skor / form.suara) * 100) + '%' }}</b>
																	&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
																</span>
															</div>
														</div>	
													</div>
													<div class="col-sm-1 mb-1 mt-1">
														<b>{{ p.pivot.skor }} / {{ form.suara }}</b>
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

			<template slot="modal-body1">
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
	import Echo from 'laravel-echo';
	import Pusher from "pusher-js";
	import DataViewer from '../../components/dataviewer2.vue';
	import qrCode from '../voting/qrCode.vue';
	import qrCodeAll from '../voting/qrCodeAll.vue';
	import formKodeSuara from "./formKodeSuara.vue";
	
	export default {
		components: {
			pageHeader,
			message,
			dataTable,
			jsonExcel,
			checkValue,
			appModal,
			DataViewer,
			qrCode,
			qrCodeAll,
			formKodeSuara
		},
		data() {
			return {
				title: 'Detail Pemilihan',
				titleDesc: 'Melihat detail data pemilihan',
				titleIcon: 'icon-stack2',
				level: 2,
				level2Title: 'Pemilihan',
				kelas: 'pemilihan',
				tabName: 'info',
				query: {
					order_column: "name",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				excelDownloadUrl: '',
				excelUploads:[
					{
						enabled: true,
						url: 'pemilihan/uploadSuara/' + this.$route.params.id,
						format_url: 'formatPemilihanSuara.xlsx',
						button: 'Upload Kode Suara'
					},
				],
				columnDataCalon:[
					{ title: 'No. Urut' },
					{ title: 'Foto' },
					{ title: 'Nama' },
					{ title: 'Tanggal Lahir' },
					{ title: 'Tempat Lahir' },
					{ title: 'Status' },
					{ title: 'Pendidikan' },
				],
				itemDataCalon: [],
				itemDataCalonStat: 'success',
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
						title: 'Pilihan',
						name: 'calon_pilih',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: false, 
					},
					{ 
						title: 'Memilih',
						name: 'pemilihan_calon_id',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: false, 
					},
					{ 
						title: 'Akses',
						name: 'pemilihan_id',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: false, 
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
				formCalon: '',
			}
		},
		created(){
			this.fetch();
		},
		mounted(){
			PusherAuth();
			window.Echo.private(`pemilihan.channel.` + this.$route.params.id)
			.listen('PemilihanEvent',(data) => {   
				var p;
				for (p of this.form.calon) {
					if(p.pivot.id == data.pemilihan_calon_id){
						p.pivot.skor = data.skor;
						// this.form.suara_ok += 1;
						this.formCalon = _.orderBy(this.form.calon, 'pivot.skor' ,['desc']);
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
					this.form.link = window.location.origin + '/admins/pemilihan/input';

					var valCalon;
					this.itemDataCalon = [];
					for (valCalon of this.form.calon) {
						let formData = {};
						formData.aktivis_id = valCalon.id;
						formData.no_urut = valCalon.pivot.no_urut;
						formData.name = valCalon.name;
						formData.gambar = valCalon.gambar;
						formData.tanggal_lahir = valCalon.tanggal_lahir;
						formData.tempat_lahir = valCalon.tempat_lahir;
						formData.status = valCalon.status;

						if(valCalon.pendidikan_tertinggi){
							formData.pendidikan = valCalon.pendidikan_tertinggi.tingkat + ' ' + valCalon.pendidikan_tertinggi.name
						}else{
							formData.pendidikan = "";
						}

						this.itemDataCalon.push(formData);
					}

					this.formCalon = _.orderBy(this.form.calon, 'pivot.skor' ,['desc']);
				}
			},
			// when updating data
      updateStat(value) {
				this.modalState = value;
				this.modalButton = 'Ok';
				
				if(value == "success"){
					this.modalTitle = this.updateMessage.message;
					this.modalContent = '';
					if(this.tabName == 'suara'){
						this.fetchDataSuara(this.query);
					}else{
						this.fetch();
					}
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
				}
			},
			selectedRow(item){
				this.selectedSuara = item;
			},
			modalOpen(state) {
				this.modalShow = true;
				this.state = state;

				if (state == 'status') {
					this.modalState = 'confirm-tutup'; 
					if (this.form.status == 0) {
						this.modalTitle = 'Aktifkan ' + this.form.name + ' ?';
						this.modalButton = 'Iya, aktifkan';
					} else {
						this.modalTitle = 'Tidak aktifkan ' + this.form.name + ' ?';
						this.modalButton = 'Iya, tidak aktifkan';
					}
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
			...mapGetters('pemilihan',{
				form: 'data',
				formStat: 'dataStat',
				itemDataSuara: 'dataS3',
				itemDataSuaraStat: 'dataStatS3',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>