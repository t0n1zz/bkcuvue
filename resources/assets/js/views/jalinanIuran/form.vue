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
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">

						<!-- select -->
						<div class="card">
							<div class="card-body">  
								<div class="row">
									<div class="col-sm-4" v-if="this.currentUser.id_cu == 0">
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text">Pilih CU</span>
											</div>

											<!-- select -->
											<select class="form-control" name="idCu" v-model="idCu" data-width="100%"  :disabled="modelCuStat === 'loading'">
												<option disabled value="">Silahkan pilih data</option>
												<slot></slot>
												<option disabled value="">----------------</option>
												<option v-for="(cu, index) in modelCu" :value="cu.id" :key="index">{{cu.name}}</option>
											</select>

											<!-- reload cu -->
											<div class="input-group-append">
												<button class="btn btn-light" @click="fetchCU" :disabled="modelCuStat === 'loading'">
													<i class="icon-sync" :class="{'spinner' : modelCuStat === 'loading'}"></i>
												</button>
											</div>
										</div>
									</div>

									<div :class="{ 'col-sm-6' : currentUser.id_cu == 0, 'col-sm-12' : currentUser.id_cu != 0 }">
										<div class="row">
											<div class="col-6">
												<div class="input-group">
													<div class="input-group-prepend">
														<span class="input-group-text">Pilih Bulan</span>
													</div>

													<!-- select -->
													<select class="form-control" name="periodeBulan" v-model="periodeBulan" data-width="100%" :disabled="idCu == ''">
														<option disabled value="">Bulan</option>
														<option disabled value="">----------------</option>
														<option value="1">1</option>
														<option value="2">2</option>
														<option value="3">3</option>
														<option value="4">4</option>
														<option value="5">5</option>
														<option value="6">6</option>
														<option value="7">7</option>
														<option value="8">8</option>
														<option value="9">9</option>
														<option value="10">10</option>
														<option value="11">11</option>
														<option value="12">12</option>
													</select>
												</div>
											</div>
											<div class="col-6">
												<div class="input-group">
													<div class="input-group-prepend">
														<span class="input-group-text"> Pilih Tahun</span>
													</div> 
													<!-- select -->
													<select class="form-control" name="periodeTahun" v-model="periodeTahun" data-width="100%" :disabled="periodeBulan == ''">
														<option disabled value="">Tahun</option>
														<option disabled value="">----------------</option>
														<option v-for="(y, index) in itemTahun" :value="y" :key="index">{{y}}</option>
													</select>
												</div>
											</div>
										</div>
									</div>

									<div class="col-sm-2">
										<button type="button" class="btn btn-light btn-icon btn-block" @click.prevent="fetch()" v-if="formStat != 'loading' && anggotaDataStat != 'loading'" :disabled="periodeTahun == ''">
											<i class="icon-folder-open3"></i>  Buat
										</button>
										<button type="button" class="btn btn-light btn-icon btn-block" v-else>
											<i class="icon-sync spinner"></i>
										</button>
									</div>
								</div>
								
							</div>
						</div>	

						<!-- form -->
						<div v-if="formStat == 'success'">
							<!-- navbar -->
							<div class="card">
								<div class="nav-tabs-responsive">
									<ul class="nav nav-tabs nav-tabs-solid  bg-light mb-0">

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'iuran'}" @click.prevent="changeTab('iuran')"><i class="icon-menu7 mr-2"></i>
											Iuran
										</a></li>

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'masuk'}" @click.prevent="changeTab('masuk')"><i class="icon-equalizer mr-2"></i>
											Anggota Masuk
										</a></li>

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'keluar'}" @click.prevent="changeTab('keluar')"><i class="icon-equalizer mr-2"></i>
											Anggota Keluar
										</a></li>

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'simp5'}" @click.prevent="changeTab('simp5')"><i class="icon-equalizer mr-2"></i>
											SIMP > 5JT
										</a></li>

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'simp10'}" @click.prevent="changeTab('simp10')"><i class="icon-equalizer mr-2"></i>
											SIMP > 10JT | 60 S.d. 70 Thn
										</a></li>

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'simp701'}" @click.prevent="changeTab('simp701')"><i class="icon-equalizer mr-2"></i>
											> 70 Thn | Masuk < 60 Thn
										</a></li>

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'simp702'}" @click.prevent="changeTab('simp702')"><i class="icon-equalizer mr-2"></i>
											> 70 Thn | Masuk > 60 Thn
										</a></li>

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'simp703'}" @click.prevent="changeTab('simp703')"><i class="icon-equalizer mr-2"></i>
											> 70 Thn | Masuk > 70 Thn
										</a></li>
									</ul>
								</div>

							</div>

							<!-- form iuran -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'iuran'">
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
																	<tr v-for="(produk, index) in produkData" v-if="produk.tipe == 'Simpanan Pokok' || produk.tipe == 'Simpanan Wajib' || produk.tipe == 'Simpanan Non Saham'">
																		<th>{{ produk.name }}</th>
																		<td class="text-right">
																			<check-value :value="produk.saldo" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>Jumlah Simpanan yang dilindungi</th>
																		<td class="text-right"></td>
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
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>2. Simpanan usia > 1 s.d 70 thn diatas plafon (50.000.000)</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>3. Simpanan usia masuk 60 s.d 70 thn diatas plafon (10.000.000)</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>4. Pertambahan simpanan usia diatas  70 thn - yang menjadi anggota CU pada usia di bawah 60 tahun (Maks. 50 juta)</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>5. Pertambahan simpanan usia diatas  70 thn - yang menjadi anggota CU pada usia 60 s.d 70 tahun (Maks. 10 juta)</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>6. Pertambahan simpanan usia diatas  70 thn - Anggota masuk usia diatas 70 tahun</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>7. Simpanan Kapitalisasi anggota baru  < 30 hari sejak menjadi anggota</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>8. Simpanan kapitalisasi  yang piutangnya tidak pernah diangsur 3 bln berturut-turut atau lebih</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>9. Simpanan lembaga yang diatasnamakan lembaga atau perorangan</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>Jumlah Simpanan sebagai pengurang</th>
																		<td class="text-right">0</td>
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
																		<td class="text-right">0</td>
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
																		<td class="text-right">0</td>
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
																	<tr v-for="(produk, index) in produkData" :key="index" v-if="produk.tipe == 'Pinjaman Kapitalisasi' || produk.tipe == 'Pinjaman Umum' || produk.tipe == 'Pinjaman Produktif'">
																		<th>{{ produk.name }}</th>
																		<td class="text-right">
																			<check-value :value="produk.saldo" valueType="currency"></check-value>
																		</td>
																	</tr>
																	<tr>
																		<th>Jumlah Piutang yang dilindungi</th>
																		<td class="text-right"></td>
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
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>2. Saldo piutang cair diatas usia 60 s.d 70 thn diatas plafon (50.000.000)</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>3. Saldo piutang kapitalisasi diatas plafon (25.000.000)</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>4. Saldo piutang usia diatas 70 tahun</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>5. Saldo piutang macet  lebih dari 6 bulan berturut-turut</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>6. Saldo piutang kapitalisasi anggota baru < 30 hari sejak menjadi anggota</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>7. Saldo piutang kapitalisasi yang tidak pernah diangsur ≥ 3 bln berturut-turut</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>8. Saldo piutang dengan tujuan untuk biaya berobat sendiri</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>9. Saldo piutang lembaga atas nama perorangan atau nama lembaga</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>10. Saldo piutang produktif  diatas plafon (300.000.000)</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>11. Saldo piutang produktif dan piutang lain diatas plafon (300.000.000)</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>12. Saldo piutang kapitalisasi yang umur piutang diatas 5 tahun</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>13. Saldo piutang selain  kapitalisasi yang umur piutang diatas 15 tahun</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>14. Saldo piutang yang angsuran ditarik dari simpanan saham (SP dan SW)</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>15. Saldo piutang luar biasa usia < 17 tahun dan belum menikah</th>
																		<td class="text-right">0</td>
																	</tr>
																	<tr>
																		<th>Jumlah Simpanan sebagai pengurang</th>
																		<td class="text-right">0</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>

													<!-- simpanan yang dilindungi -->
													<div class="card">
														<div class="card-header">
															<b>C. Piutang Yang Dilindungi</b>
														</div>
														<div class="table-responsive">
															<table class="table">
																<tbody>
																	<tr>
																		<th>A - B</th>
																		<td class="text-right">0</td>
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
																		<td class="text-right">0</td>
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
									<div class="card card-body">
										<form-button
											:cancelState="cancelState"
											:formValidation="'form'"
											@cancelClick="back"></form-button>
									</div>
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

					</form>
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
	import Cleave from 'vue-cleave-component';
	import dataTable from '../../components/datatable.vue';
	import DatePicker from "../../components/datePicker.vue";
	import checkValue from "../../components/checkValue.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			formButton,
			formInfo,
			Cleave,
			dataTable,
			infoIcon,
			wajibBadge,
			DatePicker,
			checkValue
		},
		data() {
			return {
				title: 'Tambah Iuran JALINAN',
				titleDesc: 'Menambah iuran JALINAN baru',
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
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
					},
					year:{
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
			}
		},
		created(){
			this.formStat == '';
			this.anggotaDataStat == '';
			if(this.currentUser.id_cu != 0){
				this.changeCU(this.currentUser.id_cu);
			}else{
				if(this.currentUser.id_pus !== undefined){
					this.fetchCU();
				}	
			}
			this.generateYear();
		},
		watch: {
			anggotaDataStat(value){
				if(value == 'success'){
					this.anggotaData.forEach(function (column){
						
					});
				}
			},
			anggotaKeluarDataStat(value){
				if(value == 'success'){
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
				// this.$store.dispatch('produkCu/getCuJalinan', this.idCu);
				// this.$store.dispatch('anggotaCu/getCuJalinan', [this.idCu, this.periodeBulan, this.periodeTahun]);
				this.$store.dispatch('anggotaCu/getCuKeluar', this.idCu);
				this.$store.dispatch(this.kelas + '/create', [this.idCu, this.periodeBulan, this.periodeTahun]);
			},
		fetchCU(){
				if(this.modelCuStat != 'success'){
					this.$store.dispatch('cu/getHeader');
				}
			},
			save() {
				this.form.id_cu = this.idCu;
				this.state = '';
				
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode == 'edit'){
							this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, this.form]);
						}else{
							this.$store.dispatch(this.kelas + '/store', this.form);
					}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			back(){
				this.$router.push({name: this.kelas });
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
			generateYear(){
				const years = (back) => {
  				const year = new Date().getFullYear();
  				return Array.from({length: back}, (v, i) => year - back + i + 1);
				}

				this.itemTahun = years(5);
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
				produkData: 'dataS',
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