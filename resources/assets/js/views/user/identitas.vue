<template>
  <div class="card">
    <div class="card-header bg-info text-white header-elements-inline">
      <h6 class="card-title">{{ itemData.name }}</h6>
      <div class="header-elements">
        <button type="button" class="btn btn-danger" @click.prevent="deleteSelected">
          <i class="icon-cross2 mr-2"></i> Batal
        </button>
      </div>
    </div>
    <div class="card-body">
      <div class="media flex-column flex-sm-row mt-0 mb-3">
        <div class="mr-sm-3 mb-2 mb-sm-0">
          <div class="card-img-actions">
            <img
              :src="'/images/aktivis/' + itemData.gambar + '.jpg'"
              class="img-fluid img-preview rounded"
              v-if="itemData.gambar"
            />
            <img :src="'/images/no_image.jpg'" class="img-fluid img-preview rounded" v-else />
          </div>
        </div>

        <div class="media-body">
          <div class="row">
            <div class="col-sm-6">
              <ul class="list list-unstyled mb-0">
                <li>
                  <b>Gender:</b>
                  {{ itemData.kelamin}}
                </li>
                <li>
                  <b>Tempat Lahir:</b>
                  {{ itemData.tempat_lahir}}
                </li>
                <li>
                  <b>Tgl. Lahir:</b>
                  <span v-if="itemData.tanggal_lahir" v-html="$options.filters.date(itemData.tanggal_lahir)"></span>
                  <span v-else>-</span>
                </li>
                <li>
                  <b>Status:</b>
                  {{ itemData.status}}
                </li>
                <li>
                  <b>Tinggi:</b>
                  {{ itemData.tinggi}}
                </li>
                <li>
                  <b>Agama:</b>
                  {{ itemData.agama}}
                </li>
              </ul>
            </div>
            <div class="col-sm-6">
              <ul class="list list-unstyled mb-0">
                <li v-if="itemData.pekerjaan_aktif && itemData.pekerjaan_aktif.tipe == 1">
                  <b>CU:</b>
                  {{ itemData.pekerjaan_aktif.cu.name}}
                </li>
                <li v-else-if="itemData.pekerjaan_aktif && itemData.pekerjaan_aktif.tipe == 2">
                  <b>Lembaga:</b>
                  {{ itemData.pekerjaan_aktif.lembaga_lain.name}}
                </li>
                <li v-else-if="itemData.pekerjaan_aktif && itemData.pekerjaan_aktif.tipe == 3">
                  <b>Lembaga:</b> Puskopdit BKCU Kalimantan
                </li>
                <li>
                  <b>Tingkat:</b>
                  {{ itemData.pekerjaan_aktif ? $options.filters.checkTingkatAktivis(itemData.pekerjaan_aktif.tingkat) : ''}}
                </li>
                <li>
                  <b>Jabatan:</b>
                  {{ itemData.pekerjaan_aktif ? itemData.pekerjaan_aktif.name : ''}}
                </li>
                <li>
                  <b>Pendidikan:</b>
                  {{
                  itemData.pendidikan_tertinggi ? itemData.pendidikan_tertinggi.tingkat : ''
                  + ' ' +
                  itemData.pendidikan_tertinggi ? itemData.pendidikan_tertinggi.name : ''}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ["itemData"],
  methods: {
    deleteSelected() {
      this.$emit('deleteSelected');
    },
  }
};
</script>