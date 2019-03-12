<template>
	<div>
		<div class="row">
			<!-- foto -->
			<div class="col-md-12">
				<div class="form-group">

					<!-- title -->
					<h6>Foto:</h6>

					<!-- imageupload -->
					<app-image-upload :image_loc="'/images/aktivis/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
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

			<!-- nim_cu -->
			<div class="col-md-4">
				<div class="form-group">

					<!-- title -->
					<h6>
						NIM Lembaga:</h6>

					<!-- text -->
					<cleave 
						name="nik"
						v-model="form.nim_cu" 
						class="form-control" 
						:options="cleaveOption.number24"
						placeholder="Silahkan masukkan no induk manajemen lembaga"></cleave>

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
					<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama" v-validate="'required'" data-vv-as="Nama" v-model="form.name">

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
				<div class="form-group" >

					<!-- title -->
					<h6>
						Tinggi <small>(cm)</small>:</h6>

					<!-- text -->
					<cleave 
						name="tinggi"
						v-model="form.tinggi" 
						class="form-control" 
						:options="cleaveOption.number3"
						placeholder="Silahkan masukkan tinggi"></cleave>
					
				</div>
			</div>

			<!-- agama -->
			<div class="col-md-4">
				<div class="form-group">

					<!-- title -->
					<h6>
						Agama:
					</h6>

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
				<div class="form-group" >

					<!-- title -->
					<h6>Tgl. Lahir: <info-icon :message="'Format: tahun-bulan-tanggal dalam angka. Contoh: 2019-01-23'"></info-icon></h6>

					<!-- input -->
					<cleave 
						name="tanggal_lahir"
						v-model="form.tanggal_lahir" 
						class="form-control" 
						:raw="false" 
						:options="cleaveOption.date" 
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
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import Cleave from 'vue-cleave-component';
	import appImageUpload from '../../components/ImageUpload.vue';
	import infoIcon from "../../components/infoIcon.vue";

	export default {
		props:['form'],
		components: {
			appImageUpload,
			Cleave,
			infoIcon
		},
		data() {
			return {
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
          },
          number24: {
            numeral: true,
            numeralIntegerScale: 24,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
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