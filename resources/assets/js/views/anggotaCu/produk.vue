<template>
	<div>

		<!-- message -->
		<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<!-- main panel -->

		<!-- check nik -->
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

		<!-- identitas -->
		<div class="card">
			<div class="card-header bg-white">
				<h5 class="card-title">1. Identitas Anggota</h5>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-sm-4">
						<ul class="list list-unstyled mb-0">
							<li><b>Nama:</b> {{ form.name}}</li>
							<li><b>No. KTP:</b> {{ form.nik}}</li>
							<li><b>Nama Alih Waris:</b> {{ form.alih_waris}}</li>
							<li><b>Gender:</b> {{ form.kelamin}}</li>
							<li><b>Tinggi:</b> {{ form.tinggi}}</li>
							<li><b>Agama:</b> {{ form.agama}}</li>
							<li><b>Darah:</b> {{ form.darah}}</li>
						</ul>
					</div>
					<div class="col-sm-4">
						<ul class="list list-unstyled mb-0">
							<li><b>Tgl. Lahir:</b> <span v-if="form.tanggal_lahir" v-html="$options.filters.date(form.tanggal_lahir)"></span> <span v-else>-</span></li>
							<li><b>Tempat Lahir:</b> {{ form.tempat_lahir}}</li>
							<li><b>Status:</b> {{ form.status}}</li>
							<li><b>Lembaga:</b> {{ form.lembaga}}</li>
							<li><b>Jabatan:</b> {{ form.jabatan}}</li>
							<li><b>Pendidikan:</b> {{ form.pendidikan}}</li>
							<li><b>Email:</b> {{ form.email}}</li>
						</ul>
					</div>
					<div class="col-sm-4">
						<ul class="list list-unstyled mb-0">
							<li><b>Provinsi:</b> {{ form.provinsi}}</li>
							<li><b>Kabupaten:</b> {{ form.kabupaten}}</li>
							<li><b>Kecamatan:</b> {{ form.kecamatan}}</li>
							<li><b>Kelurahan:</b> {{ form.kelurahan}}</li>
							<li><b>Alamat:</b> {{ form.Alamat}}</li>
							<li><b>No. Hp:</b> {{ form.no_hp}}</li>
							<li><b>Kontak Lainnya:</b> {{ form.kontak}}</li>
						</ul>
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
				kelas: 'anggotaCu',
				nik: '',
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
			}
		},
		created() {
			if (this.currentUser.id_cu == 0) {
				if (this.modelCuStat != 'success') {
					this.$store.dispatch('cu/getHeader');
				}
			}
			this.form.id_cu = this.currentUser.id_cu;
			this.fetch();
		},
		watch: {
			formStat(value) {
				if (value === "success") {
					this.changeProvinces(this.form.id_provinces);
					this.changeRegencies(this.form.id_regencies);
					this.changeDistricts(this.form.id_districts);

					if(this.mode == 'create_new'){
						this.form.nik = this.nik;
					}else if(this.mode == 'create_old'){

						// produk cu
						this.itemDataSimpanan = [];
						this.itemDataPinjaman = [];
						var valDataProduk;

						if(this.form.anggota_produk_cu){
							for(valDataProduk of this.form.anggota_produk_cu){
								var datas = {};
								var cu = {};
								var produk_cu = {};
	
								if(this.currentUser.id_cu == 0){
									let data = _.find(this.modelCu,{'id':valDataProduk.id_cu});
									cu.id = data.id;
									cu.name = data.name;
								}else{
									cu.id = this.currentUser.cu.id;
									cu.name = this.currentUser.cu.name;
								}
								
								produk_cu.id = valDataProduk.id;
								produk_cu.name = valDataProduk.name;
								datas = valDataProduk.pivot;
								datas.cu = cu;
								datas.produk_cu = produk_cu;
								
								if(this.currentUser.id_cu == 0){
									if(valDataProduk.tipe == 'Simpanan Pokok' || 	valDataProduk.tipe == 'Simpanan Wajib' ||valDataProduk.tipe == 'Simpanan Non Saham'){
										this.itemDataSimpanan.push(datas);
									}else if(valDataProduk.tipe == 'Pinjaman Kapitalisasi' || valDataProduk.tipe == 'Pinjaman Umum' ||valDataProduk.tipe == 'Pinjaman Produktif'){
										this.itemDataPinjaman.push(datas);
									}
								}else{
									if(valDataProduk.id_cu == this.currentUser.id_cu){
										if(valDataProduk.tipe == 'Simpanan Pokok' || 	valDataProduk.tipe == 'Simpanan Wajib' ||valDataProduk.tipe == 'Simpanan Non Saham'){
											this.itemDataSimpanan.push(datas);
										}else if(valDataProduk.tipe == 'Pinjaman Kapitalisasi' || valDataProduk.tipe == 'Pinjaman Umum' ||valDataProduk.tipe == 'Pinjaman Produktif'){
											this.itemDataPinjaman.push(datas);
										}
									}	
								}
	
							}
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
				this.$store.dispatch(this.kelas + '/cariData', this.nik);
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
			changeProvinces(id){
				this.$store.dispatch('regencies/getProvinces', id);
			},
			changeRegencies(id){
				this.$store.dispatch('districts/getRegencies', id);
			},
			changeDistricts(id){
				this.$store.dispatch('villages/getDistricts', id);
			},
			back() {
				if(this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: 'semua'}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu}});
				}
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
				form: 'data',
				formStat: 'dataStat',
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