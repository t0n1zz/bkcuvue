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

				<div class="form-group has-feedback has-feedback-left">
					<input type="text" class="form-control" placeholder="Username" v-model="username" @keyup.enter="login">
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
					<button type="submit" class="btn btn-primary btn-block" @click.prevent="login">Login <i class="icon-circle-right2 position-right"></i></button>
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
	export default {
		methods: {
			login(){
				axios.post('/login',{
					username: this.username,
					password: this.password
				})
				.then(response => {
					this.$router.push('/');
				}).catch(error => {
					console.log(error);
				})
			}
		},
		data(){
			return {
				username: "",
				password: ""
			}
		}
	}
</script>