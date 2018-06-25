<template>
	<div>
		<!-- Page header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>
		
		<!-- page container -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">

					<div class="row">
						<div class="col-sm-3">

							<div class="content-group">
								<div class="panel-body bg-blue border-radius-top text-center">
									<div class="thumb thumb-rounded thumb-slide">
										<img :src="'/images/user/' + form.gambar + 'n.jpg'" class="img-circle img-responsive center-block" v-if="form.gambar">
										<img :src="'/images/no_image_man.jpg'" class="img-circle img-responsive center-block" v-else>
										<div class="caption" v-if="form.gambar">
											<span>
												<a class="btn bg-primary-400 btn-icon btn-xs" @click.prevent="modalImageBuka('/images/user/' + form.gambar + '.jpg')"><i class="icon-enlarge7"></i></a>
											</span>
										</div>
									</div>
									<div class="content-group-sm">
										<h5 class="text-semibold no-margin-bottom">
											{{ form.name }}
										</h5>
									</div>
								</div>

								<div class="panel panel-body no-border-top no-border-radius-top">

									<div class="form-group mt-5">
										<b>Nim:</b>
										<span class="pull-right-sm">{{ form.nim }}</span>
									</div>

									<div class="form-group mt-5">
										<b>NIK:</b>
										<span class="pull-right-sm">{{ form.nik }}</span>
									</div>

									<div class="form-group mt-5">
										<b>Tempat Lahir:</b>
										<span class="pull-right-sm">{{ form.tempat_lahir }}</span>
									</div>

									<div class="form-group mt-5">
										<b>Tanggal Lahir:</b>
										<span class="pull-right-sm">{{ form.tanggal_lahir }}</span>
									</div>

									<div class="form-group mt-5">
										<b>Status:</b>
										<span class="pull-right-sm">{{ form.status }}</span>
									</div>

									<div class="form-group no-margin-bottom">
										<b>Agama:</b>
										<span class="pull-right-sm">{{ form.agama }}</span>
									</div>
									
								</div>
							</div>

						</div>

						<div class="col-sm-9">
							
							<!-- message -->
							<message v-if="formStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="form">
							</message>

							<div class="tabbable">
								<ul class="nav nav-tabs nav-tabs-solid nav-justified">
									<li :class="{'active' : tabName == 'riwayat'}"><a @click.prevent="changeTab('riwayat')"><i class="icon-pencil5 position-left"></i> Riwayat</a></li>
									<li :class="{'active' : tabName == 'kegiatan'}"><a @click.prevent="changeTab('kegiatan')"><i class="icon-pencil5 position-left"></i> Kegiatan</a></li>
									<li :class="{'active' : tabName == 'identitas'}"><a @click.prevent="changeTab('identitas')"><i class="icon-pencil5 position-left"></i> Identitas</a></li>
								</ul>
							</div>

							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'riwayat'">

									<div class="panel panel-flat">
										<div class="panel-body">
											<div class="row">

												<!-- judul -->
												<div class="col-md-12">
													<h6 class="form-wizard-title text-semibold text-primary">
														<span class="form-wizard-count">1</span> Pekerjaan
														<small class="display-block">Riwayat pekerjaan pengelola</small>
													</h6>
												</div>

												<div class="col-md-12">

												</div>

											</div>
										</div>
									</div>

								</div>
							</transition>

						</div>
					</div>
					
				</div>
			</div>
		</div>
		
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalTutup">
		</app-modal>

		<!-- modal image -->
		<app-modal-image :show="modalImageShow" :content="modalImageContent" @tutup="modalImageTutup" @backgroundClick="modalImageTutup">
		</app-modal-image>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import corefunc from '../../assets/core/app.js';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import appModal from '../../components/modal';
	import appModalImage from '../../components/modalImage';
	import { toMulipartedForm } from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	
	export default {
		name: 'pengelolaDetail',
		components: {
			pageHeader,
			message,
			appModal,
			appModalImage,
			appImageUpload,
			formInfo,
			formButton,
		},
		data() {
			return {
				title: 'Profile',
				kelas: 'pengelola',
				titleDesc: 'Mengelola data profile pengelola',
				titleIcon: 'icon-user-plus',
				level2Title: 'Pengelola',
				tabName: 'riwayat',
				formPassword: {},
				formFoto: {},
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalImageShow: false,
				modalImageContent: '',
				submited: false,
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		mounted() {
			corefunc.core_function();
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
		},
		watch: {
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
			},
    },
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + '/detail',this.$route.params.id);	
			},
			changeTab(value){
				this.tabName = value;
				if(value == 'foto'){
					this.formFoto.gambar = this.form.gambar;
				}
			},
			back(){
				this.$router.push({name: this.kelas + 'Cu', params:{cu: this.profile.id_cu}});
			},
			modalImageBuka(content){
				this.modalImageShow = true;
				this.modalImageContent = content;
			},
			modalTutup() {
				this.modalShow = false;
			},
			modalImageTutup() {
				this.modalImageShow = false;
			},
			formPasswordReset(){
				this.formPassword.password_old = '';
				this.formPassword.password = '';
				this.formPassword.password_confirm = '';
			}
		},
		computed:{
			...mapGetters('pengelola',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat',
			}),
		},
	}
</script>