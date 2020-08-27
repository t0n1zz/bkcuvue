<template>
	<div>
		<!-- message -->
		<message v-if="errors.any('formPilih') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<form @submit.prevent="save" data-vv-scope="formPilih">
      <div class="form-group" :class="{'has-error' : errors.has('formPilih.name')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('formPilih.name')}">
					<i class="icon-cross2" v-if="errors.has('formPilih.name')"></i>
					Nama :
				</h5>

				<!-- text -->
				<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama" v-validate="'required'" data-vv-as="Nama di nametag" v-model="formPilih.name">

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('formPilih.name')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('formPilih.name') }}
				</small>
				<small class="text-muted" v-else>&nbsp;
				</small>
			</div>

      <!-- divider -->
      <hr>
      
      <!-- tombol desktop-->
      <div class="text-center d-none d-md-block">
        <button class="btn btn-light" @click.prevent="tutup">
          <i class="icon-cross"></i> Tutup</button>

        <button type="submit" class="btn btn-primary">
          <i class="icon-floppy-disk"></i> Simpan</button>
      </div>  

      <!-- tombol mobile-->
      <div class="d-block d-md-none">
        <button type="submit" class="btn btn-primary btn-block pb-2">
          <i class="icon-floppy-disk"></i> Simpan</button>

        <button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
          <i class="icon-cross"></i> Tutup</button>
      </div> 
    </form>	

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import message from "../../components/message.vue";
	import formInfo from "../../components/formInfo.vue";

	export default {
		props: ['mode','selected'],
		components: {
			formInfo,
			message
		},
		data() {
			return {
				title: '',
				formPilih: {
					status: '',
					keterangan: ''
        },
        penjelasanStatus: '',
				submited: false,
			}
		},
		created() {
      if(this.mode == 'edit'){
				this.formPilih = Object.assign({}, this.selected);
			}
		},
		watch: {
		},
		methods: {
      save(){
				this.$validator.validateAll('formPilih').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$emit('editPilih',this.formPilih);
						}else{
							this.$emit('createPilih',this.formPilih);
						}
						this.submited = false;
					}else{
						this.submited = true;
					}	
				});
      },
			tutup() {
				this.$emit('tutup');
			}
		},
		computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
			}),
		}
	}
</script>