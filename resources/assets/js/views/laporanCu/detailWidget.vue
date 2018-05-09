<template>
	<div class="row">		
		<div class="col-sm-3">
			<div class="panel bg-blue-400">
				<div class="panel-body">
					<h3 class="no-margin text-semibold"><check-value :value="itemData.aset" valueType="currency"></check-value></h3>
					<b>Aset</b>
					<div class="text-muted text-size-small">4,728 avg</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import checkValue from '../../components/checkValue.vue';
	export default {
		components:{
			checkValue,
		},
		props:['kelas','path'],
		data(){
			return {
				idCu: '',
				idTp: '',
				periode: '',
				periodeTp: ''
			}
		},
		created(){
			this.fetch();
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
		},
		mounted(){
			$('.bootstrap-select').selectpicker('refresh');
		},
		watch: {
			'$route' (to, from){
				// check current page meta
				if(this.profileStat === "success"){

				}
			},
			profileStat(value){
				if(value === "success"){

				}
			},
			itemDataStat(value){
				if(value === "success"){
				}
			}
    },
		methods: {
			fetch(){
				if(this.$route.meta.mode == 'detail'){
					this.$store.dispatch('laporanCu/edit',this.$route.params.id);
				}else{
					this.$store.dispatch('laporanCu/editTp',this.$route.params.id);
				}
			}
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('laporanCu',{
				itemData: 'data',
				itemDataStat: 'dataStat',
				grafikData: 'grafik',
				grafikDataStat: 'grafikStat',
				modelPeriode: 'periode',
				modelPeriodeStat: 'periodeStat',
			}),
			...mapGetters('laporanTp',{
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
			}),
			...mapGetters('cu',{
				modelCU: 'dataS',
				modelCUStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>