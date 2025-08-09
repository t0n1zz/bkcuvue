<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="formDataLanjut">

		<!-- message -->
		<message v-if="message.show" @close="messageClose" :title="'Oops terjadi kesalahan'" :errorData="message.content" :showDebug="false">
		</message>

		<div class="row">

			<!-- pencapaian -->
			<div class="col-md-6" v-if="mode != 'catatan'">
				<div class="form-group">

					<!-- title -->
					<h6>Pencapaian:</h6>

					<!-- text -->
					<textarea rows="3" cols="3" class="form-control" placeholder="Silahkan masukkan pencapaian" v-model="formDataLanjut.pencapaian"></textarea>

				</div>
			</div>

			<!-- bukti -->
			<div class="col-md-6" v-if="mode != 'catatan'">
				<div class="form-group">

					<!-- title -->
					<h6>Bukti-bukti:</h6>

					<!-- text -->
					<textarea rows="3" cols="3" class="form-control" placeholder="Silahkan masukkan bukti" v-model="formDataLanjut.bukti"></textarea>

				</div>
			</div>

			<!-- kendala -->
			<div class="col-md-6" v-if="mode != 'catatan'">
				<div class="form-group">

					<!-- title -->
					<h6>Kendala:</h6>

					<!-- text -->
					<textarea rows="3" cols="3" class="form-control" placeholder="Silahkan masukkan kendala" v-model="formDataLanjut.kendala"></textarea>

				</div>
			</div>

			<!-- tindak -->
			<div class="col-md-6" v-if="mode != 'catatan'">
				<div class="form-group">

					<!-- title -->
					<h6>Tindak Lanjut:</h6>

					<!-- text -->
					<textarea rows="3" cols="3" class="form-control" placeholder="Silahkan masukkan tindak lanjut" v-model="formDataLanjut.tindak"></textarea>

				</div>
			</div>

			<!-- tindak -->
			<div class="col-md-12" v-if="mode != 'catatan'">
				<div class="form-group">

					<!-- title -->
					<h6>Upload Foto:</h6>

						<!-- imageupload -->
						<app-image-upload :image_loc="'/images/monitoring/'" :image_temp="formDataLanjut.gambar" v-model="formDataLanjut.gambar"></app-image-upload>

				</div>
			</div>

			<!-- tindak -->
			<div class="col-md-12" v-if="mode == 'catatan'">
				<div class="form-group">

					<!-- title -->
					<h6>Catatan PUSKOPCUINA:</h6>

					<!-- text -->
					<textarea rows="3" cols="3" class="form-control" placeholder="Silahkan masukkan catatan" v-model="formDataLanjut.catatan"></textarea>

				</div>
			</div>

		</div>

		<!-- divider -->
		<hr>
		
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button type="submit" class="btn btn-primary" :disabled="formDataLanjut.cu_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formDataLanjut.cu_id == ''">
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
	import checkValue from '../../components/checkValue.vue';
	import Message from "../../components/message.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import appImageUpload from '../../components/ImageUpload.vue';
	import { toMulipartedForm } from '../../helpers/form';

	export default {
		props: ['mode','selected'],
		components: {
			checkValue,
			Message,
			wajibBadge,
			appImageUpload
		},
		data() {
			return {
				title: '',
				kelas: 'monitoringPencapaian',
				formDataLanjut:{
					id: '',
					id_user: '',
					id_monitoring: '',
					pencapaian: '',
					bukti: '',
					kendala: '',
					tindak: '',
					catatan: '',
					gambar: '',
				},
				message: {
					show: false,
					content: ''
				},
				submited: false,
			}
		},
		created(){
			if(this.mode != 'create'){
				this.formDataLanjut = Object.assign({},this.selected);
			}
		},
		watch: {},
		methods: {
			save(){
				this.formDataLanjut.id_monitoring = this.$route.params.id;
				const formData = toMulipartedForm(this.formDataLanjut, this.$route.meta.mode);
				this.$validator.validateAll('formDataLanjut').then((result) => {
					if (result) {
						if (this.mode == 'create') {
							this.$store.dispatch(this.kelas + '/store', formData);
						} else {
							this.$store.dispatch(this.kelas + '/update', [this.formDataLanjut.id, formData]);
						}
						this.submited = false;
					}else{
						this.submited = true;
					}	
				});
			},
			messageClose(){
				this.message.show = false;
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