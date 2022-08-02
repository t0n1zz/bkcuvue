<template>
	<div>

		<!-- Page header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>
		
		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- cari data -->
					<cari-data :itemDataStat="itemDataStat" :isBack="true" @cariData="cariData" @changeStatusNIK="changeStatusNIK" @nikNew="nikNew" @resetData="resetData" @back="back" v-if="!isEdit"></cari-data>

					<!-- data not exist -->
					<div class="alert bg-danger text-white alert-styled-left " v-if="itemDataStat == 'fail'">
						<span class="font-weight-semibold" v-if="currentUser.can['create_anggota_cu']">No. KTP anggota CU tidak terdaftar di SIMO, silahkan menambahkan terlebih dahulu data anggota dengan menekan tombol tambah anggota CU dibawah.
						</span>
						<span v-else>
							No. KTP anggota CU tidak terdaftar di SIMO, silahkan meminta user yang memiliki akses untuk menambah anggota CU untuk menambahkan terlebih dahulu data anggota atau meminta akses untuk menambah anggota CU kepada user lain yang bisa mengelola data user.
						</span>
					</div>

					<router-link type="button" :to="{name:'anggotaCuCreateJalinan', params:{nik: nik, statusNIK: statusNIK}}" class="btn btn-light btn-lg btn-block" v-if="itemDataStat == 'fail' && currentUser.can['create_anggota_cu']">
						<i class="icon-plus22"></i> Tambah Anggota CU
					</router-link>

					<!-- data exist -->
					<div v-if="itemDataStat == 'success' && itemData">
						
						<!-- identitas -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">Identitas</h5>
							</div>
							<div class="card-body">
								<identitas :itemData="itemData"></identitas>
							</div>
						</div>

						<!-- form -->
						<form @submit.prevent="save" data-vv-scope="form">

							<!-- check data -->
							<div class="card card-body" >
								<div class="row">
									<!-- check cu -->
									<div class="col-md-5 mb-2">
										<div class="input-group">

											<span class="input-group-prepend">
												<span class="input-group-text">Keanggotaan CU</span>
											</span>

											<!-- select -->
											<select class="form-control" name="anggota_cu_cu_id" v-model="anggota_cu_cu_id" data-width="100%" :disabled="itemData.anggota_cu_cu.length == 0 || $route.meta.mode == 'edit'" @change="changeCU($event.target.value)">
												<option disabled value="">
													<span v-if="itemData === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih keanggotaan CU</span>
												</option>
												<option v-for="(anggota_cu_cu,index) in itemData.anggota_cu_cu" :value="anggota_cu_cu.id" :key="index">CU {{anggota_cu_cu.cu.name}} {{anggota_cu_cu.tp ? ' | ' + anggota_cu_cu.tp.name : ''}} | No. BA: {{ anggota_cu_cu.no_ba }} | Tanggal Jadi Anggota: <span v-if="anggota_cu_cu.tanggal_masuk" v-html="$options.filters.date(anggota_cu_cu.tanggal_masuk)"></span></option>
											</select>

										</div>
									</div>

									<!-- check tipe  -->
									<div class="col-md-5 mb-2">
										<div class="input-group">

											<span class="input-group-prepend">
												<span class="input-group-text">Tipe</span>
											</span>

											<!-- select -->
											<select class="form-control" name="tipe" v-model="tipe" @change="changeTipe($event.target.value)">
												<option disabled value="">Silahkan pilih tipe</option>
												<option value="CACAT">Cacat</option>
												<option value="MENINGGAL">Meninggal</option>
											</select>

										</div>
									</div>

									<div class="col-md-2">
										<button type="button" class="btn btn-light btn-block" @click.prevent="cekData()">Cek Data</button>
									</div>
								</div>
							</div>

							<!-- form button -->
							<div class="card card-body" v-if="formStat == ''">
								<form-button :isSingleButton="true" :cancelState="'methods'" @cancelClick="back"></form-button>
							</div>

							<div v-if="($route.meta.mode == 'create' || $route.meta.mode == 'createNIK') && formStat == 'success' && form.id">

								<div class="alert bg-warning text-white alert-styled-left">
									<span class="font-weight-semibold">Anggota ini sudah mengajukan Bantuan Solidaritas Jalinan  <b>pada tanggal {{ $options.filters.date(form.created_at) }}</b> dengan <b>status {{ $options.filters.statusJalinan(form.status_klaim) }}</b>, mohon periksa kembali.
									</span>
								</div>

								<!-- form button -->
								<div class="card card-body">
									<form-button :isSingleButton="true" :cancelState="'methods'" @cancelClick="back"></form-button>
								</div>
							</div>

							<div v-else>
								<div v-if="formStat == 'success'">
									
									<!-- ada bantuan solidaritas lama cacat -->
									<!-- <div class="alert bg-info text-white alert-styled-left" v-if="message">
										<span class="font-weight-semibold">{{ message }}</span>
							    </div> -->

									<!-- data produk -->
									<div class="card" v-if="dataProdukStat == 'success'">
										<div class="card-header bg-white">
											<h5 class="card-title">Daftar Produk</h5>
										</div>
										<data-table :items="dataProduk" :columnData="columnData" :itemDataStat="dataProdukStat">
											<template slot="item-desktop" slot-scope="props">
												<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)" v-if="props.item">
													<td>{{ props.index + 1 }}</td>
													<td>
														<check-value :value="props.item.no_rek"></check-value>
													</td>
													<td>
														<check-value :value="props.item.produk_cu.name" v-if="props.item.produk_cu"></check-value>
														<span v-else>-</span>
													</td>
													<td>
														<check-value :value="props.item.produk_cu.tipe" v-if="props.item.produk_cu"></check-value>
														<span v-else>-</span>
													</td>
													<td>
														<check-value :value="props.item.saldo" valueType="currency"></check-value>
													</td>
													<td>
														<check-value :value="props.item.lama_pinjaman"></check-value>
													</td>
													<td>
														<check-value :value="props.item.lama_sisa_pinjaman"></check-value>
													</td>
													<td>
														<span v-if="props.item.tanggal" v-html="$options.filters.date(props.item.tanggal)"></span>
														<span v-else>-</span>
													</td>
													<td>
														<span v-if="props.item.tanggal" v-html="$options.filters.ageDiff(props.item.tanggal, itemData.tanggal_lahir)"></span>
														<span v-else>-</span>
													</td>
												</tr>
											</template>	
										</data-table>
									</div>

									<!-- form bantuan solidaritas jalinan -->
									<div class="card">
										<div class="card-header bg-white">
											<h5 class="card-title">Form Bantuan Solidaritas </h5>
										</div>
										<div class="card-body">
											<div class="row">

												<!-- kategori penyakit -->
												<div class="col-md-3">
													<div class="form-group" :class="{'has-error' : errors.has('form.kategori_penyakit')}">

														<!-- title -->
														<h6 :class="{ 'text-danger' : errors.has('form.kategori_penyakit')}">
															<i class="icon-cross2" v-if="errors.has('form.kategori_penyakit')"></i>
															Kategori Penyakit/Penyebab: <wajib-badge></wajib-badge>
														</h6>

														<!-- select -->
														<select class="form-control" name="kategori_penyakit" v-model="form.kategori_penyakit" data-width="100%" v-validate="'required'" data-vv-as="Kategori penyakit">
															<option disabled value="">Silahkan pilih kategori penyakit</option>
															<option value="asma">Asma</option>
															<option value="demam berdarah">Demam Berdarah</option>
															<option value="diabetes melitus">Diabetes Melitus</option>
															<option value="diare">Diare</option>
															<option value="ginjal">Ginjal</option>
															<option value="hepatitis">Hepatitis</option>
															<option value="hipertensi">Hipertensi</option>
															<option value="jantung">Jantung</option>
															<option value="kanker">Kanker</option>
															<option value="liver">Liver</option>
															<option value="maag">Maag</option>
															<option value="paru-paru">Paru-paru</option>
															<option value="stroke">Stroke</option>
															<option value="tbc">TBC</option>
															<option value="tumor">Tumor</option>
															<option value="malaria">Malaria</option>
															<option value="kecelakaan">Kecelakaan</option>
															<option value="komplikasi">Komplikasi</option>
															<option value="lain-lain">Lain-lain</option>
														</select>

														<!-- error message -->
														<small class="text-muted text-danger" v-if="errors.has('form.kategori_penyakit')">
															<i class="icon-arrow-small-right"></i> {{ errors.first('form.kategori_penyakit') }}
														</small>
														<small class="text-muted" v-else>&nbsp;</small>
													</div>
												</div>

												<!-- tanggal cacat/mati -->
												<div class="col-md-3">
													<div class="form-group" :class="{'has-error' : errors.has('form.tanggal_mati')}">

														<!-- title -->
														<h6 :class="{ 'text-danger' : errors.has('form.tanggal_mati')}">
															<i class="icon-cross2" v-if="errors.has('form.tanggal_mati')"></i>
															Tgl. Cacat/Meninggal: <wajib-badge></wajib-badge>
														</h6>

														<!-- input -->
														<date-picker @dateSelected="form.tanggal_mati = $event" :defaultDate="form.tanggal_mati"></date-picker>	
														<input v-model="form.tanggal_mati" v-show="false" v-validate="'required'" data-vv-as="Tgl. cacat/meninggal"/>

														<!-- error message -->
														<small class="text-muted text-danger" v-if="errors.has('form.tanggal_mati')">
															<i class="icon-arrow-small-right"></i> {{ errors.first('form.tanggal_mati') }}
														</small>
														<small class="text-muted" v-else>&nbsp;</small>	

													</div>
												</div>

												<!-- keterangan mati -->
												<div class="col-md-3">
													<div class="form-group">

														<!-- title -->
														<h6>Keterangan Cacat/Meninggal:</h6>

														<!-- text -->
														<input type="text" name="keterangan_mati" class="form-control" placeholder="Silahkan masukkan keterangan cacat/meninggal" v-model="form.keterangan_mati">
													</div>
												</div>

												<!-- keterangan -->
												<div class="col-md-3">
													<div class="form-group">

														<!-- title -->
														<h6 :class="{ 'text-danger' : errors.has('form.tanggal_mati')}">
															<i class="icon-cross2" v-if="errors.has('form.tanggal_mati')"></i>
															Keterangan Lain:
														</h6>

														<!-- text -->
														<input type="text" name="keterangan" class="form-control" placeholder="Silahkan masukkan keterangan lain" v-model="form.keterangan">

													</div>
												</div>

												<!-- TUNAS -->
												<div class="col-md-6" v-if="formStat == 'success' && tipe != 'CACAT'">
													<div class="form-group" :class="{'has-error' : errors.has('form.tunas_diajukan')}">

														<!-- title -->
														<h5>Nilai pengajuan bantuan solidaritas TUNAS <wajib-badge></wajib-badge></h5>

														<!-- text -->
														<cleave 
															name="tunas_diajukan"
															v-model="form.tunas_diajukan" 
															class="form-control" 
															:options="cleaveOption.numeric"
															placeholder="Silahkan masukkan jumlah nilai pengajuan bantuan solidaritas TUNAS"
															v-validate="'required'" data-vv-as="Nilai pengajuan bantuan solidaritas TUNAS"></cleave>

														<!-- error message -->
														<small class="text-muted text-danger" v-if="errors.has('form.tunas_diajukan')">
															<i class="icon-arrow-small-right"></i> {{ errors.first('form.tunas_diajukan') }}
														</small>
														<small class="text-muted" v-else>&nbsp;</small>		
													</div>
												</div>

												<!-- LINTANG -->
												<div class="col-md-6"> 
													<div class="form-group" :class="{'has-error' : errors.has('form.lintang_diajukan')}">

														<!-- title -->
														<h5>Nilai pengajuan bantuan solidaritas LINTANG <wajib-badge></wajib-badge></h5>

														<!-- text -->
														<cleave 
															name="lintang_diajukan"
															v-model="form.lintang_diajukan" 
															class="form-control" 
															:options="cleaveOption.numeric"
															placeholder="Silahkan masukkan jumlah nilai pengajuan bantuan solidaritas LINTANG"
															v-validate="'required'" data-vv-as="Nilai pengajuan bantuan solidaritas LINTANG"></cleave>

														<!-- error message -->
														<small class="text-muted text-danger" v-if="errors.has('form.lintang_diajukan')">
															<i class="icon-arrow-small-right"></i> {{ errors.first('form.lintang_diajukan') }}
														</small>
														<small class="text-muted" v-else>&nbsp;</small>		
													</div>
												</div>

											</div>
										</div>
									</div>

									<!-- dokumen -->
									<div class="card">
										<div class="card-header bg-white">
											<h5 class="card-title">Dokumen</h5>
										</div>
										<div class="card-body">
											<div class="alert bg-warning alert-styled-left" v-if="tipe == 'MENINGGAL'">
												<h6>Anggota yang meninggal dengan usia diatas 70 tahun <b>WAJIB UPLOAD dan KIRIM BERKAS FISIK</b> untuk buku simpanan / buku pinjaman / SPP perjanjian</h6>
											</div>
											<!-- nav -->
											<div class="nav-tabs-responsive mb-3">
												<ul class="nav nav-tabs nav-tabs-solid  bg-light">
													<li class="nav-item">
														<a href="#" class="nav-link" :class="{'active' : tabName == 'ktp'}" @click.prevent="changeTab('ktp')"><i class="icon-vcard mr-2"></i> Identitas diri (Kartu tanda penduduk (KTP) atau Surat Keterangan Kependudukan) </a>
													</li>
													<li class="nav-item" v-if="tipe == 'MENINGGAL'">
														<a href="#" class="nav-link" :class="{'active' : tabName == 'meninggal'}" @click.prevent="changeTab('meninggal')"><i class="icon-person mr-2"></i> Keterangan meninggal dunia</a>
													</li>
													<li class="nav-item">
														<a href="#" class="nav-link" :class="{'active' : tabName == 'spma'}" @click.prevent="changeTab('spma')"><i class="icon-magazine mr-2"></i> Surat Permohonan Menjadi Anggota </a>
													</li>
													<li class="nav-item" v-if="tipe == 'MENINGGAL'">
														<a href="#" class="nav-link" :class="{'active' : tabName == 'bukusimpanan'}" @click.prevent="changeTab('bukusimpanan')"><i class="icon-credit-card mr-2"></i> Buku Simpanan </a>
													</li>
													<li class="nav-item">
														<a href="#" class="nav-link" :class="{'active' : tabName == 'bukupinjaman'}" @click.prevent="changeTab('bukupinjaman')"><i class="icon-credit-card2 mr-2"></i> Buku Pinjaman </a>
													</li>
													<li class="nav-item">
														<a href="#" class="nav-link" :class="{'active' : tabName == 'pinjaman'}" @click.prevent="changeTab('pinjaman')"><i class="icon-clipboard3 mr-2"></i> Permohonan dan perjanjian pinjaman</a>
													</li>
												</ul>
											</div>

											<transition enter-active-class="animated fadeIn" mode="out-in">
												<div v-show="tabName == 'meninggal'">
													<div class="form-group">
														<!-- title -->
														<h5>Keterangan meninggal dunia:</h5>

														<!-- imageupload -->
														<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.dokumen_meninggal" v-model="form.dokumen_meninggal"></app-image-upload>
													</div>
												</div>
											</transition>

											<transition enter-active-class="animated fadeIn" mode="out-in">
												<div v-show="tabName == 'ktp'">
													<div class="form-group">
														<!-- title -->
														<h5>Identitas diri (Kartu tanda penduduk (KTP) atau Surat Keterangan Kependudukan) :</h5>

														<!-- imageupload -->
														<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.dokumen_ktp" v-model="form.dokumen_ktp"></app-image-upload>
													</div>
												</div>
											</transition>

											<transition enter-active-class="animated fadeIn" mode="out-in">
												<div v-show="tabName == 'spma'">
													<div class="row">

														<div class="col-6">
															<div class="form-group">
																<!-- title -->
																<h5>Surat Permohonan Menjadi Anggota 1:</h5>

																<!-- imageupload -->
																<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.spma_1" v-model="form.spma_1"></app-image-upload>
															</div>
														</div>

														<div class="col-6">
															<div class="form-group">
																<!-- title -->
																<h5>Surat Permohonan Menjadi Anggota 2:</h5>

																<!-- imageupload -->
																<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.spma_2" v-model="form.spma_2"></app-image-upload>
															</div>
														</div>

													</div>
												</div>
											</transition>

											<transition enter-active-class="animated fadeIn" mode="out-in">
												<div v-show="tabName == 'bukusimpanan'">
													<div class="row">

														<div class="col-6">
															<div class="form-group">
																<!-- title -->
																<h5>Buku Simpanan 1:</h5>

																<!-- imageupload -->
																<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.buku_simpanan_1" v-model="form.buku_simpanan_1"></app-image-upload>
															</div>
														</div>

														<div class="col-6">
															<div class="form-group">
																<!-- title -->
																<h5>Buku Simpanan 2:</h5>

																<!-- imageupload -->
																<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.buku_simpanan_2" v-model="form.buku_simpanan_2"></app-image-upload>
															</div>
														</div>

														<div class="col-6">
															<div class="form-group">
																<!-- title -->
																<h5>Buku Simpanan 3:</h5>

																<!-- imageupload -->
																<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.buku_simpanan_3" v-model="form.buku_simpanan_3"></app-image-upload>
															</div>
														</div>

														<div class="col-6">
															<div class="form-group">
																<!-- title -->
																<h5>Buku Simpanan 4:</h5>

																<!-- imageupload -->
																<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.buku_simpanan_4" v-model="form.buku_simpanan_4"></app-image-upload>
															</div>
														</div>

														<div class="col-6">
															<div class="form-group">
																<!-- title -->
																<h5>Buku Simpanan 5:</h5>

																<!-- imageupload -->
																<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.buku_simpanan_5" v-model="form.buku_simpanan_5"></app-image-upload>
															</div>
														</div>

													</div>
												</div>
											</transition>

											<transition enter-active-class="animated fadeIn" mode="out-in">
												<div v-show="tabName == 'bukupinjaman'">
													<div class="row">

														<div class="col-6">
															<div class="form-group">
																<!-- title -->
																<h5>Buku Pinjaman 1:</h5>

																<!-- imageupload -->
																<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.buku_pinjaman_1" v-model="form.buku_pinjaman_1"></app-image-upload>
															</div>
														</div>

														<div class="col-6">
															<div class="form-group">
																<!-- title -->
																<h5>Buku Pinjaman 2:</h5>

																<!-- imageupload -->
																<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.buku_pinjaman_2" v-model="form.buku_pinjaman_2"></app-image-upload>
															</div>
														</div>

														<div class="col-6">
															<div class="form-group">
																<!-- title -->
																<h5>Buku Pinjaman 3:</h5>

																<!-- imageupload -->
																<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.buku_pinjaman_3" v-model="form.buku_pinjaman_3"></app-image-upload>
															</div>
														</div>

													</div>
												</div>
											</transition>

											<transition enter-active-class="animated fadeIn" mode="out-in">
												<div v-show="tabName == 'pinjaman'">
													<div class="row">

														<div class="col-6">
															<div class="form-group">
																<!-- title -->
																<h5>Dokumen Pinjaman 1:</h5>

																<!-- imageupload -->
																<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.dokumen_pinjaman_1" v-model="form.dokumen_pinjaman_1"></app-image-upload>
															</div>
														</div>

														<div class="col-6">
															<div class="form-group">
																<!-- title -->
																<h5>Dokumen Pinjaman 2:</h5>

																<!-- imageupload -->
																<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.dokumen_pinjaman_2" v-model="form.dokumen_pinjaman_2"></app-image-upload>
															</div>
														</div>

														<div class="col-6">
															<div class="form-group">
																<!-- title -->
																<h5>Dokumen Pinjaman 3:</h5>

																<!-- imageupload -->
																<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.dokumen_pinjaman_3" v-model="form.dokumen_pinjaman_3"></app-image-upload>
															</div>
														</div>

														<div class="col-6">
															<div class="form-group">
																<!-- title -->
																<h5>Dokumen Pinjaman 4:</h5>

																<!-- imageupload -->
																<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.dokumen_pinjaman_4" v-model="form.dokumen_pinjaman_4"></app-image-upload>
															</div>
														</div>

														<div class="col-6">
															<div class="form-group">
																<!-- title -->
																<h5>Dokumen Pinjaman 5:</h5>

																<!-- imageupload -->
																<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.dokumen_pinjaman_5" v-model="form.dokumen_pinjaman_5"></app-image-upload>
															</div>
														</div>

														<div class="col-6">
															<div class="form-group">
																<!-- title -->
																<h5>Dokumen Pinjaman 6:</h5>

																<!-- imageupload -->
																<app-image-upload :image_loc="'/images/jalinan/'" :image_temp="form.dokumen_pinjaman_6" v-model="form.dokumen_pinjaman_6"></app-image-upload>
															</div>
														</div>

													</div>

												</div>
											</transition>

										</div>
									</div>

									<!-- form info -->
									<form-info></form-info>

									<!-- form button -->
									<div class="card card-body">
										<form-button :cancelState="'methods'" :formValidation="'form'" @cancelClick="back"></form-button>
									</div>
								</div>
							</div>

						</form>
					
					</div>
					
				</div>
			</div>
		</div>		

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor"
		 @batal="modalTutup" @confirmOk="modalConfirmOk" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalBackgroundClick">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- tambah -->
			<template slot="modal-body1">
			</template>

			<!-- ubah -->
			<template slot="modal-body2">

			</template>

		</app-modal>

	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import _ from 'lodash';
	import pageHeader from "../../components/pageHeader.vue";
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import Cleave from 'vue-cleave-component';
	import checkValue from "../../components/checkValue.vue";
	import infoIcon from "../../components/infoIcon.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import countWidget from '../../components/countWidget.vue';
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import cariData from "../anggotaCu/cariData";
	import identitas from "../../components/identitas.vue";
	import dataTable from '../../components/datatable.vue';
	import appImageUpload from '../../components/ImageUpload.vue';
	import { toMulipartedForm } from '../../helpers/form';
	import DatePicker from "../../components/datePicker.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			Cleave,
			checkValue,
			infoIcon,
			wajibBadge,
			countWidget,
			formButton,
			formInfo,
			cariData,
			identitas,
			dataTable,
			appImageUpload,
			DatePicker
		},
		data() {
			return {
				title: 'Tambah Bantuan Solidaritas Jalinan',
				titleDesc: 'Menambah bantuan solidaritas Jalinan',
				titleIcon: 'icon-plus3',
				level2Title: 'Bantuan Solidaritas Jalinan',
				kelas: 'jalinanKlaim',
				isEdit: false,
				nik: '',
				statusNIK: 'tidak',
				anggota_cu_cu_id: '',
				cu_id: '',
				tipe: '',
				tabName: 'ktp',
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
					},
					number16: {
            numeral: true,
            numeralIntegerScale: 16,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
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
				selectedItem: {},
        columnData:[
					{ title: 'No.' },
					{ title: 'No. Rek' },
					{ title: 'Nama' },
					{ title: 'Jenis' },
					{ title: 'Saldo Awal' },
					{ title: 'Lama Pinjaman (Bulan)' },
					{ title: 'Lama Sisa Pinjaman (Bulan)' },
					{ title: 'Tgl. Buat' },
					{ title: 'Usia Saat Membuka' },
				],
				selectedItemCu: '',
				itemDataCu: [],
				itemDataProduk: [],
				itemDataCuStat: 'success',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
			}
		},
		created() {
			if (this.currentUser.id_cu == 0) {
				if (this.modelCuStat != 'success') {
					this.$store.dispatch('cu/getHeader');
				}
			}

			this.fetch();
		},
		watch: {
			// check route changes
			'$route' (to, from){
				this.fetch();
			},
			itemDataStat(value) {
				if (value == "success") {
					this.itemDataCu = [];
					this.itemDataProduk = [];

					// cu
					if(this.itemData){
						if(this.itemData.anggota_cu_cu){
							var valData;
							for(valData of this.itemData.anggota_cu_cu){
								this.itemDataCu.push(valData);
							}
						}
						// get form
						this.fetchForm();
					}

				}
			},
			formStat(value){
				if(value == 'success'){
					if(this.$route.meta.mode == 'koreksi'){
						if(this.form.status_klaim == 5 || this.form.status_klaim == 6){
							this.form.id_koreksi = this.form.id;
							this.form.status_klaim = 7;
							this.form.id = '';
						}else{
							this.form.status_klaim = 1;
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
				} else {
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			}
		},
		methods: {
			fetch(){
				this.resetData();

				if(this.$route.meta.mode == 'edit'){
					this.title = 'Ubah Bantuan Solidaritas Jalinan';
					this.titleDesc = 'Mengubah bantuan solidaritas Jalinan';
					this.titleIcon = 'icon-pencil5';

					this.cariData(this.$route.params.nik);
				} else if(this.$route.meta.mode == 'koreksi'){
					this.title = 'Koreksi Bantuan Solidaritas Jalinan';
					this.titleDesc = 'Mengoreksi bantuan solidaritas Jalinan';
					this.titleIcon = 'icon-pencil5';

					this.cariData(this.$route.params.nik);
				} else {
					this.title = 'Tambah Bantuan Solidaritas Jalinan';
					this.titleDesc = 'Menambah Bantuan Solidaritas Jalinan';
					this.titleIcon = 'icon-plus3';
					this.isEdit = false;
					
					if(this.$route.meta.mode == 'createNIK'){
						this.cariData(this.$route.params.nik)
						this.isEdit = true;
					}else if(this.$route.meta.mode == 'createId'){
						this.cariDataId(this.$route.params.id)
						this.isEdit = true;
					}
				}
			},
			fetchForm(){
				if(this.$route.meta.mode == 'edit' || this.$route.meta.mode == 'koreksi'){
					this.$store.dispatch(this.kelas + '/edit',[this.$route.params.nik,this.$route.params.cu,this.$route.params.tipe]);	
					this.isEdit = true;
					this.anggota_cu_cu_id = this.$route.params.cu;
					this.tipe = this.$route.params.tipe;
				}
			},
			cariData(nik){
				this.nik = nik;
				this.$store.dispatch(this.kelas + '/cariData', nik);
			},
			cariDataId(id){
				this.$store.dispatch(this.kelas + '/cariDataId', id);
			},
			changeStatusNIK(value){
				this.nik == '';
				this.statusNIK = value;
				this.$store.dispatch(this.kelas + '/resetData');
			},
			nikNew(value){
				this.nik = value;
				this.$store.dispatch(this.kelas + '/cariData', value);
			},
			selectedRow(item) {
        this.selectedItem = item;
			},
			changeTab(value) {
				this.tabName = value;
			},
			changeTipe(value){
				if(value == 'cacat'){
					this.form.tunas_diajukan = 0;
				}
				this.$store.dispatch(this.kelas + '/resetForm');
			},
			changeCU(value){
				this.$store.dispatch('anggotaCu/resetDataProduk');
				this.$store.dispatch(this.kelas + '/resetForm');
			},
			cekData(){
				let _nik = '';
				if(this.$route.meta.mode === 'edit'){
					_nik = this.$route.params.nik;
				}else if(this.$route.meta.mode === 'createId'){
					_nik = this.itemData.nik;
				}else{
					_nik = this.nik;
				}

				let _cu = '';
				_cu = _.find(this.itemDataCu,{'id': parseInt(this.anggota_cu_cu_id, 10)});
				this.cu_id = _cu.cu_id;
				this.$store.dispatch(this.kelas + '/edit',[_nik,_cu.id, this.tipe]);
				this.$store.dispatch('anggotaCu/indexProduk',[this.itemData.id, _cu.cu_id]);
				// this.$store.dispatch(this.kelas + '/getKlaimLama',[_nik,_cu.id]);
			},
			resetData(){
				this.itemDataCu = [];
				this.itemDataProduk = [];
				this.$store.commit(this.kelas + '/setData2',{});
				this.$store.commit(this.kelas + '/setDataStat2','');
				this.$store.dispatch('anggotaCu/resetDataProduk');
				this.$store.dispatch(this.kelas + '/resetForm');
			},
			classCu(){
				if(this.currentUser.id_cu == 0){
					return 'col-8';
				}else{
					return 'col-12';
				}
			},
			save() {
				this.form.anggota_cu_id = this.itemData.id;
				this.form.anggota_cu_cu_id = this.anggota_cu_cu_id;
				this.form.tipe = this.tipe;
				this.form.cu_id = this.cu_id;
				
				if(this.tipe == 'CACAT'){
					this.form.tunas_diajukan = 0;
				}
				
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.form.id){
							this.$store.dispatch(this.kelas + '/update', [this.form.id, formData]);
						}else{
							this.$store.dispatch(this.kelas + '/store', formData);
						}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			back() {
				if(this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu:'semua', tp:'semua'}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu, tp:'semua'}});
				}
			},
			modalOpen(state, isMobile, itemMobile) {},
			modalConfirmOk() {},
			modalTutup() {
				if(this.updateStat === 'success'){
					this.back();
				}

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
		},
		computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
			}),
			...mapGetters('jalinanKlaim', {
				itemData: 'data2',
				itemDataStat: 'dataStat2',
				message: 'message',
				messageStat: 'messageStat',
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('anggotaCu',{
				dataProduk: 'dataProduk',
				dataProdukStat: 'dataProdukStat',
			}),
			...mapGetters('cu',{
				modelCu: 'headerDataS',
				modelCuStat: 'headerDataStatS',
			}),
			...mapGetters('provinces',{
				modelProvinces: 'dataS',
				modelProvincesStat: 'dataStatS'
			}),
			...mapGetters('regencies',{
				modelRegencies: 'dataS',
				modelRegenciesStat: 'dataStatS'
			}),
			...mapGetters('districts',{
				modelDistricts: 'dataS',
				modelDistrictsStat: 'dataStatS'
			}),
			...mapGetters('villages',{
				modelVillages: 'dataS',
				modelVillagesStat: 'dataStatS'
			}),
		}
	}
</script>