<template>
	<div>
		<!-- message -->
		<message v-if="errors.any('formMateri') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="formMateri">
      <!-- nama -->
			<div class="form-group" :class="{'has-error' : errors.has('formMateri.name')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('formMateri.name')}">
					<i class="icon-cross2" v-if="errors.has('formMateri.name')"></i>
					Nama :
				</h5>

				<!-- text -->
				<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama" v-validate="'required'" data-vv-as="Nama di nametag" v-model="formMateri.name">

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('formMateri.name')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('formMateri.name') }}
				</small>
				<small class="text-muted" v-else>&nbsp;
				</small>
			</div>

      <!-- keterangan -->
      <div class="form-group">

        <!-- title -->
        <h5> Keterangan: </h5>

        <!-- textarea -->
        <textarea rows="5" type="text" name="keterangan" class="form-control" placeholder="Silahkan masukkan keterangan " v-model="formMateri.keterangan"></textarea>

      </div>

			<!-- upload -->
      <div class="form-group" v-if="mode == 'create'">

        <!-- title -->
        <h5> Upload file: </h5>

        <!-- textarea -->
        <div class="card-card-body">
					<input type="file" accept=".pdf,image/*" class="form-control" @change="upload" ref="fileInput">
				</div>
				<small class="text-muted">File yang diterima adalah PDF dan gambar/foto</small>

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
		props: ['mode','selected','kegiatan_id'],
		components: {
			formInfo,
			message
		},
		data() {
			return {
				title: '',
				formMateri: { 
					name: '',
					keterangan: '',
					content: '',
        },
        penjelasanStatus: '',
				submited: false,
			}
		},
		created() {
			if(this.mode == 'edit'){
				this.formMateri = Object.assign({}, this.selected);
			}
		},
		watch: {
		},
		methods: {
			upload(e) {
				let files = e.target.files || e.dataTransfer.files;
				if (!files.length)
					return
				this.formMateri.content = files[0];
			},
      save(){
				const formData = toMulipartedForm(this.formMateri, this.mode);
				this.$validator.validateAll('formMateri').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$store.dispatch('kegiatanBKCU/updateMateri', [this.formMateri.id, formData]);
						}else{
							this.$store.dispatch('kegiatanBKCU/storeMateri', [this.kegiatan_id, formData]);
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