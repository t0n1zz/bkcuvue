<template>
  <div class="card">
    <div class="card-header bg-white">
      <h5 class="mb-1">{{ title }}</h5>
    </div>
    <div class="card-body">
      <div class="progress" v-if="itemDataStat != 'success'">
        <div
          class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated"
          style="width: 100%"
        >
          <span class="sr-only">100% Complete</span>
        </div>
      </div>
      <span v-else>
        <div class="media flex-column flex-sm-row mt-0 mb-3" v-if="isSingle">
          <div class="mr-sm-3 mb-2 mb-sm-0">
            <div class="card-img-actions">
              <img
                :src="'/images/aktivis/' + itemData.aktivis.gambar + 'n.jpg'"
                class="img-fluid img-preview img-rounded"
                v-if="itemData.aktivis && itemData.aktivis.gambar"
              />
              <img :src="'/images/no_image_man.jpg'" class="img-fluid img-preview img-rounded" v-else />
            </div>
          </div>
          <div class="media-body">
            <b>Nama:</b>
            {{ itemData.aktivis ? itemData.aktivis.name : '-'}}
            <br />
            <b>Username:</b>
            {{ itemData.username }}
            <br />
            <b>Tingkat:</b>
            {{ itemData.aktivis && itemData.aktivis.pekerjaan_aktif ? $options.filters.checkTingkatAktivis(itemData.aktivis.pekerjaan_aktif.tingkat) : '' }}
            <br/>
            <b>Jabatan:</b>
            {{ itemData.aktivis && itemData.aktivis.pekerjaan_aktif ? itemData.aktivis.pekerjaan_aktif.name : '' }}
            <br/>
          </div>
        </div>
        <div class="media flex-column flex-sm-row mt-0 mb-3" v-for="vr in itemData" v-else>
          <div class="mr-sm-3 mb-2 mb-sm-0">
            <div class="card-img-actions">
              <img
                :src="'/images/aktivis/' + vr.aktivis.gambar + 'n.jpg'"
                class="img-fluid img-preview img-rounded"
                v-if="vr.aktivis && vr.aktivis.gambar"
              />
              <img :src="'/images/no_image_man.jpg'" class="img-fluid img-preview img-rounded" v-else />
            </div>
          </div>
          <div class="media-body">
            <b>Nama:</b>
            {{ vr.aktivis ? vr.aktivis.name : '-'}}
            <br />
            <b>Username:</b>
            {{ vr.username }}
            <br />
            <b>Tingkat:</b>
            {{ vr.aktivis && vr.aktivis.pekerjaan_aktif ? $options.filters.checkTingkatAktivis(vr.aktivis.pekerjaan_aktif.tingkat) : '' }}
            <br/>
            <b>Jabatan:</b>
            {{ vr.aktivis && vr.aktivis.pekerjaan_aktif ? vr.aktivis.pekerjaan_aktif.name : '' }}
            <br/>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ["title","itemData","itemDataStat","isSingle"],
  methods: {}
};
</script>