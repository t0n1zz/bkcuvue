<template>
	<div>

		<!-- message -->
		<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<message v-if="message.show" :title="'Oops terjadi kesalahan'" :errorData="message.content" :showDebug="false">
		</message>

		<!-- main panel -->
		<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">

			<!-- if create_old -->
			<div class="card" v-if="!canEditIdentitas">
				<div class="card-header bg-white">
					<h5 class="card-title">Identitas</h5>
				</div>
				<div class="card-body">
					<identitas :itemData="form"></identitas>
				</div>
				<div class="card-footer bg-white d-flex">
					<button type="button" class="btn btn-light btn-block" @click.prevent="ubahCanEdit()"> <i class="icon-pencil5"></i> Edit Identitas</button>
				</div>
			</div>

			<div class="card card-body" v-if="canEditIdentitas && mode == 'create_old'">
				<button type="button" class="btn btn-light btn-block" @click.prevent="ubahCanEdit()"> <i class="icon-cross"></i> Batal Edit Identitas</button>	
			</div>

			<!-- identitas -->
			<div class="card" v-if="canEditIdentitas">
				<div class="card-header bg-white">
					<h5 class="card-title">Identitas</h5>
				</div>
				<div class="card-body">
					<div class="row">

						<!-- foto -->
						<div class="col-md-12">
							<div class="form-group">

								<!-- title -->
								<h6>Foto:</h6>

								<!-- imageupload -->
								<app-image-upload :image_loc="'/images/aktivis/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
							</div>
						</div>

						<!-- nik -->
						<div class="col-md-4" v-if="mode == 'edit' || mode == 'edit_profile'">
							<div class="form-group" :class="{'has-error' : errors.has('form.nik')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.nik')}">
									<i class="icon-cross2" v-if="errors.has('form.nik')"></i>
									No. KTP: <wajib-badge></wajib-badge></h6>

								<!-- text -->
								<cleave 
									name="nik"
									v-model="form.nik" 
									class="form-control" 
									:options="cleaveOption.number16"
									placeholder="Silahkan masukkan no KTP"
									v-validate="'required'" data-vv-as="No. KTP"></cleave>
								
								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.nik')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.nik') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>  

						<!-- nim_cu -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>
									NIM Lembaga:</h6>

								<!-- text -->
								<cleave 
									name="nik"
									v-model="form.nim_cu" 
									class="form-control" 
									:options="cleaveOption.number24"
									placeholder="Silahkan masukkan no induk manajemen lembaga"></cleave>

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
									name="nik"
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
								<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama" v-validate="'required'" data-vv-as="Nama" v-model="form.name">

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
								<h6 :class="{ 'text-danger' : errors.has('form.kelamin')}">
									<i class="icon-cross2" v-if="errors.has('form.kelamin')"></i>
									Gender: <wajib-badge></wajib-badge>
								</h6>

								<!-- select -->
								<select class="form-control" name="kelamin" v-model="form.kelamin" data-width="100%" v-validate="'required'" data-vv-as="Gender">
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
								<date-picker @dateSelected="form.tanggal_lahir = $event" :defaultDate="form.tanggal_lahir"></date-picker>	
								<input v-model="form.tanggal_lahir" v-show="false" v-validate="'required'" data-vv-as="Tanggal Lahir"/>
									

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
								<input type="text" name="tempat_lahir" class="form-control" placeholder="Silahkan masukkan tempat lahir" v-model="form.tempat_lahir" v-validate="'required'" data-vv-as="Tempat Lahir">

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.tempat_lahir')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.tempat_lahir') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>

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
							<div class="form-group" >

								<!-- title -->
								<h6>
									Tinggi <small>(cm)</small>:</h6>

								<!-- text -->
								<cleave 
									name="tinggi"
									v-model="form.tinggi" 
									class="form-control" 
									:options="cleaveOption.number3"
									placeholder="Silahkan masukkan tinggi"></cleave>
								
							</div>
						</div>

						<!-- agama -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>
									Agama:
								</h6>

								<!-- select -->
								<select class="form-control" name="agama" v-model="form.agama" data-width="100%">
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

					</div>

				</div>
			</div>

			<!-- lokasi -->
			<div class="card" v-if="canEditIdentitas">
				<div class="card-header bg-white">
					<h5 class="card-title">Alamat & Kontak</h5>
				</div>
				<div class="card-body">

					<form-lokasi :form="form"></form-lokasi>

				</div>
			</div>

			<!-- keluarga -->
			<div class="card" v-if="canEditIdentitas">
				<div class="card-header bg-white">
					<h5 class="card-title">Keluarga</h5>
				</div>
				<div class="card-body">
					<div class="row" v-if="form.keluarga">

						<!-- ayah -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>Ayah:</h6>

								<!-- text -->
								<input type="text" name="ayah" class="form-control" placeholder="Silahkan masukkan nama ayah" v-model="form.keluarga.ayah">

							</div>
						</div>

						<!-- ibu -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h6>
									Ibu:</h6>

								<!-- text -->
								<input type="text" name="ibu" class="form-control" placeholder="Silahkan masukkan nama ibu" v-model="form.keluarga.ibu">

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
								<select class="form-control" name="status" v-model="form.status" data-width="100%">
									<option disabled value="">Silahkan pilih status pernikahan</option>
									<option value="BELUM MENIKAH">Belum menikah</option>
									<option value="MENIKAH">Menikah</option>
									<option value="JANDA/DUDA">Janda/Duda</option>
								</select>

							</div>
						</div>

						<!-- pasangan -->
						<div class="col-md-4" v-if="form.status == 'MENIKAH' || form.status == 'Duda/Janda'">
							<div class="form-group">

								<!-- title -->
								<h6>
									Pasangan:</h6>

								<!-- text -->
								<input type="text" name="pasangan" class="form-control" placeholder="Silahkan masukkan nama pasangan" v-model="form.keluarga.pasangan">

								<!-- error message -->
							</div>
						</div>
						
						<!-- anak -->
						<template v-if="form.status == 'MENIKAH' || form.status == 'Duda/Janda'">
							<div class="col-md-4"  v-for="(anak,index) in formAnak" :key="index">
								<div class="form-group">

									<!-- title -->
									<h6>Anak {{ index + 1}}:</h6>

									<div class="input-group">
										<!-- text -->
										<input type="text" name="anak" class="form-control" placeholder="Silahkan masukkan nama anak" v-model="anak.name">
										
										<div class="input-group-btn">
											<button class="btn btn-light" @click.prevent="removeAnak(index)">
												<i class="icon-cross"></i>
											</button>
										</div>
									</div>

									<small class="text-muted">&nbsp;</small>
								</div>
							</div>
						</template>

						<!-- punya anak -->
						<div class="col-md-12" v-if="form.status == 'MENIKAH' || form.status == 'JANDA/DUDA'">
							<button class="btn btn-light btn-block" @click.prevent="addAnak()"><i class="icon-plus3"></i> 
								<span v-if="formAnak.length == 0">Punya Anak</span>
								<span v-else>Tambah Anak</span>
							</button>
						</div>

					</div>	
				</div>
			</div>

			<!-- anggota cu -->
			<div class="card" v-if="canEditIdentitas">
				<div class="card-header bg-white">
					<h5 class="card-title">Anggota CU</h5>
				</div>
				<div class="card-body" v-if="form.anggota_cu">
					<div class="row">
						<div class="col-md-12" v-for="(cu,index) in formCU" :key="index">
							<div class="row">
								<!-- cu -->
								<div class="col-md-4">
									<div class="form-group">

										<!-- title -->
										<h6>CU {{ index + 1}}:</h6>

										<div class="input-group">
											<div class="input-group-btn">
												<button class="btn btn-light" @click.prevent="removeCU(index)">
													<i class="icon-cross"></i>
												</button>
											</div>
											<!-- select -->
											<select class="form-control" name="id_cu" v-model="cu.id_cu" data-width="100%" :disabled="modelCu.length == 0">
												<option disabled value="">
													<span v-if="modelCuStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih CU</span>
												</option>
												<option value="0">CU BUKAN ANGGOTA PUSKOPCUINA</option>
												<option disabled value="-">---------------</option>
												<option v-for="(cu, index) in modelCu" :value="cu.id" :key="index">{{cu.name}}</option>
											</select>
										</div>

									</div>
								</div>

								<div class="col-md-4" v-if="cu.id_cu == 0">
									<div class="form-group">

										<!-- title -->
										<h6>Nama CU {{ index + 1}}:</h6>

										<!-- text -->
										<input type="text" name="anggota_nama" class="form-control" placeholder="Silahkan masukkan nama CU" v-model="cu.name">

									</div>
								</div>

								<!-- no_ba -->
								<div class="col-md-4">
									<div class="form-group">

										<!-- title -->
										<h6>No. BA CU {{ index + 1}}:</h6>

										<!-- text -->
										<input type="text" name="anggota_no_ba" class="form-control" placeholder="Silahkan masukkan no BA anggota CU" v-model="cu.no_ba">

									</div>
								</div>

								<!-- tanggal_masuk -->
								<div class="col-md-4">
									<div class="form-group">

										<!-- title -->
										<h6>Tgl. Jadi Anggota CU {{ index + 1}}:</h6>

										<!-- text -->
										<date-picker @dateSelected="cu.tanggal_masuk = $event" :defaultDate="cu.tanggal_masuk"></date-picker>	

									</div>
								</div>

								<div class="col-md-12">
									<hr/>
								</div>
							</div> 
						</div>

						<div class="col-md-12">
							<button class="btn btn-light btn-block" @click.prevent="addCU()"><i class="icon-plus3"></i>Tambah Keanggotan di CU
							</button>
						</div>	

					</div>
				</div>
			</div>
			
			<!-- pekerjaan -->
			<div class="card" v-if="mode == 'create_new'">
				<div class="card-header bg-white">
					<h5 class="card-title">Jabatan Saat Ini / Terakhir  <wajib-badge></wajib-badge></h5>
				</div>
				<div class="card-body">
					<div class="row">

						<!-- CU -->
						<div class="col-sm-12" v-if="currentUser.id_cu == 0">
							<div class="form-group" :class="{'has-error' : errors.has('form.pekerjaan.id_tempat')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.pekerjaan.id_tempat')}">
									<i class="icon-cross2" v-if="errors.has('form.pekerjaan.id_tempat')"></i>
									Tempat: <wajib-badge></wajib-badge>
								</h6>

								<!-- select -->
								<select class="form-control" name="id_tempat" v-model="form.pekerjaan.id_tempat" data-width="100%" v-validate="'required'" data-vv-as="Tempat pekerjaan" :disabled="modelCu.length == 0" @change="changeLembagaPekerjaan($event.target.value)">
									<option disabled value="">
										<span v-if="modelCuStat === 'loading'">Mohon tunggu...</span>
										<span v-else>Silahkan pilih tempat bekerja</span>
									</option>
									<option value="0">PUSKOPCUINA</option>
									<option v-for="(cu, index) in modelCu" :value="cu.id" :key="index">{{cu.name}}</option>
								</select>

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.pekerjaan.id_tempat')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.pekerjaan.id_tempat') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- status -->
						<div class="col-md-12" v-if="form.pekerjaan.id_tempat != ''">
							<div class="form-group">

								<!-- title -->
								<h5>
									Pilih status pekerjaan:
								</h5>

								<!-- select -->
								<select name="status" data-width="100%" class="form-control" v-model="form.pekerjaan.status">
									<option disabled value="">Silahkan pilih status pekerjaan</option>
									<option value="1">Pekerjaan saat ini dan masih bekerja</option>
									<option value="2">Riwayat pekerjaan sebelumnya</option>
									<option value="3">Pekerjaan terakhir dan tidak bekerja lagi</option>
								</select>

								<small class="text-muted">&nbsp;</small>
							</div>
						</div>

						<!-- tingkat -->
						<div class="col-sm-12" v-if="form.pekerjaan.status != ''">
							<div class="form-group" :class="{'has-error' : errors.has('form.pekerjaan.tingkat')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.pekerjaan.tingkat')}">
									<i class="icon-cross2" v-if="errors.has('form.pekerjaan.tingkat')"></i>
									Tingkat:
								</h6>

								<!-- select -->
								<select class="form-control" name="pekerjaan_tingkat" v-model="form.pekerjaan.tingkat" data-width="100%" v-validate="'required'" data-vv-as="Tingkat Pekerjaan">
									<option disabled value="">Silahkan pilih tingkat pekerjaan</option>
									<option value="1" v-if="form.pekerjaan.id_tempat != 'lain'">Pengurus</option>
									<option value="2" v-if="form.pekerjaan.id_tempat != 'lain'">Pengawas</option>
									<option value="3" v-if="form.pekerjaan.id_tempat != 'lain'">Komite</option>
									<option value="4" v-if="form.pekerjaan.id_tempat != 'lain'">Penasihat</option>
									<option value="5">Senior Manajer (General Manager, CEO, Deputy)</option>
									<option value="6">Manajer</option>
									<option value="7">Supervisor (Kepala Bagian, Kepala Divisi, Kepala/Koordinator TP, Kepala Bidang)</option>
									<option value="8">Staf</option>
									<option value="9">Kontrak</option>
									<option value="10">Kolektor</option>
									<option value="11">Kelompok Inti</option>
									<option value="12">Supporting Unit</option>
									<option value="13">Vendor sMartCU</option>
								</select>

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.pekerjaan.tingkat')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.pekerjaan.tingkat') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- jabatan -->
						<div class="col-sm-12" v-if="form.pekerjaan.tingkat != ''"> <div class="form-group" :class="{'has-error' : errors.has('form.pekerjaan.name')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.pekerjaan.name')}">
									<i class="icon-cross2" v-if="errors.has('form.pekerjaan.name')"></i>
									Jabatan: <wajib-badge></wajib-badge></h6>

								<!-- text -->
								<input type="text" name="jabatan" class="form-control" placeholder="Silahkan masukkan nama jabatan" v-validate="'required|min:5'" data-vv-as="Jabatan pekerjaan" v-model="form.pekerjaan.name">

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.pekerjaan.name')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.pekerjaan.name') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- tp -->
						<div class="col-sm-12" v-if="form.pekerjaan.tipe == 1 && form.pekerjaan.tingkat != '1' && form.pekerjaan.tingkat != '2' && form.pekerjaan.tingkat != '3' && form.pekerjaan.tingkat != '4' && form.pekerjaan.tingkat != ''">
							<div class="form-group" :class="{'has-error' : errors.has('form.pekerjaan.id_tp')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.pekerjaan.id_tp')}">
									<i class="icon-cross2" v-if="errors.has('form.pekerjaan.id_tp')"></i>
									TP/KP: <wajib-badge></wajib-badge>
								</h6>

								<!-- select -->
								<select class="form-control" name="id_tp" v-model="form.pekerjaan.id_tp" data-width="100%" v-validate="'required'" data-vv-as="TP/KP">
									<option disabled value="">
										<span v-if="modelTpStat === 'loading'">Mohon tunggu...</span>
										<span v-else>Silahkan pilih TP/KP</span>
									</option>
									<option value="0">Kantor Pusat</option>
									<template v-if="modelTp">
										<option v-for="(tp, index) in modelTp" :value="tp.id" :key="index" >{{tp.name}}</option>
									</template>
								</select>

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.pekerjaan.id_tp')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.pekerjaan.id_tp') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- tanggal mulai -->
						<div class="col-sm-12" v-if="form.pekerjaan.tingkat != ''">
							<div class="form-group" :class="{'has-error' : errors.has('form.pekerjaan.mulai')}">

								<!-- title -->
								<h6 :class="{ 'text-danger' : errors.has('form.pekerjaan.mulai')}">
									<i class="icon-cross2" v-if="errors.has('form.pekerjaan.mulai')"></i>
									Tgl. Mulai: <wajib-badge></wajib-badge></h6>

								<!-- input -->
								<date-picker @dateSelected="form.pekerjaan.mulai = $event" :defaultDate="form.pekerjaan.mulai"></date-picker>	
								<input v-model="form.pekerjaan.mulai" v-show="false" v-validate="'required'" data-vv-as="Tgl. mulai"/>

								<!-- error message -->
								<small class="text-muted text-danger" v-if="errors.has('form.pekerjaan.mulai')">
									<i class="icon-arrow-small-right"></i> {{ errors.first('form.pekerjaan.mulai') }}
								</small>
								<small class="text-muted" v-else>&nbsp;</small>
							</div>
						</div>

						<!-- tanggal selesai -->
						<div class="col-sm-12" v-if="form.pekerjaan.status != '' && form.pekerjaan.tingkat != '' &&form.pekerjaan.status != '1'">
							<div class="form-group">

								<!-- title -->
								<h6>Tgl. Selesai</h6>

								<!-- input -->
								<date-picker @dateSelected="form.pekerjaan.selesai = $event" :defaultDate="form.pekerjaan.selesai"></date-picker>

								<small class="text-muted">Kosongkan apabila masih bekerja / tidak memiliki periode selesai</small>
							</div>
						</div>

						<!-- keterangan -->
						<div class="col-sm-12" v-if="form.pekerjaan.status != '' && form.pekerjaan.tingkat != '' && form.pekerjaan.status == '3'">
							<div class="form-group">

								<!-- title -->
								<h6>Keterangan Tidak Bekerja:</h6>

								<!-- text -->
								<input type="text" name="keterangan_tidak_aktif" class="form-control" placeholder="Silahkan masukkan keterangan tidak bekerja" v-model="form.pekerjaan.keterangan_tidak_aktif">

							</div>
						</div>

					</div>
				</div>
			</div>

			<!-- form info -->
			<form-info></form-info>	
			<br/>

			<!-- form button -->
			<div class="card card-body">
				<form-button
					:cancelState="''"
					:formValidation="'form'"
					:confirmIcon="confirmIcon"
					:confirmTitle="confirmTitle" v-if="mode == 'edit_profile'"></form-button>
				<form-button
					:cancelState="'methods'"
					:formValidation="'form'"
					:confirmIcon="confirmIcon"
					:confirmTitle="confirmTitle"
					@cancelClick="back" v-else></form-button>
			</div>

		</form>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">
		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import { toMulipartedForm } from '../../helpers/form';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formIdentitas from "./formIdentitas.vue";
	import formLokasi from "./formLokasi.vue";
	import formAnggotaCu from "./formAnggotaCu.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import infoIcon from "../../components/infoIcon.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import Cleave from 'vue-cleave-component';
	import aktivisAPI from '../../api/aktivis.js';
	import appImageUpload from '../../components/ImageUpload.vue';
	import identitas from "../../components/identitas2.vue";
	import DatePicker from "../../components/datePicker.vue";
	
	export default {
		props: ['mode','nik','id_aktivis'],
		components: {
			appModal,
			message,
			formIdentitas,
			formLokasi,
			formAnggotaCu,
			formButton,
			formInfo,
			Cleave,
			appImageUpload,
			infoIcon,
			wajibBadge,
			identitas,
			DatePicker
		},
		data() {
			return {
				kelas: 'aktivis',
				confirmIcon: 'icon-arrow-right14',
				confirmTitle: 'Lanjut ke riwayat',
				canEditIdentitas: true,
				cleaveOption: {
          date:{
            date: true,
            datePattern: ['Y','m','d'],
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
          }
				},
				formAnak: [],
				formAnakRemoved: [],
				formCU: [{id_cu:''}],
				formCURemoved: [],
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
				message: {
					show: false,
					content: ''
				},
			}
		},
		created(){
			if(this.currentUser.id_cu == 0){
				if(this.modelCuStat != 'success'){
					this.$store.dispatch('cu/getHeader');
				}
			}

			if(this.mode == 'edit' || this.mode == 'edit_profile'){
				this.confirmIcon = 'icon-floppy-disk';
				this.confirmTitle = 'Simpan';
			}else if(this.mode == 'create_old'){
				this.canEditIdentitas = false;
			}

			if(this.mode == 'create_new'){
				if(this.currentUser.id_cu == 0){
					if(this.form.pekerjaan.tipe == 0){
						this.form.pekerjaan.tipe = 3;
					}
				}else{
					this.form.anggota_cu.id_cu = this.currentUser.id_cu;
					this.form.pekerjaan.tipe = 1;
					this.form.pekerjaan.id_tempat = this.currentUser.id_cu;
				}
			}

			this.form.id_cu = this.currentUser.id_cu;
			this.$store.dispatch('provinces/get');
			this.fetch();
			this.fetchMode();
		},
		watch: {
			formStat(value){
				this.fetchMode();
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
				if(this.mode == 'create_new'){
					this.form.nik = this.nik;
				}

				if(this.mode == 'edit' || this.mode == 'createEdit'){
					this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
				} 

				if(this.mode == 'edit_profile'){
					this.$store.dispatch(this.kelas + '/edit', this.id_aktivis);
				} 

				if(this.modelCuStat != 'success'){
					this.$store.dispatch('cu/getHeader');
				}
			},
			fetchMode(){
				if(this.mode == 'edit' || this.mode == 'edit_profile' || this.mode == 'create_old'){
					this.loadData();
					this.changeAlamat();
				}else if(this.mode == 'create_new'){
					this.form.nik = this.nik;
				}
				
				if(this.currentUser.id_cu != 0 && this.mode == 'create_new'){
					this.form.pekerjaan.id_tempat = this.currentUser.id_cu;
					this.changeLembagaPekerjaan(this.currentUser.id_cu);
				}
			},
			loadData(){
				if(this.form.keluarga){	
					var valData;
					var keluarga = {};
					this.formAnak = [];
					for(valData of this.form.keluarga){
						if(valData.tipe == 'Ayah'){
							this.form.ayah = valData;
							keluarga.ayah = valData.name;
						}
						if(valData.tipe == 'Ibu'){
							this.form.ibu = valData;
							keluarga.ibu = valData.name;
						}
						if(valData.tipe == 'Pasangan'){
							this.form.pasangan = valData;
							keluarga.pasangan = valData.name;
						}
						if(valData.tipe == 'Anak'){
							this.formAnak.push(valData);
						}
					}
					this.form.keluarga = keluarga;
				}

				if(this.form.anggota_cu){
					this.formCU = this.form.anggota_cu;
				}
			},
			save() {
				this.form.anak = this.formAnak;
				this.form.anak_removed = this.formAnakRemoved;
				this.form.anggota_cu = this.formCU;
				this.form.anggota_cu_removed = this.formCURemoved;

				if(this.mode == 'create_new'){
					if(this.currentUser.id_cu == 0){
						if(this.form.pekerjaan.tipe == 0){
							this.form.pekerjaan.tipe = 3;
						}
					}else{
						this.form.anggota_cu.id_cu = this.currentUser.id_cu;
						this.form.pekerjaan.tipe = 1;
						this.form.pekerjaan.id_tempat = this.currentUser.id_cu;
					}
				}
				
				if(this.mode == 'edit' || this.mode == 'edit_profile' || (this.mode == 'create_old' && this.canEditIdentitas)){
					if(this.form.ayah){
						this.form.ayah.name = this.form.keluarga.ayah;
					}
					if(this.form.ibu){
						this.form.ibu.name = this.form.keluarga.ibu;
					}
					if(this.form.pasangan){
						this.form.pasangan.name = this.form.keluarga.pasangan;
					}
				}
				
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.mode == 'create_new'){
							if(this.form.pekerjaan.tipe != ''){
								this.$store.dispatch(this.kelas + '/store', formData);
							}else{
								this.message.show = true;
								this.message.content = 'Silahkan melengkapi informasi jabatan saat ini terlebih dahulu.';
							}
						}else{
								this.$store.dispatch(this.kelas + '/update',[this.form.id, formData]);	
						}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			changeLembagaPekerjaan(value){
				if(value == 0){
					this.form.pekerjaan.tipe = 3;
				}else if(value == 'lain'){
					this.form.pekerjaan.tipe = 2;
				}else{
					this.form.pekerjaan.tipe = 1;
					this.$store.dispatch('tp/getCu',this.currentUser.id_cu);
				}
			},
			ubahCanEdit(){
				if(this.canEditIdentitas){
					this.canEditIdentitas = false;
				}else{
					this.canEditIdentitas = true;
					this.loadData();
					this.changeAlamat();
				}
			},
			changeAlamat(){
				this.changeProvinces(this.form.id_provinces);
				this.changeRegencies(this.form.id_regencies);
				this.changeDistricts(this.form.id_districts);
			},
			back(){
				if(this.mode != 'edit_profile'){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu, tingkat: 'semua'}});
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
			addCU(){
				this.formCU.push({id_cu:''});
			},
			removeAnak(index){
				this.formAnakRemoved.push(this.formAnak[index]);
				this.formAnak.splice(index,1);
			},
			removeCU(index){
				this.formCURemoved.push(this.formCU[index]);
				this.formCU.splice(index,1);
			},
			modalTutup() {
 				if(this.updateStat === 'success'){
					this.$store.dispatch(this.kelas + '/resetUpdateStat');
					let idcu = '';
					if(this.currentUser.id_cu != 0){
						idcu = this.currentUser.id_cu;
					}else{
						idcu = 'semua';
					}

					if(this.mode == 'edit_profile'){
						window.scrollTo(0, 0);
						// do nothing
					}else if(this.mode != 'edit'){
						this.$router.push({ name: this.kelas + "RiwayatCreate",params: {id: this.updateResponse.id, cu: idcu }});
					}else{
						this.back();
					}
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
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('aktivis',{
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
			})
		}
	}
</script>