<template>
	<div>
		<!-- Page header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>
		
		<!-- page container -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">

					<div class="row">

						<div class="col-sm-12">
							
							<!-- message -->
							<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
							</message>

							<div class="tabbable">
								<ul class="nav nav-tabs nav-tabs-solid nav-justified">
									<li :class="{'active' : tabName == 'identitas'}"><a @click.prevent="changeTab('identitas')"><i class="icon-pencil5 position-left"></i> Ubah Identitas</a></li>
									<li :class="{'active' : tabName == 'riwayatPekerjaan'}"><a @click.prevent="changeTab('riwayatPekerjaan')"><i class="icon-pencil5 position-left"></i> Riwayat Pekerjaan</a></li>
									<li :class="{'active' : tabName == 'riwayatPendidikan'}"><a @click.prevent="changeTab('riwayatPendidikan')"><i class="icon-pencil5 position-left"></i> Riwayat Pendidikan</a></li>
									<li :class="{'active' : tabName == 'riwayatBerorganisasi'}"><a @click.prevent="changeTab('riwayatBerorganisasi')"><i class="icon-pencil5 position-left"></i> Riwayat Berorganisasi</a></li>
									<li :class="{'active' : tabName == 'kegiatan'}"><a @click.prevent="changeTab('kegiatan')"><i class="icon-pencil5 position-left"></i> Kegiatan</a></li>
									<li :class="{'active' : tabName == 'keluarga'}"><a @click.prevent="changeTab('keluarga')"><i class="icon-pencil5 position-left"></i> Keluarga</a></li>
								</ul>
							</div>

							<!-- identitas -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'identitas'">
									<form @submit.prevent="saveIdentitas" enctype="multipart/form-data" data-vv-scope="form">
									<!-- desktop -->
									<div class="panel panel-flat">

										<div class="panel-body pb-5">
											<div class="row">

												<!-- judul -->
												<div class="col-md-12">
													<h6 class="form-wizard-title text-semibold text-primary">
														<span class="form-wizard-count">1</span> Identitas
														<small class="display-block">Identitas pengelola</small>
													</h6>
												</div>

												<form-identitas :form="form"></form-identitas>
												

											</div>		
										</div>

									</div>

									<div class="panel panel-flat">

										<div class="panel-body pb-5">
											<div class="row">

												<!-- judul -->
												<div class="col-md-12">
													<h6 class="form-wizard-title text-semibold text-primary">
														<span class="form-wizard-count">2</span> Alamat & Kontak
														<small class="display-block">Domisili dan kontak pengelola</small>
													</h6>
												</div>

												<form-lokasi :form="form"></form-lokasi>

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
							</transition>	

							<!-- riwayat pekerjaan -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'riwayatPekerjaan'">

									<!-- desktop -->
									<div class="panel panel-flat hidden-xs">

										<div class="panel-body pb-5">
											<div class="row">

												<!-- judul -->
												<div class="col-md-12">
													<h6 class="form-wizard-title text-semibold text-primary">
														Pekerjaan
														<small class="display-block">Riwayat pekerjaan pengelola</small>
													</h6>
												</div>

												<div class="col-md-12">
													<div class="btn-toolbar">
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Tambah riwayat pekerjaan baru'" @click.prevent="createPekerjaan()">
																<i class="icon-plus22"></i> Tambah
															</button>
														</div>
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Ubah riwayat pekerjaan baru'" @click.prevent="updatePekerjaan()">
																<i class="icon-plus22"></i> Ubah
															</button>
														</div>
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Hapus riwayat pekerjaan baru'" @click="destroyPekerjaan()">
																<i class="icon-plus22"></i> Hapus
															</button>
														</div>
													</div>
												</div>
											</div>		
										</div>

										<data-table :items="itemData" :columnData="columnDataPekerjaan" :itemDataStat="itemDataStat">
											<template slot="item-desktop" slot-scope="props">
												<tr :class="{ 'info': selectedItemPekerjaan.id === props.item.id }" class="text-nowrap" @click="selectedRowPekerjaan(props.item)" v-if="props.item">
													<td>{{ props.index + 1 }}</td>
													<td>{{ props.item.name }} 
														<span class="label label-primary" v-if="props.item.selesai == null">Pekerjaan saat ini</span>
													</td>
													<td>{{ props.item.tingkat }}</td>
													<td>
														<span v-if="props.item.tipe == 1">{{ props.item.cu.name }}</span>
														<span v-else-if="props.item.tipe == 2">{{ props.item.lembaga_lain }}</span>
														<span v-else>Puskopdit BKCU Kalimantan</span>
													</td>
													<td>{{ props.item.mulai }}</td>
													<td>
														<span v-if="props.item.selesai">{{ props.item.selesai }}</span>
														<span v-else>-</span>
													</td>
												</tr>
											</template>	
										</data-table>

									</div>

									<!-- mobile -->
									<div class="panel panel-flat panel-body visible-xs">
										<button class="btn btn-default btn-block" @click.prevent="createPekerjaan()">
											<i class="icon-plus22"></i> Tambah
										</button>
									</div>

									<div class="panel panel-default visible-xs" v-for="(pekerjaan,index) in itemData.pekerjaans">
										

										<div class="panel-heading">
											<h6 class="panel-title text-semibold">{{ pekerjaan.name }} <span class="label label-primary" v-if="pekerjaan.selesai == null">Pekerjaan saat ini</span></h6>
										</div>
										<div class="panel-body">
											<ul class="list-unstyled">
												<li><b>Tingkat:</b> {{ pekerjaan.tingkat }}</li>
												<li><b>Tempat:</b> 
													<span v-if="pekerjaan.tipe == 1">{{ pekerjaan.cu.name }}</span>
													<span v-else-if="pekerjaan.tipe == 2">{{ pekerjaan.lembaga_lain }}</span>
													<span v-else>Puskopdit BKCU Kalimantan</span>
												</li>
												<li><b>Mulai:</b> {{ pekerjaan.mulai }}</li>
												<li><b>Selesai:</b> 
													<span v-if="pekerjaan.selesai">{{ pekerjaan.selesai }}</span>
													<span v-else>-</span>
												</li>
											</ul>

											<hr>
											<button class="btn btn-default btn-block" @click.prevent="updatePekerjaan(pekerjaan)">
												<i class="icon-pencil5"></i> Ubah
											</button>
											<button class="btn btn-default btn-block" @click.prevent="destroyPekerjaan(pekerjaan.id)">
												<i class="icon-bin2"></i> Hapus
											</button>
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
			 <template slot="modal-title">
				 {{ modalTitle }}
			 </template>

			 <template slot="modal-body1">
				 <div v-if="tabName == 'riwayatPekerjaan'">
					<form @submit.prevent="savePekerjaan" data-vv-scope="form"> 
						<form-pekerjaan :form="formPekerjaan" :modelCu="modelCu" v-if="formPekerjaan.pekerjaan"></form-pekerjaan>
						<hr>
						<form-button
							:cancelTitle="cancelTitle"
							:cancelIcon="cancelIcon"
							:cancelState="cancelState"
							:formValidation="'form'"
							@cancelClick="cancelClick"></form-button>
					</form>
				 </div>
			 </template>
		</app-modal>

		<!-- modal image -->
		<app-modal-image :show="modalImageShow" :content="modalImageContent" @tutup="modalImageTutup" @backgroundClick="modalImageTutup">
		</app-modal-image>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import corefunc from '../../assets/core/app.js';
	import bootstrapSelect from '../../assets/plugins/forms/selects/bootstrap_select.min.js';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import dataTable from '../../components/datatable.vue';
	import appModal from '../../components/modal';
	import appModalImage from '../../components/modalImage';
	import { toMulipartedForm } from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import formIdentitas from "./formIdentitas.vue";
	import formLokasi from "./formLokasi.vue";
	import formAnggotaCu from "./formAnggotaCu.vue";
	import formPekerjaan from "./formPekerjaan.vue";
	import formPendidikan from "./formPendidikan.vue";
	import formOrganisasi from "./formOrganisasi.vue";	
	
	export default {
		name: 'pengelolaDetail',
		components: {
			pageHeader,
			message,
			dataTable,
			appModal,
			appModalImage,
			appImageUpload,
			formInfo,
			formButton,
			formIdentitas,
			formLokasi,
			formAnggotaCu,
			formPekerjaan,
			formPendidikan,
			formOrganisasi,
		},
		data() {
			return {
				title: 'Profile',
				kelas: 'pengelola',
				titleDesc: 'Mengelola data profile pengelola',
				titleIcon: 'icon-user-plus',
				level2Title: 'Pengelola',
				tabName: 'identitas',
				selectedItemPekerjaan: [],
				columnDataPekerjaan:[
					{ title: 'No.' },
					{ title: 'Nama' },
					{ title: 'Tingkat' },
					{ title: 'Tempat' },
					{ title: 'Mulai' },
					{ title: 'Selesai' },
				],
				cancelTitle: 'Tutup',
				cancelIcon: 'icon-cross',
				cancelState: 'methods',
				formPekerjaan: {},
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
			// bootstrapSelect.init();
			this.other();
		},
		updated() {
			// $('.bootstrap-select').selectpicker('refresh');
		},
		watch: {
			modelCuStat(value){
				if(value == 'success'){
					this.other();
					$('.bootstrap-select').selectpicker();
				}
			},
			formStat(value){
				if(value === "success"){
					if(this.tabName == 'identitas'){
						this.changeProvinces(this.form.id_provinces);
						this.changeRegencies(this.form.id_regencies);
						this.changeDistricts(this.form.id_districts);
					}else if(this.tabName == 'riwayatPekerjaan'){
						this.formPekerjaan.pekerjaan = this.form;
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
			},
    },
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + '/editIdentitas',this.$route.params.id);	
				this.$store.dispatch('provinces/get');
			},
			changeTab(value){
				this.tabName = value;
				if(value == 'identitas'){
					this.$store.dispatch(this.kelas + '/editIdentitas',this.$route.params.id);	
				}else if(value =='riwayatPekerjaan'){
					this.$store.dispatch(this.kelas + '/indexPekerjaan',this.$route.params.id);	
				}
			},
			back(){
				this.$router.push({name: this.kelas + 'Cu', params:{cu: this.profile.id_cu}});
			},
			saveIdentitas() {
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/updateIdentitas', [this.$route.params.id, formData]);
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			savePekerjaan(){
				this.$validator.validateAll('form.pekerjaan').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/savePekerjaan', [this.$route.params.id, this.formPekerjaan]);
						this.submited = false;
					}else{
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
			selectedRowPekerjaan(item){
				this.selectedItemPekerjaan = item;
				if(item.tipe == '0'){
					this.selectedItemPekerjaan.id_tempat = 0;
				}else if(item.tipe == '2'){
					this.selectedItemPekerjaan.id_tempat = 'lain';
				}
			},
			createPekerjaan(){
				this.modalShow = true;
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Tambah riwayat pekerjaan';
				this.formState = 'create';
				this.$store.dispatch('cu/getPus',this.profile.id_pus);
				this.$store.dispatch(this.kelas + '/createPekerjaan');
			},
			updatePekerjaan(pekerjaan){
				this.modalShow = true;
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Ubah riwayat pekerjaan';
				this.formState = 'edit';
				this.$store.dispatch('cu/getPus',this.profile.id_pus);
				this.formPekerjaan.pekerjaan = this.selectedItemPekerjaan;
			},		
			destroyPekerjaan(id){
			},
			modalImageBuka(content){
				this.modalImageShow = true;
				this.modalImageContent = content;
			},
			modalTutup() {
				this.modalShow = false;

				if(this.tabName == 'identitas'){
					this.changeTab('identitas');
				}else if(this.tabName == 'riwayatPekerjaan'){
					this.changeTab('riwayatPekerjaan');
				}
			},
			modalImageTutup() {
				this.modalImageShow = false;
			},
			cancelClick(){
				this.modalShow = false;
			},
			itemDataPasswordReset(){
				this.itemDataPassword.password_old = '';
				this.itemDataPassword.password = '';
				this.itemDataPassword.password_confirm = '';
			},
			other() {
				// bootstrap select
				$('.bootstrap-select').selectpicker();
			}
		},
		computed:{
			...mapGetters('pengelola',{
				form: 'data',
				formStat: 'dataStat',
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('cu',{
				modelCu: 'dataS',
				modelCuStat: 'dataStatS',
			}),
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat',
			}),
		},
	}
</script>