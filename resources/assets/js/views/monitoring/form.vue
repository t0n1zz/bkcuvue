<template>
	<div>
		<!-- page-header -->
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

									<!-- temuan -->
									<div class="col-md-12">
										<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.name')}">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i>
												Temuan: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan temuan artikel" v-validate="'required'" data-vv-as="Temuan" v-model="form.name">

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
												<option v-for="cu in modelCU" :value="cu.id">{{cu.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_cu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_cu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- TP -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_tp')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_tp')}">
												<i class="icon-cross2" v-if="errors.has('form.id_tp')"></i>
												TP: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select class="form-control" name="id_tp" v-model="form.id_tp" data-width="100%" v-validate="'required'" data-vv-as="TP" :disabled="modelTP.length === 0">
												<option disabled value="">
													<span v-if="modelTPStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih TP</span>
												</option>
												<option value="0">Semua</option>
												<option v-for="tp in modelTP" :value="tp.id">{{tp.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_tp')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_tp') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- PIC CU -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_aktivis_cu')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_aktivis_cu')}">
												<i class="icon-cross2" v-if="errors.has('form.id_aktivis_cu')"></i>
												PIC CU: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select class="form-control" name="id_aktivis_cu" v-model="form.id_aktivis_cu" data-width="100%" v-validate="'required'" data-vv-as="PIC CU" :disabled="modelAktivisCU.length === 0">
												<option disabled value="">
													<span v-if="modelAktivisCUStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih PIC</span>
												</option>
												<option v-for="ac in modelAktivisCU" :value="ac.id">{{ac.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_aktivis_cu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_aktivis_cu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- PIC BKCU -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_aktivis_bkcu')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_aktivis_bkcu')}">
												<i class="icon-cross2" v-if="errors.has('form.id_aktivis_bkcu')"></i>
												PIC BKCU: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select class="form-control" name="id_aktivis_bkcu" v-model="form.id_aktivis_bkcu" data-width="100%" v-validate="'required'" data-vv-as="PIC CU" :disabled="modelAktivisBKCU.length === 0">
												<option disabled value="">
													<span v-if="modelAktivisBKCUStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih PIC</span>
												</option>
												<option v-for="ac in modelAktivisBKCU" :value="ac.id">{{ac.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_aktivis_bkcu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_aktivis_bkcu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>
									
									<!-- tanggal -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.tanggal')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.tanggal')}">
												<i class="icon-cross2" v-if="errors.has('form.tanggal')"></i>
												Tanggal: <wajib-badge></wajib-badge> <info-icon :message="'Format: tahun-bulan-tanggal dalam angka. Contoh: 2019-01-23'"></info-icon>
											</h5>

											<!-- input -->
											<cleave 
												name="tanggal"
												v-model="form.tanggal" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.date" 
												v-validate="'required'"
												data-vv-as="Tanggal"
												placeholder="Silahkan masukkan tanggal"></cleave>

											<!-- error message -->
											<br/>
											<small class="text-muted text-danger" v-if="errors.has('form.tanggal')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tanggal') }}
											</small>
											<small class="text-muted" v-else>&nbsp;
											</small>
										</div>
									</div>

									<!-- jenis -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.jenis')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.jenis')}">
												<i class="icon-cross2" v-if="errors.has('form.jenis')"></i>
												Jenis: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select name="jenis" data-width="100%" class="form-control" v-model="form.jenis" v-validate="'required'" data-vv-as="Jenis">
												<option disabled value="">Silahkan pilih jenis</option>
												<option value="MAYOR">MAYOR</option>
												<option value="MINOR">MINOR</option>
											</select>

											<!-- error message -->
											<br/>
											<small class="text-muted text-danger" v-if="errors.has('form.jenis')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.jenis') }}
											</small>
											<small class="text-muted" v-else>&nbsp;
											</small>
										</div>
									</div>

									<!-- perspektif -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.perspektif')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.perspektif')}">
												<i class="icon-cross2" v-if="errors.has('form.perspektif')"></i>
												Perspektif: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select name="perspektif" data-width="100%" class="form-control" v-model="form.perspektif" v-validate="'required'" data-vv-as="Perspektif">
												<option disabled value="">Silahkan pilih perspektif</option>
												<option value="KEUANGAN">KEUANGAN</option>
												<option value="KEPUASAN ANGGOTA">KEPUASAN ANGGOTA</option>
												<option value="BISNIS INTERNAL">BISNIS INTERNAL</option>
												<option value="PEMBELAJARAN DAN PERTUMBUHAN">PEMBELAJARAN DAN PERTUMBUHAN</option>
											</select>

											<!-- error message -->
											<br/>
											<small class="text-muted text-danger" v-if="errors.has('form.perspektif')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.perspektif') }}
											</small>
											<small class="text-muted" v-else>&nbsp;
											</small>
										</div>
									</div> 
								

								</div>
								
							</div>
						</div>

						<!-- rekomendasi -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">Rekomendasi <wajib-badge></wajib-badge></h5>
							</div>
							<div class="card-body pb-2">
								<div class="row">

									<div class="col-md-12">

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahRekom')">
											<i class="icon-plus22"></i> Tambah
										</button>

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahRekom')"
										:disabled="!selectedItemRekom.index">
											<i class="icon-pencil5"></i> Ubah
										</button>

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusRekom')" :disabled="!selectedItemRekom.index">
											<i class="icon-bin2"></i> Hapus
										</button>

									</div>

								</div>		
							</div>

							<data-table :items="itemDataRekom" :columnData="columnDataRekom" :itemDataStat="itemDataRekomStat">
								<template slot="item-desktop" slot-scope="props">
									<tr :class="{ 'bg-info': selectedItemRekom.index === props.index + 1 }" class="text-nowrap" @click="selectedRekomRow(props.index,props.item)" v-if="props.item">
										<td>{{ props.index + 1 }}</td>
										<td v-html="$options.filters.checkStatus(props.item.status)"></td>
										<td>{{ props.item.rekomendasi }}</td>
									</tr>
								</template>	
							</data-table>

						</div>

						<!-- form info -->
						<form-info></form-info>	

						<!-- form button -->
						<div class="card card-body">
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
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor"
		 @batal="modalTutup" @confirmOk="modalConfirmOk" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalBackgroundClick">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- rekomendasi -->
			<template slot="modal-body3">
				<form-rekom 
				:mode="formRekomMode"
				:selected="selectedItemRekom"
				@createRekom="createRekom"
				@editRekom="editRekom"
				@tutup="modalTutup"></form-rekom>
			</template>

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
	import { getLocalUser } from "../../helpers/auth";
	import { url_config } from '../../helpers/url.js';
	import wajibBadge from "../../components/wajibBadge.vue";
	import infoIcon from "../../components/infoIcon.vue";
	import dataTable from '../../components/datatable.vue';
	import formRekom from "./formRekom.vue";
	import Cleave from 'vue-cleave-component';

	export default {
		components: {
			pageHeader,
			appModal,
			message,
			formButton,
			formInfo,
			infoIcon,
			wajibBadge,
			dataTable,
			formRekom,
			Cleave
		},
		data() {
			return {
				title: 'Tambah Temuan',
				titleDesc: 'Menambah temuan',
				titleIcon: 'icon-plus3',
				level2Title: 'Monitoring',
				kelas: 'monitoring',
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
					},
				},
				formRekomMode: '',
				selectedItemRekom: '',
				itemDataRekom: [],
				itemDataRekomStat: 'success',
				columnDataRekom:[
					{ title: 'No.' },
					{ title: 'Status' },
					{ title: 'Rekomendasi' },
				],
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

			this.$store.dispatch('aktivis/resetDataS2');
			this.$store.dispatch('aktivis/get2', 0);
		},
		watch: {
			formStat(value){
				if(value === "success"){
					if(this.$route.meta.mode == 'create'){
						if(this.currentUser.id_cu != 0){
							this.form.id_cu = this.currentUser.id_cu;
							this.changeCU(this.form.id_cu);
						}
					}else{
						this.checkUser('update_monitoring',this.form.id_cu);
						this.changeCU(this.form.id_cu);
						this.fetchRekom();
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
				if(this.currentUser.id_cu == 0){
					if(this.modelCuStat != 'success'){
						this.$store.dispatch('cu/getHeader');
					}
				}
				if(this.$route.meta.mode == 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
					this.title = 'Ubah Temuan';
					this.titleDesc = 'Mengubah temuan';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah Temuan';
					this.titleDesc = 'Menambah temuan';
					this.titleIcon = 'icon-plus3';
					this.$store.dispatch(this.kelas + '/create');
				}
			},
			fetchRekom(){
				this.itemDataRekom = [];
				var valData;

				if(this.form.monitoring_rekom){
					for(valData of this.form.monitoring_rekom){
						this.itemDataRekom.push(valData);
					}
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
				this.form.rekomendasi = this.itemDataRekom;
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode === 'edit'){
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
			changeCU(id){
				this.$store.dispatch('tp/getCu', id);	
				this.$store.dispatch('aktivis/resetDataS');
				this.$store.dispatch('aktivis/get', id);
			},
			back(){
				if(this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu:'semua', tp: 'semua'}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu, tp: 'semua'}});
				}
			},
			createRekom(value){
				this.itemDataRekom.push(value);
				this.modalTutup();
			},
			editRekom(value){
				_.remove(this.itemDataRekom, {
						index: value.index
				});
				this.itemDataRekom.push(value);
				this.modalTutup(); 
			},
			selectedRekomRow(index,item){
				this.selectedItemRekom = item;
				this.selectedItemRekom.index = index + 1;
			},
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;
				
				if (state == 'hapusRekom') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Rekomendasi ' + this.selectedItemRekom.cu.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahRekom'){
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Rekomendasi';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formRekomMode = 'edit';
				}else if(state == 'tambahRekom'){
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Rekomendasi';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formRekomMode = 'create';
				}
			},
			modalConfirmOk() {
				this.modalShow = false;

				if (this.state == 'hapusRekom') {
					_.remove(this.itemDataRekom, {
						index: this.selectedItemRekom.index
					});
				}
			},
			modalTutup() {
 				if(this.updateStat == 'success'){
					this.back();
					this.$store.dispatch(this.kelas + '/resetUpdateStat');
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
			...mapGetters('monitoring',{
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
				modelTP: 'dataS',
				modelTPStat: 'dataStatS',
			}),
			...mapGetters('aktivis',{
				modelAktivisCU: 'dataS',
				modelAktivisBKCU: 'dataS2',
				modelAktivisCUStat: 'dataStatS',
				modelAktivisBKCUStat: 'dataStatS2',
			}),
		}
	}
</script>

<style lang="css" src="../../../../../public/css/admin/ckeditor-document-style.css" scoped>