<template>
<div>
	<div class="modal-mask" @click="mutateModalShow(false)" v-show="created">
	<transition name="modal-effect"
		enter-active-class="animated bounceInUp"
		leave-active-class="animated bounceOutDown"
		mode="out-in"
		v-on:enter="beforeEnter"
		v-on:after-leave="afterLeave"
	>	
	<div class="modal-show" v-if="getModalShow">
		<div class="modal-dialog"  :class="size" @click.stop>
			<div class="modal-content">
				<div class="modal-header" :class="color">
					<h6 class="modal-title" v-if="getModalState === 'normal1' || getModalState === 'normal2'">
						<slot name="modal-title"></slot>
					</h6>
				</div>
				
				<div class="modal-body">
					<transition name="modal-effect"
						enter-active-class="animated flipInX"
						mode="out-in"
					>
						<div v-if="getModalState === 'confirm'" key="confirm" class="text-center">
							<span class="text-warning"><i class="icon-exclamation" style="font-size: 5em"></i></span>
							<h2>{{modalTitle}}</h2>
							<ul class="list-inline">
						        <li><button type="button" class="btn btn-default" @click="batal"><i class="icon-cross"></i> Batal</button></li>
						        <li><button type="button" class="btn btn-warning" @click="confirmOk"><i class="icon-checkmark5"></i> {{modalButton}}</button></li>
						    </ul>
						</div>
						<div v-else-if="getModalState === 'success'" key="success" class="text-center">
							<span class="text-primary"><i class="icon-checkmark-circle2" style="font-size: 5em"></i></span>
							<h2>{{modalTitle}}</h2>
							<ul class="list-inline">
						        <li><button type="button" class="btn btn-default" @click="successOk">{{modalButton}}</button></li>
						    </ul>
						</div>
						<div v-else-if="getModalState === 'error'" key="error" class="text-center">
							<span class="text-danger"><i class="icon-close2" style="font-size: 5em"></i></span>
							<h2>{{modalTitle}}</h2>
							<ul class="list-inline">
						        <li><button type="button" class="btn btn-default" @click="errorOk">{{modalButton}}</button></li>
						    </ul>
						</div>
						<div v-else-if="getModalState === 'loading'" key="loading" class="text-center">
							<i class="icon-spinner spinner" style="font-size: 5em"></i>
							<h2>Mohon tunggu sebentar...</h2>
						</div>
				 		<div v-else-if="getModalState === 'normal1'" key="normal1">
							<slot name="modal-body1"></slot>
							<div class="modal-footer no-padding">
								<slot name="modal-footer1"></slot>
							</div>
						</div>
						<div v-else-if="getModalState === 'normal2'" key="normal2">
							<slot name="modal-body2"></slot>
							<div class="modal-footer no-padding">
								<slot name="modal-footer2"></slot>
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
import { mapGetters, mapMutations } from 'vuex';
import * as types from '../store/types';

export default{
	props: ['color','size','state','modalTitle','modalButton','resultType'],
	data(){
		return{
			created: false,
		}
	},
	computed: {
		...mapGetters({
			getModalShow: types.getModalShow,
			getModalState: types.getModalState
		})
	},
	mounted(){
	  document.addEventListener("keydown", (e) => {
	      if (this.show && e.keyCode == 27) {
	        this.mutateModalShow(false);
	      }
	  });   
	},
	methods: {
		...mapMutations({
			mutateModalShow: types.mutateModalShow,
		}),
		close(){
			this.$emit('close');
		},
		batal(){
			this.$emit('batal');
		},
		confirmOk(){
			this.$emit('confirmOk');
		},
		resultOk(){
			this.$emit('resultOk');
		},
		beforeEnter(){
			this.created = true;
			document.body.classList.add("modal-open"); 
		},
		afterLeave(){
			this.created = false;
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