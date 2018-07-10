<template>
	<div>
		<!-- Page header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>
		
		<!-- page container -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">

					<div class="row">

						<div class="col-sm-12">
							
							<!-- message -->
							<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
							</message>

							<div class="tabbable">
								<ul class="nav nav-tabs nav-tabs-solid nav-justified">
									<li :class="{'active' : tabName == 'identitas'}"><a @click.prevent="changeTab('identitas')"><i class="icon-pencil5 position-left"></i> Ubah Identitas</a></li>
									<li :class="{'active' : tabName == 'riwayatPekerjaan'}"><a @click.prevent="changeTab('riwayatPekerjaan')"><i class="icon-list2 position-left"></i> Riwayat Pekerjaan</a></li>
									<li :class="{'active' : tabName == 'riwayatPendidikan'}"><a @click.prevent="changeTab('riwayatPendidikan')"><i class="icon-list2 position-left"></i> Riwayat Pendidikan</a></li>
									<li :class="{'active' : tabName == 'riwayatOrganisasi'}"><a @click.prevent="changeTab('riwayatOrganisasi')"><i class="icon-list2 position-left"></i> Riwayat Organisasi</a></li>
									<li :class="{'active' : tabName == 'keluarga'}"><a @click.prevent="changeTab('keluarga')"><i class="icon-list2 position-left"></i> Keluarga</a></li>
									<li :class="{'active' : tabName == 'anggotaCu'}"><a @click.prevent="changeTab('anggotaCu')"><i class="icon-list2 position-left"></i> Anggota CU</a></li>
								</ul>
							</div>

							<!-- identitas -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'identitas'">
									<form @submit.prevent="saveIdentitas" enctype="multipart/form-data" data-vv-scope="form">
									<!-- desktop -->
									<div class="panel panel-flat">

										<div class="panel-body pb-5">
											<div class="row">

												<!-- judul -->
												<div class="col-md-12">
													<h6 class="form-wizard-title text-semibold text-primary">
														<span class="form-wizard-count">1</span> Identitas
														<small class="display-block">Identitas pengelola</small>
													</h6>
												</div>

												<form-identitas :form="form"></form-identitas>
												
											</div>		
										</div>

									</div>

									<div class="panel panel-flat">

										<div class="panel-body pb-5">
											<div class="row">

												<!-- judul -->
												<div class="col-md-12">
													<h6 class="form-wizard-title text-semibold text-primary">
														<span class="form-wizard-count">2</span> Alamat & Kontak
														<small class="display-block">Domisili dan kontak pengelola</small>
													</h6>
												</div>

												<form-lokasi :form="form"></form-lokasi>

											</div>		
										</div>

									</div>

									<!-- form info -->
									<form-info></form-info>	
									<br/>

									<!-- form button -->
									<div class="panel panel-flat panel-body">
										<form-button
											:cancelState="'methods'"
											:formValidation="'form'"
											@cancelClick="back"></form-button>
									</div>

									</form>
								</div>
							</transition>	

							<!-- riwayat pekerjaan -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'riwayatPekerjaan'">

									<!-- desktop -->
									<div class="panel panel-flat hidden-xs">
										<div class="panel-body pb-5">
											<div class="row">

												<!-- judul -->
												<div class="col-md-12">
													<h6 class="form-wizard-title text-semibold text-primary">
														Pekerjaan
														<small class="display-block">Riwayat pekerjaan pengelola</small>
													</h6>
												</div>

												<div class="col-md-12">
													<div class="btn-toolbar">
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Tambah riwayat pekerjaan baru'" @click.prevent="createRiwayat()">
																<i class="icon-plus22"></i> Tambah
															</button>
														</div>
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Ubah riwayat pekerjaan'" @click.prevent="updateRiwayat()"
															:disabled="!selectedItemPekerjaan.id">
																<i class="icon-pencil5"></i> Ubah
															</button>
														</div>
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Hapus riwayat pekerjaan'" @click="destroyRiwayat()" :disabled="!selectedItemPekerjaan.id">
																<i class="icon-bin2"></i> Hapus
															</button>
														</div>
													</div>
												</div>
											</div>		
										</div>

										<data-table :items="itemData" :columnData="columnDataPekerjaan" :itemDataStat="itemDataStat">
											<template slot="item-desktop" slot-scope="props">
												<tr :class="{ 'info': selectedItemPekerjaan.id === props.item.id }" class="text-nowrap" @click="selectedRowPekerjaan(props.item)" v-if="props.item">
													<td>{{ props.index + 1 }}</td>
													<td>{{ props.item.name }} 
														<span class="label label-primary" v-if="props.item.selesai == null || props.item.selesai > moment().format('YYYY-MM-DD')">Pekerjaan saat ini</span>
													</td>
													<td>{{ props.item.tingkat }}</td>
													<td>
														<span v-if="props.item.tipe == 1">{{ props.item.cu.name }}</span>
														<span v-else-if="props.item.tipe == 2">{{ props.item.lembaga_lain }}</span>
														<span v-else>Puskopdit BKCU Kalimantan</span>
													</td>
													<td>{{ props.item.mulai }}</td>
													<td>
														<span v-if="props.item.selesai">{{ props.item.selesai }}</span>
														<span v-else>-</span>
													</td>
												</tr>
											</template>	

											<template slot="button-context">
												<!-- title -->
												<li class="text-center pb-5 pt-5 bg-primary" v-if="selectedItemPekerjaan.name"><b class="text-size-large">{{ this.columnDataPekerjaan[1].title }}</b></li>
												<li class="text-center pb-5 pt-5 bg-warning" v-else><b class="text-size-large">Tidak ada data yang terpilih</b></li>
												<li><hr class="no-margin-bottom no-margin-top"/></li>

												<!-- selected content -->
												<li class="text-center pb-10 pt-10 pl-5 pr-5" v-if="selectedItemPekerjaan.name">
													<span class="text-size-large">{{selectedItemPekerjaan.name}}</span></li>
												<li><hr class="no-margin-top no-margin-bottom"/></li>

												<!-- update -->
												<li>
													<div class="pl-5 pr-5 pb-5 pt-10">
														<button @click.prevent="updateRiwayat()" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Ubah riwayat pekerjaan'" :disabled="!selectedItemPekerjaan.id">
															<i class="icon-pencil5"></i> Ubah
														</button>
													</div>
												</li>

												<!-- destroy -->
												<li>
													<div class="pl-5 pr-5 pb-5">
														<button @click.prevent="destroyRiwayat()" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Hapus riwayat pekerjaan'"  :disabled="!selectedItemPekerjaan.id">
															<i class="icon-bin2"></i> Hapus
														</button>
													</div>
												</li>
											</template>
										</data-table>

									</div>

									<!-- mobile -->
									<div class="panel panel-flat panel-body visible-xs">
										<button class="btn btn-default btn-block" @click.prevent="createRiwayat()">
											<i class="icon-plus22"></i> Tambah
										</button>
									</div>

									<div class="panel panel-default visible-xs" v-for="(data,index) in itemData" v-if="data">										
										<div class="panel-heading">
											<h6 class="panel-title text-semibold">{{ data.name }} a <span class="label label-primary" v-if="data.selesai == null || data.selesai > moment().format('YYYY-MM-DD')">Pekerjaan saat ini</span></h6>
										</div>
										<div class="panel-body">
											<ul class="list-unstyled">
												<li><b>Tingkat:</b> {{ data.tingkat }}</li>
												<li><b>Tempat:</b> 
													<span v-if="data.tipe == 1">{{ data.cu.name }}</span>
													<span v-else-if="data.tipe == 2">{{ data.lembaga_lain }}</span>
													<span v-else>Puskopdit BKCU Kalimantan</span>
												</li>
												<li><b>Mulai:</b> {{ data.mulai }}</li>
												<li><b>Selesai:</b> 
													<span v-if="data.selesai">{{ data.selesai }}</span>
													<span v-else>-</span>
												</li>
											</ul>

											<hr>
											<button class="btn btn-default btn-block" @click.prevent="updateRiwayat(data)">
												<i class="icon-pencil5"></i> Ubah
											</button>
											<button class="btn btn-default btn-block" @click.prevent="destroyRiwayat(data)">
												<i class="icon-bin2"></i> Hapus
											</button>
										</div>
									</div>

								</div>
							</transition>		

							<!-- riwayat pendidikan -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'riwayatPendidikan'">

									<!-- desktop -->
									<div class="panel panel-flat hidden-xs">
										<div class="panel-body pb-5">
											<div class="row">

												<!-- judul -->
												<div class="col-md-12">
													<h6 class="form-wizard-title text-semibold text-primary">
														Pendidikan
														<small class="display-block">Riwayat pendidikan pengelola</small>
													</h6>
												</div>

												<div class="col-md-12">
													<div class="btn-toolbar">
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Tambah riwayat pendidikan baru'" @click.prevent="createRiwayat()">
																<i class="icon-plus22"></i> Tambah
															</button>
														</div>
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Ubah riwayat pendidikan'" @click.prevent="updateRiwayat()"
															:disabled="!selectedItemPendidikan.id">
																<i class="icon-pencil5"></i> Ubah
															</button>
														</div>
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Hapus riwayat pendidikan'" @click="destroyRiwayat()" :disabled="!selectedItemPendidikan.id">
																<i class="icon-bin2"></i> Hapus
															</button>
														</div>
													</div>
												</div>
											</div>		
										</div>

										<data-table :items="itemData" :columnData="columnDataPendidikan" :itemDataStat="itemDataStat">
											<template slot="item-desktop" slot-scope="props">
												<tr :class="{ 'info': selectedItemPendidikan.id === props.item.id }" class="text-nowrap" @click="selectedRowPendidikan(props.item)" v-if="props.item">
													<td>{{ props.index + 1 }}</td>
													<td>{{ props.item.name }}</td>
													<td>{{ props.item.tingkat }}</td>
													<td>{{ props.item.tempat }}</td>
													<td>{{ props.item.mulai }}</td>
													<td>
														<span v-if="props.item.selesai">{{ props.item.selesai }}</span>
														<span v-else>-</span>
													</td>
												</tr>
											</template>	

											<template slot="button-context">
												<!-- title -->
												<li class="text-center pb-5 pt-5 bg-primary" v-if="selectedItemPendidikan.name">
													<b class="text-size-large" v-if="selectedItemPendidikan.name == '-'">{{ this.columnDataPendidikan[3].title }}</b>
													<b class="text-size-large" v-else>{{ this.columnDataPendidikan[1].title }}</b>
												</li>
												<li class="text-center pb-5 pt-5 bg-warning" v-else><b class="text-size-large">Tidak ada data yang terpilih</b></li>
												<li><hr class="no-margin-bottom no-margin-top"/></li>

												<!-- selected content -->
												<li class="text-center pb-10 pt-10 pl-5 pr-5" v-if="selectedItemPendidikan.name">
													<span class="text-size-large" v-if="selectedItemPendidikan.name == '-'">{{selectedItemPendidikan.tempat}}</span>
													<span class="text-size-large" v-else>{{selectedItemPendidikan.name}}</span>
												</li>
												<li><hr class="no-margin-top no-margin-bottom"/></li>

												<!-- update -->
												<li>
													<div class="pl-5 pr-5 pb-5 pt-10">
														<button @click.prevent="updateRiwayat()" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Ubah riwayat pendidikan baru'" :disabled="!selectedItemPendidikan.id">
															<i class="icon-pencil5"></i> Ubah
														</button>
													</div>
												</li>

												<!-- destroy -->
												<li>
													<div class="pl-5 pr-5 pb-5">
														<button @click.prevent="destroyRiwayat()" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Hapus riwayat pendidikan baru'"  :disabled="!selectedItemPendidikan.id">
															<i class="icon-bin2"></i> Hapus
														</button>
													</div>
												</li>
											</template>
										</data-table>

									</div>

									<!-- mobile -->
									<div class="panel panel-flat panel-body visible-xs">
										<button class="btn btn-default btn-block" @click.prevent="createRiwayat()">
											<i class="icon-plus22"></i> Tambah
										</button>
									</div>

									<div class="panel panel-default visible-xs" v-for="(data,index) in itemData" v-if="data">										
										<div class="panel-heading">
											<h6 class="panel-title text-semibold">{{ data.name }}</h6>
										</div>
										<div class="panel-body">
											<ul class="list-unstyled">
												<li><b>Tingkat:</b> {{ data.tingkat }}</li>
												<li><b>Tempat:</b> {{ data.tempat }}</li>
												<li><b>Mulai:</b> {{ data.mulai }}</li>
												<li><b>Selesai:</b> 
													<span v-if="data.selesai">{{ data.selesai }}</span>
													<span v-else>-</span>
												</li>
											</ul>

											<hr>
											<button class="btn btn-default btn-block" @click.prevent="updateRiwayat(data)">
												<i class="icon-pencil5"></i> Ubah
											</button>
											<button class="btn btn-default btn-block" @click.prevent="destroyRiwayat(data)">
												<i class="icon-bin2"></i> Hapus
											</button>
										</div>
									</div>

								</div>
							</transition>		

							<!-- riwayat organisasi -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'riwayatOrganisasi'">

									<!-- desktop -->
									<div class="panel panel-flat hidden-xs">
										<div class="panel-body pb-5">
											<div class="row">

												<!-- judul -->
												<div class="col-md-12">
													<h6 class="form-wizard-title text-semibold text-primary">
														Organisasi
														<small class="display-block">Riwayat berorganisasi pengelola</small>
													</h6>
												</div>

												<div class="col-md-12">
													<div class="btn-toolbar">
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Tambah riwayat berorganisasi baru'" @click.prevent="createRiwayat()">
																<i class="icon-plus22"></i> Tambah
															</button>
														</div>
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Ubah riwayat berorganisasi'" @click.prevent="updateRiwayat()"
															:disabled="!selectedItemOrganisasi.id">
																<i class="icon-pencil5"></i> Ubah
															</button>
														</div>
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Hapus riwayat berorganisasi'" @click="destroyRiwayat()" :disabled="!selectedItemOrganisasi.id">
																<i class="icon-bin2"></i> Hapus
															</button>
														</div>
													</div>
												</div>
											</div>		
										</div>

										<data-table :items="itemData" :columnData="columnDataPekerjaan" :itemDataStat="itemDataStat">
											<template slot="item-desktop" slot-scope="props">
												<tr :class="{ 'info': selectedItemOrganisasi.id === props.item.id }" class="text-nowrap" @click="selectedRowOrganisasi(props.item)" v-if="props.item">
													<td>{{ props.index + 1 }}</td>
													<td>{{ props.item.name }} <span class="label label-primary" v-if="props.item.selesai == null || props.item.selesai > moment().format('YYYY-MM-DD')">Masih aktif</span></td>
													<td>{{ props.item.jabatan }}</td>
													<td>{{ props.item.tempat }}</td>
													<td>{{ props.item.mulai }}</td>
													<td>
														<span v-if="props.item.selesai">{{ props.item.selesai }}</span>
														<span v-else>-</span>
													</td>
												</tr>
											</template>	

											<template slot="button-context">
												<!-- title -->
												<li class="text-center pb-5 pt-5 bg-primary" v-if="selectedItemOrganisasi.name"><b class="text-size-large">{{ this.columnDataPekerjaan[1].title }}</b></li>
												<li class="text-center pb-5 pt-5 bg-warning" v-else><b class="text-size-large">Tidak ada data yang terpilih</b></li>
												<li><hr class="no-margin-bottom no-margin-top"/></li>

												<!-- selected content -->
												<li class="text-center pb-10 pt-10 pl-5 pr-5" v-if="selectedItemOrganisasi.name">
													<span class="text-size-large">{{selectedItemOrganisasi.name}}</span></li>
												<li><hr class="no-margin-top no-margin-bottom"/></li>

												<!-- update -->
												<li>
													<div class="pl-5 pr-5 pb-5 pt-10">
														<button @click.prevent="updateRiwayat()" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Ubah riwayat berorganisasi'" :disabled="!selectedItemOrganisasi.id">
															<i class="icon-pencil5"></i> Ubah
														</button>
													</div>
												</li>

												<!-- destroy -->
												<li>
													<div class="pl-5 pr-5 pb-5">
														<button @click.prevent="destroyRiwayat()" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Hapus riwayat berorganisasi'"  :disabled="!selectedItemOrganisasi.id">
															<i class="icon-bin2"></i> Hapus
														</button>
													</div>
												</li>
											</template>
										</data-table>

									</div>

									<!-- mobile -->
									<div class="panel panel-flat panel-body visible-xs">
										<button class="btn btn-default btn-block" @click.prevent="createRiwayat()">
											<i class="icon-plus22"></i> Tambah
										</button>
									</div>

									<div class="panel panel-default visible-xs" v-for="(data,index) in itemData" v-if="data">										
										<div class="panel-heading">
											<h6 class="panel-title text-semibold">{{ data.name }} <span class="label label-primary" v-if="data.selesai == null || data.selesai > moment().format('YYYY-MM-DD')">Masih aktif</span></h6>
										</div>
										<div class="panel-body">
											<ul class="list-unstyled">
												<li><b>Jabatan:</b> {{ data.jabatan }}</li>
												<li><b>Tempat:</b> {{ data.tempat }}</li>
												<li><b>Mulai:</b> {{ data.mulai }}</li>
												<li><b>Selesai:</b> 
													<span v-if="data.selesai">{{ data.selesai }}</span>
													<span v-else>-</span>
												</li>
											</ul>

											<hr>
											<button class="btn btn-default btn-block" @click.prevent="updateRiwayat(data)">
												<i class="icon-pencil5"></i> Ubah
											</button>
											<button class="btn btn-default btn-block" @click.prevent="destroyRiwayat(data)">
												<i class="icon-bin2"></i> Hapus
											</button>
										</div>
									</div>

								</div>
							</transition>	

							<!-- keluarga -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'keluarga'">

									<!-- desktop -->
									<div class="panel panel-flat hidden-xs">
										<div class="panel-body pb-5">
											<div class="row">

												<!-- judul -->
												<div class="col-md-12">
													<h6 class="form-wizard-title text-semibold text-primary">
														Keluarga
														<small class="display-block">Data keluarga pengelola</small>
													</h6>
												</div>

												<div class="col-md-12">
													<div class="btn-toolbar">
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Tambah data keluarga baru'" @click.prevent="createRiwayat()">
																<i class="icon-plus22"></i> Tambah
															</button>
														</div>
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Ubah data keluarga'" @click.prevent="updateRiwayat()"
															:disabled="!selectedItemKeluarga.id">
																<i class="icon-pencil5"></i> Ubah
															</button>
														</div>
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Hapus data keluarga'" @click="destroyRiwayat()" :disabled="!selectedItemKeluarga.id">
																<i class="icon-bin2"></i> Hapus
															</button>
														</div>
													</div>
												</div>
											</div>		
										</div>

										<data-table :items="itemData" :columnData="columnDataKeluarga" :itemDataStat="itemDataStat">
											<template slot="item-desktop" slot-scope="props">
												<tr :class="{ 'info': selectedItemKeluarga.id === props.item.id }" class="text-nowrap" @click="selectedRowOrganisasi(props.item)" v-if="props.item">
													<td>{{ props.index + 1 }}</td>
													<td>{{ props.item.name }}</td>
													<td>{{ props.item.tipe }}</td>
												</tr>
											</template>	

											<template slot="button-context">
												<!-- title -->
												<li class="text-center pb-5 pt-5 bg-primary" v-if="selectedItemKeluarga.name"><b class="text-size-large">{{ this.columnDataKeluarga[1].title }}</b></li>
												<li class="text-center pb-5 pt-5 bg-warning" v-else><b class="text-size-large">Tidak ada data yang terpilih</b></li>
												<li><hr class="no-margin-bottom no-margin-top"/></li>

												<!-- selected content -->
												<li class="text-center pb-10 pt-10 pl-5 pr-5" v-if="selectedItemKeluarga.name">
													<span class="text-size-large">{{selectedItemKeluarga.name}}</span></li>
												<li><hr class="no-margin-top no-margin-bottom"/></li>

												<!-- update -->
												<li>
													<div class="pl-5 pr-5 pb-5 pt-10">
														<button @click.prevent="updateRiwayat()" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Ubah data keluarga'" :disabled="!selectedItemKeluarga.id">
															<i class="icon-pencil5"></i> Ubah
														</button>
													</div>
												</li>

												<!-- destroy -->
												<li>
													<div class="pl-5 pr-5 pb-5">
														<button @click.prevent="destroyRiwayat()" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Hapus data keluarga'"  :disabled="!selectedItemKeluarga.id">
															<i class="icon-bin2"></i> Hapus
														</button>
													</div>
												</li>
											</template>
										</data-table>

									</div>

									<!-- mobile -->
									<div class="panel panel-flat panel-body visible-xs">
										<button class="btn btn-default btn-block" @click.prevent="createRiwayat()">
											<i class="icon-plus22"></i> Tambah
										</button>
									</div>

									<div class="panel panel-default visible-xs" v-for="(data,index) in itemData" v-if="data">										
										<div class="panel-heading">
											<h6 class="panel-title text-semibold">{{ data.name }}</h6>
										</div>
										<div class="panel-body">
											<ul class="list-unstyled">
												<li><b>Sebagai:</b> {{ data.tipe }}</li>
											</ul>

											<hr>
											<button class="btn btn-default btn-block" @click.prevent="updateRiwayat(data)">
												<i class="icon-pencil5"></i> Ubah
											</button>
											<button class="btn btn-default btn-block" @click.prevent="destroyRiwayat(data)">
												<i class="icon-bin2"></i> Hapus
											</button>
										</div>
									</div>

								</div>
							</transition>	

							<!-- anggota cu -->
							<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'anggotaCu'">

									<!-- desktop -->
									<div class="panel panel-flat hidden-xs">
										<div class="panel-body pb-5">
											<div class="row">

												<!-- judul -->
												<div class="col-md-12">
													<h6 class="form-wizard-title text-semibold text-primary">
														Anggota CU
														<small class="display-block">Data keanggotaan CU</small>
													</h6>
												</div>

												<div class="col-md-12">
													<div class="btn-toolbar">
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Tambah data keanggotaan CU baru'" @click.prevent="createRiwayat()">
																<i class="icon-plus22"></i> Tambah
															</button>
														</div>
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Ubah data keanggotaan CU'" @click.prevent="updateRiwayat()"
															:disabled="!selectedItemAnggotaCu.id">
																<i class="icon-pencil5"></i> Ubah
															</button>
														</div>
														<div class="btn-group pb-5">
															<button class="btn btn-default mb-15" v-tooltip:top="'Hapus data keanggotaan CU'" @click="destroyRiwayat()" :disabled="!selectedItemAnggotaCu.id">
																<i class="icon-bin2"></i> Hapus
															</button>
														</div>
													</div>
												</div>
											</div>		
										</div>

										<data-table :items="itemData" :columnData="columnDataAnggotaCu" :itemDataStat="itemDataStat">
											<template slot="item-desktop" slot-scope="props">
												<tr :class="{ 'info': selectedItemAnggotaCu.id === props.item.id }" class="text-nowrap" @click="selectedRowOrganisasi(props.item)" v-if="props.item">
													<td>{{ props.index + 1 }}</td>
													<td>{{ props.item.name }}</td>
													<td>{{ props.item.no_ba }}</td>
												</tr>
											</template>	

											<template slot="button-context">
												<!-- title -->
												<li class="text-center pb-5 pt-5 bg-primary" v-if="selectedItemAnggotaCu.name"><b class="text-size-large">{{ this.columnDataAnggotaCu[1].title }}</b></li>
												<li class="text-center pb-5 pt-5 bg-warning" v-else><b class="text-size-large">Tidak ada data yang terpilih</b></li>
												<li><hr class="no-margin-bottom no-margin-top"/></li>

												<!-- selected content -->
												<li class="text-center pb-10 pt-10 pl-5 pr-5" v-if="selectedItemAnggotaCu.name">
													<span class="text-size-large">{{selectedItemAnggotaCu.name}}</span></li>
												<li><hr class="no-margin-top no-margin-bottom"/></li>

												<!-- update -->
												<li>
													<div class="pl-5 pr-5 pb-5 pt-10">
														<button @click.prevent="updateRiwayat()" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Ubah data anggota CU'" :disabled="!selectedItemAnggotaCu.id">
															<i class="icon-pencil5"></i> Ubah
														</button>
													</div>
												</li>

												<!-- destroy -->
												<li>
													<div class="pl-5 pr-5 pb-5">
														<button @click.prevent="destroyRiwayat()" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Hapus data anggota CU'"  :disabled="!selectedItemAnggotaCu.id">
															<i class="icon-bin2"></i> Hapus
														</button>
													</div>
												</li>
											</template>
										</data-table>

									</div>

									<!-- mobile -->
									<div class="panel panel-flat panel-body visible-xs">
										<button class="btn btn-default btn-block" @click.prevent="createRiwayat()">
											<i class="icon-plus22"></i> Tambah
										</button>
									</div>

									<div class="panel panel-default visible-xs" v-for="(data,index) in itemData" v-if="data">										
										<div class="panel-heading">
											<h6 class="panel-title text-semibold">{{ data.name }}</h6>
										</div>
										<div class="panel-body">
											<ul class="list-unstyled">
												<li><b>No. BA:</b> {{ data.no_ba }}</li>
											</ul>

											<hr>
											<button class="btn btn-default btn-block" @click.prevent="updateRiwayat(data)">
												<i class="icon-pencil5"></i> Ubah
											</button>
											<button class="btn btn-default btn-block" @click.prevent="destroyRiwayat(data)">
												<i class="icon-bin2"></i> Hapus
											</button>
										</div>
									</div>

								</div>
							</transition>		
	
						</div>
					</div>
					
				</div>
			</div>
		</div>
		
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalTutup">
			 <template slot="modal-title">
				 {{ modalTitle }}
			 </template>

			 <template slot="modal-body1">

				 <!-- pekerjaan -->
				 <div v-if="tabName == 'riwayatPekerjaan'">
					<form @submit.prevent="savePekerjaan" data-vv-scope="form"> 
						<div class="row">
							<form-pekerjaan :form="formRiwayat" :modelCu="modelCu" v-if="formRiwayat.pekerjaan"></form-pekerjaan>

							<div class="col-sm-12">
								<hr>
								<form-button
									:cancelTitle="cancelTitle"
									:cancelIcon="cancelIcon"
									:cancelState="cancelState"
									:formValidation="'form'"
								@cancelClick="cancelClick"></form-button>
							</div>	
						</div>	
					</form>
				 </div>

				 <!-- pendidikan -->
				 <div v-if="tabName == 'riwayatPendidikan'">
					<form @submit.prevent="savePendidikan" data-vv-scope="form"> 
						<div class="row">
							<form-pendidikan :form="formRiwayat" :modelCu="modelCu" v-if="formRiwayat.pendidikan"></form-pendidikan>

							<div class="col-sm-12">
								<hr>
								<form-button
									:cancelTitle="cancelTitle"
									:cancelIcon="cancelIcon"
									:cancelState="cancelState"
									:formValidation="'form'"
									@cancelClick="cancelClick"></form-button>
							</div>
						</div>
						
					</form>
				 </div>

				 <!-- organisasi -->
				 <div v-if="tabName == 'riwayatOrganisasi'">
					<form @submit.prevent="saveOrganisasi" data-vv-scope="form"> 
						<div class="row">
							<form-organisasi :form="formRiwayat" :isAktif="false" :modelCu="modelCu" v-if="formRiwayat.organisasi"></form-organisasi>

							<div class="col-sm-12">
								<hr>
								<form-button
									:cancelTitle="cancelTitle"
									:cancelIcon="cancelIcon"
									:cancelState="cancelState"
									:formValidation="'form'"
									@cancelClick="cancelClick"></form-button>
							</div>
						</div>
						
					</form>
				 </div>
				 
			 </template>
		</app-modal>
	</div>
