<template><div>
	<div class="panel panel-flat">
		<div class="panel-heading">
			<div class="heading-elements">
				<ul class="icons-list" v-if="image">
            		<li><a data-action="close" @click="close"></a></li>
            	</ul>
        	</div>
		</div>
		<div class="panel-body text-center">
			<img :src="image" style="width:15em;" v-if="image"> 
			<img :src="'/images/no_image.jpg'" v-else style="width:15em">
		</div>
	</div>
	<input type="file" class="file-styled" accept="image/*" @change="upload" ref="fileInput"> 
</div></template>
<script>
	export default{
		data(){
            return {
                image: ''
            }
        },
        props: {
			value: {
			    type: [String, File],
			    default: null
			}
		},
		methods:{
			upload(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return
                this.createImage(files[0])
                this.$emit('input', files[0])
            },
            createImage(file) {
                let reader = new FileReader()
                let vm = this
                reader.onload = (e) => {
                    vm.image = e.target.result
                    // this.$emit('input', vm.image)
                };
                reader.readAsDataURL(file)
            },
			close(){
				this.$emit('input',null)
				this.image = ''
				this.$refs.fileInput.value = null 
			}
		}
	}
</script>