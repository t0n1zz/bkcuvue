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
				<span class="navbar-text ml-md-3 mr-md-1">
					<span class="badge bg-info-400">
						<router-link :to="{ name:'changelog' }">
							<span>VERSION {{ clientVersion }}</span>
						</router-link>
					</span>
				</span>

				<span class="navbar-text ml-md-3 mr-md-auto">
					<span class="badge bg-success-400">
						<span v-if="currentUser && currentUser.id_cu != 0">CU {{currentUser.cu.name.toUpperCase()}}</span>
						<span v-else-if="currentUser && currentUser.id_cu == 0">PUSKOPDIT BKCU KALIMANTAN</span>
					</span>
				</span>

				<ul class="navbar-nav">

					<!-- panduan -->
					<li class="nav-item">
						<a href="https://puskopditbkcukalimantan.org/panduan" class="navbar-nav-link " target="_blank">
							<i class="icon-book mr-2"></i>Panduan
						</a>
					</li>

					<!-- saran -->
					<li class="nav-item">
						<a href="#" class="navbar-nav-link " @click.prevent="modalOpen('saran')">
							<i class="icon-lifebuoy mr-2"></i>Saran
						</a>
					</li>


					<!-- notification -->
					<li class="nav-item dropdown">
						<a href="#" class="navbar-nav-link dropdown-toggle caret-0" data-toggle="dropdown">
							<i class="icon-bell2"></i>
							<span class="d-md-none ml-2">Pemberitahuan</span>

							<!-- loading -->
							<span class="badge badge-pill ml-auto ml-md-0" v-if="unreadNotificationStat == 'loading'"><i class="icon-spinner2 spinner font-size-xs"></i></span>
							
							<!-- success -->
							<span class="badge badge-pill bg-warning-400 ml-auto ml-md-0" v-if="unreadNotificationStat == 'success' && unreadNotification && unreadNotification > 0">{{unreadNotification}}</span>
							
						</a>			

						<div class="dropdown-menu dropdown-menu-right dropdown-content wmin-md-350" v-if="unreadNotificationStat == 'success'">
							<div class="dropdown-content-header" v-if="unreadNotification > 0">
								<span class="font-weight-semibold">Terdapat {{unreadNotification}} pemberitahuan</span>
								<a href="#" class="text-default" @click.prevent="markAllNotifRead()" v-tooltip:right="'Tandai sudah dibaca'"><i class="icon-checkbox-checked"></i></a>
							</div>
							<div class="dropdown-content-header" v-else>
								<span class="font-weight-semibold">Tidak ada pemberitahuan <span v-if="notification && notification.length> 0">baru</span></span>
							</div>

							<div class="dropdown-content-body dropdown-scrollable">
								<ul class="media-list" v-if="notification && notification.length > 0">
									<li class="media" v-for="(notif, index) in notification" :key="index">

										<!-- notif laporan -->
										<div class="media-body" @click.prevent="goToPage(notif)" style="cursor:pointer;" v-if="notif.type == 'App\\Notifications\\Laporan'">

											<div class="media-title" :class="{'text-muted' : notif.read_at != null}">
												<span class="font-weight-semibold">
													<span v-html="$options.filters.notificationIcon(notif.data.tipe)"></span> {{notif.user.name}} <br/>
												</span>
												<span class="font-size-xs">
													[ CU {{notif.data.cu}} <span v-if="notif.data.tp != ''">- {{notif.data.tp}}</span> ]
												</span>
												<span class="text-muted float-right font-size-xs">
													<i class="icon-arrow-right5"></i>{{notif.created_at | relativeHour}}
												</span>
											</div>

											<hr class="mt-1 mb-1">

											<span :class="{'text-muted' : notif.read_at != null,'text-primary' : notif.read_at == null}">{{notif.data.message}}</span>

										</div>

										<!-- notif diklatBKCU -->
										<div class="media-body" @click.prevent="goToPage(notif)" style="cursor:pointer;" v-if="notif.type == 'App\\Notifications\\DiklatBKCU'">

											<div class="media-title" :class="{'text-muted' : notif.read_at != null}">
												<span class="font-weight-semibold">
													<i class="icon-graduation2"></i> {{notif.user.name}} <br/>
												</span>
												<span class="font-size-xs" v-if="notif.user.cu">
													[ CU {{notif.user.cu.name}} ]
												</span>
												<span class="font-size-xs" v-else>
													[ Puskopdit BKCU Kalimantan ]
												</span>
												<span class="text-muted float-right font-size-xs">
													<i class="icon-arrow-right5"></i>{{notif.created_at | relativeHour}}
												</span>
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

						<div class="dropdown-menu dropdown-menu-right dropdown-content wmin-md-350" v-if="unreadNotificationStat == 'loading'">
							<div class="dropdown-content-header">
								<span class="font-weight-semibold">Mohon tunggu...</span>
							</div>
						</div>		
					</li>

					<!-- user -->
					<li class="nav-item dropdown dropdown-user">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<img :src="'/images/user/' + currentUser.gambar + '.jpg'" alt="user image" class="rounded-circle" v-if="currentUser && currentUser.gambar" width="36" height="36">
							<img src="/images/no_image_man.jpg" alt="user image" class="rounded-circle" width="36" height="36" v-else>
							<span>{{ currentUser ? currentUser.name : "" }}</span>
						</a>

						<div class="dropdown-menu dropdown-menu-right">
							<!-- profile -->
							<router-link :to="{ name: 'profile', params:{id: currentUser.id} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can">
								<i class="icon-user"></i> Profile
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider"></div> 
							
							<!-- logout -->
							<a href="#" class="dropdown-item" @click.prevent="modalOpen('logout')"><i class="icon-switch2"></i> Logout</a>
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
					Menu
				</button>
			</div>

			<div class="navbar-collapse collapse" id="navbar-navigation">

				<!-- navbar left -->
				<ul class="navbar-nav navbar-nav-highlight">

					<!-- dashboard -->
					<li class="nav-item">
						<router-link :to="{ name: 'dashboard' }" class="navbar-nav-link" active-class="active" exact>
							<i class="icon-screen3"></i>
							<span class="d-md-none ml-2"> Dashboard</span>
						</router-link>
					</li>

					<!-- publikasi -->
					<li class="nav-item dropdown" v-if="currentUser && currentUser.can['create_artikel'] || currentUser.can['create_artikel_kategori'] || currentUser.can['create_artikel_penulis'] || currentUser.can['index_artikel'] || currentUser.can['index_artikel_kategori'] || currentUser.can['index_artikel_penulis']">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-newspaper mr-2"></i>
							Publikasi
						</a>

						<div class="dropdown-menu">
							
							<!-- tambah -->
							<div class="dropdown-submenu" v-if="currentUser && currentUser.can['create_artikel'] || currentUser.can['create_artikel_kategori'] || currentUser.can['create_artikel_penulis']">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('tambahPublikasi')">
									<i class="icon-plus22"></i> Tambah
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'tambahPublikasi'}">
									<!-- tambah artikel -->
									<router-link :to="{ name:'artikelCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_artikel']">
										Artikel
									</router-link>

									<!-- tambah penulis -->
									<router-link :to="{ name:'artikelKategoriCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_artikel_kategori']">
										Kategori Artikel
									</router-link>

									<!-- tambah penulis -->
									<router-link :to="{ name:'artikelPenulisCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_artikel_penulis']">
										Penulis Artikel
									</router-link>
								</div>
							</div>		

							<!-- divider -->
							<div class="dropdown-divider" v-if="currentUser.can['create_artikel'] || currentUser.can['create_artikel_kategori'] || currentUser.can['create_artikel_penulis']"></div> 

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

									<template v-for="(cu, index) in modelCu">
										<router-link :to="{ name: 'artikelCu', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu" :key="index">
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

									<template v-for="(cu, index) in modelCu">
										<router-link :to="{ name: 'artikelKategoriCu', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu" :key="index">
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

									<template v-for="(cu, index) in modelCu">
										<router-link :to="{ name: 'artikelPenulisCu', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu" :key="index">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'artikelPenulisCu', params:{cu: currentUser.id_cu}  }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_artikel_penulis'] && currentUser.id_cu != 0">
								<i class="icon-pencil6"></i> Penulis Artikel
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider" v-if="currentUser.can['index_pengumuman']"></div> 

							<!-- pengumuman -->
							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_pengumuman'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu == 'pengumuman'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('pengumuman')">
									<i class="icon-megaphone"></i> Pengumuman
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'pengumuman'}">

									<router-link :to="{ name: 'pengumumanCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>
									<router-link :to="{ name: 'pengumumanCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact>
										Puskopdit BKCU Kalimantan
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="(cu,index) in modelCu">
										<router-link :to="{ name: 'pengumumanCu', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu" :key="index">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'pengumumanCu', params:{cu: currentUser.id_cu}  }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_pengumuman'] && currentUser.id_cu != 0">
								<i class="icon-megaphone"></i> Pengumuman
							</router-link>

						</div>
					</li>

					<!-- kegiatan -->
					<li class="nav-item dropdown" v-if="currentUser && currentUser.can['create_diklat_bkcu'] || currentUser.can['create_tempat'] || currentUser.can['index_diklat_bkcu'] || currentUser.can['index_tempat']">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-calendar3 mr-2"></i>
							Kegiatan
						</a>

						<div class="dropdown-menu">
							
							<!-- tambah -->
							<div class="dropdown-submenu" v-if="currentUser && currentUser.can['create_diklat_bkcu'] || currentUser.can['create_tempat'] ">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('tambahKegiatan')">
									<i class="icon-plus22"></i> Tambah
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'tambahKegiatan'}">
									<!-- tambah diklat pus -->
									<router-link :to="{ name:'diklatBKCUCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['create_diklat_bkcu']">
										Diklat BKCU
									</router-link>

									<!-- tambah tempat -->
									<router-link :to="{ name:'tempatCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['create_tempat']">
										Tempat
									</router-link>
								</div>
							</div>		

							<!-- divider -->
							<div class="dropdown-divider" v-if="currentUser.can['create_diklat_bkcu'] || currentUser.can['create_tempat']"></div> 

							<!-- diklat pus -->
							<router-link :to="{ name: 'diklatBKCU', params:{periode: momentYear() } }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_diklat_bkcu']">
								<i class="icon-graduation2"></i> Diklat BKCU
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider" v-if="currentUser.can['index_tempat']"></div> 

							<!-- tempat -->
							<router-link :to="{ name: 'tempat' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 &&  currentUser.can['index_tempat']">
								<i class="icon-location4"></i> Tempat
							</router-link>

						</div>
					</li>

					<!-- anggota cu -->
					<li class="nav-item dropdown" v-if="currentUser && currentUser.can['create_anggota_cu'] || currentUser.can['create_jalinan_klaim'] || currentUser.can['index_anggota_cu'] || currentUser.can['index_saldo'] || currentUser.can['index_jalinan_klaim']">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-man-woman mr-2"></i>
							Anggota CU
						</a>

						<div class="dropdown-menu">
							
							<!-- tambah -->
							<div class="dropdown-submenu" v-if="currentUser && currentUser.can['create_anggota_cu'] || currentUser.can['create_jalinan_klaim'] || currentUser.can['create_artikel_penulis']">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('tambahAnggotaCU')">
									<i class="icon-plus22"></i> Tambah
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'tambahAnggotaCU'}">
									<!-- tambah anggota cu -->
									<router-link :to="{ name:'anggotaCuCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_anggota_cu']">
										Anggota CU
									</router-link>

									<!-- tambah klaim jalinan -->
									<router-link :to="{ name:'jalinanKlaimCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_jalinan_klaim']">
										Klaim JALINAN
									</router-link>
								</div>
							</div>		

							<!-- divider -->
							<div class="dropdown-divider" v-if="currentUser.can['create_anggota_cu']"></div> 

							<!-- anggota cu -->
							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_anggota_cu'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu == 'anggota_cu'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('anggota_cu')">
									<i class="icon-man-woman"></i> Anggota CU
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'anggota_cu'}">

									<router-link :to="{ name: 'anggotaCuCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="(cu,index) in modelCu">
										<router-link :to="{ name: 'anggotaCuCu', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu" :key="index">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'anggotaCuCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_anggota_cu'] && currentUser.id_cu != 0">
								<i class="icon-man-woman"></i> Anggota CU
							</router-link>

							<!-- if cu account -->
							<!-- <router-link :to="{ name: 'saldo'}" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_saldo']">
								<i class="icon-wallet"></i> Saldo
							</router-link> -->

							<!-- divider -->
							<div class="dropdown-divider"></div> 

							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_jalinan_klaim'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu == 'jalinan_klaim'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('jalinan_klaim')">
									<i class="icon-accessibility2"></i> Klaim JALINAN
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'jalinan_klaim'}">

									<router-link :to="{ name: 'jalinanKlaimCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="(cu, index) in modelCu">
										<router-link :to="{ name: 'jalinanKlaimCu', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu" :key="index">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'jalinanKlaimCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_jalinan_klaim']  && currentUser.id_cu != 0">
								<i class="icon-accessibility2"></i> Klaim JALINAN
							</router-link>

							<!-- if bkcu account -->
							<router-link :to="{ name: 'jalinanCair' }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['pencairan_jalinan_klaim']  && currentUser.id_cu == 0">
								<i class="icon-square-down"></i> Pencairan JALINAN
							</router-link>

							<div class="dropdown-submenu" v-if="currentUser.can['laporan_jalinan_klaim']" :class="{'show' : dropdownMenu == 'laporan_jalinan_klaim'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('laporan_jalinan_klaim')">
									<i class="icon-archive"></i> Laporan Klaim JALINAN
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'laporan_jalinan_klaim'}">

									<router-link :to="{ name: 'jalinanLaporanKlaimCair' }" v-if="currentUser.id_cu == 0" class="dropdown-item" active-class="active" exact >
										Pencairan Per-CU
									</router-link>

									<router-link :to="{ name: 'jalinanLaporanKlaimPenyebab' }" class="dropdown-item" active-class="active" exact >
										Pencairan Berdasarkan Penyebab
									</router-link>

									<router-link :to="{ name: 'jalinanLaporanKlaimUsia' }" class="dropdown-item" active-class="active" exact >
										Pencairan Berdasarkan Usia Anggota
									</router-link>

									<router-link :to="{ name: 'jalinanLaporanKlaimLama' }" class="dropdown-item" active-class="active" exact >
										Pencairan Berdasarkan Lama Menjadi Anggota
									</router-link>

								</div>
							</div>
							
						</div>
					</li>

					<!-- organisasi -->
					<li class="nav-item dropdown" v-if="currentUser && currentUser.can['create_cu'] || currentUser.can['create_tp'] || currentUser.can['create_aktivis'] || currentUser.can['create_produk_cu'] || currentUser.can['create_mitra_orang'] ||  currentUser.can['create_mitra_lembaga'] || currentUser.can['index_cu'] || currentUser.can['index_tp'] || currentUser.can['index_aktivis'] || currentUser.can['index_produk_cu'] || currentUser.can['index_mitra_orang']">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-library2 mr-2"></i>
							Organisasi
						</a>

						<div class="dropdown-menu">

							<!-- tambah -->
							<div class="dropdown-submenu" v-if="currentUser && currentUser.can['create_cu'] || currentUser.can['create_tp'] || currentUser.can['create_aktivis'] || currentUser.can['create_produk_cu'] || currentUser.can['create_mitra_orang'] ||  currentUser.can['create_mitra_lembaga']">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('tambahOrganisasi')">
									<i class="icon-plus22"></i> Tambah
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'tambahOrganisasi'}">

										<!-- tambah cu -->
										<router-link :to="{ name:'cuCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['create_cu']">
											CU
										</router-link>

										<!-- tambah tpcu -->
										<router-link :to="{ name:'tpCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_tp']">
											TP/KP
										</router-link>

										<!-- tambah aktivis -->
										<router-link :to="{ name:'produkCuCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_produk_cu']">
											Produk & Pelayanan
										</router-link>

										<!-- tambah aktivis -->
										<router-link :to="{ name:'aktivisCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_aktivis']">
											Aktivis
										</router-link>
										
										<!-- tambah mitra -->
										<router-link :to="{ name:'mitraOrangCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['create_mitra_orang']">
											Mitra Perseorangan 
										</router-link>

										<router-link :to="{ name:'mitraLembagaCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['create_mitra_lembaga']">
											Lembaga Mitra 
										</router-link>
								</div>
							</div>
						
							<!-- divider -->
							<div class="dropdown-divider" v-if="currentUser.can['create_cu'] || currentUser.can['create_tp'] || currentUser.can['create_aktivis'] || currentUser.can['create_produk_cu'] || currentUser.can['create_mitra_orang'] || currentUser.can['create_mitra_lembaga']"></div> 

							<!-- cu -->
							<!-- if bkcu account -->
							<router-link :to="{ name: 'cu' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['index_cu']">
								<i class="icon-office"></i> CU
							</router-link>
							
							<!-- if cu account -->
							<router-link :to="{ name: 'cuProfile', params:{id: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu != 0 && currentUser.can['index_cu']">
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

									<template v-for="(cu, index) in modelCu">
										<router-link :to="{ name: 'tpCu', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu" :key="index">
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

									<template v-for="(cu,index) in modelCu">
										<router-link :to="{ name: 'produkCuCu', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu" :key="index">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'produkCuCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_produk_cu'] && currentUser.id_cu != 0">
								<i class="icon-list3"></i> Produk & Pelayanan CU
							</router-link>

							<!-- aktivis -->

							<!-- if cu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_aktivis']" :class="{'show' : dropdownMenu == 'aktivis'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('aktivis')">
									<i class="icon-user-tie"></i> Aktivis
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'aktivis'}">

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua Tingkat
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'manajemen'} }" class="dropdown-item" active-class="active" exact >
										Tingkat Manajemen
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'pengurus'} }" class="dropdown-item" active-class="active" exact >
										Tingkat Pengurus
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'pengawas'} }" class="dropdown-item" active-class="active" exact >
										Tingkat Pengawas
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'komite'} }" class="dropdown-item" active-class="active" exact >
										Tingkat Komite
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'penasihat'} }" class="dropdown-item" active-class="active" exact >
										Tingkat Penasihat
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'senior_manajer'} }" class="dropdown-item" active-class="active" exact >
										Tingkat Senior Manajer
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'manajer'} }" class="dropdown-item" active-class="active" exact >
										Tingkat Manajer
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'supervisor'} }" class="dropdown-item" active-class="active" exact >
										Tingkat Supervisor
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'staf'} }" class="dropdown-item" active-class="active" exact >
										Tingkat Staf
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'kontrak'} }" class="dropdown-item" active-class="active" exact >
										Tingkat Kontrak
									</router-link>

								</div>
							</div>
						
							<!-- divider -->
							<!-- <div class="dropdown-divider" v-if="currentUser.can['index_mitra_orang'] || currentUser.can['index_mitra_lembaga']"></div> 

							<router-link :to="{ name: 'asetTetap'}" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_produk_cu'] && currentUser.id_cu == 0">
								<i class="icon-drawer3"></i> Aset Tetap
							</router-link>

							<router-link :to="{ name: 'asetTetap'}" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_produk_cu'] && currentUser.id_cu == 0">
								<i class="icon-cabinet"></i> Jenis Aset Tetap
							</router-link> -->

							<!-- divider -->
							<div class="dropdown-divider" v-if="currentUser.can['index_mitra_orang'] || currentUser.can['index_mitra_lembaga']"></div> 

							<div class="dropdown-submenu" v-if="currentUser.can['index_mitra_orang'] || currentUser.can['index_mitra_lembaga']" :class="{'show' : dropdownMenu == 'mitra'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('mitra')">
									<i class="icon-briefcase"></i> Mitra
								</a>

								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'mitra'}">
	
									<!-- mitra perseorangan -->
									<router-link :to="{ name: 'mitraOrang' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['index_mitra_orang']">
										Perseorangan
									</router-link>

									<!-- mitra perseorangan -->
									<router-link :to="{ name: 'mitraLembaga' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['index_mitra_lembaga']">
									  Lembaga
									</router-link>

								</div>

							</div>

						</div>
					</li>

					<!-- keuangan -->
					<li class="nav-item dropdown" v-if="currentUser && currentUser.can['create_laporan_cu'] || currentUser.can['index_laporan_cu']">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-calculator3 mr-2"></i>
							Keuangan
						</a>

						<div class="dropdown-menu">

							<!-- tambah -->
							<div class="dropdown-submenu" v-if="currentUser && currentUser.can['create_laporan_cu']">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('tambahKeuangan')">
									<i class="icon-plus22"></i> Tambah
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'tambahKeuangan'}">
									<!-- tambah laporan -->
									<router-link :to="{ name:'laporanCuCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_laporan_cu']">
										Laporan Statistik CU
									</router-link>
								</div>
							</div>		

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

									<template v-for="(cu, index) in modelCu">
										<router-link :to="{ name: 'laporanCuCu',params: { cu: cu.id, tp:'konsolidasi' } }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_laporan_cu'] && currentUser.id_cu == '0' && cu" :key="index">
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

									<template v-for="(tp, index) in modelTp">
										<router-link :to="{ name: 'laporanCuCu',params: { cu: currentUser.id_cu, tp:tp.id } }" class="dropdown-item" v-if="currentUser && modelTp.length > 0" :key="index">{{ tp.name }}
										</router-link>
									</template>		
								</div>

							</div>

							<router-link :to="{ name: 'laporanCuDraft' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['upload_laporan_cu'] && laporanCuDraftCountStat == 'success' && laporanCuDraftCount > 0">
								<i class="icon-stats-bars2"></i> Laporan Statistik CU [DRAFT]
							</router-link>

							<router-link :to="{ name: 'laporanTpDraft' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['upload_laporan_tp'] && laporanTpDraftCountStat == 'success' && laporanTpDraftCount > 0">
								<i class="icon-stats-bars2"></i> Laporan Statistik TP/KP [DRAFT]
							</router-link>

						</div>
					</li>

				</ul>
				
				<!-- navbar right -->
				<ul class="navbar-nav ml-md-auto">

					<!-- pengaturan -->
					<li class="nav-item dropdown" v-if="currentUser && currentUser.can['create_user'] || currentUser.can['index_user'] ">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-cog3"></i>
							<span class="d-md-none ml-2">Pengaturan</span>
						</a>
						
						<div class="dropdown-menu dropdown-menu-right">
							
							<!-- tambah -->
							<div class="dropdown-submenu" v-if="currentUser && currentUser.can['create_user']">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('tambahPengaturan')">
									<i class="icon-plus22"></i> Tambah
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu == 'tambahPengaturan'}">
									<!-- tambah user -->
									<router-link :to="{ name:'userCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_user']">
										User
									</router-link>

									<!-- tambah user -->
									<router-link :to="{ name:'artikelSimoCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_artikel_simo']">
										Artikel SIMO
									</router-link>
								</div>
							</div>		

							<!-- divider -->
							<div class="dropdown-divider"></div> 

							<!-- user -->
							<!-- if bkcu account -->
							<div class="dropdown-submenu dropdown-submenu-left" v-if="currentUser.can['index_user'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu == 'user'}">
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

									<template v-for="(cu, index) in modelCu">
										<router-link :to="{ name: 'userCu', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu" :key="index">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'userCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_user'] && currentUser.id_cu != 0">
								<i class="icon-users"></i> User
							</router-link>

							<router-link :to="{ name: 'artikelSimo' }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.id_cu == 0">
								<i class="icon-magazine"></i> Artikel SIMO
							</router-link>

							<router-link :to="{ name: 'saran' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['index_saran']">
								<i class="icon-lifebuoy"></i> Saran
							</router-link>

							<router-link :to="{ name: 'errorLog' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['index_error_log']">
								<i class="icon-cancel-square2"></i> Error Log
							</router-link>

						</div>

					</li>
				</ul>
			</div>
		</div>

		<version-alert :clientVersion="clientVersion"></version-alert>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :button="modalButton" :color="modalColor" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- saran -->
			<template slot="modal-body1">
				<form-saran 
				:id_user="currentUser.id"
				@cancelClick="modalTutup"></form-saran>
			</template>

			<template slot="modal-body2">
				<form-login :mode="'loginModal'"></form-login>
			</template>

		</app-modal>

	</div>
