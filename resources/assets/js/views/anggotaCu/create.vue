<template>
	<div>

		<!-- message -->
		<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<!-- main panel -->
		<form @submit.prevent="save" data-vv-scope="form">

			<!-- if create_old -->
			<div class="card" v-if="mode == 'create_old'">
				<div class="card-header bg-white">
					<h5 class="card-title">Identitas</h5>
				</div>
				<div class="card-body">
					<identitas :itemData="form"></identitas>
				</div>
			</div>

			<div class="alert bg-warning text-white alert-styled-left"  v-if="isESCETE">
				<span class="font-weight-semibold">Mohon maaf, karena data anggota CU ini sudah terintegrasi ke ESCETE maka anda hanya bisa mengubah beberapa bagian dari data saja yang tidak terhubung ke ESCETE.
				</span>
			</div>

			<!-- identitas -->
			<div class="card" v-if="mode != 'create_old'">
				<div class="card-header bg-white">
					<h5 class="card-title">Identitas Anggota</h5>
				</div>
				<div class="card-body">

					<div class="row">

						<!-- foto -->
						<div class="col-md-12">
							<div class="form-group">

								<!-- title -->
								<h6>Foto:</h6>

								<!-- imageupload -->
								<app-image-upload :image_loc="'/images/anggotaCu/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
							</div>
						</div>  

						<div class="col-md-12">
							<div class="form-group">

								<!-- title -->
								<h6>Tanda Tangan:</h6>

								<!-- imageupload -->
								<app-image-upload :image_loc="'/images/anggotaCu/'" :image_temp="form.ttd" v-model="form.ttd"></app-image-upload>
							</div>
						</div>  

						<div class="col-md-12">
							<div class="form-group">

								<!-- title -->
								<h6>Foto KTP:</h6>

								<!-- imageupload -->
								<app-image-upload :image_loc="'/images/anggotaCu/'" :image_temp="form.gambarKtp" v-model="form.gambarKtp"></app-image-upload>
							</div>
						</div> 

						<!-- nik -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.nik')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.nik')}">
									<i class="icon-cross2" v-if="errors.has('form.nik')"></i>
									No. KTP: <wajib-badge></wajib-badge></h6>

								<!-- text -->
								<input type="text" name="nik" class="form-control" placeholder="Silahkan masukkan no. KTP" v-validate="'required'" data-vv-as="No. KTP" v-model="form.nik" readonly>
								
								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.nik')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.nik') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- kk -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>No. KK:</h6>

								<!-- text -->
								<cleave 
									name="kk"
									v-model="form.kk" 
									class="form-control" 
									:options="cleaveOption.number16"
									placeholder="Silahkan masukkan no KK"></cleave>

							</div>
						</div>

						<!-- npwp -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>
									NPWP:</h6>

								<!-- text -->
								<cleave 
									name="npwp"
									v-model="form.npwp" 
									class="form-control" 
									:options="cleaveOption.number24"
									placeholder="Silahkan masukkan npwp"></cleave>

							</div>
						</div>

						<!-- name -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.name')}">
									<i class="icon-cross2" v-if="errors.has('form.name')"></i>
									Nama: <wajib-badge></wajib-badge></h6>

								<!-- text -->
								<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama" v-validate="'required'"
									data-vv-as="Nama" v-model="form.name" :disabled="isESCETE">

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.name')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- ahli waris -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.ahli_waris')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.ahli_waris')}">
									<i class="icon-cross2" v-if="errors.has('form.ahli_waris')"></i>
									Nama Ahli Waris: <wajib-badge></wajib-badge></h6>

								<!-- text -->
								<input type="text" name="ahli_waris" class="form-control" placeholder="Silahkan masukkan nama ahli waris" v-validate="'required'"
									data-vv-as="Nama ahli waris" v-model="form.ahli_waris" :disabled="isESCETE">

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.ahli_waris')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.ahli_waris') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- nama ibu -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Nama Ibu: </h6>

								<!-- text -->
								<input type="text" name="nama_ibu" class="form-control" placeholder="Silahkan masukkan nama ibu" v-model="form.nama_ibu" :disabled="isESCETE">

							</div>
						</div>

						<!-- gender -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.kelamin')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.kelamin')}">
									<i class="icon-cross2" v-if="errors.has('form.kelamin')"></i>
									Gender: <wajib-badge></wajib-badge>
								</h6>

								<!-- select -->
								<select class="form-control" name="kelamin" v-model="form.kelamin" data-width="100%" v-validate="'required'" :disabled="isESCETE"
									data-vv-as="Gender">
									<option disabled value="">Silahkan pilih gender</option>
									<option value="LAKI-LAKI">Laki-laki</option>
									<option value="PEREMPUAN">Perempuan</option>
								</select>

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.kelamin')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.kelamin') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- tanggal lahir -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.tanggal_lahir')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.tanggal_lahir')}">
									<i class="icon-cross2" v-if="errors.has('form.tanggal_lahir')"></i>
									Tgl. Lahir: <wajib-badge></wajib-badge></h6>

								<!-- input -->
								 <template v-if="isESCETE">
										<input v-model="form.tanggal_lahir" class="form-control" name="tanggal_lahir" v-validate="'required'" data-vv-as="Tanggal lahir" :disabled="isESCETE"/>
								 </template>
								 <template v-else>
									 <date-picker @dateSelected="form.tanggal_lahir = $event" :defaultDate="form.tanggal_lahir"></date-picker>	
									 <input v-model="form.tanggal_lahir" name="tanggal_lahir" v-show="false" v-validate="'required'" data-vv-as="Tanggal lahir"/>
								 </template>

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
								<h6 :class="{ 'text-danger' : errors.has('form.tempat_lahir')}">
									<i class="icon-cross2" v-if="errors.has('form.tempat_lahir')"></i>Tempat Lahir: <wajib-badge></wajib-badge></h6>

								<!-- text -->
								<input type="text" name="tempat_lahir" class="form-control" placeholder="Silahkan masukkan tempat lahir" v-model="form.tempat_lahir" v-validate="'required'" data-vv-as="Tempat Lahir" :disabled="isESCETE">

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.tempat_lahir')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.tempat_lahir') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>

							</div>
						</div>

						<!-- suku -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Suku: </h6>

								<!-- select -->
								<select class="form-control" name="suku" v-model="form.suku" data-width="100%" :disabled="modelSuku.length == 0 || isESCETE"> 
									<option disabled value="">
										<span v-if="modelSukuStat === 'loading'">Mohon tunggu...</span>
										<span v-else>Silahkan pilih suku</span>
									</option>
									<option v-for="(suku, index) in modelSuku" :key="index" :value="suku.name">{{suku.name}}</option>
								</select>

							</div>
						</div>

						<!-- darah -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>
									Gol. Darah:
								</h6>

								<!-- select -->
								<select class="form-control" name="darah" v-model="form.darah" data-width="100%">
									<option disabled value="">Silahkan pilih golongan darah</option>
									<option value="A">A</option>
									<option value="B">B</option>
									<option value="AB">AB</option>
									<option value="O">O</option>
								</select>

							</div>
						</div>

						<!-- tinggi -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6> Tinggi <small>(cm)</small>:</h6>

								<!-- text -->
								<cleave name="tinggi" v-model="form.tinggi" class="form-control" :options="cleaveOption.number3" placeholder="Silahkan masukkan tinggi"></cleave>
							</div>
						</div>

						<!-- agama -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Agama:</h6>

								<!-- select -->
								<select class="form-control" name="agama" v-model="form.agama" data-width="100%" :disabled="isESCETE">
									<option disabled value="">Silahkan pilih agama</option>
									<option value="BUDDHA">Buddha</option>
									<option value="HINDU">Hindu</option>
									<option value="ISLAM">Islam</option>
									<option value="KATOLIK">Katolik</option>
									<option value="KONG HU CU">Kong Hu Cu</option>
									<option value="PROTESTAN">Protestan</option>
									<option value="LAIN-LAIN">Lain-lain</option>
								</select>

							</div>
						</div>

						<!-- status -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>
									Status:
								</h6>

								<!-- select -->
								<select class="form-control" name="status" v-model="form.status" data-width="100%" :disabled="isESCETE">
									<option disabled value="">Silahkan pilih status pernikahan</option>
									<option value="BELUM MENIKAH">Belum menikah</option>
									<option value="MENIKAH">Menikah</option>
									<option value="JANDA/DUDA">Janda/Duda</option>
								</select>

							</div>
						</div>
						
					</div>

				</div>
			</div>

			<!-- riwayat -->
			<div class="card" v-if="mode != 'create_old'">
				<div class="card-header bg-white">
					<h5 class="card-title">Riwayat</h5>
				</div>
				<div class="card-body">
					<div class="row">

						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Lembaga:</h6>

								<!-- text -->
								<input type="text" name="lembaga" class="form-control" placeholder="Silahkan masukkan lembaga" v-model="form.lembaga">

							</div>
						</div>

						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Jabatan:</h6>

								<!-- select -->
								<select class="form-control" name="jabatan" v-model="form.jabatan" data-width="100%">
									<option disabled value="">Silahkan pilih jabatan</option>
									<option value="SENIOR MANAJER">Senior Manajer (General Manager, CEO, Deputy)</option>
									<option value="MANAJER">Manajer</option>
									<option value="SUPERVISOR">Supervisor (Kepala Bagian, Kepala Divisi, Kepala/Koordinator TP, Kepala Bidang)</option>
									<option value="STAF">Staf</option>
									<option value="KONTRAK">Kontrak</option>
								</select>

							</div>
						</div>

						<!-- pekerjaan -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Pekerjaan: </h6>

								<!-- select -->
								<select class="form-control" name="pekerjaan" v-model="form.pekerjaan" data-width="100%" :disabled="modelPekerjaan.length == 0">
									<option disabled value="">Silahkan pilih pekerjaan</option>
									<option v-for="(pekerjaan, index) in modelPekerjaan" :key="index" :value="pekerjaan.name">{{pekerjaan.name}}</option>
								</select>

							</div>
						</div>

						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Rata-rata Penghasilan Perbulan:</h6>

								<!-- select -->
								<cleave 
									v-model="form.penghasilan" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan rata-rata pengeluaran"></cleave>
							</div>
						</div>

						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Rata-rata Pengeluaran Perbulan:</h6>

								<!-- select -->
								<cleave 
									v-model="form.pengeluaran" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan rata-rata pengeluaran"></cleave>

							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">

								<!-- title -->
								<h6>Pendidikan:</h6>

								<!-- select -->
								<select class="form-control" name="pendidikan" v-model="form.pendidikan" data-width="100%">
									<option disabled value="">Silahkan pilih tingkat pendidikan</option>
									<option value="TK">TK</option>
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
									<option value="LAIN-LAIN">Lain-lain</option>
								</select>

							</div>
						</div>
						
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Organisasi: <info-icon :message="'Silahkan isi dengan jabatan dan tempat/nama organisasi jika anda ikut dalam sebuah organisasi'"></info-icon></h6>

								<!-- text -->
								<input type="text" name="organisasi" class="form-control" placeholder="Silahkan masukkan organisasi" v-model="form.organisasi">

							</div>
						</div>

					</div>
				</div>
			</div>

			<!-- lokasi -->
			<div class="card" v-if="mode != 'create_old'">
				<div class="card-header bg-white">
					<h5 class="card-title">Alamat & Kontak</h5>
				</div>
				<div class="card-body">
					<div class="row">
							
						<!-- Provinsi -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.id_provinces')}">
									<i class="icon-cross2" v-if="errors.has('form.id_provinces')"></i>
									Provinsi: <wajib-badge></wajib-badge>
								</h6>

								<!-- select -->
								<select class="form-control" name="id_provinces" v-model="form.id_provinces" data-width="100%" v-validate="'required'" data-vv-as="Provinsi" :disabled="modelProvinces.length == 0 || isESCETE" @change="changeProvinces($event.target.value)">
									<option disabled value="">Silahkan pilih provinsi</option>
									<option v-for="(provinces, index) in modelProvinces" :key="index" :value="provinces.id">{{provinces.name}}</option>
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
								<h6 :class="{ 'text-danger' : errors.has('form.id_regencies')}">
									<i class="icon-cross2" v-if="errors.has('form.id_regencies')"></i>
									Kabupaten: <wajib-badge></wajib-badge>
								</h6>

								<!-- select -->
								<select class="form-control"  name="id_regencies" v-model="form.id_regencies" data-width="100%" v-validate="'required'" data-vv-as="Kabupaten" @change="changeRegencies($event.target.value)" :disabled="modelRegencies.length === 0 || isESCETE">
									<option disabled value="">
										<span v-if="modelRegenciesStat === 'loading'">Mohon tunggu...</span>
										<span v-else>Silahkan pilih kabupaten</span>
									</option>
									<option v-for="(regencies, index) in modelRegencies" :key="index" :value="regencies.id">{{regencies.name}}</option>
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
								<h6 :class="{ 'text-danger' : errors.has('form.id_districts')}">
									<i class="icon-cross2" v-if="errors.has('form.id_districts')"></i>
									Kecamatan: <wajib-badge></wajib-badge>
								</h6>

								<!-- select -->
								<select class="form-control"  name="id_districts" v-model="form.id_districts" data-width="100%" v-validate="'required'" data-vv-as="Kabupaten" :disabled="modelDistricts.length === 0 || isESCETE" @change="changeDistricts($event.target.value)">
									<option disabled value="">
										<span v-if="modelDistrictsStat === 'loading'">Mohon tunggu...</span>
										<span v-else>Silahkan pilih kecamatan</span>
									</option>
									<option v-for="(districts, index) in modelDistricts" :key="index" :value="districts.id">{{districts.name}}</option>
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
								<h6 :class="{ 'text-danger' : errors.has('form.id_villages')}">
									<i class="icon-cross2" v-if="errors.has('form.id_villages')"></i>
									Kelurahan: <wajib-badge></wajib-badge>
								</h6>

								<!-- select -->
								<select class="form-control"  name="id_villages" v-model="form.id_villages" data-width="100%" v-validate="'required'" data-vv-as="Desa" :disabled="modelVillages.length === 0 || isESCETE">
									<option disabled value="">
										<span v-if="modelVillagesStat === 'loading'">Mohon tunggu... mohon tunggu</span>
										<span v-else>Silahkan pilih kelurahan</span>
									</option>
									<option v-for="(villages, index) in modelVillages" :key="index" :value="villages.id">{{villages.name}}</option>
								</select>

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.id_villages')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_villages') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- RW -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>No. RW:</h6>

								<!-- text -->
								<cleave 
									name="rw"
									v-model="form.rw" 
									class="form-control" 
									:options="cleaveOption.number3"
									placeholder="Silahkan masukkan no rw"
									:disabled="isESCETE"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- RT -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>No. RT:</h6>

								<!-- text -->
								<cleave 
									name="rt"
									v-model="form.rt" 
									class="form-control" 
									:options="cleaveOption.number3"
									placeholder="Silahkan masukkan no rt"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- alamat -->
						<div class="col-md-8">
							<div class="form-group" :class="{'has-error' : errors.has('form.alamat')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.alamat')}">
									<i class="icon-cross2" v-if="errors.has('form.alamat')"></i>
									Alamat: <wajib-badge></wajib-badge></h6>

								<!-- text -->
								<input type="text" name="alamat" class="form-control" placeholder="Silahkan masukkan alamat" v-validate="'required|min:5'" data-vv-as="Alamat" v-model="form.alamat" :disabled="isESCETE">

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
								<h6>No. Hp:</h6>

								<!-- text -->
								<cleave 
									name="hp"
									v-model="form.hp" 
									class="form-control" 
									:options="cleaveOption.number12"
									placeholder="Silahkan masukkan no hp"
									:disabled="isESCETE"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- email -->
						<div class="col-md-4">
							<div class="form-group" :class="{'has-error' : errors.has('form.email')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.email')}">
									<i class="icon-cross2" v-if="errors.has('form.email')"></i>
									Email:</h6>

								<!-- text -->
								<input type="text" name="email" class="form-control" placeholder="Silahkan masukkan alamat email" v-validate="'email'" data-vv-as="Email" v-model="form.email" :disabled="isESCETE">

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
								<h6>Kontak Ahli Waris:</h6>

								<!-- text -->
								<input type="text" name="kontak" class="form-control" placeholder="Silahkan masukkan kontak ahli waris" v-model="form.kontak_ahli_waris" :disabled="isESCETE">

							</div>
						</div>

						<!-- kontak -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Kontak Lainnya:</h6>

								<!-- text -->
								<input type="text" name="kontak" class="form-control" placeholder="Silahkan masukkan kontak lainnya" v-model="form.kontak" :disabled="isESCETE">

							</div>
						</div>

					</div>

				</div>
			</div>

			<!-- if cu -->
			<div v-if="currentUser && currentUser.id_cu != 0">
				<!-- anggota keluar -->
				<div class="card">
					<div class="card-header bg-white">
						<h5 class="card-title">Keanggotaan Sebelumnya</h5>
					</div>

					<data-table :items="itemDataCu" :columnData="columnDataCu" :itemDataStat="itemDataCuStat">
						<template slot="item-desktop" slot-scope="props">
							<tr :class="{ 'bg-info': selectedItemCu.index === props.index + 1 }" class="text-nowrap" @click="selectedCuRow(props.index,props.item)" v-if="props.item">
								<td>{{ props.index + 1 }}</td>
								<td>
									<check-value :value="props.item.cu.name" v-if="props.item.cu"></check-value>
									<span v-else>-</span>
								</td>
								<td>
									<check-value :value="props.item.tp.name" v-if="props.item.tp"></check-value>
									<span v-else>-</span>
								</td>
								<td><check-value :value="props.item.no_ba"></check-value></td>
								<td><check-value :value="props.item.keterangan_masuk"></check-value></td>
								<td v-html="$options.filters.date(props.item.tanggal_masuk)" class="text-nowrap"></td>
								<td><check-value :value="props.item.keterangan_keluar"></check-value></td>
								<td v-html="$options.filters.date(props.item.tanggal_keluar)" class="text-nowrap"></td>
							</tr>
						</template>	
					</data-table>

				</div>
				<!-- form anggota -->
				<div class="card">

					<div class="card-header bg-white">
						<h5 class="card-title">CU</h5>
					</div>
					<div class="card-body">
						
							<div class="row">
								
								<!-- tp -->
								<div class="col-sm-4">
									<div class="form-group" :class="{'has-error' : errors.has('form.tp_id')}">

										<!-- title -->
										<h6 :class="{ 'text-danger' : errors.has('form.tp_id')}">
											<i class="icon-cross2" v-if="errors.has('form.tp_id')"></i>
											TP/KP: <wajib-badge></wajib-badge>
										</h6>

										<!-- select -->
										<select class="form-control" name="id_tp" v-model="form.tp_id" data-width="100%" v-validate="'required'" data-vv-as="TP/KP" :disabled="isESCETE">
											<option disabled value="">Silahkan pilih TP/KP</option>
											<option v-for="(tp, index) in modelTp" :key="index" :value="tp.id">{{tp.name}}</option>
										</select>

										<!-- error message -->
										<small class="text-muted text-danger" v-if="errors.has('form.tp_id')">
											<i class="icon-arrow-small-right"></i> {{ errors.first('form.tp_id') }}
										</small>
										<small class="text-muted" v-else>&nbsp;</small>
									</div>
								</div>

								<!-- no_ba -->
								<div class="col-md-4">
									<div class="form-group" :class="{'has-error' : errors.has('form.no_ba')}">

										<!-- title -->
										<h6 :class="{ 'text-danger' : errors.has('form.no_ba')}">
										<i class="icon-cross2" v-if="errors.has('form.no_ba')"></i>
										No. BA: <wajib-badge></wajib-badge></h6>

										<!-- text -->
										<cleave 
										name="no_ba"
										v-model="form.no_ba" 
										class="form-control" 
										:options="cleaveOption.number16"
										placeholder="Silahkan masukkan no buku anggota"
										v-validate="'required'" data-vv-as="No. Buku Anggota"
										:disabled="isESCETE"></cleave>

										<!-- error message -->
										<small class="text-muted text-danger" v-if="errors.has('form.no_ba')">
											<i class="icon-arrow-small-right"></i> {{ errors.first('form.no_ba') }}
										</small>
										<small class="text-muted" v-else>&nbsp;</small>

									</div>
								</div>

								<!-- tanggal_masuk -->
								<div class="col-md-4">
									<div class="form-group" :class="{'has-error' : errors.has('form.tanggal_masuk')}">

										<!-- title -->
										<h6 :class="{ 'text-danger' : errors.has('form.tanggal_masuk')}">
										<i class="icon-cross2" v-if="errors.has('form.tanggal_masuk')"></i>
										Tgl. Jadi Anggota: <wajib-badge></wajib-badge></h6>

										<!-- text -->
										<template v-if="isESCETE">
											<input v-model="form.tanggal_masuk" class="form-control" v-validate="'required'" data-vv-as="Tgl. Jadi Anggota" :disabled="isESCETE"/>
										</template>
										<template v-else>
											<date-picker @dateSelected="form.tanggal_masuk = $event" :defaultDate="form.tanggal_masuk"></date-picker>	
											<input v-model="form.tanggal_masuk" v-show="false" v-validate="'required'" data-vv-as="Tgl. Jadi Anggota"/>
										</template>

										<!-- error message -->
										<small class="text-muted text-danger" v-if="errors.has('form.tanggal_masuk')">
											<i class="icon-arrow-small-right"></i> {{ errors.first('form.tanggal_masuk') }}
										</small>
										<small class="text-muted" v-else>&nbsp;</small>

									</div>
								</div>

								<!-- keterangan_masuk -->
								<div class="col-md-12">
									<div class="form-group" >

										<!-- title -->
										<h6>
										Keterangan Jadi Anggota:</h6>

										<!-- text -->
										<input type="text" name="keterangan_masuk" class="form-control" placeholder="Silahkan masukkan keterangan masuk" v-model="form.keterangan_masuk" :disabled="isESCETE">
										

									</div>
								</div>

								<div class="col-sm-12"><hr/></div>

							</div>
					</div>
				</div>
			</div>

			<!-- if bkcu -->
			<div class="card" v-if="currentUser && currentUser.id_cu == 0">
				<div class="card-header bg-white">
					<h5 class="card-title">CU <wajib-badge></wajib-badge></h5>
				</div>
				<div class="card-body pb-2">
					<div class="row">
