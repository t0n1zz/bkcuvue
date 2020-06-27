<template>
	<div>

		<div class="card d-print-none" >
			<div class="card-body">  
				<div class="row">
					
					<!-- cu -->
					<div class="col-sm-5 mb-2" v-if="this.currentUser.id_cu == 0 && !isCu">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text">Pilih CU</span>
							</div>

							<!-- select -->
							<select class="form-control" name="idCu" v-model="idCu" data-width="100%" :disabled="modelCuStat === 'loading'">
								<option disabled value="">Silahkan pilih data</option>
								<slot></slot>
								<option value="semua">Semua CU</option>
								<option disabled value="">----------------</option>
								<option v-for="(cu, index) in modelCu" :value="cu.id" :key="index">{{cu.name}}</option>
							</select>

							<!-- reload cu -->
							<div class="input-group-append">
								<button class="btn btn-light" @click="fetchCU" :disabled="modelCuStat === 'loading'">
									<i class="icon-sync" :class="{'spinner' : modelCuStat === 'loading'}"></i>
								</button>
							</div>
						</div>
					</div>

					<!-- status -->
					<div class="mb-2" :class="{'col-sm-5' : this.currentUser.id_cu == 0, 'col-sm-10' : this.currentUser.id_cu != 0 , 'col-sm-10' : this.isCu}">
						<div class="input-group">
							<span class="input-group-prepend">
								<span class="input-group-text">Pilih Status</span>
							</span>

							<!-- select -->
							<select class="form-control" name="status" v-model="status" data-width="100%" @change="changeDetailTanggal($event.target.value)">
								<option disabled value="">Silahkan pilih status</option>
								<option value="1">Menunggu</option>
								<option value="2">Dokumen Tidak Lengkap</option>
								<option value="3">Ditolak</option>
								<option value="4">Disetujui</option>
								<option value="5">Dicairkan</option>
								<option value="6">Selesai</option>
							</select>
						</div>
					</div>

					<!-- tanggal pencairan -->
					<div class="col-sm-5" v-if="status != ''">
						<div class="input-group">
							<span class="input-group-prepend">
								<span class="input-group-text">Tanggal Awal {{ detailTanggal }}</span>
							</span>

              <!-- input -->
							<date-picker @dateSelected="awal = $event" :defaultDate="awal"></date-picker>	

						</div>
					</div>

          <div class="col-sm-5" v-if="status != ''">
						<div class="input-group">
							<span class="input-group-prepend">
								<span class="input-group-text">Tanggal Akhir {{ detailTanggal }}</span>
							</span>

              <!-- input -->
							<date-picker @dateSelected="akhir = $event" :defaultDate="akhir"></date-picker>

						</div>
					</div>

          <div class="col-sm-2" v-if="status != ''">
            <button type="button" class="btn btn-light btn-block" @click.prevent="cari()">Cari</button>
          </div>

				</div>					
			</div>
		</div>		

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import Cleave from 'vue-cleave-component';
	import DatePicker from "../../components/datePicker.vue";

	export default {
		components: {
			Cleave, 
			DatePicker
		},
		props: ["isCu"],
		data(){
			return {
				cleaveOption: {
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
          },
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
					},
				},
				status: '',
				detailTanggal: 'Pengajuan',
        awal:'',
				akhir:'',
				idCu: '',
			}
		},
		created(){
			if(this.$route.meta.mode == 'laporan'){
				this.awal = this.$route.params.awal;
				this.akhir = this.$route.params.akhir;
				this.status = this.$route.params.status;
			}
			if(this.currentUser.id_cu != 0){
				this.idCu = this.currentUser.id_cu;
			}else{
				this.idCu = 'semua';
			}
			this.changeDetailTanggal(this.$route.params.status);
		},
		watch: {
			'$route' (to, from){
				if(this.$route.meta.mode == 'laporan'){
					this.awal = this.$route.params.awal;
					this.akhir = this.$route.params.akhir;
					this.idCu = this.$route.params.cu;
					this.status = this.$route.params.status;
				}
				if(this.currentUser.id_cu == 0){
					this.fetchCU();
				}
				this.changeDetailTanggal(this.$route.params.status);
			},
			modelCuStat(value){
				if(value === "success"){
					this.idCu = this.$route.params.cu;
				}
			},
    },
		methods: {
			cari(){
        this.$emit('cari', this.awal, this.akhir, this.idCu, this.status);
			},
			fetchCU(){
				if(this.modelCu.length == 0){
					this.$store.dispatch('cu/getHeader', this.currentUser.id_pus);
				}else{
					this.idCu = this.$route.params.cu;
				}
			},
			changeDetailTanggal(value){
				if(value == 4 || value == 5 || value == 6){
					this.detailTanggal = 'Pencairan';
				}else{
					this.detailTanggal = 'Pengajuan';
				}
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