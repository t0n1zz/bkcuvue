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
        <div class="content">
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
            v-if="$route.meta.mode != 'jalan'"
          ></select-data>

          <!-- table data -->
          <table-data :title="title" :kelas="kelas"></table-data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import pageHeader from "../../components/pageHeader.vue";
import tableData from "./tableCu.vue";
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
      title: "Pertemuan CU",
      kelas: "kegiatanCU",
      titleDesc: "Mengelola data Pertemuan CU",
      titleIcon: "icon-graduation2",
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
      if (this.$route.params.tipe == "diklat_cu") {
        this.title = "Diklat CU";
        this.titleDesc = "Mengelola data diklat CU";
        this.titleIcon = "icon-graduation2";
      } else if (this.$route.params.tipe == "pertemuan_cu") {
        this.title = "Pertemuan CU";
        this.titleDesc = "Mengelola data pertemuan CU";
        this.titleIcon = "icon-ungroup";
      } else if (this.$route.meta.mode == "jalan") {
        this.title = "Kegiatan CU Berjalan";
        this.titleDesc = "Mengelola data kegiatan CU berjalan";
        this.titleIcon = "icon-feed";
      }
    },
  },
  computed: {
    ...mapGetters("kegiatanCU", {
      itemData: "dataS",
      itemDataStat: "dataStatS",
    }),
  },
};
</script>