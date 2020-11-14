<template>
	<div>

		<!-- message -->
		<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<!-- main panel -->
		<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">

		<div class="timeline timeline-left">
			<div class="timeline-container">

				<div class="timeline-row" v-for="(formCoaInduk, index) in modelCoa" :key="index">
					<div class="timeline-icon" v-if="formCoaInduk.tipe == 'G'">
						<div class="bg-white">
							{{ formCoaInduk.kode.charAt(0) }}
						</div>
					</div>

					<div class="card card-body" v-if="formCoaInduk.tipe == 'G'">
						<div class="row">

							<div class="col-sm-6 col-lg-10">
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text">{{ formCoaInduk.kode }}</span>
									</div>

									<input type="text" :name="formCoaInduk.name" class="form-control" v-model="formCoaInduk.name" readonly>
								</div>
							</div>

							<div class="col-sm-6 col-lg-2 text-right">
								<cleave 
									:name="formCoaInduk.name"
									v-model="formCoa[formCoaInduk.id]" 
									class="form-control" 
									:options="cleaveOption.numeric"
									readonly></cleave>
							</div>

							<template v-for="(formCoaAnak, index) in modelCoa" >
								<div class="col-lg-4 col-md-6" v-if="formCoaAnak.id_induk == formCoaInduk.id && formCoaAnak.tipe == 'P'" :key="index">
									<div class="card card-body mt-3 mb-0" :key="index">

										<!-- title -->
										<h5>
											<span class="badge bg-blue-400 align-self-center ml-auto mr-1">{{ formCoaAnak.kode }}</span> {{ formCoaAnak.name }}
										</h5>

										<!-- text -->
										<cleave 
											:name="formCoaAnak.name"
											v-model="formCoa[formCoaAnak.id]" 
											class="form-control" 
											:options="cleaveOption.numeric"
											:placeholder="'Silahkan masukkan ' + formCoaAnak.name"
											@blur.native="calculate(formCoaAnak.id, formCoa[formCoaAnak.id])"
											></cleave>

									</div>
								</div>
							</template>
						</div>
					</div>

				</div>

			</div>
		</div>

			<!-- main form -->
			<div class="card mt-2">
				<div class="card-body">
					<div class="row">

						<!-- inflasi -->
						<div class="col-md-6">

							<button type="button" class="btn btn-light btn-block pb-2" @click.prevent="calculate(5,500)"> calculate</button>

								<!-- title -->
								<h5>Inflasi</h5>

								<!-- text -->
								<cleave 
									v-model="form.laju_inflasi" 
									class="form-control" 
									:options="cleaveOption.numeric2"
									placeholder="Silahkan masukkan jumlah inflasi"></cleave>
						</div>

						<!-- harga pasar -->
						<div class="col-md-6">

								<!-- title -->
								<h5>Harga Pasar</h5>

								<!-- text -->
								<cleave 
									v-model="form.harga_pasar" 
									class="form-control" 
									:options="cleaveOption.numeric2"
									placeholder="Silahkan masukkan harga pasar"
									></cleave>

						</div>

					</div>
				</div>
			</div>

			<!-- form info -->
			<form-info></form-info>	

			<!-- form button -->
			<div class="card card-body">
				<form-button
					:cancelState="'methods'"
					:formValidation="'form'"
					@cancelClick="back"></form-button>
			</div>

		</form>
					
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">
			
		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import _ from 'lodash';
	import infoIcon from "../../components/infoIcon.vue";
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';
	import wajibBadge from "../../components/wajibBadge.vue";
	import DatePicker from "../../components/datePicker.vue";

	export default {
		props: ['modelCoa','modelCoaStat'],
		components: {
			message,
			formButton,
			formInfo,
			Cleave,
			infoIcon,
			wajibBadge,
			DatePicker,
			appModal
		},
		data() {
			return {
				kelas: 'laporanCu',
				idLaporanTp: '',
				isModelTp: false,
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modelCoaTransformed: {},
				submited: false,
				formCoa: {},
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
					numeric2: {
            numeral: true,
            numeralIntegerScale: 2,
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
          }
        },
			}
		},
		created(){
			for (const [key, itemCoaInduk] of Object.entries(this.modelCoa)) {
				this.modelCoaTransformed[itemCoaInduk.id] = itemCoaInduk ;
				// this.formCoa[itemCoaInduk.id] = 0;
			}
		},
		watch: {
			updateStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateResponse.message;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			}
    },
		methods: {
			save() {
				if(this.currentUser.id_cu != 0){
					this.form.id_cu = this.currentUser.id_cu;
				}
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode === 'edit'){
							this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, this.form]);
						}else if(this.$route.meta.mode === 'editTp'){
							this.$store.dispatch(this.kelas + '/updateTp', [this.$route.params.id, this.form]);
						}else if(this.$route.meta.mode === 'editDraft'){
							this.$store.dispatch(this.kelas + '/updateDraft', [this.$route.params.id, this.form]);
						}else if(this.$route.meta.mode === 'editTpDraft'){
							this.$store.dispatch(this.kelas + '/updateTpDraft', [this.$route.params.id, this.form]);
						}else{
							if(this.form.id_tp == 'konsolidasi'){
								this.$store.dispatch(this.kelas + '/store', this.form);
							}else{
								this.$store.dispatch(this.kelas + '/storeTp', this.form);
							}
						}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			calculate(id, increment){
				// for (const [key, itemCoaInduk] of Object.entries(this.modelCoa)) {
				// 	if(itemCoaInduk.tipe == 'G'){
				// 		this.form[itemCoaInduk.kode] = 0;
				// 	}
				// 	for (const [key, itemCoaAnak] of Object.entries(this.modelCoa)) {
				// 		if(itemCoaInduk.id == itemCoaAnak.id_induk){
				// 			this.form[itemCoaInduk.kode] = Number(this.form[itemCoaInduk.kode]) + Number(this.form[itemCoaAnak.kode]);

				// 			console.log(itemCoaInduk.kode, this.form[itemCoaInduk.kode]);
				// 		}
				// 	}
				// };

				// if(id == 0)return;
				// this.form[id] = increment;
				console.log(id, increment);
    		this.calculateInduk(this.modelCoaTransformed[id].id_induk, increment);
			},
			calculateInduk(id, increment){
				if(id == 0)return;
				var induk = Number(this.formCoa[id]);
				induk += Number(increment);
				this.formCoa[id] = induk;
    		this.calculateInduk(this.modelCoaTransformed[id].id_induk, increment);
			},
			back(){
				this.$emit('back');
			},
			modalTutup() {
 				if(this.updateStat === 'success'){
					this.back();
				}

				this.modalShow = false;
				this.submitedKategori = false;
				this.submitedPenulis = false;
			},
			modalBackgroundClick(){
				if(this.modalState === 'success'){
					this.modalTutup;
				}else if(this.modalState === 'loading'){
					// do nothing
				}else{
					this.modalShow = false
				}
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('laporanCu',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('laporanTp',{
				listLaporanTpData: 'data2S',
				listLaporanTpDataStat: 'dataStat2S',
			}),
			...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
			}),
			...mapGetters('tp',{
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
			}),
		}
	}
</script>