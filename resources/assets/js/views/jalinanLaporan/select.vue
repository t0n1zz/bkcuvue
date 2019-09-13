<template>
	<div>

		<div class="card d-print-none" >
			<div class="card-body">  
				<div class="row">

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
		props: ['status'],
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
			}
		},
		created(){
			if(this.$route.meta.mode == 'laporan'){
					this.awal = this.$route.params.awal;
					this.akhir = this.$route.params.akhir;
				}
		},
		watch: {
			'$route' (to, from){
				if(this.$route.meta.mode == 'laporan'){
					this.awal = this.$route.params.awal;
					this.akhir = this.$route.params.akhir;
				}
			},
    },
		methods: {
			cari(){
        this.$emit('cari', this.awal, this.akhir);
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
		}
	}
</script>