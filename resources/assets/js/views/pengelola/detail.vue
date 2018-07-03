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
										<img :src="'/images/user/' + itemData.gambar + 'n.jpg'" class="img-circle img-responsive center-block" v-if="itemData.gambar">
										<img :src="'/images/no_image_man.jpg'" class="img-circle img-responsive center-block" v-else>
										<div class="caption" v-if="itemData.gambar">
											<span>
												<a class="btn bg-primary-400 btn-icon btn-xs" @click.prevent="modalImageBuka('/images/user/' + itemData.gambar + '.jpg')"><i class="icon-enlarge7"></i></a>
											</span>
										</div>
									</div>
									<div class="content-group-sm">
										<h5 class="text-semibold no-margin-bottom">
											{{ itemData.name }}
										</h5>
									</div>
								</div>

								<div class="panel panel-body no-border-top no-border-radius-top">

									<div class="itemData-group mt-5">
										<b>Nim:</b>
										<span class="pull-right-sm">{{ itemData.nim }}</span>
									</div>

									<div class="itemData-group mt-5">
										<b>NIK:</b>
										<span class="pull-right-sm">{{ itemData.nik }}</span>
									</div>

									<div class="itemData-group mt-5">
										<b>Tempat Lahir:</b>
										<span class="pull-right-sm">{{ itemData.tempat_lahir }}</span>
									</div>

									<div class="itemData-group mt-5">
										<b>Tanggal Lahir:</b>
										<span class="pull-right-sm">{{ itemData.tanggal_lahir }}</span>
									</div>

									<div class="itemData-group mt-5">
										<b>Status:</b>
										<span class="pull-right-sm">{{ itemData.status }}</span>
									</div>

									<div class="itemData-group no-margin-bottom">
										<b>Agama:</b>
										<span class="pull-right-sm">{{ itemData.agama }}</span>
									</div>
									
								</div>

							</div>

						</div>

						<div class="col-sm-9">
							
							<!-- message -->
							<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
							</message>

							<div class="tabbable">
								<ul class="nav nav-tabs nav-tabs-solid nav-justified">
									<li :class="{'active' : tabName == 'identitas'}"><a @click.prevent="changeTab('identitas')"><i class="icon-pencil5 position-left"></i> Identitas</a></li>
									<li :class="{'active' : tabName == 'riwayat_pekerjaan'}"><a @click.prevent="changeTab('riwayat_pekerjaan')"><i class="icon-pencil5 position-left"></i> Riwayat Pekerjaan</a></li>
									<li :class="{'active' : tabName == 'riwayat_pendidikan'}"><a @click.prevent="changeTab('riwayat_pendidikan')"><i class="icon-pencil5 position-left"></i> Riwayat Pendidikan</a></li>
									<li :class="{'active' : tabName == 'kegiatan'}"><a @click.prevent="changeTab('kegiatan')"><i class="icon-pencil5 position-left"></i> Kegiatan</a></li>
								</ul>
							</div>

							<transition enter-active-class="animated fadeIn" mode="out-in">
								
								<!-- riwayat pekerjaan -->
								<div v-show="tabName == 'riwayat_pekerjaan'">

									<!-- desktop -->
									<div class="panel panel-flat hidden-xs">

										<div class="panel-body pb-5">
											<div class="row">

												<!-- judul -->
												<div class="col-md-12">
													<h6 class="itemData-wizard-title text-semibold text-primary">
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

										<data-table :items="itemData.pekerjaans" :columnData="columnDataPekerjaan" :itemDataStat="itemDataStat">
											<template slot="item-desktop" slot-scope="props">
												<tr :class="{ 'info': selectedItemPekerjaan.id === props.item.id }" class="text-nowrap" @click="selectedRowPekerjaan(props.item)">
													<td>{{ props.index + 1 }}</td>
													<td>{{ props.item.name }} <span class="label label-primary" v-if="props.item.selesai == null">Pekerjaan saat ini</span></td>
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
				 <div v-if="tabName == 'riwayat_pekerjaan'">
					 <select class="bootstrap-select" name="pekerjaan_tingkat"  data-width="100%" data-vv-as="Tingkat Pekerjaan">
						<option disabled value="">Silahkan pilih tingkat pekerjaan</option>
						<option data-divider="true"></option>
						<option value="Pengurus">Pengurus</option>
						<option value="Pengawas">Pengawas</option>
						<option value="Komite">Komite</option>
						<option value="Senior Manajer">Senior Manajer (General Manager, CEO, Deputy)</option>
						<option value="Manajer">Manajer</option>
						<option value="Supervisor">Supervisor (Kepala Bagian, Kepala Divisi, Kepala/Koordinator TP, Kepala Bidang)</option>
						<option value="Staf">Staf</option>
					</select>

						<button class="btn btn-default btn-block" @click.prevent="initSelect()">
							<i class="icon-bin2"></i> Hapus
						</button>
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
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import dataTable from '../../components/datatable.vue';
	import appModal from '../../components/modal';
	import appModalImage from '../../components/modalImage';
	import { toMulipartedForm } from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
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
			this.other();
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
		},
		watch: {
			modelCuStat(value){
				if(value == 'success'){
					this.other();
					$('.bootstrap-select').selectpicker();
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
				this.$store.dispatch(this.kelas + '/detail',this.$route.params.id);
			},
			changeTab(value){
				this.tabName = value;
				if(value == 'foto'){
					this.itemDataFoto.gambar = this.itemData.gambar;
				}
			},
			back(){
				this.$router.push({name: this.kelas + 'Cu', params:{cu: this.profile.id_cu}});
			},
			selectedRowPekerjaan(item){
				this.selectedItemPekerjaan = item;
			},
			createPekerjaan(){
				this.modalShow = true;
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';
				this.modalTitle = "Tambah riwayat pekerjaan";
				this.$store.dispatch('cu/getPus',this.profile.id_pus);
				this.$store.dispatch(this.kelas + '/createPekerjaan');
			},
			initSelect(){
				this.other();
				$('.bootstrap-select').selectpicker('refresh');
			},
			updatePekerjaan(pekerjaan){

			},
			destroyPekerjaan(id){

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