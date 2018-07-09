<template>
	<div>
		<!-- tingkat -->
		<div class="col-md-4">
			<div class="form-group" :class="{'has-error' : errors.has('form.organisasi.aktif')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.organisasi.aktif')}">
					<i class="icon-cross2" v-if="errors.has('form.organisasi.aktif')"></i>
					Aktif dalam organisasi lain?
				</h5>

				<!-- select -->
				<select class="bootstrap-select" name="organisasi_aktif" v-model="form.organisasi.aktif" data-width="100%" v-validate="'required'" data-vv-as="Aktif Organisasi">
					<option disabled value="">Apakah aktif dalam organisasi lain?</option>
					<option data-divider="true"></option>
					<option value="Ya">Ya</option>
					<option value="Tidak">Tidak</option>
				</select>

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.organisasi.aktif')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.organisasi.aktif') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>
		</div>

		<!-- nama -->
		<div class="col-md-4" v-if="form.organisasi.aktif == 'Ya'">
			<div class="form-group" :class="{'has-error' : errors.has('form.organisasi.name')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.organisasi.name')}">
					<i class="icon-cross2" v-if="errors.has('form.organisasi.name')"></i>
					Nama:</h5>

				<!-- text -->
				<input type="text" name="organisasi_name" class="form-control" placeholder="Silahkan masukkan nama" v-validate="'required|min:5'" data-vv-as="Nama organisasi" v-model="form.organisasi.name">

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.organisasi.name')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.organisasi.name') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>
		</div>

		<!-- jabatan -->
		<div class="col-md-4" v-if="form.organisasi.aktif == 'Ya'">
			<div class="form-group" :class="{'has-error' : errors.has('form.organisasi.jabatan')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.organisasi.jabatan')}">
					<i class="icon-cross2" v-if="errors.has('form.organisasi.jabatan')"></i>
					Jabatan/Peran/Tanggungjawab:</h5>

				<!-- text -->
				<input type="text" name="organisasi_name" class="form-control" placeholder="Silahkan masukkan jabatan/peran/tanggungjawab " v-validate="'required|min:5'" data-vv-as="Jabatan/Peran/Tanggungjawab organisasi" v-model="form.organisasi.jabatan">

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.organisasi.jabatan')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.organisasi.jabatan') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>
		</div>

		<!-- tempat -->
		<div class="col-md-4" v-if="form.organisasi.aktif == 'Ya'">
			<div class="form-group" :class="{'has-error' : errors.has('form.organisasi.tempat')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.organisasi.tempat')}">
					<i class="icon-cross2" v-if="errors.has('form.organisasi.tempat')"></i>
					Tempat:</h5>

				<!-- text -->
				<input type="text" name="organisasi_tempat" class="form-control" placeholder="Silahkan masukkan tempat " v-validate="'required|min:5'" data-vv-as="Tempat organisasi" v-model="form.organisasi.tempat">

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.organisasi.tempat')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.organisasi.tempat') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>
		</div>

		<!-- tanggal mulai -->
		<div class="col-md-4" v-if="form.organisasi.aktif == 'Ya'">
			<div class="form-group" :class="{'has-error' : errors.has('form.organisasi.mulai')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.organisasi.mulai')}">
					<i class="icon-cross2" v-if="errors.has('form.organisasi.mulai')"></i>
					Tgl. Mulai:</h5>

				<!-- input -->
				<cleave 
					name="organisasi_mulai"
					v-model="form.organisasi.mulai" 
					class="form-control" 
					:raw="false" 
					:options="cleaveOption.date" 
					placeholder="Silahkan masukkan tgl. mulai"
					v-validate="'required'" data-vv-as="Tgl. mulai organisasi"></cleave>

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.organisasi.mulai')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.organisasi.mulai') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>
		</div>

		<!-- tanggal selesai -->
		<div class="col-md-4" v-if="form.organisasi.aktif == 'Ya'">
			<div class="form-group">

				<!-- title -->
				<h5>Tgl. Selesai</h5>

				<!-- input -->
				<cleave 
					name="organisasi_selesai"
					v-model="form.organisasi.selesai" 
					class="form-control" 
					:raw="false" 
					:options="cleaveOption.date" 
					placeholder="Silahkan masukkan tgl. selesai"></cleave>

				<small class="text-muted">Kosongkan apabila masih aktif / tidak memiliki periode selesai</small>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import Cleave from 'vue-cleave-component';

	export default {
		props:['form'],
		components: {
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