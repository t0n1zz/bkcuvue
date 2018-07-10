<template>
	<div>
		<!-- tingkat -->
		<div class="col-sm-12">
			<div class="form-group" :class="{'has-error' : errors.has('form.pendidikan.tingkat')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.pendidikan.tingkat')}">
					<i class="icon-cross2" v-if="errors.has('form.pendidikan.tingkat')"></i>
					Tingkat:
				</h5>

				<!-- select -->
				<select class="form-control" name="pendidikan_tingkat" v-model="form.pendidikan.tingkat" data-width="100%" v-validate="'required'" data-vv-as="Tingkat pendidikan">
					<option disabled>Silahkan pilih tingkat pendidikan</option>
					<option value="SD">SD</option>
					<option value="SMP">SMP</option>
					<option value="SMA/SMK">SMA/SMK</option>
					<option value="D1">D1</option>
					<option value="D2">D2</option>
					<option value="D3">D3</option>
					<option value="D4">D4</option>
					<option value="S1">S1</option>
					<option value="S2">S2</option>
					<option value="S3">S3</option>
					<option value="Lain-lain">Lain-lain</option>
				</select>

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.pendidikan.tingkat')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.pendidikan.tingkat') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>
		</div>

		<!-- jurusan -->
		<div class="col-sm-12" v-if="form.pendidikan.tingkat != '' &&  form.pendidikan.tingkat != 'SD' && form.pendidikan.tingkat != 'SMP'">
			<div class="form-group" :class="{'has-error' : errors.has('form.pendidikan.name')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.pendidikan.name')}">
					<i class="icon-cross2" v-if="errors.has('form.pendidikan.name')"></i>
					Jurusan:</h5>

				<!-- text -->
				<input type="text" name="jurusan" class="form-control" placeholder="Silahkan masukkan jurusan" v-validate="'required|min:5'" data-vv-as="Jurusan pendidikan" v-model="form.pendidikan.name">

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.pendidikan.name')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.pendidikan.name') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>
		</div>

		<!-- tempat -->
		<div class="col-sm-12" v-if="form.pendidikan.tingkat != ''">
			<div class="form-group" :class="{'has-error' : errors.has('form.pendidikan.tempat')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.pendidikan.tempat')}">
					<i class="icon-cross2" v-if="errors.has('form.pendidikan.tempat')"></i>
					Tempat:</h5>

				<!-- text -->
				<input type="text" name="pendidikan_tempat" class="form-control" placeholder="Silahkan masukkan tempat pendidikan" v-validate="'required|min:5'" data-vv-as="Tempat pendidikan" v-model="form.pendidikan.tempat">

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.pendidikan.tempat')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.pendidikan.tempat') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>
		</div>

		<!-- tanggal mulai -->
		<div class="col-sm-6" v-if="form.pendidikan.tingkat != ''">
			<div class="form-group" :class="{'has-error' : errors.has('form.pendidikan.mulai')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.pendidikan.mulai')}">
					<i class="icon-cross2" v-if="errors.has('form.pendidikan.mulai')"></i>
					Tgl. Mulai:</h5>

				<!-- input -->
				<cleave 
					name="pendidikan_mulai"
					v-model="form.pendidikan.mulai" 
					class="form-control" 
					:raw="false" 
					:options="cleaveOption.date" 
					placeholder="Silahkan masukkan tgl. mulai"
					v-validate="'required'" data-vv-as="Tgl. mulai pendidikan"></cleave>

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.pendidikan.mulai')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.pendidikan.mulai') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>
		</div>

		<!-- tanggal selesai -->
		<div class="col-sm-6" v-if="form.pendidikan.tingkat != ''">
			<div class="form-group">

				<!-- title -->
				<h5>Tgl. Selesai</h5>

				<!-- input -->
				<cleave 
					name="pendidikan_selesai"
					v-model="form.pendidikan.selesai" 
					class="form-control" 
					:raw="false" 
					:options="cleaveOption.date" 
					placeholder="Silahkan masukkan tgl. selesai"></cleave>

				<small class="text-muted">Kosongkan apabila masih menjalani pendidikan / belum mengetahui tanggal selesai pendidikan</small>
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