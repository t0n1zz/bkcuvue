<template>
	<div>

    <!-- navbar -->
    <div class="nav-tabs-responsive mb-3">
      <ul class="nav nav-tabs nav-tabs-solid nav-justified bg-light">
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{'active' : tabName == 'pengajuan'}" @click.prevent="changeTab('pengajuan')"><i class="icon-profile mr-2"></i> Pengajuan</a>
        </li>
        <li class="nav-item" v-if="selected.status_klaim != 0">
          <a href="#" class="nav-link" :class="{'active' : tabName == 'verifikator'}" @click.prevent="changeTab('verifikator')"><i class="icon-file-check mr-2"></i> Verifikator</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{'active' : tabName == 'dokumen'}" @click.prevent="changeTab('dokumen')"><i class="icon-stack mr-2"></i> Dokumen</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{'active' : tabName == 'history'}" @click.prevent="changeTab('history')"><i class="icon-copy3 mr-2"></i> Riwayat Bantuan Solidaritas </a>
        </li>
      </ul>
    </div>
    <!-- navbar -->
    
    <!-- pengajuan -->
    <transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="tabName == 'pengajuan'">
        <form @submit.prevent="save" data-vv-scope="formStatus" autocomplete="off">
        <!-- message -->
        <message v-if="errors.any('formStatus') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
        </message>

        <div class="row">

          <!-- identitas -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header bg-white">
                <h5 class="card-title">Identitas Anggota CU</h5>
              </div>
              <div class="card-body">
                <identitas :itemData="selectedData.anggota_cu"></identitas>
              </div>
            </div>
          </div>

          <!-- bantuan solidaritas -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header bg-white">
                <h5 class="card-title">Klaim Jalinan</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-6">
                    <ul class="list list-unstyled mb-0">
                      <li>
                        <b>Jenis klaim:</b> <br/>
                        <label class="badge badge-warning ml-1 font-size-lg">
                          <check-value :value="selectedData.tipe"></check-value>
                        </label>
                      </li>
                      <li>
                        <b>Kategori penyakit/penyebab:</b> <br/>
                        <check-value :value="selectedData.kategori_penyakit"></check-value>
                      </li>
                      <li>
                        <b>Keterangan cacat/meninggal:</b> <br/>
                        <check-value :value="selectedData.keterangan"></check-value> 
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-6">
                    <ul class="list list-unstyled mb-0">
                      <li>
                        <b>Tanggal cacat/meninggal:</b> <br/>
                        <span v-html="$options.filters.date(selectedData.tanggal_mati)"></span>
                      </li>
                      <li>
                        <b>Tanggal buat/pengajuan:</b> <br/>
                        <span v-html="$options.filters.dateTime(selectedData.created_at)"></span>
                      </li>
                      <li>
                        <b>Tanggal ubah:</b> <br/>
                        <span v-html="$options.filters.dateTime(selectedData.updated_at)"></span>
                      </li>
                    </ul>
                  </div>

                  <div class="col-sm-12">
                    <hr/>
                  </div>
                  <!-- tunas -->
                  <div class="col-sm-6" v-if="selectedData.tipe != 'cacat'">
                    <div class="card card-body mb-1">
                      <div class="media">
                        <div class="media-body">
                          <h3 class="mb-0" ><check-value :value="selectedData.tunas_diajukan" valueType="currency"></check-value></h3>
                          <span class="text-uppercase">
                            nilai pengajuan bantuan solidaritas tunas
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- lintang -->
                  <div class="col-sm-6">
                    <div class="card card-body mb-1">
                      <div class="media">
                        <div class="media-body">
                          <h3 class="mb-0" ><check-value :value="selectedData.lintang_diajukan" valueType="currency"></check-value></h3>
                          <span class="text-uppercase">
                            nilai pengajuan bantuan solidaritas lintang
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <!-- data produk -->
          <div class="col-md-12">
            <!-- produk list -->
            <h5>Daftar Produk 
              <br/><small class="text-muted" v-if="itemData.length > 0">Tekan kotak dibawah untuk melihat transaksi masing-masing produk</small>
            </h5>
            <div class="row" v-if="itemDataStat == 'success' && itemData.length > 0">
              <div class="col-sm-6 col-xl-3 cursor-pointer" v-for="(item, index) in itemData" :key="index" @click.prevent="fetchProdukSaldo(item)">
                <div class="card card-body has-bg-image" :class="{'bg-success-400': item.produk_cu.tipe == 'Simpanan Pokok' || item.produk_cu.tipe == 'Simpanan Wajib' || item.produk_cu.tipe == 'Simpanan Non Saham',
                'bg-indigo-400': item.produk_cu.tipe == 'Pinjaman Kapitalisasi'|| item.produk_cu.tipe == 'Pinjaman Umum' || item.produk_cu.tipe == 'Pinjaman Produktif',
                'bg-warning-400' : item.produk_cu.tipe == 'SIMPANAN' || 'PINJAMAN' || 'SIMPANAN BERJANGKA'}" v-if="item.produk_cu">
                  <div class="media mb-2">
                    <div class="media-body">
                      <h6 class="font-weight-semibold mb-0"><check-value :value="item.saldo" valueType="currency"></check-value></h6>
                      <span class="opacity-75"><b>No. Rek:</b> {{ item.no_rek }}</span>
                      <br/>
                      <span class="opacity-75"><b>Usia Saat membuka:</b> 
                        <span v-if="item.tanggal" v-html="$options.filters.ageDiff(item.tanggal,selectedData.anggota_cu.tanggal_lahir)">
                        </span>
                        <span v-else>-</span>
                      </span>
                    </div>
                  </div>
                  <div class="progress bg-blue mb-2" style="height: 0.125rem;">
                    <div class="progress-bar bg-white" style="width: 100%">
                      <span class="sr-only">100% Complete</span>
                    </div>
                  </div>  
                  <div>
                    <b>Jenis:</b> 
                    <check-value :value="item.produk_cu.tipe" v-if="item.produk_cu"></check-value>
                    <span v-else>-</span> 
                    <br/>
                    <b>Nama:</b> 
                    <check-value :value="item.produk_cu.name" v-if="item.produk_cu"></check-value>
                    <span v-else>-</span>
                    <span v-if="item.produk_cu.tipe == 'Pinjaman Kapitalisasi'|| item.produk_cu.tipe == 'Pinjaman Umum' || item.produk_cu.tipe == 'Pinjaman Produktif'">
                      <br/>  
                      <b>Lama Pinjaman (Bulan):</b> 
                      <check-value :value="item.lama_pinjaman"></check-value>
                      <br/>  
                      <b>Lama Sisa Pinjaman (Bulan):</b> 
                      <check-value :value="item.lama_sisa_pinjaman"></check-value>
                    </span>
                    <span v-else>
                      <br/>
                      &nbsp;
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-body" v-else>
              Belum terdapat produk pada anggota ini...
            </div>

            <!-- table transaksi -->
            <div class="card" v-if="itemDataSaldoStat != ''">
            <div class="card-header bg-white">
                <h5 class="card-title">Tabel Transaksi {{ selectedProduk.produk_cu.name }} dengan no rek: {{ selectedProduk.no_rek  }}</h5>
              </div>

              <!-- table -->
              <data-table :items="itemDataSaldo.data" :columnData="columnDataSaldo" :itemDataStat="itemDataSaldoStat">
                <template slot="item-desktop" slot-scope="props">
                  <tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)" v-if="props.item">
                    <td>{{ props.index + 1 }}</td>
                    <td>
                      <check-value :value="props.item.saldo" valueType="currency"></check-value>
                    </td>
                    <td v-if="tipeProduk == 'pinjaman'">
                      <check-value :value="props.item.lama_sisa_pinjaman"></check-value>
                    </td>
                    <td>
                      <span v-if="props.item.tanggal" v-html="$options.filters.dateTime(props.item.created_at)"></span>
                      <span v-else>-</span>
                    </td>
                  </tr>
                </template>	
              </data-table>

              <!-- pagination -->
              <div class="card-footer">
                <div class="row pre-scrollable" v-if="itemDataSaldoStat != ''">

                  <!-- entri info -->
                  <div class="col-md-4 pt-2">
                      <!-- total entri note success-->
                      <!-- desktop -->
                      <div v-if="itemDataSaldoStat === 'success'" class="d-none d-sm-block">Menampilkan {{itemDataSaldo.from}} -
                        {{itemDataSaldo.to}} entri dari {{itemDataSaldo.total}} entri
                      </div>

                      <!-- mobile -->
                      <div v-if="itemDataSaldoStat === 'success'" class="d-block d-sm-none text-center">Menampilkan {{itemDataSaldo.from}} -
                        {{itemDataSaldo.to}} entri dari {{itemDataSaldo.total}} entri
                      </div>

                      <!-- total entri note loading -->
                      <div v-else>Menampilkan
                        <i class="icon-spinner2 spinner"></i> -
                        <i class="icon-spinner2 spinner"></i> entri dari
                        <i class="icon-spinner2 spinner"></i> entri
                      </div>

                  </div>

                  <!-- pagination -->
                  <!-- desktop -->
                  <div class="col-md-8 pt-2 text-right d-none d-sm-block">
                    <!-- pagination success-->
                    <div class="btn-group" v-if="itemDataSaldoStat === 'success'">
                      <button type="button" href="#" class="btn btn-light" :class="{'disabled' : !itemDataSaldo.prev_page_url}" @click.prevent="goToPageSaldo(1)">
                          <i class="icon-backward2"></i>
                      </button>
                      <button type="button" href="#" class="btn btn-light" :class="{'disabled' : !itemDataSaldo.prev_page_url}" @click.prevent="prevPageSaldo">
                          <i class="icon-arrow-left5"></i>
                      </button>
                      <button type="button" href="#" class="btn" v-for="(n, index) in pagesSaldo" :key="index" :class="{'btn-primary' : querySaldo.page == n, 'btn-light' : querySaldo.page != n}"  @click.prevent="goToPageSaldo(n)">
                          {{n}}
                      </button>
                      <button type="button" href="#" class="btn btn-light" :class="{'disabled' : !itemDataSaldo.next_page_url}" @click.prevent="nextPageSaldo">
                          <i class="icon-arrow-right5"></i>
                      </button>
                      <button type="button" href="#" class="btn btn-light" :class="{'disabled' : !itemDataSaldo.next_page_url}" @click.prevent="goToPageSaldo(itemDataSaldo.last_page)">
                          <i class="icon-forward3"></i>
                      </button>
                    </div>
                    
                    <!-- pagination loading-->
                    <div class="btn-group" v-else>
                      <button href="#" class="btn btn-light disabled">
                          <i class="icon-backward2"></i>
                      </button>
                      <button href="#" class="btn btn-light disabled">
                          <i class="icon-arrow-left5"></i>
                      </button>
                      <button href="#" class="btn btn-light disabled">
                          <i class="icon-spinner2 spinner"></i>
                      </button>
                      <button href="#" class="btn btn-light disabled">
                          <i class="icon-arrow-right5"></i>
                      </button>
                      <button href="#" class="btn btn-light disabled">
                          <i class="icon-forward3"></i>
                      </button>
                      
                    </div>
                  </div>

                  <!-- mobile -->
                  <div class="col-md-12 pt-2 text-center d-block d-sm-none">

                    <!-- pagination success-->
                    <div class="btn-group" v-if="itemDataSaldoStat === 'success'">
                      <button type="button" href="#" class="btn" v-for="(n, index) in pagesSaldo" :key="index" :class="{'btn-primary' : querySaldo.page == n, 'btn-light' : querySaldo.page != n}"  @click.prevent="goToPageSaldo(n)">
                          {{n}}
                      </button>
                    </div>

                    <br/>

                    <div class="btn-group pt-2" v-if="itemDataSaldoStat === 'success'">
                      <button type="button" href="#" class="btn btn-light" :class="{'disabled' : !itemDataSaldo.prev_page_url}" @click.prevent="goToPageSaldo(1)">
                          <i class="icon-backward2"></i>
                      </button>
                      <button type="button" href="#" class="btn btn-light" :class="{'disabled' : !itemDataSaldo.prev_page_url}" @click.prevent="prevPageSaldo">
                          <i class="icon-arrow-left5"></i>
                      </button>
                      <button type="button" href="#" class="btn btn-light" :class="{'disabled' : !itemDataSaldo.next_page_url}" @click.prevent="nextPageSaldo">
                          <i class="icon-arrow-right5"></i>
                      </button>
                      <button type="button" href="#" class="btn btn-light" :class="{'disabled' : !itemDataSaldo.next_page_url}" @click.prevent="goToPageSaldo(itemDataSaldo.last_page)">
                          <i class="icon-forward3"></i>
                      </button>
                    </div>
                    
                    <!-- pagination loading-->
                    <div class="btn-group" v-else>
                      <button href="#" class="btn btn-light disabled">
                          <i class="icon-backward2"></i>
                      </button>
                      <button href="#" class="btn btn-light disabled">
                          <i class="icon-arrow-left5"></i>
                      </button>
                      <button href="#" class="btn btn-light disabled">
                          <i class="icon-spinner2 spinner"></i>
                      </button>
                      <button href="#" class="btn btn-light disabled">
                          <i class="icon-arrow-right5"></i>
                      </button>
                      <button href="#" class="btn btn-light disabled">
                          <i class="icon-forward3"></i>
                      </button>
                      
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>

          <div class="col-md-12"><hr/></div>

          <!-- duplicate -->
          <div class="col-md-12">
           <div class="alert bg-info text-white alert-styled-left" v-if="messageData.id != selected.id && message">
              <span class="font-weight-semibold">{{ message }}</span>
            </div>

            <div class="alert bg-warning text-white alert-styled-left" v-if="message2">
              <span class="font-weight-semibold">{{ message2 }}</span>
            </div>
          </div>


          <template v-if="tipe == 'verifikasi' || tipe == 'lihat'">
            <div class="col-md-12">
              <h5>Informasi Pendukung:</h5>
            </div>
            <!-- data cu -->
            <div class="col-md-4">
              <div class="card card-body bg-blue-400" >
                <div class="media">
                  <div class="media-body">
                    <h3 class="mb-0" >{{'Anggota CU ' + selectedData.anggota_cu_cu.cu.name}}</h3>
                    <span>
                      {{ 'Nama: ' + selectedData.anggota_cu.name }} 
                      <br/>
                      {{ 'No. BA: ' + selectedData.anggota_cu_cu.no_ba }} 
                      <br/>
                      {{ 'Lama Menjadi Anggota: ' + selectedData.anggota_cu_cu.lama_menjadi_anggota  + ' bulan'}} 
                    </span>
                  </div>
                </div>
              </div> 
            </div>
            <!-- usia  masuk-->
            <div class="col-md-4">
              <div class="card card-body bg-teal-400" >
                <div class="media">
                  <div class="media-body">
                    <h3 class="mb-0" >Usia Masuk CU: 
                       {{ selectedData.usia_masuk_cu }} 
                    </h3>
                    <span>
                      Tanggal Masuk CU: <span v-if="selectedData.anggota_cu_cu.tanggal_masuk" v-html="$options.filters.date(selectedData.anggota_cu_cu.tanggal_masuk)"></span> 
                    </span>
                  </div>   
                </div>
              </div>
            </div>
            <!-- usia cacat/mati-->
            <div class="col-md-4">
              <div class="card card-body bg-purple-400" >
                <div class="media">
                  <div class="media-body">
                    <div v-if="selectedData.tipe == 'CACAT'">
                      <h3 class="mb-0" >Usia Cacat: 
                         {{ selectedData.usia_cacat }} 
                      </h3>
                      <span>
                        Tanggal Cacat: <span v-if="selectedData.tanggal_mati" v-html="$options.filters.date(selectedData.tanggal_mati)"></span> 
                      </span>
                    </div>
                    <div v-else-if="selectedData.tipe == 'MENINGGAL'">
                      <h3 class="mb-0" >Usia Meninggal: 
                         {{ selectedData.usia_meninggal }} 
                      </h3>
                      <span>
                        Tanggal Meninggal: <span v-if="selectedData.tanggal_mati" v-html="$options.filters.date(selectedData.tanggal_mati)"></span> 
                      </span>
                    </div>
                  </div>   
                </div>
              </div>
            </div>
          </template>

          <template v-else>
            <!-- data cu -->
            <div class="col-md-3">

              <h5>Informasi Pendukung:</h5>
              <!-- cu -->
              <div class="card card-body bg-blue-400" >
                <div class="media">
                  <div class="media-body">
                    <h3 class="mb-0" >{{'Anggota CU ' + selectedData.anggota_cu_cu.cu.name}}</h3>
                    <span>
                      {{ 'Nama: ' + selectedData.anggota_cu.name }} 
                      <br/>
                      {{ 'No. BA: ' + selectedData.anggota_cu_cu.no_ba }} 
                      <br/>
                      {{ 'Lama Menjadi Anggota: ' + selectedData.anggota_cu_cu.lama_menjadi_anggota  + ' bulan'}} 
                    </span>
                  </div>
                </div>
              </div> 
              <!-- usia masuk-->
              <div class="card card-body bg-teal-400" >
                <div class="media">
                  <div class="media-body">
                    <h3 class="mb-0" >Usia Masuk CU: 
                      {{ selectedData.usia_masuk_cu }} 
                    </h3>
                    <span>
                      Tanggal Masuk CU: <span v-if="selectedData.anggota_cu_cu.tanggal_masuk" v-html="$options.filters.date(selectedData.anggota_cu_cu.tanggal_masuk)"></span> 
                    </span>
                  </div>   
                </div>
              </div>
              <!-- usia cacat/mati-->
              <div class="card card-body bg-purple-400" >
                <div class="media">
                  <div class="media-body">
                    <div v-if="selectedData.tipe == 'CACAT'">
                      <h3 class="mb-0" >Usia Cacat:
                        {{ selectedData.usia_cacat }} 
                      </h3>
                      <span>
                        Tanggal Cacat: <span v-if="selectedData.anggota_cu.tanggal_cacat" v-html="$options.filters.date(selectedData.anggota_cu.tanggal_cacat)"></span> 
                      </span>
                    </div>
                    <div v-else-if="selectedData.tipe == 'MENINGGAL'">
                      <h3 class="mb-0" >Usia Meninggal: 
                        {{ selectedData.usia_meninggal }} 
                      </h3>
                      <span>
                        Tanggal Meninggal: <span v-if="selectedData.anggota_cu.tanggal_meninggal" v-html="$options.filters.date(selectedData.anggota_cu.tanggal_meninggal)"></span> 
                      </span>
                    </div>
                  </div>   
                </div>
              </div>
            </div>

            <!-- form analisis -->
            <div class="col-md-9">
              <div class="row">
                <!-- status -->
                <div class="col-md-12" v-if="tipe == 'analisis'">
                  
                  <div class="form-group">

                    <!-- title -->
                    <h5>Status Bantuan Solidaritas :</h5>

                    <!-- select -->
                    <select name="status" data-width="100%" class="form-control" v-model="formStatus.status" @change="changeStatus($event.target.value)">
                      <option disabled value="">Silahkan pilih status klaim</option>
                      <option value="1">Menunggu</option>
                      <option value="2">Dokumen Tidak Lengkap</option>
                      <option value="3">Ditolak</option>
                      <option value="31">Ditolak (Salah Memilih / Tidak Meninggal atau Cacat)</option>
                      <option value="4">Disetujui</option>
                    </select>

                  </div>
                </div>
                
                <!-- tanggal pencairan -->
                <div class="col-md-12" v-if="formStatus.status == '4' || tipe == 'selesai'">
                  <div class="form-group" :class="{'has-error' : errors.has('formStatus.tanggal_pencairan')}">

                    <!-- title -->
                    <h5 :class="{ 'text-danger' : errors.has('formStatus.tanggal_pencairan')}">
                      <i class="icon-cross2" v-if="errors.has('formStatus.tanggal_pencairan')"></i>
                      Tgl. Pencairan:</h5>

                    <!-- input -->
                    <date-picker @dateSelected="formStatus.tanggal_pencairan = $event" :defaultDate="formStatus.tanggal_pencairan" v-show="tipe != 'selesai'"></date-picker>	
                    <input v-model="formStatus.tanggal_pencairan"  :readonly="tipe == 'selesai'" v-show="tipe == selesai" v-validate="'required'" data-vv-as="Tgl. pencairan"/>

                    <!-- error message -->
                    <small class="text-muted text-danger" v-if="errors.has('formStatus.tanggal_pencairan')">
                      <i class="icon-arrow-small-right"></i> {{ errors.first('formStatus.tanggal_pencairan') }}
                    </small>
                    <small class="text-muted" v-else>&nbsp;</small>	

                  </div>
                </div>

                <!-- TUNAS -->
                <div class="col-md-6" v-if="(formStatus.status == '4' && selectedData.tipe != 'cacat') || tipe == 'selesai'">
                
                  <div class="form-group" :class="{'has-error' : errors.has('formStatus.tunas_disetujui')}">

                    <!-- title -->
                    <h5 :class="{ 'text-danger' : errors.has('formStatus.tunas_disetujui')}">
                  <i class="icon-cross2" v-if="errors.has('formStatus.tunas_disetujui')"></i> Nilai pengajuan bantuan solidaritas TUNAS yang disetujui</h5>

                    <div class="card card-body" :class="{'bg-blue-400': selisihTunas == 0, 'bg-danger-400': selisihTunas < 0, 'bg-brown-400': selisihTunas > 0}">
                      <div class="media">
                        <div class="media-body">
                          <h3 class="mb-0">
                            <i v-if="selisihTunas > 0" class="icon-plus3"></i>
                            <check-value :value="selisihTunas" valueType="currency"></check-value> 	
                          </h3>
                          <span class="text-uppercase font-size-xs">Selisih Tunas yang di bantuan solidaritas dengan yang disetujui</span>
                        </div>
                      </div>
                    </div>

                    <!-- text -->
                    <cleave 
                      name="tunas_disetujui"
                      v-model="formStatus.tunas_disetujui" 
                      class="form-control" 
                      :options="cleaveOption.numeric"
                      :readonly="tipe == 'selesai'"
                      placeholder="Silahkan masukkan jumlah nilai pengajuan bantuan solidaritas TUNAS yang disetujui"
                      v-validate="'required'" data-vv-as="Nilai pengajuan bantuan solidaritas TUNAS yang disetujui"></cleave>

                    <!-- error message -->
                    <small class="text-muted text-danger" v-if="errors.has('formStatus.tunas_disetujui')">
                      <i class="icon-arrow-small-right"></i> {{ errors.first('formStatus.tunas_disetujui') }}
                    </small>
                    <small class="text-muted" v-else>&nbsp;</small>	
                  </div>
                </div>

                <!-- LINTANG -->
                <div class="col-md-6" v-if="formStatus.status == '4' || tipe == 'selesai'">
                  

                  <div class="form-group" :class="{'has-error' : errors.has('formStatus.lintang_disetujui')}">
                    <!-- title -->
                    <h5 :class="{ 'text-danger' : errors.has('formStatus.lintang_disetujui')}">
                    <i class="icon-cross2" v-if="errors.has('formStatus.lintang_disetujui')"></i>Nilai pengajuan bantuan solidaritas LINTANG yang disetujui</h5>

                    <div class="card card-body" :class="{'bg-blue-400': selisihLintang == 0, 'bg-danger-400': selisihLintang < 0, 'bg-brown-400': selisihLintang > 0}">
                      <div class="media">
                        <div class="media-body">
                          <h3 class="mb-0">
                            <i v-if="selisihLintang > 0" class="icon-plus3"></i>
                            <check-value :value="selisihLintang" valueType="currency"></check-value> 	
                          </h3>
                          <span class="text-uppercase font-size-xs">Selisih Lintang yang di bantuan solidaritas dengan yang disetujui</span>
                        </div>
                      </div>
                    </div>

                    <!-- text -->
                    <cleave 
                      name="lintang_disetujui"
                      v-model="formStatus.lintang_disetujui" 
                      class="form-control" 
                      :options="cleaveOption.numeric"
                      :readonly="tipe == 'selesai'"
                      placeholder="Silahkan masukkan jumlah nilai pengajuan bantuan solidaritas LINTANG yang disetujui"
                      v-validate="'required'" data-vv-as="Nilai pengajuan bantuan solidaritas LINTANG yang disetujui"></cleave>

                    <!-- error message -->
                    <small class="text-muted text-danger" v-if="errors.has('formStatus.lintang_disetujui')">
                      <i class="icon-arrow-small-right"></i> {{ errors.first('formStatus.lintang_disetujui') }}
                    </small>
                    <small class="text-muted" v-else>&nbsp;</small>		
                  </div>
                </div>

                <!-- keterangan -->
                <div class="col-md-12"  v-if="formStatus.status != 0"> 
                  <div class="form-group">

                    <!-- title -->
                    <h5>
                      Keterangan:
                    </h5>

                    <!-- textarea -->
                    <textarea rows="3" 
                    type="text" 
                    name="keterangan_klaim" 
                    class="form-control" 
                    :readonly="tipe == 'selesai'"
                    placeholder="Silahkan masukkan keterangan " v-model="formStatus.keterangan_klaim"></textarea>
                  </div>

                </div>

                <!-- nomor surat -->
                <div class="col-md-6" v-if="formStatus.status != 0">
                  <div class="form-group">

                    <!-- title -->
                    <h5>
                      Nomor Surat:
                    </h5>

                    <!-- input -->
                    <input type="text" name="surat_nomor" class="form-control" placeholder="Silahkan masukkan nomor surat" v-model="formStatus.surat_nomor" v-if="currentUser.id_cu == 0">

                    <input type="text" name="surat_nomor" class="form-control" placeholder="Silahkan masukkan nomor surat" v-model="formStatus.surat_nomor" v-else readonly>
                  </div>
                </div>

                <!-- tanggal surat -->
                <div class="col-md-6" v-if="formStatus.status != 0">
                  <div class="form-group">

                    <!-- title -->
                    <h5>
                      Tgl. Surat:</h5>

                    <!-- input -->
                    <date-picker @dateSelected="formStatus.surat_tanggal = $event" :defaultDate="formStatus.surat_tanggal" v-if="currentUser.id_cu == 0"></date-picker>	

                    <input type="text" name="surat_tanggal" class="form-control" placeholder="Silahkan masukkan tanggal surat" v-model="formStatus.surat_tanggal" v-else readonly>
                  </div>
                </div>

              </div>
            </div>
          </template>

        </div>

        <!-- info -->
        <div v-if="tipe == 'verifikasi'">
          <div class="alert bg-info alert-styled-left">
            <h6>Dengan menekan tombol verifikasi dibawah maka anda telah melakukan pemeriksaan dan menyetujui pengajuan bantuan solidaritas jalinan atas nama <b><u>{{ selectedData.anggota_cu.name }}</u></b> dan segala informasi yang ada dan dikirmkan adalah benar sesuai dengan peraturan.</h6>
          </div>
        </div>
        <div v-else-if="tipe == 'selesai'">
          <div class="alert bg-info alert-styled-left">
            <h6>Dengan menekan tombol selesai dibawah maka anda telah melakukan penyerahan bantuan solidaritas jalinan atas nama <b><u>{{ selectedData.anggota_cu.name }}</u></b> kepada ahli waris atau yang diwakilkan dan segala informasi yang ada dan dikirmkan adalah benar sesuai dengan peraturan.</h6>
          </div>
        </div>
        <span v-else-if="tipe == 'lihat'"></span>
        <div v-else>
          <div class="alert bg-info alert-styled-left">
            <h6>Pastikan data yang dimasukkan sudah benar sebelum menyimpan.</h6>
          </div>
        </div>

        <!-- tombol desktop-->
        <div class="text-center d-none d-md-block">
          <button class="btn btn-light" @click.prevent="tutup">
            <i class="icon-cross"></i> Tutup</button>

          <button type="submit" class="btn btn-primary" v-if="tipe != 'lihat'">
            <span v-if="tipe == 'selesai'">
              <span v-if="formStatus.status == 5">
                <i class="icon-checkmark4"></i> Selesai
              </span>
              <span v-else>
                <i class="icon-blocked"></i> Batal Selesai
              </span>
            </span>
            <span v-else-if="tipe == 'verifikasi'">
              <i class="icon-file-check"></i> Verifikasi
            </span>
            <span v-else>
              <i class="icon-floppy-disk"></i> Simpan
            </span>
          </button>
        </div>  

        <!-- tombol mobile-->
        <div class="d-block d-md-none">
          <button type="submit" class="btn btn-primary btn-block pb-2" v-if="tipe != 'lihat'">
            <span v-if="tipe == 'selesai'">
              <span v-if="formStatus.status == 4">
                <i class="icon-checkmark4"></i> Selesai
              </span>
              <span v-else>
                <i class="icon-blocked"></i> Batal Selesai
              </span>
            </span>
            <span v-else-if="tipe == 'verifikasi'">
              <i class="icon-file-check"></i> Verifikasi
            </span>
            <span v-else>
              <i class="icon-floppy-disk"></i> Simpan
            </span>
          </button>

          <button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
            <i class="icon-cross"></i> Tutup</button>
        </div> 

        </form>
			</div>
    </transition>
    <!-- pengajuan -->

    <!-- verifikator -->
    <transition enter-active-class="animated fadeIn" mode="out-in">
      <div v-show="tabName == 'verifikator'" v-if="isVerifikator">

        <div class="row">
          <!-- veriifkasi pengurus -->
          <div class="col-md-4">
            <verifikator 
              :isSingle="true"
              :title="'Verifikator Pengurus'" 
              :itemData="modelVeriPengurus" 
              :itemDataStat="modelVeriStat"></verifikator>
            <verifikator 
              :isSingle="false"
              :title="'Verifikator yang dipilih'" 
              :itemData="modelVeriPilihPengurus" 
              :itemDataStat="modelVeriPilihPengurusStat"></verifikator>  
          </div>

          <!-- veriifkasi pengawas -->
          <div class="col-md-4">
            <verifikator 
              :isSingle="true"
              :title="'Verifikator Pengawas'" 
              :itemData="modelVeriPengawas" 
              :itemDataStat="modelVeriStat"></verifikator>
            <verifikator 
              :isSingle="false"
              :title="'Verifikator yang dipilih'" 
              :itemData="modelVeriPilihPengawas"
              :itemDataStat="modelVeriPilihPengawasStat"></verifikator>  
          </div>

          <!-- veriifkasi manajemen -->
          <div class="col-md-4">
            <verifikator 
              :isSingle="true"
              :title="'Verifikator Manajemen'" 
              :itemData="modelVeriManajemen" 
              :itemDataStat="modelVeriStat"></verifikator>
            <verifikator 
              :isSingle="false"
              :title="'Verifikator yang dipilih'" 
              :itemData="modelVeriPilihManajemen"
              :itemDataStat="modelVeriPilihManajemenStat"></verifikator>  
          </div>

        </div>

        <!-- tombol desktop-->
        <div class="text-center d-none d-md-block">
          <button class="btn btn-light" @click.prevent="tutup">
            <i class="icon-cross"></i> Tutup</button>
        </div>  

        <!-- tombol mobile-->
        <div class="d-block d-md-none">
          <button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
            <i class="icon-cross"></i> Tutup</button>
        </div> 

      </div>
    </transition>
    <!-- verifikator -->

    <!-- dokumen -->
    <transition enter-active-class="animated fadeIn" mode="out-in">
      <div v-show="tabName == 'dokumen'" v-if="isDokumen">

        <div class="nav-tabs-responsive mb-3">
          <ul class="nav nav-tabs nav-tabs-solid bg-light">
            <li class="nav-item" v-show="selected.dokumen_meninggal">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'meninggal'}" @click.prevent="changeTabDokumen('meninggal')"><i class="icon-person mr-2"></i> 
                Keterangan Meninggal Dunia
              </a>
            </li>
            <li class="nav-item" v-show="selected.dokumen_ktp">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'ktp'}" @click.prevent="changeTabDokumen('ktp')"><i class="icon-vcard mr-2"></i> 
                Identitas Diri 
              </a>
            </li>
            <li class="nav-item" v-show="selected.spma_1">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'spma_1'}" @click.prevent="changeTabDokumen('spma_1')"><i class="icon-magazine mr-2"></i> 
                Surat Permohonan Jadi Anggota 1
              </a>
            </li>
            <li class="nav-item" v-show="selected.spma_2">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'spma_2'}" @click.prevent="changeTabDokumen('spma_2')"><i class="icon-magazine mr-2"></i> 
                Surat Permohonan Jadi Anggota 2
              </a>
            </li>
            <li class="nav-item" v-show="selected.buku_simpanan_1">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'buku_simpanan_1'}" @click.prevent="changeTabDokumen('buku_simpanan_1')"><i class="icon-credit-card mr-2"></i> 
                Buku Simpanan 1
              </a>
            </li>
            <li class="nav-item" v-show="selected.buku_simpanan_2">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'buku_simpanan_2'}" @click.prevent="changeTabDokumen('buku_simpanan_2')"><i class="icon-credit-card mr-2"></i> 
                Buku Simpanan 2
              </a>
            </li>
            <li class="nav-item" v-show="selected.buku_simpanan_3">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'buku_simpanan_3'}" @click.prevent="changeTabDokumen('buku_simpanan_3')"><i class="icon-credit-card mr-2"></i> 
                Buku Simpanan 3
              </a>
            </li>
            <li class="nav-item" v-show="selected.buku_simpanan_4">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'buku_simpanan_4'}" @click.prevent="changeTabDokumen('buku_simpanan_4')"><i class="icon-credit-card mr-2"></i> 
                Buku Simpanan 4
              </a>
            </li>
            <li class="nav-item" v-show="selected.buku_simpanan_5">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'buku_simpanan_5'}" @click.prevent="changeTabDokumen('buku_simpanan_5')"><i class="icon-credit-card mr-2"></i> 
                Buku Simpanan 5
              </a>
            </li>
            <li class="nav-item" v-show="selected.buku_pinjaman_1">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'buku_pinjaman_1'}" @click.prevent="changeTabDokumen('buku_pinjaman_1')"><i class="icon-credit-card2 mr-2"></i> 
                Buku Pinjaman 1
              </a>
            </li>
            <li class="nav-item" v-show="selected.buku_pinjaman_2">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'buku_pinjaman_2'}" @click.prevent="changeTabDokumen('buku_pinjaman_2')"><i class="icon-credit-card2 mr-2"></i> 
                Buku Pinjaman 2
              </a>
            </li>
            <li class="nav-item" v-show="selected.buku_pinjaman_3">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'buku_pinjaman_3'}" @click.prevent="changeTabDokumen('buku_pinjaman_3')"><i class="icon-credit-card2 mr-2"></i> 
                Buku Pinjaman 3
              </a>
            </li>
            <li class="nav-item" v-show="selected.dokumen_pinjaman_1">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'pinjaman_1'}" @click.prevent="changeTabDokumen('pinjaman_1')"><i class="icon-clipboard3 mr-2"></i>
                Pinjaman 1
              </a>
            </li>
            <li class="nav-item" v-show="selected.dokumen_pinjaman_2">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'pinjaman_2'}" @click.prevent="changeTabDokumen('pinjaman_2')"><i class="icon-clipboard3 mr-2"></i>
                Pinjaman 2
              </a>
            </li>
            <li class="nav-item" v-show="selected.dokumen_pinjaman_3">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'pinjaman_3'}" @click.prevent="changeTabDokumen('pinjaman_3')"><i class="icon-clipboard3 mr-2"></i>
                Pinjaman 3
              </a>
            </li>
            <li class="nav-item" v-show="selected.dokumen_pinjaman_4">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'pinjaman_4'}" @click.prevent="changeTabDokumen('pinjaman_4')"><i class="icon-clipboard3 mr-2"></i>
                Pinjaman 4
              </a>
            </li>
            <li class="nav-item" v-show="selected.dokumen_pinjaman_5">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'pinjaman_5'}" @click.prevent="changeTabDokumen('pinjaman_5')"><i class="icon-clipboard3 mr-2"></i>
                Pinjaman 5
              </a>
            </li>
            <li class="nav-item" v-show="selected.dokumen_pinjaman_6">
              <a href="#" class="nav-link" :class="{'active' : tabNameDokumen == 'pinjaman_6'}" @click.prevent="changeTabDokumen('pinjaman_6')"><i class="icon-clipboard3 mr-2"></i>
                Pinjaman 6
              </a>
            </li>
          </ul>
        </div>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == ''">
            <div class="card card-body">
              <h5>Silahkan memilih dokumen yang ingin ditampilkan dengan menekan tombol diatas. Jika tidak terdapat tombol maka berarti bantuan solidaritas ini tidak memiliki dokumen yang bisa dilihat.</h5>
            </div>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'meninggal'">
            <dokumen :image="selected.dokumen_meninggal" :name="'dokumen_meninggal'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'ktp'">
            <dokumen :image="selected.dokumen_ktp" :name="'dokumen_ktp'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'spma_1'">
            <dokumen :image="selected.spma_1" :name="'spma_1'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'spma_2'">
            <dokumen :image="selected.spma_2" :name="'spma_2'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'buku_simpanan_1'">
            <dokumen :image="selected.buku_simpanan_1" :name="'buku_simpanan_1'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'buku_simpanan_2'">
            <dokumen :image="selected.buku_simpanan_2" :name="'buku_simpanan_2'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'buku_simpanan_3'">
            <dokumen :image="selected.buku_simpanan_3" :name="'buku_simpanan_3'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'buku_simpanan_4'">
            <dokumen :image="selected.buku_simpanan_4" :name="'buku_simpanan_4'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'buku_simpanan_5'">
            <dokumen :image="selected.buku_simpanan_5" :name="'buku_simpanan_5'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'buku_pinjaman_1'">
            <dokumen :image="selected.buku_pinjaman_1" :name="'buku_pinjaman_1'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'buku_pinjaman_2'">
            <dokumen :image="selected.buku_pinjaman_2" :name="'buku_pinjaman_2'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'buku_pinjaman_3'">
            <dokumen :image="selected.buku_pinjaman_3" :name="'buku_pinjaman_3'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'pinjaman_1'">
            <dokumen :image="selected.dokumen_pinjaman_1" :name="'dokumen_pinjaman_1'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'pinjaman_2'">
            <dokumen :image="selected.dokumen_pinjaman_2" :name="'dokumen_pinjaman_2'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'pinjaman_3'">
            <dokumen :image="selected.dokumen_pinjaman_3" :name="'dokumen_pinjaman_3'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'pinjaman_4'">
            <dokumen :image="selected.dokumen_pinjaman_4" :name="'dokumen_pinjaman_4'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'pinjaman_5'">
            <dokumen :image="selected.dokumen_pinjaman_5" :name="'dokumen_pinjaman_5'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabNameDokumen == 'pinjaman_6'">
            <dokumen :image="selected.dokumen_pinjaman_6" :name="'dokumen_pinjaman_6'" @tutup="tutup"></dokumen>
          </div>    
        </transition>

      </div>
    </transition>
    <!-- dokumen -->

    <!-- history -->
    <transition enter-active-class="animated fadeIn" mode="out-in">
      <div v-show="tabName == 'history'" v-if="isHistory">
        <riwayat-klaim :itemData="history" :itemDataStat="historyStat"></riwayat-klaim>
      </div>
    </transition>
    <!-- history -->

	</div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Cleave from 'vue-cleave-component';
	import message from "../../components/message.vue";
  import formInfo from "../../components/formInfo.vue";
  import identitas from "../../components/identitasAnggotaCu.vue";
  import checkValue from "../../components/checkValue.vue";
  import dataTable from '../../components/datatable.vue';
  import infoIcon from "../../components/infoIcon.vue";
  import verifikator from "./verifikator.vue";
  import dokumen from "./dokumen.vue";
  import riwayatKlaim from "./riwayatKlaim.vue";
  import DatePicker from "../../components/datePicker.vue";

	export default {
		props: ['kelas','selected','tipe'],
		components: {
			formInfo,
      message,
      identitas,
      checkValue,
      Cleave, 
      dataTable,
      infoIcon,
      verifikator,
      dokumen,
      DatePicker,
      riwayatKlaim
		},
		data() {
			return {
        title: '',
        tabName: 'pengajuan',
        tabNameDokumen: '',
        isVerifikator: false,
        isDokumen: false,
        isHistory: false,
        selectedData: {},
				formStatus: {
          cu_id: '',
					status: '',
          keterangan_klaim: '',
          tunas_disetujui: '',
          lintang_disetujui: '',
          tanggal_pencairan: '',
          surat_tanggal: '',
          surat_nomor: ''
        },
        cleaveOption: {
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
          },
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
					},
        },
        selectedItem: {},
        selectedProduk: {},
        pagesSaldo: [],
        querySaldo: {
          order_column: "created_at",
          order_direction: "desc",
          filter_match: "and",
          limit: 10,
          page: 1
        },
        tipeProduk: '',
        columnDataSaldo:[],
        penjelasanStatus: '',
				submited: false,
			}
		},
		created() {
      this.$store.dispatch('anggotaCu/resetDataProdukSaldo'); 
      this.selectedData = Object.assign({}, this.selected);
			this.formStatus.status = this.selectedData.status_klaim;
			this.formStatus.keterangan_klaim = this.selectedData.keterangan_klaim;
			this.formStatus.tunas_disetujui = this.selectedData.tunas_disetujui;
      this.formStatus.lintang_disetujui = this.selectedData.lintang_disetujui;
      this.formStatus.tanggal_pencairan = this.selectedData.tanggal_pencairan;
      this.formStatus.surat_tanggal = this.selectedData.surat_tanggal;
      this.formStatus.surat_nomor = this.selectedData.surat_nomor;
      this.formStatus.cu_id = this.selectedData.anggota_cu_cu.cu_id;

      this.$store.dispatch('anggotaCu/indexProduk',[this.selectedData.anggota_cu_id, this.selectedData.anggota_cu_cu.cu_id]); 
      this.$store.dispatch(this.kelas + '/getDuplicate',[this.selectedData.anggota_cu.name,this.selectedData.anggota_cu.tanggal_lahir, this.selectedData.tipe]);
      this.$store.dispatch(this.kelas + '/getKlaimLama',[this.selectedData.anggota_cu.nik.trim(),this.selectedData.anggota_cu_cu_id]);
		},
		watch: {
      itemDataSaldoStat(value){
        if(value == 'success'){
          this.calculatePagination();
        }
      }
		},
		methods: {
      selectedRow(item) {
        this.selectedItem = item;
      },
      changeTab(value) {
				this.tabName = value;
				if (value == 'verifikator' && !this.isVerifikator) {
          this.isVerifikator = true
          this.fetchVerifikator();
				}
				if (value == 'dokumen' && !this.isDokumen) {
          this.isDokumen = true
        }
				if (value == 'history' && !this.isHistory) {
          this.isHistory = true
           this.$store.dispatch('jalinanKlaim/getHistory',this.selectedData.id);
        }
      },
      changeTabDokumen(value) {
				this.tabNameDokumen = value;
      },
      changeStatus(value){
        if(value == '31'){
          if(this.formStatus.keterangan_klaim == null || this.formStatus.keterangan_klaim == ''){
            this.formStatus.keterangan_klaim = 'Ditolak karena salah memilih / tidak meninggal atau cacat';
          }
        }else{
          if(this.formStatus.keterangan_klaim == 'Ditolak karena salah memilih / tidak meninggal atau cacat'){
            this.formStatus.keterangan_klaim = '';
          }
        }
      },
      fetchVerifikator(){
        // get verifikator yang dipilih
        this.$store.dispatch('user/indexCuPermission',this.selectedData.anggota_cu_cu.cu_id);

        // get verifikator
        this.$store.dispatch('jalinanKlaim/getVerifikator',[
          this.selectedData.verifikasi_pengurus,this.selectedData.verifikasi_pengawas,this.selectedData.verifikasi_manajemen
        ]);
      },
      fetchProdukSaldo(value){
        this.selectedProduk = value;
        if(value.produk_cu.tipe == 'Simpanan Pokok' || value.produk_cu.tipe == 'Simpanan Wajib' || value.produk_cu.tipe == 'Simpanan Non Saham'){
          this.tipeProduk = 'simpanan';
          this.columnDataSaldo = [
						{ title: 'No.' },
						{ title: 'Nominal' },
						{ title: 'Tgl. Transaksi' },
					]
        }else{
          this.tipeProduk = 'pinjaman';
          this.columnDataSaldo = [
						{ title: 'No.' },
						{ title: 'Nominal' },
						{ title: 'Bulan Angsuran' },
						{ title: 'Tgl. Transaksi' },
					]
        }
        this.$store.dispatch('anggotaCu/indexProdukSaldo',[this.querySaldo, value.id]);
      },
      calculatePagination() {
        var i = 0;
        var startPage = 0;
        var endPage = 0;
        var diffPage = 0;

        startPage = this.querySaldo.page < 3 ? 1 : this.querySaldo.page - 1;
        endPage = 4 + startPage;
        endPage = this.itemDataSaldo.last_page < endPage ? this.itemDataSaldo.last_page : endPage;
        diffPage = startPage - endPage + 4;
        startPage -= startPage - diffPage > 0 ? diffPage : 0;
        this.pagesSaldo.length = 0;

        for (i = startPage; i <= endPage; i++) {
          this.pagesSaldo.push(i);
        }
      },
      prevPageSaldo() {
        if (this.itemDataSaldo.prev_page_url) {
          this.querySaldo.page = Number(this.querySaldo.page) - 1;
          this.fetchProdukSaldo(this.selectedProduk);
        }
      },
      goToPageSaldo(value) {
        if (this.querySaldo.page != value) {
          this.querySaldo.page = value;
          this.fetchProdukSaldo(this.selectedProduk);
        }
      },
      nextPageSaldo() {
        if (this.itemDataSaldo.next_page_url) {
          this.querySaldo.page = Number(this.querySaldo.page) + 1;
          this.fetchProdukSaldo(this.selectedProduk);
        }
      },
      save(){
        if(this.formStatus != '1'){
          this.tunas_disetujui = '';
          this.lintang_disetujui = '';
        }

        if(this.formStatus != '2' && this.formStatus != '3'){
          this.keterangan_klaim = '';
        }

        if(this.tipe == 'selesai'){
          this.$store.dispatch(this.kelas + "/updateSelesai", this.selected.id);
        }else if(this.tipe == 'verifikasi'){
          this.$store.dispatch(this.kelas + "/updateVerifikasi", [this.selected.id, this.currentUser]);
        }else{
          this.$validator.validateAll('formStatus').then((result) => {
            if (result) {
              this.$store.dispatch(this.kelas + '/updateStatus', [this.selected.id, this.formStatus]);
            }else{
              this.submited = true;
            }
          });
        }
      },
			tutup() {
				this.$emit('tutup');
			}
		},
		computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
      }),
      ...mapGetters('anggotaCu',{
				itemData: 'dataProduk',
				itemDataSaldo: 'dataProdukSaldo',
				itemDataStat: 'dataProdukStat',
				itemDataSaldoStat: 'dataProdukSaldoStat',
      }),
      ...mapGetters('user', {
				modelVeriPilihPengurus: "dataS1",
				modelVeriPilihPengawas: "dataS2",
				modelVeriPilihManajemen: "dataS3",
        modelVeriPilihPengurusStat: "dataStatS1",
        modelVeriPilihPengawasStat: "dataStatS2",
        modelVeriPilihManajemenStat: "dataStatS3",
      }),
      ...mapGetters('jalinanKlaim', {
        messageData: 'data',
        messageDataStat: 'dataStat',
        message: 'message',
				messageStat: 'messageStat',
        message2: 'message2',
				messageStat2: 'messageStat2',
        history: "history",
        historyStat: "historyStat",
				modelVeriPengurus: "dataVeri1",
				modelVeriPengawas: "dataVeri2",
				modelVeriManajemen: "dataVeri3",
        modelVeriStat: "dataStatVeri",
      }),
      selisihTunas: function () {
        // `this` points to the vm instance
        return this.formStatus.tunas_disetujui - this.selectedData.tunas_diajukan
      },
      selisihLintang: function () {
        // `this` points to the vm instance
        return this.formStatus.lintang_disetujui - this.selectedData.lintang_diajukan
      },
      usiaMasukCU: function () {
        // `this` points to the vm instance
        return this.formStatus.lintang_disetujui - this.selectedData.lintang_diajukan
      }
		}
	}
</script>