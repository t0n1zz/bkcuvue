<template>
	<div>

		<!-- Page header -->
		<page-header 
		:title="title" 
		:titleDesc="titleDesc" 
		:titleIcon="titleIcon"></page-header>
		
		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<!-- cari data -->
					<cari-data :itemDataStat="itemDataStat" :isBack="false" @cariDataKTP="cariDataKTP" @cariDataBA="cariDataBA" @resetData="resetData"></cari-data>
					
					<!-- data not exist -->
					<div class="alert bg-danger text-white alert-styled-left " v-if="itemDataStat == 'fail'">
						<span class="font-weight-semibold">NIK tidak terdaftar di SIMO
						</span>
					</div>

					<!-- data exist -->
					<!-- identitas -->
					<div v-if="itemDataStat == 'success'">

						<div class="alert bg-danger text-white alert-styled-left" v-if="itemData.status_jalinan == 'MENINGGAL'">
							<span class="font-weight-semibold">Anggota ini sudah dinyatakan <b v-html="$options.filters.statusJalinan(itemData.status_jalinan)"></b>, maka tidak bisa dilakukan penambahan, pengubahan dan penghapusan data produk.
							</span>
						</div>

						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">Identitas</h5>
							</div>
							<div class="card-body">
								<identitas :itemData="itemData"></identitas>
							</div>
						</div>
					</div>
					
					<!-- produk -->
					<ul class="nav nav-tabs nav-tabs-solid nav-justified rounded bg-light" v-if="itemDataStat == 'success'">
						<li class="nav-item" v-for="cu in itemDataCu">
							<a href="#" class="nav-link rounded-left" :class="{'active': tabName == cu.cu_id}" @click.prevent="changeTab(cu)">
								<b>{{'Anggota CU ' + cu.cu.name}}</b> <br/> 
								{{ 'No. BA: ' + cu.no_ba }} <br/> 
								Sejak: <span v-if="cu.tanggal_masuk" v-html="$options.filters.date(itemData.tanggal_masuk)"></span>
							</a>
						</li>
					</ul>

					<transition-group name="list" tag="div" enter-active-class="animated fadeIn" mode="out-in">
						<div v-for="cu in itemDataCu" v-bind:key="cu.cu_id" v-show="tabName == cu.cu_id">
							<div v-for="(produks,index) in itemDataProduk" v-if="index == cu.cu_id">

								<div class="nav-tabs-responsive bg-light border-top" >
									<ul class="nav nav-tabs nav-tabs-solid bg-light">
										<li class="nav-item" v-for="produk in produks">
											<a href="#" class="nav-link" :class="{'active': tabName2 == produk[0].id}" @click.prevent="changeTab2(produk[0].id)">
												<b>{{ produk[0].name }}</b> <br/>
												<b>Kode:</b> {{ produk[0].kode_produk }} <br/>
												<b>Tipe:</b> {{ produk[0].tipe }} <br/>
												<b v-if="produk[0].tipe == 'Simpanan Pokok' || 	produk[0].tipe == 'Simpanan Wajib' ||produk[0].tipe == 'Simpanan Non Saham'">No. Rek:</b>
												<b v-else>No. SPP:</b> {{ produk[0].pivot.no_rek }} <br/>
												<b>Saldo:</b> <check-value :value="produk[0].pivot.saldo" valueType="currency"></check-value> <br/>
											</a>
										</li>
									</ul>
								</div>

							</div>
						</div>
					</transition-group>
 
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
				<ul class="nav nav-tabs nav-tabs-solid nav-justified rounded bg-light">
					<li class="nav-item">
						<a href="#" class="nav-link rounded-left" :class="{'active': tabNameModal == 'simpanan'}" @click.prevent="changeTabModal('simpanan')">
							Simpanan
						</a>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link rounded-left" :class="{'active': tabNameModal == 'pinjaman'}" @click.prevent="changeTabModal('pinjaman')">
							Pinjaman
						</a>
					</li>
				</ul>

				<transition enter-active-class="animated fadeIn" mode="out-in">
					<div v-show="tabNameModal == 'simpanan'">
						<form-simpanan 
							:mode="'create'"
							@createSimpanan="createProduk"
							@tutup="modalTutup"></form-simpanan>
					</div>
				</transition>

				<transition enter-active-class="animated fadeIn" mode="out-in">
					<div v-show="tabNameModal == 'pinjaman'">
						<form-pinjaman 
							:mode="'create'"
							@createPinjaman="createProduk"
							@tutup="modalTutup"></form-pinjaman>
					</div>
				</transition>

			</template>

			<!-- ubah -->
			<template slot="modal-body2">
				<form-simpanan 
				:mode="'edit'"
				:selected="itemDataProdukSelected[0]"
				@editSimpanan="editProduk"
				@tutup="modalTutup" v-if="tipeProduk == 'simpanan'"></form-simpanan>

				<form-pinjaman 
				:mode="'edit'"
				:selected="itemDataProdukSelected[0]"
				@editPinjaman="editProduk"
				@tutup="modalTutup" v-if="tipeProduk == 'pinjaman'"></form-pinjaman>
			</template>

		</app-modal>

	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import _ from 'lodash';
	import pageHeader from "../../components/pageHeader.vue";
	import {toMulipartedForm} from '../../helpers/form';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formSimpanan from "../anggotaCu/formSimpanan.vue";
	import formPinjaman from "../anggotaCu/formPinjaman.vue";
	import Cleave from 'vue-cleave-component';
	import dataTable from '../../components/datatable.vue';
	import checkValue from "../../components/checkValue.vue";
	import infoIcon from "../../components/infoIcon.vue";
	import countWidget from '../../components/countWidget.vue';
	import cariData from "./cariData.vue";
	import identitas from "../../components/identitas.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			formSimpanan,
			formPinjaman,
			Cleave,
			dataTable,
			checkValue,
			infoIcon,
			countWidget,
			cariData,
			identitas
		},
		data() {
			return {
				title: 'Simpanan & Pinjaman',
				titleDesc: 'Mengelola data simpanan & pinjaman anggota CU',
				titleIcon: 'icon-wallet',
				kelas: 'anggotaProdukCu',
				tabName: 'nik',
				tabName2: '',
				tabNameModal: '',
				isNew: false,
				formProdukMode: '',
				tipeProduk: '',
				selectedCu: {
					id: '',
					name: '',
				},
				selectedProduk: [],
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
				formCuMode: '',
				selectedItemCu: '',
				itemDataCu: [],
				itemDataProduk: [],
				itemDataProdukSelected: [],
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
			this.resetData();

			if (this.currentUser.id_cu == 0) {
				if (this.modelCuStat != 'success') {
					this.$store.dispatch('cu/getHeader');
				}
			}
		},
		watch: {
			itemDataStat(value) {
				if (value === "success") {

					this.itemDataCu = [];
					this.itemDataProduk = [];

					// cu
					if(this.itemData.anggota_cu_cu){
						var valData;
						for(valData of this.itemData.anggota_cu_cu){
							var datas = {};
							var cu = {};
							cu.name = valData.cu.name;
							cu.id = valData.id;

							datas = valData;
							this.itemDataCu.push(datas);
						}

						if(this.itemDataCu[0]){
							this.tabName = this.itemDataCu[0].cu_id;
							this.selectedCu.id = this.itemDataCu[0].cu_id;
							this.selectedCu.name = this.itemDataCu[0].cu.name;
						}
					}

					// produk cu
					if(this.itemData.anggota_produk_cu){
						var dataProduk = [];
						dataProduk = _.groupBy(this.itemData.anggota_produk_cu, item => {
							return item.id_cu;
						});

						this.itemDataProduk = _.forEach(dataProduk, function(value, key) {
							dataProduk[key] = _.groupBy(dataProduk[key], function(item) {
								return item.id;
							});
						});
						
						if(this.itemDataProduk[this.tabName]){
							var key = Object.keys(this.itemDataProduk[this.tabName]);
							this.tabName2 = 'produk_' + key[0];
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
					this.cariData();
				} else {
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			}
		},
		methods: {
			cariDataKTP(value){
				this.$store.dispatch(this.kelas + '/cariDataKTP', value);
			},
			cariDataBA(value){
				this.$store.dispatch(this.kelas + '/cariDataBA', value);
			},
			resetData(){
				this.itemDataCu = [];
				this.itemDataProduk = [];
				this.$store.commit(this.kelas + '/setData',{});
				this.$store.commit(this.kelas + '/setDataStat','');
			},
			changeTab(value){
				this.tabName = value.cu_id;
				this.tabName2 = 'produk_' + this.itemDataProduk[this.tabName][0].id;
				this.selectedProduk = '';
				this.selectedCu.id = value.cu_id;
				this.selectedCu.name = value.name;
			},
			changeTab2(value){
				this.tabName2 = value;
				this.selectedProduk = '';
			},
			changeTabModal(value){
				this.tabNameModal = value;
			},
			classCu(){
				if(this.currentUser.id_cu == 0){
					return 'col-8';
				}else{
					return 'col-12';
				}
			},
			selectedProdukRow(index,item){
				this.selectedProduk = item;
				this.selectedProduk.index = index + 1;

				if(item.tipe == 'Simpanan Pokok' || 	item.tipe == 'Simpanan Wajib' ||item.tipe == 'Simpanan Non Saham'){
					this.tipeProduk = 'simpanan';
				}else if(item.tipe == 'Pinjaman Kapitalisasi' || item.tipe == 'Pinjaman Umum' ||item.tipe == 'Pinjaman Produktif'){
					this.tipeProduk = 'pinjaman';
				}
			},
			createProduk(value){
				this.$store.dispatch(this.kelas + '/storeProduk', [this.itemData.id, value]);
			},
			editProduk(value){
				this.$store.dispatch(this.kelas + '/updateProduk', [this.selectedProduk.pivot.id, value]);
			},
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;

				if (state == 'hapus') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus ' + this.tipeProduk + ' ' + this.selectedProduk.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubah'){
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah ' + this.tipeProduk;
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formProdukMode = 'edit';

					var datas = {};
					var cu = {};
					var produk_cu = {};

					produk_cu.id = this.selectedProduk.id;
					produk_cu.name = this.selectedProduk.name;
					datas = this.selectedProduk.pivot;
					datas.cu = this.selectedCu;
					datas.produk_cu = produk_cu;

					this.itemDataProdukSelected = [];
					this.itemDataProdukSelected.push(datas);

				}else if(state == 'tambah'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Simpanan/Pinjaman';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formProdukMode = 'create';
					this.tabNameModal = 'simpanan';
				}
			},
			modalConfirmOk() {
				if (this.state == 'hapus') {
					this.$store.dispatch(this.kelas + '/destroyProduk', this.selectedProduk.pivot.id);
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
		},
		computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
			}),
			...mapGetters('anggotaCu', {
				itemData: 'data',
				itemDataStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
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