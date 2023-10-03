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

        <!-- table data -->
        <table-data
          :title="title"
          :kelas="kelas"
        >
        </table-data>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import pageHeader from "../../components/pageHeader.vue";
import tableData from "./table.vue";
import message from "../../components/message.vue";
// import selectData from "./select.vue";

export default {
  components: {
    pageHeader,
    tableData,
    message,
    // selectData,
  },
  data() {
    return {
      title: "Tunjangan",
      kelas: "tunjangan",
      titleDesc: "Mengelola data tunjangan",
      titleIcon: "icon-dollar",
    };
  },

  created() {
    // this.fetch();
  },
  watch: {
    // check route changes
    $route(to, from) {
      this.fetch();
    },
  },
  methods: {
    fetch () { 

    }

  },
  computed: {
    ...mapGetters("kegiatanBKCU", {
      itemData: "dataS",
      itemDataStat: "dataStatS",
    }),
  },
};
</script>
