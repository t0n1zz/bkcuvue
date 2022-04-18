<template>
	<div>
		<!-- page-header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="level" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">
					
						<!-- informasi umum -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">1. Informasi Umum</h5>
							</div>
							<div class="card-body">	
								<div class="row">

									<!-- gambar utama -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Gambar:</h5>

											<!-- imageupload -->
											<app-image-upload :image_loc="'/images/pertemuan/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
										</div>
									</div>


									<!-- kode -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.kode_diklat')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.kode_diklat')}">
												<i class="icon-cross2" v-if="errors.has('form.kode_diklat')"></i>
												Kode Kegiatan: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="kode_diklat" class="form-control" placeholder="Silahkan masukkan kode kegiatan" v-validate="'required|min:5'" data-vv-as="Kode Kegiatan" v-model="form.kode_diklat">
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.kode_diklat')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.kode_diklat') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- name -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.name')}">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i>
												Nama: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama diklat" v-validate="'required|min:5'" data-vv-as="Nama" v-model="form.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- periode -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.periode')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.periode')}">
												<i class="icon-cross2" v-if="errors.has('form.periode')"></i>
												Periode: <wajib-badge></wajib-badge> <info-icon :message="'Format: tahun. Contoh: 2019'"></info-icon></h5>

											<!-- input -->
											<cleave 
												name="periode"
												v-model="form.periode" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.year" 
												placeholder="Silahkan masukkan periode"
												v-validate="'required'" data-vv-as="Periode"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.periode')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.periode') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- mulai -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.mulai')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.mulai')}">
												<i class="icon-cross2" v-if="errors.has('form.mulai')"></i>
												Tgl. Mulai: <wajib-badge></wajib-badge></h5>

											<!-- input -->
											<date-picker @dateSelected="form.mulai = $event" :defaultDate="form.mulai"></date-picker>	
											<input v-model="form.mulai" v-show="false" v-validate="'required'" data-vv-as="Tgl. mulai"/>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.mulai')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.mulai') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- selesai -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.selesai')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.selesai')}">
												<i class="icon-cross2" v-if="errors.has('form.selesai')"></i>
												Tgl. Selesai: <wajib-badge></wajib-badge></h5>

											<!-- input  -->
											<date-picker @dateSelected="form.selesai = $event" :defaultDate="form.selesai"></date-picker>	
											<input v-model="form.selesai" v-show="false" v-validate="'required'" data-vv-as="Tgl. selesai"/>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.selesai')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.selesai') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- durasi -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.durasi')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.durasi')}">
												<i class="icon-cross2" v-if="errors.has('form.durasi')"></i>
												Durasi: <small>jam</small> <wajib-badge></wajib-badge></h5>

											<!-- input -->
											<cleave 
												name="durasi"
												v-model="form.durasi" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.number3" 
												placeholder="Silahkan masukkan durasi kegiatan"
												v-validate="'required'" data-vv-as="Durasi"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.durasi')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.durasi') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- peserta min -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.peserta_min')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.peserta_min')}">
												<i class="icon-cross2" v-if="errors.has('form.peserta_min')"></i>
												Peserta Min: <wajib-badge></wajib-badge></h5>

											<!-- input -->
											<cleave 
												name="peserta_min"
												v-model="form.peserta_min" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.number3" 
												placeholder="Silahkan masukkan peserta min"
												v-validate="'required'" data-vv-as="Peserta min"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.peserta_min')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.peserta_min') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- peserta max cu -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.peserta_max')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.peserta_max')}">
												<i class="icon-cross2" v-if="errors.has('form.peserta_max')"></i>
												Peserta Max: <wajib-badge></wajib-badge></h5>

											<!-- input -->
											<cleave 
												name="peserta_max"
												v-model="form.peserta_max" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.number3" 
												placeholder="Silahkan masukkan peserta max"
												v-validate="'required'" data-vv-as="Peserta max"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.peserta_max')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.peserta_max') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- peserta max -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.peserta_max_cu')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.peserta_max_cu')}">
												<i class="icon-cross2" v-if="errors.has('form.peserta_max_cu')"></i>
												Peserta Max Per CU: <wajib-badge></wajib-badge></h5>

											<!-- input -->
											<cleave 
												name="peserta_max_cu"
												v-model="form.peserta_max_cu" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.number3" 
												placeholder="Silahkan masukkan peserta max per cu"
												v-validate="'required'" data-vv-as="Peserta max per cu"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.peserta_max_cu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.peserta_max_cu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>
									

									<!-- peserta -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Sasaran Peserta: <wajib-badge></wajib-badge></h5>

											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="1" v-model="sasaran">
													Pengurus
												</label>
											</div>	
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="2" v-model="sasaran">
													Pengawas
												</label>
											</div>	
											<div class="form-check form-check-inline">	
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="3" v-model="sasaran">
													Komite
												</label>
											</div>	
											<div class="form-check form-check-inline">	
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="4" v-model="sasaran">
													Penasihat
												</label>
											</div>	
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="5" v-model="sasaran">
													Senior Manajer
												</label>
											</div>	
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="6" v-model="sasaran">
													Manajer
												</label>
											</div>	
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="7" v-model="sasaran">
													Supervisor
												</label>
											</div>
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="8" v-model="sasaran">
													Staf
												</label>
											</div>
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="9" v-model="sasaran">
													Kontrak
												</label>
											</div>
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="10" v-model="sasaran">
													Kolektor
												</label>
											</div>
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="11" v-model="sasaran">
													Kelompok inti
												</label>
											</div>
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="12" v-model="sasaran">
													Supporting Unit
												</label>
											</div>
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input type="checkbox" class="form-check-input" value="13" v-model="sasaran">
													Vendor sMartCU
												</label>
											</div>

										</div>
									</div>
									
								</div>
							</div>
						</div>

						<!-- tempat -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">2. Tempat</h5>
							</div>
							<div class="card-body">	
								<div class="row">

									<!-- tipe tempat -->
									<div class="col-md-12">
										<div class="form-group" :class="{'has-error' : errors.has('form.tipe_tempat')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.tipe_tempat')}">
												<i class="icon-cross2" v-if="errors.has('form.tipe_tempat')"></i>
												Tipe Tempat: <wajib-badge></wajib-badge>
											</h5>

											<!-- select -->
											<select class="form-control" name="tipe_tempat" v-model="form.tipe_tempat" data-width="100%" v-validate="'required'" data-vv-as="Tipe Tempat">
												<option disabled value="">Silahkan pilih tipe tempat</option>
												<option value="ONLINE">ONLINE</option>
												<option value="OFFLINE">OFFLINE</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.tipe_tempat')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tipe_tempat') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- Provinsi -->
									<div class="col-md-4" v-if="form.tipe_tempat == 'OFFLINE'">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_provinces')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_provinces')}">
												<!-- <i class="icon-cross2" v-if="errors.has('form.id_provinces')"></i> -->
												Provinsi: 
												<!-- <wajib-badge></wajib-badge> -->
											</h5>

											<!-- select -->
											<select class="form-control" name="id_provinces" v-model="form.id_provinces" data-width="100%" data-vv-as="Provinsi" :disabled="modelProvinces.length === 0" @change="changeProvinces($event.target.value)">
												<option disabled value="">
													<span v-if="modelProvincesStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih provinsi</span>
												</option>
												<option v-for="(provinces, index) in modelProvinces" :key="index" :value="provinces.id">{{provinces.name}}</option>
											</select>

											<!-- error message -->
											<!-- <small class="text-muted text-danger" v-if="errors.has('form.id_provinces')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_provinces') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small> -->
										</div>
									</div>

									<!-- kabupaten -->
									<div class="col-md-4" v-if="form.tipe_tempat == 'OFFLINE'">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_regencies')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_regencies')}">
												<!-- <i class="icon-cross2" v-if="errors.has('form.id_regencies')"></i> -->
												Kabupaten: 
												<!-- <wajib-badge></wajib-badge> -->
											</h5>

											<!-- select -->
											<select class="form-control"  name="id_regencies" v-model="form.id_regencies" data-width="100%" data-vv-as="Kabupaten" @change="changeRegencies($event.target.value)" :disabled="modelRegencies.length === 0">
												<option disabled value="">
													<span v-if="modelRegenciesStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih kabupaten</span>
												</option>
												<option v-for="(regencies, index) in modelRegencies" :value="regencies.id" :key="index">{{regencies.name}}</option>
											</select>

											<!-- error message -->
											<!-- <small class="text-muted text-danger" v-if="errors.has('form.id_regencies')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_regencies') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small> -->
										</div>
									</div>

									<!-- tempat -->
									<div class="col-md-4" v-if="form.tipe_tempat == 'OFFLINE'">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_tempat')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_tempat')}">
												<!-- <i class="icon-cross2" v-if="errors.has('form.id_tempat')"></i> -->
												Tempat: 
												<!-- <wajib-badge></wajib-badge> -->
											</h5>

											<div class="input-group">
												<!-- select -->
												<select class="form-control" name="id_tempat" v-model="form.id_tempat"  data-vv-as="Tempat" :disabled="!form.id_regencies" @change="changeTempat($event.target.value)">
													<option disabled value="">
														<span v-if="modelTempatStat === 'loading'">Mohon tunggu...</span>
														<span v-else>Silahkan pilih tempat</span>
													</option>
													<option value="0">Belum ditentukan tempat</option>
													<option disabled value="">----------------</option>
													<option v-for="(tempat, index) in modelTempat" :value="tempat.id" :key="index">{{tempat.name}}</option>
												</select>

												<!-- button -->
												<div class="input-group-append">
													<button type="button" class="btn btn-light" @click.prevent="modalOpen('tempat')" :disabled="form.id_regencies === ''">
														<i class="icon-plus22"></i>
													</button>
												</div>
											</div>
										
											<!-- error message -->
											<!-- <small class="text-muted text-danger" v-if="errors.has('form.id_tempat')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_tempat') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small> -->
										</div>
									</div>

									<!-- tempat data -->
									<div class="col-md-12" v-if="form.tipe_tempat == 'OFFLINE' && tempatData != ''">

										<div class="card card-body" v-if="tempatData">
											<div class="media flex-column flex-sm-row mt-0 mb-3">
												<div class="mr-sm-3 mb-2 mb-sm-0">
													<div class="card-img-actions">
														<a href="#" @click.prevent="modalImageShow('/images/tempat/' + tempatData.gambar + '.jpg')" v-if="tempatData.gambar">
															<img :src="'/images/tempat/' + tempatData.gambar + 'n.jpg'" class="img-fluid img-preview rounded" >
															<span class="card-img-actions-overlay card-img"><i class="icon-enlarge6 icon-2x"></i></span>
														</a>
														<a href="#" @click.prevent="modalImageShow('/images/no_image.jpg')" v-else>
															<img :src="'/images/no_image.jpg'" class="img-fluid img-preview rounded" >
															<span class="card-img-actions-overlay card-img"><i class="icon-enlarge6 icon-2x"></i></span>
														</a>
													</div>
												</div>

												<div class="media-body">
													<h4 class="media-title">{{ tempatData.name }}</h4>
													<hr>
													<div class="row">
															<div class="col-md-6">
																<ul class="list list-unstyled mb-0">
																	<li><b>Provinsi:</b> 
																		<span v-if="tempatData.provinces">{{ tempatData.provinces.name }}</span>
																		<span v-else>-</span>
																	</li>
																	<li><b>Kabupaten/Kota:</b>
																		<span v-if="tempatData.regencies">{{ tempatData.regencies.name }}</span>
																		<span v-else>-</span>
																	</li>
																	<li><b>Kecamatan:</b> 
																		<span v-if="tempatData.districts">{{ tempatData.districts.name }}</span>
																		<span v-else>-</span>
																	</li>
																	<li><b>Kelurahan:</b> 
																		<span v-if="tempatData.villages">{{ tempatData.villages.name }}</span>
																		<span v-else>-</span>
																	</li>
																	<li><b>Alamat:</b> 
																		<span v-if="tempatData.alamat">{{ tempatData.alamat }}</span>
																		<span v-else>-</span>
																	</li>
																</ul>
															</div>
															<div class="col-md-6">
																<ul class="list list-unstyled mb-0">
																	<li><b>Website:</b>
																		<span v-if="tempatData.website">{{ tempatData.website }}</span>
																		<span v-else>-</span>
																	</li>
																	<li><b>Email:</b>
																		<span v-if="tempatData.email">{{ tempatData.email }}</span>
																		<span v-else>-</span>
																	</li>
																	<li><b>No. Telp:</b>
																		<span v-if="tempatData.telp">{{ tempatData.telp }}</span>
																		<span v-else>-</span>
																	</li>
																	<li><b>No. Hp:</b>
																		<span v-if="tempatData.hp">{{ tempatData.hp }}</span>
																		<span v-else>-</span>
																	</li>
																	<li><b>Kode Pos:</b>
																		<span v-if="tempatData.pos">{{ tempatData.pos }}</span>
																		<span v-else>-</span>
																	</li>
																</ul>
															</div>
														</div>
												</div>
											</div>
										</div>
										
									</div>

								</div>
							</div>
						</div>
						
						<!-- keterangan -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">3. Informasi</h5>
							</div>
							<div class="card-body">	
								<div class="row">

									<!-- kerangka -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Kerangka Acuan:</h5>

											<ckeditor type="classic" 
											:config="ckeditorNoImageConfig" v-model="form.keterangan"></ckeditor>

										</div>
									</div>

									<!-- jadwal -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Jadwal:</h5>

											<ckeditor type="classic"
											:config="ckeditorNoImageConfig"  v-model="form.jadwal"></ckeditor>
										</div>
									</div>
									
								</div>
							</div>
						</div>

						<!-- panitia & fasilitator -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">4. Panitia & Fasilitator <wajib-badge></wajib-badge></h5>
							</div>
							<div class="card-body pb-2">
								<div class="row">

									<div class="col-md-12">

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahPanitia')">
											<i class="icon-plus22"></i> Tambah
										</button>

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahPanitia')"
										:disabled="!selectedItemPanitia.index">
											<i class="icon-pencil5"></i> Ubah
										</button>

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusPanitia')" :disabled="!selectedItemPanitia.index">
											<i class="icon-bin2"></i> Hapus
										</button>

									</div>

								</div>		
							</div>

							<data-table :items="itemDataPanitia" :columnData="columnDataPanitia" :itemDataStat="itemDataPanitiaStat">
								<template slot="item-desktop" slot-scope="props">
									<tr :class="{ 'bg-info': selectedItemPanitia.index == props.index + 1}" class="text-nowrap" @click="selectedRow(props.item, props.index + 1, 'panitia')" v-if="props.item">
										<td>{{ props.index + 1 }}</td>
										<td>
											<img :src="'/images/aktivis/' + props.item.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
											<img :src="'/images/no_image.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
										</td>
										<td>{{ props.item.name }}</td>
										<td>{{ props.item.lembaga }}</td>
										<td>{{ props.item.asal }}</td>
										<td>{{ props.item.peran }}</td>
										<td>{{ props.item.keterangan }}</td>
										<td>{{ props.item.email }}</td>
										<td>{{ props.item.hp }}</td>
									</tr>
								</template>	
							</data-table>

						</div>

						<!-- keputusan -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">5. Interaksi Peserta <br/> 
									<small class="text-muted">Di isi apabila ada pengaturan pertanyaan dan keputusan</small></h5>
							</div>
							<div class="card-body pb-2">
								
								<div class="row">

									<!-- pertanyaan keputusan-->
									<div class="col-md-6">
										<div class="form-group" >

											<!-- title -->
											<h5>Batasan Jumlah Pertanyaan Per-CU</h5>

											<!-- input -->
											<cleave 
												name="pertanyaan_cu"
												v-model="form.pertanyaan_cu" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.number3" 
												placeholder="Silahkan masukkan batasan"></cleave>

											<!-- error message -->
											<small class="text-muted">Kosongkan apabila tidak ada batasan pada jumlah pertanyaan yang bisa diberikan CU</small>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group" >

											<!-- title -->
											<h5>Batasan Jumlah Pertanyaan Per-Peserta</h5>

											<!-- input -->
											<cleave 
												name="pertanyaan_cu"
												v-model="form.pertanyaan_user" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.number3" 
												placeholder="Silahkan masukkan batasan"></cleave>

											<!-- error message -->
											<small class="text-muted">Kosongkan apabila tidak ada batasan pada jumlah pertanyaan yang bisa diberikan peserta</small>
										</div>
									</div>

									<div class="col-md-12"><hr/></div>

									<!-- jumlah keputusan-->
									<div class="col-md-6">
										<div class="form-group" >

											<!-- title -->
											<h5>Batasan Jumlah Keputusan Per-CU</h5>

											<!-- input -->
											<cleave 
												name="keputusan_cu"
												v-model="form.keputusan_cu" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.number3" 
												placeholder="Silahkan masukkan batasan"></cleave>

											<!-- error message -->
											<small class="text-muted">Kosongkan apabila tidak ada batasan pada jumlah keputusan yang bisa diberikan CU</small>
										</div>
									</div>

									<div class="col-md-6">
										<div class="form-group" >

											<!-- title -->
											<h5>Batasan Jumlah Keputusan Per-Peserta</h5>

											<!-- input -->
											<cleave 
												name="keputusan_cu"
												v-model="form.keputusan_user" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.number3" 
												placeholder="Silahkan masukkan batasan"></cleave>

											<!-- error message -->
											<small class="text-muted">Kosongkan apabila tidak ada batasan pada jumlah keputusan yang bisa diberikan peserta</small>
										</div>
									</div>

									<!-- pilihan keputusan -->
									<div class="col-md-12">

										<h5>
											Pilihan persetujuan pada keputusan 
											<br/>
											<small class="text-muted">Kosongkan apabila tidak membutuhkan persetujuan</small>
										</h5>
										<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahPilih')">
											<i class="icon-plus22"></i> Tambah
										</button>

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahPilih')"
										:disabled="!selectedItemPilih.index">
											<i class="icon-pencil5"></i> Ubah
										</button>

										<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusPilih')" :disabled="!selectedItemPilih.index">
											<i class="icon-bin2"></i> Hapus
										</button>

									</div>

								</div>		
							</div>

							<data-table :items="itemDataPilih" :columnData="columnDataPilih" :itemDataStat="itemDataPilihStat">
								<template slot="item-desktop" slot-scope="props">
									<tr :class="{ 'bg-info': selectedItemPilih.index == props.index  + 1}" class="text-nowrap" @click="selectedRow(props.item, props.index + 1, 'pilih')" v-if="props.item">
										<td>{{ props.index + 1 }}</td>
										<td>{{ props.item.name }}</td>
									</tr>
								</template>	
							</data-table>

						</div>

						<!-- form info -->
						<form-info></form-info>	
						<br/>

						<!-- form button -->
						<div class="card card-body">
							<form-button
								:cancelState="cancelState"
								:formValidation="'form'"
								@cancelClick="back"></form-button>
						</div>	

					</form>
				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<template slot="modal-body1">
				<!-- panitia -->
				<form-panitia 
				:mode="formPanitiaMode"
				:selected="selectedItemPanitia"
				@createPanitia="createPanitia"
				@editPanitia="editPanitia"
				@tutup="modalTutup" v-if="state == 'tambahPanitia' || state == 'ubahPanitia'"></form-panitia>
				<!-- pilih -->
				<form-pilih 
				:mode="formPilihMode"
				:selected="selectedItemPilih"
				@createPilih="createPilih"
				@editPilih="editPilih"
				@tutup="modalTutup" v-else-if="state == 'tambahPilih' || state == 'ubahPilih'"></form-pilih>
			</template>

			<!-- tambah tempat -->
			<template slot="modal-body2">
				<form-tempat 
				:id_provinces="form.id_provinces"
				:id_regencies="form.id_regencies"
				@tutup="modalTutup"></form-tempat>
			</template>

		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import _ from 'lodash';
	import pageHeader from "../../components/pageHeader.vue";
	import infoIcon from "../../components/infoIcon.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import { toMulipartedForm } from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import formPanitia from "./formPanitia.vue";
	import formPilih from "./formPilih.vue";
	import formTempat from "./formTempat.vue";
	import Cleave from 'vue-cleave-component';
	import dataTable from '../../components/datatable.vue';
	import DatePicker from "../../components/datePicker.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			message,
			formButton,
			formInfo,
			formPanitia,
			formPilih,
			formTempat,
			Cleave,
			dataTable,
			infoIcon,
			wajibBadge,
			DatePicker
		},
		data() {
			return {
				title: 'Tambah Pertemuan BKCU',
				titleDesc: 'Menambah pertemuan BKCU baru',
				titleIcon: 'icon-plus3',
				level: 2,
				level2Title: 'Pertemuan BKCU',
				kelas: 'kegiatanBKCU',
				sasaran: [],
				tempatData: '',
				ckeditorNoImageConfig: {
					toolbar: {
						items: [
							'heading',
							'|',
							'bold',
							'italic',
							'link',
							'bulletedList',
							'numberedList',
							'blockQuote',
							'insertTable',
							'mediaEmbed',
							'undo',
							'redo'
						]
					},
					table: {
						contentToolbar: [
							'tableColumn',
							'tableRow',
							'mergeTableCells'
						]
					},
				},
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
					},
					year:{
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
				columnDataPanitia:[
					{ title: 'No.' },
					{ title: 'Foto' },
					{ title: 'Nama' },
					{ title: 'Lembaga' },
					{ title: 'Asal' },
					{ title: 'Peran' },
					{ title: 'Keterangan' },
					{ title: 'Email' },
					{ title: 'No. Hp' },
				],
				selectedItemPanitia: '',
				formPanitiaMode: '',
				itemDataPanitia: [],
				itemDataPanitiaStat: 'success',
				columnDataPilih:[
					{ title: 'No.' },
					{ title: 'Nama' },
				],
				selectedItemPilih: '',
				formPilihMode: '',
				itemDataPilih: [],
				itemDataPilihStat: 'success',
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
			formStat(value){
				if(value === "success"){
					if(this.$route.meta.mode == 'edit'){
						this.checkTipe(this.form.tipe);
						this.changeProvinces(this.form.id_provinces);
						this.changeRegencies(this.form.id_regencies);

						var i;
						for(i = 0; i < this.form.sasaran.length; i++){
							this.sasaran.push(this.form.sasaran[i].id.toString());
						}
						
						var valDalam;
						for (valDalam of this.form.panitia_dalam) {
							let formData = {};
							formData.aktivis_id = valDalam.id;
							formData.name = valDalam.name;
							formData.gambar = valDalam.gambar;
							formData.peran = valDalam.pivot.peran;
							formData.asal = 'dalam';
							formData.keterangan = valDalam.pivot.keterangan;
							formData.email = valDalam.email;
							formData.hp = valDalam.hp;

							if(valDalam.pekerjaan_aktif){
								if(valDalam.pekerjaan_aktif.tipe == 1){
									formData.lembaga = valDalam.pekerjaan_aktif.cu.name;
								}else if(valDalam.pekerjaan_aktif.tipe == 2){
									formData.lembaga = valDalam.pekerjaan_aktif.lembaga_lain.name;
								}else if(valDalam.pekerjaan_aktif.tipe == 3){
									formData.lembaga = "PUSKOPCUINA"
								}
							}
						
							this.itemDataPanitia.push(formData);
						}

						var valLuar;
						for (valLuar of this.form.panitia_luar) {
							let formData = {};
							formData.aktivis_id = valLuar.id;
							formData.name = valLuar.name;
							formData.gambar = valLuar.gambar;
							formData.peran = valLuar.pivot.peran;
							formData.asal = 'luar';
							formData.keterangan = valLuar.pivot.keterangan;
							formData.lembaga = valLuar.lembaga;
							formData.email = valLuar.email;
							formData.hp = valLuar.hp;

							this.itemDataPanitia.push(formData);
						}

						var valLuarLembaga;
						for (valLuarLembaga of this.form.panitia_luar_lembaga) {
							let formData = {};
							formData.aktivis_id = valLuarLembaga.id;
							formData.name = valLuarLembaga.name;
							formData.gambar = valLuarLembaga.gambar;
							formData.peran = valLuarLembaga.pivot.peran;
							formData.asal = 'luar lembaga';
							formData.keterangan = valLuarLembaga.pivot.keterangan;
							formData.lembaga = valLuarLembaga.name;
							formData.email = valLuarLembaga.email;
							formData.hp = valLuarLembaga.hp;

							this.itemDataPanitia.push(formData);
						}

						var valPilih;
						for (valPilih of this.form.pilih) {
							let formData = {};
							formData.id = valPilih.id;
							formData.name = valPilih.name;

							this.itemDataPilih.push(formData);
						}
					}
				}
			},
			modelTempatStat(value){
				if(value === "success"){
					this.changeTempat(this.form.id_tempat);
				}
			},
			updateStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateResponse.message;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			},
			updateTempatStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateTempatResponse.message;
					this.changeRegencies(this.form.id_regencies);
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateTempatResponse;
				}
			}
    },
		methods: {
			fetch(){
				if(this.$route.meta.mode == 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
				} else {
					this.checkTipe(this.$route.params.tipe);
					this.$store.dispatch(this.kelas + '/create');
				}
				this.$store.dispatch('provinces/get');
			},
			checkTipe(tipe){
				if(tipe == 'diklat_bkcu'){
					this.level2Title = 'Diklat BKCU';
				}else{
					this.level2Title = 'Pertemuan BKCU';
				}
				if(this.$route.meta.mode == 'edit'){
					this.title = 'Ubah ' + this.level2Title;
					this.titleDesc = 'Mengubah ' + this.level2Title;
					this.titleIcon = 'icon-pencil5';
				}else{
					this.title = 'Tambah ' + this.level2Title;
					this.titleDesc = 'Menambah ' + this.level2Title;
					this.titleIcon = 'icon-plus3';
				}	
			},
			changeProvinces(id){
				this.$store.dispatch('regencies/getProvinces', id);
			},
			changeRegencies(id){
				this.$store.dispatch('tempat/get', id);
				this.tempatData = "";
			},
			changeTempat(id){
				if(id != 0){
					this.tempatData = _.find(this.modelTempat, function(o){
						return o.id == id;
					});
				}
			},
			createPanitia(value){
				this.itemDataPanitia.push(value);
				this.selectedItemPanitia = {};
				this.modalTutup();
			},
			editPanitia(value){
				_.remove(this.itemDataPanitia, {
						index: value.index
				});
				this.itemDataPanitia.push(value);
				this.selectedItemPanitia = {};
				this.modalTutup(); 
			},
			createPilih(value){
				this.itemDataPilih.push(value);
				this.selectedItemPilih = {};
				this.modalTutup();
			},
			editPilih(value){
				_.remove(this.itemDataPilih, {
						index: value.index
				});
				this.itemDataPilih.push(value);
				this.selectedItemPilih = {};
				this.modalTutup(); 
			},
			save() {
				this.form.sasaran = this.sasaran;
				this.form.panitia = this.itemDataPanitia;
				this.form.pilih = this.itemDataPilih;
				this.state = '';
				
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode == 'edit'){
							this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, formData]);
						}else{
							this.$store.dispatch(this.kelas + '/store', [this.$route.params.tipe ,formData]);
					}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			back(){
				if(this.$route.meta.isDetail){
					this.$router.push({name: this.kelas + 'Detail', params: { id: this.form.id }});
				}else{
					if(this.$route.meta.mode == 'edit'){
						this.$router.push({name: this.kelas, params:{tipe:this.form.tipe, periode: this.momentYear()}});
					}else{
						this.$router.push({name: this.kelas, params:{tipe:this.$route.params.tipe, periode: this.momentYear()}});
					}
				}
			},
			selectedRow(item,index,tipe){
				if(tipe == 'panitia'){
					this.selectedItemPanitia = item;
					this.selectedItemPanitia.index = index;
				}else{
					this.selectedItemPilih = item;
					this.selectedItemPilih.index = index;
				}
			},
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;

				if(isMobile){
					this.selectedItemPanitia = itemMobile;
				}

				if (state == 'hapusPanitia') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Panitia/Fasilitator ' + this.selectedItemPanitia.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahPanitia'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Panitia/Fasilitator';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formPanitiaMode = 'edit';
				}else if(state == 'tambahPanitia'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Panitia/Fasilitator';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formPanitiaMode = 'create';
				}else if (state == 'hapusPilih') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus Pilihan ' + this.selectedItemPilih.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahPilih'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah Pilihan';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formPilihMode = 'edit';
				}else if(state == 'tambahPilih'){
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Pilihan';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formPilihMode = 'create';
				}else if(state == 'tempat'){
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah Tempat';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
				}
			},
			modalImageShow(content){
				this.modalShow = true;
				this.modalState = 'image';
				this.modalContent = content;
				this.modalSize = '';
				this.modalButton = 'Ok';
			},
			modalConfirmOk() {
				this.modalShow = false;

				if (this.state == 'hapusPanitia') {
					_.remove(this.itemDataPanitia, {
						index: this.selectedItemPanitia.index
					});
					this.selectedItemPanitia = {};
				}else if(this.state == 'hapusPilih'){
					_.remove(this.itemDataPilih, {
						index: this.selectedItemPilih.index
					});
					this.selectedItemPilih = {};
				}else{
					if(this.$route.meta.isDetail){
						this.$router.push({name: this.kelas + 'Detail', params: { id: this.form.id }});
					}
				}
			},
			modalTutup() {
 				if(this.updateStat == 'success' && this.state == ''){
					this.$store.dispatch(this.kelas + '/resetUpdateStat');
					this.back();
				}
				this.modalShow = false;
			},
			modalBackgroundClick(){
				if(this.modalState === 'success'){
					this.modalTutup;
				}else if(this.modalState === 'loading'){
					// do nothing
				}else{
					this.modalShow = false
				}
			},
			processFile(event) {
				this.form.gambar = event.target.files[0]
			},
			momentYear(){
				return moment().year();
			}
		},
		computed: {
			...mapGetters('kegiatanBKCU',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('tempat',{
				updateTempatResponse: 'update',
				updateTempatStat: 'updateStat'
			}),
			...mapGetters('provinces',{
				modelProvinces: 'dataS',
				modelProvincesStat: 'dataStatS'
			}),
			...mapGetters('regencies',{
				modelRegencies: 'dataS',
				modelRegenciesStat: 'dataStatS'
			}),
			...mapGetters('tempat',{
				modelTempat: 'dataSForm',
				modelTempatStat: 'dataStatSForm',
			})
		}
	}
</script>