<template>
	<div>
		<div class="card card-body">
			<card-data :itemData="selectedItem"></card-data>
		</div>

		<form @submit.prevent="save" data-vv-scope="formData">

		<div class="row">

			<!-- kondisi -->
			<div class="col-md-12">
				<div class="form-group">

					<!-- title -->
					<h6 :class="{ 'text-danger' : errors.has('formData.kondisi')}">
						<i class="icon-cross2" v-if="errors.has('formData.kondisi')"></i>
						Kondisi: 
					</h6>

					<!-- select -->
					<select class="form-control" name="kondisi" v-model="formData.kondisi" data-width="100%" v-validate="'required'" data-vv-as="Kondisi">
						<option disabled value="">Silahkan pilih kondisi</option>
						<option value="Baik">Baik</option>
						<option value="Diperbaiki">Diperbaiki</option>
						<option value="Rusak">Rusak</option>
						<option value="Dijual">Dijual</option>
						<option value="Hilang">Hilang</option>
						<option value="Disewa">Disewa</option>
					</select>

					<!-- error message -->
					<small class="text-muted text-danger" v-if="errors.has('formData.kondisi')">
						<i class="icon-arrow-small-right"></i> {{ errors.first('formData.kondisi') }}
					</small>
					<small class="text-muted" v-else>&nbsp;</small>
				</div>
			</div>

		</div>

		<!-- form info -->
		<form-info></form-info>	
		<br/>
		
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button type="submit" class="btn btn-primary" :disabled="formData.cu_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formData.cu_id == ''">
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
	import infoIcon from "../../components/infoIcon.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import cardData from "./card.vue";
	import formInfo from "../../components/formInfo.vue";

	export default {
		props: ['kelas','selectedItem'],
		components: {
			checkValue,
			Message,
			Cleave,
			infoIcon,
			wajibBadge,
			cardData,
			formInfo
		},
		data() {
			return {
				formData:{},
				modelProdukCu: [],
				modelProdukCuStat: '',
				cleaveOption: {
					date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
					},
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
			this.fetch();
			this.formData = Object.assign({},this.selectedItem);
		},
		watch: {
			modelLokasiStat(value){
				if(value === "success"){
					this.formData = Object.assign({},this.selectedItem);
				}
			},
		},
		methods: {
			save(){
				this.$validator.validateAll('formData').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/update',[this.selectedItem.id, this.formData]);
					}else{
						this.submited = true;
					}	
				});
			},
			fetch(){
				this.$store.dispatch('asetTetapLokasi/resetDataS');
				this.$store.dispatch('asetTetapLokasi/get');
			},
			tutup(){
				this.$emit('tutup');
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('asetTetapLokasi',{
				modelLokasi: 'dataS',
				modelLokasiStat: 'dataStatS',
				updateLokasiResponse: 'update',
				updateLokasiStat: 'updateStat',
			}),
		}
	}
</script>