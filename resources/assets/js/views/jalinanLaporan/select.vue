<template>
	<div>

		<div class="card d-print-none" >
			<div class="card-body">  
				<div class="row">
					
					<div class="col-sm-10 mb-2">
						<div class="input-group" v-if="this.currentUser.id_cu == 0 && isCu">
							<div class="input-group-prepend">
								<span class="input-group-text">Pilih CU</span>
							</div>

							<!-- select -->
							<select class="form-control" name="idCu" v-model="idCu" data-width="100%" :disabled="modelCuStat === 'loading'">
								<option disabled value="">Silahkan pilih data</option>
								<slot></slot>
								<option value="semua">Semua CU</option>
								<option disabled value="">----------------</option>
								<option v-for="cu in modelCu" :value="cu.id" v-if="cu">{{cu.name}}</option>
							</select>

							<!-- reload cu -->
							<div class="input-group-append">
								<button class="btn btn-light" @click="fetchCU" :disabled="modelCuStat === 'loading'">
									<i class="icon-sync" :class="{'spinner' : modelCuStat === 'loading'}"></i>
								</button>
							</div>
						</div>
					</div>

					<!-- tanggal pencairan -->
					<div class="col-sm-5">
						<div class="input-group">
							<span class="input-group-prepend">
								<span class="input-group-text">Tanggal Awal</span>
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
								<span class="input-group-text">Tanggal Akhir</span>
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
		props: ['status','isCu'],
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
        awal:'',
				akhir:'',
				idCu: '',
			}
		},
		created(){
			if(this.$route.meta.mode == 'laporan'){
				this.awal = this.$route.params.awal;
				this.akhir = this.$route.params.akhir;
			}
			if(this.currentUser.id_cu != 0){
				this.idCu = this.currentUser.id_cu;
			}
		},
		watch: {
			'$route' (to, from){
				if(this.$route.meta.mode == 'laporan'){
					this.awal = this.$route.params.awal;
					this.akhir = this.$route.params.akhir;
					this.idCu = this.$route.params.cu;
				}

				if(this.currentUser.id_cu == 0){
					this.fetchCU();
				}
			},
			modelCuStat(value){
				if(value === "success"){
					this.idCu = this.$route.params.cu;
				}
			},
    },
		methods: {
			cari(){
        this.$emit('cari', this.awal, this.akhir, this.idCu);
			},
			fetchCU(){
				if(this.modelCu.length == 0){
					this.$store.dispatch('cu/getHeader', this.currentUser.id_pus);
				}else{
					this.idCu = this.$route.params.cu;
				}
			},
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