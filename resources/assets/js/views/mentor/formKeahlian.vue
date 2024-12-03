<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="formKeahlian">

			<div class="form-group">

				<!-- title -->
				<h5>
					Keahlian:
				</h5>

				<div class="input-group">

					<!-- select -->
					<select class="form-control" name="id" v-model="formKeahlian.keahlian_id" data-width="100%" :disabled="modelKeahlian.length === 0" v-validate="'required'" data-vv-as="Keahlian" @change="changeKeahlian($event.target.value)">
						<option disabled value="">
							<span v-if="modelKeahlianStat === 'loading'">Mohon tunggu...</span>
							<span v-else>Silahkan pilih jenis keahlian</span>
						</option>
						<option v-for="keahlian in modelKeahlian" v-if="keahlian" :value="keahlian.id">{{ keahlian.name }}</option>
					</select>

				</div>

		</div>

		<!-- message -->
		<message v-if="errors.any('formKeahlian') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
		</message>
		<!-- divider -->
		<hr>
		
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button type="submit" class="btn btn-primary" :disabled="formKeahlian.keahlian_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formKeahlian.keahlian_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>

			<button type="button" class="btn btn-light btn-block pb-2" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>
		</div>

		</form> 

	</div>
</template>

<script>
	import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import message from "../../components/message.vue";

	export default {
		props: ['mode','selected'],
		components: {
			message,
		},
		data() {
			return {
				title: '',
				formKeahlian:{
					id: '',
					keahlian_id:'',
					name: '',
					deskripsi: '',
				},
				submited: false,
			}
		},
		created(){
			this.$store.dispatch('keahlian/get');
			if(this.mode == 'edit'){
				this.formKeahlian = Object.assign({}, this.selected);
			}
		},
		methods: {
			save(){
				this.$validator.validateAll('formKeahlian').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$emit('editKeahlian',this.formKeahlian);
						}else{
							this.$emit('createKeahlian',this.formKeahlian);
						}
						this.submited = false;
					}else{
						this.submited = true;
					}	
				});
			},
			changeKeahlian(value){
				let valKeahlian = {};
				valKeahlian = _.find(this.modelKeahlian, { id: Number(value) });
				this.formKeahlian.name = valKeahlian.name;
				this.formKeahlian.deskripsi = valKeahlian.deskripsi;
			},
			tutup(){
				this.$emit('tutup');
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('keahlian',{
				modelKeahlian: 'dataS',
				modelKeahlianStat: 'dataStatS',
			}),
		}
	}
</script>