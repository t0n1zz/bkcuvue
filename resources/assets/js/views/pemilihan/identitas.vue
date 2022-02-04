<template>
  <div class="media flex-column flex-sm-row mt-0 mb-0">
    <div class="mr-sm-3 mb-2 mb-sm-0">
      <div class="card-img-actions">
        <img :src="'/images/aktivis/' + itemData.gambar + '.jpg'" class="img-fluid img-preview rounded" v-if="itemData.gambar" >
        <img :src="'/images/no_image.jpg'" class="img-fluid img-preview rounded" v-else>
      </div>
    </div>
    <div class="media-body">
      <ul class="list list-unstyled mb-0">
        <li><b>Gender:</b> {{ itemData.kelamin }}</li>
        <li><b>Agama:</b> {{ itemData.agama }}</li>
        <li><b>Usia:</b> 
          <span v-if="itemData.tanggal_lahir" v-html="$options.filters.age(itemData.tanggal_lahir)"></span> tahun
        </li>
        <li><b>Tempat Lahir:</b> {{ itemData.tempat_lahir }}</li>
        <li><b>Status:</b> {{ itemData.status }}</li>
        <li><b>Pendidikan:</b> 
          <span v-if="itemData.pendidikan_tertinggi">{{ itemData.pendidikan_tertinggi.tingkat }} {{ itemData.pendidikan_tertinggi.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['itemData']
  }
</script>