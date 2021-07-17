<template>
	<div>
		<!-- page-header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="level" :level2Title="level2Title"
		 :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<div class="row">
						
						<!-- title -->
						<div class="col-md-12">
							<div class="card">

								<template v-if="item.tipe == 'diklat_bkcu'">
									<img :src="'/images/diklat/' + item.gambar + '.jpg'" class="img-fluid wmin-sm" v-if="item.gambar">
								</template>
								<template v-else-if="item.tipe == 'pertemuan_bkcu'">
									<img :src="'/images/pertemuan/' + item.gambar + '.jpg'" class="img-fluid wmin-sm" v-if="item.gambar">
								</template>

								<div class="card-header">
									<h5 class="card-title">{{ item.name }}</h5>	
								</div>
								
							</div>
						</div>

						<!-- sidebar -->
						<div class="col-lg-3 col-md-4 order-md-12">

							<!-- action -->
							<div class="card">
								<div class="card-header bg-transparent header-elements-inline">
									<span class="text-uppercase font-size-sm font-weight-semibold">Menu</span>
									<div class="header-elements">
										<div class="list-icons">
											<a class="list-icons-item" data-action="collapse"></a>
										</div>
									</div>
								</div>
								<div class="card-body">

									<!-- diklat bkcu -->
									<template v-if="item.tipe == 'diklat_bkcu'">
											<!-- tambah materi -->
										<button class="btn btn-light btn-block mb-2" @click.prevent="modalOpen('tambahMateri')" v-if="tipeUser == 'panitia'">
											<i class="icon-plus22"></i> Tambah Materi
										</button>

										<!-- ubah diklat -->
										<button class="btn btn-light btn-block mb-2" @click.prevent="ubahKegiatan(item.id)" v-if="tipeUser == 'panitia'">
											<i class="icon-pencil5"></i> Ubah Diklat
										</button>

										<!-- status -->
										<button class="btn btn-light btn-block mb-2" @click.prevent="modalOpen('statusPertemuan')" v-if="tipeUser == 'panitia'">
											<i class="icon-calendar5"></i> Status Diklat
										</button>

										<!-- status -->
										<button class="btn btn-light btn-block mb-2" @click.prevent="modalOpen('hapusPertemuan')" v-if="tipeUser == 'panitia'">
											<i class="icon-bin2"></i> Hapus Diklat
										</button>

										<!-- daftar -->
										
										<button class="btn bg-warning-400 btn-block mb-2" @click.prevent="modalOpen('tambahPeserta')" v-if="currentUser.id_cu == 0">
											<i class="icon-people"></i> Daftar Peserta Diklat
										</button>

										<!-- daftar -->
										<button class="btn bg-warning-400 btn-block mb-2" @click.prevent="modalOpen('tambahPeserta')" v-else-if="currentUser.can && currentUser.can['index_diklat_bkcu'] && currentUser.id_cu != 0 && item.status == 2">
											<i class="icon-people"></i> Daftar Peserta Diklat
										</button>
									</template>

									<!-- pertemuan bkcu -->
									<template v-else-if="item.tipe == 'pertemuan_bkcu'">
										<!-- tambah materi -->
										<button class="btn btn-light btn-block mb-2" @click.prevent="modalOpen('tambahMateri')" v-if="tipeUser == 'panitia'">
											<i class="icon-plus22"></i> Tambah Materi
										</button>

										<!-- ubah pertemuan -->
										<button class="btn btn-light btn-block mb-2" @click.prevent="ubahKegiatan(item.id)" v-if="tipeUser == 'panitia'">
											<i class="icon-pencil5"></i> Ubah Pertemuan
										</button>

										<!-- status -->
										<button class="btn btn-light btn-block mb-2" @click.prevent="modalOpen('statusPertemuan')" v-if="tipeUser == 'panitia'" >
											<i class="icon-calendar5"></i> Status Pertemuan
										</button>

										<!-- status -->
										<button class="btn btn-light btn-block mb-2" @click.prevent="modalOpen('hapusPertemuan')" v-if="tipeUser == 'panitia' && item.status == 1">
											<i class="icon-bin2"></i> Hapus Pertemuan
										</button>

										<!-- daftar -->
										<button class="btn bg-warning-400 btn-block mb-2" @click.prevent="modalOpen('tambahPeserta')" v-if="currentUser.id_cu == 0">
											<i class="icon-people"></i> Daftar Peserta Pertemuan
										</button>

										<!-- daftar -->
										<button class="btn bg-warning-400 btn-block mb-2" @click.prevent="modalOpen('tambahPeserta')" v-else-if="currentUser.can && currentUser.can['index_pertemuan_bkcu'] && currentUser.id_cu != 0 && item.status == 2">
											<i class="icon-people"></i> Daftar Peserta Pertemuan
										</button>
									</template>

									<!-- keputusan -->
									<template v-if="item.pilih && item.pilih.length > 0">
										<button class="btn bg-success btn-block mb-2" @click.prevent="modalOpen('tambahKeputusan')" v-if="item.status == 4 && tipeUser == 'peserta'">
											<i class="icon-hammer"></i> Beri Keputusan
										</button>
									</template>

									<button class="btn bg-info btn-block mb-2" @click.prevent="modalOpen('tambahPertanyaan')" v-if="item.status == 4 && tipeUser == 'peserta'">
										<i class="icon-question7"></i> Ajukan Pertanyaan
									</button>

								</div>
							</div>

							<!-- detail -->
							<div class="card">
								<div class="card-header bg-transparent header-elements-inline">
									<span class="text-uppercase font-size-sm font-weight-semibold">Info</span>
									<div class="header-elements">
										<div class="list-icons">
											<a class="list-icons-item" data-action="collapse"></a>
										</div>
									</div>
								</div>
								<table class="table table-borderless table-xs border-top-0 my-2">
									<tbody>
										<tr>
											<td class="font-weight-semibold">Status:</td>
											<td class="text-right">
												<span v-html="$options.filters.statusDiklat(item.status)"></span>
											</td>
										</tr>
										<tr>
											<td class="font-weight-semibold">Kode:</td>
											<td class="text-right">
												{{item.kode_diklat}}
											</td>
										</tr>
										<tr>
											<td class="font-weight-semibold">Durasi:</td>
											<td class="text-right">{{ item.durasi }} jam</td>
										</tr>
										<tr>
											<td class="font-weight-semibold">Tgl. Mulai:</td>
											<td class="text-right" v-html="$options.filters.dateMonth(item.mulai)"></td>
										</tr>
										<tr>
											<td class="font-weight-semibold">Tgl. Selesai:</td>
											<td class="text-right" v-html="$options.filters.dateMonth(item.selesai)"></td>
										</tr>
										<tr><td colspan="2"><hr class="mt-0 mb-0"/></td></tr>
										<tr>
											<td class="font-weight-semibold">Peserta Min:</td>
											<td class="text-right">{{item.peserta_min}} orang</td>
										</tr>
										<tr>
											<td class="font-weight-semibold">Peserta Max:</td>
											<td class="text-right">{{item.peserta_max}} orang</td>
										</tr>
										<tr>
											<td class="font-weight-semibold">Peserta Max Per CU:</td>
											<td class="text-right">{{item.peserta_max_cu}} orang</td>
										</tr>
										<tr v-if="item.keputusan_cu || item.pertanyaan_cu || item.keputusan_user || item.pertanyaan_user"><td colspan="2"><hr class="mt-0 mb-0"/></td></tr>
										<tr v-if="item.keputusan_cu">
											<td class="font-weight-semibold">Keputusan Max Per CU:</td>
											<td class="text-right">{{ item.keputusan_cu }} kali</td>
										</tr>
										<tr v-if="item.keputusan_user">
											<td class="font-weight-semibold">Keputusan Max Per Peserta:</td>
											<td class="text-right">{{ item.keputusan_user }} kali</td>
										</tr>
										<tr v-if="item.pertanyaan_cu">
											<td class="font-weight-semibold">Pertanyaan Max Per CU:</td>
											<td class="text-right">{{ item.pertanyaan_cu }} kali</td>
										</tr>
										<tr v-if="item.pertanyaan_user">
											<td class="font-weight-semibold">Pertanyaan Max Per Peserta:</td>
											<td class="text-right">{{ item.pertanyaan_user }} kali</td>
										</tr>
									</tbody>
								</table>
							</div>

							<!-- sasaran -->
							<div class="card">
								<div class="card-header bg-transparent header-elements-inline">
									<span class="text-uppercase font-size-sm font-weight-semibold">Sasaran Peserta</span>
									<div class="header-elements">
										<div class="list-icons">
											<a class="list-icons-item" data-action="collapse"></a>
										</div>
									</div>
								</div>

								<div class="card-body">
									<span v-if="item.sasaran">
										<label v-for="(sasaran, index) in item.sasaran" :key="index" class="badge badge-primary ml-1">
											{{ sasaran.name }}
										</label>
									</span>
								</div>
							</div>

							<!-- tempat -->
							<div class="card" v-if="item.tempat">
								<div class="card-header bg-transparent header-elements-inline">
									<span class="text-uppercase font-size-sm font-weight-semibold">Tempat</span>
									<div class="header-elements">
										<div class="list-icons">
											<a class="list-icons-item" data-action="collapse"></a>
										</div>
									</div>
								</div>
								<div class="card-img-actions mx-1 mt-1">
									<a href="#" @click.prevent="modalImageOpen('/images/tempat/' + item.tempat.gambar + '.jpg')" v-if="item.tempat && item.tempat.gambar">
										<img :src="'/images/tempat/' + item.tempat.gambar + 'n.jpg'" class="card-img img-fluid" >
										<span class="card-img-actions-overlay card-img"><i class="icon-enlarge6 icon-2x"></i></span>
									</a>
									<a href="#" @click.prevent="modalImageOpen('/images/no_image.jpg')" v-else>
										<img :src="'/images/no_image.jpg'" class="card-img img-fluid" >
										<span class="card-img-actions-overlay card-img"><i class="icon-enlarge6 icon-2x"></i></span>
									</a>
								</div>

								<table class="table table-borderless table-xs border-top-0 my-2" v-if="itemStat == 'success'">
									<tbody>
										<tr>
											<td class="font-weight-semibold">Nama:</td>
											<td class="text-right"><check-value :value="item.tempat.name"></check-value></td>
										</tr>
										<tr>
											<td class="font-weight-semibold">Email:</td>
											<td class="text-right"><check-value :value="item.tempat.email"></check-value></td>
										</tr>
										<tr>
											<td class="font-weight-semibold">No. Telp:</td>
											<td class="text-right"><check-value :value="item.tempat.telp"></check-value></td>
										</tr>
										<tr>
											<td class="font-weight-semibold">No. Hp:</td>
											<td class="text-right"><check-value :value="item.tempat.hp"></check-value></td>
										</tr>
										<tr>
											<td class="font-weight-semibold">Alamat:</td>
											<td class="text-right"><check-value :value="item.tempat.alamat"></check-value></td>
										</tr>
										<tr>
											<td class="font-weight-semibold">Website:</td>
											<td class="text-right"><check-value :value="item.tempat.website"></check-value></td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="card" v-else-if="item.tipe_tempat == 'ONLINE'">
								<div class="card-header bg-transparent header-elements-inline">
									<span class="text-uppercase font-size-sm font-weight-semibold">Tempat</span>
									<div class="header-elements">
										<div class="list-icons">
											<a class="list-icons-item" data-action="collapse"></a>
										</div>
									</div>
								</div>
								<div class="card-body">
									Dilaksanakan secara online
								</div>
							</div>
							<div class="card" v-else>
								<div class="card-header bg-transparent header-elements-inline">
									<span class="text-uppercase font-size-sm font-weight-semibold">Tempat</span>
									<div class="header-elements">
										<div class="list-icons">
											<a class="list-icons-item" data-action="collapse"></a>
										</div>
									</div>
								</div>
								<div class="card-body">
									Belum menentukan tempat pertemuan
								</div>
							</div>

						</div>

						<!-- content -->
						<div class="col-lg-9 col-md-8 order-md-1">

							<!-- navbar -->
							<div class="card">
								<div class="nav-tabs-responsive">
									<ul class="nav nav-tabs nav-tabs-bottom flex-nowrap mb-0">

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'info'}" @click.prevent="changeTab('info')"><i class="icon-menu7 mr-2"></i>
											Umum
										</a></li>

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'materi'}" @click.prevent="changeTab('materi')"><i class="icon-folder-download2 mr-2"></i>
											Unduhan
										</a></li>

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'tugas'}" @click.prevent="changeTab('tugas')"><i class="icon-paste mr-2"></i>
											Tugas
										</a></li>		

										<li class="nav-item" v-if="item.pilih && item.pilih.length > 0"><a href="#" class="nav-link" :class="{'active': tabName == 'keputusan'}" @click.prevent="changeTab('keputusan')"><i class="icon-hammer mr-2"></i>
											Keputusan 
											<span class="badge badge-success ml-2" v-if="countKeputusanStat == 'success' && countKeputusan[0] > 0">{{ countKeputusan[0] }}</span>
										</a></li>	

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'pertanyaan'}" @click.prevent="changeTab('pertanyaan')"><i class="icon-question7 mr-2"></i>
											Pertanyaan 
											<span class="badge badge-info ml-2" v-if="countPertanyaanStat == 'success' && countPertanyaan[0] > 0">{{ countPertanyaan[0] }}</span>
										</a></li>	

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'pesertaTerdaftar'}" @click.prevent="changeTab('pesertaTerdaftar')"><i class="icon-people mr-2"></i>
											Terdaftar
											<span class="badge badge-dark ml-2" v-if="countPesertaStat == 'success' && countPeserta > 0 && currentUser.id_cu == 0">{{ countPeserta }}</span>
										</a></li>

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'pesertaHadir'}" @click.prevent="changeTab('pesertaHadir')"><i class="icon-accessibility mr-2"></i>
											Hadir 
											<span class="badge badge-dark ml-2" v-if="countPesertaHadirStat == 'success' && countPesertaHadir> 0">{{ countPesertaHadir }}</span>
										</a></li>	

										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'statistik'}" @click.prevent="changeTab('statistik')"><i class="icon-equalizer mr-2"></i>
											Statistik
										</a></li>								
									</ul>
								</div>

							</div>

							<!-- tabinformasi -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'info'">
									<div class="card" v-if="item.keterangan">
										<div class="card-header bg-white">
											<h5 class="card-title">1. Kerangka Acuan</h5>
										</div>
										<div class="card-body" v-html="item.keterangan">
										</div>
									</div>

									<div class="card" v-if="item.jadwal">
										<div class="card-header bg-white">
											<h5 class="card-title">2. Jadwal</h5>
										</div>
										<div class="card-body" v-html="item.jadwal">
										</div>
									</div>
									

									<div class="card" v-if="itemDataPanitia">
										<div class="card-header bg-white">
											<h5 class="card-title">3. Panitia dan Fasilitator</h5>
										</div>
										<data-table :items="itemDataPanitia" :columnData="columnDataPanitia" :itemDataStat="itemStat">
											<template slot="item-desktop" slot-scope="props">
												<tr v-if="props.item">
													<td>{{ props.index + 1 }}</td>
													<td>
														<img :src="'/images/aktivis/' + props.item.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
														<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
													</td>
													<td>
														<check-value :value="props.item.name"></check-value>
													</td>
													<td v-if="props.item.pivot.asal == 'dalam'">
														<span v-if="props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 1">
															<check-value :front-text="'CU'" :value="props.item.pekerjaan_aktif.cu.name" v-if="props.item.pekerjaan_aktif.cu"></check-value>
															<span v-else>-</span>
														</span>
														<span v-else-if="props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 2">
															<check-value :value="props.item.pekerjaan_aktif.lembaga_lain.name" v-if="props.item.pekerjaan_aktif.lembaga_lain"></check-value>
															<span v-else>-</span>
														</span>
														<span v-else-if="props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 3">
															PUSKOPCUINA
														</span>
														<span v-else>-</span>
													</td>
													<td v-else-if="props.item.pivot.asal == 'luar'">
														<check-value :value="props.item.lembaga"></check-value>
													</td>
													<td v-else-if="props.item.pivot.asal == 'luar lembaga'">
														<check-value :value="props.item.name"></check-value>
													</td>
													<td>
														<check-value :value="props.item.pivot.asal"></check-value>
													</td>
													<td>
														<check-value :value="props.item.pivot.peran"></check-value>
													</td>
													<td>
														<check-value :value="props.item.pivot.keterangan"></check-value>
													</td>
													<td>
														<check-value :value="props.item.email"></check-value>
													</td>
													<td>
														<check-value :value="props.item.hp"></check-value>
													</td>
												</tr>
											</template>	
										</data-table>
									</div>

								</div>
							</transition>

							<!-- tabmateri -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'materi'">
									<!-- materi table -->
									<data-viewer :title="'Unduhan'" :itemData="itemDataMateri" :columnData="columnDataMateri" :itemDataStat="itemDataMateriStat" :query="queryMateri" @fetch="fetchMateri"  :isNoExcel="'true'" :isDasar="'true'" :isDisable="isDisableTable" :dataview="'grid'">

										<!-- button desktop -->
										<template slot="button-desktop" v-if="tipeUser != 'peserta'">
											<button type="button" class="btn btn-light" @click.prevent="modalOpen('tambahMateri')"><i class="icon-plus3"></i> Tambah Unduhan</button>
										</template>	

										<template slot="button-mobile" v-if="tipeUser != 'peserta'">
											<button type="button" class="btn btn-light btn-block" @click.prevent="modalOpen('tambahMateri')"><i class="icon-plus3"></i> Tambah Unduhan</button>
										</template>	

										<template slot="item-mobile" slot-scope="props">
											<div class="col-md-12">
												<div class="card">
													<div class="card-header bg-light header-elements-inline">
														<h6 class="card-title"><a href="#" @click.prevent="modalOpen('lihatMateri',true,props.item)">{{ props.item.name }}</a></h6>
														<div class="d-none d-sm-block">
															<div class="header-elements">
																<span class="badge badge-primary">{{ props.item.tipe | uppercase }}</span>
																<span class="badge badge-secondary ml-1" v-html="$options.filters.dateTime(props.item.created_at)">
																</span>
															</div>
														</div>
													</div>
													<div class="card-body" v-if="props.item.keterangan">
														{{ props.item.keterangan }}
													</div>
													<div class="card-footer">
														<div class="row">
															<div class="col-md-6">
																<div class="d-none d-sm-block">
																	<button type="button" class="btn btn-light mb-1" @click.prevent="downloadMateri(props.item.tipe == 'jpg' ? props.item.filename + '.jpg' : props.item.filename)" v-if="props.item.format == 'upload'"><i class="icon-file-eye"></i> Lihat</button>

																	<a type="button" class="btn btn-light mb-1" :href="props.item.link" target="_blank" v-else-if="props.item.format == 'link'"><i class="icon-file-eye"></i> Lihat</a>
																</div>

																<div class="d-block d-sm-none text-center">
																	<span class="badge badge-primary">{{ props.item.tipe | uppercase }}</span>

																	<span class="badge badge-secondary" v-html="$options.filters.dateTime(props.item.created_at)">
																	</span>

																	<button type="button" class="btn btn-light btn-block mt-2 mb-1" @click.prevent="downloadMateri(props.item.tipe == 'jpg' ? props.item.filename + '.jpg' : props.item.filename)" v-if="props.item.format == 'upload'"><i class="icon-file-eye"></i> Lihat</button>

																	<a type="button" class="btn btn-light btn-block mt-2 mb-1" :href="props.item.link" target="_blank" v-else-if="props.item.format == 'link'"><i class="icon-file-eye"></i> Lihat</a>
																
																</div>
															</div>
															<div class="col-md-6 text-right">
																<div class="d-none d-sm-block">
																	<!-- <button type="button" class="btn btn-light mb-1" @click.prevent="modalOpen('lihatMateri',true,props.item)"><i class="icon-file-eye"></i> Lihat</button> -->

																	<button type="button" class="btn btn-light mb-1" @click.prevent="modalOpen('ubahMateri',true,props.item)" v-if="tipeUser != 'peserta'"><i class="icon-pencil5"></i> Ubah</button>

																	<button type="button" class="btn btn-light mb-1"  @click.prevent="modalOpen('hapusMateri',true,props.item)" v-if="tipeUser != 'peserta'"><i class="icon-bin2"></i> Hapus</button>
																</div>

																<div class="d-block d-sm-none">
																	<hr/>
																	<!-- <button type="button" class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('lihatMateri',true,props.item)"><i class="icon-file-eye"></i> Lihat</button> -->

																	<button type="button" class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('ubahMateri',true,props.item)" v-if="tipeUser != 'peserta'"><i class="icon-pencil5"></i> Ubah</button>

																	<button type="button" class="btn btn-light btn-block mb-1"  @click.prevent="modalOpen('hapusMateri',true,props.item)" v-if="tipeUser != 'peserta'"><i class="icon-bin2"></i> Hapus</button>
																</div>	
															</div>
														</div>
													</div>
												</div>
											</div>
										</template>	
									</data-viewer>

								</div>
							</transition>	

							<!-- tabtugas -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'tugas'">
									<!-- materi table -->
									<data-viewer :title="'Tugas'" :itemData="itemDataTugas" :columnData="columnDataTugas" :itemDataStat="itemDataTugasStat" :query="queryTugas" @fetch="fetchTugas"  :isNoExcel="'true'" :isDasar="'true'" :isDisable="isDisableTable" :dataview="'grid'">

										<!-- button desktop -->
										<template slot="button-desktop" v-if="tipeUser != 'peserta'">
											<button type="button" class="btn btn-light" @click.prevent="modalOpen('tambahTugas')"><i class="icon-plus3"></i> Tambah Tugas</button>
										</template>	

										<template slot="button-mobile" v-if="tipeUser != 'peserta'">
											<button type="button" class="btn btn-light btn-block" @click.prevent="modalOpen('tambahTugas')"><i class="icon-plus3"></i> Tambah Tugas</button>
										</template>	

										<template slot="item-mobile" slot-scope="props">
											<div class="col-md-12">
												<div class="card">
													<div class="card-header bg-light header-elements-inline">
														<h6 class="card-title"><a href="#" @click.prevent="modalOpen('lihatTugas',true,props.item)">{{ props.item.name }}</a></h6>
														<div class="d-none d-sm-block">
															<div class="header-elements">
																<span class="badge badge-primary">{{ props.item.tipe | uppercase }}</span>
																<span class="badge badge-secondary ml-1" v-html="$options.filters.dateTime(props.item.created_at)">
																</span>
															</div>
														</div>
													</div>
													<div class="card-body" v-if="props.item.keterangan">
														{{ props.item.keterangan }}
													</div>
													<div class="card-footer">
														<div class="row">
															<div class="col-md-6">
																<div class="d-none d-sm-block">
																	<button type="button" class="btn btn-light mb-1" @click.prevent="modalOpen('lihatTugas',true,props.item)"><i class="icon-file-eye"></i> Lihat <span class="badge badge-success" v-if="props.item.hasjawaban_count > 0 && tipeUser != 'peserta'">{{ props.item.hasjawaban_count }}</span></button>
																</div>
																<div class="d-block d-sm-none text-center">
																	<span class="badge badge-primary">{{ props.item.tipe | uppercase }}</span>

																	<span class="badge badge-secondary" v-html="$options.filters.dateTime(props.item.created_at)">
																	</span>
																
																	<button type="button" class="btn btn-light btn-block mt-2 mb-1" @click.prevent="modalOpen('lihatTugas',true,props.item)"><i class="icon-file-eye"></i> Lihat <span class="badge badge-success" v-if="props.item.hasjawaban_count > 0 && tipeUser != 'peserta'">{{ props.item.hasjawaban_count }}</span></button>
																</div>
															</div>
															<div class="col-md-6 text-right">
																<div class="d-none d-sm-block">
																	<button type="button" class="btn btn-light mb-1" @click.prevent="modalOpen('ubahTugas',true,props.item)" v-if="tipeUser != 'peserta'"><i class="icon-pencil5"></i> Ubah</button>

																	<button type="button" class="btn btn-light mb-1"  @click.prevent="modalOpen('hapusTugas',true,props.item)" v-if="tipeUser != 'peserta'"><i class="icon-bin2"></i> Hapus</button>
																</div>
																<div class="d-block d-sm-none">
																	<button type="button" class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('ubahTugas',true,props.item)" v-if="tipeUser != 'peserta'"><i class="icon-pencil5"></i> Ubah</button>
																	
																	<button type="button" class="btn btn-light btn-block mb-1"  @click.prevent="modalOpen('hapusTugas',true,props.item)" v-if="tipeUser != 'peserta'"><i class="icon-bin2"></i> Hapus</button>
																</div>	
															</div>
														</div>
													</div>
												</div>
											</div>
										</template>	
									</data-viewer>

								</div>
							</transition>	

							<!-- tabkeputusan -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'keputusan'">
									<!-- keputusan table -->
									<data-viewer :title="'Keputusan'" :itemData="itemDataKeputusan" :columnData="columnDataKeputusan" :itemDataStat="itemDataKeputusanStat" :query="queryKeputusan" @fetch="fetchKeputusan"  :isNoExcel="'true'" :isDasar="'true'" :isDisable="isDisableTable" :dataview="'grid'">

										<!-- button desktop -->
										<template slot="button-desktop" v-if="item.status == 4">
											<button type="button" class="btn btn-success" @click.prevent="modalOpen('tambahKeputusan')" v-if="item.status == 4 && tipeUser == 'peserta'"><i class="icon-hammer"></i> Beri Keputusan</button>
										</template>	

										<template slot="button-mobile" v-if="item.status == 4">
											<button type="button" class="btn btn-success btn-block" @click.prevent="modalOpen('tambahKeputusan')" v-if="item.status == 4 && tipeUser == 'peserta'"><i class="icon-hammer"></i> Beri Keputusan</button>
										</template>	

										<template slot="item-mobile" slot-scope="props">
											<div class="col-md-12">
												<div class="card" :class="{'border-success' : props.item.id_cu == currentUser.id_cu}">
													<div class="card-header bg-light header-elements-inline">
														<h6 class="card-title">
															<img :src="'/images/aktivis/' + props.item.user.aktivis.gambar + '.jpg'" width="30" height="30" class="rounded-circle"  alt="user image" v-if="props.item.user.aktivis.gambar">
															<img src="/images/no_image_man.jpg" width="30" height="30" class="rounded-circle" alt="user image" v-else>
															<check-value :value="props.item.user.aktivis.name" v-if="props.item.user"></check-value>
															<span v-else>-</span>
															|
															<check-value :value="props.item.cu.name" v-if="props.item.cu"></check-value>
															<span v-else>-</span>
														</h6>
														<div class="d-none d-sm-block">
															<div class="header-elements">
																<span class="badge badge-secondary" v-html="$options.filters.dateTime(props.item.created_at)">
																</span>
															</div>
														</div>
													</div>
													<div class="card-body" v-if="props.item.keterangan">
														<div class="row">
															<div class="col-md-6" v-for="pilih in props.item.pilih" :key="pilih.id">
																<div class="card" :class="{'border-primary' : pilih.pivot.nilai == 1, 'border-danger' : pilih.pivot.nilai == 2, 'border-secondary' : pilih.pivot.nilai == 3}">
																	<div class="card-header text-white" :class="{'bg-primary' : pilih.pivot.nilai == 1, 'bg-danger' : pilih.pivot.nilai == 2, 'bg-secondary' : pilih.pivot.nilai == 3}">
																		<span v-if="pilih.pivot.nilai == 1">SETUJU</span>
																		<span v-else-if="pilih.pivot.nilai == 2">TIDAK SETUJU</span>
																		<span v-else-if="pilih.pivot.nilai == 3">TIDAK PUNYA TANGGAPAN</span>
																	</div>
																	<div class="card-body">
																		<check-value :value="pilih.name"></check-value>
																	</div>
																</div>
															</div>
														</div>
														<hr class="mt-1 mb-1"/>
														<b>Catatan / Komentar </b>
														<br/>
														<div v-html="props.item.keterangan"></div>
													</div>
													<div class="card-footer">
														<div class="row">
															<div class="col-md-6">
																<div class="d-none d-sm-block">
																	<button type="button" class="btn btn-light mb-1"  @click.prevent="modalOpen('keputusanKomentar',true,props.item)"><i class="icon-reply"></i> Komentar 
																	<span class="badge badge-success" v-if="props.item.haskomentar_count > 0">{{ props.item.haskomentar_count }}</span></button>
																</div>

																<div class="d-block d-sm-none text-center">
																	<span class="badge badge-secondary" v-html="$options.filters.dateTime(props.item.created_at)">
																	</span>

																	<button type="button" class="btn btn-light btn-block mt-2 mb-1"  @click.prevent="modalOpen('keputusanKomentar',true,props.item)"><i class="icon-reply"></i> Komentar 
																	<span class="badge badge-success" v-if="props.item.haskomentar_count > 0">{{ props.item.haskomentar_count }}</span></button>
																</div>
															</div>
															<div class="col-md-6 text-right">
																<div class="d-none d-sm-block" v-if="props.item.id_cu == currentUser.id_cu">

																	<button type="button" class="btn btn-light mb-1" @click.prevent="modalOpen('ubahKeputusan',true,props.item)" v-if="item.status == 4"><i class="icon-pencil5"></i> Ubah </button>

																	<button type="button" class="btn btn-light mb-1"  @click.prevent="modalOpen('hapusKeputusan',true,props.item)" v-if="item.status == 4"><i class="icon-bin2"></i> Hapus </button>
																</div>

																<div class="d-block d-sm-none" v-if="props.item.id_cu == currentUser.id_cu">
																	<button type="button" class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('ubahKeputusan',true,props.item)" v-if="item.status == 4"><i class="icon-pencil5"></i> Ubah </button>

																	<button type="button" class="btn btn-light btn-block mb-1"  @click.prevent="modalOpen('hapusKeputusan',true,props.item)" v-if="item.status == 4"><i class="icon-bin2"></i> Hapus </button>
																</div>	
															</div>
														</div>
													</div>
												</div>
											</div>
										</template>	
									</data-viewer>

								</div>
							</transition>		

							<!-- tabpertanyaan -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'pertanyaan'">
									<!-- pertanyaan table -->
									<data-viewer :title="'Pertanyaan'" :itemData="itemDataPertanyaan" :columnData="columnDataPertanyaan" :itemDataStat="itemDataPertanyaanStat" :query="queryPertanyaan" @fetch="fetchPertanyaan"  :isNoExcel="'true'" :isDasar="'true'" :isDisable="isDisableTable" :dataview="'grid'">

										<!-- button desktop -->
										<template slot="button-desktop" v-if="item.status == 4">
											<button type="button" class="btn btn-info" @click.prevent="modalOpen('tambahPertanyaan')" v-if="item.status == 4 && tipeUser == 'peserta'"><i class="icon-question7"></i> Ajukan Pertanyaan</button>
										</template>	

										<template slot="button-mobile" v-if="item.status == 4">
											<button type="button" class="btn btn-info btn-block" @click.prevent="modalOpen('tambahPertanyaan')" v-if="item.status == 4 && tipeUser == 'peserta'"><i class="icon-question7"></i> Ajukan Pertanyaan</button>
										</template>	

										<template slot="item-mobile" slot-scope="props">
											<div class="col-md-12">
												<div class="card" :class="{'border-info' : props.item.id_cu == currentUser.id_cu}">
													<div class="card-header bg-light header-elements-inline">
														<h6 class="card-title">
															<img :src="'/images/aktivis/' + props.item.user.aktivis.gambar + '.jpg'" width="30" height="30" class="rounded-circle"  alt="user image" v-if="props.item.user.aktivis.gambar">
															<img src="/images/no_image_man.jpg" width="30" height="30" class="rounded-circle" alt="user image" v-else>
															<check-value :value="props.item.user.aktivis.name" v-if="props.item.user"></check-value>
															<span v-else>-</span>
															|
															<check-value :value="props.item.cu.name" v-if="props.item.cu"></check-value>
															<span v-else>-</span>
														</h6>
														<div class="d-none d-sm-block">
															<div class="header-elements">
																<span class="badge badge-secondary" v-html="$options.filters.dateTime(props.item.created_at)">
																</span>
															</div>
														</div>
													</div>
													<div class="card-body" v-if="props.item.keterangan">
														<b>Pertanyaan </b>
														<br/>
														<div v-html="props.item.keterangan"></div>
														<button class="btn btn-warning btn-block" v-if="props.item.terjawab" disabled>
															<i class="icon-check"></i> TERJAWAB
														</button>
													</div>
													<div class="card-footer">
														<div class="row">
															<div class="col-md-6">
																<div class="d-none d-sm-block">
																	<button type="button" class="btn btn-light mb-1"  @click.prevent="modalOpen('pertanyaanKomentar',true,props.item)"><i class="icon-reply"></i> Komentar 
																	<span class="badge badge-success" v-if="props.item.haskomentar_count > 0">{{ props.item.haskomentar_count }}</span></button>
																</div>

																<div class="d-block d-sm-none text-center">
																	<span class="badge badge-secondary" v-html="$options.filters.dateTime(props.item.created_at)">
																	</span>
																
																	<button type="button" class="btn btn-light btn-block mt-2 mb-1"  @click.prevent="modalOpen('pertanyaanKomentar',true,props.item)"><i class="icon-reply"></i> Komentar 
																	<span class="badge badge-success" v-if="props.item.haskomentar_count > 0">{{ props.item.haskomentar_count }}</span></button>
																</div>
															</div>
															<div class="col-md-6 text-right">
																<div class="d-none d-sm-block" v-if="props.item.id_cu == currentUser.id_cu">

																	<button type="button" class="btn btn-light mb-1" @click.prevent="modalOpen('ubahPertanyaan',true,props.item)" v-if="item.status == 4"><i class="icon-pencil5"></i> Ubah </button>

																	<button type="button" class="btn btn-light mb-1"  @click.prevent="modalOpen('hapusPertanyaan',true,props.item)" v-if="item.status == 4"><i class="icon-bin2"></i> Hapus </button>
																</div>

																<div class="d-block d-sm-none" v-if="props.item.id_cu == currentUser.id_cu">
																	<button type="button" class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('ubahPertanyaan',true,props.item)" v-if="item.status == 4"><i class="icon-pencil5"></i> Ubah </button>

																	<button type="button" class="btn btn-light btn-block mb-1"  @click.prevent="modalOpen('hapusPertanyaan',true,props.item)" v-if="item.status == 4"><i class="icon-bin2"></i> Hapus </button>
																</div>	
															</div>
														</div>
													</div>
												</div>
											</div>
										</template>	
									</data-viewer>

								</div>
							</transition>		

							<!-- tabterdaftar -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-if="tabName == 'pesertaTerdaftar'">
									<data-viewer :title="'peserta terdaftar'" :itemData="itemDataPesertaTerdaftar" :columnData="columnDataPesertaTerdaftar" :itemDataStat="itemDataPesertaTerdaftarStat" :query="queryPesertaTerdaftar" @fetch="fetchPesertaTerdaftar" :excelDownloadUrl="excelDownloadUrl" :isDasar="'true'" :isNoKolom="'true'" :isDisable="isDisableTable">

										<!-- if bkcu -->
										<template slot="button-desktop" v-if="currentUser.id_cu == 0">
											<button class="btn bg-warning-400 mb-1" @click.prevent="modalOpen('tambahPeserta')">
												<i class="icon-people"></i> Daftar Peserta
											</button>

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahPeserta')" :disabled="!selectedItem.id" v-if="item.status == 2 && selectedItem.status != 3" >
												<i class="icon-pencil5"></i> Ubah
											</button>

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusPeserta')" :disabled="!selectedItem.id" v-if="item.status == 2 && selectedItem.status != 3">
												<i class="icon-bin2"></i> Hapus
											</button>

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('batalPeserta')" :disabled="!selectedItem.id">
												<i class="icon-blocked"></i> Tolak
											</button>

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('alasanPeserta')" v-if="selectedItem.status == 3">
												<i class="icon-eye"></i> Lihat Alasan Penolakan
											</button>
										</template>
										<template slot="button-mobile" v-if="currentUser.id_cu == 0">
											<button class="btn bg-warning-400 btn-block mb-1" @click.prevent="modalOpen('tambahPeserta')">
												<i class="icon-people"></i> Daftar Peserta
											</button>

											<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('ubahPeserta')"
											:disabled="!selectedItem.id" v-if="item.status == 2 && selectedItem.status != 3">
												<i class="icon-pencil5"></i> Ubah
											</button>

											<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('hapusPeserta')" :disabled="!selectedItem.id" v-if="item.status == 2 && selectedItem.status != 3">
												<i class="icon-bin2"></i> Hapus
											</button>

											<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('alasanPeserta')" v-if="selectedItem.status == 3">
												<i class="icon-eye"></i> Lihat Alasan Penolakan
											</button>
										</template>

										<!-- if cu -->
										<template slot="button-desktop" v-if="currentUser.id_cu != 0">
											<template v-if="item.tipe == 'diklat_bkcu'">
												<button class="btn bg-warning-400 mb-1" @click.prevent="modalOpen('tambahPeserta')" v-if="currentUser.can && currentUser.can['index_diklat_bkcu'] && item.status == 2">
													<i class="icon-people"></i> Daftar Peserta
												</button>
											</template>

											<template v-else-if="item.tipe == 'pertemuan_bkcu'">
												<button class="btn bg-warning-400 mb-1" @click.prevent="modalOpen('tambahPeserta')" v-if="currentUser.can && currentUser.can['index_pertemuan_bkcu'] && item.status == 2">
													<i class="icon-people"></i> Daftar Peserta
												</button>
											</template>

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahPeserta')"
											:disabled="!selectedItem.id || selectedItem.status != 2" v-if="item.status == 2 && selectedItem.status != 3">
												<i class="icon-pencil5"></i> Ubah
											</button>
											
											<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusPeserta')" :disabled="!selectedItem.id || selectedItem.status != 2" v-if="item.status == 2 && selectedItem.status != 3">
												<i class="icon-bin2"></i> Hapus
											</button>

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('alasanPeserta')" v-if="selectedItem.status == 3">
												<i class="icon-eye"></i> Lihat Alasan Penolakan
											</button>
										</template>
										<template slot="button-mobile" v-else>
											<template v-if="item.tipe == 'diklat_bkcu'">
												<button class="btn bg-warning-400 btn-block mb-1" @click.prevent="modalOpen('tambahPeserta')" v-if="currentUser.can && currentUser.can['index_diklat_bkcu'] && item.status == 2">
													<i class="icon-people"></i> Daftar Peserta
												</button>
											</template>

											<template v-else-if="item.tipe == 'pertemuan_bkcu'">
												<button class="btn bg-warning-400 btn-block mb-1" @click.prevent="modalOpen('tambahPeserta')" v-if="currentUser.can && currentUser.can['index_pertemuan_bkcu'] && item.status == 2">
													<i class="icon-people"></i> Daftar Peserta
												</button>
											</template>

											<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('ubahPeserta')"
											:disabled="!selectedItem.id || selectedItem.status != 1" v-if="item.status == 2 && selectedItem.status != 3" >
												<i class="icon-pencil5"></i> Ubah
											</button>
											
											<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('hapusPeserta')" :disabled="!selectedItem.id || selectedItem.status != 1" v-if="item.status == 2 && selectedItem.status != 3">
												<i class="icon-bin2"></i> Hapus
											</button>

											<button class="btn btn-light btn-block mb-1" @click.prevent="modalOpen('alasanPeserta')" v-if="selectedItem.status == 3">
												<i class="icon-eye"></i> Lihat Alasan Penolakan
											</button>
										</template>

										<template slot="item-desktop" slot-scope="props">
											<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)" v-if="props.item">
												<td>{{ props.index + 1 }}</td>
												<td>
													<span v-html="$options.filters.statusPeserta(props.item.status)"></span>
												</td>
												<td v-if="!columnDataPesertaTerdaftar[2].hide">
													<img :src="'/images/aktivis/' + props.item.aktivis.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.aktivis && props.item.aktivis.gambar">
													<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaTerdaftar[3].hide">
													<check-value :value="props.item.aktivis.name"></check-value>
												</td>
												<td v-if="!columnDataPesertaTerdaftar[4].hide && !columnDataPesertaTerdaftar[4].disable">
													<check-value :value="props.item.name_nametag"></check-value>
												</td>
												<td v-if="!columnDataPesertaTerdaftar[5].hide">
													<check-value :value="props.item.name_sertifikat"></check-value>
												</td>
												<td v-if="!columnDataPesertaTerdaftar[6].hide && !columnDataPesertaTerdaftar[6].disable" >
													<span v-html="$options.filters.date(props.item.datang)"></span>
												</td>
												<td v-if="!columnDataPesertaTerdaftar[7].hide && !columnDataPesertaTerdaftar[7].disable">
													<span v-html="$options.filters.date(props.item.pulang)"></span>
												</td>
												<td v-if="!columnDataPesertaTerdaftar[8].hide">
													<check-value :value="props.item.keterangan"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaTerdaftar[9].hide">
													<check-value :value="props.item.aktivis.kelamin"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaTerdaftar[10].hide">
													<span v-if="props.item.aktivis.pekerjaan_aktif && props.item.aktivis.pekerjaan_aktif.tipe == 1">
														<check-value :value="props.item.aktivis.pekerjaan_aktif.cu.name" v-if="props.item.aktivis.pekerjaan_aktif.cu"></check-value>
														<span v-else>-</span>
													</span>
													<span v-else-if="props.item.aktivis.pekerjaan_aktif && props.item.aktivis.pekerjaan_aktif.tipe == 2">
														<check-value :value="props.item.aktivis.pekerjaan_aktif.lembaga_lain.name" v-if="props.item.aktivis.pekerjaan_aktif.lembaga_lain"></check-value>
														<span v-else>-</span>
													</span>
													<span v-else-if="props.item.aktivis.pekerjaan_aktif && props.item.aktivis.pekerjaan_aktif.tipe == 3">
														PUSKOPCUINA
													</span>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaTerdaftar[11].hide" >
													<check-value :value="props.item.aktivis.pekerjaan_aktif.tingkat_name" v-if="props.item.aktivis.pekerjaan_aktif"></check-value>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaTerdaftar[12].hide">
													<check-value :value="props.item.aktivis.pekerjaan_aktif.name" v-if="props.item.aktivis.pekerjaan_aktif"></check-value>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaTerdaftar[13].hide">
													<check-value :value="props.item.aktivis.pendidikan_tertinggi.tingkat" v-if="props.item.aktivis.pendidikan_tertinggi"></check-value>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaTerdaftar[14].hide">
													<check-value :value="props.item.aktivis.pendidikan_tertinggi.name" v-if="props.item.aktivis.pendidikan_tertinggi"></check-value>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaTerdaftar[15].hide" v-html="$options.filters.date(props.item.aktivis.tanggal_lahir)">
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaTerdaftar[16].hide">
													<check-value :value="props.item.aktivis.tempat_lahir"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaTerdaftar[17].hide">
													<check-value :value="props.item.aktivis.tinggi"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaTerdaftar[18].hide">
													<check-value :value="props.item.aktivis.agama"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaTerdaftar[19].hide">
													<check-value :value="props.item.aktivis.status"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaTerdaftar[20].hide">
													<check-value :value="props.item.aktivis.email"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaTerdaftar[21].hide">
													<check-value :value="props.item.aktivis.hp"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaTerdaftar[22].hide">
													<check-value :value="props.item.aktivis.kontak"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaTerdaftar[22].hide" v-html="$options.filters.dateTime(props.item.created_at)">
												</td>
											</tr>
										</template>	
									</data-viewer>
								</div>
							</transition>

							<!-- tabhadir -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-if="tabName == 'pesertaHadir'">
									<data-viewer :title="'peserta hadir'" :itemData="itemDataPesertaHadir" :columnData="columnDataPesertaHadir" :itemDataStat="itemDataPesertaHadirStat" :query="queryPesertaHadir" @fetch="fetchPesertaHadir" :excelDownloadUrl="excelDownloadUrl2" :isDasar="'true'" :isNoKolom="'true'" :isDisable="isDisableTable">

										<template slot="item-desktop" slot-scope="props">
											<tr class="text-nowrap" v-if="props.item">
												<td>{{ props.index + 1 }}</td>
												<td v-if="!columnDataPesertaHadir[1].hide">
													<img :src="'/images/aktivis/' + props.item.aktivis.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.aktivis && props.item.aktivis.gambar">
													<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaHadir[2].hide">
													<check-value :value="props.item.aktivis.name"></check-value>
												</td>
												<td v-if="!columnDataPesertaHadir[3].hide && !columnDataPesertaHadir[3].disable">
													<check-value :value="props.item.name_nametag"></check-value>
												</td>
												<td v-if="!columnDataPesertaHadir[4].hide">
													<check-value :value="props.item.name_sertifikat"></check-value>
												</td>
												<td v-if="!columnDataPesertaHadir[5].hide && !columnDataPesertaHadir[5].disable">
													<span v-html="$options.filters.date(props.item.datang)"></span>
												</td>
												<td v-if="!columnDataPesertaHadir[6].hide && !columnDataPesertaHadir[6].disable">
													<span v-html="$options.filters.date(props.item.pulang)"></span>
												</td>
												<td v-if="!columnDataPesertaHadir[7].hide" v-html="$options.filters.dateTime(props.item.tanggal_hadir)">
												</td>
												<td v-if="!columnDataPesertaHadir[8].hide">
													<check-value :value="props.item.keterangan"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaHadir[9].hide">
													<check-value :value="props.item.aktivis.kelamin"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaHadir[10].hide">
													<span v-if="props.item.aktivis.pekerjaan_aktif && props.item.aktivis.pekerjaan_aktif.tipe == 1">
														<check-value :value="props.item.aktivis.pekerjaan_aktif.cu.name" v-if="props.item.aktivis.pekerjaan_aktif.cu"></check-value>
														<span v-else>-</span>
													</span>
													<span v-else-if="props.item.aktivis.pekerjaan_aktif && props.item.aktivis.pekerjaan_aktif.tipe == 2">
														<check-value :value="props.item.aktivis.pekerjaan_aktif.lembaga_lain.name" v-if="props.item.aktivis.pekerjaan_aktif.lembaga_lain"></check-value>
														<span v-else>-</span>
													</span>
													<span v-else-if="props.item.aktivis.pekerjaan_aktif && props.item.aktivis.pekerjaan_aktif.tipe == 3">
														PUSKOPCUINA
													</span>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaHadir[11].hide" >
													<check-value :value="props.item.aktivis.pekerjaan_aktif.tingkat_name" v-if="props.item.aktivis.pekerjaan_aktif"></check-value>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaHadir[12].hide">
													<check-value :value="props.item.aktivis.pekerjaan_aktif.name" v-if="props.item.aktivis.pekerjaan_aktif"></check-value>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaHadir[13].hide">
													<check-value :value="props.item.aktivis.pendidikan_tertinggi.tingkat" v-if="props.item.aktivis.pendidikan_tertinggi"></check-value>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaHadir[14].hide">
													<check-value :value="props.item.aktivis.pendidikan_tertinggi.name" v-if="props.item.aktivis.pendidikan_tertinggi"></check-value>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaHadir[15].hide" v-html="$options.filters.date(props.item.aktivis.tanggal_lahir)">
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaHadir[16].hide">
													<check-value :value="props.item.aktivis.tempat_lahir"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaHadir[17].hide">
													<check-value :value="props.item.aktivis.tinggi"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaHadir[18].hide">
													<check-value :value="props.item.aktivis.agama"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaHadir[19].hide">
													<check-value :value="props.item.aktivis.status"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaHadir[20].hide">
													<check-value :value="props.item.aktivis.email"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaHadir[21].hide">
													<check-value :value="props.item.aktivis.hp"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaHadir[22].hide">
													<check-value :value="props.item.aktivis.kontak"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnDataPesertaHadir[22].hide" v-html="$options.filters.dateTime(props.item.created_at)">
												</td>
											</tr>
										</template>	
									</data-viewer>
								</div>
							</transition>

							<!-- tabstatistik -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-if="tabName == 'statistik'">
									<template v-if="item.pilih && item.pilih.length > 0">
										<div class="card" v-if="itemDataKeputusanCountStat == 'success' && itemDataKeputusanCount.length > 0">
											<div class="card-header bg-light">
												<h6 class="card-title">Keputusan</h6>
											</div>
											<div class="card-body">
												<div v-for="p in itemDataKeputusanCount" :key="p.id">
													<h7 class="font-weight-semibold mb-1">{{ p.name }}</h7>
													<!-- setuju -->
													<div class="card card-body pt-1 pb-1 mt-1 mb-1">
														<div class="row">
															<div class="col-sm-3 mb-1 mt-1">
																Setuju
															</div>
															<div class="col-sm-8 mb-1 mt-1">
																<div class="progress">
																	<div class="progress-bar-striped bg-primary" :style="{width: Math.round((p.setuju / p.total) * 100) + '%'}">
																		<span class="text-default font-size-lg">
																			&nbsp;
																			{{ Math.round((p.setuju / p.total) * 100) + '%' }}
																			&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
																		</span>
																	</div>
																</div>	
															</div>
															<div class="col-sm-1 mb-1 mt-1">
																{{ p.setuju }} / {{ p.total }}
															</div>
														</div>
													</div>
													<!-- tidak setuju -->
													<div class="card card-body pt-1 pb-1 mt-1 mb-1">
														<div class="row">
															<div class="col-sm-3 mb-1 mt-1">
																Tidak Setuju
															</div>
															<div class="col-sm-8 mb-1 mt-1">
																<div class="progress">
																	<div class="progress-bar-striped bg-danger" :style="{width: Math.round((p.taksetuju / p.total) * 100) + '%'}">
																		<span class="text-default font-size-lg">
																			&nbsp;
																			{{ Math.round((p.taksetuju / p.total) * 100) + '%' }}
																			&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
																		</span>
																	</div>
																</div>	
															</div>
															<div class="col-sm-1 mb-1 mt-1">
																{{ p.taksetuju }} / {{ p.total }}
															</div>
														</div>
													</div>
													<!-- tak ada -->
													<div class="card card-body pt-1 pb-1 mt-1 mb-1">
														<div class="row">
															<div class="col-sm-3 mb-1 mt-1">
																Tidak Punya Keputusan
															</div>
															<div class="col-sm-8 mb-1 mt-1">
																<div class="progress">
																	<div class="progress-bar-striped bg-secondary" :style="{width: Math.round((p.takada / p.total) * 100) + '%'}">
																		<span class="text-default font-size-lg">
																			&nbsp;
																			{{ Math.round((p.takada / p.total) * 100) + '%' }}
																			&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
																		</span>
																	</div>
																</div>	
															</div>
															<div class="col-sm-1 mb-1 mt-1">
																{{ p.takada }} / {{ p.total }}
															</div>
														</div>
													</div>
													<br/>
												</div>
											</div>
										</div>
									</template>
									<div class="card">
										<div class="card-header bg-light">
											<h6 class="card-title">CU Terdaftar</h6>
										</div>
										<data-table :items="itemDataPesertaTerdaftarCU" :columnData="columnDataCU" :itemDataStat="itemDataPesertaTerdaftarCUStat">
											<template slot="item-desktop" slot-scope="props">
												<tr v-if="props.item">
													<td>{{ props.index + 1 }}</td>
													<td>
														<check-value :value="props.item.name"></check-value>
													</td>
													<td>
														<check-value :value="props.item.lakilaki"></check-value>
													</td>
													<td>
														<check-value :value="props.item.perempuan"></check-value>
													</td>
													<td>
														<check-value :value="props.item.total"></check-value>
													</td>
												</tr>
											</template>	
										</data-table>
									</div>

									<div class="card">
										<div class="card-header bg-light">
											<h6 class="card-title">CU Hadir</h6>
										</div>
										<data-table :items="itemDataPesertaHadirCU" :columnData="columnDataCU" :itemDataStat="itemDataPesertaHadirCUStat">
											<template slot="item-desktop" slot-scope="props">
												<tr v-if="props.item">
													<td>{{ props.index + 1 }}</td>
													<td>
														<check-value :value="props.item.name"></check-value>
													</td>
													<td>
														<check-value :value="props.item.lakilaki"></check-value>
													</td>
													<td>
														<check-value :value="props.item.perempuan"></check-value>
													</td>
													<td>
														<check-value :value="props.item.total"></check-value>
													</td>
												</tr>
											</template>	
										</data-table>
									</div>
								</div>
							</transition>

						</div>

					</div>

				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize" :color="modalColor"
		 @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"
		 @backgroundClick="modalBackgroundClick">

		 <!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- peserta -->
			<template slot="modal-body1">
				<form-peserta 
				:mode="formModalMode"
				:selected="selectedItem"
				:item="item"
				:tingkat="item.sasaran"
				@tutup="modalTutup" v-if="state == 'tambahPeserta' || state == 'ubahPeserta'"></form-peserta>

				<form-peserta-batal :kelas="kelas" :id="selectedItem.id" :tipe="item.tipe"
				@tutup="modalTutup" v-else-if="state == 'batalPeserta'"></form-peserta-batal>
			</template>

			<!-- pertemuan -->
			<template slot="modal-body2">
				<form-materi 
				:mode="formModalMode"
				:selected="selectedItemMateri"
				:kegiatan_id="item.id"
				:kegiatan_tipe="item.tipe"
				@tutup="modalTutup" v-if="state == 'tambahMateri' || state == 'ubahMateri'"></form-materi>

				<!-- <form-pdf 
				:selected="selectedItemMateri"
				@tutup="modalTutup" v-else-if="state == 'lihatMateri'"></form-pdf> -->

				<form-tugas 
				:mode="formModalMode"
				:selected="selectedItemTugas"
				:kegiatan_id="item.id"
				:kegiatan_tipe="item.tipe"
				@tutup="modalTutup" v-if="state == 'tambahTugas'  || state == 'ubahTugas'"></form-tugas>

				<form-tugas-jawaban 
				:selected="selectedItemTugas"
				:kegiatan_id="item.id"
				:kegiatan_tipe="item.tipe"
				:tipeUser="tipeUser"
				@tutup="modalTutup" v-else-if="state == 'lihatTugas'"></form-tugas-jawaban>

				<form-status :kelas="kelas" :id="item.id" :status="item.status" :keteranganBatal="item.keteranganBatal"
				@tutup="modalTutup" v-else-if="state == 'statusPertemuan'"></form-status>

				<form-hadir :kelas="kelas" :item="item" :state="state" v-else-if="state == 'pesertaTerdaftar' || state == 'panitiaTerdaftar'"></form-hadir>
			</template>

			<!-- keputusan -->
			<template slot="modal-body3">
				<form-keputusan 
				:mode="formModalMode"
				:selected="selectedItemKeputusan"
				:kegiatan_id="item.id"
				:pilih="item.pilih"
				@tutup="modalTutup" v-if="state == 'tambahKeputusan' || state == 'ubahKeputusan'"></form-keputusan>

				<form-keputusan-komentar 
				:selected="selectedItemKeputusan"
				:kegiatan_id="item.id"
				@tutup="modalTutup" v-else-if="state == 'keputusanKomentar'"></form-keputusan-komentar>

				<form-pertanyaan 
				:mode="formModalMode"
				:selected="selectedItemPertanyaan"
				:kegiatan_id="item.id"
				:pilih="item.pilih"
				@tutup="modalTutup" v-if="state == 'tambahPertanyaan' || state == 'ubahPertanyaan'"></form-pertanyaan>

				<form-pertanyaan-komentar 
				:selected="selectedItemPertanyaan"
				:kegiatan_id="item.id"
				@tutup="modalTutup" v-else-if="state == 'pertanyaanKomentar'"></form-pertanyaan-komentar>
			</template>

		</app-modal>

	</div>
