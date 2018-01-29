<template>
	<div>
		<div class="panel panel-flat">
			
			<!-- close button -->
			<div class="panel-heading">
				<div class="heading-elements">
					<ul class="icons-list">
						<li>
							<a data-action="close" @click="close"></a>
						</li>
					</ul>
				</div>
			</div>

			<!-- image preview -->
			<div class="panel-body text-center">
				<img :src="'/images/no_image.jpg'" style="width:15em;" v-if="image === '' && image_temp === ''">
				<img :src="image_loc + image_temp + image_type" style="width:15em;" v-else-if="image === '' && image_temp !== ''">
				<img :src="image" style="width:15em;" v-else> 
			</div>
		</div>

		<!-- upload button -->
		<input type="file" class="file-styled" accept="image/*" @change="upload" ref="fileInput">
	</div>
</template>
<script>
	export default {
		data() {
			return {
				image: ''
			}
		},
		props: {
			image_loc: {
				type: [String],
				default: ''
			},
			image_type:{
				type: [String],
				default: '.jpg'
			},
			image_temp: {
				default: ''
			},
			value: {
				type: [String, File],
				default: null
			}
		},
		methods: {
			upload(e) {
				let files = e.target.files || e.dataTransfer.files;
				if (!files.length)
					return
				this.createImage(files[0]);
				this.$emit('input', files[0]);
			},
			createImage(file) {
				let reader = new FileReader();
				let vm = this;
				reader.onload = (e) => {
					vm.image = e.target.result;
					// this.$emit('input', vm.image)
				};
				reader.readAsDataURL(file);
			},
			close() {
				this.$emit('input', null);
				this.image = '/images/no_image.jpg';
				this.$refs.fileInput.value = null;
			}
		}
	}
</script>