<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="formJenisDiklat">

			<div class="form-group">

				<!-- title -->
				<h5>
					Jenis Diklat:
				</h5>

				<div class="input-group">

					<!-- select -->
					<select class="form-control" name="id" v-model="formJenisDiklat.jenis_diklat_id" data-width="100%" :disabled="modelJenisDiklat.length === 0" v-validate="'required'" data-vv-as="JenisDiklat" @change="changeJenisDiklat($event.target.value)">
						<option disabled value="">
							<span v-if="modelJenisDiklatStat === 'loading'">Mohon tunggu...</span>
							<span v-else>Silahkan pilih jenis diklat</span>
						</option>
						<option v-for="jenisDiklat in modelJenisDiklat" v-if="jenisDiklat" :value="jenisDiklat.id">{{ jenisDiklat.name }}</option>
					</select>

				</div>

		</div>

		<!-- message -->
		<message v-if="errors.any('formJenisDiklat') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
		</message>
		<!-- divider -->
		<hr>
		
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button type="submit" class="btn btn-primary" :disabled="formJenisDiklat.jenis_diklat_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formJenisDiklat.jenis_diklat_id == ''">
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
				formJenisDiklat:{
					id: '',
					jenis_diklat_id:'',
					name: '',
					deskripsi: '',
				},
				submited: false,
			}
		},
		created(){
			this.$store.dispatch('jenisDiklat/get');
			if(this.mode == 'edit'){
				this.formJenisDiklat = Object.assign({}, this.selected);
			}
		},
		methods: {
			save(){
				this.$validator.validateAll('formJenisDiklat').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$emit('editJenisDiklat',this.formJenisDiklat);
						}else{
							this.$emit('createJenisDiklat',this.formJenisDiklat);
						}
						this.submited = false;
					}else{
						this.submited = true;
					}	
				});
			},
			changeJenisDiklat(value){
				let valJenisDiklat = {};
				valJenisDiklat = _.find(this.modelJenisDiklat, { id: Number(value) });
				this.formJenisDiklat.name = valJenisDiklat.name;
				this.formJenisDiklat.deskripsi = valJenisDiklat.deskripsi;
			},
			tutup(){
				this.$emit('tutup');
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('jenisDiklat',{
				modelJenisDiklat: 'dataS',
				modelJenisDiklatStat: 'dataStatS',
			}),
		}
	}
</script>