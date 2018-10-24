<template>
	<div>
		<!-- first navbar -->
		<div class="navbar navbar-expand-md navbar-dark bg-indigo">

			<div class="navbar-brand wmin-0 mr-0">
				<router-link :to="{ name: 'dashboard' }" class="d-inline-block">
					<img src="/images/simo.png">
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
						<span v-if="currentUser.pus">{{currentUser.pus.name}}</span>
						<span v-if="currentUser.cu">- CU {{currentUser.cu.name}}</span>
					</span>
				</span>

				<ul class="navbar-nav">

					<!-- notification -->
					<li class="nav-item dropdown">
						<a href="#" class="navbar-nav-link dropdown-toggle caret-0" data-toggle="dropdown">
							<i class="icon-bell2"></i>
							<span class="d-md-none ml-2">Pemberitahuan</span>
							<span class="badge badge-pill bg-warning-400 ml-auto ml-md-0" v-if="unreadNotification && unreadNotification > 0">{{unreadNotification}}</span>
						</a>			

						<div class="dropdown-menu dropdown-menu-right dropdown-content wmin-md-350">
							<div class="dropdown-content-header" v-if="unreadNotification > 0">
								<span class="font-weight-semibold">Terdapat {{unreadNotification}} pemberitahuan</span>
								<a href="#" class="text-default" @click.prevent="markAllNotifRead()" v-tooltip:right="'Tandai sudah dibaca'"><i class="icon-checkbox-checked"></i></a>
							</div>
							<div class="dropdown-content-header" v-else>
								<span class="font-weight-semibold">Tidak ada pemberitahuan <span v-if="notification && notification.length > 0">baru</span></span>
							</div>

							<div class="dropdown-content-body dropdown-scrollable">
								<ul class="media-list" v-if="notification && notification.length > 0">
									<li class="media" v-for="notif in notification">
										<div class="media-body" @click.prevent="goToPage(notif)" style="cursor:pointer;">
											<div class="media-title" :class="{'text-muted' : notif.read_at != null}">
												<span class="font-weight-semibold">
												{{notif.user.name}} <br/>[ CU {{notif.data.cu}} <span v-if="notif.data.tp != ''">- {{notif.data.tp}}</span> ]
												</span>
												<span class="text-muted float-right font-size-sm">{{notif.created_at | relativeHour}}</span>
											</div>
											<hr class="mt-1 mb-1">
											<span :class="{'text-muted' : notif.read_at != null,'text-primary' : notif.read_at == null}">{{notif.data.message}}</span>
										</div>
									</li>
								</ul>
							</div>

							<div class="dropdown-content-footer text-center p-0"  v-if="notification && notification.length > 0">
								<a href="#" class="bg-light text-grey w-100 py-2" @click.prevent="goToNotifCenter()">LIHAT SEMUA PEMBERITAHUAN</a>
							</div>
						</div>		
					</li>

					<!-- user -->
					<li class="nav-item dropdown dropdown-user">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<img :src="'/images/user/' + currentUser.gambar + 'n.jpg'" alt="user image" class="rounded-circle" v-if="currentUser.gambar" width="36" height="36">
							<img src="/images/no_image_man.jpg" alt="user image" class="rounded-circle" width="36" height="36" v-else>
							<span>{{currentUser.name}}</span>
						</a>

						<div class="dropdown-menu dropdown-menu-right">
							<router-link :to="{ name: 'profile', params:{id: currentUser.id} }" class="dropdown-item" active-class="active" exact v-if="currentUser.can">
								<i class="icon-user"></i> Profile
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
					<li class="nav-item dropdown" v-if="currentUser.can['create_artikel'] || currentUser.can['create_artikel_kategori'] || currentUser.can['create_artikel_penulis'] || currentUser.can['index_artikel'] || currentUser.can['index_artikel_kategori'] || currentUser.can['index_artikel_penulis']">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-newspaper mr-2"></i>
							Publikasi
						</a>

						<div class="dropdown-menu">

							<!-- tambah artikel -->
							<router-link :to="{ name:'artikelCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_artikel']">
            		<i class="icon-plus22"></i> Tambah Artikel
         		  </router-link>

							 <!-- tambah penulis -->
							<router-link :to="{ name:'artikelKategoriCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_artikel_kategori']">
								<i class="icon-plus22"></i> Tambah Kategori
							</router-link>

							<!-- tambah penulis -->
							<router-link :to="{ name:'artikelPenulisCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_artikel_penulis']">
								<i class="icon-plus22"></i> Tambah Penulis
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider"></div> 

							<!-- artikel -->
							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_artikel'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu == 'artikel'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('artikel')">
									<i class="icon-magazine"></i> Artikel
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'artikel'}">
									
									<router-link :to="{ name: 'artikelCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>
									<router-link :to="{ name: 'artikelCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser">
										Puskopdit BKCU Kalimantan
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="cu in modelCu">
										<router-link :to="{ name: 'artikelCu', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'artikelCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_artikel'] && currentUser.id_cu != 0">
								<i class="icon-magazine"></i> Artikel
							</router-link>

							<!-- kategori artikel -->
							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_artikel_kategori'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu == 'kategoriArtikel'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('kategoriArtikel')">
									<i class="icon-grid6"></i> Kategori Artikel
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'kategoriArtikel'}">

									<router-link :to="{ name: 'artikelKategoriCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>
									<router-link :to="{ name: 'artikelKategoriCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser">
										Puskopdit BKCU Kalimantan
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="cu in modelCu">
										<router-link :to="{ name: 'artikelKategoriCu', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'artikelKategoriCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_artikel_kategori'] && currentUser.id_cu != 0">
								<i class="icon-grid6"></i> Kategori Artikel
							</router-link>

							<!-- penulis artikel -->
							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_artikel_penulis'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu == 'penulisArtikel'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('penulisArtikel')">
									<i class="icon-pencil6"></i> Penulis Artikel
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'penulisArtikel'}">

									<router-link :to="{ name: 'artikelPenulisCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>
									<router-link :to="{ name: 'artikelPenulisCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact>
										Puskopdit BKCU Kalimantan
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="cu in modelCu">
										<router-link :to="{ name: 'artikelPenulisCu', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'artikelPenulisCu', params:{cu: currentUser.id_cu}  }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_artikel_penulis'] && currentUser.id_cu != 0">
								<i class="icon-pencil6"></i> Penulis Artikel
							</router-link>

						</div>
					</li>

					<!-- kegiatan -->
					<li class="nav-item dropdown" v-if="currentUser.can['create_diklat_bkcu'] || currentUser.can['create_tempat'] || currentUser.can['index_diklat_bkcu'] || currentUser.can['index_tempat']">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-calendar3 mr-2"></i>
							Kegiatan
						</a>

						<div class="dropdown-menu">

							<!-- tambah diklat pus -->
							<router-link :to="{ name:'diklatBKCUCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['create_diklat_bkcu']">
								<i class="icon-plus22"></i> Tambah Diklat BKCU
							</router-link>

							<!-- tambah tempat -->
							<router-link :to="{ name:'tempatCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['create_tempat']">
								<i class="icon-plus22"></i> Tambah Tempat
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider"></div> 

							<!-- diklat pus -->
							<router-link :to="{ name: 'diklatBKCU' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_diklat_bkcu']">
								<i class="icon-graduation2"></i> Diklat BKCU
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider"></div> 

							<!-- tempat -->
							<router-link :to="{ name: 'tempat' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_tempat']">
								<i class="icon-location4"></i> Tempat
							</router-link>

						</div>
					</li>

					<!-- organisasi -->
					<li class="nav-item dropdown" v-if="currentUser.can['create_cu'] || currentUser.can['create_tp'] || currentUser.can['create_pengelola'] || currentUser.can['create_produk_cu'] || currentUser.can['index_cu'] || currentUser.can['index_tp'] || currentUser.can['index_pengelola'] || currentUser.can['index_produk_cu']">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-library2 mr-2"></i>
							Organisasi
						</a>

						<div class="dropdown-menu">

							<!-- tambah cu -->
							<router-link :to="{ name:'cuCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['create_cu']">
								<i class="icon-plus22"></i> Tambah CU
							</router-link>

							<!-- tambah tpcu -->
							<router-link :to="{ name:'tpCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_tp']">
								<i class="icon-plus22"></i> Tambah TP/KP
							</router-link>

							<!-- tambah pengelola -->
							<router-link :to="{ name:'produkCuCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_produk_cu']">
								<i class="icon-plus22"></i> Tambah Produk & Pelayanan
							</router-link>

							<!-- tambah pengelola -->
							<router-link :to="{ name:'pengelolaCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_pengelola']">
								<i class="icon-plus22"></i> Tambah Pengelola
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider"></div> 
 
							<!-- cu -->
							<router-link :to="{ name: 'cu' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['index_cu']">
								<i class="icon-office"></i> CU
							</router-link>
							<router-link :to="{ name: 'cuProfile', params:{id: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu != 0 && currentUser.can['update_cu']">
								<i class="icon-office"></i> Profile CU
							</router-link>

							<!-- tp -->
							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_tp'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu == 'tp'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('tp')">
									<i class="icon-home9"></i> TP/KP
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'tp'}">

									<router-link :to="{ name: 'tpCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="cu in modelCu">
										<router-link :to="{ name: 'tpCu', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'tpCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_tp'] && currentUser.id_cu != 0">
								<i class="icon-home9"></i> TP/KP
							</router-link>

							<!-- produkcu -->
							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_produk_cu'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu == 'produkCu'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('produkCu')">
									<i class="icon-list3"></i> Produk & Pelayanan
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'produkCu'}">

									<router-link :to="{ name: 'produkCuCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="cu in modelCu">
										<router-link :to="{ name: 'produkCuCu', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'produkCuCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_produk_cu'] && currentUser.id_cu != 0">
								<i class="icon-list3"></i> Produk & Pelayanan CU
							</router-link>

							<!-- pengelola -->
							<router-link :to="{ name: 'pengelolaCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_pengelola']">
								<i class="icon-user-tie"></i> Pengelola
							</router-link>

							<!-- divider -->
							<!-- <div class="dropdown-divider"></div>  -->

							<!-- surat -->
							<!-- <div class="dropdown-submenu" v-if="currentUser.id_cu == 0" v-show="currentUser.can['index_surat_masuk'] || currentUser.can['index_surat_keluar']" :class="{'show' : dropdownMenu == 'surat'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('surat')">
									<i class="icon-mail5"></i> Surat
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'surat'}">

									<router-link :to="{ name: 'tpCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										<i class="icon-move-left"></i> Masuk
									</router-link>

									<router-link :to="{ name: 'tpCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										<i class="icon-move-right"></i> Keluar
									</router-link>

								</div>
							</div> -->

						</div>
					</li>

					<!-- keuangan -->
					<li class="nav-item dropdown" v-if="currentUser.can['create_laporan_cu'] || currentUser.can['index_laporan_cu']">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-calculator3 mr-2"></i>
							Keuangan
						</a>

						<div class="dropdown-menu">

							<!-- tambah laporan -->
							<router-link :to="{ name:'laporanCuCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_laporan_cu']">
								<i class="icon-plus22"></i> Tambah Laporan Statistik CU
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider"></div> 

							<router-link :to="{ name: 'laporanGerakan' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_laporan_cu']">
								<i class="icon-stats-bars"></i> Laporan Statistik Gerakan
							</router-link>

							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_laporan_cu'] && currentUser.id_cu == '0'" :class="{'show' : dropdownMenu == 'laporanCu'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('laporanCu')">
									<i class="icon-stats-bars2"></i> Laporan Statistik CU
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'laporanCu'}">

									<router-link :to="{ name: 'laporanCu' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_laporan_cu'] && currentUser.id_cu == '0'">
										 Semua CU
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="cu in modelCu">
										<router-link :to="{ name: 'laporanCuCu',params: { cu: cu.id, tp:'konsolidasi' } }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_laporan_cu'] && currentUser.id_cu == '0' && cu">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_laporan_cu'] && currentUser.id_cu != '0'" :class="{'show' : dropdownMenu == 'laporanTp'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('laporanTp')">
									<i class="icon-stats-growth"></i> Laporan Perkembangan CU
								</a>

								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'laporanTp'}">
									<router-link :to="{ name: 'laporanCuCu',params: { cu: currentUser.id_cu, tp:'konsolidasi' } }" class="dropdown-item" active-class="active" exact v-if="currentUser">
										Konsolidasi
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="tp in modelTp" v-if="modelTp.length > 0">
										<router-link :to="{ name: 'laporanCuCu',params: { cu: currentUser.id_cu, tp:tp.id } }" class="dropdown-item" v-if="currentUser">{{ tp.name }}
										</router-link>
									</template>		
								</div>

							</div>

							<router-link :to="{ name: 'laporanCuDraft' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_laporan_cu'] && laporanCuDraftCountStat == 'success' && laporanCuDraftCount > 0">
								<i class="icon-stats-bars2"></i> Laporan Statistik CU [DRAFT]
							</router-link>

							<router-link :to="{ name: 'laporanTpDraft' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_laporan_tp'] && laporanTpDraftCountStat == 'success' && laporanTpDraftCount > 0">
								<i class="icon-stats-bars2"></i> Laporan Statistik TP/KP [DRAFT]
							</router-link>

						</div>
					</li>

					<!-- pengaturan -->
					<li class="nav-item dropdown" v-if="currentUser.can['create_user'] || currentUser.can['index_user']">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-gear mr-2"></i>
							Sistem
						</a>

						<div class="dropdown-menu">

							<!-- tambah user -->
							<router-link :to="{ name:'userCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_user']">
								<i class="icon-plus22"></i> Tambah User
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider"></div> 

							<!-- user -->
							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_user'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu == 'user'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('user')">
									<i class="icon-users"></i> User
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'user'}">

									<router-link :to="{ name: 'userCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>
									<router-link :to="{ name: 'userCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser">
										Puskopdit BKCU Kalimantan
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="cu in modelCu">
										<router-link :to="{ name: 'userCu', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'userCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_user'] && currentUser.id_cu != 0">
								<i class="icon-users"></i> User
							</router-link>

							<!-- profile -->
							<router-link :to="{ name: 'profile', params:{id: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can">
								<i class="icon-user"></i> Profile
							</router-link>

						</div>
					</li>

				</ul>

			</div>
		</div>

	</div>
