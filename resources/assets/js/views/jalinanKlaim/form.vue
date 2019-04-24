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
					
					<!-- cu -->
					<div class="row" v-if="itemDataStat == 'success'">
						<div :class="{'col-6': itemDataCu.length > 1, 'col-12': itemDataCu.length < 2}" v-for="cu in itemDataCu">
							<div class="card card-body has-bg-image bg-green-400" >
								<div class="media">

									<div class="media-body">
										<h3 class="mb-0" >{{'Anggota CU ' + cu.cu.name}}</h3>
										<span class="text-uppercase font-size-xs">
											{{ 'No. BA: ' + cu.no_ba }} <br/> 
											Sejak: <span v-if="cu.tanggal_masuk" v-html="$options.filters.date(itemData.tanggal_masuk)"></span>
										</span>
									</div>

									<div class="ml-3 align-self-center">
										<i class="icon-3x opacity-75 icon-office"></i>
									</div>
									
								</div>
							</div>
						</div>
					</div>
					

					<div class="card card-body" v-if="itemDataStat == 'success'">
						<div class="row">

							<!-- tipe  -->
							<div class="col-md-4">
								<div class="form-group" :class="{'has-error' : errors.has('form.tipe')}">

									<!-- title -->
									<h6 :class="{ 'text-danger' : errors.has('form.tipe')}">
										<i class="icon-cross2" v-if="errors.has('form.tipe')"></i>
										Tipe:
									</h6>

									<!-- select -->
									<select class="form-control" name="tipe" v-model="form.tipe" data-width="100%" v-validate="'required'" data-vv-as="Gender">
										<option disabled value="">Silahkan pilih tipe</option>
										<option value="1">Cacat</option>
										<option value="2">Meninggal</option>
									</select>

									<!-- error message -->
									<small class="text-muted text-danger" v-if="errors.has('form.tipe')">
										<i class="icon-arrow-small-right"></i> {{ errors.first('form.tipe') }}
									</small>
									<small class="text-muted" v-else>&nbsp;</small>
								</div>
							</div>

							<!-- kategori penyakit -->
							<div class="col-md-4">
								<div class="form-group" :class="{'has-error' : errors.has('form.penyakit')}">

									<!-- title -->
									<h6 :class="{ 'text-danger' : errors.has('form.penyakit')}">
										<i class="icon-cross2" v-if="errors.has('form.penyakit')"></i>
										Kategori Penyakit:
									</h6>

									<!-- select -->
									<select class="form-control" name="penyakit" v-model="form.penyakit" data-width="100%" v-validate="'required'" data-vv-as="Gender">
										<option disabled value="">Silahkan pilih kategori penyakit</option>
										<option value="Serangga">Serangga</option>
										<option value="Kanker">Kanker</option>
										<option value="Tumor">Tumor</option>
										<option value="Jantung">Jantung</option>
										<option value="Paru-paru">Paru-paru</option>
										<option value="Hati">Hati</option>
										<option value="Ginjal">Ginjal</option>
										<option value="Kelainan Saraf">Kelainan Saraf</option>
										<option value="Gangguan Mental">Gangguan Mental</option>
										<option value="Pencernaan">Pencernaan</option>
										<option value="Kecelakaan">Kecelakaan</option>
										<option value="Bunuh Diri">Bunuh Diri</option>
										<option value="Bencana Alam">Bencana Alam</option>
										<option value="Stroke">Stroke</option>
										<option value="Diabetes">Diabetes</option>
										<option value="Komplikasi">Komplikasi</option>
									</select>

									<!-- error message -->
									<small class="text-muted text-danger" v-if="errors.has('form.penyakit')">
										<i class="icon-arrow-small-right"></i> {{ errors.first('form.penyakit') }}
									</small>
									<small class="text-muted" v-else>&nbsp;</small>
								</div>
							</div>

							<!-- tanggal cacat/mati -->
							<div class="col-md-4">
								<div class="form-group" :class="{'has-error' : errors.has('form.tanggal_mati')}">

									<!-- title -->
									<h6 :class="{ 'text-danger' : errors.has('form.tanggal_mati')}">
										<i class="icon-cross2" v-if="errors.has('form.tanggal_mati')"></i>
										Tgl. Cacat/Meninggal: 
										<info-icon :message="'Format: tahun-bulan-tanggal dalam angka. Contoh: 2019-01-23'"></info-icon>
									</h6>

									<!-- input -->
									<cleave 
										name="tanggal_mati"
										v-model="form.tanggal_mati" 
										class="form-control" 
										:raw="false" 
										:options="cleaveOption.date" 
										placeholder="Silahkan masukkan tgl. cacat/meninggal"
										v-validate="'required'" data-vv-as="Tgl. cacat/meninggal"></cleave>

									<!-- error message -->
									<small class="text-muted text-danger" v-if="errors.has('form.tanggal_mati')">
										<i class="icon-arrow-small-right"></i> {{ errors.first('form.tanggal_mati') }}
									</small>
									<small class="text-muted" v-else>&nbsp;</small>	

								</div>
							</div>

							<!-- keterangan mati -->
							<div class="col-md-6">
								<div class="form-group" :class="{'has-error' : errors.has('form.keterangan_mati')}">

									<!-- title -->
									<h6 :class="{ 'text-danger' : errors.has('form.keterangan_mati')}">
										<i class="icon-cross2" v-if="errors.has('form.keterangan_mati')"></i>
										Keterangan Cacat/Meninggal:</h6>

									<!-- text -->
									<input type="text" name="keterangan_mati" class="form-control" placeholder="Silahkan masukkan keterangan cacat/meninggal" v-validate="'required|min:5'" data-vv-as="Keterangan cacat/meninggal" v-model="form.keterangan_mati">

									<!-- error message -->
									<small class="text-muted text-danger" v-if="errors.has('form.keterangan_mati')">
										<i class="icon-arrow-small-right"></i> {{ errors.first('form.keterangan_mati') }}
									</small>
									<small class="text-muted" v-else>&nbsp;</small>
								</div>
							</div>

							<!-- keterangan -->
							<div class="col-md-6">
								<div class="form-group" :class="{'has-error' : errors.has('form.keterangan')}">

									<!-- title -->
									<h6 :class="{ 'text-danger' : errors.has('form.keterangan')}">
										<i class="icon-cross2" v-if="errors.has('form.keterangan')"></i>
										Keterangan Lain:</h6>

									<!-- text -->
									<input type="text" name="keterangan" class="form-control" placeholder="Silahkan masukkan keterangan lain" v-validate="'required|min:5'" data-vv-as="Keterangan lain" v-model="form.keterangan">

									<!-- error message -->
									<small class="text-muted text-danger" v-if="errors.has('form.keterangan')">
										<i class="icon-arrow-small-right"></i> {{ errors.first('form.keterangan') }}
									</small>
									<small class="text-muted" v-else>&nbsp;</small>
								</div>
							</div>

						</div>
					</div>

					<!-- form info -->
					<form-info v-if="itemDataStat == 'success'"></form-info>

					<!-- form button -->
					<div class="card card-body" v-if="itemDataStat == 'success'">
						<form-button :cancelState="'methods'" :formValidation="'form'" @cancelClick="back"></form-button>
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
	import {toMulipartedForm} from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import Cleave from 'vue-cleave-component';
	import dataTable from '../../components/datatable.vue';
	import checkValue from "../../components/checkValue.vue";
	import infoIcon from "../../components/infoIcon.vue";
	import countWidget from '../../components/countWidget.vue';
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			message,
			Cleave,
			dataTable,
			checkValue,
			infoIcon,
			countWidget,
			formButton,
			formInfo,
		},
		data() {
			return {
				title: 'Klaim JALINAN',
				titleDesc: 'Menambah klaim JALINAN',
				titleIcon: 'icon-plus3',
				kelas: 'jalinanKlaim',
				nik: '',
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
				form: {},
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
			classCu(){
				if(this.currentUser.id_cu == 0){
					return 'col-8';
				}else{
					return 'col-12';
				}
			},
			back() {
				
			},
			modalOpen(state, isMobile, itemMobile) {

			},
			modalConfirmOk() {

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
			...mapGetters('jalinanKlaim', {
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