</template>

<script>
	import moment from 'moment';
	import { mapGetters } from 'vuex';
	import corefunc from '../../assets/core/app.js';
	import bootstrapSelect from '../../assets/plugins/forms/selects/bootstrap_select.min.js';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import dataTable from '../../components/datatable.vue';
	import appModal from '../../components/modal';
	import { toMulipartedForm } from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import formIdentitas from "./formIdentitas.vue";
	import formLokasi from "./formLokasi.vue";
	import formAnggotaCu from "./formAnggotaCu.vue";
	import formPekerjaan from "./formPekerjaan.vue";
	import formPendidikan from "./formPendidikan.vue";
	import formOrganisasi from "./formOrganisasi.vue";	
	
	export default {
		name: 'pengelolaDetail',
		components: {
			pageHeader,
			message,
			dataTable,
			appModal,
			appImageUpload,
			formInfo,
			formButton,
			formIdentitas,
			formLokasi,
			formAnggotaCu,
			formPekerjaan,
			formPendidikan,
			formOrganisasi,
		},
		data() {
			return {
				title: 'Ubah Pengelola',
				kelas: 'pengelola',
				titleDesc: 'Mengubah pengelola',
				titleIcon: 'icon-pencil5',
				level2Title: 'Pengelola',
				tabName: 'identitas',
				selectedItemPekerjaan: {},
				selectedItemPendidikan: {},
				selectedItemOrganisasi: {},
				selectedItemKeluarga: {},
				selectedItemAnggotaCu: {},
				columnDataPekerjaan:[
					{ title: 'No.' },
					{ title: 'Nama' },
					{ title: 'Tingkat' },
					{ title: 'Tempat' },
					{ title: 'Mulai' },
					{ title: 'Selesai' },
				],
				columnDataPendidikan:[
					{ title: 'No.' },
					{ title: 'Jurusan' },
					{ title: 'Tingkat' },
					{ title: 'Tempat' },
					{ title: 'Mulai' },
					{ title: 'Selesai' },
				],
				columnDataPekerjaan:[
					{ title: 'No.' },
					{ title: 'Nama' },
					{ title: 'Jabatan' },
					{ title: 'Tempat' },
					{ title: 'Mulai' },
					{ title: 'Selesai' },
				],
				columnDataKeluarga:[
					{ title: 'No.' },
					{ title: 'Nama' },
					{ title: 'Sebagai' },
				],
				columnDataAnggotaCu:[
					{ title: 'No.' },
					{ title: 'Nama' },
					{ title: 'No. BA' },
				],
				cancelTitle: 'Tutup',
				cancelIcon: 'icon-cross',
				cancelState: 'methods',
				formRiwayat: {},
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalImageShow: false,
				modalImageContent: '',
				submited: false,
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		mounted() {
			corefunc.core_function();
			// bootstrapSelect.init();
			this.other();
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
		},
		watch: {
			modelCuStat(value){
				if(value == 'success'){
					this.other();
					$('.bootstrap-select').selectpicker();
				}
			},
			formStat(value){
				if(value === "success"){
					if(this.tabName == 'identitas'){
						this.changeProvinces(this.form.id_provinces);
						this.changeRegencies(this.form.id_regencies);
						this.changeDistricts(this.form.id_districts);
					}else if(this.tabName == 'riwayatPekerjaan'){
						this.formRiwayat.pekerjaan = this.form.pekerjaan;
					}else if(this.tabName == 'riwayatPendidikan'){
						this.formRiwayat.pendidikan = this.form.pendidikan;
					}else if(this.tabName == 'riwayatOrganisasi'){
						this.formRiwayat.organisasi = this.form.organisasi;
						this.formRiwayat.organisasi.aktif = 'Ya';
					}else if(this.tabName == 'keluarga'){
						this.formRiwayat.keluarga = this.form.keluarga;
					}else if(this.tabName == 'anggotaCu'){
						this.formRiwayat.anggotaCu = this.form.anggotaCu;
					}
				} 
			},
			updateStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';
				this.modalContent = '';

				if(value === "success"){
					this.modalTitle = this.updateResponse.message;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			},
    },
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + '/editIdentitas',this.$route.params.id);	
				this.$store.dispatch('provinces/get');
			},
			changeTab(value){
				this.tabName = value;
				if(value == 'identitas'){
					this.$store.dispatch(this.kelas + '/editIdentitas',this.$route.params.id);	
				}else if(value =='riwayatPekerjaan'){
					this.$store.dispatch(this.kelas + '/indexPekerjaan',this.$route.params.id);	
				}else if(value =='riwayatPendidikan'){
					this.$store.dispatch(this.kelas + '/indexPendidikan',this.$route.params.id);
				}else if(value =='riwayatOrganisasi'){
					this.$store.dispatch(this.kelas + '/indexOrganisasi',this.$route.params.id);
				}else if(value =='keluarga'){
					this.$store.dispatch(this.kelas + '/indexKeluarga',this.$route.params.id);
				}else if(value =='anggotaCu'){
					this.$store.dispatch(this.kelas + '/indexAnggotaCu',this.$route.params.id);
				}
			},
			back(){
				this.$router.push({name: this.kelas + 'Cu', params:{cu: this.profile.id_cu}});
			},
			saveIdentitas() {
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/updateIdentitas', [this.$route.params.id, formData]);
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			savePekerjaan(){
				this.$validator.validateAll('form.pekerjaan').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/savePekerjaan', [this.$route.params.id, this.formRiwayat]);
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			savePendidikan(){
				this.$validator.validateAll('form.pendidikan').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/savePendidikan', [this.$route.params.id, this.formRiwayat]);
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			saveOrganisasi(){
				this.$validator.validateAll('form.organisasi').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/saveOrganisasi', [this.$route.params.id, this.formRiwayat]);
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			saveKeluarga(){
				this.$validator.validateAll('form.keluarga').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/saveKeluarga', [this.$route.params.id, this.formRiwayat]);
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			saveAnggotaCu(){
				this.$validator.validateAll('form.anggotaCu').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/saveAnggotaCu', [this.$route.params.id, this.formRiwayat]);
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			changeProvinces(id){
				this.$store.dispatch('regencies/getProvinces', id);
			},
			changeRegencies(id){
				this.$store.dispatch('districts/getRegencies', id);
			},
			changeDistricts(id){
				this.$store.dispatch('villages/getDistricts', id);
			},
			selectedRowPekerjaan(item){
				this.selectedItemPekerjaan = item;
				if(item.tipe == '2'){
					this.selectedItemPekerjaan.id_tempat = 'lain';
				}else if(item.tipe == '3'){
					this.selectedItemPekerjaan.id_tempat = 0;
				}
			},
			selectedRowPendidikan(item){
				this.selectedItemPendidikan = item;
			},
			selectedRowOrganisasi(item){
				this.selectedItemOrganisasi = item;
			},
			createRiwayat(){
				this.modalShow = true;
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';
				this.formState = 'create';
				this.formRiwayat = {};

				if(this.tabName == 'riwayatPekerjaan'){
					this.modalTitle = 'Tambah riwayat pekerjaan';
					this.$store.dispatch('cu/getPus',this.profile.id_pus);
					this.$store.dispatch(this.kelas + '/createPekerjaan');	
				}else if(this.tabName == 'riwayatPendidikan'){
					this.modalTitle = 'Tambah riwayat pendidikan';
					this.$store.dispatch('cu/getPus',this.profile.id_pus);
					this.$store.dispatch(this.kelas + '/createPendidikan');
				}else if(this.tabName == 'riwayatOrganisasi'){
					this.modalTitle = 'Tambah riwayat organisasi';
					this.$store.dispatch('cu/getPus',this.profile.id_pus);
					this.$store.dispatch(this.kelas + '/createOrganisasi');
				}else if(this.tabName == 'keluarga'){
					this.modalTitle = 'Tambah data keluarga';
					this.$store.dispatch('cu/getPus',this.profile.id_pus);
					this.$store.dispatch(this.kelas + '/createKeluarga');
				}else if(this.tabName == 'anggotaCu'){
					this.modalTitle = 'Tambah data anggota CU';
					this.$store.dispatch('cu/getPus',this.profile.id_pus);
					this.$store.dispatch(this.kelas + '/createAnggotaCu');
				}
			},
			updateRiwayat(data){
				this.modalShow = true;
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';
				this.formState = 'edit';

				if(this.tabName == 'riwayatPekerjaan'){
					this.modalTitle = 'Ubah riwayat pekerjaan';
					this.$store.dispatch('cu/getPus',this.profile.id_pus);
					if(data){
						this.formRiwayat.pekerjaan = data;
					}else{
						this.formRiwayat.pekerjaan = this.selectedItemPekerjaan;
					}
				}else if(this.tabName == 'riwayatPendidikan'){
					this.modalTitle = 'Ubah riwayat pendidikan';
					this.$store.dispatch('cu/getPus',this.profile.id_pus);
					if(data){
						this.formRiwayat.pendidikan = data;
					}else{
						this.formRiwayat.pendidikan = this.selectedItemPendidikan;
					}
				}else if(this.tabName == 'riwayatOrganisasi'){
					this.modalTitle = 'Ubah riwayat organisasi';
					this.$store.dispatch('cu/getPus',this.profile.id_pus);
					if(data){
						this.formRiwayat.organisasi = data;
					}else{
						this.formRiwayat.organisasi = this.selectedItemOrganisasi;
					}
					this.formRiwayat.organisasi.aktif = 'Ya';
				}else if(this.tabName == 'keluarga'){
					this.modalTitle = 'Ubah data keluarga';
					this.$store.dispatch('cu/getPus',this.profile.id_pus);
					if(data){
						this.formRiwayat.keluarga = data;
					}else{
						this.formRiwayat.keluarga = this.selectedItemKeluarga;
					}
				}else if(this.tabName == 'anggotaCu'){
					this.modalTitle = 'Ubah data anggota CU';
					this.$store.dispatch('cu/getPus',this.profile.id_pus);
					if(data){
						this.formRiwayat.anggotaCu = data;
					}else{
						this.formRiwayat.anggotaCu = this.selectedItemAnggotaCu;
					}
				}
			},		
			destroyRiwayat(data){
				this.modalShow = true;
				this.modalState = 'confirm-tutup';
				this.modalColor = '';

				if(this.tabName == 'riwayatPekerjaan'){
					if(data){
						this.formRiwayat.pekerjaan = data;
					}else{
						this.formRiwayat.pekerjaan = this.selectedItemPekerjaan;
					}
					this.modalTitle = this.modalTitle = 'Hapus riwayat pekerjaan ' + this.formRiwayat.pekerjaan.name + ' ?';
				}else if(this.tabName == 'riwayatPendidikan'){
					if(data){
						this.formRiwayat.pendidikan = data;
					}else{
						this.formRiwayat.pendidikan = this.selectedItemPendidikan;
					}
					this.modalTitle = this.modalTitle = 'Hapus riwayat pendidikan ' + this.formRiwayat.pendidikan.name + ' di ' + this.formRiwayat.organisasi.tempat + ' ?';
				}else if(this.tabName == 'riwayatOrganisasi'){
					if(data){
						this.formRiwayat.organisasi = data;
					}else{
						this.formRiwayat.organisasi = this.selectedItemOrganisasi;
					}
					this.modalTitle = this.modalTitle = 'Hapus riwayat berorganisasi sebagai ' + this.formRiwayat.organisasi.name + ' di ' + this.formRiwayat.organisasi.tempat + ' ?';
				}else if(this.tabName == 'riwayatKeluarga'){
					if(data){
						this.formRiwayat.keluarga = data;
					}else{
						this.formRiwayat.keluarga = this.selectedItemKeluarga;
					}
					this.modalTitle = this.modalTitle = 'Hapus data keluarga bernama ' + this.formRiwayat.keluarga.name + ' ?';
				}else if(this.tabName == 'riwayatAnggotaCu'){
					if(data){
						this.formRiwayat.anggotaCu = data;
					}else{
						this.formRiwayat.anggotaCu = this.selectedItemAnggotaCu;
					}
					this.modalTitle = this.modalTitle = 'Hapus data anggota CU di ' + this.formRiwayat.anggotaCu.name + ' ?';
				}
			},
			modalTutup() {
				this.modalShow = false;

				if(this.tabName == 'identitas'){
					this.changeTab('identitas');
				}else if(this.tabName == 'riwayatPekerjaan'){
					this.changeTab('riwayatPekerjaan');
				}else if(this.tabName == 'riwayatPendidikan'){
					this.changeTab('riwayatPendidikan');
				}else if(this.tabName == 'riwayatOrganisasi'){
					this.changeTab('riwayatOrganisasi');
				}else if(this.tabName == 'keluarga'){
					this.changeTab('keluarga');
				}else if(this.tabName == 'anggotaCu'){
					this.changeTab('anggotaCu');
				}
			},
			modalConfirmOk() {
				if (this.tabName == 'riwayatPekerjaan') {
					this.$store.dispatch(this.kelas + '/destroyPekerjaan', this.selectedItemPekerjaan.id);
				}else if (this.tabName == 'riwayatPendidikan') {
					this.$store.dispatch(this.kelas + '/destroyPendidikan', this.selectedItemPendidikan.id);
				}else if (this.tabName == 'riwayatOrganisasi') {
					this.$store.dispatch(this.kelas + '/destroyOrganisasi', this.selectedItemOrganisasi.id);
				}else if (this.tabName == 'keluarga') {
					this.$store.dispatch(this.kelas + '/destroyKeluarga', this.selectedItemKeluarga.id);
				}else if (this.tabName == 'anggotaCu') {
					this.$store.dispatch(this.kelas + '/destroyAnggotaCu', this.selectedItemAnggotaCu.id);
				}
			},
			cancelClick(){
				this.modalShow = false;
			},
			itemDataPasswordReset(){
				this.itemDataPassword.password_old = '';
				this.itemDataPassword.password = '';
				this.itemDataPassword.password_confirm = '';
			},
			moment: function () {
				return moment();
			},
			other() {
				// bootstrap select
				$('.bootstrap-select').selectpicker();
			}
		},
		computed:{
			...mapGetters('pengelola',{
				form: 'data',
				formStat: 'dataStat',
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('cu',{
				modelCu: 'dataS',
				modelCuStat: 'dataStatS',
			}),
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat',
			}),
		},
	}
</script>