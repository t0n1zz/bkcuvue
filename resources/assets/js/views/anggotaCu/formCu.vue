<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="formDataCu">

		<!-- message -->
		<message v-if="message.show" @close="messageClose" :title="'Oops terjadi kesalahan'" :errorData="message.content" :showDebug="false">
		</message>

		<div class="row">

			<!-- cu -->
			<div class="col-md-12" v-if="currentUser.id_cu === 0">
				<div class="form-group" :class="{'has-error' : errors.has('formDataCu.cu.id')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formDataCu.cu.id')}">
						<i class="icon-cross2" v-if="errors.has('formDataCu.cu.id')"></i>
						CU:
					</h5>

					<!-- select -->
					<select class="form-control" name="cu_id" v-model="formDataCu.cu.id" data-width="100%" @change="changeCu($event.target.value)" v-validate="'required'" data-vv-as="CU" :disabled="modelCU.length === 0">
						<option disabled value="0">
							<span v-if="modelCUStat === 'loading'">Mohon tunggu...</span>
							<span v-else>Silahkan pilih CU</span>
						</option>
						<option v-for="cu in modelCU" :value="cu.id">{{cu.name}}</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formDataCu.cu.id')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formDataCu.cu.id') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- no_ba -->
			<div class="col-md-12">
				<div class="form-group" :class="{'has-error' : errors.has('formDataCu.no_ba')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formDataCu.no_ba')}">
						<i class="icon-cross2" v-if="errors.has('formDataCu.no_ba')"></i>
						No. BA:
					</h5>

					<!-- text -->
					<input type="text" name="anggota_no_ba" class="form-control" placeholder="Silahkan masukkan no. BA anggota CU" v-validate="'required'" data-vv-as="No. BA Anggota CU" v-model="formDataCu.no_ba">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formDataCu.no_ba')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formDataCu.no_ba') }}
					</small>
					<small class="text-muted" v-else>&nbsp;
					</small>
				</div>
			</div>

		</div>

		<!-- divider -->
		<hr>
		
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button type="submit" class="btn btn-primary" :disabled="formDataCu.cu.id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formDataCu.cu.id == ''">
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
	import Cleave from 'vue-cleave-component';
	import produkCuAPI from '../../api/produkCu.js';

	export default {
		props: ['mode','selected'],
		components: {
			checkValue,
			Message,
			Cleave
		},
		data() {
			return {
				title: '',
				kelas: 'aktivis',
				formDataCu:{
					no_ba: '',
					cu:{
						id: 0,
						name: ''
					}
				},
				modelProdukCu: [],
				modelProdukCuStat: '',
				cleaveOption: {
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
					},
				},
				message: {
					show: false,
					content: ''
				},
				submited: false,
			}
		},
		created(){
			this.fetchCU();

			if(this.mode == 'edit'){
				if(this.modelCUStat == 'success'){
					this.formDataCu = this.selected;
				}
			}
		},
		watch: {
			modelCUStat(value){
				if(value === "success"){
					if(this.mode == 'edit'){
						this.formDataCu = this.selected;
					}
				}
			},
		},
		methods: {
			changeCu(id){
				let cu;
				if(id != 0){
					cu = _.find(this.modelCU, function(o){
						return o.id == id;
					});
				}
				this.formDataCu.cu.name = cu.name;
			},
			fetchCU(){
				if(this.modelCuStat != 'success'){
					this.$store.dispatch('cu/getHeader');
				}else{
					this.idCu = this.$route.params.cu;
					this.tingkat = this.$route.params.tingkat;
				}
			},
			save(){
				this.$validator.validateAll('formDataCu').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$emit('editCu',this.formDataCu);
						}else{
							this.$emit('createCu',this.formDataCu);
						}
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
			...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>