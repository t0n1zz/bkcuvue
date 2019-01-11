<template>
	<div>
		<!-- name -->
		<div class="col-sm-12">
			<div class="form-group" :class="{'has-error' : errors.has('form.keluarga.name')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.keluarga.name')}">
					<i class="icon-cross2" v-if="errors.has('form.keluarga.name')"></i>
					Nama:</h5>

				<!-- text -->
				<input type="text" name="keluarga_name" class="form-control" placeholder="Silahkan masukkan nama keluarga" v-validate="'required|min:5'" data-vv-as="Nama Keluarga" v-model="form.keluarga.name">

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.keluarga.name')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.keluarga.name') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>
		</div>

		<!-- tipe -->
		<div class="col-sm-12">
			<div class="form-group" :class="{'has-error' : errors.has('form.keluarga.tipe')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.keluarga.tipe')}">
					<i class="icon-cross2" v-if="errors.has('form.keluarga.tipe')"></i>
					Sebagai:</h5>

				<!-- select -->
				<select class="form-control" name="pekerjaan_tingkat" v-model="form.keluarga.tipe" data-width="100%" v-validate="'required'" data-vv-as="Tipe keluarga">
					<option disabled value="">Silahkan pilih tipe keluarga</option>
					<option value="Ayah">Ayah</option>
					<option value="Ibu">Ibu</option>
					<option value="Pasangan">Pasangan</option>
					<option value="Anak">Anak</option>
				</select>

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.keluarga.tipe')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.keluarga.tipe') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import Cleave from 'vue-cleave-component';

	export default {
		props:['form','modelCu'],
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