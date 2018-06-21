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
		enter-active-class="animated fadeIn"
		leave-active-class=""
		mode="out-in"
	>
		<router-view></router-view>
	</transition>
</div>
</template>
