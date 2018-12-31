<template>
  <div>
    <!-- Page header -->
    <page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon"></page-header>

    <!-- page container -->
    <div class="page-content pt-0">
      <div class="content-wrapper">
        <div class="content">

           <div class="card" id="3_0_0_simo">
              <div class="card-header header-elements-inline">
                <h5 class="card-title">Panduan sedang dalam pengerjaan</h5>
              </div>

              <div class="card-body">
                <p class="mb-3">Panduan pengoperasian SIMO versi 3.0.0 sedang dalam tahap penyusunan, mohon maaf atas ketidaknyamanan ini.</p>

              </div>
            </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import pageHeader from "../../components/pageHeader.vue";

  export default {
    components: {
      pageHeader,
    },
    data() {
      return {
        title: 'Panduan',
        titleDesc: 'Panduan pengoperasian aplikasi',
        titleIcon: 'icon-file-text2',
      }
    },
    created(){
      window.scrollTo(0, 0);
    }
  }
</script>