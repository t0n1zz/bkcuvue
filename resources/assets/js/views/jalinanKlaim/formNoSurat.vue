<template>
	<div>
     <form @submit.prevent="save" data-vv-scope="formStatus" autocomplete="off">
      <!-- nomor surat -->
      <div class="col-md-12">
        <div class="form-group">

          <!-- title -->
          <h5>
            Nomor Surat:
          </h5>

          <!-- input -->
          <input type="text" name="surat_nomor" class="form-control" placeholder="Silahkan masukkan nomor surat" v-model="formStatus.surat_nomor">
        </div>
      </div>

      <div class="alert bg-info alert-styled-left">
        <h6>Pastikan data yang dimasukkan sudah benar sebelum menyimpan.</h6>
      </div>

      <!-- tombol desktop-->
      <div class="text-center d-none d-md-block">
        <button class="btn btn-light" @click.prevent="tutup">
          <i class="icon-cross"></i> Tutup</button>

        <button type="submit" class="btn btn-primary" v-if="tipe != 'lihat'">
          <span v-if="tipe == 'selesai'">
            <span v-if="formStatus.status == 5">
              <i class="icon-checkmark4"></i> Selesai
            </span>
            <span v-else>
              <i class="icon-blocked"></i> Batal Selesai
            </span>
          </span>
          <span v-else-if="tipe == 'verifikasi'">
            <i class="icon-file-check"></i> Verifikasi
          </span>
          <span v-else>
            <i class="icon-floppy-disk"></i> Simpan
          </span>
        </button>
      </div>  

      <!-- tombol mobile-->
      <div class="d-block d-md-none">
        <button type="submit" class="btn btn-primary btn-block pb-2" v-if="tipe != 'lihat'">
          <span v-if="tipe == 'selesai'">
            <span v-if="formStatus.status == 4">
              <i class="icon-checkmark4"></i> Selesai
            </span>
            <span v-else>
              <i class="icon-blocked"></i> Batal Selesai
            </span>
          </span>
          <span v-else-if="tipe == 'verifikasi'">
            <i class="icon-file-check"></i> Verifikasi
          </span>
          <span v-else>
            <i class="icon-floppy-disk"></i> Simpan
          </span>
        </button>

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
  import checkValue from "../../components/checkValue.vue";
  import infoIcon from "../../components/infoIcon.vue";

	export default {
		props: ['kelas','selected','tipe'],
		components: {
			formInfo,
      message,
      checkValue,
      infoIcon,
		},
		data() {
			return {
        title: '',
        selectedData: {},
				formStatus: {
          surat_nomor: ''
        },
				submited: false,
			}
		},
		created() {
      this.selectedData = Object.assign({}, this.selected);
      this.formStatus.surat_nomor = this.selectedData.surat_nomor;
		},
		watch: {},
		methods: {
      save(){
        this.$validator.validateAll('formStatus').then((result) => {
          if (result) {
            this.$store.dispatch(this.kelas + '/updateNoSurat', [this.selected.id, this.formStatus]);
          }else{
            this.submited = true;
          }
        });
      },
			tutup() {
				this.$emit('tutup');
			}
		},
		computed: {}
	}
</script>