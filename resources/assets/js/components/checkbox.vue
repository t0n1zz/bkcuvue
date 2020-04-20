<template>
	<div class="card card-body mb-2" :class="{'bg-warning' : form == 1}" @click.prevent="check" style = "cursor:pointer">
		<div class="form-check">
			<label class="form-check-label" >
				<div class="uniform-checker"><span :class="{'checked' : form == 1}"><input type="checkbox" class="form-check-input-styled" checked="" data-fouc=""></span></div>
				{{ title }}
			</label>
		</div>	
	</div>
</template>

<script>
	export default {
		props: ['form', 'title'],
		methods: {
			check(){
				this.$emit('check');
			},
		},
	}
</script>
