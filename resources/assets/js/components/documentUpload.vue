<template>
	<div>

		<!-- upload button -->
		<div class="row">
			<div class="col-md-10">
				<input type="file" class="form-control" accept=".pdf, .docx" @change="upload" ref="fileInput">
			</div>
			<div class="col-md-2">
				<button type="button" class="btn btn-light btn-block" @click.prevent="close()"
					:disabled="file_temp === ''"><i class="icon-cross"></i> Batal</button>
			</div>

		</div>

	</div>
</template>
<script>
export default {
	data() {
		return {
			file: ''
		}
	},
	props: {
		file_loc: {
			type: [String],
			default: ''
		},
		file_type: {
			type: [String],
			default: '.docx'
		},
		file_temp: {
			default: ''
		},
		value: {
			type: [String, File],
			default: 'no_file'
		}
	},
	methods: {
		upload(e) {
			let files = e.target.files || e.dataTransfer.files;
			if (!files.length)
				return
			this.createFile(files[0]);
			this.$emit('input', files[0]);
		},
		createFile(file) {
			let reader = new FileReader();
			let vm = this;
			reader.onload = (e) => {
				vm.image = e.target.result;
				// this.$emit('input', vm.image)
			};
			reader.readAsDataURL(file);
		},
		close() {
			this.$emit('input', 'no_file');
			this.file = '/files/no_file.docx';
			this.$refs.fileInput.value = '';
		}
	}
}
</script>