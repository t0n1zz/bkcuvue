<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="formSimpanan">

		<!-- message -->
		<message v-if="message.show" @close="messageClose" :title="'Oops terjadi kesalahan'" :errorData="message.content" :showDebug="false">
		</message>

		<div class="row">

			<!-- cu -->
			<div class="col-md-12" v-if="currentUser.id_cu === 0">
				<div class="form-group" :class="{'has-error' : errors.has('formSimpanan.cu.id')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formSimpanan.cu.id')}">
						<i class="icon-cross2" v-if="errors.has('formSimpanan.cu.id')"></i>
						CU:
					</h5>

					<!-- select -->
					<select class="form-control" name="cu_id" v-model="formSimpanan.cu.id" data-width="100%" @change="changeCu($event.target.value)" v-validate="'required'" data-vv-as="CU" :disabled="modelCU.length === 0">
						<option disabled value="0">
							<span v-if="modelCUStat === 'loading'">Mohon tunggu...</span>
							<span v-else>Silahkan pilih CU</span>
						</option>
						<option v-for="(cu, index) in modelCU" :value="cu.id" :key="index">{{cu.name}}</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formSimpanan.cu.id')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formSimpanan.cu.id') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<div class="alert bg-warning text-white alert-styled-left " v-if="modelProdukCu.length === 0">
				<span class="font-weight-semibold">Maaf data jenis simpanan tidak ditemukan, pastikan anda sudah menambahkan data simpanan di menu <u>Tambah Produk & Pelayanan</u>
				</span>
			</div>

			<div class="alert bg-info text-white alert-styled-left " v-else>
				<span class="font-weight-semibold">Apabila jenis simpanan yang ingin anda pilih tidak ada, pastikan anda sudah menambahkan data simpanan di menu <u>Tambah Produk & Pelayanan</u>
				</span>
			</div>

			<!-- produk cu -->
			<div class="col-md-12">
				<div class="form-group" :class="{'has-error' : errors.has('formSimpanan.produk_cu_id')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formSimpanan.produk_cu.id')}">
						<i class="icon-cross2" v-if="errors.has('formSimpanan.produk_cu.id')"></i>
						Produk CU:
					</h5>

					<!-- select -->
					<select class="form-control" name="produk_cu_id" v-model="formSimpanan.produk_cu.id" data-width="100%" @change="changeProdukCu($event.target.value)" v-validate="'required'" data-vv-as="Produk CU" :disabled="modelProdukCu.length === 0">
						<option disabled value="0">
							<span v-if="modelProdukCuStat === 'loading'">Mohon tunggu...</span>
							<span v-else>Silahkan pilih Produk CU</span>
						</option>
						<option v-for="(produk, index) in modelProdukCu" :key="index" :value="produk.id">{{produk.name}}</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formSimpanan.produk_cu.id')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formSimpanan.produk_cu.id') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- no.rek -->
			<div class="col-md-12">
				<div class="form-group" :class="{'has-error' : errors.has('formSimpanan.no_rek')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formSimpanan.no_rek')}">
						<i class="icon-cross2" v-if="errors.has('formSimpanan.no_rek')"></i>
						No. Rekening:
					</h5>

					<!-- text -->
					<cleave 
						name="no_rek"
						v-model="formSimpanan.no_rek" 
						class="form-control" 
						:options="cleaveOption.number12"
						placeholder="Silahkan masukkan jumlah no. rekening"
						v-validate="'required'" data-vv-as="No. Rekening" ></cleave>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formSimpanan.no_rek')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formSimpanan.no_rek') }}
					</small>
					<small class="text-muted" v-else>&nbsp;
					</small>
				</div>
			</div>

			<!-- tanggal -->
			<div class="col-md-12">
				<div class="form-group" :class="{'has-error' : errors.has('formSimpanan.tanggal')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formSimpanan.tanggal')}"><i class="icon-cross2" v-if="errors.has('formSimpanan.tanggal')"></i> Tanggal:</h5>

					<!-- input -->
					<date-picker @dateSelected="formSimpanan.tanggal = $event" :defaultDate="formSimpanan.tanggal"></date-picker>	
					<input v-model="formSimpanan.tanggal" v-show="false" v-validate="'required'" data-vv-as="Tanggal"/>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formSimpanan.tanggal')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formSimpanan.tanggal') }}
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

			<button type="submit" class="btn btn-primary" :disabled="formSimpanan.produk_cu_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formSimpanan.produk_cu_id == ''">
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
	import infoIcon from "../../components/infoIcon.vue";
	import DatePicker from "../../components/datePicker.vue";

	export default {
		props: ['mode','selected'],
		components: {
			checkValue,
			Message,
			Cleave,
			infoIcon,
			DatePicker
		},
		data() {
			return {
				title: '',
				kelas: 'aktivis',
				formSimpanan:{
					anggota_id: '',
					cu: {
						id: 0,
						name: ''
					},
					produk_cu: {
						id: 0,
						name: ''
					},
					tanggal: '',
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
					number12: {
            numeral: true,
            numeralIntegerScale: 12,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
					},
					number4: {
            numeral: true,
            numeralIntegerScale: 4,
            numeralDecimalScale: 0,
            stripLeadingZeroes: false
          },
					date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
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
			
			if(this.modelCUStat == 'success'){
				if(this.mode == 'edit'){
					this.formSimpanan = this.selected;

					if(this.currentUser.id_cu == 0){
						this.changeCu(this.formSimpanan.cu.id);
					}
				}

				if(this.currentUser.id_cu != 0){
					this.changeCu(this.currentUser.id_cu);
				}
			}
		},
		watch: {
			modelCUStat(value){
				if(value === "success"){
					if(this.mode == 'edit'){
						this.formSimpanan = this.selected;

						if(this.currentUser.id_cu == 0){
							this.changeCu(this.formSimpanan.cu.id);
						}
					}

					if(this.currentUser.id_cu != 0){
						this.changeCu(this.currentUser.id_cu);
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

				if(cu){
					this.formSimpanan.cu.id = cu.id;
					this.formSimpanan.cu.name = cu.name;
				}

				this.fetchProdukCu(id);
			},
			changeProdukCu(id){
				let produk_cu;
				if(id != 0){
					produk_cu = _.find(this.modelProdukCu, function(o){
						return o.id == id;
					});
				}
				this.formSimpanan.produk_cu.name = produk_cu.name;
			},
			fetchCU(){
				if(this.modelCuStat != 'success'){
					this.$store.dispatch('cu/getHeader');
				}else{
					this.idCu = this.$route.params.cu;
					this.tingkat = this.$route.params.tingkat;
				}
			},
			fetchProdukCu(id){
				produkCuAPI.getSimpananCu(id)
        .then((response) => {
					this.modelProdukCu = response.data.model;
          this.modelProdukCuStat = 'success';
        })
        .catch((error) => {
					this.modelProdukCu = error.response;
          this.modelProdukCuStat = 'fail';
				});
			},
			save(){
				this.$validator.validateAll('formSimpanan').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$emit('editSimpanan',this.formSimpanan);
						}else{
							this.$emit('createSimpanan',this.formSimpanan);
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