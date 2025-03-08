<template>
  <div>
    <!-- page-header -->
    <page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title"
      :level2Route="kelas" @level2Back="back()"></page-header>

    <!-- content -->
    <div class="page-content pt-0">
      <div class="content-wrapper">
        <div class="content">
          <!-- message -->
          <message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
          </message>

          <form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">
            <div class="card card-body">
              <div class="row">
                <!-- cu -->
                <div class="col-md-6" v-if="currentUser.id_cu == 0">
                  <div class="form-group" :class="{ 'has-error': errors.has('form.id_cu') }">
                    <!-- title -->
                    <h5 :class="{ 'text-danger': errors.has('form.id_cu') }">
                      <i class="icon-cross2" v-if="errors.has('form.id_cu')"></i>
                      CU:
                      <wajib-badge></wajib-badge>
                    </h5>

                    <!-- select -->
                    <select class="form-control" name="id_cu" v-model="form.id_cu" data-width="100%"
                      v-validate="'required'" data-vv-as="CU" @change="changeCU($event.target.value)"
                      :disabled="modelCU.length == 0 || $route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat' || $route.meta.mode == 'edit'">
                      <option disabled value="0">Silahkan pilih CU</option>
                      <option v-for="(cu, index) in modelCU" :value="cu.id" :key="index">{{ cu.name }}</option>
                    </select>

                    <!-- error message -->
                    <small class="text-muted text-danger" v-if="errors.has('form.id_cu')">
                      <i class="icon-arrow-small-right"></i>
                      {{ errors.first('form.id_cu') }}
                    </small>
                    <small class="text-muted" v-else>&nbsp;</small>
                  </div>
                </div>

                <!-- periode -->
                <div :class="{ 'col-md-6': currentUser.id_cu == 0, 'col-md-12': currentUser.id_cu != 0 }">
                  <div class="form-group" :class="{ 'has-error': errors.has('form.periode') }">
                    <!-- title -->
                    <h5 :class="{ 'text-danger': errors.has('form.periode') }">
                      <i class="icon-cross2" v-if="errors.has('form.periode')"></i>
                      Periode:
                      <wajib-badge></wajib-badge>
                      <info-icon :message="'Periode diambil dari laporan perkembangan CU'"></info-icon>
                    </h5>

                    <!-- select -->
                    <select class="form-control" name="periode" v-model="form.id_laporan_cu" data-width="100%"
                      v-validate="'required'" data-vv-as="CU" @change="changePeriode($event.target.value)"
                      :disabled="modelPeriode.length == 0 || $route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat' || $route.meta.mode == 'edit'">
                      <option disabled value>
                        <span v-if="modelPeriodeStat == 'loading'">Mohon tunggu...</span>
                        <span v-else>Silahkan pilih periode</span>
                      </option>
                      <option v-for="(periode, index) in modelPeriode" :value="periode.id" :key="index">
                        {{ periode.periode }}</option>
                    </select>

                    <!-- error message -->
                    <small class="text-muted text-danger" v-if="errors.has('form.periode')">
                      <i class="icon-arrow-small-right"></i>
                      {{ errors.first('form.periode') }}
                    </small>
                    <small class="text-muted" v-else>&nbsp;</small>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="alert bg-info alert-styled-left">
                    <h6>Periode mengacu pada periode pada laporan statistik CU yang diinputkan di SIMO, apabila anda
                      tidak menemukan periode yang dimaksud maka silahkan cek ke menu laporan statistik CU dibawah menu
                      Tata kelola.</h6>
                  </div>

                  <hr />
                </div>

                <div class="col-md-6 mb-1">
                  <button type="button" class="btn btn-light btn-block" @click.prevent="back">
                    <i class="icon-arrow-left13"></i> Batal
                  </button>
                </div>

                <div class="col-md-6 mb-1" v-if="$route.meta.mode != 'lihat'">
                  <div
                    v-if="($route.meta.mode == 'create' && periodeStat == 'success' && periode == null) || ($route.meta.mode != 'create' && form.periode != '' && formStat == 'success')">

                    <button type="button" class="btn btn-warning btn-block" @click.prevent="saveDraft">
                      <i class="icon-floppy-disk"></i> Simpan Draft
                    </button>

                  </div>

                </div>
              </div>
            </div>

            <div class="nav-tabs-responsive mb-3"
              v-if="($route.meta.mode == 'create' && periodeStat == 'success' && periode == null) || ($route.meta.mode != 'create' && form.periode != '' && formStat == 'success')">
              <ul class="nav nav-tabs nav-tabs-solid bg-light">
                <li class="nav-item">
                  <div class="nav-link" :class="{ 'active': tabName == 'p1' }" @click.prevent="changeTab('p1')"
                    style="cursor:pointer">
                    <a href="#" class="font-weight-bold" :class="{ 'text-white': tabName == 'p1' }">1. PARTISIPASI</a>
                    <hr class="mt-1 mb-1" />
                    <ul class="list-inline mb-0">
                      <li>
                        Skor CU: {{ nilaiSkorCUP1}} /
                        Skor PUSKOPCUINA: {{ nilaiSkorBKCUP1}}
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" :class="{ 'active': tabName == 'p2' }" @click.prevent="changeTab('p2')"
                    style="cursor:pointer">
                    <a href="#" class="font-weight-bold" :class="{ 'text-white': tabName == 'p2' }">2. TRANSPARANSI</a>
                    <hr class="mt-1 mb-1" />
                    <ul class="list-inline mb-0">
                      <li>Skor CU: {{ nilaiSkorCUP2}} /
                        Skor PUSKOPCUINA: {{ nilaiSkorBKCUP2}}</li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" :class="{ 'active': tabName == 'p3' }" @click.prevent="changeTab('p3')"
                    style="cursor:pointer">
                    <a href="#" class="font-weight-bold" :class="{ 'text-white': tabName == 'p3' }">3. AKUNTABILITAS</a>
                    <hr class="mt-1 mb-1" />
                    <ul class="list-inline mb-0">
                      <li>Skor CU: {{ nilaiSkorCUP3 }} /
                        Skor PUSKOPCUINA: {{ nilaiSkorBKCUP3 }}</li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" :class="{ 'active': tabName == 'p4' }" @click.prevent="changeTab('p4')"
                    style="cursor:pointer">
                    <a href="#" class="font-weight-bold" :class="{ 'text-white': tabName == 'p4' }">4. ORIENTASI
                      BERSAMA</a>
                    <hr class="mt-1 mb-1" />
                    <ul class="list-inline mb-0">
                      <li>Skor CU: {{ nilaiSkorCUP4 }} /
                        Skor PUSKOPCUINA: {{ nilaiSkorBKCUP4 }}</li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" :class="{ 'active': tabName == 'p5' }" @click.prevent="changeTab('p5')"
                    style="cursor:pointer">
                    <a href="#" class="font-weight-bold" :class="{ 'text-white': tabName == 'p5' }">5. EFISIENSI DAN
                      EFEKTIFITAS</a>
                    <hr class="mt-1 mb-1" />
                    <ul class="list-inline mb-0">
                      <li>Skor CU: {{ nilaiSkorCUP5 }} /
                        Skor PUSKOPCUINA: {{ nilaiSkorBKCUP5 }}</li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" :class="{ 'active': tabName == 'p6' }" @click.prevent="changeTab('p6')"
                    style="cursor:pointer">
                    <a href="#" class="font-weight-bold" :class="{ 'text-white': tabName == 'p6' }">6. KESETARAAN DAN
                      INKLUSIFITAS</a>
                    <hr class="mt-1 mb-1" />
                    <ul class="list-inline mb-0">
                      <li>Skor CU: {{ nilaiSkorCUP6 }} /
                        Skor PUSKOPCUINA: {{ nilaiSkorBKCUP6 }}</li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" :class="{ 'active': tabName == 'p7' }" @click.prevent="changeTab('p7')"
                    style="cursor:pointer">
                    <a href="#" class="font-weight-bold" :class="{ 'text-white': tabName == 'p7' }">7. KETAATAN PADA
                      PERATURAN, KEBIJAKAN, DAN REGULASI</a>
                    <hr class="mt-1 mb-1" />
                    <ul class="list-inline mb-0">
                      <li>Skor CU: {{ nilaiSkorCUP7 }} /
                        Skor PUSKOPCUINA: {{ nilaiSkorBKCUP7 }}</li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" :class="{ 'active': tabName == 'p8' }" @click.prevent="changeTab('p8')"
                    style="cursor:pointer">
                    <a href="#" class="font-weight-bold" :class="{ 'text-white': tabName == 'p8' }">8. KEPEMIMPINAN YANG
                      STRATEGIS DAN VISIONER</a>
                    <hr class="mt-1 mb-1" />
                    <ul class="list-inline mb-0">
                      <li>Skor CU: {{ nilaiSkorCUP8 }} /
                        Skor PUSKOPCUINA: {{ nilaiSkorBKCUP8 }}</li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" :class="{ 'active': tabName == 'p9' }" @click.prevent="changeTab('p9')"
                    style="cursor:pointer">
                    <a href="#" class="font-weight-bold" :class="{ 'text-white': tabName == 'p9' }">9. PENGETAHUAN DAN
                      KEAHLIAN DALAM MEMIMPIN</a>
                    <hr class="mt-1 mb-1" />
                    <ul class="list-inline mb-0">
                      <li>Skor CU: {{ nilaiSkorCUP9 }} /
                        Skor PUSKOPCUINA: {{ nilaiSkorBKCUP9}}</li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" :class="{ 'active': tabName == 'p10' }" @click.prevent="changeTab('p10')"
                    style="cursor:pointer">
                    <a href="#" class="font-weight-bold" :class="{ 'text-white': tabName == 'p10' }">10. KINERJA
                      ORGANISASI</a>
                    <hr class="mt-1 mb-1" />
                    <ul class="list-inline mb-0">
                      <li>Skor CU: {{ nilaiSkorCUP10 }} /
                        Skor PUSKOPCUINA: {{ nilaiSkorBKCUP10 }}</li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" :class="{ 'active': tabName == 'p11' }" @click.prevent="changeTab('p11')"
                    style="cursor:pointer">
                    <a href="#" class="font-weight-bold" :class="{ 'text-white': tabName == 'p11' }">11. AKUNTABILITAS
                      JARINGAN</a>
                    <hr class="mt-1 mb-1" />
                    <ul class="list-inline mb-0">
                      <li>Skor CU: {{ nilaiSkorCUP11 }} /
                        Skor PUSKOPCUINA: {{ nilaiSkorBKCUP11 }}</li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" :class="{ 'active': tabName == 'p12' }" @click.prevent="changeTab('p12')"
                    style="cursor:pointer">
                    <a href="#" class="font-weight-bold" :class="{ 'text-white': tabName == 'p12' }">12. SCORE CARD &
                      KESIMPULAN</a>
                    <hr class="mt-1 mb-1" />
                    <ul class="list-inline mb-0">
                      <li>
                        Total Skor CU: {{ totalSkorCU() }} /
                        Total Skor PUSKOPCUINA: {{ totalSkorBKCU() }}
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div class="alert bg-danger text-white alert-styled-left"
              v-if="$route.meta.mode == 'create' && periodeStat == 'success' && periode != null">
              <span class="font-weight-semibold">Maaf, self assesment untuk periode ini sudah pernah dilakukan mohon
                periksa kembali.
              </span>
            </div>

            <transition enter-active-class="animated fadeIn" mode="out-in">
              <div
                v-if="($route.meta.mode == 'create' && periodeStat == 'success' && periode == null) || ($route.meta.mode != 'create' && form.periode != '' && formStat == 'success')"
                v-show="tabName == 'p1'">
                <form-p1 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :itemData="modelPearls" :updateSingleStat="updateSingleStat"
                  @saveSingle="saveSingle" @reloadPearls="reloadPearls()" @next="changeTab('p2')" @prev="back"
                  @skorCUA="skorCUP1" @skorBKCUA="skorBKCUP1"></form-p1>
              </div>
            </transition>

            <transition enter-active-class="animated fadeIn" mode="out-in">
              <div v-show="tabName == 'p2'">
                <form-p2 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :updateSingleStat="updateSingleStat" @saveSingle="saveSingle"
                  @prev="changeTab('p2')" @next="changeTab('p3')" @skorCUA="skorCUP2" @skorBKCUA="skorBKCUP2"
                  ></form-p2>
              </div>
            </transition>

            <transition enter-active-class="animated fadeIn" mode="out-in">
              <div v-show="tabName == 'p3'">
                <form-p3 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :updateSingleStat="updateSingleStat" @saveSingle="saveSingle"
                  @prev="changeTab('p3')" @next="changeTab('p4')" @skorCUA="skorCUP3" @skorBKCUA="skorBKCUP3"
                  ></form-p3>?
              </div>
            </transition>

            <transition enter-active-class="animated fadeIn" mode="out-in">
              <div v-show="tabName == 'p4'">
                <form-p4 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :updateSingleStat="updateSingleStat" @saveSingle="saveSingle"
                  @prev="changeTab('p3')" @next="changeTab('p5')" @skorCUA="skorCUP4" @skorBKCUA="skorBKCUP4"
                 ></form-p4>
              </div>
            </transition>

            <transition enter-active-class="animated fadeIn" mode="out-in">
              <div v-show="tabName == 'p5'">
                <form-p5 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :updateSingleStat="updateSingleStat" @saveSingle="saveSingle"
                  @prev="changeTab('p4')" @next="changeTab('p6')" @skorCUA="skorCUP5" @skorBKCUA="skorBKCUP5"
                  ></form-p5>
              </div>
            </transition>

            <transition enter-active-class="animated fadeIn" mode="out-in">
              <div v-show="tabName == 'p6'">
                <form-p6 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :updateSingleStat="updateSingleStat" @saveSingle="saveSingle"
                  @prev="changeTab('p5')" @next="changeTab('p7')" @skorCUA="skorCUP6" @skorBKCUA="skorBKCUP6"
                  ></form-p6>
              </div>
            </transition>

            <transition enter-active-class="animated fadeIn" mode="out-in">
              <div v-show="tabName == 'p7'">
                <form-p7 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :updateSingleStat="updateSingleStat" @saveSingle="saveSingle"
                  @prev="changeTab('p6')" @next="changeTab('p8')" @skorCUA="skorCUP7" @skorBKCUA="skorBKCUP7"
                  ></form-p7>
              </div>
            </transition>

            <transition enter-active-class="animated fadeIn" mode="out-in">
              <div v-show="tabName == 'p8'">
                <form-p8 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :updateSingleStat="updateSingleStat" @saveSingle="saveSingle"
                  @prev="changeTab('p7')" @next="changeTab('p9')" @skorCUA="skorCUP8" @skorBKCUA="skorBKCUP8"
                  ></form-p8>
              </div>
            </transition>

            <transition enter-active-class="animated fadeIn" mode="out-in">
              <div v-show="tabName == 'p9'">
                <form-p9 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :updateSingleStat="updateSingleStat" @saveSingle="saveSingle"
                  @prev="changeTab('p8')" @next="changeTab('p10')" @skorCUA="skorCUP9" @skorBKCUA="skorBKCUP9"
                 ></form-p9>
              </div>
            </transition>

            <transition enter-active-class="animated fadeIn" mode="out-in">
              <div v-show="tabName == 'p10'">
                <form-p10 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :updateSingleStat="updateSingleStat" @saveSingle="saveSingle"
                  @prev="changeTab('p9')" @next="changeTab('p11')" @skorCUA="skorCUP10" @skorBKCUA="skorBKCUP10"
                  ></form-p10>
              </div>
            </transition>

            <transition enter-active-class="animated fadeIn" mode="out-in">
              <div v-show="tabName == 'p11'">
                <form-p11 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :updateSingleStat="updateSingleStat" @saveSingle="saveSingle"
                  @prev="changeTab('p10')" @next="changeTab('p12')" @skorCUA="skorCUP11" @skorBKCUA="skorBKCUP11" 
                  @skorCUA1="skorCUP11A" @skorBKCUA1="skorBKCUP11A" @skorCUA2="skorCUP11B" @skorBKCUA2="skorBKCUP11B"
                  @skorCUA3="skorCUP11C" @skorBKCUA3="skorBKCUP11C" @skorCUA4="skorCUP11D" @skorBKCUA4="skorBKCUP11D"
                 ></form-p11>
              </div>
            </transition>

            <transition enter-active-class="animated fadeIn" mode="out-in">
              <div v-show="tabName == 'p12'">
                <score-p1 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :nilaiSkorCUP1="nilaiSkorCUP1" :nilaiSkorBKCUP1="nilaiSkorBKCUP1"></score-p1>
                <hr />
                <score-p2 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :nilaiSkorCUP2="nilaiSkorCUP2" :nilaiSkorBKCUP2="nilaiSkorBKCUP2"></score-p2>
                <hr />
                <score-p3 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :nilaiSkorCUP3="nilaiSkorCUP3" :nilaiSkorBKCUP3="nilaiSkorBKCUP3"></score-p3>
                <hr />
                <score-p4 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :nilaiSkorCUP4="nilaiSkorCUP4" :nilaiSkorBKCUP4="nilaiSkorBKCUP4"></score-p4>
                <hr />
                <score-p5 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :nilaiSkorCUP5="nilaiSkorCUP5" :nilaiSkorBKCUP5="nilaiSkorBKCUP5"></score-p5>
                <score-p6 v-if="formStat == 'success'" :form="form" 
                  :mode="$route.meta.mode" :nilaiSkorCUP6="nilaiSkorCUP6" :nilaiSkorBKCUP6="nilaiSkorBKCUP6"></score-p6>
                <hr />
                <score-p7 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :nilaiSkorCUP7="nilaiSkorCUP7" :nilaiSkorBKCUP7="nilaiSkorBKCUP7"></score-p7>
                <hr />
                <score-p8 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :nilaiSkorCUP8="nilaiSkorCUP8" :nilaiSkorBKCUP8="nilaiSkorBKCUP8"></score-p8>
                <score-p9 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :nilaiSkorCUP9="nilaiSkorCUP9" :nilaiSkorBKCUP9="nilaiSkorBKCUP9"></score-p9>
                <hr />
                <score-p10 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :nilaiSkorCUP10="nilaiSkorCUP10"
                  :nilaiSkorBKCUP10="nilaiSkorBKCUP10" :grandTotalCU="nilaiTotalSkorCU"
                  :grandTotalBKCU="nilaiTotalSkorBKCU"></score-p10>
                <hr />
                <score-p11 v-if="formStat == 'success'" :form="form"
                  :mode="$route.meta.mode" :nilaiSkorCUP11="nilaiSkorCUP11"
                  :nilaiSkorBKCUP11="nilaiSkorBKCUP11" :nilaiSkorCUP11A="nilaiSkorCUP11A"
                  :nilaiSkorBKCUP11A="nilaiSkorBKCUP11A" :nilaiSkorCUP11B="nilaiSkorCUP11B"
                  :nilaiSkorBKCUP11B="nilaiSkorBKCUP11B" :nilaiSkorCUP11C="nilaiSkorCUP11C"
                  :nilaiSkorBKCUP11C="nilaiSkorBKCUP11C" :nilaiSkorCUP11D="nilaiSkorCUP11D"
                  :nilaiSkorBKCUP11D="nilaiSkorBKCUP11D"></score-p11>
                <hr />
                <kesimpulan v-if="formStat == 'success'" :form="form" :mode="$route.meta.mode"
                  :nilaiTotalSkorCU="nilaiTotalSkorCU" :nilaiTotalSkorBKCU="nilaiTotalSkorBKCU" 
                  :nilaiTotalSkorCU2="nilaiSkorCUP11" :nilaiTotalSkorBKCU2="nilaiSkorBKCUP11">
                </kesimpulan>

                <div v-if="formStat == 'success'">
                  <!-- simpan cu -->
                  <div v-if="$route.meta.mode != 'penilaianBkcu'">
                    <div class="card card-body"
                      v-if="form.p11.a20_cu_penilaian != null && form.p11.a20_cu_keterangan != null">
                      <div class="text-center d-none d-md-block">
                        <button type="button" class="btn btn-light" @click.prevent="changeTab('p11')">
                          <i class="icon-arrow-left13"></i> Kembali
                        </button>

                        <button type="submit" class="btn btn-primary" v-if="$route.meta.mode != 'lihat'">
                          <i class="icon-floppy-disk"></i> Simpan
                        </button>
                      </div>
                      <div class="d-block d-md-none">
                        <button type="submit" class="btn btn-primary btn-block" v-if="$route.meta.mode != 'lihat'">
                          <i class="icon-floppy-disk"></i> Simpan
                        </button>

                        <button type="button" class="btn btn-light btn-block" @click.prevent="changeTab('p4')">
                          <i class="icon-arrow-left13"></i> Kembali
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- simpan bkcu -->
                  <div v-if="$route.meta.mode == 'penilaianBkcu'">
                    <div class="card card-body" v-if="form.p11.a20_bkcu_penilaian != null">
                      <div class="text-center d-none d-md-block">
                        <button type="button" class="btn btn-light" @click.prevent="changeTab('p4')">
                          <i class="icon-arrow-left13"></i> Kembali
                        </button>

                        <button type="submit" class="btn btn-primary" v-if="$route.meta.mode != 'lihat'">
                          <i class="icon-floppy-disk"></i> Simpan
                        </button>
                      </div>
                      <div class="d-block d-md-none">
                        <button type="submit" class="btn btn-primary btn-block" v-if="$route.meta.mode != 'lihat'">
                          <i class="icon-floppy-disk"></i> Simpan
                        </button>

                        <button type="button" class="btn btn-light btn-block" @click.prevent="changeTab('p4')">
                          <i class="icon-arrow-left13"></i> Kembali
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </form>
        </div>
      </div>
    </div>

    <!-- modal -->
    <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor"
      @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"
      @backgroundClick="modalBackgroundClick">
      <!-- title -->
      <template slot="modal-title">{{ modalTitle }}</template>

      <!--  -->
      <template slot="modal-body1"></template>
    </app-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import pageHeader from "../../components/pageHeader.vue";
