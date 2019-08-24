<template>
    <div>
      
      <!-- tombol desktop-->
      <div class="text-center d-none d-md-block" v-if="!isSingleButton">

        <!-- tutup -->
        <button type="button" @click.prevent="cancelClick" class="btn btn-light" v-if="cancelState ==='methods'">
          <i :class="cancelIcon"></i> {{ cancelTitle }}
        </button>

        <!-- batal -->
        <router-link type="button" :to="{ name: cancelLink }" class="btn btn-light"  v-if="cancelState ==='link'">
          <i :class="cancelIcon"></i> {{ cancelTitle }}
        </router-link>

        <!-- simpan -->
        <button type="submit" class="btn btn-primary" :disabled="errors.any(formValidation)" v-if="confirmState ==='submit'">
          <i :class="confirmIcon"></i> {{ confirmTitle }}
        </button>

        <button type="button" class="btn btn-primary" @click.prevent="confirmClick" v-else>
          <i :class="confirmIcon"></i> {{ confirmTitle }}
        </button>

      </div>

      <!-- tombol mobile-->
      <div class="d-block d-md-none" v-if="!isSingleButton">

        <!-- simpan -->
        <button type="submit" class="btn btn-primary btn-block pb-2" :disabled="errors.any(formValidation)" v-if="confirmState ==='submit'">
          <i :class="confirmIcon"></i> {{ confirmTitle }}
        </button>

        <button type="button" class="btn btn-primary btn-block pb-2" @click.prevent="confirmClick" v-else>
          <i :class="confirmIcon"></i> {{ confirmTitle }}
        </button>

        <!-- tutup -->
        <button class="btn btn-light btn-block" @click.prevent="cancelClick"  v-if="cancelState ==='methods'">
          <i :class="cancelIcon"></i> {{ cancelTitle }}
        </button>

        <!-- batal -->
        <router-link type="button" :to="{ name: cancelLink }" class="btn btn-light btn-block" v-if="cancelState ==='link'">
          <i :class="cancelIcon"></i> {{ cancelTitle }}
        </router-link>
        
      </div>

      <!-- tombol desktop-->
      <div class="text-center d-none d-md-block" v-if="isSingleButton">

        <!-- tutup -->
        <button type="button" @click.prevent="cancelClick" class="btn btn-light" v-if="cancelState ==='methods'">
          <i :class="cancelIcon"></i> {{ cancelTitle }}
        </button>

        <!-- batal -->
        <router-link type="button" :to="{ name: cancelLink }" class="btn btn-light"  v-if="cancelState ==='link'">
          <i :class="cancelIcon"></i> {{ cancelTitle }}
        </router-link>

      </div>

      <div class="d-block d-md-none" v-if="isSingleButton">

        <!-- tutup -->
        <button class="btn btn-light btn-block" @click.prevent="cancelClick"  v-if="cancelState ==='methods'">
          <i :class="cancelIcon"></i> {{ cancelTitle }}
        </button>

        <!-- batal -->
        <router-link type="button" :to="{ name: cancelLink }" class="btn btn-light btn-block" v-if="cancelState ==='link'">
          <i :class="cancelIcon"></i> {{ cancelTitle }}
        </router-link>
        
      </div>

    </div>
</template>

<script type="text/javascript">

  export default {
    props: {
      isSingleButton: false,
      formValidation:{},
      confirmTitle: {
        default: 'Simpan'
      },
      confirmIcon: {
        default: 'icon-floppy-disk'
      },
      confirmLink:{
        default: ''
      },
      confirmState:{
        default: 'submit'
      },
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
      confirmClick(){
        this.$emit('confirmClick');
      },
      cancelClick(){
        this.$emit('cancelClick');
      }
    }
  }
</script>