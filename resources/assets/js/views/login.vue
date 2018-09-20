<template>
	<div class="page-content">
		<!-- Page content -->
		<div class="content-wrapper">
			<!-- Main content -->
			<div class="content d-flex justify-content-center align-items-center">

				

				<!-- login form -->
				<div class="login-form">

					<message v-if="message.show" :errorData="message.content" :showDebug="false">
					</message>

					<message v-if="errors.any() && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.item" :showDebug="false">
					</message>
				
					<div class="card card-body mb-0">
						<div class="text-center mb-3">
							<h5 class="mb-0">SIMO</h5>
							<span class="d-block text-muted">Sistem Informasi Manajemen Organisasi</span>
						</div>

						<div class="form-group has-feedback has-feedback-right" :class="{'has-error' : errors.has('Username')}">
							<div class="input-group">
								<div class="input-group-prepend">
									<div class="input-group-text">
										<i class="icon-user text-muted"></i>
									</div>
								</div>
								
								<input type="text" class="form-control" placeholder="Username" v-model="username" name="Username" v-validate="'required|min:5'" @keyup.enter="login" autofocus>
							</div>
							
							<div class="form-control-feedback" v-if="errors.has('Username')">
								<i class="icon-cancel-circle2"></i>
							</div>
						</div>

						<div class="form-group has-feedback has-feedback-right" :class="{'has-error' : errors.has('Password')}">
							<div class="input-group">
								<div class="input-group-prepend">
									<div class="input-group-text">
										<i class="icon-lock2 text-muted"></i>
									</div>
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
				</div>
				
				
				<!-- /simple login form -->
			</div>
			<!-- /main content -->
		</div>
		<!-- /page content -->
	</div>
</template>

<script type="text/javascript">
	import Message from "../components/message.vue";
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
					content: ''
				}
			}
		},
		methods: {
			login() {
				this.$validator.validateAll().then((result) => {
					if(result){
						this.message.show = false;
						this.loading = true;
						axios.post('/api/login', {
								username: this.username,
								password: this.password
							})
							.then(({data}) => {
								auth.login(data.token);
								this.$router.push('/');
							}).catch(({response}) => {
								this.message.show = true;
								this.message.content = response;
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