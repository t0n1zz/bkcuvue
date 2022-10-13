<template>
	<div>
		<!-- message -->
		<message v-if="errors.any('formRekomHasil') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="formRekomHasil">

			<div v-if="updateStat == 'loading'">
				<div class="progress">
					<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
						<span class="sr-only">100% Complete</span>
					</div>
				</div>
			</div>

			<div class="row" v-else>

				<!-- tercapai -->
				<div class="col-md-12">
					<div class="input-group mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text">Tindaklanjut</span>
						</div>

						<!-- select -->
						<select class="form-control" name="tercapai" v-model="formRekomHasil.tercapai" data-width="100%" v-validate="'required'" data-vv-as="Tindaklanjut" :disabled="isReadOnly">
							<option disabled value="">Silahkan pilih kondisi tindaklanjut</option>
							<option value="Sudah Tercapai">Sudah Tercapai</option>
							<option value="Belum Tercapai">Belum Tercapai</option>
							<option value="Tidak Tercapai">Tidak Tercapai</option>
						</select>
					</div>

					<div class="input-group mb-3" v-if="this.currentUser.id_cu === 0">
						<div class="input-group-prepend">
							<span class="input-group-text">Pilih Lembaga</span>
						</div>

						<!-- select -->
						<select class="form-control" name="id_cu" v-model="formRekomHasil.id_cu" data-width="100%" :disabled="isReadOnly">
							<option disabled value="">Silahkan pilih Lembaga</option>
							<slot></slot>
							<option value="0"><span v-if="currentUser.pus">{{currentUser.pus.name}}</span> <span v-else>PUSKOPCUINA</span></option>
							<option disabled value="">----------------</option>
							<option v-for="cu in modelCu" :value="cu.id" v-if="cu">{{cu.name}}</option>
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
						<textarea rows="3" type="text" name="keterangan" class="form-control" placeholder="Silahkan masukkan keterangan" v-validate="'required'" data-vv-as="Keterangan" v-model="formRekomHasil.keterangan" :readonly="isReadOnly"></textarea>
					</div>
				</div>

				<!-- bukti -->
				<div class="col-md-6">
					<div class="form-group">
						<!-- title -->
						<h6>Bukti-bukti</h6>

						<!-- textarea -->
						<textarea rows="3" type="text" name="bukti" class="form-control" placeholder="Silahkan masukkan bukti" v-model="formRekomHasil.bukti" :readonly="isReadOnly"></textarea>
					</div>
				</div>

				<!-- foto -->
				<!-- <div class="col-md-12">
					<div class="form-group mb-1">

							<button type="button" class="btn btn-light btn-block" @click.prevent="showFoto">
								Foto
							</button>

							<div v-show="isShowFoto">
								<div v-if="!isReadOnly">
									<div class="card card-body mt-2 mb-1">
										<app-image-upload :image_loc="'/images/rekom/'" :image_temp="formRekomHasil.gambar" v-model="formRekomHasil.gambar"></app-image-upload>
									</div>
								</div>
								<div class="card-body text-center" v-else>
									<img :src="'/images/rekom/' + formRekomHasil.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm" v-if="formRekomHasil.gambar">
									<img :src="'/images/no_image.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
								</div>
							</div>
					</div>
				</div> -->

				<!-- divider -->
				<div class="col-md-12">
					<hr>
				</div>

				<!-- button -->
				<div class="col-md-12" v-if="!isReadOnly">
					<template v-if="!isModal">
						<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formRekomHasil.tercapai == ''">
							<i class="icon-floppy-disk"></i> Simpan</button>
					</template>
					<template v-else>
						<!-- tombol desktop-->
						<div class="text-center d-none d-md-block">
							<button type="button" class="btn btn-light" @click.prevent="tutup">
								<i class="icon-cross"></i> Tutup</button>

							<button type="submit" class="btn btn-primary" :disabled="formRekomHasil.tercapai == ''">
								<i class="icon-floppy-disk"></i> Simpan</button>
						</div>  

						<!-- tombol mobile-->
						<div class="d-block d-md-none">
							<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formRekomHasil.tercapai == ''">
								<i class="icon-floppy-disk"></i> Simpan</button>

							<button type="button" class="btn btn-light btn-block pb-2" @click.prevent="tutup">
								<i class="icon-cross"></i> Tutup</button>
						</div> 
					</template>
				</div>

			</div>

    </form>	

	</div>
</template>

<script>
	import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import { toMulipartedForm } from '../../helpers/form';
	import message from "../../components/message.vue";
	import formInfo from "../../components/formInfo.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import appImageUpload from '../../components/ImageUpload.vue';

	export default {
		props: ['selected','kelas','isModal','mode','kegiatan_rekom_id','isReadOnly'],
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
			if(this.isModal){
				if(this.mode == 'edit'){
					this.formRekomHasil = Object.assign({}, this.selected);
				}
			}else{
				if(this.selected.hasil.length > 0){
					if(this.selected.tipe == 1){
						// lembaga
						this.formRekomHasil = Object.assign({}, _.find(this.selected.hasil, {id_cu: this.currentUser.id_cu}));
					}else if(this.selected.tipe == 2){
						// peserta
						this.formRekomHasil = Object.assign({}, _.find(this.selected.hasil, {id_user: this.currentUser.id}));
					}else if(this.selected.tipe == 3){
						// puskopcuina
						this.formRekomHasil = Object.assign({}, _.find(this.selected.hasil, {id_cu: 0}));
					}
					if(this.formRekomHasil.foto){
						this.isShowFoto = true;
					}
				}
			}
		},
		watch: {
		},
		methods: {
      save(){
				if(this.isModal){
					this.formRekomHasil.kegiatan_rekom_id = this.kegiatan_rekom_id;
				}else{
					this.formRekomHasil.kegiatan_rekom_id = this.selected.id;
					this.formRekomHasil.id_cu = this.currentUser.id_cu;
				}
				this.formRekomHasil.id_user = this.currentUser.id;

				const formData = toMulipartedForm(this.formRekomHasil, this.mode);
				this.$validator.validateAll('formRekomHasil').then((result) => {
					if (result) {
						if(this.formRekomHasil.id){
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
			...mapGetters('cu',{
				modelCu: 'headerDataS',
				modelCuStat: 'headerDataStatS',
			}),
			...mapGetters('kegiatanRekom', {
        updateResponse: 'update2',
				updateStat: 'updateStat2',
			}),
		}
	}
</script>