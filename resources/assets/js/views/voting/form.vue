<template>
	<div>
		<!-- page-header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="level" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">
					
						<!-- informasi umum -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">1. Voting</h5>
							</div>
							<div class="card-body">	
								<div class="row">

									<!-- name -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.name')}">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i>
												Nama: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama" v-validate="'required|min:5'" data-vv-as="Nama" v-model="form.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- CU -->
									<div class="col-md-6" v-if="currentUser.id_cu === 0">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_cu')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_cu')}">
												<i class="icon-cross2" v-if="errors.has('form.id_cu')"></i>
												CU: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select class="form-control" name="id_cu" v-model="form.id_cu" data-width="100%" v-validate="'required'" data-vv-as="CU" :disabled="modelCU.length === 0" @change="changeCU($event.target.value)">
												<option disabled value="">
													<span v-if="modelCUStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih CU</span>
												</option>
												<option value="0"><span v-if="currentUser.pus">{{currentUser.pus.name}}</span> <span v-else>PUSKOPCUINA</span></option>
												<option v-for="(cu, index) in modelCU" :value="cu.id" :key="index">{{cu.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_cu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_cu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kegiatan -->
									<div class="col-md-12" >
										<div class="form-group" :class="{'has-error' : errors.has('form.id_kegiatan')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_kegiatan')}">
												<i class="icon-cross2" v-if="errors.has('form.id_kegiatan')"></i>
												Kegiatan: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select class="form-control"  name="id_kegiatan" v-model="form.id_kegiatan" data-width="100%" v-validate="'required'" data-vv-as="Penulis" :disabled="modelKegiatanStat === 'loading'">
												<option disabled value="">
													<span v-if="modelKegiatanStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih kegiatan</span>
												</option>
												<option value="0">Kegiatan yang tidak terdaftar</option>
												<option disabled value="">----------------</option>
												<option v-for="(kegiatan, index) in modelKegiatan" :value="kegiatan.id" :key="index">{{kegiatan.name}} | <span v-html="$options.filters.date(kegiatan.mulai)"></span></option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_kegiatan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_kegiatan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- name kegiatan -->
									<div class="col-md-12" v-if="form.id_kegiatan === '0'">
										<div class="form-group" :class="{'has-error' : errors.has('form.name_kegiatan')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.name_kegiatan')}">
												<i class="icon-cross2" v-if="errors.has('form.name_kegiatan')"></i>
												Nama Kegiatan: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="name_kegiatan" class="form-control" placeholder="Silahkan masukkan nama kegiatan" v-validate="'required'" data-vv-as="Nama Kegiatan" v-model="form.name_kegiatan">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name_kegiatan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name_kegiatan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- pilih suara -->
									<template v-if="$route.meta.mode != 'edit'">
										<div class="col-md-12">
											<div class="form-group" :class="{'has-error' : errors.has('form.sumberSuara')}">

												<!-- title -->
												<h5 :class="{ 'text-danger' : errors.has('form.sumberSuara')}">
													<i class="icon-cross2" v-if="errors.has('form.sumberSuara')"></i>
													Sumber Data Suara: <wajib-badge></wajib-badge>
												</h5>

												<!-- select -->
												<select class="form-control"  name="sumberSuara" v-model="form.sumberSuara" data-width="100%" v-validate="'required'" data-vv-as="Penulis" :disabled="modelVotingStat === 'loading'">
													<option disabled value="">
														<span v-if="modelVotingStat === 'loading'">Mohon tunggu...</span>
														<span v-else>Silahkan pilih sumber data suara</span>
													</option>
													<option value="0">Data Suara Baru</option>
													<option disabled value="">----------------</option>
													<option v-for="(voting, index) in modelVoting" :value="voting.id" :key="index">{{voting.name}} | jumlah suara: {{voting.suara}}</option>
												</select>

												<!-- error message -->
												<small class="text-muted text-danger" v-if="errors.has('form.sumberSuara')">
													<i class="icon-arrow-small-right"></i> {{ errors.first('form.sumberSuara') }}
												</small>
												<small class="text-muted" v-else>&nbsp;</small>
											</div>
										</div>

										<!-- suara -->
										<div class="col-md-12" v-if="modelVotingStat == 'success' && form.sumberSuara === '0'">
											<div class="form-group" :class="{'has-error' : errors.has('form.suara')}">

												<!-- title -->
												<h5 :class="{ 'text-danger' : errors.has('form.suara')}">
													<i class="icon-cross2" v-if="errors.has('form.suara')"></i>
													Jumlah Suara: <wajib-badge></wajib-badge></h5>

												<!-- input -->
												<cleave 
													name="suara"
													v-model="form.suara" 
													class="form-control" 
													:raw="false" 
													:options="cleaveOption.number3" 
													placeholder="Silahkan masukkan suara"
													v-validate="'required'" data-vv-as="Suara"></cleave>

												<!-- error message -->
												<small class="text-muted text-danger" v-if="errors.has('form.suara')">
													<i class="icon-arrow-small-right"></i> {{ errors.first('form.suara') }}
												</small>
												<small class="text-muted" v-else>&nbsp;</small>
											</div>
										</div>
									</template>
																	
								</div>
							</div>
						</div>

						<!-- calon -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">2. Pilihan</h5>
							</div>
							<div class="card-body pb-2">
								<div class="row">

									<div class="col-md-12">

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahPilihan')">
											<i class="icon-plus22"></i> Tambah
										</button>

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahPilihan')"
										:disabled="!selectedItemPilihan.index">
											<i class="icon-pencil5"></i> Ubah
										</button>

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusPilihan')" :disabled="!selectedItemPilihan.index">
											<i class="icon-bin2"></i> Hapus
										</button>

									</div>

								</div>		
							</div>

							<data-table :items="itemDataPilihan" :columnData="columnDataPilihan" :itemDataStat="itemDataPilihanStat">
								<template slot="item-desktop" slot-scope="props">
									<tr :class="{ 'bg-info': selectedItemPilihan.index == props.index + 1}" class="text-nowrap" @click="selectedRow(props.item, props.index + 1, 'calon')" v-if="props.item">
										<td>{{ props.index + 1 }}</td>
										<td>{{ props.item.name }}</td>
									</tr>
								</template>	
							</data-table>

						</div>

						<!-- form info -->
						<form-info></form-info>	
						<br/>

						<!-- form button -->
						<div class="card card-body">
							<form-button
								:cancelState="cancelState"
								:formValidation="'form'"
								@cancelClick="back"></form-button>
						</div>	

					</form>
				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<template slot="modal-body1">

				<!-- pilihan -->
				<form-pilihan 
				:mode="formPilihanMode"
				:selected="selectedItemPilihan"
				@createPilihan="createPilihan"
				@editPilihan="editPilihan"
				@tutup="modalTutup" v-if="state == 'tambahPilihan' || state == 'ubahPilihan'"></form-pilihan>

			</template>

		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import _ from 'lodash';
	import pageHeader from "../../components/pageHeader.vue";
	import infoIcon from "../../components/infoIcon.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import formPilihan from "./formPilihan.vue";
	import Cleave from 'vue-cleave-component';
	import dataTable from '../../components/datatable.vue';
	import DatePicker from "../../components/datePicker.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			formButton,
			formInfo,
			formPilihan,
			Cleave,
			dataTable,
			infoIcon,
			wajibBadge,
			DatePicker
		},
		data() {
			return {
				title: 'Tambah Voting',
				titleDesc: 'Menambah voting baru',
				titleIcon: 'icon-plus3',
				level: 2,
				level2Title: 'Voting',
				kelas: 'voting',
				sasaran: [],
				tempatData: '',
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
				columnDataPilihan:[
					{ title: 'No.' },
					{ title: 'Nama' },
				],
				selectedItemPilihan: '',
				formPilihanMode: '',
				itemDataPilihan: [],
				itemDataPilihanStat: 'success',
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
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		watch: {
			formStat(value){
				if(value === "success"){
					this.changeCU(this.currentUser.id_cu);
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
				if(this.$route.meta.mode == 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
				} else {
					this.$store.dispatch(this.kelas + '/create');
				}
				
				if(this.$route.meta.mode == 'edit'){
					this.title = 'Ubah ' + this.level2Title;
					this.titleDesc = 'Mengubah ' + this.level2Title;
					this.titleIcon = 'icon-pencil5';
				}else{
					this.title = 'Tambah ' + this.level2Title;
					this.titleDesc = 'Menambah ' + this.level2Title;
					this.titleIcon = 'icon-plus3';
				}	
			},
			createPilihan(value){
				this.itemDataPilihan.push(value);
				this.selectedItemPilihan = {};
				this.modalTutup();
			},
			editPilihan(value){
				_.remove(this.itemDataPilihan, {
						index: value.index
				});
				this.itemDataPilihan.push(value);
				this.selectedItemPilihan = {};
				this.modalTutup(); 
			},
			changeCU(id){
				this.form.id_cu = id;	
				this.$store.dispatch(this.kelas + '/indexVotingCu', id);
				// TODO: update with kegiatan
				if(id == 0){
					this.$store.dispatch('kegiatanBKCU/indexKegiatan');
				}else{
					this.$store.dispatch('kegiatanBKCU/resetDataS');
				}
			},
			save() {
				this.form.pilihan = this.itemDataPilihan;
				this.state = '';
				
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
				this.$router.push({name: this.kelas, params:{cu: this.currentUser.id_cu}});
			},
			selectedRow(item,index){
				this.selectedItemPilihan = item;
				this.selectedItemPilihan.index = index;
			},
			selectedRow2(item,index){
				this.selectedItemSuara = item;
				this.selectedItemSuara.index = index;
			},
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;

				if(isMobile){
					this.selectedItemPilihan = itemMobile;
				}

				if (state == 'hapusPilihan') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Pilihan' + this.selectedItemPilihan.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahPilihan'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Pilihan';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formPilihanMode = 'edit';
				}else if(state == 'tambahPilihan'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Pilihan';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formPilihanMode = 'create';
				}
			},
			modalConfirmOk() {
				this.modalShow = false;

				if (this.state == 'hapusPilihan') {
					_.remove(this.itemDataPilihan, {
						index: this.selectedItemPilihan.index
					});
					this.selectedItemPilihan = {};
				}
			},
			modalTutup() {
 				if(this.updateStat == 'success' && this.state == ''){
					this.$store.dispatch(this.kelas + '/resetUpdateStat');
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
			...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
			}),
			...mapGetters('voting',{
				form: 'data',
				formStat: 'dataStat',
				modelVoting: 'dataS2',
				modelVotingStat: 'dataStatS2',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('kegiatanBKCU',{
				modelKegiatan: 'dataS',
				modelKegiatanStat: 'dataStatS',
			}),
		}
	}
</script>