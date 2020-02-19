<template>
	<div>
		<!-- page-header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<div class="card card-body">
						<div class="row">

							<!-- cu -->
							<div class="col-md-6" v-if="currentUser.id_cu === 0">
								<div class="form-group" :class="{'has-error' : errors.has('form.id_cu')}">

									<!-- title -->
									<h5 :class="{ 'text-danger' : errors.has('form.id_cu')}">
										<i class="icon-cross2" v-if="errors.has('form.id_cu')"></i>
										CU: <wajib-badge></wajib-badge>
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

							<!-- periode -->
							<div class="col-md-6">
								<div class="form-group" :class="{'has-error' : errors.has('form.periode')}">

									<!-- title -->
									<h5 :class="{ 'text-danger' : errors.has('form.periode')}">
										<i class="icon-cross2 d-none d-sm-block" v-if="errors.has('form.periode')"></i>
										Periode: <wajib-badge></wajib-badge>
										<info-icon :message="'Format: tahun-bulan-tanggal dalam angka. Contoh: 2019-01-23'"></info-icon>
									</h5>

									<!-- input -->
									<cleave 
										name="periode"
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
					
					<div class="nav-tabs-responsive mb-3">
						<ul class="nav nav-tabs nav-tabs-solid  bg-light">
							<li class="nav-item">
								<div class="nav-link" :class="{'active' : tabName == 'p1'}" @click.prevent="changeTab('p1')" style = "cursor:pointer">
									<a href="#" class="font-weight-bold" :class="{'text-white' : tabName == 'p1'}">1. PERSPEKTIF KEUANGAN</a>
									<hr class="mt-1 mb-1" />
									<ul class="list-inline mb-0">
										<li>
											Skor CU: {{ (
												form.p1.p1a1_cu_penilaian + 
												form.p1.p1a2_cu_penilaian + 
												form.p1.p1b3_cu_penilaian + 
												form.p1.p1b4_cu_penilaian + 
												form.p1.p1b5_cu_penilaian + 
												form.p1.p1b6_cu_penilaian + 
												form.p1.p1b7_cu_penilaian + 
												form.p1.p1c8_cu_penilaian + 
												form.p1.p1c9_cu_penilaian + 
												form.p1.p1d10_cu_penilaian + 
												form.p1.p1d11_cu_penilaian + 
												form.p1.p1e12_cu_penilaian + 
												form.p1.p1f13_cu_penilaian + 
												form.p1.p1f14_cu_penilaian) / 1 }} 

											/ Bobot Skor CU: {{ (((
												form.p1.p1a1_cu_penilaian + 
												form.p1.p1a2_cu_penilaian + 
												form.p1.p1b3_cu_penilaian + 
												form.p1.p1b4_cu_penilaian + 
												form.p1.p1b5_cu_penilaian + 
												form.p1.p1b6_cu_penilaian + 
												form.p1.p1b7_cu_penilaian + 
												form.p1.p1c8_cu_penilaian + 
												form.p1.p1c9_cu_penilaian + 
												form.p1.p1d10_cu_penilaian + 
												form.p1.p1d11_cu_penilaian + 
												form.p1.p1e12_cu_penilaian + 
												form.p1.p1f13_cu_penilaian + 
												form.p1.p1f14_cu_penilaian)/56) * 40) | round(2) }} 
										</li>
										<li>
											Skor BKCU: {{ (
												form.p1.p1a1_bkcu_penilaian + 
												form.p1.p1a2_bkcu_penilaian + 
												form.p1.p1b3_bkcu_penilaian + 
												form.p1.p1b4_bkcu_penilaian + 
												form.p1.p1b5_bkcu_penilaian + 
												form.p1.p1b6_bkcu_penilaian + 
												form.p1.p1b7_bkcu_penilaian + 
												form.p1.p1c8_bkcu_penilaian + 
												form.p1.p1c9_bkcu_penilaian + 
												form.p1.p1d10_bkcu_penilaian + 
												form.p1.p1d11_bkcu_penilaian + 
												form.p1.p1e12_bkcu_penilaian + 
												form.p1.p1f13_bkcu_penilaian + 
												form.p1.p1f14_bkcu_penilaian) / 1 }} 

											/ Bobot Skor BKCU: {{ (((
												form.p1.p1a1_bkcu_penilaian + 
												form.p1.p1a2_bkcu_penilaian + 
												form.p1.p1b3_bkcu_penilaian + 
												form.p1.p1b4_bkcu_penilaian + 
												form.p1.p1b5_bkcu_penilaian + 
												form.p1.p1b6_bkcu_penilaian + 
												form.p1.p1b7_bkcu_penilaian + 
												form.p1.p1c8_bkcu_penilaian + 
												form.p1.p1c9_bkcu_penilaian + 
												form.p1.p1d10_bkcu_penilaian + 
												form.p1.p1d11_bkcu_penilaian + 
												form.p1.p1e12_bkcu_penilaian + 
												form.p1.p1f13_bkcu_penilaian + 
												form.p1.p1f14_bkcu_penilaian)/56) * 40) | round(2) }} 
										</li>
									</ul>	
								</div>
							</li>
							<li class="nav-item">
								<div class="nav-link" :class="{'active' : tabName == 'p2'}" @click.prevent="changeTab('p2')" style = "cursor:pointer">
									<a href="#" class="font-weight-bold" :class="{'text-white' : tabName == 'p2'}">2. PERSPEKTIF ANGGOTA/PELANGGAN</a>
									<hr class="mt-1 mb-1" />
									<ul class="list-inline mb-0">
										<li>
											Skor CU: {{ (
												form.p2.p2a1_cu_penilaian +
												form.p2.p2a2_cu_penilaian +
												form.p2.p2a3_cu_penilaian +
												form.p2.p2a4_cu_penilaian +
												form.p2.p2a5_cu_penilaian +
												form.p2.p2a6_cu_penilaian +
												form.p2.p2a7_cu_penilaian +
												form.p2.p2a8_cu_penilaian +
												form.p2.p2a9_cu_penilaian +
												form.p2.p2a10_cu_penilaian +
												form.p2.p2a11_cu_penilaian +
												form.p2.p2b12_cu_penilaian + 
												form.p2.p2b13_cu_penilaian + 
												form.p2.p2b14_cu_penilaian + 
												form.p2.p2b15_cu_penilaian + 
												form.p2.p2b16_cu_penilaian + 
												form.p2.p2b17_cu_penilaian + 
												form.p2.p2b18_cu_penilaian + 
												form.p2.p2b19_cu_penilaian + 
												form.p2.p2b20_cu_penilaian + 
												form.p2.p2b21_cu_penilaian + 
												form.p2.p2b22_cu_penilaian + 
												form.p2.p2b23_cu_penilaian + 
												form.p2.p2b24_cu_penilaian + 
												form.p2.p2b25_cu_penilaian + 
												form.p2.p2b26_cu_penilaian + 
												form.p2.p2b27_cu_penilaian) / 1 }} 

											/ Bobot Skor CU: {{ (((
												form.p2.p2a1_cu_penilaian +
												form.p2.p2a2_cu_penilaian +
												form.p2.p2a3_cu_penilaian +
												form.p2.p2a4_cu_penilaian +
												form.p2.p2a5_cu_penilaian +
												form.p2.p2a6_cu_penilaian +
												form.p2.p2a7_cu_penilaian +
												form.p2.p2a8_cu_penilaian +
												form.p2.p2a9_cu_penilaian +
												form.p2.p2a10_cu_penilaian +
												form.p2.p2a11_cu_penilaian +
												form.p2.p2b12_cu_penilaian + 
												form.p2.p2b13_cu_penilaian + 
												form.p2.p2b14_cu_penilaian + 
												form.p2.p2b15_cu_penilaian + 
												form.p2.p2b16_cu_penilaian + 
												form.p2.p2b17_cu_penilaian + 
												form.p2.p2b18_cu_penilaian + 
												form.p2.p2b19_cu_penilaian + 
												form.p2.p2b20_cu_penilaian + 
												form.p2.p2b21_cu_penilaian + 
												form.p2.p2b22_cu_penilaian + 
												form.p2.p2b23_cu_penilaian + 
												form.p2.p2b24_cu_penilaian + 
												form.p2.p2b25_cu_penilaian + 
												form.p2.p2b26_cu_penilaian + 
												form.p2.p2b27_cu_penilaian)/56) * 40) | round(2) }} 
										</li>
										<li>
											Skor BKCU: {{ (
												form.p2.p2a1_bkcu_penilaian +
												form.p2.p2a2_bkcu_penilaian +
												form.p2.p2a3_bkcu_penilaian +
												form.p2.p2a4_bkcu_penilaian +
												form.p2.p2a5_bkcu_penilaian +
												form.p2.p2a6_bkcu_penilaian +
												form.p2.p2a7_bkcu_penilaian +
												form.p2.p2a8_bkcu_penilaian +
												form.p2.p2a9_bkcu_penilaian +
												form.p2.p2a10_bkcu_penilaian +
												form.p2.p2a11_bkcu_penilaian +
												form.p2.p2b12_bkcu_penilaian + 
												form.p2.p2b13_bkcu_penilaian + 
												form.p2.p2b14_bkcu_penilaian + 
												form.p2.p2b15_bkcu_penilaian + 
												form.p2.p2b16_bkcu_penilaian + 
												form.p2.p2b17_bkcu_penilaian + 
												form.p2.p2b18_bkcu_penilaian + 
												form.p2.p2b19_bkcu_penilaian + 
												form.p2.p2b20_bkcu_penilaian + 
												form.p2.p2b21_bkcu_penilaian + 
												form.p2.p2b22_bkcu_penilaian + 
												form.p2.p2b23_bkcu_penilaian + 
												form.p2.p2b24_bkcu_penilaian + 
												form.p2.p2b25_bkcu_penilaian + 
												form.p2.p2b26_bkcu_penilaian + 
												form.p2.p2b27_bkcu_penilaian) / 1 }} 

											/ Bobot Skor BKCU: {{ (((
												form.p2.p2a1_bkcu_penilaian +
												form.p2.p2a2_bkcu_penilaian +
												form.p2.p2a3_bkcu_penilaian +
												form.p2.p2a4_bkcu_penilaian +
												form.p2.p2a5_bkcu_penilaian +
												form.p2.p2a6_bkcu_penilaian +
												form.p2.p2a7_bkcu_penilaian +
												form.p2.p2a8_bkcu_penilaian +
												form.p2.p2a9_bkcu_penilaian +
												form.p2.p2a10_bkcu_penilaian +
												form.p2.p2a11_bkcu_penilaian +
												form.p2.p2b12_bkcu_penilaian + 
												form.p2.p2b13_bkcu_penilaian + 
												form.p2.p2b14_bkcu_penilaian + 
												form.p2.p2b15_bkcu_penilaian + 
												form.p2.p2b16_bkcu_penilaian + 
												form.p2.p2b17_bkcu_penilaian + 
												form.p2.p2b18_bkcu_penilaian + 
												form.p2.p2b19_bkcu_penilaian + 
												form.p2.p2b20_bkcu_penilaian + 
												form.p2.p2b21_bkcu_penilaian + 
												form.p2.p2b22_bkcu_penilaian + 
												form.p2.p2b23_bkcu_penilaian + 
												form.p2.p2b24_bkcu_penilaian + 
												form.p2.p2b25_bkcu_penilaian + 
												form.p2.p2b26_bkcu_penilaian + 
												form.p2.p2b27_bkcu_penilaian)/56) * 40) | round(2) }} 
										</li>
									</ul>	
								</div>
							</li>
							<li class="nav-item">
								<div class="nav-link" :class="{'active' : tabName == 'p3'}" @click.prevent="changeTab('p3')" style = "cursor:pointer">
									<a href="#" class="font-weight-bold" :class="{'text-white' : tabName == 'p3'}">3. PERSPEKTIF BISNIS INTERNAL</a>
									<hr class="mt-1 mb-1" />
									<ul class="list-inline mb-0">
										<li>
											Skor CU: {{ (
												form.p3.p3a1_cu_penilaian +
												form.p3.p3a2_cu_penilaian +
												form.p3.p3a3_cu_penilaian +
												form.p3.p3a4_cu_penilaian +
												form.p3.p3a5_cu_penilaian +
												form.p3.p3a6_cu_penilaian +
												form.p3.p3a7_cu_penilaian +
												form.p3.p3a8_cu_penilaian +
												form.p3.p3a9_cu_penilaian +
												form.p3.p3b10_cu_penilaian + 
												form.p3.p3b11_cu_penilaian + 
												form.p3.p3b12_cu_penilaian + 
												form.p3.p3b13_cu_penilaian + 
												form.p3.p3b14_cu_penilaian + 
												form.p3.p3b15_cu_penilaian + 
												form.p3.p3b16_cu_penilaian + 
												form.p3.p3b17_cu_penilaian + 
												form.p3.p3b18_cu_penilaian + 
												form.p3.p3b19_cu_penilaian + 
												form.p3.p3b20_cu_penilaian + 
												form.p3.p3b21_cu_penilaian + 
												form.p3.p3b22_cu_penilaian + 
												form.p3.p3b23_cu_penilaian + 
												form.p3.p3b24_cu_penilaian + 
												form.p3.p3b25_cu_penilaian + 
												form.p3.p3b26_cu_penilaian) / 1 }} 

											/ Bobot Skor CU: {{ (((
												form.p3.p3a1_cu_penilaian +
												form.p3.p3a2_cu_penilaian +
												form.p3.p3a3_cu_penilaian +
												form.p3.p3a4_cu_penilaian +
												form.p3.p3a5_cu_penilaian +
												form.p3.p3a6_cu_penilaian +
												form.p3.p3a7_cu_penilaian +
												form.p3.p3a8_cu_penilaian +
												form.p3.p3a9_cu_penilaian +
												form.p3.p3b10_cu_penilaian +
												form.p3.p3b11_cu_penilaian +
												form.p3.p3b12_cu_penilaian + 
												form.p3.p3b13_cu_penilaian + 
												form.p3.p3b14_cu_penilaian + 
												form.p3.p3b15_cu_penilaian + 
												form.p3.p3b16_cu_penilaian + 
												form.p3.p3b17_cu_penilaian + 
												form.p3.p3b18_cu_penilaian + 
												form.p3.p3b19_cu_penilaian + 
												form.p3.p3b20_cu_penilaian + 
												form.p3.p3b21_cu_penilaian + 
												form.p3.p3b22_cu_penilaian + 
												form.p3.p3b23_cu_penilaian + 
												form.p3.p3b24_cu_penilaian + 
												form.p3.p3b25_cu_penilaian + 
												form.p3.p3b26_cu_penilaian)/56) * 40) | round(2) }} 
										</li>
										<li>
											Skor BKCU: {{ (
												form.p3.p3a1_bkcu_penilaian +
												form.p3.p3a2_bkcu_penilaian +
												form.p3.p3a3_bkcu_penilaian +
												form.p3.p3a4_bkcu_penilaian +
												form.p3.p3a5_bkcu_penilaian +
												form.p3.p3a6_bkcu_penilaian +
												form.p3.p3a7_bkcu_penilaian +
												form.p3.p3a8_bkcu_penilaian +
												form.p3.p3a9_bkcu_penilaian +
												form.p3.p3b10_bkcu_penilaian +
												form.p3.p3b11_bkcu_penilaian +
												form.p3.p3b12_bkcu_penilaian + 
												form.p3.p3b13_bkcu_penilaian + 
												form.p3.p3b14_bkcu_penilaian + 
												form.p3.p3b15_bkcu_penilaian + 
												form.p3.p3b16_bkcu_penilaian + 
												form.p3.p3b17_bkcu_penilaian + 
												form.p3.p3b18_bkcu_penilaian + 
												form.p3.p3b19_bkcu_penilaian + 
												form.p3.p3b20_bkcu_penilaian + 
												form.p3.p3b21_bkcu_penilaian + 
												form.p3.p3b22_bkcu_penilaian + 
												form.p3.p3b23_bkcu_penilaian + 
												form.p3.p3b24_bkcu_penilaian + 
												form.p3.p3b25_bkcu_penilaian + 
												form.p3.p3b26_bkcu_penilaian) / 1 }} 

											/ Bobot Skor BKCU: {{ (((
												form.p3.p3a1_bkcu_penilaian +
												form.p3.p3a2_bkcu_penilaian +
												form.p3.p3a3_bkcu_penilaian +
												form.p3.p3a4_bkcu_penilaian +
												form.p3.p3a5_bkcu_penilaian +
												form.p3.p3a6_bkcu_penilaian +
												form.p3.p3a7_bkcu_penilaian +
												form.p3.p3a8_bkcu_penilaian +
												form.p3.p3a9_bkcu_penilaian +
												form.p3.p3b10_bkcu_penilaian +
												form.p3.p3b11_bkcu_penilaian +
												form.p3.p3b12_bkcu_penilaian + 
												form.p3.p3b13_bkcu_penilaian + 
												form.p3.p3b14_bkcu_penilaian + 
												form.p3.p3b15_bkcu_penilaian + 
												form.p3.p3b16_bkcu_penilaian + 
												form.p3.p3b17_bkcu_penilaian + 
												form.p3.p3b18_bkcu_penilaian + 
												form.p3.p3b19_bkcu_penilaian + 
												form.p3.p3b20_bkcu_penilaian + 
												form.p3.p3b21_bkcu_penilaian + 
												form.p3.p3b22_bkcu_penilaian + 
												form.p3.p3b23_bkcu_penilaian + 
												form.p3.p3b24_bkcu_penilaian + 
												form.p3.p3b25_bkcu_penilaian + 
												form.p3.p3b26_bkcu_penilaian)/56) * 40) | round(2) }} 
										</li>
									</ul>	
								</div>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'p4'}" @click.prevent="changeTab('p4')">4. PERSPEKTIF PEMBELAJARAN</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'k'}" @click.prevent="changeTab('k')">5. KESIMPULAN</a>
							</li>
						</ul>
					</div>		
          
					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'p1'">
							<form-p1 :form="form" :jumlahIndikator="'56'" :bobotSkor="'40'" :mode="$route.meta.mode" @next="changeTab('p2')"></form-p1>
						</div>
					</transition>

					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'p2'">
							<form-p2 :form="form" :jumlahIndikator="'108'" :bobotSkor="'20'" :mode="$route.meta.mode" @next="changeTab('p3')"></form-p2>
						</div>
					</transition>

					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'p3'">
							<form-p3 :form="form" :jumlahIndikator="'104'" :bobotSkor="'20'" :mode="$route.meta.mode" @next="changeTab('p4')"></form-p3>
						</div>
					</transition>

				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">
			
			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!--  -->
			<template slot="modal-body1">
			</template>

		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import infoIcon from "../../components/infoIcon.vue";
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';
	import wajibBadge from "../../components/wajibBadge.vue";
	import formP1 from "./form_p1.vue";
	import formP2 from "./form_p2.vue";
	import formP3 from "./form_p3.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			formButton,
			formInfo,
			Cleave,
			infoIcon,
			wajibBadge,
			formP1,
			formP2,
			formP3,
		},
		data() {
			return {
				title: 'Self Assesment ACCESS Branding',
				titleDesc: 'Menambah self assesment ACCESS branding',
				titleIcon: 'icon-plus3',
				level2Title: 'Assesment Access',
				kelas: 'assesmentAccess',
				tabName: 'p1',
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
					},
					numeric2: {
            numeral: true,
            numeralIntegerScale: 2,
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
          }
        },
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		created(){
		},
		watch: {
			// check route changes
			'$route' (to, from){
				this.fetch();
			},
			formStat(value){
				if (value === "success") {
					if (this.$route.meta.mode !== 'edit') {
						this.form.id_cu = this.currentUser.id_cu;
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
			fetch() {
				if (this.$route.meta.mode === 'edit') {
					this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
					this.title = 'Ubah self assesment Access branding';
					this.titleDesc = 'Mengubah self assesment Access branding';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah self assesment Access branding';
					this.titleDesc = 'Menambah self assesment Access branding';
					this.titleIcon = 'icon-plus3';
					this.$store.dispatch(this.kelas + '/create');
				}
			},
			changeTab(value) {
				this.tabName = value;
			},
			save() {
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode === 'edit'){
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
				if(this.$route.meta.mode === 'edit' && this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu}});
				}
			},
			modalTutup() {
 				if(this.updateStat === 'success'){
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
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('assesmentAccess',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
			}),
		}
	}
</script>
