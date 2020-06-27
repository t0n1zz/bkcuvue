<template>
	<div>
	<form @submit.prevent="save" data-vv-scope="form">
		<div class="row">

			<!-- CU -->
			<div class="col-sm-12" v-if="currentUser.id_cu == 0">
				<div class="form-group" :class="{'has-error' : errors.has('form.id_tempat')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.id_tempat')}">
						<i class="icon-cross2" v-if="errors.has('form.id_tempat')"></i>
						Tempat:
					</h6>

					<!-- select -->
					<select class="form-control" name="id_tempat" v-model="form.id_tempat" data-width="100%" v-validate="'required'" data-vv-as="Tempat pekerjaan" :disabled="modelCu.length == 0" @change="changeLembagaPekerjaan($event.target.value)">
						<option disabled value="">
							<span v-if="modelCuStat === 'loading'">Mohon tunggu...</span>
							<span v-else>Silahkan pilih tempat bekerja</span>
						</option>
						<option value="0">Puskopdit BKCU Kalimantan</option>
						<option value="lain" v-if="$route.meta.mode != 'create'">Lembaga lain</option>
						<option v-for="(cu, index) in modelCu" :value="cu.id" :key="index">{{cu.name}}</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.id_tempat')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_tempat') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- lembaga lain -->
			<div class="col-sm-12" v-if="form && form.id_tempat == 'lain'">
				<div class="form-group" :class="{'has-error' : errors.has('form.lembaga_lain')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.lembaga_lain')}">
						<i class="icon-cross2" v-if="errors.has('form.lembaga_lain')"></i>
						Lembaga:</h6>

					<!-- text -->
					<input type="text" name="lembaga" class="form-control" placeholder="Silahkan masukkan nama lembaga" v-validate="'required|min:5'" data-vv-as="Lembaga" v-model="form.lembaga_lain">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.name')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- status -->
			<div class="col-md-12" v-if="form.id_tempat != ''">
				<div class="form-group">

					<!-- title -->
					<h5>
						Pilih status pekerjaan:
					</h5>

					<!-- select -->
					<select name="status" data-width="100%" class="form-control" v-model="form.status">
						<option disabled value="">Silahkan pilih status pekerjaan</option>
						<option value="1">Pekerjaan saat ini dan masih bekerja</option>
						<option value="2">Riwayat pekerjaan sebelumnya</option>
						<option value="3">Pekerjaan terakhir dan tidak bekerja lagi</option>
					</select>

					<small class="text-muted">&nbsp;</small>
				</div>
			</div>

			<!-- tingkat -->
			<div class="col-sm-12" v-if="form.status != ''">
				<div class="form-group" :class="{'has-error' : errors.has('form.tingkat')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.tingkat')}">
						<i class="icon-cross2" v-if="errors.has('form.tingkat')"></i>
						Tingkat:
					</h6>

					<!-- select -->
					<select class="form-control" name="pekerjaan_tingkat" v-model="form.tingkat" data-width="100%" v-validate="'required'" data-vv-as="Tingkat Pekerjaan">
						<option disabled value="">Silahkan pilih tingkat pekerjaan</option>
						<option value="1" v-if="form.id_tempat != 'lain'">Pengurus</option>
						<option value="2" v-if="form.id_tempat != 'lain'">Pengawas</option>
						<option value="3" v-if="form.id_tempat != 'lain'">Komite</option>
						<option value="4" v-if="form.id_tempat != 'lain'">Penasihat</option>
						<option value="5">Senior Manajer (General Manager, CEO, Deputy)</option>
						<option value="6">Manajer</option>
						<option value="7">Supervisor (Kepala Bagian, Kepala Divisi, Kepala/Koordinator TP, Kepala Bidang)</option>
						<option value="8">Staf</option>
						<option value="9">Kontrak</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.tingkat')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.tingkat') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- jabatan -->
			<div class="col-sm-6" v-if="form.tingkat != ''">
				<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.name')}">
						<i class="icon-cross2" v-if="errors.has('form.name')"></i>
						Jabatan:</h6>

					<!-- text -->
					<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama jabatan" v-validate="'required'" data-vv-as="Jabatan pekerjaan" v-model="form.name">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.name')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tp -->
			<div class="col-sm-6" v-if="form.tipe == 1 && form.tingkat != '1' && form.tingkat != '2' && form.tingkat != '3' && form.tingkat != '4' && form.tingkat != ''">
				<div class="form-group" :class="{'has-error' : errors.has('form.id_tp')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.id_tp')}">
						<i class="icon-cross2" v-if="errors.has('form.id_tp')"></i>
						TP/KP:
					</h6>

					<!-- select -->
					<select class="form-control" name="id_tp" v-model="form.id_tp" data-width="100%" v-validate="'required'" data-vv-as="CU">
						<option disabled value="">
							<span v-if="modelTpStat === 'loading'">Mohon tunggu...</span>
							<span v-else>Silahkan pilih TP/KP</span>
						</option>
						<option value="0">Kantor Pusat</option>
						<template v-if="modelTp">
							<option v-for="(tp, index) in modelTp" :value="tp.id" :key="index">{{tp.name}}</option>
						</template>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.id_tp')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_tp') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tanggal mulai -->
			<div class="col-sm-12" v-if="form.tingkat != ''">
				<div class="form-group" :class="{'has-error' : errors.has('form.mulai')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.mulai')}">
						<i class="icon-cross2" v-if="errors.has('form.mulai')"></i>
						Tgl. Mulai:</h6>

					<!-- input -->
					<date-picker @dateSelected="form.mulai = $event" :defaultDate="form.mulai"></date-picker>	
					<input v-model="form.mulai" v-show="false" v-validate="'required'" data-vv-as="Tgl. mulai bekerja"/>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.mulai')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.mulai') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tanggal selesai -->
			<div class="col-sm-12" v-if="form.status != '' && form.tingkat != '' &&form.status != '1'">
				<div class="form-group">

					<!-- title -->
					<h6>Tgl. Selesai</h6>

					<!-- input -->
					<date-picker @dateSelected="form.selesai = $event" :defaultDate="form.selesai"></date-picker>

					<small class="text-muted">&nbsp;</small>	
				</div>
			</div>

			<!-- keterangan -->
			<div class="col-sm-12" v-if="form.status != '' && form.tingkat != '' && form.status == '3'">
				<div class="form-group">

					<!-- title -->
					<h6>Keterangan Tidak Bekerja:</h6>

					<!-- text -->
					<input type="text" name="keterangan_tidak_aktif" class="form-control" placeholder="Silahkan masukkan keterangan tidak bekerja" v-model="form.keterangan_tidak_aktif">

				</div>
			</div>

		</div>	

		<!-- divider -->
		<hr>

		<!-- button -->
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button type="submit" class="btn btn-primary" :disabled="form.tingkat == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">

			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="form.tingkat == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>

			<button type="button" class="btn btn-light btn-block pb-2" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>
		</div> 
	</form>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import Cleave from 'vue-cleave-component';
	import DatePicker from "../../components/datePicker.vue";

	export default {
		props:['formState','selected','id_aktivis'],
		components: {
			Cleave,
			DatePicker
		},
		data() {
			return {
				kelas: 'aktivis',
				form:{
					anggota_id: '',
					id_tempat: '',
					id_tp: '',
					tipe: '',
					lembaga_lain:'',
					name:'',
					tingkat:'',
					mulai:'',
					selesai:'',
					cu: {
						id: 0,
						name: ''
					},
					status: ''
				},
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
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
        }
			}
		},
		created(){
			if(this.currentUser.id_cu != 0){
				this.form.id_tempat = this.currentUser.id_cu;
				this.changeLembagaPekerjaan(this.currentUser.id_cu);
			}else{
				this.fetchCU();
			}

			if(this.formState == 'edit pekerjaan'){
				this.form = this.selected;
			}
		},
		methods: {
			fetchCU(){
				if(this.formStateCuStat != 'success'){
					this.$store.dispatch('cu/getHeader');
				}
			},
			changeLembagaPekerjaan(value){
				if(value == 0){
					this.form.tipe = 3;
				}else if(value == 'lain'){
					this.form.tipe = 2;
				}else{
					this.form.tipe = 1;
					this.$store.dispatch('tp/getCu',value);
				}
			},
			save(){
				let formData = {};
				formData.pekerjaan = this.form;
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/savePekerjaan', [this.id_aktivis, formData]);
						this.submited = false;
					}else{
						this.submited = true;
					}	
				});	
			},
			tutup(){
				this.$emit('tutup');
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('cu',{
				modelCu: 'headerDataS',
				modelCuStat: 'headerDataStatS',
			}),
			...mapGetters('tp',{
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
			}),
		}
	}
</script>