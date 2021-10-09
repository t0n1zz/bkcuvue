<template>
	<div>
		<!-- page-header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="level" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<div v-if="formStat == 'success'">
						<!-- navbar -->
						<div class="card">
							<div class="nav-tabs-responsive">
								<ul class="nav nav-tabs nav-tabs-solid  bg-light mb-0">

									<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'iuran'}" @click.prevent="changeTab('iuran')"><i class="icon-menu7 mr-2"></i>
										Iuran
									</a></li>

									<!-- <li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'sheet3'}" @click.prevent="changeTab('sheet3')"><i class="icon-equalizer mr-2"></i>
										Simp > 5JT
									</a></li>

									<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'sheet4'}" @click.prevent="changeTab('sheet4')"><i class="icon-equalizer mr-2"></i>
										Simp > 50JT | 1 s.d. 70 Tahun
									</a></li>

									<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'sheet5'}" @click.prevent="changeTab('sheet5')"><i class="icon-equalizer mr-2"></i>
										Simp > 10JT | 60 s.d. 70 Tahun
									</a></li>

									<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'sheet6'}" @click.prevent="changeTab('sheet6')"><i class="icon-equalizer mr-2"></i>
										Simp > 70 Thn | Masuk < 60 Thn
									</a></li>

									<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'sheet7'}" @click.prevent="changeTab('sheet7')"><i class="icon-equalizer mr-2"></i>
										Simp > 70 Thn | Masuk 60 s.d. 70 Thn
									</a></li>

									<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'sheet8'}" @click.prevent="changeTab('sheet8')"><i class="icon-equalizer mr-2"></i>
										Masuk > 70 Thn
									</a></li>

									<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'sheet9'}" @click.prevent="changeTab('sheet9')"><i class="icon-equalizer mr-2"></i>
										Simp Kap < 30 Hari
									</a></li>

									<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'sheet10'}" @click.prevent="changeTab('sheet10')"><i class="icon-equalizer mr-2"></i>
										Simp Kap Lalai 3 Hari
									</a></li>

									<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'sheet11'}" @click.prevent="changeTab('sheet11')"><i class="icon-equalizer mr-2"></i>
										Simp Lembaga
									</a></li> -->
								</ul>
							</div>

						</div>

						<!-- form iuran -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-show="tabName == 'iuran'">
								<form @submit.prevent="save" data-vv-scope="form">
									<div class="row">
										<!-- tunas -->
										<div class="col-lg-6">
											<!-- informasi umum -->
											<div class="card">
												<div class="card-header bg-white">
													<h5 class="card-title">Santunan Solidaritas (TUNAS)</h5>
												</div>
												<div class="card-body">
													<!-- simpanan dilindungi	 -->
													<div class="card">
														<div class="card-header">
															<b>A. Simpanan yang dilindungi</b>
														</div>
														<div class="table-responsive">
															<table class="table">
																<tbody>
																	<tr v-for="(produk, index) in form.produk" v-if="produk.produk && (produk.produk.tipe == 'Simpanan Pokok' || produk.produk.tipe == 'Simpanan Wajib' || produk.produk.tipe == 'Simpanan Non Saham')">
																		<th>{{ produk.produk.name }}</th>
																		<td class="text-right">
																			<check-value :value="produk.saldo" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>Jumlah Simpanan yang dilindungi</th>
																		<td class="text-right"><check-value :value="form.total_simpanan" valueType="currency"></check-value></td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>

													<!-- simpanan sebagai pengurang -->
													<div class="card">
														<div class="card-header">
															<b>B. Simpanan sebagai pengurang</b>
														</div>
														<div class="table-responsive">
															<table class="table">
																<tbody>
																	<tr>
																		<th>1. Simpanan usia 0 s.d 1 thn diatas plafon (5.000.000)</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_3" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>2. Simpanan usia > 1 s.d 70 thn diatas plafon (50.000.000)</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_4" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>3. Simpanan usia masuk 60 s.d 70 thn diatas plafon (10.000.000)</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_5" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>4. Pertambahan simpanan usia diatas  70 thn - yang menjadi anggota CU pada usia di bawah 60 tahun (Maks. 50 juta)</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_6" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>5. Pertambahan simpanan usia diatas  70 thn - yang menjadi anggota CU pada usia 60 s.d 70 tahun (Maks. 10 juta)</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_7" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>6. Pertambahan simpanan usia diatas  70 thn - Anggota masuk usia diatas 70 tahun</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_8" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>7. Simpanan Kapitalisasi anggota baru  < 30 hari sejak menjadi anggota</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_9" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>8. Simpanan kapitalisasi  yang piutangnya tidak pernah diangsur 3 bln berturut-turut atau lebih</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_10" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>9. Simpanan lembaga yang diatasnamakan lembaga atau perorangan</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_11" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>Jumlah Simpanan sebagai pengurang</th>
																		<td class="text-right">
																			<check-value :value="form.total_simpanan_pengurang" valueType="currency"></check-value>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>

													<!-- simpanan yang dilindungi -->
													<div class="card">
														<div class="card-header">
															<b>C. Simpanan Yang Dilindungi</b>
														</div>
														<div class="table-responsive">
															<table class="table">
																<tbody>
																	<tr>
																		<th>A - B</th>
																		<td class="text-right">
																			<check-value :value="(form.total_simpanan - form.total_simpanan_pengurang)" valueType="currency"></check-value>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>

													<!-- iuran -->
													<div class="card">
														<div class="card-header">
															<b>D. Iuran</b>
														</div>
														<div class="table-responsive">
															<table class="table">
																<tbody>
																	<tr>
																		<th>Iuran Tunas</th>
																		<td class="text-right">
																			<check-value :value="(((form.total_simpanan - form.total_simpanan_pengurang) * 0,55) / 1000)" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>Pembulatan Iuran Tunas</th>
																		<td class="text-right">0</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>		

												</div>
											</div>

										</div>

										<!-- lintang -->
										<div class="col-lg-6">
											<!-- informasi umum -->
											<div class="card">
												<div class="card-header bg-white">
													<h5 class="card-title">Perlindungan Piutang Anggota (LINTANG)</h5>
												</div>
												<div class="card-body">
													<!-- simpanan dilindungi	 -->
													<div class="card">
														<div class="card-header">
															<b>A. Piutang yang dilindungi</b>
														</div>
														<div class="table-responsive">
															<table class="table">
																<tbody>
																	<tr v-for="(produk, index) in form.produk" :key="index" v-if="produk.produk && (produk.produk.tipe == 'Pinjaman Kapitalisasi' || produk.produk.tipe == 'Pinjaman Umum' || produk.produk.tipe == 'Pinjaman Produktif')">
																		<th>{{ produk.produk.name }}</th>
																		<td class="text-right">
																			<check-value :value="produk.saldo" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>Jumlah Piutang yang dilindungi</th>
																		<td class="text-right"><check-value :value="form.total_pinjaman" valueType="currency"></check-value></td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>

													<!-- simpanan sebagai pengurang -->
													<div class="card">
														<div class="card-header">
															<b>B. Piutang sebagai pengurang</b>
														</div>
														<div class="table-responsive">
															<table class="table">
																<tbody>
																	<tr>
																		<th>1. Saldo piutang cair usia dewasa s.d 60 thn diatas plafon (150.000.000)</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_12" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>2. Saldo piutang cair diatas usia 60 s.d 70 thn diatas plafon (50.000.000)</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_13" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>3. Saldo piutang kapitalisasi diatas plafon (25.000.000)</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_14" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>4. Saldo piutang usia diatas 70 tahun</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_15" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>5. Saldo piutang macet  lebih dari 6 bulan berturut-turut</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_16" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>6. Saldo piutang kapitalisasi anggota baru < 30 hari sejak menjadi anggota</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_17" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>7. Saldo piutang kapitalisasi yang tidak pernah diangsur ≥ 3 bln berturut-turut</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_18" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>8. Saldo piutang dengan tujuan untuk biaya berobat sendiri</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_19" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>9. Saldo piutang lembaga atas nama perorangan atau nama lembaga</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_20" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>10. Saldo piutang produktif  diatas plafon (300.000.000)</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_21" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>11. Saldo piutang produktif dan piutang lain diatas plafon (300.000.000)</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_22" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>12. Saldo piutang kapitalisasi yang umur piutang diatas 5 tahun</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_23" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>13. Saldo piutang selain  kapitalisasi yang umur piutang diatas 15 tahun</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_24" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>14. Saldo piutang yang angsuran ditarik dari simpanan saham (SP dan SW)</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_25" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>15. Saldo piutang luar biasa usia < 17 tahun dan belum menikah</th>
																		<td class="text-right">
																			<check-value :value="form.total_sheet_26" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>Jumlah Pinjaman sebagai pengurang</th>
																		<td class="text-right">
																			<check-value :value="form.total_pinjaman_pengurang" valueType="currency"></check-value>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>

													<!-- pinjaman yang dilindungi -->
													<div class="card">
														<div class="card-header">
															<b>C. Piutang Yang Dilindungi</b>
														</div>
														<div class="table-responsive">
															<table class="table">
																<tbody>
																	<tr>
																		<th>A - B</th>
																		<td class="text-right">
																			<check-value :value="(form.total_pinjaman - form.total_pinjaman_pengurang)" valueType="currency"></check-value>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>

													<!-- iuran -->
													<div class="card">
														<div class="card-header">
															<b>D. Iuran</b>
														</div>
														<div class="table-responsive">
															<table class="table">
																<tbody>
																	<tr>
																		<th>Iuran Lintang</th>
																		<td class="text-right">
																			<check-value :value="(((form.total_pinjaman - form.total_pinjaman_pengurang) * 0,55) / 1000)" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>Pembulatan Iuran Lintang</th>
																		<td class="text-right">0</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>		

												</div>
											</div>

										</div>

										<!-- total -->
										<div class="col-lg-12">
											<div class="card">
												<div class="card-header bg-white">
													<h5 class="card-title">Total</h5>
												</div>
												<div class="table-responsive">
													<table class="table">
														<tbody>
															<tr>
																<th>Jumlah Iuran Jalinan ( TUNAS + LINTANG )</th>
																<td class="text-right">0</td>
															</tr>
															<tr>
																<th>Jumlah Iuran Jalinan Yang Dibayarkan</th>
																<td class="text-right">0</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>

									</div>
									
									<!-- form info -->
									<form-info></form-info>	
									<br/>

									<!-- form button -->
									<div class="card card-body" v-if="(currentUser.id_cu == 0 && this.form.status == 1) || (currentUser.id_cu != 0 && this.form.status == 0)">
										<form-button
											:cancelState="cancelState"
											:formValidation="'form'"
											:confirmTitle="confirmTitle"
											@cancelClick="back"></form-button>
									</div>
									<div class="card card-body" v-else>
										<form-button
											:cancelState="cancelState"
											:isSingleButton=true
											@cancelClick="back"></form-button>
									</div>
								</form>	
							</div>
						</transition>

						<!-- sheet3 -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
							<div v-show="tabName == 'sheet3'">
								<table-anggota :kelas="kelas" :title="'sheet3'" :produkData="form.produk" :lokasi="3"></table-anggota>
							</div>
						</transition>

					</div>	

					<!-- loading -->
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
						<!-- form button -->
						<div class="card card-body">
							<form-button
								:cancelState="cancelState"
								:isSingleButton=true
								@cancelClick="back"></form-button>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<template slot="modal-body1">

			</template>

		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import _ from 'lodash';
	import pageHeader from "../../components/pageHeader.vue";
	import infoIcon from "../../components/infoIcon.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import dataTable from '../../components/datatable.vue';
	import DatePicker from "../../components/datePicker.vue";
	import checkValue from "../../components/checkValue.vue";
	import tableAnggota from "./tableAnggota.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			formButton,
			formInfo,
			dataTable,
			infoIcon,
			wajibBadge,
			DatePicker,
			checkValue,
			tableAnggota
		},
		data() {
			return {
				title: 'Detail Iuran JALINAN',
				titleDesc: 'Detail iuran JALINAN',
				titleIcon: 'icon-plus3',
				level: 2,
				level2Title: 'Iuran JALINAN',
				kelas: 'jalinanIuran',
				sasaran: [],
				tempatData: '',
				idCu: '',
				periodeBulan: '',
				periodeTahun: '',
				itemTahun: [],
				tabName: 'iuran',
				anggotaMasukData: [],
				cancelState: 'methods',
				state: '',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalSize: '',
				submited: false,
				confirmTitle: '',
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		created(){
			this.formStat == '';
			this.anggotaDataStat == '';
		},
		watch: {
			formStat(value){
				if(value == 'success'){
					if(this.form.status == 0){
						this.confirmTitle = 'Konfirmasi Pembayaran'
					}else if(this.form.status == 1){
						this.confirmTitle = 'Iuran Lunas'
					}
				}
			},
			updateStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateResponse.message;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			},
    },
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
			},
			fetchAnggota(lokasi){
				this.$store.dispatch(this.kelas + '/edit',[this.$route.params.id, lokasi]);	
			},
			save() {
				this.form.id_cu = this.idCu;
				this.state = '';
				
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, this.form]);
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			back(){
				if(this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu:'semua'}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu}});
				}
			},
			changeTab(value){
				this.tabName = value;
			},
			selectedRow(item,index){
				this.selectedItemCalon = item;
				this.selectedItemCalon.index = index;
			},
			selectedRow2(item,index){
				this.selectedItemSuara = item;
				this.selectedItemSuara.index = index;
			},
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;

				if(isMobile){
					this.selectedItemCalon = itemMobile;
				}

				if (state == 'hapusCalon') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Calon' + this.selectedItemCalon.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahCalon'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Calon';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formCalonMode = 'edit';
				}else if(state == 'tambahCalon'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Calon';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formCalonMode = 'create';
				}
			},
			modalConfirmOk() {
				this.modalShow = false;

				if (this.state == 'hapusCalon') {
					_.remove(this.itemDataCalon, {
						index: this.selectedItemCalon.index
					});
					this.selectedItemCalon = {};
				}
			},
			modalTutup() {
 				if(this.updateStat == 'success' && this.state == ''){
					this.$store.dispatch(this.kelas + '/resetUpdateStat');
					this.back();
				}
				this.modalShow = false;
			},
			modalBackgroundClick(){
				if(this.modalState === 'success'){
					this.modalTutup;
				}else if(this.modalState === 'loading'){
					// do nothing
				}else{
					this.modalShow = false
				}
			},
			momentYear(){
				return moment().year();
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('cu',{
				modelCu: 'headerDataS',
				modelCuStat: 'headerDataStatS',
			}),
			...mapGetters('jalinanIuran',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('anggotaCu',{
				anggotaData: 'dataS',
				anggotaDataStat: 'dataStatS',
				anggotaKeluarData: 'dataS2',
				anggotaKeluarDataStat: 'dataStatS2',
			}),
		}
	}
</script>