</template>

<script>
	import {
		mapGetters
	} from 'vuex';
	import _ from 'lodash';
	import pageHeader from "../../components/pageHeader.vue";
	import {
		toMulipartedForm
	} from '../../helpers/form';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formPeserta from "./formPeserta.vue";
	import formPesertaBatal from "./formPesertaBatal.vue";
	import Cleave from 'vue-cleave-component';
	import dataTable from '../../components/datatable.vue';
	import dataViewer from '../../components/dataviewer2.vue';
	import checkValue from '../../components/checkValue.vue';
	import formStatus from "./formStatus.vue";
	import formHadir from "./formHadir.vue";
	import formMateri from "./formMateri.vue";
	import formTugas from "./formTugas.vue";
	import formTugasJawaban from "./formTugasJawaban.vue";
	import formKeputusan from "./formKeputusan.vue";
	import formKeputusanKomentar from "./formKeputusanKomentar.vue";
	import formPertanyaan from "./formPertanyaan.vue";
	import formPertanyaanKomentar from "./formPertanyaanKomentar.vue";
	// import formPdf from "./formPdf.vue";
	import FileSaver from 'file-saver';
	
	export default {
		components: {
			pageHeader,
			appModal,
			message,
			Cleave,
			dataTable,
			dataViewer,
			checkValue,
			formPeserta,
			formPesertaBatal,
			formStatus,
			formHadir,
			formMateri,
			formTugas,
			formTugasJawaban,
			// formPdf,
			formKeputusan,
			formKeputusanKomentar,
			formPertanyaan,
			formPertanyaanKomentar,
		},
		data() {
			return {
				title: 'Detail Pertemuan BKCU',
				titleDesc: 'Informasi detail pertemuan BKCU',
				titleIcon: 'icon-stack2',
				level: 2,
				level2Title: 'Pertemuan BKCU',
				kelas: 'kegiatanBKCU',
				sasaran: [],
				tabName: 'info',
				tipeUser: '',
				tempatData: '',
				isDisableTable: false,
				formPesertaBatal: {
					keterangan: ''
				},
				cleaveOption: {
					date: {
						date: true,
						datePattern: ['Y', 'm', 'd'],
						delimiter: '-'
					},
					year: {
						date: true,
						datePattern: ['Y'],
					},
					number12: {
						numeral: true,
						numeralIntegerScale: 12,
						numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
					},
					number3: {
						numeral: true,
						numeralIntegerScale: 3,
						numeralDecimalScale: 0,
						stripLeadingZeroes: false
					},
					numeric: {
						numeral: true,
						numeralThousandsGroupStyle: 'thousand',
						numeralDecimalScale: 2,
						numeralDecimalMark: ',',
						delimiter: '.'
					}
				},
				queryPesertaTerdaftar: {
					order_column: "created_at",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				queryPesertaHadir: {
					order_column: "created_at",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				queryMateri: {
					order_column: "name",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				queryTugas: {
					order_column: "created_at",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				queryKeputusan: {
					order_column: "created_at",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				queryPertanyaan: {
					order_column: "created_at",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				excelDownloadUrl: '',
				excelDownloadUrl2: '',
				columnDataPesertaTerdaftar: [
					{
						title: 'No.',
					},
					{
						title: 'Status',
						name: 'statusPertemuan',
						tipe: 'string',
						sort: true,
						filter: false,
					},
					{
						title: 'Foto',
						name: 'gambar',
						hide: false,
					},
					{
						title: 'Nama',
						name: 'aktivis.name',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
					{
						title: 'Nama Di Nametag',
						name: 'name_nametag',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Nama Di Sertifikat',
						name: 'name_sertifikat',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. Datang',
						name: 'datang',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. Pulang',
						name: 'pulang',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Keterangan',
						name: 'keterangan',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Gender',
						name: 'aktivis.kelamin',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'CU',
						name: 'aktivis.pekerjaan_aktif.cu.name',
						tipe: 'string',
					},
					{
						title: 'Tingkat',
						name: 'aktivis.pekerjaan_aktif.tingkat_name',
						tipe: 'string',
					},
					{
						title: 'Jabatan',
						name: 'aktivis.pekerjaan_aktif.name',
						tipe: 'string',
					},
					{
						title: 'Pendidikan',
						name: 'aktivis.pendidikan_tertinggi.tingkat',
						tipe: 'string',
					},
					{
						title: 'Jurusan',
						name: 'aktivis.pendidikan_tertinggi.name',
						tipe: 'string',
					},
					{
						title: 'Tgl. Lahir',
						name: 'aktivis.tanggal_lahir',
						tipe: 'datetime',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tempat Lahir',
						name: 'aktivis.tempat_lahir',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tinggi',
						name: 'aktivis.tinggi',
						tipe: 'numeric',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Agama',
						name: 'aktivis.agama',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Status Pernikahan',
						name: 'aktivis.status',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Email',
						name: 'aktivis.email',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'No. Hp',
						name: 'aktivis.hp',
						tipe: 'numeric',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Kontak Lain',
						name: 'aktivis.kontak',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. Daftar',
						name: 'created_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
				],
				columnDataPesertaHadir: [
					{
						title: 'No.',
					},
					{
						title: 'Foto',
						name: 'gambar',
						hide: false,
					},
					{
						title: 'Nama',
						name: 'aktivis.name',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
					{
						title: 'Nama Di Nametag',
						name: 'name_nametag',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Nama Di Sertifikat',
						name: 'name_sertifikat',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. Datang',
						name: 'datang',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. Pulang',
						name: 'pulang',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. / Waktu Hadir',
						name: 'tanggal_hadir',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Keterangan',
						name: 'keterangan',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Gender',
						name: 'aktivis.kelamin',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'CU',
						name: 'aktivis.pekerjaan_aktif.cu.name',
						tipe: 'string',
					},
					{
						title: 'Tingkat',
						name: 'aktivis.pekerjaan_aktif.tingkat_name',
						tipe: 'string',
					},
					{
						title: 'Jabatan',
						name: 'aktivis.pekerjaan_aktif.name',
						tipe: 'string',
					},
					{
						title: 'Pendidikan',
						name: 'aktivis.pendidikan_tertinggi.tingkat',
						tipe: 'string',
					},
					{
						title: 'Jurusan',
						name: 'aktivis.pendidikan_tertinggi.name',
						tipe: 'string',
					},
					{
						title: 'Tgl. Lahir',
						name: 'aktivis.tanggal_lahir',
						tipe: 'datetime',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tempat Lahir',
						name: 'aktivis.tempat_lahir',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tinggi',
						name: 'aktivis.tinggi',
						tipe: 'numeric',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Agama',
						name: 'aktivis.agama',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Status Pernikahan',
						name: 'aktivis.status',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Email',
						name: 'aktivis.email',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'No. Hp',
						name: 'aktivis.hp',
						tipe: 'numeric',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Kontak Lain',
						name: 'aktivis.kontak',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. / Waktu Daftar',
						name: 'created_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
				],
				columnDataMateri: [
					{
						title: 'No.',
					},
					{
						title: 'Nama',
						name: 'name',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
					{
						title: 'Tipe',
						name: 'tipe',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. / Waktu Buat',
						name: 'created_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
				],
				columnDataTugas: [
					{
						title: 'No.',
					},
					{
						title: 'Nama',
						name: 'name',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
					{
						title: 'Tipe',
						name: 'tipe',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. / Waktu Buat',
						name: 'created_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
				],
				columnDataKeputusan: [
					{
						title: 'No.',
					},
					{
						title: 'CU',
						name: 'cu.name',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
					{
						title: 'Tgl. / Waktu Buat',
						name: 'created_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
				],
				columnDataPertanyaan: [
					{
						title: 'No.',
					},
					{
						title: 'CU',
						name: 'cu.name',
						tipe: 'string',
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
					{
						title: 'Tgl. / Waktu Buat',
						name: 'created_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
				],
				columnDataPanitia: [
					{ title: 'No.' },
					{ title: 'Foto' },
					{ title: 'Nama' },
					{ title: 'Lembaga' },
					{ title: 'Asal' },
					{ title: 'Peran' },
					{ title: 'keterangan' },
					{ title: 'Email' },
					{ title: 'No. Hp' },
				],
				columnDataCU: [
					{ title: 'No.' },
					{ title: 'CU' },
					{ title: 'Laki-Laki' },
          { title: 'Perempuan' },
					{ title: 'Total' },
				],
				itemDataPanitia: [],
				selectedItem: '',
				selectedItemMateri: '',
				selectedItemTugas: '',
				selectedItemKeputusan: '',
				selectedItemPertanyaan: '',
				formModalMode: '',
				itemDataPanitia: [],
				itemDataPanitiaStat: 'success',
				cancelState: 'methods',
				state: '',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalSize: '',
				submited: false,
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		watch: {
			itemStat(value) {
				if (value === "success") {
					this.hideColumn();
					this.checkTipe(this.item.tipe);
					
					if(this.currentUser.aktivis){
						if(this.item.status == 4){
							this.checkPanitia();
						}
					}else{
						this.modalOpen('pesertaTidakTerdaftar');
					}

					this.fetchPesertaTerdaftar(this.queryPesertaTerdaftar);
					this.fetchCountPeserta();
					this.fetchCountKeputusan();
					this.fetchCountPertanyaan();

					var valDalam;
					for(valDalam of this.item.panitia_dalam){
						this.itemDataPanitia.push(valDalam);
					}

					var valLuar;
					for(valLuar of this.item.panitia_luar){
						this.itemDataPanitia.push(valLuar);
					}

					var valLuarLembaga;
					for(valLuarLembaga of this.item.panitia_luar_lembaga){
						this.itemDataPanitia.push(valLuarLembaga);
					}
				}
			},
			checkPanitiaDataStat(value){
				if(value == 'success'){
					if(this.checkPanitiaData){
						this.tipeUser = this.checkPanitiaData.peran;
						if(!this.checkPanitiaData.tanggal_hadir){
							this.modalOpen('panitiaTerdaftar');
						}
					}else{
						this.checkPeserta();
					}
				}
			},
			checkPesertaDataStat(value){
				if(this.state != 'tambahPeserta' && this.state != 'ubahPeserta'){
					if(value == 'success'){
						if(this.checkPesertaData){
							this.tipeUser = 'peserta';
							if(!this.checkPesertaData.tanggal_hadir){
								this.modalOpen('pesertaTerdaftar');
							}
						}else{
							this.modalOpen('pesertaTidakTerdaftar');
						}
					}
				}
			},
			updateStat(value) {
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if (value === "success") {
					this.modalTitle = this.updateResponse.message;
					if (this.state == 'statusPertemuan'){
						this.fetch();
					}else if(this.state == 'tambahKeputusan' || this.state == 'hapusKeputusan'){
						this.fetchCountKeputusan();
					}else if(this.state == 'tambahPertanyaan' || this.state == 'hapusPertanyaan'){
						this.fetchCountPertanyaan();
					}
				} else {
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			}
		},
		methods: {
			fetch() {
				this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
			},
			fetchPesertaTerdaftar(params){
				if(this.item.status == '2'){
					if(this.currentUser.id_cu == 0){
						this.$store.dispatch(this.kelas + '/indexPeserta', [params,this.item.id]);
						this.excelDownloadUrl = this.kelas + '/indexPeserta/' + this.item.id;					
					}else{
						this.$store.dispatch(this.kelas + '/indexPesertaCu', [params,this.item.id, this.currentUser.id_cu]);
						this.excelDownloadUrl = this.kelas + '/indexPesertaCu/' + + this.item.id + '/' + this.$route.params.cu;
					}
				}else{
					this.$store.dispatch(this.kelas + '/indexPeserta', [params,this.item.id]);
					this.excelDownloadUrl = this.kelas + '/indexPeserta/' + this.item.id;
				}
			},
			fetchPesertaHadir(params){
				this.$store.dispatch(this.kelas + '/indexPesertaHadir', [params,this.item.id]);
				this.excelDownloadUrl2 = this.kelas + '/indexPesertaHadir';	
			},
			fetchMateri(params) {
				this.$store.dispatch(this.kelas + '/indexMateri', [params,this.item.id]);
			},
			fetchTugas(params) {
				this.$store.dispatch(this.kelas + '/indexTugas', [params,this.item.id]);
			},
			fetchKeputusan(params) {
				this.$store.dispatch(this.kelas + '/indexKeputusan', [params,this.item.id]);
			},
			fetchPertanyaan(params) {
				this.$store.dispatch(this.kelas + '/indexPertanyaan', [params,this.item.id]);
			},
			fetchCountPeserta() {
				this.$store.dispatch(this.kelas + '/countPeserta', this.item.id);
				if(this.item.tipe_tempat == 'ONLINE')
					this.$store.dispatch(this.kelas + '/countPesertaHadir', this.item.id);
			},
			fetchCountKeputusan() {
				if(this.item.keputusan_cu){
					this.$store.dispatch(this.kelas + '/countKeputusan', [this.item.id, this.currentUser.id_cu, this.currentUser.id]);
				}
			},
			fetchCountPertanyaan() {
				if(this.item.pertanyaan_cu){
					this.$store.dispatch(this.kelas + '/countPertanyaan', [this.item.id, this.currentUser.id_cu, this.currentUser.id]);
				}
			},
			fetchStatistik(){
				this.$store.dispatch(this.kelas + '/indexPesertaCountCu', this.item.id);
				this.$store.dispatch(this.kelas + '/indexPesertaHadirCountCu', this.item.id);
				this.$store.dispatch(this.kelas + '/indexKeputusanCount', this.item.id);
			},
			hideColumn(){
				if(this.item.tipe_tempat == 'ONLINE'){
					this.columnDataPesertaTerdaftar[4].disable = true;
					this.columnDataPesertaTerdaftar[6].disable = true;
					this.columnDataPesertaTerdaftar[7].disable = true;
					this.columnDataPesertaHadir[3].disable = true;
					this.columnDataPesertaHadir[5].disable = true;
					this.columnDataPesertaHadir[6].disable = true;
				}else{
					this.columnDataPesertaTerdaftar[4].disable = false;
					this.columnDataPesertaTerdaftar[6].disable = false;
					this.columnDataPesertaTerdaftar[7].disable = false;
					this.columnDataPesertaHadir[3].disable = false;
					this.columnDataPesertaHadir[5].disable = false;
					this.columnDataPesertaHadir[6].disable = false;
				}
			},
			checkTipe(tipe){
				if(tipe == 'diklat_bkcu'){
					this.level2Title = 'Diklat BKCU';
				}else{
					this.level2Title = 'Pertemuan BKCU';
				}
				this.title = 'Detail ' + this.level2Title;
				this.titleDesc = 'Informasi detail ' + this.level2Title;
			},
			checkPeserta(){
				this.$store.dispatch(this.kelas + '/checkPeserta', [this.item.id, this.currentUser.id_aktivis]);
			},
			checkPanitia(){
				if(this.currentUser.aktivis){
					this.$store.dispatch(this.kelas + '/checkPanitia', [this.item.id, this.currentUser.id_aktivis]);
				}else{
					this.modalOpen('userTidakAktivis');
				}
			},
			changeTab(value){
				this.tabName = value;
				if(value == 'pesertaTerdaftar'){
					this.fetchPesertaTerdaftar(this.queryPesertaTerdaftar);
				}else if(value == 'pesertaHadir'){
					this.fetchPesertaHadir(this.queryPesertaHadir);
				}else if(value == 'materi'){
					this.fetchMateri(this.queryMateri);
				}else if(value == 'tugas'){
					this.fetchTugas(this.queryTugas);
				}else if(value == 'keputusan'){
					this.fetchKeputusan(this.queryKeputusan);
				}else if(value == 'pertanyaan'){
					this.fetchPertanyaan(this.queryPertanyaan);
				}else if(value == 'statistik'){
					this.fetchStatistik();
				}
			},
			back() {
				this.$router.push({name: this.kelas, params:{tipe:this.item.tipe, periode: this.momentYear()}});
			},
			ubahKegiatan(id) {
				this.$router.push({name: this.kelas + 'EditDetail', params: { id: id }});
			},
			selectedRow(item) {
				this.selectedItem = item;
			},
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.modalSize = '';
				this.state = state;
				this.isDisableTable = true;

				if (isMobile) {
					if(this.state == 'ubahMateri' || this.state == 'hapusMateri' || this.state == 'lihatMateri'){
						this.selectedItemMateri = itemMobile;
					}else if(this.state == 'ubahKeputusan' || this.state == 'hapusKeputusan' || this.state == 'keputusanKomentar'){
						this.selectedItemKeputusan = itemMobile;
					}else if(this.state == 'ubahTugas' || this.state == 'hapusTugas' || this.state == 'lihatTugas'){
						this.selectedItemTugas = itemMobile;
					}else{
						this.selectedItemPertanyaan = itemMobile;
					}
				}

				if (state == 'hapusPertemuan') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Diklat ' + this.item.name + ' ?';
					this.modalButton = 'Iya, Hapus';
				} else if (state == 'hapusPeserta') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Peserta ' + this.selectedItem.aktivis.name + ' ?';
					this.modalButton = 'Iya, Hapus';
				}else if(state == 'alasanPeserta'){
					this.modalState = 'content-tutup';
					this.modalColor = '';
					this.modalTitle = 'Maaf anda belum bisa mengikuti pertemuan ini';
					this.modalContent = 'Alasan penolakkan: <br/>' + this.selectedItem.keteranganBatal;
				}else if (state == 'batalPeserta') {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tolak Peserta ' + this.selectedItem.aktivis.name + ' ?';
					this.modalButton = 'Ok';
				} else if (state == 'statusPertemuan') {
					this.modalState = 'normal2';
					this.modalTitle = 'Ubah status ' + this.item.name + ' ini?';
					this.modalColor = 'bg-primary';
				} else if (state == 'ubahPeserta') {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Peserta';
					this.modalSize = 'modal-lg';
					this.formModalMode = 'edit';
				} else if (state == 'tambahPeserta') {
					if(this.countPeserta >= this.item.peserta_max ){
						this.modalState = 'content-tutup';
						this.modalColor = '';

						this.modalTitle = 'Diklat sudah penuh';
						this.modalContent = 'Maaf anda tidak bisa mendaftarkan peserta lagi, karena kuota peserta pada diklat ini sudah terpenuhi.';
					}
					
					if(this.itemDataPesertaTerdaftar.data.length >= this.item.peserta_max_cu && this.currentUser.id_cu != 0){
						this.modalState = 'content-tutup';
						this.modalColor = '';
						this.modalTitle = 'CU anda tidak bisa mendaftarkan peserta lagi';
						this.modalContent = 'Maaf anda tidak bisa mendaftarkan peserta lagi, karena jumlah maksimal peserta per CU adalah ' + this.item.peserta_max_cu + ' orang.';
					}else{
						this.modalState = 'normal1';
						this.modalColor = 'bg-primary';
						this.modalTitle = 'Tambah Peserta';
						this.modalSize = 'modal-lg';
						this.formModalMode = 'create';
					}
				}else if(state == 'pesertaTidakTerdaftar'){
					this.modalState = 'fail';
					this.modalColor = '';
					this.modalTitle = 'Maaf anda tidak terdaftar dalam pertemuan ini';
					this.modalContent = 'Maaf anda tidak terdaftar dalam pertemuan ini, silahkan pastikan anda sudah mendaftar di pertemuan ini';
				}else if(state == 'userTidakAktivis'){
					this.modalState = 'fail';
					this.modalColor = '';
					this.modalTitle = 'Maaf anda tidak bisa melanjutkan';
					this.modalContent = 'Anda tidak bisa melanjutkan karena user anda tidak memiliki informasi aktivis, silahkan tambahkan data aktivis kepada user anda.';
				}else if(state == 'pesertaTerdaftar'){
					this.modalState = 'normal2';
					this.modalTitle = 'Masuk ' + this.item.name ;
					this.modalColor = 'bg-primary';
				}else if(state == 'panitiaTerdaftar'){
					this.modalState = 'normal2';
					this.modalTitle = 'Masuk ' + this.item.name ;
					this.modalColor = 'bg-primary';
				} else if (state == 'ubahMateri') {
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Materi';
					this.formModalMode = 'edit';
				} else if (state == 'tambahMateri') {
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Materi';
					this.formModalMode = 'create';
				} else if (state == 'hapusMateri') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Materi ' + this.selectedItemMateri.name + ' ?';
					this.modalButton = 'Iya, Hapus';
				} else if (state == 'lihatMateri'){
					if(this.selectedItemMateri.tipe != 'pdf'){
						this.modalImageOpen('/files/pertemuan/' + this.selectedItemMateri.filename + '.jpg');
					}else{
						this.modalTitle = 'Lihat Materi';
						this.modalState = 'normal2';
						this.modalColor = 'bg-primary';
						this.modalSize = 'modal-lg';
					}
				} else if (state == 'tambahTugas') {
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Tugas';
					this.formModalMode = 'create';
				} else if (state == 'ubahTugas') {
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Tugas';
					this.formModalMode = 'edit';
				} else if (state == 'hapusTugas') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Tugas ' + this.selectedItemTugas.name + ' ?';
					this.modalButton = 'Iya, Hapus';
				} else if (state == 'lihatTugas'){
					this.modalTitle = 'Lihat Tugas';
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalSize = 'modal-lg';
				} else if (state == 'tambahKeputusan') {
					if(this.item.keputusan_cu){
						if(this.countKeputusan[0] >= this.item.keputusan_cu){
							this.modalState = 'content-tutup';
							this.modalColor = '';
	
							this.modalTitle = 'CU anda tidak bisa menambahkan keputusan lagi';
							this.modalContent = 'Maaf anda tidak bisa memberikan keputusan lagi, karena jumlah keputusan maksimal per CU adalah ' + this.item.keputusan_cu + ' kali.';
						}else if(this.countKeputusan[1] >= this.item.keputusan_user){
							this.modalState = 'content-tutup';
							this.modalColor = '';
	
							this.modalTitle = 'Anda tidak bisa menambahkan keputusan lagi';
							this.modalContent = 'Maaf anda tidak bisa memberikan keputusan lagi, karena jumlah keputusan maksimal per peserta adalah ' + this.item.keputusan_user + ' kali.';
						}else{
							this.modalState = 'normal3';
							this.modalColor = 'bg-primary';
							this.modalTitle = 'Tambah Keputusan';
							this.formModalMode = 'create';
							this.modalSize = 'modal-lg';
						}
					}else{
						this.modalState = 'normal3';
						this.modalColor = 'bg-primary';
						this.modalTitle = 'Tambah Keputusan';
						this.formModalMode = 'create';
						this.modalSize = 'modal-lg';
					}
				} else if (state == 'hapusKeputusan') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Keputusan ini ?';
					this.modalButton = 'Iya, Hapus';
				} else if (state == 'ubahKeputusan') {
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Keputusan';
					this.formModalMode = 'edit';
					this.modalSize = 'modal-lg';
				} else if (state == 'keputusanKomentar') {
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Komentar Keputusan';
					this.modalSize = 'modal-lg';
				} else if (state == 'tambahPertanyaan') {
					if(this.item.pertanyaan_cu){
						if(this.countPertanyaan[0] >= this.item.pertanyaan_cu){
							this.modalState = 'content-tutup';
							this.modalColor = '';
	
							this.modalTitle = 'CU anda tidak bisa menambahkan pertanyaan lagi';
							this.modalContent = 'Maaf anda tidak bisa memberikan pertanyaan lagi, karena jumlah pertanyaan maksimal per CU adalah ' + this.item.pertanyaan_cu + ' kali.';
						}else if(this.countPertanyaan[1] >= this.item.pertanyaan_user){
							this.modalState = 'content-tutup';
							this.modalColor = '';
	
							this.modalTitle = 'Anda tidak bisa menambahkan pertanyaan lagi';
							this.modalContent = 'Maaf anda tidak bisa memberikan pertanyaan lagi, karena jumlah pertanyaan maksimal per peserta adalah ' + this.item.pertanyaan_user + ' kali.';
						}else{
							this.modalState = 'normal3';
							this.modalColor = 'bg-primary';
							this.modalTitle = 'Tambah Pertanyaan';
							this.formModalMode = 'create';
							this.modalSize = 'modal-lg';
						}
					}else{
						this.modalState = 'normal3';
						this.modalColor = 'bg-primary';
						this.modalTitle = 'Tambah Pertanyaan';
						this.formModalMode = 'create';
						this.modalSize = 'modal-lg';
					}
				} else if (state == 'hapusPertanyaan') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Pertanyaan ini ?';
					this.modalButton = 'Iya, Hapus';
				} else if (state == 'ubahPertanyaan') {
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Pertanyaan';
					this.formModalMode = 'edit';
					this.modalSize = 'modal-lg';
				} else if (state == 'pertanyaanKomentar') {
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Komentar Pertanyaan';
					this.modalSize = 'modal-lg';
				}
			},
			modalImageOpen(content) {
				this.modalShow = true;
				this.modalState = 'image';
				this.modalContent = content;
				this.modalSize = '';
				this.modalButton = 'Ok';
			},
			modalConfirmOk() {
				this.modalShow = false;

				if (this.state == 'hapusPertemuan') {
					this.$store.dispatch(this.kelas + '/destroy', this.item.id);
				}else if (this.state == 'hapusPeserta') {
					this.$store.dispatch(this.kelas + '/destroyPeserta', this.selectedItem.id);
				}else if (this.state == 'hapusMateri') {
					this.$store.dispatch(this.kelas + '/destroyMateri', [this.item.tipe, this.selectedItemMateri.id]);
				}else if (this.state == 'hapusTugas') {
					this.$store.dispatch(this.kelas + '/destroyTugas', [this.item.tipe, this.selectedItemTugas.id]);
				}else if (this.state == 'hapusKeputusan') {
					this.$store.dispatch(this.kelas + '/destroyKeputusan', this.selectedItemKeputusan.id);
				}else if (this.state == 'hapusPertanyaan') {
					this.$store.dispatch(this.kelas + '/destroyPertanyaan', this.selectedItemPertanyaan.id);
				}
			},
			modalTutup() {
				if(this.state == 'tambahPeserta' || this.state == 'ubahPeserta' || this.state == 'hapusPeserta' || this.state == 'batalPeserta'){
					this.changeTab('pesertaTerdaftar');
					this.fetchCountPeserta();
				}else if(this.state == 'tambahMateri' || this.state == 'ubahMateri' || this.state == 'hapusMateri'){
					this.changeTab('materi');
				}else if(this.state == 'tambahTugas' || this.state == 'ubahTugas' || this.state == 'hapusTugas'){
					this.changeTab('tugas');
				}else if(this.state == 'tambahKeputusan' || this.state == 'ubahKeputusan' || this.state == 'hapusKeputusan' || this.state == 'keputusanKomentar'){
					this.changeTab('keputusan');
				}else if(this.state == 'tambahPertanyaan' || this.state == 'ubahPertanyaan' || this.state == 'hapusPertanyaan' || this.state == 'pertanyaanKomentar'){
					this.changeTab('pertanyaan');	
				}else if(this.state == 'hapusPertemuan'){
					this.back();
				}else if(this.state == 'pesertaTidakTerdaftar'){
					this.$router.push({name: 'dashboard'});
				}else if(this.state == 'pesertaTerdaftar' || this.state == 'panitiaTerdaftar'){
					if(this.updateStat == 'success'){
						this.modalShow = false;
					}else{
						this.$router.push({name: 'dashboard'});
					}
				}
				
				this.isDisableTable = false;
				this.modalShow = false;
			},
			modalBackgroundClick() {
				if (this.modalState === 'success') {
					this.modalTutup;
				} else if (this.modalState === 'loading' || this.state === 'pesertaTerdaftar' || this.state === 'panitiaTerdaftar') {
					// do nothing
				} else {
					this.modalShow = false
				}
				this.isDisableTable = false;
			},
			downloadMateri(filename){
				if(this.item.tipe == 'diklat_bkcu'){
					axios.get('/api/download_folder/' + filename + '/diklat', {
					responseType: 'blob'})
					.then(response => {
						FileSaver.saveAs(response.data, filename)
					});
				}else if(this.item.tipe == 'pertemuan_bkcu'){
					axios.get('/api/download_folder/' + filename + '/pertemuan', {
					responseType: 'blob'})
					.then(response => {
						FileSaver.saveAs(response.data, filename)
					});
				}
      },
			momentYear() {
				return moment().year();
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('kegiatanBKCU', {
				item: 'data',
				itemStat: 'dataStat',
				checkPesertaData: 'data2',
				checkPesertaDataStat: 'dataStat2',
				checkPanitiaData: 'data3',
				checkPanitiaDataStat: 'dataStat3',
				itemDataPesertaTerdaftar: 'dataS',
				itemDataPesertaTerdaftarStat: 'dataStatS',
				itemDataPesertaHadir: 'dataS2',
				itemDataPesertaHadirStat: 'dataStatS2',
				itemDataMateri: 'dataS3',
				itemDataMateriStat: 'dataStatS3',
				itemDataKeputusan: 'dataS4',
				itemDataKeputusanStat: 'dataStatS4',
				itemDataKeputusan: 'dataS4',
				itemDataKeputusanStat: 'dataStatS4',
				itemDataPertanyaan: 'dataS9',
				itemDataPertanyaanStat: 'dataStatS9',
				itemDataTugas: 'dataS10',
				itemDataTugasStat: 'dataStatS10',
				itemDataPesertaTerdaftarCU: 'dataS6',
				itemDataPesertaTerdaftarCUStat: 'dataStatS6',
				itemDataPesertaHadirCU: 'dataS7',
				itemDataPesertaHadirCUStat: 'dataStatS7',
				itemDataKeputusanCount: 'dataS8',
				itemDataKeputusanCountStat: 'dataStatS8',
				countPeserta: 'count',
				countPesertaStat: 'countStat',
				countPesertaHadir: 'count2',
				countPesertaHadirStat: 'countStat2',
				countKeputusan: 'count3',
				countKeputusanStat: 'countStat3',
				countPertanyaan: 'count4',
				countPertanyaanStat: 'countStat4',
				updateResponse: 'update',
				updateStat: 'updateStat',
			}),
		}
	}
</script>