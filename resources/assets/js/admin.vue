<template>
<div>
	<!-- header -->
	<transition 
		enter-active-class="animated fadeInDown "
		leave-active-class="animated fadeOutUp  "
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
		<router-view></router-view>
	</transition>

	<!-- Footer -->
	<router-view name="footer"></router-view>
	
</div>
</template>
