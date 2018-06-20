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
							<span class="visible-xs-inline-block position-right">Pemberitahuan</span>
							<span class="badge bg-warning-400" v-if="unreadNotification > 0">{{unreadNotification}}</span>
						</a>
						
						<div class="dropdown-menu dropdown-content width-350">
							<div class="dropdown-content-heading bg-primary-300" v-if="unreadNotification > 0">
								Terdapat {{unreadNotification}} pemberitahuan

								<ul class="icons-list">
									<li><a @click.prevent="markAllNotifRead()" v-tooltip:right="'Tandai sudah dibaca'"><i class="icon-checkbox-checked"></i></a></li>
								</ul>
							</div>
							<div class="dropdown-content-heading text-center bg-primary-300" v-else>
								Tidak terdapat pemberitahuan 
								<span v-if="notification.length > 0">baru</span>
							</div>	

							<ul class="media-list dropdown-content-body mt-15" v-if="notification.length > 0">

								<li class="media" v-for="notif in notification">
									<div class="media-body" @click.prevent="goToPage(notif)" style="cursor:pointer;">
										<a class="media-heading" :class="{'text-muted' : notif.read_at != null}">
											<b>{{notif.user.name}} 
												[
													{{notif.data.cu}}
													<span v-if="notif.data.tp != ''">- {{notif.data.tp}}</span>
												]
											</b>
											<span class="media-annotation pull-right">{{notif.created_at | relativeHour}}</span>
										</a>
										<hr class="mt-5 mb-5">
										<span :class="{'text-muted' : notif.read_at != null,'text-primary' : notif.read_at == null}">{{notif.data.message}}</span>
									</div>
								</li>
							</ul>

							<div class="dropdown-content-footer" v-if="notification.length > 0">
								<a @click.prevent="goToNotifCenter()">LIHAT SEMUA PEMBERITAHUAN</a>
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
							<router-link :to="{ name:'artikelCreate' }" tag="li" active-class="active" exact v-if="profile.can && profile.can['create_artikel']">
								<a><i class="icon-plus22"></i> Tambah Artikel</a>
							</router-link>

							<!-- tambah penulis -->
							<router-link :to="{ name:'artikelKategoriCreate' }" tag="li" active-class="active" exact v-if="profile.can && profile.can['create_artikel_Kategori']">
								<a><i class="icon-plus22"></i> Tambah Kategori</a>
							</router-link>

							<!-- tambah penulis -->
							<router-link :to="{ name:'artikelPenulisCreate' }" tag="li" active-class="active" exact v-if="profile.can && profile.can['create_artikel_penulis']">
								<a><i class="icon-plus22"></i> Tambah Penulis</a>
							</router-link>

							<!-- separator -->
							<li class="divider"></li>

							<!-- artikel -->
							<router-link :to="{ name: 'artikelCu', params:{cu: this.profile.id_cu} }" tag="li" active-class="active" exact v-if="profile.can && profile.can['index_artikel']">
								<a><i class="icon-magazine"></i> Artikel</a>
							</router-link>

							<!-- kategori artikel -->
							<router-link :to="{ name: 'artikelKategoriCu', params:{cu: this.idCu} }" tag="li" active-class="active" exact>
								<a><i class="icon-grid6"></i> Kategori Artikel</a>
							</router-link>

							<!-- penulis artikel -->
							<router-link :to="{ name: 'artikelPenulisCu', params:{cu:this.idCu}  }" tag="li" active-class="active" exact v-if="profile.can && profile.can['index_artikel_penulis']">
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
							<router-link :to="{ name:'cuCreate' }" tag="li" active-class="active" exact v-if="profile.id_cu == 0 && profile.can && profile.can['create_cu']">
								<a><i class="icon-plus22"></i> Tambah CU</a>
							</router-link>

							<!-- tambah tpcu -->
							<router-link :to="{ name:'tpCreate' }" tag="li" active-class="active" exact v-if="profile.can && profile.can['create_tp']">
								<a><i class="icon-plus22"></i> Tambah TP/KP</a>
							</router-link>

							<!-- separator -->
							<li class="divider"></li>

							<!-- cu -->
							<router-link :to="{ name: 'cu' }" tag="li" active-class="active" exact v-if="profile.id_cu == 0 && profile.can && profile.can['index_cu']">
								<a><i class="icon-office"></i> CU</a>
							</router-link>
							<!-- cu -->
							<router-link :to="{ name: 'tpCu', params:{cu:'semua'} }" tag="li" active-class="active" exact v-if="profile.can && profile.can['index_tp'] && profile.id_cu == 0">
								<a><i class="icon-home9"></i> TP/KP</a>
							</router-link>
							<router-link :to="{ name: 'tpCu', params:{cu:this.idCu} }" tag="li" active-class="active" exact v-if="profile.can && profile.can['index_tp'] && profile.id_cu != 0">
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
							<router-link :to="{ name:'laporanCuCreate' }" tag="li" active-class="active" exact v-if="profile.can && profile.can['create_laporan_cu']">
								<a><i class="icon-plus22"></i> Tambah Laporan CU</a>
							</router-link>

							<!-- separator -->
							<li class="divider"></li>

							<!-- laporancu -->
							<router-link :to="{ name: 'laporanCu' }" tag="li" active-class="active" exact v-if="profile.can && profile.can['index_laporan_cu'] && profile.id_cu == '0'">
								<a><i class="icon-stats-growth"></i> Laporan CU</a>
							</router-link>
							<router-link :to="{ name: 'laporanCuCu',params: { cu: idCu, tp:'konsolidasi' } }" tag="li" active-class="active" exact v-else-if="profile.can && profile.can['index_laporan_cu'] && profile.id_cu != '0'">
								<a><i class="icon-stats-growth"></i> Laporan CU</a>
							</router-link>
							<li class="dropdown-submenu" v-if="modelTp.length > 0">
								<a href="#"><i class="icon-stats-growth"></i> Laporan TP/KP</a>
								<ul class="dropdown-menu width-100">
									<li class="dropdown-header highlight">Laporan TP/KP</li>
									<li v-for="tp in modelTp">
										<router-link :to="{ name: 'laporanCuCu',params: { cu: idCu, tp:tp.id } }">{{ tp.name }}
										</router-link>
									</li>		
								</ul>
							</li>
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
							<router-link :to="{ name:'userCreate' }" tag="li" active-class="active" exact v-if="profile.can && profile.can['create_user']">
								<a><i class="icon-plus22"></i> Tambah User</a>
							</router-link>

							<!-- separator -->
							<li class="divider"></li>

							<!-- user -->
							<router-link :to="{ name: 'userCu', params:{cu: this.profile.id_cu} }" tag="li" active-class="active" exact v-if="profile.can && profile.can['index_user']">
								<a><i class="icon-users"></i> User</a>
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
					this.fetchTp();
				}
			},
			markNotifStat(value){
				if(value === "success"){
					this.$store.dispatch('user/profile');
				}
			}
		},
		methods: {
			goToNotifCenter(){

			},
			goToPage(notif){
				if(notif.data.tp == ''){
					this.$router.push({name: 'laporanCuDetail', params: { id: notif.data.url }});
				}else{
					this.$router.push({name: 'laporanTpDetail', params: { id: notif.data.url }});
				}
				this.$store.dispatch('user/markNotifRead',notif.id);
			},
			fetchTp(){
				this.$store.dispatch('tp/getCuHeader',this.idCu);
			},
			markAllNotifRead(){
				this.$store.dispatch('user/markAllNotifRead');
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
				unreadNotification: 'unreadNotification',
				profileStat: 'profileStat',
				markNotifStat: 'markNotifStat',
			}),
			...mapGetters('tp',{
				modelTp: 'headerDataS',
				modelTpStat: 'headerDataStatS',
			}),
		}
	}
</script>

<style>
.ctx-menu {
	padding-top: 0;
}
</style>
