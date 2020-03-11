<template>
	<div>

		<div class="card d-print-none" >
			<div class="card-body">  
				<div class="row">

					<!-- status -->
					<div class="col-sm-10 mb-2">
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
					<div class="col-sm-5">
						<div class="input-group">
							<span class="input-group-prepend">
								<span class="input-group-text">Tanggal Awal {{ detailTanggal }}</span>
							</span>

              <!-- input -->
              <cleave 
                name="awal"
                v-model="awal" 
                class="form-control" 
                :raw="false" 
                :options="cleaveOption.date" 
                placeholder="YYYY-MM-DD"></cleave>

						</div>
					</div>

          <div class="col-sm-5">
						<div class="input-group">
							<span class="input-group-prepend">
								<span class="input-group-text">Tanggal Akhir {{ detailTanggal }}</span>
							</span>

              <!-- input -->
              <cleave 
                name="akhir"
                v-model="akhir" 
                class="form-control" 
                :raw="false" 
                :options="cleaveOption.date" 
                placeholder="YYYY-MM-DD"></cleave>

						</div>
					</div>

          <div class="col-sm-2">
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

	export default {
		components: {
      Cleave, 
		},
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
			}
		},
		created(){
			if(this.$route.meta.mode == 'laporan'){
				this.awal = this.$route.params.awal;
				this.akhir = this.$route.params.akhir;
				this.status = this.$route.params.status;
			}
			this.changeDetailTanggal(this.$route.params.status);
		},
		watch: {
			'$route' (to, from){
				if(this.$route.meta.mode == 'laporan'){
					this.awal = this.$route.params.awal;
					this.akhir = this.$route.params.akhir;
					this.status = this.$route.params.status;
				}
				this.changeDetailTanggal(this.$route.params.status);
			},
    },
		methods: {
			cari(){
        this.$emit('cari', this.awal, this.akhir, this.status);
			},
			changeDetailTanggal(value){
				if(value == 5 || value == 6){
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
		}
	}
</script>