<template>
<div>
	<div class="modal-mask" @click="close" v-show="created">
	<transition name="modal-effect"
		enter-active-class="animated bounceInUp"
		leave-active-class="animated bounceOutDown"
		mode="out-in"
		v-on:enter="beforeEnter"
		v-on:after-leave="afterLeave"
	>	
	<div class="modal-show" v-if="show">
		<div class="modal-dialog"  :class="size" @click.stop>
			<div class="modal-content">
				<div class="modal-header" :class="color">
					<button type="button" class="close" @click="close">&times;</button>
					<h6 class="modal-title">
						<slot name="modal-title"></slot>
					</h6>
				</div>

				<div class="modal-body">
					<transition name="modal-effect"
						enter-active-class="animated flipInX"
						mode="out-in"
					>
						<div v-if="state === 'confirm'" key="confirm">
							<slot name="modal-confirm"></slot>
						</div>
						<div v-else-if="state === 'result'" key="result">
							<slot name="modal-result"></slot>
						</div>
						<div v-else-if="state === 'loading'" key="loading">
							<div class="text-center">
								<i class="icon-spinner spinner" style="font-size: 5em"></i>
								<h2>Mohon tunggu sebentar...</h2>
							</div>
						</div>
						<div v-else key="normal">
							<slot name="modal-body" ></slot>
							<div class="modal-footer no-padding">
								<slot name="modal-footer"></slot>
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
export default{
	props: ['show','color','size','state'],
	data(){
		return{
			created: false,
		}
	},
	mounted(){
	  document.addEventListener("keydown", (e) => {
	      if (this.show && e.keyCode == 27) {
	        this.close();
	      }
	  });   
	},
	methods: {
		close(){
			this.$emit('close');
		},
		beforeEnter(){
			this.created = true
			document.body.classList.add("modal-open"); 
		},
		afterLeave(){
			this.created = false
			document.body.classList.remove("modal-open"); 
		}
	}
}
</script>

<style>
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

.modal-show{
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