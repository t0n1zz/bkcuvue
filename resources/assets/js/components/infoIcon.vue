<template>
  <div style="display:inline-block">

    <!-- desktop -->
    <i class="icon-info22 d-none d-sm-block" v-tooltip="message"></i>

    <!-- mobile -->
    <small class="text-muted d-block d-sm-none"><i>{{ message }}</i></small>
    
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      message: {
        default: ''
      },
    },
    data(){
    },
    methods: {
    }
  }
</script>