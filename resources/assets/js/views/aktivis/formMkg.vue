<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="form">
			<h5>
				Golongan Ruang:
			</h5>
			<div class="row">
				<!-- select -->
				<div class="col-sm-2">
					<select name="tipe" data-width="100%" class="form-control" v-validate="'required'" v-model="form.gr_d">
						<option value="1">I</option>
						<option value="2">II</option>
						<option value="3">III</option>
						<option value="4">IV</option>
					</select>
				</div>
				<span style="font-size: 20px;">/</span>
				<div class="col-sm-2">
					<select name="tipe" data-width="100%" class="form-control" v-validate="'required'" v-model="form.gr_b">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option v-if="form.gr_d ==4" value="5">5</option>
					</select>
				</div>
			</div>

			<h5 :class="{ 'text-danger': errors.has('form.mkg') }" style="margin-top: 10px;">
							<i class="icon-cross2" v-if="errors.has('form.mkg')"></i>
							Masa Kerja Golongan:
						</h5>
			<div class="row" :class="{ 'has-error': errors.has('form.mkg') }">
				<!-- select -->
				<div class="col-sm-4">
					<input type="number" name="mkg" class="form-control" placeholder="Masukkan MKG saat ini" v-validate="'required'" data-vv-as="mkg" v-model="form.mkg">
				</div>
				<!-- error message -->
						<small class="text-muted text-danger" v-if="errors.has('form.mkg')">
							<i class="icon-arrow-small-right"></i> {{ errors.first('form.mkg') }}
						</small>
						<small class="text-muted" v-else>&nbsp;</small>
			</div>

			<h5 style="margin-top: 10px;">
				Pendidikan Tertinggi:
			</h5>
			<div class="row">
				<!-- select -->
				<div class="col-sm-4">
					<select name="pendidikan" data-width="100%" class="form-control" v-validate="'required'" v-model="form.pendidikan_tertinggi">
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
					</select>
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
	props: ['formState', 'selected', 'id_aktivis'],
	components: {
		Cleave,
		DatePicker,
	},
	data () {
		return {
			kelas: 'aktivis',
			form: {
				gr_b: '1',
				gr_d: '1',
				mkg: '',
				pendidikan_tertinggi: 'SD',
				id_aktivis: '',
				id_cu:'',
			},
			cleaveOption: {
				date: {
					date: true,
					datePattern: ['Y', 'm', 'd'],
					delimiter: '-'
				},
			}
		}
	},
	created () {
		if (this.selected) {
			this.form = this.selected;
		}
	},
	methods: {
		save () {
			let formData = {};
			// if (this.id_aktivis == this.currentUser.id_aktivis) {
			// 	this.form.id_aktivis = this.currentUser.id_aktivis
			// 	this.form.id_cu = this.currentUser.id_cu
			// } else { 
				this.form.id_aktivis = this.id_aktivis
				this.form.id_cu = this.currentUser.id_cu
			// }

			formData.mkg = this.form;
			this.$validator.validateAll('form').then((result) => {
				if (result) {
					this.$store.dispatch(this.kelas + '/saveMkg', [this.id_aktivis, formData]);
					this.submited = false;
				} else {
					this.submited = true;
				}
			});
		},
		tutup () {
			this.$emit('tutup');
		}
	},

	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),
		...mapGetters('cu', {
			modelCu: 'headerDataS',
			modelCuStat: 'headerDataStatS',
		}),
		...mapGetters('tp', {
			modelTp: 'dataS',
			modelTpStat: 'dataStatS',
		}),

		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),

		
	}
}
</script>