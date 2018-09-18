<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" @level2Back="back()"></page-header>
		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-warpper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<div class="card d-print-none" v-if="$route.meta.mode == 'editTp'">
						<div class="card-body"> 
							<div class="alert bg-info alert-styled-left">
								<p>Laporan ini merupakan bagian dari laporan konsolidasi, maka anda dapat melihat/mengubah laporan TP lain yang juga termasuk dalam laporan konsolidasi pada CU ini sesuai periode laporannya.</p>
							</div> 
							<div class="input-group">
								<div class="input-group-prepend">
									<span class="input-group-text">Pilih Laporan</span>
								</div>

								<!-- select -->
								<select class="form-control" name="idLaporanTp" v-model="idLaporanTp" data-width="100%" @change="changeLaporanTp($event.target.value)" :disabled="listLaporanTpDataStat === 'loading'">
									<option disabled value="">Silahkan pilih laporan tp</option>
									<option v-for="tp in listLaporanTpData" :value="tp.id" v-if="tp">{{tp.tp.name}}</option>
								</select>
							</div>
						</div>
					</div>

					<!-- main panel -->
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">

						<!-- main form -->
						<div class="card">
							<div class="card-body">
								<div class="row">

									<!-- CU -->
									<div class="col-md-4" v-if="profile.id_cu === 0">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_cu')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_cu')}">
												<i class="icon-cross2" v-if="errors.has('form.id_cu')"></i>
												CU:
											</h5>

											<!-- select -->
											<select class="form-control" name="id_cu" v-model="form.id_cu" data-width="100%" @change="changeCu($event.target.value)" v-validate="'required'" data-vv-as="CU" :disabled="modelCU.length === 0">
												<option disabled value="0">Silahkan pilih CU</option>
												<option v-for="cu in modelCU" :value="cu.id">{{cu.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_cu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_cu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tp -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_tp')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_tp')}">
												<i class="icon-cross2" v-if="errors.has('form.id_tp')"></i>
												TP:
											</h5>

											<!-- select -->
											<select class="form-control" name="id_tp" v-model="form.id_tp" data-width="100%" v-validate="'required'" data-vv-as="CU" @change="changeTp($event.target.value)" :disabled="!isModelTp">
												<option disabled value="">Silahkan pilih TP</option>
												<option value="konsolidasi" v-if="$route.meta.mode != 'editTp'">Konsolidasi</option>
													<option disabled value="">----------------</option>
												<option v-for="tp in modelTp" :value="tp.id" v-if="modelTp">{{tp.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_tp')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_tp') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- periode -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.periode')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.periode')}">
												<i class="icon-cross2" v-if="errors.has('form.periode')"></i>
												Periode:</h5>

											<!-- input -->
											<cleave 
												name="ultah"
												v-model="form.periode" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.date" 
												placeholder="Silahkan masukkan periode laporan"
												v-validate="'required'" data-vv-as="Periode"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.periode')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.periode') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

								</div>
							</div>
						</div>

						<div class="card">
							<div class="card-body">
								<div class="row">

									<!-- l_biasa -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Lelaki Biasa</h5>

											<!-- text -->
											<cleave 
												v-model="form.l_biasa" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah lelaki biasa"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- l_lbiasa -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Lelaki Luar Biasa</h5>

											<!-- text -->
											<cleave 
												v-model="form.l_lbiasa" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah lelaki luar biasa"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- p_biasa -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Perempuan Biasa</h5>

											<!-- text -->
											<cleave 
												v-model="form.p_biasa" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah perempuan biasa"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- p_lbiasa -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Perempuan Luar Biasa</h5>

											<!-- text -->
											<cleave 
												v-model="form.p_lbiasa" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah anggota perempuan luar biasa"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- total anggota lalu -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Total Anggota Tahun Lalu <i class="icon-info22" v-tooltip:top="'Anggota tahun lalu dari bulan yang sama dengan periode laporan ini.'"></i></h5>

											<!-- text -->
											<cleave 
												v-model="form.total_anggota_lalu" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan total anggota tahun lalu"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- separator -->
									<div class="col-md-12"><hr></div>

									<!-- aset -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Aset</h5>

											<!-- text -->
											<cleave 
												v-model="form.aset" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah aset"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- aset tahun lalu -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Aset Tahun Lalu <i class="icon-info22" v-tooltip:top="'Aset tahun lalu dari periode laporan ini.'"></i></h5>

											<!-- text -->
											<cleave 
												v-model="form.aset_lalu" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah aset"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- aset masalah  -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Aset Masalah <i class="icon-info22" v-tooltip:top="'Aset tahun lalu dari periode laporan ini.'"></i></h5>

											<!-- text -->
											<cleave 
												v-model="form.aset_masalah" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah aset masalah"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- aset tidak menghasilkan  -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Aset Tidak Menghasilkan</h5>

											<!-- text -->
											<cleave 
												v-model="form.aset_tidak_menghasilkan" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah aset tidak menghasilkan"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- aset likuid tidak menghasilkan  -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Aset Likuid Tidak Menghasilkan</h5>

											<!-- text -->
											<cleave 
												v-model="form.aset_tidak_menghasilkan" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah aset tidak menghasilkan"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- investasi likuid  -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Investasi Likuid</h5>

											<!-- text -->
											<cleave 
												v-model="form.investasi_likuid" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah investasi likuid"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- aktiva lancar  -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Aktiva Lancar</h5>

											<!-- text -->
											<cleave 
												v-model="form.aktiva_lancar" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah aktiva lancar"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- separator -->
									<div class="col-md-12"><hr></div>

									<!-- simpanan saham  -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Simp. Saham</h5>

											<!-- text -->
											<cleave 
												v-model="form.simpanan_saham" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah simp. saham"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- simpanan non saham unggulan -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Simp. Non Saham (Unggulan)</h5>

											<!-- text -->
											<cleave 
												v-model="form.nonsaham_unggulan" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah simp. non saham (unggulan)"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- simpanan non saham unggulan -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Simp. Non Saham (Harian & Deposito) <i class="icon-info22" v-tooltip:top="'Seluruh simpanan non-saham (Harian & Deposito) kecuali simpanan unggulan.'"></i></h5>

											<!-- text -->
											<cleave 
												v-model="form.nonsaham_harian" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah simp. non saham (harian & deposito)"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- simpanan saham tahun lalu -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Simp. Saham Tahun Lalu <i class="icon-info22" v-tooltip:top="'Simpanan saham tahun lalu dari bulan yang sama/bulan ini.'"></i></h5>

											<!-- text -->
											<cleave 
												v-model="form.simpanan_saham_lalu" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah simp. saham tahun lalu"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- simpanan saham tahun lalu bulan desember -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Simp. Saham Tahun Lalu Bulan Des <i class="icon-info22" v-tooltip:top="'Simpanan saham bulan desember tahun lalu.'"></i></h5>

											<!-- text -->
											<cleave 
												v-model="form.simpanan_saham_des" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah simp. saham tahun lalu bulan desember"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- separator -->
									<div class="col-md-12"><hr></div>

									<!-- hutang spd -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Hutang SPD</h5>

											<!-- text -->
											<cleave 
												v-model="form.hutang_spd" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah hutang spd"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- total hutang pihak ke-3 -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Total Hutang Pihak Ke-3 <i class="icon-info22" v-tooltip:top="'Hutang di Puskopdit BKCU Kalimantan dan lembaga lain.'"></i></h5>

											<!-- text -->
											<cleave 
												v-model="form.total_hutang_pihak3" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan total hutang pihak ke-3"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- hutang tidak berbiaya < 30 hari-->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Hutang Tidak Berbiaya &lt; 30 Hari </h5>

											<!-- text -->
											<cleave 
												v-model="form.hutang_tidak_berbiaya_30hari" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah hutang tidak berbiaya < 30 hari"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- piutang beredar -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Piutang Beredar </h5>

											<!-- text -->
											<cleave 
												v-model="form.piutang_beredar" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah piutang beredar"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- piutang lalai 1-12 bulan -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Piutang Lalai 1-12 Bulan </h5>

											<!-- text -->
											<cleave 
												v-model="form.piutang_lalai_1bulan" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah piutang lalai 1-12 bulan"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- piutang beredar -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Piutang Lalai &gt; 12 Bulan</h5>

											<!-- text -->
											<cleave 
												v-model="form.piutang_lalai_12bulan" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah piutang lalai &gt; 12 bulan"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- separator -->
									<div class="col-md-12"><hr></div>

									<!-- dcu -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Cadangan Umum</h5>

											<!-- text -->
											<cleave 
												v-model="form.dcu" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah cadangan umum"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- dcr -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Cadangan Resiko</h5>

											<!-- text -->
											<cleave 
												v-model="form.dcr" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah cadangan resiko"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- dana gedung -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Dana Gedung</h5>

											<!-- text -->
											<cleave 
												v-model="form.iuran_gedung" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah dana gedung"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- donasi -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Donasi</h5>

											<!-- text -->
											<cleave 
												v-model="form.donasi" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah donasi"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- beban peny. cadangan resiko -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Beban Peny. Cadangan Resiko</h5>

											<!-- text -->
											<cleave 
												v-model="form.beban_penyisihan_dcr" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah beban peny. cadangan resiko"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- separator -->
									<div class="col-md-12"><hr></div>

									<!-- total pendapatan -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Total pendapatan</h5>

											<!-- text -->
											<cleave 
												v-model="form.total_pendapatan" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan total pendapatan"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- total biaya -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Total Biaya</h5>

											<!-- text -->
											<cleave 
												v-model="form.total_biaya" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan total biaya"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- shu -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Sisa Hasil Usaha (SHU)</h5>

											<!-- text -->
											<cleave 
												v-model="form.shu" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah sisa hasil usaha (SHU)"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- shu lalu -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Sisa Hasil Usaha (SHU) Tahun Lalu</h5>

											<!-- text -->
											<cleave 
												v-model="form.shu_lalu" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah sisa hasil usaha (SHU) tahun lalu"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- bjs saham -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>BJS Saham</h5>

											<!-- text -->
											<cleave 
												v-model="form.bjs_saham" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah bsj saham"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- separator -->
									<div class="col-md-12"><hr></div>

									<!-- inflasi -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Inflasi</h5>

											<!-- text -->
											<cleave 
												v-model="form.laju_inflasi" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah inflasi"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- harga pasar -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Harga Pasar</h5>

											<!-- text -->
											<cleave 
												v-model="form.harga_pasar" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan harga pasar"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

								</div>
							</div>
						</div>

						<!-- form info -->
						<form-info></form-info>	

						<!-- form button -->
						<div class="card card-body">
							<form-button
								:cancelState="'methods'"
								:formValidation="'form'"
								@cancelClick="back"></form-button>
						</div>

					</form>
				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">
			
		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import _ from 'lodash';
	import pageHeader from "../../components/pageHeader.vue";
	import { toMulipartedForm } from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			message,
			formButton,
			formInfo,
			Cleave
		},
		data() {
			return {
				title: '',
				titleDesc: '',
				titleIcon: '',
				level2Title: 'Laporan CU',
				kelas: 'laporanCu',
				idLaporanTp: '',
				isModelTp: false,
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
          },
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
          }
        },
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		created(){
			if(this.profile.id_cu != undefined){
				this.checkProfileIdCU();
			}
		},
		watch: {
			// check route changes
			'$route' (to, from){
				this.fetch();
			},
			profileStat(value){ //jika refresh halaman maka reload profile
				if(value == "success"){
					this.checkProfileIdCU();
				}
			},
			formStat(value){
				if(value == "success"){
					if(this.$route.meta.mode == 'edit' && this.modelCUStat == "success"){
						this.changeCu(this.form.id_cu);
					}else if(this.$route.meta.mode == 'editTp' && this.modelCUStat == "success"){
						this.checkMetaEditTp();
					}else if(this.$route.meta.mode !== 'edit'){
						if(this.profile.id_cu == 0){
							// this.form.id_cu = this.profile.id_cu;
						}	
					}
				}
			},
			modelCUStat(value){
				if(value == "success"){
					if(this.$route.meta.mode == 'edit'){
						this.changeCu(this.form.id_cu);
					}else if(this.$route.meta.mode == 'editTp'){
						this.checkMetaEditTp();
					}
				}
			},
			modelTpStat(value){
				if(value == "success"){
					if(this.$route.meta.mode == 'edit'){
						this.form.id_tp = 0;
					}else if(this.$route.meta.mode == 'editTp'){
						this.changeTp(this.form.id_tp);
					}
					this.isModelTp = true;
				}
			},
			listLaporanTpDataStat(value){
				if(value == "success"){
					this.idLaporanTp = this.form.id;
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
			}
    },
		methods: {
			checkProfileIdCU(){
				if(this.profile.id_cu == 0){
					this.$store.dispatch('cu/getPus',this.profile.id_pus);
				}else{
					this.form.id_cu = this.profile.id_cu;
					this.isModelTp = true;
				}
			},
			fetch(){
				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
					this.title = 'Ubah ' + this.level2Title;
					this.titleDesc = 'Mengubah ' + this.level2Title;
					this.titleIcon = 'icon-pencil5';
				}else if(this.$route.meta.mode === 'editTp'){
					this.$store.dispatch(this.kelas + '/editTp',this.$route.params.id)
					this.title = 'Ubah ' + this.level2Title;
					this.titleDesc = 'Mengubah ' + this.level2Title;
					this.titleIcon = 'icon-pencil5';
				}else {
					this.title = 'Tambah ' + this.level2Title;
					this.titleDesc = 'Menambah ' + this.level2Title;
					this.titleIcon = 'icon-plus3';
					this.$store.dispatch(this.kelas + '/create');
				}
			},
			checkMetaEditTp(){
				this.form.id_cu = this.form.tp.id_cu;
				this.changeCu(this.form.tp.id_cu);
				this.$store.dispatch('laporanTp/listLaporanTp', [this.form.tp.id_cu, this.form.periode]);
			},
			changeCu(id){
				this.$store.dispatch('tp/getCu',id);
				let model = _.find(this.modelCU, function(o){
					return o.id == id
				});
				this.form.no_ba = model.no_ba;
			},
			changeTp(id){
				if(id == 0){
					this.form.no_tp = 0;
				}else{
					let model = _.find(this.modelTp, function(o){
						return o.id == id
					});
					this.form.no_tp = model.no_tp;
				}
			},
			changeLaporanTp(id,tp){
				this.$router.push({name: 'laporanTpEdit', params: { id: id}});
			},
			save() {
				if(this.profile.id_cu != 0){
					this.form.id_cu = this.profile.id_cu;
				}
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode === 'edit'){
							this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, this.form]);
						}else if(this.$route.meta.mode === 'editTp'){
							this.$store.dispatch(this.kelas + '/updateTp', [this.$route.params.id, this.form]);
						}else{
							if(this.form.id_tp == 0){
								this.$store.dispatch(this.kelas + '/store', this.form);
							}else{
								this.$store.dispatch(this.kelas + '/storeTp', this.form);
							}
						}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			back(){
				if(this.$route.meta.mode === 'edit'){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu, tp: 'konsolidasi'}});
				}else if(this.$route.meta.mode === 'editTp'){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu, tp: this.form.id_tp}});
				}else{
					if(this.profile.id_cu == 0){
						if(this.form.id_cu == 0){
							this.$router.push({name: this.kelas});
						}else{
							if(this.form.id_tp == 0){
								this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu, tp: 0}});
							}else{
								this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu, tp: this.form.id_tp}});
							}
						}
					}else{
						this.$router.push({name: this.kelas});
					}
				}
			},
			modalTutup() {
 				if(this.updateStat === 'success'){
					this.back();
				}

				this.modalShow = false;
				this.submitedKategori = false;
				this.submitedPenulis = false;
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
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('laporanCu',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('laporanTp',{
				listLaporanTpData: 'data2S',
				listLaporanTpDataStat: 'dataStat2S',
			}),
			...mapGetters('cu',{
				modelCU: 'dataS',
				modelCUStat: 'dataStatS',
			}),
			...mapGetters('tp',{
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
			}),
			modelPus() {
				return this.$store.getters.getPusS;
			}
		}
	}
</script>