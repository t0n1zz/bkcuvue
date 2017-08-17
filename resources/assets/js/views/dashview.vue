<template>
	<div>
		<main-navbar></main-navbar>
		<second-navbar></second-navbar>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
import MainNavbar from './_layouts/mainnavbar.vue'
import SecondNavbar from './_layouts/secondnavbar.vue'
export default{
	components:{
		MainNavbar,
		SecondNavbar
	},
	data(){
		return{

		}
	}
}
</script>