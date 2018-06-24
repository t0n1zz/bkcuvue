<template>
	<div>
		<!-- CU -->
		<div class="col-md-4" v-if="profile.id_cu == 0">
			<div class="form-group" :class="{'has-error' : errors.has('form.anggota_cu.id_tempat')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.anggota_cu.id_tempat')}">
					<i class="icon-cross2" v-if="errors.has('form.anggota_cu.id_tempat')"></i>
					CU:
				</h5>

				<!-- select -->
				<select class="bootstrap-select" name="cu_anggota" v-model="form.anggota_cu.name" data-width="100%" v-validate="'required'" data-vv-as="CU anggota" :disabled="modelCu.length == 0">
					<option disabled value="">Silahkan pilih CU</option>
					<option data-divider="true"></option>
					<option value="lain">CU diluar gerakan</option>
					<option data-divider="true"></option>
					<option v-for="cu in modelCu" :value="cu.name">{{cu.name}}</option>
				</select>

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.anggota_cu.id_tempat')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.anggota_cu.id_tempat') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>
		</div>

		<!-- no_ba -->
		<div class="col-md-4" v-if="form.anggota_cu.name == 'lain'">
			<div class="form-group" :class="{'has-error' : errors.has('form.anggota_cu.cu_name')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.anggota_cu.cu_name')}">
					<i class="icon-cross2" v-if="errors.has('form.anggota_cu.cu_name')"></i>
					Nama CU</h5>

				<!-- text -->
				<input type="text" name="anggota_cu_name" class="form-control" placeholder="Silahkan masukkan nama CU" v-validate="'required|min:5'" data-vv-as="Nama CU" v-model="form.anggota_cu.cu_name">

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.anggota_cu.cu_name')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.anggota_cu.cu_name') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>
		</div>

		<!-- no_ba -->
		<div class="col-md-4" v-if="form.anggota_cu.name != ''">
			<div class="form-group" :class="{'has-error' : errors.has('form.anggota_cu.no_ba')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.anggota_cu.no_ba')}">
					<i class="icon-cross2" v-if="errors.has('form.anggota_cu.no_ba')"></i>
					No. BA:</h5>

				<!-- text -->
				<input type="text" name="anggota_no_ba" class="form-control" placeholder="Silahkan masukkan no. BA anggota CU" v-validate="'required|min:5'" data-vv-as="No. BA Anggota CU" v-model="form.anggota_cu.no_ba">

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.anggota_cu.no_ba')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.anggota_cu.no_ba') }}
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