<template><div  v-if="image">
	<div class="well well-sm text-center mb-5">
		<img :src="image" style="width:15em;">
	</div>
	<button class="btn btn-danger" @click="close">
		Batal
	</button>
</div></template>
<script type="text/javascript">
	export default {
		props: {
			preview: {
			    type: [String, File],
			    default: null
			}
		},
		data() {
			return {
				image: null
			}
		},
		created() {
			this.setPreview()
		},
		watch: {
			'preview': 'setPreview'
		},
		methods: {
			setPreview() {
				if(this.preview instanceof File ) {
					const fileReader = new FileReader()
					fileReader.onload = (event) => {
					  this.image = event.target.result
					}
					fileReader.readAsDataURL(this.preview)
				} else if (typeof this.preview === 'string') {
					this.image = `/images/${this.preview}`
				} else {
					this.image = null
				}
			},
			close() {
				this.$emit('close')
			}
		}
	}
</script>
