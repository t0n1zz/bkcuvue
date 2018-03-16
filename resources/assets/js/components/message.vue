<template>
    <transition 
			enter-active-class="animated shake">
			<div class="alert alert-styled-left alert-arrow-left alert-component content-group-lg" :class="className" v-show="show">

					<!-- close -->
					<button type="button" class="close" @click="close" v-tooltip:top="'Tutup'" v-if="!errorItem">
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
							<b v-if="showDebug">ERROR 404:</b> Data tidak ditemukan, silahkan coba lagi
						</span>
						<span v-else-if="errorData.status === 419">
							<b v-if="showDebug">ERROR 419:</b> Kesalahan sesi, silahkan refresh halaman ini
						</span>
						<span v-else-if="errorData.status === 422">
							<b v-if="showDebug">ERROR 422:</b> Username atau password anda salah
						</span>
						<span v-else-if="errorData.status === 500">
							<b v-if="showDebug">ERROR 500:</b> {{ errorData.data.message }}
						</span>

						<!-- debug -->
						<div v-if="showDebug">
							<hr/>
							<pre class="pre-scrollable language-markup content-group text-left" v-if="showDetail"><code>{{ errorData.data }}</code></pre>

							<!-- debug button -->
							<button class="btn btn-default btn-block text-left" @click="detail">
								<span v-if="showDetail">TUTUP DETAIL ERROR</span>
								<span v-else>BUKA DETAIL ERROR</span>
							</button>
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
					this.show = false;
				}
			}
    }
</script>