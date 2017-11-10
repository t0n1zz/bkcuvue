<template><div class="login-container">
<!-- Page container -->
<div class="page-container">
	<!-- Page content -->
	<div class="page-content">
		<!-- Main content -->
		<div class="content-wrapper">

			<!-- Simple login form -->
			<div class="panel panel-body login-form">
				<div class="text-center">
					<h5 class="content-group">SIMO <small class="display-block">Sistem Informasi Manajemen Organisasi</small></h5>
				</div>

				<message :show="message.show" :type="message.type">
	          		<p>{{message.content}}</p>
	        	</message>

				<div class="form-group has-feedback has-feedback-left">
					<input type="text" class="form-control" placeholder="Username" v-model="username" @keyup.enter="login" autofocus>
					<div class="form-control-feedback">
						<i class="icon-user text-muted"></i>
					</div>
				</div>

				<div class="form-group has-feedback has-feedback-left">
					<input type="password" class="form-control" placeholder="Password" v-model="password" @keyup.enter="login">
					<div class="form-control-feedback">
						<i class="icon-lock2 text-muted"></i>
					</div>
				</div>

				<div class="form-group">
					<button type="button" class="btn btn-primary btn-block" disabled v-if="loading"><i class="icon-spinner2 spinner"></i></button>
					<button type="button" class="btn btn-primary btn-block" @click.prevent="login" v-else>Login <i class="icon-circle-right2 position-right"></i></button>
				</div>
			</div>
			<!-- /simple login form -->
		</div>
		<!-- /main content -->
	</div>
	<!-- /page content -->
</div>
<!-- /page container -->
</div></template>

<script type="text/javascript">
import Message from "../components/message.vue";
import Progress from '../assets/plugins/loaders/progressbar.min.js'
export default {
	components: {
        Message
    },
	mounted(){
		Progress.progressbar();
	},
	methods: {
		login(){
			this.message.show = false;
			this.loading = true;
			axios.post('/login',{
				username: this.username,
				password: this.password
			})
			.then(response => {
				this.$router.push('/');
			}).catch(error => {
				this.message.show = true;
				this.message.type = 'bg-danger';
                if (error.response.status === 422) {  
                    this.message.content = "Username atau password anda salah.";
                }else{
                    this.message.content = error.response.data.message;
                }
                this.loading = false;
			});
		}
	},
	data(){
		return {
			username: "",
			password: "",
			loading: false,
			message: {
				show: false,
				type: '',
				content: ''
			}
		}
	}
}
</script>