<template>
  <div style="display:inline-block">
    <span class="badge bg-danger-400 align-self-center ml-auto">Wajib diisi</span> 
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      message: {
        default: ''
      },
    },
  }
</script>