<template>
	<div>

		<div class="card d-print-none" >
			<div class="card-body">  
				<div class="row">

					<!-- tanggal pencairan -->
					<div class="col-sm-12">
						<div class="input-group">
							<span class="input-group-prepend">
								<span class="input-group-text">Pilih Tanggal Pencairan</span>
							</span>

							<!-- select -->
							<select class="form-control" name="pencairan" v-model="pencairan" data-width="100%" @change="changePencairan($event.target.value)"
							:disabled="modelPencairanStat === 'loading'">
								<option disabled value="">Silahkan pilih tanggal pencairan</option>
								<slot></slot>
								<option v-for="pencairan in modelPencairan" :value="pencairan.tanggal_pencairan" v-if="pencairan">
									{{ pencairan.tanggal_pencairan | dateMonth }}
								</option>
							</select>

							<!-- reload -->
							<div class="input-group-append">
								<button class="btn btn-light" @click="fetchPencairan" :disabled="modelPencairanStat === 'loading'">
									<i class="icon-sync" :class="{'spinner' : modelPencairanStat === 'loading'}"></i>
								</button>
							</div>
						</div>
					</div>

				</div>					
			</div>
		</div>		

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		data(){
			return {
				pencairan: '',
			}
		},
		created(){
			this.fetchPencairan();
		},
		watch: {
			'$route' (to, from){
				this.pencairan = '';
				this.fetchPencairan();
			},
			modelPencairanStat(value){
				if(value == "success"){
					if(this.$route.meta.mode == 'cair'){
						this.pencairan = this.$route.params.awal;
					}
				}
			},
    },
		methods: {
			fetchPencairan(value){
				this.$store.dispatch('jalinanKlaim/getPencairan', value);
			},
			changePencairan(value){
				this.$router.push({name: 'jalinanCairTanggal', params:{awal: value, cu: 'semua'} });
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('jalinanKlaim',{
				modelPencairan: 'periode',
				modelPencairanStat: 'periodeStat',
			}),
		}
	}
</script>