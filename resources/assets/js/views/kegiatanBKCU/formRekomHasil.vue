<template>
	<div>
		<!-- message -->
		<message v-if="errors.any('formRekomHasil') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="formRekomHasil">

			<div class="row">

				<!-- tercapai -->
				<div class="col-md-12">
					<div class="input-group mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text">Tindaklanjut</span>
						</div>

						<!-- select -->
						<select class="form-control" name="tercapai" v-model="formRekomHasil.tercapai" data-width="100%" v-validate="'required'" data-vv-as="Tindaklanjut">
							<option disabled value="">Silahkan pilih kondisi tindaklanjut</option>
							<option value="1">Sudah Tercapai</option>
							<option value="2">Belum Tercapai</option>
							<option value="2">Tidak Tercapai</option>
						</select>
					</div>
				</div>

				<!-- keterangan -->
				<div class="col-md-6">
					<div class="form-group" :class="{'has-error' : errors.has('formRekomHasil.keterangan')}">

						<!-- title -->
						<h6 :class="{ 'text-danger' : errors.has('formRekomHasil.keterangan')}">
							<i class="icon-cross2" v-if="errors.has('formRekomHasil.keterangan')"></i>
							Keterangan
						</h6>

						<!-- textarea -->
						<textarea rows="3" type="text" name="keterangan" class="form-control" placeholder="Silahkan masukkan keterangan" v-validate="'required'" data-vv-as="Keterangan" v-model="formRekomHasil.keterangan"></textarea>
					</div>
				</div>

				<!-- bukti -->
				<div class="col-md-6">
					<div class="form-group">
						<!-- title -->
						<h6>Bukti-bukti</h6>

						<!-- textarea -->
						<textarea rows="3" type="text" name="bukti" class="form-control" placeholder="Silahkan masukkan bukti" v-model="formRekomHasil.bukti"></textarea>
					</div>
				</div>

				<div class="col-md-12">
					<div class="form-group mb-1">
							<!-- title -->
							<button type="button" class="btn btn-light btn-block" @click.prevent="showFoto">
								Foto
							</button>

							<!-- imageupload -->
							<div class="card card-body mt-2 mb-1" v-show="isShowFoto">
								<app-image-upload :image_loc="'/images/rekom/'" :image_temp="formRekomHasil.gambar" v-model="formRekomHasil.gambar"></app-image-upload>
							</div>
						</div>
				</div>

			</div>

      <!-- divider -->
      <hr>
			<button type="submit" class="btn btn-primary btn-block pb-2">
          <i class="icon-floppy-disk"></i> Simpan</button>
    </form>	

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import message from "../../components/message.vue";
	import formInfo from "../../components/formInfo.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import appImageUpload from '../../components/ImageUpload.vue';

	export default {
		props: ['selected','kelas'],
		components: {
			formInfo,
			message,
			wajibBadge,
			appImageUpload
		},
		data() {
			return {
				title: '',
				formRekomHasil: { 
					id: '',
					id_cu: '',
					id_user: '',
					kegiatan_rekom_id: '',
					tercapai: '',
					keterangan: '',
					bukti: '',
					gambar: '',
        },
				isShowFoto: false,
        penjelasanStatus: '',
				submited: false,
			}
		},
		created() {
			if(this.selected.id){
				this.formRekomHasil = Object.assign({}, this.selected);
				if(this.formRekomHasil.foto){
					this.isShowFoto = true;
				}
			}
		},
		watch: {
		},
		methods: {
      save(){
				this.formRekomHasil.id_user = this.currentUser.id;
				this.formRekomHasil.id_cu = this.currentUser.id_cu;

				const formData = toMulipartedForm(this.formRekomHasil, this.$route.meta.mode);
				this.$validator.validateAll('formRekomHasil').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$store.dispatch(this.kelas + '/updateHasil', [this.formRekomHasil.id, formData]);
						}else{
							this.$store.dispatch(this.kelas + '/storeHasil', formData);
						}
					}else{
						this.submited = true;
					}	
				});
      },
			showFoto(){
				if(this.isShowFoto){
					this.isShowFoto = false;
				}else{
					this.isShowFoto = true;
				}
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