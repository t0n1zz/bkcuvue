<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="formTanggapan">

		<!-- message -->
		<message v-if="errors.any('formTanggapan') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
		</message>
		<!-- divider -->
		<div class="form-group" :class="{'has-error' : errors.has('formTanggapan.name')}">

			<!-- title -->
			<h5 :class="{ 'text-danger' : errors.has('formTanggapan.name')}">
				<i class="icon-cross2" v-if="errors.has('formTanggapan.name')"></i>
				Tanggapan: </h5>

			<!-- text -->
			<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan tanggapan" v-validate="'required'" data-vv-as="Nama" v-model="formTanggapan.name">

			<!-- error message -->
			<small class="text-muted text-danger" v-if="errors.has('formTanggapan.name')">
				<i class="icon-arrow-small-right"></i> {{ errors.first('formTanggapan.name') }}
			</small>
			<small class="text-muted" v-else>&nbsp;</small>
		</div>

		<hr>
		
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
	import checkValue from '../../components/checkValue.vue';
	import message from "../../components/message.vue";

	export default {
		props: ['mode','selected'],
		components: {
			checkValue,
			message
		},
		data() {
			return {
				title: '',
				formTanggapan:{
					name: '',
				},
				submited: false,
			}
		},
		created(){
			if(this.mode == 'edit'){
				this.formTanggapan = Object.assign({}, this.selected);
			}
		},
		methods: {
			save(){
				this.$validator.validateAll('formTanggapan').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$emit('editTanggapan',this.formTanggapan);
						}else{
							this.$emit('createTanggapan',this.formTanggapan);
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