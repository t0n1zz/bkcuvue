<template>
<div>
	<div class="panel panel-body" :class="checkClass()"> 
		<div class="media no-margin-top content-group">
			<div class="media-body">
				<!-- current value -->
				<h6 class="no-margin text-semibold" v-if="isPercent">{{ itemData | percentage(2) }}</h6>
				<h6 class="no-margin text-semibold" v-else>{{ itemData | currency('',0,{ thousandsSeparator: '.'}) }}</h6>

				<!-- value changes -->
				<span class="text-muted" v-if="isPercent">
					<i :class="{'icon-chevron-up': totalData > 0,
					'icon-chevron-down': totalData < 0}"></i> {{ Math.abs(totalData) | percentage(2) }}				
				</span>
				<span class="text-muted" v-else>
					<i :class="{'icon-chevron-up': totalData > 0,
					'icon-chevron-down': totalData < 0}"></i> {{ Math.abs(totalData) | currency('',0,{ thousandsSeparator: '.'}) }}				
				</span>

			</div>

			<!-- icon -->
			<div class="media-right media-middle">
				<i class="icon-2x opacity-75" :class="{'icon-arrow-up16': totalData > 0,'icon-arrow-down16': totalData < 0}"></i>
			</div>
		</div>

		<!-- separator -->
		<div class="progress progress-micro bg-blue mb-10">
			<div class="progress-bar bg-white" style="width: 100%">
				<span class="sr-only">100% Complete</span>
			</div>
		</div>

		<!-- percentage -->
		<span class="pull-right" v-if="!isPercent">
			<span v-if="percentageData > 0">+</span>
			<span v-else-if="percentageData < 0">-</span>
			{{ Math.abs(percentageData) | percentage(2) }}
		</span>

		<!-- title -->
		<b>{{ title.toUpperCase() }}</b>
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
					}
				}else{
					if(this.totalData > 0){
						className = 'bg-primary';
					}else if(this.totalData < 0){
						className = 'bg-danger'
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
