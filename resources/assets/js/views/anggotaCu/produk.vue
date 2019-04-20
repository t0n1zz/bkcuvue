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
										<li><b>Tgl. Lahir:</b> <span v-if="itemData.tanggal_lahir" v-html="$options.filters.date(itemData.tanggal_lahir)"></span></li>
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
										<li><b>Provinsi:</b> {{ itemData.provinces ? itemData.provinces.name : ''}}</li>
										<li><b>Kabupaten:</b> {{ itemData.regencies ? itemData.regencies.name : ''}}</li>
										<li><b>Kecamatan:</b> {{ itemData.districts ? itemData.districts.name : ''}}</li>
										<li><b>Kelurahan:</b> {{ itemData.villages ? itemData.villages.name : ''}}</li>
										<li><b>Alamat:</b> {{ itemData.alamat}}</li>
										<li><b>No. Hp:</b> {{ itemData.hp}}</li>
										<li><b>Kontak Lainnya:</b> {{ itemData.kontak}}</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					
					<!-- produk -->
					<ul class="nav nav-tabs nav-tabs-solid nav-justified rounded bg-light" v-if="itemDataStat == 'success'">
						<li class="nav-item" v-for="cu in itemDataCu">
							<a href="#" class="nav-link rounded-left" :class="{'active': tabName == cu.cu_id}" @click.prevent="changeTab(cu.cu_id)">
								<b>{{'Anggota CU ' + cu.cu.name}}</b> <br/> 
								{{ 'No. BA: ' + cu.no_ba }} <br/> 
								Sejak: <span v-if="cu.tanggal_masuk" v-html="$options.filters.date(itemData.tanggal_masuk)"></span>
							</a>
						</li>
					</ul>

					<transition-group name="list" tag="div" enter-active-class="animated fadeIn" mode="out-in">
						<div class="card" v-for="cu in itemDataCu" v-bind:key="cu.cu_id" v-show="tabName == cu.cu_id">
							<div v-for="(produks,index) in itemDataProduk" v-if="index == cu.cu_id">

								<div class="nav-tabs-responsive bg-light border-top" >
									<ul class="nav nav-tabs nav-tabs-solid bg-light">
										<li class="nav-item" v-for="produk in produks">
											<a href="#" class="nav-link" :class="{'active': tabName2 == 'produk_' + produk.id}" @click.prevent="changeTab2('produk_' + produk.id)">
												<b>{{ produk.name }}</b> <br/>
												{{ 'Kode: ' + produk.kode_produk }} <br/>
												{{ 'Tipe: ' + produk.tipe }}
											</a>
										</li>
									</ul>
								</div>

								<div class="card-body pb-2">
									<div class="row">

										<div class="col-md-12">

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambah')">
												<i class="icon-plus22"></i> Tambah
											</button>

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubah')"
											:disabled="!selectedProduk.index">
												<i class="icon-pencil5"></i> Ubah
											</button>

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapus')" :disabled="!selectedProduk.index">
												<i class="icon-bin2"></i> Hapus
											</button>

										</div>

									</div>		
								</div>

								<transition-group name="list2" tag="div" enter-active-class="animated fadeIn" mode="out-in">

									<div class="table-responsive table-scrollable" style="max-height: 33rem;" v-for="produk in produks" v-bind:key="produk.id" v-show="tabName2 == 'produk_' + produk.id">
										<table class="table table-striped">
											<thead class="bg-primary">
												<tr class="text-nowarp">
													<th>No.</th>
													<th>Saldo</th>
													<th>Tanggal</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="(item, index) in produks"  v-if="item.name == produk.name" :class="{ 'bg-info': selectedProduk.index === index + 1 }" class="text-nowrap" @click="selectedProdukRow(index,item)">
													<td>{{ index + 1 }}</td>
													<td><check-value :value="item.pivot.saldo" valueType="currency"></check-value></td>
													<td><span v-if="item.pivot.tanggal" v-html="$options.filters.date(item.pivot.tanggal)"></span> <span v-else>-</span></td>
												</tr>
											</tbody>
										</table>
									</div>		
								</transition-group>	

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

			</template>

			<!-- ubah -->
			<template slot="modal-body2">
				<form-simpanan 
				:mode="'edit'"
				:selected="selectedProduk.pivot"
				@editSimpanan="editSimpanan"
				@tutup="modalTutup" v-if="tipeProduk == 'simpanan'"></form-simpanan>

				<form-pinjaman 
				:mode="'edit'"
				:selected="selectedProduk.pivot"
				@editPinjaman="editPinjaman"
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
				tabName2: '',
				tabNameModal: '',
				isNew: false,
				formProdukMode: '',
				tipeProduk: '',
				selectedCu: '',
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

						if(this.itemDataCu[0]){
							this.tabName = this.itemDataCu[0].cu_id;
						}
					}

					// produk cu
					if(this.itemData.anggota_produk_cu){
						this.itemDataProduk = _.groupBy(this.itemData.anggota_produk_cu, item => {
							return _.get(item, 'id_cu', '');
						});

						if(this.itemDataProduk[this.tabName]){
							this.tabName2 = 'produk_' + this.itemDataProduk[this.tabName][0].id;
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
				this.tabName2 = 'produk_' + this.itemDataProduk[this.tabName][0].id;
				this.selectedProduk = '';
				this.selectedCu = value;
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
			createSimpanan(value){
				this.modalTutup();
			},
			editSimpanan(value){
				this.modalTutup(); 
			},
			createPinjaman(value){
				this.modalTutup();
			},
			editPinjaman(value){
				this.modalTutup(); 
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
					datas.cu = cu;
					datas.produk_cu = produk_cu;

					this.selectedProduk.push(datas)

				}else if(state == 'tambah'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Simpanan/Pinjaman';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formProdukMode = 'create';
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