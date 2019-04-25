<template>
	<div>
		<!-- message -->
		<message v-if="errors.any('formStatus') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<form @submit.prevent="save" data-vv-scope="formStatus">
      <!-- status -->
      <div class="form-group">

        <!-- title -->
        <h5>Status Klaim:</h5>

        <!-- select -->
        <select name="status" data-width="100%" class="form-control" v-model="formStatus.status">
          <option disabled value="">Silahkan pilih status klaim</option>
          <option value="0">Menunggu</option>
          <option value="1">Dicairkan</option>
          <option value="2">Ditolak</option>
        </select>

      </div>

      <!-- keterangan batal -->
      <div class="form-group" :class="{'has-error' : errors.has('formStatus.keterangan')}" v-if="formStatus.status == 2">

        <!-- title -->
        <h5 :class="{ 'text-danger' : errors.has('formStatus.keterangan')}">
          Keterangan Status Klaim Ditolak:
        </h5>

        <!-- textarea -->
        <textarea rows="5" type="text" name="keterangan" class="form-control" placeholder="Silahkan masukkan keterangan " v-validate="'required|min:5'" data-vv-as="Keterangan" v-model="formStatus.keterangan"></textarea>

        <!-- error message -->
        <small class="text-muted text-danger" v-if="errors.has('formStatus.keterangan')">
          <i class="icon-arrow-small-right"></i> {{ errors.first('formStatus.keterangan') }}
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
		props: ['kelas','id','status','keterangan'],
		components: {
			formInfo,
			message
		},
		data() {
			return {
				title: '',
				formStatus: {
					status: '',
					keterangan: ''
        },
        penjelasanStatus: '',
				submited: false,
			}
		},
		created() {
			this.formStatus.status = this.status;
			this.formStatus.keterangan = this.keterangan;
		},
		watch: {
		},
		methods: {
      save(){
				this.$validator.validateAll('formStatus').then((result) => {
					this.$store.dispatch(this.kelas + '/updateStatus', [this.id, this.formStatus]);
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