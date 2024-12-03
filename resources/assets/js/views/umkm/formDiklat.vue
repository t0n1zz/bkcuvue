<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="formDiklat">

		<!-- name -->
		<div class="form-group" :class="{'has-error' : errors.has('formDiklat.name')}">

			<!-- title -->
			<h5 :class="{ 'text-danger' : errors.has('formDiklat.name')}">
				<i class="icon-cross2" v-if="errors.has('formDiklat.name')"></i>
				Nama: <wajib-badge></wajib-badge>
			</h5>

			<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama diklat" v-validate="'required'" data-vv-as="Jabatan" v-model="formDiklat.name">

			<!-- error message -->
			<small class="text-muted text-danger" v-if="errors.has('formDiklat.name')">
				<i class="icon-arrow-small-right"></i> {{ errors.first('formDiklat.name') }}
			</small>
			<small class="text-muted" v-else>&nbsp;</small>
		</div>

		<!-- tanggal mulai -->
		<div class="form-group" :class="{'has-error' : errors.has('formDiklat.tanggal_mulai')}">

			<!-- title -->
			<h5 :class="{ 'text-danger' : errors.has('formDiklat.tanggal_mulai')}">
				<i class="icon-cross2" v-if="errors.has('formDiklat.tanggal_mulai')"></i>
				Tanggal Mulai: <wajib-badge></wajib-badge></h5>

			<!-- input -->
			<date-picker @dateSelected="formDiklat.tanggal_mulai = $event" :defaultDate="formDiklat.tanggal_mulai"></date-picker>	
			<input v-model="formDiklat.tanggal_mulai" name="tanggal_mulai" v-show="false" v-validate="'required'" data-vv-as="Tanggal mulai"/>

			<!-- error message -->
			<small class="text-muted text-danger" v-if="errors.has('formDiklat.tanggal_mulai')">
				<i class="icon-arrow-small-right"></i> {{ errors.first('formDiklat.tanggal_mulai') }}
			</small>
			<small class="text-muted" v-else>&nbsp;</small>
		</div>

		<!-- tanggal selesai -->
		<div class="form-group" :class="{'has-error' : errors.has('formDiklat.tanggal_selesai')}">

			<!-- title -->
			<h5 :class="{ 'text-danger' : errors.has('formDiklat.tanggal_selesai')}">
				<i class="icon-cross2" v-if="errors.has('formDiklat.tanggal_selesai')"></i>
				Tanggal Selesai: </h5>

			<!-- input -->
			<date-picker @dateSelected="formDiklat.tanggal_selesai = $event" :defaultDate="formDiklat.tanggal_selesai"></date-picker>	
			<input v-model="formDiklat.tanggal_selesai" name="tanggal_selesai" v-show="false" data-vv-as="Tanggal selesai"/>

			<!-- error message -->
			<small class="text-muted text-danger" v-if="errors.has('formDiklat.tanggal_selesai')">
				<i class="icon-arrow-small-right"></i> {{ errors.first('formDiklat.tanggal_selesai') }}
			</small>
			<small class="text-muted" v-else>&nbsp;</small>
		</div>

		<!-- fasilitator -->
		<div class="form-group">

			<!-- title -->
			<h5>Nama Fasilitator: </h5>

			<input type="text" name="fasilitator" class="form-control" placeholder="Silahkan masukkan nama fasilitator" data-vv-as="Nama Fasilitator" v-model="formDiklat.fasilitator">

		</div>

		<!-- tempat -->
		<div class="form-group">

			<!-- title -->
			<h5>Tempat: </h5>

			<input type="text" name="tempat" class="form-control" placeholder="Silahkan masukkan nama tempat" data-vv-as="Nama Tempat" v-model="formDiklat.tempat">

		</div>

		<!-- keterangan -->
		<div class="form-group">

			<!-- title -->
			<h5>
				Keterangan:
			</h5>

			<!-- textarea -->
			<textarea rows="5" type="text" name="deskripsi" class="form-control" placeholder="Silahkan masukkan keterangan" v-model="formDiklat.deskripsi"></textarea>

		</div>

		<!-- message -->
		<message v-if="errors.any('formDiklat') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
		</message>
		<!-- divider -->
		<hr>
		
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button type="submit" class="btn btn-primary" :disabled="formDiklat.name == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formDiklat.name == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>

			<button type="button" class="btn btn-light btn-block pb-2" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>
		</div>

		</form> 

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import message from "../../components/message.vue";
	import DatePicker from "../../components/datePicker.vue";
	import wajibBadge from "../../components/wajibBadge.vue";

	export default {
		props: ['mode','selected'],
		components: {
			message,
			DatePicker,
			wajibBadge
		},
		data() {
			return {
				title: '',
				kelas: 'kubnDiklat',
				formDiklat:{
					name: '',
					fasilitator: '',
					tempat: '',
					deskripsi: '',
					tanggal_mulai: null,
					tanggal_selesai: null,
				},
				submited: false,
			}
		},
		created(){
			if(this.mode == 'edit'){
				this.formDiklat = Object.assign({}, this.selected);
			}
		},
		methods: {
			save(){
				this.$validator.validateAll('formDiklat').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$emit('editDiklat',this.formDiklat);
						}else{
							this.$emit('createDiklat',this.formDiklat);
						}
						this.submited = false;
					}else{
						this.submited = true;
					}	
				});
			},
			tutup(){
				this.$emit('tutup');
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
		}
	}
</script>