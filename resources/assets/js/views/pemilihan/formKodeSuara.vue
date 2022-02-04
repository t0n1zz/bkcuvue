<template>
	<div>
		<!-- message -->
		<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<form @submit.prevent="save" data-vv-scope="form">

			<!-- name -->
			<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.name')}">
					<i class="icon-cross2" v-if="errors.has('form.name')"></i>
					Nama: <wajib-badge></wajib-badge></h5>

				<!-- text -->
				<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan kode" v-validate="'required'" data-vv-as="Kode" v-model="form.name" @keydown.space.prevent>

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.name')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>

      <!-- divider -->
      <hr>
      
      <!-- tombol desktop-->
      <div class="text-center d-none d-md-block">
        <button class="btn btn-light" @click.prevent="tutup">
          <i class="icon-cross"></i> Tutup</button>

        <button type="submit" class="btn btn-primary" :disabled="errors.any('form')">
          <i class="icon-floppy-disk"></i> Simpan</button>
      </div>  

      <!-- tombol mobile-->
      <div class="d-block d-md-none">
        <button type="submit" class="btn btn-primary btn-block pb-2" :disabled="errors.any('form')">
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
		props: ['kelas','id','id_cu','selectedItem','mode'],
		components: {
			formInfo,
			message,
			wajibBadge
		},
		data() {
			return {
				form: {
					id: '',
					pemilihan_id: '',
					id_cu: '',
					name: '',
        },
				submited: false,
			}
		},
		created() {
			this.form.pemilihan_id = this.id;

			if(this.mode == 'edit'){
				this.form.id = this.selectedItem.id;
				this.form.id_cu = this.selectedItem.id_cu;
				this.form.name = this.selectedItem.name;
			}

			if(this.currentUser.id_cu === 0){
				if(this.modelCuStat != 'success'){
					this.$store.dispatch('cu/getHeader');
				}
			}
		},
		watch: {
		},
		methods: {
      save(){
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.mode === 'edit'){
							this.$store.dispatch(this.kelas + '/updateSuara', [this.form.id, this.form]);
						}else{
							this.$store.dispatch(this.kelas + '/storeSuara', this.form);
						}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
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
			...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
			}),
		}
	}
</script>