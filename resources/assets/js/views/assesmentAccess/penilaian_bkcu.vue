<template>
	<div class="row">

		<div class="col-md-3">
			<div class="card card-body" :class="{'bg-primary text-white' : form == 1}" @click.prevent="click1" style = "cursor:pointer">
					<h6 class="mb-0">POOR (1)</h6>
			</div>
		</div>

		<div class="col-md-3">
			<div class="card card-body" :class="{'bg-primary text-white' : form == 2}" @click.prevent="click2" style = "cursor:pointer">
					<h6 class="mb-0">FAIR (2)</h6>
			</div>
		</div>

		<div class="col-md-3">
			<div class="card card-body" :class="{'bg-primary text-white' : form == 3}" @click.prevent="click3" style = "cursor:pointer">
					<h6 class="mb-0">GOOD (3)</h6>
			</div>
		</div>

		<div class="col-md-3">
			<div class="card card-body" :class="{'bg-primary text-white' : form == 4}" @click.prevent="click4" style = "cursor:pointer">
					<h6 class="mb-0">EXCELLENT (4)</h6>
			</div>
		</div>
 
	</div>
</template>

<script>
	export default {
		props: [
			'form',
			],
		components: {
		},
		data() {
			return {
			}
		},
		created(){
		},
		watch: {
    },
		methods: {
			click1(){
				if(this.$route.meta.mode == 'penilaian_bkcu'){
					this.$emit('click1');
				}
			},
			click2(){
				if(this.$route.meta.mode == 'penilaian_bkcu'){
					this.$emit('click2');
				}	
			},
			click3(){
				if(this.$route.meta.mode == 'penilaian_bkcu'){
					this.$emit('click3');
				}
			},
			click4(){
				if(this.$route.meta.mode == 'penilaian_bkcu'){
					this.$emit('click4');
				}
			}
		},
		computed: {

		}
	}
</script>
