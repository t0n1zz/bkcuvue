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
						<span v-if="userData.pus">{{userData.pus.name}}</span>
						<span v-if="userData.cu">- CU {{userData.cu.name}}</span>
					</span>
				</p>
			</div>
			<div class="navbar-collapse collapse" id="navbar-mobile">
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown dropdown-user">
						<a class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
							<img :src="'/images/user/' + userData.gambar + 'n.jpg'" alt="user image" v-if="userData.gambar">
							<img src="/images/no_image_man.jpg" alt="user image" v-else>
							<span>{{userData.name}}</span>
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

					<!-- dashboard -->
					<router-link :to="{ name: 'dashboard' }" tag="li" active-class="active" exact>
						<a>
							<i class="icon-display4 position-left"></i> Dashboard</a>
					</router-link>

					<!-- publikasi -->
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
							<i class="icon-newspaper position-left"></i> Publikasi
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu">

							<!-- tambah artikel -->
							<router-link :to="{ name:'artikelCreate' }" tag="li" active-class="active" exact v-if="userData.can && userData.can['create artikel']">
								<a><i class="icon-plus22"></i> Tambah Artikel</a>
							</router-link>

							<!-- tambah penulis -->
							<router-link :to="{ name:'artikelKategoriCreate' }" tag="li" active-class="active" exact v-if="userData.can && userData.can['create artikelKategori']">
								<a><i class="icon-plus22"></i> Tambah Kategori Artikel</a>
							</router-link>

							<!-- tambah penulis -->
							<router-link :to="{ name:'artikelPenulisCreate' }" tag="li" active-class="active" exact v-if="userData.can && userData.can['create artikelPenulis']">
								<a><i class="icon-plus22"></i> Tambah Penulis Artikel</a>
							</router-link>

							<!-- separator -->
							<li class="divider"></li>

							<!-- artikel -->
							<router-link :to="{ name: 'artikel' }" tag="li" active-class="active" exact v-if="userData.can && userData.can['index artikel']">
								<a><i class="icon-magazine"></i> Artikel</a>
							</router-link>

							<!-- kategori artikel -->
							<router-link :to="{ name: 'artikelKategori' }" tag="li" active-class="active" exact>
								<a><i class="icon-grid6"></i> Kategori Artikel</a>
							</router-link>

							<!-- penulis artikel -->
							<router-link :to="{ name: 'artikelPenulis' }" tag="li" active-class="active" exact v-if="userData.can && userData.can['index artikelPenulis']">
								<a><i class="icon-pencil6"></i> Penulis Artikel</a>
							</router-link>
						</ul>
					</li>

					<!-- organisasi -->
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
							<i class="icon-library2 position-left"></i> Organisasi
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu">

							<!-- tambah artikel -->
							<router-link :to="{ name:'cuCreate' }" tag="li" active-class="active" exact v-if="userData.can && userData.can['create cu']">
								<a><i class="icon-plus22"></i> Tambah CU</a>
							</router-link>

							<!-- separator -->
							<li class="divider"></li>

							<!-- artikel -->
							<router-link :to="{ name: 'cu' }" tag="li" active-class="active" exact v-if="userData.can && userData.can['index cu']">
								<a><i class="icon-office"></i> CU</a>
							</router-link>
						</ul>
					</li>

					<!-- pengaturan -->
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
							<i class="icon-gear position-left"></i> Pengaturan
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu">

							<!-- tambah user -->
							<router-link :to="{ name:'userCreate' }" tag="li" active-class="active" exact v-if="userData.can && userData.can['create user']">
								<a><i class="icon-plus22"></i> Tambah User</a>
							</router-link>

							<!-- separator -->
							<li class="divider"></li>

							<!-- user -->
							<router-link :to="{ name: 'user' }" tag="li" active-class="active" exact v-if="userData.can && userData.can['index user']">
								<a><i class="icon-users"></i> User</a>
							</router-link>

							<!-- role -->
							<router-link :to="{ name: 'role' }" tag="li" active-class="active" exact>
								<a><i class="icon-hat"></i> Role</a>
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
			this.$store.dispatch('loadUserData');
		},
		methods: {
			logout() {
				axios.post('/logout').then(response => {
					location.reload();
				}).catch(error => {
					location.reload();
				});
			}
		},
		computed: {
			userData() {
				return this.$store.getters.getUserData;
			}
		}
	}
</script>

<style>
.ctx-menu {
	padding-top: 0;
}
</style>
