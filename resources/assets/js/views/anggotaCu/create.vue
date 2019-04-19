<template>
	<div>

		<!-- message -->
		<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<!-- main panel -->
		<form @submit.prevent="save" data-vv-scope="form">

			<!-- identitas -->
			<div class="card">
				<div class="card-header bg-white">
					<h5 class="card-title">1. Identitas Anggota</h5>
				</div>
				<div class="card-body">

					<div class="row">

						<!-- nik -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.nik')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.nik')}">
									<i class="icon-cross2" v-if="errors.has('form.nik')"></i>
									No. KTP:</h6>

								<!-- text -->
								<cleave 
									name="nik"
									v-model="form.nik" 
									class="form-control" 
									:options="cleaveOption.number16"
									placeholder="Silahkan masukkan no KTP"
									v-validate="'required'" data-vv-as="No. KTP" readonly></cleave>
								
								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.nik')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.nik') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- name -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.name')}">
									<i class="icon-cross2" v-if="errors.has('form.name')"></i>
									Nama:</h6>

								<!-- text -->
								<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama" v-validate="'required'"
									data-vv-as="Nama" v-model="form.name">

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.name')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- alih waris -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.alih_waris')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.alih_waris')}">
									<i class="icon-cross2" v-if="errors.has('form.alih_waris')"></i>
									Nama Alih Waris:</h6>

								<!-- text -->
								<input type="text" name="alih_waris" class="form-control" placeholder="Silahkan masukkan nama alih waris" v-validate="'required'"
									data-vv-as="Nama alih waris" v-model="form.alih_waris">

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.alih_waris')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.alih_waris') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- gender -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.kelamin')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.kelamin')}">
									<i class="icon-cross2" v-if="errors.has('form.kelamin')"></i>
									Gender:
								</h6>

								<!-- select -->
								<select class="form-control" name="kelamin" v-model="form.kelamin" data-width="100%" v-validate="'required'"
									data-vv-as="Gender">
									<option disabled value="">Silahkan pilih gender</option>
									<option value="Pria">Pria</option>
									<option value="Wanita">Wanita</option>
								</select>

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.kelamin')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.kelamin') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- darah -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>
									Gol. Darah:
								</h6>

								<!-- select -->
								<select class="form-control" name="darah" v-model="form.darah" data-width="100%">
									<option disabled value="">Silahkan pilih golongan darah</option>
									<option value="A">A</option>
									<option value="B">B</option>
									<option value="AB">AB</option>
									<option value="O">O</option>
								</select>

							</div>
						</div>

						<!-- tinggi -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6> Tinggi <small>(cm)</small>:</h6>

								<!-- text -->
								<cleave name="tinggi" v-model="form.tinggi" class="form-control" :options="cleaveOption.number3" placeholder="Silahkan masukkan tinggi"></cleave>
							</div>
						</div>

						<!-- agama -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Agama:</h6>

								<!-- select -->
								<select class="form-control" name="agama" v-model="form.agama" data-width="100%">
									<option disabled value="">Silahkan pilih agama</option>
									<option value="Buddha">Buddha</option>
									<option value="Hindu">Hindu</option>
									<option value="Islam">Islam</option>
									<option value="Khatolik">Khatolik</option>
									<option value="Kong Hu Cu">Kong Hu Cu</option>
									<option value="Protestan">Protestan</option>
								</select>

							</div>
						</div>

						<!-- tanggal lahir -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Tgl. Lahir: <info-icon :message="'Format: tahun-bulan-tanggal dalam angka. Contoh: 2019-01-23'"></info-icon></h6>

								<!-- input -->
								<cleave name="tanggal_lahir" v-model="form.tanggal_lahir" class="form-control" :raw="false" :options="cleaveOption.date"
									placeholder="Silahkan masukkan tgl. lahir"></cleave>

							</div>
						</div>

						<!-- tempat lahir -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Tempat Lahir:</h6>

								<!-- text -->
								<input type="text" name="tempat_lahir" class="form-control" placeholder="Silahkan masukkan tempat lahir" v-model="form.tempat_lahir">

							</div>
						</div>

						<!-- status -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>
									Status:
								</h6>

								<!-- select -->
								<select class="form-control" name="status" v-model="form.status" data-width="100%">
									<option disabled value="">Silahkan pilih status pernikahan</option>
									<option value="Belum menikah">Belum menikah</option>
									<option value="Menikah">Menikah</option>
									<option value="Janda/Duda">Janda/Duda</option>
								</select>

							</div>
						</div>

						<!-- lembaga -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Lembaga:</h6>

								<!-- text -->
								<input type="text" name="lembaga" class="form-control" placeholder="Silahkan masukkan lembaga" v-model="form.lembaga">
							</div>
						</div>

						<!-- jabatan -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Jabatan:</h6>

								<!-- text -->
								<input type="text" name="jabatan" class="form-control" placeholder="Silahkan masukkan jabatan" v-model="form.jabatan">
							</div>
						</div>

						<!-- pendidikan -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Pendidikan:</h6>

								<!-- text -->
								<input type="text" name="pendidikan" class="form-control" placeholder="Silahkan masukkan pendidikan" v-model="form.pendidikan">

							</div>
						</div>

						<!-- Provinsi -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>
									Provinsi:
								</h6>

								<!-- select -->
								<select class="form-control" name="id_provinces" v-model="form.id_provinces" data-width="100%" :disabled="modelProvinces.length == 0" @change="changeProvinces($event.target.value)">
									<option disabled value="">
										<span v-if="modelProvincesStat === 'loading'">Mohon tunggu...</span>
										<span v-else>Silahkan pilih provinsi</span>
									</option>
									<option v-for="provinces in modelProvinces" :value="provinces.id">{{provinces.name}}</option>
								</select>

							</div>
						</div>

						<!-- kabupaten -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Kabupaten:</h6>

								<!-- select -->
								<select class="form-control"  name="id_regencies" v-model="form.id_regencies" data-width="100%" @change="changeRegencies($event.target.value)" :disabled="modelRegencies.length === 0">
									<option disabled value="">
										<span v-if="modelRegenciesStat === 'loading'">Mohon tunggu...</span>
										<span v-else>Silahkan pilih kabupaten</span>
									</option>
									<option v-for="regencies in modelRegencies" :value="regencies.id">{{regencies.name}}</option>
								</select>

							</div>
						</div>

						<!-- kecamatan -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Kecamatan:</h6>

								<!-- select -->
								<select class="form-control"  name="id_districts" v-model="form.id_districts" data-width="100%" :disabled="modelDistricts.length === 0" @change="changeDistricts($event.target.value)">
									<option disabled value="">
										<span v-if="modelDistrictsStat === 'loading'">Mohon tunggu...</span>
										<span v-else>Silahkan pilih kecamatan</span>
									</option>
									<option v-for="districts in modelDistricts" :value="districts.id">{{districts.name}}</option>
								</select>

							</div>
						</div>

						<!-- kelurahan -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Kelurahan:</h6>

								<!-- select -->
								<select class="form-control"  name="id_villages" v-model="form.id_villages" data-width="100%" v-validate="'required'" data-vv-as="Desa" :disabled="modelVillages.length === 0">
									<option disabled value="">
										<span v-if="modelVillagesStat === 'loading'">Mohon tunggu... mohon tunggu</span>
										<span v-else>Silahkan pilih kelurahan</span>
									</option>
									<option v-for="villages in modelVillages" :value="villages.id">{{villages.name}}</option>
								</select>

							</div>
						</div>

						<!-- alamat -->
						<div class="col-md-8">
							<div class="form-group">

								<!-- title -->
								<h6>Alamat:</h6>

								<!-- text -->
								<input type="text" name="alamat" class="form-control" placeholder="Silahkan masukkan alamat" v-model="form.alamat">

							</div>
						</div>

						<!-- no hp -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>No. Hp:</h6>

								<!-- text -->
								<cleave 
									v-model="form.hp" 
									class="form-control" 
									:options="cleaveOption.number12"
									placeholder="Silahkan masukkan no hp"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- email -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.email')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.email')}">
									<i class="icon-cross2" v-if="errors.has('form.email')"></i>
									Email:</h6>

								<!-- text -->
								<input type="text" name="email" class="form-control" placeholder="Silahkan masukkan alamat email" v-validate="'email'" data-vv-as="Email" v-model="form.email">

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.email')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.email') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- kontak -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Kontak Lainnya:</h6>

								<!-- text -->
								<input type="text" name="kontak" class="form-control" placeholder="Silahkan masukkan kontak lainnya" v-model="form.kontak">

							</div>
						</div>
						
					</div>

				</div>
			</div>

			<!-- if cu -->
			<div class="card" v-if="currentUser && currentUser.id_cu != 0">
				<div class="card-header bg-white">
					<h5 class="card-title">2. CU</h5>
				</div>
				<div class="card-body">
					
						<div class="row">
						
							<!-- no_ba -->
							<div class="col-md-6">
								<div class="form-group">

									<!-- title -->
									<h6>No. BA:</h6>

									<!-- text -->
									<input type="text" name="no_ba" class="form-control" placeholder="Silahkan masukkan no ba" v-model="form.no_ba">

								</div>
							</div>

							<!-- tanggal_masuk -->
							<div class="col-md-6">
								<div class="form-group">

									<!-- title -->
									<h6>Tgl. Jadi Anggota: <info-icon :message="'Format: tahun-bulan-tanggal dalam angka. Contoh: 2019-01-23'"></info-icon></h6>

									<!-- text -->
									<cleave name="tanggal_masuk" v-model="form.tanggal_masuk" class="form-control" :raw="false" :options="cleaveOption.date"
									placeholder="Silahkan masukkan tgl. jadi anggota"></cleave>

								</div>
							</div>

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

			<!-- simpanan -->
			<div class="card" v-if="mode != 'edit'">
				<div class="card-header bg-white">
					<h5 class="card-title" v-if="currentUser && currentUser.id_cu == 0">3. Simpanan</h5>
					<h5 class="card-title" v-else>3. Simpanan</h5>
				</div>
				<div class="card-body pb-2">
					<div class="row">

						<div class="col-md-12">

							<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahSimpanan')">
								<i class="icon-plus22"></i> Tambah
							</button>

							<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahSimpanan')"
							:disabled="!selectedItemSimpanan.index">
								<i class="icon-pencil5"></i> Ubah
							</button>

							<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusSimpanan')" :disabled="!selectedItemSimpanan.index">
								<i class="icon-bin2"></i> Hapus
							</button>

						</div>

					</div>		
				</div>

				<data-table :items="itemDataSimpanan" :columnData="columnDataSimpanan" :itemDataStat="itemDataSimpananStat">
					<template slot="item-desktop" slot-scope="props">
						<tr :class="{ 'bg-info': selectedItemSimpanan.index === props.index + 1 }" class="text-nowrap" @click="selectedSimpananRow(props.index,props.item)" v-if="props.item">
							<td>{{ props.index + 1 }}</td>
							<td><check-value :value="props.item.cu.name"></check-value></td>
							<td><check-value :value="props.item.produk_cu.name"></check-value></td>
							<td><check-value :value="props.item.saldo" valueType="currency"></check-value></td>
							<td><span v-if="props.item.tanggal" v-html="$options.filters.date(props.item.tanggal)"></span> <span v-else>-</span></td>
						</tr>
					</template>	
				</data-table>

			</div>

			<!-- pinjaman -->
			<div class="card" v-if="mode != 'edit'">
				<div class="card-header bg-white">
					<h5 class="card-title" v-if="currentUser && currentUser.id_cu == 0">4. Pinjaman</h5>
					<h5 class="card-title" v-else>4. Pinjaman</h5>
				</div>
				<div class="card-body pb-2">
					<div class="row">

						<div class="col-md-12">

							<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahPinjaman')">
								<i class="icon-plus22"></i> Tambah
							</button>

							<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahPinjaman')"
							:disabled="!selectedItemPinjaman.index">
								<i class="icon-pencil5"></i> Ubah
							</button>

							<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusPinjaman')" :disabled="!selectedItemPinjaman.index">
								<i class="icon-bin2"></i> Hapus
							</button>

						</div>

					</div>		
				</div>

				<data-table :items="itemDataPinjaman" :columnData="columnDataPinjaman" :itemDataStat="itemDataPinjamanStat">
					<template slot="item-desktop" slot-scope="props">
						<tr :class="{ 'bg-info': selectedItemPinjaman.index === props.index + 1}" class="text-nowrap" @click="selectedPinjamanRow(props.index, props.item)" v-if="props.item">
							<td>{{ props.index + 1 }}</td>
							<td><check-value :value="props.item.cu.name"></check-value></td>
							<td><check-value :value="props.item.produk_cu.name"></check-value></td>
							<td><check-value :value="props.item.saldo" valueType="currency"></check-value></td>
							<td><span v-if="props.item.tanggal" v-html="$options.filters.date(props.item.tanggal)"></span> <span v-else>-</span></td>
						</tr>
					</template>	
				</data-table>

			</div>

			<!-- form info -->
			<form-info></form-info>
			<br />

			<!-- form button -->
			<div class="card card-body">
				<form-button :cancelState="'methods'" :formValidation="'form'" @cancelClick="back"></form-button>
			</div>

		</form>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor"
		 @batal="modalTutup" @confirmOk="modalConfirmOk" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalBackgroundClick">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- tambah simpanan -->
			<template slot="modal-body1">
				<form-simpanan 
				:mode="formSimpananMode"
				:selected="selectedItemSimpanan"
				@createSimpanan="createSimpanan"
				@editSimpanan="editSimpanan"
				@tutup="modalTutup"></form-simpanan>
			</template>

			<!-- tambah pinjaman -->
			<template slot="modal-body2">
				<form-pinjaman 
				:mode="formPinjamanMode"
				:selected="selectedItemPinjaman"
				@createPinjaman="createPinjaman"
				@editPinjaman="editPinjaman"
				@tutup="modalTutup"></form-pinjaman>
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
	import _ from 'lodash';
	import {toMulipartedForm} from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formCu from "./formCu.vue";
	import formSimpanan from "./formSimpanan.vue";
	import formPinjaman from "./formPinjaman.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';
	import dataTable from '../../components/datatable.vue';
	import checkValue from "../../components/checkValue.vue";
	import infoIcon from "../../components/infoIcon.vue";

	export default {
		props: ['mode','nik'],
		components: {
			appModal,
			appImageUpload,
			message,
			formCu,
			formSimpanan,
			formPinjaman,
			formButton,
			formInfo,
			Cleave,
			dataTable,
			checkValue,
			infoIcon
		},
		data() {
			return {
				kelas: 'anggotaCu',
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
					},
					number16: {
            numeral: true,
            numeralIntegerScale: 16,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
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
				formSimpananMode: '',
				selectedItemSimpanan: '',
				itemDataSimpanan: [],
				itemDataSimpananStat: 'success',
				columnDataSimpanan:[
					{ title: 'No.' },
					{ title: 'CU' },
					{ title: 'Simpanan' },
					{ title: 'Saldo' },
					{ title: 'Tanggal' },
				],
				formPinjamanMode: '',
				selectedItemPinjaman: '',
				itemDataPinjaman: [],
				itemDataPinjamanStat: 'success',
				columnDataPinjaman:[
					{ title: 'No.' },
					{ title: 'CU' },
					{ title: 'Pinjaman' },
					{ title: 'Saldo' },
					{ title: 'Tanggal' },
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
			if (this.currentUser.id_cu == 0) {
				if (this.modelCuStat != 'success') {
					this.$store.dispatch('cu/getHeader');
				}
			}
			
			this.form.id_cu = this.currentUser.id_cu;

			this.$store.dispatch('provinces/get');
			if(this.form.id_provinces){
				this.changeProvinces(this.form.id_provinces);
			}
			if(this.form.id_regencies){
				this.changeRegencies(this.form.id_regencies);
			}
			if(this.form.id_districts){
				this.changeDistricts(this.form.id_districts);
			}

			this.fetchProduk();
			this.fetchCu();
		},
		watch: {
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
			fetchProduk() {
				if(this.mode == 'create_new'){
					this.form.nik = this.nik;
				}else if(this.mode == 'create_old'){

					// produk cu
					this.itemDataSimpanan = [];
					this.itemDataPinjaman = [];
					var valDataProduk;

					if(this.form.anggota_produk_cu){
						for(valDataProduk of this.form.anggota_produk_cu){
							var datas = {};
							var cu = {};
							var produk_cu = {};

							if(this.currentUser.id_cu == 0){
								let data = _.find(this.modelCu,{'id':valDataProduk.id_cu});
								cu.id = data.id;
								cu.name = data.name;
							}else{
								cu.id = this.currentUser.cu.id;
								cu.name = this.currentUser.cu.name;
							}
							
							produk_cu.id = valDataProduk.id;
							produk_cu.name = valDataProduk.name;
							datas = valDataProduk.pivot;
							datas.cu = cu;
							datas.produk_cu = produk_cu;
							
							if(valDataProduk.tipe == 'Simpanan Pokok' || 	valDataProduk.tipe == 'Simpanan Wajib' ||valDataProduk.tipe == 'Simpanan Non Saham'){
								this.itemDataSimpanan.push(datas);
							}else if(valDataProduk.tipe == 'Pinjaman Kapitalisasi' || valDataProduk.tipe == 'Pinjaman Umum' ||valDataProduk.tipe == 'Pinjaman Produktif'){
								this.itemDataPinjaman.push(datas);
							}

						}
					}
				}
			},
			fetchCu(){
				if(this.currentUser.id_cu == 0){
					this.itemDataCu = [];
					var valData;

					if(this.form.anggota_cu){
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
				}else{
					let data = _.find(this.form.anggota_cu,{'id':this.currentUser.id_cu});

					if(data){
						this.form.no_ba = data.pivot.no_ba;
						this.form.tanggal_masuk = data.pivot.tanggal_masuk;
					}
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
			createSimpanan(value){
				this.itemDataSimpanan.push(value);
				this.selectedItemSimpanan = '';
				this.modalTutup();
			},
			editSimpanan(value){
				_.remove(this.itemDataSimpanan, {
						index: value.index
				});
				this.itemDataSimpanan.push(value);
				this.selectedItemSimpanan = '';
				this.modalTutup(); 
			},
			createPinjaman(value){
				this.itemDataPinjaman.push(value);
				this.selectedItemPinjaman = '';
				this.modalTutup();
			},
			editPinjaman(value){
				_.remove(this.itemDataPinjaman, {
						index: value.index
				});
				this.itemDataPinjaman.push(value);
				this.selectedItemPinjaman = '';
				this.modalTutup(); 
			},
			save() {
				this.form.simpanan = this.itemDataSimpanan;
				this.form.pinjaman = this.itemDataPinjaman;

				if(this.currentUser.id_cu == 0){
					this.form.cu = this.itemDataCu;
				}else{
					this.form.id_cu = this.currentUser.id_cu;
				}

				const formData = this.form;
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.mode == 'create_new'){
							this.$store.dispatch(this.kelas + '/store', formData);
						}else if(this.mode == 'create_old'){
							this.$store.dispatch(this.kelas + '/update', [this.itemData.id,formData]);
						}else if(this.mode == 'edit'){
							this.$store.dispatch(this.kelas + '/update', [this.$route.params.id,formData]);
						}
						this.submited = false;
					} else {
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
			back() {
				if(this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: 'semua'}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu}});
				}
			},
			selectedCuRow(index,item){
				this.selectedItemCu = item;
				this.selectedItemCu.index = index + 1;
			},
			selectedSimpananRow(index,item){
				this.selectedItemSimpanan = item;
				this.selectedItemSimpanan.index = index + 1;
			},
			selectedPinjamanRow(index,item){
				this.selectedItemPinjaman = item;
				this.selectedItemPinjaman.index = index + 1;
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
				}else if (state == 'hapusSimpanan') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Simpanan ' + this.selectedItemSimpanan.produk_cu.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahSimpanan'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Simpanan';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formSimpananMode = 'edit';
				}else if(state == 'tambahSimpanan'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Simpanan';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formSimpananMode = 'create';
				}else if (state == 'hapusPinjaman') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Pinjaman ' + this.selectedItemPinjaman.produk_cu.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahPinjaman'){
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Pinjaman';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formPinjamanMode = 'edit';
				}else if(state == 'tambahPinjaman'){
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Pinjaman';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formPinjamanMode = 'create';
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
					this.selectedItemSimpanan = '';
				}else if (this.state == 'hapusPinjaman') {
					_.remove(this.itemDataPinjaman, {
						index: this.selectedItemPinjaman.index
					});
					this.selectedItemPinjaman = '';
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
			...mapGetters('cu',{
				modelCu: 'headerDataS',
				modelCuStat: 'headerDataStatS',
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
			}),
		}
	}
</script>