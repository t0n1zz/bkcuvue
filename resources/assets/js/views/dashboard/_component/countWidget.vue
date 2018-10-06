<template>
  <div class="card card-body has-bg-image" :class="color">
    <div class="media">

      <div class="media-body">
        <h3 class="mb-0" v-if="count"><check-value :value="count"></check-value></h3>
        <span class="text-uppercase font-size-xs">{{ title }}</span>
      </div>

      <div class="ml-3 align-self-center">
        <i class="icon-3x opacity-75" :class="icon"></i>
      </div>
      
    </div>
  </div>
</template>

<script>
import checkValue from '../../../components/checkValue.vue';
export default {
  props: ['title','icon','color','count'],
  components: {
    checkValue
  },
  data(){
    return {

    }
  },
  methods:{
  }
}
</script>
