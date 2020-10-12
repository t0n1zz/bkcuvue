<template>
  <div>
    <!-- page-header -->
    <page-header
      :title="title"
      :titleDesc="titleDesc"
      :titleIcon="titleIcon"
      :level="2"
      :level2Title="level2Title"
      :level2Route="kelas"
      @level2Back="back()"
    ></page-header>

    <!-- content -->
    <div class="page-content pt-0">
      <div class="content-wrapper">
        <div class="content">
          <!-- message -->
          <message
            v-if="errors.any('form') && submited"
            :title="'Oops, terjadi kesalahan'"
            :errorItem="errors.items"
          ></message>

          <form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">
            <div class="card card-body">
              <div class="row">
                <!-- cu -->
                <div class="col-md-6" v-if="currentUser.id_cu == 0">
                  <div class="form-group" :class="{'has-error' : errors.has('form.id_cu')}">
                    <!-- title -->
                    <h5 :class="{ 'text-danger' : errors.has('form.id_cu')}">
                      <i class="icon-cross2" v-if="errors.has('form.id_cu')"></i>
                      CU:
                      <wajib-badge></wajib-badge>
                    </h5>

                    <!-- select -->
                    <select
                      class="form-control"
                      name="id_cu"
                      v-model="form.id_cu"
                      data-width="100%"
                      v-validate="'required'"
                      data-vv-as="CU"
                      @change="changeCU($event.target.value)"
                      :disabled="modelCU.length == 0 || $route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat' || $route.meta.mode == 'edit'"
                    >
                      <option disabled value="0">Silahkan pilih CU</option>
                      <option v-for="(cu, index) in modelCU" :value="cu.id" :key="index">{{cu.name}}</option>
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
                <div
                  :class="{'col-md-6' : currentUser.id_cu == 0, 'col-md-12' : currentUser.id_cu != 0}"
                >
                  <div class="form-group" :class="{'has-error' : errors.has('form.periode')}">
                    <!-- title -->
                    <h5 :class="{ 'text-danger' : errors.has('form.periode')}">
                      <i class="icon-cross2" v-if="errors.has('form.periode')"></i>
                      Periode:
                      <wajib-badge></wajib-badge>
                      <info-icon :message="'Periode diambil dari laporan perkembangan CU'"></info-icon>
                    </h5>

                    <!-- select -->
                    <select
                      class="form-control"
                      name="periode"
                      v-model="form.id_laporan_cu"
                      data-width="100%"
                      v-validate="'required'"
                      data-vv-as="CU"
                      @change="changePeriode($event.target.value)"
                      :disabled="modelPeriode.length == 0 || $route.meta.mode == 'penilaian_bkcu' || $route.meta.mode == 'lihat' || $route.meta.mode == 'edit'"
                    >
                      <option disabled value>
                        <span v-if="modelPeriodeStat == 'loading'">Mohon tunggu...</span>
                        <span v-else>Silahkan pilih periode</span>
                      </option>
                      <option
                        v-for="(periode, index) in modelPeriode"
                        :value="periode.id" :key="index"
                      >{{periode.periode}}</option>
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
                    <h6>Periode mengacu pada periode pada laporan statistik CU yang diinputkan di SIMO, apabila anda tidak menemukan periode yang dimaksud maka silahkan cek ke menu laporan statistik CU dibawah menu Tata kelola.</h6>
                  </div>

                  <hr />
                </div>

                <div class="col-md-6 mb-1">
                  <button type="button" class="btn btn-light btn-block" @click.prevent="back">
                    <i class="icon-arrow-left13"></i> Batal
                  </button>
                </div>

                <div class="col-md-6 mb-1" v-if="$route.meta.mode != 'lihat'">
                  <div v-if="($route.meta.mode == 'create' && periodeStat == 'success' && periode == null) || ($route.meta.mode != 'create' && form.periode != '' && formStat == 'success')">

                      <button
                        type="button"
                        class="btn btn-warning btn-block"
                        @click.prevent="saveDraft"
                      >
                        <i class="icon-floppy-disk"></i> Simpan Draft
                      </button>
                      
                  </div>

                </div>
              </div>
            </div>

            <div
              class="nav-tabs-responsive mb-3"
              v-if="($route.meta.mode == 'create' && periodeStat == 'success' && periode == null) || ($route.meta.mode != 'create' && form.periode != '' && formStat == 'success')"
            >
              <ul class="nav nav-tabs nav-tabs-solid bg-light">
                <li class="nav-item">
                  <div
                    class="nav-link"
                    :class="{'active' : tabName == 'p1'}"
                    @click.prevent="changeTab('p1')"
                    style="cursor:pointer"
                  >
                    <a
                      href="#"
                      class="font-weight-bold"
                      :class="{'text-white' : tabName == 'p1'}"
                    >1. PERSPEKTIF KEUANGAN</a>
                    <hr class="mt-1 mb-1" />
                    <ul class="list-inline mb-0">
                      <li>
                        Skor CU: {{ nilaiSkorCUP1A + nilaiSkorCUP1B + nilaiSkorCUP1C + nilaiSkorCUP1D + nilaiSkorCUP1E + nilaiSkorCUP1F }}
                        / Bobot Skor CU: {{ (nilaiBobotCUP1A + nilaiBobotCUP1B + nilaiBobotCUP1C + nilaiBobotCUP1D + nilaiBobotCUP1E + nilaiBobotCUP1F) | round(2) }}%
                      </li>
                      <li>
                        Skor BKCU: {{ nilaiSkorBKCUP1A + nilaiSkorBKCUP1B + nilaiSkorBKCUP1C + nilaiSkorBKCUP1D + nilaiSkorBKCUP1E + nilaiSkorBKCUP1F }}
                        / Bobot Skor BKCU: {{ (nilaiBobotBKCUP1A + nilaiBobotBKCUP1B + nilaiBobotBKCUP1C + nilaiBobotBKCUP1D + nilaiBobotBKCUP1E + nilaiBobotBKCUP1F) | round(2) }}%
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div
                    class="nav-link"
                    :class="{'active' : tabName == 'p2'}"
                    @click.prevent="changeTab('p2')"
                    style="cursor:pointer"
                  >
                    <a
                      href="#"
                      class="font-weight-bold"
                      :class="{'text-white' : tabName == 'p2'}"
                    >2. PERSPEKTIF ANGGOTA/PELANGGAN</a>
                    <hr class="mt-1 mb-1" />
                    <ul class="list-inline mb-0">
                      <li>Skor CU: {{ nilaiSkorCUP2A + nilaiSkorCUP2B }} / Bobot Skor CU: {{ (nilaiBobotCUP2A + nilaiBobotCUP2B) | round(2) }}%</li>
                      <li>Skor BKCU: {{ nilaiSkorBKCUP2A + nilaiSkorBKCUP2B }} / Bobot Skor BKCU: {{ (nilaiBobotBKCUP2A + nilaiBobotBKCUP2B) | round(2) }}%</li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div
                    class="nav-link"
                    :class="{'active' : tabName == 'p3'}"
                    @click.prevent="changeTab('p3')"
                    style="cursor:pointer"
                  >
                    <a
                      href="#"
                      class="font-weight-bold"
                      :class="{'text-white' : tabName == 'p3'}"
                    >3. PERSPEKTIF BISNIS INTERNAL</a>
                    <hr class="mt-1 mb-1" />
                    <ul class="list-inline mb-0">
                      <li>Skor CU: {{ nilaiSkorCUP3A + nilaiSkorCUP3B }} / Bobot Skor CU: {{ (nilaiBobotCUP3A + nilaiBobotCUP3B) | round(2) }}%</li>
                      <li>Skor BKCU: {{ nilaiSkorBKCUP3A + nilaiSkorBKCUP3B }} / Bobot Skor BKCU: {{ (nilaiBobotBKCUP3A + nilaiBobotBKCUP3B) | round(2) }}%</li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div
                    class="nav-link"
                    :class="{'active' : tabName == 'p4'}"
                    @click.prevent="changeTab('p4')"
                    style="cursor:pointer"
                  >
                    <a
                      href="#"
                      class="font-weight-bold"
                      :class="{'text-white' : tabName == 'p4'}"
                    >4. PERSPEKTIF PEMBELAJARAN</a>
                    <hr class="mt-1 mb-1" />
                    <ul class="list-inline mb-0">
                      <li>Skor CU: {{ nilaiSkorCUP4A + nilaiSkorCUP4B }} / Bobot Skor CU: {{ (nilaiBobotCUP4A + nilaiBobotCUP4B) | round(2) }}%</li>
                      <li>Skor BKCU: {{ nilaiSkorBKCUP4A + nilaiSkorBKCUP4B }} / Bobot Skor BKCU: {{ (nilaiBobotBKCUP4A + nilaiBobotBKCUP4B) | round(2) }}%</li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div
                    class="nav-link"
                    :class="{'active' : tabName == 'p5'}"
                    @click.prevent="changeTab('p5')"
                    style="cursor:pointer"
                  >
                    <a
                      href="#"
                      class="font-weight-bold"
                      :class="{'text-white' : tabName == 'p5'}"
                    >5. SCORE CARD & KESIMPULAN</a>
                    <hr class="mt-1 mb-1" />
                    <ul class="list-inline mb-0">
                      <li>
                        Total Skor CU: {{ totalSkorCU() }} /
                        Total Bobot Skor CU: {{ totalBobotCU() }}%
                      </li>
                      <li>
                        Total Skor BKCU: {{ totalSkorBKCU() }} /
                        Total Bobot Skor BKCU: {{ totalBobotBKCU() }}%
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

						<div class="alert bg-danger text-white alert-styled-left" v-if="$route.meta.mode == 'create' && periodeStat == 'success' && periode != null">
							<span class="font-weight-semibold">Maaf, self assesment untuk periode ini sudah pernah dilakukan mohon periksa kembali.
							</span>
						</div>
            
						<transition enter-active-class="animated fadeIn" mode="out-in">
              <div v-if="($route.meta.mode == 'create' && periodeStat == 'success' && periode == null) || ($route.meta.mode != 'create' && form.periode != '' && formStat == 'success')" v-show="tabName == 'p1'">
                <form-p1
                  v-if="formStat == 'success'"
                  :form="form"
                  :jumlahIndikator="'56'"
                  :bobotSkor="'40'"
                  :mode="$route.meta.mode"
                  :itemData="modelPearls"
                  :updateSingleStat="updateSingleStat"
                  @saveSingle="saveSingle"
                  @reloadPearls="reloadPearls()"
                  @next="changeTab('p2')"
                  @prev="back"
                  @skorCUA="skorCUP1A"
                  @skorBKCUA="skorBKCUP1A"
                  @bobotCUA="bobotCUP1A"
                  @bobotBKCUA="bobotBKCUP1A"
                  @skorCUB="skorCUP1B"
                  @skorBKCUB="skorBKCUP1B"
                  @bobotCUB="bobotCUP1B"
                  @bobotBKCUB="bobotBKCUP1B"
                  @skorCUC="skorCUP1C"
                  @skorBKCUC="skorBKCUP1C"
                  @bobotCUC="bobotCUP1C"
                  @bobotBKCUC="bobotBKCUP1C"
                  @skorCUD="skorCUP1D"
                  @skorBKCUD="skorBKCUP1D"
                  @bobotCUD="bobotCUP1D"
                  @bobotBKCUD="bobotBKCUP1D"
                  @skorCUE="skorCUP1E"
                  @skorBKCUE="skorBKCUP1E"
                  @bobotCUE="bobotCUP1E"
                  @bobotBKCUE="bobotBKCUP1E"
                  @skorCUF="skorCUP1F"
                  @skorBKCUF="skorBKCUP1F"
                  @bobotCUF="bobotCUP1F"
                  @bobotBKCUF="bobotBKCUP1F"
                ></form-p1>
              </div>
            </transition>

            <transition enter-active-class="animated fadeIn" mode="out-in">
              <div v-show="tabName == 'p2'">
                <form-p2
                  v-if="formStat == 'success'"
                  :form="form"
                  :jumlahIndikator="'108'"
                  :bobotSkor="'20'"
                  :mode="$route.meta.mode"
                  :updateSingleStat="updateSingleStat"
                  @saveSingle="saveSingle"
                  @prev="changeTab('p2')"
                  @next="changeTab('p3')"
                  @skorCUA="skorCUP2A"
                  @skorBKCUA="skorBKCUP2A"
                  @bobotCUA="bobotCUP2A"
                  @bobotBKCUA="bobotBKCUP2A"
                  @skorCUB="skorCUP2B"
                  @skorBKCUB="skorBKCUP2B"
                  @bobotCUB="bobotCUP2B"
                  @bobotBKCUB="bobotBKCUP2B"
                ></form-p2>
              </div>
            </transition>

            <transition enter-active-class="animated fadeIn" mode="out-in">
              <div v-show="tabName == 'p3'">
                <form-p3
                  v-if="formStat == 'success'"
                  :form="form"
                  :jumlahIndikator="'104'"
                  :bobotSkor="'20'"
                  :mode="$route.meta.mode"
                  :updateSingleStat="updateSingleStat"
                  @saveSingle="saveSingle"
                  @prev="changeTab('p3')"
                  @next="changeTab('p4')"
                  @skorCUA="skorCUP3A"
                  @skorBKCUA="skorBKCUP3A"
                  @bobotCUA="bobotCUP3A"
                  @bobotBKCUA="bobotBKCUP3A"
                  @skorCUB="skorCUP3B"
                  @skorBKCUB="skorBKCUP3B"
                  @bobotCUB="bobotCUP3B"
                  @bobotBKCUB="bobotBKCUP3B"
                ></form-p3>
              </div>
            </transition>

            <transition enter-active-class="animated fadeIn" mode="out-in">
              <div v-show="tabName == 'p4'">
                <form-p4
                  v-if="formStat == 'success'"
                  :form="form"
                  :jumlahIndikator="'80'"
                  :bobotSkor="'20'"
                  :mode="$route.meta.mode"
                  :updateSingleStat="updateSingleStat"
                  @saveSingle="saveSingle"
                  @prev="changeTab('p3')"
                  @next="changeTab('p5')"
                  @skorCUA="skorCUP4A"
                  @skorBKCUA="skorBKCUP4A"
                  @bobotCUA="bobotCUP4A"
                  @bobotBKCUA="bobotBKCUP4A"
                  @skorCUB="skorCUP4B"
                  @skorBKCUB="skorBKCUP4B"
                  @bobotCUB="bobotCUP4B"
                  @bobotBKCUB="bobotBKCUP4B"
                ></form-p4>
              </div>
            </transition>

            <transition enter-active-class="animated fadeIn" mode="out-in">
              <div v-show="tabName == 'p5'">
                <score-p1
                  v-if="formStat == 'success'"
                  :form="form"
                  :jumlahIndikator="'56'"
                  :bobotSkor="'40'"
                  :mode="$route.meta.mode"
                  :nilaiSkorCUP1A="nilaiSkorCUP1A"
                  :nilaiBobotCUP1A="nilaiBobotCUP1A"
                  :nilaiSkorBKCUP1A="nilaiSkorBKCUP1A"
                  :nilaiBobotBKCUP1A="nilaiBobotBKCUP1A"
                  :nilaiSkorCUP1B="nilaiSkorCUP1B"
                  :nilaiBobotCUP1B="nilaiBobotCUP1B"
                  :nilaiSkorBKCUP1B="nilaiSkorBKCUP1B"
                  :nilaiBobotBKCUP1B="nilaiBobotBKCUP1B"
                  :nilaiSkorCUP1C="nilaiSkorCUP1C"
                  :nilaiBobotCUP1C="nilaiBobotCUP1C"
                  :nilaiSkorBKCUP1C="nilaiSkorBKCUP1C"
                  :nilaiBobotBKCUP1C="nilaiBobotBKCUP1C"
                  :nilaiSkorCUP1D="nilaiSkorCUP1D"
                  :nilaiBobotCUP1D="nilaiBobotCUP1D"
                  :nilaiSkorBKCUP1D="nilaiSkorBKCUP1D"
                  :nilaiBobotBKCUP1D="nilaiBobotBKCUP1D"
                  :nilaiSkorCUP1E="nilaiSkorCUP1E"
                  :nilaiBobotCUP1E="nilaiBobotCUP1E"
                  :nilaiSkorBKCUP1E="nilaiSkorBKCUP1E"
                  :nilaiBobotBKCUP1E="nilaiBobotBKCUP1E"
                  :nilaiSkorCUP1F="nilaiSkorCUP1F"
                  :nilaiBobotCUP1F="nilaiBobotCUP1F"
                  :nilaiSkorBKCUP1F="nilaiSkorBKCUP1F"
                  :nilaiBobotBKCUP1F="nilaiBobotBKCUP1F"
                ></score-p1>
                <hr />
                <score-p2
                  v-if="formStat == 'success'"
                  :form="form"
                  :jumlahIndikator="'108'"
                  :bobotSkor="'20'"
                  :mode="$route.meta.mode"
                  :nilaiSkorCUP2A="nilaiSkorCUP2A"
                  :nilaiBobotCUP2A="nilaiBobotCUP2A"
                  :nilaiSkorBKCUP2A="nilaiSkorBKCUP2A"
                  :nilaiBobotBKCUP2A="nilaiBobotBKCUP2A"
                  :nilaiSkorCUP2B="nilaiSkorCUP2B"
                  :nilaiBobotCUP2B="nilaiBobotCUP2B"
                  :nilaiSkorBKCUP2B="nilaiSkorBKCUP2B"
                  :nilaiBobotBKCUP2B="nilaiBobotBKCUP2B"
                ></score-p2>
                <hr />
                <score-p3
                  v-if="formStat == 'success'"
                  :form="form"
                  :jumlahIndikator="'104'"
                  :bobotSkor="'20'"
                  :mode="$route.meta.mode"
                  :nilaiSkorCUP3A="nilaiSkorCUP3A"
                  :nilaiBobotCUP3A="nilaiBobotCUP3A"
                  :nilaiSkorBKCUP3A="nilaiSkorBKCUP3A"
                  :nilaiBobotBKCUP3A="nilaiBobotBKCUP3A"
                  :nilaiSkorCUP3B="nilaiSkorCUP3B"
                  :nilaiBobotCUP3B="nilaiBobotCUP3B"
                  :nilaiSkorBKCUP3B="nilaiSkorBKCUP3B"
                  :nilaiBobotBKCUP3B="nilaiBobotBKCUP3B"
                ></score-p3>
                <hr />
                <score-p4
                  v-if="formStat == 'success'"
                  :form="form"
                  :jumlahIndikator="'80'"
                  :bobotSkor="'20'"
                  :mode="$route.meta.mode"
                  :nilaiSkorCUP4A="nilaiSkorCUP4A"
                  :nilaiBobotCUP4A="nilaiBobotCUP4A"
                  :nilaiSkorBKCUP4A="nilaiSkorBKCUP4A"
                  :nilaiBobotBKCUP4A="nilaiBobotBKCUP4A"
                  :nilaiSkorCUP4B="nilaiSkorCUP4B"
                  :nilaiBobotCUP4B="nilaiBobotCUP4B"
                  :nilaiSkorBKCUP4B="nilaiSkorBKCUP4B"
                  :nilaiBobotBKCUP4B="nilaiBobotBKCUP4B"
                ></score-p4>
                <hr />
                <kesimpulan
                  v-if="formStat == 'success'"
                  :form="form"
                  :mode="$route.meta.mode"
                  :nilaiTotalSkorCU="nilaiTotalSkorCU"
                  :nilaiTotalBobotCU="nilaiTotalBobotCU"
                  :nilaiTotalSkorBKCU="nilaiTotalSkorBKCU"
                  :nilaiTotalBobotBKCU="nilaiTotalBobotBKCU"
                  :a1="modelPearls ? (modelPearls.a1 * 100) : 0"
                  :e9="modelPearls ?(modelPearls.e9 * 100) : 0"
                ></kesimpulan>

                <div v-if="formStat == 'success'">
                  <!-- simpan cu -->
                  <div v-if="$route.meta.mode != 'penilaianBkcu'">
                    <div
                      class="card card-body"
                      v-if="form.p4.p4b20_cu_penilaian != null && form.p4.p4b20_cu_keterangan != null"
                    >
                      <div class="text-center d-none d-md-block">
                        <button
                          type="button"
                          class="btn btn-light"
                          @click.prevent="changeTab('p4')"
                        >
                          <i class="icon-arrow-left13"></i> Kembali
                        </button>

                        <button
                          type="submit"
                          class="btn btn-primary"
                          v-if="$route.meta.mode != 'lihat'"
                        >
                          <i class="icon-floppy-disk"></i> Simpan
                        </button>
                      </div>
                      <div class="d-block d-md-none">
                        <button
                          type="submit"
                          class="btn btn-primary btn-block"
                          v-if="$route.meta.mode != 'lihat'"
                        >
                          <i class="icon-floppy-disk"></i> Simpan
                        </button>

                        <button
                          type="button"
                          class="btn btn-light btn-block"
                          @click.prevent="changeTab('p4')"
                        >
                          <i class="icon-arrow-left13"></i> Kembali
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- simpan bkcu -->
                  <div v-if="$route.meta.mode == 'penilaianBkcu'">
                    <div class="card card-body" v-if="form.p4.p4b20_bkcu_penilaian != null">
                      <div class="text-center d-none d-md-block">
                        <button
                          type="button"
                          class="btn btn-light"
                          @click.prevent="changeTab('p4')"
                        >
                          <i class="icon-arrow-left13"></i> Kembali
                        </button>

                        <button
                          type="submit"
                          class="btn btn-primary"
                          v-if="$route.meta.mode != 'lihat'"
                        >
                          <i class="icon-floppy-disk"></i> Simpan
                        </button>
                      </div>
                      <div class="d-block d-md-none">
                        <button
                          type="submit"
                          class="btn btn-primary btn-block"
                          v-if="$route.meta.mode != 'lihat'"
                        >
                          <i class="icon-floppy-disk"></i> Simpan
                        </button>

                        <button
                          type="button"
                          class="btn btn-light btn-block"
                          @click.prevent="changeTab('p4')"
                        >
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
    <app-modal
      :show="modalShow"
      :state="modalState"
      :title="modalTitle"
      :content="modalContent"
      :color="modalColor"
      @batal="modalTutup"
      @tutup="modalTutup"
      @successOk="modalTutup"
      @failOk="modalTutup"
      @backgroundClick="modalBackgroundClick"
    >
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
import scoreP1 from "./score_p1.vue";
import scoreP2 from "./score_p2.vue";
import scoreP3 from "./score_p3.vue";
import scoreP4 from "./score_p4.vue";
import kesimpulan from "./kesimpulan.vue";
import { PusherAuth } from '../../helpers/pusherAuth.js';
import Echo from 'laravel-echo';
import Pusher from "pusher-js";

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
    scoreP1,
    scoreP2,
    scoreP3,
    scoreP4,
    kesimpulan
  },
  data() {
    return {
      title: "Self Assesment ACCESS Branding",
      titleDesc: "Menambah self assesment ACCESS branding",
      titleIcon: "icon-plus3",
      level2Title: "Assesment Access",
      kelas: "assesmentAccess",
      tabName: "p1",
      nilaiSkorCUP1A: 0,
      nilaiBobotCUP1A: 0,
      nilaiSkorBKCUP1A: 0,
      nilaiBobotBKCUP1A: 0,
      nilaiSkorCUP1B: 0,
      nilaiBobotCUP1B: 0,
      nilaiSkorBKCUP1B: 0,
      nilaiBobotBKCUP1B: 0,
      nilaiSkorCUP1C: 0,
      nilaiBobotCUP1C: 0,
      nilaiSkorBKCUP1C: 0,
      nilaiBobotBKCUP1C: 0,
      nilaiSkorCUP1D: 0,
      nilaiBobotCUP1D: 0,
      nilaiSkorBKCUP1D: 0,
      nilaiBobotBKCUP1D: 0,
      nilaiSkorCUP1E: 0,
      nilaiBobotCUP1E: 0,
      nilaiSkorBKCUP1E: 0,
      nilaiBobotBKCUP1E: 0,
      nilaiSkorCUP1F: 0,
      nilaiBobotCUP1F: 0,
      nilaiSkorBKCUP1F: 0,
      nilaiBobotBKCUP1F: 0,
      nilaiSkorCUP2A: 0,
      nilaiBobotCUP2A: 0,
      nilaiSkorBKCUP2A: 0,
      nilaiBobotBKCUP2A: 0,
      nilaiSkorCUP2B: 0,
      nilaiBobotCUP2B: 0,
      nilaiSkorBKCUP2B: 0,
      nilaiBobotBKCUP2B: 0,
      nilaiSkorCUP3A: 0,
      nilaiBobotCUP3A: 0,
      nilaiSkorBKCUP3A: 0,
      nilaiBobotBKCUP3A: 0,
      nilaiSkorCUP3B: 0,
      nilaiBobotCUP3B: 0,
      nilaiSkorBKCUP3B: 0,
      nilaiBobotBKCUP3B: 0,
      nilaiSkorCUP4A: 0,
      nilaiBobotCUP4A: 0,
      nilaiSkorBKCUP4A: 0,
      nilaiBobotBKCUP4A: 0,
      nilaiSkorCUP4B: 0,
      nilaiBobotCUP4B: 0,
      nilaiSkorBKCUP4B: 0,
      nilaiBobotBKCUP4B: 0,
      nilaiTotalSkorCU: 0,
      nilaiTotalBobotCU: 0,
      nilaiTotalSkorBKCU: 0,
      nilaiTotalBobotBKCU: 0,
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
  mounted(){
    PusherAuth();
    window.Echo.private(`assesment.channel.` + this.$route.params.id)
    .listen('AssesmentEvent',(data) => {      
      if(data.tipe == 'p1'){
        this.form.p1 = data.datas;
      }
      if(data.tipe == 'p2'){
        this.form.p2 = data.datas;
      }
      if(data.tipe == 'p3'){
        this.form.p3 = data.datas;
      }
      if(data.tipe == 'p4'){
        this.form.p4 = data.datas;
      }
      console.log(data);
    });
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
        this.title = "Ubah self assesment ACCESS branding";
        this.titleDesc = "Mengubah self assesment ACCESS branding";
        this.titleIcon = "icon-pencil5";
      } else if (this.$route.meta.mode == "penilaianBkcu") {
        this.$store.dispatch(this.kelas + "/editPenilaian", this.$route.params.id);
        this.title = "Penilaian self assesment ACCESS branding";
        this.titleDesc = "Penilaian self assesment ACCESS branding";
        this.titleIcon = "icon-law";
      } else if (this.$route.meta.mode == "lihat") {
        this.$store.dispatch(this.kelas + "/edit", this.$route.params.id);
        this.title = "Melihat self assesment ACCESS branding";
        this.titleDesc = "Melihat data self assesment ACCESS branding";
        this.titleIcon = "icon-file-eye";
      } else {
        this.title = "Tambah self assesment ACCESS branding";
        this.titleDesc = "Menambah self assesment ACCESS branding";
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
      console.log(perspektif);
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
        this.nilaiSkorCUP1A +
        this.nilaiSkorCUP1B +
        this.nilaiSkorCUP1C +
        this.nilaiSkorCUP1D +
        this.nilaiSkorCUP1E +
        this.nilaiSkorCUP1F +
        this.nilaiSkorCUP2A +
        this.nilaiSkorCUP2B +
        this.nilaiSkorCUP3A +
        this.nilaiSkorCUP3B +
        this.nilaiSkorCUP4A +
        this.nilaiSkorCUP4B;

      this.nilaiTotalSkorCU = jumlah;
      return jumlah;
    },
    totalBobotCU() {
      var jumlah = this.$options.filters.round(
        this.nilaiBobotCUP1A +
          this.nilaiBobotCUP1B +
          this.nilaiBobotCUP1C +
          this.nilaiBobotCUP1D +
          this.nilaiBobotCUP1E +
          this.nilaiBobotCUP1F +
          this.nilaiBobotCUP2A +
          this.nilaiBobotCUP2B +
          this.nilaiBobotCUP3A +
          this.nilaiBobotCUP3B +
          this.nilaiBobotCUP4A +
          this.nilaiBobotCUP4B,
        2
      );

      this.nilaiTotalBobotCU = jumlah;
      return jumlah;
    },
    totalSkorBKCU() {
      var jumlah =
        this.nilaiSkorBKCUP1A +
        this.nilaiSkorBKCUP1B +
        this.nilaiSkorBKCUP1C +
        this.nilaiSkorBKCUP1D +
        this.nilaiSkorBKCUP1E +
        this.nilaiSkorBKCUP1F +
        this.nilaiSkorBKCUP2A +
        this.nilaiSkorBKCUP2B +
        this.nilaiSkorBKCUP3A +
        this.nilaiSkorBKCUP3B +
        this.nilaiSkorBKCUP4A +
        this.nilaiSkorBKCUP4B;

      this.nilaiTotalSkorBKCU = jumlah;
      return jumlah;
    },
    totalBobotBKCU() {
      var jumlah = this.$options.filters.round(
        this.nilaiBobotBKCUP1A +
          this.nilaiBobotBKCUP1B +
          this.nilaiBobotBKCUP1C +
          this.nilaiBobotBKCUP1D +
          this.nilaiBobotBKCUP1E +
          this.nilaiBobotBKCUP1F +
          this.nilaiBobotBKCUP2A +
          this.nilaiBobotBKCUP2B +
          this.nilaiBobotBKCUP3A +
          this.nilaiBobotBKCUP3B +
          this.nilaiBobotBKCUP4A +
          this.nilaiBobotBKCUP4B,
        2
      );

      this.nilaiTotalBobotBKCU = jumlah;
      return jumlah;
    },
    // p1
    skorCUP1A(value) {
      this.nilaiSkorCUP1A = value;
    },
    bobotCUP1A(value) {
      this.nilaiBobotCUP1A = value;
    },
    skorBKCUP1A(value) {
      this.nilaiSkorBKCUP1A = value;
    },
    bobotBKCUP1A(value) {
      this.nilaiBobotBKCUP1A = value;
    },
    skorCUP1B(value) {
      this.nilaiSkorCUP1B = value;
    },
    bobotCUP1B(value) {
      this.nilaiBobotCUP1B = value;
    },
    skorBKCUP1B(value) {
      this.nilaiSkorBKCUP1B = value;
    },
    bobotBKCUP1B(value) {
      this.nilaiBobotBKCUP1B = value;
    },
    skorCUP1C(value) {
      this.nilaiSkorCUP1C = value;
    },
    bobotCUP1C(value) {
      this.nilaiBobotCUP1C = value;
    },
    skorBKCUP1C(value) {
      this.nilaiSkorBKCUP1C = value;
    },
    bobotBKCUP1C(value) {
      this.nilaiBobotBKCUP1C = value;
    },
    skorCUP1D(value) {
      this.nilaiSkorCUP1D = value;
    },
    bobotCUP1D(value) {
      this.nilaiBobotCUP1D = value;
    },
    skorBKCUP1D(value) {
      this.nilaiSkorBKCUP1D = value;
    },
    bobotBKCUP1D(value) {
      this.nilaiBobotBKCUP1D = value;
    },
    skorCUP1E(value) {
      this.nilaiSkorCUP1E = value;
    },
    bobotCUP1E(value) {
      this.nilaiBobotCUP1E = value;
    },
    skorBKCUP1E(value) {
      this.nilaiSkorBKCUP1E = value;
    },
    bobotBKCUP1E(value) {
      this.nilaiBobotBKCUP1E = value;
    },
    skorCUP1F(value) {
      this.nilaiSkorCUP1F = value;
    },
    bobotCUP1F(value) {
      this.nilaiBobotCUP1F = value;
    },
    skorBKCUP1F(value) {
      this.nilaiSkorBKCUP1F = value;
    },
    bobotBKCUP1F(value) {
      this.nilaiBobotBKCUP1F = value;
    },

    // p2
    skorCUP2A(value) {
      this.nilaiSkorCUP2A = value;
    },
    bobotCUP2A(value) {
      this.nilaiBobotCUP2A = value;
    },
    skorBKCUP2A(value) {
      this.nilaiSkorBKCUP2A = value;
    },
    bobotBKCUP2A(value) {
      this.nilaiBobotBKCUP2A = value;
    },
    skorCUP2B(value) {
      this.nilaiSkorCUP2B = value;
    },
    bobotCUP2B(value) {
      this.nilaiBobotCUP2B = value;
    },
    skorBKCUP2B(value) {
      this.nilaiSkorBKCUP2B = value;
    },
    bobotBKCUP2B(value) {
      this.nilaiBobotBKCUP2B = value;
    },

    // p3
    skorCUP3A(value) {
      this.nilaiSkorCUP3A = value;
    },
    bobotCUP3A(value) {
      this.nilaiBobotCUP3A = value;
    },
    skorBKCUP3A(value) {
      this.nilaiSkorBKCUP3A = value;
    },
    bobotBKCUP3A(value) {
      this.nilaiBobotBKCUP3A = value;
    },
    skorCUP3B(value) {
      this.nilaiSkorCUP3B = value;
    },
    bobotCUP3B(value) {
      this.nilaiBobotCUP3B = value;
    },
    skorBKCUP3B(value) {
      this.nilaiSkorBKCUP3B = value;
    },
    bobotBKCUP3B(value) {
      this.nilaiBobotBKCUP3B = value;
    },

    // p4
    skorCUP4A(value) {
      this.nilaiSkorCUP4A = value;
    },
    bobotCUP4A(value) {
      this.nilaiBobotCUP4A = value;
    },
    skorBKCUP4A(value) {
      this.nilaiSkorBKCUP4A = value;
    },
    bobotBKCUP4A(value) {
      this.nilaiBobotBKCUP4A = value;
    },
    skorCUP4B(value) {
      this.nilaiSkorCUP4B = value;
    },
    bobotCUP4B(value) {
      this.nilaiBobotCUP4B = value;
    },
    skorBKCUP4B(value) {
      this.nilaiSkorBKCUP4B = value;
    },
    bobotBKCUP4B(value) {
      this.nilaiBobotBKCUP4B = value;
    },
    changeTab(value) {
      this.tabName = value;
    }
  },
  computed: {
    ...mapGetters("auth", {
      currentUser: "currentUser"
    }),
    ...mapGetters("assesmentAccess", {
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
