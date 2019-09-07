<template>
	<div>
	<form @submit.prevent="save" data-vv-scope="form">	
		<div class="row">

			<!-- name -->
			<div class="col-sm-6">
				<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.name')}">
						<i class="icon-cross2" v-if="errors.has('form.name')"></i>
						Nama Diklat:</h6>

					<!-- text -->
					<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama diklat" v-validate="'required'" data-vv-as="Nama Diklat" v-model="form.name">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.name')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tempat -->
			<div class="col-sm-6">
				<div class="form-group" :class="{'has-error' : errors.has('form.tempat')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.tempat')}">
						<i class="icon-cross2" v-if="errors.has('form.tempat')"></i>
						Tempat:</h6>

					<!-- text -->
					<input type="text" name="tempat" class="form-control" placeholder="Silahkan masukkan tempat diklat" v-validate="'required'" data-vv-as="Tempat diklat" v-model="form.tempat">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.tempat')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.tempat') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- lembaga -->
			<div class="col-sm-6">
				<div class="form-group" :class="{'has-error' : errors.has('form.lembaga')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.lembaga')}">
						<i class="icon-cross2" v-if="errors.has('form.lembaga')"></i>
						Nama Lembaga Penyelenggara:</h6>

					<!-- text -->
					<input type="text" name="lembaga" class="form-control" placeholder="Silahkan masukkan nama lembaga penyelenggara diklat" v-validate="'required'" data-vv-as="Tempat diklat" v-model="form.lembaga">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.lembaga')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.lembaga') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<div class="col-sm-6">
				<div class="form-group">

					<!-- title -->
					<h6>Nama fasilitator:</h6>

					<!-- text -->
					<input type="text" name="fasilitator" class="form-control" placeholder="Silahkan masukkan nama fasilitator penyelenggara diklat" v-model="form.fasilitator">

				</div>
			</div>

			<!-- tanggal datang -->
			<div class="col-sm-6">
				<div class="form-group" :class="{'has-error' : errors.has('form.datang')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.datang')}">
						<i class="icon-cross2" v-if="errors.has('form.datang')"></i>
						Tgl. Mulai:</h6>

					<!-- input -->
					<cleave 
						name="datang"
						v-model="form.datang" 
						class="form-control" 
						:raw="false" 
						:options="cleaveOption.date" 
						placeholder="Silahkan masukkan tgl. mulai"
						v-validate="'required'" data-vv-as="Tgl. mulai"></cleave>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.datang')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.datang') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tanggal pulang -->
			<div class="col-sm-6">
				<div class="form-group" :class="{'has-error' : errors.has('form.pulang')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.pulang')}">
						<i class="icon-cross2" v-if="errors.has('form.pulang')"></i>
						Tgl. Selesai:</h6>

					<!-- input -->
					<cleave 
						name="pulang"
						v-model="form.pulang" 
						class="form-control" 
						:raw="false" 
						:options="cleaveOption.date" 
						placeholder="Silahkan masukkan tgl. selesai"
						v-validate="'required'" data-vv-as="Tgl. selesai"></cleave>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.pulang')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.pulang') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
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

			<button type="submit" class="btn btn-primary">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">

			<button type="submit" class="btn btn-primary btn-block pb-2">
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
		props:['formState','selected'],
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
			if(this.formState == 'edit diklat'){
				this.form = this.selected;
			}
		},
		methods: {
			save(){
				let formData = {};
				formData.diklat = this.form;
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/saveDiklat', [this.$route.params.id, formData]);
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