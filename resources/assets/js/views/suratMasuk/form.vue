<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<form @submit.prevent="save" data-vv-scope="form">

						<!-- main form -->
						<div class="card">
							<div class="card-body">
								<div class="row">

									<!-- name -->
									<div class="col-md-6">
										<div class="form-group">

											<!-- title -->
											<h5>Kode:</h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan kode" data-vv-as="Kode" v-model="form.name">

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>
										</div>
									</div>

									<!-- hal -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.hal')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.hal')}">
												<i class="icon-cross2" v-if="errors.has('form.hal')"></i>
												Judul Surat: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="hal" class="form-control" placeholder="Silahkan masukkan judul surat"  v-validate="'required'" data-vv-as="judul surat" v-model="form.hal">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.hal')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.hal') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- periode -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.periode')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.periode')}">
												<i class="icon-cross2" v-if="errors.has('form.periode')"></i>
												Periode: <wajib-badge></wajib-badge> <info-icon :message="'Format: tahun. Contoh: 2019'"></info-icon></h5>

											<!-- input -->
											<cleave 
												name="periode"
												v-model="form.periode" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.year" 
												placeholder="Silahkan masukkan periode"
												v-validate="'required'" data-vv-as="Periode"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.periode')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.periode') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- keterangan -->
									<div class="col-md-6">
										<div class="form-group">

											<!-- title -->
											<h5>Keterangan:</h5>

											<!-- text -->
											<input type="text" name="perihal" class="form-control" placeholder="Silahkan masukkan keterangan" data-vv-as="keterangan" v-model="form.keterangan">

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>
										</div>
									</div>

									<!-- pengirim -->
									<div class="col-md-6">
										<div class="form-group">

											<!-- title -->
											<h5>Pengirim:</h5>

											<!-- text -->
											<input type="text" name="pengirim" class="form-control" placeholder="Silahkan masukkan pengirim" data-vv-as="pengirim" v-model="form.pengirim">
											
											<!-- error message -->
											<small class="text-muted">&nbsp;</small>
										</div>
									</div>

									<!-- diterima melalui -->
									<div class="col-md-6">
										<div class="form-group">

											<!-- title -->
											<h5>Diterima Melalui:</h5>

											<!-- text -->
											<input type="text" name="terima_melalui" class="form-control" placeholder="Silahkan masukkan diterima melalui" data-vv-as="diterima melalui" v-model="form.terima_melalui">

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>

										</div>
									</div>

									<!-- tanggal terima -->
									<div class="col-md-6">
										<div class="form-group">

											<!-- title -->
											<h5>Tgl. Terima:</h5>

											<!-- input -->
											<date-picker @dateSelected="form.tanggal_terima = $event" :defaultDate="form.tanggal_terima"></date-picker>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>

										</div>
									</div>

									<!-- tujuan -->
									<div class="col-md-6">
										<div class="form-group">

											<!-- title -->
											<h5>Tujuan:</h5>

											<!-- text -->
											<input type="text" name="tujuan" class="form-control" placeholder="Silahkan masukkan tujuan" data-vv-as="tujuan" v-model="form.tujuan">

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>

										</div>
									</div>

									

									<!-- format -->
									<div class="col-md-12" v-if="$route.meta.mode != 'edit'">
										<div class="form-group" :class="{'has-error' : errors.has('form.format')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.format')}">
												<i class="icon-cross2" v-if="errors.has('form.format')"></i>
												Pilih Format: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select class="form-control" name="format" v-model="form.format" data-width="100%" v-validate="'required'" data-vv-as="format">
												<option disabled value="">Silahkan pilih format</option>
												<option value="upload">Upload</option>
												<option value="link">Link</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.format')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.format') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- upload -->
									<div class="col-md-12" v-if="$route.meta.mode != 'edit'">
										<div class="form-group" v-if="form.format == 'upload'">

											<!-- title -->
											<h5> Upload dokumen: <wajib-badge></wajib-badge></h5>

											<!-- textarea -->
											<div class="card-card-body">
												<input type="file" accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.presentationml.slideshow, text/plain, application/pdf, image/*" class="form-control" @change="upload" ref="fileInput">
											</div>
											<small class="text-muted">File yang diterima adalah Word, Excel, Powerpoint, PDF dan gambar/foto</small>

										</div>
										<div class="form-group" v-else-if="form.format == 'link'">

											<!-- title -->
											<h5>Link dokumen: </h5>

											<!-- textarea -->
											<input type="text" name="link" class="form-control" placeholder="Silahkan masukkan link" v-model="form.link">
											<small class="text-muted">Silahkan masukkan link ke dokumen</small>

										</div>
									</div>

								</div>
							</div>
						</div>

						<!-- form info -->
						<form-info></form-info>	
						<br/>

						<!-- form button -->
						<div class="panel panel-flat panel-body">
							<form-button
								:cancelState="'methods'"
								:formValidation="'form'"
								@cancelClick="back"></form-button>
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
	import pageHeader from "../../components/pageHeader.vue";
	import { toMulipartedForm } from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import Cleave from 'vue-cleave-component';
	import infoIcon from "../../components/infoIcon.vue";
	import DatePicker from "../../components/datePicker.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			message,
			formButton,
			formInfo,
			wajibBadge,
			Cleave,
			infoIcon,
			DatePicker
		},
		data() {
			return {
				title: 'Tambah Surat Masuk',
				titleDesc: 'Menambah surat masuk baru',
				titleIcon: 'icon-plus3',
				kelas: 'suratMasuk',
				level2Title: 'Surat Masuk',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
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
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		created(){
			if(this.currentUser.id_cu == 0){
				if(this.modelCuStat != 'success'){
					this.$store.dispatch('cu/getHeader');
				}
			}
			this.form.id_cu = this.currentUser.id_cu;
		},
		watch: {
			formStat(value){
				if(value === "success"){
					if(this.$route.meta.mode !== 'edit'){
						this.form.id_cu = this.currentUser.id_cu;
					}else{
						this.checkUser('update_surat',this.form.id_cu);
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
			}
    },
		methods: {
			fetch(){
				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
					this.title = 'Ubah Kategori Surat Keluar';
					this.titleDesc = 'Mengubah kategori surat keluar';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah Kategori Surat Keluar';
					this.titleDesc = 'Menambah kategori surat keluar';
					this.titleIcon = 'icon-plus3';
					this.$store.dispatch(this.kelas + '/create');
				}
			},
			checkUser(permission,id_cu){
				if(this.currentUser){
					if(!this.currentUser.can || !this.currentUser.can[permission]){
						this.$router.push('/notFound');
					}
					if(!id_cu || this.currentUser.id_cu){
						if(this.currentUser.id_cu != 0 && this.currentUser.id_cu != id_cu){
							this.$router.push('/notFound');
						}
					}
				}
			},
			upload(e) {
				let files = e.target.files || e.dataTransfer.files;
				if (!files.length)
					return
				this.form.content = files[0];
			},
			save() {
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);

				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode == 'edit'){
							this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, formData]);
						}else{
							this.$store.dispatch(this.kelas + '/store', formData);
						}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			back(){
				this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu,tipe: 'semua', periode: this.momentYear() }});
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
			momentYear(){
				return moment().year();
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('suratMasuk',{
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
			})
		}
	}
</script>