</template>

<script type="text/javascript">
	import { logout } from "../helpers/auth.js";
	import { mapGetters } from 'vuex';

	export default {
		data(){
			return{
				dropdownMenu: '',
				laporanCuDraftCount: [],
				laporanCuDraftCountStat: '',
			}
		},
		created(){
			this.fetchTp();
			this.fetchCu();
			this.fetchNotif();
			this.fetchLaporanCuDraft();
			this.fetchLaporanTpDraft();
		},
		watch: {
			'$route' (to, from){
				this.fetchNotif();
				this.fetchLaporanCuDraft();
				this.fetchLaporanTpDraft();
			},
			markNotifStat(value){
				if(value === "success"){
					this.fetchNotif();
				}
			}
		},
		methods: {
			dropdown(value){
				if(this.dropdownMenu != value){
					this.dropdownMenu = value;
				}else{
					this.dropdownMenu = '';
				}
			},
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
			fetchLaporanCuDraft(){
				axios.get('/api/laporanCu/countDraft')
					.then(response => {
						this.laporanCuDraftCount = response.data.model;
						this.laporanCuDraftCountStat = 'success';
					})
					.catch(error => {
						this.laporanCuDraftCount = error.response;
						this.laporanCuDraftCountStat = 'fail';
					});
			},
			fetchLaporanTpDraft(){
				axios.get('/api/laporanTp/countDraft')
					.then(response => {
						this.laporanTpDraftCount = response.data.model;
						this.laporanTpDraftCountStat = 'success';
					})
					.catch(error => {
						this.laporanTpDraftCount = error.response;
						this.laporanTpDraftCountStat = 'fail';
					});
			},
			fetchTp(){
				this.$store.dispatch('tp/getCuHeader',this.currentUser.id_cu);
			},
			fetchCu(){
				this.$store.dispatch('cu/getHeader');
			},
			fetchNotif(){
				this.$store.dispatch('user/getNotif');
			},
			markAllNotifRead(){
				this.$store.dispatch('user/markAllNotifRead');
			},
			logout() {
				// TODO: log out on server side
				axios.post('/api/auth/logout')
				.then((response) => {
					console.log('success');
				})
				.catch((err) => {
					console.log(err);
				})
			
				this.$store.dispatch('auth/logout');
				this.$router.push('/login');
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser',
			}),
			...mapGetters('user',{
				notification: 'notification',
				unreadNotification: 'unreadNotification',
				markNotifStat: 'markNotifStat',
			}),
			...mapGetters('tp',{
				modelTp: 'headerDataS',
				modelTpStat: 'headerDataStatS',
			}),
			...mapGetters('cu',{
				modelCu: 'headerDataS',
				modelCuStat: 'headerDataStatS',
			}),
		}
	}
</script>
