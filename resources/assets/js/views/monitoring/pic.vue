<template>
  <div>
    <div class="progress mb-3" v-if="itemDataStat != 'success'">
      <div
        class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated"
        style="width: 100%"
      >
        <span class="sr-only">100% Complete</span>
      </div>
    </div>
    <span v-else>
      <div class="media mt-0 mb-3">
        <div class="mr-3 mb-2 mb-0">
          <div class="card-img-actions">
            <img
              :src="'/images/aktivis/' + itemData.gambar + 'n.jpg'"
              class="img-fluid img-preview img-rounded"
              v-if="itemData && itemData.gambar"
            />
            <img :src="'/images/no_image_man.jpg'" class="img-fluid img-preview img-rounded" v-else />
          </div>
        </div>
        <div class="media-body">
          <b>{{ title }}</b> <br/>
          <b>Nama:</b>
          {{ itemData ? itemData.name : '-'}}
          <br />
          <b>Tingkat:</b>
          {{ itemData && itemData.pekerjaan_aktif ? $options.filters.checkTingkatAktivis(itemData.pekerjaan_aktif.tingkat) : '' }}
          <br/>
          <b>Jabatan:</b>
          {{ itemData && itemData.pekerjaan_aktif ? itemData.pekerjaan_aktif.name : '' }}
          <br/>
        </div>
      </div>
    </span>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ["title","itemData","itemDataStat"],
  methods: {}
};
</script>