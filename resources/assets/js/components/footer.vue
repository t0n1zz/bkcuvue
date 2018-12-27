<template>
<div class="navbar navbar-expand-lg navbar-light">
		<div class="text-center d-lg-none w-100">
			<button type="button" class="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-footer">
				<i class="icon-unfold mr-2"></i>
				SIMO 3.0.0
			</button>
		</div>

		<div class="navbar-collapse collapse show" id="navbar-footer">
			<span class="navbar-text">
				&copy; {{ momentYear() }}. <router-link :to="{ name:'changelog' }">SIMO 3.0.0</router-link> by <a href="https://puskopditbkcukalimantan.org" target="_blank">Puskopdit BKCU Kalimantan</a>
			</span>

			<ul class="navbar-nav ml-lg-auto">
				<li class="nav-item"><a href="#" class="navbar-nav-link" target="_blank"><i class="icon-lifebuoy mr-2"></i> Saran</a></li>
				<li class="nav-item"><a href="#" class="navbar-nav-link" target="_blank"><i class="icon-file-text2 mr-2"></i> Panduan</a></li>
			</ul>
		</div>
	</div>  
</template>

<script>
export default {
	methods: {
		momentYear(){
			return moment().year();
		}
	}
}
</script>

<style>

</style>
