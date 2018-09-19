<template>
	<div>
		<div class="row">
			<!-- foto -->
			<div class="col-md-12">
				<div class="form-group">

					<!-- title -->
					<h6>Foto:</h6>

					<!-- imageupload -->
					<app-image-upload :image_loc="'/images/tp/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
				</div>
			</div>  

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
						:options="cleaveOption.number12"
						placeholder="Silahkan masukkan no KTP"
						v-validate="'required'" data-vv-as="No. KTP"></cleave>
					

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
					<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama" v-validate="'required|min:5'" data-vv-as="Nama" v-model="form.name">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.name')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
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
					<select class="form-control" name="kelamin" v-model="form.kelamin" data-width="100%" v-validate="'required'" data-vv-as="Gender">
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
				<div class="form-group" :class="{'has-error' : errors.has('form.darah')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.darah')}">
						<i class="icon-cross2" v-if="errors.has('form.darah')"></i>
						Gol. Darah:
					</h6>

					<!-- select -->
					<select class="form-control" name="darah" v-model="form.darah" data-width="100%" v-validate="'required'" data-vv-as="Gol. Darah">
						<option disabled value="">Silahkan pilih golongan darah</option>
						<option value="A">A</option>
						<option value="B">B</option>
						<option value="AB">AB</option>
						<option value="O">O</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.darah')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.darah') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tinggi -->
			<div class="col-md-4">
				<div class="form-group" :class="{'has-error' : errors.has('form.tinggi')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.tinggi')}">
						<i class="icon-cross2" v-if="errors.has('form.tinggi')"></i>
						Tinggi <small>(cm)</small>:</h6>

					<!-- text -->
					<cleave 
						name="tinggi"
						v-model="form.tinggi" 
						class="form-control" 
						:options="cleaveOption.number3"
						placeholder="Silahkan masukkan tinggi"
						v-validate="'required'" data-vv-as="Tinggi"></cleave>
					

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.tinggi')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.tinggi') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- agama -->
			<div class="col-md-4">
				<div class="form-group" :class="{'has-error' : errors.has('form.agama')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.agama')}">
						<i class="icon-cross2" v-if="errors.has('form.agama')"></i>
						Agama:
					</h6>

					<!-- select -->
					<select class="form-control" name="agama" v-model="form.agama" data-width="100%" v-validate="'required'" data-vv-as="Agama">
						<option disabled value="">Silahkan pilih agama</option>
						<option value="Buddha">Buddha</option>
						<option value="Hindu">Hindu</option>
						<option value="Islam">Islam</option>
						<option value="Khatolik">Khatolik</option>
						<option value="Kong Hu Cu">Kong Hu Cu</option>
						<option value="Protestan">Protestan</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.agama')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.agama') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tanggal lahir -->
			<div class="col-md-4">
				<div class="form-group" :class="{'has-error' : errors.has('form.tanggal_lahir')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.tanggal_lahir')}">
						<i class="icon-cross2" v-if="errors.has('form.tanggal_lahir')"></i>
						Tgl. Lahir:</h6>

					<!-- input -->
					<cleave 
						name="tanggal_lahir"
						v-model="form.tanggal_lahir" 
						class="form-control" 
						:raw="false" 
						:options="cleaveOption.date" 
						placeholder="Silahkan masukkan tgl. lahir"
						v-validate="'required'" data-vv-as="Tgl. lahir"></cleave>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.tanggal_lahir')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.tanggal_lahir') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tempat lahir -->
			<div class="col-md-4">
				<div class="form-group" :class="{'has-error' : errors.has('form.tempat_lahir')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.tempat_lahir')}">
						<i class="icon-cross2" v-if="errors.has('form.tempat_lahir')"></i>
						Tempat Lahir:</h6>

					<!-- text -->
					<input type="text" name="tempat_lahir" class="form-control" placeholder="Silahkan masukkan tempat lahir" v-validate="'required|min:5'" data-vv-as="Tempat lahir" v-model="form.tempat_lahir">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.tempat_lahir')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.tempat_lahir') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- status -->
			<div class="col-md-4">
				<div class="form-group" :class="{'has-error' : errors.has('form.status')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.status')}">
						<i class="icon-cross2" v-if="errors.has('form.status')"></i>
						Status:
					</h6>

					<!-- select -->
					<select class="form-control" name="status" v-model="form.status" data-width="100%" v-validate="'required'" data-vv-as="Status Pernikahan">
						<option disabled value="">Silahkan pilih status pernikahan</option>
						<option value="Belum menikah">Belum menikah</option>
						<option value="Menikah">Menikah</option>
						<option value="Janda/Duda">Janda/Duda</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.status')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.status') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import Cleave from 'vue-cleave-component';
	import appImageUpload from '../../components/ImageUpload.vue';

	export default {
		props:['form'],
		components: {
			appImageUpload,
			Cleave
		},
		data() {
			return {
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
		methods: {
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
		}
	}
</script>