<template>
	<div>
	<form @submit.prevent="save" data-vv-scope="form">
		<div class="row">

			<!-- nama -->
			<div class="col-sm-6">
				<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.name')}">
						<i class="icon-cross2" v-if="errors.has('form.name')"></i>
						Nama:</h6>

					<!-- text -->
					<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama" v-validate="'required'" data-vv-as="Nama organisasi" v-model="form.name">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.name')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- jabatan -->
			<div class="col-sm-6">
				<div class="form-group" :class="{'has-error' : errors.has('form.jabatan')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.jabatan')}">
						<i class="icon-cross2" v-if="errors.has('form.jabatan')"></i>
						Jabatan/Peran/Tanggungjawab:</h6>

					<!-- text -->
					<input type="text" name="jabatan" class="form-control" placeholder="Silahkan masukkan jabatan/peran/tanggungjawab " v-validate="'required|min:5'" data-vv-as="Jabatan/Peran/Tanggungjawab organisasi" v-model="form.jabatan">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.jabatan')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.jabatan') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tempat -->
			<div class="col-sm-12">
				<div class="form-group" :class="{'has-error' : errors.has('form.tempat')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.tempat')}">
						<i class="icon-cross2" v-if="errors.has('form.tempat')"></i>
						Tempat:</h6>

					<!-- text -->
					<input type="text" name="tempat" class="form-control" placeholder="Silahkan masukkan tempat " v-validate="'required|min:5'" data-vv-as="Tempat organisasi" v-model="form.tempat">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.tempat')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.tempat') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tanggal mulai -->
			<div class="col-sm-6">
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
						v-validate="'required'" data-vv-as="Tgl. mulai organisasi"></cleave>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.mulai')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.mulai') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tanggal selesai -->
			<div class="col-sm-6">
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

					<small class="text-muted">Kosongkan apabila masih aktif / tidak memiliki periode selesai</small>
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

			<button type="submit" class="btn btn-primary" :disabled="form.aktif == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">

			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="form.aktif == ''">
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
			if(this.formState == 'edit organisasi'){
				this.form = this.selected;
			}
		},
		methods: {
			save(){
				let formData = {};
				formData.organisasi = this.form;
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/saveOrganisasi', [this.id_aktivis, formData]);
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