import infoIcon from "../../components/infoIcon.vue";
import appModal from "../../components/modal";
import message from "../../components/message.vue";
import formButton from "../../components/formButton.vue";
import formInfo from "../../components/formInfo.vue";
import Cleave from "vue-cleave-component";
import wajibBadge from "../../components/wajibBadge.vue";
import formP1 from "./form_p1.vue";
import formP2 from "./form_p2.vue";
import formP3 from "./form_p3.vue";
import formP4 from "./form_p4.vue";
import formP5 from "./form_p5.vue";
import formP6 from "./form_p6.vue";
import formP7 from "./form_p7.vue";
import formP8 from "./form_p8.vue";
import formP9 from "./form_p9.vue";
import formP10 from "./form_p10.vue";
import formP11 from "./form_p11.vue";
import scoreP1 from "./score_p1.vue";
import scoreP2 from "./score_p2.vue";
import scoreP3 from "./score_p3.vue";
import scoreP4 from "./score_p4.vue";
import scoreP5 from "./score_p5.vue";
import scoreP6 from "./score_p6.vue";
import scoreP7 from "./score_p7.vue";
import scoreP8 from "./score_p8.vue";
import scoreP9 from "./score_p9.vue";
import scoreP10 from "./score_p10.vue";
import scoreP11 from "./score_p11.vue";
import kesimpulan from "./kesimpulan.vue";
import { PusherAuth } from '../../helpers/pusherAuth.js';
import Echo from 'laravel-echo';
import Pusher from "pusher-js";
import _ from 'lodash';

