<template>
  <div>
    <!-- Page header -->
    <page-header
      :title="title"
      :titleDesc="titleDesc"
      :titleIcon="titleIcon"
    ></page-header>

    <!-- page container -->
    <div class="page-content pt-0">
      <div class="content-wrapper">
        <br class="content" />

        <!-- message -->
        <message
          v-if="itemDataStat === 'fail'"
          :title="'Oops terjadi kesalahan:'"
          :errorData="itemData"
        >
        </message>

        <!-- select data -->
        <select-data
          :kelas="kelas"
          v-if="
            $route.meta.mode != 'jalan' &&
            $route.meta.mode != 'diikuti' &&
            this.$route.meta.mode != 'buka'
          "
        ></select-data>

        <!-- table data -->
        <table-data
          v-if="
            $route.meta.mode == 'jalan' ||
            $route.meta.mode == 'diikuti' ||
            this.$route.meta.mode == 'buka'
          "
          :title="title"
          :kelas="kelas"
          :itemData="itemData"
          :itemDataStat="itemDataStat"
        >
        </table-data>

				<!-- navbar -->
        <div
          class="nav-tabs-responsive"
          v-if="
            this.$route.meta.mode != 'jalan' &&
            this.$route.meta.mode != 'diikuti' &&
            this.$route.meta.mode != 'buka'
          "
        >
          <ul class="nav nav-tabs nav-tabs-solid bg-light">
            <li class="nav-item">
              <a
                href="#"
                class="nav-link"
                :class="{ active: tabName == 'indexDibuka' }"
                @click.prevent="changeTab('indexDibuka')"
                ><i class="icon-user-plus mr-2"></i> Pendaftaran Buka</a
              >
            </li>
            <li class="nav-item">
              <a
                href="#"
                class="nav-link"
                :class="{ active: tabName == 'indexDitutup' }"
                @click.prevent="changeTab('indexDitutup')"
                ><i class="icon-user-minus mr-2"></i> Pendaftaran Tutup</a
              >
            </li>
            <li class="nav-item">
              <a
                href="#"
                class="nav-link"
                :class="{ active: tabName == 'indexBerjalan' }"
                @click.prevent="changeTab('indexBerjalan')"
                ><i class="icon-feed mr-2"></i> Berjalan</a
              >
            </li>
            <li class="nav-item">
              <a
                href="#"
                class="nav-link"
                :class="{ active: tabName == 'indexTerlaksana' }"
                @click.prevent="changeTab('indexTerlaksana')"
                ><i class="icon-checkbox-checked mr-2"></i> Terlaksana</a
              >
            </li>
            <li class="nav-item">
              <a
                href="#"
                class="nav-link"
                :class="{ active: tabName == 'indexMenunggu' }"
                @click.prevent="changeTab('indexMenunggu')"
                ><i class="icon-new mr-2"></i> Menunggu</a
              >
            </li>
            <li class="nav-item">
              <a
                href="#"
                class="nav-link"
                :class="{ active: tabName == 'indexBatal' }"
                @click.prevent="changeTab('indexBatal')"
                ><i class="icon-cancel-square mr-2"></i> Batal</a
              >
            </li>
						<li class="nav-item">
              <a
                href="#"
                class="nav-link"
                :class="{ active: tabName == 'indexSemua' }"
                @click.prevent="changeTab('indexSemua')"
                ><i class="icon-list2 mr-2"></i> Semua</a
              >
            </li>
          </ul>
        </div>

        <br />
				<!-- buka -->
        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabName == 'indexDibuka'">
            <!-- table data -->
            <table-data
              :title="title"
              :kelas="kelas"
              :status="'indexDibuka'"
              :itemData="itemDataDibuka"
              :itemDataStat="itemDataDibukaStat"
            >
            </table-data>
          </div>
        </transition>

				<!-- tutup -->
        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabName == 'indexDitutup'" v-if="isIndexDitutup">
            <!-- table data -->
            <table-data
              :title="title"
              :kelas="kelas"
              :status="'indexDitutup'"
              :itemData="itemDataDitutup"
              :itemDataStat="itemDataDitutupStat"
            >
            </table-data>
          </div>
        </transition>

				<!-- berjalan -->
        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabName == 'indexBerjalan'" v-if="isIndexBerjalan">
            <!-- table data -->
            <table-data
              :title="title"
              :kelas="kelas"
              :status="'indexBerjalan'"
              :itemData="itemDataBerjalan"
              :itemDataStat="itemDataBerjalanStat"
            >
            </table-data>
          </div>
        </transition>

				<!-- terlaksana -->
        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabName == 'indexTerlaksana'" v-if="isIndexTerlaksana">
            <!-- table data -->
            <table-data
              :title="title"
              :kelas="kelas"
              :status="'indexTerlaksana'"
              :itemData="itemDataTerlaksana"
              :itemDataStat="itemDataTerlaksanaStat"
            >
            </table-data>
          </div>
        </transition>

				<!-- menunggu -->
        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabName == 'indexMenunggu'" v-if="isIndexMenunggu">
            <!-- table data -->
            <table-data
              :title="title"
              :kelas="kelas"
              :status="'indexMenunggu'"
              :itemData="itemDataMenunggu"
              :itemDataStat="itemDataMenungguStat"
            >
            </table-data>
          </div>
        </transition>

				<!-- batal -->
        <transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabName == 'indexBatal'" v-if="isIndexBatal">
            <!-- table data -->
            <table-data
              :title="title"
              :kelas="kelas"
              :status="'indexBatal'"
              :itemData="itemDataBatal"
              :itemDataStat="itemDataBatalStat"
            >
            </table-data>
          </div>
        </transition>

				<!-- semua -->
				<transition enter-active-class="animated fadeIn" mode="out-in">
          <div v-show="tabName == 'indexSemua'" v-if="isIndexSemua">
            <!-- table data -->
            <table-data
              :title="title"
              :kelas="kelas"
              :status="'indexSemua'"
              :itemData="itemData"
              :itemDataStat="itemDataStat"
            >
            </table-data>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import pageHeader from "../../components/pageHeader.vue";
