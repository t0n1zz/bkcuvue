<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">

						<!-- identitas -->
						<div class="panel panel-flat border-left-xlg border-left-info">
							<div class="panel-body">
								<div class="row">

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">1</span> Identitas
											<small class="display-block">Identitas pengelola</small>
										</h6>
									</div>

									<!-- foto -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h5>Foto:</h5>

											<!-- imageupload -->
											<app-image-upload :image_loc="'/images/tp/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
										</div>
									</div>  

									<!-- nik -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.nik')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.nik')}">
												<i class="icon-cross2" v-if="errors.has('form.nik')"></i>
												No. KTP:</h5>

											<!-- text -->
											<cleave 
												name="nik"
												v-model="form.nik" 
												class="form-control" 
												:options="cleaveOption.number12"
												placeholder="Silahkan masukkan no KTP"
												v-validate="'required'" data-vv-as="No. KTP"></cleave>
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.nik')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.nik') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- name -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.name')}">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i>
												Nama:</h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama" v-validate="'required|min:5'" data-vv-as="Nama" v-model="form.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- gender -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.kelamin')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.kelamin')}">
												<i class="icon-cross2" v-if="errors.has('form.kelamin')"></i>
												Gender:
											</h5>

											<!-- select -->
											<select class="bootstrap-select" name="kelamin" v-model="form.kelamin" data-width="100%" v-validate="'required'" data-vv-as="Gender">
												<option disabled value="">Silahkan pilih gender</option>
												<option data-divider="true"></option>
												<option value="Pria">Pria</option>
												<option value="Wanita">Wanita</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.kelamin')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.kelamin') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- darah -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.darah')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.darah')}">
												<i class="icon-cross2" v-if="errors.has('form.darah')"></i>
												Gol. Darah:
											</h5>

											<!-- select -->
											<select class="bootstrap-select" name="darah" v-model="form.darah" data-width="100%" v-validate="'required'" data-vv-as="Gol. Darah">
												<option disabled value="">Silahkan pilih golongan darah</option>
												<option data-divider="true"></option>
												<option value="A">A</option>
												<option value="B">B</option>
												<option value="AB">AB</option>
												<option value="O">O</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.darah')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.darah') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tinggi -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.tinggi')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.tinggi')}">
												<i class="icon-cross2" v-if="errors.has('form.tinggi')"></i>
												Tinggi <small>(cm)</small>:</h5>

											<!-- text -->
											<cleave 
												name="tinggi"
												v-model="form.tinggi" 
												class="form-control" 
												:options="cleaveOption.number3"
												placeholder="Silahkan masukkan tinggi"
												v-validate="'required'" data-vv-as="Tinggi"></cleave>
											

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.tinggi')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tinggi') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- agama -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.agama')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.agama')}">
												<i class="icon-cross2" v-if="errors.has('form.agama')"></i>
												Agama:
											</h5>

											<!-- select -->
											<select class="bootstrap-select" name="agama" v-model="form.agama" data-width="100%" v-validate="'required'" data-vv-as="Agama">
												<option disabled value="">Silahkan pilih agama</option>
												<option data-divider="true"></option>
												<option value="Buddha">Buddha</option>
												<option value="Hindu">Hindu</option>
												<option value="Islam">Islam</option>
												<option value="Khatolik">Khatolik</option>
												<option value="Kong Hu Cu">Kong Hu Cu</option>
												<option value="Protestan">Protestan</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.agama')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.agama') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tanggal lahir -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.tanggal_lahir')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.tanggal_lahir')}">
												<i class="icon-cross2" v-if="errors.has('form.tanggal_lahir')"></i>
												Tgl. Lahir:</h5>

											<!-- input -->
											<cleave 
												name="tanggal_lahir"
												v-model="form.tanggal_lahir" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.date" 
												placeholder="Silahkan masukkan tgl. lahir"
												v-validate="'required'" data-vv-as="Tgl. lahir"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.tanggal_lahir')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tanggal_lahir') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tempat lahir -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.tempat_lahir')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.tempat_lahir')}">
												<i class="icon-cross2" v-if="errors.has('form.tempat_lahir')"></i>
												Tempat Lahir:</h5>

											<!-- text -->
											<input type="text" name="tempat_lahir" class="form-control" placeholder="Silahkan masukkan tempat lahir" v-validate="'required|min:5'" data-vv-as="Tempat lahir" v-model="form.tempat_lahir">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.tempat_lahir')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tempat_lahir') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- status -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.status')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.status')}">
												<i class="icon-cross2" v-if="errors.has('form.status')"></i>
												Status:
											</h5>

											<!-- select -->
											<select class="bootstrap-select" name="status" v-model="form.status" data-width="100%" v-validate="'required'" data-vv-as="Status Pernikahan">
												<option disabled value="">Silahkan pilih status pernikahan</option>
												<option data-divider="true"></option>
												<option value="Belum menikah">Belum menikah</option>
												<option value="Menikah">Menikah</option>
												<option value="Janda/Duda">Janda/Duda</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.status')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.status') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

								</div>
							</div>
						</div>

						<!-- lokasi -->
						<div class="panel panel-flat border-left-xlg border-left-info">
							<div class="panel-body">
								<div class="row">

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">2</span> Alamat & Kontak
											<small class="display-block">Domisili dan kontak pengelola</small>
										</h6>
									</div>
									
									<!-- Provinsi -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_provinces')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_provinces')}">
												<i class="icon-cross2" v-if="errors.has('form.id_provinces')"></i>
												Provinsi:
											</h5>

											<!-- select -->
											<select class="bootstrap-select" name="id_provinces" v-model="form.id_provinces" data-width="100%" v-validate="'required'" data-vv-as="Provinsi" :disabled="modelProvinces.length === 0" @change="changeProvinces($event.target.value)">
												<option disabled value="">Silahkan pilih Provinsi</option>
												<option data-divider="true"></option>
												<option v-for="provinces in modelProvinces" :value="provinces.id">{{provinces.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_provinces')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_provinces') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kabupaten -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_regencies')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_regencies')}">
												<i class="icon-cross2" v-if="errors.has('form.id_regencies')"></i>
												Kabupaten:
											</h5>

											<!-- select -->
											<select class="bootstrap-select"  name="id_regencies" v-model="form.id_regencies" data-width="100%" v-validate="'required'" data-vv-as="Kabupaten" @change="changeRegencies($event.target.value)" :disabled="modelRegencies.length === 0">
												<option disabled value="">
													<span v-if="modelRegenciesStat === 'loading'"><i class="icon-spinner spinner"></i></span>
													<span v-else>Silahkan pilih kabupaten</span>
												</option>
												<option data-divider="true"></option>
												<option v-for="regencies in modelRegencies" :value="regencies.id">{{regencies.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_regencies')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_regencies') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kecamatan -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_districts')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_districts')}">
												<i class="icon-cross2" v-if="errors.has('form.id_districts')"></i>
												Kecamatan:
											</h5>

											<!-- select -->
											<select class="bootstrap-select"  name="id_districts" v-model="form.id_districts" data-width="100%" v-validate="'required'" data-vv-as="Kabupaten" :disabled="modelDistricts.length === 0" @change="changeDistricts($event.target.value)">
												<option disabled value="">
													<span v-if="modelDistrictsStat === 'loading'"><i class="icon-spinner spinner"></i></span>
													<span v-else>Silahkan pilih kecamatan</span>
												</option>
												<option data-divider="true"></option>
												<option v-for="districts in modelDistricts" :value="districts.id">{{districts.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_regency')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_regency') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kelurahan -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.id_villages')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.id_villages')}">
												<i class="icon-cross2" v-if="errors.has('form.id_villages')"></i>
												Kelurahan:
											</h5>

											<!-- select -->
											<select class="bootstrap-select"  name="id_villages" v-model="form.id_villages" data-width="100%" v-validate="'required'" data-vv-as="Desa" :disabled="modelVillages.length === 0">
												<option disabled value="">
													<span v-if="modelVillagesStat === 'loading'"><i class="icon-spinner spinner"></i> mohon tunggu</span>
													<span v-else>Silahkan pilih kelurahan</span>
												</option>
												<option data-divider="true"></option>
												<option v-for="villages in modelVillages" :value="villages.id">{{villages.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.id_villages')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_villages') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- alamat -->
									<div class="col-md-8">
										<div class="form-group" :class="{'has-error' : errors.has('form.alamat')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.alamat')}">
												<i class="icon-cross2" v-if="errors.has('form.alamat')"></i>
												Alamat:</h5>

											<!-- text -->
											<input type="text" name="alamat" class="form-control" placeholder="Silahkan masukkan alamat" v-validate="'required|min:5'" data-vv-as="Alamat" v-model="form.alamat">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.alamat')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.alamat') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- no hp -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>No. Hp:</h5>

											<!-- text -->
											<cleave 
												v-model="form.hp" 
												class="form-control" 
												:options="cleaveOption.number12"
												placeholder="Silahkan masukkan no hp"></cleave>

											<!-- error message -->
											<small class="text-muted">&nbsp;</small>	
										</div>
									</div>

									<!-- email -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.email')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.email')}">
												<i class="icon-cross2" v-if="errors.has('form.email')"></i>
												Email:</h5>

											<!-- text -->
											<input type="text" name="email" class="form-control" placeholder="Silahkan masukkan alamat email" v-validate="'required|email'" data-vv-as="Email" v-model="form.email">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.email')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.email') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kontak -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h5>Kotak Lainnya:</h5>

											<!-- text -->
											<input type="text" name="kontak" class="form-control" placeholder="Silahkan masukkan kontak lainnya" v-model="form.kontak">

										</div>
									</div>

								</div>
							</div>
						</div>

						<!-- keluarga -->
						<div class="panel panel-flat border-left-xlg border-left-info" v-if="form.keluarga">
							<div class="panel-body">
								<div class="row">

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">3</span> Keluarga
											<small class="display-block">keluarga pengelola</small>
										</h6>
									</div>

									<!-- ayah -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.keluarga.ayah')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.keluarga.ayah')}">
												<i class="icon-cross2" v-if="errors.has('form.keluarga.ayah')"></i>
												Ayah:</h5>

											<!-- text -->
											<input type="text" name="ayah" class="form-control" placeholder="Silahkan masukkan nama ayah" v-validate="'required'" data-vv-as="Ayah" v-model="form.keluarga.ayah">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.keluarga.ayah')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.keluarga.ayah') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- ibu -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.keluarga.ibu')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.keluarga.ibu')}">
												<i class="icon-cross2" v-if="errors.has('form.keluarga.ibu')"></i>
												Ibu:</h5>

											<!-- text -->
											<input type="text" name="ibu" class="form-control" placeholder="Silahkan masukkan nama ibu" v-validate="'required'" data-vv-as="Ibu" v-model="form.keluarga.ibu">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.keluarga.ibu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.keluarga.ibu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- pasangan -->
									<div class="col-md-4" v-if="form.status == 'Menikah' || form.status == 'Duda/Janda'">
										<div class="form-group" :class="{'has-error' : errors.has('form.keluarga.pasangan')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.keluarga.pasangan')}">
												<i class="icon-cross2" v-if="errors.has('form.keluarga.pasangan')"></i>
												Pasangan:</h5>

											<!-- text -->
											<input type="text" name="pasangan" class="form-control" placeholder="Silahkan masukkan nama pasangan" v-validate="'required'" data-vv-as="Pasangan" v-model="form.keluarga.pasangan">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.keluarga.pasangan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.keluarga.pasangan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>
									
									<!-- anak -->
									<div class="col-md-4" v-if="form.status == 'Menikah' || form.status == 'Duda/Janda'" v-for="(anak,index) in formAnak">
										<div class="form-group">

											<!-- title -->
											<h5>Anak {{ index + 1}}:</h5>

											<div class="input-group">
												<!-- text -->
												<input type="text" name="anak" class="form-control" placeholder="Silahkan masukkan nama anak" v-model="anak.value">
												
												<div class="input-group-btn">
													<button class="btn btn-default" v-tooltip:top="'Hapus anak '" @click.prevent="removeAnak(index)">
														<i class="icon-cross"></i>
													</button>
												</div>
											</div>

											<small class="text-muted">&nbsp;</small>
										</div>
									</div>

									<!-- punya anak -->
									<div class="col-md-12" v-if="form.status == 'Menikah' || form.status == 'Duda/Janda'">
										<button class="btn btn-default btn-block" @click.prevent="addAnak()"><i class="icon-plus3"></i> 
											<span v-if="formAnak.length == 0">Punya Anak</span>
											<span v-else>Tambah Anak</span>
										</button>
									</div>
								</div>	
							</div>
						</div>
						
						<!-- anggota cu -->
						<div class="panel panel-flat border-left-xlg border-left-info" v-if="form.anggota_cu">
							<div class="panel-body">
								<div class="row">

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">4</span> Anggota CU
											<small class="display-block">Keanggotaan CU pengelola</small>
										</h6>
									</div>

									<!-- CU -->
									<div class="col-md-4" v-if="profile.id_cu == 0">
										<div class="form-group" :class="{'has-error' : errors.has('form.anggota_cu.id_tempat')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.anggota_cu.id_tempat')}">
												<i class="icon-cross2" v-if="errors.has('form.anggota_cu.id_tempat')"></i>
												CU:
											</h5>

											<!-- select -->
											<select class="bootstrap-select" name="cu_anggota" v-model="form.anggota_cu.name" data-width="100%" v-validate="'required'" data-vv-as="CU anggota" :disabled="modelCU.length == 0">
												<option disabled value="">Silahkan pilih CU</option>
												<option data-divider="true"></option>
												<option value="lain">CU diluar gerakan</option>
												<option data-divider="true"></option>
												<option v-for="cu in modelCU" :value="cu.name">{{cu.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.anggota_cu.id_tempat')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.anggota_cu.id_tempat') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- no_ba -->
									<div class="col-md-4" v-if="form.anggota_cu.name == 'lain'">
										<div class="form-group" :class="{'has-error' : errors.has('form.anggota_cu.cu_name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.anggota_cu.cu_name')}">
												<i class="icon-cross2" v-if="errors.has('form.anggota_cu.cu_name')"></i>
												Nama CU</h5>

											<!-- text -->
											<input type="text" name="anggota_cu_name" class="form-control" placeholder="Silahkan masukkan nama CU" v-validate="'required|min:5'" data-vv-as="Nama CU" v-model="form.anggota_cu.cu_name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.anggota_cu.cu_name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.anggota_cu.cu_name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- no_ba -->
									<div class="col-md-4" v-if="form.anggota_cu.name != ''">
										<div class="form-group" :class="{'has-error' : errors.has('form.anggota_cu.no_ba')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.anggota_cu.no_ba')}">
												<i class="icon-cross2" v-if="errors.has('form.anggota_cu.no_ba')"></i>
												No. BA:</h5>

											<!-- text -->
											<input type="text" name="anggota_no_ba" class="form-control" placeholder="Silahkan masukkan no. BA anggota CU" v-validate="'required|min:5'" data-vv-as="No. BA Anggota CU" v-model="form.anggota_cu.no_ba">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.anggota_cu.no_ba')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.anggota_cu.no_ba') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

								</div>	
							</div>
						</div>

						<!-- pekerjaan -->
						<div class="panel panel-flat border-left-xlg border-left-info" v-if="form.pekerjaan">
							<div class="panel-body">
								<div class="row">

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">5</span> Jabatan
											<small class="display-block">Jabatan pengelola saat ini</small>
										</h6>
									</div>

									<!-- CU -->
									<div class="col-md-4" v-if="profile.id_cu == 0">
										<div class="form-group" :class="{'has-error' : errors.has('form.pekerjaan.id_tempat')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.pekerjaan.id_tempat')}">
												<i class="icon-cross2" v-if="errors.has('form.pekerjaan.id_tempat')"></i>
												Lembaga:
											</h5>

											<!-- select -->
											<select class="bootstrap-select" name="id_tempat" v-model="form.pekerjaan.id_tempat" data-width="100%" v-validate="'required'" data-vv-as="Lembaga pekerjaan" :disabled="modelCU.length == 0" @change="changeLembagaPekerjaan($event.target.value)">
												<option disabled value="">Silahkan pilih CU</option>
												<option data-divider="true"></option>
												<option value="0">Puskopdit BKCU Kalimantan</option>
												<option value="lain">Lembaga lain</option>
												<option data-divider="true"></option>
												<option v-for="cu in modelCU" :value="cu.id">{{cu.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.pekerjaan.id_tempat')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.pekerjaan.id_tempat') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tingkat -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.pekerjaan.tingkat')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.pekerjaan.tingkat')}">
												<i class="icon-cross2" v-if="errors.has('form.pekerjaan.tingkat')"></i>
												Tingkat:
											</h5>

											<!-- select -->
											<select class="bootstrap-select" name="pekerjaan_tingkat" v-model="form.pekerjaan.tingkat" data-width="100%" v-validate="'required'" data-vv-as="Tingkat Pekerjaan">
												<option disabled value="">Silahkan pilih tingkat pekerjaan</option>
												<option data-divider="true"></option>
												<option value="Pengurus">Pengurus</option>
												<option value="Pengawas">Pengawas</option>
												<option value="Komite">Komite</option>
												<option value="Senior Manajer">Senior Manajer (General Manager, CEO, Deputy)</option>
												<option value="Manajer">Manajer</option>
												<option value="Supervisor">Supervisor (Kepala Bagian, Kepala Divisi, Kepala/Koordinator TP, Kepala Bidang)</option>
												<option value="Staf">Staf</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.pekerjaan.tingkat')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.pekerjaan.tingkat') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- jabatan -->
									<div class="col-md-4" v-if="form.pekerjaan.tingkat != ''">
										<div class="form-group" :class="{'has-error' : errors.has('form.pekerjaan.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.pekerjaan.name')}">
												<i class="icon-cross2" v-if="errors.has('form.pekerjaan.name')"></i>
												Jabatan:</h5>

											<!-- text -->
											<input type="text" name="jabatan" class="form-control" placeholder="Silahkan masukkan nama jabatan" v-validate="'required|min:5'" data-vv-as="Jabatan pekerjaan" v-model="form.pekerjaan.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.pekerjaan.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.pekerjaan.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tanggal mulai -->
									<div class="col-md-4" v-if="form.pekerjaan.tingkat != ''">
										<div class="form-group" :class="{'has-error' : errors.has('form.pekerjaan.mulai')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.pekerjaan.mulai')}">
												<i class="icon-cross2" v-if="errors.has('form.pekerjaan.mulai')"></i>
												Tgl. Mulai:</h5>

											<!-- input -->
											<cleave 
												name="pekerjaan_mulai"
												v-model="form.pekerjaan.mulai" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.date" 
												placeholder="Silahkan masukkan tgl. mulai"
												v-validate="'required'" data-vv-as="Tgl. mulai pekerjaan"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.pekerjaan.mulai')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.pekerjaan.mulai') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tanggal selesai -->
									<div class="col-md-4" v-if="form.pekerjaan.tingkat != ''">
										<div class="form-group">

											<!-- title -->
											<h5>Tgl. Selesai</h5>

											<!-- input -->
											<cleave 
												name="pekerjaan_selesai"
												v-model="form.pekerjaan.seleasi" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.date" 
												placeholder="Silahkan masukkan tgl. selesai"></cleave>

											<small class="text-muted">Kosongkan apabila masih bekerja / tidak memiliki periode selesai</small>
										</div>
									</div>

								</div>
							</div>
						</div>

						<!-- pendidikan -->
						<div class="panel panel-flat border-left-xlg border-left-info" v-if="form.pendidikan">
							<div class="panel-body">
								<div class="row">

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">6</span> Pendidikan
											<small class="display-block">Pendidikan tertinggi pengelola</small>
										</h6>
									</div>

									<!-- tingkat -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.pendidikan.tingkat')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.pendidikan.tingkat')}">
												<i class="icon-cross2" v-if="errors.has('form.pendidikan.tingkat')"></i>
												Tingkat:
											</h5>

											<!-- select -->
											<select class="bootstrap-select" name="pendidikan_tingkat" v-model="form.pendidikan.tingkat" data-width="100%" v-validate="'required'" data-vv-as="Tingkat pendidikan">
												<option disabled value="">Silahkan pilih tingkat pendidikan</option>
												<option data-divider="true"></option>
												<option value="SD">SD</option>
												<option value="SMP">SMP</option>
												<option value="SMA/SMK">SMA/SMK</option>
												<option value="D1">D1</option>
												<option value="D2">D2</option>
												<option value="D3">D3</option>
												<option value="D4">D4</option>
												<option value="S1">S1</option>
												<option value="S2">S2</option>
												<option value="S3">S3</option>
												<option value="Lain-lain">Lain-lain</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.pendidikan.tingkat')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.pendidikan.tingkat') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- jurusan -->
									<div class="col-md-4" v-if="form.pendidikan.tingkat != '' &&  form.pendidikan.tingkat != 'SD' && form.pendidikan.tingkat != 'SMP'">
										<div class="form-group" :class="{'has-error' : errors.has('form.pendidikan.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.pendidikan.name')}">
												<i class="icon-cross2" v-if="errors.has('form.pendidikan.name')"></i>
												Jurusan:</h5>

											<!-- text -->
											<input type="text" name="jurusan" class="form-control" placeholder="Silahkan masukkan jurusan" v-validate="'required|min:5'" data-vv-as="Jurusan pendidikan" v-model="form.pendidikan.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.pendidikan.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.pendidikan.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tempat -->
									<div class="col-md-4" v-if="form.pendidikan.tingkat != ''">
										<div class="form-group" :class="{'has-error' : errors.has('form.pendidikan.tempat')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.pendidikan.tempat')}">
												<i class="icon-cross2" v-if="errors.has('form.pendidikan.tempat')"></i>
												Tempat:</h5>

											<!-- text -->
											<input type="text" name="pendidikan_tempat" class="form-control" placeholder="Silahkan masukkan tempat pendidikan" v-validate="'required|min:5'" data-vv-as="Tempat pendidikan" v-model="form.pendidikan.tempat">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.pendidikan.tempat')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.pendidikan.tempat') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tanggal mulai -->
									<div class="col-md-4" v-if="form.pendidikan.tingkat != ''">
										<div class="form-group" :class="{'has-error' : errors.has('form.pendidikan.mulai')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.pendidikan.mulai')}">
												<i class="icon-cross2" v-if="errors.has('form.pendidikan.mulai')"></i>
												Tgl. Mulai:</h5>

											<!-- input -->
											<cleave 
												name="pendidikan_mulai"
												v-model="form.pendidikan.mulai" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.date" 
												placeholder="Silahkan masukkan tgl. mulai"
												v-validate="'required'" data-vv-as="Tgl. mulai pendidikan"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.pendidikan.mulai')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.pendidikan.mulai') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tanggal selesai -->
									<div class="col-md-4" v-if="form.pendidikan.tingkat != ''">
										<div class="form-group">

											<!-- title -->
											<h5>Tgl. Selesai</h5>

											<!-- input -->
											<cleave 
												name="pendidikan_selesai"
												v-model="form.pendidikan.seleasi" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.date" 
												placeholder="Silahkan masukkan tgl. selesai"></cleave>

											<small class="text-muted">Kosongkan apabila masih menjalani pendidikan / belum mengetahui tanggal selesai pendidikan</small>
										</div>
									</div>

								</div>
							</div>
						</div>

						<!-- organisasi -->
						<div class="panel panel-flat border-left-xlg border-left-info" v-if="form.organisasi">
							<div class="panel-body">
								<div class="row">

									<!-- judul -->
									<div class="col-md-12">
										<h6 class="form-wizard-title text-semibold text-primary">
											<span class="form-wizard-count">7</span> Organisasi
											<small class="display-block">Keaktifan pengelola dalam organisasi</small>
										</h6>
									</div>

									<!-- tingkat -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.organisasi.aktif')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.organisasi.aktif')}">
												<i class="icon-cross2" v-if="errors.has('form.organisasi.aktif')"></i>
												Aktif dalam organisasi lain?
											</h5>

											<!-- select -->
											<select class="bootstrap-select" name="organisasi_aktif" v-model="form.organisasi.aktif" data-width="100%" v-validate="'required'" data-vv-as="Aktif Organisasi">
												<option disabled value="">Apakah aktif dalam organisasi lain?</option>
												<option data-divider="true"></option>
												<option value="Ya">Ya</option>
												<option value="Tidak">Tidak</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.organisasi.aktif')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.organisasi.aktif') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- nama -->
									<div class="col-md-4" v-if="form.organisasi.aktif == 'Ya'">
										<div class="form-group" :class="{'has-error' : errors.has('form.organisasi.name')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.organisasi.name')}">
												<i class="icon-cross2" v-if="errors.has('form.organisasi.name')"></i>
												Nama:</h5>

											<!-- text -->
											<input type="text" name="organisasi_name" class="form-control" placeholder="Silahkan masukkan nama" v-validate="'required|min:5'" data-vv-as="Nama organisasi" v-model="form.organisasi.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.organisasi.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.organisasi.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- jabatan -->
									<div class="col-md-4" v-if="form.organisasi.aktif == 'Ya'">
										<div class="form-group" :class="{'has-error' : errors.has('form.organisasi.jabatan')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.organisasi.jabatan')}">
												<i class="icon-cross2" v-if="errors.has('form.organisasi.jabatan')"></i>
												Jabatan/Peran/Tanggungjawab:</h5>

											<!-- text -->
											<input type="text" name="organisasi_name" class="form-control" placeholder="Silahkan masukkan jabatan/peran/tanggungjawab " v-validate="'required|min:5'" data-vv-as="Jabatan/Peran/Tanggungjawab organisasi" v-model="form.organisasi.jabatan">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.organisasi.jabatan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.organisasi.jabatan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tempat -->
									<div class="col-md-4" v-if="form.organisasi.aktif == 'Ya'">
										<div class="form-group" :class="{'has-error' : errors.has('form.organisasi.tempat')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.organisasi.tempat')}">
												<i class="icon-cross2" v-if="errors.has('form.organisasi.tempat')"></i>
												Tempat:</h5>

											<!-- text -->
											<input type="text" name="organisasi_tempat" class="form-control" placeholder="Silahkan masukkan tempat " v-validate="'required|min:5'" data-vv-as="Tempat organisasi" v-model="form.organisasi.tempat">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.organisasi.tempat')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.organisasi.tempat') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tanggal mulai -->
									<div class="col-md-4" v-if="form.organisasi.aktif == 'Ya'">
										<div class="form-group" :class="{'has-error' : errors.has('form.organisasi.mulai')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.organisasi.mulai')}">
												<i class="icon-cross2" v-if="errors.has('form.organisasi.mulai')"></i>
												Tgl. Mulai:</h5>

											<!-- input -->
											<cleave 
												name="organisasi_mulai"
												v-model="form.organisasi.mulai" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.date" 
												placeholder="Silahkan masukkan tgl. mulai"
												v-validate="'required'" data-vv-as="Tgl. mulai organisasi"></cleave>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.organisasi.mulai')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.organisasi.mulai') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tanggal selesai -->
									<div class="col-md-4" v-if="form.organisasi.aktif == 'Ya'">
										<div class="form-group">

											<!-- title -->
											<h5>Tgl. Selesai</h5>

											<!-- input -->
											<cleave 
												name="organisasi_selesai"
												v-model="form.organisasi.seleasi" 
												class="form-control" 
												:raw="false" 
												:options="cleaveOption.date" 
												placeholder="Silahkan masukkan tgl. selesai"></cleave>

											<small class="text-muted">Kosongkan apabila masih aktif / tidak memiliki periode selesai</small>
										</div>
									</div>

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
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">
		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import corefunc from '../../assets/core/app.js';
	import pageHeader from "../../components/pageHeader.vue";
	import { toMulipartedForm } from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			message,
			formButton,
			formInfo,
			Cleave
		},
		data() {
			return {
				title: '',
				titleDesc: '',
				titleIcon: '',
				kelas: 'pengelola',
				level2Title: 'Pengelola',
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
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
				formAnak: [],
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		mounted() {
			corefunc.core_function();
			this.other();
		},
		updated() {
			$('.bootstrap-select').selectpicker('refresh');
		},
		watch: {
			profileStat(value){ //jika refresh halaman maka reload profile
				if(value === "success"){
					if(this.profile.id_cu === 0){
						this.$store.dispatch('cu/getPus',this.profile.id_pus);
					}
					this.form.id_cu = this.profile.id_cu;
				}
			},
			formStat(value){
				if(value === "success"){
					if(this.$route.meta.mode === 'edit'){
						if(this.profile.id_cu !== 0 && this.profile.id_cu !== this.form.id){
							this.$router.push({name: 'notFound'});
						}
						this.changeProvinces(this.form.id_provinces);
						this.changeRegencies(this.form.id_regencies);
						this.changeDistricts(this.form.id_districts);
					}
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
			}
    },
		methods: {
			fetch(){
				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
					this.title = 'Ubah ' + this.level2Title;
					this.titleDesc = 'Mengubah ' + this.level2Title;
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah ' + this.level2Title;
					this.titleDesc = 'Menambah ' + this.level2Title;
					this.titleIcon = 'icon-plus3';
					this.$store.dispatch(this.kelas + '/create');
				}

				this.$store.dispatch('provinces/get');
			},
			save() {
				this.form.anak = this.formAnak;

				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode === 'edit'){
							this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, formData]);
						}else{
							this.$store.dispatch(this.kelas + '/store', formData);
					}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			back(){
				if(this.$route.meta.mode === 'edit' && this.profile.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.form.id_cu}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.profile.id_cu}});
				}
			},
			changeLembagaPekerjaan(value){
				if(value == 0){
					this.form.pekerjaan.tipe = 3;
				}else if(value == 'lain'){
					this.form.pekerjaan.tipe = 2;
				}else{
					this.form.pekerjaan.tipe = 1;
				}
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
			addAnak(){
				this.formAnak.push({});
			},
			removeAnak(index){
				this.formAnak.splice(index,1);
			},
			modalTutup() {
 				if(this.updateStat === 'success'){
					this.back();
				}

				this.modalShow = false;
				this.submitedKategori = false;
				this.submitedPenulis = false;
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
			other() {
				// bootstrap select
				$('.bootstrap-select').selectpicker();
			}
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('pengelola',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('cu',{
				modelCU: 'dataS',
				modelCUStat: 'dataStatS',
			}),
			...mapGetters('provinces',{
				modelProvinces: 'dataS',
				modelProvincesStat: 'dataStatS'
			}),
			...mapGetters('regencies',{
				modelRegencies: 'dataS',
				modelRegenciesStat: 'dataStatS'
			}),
			...mapGetters('districts',{
				modelDistricts: 'dataS',
				modelDistrictsStat: 'dataStatS'
			}),
			...mapGetters('villages',{
				modelVillages: 'dataS',
				modelVillagesStat: 'dataStatS'
			}),
			modelPus() {
				return this.$store.getters.getPusS;
			}
		}
	}
</script>