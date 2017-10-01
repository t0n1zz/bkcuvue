<template>
	<div class="image">
		<image-preview :preview="value" @close="$emit('input', null)"
			 v-if="value"></image-preview>
		<div v-else>
			<div class="well well-sm text-center mb-5">
				<img :src="'/images/no_image.jpg'" style="width:15em">
			</div>	 
		</div>	
		<input type="file" class="file-styled" accept="image/*" @change="upload"> 
	</div>
</template>
<script type="text/javascript">
	import ImagePreview from './ImagePreview.vue'
	export default {
		components: {
			ImagePreview
		},
		props: {
			value: {
			    type: [String, File],
			    default: null
			}
		},
		methods: {
			upload(e) {
				const files = e.target.files
				if (files && files.length > 0) {
				  this.$emit('input', files[0])
				}
			}
		}
	}
</script>
