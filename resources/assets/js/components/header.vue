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
						<span v-if="profile.pus">{{profile.pus.name}}</span>
						<span v-if="profile.cu">- CU {{profile.cu.name}}</span>
					</span>
				</p>
			</div>
			<div class="navbar-collapse collapse" id="navbar-mobile">
				<ul class="nav navbar-nav navbar-right">

					<!-- notification -->
					<li class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
							<i class="icon-bell2"></i>
							<span class="visible-xs-inline-block position-right">Notification</span>
							<span class="badge bg-warning-400" v-if="notification.length > 0">{{notification.length}}</span>
						</a>
						
						<div class="dropdown-menu dropdown-content width-350">
							<div class="dropdown-content-heading" v-if="notification.length > 0">
								Terdapat {{notification.length}} notifikasi

								<ul class="icons-list">
									<li><a @click.prevent="markNotifRead()" v-tooltip="'Tandai sudah dibaca'"><i class="icon-checkbox-checked"></i></a></li>
								</ul>
							</div>
							<div class="dropdown-content-heading text-center" v-else>
								Tidak terdapat notifikasi
							</div>	

							<ul class="media-list dropdown-content-body" v-if="notification.length > 0">

								<li class="media" v-for="notif in notification">
									<div class="media-body" @click.prevent="goToPage(notif.data)" style="cursor:pointer;">
										<a class="media-heading">
											<i class="icon-checkmark-circle" v-if="notif.read_at != ''"></i> <b>{{notif.user.name}} 
												[
													{{notif.data.cu}}
													<span v-if="notif.data.tp != ''">- {{notif.data.tp}}</span>
												]
											</b>
											<span class="media-annotation pull-right">{{notif.created_at | relativeHour}}</span>
										</a>
										<hr class="mt-5 mb-5">
										<span class="text-muted">{{notif.data.message}}</span>
									</div>
								</li>
							</ul>

							<div class="dropdown-content-footer">
								<a @click.prevent="goToNotifCenter()" data-popup="tooltip" title="All messages"><b>LIHAT SEMUA NOTIFIKASI</b></a>
							</div>
						</div>
					</li>


					<!-- account -->
					<li class="dropdown dropdown-user">
						<a class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
							<img :src="'/images/user/' + profile.gambar + 'n.jpg'" alt="user image" v-if="profile.gambar">
							<img src="/images/no_image_man.jpg" alt="user image" v-else>
							<span>{{profile.name}}</span>
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
						<a><i class="icon-display4 position-left"></i> Dashboard</a>
					</router-link>

					<!-- publikasi -->
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
							<i class="icon-newspaper position-left"></i> Publikasi
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu">

							<!-- tambah artikel -->
							<router-link :to="{ name:'artikelCreate' }" tag="li" active-class="active" exact v-if="profile.can && profile.can['create artikel']">
								<a><i class="icon-plus22"></i> Tambah Artikel</a>
							</router-link>

							<!-- tambah penulis -->
							<router-link :to="{ name:'artikelKategoriCreate' }" tag="li" active-class="active" exact v-if="profile.can && profile.can['create artikelKategori']">
								<a><i class="icon-plus22"></i> Tambah Kategori Artikel</a>
							</router-link>

							<!-- tambah penulis -->
							<router-link :to="{ name:'artikelPenulisCreate' }" tag="li" active-class="active" exact v-if="profile.can && profile.can['create artikelPenulis']">
								<a><i class="icon-plus22"></i> Tambah Penulis Artikel</a>
							</router-link>

							<!-- separator -->
							<li class="divider"></li>

							<!-- artikel -->
							<router-link :to="{ name: 'artikelCu', params:{cu: this.profile.id_cu} }" tag="li" active-class="active" exact v-if="profile.can && profile.can['index artikel']">
								<a><i class="icon-magazine"></i> Artikel</a>
							</router-link>

							<!-- kategori artikel -->
							<router-link :to="{ name: 'artikelKategoriCu', params:{cu: this.idCu} }" tag="li" active-class="active" exact>
								<a><i class="icon-grid6"></i> Kategori Artikel</a>
							</router-link>

							<!-- penulis artikel -->
							<router-link :to="{ name: 'artikelPenulisCu', params:{cu:this.idCu}  }" tag="li" active-class="active" exact v-if="profile.can && profile.can['index artikelPenulis']">
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

							<!-- tambah cu -->
							<router-link :to="{ name:'cuCreate' }" tag="li" active-class="active" exact v-if="profile.can && profile.can['create cu']">
								<a><i class="icon-plus22"></i> Tambah CU</a>
							</router-link>

							<!-- tambah tpcu -->
							<router-link :to="{ name:'tpCreate' }" tag="li" active-class="active" exact v-if="profile.can && profile.can['create tp']">
								<a><i class="icon-plus22"></i> Tambah TP/KP</a>
							</router-link>

							<!-- separator -->
							<li class="divider"></li>

							<!-- cu -->
							<router-link :to="{ name: 'cu' }" tag="li" active-class="active" exact v-if="profile.can && profile.can['index cu']">
								<a><i class="icon-office"></i> CU</a>
							</router-link>
							<!-- cu -->
							<router-link :to="{ name: 'tpCu', params:{cu:'semua'} }" tag="li" active-class="active" exact v-if="profile.can && profile.can['index tp'] && profile.id_cu == 0">
								<a><i class="icon-home9"></i> TP/KP</a>
							</router-link>
							<router-link :to="{ name: 'tpCu', params:{cu:this.idCu} }" tag="li" active-class="active" exact v-if="profile.can && profile.can['index tp'] && profile.id_cu != 0">
								<a><i class="icon-home9"></i> TP/KP</a>
							</router-link>
						</ul>
					</li>

					<!-- keuangan -->
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
							<i class="icon-calculator3 position-left"></i> Keuangan
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu">

							<!-- tambah laporan -->
							<router-link :to="{ name:'laporanCuCreate' }" tag="li" active-class="active" exact v-if="profile.can && profile.can['create laporanCu']">
								<a><i class="icon-plus22"></i> Tambah Laporan CU</a>
							</router-link>

							<!-- separator -->
							<li class="divider"></li>

							<!-- laporancu -->
							<router-link :to="{ name: 'laporanCu' }" tag="li" active-class="active" exact v-if="profile.can && profile.can['index laporanCu'] && profile.id_cu == '0'">
								<a><i class="icon-stats-growth"></i> Laporan CU</a>
							</router-link>
							<router-link :to="{ name: 'laporanCuCu',params: { cu: this.idCu, tp:'konsolidasi' } }" tag="li" active-class="active" exact v-else-if="profile.can && profile.can['index laporanCu'] && profile.id_cu != '0'">
								<a><i class="icon-stats-growth"></i> Laporan CU</a>
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
							<router-link :to="{ name:'userCreate' }" tag="li" active-class="active" exact v-if="profile.can && profile.can['create user']">
								<a><i class="icon-plus22"></i> Tambah User</a>
							</router-link>

							<!-- separator -->
							<li class="divider"></li>

							<!-- user -->
							<router-link :to="{ name: 'user' }" tag="li" active-class="active" exact v-if="profile.can && profile.can['index user']">
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
	import { mapGetters } from 'vuex';
	import corefunc from '../assets/plugins/buttons/hover_dropdown.min.js';

	export default {
		data(){
			return {
				idCu: 0
			}
		},
		mounted() {
			corefunc.hover_function();
		},
		beforeRouteEnter(to, from, next){
			next(vm => vm.$store.dispatch('user/profile'));
		},
		watch: {
			profileStat(value){
				if(value === "success"){
					this.idCu = this.profile.id_cu;
				}
			}
		},
		methods: {
			goToNotifCenter(){

			},
			goToPage(notif){

			},
			markNotifRead(){
				this.$store.dispatch('user/markNotifRead');
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
			...mapGetters('user',{
				profile: 'profile',
				notification: 'notification',
				profileStat: 'profileStat',
				markNotifStat: 'markNotifStat',
			})
		}
	}
</script>

<style>
.ctx-menu {
	padding-top: 0;
}
</style>
