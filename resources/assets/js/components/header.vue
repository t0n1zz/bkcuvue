<template>
	<div>
		<!-- first navbar -->
		<div class="navbar navbar-expand-lg navbar-dark bg-indigo">

			<div class="navbar-brand wmin-0 mr-0">
				<router-link :to="{ name: 'dashboard' }" class="d-inline-block">
					<img src="/images/simo.png">
				</router-link>
			</div>

			<div class="d-lg-none">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
					<i class="icon-tree5"></i>
				</button>
			</div>

			<div class="collapse navbar-collapse" id="navbar-mobile">
				<span class="navbar-text ml-lg-3 mr-lg-1">
					<span class="badge bg-info-400">
						<router-link :to="{ name:'changelog' }">
							<span>VERSION {{ clientVersion }}</span>
						</router-link>
					</span>
				</span>

				<span class="navbar-text ml-lg-3 mr-lg-auto">
					<span class="badge bg-success-400">
						<span v-if="currentUser && currentUser.id_cu != 0">CU {{currentUser.cu.name.toUpperCase()}}</span>
						<span v-else-if="currentUser && currentUser.id_cu == 0">PUSKOPCUINA</span>
					</span>
				</span>

				<ul class="navbar-nav">

					<!-- panduan -->
					<li class="nav-item">
						<a href="https://puskopcuina.org/panduan" class="navbar-nav-link " target="_blank">
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
							<span class="d-lg-none ml-2">Pemberitahuan</span>

							<!-- loading -->
							<span class="badge badge-pill ml-auto ml-lg-0" v-if="unreadNotificationStat == 'loading'"><i class="icon-spinner2 spinner font-size-xs"></i></span>
							
							<!-- success -->
							<span class="badge badge-pill bg-warning-400 ml-auto ml-lg-0" v-if="unreadNotificationStat == 'success' && unreadNotification && unreadNotification > 0">{{unreadNotification}}</span>
							
						</a>			

						<div class="dropdown-menu dropdown-menu-right dropdown-content wmin-lg-350" v-if="unreadNotificationStat == 'success'">
							<div class="dropdown-content-header" v-if="unreadNotification > 0">
								<a href="#" class="text-default" @click.prevent="fetchNotif()" v-tooltip:right="'Refresh'"><i class="icon-sync"></i></a>
								<span class="font-weight-semibold">TERDAPAT {{unreadNotification}} PEMBERITAHUAN</span>
								<a href="#" class="text-default" @click.prevent="markAllNotifRead()" v-tooltip:right="'Tandai sudah dibaca'"><i class="icon-checkbox-checked"></i></a>
							</div>
							<div class="dropdown-content-header" v-else>
								<a href="#" class="text-default" @click.prevent="fetchNotif()" v-tooltip:right="'Refresh'"><i class="icon-sync"></i></a>
								<span class="font-weight-semibold">TIDAK ADA PEMBERITAHUAN <span v-if="notification && notification.length> 0">BARU</span></span>
								<a href="#" class="text-default" disabled><i class="icon-checkbox-checked"></i></a>
							</div>

							<div class="dropdown-content-body dropdown-scrollable">
								<ul class="media-list" v-if="notification && notification.length > 0">
									<li class="media" v-for="(notif, index) in notification" :key="index">

										<div class="media-body" @click.prevent="goToPage(notif)" style="cursor:pointer;">
											<div class="media-title pb-1" :class="{'text-muted' : notif.read_at != null}">
												<span class="font-size-sm"> 
													<span v-if="notif.data.tipe == 'laporanCu' || notif.data.tipe == 'laporanTp' "><i class="icon-stats-bars2"></i> Laporan Statistik CU</span>
													<span v-else-if="notif.data.tipe == 'diklatBKCU'"><i class="icon-graduation2"></i> Diklat PUSKOPCUINA</span>
													<span v-else-if="notif.data.tipe == 'pertemuanBKCU'"><i class="icon-ungroup"></i> Pertemuan PUSKOPCUINA</span>
													<span v-else-if="notif.data.tipe == 'selfAssesment'"><i class="icon-reading"></i> Self Assesment ACCESS</span>
													<span v-else-if="notif.data.tipe == 'monitoring'"><i class="icon-collaboration"></i> Monitoring</span>
													<span v-else-if="notif.data.tipe == 'klaimJALINAN'"><i class="icon-accessibility2"></i> Bantuan Solidaritas Jalinan</span>
													<span v-else><i class="icon-bubble-notification"></i> Notifikasi</span>
												</span>
												<span class="float-right font-size-sm">{{notif.created_at | relativeHour}}</span>
											</div>
											<span :class="{'text-muted' : notif.read_at != null}">{{notif.data.message}}</span>
											<hr v-if="index + 1 < notification.length" class="mb-0 mt-1"/>
										</div>

									</li>
								</ul>
							</div>

							<div class="dropdown-content-footer text-center p-0"  v-if="notification && notification.length > 0">
								<router-link :to="{ name: 'notification'}" class="bg-light text-grey w-100 py-2">
									LIHAT SEMUA PEMBERITAHUAN
								</router-link>
							</div>
						</div>

						<div class="dropdown-menu dropdown-menu-right dropdown-content wmin-lg-350" v-if="unreadNotificationStat == 'loading'">
							<div class="dropdown-content-header">
								<span class="font-weight-semibold">Mohon tunggu...</span>
							</div>
						</div>		
					</li>

					<!-- user -->
					<li class="nav-item dropdown dropdown-user">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown" v-if="currentUser.aktivis == null">
							<img :src="'/images/user/' + currentUser.gambar + '.jpg'" alt="user image" class="rounded-circle" v-if="currentUser && currentUser.gambar" width="36" height="36">
							<img src="/images/no_image_man.jpg" alt="user image" class="rounded-circle" width="36" height="36" v-else>
							<span>{{ currentUser ? currentUser.name : "" }}</span>
						</a>
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown" v-else>
							<img :src="'/images/aktivis/' + currentUser.aktivis.gambar + '.jpg'" alt="user image" class="rounded-circle" v-if="currentUser && currentUser.aktivis.gambar" width="36" height="36">
							<img src="/images/no_image_man.jpg" alt="user image" class="rounded-circle" width="36" height="36" v-else>
							<span>{{ currentUser.aktivis ? currentUser.aktivis.name : "" }}</span>
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
		<div class="navbar navbar-expand-lg navbar-light">
			<div class="text-center d-lg-none w-100">
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
						<router-link :to="{ name: 'dashboard' }" class="navbar-nav-link active" exact>
							<i class="icon-screen3"></i>
							<span class="d-lg-none ml-2"> Dashboard</span>
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
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'tambahPublikasi'}">
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
							<div class="dropdown-submenu" v-if="currentUser.can['index_artikel'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu2 == 'artikel'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('artikel')">
									<i class="icon-magazine"></i> Artikel
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'artikel'}">
									
									<router-link :to="{ name: 'artikelCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>
									<router-link :to="{ name: 'artikelCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser">
										PUSKOPCUINA
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
							<div class="dropdown-submenu" v-if="currentUser.can['index_artikel_kategori'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu2 == 'kategoriArtikel'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('kategoriArtikel')">
									<i class="icon-grid6"></i> Kategori Artikel
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'kategoriArtikel'}">

									<router-link :to="{ name: 'artikelKategoriCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>
									<router-link :to="{ name: 'artikelKategoriCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser">
										PUSKOPCUINA
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
							<div class="dropdown-submenu" v-if="currentUser.can['index_artikel_penulis'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu2 == 'penulisArtikel'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('penulisArtikel')">
									<i class="icon-pencil6"></i> Penulis Artikel
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'penulisArtikel'}">

									<router-link :to="{ name: 'artikelPenulisCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>
									<router-link :to="{ name: 'artikelPenulisCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact>
										PUSKOPCUINA
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
							<div class="dropdown-submenu" v-if="currentUser.can['index_pengumuman'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu2 == 'pengumuman'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('pengumuman')">
									<i class="icon-megaphone"></i> Pengumuman
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'pengumuman'}">

									<router-link :to="{ name: 'pengumumanCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>
									<router-link :to="{ name: 'pengumumanCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact>
										PUSKOPCUINA
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
					<li class="nav-item dropdown">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-calendar3 mr-2"></i>
							Kegiatan
						</a>

						<div class="dropdown-menu">
							
							<!-- tambah -->
							<div class="dropdown-submenu" v-if="currentUser && currentUser.can['create_diklat_bkcu'] || currentUser.can['create_voting'] || currentUser.can['create_tempat'] ">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('tambahKegiatan')">
									<i class="icon-plus22"></i> Tambah
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'tambahKegiatan'}">
									<!-- tambah diklat bkcu -->
									<router-link :to="{ name:'kegiatanBKCUCreate', params:{tipe: 'diklat_bkcu'}  }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0">
										Diklat PUSKOPCUINA
									</router-link>

									<!-- tambah pertemuan bkcu -->
									<router-link :to="{ name:'kegiatanBKCUCreate', params:{tipe: 'pertemuan_bkcu'} }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0">
										Pertemuan PUSKOPCUINA
									</router-link>

									<!-- tambah voting -->
									<router-link :to="{ name:'votingCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_voting']">
										Voting
									</router-link>

									<!-- tambah tempat -->
									<router-link :to="{ name:'tempatCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['create_tempat']">
										Tempat
									</router-link>
								</div>
							</div>		

							<!-- divider -->
							<div class="dropdown-divider" v-if="currentUser.can['create_diklat_bkcu'] || currentUser.can['create_pertemuan_bkcu'] || currentUser.can['create_tempat']"></div> 

							<!-- diklat bkcu -->
							<router-link :to="{ name: 'kegiatanBKCU', params:{tipe: 'diklat_bkcu', periode: momentYear() }}" class="dropdown-item" active-class="active" exact>
								<i class="icon-graduation2"></i> Diklat PUSKOPCUINA
							</router-link>

							<!-- pertemuan bkcu -->
							<router-link :to="{ name: 'kegiatanBKCU', params:{tipe: 'pertemuan_bkcu', periode: momentYear() }}" class="dropdown-item" active-class="active" exact>
								<i class="icon-ungroup"></i> Pertemuan PUSKOPCUINA
							</router-link>

							<router-link :to="{ name: 'kegiatanBKCUJalan' }" class="dropdown-item" active-class="active" exact>
								<i class="icon-feed"></i> Kegiatan Berjalan
							</router-link>
							
							<!-- divider -->
							<div class="dropdown-divider" v-if="currentUser.can['create_diklat_bkcu']"></div>

							<router-link :to="{ name: 'kodeKegiatan' }" class="dropdown-item" active-class="active" v-if="currentUser.can['create_diklat_bkcu']" exact>
								<i class="icon-pencil-ruler"></i> Kode Kegiatan
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider" v-if="currentUser.can['create_diklat_bkcu']"></div>

							<router-link :to="{ name: 'sertifikatKegiatan' }" class="dropdown-item" active-class="active" v-if="currentUser.can['create_diklat_bkcu']" exact>
								<i class="icon-clipboard6"></i> Sertifikat Kegiatan
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider" v-if="currentUser.can['index_tempat'] || currentUser.can['index_voting']"></div> 

							<!-- voting -->
							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_voting'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu2 == 'voting'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('voting')">
									<i class="icon-point-up"></i> Voting
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'voting'}">
									
									<router-link :to="{ name: 'voting', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>
									<router-link :to="{ name: 'voting', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser">
										PUSKOPCUINA
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="(cu, index) in modelCu">
										<router-link :to="{ name: 'voting', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu" :key="index">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'voting', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_voting'] && currentUser.id_cu != 0">
								<i class="icon-point-up"></i> Voting
							</router-link>

							<!-- tempat -->
							<router-link :to="{ name: 'tempat' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 &&  currentUser.can['index_tempat']">
								<i class="icon-location4"></i> Tempat
							</router-link>

						</div>
					</li>

					<!-- anggota cu -->
					<li class="nav-item dropdown" v-if="currentUser && currentUser.can['create_anggota_cu'] || currentUser.can['create_jalinan_klaim'] || currentUser.can['index_anggota_cu'] || currentUser.can['index_saldo'] || currentUser.can['index_jalinan_klaim'] || currentUser.can['index_jalinan_iuran']">
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
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'tambahAnggotaCU'}">
									<!-- tambah anggota cu -->
									<router-link :to="{ name:'anggotaCuCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_anggota_cu']">
										Anggota CU
									</router-link>

									<!-- tambah bantuan solidaritas jalinan -->
									<router-link :to="{ name:'jalinanKlaimCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_jalinan_klaim']">
										Klaim Jalinan
									</router-link>

									<!-- tambah bantuan solidaritas jalinan -->
									<router-link :to="{ name:'jalinanIuranCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_jalinan_iuran']">
										Iuran Jalinan
									</router-link>
								</div>
							</div>		

							<!-- divider -->
							<div class="dropdown-divider" v-if="currentUser.can['create_anggota_cu']"></div> 

							<!-- anggota cu -->
							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_anggota_cu'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu2 == 'anggota_cu'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('anggota_cu')">
									<i class="icon-man-woman"></i> Anggota CU
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'anggota_cu'}">

									<router-link :to="{ name: 'anggotaCuCu', params:{cu:'semua', tp:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="(cu,index) in modelCu">
										<router-link :to="{ name: 'anggotaCuCu', params:{cu: cu.id, tp: 'semua'} }" class="dropdown-item" active-class="active" exact v-if="cu" :key="index">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'anggotaCuCu', params:{cu: currentUser.id_cu, tp: 'semua'} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_anggota_cu'] && currentUser.id_cu != 0">
								<i class="icon-man-woman"></i> Anggota CU
							</router-link>

							<!-- saldo  -->
							<!-- <router-link :to="{ name: 'saldo'}" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_saldo']">
								<i class="icon-wallet"></i> Simpanan & Pinjaman
							</router-link> -->

							<!-- divider -->
							<div class="dropdown-divider"></div> 

							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_jalinan_klaim'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu2 == 'jalinan_klaim'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('jalinan_klaim')">
									<i class="icon-accessibility2"></i> Bantuan Solidaritas Jalinan
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'jalinan_klaim'}">

									<router-link :to="{ name: 'jalinanKlaimCu', params:{cu:'semua', tp:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="(cu, index) in modelCu">
										<router-link :to="{ name: 'jalinanKlaimCu', params:{cu: cu.id, tp:'semua'} }" class="dropdown-item" active-class="active" exact v-if="cu" :key="index">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'jalinanKlaimCu', params:{cu: currentUser.id_cu, tp:'semua'} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_jalinan_klaim']  && currentUser.id_cu != 0">
								<i class="icon-accessibility2"></i> Bantuan Solidaritas Jalinan
							</router-link>

							<!-- if bkcu account -->
							<router-link :to="{ name: 'jalinanCair' }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['pencairan_jalinan_klaim']  && currentUser.id_cu == 0">
								<i class="icon-square-down"></i> Pencairan Jalinan
							</router-link>

							<div class="dropdown-submenu" v-if="currentUser.can['laporan_jalinan_klaim']" :class="{'show' : dropdownMenu2 == 'laporan_jalinan_klaim'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('laporan_jalinan_klaim')">
									<i class="icon-archive"></i> Laporan Bantuan Solidaritas Jalinan
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'laporan_jalinan_klaim'}">

									<router-link :to="{ name: 'jalinanLaporanKlaimCu' }" v-if="currentUser.id_cu == 0" class="dropdown-item" active-class="active" exact >
										Berdasarkan CU
									</router-link>

									<router-link :to="{ name: 'jalinanLaporanKlaimPenyebab' }" class="dropdown-item" active-class="active" exact >
										Berdasarkan Penyebab
									</router-link>

									<router-link :to="{ name: 'jalinanLaporanKlaimUsia' }" class="dropdown-item" active-class="active" exact >
										Berdasarkan Usia Anggota
									</router-link>

									<router-link :to="{ name: 'jalinanLaporanKlaimLama' }" class="dropdown-item" active-class="active" exact >
										Berdasarkan Lama Menjadi Anggota
									</router-link>

								</div>
							</div>

							<!-- divider -->
							<div class="dropdown-divider" v-if="currentUser.can['index_jalinan_iuran']"></div> 

							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_jalinan_iuran'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu2 == 'jalinan_iuran'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('jalinan_iuran')">
									<i class="icon-clipboard6"></i> Setoran Solidaritas Jalinan
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'jalinan_iuran'}">

									<router-link :to="{ name: 'jalinanIuranCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="(cu, index) in modelCu">
										<router-link :to="{ name: 'jalinanIuranCu', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu" :key="index">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'jalinanIuranCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_jalinan_iuran']  && currentUser.id_cu != 0">
								<i class="icon-accessibility2"></i> Setoran Solidaritas Jalinan
							</router-link>
							
						</div>
					</li>

					<!-- organisasi -->
					<li class="nav-item dropdown" v-if="currentUser && currentUser.can['create_cu'] || currentUser.can['create_tp'] || currentUser.can['create_aktivis'] || currentUser.can['create_produk_cu'] || currentUser.can['create_mitra_orang'] ||  currentUser.can['create_mitra_lembaga'] || currentUser.can['create_pemilihan'] || currentUser.can['create_surat'] || currentUser.can['index_cu'] || currentUser.can['index_tp'] || currentUser.can['index_aktivis'] || currentUser.can['index_produk_cu'] || currentUser.can['index_mitra_orang'] || currentUser.can['index_pemilihan'] || currentUser.can['index_surat']">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-library2 mr-2"></i>
							Organisasi
						</a>

						<div class="dropdown-menu">

							<!-- tambah -->
							<div class="dropdown-submenu" v-if="currentUser && currentUser.can['create_cu'] || currentUser.can['create_tp'] || currentUser.can['create_aktivis'] || currentUser.can['create_produk_cu'] || currentUser.can['create_mitra_orang'] ||  currentUser.can['create_mitra_lembaga'] ||  currentUser.can['create_surat']">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('tambahOrganisasi')">
									<i class="icon-plus22"></i> Tambah
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'tambahOrganisasi'}">

										<!-- tambah cu -->
										<router-link :to="{ name:'cuCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['create_cu']">
											CU
										</router-link>

										<!-- tambah tpcu -->
										<router-link :to="{ name:'tpCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_tp']">
											TP/KP
										</router-link>

										<!-- tambah produk -->
										<router-link :to="{ name:'produkCuCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_produk_cu']">
											Produk & Pelayanan
										</router-link>

										<!-- tambah aktivis -->
										<router-link :to="{ name:'aktivisCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_aktivis']">
											Aktivis
										</router-link>

										<!-- tambah pemilihan -->
										<router-link :to="{ name:'pemilihanCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_pemilihan']">
											Pemilihan
										</router-link>

										<!-- tambah surat keluar -->
										<router-link :to="{ name:'suratCreate', params: {tipe:'surat-keluar'} }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_surat']">
											Surat Keluar
										</router-link>

										<!-- tambah dokumen -->
										<router-link :to="{ name:'dokumenCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_dokumen']">
											Dokumen
										</router-link>

										<!-- tambah dokumen kategori -->
										<router-link :to="{ name:'dokumenKategoriCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_dokumen_kategori']">
											Dokumen Kategori
										</router-link>

										<!-- tambah aset tetap -->
										<router-link :to="{ name:'asetTetapCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_aset_tetap']">
											Aset Tetap
										</router-link>

										<!-- tambah jenis aset tetap -->
										<router-link :to="{ name:'asetTetapJenisCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_aset_tetap_jenis']">
											Jenis Aset Tetap
										</router-link>

										<!-- tambah lokasi aset tetap -->
										<router-link :to="{ name:'asetTetapLokasiCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_aset_tetap_lokasi']">
											Lokasi Aset Tetap
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
							<div class="dropdown-submenu" v-if="currentUser.can['index_tp'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu2 == 'tp'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('tp')">
									<i class="icon-home9"></i> TP/KP
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'tp'}">

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
							<div class="dropdown-submenu" v-if="currentUser.can['index_produk_cu'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu2 == 'produkCu'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('produkCu')">
									<i class="icon-list3"></i> Produk & Pelayanan
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'produkCu'}">

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
							<div class="dropdown-submenu" v-if="currentUser.can['index_aktivis']" :class="{'show' : dropdownMenu2 == 'aktivis'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('aktivis')">
									<i class="icon-user-tie"></i> Aktivis
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'aktivis'}">

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'pengurus'} }" class="dropdown-item" active-class="active" exact >
										Pengurus
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'pengawas'} }" class="dropdown-item" active-class="active" exact >
										Pengawas
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'komite'} }" class="dropdown-item" active-class="active" exact >
										Komite
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'penasihat'} }" class="dropdown-item" active-class="active" exact >
										Penasihat
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'manajemen'} }" class="dropdown-item" active-class="active" exact >
										Manajemen
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'kolektor'} }" class="dropdown-item" active-class="active" exact >
										Kolektor
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'kelompok_inti'} }" class="dropdown-item" active-class="active" exact >
										Kelompok Inti
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'vendor_smartcu'} }" class="dropdown-item" active-class="active" exact >
										Vendor sMartCU
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 
								
									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'senior_manajer'} }" class="dropdown-item" active-class="active" exact >
										Senior Manajer
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'manajer'} }" class="dropdown-item" active-class="active" exact >
										Manajer
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'supervisor'} }" class="dropdown-item" active-class="active" exact >
										Supervisor
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'staf'} }" class="dropdown-item" active-class="active" exact >
										Staf
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'kontrak'} }" class="dropdown-item" active-class="active" exact >
										Kontrak
									</router-link>

									<router-link :to="{ name: 'aktivisCu', params:{cu: currentUser.id_cu, tingkat: 'supporting_unit'} }" class="dropdown-item" active-class="active" exact >
										Supporting Unit
									</router-link>

								</div>
							</div>

							<!-- pemilihan -->
							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_pemilihan'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu2 == 'pemilihan'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('pemilihan')">
									<i class="icon-quill4"></i> Pemilihan
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'pemilihan'}">
									
									<router-link :to="{ name: 'pemilihan', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>
									<router-link :to="{ name: 'pemilihan', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser">
										PUSKOPCUINA
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="(cu, index) in modelCu">
										<router-link :to="{ name: 'pemilihan', params:{cu: cu.id} }" class="dropdown-item" active-class="active" exact v-if="cu" :key="index">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'pemilihan', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_pemilihan'] && currentUser.id_cu != 0">
								<i class="icon-quill4"></i> Pemilihan
							</router-link>
						
							<!-- divider -->
							<div class="dropdown-divider" v-if="currentUser.can['index_aset_tetap'] || currentUser.can['index_aset_tetap_jenis'] || currentUser.can['index_aset_tetap_lokasi'] || currentUser.can['index_dokumen_kategori'] || currentUser.can['index_surat'] || currentUser.can['index_surat_masuk']"></div> 

							<!-- surat -->
							<div class="dropdown-submenu" :class="{'show' : dropdownMenu2 == 'surat'}" v-if="currentUser.can['index_surat'] || currentUser.can['index_surat_masuk']">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('surat')">
									<i class="icon-envelop2"></i> Surat
								</a>

								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'surat'}">

									<!-- surat keluar -->
									<router-link :to="{ name: 'suratCu', params:{cu: currentUser.id_cu, tipe: 'semua', periode: momentYear() } }" class="dropdown-item" active-class="active" v-if="currentUser && currentUser.can['index_surat']" exact>
										Surat Keluar
									</router-link>

									<!-- surat keluar -->
									<router-link :to="{ name: 'suratMasukCu', params:{cu: currentUser.id_cu, periode: momentYear() } }" class="dropdown-item" active-class="active" v-if="currentUser && currentUser.can['index_surat']" exact>
										Surat Masuk
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider" v-if="currentUser.can['index_surat']"></div> 

									<!-- kategori surat -->
									<router-link :to="{ name: 'suratKategoriCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_surat']">
										Kategori Surat Keluar
									</router-link>

									<!-- tipe surat -->
									<router-link :to="{ name: 'suratKodeCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_surat']">
										Tipe Surat Keluar
									</router-link>

								</div>
							</div>	


							<!-- arsip -->
							<div class="dropdown-submenu" :class="{'show' : dropdownMenu2 == 'arsip'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('arsip')">
									<i class="icon-drawer3"></i> Arsip
								</a>

								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'arsip'}">

									<router-link :to="{ name: 'dokumenGerakanPublik', params:{cu: 'semua'} }" class="dropdown-item" active-class="active" exact>
										Dokumen GERAKAN & PUBLIK
									</router-link>

									<router-link :to="{ name: 'dokumenCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.id_cu != 0">
										Dokumen 
									</router-link>

									<router-link :to="{ name: 'dokumenCu', params:{cu: 'semua'} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.id_cu == 0">
										Dokumen
									</router-link>

									<router-link :to="{ name: 'dokumenKategoriCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_dokumen_kategori'] && currentUser.id_cu != 0">
										Kategori Dokumen
									</router-link>

									<router-link :to="{ name: 'dokumenKategoriCu', params:{cu: 'semua'} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_dokumen_kategori'] && currentUser.id_cu == 0">
										Kategori Dokumen
									</router-link>

									<div class="dropdown-divider" v-if="currentUser.can['index_aset_tetap'] || currentUser.can['index_aset_tetap_jenis'] || currentUser.can['index_aset_tetap_lokasi']"></div>

									<router-link :to="{ name: 'asetTetap'}" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_aset_tetap'] && currentUser.id_cu == 0">
										Aset Tetap
									</router-link>

									<router-link :to="{ name: 'asetTetapJenis'}" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_aset_tetap_jenis'] && currentUser.id_cu == 0">
										Jenis Aset Tetap
									</router-link>

									<router-link :to="{ name: 'asetTetapKelompok'}" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_aset_tetap_jenis'] && currentUser.id_cu == 0">
										Kelompok Aset Tetap
									</router-link>

									<router-link :to="{ name: 'asetTetapGolongan'}" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_aset_tetap_jenis'] && currentUser.id_cu == 0">
										Golongan Aset Tetap
									</router-link>

									<router-link :to="{ name: 'asetTetapLokasi'}" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_aset_tetap_lokasi'] && currentUser.id_cu == 0">
										Lokasi Aset Tetap
									</router-link>

								</div>
							</div>	

							
							<!-- divider -->
							<div class="dropdown-divider" v-if="currentUser.can['index_mitra_orang'] || currentUser.can['index_mitra_lembaga']"></div> 
							

							<div class="dropdown-submenu" v-if="currentUser.can['index_mitra_orang'] || currentUser.can['index_mitra_lembaga']" :class="{'show' : dropdownMenu2 == 'mitra'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('mitra')">
									<i class="icon-briefcase"></i> Mitra
								</a>

								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'mitra'}">
	
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

					<!-- tata kelola -->
					<li class="nav-item dropdown" v-if="currentUser && currentUser.can['create_laporan_cu'] || currentUser.can['create_assesment_access'] || currentUser.can['create_monitoring'] || currentUser.can['index_laporan_cu'] || currentUser.can['index_assesment_access'] || currentUser.can['index_monitoring']">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-microscope mr-2"></i>
							Tata Kelola
						</a>

						<div class="dropdown-menu">

							<!-- tambah -->
							<div class="dropdown-submenu" v-if="currentUser && currentUser.can['create_laporan_cu'] || currentUser.can['create_assesment_access']">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('tambahKeuangan')">
									<i class="icon-plus22"></i> Tambah
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'tambahKeuangan'}">
									<!-- tambah laporan -->
									<router-link :to="{ name:'laporanCuCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_laporan_cu']">
										Laporan Statistik CU
									</router-link>
									<!-- tambah assesment -->
									<router-link :to="{ name:'assesmentAccessCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_assesment_access']">
										Self Assesment ACCESS
									</router-link>
									<!-- tambah assesment -->
									<router-link :to="{ name:'monitoringCreate' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['create_monitoring']">
										Monitoring
									</router-link>
								</div>
							</div>		

							<!-- divider -->
							<div class="dropdown-divider"></div> 

							<router-link :to="{ name: 'laporanGerakan' }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_laporan_cu']">
								<i class="icon-stats-bars"></i> Laporan Statistik Gerakan
							</router-link>

							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_laporan_cu'] && currentUser.id_cu == '0'" :class="{'show' : dropdownMenu2 == 'laporanCu'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('laporanCu')">
									<i class="icon-stats-bars2"></i> Laporan Statistik CU
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'laporanCu'}">

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
							<div class="dropdown-submenu" v-if="currentUser.can['index_laporan_cu'] && currentUser.id_cu != '0'" :class="{'show' : dropdownMenu2 == 'laporanTp'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('laporanTp')">
									<i class="icon-stats-growth"></i> Laporan Statistik CU
								</a>

								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'laporanTp'}">
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

							<!-- divider -->
							<div class="dropdown-divider" v-if="currentUser.can['index_assesment_access'] || currentUser.can['index_monitoring']"></div> 

							<!-- assesment access -->
							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_assesment_access'] && currentUser.id_cu == '0'" :class="{'show' : dropdownMenu2 == 'assesmentAccess'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('assesmentAccess')">
									<i class="icon-reading"></i> Self Assesment ACCESS
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'assesmentAccess'}">

									<router-link :to="{ name: 'assesmentAccessCu',params: { cu: 'semua' } }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_assesment_access'] && currentUser.id_cu == '0'">
										 Semua CU
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="(cu, index) in modelCu">
										<router-link :to="{ name: 'assesmentAccessCu',params: { cu: cu.id } }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_assesment_access'] && currentUser.id_cu == '0' && cu" :key="index">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'assesmentAccessCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_assesment_access'] && currentUser.id_cu != 0">
								<i class="icon-reading"></i> Self Assesment ACCESS
							</router-link>

							<!--monitoring -->
							<!-- if bkcu account -->
							<div class="dropdown-submenu" v-if="currentUser.can['index_monitoring'] && currentUser.id_cu == '0'" :class="{'show' : dropdownMenu2 == 'monitoring'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('monitoring')">
									<i class="icon-collaboration"></i> Monitoring
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'monitoring'}">

									<router-link :to="{ name: 'monitoringCu',params: { cu: 'semua', tp: 'semua' } }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_monitoring'] && currentUser.id_cu == '0'">
										 Semua CU
									</router-link>

									<!-- divider -->
									<div class="dropdown-divider"></div> 

									<template v-for="(cu, index) in modelCu">
										<router-link :to="{ name: 'monitoringCu',params: { cu: cu.id, tp: 'semua' } }" class="dropdown-item" active-class="active" exact v-if="currentUser.can['index_monitoring'] && currentUser.id_cu == '0' && cu" :key="index">
											CU {{ cu.name }}
										</router-link>
									</template>

								</div>
							</div>

							<!-- if cu account -->
							<router-link :to="{ name: 'monitoringCu', params:{cu: currentUser.id_cu, tp: 'semua'} }" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_monitoring'] && currentUser.id_cu != 0">
								<i class="icon-collaboration"></i> Monitoring
							</router-link>

							<!-- divider -->
							<div class="dropdown-divider" v-if="currentUser.can['index_coa']"></div> 

							<!-- coa -->
							<router-link :to="{ name: 'coa'}" class="dropdown-item" active-class="active" exact v-if="currentUser && currentUser.can['index_coa']">
								<i class="icon-notebook"></i> CoA
							</router-link>

						</div>
					</li>

				</ul>
				
				<!-- navbar right -->
				<ul class="navbar-nav ml-lg-auto">

					<!-- pengaturan -->
					<li class="nav-item dropdown" v-if="currentUser && currentUser.can['create_user'] || currentUser.can['index_user'] ">
						<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="icon-cog3"></i>
							<span class="d-lg-none ml-2">Pengaturan</span>
						</a>
						
						<div class="dropdown-menu dropdown-menu-right">
							
							<!-- tambah -->
							<div class="dropdown-submenu dropdown-submenu-left" v-if="currentUser && currentUser.can['create_user']">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('tambahPengaturan')">
									<i class="icon-plus22"></i> Tambah
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'tambahPengaturan'}">
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
							<div class="dropdown-submenu dropdown-submenu-left" v-if="currentUser.can['index_user'] && currentUser.id_cu == 0" :class="{'show' : dropdownMenu2 == 'user'}">
								<a href="#" class="dropdown-item dropdown-toggle" @click.stop="dropdown('user')">
									<i class="icon-users"></i> User
								</a>
								<div class="dropdown-menu dropdown-scrollable" :class="{'show' : dropdownMenu2 == 'user'}">

									<router-link :to="{ name: 'userCu', params:{cu:'semua'} }" class="dropdown-item" active-class="active" exact >
										Semua CU
									</router-link>
									<router-link :to="{ name: 'userCu', params:{cu: currentUser.id_cu} }" class="dropdown-item" active-class="active" exact v-if="currentUser">
										PUSKOPCUINA
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

							<router-link :to="{ name: 'activityLog' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['index_error_log']">
								<i class="icon-eye2"></i> Activity Log
							</router-link>

							<router-link :to="{ name: 'errorLog' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0 && currentUser.can['index_error_log']">
								<i class="icon-cancel-square2"></i> Error Log
							</router-link>

							<router-link :to="{ name: 'dataAnggotaUpload' }" class="dropdown-item" active-class="active" exact v-if="currentUser.id_cu == 0">
								<i class="icon-file-upload2"></i> Import ESCETE
							</router-link>

						</div>

					</li>
				</ul>
			</div>
		</div>

		<!-- version notice -->
		<version-alert :clientVersion="clientVersion"></version-alert>

		<!-- change password notice -->
		<div class="page-content pt-2 pb-0" v-if="!currentUser.isChangePassword">
			<div class="content-wrapper">
				<div class="content">
					<div class="alert alert-warning alert-styled-left mb-0  cursor-pointer"  @click.prevent="goToProfil()">
						<span class="font-weight-semibold">Perhatian!</span> Demi meningkatkan keamanan dari SIMO dan memperkenalkan cara pembuatan password yang lebih kuat dan tidak mudah ditebak, maka diharapkan untuk mengganti password user anda sekarang dengan menuju ke halaman profil dan mengikuti petunjuk penggantian password.
					</div>
				</div>
			</div>
		</div>	

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
	import { PusherAuth } from '../helpers/pusherAuth.js';
	import Echo from 'laravel-echo';
	import Pusher from "pusher-js";
	 
	export default {
		components: {
			formSaran,
			appModal,
			formLogin,
			versionAlert
		},
		data(){
			return{
				clientVersion: '3.4.5',
				dropdownMenu1: '',
				dropdownMenu2: '',
				state: '',
				timer: '',
				notifData:{},
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
		},
		mounted(){
			this.listenNotif();
		},
		watch: {
			'$route' (to, from){
				this.fetchTp();
				this.fetchCu();
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
			listenNotif(){
 				PusherAuth();
 				if(JSON.parse(localStorage.getItem('user')).token) {
 					window.Echo.private(`App.User.`+this.currentUser.id)
 					.notification((notification) => {
						let data = {};
						let tempUnread = this.unreadNotification + 1;

						data.user = notification.user_id;
						data.tipe = notification.tipe;
						data.url = notification.url;
						data.message = notification.message;

						this.notifData.id = notification.id;
						this.notifData.read_at = null;
						this.notifData.notifiable_type = 'App\\User';
						this.notifData.notifiable_id = this.currentUser.id;
						this.notifData.data = data;
						this.notifData.created_at = notification.created_at;
						
						this.$store.commit('notification/pushNotif', this.notifData);
						this.$store.commit('notification/setUnreadNotification', tempUnread);

						if(notification.tipe=='NotifUpload'){
							let data ={}
							data.message = 'Data Berhasil Diupload' 
							this.$store.commit('anggotaCuImportEscete/setUpdateStat', 'success');
							this.$store.commit('anggotaCuImportEscete/setUpdate', data);
						}
						if(notification.tipe == 'NotifSimpanDraft'){
							data.message = 'Draft Berhasil Disimpan';
							this.$store.commit('anggotaCuImportEscete/setUpdateStat', 'success');
						}
						// add ui
 					});
 				}
 			},
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
				// if(this.isFromLogin){
					if(this.dropdownMenu2 != value){
						this.dropdownMenu2 = value;
					}else{
						this.dropdownMenu2 = '';
					}
				// }
			},
			goToProfil(){
				this.$router.push({name: 'profile', params: {id: this.currentUser.id}});
			},
			goToNotifCenter(){
				this.$router.push('/notification');
			},
			goToPage(notif){
				if(notif.data.tipe == 'laporanCu'){
						this.$router.push({name: 'laporanCuDetail', params: { id: notif.data.url }});
				}else if(notif.data.tipe == 'laporanTp'){
						this.$router.push({name: 'laporanTpDetail', params: { id: notif.data.url }});
				}else if(notif.data.tipe == 'diklatBKCU'){
					this.$router.push({name: 'kegiatanBKCUDetail', params: { id:  notif.data.url }});
				}else if(notif.data.tipe == 'pertemuanBKCU'){
					this.$router.push({name: 'kegiatanBKCUDetail', params: { id:  notif.data.url }});
				}else if(notif.data.tipe == 'monitoring'){
					this.$router.push({name: 'monitoringDetail', params: { id:  notif.data.url }});
				}else if(notif.data.tipe == 'selfAssesment'){
					this.$router.push({name: 'assesmentAccessCu', params: { cu:  notif.data.url }});
				}else if(notif.data.tipe == 'klaimJALINAN'){
					this.$router.push({name: 'jalinanKlaimCu', params: { cu:  notif.data.url, tp:'semua' }});
				}
				this.$store.dispatch('notification/markRead',notif.id);
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
			fetchKegiatanBerjalan(){
				var query = {
					order_column: "mulai",
					order_direction: "asc",
					filter_match: "and",
					limit: 6,
					page: 1
				};
				if(this.modelKegiatanStat != 'success'){
					this.$store.dispatch('kegiatanBKCU/indexJalanHeader', query);
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
				isTokenExpired: 'isTokenExpired',
				isFromLogin: 'isFromLogin',
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
			...mapGetters('kegiatanBKCU',{
				modelKegiatan: 'dataJalan',
				modelKegiatanStat: 'dataJalanStat',
			}),
			...mapGetters('saran',{
				updateSaranResponse: 'update',
				updateSaranStat: 'updateStat',
			}),
		}
	}
</script>
