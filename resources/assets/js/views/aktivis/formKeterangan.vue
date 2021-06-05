<template>
	<div>
	<form @submit.prevent="save" data-vv-scope="form">
		<div class="row">

			<!-- tipe -->
			<div class="col-md-12">
				<div class="form-group" :class="{'has-error' : errors.has('form.jabatan')}">

					<!-- title -->
					<h5>
						Pilih tipe:
					</h5>

					<!-- select -->
					<select name="tipe" data-width="100%" class="form-control" v-validate="'required'" data-vv-as="Tipe" v-model="form.tipe">
						<option disabled value="">Silahkan pilih tipe</option>
						<option value="PENGHARGAAN">PENGHARGAAN</option>
						<option value="PELANGGARAN">PELANGGARAN</option>
						<option value="LAINNYA">LAINNYA</option>
					</select>

					<small class="text-muted">&nbsp;</small>
				</div>
			</div>

			<!-- nama -->
			<div class="col-sm-12">
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

			<!-- keterangan -->
			<div class="col-sm-12">
				<div class="form-group">

					<!-- title -->
					<h6>Keterangan:</h6>

					<!-- textarea -->
					<textarea rows="5" type="text" name="keterangan" class="form-control" placeholder="Silahkan masukkan keterangan" v-model="form.keterangan"></textarea>

				</div>
			</div>

			<!-- tanggal  -->
			<div class="col-sm-12">
				<div class="form-group" :class="{'has-error' : errors.has('form.tanggal')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.tanggal')}">
						<i class="icon-cross2" v-if="errors.has('form.tanggal')"></i>
						Tanggal:</h6>

					<!-- input -->
					<date-picker @dateSelected="form.tanggal = $event" :defaultDate="form.tanggal"></date-picker>
					<input v-model="form.tanggal" v-show="false" v-validate="'required'" data-vv-as="Tanggal"/>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.tanggal')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.tanggal') }}
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
	import DatePicker from "../../components/datePicker.vue";

	export default {
		props:['formState','selected','id_aktivis'],
		components: {
			Cleave,
			DatePicker,
		},
		data() {
			return {
				kelas: 'aktivis',
				form: {
					tipe: '',
					name: '',
					keterangan: '',
					tanggal: '',
				},
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
          },
        }
			}
		},
		created(){
			if(this.formState == 'edit keterangan'){
				this.form = this.selected;
			}
		},
		methods: {
			save(){
				let formData = {};
				formData.keterangan = this.form;
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/saveKeterangan', [this.id_aktivis, formData]);
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