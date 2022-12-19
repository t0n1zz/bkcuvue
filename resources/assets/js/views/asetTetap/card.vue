<template>
  <div class="media flex-column flex-sm-row mt-0 mb-3">
    <div class="mr-sm-3 mb-2 mb-sm-0">
      <div class="card-img-actions">
        <img
          :src="'/images/asetTetap/' + itemData.gambar + '.jpg'"
          class="img-fluid img-preview rounded"
          v-if="itemData.gambar"
        />
        <img :src="'/images/no_image.jpg'" class="img-fluid img-preview rounded" v-else />
      </div>
      <!-- divider -->
      <div class="col-16"><hr/></div>
      <div class="card-img-actions">
        <img
          :src="'/images/asetTetap/' + itemData.nota + '.jpg'"
          class="img-fluid img-preview rounded"
          v-if="itemData.nota"
        />
        <img :src="'/images/no_image.jpg'" class="img-fluid img-preview rounded" v-else />
      </div>
    </div>

    <div class="media-body">
      <div class="row">
        <div class="col-sm-4">
          <ul class="list list-unstyled mb-0">
            <li>
              <b>Kode:</b>
              <check-value :value="itemData.kode"></check-value>
            </li>
            <li>
              <b>Nama:</b>
              <check-value :value="itemData.name"></check-value>
            </li>
            <li>
              <b>Jenis</b>
              <check-value :value="itemData.jenis.name" v-if="itemData.jenis"></check-value>
              <span v-else>-</span>
            </li>
            <li>
              <b>Merk:</b>
              <check-value :value="itemData.merk"></check-value>
            </li>
            <li>
              <b>Tipe:</b>
              <check-value :value="itemData.tipe"></check-value>
            </li>
            
          </ul>
        </div>
        <div class="col-sm-4">
          <ul class="list list-unstyled mb-0">
            <li>
              <b>Lokasi:</b>
              <check-value :value="itemData.lokasi.name" v-if="itemData.lokasi"></check-value>
              <span v-else>-</span>
            </li>
            <li>
              <b>Penanggungjawab:</b>
              <check-value :value="itemData.aktivis.name" v-if="itemData.aktivis"></check-value>
              <span v-else>-</span>
            </li>
            <li>
              <b>Tgl. Beli:</b>
              <span v-html="$options.filters.date(itemData.tanggal)"></span>
            </li>
            <li>
              <b>Pembeli:</b>
              <check-value :value="itemData.pembeli.name" v-if="itemData.pembeli"></check-value>
              <span v-else>-</span>
            </li>
            <li>
              <b>Kondisi:</b>
              <check-value :value="itemData.kondisi"></check-value>
            </li>
          </ul>
        </div>
        <div class="col-sm-4">
          <ul class="list list-unstyled mb-0">
            <li>
              <b>Sub:</b>
              <check-value :value="itemData.has_aset_count" valueType="currency"></check-value>
            </li>
            <li>
              <b>Harga Induk:</b>
              <check-value :value="itemData.harga" valueType="currency"></check-value>
            </li>
            <li>
              <b>Harga Sub:</b>
              <check-value :value="itemData.harga_sub" valueType="currency"></check-value>
            </li>
            <li>
              <b>Total Harga:</b>
              <check-value :value="itemData.total_harga" valueType="currency"></check-value>
            </li>
            <li>
              <b>Bulan Penyusutan:</b>
              <check-value :value="itemData.bulan_penyusutan" valueType="currency"></check-value>
            </li>
            <li>
              <b>Sisa Bulan Penyusutan:</b>
              <check-value :value="itemData.sisa_bulan_penyusutan" valueType="currency"></check-value>
            </li>
            <li>
              <b>Sisa Penyusutan:</b>
              <check-value :value="itemData.sisa_penyusutan" valueType="currency"></check-value>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import checkValue from '../../components/checkValue.vue';
export default {
  props: ["itemData"],
  components: {
    checkValue
  }
};
</script>