import tableData from "./table.vue";
import message from "../../components/message.vue";
import selectData from "./select.vue";

export default {
  components: {
    pageHeader,
    tableData,
    message,
    selectData,
  },
  data() {
    return {
      title: "Kegiatan PUSKOPCUINA",
      kelas: "kegiatanBKCU",
      titleDesc: "Mengelola data kegiatan PUSKOPCUINA",
      titleIcon: "icon-graduation2",
      tabName: "indexDibuka",
      isIndexDitutup: false,
      isIndexBerjalan: false,
      isIndexTerlaksana: false,
      isIndexMenunggu: false,
      isIndexBatal: false,
			isIndexSemua: false,
    };
  },

  created() {
    this.fetch();
  },
  watch: {
    // check route changes
    $route(to, from) {
      this.fetch();
    },
  },
  methods: {
    fetch() {
      if (this.$route.params.tipe == "diklat_bkcu") {
        this.tabName = "indexDibuka";
        this.title = "Diklat PUSKOPCUINA";
        this.titleDesc = "Mengelola data diklat PUSKOPCUINA";
        this.titleIcon = "icon-graduation2";
      } else if (this.$route.params.tipe == "diklat_bkcu_internal") {
        this.tabName = "indexDibuka";
        this.title = "Diklat Internal PUSKOPCUINA";
        this.titleDesc = "Mengelola data diklat internal PUSKOPCUINA";
        this.titleIcon = "icon-graduation2";
      } else if (this.$route.params.tipe == "pertemuan_bkcu") {
        this.tabName = "indexDibuka";
        this.title = "Pertemuan PUSKOPCUINA";
        this.titleDesc = "Mengelola data pertemuan PUSKOPCUINA";
        this.titleIcon = "icon-ungroup";
      } else if (this.$route.params.tipe == "pertemuan_bkcu_internal") {
        this.tabName = "indexDibuka";
        this.title = "Pertemuan Internal PUSKOPCUINA";
        this.titleDesc = "Mengelola data pertemuan internal PUSKOPCUINA";
        this.titleIcon = "icon-ungroup";
      } else if (this.$route.meta.mode == "jalan") {
        this.tabName = "";
        this.title = "Kegiatan PUSKOPCUINA Berjalan";
        this.titleDesc = "Mengelola data kegiatan PUSKOPCUINA berjalan";
        this.titleIcon = "icon-feed";
      } else if (this.$route.meta.mode == "diikuti") {
        this.tabName = "";
        this.title = "Kegiatan PUSKOPCUINA Diikuti";
        this.titleDesc = "Mengelola data kegiatan PUSKOPCUINA yang diikuti";
        this.titleIcon = "icon-station";
      } else if (this.$route.meta.mode == "buka") {
        this.tabName = "";
        this.title = "Pendaftaran Kegiatan PUSKOPCUINA Dibuka";
        this.titleDesc =
          "Mengelola data Pendaftaran Kegiatan PUSKOPCUINA Dibuka";
        this.titleIcon = "icon-feed";
      }
    },
    changeTab(value) {
      this.tabName = value;
      if (value == "indexDitutup" && !this.isIndexDitutup) {
        this.isIndexDitutup = true;
      } else if (value == "indexBerjalan" && !this.isIndexBerjalan) {
        this.isIndexBerjalan = true;
      } else if (value == "indexTerlaksana" && !this.isIndexTerlaksana) {
        this.isIndexTerlaksana = true;
      } else if (value == "indexMenunggu" && !this.isIndexMenunggu) {
        this.isIndexMenunggu = true;
      } else if (value == "indexBatal" && !this.isIndexBatal) {
        this.isIndexBatal = true;
      } else if (value == "indexSemua" && !this.isIndexSemua) {
        this.isIndexSemua = true;
      }
    },
  },
  computed: {
    ...mapGetters("kegiatanBKCU", {
      itemData: "dataS",
      itemDataStat: "dataStatS",
      itemDataDibuka: "dataDibuka",
      itemDataDibukaStat: "dataDibukaStat",
      itemDataDitutup: "dataDitutup",
      itemDataDitutupStat: "dataDitutupStat",
      itemDataBerjalan: "dataBerjalan",
      itemDataBerjalanStat: "dataBerjalanStat",
      itemDataTerlaksana: "dataTerlaksana",
      itemDataTerlaksanaStat: "dataTerlaksanaStat",
      itemDataMenunggu: "dataMenunggu",
      itemDataMenungguStat: "dataMenungguStat",
      itemDataBatal: "dataBatal",
      itemDataBatalStat: "dataBatalStat",
    }),
  },
};
</script>
