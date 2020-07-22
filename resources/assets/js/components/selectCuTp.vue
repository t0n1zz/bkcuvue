<template>
	<div>

		<div class="card d-print-none">
			<div class="card-body">  
				<div class="row">

					<!-- cu -->
					<div class="mb-2" :class="{'col-md-6' : cu_id != 'semua', 'col-md-12' : cu_id == 'semua'}" v-if="currentUser.id_cu == 0">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text">Pilih CU</span>
							</div>

							<!-- select -->
							<select class="form-control" name="cu_id" v-model="cu_id" data-width="100%" @change="changeCU($event.target.value)" :disabled="modelCuStat === 'loading'">
								<option disabled value="">Silahkan pilih CU</option>
								<slot></slot>
								<option value="semua">Semua CU</option>
								<option value="0" v-if="isPus"><span v-if="currentUser.pus">{{currentUser.pus.name}}</span> <span v-else>Puskopdit</span></option>
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

					<!-- tp  -->
					<div :class="{'col-md-6' : currentUser.id_cu == 0, 'col-md-12' : currentUser.id_cu != 0}" v-if="cu_id != 'semua'">
						<div class="input-group">
							<span class="input-group-prepend">
								<span class="input-group-text">Pilih TP/KP</span>
							</span>

							<!-- select -->
							<select class="form-control" name="tp" v-model="tp_id" data-width="100%" :disabled="modelTpStat === 'loading'" @change="changeTp($event.target.value)">
								<option disabled value="">Silahkan pilih TP/KP</option>
								<option value="semua">Semua Tp</option>
								<option disabled value="">----------------</option>
								<option v-for="tp in modelTp" :value="tp.id" v-if="tp">{{tp.name}}</option>
							</select>

							<!-- reload -->
							<div class="input-group-append">
								<button class="btn btn-light" @click="fetchTp" :disabled="modelTpStat === 'loading'">
									<i class="icon-sync" :class="{'spinner' : modelTpStat === 'loading'}"></i>
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
		props:['kelas','isPus','path'],
		data(){
			return {
				cu_id: '',
				tp_id: ''
			}
		},
		created(){
			if(this.currentUser.id_pus !== undefined){
				this.fetchCU();
				if(this.modelCuStat == 'success'){
					this.fetchTp();
				}
			}	
		},
		watch: {
			'$route' (to, from){
				// check current page meta
				this.fetchCU();
				if(this.modelCuStat == 'success'){
					this.fetchTp();
				}
			},
			modelCuStat(value){
				if(value === "success"){
					this.cu_id = this.$route.params.cu;
					this.fetchTp();
				}
			},
			modelTpStat(value){
				if(value === "success"){
					this.tp_id = this.$route.params.tp;
				}
			},
    },
		methods: {
			fetchCU(){
				if(this.modelCu.length == 0){
					this.$store.dispatch('cu/getHeader', this.currentUser.id_pus);
				}else{
					this.cu_id = this.$route.params.cu;
				}
			},
			fetchTp(){
				this.$store.dispatch('tp/getCu',this.cu_id);
			},
			changeCU(value){
				this.fetchTp();
				if(this.$route.params.tp != 'semua'){
					this.$router.push({name: this.path, params:{cu: this.cu_id, tp: this.$route.params.tp} });
				}else{
					this.$router.push({name: this.path, params:{cu: this.cu_id, tp: 'semua'} });
				}
			},
			changeTp(value){
				this.$router.push({name: this.path, params:{cu: this.cu_id, tp: this.tp_id} });
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
			...mapGetters('tp',{
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
			}),
		}
	}
</script>