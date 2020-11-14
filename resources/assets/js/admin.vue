<template>
<div>
	<!-- header -->
	<transition 
		enter-active-class="animated fadeInDown"
		leave-active-class="animated fadeOutUp"
		mode="out-in"
	>
		<router-view name="header"></router-view>
	</transition>
	
	<!-- body -->
	<transition 
		enter-active-class="animated fadeIn"
		leave-active-class=""
		mode="out-in"
	>
		<loading-page v-if="isLoading"></loading-page>
		<router-view v-else></router-view>
	</transition>
	
</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import loadingPage from "./views/loading.vue";

	export default {
		components: {
			loadingPage
		},
		computed:{
			...mapGetters('global',{
				isLoading: 'isLoading'
			}),
		},
	}
</script>
