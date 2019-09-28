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

									<!-- foto -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h6>Foto:</h6>

											<!-- imageupload -->
											<app-image-upload :image_loc="'/images/asetTetap/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
										</div>
									</div> 

									<!-- kode -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.kode')}">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.kode')}">
												<i class="icon-cross2" v-if="errors.has('form.kode')"></i>
												Kode: <wajib-badge></wajib-badge></h6>

											<!-- text -->
											<cleave 
												name="kode"
												v-model="form.kode" 
												class="form-control" 
												:options="cleaveOption.number15"
												placeholder="Silahkan masukkan kode"
												v-validate="'required'" data-vv-as="Kode"></cleave>	
											
											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.kode')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.kode') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div> 

									<!-- name -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.name')}">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i>
												Nama: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama kategori artikel" v-validate="'required|min:5'" data-vv-as="Nama" v-model="form.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- jenis -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.jenis')}">
												<i class="icon-cross2" v-if="errors.has('form.jenis')"></i>
												Jenis: <wajib-badge></wajib-badge>
											</h6>

											<!-- select -->
											<select class="form-control" name="jenis" v-model="form.jenis" data-width="100%" v-validate="'required'" data-vv-as="Jenis">
												<option disabled value="">
													<span>Silahkan pilih jenis</span>
												</option>
												<option value="AC">AC</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.jenis')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.jenis') }}
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
											<textarea rows="5" type="text" name="penulisDeskripsi" class="form-control" placeholder="Silahkan masukkan keterangan kategori" v-model="form.deskripsi"></textarea>

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
	import Cleave from 'vue-cleave-component';
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import wajibBadge from "../../components/wajibBadge.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			message,
			Cleave,
			formButton,
			formInfo,
			wajibBadge,
		},
		data() {
			return {
				title: 'Tambah Aset Tetap',
				titleDesc: 'Menambah Aset Tetap Baru',
				titleIcon: 'icon-plus3',
				kelas: 'asetTetap',
				level2Title: 'Aset Tetap',
				cleaveOption: {
					number15: {
            numeral: true,
            numeralIntegerScale: 15,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
					},
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
			this.form.id_cu = this.currentUser.id_cu;
		},
		watch: {
			formStat(value){
				if(value === "success"){
					if(this.$route.meta.mode !== 'edit'){
						this.form.id_cu = this.currentUser.id_cu;
					}else{
						this.checkUser('update_artikel_kategori',this.form.id_cu);
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
					this.title = 'Ubah Aset Tetap';
					this.titleDesc = 'Mengubah aset tetap';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah Aset Tetap';
					this.titleDesc = 'Menambah aset tetap';
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
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode == 'edit'){
							this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, this.form]);
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
			back(){
				this.$router.push({name: this.kelas});
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
			...mapGetters('asetTetap',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			})
		}
	}
</script>