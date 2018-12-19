<template>
	<div class="page-content">
		<!-- Page content -->
		<div class="content-wrapper">
			<!-- Main content -->
			<div class="content d-flex justify-content-center align-items-center">

				<!-- login form -->
				<div class="login-form">

					<message v-if="message.show" :title="'Oops terjadi kesalahan'" :errorData="message.content" :showDebug="false">
					</message>

					<message v-if="errors.any() && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
					</message>
				
					<div class="card card-body mb-0">
						<div class="text-center mb-3">
							<h5 class="mb-0">SIMO</h5>
							<span class="d-block text-muted">Sistem Informasi Manajemen Organisasi</span>
						</div>

						<form @submit.prevent="submit">

							<div class="form-group form-group-feedback form-group-feedback-right" >
								<div class="input-group">
									<div class="input-group-prepend">
										<div class="input-group-text" :class="{'alpha-danger border-danger text-danger' : errors.has('Username')}">
											<i class="icon-user"></i>
										</div>
									</div>
									
									<input type="text" class="form-control" name="Username" placeholder="Username" v-model="form.username" :class="{'border-danger' : errors.has('Username')}"  v-validate="'required|min:5'" autofocus>
								</div>
								
								<div class="form-control-feedback text-danger" v-if="errors.has('Username')">
									<i class="icon-cancel-circle2"></i>
								</div>
							</div>

							<div class="form-group form-group-feedback form-group-feedback-right">
								<div class="input-group">
									<div class="input-group-prepend">
										<div class="input-group-text" :class="{'alpha-danger border-danger text-danger' : errors.has('Password')}">
											<i class="icon-lock2"></i>
										</div>
									</div>
									<input type="password" class="form-control" name="Password" placeholder="Password" v-model="form.password" :class="{'border-danger' : errors.has('Password')}"  v-validate="'required'">
								</div>
								
								<div class="form-control-feedback text-danger" v-if="errors.has('Password')">
									<i class="icon-cancel-circle2"></i>
								</div>
							</div>

							<div class="form-group">
								<button type="button" class="btn btn-primary btn-block" disabled v-if="loadingState == 'loading'">
									<i class="icon-spinner2 spinner"></i>
								</button>
								<button type="button" class="btn btn-success btn-block" disabled v-else-if="loadingState == 'success'">
									<i class="icon-checkmark3"></i>
								</button>
								<button type="submit" class="btn btn-primary btn-block" v-else>Login
									<i class="icon-circle-right2 position-right"></i>
								</button>
							</div>

						
						</form>

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
	import { login } from "../helpers/auth.js";
	import Token from '../helpers/token.js';
	import Message from "../components/message.vue";
	export default {
		components: {
			Message
		},
		data() {
			return {
				form: {
					username: "",
					password: "",
				},
				loadingState: '',
				submited: '',
				message: {
					show: false,
					content: ''
				}
			}
		},
		methods: {
			submit() {
				this.message.show = false;
				this.$validator.validateAll().then((result) => {
					if(result){
						this.loadingState = 'loading';
						this.$store.dispatch('auth/login');

						login(this.form)
							.then((res) => {
								if(Token.isValid(res.access_token)){
									this.loadingState = 'success';
									this.$store.dispatch('auth/loginSuccess', res);

									let self = this;
									setTimeout(function(){
											self.$router.push(self.$router.history.current.query.redirect || '/');
									}, 300);

									// const token = Token.payload(res.access_token);
									// this.$store.commit('auth/setTokenExp', token.exp);
								}else{
									this.message.show = true;
									this.message.content = 'Token tidak valid';
									this.loadingState = 'fail';
								}
							})
							.catch((error) => {
								this.message.show = true;
								this.message.content = error;
								this.loadingState = 'fail';
							});

						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
		}
	}
</script>