<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="form">

			<!-- message -->
			<message v-if="errors.any('form') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
			</message>

			<!-- content -->
			<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.name')}">
					<i class="icon-cross2" v-if="errors.has('form.name')"></i>
					Pengumuman:
				</h5>

				<!-- textarea -->
				<textarea rows="5" type="text" name="name" class="form-control" placeholder="Silahkan masukkan pengumuman di website anda"
					v-validate="'required|min:5'" v-model="form.name"></textarea>

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.name')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
				</small>
				<small class="text-muted" v-else>&nbsp;
				</small>
			</div>

			<!-- CU -->
			<div class="form-group" v-if="currentUser.id_cu == 0" :class="{'has-error' : errors.has('form.id_cu')}">

				<!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('form.id_cu')}">
					<i class="icon-cross2" v-if="errors.has('form.id_cu')"></i>
					CU:
				</h5>

				<!-- select -->
				<select class="form-control" name="id_cu" v-model="form.id_cu" data-width="100%" v-validate="'required'" data-vv-as="CU" :disabled="modelCU.length === 0">
					<option disabled value="">Silahkan pilih CU</option>
					<option value="0"><span v-if="currentUser.pus">{{currentUser.pus.name}}</span> <span v-else>Puskopdit</span></option>
					<option disabled value="">----------------</option>
					<option v-for="cu in modelCU" :value="cu.id">{{cu.name}}</option>
				</select>

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('form.id_cu')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_cu') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
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
	import { mapGetters } from 'vuex';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";

	export default {
		props: ['currentUser','state','id'],
		components: {
			message,
			formButton,
		},
		data() {
			return {
				kelas: 'pengumuman',
				submited: false,
				cancelTitle: 'Tutup',
				cancelIcon: 'icon-cross',
				cancelState: 'methods'
			}
		},
		created(){
			this.fetch();
		},
		methods: {
			fetch(){
				if(this.state == 'ubah'){
					this.$store.dispatch(this.kelas + '/edit',this.id);	
				}else{
					this.$store.dispatch(this.kelas + '/create');
				}
			},
			save() {
				this.form.id_cu = this.currentUser.id_cu;
				this.$validator.validateAll('form').then((result) => {
					if(result){
						if(this.state == 'ubah'){
							this.$store.dispatch(this.kelas + '/update',[this.id,this.form]);
						}else{
							this.$store.dispatch(this.kelas + '/store',this.form);
						}
						
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});	
			},
			cancelClick(){
				this.$emit('cancelClick');
			}
		},
		computed: {
			...mapGetters('pengumuman',{
				form: 'data',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
			}),
		}
	}
</script>