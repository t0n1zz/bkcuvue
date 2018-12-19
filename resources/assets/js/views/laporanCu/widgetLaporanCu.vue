<template>
<div>
	<div class="card card-body" :class="checkClass()"> 
		<div class="media mb-3">
			<div class="media-body">
				<!-- current value -->
				<h6 class="font-weight-semibold mb-8" v-if="isPercent">{{ itemData | percentage(2) }}</h6>
				<h6 class="font-weight-semibold mb-8" v-else>{{ itemData | currency('',0,{ thousandsSeparator: '.'}) }}</h6>

				<!-- value changes -->
				<span class="opacity-75" v-if="isPercent">
					<i :class="{'icon-chevron-up': totalData > 0,
					'icon-chevron-down': totalData < 0}"></i> {{ Math.abs(totalData) | percentage(2) }}				
				</span>
				<span class="opacity-75" v-else>
					<i :class="{'icon-chevron-up': totalData > 0,
					'icon-chevron-down': totalData < 0}"></i> {{ Math.abs(totalData) | currency('',0,{ thousandsSeparator: '.'}) }}				
				</span>
			</div>

			<!-- icon -->
			<div class="ml-3 align-self-center">
				<i class="icon-2x opacity-75" :class="{'icon-arrow-up16': totalData > 0,'icon-arrow-down16': totalData < 0}"></i>
			</div>
		</div>

		<!-- separator -->
		<div class="progress bg-blue mb-2" style="height: 0.125rem;">
			<div class="progress-bar bg-white" style="width: 100%">
				<span class="sr-only">100% Complete</span>
			</div>
		</div>

		<!-- percentage -->
		<div>
			<span class="float-right" v-if="!isPercent">
				<span v-if="percentageData > 0">+</span>
				<span v-else-if="percentageData < 0">-</span>
				{{ Math.abs(percentageData) | percentage(2) }}
			</span>

			<!-- title -->
			<b>{{ title.toUpperCase() }}</b>
		</div>
		
	</div>

	<app-modal :show="modalShow" :color="modalColor" :state="modalState" :title="modalTitle" :button="modalButton" @batal="modalTutup" @tutup="modalTutup" @errorOk="modalTutup" @backgroundClick="modalTutup">

	</app-modal>	
</div>

</template>

<script>
	import checkValue from '../../components/checkValue.vue';
	import appModal from '../../components/modal';

	export default {
		components: {
			checkValue,
			appModal
		},
		props:{
			title:{
				default: ''
			},
			itemData:{
				default: ''
			},
			itemDataBefore:{
				default: ''
			},
			isPercent:{
				default: false
			},
			isOpposite:{
				default: false
			},
		},
		data(){
			return {
				modalShow: false,
				modalState: 'normal1',
				modalColor: 'bg-primary',
				modalTitle: '',
				modalButton: '',
				modalMobileOptionState: ''
			}
		},
		methods:{
			modalOpen(){

			},
			modalTutup(){

			},
			checkClass(){
				let className = '';
				if(this.isOpposite){
					if(this.totalData > 0){
						className = 'bg-danger';
					}else if(this.totalData < 0){
						className = 'bg-primary'
					}else{
						className = 'bg-orange-300'
					}
				}else{
					if(this.totalData > 0){
						className = 'bg-primary';
					}else if(this.totalData < 0){
						className = 'bg-danger'
					}else{
						className = 'bg-orange-300'
					}
				}
				return className;
			}
		},
		computed: {
			totalData: function(){
				return this.itemData - this.itemDataBefore;
			},
			percentageData: function(){
				if(this.itemDataBefore > 0){
					return (this.totalData / this.itemDataBefore);
				}else{
					return '0';
				}
			}
		}
	}
</script>