export default {
  components: {
    pageHeader,
    appModal,
    message,
    formButton,
    formInfo,
    Cleave,
    infoIcon,
    wajibBadge,
    formP1,
    formP2,
    formP3,
    formP4,
    formP5,
    formP6,
    formP7,
    formP8,
    formP9,
    formP10,
    formP11,
    scoreP1,
    scoreP2,
    scoreP3,
    scoreP4,
    scoreP5,
    scoreP6,
    scoreP7,
    scoreP8,
    scoreP9,
    scoreP10,
    scoreP11,
    kesimpulan
  },
  data() {
    return {
      title: "Self Assesment CULEG",
      titleDesc: "Menambah self assesment CULEG",
      titleIcon: "icon-plus3",
      level2Title: "Assesment Culeg",
      kelas: "assesmentCuleg",
      tabName: "p1",
      nilaiSkorCUP1: 0,
      nilaiSkorBKCUP1: 0,
      nilaiSkorCUP2: 0,
      nilaiSkorBKCUP2: 0,
      nilaiSkorCUP3: 0,
      nilaiSkorBKCUP3: 0,
      nilaiSkorCUP4: 0,
      nilaiSkorBKCUP4: 0,
      nilaiSkorCUP5: 0,
      nilaiSkorBKCUP5: 0,
      nilaiSkorCUP6: 0,
      nilaiSkorBKCUP6: 0,
      nilaiSkorCUP7: 0,
      nilaiSkorBKCUP7: 0,
      nilaiSkorCUP8: 0,
      nilaiSkorBKCUP8: 0,
      nilaiSkorCUP9: 0,
      nilaiSkorBKCUP9: 0,
      nilaiSkorCUP10: 0,
      nilaiSkorBKCUP10: 0,
      nilaiSkorCUP11: 0,
      nilaiSkorBKCUP11: 0,
      nilaiSkorCUP11A: 0,
      nilaiSkorBKCUP11A: 0,
      nilaiSkorCUP11B: 0,
      nilaiSkorBKCUP11B: 0,
      nilaiSkorCUP11C: 0,
      nilaiSkorBKCUP11C: 0,
      nilaiSkorCUP11D: 0,
      nilaiSkorBKCUP11D: 0,
      nilaiTotalSkorCU: 0,
      nilaiTotalSkorBKCU: 0,
      cleaveOption: {
        date: {
          date: true,
          datePattern: ["Y", "m", "d"],
          delimiter: "-"
        },
        numeric: {
          numeral: true,
          numeralThousandsGroupStyle: "thousand",
          numeralDecimalScale: 2,
          numeralDecimalMark: ",",
          delimiter: "."
        },
        numeric2: {
          numeral: true,
          numeralIntegerScale: 2,
          numeralDecimalScale: 2,
          numeralDecimalMark: ",",
          delimiter: "."
        }
      },
      modalShow: false,
      modalState: "",
      modalTitle: "",
      modalColor: "",
      modalContent: "",
      submited: false
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.fetch());
  },
  mounted() {
    if (this.$route.meta.mode == "lihat" || this.$route.meta.mode == "penilaianBkcu") {
      PusherAuth();
      window.Echo.private(`assesment.channel.` + this.$route.params.id)
        .listen('AssesmentEvent', (data) => {
          if (data.tipe == 'p1') {
            _.merge(this.form.p1, data.datas);
          }
          if (data.tipe == 'p2') {
            _.merge(this.form.p2, data.datas);
          }
          if (data.tipe == 'p3') {
            _.merge(this.form.p3, data.datas);
          }
          if (data.tipe == 'p4') {
            _.merge(this.form.p4, data.datas);
          }
        });
    }
  },
  created() {
    this.changeCU(this.currentUser.id_cu);
  },
  watch: {
    // check route changes
    $route(to, from) {
      this.fetch();
    },
    formStat(value) {
      if (value === "success") {
        if (this.$route.meta.mode == "create") {
          this.changeCU(this.currentUser.id_cu);
        } else {
          this.changeCU(this.form.id_cu);
          this.$store.dispatch(
            "laporanCu/detailPearls",
            this.form.id_laporan_cu
          );
        }
      }
    },
    updateStat(value) {
      this.modalShow = true;
      this.modalState = value;
      this.modalColor = "";

      if (value === "success") {
        this.modalTitle = this.updateResponse.message;
      } else {
        this.modalTitle = "Oops terjadi kesalahan :(";
        this.modalContent = this.updateResponse;
      }
    },
    updateSingleStat(value) {
      if (value == "fail") {
        this.modalShow = true;
        this.modalState = value;
        this.modalColor = "";
        this.modalTitle = "Oops terjadi kesalahan :(";
        this.modalContent = this.updateResponse;
      }
    }
  },
  methods: {
    fetch() {
      if (this.$route.meta.mode == "edit") {
        this.$store.dispatch(this.kelas + "/edit", this.$route.params.id);
        this.title = "Ubah self assesment CULEG";
        this.titleDesc = "Mengubah self assesment CULEG";
        this.titleIcon = "icon-pencil5";
      } else if (this.$route.meta.mode == "penilaianBkcu") {
        this.$store.dispatch(this.kelas + "/editPenilaian", this.$route.params.id);
        this.title = "Penilaian self assesment CULEG";
        this.titleDesc = "Penilaian self assesment CULEG";
        this.titleIcon = "icon-law";
      } else if (this.$route.meta.mode == "lihat") {
        this.$store.dispatch(this.kelas + "/edit", this.$route.params.id);
        this.title = "Melihat self assesment CULEG";
        this.titleDesc = "Melihat data self assesment CULEG";
        this.titleIcon = "icon-file-eye";
      } else {
        this.title = "Tambah self assesment CULEG";
        this.titleDesc = "Menambah self assesment CULEG";
        this.titleIcon = "icon-plus3";
        this.$store.dispatch(this.kelas + '/resetPeriode');
        this.$store.dispatch(this.kelas + "/create");
      }
    },
    changeCU(id) {
      this.form.id_cu = id;
      this.$store.dispatch("laporanCu/getPeriodeCu", id);
    },
    changePeriode(id) {
      let _periode = "";
      _periode = _.find(this.modelPeriode, { id: parseInt(id, 10) });
      this.form.id_laporan_cu = id;
      this.form.periode = _periode.periode;
      this.$store.dispatch(this.kelas + "/cariData", [this.form.id_cu, this.form.periode]);
      this.$store.dispatch("laporanCu/detailPearls", id);
    },
    reloadPearls() {
      this.$store.dispatch("laporanCu/detailPearls", this.form.id_laporan_cu);
    },
    saveDraft() {
      this.$validator.validateAll("form").then(result => {
        if (result) {
          if (this.$route.meta.mode == "edit") {
            this.form.status = "BELUM SELESAI DIISI";
            this.$store.dispatch(this.kelas + "/update", [
              this.$route.params.id,
              this.form
            ]);
          } else if (this.$route.meta.mode == "penilaianBkcu") {
            this.form.status = "BELUM SELESAI DINILAI";
            this.$store.dispatch(this.kelas + "/update", [
              this.$route.params.id,
              this.form
            ]);
          } else {
            this.form.status = "BELUM SELESAI DIISI";
            this.$store.dispatch(this.kelas + "/store", this.form);
          }
          this.submited = false;
        } else {
          window.scrollTo(0, 0);
          this.submited = true;
        }
      });
    },
    saveSingle(perspektif) {
      this.$validator.validateAll("form").then(result => {
        if (result) {
          if (this.$route.meta.mode == "edit") {
            this.form.status = "BELUM SELESAI DIISI";
            this.$store.dispatch(this.kelas + "/updateSingle", [
              this.$route.params.id,
              perspektif,
              this.form
            ]);
          } else if (this.$route.meta.mode == "penilaianBkcu") {
            this.form.status = "BELUM SELESAI DINILAI";
            this.$store.dispatch(this.kelas + "/updateSingle", [
              this.$route.params.id,
              perspektif,
              this.form
            ]);
          } else {
            this.form.status = "BELUM SELESAI DIISI";
            this.$store.dispatch(this.kelas + "/store", this.form);
          }
          this.submited = false;
        } else {
          window.scrollTo(0, 0);
          this.submited = true;
        }
      });
    },
    save() {
      this.$validator.validateAll("form").then(result => {
        if (result) {
          if (this.$route.meta.mode == "edit") {
            this.form.status = "BELUM DINILAI";
            this.$store.dispatch(this.kelas + "/update", [
              this.$route.params.id,
              this.form
            ]);
          } else if (this.$route.meta.mode == "penilaianBkcu") {
            this.form.status = "SUDAH DINILAI";
            this.$store.dispatch(this.kelas + "/update", [
              this.$route.params.id,
              this.form
            ]);
          } else {
            this.form.status = "BELUM DINILAI";
            this.$store.dispatch(this.kelas + "/store", this.form);
          }
          this.submited = false;
        } else {
          window.scrollTo(0, 0);
          this.submited = true;
        }
      });
    },
    back() {
      if (this.currentUser.id_cu == 0) {
        this.$router.push({ name: this.kelas + "Cu", params: { cu: "semua" } });
      } else {
        this.$router.push({
          name: this.kelas + "Cu",
          params: { cu: this.currentUser.id_cu }
        });
      }
    },
    modalTutup() {
      if (this.updateStat === "success") {
        this.back();
      }

      this.modalShow = false;
    },
    modalBackgroundClick() {
      if (this.modalState === "success") {
        this.modalTutup;
      } else if (this.modalState === "loading") {
        // do nothing
      } else {
        this.modalShow = false;
      }
    },
    totalSkorCU() {
      var jumlah =
        this.nilaiSkorCUP1 +
        this.nilaiSkorCUP2 +
        this.nilaiSkorCUP3 +
        this.nilaiSkorCUP4 +
        this.nilaiSkorCUP5 +
        this.nilaiSkorCUP6 +
        this.nilaiSkorCUP7 +
        this.nilaiSkorCUP8 +
        this.nilaiSkorCUP9 +
        this.nilaiSkorCUP10

      this.nilaiTotalSkorCU = jumlah;
      return jumlah;
    },

    totalSkorBKCU() {
      var jumlah =
        this.nilaiSkorBKCUP1 +
        this.nilaiSkorBKCUP2 +
        this.nilaiSkorBKCUP3 +
        this.nilaiSkorBKCUP4 +
        this.nilaiSkorBKCUP5 +
        this.nilaiSkorBKCUP6 +
        this.nilaiSkorBKCUP7 +
        this.nilaiSkorBKCUP8 +
        this.nilaiSkorBKCUP9 +
        this.nilaiSkorBKCUP10

      this.nilaiTotalSkorBKCU = jumlah;
      return jumlah;
    },

    

    // p1
    skorCUP1(value) {
      this.nilaiSkorCUP1 = value;
    },
    skorBKCUP1(value) {
      this.nilaiSkorBKCUP1 = value;
    },

    // p2
    skorCUP2(value) {
      this.nilaiSkorCUP2 = value;
    },
    skorBKCUP2(value) {
      this.nilaiSkorBKCUP2 = value;
    },

    // p3
    skorCUP3(value) {
      this.nilaiSkorCUP3 = value;
    },
    skorBKCUP3(value) {
      this.nilaiSkorBKCUP3 = value;
    },

    // p4
    skorCUP4(value) {
      this.nilaiSkorCUP4 = value;
    },
    skorBKCUP4(value) {
      this.nilaiSkorBKCUP4 = value;
    },

    // p5
    skorCUP5(value) {
      this.nilaiSkorCUP5 = value;
    },
    skorBKCUP5(value) {
      this.nilaiSkorBKCUP5 = value;
    },

    // p6
    skorCUP6(value) {
      this.nilaiSkorCUP6 = value;
    },
    skorBKCUP6(value) {
      this.nilaiSkorBKCUP6 = value;
    },

    // p7
    skorCUP7(value) {
      this.nilaiSkorCUP7 = value;
    },
    skorBKCUP7(value) {
      this.nilaiSkorBKCUP7 = value;
    },

    // p8
    skorCUP8(value) {
      this.nilaiSkorCUP8 = value;
    },
    skorBKCUP8(value) {
      this.nilaiSkorBKCUP8 = value;
    },

    // p9
    skorCUP9(value) {
      this.nilaiSkorCUP9 = value;
    },
    skorBKCUP9(value) {
      this.nilaiSkorBKCUP9 = value;
    },

    // p10
    skorCUP10(value) {
      this.nilaiSkorCUP10 = value;
    },
    skorBKCUP10(value) {
      this.nilaiSkorBKCUP10 = value;
    },

    // p11
    skorCUP11(value) {
      this.nilaiSkorCUP11 = value;
    },
    skorBKCUP11(value) {
      this.nilaiSkorBKCUP11 = value;
    },
    skorCUP11A(value) {
      this.nilaiSkorCUP11A = value;
    },
    skorBKCUP11A(value) {
      this.nilaiSkorBKCUP11A = value;
    },
    skorCUP11B(value) {
      this.nilaiSkorCUP11B = value;
    },
    skorBKCUP11B(value) {
      this.nilaiSkorBKCUP11B = value;
    },
    skorCUP11C(value) {
      this.nilaiSkorCUP11C = value;
    },
    skorBKCUP11C(value) {
      this.nilaiSkorBKCUP11C = value;
    },
    skorCUP11D(value) {
      this.nilaiSkorCUP11D = value;
    },
    skorBKCUP11D(value) {
      this.nilaiSkorBKCUP11D = value;
    },


    changeTab(value) {
      this.tabName = value;
    }
  },
  computed: {
    ...mapGetters("auth", {
      currentUser: "currentUser"
    }),
    ...mapGetters("assesmentCuleg", {
      form: "data",
      formStat: "dataStat",
      rules: "rules",
      options: "options",
      updateResponse: "update",
      updateStat: "updateStat",
      updateSingleResponse: "updateSingle",
      updateSingleStat: "updateSingleStat",
      periode: "periode",
      periodeStat: "periodeStat"
    }),
    ...mapGetters("cu", {
      modelCU: "headerDataS",
      modelCUStat: "headerDataStatS"
    }),
    ...mapGetters("laporanCu", {
      modelPeriode: "periode",
      modelPeriodeStat: "periodeStat",
      modelPearls: "pearls",
      modelPearlsStat: "pearlsStat"
    })
  }
};
</script>
