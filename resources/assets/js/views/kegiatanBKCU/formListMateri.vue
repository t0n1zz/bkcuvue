<template>
	<div>
		<!-- message -->
		<message v-if="errors.any('formListMateri') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="formListMateri">
      <!-- nama -->
			<div class="form-group" :class="{'has-error' : errors.has('formListMateri.nama')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('formListMateri.nama')}">
					<i class="icon-cross2" v-if="errors.has('formListMateri.nama')"></i>
					Nama :
				</h5>

				<!-- text -->
				<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama materi" v-validate="'required'" v-model="formListMateri.nama">

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('formListMateri.nama')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('formListMateri.nama') }}
				</small>
				<small class="text-muted" v-else>&nbsp;
				</small>
			</div>

			<!-- waktu -->
			<div class="form-group" :class="{'has-error' : errors.has('formListMateri.waktu')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('formListMateri.waktu')}">
					<i class="icon-cross2" v-if="errors.has('formListMateri.waktu')"></i>
					Waktu (Jam) :
				</h5>

				<!-- text -->
				<input type="text" name="waktu" class="form-control" placeholder="Silahkan masukkan waktu (jam)" v-validate="'required'" v-model="formListMateri.waktu">

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('formListMateri.waktu')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('formListMateri.waktu') }}
				</small>
				<small class="text-muted" v-else>&nbsp;
				</small>
			</div>
			<!-- narasumber -->
			<div class="form-group" :class="{'has-error' : errors.has('formListMateri.narasumber')}">

			<!-- title -->
			<h5 :class="{ 'text-danger' : errors.has('formListMateri.narasumber')}">
				<i class="icon-cross2" v-if="errors.has('formListMateri.narasumber')"></i>
				Narasumber :
			</h5>

			<!-- text -->
			<input type="text" name="narasumber" class="form-control" placeholder="Silahkan masukkan narasumber" v-validate="'required'" v-model="formListMateri.narasumber">

			<!-- error message -->
			<small class="text-muted text-danger" v-if="errors.has('formListMateri.narasumber')">
				<i class="icon-arrow-small-right"></i> {{ errors.first('formListMateri.narasumber') }}
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
	import { toMulipartedForm } from '../../helpers/form';
	import message from "../../components/message.vue";
	import formInfo from "../../components/formInfo.vue";

	export default {
		props: ['mode','selected','kegiatan_id','kegiatan_tipe'],
		components: {
			formInfo,
			message
		},
		data() {
			return { 	 
				title: '',
				formListMateri: { 
					nama: '',
					waktu: '',
					narasumber:''
        },
        penjelasanStatus: '',
				submited: false,
			}
		},
	created() {
			if(this.mode == 'edit'){
				this.formListMateri = Object.assign({}, this.selected);
			}
		},
		watch: {
			
		},
		methods: {
			upload(e) {
				let files = e.target.files || e.dataTransfer.files;
				if (!files.length)
					return
				this.formListMateri.content = files[0];
			},
      save(){
				const formData = toMulipartedForm(this.formListMateri, this.mode);
				this.$validator.validateAll('formListMateri').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$store.dispatch('kegiatanBKCU/updateListMateri', [this.formListMateri.id, formData]);
						}else{
							this.$store.dispatch('kegiatanBKCU/storeListMateri', [this.kegiatan_tipe, this.kegiatan_id, formData]);
						}
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