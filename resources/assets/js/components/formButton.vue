<template>
    <div>
      <div class="panel panel-flat">
        <div class="panel-body">
          
          <div class="row">
            <!-- tombol desktop-->
            <div class="text-center hidden-xs">
              <router-link type="button" :to="{ name: batalRoute }" class="btn btn-default" v-tooltip:top="'Batal'">
                <i class="icon-arrow-left13"></i> Batal
              </router-link>
              <button type="submit" class="btn btn-primary" :disabled="errors.any(formValidation)" v-tooltip:top="'Simpan Data'">
                <i class="icon-floppy-disk"></i> Simpan</button>
            </div>

            <!-- tombol mobile-->
            <div class="visible-xs">
              <button type="submit" class="btn btn-primary btn-block pb-5" :disabled="errors.any(formValidation)">
                <i class="icon-floppy-disk"></i> Simpan</button>
              <router-link type="button" :to="{ name: batalRoute }" class="btn btn-default btn-block">
                <i class="icon-arrow-left13"></i> Batal
              </router-link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/javascript">

  export default {
    props: ['batalRoute','formValidation']
  }
</script>