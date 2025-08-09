<template>
	<div>

		<!-- cu desktop --> 
		<div class="card d-print-none" >
			<div class="card-body">  
				<div class="row">
				
					<div class="col-md-12">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text">Pilih Temuan</span>
							</div>

							<!-- select -->
							<select class="form-control" name="idTemuan" v-model="idTemuan" data-width="100%" :disabled="itemDataStat === 'loading'" @change="changeData($event.target.value)" >
								<option disabled value="">Silahkan pilih Temuan</option>
								<option v-for="t in itemData" :value="t.id">{{t.name}}</option>
							</select>

							<!-- reload -->
							<div class="input-group-append">
								<button class="btn btn-light" v-tooltip:top="'Reload'" @click="fetch()" :disabled="itemDataStat === 'loading'">
									<i class="icon-sync" :class="{'spinner' : itemDataStat === 'loading'}"></i>
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
	import _ from 'lodash';
	import { mapGetters } from 'vuex';
	export default {
		data(){
			return {
				idTemuan: '',
			}
		},
		created(){
		},
		watch: {
			itemDataStat(value){
				if(value === "success"){

				}
			},
    },
		methods: {
			fetch(){

			},
			changeData(value){
				this.$router.push({name: 'monitoringDetailCu', params: { id: value }});
			},
		},
		computed: {
			...mapGetters('monitoringCu',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
			}),
		}
	}
</script>