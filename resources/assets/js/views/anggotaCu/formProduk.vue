<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="formProduk">

		<!-- message -->
		<message v-if="message.show" @close="messageClose" :title="'Oops terjadi kesalahan'" :errorData="message.content" :showDebug="false">
		</message>

		<div class="row">

			<!-- cu -->
			<div class="col-md-12" v-if="currentUser.id_cu === 0">
				<div class="form-group" :class="{'has-error' : errors.has('formProduk.cu.id')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formProduk.cu.id')}">
						<i class="icon-cross2" v-if="errors.has('formProduk.cu.id')"></i>
						CU:
					</h5>

					<!-- select -->
					<select class="form-control" name="cu_id" v-model="formProduk.cu.id" data-width="100%" @change="changeCu($event.target.value)" v-validate="'required'" data-vv-as="CU" :disabled="modelCu.length === 0">
						<option disabled value="0">
							<span v-if="modelCuStat === 'loading'">Mohon tunggu...</span>
							<span v-else>Silahkan pilih CU</span>
						</option>
						<option v-for="cu in modelCu" :value="cu.id">{{cu.name}}</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formProduk.cu.id')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formProduk.cu.id') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<div class="alert bg-warning text-white alert-styled-left " v-if="formStateProdukCu.length === 0">
				<span class="font-weight-semibold">Maaf data jenis produk tidak ditemukan, pastikan anda sudah menambahkan data produk di menu <u>Tambah Produk & Pelayanan</u>
				</span>
			</div>

			<!-- produk cu -->
			<div class="col-md-12" v-else>
				<div class="form-group" :class="{'has-error' : errors.has('formProduk.produk_cu_id')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formProduk.produk_cu.id')}">
						<i class="icon-cross2" v-if="errors.has('formProduk.produk_cu.id')"></i>
						Produk CU: <info-icon :message="'Apabila jenis produk yang ingin anda pilih tidak ada, pastikan anda sudah menambahkan data produk di menu Tambah Produk & Pelayanan'"></info-icon>
				</h5>

					<!-- select -->
					<select class="form-control" name="produk_cu_id" v-model="formProduk.produk_cu.id" data-width="100%" @change="changeProdukCu($event.target.value)" v-validate="'required'" data-vv-as="Produk CU" :disabled="formStateProdukCu.length === 0">
						<option disabled value="0">
							<span v-if="formStateProdukCuStat === 'loading'">Mohon tunggu...</span>
							<span v-else>Silahkan pilih Produk CU</span>
						</option>
						<option v-for="produk in formStateProdukCu" :value="produk.id">{{produk.name}} | {{produk.tipe}}</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formProduk.produk_cu.id')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formProduk.produk_cu.id') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- no.rekening -->
			<div class="col-md-12" v-if="tipeProduk != ''">
				<div class="form-group" :class="{'has-error' : errors.has('formProduk.no_rek')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formProduk.no_rek')}">
						<i class="icon-cross2" v-if="errors.has('formProduk.no_rek')"></i>
						No. Rekening:
					</h5>

					<!-- text -->
					<cleave 
						name="no_rek"
						v-model="formProduk.no_rek" 
						class="form-control" 
						:options="cleaveOption.number12"
						placeholder="Silahkan masukkan jumlah no. rekening"
						v-validate="'required'" data-vv-as="No. Rekening" ></cleave>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formProduk.no_rek')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formProduk.no_rek') }}
					</small>
					<small class="text-muted" v-else>&nbsp;
					</small>
				</div>
			</div>

			<!-- saldo -->
			<div class="col-md-12"  v-if="tipeProduk != ''">
				<div class="form-group" :class="{'has-error' : errors.has('formProduk.saldo')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formProduk.saldo')}">
						<i class="icon-cross2" v-if="errors.has('formProduk.saldo')"></i>
						Saldo:
					</h5>

					<!-- text -->
					<cleave 
						name="saldo"
						v-model="formProduk.saldo" 
						class="form-control" 
						:options="cleaveOption.numeric"
						placeholder="Silahkan masukkan jumlah saldo"
						v-validate="'required'" data-vv-as="Saldo" ></cleave>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formProduk.saldo')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formProduk.saldo') }}
					</small>
					<small class="text-muted" v-else>&nbsp;
					</small>
				</div>
			</div>

			<!-- tanggal -->
			<div class="col-md-12"  v-if="tipeProduk != ''">
				<div class="form-group" :class="{'has-error' : errors.has('formProduk.tanggal')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formProduk.tanggal')}"><i class="icon-cross2" v-if="errors.has('formProduk.tanggal')"></i> Tanggal Buat: <info-icon :message="'Format: tahun-bulan-tanggal dalam angka. Contoh: 2019-01-23'"></info-icon></h5>

					<!-- input -->
					<cleave 
						name="tanggal"
						v-model="formProduk.tanggal" 
						class="form-control" 
						:raw="false" 
						:options="cleaveOption.date" 
						placeholder="Silahkan masukkan tanggal"
						v-validate="'required'" data-vv-as="Tanggal"></cleave>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formProduk.tanggal')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formProduk.tanggal') }}
					</small>
					<small class="text-muted" v-else>&nbsp;
					</small>	

				</div>
			</div>

			<!-- lama pinjaman -->
			<div class="col-md-12"  v-if="tipeProduk == 'pinjaman'">
				<div class="form-group" :class="{'has-error' : errors.has('formProduk.lama_pinjaman')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formProduk.lama_pinjaman')}">
						<i class="icon-cross2" v-if="errors.has('formProduk.lama_pinjaman')"></i>
						Lama Pinjaman (bulan):
					</h5>

					<!-- text -->
					<cleave 
						name="lama_pinjaman"
						v-model="formProduk.lama_pinjaman" 
						class="form-control" 
						:options="cleaveOption.number4"
						placeholder="Silahkan masukkan lama pinjaman"
						v-validate="'required'" data-vv-as="Saldo" ></cleave>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formProduk.lama_pinjaman')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formProduk.lama_pinjaman') }}
					</small>
					<small class="text-muted" v-else>&nbsp;
					</small>
				</div>
			</div>

		</div>

		<!-- divider -->
		<hr>
		
		<!-- button -->
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button type="button" @click.prevent="tambahProduk" class="btn btn-primary" :disabled="!currentUser.can['create_produk_cu']" v-if="formStateProdukCu.length === 0">
				<i class="icon-plus22"></i> Tambah Produk & Pelayanan</button>

			<button type="submit" class="btn btn-primary" :disabled="formProduk.produk_cu_id == ''" v-else>
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="button" @click.prevent="tambahProduk" class="btn btn-primary btn-block pb-2" :disabled="!currentUser.can['create_produk_cu']" v-if="formStateProdukCu.length === 0">
				<i class="icon-plus22"></i> Tambah Produk & Pelayanan</button>

			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formProduk.produk_cu_id == ''" v-else>
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

	export default {
		props: ['formState','selected'],
		components: {
			checkValue,
			Message,
			Cleave,
			infoIcon
		},
		data() {
			return {
				kelas: 'anggotaCu',
				tipeProduk: '',
				formProduk:{
					anggota_id: '',
					saldo: '',
					cu: {
						id: 0,
						name: ''
					},
					produk_cu: {
						id: 0,
						name: ''
					},
					tanggal: '',
					lama_pinjaman:'',
				},
				formStateProdukCu: [],
				formStateProdukCuStat: '',
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

			if(this.formState == 'edit'){
				if(this.modelCuStat == 'success'){
					this.formProduk = this.selected;
				}

				if(this.currentUser.id_cu == 0){
					this.changeCu(this.formProduk.cu.id);
				}
			}

			if(this.currentUser.id_cu != 0){
				this.formProduk.cu.id = this.currentUser.cu.id;
				this.formProduk.cu.name = this.currentUser.cu.name;
				this.fetchProdukCu(this.currentUser.cu.id);
			}
		},
		watch: {
			modelCuStat(value){
				if(value === "success"){
					if(this.formState == 'edit'){
						this.formProduk = this.selected;

						if(this.currentUser.id_cu == 0){
							this.changeCu(this.formProduk.produk_cu.id_cu);
						}
						this.changeProdukCu(this.formProduk.produk_cu_id);
					}

					if(this.currentUser.id_cu != 0){
						var cu = {};
						cu.id = this.currentUser.cu.id;
						cu.name = this.currentUser.cu.name;
						this.formProduk.cu = cu;
						this.fetchProdukCu(this.currentUser.cu.id);
					}

				}
			},
			formStateProdukCuStat(value){
				if(value == "success"){
					this.changeProdukCu(this.formProduk.produk_cu_id);
				}
			}
		},
		methods: {
			changeCu(id){
				let cu;

				if(id != 0){
					cu = _.find(this.modelCu, function(o){
						return o.id == id;
					});

					if(cu){
						this.formProduk.cu = cu;
					}
					this.fetchProdukCu(id);
				}
			},
			changeProdukCu(id){
				let produk_cu;
				if(id != 0){
					produk_cu = _.find(this.formStateProdukCu, function(o){
						return o.id == id;
					});
				}
				if(produk_cu){
					this.formProduk.produk_cu.id = produk_cu.id;
					this.formProduk.produk_cu.name = produk_cu.name;
	
					if(produk_cu.tipe == 'Simpanan Pokok' || produk_cu.tipe == 'Simpanan Wajib' || produk_cu.tipe == 'Simpanan Non Saham'){
						this.tipeProduk = 'simpanan';
					}else{
						this.tipeProduk = 'pinjaman';
					}
				}
			},
			fetchCU(){
				if(this.formStateCuStat != 'success'){
					this.$store.dispatch('cu/getHeader');
				}
			},
			fetchProdukCu(id){
				produkCuAPI.getCu(id)
        .then((response) => {
					this.formStateProdukCu = response.data.model;
          this.formStateProdukCuStat = 'success';
        })
        .catch((error) => {
					this.formStateProdukCu = error.response;
          this.formStateProdukCuStat = 'fail';
				});
			},
			save(){
				this.$validator.validateAll('formProduk').then((result) => {
					if (result) {
						if(this.formState == 'create'){
							this.$store.dispatch(this.kelas + '/storeProduk', [this.$route.params.id, this.formProduk]);
						}else if(this.formState == 'edit'){
							this.$store.dispatch(this.kelas + '/updateProduk', [this.formProduk.id, this.formProduk]);
						}
						this.submited = false;
					}else{
						this.submited = true;
					}	
				});	
			},
			messageClose(){
				this.message.show = false;
			},
			tambahProduk() {
				this.$emit('tambahProduk');
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
				modelCu: 'headerDataS',
				modelCuStat: 'headerDataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>