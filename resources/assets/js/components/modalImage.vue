<template>
	<div>
		<div class="modal-mask" @click="backgroundClick" v-show="created">
			<transition name="modal-effect" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown" mode="out-in"
			  v-on:enter="beforeEnter" v-on:after-leave="afterLeave">
				<div class="modal-show" v-if="show">
					<div class="modal-dialog" @click.stop>
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" @click="tutup">&times;</button>
							</div>
							<div class="modal-body">
								<img :src="content" class="img-responsive center-block" v-if="show">
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
			content: ''
		},
		data() {
			return {
				created: false,
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
			beforeEnter() {
				this.created = true;
				document.body.classList.add("modal-open");
			},
			afterLeave() {
				this.created = false;
				document.body.classList.remove("modal-open");
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