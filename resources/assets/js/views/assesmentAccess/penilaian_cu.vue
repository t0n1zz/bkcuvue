<template>
	<div class="row">

		<div class="col-md-3">
			<div class="card" :class="{'border-primary' : form == 1}" @click.prevent="click1" style = "cursor:pointer">
				<div class="card-header " :class="{'bg-primary text-white' : form == 1, 'bg-white' : form != 1}">
					<h6 class="card-title">POOR (1)</h6>
				</div>	
				<div class="card-body">
					{{ subtitle1 }}
				</div>
			</div>
		</div>

		<div class="col-md-3">
			<div class="card" :class="{'border-primary' : form == 2}" @click.prevent="click2" style = "cursor:pointer">
				<div class="card-header " :class="{'bg-primary text-white' : form == 2, 'bg-white' : form != 2}">
					<h6 class="card-title">FAIR (2)</h6>
				</div>	
				<div class="card-body">
					{{ subtitle2 }}
				</div>
			</div>
		</div>

		<div class="col-md-3">
			<div class="card" :class="{'border-primary' : form == 3}" @click.prevent="click3" style = "cursor:pointer">
				<div class="card-header " :class="{'bg-primary text-white' : form == 3, 'bg-white' : form != 3}">
					<h6 class="card-title">GOOD (3)</h6>
				</div>	
				<div class="card-body">
					{{ subtitle3 }}
				</div>
			</div>
		</div>

		<div class="col-md-3">
			<div class="card" :class="{'border-primary' : form == 4}" @click.prevent="click4" style = "cursor:pointer">
				<div class="card-header " :class="{'bg-primary text-white' : form == 4, 'bg-white' : form != 4}">
					<h6 class="card-title">EXCELLENT (4)</h6>
				</div>	
				<div class="card-body">
					{{ subtitle4 }}
				</div>
			</div>
		</div>
				
	</div>
</template>

<script>
	export default {
		props: [
			'form',
			'subtitle1',
			'subtitle2',
			'subtitle3',
			'subtitle4',
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
				this.$emit('click1');
			},
			click2(){
				this.$emit('click2');
			},
			click3(){
				this.$emit('click3');
			},
			click4(){
				this.$emit('click4');
			}
		},
		computed: {

		}
	}
</script>
