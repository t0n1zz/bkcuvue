<template>
	<div class="login-container">
		<!-- Page container -->
		<div class="page-container">
			<!-- Page content -->
			<div class="page-content">
				<!-- Main content -->
				<div class="content-wrapper">

					<!-- login form -->
					<div class="panel panel-body login-form">
						<div class="text-center">
							<h5 class="content-group">SIMO
								<small class="display-block">Sistem Informasi Manajemen Organisasi</small>
							</h5>
						</div>

						<message :show="message.show">
							<p>{{message.content}}</p>
						</message>

						<message :show="errors.any()" v-if="submited">
							<h4>
								<i class="icon-cancel-circle2"></i> Oops terjadi kesalahan</h4>
							<ul>
								<li v-for="error in errors.items">{{error.msg}}</li>
							</ul>
						</message>

						<div class="form-group has-feedback has-feedback-right" :class="{'has-error' : errors.has('Username')}">
							<div class="input-group">
									<div class="input-group-addon">
										<i class="icon-user text-muted"></i>
									</div>
									<input type="text" class="form-control" placeholder="Username" v-model="username" name="Username" v-validate="'required|min:5'" @keyup.enter="login" autofocus>
							</div>
							
							<div class="form-control-feedback" v-if="errors.has('Username')">
								<i class="icon-cancel-circle2"></i>
							</div>
						</div>

						<div class="form-group has-feedback has-feedback-right" :class="{'has-error' : errors.has('Password')}">
							<div class="input-group">
								<div class="input-group-addon">
									<i class="icon-lock2 text-muted"></i>
								</div>
								<input type="password" class="form-control" placeholder="Password" v-model="password" name="Password" v-validate="'required'"
							  @keyup.enter="login">
							</div>
							
							<div class="form-control-feedback" v-if="errors.has('Password')">
								<i class="icon-cancel-circle2"></i>
							</div>
						</div>

						<div class="form-group">
							<button type="button" class="btn btn-primary btn-block" disabled v-if="loading">
								<i class="icon-spinner2 spinner"></i>
							</button>
							<button type="button" class="btn btn-primary btn-block" @click.prevent="login"  v-else>Login
								<i class="icon-circle-right2 position-right"></i>
							</button>
						</div>
					</div>
					<!-- /simple login form -->
				</div>
				<!-- /main content -->
			</div>
			<!-- /page content -->
		</div>
		<!-- /page container -->
	</div>
</template>

<script type="text/javascript">
	import Message from "../components/message.vue";
	import Progress from '../assets/plugins/loaders/progressbar.min.js'
	export default {
		components: {
			Message
		},
		data() {
			return {
				username: "",
				password: "",
				loading: false,
				submited: '',
				message: {
					show: false,
					className: '',
					content: ''
				}
			}
		},
		mounted() {
			Progress.progressbar();
		},
		methods: {
			login() {
				this.$validator.validateAll().then((result) => {
					if(result){
						this.message.show = false;
						this.loading = true;
						axios.post('/login', {
								username: this.username,
								password: this.password
							})
							.then(response => {
								this.$router.push('/');
							}).catch(error => {
								this.message.show = true;
								this.message.className = 'bg-danger';
								if (error.response.status === 422) {
									this.message.content = "Username atau password anda salah.";
								} else {
									this.message.content = error.response.data.message;
								}
								this.loading = false;
							});
							this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			}
		}
	}
</script>