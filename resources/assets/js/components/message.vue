<template>
    <transition 
			enter-active-class="animated shake">
			<div class="alert alert-styled-left alert-arrow-left alert-component content-group-lg" :class="className" v-show="show">

					<!-- close -->
					<button type="button" class="close" @click.prevent="close" v-tooltip:top="'Tutup'" v-if="!errorItem">
							<span><i class="icon-cross"></i></span>
					</button>

					<!-- title -->
					<h5 class="alert-heading text-semibold" v-if="title">{{ title }}</h5>

					<!-- desc -->
					<span v-if="desc">{{ desc }}</span>

					<!-- collection -->
					<div v-if="errorItem">
						<ul>
							<li v-for="error in errorItem">{{error.msg}}</li>
						</ul>
					</div>
				

					<!-- error status -->
					<div v-if="errorData">
						<span v-if="errorData.status === 404">
							<b v-if="showDebug">ERROR 404</b>
						</span>
						<span v-else-if="errorData.status === 419">
							<b v-if="showDebug">ERROR 419</b>
						</span>
						<span v-else-if="errorData.status === 422">
							<b v-if="showDebug">ERROR 422</b>
						</span>
						<span v-else-if="errorData.status === 500">
							<b v-if="showDebug">ERROR 500</b>
						</span>
						<span v-else>
						 <b>{{ errorData }}</b>
						</span>

						<!-- debug -->
						<div v-if="showDebug">
							<hr/>
							<pre class="pre-scrollable language-markup content-group text-left pb-2">
								<code v-if="errorData.data" v-html="errorData.data.message"></code>
								<code v-if="errorData.message" v-html="errorData.message"></code>
							</pre>
						</div>
					</div>
					
			</div>
    </transition>
</template>

<script type="text/javascript">
	import appModal from './modal';
    export default {
			components: {
				appModal
			},
			props: {
					title:{
							default: ''
					},
					desc: {
							default: ''
					},
					className: {
							default: 'alert-danger'
					},
					showDebug: {
						default: true
					},
					errorItem:{
					},
					errorData: {
							default: ''
					},
					errorStatus: {
						default: ''
					}
			},
			data(){
				return {
					show:true,
					showDetail:false
				}
			},
			methods: {
				detail(){
					if(this.showDetail === false){
						this.showDetail = true;
					}else{
						this.showDetail = false;
					}
				},
				close(){
					this.$emit('close');
				}
			}
    }
</script>