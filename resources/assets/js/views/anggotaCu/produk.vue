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
					<div class="card card-body">	
							<div class="row">
								<div class="col-12">
									<h6>
										Silahkan masukkan NIK anggota CU
									</h6>
								</div>
								<div class="col-12 pb-2">
									<!-- text -->
									<cleave 
										name="nik"
										v-model="nik" 
										class="form-control" 
										:options="cleaveOption.number16"
										placeholder="Silahkan masukkan no KTP" :disabled="isNew"></cleave>
								</div>

								<div class="col-4">
									<div class="row">
										<div class="col-6 pb-2">
											<button class="btn btn-primary btn-block" @click.prevent="cariData"  :disabled="nik == ''"><i class="icon-search4"></i> Cari</button>
										</div>
										<div class="col-6 pb-2" v-if="itemDataStat != ''">
											<button class="btn btn-warning btn-block" @click.prevent="resetData"><i class="icon-reset"></i> Reset pencarian</button>
										</div>
									</div>
								</div>

								<!-- loading -->
								<div class="col-12" v-if="itemDataStat == 'loading'">
									<hr/>
									<div class="progress">
										<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
											<span class="sr-only">100% Complete</span>
										</div>
									</div>
								</div>
							</div>
						</div>

					<!-- data not exist -->
					<div class="alert bg-danger text-white alert-styled-left " v-if="itemDataStat == 'fail'">
						<span class="font-weight-semibold">NIK tidak terdaftar di SIMO
						</span>
					</div>

					<!-- data exist -->
					<!-- identitas -->
					<div class="card" v-if="itemDataStat == 'success'">
						<div class="card-header bg-white">
							<h5 class="card-title">1. Identitas Anggota</h5>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col-sm-4">
									<ul class="list list-unstyled mb-0">
										<li><b>Nama:</b> {{ itemData.name}}</li>
										<li><b>No. KTP:</b> {{ itemData.nik}}</li>
										<li><b>Nama Alih Waris:</b> {{ itemData.alih_waris}}</li>
										<li><b>Gender:</b> {{ itemData.kelamin}}</li>
										<li><b>Tinggi:</b> {{ itemData.tinggi}}</li>
										<li><b>Agama:</b> {{ itemData.agama}}</li>
										<li><b>Darah:</b> {{ itemData.darah}}</li>
									</ul>
								</div>
								<div class="col-sm-4">
									<ul class="list list-unstyled mb-0">
										<li><b>Tgl. Lahir:</b> <span v-if="itemData.tanggal_lahir" v-html="$options.filters.date(itemData.tanggal_lahir)"></span> <span v-else>-</span></li>
										<li><b>Tempat Lahir:</b> {{ itemData.tempat_lahir}}</li>
										<li><b>Status:</b> {{ itemData.status}}</li>
										<li><b>Lembaga:</b> {{ itemData.lembaga}}</li>
										<li><b>Jabatan:</b> {{ itemData.jabatan}}</li>
										<li><b>Pendidikan:</b> {{ itemData.pendidikan}}</li>
										<li><b>Email:</b> {{ itemData.email}}</li>
									</ul>
								</div>
								<div class="col-sm-4">
									<ul class="list list-unstyled mb-0">
										<li><b>Provinsi:</b> {{ itemData.provinces.name}}</li>
										<li><b>Kabupaten:</b> {{ itemData.regencies.name}}</li>
										<li><b>Kecamatan:</b> {{ itemData.districts.name}}</li>
										<li><b>Kelurahan:</b> {{ itemData.villages.name}}</li>
										<li><b>Alamat:</b> {{ itemData.alamat}}</li>
										<li><b>No. Hp:</b> {{ itemData.hp}}</li>
										<li><b>Kontak Lainnya:</b> {{ itemData.kontak}}</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					
					<!-- produk -->
					<div class="card" v-if="itemDataStat == 'success'">
						<div class="card-header bg-white">
							<h5 class="card-title">2. Produk CU</h5>
						</div>

						<div class="nav-tabs-responsive bg-light border-top">
							<ul class="nav nav-tabs nav-tabs-bottom flex-nowrap mb-0">
								<li class="nav-item" v-for="cu in itemDataCu"><a href="#" class="nav-link" :class="{'active': tabName == cu.id}" @click.prevent="changeTab(cu.id)">{{'CU ' + cu.cu.name + ' | No. BA: ' + cu.no_ba}}</a></li>
							</ul>
						</div>

						<transition-group name="list" tag="div" enter-active-class="animated fadeIn" mode="out-in">
							<div class="card-body" v-for="cu in itemDataCu" v-bind:key="cu.id" v-show="tabName == cu.id">
								<div class="row">
									<div class="col-lg-3 col-md-3 col-sm-6 col-6" v-for="(produks,index) in itemDataProduk" v-if="index == cu.cu_id">
										<div v-for="produk in produks">
											<count-widget :count="produk.pivot.saldo" :title="produk.name" :color="'bg-green-400'" :icon="'icon-office'"></count-widget>
										</div>
									</div>
								</div>
							</div>
						</transition-group>

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

			<!-- tambah simpanan -->
			<template slot="modal-body1">
				<form-simpanan 
				:mode="formSimpananMode"
				:selected="selectedItemSimpanan"
				@createSimpanan="createSimpanan"
				@editSimpanan="editSimpanan"
				@tutup="modalTutup"></form-simpanan>
			</template>

			<!-- tambah pinjaman -->
			<template slot="modal-body2">
				<form-pinjaman 
				:mode="formPinjamanMode"
				:selected="selectedItemPinjaman"
				@createPinjaman="createPinjaman"
				@editPinjaman="editPinjaman"
				@tutup="modalTutup"></form-pinjaman>
			</template>

		</app-modal>

	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import _ from 'lodash';
	import pageHeader from "../../components/pageHeader.vue";
	import {toMulipartedForm} from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formSimpanan from "./formSimpanan.vue";
	import formPinjaman from "./formPinjaman.vue";
	import Cleave from 'vue-cleave-component';
	import dataTable from '../../components/datatable.vue';
	import checkValue from "../../components/checkValue.vue";
	import infoIcon from "../../components/infoIcon.vue";
	import countWidget from '../../components/countWidget.vue';

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			message,
			formSimpanan,
			formPinjaman,
			Cleave,
			dataTable,
			checkValue,
			infoIcon,
			countWidget
		},
		data() {
			return {
				title: 'Saldo',
				titleDesc: 'Mengelola data saldo anggota cu',
				titleIcon: 'icon-wallet',
				kelas: 'anggotaCu',
				nik: '',
				tabName: 'nik',
				isNew: false,
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
				itemDataCuStat: 'success',
				columnDataCu:[
					{ title: 'No.' },
					{ title: 'CU' },
					{ title: 'No. BA' },
					{ title: 'Tgl. Jadi Anggota' },
				],
				formSimpananMode: '',
				selectedItemSimpanan: '',
				itemDataSimpanan: [],
				itemDataSimpananStat: 'success',
				columnDataSimpanan:[
					{ title: 'No.' },
					{ title: 'CU' },
					{ title: 'Simpanan' },
					{ title: 'Saldo' },
					{ title: 'Tanggal' },
				],
				formPinjamanMode: '',
				selectedItemPinjaman: '',
				itemDataPinjaman: [],
				itemDataPinjamanStat: 'success',
				columnDataPinjaman:[
					{ title: 'No.' },
					{ title: 'CU' },
					{ title: 'Pinjaman' },
					{ title: 'Saldo' },
					{ title: 'Tanggal' },
				],
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
				itemDataProduk: []
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

					if(this.itemData.anggota_produk_cu){
						this.itemDataProduk = _.groupBy(this.itemData.anggota_produk_cu, item => {
							 return _.get(item, 'id_cu', '');
						});
					}

					// cu
					if(this.itemData.anggota_cu){
						var valData;
						for(valData of this.itemData.anggota_cu){
							var datas = {};
							var cu = {};
							cu.name = valData.name;
							cu.id = valData.id;

							datas = valData.pivot;
							datas.cu = cu;
							this.itemDataCu.push(datas);
						}
						this.tabName = this.itemDataCu[0].id;
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
			cariData(){
				this.isNew = true;
				this.$store.dispatch(this.kelas + '/cariData', this.nik);
			},
			resetData(){
				this.nik = '';
				this.isNew = false;
				this.itemDataCu = [];
				this.itemDataProduk = [];
				this.$store.commit(this.kelas + '/setData',{});
				this.$store.commit(this.kelas + '/setDataStat','');
			},
			changeTab(value){
				this.tabName = value;
			},
			classCu(){
				if(this.currentUser.id_cu == 0){
					return 'col-8';
				}else{
					return 'col-12';
				}
			},
			createSimpanan(value){
				this.itemDataSimpanan.push(value);
				this.selectedItemSimpanan = '';
				this.modalTutup();
			},
			editSimpanan(value){
				_.remove(this.itemDataSimpanan, {
						index: value.index
				});
				this.itemDataSimpanan.push(value);
				this.selectedItemSimpanan = '';
				this.modalTutup(); 
			},
			createPinjaman(value){
				this.itemDataPinjaman.push(value);
				this.selectedItemPinjaman = '';
				this.modalTutup();
			},
			editPinjaman(value){
				_.remove(this.itemDataPinjaman, {
						index: value.index
				});
				this.itemDataPinjaman.push(value);
				this.selectedItemPinjaman = '';
				this.modalTutup(); 
			},
			selectedSimpananRow(index,item){
				this.selectedItemSimpanan = item;
				this.selectedItemSimpanan.index = index + 1;
			},
			selectedPinjamanRow(index,item){
				this.selectedItemPinjaman = item;
				this.selectedItemPinjaman.index = index + 1;
			},
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;
				
				if (state == 'hapusSimpanan') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Simpanan ' + this.selectedItemSimpanan.produk_cu.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahSimpanan'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Simpanan';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formSimpananMode = 'edit';
				}else if(state == 'tambahSimpanan'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Simpanan';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formSimpananMode = 'create';
				}else if (state == 'hapusPinjaman') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Pinjaman ' + this.selectedItemPinjaman.produk_cu.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahPinjaman'){
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Pinjaman';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formPinjamanMode = 'edit';
				}else if(state == 'tambahPinjaman'){
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Pinjaman';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formPinjamanMode = 'create';
				}
			},
			modalConfirmOk() {
				this.modalShow = false;

				if (this.state == 'hapusSimpanan') {
					_.remove(this.itemDataSimpanan, {
						index: this.selectedItemSimpanan.index
					});
					this.selectedItemSimpanan = '';
				}else if (this.state == 'hapusPinjaman') {
					_.remove(this.itemDataPinjaman, {
						index: this.selectedItemPinjaman.index
					});
					this.selectedItemPinjaman = '';
				}
			},
			modalTutup() {
				if (this.updateStat === 'success') {
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