<template>
	<div>
		<div class="navbar navbar-inverse bg-primary">
			<div class="navbar-header">
				<router-link :to="{ name: 'dashboard' }" class="navbar-brand">
					<strong>SIMO</strong>
				</router-link>
				<ul class="nav navbar-nav pull-right visible-xs-block">
					<li>
						<a data-toggle="collapse" data-target="#navbar-mobile">
							<i class="icon-tree5"></i>
						</a>
					</li>
				</ul>
				<p class="navbar-text">
					<span class="label bg-success-400">
						<span v-if="userData.pus">{{userData.pus.nama}}</span> 
						<span v-if="userData.cu">- CU {{userData.cu.nama}}</span>
					</span>
				</p>
			</div>
			<div class="navbar-collapse collapse" id="navbar-mobile">
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown dropdown-user">
						<a class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
							<img src="/images/no_image_man.jpg" alt="">
							<span>{{userData.nama}}</span>
							<i class="caret"></i>
						</a>

						<ul class="dropdown-menu dropdown-menu-right">
							<li>
								<a href="#">
									<i class="icon-user-plus"></i> Profile</a>
							</li>
							<li class="divider"></li>
							<li>
								<a href="#" @click.prevent="logout">
									<i class="icon-switch2"></i> Logout</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<!-- second navbar -->
		<div class="navbar navbar-default" id="navbar-second">
			<ul class="nav navbar-nav no-border visible-xs-block">
				<li>
					<a class="text-center collapsed" data-toggle="collapse" data-target="#navbar-second-toggle">
						<i class="icon-menu7"></i>
					</a>
				</li>
			</ul>

			<div class="navbar-collapse collapse" id="navbar-second-toggle">
				<ul class="nav navbar-nav">
					<router-link :to="{ name: 'dashboard' }" tag="li" active-class="active" exact>
						<a>
							<i class="icon-display4 position-left"></i> Dashboard</a>
					</router-link>

					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
							<i class="icon-earth"></i> Website
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu">
							<router-link :to="{ name:'artikelCreate' }" tag="li" active-class="active" exact>
								<a>
									<i class="icon-plus22"></i> Tambah Artikel</a>
							</router-link>
							<li class="divider"></li>
							<router-link :to="{ name: 'artikel' }" tag="li" active-class="active" exact>
								<a>
									<i class="icon-magazine"></i> Artikel</a>
							</router-link>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import corefunc from '../assets/plugins/buttons/hover_dropdown.min.js'

	export default {
		data() {
			return {
				name: ''
			}
		},
		mounted() {
			corefunc.hover_function();
		},
		created() {
			this.getUser();
		},
		methods: {
			getUser() {
				axios.get('/api/v1/userData').then(response => {
					this.$store.dispatch('loadUserData', response.data.model);
				})
			},
			logout() {
				axios.post('/logout').then(response => {
					location.reload();
				}).catch(error => {
					location.reload();
				});
			}
		},
		computed: {
			userData(){
				return this.$store.getters.getUserData;
			}
		}
	}
</script>