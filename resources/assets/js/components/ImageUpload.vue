<template>
	<div>
		<div class="panel panel-flat">
		
			<!-- image preview -->
			<div class="panel-body text-center">
				<img :src="'/images/no_image.jpg'" style="width:15em;" v-if="image === '' && image_temp === ''">
				<img :src="image_loc + image_temp + image_type" style="width:15em;" v-else-if="image === '' && image_temp !== ''">
				<img :src="image" style="width:15em;" v-else> 
			</div>
		</div>

		<!-- upload button -->
		<div class="row">
			<div class="col-md-10">
				<input type="file" class="form-control" accept="image/*" @change="upload" ref="fileInput">
			</div>
			<div class="col-md-2">
				<button type="button" class="btn btn-default btn-block" @click.prevent="close()" :disabled="image_temp === ''"><i class="icon-cross"></i> Batal</button>
			</div>
			
		</div>
		
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
				default: 'no_image'
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
				this.$emit('input', 'no_image');
				this.image = '/images/no_image.jpg';
				this.$refs.fileInput.value = 'no_image';
			}
		}
	}
</script>