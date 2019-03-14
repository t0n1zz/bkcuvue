<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title"
		 :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- check nik -->
					<div class="card" v-if="$route.meta.mode == 'create'">
						<div class="card-body">	
							<div class="row">
								<div class="col-12">
									<h6>
										Silahkan masukkan NIK anggota CU untuk memastikan apakah data anggota CU dengan NIK tersebut sudah terdaftar di SIMO
									</h6>
								</div>
								<div class="col-12 pb-2">
									<!-- text -->
									<cleave 
										name="nik"
										v-model="nik" 
										class="form-control" 
										:options="cleaveOption.number16"
										placeholder="Silahkan masukkan no KTP"
										v-validate="'required'" data-vv-as="No. KTP" :disabled="isNew"></cleave>
								</div>

								<div class="col-4">
									<div class="row">
										<div class="col-6 pb-2">
											<button class="btn btn-primary btn-block" @click.prevent="cariData"  :disabled="nik == ''"><i class="icon-search4"></i> Cari</button>
										</div>
										<div class="col-6 pb-2" v-if="itemDataStat != ''">
											<button class="btn btn-warning btn-block" @click.prevent="resetData"><i class="icon-reset"></i> Reset pencarian</button>
										</div>
									</div>
									
								</div>

								<!-- loading -->
								<div class="col-12" v-if="itemDataStat == 'loading'">
									<hr/>
									<div class="progress">
										<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
											<span class="sr-only">100% Complete</span>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>

					<!-- data exist -->
					<div class="alert bg-warning text-white alert-styled-left " v-if="Object.keys(itemData).length != 0">
						<span class="font-weight-semibold">NIK sudah terdaftar di SIMO. Apabila ingin menambahkan anggota tersebut menjadi anggota cu maka silahkan tambahkan no. ba dan tgl. jadi anggota. 
						</span>
					</div>

					<!-- data not exits -->
					<div class="alert bg-success text-white alert-styled-left " v-if="itemDataStat == 'success' && Object.keys(itemData).length == 0">
						<span class="font-weight-semibold">NIK tidak terdaftar di SIMO, maka silahkan menambahkan data anggota CU baru.
						</span>
					</div>

					<!-- tambah anggota cu -->
					<div v-if="$route.meta.mode == 'create'">

						<!-- if new data -->
						<form-create v-if="isNew" :nik="nik"></form-create>

						<!-- if old data -->
						<div v-if="itemDataStat == 'success' && !isNew">

							<!-- identitas -->
							<div class="card">
								<div class="card-header bg-white">
									<h5 class="card-title">1. Identitas</h5>
								</div>
								<div class="card-body">
									<anggota-card :id_props="itemData.id"></anggota-card>
								</div>
								<div class="card-footer text-center">
									<button type="button" class="btn btn-light" @click.prevent="showUbahData"><i class="icon-pencil5"></i> Ubah Identitas</button>
								</div>
							</div>

							<!-- if old data and ubah identitas -->
							<form-edit v-if="isEdit" :mode="'props'" @hideUbahData="hideUbahData" :id_props="itemData.id"></form-edit>

							<!-- if cu -->
							<div class="card" v-if="currentUser && currentUser.id_cu != 0">
								<div class="card-header bg-white">
									<h5 class="card-title">2. CU</h5>
								</div>
								<div class="card-body">
									<div class="row">
										<form @submit.prevent="saveCu" enctype="multipart/form-data" data-vv-scope="formCu">

											<!-- no_ba -->
											<div class="col-md-4">
												<div class="form-group" :class="{'has-error' : errors.has('formCu.no_ba')}">

													<!-- title -->
													<h6 :class="{ 'text-danger' : errors.has('formCu.no_ba')}">
														<i class="icon-cross2" v-if="errors.has('formCu.no_ba')"></i>
														No. BA:</h6>

													<!-- text -->
													<input type="text" nama="no_ba" class="form-control" placeholder="Silahkan masukkan no ba" v-validate="'required|min:5'"
													data-vv-as="No. BA" v-model="form.no_ba">

													<!-- error message -->
													<small class="text-muted text-danger" v-if="errors.has('formCu.no_ba')">
														<i class="icon-arrow-small-right"></i> {{ errors.first('formCu.no_ba') }}
													</small>
													<small class="text-muted" v-else>&nbsp;</small>
												</div>
											</div>

											<!-- tanggal_masuk -->
											<div class="col-md-4">
												<div class="form-group" :class="{'has-error' : errors.has('formCu.tanggal_masuk')}">

													<!-- title -->
													<h6 :class="{ 'text-danger' : errors.has('form.tanggal_masuk')}">
														<i class="icon-cross2" v-if="errors.has('form.tanggal_masuk')"></i>
														Tgl. Jadi Anggota:</h6>

													<!-- text -->
													<cleave name="tanggal_masuk" v-model="form.tanggal_masuk" class="form-control" :raw="false" :options="cleaveOption.date" v-validate="'required'" data-vv-as="Tgl. jadi anggota"
													placeholder="Silahkan masukkan tgl. jadi anggota"></cleave>

													<!-- error message -->
													<small class="text-muted text-danger" v-if="errors.has('form.tanggal_masuk')">
														<i class="icon-arrow-small-right"></i> {{ errors.first('form.tanggal_masuk') }}
													</small>
													<small class="text-muted" v-else>&nbsp;</small>
												</div>
											</div>
											
											<!-- save button -->
											<div class="col-md-4">

											</div>

										</form>
									</div>
								</div>
							</div>

							<!-- if bkcu -->
							<div class="card" v-if="currentUser && currentUser.id_cu == 0">
								<div class="card-header bg-white">
									<h5 class="card-title">2. CU</h5>
								</div>
								<div class="card-body pb-2">
									<div class="row">

										<div class="col-md-12">

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahCu')">
												<i class="icon-plus22"></i> Tambah
											</button>

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahCu')"
											:disabled="!selectedItemCu.index">
												<i class="icon-pencil5"></i> Ubah
											</button>

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusCu')" :disabled="!selectedItemCu.index">
												<i class="icon-bin2"></i> Hapus
											</button>

										</div>

									</div>		
								</div>

								<data-table :items="itemDataCu" :columnData="columnDataCu" :itemDataStat="itemDataCuStat">
									<template slot="item-desktop" slot-scope="props">
										<tr :class="{ 'bg-info': selectedItemCu.index === props.index + 1 }" class="text-nowrap" @click="selectedCuRow(props.index,props.item)" v-if="props.item">
											<td>{{ props.index + 1 }}</td>
											<td><check-value :value="props.item.cu.name"></check-value></td>
											<td><check-value :value="props.item.no_ba"></check-value></td>
											<td v-html="$options.filters.date(props.item.tanggal_masuk)" class="text-nowrap"></td>
										</tr>
									</template>	
								</data-table>

							</div>

						</div>

					</div>

					<!-- ubah identitas -->
					<form-edit v-if="$route.meta.mode == 'edit'" :mode="'local'"></form-edit>

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

			<!-- tambah cu -->
			<template slot="modal-body3">
				<form-cu 
				:mode="formCuMode"
				:selected="selectedItemCu"
				@createCu="createCu"
				@editCu="editCu"
				@tutup="modalTutup"></form-cu>
			</template>

		</app-modal>

	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import appModal from '../../components/modal';
	import anggotaCuAPI from '../../api/anggotaCu.js';
	import Cleave from 'vue-cleave-component';
	import formCreate from "./create.vue";	
	import formEdit from "./edit.vue";	
	import anggotaCard from "./card.vue";	
	import dataTable from '../../components/datatable.vue';
	import checkValue from "../../components/checkValue.vue";
	import formCu from "./formCu.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			formCreate,
			formEdit,
			anggotaCard,
			Cleave,
			dataTable,
			checkValue,
			formCu
		},
		data() {
			return {
				title: '',
				titleDesc: '',
				titleIcon: '',
				kelas: 'anggotaCu',
				level2Title: 'Anggota CU',
				isNew: false,
				itemData: {},
				itemDataStat: '',
				nik: '',
				isEdit: false,
				cleaveOption: {
          number16: {
            numeral: true,
            numeralIntegerScale: 16,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
					},
				},
				formCuMode: '',
				selectedItemCu: '',
				itemDataCu: [],
				itemDataCuStat: 'success',
				columnDataCu:[
					{ title: 'No.' },
					{ title: 'CU' },
					{ title: 'No. BA' },
					{ title: 'Tgl. Jadi Anggota' },
				],
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
			}
		},
		created() {
			if(this.$route.meta.mode === 'edit'){
				this.title = 'Ubah ' + this.level2Title;
				this.titleDesc = 'Mengubah ' + this.level2Title;
				this.titleIcon = 'icon-pencil5';
			}else{
				this.title = 'Tambah ' + this.level2Title;
				this.titleDesc = 'Menambah ' + this.level2Title;
				this.titleIcon = 'icon-plus3';
			}
		},
		watch: {
			formStat(value) {
				if (value === "success") {
					var valData;
					for(valData of this.form.anggota_cu){
						var datas = {};
						var cu = {};
						cu.name = valData.name;
						cu.id = valData.id;
						datas = valData.pivot;
						datas.cu = cu;
						this.itemDataCu.push(datas);
					}
				}
			},
			updateStat(value) {
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if (value === "success") {
				this.modalTitle = this.updateResponse.message;
				} else {
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			}
		},
		methods: {
			cariData(){
				this.itemDataStat = 'loading';
				this.isNew = false;

				anggotaCuAPI.cariData(this.nik)
        .then((response) => {
					if(response.data.model){
						this.itemData = response.data.model;
					}else{
						this.itemData = {};
						this.isNew = true;
					}
					this.itemDataStat = 'success';
        })
        .catch((error) => {
					this.itemData = error.response;
          this.itemDataStat = 'fail';
				});
			},
			showUbahData(){
				this.isEdit = true;
			},
			hideUbahData(){
				this.isEdit = false;
			},
			resetData(){
				this.nik = '';
				this.itemData = {};
				this.isNew = false;
				this.itemDataStat = '';
			},
			back(){
				if(this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: 'semua'}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu}});
				}
			},
			createCu(value){
				this.itemDataCu.push(value);
				
				this.modalTutup();
			},
			editCu(value){
				_.remove(this.itemDataCu, {
						index: value.index
				});
				this.itemDataCu.push(value);
				this.modalTutup(); 
			},
			selectedCuRow(index,item){
				this.selectedItemCu = item;
				this.selectedItemCu.index = index + 1;
			},
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;
				
				if (state == 'hapusCu') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus CU ' + this.selectedItemCu.cu.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahCu'){
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah CU';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formCuMode = 'edit';
				}else if(state == 'tambahCu'){
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah CU';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formCuMode = 'create';
				}
			},
			modalConfirmOk() {
				this.modalShow = false;

				if (this.state == 'hapusCu') {
					_.remove(this.itemDataCu, {
						index: this.selectedItemCu.index
					});
				}else if (this.state == 'hapusSimpanan') {
					_.remove(this.itemDataSimpanan, {
						index: this.selectedItemSimpanan.index
					});
				}else if (this.state == 'hapusPinjaman') {
					_.remove(this.itemDataPinjaman, {
						index: this.selectedItemPinjaman.index
					});
				}
			},
			modalTutup() {
				if (this.updateStat === 'success') {
					this.back();
				}

				this.modalShow = false;
			},
			modalBackgroundClick() {
				if (this.modalState === 'success') {
					this.modalTutup;
				} else if (this.modalState === 'loading') {
					// do nothing
				} else {
					this.modalShow = false
				}
			},
		},
		computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
			}),
			...mapGetters('anggotaCu', {
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>