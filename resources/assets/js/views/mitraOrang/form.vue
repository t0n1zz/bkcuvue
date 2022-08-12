<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title"
		 :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">

						<!-- identitas -->
						<div class="card">
							<div class="card-body">

								<div class="row">
									<!-- foto -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h6>Foto:</h6>

											<!-- imageupload -->
											<app-image-upload :image_loc="'/images/mitra_orang/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
										</div>
									</div>

									<!-- nik -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6>
												No. KTP:</h6>

											<!-- text -->
											<cleave name="nik" v-model="form.nik" class="form-control" :options="cleaveOption.number16" placeholder="Silahkan masukkan no KTP"></cleave>

										</div>
									</div>

									<!-- name -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.name')}">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i>
												Nama: <wajib-badge></wajib-badge></h6>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama" v-validate="'required|min:5'"
											 data-vv-as="Nama" v-model="form.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- gender -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.kelamin')}">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.kelamin')}">
												<i class="icon-cross2" v-if="errors.has('form.kelamin')"></i>
												Gender: <wajib-badge></wajib-badge>
											</h6>

											<!-- select -->
											<select class="form-control" name="kelamin" v-model="form.kelamin" data-width="100%" v-validate="'required'"
											 data-vv-as="Gender">
												<option disabled value="">Silahkan pilih gender</option>
												<option value="Pria">Pria</option>
												<option value="Wanita">Wanita</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.kelamin')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.kelamin') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- darah -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6>
												Gol. Darah:
											</h6>

											<!-- select -->
											<select class="form-control" name="darah" v-model="form.darah" data-width="100%">
												<option disabled value="">Silahkan pilih golongan darah</option>
												<option value="A">A</option>
												<option value="B">B</option>
												<option value="AB">AB</option>
												<option value="O">O</option>
											</select>

										</div>
									</div>

									<!-- tinggi -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6> Tinggi <small>(cm)</small>:</h6>

											<!-- text -->
											<cleave name="tinggi" v-model="form.tinggi" class="form-control" :options="cleaveOption.number3" placeholder="Silahkan masukkan tinggi"></cleave>
										</div>
									</div>

									<!-- agama -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6>Agama:</h6>

											<!-- select -->
											<select class="form-control" name="agama" v-model="form.agama" data-width="100%">
												<option disabled value="">Silahkan pilih agama</option>
												<option value="Buddha">Buddha</option>
												<option value="Hindu">Hindu</option>
												<option value="Islam">Islam</option>
												<option value="Khatolik">Khatolik</option>
												<option value="Kong Hu Cu">Kong Hu Cu</option>
												<option value="Protestan">Protestan</option>
											</select>

										</div>
									</div>

									<!-- tanggal lahir -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6>Tgl. Lahir:</h6>

											<!-- input -->
											<date-picker @dateSelected="form.tanggal_lahir = $event" :defaultDate="form.tanggal_lahir"></date-picker>	

										</div>
									</div>

									<!-- tempat lahir -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6>Tempat Lahir:</h6>

											<!-- text -->
											<input type="text" name="tempat_lahir" class="form-control" placeholder="Silahkan masukkan tempat lahir" v-model="form.tempat_lahir">

										</div>
									</div>

									<!-- status -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6>
												Status:
											</h6>

											<!-- select -->
											<select class="form-control" name="status" v-model="form.status" data-width="100%">
												<option disabled value="">Silahkan pilih status pernikahan</option>
												<option value="Belum menikah">Belum menikah</option>
												<option value="Menikah">Menikah</option>
												<option value="Janda/Duda">Janda/Duda</option>
											</select>

										</div>
									</div>

									<!-- bidang -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.bidang')}">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.bidang')}">
												<i class="icon-cross2" v-if="errors.has('form.bidang')"></i>
												Bidang: <wajib-badge></wajib-badge></h6>

											<!-- text -->
											<input type="text" name="bidang" class="form-control" placeholder="Silahkan masukkan bidang" v-validate="'required'"
											 data-vv-as="Bidang" v-model="form.bidang">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.bidang')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.bidang') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- npwp -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.npwp')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.npwp')}">
												<i class="icon-cross2" v-if="errors.has('form.npwp')"></i>
												NPWP (nomor pokok wajib pajak):</h5>

											<!-- text -->
											<input type="text" name="npwp" class="form-control" placeholder="Silahkan masukkan NPWP"  v-model="form.npwp">

											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- lembaga -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6>Lembaga:</h6>

											<!-- text -->
											<input type="text" name="lembaga" class="form-control" placeholder="Silahkan masukkan lembaga" v-model="form.lembaga">
										</div>
									</div>

									<!-- jabatan -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6>Tingkat Pekerjaan:</h6>

											<!-- text -->
											<select class="form-control" name="pekerjaan_tingkat" v-model="form.pekerjaan_tingkat" data-width="100%" v-validate="'required'" data-vv-as="Tingkat Pekerjaan">
												<option disabled value="">Silahkan pilih tingkat pekerjaan</option>
												<option value="1">Pengurus</option>
												<option value="2">Pengawas</option>
												<option value="3">Komite</option>
												<option value="4">Penasihat</option>
												<option value="5">Senior Manajer (General Manager, CEO, Deputy)</option>
												<option value="6">Manajer</option>
												<option value="7">Supervisor (Kepala Bagian, Kepala Divisi, Kepala/Koordinator TP, Kepala Bidang)</option>
												<option value="8">Staf</option>
												<option value="9">Kontrak</option>
												<option value="10">Kolektor</option>
												<option value="11">Kelompok Inti</option>
												<option value="12">Supporting Unit</option>
												<option value="13">Vendor sMartCU</option>
												<option value="14">Magang</option>
											</select>
										</div>
									</div>

									<!-- jabatan -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6>Jabatan:</h6>

											<!-- text -->
											<input type="text" name="pekerjaan_name" class="form-control" placeholder="Silahkan masukkan jabatan" v-model="form.pekerjaan_name">
										</div>
									</div>

									<!-- pendidikan tingkat -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6>Tingkat Pendidikan:</h6>

											<!-- text -->
											<select class="form-control" name="pendidikan_tingkat" v-model="form.pendidikan_tingkat" data-width="100%" v-validate="'required'" data-vv-as="Tingkat pendidikan">
												<option disabled value="">Silahkan pilih tingkat pendidikan</option>
												<option value="TK">TK</option>
												<option value="SD">SD</option>
												<option value="SMP">SMP</option>
												<option value="SMA/SMK">SMA/SMK</option>
												<option value="D1">D1</option>
												<option value="D2">D2</option>
												<option value="D3">D3</option>
												<option value="D4">D4</option>
												<option value="S1">S1</option>
												<option value="S2">S2</option>
												<option value="S3">S3</option>
												<option value="LAIN-LAIN">Lain-lain</option>
											</select>

										</div>
									</div>

									<!-- pendidikan -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6>Pendidikan:</h6>

											<!-- text -->
											<input type="text" name="pendidikan_name" class="form-control" placeholder="Silahkan masukkan pendidikan" v-model="form.pendidikan_name">

										</div>
									</div>

									<!-- Provinsi -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6>
												Provinsi: <wajib-badge></wajib-badge>
											</h6>

											<!-- select -->
											<select class="form-control" name="id_provinces" v-model="form.id_provinces" data-width="100%" :disabled="modelProvinces.length == 0" @change="changeProvinces($event.target.value)">
												<option disabled value="">
													<span v-if="modelProvincesStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih provinsi</span>
												</option>
												<option v-for="(provinces, index) in modelProvinces" :value="provinces.id" :key="index">{{provinces.name}}</option>
											</select>

										</div>
									</div>

									<!-- kabupaten -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6>Kabupaten: <wajib-badge></wajib-badge></h6>

											<!-- select -->
											<select class="form-control"  name="id_regencies" v-model="form.id_regencies" data-width="100%" @change="changeRegencies($event.target.value)" :disabled="modelRegencies.length === 0">
												<option disabled value="">
													<span v-if="modelRegenciesStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih kabupaten</span>
												</option>
												<option v-for="(regencies, index) in modelRegencies" :value="regencies.id" :key="index">{{regencies.name}}</option>
											</select>

										</div>
									</div>

									<!-- kecamatan -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6>Kecamatan: <wajib-badge></wajib-badge></h6>

											<!-- select -->
											<select class="form-control"  name="id_districts" v-model="form.id_districts" data-width="100%" :disabled="modelDistricts.length === 0" @change="changeDistricts($event.target.value)">
												<option disabled value="">
													<span v-if="modelDistrictsStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih kecamatan</span>
												</option>
												<option v-for="(districts, index) in modelDistricts" :value="districts.id" :key="index">{{districts.name}}</option>
											</select>

										</div>
									</div>

									<!-- kelurahan -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6>Kelurahan: <wajib-badge></wajib-badge></h6>

											<!-- select -->
											<select class="form-control"  name="id_villages" v-model="form.id_villages" data-width="100%" v-validate="'required'" data-vv-as="Desa" :disabled="modelVillages.length === 0">
												<option disabled value="">
													<span v-if="modelVillagesStat === 'loading'">Mohon tunggu... mohon tunggu</span>
													<span v-else>Silahkan pilih kelurahan</span>
												</option>
												<option v-for="(villages, index) in modelVillages" :value="villages.id" :key="index">{{villages.name}}</option>
											</select>

										</div>
									</div>

									<!-- alamat -->
									<div class="col-md-8">
										<div class="form-group">

											<!-- title -->
											<h6>Alamat:</h6>

											<!-- text -->
											<input type="text" name="alamat" class="form-control" placeholder="Silahkan masukkan alamat" v-model="form.alamat">

										</div>
									</div>

									<!-- no hp -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6>No. Hp:</h6>

											<!-- text -->
											<cleave 
												v-model="form.hp" 
												class="form-control" 
												:options="cleaveOption.number12"
												placeholder="Silahkan masukkan no hp"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- email -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.email')}">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.email')}">
												<i class="icon-cross2" v-if="errors.has('form.email')"></i>
												Email:</h6>

											<!-- text -->
											<input type="text" name="email" class="form-control" placeholder="Silahkan masukkan alamat email" v-validate="'email'" data-vv-as="Email" v-model="form.email">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.email')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.email') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kontak -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6>Kontak Lainnya:</h6>

											<!-- text -->
											<input type="text" name="kontak" class="form-control" placeholder="Silahkan masukkan kontak lainnya" v-model="form.kontak">

										</div>
									</div>
									
								</div>

							</div>
						</div>

						<!-- form info -->
						<form-info></form-info>
						<br />

						<!-- form button -->
						<div class="card card-body">
							<form-button :cancelState="'methods'" :formValidation="'form'" @cancelClick="back"></form-button>
						</div>

					</form>
				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor"
		 @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalBackgroundClick">
		</app-modal>

	</div>
