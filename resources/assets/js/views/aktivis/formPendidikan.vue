<template>
	<div>
	<form @submit.prevent="save" data-vv-scope="form">	
		<div class="row">

			<!-- tingkat -->
			<div class="col-sm-12">
				<div class="form-group" :class="{'has-error' : errors.has('form.tingkat')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.tingkat')}">
						<i class="icon-cross2" v-if="errors.has('form.tingkat')"></i>
						Tingkat:
					</h6>

					<!-- select -->
					<select class="form-control" name="tingkat" v-model="form.tingkat" data-width="100%" v-validate="'required'" data-vv-as="Tingkat pendidikan">
						<option disabled value="">Silahkan pilih tingkat pendidikan</option>
						<option value="TK">TK</option>
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
						<option value="LAIN-LAIN">Lain-lain</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.tingkat')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.tingkat') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- jurusan -->
			<div class="col-sm-12" v-if="form.tingkat != '' &&  form.tingkat != 'SD' && form.tingkat != 'SMP'">
				<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.name')}">
						<i class="icon-cross2" v-if="errors.has('form.name')"></i>
						Jurusan:</h6>

					<!-- text -->
					<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan jurusan" v-validate="'required'" data-vv-as="Jurusan pendidikan" v-model="form.name">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.name')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tempat -->
			<div class="col-sm-12" v-if="form.tingkat != ''">
				<div class="form-group" :class="{'has-error' : errors.has('form.tempat')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.tempat')}">
						<i class="icon-cross2" v-if="errors.has('form.tempat')"></i>
						Tempat:</h6>

					<!-- text -->
					<input type="text" name="tempat" class="form-control" placeholder="Silahkan masukkan tempat pendidikan" v-validate="'required|min:5'" data-vv-as="Tempat pendidikan" v-model="form.tempat">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.tempat')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.tempat') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tanggal mulai -->
			<div class="col-sm-6" v-if="form.tingkat != ''">
				<div class="form-group" :class="{'has-error' : errors.has('form.mulai')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.mulai')}">
						<i class="icon-cross2" v-if="errors.has('form.mulai')"></i>
						Tgl. Mulai:</h6>

					<!-- input -->
					<cleave 
						name="mulai"
						v-model="form.mulai" 
						class="form-control" 
						:raw="false" 
						:options="cleaveOption.date" 
						placeholder="Silahkan masukkan tgl. mulai"
						v-validate="'required'" data-vv-as="Tgl. mulai pendidikan"></cleave>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.mulai')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.mulai') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tanggal selesai -->
			<div class="col-sm-6" v-if="form.tingkat != ''">
				<div class="form-group">

					<!-- title -->
					<h6>Tgl. Selesai</h6>

					<!-- input -->
					<cleave 
						name="selesai"
						v-model="form.selesai" 
						class="form-control" 
						:raw="false" 
						:options="cleaveOption.date" 
						placeholder="Silahkan masukkan tgl. selesai"></cleave>

					<small class="text-muted">Kosongkan apabila masih menjalani pendidikan / belum mengetahui tanggal selesai pendidikan</small>
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

	export default {
		props:['formState','selected','id_aktivis'],
		components: {
			Cleave
		},
		data() {
			return {
				kelas: 'aktivis',
				form: {
					tingkat: '',
					name: '',
					tempat: '',
					mulai: '',
					selesai: '',
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
			if(this.formState == 'edit pendidikan'){
				this.form = this.selected;
			}
		},
		methods: {
			save(){
				let formData = {};
				formData.pendidikan = this.form;
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/savePendidikan', [this.id_aktivis, formData]);
						this.submited = false;
					}else{
						this.submited = true;
					}	
				});	
			},
			tutup(){
				this.$emit('tutup');
			}
		}
	}
</script>