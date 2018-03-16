<template>
    <transition enter-active-class="animated shake">
			<div class="alert alert-styled-left alert-arrow-left alert-component content-group-lg" :class="className" v-show="show">

					<!-- close -->
					<button type="button" class="close" data-dismiss="alert" v-tooltip:top="'Tutup'">
							<span><i class="icon-cross"></i></span>
					</button>

					<!-- error detail -->
					<button type="button" class="close" @click="openDetail" v-tooltip:top="'detail error'" v-if="errorData && showDebug">
							<span><i class="icon-embed2"></i> &nbsp;</span>
					</button>

					<!-- title -->
					<h5 class="alert-heading text-semibold" v-if="title">{{ title }}</h5>

					<!-- desc -->
					<span v-if="desc">{{ desc }}</span>

					<!-- collection -->
					<ul>
						<li v-for="error in errorItem">{{error.msg}}</li>
					</ul>

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
					</div>

					<!-- error detail -->
					<transition 
						enter-active-class="animated flipInX "
						leave-active-class="animated flipOutX  "
						mode="out-in"
					>
					<div v-if="errorData && showDebug" v-show="errorShow === true">
						<hr>
						<pre class="pre-scrollable language-markup content-group text-left" ><code>{{ errorData.data }}</code></pre>
					</div>
					</transition>
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
					show: {
							default: true
					},
					showDebug: {
						default: false
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
					errorShow: false,
				}
			},
			methods: {
				openDetail(){
					if(this.errorShow === false){
						this.errorShow = true;
					}else{
						this.errorShow = false;
					}
				}
			}
    }
</script>