<template>
    <div class="row" style="margin-right:10px; margin-left:10px">
        <div class="container-fluid">
            <div class="card">
                <div class="card-body">
                    <form action="javascript:void(0)"  
                        enctype="multipart/form-data" method="post">
                        <div class="alert alert-success" v-if="message">{{ message }}</div>
                        <div class="form-group">
                            <label for="">{{this.title}}</label>
                            <input type="file" class="form-control" ref="file" name="file" @click="reset" @change="upload($event.target)">
                            <input :disabled="files.length<=0||isClicked" type="button" value="BATAL" @click="click" v-on:click.prevent="reset" class="btn btn-danger btn-sm" style="margin-top:5px;">
                        </div>
                        <div class="progress">
                        <!-- PROGRESS BAR DENGAN VALUE NYA KITA DAPATKAN DARI VARIABLE progressBar -->
                        <div class="progress-bar" role="progressbar" 
                            :style="{width: progressBar + '%'}" 
                            :aria-valuenow="progressBar" 
                            aria-valuemin="0" 
                            aria-valuemax="100">{{progressBar}}%</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
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