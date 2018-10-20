<template>
	<div>
		<div class="row">
		
			<!-- Provinsi -->
			<div class="col-md-4">
				<div class="form-group" :class="{'has-error' : errors.has('form.id_provinces')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.id_provinces')}">
						<i class="icon-cross2" v-if="errors.has('form.id_provinces')"></i>
						Provinsi:
					</h6>

					<!-- select -->
					<select class="form-control" name="id_provinces" v-model="form.id_provinces" data-width="100%" v-validate="'required'" data-vv-as="Provinsi" :disabled="modelProvinces.length == 0" @change="changeProvinces($event.target.value)">
						<option disabled value="">Silahkan pilih Provinsi</option>
						<option v-for="provinces in modelProvinces" :value="provinces.id">{{provinces.name}}</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.id_provinces')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_provinces') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- kabupaten -->
			<div class="col-md-4">
				<div class="form-group" :class="{'has-error' : errors.has('form.id_regencies')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.id_regencies')}">
						<i class="icon-cross2" v-if="errors.has('form.id_regencies')"></i>
						Kabupaten: 
					</h6>

					<!-- select -->
					<select class="form-control"  name="id_regencies" v-model="form.id_regencies" data-width="100%" v-validate="'required'" data-vv-as="Kabupaten" @change="changeRegencies($event.target.value)" :disabled="modelRegencies.length === 0">
						<option disabled value="">
							<span v-if="modelRegenciesStat === 'loading'"><i class="icon-spinner spinner"></i></span>
							<span v-else>Silahkan pilih kabupaten</span>
						</option>
						<option v-for="regencies in modelRegencies" :value="regencies.id">{{regencies.name}}</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.id_regencies')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_regencies') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- kecamatan -->
			<div class="col-md-4">
				<div class="form-group" :class="{'has-error' : errors.has('form.id_districts')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.id_districts')}">
						<i class="icon-cross2" v-if="errors.has('form.id_districts')"></i>
						Kecamatan:
					</h6>

					<!-- select -->
					<select class="form-control"  name="id_districts" v-model="form.id_districts" data-width="100%" v-validate="'required'" data-vv-as="Kabupaten" :disabled="modelDistricts.length === 0" @change="changeDistricts($event.target.value)">
						<option disabled value="">
							<span v-if="modelDistrictsStat === 'loading'"><i class="icon-spinner spinner"></i></span>
							<span v-else>Silahkan pilih kecamatan</span>
						</option>
						<option v-for="districts in modelDistricts" :value="districts.id">{{districts.name}}</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.id_regency')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_regency') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- kelurahan -->
			<div class="col-md-4">
				<div class="form-group" :class="{'has-error' : errors.has('form.id_villages')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.id_villages')}">
						<i class="icon-cross2" v-if="errors.has('form.id_villages')"></i>
						Kelurahan:
					</h6>

					<!-- select -->
					<select class="form-control"  name="id_villages" v-model="form.id_villages" data-width="100%" v-validate="'required'" data-vv-as="Desa" :disabled="modelVillages.length === 0">
						<option disabled value="">
							<span v-if="modelVillagesStat === 'loading'"><i class="icon-spinner spinner"></i> mohon tunggu</span>
							<span v-else>Silahkan pilih kelurahan</span>
						</option>
						<option v-for="villages in modelVillages" :value="villages.id">{{villages.name}}</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.id_villages')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_villages') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- alamat -->
			<div class="col-md-8">
				<div class="form-group" :class="{'has-error' : errors.has('form.alamat')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.alamat')}">
						<i class="icon-cross2" v-if="errors.has('form.alamat')"></i>
						Alamat:</h6>

					<!-- text -->
					<input type="text" name="alamat" class="form-control" placeholder="Silahkan masukkan alamat" v-validate="'required|min:5'" data-vv-as="Alamat" v-model="form.alamat">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.alamat')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.alamat') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
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
					<input type="text" name="email" class="form-control" placeholder="Silahkan masukkan alamat email" v-validate="'required|email'" data-vv-as="Email" v-model="form.email">

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
					<h6>Kotak Lainnya:</h6>

					<!-- text -->
					<input type="text" name="kontak" class="form-control" placeholder="Silahkan masukkan kontak lainnya" v-model="form.kontak">

				</div>
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
		created(){
			this.fetch();
		},
		methods: {
			fetch(){
				this.$store.dispatch('provinces/get');
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
		},
		computed: {
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