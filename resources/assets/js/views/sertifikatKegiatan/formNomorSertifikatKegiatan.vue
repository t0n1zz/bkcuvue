<template>
	<div>
		<!-- page-header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="level" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">
					<!-- message -->
					<message v-if="errors.any('formNomorSertifikatKegiatan') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="formNomorSertifikatKegiatan">
						<div class="card">
							<div class="card-body">	
								<div class="row">
									<div class="col-md-12">
										<div class="form-group" :class="{'has-error' : errors.has('formNomorSertifikatKegiatan.nama_kegiatan')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('formNomorSertifikatKegiatan.nama_kegiatan')}">
												<i class="icon-cross2" v-if="errors.has('formNomorSertifikatKegiatan.nama_kegiatan')"></i>
												Nama Kegiatan: <wajib-badge></wajib-badge>
											</h5>

											<!-- text -->
											<input type="text" 
											name="nama_kegiatan" 
											class="form-control disabled-visible" 
											placeholder="Silahkan masukkan nama kegiatan" 
											v-validate="'required'" 
											v-model="formNomorSertifikatKegiatan.nama_kegiatan"
											data-vv-as="Nama Kegiatan"
											:disabled="isDisabled()">
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('formNomorSertifikatKegiatan.nama_kegiatan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('formNomorSertifikatKegiatan.nama_kegiatan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;
											</small>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group" :class="{'has-error' : errors.has('formNomorSertifikatKegiatan.periode')}">

											<!-- title -->
												<h5 :class="{ 'text-danger' : errors.has('formNomorSertifikatKegiatan.periode')}">
												<i class="icon-cross2" v-if="errors.has('formNomorSertifikatKegiatan.periode')"></i>
													Periode: <wajib-badge></wajib-badge> <info-icon :message="'Format: tahun. Contoh: 2025'"></info-icon></h5>

														<!-- input -->
														<cleave 
														name="periode"
														v-model="formNomorSertifikatKegiatan.periode" 
														class="form-control disabled-visible" 
														:raw="false" 
														:options="cleaveOption.year" 
														placeholder="Silahkan masukkan periode"
														v-validate="'required'" data-vv-as="Periode"
														:disabled="isDisabled()"></cleave>

														<!-- error message -->
														<small class="text-muted text-danger" v-if="errors.has('formNomorSertifikatKegiatan.periode')">
														<i class="icon-arrow-small-right"></i> {{ errors.first('formNomorSertifikatKegiatan.periode') }}
														</small>
														<small class="text-muted" v-else>&nbsp;</small>	
										</div>
									</div>

									<div class="col-md-12">			
										<!-- jumlah-->
										<div class="form-group" :class="{'has-error' : errors.has('formNomorSertifikatKegiatan.jumlah_nomor_sertifikat')}">
											<!-- title -->
												<h5 :class="{ 'text-danger' : errors.has('formNomorSertifikatKegiatan.jumlah_nomor_sertifikat')}">
												<i class="icon-cross2" v-if="errors.has('formNomorSertifikatKegiatan.jumlah_nomor_sertifikat')"></i>
													Jumlah Nomor Sertifikat: <wajib-badge></wajib-badge></h5>

														<cleave
														name="jumlah_nomor_sertifikat"
														v-model="formNomorSertifikatKegiatan.jumlah_nomor_sertifikat"
														v-validate="'required|numeric|min_value:1'"
														class="form-control disabled-visible"
														:raw="false"
														:options="cleaveOption.number3"
														placeholder="0"
														data-vv-as="Jumlah Nomor Sertifikat"
														:disabled="isDisabled()"
														readonly
														></cleave>


														<!-- error message -->
														<small class="text-muted text-danger" v-if="errors.has('formNomorSertifikatKegiatan.jumlah_nomor_sertifikat')">
														<i class="icon-arrow-small-right"></i> {{ errors.first('formNomorSertifikatKegiatan.jumlah_nomor_sertifikat') }}
														</small>
														<small class="text-muted" v-else>&nbsp;</small>			
										</div>
									</div>
								</div>
								
								<div class="row">
									<div class="col-md-12">
										<table class="table table-bordered">
											<thead class="table-header">
												<tr>
												<th class="col-md-4">Nama</th>
												<th class="col-md-4">Keterangan</th>
												<th class="col-md-2" v-if="$route.meta.mode === 'detail'"> Nomor Sertifikat</th>
												<th class="col-md-1" v-if="$route.meta.mode !== 'detail'">Action</th>
												
												</tr>
											</thead>
											<tbody>
												<tr v-for="(peserta, index) in formNomorSertifikatKegiatan.peserta" :key="peserta._uid">
													<td class="col-md-4">
														<div :class="{ 'has-error': errors.has(`formNomorSertifikatKegiatan.nama_peserta.${index}`) }">
															<input
																type="text"
																v-model="formNomorSertifikatKegiatan.peserta[index].nama"
																v-validate="'required'"
																:data-vv-as="'Nama Peserta'"
																class="form-control disabled-visible"
																:name="`formNomorSertifikatKegiatan.nama_peserta.${index}`"
																placeholder="Masukkan nama peserta"
																:disabled="isDisabled()"
															/>
														</div>
													</td>
													<td class="col-md-4">
														<div :class="{ 'has-error': errors.has(`formNomorSertifikatKegiatan.keterangan.${index}`) }">
															<input
																type="text"
																v-model="formNomorSertifikatKegiatan.peserta[index].keterangan"
																:data-vv-as="'Keterangan'"
																class="form-control disabled-visible"
																:name="`formNomorSertifikatKegiatan.keterangan.${index}`"
																placeholder="Masukkan keterangan"
																:disabled="isDisabled()"
															/>
														</div>
													</td>
													<td v-if="$route.meta.mode === 'detail'">
														<input  
																type="text"
																v-model="formNomorSertifikatKegiatan.peserta[index].nomor"
																v-validate="'required'"
																:data-vv-as="'Nomor'"
																class="form-control disabled-visible"
																:name="`formNomorSertifikatKegiatan.nomor.${index}`"
																placeholder="Nomor"
																:disabled="isDisabled()"
															/>
													</td>
													<td class="col-md-1" v-if="$route.meta.mode !== 'detail'">
															<button type="button" class="btn btn-danger btn-sm" @click="hapusInput(index)">
																<i class="icon-bin"></i> Hapus
															</button>
													</td>
												</tr>
											</tbody>
										</table>
										<div class="row" v-if="this.$route.meta.mode !== 'detail'">
											<div class="col-md-4">
												<div class="form-group">
												<br>
													<button type="button" class="btn btn-primary" @click="tambahInput()">
														<i class="icon-plus3 position-left"></i> Tambah
													</button>
												</div>
											</div>
										</div>
									</div>
									
								</div>
								</div>

								</div>
							<!-- form info -->
							<form-info v-if="this.$route.meta.mode !== 'detail'"></form-info>	
							<br/>
									<!-- form button -->
									<div class="card card-body">
										<form-button  v-if="this.$route.meta.mode !== 'detail'"
											:cancelState="cancelState"
											:formValidation="'formNomorSertifikatKegiatan'"
											@cancelClick="back"></form-button>
										<button type="button" class="btn btn-default" v-else @click="back()">
											<i class="icon-arrow-left13"></i> Back
										</button>
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
	import infoIcon from "../../components/infoIcon.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import wajibUkuran from "../../components/wajibUkuran.vue";
	import { toMulipartedForm } from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import appModal from '../../components/modal';
	import Cleave from 'vue-cleave-component';
	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			message,
			formButton,
			formInfo,
			infoIcon,
			wajibBadge,
			wajibUkuran,
			Cleave,
		},
		data() {
			return {
				title: '',
				localMode: this.mode,
				formNomorSertifikatKegiatan: {
					id_kegiatan:'',
					nama_kegiatan: '',
                    jumlah_nomor_sertifikat: '',
					periode: '',
					peserta: []
				},
				cleaveOption: {
					date:{
						date: true,
						datePattern: ['Y','m','d'],
						delimiter: '-'
								},
								year:{
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
				query: {
					order_column: "id",
					order_direction: "asc",
					filter_match: "and",
					limit: 100,
					page: 1,
				},
				titleDesc: '',
				titleIcon: '',
				level: 2,
				level2Title: 'Sertifikat Kegiatan',
				kelas: 'sertifikatKegiatan',
				cancelState: 'methods',
				state: '',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalSize: '',
				submited: false,
			}
	},
	created() {
		if (this.$route.meta.mode === 'edit') {
					this.$store.dispatch(this.kelas + '/editFormNomor', this.$route.params.id);	
					this.title = 'Ubah Ambil Nomor Sertifikat Kegiatan';
					this.titleDesc = 'Mengubah nomor sertifikat kegiatan yang diambil';
					this.titleIcon = 'icon-pencil5';
				} else if (this.$route.meta.mode === 'detail') {
					this.$store.dispatch(this.kelas + '/editFormNomor', this.$route.params.id);	
					this.title = 'Detail Nomor Sertifikat Kegiatan';
					this.titleDesc = 'Detail nomor sertifikat kegiatan yang diambil';
					this.titleIcon = 'icon-stack2';
				}else {
					this.title = 'Ambil Nomor Sertifikat Kegiatan';
					this.titleDesc = 'Menambah nomor sertifikat kegiatan';
					this.titleIcon = 'icon-plus3';
		}
		this.isDisabled();
	},
	watch: {
		mode(newValue) {
				this.localMode = newValue;
		},
		'formNomorSertifikatKegiatan.jumlah_nomor_sertifikat'(val) {
			this.updatePesertaInputs();
			if (this.formNomorSertifikatKegiatan.jumlah_nomor_sertifikat == 0) {
				this.formNomorSertifikatKegiatan.jumlah_nomor_sertifikat = '';
			}
		},
		itemData(value) {
			if ((this.$route.meta.mode === 'edit' || this.$route.meta.mode === 'detail') && value) {
				if (value.id !== 0 || value.id !== '' || value.id !== null) {
					this.jenisKegiatan = 'YA';
					this.formNomorSertifikatKegiatan.id_kegiatan = value.id;
				}else{
					this.jenisKegiatan = 'TIDAK';
				}
				this.formNomorSertifikatKegiatan.nama_kegiatan = value.kegiatan_name;
				this.formNomorSertifikatKegiatan.jumlah_nomor_sertifikat = value.jumlah_nomor_sertifikat;

				if (Array.isArray(value.has_nomor) && value.has_nomor.length > 0) {
					this.formNomorSertifikatKegiatan.periode = value.has_nomor[0].periode;
				}

				this.formNomorSertifikatKegiatan.peserta = value.has_nomor.map(item => ({
					_uid: Date.now().toString() + Math.random().toString(36).substr(2, 9),
					id: item.peserta_non_aktivis?.id || '',
					nama: item.peserta_non_aktivis?.nama || '',
					keterangan: item.peserta_non_aktivis?.keterangan || '',
					nomor: item.nomor || ''
				}));
			}
		},
		updateStat(value) {
			this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

			if (value === "success") {
				if (this.$route.meta.mode === 'edit') {
					this.modalTitle = 'Ambil Nomor Sertifikat '+this.formNomorSertifikatKegiatan.nama_kegiatan + ' Berhasil Diupdate';
					}else{this.modalTitle = 'Nomor Sertifikat Berhasil Diambil';}
					
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
		}
	},
	
	methods: {
			isDisabled() {
				if (this.$route.meta.mode === 'detail') {
					return true;
				} else {
					return false
				}
			},
			tambahInput() {
				this.formNomorSertifikatKegiatan.peserta.push({
				_uid: Date.now().toString() + Math.random().toString(36).substr(2, 9),
				nama: '',
				keterangan: '',
				id:''
				
				});
				this.formNomorSertifikatKegiatan.jumlah_nomor_sertifikat = this.formNomorSertifikatKegiatan.peserta.length;
			},

			hapusInput(index) {
				this.formNomorSertifikatKegiatan.peserta.splice(index, 1);
				this.formNomorSertifikatKegiatan.jumlah_nomor_sertifikat = this.formNomorSertifikatKegiatan.peserta.length;
			},
			updatePesertaInputs() {
				const jumlahPeserta = parseInt(this.formNomorSertifikatKegiatan.jumlah_nomor_sertifikat || 0);
				const pesertaLama = this.formNomorSertifikatKegiatan.peserta;

				const pesertaBaru = [...pesertaLama];

				while (pesertaBaru.length < jumlahPeserta) {
					pesertaBaru.push({
					_uid: Date.now().toString() + Math.random().toString(36).substr(2, 9),
					nama: '',
						keterangan: '',
					id:''
					});
				}

				while (pesertaBaru.length > jumlahPeserta) {
					pesertaBaru.pop();
				}

				this.formNomorSertifikatKegiatan.peserta = pesertaBaru;
			},
			save() {
				const formData = toMulipartedForm(this.formNomorSertifikatKegiatan, this.mode);
				this.$validator.validateAll('formNomorSertifikatKegiatan').then((result) => {
					if (result) {
						if (this.$route.meta.mode == 'edit') {
							this.$store.dispatch(this.kelas + '/updateNomorSertifikatKegiatan', [this.$route.params.id,formData]);
						} else {
							this.$store.dispatch(this.kelas + '/storeNomorSertifikatKegiatan', [this.currentUser.id, formData]);
						}
					}else{
						this.submited = true;
					}	
				});
			},
			back(){
				this.$router.push({name: this.kelas+ 'GetNomor'});
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
			
			tutup() {
				this.localMode = ''; 
				this.$emit('tutup');
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			tambah() {
				this.mode = 'tambah';
				this.modalConfirmOpen('nomorSertifikatKegiatan');
			},
			ubahData() {
				this.mode = 'edit';
				this.modalConfirmOpen('nomorSertifikatKegiatan');
			},
			modalConfirmOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;

				if(isMobile){
					this.selectedItem = itemMobile;
				}

				if (state == 'hapus') {
					this.modalState = 'confirm-tutup';
					this.modalTitle = 'Hapus ' + this.title + ' ' + this.selectedItem.kegiatan_name + ' ini?';
					this.modalButton = 'Iya, Hapus';
					this.modalColor = '';
				}if (state == 'nomorSertifikatKegiatan') {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalSize = 'modal-full';
					this.modalTitle = 'Mengambil Nomor Sertifikat';
					}
			},
			modalKeteranganBatalOpen(value) {
				this.modalShow = true;
				this.modalState = 'normal2';
				this.modalTitle = 'Keterangan pembatalan ' + this.title + ' ' + this.selectedItem.name;
				this.modalColor = 'bg-primary';
				this.keteranganBatal = value;
			},
			modalTutup() {
				this.selectedItem = '';
 				this.$store.dispatch(this.kelas + '/resetUpdateStat');
				this.back();
				this.modalShow = false;
			},
			modalConfirmOk() {
				if (this.state == 'hapus') {
					this.$store.dispatch(this.kelas + '/destroyNomorSertifikatKegiatan', this.selectedItem.id);
				}
			},
			gridColor(value) {
				if(value == 1){
					return 'border-left-primary-400';
				}else if(value == 2){
					return 'border-left-warning-400';
				}else if(value == 3){
					return 'border-left-secondary-400';
				}else if(value == 4){
					return 'border-left-success-400';
				}else if(value == 5){
					return 'border-left-primary-400';
				}else if(value == 6){
					return 'border-left-danger-400';
				}
			},
		},
	computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
			}),
			...mapGetters('sertifikatKegiatan',{
				itemData: 'dataSS',
				itemDataStat: 'dataStatSS',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('kegiatanBKCU',{
				modelData: 'periode',
				modelDataStat: 'periodeStat',
			}),
		}
	}
</script>
<style scoped>
input.disabled-visible[disabled] {
  background-color: #fff !important;
  color: #333 !important;
  opacity: 1 !important;
  -webkit-text-fill-color: #333 !important;
}
</style>
