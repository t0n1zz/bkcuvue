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

									<!-- gambar utama -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Foto:</h5>

											<!-- imageupload -->
											<app-image-upload :image_loc="'/images/kombas/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
										</div>
									</div>

									<!-- name -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.name')}">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i>
												Nama: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama komunitas" v-validate="'required|min:5'" data-vv-as="Nama" v-model="form.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.tipe')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.tipe')}">
												<i class="icon-cross2" v-if="errors.has('form.tipe')"></i>
												Tipe Komunitas: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select class="form-control"  name="tipe" v-model="form.tipe" data-width="100%" v-validate="'required'" data-vv-as="Tipe Data Anggota">
												<option disabled value="">Silahkan pilih komunitas</option>
												<option disabled value="">----------------</option>
												<option value="pemberdayaan">Komunitas Pemberdayaan</option>
												<option value="teritori">Komunitas Teritori</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.tipe')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tipe') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- CU -->
									<div class="col-md-6" v-if="currentUser.id_cu == 0">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_cu')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_cu')}">
												<i class="icon-cross2" v-if="errors.has('form.id_cu')"></i>
												CU: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select class="form-control" name="id_cu" v-model="form.id_cu" data-width="100%" v-validate="'required'" data-vv-as="CU" 
											@change="changeCu($event.target.value)"
											:disabled="modelCU.length === 0">
												<option disabled value="">Silahkan pilih CU</option>
												<option disabled value="">----------------</option>
												<option v-for="cu in modelCU" :value="cu.id">{{cu.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_cu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_cu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tp -->
									<div class="col-md-6" v-if="form.tipe == 'teritori'">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_tp')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_tp')}">
												<i class="icon-cross2" v-if="errors.has('form.id_tp')"></i>
												TP: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
										<select class="form-control" name="id_tp" v-model="form.id_tp" data-width="100%" v-validate="'required'" data-vv-as="TP" :disabled="modelTp.length === 0">
											<option disabled value="">
												<span v-if="modelTpStat === 'loading'">Mohon tunggu...</span>
												<span v-else>Silahkan pilih TP/KP</span>
											</option>
											<option v-for="(tp, index) in modelTp" :value="tp.id" :key="index">{{tp.name}}</option>
										</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_tp')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_tp') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tanggal berdiri -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.tanggal_berdiri')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.tanggal_berdiri')}">
												<i class="icon-cross2" v-if="errors.has('form.tanggal_berdiri')"></i>
												Tanggal Berdiri: <wajib-badge></wajib-badge></h5>

											<!-- input -->
											<date-picker @dateSelected="form.tanggal_berdiri = $event" :defaultDate="form.tanggal_berdiri"></date-picker>	
											<input v-model="form.tanggal_berdiri" name="tanggal_berdiri" v-show="false" v-validate="'required'" data-vv-as="Tgl. berdiri"/>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.tanggal_berdiri')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tanggal_berdiri') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- jmlh anggota -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.jmlh_anggota')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.jmlh_anggota')}">
												<i class="icon-cross2" v-if="errors.has('form.jmlh_anggota')"></i>
												Jumlah Anggota: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<cleave 
												name="jmlh_anggota"
												v-model="form.jmlh_anggota" 
												class="form-control" 
												:options="cleaveOption.number12"
												placeholder="Silahkan masukkan jumlah anggota"
												v-validate="'required'" data-vv-as="Jumlah Anggota"></cleave>
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.jmlh_anggota')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.jmlh_anggota') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- deskripsi -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>
												Keterangan:
											</h5>

											<!-- textarea -->
											<textarea rows="5" type="text" name="deskripsi" class="form-control" placeholder="Silahkan masukkan keterangan kategori" v-model="form.deskripsi"></textarea>

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
			DatePicker
		},
		data() {
			return {
				title: 'Tambah Komunitas',
				titleDesc: 'Menambah komunitas',
				titleIcon: 'icon-plus3',
				kelas: 'kombas',
				level2Title: 'Komunitas',
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
		created(){
			if(this.currentUser.id_cu == 0){
				if(this.modelCuStat != 'success'){
					this.$store.dispatch('cu/getHeader');
				}
			}
			if(this.$route.meta.mode !== 'edit' && this.form.id_cu === undefined){
				this.form.id_cu = this.currentUser.id_cu;
				this.changeCU(this.currentUser.id_cu);
			}
		},
		watch: {
			formStat(value){
				if(value === "success"){
					if(this.$route.meta.mode !== 'edit'){
						this.form.id_cu = this.currentUser.id_cu;
					}else{
						this.checkUser('update_kubn',this.form.id_cu);
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
					this.title = 'Ubah Komunitas Basis';
					this.titleDesc = 'Mengubah komunitas basis';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah Komunitas Basis';
					this.titleDesc = 'Menambah komunitas basis';
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
			changeCu(id){
				this.$store.dispatch('tp/getCu',id);
			},
			back(){
				if(this.$route.meta.mode == 'edit' && this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu, tipe: this.form.tipe}});
				}else{
					if(this.currentUser.id_cu == 0){
						if(this.form.id_cu > 0){
							this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu, tipe: 'semua'}});
						}else{
							this.$router.push({name: this.kelas + 'Tipe', params:{ tipe: 'semua'}});
						}
					}else{
						this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu, tipe: 'semua'}});
					}
				}
			},
			modalTutup() {
 				if(this.updateStat === 'success'){
					this.back();
				}

				this.modalShow = false;
				this.submitedKategori = false;
				this.submitedPenulis = false;
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
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('kombas',{
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
			}),
			...mapGetters('tp',{
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
			}),
		}
	}
</script>