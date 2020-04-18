<template>
	<div>
		<!-- Page header -->
		<page-header 
		:title="title" 
		:titleDesc="titleDesc" 
		:titleIcon="titleIcon" :level="2" :level2Title="level2Title" @level2Back="back()"></page-header>
		
		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
					</message>

					<!-- select data -->
					<select-data></select-data>


				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import selectData from "./selectDetail.vue";
	export default {
		components: {
			pageHeader,
			message,
			selectData,
		},
		data() {
			return {
				title: 'Detail Monitoring',
				kelas: 'monitoring',
				titleDesc: 'Mengelola data monitoring',
				titleIcon: 'icon-stats-bars2',
				level2Title: 'Monitoring',
			}
		},
		methods:{
			back(){
				if(this.itemData.id_cu){
					if(this.itemData.id_cu != 0){
						this.$router.push({name: this.kelas + 'Cu', params:{cu: this.itemData.id_cu, tp: 'konsolidasi'}});
					}else{
						this.$router.push({name: this.kelas + 'Cu', params:{cu: this.itemData.id_cu, tp: this.itemData.id_tp}});
					}
				}else{
					if(this.itemData.tp.id_cu != 0){
						this.$router.push({name: this.kelas + 'Cu', params:{cu: this.itemData.tp.id_cu, tp: 'konsolidasi'}});
					}else{
						this.$router.push({name: this.kelas + 'Cu', params:{cu: this.itemData.tp.id_cu, tp: this.itemData.id_tp}});
					}
				}
			} 
		},
		computed: {
			...mapGetters('monitoring',{
				itemData: 'data',
				itemDataStat: 'dataStat',
			}),
		}
	}
</script>