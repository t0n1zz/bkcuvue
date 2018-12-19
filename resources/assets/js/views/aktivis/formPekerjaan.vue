<template>
	<div>
		<div class="row">

			<!-- CU -->
			<div class="col-sm-12" v-if="currentUser.id_cu == 0">
				<div class="form-group" :class="{'has-error' : errors.has('form.pekerjaan.id_tempat')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.pekerjaan.id_tempat')}">
						<i class="icon-cross2" v-if="errors.has('form.pekerjaan.id_tempat')"></i>
						Tempat:
					</h6>

					<!-- select -->
					<select class="form-control" name="id_tempat" v-model="form.pekerjaan.id_tempat" data-width="100%" v-validate="'required'" data-vv-as="Tempat pekerjaan" :disabled="modelCu.length == 0" @change="changeLembagaPekerjaan($event.target.value)">
						<option disabled value="">Silahkan pilih tempat bekerja</option>
						<option value="0">Puskopdit BKCU Kalimantan</option>
						<option value="lain" v-if="$route.meta.mode != 'create'">Lembaga lain</option>
						<option v-for="cu in modelCu" :value="cu.id">{{cu.name}}</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.pekerjaan.id_tempat')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.pekerjaan.id_tempat') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tempat -->
			<div class="col-sm-12" v-if="form.pekerjaan && form.pekerjaan.id_tempat == 'lain'">
				<div class="form-group" :class="{'has-error' : errors.has('form.pekerjaan.lembaga_lain')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.pekerjaan.lembaga_lain')}">
						<i class="icon-cross2" v-if="errors.has('form.pekerjaan.lembaga_lain')"></i>
						Lembaga:</h6>

					<!-- text -->
					<input type="text" name="lembaga" class="form-control" placeholder="Silahkan masukkan nama lembaga" v-validate="'required|min:5'" data-vv-as="Lembaga" v-model="form.pekerjaan.lembaga_lain">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.pekerjaan.name')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.pekerjaan.name') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tingkat -->
			<div class="col-sm-12">
				<div class="form-group" :class="{'has-error' : errors.has('form.pekerjaan.tingkat')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.pekerjaan.tingkat')}">
						<i class="icon-cross2" v-if="errors.has('form.pekerjaan.tingkat')"></i>
						Tingkat:
					</h6>

					<!-- select -->
					<select class="form-control" name="pekerjaan_tingkat" v-model="form.pekerjaan.tingkat" data-width="100%" v-validate="'required'" data-vv-as="Tingkat Pekerjaan">
						<option disabled value="">Silahkan pilih tingkat pekerjaan</option>
						<option value="1" v-if="form.pekerjaan.id_tempat != 'lain'">Pengurus</option>
						<option value="2" v-if="form.pekerjaan.id_tempat != 'lain'">Pengawas</option>
						<option value="3" v-if="form.pekerjaan.id_tempat != 'lain'">Komite</option>
						<option value="4" v-if="form.pekerjaan.id_tempat != 'lain'">Penasihat</option>
						<option value="5">Senior Manajer (General Manager, CEO, Deputy)</option>
						<option value="6">Manajer</option>
						<option value="7">Supervisor (Kepala Bagian, Kepala Divisi, Kepala/Koordinator TP, Kepala Bidang)</option>
						<option value="8">Staf</option>
						<option value="9">Kontrak</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.pekerjaan.tingkat')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.pekerjaan.tingkat') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- jabatan -->
			<div class="col-sm-6" v-if="form.pekerjaan.tingkat != ''">
				<div class="form-group" :class="{'has-error' : errors.has('form.pekerjaan.name')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.pekerjaan.name')}">
						<i class="icon-cross2" v-if="errors.has('form.pekerjaan.name')"></i>
						Jabatan:</h6>

					<!-- text -->
					<input type="text" name="jabatan" class="form-control" placeholder="Silahkan masukkan nama jabatan" v-validate="'required|min:5'" data-vv-as="Jabatan pekerjaan" v-model="form.pekerjaan.name">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.pekerjaan.name')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.pekerjaan.name') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tp -->
			<div class="col-sm-6" v-if="form.pekerjaan.tipe == 1 && form.pekerjaan.tingkat != 'Komite' && form.pekerjaan.tingkat != 'Pengawas' && form.pekerjaan.tingkat != 'Pengurus' && form.pekerjaan.tingkat != ''">
				<div class="form-group" :class="{'has-error' : errors.has('form.id_tp')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.id_tp')}">
						<i class="icon-cross2" v-if="errors.has('form.id_tp')"></i>
						TP:
					</h6>

					<!-- select -->
					<select class="form-control" name="id_tp" v-model="form.id_tp" data-width="100%" v-validate="'required'" data-vv-as="CU">
						<option disabled value="">Silahkan pilih TP</option>
						<option value="0">Kantor Pusat</option>
						<option v-for="tp in modelTp" :value="tp.id" v-if="modelTp">{{tp.name}}</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.id_tp')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_tp') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tanggal mulai -->
			<div class="col-sm-6" v-if="form.pekerjaan.tingkat != ''">
				<div class="form-group" :class="{'has-error' : errors.has('form.pekerjaan.mulai')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('form.pekerjaan.mulai')}">
						<i class="icon-cross2" v-if="errors.has('form.pekerjaan.mulai')"></i>
						Tgl. Mulai:</h6>

					<!-- input -->
					<cleave 
						name="pekerjaan_mulai"
						v-model="form.pekerjaan.mulai" 
						class="form-control" 
						:raw="false" 
						:options="cleaveOption.date" 
						placeholder="Silahkan masukkan tgl. mulai"
						v-validate="'required'" data-vv-as="Tgl. mulai pekerjaan"></cleave>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.pekerjaan.mulai')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.pekerjaan.mulai') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- tanggal selesai -->
			<div class="col-sm-6" v-if="form.pekerjaan.tingkat != ''">
				<div class="form-group">

					<!-- title -->
					<h6>Tgl. Selesai</h6>

					<!-- input -->
					<cleave 
						name="pekerjaan_selesai"
						v-model="form.pekerjaan.selesai" 
						class="form-control" 
						:raw="false" 
						:options="cleaveOption.date" 
						placeholder="Silahkan masukkan tgl. selesai"></cleave>

					<small class="text-muted">Kosongkan apabila masih bekerja / tidak memiliki periode selesai</small>
				</div>
			</div>

		</div>	
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import Cleave from 'vue-cleave-component';

	export default {
		props:['form','modelCu','modelTp'],
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
			changeLembagaPekerjaan(value){
				if(value == 0){
					this.form.pekerjaan.tipe = 3;
				}else if(value == 'lain'){
					this.form.pekerjaan.tipe = 2;
				}else{
					this.form.pekerjaan.tipe = 1;
					this.$store.dispatch('tp/getCu',value);
				}
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
		}
	}
</script>