<template>
	<div>
		<div class="modal-mask" @click="backgroundClick" v-show="created">
			<transition name="modal-effect" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown" mode="out-in"
			  v-on:enter="beforeEnter" v-on:after-leave="afterLeave">
				<div class="modal-show" v-if="show">
					<div class="modal-dialog" :class="size" @click.stop>
						<div class="modal-content">
							<div class="modal-header" :class="color" v-if="state === 'normal1' || state === 'normal2'">
								<h6 class="modal-title">
									<slot name="modal-title"></slot>
								</h6>
								<!-- <button type="button" v-if="state !== 'loading'" class="close" @click="tutup">&times;</button> -->
							</div>
							<div class="modal-body">
								<transition name="modal-effect" enter-active-class="animated fadeIn" mode="out-in">
									
									<!-- confirm batal -->
									<div v-if="state === 'confirm-batal'" key="confirm-batal" class="text-center">
										<span class="text-warning pb-3">
											<i class="icon-exclamation" style="font-size: 5em"></i>
										</span>
										<h2>{{ title }}</h2>
										<div class="card card-body" v-if="content">{{ content }}</div>
										<br>
										<div class=" d-none d-sm-block">
											<button type="button" class="btn btn-light" @click="batal">
												<i class="icon-arrow-left13"></i> Batal</button>
											<button type="button" class="btn btn-warning" @click="confirmOk">
												<i class="icon-checkmark5"></i> {{ button }}</button>
										</div>
										<div class="d-block d-sm-none">
											<button type="button" class="btn btn-warning btn-block pb-2" @click="confirmOk">
													<i class="icon-checkmark5"></i> {{ button }}</button>
											<button type="button" class="btn btn-light btn-block" @click="batal">
													<i class="icon-arrow-left13"></i> Batal</button>
										</div>
									</div>

									<!-- content tutup -->
									<div v-if="state === 'content-tutup'" key="content-tutup" class="text-center">
										<h2>{{ title }}</h2>
										<div style="color:black;" v-html="content"></div>
										<hr>
										<div class=" d-none d-sm-block">
											<button type="button" class="btn btn-light" @click="tutup">
												<i class="icon-cross"></i> Tutup</button>
										</div>
										<div class="d-block d-sm-none">
											<button type="button" class="btn btn-light btn-block" @click="tutup">
													<i class="icon-cross"></i> Tutup</button>
										</div>
									</div>

									<!-- confirm tutup -->
									<div v-if="state === 'confirm-tutup'" key="confirm-tutup" class="text-center">
										<span class="text-warning pb-3">
											<i class="icon-exclamation" style="font-size: 5em"></i>
										</span>
										<h2>{{ title }}</h2>
										<pre class="pre-scrollable" id="stack" v-if="content">{{ content }}</pre>
										<br>
										<div class=" d-none d-sm-block">
											<button type="button" class="btn btn-light" @click="tutup">
												<i class="icon-cross"></i> Tutup</button>
											<button type="button" class="btn btn-warning" @click="confirmOk">
												<i class="icon-checkmark5"></i> {{ button }}</button>
										</div>
										<div class="d-block d-sm-none">
											<button type="button" class="btn btn-warning btn-block" @click="confirmOk">
													<i class="icon-checkmark5"></i> {{ button }}</button>
											<button type="button" class="btn btn-light btn-block" @click="tutup">
													<i class="icon-cross"></i> Tutup</button>
										</div>
									</div>

									<!-- success -->
									<div v-else-if="state === 'success'" key="success" class="text-center">
										<span class="text-primary">
											<i class="icon-checkmark-circle2" style="font-size: 5em"></i>
										</span>
										<h2>{{ title }}</h2>
										<div class="d-none d-sm-block">
												<button type="button" class="btn btn-light" @click="successOk">{{ button }}</button>
										</div>
										<div class="d-block d-sm-none">
											<button type="button" class="btn btn-light btn-block" @click="successOk">{{ button }}</button>
										</div>
									</div>

									<!-- fail -->
									<div v-else-if="state === 'fail'" key="fail" class="text-center">
										<span class="text-danger">
											<i class="icon-cancel-circle2" style="font-size: 5em"></i>
										</span>
										<h2>Oops terjadi kesalahan</h2>

										<!-- error message -->
										<div v-if="content">
											<span v-if="content.status === 404">
												<b>ERROR 404:</b> Data tidak ditemukan, silahkan coba lagi
											</span>
											<span v-else-if="content.status === 419">
												<b>ERROR 419:</b> Kesalahan sesi, silahkan refresh halaman ini
											</span>
											<span v-else-if="content.status ===  422">
												<b>ERROR 422:</b> Username atau password anda salah
											</span>
											<span v-else-if="content.status === 500">
												<b>ERROR 500:</b> {{ content.data }}
											</span>
											<span v-else>
												<span v-if="content.message">{{ content.message }}</span>
												<span v-else>{{ content }}</span>
											</span>
										</div>
										<br/> 

										<!-- error detail -->
										<div v-if="content && showDetail">
											<hr/>
											
											<pre class="pre-scrollable language-markup content-group text-left" v-if="content.data"><code>{{ content.data }}</code></pre>

											<pre class="pre-scrollable language-markup content-group text-left" v-else><code>{{ content }}</code></pre>

											<br/>
										</div>

										<!-- error detail button -->
										<button class="btn btn-light btn-block" @click="detail">
											<span v-if="showDetail">TUTUP DETAIL ERROR</span>
											<span v-else>BUKA DETAIL ERROR</span>
										</button>

										<hr>

										<div class=" d-none d-sm-block">
											<button type="button" class="btn btn-danger" @click="failOk">{{ button }}</button>
										</div>
										<div class="d-block d-sm-none">
											<button type="button" class="btn btn-danger btn-block" @click="failOk">{{ button }}</button>
										</div>
									</div>

									<!-- loading -->
									<div v-else-if="state === 'loading'" key="loading" class="text-center">
										<i class="icon-spinner spinner" style="font-size: 5em"></i>
										<h2>Mohon tunggu sebentar...</h2>
									</div>

									<!-- normal1 -->
									<div v-else-if="state === 'normal1'" key="normal1">
										<slot name="modal-body1"></slot>
										<div class="modal-footer no-padding">
											<slot name="modal-footer1"></slot>
										</div>
									</div>

									<!-- normal2 -->
									<div v-else-if="state === 'normal2'" key="normal2">
										<slot name="modal-body2"></slot>
										<div class="modal-footer no-padding">
											<slot name="modal-footer2"></slot>
										</div>
									</div>

									<!-- image -->
									<div v-else-if="state === 'image'" key="image" class="text-center">
										<img :src="content" class="img-fluid">
										<br><br>
										<div class=" d-none d-sm-block">
											<button type="button" class="btn btn-light" @click="tutup">
												<i class="icon-cross"></i> Tutup</button>
										</div>
										<div class="d-block d-sm-none">
											<button type="button" class="btn btn-light btn-block" @click="tutup">
													<i class="icon-cross"></i> Tutup</button>
										</div>
									</div>

								</transition>
							</div>
						</div>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default () {
					return false
				},
			},
			state: {
				default () {
					return ''
				},
			},
			size: {
				type: String,
				default () {
					return ''
				},
			},
			color: {
				type: String,
				default () {
					return ''
				},
			},
			title: {
				type: String,
				default () {
					return ''
				},
			},
			button: {
				type: String,
				default () {
					return 'Ok'
				},
			},
			content: ''
		},
		data() {
			return {
				created: false,
				showDetail: false,
			}
		},
		mounted() {
			document.addEventListener("keydown", (e) => {
				if (this.getModalShow && e.keyCode == 27) {
					this.tutup();
				}
			});
		},
		methods: {
			backgroundClick() {
				if(this.state !== 'loading'){
					this.$emit('backgroundClick');
					this.showDetail = false;
				}	
			},
			tutup() {
				if(this.state !== 'loading')
					this.$emit('tutup');
			},
			batal() {
				this.$emit('batal');
			},
			confirmOk() {
				this.$emit('confirmOk');
			},
			successOk() {
				this.afterLeave();
				this.$emit('successOk');
			},
			failOk() {
				this.$emit('failOk');
				this.showDetail = false;
			},
			beforeEnter() {
				this.created = true;
				document.body.classList.add("modal-open");
			},
			afterLeave() {
				this.created = false;
				document.body.classList.remove("modal-open");
			},
			detail(){
				if(this.showDetail === true){
					this.showDetail = false;
				}else{
					this.showDetail = true;
				}
			}
		}
	}
</script>

<style scoped>
	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		transition: opacity .3s ease;
	}

	.modal-show {
		overflow-x: hidden;
		overflow-y: auto;
		display: block;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1050;
		outline: 0;
	}
</style>