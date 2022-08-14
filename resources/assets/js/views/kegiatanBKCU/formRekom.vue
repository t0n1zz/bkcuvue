<template>
	<div>
		<!-- message -->
		<message v-if="errors.any('formRekom') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="formRekom">
      <!-- name -->
			<div class="form-group" :class="{'has-error' : errors.has('formRekom.name')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('formRekom.name')}">
					<i class="icon-cross2" v-if="errors.has('formRekom.name')"></i>
					Rekomendasi <wajib-badge></wajib-badge>
				</h5>

				<!-- textarea -->
        <textarea rows="5" type="text" name="rekomendasi" class="form-control" placeholder="Silahkan masukkan rekomendasi " v-validate="'required'" data-vv-as="Rekomendasi" v-model="formRekom.name"></textarea>

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('formRekom.name')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('formRekom.name') }}
				</small>
				<small class="text-muted" v-else>&nbsp;
				</small>
			</div>

			<div class="form-group">
				<!-- title -->
				<h5>PIC:</h5>

				<!-- text -->
				<input type="text" name="pic" class="form-control" placeholder="Silahkan masukkan pic" v-model="formRekom.pic">
			</div>

			<div class="form-group">
				<!-- title -->
				<h5>Waktu:</h5>

				<!-- text -->
				<input type="text" name="waktu" class="form-control" placeholder="Silahkan masukkan waktu" v-model="formRekom.waktu">
			</div>

			<div class="form-group" :class="{'has-error' : errors.has('formRekom.tipe')}">
				<!-- title -->
				<h5>
					<i class="icon-cross2" v-if="errors.has('formRekom.tipe')"></i>Tipe Tindak Lanjut <wajib-badge></wajib-badge>
				</h5>

				<!-- select -->
				<select class="form-control" name="tipe" v-model="formRekom.tipe" data-width="100%" v-validate="'required'" data-vv-as="Tipe Tindak Lanjut">
					<option disabled value="">Silahkan pilih tipe tindak lanjut</option>
					<option value="1">Per lembaga</option>
					<option value="2">Per peserta</option>
				</select>

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('formRekom.tipe')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('formRekom.tipe') }}
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
	import wajibBadge from "../../components/wajibBadge.vue";

	export default {
		props: ['mode','selected','kegiatan_id','kelas'],
		components: {
			formInfo,
			message,
			wajibBadge
		},
		data() {
			return {
				title: '',
				formRekom: { 
					kegiatan_id: '',
					name: '',
					pic: '',
					waktu: '',
					tipe: '',
        },
        penjelasanStatus: '',
				submited: false,
			}
		},
		created() {
			if(this.mode == 'edit'){
				this.formRekom = Object.assign({}, this.selected);
			}
			this.formRekom.kegiatan_id = this.kegiatan_id;
		},
		watch: {
		},
		methods: {
      save(){
				this.$validator.validateAll('formRekom').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$store.dispatch(this.kelas + '/update', [this.formRekom.id, this.formRekom]);
						}else{
							this.$store.dispatch(this.kelas + '/store', this.formRekom);
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