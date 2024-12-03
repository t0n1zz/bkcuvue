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

						<!-- informasi -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">1. Informasi</h5>
							</div>
							<div class="card-body">
								<div class="row">

									<!-- gambar -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Foto:</h5>

											<!-- imageupload -->
											<app-image-upload :image_loc="'/images/kubn/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
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
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama kubn" v-validate="'required|min:5'" data-vv-as="Nama" v-model="form.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- Usaha -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_usaha')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_usaha')}">
												<i class="icon-cross2" v-if="errors.has('form.id_usaha')"></i>
												Jenis Usaha: <wajib-badge></wajib-badge>
											</h5>

											<div class="input-group">

												<!-- select -->
												<select class="form-control" name="id_usaha" v-model="form.id_usaha" data-width="100%" :disabled="modelUsaha.length === 0" v-validate="'required'" data-vv-as="Jenis Usaha">
													<option disabled value="">
														<span v-if="modelUsahaStat === 'loading'">Mohon tunggu...</span>
														<span v-else>Silahkan pilih jenis usaha</span>
													</option>
													<option v-for="usaha in modelUsaha" v-if="usaha" :value="usaha.id">{{usaha.name}}</option>
												</select>

											</div>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_usaha')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_usaha') }}
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
											<select class="form-control" name="id_cu" v-model="form.id_cu" data-width="100%" @change="changeCU($event.target.value)" v-validate="'required'" data-vv-as="CU" :disabled="modelCU.length === 0">
												<option disabled value="">Silahkan pilih CU</option>
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
									<div class="col-md-6">
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
									
									<!-- Pinjaman -->
									<div class="col-md-6">
										<div class="form-group">

											<!-- title -->
											<h5>Pinjaman</h5>

											<!-- text -->
											<cleave 
												v-model="form.jmlh_pinjaman" 
												class="form-control" 
												:options="cleaveOption.numeric"
												name="Pinjaman" 
												placeholder="Silahkan masukkan jumlah pinjaman"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									

									<!-- keterangan -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>
												Keterangan:
											</h5>

											<!-- textarea -->
											<textarea rows="5" type="text" name="keterangan" class="form-control" placeholder="Silahkan masukkan keterangan" v-model="form.keterangan"></textarea>

										</div>
									</div>

								</div>
							</div>
						</div>

						<!-- lokasi -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">2. Lokasi</h5>
							</div>
							<div class="card-body">
								<div class="row">

									<!-- Provinsi -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_provinces')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_provinces')}">
												<i class="icon-cross2" v-if="errors.has('form.id_provinces')"></i>
												Provinsi:
											</h5>

											<!-- select -->
											<select class="form-control" name="id_provinces" v-model="form.id_provinces" data-width="100%" data-vv-as="Provinsi" :disabled="modelProvinces.length === 0 || !currentUser.can['update_' + kelas]" @change="changeProvinces($event.target.value)">
												<option disabled value="">
													<span v-if="modelProvincesStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih provinsi</span>
												</option>
												<option v-for="(provinces, index) in modelProvinces" :value="provinces.id" :key="index">{{provinces.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_provinces')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_provinces') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kabupaten -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_regencies')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_regencies')}">
												<i class="icon-cross2" v-if="errors.has('form.id_regencies')"></i>
												Kabupaten:
											</h5>

											<!-- select -->
											<select class="form-control"  name="id_regencies" v-model="form.id_regencies" data-width="100%"  data-vv-as="Kabupaten" @change="changeRegencies($event.target.value)" :disabled="modelRegencies.length === 0 || !currentUser.can['update_' + kelas]">
												<option disabled value="">
													<span v-if="modelRegenciesStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih kabupaten</span>
												</option>
												<option v-for="(regencies, index) in modelRegencies" :value="regencies.id" :key="index">{{regencies.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_regencies')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_regencies') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kecamatan -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_districts')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_districts')}">
												<i class="icon-cross2" v-if="errors.has('form.id_districts')"></i>
												Kecamatan:
											</h5>

											<!-- select -->
											<select class="form-control"  name="id_districts" v-model="form.id_districts" data-width="100%" data-vv-as="Kecamatan" :disabled="modelDistricts.length === 0 || !currentUser.can['update_' + kelas]" @change="changeDistricts($event.target.value)">
												<option disabled value="">
													<span v-if="modelDistrictsStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih kecamatan</span>
												</option>
												<option v-for="(districts, index) in modelDistricts" :value="districts.id" :key="index">{{districts.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_regency')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_regency') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kelurahan -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_villages')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_villages')}">
												<i class="icon-cross2" v-if="errors.has('form.id_villages')"></i>
												Kelurahan:
											</h5>

											<!-- select -->
											<select class="form-control"  name="id_villages" v-model="form.id_villages" data-width="100%"  data-vv-as="Kelurahan" :disabled="modelVillages.length === 0 || !currentUser.can['update_' + kelas]">
												<option disabled value="">
													<span v-if="modelVillagesStat === 'loading'">Mohon tunggu... mohon tunggu</span>
													<span v-else>Silahkan pilih kelurahan</span>
												</option>
												<option v-for="(villages, index) in modelVillages" :value="villages.id" :key="index">{{villages.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_villages')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_villages') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

								</div>
							</div>
						</div>

						<!-- Anggota -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">3. Anggota <wajib-badge></wajib-badge></h5>
							</div>
							<div class="card-body">
								<div class="row">
									<!-- tipe anggota -->
									<div class="col-md-12">
										<div class="form-group" :class="{'has-error' : errors.has('form.tipe_anggota')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.tipe_anggota')}">
												<i class="icon-cross2" v-if="errors.has('form.tipe_anggota')"></i>
												Tipe Data Anggota: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select class="form-control"  name="tipe_anggota" v-model="form.tipe_anggota" data-width="100%" v-validate="'required'" data-vv-as="Tipe Data Anggota">
												<option disabled value="">Silahkan pilih tipe anggota</option>
												<option value="manual">Manual: Hanya memasukan angka total anggota saja</option>
												<option value="integrasi">Integrasi: Memilih anggota dari database anggota CU</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.tipe_anggota')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tipe_anggota') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<div class="col-md-12" v-if="form.tipe_anggota == 'manual'">
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
									
									<div class="col-md-12">
										<div class="alert bg-warning alert-styled-left" v-if="form.tipe_anggota == 'integrasi' && form.id_tp == ''">
											<h6>Pastikan sudah memilih TP.</h6>
										</div>
									</div>
									
									<div class="col-md-12" v-if="form.tipe_anggota == 'integrasi' && form.id_tp != ''">

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahAnggota')">
											<i class="icon-plus22"></i> Tambah
										</button>

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahAnggota')"
										:disabled="!selectedItemAnggota.index">
											<i class="icon-pencil5"></i> Ubah
										</button>

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusAnggota')" :disabled="!selectedItemAnggota.index">
											<i class="icon-bin2"></i> Hapus
										</button>

									</div>
									
								</div>
							</div>

							<data-table :items="itemDataAnggota" :columnData="columnDataAnggota" :itemDataStat="itemDataAnggotaStat" v-if="form.tipe_anggota == 'integrasi'  && form.id_tp != ''">
								<template slot="item-desktop" slot-scope="props">
									<tr :class="{ 'bg-info': selectedItemAnggota.index == props.index + 1}" class="text-nowrap" @click="selectedRowAnggota(props.item, props.index + 1, 'anggota')" v-if="props.item">
										<td>{{ props.index + 1 }}</td>
										<td>
											<img :src="'/images/anggotaCu/' + props.item.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
											<img :src="'/images/no_image.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
										</td>
										<td>{{ props.item.no_ba }}</td>
										<td>{{ props.item.name }}</td>
										<td>{{ props.item.kelamin }}</td>
										<td>{{ props.item.jabatan }}</td>
										<td>{{ props.item.tanggal_mulai }}</td>
										<td>{{ props.item.tanggal_selesai }}</td>
										<td>{{ props.item.deskripsi }}</td>
									</tr>
								</template>	
							</data-table>
						</div>

						<!-- diklat -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">4. Diklat</h5>
							</div>
							<div class="card-body pb-2">
								<div class="row">

									<div class="col-md-12">

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahDiklat')">
											<i class="icon-plus22"></i> Tambah
										</button>

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahDiklat')"
										:disabled="!selectedItemDiklat.index">
											<i class="icon-pencil5"></i> Ubah
										</button>

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusDiklat')" :disabled="!selectedItemDiklat.index">
											<i class="icon-bin2"></i> Hapus
										</button>

									</div>

								</div>		
							</div>

							<data-table :items="itemDataDiklat" :columnData="columnDataDiklat" :itemDataStat="itemDataDiklatStat">
								<template slot="item-desktop" slot-scope="props">
									<tr :class="{ 'bg-info': selectedItemDiklat.index == props.index + 1}" class="text-nowrap" @click="selectedRowDiklat(props.item, props.index + 1, 'diklat')" v-if="props.item">
										<td>{{ props.index + 1 }}</td>
										<td>{{ props.item.name }}</td>
										<td>{{ props.item.tanggal_mulai }}</td>
										<td>{{ props.item.tanggal_selesai }}</td>
										<td>{{ props.item.fasilitator }}</td>
										<td>{{ props.item.tempat }}</td>
										<td>{{ props.item.deskripsi }}</td>
									</tr>
								</template>	
							</data-table>

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
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<template slot="modal-body1">
				<!-- anggota -->
				<form-anggota 
				:id_cu="form.id_cu"
				:id_tp="form.id_tp"
				:mode="formAnggotaMode"
				:selected="selectedItemAnggota"
				@createAnggota="createAnggota"
				@editAnggota="editAnggota"
				@tutup="modalTutup" v-if="state == 'tambahAnggota' || state == 'ubahAnggota'"></form-anggota>

				<!-- diklat -->
				<form-diklat 
				:mode="formDiklatMode"
				:selected="selectedItemDiklat"
				@createDiklat="createDiklat"
				@editDiklat="editDiklat"
				@tutup="modalTutup" v-if="state == 'tambahDiklat' || state == 'ubahDiklat'"></form-diklat>

			</template>

			<!-- tambah tempat -->
			<template slot="modal-body2">
				<form-tempat 
				:id_provinces="form.id_provinces"
				:id_regencies="form.id_regencies"
				@tutup="modalTutup"></form-tempat>
			</template>

		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import { toMulipartedForm } from '../../helpers/form';
	import _ from 'lodash';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import Cleave from 'vue-cleave-component';
	import dataTable from '../../components/datatable.vue';
	import DatePicker from "../../components/datePicker.vue";
	import formAnggota from "./formAnggota.vue";
	import formDiklat from "./formDiklat.vue";

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
			dataTable,
			DatePicker,
			formAnggota,
			formDiklat
		},
		data() {
			return {
				title: 'Tambah KUBN',
				titleDesc: 'Menambah KUBN baru',
				titleIcon: 'icon-plus3',
				kelas: 'kubn',
				level2Title: 'Kubn',
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
				columnDataAnggota:[
					{ title: 'No.' },
					{ title: 'Foto' },
					{ title: 'No. Ba' },
					{ title: 'Nama' },
					{ title: 'Gender' },
					{ title: 'Jabatan' },
					{ title: 'Tgl. Mulai' },
					{ title: 'Tgl. Selesai' },
					{ title: 'Keterangan' },
				],
				selectedItemAnggota: '',
				formAnggotaMode: '',
				itemDataAnggota: [],
				itemDataAnggotaStat: 'success',
				columnDataDiklat:[
					{ title: 'No.' },
					{ title: 'Nama Diklat' },
					{ title: 'Tgl. Mulai' },
					{ title: 'Tgl. Selesai' },
					{ title: 'Fasilitator' },
					{ title: 'Tempat' },
					{ title: 'Keterangan' },
				],
				selectedItemDiklat: '',
				formDiklatMode: '',
				itemDataDiklat: [],
				itemDataDiklatStat: 'success',
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
						this.changeCU(this.form.id_cu);
						this.changeProvinces(this.form.id_provinces);
						this.changeRegencies(this.form.id_regencies);
						this.changeDistricts(this.form.id_districts);

						var valAnggota;
						for (valAnggota of this.form.anggota_kubn){
							let formData = {};
							let anggotaCuCu = {};
							anggotaCuCu = _.find(valAnggota.anggota_cu_cu, { cu_id: this.form.id_cu});
							formData.no_ba = anggotaCuCu.no_ba;
							formData.anggota_cu_id = valAnggota.pivot.anggota_cu_id;
							formData.jabatan = valAnggota.pivot.jabatan;
							formData.tanggal_mulai = valAnggota.pivot.tanggal_mulai;
							formData.tanggal_selesai = valAnggota.pivot.tanggal_selesai;
							formData.deskripsi = valAnggota.pivot.deskripsi;
							formData.gambar = valAnggota.gambar;
							formData.name = valAnggota.name;
							formData.kelamin = valAnggota.kelamin;

							this.itemDataAnggota.push(formData);
						}

						var valDiklat;
						for (valDiklat of this.form.diklat){
							let formData = {};
							formData.id = valDiklat.id;
							formData.name = valDiklat.name;
							formData.fasilitator = valDiklat.fasilitator;
							formData.tempat = valDiklat.tempat;
							formData.tanggal_mulai = valDiklat.tanggal_mulai;
							formData.tanggal_selesai = valDiklat.tanggal_selesai;
							formData.deskripsi = valDiklat.deskripsi;

							this.itemDataDiklat.push(formData);
						}
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
					this.title = 'Ubah KUBN';
					this.titleDesc = 'Mengubah KUBN';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah KUBN';
					this.titleDesc = 'Menambah KUBN';
					this.titleIcon = 'icon-plus3';
					this.$store.dispatch(this.kelas + '/create');
				}

				this.$store.dispatch('provinces/get');
				this.$store.dispatch('kubnUsaha/get');
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
			selectedRowAnggota(item,index,tipe){
				this.selectedItemAnggota = item;
				this.selectedItemAnggota.index = index;
			},
			
			createAnggota(value){
				this.itemDataAnggota.push(value);
				this.selectedItemAnggota = {};
				this.modalTutup();
			},
			editAnggota(value){
				_.remove(this.itemDataAnggota, {
						index: value.index
				});
				this.itemDataAnggota.push(value);
				this.selectedItemAnggota = {};
				this.modalTutup(); 
			},
			selectedRowDiklat(item,index,tipe){
				this.selectedItemDiklat = item;
				this.selectedItemDiklat.index = index;
			},
			createDiklat(value){
				this.itemDataDiklat.push(value);
				this.selectedItemDiklat = {};
				this.modalTutup();
			},
			editDiklat(value){
				_.remove(this.itemDataDiklat, {
						index: value.index
				});
				this.itemDataDiklat.push(value);
				this.selectedItemDiklat = {};
				this.modalTutup(); 
			},
			save() {
				this.form.anggota = this.itemDataAnggota;
				this.form.diklat = this.itemDataDiklat;
				this.state = '';
				
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
				if(this.$route.meta.mode == 'edit' && this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu}});
				}else{
					if(this.currentUser.id_cu == 0){
						if(this.form.id_cu == 0){
							this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu}});
						}else{
							this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu}});
						}
					}else{
						this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu}});
					}
				}
			},
			changeCU(id){
				this.$store.dispatch('tp/getCu',id);
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
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;

				if(isMobile){
					this.selectedItemAnggota = itemMobile;
					this.selectedItemDiklat = itemMobile;
				}

				if (state == 'hapusAnggota') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Anggota' + this.selectedItemAnggota.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahAnggota'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Anggota';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formAnggotaMode = 'edit';
				}else if(state == 'tambahAnggota'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Anggota';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formAnggotaMode = 'create';
				}else if (state == 'hapusDiklat') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Diklat' + this.selectedItemDiklat.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahDiklat'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Diklat';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formDiklatMode = 'edit';
				}else if(state == 'tambahDiklat'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Diklat';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formAnggotaMode = 'create';
				}
			},
			modalConfirmOk() {
				this.modalShow = false;

				if (this.state == 'hapusAnggota') {
					_.remove(this.itemDataAnggota, {
						index: this.selectedItemAnggota.index
					});
					this.selectedItemAnggota = {};
				}
				if (this.state == 'hapusDiklat') {
					_.remove(this.itemDataDiklat, {
						index: this.selectedItemDiklat.index
					});
					this.selectedItemDiklat = {};
				}
			},
			modalTutup() {
 				if(this.updateStat === 'success' && this.state == ''){
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
			processFile(event) {
				this.form.gambar = event.target.files[0]
				console.log(event.target.files[0].name);
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('kubn',{
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
			...mapGetters('kubnUsaha',{
				modelUsaha: 'dataS',
				modelUsahaStat: 'dataStatS',
			}),
			...mapGetters('provinces',{
				modelProvinces: 'dataS',
				modelProvincesStat: 'dataStatS'
			}),
			...mapGetters('regencies',{
				modelRegencies: 'dataS',
				modelRegenciesStat: 'dataStatS'
			}),
			...mapGetters('districts',{
				modelDistricts: 'dataS',
				modelDistrictsStat: 'dataStatS'
			}),
			...mapGetters('villages',{
				modelVillages: 'dataS',
				modelVillagesStat: 'dataStatS'
			})
		}
	}
</script>