</template>

<script>
	import {
		mapGetters
	} from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import {
		toMulipartedForm
	} from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import infoIcon from "../../components/infoIcon.vue";
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';
	import wajibBadge from "../../components/wajibBadge.vue";
	import DatePicker from "../../components/datePicker.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			message,
			formButton,
			formInfo,
			Cleave,
			infoIcon,
			wajibBadge,
			DatePicker
		},
		data() {
			return {
				title: 'Tambah Mitra Perorangan',
				titleDesc: 'Menambah mitra perorangan baru',
				titleIcon: 'icon-plus3',
				kelas: 'mitraOrang',
				level2Title: 'Mitra Perorangan',
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
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
		created() {
			if (this.currentUser.id_cu == 0) {
				if (this.modelCuStat != 'success') {
					this.$store.dispatch('cu/getHeader');
				}
			}
			this.form.id_cu = this.currentUser.id_cu;
		},
		watch: {
			formStat(value) {
				if (value === "success") {
					if (this.$route.meta.mode !== 'edit') {
						this.form.id_cu = this.currentUser.id_cu;
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
			fetch() {
				if (this.$route.meta.mode === 'edit') {
					this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
					this.title = 'Ubah mitra perorangan';
					this.titleDesc = 'Mengubah mitra perorangan';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah mitra perorangan';
					this.titleDesc = 'Menambah mitra perorangan';
					this.titleIcon = 'icon-plus3';
					this.$store.dispatch(this.kelas + '/create');
				}
				this.$store.dispatch('provinces/get');
			},
			save() {
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if (this.$route.meta.mode == 'edit') {
							this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, formData]);
						} else {
							this.$store.dispatch(this.kelas + '/store', formData);
						}
						this.submited = false;
					} else {
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
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
				this.$router.push({name: this.kelas});
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
			...mapGetters('mitraOrang', {
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
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