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
					<cari-data :itemDataStat="itemDataStat" :isBack="true" @cariData="cariData" @resetData="resetData" @back="back" v-if="!isEdit"></cari-data>

					<!-- data not exist -->
					<div class="alert bg-danger text-white alert-styled-left " v-if="itemDataStat == 'fail'">
						<span class="font-weight-semibold" v-if="currentUser.can['create_anggota_cu']">NIK anggota CU tidak terdaftar di SIMO, silahkan menambahkan terlebih dahulu data anggota dengan menekan tombol tambah anggota CU dibawah.
						</span>
						<span v-else>
							NIK anggota CU tidak terdaftar di SIMO, silahkan meminta user yang memiliki akses untuk menambah anggota CU untuk menambahkan terlebih dahulu data anggota atau meminta akses untuk menambah anggota CU kepada user lain yang bisa mengelola data user.
						</span>
					</div>

					<div class="card card-body" v-if="itemDataStat == 'fail' && currentUser.can['create_anggota_cu']">
						<router-link type="button" :to="{name:'anggotaCuCreateJalinan', params:{nik: nik}}" class="btn btn-light">
							<i class="icon-plus22"></i> Tambah Anggota CU
						</router-link>
					</div>

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

						<!-- status kehidupan -->
						<div class="col-12 alert bg-info text-white alert-styled-left" v-if="itemData.status_jalinan > 0">
							<span class="font-weight-semibold">Anggota ini sudah dinyatakan <b v-html="$options.filters.statusJalinan(itemData.status_jalinan)"></b>
							</span>
						</div>

						<!-- form -->
						<form @submit.prevent="save" data-vv-scope="form">
							<div class="card card-body">
								<div class="row">
									
									<!-- check cu -->
									<div class="col-sm-12">
										<div class="form-group" :class="{'has-error' : errors.has('form.anggota_cu_cu_id')}">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.anggota_cu_cu_id')}">
												<i class="icon-cross2" v-if="errors.has('form.anggota_cu_cu_id')"></i>
												Silahkan memilih informasi keanggotaan CU:
											</h6>

											<!-- select -->
											<select class="form-control" name="anggota_cu_cu_id" v-model="anggota_cu_cu_id" data-width="100%" v-validate="'required'" data-vv-as="Tempat pekerjaan" :disabled="itemDataCu.length == 0" @change="changeCu($event.target.value)">
												<option disabled value="">
													<span v-if="itemDataCuStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih keanggotaan CU</span>
												</option>
												<option v-for="cu in itemDataCu" :value="cu.id">CU {{cu.cu.name}} | No. BA: {{ cu.no_ba }} | Tanggal Jadi Anggota: <span v-if="cu.tanggal_masuk" v-html="$options.filters.date(cu.tanggal_masuk)"></span></option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.anggota_cu_cu_id')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.anggota_cu_cu_id') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tipe  -->
									<div class="col-md-4" v-if="formStat == 'success'">
										<div class="form-group" :class="{'has-error' : errors.has('form.tipe')}">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.tipe')}">
												<i class="icon-cross2" v-if="errors.has('form.tipe')"></i>
												Tipe:
											</h6>

											<!-- select -->
											<select class="form-control" name="tipe" v-model="form.tipe" data-width="100%" v-validate="'required'" data-vv-as="Tipe">
												<option disabled value="">Silahkan pilih tipe</option>
												<option value="cacat">Cacat</option>
												<option value="meninggal">Meninggal</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.tipe')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tipe') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kategori penyakit -->
									<div class="col-md-4" v-if="formStat == 'success'">
										<div class="form-group" :class="{'has-error' : errors.has('form.kategori_penyakit')}">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.kategori_penyakit')}">
												<i class="icon-cross2" v-if="errors.has('form.kategori_penyakit')"></i>
												Kategori Penyakit/Penyebab:
											</h6>

											<!-- select -->
											<select class="form-control" name="kategori_penyakit" v-model="form.kategori_penyakit" data-width="100%" v-validate="'required'" data-vv-as="Kategori penyakit">
												<option disabled value="">Silahkan pilih kategori penyakit</option>
												<option value="serangga">Serangga</option>
												<option value="kanker">Kanker</option>
												<option value="tumor">Tumor</option>
												<option value="jantung">Jantung</option>
												<option value="paru-paru">Paru-paru</option>
												<option value="hati">Hati</option>
												<option value="ginjal">Ginjal</option>
												<option value="kelainan Saraf">Kelainan Saraf</option>
												<option value="gangguan Mental">Gangguan Mental</option>
												<option value="pencernaan">Pencernaan</option>
												<option value="kecelakaan">Kecelakaan</option>
												<option value="bunuh Diri">Bunuh Diri</option>
												<option value="bencana Alam">Bencana Alam</option>
												<option value="stroke">Stroke</option>
												<option value="diabetes">Diabetes</option>
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
									<div class="col-md-4" v-if="formStat == 'success'">
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
									<div class="col-md-6" v-if="formStat == 'success'">
										<div class="form-group">

											<!-- title -->
											<h6>Keterangan Cacat/Meninggal:</h6>

											<!-- text -->
											<input type="text" name="keterangan_mati" class="form-control" placeholder="Silahkan masukkan keterangan cacat/meninggal" v-model="form.keterangan_mati">
										</div>
									</div>

									<!-- keterangan -->
									<div class="col-md-6" v-if="formStat == 'success'">
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
									<div class="col-md-6" v-if="formStat == 'success'">
										<div class="form-group" :class="{'has-error' : errors.has('form.tunas_diajukan')}">

											<!-- title -->
											<h5>Nilai pengajuan klaim TUNAS</h5>

											<!-- text -->
											<cleave 
												name="tunas_diajukan"
												v-model="form.tunas_diajukan" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah nilai pengajuan klaim TUNAS"
												v-validate="'required'" data-vv-as="Nilai pengajuan klaim TUNAS"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.tunas_diajukan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tunas_diajukan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>		
										</div>
									</div>

									<!-- LINTANG -->
									<div class="col-md-6" v-if="formStat == 'success'">
										<div class="form-group" :class="{'has-error' : errors.has('form.lintang_diajukan')}">

											<!-- title -->
											<h5>Nilai pengajuan klaim LINTANG</h5>

											<!-- text -->
											<cleave 
												name="lintang_diajukan"
												v-model="form.lintang_diajukan" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah nilai pengajuan klaim LINTANG"
												v-validate="'required'" data-vv-as="Nilai pengajuan klaim LINTANG"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.lintang_diajukan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.lintang_diajukan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>		
										</div>
									</div>

								</div>
							</div>

							<!-- form info -->
							<form-info></form-info>

							<!-- form button -->
							<div class="card card-body">
								<form-button :cancelState="'methods'" :formValidation="'form'" @cancelClick="back"></form-button>
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
	import countWidget from '../../components/countWidget.vue';
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import cariData from "../../components/cariData.vue";
	import identitas from "../../components/identitas.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			Cleave,
			checkValue,
			infoIcon,
			countWidget,
			formButton,
			formInfo,
			cariData,
			identitas
		},
		data() {
			return {
				title: 'Tambah Klaim JALINAN',
				titleDesc: 'Menambah klaim JALINAN',
				titleIcon: 'icon-plus3',
				level2Title: 'Klaim JALINAN',
				kelas: 'jalinanKlaim',
				isEdit: false,
				nik: '',
				anggota_cu_cu_id: '',
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
						// get form
						this.fetchForm();
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
			cariData(nik){
				this.nik = nik;
				this.$store.dispatch(this.kelas + '/cariData', nik);
			},
			fetch(){
				this.resetData();

				if(this.$route.meta.mode === 'edit'){
					this.title = 'Ubah Klaim JALINAN';
					this.titleDesc = 'Mengubah klaim JALINAN';
					this.titleIcon = 'icon-pencil5';

					this.cariData(this.$route.params.nik);
				} else {
					this.title = 'Tambah Klaim JALINAN';
					this.titleDesc = 'Menambah Klaim JALINAN';
					this.titleIcon = 'icon-plus3';
					this.isEdit = false;
					
					if(this.$route.meta.mode === 'createNIK'){
						this.cariData(this.$route.params.nik)
						this.isEdit = true;
					}
				}
			},
			fetchForm(){
				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch(this.kelas + '/edit',[this.$route.params.nik,this.$route.params.cu]);	
					this.isEdit = true;
					this.anggota_cu_cu_id = this.$route.params.cu;
				}
			},
			changeCu(value){
				let _nik = '';
				if(this.$route.meta.mode === 'edit'){
					_nik = this.$route.params.nik;
				}else{
					_nik = this.nik;
				}

				this.$store.dispatch(this.kelas + '/edit',[_nik,value]);
			},
			resetData(){
				this.itemDataCu = [];
				this.itemDataProduk = [];
				this.$store.commit(this.kelas + '/setData2',{});
				this.$store.commit(this.kelas + '/setDataStat2','');
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

				if(!this.form.id){
					this.form.status_klaim = '0';
				}
				
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.form.id){
							this.$store.dispatch(this.kelas + '/update', [this.form.id, this.form]);
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
			back() {
				if(this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu:'semua'}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu}});
				}
			},
			modalOpen(state, isMobile, itemMobile) {

			},
			modalConfirmOk() {

			},
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