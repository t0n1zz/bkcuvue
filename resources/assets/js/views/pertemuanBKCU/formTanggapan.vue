<template>
	<div>
		<!-- message -->
		<message v-if="errors.any('formTanggapan') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<form @submit.prevent="save" data-vv-scope="formTanggapan">

			<div class="card card-body" v-for="p in pilih" :key="p.id">
				<div class="form-group mb-0">
					<label class="d-block font-weight-semibold">{{ p.name }}</label>

					<div class="form-check form-check-inline">
						<label class="form-check-label">
							<input type="radio" class="form-check-input" value="1" v-model="formTanggapan.pilih[p.id]" :name="p.id" >
							Setuju
						</label>
					</div>

					<div class="form-check form-check-inline">
						<label class="form-check-label">
							<input type="radio" class="form-check-input" value="2" v-model="formTanggapan.pilih[p.id]"  :name="p.id">
							Tidak Setuju
						</label>
					</div>

					<div class="form-check form-check-inline">
						<label class="form-check-label">
							<input type="radio" class="form-check-input" value="3" v-model="formTanggapan.pilih[p.id]" :name="p.id">
							Tidak Punya Tanggapan
						</label>
					</div>
				</div>
			</div>

      <!-- keterangan -->
      <div class="form-group">

        <!-- title -->
        <h5> Catatan / Pendapat: </h5>

        <!-- textarea -->
				<ckeditor type="classic" :config="ckeditorNoImageConfig" v-model="formTanggapan.keterangan"></ckeditor>

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
		props: ['mode','selected','kegiatan_id','pilih'],
		components: {
			formInfo,
			message
		},
		data() {
			return {
				title: '',
				formTanggapan: { 
					kegiatan_id: '',
					id_user: '',
					id_cu: '',
					keterangan: '',
					pilih: [],
				},
				ckeditorNoImageConfig: {
					toolbar: {
						items: [
							'heading',
							'|',
							'bold',
							'italic',
							'link',
							'bulletedList',
							'numberedList',
							'blockQuote',
							'insertTable',
							'mediaEmbed',
							'undo',
							'redo'
						]
					},
					table: {
						contentToolbar: [
							'tableColumn',
							'tableRow',
							'mergeTableCells'
						]
					},
        },
				submited: false,
			}
		},
		created() {
			if(this.mode == 'edit'){
				this.formTanggapan = Object.assign({}, this.selected);
				var newArr = [];
				this.selected.pilih.forEach(function(entry){
					newArr[entry.id] = entry.pivot.nilai;
				});
				this.formTanggapan.pilih = newArr;
			}
		},
		watch: {
		},
		methods: {
      save(){
				this.$validator.validateAll('formTanggapan').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.formTanggapan.id_user = this.currentUser.id;
							this.$store.dispatch('pertemuanBKCU/updateTanggapan', [this.formTanggapan.id, this.formTanggapan]);
						}else{
							this.formTanggapan.id_user = this.currentUser.id;
							this.formTanggapan.id_cu = this.currentUser.id_cu;
							this.$store.dispatch('pertemuanBKCU/storeTanggapan', [this.kegiatan_id, this.formTanggapan]);
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