<template>
    <form action="javascript:void(0)" enctype="multipart/form-data" method="post">
	<div class="card">
		<div class="card-header bg-white">
			<h5 class="card-title">{{this.title}}</h5>
		</div>
		<div class="card-body">

				<div class="alert alert-success" v-if="message">{{ message }}</div>
				
					<!-- upload -->
					<input type="file" class="form-control" accept=".csv,.xlsx,.xls" ref="file" name="file" @click="reset" @change="upload($event.target)">

					<hr/>

					<!-- PROGRESS BAR DENGAN VALUE NYA KITA DAPATKAN DARI VARIABLE progressBar -->
					<div class="progress">
						<div class="progress-bar" role="progressbar" 
							:style="{width: progressBar + '%'}" 
							:aria-valuenow="progressBar" 
							aria-valuemin="0" 
							aria-valuemax="100">{{progressBar}}%</div>
					</div>

					<!-- batal -->
					<input :disabled="files.length<=0||isClicked" type="button" value="BATAL" @click="click" v-on:click.prevent="reset" class="btn btn-danger btn-block btn-sm" style="margin-top:5px;">

		</div>
	</div>
    </form>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
export default {
    props:{
		title:{
			type: String,
		},},
    data() {
		return {
            message:null,
			files:[],
			stat:'',
            count:'',
            progress:[],
            progressBar:0,
            isLoading:false,
			submited: false,
            isClicked:false,
		}
    },
    
    methods: {
        submit(event) {
            this.isLoading = true
            for (let i = 0; i < this.files.length; i++) {
            let formData = new FormData();
            formData.append('file', this.files[i]);
            formData.append('id_cu',this.currentUser.id_cu);
            formData.append('id_user', this.currentUser.id);
            formData.append('file_name', this.title);
                axios.post('/api/fileUpload/store', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    onUploadProgress: function( progressEvent ) {
                        this.progressBar= parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))
                    }.bind(this)
                }).then((response) => {
                    if(response.status == 200){
                            this.$store.commit('fileUpload/setDataS', response.data.model);
                        }
                    setTimeout(() => {
                        this.$emit("LoadingStat", this.isLoading)
                        this.message = response.data.message
                        this.progressBar = 0
                        this.reset()
                        this.files=[]
                    })
                })
            }
        },

        submit2 (event) {
            this.isLoading = true
            for (let i = 0; i < this.files.length; i++) {
                let formData = new FormData();
                formData.append('file', this.files[0]);
                axios.post('/api/hariLiburUpload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    onUploadProgress: function (progressEvent) {
                        this.progressBar = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))
                    }.bind(this)
                }).then((response) => {
                    if (response.status == 200) {
                        this.$store.commit('fileUpload/setDataS', response.data.model);
                    }
                    setTimeout(() => {
                        this.$emit("LoadingStat", this.isLoading)
                        this.message = response.data.message
                        this.progressBar = 0
                        this.reset()
                        this.files = []
                    })
                })
            }
        },

        reset() {
                this.$refs.file.value = '';
            },
        
        click(){
          this.isClicked = true  
          this.$emit('fileBatal',this.title )
        },

        upload(event) {
            this.isClicked = false
            this.files = []
            this.message = null
            this.files.push(event.files[0]) 
            this.$emit('fileSelected', {file: this.files, name:this.title} )
			},
    },

    computed: {
		...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
	},
}
</script>