</template>

<script type="text/javascript">
	import { logout } from "../helpers/auth.js";
	import { mapGetters } from 'vuex';
	import formSaran from "../views/saran/form.vue";
	import appModal from './modal';
	import formLogin from './loginForm';
	import versionAlert from './versionAlert';

	export default {
		components: {
			formSaran,
			appModal,
			formLogin,
			versionAlert
		},
		data(){
			return{
				clientVersion: '3.1.6',
				dropdownMenu: '',
				dropdownMenu2: '',
				laporanCuDraftCount: [],
				laporanCuDraftCountStat: '',
				laporanTpDraftCount: [],
				laporanTpDraftCountStat: '',
				state: '',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalContent: '',
				modalColor: '',
				modalButton: '',
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
				this.fetchTp();
				this.fetchCu();
				this.fetchNotif();
				this.fetchLaporanCuDraft();
				this.fetchLaporanTpDraft();
			},
			isTokenExpired(value){ 
				if(value == true){
					this.modalShow = true;
					this.modalState = 'normal2';
					this.modalColor = '';
					this.modalTitle = '';
					this.modalButton = '';
				}else{
					this.modalShow = false;
				}
			},
			markNotifStat(value){
				if(value === "success"){
					this.fetchNotif();
				}
			},
			updateSaranStat(value){
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateSaranResponse.message;;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateSaranResponse.message;
				}
			}
		},
		methods: {
			modalOpen(state) {
				this.state = state;
				this.modalShow = true;
				this.modalContent = '';

				if (state == 'logout') {		
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Logout dari aplikasi SIMO?';
					this.modalButton = 'Iya, Logout';
				}else if(state == 'saran') {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Memberikan saran kepada kami?';
					this.modalButton = 'Ok';
				}
			},
			modalTutup() {
				if(!this.isTokenExpired){
					this.modalShow = false;
				}

				if(this.state == 'logout-confirmed'){
					this.$store.dispatch('auth/logout');
					this.$router.push('/login');
				}
			},
			modalConfirmOk() {
				if (this.state == 'logout') {
					this.state = 'logout-confirmed'
					this.logout();
				}
			},
			dropdown(value){
				if(this.dropdownMenu != value){
					this.dropdownMenu = value;
				}else{
					this.dropdownMenu = '';
				}
			},
			dropdown2(value){
				if(this.dropdownMenu2 != value){
					this.dropdownMenu2 = value;
				}else{
					this.dropdownMenu2 = '';
				}
			},
			goToNotifCenter(){
				this.$router.push('/notification');
			},
			goToPage(notif){
				if(notif.type == 'App\\Notifications\\Laporan'){
					if(!notif.data.tp || notif.data.tp == ""){
						this.$router.push({name: 'laporanCuDetail', params: { id: notif.data.url }});
					}else{
						this.$router.push({name: 'laporanTpDetail', params: { id: notif.data.url }});
					}
				}else if(notif.type == 'App\\Notifications\\DiklatBKCU'){
					this.$router.push({name: 'diklatBKCUDetail', params: { id:  notif.data.url }});
				}
				this.$store.dispatch('notification/markRead',notif.id);
			},
			fetchLaporanCuDraft(){
				if(this.currentUser.can['upload_laporan_cu']){
					axios.get('/api/laporanCuDraft/count')
						.then(response => {
							this.laporanCuDraftCount = response.data.model;
							this.laporanCuDraftCountStat = 'success';
						})
						.catch(error => {
							this.laporanCuDraftCount = error.response;
							this.laporanCuDraftCountStat = 'fail';
						});
				}
			},
			fetchLaporanTpDraft(){
				if(this.currentUser.can['upload_laporan_tp']){
					axios.get('/api/laporanTpDraft/count')
						.then(response => {
							this.laporanTpDraftCount = response.data.model;
							this.laporanTpDraftCountStat = 'success';
						})
						.catch(error => {
							this.laporanTpDraftCount = error.response;
							this.laporanTpDraftCountStat = 'fail';
						});
				}
			},
			fetchTp(){
				if(this.currentUser.id_cu != '0'){
					if(this.modelTpStat != 'success'){
						this.$store.dispatch('tp/getCuHeader',this.currentUser.id_cu);
					}
				}
			},
			fetchCu(){
				if(this.currentUser.id_cu == '0'){
					if(this.modelCuStat != 'success'){
						this.$store.dispatch('cu/getHeader');
					}
				}
			},
			fetchNotif(){
				this.$store.dispatch('notification/get');
			},
			markAllNotifRead(){
				this.$store.dispatch('notification/markAllRead');
			},
			logout() {
				this.modalState = 'loading';

				axios.post('/api/auth/logout')
				.then((response) => {
					this.modalState = 'success';
					this.modalContent = '';
					this.modalTitle = 'Terima kasih telah menggunakan aplikasi SIMO?';
					this.modalButton = 'Kembali Ke Halaman Login';
				})
				.catch((err) => {
					this.modalState = 'fail';
					this.modalContent = this.err;
				});
			},
			momentYear(){
				return moment().year();
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser',
				isTokenExpired: 'isTokenExpired'
			}),
			...mapGetters('notification',{
				notification: 'notification',
				unreadNotification: 'unreadNotification',
				unreadNotificationStat: 'notifStat',
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
			...mapGetters('saran',{
				updateSaranResponse: 'update',
				updateSaranStat: 'updateStat',
			}),
		}
	}
</script>
