<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="form">

			<!-- message -->
			<message v-if="errors.any('form') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
			</message>

			<!-- name -->
			<div class="form-group" :class="{'has-error' : errors.has('form.kategoriNama')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.name')}">
					<i class="icon-cross2" v-if="errors.has('form.name')"></i>
					Nama:
				</h5>

				<!-- text -->
				<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan name kategori" v-validate="'required'" data-vv-as="Nama" v-model="form.name">

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.name')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
				</small>
				<small class="text-muted" v-else>&nbsp;
				</small>
			</div>

			<!-- deskripsi -->
			<div class="form-group" :class="{'has-error' : errors.has('form.deskripsi')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.deskripsi')}">
					<i class="icon-cross2" v-if="errors.has('form.deskripsi')"></i>
					Keterangan:
				</h5>

				<!-- textarea -->
				<textarea rows="5" type="text" name="deskripsi" class="form-control" placeholder="Silahkan masukkan keterangan kategori"
					v-validate="'required|min:5'" v-model="form.deskripsi"></textarea>

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.deskripsi')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.deskripsi') }}
				</small>
				<small class="text-muted" v-else>&nbsp;
				</small>
			</div>

			<hr>
			<form-button
				:cancelTitle="cancelTitle"
				:cancelIcon="cancelIcon"
				:cancelState="cancelState"
				:formValidation="'form'"
				@cancelClick="cancelClick"></form-button>

		</form>

	</div>
</template>

<script>
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";

	export default {
		props:['id_cu'],
		components: {
			message,
			formButton,
			formInfo
		},
		data() {
			return {
				kelas: 'artikelKategori',
				form: {
					id_cu: '',
					name: '',
					deskripsi: ''
				},
				submited: false,
				cancelTitle: 'Tutup',
				cancelIcon: 'icon-cross',
				cancelState: 'methods'
			}
		},
		methods: {
			save() {
				this.form.id_cu = this.id_cu;
				this.$validator.validateAll('form').then((result) => {
					if(result){
						this.$store.dispatch(this.kelas + '/store',this.form);
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});	
			},
			cancelClick(){
				this.$emit('cancelClick');
			}
		}
	}
</script>