<!-- 
						<div class="col-md-12" v-if="form.status_jalinan != 1 && form.status_jalinan != 2">

							<button class="btn btn-light mb-1" @click.prevent="modalOpen('tambahCu')">
								<i class="icon-plus22"></i> Tambah
							</button>

							<button class="btn btn-light mb-1" @click.prevent="modalOpen('ubahCu')"
							:disabled="!selectedItemCu.index">
								<i class="icon-pencil5"></i> Ubah
							</button>

							<button class="btn btn-light mb-1" @click.prevent="modalOpen('hapusCu')" :disabled="!selectedItemCu.index">
								<i class="icon-bin2"></i> Hapus
							</button>

						</div> -->

					</div>		
				</div>

				<data-table :items="itemDataCu" :columnData="columnDataCu" :itemDataStat="itemDataCuStat">
					<template slot="item-desktop" slot-scope="props">
						<tr :class="{ 'bg-info': selectedItemCu.index === props.index + 1 }" class="text-nowrap" @click="selectedCuRow(props.index,props.item)" v-if="props.item">
							<td>{{ props.index + 1 }}</td>
							<td>
								<check-value :value="props.item.cu.name" v-if="props.item.cu"></check-value>
								<span v-else>-</span>
							</td>
							<td>
								<check-value :value="props.item.tp.name" v-if="props.item.tp"></check-value>
								<span v-else>-</span>
							</td>
							<td><check-value :value="props.item.no_ba"></check-value></td>
							<td><check-value :value="props.item.keterangan_masuk"></check-value></td>
							<td v-html="$options.filters.date(props.item.tanggal_masuk)" class="text-nowrap"></td>
							<td><check-value :value="props.item.keterangan_keluar"></check-value></td>
							<td v-html="$options.filters.date(props.item.tanggal_keluar)" class="text-nowrap"></td>
						</tr>
					</template>	
				</data-table>
			</div>

			<!-- form info -->
			<form-info></form-info>
			<br/>

			<!-- form button -->
			<div class="card card-body" v-if="form.status_jalinan != 1 && form.status_jalinan != 2">
				<form-button 
				:cancelState="'methods'" 
				:formValidation="'form'" 
				:confirmIcon="confirmIcon"
				:confirmTitle="confirmTitle"
				@cancelClick="back"></form-button>
			</div>

		</form>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor"
		 @batal="modalTutup" @confirmOk="modalConfirmOk" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalBackgroundClick">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- tambah cu -->
			<template slot="modal-body3">
				<form-cu 
				:mode="formCuMode"
				:selected="selectedItemCu"
				@createCu="createCu"
				@editCu="editCu"
				@tutup="modalTutup"></form-cu>
			</template>

		</app-modal>

	</div>
