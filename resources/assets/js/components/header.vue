<template>
	<div>
		<!-- first navbar -->
		<div class="navbar navbar-expand-md navbar-dark bg-indigo">

			<div class="navbar-brand wmin-0 mr-5">
				<router-link :to="{ name: 'dashboard' }">
					SIMO
				</router-link>
			</div>

			<div class="d-md-none">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
					<i class="icon-tree5"></i>
				</button>
			</div>

			<div class="collapse navbar-collapse" id="navbar-mobile">
				<span class="navbar-text ml-md-3 mr-md-auto">
					<span class="badge bg-success-400 badge-pill">
						<span v-if="profile.pus">{{profile.pus.name}}</span>
						<span v-if="profile.cu">- CU {{profile.cu.name}}</span>
					</span>
				</span>

				<ul class="navbar-nav">

					<!-- notification -->
					<li class="nav-item dropdown">
						<a href="#" class="navbar-nav-link dropdown-toggle caret-0" data-toggle="dropdown">
							<i class="icon-bell2"></i>
							<span class="d-md-none ml-2">Pemberitahuan</span>
							<span class="badge badge-pill bg-warning-400 ml-auto ml-md-0" v-if="unreadNotification > 0">{{unreadNotification}}</span>
						</a>			

						<div class="dropdown-menu dropdown-menu-right dropdown-content wmin-md-350">
							<div class="dropdown-content-header" v-if="unreadNotification > 0">
								<span class="font-weight-semibold">Terdapat {{unreadNotification}} pemberitahuan</span>
								<a class="text-default" @click.prevent="markAllNotifRead()" v-tooltip:right="'Tandai sudah dibaca'"><i class="icon-checkbox-checked"></i></a>
							</div>
							<div class="dropdown-content-header" v-else>
								<span class="font-weight-semibold">Tidak ada pemberitahuan <span v-if="notification.length > 0">baru</span></span>
							</div>

							<div class="dropdown-content-body dropdown-scrollable">
								<ul class="media-list" v-if="notification.length > 0">
									<li class="media" v-for="notif in notification">
										<div class="media-body" @click.prevent="goToPage(notif)" style="cursor:pointer;">
											<div class="media-title" :class="{'text-muted' : notif.read_at != null}">
												<span class="font-weight-semibold">
												{{notif.user.name}} [ {{notif.data.cu}} <span v-if="notif.data.tp != ''">- {{notif.data.tp}}</span>]
												</span>
												<span class="text-muted float-right font-size-sm">{{notif.created_at | relativeHour}}</span>
											</div>
											<hr class="mt-5 mb-5">
											<span :class="{'text-muted' : notif.read_at != null,'text-primary' : notif.read_at == null}">{{notif.data.message}}</span>
										</div>
									</li>
								</ul>
							</div>

							<div class="dropdown-content-footer justify-content-center p-0"  v-if="notification.length > 0">
								<a @click.prevent="goToNotifCenter()">LIHAT SEMUA PEMBERITAHUAN</a>
							</div>
						</div>		
					</li>

					<!-- user -->
					<li class="nav-item dropdown dropdown-user">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<img :src="'/images/user/' + profile.gambar + 'n.jpg'" alt="user image" class="rounded-circle" v-if="profile.gambar">
							<img src="/images/no_image_man.jpg" alt="user image" class="rounded-circle" v-else>
							<span>{{profile.name}}</span>
						</a>

						<div class="dropdown-menu dropdown-menu-right">
							<router-link :to="{ name: 'profile', params:{id: profile.id} }" class="dropdown-item" exact v-if="profile.can">
								<i class="icon-user-plus"></i> Profile
							</router-link>
							<a href="#" class="dropdown-item" @click.prevent="logout"><i class="icon-switch2"></i> Logout</a>
						</div>
					</li>
				</ul>
			</div>

		</div>

		<!-- second navbar -->
		<div class="navbar navbar-expand-md navbar-light">
			<div class="text-center d-md-none w-100">
				<button type="button" class="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-navigation">
					<i class="icon-unfold mr-2"></i>
					Navigation
				</button>
			</div>

			<div class="navbar-collapse collapse" id="navbar-navigation">
				<ul class="navbar-nav navbar-nav-highlight">

					<!-- dashboard -->
					<li class="nav-item">
						<router-link :to="{ name: 'dashboard' }" class="navbar-nav-link" active-class="active" exact>
							<i class="icon-home4 mr-2"></i> Dashboard
						</router-link>
					</li>

					<!-- publikasi -->
					<li class="nav-item dropdown">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-newspaper mr-2"></i>
							Publikasi
						</a>

						<div class="dropdown-menu">

							<!-- tambah artikel -->
							<router-link :to="{ name:'artikelCreate' }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['create_artikel']">
            		<i class="icon-plus22"></i> Tambah Artikel
         		  </router-link>

							 <!-- tambah penulis -->
							<router-link :to="{ name:'artikelKategoriCreate' }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['create_artikel_kategori']">
								<i class="icon-plus22"></i> Tambah Kategori
							</router-link>

							<!-- tambah penulis -->
							<router-link :to="{ name:'artikelPenulisCreate' }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['create_artikel_penulis']">
								<i class="icon-plus22"></i> Tambah Penulis
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider"></div> 

							<!-- artikel -->
							<router-link :to="{ name: 'artikelCu', params:{cu: profile.id_cu} }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['index_artikel']">
								<i class="icon-magazine"></i> Artikel
							</router-link>

							<!-- kategori artikel -->
							<router-link :to="{ name: 'artikelKategoriCu', params:{cu: idCu} }" class="dropdown-item" active-class="active" exact>
								<i class="icon-grid6"></i> Kategori Artikel
							</router-link>

							<!-- penulis artikel -->
							<router-link :to="{ name: 'artikelPenulisCu', params:{cu: idCu}  }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['index_artikel_penulis']">
								<i class="icon-pencil6"></i> Penulis Artikel
							</router-link>

						</div>
					</li>

					<!-- kegiatan -->
					<li class="nav-item dropdown">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-calendar3 mr-2"></i>
							Kegiatan
						</a>

						<div class="dropdown-menu">

							<!-- tambah diklat pus -->
							<router-link :to="{ name:'diklatPusCreate' }" class="dropdown-item" active-class="active" exact v-if="profile.id_cu == 0 && profile.can && profile.can['create_diklat_pus']">
								<i class="icon-plus22"></i> Tambah Diklat BKCU
							</router-link>

							<!-- tambah tempat -->
							<router-link :to="{ name:'tempatCreate' }" class="dropdown-item" active-class="active" exact v-if="profile.id_cu == 0 && profile.can && profile.can['create_tempat']">
								<i class="icon-plus22"></i> Tambah Tempat
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider"></div> 

							<!-- diklat pus -->
							<router-link :to="{ name: 'diklatPus' }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['index_diklat_pus']">
								<i class="icon-graduation2"></i> Diklat BKCU
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider"></div> 

							<!-- tempat -->
							<router-link :to="{ name: 'tempat' }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['index_tempat']">
								<i class="icon-location4"></i> Tempat
							</router-link>

						</div>
					</li>

					<!-- organisasi -->
					<li class="nav-item dropdown">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-library2 mr-2"></i>
							Organisasi
						</a>

						<div class="dropdown-menu">

							<!-- tambah cu -->
							<router-link :to="{ name:'cuCreate' }" class="dropdown-item" active-class="active" exact v-if="profile.id_cu == 0 && profile.can && profile.can['create_cu']">
								<i class="icon-plus22"></i> Tambah CU
							</router-link>

							<!-- tambah tpcu -->
							<router-link :to="{ name:'tpCreate' }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['create_tp']">
								<i class="icon-plus22"></i> Tambah TP/KP
							</router-link>

							<!-- tambah pengelola -->
							<router-link :to="{ name:'produkCuCreate' }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['create_pengelola']">
								<i class="icon-plus22"></i> Tambah Produk & Pelayanan
							</router-link>

							<!-- tambah pengelola -->
							<router-link :to="{ name:'pengelolaCreate' }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['create_pengelola']">
								<i class="icon-plus22"></i> Tambah Pengelola
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider"></div> 

							<!-- cu -->
							<router-link :to="{ name: 'cu' }" class="dropdown-item" active-class="active" exact v-if="profile.id_cu == 0 && profile.can && profile.can['index_cu']">
								<i class="icon-office"></i> CU
							</router-link>
							<router-link :to="{ name: 'cuProfile', params:{id: profile.id_cu} }" class="dropdown-item" active-class="active" exact v-if="profile.id_cu != 0 && profile.can && profile.can['update_cu']">
								<i class="icon-office"></i> Profile CU
							</router-link>

							<!-- tp -->
							<router-link :to="{ name: 'tpCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['index_tp'] && profile.id_cu == 0">
								<i class="icon-home9"></i> TP/KP
							</router-link>
							<router-link :to="{ name: 'tpCu', params:{cu: idCu} }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['index_tp'] && profile.id_cu != 0">
								<i class="icon-home9"></i> TP/KP
							</router-link>

							<!-- produkcu -->
							<router-link :to="{ name: 'produkCuCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['index_produk_cu'] && profile.id_cu == 0">
								<i class="icon-list3"></i> Produk & Pelayanan
							</router-link>
							<router-link :to="{ name: 'produkCuCu', params:{cu: idCu} }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['index_produk_cu'] && profile.id_cu != 0">
								<i class="icon-list3"></i> Produk & Pelayanan
							</router-link>

							<!-- pengelola -->
							<router-link :to="{ name: 'pengelolaCu', params:{cu: idCu} }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['index_pengelola']">
								<i class="icon-user-tie"></i> Pengelola
							</router-link>

						</div>
					</li>

					<!-- keuangan -->
					<li class="nav-item dropdown">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-calculator3 mr-2"></i>
							Keuangan
						</a>

						<div class="dropdown-menu">

							<!-- tambah laporan -->
							<router-link :to="{ name:'laporanCuCreate' }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['create_laporan_cu']">
								<i class="icon-plus22"></i> Tambah Laporan Statistik CU
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider"></div> 

							<!-- laporancu -->
							<router-link :to="{ name: 'laporanCu' }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['index_laporan_cu'] && profile.id_cu == '0'">
								<i class="icon-stats-growth"></i> Laporan Statistik CU
							</router-link>

							<router-link :to="{ name: 'laporanCuCu',params: { cu: idCu, tp:'konsolidasi' } }" class="dropdown-item" active-class="active" exact v-else-if="profile.can && profile.can['index_laporan_cu'] && profile.id_cu != '0'">
								<i class="icon-stats-growth"></i> Laporan Statistik CU
							</router-link>

							<div class="dropdown-submenu" v-if="modelTp.length > 0">
								<a href="#" class="dropdown-item dropdown-item-open dropdown-toggle"><i class="icon-stats-growth"></i> Laporan Statistik TP/KP</a>
								<div class="dropdown-menu">
									<template v-for="tp in modelTp">
										<router-link :to="{ name: 'laporanCuCu',params: { cu: idCu, tp:tp.id } }" class="dropdown-item">{{ tp.name }}
										</router-link>
									</template>		
								</div>
							</div>

						</div>
					</li>

					<!-- pengaturan -->
					<li class="nav-item dropdown">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-gear mr-2"></i>
							Pengaturan
						</a>

						<div class="dropdown-menu">

							<!-- tambah user -->
							<router-link :to="{ name:'userCreate' }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['create_user']">
								<i class="icon-plus22"></i> Tambah User
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider"></div> 

							<!-- user -->
							<router-link :to="{ name: 'userCu', params:{cu: this.profile.id_cu} }" class="dropdown-item" active-class="active" exact v-if="profile.can && profile.can['index_user']">
								<i class="icon-users4"></i> User
							</router-link>

						</div>
					</li>

				</ul>

			</div>
		</div>

	</div>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex';

	export default {
		data(){
			return {
				idCu: 0
			}
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
				auth.logout();
      	this.$router.push('/login');
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
