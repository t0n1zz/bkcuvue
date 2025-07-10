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
					<message v-if="errors.any('form') && submited" :title="'Oops terjadi kesalahan'"
						:errorItem="errors.items">
					</message>

					<div class="row">

						<!-- title -->
						<div class="col-md-12">
							<div class="card">

								<div class="card-header">
									<h5 class="card-title">{{ item.name }}</h5>
								</div>

							</div>
						</div>

						<!-- daftar hadir -->
						<div class="col-md-12" v-if="state == 'pesertaTerdaftar' || state == 'panitiaTerdaftar'">
							<div class="card card-body">
								<form-hadir :kelas="kelas" :item="item" :state="state"></form-hadir>
							</div>
						</div>

						<!-- tidak terdaftar -->
						<div class="col-md-12" v-else-if="state == 'pesertaTidakTerdaftar'">
							<div
								class="alert alert-styled-left alert-arrow-left alert-component content-group-lg alert-danger">
								<h5 class="alert-heading text-semibold">Anda tidak terdaftar</h5>
								<span>Maaf anda tidak terdaftar dalam pertemuan ini, silahkan pastikan anda sudah mendaftar
									di pertemuan ini</span>
							</div>
						</div>

						<!-- tidak terdaftar -->
						<div class="col-md-12" v-else-if="state == 'userTidakAktivis'">
							<div
								class="alert alert-styled-left alert-arrow-left alert-component content-group-lg alert-danger">
								<h5 class="alert-heading text-semibold">Tidak ada data aktivis</h5>
								<span>Anda tidak bisa melanjutkan karena user anda tidak memiliki informasi aktivis,
									silahkan tambahkan data aktivis kepada user anda.</span>
							</div>
						</div>

						<!-- content -->
						<div class="col-md-12" v-else>

							<!-- navbar -->
							<div class="card">
								<div class="nav-tabs-responsive">
									<ul class="nav nav-tabs nav-tabs-bottom flex-nowrap mb-0">

										<li class="nav-item"><a href="#" class="nav-link"
												:class="{ 'active': tabName == 'info' }"
												@click.prevent="changeTab('info')"><i class="icon-menu7 mr-2"></i>
												Informasi
											</a></li>

										<!-- <li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'pengumuman'}" @click.prevent="changeTab('pengumuman')"><i class="icon-pushpin mr-2"></i>
											Mading
										</a></li>	 -->

										<li class="nav-item"><a href="#" class="nav-link"
												:class="{ 'active': tabName == 'pesertaTerdaftar' }"
												@click.prevent="changeTab('pesertaTerdaftar')"><i
													class="icon-people mr-2"></i>
												Peserta
												<span class="badge badge-dark ml-2"
													v-if="countPesertaStat == 'success' && countPeserta > 0 && currentUser.id_cu == 0">{{
														countPeserta }}</span>
											</a></li>

										<!-- <li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'pesertaHadir'}" @click.prevent="changeTab('pesertaHadir')"><i class="icon-accessibility mr-2"></i>
											Peserta Hadir 
											<span class="badge badge-dark ml-2" v-if="countPesertaHadirStat == 'success' && countPesertaHadir> 0">{{ countPesertaHadir }}</span>
										</a></li>	 -->

										<li class="nav-item"><a href="#" class="nav-link"
												:class="{ 'active': tabName == 'rekom' }"
												@click.prevent="changeTab('rekom')"><i class="icon-pen-plus mr-2"></i>
												Rekomendasi
											</a></li>

										<li class="nav-item"><a href="#" class="nav-link"
												:class="{ 'active': tabName == 'statistik' }"
												@click.prevent="changeTab('statistik')"><i class="icon-equalizer mr-2"></i>
												Statistik
											</a></li>
									</ul>
								</div>

							</div>

							<!-- tabinformasi -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'info'">
									<detail-informasi :kelas="kelas" @changeTab="changeTab"
										@fetchCountPeserta="fetchCountPeserta" @fetch="fetch"
										@back="back"></detail-informasi>
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

							<!-- tabrekomendasi -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-if="tabName == 'rekom'">
									<detail-rekom :tipeUser="tipeUser"></detail-rekom>
								</div>
							</transition>

							<!-- tabstatistik -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-if="tabName == 'statistik'">
									<detail-statistik :kelas="kelas"></detail-statistik>
								</div>
							</transition>

						</div>

					</div>

				</div>
			</div>
		</div>

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
import detailRekom from "./detailRekom.vue";
import detailStatistik from "./detailStatistik.vue";

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
		detailRekom,
		detailStatistik,
	},
	data() {
		return {
			title: 'Detail Pertemuan PUSKOPCUINA',
			titleDesc: 'Informasi detail pertemuan PUSKOPCUINA',
			titleIcon: 'icon-stack2',
			level: 2,
			level2Title: 'Pertemuan PUSKOPCUINA',
			kelas: 'kegiatanBKCU',
			tabName: 'info',
			tipeUser: '',
			tempatData: '',
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
			cancelState: 'methods',
			state: '',
			kode: '',
			submited: false,
		}
	},
	created() {
		this.fetch();
	},
	watch: {
		itemStat(value) {
			if (value === "success") {
				this.checkTipe(this.item.tipe);
				this.fetchCountPeserta();
				this.checkPanitia();
			}
		},
		updateStat(value) {
			if (value === "success") {
				this.fetch();
			}
		},
		checkPanitiaDataStat(value) {
			if (value == 'success') {
				if (this.checkPanitiaData) {
					this.tipeUser = this.checkPanitiaData.peran;
				} else {
					this.checkPeserta();
				}
			}
		},
		checkPesertaDataStat(value) {
			if (value == 'success') {
				if (this.checkPesertaData) {
					this.tipeUser = 'peserta';
				}
			}
		},
	},
	methods: {
		fetch() {
			this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
		},
		fetchCountPeserta() {
			this.$store.dispatch(this.kelas + '/countPeserta', this.item.id);
			if (this.item.tipe_tempat == 'ONLINE')
				this.$store.dispatch(this.kelas + '/countPesertaHadir', this.item.id);
		},
		checkTipe(tipe) {
			if (tipe == 'diklat_bkcu') {
				this.level2Title = 'Diklat PUSKOPCUINA';
			} else if (tipe == 'pertemuan_bkcu') {
				this.level2Title = 'Pertemuan PUSKOPCUINA';
			} else if (tipe == 'diklat_bkcu_internal') {
				this.level2Title = 'Diklat internal PUSKOPCUINA';
			} else if (tipe == 'pertemuan_bkcu_internal') {
				this.level2Title = 'Pertemuan internal PUSKOPCUINA';
			}

			this.title = 'Detail ' + this.level2Title;
			this.titleDesc = 'Informasi detail ' + this.level2Title;
		},
		changeTab(value) {
			this.tabName = value;
		},
		checkPeserta() {
			this.$store.dispatch(this.kelas + '/checkPeserta', [this.item.id, this.currentUser.id_aktivis]);
		},
		checkPanitia() {
			if (this.currentUser.aktivis) {
				this.$store.dispatch(this.kelas + '/checkPanitia', [this.item.id, this.currentUser.id_aktivis]);
			}
		},
		back() {
			this.$router.push({ name: this.kelas, params: { tipe: this.item.tipe, periode: this.momentYear() } });
		},
		momentYear() {
			return moment().year();
		}
	},
	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),
		...mapGetters('kegiatanBKCU', {
			item: 'data',
			itemStat: 'dataStat',
			checkPesertaData: 'data2',
			checkPesertaDataStat: 'dataStat2',
			checkPanitiaData: 'data3',
			checkPanitiaDataStat: 'dataStat3',
			itemDataPesertaTerdaftarCU: 'dataS6',
			itemDataPesertaTerdaftarCUStat: 'dataStatS6',
			itemDataPesertaHadirCU: 'dataS7',
			itemDataPesertaHadirCUStat: 'dataStatS7',
			countPeserta: 'count',
			countPesertaStat: 'countStat',
			countPesertaHadir: 'count2',
			countPesertaHadirStat: 'countStat2',
			updateResponse: 'update',
			updateStat: 'updateStat',
		}),
	}
}
</script>