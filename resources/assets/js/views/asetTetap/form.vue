<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<form @submit.prevent="save" enctype="multipart/form-data"  data-vv-scope="form">

						<!-- main form -->
						<div class="card">
							<div class="card-body">

								<!-- isInduk -->
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h6>Apakah aset ini merupakan bagian dari aset lain?:</h6>

											<!-- select -->
											<select class="form-control" v-model="isInduk" name="cekInduk" @change="changeInduk($event.target.value)">
												<option disabled value="">Silahkan pilih</option>
												<option value="false">Ya</option>
												<option value="true">Tidak</option>
											</select>

										</div>
									</div>
								</div>

								<!-- aset card -->
								<div class="card" v-if="form.aset_id != ''">
									<div class="card-header bg-info text-white header-elements-inline">
										<h6 class="card-title">Induk Aset</h6>
										<div class="header-elements">
											<button type="button" class="btn btn-danger" @click.prevent="deleteSelected"><i class="icon-cross2 mr-2"></i> Batal</button>
										</div>
									</div>
									<div class="card-body">
										<card-data :itemData="selectedItem"></card-data>
									</div>
								</div>

								<!-- tabel aset -->
								<data-viewer :title="'Aset Tetap'" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" @fetch="fetchAset" :isDasar="'true'" :isNoButtonRow="'true'" v-if="isInduk == 'false' && form.aset_id == ''">

									<!-- item  -->
									<template slot="item-desktop" slot-scope="props">
										<tr class="text-nowrap cursor-pointer" @click="selectedRow(props.item)">
											<td>
												{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
											</td>
											<td>
												<img :src="'/images/asetTetap/' + props.item.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
												<img :src="'/images/no_image.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
											</td>
											<td>
												<check-value :value="props.item.kode"></check-value>
											</td>
											<td>
												<check-value :value="props.item.name"></check-value>
											</td>
											<td>
												<check-value :value="props.item.jenis.name" v-if="props.item.jenis"></check-value>
											</td>
											<td>
												<check-value :value="props.item.merk"></check-value>
											</td>
											<td>
												<check-value :value="props.item.tipe"></check-value>
											</td>
											<td>
												<check-value :value="props.item.lokasi.name" v-if="props.item.lokasi"></check-value>
											</td>
											<td>
												<check-value :value="props.item.aktivis.name" v-if="props.item.aktivis"></check-value>
											</td>
											<td v-html="$options.filters.date(props.item.tanggal)">
											</td>
											<td>
												<check-value :value="props.item.pembeli.name" v-if="props.item.pembeli"></check-value>
											</td>
											<td>
												<check-value :value="props.item.harga" valueType="currency"></check-value>
											</td>
											<td>
												<check-value :value="props.item.bulan_penyusutan" valueType="currency"></check-value>
											</td>
											<td>
												<check-value :value="props.item.pokok_penyusutan" valueType="currency"></check-value>
											</td>
											<td>
												<img :src="'/images/asetTetap/' + props.item.nota + 'n.jpg'" class="img-rounded img-fluid wmin-sm" v-if="props.item.nota">
												<img :src="'/images/no_image.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
											</td>
											<td>
												<check-value :value="props.item.has_aset_count" valueType="currency"></check-value>
											</td>
											<td>
												<check-value :value="props.item.kondisi"></check-value>
											</td>
										</tr>
									</template>

								</data-viewer>

								<!-- form 1 -->
								<div class="row" v-if="isInduk">

									<!-- divider -->
									<div class="col-12"><hr/></div>

									<!-- foto -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h6>Foto:</h6>

											<!-- imageupload -->
											<app-image-upload :image_loc="'/images/asetTetap/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
										</div>
									</div> 
	
									<!-- golongan -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.aset_tetap_golongan_id')}">
												<i class="icon-cross2" v-if="errors.has('form.aset_tetap_golongan_id')"></i>
												Golongan: <wajib-badge></wajib-badge>
											</h6>

											<div class="input-group">

												<!-- select -->
													<select class="form-control" name="golongan" v-model="form.aset_tetap_golongan_id" data-width="100%" v-validate="'required'" data-vv-as="Golongan" :disabled="modelGolongan.length == 0" @change="changeGolongan($event.target.value)">
													<option disabled value="">
														<span v-if="modelGolonganStat === 'loading'">Mohon tunggu...</span>
														<span v-else>Silahkan pilih golongan</span>
													</option>
													<option v-for="(datas, index) in modelGolongan" :value="datas.id" :key="index">{{datas.kode + ' | ' + datas.name}}</option>
												</select>

												<!-- button -->
												<div class="input-group-append" v-if="currentUser.can && currentUser.can['create_aset_tetap_jenis']">
													<button type="button" class="btn btn-light" @click="modalOpen('golongan')">
														<i class="icon-plus22"></i>
													</button>
												</div>

											</div>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.aset_tetap_jenis_id')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.aset_tetap_jenis_id') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kelompok -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.aset_tetap_kelompok_id')}">
												<i class="icon-cross2" v-if="errors.has('form.aset_tetap_kelompok_id')"></i>
												Kelompok: <wajib-badge></wajib-badge>
											</h6>

											<div class="input-group">

												<!-- select -->
													<select class="form-control" name="kelompok" v-model="form.aset_tetap_kelompok_id" data-width="100%" v-validate="'required'" data-vv-as="Kelompok" :disabled="modelKelompok.length == 0" @change="changeKelompok($event.target.value)">
													<option disabled value="">
														<span v-if="modelKelompokStat === 'loading'">Mohon tunggu...</span>
														<span v-else>Silahkan pilih kelompok</span>
													</option>
													<option v-for="(datas, index) in modelKelompok" :value="datas.id" :key="index">{{datas.kode + ' | ' + datas.name}}</option>
												</select>

												<!-- button -->
												<div class="input-group-append" v-if="currentUser.can && currentUser.can['create_aset_tetap_jenis']">
													<button type="button" class="btn btn-light" @click="modalOpen('kelompok')">
														<i class="icon-plus22"></i>
													</button>
												</div>

											</div>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.aset_tetap_jenis_id')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.aset_tetap_jenis_id') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- jenis -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.aset_tetap_jenis_id')}">
												<i class="icon-cross2" v-if="errors.has('form.aset_tetap_jenis_id')"></i>
												Jenis: <wajib-badge></wajib-badge>
											</h6>

											<div class="input-group">

												<!-- select -->
													<select class="form-control" name="jenis" v-model="form.aset_tetap_jenis_id" data-width="100%" v-validate="'required'" data-vv-as="Jenis" :disabled="modelJenis.length == 0" @change="changeJenis($event.target.value)">
													<option disabled value="">
														<span v-if="modelJenisStat === 'loading'">Mohon tunggu...</span>
														<span v-else>Silahkan pilih jenis</span>
													</option>
													<option v-for="(datas, index) in modelJenis" :value="datas.id" :key="index">{{datas.kode + ' | ' + datas.name}}</option>
												</select>

												<!-- button -->
												<div class="input-group-append" v-if="currentUser.can && currentUser.can['create_aset_tetap_jenis']">
													<button type="button" class="btn btn-light" @click="modalOpen('jenis')">
														<i class="icon-plus22"></i>
													</button>
												</div>

											</div>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.aset_tetap_jenis_id')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.aset_tetap_jenis_id') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<div class="col-md-12"><hr/></div>

								</div>

								<!-- form 2  -->
								<div class="row" v-if="form.aset_tetap_jenis_id != ''">
										
									<!-- kode -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.kode')}">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.kode')}">
												<i class="icon-cross2" v-if="errors.has('form.kode')"></i>
												Kode: <wajib-badge></wajib-badge></h6>

											<!-- text -->
											<cleave 
												name="kode"
												v-model="form.kode" 
												class="form-control" 
												:options="cleaveOption.number15"
												placeholder="Silahkan masukkan kode"
												v-validate="'required'" data-vv-as="Kode"
												readonly></cleave>	
											
											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.kode')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.kode') }}
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
												Nama: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama kategori artikel" v-validate="'required'" data-vv-as="Nama" v-model="form.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- merk -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.merk')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.merk')}">
												<i class="icon-cross2" v-if="errors.has('form.merk')"></i>
												Merk: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="merk" class="form-control" placeholder="Silahkan masukkan merk" v-validate="'required'" data-vv-as="Merk" v-model="form.merk">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.merk')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.merk') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- tipe -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.tipe')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.tipe')}">
												<i class="icon-cross2" v-if="errors.has('form.tipe')"></i>
												Tipe: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<input type="text" name="tipe" class="form-control" placeholder="Silahkan masukkan tipe" v-validate="'required'" data-vv-as="Tipe" v-model="form.tipe">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.tipe')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tipe') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- lokasi -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.aset_tetap_lokasi_id')}">
												<i class="icon-cross2" v-if="errors.has('form.aset_tetap_lokasi_id')"></i>
												Lokasi: <wajib-badge></wajib-badge>
											</h6>

											<div class="input-group">

												<!-- select -->
													<select class="form-control" name="lokasi" v-model="form.aset_tetap_lokasi_id" data-width="100%" v-validate="'required'" data-vv-as="Lokasi" :disabled="modelLokasi.length == 0">
													<option disabled value="">
														<span v-if="modelLokasiStat === 'loading'">Mohon tunggu...</span>
														<span v-else>Silahkan pilih lokasi</span>
													</option>
													<option v-for="(datas, index) in modelLokasi" :value="datas.id" :key="index">{{datas.name}}</option>
												</select>

												<!-- button -->
												<div class="input-group-append" v-if="currentUser.can && currentUser.can['create_aset_tetap_lokasi']">
													<button type="button" class="btn btn-light" @click="modalOpen('lokasi')">
														<i class="icon-plus22"></i>
													</button>
												</div>

											</div>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.aset_tetap_lokasi_id')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.aset_tetap_lokasi_id') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- penangungjawab -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.aktivis_id')}">
												<i class="icon-cross2" v-if="errors.has('form.aktivis_id')"></i>
												Penangungjawab: <wajib-badge></wajib-badge>
											</h6>

											<!-- select -->
											<select class="form-control" name="penanggungjawab" v-model="form.aktivis_id" data-width="100%" v-validate="'required'" data-vv-as="Penangungjawab" :disabled="modelAktivis.length == 0">
												<option disabled value="">
													<span v-if="modelAktivisStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih penangungjawab</span>
												</option>
												<option v-for="(datas, index) in modelAktivis" :value="datas.id" :key="index">{{datas.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.aktivis_id')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.aktivis_id') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- kondisi -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.kondisi')}">
												<i class="icon-cross2" v-if="errors.has('form.kondisi')"></i>
												Kondisi: <wajib-badge></wajib-badge>
											</h6>

											<!-- select -->
											<select class="form-control" name="kondisi" v-model="form.kondisi" data-width="100%" v-validate="'required'" data-vv-as="Kondisi">
												<option disabled value="">Silahkan pilih kondisi</option>
												<option value="Baik">Baik</option>
												<option value="Diperbaiki">Diperbaiki</option>
												<option value="Rusak">Rusak</option>
												<option value="Dijual">Dijual</option>
												<option value="Hilang">Hilang</option>
												<option value="Disewa">Disewa</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.kondisi')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.kondisi') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- divider -->
									<div class="col-12"><hr/></div>

									<!-- pembeli -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.aktivis_id_pembeli')}">
												<i class="icon-cross2" v-if="errors.has('form.aktivis_id_pembeli')"></i>
												Pembeli: <wajib-badge></wajib-badge>
											</h6>

											<!-- select -->
											<select class="form-control" name="pembeli" v-model="form.aktivis_id_pembeli" data-width="100%" v-validate="'required'" data-vv-as="Pembeli" :disabled="modelAktivis.length == 0">
												<option disabled value="">
													<span v-if="modelAktivisStat === 'loading'">Mohon tunggu...</span>
													<span v-else>Silahkan pilih pembeli</span>
												</option>
												<option value="0">Mitra</option>
												<option disabled value="">----------------</option>
												<option v-for="(datas, index) in modelAktivis" :value="datas.id" :key="index">{{datas.name}}</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.aktivis_id_pembeli')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.aktivis_id_pembeli') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>
									
									<!-- tanggal beli -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.tanggal')}">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.tanggal')}">
												<i class="icon-cross2" v-if="errors.has('form.tanggal')"></i>
												Tgl. Pembelian: <wajib-badge></wajib-badge></h6>

											<!-- input -->
											<date-picker @dateSelected="form.tanggal = $event" :defaultDate="form.tanggal"></date-picker>	
											<input v-model="form.tanggal" v-show="false" v-validate="'required'" data-vv-as="Tanggal pembelian"/>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.tanggal')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.tanggal') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>	

										</div>
									</div>

									<!-- harga -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.harga')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.harga')}">
												<i class="icon-cross2" v-if="errors.has('form.harga')"></i>
												Harga: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<cleave 
												v-model="form.harga" 
												class="form-control" 
												name="harga"
												:options="cleaveOption.numeric"
												v-validate="'required'" data-vv-as="Harga"
												placeholder="Silahkan masukkan harga"></cleave>
												

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.harga')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.harga') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- penyusutan -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.pokok_penyusutan')}">

											<!-- title -->
											<h5>
												Harga Perolehan / Pokok Penyusutan: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<cleave 
												v-model="form.pokok_penyusutan" 
												class="form-control" 
												name="pokok_penyusutan"
												:options="cleaveOption.numeric"
												v-validate="'required'" data-vv-as="pokok_penyusutan"
												placeholder="Silahkan masukkan jumlah pokok penyusutan"
												>
											</cleave>
										</div>
									</div>

									<!-- bulan penyusutan -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.bulan_penyusutan')}">

											<!-- title -->
											<h5>
												Bulan Penyusutan: <wajib-badge></wajib-badge></h5>

											<!-- text -->
											<cleave 
												v-model="form.bulan_penyusutan" 
												class="form-control" 
												name="bulan_penyusutan"
												:options="cleaveOption.numeric"
												v-validate="'required'" data-vv-as="bulan_penyusutan"
												placeholder="Silahkan masukkan lama bulan penyusutan"></cleave>											
										</div>
									</div>
									
									<!-- sesuaikan -->
									<div class="col-md-4">
										<div class="form-group">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.sesuaikan')}">
												<i class="icon-cross2" v-if="errors.has('form.sesuaikan')"></i>
												Sesuaikan sisa penyusutan dan sisa bulan penyusutan: <wajib-badge></wajib-badge>
											</h6>

											<!-- select -->
											<select class="form-control" name="sesuaikan" v-model="form.sesuaikan" data-width="100%" v-validate="'required'" data-vv-as="Sesuaikan">
												<option disabled value="">Silahkan pilih sesuaikan</option>
												<option value="Tidak">Tidak</option>
												<option value="Sesuaikan">Sesuaikan</option>
											</select>

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.sesuaikan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.sesuaikan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- penyusutan -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.sisa_penyusutan')}" >

											<!-- title -->
											<h5>
												Sisa Penyusutan: </h5>

											<!-- text -->
											<cleave 
												v-model="form.sisa_penyusutan" 
												class="form-control" 
												name="sisa_penyusutan"
												:disabled="true"
												:options="cleaveOption.numeric"
												v-validate="'required'" data-vv-as="sisa_penyusutan"></cleave>

										</div>
									</div>
									<!-- penyusutan -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.sisa_bulan_penyusutan')}" >

											<!-- title -->
											<h5>
												Sisa Bulan Penyusutan: </h5>
											<!-- text -->
											<cleave 
												v-model="form.sisa_bulan_penyusutan" 
												class="form-control" 
												name="sisa_bulan_penyusutan"
												:disabled="true"
												:options="cleaveOption.numeric"
												v-validate="'required'" data-vv-as="sisa_bulan_penyusutan"></cleave>
										</div>
									</div>

									<!-- nota -->
									<div class="col-md-12">
										<div class="form-group">

											<!-- title -->
											<h6>Bukti Pembelian:</h6>

											<!-- imageupload -->
											<app-image-upload :image_loc="'/images/asetTetap/'" :image_temp="form.nota" v-model="form.nota"></app-image-upload>
										</div>
									</div> 

									<!-- keterangan -->
									<div class="col-md-12">
										<div class="form-group" >

											<!-- title -->
											<h6>Keterangan:</h6>

											<!-- text -->
											<textarea rows="3" 
												type="text" 
												name="keterangan" 
												class="form-control" 
												placeholder="Silahkan masukkan keterangan " v-model="form.keterangan"></textarea>
											
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
			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- tambah penulis -->
			<template slot="modal-body1">
				<form-jenis :kelas="'asetTetapJenis'" :mode="'tambah'" @tutup="modalTutup" v-if="state == 'jenis'"></form-jenis>
				<form-kelompok :kelas="'asetTetapKelompok'" :mode="'tambah'" @tutup="modalTutup" v-else-if="state == 'kelompok'"></form-kelompok>
				<form-golongan :kelas="'asetTetapGolongan'" :mode="'tambah'" @tutup="modalTutup" v-else-if="state == 'golongan'"></form-golongan>
				<form-lokasi :kelas="'asetTetapLokasi'" :mode="'tambah'" @tutup="modalTutup" v-else></form-lokasi>
			</template>
		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import _ from 'lodash';
	import pageHeader from "../../components/pageHeader.vue";
	import { toMulipartedForm } from '../../helpers/form';
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import Cleave from 'vue-cleave-component';
	import infoIcon from "../../components/infoIcon.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import formGolongan from "../asetTetapGolongan/form.vue";
	import formKelompok from "../asetTetapKelompok/form.vue";
	import formJenis from "../asetTetapJenis/form.vue";
	import formLokasi from "../asetTetapLokasi/form.vue";
	import cardData from "./card.vue";
	import DataViewer from '../../components/dataviewer2.vue';
	import checkValue from '../../components/checkValue.vue';
	import DatePicker from "../../components/datePicker.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			message,
			Cleave,
			formButton,
			formInfo,
			wajibBadge,
			formGolongan,
			formKelompok,
			formJenis,
			formLokasi,
			DataViewer,
			infoIcon,
			checkValue,
			cardData,
			DatePicker
		},
		data() {
			return {
				title: 'Tambah Aset Tetap',
				titleDesc: 'Menambah Aset Tetap Baru',
				titleIcon: 'icon-plus3',
				kelas: 'asetTetap',
				level2Title: 'Aset Tetap',
				isInduk: '',
				cleaveOption: {
					date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
          },
					number15: {
            numeral: true,
            numeralIntegerScale: 15,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
					},
					numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
					},
				},
				selectedItem: {},
				query: {
					order_column: "name",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				columnData: [
					{ title: 'No.' },
					{ title: 'Foto' },
					{ title: 'Nota' },
					{ title: 'Kode' },
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
					{ title: 'Jenis' },
					{ title: 'Merk' },
					{ title: 'Tipe' },
					{ title: 'Lokasi' },
					{ title: 'Penanggungjawab' },
					{ title: 'Tgl. Beli' },
					{ title: 'Pembeli' },
					{ title: 'Harga' },
					{ title: 'Pokok Penyusutan'},
					{ title: 'Bulan Penyusutan'},
					{ title: 'Sub' },
					{ title: 'Kondisi' },
				],
				state: '',
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
		created(){},
		watch: {
			formStat(value){
				if(value == 'success'){
					if(this.$route.meta.mode === 'edit'){
						if(this.form.aset){
							this.isInduk = "false";
							this.selectedItem = this.form.aset;
						}else{
							this.isInduk = "true";
						}
						this.changeGolongan(this.form.aset_tetap_golongan_id);
						this.changeKelompok(this.form.aset_tetap_kelompok_id);
					}
				}
			},
			kodeStat(value){
				if(value == 'success'){
					this.form.kode = ++this.kode.kode;
				}else{
					let _golongan = '';
					let _kelompok = '';
					let _jenis = '';
					_golongan = _.find(this.modelGolongan,{'id': this.form.aset_tetap_golongan_id});
					_kelompok = _.find(this.modelKelompok,{'id': this.form.aset_tetap_kelompok_id});
					_jenis = _.find(this.modelJenis,{'id': this.form.aset_tetap_jenis_id});
					
					this.form.kode = _golongan.kode + _kelompok.kode + _jenis.kode + '0000';
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
			updateGolonganStat(value){
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateJenisResponse.message;
					this.fetchGolongan();
					this.form.aset_tetap_jenis_golongan_id = this.updateJenisResponse.id;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateJenisResponse.message;
				}
			},
			updateKelompokStat(value){
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateJenisResponse.message;
					this.changeGolongan(this.form.aset_tetap_golongan_id);
					this.form.aset_tetap_jenis_kelompok_id = this.updateJenisResponse.id;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateJenisResponse.message;
				}
			},
			updateJenisStat(value){
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateJenisResponse.message;
					this.changeKelompok(this.form.aset_tetap_kelompok_id);
					this.form.aset_tetap_jenis_id = this.updateJenisResponse.id;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateJenisResponse.message;
				}
			},
			updateLokasiStat(value){
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateLokasiResponse.message;
					this.fetchLokasi();
					this.form.aset_tetap_lokasi_id = this.updateLokasiResponse.id;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateLokasiResponse.message;
				}
			},
    },
		methods: {
			fetch(){
				if(this.$route.meta.mode === 'edit'){
					this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
					this.title = 'Ubah Aset Tetap';
					this.titleDesc = 'Mengubah aset tetap';
					this.titleIcon = 'icon-pencil5';
				} else {
					this.title = 'Tambah Aset Tetap';
					this.titleDesc = 'Menambah aset tetap';
					this.titleIcon = 'icon-plus3';
					this.$store.dispatch(this.kelas + '/create');
				}
				this.fetchGolongan();
				this.fetchLokasi();
				this.fetchAktivis();
			},
			fetchGolongan(){
				this.$store.dispatch('asetTetapGolongan/resetDataS');
				this.$store.dispatch('asetTetapGolongan/get');
			},
			fetchLokasi(){
				this.$store.dispatch('asetTetapLokasi/resetDataS');
				this.$store.dispatch('asetTetapLokasi/get');
			},
			fetchAktivis(){
				this.$store.dispatch('aktivis/resetDataS');
				this.$store.dispatch('aktivis/get', 0);
			},
			fetchAset(params){
				this.$store.dispatch(this.kelas + '/index', params);
				this.excelDownloadUrl = this.kelas;
			},
			checkUser(permission,id_cu){
				if(this.currentUser){
					if(!this.currentUser.can || !this.currentUser.can[permission]){
						this.$router.push('/notFound');
					}
					if(!id_cu || this.currentUser.id_cu){
						if(this.currentUser.id_cu != 0 && this.currentUser.id_cu != id_cu){
							this.$router.push('/notFound');
						}
					}
				}
			},
			changeInduk(value){
				if(value){
					if(this.itemDataStat != 'success')
						this.fetchAset(this.query);
				}
			},
			changeGolongan(id){
				this.$store.dispatch('asetTetapKelompok/resetDataS');
				this.$store.dispatch('asetTetapKelompok/get', id);
			},
			changeKelompok(id){
				this.$store.dispatch('asetTetapJenis/resetDataS');
				this.$store.dispatch('asetTetapJenis/get', id);
			},
			changeJenis(id){
				this.$store.dispatch('asetTetap/generate', id);
			},
			selectedRow(item){
				this.selectedItem = item;
				this.form.aset_id = item.id;
			},
			deleteSelected(){
				this.selectedItem = [];
				this.form.aset_id = '';
				if(this.itemDataStat != 'success')
					this.fetchAset(this.query);
			},
			save() {
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode == 'edit'){
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
				this.$router.push({name: this.kelas});
			},
			modalOpen(value){
				this.modalShow = true;
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Tambah '+ value +' aset tetap';
				this.state = value;
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
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('asetTetap',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				kode: 'kode',
				kodeStat: 'kodeStat',
				updateResponse: 'update',
				updateStat: 'updateStat',
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
			}),
			...mapGetters('asetTetapJenis',{
				modelJenis: 'dataS',
				modelJenisStat: 'dataStatS',
				updateJenisResponse: 'update',
				updateJenisStat: 'updateStat',
			}),
			...mapGetters('asetTetapKelompok',{
				modelKelompok: 'dataS',
				modelKelompokStat: 'dataStatS',
				updateKelompokResponse: 'update',
				updateKelompokStat: 'updateStat',
			}),
			...mapGetters('asetTetapGolongan',{
				modelGolongan: 'dataS',
				modelGolonganStat: 'dataStatS',
				updateGolonganResponse: 'update',
				updateGolonganStat: 'updateStat',
			}),
			...mapGetters('asetTetapLokasi',{
				modelLokasi: 'dataS',
				modelLokasiStat: 'dataStatS',
				updateLokasiResponse: 'update',
				updateLokasiStat: 'updateStat',
			}),
			...mapGetters('aktivis',{
				modelAktivis: 'dataS',
				modelAktivisStat: 'dataStatS',
				updateAktivisResponse: 'update',
				updateAktivisStat: 'updateStat',
			}),
			...mapGetters('mitraOrang',{
				modelMitraOrang: 'dataS',
				modelMitraOrangStat: 'dataStatS',
			}),
			...mapGetters('mitraLembaga',{
				modelMitraLembaga: 'dataS',
				modelMitraLembagaStat: 'dataStatS',
			}),
		}
	}
</script>