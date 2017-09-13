<template>
<div>
	<transition 
		enter-active-class="animated fadeInDown "
		leave-active-class="animated fadeOutUp  "
		mode="out-in"
	>
		<router-view name="header"></router-view>
	</transition>
	<transition 
		enter-active-class="animated bounceInUp"
		leave-active-class="animated bounceOutDown"
		mode="out-in"
	>
		<router-view></router-view>
	</transition>
</div>
</template>