<template>
	<div>
		<!-- name -->
		<div class="col-sm-12">
			<div class="form-group" :class="{'has-error' : errors.has('form.anggota_cu.cu_name')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.anggota_cu.cu_name')}">
					<i class="icon-cross2" v-if="errors.has('form.anggota_cu.cu_name')"></i>
					Nama CU</h5>

				<!-- text -->
				<input type="text" name="anggota_cu_name" class="form-control" placeholder="Silahkan masukkan nama CU" v-validate="'required|min:5'" data-vv-as="Nama CU" v-model="form.anggota_cu.name">

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.anggota_cu.cu_name')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.anggota_cu.cu_name') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>
		</div>

		<!-- no_ba -->
		<div class="col-sm-12">
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