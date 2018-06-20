<template>
    <div>
      
      <!-- tombol desktop-->
      <div class="text-center hidden-xs">

        <!-- tutup -->
        <button type="button" @click.prevent="cancelClick" class="btn btn-default" v-tooltip:top="'Tutup'" v-if="cancelState ==='methods'">
          <i :class="cancelIcon"></i> {{ cancelTitle }}
        </button>

        <!-- batal -->
        <router-link type="button" :to="{ name: cancelLink }" class="btn btn-default" v-tooltip:top="'Batal'" v-if="cancelState ==='link'">
          <i :class="cancelIcon"></i> {{ cancelTitle }}
        </router-link>

        <!-- simpan -->
        <button type="submit" class="btn btn-primary" :disabled="errors.any(formValidation)" v-tooltip:top="'Simpan Data'">
          <i class="icon-floppy-disk"></i> Simpan
        </button>

      </div>

      <!-- tombol mobile-->
      <div class="visible-xs">

        <!-- simpan -->
        <button type="submit" class="btn btn-primary btn-block pb-5" :disabled="errors.any(formValidation)">
          <i class="icon-floppy-disk"></i> Simpan
        </button>

        <!-- tutup -->
        <button class="btn btn-default btn-block" @click.prevent="cancelClick"  v-if="cancelState ==='methods'">
          <i :class="cancelIcon"></i> {{ cancelTitle }}
        </button>

        <!-- batal -->
        <router-link type="button" :to="{ name: cancelLink }" class="btn btn-default btn-block" v-if="cancelState ==='link'">
          <i :class="cancelIcon"></i> {{ cancelTitle }}
        </router-link>
        
      </div>

    </div>
</template>

<script type="text/javascript">

  export default {
    props: {
      formValidation:{},
      cancelTitle: {
        default: 'Batal'
      },
      cancelIcon: {
        default: 'icon-arrow-left13'
      },
      cancelLink:{
        default: ''
      },
      cancelState:{
        default: 'link'
      }
    },
    methods:{
      cancelClick(){
        this.$emit('cancelClick');
      }
    }
  }
</script>