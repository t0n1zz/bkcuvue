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
								<img :src="'/images/pertemuan/' + item.gambar + '.jpg'" class="img-fluid wmin-sm" v-if="item.gambar">
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

									<!-- ubahPeserta -->
									<button class="btn btn-light btn-block mb-2" @click.prevent="ubahPesertaData(item.id)" v-if="currentUser.can && currentUser.can['update_pertemuan_bkcu']">
										<i class="icon-pencil5"></i> Ubah Pertemuan
									</button>

									<!-- status -->
									<button class="btn btn-light btn-block mb-2" @click.prevent="modalOpen('statusPertemuan')" v-if="currentUser.can && currentUser.can['update_pertemuan_bkcu']" >
										<i class="icon-calendar5"></i> Status Pertemuan
									</button>

									<!-- status -->
									<button class="btn btn-light btn-block mb-2" @click.prevent="modalOpen('hapusPertemuan')" v-if="currentUser.can && currentUser.can['destroy_pertemuan_bkcu'] && item.status == 1">
										<i class="icon-bin2"></i> Hapus Pertemuan
									</button>

									<hr v-if="currentUser.can['destroy_pertemuan_bkcu'] || currentUser.can['update_pertemuan_bkcu']" />

									<!-- daftar -->
									<button class="btn bg-warning-400 btn-block mb-2" @click.prevent="modalOpen('tambahPeserta')" v-if="currentUser.id_cu == 0">
										<i class="icon-plus22"></i> Daftar Peserta
									</button>

									<button class="btn bg-warning-400 btn-block mb-2" @click.prevent="modalOpen('tambahPeserta')" :disabled="item.status != 2" v-if="currentUser.can && currentUser.can['index_pertemuan_bkcu'] && currentUser.id_cu != 0">
										<i class="icon-plus22"></i> Daftar Peserta
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
										<tr>
											<td class="font-weight-semibold" >Peserta Terdaftar:</td>
											<td class="text-right">{{ countPeserta }} orang</td>
										</tr>
										<tr v-if="item.tipe_tempat == 'ONLINE'">
											<td class="font-weight-semibold">Peserta Hadir:</td>
											<td class="text-right">{{ countPesertaHadir }} orang</td>
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
										<label v-for="sasaran in item.sasaran" class="badge badge-primary ml-1">
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
									<a href="#" @click.prevent="modalImageShow('/images/tempat/' + item.tempat.gambar + '.jpg')" v-if="item.tempat && item.tempat.gambar">
										<img :src="'/images/tempat/' + item.tempat.gambar + 'n.jpg'" class="card-img img-fluid" >
										<span class="card-img-actions-overlay card-img"><i class="icon-enlarge6 icon-2x"></i></span>
									</a>
									<a href="#" @click.prevent="modalImageShow('/images/no_image.jpg')" v-else>
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
									Belum menentukan tempat pelatihan
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
												Umum</a></li>
										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'materi'}" @click.prevent="changeTab('materi')"><i class="icon-files-empty mr-2"></i>
												Materi</a></li>	
										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'tanggapan'}" @click.prevent="changeTab('tanggapan')" v-if="item.tipe_tempat == 'ONLINE'"><i class="icon-bubble2 mr-2"></i>
												Tanggapan</a></li>	
										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'pesertaTerdaftar'}" @click.prevent="changeTab('pesertaTerdaftar')"><i class="icon-people mr-2"></i>
											<span v-if="item.tipe_tempat == 'ONLINE'">Terdaftar</span>
											<span v-else>Peserta</span>
										</a></li>
										<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'pesertaHadir'}" @click.prevent="changeTab('pesertaHadir')" v-if="item.tipe_tempat == 'ONLINE'"><i class="icon-accessibility mr-2"></i>
												Hadir</a></li>						
									</ul>
								</div>

							</div>

							<!-- informasi -->
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
													<td>
														<check-value :value="props.item.kelamin"></check-value>
													</td>
													<td>
														<check-value :value="props.item.pivot.peran"></check-value>
													</td>
													<td>
														<check-value :value="props.item.pivot.keterangan"></check-value>
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
															Puskopdit BKCU Kalimantan
														</span>
														<span v-else>-</span>
													</td>
													<td v-if="props.item.pivot.asal == 'dalam'">
														<check-value :value="props.item.pekerjaan_aktif.name" v-if="props.item.pekerjaan_aktif"></check-value>
														<span v-else>-</span>
													</td>
													<td v-if="props.item.pivot.asal == 'luar'">
														<check-value :value="props.item.lembaga"></check-value>
													</td>
													<td v-if="props.item.pivot.asal == 'luar'">
														<check-value :value="props.item.pekerjaan"></check-value>
													</td>
													<td v-html="$options.filters.date(props.item.tanggal_lahir)">
													</td>
													<td>
														<check-value :value="props.item.tempat_lahir"></check-value>
													</td>
													<td>
														<check-value :value="props.item.agama"></check-value>
													</td>
													<td>
														<check-value :value="props.item.status"></check-value>
													</td>
													<td>
														<check-value :value="props.item.email"></check-value>
													</td>
													<td>
														<check-value :value="props.item.hp"></check-value>
													</td>
													<td>
														<check-value :value="props.item.kontak"></check-value>
													</td>
													
												</tr>
											</template>	
										</data-table>
									</div>

								</div>
							</transition>

							<!-- materi -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'materi'">
									<div class="card card-body">

									</div>
								</div>
							</transition>	

							<!-- tanggapan -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'tanggapan'">
									<div class="card card-body">

									</div>
								</div>
							</transition>		

							<!-- peserta terdaftar -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-if="tabName == 'pesertaTerdaftar'">
									<data-viewer :title="'peserta terdaftar'" :itemData="itemData" :columnData="columnData" :itemDataStat="itemDataStat" :query="query" @fetch="fetchPesertaTerdaftar" :excelDownloadUrl="excelDownloadUrl" :isDasar="'true'" :isNoKolom="isNoKolom" :isNoExcel="isNoExcel" :isDisable="isDisableTablePeserta">

										<!-- if bkcu -->
										<template slot="button-desktop" v-if="currentUser.id_cu == 0">
											<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahPeserta')">
												<i class="icon-plus22"></i> Tambah
											</button>

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahPeserta')"
											:disabled="!selectedItem.id || selectedItem.status != 1" >
												<i class="icon-pencil5"></i> Ubah
											</button>

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusPeserta')" :disabled="!selectedItem.id || selectedItem.status != 1" v-if="item.status == 2 && selectedItem.status != 3">
												<i class="icon-bin2"></i> Hapus
											</button>

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('batalPeserta')" :disabled="!selectedItem.id || selectedItem.status != 1">
												<i class="icon-bin2"></i> Tolak
											</button>

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('alasanPeserta')" v-if="selectedItem.status == 3">
												<i class="icon-eye"></i> Lihat Alasan Penolakan
											</button>
										</template>

										<!-- if cu -->
										<template slot="button-desktop" v-if="currentUser.id_cu != 0">
											<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahPeserta')" v-if="item.status == 2">
												<i class="icon-plus22"></i> Tambah
											</button>

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahPeserta')"
											:disabled="!selectedItem.id || selectedItem.status != 1" v-if="item.status == 2 && selectedItem.status != 3" >
												<i class="icon-pencil5"></i> Ubah
											</button>
											
											<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusPeserta')" :disabled="!selectedItem.id || selectedItem.status != 1" v-if="item.status == 2 && selectedItem.status != 3">
												<i class="icon-bin2"></i> Hapus
											</button>

											<button class="btn btn-light mb-1" @click.prevent="modalOpen('alasanPeserta')" v-if="selectedItem.status == 3">
												<i class="icon-eye"></i> Lihat Alasan Penolakan
											</button>
										</template>

										<template slot="item-desktop" slot-scope="props">
											<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)" v-if="props.item">
												<td>{{ props.index + 1 }}</td>
												<td>
													<span v-html="$options.filters.statusPeserta(props.item.status)"></span>
												</td>
												<td v-if="props.item.aktivis && !columnData[2].hide">
													<img :src="'/images/aktivis/' + props.item.aktivis.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.aktivis.gambar">
													<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
												</td>
												<td v-if="props.item.aktivis && !columnData[3].hide">
													<check-value :value="props.item.aktivis.name"></check-value>
												</td>
												<td v-if="!columnData[4].hide">
													<check-value :value="props.item.name_nametag"></check-value>
												</td>
												<td v-if="!columnData[5].hide">
													<check-value :value="props.item.name_sertifikat"></check-value>
												</td>
												<td v-if="!columnData[6].hide" v-html="$options.filters.date(props.item.datang)">
												</td>
												<td v-if="!columnData[7].hide" v-html="$options.filters.date(props.item.pulang)">
												</td>
												<td v-if="!columnData[8].hide">
													<check-value :value="props.item.keterangan"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[9].hide">
													<check-value :value="props.item.aktivis.kelamin"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[10].hide">
													<span v-if="props.item.aktivis.pekerjaan_aktif && props.item.aktivis.pekerjaan_aktif.tipe == 1">
														<check-value :value="props.item.aktivis.pekerjaan_aktif.cu.name" v-if="props.item.aktivis.pekerjaan_aktif.cu"></check-value>
														<span v-else>-</span>
													</span>
													<span v-else-if="props.item.aktivis.pekerjaan_aktif && props.item.aktivis.pekerjaan_aktif.tipe == 2">
														<check-value :value="props.item.aktivis.pekerjaan_aktif.lembaga_lain.name" v-if="props.item.aktivis.pekerjaan_aktif.lembaga_lain"></check-value>
														<span v-else>-</span>
													</span>
													<span v-else-if="props.item.aktivis.pekerjaan_aktif && props.item.aktivis.pekerjaan_aktif.tipe == 3">
														Puskopdit BKCU Kalimantan
													</span>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnData[11].hide" >
													<span v-html="$options.filters.checkTingkatAktivis(props.item.aktivis.pekerjaan_aktif.tingkat)" v-if="props.item.aktivis.pekerjaan_aktif && props.item.aktivis.pekerjaan_aktif.tingkat"></span>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnData[12].hide">
													<check-value :value="props.item.aktivis.pekerjaan_aktif.name" v-if="props.item.aktivis.pekerjaan_aktif"></check-value>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnData[13].hide">
													<check-value :value="props.item.aktivis.pendidikan_tertinggi.tingkat" v-if="props.item.aktivis.pendidikan_tertinggi"></check-value>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnData[14].hide">
													<check-value :value="props.item.aktivis.pendidikan_tertinggi.name" v-if="props.item.aktivis.pendidikan_tertinggi"></check-value>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnData[15].hide" v-html="$options.filters.date(props.item.aktivis.tanggal_lahir)">
												</td>
												<td v-if="props.item.aktivis && !columnData[16].hide">
													<check-value :value="props.item.aktivis.tempat_lahir"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[17].hide">
													<check-value :value="props.item.aktivis.tinggi"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[18].hide">
													<check-value :value="props.item.aktivis.agama"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[19].hide">
													<check-value :value="props.item.aktivis.status"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[20].hide">
													<check-value :value="props.item.aktivis.email"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[21].hide">
													<check-value :value="props.item.aktivis.hp"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[22].hide">
													<check-value :value="props.item.aktivis.kontak"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[22].hide" v-html="$options.filters.dateTime(props.item.created_at)">
												</td>
											</tr>
										</template>	
									</data-viewer>
									<hr/>
									<div class="card">
										<data-table :items="itemDataPesertaTerdaftarCU" :columnData="columnDataCU" :itemDataStat="itemDataStat">
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

							<!-- peserta hadir -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-if="tabName == 'pesertaHadir'">
									<data-viewer :title="'peserta hadir'" :itemData="itemData2" :columnData="columnData2" :itemDataStat="itemDataStat2" :query="query2" @fetch="fetchPesertaHadir" :excelDownloadUrl="excelDownloadUrl2" :isDasar="'true'" :isNoKolom="isNoKolom" :isNoExcel="isNoExcel" :isDisable="isDisableTablePeserta">

										<template slot="item-desktop" slot-scope="props">
											<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)" v-if="props.item">
												<td>{{ props.index + 1 }}</td>
												<td v-if="props.item.aktivis && !columnData[1].hide">
													<img :src="'/images/aktivis/' + props.item.aktivis.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.aktivis.gambar">
													<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
												</td>
												<td v-if="props.item.aktivis && !columnData[2].hide">
													<check-value :value="props.item.aktivis.name"></check-value>
												</td>
												<td v-if="!columnData[3].hide">
													<check-value :value="props.item.name_nametag"></check-value>
												</td>
												<td v-if="!columnData[4].hide">
													<check-value :value="props.item.name_sertifikat"></check-value>
												</td>
												<td v-if="!columnData[5].hide" v-html="$options.filters.date(props.item.datang)">
												</td>
												<td v-if="!columnData[6].hide" v-html="$options.filters.date(props.item.pulang)">
												</td>
												<td v-if="!columnData[7].hide" v-html="$options.filters.dateTime(props.item.tanggal_hadir)">
												</td>
												<td v-if="!columnData[8].hide">
													<check-value :value="props.item.keterangan"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[9].hide">
													<check-value :value="props.item.aktivis.kelamin"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[10].hide">
													<span v-if="props.item.aktivis.pekerjaan_aktif && props.item.aktivis.pekerjaan_aktif.tipe == 1">
														<check-value :value="props.item.aktivis.pekerjaan_aktif.cu.name" v-if="props.item.aktivis.pekerjaan_aktif.cu"></check-value>
														<span v-else>-</span>
													</span>
													<span v-else-if="props.item.aktivis.pekerjaan_aktif && props.item.aktivis.pekerjaan_aktif.tipe == 2">
														<check-value :value="props.item.aktivis.pekerjaan_aktif.lembaga_lain.name" v-if="props.item.aktivis.pekerjaan_aktif.lembaga_lain"></check-value>
														<span v-else>-</span>
													</span>
													<span v-else-if="props.item.aktivis.pekerjaan_aktif && props.item.aktivis.pekerjaan_aktif.tipe == 3">
														Puskopdit BKCU Kalimantan
													</span>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnData[11].hide" >
													<span v-html="$options.filters.checkTingkatAktivis(props.item.aktivis.pekerjaan_aktif.tingkat)" v-if="props.item.aktivis.pekerjaan_aktif && props.item.aktivis.pekerjaan_aktif.tingkat"></span>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnData[12].hide">
													<check-value :value="props.item.aktivis.pekerjaan_aktif.name" v-if="props.item.aktivis.pekerjaan_aktif"></check-value>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnData[13].hide">
													<check-value :value="props.item.aktivis.pendidikan_tertinggi.tingkat" v-if="props.item.aktivis.pendidikan_tertinggi"></check-value>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnData[14].hide">
													<check-value :value="props.item.aktivis.pendidikan_tertinggi.name" v-if="props.item.aktivis.pendidikan_tertinggi"></check-value>
													<span v-else>-</span>
												</td>
												<td v-if="props.item.aktivis && !columnData[15].hide" v-html="$options.filters.date(props.item.aktivis.tanggal_lahir)">
												</td>
												<td v-if="props.item.aktivis && !columnData[16].hide">
													<check-value :value="props.item.aktivis.tempat_lahir"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[17].hide">
													<check-value :value="props.item.aktivis.tinggi"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[18].hide">
													<check-value :value="props.item.aktivis.agama"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[19].hide">
													<check-value :value="props.item.aktivis.status"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[20].hide">
													<check-value :value="props.item.aktivis.email"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[21].hide">
													<check-value :value="props.item.aktivis.hp"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[22].hide">
													<check-value :value="props.item.aktivis.kontak"></check-value>
												</td>
												<td v-if="props.item.aktivis && !columnData[22].hide" v-html="$options.filters.dateTime(props.item.created_at)">
												</td>
											</tr>
										</template>	
									</data-viewer>
									<hr/>
									<div class="card">
										<data-table :items="itemDataPesertaHadirCU" :columnData="columnDataCU" :itemDataStat="itemDataStat2">
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
				:mode="formPesertaMode"
				:selected="selectedItem"
				:kegiatan_id="item.id"
				:tingkat="item.sasaran"
				@tutup="modalTutup" v-if="state == 'tambahPeserta' || state == 'ubahPeserta'"></form-peserta>
				<form-peserta-batal :kelas="kelas" :id="selectedItem.id"
				@tutup="modalTutup" v-else-if="state == 'batalPeserta'"></form-peserta-batal>
			</template>

			<!-- pertemuan -->
			<template slot="modal-body2">
				<form-status :kelas="kelas" :id="item.id" :status="item.status" :keteranganBatal="item.keteranganBatal"
				@tutup="modalTutup" v-if="state == 'statusPertemuan'"></form-status>
				<form-hadir :kelas="kelas" :item="item" :state="state" v-else-if="state == 'pesertaTerdaftar' || state == 'panitiaTerdaftar'"></form-hadir>
			</template>

			<!-- batal peserta -->
			<template slot="modal-body3">
				
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
		},
		data() {
			return {
				title: 'Detail Pertemuan BKCU',
				titleDesc: 'Informasi detail pertemuan BKCU',
				titleIcon: 'icon-stack2',
				level: 2,
				level2Title: 'Pertemuan BKCU',
				kelas: 'pertemuanBKCU',
				sasaran: [],
				tabName: 'info',
				isPeserta: false,
				tempatData: '',
				isDisableTablePeserta: false,
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
				query: {
					order_column: "status",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				query2: {
					order_column: "status",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				excelDownloadUrl: '',
				excelDownloadUrl2: '',
				isNoKolom: '',
				isNoExcel:'',
				columnData: [
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
						name: 'aktivis.pekerjaan_aktif.tingkat',
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
						name: 'aktivis.created_at',
						tipe: 'datetime',
						hide: false,
						disable: false,
						filter: true,
					},
				],
				columnData2: [
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
						name: 'aktivis.pekerjaan_aktif.tingkat',
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
						name: 'aktivis.created_at',
						tipe: 'datetime',
						hide: false,
						disable: false,
						filter: true,
					},
				],
				columnDataPanitia: [
					{ title: 'No.' },
					{ title: 'Foto' },
					{ title: 'Nama' },
					{ title: 'Gender' },
					{ title: 'Peran' },
					{ title: 'keterangan' },
					{ title: 'Lembaga' },
					{ title: 'Jabatan' },
					{ title: 'Tgl. Lahir' },
					{ title: 'Tempat Lahir' },
					{ title: 'Agama' },
					{ title: 'Status' },
					{ title: 'Email' },
					{ title: 'No. Hp' },
					{ title: 'Kontak Lain' },
					
				],
				columnDataCU: [
					{ title: 'No.' },
					{ title: 'CU' },
					{ title: 'Laki-Laki' },
          { title: 'Perempuan' },
					{ title: 'Total' },
				],
				itemDataPanitia: [],
				itemDataPesertaTerdaftarCU: [],
				itemDataPesertaHadirCU: [],
				selectedItem: '',
				formPesertaMode: '',
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
					if(this.item.status == 4){
						this.checkPanitia();
					}

					this.fetchPesertaTerdaftar(this.query);
					this.fetchCountPeserta();

					var valDalam;
					for(valDalam of this.item.panitia_dalam){
						this.itemDataPanitia.push(valDalam);
					}

					var valLuar;
					for(valLuar of this.item.panitia_luar){
						this.itemDataPanitia.push(valLuar);
					}
				}
			},
			// peserta terdaftar
			itemDataStat(value){
				if(value == 'success'){
					this.itemDataPesertaTerdaftarCU = Object.values(this.itemData.data.reduce(function(accumulator, current){
						const cu = current.aktivis.pekerjaan_aktif.cu;
						accumulator[cu.id] = accumulator[cu.id] || {
							"id": cu.id,
							"name": cu.name,
							"total": 0,
							"perempuan": 0,
							"lakilaki": 0,
						}

						accumulator[cu.id].total += 1;
						if(current.aktivis.kelamin == "LAKI-LAKI"){
							accumulator[cu.id].lakilaki += 1;
						}else{
							accumulator[cu.id].perempuan += 1;
						}
						
						return accumulator;
					},{}));
				}
			},
			// peserta hadir
			itemDataStat2(value){
				if(value == 'success'){
					this.itemDataPesertaHadirCU = Object.values(this.itemData2.data.reduce(function(accumulator, current){
						const cu = current.aktivis.pekerjaan_aktif.cu;
						accumulator[cu.id] = accumulator[cu.id] || {
							"id": cu.id,
							"name": cu.name,
							"total": 0,
							"perempuan": 0,
							"lakilaki": 0,
						}

						accumulator[cu.id].total += 1;
						if(current.aktivis.kelamin == "LAKI-LAKI"){
							accumulator[cu.id].lakilaki += 1;
						}else{
							accumulator[cu.id].perempuan += 1;
						}
						
						return accumulator;
					},{}));
				}
			},
			checkPanitiaDataStat(value){
				if(value == 'success'){
					if(this.checkPanitiaData){
						if(!this.checkPanitiaData.tanggal_hadir){
							if(this.item.tipe_tempat == 'ONLINE')
								this.modalOpen('panitiaTerdaftar');
						}
					}else{
						this.checkPeserta();
					}
				}
			},
			checkPesertaDataStat(value){
				if(this.state != 'tambahPeserta' && state != 'ubahPeserta'){
					if(value == 'success'){
						if(this.checkPesertaData){
							if(!this.checkPesertaData.tanggal_hadir){
								if(this.item.tipe_tempat == 'ONLINE')
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
						this.excelDownloadUrl = this.kelas + '/indexPeserta';					
					}else{
						this.$store.dispatch(this.kelas + '/indexPesertaCu', [params,this.item.id, this.currentUser.id_cu]);
						this.excelDownloadUrl = this.kelas + '/indexPesertaCu/' + this.$route.params.cu;
					}
				}else{
					this.$store.dispatch(this.kelas + '/indexPeserta', [params,this.item.id]);
					this.excelDownloadUrl = this.kelas + '/indexPeserta';	
				}
			},
			fetchPesertaHadir(params){
				this.$store.dispatch(this.kelas + '/indexPesertaHadir', [params,this.item.id]);
				this.excelDownloadUrl2 = this.kelas + '/indexPesertaHadir';	
			},
			fetchCountPeserta() {
				this.$store.dispatch(this.kelas + '/countPeserta', this.item.id);
				if(this.item.tipe_tempat == 'ONLINE')
					this.$store.dispatch(this.kelas + '/countPesertaHadir', this.item.id);
			},
			checkPeserta(){
				if(this.currentUser.aktivis){
					this.$store.dispatch(this.kelas + '/checkPeserta', [this.item.id, this.currentUser.id_aktivis]);
				}
			},
			checkPanitia(){
				if(this.currentUser.aktivis){
					this.$store.dispatch(this.kelas + '/checkPanitia', [this.item.id, this.currentUser.id_aktivis]);
				}
			},
			changeTab(value){
				this.tabName = value;
				if(value == 'pesertaTerdaftar'){
					this.fetchPesertaTerdaftar(this.query);
				}else if(value == 'pesertaHadir'){
					this.fetchPesertaHadir(this.query2);
				}
			},
			save() {
				this.form.sasaran = this.sasaran;
				this.form.panitia = this.itemDataPanitia;

				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if (this.$route.meta.mode == 'edit') {
							this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, formData]);
						} else {
							this.$store.dispatch(this.kelas + '/store', formData);
						}
						this.submited = false;
					} else {
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			back() {
				this.$router.push({name: this.kelas, params: { periode: this.momentYear()} });
			},
			ubahPesertaData(id) {
				this.$router.push({name: this.kelas + 'EditDetail', params: { id: id }});
			},
			selectedRow(item) {
				this.selectedItem = item;
			},
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;
				this.isDisableTablePeserta = true;

				if (isMobile) {
					this.selectedItem = itemMobile;
				}

				if (state == 'hapusPertemuan') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Diklat ' + this.item.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				} else if (state == 'hapusPeserta') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Peserta ' + this.selectedItem.aktivis.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'alasanPeserta'){
					this.modalState = 'content-tutup';
					this.modalColor = '';
					this.modalSize = '';
					this.modalTitle = 'Maaf anda belum bisa mengikuti pertemuan ini';
					this.modalContent = 'Alasan penolakkan: <br/>' + this.selectedItem.keteranganBatal;
				}else if (state == 'batalPeserta') {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tolak Peserta ' + this.selectedItem.aktivis.name + ' ?';
					this.modalButton = 'Ok';
					this.modalSize = '';
				} else if (state == 'statusPertemuan') {
					this.modalState = 'normal2';
					this.modalTitle = 'Ubah status ' + this.item.name + ' ini?';
					this.modalColor = 'bg-primary';
				} else if (state == 'ubahPeserta') {
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Peserta';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formPesertaMode = 'edit';
				} else if (state == 'tambahPeserta') {
					if(this.countPeserta >= this.item.peserta_max ){
						this.modalState = 'content-tutup';
						this.modalColor = '';
						this.modalSize = '';
						this.modalTitle = 'Pertemuan sudah penuh';
						this.modalContent = 'Maaf anda tidak bisa mendaftarkan peserta lagi, karena kuota peserta pada diklat ini sudah terpenuhi.';
					}
					
					if(this.itemData.data.length >= this.item.peserta_max_cu && this.currentUser.id_cu != 0){
						this.modalState = 'content-tutup';
						this.modalColor = '';
						this.modalSize = '';
						this.modalTitle = 'CU anda tidak bisa mendaftarkan peserta lagi';
						this.modalContent = 'Maaf anda tidak bisa mendaftarkan peserta lagi, karena kuota peserta yang bisa CU anda daftarkan untuk pertemuan ini telah terpenuhi.';
					}else{
						this.modalState = 'normal1';
						this.modalColor = 'bg-primary';
						this.modalTitle = 'Tambah Peserta';
						this.modalButton = 'Ok';
						this.modalSize = 'modal-lg';
						this.formPesertaMode = 'create';
					}
				}else if(state == 'pesertaTidakTerdaftar'){
					this.modalState = 'fail';
					this.modalColor = '';
					this.modalSize = '';
					this.modalTitle = 'Maaf anda tidak terdaftar dalam pertemuan ini';
					this.modalContent = 'Maaf anda tidak terdaftar dalam pertemuan ini, silahkan pastikan anda sudah mendaftar di pertemuan ini';
				}else if(state == 'pesertaTerdaftar'){
					this.modalState = 'normal2';
					this.modalTitle = 'Masuk ' + this.item.name ;
					this.modalColor = 'bg-primary';
				}else if(state == 'panitiaTerdaftar'){
					this.modalState = 'normal2';
					this.modalTitle = 'Masuk ' + this.item.name ;
					this.modalColor = 'bg-primary';
				}
			},
			modalImageShow(content) {
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
				}
			},
			modalTutup() {
				if(this.state == 'tambahPeserta' || this.state == 'ubahPeserta' || this.state == 'hapusPeserta' || this.state == 'batalPeserta'){
					this.tabName = 'pesertaTerdaftar';
					this.fetchPesertaTerdaftar(this.query);
					this.fetchCountPeserta();
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
				
				this.isDisableTablePeserta = false;
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
				this.isDisableTablePeserta = false;
			},
			momentYear() {
				return moment().year();
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('pertemuanBKCU', {
				item: 'data',
				itemStat: 'dataStat',
				checkPesertaData: 'data2',
				checkPesertaDataStat: 'dataStat2',
				checkPanitiaData: 'data3',
				checkPanitiaDataStat: 'dataStat3',
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				itemData2: 'dataS2',
				itemDataStat2: 'dataStatS2',
				countPeserta: 'count',
				countPesertaStat: 'countStat',
				countPesertaHadir: 'count2',
				countPesertaHadirStat: 'countStat2',
				updateResponse: 'update',
				updateStat: 'updateStat',
			}),
		}
	}
</script>