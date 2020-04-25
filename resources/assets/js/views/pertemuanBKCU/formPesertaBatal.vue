<template>
	<div>
		<!-- message -->
		<message v-if="errors.any('formPeserta') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<form @submit.prevent="save" data-vv-scope="formPeserta">

      <!-- keteranganBatal batal -->
      <div class="form-group" :class="{'has-error' : errors.has('formPeserta.keteranganBatal')}">

        <!-- title -->
        <h5 :class="{ 'text-danger' : errors.has('formPeserta.keteranganBatal')}">
          Alasan penolakkan peserta?
        </h5>

        <!-- textarea -->
        <textarea rows="5" type="text" name="keteranganBatal" class="form-control" placeholder="Silahkan masukkan keteranganBatal " v-validate="'required|min:5'" data-vv-as="Keterangan" v-model="formPeserta.keteranganBatal"></textarea>

        <!-- error message -->
        <small class="text-muted text-danger" v-if="errors.has('formPeserta.keteranganBatal')">
          <i class="icon-arrow-small-right"></i> {{ errors.first('formPeserta.keteranganBatal') }}
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
        <button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
          <i class="icon-cross"></i> Tutup</button>

        <button type="submit" class="btn btn-primary btn-block pb-2">
          <i class="icon-floppy-disk"></i> Simpan</button>
      </div> 
    </form>	

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import message from "../../components/message.vue";
	import formInfo from "../../components/formInfo.vue";

	export default {
		props: ['kelas','id'],
		components: {
			formInfo,
			message
		},
		data() {
			return {
				title: '',
				formPeserta: {
					status: '',
					keteranganBatal: ''
        },
        penjelasanStatus: '',
				submited: false,
			}
		},
		created() {
		},
		watch: {
		},
		methods: {
      save(){
				this.$validator.validateAll('formPeserta').then((result) => {
					this.$store.dispatch(this.kelas + '/batalPeserta', [this.id, this.formPeserta]);
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