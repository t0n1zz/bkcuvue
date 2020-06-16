<template>
	<div>
		<!-- message -->
		<message v-if="errors.any('formTugas') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="formTugas">
      <!-- nama -->
			<div class="form-group" :class="{'has-error' : errors.has('formTugas.name')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('formTugas.name')}">
					<i class="icon-cross2" v-if="errors.has('formTugas.name')"></i>
					Tugas:
				</h5>

				<!-- text -->
				<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama" v-validate="'required'" data-vv-as="Nama di nametag" v-model="formTugas.name">

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('formTugas.name')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('formTugas.name') }}
				</small>
				<small class="text-muted" v-else>&nbsp;
				</small>
			</div>

			<!-- keterangan -->
      <div class="form-group">

        <!-- title -->
        <h5> Keterangan: </h5>

        <!-- textarea -->
        <textarea rows="5" type="text" name="keterangan" class="form-control" placeholder="Silahkan masukkan keterangan " v-model="formTugas.keterangan"></textarea>

      </div>


			<!-- tipe -->
			<div class="form-group" :class="{'has-error' : errors.has('formTugas.tipe')}" v-if="mode == 'create'">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('formTugas.tipe')}">
					<i class="icon-cross2" v-if="errors.has('formTugas.tipe')"></i>
					Pilih Tipe:
				</h5>

				<!-- select -->
				<select class="form-control" name="tipe" v-model="formTugas.tipe" data-width="100%" v-validate="'required'" data-vv-as="tipe">
					<option disabled value="">Silahkan pilih tipe</option>
					<option value="isian">Isian langsung</option>
					<option value="upload">Upload tugas</option>
					<option value="google form">Google form</option>
				</select>

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('formTugas.tipe')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('formTugas.tipe') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>

			<!-- upload -->		
			<template v-if="formTugas.tipe != ''">
				<div class="form-group" v-if="formTugas.tipe == 'google form'">

					<!-- title -->
					<h5>Link google form: </h5>

					<!-- textarea -->
					<input type="text" name="link" class="form-control" placeholder="Silahkan masukkan link" v-model="formTugas.link">
					<small class="text-muted">Silahkan masukkan link ke google form</small>

				</div>

				<div v-else>
					<template v-if="mode == 'create'">
						<h5>
							Dokumen pendukung:
							<br/>
							<small class="text-muted">silahkan diisi apabila ada dokumen pendukung untuk mengerjakan tugas ini</small>
						</h5>

						<!-- format -->
						<div class="form-group" :class="{'has-error' : errors.has('formTugas.format')}" v-if="mode == 'create'">

							<!-- title -->
							<h5 :class="{ 'text-danger' : errors.has('formTugas.format')}">
								<i class="icon-cross2" v-if="errors.has('formTugas.format')"></i>
								Pilih Format:
							</h5>

							<!-- select -->
							<select class="form-control" name="format" v-model="formTugas.format" data-width="100%" v-validate="'required'" data-vv-as="format">
								<option disabled value="">Silahkan pilih format</option>
								<option value="upload">Upload</option>
								<option value="link">Link</option>
							</select>

							<!-- error message -->
							<small class="text-muted text-danger" v-if="errors.has('formTugas.format')">
								<i class="icon-arrow-small-right"></i> {{ errors.first('formTugas.format') }}
							</small>
							<small class="text-muted" v-else>&nbsp;</small>
						</div>

						<div class="form-group" v-if="formTugas.format == 'upload'">
							<!-- title -->
							<h5> Upload dokumen: </h5>

							<!-- textarea -->
							<div class="card-card-body">
								<input type="file" class="form-control" @change="upload" ref="fileInput">
							</div>
						</div>
						<div class="form-group" v-else-if="formTugas.format == 'link'">

							<!-- title -->
							<h5>Link dokumen: </h5>

							<!-- textarea -->
							<input type="text" name="link" class="form-control" placeholder="Silahkan masukkan link" v-model="formTugas.link">
							<small class="text-muted">Silahkan masukkan link ke dokumen</small>

						</div>
					</template>
				</div>
			</template>

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
				formTugas: { 
					id_cu: '',
					id_user: '',
					name: '',
					tipe: '',
					format:'',
					content: '',
					link:'',
        },
				submited: false,
			}
		},
		created() {
			if(this.mode == 'edit'){
				this.formTugas = Object.assign({}, this.selected);
			}
		},
		watch: {
		},
		methods: {
			upload(e) {
				let files = e.target.files || e.dataTransfer.files;
				if (!files.length)
					return
				this.formTugas.content = files[0];
			},
      save(){
				this.formTugas.id_user = this.currentUser.id;
				this.formTugas.id_cu = this.currentUser.id_cu;
				const formData = toMulipartedForm(this.formTugas, this.mode);
				this.$validator.validateAll('formTugas').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$store.dispatch('kegiatanBKCU/updateTugas', [this.formTugas.id, formData]);
						}else{
							this.$store.dispatch('kegiatanBKCU/storeTugas', [this.kegiatan_tipe, this.kegiatan_id, formData]);
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