</template>

<script>
	import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import { toMulipartedForm } from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formCu from "./formCu.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';
	import dataTable from '../../components/datatable.vue';
	import checkValue from "../../components/checkValue.vue";
	import infoIcon from "../../components/infoIcon.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import identitas from "../../components/identitas.vue";
	import DatePicker from "../../components/datePicker.vue";

	export default {
		props: ['mode','nik','statusNIK'],
		components: {
			appModal,
			appImageUpload,
			message,
			formCu,
			formButton,
			formInfo,
			Cleave,
			dataTable,
			checkValue,
			appImageUpload,
			infoIcon,
			wajibBadge,
			identitas,
			DatePicker
		},
		data() {
			return {
				kelas: 'anggotaCu',
				confirmIcon: 'icon-arrow-right14',
				confirmTitle: 'Lanjut ke produk',
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y', 'm', 'd'],
            delimiter: '-'
					},
					number24: {
            numeral: true,
            numeralIntegerScale: 24,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
					},
					number16: {
            numeral: true,
            numeralIntegerScale: 16,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
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
          },
				},
				formCuMode: '',
				selectedItemCu: '',
				itemDataCu: [],
				itemDataCuStat: 'success',
				columnDataCu:[
					{ title: 'No.' },
					{ title: 'CU' },
					{ title: 'TP/KP' },
					{ title: 'No. BA' },
					{ title: 'Keterangan' },
					{ title: 'Tgl. Jadi Anggota' },
					{ title: 'Keterangan Keluar' },
					{ title: 'Tgl. Keluar Anggota' },
				],
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
				isESCETE: false,
			}
		},
		created() {
			if(this.mode == 'edit' || this.mode == 'edit_jalinan'){
				this.confirmIcon = 'icon-floppy-disk';
				this.confirmTitle = 'Simpan';
			}

			if (this.currentUser.id_cu == 0) {
				if (this.modelCuStat != 'success') {
					this.$store.dispatch('cu/getHeader');
				}
			}else{
				this.fetchTp(this.currentUser.id_cu);
				
			}
			
			this.form.id_cu = this.currentUser.id_cu;
			this.$store.dispatch('pekerjaan/get');
			this.$store.dispatch('suku/get');
			this.$store.dispatch('provinces/get');
			this.fetch();
		},
		watch: {
			formStat(value){
				if(value == 'success'){
					if(this.mode == 'edit' || this.mode == 'create_edit' || this.mode == 'create_jalinan_edit' || this.mode == 'edit_jalinan'){
						this.fetchCu();
						if(this.form.escete == 1){
							this.isESCETE = true;
						}
					}else{
						this.form.tp_id == '';
					}
					
					if(this.mode == 'create_jalinan'){
						this.form.nik = this.$route.params.nik;
						this.form.statusNIK = this.$route.params.statusNIK;
					}
				}else if(value == 'fail'){
					this.form.tp_id == '';
				}
			},
			updateStat(value) {
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if (value === "success") {
				this.modalTitle = this.updateResponse.message;
				} else {
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			}
		},
		methods: {
			fetch() {
				if(this.mode == 'create_new'){
					this.form.nik = this.nik;
				}else if(this.mode == 'create_jalinan'){
					this.$store.dispatch(this.kelas + '/create');
				}else if(this.mode == 'create_old'){
					this.fetchCu();
				}

				if(this.mode == 'edit' || this.mode == 'create_edit' || this.mode == 'create_jalinan_edit' || this.mode == 'edit_jalinan'){
					this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
				}
			},
			fetchCu(){
				if(this.currentUser.id_cu == 0){
					this.itemDataCu = [];
					var valData;

					if(this.form.anggota_cu_cu){
						for(valData of this.form.anggota_cu_cu){
							this.itemDataCu.push(valData);
						}
					}
				}else{
					let data = _.find(this.form.anggota_cu_cu,{'cu_id':this.currentUser.id_cu});

					if(!data.tanggal_keluar){
						this.form.tp_id = data.tp_id;
						this.form.no_ba = data.no_ba;
						this.form.tanggal_masuk = data.tanggal_masuk;
						this.form.keterangan_masuk = data.keterangan_masuk;
					}else{
						this.itemDataCu = [];
						var valData;

						if(this.form.anggota_cu_cu){
							for(valData of this.form.anggota_cu_cu){
								this.itemDataCu.push(valData);
							}
						}
					}
				}

				if(this.form.id_provinces){
					this.changeProvinces(this.form.id_provinces);
				}
				if(this.form.id_regencies){
					this.changeRegencies(this.form.id_regencies);
				}
				if(this.form.id_districts){
					this.changeDistricts(this.form.id_districts);
				}
			},
			fetchTp(value){
				this.$store.dispatch('tp/getCu',value);
			},
			createCu(value){
				this.itemDataCu.push(value);
				this.modalTutup();
			},
			editCu(value){
				_.remove(this.itemDataCu, {
						index: value.index
				});
				this.itemDataCu.push(value);
				this.modalTutup(); 
			},
			save() {
				if(this.currentUser.id_cu == 0){
					this.form.anggota_cu_cu = this.itemDataCu;
				}else{
					this.form.id_cu = this.currentUser.id_cu;
				}

				if(this.mode != 'create_jalinan'){
					this.form.statusNIK = this.statusNIK;
				}

				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.mode == 'create_new' || this.mode == 'create_jalinan'){
							this.$store.dispatch(this.kelas + '/store', formData);
						}else if(this.mode == 'create_old' || this.mode == 'create_edit' || this.mode == 'edit_jalinan'){
							this.$store.dispatch(this.kelas + '/update', [this.form.id,formData]);
						}else if(this.mode == 'edit' ){
							this.$store.dispatch(this.kelas + '/update', [this.$route.params.id,formData]);
						}
						this.submited = false;
					} else {
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
			back() {
				if(this.mode == 'edit_jalinan'){
					if(this.currentUser.id_cu == 0){
						this.$router.push({name: 'jalinanKlaimCu', params:{cu: 'semua', tp: 'semua'}});
					}else{
						this.$router.push({name: 'jalinanKlaimCu', params:{cu: this.currentUser.id_cu, tp: 'semua'}});
					}
				}else{
					if(this.currentUser.id_cu == 0){
						this.$router.push({name: this.kelas + 'Cu', params:{cu: 'semua', tp: 'semua'}});
					}else{
						this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu, tp: 'semua'}});
					}
				}
			},
			selectedCuRow(index,item){
				this.selectedItemCu = item;
				this.selectedItemCu.index = index + 1;
			},
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;
				
				if (state == 'hapusCu') {
					this.modalState = 'confirm-tutup';
					this.modalColor = '';
					this.modalTitle = 'Hapus CU ' + this.selectedItemCu.cu.name + ' ?';
					this.modalButton = 'Iya, Hapus';
					this.modalSize = '';
				}else if(state == 'ubahCu'){
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Ubah CU';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formCuMode = 'edit';
				}else if(state == 'tambahCu'){
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalTitle = 'Tambah CU';
					this.modalButton = 'Ok';
					this.modalSize = 'modal-lg';
					this.formCuMode = 'create';
				}
			},
			modalConfirmOk() {
				this.modalShow = false;

				if (this.state == 'hapusCu') {
					_.remove(this.itemDataCu, {
						index: this.selectedItemCu.index
					});
					this.selectedItemCu = {};
				}
			},
			modalTutup() {
				if (this.updateStat == 'success') {				
					if(this.mode == 'create_new' || this.mode == 'create_old' || this.mode == 'create_edit'){
						let idcu = '';
						if(this.currentUser.id_cu != 0){
							idcu = this.currentUser.id_cu;
						}else{
							idcu = 'semua';
						}
						this.$router.push({ name: this.kelas + "ProdukCreate",params: {id: this.updateResponse.id, cu: idcu }});
					}else if(this.mode == 'create_jalinan' || this.mode == 'create_jalinan_edit'){
						let idcu = '';
						if(this.currentUser.id_cu != 0){
							idcu = this.currentUser.id_cu;
						}else{
							idcu = 'semua';
						}
						this.$router.push({ name: this.kelas + "ProdukCreateJalinan",params: {id: this.updateResponse.id, cu: idcu }});
					}else{
						this.back();
					}
					this.$store.dispatch(this.kelas + '/resetUpdateStat');
				}

				this.modalShow = false;
			},
			modalBackgroundClick() {
				if (this.modalState === 'success') {
					this.modalTutup;
				} else if (this.modalState === 'loading') {
					// do nothing
				} else {
					this.modalShow = false
				}
			},
		},
		computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
			}),
			...mapGetters('anggotaCu', {
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('cu',{
				modelCu: 'headerDataS',
				modelCuStat: 'headerDataStatS',
			}),
			...mapGetters('tp',{
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
			}),
			...mapGetters('pekerjaan',{
				modelPekerjaan: 'dataS',
				modelPekerjaanStat: 'dataStatS'
			}),
			...mapGetters('suku',{
				modelSuku: 'dataS',
				modelSukuStat: 'dataStatS'
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
		}
	}
</script>