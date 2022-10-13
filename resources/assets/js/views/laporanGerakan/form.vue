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
									<div class="col-md-12">
										<div class="form-group" :class="{'has-error' : errors.has('form.periode')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.periode')}">
												<i class="icon-cross2 d-none d-sm-block" v-if="errors.has('form.periode')"></i>
												Periode: <wajib-badge></wajib-badge>
											</h5>

											<!-- input -->
											<date-picker @dateSelected="form.periode = $event" :defaultDate="form.periode"></date-picker>	
											<input name="periode" v-model="form.periode" v-show="false" v-validate="'required'" data-vv-as="Periode"/>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.periode')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.periode') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- lk -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Laki-laki</h5>

											<!-- text -->
											<cleave 
												v-model="form.lk" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah laki-laki"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- pr -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Perempuan</h5>

											<!-- text -->
											<cleave 
												v-model="form.pr" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah perempuan"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- aset -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Aset</h5>

											<!-- text -->
											<cleave 
												v-model="form.aset" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah aset"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- shu -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>SHU</h5>

											<!-- text -->
											<cleave 
												v-model="form.shu" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah shu"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- piutang_anggota -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Piutang Anggota</h5>

											<!-- text -->
											<cleave 
												v-model="form.piutang_anggota" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah piutang anggota"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- piutang_lalai -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Piutang Lalai</h5>

											<!-- text -->
											<cleave 
												v-model="form.piutang_lalai" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah piutang lalai"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- simpanan_anggota -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Simpanan Anggota</h5>

											<!-- text -->
											<cleave 
												v-model="form.simpanan_anggota" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah simpanan anggota"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- duc -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>DCU</h5>

											<!-- text -->
											<cleave 
												v-model="form.dcu" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah dcu"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- dcr -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>DCR</h5>

											<!-- text -->
											<cleave 
												v-model="form.dcr" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah dcr"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- aset_lancar -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Aset Lancar</h5>

											<!-- text -->
											<cleave 
												v-model="form.aset_lancar" 
												class="form-control" 
												:options="cleaveOption.numeric"
												placeholder="Silahkan masukkan jumlah aset lancar"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
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
			message,
			formButton,
			formInfo,
			wajibBadge,
			Cleave,
			DatePicker,
		},
		data() {
			return {
				title: 'Tambah Laporan Gerakan',
				titleDesc: 'Menambah laporan gerakan baru',
				titleIcon: 'icon-plus3',
				kelas: 'laporanGerakan',
				level2Title: 'Laporan Gerakan',
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
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
					},
					numeric2: {
            numeral: true,
            numeralIntegerScale: 2,
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
						this.checkUser('update_laporan_cu');
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
					this.title = 'Ubah Laporan Gerakan';
					this.titleDesc = 'Mengubah laporan gerakan';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah Laporan Gerakan';
					this.titleDesc = 'Menambah laporan gerakan';
					this.titleIcon = 'icon-plus3';
					this.$store.dispatch(this.kelas + '/create');
				}
			},
			checkUser(permission){
				if(this.currentUser){
					if(!this.currentUser.can || !this.currentUser.can[permission]){
						this.$router.push('/notFound');
					}
				if(this.currentUser.id_cu != 0){
						this.$router.push('/notFound');
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
			...mapGetters('laporanGerakan',{
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