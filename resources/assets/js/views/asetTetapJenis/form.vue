<template>
	<div>

		<form @submit.prevent="save" data-vv-scope="formModal">

		<div class="row">

			<!-- golongan -->
			<div class="col-md-12">
				<div class="form-group">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('formModal.aset_tetap_golongan_id')}">
						<i class="icon-cross2" v-if="errors.has('formModal.aset_tetap_golongan_id')"></i>
						Golongan: <wajib-badge></wajib-badge>
					</h6>

					<!-- <div class="input-group"> -->

						<!-- select -->
							<select class="form-control" name="jenis" v-model="formModal.aset_tetap_golongan_id" data-width="100%" v-validate="'required'" data-vv-as="Jenis" :disabled="modelGolongan.length == 0" @change="changeGolongan($event.target.value)">
							<option disabled value="">
								<span v-if="modelGolonganStat === 'loading'">Mohon tunggu...</span>
								<span v-else>Silahkan pilih golongan</span>
							</option>
							<option v-for="datas in modelGolongan" :value="datas.id" v-if="datas">{{datas.kode + ' | ' + datas.name}}</option>
						</select>

						<!-- button -->
						<!-- <div class="input-group-append" v-if="currentUser.can && currentUser.can['create_aset_tetap_jenis']">
							<button type="button" class="btn btn-light" @click="modalOpen('golongan')">
								<i class="icon-plus22"></i>
							</button>
						</div>

					</div> -->

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.aset_tetap_jenis_id')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.aset_tetap_jenis_id') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- kelompok -->
			<div class="col-md-12">
				<div class="form-group">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('formModal.aset_tetap_kelompok_id')}">
						<i class="icon-cross2" v-if="errors.has('formModal.aset_tetap_kelompok_id')"></i>
						Kelompok: <wajib-badge></wajib-badge>
					</h6>

					<!-- <div class="input-group"> -->

						<!-- select -->
							<select class="form-control" name="jenis" v-model="formModal.aset_tetap_kelompok_id" data-width="100%" v-validate="'required'" data-vv-as="Jenis" :disabled="modelKelompok.length == 0">
							<option disabled value="">
								<span v-if="modelKelompokStat === 'loading'">Mohon tunggu...</span>
								<span v-else>Silahkan pilih kelompok</span>
							</option>
							<option v-for="datas in modelKelompok" :value="datas.id" v-if="datas">{{datas.kode + ' | ' + datas.name}}</option>
						</select>

						<!-- button -->
						<!-- <div class="input-group-append" v-if="currentUser.can && currentUser.can['create_aset_tetap_jenis']">
							<button type="button" class="btn btn-light" @click="modalOpen('kelompok')">
								<i class="icon-plus22"></i>
							</button>
						</div>

					</div> -->

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('form.aset_tetap_jenis_id')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('form.aset_tetap_jenis_id') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

			<!-- kode -->
			<div class="col-md-12" v-if="formModal.aset_tetap_kelompok_id != ''">
				<div class="form-group" :class="{'has-error' : errors.has('formModal.kode')}">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('formModal.kode')}">
						<i class="icon-cross2" v-if="errors.has('formModal.kode')"></i>
						Kode: <wajib-badge></wajib-badge></h6>

					<!-- text -->
					<cleave 
						name="kode"
						v-model="formModal.kode" 
						class="form-control" 
						:options="cleaveOption.number4"
						placeholder="Silahkan masukkan kode"
						v-validate="'required'" data-vv-as="Kode"></cleave>	
					
					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formModal.kode')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formModal.kode') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div> 

			<div class="col-md-12" v-if="formModal.aset_tetap_kelompok_id != ''">
				<div class="form-group" :class="{'has-error' : errors.has('formModal.name')}">

					<!-- title -->
					<h5 :class="{ 'text-danger' : errors.has('formModal.name')}">
						<i class="icon-cross2" v-if="errors.has('formModal.name')"></i>
						Nama: <wajib-badge></wajib-badge>
					</h5>

					<!-- text -->
					<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama" v-validate="'required'" data-vv-as="Nama" v-model="formModal.name">

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formModal.name')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formModal.name') }}
					</small>
					<small class="text-muted" v-else>&nbsp;
					</small>
				</div>
			</div>

			<!-- keterangan_keluar -->
			<div class="col-md-12" v-if="formModal.aset_tetap_kelompok_id != ''">
				<div class="form-group" >

					<!-- title -->
					<h6>Keterangan:</h6>

					<!-- text -->
					<textarea rows="3" 
            type="text" 
            name="keterangan" 
            class="form-control" 
            placeholder="Silahkan masukkan keterangan " v-model="formModal.keterangan"></textarea>
					
				</div>
			</div>

		</div>

		<!-- form info -->
		<form-info></form-info>	

		<!-- divider -->
		<hr>
		
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button type="submit" class="btn btn-primary" :disabled="formModal.cu_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formModal.cu_id == ''">
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
	import infoIcon from "../../components/infoIcon.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';

	export default {
		props: ['kelas','mode','selected'],
		components: {
			checkValue,
			Message,
			infoIcon,
			wajibBadge,
			formInfo,
			Cleave
		},
		data() {
			return {
				cleaveOption: {
					number4: {
            numeral: true,
            numeralIntegerScale: 4,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
					},
				},
				formModal:{
					aset_tetap_kelompok_id: '',
					id: '',
					kode: '',
					name: '',
					keterangan: '',
				},
				message: {
					show: false,
					content: ''
				},
				submited: false,
			}
		},
		created(){
			this.$store.dispatch('asetTetapGolongan/resetDataS');
			this.$store.dispatch('asetTetapGolongan/get');
			if(this.mode == 'ubah'){
				this.formModal = Object.assign({},this.selected);
			}
		},
		watch: {},
		methods: {
			changeGolongan(id){
				this.$store.dispatch('asetTetapKelompok/resetDataS');
				this.$store.dispatch('asetTetapKelompok/get', id);
			},
			save(){
				this.$validator.validateAll('formModal').then((result) => {
					if (result) {
						if(this.mode == 'tambah'){
							this.$store.dispatch(this.kelas + '/store', this.formModal);
						}else{
							this.$store.dispatch(this.kelas + '/update',[this.selected.id, this.formModal]);
						}
					}else{
						this.submited = true;
					}	
				});
			},
			tutup(){
				this.$emit('tutup');
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('asetTetapKelompok',{
				modelKelompok: 'dataS',
				modelKelompokStat: 'dataStatS'
			}),
			...mapGetters('asetTetapGolongan',{
				modelGolongan: 'dataS',
				modelGolonganStat: 'dataStatS'
			}),
		}
	}
</script>